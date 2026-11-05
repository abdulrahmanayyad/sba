import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { formatArabicText } from './arabic-helper.js';

export const COLORS = {
  primary: '#006947',
  primaryDark: '#004d34',
  primaryDeep: '#072016',
  accent: '#e07a5f',
  accentDark: '#c55e43',
  darkBg: '#0f172a',
  cardBg: '#f8faf9',
  cardBorder: '#e2e8f0',
  text: '#1e293b',
  textMuted: '#64748b',
  textLight: '#94a3b8',
  white: '#ffffff',
  highlight: '#f0fdf4',
};

const FONT_REGULAR = 'C:\\Windows\\Fonts\\arial.ttf';
const FONT_BOLD = 'C:\\Windows\\Fonts\\arialbd.ttf';

export class CorporateDocBuilder {
  constructor(options = {}) {
    this.title = options.title || 'SAMI BIN AYYAD GROUP';
    this.titleAr = options.titleAr || 'مجموعة سامي بن عياد';
    this.subtitle = options.subtitle || 'Corporate Business Document';
    this.sector = options.sector || 'Group Corporate';
    this.sectorAr = options.sectorAr || 'المجموعة المؤسسية';
    this.docCode = options.docCode || 'SBA-DOC-2026';
    this.language = options.language || 'EN'; // 'EN' | 'AR'
    this.isAr = this.language === 'AR';

    this.doc = new PDFDocument({
      size: 'A4',
      margin: 45,
      bufferPages: true,
      autoFirstPage: true,
      info: {
        Title: this.title,
        Author: 'Sami Bin Ayyad Group (SBA)',
        Subject: this.subtitle,
        Keywords: 'SBA, Sami Bin Ayyad, Construction, Environmental, Apparel, Food, Egypt',
      },
    });

    this.pageWidth = 595.28;
    this.pageHeight = 841.89;
    this.margin = 45;
    this.contentWidth = this.pageWidth - this.margin * 2;
    this.contentBottom = this.pageHeight - this.margin;

    // Set default font
    this.doc.font(FONT_REGULAR);
  }

  // Helper to get formatted text depending on language
  t(enText, arText) {
    if (this.isAr && arText) {
      return formatArabicText(arText);
    }
    return enText;
  }

  ensureSpace(neededHeight) {
    if (this.doc.y + neededHeight > this.contentBottom - 40) {
      this.doc.addPage();
      this.doc.y = this.margin + 40; // Leave space for running header
    }
  }

