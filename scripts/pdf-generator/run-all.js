import fs from 'fs';
import path from 'path';
import { ChromePdfEngine, buildGlassDocumentHtml } from './html-engine.js';
import { buildCorporateDocs } from './docs-corporate.js';
import { buildConstructionDocs } from './docs-construction.js';
import { buildEnvironmentalDocs } from './docs-environmental.js';
import { buildApparelAndFoodDocs } from './docs-apparel-food.js';

const OUT_DIR = path.resolve('public/downloads');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function main() {
  const onlyGroup = process.argv[2] || 'all';
  const engine = new ChromePdfEngine(path.resolve('public'));

  console.log('================================================================');
  console.log('SAMI BIN AYYAD GROUP — APPLE GLASSMORPHISM HTML-TO-PDF ENGINE');
  console.log('================================================================');

  await engine.start();
  const baseUrl = engine.baseUrl();

  let docs = [];
  if (onlyGroup === 'corporate' || onlyGroup === 'all') {
    docs = docs.concat(buildCorporateDocs());
  }
  if (onlyGroup === 'construction' || onlyGroup === 'all') {
    docs = docs.concat(buildConstructionDocs());
  }
  if (onlyGroup === 'environmental' || onlyGroup === 'all') {
    docs = docs.concat(buildEnvironmentalDocs());
  }
  if (onlyGroup === 'apparel-food' || onlyGroup === 'all') {
    docs = docs.concat(buildApparelAndFoodDocs());
  }

  let totalOverflows = 0;
  let pageMismatches = 0;

  for (const doc of docs) {
    const html = buildGlassDocumentHtml({
      baseUrl,
      language: doc.language,
      docCode: doc.docCode,
      sectorLabel: doc.sectorLabel,
      title: doc.title,
      subtitle: doc.subtitle,
      edition: doc.edition,
      heroImage: doc.heroImage,
      pages: doc.pages,
    });

    const outPath = path.join(OUT_DIR, doc.fileName);
    const res = await engine.renderHtmlToPdf(html, outPath);
    if (res.overflows.some((o) => o.diff > 4)) totalOverflows++;
    if (res.actualPdfPages !== res.expectedPages && res.expectedPages > 0) pageMismatches++;

    if (doc.mirrorToRoot) {
      fs.copyFileSync(outPath, path.resolve('public/SBA-Corporate-Profile.pdf'));
      console.log('  ↳ Mirrored to public/SBA-Corporate-Profile.pdf');
    }
  }

  await engine.stop();
  console.log(`\n✓ Finished ${docs.length} PDFs. Content Overflows: ${totalOverflows}, Page Mismatches: ${pageMismatches}`);
}

main().catch((err) => {
  console.error('Fatal PDF Engine Error:', err);
  process.exit(1);
});
