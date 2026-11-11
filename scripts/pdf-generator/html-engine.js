import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const CHROME_PATHS = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
];

function findBrowser() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  throw new Error('No Chromium-based browser found (Chrome or Edge).');
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.avif': 'image/avif',
  '.webp': 'image/webp',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

export class ChromePdfEngine {
  constructor(publicDir = path.resolve('public')) {
    this.publicDir = publicDir;
    this.server = null;
    this.port = 0;
    this.chromeProc = null;
    this.cdpWs = null;
    this.msgId = 0;
    this.pending = new Map();
    this.targetId = null;
    this.sessionId = null;
  }

  async start() {
    // 1. Start static HTTP server for public assets (logos & photos)
    this.server = http.createServer((req, res) => {
      const reqUrl = decodeURIComponent((req.url || '/').split('?')[0]);
      const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
      const fullPath = path.join(this.publicDir, safePath);
      if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
        const ext = path.extname(fullPath).toLowerCase();
        res.writeHead(200, { 'Content-Type': MIME_TYPES[ext] || 'application/octet-stream' });
        fs.createReadStream(fullPath).pipe(res);
      } else {
        res.writeHead(404);
        res.end('Not found');
      }
    });

    await new Promise((resolve) => {
      this.server.listen(0, '127.0.0.1', () => {
        this.port = this.server.address().port;
        resolve();
      });
    });

    // 2. Launch Chrome headless with remote debugging
    const browserPath = findBrowser();
    const debugPort = 9322 + Math.floor(Math.random() * 400);
    const userDataDir = path.join(process.env.TEMP || 'C:\\Windows\\Temp', `sba-chrome-pdf-${Date.now()}`);
    fs.mkdirSync(userDataDir, { recursive: true });
    this.userDataDir = userDataDir;

    this.chromeProc = spawn(
      browserPath,
      [
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        '--disable-dev-shm-usage',
        `--remote-debugging-port=${debugPort}`,
        `--user-data-dir=${userDataDir}`,
        'about:blank',
      ],
      { stdio: 'ignore' }
    );

    // Wait for /json/version
    let wsUrl = null;
    for (let i = 0; i < 40; i++) {
      try {
        const r = await fetch(`http://127.0.0.1:${debugPort}/json/version`);
        if (r.ok) {
          const data = await r.json();
          wsUrl = data.webSocketDebuggerUrl;
          break;
        }
      } catch {
        // retry
      }
      await new Promise((r) => setTimeout(r, 200));
    }
    if (!wsUrl) throw new Error('Timed out waiting for Chrome CDP endpoint.');

    // Connect WebSocket
    this.cdpWs = new WebSocket(wsUrl);
    await new Promise((resolve, reject) => {
      this.cdpWs.addEventListener('open', resolve, { once: true });
      this.cdpWs.addEventListener('error', reject, { once: true });
    });