  // 1. COVER PAGE
  addCoverPage(meta = {}) {
    const {
      edition = '2026 Official Corporate Edition',
      editionAr = 'الإصدار المؤسسي المعتمد 2026',
      highlights = [],
    } = meta;

    // Full height background card
    this.doc.rect(this.margin, this.margin, this.contentWidth, this.pageHeight - this.margin * 2 - 20)
      .fillAndStroke(COLORS.highlight, COLORS.primary);

    // Decorative top header block
    this.doc.rect(this.margin, this.margin, this.contentWidth, 180)
      .fill(COLORS.primaryDeep);

    // Golden/Orange accent line
    this.doc.rect(this.margin, this.margin + 180, this.contentWidth, 4)
      .fill(COLORS.accent);

    // Group Eyebrow
    this.doc.fillColor(COLORS.accent)
      .font(FONT_BOLD)
      .fontSize(10)
      .text('SAMI BIN AYYAD GROUP  ·  مجموعة سامي بن عياد', this.margin + 30, this.margin + 30);

    // Document Title
    const titleText = this.isAr ? (this.titleAr || this.title) : this.title;
    const formattedTitle = this.isAr ? formatArabicText(titleText) : titleText;

    this.doc.fillColor(COLORS.white)
      .font(FONT_BOLD)
      .fontSize(22)
      .text(formattedTitle, this.margin + 30, this.margin + 55, {
        width: this.contentWidth - 60,
        align: this.isAr ? 'right' : 'left',
      });

    // Subtitle
    const subText = this.isAr ? (this.subtitleAr || this.subtitle) : this.subtitle;
    const formattedSub = this.isAr ? formatArabicText(subText) : subText;

    this.doc.fillColor('#cbd5e1')
      .font(FONT_REGULAR)
      .fontSize(11)
      .text(formattedSub, this.margin + 30, this.margin + 120, {
        width: this.contentWidth - 60,
        align: this.isAr ? 'right' : 'left',
      });

    // Sector Pill Badge
    const badgeText = this.isAr ? formatArabicText(this.sectorAr || this.sector) : this.sector;
    this.doc.rect(this.margin + 30, this.margin + 145, 200, 22)
      .fillAndStroke(COLORS.primaryDark, COLORS.accent);
    this.doc.fillColor(COLORS.white)
      .font(FONT_BOLD)
      .fontSize(9)
      .text(badgeText, this.margin + 40, this.margin + 151, { width: 180, align: 'center' });

    // Document Metadata Box
    let curY = this.margin + 210;

    // Highlights Card
    if (highlights.length > 0) {
      this.doc.rect(this.margin + 25, curY, this.contentWidth - 50, 160)
        .fillAndStroke(COLORS.white, COLORS.cardBorder);

      this.doc.fillColor(COLORS.primary)
        .font(FONT_BOLD)
        .fontSize(12)
        .text(this.isAr ? formatArabicText('المحاور الرئيسية والقدرات المؤسسية') : 'Key Document Highlights & Verified Scope', this.margin + 40, curY + 15);

      let itemY = curY + 40;
      highlights.forEach((item, idx) => {
        const itemText = this.isAr ? formatArabicText(`• ${item.ar || item}`) : `• ${item.en || item}`;
        this.doc.fillColor(COLORS.text)
          .font(FONT_REGULAR)
          .fontSize(9.5)
          .text(itemText, this.margin + 45, itemY, {
            width: this.contentWidth - 90,
            align: this.isAr ? 'right' : 'left',
          });
        itemY += 24;
      });
      curY += 180;
    }

    // Heritage & Scale Verification Card
    this.doc.rect(this.margin + 25, curY, this.contentWidth - 50, 110)
      .fillAndStroke(COLORS.white, COLORS.primary);

    this.doc.fillColor(COLORS.primaryDark)
      .font(FONT_BOLD)
      .fontSize(11)
      .text(this.isAr ? formatArabicText('الأرقام التشغيلية المعتمدة للمجموعة') : 'Official Verified Operational Benchmarks', this.margin + 40, curY + 15);

    const stats = [
      { num: '1977', labelEn: 'Foundational Heritage', labelAr: 'الجذور والخبرة الإنشائية' },
      { num: '2023', labelEn: 'Unified Corporate Group', labelAr: 'التأسيس المؤسسي الموحد' },
      { num: '4', labelEn: 'Integrated Sectors', labelAr: 'قطاعات استراتيجية' },
      { num: '39', labelEn: 'Specialized Services', labelAr: 'خدمة وتخصص تنفيذي' },
    ];

    const colW = (this.contentWidth - 70) / 4;
    stats.forEach((st, idx) => {
      const sx = this.margin + 35 + idx * colW;
      this.doc.fillColor(COLORS.accent)
        .font(FONT_BOLD)
        .fontSize(16)
        .text(st.num, sx, curY + 45, { width: colW, align: 'center' });
      this.doc.fillColor(COLORS.textMuted)
        .font(FONT_REGULAR)
        .fontSize(8)
        .text(this.isAr ? formatArabicText(st.labelAr) : st.labelEn, sx, curY + 70, { width: colW, align: 'center' });
    });

    curY += 130;

    // Bottom Footer on Cover
    this.doc.rect(this.margin + 25, curY, this.contentWidth - 50, 75)
      .fillAndStroke(COLORS.primaryDeep, COLORS.primary);

    this.doc.fillColor(COLORS.accent)
      .font(FONT_BOLD)
      .fontSize(9)
      .text('SAMI BIN AYYAD GROUP  ·  www.sami-trade.com', this.margin + 40, curY + 15, { align: 'center' });

    this.doc.fillColor('#cbd5e1')
      .font(FONT_REGULAR)
      .fontSize(8)
      .text(
        this.isAr
          ? formatArabicText('وثيقة رسمية معتمدة للتعاملات التجارية والتعاقدية والاستثمارية الدولية')
          : 'Official Corporate Documentation for International Procurement, Investors & B2B Commercial Partners',
        this.margin + 40,
        curY + 32,
        { align: 'center' }
      );

    const editionStr = this.isAr ? formatArabicText(editionAr) : edition;
    this.doc.fillColor(COLORS.white)
      .font(FONT_BOLD)
      .fontSize(8.5)
      .text(`${editionStr}  |  Doc Ref: ${this.docCode}`, this.margin + 40, curY + 52, { align: 'center' });

    // Move to next page
    this.doc.addPage();
    this.doc.y = this.margin + 40;
  }

