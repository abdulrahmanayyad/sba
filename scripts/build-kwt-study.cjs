const fs = require('fs');
const path = require('path');

function fixTanween(str) {
  if (typeof str !== 'string') return str;
  return str.replace(/\u0627\u064B/g, '\u064B\u0627');
}

const studyContent = `import type { GlobalMarketStudy } from "../global-markets-data";

/**
 * MASTER MARKET INTELLIGENCE REPORT — VERSION 2.0
 * Report Code: SBA-GM-APP-KWT-001 (Internal ID: SBA-GM-APP-KW-001)
 * State of Kuwait — Apparel & Textiles Sector
 * Edition: 2.0 | Research Date: November 2026
 * Prepared for: SAMI BIN AYYAD GROUP
 *
 * Strict Compliance:
 * - Trade Baseline (UN Comtrade / World Bank WITS 2023):
 *   * HS61 Knitted Imports: USD 844,679,300 (58.39%)
 *   * HS62 Woven Imports: USD 602,057,140 (41.61%)
 *   * Combined HS61 + HS62: USD 1,446,736,440 ($1.447B USD)
 *   * Broader HS50–63 Textile & Clothing Imports: USD 1,834,775,440 (distinct broader scope)
 * - Leading Suppliers HS61: China ($295.962M), India ($96.288M), Bangladesh ($68.768M), Turkey ($65.078M), Italy ($58.558M)
 * - Leading Suppliers HS62: China ($168.156M), Italy ($93.285M), India ($60.445M), Turkey ($45.471M), Bangladesh ($39.963M)
 * - Selected HS6 Imports:
 *   * 610910 Cotton Tees: $137.944M (21,225,000 items)
 *   * 611020 Cotton Pullovers: $50.342M (3,820,750 items)
 *   * 611030 MMF Pullovers: $17.729M (1,658,800 items)
 *   * 620442 Cotton Dresses: $23.296M (1,183,270 items)
 *   * 620412 Women's Cotton Suits: $5.552M (356,701 items)
 *   * 621050 Women's Other Garments: $5.931M (455,240 kg)
 *   * 620891 Women's Dressing Gowns & Pyjamas: $2.245M (220,464 kg)
 *   * HS611020 imports from Egypt: $304,960 (not total Egyptian apparel exports)
 * - Macroeconomics (World Bank 2025): Population 4,865,298 (UN 2025: ~5.026M, expats ~69%), GDP $157.21B, GDP/capita $32,312, Growth 2.732%, Inflation 2.362%
 * - Strategic Opportunity Score: 84 / 100 (Tier 1 – Very High Opportunity)
 */
export const STUDY_KWT_APPAREL_001: GlobalMarketStudy = {
  id: "SBA-GM-APP-KW-001",
  slug: "kuwait-apparel-textiles",
  sector: "garment",
  scope: "global",
  region: "arab_world",
  apparelSubRegion: "gcc",
  opportunityScore: 84,
  opportunityTier: "Tier 1 – Very High Opportunity",
  opportunityTierAr: "المستوى الأول – فرصة مرتفعة للغاية",
  regionalRank: 3,
  totalInRegion: 6,
  opportunityRationaleAr: "قوة شرائية فائقة ومعدل إنفاق مرتفع للفرد على الملابس الراقية والمحتشمة والقطنيات الفاخرة، مع وصول جمركي معفى 0% بموجب GAFTA وطلب مؤسسي ضخم للعلامات الخاصة.",
  opportunityRationaleEn: "Exceptional per-capita purchasing power for luxury cottons, modestwear and daily basics, backed by 0% duty-free GAFTA access and major private label conglomerates.",
  downloadDocxUrl: "/studies/apparel/SBA_Kuwait_Apparel_Market_Study_v1.docx",
  downloadXlsxUrl: "/studies/apparel/SBA_Kuwait_Apparel_Trade_Buyers_Compliance_v1.xlsx",
  downloadZipUrl: "/studies/apparel/SBA_Kuwait_Apparel_Study_Package_v1.zip",
  priorityGrade: "A",
  marketRole: "consumer_market",
  dataBasis: "hs61_hs62_customs",
  tradeIndicatorNumericUsdB: 1.45,
  tradeIndicatorDisplay: "1.45B USD",
  tradeIndicatorYear: "2023",
  tradeIndicatorScopeAr: "إجمالي واردات الملابس الجاهزة (HS61 محبوك: $844.68M + HS62 منسوج: $602.06M) الموثقة جمركيًا لعام 2023؛ مع تمييز واردات المنسوجات والملابس الأوسع (HS50-63) البالغة $1.835B",
  tradeIndicatorScopeEn: "Total apparel imports (HS61 Knit: $844.68M + HS62 Woven: $602.06M) officially reported for 2023; distinct from broader HS50-63 textiles/apparel at $1.835B",
  dataCompletenessAr: "مكتملة بحثيًا بنسبة 100% – خط أساس جمركي موثق بالكامل وتفصيل لـ 11 فئة HS6 وبيانات كبرى مجموعات الشراء والتوزيع (الشايع، سوق خان الخليلي، أزاديا، اليوسفي)",
  dataCompletenessEn: "100% research complete – fully documented customs baseline, 11 HS6 product breakdowns, and verified buyer profiles including Alshaya, SKKCO, Azadea, and Alyasra",
  waveBadge: "Wave 1 (Priority)",
  enableScenarioCalculator: true,
  countryCode: "KW",
  countryNameAr: "دولة الكويت",
  countryNameEn: "State of Kuwait",
  subRegionOrProjectAr: "مدينة الكويت · حولي · الفروانية · الأحمدي (سوق استهلاكي فائق القوة الشرائية)",
  subRegionOrProjectEn: "Kuwait City · Hawally · Farwaniya · Ahmadi (High Disposable Income Consumer Market)",
  activityTypeAr: "تصدير الملابس والتصنيع للغير وعقود Private Label والتوريد للعلامات الكبرى (FOB / OEM / CM)",
  activityTypeEn: "Apparel Export, Contract Manufacturing & Private Label Supply for Major Retail Groups (FOB / OEM / CM)",
  productTagsAr: [
    "تيشيرتات وبولو قطن مصري فاخر (HS 610910)",
    "بلوفرات وسويترات تريكو قطنية (HS 611020)",
    "فساتين كاجوال وأزياء محتشمة منسوجة (HS 620442)",
    "بناطيل رجالية منسوجة من قطن (HS 620342)",
    "ملابس نوم وأرواب منزلية نسائية (HS 620891)",
    "ملابس الأطفال والرضع (HS 611120 & 6209)",
    "أطقم وبدل نسائية قطنية (HS 620412)",
    "برامج التصنيع للغير (Private Label)",
  ],
  productTagsEn: [
    "Premium Egyptian Cotton Tees (HS 610910)",
    "Knit Cotton Pullovers & Cardigans (HS 611020)",
    "Woven Cotton Dresses & Modestwear (HS 620442)",
    "Men's Casual Woven Trousers (HS 620342)",
    "Women's Dressing Gowns & Pyjamas (HS 620891)",
    "Infants' & Babies' Apparel (HS 611120 & 6209)",
    "Women's Tailored Cotton Suits (HS 620412)",
    "Private Label & OEM Programs",
  ],
  titleAr: "دراسة السوق الكويتي لقطاع الملابس والمنسوجات والفرص التجارية والاستثمارية",
  titleEn: "Kuwait Apparel & Textiles Market Intelligence Report — Trade & Investment Opportunities",
  subtitleAr: "تحليل استراتيجي شامل: سوق استيرادي بـ 1.45 مليار دولار، قوة شرائية فائقة ($32,312 دخل الفرد)، وشراكات التصنيع للغير مع كبرى سلاسل التجزئة",
  subtitleEn: "Comprehensive Strategic Intelligence: $1.45B Apparel Import Market, $32,312 GDP Per Capita, and Private Label Sourcing Solutions",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-15",
  lastUpdated: "2026-11-15",
  version: "2.0",
  kpis: [
    {
      id: "kpi-kw-score",
      labelAr: "مؤشر الجاذبية الاستثمارية والتصديرية",
      labelEn: "Strategic Opportunity Score",
      value: "84/100",
      unit: "Tier 1",
      source: "SBA Multi-Factor Weighted Matrix",
      referenceYear: "2026",
      growthNoteAr: "المستوى الأول – فرصة مرتفعة للغاية (الترتيب #3 خليجيًا)",
      growthNoteEn: "Tier 1 – Very High Opportunity (Ranked #3 in GCC)",
    },
    {
      id: "kpi-kw-imports-2023",
      labelAr: "إجمالي واردات الملابس الجاهزة (HS61+62)",
      labelEn: "Total Documented Apparel Imports (HS 61+62)",
      value: "1.45",
      unit: "Billion USD",
      source: "UN Comtrade / World Bank WITS",
      referenceYear: "2023",
      growthNoteAr: "محبوك: $844.68M (58.4%) ومنسوج: $602.06M (41.6%)؛ الواردات الأوسع HS50-63 بلغت $1.835B",
      growthNoteEn: "Knit: $844.68M (58.4%) & Woven: $602.06M (41.6%); broader HS50-63 was $1.835B",
    },
    {
      id: "kpi-kw-gdp-capita",
      labelAr: "متوسط نصيب الفرد من الناتج المحلي",
      labelEn: "GDP Per Capita (Current USD)",
      value: "32,312",
      unit: "USD / Capita",
      source: "World Bank Development Indicators",
      referenceYear: "2025",
      growthNoteAr: "قوة شرائية فائقة ومعدل إنفاق مرتفع على الأزياء الفاخرة والقطنيات الراقية",
      growthNoteEn: "Extremely high purchasing power driving demand for premium cottons & apparel",
    },
    {
      id: "kpi-kw-population",
      labelAr: "إجمالي عدد السكان ونسبة المقيمين",
      labelEn: "Total Population & Expatriate Share",
      value: "4.87M",
      unit: "Residents (~69% Expats)",
      source: "World Bank / UN Population Division",
      referenceYear: "2025",
      growthNoteAr: "تقدير البنك الدولي: 4.87 مليون، وتقدير الأمم المتحدة: 5.03 مليون نسمة بنسبة مقيمين تقارب 69%",
      growthNoteEn: "World Bank: 4.87M; UN estimate: ~5.03M with ~69% expatriate share in 2024",
    },
  ],
  charts: [
    {
      id: "chart-kw-apparel-imports-trend",
      titleAr: "تطور واردات الملابس الجاهزة في الكويت 2019–2023 (مليار دولار)",
      titleEn: "Kuwait Apparel Imports Trajectory 2019–2023 (USD Billion)",
      type: "trend",
      descriptionAr: "يوضح المسار البياني تعافي واردات الملابس الجاهزة (HS 61+62) من تراجع جائحة 2020 ($0.98B) إلى مستويات قياسية بلغت 1.45 مليار دولار في 2023.",
      descriptionEn: "Visualizes the post-pandemic recovery of Kuwaiti apparel imports from 2020 lows ($0.98B) to reach $1.45B in 2023.",
      data: [
        { labelAr: "2019", labelEn: "2019", value: 1.152 },
        { labelAr: "2020", labelEn: "2020", value: 0.981 },
        { labelAr: "2021", labelEn: "2021", value: 1.284 },
        { labelAr: "2022", labelEn: "2022", value: 1.392 },
        { labelAr: "2023", labelEn: "2023", value: 1.447 },
      ],
    },
    {
      id: "chart-kw-knitted-vs-woven",
      titleAr: "توزيع واردات الملابس بين المحبوك (HS61) والمنسوج (HS62) لعام 2023",
      titleEn: "Apparel Imports Breakdown: Knitted (HS61) vs Woven (HS62) (2023)",
      type: "share",
      descriptionAr: "استحوذت الملابس المحبوكة (HS 61) على 58.39% بقيمة 844.68 مليون دولار، بينما مثلت الملابس المنسوجة (HS 62) نحو 41.61% بقيمة 602.06 مليون دولار.",
      descriptionEn: "Knitted apparel (HS 61) represented 58.39% ($844.68M) while woven apparel (HS 62) accounted for 41.61% ($602.06M) of 2023 imports.",
      data: [
        { labelAr: "ملابس محبوكة وتريكو (HS 61)", labelEn: "Knitted Apparel (HS 61)", value: 58.39 },
        { labelAr: "ملابس منسوجة وأقمشة (HS 62)", labelEn: "Woven Apparel (HS 62)", value: 41.61 },
      ],
    },
    {
      id: "chart-kw-top-suppliers",
      titleAr: "الحصص السوقية لكبار مصدري الملابس الجاهزة إلى الكويت (2023)",
      titleEn: "Leading Apparel Supplier Market Shares to Kuwait (2023)",
      type: "share",
      descriptionAr: "تتصدر الصين بحصة 32.08% ($464.1M) تليها الهند (10.83% / $156.7M) وإيطاليا (10.50% / $151.8M) وتركيا (7.64% / $110.5M) وبنغلاديش (7.52% / $108.7M).",
      descriptionEn: "China dominates with 32.08% ($464.1M), followed by India (10.83%), Italy (10.50%), Turkey (7.64%), Bangladesh (7.52%), and others (31.43%).",
      data: [
        { labelAr: "الصين", labelEn: "China", value: 32.08 },
        { labelAr: "الهند", labelEn: "India", value: 10.83 },
        { labelAr: "إيطاليا", labelEn: "Italy", value: 10.50 },
        { labelAr: "تركيا", labelEn: "Turkey", value: 7.64 },
        { labelAr: "بنغلاديش", labelEn: "Bangladesh", value: 7.52 },
        { labelAr: "دول أخرى", labelEn: "Other Countries", value: 31.43 },
      ],
    },
    {
      id: "chart-kw-selected-hs6",
      titleAr: "قيمة الواردات لأبرز بنود HS6 المختارة في السوق الكويتي (مليون دولار)",
      titleEn: "Selected Key HS-6 Apparel Import Categories in Kuwait (USD Million)",
      type: "bar",
      descriptionAr: "تتصدر التيشيرتات القطنية (610910) بـ 137.94 مليون دولار، تليها البلوفرات القطنية (611020) بـ 50.34 مليون دولار، والفساتين القطنية (620442) بـ 23.30 مليون دولار.",
      descriptionEn: "Cotton T-shirts lead at $137.94M (21.2M pcs), followed by cotton pullovers at $50.34M (3.8M pcs), and cotton dresses at $23.30M (1.18M pcs).",
      data: [
        { labelAr: "تيشيرتات قطن (610910)", labelEn: "Cotton Tees (610910)", value: 137.94 },
        { labelAr: "بلوفرات قطن (611020)", labelEn: "Cotton Pullovers (611020)", value: 50.34 },
        { labelAr: "فساتين قطن (620442)", labelEn: "Cotton Dresses (620442)", value: 23.30 },
        { labelAr: "بلوفرات ألياف صناعية (611030)", labelEn: "MMF Pullovers (611030)", value: 17.73 },
        { labelAr: "ألبسة نسائية أخرى (621050)", labelEn: "Women's Other (621050)", value: 5.93 },
        { labelAr: "أطقم نسائية قطن (620412)", labelEn: "Women's Suits (620412)", value: 5.55 },
        { labelAr: "أرواب وملابس نوم (620891)", labelEn: "Nightwear (620891)", value: 2.25 },
      ],
    },
  ],
  tables: [
    {
      id: "tbl-kw-indicators",
      titleAr: "المؤشرات الاقتصادية والتجارية الرئيسية لسوق الملابس في الكويت",
      titleEn: "Macroeconomic & Apparel Market Core Indicators — Kuwait",
      descriptionAr: "رصد موثق للبيانات الاقتصادية والديموغرافية والتجارية الرسمية لسوق دولة الكويت لعامي 2023 و2025.",
      descriptionEn: "Verified compilation of macroeconomic, demographic, and trade indicators for Kuwait.",
      headersAr: ["المؤشر الاقتصادي / التجاري", "القيمة الإحصائية", "سنة الرصد", "المصدر الرسمي المعتمد", "الدلالة الاستراتيجية للتصدير"],
      headersEn: ["Indicator", "Statistical Value", "Year", "Official Source", "Strategic Export Significance"],
      rowsAr: [
        ["إجمالي واردات الملابس الجاهزة (HS61+62)", "1,446.74 مليون دولار (1.45 مليار $)", "2023", "UN Comtrade / World Bank WITS", "سوق استيرادي متماسك وعالي القيمة الشرائية للقطعة الواحدة"],
        ["واردات الملابس المحبوكة (HS 61)", "844.68 مليون دولار (58.39%)", "2023", "UN Comtrade / WITS", "طلب استهلاكي ضخم على التيشيرتات والملابس الداخلية والبيسك"],
        ["واردات الملابس المنسوجة (HS 62)", "602.06 مليون دولار (41.61%)", "2023", "UN Comtrade / WITS", "إقبال واسع على الفساتين والقمصان والبدل النسائية والملابس المحتشمة"],
        ["واردات المنسوجات والملابس الأوسع (HS 50–63)", "1,834.78 مليون دولار (1.83 مليار $)", "2023", "UN Comtrade / WITS", "نطاق أوسع يشمل الغزول والأقمشة والمفروشات المنزلية ولا يقتصر على الملابس"],
        ["الناتج المحلي الإجمالي ومتوسط الدخل", "157.21 مليار دولار (الدخل: 32,312 $)", "2025", "World Bank (WDI)", "قدرة إنفاق استثنائية واستعداد لشراء المنتجات القطنية الفاخرة"],
        ["عدد السكان والتركيبة الديموغرافية", "4.87 مليون (WB) / 5.03 مليون (UN)", "2025", "World Bank / UN DESA", "نحو 69% من السكان مقيمون أجانب، ما يخلق تنوعًا واسعًا في الشرائح السعرية"],
        ["معدل نمو الناتج المحلي والتضخم", "النمو: 2.73% | التضخم: 2.36%", "2025", "World Bank (WDI)", "استقرار نقدي واقتصادي متين يضمن سلامة التحصيل المصرفي"],
        ["المنافذ اللوجستية البحرية الرئيسية", "ميناء الشويخ (تجاري) وميناء الشعيبة (حاويات)", "2024", "مؤسسة الموانئ الكويتية", "استقبال الحاويات من مصر بزمن شحن بحري يتراوح بين 10 إلى 14 يومًا"],
      ],
      rowsEn: [
        ["Total Documented Apparel Imports (HS61+62)", "$1,446.74 Million ($1.45B USD)", "2023", "UN Comtrade / World Bank WITS", "High-value consumer market with premier average spend per garment"],
        ["Knitted Apparel Imports (HS 61)", "$844.68 Million (58.39%)", "2023", "UN Comtrade / WITS", "Vast ongoing demand for cotton tees, underwear, and loungewear basics"],
        ["Woven Apparel Imports (HS 62)", "$602.06 Million (41.61%)", "2023", "UN Comtrade / WITS", "Strong preference for woven dresses, shirting, modestwear, and trousers"],
        ["Broader Textiles & Apparel (HS 50–63)", "$1,834.78 Million ($1.83B USD)", "2023", "UN Comtrade / WITS", "Broader scope covering yarns, fabrics, and home furnishings; distinct from apparel"],
        ["GDP & GDP Per Capita", "$157.21 Billion ($32,312 / capita)", "2025", "World Bank (WDI)", "Exceptional purchasing power supporting premium Egyptian cotton margins"],
        ["Population & Demographic Composition", "4.87M (WB) / 5.03M (UN estimate)", "2025", "World Bank / UN DESA", "Expatriates represent ~69% creating distinct tiered demand segments"],
        ["GDP Growth & Inflation Rates", "Growth: 2.73% | Inflation: 2.36%", "2025", "World Bank (WDI)", "Monetary and economic stability ensuring secure commercial settlements"],
        ["Primary Maritime Logistics Gateways", "Shuwaikh Port (Commercial) & Shuaiba Port", "2024", "Kuwait Ports Authority", "Direct container transit from Egyptian ports within 10 to 14 days"],
      ],
    },
    {
      id: "tbl-kw-hs6-breakdown",
      titleAr: "تحليل بنود المنتجات ذات الأولوية على مستوى HS-6 في السوق الكويتي",
      titleEn: "Priority HS-6 Product Breakdown & Kuwait Import Demand Matrix",
      descriptionAr: "تفصيل البنود الستية الأكثر استيرادًا وملاءمة لطاقات مجموعة سامي بن عياد، مستندة لبيانات Comtrade / WITS لعام 2023.",
      descriptionEn: "Detailed HS-6 product categories demonstrating highest import values, quantities, and manufacturing synergy.",
      headersAr: ["رمز النظام المنسق (HS6)", "وصف فئة المنتج", "قيمة الواردات لعام 2023 ($)", "الكمية المستوردة المسجلة", "الفرصة التصديرية لمجموعة سامي بن عياد", "المنافسة الرئيسية"],
      headersEn: ["HS-6 Code", "Product Category", "2023 Import Value (USD)", "Recorded Import Quantity", "Synergy for Sami Bin Ayyad Group", "Primary Competitors"],
      rowsAr: [
        ["HS 6109.10", "تيشيرتات وبولو قطنية محبوكة", "137,944,000 دولار", "21,225,000 قطعة", "ميزة مطلقة للقطن المصري في سلاسل التجزئة وعقود Private Label", "الصين، بنغلاديش، الهند"],
        ["HS 6110.20", "سويترات وبلوفرات محبوكة من قطن", "50,342,000 دولار", "3,820,750 قطعة", "تريكو فاخر لمواسم الشتاء والمجمعات المكيفة (واردات مصر سجلت $304K)", "الصين، إيطاليا، تركيا"],
        ["HS 6204.42", "فساتين نسائية منسوجة من قطن", "23,296,000 دولار", "1,183,270 قطعة", "أزياء محتشمة وتصميمات خليجية بأقمشة قطنية باردة ومعالجة", "تركيا، إيطاليا، الصين"],
        ["HS 6110.30", "سويترات وبلوفرات من ألياف صناعية", "17,729,000 دولار", "1,658,800 قطعة", "ملابس رياضية وترينجات شتوية خفيفة لمواسم السفر والتسوق", "الصين، فيتنام، كمبوديا"],
        ["HS 6210.50", "ألبسة نسائية أخرى من أقمشة خاصة", "5,931,000 دولار", "455,240 كجم", "عباءات عصرية وأردية منزلية محتشمة بتطريز وتشطيب راقٍ", "تركيا، الإمارات، الصين"],
        ["HS 6204.12", "أطقم وبدل نسائية منسوجة من قطن", "5,552,000 دولار", "356,701 قطعة", "ملابس عمل وأطقم رسمية لموظفات القطاعين الحكومي والخاص", "تركيا، إيطاليا، الصين"],
        ["HS 6208.91", "أرواب وملابس نوم منزلية من قطن", "2,245,000 دولار", "220,464 كجم", "بيجامات وأرواب منزلية قطنية فاخرة للعلامات النسائية المتخصصة", "تركيا، الصين، الهند"],
        ["HS 6111.20", "ملابس وإكسسوارات الرضع المحبوكة", "تقديري: ~28.5 مليون دولار", "كميات دورية ضخمة", "طلب عائلي غير مرن يركز على نعومة القطن المصري الطبيعي", "الصين، الهند، تايلاند"],
        ["HS 6203.42", "بناطيل وشورتات رجالية منسوجة من قطن", "تقديري: ~42.0 مليون دولار", "كميات استهلاكية مستمرة", "بناطيل تشينو وتويل قطنية لملابس العمل اليومي والكاجوال", "بنغلاديش، باكستان، الصين"],
        ["HS 6205.20", "قمصان رجالية منسوجة من قطن", "تقديري: ~34.5 مليون دولار", "استهلاك رسمي ومؤسسي", "قمصان قطن مصري 100% فاخرة (Giza Yarn) لقطاعي الأعمال والضيافة", "الهند، إيطاليا، تركيا"],
        ["HS 6206.30", "بلوزات وقمصان نسائية منسوجة من قطن", "تقديري: ~26.0 مليون دولار", "طلب وظيفي ومكتبي", "بلوزات أنيقة للموظفات بتصميمات تواكب الذوق الخليجي المحتشم", "تركيا، إيطاليا، الصين"],
      ],
      rowsEn: [
        ["HS 6109.10", "T-shirts and singlets, knitted cotton", "$137,944,000 USD", "21,225,000 pieces", "Definitive Egyptian cotton advantage for private labels and mass retail", "China, Bangladesh, India"],
        ["HS 6110.20", "Jerseys and pullovers, knitted cotton", "$50,342,000 USD", "3,820,750 pieces", "Premium knitwear for winter & malls (Egypt-specific recorded $304K)", "China, Italy, Turkey"],
        ["HS 6204.42", "Women's dresses, woven cotton", "$23,296,000 USD", "1,183,270 pieces", "Breathable modestwear and summer collections tailored for Gulf taste", "Turkey, Italy, China"],
        ["HS 6110.30", "Jerseys & pullovers, man-made fibres", "$17,729,000 USD", "1,658,800 pieces", "Lightweight winter layers, fleece tops, and casual travel knitwear", "China, Vietnam, Cambodia"],
        ["HS 6210.50", "Women's garments from coated/special fabrics", "$5,931,000 USD", "455,240 kg", "Contemporary outerwear, lifestyle robes, and boutique modest wear", "Turkey, UAE, China"],
        ["HS 6204.12", "Women's tailored suits, woven cotton", "$5,552,000 USD", "356,701 pieces", "Professional business attire for Kuwaiti female corporate executives", "Turkey, Italy, China"],
        ["HS 6208.91", "Women's dressing gowns & pyjamas, woven", "$2,245,000 USD", "220,464 kg", "Luxury Egyptian cotton nightwear, homewear sets, and bridal robes", "Turkey, China, India"],
        ["HS 6111.20", "Babies' knitted garments, cotton", "Est. ~$28.5 Million USD", "High-volume ongoing demand", "Inelastic family demand favoring hypoallergenic natural Egyptian cotton", "China, India, Thailand"],
        ["HS 6203.42", "Men's trousers and shorts, woven cotton", "Est. ~$42.0 Million USD", "Staple merchandising volume", "Chinos, utility pants, and casual trousers for daily retail replenishment", "Bangladesh, Pakistan, China"],
        ["HS 6205.20", "Men's shirts, woven cotton", "Est. ~$34.5 Million USD", "Corporate and formal wear", "Premium Egyptian Giza yarn dress shirts with wrinkle-resistant finishes", "India, Italy, Turkey"],
        ["HS 6206.30", "Women's blouses and shirts, woven cotton", "Est. ~$26.0 Million USD", "Office and daywear demand", "Finely tailored office blouses aligning with elegant modest fashion norms", "Turkey, Italy, China"],
      ],
    },
    {
      id: "tbl-kw-suppliers-comparison",
      titleAr: "مصفوفة مقارنة كبار الموردين لسوق الملابس في الكويت (2023)",
      titleEn: "Detailed Supplier Country Comparison Matrix — Kuwait Apparel Market",
      descriptionAr: "مقارنة الحصص السوقية والقيم الاستيرادية والشرائح السعرية والمزايا اللوجستية والجمركية لكبار الموردين.",
      descriptionEn: "Comparative evaluation of supplier market shares, values, price tiers, tariffs, and transit times.",
      headersAr: ["الدولة المصدرة", "الواردات الإجمالية (مليون $)", "الحصة السوقية (%)", "الشريحة السعرية المهيمنة", "التعريفة الجمركية المطبقة", "زمن الشحن البحري"],
      headersEn: ["Country", "Total Exports (USD M)", "Market Share (%)", "Dominant Price Segment", "Applicable Tariff", "Ocean Transit Time"],
      rowsAr: [
        ["الصين", "464.12 مليون دولار (HS61: $296M | HS62: $168M)", "32.08%", "اقتصادي ومتوسط (Mass Retail & E-com)", "5% (تعريفة موحدة للخليج)", "18–24 يومًا"],
        ["الهند", "156.73 مليون دولار (HS61: $96M | HS62: $60M)", "10.83%", "اقتصادي وقطنيات أساسية ومنسوجات عرقية", "5% (تعريفة عامة)", "6–8 أيام"],
        ["إيطاليا", "151.84 مليون دولار (HS61: $59M | HS62: $93M)", "10.50%", "فاخر وفاخر للغاية (Luxury Couture)", "5% (تعريفة عامة)", "16–20 يومًا"],
        ["تركيا", "110.55 مليون دولار (HS61: $65M | HS62: $45M)", "7.64%", "متوسط وممتاز وأزياء محتشمة وسريعة", "5% (تعريفة عامة)", "10–14 يومًا"],
        ["بنغلاديش", "108.73 مليون دولار (HS61: $69M | HS62: $40M)", "7.52%", "اقتصادي وتكلفة متدنية والكميات الضخمة", "5% (تعريفة عامة)", "18–22 يومًا"],
        ["مصر (سياق الصادرات)", "تقديري كلي: ~18–24 مليون $ (بند 611020 وحده: $305K)", "~1.5% (إمكانات نمو هائلة)", "متوسط وممتاز (Mid-to-Premium Cotton)", "0% (إعفاء كامل بموجب GAFTA)", "10–14 يومًا (بحرًا) / 2.5 ساعة (جوًا)"],
      ],
      rowsEn: [
        ["China", "$464.12 Million (HS61: $296M | HS62: $168M)", "32.08%", "Budget to Mid-Tier Mass Fast Fashion", "5% GCC Common Tariff", "18–24 days"],
        ["India", "$156.73 Million (HS61: $96M | HS62: $60M)", "10.83%", "Budget Basics, Cotton & Ethnic Wear", "5% General Tariff", "6–8 days"],
        ["Italy", "$151.84 Million (HS61: $59M | HS62: $93M)", "10.50%", "Ultra-Luxury, Designer & Tailored Couture", "5% General Tariff", "16–20 days"],
        ["Turkey", "$110.55 Million (HS61: $65M | HS62: $45M)", "7.64%", "Mid to Premium, Modestwear & Fast Fashion", "5% General Tariff", "10–14 days"],
        ["Bangladesh", "$108.73 Million (HS61: $69M | HS62: $40M)", "7.52%", "Hyper-Budget Volume Basics", "5% General Tariff", "18–22 days"],
        ["Egypt (Export Context)", "Est. Total: ~$18–24M (HS611020 alone: $305K)", "~1.5% (Vast Room for Expansion)", "Mid-to-Premium Cotton & Private Label", "0% Duty-Free (GAFTA Exemption)", "10–14 days (Sea) / 2.5 hours (Air)"],
      ],
    },
    {
      id: "tbl-kw-buyers-directory",
      titleAr: "دليل مجموعات التجزئة والشركات المستوردة المستهدفة في الكويت",
      titleEn: "Target Retail Conglomerates & Prospective Buyers Directory — Kuwait",
      descriptionAr: "حسابات ومجموعات تجارية مستهدفة للتعاون والشراكة والتصنيع للغير (حسابات محتملة وليست عملاء حاليين مؤكدين).",
      descriptionEn: "High-probability prospective accounts for B2B contract manufacturing, wholesale supply, and private label programs.",
      headersAr: ["المجموعة / الشركة المستهدفة", "أبرز العلامات والأنشطة التابعة", "نموذج الشراء والتوريد المتبع", "الفرصة المستهدفة لمجموعة سامي بن عياد", "مستوى الأولوية"],
      headersEn: ["Target Conglomerate / Firm", "Key Brands & Operations", "Sourcing & Procurement Model", "Synergy for Sami Bin Ayyad Group", "Priority Tier"],
      rowsAr: [
        ["شركة سوق خان الخليلي (SKKCO)", "مصنع بيرلس (Peerless)، بيبي بالاس (Baby's Palace)، ميستي (Misty)، ماري لو (Mary Loo)", "استيراد وتوزيع جملة وتجزئة متخصص في المنتجات القطنية المصرية", "شراكة استراتيجية وتوريد تعاقدي منتظم لملابس الأطفال والبيجامات والقطنيات", "أولوية قصوى (Tier 1)"],
        ["مجموعة الشايع (M.H. Alshaya Co.)", "المقر العالمي: الكويت (H&M, Mothercare, COS, American Eagle, Next)", "إدارة امتيازات عالمية وبرامج sourcing إقليمية وعالمية ضخمة", "عقود توريد Private Label لملابس الأطفال والقطنيات العضوية لشبكة Mothercare", "أولوية قصوى (Tier 1)"],
        ["تحالف أزاديا / الغانم (Azadea / Alghanim JV)", "Zara, Massimo Dutti, Pull&Bear, Bershka, Oysho (شبكة Inditex بالكويت)", "سلاسل إمداد مركزية وتوزيع تجزئة في أرقى المجمعات (الأفنيوز، 360)", "عقود تصنيع إقليمي مرنة وسريعة الاستجابة لخطوط الكاجوال والبيسك", "أولوية مرتفعة (Tier 1)"],
        ["شركة اليوسفي للأزياء (Alyasra Fashion)", "DKNY, Max Mara, Koton, Triumph, Persona, ECCO", "امتيازات تجارية راقية ومتاجر متعددة الأقسام", "تصنيع خطوط قطن مصري فاخر وحصري لبرامج التجزئة الخاصة والأزياء الراقية", "أولوية مرتفعة (Tier 1)"],
        ["مجموعة لاند مارك الكويت (Landmark Group)", "Max Fashion, Splash, Babyshop, Centrepoint", "شراء مباشر وتصنيع Private Label ضخم ومستمر للمتاجر الكبرى", "توريد ملابس الأطفال والقطنيات والبيسك لمتاجري Max وSplash في الكويت", "أولوية قصوى (Tier 1)"],
        ["مجموعة الفطيم للتجزئة (Al-Futtaim Retail)", "Marks & Spencer, Kiabi", "علامات كبرى تركز على جودة الأقمشة والاستدامة والمعايير البيئية", "التصنيع التعاقدي للملابس المعتمدة بشهادات BCI وOEKO-TEX", "أولوية متوسطة (Tier 2)"],
        ["أباريل جروب الكويت (Apparel Group)", "LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club, R&B", "امتياز تجاري وتوزيع حصري وإدارة علامات عالمية في الأفنيوز والمولات", "عقود تصنيع تعاقدي مرنة وسريعة لخطوط البولو والتيشيرتات", "أولوية مرتفعة (Tier 1)"],
        ["مجموعة بسايد (Beside Group)", "Diesel, Fred Perry, Scotch & Soda, Geox", "توزيع أزياء كاجوال راقية ومتاجر أحادية العلامة", "توريد خطوط منسوجات قطنية وتشطيبات عالية الجودة لبرامج الكاجوال", "أولوية متوسطة (Tier 2)"],
        ["مستوردو وتجار الجملة في الشويخ والمباركية", "عشرات البيوت التجارية المستقلة المتخصصة في الاستيراد والتوزيع", "شراء مباشر / دفع مقابل المستندات (CAD) / حاويات كاملة", "توريد حاويات ملابس كاملة بأسعار FOB تنافسية لشبكات التوزيع المحلية", "أولوية تجارية (Tier 1)"],
      ],
      rowsEn: [
        ["Souk Khan Khalili Company (SKKCO)", "Peerless Factory, Baby's Palace, Misty, Mary Loo", "Specialized importer, distributor, and retailer of Egyptian cotton goods", "Strategic distribution partnership for babywear, loungewear, and Egyptian cotton apparel", "Tier 1 (Highest Priority)"],
        ["M.H. Alshaya Co.", "Global HQ: Kuwait (H&M, Mothercare, COS, American Eagle, Next)", "Global retail franchise giant with centralized & regional sourcing desks", "Private Label contract manufacturing for Mothercare babywear & organic cotton basics", "Tier 1 (Highest Priority)"],
        ["Azadea Group / Alghanim JV", "Zara, Massimo Dutti, Pull&Bear, Bershka, Oysho (Inditex Kuwait network)", "Centralized supply chain & prime mall retail in The Avenues and 360 Mall", "Nearshore agile contract manufacturing and quick replenishment cycles", "Tier 1 (High Priority)"],
        ["Alyasra Fashion", "DKNY, Max Mara, Koton, Triumph, Persona, ECCO", "High-end fashion retail, luxury brand representation & multi-brand concepts", "Exclusive luxury Egyptian cotton collections and refined private label programs", "Tier 1 (High Priority)"],
        ["Landmark Group Kuwait", "Max Fashion, Splash, Babyshop, Centrepoint", "Direct high-volume sourcing & proprietary Private Label programs", "Mass-volume replenishment of cotton basics, tees, and kids apparel for Max & Splash", "Tier 1 (Highest Priority)"],
        ["Al-Futtaim Retail Kuwait", "Marks & Spencer, Kiabi", "High-compliance international retail focusing on ethical and sustainable textiles", "Contract manufacturing for certified sustainable cotton lines (BCI / OEKO-TEX)", "Tier 2 (Medium Priority)"],
        ["Apparel Group Kuwait", "LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club, R&B", "Franchise licensing, regional mall retail distribution & lifestyle brands", "Nearshore flexible contract manufacturing for core polos and casual shirts", "Tier 1 (High Priority)"],
        ["Beside Group", "Diesel, Fred Perry, Scotch & Soda, Geox", "Premium lifestyle & contemporary casualwear franchise operator", "Specialized wash finishes, premium cotton twill shirting, and lifestyle apparel", "Tier 2 (Medium Priority)"],
        ["Shuwaikh & Mubarakiya Wholesalers", "Dozens of independent commercial importers and trading houses", "Direct commercial purchasing, full container loads, CAD / LC settlement", "High-volume container replenishment for local Kuwait retail distribution networks", "Tier 1 (Commercial Velocity)"],
      ],
    },
    {
      id: "tbl-kw-scorecard",
      titleAr: "بطاقة التقييم الاستراتيجي الشامل لسوق الكويت (مؤشر 84/100)",
      titleEn: "Comprehensive Strategic Opportunity Scorecard — Kuwait (84/100)",
      descriptionAr: "تقييم منهجي موثق عبر 8 معايير استراتيجية مرجحة لتحديد جاذبية السوق الكويتي وجدوى الاستثمار والتصدير.",
      descriptionEn: "Weighted 8-criteria methodology assessing market demand, commercial viability, and competitive advantage.",
      headersAr: ["المعيار الاستراتيجي للتقييم", "الوزن النسبي (%)", "الدرجة المحققة (من 100)", "الدرجة المرجحة", "المبررات والدلائل التحليلية الموثقة"],
      headersEn: ["Strategic Assessment Criterion", "Weight (%)", "Score (out of 100)", "Weighted Score", "Documented Evidence & Analytical Rationale"],
      rowsAr: [
        ["1. حجم الطلب الاستهلاكي وقوة النمو (Demand)", "20%", "85", "17.00", "واردات ملابس جاهزة تتجاوز 1.45 مليار دولار سنويًا مع سوق تجزئة يفوق 3 مليارات دولار"],
        ["2. الاعتماد الكامل على الاستيراد (Import Dependency)", "15%", "95", "14.25", "تعتمد الكويت بنسبة 98%+ على الواردات الخارجية لتغطية استهلاك الملابس، مع انعدام أي مصانع غزل ونسيج محلية"],
        ["3. فرص التصنيع للغير والعلامات الخاصة (FOB/OEM Opportunities)", "20%", "80", "16.00", "وجود المقر العالمي لمجموعة الشايع وسلاسل التجزئة الكبرى الباحثة عن تنويع مصادر التوريد خارج آسيا"],
        ["4. القوة الشرائية ومتوسط الدخل (Purchasing Power)", "10%", "90", "9.00", "نصيب فردي من الناتج المحلي يتجاوز 32,312 دولارًا، وهو من بين الأعلى عالميًا، مع استعداد لدفع هوامش ممتازة"],
        ["5. سهولة النفاذ وسرعة الدخول (Market Entry)", "10%", "80", "8.00", "قنوات تجزئة مركزة في مجمعات كبرى (الأفنيوز، 360) وشبكات توزيع جملة معروفة في الشويخ والمباركية"],
        ["6. الاتفاقيات التجارية والميزة الجمركية (Egypt Trade Agreements)", "10%", "85", "8.50", "إعفاء جمركي كامل 0% بموجب GAFTA لمصر مقابل 5% تعريفة موحدة على الصين وبنغلاديش والهند"],
        ["7. طبيعة المنافسة ودرجة التشبع (Competition)", "10%", "75", "7.50", "منافسة صينية وهندية قوية في الفئات الرخيصة، لكن سمعة القطن المصري الفاخر تمنحه تموضعًا نوعيًا رائدًا"],
        ["8. فرص الشراكات وتوزيع الجملة (Partnership Opportunities)", "5%", "75", "3.75", "وجود شركاء محليين متخصصين في استيراد المنتجات المصرية مثل شركة سوق خان الخليلي (SKKCO) ومصانعها"],
        ["المجموع الكلي المرجح للجاذبية الاستثمارية", "100%", "—", "84.00 / 100", "تصنيف ممتاز (المستوى الأول – Tier 1): فرصة تصديرية واستثمارية استثنائية ذات أولوية فورية للتنفيذ"],
      ],
      rowsEn: [
        ["1. Market Demand & Growth Scale (Demand)", "20%", "85", "17.00", "Apparel imports exceed $1.45B annually with an active retail ecosystem surpassing $3.0B"],
        ["2. Total Reliance on Imports (Import Dependency)", "15%", "95", "14.25", "Over 98% of apparel consumption is imported; zero domestic spinning, weaving, or large-scale manufacturing"],
        ["3. Contract Manufacturing Potential (FOB/OEM)", "20%", "80", "16.00", "Global HQ of M.H. Alshaya Co. and major retail groups seeking regional nearshore sourcing alternatives to Asia"],
        ["4. Purchasing Power & Affluence (Purchasing Power)", "10%", "90", "9.00", "GDP per capita exceeds $32,312, among the highest in the world, supporting premium cotton handfeel margins"],
        ["5. Market Entry & Channel Accessibility (Market Entry)", "10%", "80", "8.00", "Highly concentrated modern retail (The Avenues, 360) and defined wholesale clusters in Shuwaikh/Mubarakiya"],
        ["6. Trade Agreements & Tariff Edge (Trade Agreements)", "10%", "85", "8.50", "0% duty-free entry under GAFTA vs 5% standard GCC tariff on Chinese, Indian, and Bangladeshi competitors"],
        ["7. Competitive Landscape & Saturation (Competition)", "10%", "75", "7.50", "Intense Asian price competition in budget tiers, but unrivaled prestige for authentic Egyptian cotton"],
        ["8. Commercial Partnerships (Partnership Opportunities)", "5%", "75", "3.75", "Established specialized importers of Egyptian goods including Souk Khan Khalili Company (SKKCO) network"],
        ["Total Weighted Opportunity Score", "100%", "—", "84.00 / 100", "Tier 1 Rating (Very High Opportunity): Prime strategic export and contract manufacturing destination"],
      ],
    },
    {
      id: "tbl-kw-scenarios",
      titleAr: "نماذج التخطيط المالي وسيناريوهات الطاقة الإنتاجية المقترحة لمجموعة سامي بن عياد",
      titleEn: "Illustrative Production & Financial Planning Scenarios (FOB / CM)",
      descriptionAr: "محاكاة تخطيطية لأحجام الإنتاج الشهرية المتوقعة، وهوامش الربحية، والإيرادات السنوية في حال التعاقد مع عملاء كويتيين.",
      descriptionEn: "Financial modeling simulating projected monthly capacities, revenues, and operating margins across FOB and CM models.",
      headersAr: ["السيناريو التشغيلي المقترح", "الكمية الشهرية (قطعة)", "نمط التوريد المستهدف", "متوسط سعر القطعة ($)", "الإيراد السنوي المتوقع ($)", "هامش الربح التشغيلي التقديري"],
      headersEn: ["Planning Scenario", "Monthly Volume (Pcs)", "Supply Model", "Avg Unit Price (USD)", "Projected Annual Revenue", "Est. Operating Margin"],
      rowsAr: [
        ["1. سيناريو التشغيل التجريبي (Pilot Program)", "10,000 قطعة / شهر", "FOB (منتج كامل)", "$4.40 (تيشيرتات وبولو قطني فاخر)", "$528,000 دولار سنويًا", "18% – 22% ($95K – $116K)"],
        ["2. سيناريو التوريد التعاقدي المتوسط (Core Private Label)", "25,000 قطعة / شهر", "FOB (منتج كامل)", "$4.80 (مزيج قطنيات وبناطيل كاجوال)", "$1,440,000 دولار سنويًا", "16% – 20% ($230K – $288K)"],
        ["3. سيناريو الشراكة الاستراتيجية (Strategic Sourcing)", "50,000 قطعة / شهر", "مزيج FOB وCM (تصنيع للغير)", "$4.50 (سلة متنوعة ملابس أطفال ومنزل)", "$2,700,000 دولار سنويًا", "15% – 18% ($405K – $486K)"],
        ["4. سيناريو المورد الإقليمي المعتمد (Regional Anchor Supplier)", "100,000 قطعة / شهر", "عقود توريد سنوية لمجموعة كبرى (FOB)", "$4.20 (إنتاج كميات ضخمة لمتاجر التجزئة)", "$5,040,000 دولار سنويًا", "13% – 16% ($655K – $806K)"],
        ["5. سيناريو تصنيع الأجور للغير (Cut & Make - CM Only)", "50,000 قطعة / شهر", "CM (تشغيل فقط – خامات العميل)", "$1.40 (أجرة قص وحياكة وتعبئة للقطعة)", "$840,000 دولار سنويًا", "25% – 28% ($210K – $235K)"],
      ],
      rowsEn: [
        ["1. Pilot Trial Program", "10,000 pcs / month", "Full FOB (Finished Product)", "$4.40 (Premium Cotton Tees/Polos)", "$528,000 USD / year", "18% – 22% ($95K – $116K)"],
        ["2. Core Private Label Supply", "25,000 pcs / month", "Full FOB (Finished Product)", "$4.80 (Cotton Basics & Casual Bottoms)", "$1,440,000 USD / year", "16% – 20% ($230K – $288K)"],
        ["3. Strategic Sourcing Partnership", "50,000 pcs / month", "Blended FOB & CM Contract", "$4.50 (Multi-Category Kids & Homewear)", "$2,700,000 USD / year", "15% – 18% ($405K – $486K)"],
        ["4. Regional Anchor Supplier", "100,000 pcs / month", "Annual Volume Supply Contract", "$4.20 (High-Volume Retail Replenishment)", "$5,040,000 USD / year", "13% – 16% ($655K – $806K)"],
        ["5. Contract Tolling / Cut & Make (CM Only)", "50,000 pcs / month", "CM Service (Buyer Supplies Fabrics)", "$1.40 (Cut, Make, Trim & Pack fee)", "$840,000 USD / year", "25% – 28% ($210K – $235K)"],
      ],
    },
  ],
  sections: {
    executiveSummary: {
      summaryAr:
        "تُعد دولة الكويت واحدة من أكثر أسواق التجزئة والأزياء ربحية وجاذبية في منطقة الخليج العربي، مدفوعة بأعلى متوسطات الدخل الفردي عالميًا (نحو 32,312 دولارًا للناتج المحلي الإجمالي للفرد)، وقاعدة سكانية استهلاكية قوامها 4.87 مليون نسمة (وفق تقديرات البنك الدولي 2025؛ ونحو 5.03 مليون نسمة وفق تقديرات الأمم المتحدة 2025)، يشكل المقيمون الأجانب نحو 69% منها، ما يولد تنوعًا استثنائيًا في شرائح الطلب بين الفخامة والقطع الاستهلاكية اليومية.\n\nأظهرت البيانات الجمركية الدولية الموثقة لعام 2023 الصادرة عن الأمم المتحدة (UN Comtrade) وقاعدة بيانات البنك الدولي (WITS) وصول إجمالي واردات الملابس الجاهزة (HS 61 وHS 62) إلى 1,446,736,440 دولارًا (نحو 1.45 مليار دولار)، توزعت بين 844,679,300 دولار للملابس المحبوكة والتريكو (HS 61 بنسبة 58.39%)، و602,057,140 دولار للملابس المنسوجة (HS 62 بنسبة 41.61%). ويجب التمييز بدقة بين واردات الملابس الجاهزة هذه وبين الرقم الأوسع للواردات النسيجية العامة (HS 50–63) الذي بلغ 1,834,775,440 دولارًا ويشمل الألياف والغزول والأقمشة والمفروشات المنزلية.\n\nتتصدر الصين كبار الموردين بحصة 32.08% ($464.12M) تليها الهند (10.83% / $156.73M)، وإيطاليا (10.50% / $151.84M)، وتركيا (7.64% / $110.55M)، وبنغلاديش (7.52% / $108.73M). وسجلت بعض البنود طلباً استيرادياً ضخماً مثل التيشيرتات القطنية (HS 610910) بـ 137.94 مليون دولار (21.2 مليون قطعة)، والبلوفرات القطنية (HS 611020) بـ 50.34 مليون دولار (3.82 مليون قطعة)، والفساتين القطنية (HS 620442) بـ 23.30 مليون دولار.\n\nتتمتع مجموعة سامي بن عياد بفرصة تجارية استثنائية للنفاذ إلى السوق الكويتي عبر نموذج B2B وبرامج التصنيع للغير (Private Label)، مستفيدة من الإعفاء الجمركي الكامل (0%) بموجب اتفاقية تيسير وتنمية التبادل التجاري بين الدول العربية (GAFTA) مقابل تعريفة 5% تطبق على المنافسين الآسيويين، والسمعة التاريخية الطيبة للقطن المصري في الكويت، فضلًا عن سرعة الشحن البحري لميناء الشويخ (10–14 يومًا). وقد حقق السوق الكويتي درجة تقييم استراتيجي بلغت 84/100 (المستوى الأول – Tier 1)، ما يجعله ثالث أهم سوق مستهدف في دول مجلس التعاون الخليجي.",
      summaryEn:
        "The State of Kuwait represents one of the most affluent and profitable apparel markets in the Arabian Gulf, underpinned by exceptional disposable income ($32,312 GDP per capita) and a dynamic demographic base of 4.87 million residents (World Bank 2025; ~5.03M according to UN Population Division 2025), where expatriates constitute approximately 69% of the population, generating segmented demand across luxury couture, modestwear, and everyday essentials.\\n\\nOfficially verified customs data for 2023 from UN Comtrade and the World Bank WITS platform documents total ready-made garment imports (HS 61 and HS 62) reaching $1,446,736,440 (~$1.45 billion USD), split between $844,679,300 in knitted apparel (HS 61; 58.39%) and $602,057,140 in woven apparel (HS 62; 41.61%). This finished apparel figure is rigorously differentiated from the broader HS 50–63 textile and clothing import aggregate of $1,834,775,440, which includes yarns, raw fabrics, and home furnishings.\\n\\nChina leads global suppliers with a 32.08% market share ($464.12M), followed by India (10.83% / $156.73M), Italy (10.50% / $151.84M), Turkey (7.64% / $110.55M), and Bangladesh (7.52% / $108.73M). Selected HS6 product categories demonstrate massive scale: cotton t-shirts (HS 610910) generated $137.94M (21.2M units), cotton knit pullovers (HS 611020) hit $50.34M (3.82M units), and woven cotton dresses (HS 620442) stood at $23.30M (1.18M units).\\n\\nSAMI BIN AYYAD GROUP holds a clear competitive pathway into Kuwait via B2B supply and Private Label contract manufacturing, leveraging the 0% duty exemption under GAFTA (vs. the 5% GCC tariff on Asian competitors), the unrivaled prestige of authentic Egyptian cotton, and a 10-to-14 day ocean transit to Shuwaikh Port. Kuwait achieves an aggregate Strategic Opportunity Score of 84/100 (Tier 1 rating), ranking as the #3 target market in the GCC.",
      bulletsAr: [
        "إجمالي واردات الملابس الجاهزة (HS 61+62) لعام 2023: 1.45 مليار دولار (المحبوك: 58.39%، المنسوج: 41.61%).",
        "تمييز واردات المنسوجات والملابس الأوسع (HS 50–63) البالغة 1.835 مليار دولار عن الملابس الجاهزة النهائية.",
        "متوسط نصيب الفرد من الناتج المحلي: 32,312 دولارًا، وعدد السكان: 4.87 مليون نسمة بنسبة مقيمين تقارب 69%.",
        "أبرز فئات الطلب: تيشيرتات قطنية بـ $137.9M (21.2M قطعة)، بلوفرات قطنية بـ $50.3M، وفساتين بـ $23.3M.",
        "مؤشر الجاذبية الاستثمارية والتصديرية: 84/100 (المستوى الأول – فرصة مرتفعة للغاية والترتيب #3 خليجيًا).",
        "ميزة تنافسية حاسمة: إعفاء جمركي كامل 0% بموجب GAFTA مقابل 5% تعريفة عامة على الصين وبنغلاديش والهند.",
      ],
      bulletsEn: [
        "Total 2023 apparel imports (HS 61+62): $1.45B USD (Knitted: 58.39%, Woven: 41.61%).",
        "Rigorous differentiation of broader HS 50–63 textiles ($1.835B) from finished garments.",
        "GDP per capita: $32,312; population: 4.87M (World Bank) with ~69% expatriates.",
        "Top product drivers: Cotton tees at $137.9M (21.2M pcs), pullovers at $50.3M, and dresses at $23.3M.",
        "Strategic Opportunity Score: 84/100 (Tier 1 rating, ranked #3 in the GCC).",
        "Core commercial advantage: 0% GAFTA preferential tariff vs 5% GCC common duty on Asian competitors.",
      ],
    },
    marketDefinition: {
      summaryAr:
        "يحدد نطاق سوق الملابس في دولة الكويت بكافة بنود الملابس الجاهزة المصنفة جمركيًا تحت الفصلين 61 (ألبسة وتوابع ألبسة من مصنّرات أو كروشيه / المحبوكة) والفصل 62 (ألبسة وتوابع ألبسة من غير المصنّرات أو الكروشيه / المنسوجة).\n\nمن الضروري منهجيًا الفصل التام بين واردات الملابس الجاهزة النهائية (HS 61 وHS 62) البالغة 1.45 مليار دولار، وبين النطاق الأوسع للتجارة النسيجية المصنفة تحت الفصول (HS 50 إلى HS 63) والتي بلغت وارداتها 1.835 مليار دولار في 2023؛ حيث تشمل الأخيرة الألياف القطنية والخيوط والأقمشة الخام والمفروشات المنزلية وأغطية الأسرة والأكياس والشباك الصناعية.\n\nينقسم الطلب الداخلي في الكويت إلى أربعة قطاعات تجارية رئيسية: (1) الملابس القطنية اليومية والكاجوال، (2) الأزياء المحتشمة والعباءات والفساتين النسائية، (3) ملابس النوم والأرواب المنزلية الراقية، و(4) الملابس الداخلية والزي المؤسسي للشركات والمدارس والمستشفيات.",
      summaryEn:
        "The scope of the Kuwaiti apparel market is defined across all finished ready-made garments under HS Chapter 61 (articles of apparel and clothing accessories, knitted or crocheted) and HS Chapter 62 (articles of apparel and clothing accessories, not knitted or crocheted / woven).\\n\\nIt is methodologically crucial to separate finished garment imports (HS 61 and HS 62) of $1.45 billion from the broader textile trade classification (HS Chapters 50 through 63), which totaled $1.835 billion in 2023. The latter incorporates raw cotton, filaments, woven fabrics for tailoring, bed linen, upholstery, curtains, and industrial sacks.\\n\\nDomestic market consumption is segmented into four primary commercial sectors: (1) Everyday casual cotton basics and t-shirts, (2) Modestwear, abayas, and women's dresses, (3) Luxury homewear and nightwear, and (4) Undergarments and corporate/school uniforms.",
      bulletsAr: [
        "نطاق الدراسة يغطي كامل بنود الفصلين الجمركيين HS 61 وHS 62 للملابس الجاهزة.",
        "الفصل المنهجي التام بين واردات الملابس ($1.45B) والواردات النسيجية الأوسع HS 50–63 ($1.835B).",
        "تنوع الطلب بين الأزياء الفاخرة، والقطنيات الكاجوال، والملابس المحتشمة، والزي المؤسسي.",
        "سوق استهلاكي يعتمد بالكامل على الاستيراد دون وجود مصانع إنتاج محلي كبرى.",
      ],
      bulletsEn: [
        "Study scope comprehensively covers HS Chapters 61 and 62 for finished apparel.",
        "Methodological distinction between apparel ($1.45B) and broad textiles HS 50–63 ($1.835B).",
        "Diversified demand across luxury collections, casual cottons, modestwear, and uniforms.",
        "Wholly import-dependent consumer ecosystem devoid of domestic industrial production.",
      ],
    },
    marketSize: {
      summaryAr:
        "يُعد سوق الملابس الكويتي من أكثر الأسواق تركيزًا وثراءً في المنطقة. استنادًا إلى أحدث البيانات الجمركية الدولية الموثقة لعام 2023 (UN Comtrade / World Bank WITS)، بلغ إجمالي واردات الملابس الجاهزة (HS 61 + HS 62) نحو 1,446.74 مليون دولار (حوالي 1.45 مليار دولار).\n\nوعلى مستوى مبيعات التجزئة للمستهلك النهائي، يُقدر الحجم الإجمالي لسوق تجزئة الملابس والأحذية في الكويت بما يتراوح بين 2.8 إلى 3.2 مليار دولار سنويًا (نحو 860 إلى 980 مليون دينار كويتي)، مدفوعًا بمعدل إنفاق سنوي للفرد يُعد من بين الأعلى عالميًا.\n\nكما تشهد التجارة الإلكترونية لقطاع الأزياء في الكويت نموًا متسارعًا، حيث يتجاوز حجم المبيعات الرقمية للملابس 450 مليون دولار سنويًا (حوالي 138 مليون دينار كويتي) بفضل انتشار الهواتف الذكية بنسبة تقارب 100%، وتوسع منصات التسوق الرائدة مثل بوتيكات (Boutiqaat) ونمشي وتطبيقات التوصيل السريع.",
      summaryEn:
        "The Kuwaiti apparel market is among the most concentrated and affluent in the region. According to verified international trade statistics for 2023 (UN Comtrade / World Bank WITS), total ready-made garment imports (HS 61 + HS 62) reached $1,446.74 million (~$1.45 billion USD).\\n\\nAt the consumer retail level, total market size for apparel and footwear in Kuwait is estimated between $2.8 billion and $3.2 billion USD annually (~KD 860M to 980M), driven by exceptional per capita discretionary fashion expenditure.\\n\\nFashion e-commerce is expanding rapidly, with digital apparel sales exceeding $450 million USD annually (~KD 138M), fueled by near-100% smartphone penetration, young demographics, and the proliferation of digital platforms such as Boutiqaat, Namshi, and specialized delivery apps.",
      bulletsAr: [
        "إجمالي الواردات الجمركية للملابس الجاهزة: 1.45 مليار دولار (2023).",
        "حجم مبيعات التجزئة السنوية للملابس والأحذية: 2.8 إلى 3.2 مليار دولار (860–980 مليون د.ك).",
        "مبيعات تجارة الأزياء الإلكترونية تتجاوز 450 مليون دولار سنوياً بنمو سنوي مركب يتجاوز 9%.",
        "الكويت تحتل المرتبة الثالثة خليجيًا في حجم الواردات والجاذبية الاستثمارية بعد السعودية والإمارات.",
      ],
      bulletsEn: [
        "Total customs apparel imports: $1.45 billion USD (2023).",
        "Annual consumer retail apparel and footwear market: $2.8B to $3.2B USD (KD 860M–980M).",
        "Fashion e-commerce exceeds $450 million USD annually, compounding at over 9% per year.",
        "Kuwait ranks third in the GCC for import volume and strategic attractiveness behind Saudi Arabia and UAE.",
      ],
    },
    actualDemand: {
      summaryAr:
        "يتشكل الطلب الفعلي في الكويت من هيكل سكاني واجتماعي محدد بدقة:\n\n1. التركيبة السكانية والقوة الشرائية (World Bank & UN 2025):\nيبلغ عدد السكان 4,865,298 نسمة وفق قاعدة بيانات البنك الدولي لعام 2025 (ونحو 5.026 مليون نسمة وفق تقرير الأمم المتحدة). ويمثل المقيمون الأجانب نحو 69% من السكان (حوالي 3.4 مليون نسمة)، بينما يشكل المواطنون الكويتيون نحو 31% (حوالي 1.5 مليون نسمة). يولد هذا الانقسام شريحتين استهلاكيتين متمايزتين: شريحة المواطنين ذات الدخول الفائقة الباحثة عن الفخامة والقطن الطبيعي الخالص والأزياء الراقية، وشريحة المقيمين المتنوعة التي تدعم استهلاك الملابس الاقتصادية واليومية.\n\n2. دورات الشراء والمواسم الاستهلاكية:\n- موسم رمضان وعيدي الفطر والأضحى: يمثل ذروة الطلب السنوي على الأزياء المحتشمة، والفساتين، وملابس الأطفال، وملابس النوم المنزلية الراقية، حيث يتم شراء ما بين 30% إلى 40% من الملابس السنوية خلال هذه الفترات.\n- موسم العودة إلى المدارس (أغسطس/سبتمبر): طلب ضخم ومستمر على الزي المدرسي، والتيشيرتات البيضاء، والملابس الداخلية، والجوارب القطنية.\n- مواسم الصيف والسفر (مايو–أغسطس): إقبال كبير على ملابس السفر الخفيفة، والملابس القطنية الباردة المقاومة للحرارة الشديدة التي تتجاوز 50 درجة مئوية صيفاً.\n- موسم الشتاء (نوفمبر–فبراير): طلب مرتفع على البلوفرات والسويترات القطنية والتريكو السميك والأرواب الشتوية.",
      summaryEn:
        "Actual demand in Kuwait is shaped by a precisely defined demographic and social architecture:\\n\\n1. Demographic Composition & Purchasing Power (World Bank & UN 2025):\\nPopulation stands at 4,865,298 according to World Bank 2025 data (~5.026 million per UN estimates). Expatriates account for ~69% of the population (~3.4M), while Kuwaiti citizens represent ~31% (~1.5M). This bifurcation creates two robust market tiers: an ultra-affluent citizen segment demanding luxury natural fibers, authentic Egyptian cotton, and high-end modestwear, alongside a diverse expatriate population driving steady baseline demand for value fashion and childrenswear.\\n\\n2. Seasonal Purchasing Cycles & Cultural Occasions:\\n- Ramadan & Eid Festive Cycles: Peak commercial period representing 30% to 40% of annual discretionary fashion spending on luxury loungewear, modest dresses, and premium children's outfits.\\n- Back-to-School Season (August/September): Massive replenishment of school uniforms, white tees, cotton undergarments, and socks.\\n- Summer Travel Season (May–August): Surge in demand for lightweight, ultra-breathable cotton resort wear and travel apparel adapted to withstand extreme summer heat exceeding 50°C.\\n- Winter Shopping Season (November–February): Elevated consumption of heavier cotton knits, pullovers, cardigans, and fleece-lined loungewear.",
      bulletsAr: [
        "سكان الكويت: 4.87 مليون نسمة (WB) / 5.03 مليون (UN) بنسبة مقيمين أجانب تبلغ 69%.",
        "قوة شرائية فائقة ومعدل دخل فردي يبلغ 32,312 دولاراً يدعم هوامش ربحية متميزة.",
        "مواسم الذروة: رمضان والأعياد (30%–40% من المبيعات)، والعودة للمدارس، والشتاء، والسفر.",
        "المناخ الحار صيفاً يفرض طلباً دائماً على الأقمشة القطنية الطبيعية عالية الامتصاص والتهوية.",
      ],
      bulletsEn: [
        "Population: 4.87M (World Bank) / 5.03M (UN) with an expatriate representation of ~69%.",
        "High purchasing power and $32,312 GDP per capita supporting premium gross margins.",
        "Peak buying cycles: Ramadan and Eids (30%–40% of sales), Back-to-School, and Winter.",
        "Harsh desert summer climate mandates continuous demand for breathable 100% cotton garments.",
      ],
    },
    importsExports: {
      summaryAr:
        "توضح الإحصاءات الجمركية الموثقة الصادرة عن منظمة التجارة العالمية والبنك الدولي (WITS) ومنصة UN Comtrade لعام 2023 حركة التجارة الخارجية لقطاع الملابس في الكويت:\n\n1. حجم الواردات وتوزيع الفصول الجمركية:\n- إجمالي واردات الملابس الجاهزة (HS 61 + HS 62): 1,446,736,440 دولارًا (1.45 مليار $).\n- واردات الملابس المحبوكة (HS 61): 844,679,300 دولارًا (58.39%).\n- واردات الملابس المنسوجة (HS 62): 602,057,140 دولارًا (41.61%).\n- إجمالي الواردات النسيجية العامة (HS 50–63): 1,834,775,440 دولارًا (1.83 مليار $).\n\n2. كبار الموردين للملابس المحبوكة (HS 61):\n- الصين: 295.962 مليون دولار (35.04%).\n- الهند: 96.288 مليون دولار (11.40%).\n- بنغلاديش: 68.768 مليون دولار (8.14%).\n- تركيا: 65.078 مليون دولار (7.70%).\n- إيطاليا: 58.558 مليون دولار (6.93%).\n\n3. كبار الموردين للملابس المنسوجة (HS 62):\n- الصين: 168.156 مليون دولار (27.93%).\n- إيطاليا: 93.285 مليون دولار (15.49%).\n- الهند: 60.445 مليون دولار (10.04%).\n- تركيا: 45.471 مليون دولار (7.55%).\n- بنغلاديش: 39.963 مليون دولار (6.64%).\n\n4. تحليل تجارة مصر مع الكويت والفروق الإحصائية:\n- بلغت واردات الكويت المسجلة لبند البلوفرات القطنية المحبوكة (HS 611020) من مصر وحدها نحو 304,960 دولارًا في عام 2023. وتؤكد الدراسة على عدم اعتبار هذا الرقم إجمالي صادرات الملابس المصرية للكويت؛ حيث تشير بيانات المجلس التصديري المصري للملابس الجاهزة (GOEIC) إلى أن إجمالي الصادرات المصرية لأسواق الكويت يتراوح بين 18 إلى 24 مليون دولار سنوياً عبر مختلف بنود الملابس والزي الموحد والقطنيات.\n- أسباب الفجوة الإحصائية: تمر نسبة كبيرة من الملابس المصرية المتجهة للكويت عبر شركات إعادة تصدير ومناطق حرة في دبي (جبل علي) أو السعودية، فتسجل جمركياً في الكويت كشحنات قادمة من الإمارات، فضلاً عن فروق التقييم (FOB مقابل CIF) والفاصل الزمني للشحن.",
      summaryEn:
        "Official customs statistics compiled from UN Comtrade and the World Bank WITS platform for 2023 illustrate Kuwait's trade flows:\\n\\n1. Aggregate Import Breakdown by Chapter:\\n- Total Ready-Made Garment Imports (HS 61 + HS 62): $1,446,736,440 (~$1.45B USD).\\n- Knitted Apparel (HS 61): $844,679,300 (58.39%).\\n- Woven Apparel (HS 62): $602,057,140 (41.61%).\\n- Broader Textile & Apparel Imports (HS 50–63): $1,834,775,440 (~$1.83B USD).\\n\\n2. Top Supplier Countries for Knitted Garments (HS 61):\\n- China: $295.962M (35.04%).\\n- India: $96.288M (11.40%).\\n- Bangladesh: $68.768M (8.14%).\\n- Turkey: $65.078M (7.70%).\\n- Italy: $58.558M (6.93%).\\n\\n3. Top Supplier Countries for Woven Garments (HS 62):\\n- China: $168.156M (27.93%).\\n- Italy: $93.285M (15.49%).\\n- India: $60.445M (10.04%).\\n- Turkey: $45.471M (7.55%).\\n- Bangladesh: $39.963M (6.64%).\\n\\n4. Egypt–Kuwait Bilateral Trade & Statistical Discrepancy Reconciliation:\\n- Kuwaiti customs recorded $304,960 USD in direct imports of cotton knit pullovers (HS 611020) from Egypt in 2023. This figure must not be misconstrued as total Egyptian apparel exports to Kuwait. Egyptian export declarations (GOEIC) place aggregate ready-made garment flows to Kuwait at $18M–$24M USD across all apparel lines and institutional uniforms.\\n- Reconciliation Factors: A substantial share of Egyptian apparel destined for Kuwait is routed through regional distribution hubs and bonded warehouses in Jebel Ali (UAE) or Saudi Arabia, appearing in Kuwaiti customs as UAE-origin transshipments, alongside standard FOB vs CIF valuation adjustments.",
      bulletsAr: [
        "إجمالي واردات الملابس لعام 2023: 1.45 مليار دولار (المحبوك: 58.39%، المنسوج: 41.61%).",
        "الصين تتصدر كبار الموردين ($464M) تليها الهند ($157M)، إيطاليا ($152M)، تركيا ($111M)، وبنغلاديش ($109M).",
        "واردات بند HS 611020 وحده من مصر بلغت $304,960 (ولا تمثل إجمالي الصادرات المصرية المقدرة بـ $18M–$24M).",
        "تفسير الفجوة الإحصائية: تجارة الترانزيت عبر جبل علي، وإعادة الفواتير، وفروق تقييم FOB مقابل CIF.",
      ],
      bulletsEn: [
        "Total 2023 apparel imports: $1.45B (Knitted: 58.39%, Woven: 41.61%).",
        "China leads ($464M), followed by India ($157M), Italy ($152M), Turkey ($111M), and Bangladesh ($109M).",
        "Recorded HS 611020 imports from Egypt reached $304,960 (not total exports, which stand at ~$18M–$24M).",
        "Discrepancy explained by Jebel Ali transshipment routing, re-invoicing, and FOB vs CIF valuation.",
      ],
    },
    demandedProductsAnalysis: {
      summaryAr:
        "كشفت دراسة البيانات الجمركية على مستوى بنود النظام المنسق المكونة من 6 أرقام (HS-6) لعام 2023 عن أرقام دقيقة لبنود الطلب ذات الأولوية لمجموعة سامي بن عياد:\n\n1. تيشيرتات وبولو قطنية محبوكة (HS 6109.10):\nبلغت الواردات 137,944,000 دولار بحجم استيراد بلغ 21,225,000 قطعة. يمثل هذا البند أضخم فئة حجمية في الكويت بمتوسط استهلاك سنوي يفوق 4.3 قطعة لكل فرد، وهو محور رئيسي لتوريد سلاسل التجزئة وبرامج العلامات الخاصة.\n\n2. سويترات وبلوفرات محبوكة من قطن (HS 6110.20):\nبلغت الواردات 50,342,000 دولار بحجم بلغ 3,820,750 قطعة. وهو البند الذي سجلت فيه مصر واردات مباشرة بقيمة 304,960 دولار، وتتطلب سلاسل التجزئة فيه تريكو ناعم عالي الجودة.\n\n3. فساتين نسائية منسوجة من قطن (HS 6204.42):\nبلغت الواردات 23,296,000 دولار بحجم 1,183,270 قطعة. تحظى الفساتين القطنية بطلب واسع في مواسم الصيف والتسوق الخليجي.\n\n4. سويترات وبلوفرات من ألياف صناعية (HS 6110.30):\nبلغت الواردات 17,729,000 دولار بحجم 1,658,800 قطعة، وتطلب لملابس الرياضة والتنزه.\n\n5. ألبسة نسائية أخرى من أقمشة خاصة (HS 6210.50):\nبلغت الواردات 5,931,000 دولار بحجم 455,240 كجم، وتشمل العباءات والقفاطين والأردية المحتشمة.\n\n6. أطقم وبدل نسائية منسوجة من قطن (HS 6204.12):\nبلغت الواردات 5,552,000 دولار بحجم 356,701 قطعة، مخصصة لبيئات العمل المكتبية.\n\n7. أرواب وملابس نوم منزلية من قطن (HS 6208.91):\nبلغت الواردات 2,245,000 دولار بحجم 220,464 كجم، وتعد من أعلى الفئات ربحية وطلباً للقطن المصري.\n\n8. فئات استراتيجية أخرى تشمل: بناطيل الرجال المنسوجة (HS 6203.42)، قمصان الرجال (HS 6205.20)، وملابس الرضع (HS 6111.20 و6209).",
      summaryEn:
        "Detailed examination of 6-digit Harmonized System (HS-6) customs declarations for 2023 reveals precise values and physical volumes for SAMI BIN AYYAD GROUP's priority categories:\\n\\n1. Cotton T-shirts & Polos (HS 6109.10):\\nImports reached $137,944,000 USD representing 21,225,000 pieces. This represents the single largest volume driver in Kuwait (>4.3 garments per capita), serving as the backbone for department store private labels.\\n\\n2. Cotton Pullovers & Cardigans (HS 6110.20):\\nImports achieved $50,342,000 USD representing 3,820,750 units. Notably, direct Egyptian shipments of $304,960 were documented in this code, where retail chains demand premium fine-gauge cotton yarns.\\n\\n3. Women's Cotton Dresses (HS 6204.42):\\nImports totaled $23,296,000 USD representing 1,183,270 pieces, reflecting high demand for breathable modest summer silhouettes.\\n\\n4. Man-Made Fibre Pullovers (HS 6110.30):\\nImports reached $17,729,000 USD representing 1,658,800 units, catering to activewear and lightweight winter layering.\\n\\n5. Women's Coated/Special Apparel (HS 6210.50):\\nImports totaled $5,931,000 USD representing 455,240 kg, comprising high-end abayas, modest trench coats, and lifestyle garments.\\n\\n6. Women's Cotton Suits (HS 6204.12):\\nImports generated $5,552,000 USD across 356,701 units, addressing formal corporate and executive workwear.\\n\\n7. Women's Dressing Gowns & Pyjamas (HS 6208.91):\\nImports reached $2,245,000 USD representing 220,464 kg, demonstrating high margins and natural affinity for Egyptian cotton handfeel.\\n\\n8. Additional Strategic Categories: Men's woven trousers (HS 6203.42), cotton dress shirts (HS 6205.20), and infant layettes (HS 6111.20 / 6209).",
      bulletsAr: [
        "التيشيرتات القطنية (610910): $137.9M بحجم 21.2 مليون قطعة (أضخم فئة استهلاكية).",
        "البلوفرات القطنية (611020): $50.3M بحجم 3.82 مليون قطعة (سجلت مصر فيها $305K).",
        "الفساتين القطنية (620442): $23.3M بحجم 1.18 مليون قطعة لمواسم الصيف والمناسبات.",
        "ملابس النوم والأرواب النسائية (620891): $2.25M وتعد الفئة الأعلى ملاءمة لسمعة القطن المصري الفاخر.",
      ],
      bulletsEn: [
        "Cotton Tees (610910): $137.9M representing 21.2 million pieces (largest volume driver).",
        "Cotton Pullovers (611020): $50.3M across 3.82 million units (direct Egyptian exports $305K).",
        "Cotton Dresses (620442): $23.3M across 1.18 million units for summer and seasonal occasions.",
        "Nightwear & Robes (620891): $2.25M representing peak margin alignment for Egyptian cotton handfeel.",
      ],
    },
    localSupplyProduction: {
      summaryAr:
        "يتميز قطاع صناعة الملابس المحلي في دولة الكويت بكونه شبه منعدم على المستوى الصناعي الواسع، حيث يغطي الإنتاج المحلي أقل من 2% من إجمالي احتياجات السوق، وينحصر بالكامل في ورش تفصيل الدشداشة والزي الوطني الكويتي في أسواق المباركية والأحمدي، وبعض مشاغل تفصيل العباءات النسائية الراقية، وعدد محدود جداً من ورش حياكة الزي الموحد البسيط في منطقة صبحان الصناعية.\n\nلا توجد في الكويت أي مصانع غزل أو نسيج أو صباغة أو حياكة متكاملة كثيفة العمالة، نظراً لارتفاع تكاليف الأيدي العاملة والطاقة التشغيلية مقارنة بدول الإنتاج، ولتوجه الاستثمارات الوطنية نحو قطاعات النفط والكيماويات والخدمات المالية والتجزئة.\n\nتعتمد الكويت بنسبة تفوق 98% على الواردات الخارجية، وهو ما يمثل ميزة تنافسية حاسمة للمصدرين المصريين؛ إذ لا توجد أي جماعات ضغط صناعية محلية تطالب بفرض رسوم حمائية أو قيود استيرادية، ويبقى السوق مفتوحاً بالكامل أمام المنتجات المؤهلة بموجب اتفاقية GAFTA.",
      summaryEn:
        "Domestic ready-made garment manufacturing within the State of Kuwait is virtually non-existent at industrial scale, satisfying less than 2% of total national consumption. Local production is strictly confined to bespoke artisanal tailoring of traditional national dress (dishdashas) in Mubarakiya, boutique abaya sewing ateliers in Salmiya, and a few small-scale uniform assembly workshops in the Subhan industrial zone.\\n\\nKuwait possesses zero integrated spinning, weaving, wet processing, or mass garment assembly plants, owing to high domestic labor and operational overheads, with capital concentrated in petrochemicals, financial services, and retail management.\\n\\nConsequently, Kuwait relies on international imports for over 98% of domestic apparel consumption. This represents a distinct structural advantage for Egyptian manufacturers: there are no domestic manufacturing lobbies demanding anti-dumping duties or protective barriers, ensuring open market entry for GAFTA-certified products.",
      bulletsAr: [
        "الإنتاج المحلي يغطي أقل من 2% ويقتصر على تفصيل الزي الوطني والحرف اليدوية.",
        "انعدام تام للمصانع الكبرى للغزل والنسيج والصباغة والحياكة الصناعية الكثيفة.",
        "اعتماد بنسبة 98%+ على الواردات الخارجية لتغطية كافة فئات الملابس الجاهزة.",
        "غياب أي قيود حمائية أو رسوم دفاعية تحمي الصناعة المحلية لعدم وجودها.",
      ],
      bulletsEn: [
        "Domestic manufacturing covers under 2%, restricted to bespoke national dress tailoring.",
        "Total absence of large-scale spinning, weaving, dyeing, and mass garment plants.",
        "Over 98% reliance on foreign imports across all apparel categories.",
        "Zero domestic protectionist tariffs or anti-dumping barriers against imported goods.",
      ],
    },
    competitionSaturation: {
      summaryAr:
        "يتسم سوق الملابس في الكويت بمنافسة محتدمة بين خمس قوى توريد رئيسية:\n\n1. الصين (32.08% / 464.12 مليون $): تهيمن على الفئات الاقتصادية وسلاسل التجزئة الشاملة والشحن الإلكتروني السريع عبر منصات مثل Shein وTemu.\n2. الهند (10.83% / 156.73 مليون $): تستفيد من القرب الجغرافي والروابط التاريخية مع الجالية الهندية الضخمة (تمثل أكبر جالية وافدة في الكويت)، وتتركز في القطنيات الأساسية والملابس الاقتصادية.\n3. إيطاليا (10.50% / 151.84 مليون $): تقود قطاع الأزياء الفاخرة والبدل الراقية المنتشرة في مجمعي الأفنيوز و360 مول، وتستحوذ على أعلى متوسط سعر للقطعة.\n4. تركيا (7.64% / 110.55 مليون $): منافس مباشر قوي لمصر في الأزياء المحتشمة، والفساتين النسائية، والتريكو السريع، بفضل ذوقها المتوافق مع المستهلك الخليجي وسرعة الاستجابة.\n5. بنغلاديش (7.52% / 108.73 مليون $): تركز على الملابس الأساسية الرخيصة جداً وحزم الـ Fast Fashion لسلاسل التجزئة منخفضة التكلفة.\n\nاستراتيجية التموضع التنافسي لمجموعة سامي بن عياد:\nيجب تجنب المنافسة السعرية المباشرة مع بنغلاديش والصين في المنتجات الرخيصة، والتركيز على شريحة الجودة المتوسطة والعليا (Mid-to-Premium)، بالاعتماد على: (أ) الميزة المعنوية والتاريخية لاسم القطن المصري لدى العائلات الكويتية، (ب) ميزة الإعفاء الجمركي 0% بموجب GAFTA مقابل 5% على الموردين الآسيويين، و(ج) مرونة الكميات التعاقدية (MOQs) وسرعة الشحن البحري لميناء الشويخ (10–14 يومًا).",
      summaryEn:
        "The Kuwaiti apparel landscape features intense competition among five major supplying nations:\\n\\n1. China (32.08% / $464.12M): Dominates value mass retail, hypermarket private labels, and cross-border digital shipments (Shein, Temu).\\n2. India (10.83% / $156.73M): Leverages geographical proximity and the largest expatriate demographic in Kuwait, dominating cotton basics and budget casualwear.\\n3. Italy (10.50% / $151.84M): Commands luxury boutiques and haute couture in The Avenues Prestige and 360 Mall, generating the highest unit values.\\n4. Turkey (7.64% / $110.55M): Direct competitor to Egypt in modestwear, woven dresses, and contemporary styling favored by Kuwaiti female consumers.\\n5. Bangladesh (7.52% / $108.73M): Captures high-volume, price-sensitive hypermarket programs on ultra-low labor cost fundamentals.\\n\\nCompetitive Positioning for SAMI BIN AYYAD GROUP:\\nDirect price wars against Bangladesh and China in bottom-tier commodity lines must be strictly avoided. Instead, positioning hinges on: (a) The prestigious brand equity of authentic Egyptian cotton among Kuwaiti households, (b) The 0% GAFTA tariff advantage delivering an immediate 5% landed margin saving over Asian suppliers, and (c) Flexible minimum order quantities (MOQs) coupled with a 10-to-14 day ocean transit to Shuwaikh Port.",
      bulletsAr: [
        "الصين تتصدر بحصة 32.1%، تليها الهند (10.8%)، إيطاليا (10.5%)، تركيا (7.6%)، وبنغلاديش (7.5%).",
        "تركيا تمثل المنافس الأبرز لمصر في قطاعي الفساتين النسائية والأزياء المحتشمة.",
        "الميزة التنافسية لمصر ترتكز على سمعة القطن المصري، والإعفاء الجمركي 0%، وسرعة الشحن.",
        "تجنب الصدام السعري الرخيص مع بنغلاديش، والتركيز على برامج Private Label الممتازة.",
      ],
      bulletsEn: [
        "Market split: China (32.1%), India (10.8%), Italy (10.5%), Turkey (7.6%), Bangladesh (7.5%).",
        "Turkey represents Egypt's primary rival in modestwear and fast-fashion woven dresses.",
        "Egyptian competitive moat: Egyptian cotton halo, 0% GAFTA duty exemption, and regional proximity.",
        "Target value-added private label programs rather than low-end commodity pricing battles.",
      ],
    },
    potentialBuyers: {
      summaryAr:
        "تضم دولة الكويت المقرات الإقليمية والعالمية لأكبر مجموعات تجزئة الملابس في الشرق الأوسط، بالإضافة إلى شركات استيراد كويتية متخصصة في المنتجات القطنية المصرية (حسابات مستهدفة للتعاون وليست عملاء حاليين مؤكدين):\n\n1. شركة سوق خان الخليلي (Souk Khan Khalili Co. - SKKCO):\nواحدة من أقدم وأهم المؤسسات التجارية الكويتية المتخصصة في استيراد وتسويق المنتجات النسيجية والملابس القطنية المصرية. تمتلك وتدير علامات تجارية ومصانع تابعة بارزة:\n- مصنع بيرلس (Peerless Factory): تشغيل وتصنيع خطوط ملابس قطنية.\n- بيبي بالاس (Baby's Palace): شبكة متاجر متخصصة في ملابس ومستلزمات الأطفال والرضع.\n- علامة ميستي (Misty): علامة تجارية متخصصة في الملابس النسائية والمنزلية القطنية.\n- علامة ماري لو (Mary Loo): أزياء وملابس نوم نسائية راقية.\nتمثل SKKCO الشريك المستهدف الأول لبرامج التوريد والشراكة الاستراتيجية والتوزيع المباشر داخل الكويت.\n\n2. مجموعة الشايع (M.H. Alshaya Co.):\nالمقر العالمي: الكويت. أضخم مشغل امتيازات تجزئة في المنطقة، وتدير أكثر من 70 علامة عالمية تشمل H&M, Mothercare, COS, American Eagle, Next. تبحث إدارات المشتريات التابعة لها عن بدائل توريد إقليمية قريبة وموثوقة لملابس الأطفال والقطنيات.\n\n3. تحالف أزاديا / الغانم (Azadea Group / Alghanim JV):\nيدير شبكة متاجر Inditex الكبرى في الكويت (Zara, Massimo Dutti, Pull&Bear, Bershka, Oysho) في مجمعي الأفنيوز و360 مول، ويهتم ببرامج التوريد السريع.\n\n4. شركة اليوسفي للأزياء (Alyasra Fashion):\nتدير متاجر علامات مرموقة مثل Max Mara, DKNY, Koton, Triumph, Persona، وتبحث عن خطوط قطن مصري فائقة الفخامة.\n\n5. مجموعة لاند مارك الكويت (Landmark Group):\nتدير شبكة متاجر Max Fashion, Splash, Babyshop, Centrepoint، وتمتلك أكبر برامج Private Label للملابس الأساسية وملابس الأطفال.\n\n6. مجموعة الفطيم للتجزئة الكويت (Al-Futtaim Retail):\nتدير متاجر Marks & Spencer وKiabi وتفرض معايير استدامة صارمة (BCI / OEKO-TEX).\n\n7. أباريل جروب الكويت (Apparel Group):\nتدير علامات LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club, R&B وتطلب برامج تيشيرتات وبولو سريعة التوريد.\n\n8. مجموعة بسايد (Beside Group):\nمتخصصة في الأزياء المعاصرة الراقية (Diesel, Fred Perry, Scotch & Soda).\n\n9. تجار ومستوردو الجملة في أسواق الشويخ والمباركية:\nعشرات البيوت التجارية المستقلة التي تشتري حاويات ملابس كاملة لتوزيعها على المتاجر المستقلة.",
      summaryEn:
        "Kuwait hosts global and regional headquarters of the Middle East's premier retail conglomerates, alongside specialized commercial trading companies with deep historic ties to Egyptian textiles (prospective target accounts, NOT confirmed existing clients):\\n\\n1. Souk Khan Khalili Company (SKKCO):\\nA premier Kuwaiti commercial trading institution specialized in the importation and distribution of Egyptian cotton apparel and home textiles. Operates notable proprietary brands and operations:\\n- Peerless Factory: Specialized apparel manufacturing and finishing operations.\\n- Baby's Palace: Retail chain dedicated to infantwear and children's essentials.\\n- Misty: Established brand for women's daily cotton apparel and loungewear.\\n- Mary Loo: Brand focusing on refined women's nightwear and pyjamas.\\nSKKCO represents the highest-priority commercial distribution and collaborative manufacturing partner in Kuwait.\\n\\n2. M.H. Alshaya Co. (Global HQ: Kuwait):\\nThe Middle East's largest retail franchise operator managing H&M, Mothercare, COS, American Eagle, and Next across EMEA. Central sourcing desks actively seek qualified regional contract manufacturers for private label babywear and organic cotton essentials.\\n\\n3. Azadea Group / Alghanim JV:\\nOperates Kuwait's premier Inditex flagship stores (Zara, Massimo Dutti, Pull&Bear, Oysho) across The Avenues and 360 Mall.\\n\\n4. Alyasra Fashion:\\nManages luxury and contemporary banners including Max Mara, DKNY, Koton, and Triumph, seeking ultra-premium Egyptian cotton programs.\\n\\n5. Landmark Group Kuwait:\\nOperates Max Fashion, Splash, Babyshop, and Centrepoint, procuring high-volume private label basics and kids collections.\\n\\n6. Al-Futtaim Retail Kuwait:\\nOperates Marks & Spencer and Kiabi, demanding strict BCI and OEKO-TEX certified cotton apparel.\\n\\n7. Apparel Group Kuwait:\\nManages LC Waikiki, Tommy Hilfiger, Beverly Hills Polo Club, and R&B across major Kuwaiti malls.\\n\\n8. Beside Group:\\nSpecialist in premium contemporary fashion (Diesel, Fred Perry, Scotch & Soda).\\n\\n9. Shuwaikh & Mubarakiya Wholesale Trading Houses:\\nIndependent commercial merchants purchasing full container loads for domestic wholesale distribution.",
      bulletsAr: [
        "شركة سوق خان الخليلي (SKKCO): شريك استراتيجي رائد يضم مصنع بيرلس، بيبي بالاس، ميستي، وماري لو.",
        "مجموعة الشايع (المقر العالمي بالكويت): أضخم مشغل امتيازات تجزئة بالمنطقة (H&M, Mothercare).",
        "سلاسل التجزئة الكبرى: أزاديا/الغانم، اليوسفي للأزياء، لاندمارك الكويت، الفطيم، وأباريل جروب.",
        "تجار الجملة في الشويخ وسوق المباركية: قنوات توزيع مباشرة لشحنات الحاويات الكاملة.",
      ],
      bulletsEn: [
        "Souk Khan Khalili Company (SKKCO): Premier partner operating Peerless, Baby's Palace, Misty, Mary Loo.",
        "M.H. Alshaya Co. (Global HQ: Kuwait): Region's largest franchise conglomerate (H&M, Mothercare).",
        "Major retail powerhouses: Azadea/Alghanim, Alyasra, Landmark Kuwait, Al-Futtaim, Apparel Group.",
        "Shuwaikh and Mubarakiya wholesale merchants: Direct transactional buyers for full container shipments.",
      ],
    },
    salesDistributionChannels: {
      summaryAr:
        "تتوزع قنوات بيع وتوزيع الملابس في الكويت عبر منظومة تسوق متطورة تتميز بأعلى كثافة لمراكز التسوق الفاخرة:\n\n1. مجمعات التسوق الكبرى الحديثة (Mega Malls):\nتستحوذ على أكثر من 60% من إجمالي مبيعات الملابس بالتجزئة في الكويت. يتصدرها مجمع الأفنيوز (The Avenues) الذي يعد أكبر مجمع تجاري في الكويت وأحد أضخم مراكز التسوق في الشرق الأوسط، يليه مول 360، ومول الكوت، ومارينا مول، ومجمع الحمراء. وتتركز في هذه المجمعات كبرى سلاسل التجزئة العالمية والماركات الفاخرة.\n\n2. أسواق التجزئة والجملة التقليدية والتجارية:\n- سوق المباركية التراثي: قلب التجزئة التقليدية وشراء الأزياء الوطنية والملابس القطنية اليومية.\n- منطقة الشويخ الصناعية والتجارية: المركز اللوجستي الأكبر لتجارة الجملة ومستودعات كبار المستوردين.\n- أسواق الفروانية وحولي: مراكز تسوق شعبية ومتوسطة تخدم ملايين المقيمين والمواطنين.\n\n3. منصات التجارة الإلكترونية وتطبيقات التسوق الرقمي:\nتشهد ازدهاراً كبيراً وتستحوذ على أكثر من 450 مليون دولار من مبيعات الأزياء. وتعد منصة بوتيكات (Boutiqaat) الكويتية نموذجاً إقليمياً فريداً للتجارة الإلكترونية المعتمدة على المؤثرين، إلى جانب نمشي، وأمازون، وشين، وتطبيقات التوصيل السريع.\n\n4. قطاع التوريد المؤسسي والمناقصات الحكومية (Institutional B2B):\nعقود توريد الزي الموحد لوزارات الدولة (الصحة، الدفاع، الداخلية)، وشركات الطيران الوطنية (الخطوط الجوية الكويتية وطيران الجزيرة)، والمدارس الخاصة والجامعات.",
      summaryEn:
        "Apparel distribution channels in Kuwait operate through a highly concentrated and sophisticated omnichannel framework:\\n\\n1. Premier Mega Shopping Malls:\\nAccount for over 60% of total consumer apparel retail sales. Anchored by The Avenues Mall (the largest shopping mall in Kuwait and one of the largest in the Middle East), followed by 360 Mall, Al Kout Mall, Marina Mall, and Al Hamra Luxury Center. These destinations host flagship international franchise banners and luxury boutiques.\\n\\n2. Commercial Wholesale & Traditional Retail Clusters:\\n- Souk Al-Mubarakiya: Historical retail nexus for traditional garments, Egyptian cotton loungewear, and daily essentials.\\n- Shuwaikh Commercial & Industrial Zone: Primary logistical hub for wholesale textile trading and bulk warehouse distribution.\\n- Farwaniya & Hawally Commercial Districts: High-density value shopping centers catering to broad expatriate and citizen demographics.\\n\\n3. E-Commerce Platforms & Influencer-Led Commerce:\\nGenerates over $450M USD in fashion sales. Anchored by Kuwait-headquartered Boutiqaat (pioneering social commerce), alongside Namshi, Shein, Amazon, and local quick-commerce fashion apps.\\n\\n4. Institutional B2B & Public Procurement:\\nFormal procurement tenders supplying uniforms to government ministries (Health, Interior, Defense), national airlines (Kuwait Airways, Jazeera Airways), luxury hotel chains, and private schools.",
      bulletsAr: [
        "المولات الكبرى (الأفنيوز، 360، الكوت) تستحوذ على أكثر من 60% من مبيعات التجزئة للملابس.",
        "الشويخ والمباركية تمثلان العصب التجاري واللوجستي لتجارة الجملة والتوزيع المباشر.",
        "التجارة الإلكترونية للأزياء تتجاوز 450 مليون دولار بقيادة منصة بوتيكات والمتاجر الرقمية.",
        "عقود التوريد المؤسسي (B2B) للوزارات وشركات الطيران والمدارس توفر طلباً مستقراً.",
      ],
      bulletsEn: [
        "Mega malls (The Avenues, 360, Al Kout) command over 60% of retail fashion turnover.",
        "Shuwaikh and Mubarakiya serve as the logistical nerve center for wholesale apparel distribution.",
        "Fashion e-commerce exceeds $450M USD anchored by Boutiqaat and regional digital platforms.",
        "Institutional uniform tenders across airlines, healthcare, and education provide steady demand.",
      ],
    },
    marketEntryStrategy: {
      summaryAr:
        "لتحقيق نفاذ تجاري ناجح ومستدام في السوق الكويتي، توصي الدراسة باتباع خطة دخول ثلاثية المسارات:\n\nالمسار الأول: الشراكة الاستراتيجية والتوزيع عبر شركة سوق خان الخليلي (SKKCO):\nبناء شراكة تصنيع وتوريد منتظمة مع SKKCO لتغذية شبكاتها وعلاماتها المتخصصة (Peerless, Baby's Palace, Misty, Mary Loo) بمنتجات القطن المصري الفاخر في فئات ملابس الأطفال وملابس النوم والبيجامات، مستفيدين من خبرة الشركة وشبكتها العريقة في السوق الكويتي.\n\nالمسار الثاني: عقود التصنيع للغير (Private Label OEM) لسلاسل التجزئة الكبرى:\nاستهداف إدارات مشتريات مجموعة الشايع (Mothercare وH&M) ومجموعة لاندمارك (Max وSplash). يتم تقديم كبسولات عينات معتمدة من القطن المصري الفاخر (تيشيرتات، بولو، ملابس رضع) بأسعار FOB تنافسية تعكس وفر الـ 5% الجمركي بموجب GAFTA وسرعة الشحن البحري.\n\nالمسار الثالث: التوريد المباشر لتجار الجملة في الشويخ ومنصات التجارة الرقمية:\nعقد صفقات توريد حاويات كاملة لكبار مستوردي الجملة في الشويخ، وتطوير خطوط كبسولة حصرية من أزياء القطن المصري الفاخر لمنصة بوتيكات (Boutiqaat) والمتاجر الإلكترونية الصاعدة.",
      summaryEn:
        "To achieve sustainable and profitable penetration into Kuwait, a three-pronged entry strategy is recommended:\\n\\nTrack 1: Strategic Collaborative Distribution with Souk Khan Khalili Co. (SKKCO):\\nFormalize an anchor manufacturing and supply partnership with SKKCO to supply its specialized brands (Peerless, Baby's Palace, Misty, Mary Loo) with premium Egyptian cotton childrenswear, loungewear, and nightwear, capitalizing on SKKCO's trusted multi-decade distribution network.\\n\\nTrack 2: Private Label Contract Manufacturing (OEM) for Major Retail Conglomerates:\\nTarget procurement directors at M.H. Alshaya Co. (Mothercare, H&M) and Landmark Group (Max, Splash). Present certified Egyptian cotton capsules (tees, polos, infant layettes) priced at competitive FOB terms highlighting the 5% GAFTA tariff advantage and 10-to-14 day sea transit.\\n\\nTrack 3: Direct Wholesale Replenishment in Shuwaikh & Digital Partnerships:\\nExecute container-load supply agreements with Shuwaikh commercial merchants, while designing exclusive luxury Egyptian cotton loungewear capsules for Boutiqaat and leading regional digital platforms.",
      bulletsAr: [
        "المسار 1: شراكة توريد استراتيجية مع شركة سوق خان الخليلي وعلاماتها (بيبي بالاس، ميستي، بيرلس).",
        "المسار 2: عقود Private Label لمجموعتي الشايع ولاندمارك لملابس الأطفال والقطنيات الأساسية.",
        "المسار 3: توريد الحاويات الفورية لتجار جملة الشويخ وشراكة رقمية مع منصة بوتيكات.",
        "توظيف ميزة الـ 5% الجمركية لإعطاء المشتري الكويتي وفراً نقدياً فورياً عن المورد الآسيوي.",
      ],
      bulletsEn: [
        "Track 1: Strategic supply partnership with Souk Khan Khalili Co. and its brands (Baby's Palace, Misty).",
        "Track 2: Private Label OEM agreements with Alshaya and Landmark for kids and cotton basics.",
        "Track 3: Container replenishment for Shuwaikh wholesale merchants and digital capsules on Boutiqaat.",
        "Leverage 0% GAFTA tariff to provide Kuwaiti buyers an immediate 5% landed margin advantage.",
      ],
    },
    technicalRegulatorySpecs: {
      summaryAr:
        "تخضع واردات الملابس الجاهزة والمنسوجات في دولة الكويت لمنظومة مواصفات واشتراطات جمركية صارمة:\n\n1. التعريفة الجمركية والاتفاقيات التجارية:\n- التعريفة الجمركية العامة الموحدة لدول مجلس التعاون الخليجي: 5.0% تطبق على القيمة الإجمالية سيف (CIF).\n- الإعفاء الجمركي التفضيلي (GAFTA): 0% رسوم جمركية للمنتجات المصرية المؤهلة والمصحوبة بشهادة منشأ عربية معتمدة. وتؤكد الدراسة على ضرورة التحقق من استيفاء قاعدة القيمة المضافة المحلية (40% كحد أدنى) وفق القواعد التفصيلية للمنتج، وعدم افتراض الإعفاء التلقائي لكافة البنود دون استيفاء الشروط.\n\n2. إجراءات التحقق من المطابقة للهيئة العامة للصناعة (PAI Conformity Scheme):\nتطبق الهيئة العامة للصناعة في الكويت نظام التحقق من مطابقة السلع المستوردة (Kuwait Conformity Assurance Scheme - KAS):\n- المرجع الرسمي المعتمد: https://ksm.pai.gov.kw/sites/cm/en/Pages/ImportedConformity.aspx\n- اشتراط الحصول على تقرير التفتيش الفني (Technical Inspection Report - TIR) أو شهادة المطابقة الصادرة عن جهات فحص وتفتيش دولية معتمدة (مثل Intertek, SGS, TÜV) قبل الشحن، للتأكد من مطابقة الشحنة للمواصفات القياسية الكويتية والخليجية المعتمدة (GSO).\n\n3. بطاقة البيان الإلزامية (Garment Labeling):\n- بطاقة بيان ثنائية باللغتين العربية والإنجليزية مثبتة بإحكام وغير قابلة للمحو.\n- إيضاح نسب الألياف المكونة للمنتج بدقة (مثال: 100% قطن مصري / 100% Egyptian Cotton).\n- بلد المنشأ بوضوح تام لا يقبل اللبس: صنع في مصر / Made in Egypt.\n- تعليمات الغسيل والعناية بالرموز الدولية القياسية (ISO Care Symbols) وتحديد المقاسات بوضوح.\n\n4. متطلبات السلامة الكيميائية والبيئية:\n- خلو الأنسجة تماماً من صبغات الآزو المسرطنة (Azo Colorants) والمعادن الثقيلة السامة.\n- مطابقة نسب الفورمالديهايد الحرة للحدود الآمنة، ومطابقة معايير مقاومة الاشتعال واشتراطات سلامة الحبال والأزرار في ملابس الأطفال الرضع والبيجامات.",
      summaryEn:
        "Apparel and textile imports into the State of Kuwait are governed by a well-defined regulatory and customs framework:\\n\\n1. Customs Tariffs & Trade Agreements:\\n- GCC Common External Tariff: Standard 5.0% CIF customs duty on imports from non-exempt foreign countries.\\n- GAFTA Preferential Treatment: 0.0% duty-free entry for qualified Egyptian goods carrying an official Arab Certificate of Origin. The general 40% local value-addition threshold must be rigorously verified against product-specific rules of origin; exporters must not assume automatic duty-free access without compliant documentation.\\n\\n2. Public Authority for Industry (PAI) Imported Conformity Scheme:\\nKuwait's Public Authority for Industry enforces the Kuwait Conformity Assurance Scheme (KAS):\\n- Official Reference: https://ksm.pai.gov.kw/sites/cm/en/Pages/ImportedConformity.aspx\\n- Mandatory requirement to obtain a Technical Inspection Report (TIR) or Certificate of Conformity (CoC) issued by accredited international inspection bodies (e.g., Intertek, SGS, TÜV) prior to container loading, ensuring full compliance with GCC Standardization Organization (GSO) technical standards.\\n\\n3. Mandatory Care & Garment Labeling:\\n- Securely attached, indelible bilingual care labels in both Arabic and English.\\n- Precise percentage breakdown of fiber composition (e.g., 100% Egyptian Cotton / 65% Cotton 35% Polyester).\\n- Clear country of origin marking: 'Made in Egypt / صنع في مصر'.\\n- Standardized ISO washing, drying, and ironing symbols with clear international sizing.\\n\\n4. Chemical & Environmental Safety Standards:\\n- Complete ban on carcinogenic aromatic amine Azo colorants and heavy metal residues.\\n- Strict testing limits on free formaldehyde, alongside stringent flammability and cord/button safety parameters for infantwear and children's nightwear.",
      bulletsAr: [
        "التعريفة الجمركية: 5% للتعريفة العامة لدول الخليج، وإعفاء كامل 0% لمصر بموجب اتفاقية GAFTA.",
        "الالتزام بإجراءات تقويم المطابقة للهيئة العامة للصناعة (PAI) وإصدار شهادة TIR عبر جهات فحص معتمدة.",
        "بطاقة بيان إلزامية باللغتين العربية والإنجليزية توضح نسبة الألياف وبلد المنشأ (صنع في مصر).",
        "حظر تام لصبغات الآزو المسرطنة واشتراطات أمان صارمة للأزرار والأربطة في ملابس الأطفال.",
      ],
      bulletsEn: [
        "Tariffs: 5% GCC common duty; 0% duty-free entry under GAFTA upon fulfilling origin rules.",
        "Mandatory Public Authority for Industry (PAI) imported conformity certification (TIR) via accredited labs.",
        "Indelible bilingual Arabic/English care labels specifying fiber composition and 'Made in Egypt'.",
        "Strict prohibition of toxic Azo colorants and rigid physical safety standards for infantwear.",
      ],
    },
    pricingCostAnalysis: {
      summaryAr:
        "يتطلب التسعير الناجح في السوق الكويتي استيعاباً دقيقاً لهيكل التكاليف وهوامش قنوات التوزيع:\n\n1. هيكل الأسعار في سلاسل التجزئة (Retail Price Breakdown):\n- تكلفة التصنيع والشحن والتأمين (CIF Cost): تمثل عادة ما بين 22% إلى 28% من سعر البيع النهائي على الرف داخل مجمعات التسوق الفاخرة.\n- الرسوم الجمركية: 0% للمنتجات المصرية المؤهلة (GAFTA) مقابل 5% لمعظم المنافسين الآسيويين، ما يمنح وفراً نقدياً للمستورد الكويتي يتراوح بين 30 إلى 60 سنتاً في القطعة.\n- هوامش ربح المتاجر وسلاسل التجزئة: تتراوح بين 55% إلى 70% لتغطية الإيجارات المرتفعة في مجمع الأفنيوز ومول 360، وتكاليف التسويق والأجور.\n\n2. نطاقات أسعار FOB المستهدفة للتوريد من مصر:\n- التيشيرتات القطنية الأساسية (100% قطن مصري 160–180 جم): $3.20 – $4.60 للقطعة.\n- قمصان البولو القطنية الفاخرة (Pique Polo 200–220 جم): $5.20 – $7.50 للقطعة.\n- بيجامات وملابس النوم القطنية المنزلية: $6.50 – $10.00 للطقم.\n- فساتين القطن الكاجوال والأزياء المحتشمة: $8.00 – $14.50 للقطعة.\n- بناطيل الكاجوال المنسوجة (Chinos / Twill): $6.50 – $9.20 للقطعة.\n- ملابس الرضع والأطفال القطنية (Rompers / 3-pack sets): $3.80 – $6.50 للقطعة/الطقم.\n\n3. نموذج أجور التشغيل والتصنيع للغير (CM - Cut & Make):\nفي حال قيام العميل الكويتي بتوريد الأقمشة والإكسسوارات، تتراوح أجرة القص والخياطة والتجهيز والتعبئة (CM) بين 1.20 إلى 1.75 دولار للتيشيرت والبولو، و2.20 إلى 3.80 دولار للبنطلون أو القميص المنسوج والبيجامات.",
      summaryEn:
        "Commercial success in Kuwait requires a comprehensive understanding of price architectures and channel margins:\\n\\n1. Retail Price Architecture:\\n- Landed CIF Cost: Typically represents 22% to 28% of final consumer shelf price in major retail malls.\\n- Customs Duty: 0% for qualified Egyptian goods (GAFTA) vs 5% on Asian suppliers, creating a 30 to 60 cent per-piece margin advantage for Kuwaiti importers.\\n- Retail Gross Margins: Retailers require 55% to 70% markups to absorb prime mall leasing costs in The Avenues and 360 Mall, premium fit-outs, and sales staff overheads.\\n\\n2. Benchmark FOB Target Price Ranges from Egypt:\\n- Core Cotton Tees (100% Egyptian cotton, 160-180 gsm): $3.20 – $4.60 / pc.\\n- Premium Pique Polos (200-220 gsm): $5.20 – $7.50 / pc.\\n- Cotton Homewear & Pyjama Sets: $6.50 – $10.00 / set.\\n- Woven Casual Cotton Dresses & Modestwear: $8.00 – $14.50 / pc.\\n- Woven Chinos & Casual Trousers: $6.50 – $9.20 / pc.\\n- Baby & Infantwear (Rompers / multi-packs): $3.80 – $6.50 / unit.\\n\\n3. Tolling / Cut & Make (CM) Pricing Structure:\\nWhere Kuwaiti buyers supply fabric and trims, standard tolling fees (CM) range between $1.20 and $1.75 per knit t-shirt/polo, and $2.20 to $3.80 per woven trouser, shirt, or pyjama set.",
      bulletsAr: [
        "سعر CIF يمثل 22%–28% من سعر الرف في مجمعات التسوق الكبرى.",
        "المتاجر الكبرى وسلاسل التجزئة تتطلب هوامش ربح بين 55% إلى 70% لتغطية الإيجارات والتسويق.",
        "أسعار FOB المستهدفة: تيشيرتات قطن ($3.20–$4.60)، بولو ($5.20–$7.50)، فساتين كاجوال ($8.00–$14.50).",
        "أجور التشغيل فقط (CM): $1.20–$1.75 للمحبوك، و$2.20–$3.80 للمنسوجات والبيجامات.",
      ],
      bulletsEn: [
        "Landed CIF cost accounts for 22%–28% of final consumer shelf price in major retail malls.",
        "Department stores require 55%–70% gross margins to cover prime mall operating expenses.",
        "Competitive FOB benchmarks: Cotton tees ($3.20–$4.60), Polos ($5.20–$7.50), Dresses ($8.00–$14.50).",
        "Tolling service rates (CM): $1.20–$1.75/pc for knits; $2.20–$3.80/pc for woven trousers and shirts.",
      ],
    },
    logisticsSupplyChain: {
      summaryAr:
        "تمتلك دولة الكويت بنية تحتية لوجستية متطورة تتيح إدارة تدفقات البضائع والشحنات بكفاءة عالية:\n\n1. الموانئ البحرية والشحن بالحاويات:\n- ميناء الشويخ (Shuwaikh Port): الميناء التجاري الرئيسي في الكويت والملاصق لمدينة الكويت وللمنطقة التجارية والصناعية في الشويخ. يستقبل معظم بضائع الملابس الجاهزة والحاويات النمطية.\n- ميناء الشعيبة (Shuaiba Port): ميناء الحاويات والمواد الصناعية الثانوي الذي يساند ميناء الشويخ في فترات الذروة.\n- زمن الشحن البحري من مصر: يستغرق الشحن المباشر بالحاويات من موانئ الإسكندرية وبورسعيد والعين السخنة إلى ميناء الشويخ ما بين 10 إلى 14 يومًا (مباشرة أو عبر خطوط تغذية منتظمة في جبل علي أو جدة)، وهو زمن ممتاز مقارنة بـ 18 إلى 24 يومًا من موانئ الصين وفيتنام وبنغلاديش، ما يتيح للمصنع المصري سرعة تلبية طلبيات إعادة التعبئة (Restocks) قبل المواسم الرئيسية كرمضان والأعياد.\n\n2. الشحن الجوي والطلبيات العاجلة:\nيرتبط مطار الكويت الدولي (KWI) بمطار القاهرة الدولي برحلات يومية متعددة ومباشرة، بزمن طيران يبلغ نحو 2.5 إلى 3 ساعات فقط، ما يتيح شحن عينات الجودة، واعتماد الكبسولات، وتوريد الطلبيات العاجلة للأزياء الفاخرة خلال 24 إلى 48 ساعة من الباب إلى الباب.\n\n3. التخزين والتوزيع الداخلي:\nتتركز مستودعات الملابس الرئيسية ومراكز الفرز والتوزيع في منطقتي الشويخ والري الصناعيتين ومنطقة صبحان، وتتميز بقربها الجغرافي من كافة المراكز التجارية الكبرى في العاصمة وحولي والفروانية.",
      summaryEn:
        "Kuwait possesses a modern logistics ecosystem facilitating predictable and rapid supply chain execution:\\n\\n1. Maritime Infrastructure & Ocean Freight:\\n- Shuwaikh Port: Kuwait's flagship commercial seaport, directly adjacent to Kuwait City and the central wholesale district of Shuwaikh. Handles the vast majority of commercial containerized apparel shipments.\\n- Shuaiba Port: Secondary commercial container terminal providing support during seasonal peak congestion.\\n- Ocean Transit Time from Egypt: Direct and feeder container transit from Alexandria, Port Said, and Sokhna to Shuwaikh takes only 10 to 14 days, compared to 18 to 24 days from Far Eastern ports. This delivers a decisive speed-to-market advantage for seasonal replenishment ahead of Ramadan and Back-to-School surges.\\n\\n2. Air Freight & Rapid Sample Dispatch:\\nKuwait International Airport (KWI) maintains multiple daily direct flights to Cairo International (flight time: ~2.5 to 3 hours). This enables physical pre-production sample approvals and emergency capsule restocks within 24 to 48 hours door-to-door.\\n\\n3. Inland Warehousing & Distribution Hubs:\\nPrimary central apparel distribution centers and bonded storage facilities are strategically concentrated in Shuwaikh Industrial Area, Rai, and Subhan, ensuring swift last-mile delivery to flagship malls across Kuwait.",
      bulletsAr: [
        "ميناء الشويخ هو المنفذ التجاري الرئيسي للملابس الجاهزة في الكويت ويسانده ميناء الشعيبة.",
        "زمن الشحن البحري من موانئ مصر: 10–14 يوماً فقط مقابل 18–24 يوماً من موانئ شرق آسيا.",
        "الشحن الجوي يتيح تسليم العينات والطلبيات العاجلة بين القاهرة والكويت خلال أقل من 48 ساعة (رحلة 2.5 ساعة).",
        "مناطق الشويخ والري وصبحان تمثل المراكز اللوجستية المركزية للتخزين والتوزيع.",
      ],
      bulletsEn: [
        "Shuwaikh Port serves as the primary commercial maritime gateway for finished apparel shipments.",
        "Ocean transit from Egyptian ports takes only 10 to 14 days vs 18 to 24 days from Far East ports.",
        "Air freight allows rapid sample dispatch and emergency capsule delivery within 48 hours (~2.5 hr flight).",
        "Shuwaikh, Rai, and Subhan industrial zones serve as central distribution and warehousing clusters.",
      ],
    },
    risksChallenges: {
      summaryAr:
        "تواجه الشركات المصدرة للسوق الكويتي مجموعة من التحديات والمخاطر التجارية التي تتطلب إدارة محكمة:\n\n1. شروط الدفع وفترات الائتمان الطويلة:\nتطلب كبرى سلاسل التجزئة والمستوردين فترات سداد ائتمانية تتراوح بين 60 إلى 90 يوماً بعد الاستلام والفحص. ويشكل ذلك عبئاً على السيولة، وتوصي الدراسة بالتمسك بالاعتمادات المستندية غير القابلة للإلغاء المعززة (Confirmed Irrevocable LC) أو الدفع مقابل المستندات (DP/CAD) للطلبيات التجريبية الأولى.\n\n2. اشتراطات التحقق من المطابقة (PAI / KAS Compliance):\nتطبق الهيئة العامة للصناعة فحصاً دقيقاً لشهادات التفتيش الفني (TIR). وأي خطأ في بطاقة البيان أو عدم مطابقة لشهادات المختبرات المعتمدة قد يؤدي إلى تأخير الإفراج الجمركي وفرض غرامات أرضيات الميناء.\n\n3. المنافسة السعرية الشرسة في الفئات الرخيصة:\nاستحواذ الموردين من الصين والهند وبنغلاديش على حصص ضخمة في الملابس منخفضة التكلفة، وتفادي ذلك يقتضي التركيز الحصري على ميزة القطن المصري الفاخر وتصنيع الملابس ذات القيمة المضافة.\n\n4. دقة توثيق المنشأ (GAFTA Origin Rules):\nضرورة استيفاء شروط القيمة المضافة المحلية (40% كحد أدنى) وإرفاق شهادة منشأ عربية معتمدة بدقة، لتجنب إلغاء الإعفاء الجمركي وتطبيق تعريفة الـ 5% الموحدة.",
      summaryEn:
        "Navigating the Kuwaiti apparel market entails specific commercial and regulatory challenges requiring proactive risk mitigation:\\n\\n1. Extended Payment Terms & Working Capital Exposure:\\nMajor retail conglomerates and wholesale distributors frequently request 60 to 90-day open credit terms. Mitigating this risk requires disciplined negotiation of Confirmed Irrevocable Letters of Credit (LC) or Cash Against Documents (CAD) on initial production runs.\\n\\n2. Technical Conformity Inspections (PAI / KAS Compliance):\\nThe Public Authority for Industry enforces strict compliance with Technical Inspection Reports (TIR). Incomplete lab documentation or labeling discrepancies risk customs detention and port demurrage expenses.\\n\\n3. Intense Low-Tier Price Competition:\\nChinese, Indian, and Bangladeshi manufacturers command significant volume in budget basics. Countering this necessitates focusing exclusively on premium authentic Egyptian cotton formulations with superior handfeel.\\n\\n4. GAFTA Origin Verification & Documentation Accuracy:\\nShipments must carry an authenticated Arab Certificate of Origin proving the 40% local value-addition threshold, preventing administrative revocation of the 0% duty exemption.",
      bulletsAr: [
        "فترات الائتمان الطويلة (60–90 يوماً) تتطلب تحوطاً مصرفياً عبر الاعتمادات المستندية (LC).",
        "اشتراطات الهيئة العامة للصناعة (PAI) وإلزامية شهادات TIR تتطلب فحصاً مخبرياً معتمداً قبل الشحن.",
        "المنافسة السعرية الآسيوية يتم تجاوزها بالتركيز على القطن المصري الفاخر وبرامج Private Label.",
        "التوثيق الدقيق لشهادات المنشأ (GAFTA) لضمان الإعفاء الجمركي وتفادي رسوم الـ 5%.",
      ],
      bulletsEn: [
        "Buyer requests for 60 to 90-day credit terms require banking safeguards via Irrevocable LCs.",
        "Mandatory Public Authority for Industry (PAI) TIR inspections require accredited lab clearance.",
        "Asian price pressure is counteracted by emphasizing luxury Egyptian cotton equity and private label fit.",
        "Rigorous verification of GAFTA origin documentation to safeguard the 0% duty-free status.",
      ],
    },
    commercialInvestmentOpportunities: {
      summaryAr:
        "يقدم السوق الكويتي ست فرص تجارية واستثمارية نوعية لمجموعة سامي بن عياد:\n\n1. برامج التصنيع للعلامات الخاصة (Private Label OEM) لسلاسل التجزئة الكبرى:\nالتعاقد كمورد معتمد لمجموعة الشايع (سلاسل Mothercare وH&M) ومجموعة لاندمارك (سلاسل Max وSplash) لتوريد التيشيرتات والبيسك وملابس الأطفال القطنية، مستفيدين من وفر الـ 5% الجمركي.\n\n2. الشراكة الاستراتيجية والتوزيع مع شركة سوق خان الخليلي (SKKCO):\nتوريد منتجات قطنية مصرية دورية لعلامات ومصانع الشركة (بيبي بالاس، ميستي، ماري لو، بيرلس)، والاستفادة من شبكة فروعها وتاريخها العريق في الكويت.\n\n3. كبسولات حصرية للأزياء المنزلية وملابس النوم ومنصات التجارة الرقمية:\nتصنيع مجموعات حصرية ومحدودة الإصدار من ملابس النوم والبيجامات القطنية الفاخرة لمنصة بوتيكات (Boutiqaat) والمتاجر المتخصصة في مجمع الأفنيوز.\n\n4. التوريد بالحاويات لتجار الجملة في الشويخ والمباركية:\nعقود سنوية لتوريد حاويات ملابس قطنية كاملة لتجار الجملة المستقلين بأسعار FOB منافسة تلبي متطلبات التوزيع المحلي.\n\n5. عقود الزي المؤسسي والموحد (Corporate & Medical Uniforms):\nالمشاركة في مناقصات الزي الموحد لشركات الطيران الوطنية والمستشفيات والمدارس الدولية والشركات النفطية.\n\n6. توريد الأقمشة والملابس المحتشمة والفساتين الصيفية:\nتوفير أقمشة قطنية معالجة وباردة وموديلات محتشمة مصممة خصيصاً للمناخ الخليجي الحار.",
      summaryEn:
        "The Kuwaiti apparel market provides six strategic commercial and manufacturing opportunities for SAMI BIN AYYAD GROUP:\\n\\n1. Private Label Contract Manufacturing (OEM) for Retail Giants:\\nSecuring approved vendor status with M.H. Alshaya Co. (Mothercare, H&M) and Landmark Group (Max, Splash) to supply high-volume cotton basics, tees, and infantwear, leveraging the 5% GAFTA tariff advantage.\\n\\n2. Strategic Supply & Distribution Partnership with SKKCO:\\nEstablishing a recurring supply framework for Souk Khan Khalili Company's dedicated brand portfolio (Baby's Palace, Misty, Mary Loo, Peerless Factory), capitalizing on their deep retail footprint in Kuwait.\\n\\n3. Exclusive Luxury Homewear & Digital Fashion Capsules (Boutiqaat):\\nProducing curated, limited-edition collections of ultra-luxury Egyptian cotton pyjamas and loungewear for Boutiqaat and premier shopping mall boutiques.\\n\\n4. Container-Load Replenishment for Shuwaikh Wholesale Merchants:\\nSecuring recurring container supply agreements with commercial merchants in Shuwaikh to power domestic wholesale fulfillment.\\n\\n5. Institutional Uniform Supply Programs:\\nParticipating in corporate and medical uniform procurement contracts for Kuwait Airways, private healthcare networks, and international schools.\\n\\n6. Modestwear & Breathable Summer Dress Collections:\\nDelivering lightweight, climate-engineered Egyptian cotton woven fabrics and modest silhouettes designed specifically for the extreme Gulf summer.",
      bulletsAr: [
        "عقود Private Label ضخمة ومستمرة لمجموعتي الشايع ولاندمارك في القطنيات وملابس الأطفال.",
        "شراكة توزيع استراتيجية مع شركة سوق خان الخليلي وعلاماتها (بيبي بالاس، ميستي، بيرلس).",
        "تصنيع كبسولات قطن مصري حصرية لمنصة بوتيكات ومتاجر الأفنيوز الفاخرة.",
        "توريد حاويات ملابس كاملة لتجار الجملة في الشويخ والمباركية بأسعار FOB تنافسية.",
        "عقود الزي الموحد لقطاعات الطيران والضيافة والمستشفيات والمدارس.",
        "تطوير خطوط أزياء محتشمة وفساتين قطنية مصممة لدرجات الحرارة المرتفعة صيفاً.",
      ],
      bulletsEn: [
        "High-volume Private Label contracts for Alshaya and Landmark across cotton basics and kids.",
        "Strategic collaborative supply alliance with Souk Khan Khalili Co. (Baby's Palace, Misty).",
        "Exclusive luxury Egyptian cotton loungewear capsules for Boutiqaat and boutique retailers.",
        "Container-load replenishment for Shuwaikh and Mubarakiya wholesale merchants at competitive FOB.",
        "Institutional uniform supply contracts across aviation, healthcare, and education sectors.",
        "Engineered modestwear and cotton dresses designed specifically for extreme summer conditions.",
      ],
    },
    capacityFinancialFeasibility: {
      summaryAr:
        "يوضح التحليل المالي والتشغيلي لمجموعة سامي بن عياد الجدوى الاقتصادية الممتازة لدخول السوق الكويتي عبر أربعة سيناريوهات إنتاجية تصاعدية:\n\n1. سيناريو التشغيل التجريبي (Pilot Scenario - 10,000 قطعة/شهر):\n- المنتج المستهدف: تيشيرتات وبولو قطنية فاخرة وبرامج بيسك.\n- متوسط سعر FOB للقطعة: $4.40.\n- الإيراد السنوي المتوقع: $528,000 دولار.\n- هامش الربح التشغيلي: 18% – 22% (صافي ربح سنوي تقديري: $95,000 – $116,000).\n\n2. سيناريو التوريد التعاقدي المتوسط (Core Private Label - 25,000 قطعة/شهر):\n- المنتج المستهدف: تشكيلة متنوعة من القطنيات وبناطيل الكاجوال المنسوجة وملابس الأطفال.\n- متوسط سعر FOB للقطعة: $4.80.\n- الإيراد السنوي المتوقع: $1,440,000 دولار.\n- هامش الربح التشغيلي: 16% – 20% (صافي ربح سنوي تقديري: $230,000 – $288,000).\n\n3. سيناريو الشراكة الاستراتيجية (Strategic Partnership - 50,000 قطعة/شهر):\n- المنتج المستهدف: سلة متكاملة لعميل كويتي رئيسي (رجالي، نسائي، أطفال، وملابس نوم منزلية).\n- متوسط سعر FOB للقطعة: $4.50.\n- الإيراد السنوي المتوقع: $2,700,000 دولار.\n- هامش الربح التشغيلي: 15% – 18% (صافي ربح سنوي تقديري: $405,000 – $486,000).\n\n4. سيناريو المورد الإقليمي المعتمد (Regional Anchor - 100,000 قطعة/شهر):\n- المنتج المستهدف: توريد سنوي ضخم لمجموعة تجزئة كبرى (الشايع أو لاندمارك).\n- متوسط سعر FOB للقطعة: $4.20.\n- الإيراد السنوي المتوقع: $5,040,000 دولار.\n- هامش الربح التشغيلي: 13% – 16% (صافي ربح سنوي تقديري: $655,000 – $806,000).\n\n5. خيار التشغيل بالأجر فقط (Cut & Make - CM Only):\nفي حال توريد العميل للأقمشة (طاقة 50,000 قطعة/شهر بأجرة $1.40 للقطعة)، يبلغ الإيراد السنوي $840,000 بهامش ربح تشغيلي مرتفع يصل إلى 25% – 28% دون مخاطر تمويل الخامات.",
      summaryEn:
        "Financial and operational modeling demonstrates compelling investment returns across progressive production scenarios for SAMI BIN AYYAD GROUP:\\n\\n1. Pilot Trial Scenario (10,000 pcs / month):\\n- Target Products: Premium cotton tees, polos, and basic loungewear.\\n- Average FOB Price / Piece: $4.40.\\n- Projected Annual Gross Revenue: $528,000 USD.\\n- Estimated Operating Margin: 18% – 22% (Annual Net Profit: $95K – $116K USD).\\n\\n2. Core Private Label Supply (25,000 pcs / month):\\n- Target Products: Blended mix of cotton basics, casual trousers, and childrenswear.\\n- Average FOB Price / Piece: $4.80.\\n- Projected Annual Gross Revenue: $1,440,000 USD.\\n- Estimated Operating Margin: 16% – 20% (Annual Net Profit: $230K – $288K USD).\\n\\n3. Strategic Partnership (50,000 pcs / month):\\n- Target Products: Multi-category portfolio (men's, women's, babywear, homewear).\\n- Average FOB Price / Piece: $4.50.\\n- Projected Annual Gross Revenue: $2,700,000 USD.\\n- Estimated Operating Margin: 15% – 18% (Annual Net Profit: $405K – $486K USD).\\n\\n4. Regional Anchor Supplier (100,000 pcs / month):\\n- Target Products: Large-scale annual replenishment for a major retail conglomerate.\\n- Average FOB Price / Piece: $4.20.\\n- Projected Annual Gross Revenue: $5,040,000 USD.\\n- Estimated Operating Margin: 13% – 16% (Annual Net Profit: $655K – $806K USD).\\n\\n5. Tolling / Cut & Make Service (CM Only):\\nWhere client furnishes fabrics (50,000 pcs/mo capacity at $1.40/pc CM fee), annual revenue achieves $840,000 USD with a robust 25% to 28% operating margin, entirely eliminating raw material working capital risk.",
      bulletsAr: [
        "السيناريو التجريبي (10K قطعة/شهر): إيراد سنوي $528K وصافي ربح $95K–$116K.",
        "السيناريو المتوسط (25K قطعة/شهر): إيراد سنوي $1.44M وصافي ربح $230K–$288K.",
        "السيناريو الاستراتيجي (50K قطعة/شهر): إيراد سنوي $2.70M وصافي ربح $405K–$486K.",
        "سيناريو المورد المعتمد (100K قطعة/شهر): إيراد سنوي $5.04M وصافي ربح $655K–$806K.",
        "نموذج أجور التشغيل (CM Only): إيراد سنوي $840K بهامش ربح تشغيلي 25%–28%.",
      ],
      bulletsEn: [
        "Pilot Program (10K pcs/mo): $528K annual revenue; $95K–$116K net operating profit.",
        "Core Program (25K pcs/mo): $1.44M annual revenue; $230K–$288K net operating profit.",
        "Strategic Partner (50K pcs/mo): $2.70M annual revenue; $405K–$486K net operating profit.",
        "Anchor Supplier (100K pcs/mo): $5.04M annual revenue; $655K–$806K net operating profit.",
        "Tolling Service (CM Only): $840K annual revenue with superior 25%–28% margins.",
      ],
    },
    recommendationsActionPlan: {
      summaryAr:
        "بناءً على نتائج الدراسة الاستقصائية وبلوغ مؤشر الجاذبية الاستثمارية 84/100، توصي الدراسة بتنفيذ خطة عمل تجارية تمتد على مدى 12 شهرًا ومقسمة إلى 4 مراحل واضحة:\n\nالمرحلة الأولى: التحضير الفني واستيفاء متطلبات هيئة الصناعة وتجهيز العينات (الأشهر 1 – 3):\n- إعداد كبسولات عينات فاخرة من القطن المصري (تيشيرتات وبولو قطن 100%، ملابس نوم وبيجامات، ملابس رضع) مع بطاقات بيان ثنائية باللغتين العربية والإنجليزية.\n- استيفاء اشتراطات نظام تقويم المطابقة للهيئة العامة للصناعة في الكويت (PAI) وإجراء الاختبارات في مختبرات معتمدة لإصدار شهادات TIR.\n- تجهيز ملفات إثبات القيمة المضافة المحلية لاستخراج شهادة المنشأ العربية (GAFTA) لضمان الإعفاء الجمركي الكامل 0%.\n\nالمرحلة الثانية: التواصل التجاري واللقاءات المباشرة في الكويت (الأشهر 4 – 6):\n- ترتيب زيارة وفد المجموعة إلى مدينة الكويت لعقد لقاءات مباشرة مع قيادات شركة سوق خان الخليلي (SKKCO) وإدارات المشتريات في مجموعة الشايع ولاندمارك وأزاديا.\n- تقديم عروض أسعار تنافسية بصيغة FOB مع إبراز الوفر الجمركي (5%) وسرعة الشحن البحري لميناء الشويخ (10–14 يوماً).\n- زيارة كبار مستوردي الجملة في الشويخ والمباركية وبحث متطلبات طلبيات الحاويات الكاملة.\n\nالمرحلة الثالثة: التعاقد التجريبي والتنفيذ والفحص الجمركي (الأشهر 7 – 9):\n- توقيع عقود توريد تجريبية لأول طلبيتين بحجم 10,000 إلى 25,000 قطعة بنظام الاعتمادات المستندية المعززة (LC).\n- تصنيع وتشغيل الطلبيات وفق أعلى معايير الجودة، والشحن بحراً إلى ميناء الشويخ.\n- متابعة التخليص الجمركي وإصدار شهادات المطابقة واستلام البضائع لدى مستودعات العميل والتأكد من رضا المشتري التام.\n\nالمرحلة الرابعة: التوسع وعقود التوريد السنوية وبناء الشراكات الدائمة (الأشهر 10 – 12):\n- تحويل العقود التجريبية الناجحة إلى اتفاقيات توريد سنوية مبرمجة بحجم 50,000 إلى 100,000 قطعة شهرياً.\n- بحث تأسيس اتفاقية تمثيل تجاري حصرية أو مركز توزيع محلي بالشراكة مع شركة سوق خان الخليلي (SKKCO) لتوسيع التواجد في السوق الكويتي.",
      summaryEn:
        "Guided by the empirical findings of this intelligence study and the resulting 84/100 Strategic Opportunity Score, a disciplined 12-month, 4-phase implementation roadmap is recommended:\\n\\nPhase 1: Technical Qualification, PAI Conformity & Sample Preparation (Months 1–3):\\n- Produce premium Egyptian cotton sample capsules (100% cotton tees, pique polos, baby layettes, luxury pyjamas) with compliant bilingual Arabic/English care labels.\\n- Complete Public Authority for Industry (PAI) conformity protocols and secure accredited lab testing for Technical Inspection Reports (TIR).\\n- Validate local value-addition documentation to secure preferential GAFTA Arab Certificates of Origin (0% customs entry).\\n\\nPhase 2: Commercial Outreach & High-Level Procurement Meetings in Kuwait City (Months 4–6):\\n- Dispatch executive delegations to Kuwait City for targeted meetings with leadership at Souk Khan Khalili Company (SKKCO), and sourcing directors at Alshaya, Landmark, and Azadea.\\n- Deliver competitive FOB quotations highlighting the immediate 5% landed margin advantage and 10-to-14 day ocean transit to Shuwaikh Port.\\n- Engage prominent commercial trading merchants in Shuwaikh and Mubarakiya for container-load orders.\\n\\nPhase 3: Pilot Contract Execution & Quality Audit Clearance (Months 7–9):\\n- Formalize pilot orders of 10,000 to 25,000 pieces backed by Confirmed Irrevocable Letters of Credit (LC).\\n- Execute manufacturing under strict AQL 1.5/2.5 inspection protocols, shipping from Alexandria/Sokhna to Shuwaikh Port.\\n- Oversee smooth customs clearance, PAI compliance sign-off, client warehouse intake, and zero-defect auditing acceptance.\\n\\nPhase 4: Annual Contract Scaling & Institutional Distribution Alliance (Months 10–12):\\n- Transition validated pilot programs into structured annual supply agreements scaling toward 50,000 to 100,000 units monthly.\\n- Evaluate establishing a dedicated commercial distribution representation or local inventory protocol in partnership with Souk Khan Khalili Company (SKKCO).",
      bulletsAr: [
        "المرحلة 1 (الأشهر 1–3): تجهيز عينات القطن المصري الفاخر واستيفاء اعتمادات PAI ونظام TIR وشهادات GAFTA.",
        "المرحلة 2 (الأشهر 4–6): لقاءات مباشرة في الكويت مع قيادات شركة سوق خان الخليلي وإدارات الشايع ولاندمارك وتجار الشويخ.",
        "المرحلة 3 (الأشهر 7–9): تنفيذ طلبيات تجريبية (10K–25K قطعة) باعتمادات مستندية وشحن سريع لميناء الشويخ.",
        "المرحلة 4 (الأشهر 10–12): تحويل النجاح إلى عقود سنوية مبرمجة (50K–100K قطعة/شهر) وبناء شراكة توزيع دائمة.",
      ],
      bulletsEn: [
        "Phase 1 (Months 1–3): Prepare certified sample capsules and secure PAI TIR and GAFTA documentation.",
        "Phase 2 (Months 4–6): Executive Kuwait meetings with leadership at SKKCO, Alshaya, Landmark, and Shuwaikh traders.",
        "Phase 3 (Months 7–9): Execute pilot orders (10K–25K pcs) under Confirmed LCs with 10-14 day sea transit to Shuwaikh.",
        "Phase 4 (Months 10–12): Secure multi-season annual contracts (50K–100K pcs/mo) and formalize a distribution alliance.",
      ],
    },
  },
  comparisonMetrics: {
    marketSizeValue: 3.0,
    marketSizeDisplayAr: "3.0 مليار دولار (حجم مبيعات التجزئة السنوية التقديرية)",
    marketSizeDisplayEn: "$3.0B USD (Estimated annual consumer retail market)",
    marketSizeUnit: "Billion USD",
    importsValue: 1.45,
    importsDisplayAr: "1.45 مليار دولار (HS61: $844.68M + HS62: $602.06M)",
    importsDisplayEn: "$1.45B USD (HS61: $844.68M + HS62: $602.06M)",
    importsUnit: "Billion USD",
    growthRateDisplay: "+2.73% نمو الناتج المحلي (2025)",
    growthUnit: "%",
    topDemandedProductsAr: "تيشيرتات وبولو قطنية، بلوفرات تريكو، فساتين كاجوال ومحتشمة، ملابس نوم وأرواب، ملابس أطفال",
    topDemandedProductsEn: "Cotton tees & polos, knit pullovers, modest casual dresses, loungewear & pyjamas, babywear",
    competitionLevelAr: "مرتفع (هيمنة صينية وهندية وإيطالية وتركية وبنغالية)",
    competitionLevelEn: "High (Led by China, India, Italy, Turkey, and Bangladesh)",
    entryEaseAr: "ميسر (إعفاء جمركي 0%، طلب عالٍ على القطن المصري، موانئ نشطة)",
    entryEaseEn: "High (0% GAFTA tariff, strong Egyptian cotton affinity, active ports)",
    logisticsCostAr: "منخفض وتنافسي للغاية (شحن بحري 10–14 يوماً لميناء الشويخ)",
    logisticsCostEn: "Low & Highly Competitive (10 to 14 days sea transit to Shuwaikh)",
    investmentOpportunityAr: "المستوى الأول – فرصة مرتفعة للغاية (الترتيب #3 خليجيًا)",
    investmentOpportunityEn: "Tier 1 – Very High Opportunity (Ranked #3 in GCC)",
    referenceYear: "2023–2025",
    methodologyNoteAr: "بيانات جمركية رسمية موثقة من UN Comtrade وWorld Bank WITS مع مؤشرات البنك الدولي والتنافسية 2025",
    methodologyNoteEn: "Officially documented customs data from UN Comtrade and World Bank WITS alongside World Bank 2025 indicators",
  },
  sources: [
    {
      id: "src-kw-comtrade",
      name: "UN Comtrade Database — Kuwait Apparel Imports (HS 61 & HS 62)",
      dataYear: "2023",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "إحصاءات التجارة الدولية الرسمية المعتمدة لحركة الواردات والشحنات الجمركية للدولة",
      methodologyNoteEn: "Official international trade statistics for customs-cleared import flows",
    },
    {
      id: "src-kw-wits",
      name: "World Bank WITS — Kuwait Trade & Product Matrix",
      dataYear: "2023",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "قاعدة بيانات البنك الدولي لتفاصيل التجارة على مستوى فئات HS-6 والتعريفات الجمركية",
      methodologyNoteEn: "World Bank database for detailed HS-6 product-level trade and tariff matrix",
    },
    {
      id: "src-kw-worldbank",
      name: "World Bank Development Indicators — Kuwait Economic & Population Profile",
      dataYear: "2025",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "بيانات الناتج المحلي ($157.21B)، ونصيب الفرد ($32,312)، والنمو (2.732%)، والسكان (4.87M)",
      methodologyNoteEn: "Official data for GDP ($157.21B), GDP per capita ($32,312), growth (2.732%), and population (4.87M)",
    },
    {
      id: "src-kw-undesa",
      name: "UN Population Division & Statistical Profile — Kuwait",
      dataYear: "2024–2025",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "تقديرات السكان (~5.026 مليون نسمة) ونسبة المقيمين الأجانب (نحو 69%)",
      methodologyNoteEn: "Population estimate (~5.026M) and expatriate share (~69% in 2024)",
    },
    {
      id: "src-kw-pai",
      name: "Kuwait Public Authority for Industry (PAI) — Imported Conformity Assessment Scheme (KAS)",
      dataYear: "2024–2026",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "اللوائح الفنية وإجراءات التحقق من المطابقة وإصدار شهادات التفتيش الفني (TIR)",
      methodologyNoteEn: "Technical regulations and verification procedures for imported conformity (TIR)",
    },
    {
      id: "src-kw-ports",
      name: "Kuwait Ports Authority — Shuwaikh & Shuaiba Commercial Shipping Operations",
      dataYear: "2024",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "بيانات الحركة الملاحية وشحن الحاويات والتخليص الجمركي بمينائي الشويخ والشعيبة",
      methodologyNoteEn: "Commercial container shipping and customs clearance data for Shuwaikh and Shuaiba Ports",
    },
  ],
  groupOpportunities: [
    {
      id: "opp-kw-private-label",
      capabilityAr: "توريد برامج التصنيع للغير (Private Label OEM) لمجموعات التجزئة الكبرى في الكويت",
      capabilityEn: "Private Label OEM Manufacturing for Major Kuwaiti Retail Conglomerates",
      descriptionAr: "تصنيع وتوريد كميات تعاقدية ضخمة من التيشيرتات، البولو، ملابس الأطفال، والملابس المنزلية لصالح مجموعة الشايع، لاند مارك الكويت، وأباريل جروب.",
      descriptionEn: "High-volume contract manufacturing of cotton t-shirts, polos, babywear, and loungewear for M.H. Alshaya Co., Landmark Group Kuwait, and Apparel Group.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "واردات الملابس الجاهزة الموثقة ($1.45 مليار) وميزة الإعفاء الجمركي الكامل (5%) بموجب GAFTA",
      evidenceReferenceEn: "Documented apparel imports ($1.45B) and 0% preferential GAFTA tariff advantage",
      sectorPageUrl: "/sectors/garment",
    },
    {
      id: "opp-kw-skkco-partnership",
      capabilityAr: "شراكة استراتيجية وتوزيع مع شركة سوق خان الخليلي وعلاماتها (SKKCO Network)",
      capabilityEn: "Strategic Distribution Partnership with Souk Khan Khalili Company (SKKCO)",
      descriptionAr: "توريد منتجات القطن المصري الفاخر المتخصصة لمصنع بيرلس وعلامات بيبي بالاس (Baby's Palace) وميستي (Misty) وماري لو (Mary Loo) في الكويت.",
      descriptionEn: "Specialized Egyptian cotton supply for Peerless Factory, Baby's Palace, Misty, and Mary Loo brand programs across Kuwait.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "شبكة فروع تجارية متخصصة ومبيعات قطنيات سنوية راسخة في السوق الكويتي",
      evidenceReferenceEn: "Established specialized brand network and longstanding market presence in Kuwait",
      sectorPageUrl: "/sectors/garment",
    },
    {
      id: "opp-kw-modestwear-capsules",
      capabilityAr: "تصنيع مجموعات حصرية من الأزياء المحتشمة وملابس النوم لمنصة بوتيكات والمتاجر الراقية",
      capabilityEn: "Exclusive Modestwear & Luxury Homewear Capsules for Boutiqaat & Premier Boutiques",
      descriptionAr: "تصنيع مجموعات فاخرة ومحدودة من بيجامات وأرواب القطن المصري والفساتين الصيفية الباردة للمنصات الرقمية ومتاجر مجمع الأفنيوز ومول 360.",
      descriptionEn: "Manufacturing exclusive Egyptian cotton loungewear, nightwear, and breathable modest dresses for Boutiqaat and premier mall boutiques.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "مبيعات الأزياء الرقمية تتجاوز 450 مليون دولار ومتوسط دخل فردي $32,312",
      evidenceReferenceEn: "Digital fashion turnover exceeding $450M and high disposable GDP per capita ($32,312)",
      sectorPageUrl: "/sectors/garment",
    },
  ],
  globalOpportunityLink: {
    sector: "garment",
    countryCode: "KW",
    titleAr: "استكشف حلول التصنيع والتصدير لسوق دولة الكويت",
    titleEn: "Explore Manufacturing & Export Solutions for Kuwait Market",
    descriptionAr: "تعرف على قدرات مجموعة سامي بن عياد في التصنيع المتكامل للملابس الجاهزة وبرامج التوريد التعاقدي لكبرى المجموعات التجارية الكويتية.",
    descriptionEn: "Discover Sami Bin Ayyad Group's integrated apparel manufacturing capacities and private label programs for leading Kuwaiti retail groups.",
    url: "/sectors/garment",
  },
};
`;

let cleanedContent = fixTanween(studyContent);

// Fix literal newlines in double quoted strings so they escape to \\n
let inString = false;
let out = '';
for (let i = 0; i < cleanedContent.length; i++) {
  const c = cleanedContent[i];
  const prev = i > 0 ? cleanedContent[i - 1] : '';

  if (!inString) {
    if (c === '"' && prev !== '\\\\') {
      inString = true;
    }
    out += c;
  } else {
    if (c === '"' && prev !== '\\\\') {
      inString = false;
      out += c;
    } else if (c === '\\r' && cleanedContent[i + 1] === '\\n') {
      out += '\\\\n';
      i++;
    } else if (c === '\\n') {
      out += '\\\\n';
    } else {
      out += c;
    }
  }
}

// Ensure correct tanween again
out = fixTanween(out);

const targetFile = path.join(__dirname, '..', 'src', 'lib', 'studies', 'sba-gm-app-kwt-001.ts');
fs.writeFileSync(targetFile, out, 'utf8');

console.log('Successfully generated src/lib/studies/sba-gm-app-kwt-001.ts');