    this.cdpWs.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.pending.has(msg.id)) {
        const { resolve, reject } = this.pending.get(msg.id);
        this.pending.delete(msg.id);
        if (msg.error) reject(new Error(msg.error.message));
        else resolve(msg.result);
      }
    });

    // Create a single page target and attach
    const { targetId } = await this.send('Target.createTarget', { url: `http://127.0.0.1:${this.port}/` });
    this.targetId = targetId;
    const { sessionId } = await this.send('Target.attachToTarget', { targetId, flatten: true });
    this.sessionId = sessionId;

    await this.sendSession('Page.enable');
    await this.sendSession('Runtime.enable');
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.pending.set(id, { resolve, reject });
      this.cdpWs.send(JSON.stringify({ id, method, params }));
    });
  }

  sendSession(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = ++this.msgId;
      this.pending.set(id, { resolve, reject });
      this.cdpWs.send(JSON.stringify({ id, method, params, sessionId: this.sessionId }));
    });
  }

  async renderHtmlToPdf(html, outFilePath) {
    // Get main frameId
    const tree = await this.sendSession('Page.getFrameTree');
    const frameId = tree.frameTree.frame.id;

    await this.sendSession('Page.setDocumentContent', { frameId, html });

    // Wait for fonts and images + check layout overflow
    const checkResult = await this.sendSession('Runtime.evaluate', {
      awaitPromise: true,
      returnByValue: true,
      expression: `(async () => {
        await document.fonts.ready;
        const imgs = Array.from(document.querySelectorAll('img'));
        await Promise.all(imgs.map(img => img.complete ? Promise.resolve() : new Promise(res => {
          img.addEventListener('load', res, { once: true });
          img.addEventListener('error', res, { once: true });
          setTimeout(res, 2500);
        })));
        await new Promise(r => setTimeout(r, 120));
        const sheets = Array.from(document.querySelectorAll('.sheet'));
        const overflows = sheets.map((s, idx) => {
          const frame = s.querySelector('.sheet-frame');
          const content = s.querySelector('.sheet-content');
          const diffFrame = frame ? frame.scrollHeight - frame.clientHeight : 0;
          const diffContent = content ? content.scrollHeight - content.clientHeight : 0;
          return {
            page: idx + 1,
            scrollH: frame ? frame.scrollHeight : s.scrollHeight,
            clientH: frame ? frame.clientHeight : s.clientHeight,
            diff: Math.max(diffFrame, diffContent)
          };
        });
        return { pageCount: sheets.length, overflows };
      })()`,
    });

    const layoutInfo = checkResult?.result?.value || { pageCount: 0, overflows: [] };
    for (const o of layoutInfo.overflows) {
      if (o.diff > 4) {
        console.warn(`  ⚠ Page ${o.page} overflow in ${path.basename(outFilePath)}: +${o.diff}px (scroll=${o.scrollH}, client=${o.clientH})`);
      }
    }

    const pdfRes = await this.sendSession('Page.printToPDF', {
      printBackground: true,
      preferCSSPageSize: true,
      marginTop: 0,
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      displayHeaderFooter: false,
    });

    const buf = Buffer.from(pdfRes.data, 'base64');
    fs.writeFileSync(outFilePath, buf);

    // Count actual pages in output PDF buffer
    const pdfStr = buf.toString('latin1');
    const pageMatches = pdfStr.match(/\/Type\s*\/Page\b(?!s)/g);
    const actualPdfPages = pageMatches ? pageMatches.length : layoutInfo.pageCount;

    if (actualPdfPages !== layoutInfo.pageCount) {
      console.warn(`  ⚠ Actual PDF pages (${actualPdfPages}) != expected .sheet count (${layoutInfo.pageCount}) in ${path.basename(outFilePath)}`);
    }

    console.log(`  ✓ ${path.basename(outFilePath)} (${actualPdfPages} pages, ${(buf.length / 1024).toFixed(1)} KB)`);
    return { actualPdfPages, expectedPages: layoutInfo.pageCount, overflows: layoutInfo.overflows };
  }

  async stop() {
    try {
      if (this.cdpWs) this.cdpWs.close();
    } catch {}
    try {
      if (this.chromeProc) this.chromeProc.kill('SIGKILL');
    } catch {}
    try {
      if (this.server) this.server.close();
    } catch {}
    try {
      if (this.userDataDir && fs.existsSync(this.userDataDir)) {
        fs.rmSync(this.userDataDir, { recursive: true, force: true });
      }
    } catch {}
  }

  baseUrl() {
    return `http://127.0.0.1:${this.port}`;
  }
}

/**
 * Generates full Apple-inspired Glassmorphism HTML matching www.sami-trade.com
 */