  // 2. SECTION HEADER
  addSection(titleEn, titleAr, subtitleEn, subtitleAr) {
    this.ensureSpace(80);

    const title = this.isAr ? (titleAr || titleEn) : titleEn;
    const formattedTitle = this.isAr ? formatArabicText(title) : title;

    // Emerald accent pill / badge
    this.doc.rect(this.margin, this.doc.y, 4, 26).fill(COLORS.primary);

    this.doc.fillColor(COLORS.primaryDark)
      .font(FONT_BOLD)
      .fontSize(16)
      .text(formattedTitle, this.margin + 12, this.doc.y + 2, {
        width: this.contentWidth - 20,
        align: this.isAr ? 'right' : 'left',
      });

    this.doc.y += 6;

    if (subtitleEn || subtitleAr) {
      const sub = this.isAr ? (subtitleAr || subtitleEn) : subtitleEn;
      const formattedSub = this.isAr ? formatArabicText(sub) : sub;
      this.doc.fillColor(COLORS.textMuted)
        .font(FONT_REGULAR)
        .fontSize(9.5)
        .text(formattedSub, this.margin + 12, this.doc.y, {
          width: this.contentWidth - 20,
          align: this.isAr ? 'right' : 'left',
        });
      this.doc.y += 10;
    }

    // Divider
    this.doc.rect(this.margin, this.doc.y, this.contentWidth, 1).fill(COLORS.cardBorder);
    this.doc.y += 12;
  }

  // 3. GLASSMORPHIC CARD
  addCard(card = {}) {
    const {
      titleEn = '',
      titleAr = '',
      badgeEn = '',
      badgeAr = '',
      leadEn = '',
      leadAr = '',
      bodyEn = '',
      bodyAr = '',
      bullets = [],
      highlightBorder = false,
    } = card;

    // Estimate height
    let estHeight = 55;
    if (leadEn || leadAr) estHeight += 25;
    if (bodyEn || bodyAr) estHeight += 40;
    if (bullets.length > 0) estHeight += bullets.length * 16 + 10;

    this.ensureSpace(estHeight);

    const startY = this.doc.y;
    const borderColor = highlightBorder ? COLORS.primary : COLORS.cardBorder;

    // Card background & border
    this.doc.rect(this.margin, startY, this.contentWidth, estHeight)
      .fillAndStroke(COLORS.cardBg, borderColor);

    // Accent line on left (or right for Arabic)
    const accentX = this.isAr ? this.margin + this.contentWidth - 3 : this.margin;
    this.doc.rect(accentX, startY, 3, estHeight).fill(highlightBorder ? COLORS.accent : COLORS.primary);

    let curY = startY + 12;

    // Badge
    const badge = this.isAr ? (badgeAr || badgeEn) : badgeEn;
    if (badge) {
      const badgeFormatted = this.isAr ? formatArabicText(badge) : badge;
      this.doc.fillColor(COLORS.accent)
        .font(FONT_BOLD)
        .fontSize(8)
        .text(badgeFormatted.toUpperCase(), this.margin + 16, curY);
      curY += 12;
    }

    // Title
    const title = this.isAr ? (titleAr || titleEn) : titleEn;
    if (title) {
      const titleFormatted = this.isAr ? formatArabicText(title) : title;
      this.doc.fillColor(COLORS.text)
        .font(FONT_BOLD)
        .fontSize(11.5)
        .text(titleFormatted, this.margin + 16, curY, {
          width: this.contentWidth - 32,
          align: this.isAr ? 'right' : 'left',
        });
      curY += 16;
    }

    // Lead
    const lead = this.isAr ? (leadAr || leadEn) : leadEn;
    if (lead) {
      const leadFormatted = this.isAr ? formatArabicText(lead) : lead;
      this.doc.fillColor(COLORS.primaryDark)
        .font(FONT_BOLD)
        .fontSize(9)
        .text(leadFormatted, this.margin + 16, curY, {
          width: this.contentWidth - 32,
          align: this.isAr ? 'right' : 'left',
        });
      curY += 14;
    }

    // Body
    const body = this.isAr ? (bodyAr || bodyEn) : bodyEn;
    if (body) {
      const bodyFormatted = this.isAr ? formatArabicText(body) : body;
      this.doc.fillColor(COLORS.textMuted)
        .font(FONT_REGULAR)
        .fontSize(8.5)
        .text(bodyFormatted, this.margin + 16, curY, {
          width: this.contentWidth - 32,
          align: this.isAr ? 'right' : 'left',
          lineGap: 2,
        });
      curY += 24;
    }

    // Bullets
    if (bullets.length > 0) {
      bullets.forEach((b) => {
        const bText = this.isAr ? formatArabicText(`✓ ${b.ar || b}`) : `✓ ${b.en || b}`;
        this.doc.fillColor(COLORS.text)
          .font(FONT_REGULAR)
          .fontSize(8.5)
          .text(bText, this.margin + 20, curY, {
            width: this.contentWidth - 40,
            align: this.isAr ? 'right' : 'left',
          });
        curY += 15;
      });
    }

    this.doc.y = startY + estHeight + 12;
  }

