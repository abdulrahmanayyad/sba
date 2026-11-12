import type { GlobalMarketStudy } from "../global-markets-data";

/**
 * VERIFIED MARKET INTELLIGENCE STUDY
 * Report Code: SBA-GM-APP-SAU-001
 * Kingdom of Saudi Arabia — Apparel & Textiles Sector
 * Edition: 1.0 | Research Date: 2026-11-12
 * Strictly reflects externally researched data supplied for publication — zero fabricated figures.
 */
export const STUDY_SAU_APPAREL_001: GlobalMarketStudy = {
  id: "SBA-GM-APP-SAU-001",
  slug: "saudi-arabia-apparel-textiles",
  sector: "garment",
  scope: "global",
  region: "arab_world",
  apparelSubRegion: "gcc",
  priorityGrade: "A",
  marketRole: "consumer_market",
  dataBasis: "hs61_hs62_customs",
  tradeIndicatorNumericUsdB: 4.39,
  tradeIndicatorDisplay: "4.39B USD",
  tradeIndicatorYear: "2025",
  tradeIndicatorScopeAr: "واردات HS61+HS62 (أحدث رقم مرصود في مجموعة المصادر 2025) + تفصيل WITS لعام 2023 ($4.265B)",
  tradeIndicatorScopeEn: "HS61+HS62 imports; latest reported in source set (2025), alongside detailed 2023 WITS split ($4.265B)",
  dataCompletenessAr: "خط أساس تجاري متاح (2023 و2025 + عينة HS6 لـ 2024)؛ بقية تفصيلات HS6/HS8 قيد الاستكمال",
  dataCompletenessEn: "Trade baseline available (2023 & 2025 + partial 2024 HS6); full HS6/HS8 matrix & partner share pending",
  waveBadge: "Wave 1",
  enableScenarioCalculator: true,
  countryCode: "SA",
  countryNameAr: "المملكة العربية السعودية",
  countryNameEn: "Kingdom of Saudi Arabia",
  subRegionOrProjectAr: "الرياض · جدة · الدمام · الخبر (الأولوية الأولى)",
  subRegionOrProjectEn: "Riyadh · Jeddah · Dammam · Khobar (Tier-1 Cities)",
  activityTypeAr: "تصدير الملابس والتصنيع التعاقدي والعلامات الخاصة (FOB / OEM / Private Label)",
  activityTypeEn: "Apparel Exports, Contract Manufacturing & Private Label (FOB / OEM)",
  productTagsAr: [
    "ملابس نسائية كاجوال",
    "ملابس المنزل والنوم",
    "ملابس الأطفال",
    "تيشيرتات وبولو رجالي",
    "بناطيل قطنية",
    "ملابس رياضية أساسية",
    "Private Label",
    "FOB / OEM",
  ],
  productTagsEn: [
    "Women's Casualwear",
    "Homewear & Nightwear",
    "Childrenswear",
    "Men's T-Shirts & Polos",
    "Cotton Trousers",
    "Basic Sportswear",
    "Private Label",
    "FOB / OEM",
  ],
  titleAr: "دراسة السوق السعودي لقطاع الملابس والمنسوجات والفرص التجارية والاستثمارية",
  titleEn: "Saudi Arabia – Apparel & Textiles Market Intelligence Report",
  subtitleAr:
    "المرجع الموثق SBA-GM-APP-SAU-001 (الإصدار 1.0) — مكتملة بحثيًا: تحليل حجم السوق، الواردات (HS 61/62)، المنافسة، الاشتراطات التنظيمية (SASO / SABER / GAFTA)، والمشترين المحتملين واستراتيجية الدخول التعاقدي.",
  subtitleEn:
    "Verified Study SBA-GM-APP-SAU-001 (Edition 1.0) — Research Complete (pending commercial verification & final pricing prior to contracting): covering market demand, HS 61/62 imports, SASO/SABER compliance, target retail groups, and B2B market-entry strategy.",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-12",
  lastUpdated: "2026-11-12",
  version: "1.0",

  kpis: [
    {
      id: "kpi-sau-apparel-2023",
      labelAr: "حجم سوق الملابس في السعودية (2023)",
      labelEn: "Saudi Apparel Market Size (2023)",
      value: "17.1",
      unit: "USD B",
      source: "Saudi Fashion Commission",
      referenceYear: "2023",
      growthNoteAr: "من أصل 19.4 مليار دولار (ملابس وأحذية وإكسسوارات غير فاخرة) وتوقع 22.3 مليار في 2028",
      growthNoteEn: "Out of $19.4B non-luxury apparel/footwear/acc.; $22.3B forecast for 2028",
    },
    {
      id: "kpi-sau-imports-2023",
      labelAr: "واردات الملابس الجمركية (HS 61 + 62)",
      labelEn: "Saudi Apparel Imports (HS 61 + 62)",
      value: "4.265",
      unit: "USD B",
      source: "WITS / UN Comtrade",
      referenceYear: "2023",
      growthNoteAr: "1.931 مليار (HS 61 تريكو) + 2.333 مليار (HS 62 منسوج) — قيمة استيراد جمركي",
      growthNoteEn: "$1.931B (HS 61 knitted) + $2.333B (HS 62 woven) — customs import basis",
    },
    {
      id: "kpi-sau-womenswear-2024",
      labelAr: "تجزئة الملابس النسائية (2024)",
      labelEn: "Saudi Womenswear Retail Market (2024)",
      value: "30.75",
      unit: "SAR B",
      source: "Jamjoom Fashion Prospectus (CMA)",
      referenceYear: "2024",
      growthNoteAr: "نمو سنوي مركب 3.3% (29.1 مليار في 2023 -> توقع 35.432 مليار في 2029)",
      growthNoteEn: "3.3% CAGR (SAR 29.1B in 2023 -> SAR 35.432B forecast by 2029)",
    },
    {
      id: "kpi-sau-egypt-share-2023",
      labelAr: "صادرات مصر إلى السعودية (HS 61+62)",
      labelEn: "Egypt Apparel Exports to KSA (HS 61+62)",
      value: "64.03",
      unit: "USD M",
      source: "WITS / UN Comtrade",
      referenceYear: "2023",
      growthNoteAr: "حصة تقارب 1.5% من واردات المملكة — توجد فرصة توسع حقيقية بتحسين الجودة والتوريد",
      growthNoteEn: "~1.5% share of Saudi apparel imports — documented baseline for share expansion",
    },
  ],

  charts: [
    {
      id: "chart-sau-fashion-trajectory",
      type: "trend",
      titleAr: "المسار التاريخي وتوقعات سوق الملابس السعودي (مليار دولار)",
      titleEn: "Saudi Apparel Market Value Trajectory & Forecast (USD Billion)",
      unit: "USD B",
      source: "Saudi Fashion Commission (2024)",
      referenceYear: "2021–2028",
      items: [
        { labelAr: "2021 (فعلي)", labelEn: "2021 (Historical)", value: 13.8 },
        { labelAr: "2022 (فعلي)", labelEn: "2022 (Historical)", value: 15.7 },
        { labelAr: "2023 (فعلي)", labelEn: "2023 (Historical)", value: 17.1 },
        {
          labelAr: "2024 (توقع بحثي)",
          labelEn: "2024 (Projection)",
          value: 18.5,
          noteAr: "قيمة 2024 توقع بحثي وليست بيانات واردات جمركية فعلية",
          noteEn: "2024 figure is a research projection, not customs import data",
        },
        {
          labelAr: "2028 (توقع بحثي)",
          labelEn: "2028 (Projection)",
          value: 22.3,
          noteAr: "توقع بحثي حتى عام 2028 وفق تقرير هيئة الأزياء 2024",
          noteEn: "Research forecast to 2028 per Fashion Commission 2024 report",
        },
      ],
    },
    {
      id: "chart-sau-top-suppliers-2023",
      type: "share",
      titleAr: "أهم الدول الموردة للملابس إلى السعودية HS 61 + HS 62 (2023)",
      titleEn: "Top Apparel Suppliers to Saudi Arabia HS 61 + HS 62 (2023)",
      unit: "USD M",
      source: "WITS / UN Comtrade",
      referenceYear: "2023",
      items: [
        { labelAr: "الصين (45.2%)", labelEn: "China (45.2%)", value: 1928.98 },
        { labelAr: "الهند (13.4%)", labelEn: "India (13.4%)", value: 571.49 },
        { labelAr: "بنغلاديش (8.2%)", labelEn: "Bangladesh (8.2%)", value: 349.56 },
        { labelAr: "هونغ كونغ (4.6%)", labelEn: "Hong Kong (4.6%)", value: 195.05 },
        { labelAr: "تركيا (4.6%)", labelEn: "Turkey (4.6%)", value: 194.11 },
        { labelAr: "إيطاليا (3.1%)", labelEn: "Italy (3.1%)", value: 131.18 },
        { labelAr: "باكستان (2.7%)", labelEn: "Pakistan (2.7%)", value: 116.46 },
        { labelAr: "فيتنام (2.6%)", labelEn: "Vietnam (2.6%)", value: 110.17 },
        { labelAr: "المملكة المتحدة (2.5%)", labelEn: "United Kingdom (2.5%)", value: 105.84 },
        { labelAr: "الإمارات – إعادة تصدير/مركز (1.9%)", labelEn: "UAE – Trade Hub (1.9%)", value: 81.7 },
        {
          labelAr: "مصر (1.5%)",
          labelEn: "Egypt (1.5%)",
          value: 64.03,
          noteAr: "إجمالي صادرات مصر ضمن HS61 وHS62 في 2023 مع وجود فرص توسع في الأساسيات والكاجوال",
          noteEn: "Egypt total exports under HS61+HS62 in 2023 with headroom to grow share",
        },
      ],
    },
    {
      id: "chart-sau-hs-2024-products",
      type: "bar",
      titleAr: "واردات سلع ملابس محددة لعام 2024 على مستوى رمز HS (مليون دولار)",
      titleEn: "Selected 2024 Product-Level Apparel Imports by HS Code (USD Million)",
      unit: "USD M",
      source: "WITS / UN Comtrade",
      referenceYear: "2024",
      items: [
        {
          labelAr: "بناطيل رجالية قطنية منسوجة (HS 620342 · 8.05M قطعة)",
          labelEn: "Men's Cotton Woven Trousers (HS 620342 · 8.05M units)",
          value: 118.73,
        },
        {
          labelAr: "بناطيل نسائية قطنية منسوجة (HS 620462 · 6.40M قطعة)",
          labelEn: "Women's Cotton Woven Trousers (HS 620462 · 6.40M units)",
          value: 72.23,
          noteAr: "حصة مصر في 2024: 59,281 قطعة بقيمة 669,310 دولار (0.93%)",
          noteEn: "Egypt share in 2024: 59,281 units worth $669,310 (0.93%)",
        },
        {
          labelAr: "قمصان رجالية قطنية محاكة (HS 610510 · 2.52M قطعة)",
          labelEn: "Men's Cotton Knitted Shirts (HS 610510 · 2.52M units)",
          value: 28.61,
          noteAr: "حصة مصر في 2024: 56,533 قطعة بقيمة 642,090 دولار (2.24%)",
          noteEn: "Egypt share in 2024: 56,533 units worth $642,090 (2.24%)",
        },
        {
          labelAr: "بلوزات نسائية قطنية محاكة (HS 610610 · 2.06M قطعة)",
          labelEn: "Women's Cotton Knitted Blouses (HS 610610 · 2.06M units)",
          value: 13.22,
        },
      ],
    },
    {
      id: "chart-sau-omnichannel",
      type: "share",
      titleAr: "توزيع سلوك شراء الأزياء في السعودية عبر القنوات الرقمية والتقليدية (75% تأثر رقمي)",
      titleEn: "Saudi Apparel Consumer Omnichannel Buying Behaviour (75% Digitally Influenced)",
      unit: "%",
      source: "Saudi Fashion Commission (2024)",
      referenceYear: "2024",
      items: [
        { labelAr: "بحث عبر الإنترنت ثم شراء من المتجر", labelEn: "Research Online, Purchase Offline (ROPO)", value: 38 },
        { labelAr: "شراء بالكامل عبر الإنترنت", labelEn: "Pure Online Purchase", value: 25 },
        { labelAr: "شراء تقليدي دون رحلة بحث رقمية مسبقة", labelEn: "Traditional In-Store Purchase", value: 25 },
        { labelAr: "بحث من المتاجر ثم شراء إلكترونيًا", labelEn: "Browse In-Store, Buy Online", value: 12 },
      ],
    },
  ],

  tables: [
    {
      id: "tbl-sau-indicators",
      titleAr: "ملخص المؤشرات الرئيسية لسوق الملابس السعودي (بمنهجيات منفصلة)",
      titleEn: "Key Saudi Apparel Market Indicators (Distinct Methodologies — Do Not Sum)",
      unit: "Mixed (USD / SAR)",
      source: "Fashion Commission / CMA / WITS / MarketLine",
      referenceYear: "2023–2028",
      columnsAr: ["المؤشر", "القيمة", "السنة / المرجع"],
      columnsEn: ["Indicator", "Value", "Year / Reference"],
      rows: [
        ["سوق الملابس والأحذية والإكسسوارات غير الفاخرة / Non-luxury Apparel, Footwear & Acc.", "19.4 مليار دولار (USD 19.4B)", "2023 (S3)"],
        ["سوق الملابس وحدها ضمن تقرير هيئة الأزياء / Apparel Segment Alone", "17.1 مليار دولار (USD 17.1B)", "2023 (S3)"],
        ["توقع قيمة سوق الملابس / Apparel Market Forecast", "22.3 مليار دولار (USD 22.3B)", "2028 (S3)"],
        ["إيرادات تجزئة الملابس (MarketLine) — النسائي 42% (7.8B$) / Apparel Retail Revenue", "18.6 مليار دولار (USD 18.6B)", "2024 (S4)"],
        ["سوق الملابس النسائية / Saudi Womenswear Retail Market", "29.1 مليار ريال / SAR 29.1B", "2023 (S5)"],
        ["سوق الملابس النسائية / Saudi Womenswear Retail Market", "30.75 مليار ريال / SAR 30.75B", "2024 (S5)"],
        ["توقع سوق الملابس النسائية / Womenswear Retail Forecast", "35.432 مليار ريال / SAR 35.432B", "2029 (S5)"],
        ["سوق الملابس الداخلية النسائية (نمو 4.4%) / Women's Underwear", "2.179 مليار ريال -> 2.720 مليار في 2029", "2023 / 2029 (S6)"],
        ["سوق ملابس النوم النسائية (نمو 5.4%) / Women's Nightwear", "2.1 مليار ريال -> 2.5 مليار في 2029", "2023 / 2029 (S6)"],
        ["سوق الملابس الرجالية التقليدية (الأثواب 4.2B ريال) / Men's National Wear", "5.6 مليار ريال / SAR 5.6B", "2023 (S7)"],
        ["واردات الملابس الجمركية HS 61 + HS 62 / Apparel Imports", "4.265 مليار دولار (USD 4.265B)", "2023 (S10–S11)"],
        ["سوق الملابس الرياضية (56% أداء · 44% Athleisure) / Sportswear", "أكثر من مليار دولار -> نحو مليارين 2028", "2023 / 2028 (S9)"],
      ],
    },
    {
      id: "tbl-sau-cities",
      titleAr: "أولوية المدن والمناطق المستهدفة داخل المملكة",
      titleEn: "Target Cities Prioritization Matrix in Saudi Arabia",
      unit: "Strategic Priority",
      source: "SBA Market Assessment",
      referenceYear: "2026",
      columnsAr: ["المدينة / الإقليم", "طبيعة السوق", "الأولوية"],
      columnsEn: ["City / Region", "Market Role", "Priority"],
      rows: [
        ["الرياض / Riyadh", "أكبر مركز تجاري واستهلاكي، سلاسل التجزئة والمقرات الرئيسية", "مرتفعة جدًا / Very High"],
        ["جدة / Jeddah", "مركز تجاري ولوجستي (ميناء جدة الإسلامي)، تجار الجملة والتوزيع", "مرتفعة جدًا / Very High"],
        ["الدمام / Dammam", "سوق شرقي مرتبط بالمنطقة الصناعية والتجارية وميناء الملك عبدالعزيز", "مرتفعة / High"],
        ["الخبر / Khobar", "سوق استهلاكي متوسط وعالي القيمة في المنطقة الشرقية", "مرتفعة / High"],
        ["مكة المكرمة / Makkah", "طلب مرتبط بالسكان والزوار والمواسم", "متوسطة / Medium"],
        ["المدينة المنورة / Madinah", "طلب استهلاكي وسياحي متكرر", "متوسطة / Medium"],
        ["الطائف / Taif", "سوق إقليمي وموسمي", "متوسطة / Medium"],
        ["أبها وخميس مشيط / Abha & Khamis Mushait", "أسواق إقليمية ذات احتياجات موسمية", "لاحقة / Later Phase"],
      ],
    },
    {
      id: "tbl-sau-egypt-2024",
      titleAr: "بيانات الاستيراد التفصيلية (2024) وموقع الصادرات المصرية في منتجات محددة",
      titleEn: "2024 Product-Level Saudi Imports & Egypt Export Position",
      unit: "USD / Units",
      source: "WITS / UN Comtrade",
      referenceYear: "2024",
      columnsAr: ["المنتج", "HS Code", "إجمالي الواردات", "الكمية المستوردة", "موقف مصر 2024"],
      columnsEn: ["Product", "HS Code", "Total Import Value", "Imported Qty", "Egypt 2024 Share"],
      rows: [
        [
          "قمصان رجالية قطنية محاكة / Men's Cotton Knitted Shirts",
          "610510",
          "$28.61M",
          "2,520,000 قطعة",
          "56,533 قطعة · $642,090 (2.24%)",
        ],
        [
          "بناطيل نسائية قطنية منسوجة / Women's Cotton Woven Trousers",
          "620462",
          "$72.23M",
          "6,400,000 قطعة",
          "59,281 قطعة · $669,310 (0.93%)",
        ],
        [
          "بناطيل رجالية قطنية منسوجة / Men's Cotton Woven Trousers",
          "620342",
          "$118.73M",
          "8,050,000 قطعة",
          "فرصة توسع تصديري مباشرة",
        ],
        [
          "بلوزات نسائية قطنية محاكة / Women's Cotton Knitted Blouses",
          "610610",
          "$13.22M",
          "2,060,000 قطعة",
          "متوافقة مع قدرات التريكو النسائي",
        ],
      ],
    },
    {
      id: "tbl-sau-products-priority",
      titleAr: "تصنيف أولوية المنتجات ونماذج التوريد ومستوى التشبع",
      titleEn: "Product Prioritisation, Entry Model & Competition Saturation",
      unit: "Priority Tier",
      source: "SBA Product & Saturation Assessment",
      referenceYear: "2026",
      columnsAr: ["الأولوية", "فئة المنتج", "نموذج الدخول الموصى به", "المنافسة والتشبع", "المبرر التجاري"],
      columnsEn: ["Priority", "Product Category", "Recommended Model", "Competition Level", "Commercial Rationale"],
      rows: [
        ["A", "Women's Casualwear & Tops", "Private Label / FOB", "مرتفع (فرص حسب التصميم والسعر)", "أكبر شريحة استهلاك وإمكانية تنويع واسعة"],
        ["A", "Women's Homewear", "OEM / Private Label", "متوسط إلى مرتفع (فرصة جيدة)", "طلب متكرر وتوافق مباشر مع خطوط التصنيع"],
        ["A", "Women's Nightwear", "OEM / Private Label", "متوسط إلى مرتفع (فرصة جيدة)", "سوق متخصص بمعدل نمو 5.4% سنويًا (2019–2023)"],
        ["A", "Kids Casual Sets", "FOB / Private Label", "مرتفع (فرصة جيدة مع التخصص)", "احتياجات متكررة وتغير سريع بالمقاسات"],
        ["A", "Men's T-Shirts & Polos", "FOB / CM", "مرتفع (دخول انتقائي)", "سلع أساسية قابلة للتوريد بكميات منتظمة"],
        ["B", "Women's Casual Trousers", "FOB / OEM", "مرتفع", "واردات HS620462 موثقة بـ 6.40M قطعة وحضور مصري قائم"],
        ["B", "Men's Casual Shirts", "FOB / OEM", "مرتفع", "واردات HS610510 موثقة بـ 2.52M قطعة وحصة مصر 2.24%"],
        ["B", "Basic Sportswear", "OEM / Private Label", "مرتفع (فرصة متوسطة)", "طلب >1B$ مع تجنب منافسة العلامات التقنية مباشرة"],
        ["C", "Technical Sportswear", "Specialized OEM", "مرتفع جدًا (لا يُنصح كبداية)", "يتطلب خامات واختبارات تقنية وهيمنة 60% لثلاث علامات"],
        ["C", "Saudi Thobes (الأثواب التقليدية)", "Specialized Development", "متخصص", "يحتاج تطويرًا متخصصًا في التصميم والخامات والمقاسات"],
      ],
    },
    {
      id: "tbl-sau-planning-scenarios",
      titleAr: "سيناريوهات الطاقة الإنتاجية ونموذج الإيرادات التوضيحي (افتراض تخطيطي)",
      titleEn: "Illustrative Production & Revenue Planning Scenarios (Hypothetical Assumption)",
      unit: "Units / USD",
      source: "SBA Financial Planning Illustration ($6 hypothetical avg FOB)",
      referenceYear: "2026 (Illustrative)",
      columnsAr: ["السيناريو", "الإنتاج الشهري", "الإنتاج السنوي", "إيراد سنوي افتراضي (بفرض $6 FOB)", "ملاحظة منهجية"],
      columnsEn: ["Scenario", "Monthly Volume", "Annual Volume", "Illustrative Revenue ($6 FOB)", "Methodology Note"],
      rows: [
        ["مرحلة تجريبية / Pilot", "10,000 قطعة", "120,000 قطعة", "$720,000", "بداية موصى بها (10–15 ألف قطعة شهريًا)"],
        ["مرحلة متوسطة / Mid Scale", "25,000 قطعة", "300,000 قطعة", "$1,800,000", "بعد اعتماد العينات وتكرار الطلبيات"],
        ["مرحلة التوسع / Expansion", "50,000 قطعة", "600,000 قطعة", "$3,600,000", "يعادل نحو 0.084% من قيمة واردات 2023 (4.265B$) — 5 عملاء × 10k أو 10 × 5k"],
        ["طاقة كبيرة / High Scale", "100,000 قطعة", "1,200,000 قطعة", "$7,200,000", "مشروط بعقود توريد متكررة مؤكدة وتمويل رأس المال العامل"],
      ],
    },
    {
      id: "tbl-sau-roadmap-12m",
      titleAr: "خطة التنفيذ والتوسع التدريجي خلال 12 شهرًا",
      titleEn: "12-Month Commercial Execution & Scaling Roadmap",
      unit: "Timeline",
      source: "SBA Operational Strategy",
      referenceYear: "Months 1–12",
      columnsAr: ["الفترة الزمنية", "النشاط الرئيسي", "المخرج / النتيجة المستهدفة"],
      columnsEn: ["Period", "Core Activity", "Target Deliverable / Milestone"],
      rows: [
        ["الشهر 1 / Month 1", "تجهيز ملف الشركة والمصنع والكتالوج والأسعار", "Vendor Package احترافي ثنائي اللغة"],
        ["الشهر 2 / Month 2", "التواصل المباشر مع مسؤولي المشتريات والمستوردين (30–50 جهة)", "اجتماعات ومناقشات تجارية مستهدفة"],
        ["الشهر 3 / Month 3", "إرسال العينات وبطاقات الأقمشة وفق طلبات كل عميل", "اعتماد المنتجات والمقاسات فنيًا"],
        ["الشهر 4 / Month 4", "التفاوض على الأسعار والحد الأدنى للطلب MOQ وشروط الدفع", "توقيع أول عقد توريد (10–15 ألف قطعة)"],
        ["الشهر 5–6 / Months 5–6", "إنتاج وتوريد الشحنة التجريبية وفحص SABER / SASO", "اختبار السوق والالتزام الزمني والجودة"],
        ["الشهر 7–8 / Months 7–8", "تقييم الأداء الميداني وإعادة طلب المجموعات الناجحة", "ترسيخ عميل متكرر الطلبات"],
        ["الشهر 9–10 / Months 9–10", "رفع الطاقة إلى 25 ألف قطعة شهريًا حسب العقود المؤكدة", "توسع الكميات المتفق عليها"],
        ["الشهر 11–12 / Months 11–12", "تنويع قاعدة العملاء في الرياض وجدة والمنطقة الشرقية", "قاعدة عملاء مستقرة نحو 50 ألف قطعة/شهريًا"],
      ],
    },
  ],

  sections: {
    executiveSummary: {
      summaryAr:
        "تُعد المملكة العربية السعودية واحدة من أكبر أسواق الملابس والأزياء في الشرق الأوسط، مدفوعة بقاعدة استهلاكية شابة، وتوسع المشاركة الاقتصادية للمرأة، ونمو السياحة والتجارة الإلكترونية. بلغت واردات المملكة من الملابس (HS 61 و62) نحو 4.265 مليار دولار في 2023، فيما تبلغ صادرات مصر الحالية نحو 64 مليون دولار فقط (~1.5%). السوق مناسب جدًا للتصنيع والتوريد من مصر عبر نموذج B2B وبرامج Private Label وعقود FOB، شريطة تجنب المنافسة السعرية العشوائية مع كبار الموردين الآسيويين.\n\nحالة الدراسة: مكتملة بحثيًا – التحقق التجاري والتسعير النهائي قبل التعاقد (البيانات المنشورة تمثل أساسًا بحثيًا موثقًا، بينما تتطلب الأسعار الفعلية وكميات كل مشترٍ واعتمادات SABER تحققًا تجاريًا مباشرًا).",
      summaryEn:
        "Saudi Arabia is one of the largest apparel markets in the Middle East, supported by a young population, growing female workforce participation, modern retail, tourism, and e-commerce. Saudi HS 61+62 apparel imports reached ~$4.265B in 2023, while Egypt's current exports stand at ~$64.03M (~1.5%). Saudi Arabia is commercially attractive for Egyptian contract manufacturing via B2B supply, Private Label, and FOB contracts without entering an unselective price war against large Asian suppliers.\n\nResearch Status: Complete on public-data research basis — direct buyer pricing, confirmed MOQs, and SABER conformity approvals require commercial validation prior to contracting.",
      bulletsAr: [
        "الأولوية الأولى للدخول: التصنيع للعلامات السعودية، وبرامج Private Label، وعقود FOB.",
        "الفئات الموصى بالبدء بها: الملابس النسائية الكاجوال، ملابس المنزل والنوم، ملابس الأطفال، وتيشيرتات وبولو الرجال.",
        "المدن ذات الأولوية: الرياض وجدة أولًا، ثم الدمام والخبر في المنطقة الشرقية.",
        "حجم البداية الموصى به: طلبيات تجريبية 10–15 ألف قطعة شهريًا قبل التوسع إلى 25–50 ألف قطعة.",
        "تأجيل إطلاق علامة تجارية مستقلة مملوكة للمجموعة لما بعد بناء قاعدة عملاء وتوزيع محلية.",
      ],
      bulletsEn: [
        "Primary entry tracks: Private Label programs, OEM/FOB supply to Saudi brands and retail groups.",
        "Priority categories: Women's casualwear, homewear & nightwear, childrenswear, men's T-shirts & polos.",
        "Priority cities: Riyadh and Jeddah first, expanding next to Dammam and Khobar.",
        "Recommended pilot scale: 10,000–15,000 units/month before scaling to 25k and 50k monthly volumes.",
        "Defer launching an SBA-owned retail brand until local B2B demand and distribution economics are validated.",
      ],
    },

    marketDefinition: {
      summaryAr:
        "يبلغ إجمالي سكان المملكة 35.3 مليون نسمة وفق تقديرات الهيئة العامة للإحصاء لعام 2024 (نحو 55.6% سعوديون و44.4% غير سعوديين)، وبلغ تقدير البنك الدولي لعام 2025 نحو 36.97 مليون نسمة. كما بلغ عدد النساء السعوديات 9.81 مليون امرأة بمشاركة بلغت 36% في القوى العاملة عام 2024، ما يدعم الطلب المستمر على الملابس اليومية والعملية والمنزلية وملابس الأطفال.",
      summaryEn:
        "Saudi Arabia's population reached ~35.3M in 2024 per GASTAT (~55.6% Saudi nationals and ~44.4% non-Saudis), and ~36.97M in 2025 per World Bank estimates. Saudi females totaled ~9.81M with 36% labor force participation in 2024, supporting steady multi-segment demand for work-appropriate casualwear, homewear, kids apparel, and varied price tiers.",
      bulletsAr: [
        "المستهلك السعودي الباحث عن الجودة والملاءمة الثقافية والمقاسات المريحة.",
        "المقيمون من جنسيات متنوعة الباحثون عن التنوع في الشرائح السعرية والاقتصادية.",
        "النساء العاملات والشباب والأسر ذات الشراء المتكرر لملابس الأطفال والمنزل.",
        "تركز المقرات الرئيسية وسلاسل التجزئة في الرياض، والبيع بالجملة واللوجستيات في جدة، والمنطقة الشرقية في الدمام والخبر.",
      ],
      bulletsEn: [
        "Saudi nationals prioritizing quality, cultural appropriateness, and comfortable fits.",
        "Diverse expatriate population demanding value and multi-tier price assortments.",
        "Working women, youth cohorts, and families generating repeat household & kids purchases.",
        "Core commercial hubs: Riyadh (headquarters/retailers), Jeddah (wholesale & Red Sea port), Dammam & Khobar (Eastern Province).",
      ],
    },

    marketSize: {
      summaryAr:
        "وفق تقرير هيئة الأزياء السعودية (2024)، بلغت قيمة سوق الملابس والأحذية والإكسسوارات غير الفاخرة 19.4 مليار دولار في 2023، منها 17.1 مليار دولار للملابس وحدها (مقابل 13.8 مليار في 2021 و15.7 مليار في 2022)، مع توقعات بحثية تصل إلى 18.5 مليار دولار في 2024 و22.3 مليار دولار في 2028. كما قدّر تقرير MarketLine (سبتمبر 2025) إيرادات تجزئة الملابس بنحو 18.6 مليار دولار في 2024، استحوذت الملابس النسائية منها على 42% (7.8 مليار دولار).",
      summaryEn:
        "Per the Saudi Fashion Commission (2024), the non-luxury apparel, footwear and accessories market totaled $19.4B in 2023, including $17.1B for apparel alone (up from $13.8B in 2021 and $15.7B in 2022), with research projections of $18.5B in 2024 and $22.3B by 2028. MarketLine (Sept 2025) estimated Saudi apparel retail revenue at $18.6B in 2024, with womenswear capturing 42% ($7.8B).",
      bulletsAr: [
        "تنبيه منهجي: أرقام التجزئة وتقديرات هيئة الأزياء وMarketLine ونشرات الاكتتاب وبيانات الجمارك تستخدم تعريفات مختلفة ولا يجوز جمعها.",
        "قيم 2024 و2028 و2029 الواردة في التقارير المرجعية هي توقعات بحثية وليست بيانات جمركية محققة.",
      ],
      bulletsEn: [
        "Methodological note: Fashion Commission, MarketLine, CMA prospectus, and WITS import figures use distinct methodologies and must not be summed.",
        "2024, 2028, and 2029 figures in cited publications are research forecasts rather than realized customs records.",
      ],
    },

    actualDemand: {
      summaryAr:
        "يتوزع الطلب الاستهلاكي الفعلي عبر أربع ركائز كبرى: الملابس النسائية بقيمة 30.75 مليار ريال في 2024 (نمو مركب 3.3% متوقع حتى 35.432 مليار ريال في 2029)، وتشمل الملابس الداخلية النسائية (2.179 مليار ريال، نمو 4.4%) وملابس النوم النسائية (2.1 مليار ريال، نمو 5.4%)؛ والملابس الرجالية التقليدية بقيمة 5.6 مليار ريال في 2023 (منها 4.2 مليار ريال للأثواب التي ارتفع الجاهز منها إلى 45%) إلى جانب الرجالي الكاجوال؛ وملابس الأطفال مدفوعة بالطلب الأسري المتكرر؛ والملابس الرياضية التي تجاوزت مليار دولار في 2023 (56% أداء و44% Athleisure).",
      summaryEn:
        "Consumer demand anchors around four core categories: Womenswear reaching SAR 30.75B in 2024 (3.3% CAGR toward SAR 35.432B in 2029), including women's underwear (SAR 2.179B, +4.4% CAGR) and nightwear (SAR 2.1B, +5.4% CAGR); Menswear splitting between national wear (SAR 5.6B, SAR 4.2B thobes with ready-to-wear rising to 45%) and casualwear; Childrenswear with high repeat frequency; and Sportswear exceeding $1B in 2023 (56% performance, 44% athleisure).",
      bulletsAr: [
        "الملابس النسائية والمنزلية تمثل الفئة الأوضح نموًا وتوافقًا مع التصنيع التعاقدي من مصر.",
        "يوصى بتأجيل تصنيع الأثواب التقليدية لحين التعاون مع مشترين متخصصين، والتركيز أولًا على التيشيرتات والبولو والقمصان والبناطيل الرجالية.",
        "تتطلب ملابس الأطفال تشديد اختبارات سلامة الأقمشة وثبات الألوان والأزرار والملحقات.",
      ],
      bulletsEn: [
        "Womenswear, homewear, and nightwear combine recurring demand with strong fit for Egyptian cut-and-knit capabilities.",
        "Initial menswear focus should target casual T-shirts, polos, shirts, and trousers rather than traditional thobes.",
        "Childrenswear offers recurring sizing turnover but demands strict fabric chemical and accessory safety testing.",
      ],
    },

    importsExports: {
      summaryAr:
        "بلغت واردات السعودية من الملابس والإكسسوارات ضمن الفصلين الجمركيين HS 61 (التريكو/المحاك) وHS 62 (المنسوج) نحو 4.39 مليار دولار وفق أحدث رقم إجمالي مرصود لعام 2025 في حزمة الـ41 دولة، مقارنة بنحو 4.265 مليار دولار في تفصيل WITS لعام 2023 (1.931 مليار دولار للفصل 61 و2.333 مليار دولار للفصل 62). تتصدر الصين التوريد في بيانات 2023 بـ 1,928.98 مليون دولار (45.2%) تليها الهند (13.4%) وبنغلاديش (8.2%) وهونغ كونغ (4.6%) وتركيا (4.6%). وبلغت صادرات مصر 64.03 مليون دولار (نحو 1.5%) في 2023، مع بقاء استخراج تفصيلات HS6/HS8 وحصة مصر لعام 2025 قيد الاستكمال التجاري.",
      summaryEn:
        "Saudi HS 61 (knitted) and HS 62 (woven) apparel imports reached 4.39B USD in the latest 2025 chapter aggregate reported in the 41-country package, compared to ~$4.265B in the detailed 2023 WITS split ($1.931B HS61; $2.333B HS62). In 2023 data, China led with $1,928.98M (45.2%), followed by India (13.4%), Bangladesh (8.2%), Hong Kong (4.6%), and Turkey (4.6%). Egypt exported $64.03M (~1.5% share) in 2023, while full 2025 HS6/HS8 and Egypt share extraction remains pending verification.",
      bulletsAr: [
        "توثيق صادرات مصر لعام 2024 في بند القمصان الرجالية القطنية المحاكة (HS 610510): 56,533 قطعة بقيمة 642,090 دولارًا (2.24% من الواردات البالغة 28.61 مليون دولار / 2.52 مليون قطعة).",
        "توثيق صادرات مصر لعام 2024 في بند البناطيل النسائية القطنية المنسوجة (HS 620462): 59,281 قطعة بقيمة 669,310 دولارات (0.93% من الواردات البالغة 72.23 مليون دولار / 6.40 مليون قطعة).",
        "فرص إضافية موثقة بالكميات: بناطيل رجالية قطنية منسوجة (HS 620342: 8.05 مليون قطعة / 118.73 مليون دولار) وبلوزات نسائية محاكة (HS 610610: 2.06 مليون قطعة / 13.22 مليون دولار).",
        "الإمارات (81.70 مليون دولار) تعمل كمركز تجاري وإعادة تصدير إقليمي ولا تعني بالضرورة تصنيعًا داخليًا.",
      ],
      bulletsEn: [
        "2024 Egypt position in Men's Cotton Knitted Shirts (HS 610510): 56,533 units worth $642,090 (2.24% of $28.61M / 2.52M units).",
        "2024 Egypt position in Women's Cotton Woven Trousers (HS 620462): 59,281 units worth $669,310 (0.93% of $72.23M / 6.40M units).",
        "Additional quantified 2024 HS lines: Men's cotton woven trousers HS 620342 (8.05M units / $118.73M) and Women's cotton knitted blouses HS 610610 (2.06M units / $13.22M).",
        "UAE ($81.70M) primarily reflects regional trade & re-export distribution rather than solely domestic apparel manufacturing.",
      ],
    },

    demandedProductsAnalysis: {
      summaryAr:
        "تم تصنيف المنتجات المطلوبة في السوق السعودي إلى ثلاث شرائح أولوية (A وB وC) مع تحديد مواصفات تطوير أولية للخامات والأطوال وثبات الألوان والتشطيبات (يُشترط اعتمادها فنيًا مع المشتري قبل الإنتاج وليست مواصفات حكومية إلزامية بحد ذاتها).",
      summaryEn:
        "Target product lines are ranked across Priorities A, B, and C with initial product-development benchmarks for breathable cotton/modal blends, opaque modest cuts, wash-fast dyes, and safe trims (to be finalized per buyer tech packs prior to production).",
      bulletsAr: [
        "الفئة A (أولوية قصوى): Women's Casual Tops, Blouses, Tunics, Homewear (قطن/Viscose/Modal), Nightwear, Kids Casual Sets, Men's T-Shirts & Polos.",
        "الفئة B (توسع انتقائي): Women's Wide-Leg & Casual Trousers, Men's Casual Shirts, Basic Sportswear & Activewear.",
        "الفئة C (مؤجلة / متخصصة): Technical Sportswear وSaudi Thobes لما تتطلبه من خبرة تقنية أو تصميم تقليدي متخصص.",
        "متطلبات جودة التطوير: أقمشة غير شفافة عند الحاجة للملابس النسائية، نعومة الملمس لملابس النوم، خياطة مرنة للملابس الرياضية، وملحقات آمنة تمامًا للأطفال.",
      ],
      bulletsEn: [
        "Priority A: Women's Casual Tops/Tunics, Homewear & Nightwear (cotton/viscose/modal), Kids Casual Sets, Men's T-Shirts & Polos.",
        "Priority B: Women's Casual/Wide-Leg Trousers, Men's Casual Shirts, Basic Sportswear.",
        "Priority C (Deferred/Specialized): Technical Performance Sportswear and Traditional Saudi Thobes.",
        "Development specs: breathable opaque fabrics, comfort-fit modest lengths, high wash/rubbing color fastness, and child-safe trims.",
      ],
    },

    localSupplyProduction: {
      summaryAr:
        "بحسب تقرير هيئة الأزياء السعودية (2024)، يوجد نحو 30 ألف منشأة تصنيع ملابس محلية تعمل غالبيتها بأحجام صغيرة، حيث يقل عدد العاملين في نحو 93% منها عن 20 موظفًا، ولا يزال التصنيع المحلي بحاجة لتطوير القدرات التقنية وسلاسل الإمداد. هذا الواقع يعزز حاجة العلامات المحلية والمستوردين إلى مصانع خارجية قادرة على تلبية الكميات المتوسطة والكبيرة.",
      summaryEn:
        "The Saudi Fashion Commission (2024) notes approximately 30,000 local apparel workshops/facilities, with ~93% employing fewer than 20 workers and local manufacturing requiring further technical and supply-chain scale-up. This fragmented domestic capacity drives reliance on capable external contract manufacturers for medium and large commercial volumes.",
      bulletsAr: [
        "93% من منشآت التصنيع المحلية في السعودية تضم أقل من 20 عاملًا.",
        "طلب متزايد من العلامات المحلية على التصنيع التعاقدي الخارجي بكميات متوسطة إلى كبيرة.",
        "الحاجة إلى شريك تصنيعي يجمع بين تطوير الموديلات، وضبط الجودة، وسرعة إعادة التوريد مقارنة بآسيا.",
      ],
      bulletsEn: [
        "~93% of Saudi domestic garment establishments employ fewer than 20 workers.",
        "Strong demand among local Saudi retail brands for external OEM/Private Label manufacturing at consistent commercial scale.",
        "Advantage for Egyptian hubs delivering agile replenishment lead times and model development compared to long Asian transit.",
      ],
    },

    competitionSaturation: {
      summaryAr:
        "السوق مجزأ نسبيًا على مستوى العلامات التجارية (تستحوذ أكبر 70 علامة على نحو 24% فقط من السوق وتتصدر Max Fashion بنحو 5% وفق تقرير هيئة الأزياء 2024)، غير أن المنافسة على مستوى الموردين الدوليين حادة جدًا لا سيما في الملابس الأساسية أمام الصين والهند وبنغلاديش وتركيا.",
      summaryEn:
        "Brand-level market share is relatively fragmented (the top 70 brands account for ~24% of the market, led by Max Fashion at ~5% in the 2024 Fashion Commission report), yet supplier-level competition against China, India, Bangladesh, and Turkey is intense across basic apparel.",
      bulletsAr: [
        "أبرز العلامات بالسوق: Max Fashion, Centrepoint, Zara, H&M, LC Waikiki, Mango, Shein, RedTag, Nayomi, AlShiaka, Mihyar, Splash, Babyshop, Adidas, Nike, Puma.",
        "تشبع مرتفع في Basic T-Shirts والملابس الرياضية التقنية (60% لثلاث علامات عالمية).",
        "أفضل جاذبية نسبيًا: تصنيع Private Label، وملابس النوم والمنزل النسائية، والملابس النسائية الكاجوال وأطقم الأطفال.",
      ],
      bulletsEn: [
        "Notable active brands: Max Fashion, Centrepoint, Zara, H&M, LC Waikiki, Mango, Shein, RedTag, Nayomi, AlShiaka, Mihyar, Splash, Babyshop, Adidas, Nike, Puma.",
        "High saturation in basic commodities and technical sportswear (60% held by Nike, Adidas, Puma combined).",
        "Best risk-adjusted whitespace: Private Label programs, women's homewear/nightwear, selective womenswear, and specialized kidswear.",
      ],
    },

    potentialBuyers: {
      summaryAr:
        "تم حصر الجهات المستهدفة الأولية في ثلاث شرائح تجارية: مجموعات التجزئة الكبرى، والشركات والعلامات المحلية، ومنصات التجارة الإلكترونية كقنوات بيع وتوزيع. جميع الجهات المذكورة هي أهداف تواصل وتأهيل تجاري محتملة وليست عملاء متعاقدين حاليًا.",
      summaryEn:
        "Prospective market counterparts are categorized into major regional retail operators, Saudi local brands/wholesalers, and digital commerce platforms. All listed entities represent prospective commercial targets rather than contracted clients.",
      bulletsAr: [
        "Landmark Group / Landmark Arabia (Max Fashion, Centrepoint, Babyshop, Splash) — عبر نموذج Partner With Us على landmarkgroup.com.",
        "Cenomi Retail (أكثر من 740 منفذًا و40 علامة في 8 دول) — cenomiretail.com/sa-en | info.retail@cenomi.com | +966 11 435 0000.",
        "Alshaya Group (مجموعة الشايع) — مشغل تجزئة إقليمي رئيسي مستهدف للتواصل المؤسسي (جهة مستهدفة وليست متعاقدة).",
        "KOJ Group / Jamjoom Fashion (Nayomi, Mihyar, Jamjoom Fashion) — مناسبة للملابس الداخلية والنوم والنسائي والرجالي (kojamjoom.com).",
        "Alhokair Fashion Retail (علامات دولية) — يجب التحقق من الجهة القانونية المسؤولة عن الشراء لكل علامة (fawazalhokairfashion.com).",
        "AlShiaka (47 فرعًا — ملابس رجالية وتقليدية وأطفال: alshiaka.com/ar) وSYC Fashion في جدة (جملة وأزياء: sycksa.com | info@sycksa.com | +966 56 634 4424).",
        "قنوات التوزيع الرقمية: Namshi وAmazon Saudi Arabia وNoon (قنوات بيع وليست بالضرورة مستوردين مباشرين للمصنع).",
      ],
      bulletsEn: [
        "Landmark Group / Landmark Arabia (Max Fashion, Centrepoint, Babyshop, Splash) — landmarkgroup.com Partner With Us.",
        "Cenomi Retail (740+ stores, 40 brands across 8 countries) — cenomiretail.com/sa-en | info.retail@cenomi.com | +966 11 435 0000.",
        "Alshaya Group — major regional retail operator included in target account universe (prospect only, not confirmed buyer).",
        "KOJ Group / Jamjoom Fashion (Nayomi, Mihyar) — intimates, nightwear, womenswear, and menswear (kojamjoom.com).",
        "Alhokair Fashion Retail — verify brand-level sourcing authority before pitching (fawazalhokairfashion.com).",
        "AlShiaka (47 branches: alshiaka.com/ar) & SYC Fashion Jeddah (wholesale/retail: sycksa.com | info@sycksa.com | +966 56 634 4424).",
        "Digital marketplaces (distribution channels): Namshi, Amazon Saudi Arabia, and Noon.",
      ],
    },

    salesDistributionChannels: {
      summaryAr:
        "يجمع السوق بين قنوات الجملة والمستوردين وسلاسل التجزئة وشركات Private Label، وقنوات رقمية متنامية حيث يتأثر 75% من سلوك شراء الأزياء في السعودية بالقنوات الرقمية (تتصدر Instagram وSnapchat لدى النساء، وYouTube لاكتشاف المنتجات لدى الرجال). كذلك يوفر معرضا Saudi Apparel Expo وSaudi Fabric & Yarn Expo بالرياض (7–9 ديسمبر 2026) فرص تواصل مباشر بعد التحقق من قائمة العارضين والزوار.",
      summaryEn:
        "Distribution spans wholesale importers, retail chains, Private Label buyers, and omnichannel e-commerce. Per the 2024 Fashion Commission report, 75% of Saudi fashion purchasing is digitally influenced (Instagram & Snapchat key for women; YouTube key for men). Trade events such as Saudi Apparel Expo & Saudi Fabric & Yarn Expo in Riyadh (7–9 Dec 2026) serve as direct B2B buyer touchpoints.",
      bulletsAr: [
        "توجيه الجهد التسويقي نحو B2B بدل إعلانات المستهلك النهائي في مرحلة الإطلاق.",
        "بناء ملف تعريفي (Company & Factory Profile) وكتالوج مخصص وحزمة عينات للسوق السعودي.",
        "التواصل المؤسسي عبر LinkedIn والبريد والزيارات الميدانية لمسؤولي المشتريات.",
        "معرض Saudi Apparel Expo ومعرض Saudi Fabric & Yarn Expo (7–9 ديسمبر 2026 – الرياض).",
      ],
      bulletsEn: [
        "Prioritize B2B buyer outreach over direct B2C consumer ad spend during initial entry.",
        "Prepare bilingual Vendor Package, factory capabilities deck, swatch books, and sample kits.",
        "Run targeted LinkedIn and direct procurement outreach to 30–50 shortlisted buyers.",
        "Evaluate exhibition attendance at Saudi Apparel Expo & Saudi Fabric & Yarn Expo (7–9 Dec 2026, The Arena Riyadh).",
      ],
    },

    marketEntryStrategy: {
      summaryAr:
        "تعتمد الاستراتيجية الموصى بها على التدرج في نماذج الدخول: البدء بالتصنيع للغير بعلامات العملاء (Private Label) والتوريد التعاقدي (FOB ثم OEM)، وقبول CM في حالات توفر الخامات لدى العميل، مع تأجيل بناء علامة تجارية مملوكة للمجموعة أو فتح مستودع مستقل لحين تأكد استدامة وتكرار الطلبات.",
      summaryEn:
        "Market entry should follow a disciplined B2B sequence: Stage 1 B2B buyer onboarding -> Stage 2 Private Label manufacturing for established Saudi brands -> Stage 3 Recurring FOB/OEM contracts (plus CM where clients supply inputs) -> Stage 4 3PL local distribution only after repeat-order validation -> Stage 5 Own Brand only in a later validated phase.",
      bulletsAr: [
        "النموذج الأول (الأكثر توصية): Private Label لصالح علامات وتجار تجزئة سعوديين.",
        "النموذج الثاني: عقود FOB تسليم ميناء التصدير بإدارة كاملة للتصنيع والخامات.",
        "النموذج الثالث: OEM لتنفيذ تصاميم ومواصفات المشتري الخاصة.",
        "إنشاء قاعدة بيانات مستقلة للمشترين تشمل: الجهة، المدينة، النشاط، مسؤول المشتريات، MOQ، ونموذج التوريد.",
      ],
      bulletsEn: [
        "Top priority model: Private Label manufacturing for Saudi brands and retail chains.",
        "Second priority: Full-package FOB supply contracts matching agreed specifications.",
        "Third priority: OEM manufacturing to client tech packs, and selective CM lines.",
        "Maintain an independent CRM buyer pipeline tracking contact verification, buyer interest, MOQs, and contract stages.",
      ],
    },

    technicalRegulatorySpecs: {
      summaryAr:
        "تخضع المنتجات النسيجية المستوردة إلى السعودية للائحة الفنية للمنتجات النسيجية الصادرة عن SASO (الإصدار الثاني المعتمد في 28 ديسمبر 2023 والإلزامي منذ 12 يوليو 2024)، مع اشتراط التسجيل عبر منصة سابر (SABER) واستيفاء شهادات المطابقة (PCoC / SCoC). تطبق ضريبة قيمة مضافة أساسية 15% ورسوم جمركية تبدأ من 5% وقد تصل إلى 10% لبعض البنود الفرعية، بينما تتيح اتفاقية GAFTA معاملة تفضيلية للبضائع المصرية المستوفية لقواعد المنشأ (ومنها معيار القيمة المضافة 40% وفق القواعد المعمول بها لدى GOEIC).",
      summaryEn:
        "Textile imports into Saudi Arabia are regulated by SASO's Technical Regulation for Textile Products (Second Edition approved 28 Dec 2023; mandatory enforcement since 12 July 2024), requiring product & shipment conformity certification via SABER. Standard import VAT is 15%, and customs duties vary by exact tariff subheading (often 5%, with certain subheadings at 10%). Qualifying Egyptian-origin apparel may benefit from GAFTA preferential duty treatment subject to rules of origin (e.g., 40% local value-added rules) and GOEIC origin documentation.",
      bulletsAr: [
        "بيانات الملصق الإلزامية: اسم المنتج، التركيب النسبي للألياف، المقاس، بلد المنشأ، بيانات المورد، تعليمات العناية، وبالعربية أو العربية والإنجليزية.",
        "اختبارات السلامة والجودة: pH، Formaldehyde، Heavy Metals، Azo Dyes، ثبات اللون مع الغسيل والاحتكاك والعرق، وسلامة الإكسسوارات والأطفال.",
        "إجراءات سابر (SABER): تسجيل المنتج والموديلات، رفع الملف الفني، التعاقد مع جهة تقويم مطابقة معتمدة، وشهادة الإرسالية.",
        "المستندات التجارية المطلوبة: الفاتورة التجارية، قائمة التعبئة، شهادة المنشأ (GOEIC)، بوليصة الشحن، تصنيف HS الدقيق، ومستندات SABER.",
      ],
      bulletsEn: [
        "Labelling compliance: product name, fiber composition percentages, size/dimensions, country of origin, supplier identity, care symbols (Arabic / bilingual per regulation).",
        "Chemical & physical testing: pH, formaldehyde, heavy metals, azo dyes, wash/rubbing/perspiration color fastness, and child accessory safety.",
        "SABER workflow: register product/SKUs, upload technical file, appoint approved conformity assessment body (CAB), obtain PCoC and shipment SCoC.",
        "Required shipping docs: Commercial Invoice, Packing List, Certificate of Origin (GOEIC), B/L or AWB, exact HS classification, and SABER CoCs.",
      ],
    },

    pricingCostAnalysis: {
      summaryAr:
        "رُصدت في نوفمبر 2026 عينات أسعار تجزئة إلكترونية في السوق السعودي كمؤشرات استرشادية فقط (تيشيرت رجالي أساسي لدى Max بنحو 15 ريالًا وعرض قطعتين بـ 25 ريالًا، وبعض قمصان Polo بـ 25–45 ريالًا، وبلوزات نسائية لدى Namshi بنحو 29–89 ريالًا). ويجب فصل تكلفة المصنع وسعر FOB للمستورد عن سعر التجزئة النهائي وعدم المقارنة المباشرة بينهما، وبناء السعر على معادلة التكلفة الحقيقية مضافًا إليها التعبئة والفحص والشحن والهامش المستهدف.",
      summaryEn:
        "Sampled November 2026 online retail shelf prices in Saudi Arabia serve purely as positioning context (e.g., basic Max men's T-shirt at SAR 15 or 2-pack at SAR 25, polos at SAR 25–45, Namshi women's tops around SAR 29–89; promotional discounts may apply). Factory cost and FOB importer price must never be compared one-for-one against final retail price; quotations must aggregate materials, CM labor, trims, factory overhead, packing, QC, freight terms, and target margin.",
      bulletsAr: [
        "استهداف الشريحة الاقتصادية المتوسطة والمتوسطة عبر القيمة والثبات النوعي وليس كأرخص سعر عشوائي.",
        "عناصر معادلة التسعير: الخامات + التصنيع والعمالة + الإكسسوارات + المصروفات الصناعية + التعبئة + الفحص + الشحن + هامش الربح.",
        "تحجيم المخاطر عبر عروض أسعار محددة الصلاحية لتجنب تقلبات أسعار الغزل والأقمشة.",
      ],
      bulletsEn: [
        "Position in value-mid and mid-market tiers backed by quality consistency and speed rather than lowest-price race.",
        "FOB pricing build-up: fabrics + CM labor + trims + overheads + packaging + inspection + Incoterm freight + target margin.",
        "Use time-bounded validity quotes to hedge raw material and currency volatility.",
      ],
    },

    logisticsSupplyChain: {
      summaryAr:
        "يمثل الشحن البحري الخيار الأساسي للكميات التجارية بين الموانئ المصرية (الإسكندرية وبورسعيد وغيرها حسب الخطوط الملاحية) والموانئ السعودية الرئيسية (ميناء جدة الإسلامي على البحر الأحمر وميناء الملك عبدالعزيز بالدمام)، فيما يُخصص الشحن الجوي للعينات والطلبات العاجلة. يُنصح باعتماد شرط FOB مبدئيًا والعمل عبر مستورد محلي دون تأسيس مستودع مستقل قبل ثبوت تكرار الطلبيات.",
      summaryEn:
        "Sea freight serves bulk commercial volumes from Egyptian ports (Alexandria, Port Said) into Saudi Arabia's primary gateways (Jeddah Islamic Port and King Abdulaziz Port in Dammam), while air freight handles samples and urgent restocks. FOB is recommended as the initial baseline Incoterm with importers managing local clearance; third-party warehousing (3PL) in Riyadh or Jeddah should wait until repeat-order volume justifies inventory.",
      bulletsAr: [
        "الموانئ السعودية المستهدفة: ميناء جدة الإسلامي (البوابة الغربية) وميناء الملك عبدالعزيز بالدمام (البوابة الشرقية).",
        "شروط التسليم: FOB كخيار تفاوضي أساسي، مع إتاحة CIF أو FCA أو DAP عند التوافق التجاري واللوجستي.",
        "تأجيل التخزين الإقليمي أو 3PL إلى مرحلة التوسع بعد ثبوت استدامة المبيعات.",
      ],
      bulletsEn: [
        "Primary Saudi ports: Jeddah Islamic Port (Western/Hejaz distribution) & King Abdulaziz Port, Dammam (Eastern/Riyadh corridor).",
        "Incoterms options: FOB baseline; CIF, FCA, or DAP where mutually negotiated.",
        "Distribution scaling: sell to local importers/brands first before committing to local 3PL warehousing.",
      ],
    },

    risksChallenges: {
      summaryAr:
        "تشمل أبرز المخاطر التشغيلية والتجارية شدة المنافسة السعرية من الموردين الآسيويين، ومخاطر عدم مطابقة مواصفات SASO/SABER، وضعف أو تأخر التحصيل الائتماني، وتقلب تكاليف الخامات وتغير اتجاهات الموضة، وتركز المبيعات في عميل واحد. كما تقر الدراسة بوضوح بوجود معلومات تجارية تحتاج لتحقق ميداني مباشر قبل أي التزام مالي أو تعاقدي.",
      summaryEn:
        "Key operational risks encompass Asian price competition, SASO/SABER conformity failures, buyer collection/credit risk, raw-material price swings, fast trend turnover, and single-client concentration. Furthermore, public desk research alone cannot confirm buyer-specific monthly purchase volumes, exact FOB target prices, distributor margins, or active supply tenders.",
      bulletsAr: [
        "معالجة المنافسة السعرية بالتركيز على التخصص والجودة وسرعة إعادة التوريد (مصر – السعودية).",
        "تقليص مخاطر التحصيل عبر الدفعات المقدمة، والاعتمادات المستندية L/C، وعدم الشحن دون سياسة تحصيل واضحة.",
        "تقليص مخاطر المطابقة بإلزامية فحص ما قبل الشحن واختبارات المعامل المعتمدة قبل التصدير.",
        "بيانات تحتاج تحققًا تجاريًا مباشرًا: أسعار FOB المستهدفة لكل عميل، والحد الأدنى MOQ الفعلي، وتكاليف الشحن وقت التعاقد، واعتماد SABER لكل صنف.",
      ],
      bulletsEn: [
        "Mitigate Asian price pressure via shorter lead times, smaller agile MOQs, and consistent finishing quality.",
        "Enforce strict collection discipline (advance deposits / confirmed L/Cs) before initiating production.",
        "Prevent port rejections via pre-shipment QC inspections and accredited lab testing ahead of SABER filing.",
        "Remaining commercial gaps requiring direct validation: buyer-specific monthly volumes, target FOB benchmarks, exact tariff subheadings, and freight spot rates.",
      ],
    },

    commercialInvestmentOpportunities: {
      summaryAr:
        "تتركز الفرصة الاستثمارية في تحويل حصة صغيرة من الواردات السعودية القائمة بالفعل (4.265 مليار دولار في HS 61+62) إلى عقود تصنيع وتوريد مستمرة من مصر، باستخدام نماذج تمويل منضبطة تبدأ بتمويل الطلبية المحددة المرتبطة بعقد شراء مؤكد لتقليل المخاطر، ثم تمويل دورات الإنتاج والتوسع بعد ثبوت استمرارية العقود.",
      summaryEn:
        "The core commercial opportunity lies in capturing incremental share from Saudi Arabia's existing $4.265B HS61/62 import pool into recurring Egyptian OEM/Private Label export contracts. Financing should start with low-risk order-backed financing tied to confirmed purchase orders, transitioning to multi-order working-capital cycles and line expansion once repeat business is verified.",
      bulletsAr: [
        "نموذج تمويل الطلبية (الأفضل كبداية): تمويل طلبية محددة مرتبطة بعقد شراء ودفعة مقدمة لتقليل المخاطر.",
        "نموذج تمويل دورة إنتاج: لتمويل شراء الأقمشة والتصنيع والشحن والتحصيل عبر عدة طلبيات متزامنة.",
        "نموذج تمويل التوسع: زيادة خطوط الإنتاج بعد إثبات وجود عقود توريد مستمرة.",
      ],
      bulletsEn: [
        "Order-backed Financing (Recommended Phase 1): Ring-fenced capital tied to a verified purchase order and buyer deposit.",
        "Production-Cycle Working Capital: Multi-order fabric, CM labor, freight, and receivables cycle financing.",
        "Capacity Expansion CapEx: Adding sewing/cutting lines strictly after multi-quarter contract continuity is proven.",
      ],
    },

    capacityFinancialFeasibility: {
      summaryAr:
        "لأغراض اختبار حجم الطاقة المطلوبة تخطيطيًا، يوضح النموذج أربعة مستويات إنتاج شهرية (10k، 25k، 50k، و100k قطعة شهريًا) مع افتراض سعر FOB تخطيطي بـ 6 دولارات للقطعة (وهو افتراض مالي توضيحي لا يمثل عرض سعر أو متوسطًا سوقيًا معتمدًا). عند مستوى 50 ألف قطعة شهريًا (600 ألف سنويًا)، تعادل الإيرادات الافتراضية 3.6 مليون دولار، أي نحو 0.084% من إجمالي واردات السعودية لعام 2023، ويمكن استيعابها نظريًا عبر 5 عملاء × 10,000 قطعة أو 10 عملاء × 5,000 قطعة شهريًا. ومع ذلك، لا يُصدر أي رقم لصافي الربح أو ROI أو فترة الاسترداد قبل حصر التكلفة الفعلية لكل موديل وسعر التعاقد وشروط التحصيل.",
      summaryEn:
        "For capacity planning validation, four monthly volume scenarios are modeled (10k, 25k, 50k, and 100k units/month) using an illustrative planning assumption of $6 FOB/unit (explicitly NOT a market quote, realized price, or demand forecast). A 50k/month operation (600k units/year = $3.6M illustrative turnover) equates to roughly 0.084% of 2023 Saudi imports ($4.265B) and conceptually maps to e.g. 5 buyers x 10k units or 10 buyers x 5k units. Net margin, ROI, and payback must NOT be fabricated ahead of real SKU costing and confirmed buyer contracts.",
      bulletsAr: [
        "السيناريو التجريبي: 10,000 قطعة شهريًا (120,000 سنويًا) — 720,000 دولار (افتراض تخطيطي $6 FOB).",
        "السيناريو المتوسط: 25,000 قطعة شهريًا (300,000 سنويًا) — 1,800,000 دولار (افتراض تخطيطي $6 FOB).",
        "سيناريو التوسع: 50,000 قطعة شهريًا (600,000 سنويًا) — 3,600,000 دولار (نحو 0.084% من واردات 2023).",
        "عناصر دراسة الجدوى الـ 14 المطلوبة لاحقًا: الخامات، التصنيع، العمالة، المصروفات الصناعية، التعبئة، الفحص، الشحن، التأمين، الجمارك، البنوك، العمولات، التوزيع، التمويل، والمرتجعات.",
      ],
      bulletsEn: [
        "Pilot scenario: 10,000 units/month (120,000/yr) = $720,000 at illustrative $6 FOB planning price.",
        "Mid scenario: 25,000 units/month (300,000/yr) = $1,800,000 at illustrative $6 FOB planning price.",
        "Expansion scenario: 50,000 units/month (600,000/yr) = $3,600,000 (~0.084% of 2023 imports).",
        "14 mandatory cost components for final contracting model: materials, CM, direct labor, overheads, packing, QC, freight, insurance, duties, banking fees, commissions, warehousing, finance cost, returns.",
      ],
    },

    recommendationsActionPlan: {
      summaryAr:
        "القرار الاستثماري: السوق السعودي يستحق الدخول الاستراتيجي من خلال التصنيع والتوريد التعاقدي (Private Label / FOB / OEM) وليس عبر ضخ إنتاج كبير دون عقود أو افتتاح متجر تجزئة مباشر في البداية. يوصى ببدء الاختبار التجاري عبر طلبيات تجريبية تتراوح بين 10 و15 ألف قطعة شهريًا في الرياض وجدة، ولا يتم الانتقال لمراحل 25 ثم 50 ألف قطعة شهريًا إلا بعد تأكيد إعادة الطلب وانضباط التحصيل.",
      summaryEn:
        "Investment Recommendation: Enter Saudi Arabia selectively through B2B contract manufacturing (Private Label, FOB, OEM) rather than uncontracted bulk output or an early owned-retail launch. Execute 10,000–15,000 units/month pilot orders targeting Riyadh and Jeddah buyers, scaling to 25,000 and 50,000 units/month strictly after repeat-order and payment-cycle validation.",
      bulletsAr: [
        "الأشهر 1–2: إعداد Vendor Package والكتالوج المخصص وقائمة 30–50 مشتريًا مؤهلًا.",
        "الأشهر 3–4: إرسال العينات واعتمادها وتوقيع أول عقد توريد تجريبي (10–15k قطعة).",
        "الأشهر 5–8: تنفيذ الشحنة التجريبية وتقييم الجودة في السوق وتحويل المشتري إلى عميل متكرر.",
        "الأشهر 9–12: التوسع التدريجي إلى 25k ثم 50k قطعة/شهر عبر تنويع العملاء في الرياض وجدة والمنطقة الشرقية.",
      ],
      bulletsEn: [
        "Months 1–2: Finalize bilingual Vendor Package, targeted catalog, and shortlist 30–50 prospective buyers.",
        "Months 3–4: Dispatch buyer-tailored swatches/samples and close first pilot contract (10k–15k units).",
        "Months 5–8: Deliver pilot shipment under SASO/SABER conformity and validate sell-through for repeat orders.",
        "Months 9–12: Scale toward 25k and 50k units/month across diversified Riyadh, Jeddah, and Eastern Province accounts.",
      ],
    },
  },

  comparisonMetrics: {
    marketSizeValue: 17.1,
    marketSizeDisplayAr: "17.1 مليار دولار (ملابس 2023) · 30.75 مليار ريال (نسائي 2024)",
    marketSizeDisplayEn: "$17.1B (Apparel 2023) · SAR 30.75B (Womenswear 2024)",
    marketSizeUnit: "USD B",
    importsValue: 4.265,
    importsDisplayAr: "4.265 مليار دولار (HS 61+62 · 2023) — حصة مصر 64.03M$ (1.5%)",
    importsDisplayEn: "$4.265B (HS 61+62 · 2023) — Egypt $64.03M (1.5%)",
    importsUnit: "USD B",
    growthRateDisplay: "+3.3% (النسائي) · 17.1B -> 22.3B (2028)",
    growthUnit: "% CAGR / Trajectory",
    topDemandedProductsAr: [
      "ملابس نسائية كاجوال (توبس، بلوزات، تونيك، فساتين)",
      "ملابس المنزل والنوم النسائية",
      "أطقم وملابس الأطفال القطنية",
      "تيشيرتات وبولو وبناطيل رجالية",
    ],
    topDemandedProductsEn: [
      "Women's Casual Tops, Blouses, Tunics & Dresses",
      "Women's Homewear, Loungewear & Nightwear",
      "Childrenswear & Cotton Kids Sets",
      "Men's Knitted T-Shirts, Polos & Woven Trousers",
    ],
    competitionLevelAr: "مرتفعة عالميًا في الأساسيات (الصين 45.2%) ومجزأة علاميًا (أكبر 70 علامة 24%)",
    competitionLevelEn: "Intense Asian supply competition (China 45.2%); fragmented brand share (Top 70 = 24%)",
    entryEaseAr: "مشروط بمطابقة SASO & SABER وجودة التشطيب وعلاقات B2B مباشرة",
    entryEaseEn: "Contingent on SASO/SABER compliance, consistent QC, and direct B2B partnerships",
    logisticsCostAr: "ميزة قرب جغرافي (موانئ الإسكندرية/بورسعيد <-> جدة/الدمام) + مزايا GAFTA المشروطة بالمنشأ",
    logisticsCostEn: "Red Sea proximity (Alexandria/Port Said <-> Jeddah/Dammam) + conditional GAFTA eligibility",
    investmentOpportunityAr: "مرتفعة عبر Private Label وOEM وFOB (بداية تجريبية 10–15k قطعة/شهر)",
    investmentOpportunityEn: "Strong via Private Label, OEM & FOB (recommended 10k–15k units/month pilot)",
    referenceYear: "2023–2026",
    methodologyNoteAr:
      "مؤشرات السوق مأخوذة من مصادر متعددة (هيئة الأزياء، CMA، MarketLine، WITS) بتعريفات مختلفة ويجب عدم جمعها رقميًا.",
    methodologyNoteEn:
      "Metrics reflect distinct institutional definitions (Fashion Commission, CMA, MarketLine, WITS) and must not be summed.",
  },

  sources: [
    {
      id: "S1",
      name: "General Authority for Statistics (GASTAT) & World Bank – Saudi Population Estimates (35.3M in 2024 / 36.97M in 2025)",
      url: "https://www.stats.gov.sa/",
      dataYear: "2024–2025",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S2",
      name: "GASTAT – Saudi Women's Statistics Report 2024 (9.81M Saudi women / 36% labor participation)",
      url: "https://www.stats.gov.sa/documents/20117/2435273/Saudi%2BWomen%2BStatistics%2B2024_EN%2B%281%29.pdf",
      dataYear: "2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S3",
      name: "Saudi Fashion Commission – The State of Fashion Sector in Saudi Arabia 2024 (including S9, S16, S17, S24)",
      url: "https://saudi-fashion-co.objects.frb.io/2024_Saudi_State_of_Fashion_Report.pdf",
      dataYear: "2023–2028",
      accessedAt: "2026-11-12",
      classification: "official",
      methodologyNoteAr: "يشمل حجم السوق 2021–2023 وتوقعات 2024–2028 والرياضي والتصنيع المحلي و70 علامة وسلوك الشراء الرقمي.",
      methodologyNoteEn: "Covers 2021–2023 market size, 2024–2028 projections, sportswear, domestic manufacturing, top 70 brands, and omnichannel behavior.",
    },
    {
      id: "S4",
      name: "MarketLine – Apparel Retail in Saudi Arabia (September 2025: $18.6B revenue, 42% womenswear)",
      url: "https://www.researchandmarkets.com/reports/6017946/apparel-retail-in-saudi-arabia",
      dataYear: "2024–2025",
      accessedAt: "2026-11-12",
      classification: "research_estimates",
    },
    {
      id: "S5",
      name: "Jamjoom Fashion Trading Company – Prospectus, Capital Market Authority (CMA) (including S6, S7)",
      url: "https://cma.gov.sa/en/Market/Prospectuses/Documents/Jamjoom_Fashion_Trading_Company_en.pdf",
      dataYear: "2019–2029",
      accessedAt: "2026-11-12",
      classification: "official",
      methodologyNoteAr: "نشرة رسمية لهيئة السوق المالية تغطي تجزئة الملابس النسائية والداخلية والنوم والملابس الرجالية التقليدية والأثواب.",
      methodologyNoteEn: "Official CMA filing detailing Saudi womenswear, underwear, nightwear, and men's traditional thobe retail market values.",
    },
    {
      id: "S8",
      name: "Euromonitor International – Childrenswear in Saudi Arabia (2026)",
      url: "https://www.euromonitor.com/childrenswear-in-saudi-arabia/report",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "research_estimates",
    },
    {
      id: "S10",
      name: "WITS / UN Comtrade (World Bank) – Saudi Arabia Imports HS 62 Woven Apparel (2023: $2.333B)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2023/tradeflow/Imports/partner/ALL/product/62",
      dataYear: "2023",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S11",
      name: "WITS / UN Comtrade (World Bank) – Saudi Arabia Imports HS 61 Knitted Apparel (2023: $1.931B)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2023/tradeflow/Imports/partner/ALL/product/61",
      dataYear: "2023",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S12",
      name: "WITS – Saudi Imports HS 610510 Men's Cotton Knitted Shirts (2024: $28.61M / 2.52M units; Egypt 2.24%)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2024/tradeflow/Imports/partner/ALL/product/610510",
      dataYear: "2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S13",
      name: "WITS – Saudi Imports HS 620462 Women's Cotton Woven Trousers (2024: $72.23M / 6.40M units; Egypt 0.93%)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2024/tradeflow/Imports/partner/ALL/product/620462",
      dataYear: "2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S14",
      name: "WITS – Saudi Imports HS 620342 Men's Cotton Woven Trousers (2024: $118.73M / 8.05M units)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2024/tradeflow/Imports/partner/ALL/product/620342",
      dataYear: "2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S15",
      name: "WITS – Saudi Imports HS 610610 Women's Cotton Knitted Blouses (2024: $13.22M / 2.06M units)",
      url: "https://wits.worldbank.org/trade/comtrade/en/country/SAU/year/2024/tradeflow/Imports/partner/ALL/product/610610",
      dataYear: "2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S18-S23",
      name: "Prospective Saudi Retail & Apparel Companies Directory (Landmark Group, Cenomi Retail, KOJ Group, Alhokair, AlShiaka, SYC Fashion)",
      url: "https://www.landmarkgroup.com/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "commercial",
      methodologyNoteAr: "مواقع الشركات وقنوات التواصل المنشورة لأغراض التأهيل والتواصل التجاري — ليست عملاء متعاقدين حاليًا.",
      methodologyNoteEn: "Public company profiles compiled strictly as prospective B2B buyer leads, not existing contracted buyers.",
    },
    {
      id: "S25-S26",
      name: "Max Fashion Saudi Arabia & Namshi Saudi Arabia – Observed Retail Shelf Prices (November 2026)",
      url: "https://www.maxfashion.com/sa/en/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "commercial",
      methodologyNoteAr: "عينات أسعار عرض تجزئة وقت الرصد وليست متوسطات إحصائية ثابتة.",
      methodologyNoteEn: "Point-in-time retail display observations (Nov 2026), not fixed statistical price averages.",
    },
    {
      id: "S27",
      name: "Saudi Standards, Metrology and Quality Organization (SASO) – Technical Regulation for Textile Products (2nd Edition)",
      url: "https://www.saso.gov.sa/en/laws-and-regulations/technical_regulations/pages/default.aspx?technicalcat=2",
      dataYear: "2023–2024",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S28",
      name: "SABER Platform – Product & Shipment Conformity Registration",
      url: "https://saber.sa/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S29-S30",
      name: "ZATCA Integrated Customs Tariff & Bureau of Experts – Saudi VAT Law (15% VAT & HS-Specific Duties)",
      url: "https://eservices.zatca.gov.sa/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S31",
      name: "GOEIC (Egypt) – Arab Rules of Origin & GAFTA Documentation",
      url: "https://www.goeic.gov.eg/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "official",
    },
    {
      id: "S32-S33",
      name: "Saudi Apparel Expo & Saudi Fabric & Yarn Expo (7–9 December 2026, The Arena Riyadh)",
      url: "https://saudiapparelexpo.com/",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "commercial",
    },
    {
      id: "SBA-FIN-PLAN",
      name: "SBA Planning Capacity & Illustrative FOB Scenario ($6/unit Hypothetical Planning Model)",
      dataYear: "2026",
      accessedAt: "2026-11-12",
      classification: "financial_assumptions",
      methodologyNoteAr: "افتراض تخطيطي لاختبار حجم المشروع وليس سعر سوق معتمدًا أو توقع ربح.",
      methodologyNoteEn: "Illustrative scenario assumption for capacity validation; not an approved quote or profit projection.",
    },
  ],

  groupOpportunities: [
    {
      id: "opp-sau-privatelabel",
      capabilityAr: "التصنيع التعاقدي وبرامج العلامات الخاصة (Private Label / OEM / FOB)",
      capabilityEn: "Private Label, OEM & Full-Package FOB Apparel Manufacturing",
      descriptionAr:
        "استغلال قدرة المجموعة التصنيعية في مصر لتوريد الملابس النسائية الكاجوال وملابس المنزل والنوم وأطقم الأطفال والتيشيرتات والبولو الرجالية لصالح العلامات وسلاسل التجزئة السعودية بمرونة كميات وتكرار طلب.",
      descriptionEn:
        "Leverage SAMI BIN AYYAD GROUP's Egyptian manufacturing base to supply Saudi retail groups and brands with womenswear casuals, homewear/nightwear, kids sets, and men's basics via flexible FOB/OEM/Private Label programs.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "بيانات استيراد السعودية 2023 ($4.265B) وصادرات مصر القائمة في HS610510 وHS620462 (2024)",
      evidenceReferenceEn: "2023 Saudi imports ($4.265B HS61+62) & confirmed 2024 Egyptian exports in HS610510 and HS620462",
      sectorPageUrl: "/sectors/garment",
    },
    {
      id: "opp-sau-gafta-proximity",
      capabilityAr: "الاستفادة من القرب اللوجستي وقواعد منشأ اتفاقية GAFTA",
      capabilityEn: "Red Sea Transit Speed & GAFTA Origin Advantage (Pending Verification)",
      descriptionAr:
        "توريد أسرع لإعادة التعبئة مقارنة بآسيا عبر الموانئ المصرية (الإسكندرية/بورسعيد) إلى جدة والدمام، مع دراسة استيفاء شهادة منشأ GOEIC ومعيار القيمة المضافة 40% لكل موديل قبل التعاقد.",
      descriptionEn:
        "Faster replenishment cycles from Egyptian ports to Jeddah and Dammam compared to East Asian lead times, subject to SKU-level GAFTA 40% value-added verification and GOEIC certification.",
      evidenceStatus: "exploratory",
      evidenceReferenceAr: "يتطلب التحقق الجمركي على مستوى رمز HS وتكلفة الخامات لكل عقد",
      evidenceReferenceEn: "Requires per-SKU HS code origin audit and material-origin verification prior to quoting",
      sectorPageUrl: "/sectors/garment",
    },
  ],

  globalOpportunityLink: {
    enabled: true,
    approved: true,
    tradeSectorParam: "apparel",
    titleAr: "المملكة العربية السعودية ضمن شبكة الفرص العالمية — قطاع الملابس والمنسوجات",
    titleEn: "Saudi Arabia in Global Opportunities — Apparel & Textiles Export Network",
    descriptionAr:
      "تمثل المملكة العربية السعودية أحد الأسواق الموثقة في بوابة الفرص العالمية للمجموعة ضمن طلبات الملابس النسائية والأطفال والتريكو بشروط FOB وCIF.",
    descriptionEn:
      "Saudi Arabia is actively catalogued in the Group's Global Opportunities Apparel registry for women's wear, childrenswear, and knitwear buyer requirements under FOB/CIF terms.",
  },
};

