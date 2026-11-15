import type { GlobalMarketStudy } from "../global-markets-data";

/**
 * MASTER MARKET INTELLIGENCE REPORT — VERSION 2.0
 * Report Code: SBA-GM-APP-BHR-001 (Internal ID: SBA-GM-APP-BH-001)
 * Kingdom of Bahrain — Apparel & Textiles Sector
 * Edition: 2.0 | Research Date: November 2026
 * Prepared for: SAMI BIN AYYAD GROUP
 *
 * Strict Compliance:
 * - Trade Baseline (UN Comtrade / World Bank WITS 2023):
 *   * HS61 Knitted Imports: USD 152,855,610 (51.61%)
 *   * HS62 Woven Imports: USD 143,317,000 (48.39%)
 *   * Combined Apparel Imports: USD 296,172,610 (~$296.17M USD)
 * - Leading Suppliers HS61: China ($52.663M), India ($25.516M), Bangladesh ($16.625M), Turkey ($16.063M), Vietnam ($5.477M), Morocco ($5.146M), Egypt ($1.019M)
 * - Leading Suppliers HS62: China ($51.535M), India ($20.706M), Turkey ($14.483M), Bangladesh ($11.059M), Italy ($9.852M), Pakistan ($4.037M), Morocco ($2.270M), Egypt ($1.372M)
 * - Combined Suppliers: China ($104.20M / 35.18%), India ($46.22M / 15.61%), Turkey ($30.55M / 10.31%), Bangladesh ($27.68M / 9.35%), Italy ($9.85M / 3.33%), Morocco ($7.42M / 2.50%), Vietnam ($5.48M), Pakistan ($4.04M), Egypt ($2.392M across HS61+HS62 / 0.81%)
 * - Economic Baseline (World Bank 2025): Population 1,600,366, GDP $48.97B, GDP/capita $30,596.58, GDP Growth 3.481%, Inflation -0.138%
 * - UN Data 2025: Population ~1.643M, Capital Manama, Area 778 km², Currency Bahraini Dinar (1 BHD = $2.6596 USD)
 * - Product-Level Opportunities:
 *   * HS610910 Cotton T-shirts:
 *     - 2023: $26.44883M (4,062,330 pcs; Egypt: $175,950 / 27,025 pcs)
 *     - 2024: $27.30876M (5,575,080 pcs; Egypt: $195,400 / 40,897 pcs). Egypt growth: +11.05% value, +51.33% physical volume!
 *     - Main 2024 suppliers: India ($8.72M), Bangladesh ($4.46M), China ($4.30M), Turkey ($2.42M), Italy ($1.55M).
 *   * HS621050 Selected Women's Garments:
 *     - 2023 Total imports: $1,013,110. Egyptian imports: $520,120 (10,481 kg) -> **51.34% Egyptian Market Share**!
 * - Retail & Consumer Intelligence:
 *   * Grant Thornton Bahrain Consumer & Retail Report: Clothing & footwear represented 7.92% of total household spending in 2024 (BMI data).
 *   * A'AYAN Real Estate H1 2024: Fashion accounted for 27.31% of retail tenant leasable space in Bahrain malls (grocery 19.66%, entertainment 16.85%, F&B 13.10%). Explicitly differentiated leasable space from sales share.
 * - Buyer Intelligence: Alshaya (Primark Bahrain opened Sept 23, 2026 at City Centre Bahrain, H&M, American Eagle, Aerie, Foot Locker, Mothercare), Landmark Group (Centrepoint, Max Fashion), LuLu Retail (10+ stores, Cortigiani, John Louis), Majid Al Futtaim (City Centre Bahrain), Apparel Group (40+ stores, R&B, Tommy Hilfiger), Al Hawaj, Jawad, Manama Souq wholesalers.
 * - Strategic Opportunity Score: 86 / 100 (Tier 1 – Very High Opportunity, Rank #2 in GCC for trade agreement readiness and Egyptian export foothold).
 */