  // 4. DATA TABLE
  addTable({ headers, rows, colWidths }) {
    const rowHeight = 22;
    const tableHeight = (rows.length + 1) * rowHeight;
    this.ensureSpace(tableHeight + 20);

    let curY = this.doc.y;

    // Header background
    this.doc.rect(this.margin, curY, this.contentWidth, rowHeight)
      .fill(COLORS.primaryDark);

    // Headers
    let curX = this.margin;
    headers.forEach((h, idx) => {
      const w = colWidths[idx] || this.contentWidth / headers.length;
      const hText = this.isAr ? formatArabicText(h.ar || h) : (h.en || h);
      this.doc.fillColor(COLORS.white)
        .font(FONT_BOLD)
        .fontSize(8.5)
        .text(hText, curX + 4, curY + 6, { width: w - 8, align: this.isAr ? 'right' : 'left' });
      curX += w;
    });

    curY += rowHeight;

    // Rows
    rows.forEach((row, rIdx) => {
      const isEven = rIdx % 2 === 0;
      this.doc.rect(this.margin, curY, this.contentWidth, rowHeight)
        .fillAndStroke(isEven ? COLORS.white : COLORS.highlight, COLORS.cardBorder);

      curX = this.margin;
      row.forEach((cell, cIdx) => {
        const w = colWidths[cIdx] || this.contentWidth / headers.length;
        const cText = this.isAr ? formatArabicText(cell.ar || cell) : (cell.en || cell);
        this.doc.fillColor(COLORS.text)
          .font(cIdx === 0 ? FONT_BOLD : FONT_REGULAR)
          .fontSize(8)
          .text(cText, curX + 4, curY + 6, { width: w - 8, align: this.isAr ? 'right' : 'left' });
        curX += w;
      });
      curY += rowHeight;
    });

    this.doc.y = curY + 14;
  }

  // 5. METRICS ROW
  addMetrics(metrics = []) {
    const boxHeight = 55;
    this.ensureSpace(boxHeight + 15);

    const startY = this.doc.y;
    const colW = this.contentWidth / metrics.length;

    metrics.forEach((m, idx) => {
      const bx = this.margin + idx * colW;
      this.doc.rect(bx + 3, startY, colW - 6, boxHeight)
        .fillAndStroke(COLORS.white, COLORS.primary);

      this.doc.fillColor(COLORS.accent)
        .font(FONT_BOLD)
        .fontSize(15)
        .text(m.value, bx + 5, startY + 10, { width: colW - 10, align: 'center' });

      const label = this.isAr ? formatArabicText(m.labelAr || m.labelEn) : m.labelEn;
      this.doc.fillColor(COLORS.textMuted)
        .font(FONT_REGULAR)
        .fontSize(7.5)
        .text(label, bx + 5, startY + 32, { width: colW - 10, align: 'center' });
    });

    this.doc.y = startY + boxHeight + 14;
  }

