import { CorporateDocBuilder } from './builder.js';

async function test() {
  const b = new CorporateDocBuilder({
    title: 'Complete Corporate Profile',
    titleAr: 'الملف التعريفي الشامل للمجموعة',
    subtitle: 'Comprehensive Multidisciplinary Corporate Presentation',
    subtitleAr: 'العرض التعريفي المؤسسي الشامل للقطاعات والقدرات',
    sector: 'SAMI BIN AYYAD GROUP',
    sectorAr: 'مجموعة سامي بن عياد',
    docCode: 'SBA-CORP-2026',
    language: 'EN',
  });

  b.addCoverPage({
    edition: '2026 International Edition',
    editionAr: 'الإصدار الدولي 2026',
    highlights: [
      { en: 'Four Core Operating Sectors: Construction, Environmental, Apparel & Food', ar: 'أربعة قطاعات رئيسية متكاملة' },
      { en: 'Heritage Dating Back to 1977 with Unified Corporate Structure Founded in 2023', ar: 'تاريخ عريق منذ عام 1977 وتأسيس موحد عام 2023' },
      { en: 'Specialized Industrial Shirt Facility with 45,000 Certified Shirts/Month', ar: 'مصنع متخصص للقمصان الكلاسيكية بطاقة 45,000 قميص شهريًا' },
      { en: '39 Comprehensive Services Across Multi-Disciplinary Divisions', ar: 'منظومة خدمات تضم 39 تخصصًا استشاريًا وتنفيذيًا' },
    ],
  });

  b.addSection('Executive Summary', 'الملخص التنفيذي', 'Strategic Vision & Institutional Scope', 'الرؤية الاستراتيجية والنطاق المؤسسي');

  b.addCard({
    titleEn: 'About Sami Bin Ayyad Group',
    titleAr: 'عن مجموعة سامي بن عياد',
    badgeEn: 'Corporate Heritage & Identity',
    badgeAr: 'الهوية والتاريخ المؤسسي',
    leadEn: 'A leading integrated industrial, contracting, and trading enterprise based in Cairo, Egypt.',
    leadAr: 'كيان تجاري وصناعي واستثماري رائد مقره القاهرة، جمهورية مصر العربية.',
    bodyEn: 'Sami Bin Ayyad Group combines deep operational contracting expertise rooted in 1977 with modern industrial scale established through its unified corporate entity in 2023. Operating across four vital economic pillars, the Group serves institutional clients, international importers, and governmental agencies with verifiable quality and delivery discipline.',
    bodyAr: 'تجمع مجموعة سامي بن عياد بين الخبرة التنفيذية العريقة في قطاع المقاولات منذ 1977 والتكامل الصناعي الموحد عام 2023 عبر 4 قطاعات رئيسية تلبي متطلبات كبرى المشروعات.',
    bullets: [
      { en: 'Construction & Real Estate Development (12 specialized engineering disciplines)', ar: 'المقاولات والتطوير العقاري (12 تخصصًا هندسيًا)' },
      { en: 'Environmental Solutions & Sustainability (19 consultancy & technological services)', ar: 'البيئة والاستدامة (19 خدمة استشارية وتكنولوجية)' },
      { en: 'Apparel Manufacturing & Fashion Development (15+ lines, 250+ machines, +2,700 models)', ar: 'تصنيع الملابس (15+ خط إنتاج، 250+ ماكينة، +2,700 موديل)' },
      { en: 'Natural Products & Food Trading (6 export categories, NFSA certified facilities)', ar: 'المنتجات الطبيعية والغذائية (6 فئات تصديرية معتمدة)' },
    ],
    highlightBorder: true,
  });

  b.addMetrics([
    { value: '1977', labelEn: 'Root Heritage', labelAr: 'تاريخ التأسيس' },
    { value: '+2,700', labelEn: 'Developed Styles', labelAr: 'تصميم وموديل' },
    { value: '45,000', labelEn: 'Classic Shirts/Mo', labelAr: 'قميص شهريًا' },
    { value: '39', labelEn: 'Verified Services', labelAr: 'خدمة معتمدة' },
  ]);

  b.addContactPage();

  await b.saveToFile('public/downloads/test-output.pdf');
}

test().catch(console.error);