export function buildGlassDocumentHtml({
  baseUrl,
  language = 'EN',
  docCode,
  sectorLabel,
  title,
  subtitle,
  edition,
  heroImage = '/BG/Main Home Page.jpg',
  pages = [], // Array of HTML body blocks, one per A4 sheet
  metaTitle,
}) {
  const isAr = language === 'AR';
  const dir = isAr ? 'rtl' : 'ltr';
  const lang = isAr ? 'ar' : 'en';
  const logoUrl = `${baseUrl}${isAr ? '/brand/SBA%20logo%20AR.svg' : '/brand/SBA%20logo%20EN.svg'}`;
  const encodedHero = heroImage.split('/').map((s, i) => (i === 0 ? s : encodeURIComponent(s))).join('/');
  const heroBgUrl = `${baseUrl}${encodedHero}`;
  const totalPages = pages.length;

  const pageHeader = (pageIndex) => `
    <header class="glass-nav">
      <div class="nav-brand">
        <img src="${logoUrl}" alt="Sami Bin Ayyad Group" class="nav-logo" />
      </div>
      <div class="nav-center-pill">
        <span class="pulse-dot"></span>
        <span>${escapeHtml(sectorLabel)}</span>
      </div>
      <div class="nav-code-pill" dir="ltr">${escapeHtml(docCode)}</div>
    </header>
  `;

  const pageFooter = (pageIndex) => `
    <footer class="glass-footer">
      <div class="footer-left">
        <span class="footer-brand">SAMI BIN AYYAD GROUP</span>
        <span class="footer-sep">·</span>
        <span dir="ltr">www.sami-trade.com</span>
        <span class="footer-sep">·</span>
        <span dir="ltr">info@sami-trade.com</span>
      </div>
      <div class="footer-right">
        <span class="footer-badge">${isAr ? 'وثيقة مؤسسية معتمدة' : 'Verified Corporate Document'}</span>
        <span class="footer-page">${isAr ? `صفحة ${pageIndex + 1} من ${totalPages}` : `Page ${pageIndex + 1} of ${totalPages}`}</span>
      </div>
    </footer>
  `;

  const sheetsHtml = pages
    .map((pageBody, idx) => {
      const isCover = idx === 0;
      return `
        <section class="sheet ${isCover ? 'sheet-cover' : 'sheet-inner'}">
          <div class="ambient-orb orb-green"></div>
          <div class="ambient-orb orb-orange"></div>
          <div class="sheet-frame">
            ${pageHeader(idx)}
            <main class="sheet-content">
              ${
                isCover
                  ? `
                <div class="hero-island">
                  <img src="${heroBgUrl}" alt="" class="hero-bg-img" />
                  <div class="hero-scrim"></div>
                  <div class="hero-inner">
                    <div class="hero-pill">
                      <span class="pulse-dot"></span>
                      <span>${escapeHtml(edition || (isAr ? 'الإصدار المؤسسي المعتمد 2026' : '2026 Certified Corporate Edition'))}</span>
                    </div>
                    <h1 class="hero-title">${escapeHtml(title)}</h1>
                    <p class="hero-subtitle">${escapeHtml(subtitle)}</p>
                  </div>
                  <div class="hero-accent-line"></div>
                </div>
              `
                  : ''
              }
              ${pageBody}
            </main>
            ${pageFooter(idx)}
          </div>
        </section>
      `;
    })
    .join('\n');

  return `<!doctype html>
<html lang="${lang}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(metaTitle || title)}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Nunito:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
  <style>
    @page {
      size: A4;
      margin: 0;
    }

    :root {
      --brand-green: #16876C;
      --brand-green-text: #136954;
      --brand-orange: #E87D24;
      --brand-orange-text: #C45D12;
      --bg: #F3F7F5;
      --foreground: #142E28;
      --muted: #48635D;
      --secondary: #E6EFEC;
      --navy: #112A24;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      width: 210mm;
      background: var(--bg);
      color: var(--foreground);
      font-family: ${isAr ? '"IBM Plex Sans Arabic", "Cairo", sans-serif' : '"Nunito", "IBM Plex Sans Arabic", sans-serif'};
      font-size: ${isAr ? '10.4pt' : '10pt'};
      line-height: ${isAr ? '1.68' : '1.56'};
      ${isAr ? 'letter-spacing: 0 !important; direction: rtl; text-align: right;' : 'direction: ltr; text-align: left;'}
    }

    ${isAr ? `
    *, h1, h2, h3, h4, p, span, div, td, th, li {
      letter-spacing: 0 !important;
    }
    ` : ''}

    .sheet {
      position: relative;
      width: 210mm;
      height: 296.6mm;
      max-height: 296.6mm;
      overflow: hidden;
      background: linear-gradient(160deg, #F6FAF8 0%, #EEF4F1 52%, #F4F7F6 100%);
      page-break-after: always;
      break-after: page;
    }

    .sheet:last-child {
      page-break-after: auto;
      break-after: auto;
    }

    .ambient-orb {
      position: absolute;
      border-radius: 9999px;
      pointer-events: none;
      filter: blur(42px);
      z-index: 0;
    }

    .orb-green {
      width: 115mm;
      height: 115mm;
      top: -20mm;
      ${isAr ? 'right: -18mm;' : 'left: -18mm;'}
      background: radial-gradient(circle, rgba(22, 135, 108, 0.16) 0%, rgba(22, 135, 108, 0) 70%);
    }

    .orb-orange {
      width: 100mm;
      height: 100mm;
      bottom: -15mm;
      ${isAr ? 'left: -18mm;' : 'right: -18mm;'}
      background: radial-gradient(circle, rgba(232, 125, 36, 0.13) 0%, rgba(232, 125, 36, 0) 70%);
    }

    .sheet-frame {
      position: relative;
      z-index: 1;
      height: 100%;
      padding: 11mm 13mm 10mm 13mm;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 4mm;
    }

    /* Floating Glass Pill Navbar (matches SiteShell) */
    .glass-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 7px 14px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.78);
      border: 1px solid rgba(255, 255, 255, 0.92);
      box-shadow: 0 8px 24px -6px rgba(20, 46, 40, 0.08), 0 0 0 1px rgba(22, 135, 108, 0.08);
      flex-shrink: 0;
    }

    .nav-logo {
      height: 22px;
      width: auto;
      display: block;
    }

    .nav-center-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 3px 11px;
      border-radius: 999px;
      background: rgba(230, 239, 236, 0.85);
      border: 1px solid rgba(20, 46, 40, 0.10);
      font-size: 8.4pt;
      font-weight: 700;
      color: var(--foreground);
    }

    .nav-code-pill {
      font-family: 'JetBrains Mono', monospace;
      font-size: 7.5pt;
      font-weight: 600;
      color: var(--brand-green-text);
      background: rgba(22, 135, 108, 0.10);
      border: 1px solid rgba(22, 135, 108, 0.22);
      padding: 3px 10px;
      border-radius: 999px;
    }

    .pulse-dot {
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--brand-orange);
      display: inline-block;
      flex-shrink: 0;
    }

    /* Main Content Container */
    .sheet-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 11px;
      overflow: hidden;
    }

    /* Hero Glass Island */
    .hero-island {
      position: relative;
      border-radius: 24px;
      overflow: hidden;
      background: linear-gradient(135deg, #0D211C 0%, #15352E 58%, #102B24 100%);
      border: 1px solid rgba(255, 255, 255, 0.22);
      box-shadow: 0 16px 36px -10px rgba(13, 33, 28, 0.28);
      color: #FFFFFF;
      flex-shrink: 0;
    }

    .hero-bg-img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.22;
    }

    .hero-scrim {
      position: absolute;
      inset: 0;
      background: linear-gradient(${isAr ? '255deg' : '105deg'}, rgba(11, 29, 24, 0.93) 0%, rgba(16, 44, 37, 0.80) 60%, rgba(22, 135, 108, 0.35) 100%);
    }

    .hero-inner {
      position: relative;
      z-index: 2;
      padding: 20px 24px 18px 24px;
    }

    .hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 12px;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.45);
      border: 1px solid rgba(255, 255, 255, 0.22);
      font-size: 8pt;
      font-weight: 700;
      color: #F4F9F7;
      margin-bottom: 10px;
    }

    .hero-title {
      font-size: ${isAr ? '20pt' : '19pt'};
      font-weight: ${isAr ? '700' : '800'};
      line-height: ${isAr ? '1.36' : '1.22'};
      color: #FFFFFF;
      margin-bottom: 7px;
    }

    .hero-subtitle {
      font-size: ${isAr ? '10pt' : '9.8pt'};
      font-weight: 500;
      line-height: 1.55;
      color: rgba(240, 248, 245, 0.88);
      max-width: 92%;
    }

    .hero-accent-line {
      position: relative;
      z-index: 2;
      height: 3.5px;
      background: linear-gradient(90deg, var(--brand-green) 0%, var(--brand-orange) 100%);
    }

    /* Section Header Badge + Title */
    .section-header {
      display: flex;
      flex-direction: column;
      gap: 3px;
      margin-top: 2px;
    }

    .section-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      align-self: flex-start;
      padding: 3px 10px;
      border-radius: 999px;
      background: rgba(230, 239, 236, 0.85);
      border: 1px solid rgba(20, 46, 40, 0.10);
      font-size: 7.8pt;
      font-weight: 700;
      color: var(--foreground);
    }

    .section-title {
      font-size: ${isAr ? '13.5pt' : '13pt'};
      font-weight: 700;
      color: var(--foreground);
      line-height: 1.35;
    }

    .section-desc {
      font-size: 8.8pt;
      color: var(--muted);
      line-height: 1.5;
    }

    /* Apple-inspired Frosted Glass Card (.glass-box-interactive replica) */
    .glass-card {
      position: relative;
      border-radius: 20px;
      padding: 14px 18px;
      background: rgba(255, 255, 255, 0.80);
      border: 1px solid rgba(255, 255, 255, 0.95);
      box-shadow: 0 10px 26px -8px rgba(20, 46, 40, 0.08),
                  0 0 0 1px rgba(20, 46, 40, 0.07),
                  inset 0 1px 0 rgba(255, 255, 255, 1);
    }

    .glass-card.accent-card {
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.88) 0%, rgba(235, 247, 243, 0.78) 100%);
      box-shadow: 0 12px 28px -8px rgba(22, 135, 108, 0.12),
                  0 0 0 1px rgba(22, 135, 108, 0.22),
                  inset 0 1px 0 rgba(255, 255, 255, 1);
    }

    .glass-card.dark-card {
      background: linear-gradient(135deg, #102822 0%, #16382F 100%);
      border: 1px solid rgba(255, 255, 255, 0.18);
      color: #FFFFFF;
      box-shadow: 0 14px 32px -8px rgba(13, 33, 28, 0.25);
    }

    .card-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 6px;
    }

    .card-title {
      font-size: ${isAr ? '11.4pt' : '11pt'};
      font-weight: 700;
      color: var(--foreground);
      line-height: 1.38;
    }

    .dark-card .card-title {
      color: #FFFFFF;
    }

    .card-badge {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2.5px 9px;
      border-radius: 999px;
      font-size: 7.4pt;
      font-weight: 700;
      background: rgba(22, 135, 108, 0.12);
      color: var(--brand-green-text);
      border: 1px solid rgba(22, 135, 108, 0.22);
      white-space: nowrap;
    }

    .card-badge.orange {
      background: rgba(232, 125, 36, 0.12);
      color: var(--brand-orange-text);
      border-color: rgba(232, 125, 36, 0.25);
    }

    .dark-card .card-badge {
      background: rgba(255, 255, 255, 0.14);
      color: #E8F7F3;
      border-color: rgba(255, 255, 255, 0.24);
    }

    .card-lead {
      font-size: ${isAr ? '9.6pt' : '9.4pt'};
      font-weight: 600;
      color: var(--brand-green-text);
      margin-bottom: 6px;
      line-height: 1.5;
    }

    .dark-card .card-lead {
      color: #F4A261;
    }

    .card-body {
      font-size: ${isAr ? '9.2pt' : '9pt'};
      color: var(--foreground);
      line-height: ${isAr ? '1.68' : '1.56'};
    }

    .dark-card .card-body {
      color: rgba(240, 248, 245, 0.9);
    }

    .card-body p + p {
      margin-top: 7px;
    }

    .bullet-list {
      list-style: none;
      margin-top: 8px;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .bullet-list li {
      position: relative;
      padding-${isAr ? 'right' : 'left'}: 15px;
      font-size: ${isAr ? '9pt' : '8.8pt'};
      line-height: 1.55;
      color: var(--foreground);
    }

    .dark-card .bullet-list li {
      color: rgba(240, 248, 245, 0.92);
    }

    .bullet-list li::before {
      content: "";
      position: absolute;
      ${isAr ? 'right: 0;' : 'left: 0;'}
      top: 7px;
      width: 6px;
      height: 6px;
      border-radius: 999px;
      background: var(--brand-green);
    }

    /* Metric KPI Row */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }

    .kpi-grid.cols-3 {
      grid-template-columns: repeat(3, 1fr);
    }

    .kpi-card {
      border-radius: 18px;
      padding: 12px 10px;
      text-align: center;
      background: rgba(255, 255, 255, 0.84);
      border: 1px solid rgba(255, 255, 255, 0.95);
      box-shadow: 0 8px 20px -6px rgba(20, 46, 40, 0.07), 0 0 0 1px rgba(20, 46, 40, 0.06);
    }

    .kpi-value {
      font-family: ${isAr ? '"IBM Plex Sans Arabic", "Nunito", sans-serif' : '"Nunito", sans-serif'};
      font-size: 17.5pt;
      font-weight: 800;
      color: var(--brand-orange);
      line-height: 1.15;
      margin-bottom: 3px;
    }

    .kpi-value.green {
      color: var(--brand-green);
    }

    .kpi-label {
      font-size: 8.2pt;
      font-weight: 700;
      color: var(--foreground);
      line-height: 1.3;
    }

    .kpi-sub {
      font-size: 7.2pt;
      color: var(--muted);
      margin-top: 2px;
      line-height: 1.3;
    }

    /* Grids */
    .grid-2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }

    .grid-3 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
    }

    /* Rounded Glass Tables */
    .glass-table-wrap {
      border-radius: 18px;
      overflow: hidden;
      background: rgba(255, 255, 255, 0.85);
      border: 1px solid rgba(255, 255, 255, 0.95);
      box-shadow: 0 10px 24px -8px rgba(20, 46, 40, 0.08), 0 0 0 1px rgba(20, 46, 40, 0.08);
    }

    table.glass-table {
      width: 100%;
      border-collapse: collapse;
      font-size: ${isAr ? '8.5pt' : '8.3pt'};
    }

    table.glass-table thead th {
      background: #142E28;
      color: #FFFFFF;
      font-weight: 700;
      padding: 8px 10px;
      text-align: ${isAr ? 'right' : 'left'};
      border-bottom: 2px solid var(--brand-orange);
    }

    table.glass-table tbody td {
      padding: 7px 10px;
      border-bottom: 1px solid rgba(20, 46, 40, 0.08);
      vertical-align: top;
      line-height: 1.48;
      color: var(--foreground);
    }

    table.glass-table tbody tr:nth-child(even) td {
      background: rgba(22, 135, 108, 0.035);
    }

    table.glass-table tbody tr:last-child td {
      border-bottom: none;
    }

    .td-strong {
      font-weight: 700;
      color: var(--brand-green-text);
    }

    /* Notice / Policy Box */
    .policy-banner {
      border-radius: 16px;
      padding: 10px 14px;
      background: rgba(22, 135, 108, 0.09);
      border: 1px solid rgba(22, 135, 108, 0.25);
      font-size: ${isAr ? '8.5pt' : '8.3pt'};
      color: var(--foreground);
      line-height: 1.55;
      display: flex;
      align-items: flex-start;
      gap: 8px;
    }

    /* Footer Floating Glass Island */
    .glass-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      padding: 8px 16px;
      border-radius: 16px;
      background: #132C26;
      border: 1px solid rgba(255, 255, 255, 0.16);
      color: rgba(244, 249, 247, 0.92);
      font-size: 7.7pt;
      flex-shrink: 0;
    }

    .footer-left {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-wrap: wrap;
    }

    .footer-brand {
      font-weight: 800;
      color: var(--brand-orange);
    }

    .footer-sep {
      opacity: 0.45;
    }

    .footer-right {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .footer-badge {
      padding: 2px 8px;
      border-radius: 999px;
      background: rgba(22, 135, 108, 0.28);
      border: 1px solid rgba(22, 135, 108, 0.45);
      color: #DDF5EE;
      font-size: 7.2pt;
      font-weight: 700;
    }

    .footer-page {
      font-weight: 700;
      color: #FFFFFF;
    }
  </style>
</head>
<body>
  ${sheetsHtml}
</body>
</html>`;
}