  // 6. CLOSING CONTACT PAGE
  addContactPage() {
    this.doc.addPage();
    this.doc.y = this.margin + 40;

    this.addSection(
      'Corporate Contact & Business Inquiry',
      'التواصل المؤسسي واستفسارات الأعمال',
      'Direct communication desk for partners, clients, and institutional inquiries',
      'المكتب التجاري والتعاقدي المباشر للتواصل مع المستثمرين والعملاء والشركاء'
    );

    // Big central glass container
    const boxHeight = 220;
    this.doc.rect(this.margin, this.doc.y, this.contentWidth, boxHeight)
      .fillAndStroke(COLORS.primaryDeep, COLORS.primary);

    let curY = this.doc.y + 20;

    this.doc.fillColor(COLORS.accent)
      .font(FONT_BOLD)
      .fontSize(16)
      .text('SAMI BIN AYYAD GROUP', this.margin + 30, curY, { align: 'center' });
    curY += 24;

    this.doc.fillColor(COLORS.white)
      .font(FONT_REGULAR)
      .fontSize(9.5)
      .text(
        this.isAr
          ? formatArabicText('المقر الرئيسي: القاهرة، جمهورية مصر العربية · سجل تجاري معتمد')
          : 'Headquarters: Cairo, Arab Republic of Egypt · Commercial Registry Certified',
        this.margin + 30,
        curY,
        { align: 'center' }
      );
    curY += 22;

    const contacts = [
      { label: 'Official Portal', val: 'www.sami-trade.com' },
      { label: 'General Commercial Desk', val: 'info@sami-trade.com' },
      { label: 'Export & International Trade', val: 'export@sami-trade.com' },
      { label: 'Procurement & Partnerships', val: 'procurement@sami-trade.com' },
      { label: 'WhatsApp Commercial Hotline', val: '+20 100 000 0000 / +20 101 234 5678' },
    ];

    contacts.forEach((c) => {
      this.doc.fillColor('#cbd5e1')
        .font(FONT_BOLD)
        .fontSize(8.5)
        .text(`${c.label}: `, this.margin + 40, curY, { continued: true });
      this.doc.fillColor(COLORS.accent)
        .font(FONT_REGULAR)
        .text(c.val);
      curY += 18;
    });

    curY += 15;
    this.doc.rect(this.margin + 30, curY, this.contentWidth - 60, 1).fill(COLORS.cardBorder);
    curY += 10;

    this.doc.fillColor('#94a3b8')
      .font(FONT_REGULAR)
      .fontSize(7.5)
      .text(
        '© 2026 Sami Bin Ayyad Group. All rights reserved. This document is certified for official business use.',
        this.margin + 30,
        curY,
        { align: 'center' }
      );

    this.doc.y = this.margin + 40 + boxHeight + 40;
  }

  // 7. FINALIZE RUNNING HEADERS, FOOTERS & PAGE NUMBERS
  finalize() {
    const range = this.doc.bufferedPageRange();
    const totalPages = range.count;

    for (let i = 0; i < totalPages; i++) {
      this.doc.switchToPage(i);

      // Skip running header & footer on cover page (page 0)
      if (i > 0) {
        // RUNNING HEADER
        this.doc.rect(this.margin, this.margin - 18, this.contentWidth, 0.75).fill(COLORS.cardBorder);

        this.doc.fillColor(COLORS.primary)
          .font(FONT_BOLD)
          .fontSize(7.5)
          .text('SAMI BIN AYYAD GROUP', this.margin, this.margin - 30);

        const secText = this.isAr ? formatArabicText(this.sectorAr || this.sector) : this.sector;
        this.doc.fillColor(COLORS.textMuted)
          .font(FONT_REGULAR)
          .fontSize(7.5)
          .text(secText, this.margin + 160, this.margin - 30, {
            width: this.contentWidth - 160,
            align: 'right',
          });

        // RUNNING FOOTER
        const footY = this.pageHeight - this.margin + 12;
        this.doc.rect(this.margin, footY - 6, this.contentWidth, 0.75).fill(COLORS.cardBorder);

        this.doc.fillColor(COLORS.textMuted)
          .font(FONT_REGULAR)
          .fontSize(7.5)
          .text('www.sami-trade.com  ·  Official Corporate Documentation', this.margin, footY);

        const pageStr = this.isAr
          ? formatArabicText(`صفحة ${i + 1} من ${totalPages}`)
          : `Page ${i + 1} of ${totalPages}`;

        this.doc.fillColor(COLORS.primaryDark)
          .font(FONT_BOLD)
          .fontSize(7.5)
          .text(pageStr, this.pageWidth - this.margin - 100, footY, { width: 100, align: 'right' });
      }
    }
  }

  saveToFile(outputPath) {
    return new Promise((resolve, reject) => {
      this.finalize();
      const dir = path.dirname(outputPath);
      if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

      const stream = fs.createWriteStream(outputPath);
      this.doc.pipe(stream);
      this.doc.end();

      stream.on('finish', () => {
        const stats = fs.statSync(outputPath);
        console.log(`✓ Generated: ${path.basename(outputPath)} (${(stats.size / 1024).toFixed(1)} KB)`);
        resolve(stats);
      });
      stream.on('error', reject);
    });
  }
}