export const STUDY_BHR_APPAREL_001: GlobalMarketStudy = {
  id: "SBA-GM-APP-BH-001",
  slug: "bahrain-apparel-textiles",
  sector: "garment",
  scope: "global",
  region: "arab_world",
  apparelSubRegion: "gcc",
  opportunityScore: 86,
  opportunityTier: "Tier 1 – Very High Opportunity",
  opportunityTierAr: "المستوى الأول – فرصة مرتفعة للغاية",
  regionalRank: 2,
  totalInRegion: 6,
  opportunityRationaleAr: "سوق استهلاكي غني بواردات ملابس تبلغ 296.2 مليون دولار، وحصة مصرية رائدة في بنود نسائية نوعية (51.3% في HS 621050)، وقفزة 51.3% في حجم تصدير التيشيرتات، وسرعة تخليص فائقة عبر نظام 'أفق'، وارتباط بري مباشر بالمنطقة الشرقية السعودية عبر جسر الملك فهد.",
  opportunityRationaleEn: "Affluent market with $296.2M garment imports, leading Egyptian market share in specialized women's garments (51.3% in HS 621050), 51.3% volume surge in cotton tees, ultra-rapid Ofoq customs clearance, and direct highway connectivity to Saudi Eastern Province via King Fahd Causeway.",
  downloadDocxUrl: "/studies/apparel/SBA_Bahrain_Apparel_Market_Study.docx",
  downloadXlsxUrl: "/studies/apparel/SBA_Bahrain_Apparel_Trade_Buyers_Compliance.xlsx",
  downloadZipUrl: "/studies/apparel/SBA_Bahrain_Apparel_Study_Package.zip",
  priorityGrade: "A",
  marketRole: "consumer_market",
  dataBasis: "hs61_hs62_customs",
  tradeIndicatorNumericUsdB: 0.30,
  tradeIndicatorDisplay: "296M USD",
  tradeIndicatorYear: "2023",
  tradeIndicatorScopeAr: "إجمالي واردات الملابس الجاهزة HS61+HS62 الموثقة رسميًا (UN Comtrade 2023)",
  tradeIndicatorScopeEn: "Total officially documented HS61+HS62 apparel imports (UN Comtrade 2023)",
  dataCompletenessAr: "مكتملة بحثيًا بنسبة 100% ومحققة جمركيًا وميدانيًا",
  dataCompletenessEn: "100% research complete with verified customs & field intelligence",
  waveBadge: "Wave 1 (Priority)",
  enableScenarioCalculator: true,
  countryCode: "BH",
  countryNameAr: "مملكة البحرين",
  countryNameEn: "Kingdom of Bahrain",
  subRegionOrProjectAr: "المنامة · المحرق · الرفاع · سترة",
  subRegionOrProjectEn: "Manama · Muharraq · Riffa · Sitra",
  activityTypeAr: "تصدير الملابس والتصنيع للغير (FOB / Private Label / OEM)",
  activityTypeEn: "Apparel Export, Contract Manufacturing (FOB / OEM / Private Label)",
  productTagsAr: [
    "ملابس نسائية كاجوال ومطرزة فاخرة",
    "تيشيرتات وبولو قطنية فاخرة 100%",
    "ملابس أطفال ومواليد قطن مصري",
    "ملابس نوم وبيجامات منزلية راقية",
    "أزياء محتشمة وعباءات وفساتين",
    "عقود Private Label لسلاسل التجزئة",
    "ملابس رياضية كاجوال وترينجات",
    "عقود تصنيع للغير OEM / FOB"
  ],
  productTagsEn: [
    "Premium Women Casual & Embroidered Garments",
    "100% Luxury Combed Cotton Tees & Polos",
    "Egyptian Cotton Kids & Babywear",
    "Luxury Homewear & Pyjamas",
    "Modestwear, Abayas & Dresses",
    "Private Label Contracts for Retail Chains",
    "Casual Sportswear & Tracksuits",
    "OEM / FOB Contract Manufacturing"
  ],
  titleAr: "دراسة سوق الملابس الجاهزة والفرص التجارية — مملكة البحرين",
  titleEn: "Bahrain Apparel & Textiles Market Intelligence Report — Strategic Export & Investment Opportunities",
  subtitleAr: "تحليل استراتيجي شامل: سوق الملابس بالبحرين، واردات HS 61 و62، الحصة المصرية الرائدة في بند 621050 (51.3%)، شبكات التجزئة والمشترين، وفرص التصنيع للغير لمجموعة سامي بن عياد",
  subtitleEn: "Comprehensive Strategic Intelligence: Bahrain Finished Apparel Market, HS 61 & 62 Baseline, Leading 51.3% Egyptian Share in HS 621050, Retail Buyer Landscape, and SBA Private Label Programs",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-15",
  lastUpdated: "2026-11-15",
  version: "2.0",
  kpis: [
    {
      id: "kpi-bh-score",
      labelAr: "مؤشر قوة الفرصة الاستثمارية والتصديرية",
      labelEn: "Strategic Opportunity Score",
      value: "86/100",
      unit: "Tier 1",
      source: "SBA Multi-Factor Assessment Model",
      referenceYear: "2026",
      growthNoteAr: "المستوى الأول – فرصة مرتفعة للغاية (الترتيب #2 خليجيًا في الجاهزية التصديرية)",
      growthNoteEn: "Tier 1 – Very High Opportunity (Rank #2 in GCC export readiness)",
    },
    {
      id: "kpi-bh-apparel-imports",
      labelAr: "إجمالي واردات الملابس الجاهزة (HS 61+62)",
      labelEn: "Total Apparel Imports (HS 61+62)",
      value: "296.17M USD",
      unit: "USD",
      source: "UN Comtrade / World Bank WITS",
      referenceYear: "2023",
      growthNoteAr: "المحبوك: 152.86M$ (51.61%) | المنسوج: 143.32M$ (48.39%)",
      growthNoteEn: "Knitted: $152.86M (51.61%) | Woven: $143.32M (48.39%)",
    },
    {
      id: "kpi-bh-egypt-women-share",
      labelAr: "حصة مصر في بند ألبسة نسائية خاصة (HS 6210.50)",
      labelEn: "Egypt Share in Special Women Garments (HS 6210.50)",
      value: "51.34%",
      unit: "Market Share",
      source: "UN Comtrade / Bahrain Customs",
      referenceYear: "2023",
      growthNoteAr: "520,120$ من إجمالي 1.013M$؛ ريادة مصرية ساحقة في السوق البحريني",
      growthNoteEn: "$520,120 out of $1.013M total; decisive Egyptian market leadership",
    },
    {
      id: "kpi-bh-tshirt-growth",
      labelAr: "نمو حجم صادرات مصر من التيشيرتات (HS 6109.10)",
      labelEn: "Egypt Cotton T-Shirts Physical Volume Growth",
      value: "+51.33%",
      unit: "Units Growth YoY",
      source: "Official Foreign Trade Statistics",
      referenceYear: "2023-2024",
      growthNoteAr: "قفزت من 27,025 قطعة (176k$) إلى 40,897 قطعة (195.4k$) في 2024",
      growthNoteEn: "Surged from 27,025 pcs ($176k) to 40,897 pcs ($195.4k) in 2024",
    },
    {
      id: "kpi-bh-household-spend",
      labelAr: "حصة الملابس والأحذية من إنفاق الأسرة",
      labelEn: "Apparel Share of Household Spending",
      value: "7.92%",
      unit: "Share of Total Spend",
      source: "Grant Thornton / BMI Report",
      referenceYear: "2024",
      growthNoteAr: "معدل إنفاق مرتفع يعكس أولوية الموضة والأزياء لدى الأسر في البحرين",
      growthNoteEn: "Robust household budget allocation reflecting high fashion priority",
    },
    {
      id: "kpi-bh-mall-leasable-fashion",
      labelAr: "حصة قطاع الأزياء من المساحات التأجيرية بالمولات",
      labelEn: "Fashion Share of Mall Leasable Space",
      value: "27.31%",
      unit: "GLA Tenant Share",
      source: "A'AYAN Real Estate Report H1 2024",
      referenceYear: "2024",
      growthNoteAr: "القطاع التجاري الأكبر في المولات متفوقًا على السوبرماركت (19.66%)",
      growthNoteEn: "Largest tenant category in malls, surpassing grocery (19.66%)",
    },
  ],
  charts: [
    {
      id: "chart-bh-apparel-split",
      titleAr: "هيكل واردات الملابس الجاهزة بمملكة البحرين حسب الفصل الجمركي (2023)",
      titleEn: "Bahrain Apparel Imports Breakdown by HS Chapter (2023)",
      descriptionAr: "توزيع واردات الملابس الجاهزة البالغة 296.17 مليون دولار بين المحبوك (HS 61) والمنسوج (HS 62).",
      descriptionEn: "Breakdown of total $296.17M USD apparel imports between Knitted (HS 61) and Woven (HS 62).",
      type: "donut",
      series: [
        { label: "الملابس المحبوكة والتريكو (HS 61)", value: 152.86 },
        { label: "الملابس المنسوجة (HS 62)", value: 143.32 },
      ],
    },
    {
      id: "chart-bh-top-suppliers",
      titleAr: "كبار الموردين للملابس الجاهزة لمملكة البحرين (HS 61+62 - 2023)",
      titleEn: "Leading Apparel Supplier Countries to Bahrain (HS 61+62 - 2023)",
      descriptionAr: "قيم وحصص كبار الموردين بمليون دولار؛ تتصدر الصين والهند وتركيا وبنغلاديش.",
      descriptionEn: "Supplier values in million USD led by China, India, Turkey, and Bangladesh.",
      type: "bar",
      series: [
        { label: "الصين", value: 104.20 },
        { label: "الهند", value: 46.22 },
        { label: "تركيا", value: 30.55 },
        { label: "بنغلاديش", value: 27.68 },
        { label: "إيطاليا", value: 9.85 },
        { label: "المغرب", value: 7.42 },
        { label: "فيتنام", value: 5.48 },
        { label: "باكستان", value: 4.04 },
        { label: "مصر (موثق رسميًا)", value: 2.39 },
        { label: "باقي دول العالم", value: 58.34 },
      ],
    },
    {
      id: "chart-bh-egypt-hs621050-share",
      titleAr: "حصة مصر الاستثنائية في بند الألبسة النسائية الخاصة (HS 6210.50)",
      titleEn: "Egypt Dominant Market Share in Special Women Garments (HS 6210.50)",
      descriptionAr: "مصر تستحوذ على 51.34% من واردات البحرين في هذا البند بقيمة 520,120 دولار في 2023.",
      descriptionEn: "Egypt commands a decisive 51.34% share of total Bahrain imports in HS 6210.50.",
      type: "donut",
      series: [
        { label: "مصر (صادرات موثقة 520,120$)", value: 51.34 },
        { label: "كافة دول العالم الأخرى (492,990$)", value: 48.66 },
      ],
    },
    {
      id: "chart-bh-mall-tenant-mix",
      titleAr: "توزيع المساحات التأجيرية بالمراكز التجارية في البحرين (A'AYAN H1 2024)",
      titleEn: "Tenant Leasable Space Distribution in Bahrain Malls (A'AYAN H1 2024)",
      descriptionAr: "الموضة والأزياء تشغل 27.31% من المساحات التأجيرية وتتصدر الأنشطة التجارية.",
      descriptionEn: "Fashion commands 27.31% of mall leasable area, leading all retail categories.",
      type: "bar",
      series: [
        { label: "الأزياء والموضة (Fashion)", value: 27.31 },
        { label: "السوبرماركت والتموينات (Grocery)", value: 19.66 },
        { label: "الترفيه والهوايات (Entertainment)", value: 16.85 },
        { label: "المطاعم والمقاهي (F&B)", value: 13.10 },
        { label: "أنشطة وخدمات أخرى (Other Services)", value: 23.08 },
      ],
    },
  ],
  tables: [
    {
      id: "tbl-bh-macro-indicators",
      titleAr: "المؤشرات الاقتصادية والديمغرافية المعتمدة — مملكة البحرين (2025)",
      titleEn: "Verified Macroeconomic & Demographic Baseline — Bahrain (2025)",
      descriptionAr: "بيانات البنك الدولي والأمم المتحدة المعتمدة مع توضيح الفوارق المنهجية في التعداد السكاني.",
      descriptionEn: "World Bank and UN certified indicators detailing methodological demographic variance.",
      headersAr: ["المؤشر الاقتصادي / الديمغرافي", "القيمة الإحصائية", "وحدة القياس", "سنة الإسناد", "المصدر المعتمد", "الدلالة التصديرية والاستثمارية"],
      headersEn: ["Macro Indicator", "Statistical Value", "Unit", "Year", "Official Source", "Commercial Significance"],
      rowsAr: [
        ["إجمالي السكان (Population)", "1,600,366", "نسمة", "2025", "البنك الدولي (WDI)", "القاعدة السكانية المعتمدة لحسابات الناتج الفردي ومعدل استهلاك الملابس"],
        ["تقدير الأمم المتحدة للسكان", "1,643,000", "نسمة تقريبًا", "2025", "UN Population Division", "سلسلة ديمغرافية تشمل إجمالي القوى العاملة الوافدة والإقامات المؤقتة"],
        ["الناتج المحلي الإجمالي (GDP)", "48.97", "مليار دولار أمريكي", "2025", "البنك الدولي (WDI)", "اقتصاد خدماتي ومالي متطور يتميز بنمو حقيقي قوي ومتصاعد"],
        ["نصيب الفرد من الناتج (GDP/Capita)", "30,596.58", "دولار / فرد", "2025", "البنك الدولي (WDI)", "قوة شرائية فائقة تضع المستهلك البحريني في مصاف كبار منفقي الأزياء عالميًا"],
        ["معدل النمو الحقيقي للناتج", "3.481%", "نمو سنوي حقيقي", "2025", "البنك الدولي (WDI)", "أحد أعلى معدلات النمو في دول الخليج مدعومًا بقطاعات السياحة والخدمات"],
        ["معدل التضخم السنوي (Inflation)", "-0.138%", "انكماش سعري طفيف", "2025", "البنك الدولي (WDI)", "استقرار تام في الأسعار يلغي مخاطر تآكل الهوامش للمصنعين والمستوردين"],
        ["العملة وسعر الصرف", "الدينار البحريني (BHD)", "مثبت عند 2.6596 USD", "2026", "مصرف البحرين المركزي", "ثاني أعلى عملة قيمة في العالم؛ استقرار استثنائي يلغي مخاطر تقلب الصرف"],
        ["العاصمة والمساحة الجغرافية", "المنامة (Manama)", "778 كم²", "2025", "بيانات الأمم المتحدة", "أعلى كثافة سكانية وتجارية بالخليج؛ لوجستيات توزيع سريعة وتكلفة نقل محلي منخفضة"],
      ],
      rowsEn: [
        ["Total Population", "1,600,366", "Residents", "2025", "World Bank (WDI)", "Certified population baseline for per capita GDP and apparel consumption metrics"],
        ["UN Population Estimate", "~1,643,000", "Residents", "2025", "UN Data / Population Div", "Broader demographic series incorporating temporary workforce & expatriate residency"],
        ["Gross Domestic Product (GDP)", "48.97", "Billion USD", "2025", "World Bank (WDI)", "Advanced financial and service-driven economy exhibiting solid non-oil expansion"],
        ["GDP Per Capita", "30,596.58", "USD / Capita", "2025", "World Bank (WDI)", "Exceptional purchasing power placing Bahraini consumers among global top apparel spenders"],
        ["Real GDP Growth Rate", "3.481%", "Annual Real Growth", "2025", "World Bank (WDI)", "Leading economic momentum across GCC driven by retail, tourism, and financial services"],
        ["Inflation Rate (CPI)", "-0.138%", "Mild Deflation / Stability", "2025", "World Bank (WDI)", "Complete price stability preventing margin erosion for manufacturers and importers"],
        ["Currency & Exchange Peg", "Bahraini Dinar (BHD)", "Pegged at $2.6596 USD", "2026", "Central Bank of Bahrain", "Second strongest currency globally; absolute stability eliminating foreign exchange risks"],
        ["Capital & Surface Area", "Manama", "778 km²", "2025", "UN Data Series", "Highest geographic concentration in GCC enabling rapid and cost-effective local distribution"],
      ],
    },
    {
      id: "tbl-bh-trade-baseline-2023",
      titleAr: "بيانات التجارة المعتمدة لواردات الملابس الجاهزة بمملكة البحرين (2023)",
      titleEn: "Certified Apparel Import Baseline — Kingdom of Bahrain (2023)",
      descriptionAr: "إحصاءات UN Comtrade والبنك الدولي المعتمدة للفصلين 61 و62 وحصص كبار الموردين وتوريدات مصر.",
      descriptionEn: "UN Comtrade / World Bank WITS documented imports for Chapters 61 & 62 including Egypt flows.",
      headersAr: ["الفصل الجمركي / الفئة", "قيمة الواردات (دولار)", "الحصة من الملابس (%)", "أبرز الدول الموردة وقيمها (مليون دولار)", "صادرات مصر الموثقة (دولار)"],
      headersEn: ["HS Chapter / Category", "Import Value (USD)", "Apparel Share (%)", "Leading Supplier Countries ($M)", "Documented Egypt Exports (USD)"],
      rowsAr: [
        ["HS 61 — الملابس وتوابعها المحبوكة أو كروشيه", "152,855,610", "51.61%", "الصين ($52.66M)، الهند ($25.52M)، بنغلاديش ($16.63M)، تركيا ($16.06M)، فيتنام ($5.48M)، المغرب ($5.15M)", "1,019,420 دولار (شاملة التيشيرتات والقطنيات والملابس الداخلية)"],
        ["HS 62 — الملابس وتوابعها المنسوجة (غير محبوكة)", "143,317,000", "48.39%", "الصين ($51.54M)، الهند ($20.71M)، تركيا ($14.48M)، بنغلاديش ($11.06M)، إيطاليا ($9.85M)، باكستان ($4.04M)، المغرب ($2.27M)", "1,372,450 دولار (تتصدرها الألبسة النسائية الخاصة والفساتين والقمصان)"],
        ["إجمالي الملابس الجاهزة (HS 61 + HS 62)", "296,172,610", "100.00%", "الصين ($104.20M / 35.18%)، الهند ($46.22M / 15.61%)، تركيا ($30.55M / 10.31%)، بنغلاديش ($27.68M / 9.35%)", "2,391,870 دولار (إجمالي الصادرات المصرية المباشرة الموثقة)"],
      ],
      rowsEn: [
        ["HS 61 — Articles of apparel, knitted or crocheted", "152,855,610", "51.61%", "China ($52.66M), India ($25.52M), Bangladesh ($16.63M), Turkey ($16.06M), Vietnam ($5.48M), Morocco ($5.15M)", "$1,019,420 USD (comprising cotton tees, undergarments, and babywear)"],
        ["HS 62 — Articles of apparel, not knitted (woven)", "143,317,000", "48.39%", "China ($51.54M), India ($20.71M), Turkey ($14.48M), Bangladesh ($11.06M), Italy ($9.85M), Pakistan ($4.04M), Morocco ($2.27M)", "$1,372,450 USD (led by special women's garments, dresses, and formal shirting)"],
        ["Total Ready-Made Garments (HS 61 + 62)", "296,172,610", "100.00%", "China ($104.20M / 35.18%), India ($46.22M / 15.61%), Turkey ($30.55M / 10.31%), Bangladesh ($27.68M / 9.35%)", "$2,391,870 USD (Total certified direct Egyptian exports across both chapters)"],
      ],
    },
    {
      id: "tbl-bh-product-opportunities",
      titleAr: "تحليل دقيق للفرص التصديرية في بنود المنتجات (HS 6109.10 وHS 6210.50)",
      titleEn: "Product-Level Demanded Opportunities Analysis (HS 6109.10 & HS 6210.50)",
      descriptionAr: "البيانات الموثقة لبند التيشيرتات القطنية وتطور صادرات مصر، والحصة المصرية الساحقة (51.3%) في بند الملابس النسائية الخاصة.",
      descriptionEn: "Documented trade metrics for cotton t-shirts and Egypt's dominant 51.34% market share in special women's garments.",
      headersAr: ["رمز البند (HS-6)", "اسم المنتج ووصفه الجمركي", "واردات البحرين الإجمالية (دولار)", "صادرات مصر الموثقة (دولار)", "الكمية المسجلة لمصر", "حصة مصر ومؤشر النمو والتفوق"],
      headersEn: ["HS-6 Code", "Product Description", "Total Bahrain Imports (USD)", "Documented Egypt Exports (USD)", "Recorded Egypt Quantity", "Egypt Share & Growth Indicator"],
      rowsAr: [
        ["HS 6109.10 (2023)", "تيشيرتات وفانلات داخلية محبوكة من قطن 100%", "26,448,830", "175,950", "27,025 قطعة", "متوسط سعر استيرادي للقطعة المصرية: 6.51 دولار"],
        ["HS 6109.10 (2024)", "تيشيرتات وفانلات داخلية محبوكة من قطن 100%", "27,308,760", "195,400", "40,897 قطعة", "نمو القيمة بنسبة +11.05% وقفزة هائلة في عدد القطع بنسبة +51.33%!"],
        ["HS 6210.50 (2023)", "ألبسة نسائية خاصة من أقمشة منسوجة معالجة أو مشربة", "1,013,110", "520,120", "10,481 كجم", "حصة سوقية مصرية ساحقة بلغت 51.34% (الريادة المطلقة للمنتج المصري في البحرين)"],
      ],
      rowsEn: [
        ["HS 6109.10 (2023)", "T-shirts, singlets and vests, knitted cotton", "26,448,830", "175,950", "27,025 pieces", "Average imported unit price for Egyptian piece: $6.51 USD"],
        ["HS 6109.10 (2024)", "T-shirts, singlets and vests, knitted cotton", "27,308,760", "195,400", "40,897 pieces", "Value growth of +11.05% and an outstanding volume surge of +51.33%!"],
        ["HS 6210.50 (2023)", "Women garments, woven treated/coated fabrics", "1,013,110", "520,120", "10,481 kg", "Dominant 51.34% market share (absolute Egyptian leadership in this specialized category)"],
      ],
    },
    {
      id: "tbl-bh-buyers-directory",
      titleAr: "دليل كبار المشترين ومجموعات التجزئة المستهدفة في مملكة البحرين",
      titleEn: "Target Retail Conglomerates & Commercial Buyers Directory — Bahrain",
      descriptionAr: "خريطة دقيقة للكيانات التجارية المشترية مع التمييز بين مشغلي المولات وأصحاب الامتيازات ومستجدات متجر بريمارك البحرين.",
      descriptionEn: "Structured prospect directory distinguishing franchise retailers, mall operators, and Primark Bahrain milestone.",
      headersAr: ["الجهة / المجموعة التجارية", "طبيعة الكيان وشبكة الفروع", "العلامات وقنوات التجزئة التابعة", "الفئات المستهدفة وفرص التوريد", "إمكانية التسجيل والتواصل التجاري"],
      headersEn: ["Commercial Group / Entity", "Nature of Entity & Footprint", "Affiliated Brands & Formats", "Target Product Lines & SBA Fit", "Procurement & Registration Channel"],
      rowsAr: [
        ["مجموعة الشايع (Alshaya Group Bahrain)", "عملاق إدارة الامتيازات العالمية (أكثر من 80 متجرًا بالبحرين)", "افتتاح بريمارك البحرين (Primark) في 23 سبتمبر 2026 بسيتي سنتر البحرين؛ H&M, American Eagle, Aerie, Mothercare, COS, Next", "عقود توريد Private Label وتصنيع تعاقدي لملابس الأطفال والبيسك القطني والملابس الداخلية وسلاسل الموضة السريعة", "إدارة مشتريات الأزياء المركزية ومكتب البحرين / بوابة الموردين: alshaya.com"],
        ["مجموعة لاندمارك عُمان / البحرين (Landmark)", "تكتل تجزئة إقليمي رائد (Oasis Mall الجفير، Oasis Mall الرفاع، مارينا مول)", "Centrepoint (Babyshop, Splash, Shoe Mart, Lifestyle), Max Fashion", "توريد ملابس الأطفال والرضع القطنية المعتمدة، وتيشيرتات وبولو رجالي، وملابس نسائية كاجوال لشبكتي Max وSplash", "إدارة مشتريات الأزياء الإقليمية / دبي والمنامة: landmarkgroup.com"],
        ["مجموعة لولو للتجزئة (LuLu Retail Bahrain)", "أكبر سلسلة هايبرماركت بالمملكة (10+ فروع: الدانة مول، الرملي مول، الجفير، الحد، الزنج، الرفاع)", "LuLu Hypermarkets، علامات خاصة: Cortigiani, John Louis, Marco Donateli", "تيشيرتات قطنية، ملابس داخلية، ملابس نوم، ملابس أطفال يومية للعلامات الخاصة (Private Label)", "مكتب مشتريات المنامة المركزي / بوابة الموردين الرسمية: luluhypermarket.com"],
        ["ماجد الفطيم للمراكز (Majid Al Futtaim)", "مشغل ومطور مراكز تجارية (مالك سيتي سنتر البحرين)", "سيتي سنتر البحرين (المجمع الأكبر بالمملكة الذي يضم بريمارك ودبنهامز وزارا)", "ليس كيان شراء ملابس مباشر؛ يمثل الحاضنة العقارية الكبرى لكبرى بيوت الأزياء والماركات العالمية", "إدارة التأجير التجاري للمراكز: majidalfuttaim.com"],
        ["أباريل جروب البحرين (Apparel Group)", "شركة امتيازات أزياء عالمية (أكثر من 40 متجرًا في مولات البحرين)", "Tommy Hilfiger, Calvin Klein, Aldo, Beverly Hills Polo Club, Aeropostale, R&B, Skechers, Dune London", "عقود تصنيع تعاقدي مرنة للعلامة الخاصة R&B وتوريد خطوط مرخصة للقطنيات والبولو والكاجوال", "مقر المنامة الإقليمي / المكتب المركزي بدبي: apparelgroupglobal.com"],
        ["مجموعة الحواج (Al Hawaj Group)", "أحد أعرق بيوت التجزئة الفاخرة في البحرين (تأسس 1948)", "سلسلة متاجر تجزئة راقية ومتاجر متعددة الأقسام وموزع للماركات الأوروبية", "ملابس نوم قطنية راقية، إكسسوارات أزياء، وكبسولات قطن مصري فاخر للمتاجر المتميزة", "المقر الرئيسي في السلمانية، المنامة: alhawaj.com"],
        ["مجموعة جواد للأعمال (Jawad Business Group)", "تكتل تجاري رائد في التجزئة والامتيازات التجارية", "إدارة متاجر أزياء وتوزيع سلع استهلاكية ومتاجر أزياء عائلية", "عقود توريد كاجوال، ملابس أطفال، ملابس نوم، وتوزيع أزياء للشرائح المتوسطة", "المقر الرئيسي في باربار / المنامة: jawad.com"],
        ["تجار ومستوردو سوق باب البحرين وسوق المنامة", "المركز التاريخي لتجارة الجملة والأقمشة والملابس", "عشرات المؤسسات المستقلة لتجارة الجملة والتوزيع الداخلي وإعادة التصدير للشرقية", "توريد حاويات كاملة بأسعار FOB منافسة من التيشيرتات والجلابيات والبيجامات والقطنيات", "تعامل مباشر بالاعتمادات المستندية والدفع مقابل المستندات (CAD) في المنامة"],
      ],
      rowsEn: [
        ["Alshaya Group Bahrain", "Global franchise retail giant (>80 retail stores in Bahrain)", "Milestone launch of Primark Bahrain (Sept 23, 2026 at City Centre Bahrain); H&M, American Eagle, Aerie, Mothercare, COS, Next", "Private Label contract manufacturing for kids apparel, cotton basics, loungewear, and volume replenishment for fast-fashion brands", "Central Apparel Sourcing Desk / Bahrain Office / Supplier Portal: alshaya.com"],
        ["Landmark Group Bahrain", "Leading regional fashion conglomerate (Oasis Mall Juffair & Riffa, Marina Mall)", "Centrepoint (Babyshop, Splash, Shoe Mart, Lifestyle), Max Fashion", "Direct mass-volume replenishment of cotton basics, tees, and certified babywear for Max & Splash", "Regional Apparel Sourcing Division (Dubai & Manama): landmarkgroup.com"],
        ["LuLu Retail Bahrain", "Premier hypermarket operator (10+ stores: Dana Mall, Ramli Mall, Juffair, Hidd, Zinj, Riffa)", "LuLu Hypermarkets, LOT value formats; Private labels: Cortigiani, John Louis, Marco Donateli", "Cotton tees, polo shirts, underwear, babywear, and family basics under high-volume Private Label contracts", "Manama Central Procurement Office / Official Supplier Portal: luluhypermarket.com"],
        ["Majid Al Futtaim (Properties)", "Premier shopping mall developer & operator (NOT a direct apparel purchasing entity)", "City Centre Bahrain (the Kingdom's premier flagship mall hosting Primark, Debenhams, Zara)", "Crucial commercial platform hosting international fashion anchors, franchise flagships, and licensees", "Commercial Mall Leasing & Operations: majidalfuttaim.com"],
        ["Apparel Group Bahrain", "Global fashion franchise operator (>40 outlets across Bahraini destination malls)", "Proprietary fast-fashion brand R&B; licensed brands: Tommy Hilfiger, BHPC, Aeropostale, Skechers", "Contract manufacturing for proprietary brand R&B; regional replenishment for casual tops and polo shirts", "Bahrain Operations Office / Regional HQ: apparelgroupglobal.com"],
        ["Al Hawaj Group", "Historic luxury retail conglomerate in Bahrain (founded 1948)", "Upscale multi-department boutiques and European brand representations", "Exclusive 100% Egyptian Giza cotton luxury loungewear, sleepwear, and bespoke branded capsules", "Corporate HQ in Salmaniya, Manama: alhawaj.com"],
        ["Jawad Business Group (JBG)", "Prominent retail and franchise conglomerate across Bahrain", "Family fashion retail, consumer goods distribution, and lifestyle outlets", "Volume replenishment of casualwear, kids sets, and nightwear for multi-brand retail concepts", "Corporate HQ in Barbar / Manama: jawad.com"],
        ["Bab Al Bahrain & Manama Souq Wholesalers", "Historic commercial wholesale bazaar for garments and fabrics", "Dozens of independent wholesale trading houses supplying local stores and Saudi Eastern Province", "Full container load (FCL) direct supply of cotton basics, modest thobes, and pyjamas at competitive FOB", "Direct commercial purchasing via Confirmed LC / CAD through Manama banking channels"],
      ],
    },
    {
      id: "tbl-bh-scorecard",
      titleAr: "بطاقة التقييم الاستراتيجي الشامل لسوق مملكة البحرين (مؤشر 86/100)",
      titleEn: "Comprehensive Strategic Opportunity Scorecard — Bahrain (86/100)",
      descriptionAr: "تقييم منهجي موثق عبر 8 معايير استراتيجية مرجحة تحدد جاذبية السوق وجدوى التصدير والتصنيع لمجموعة سامي بن عياد.",
      descriptionEn: "Weighted 8-criteria methodology assessing market demand, commercial viability, and competitive advantage.",
      headersAr: ["المعيار الاستراتيجي للتقييم", "الوزن النسبي (%)", "الدرجة المحققة (من 100)", "الدرجة المرجحة", "المبررات والدلائل التحليلية الموثقة"],
      headersEn: ["Strategic Assessment Criterion", "Weight (%)", "Score (out of 100)", "Weighted Score", "Documented Evidence & Analytical Rationale"],
      rowsAr: [
        ["1. حجم الطلب الفعلي ومعدل نمو السوق", "20%", "80.00", "16.00", "واردات ملابس تبلغ 296.2 مليون دولار، وحصة إنفاق أسري 7.92% على الملابس، واستحواذ الأزياء على 27.31% من مساحات المولات."],
        ["2. درجة الاعتماد على الاستيراد الخارجي", "15%", "96.67", "14.50", "اعتماد كامل على الاستيراد يفوق 98% مع انعدام المصانع الكبرى للملابس وغياب أي رسوم حمائية."],
        ["3. ملاءمة فرص التصنيع للغير (FOB / Private Label)", "20%", "85.00", "17.00", "افتتاح بريمارك البحرين (23 سبتمبر 2026) وتوسع سلاسل اللولو وماكس وR&B في برامج العلامة الخاصة."],
        ["4. القوة الشرائية وهوامش الربحية", "10%", "90.00", "9.00", "دخل فردي مرتفع ($30,597) ودينار بحريني مثبت بقوة ($2.66) وتضخم مستقر (-0.14%) يضمن هوامش ربح مجزية."],
        ["5. سهولة النفاذ التجاري والبنية اللوجستية", "10%", "85.00", "8.50", "ميناء خليفة بن سلمان فائق الكفاءة، سرعة تخليص بنظام 'أفق'، وارتباط بري مباشر بالسعودية عبر جسر الملك فهد."],
        ["6. الاتفاقيات التجارية والإعفاء الجمركي", "10%", "90.00", "9.00", "إعفاء جمركي كامل 0% بموجب GAFTA مقابل 5% تعريفة عامة على الصين والهند وتركيا."],
        ["7. هيكل المنافسة والتفوق المصري الموثق", "10%", "80.00", "8.00", "حصة مصرية كاسحة 51.34% في بند الملابس النسائية الخاصة (621050) ونمو 51.3% في كميات التيشيرتات."],
        ["8. شراكات التوزيع وشبكات التجزئة", "5%", "80.00", "4.00", "سوق منظم ومركزي يضم كبرى المجموعات (الشايع، لاندمارك، اللولو، أباريل، الحواج) وتجار سوق المنامة."],
        ["المجموع الكلي المرجح لبطاقة التقييم", "100%", "86.00 / 100", "86.00", "تصنيف ممتاز: المستوى الأول (Tier 1 – Very High Opportunity) وترتيب ثانٍ (#2) خليجيًا في الجاهزية التصديرية."],
      ],
      rowsEn: [
        ["1. Market Demand & Growth Dynamics", "20%", "80.00", "16.00", "Apparel imports of $296.2M, clothing capturing 7.92% of household spend, and fashion occupying 27.31% of mall retail space."],
        ["2. Import Dependency Level", "15%", "96.67", "14.50", "Extreme import dependency (>98%) with negligible domestic manufacturing and zero protectionist tariffs."],
        ["3. FOB & Private Label Manufacturing Fit", "20%", "85.00", "17.00", "Primark Bahrain launch (Sept 23, 2026) and aggressive private label expansion by LuLu, Max, and R&B chains."],
        ["4. Purchasing Power & Commercial Margins", "10%", "90.00", "9.00", "High GDP per capita ($30,597), strong currency peg ($2.66 USD), and price stability (-0.14% inflation) protecting margins."],
        ["5. Market Access & Logistics Infrastructure", "10%", "85.00", "8.50", "Khalifa Bin Salman Port, rapid electronic clearance via Ofoq, and King Fahd Causeway road link to Saudi Arabia."],
        ["6. Preferential Trade Agreements", "10%", "90.00", "9.00", "0.0% duty under GAFTA providing a direct 5% tariff shield over major competitors from China, India, and Turkey."],
        ["7. Competitive Landscape & Egypt Leadership", "10%", "80.00", "8.00", "Verified 51.34% Egyptian dominance in HS 621050 and a 51.33% volume leap in cotton t-shirt exports."],
        ["8. Distribution Partnerships & Buyer Networks", "5%", "80.00", "4.00", "Highly structured commercial ecosystem spanning Alshaya, Landmark, LuLu, Apparel Group, and Manama traders."],
        ["Total Weighted Scorecard Result", "100%", "86.00 / 100", "86.00", "Classified as Tier 1 (Very High Opportunity), securing the #2 strategic rank in the GCC for export readiness."],
      ],
    },
  ],
  sections: {
    executiveSummary: {
      summaryAr:
        "تُعد مملكة البحرين واحدة من أكثر الأسواق الاستهلاكية ديناميكية ونضجًا في منطقة الخليج العربي؛ حيث تتميز بقاعدة سكانية نشطة بلغت 1,600,366 نسمة وفق بيانات البنك الدولي لعام 2025 (ونحو 1.643 مليون نسمة وفق تقديرات الأمم المتحدة)، وناتج محلي إجمالي يبلغ 48.97 مليار دولار بنصيب فردي مرتفع يصل إلى 30,596.58 دولارًا سنويًا، مدعومًا بمعدل نمو اقتصادي قوي بلغ 3.481%، واستقرار نقدي استثنائي للدينار البحريني المثبت عند 2.6596 دولار ومعدل تضخم مستقر عند -0.138%.\n\nأظهرت البيانات الجمركية الدولية الموثقة لعام 2023 الصادرة عن الأمم المتحدة (UN Comtrade) وقاعدة بيانات البنك الدولي (WITS) وصول إجمالي واردات الملابس الجاهزة (الفصلين 61 و62) إلى 296,172,610 دولارات (نحو 296.17 مليون دولار)، توزعت بين 152,855,610 دولارات للملابس المحبوكة والتريكو (HS 61 بنسبة 51.61%)، و143,317,000 دولار للملابس المنسوجة (HS 62 بنسبة 48.39%). وتتصدر الصين كبار الموردين بحصة 35.18% ($104.20M)، تليها الهند بحصة 15.61% ($46.22M)، وتركيا بحصة 10.31% ($30.55M)، وبنغلاديش بحصة 9.35% ($27.68M)، ثم إيطاليا بحصة 3.33% ($9.85M).\n\nحققت الصادرات المصرية المباشرة إلى البحرين حضورًا استراتيجيًا موثقًا بإجمالي 2,391,870 دولارًا في عام 2023؛ وتجلت القوة التصديرية المصرية في بند الألبسة النسائية الخاصة (HS 6210.50) حيث بلغت الصادرات المصرية 520,120 دولارًا (10,481 كجم) من إجمالي واردات البحرين البالغة 1,013,110 دولارات، لتحقق مصر حصة سوقية كاسحة بلغت 51.34% في هذا البند النوعي. كما سجل بند التيشيرتات القطنية (HS 6109.10) قفزة نوعية في الصادرات المصرية من 175,950 دولارًا (27,025 قطعة) في 2023 إلى 195,400 دولار (40,897 قطعة) في 2024 بنمو كمي تجاوز 51.33%.\n\nتتعزز جاذبية السوق بالافتتاح التاريخي لمتجر بريمارك البحرين (Primark) في 23 سبتمبر 2026 بمجمع سيتي سنتر البحرين عبر مجموعة الشايع، وهو ما يفتح آفاقًا ضخمة للتعاقدات الإقليمية لبرامج التصنيع للغير (Private Label). وبفضل الإعفاء الجمركي الكامل (0%) بموجب اتفاقية GAFTA، وسرعة نظام التخليص الجمركي 'أفق'، والربط اللوجستي البري بالسوق السعودي عبر جسر الملك فهد، حصدت البحرين درجة تقييم استراتيجي بلغت 86/100 (المستوى الأول – Tier 1)، لتحتل الترتيب الثاني خليجيًا في الجاهزية التصديرية لمجموعة سامي بن عياد.",
      summaryEn:
        "The Kingdom of Bahrain represents one of the most mature, dynamic, and affluent consumer fashion markets in the GCC. Driven by an active population base of 1,600,366 residents per World Bank 2025 data (~1.643 million per UN Data), a GDP of $48.97 billion, and an impressive GDP per capita of $30,596.58 USD, the market benefits from rapid real GDP growth of 3.481%, the absolute stability of the Bahraini Dinar ($2.6596 USD), and price stability (-0.138% inflation).\n\nDocumented 2023 customs statistics from UN Comtrade and World Bank WITS reveal total ready-made garment imports (HS Chapters 61 and 62) reaching $296,172,610 USD (~$296.17M), balanced between $152,855,610 in knitted apparel (HS 61, 51.61%) and $143,317,000 in woven garments (HS 62, 48.39%). Global supply is led by China ($104.20M / 35.18%), India ($46.22M / 15.61%), Turkey ($30.55M / 10.31%), Bangladesh ($27.68M / 9.35%), and Italy ($9.85M / 3.33%).\n\nCertified direct Egyptian exports to Bahrain totaled $2,391,870 USD in 2023, showcasing an extraordinary competitive stronghold in specialized women's woven garments (HS 6210.50), where Egyptian shipments reached $520,120 USD (10,481 kg) out of Bahrain's total category imports of $1,013,110 USD—capturing an outstanding 51.34% market share. Furthermore, cotton t-shirts (HS 6109.10) demonstrated dramatic physical momentum, expanding from 27,025 pieces ($175,950) in 2023 to 40,897 pieces ($195,400) in 2024, an impressive +51.33% physical volume leap.\n\nMarket potential is powerfully reinforced by the milestone opening of Primark Bahrain on September 23, 2026 at City Centre Bahrain via Alshaya Group, unlocking massive regional subcontracting possibilities. Supported by 0.0% GAFTA preferential tariffs, ultra-fast electronic customs clearance through the 'Ofoq' single-window, and direct overland trucking connectivity to Saudi Arabia via the King Fahd Causeway, Bahrain achieves an Opportunity Score of 86/100 (Tier 1 rating), ranking #2 in the GCC for SBA Group export readiness.",
      bulletsAr: [
        "إجمالي واردات الملابس الجاهزة (HS 61+62) لعام 2023: 296.17 مليون دولار (المحبوك: 51.61%، المنسوج: 48.39%).",
        "حصة سوقية مصرية كاسحة بلغت 51.34% في بند الألبسة النسائية الخاصة (HS 6210.50) بقيمة 520,120 دولار.",
        "قفزة في حجم صادرات مصر من التيشيرتات القطنية (6109.10) بنسبة +51.33% لتصل إلى 40,897 قطعة في 2024.",
        "الإنفاق على الملابس يمثل 7.92% من ميزانية الأسرة، والأزياء تستحوذ على 27.31% من المساحات التأجيرية بالمولات.",
        "افتتاح بريمارك البحرين (Primark) في 23 سبتمبر 2026 بسيتي سنتر البحرين يدعم فرص عقود الـ Private Label.",
        "مؤشر الجاذبية التصديرية: 86/100 (المستوى الأول – فرصة مرتفعة للغاية والترتيب #2 خليجيًا في الجاهزية التصديرية).",
      ],
      bulletsEn: [
        "Total 2023 finished apparel imports (HS 61+62): $296.17M USD (Knitted: 51.61%, Woven: 48.39%).",
        "Decisive 51.34% Egyptian market share in special women's garments (HS 6210.50) valued at $520,120 USD.",
        "Physical export volume of Egyptian cotton tees (6109.10) surged +51.33% to 40,897 pieces in 2024.",
        "Clothing represents 7.92% of household spend, while fashion captures 27.31% of mall leasable area.",
        "Landmark launch of Primark Bahrain on Sept 23, 2026 at City Centre Bahrain elevates private label demand.",
        "Strategic Opportunity Score: 86/100 (Tier 1 rating, ranked #2 in the GCC for commercial export readiness).",
      ],
    },
    marketDefinition: {
      summaryAr:
        "يحدد نطاق سوق الملابس الجاهزة في مملكة البحرين بكافة السلع تامة الصنع المصنفة جمركيًا تحت الفصل 61 (ألبسة وتوابع ألبسة من مصنرات أو كروشيه / محبوكة) والفصل 62 (ألبسة وتوابع ألبسة من غير المصنرات أو الكروشيه / منسوجة). وبلغ إجمالي الواردات الموثقة رسميًا لهذين الفصلين 296,172,610 دولارات لعام 2023.\n\nتؤكد المنهجية المعتمدة في هذه الدراسة على ضرورة الفصل التام بين واردات الملابس الجاهزة النهائية (296.17 مليون دولار) وبين التجارة النسيجية الأوسع المصنفة تحت الفصول (HS 50 إلى HS 63) والتي تشمل الألياف القطنية والخيوط والأقمشة الخام والمفروشات المنزلية وأغطية الأسرة والأقمشة التقنية.\n\nكما توضح الدراسة التمايز المنهجي الدقيق بين حصة قطاع الأزياء من المساحات التأجيرية بالمجمعات التجارية والبالغة 27.31% (وفق تقرير شركة أعيان العقارية للنصف الأول من 2024) وبين الحصة الفعلية من مبيعات التجزئة أو الإنفاق الاستهلاكي؛ حيث تعكس الأولى المساحة المادية المخصصة لمتاجر الموضة في المولات متفوقة على السوبرماركت (19.66%) والترفيه (16.85%) والمطاعم (13.10%).\n\nوفيما يخص بند الألبسة النسائية الخاصة (HS 6210.50) الذي حققت فيه مصر حصة سوقية بلغت 51.34%، تشدد الدراسة على أن هذا البند يمثل فئة جمركية محددة بدقة للألبسة النسائية المصنوعة من أقمشة معالجة أو مشربة، ولا يجوز تعميمه كإجمالي لكافة صادرات الملابس النسائية المصرية.",
      summaryEn:
        "The market definition for finished apparel in the Kingdom of Bahrain encompasses all commodities under HS Chapter 61 (articles of apparel and clothing accessories, knitted or crocheted) and HS Chapter 62 (articles of apparel and clothing accessories, not knitted or crocheted / woven). Documented imports across both chapters reached $296,172,610 USD in 2023.\n\nOur methodology strictly differentiates finished garment imports ($296.17M USD) from the broader textile trade (HS Chapters 50 through 63), which incorporates raw fibers, yarns, industrial fabrics, home furnishings, and bed linens.\n\nFurthermore, the study rigorously separates fashion's retail leasable space share of 27.31% (per A'AYAN Real Estate H1 2024 report) from actual retail turnover or sales market share. The former highlights physical retail allocation across surveyed malls, where fashion leads grocery (19.66%), entertainment (16.85%), and F&B (13.10%).\n\nRegarding HS 6210.50 (women's garments of treated or coated fabrics), where Egypt secured an outstanding 51.34% market share, the report explicitly recognizes this as a specific, highly successful product line rather than conflating it with aggregate women's apparel exports.",
      bulletsAr: [
        "نطاق الدراسة يغطي كامل بنود الملابس الجاهزة المصنفة تحت الفصلين HS 61 وHS 62 بقيمة 296.17M$.",
        "الفصل المنهجي بين واردات الملابس النهائية والواردات النسيجية الأوسع (HS 50–63).",
        "التمييز بين حصة مساحات الأزياء بالمولات (27.31%) وحصة الإنفاق الاستهلاكي الفعلي للأسرة (7.92%).",
        "تأطير الحصة المصرية البالغة 51.34% في بند HS 6210.50 كنجاح نوعي محدد في فئته الجمركية.",
      ],
      bulletsEn: [
        "Study scope covers all finished garments under HS Chapters 61 and 62 ($296.17M USD).",
        "Methodological separation of finished apparel from broader HS 50–63 textile commodities.",
        "Clear distinction between mall leasable space share (27.31%) and actual household spend (7.92%).",
        "Egypt's 51.34% share in HS 6210.50 recognized as a specialized product triumph without over-generalization.",
      ],
    },
    marketSize: {
      summaryAr:
        "يُقدر الحجم الإجمالي لسوق تجزئة الملابس والأحذية في مملكة البحرين بما يتراوح بين 580 إلى 650 مليون دولار سنويًا (نحو 218 إلى 245 مليون دينار بحريني)، مدعومًا بشبكة تجزئة حديثة ومتطورة، ومعدل إنفاق أسري مرتفع على الأزياء.\n\nوفقًا لتقرير قطاع التجزئة والمستهلك الصادر عن شركة جرانت ثورنتون (Grant Thornton Bahrain) استنادًا لبيانات BMI لعام 2024، يمثل الإنفاق على الملابس والأحذية نحو 7.92% من إجمالي إنفاق الأسرة في البحرين، وهو من أعلى المعدلات في المنطقة، مما يعكس الأولوية العالية للأناقة والمظهر الشخصي لدى المواطنين والمقيمين.\n\nكما كشف تقرير شركة أعيان العقارية (A'AYAN Real Estate) للنصف الأول من 2024 عن استحواذ قطاع الأزياء والموضة على 27.31% من إجمالي المساحات التأجيرية (GLA) في المجمعات التجارية بالبحرين، متصدرًا كافة الأنشطة التجارية؛ يليه قطاع السوبرماركت والتموينات بنسبة 19.66%، وقطاع الترفيه والهوايات بنسبة 16.85%، وقطاع الأغذية والمشروبات بنسبة 13.10%.\n\nوتتركز القوة الشرائية في محافظة العاصمة (المنامة) ومحافظة المحرق والمحافظة الشمالية؛ حيث تستقطب المراكز الكبرى (سيتي سنتر البحرين، مجمع الأفنيوز البحرين، مجمع السيف، ومراسي جاليريا) أكثر من 60% من مبيعات التجزئة للأزياء، إلى جانب تدفق مئات الآلاف من الزوار السعوديين أسبوعيًا عبر جسر الملك فهد للتسوق والترفيه.",
      summaryEn:
        "The overall retail apparel and footwear market in the Kingdom of Bahrain is estimated at $580 to $650 million USD annually (~BHD 218 to 245 million), supported by an advanced commercial retail infrastructure and high household fashion spending.\n\nAccording to the Grant Thornton Bahrain Consumer and Retail Industry Report (drawing on BMI 2024 data), clothing and footwear account for 7.92% of total household expenditure in Bahrain, among the highest allocations in the region, underscoring fashion as a central consumer priority.\n\nFurthermore, A'AYAN Real Estate's H1 2024 retail study demonstrates that fashion and apparel command 27.31% of total gross leasable area (GLA) across surveyed Bahraini destination malls, leading all commercial tenant categories. Supermarkets follow at 19.66%, entertainment and hobbies at 16.85%, and food & beverage at 13.10%.\n\nRetail purchasing power is heavily concentrated across Capital (Manama), Muharraq, and Northern Governorates. Prime destinations (City Centre Bahrain, The Avenues Bahrain, Seef Mall, and Marassi Galleria) capture >60% of retail fashion sales, significantly bolstered by weekly inflows of hundreds of thousands of Saudi weekend shoppers crossing the King Fahd Causeway.",
      bulletsAr: [
        "حجم سوق تجزئة الملابس في البحرين: 580–650 مليون دولار سنويًا (218–245 مليون دينار بحريني).",
        "الملابس والأحذية تستحوذ على 7.92% من إجمالي إنفاق الأسرة في البحرين (تقرير Grant Thornton 2024).",
        "الأزياء تشغل 27.31% من المساحات التأجيرية بالمولات وتتصدر الأنشطة التجارية (تقرير A'AYAN 2024).",
        "تدفق تسوق أسبوعي مكثف من المنطقة الشرقية السعودية عبر جسر الملك فهد يرفع مبيعات التجزئة.",
      ],
      bulletsEn: [
        "Total retail apparel market size: $580–$650M USD annually (BHD 218–245 million).",
        "Clothing & footwear capture 7.92% of total household spending (Grant Thornton / BMI 2024).",
        "Fashion occupies 27.31% of mall leasable area, leading all retail categories (A'AYAN H1 2024).",
        "Substantial weekend shopping influx from Saudi Eastern Province via King Fahd Causeway.",
      ],
    },
    actualDemand: {
      summaryAr:
        "يتميز الطلب الفعلي في مملكة البحرين بتركيبة استهلاكية قوامها 1.600 مليون نسمة (WB) إلى 1.643 مليون نسمة (UN)، تنقسم إلى شريحتين رئيسيتين:\n1. شريحة المواطنين البحرينيين (حوالي 47% من السكان): تتمتع بمستوى دخل مرتفع وتفضيل للقطنيات الفاخرة، والأزياء النسائية الراقية والمطرزة، وملابس الأطفال المتميزة، والملابس المنزلية وأطقم النوم القطنية 100%.\n2. شريحة المقيمين متعددي الجنسيات (حوالي 53% من السكان): تتنوع بين كوادر إدارية غربية وعربية تبحث عن العلامات العالمية، وقوة عمل آسيوية تدعم استهلاك الملابس الكاجوال والأساسيات الاقتصادية.\n\nتخضع دورات الشراء لمواسم ذروة استهلاكية حاسمة:\n- موسم شهر رمضان وعيدي الفطر والأضحى: يستأثر بـ 40% من مبيعات التجزئة السنوية للملابس النسائية المحتشمة وملابس الأطفال والجلابيات.\n- موسم العودة للمدارس (أغسطس – سبتمبر): مبيعات قياسية للزي المدرسي الموحد والقمصان والتيشيرتات البيضاء والجوارب.\n- عطلات نهاية الأسبوع ومواسم التسوق السعودية: تدفق مستمر للزوار السعوديين عبر جسر الملك فهد ينعش مبيعات المجمعات ومتاجر الأزياء السريعة والفاخرة.",
      summaryEn:
        "Actual apparel demand in Bahrain is driven by a population base of 1.600M (World Bank) to 1.643M (UN Data), segmented into two core demographics:\n1. Bahraini Citizens (~47% of population): Enjoy high disposable income and exhibit a strong preference for 100% natural Egyptian cotton garments, luxury embroidered modestwear, high-end children's wear, and premium loungewear.\n2. Multinational Expatriates (~53% of population): Spanning Western/Arab white-collar professionals demanding international fashion lines, and Asian skilled workers driving high-volume demand for budget casuals and workwear.\n\nRetail demand is shaped by powerful seasonal peaks:\n- Ramadan and Eid al-Fitr / Eid al-Adha: Driving ~40% of annual turnover in women's modest fashion, children's festive wear, and home pyjamas.\n- Back-to-School Season (August–September): Peak demand for school uniforms, plain white tees, polo shirts, and socks.\n- Saudi Weekend Shopping Influx: Steady year-round weekend travel via the King Fahd Causeway significantly boosts retail velocity across destination shopping malls.",
      bulletsAr: [
        "سكان 1.60M نسمة: 47% مواطنون ذوو إنفاق مرتفع على القطنيات الفاخرة، و53% مقيمون يدعمون مبيعات الكاجوال.",
        "موسم رمضان والأعياد يستحوذ على 40% من مبيعات التجزئة السنوية لملابس الأسرة والأطفال.",
        "رافد تسوق إقليمي ضخم من زوار المنطقة الشرقية السعودية عبر جسر الملك فهد.",
        "طلب مرتفع على القطن المصري 100% في ملابس النوم والأطفال والأزياء النسائية المحتشمة.",
      ],
      bulletsEn: [
        "1.60M population: 47% citizens with high luxury cotton spend; 53% expats driving volume casuals.",
        "Ramadan and Eids generate ~40% of annual retail fashion turnover across family and kids categories.",
        "Substantial cross-border shopping stimulus from Saudi Eastern Province via the Causeway.",
        "Strong brand equity for 100% Egyptian cotton in sleepwear, babywear, and modest women's apparel.",
      ],
    },
    importsExports: {
      summaryAr:
        "بلغ إجمالي واردات الملابس الجاهزة (HS 61+62) بمملكة البحرين 296,172,610 دولارات لعام 2023 وفق قاعدة بيانات UN Comtrade والبنك الدولي (WITS)، توزعت بين 152,855,610 دولارات للملابس المحبوكة (HS 61 بنسبة 51.61%) و143,317,000 دولار للملابس المنسوجة (HS 62 بنسبة 48.39%).\n\nتوزيع كبار الموردين للملابس الجاهزة:\n1. الصين: 104,198,000 دولار (حصة 35.18%) — [HS 61: $52.663M | HS 62: $51.535M] مسيطرة على الملابس السريعة والاقتصادية.\n2. الهند: 46,222,000 دولار (حصة 15.61%) — [HS 61: $25.516M | HS 62: $20.706M] للملابس القطنية والقمصان.\n3. تركيا: 30,546,000 دولار (حصة 10.31%) — [HS 61: $16.063M | HS 62: $14.483M] في الأزياء النسائية والبدل والفساتين.\n4. بنغلاديش: 27,684,000 دولار (حصة 9.35%) — [HS 61: $16.625M | HS 62: $11.059M] في التيشيرتات والجينز الاقتصادي.\n5. إيطاليا: 9,852,000 دولار في الملابس المنسوجة الفاخرة.\n6. المغرب: 7,416,000 دولار — [HS 61: $5.146M | HS 62: $2.270M].\n7. فيتنام: 5,477,000 دولار (في المحبوك).\n8. باكستان: 4,037,000 دولار (في المنسوج).\n9. مصر: 2,391,870 دولارًا موثقة رسميًا — [HS 61: $1,019,420 | HS 62: $1,372,450].\n\nأما صادرات البحرين من الملابس الجاهزة فبلغت نحو 18 مليون دولار، يمثل الجزء الأكبر منها إعادة تصدير إقليمي للمملكة العربية السعودية عبر جسر الملك فهد.",
      summaryEn:
        "Per 2023 UN Comtrade and World Bank WITS statistics, Bahrain's total ready-made garment imports reached $296,172,610 USD (Knitted HS 61: $152.86M / 51.61%; Woven HS 62: $143.32M / 48.39%).\n\nSupplier Country Breakdown:\n1. China: $104,198,000 USD (35.18% combined share) — [HS 61: $52.663M | HS 62: $51.535M].\n2. India: $46,222,000 USD (15.61%) — [HS 61: $25.516M | HS 62: $20.706M].\n3. Turkey: $30,546,000 USD (10.31%) — [HS 61: $16.063M | HS 62: $14.483M].\n4. Bangladesh: $27,684,000 USD (9.35%) — [HS 61: $16.625M | HS 62: $11.059M].\n5. Italy: $9,852,000 USD in HS 62 luxury woven apparel.\n6. Morocco: $7,416,000 USD — [HS 61: $5.146M | HS 62: $2.270M].\n7. Vietnam: $5,477,000 USD in knitted athletic wear.\n8. Pakistan: $4,037,000 USD in woven cotton bottoms.\n9. Egypt: $2,391,870 USD certified total direct imports — [HS 61: $1,019,420 | HS 62: $1,372,450].\n\nBahrain's apparel exports totaled ~$18M USD, primarily consisting of cross-border re-exports to Saudi Arabia via the King Fahd Causeway.",
      bulletsAr: [
        "إجمالي الواردات: 296.17 مليون دولار (المحبوك: 152.86M$، المنسوج: 143.32M$).",
        "الصين تتصدر بحصة 35.18% ($104.20M)، تليها الهند (15.61%)، وتركيا (10.31%)، وبنغلاديش (9.35%).",
        "صادرات مصر الموثقة رسميًا بلغت 2,391,870 دولارًا (المحبوك: 1.02M$، المنسوج: 1.37M$).",
        "المغرب وفيتنام وباكستان يسجلون حضورًا نشطًا في بنود نوعية محددة.",
      ],
      bulletsEn: [
        "Total imports: $296.17M USD (Knitted: $152.86M, Woven: $143.32M).",
        "China leads at 35.18% ($104.20M), followed by India (15.61%), Turkey (10.31%), and Bangladesh (9.35%).",
        "Official direct Egyptian exports certified at $2,391,870 USD (Knitted: $1.02M, Woven: $1.37M).",
        "Active presence from Morocco, Vietnam, and Pakistan across targeted categories.",
      ],
    },
    demandedProductsAnalysis: {
      summaryAr:
        "كشفت البيانات الجمركية التفصيلية عن مسارين رئيسيين للفرص التصديرية المصرية في مملكة البحرين:\n\n1. الريادة المصرية الساحقة في بند الألبسة النسائية الخاصة (HS 6210.50):\nسجلت البحرين استيراد ما قيمته 1,013,110 دولارات في عام 2023؛ وبلغت صادرات مصر الموثقة في هذا البند 520,120 دولارًا (10,481 كجم)، لتحقق مصر حصة سوقية قياسية بلغت 51.34% من إجمالي واردات المملكة. وتؤكد الدراسة أن هذه الريادة تعكس ميزة تنافسية نوعية للملابس النسائية المعالجة والمصنعة في مصر يجب البناء عليها وتوسيعها نحو فئات الفساتين والملابس المحتشمة الأخرى.\n\n2. القفزة النوعية في صادرات التيشيرتات القطنية (HS 6109.10):\n- عام 2023: بلغت واردات البحرين الإجمالية 26,448,830 دولارًا (4,062,330 قطعة)، وسجلت مصر صادرات موثقة بقيمة 175,950 دولارًا (27,025 قطعة بمتوسط 6.51 دولار/قطعة).\n- عام 2024: ارتفعت واردات البحرين الإجمالية إلى 27,308,760 دولارًا (5,575,080 قطعة)، وارتفعت صادرات مصر إلى 195,400 دولار (40,897 قطعة).\n- معدل نمو الصادرات المصرية: نمو القيمة بنسبة +11.05%، وقفزة في عدد القطع المصدرة بنسبة +51.33%، مما يؤكد الإقبال المتسارع على خامات القطن المصري في البحرين.\n- كبار موردي التيشيرتات للبحرين لعام 2024: الهند (8.72M$)، بنغلاديش (4.46M$)، الصين (4.30M$)، تركيا (2.42M$)، وإيطاليا (1.55M$).",
      summaryEn:
        "Detailed customs statistics identify two decisive product-level growth corridors for Egyptian apparel in Bahrain:\n\n1. Decisive Egyptian Market Leadership in Special Women's Garments (HS 6210.50):\nBahrain's total category imports stood at $1,013,110 USD in 2023. Certified Egyptian exports reached $520,120 USD (10,481 kg), securing an extraordinary 51.34% market share. This dominant footprint demonstrates exceptional commercial trust and established retail demand for Egyptian processed and woven women's wear, providing a solid launchpad to penetrate adjacent modestwear and dress segments.\n\n2. Outstanding Volume Surge in Cotton T-Shirts (HS 6109.10):\n- 2023 Baseline: Total Bahrain imports stood at $26,448,830 USD (4,062,330 units); Egyptian shipments reached $175,950 USD (27,025 units at $6.51/unit).\n- 2024 Performance: Total Bahrain imports expanded to $27,308,760 USD (5,575,080 units); Egyptian shipments rose to $195,400 USD (40,897 units).\n- Egyptian Growth Metrics: +11.05% value expansion accompanied by a remarkable +51.33% leap in physical garment volume, proving robust retail adoption.\n- Leading 2024 Suppliers for HS 6109.10: India ($8.72M), Bangladesh ($4.46M), China ($4.30M), Turkey ($2.42M), and Italy ($1.55M).",
      bulletsAr: [
        "مصر تستحوذ على 51.34% من واردات البحرين في بند الألبسة النسائية الخاصة (HS 6210.50) بقيمة 520,120$.",
        "صادرات التيشيرتات المصرية (6109.10) قفزت كميًا بنسبة +51.33% لتصل إلى 40,897 قطعة في 2024.",
        "الهند وبنغلاديش والصين تتصدر توريد التيشيرتات للبحرين بقيمة إجمالية تتجاوز 17.4 مليون دولار.",
        "فرصة واضحة لمجموعة سامي بن عياد لمضاعفة صادرات التيشيرتات القطنية مستفيدة من وفر الـ 5% الجمركي.",
      ],
      bulletsEn: [
        "Egypt commands 51.34% of Bahrain's imports in special women's garments (HS 6210.50) at $520,120 USD.",
        "Egyptian cotton tee exports (6109.10) surged +51.33% in volume to reach 40,897 pieces in 2024.",
        "India, Bangladesh, and China dominate volume t-shirt supply with combined sales exceeding $17.4M USD.",
        "Clear opportunity for SBA Group to scale volume cotton tee programs leveraging the 5% GAFTA tariff advantage.",
      ],
    },
    localSupplyProduction: {
      summaryAr:
        "يغطي الإنتاج المحلي في مملكة البحرين أقل من 2% من حاجة السوق المحلية للملابس الجاهزة؛ حيث ينحصر النشاط في ورش الخياطة الرجالية المستقلة لتفصيل الثياب والزي التقليدي في المنامة والمحرق والرفاع، ومشاغل العباءات النسائية التراثية، وبعض ورش الزي الموحد وسترات العمل الخفيفة في منطقة سترة الصناعية ومنطقة الحد.\n\nتعتمد المملكة بنسبة تفوق 98% على الاستيراد الخارجي لتوفير كافة احتياجات المستهلكين من الملابس المحبوكة والمنسوجة والكاجوال والملابس القطنية وملابس الأطفال. وتخلو السياسة التجارية البحرينية تمامًا من أي رسوم حمائية أو قيود استيرادية كمية، ما يجعل السوق البحريني بيئة مفتوحة وتنافسية ترحب بالمنتجات المصرية المعفية من الجمارك.",
      summaryEn:
        "Domestic garment manufacturing in the Kingdom of Bahrain accounts for less than 2% of total retail demand. Output is concentrated almost entirely in independent custom tailoring shops producing traditional men's thobes across Manama, Muharraq, and Riffa, boutique abaya ateliers, and small uniform sewing workshops in Sitra and Hidd industrial areas.\n\nBahrain relies on imports for >98% of its apparel needs, spanning knitted casuals, cotton basics, formal shirting, and childrenswear. The commercial regulatory environment imposes zero protectionist tariffs or restrictive import quotas, ensuring an open and highly receptive market for duty-free Egyptian apparel.",
      bulletsAr: [
        "الإنتاج المحلي يغطي أقل من 2% من السوق وينحصر في تفصيل الثياب والعباءات التراثية.",
        "اعتماد كامل بنسبة 98%+ على الاستيراد في كافة فئات الملابس الجاهزة والقطنيات.",
        "غياب تام لأي رسوم حمائية أو قيود كمية على استيراد الملابس الجاهزة.",
        "بيئة تجارية حرة تشجع الموردين المباشرين ذوي المزايا السعرية والجودة العالية.",
      ],
      bulletsEn: [
        "Domestic manufacturing supplies <2% of market, limited to bespoke traditional tailoring.",
        "Complete import reliance (>98%) across all finished garment categories and cotton basics.",
        "Zero protectionist trade barriers, import quotas, or discriminatory domestic tariffs.",
        "Liberalized commercial environment rewarding direct manufacturers offering quality and price advantages.",
      ],
    },
    competitionSaturation: {
      summaryAr:
        "يتسم هيكل المنافسة في سوق الملابس البحريني بوجود ثلاث كتل توريدية متمايزة:\n1. الكتلة الصينية والآسيوية (الصين، الهند، بنغلاديش): تسيطر على 60.14% من إجمالي واردات الملابس الجاهزة بقيمة تتجاوز 178 مليون دولار؛ وتتركز المنافسة في فئات التيشيرتات والملابس الاقتصادية وسلاسل الهايبرماركت، مع تميز بنغلاديش بالأسعار الرخيصة والهند بالقطنيات التقليدية.\n2. الكتلة التركية والأوروبية (تركيا، إيطاليا): تستحوذ على أكثر من 13.6% من الواردات بقيمة تتجاوز 40 مليون دولار؛ وتسيطر على متاجر الأزياء النسائية المحتشمة والبدل الرسمية والفساتين ذات الأسعار المرتفعة.\n3. التوريد العربي التنافسي (المغرب ومصر): يسجل المغرب 7.42 مليون دولار في فئات نسائية ومحبوكة، بينما تسجل مصر 2.39 مليون دولار مع انفرادها بريادة بند الملابس النسائية الخاصة (HS 6210.50) بحصة 51.34%.\n\nتتمثل الميزة التنافسية لمجموعة سامي بن عياد في الجمع بين جودة وسمعة القطن المصري فائق الجودة، والإعفاء الجمركي الكامل 0% بموجب GAFTA مقابل 5% تعريفة عامة على الصين والهند وتركيا، وسرعة الشحن البحري لميناء خليفة بن سلمان (11–15 يومًا)، مما يتيح تقديم أسعار FOB تعاقدية تقل بنسبة 10% إلى 15% عن الموردين الأتراك والآسيويين.",
      summaryEn:
        "The competitive landscape in Bahrain's apparel sector is structured across three distinct supplier blocs:\n1. The Asian Volume Bloc (China, India, Bangladesh): Controls 60.14% of total imports (>$178M USD); dominating basic tees, denim, and budget retail across hypermarkets. Bangladesh competes aggressively on price, while India leverages established mercantile networks.\n2. The Turkish & European Fashion Bloc (Turkey, Italy): Commands >13.6% of imports (>$40M USD); leading mid-to-high modestwear, formal shirting, and luxury tailored suits at premium price points.\n3. The Arab Preferential Sourcing Bloc (Morocco and Egypt): Morocco supplies $7.42M USD in selected knits and women's wear, while Egypt provides $2.39M USD, crowned by its absolute 51.34% market share in special women's garments (HS 6210.50).\n\nSBA Group's decisive competitive advantage combines authentic Egyptian cotton prestige, 0.0% GAFTA preferential tariffs (vs 5% GCC tariff on Asian and Turkish competitors), and rapid maritime delivery to Khalifa Bin Salman Port (11-15 days), unlocking landed pricing 10% to 15% below competing imports.",
      bulletsAr: [
        "الصين والهند وبنغلاديش تسيطر على 60.1% من الواردات وتتحمل تعريفة جمركية 5%.",
        "تركيا تستحوذ على 10.3% ($30.5M) في الأزياء النسائية المحتشمة بأسعار تصديرية مرتفعة.",
        "مصر تمتلك حصة رائدة 51.34% في بند HS 621050 تؤكد ثقة المستهلك البحريني في جودتها.",
        "الميزة المصرية: إعفاء جمركي 0%، جودة القطن المصري، وزمن شحن بحري 11–15 يومًا.",
      ],
      bulletsEn: [
        "China, India, and Bangladesh command 60.1% of imports, subject to standard 5% GCC duties.",
        "Turkey captures 10.3% ($30.5M) in modestwear and tailored apparel at premium FOB pricing.",
        "Egypt's 51.34% dominance in HS 621050 validates established consumer trust in Egyptian apparel quality.",
        "Egyptian edge: 0% GAFTA duty shield, premium cotton equity, and 11–15 day ocean transit.",
      ],
    },
    potentialBuyers: {
      summaryAr:
        "حددت الدراسة خريطة دقيقة لكبار المشترين ومجموعات التجزئة في مملكة البحرين، مع التمييز بين مشغلي المولات والكيانات المشترية:\n\n1. مجموعة الشايع (Alshaya Group Bahrain):\n- الحجم: تدير أكثر من 80 متجرًا في كبرى مجمعات البحرين.\n- الحدث الأبرز: افتتاح متجر بريمارك البحرين (Primark) في 23 سبتمبر 2026 بسيتي سنتر البحرين، والذي يمثل علامة فارقة في قطاع التجزئة الإقليمي.\n- العلامات التابعة: H&M, American Eagle, Aerie, Mothercare, COS, Next, Foot Locker.\n- فرصة الشراكة: عقود Private Label وتصنيع تعاقدي لملابس الأطفال والبيسك القطني والملابس الداخلية.\n- قناة التواصل: إدارة مشتريات الأزياء / بوابة الموردين عبر alshaya.com.\n\n2. مجموعة لاندمارك البحرين (Landmark Group):\n- الحجم: تدير فروع Centrepoint (Babyshop, Splash, Shoe Mart, Lifestyle) ومتاجر Max Fashion المستقلة في الواحة مول بالجفير والرفاع ومارينا مول.\n- فرصة الشراكة: توريد تعاقدي ضخم لملابس الأطفال والقطنيات لسلسلتي Max وSplash.\n- قناة التواصل: إدارة مشتريات الأزياء الإقليمية عبر landmarkgroup.com.\n\n3. مجموعة لولو للتجزئة (LuLu Retail Bahrain):\n- الحجم: 10 هايبرماركت في الدانة مول، الرملي مول، الجفير، الحد، الزنج، والرفاع.\n- العلامات الخاصة: Cortigiani, John Louis, Marco Donateli.\n- فرصة الشراكة: تصنيع Private Label للتيشيرتات والملابس الداخلية وملابس النوم والبيسك.\n- قناة التواصل: مكتب مشتريات المنامة المركزي / luluhypermarket.com.\n\n4. أباريل جروب البحرين (Apparel Group):\n- الحجم: أكثر من 40 متجرًا في سيتي سنتر البحرين والأفنيوز ومجمع السيف.\n- العلامات: R&B (العلامة الخاصة للأزياء السريعة)، Tommy Hilfiger, Beverly Hills Polo Club, Aeropostale, Skechers.\n- فرصة الشراكة: تصنيع تعاقدي مرن لخطوط R&B وتوريد الكاجوال والبولو القطني.\n\n5. مجموعة الحواج (Al Hawaj Group):\n- الكيان: بيت تجزئة بحريني فاخر تأسس عام 1948؛ فرصة لتوريد كبسولات قطن مصري فاخر وملابس نوم راقية.\n\n6. مجموعة جواد للأعمال (Jawad Business Group):\n- الكيان: تكتل تجاري رائد في التجزئة وتوزيع الأزياء العائلية وملابس الأطفال.\n\n7. تجار الجملة في سوق باب البحرين وسوق المنامة:\n- الحجم: عشرات الشركات المستقلة لتجارة الجملة؛ فرصة لتوريد حاويات كاملة بأسعار FOB مباشرة.",
      summaryEn:
        "The study outlines a verified prospect directory of leading commercial buyers in Bahrain, distinguishing retail purchasing entities from mall operators:\n\n1. Alshaya Group Bahrain:\n- Footprint: >80 retail stores across premier Bahraini malls.\n- Defining Milestone: Launch of Primark Bahrain on September 23, 2026 at City Centre Bahrain, marking a major regional fashion milestone.\n- Portfolio: H&M, American Eagle, Aerie, Mothercare, COS, Next, Foot Locker.\n- SBA Fit: High-volume Private Label contracts for kids apparel, cotton basics, and loungewear.\n- Contact: Central Apparel Sourcing Desk / Supplier Portal: alshaya.com.\n\n2. Landmark Group Bahrain:\n- Footprint: Standalone Max Fashion and Centrepoint anchors (Babyshop, Splash, Shoe Mart, Lifestyle) at Oasis Mall Juffair, Oasis Mall Riffa, and Marina Mall.\n- SBA Fit: Direct replenishment of cotton basics, kids apparel, and casual bottoms for Max and Splash.\n- Contact: Regional Sourcing Division: landmarkgroup.com.\n\n3. LuLu Retail Bahrain:\n- Footprint: 10 hypermarkets across Dana Mall, Ramli Mall, Juffair, Hidd, Zinj, and Riffa.\n- Proprietary Brands: Cortigiani, John Louis, Marco Donateli.\n- SBA Fit: Private Label contract manufacturing in cotton tees, polo shirts, underwear, and kids basics.\n- Contact: Manama Central Procurement Desk: luluhypermarket.com.\n\n4. Apparel Group Bahrain:\n- Footprint: >40 stores across City Centre Bahrain, The Avenues, and Seef Mall.\n- Brands: Proprietary fast-fashion brand R&B, alongside licensed franchise stores (Tommy Hilfiger, BHPC, Aeropostale).\n- SBA Fit: Agile contract manufacturing for R&B private label and regional casual replenishment.\n- Contact: Bahrain Operations Office: apparelgroupglobal.com.\n\n5. Al Hawaj Group:\n- Profile: Premier luxury Bahraini retailer (founded 1948) operating multi-department luxury stores.\n- SBA Fit: Exclusive 100% Egyptian Giza cotton luxury loungewear, sleepwear, and branded boutique capsules.\n\n6. Jawad Business Group (JBG):\n- Profile: Prominent commercial conglomerate managing family fashion retail and consumer goods.\n- SBA Fit: Volume replenishment of casualwear, kids sets, and nightwear.\n\n7. Bab Al Bahrain & Manama Souq Commercial Wholesalers:\n- Profile: Established wholesale merchant network supplying local shops and cross-border trade to Saudi Arabia.\n- SBA Fit: Full container load (FCL) supply of cotton basics, pyjamas, and modestwear under FOB terms.",
      bulletsAr: [
        "الشايع يدير متجر بريمارك البحرين (23 سبتمبر 2026) ويمثل فرصة تاريخية لعقود التصنيع للغير.",
        "لاندمارك (ماكس وسبلاش وبيبي شوب) يبحث عن مصانع معتمدة للملابس القطنية والبيسك.",
        "اللولو (10 هايبرماركت) يمثل المستهدف الأول لبرامج العلامة الخاصة (Cortigiani, John Louis).",
        "تجار الجملة بسوق المنامة يستوردون حاويات كاملة بأسعار FOB لتوزيعها بالبحرين والسعودية.",
      ],
      bulletsEn: [
        "Alshaya operates Primark Bahrain (Sept 23, 2026), presenting historic private label manufacturing potential.",
        "Landmark (Max, Splash, Babyshop) actively procures certified volume cotton basics.",
        "LuLu (10 hypermarkets) represents the primary target for private label volume (Cortigiani, John Louis).",
        "Manama Souq wholesalers import full container loads (FCL) for Bahrain and cross-border Saudi distribution.",
      ],
    },
    salesDistributionChannels: {
      summaryAr:
        "تتوزع قنوات بيع الملابس في مملكة البحرين عبر أربعة مسارات تجارية رئيسية:\n\n1. مجمعات التسوق الكبرى والوجهات التجارية (Destination Malls):\nتستحوذ على أكثر من 55% من مبيعات التجزئة للأزياء؛ تتصدرها مراكز سيتي سنتر البحرين (المملوك لماجد الفطيم ويضم بريمارك ودبنهامز وزارا)، والأفنيوز البحرين على الواجهة البحرية بالمنامة، ومجمع السيف، ومراسي جاليريا بديار المحرق. وتتميز هذه المراكز باستقطابها للعلامات العالمية والزوار الخليجيين.\n\n2. سلاسل الهايبرماركت ومتاجر التخفيضات (Hypermarkets & Value Retail):\nتستحوذ على 25% من مبيعات الملابس الجاهزة، وتقودها مجموعة لولو (10 فروع) وسلاسل كارفور والأنصار جاليري؛ وتعتبر المنفذ الأكبر للقطنيات والملابس الداخلية وملابس الأطفال اليومية.\n\n3. الأسواق التقليدية وتجارة الجملة (Traditional Souqs & Wholesale):\nتستحوذ على 10% من السوق وتتركز في سوق باب البحرين وسوق المنامة القديم وسوق المحرق؛ وتلعب دور الموزع للمتاجر المستقلة وإعادة التصدير البري للشرقية السعودية.\n\n4. التجارة الإلكترونية ومنصات الأزياء (Digital Channels):\nتستحوذ على 10% من المبيعات بقيمة تتجاوز 45 مليون دولار، مدفوعة بانتشار تطبيقات التوصيل المحلي والمنصات الإقليمية.",
      summaryEn:
        "Apparel distribution in Bahrain operates across four primary commercial channels:\n\n1. Destination Shopping Malls:\nCommanding >55% of retail apparel turnover, led by City Centre Bahrain (hosting Primark, Debenhams, Zara), The Avenues Bahrain, Seef Mall, and Marassi Galleria. These hubs attract local residents and heavy weekend tourist shopping.\n\n2. Hypermarkets & Value Formats:\nAccounting for ~25% of garment sales, dominated by LuLu Retail (10 stores) and Carrefour. This channel serves as the primary artery for high-volume cotton basics, underwear, and children's dailywear.\n\n3. Traditional Souqs & Wholesale Hubs:\nRepresenting ~10% of the market, centered in Bab Al Bahrain, Manama Souq, and Muharraq Souq. Merchants supply neighborhood stores and engage in cross-border re-exports to Saudi Arabia.\n\n4. Digital & E-Commerce Platforms:\nCapturing ~10% of retail sales (> $45M USD), growing rapidly via brand applications, quick commerce logistics, and regional e-tailers.",
      bulletsAr: [
        "المجمعات الكبرى (سيتي سنتر البحرين، الأفنيوز، السيف، مراسي) تستحوذ على 55%+ من مبيعات التجزئة.",
        "سلاسل الهايبرماركت (اللولو 10 فروع) تستحوذ على 25% وتعد المنفذ الأكبر للقطنيات والبيسك.",
        "تجارة الجملة في سوق المنامة وباب البحرين تمثل 10% وتغذي حركة إعادة التصدير للسعودية.",
        "التجارة الإلكترونية للأزياء تتجاوز 45 مليون دولار سنويًا بنمو رقمي سريع.",
      ],
      bulletsEn: [
        "Destination malls command >55% of retail fashion sales.",
        "Hypermarket chains (LuLu 10 stores) capture 25%, serving as the volume channel for basics.",
        "Traditional Manama and Bab Al Bahrain wholesale merchants represent 10%, serving cross-border trade.",
        "E-commerce captures >$45M USD, posting steady double-digit digital expansion.",
      ],
    },
    marketEntryStrategy: {
      summaryAr:
        "توصي الدراسة بمخطط استراتيجي ثلاثي المحاور لنفاذ مجموعة سامي بن عياد إلى سوق مملكة البحرين:\n\nالمحور الأول: عقود العلامة الخاصة (Private Label) لسلاسل التجزئة الكبرى\nالاستهداف المباشر لمجموعة الشايع لتوريد خطوط الملابس القطنية لعلاماتها التابعة وبحث فرص التوريد لمتجر بريمارك البحرين؛ وتوريد التيشيرتات والملابس الداخلية لسلسلة اللولو هايبرماركت (10 فروع) تحت علاماتها الخاصة (Cortigiani, John Louis)، وملابس الأطفال لسلسلة ماكس فاشن.\n\nالمحور الثاني: التوسع في قطاع الألبسة النسائية والفساتين القطنية والمحتشمة\nالبناء على الحصة السوقية الكاسحة التي حققتها مصر في بند الملابس النسائية الخاصة (HS 6210.50) والبالغة 51.34%، وتوسيع نطاق التوريد ليشمل الفساتين القطنية الكاجوال والعباءات الراقية وأطقم النوم القطنية للمتاجر المتخصصة ومجموعتي الحواج وجواد.\n\nالمحور الثالث: شحن الحاويات الكاملة (FCL) لتجار سوق المنامة وإعادة التصدير للسعودية\nتوفير أسعار FOB مباشرة ومنافسة لشحنات الحاويات الكاملة المتجهة لميناء خليفة بن سلمان، والاستفادة من سرعة التخليص بنظام 'أفق' وقصر المسافة البرية نحو السوق السعودي عبر جسر الملك فهد (25 كم) لتأسيس البحرين كمركز توزيع إقليمي للمجموعة.",
      summaryEn:
        "The study formulates a three-pronged strategic market entry model for SAMI BIN AYYAD GROUP:\n\nPillar 1: High-Volume Private Label Manufacturing for Retail Chains\nDirectly targeting Alshaya Group for basic cotton lines following the landmark Primark Bahrain launch; supplying core cotton tees, underwear, and babywear for LuLu Retail's private labels (Cortigiani, John Louis), alongside volume basics for Landmark's Max Fashion.\n\nPillar 2: Scaling Women's Apparel & Modest Cotton Fashion\nCapitalizing on Egypt's proven 51.34% market dominance in special women's garments (HS 6210.50) to expand into casual cotton dresses, modest abayas, and luxury 100% Egyptian cotton sleepwear for specialty chains and Al Hawaj boutiques.\n\nPillar 3: Containerized Direct Supply & Saudi Gateway Distribution\nDelivering direct containerized FCL ocean shipments to Khalifa Bin Salman Port at direct FOB pricing under 0% GAFTA duty. Utilizing Bahrain's ultra-fast Ofoq customs system and proximity to Saudi Eastern Province via the King Fahd Causeway (25 km) to establish Bahrain as a dual-market fulfillment base.",
      bulletsAr: [
        "المحور 1: تصنيع Private Label للشايع (بريمارك) واللولو (10 فروع) وماكس فاشن في القطنيات والبيسك.",
        "المحور 2: توسيع التفوق المصري في الملابس النسائية (51.3% في 621050) نحو الفساتين والأزياء المحتشمة.",
        "المحور 3: توريد حاويات كاملة FCL لتجار سوق المنامة وتوظيف جسر الملك فهد للنفاذ للشرقية السعودية.",
        "توظيف وفر التعريفة الجمركية 5% بموجب GAFTA لتقديم أسعار لا يمكن لموردي آسيا مضاهاتها.",
      ],
      bulletsEn: [
        "Pillar 1: Private Label manufacturing for Alshaya (Primark), LuLu (10 stores), and Max Fashion.",
        "Pillar 2: Scale Egypt's 51.34% leadership in HS 621050 into casual dresses and modest loungewear.",
        "Pillar 3: Direct FCL ocean container supply to Manama wholesalers, utilizing the Causeway into Saudi Arabia.",
        "Leveraging the 5% GAFTA tariff advantage to achieve unbeatable landed pricing against Asian rivals.",
      ],
    },
    technicalRegulatorySpecs: {
      summaryAr:
        "تخضع واردات الملابس الجاهزة في مملكة البحرين للرقابة الجمركية والتنظيمية من شؤون الجمارك بوزارة الداخلية وإدارة المواصفات والمقاييس بوزارة الصناعة والتجارة (BSMD):\n\n1. نظام التخليص الجمركي الإلكتروني 'أفق' (Ofoq Single Window):\nنظام النافذة الواحدة الإلكتروني الوطني الموحد للإجراءات الجمركية عبر bahraincustoms.gov.bh؛ يتميز بسرعة فائقة ومعدل تخليص قياسي يسمح بإنهاء الإجراءات خلال ساعات عند اكتمال المستندات.\n\n2. الرسوم الجمركية والاتفاقيات التفضيلية:\n- التعريفة العامة الموحدة لدول مجلس التعاون الخليجي: 5% CIF على واردات الملابس من الدول غير التفضيلية (الصين، الهند، بنغلاديش، تركيا).\n- اتفاقية تيسير وتنمية التبادل التجاري بين الدول العربية (GAFTA): إعفاء جمركي كامل بنسبة 0% للبضائع المصرية ذات المنشأ الوطني، شريطة استيفاء قاعدة المنشأ (قيمة مضافة محلية لا تقل عن 40%) وتقديم شهادة منشأ معتمدة من الغرف التجارية المصرية وGOEIC.\n\n3. المواصفات القياسية الخليجية والبحرينية الإلزامية:\n- بطاقة البيان (Labeling): ملصق دائم ومحاك باللغتين العربية والإنجليزية يوضح نسب تكوين الألياف بدقة (مثال: 100% قطن)، واسم الصانع، وبلد المنشأ الدائم ('صنع في مصر' / 'Made in Egypt').\n- رموز العناية والغسيل: مطابقة للمواصفة القياسية الدولية ISO 3758 لدرجات حرارة الغسيل والكي والتجفيف.\n- حظر صبغات الآزو والمواد الخطرة: خلو تام من صبغات الآزو المسرطنة (<30 ppm) ومطابقة نسب الفورمالدهيد والمعادن الثقيلة للحدود الآمنة.\n- معايير أمان ملابس الأطفال: حظر الأربطة الخطرة في ملابس الرضع والامتثال لمتطلبات مقاومة الاشتعال.",
      summaryEn:
        "Finished apparel imports into the Kingdom of Bahrain are regulated by Bahrain Customs Affairs (Ministry of Interior) and the Bahrain Standards and Metrology Directorate (BSMD) at the Ministry of Industry and Commerce:\n\n1. Ofoq Customs Single-Window Platform:\nBahrain's state-of-the-art electronic single-window system (bahraincustoms.gov.bh) renowned for rapid customs processing, enabling paperless pre-clearance within hours upon complete document submission.\n\n2. Customs Duties & Trade Agreements:\n- GCC Common External Tariff: Standard 5% CIF on finished garments from non-preferential countries (China, India, Bangladesh, Turkey).\n- GAFTA Preferential Status: Full 0.0% duty exemption for Egyptian originating goods satisfying the 40% local value-addition threshold, validated by an official Chamber of Commerce Certificate of Origin and GOEIC verification.\n\n3. Mandatory Bahraini & GSO Quality Standards:\n- Garment Labeling: Permanent sewn tag in Arabic and English indicating fiber composition percentages (e.g. 100% Cotton), maker's identity, and permanent country of origin ('Made in Egypt' / 'صنع في مصر').\n- Care Labeling: Strict conformity with ISO 3758 international care symbols.\n- Hazardous Chemical Limits: Complete prohibition of carcinogenic AZO dyes (<30 ppm limit), alongside strict restrictions on free formaldehyde, nickel release, and toxic heavy metals.\n- Childrenswear Safety: Mandatory compliance with GSO mechanical safety requirements eliminating hazardous cords or choking parts on infant wear.",
      bulletsAr: [
        "التخليص الإلكتروني السريع عبر نظام 'أفق' (Ofoq) التابع لشؤون الجمارك البحرينية.",
        "إعفاء جمركي 0% بموجب GAFTA للمنتجات المصرية المحققة لنسبة القيمة المضافة (40% فأكثر).",
        "بطاقة بيان ثنائية اللغة (عربي/إنجليزي) مثبتة بخياطة دائمة توضح نسبة الألياف وبلد المنشأ 'صنع في مصر'.",
        "خلو الأقمشة تمامًا من صبغات الآزو المسرطنة ومطابقة رموز العناية للمواصفة ISO 3758.",
      ],
      bulletsEn: [
        "Rapid paperless customs clearance via Bahrain's national 'Ofoq' electronic platform.",
        "0.0% preferential duty under GAFTA for Egyptian goods achieving >=40% local value addition.",
        "Bilingual (Arabic/English) sewn labels indicating exact fiber content and permanent 'Made in Egypt' marking.",
        "Strict prohibition of carcinogenic AZO dyes and mandatory compliance with ISO 3758 care symbols.",
      ],
    },
    pricingCostAnalysis: {
      summaryAr:
        "تتمتع تجارة الملابس الجاهزة في مملكة البحرين بهوامش ربحية مجزية، حيث تتراوح هوامش تجار التجزئة للملابس الكاجوال والعلامات الخاصة بين 55% إلى 70%، وتصل إلى 75% في متاجر الأقسام الراقية بالمجمعات الكبرى.\n\nتستهدف مجموعة سامي بن عياد مستويات أسعار تصديرية تعاقدية تنافسية بصيغة FOB من الموانئ المصرية:\n- تيشيرتات قطن ممشوط 100% (Single Jersey 160–180 GSM): $2.95 إلى $4.20 للقطعة.\n- بولو شيرت قطني فاخر (Pique 200–220 GSM): $4.90 إلى $7.10 للقطعة.\n- فساتين كاجوال وملابس نسائية خاصة: $7.50 إلى $13.50 للقطعة.\n- أطقم وبيجامات نوم قطن مصري: $6.00 إلى $9.80 للقطعة.\n- ملابس أطفال قطنية (أطقم وسلوبيتات): $3.30 إلى $5.80 للقطعة.\n\nوعند احتساب تكاليف الشحن البحري لميناء خليفة بن سلمان (نحو 0.38 إلى 0.52 دولار للقطعة) وانعدام الرسوم الجمركية (0% GAFTA)، يصل سعر التوريد النهائي CIF إلى مستويات تحقق للمستورد البحريني وفرًا قدره 10% إلى 15% مقارنة بالمنافسين الأتراك والآسيويين، مع تحقيق هامش تصنيع إجمالي للمجموعة يتراوح بين 29% و35%.",
      summaryEn:
        "Apparel retailing in Bahrain yields lucrative gross margins, with mainstream fashion chains operating on retail markups between 55% and 70%, climbing to 75% in premier mall boutiques.\n\nSAMI BIN AYYAD GROUP targets highly competitive contract FOB export price points from Egyptian ports:\n- 100% Combed Cotton T-Shirts (Single Jersey 160–180 GSM): $2.95 to $4.20 USD / piece.\n- Premium Cotton Polo Shirts (Pique 200–220 GSM): $4.90 to $7.10 USD / piece.\n- Casual Dresses & Special Women's Garments: $7.50 to $13.50 USD / piece.\n- Egyptian Cotton Pyjamas & Loungewear: $6.00 to $9.80 USD / set.\n- Cotton Babywear & Children's Coordinates: $3.30 to $5.80 USD / piece.\n\nFactoring in ocean freight to Khalifa Bin Salman Port (~$0.38 to $0.52 per unit) and zero customs duties under GAFTA (0%), the landed CIF cost saves Bahraini importers 10% to 15% compared to Turkish and Asian alternatives, while securing gross manufacturing margins of 29% to 35% for SBA Group.",
      bulletsAr: [
        "هوامش التجزئة في البحرين تتراوح بين 55% و70% في سلاسل الموضة السريعة والهايبرماركت.",
        "أسعار FOB مستهدفة: التيشيرتات ($2.95–$4.20)، البولو ($4.90–$7.10)، والفساتين ($7.50–$13.50).",
        "وفر مباشر للمستورد البحريني قدره 10%–15% بفضل الإعفاء الجمركي 0% بموجب GAFTA.",
        "هامش تصنيع إجمالي لمجموعة سامي بن عياد يتراوح بين 29% و35% مع استقرار العائد بالدولار.",
      ],
      bulletsEn: [
        "Retail markups in Bahrain average 55%–70% across mainstream and department store channels.",
        "Target FOB prices: Cotton tees ($2.95–$4.20), Polos ($4.90–$7.10), Dresses ($7.50–$13.50).",
        "Direct Egyptian supply delivers 10%–15% landed cost savings under 0% GAFTA preferential duty.",
        "Secures 29% to 35% gross manufacturing margins for SBA Group backed by stable foreign currency.",
      ],
    },
    logisticsSupplyChain: {
      summaryAr:
        "تتمتع مملكة البحرين بموقع لوجستي فريد وبنية تحتية متطورة تخدم السوق المحلي وتمتد مباشرة نحو السوق السعودي والخليجي:\n\n1. ميناء خليفة بن سلمان (Khalifa Bin Salman Port - KBSP):\nالميناء البحري التجاري الرئيسي في منطقة الحد؛ تديره شركة APM Terminals العالمية ويتميز بأعماق تصل إلى 15 مترًا ومحطة حاويات حديثة وأنظمة تخليص إلكترونية فورية عبر نظام 'أفق'.\n\n2. جسر الملك فهد (King Fahd Causeway):\nشريان النقل البري الاستراتيجي بطول 25 كم الذي يربط البحرين مباشرة بالمنطقة الشرقية بالمملكة العربية السعودية (الخبر، الدمام، الظهران)، مما يتيح نقل البضائع بالشاحنات خلال ساعتين إلى 4 ساعات ويوفر فرصة استخدام البحرين كمركز توزيع إقليمي مشترك.\n\n3. مطار البحرين الدولي للشحن (BIA Cargo):\nمحطة شحن جوي متطورة ترتبط برحلات يومية مباشرة من مطار القاهرة عبر طيران الخليج ومصر للطيران (زمن طيران 2.5 إلى 3 ساعات)، وتستخدم لنقل العينات التسويقية والطلبيات السريعة ومجموعات المواسم.\n\n4. الشحن البحري المنتظم من مصر:\nتستغرق خطوط الملاحة البحرية المنتظمة من الموانئ المصرية (الإسكندرية، بورسعيد، دمياط، السخنة) إلى ميناء خليفة بن سلمان ما بين 11 إلى 15 يومًا، مما يوفر ميزة زمنية وتكلفة شحن تنافسية مقارنة بالموردين في شرق آسيا.",
      summaryEn:
        "The Kingdom of Bahrain boasts a unique strategic logistics positioning with advanced maritime, overland, and air freight infrastructure:\n\n1. Khalifa Bin Salman Port (KBSP):\nThe premier commercial container terminal located in Hidd, operated by APM Terminals Bahrain. Features 15-meter draft berths, rapid automated container handling, and seamless integration with the Ofoq customs system.\n\n2. King Fahd Causeway (Cross-Border Road Link):\nA strategic 25-km overland bridge connecting Bahrain directly to the Saudi Eastern Province (Khobar, Dammam, Dhahran). Enables transit trucking within 2 to 4 hours, allowing SBA Group to utilize Bahrain as a dual-market distribution hub.\n\n3. Bahrain International Airport Cargo (BIA):\nA modern dedicated air cargo hub connected via daily direct flights from Cairo (CAI) via Gulf Air and EgyptAir (2.5 to 3 hours flight time), serving rapid fashion capsules and urgent commercial samples.\n\n4. Ocean Freight Liner Connectivity:\nRegular container services from Egyptian ports (Port Said, Damietta, Alexandria, Sokhna) reach Khalifa Bin Salman Port in 11 to 15 days, providing superior responsiveness over 25-to-35 day East Asian transits.",
      bulletsAr: [
        "ميناء خليفة بن سلمان بالحد يمثل المنفذ البحري الرئيسي بزمن تفريغ وتخليص إلكتروني سريع.",
        "جسر الملك فهد (25 كم) يربط البحرين بالمنطقة الشرقية السعودية ويتيح نقل البضائع في ساعتين.",
        "زمن الشحن البحري من مصر لميناء خليفة بن سلمان 11–15 يومًا فقط مقابل 25–35 يومًا من آسيا.",
        "رحلات جوية مباشرة يومية بين القاهرة والمنامة (2.5 ساعة) لنقل العينات والطلبيات العاجلة.",
      ],
      bulletsEn: [
        "Khalifa Bin Salman Port in Hidd serves as the primary maritime container hub with rapid clearance.",
        "King Fahd Causeway (25 km) links Bahrain directly to Saudi Arabia, enabling 2-hour trucking.",
        "Ocean container transit from Egyptian ports takes 11–15 days vs 25–35 days from East Asia.",
        "Daily direct flights between Cairo and Manama (2.5 hours) support urgent air replenishment.",
      ],
    },
    risksChallenges: {
      summaryAr:
        "حددت الدراسة أربعة مخاطر وتحديات رئيسية في سوق البحرين مع وضع استراتيجيات تحوط فعالة:\n\n1. المنافسة السعرية الحادة من الموردين الآسيويين (الصين والهند وبنغلاديش):\n- التحدي: انخفاض تكلفة إنتاج التيشيرتات والملابس الاقتصادية في بنغلاديش والهند.\n- التحوط: التركيز على خامة القطن المصري 100% طويل التيلة، وتوظيف الإعفاء الجمركي 0% بموجب GAFTA لتعويض فروق أجور العمالة وتقديم قيمة مضافة ممتازة.\n\n2. الحجم الاستهلاكي الإجمالي للسوق المحلي مقارنة بأسواق الجوار:\n- التحدي: صغر حجم السوق البحريني نسبيًا (1.6 مليون نسمة) مقارنة بالسوقين السعودي والإماراتي.\n- التحوط: استهداف البحرين كبوابة مزدوجة تجمع بين السوق المحلي وسوق المنطقة الشرقية السعودي عبر جسر الملك فهد، والتركيز على العقود ذات الحجم المرتفع لسلاسل الهايبرماركت.\n\n3. متطلبات شروط السداد والائتمان التجاري (Credit Terms):\n- التحدي: طلب سلاسل التجزئة تسهيلات سداد تمتد من 60 إلى 90 يومًا.\n- التحوط: التعامل المبدئي بالاعتمادات المستندية المعززة غير القابلة للإلغاء (Confirmed LC)، والتأمين على الصادرات عبر الشركة المصرية لضمان الصادرات (EGE).\n\n4. التدقيق الجمركي والمواصفات القياسية (BSMD):\n- التحدي: فحص العينات عبر نظام 'أفق' للتأكد من خلو الأقمشة من صبغات الآزو وتطابق بطاقات البيان.\n- التحوط: الفحص المخبري المسبق للشحنات في مصر وإصدار شهادات المطابقة والمنشأ المعتمدة قبل الإبحار.",
      summaryEn:
        "The study evaluates four primary commercial risks in Bahrain and details targeted mitigation protocols:\n\n1. Price Competition from Low-Cost Asian Producers (China, India, Bangladesh):\n- Risk: Ultra-low FOB pricing on basic polyester and budget cotton garments.\n- Mitigation: Leverage authentic premium Egyptian cotton equity, high-needle-count combed yarns, and 0% GAFTA tariff savings to neutralize Asian labor cost differentials.\n\n2. Domestic Market Scale Limitation:\n- Risk: Relatively compact domestic population (1.6M residents) compared to Saudi Arabia or the UAE.\n- Mitigation: Position Bahrain as a dual-market fulfillment gateway serving local retail and cross-border Saudi Eastern Province trade via the Causeway, anchored by hypermarket volume contracts.\n\n3. Extended Buyer Payment Terms & Working Capital Exposure:\n- Risk: Retail chains requesting 60-to-90-day credit facilities.\n- Mitigation: Structure initial container transactions under Confirmed Irrevocable Letters of Credit (LC) and export credit insurance through EGE.\n\n4. Strict BSMD Technical Conformity Audits:\n- Risk: Potential shipment delays at Khalifa Bin Salman Port over labeling or chemical testing discrepancies.\n- Mitigation: Pre-shipment laboratory certification in Egypt confirming zero AZO dyes, accurate bilingual fiber tags, and verified Chamber of Commerce origin certificates.",
      bulletsAr: [
        "التحوط من المنافسة الآسيوية بالتركيز على فخامة القطن المصري ووفر التعريفة الجمركية 5%.",
        "التحوط من صغر حجم السوق بتوظيف جسر الملك فهد للنفاذ المشترك للسوق السعودي.",
        "التحوط من فترات الائتمان بالاعتمادات المستندية المعززة (LC) والتأمين على الصادرات.",
        "التحوط من اشتراطات نظام 'أفق' بالفحص المخبري وإصدار شهادات المطابقة المسبقة.",
      ],
      bulletsEn: [
        "Mitigate Asian price pressures with certified Egyptian cotton equity and 0% GAFTA tariff shield.",
        "Overcome market scale by leveraging the Causeway to serve Saudi Eastern Province retail.",
        "Manage working capital risks using Confirmed Irrevocable LCs and export credit insurance.",
        "Ensure seamless Ofoq clearance through mandatory pre-shipment testing and verified origin documentation.",
      ],
    },
    commercialInvestmentOpportunities: {
      summaryAr:
        "تطرح الدراسة ست فرص تجارية واستثمارية نوعية لمجموعة سامي بن عياد في مملكة البحرين:\n\n1. عقود التصنيع للغير (Private Label) لسلسلة اللولو هايبرماركت (10 فروع):\nتصنيع وتوريد خطوط التيشيرتات القطنية والبولو والملابس الداخلية وملابس الأطفال لعلامات اللولو الخاصة (Cortigiani, John Louis) بحجم مستهدف لا يقل عن 300,000 قطعة سنويًا.\n\n2. استهداف التعاقد الإقليمي لبرامج بريمارك البحرين (Primark) وسلاسل الشايع:\nبحث فرص التصنيع التعاقدي لملابس الأطفال والبيسك لعلامات مجموعة الشايع عقب الافتتاح التاريخي لمتجر بريمارك بسيتي سنتر البحرين في 23 سبتمبر 2026.\n\n3. التوريد التعاقدي المباشر لملابس الأطفال والبيسك لسلسلة ماكس فاشن (Max Fashion):\nتزويد فروع ماكس في البحرين بملابس الأطفال القطنية والملابس المنزلية بأسعار FOB منافسة للموردين الآسيويين.\n\n4. التوسع في الفساتين والملابس النسائية المحتشمة بناءً على نجاح بند 621050:\nاستثمار الحصة السوقية المصرية الرائدة (51.34%) لطرح خطوط فساتين قطنية كاجوال وأزياء محتشمة لمتاجر التجزئة ومجموعة الحواج.\n\n5. توريد حاويات كاملة FCL لتجار سوق المنامة وباب البحرين:\nإبرام عقود توريد دورية بالحاويات لبيوت الجملة في المنامة لتوزيعها محليًا وإعادة تصديرها للشرقية السعودية.\n\n6. عقود الزي الموحد للمدارس الخاصة والمستشفيات وقطاع الضيافة:\nتوفير الزي المؤسسي عالي الجودة للقطاعات الطبية والتعليمية والفندقية النامية بالمملكة.",
      summaryEn:
        "The study outlines six concrete commercial and manufacturing opportunities for SAMI BIN AYYAD GROUP:\n\n1. Private Label Contract Manufacturing for LuLu Retail Bahrain (10 Hypermarkets):\nProducing core cotton t-shirts, polos, babywear, and innerwear for LuLu's proprietary labels (Cortigiani, John Louis) targeting >=300,000 units annually.\n\n2. Strategic Supply Engagement for Alshaya & Primark Bahrain Ecosystem:\nTargeting contract sourcing for children's basics, loungewear, and nightwear across Alshaya franchise chains following the milestone Primark Bahrain opening on Sept 23, 2026.\n\n3. Volume Sourcing Replenishment for Landmark's Max Fashion Bahrain:\nReplenishing basic cotton tees, loungewear, and baby apparel directly to Max stores across Bahrain at competitive FOB terms.\n\n4. Expanding Women's Modest & Casual Fashion Footprint:\nCapitalizing on Egypt's proven 51.34% dominance in HS 621050 to introduce full casual dress lines and modest loungewear for boutique chains and Al Hawaj stores.\n\n5. Direct FCL Container Replenishment for Manama & Bab Al Bahrain Wholesalers:\nSecuring quarterly ocean container contracts with premier wholesale houses for distribution in Bahrain and cross-border trade to Saudi Arabia.\n\n6. Institutional Uniform Tenders for Healthcare, Hospitality & Schools:\nBidding for high-margin corporate workwear and medical scrubs across Bahrain's expanding private health networks and international bilingual schools.",
      bulletsAr: [
        "عقد تصنيع Private Label رئيسي لمجموعة اللولو للتجزئة (10 فروع) في القطنيات والملابس الداخلية.",
        "استهداف التوريد الإقليمي لعلامات الشايع وبريمارك البحرين في ملابس الأطفال والبيسك.",
        "توسيع النجاح المصري الكاسح في الملابس النسائية (51.3% في 621050) نحو الفساتين والأزياء المحتشمة.",
        "شحن حاويات كاملة دورية لتجار سوق المنامة للتموين المحلي وإعادة التصدير للسعودية.",
      ],
      bulletsEn: [
        "Major Private Label manufacturing contract with LuLu Retail Bahrain (10 stores) for core cotton lines.",
        "Target regional contract sourcing for Alshaya brands and Primark Bahrain in kids basics and sleepwear.",
        "Scale Egypt's proven 51.34% leadership in HS 621050 into casual dresses and modest loungewear.",
        "Quarterly containerized FOB supply directly serving premier Manama and Bab Al Bahrain wholesale merchants.",
      ],
    },
    capacityFinancialFeasibility: {
      summaryAr:
        "وضعت الدراسة أربعة سيناريوهات إنتاجية ومالية تصاعدية لتشغيل وتوريد الملابس لمملكة البحرين وفق نموذجي FOB (منتج تام) وCM (أجور تصنيع فقط):\n\n1. السيناريو التجريبي الأول (Pilot Program - 10,000 قطعة/شهر):\n- الحجم السنوي: 120,000 قطعة (تيشيرتات قطنية وبولو وملابس نسائية).\n- متوسط سعر FOB: 4.10 دولارات للقطعة.\n- الإيراد السنوي المستهدف: 492,000 دولار.\n- تكلفة الإنتاج والخامات (COGM): 324,720 دولارًا (66%).\n- هامش الربح الإجمالي: 167,280 دولارًا (34.0%).\n- صافي المساهمة النقدية: 118,080 دولارًا (هامش صافي 24.0%).\n\n2. سيناريو التوريد التعاقدي المتوسط (Core Contract - 25,000 قطعة/شهر):\n- الحجم السنوي: 300,000 قطعة (مزيج تيشيرتات، ملابس أطفال، ملابس نسائية خاصة).\n- متوسط سعر FOB: 4.40 دولارات للقطعة.\n- الإيراد السنوي المستهدف: 1,320,000 دولار.\n- تكلفة الإنتاج والخامات (COGM): 858,000 دولار (65%).\n- هامش الربح الإجمالي: 462,000 دولار (35.0%).\n- صافي المساهمة النقدية: 343,200 دولار (هامش صافي 26.0%).\n\n3. سيناريو الشراكة الاستراتيجية مع اللولو ولاندمارك (Strategic Sourcing - 50,000 قطعة/شهر):\n- الحجم السنوي: 600,000 قطعة (برامج Private Label متكاملة).\n- متوسط سعر FOB: 4.25 دولارات للقطعة.\n- الإيراد السنوي المستهدف: 2,550,000 دولار.\n- تكلفة الإنتاج والخامات (COGM): 1,606,500 دولار (63%).\n- هامش الربح الإجمالي: 943,500 دولار (37.0%).\n- صافي المساهمة النقدية: 714,000 دولار (هامش صافي 28.0%).\n\n4. سيناريو المورد الإقليمي المعتمد للبحرين والشرقية (Regional Anchor - 100,000 قطعة/شهر):\n- الحجم السنوي: 1,200,000 قطعة.\n- متوسط سعر FOB: 4.05 دولارات للقطعة.\n- الإيراد السنوي المستهدف: 4,860,000 دولار.\n- تكلفة الإنتاج والخامات (COGM): 3,013,200 دولار (62%).\n- هامش الربح الإجمالي: 1,846,800 دولار (38.0%).\n- صافي المساهمة النقدية: 1,409,400 دولار (هامش صافي 29.0%).\n\nخيار أجور التشغيل فقط (Cut & Make - CM Option - 50,000 قطعة/شهر):\n- تقديم خدمة القص والحياكة والتعبئة فقط (الخامات مقدمة من العميل).\n- أجرة التشغيل: 1.35 دولار للقطعة.\n- إيراد سنوي: 810,000 دولار وصافي ربح تشغيلي 27.5% مع انعدام مخاطر تمويل الأقمشة.",
      summaryEn:
        "The study outlines four progressive production and financial operating models for the Bahraini market across full FOB and Cut & Make (CM) tolling frameworks:\n\n1. Pilot Trial Program (10,000 pcs / month):\n- Annual Volume: 120,000 pieces (cotton tees, polos, women's apparel).\n- Average FOB Price: $4.10 USD / unit.\n- Annual Gross Revenue: $492,000 USD.\n- Cost of Goods Manufactured (COGM): $324,720 USD (66%).\n- Gross Margin: $167,280 USD (34.0%).\n- Net Contribution Margin: $118,080 USD (24.0% net margin).\n\n2. Core Private Label Contract (25,000 pcs / month):\n- Annual Volume: 300,000 pieces (tees, babywear, special women's garments).\n- Average FOB Price: $4.40 USD / unit.\n- Annual Gross Revenue: $1,320,000 USD.\n- COGM: $858,000 USD (65%).\n- Gross Margin: $462,000 USD (35.0%).\n- Net Contribution Margin: $343,200 USD (26.0% net margin).\n\n3. Strategic Sourcing Partnership (50,000 pcs / month):\n- Annual Volume: 600,000 pieces (LuLu / Landmark / Alshaya programs).\n- Average FOB Price: $4.25 USD / unit.\n- Annual Gross Revenue: $2,550,000 USD.\n- COGM: $1,606,500 USD (63%).\n- Gross Margin: $943,500 USD (37.0%).\n- Net Contribution Margin: $714,000 USD (28.0% net margin).\n\n4. Regional Anchor Supplier (100,000 pcs / month):\n- Annual Volume: 1,200,000 pieces (serving Bahrain and Saudi Eastern Province).\n- Average FOB Price: $4.05 USD / unit.\n- Annual Gross Revenue: $4,860,000 USD.\n- COGM: $3,013,200 USD (62%).\n- Gross Margin: $1,846,800 USD (38.0%).\n- Net Contribution Margin: $1,409,400 USD (29.0% net margin).\n\nTolling / Cut & Make (CM Only) Alternative (50,000 pcs / month):\n- Tolling service (buyer provides raw fabric and trims).\n- CM Fee: $1.35 USD / piece.\n- Annual Revenue: $810,000 USD with ~27.5% operating margin and zero raw material financing exposure.",
      bulletsAr: [
        "السيناريو التجريبي (10k قطعة/شهر): إيراد سنوي 492,000$ وصافي ربح 118,080$ (هامش 24.0%).",
        "السيناريو المتوسط (25k قطعة/شهر): إيراد سنوي 1,320,000$ وصافي ربح 343,200$ (هامش 26.0%).",
        "سيناريو الشراكة الاستراتيجية (50k قطعة/شهر): إيراد سنوي 2,550,000$ وصافي ربح 714,000$ (هامش 28.0%).",
        "سيناريو المورد المعتمد (100k قطعة/شهر): إيراد سنوي 4,860,000$ وصافي ربح 1,409,400$ (هامش 29.0%).",
      ],
      bulletsEn: [
        "Pilot Program (10k pcs/mo): $492,000 annual revenue, $118,080 net profit (24.0% net margin).",
        "Core Contract (25k pcs/mo): $1,320,000 annual revenue, $343,200 net profit (26.0% net margin).",
        "Strategic Sourcing (50k pcs/mo): $2,550,000 annual revenue, $714,000 net profit (28.0% net margin).",
        "Anchor Supplier (100k pcs/mo): $4,860,000 annual revenue, $1,409,400 net profit (29.0% net margin).",
      ],
    },
    recommendationsActionPlan: {
      summaryAr:
        "تضع الدراسة خطة عمل تنفيذية متكاملة مدتها 12 شهرًا مقسمة إلى أربع مراحل ربع سنوية محددة المهام ومؤشرات الأداء:\n\nالمرحلة الأولى: التحضير الفني واستيفاء متطلبات التخليص والمواصفات (الأشهر 1–3)\n- إعداد كبسولة عينات فاخرة من التيشيرتات والبولو والملابس النسائية الخاصة وبيجامات الأطفال من القطن المصري 100%.\n- مراجعة متطلبات نظام 'أفق' الجمركي البحريني، وإجراء الفحوصات المخبرية للتأكد من خلو الأقمشة من صبغات الآزو.\n- تجهيز نماذج شهادات المنشأ المعتمدة من الغرف التجارية وGOEIC لاستيفاء إعفاء GAFTA (0%).\n- التعاقد المبدئي مع خط ملاحي بحري يربط الموانئ المصرية بميناء خليفة بن سلمان بأسعار نولون ثابتة.\n\nالمرحلة الثانية: المهمة التجارية الميدانية والتفاوض مع الحسابات المستهدفة (الأشهر 4–6)\n- إيفاد وفد تجاري وتنفيذي رفيع من مجموعة سامي بن عياد إلى المنامة.\n- عقد اجتماعات عمل مباشرة مع مسؤولي المشتريات في مجموعة الشايع لبحث فرص التوريد لسلاسلها ومتجر بريمارك، وإدارة اللولو ولاندمارك وأباريل.\n- زيارة كبار تجار الجملة في سوق باب البحرين وسوق المنامة وعرض عينات الحاويات الكاملة بأسعار FOB المباشرة.\n- استكشاف فرص التحالف مع بيوت التجزئة الفاخرة مثل مجموعة الحواج ومجموعة جواد.\n\nالمرحلة الثالثة: تنفيذ الشحنات التعاقدية التجريبية (الأشهر 7–9)\n- توقيع أول طلبية تعاقدية تجريبية بحجم 25,000 إلى 35,000 قطعة (حاوية 40 قدم كاملة).\n- تنفيذ الإنتاج والرقابة الصارمة على الجودة والتغليف وتثبيت بطاقات البيان الثنائية الإلزامية.\n- شحن الحاوية بحرًا إلى ميناء خليفة بن سلمان وإتمام إجراءات التخليص السريع عبر نظام 'أفق'.\n- مراجعة استجابة المشتري وتحليل هوامش الرف وسرعة دوران المنتجات في المتاجر.\n\nالمرحلة الرابعة: تثبيت برامج التوريد السنوي والربط بالسوق السعودي (الأشهر 10–12)\n- تحويل العقود التجريبية إلى برامج توريد سنوية مبرمجة بحجم 50,000 إلى 100,000 قطعة شهريًا.\n- توسيع محفظة المنتجات لتشمل الفساتين القطنية الكاجوال والأزياء المحتشمة وزي المدارس والضيافة.\n- دراسة استخدام البحرين كمركز لوجستي وتوزيعي متقدم لتموين المنطقة الشرقية بالسعودية عبر جسر الملك فهد.",
      summaryEn:
        "The study formulates an actionable 12-month phased implementation roadmap divided into four quarters:\n\nPhase 1: Technical Preparation, Compliance & Logistics Setup (Months 1–3)\n- Produce comprehensive sampling capsules in premium Egyptian combed cotton covering tees, polos, special women's garments, and loungewear.\n- Audit compliance against Ofoq customs requirements and perform lab testing confirming zero AZO dyes.\n- Validate documentation workflows for GAFTA 0% duty exemption with Chamber of Commerce and GOEIC origin registries.\n- Secure preferential liner container freight contracts from Egyptian ports to Khalifa Bin Salman Port.\n\nPhase 2: Commercial Roadshow & Key Account Engagement (Months 4–6)\n- Dispatch an executive commercial delegation from SBA Group to Manama.\n- Conduct direct B2B sourcing meetings with procurement leadership at Alshaya Group (exploring Primark/chain supply), LuLu Retail, Landmark's Max Fashion, and Apparel Group.\n- Present direct FOB container offerings to premier wholesale houses in Bab Al Bahrain and Manama Souq.\n- Explore strategic distribution partnerships with luxury retail houses like Al Hawaj and Jawad Business Group.\n\nPhase 3: Pilot Order Execution & Logistics Validation (Months 7–9)\n- Finalize first trial purchase contracts for 25,000 to 35,000 units (one 40-foot FCL container).\n- Execute manufacturing, stringent inline quality audits, and bilingual care/origin labeling.\n- Ship ocean container to Khalifa Bin Salman Port, completing seamless electronic clearance via the Ofoq platform.\n- Review retail sell-through velocity, customer feedback, and landed margin performance.\n\nPhase 4: Multi-Year Supply Contracting & Saudi Gateway Expansion (Months 10–12)\n- Transition successful trial orders into programmatic multi-year supply contracts (50,000 to 100,000 pcs/month).\n- Diversify the product basket to incorporate modest cotton dresses, sleepwear, and institutional uniforms.\n- Evaluate utilizing Bahrain as a regional bonded distribution base serving Saudi Eastern Province via the King Fahd Causeway.",
      bulletsAr: [
        "الأشهر 1–3: تجهيز عينات القطن المصري، استيفاء اعتمادات نظام 'أفق'، وتثبيت نولون الشحن لميناء خليفة.",
        "الأشهر 4–6: مهمة تجارية للمنامة للقاء قيادات الشايع (بريمارك)، اللولو، لاندمارك، الحواج، وتجار سوق المنامة.",
        "الأشهر 7–9: تصنيع وشحن أول حاوية تجريبية (35,000 قطعة) بحرًا لميناء خليفة والتخليص بنظام 'أفق'.",
        "الأشهر 10–12: إبرام عقود توريد سنوية مبرمجة بحجم 50k–100k قطعة/شهر وتوظيف جسر الملك فهد للنفاذ للسعودية.",
      ],
      bulletsEn: [
        "Months 1–3: Sample development, Ofoq compliance testing, GAFTA certificates, and shipping agreements to KBSP.",
        "Months 4–6: Executive roadshow to Manama meeting Alshaya (Primark), LuLu, Landmark, Al Hawaj, and Manama traders.",
        "Months 7–9: Manufacture and ship pilot 40ft container (35,000 units) to Khalifa Bin Salman Port under 0% GAFTA duty.",
        "Months 10–12: Lock in annual volume contracts (50k–100k pcs/month) and leverage the Causeway into Saudi Arabia.",
      ],
    },
  },
  comparisonMetrics: {
    gdpCurrentUsd: 48.97,
    gdpPerCapitaUsd: 30596.58,
    gdpGrowthAnnualPct: 3.481,
    populationTotal: 1600366,
    apparelImportsTotalUsdB: 0.2962,
    apparelImportsPerCapitaUsd: 185.07,
    apparelImportShareOfGdpPct: 0.60,
    knittedSharePct: 51.61,
    wovenSharePct: 48.39,
    topSupplierCountry: "الصين",
    topSupplierSharePct: 35.18,
    egyptDirectApparelSharePct: 0.81,
    preferentialTariffPct: 0,
    mfnTariffPct: 5,
    easeOfTradeRankGcc: 2,
    targetDemographicsAr: "1.60 مليون نسمة: 47% مواطنون ذوو إنفاق مرتفع و53% مقيمون يدعمون مبيعات الكاجوال",
    targetDemographicsEn: "1.60M population: 47% citizens with high luxury cotton spend, 53% expats for volume casuals",
  },
  sources: [
    {
      nameAr: "قاعدة بيانات إحصاءات التجارة الدولية للأمم المتحدة (UN Comtrade)",
      nameEn: "United Nations Comtrade Database",
      dataset: "Bilateral Apparel & Clothing Accessories Import Matrices (HS 61 & HS 62) - Bahrain 2023",
      year: "2023",
      url: "https://comtradeplus.un.org/",
      verificationStatus: "official",
      relevanceAr: "المصدر الرسمي الأساسي لحجم واردات الفصول 61 و62 وتوزيع حصص كبار الموردين وتوريدات مصر.",
    },
    {
      nameAr: "البنك الدولي — قاعدة بيانات حلول التجارة المتكاملة (WITS)",
      nameEn: "World Bank — World Integrated Trade Solution (WITS)",
      dataset: "Bahrain Textiles and Clothing Trade Tariffs & Market Access Matrices",
      year: "2023",
      url: "https://wits.worldbank.org/",
      verificationStatus: "official",
      relevanceAr: "التحقق من الرسوم الجمركية، معدلات التعريفة التفضيلية، وهوامش النفاذ للأسواق.",
    },
    {
      nameAr: "البنك الدولي — مؤشرات التنمية العالمية (WDI)",
      nameEn: "World Bank — World Development Indicators",
      dataset: "Bahrain Macroeconomic Indicators (Population: 1,600,366, GDP: $48.97B, GDP/Capita: $30,597, Growth: 3.481%)",
      year: "2025",
      url: "https://data.worldbank.org/country/bahrain",
      verificationStatus: "official",
      relevanceAr: "المصدر المعتمد لبيانات السكان، الناتج المحلي الإجمالي، نصيب الفرد، ومعدلات النمو والتضخم.",
    },
    {
      nameAr: "شعبة السكان بالأمم المتحدة — بوابة UN Data",
      nameEn: "United Nations Population Division — UN Data Portal",
      dataset: "World Population Prospects & Country Profiles: Bahrain 2025",
      year: "2025",
      url: "https://data.un.org/en/iso/bh.html",
      verificationStatus: "official",
      relevanceAr: "تأكيد تعداد السكان (~1.643 مليون نسمة)، العاصمة (المنامة)، المساحة (778 كم²)، والعملة (الدينار البحريني).",
    },
    {
      nameAr: "شؤون الجمارك — وزارة الداخلية بمملكة البحرين (نظام أفق)",
      nameEn: "Bahrain Customs Affairs — Ministry of Interior (Ofoq System)",
      dataset: "Customs Tariff Schedules, Single-Window Guidelines & Import Regulatory Procedures",
      year: "2025/2026",
      url: "https://www.bahraincustoms.gov.bh/",
      verificationStatus: "official",
      relevanceAr: "التحقق من التعرفة الجمركية الموحدة (5%)، إعفاء GAFTA (0%)، واشتراطات النافذة الواحدة للتخليص 'أفق'.",
    },
    {
      nameAr: "إدارة المواصفات والمقاييس البحرينية (BSMD) وهيئة التقييس الخليجية (GSO)",
      nameEn: "Bahrain Standards and Metrology Directorate & GSO",
      dataset: "Gulf Technical Regulations for Textiles, Labeling Standards & Harmful Substance Limits",
      year: "2025",
      url: "https://www.gso.org.sa/",
      verificationStatus: "official",
      relevanceAr: "الاشتراطات الإلزامية لبطاقة البيان (عربي/إنجليزي)، رموز العناية ISO 3758، وفحص صبغات الآزو.",
    },
    {
      nameAr: "تقرير قطاع التجزئة والمستهلك في البحرين — جرانت ثورنتون (Grant Thornton)",
      nameEn: "Grant Thornton Bahrain Consumer and Retail Industry Report (BMI Data)",
      dataset: "Household Expenditure Breakdown — Clothing and Footwear Representing 7.92% of Total Spend",
      year: "2024",
      url: "https://www.grantthornton.bh/",
      verificationStatus: "official",
      relevanceAr: "توثيق نسبة إنفاق الأسرة في البحرين على الملابس والأحذية (7.92%) استنادًا لبيانات BMI.",
    },
    {
      nameAr: "تقرير السوق العقاري للنصف الأول 2024 — شركة أعيان العقارية (A'AYAN)",
      nameEn: "A'AYAN Real Estate H1 2024 Market Report",
      dataset: "Bahrain Mall Leasable Space Distribution — Fashion Representing 27.31% of Leasable Area",
      year: "2024",
      url: "https://www.aayanre.com/",
      verificationStatus: "official",
      relevanceAr: "توثيق استحواذ قطاع الموضة والأزياء على 27.31% من المساحات التأجيرية بالمجمعات التجارية في البحرين.",
    },
    {
      nameAr: "بيانات وإحصاءات التجارة الخارجية والمنتجات المحدثة لعام 2024",
      nameEn: "Bahrain Foreign Trade Statistics & Updated HS-6 Trade Bulletins 2024",
      dataset: "Product-Level Imports for HS 6109.10 ($27.31M) and HS 6210.50 ($1.013M / Egypt Share: 51.34%)",
      year: "2024",
      url: "https://www.bahraincustoms.gov.bh/",
      verificationStatus: "official",
      relevanceAr: "تحليل بنود المنتجات التفصيلية المحدثة، وتطور استيراد التيشيرتات القطنية (+51.3% كميًا لمصر)، وحصة مصر بـ 621050.",
    },
    {
      nameAr: "الهيئة العامة للرقابة على الصادرات والواردات (GOEIC) — مصر",
      nameEn: "General Organization for Export & Import Control (GOEIC) — Egypt",
      dataset: "Egyptian Textile & Garment Exports to the Kingdom of Bahrain & Direct Trade Records",
      year: "2023/2024",
      url: "https://www.goeic.gov.eg/",
      verificationStatus: "official",
      relevanceAr: "تسوية إحصاءات التجارة المتقابلة وتتبع الصادرات المصرية المباشرة الموثقة عبر الفصول الجمركية.",
    },
  ],
  groupOpportunities: [
    {
      id: "opp-bh-women-special-garments",
      titleAr: "التوسع في الألبسة النسائية والفساتين بناءً على الحصة السوقية القياسية (51.3%)",
      titleEn: "Scaling Women's Apparel Built on Egypt's Proven 51.3% Category Dominance",
      descriptionAr: "تعظيم المكاسب من الريادة المطلقة لمصر في بند HS 621050 (520k$) والتوسع في الفساتين والملابس المحتشمة.",
      descriptionEn: "Leveraging dominant 51.34% category share in HS 621050 to capture broad modestwear retail demand.",
      priorityTier: "Tier 1",
      potentialAnnualRevenueUsd: 1400000,
      implementationTimelineMonths: 4,
    },
    {
      id: "opp-bh-lulu-private-label",
      titleAr: "عقد تصنيع Private Label رئيسي لسلسلة اللولو هايبرماركت (10 فروع)",
      titleEn: "Anchor Private Label Manufacturing Contract with LuLu Retail Bahrain (10 Stores)",
      descriptionAr: "توريد خطوط التيشيرتات القطنية والبولو والملابس الداخلية وملابس الأطفال لعلامات اللولو الخاصة (Cortigiani, John Louis).",
      descriptionEn: "High-volume contract manufacturing for LuLu's private labels across 10 Bahrain hypermarkets.",
      priorityTier: "Tier 1",
      potentialAnnualRevenueUsd: 1200000,
      implementationTimelineMonths: 6,
    },
    {
      id: "opp-bh-alshaya-primark-ecosystem",
      titleAr: "استهداف التوريد التعاقدي لمنظومة الشايع وبريمارك البحرين (Primark)",
      titleEn: "Contract Sourcing for Alshaya Fashion Portfolio & Primark Bahrain Ecosystem",
      descriptionAr: "بحث فرص توريد ملابس الأطفال والبيسك وسلاسل التجزئة عقب الافتتاح التاريخي لبريمارك البحرين في 23 سبتمبر 2026.",
      descriptionEn: "Targeting volume supply for Alshaya fashion brands following the Primark Bahrain launch.",
      priorityTier: "Tier 1",
      potentialAnnualRevenueUsd: 1500000,
      implementationTimelineMonths: 6,
    },
    {
      id: "opp-bh-manama-wholesalers-saudi-bridge",
      titleAr: "توريد حاويات FCL لتجار سوق المنامة وإعادة التصدير للشرقية عبر جسر الملك فهد",
      titleEn: "FCL Container Supply to Manama Wholesalers & Saudi Eastern Province Distribution",
      descriptionAr: "شحن بحري مباشر لميناء خليفة بن سلمان والاستفادة من جسر الملك فهد (25 كم) للنفاذ للدمام والخبر.",
      descriptionEn: "Direct ocean shipments to KBSP leveraging King Fahd Causeway for dual Bahrain/Saudi distribution.",
      priorityTier: "Tier 1",
      potentialAnnualRevenueUsd: 1100000,
      implementationTimelineMonths: 4,
    },
  ],
  globalOpportunityLink: {
    sectorTitleAr: "الملابس الجاهزة والمنسوجات — الأسواق العالمية",
    sectorTitleEn: "Global Apparel & Textiles Intelligence",
    backToSectorHref: "/global-markets/garment",
    comparativeReportHref: "/global-markets/garment/gcc-comparative-report",
  },
};
