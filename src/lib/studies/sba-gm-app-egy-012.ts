import type { GlobalMarketStudy } from "../global-markets-data";

/**
 * MASTER MARKET INTELLIGENCE REPORT — VERSION 2.0
 * Report Code: SBA-GM-APP-EGY-012 (Internal ID: SBA-GM-APP-EG-001)
 * Arab Republic of Egypt — Apparel & Textiles Sector
 * Edition: 2.0 | Research Date: November 2026
 * Prepared for: SAMI BIN AYYAD GROUP
 *
 * Core Analytical Thesis:
 * Analyzed simultaneously as:
 * 1. A vast domestic consumer market of 105M+ population with growing modern retail, wholesale, and institutional uniform demand.
 * 2. A premier global apparel manufacturing and export powerhouse (8,835 RMG factories, $3.394B exports in 2025, QIZ, EU-FTA, GAFTA).
 *
 * Strict Compliance:
 * - WITS / UN Comtrade (2023 Egypt Reporter):
 *   * HS61 Knitted Imports: USD 114,690,700 ($114.69070M)
 *   * HS62 Woven Imports: USD 177,369,560 ($177.36956M)
 *   * Combined Apparel Imports: USD 292,060,260 ($292.06026M)
 * - Derived Combined Suppliers 2023 (HS61 + HS62):
 *   * China: $98.82M (33.84%)
 *   * Türkiye: $78.29M (26.81%)
 *   * Bangladesh: $38.08M (13.04%)
 *   * UAE: $12.60M (4.31%)
 *   * Vietnam: $8.66M (2.97%)
 *   * Italy: $8.29M (2.84%)
 *   * India: $8.10M (2.77%)
 *   * Indonesia: $7.54M (2.58%)
 *   * Portugal: $4.20M (1.44%)
 *   * Jordan: $2.29M (0.78%)
 *   * Morocco: $2.11M (0.72%)
 * - GOEIC Separate Trade Series (2023–2025):
 *   * 2023: Imports $262M | Exports $2.421B
 *   * 2024: Imports $218M | Exports $2.834B (+17.1% export growth)
 *   * 2025: Imports $277M | Exports $3.394B (+19.8% export growth, ~20% YoY)
 * - 2024 Export Destinations: US ($1.19B), Europe ($689M), Türkiye ($242M).
 * - AmCham Egypt (April 2026 / Dec 2025 baseline): 14,339 textile & RMG companies, 8,835 ready-made garment companies.
 * - 8 Industrial Clusters: 10th of Ramadan, Obour City, 6th of October, Sadat City, Alexandria & Borg El Arab, El Mahalla El Kubra, Kafr El Dawar, SCZone.
 */
export const STUDY_EGY_APPAREL_012: GlobalMarketStudy = {
  id: "SBA-GM-APP-EGY-012",
  slug: "egypt-apparel-textiles",
  sector: "garment",
  scope: "global",
  region: "arab_world",
  apparelSubRegion: "other_arab",
  opportunityScore: 94,
  opportunityTier: "Tier 1 – Regional Manufacturing & Market Anchor",
  opportunityTierAr: "المستوى الأول – ركيزة التصنيع والسوق الإقليمي الأكبر",
  regionalRank: 1,
  totalInRegion: 11,
  opportunityRationaleAr: "السوق الاستهلاكي الأكبر عربيًا (105+ مليون نسمة) والقاعدة الصناعية التصديرية الكبرى للملابس (صادرات 3.39 مليار دولار في 2025)، مع واردات ملابس جمركية تبلغ 292.1 مليون دولار، وشبكة عملاقة من 8,835 شركة ملابس جاهزة، ومزايا تفضيلية تاريخية (QIZ، الشراكة الأوروبية، GAFTA، والكوميسا).",
  opportunityRationaleEn: "Largest domestic consumer base in the Arab world (105M+ pop.) and premier RMG manufacturing export hub ($3.39B exports in 2025), with $292.1M customs apparel imports, 8,835 garment factories, and strategic duty-free export platforms (QIZ, EU-FTA, GAFTA, COMESA).",
  downloadDocxUrl: "/studies/apparel/SBA_Egypt_Apparel_Market_Study.docx",
  downloadXlsxUrl: "/studies/apparel/SBA_Egypt_Apparel_Trade_Buyers_Compliance.xlsx",
  downloadZipUrl: "/studies/apparel/SBA_Egypt_Apparel_Study_Package.zip",
  priorityGrade: "A",
  marketRole: "production_hub",
  dataBasis: "hs61_hs62_customs",
  tradeIndicatorNumericUsdB: 3.39,
  tradeIndicatorDisplay: "3.39B USD",
  tradeIndicatorYear: "2025",
  tradeIndicatorScopeAr: "صادرات الملابس الجاهزة 2025 (3.394 مليار دولار) / واردات الملابس الجمركية HS61+HS62 لعام 2023 (292.1 مليون دولار)",
  tradeIndicatorScopeEn: "2025 RMG Exports ($3.394B GOEIC) / 2023 Customs Imports HS61+HS62 ($292.1M WITS)",
  dataCompletenessAr: "مكتملة بحثيًا وميدانيًا بنسبة 100% ومحققة عبر WITS وهيئة الرقابة على الصادرات والواردات والجمارك المصرية",
  dataCompletenessEn: "100% research complete with verified WITS, GOEIC, AmCham, and Egyptian Customs intelligence",
  waveBadge: "Wave 1 (Priority Anchor)",
  enableScenarioCalculator: true,
  countryCode: "EG",
  countryNameAr: "جمهورية مصر العربية",
  countryNameEn: "Arab Republic of Egypt",
  subRegionOrProjectAr: "القاهرة الكبرى · العاشر من رمضان · الإسكندرية · المحلة الكبرى · السادات · قناة السويس",
  subRegionOrProjectEn: "Greater Cairo · 10th of Ramadan · Alexandria · El Mahalla · Sadat · SCZone",
  activityTypeAr: "التصنيع المحلي، سلاسل التجزئة، وتصدير الملابس الجاهزة (Private Label / OEM / FOB)",
  activityTypeEn: "Domestic Retail, Institutional Uniforms & Export Manufacturing (FOB / OEM / Private Label)",
  productTagsAr: [
    "تيشيرتات وبولو قطنية فاخرة 100%",
    "قمصان رجالية كلاسيك وكاجوال",
    "بناطيل قطنية وجينز ودنيم",
    "ملابس نسائية كاجوال ومنسوجة",
    "ملابس أطفال ومواليد قطن مصري",
    "سويت شيرت وهوديز وأقمشة فليس",
    "ملابس نوم وبيجامات ولانجري راقي",
    "أزياء موحدة للشركات والمستشفيات والفنادق",
    "عقود تصنيع للغير OEM / Private Label",
    "بروتوكول المناطق المؤهلة (QIZ)"
  ],
  productTagsEn: [
    "100% Egyptian Combed Cotton Tees & Polos",
    "Men Classic & Casual Woven Shirts",
    "Chino Trousers, Casual Pants & Denim",
    "Women Casualwear & Woven Garments",
    "Premium Egyptian Cotton Kids & Babywear",
    "Fleece Hoodies & Sweatshirts",
    "Luxury Homewear, Pyjamas & Underwear",
    "Corporate, Hospitality & Medical Uniforms",
    "Private Label & OEM Contract Manufacturing",
    "Qualifying Industrial Zones (QIZ) Sourcing"
  ],
  titleAr: "دراسة سوق جمهورية مصر العربية",
  titleEn: "Egypt Apparel & Textiles Market Intelligence Report — Domestic Market, Manufacturing Hub & Export Platform",
  subtitleAr: "تحليل استراتيجي موثق (SBA-GM-APP-EGY-012 | الإصدار 2.0): خط الأساس الجمركي لواردات HS 61/62 (292.1 مليون دولار)، سلاسل التجارة الخارجية عبر GOEIC (صادرات 3.39 مليار دولار في 2025)، خريطة الـ 14,339 شركة والـ 8 تجمعات صناعية، شبكات التجزئة والمشترين المستهدفين، وقواعد الدخول التجاري لمجموعة سامي بن عياد",
  subtitleEn: "Verified Strategic Intelligence (SBA-GM-APP-EGY-012 | Edition 2.0): HS 61/62 Customs Imports Baseline ($292.1M WITS), GOEIC Trade Series ($3.394B Exports in 2025), Map of 14,339 Textile/RMG Companies & 8 Industrial Clusters, Retail Buyers Directory, and SBA Commercial Models",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-15",
  lastUpdated: "2026-11-15",
  version: "2.0",

  kpis: [
    {
      id: "kpi-eg-rmg-exports-2025",
      labelAr: "صادرات الملابس الجاهزة المصرية (2025)",
      labelEn: "Egypt RMG Exports (2025)",
      value: "3.394",
      unit: "USD B",
      source: "GOEIC / Apparel Export Council",
      referenceYear: "2025",
      growthNoteAr: "نمو سنوي بنحو +19.8% مقارنة بـ 2.834 مليار دولار في 2024 و2.421 مليار في 2023",
      growthNoteEn: "+19.8% YoY growth vs $2.834B in 2024 and $2.421B in 2023",
    },
    {
      id: "kpi-eg-imports-wits-2023",
      labelAr: "واردات الملابس الجمركية (HS 61 + 62)",
      labelEn: "Customs Apparel Imports (2023)",
      value: "292.06",
      unit: "USD M",
      source: "WITS / UN Comtrade",
      referenceYear: "2023",
      growthNoteAr: "114.69 مليون محبوك (HS61) + 177.37 مليون منسوج (HS62) — واردات جمركية مسجلة",
      growthNoteEn: "$114.69M Knitted (HS61) + $177.37M Woven (HS62) — customs import basis",
    },
    {
      id: "kpi-eg-companies-count",
      labelAr: "إجمالي شركات الغزل والنسيج والملابس",
      labelEn: "Textile & RMG Enterprises",
      value: "14,339",
      unit: "شركة مسجلة",
      source: "AmCham Egypt / GAFI (Dec 2025)",
      referenceYear: "2025",
      growthNoteAr: "تتضمن 8,835 شركة متخصصة في صناعة الملابس الجاهزة تشكل ركيزة التشغيل والإنتاج",
      growthNoteEn: "Includes 8,835 dedicated ready-made garment manufacturing enterprises",
    },
    {
      id: "kpi-eg-us-exports-2024",
      labelAr: "صادرات الملابس للسوق الأمريكي (2024)",
      labelEn: "Apparel Exports to US (2024)",
      value: "1.19",
      unit: "USD B",
      source: "Apparel Export Council / US Customs",
      referenceYear: "2024",
      growthNoteAr: "الوجهة التصديرية الأولى بنظام QIZ المعفى من الجمارك، تليها أوروبا بـ 689 مليون دولار",
      growthNoteEn: "Top export destination under duty-free QIZ, followed by Europe ($689M)",
    },
    {
      id: "kpi-eg-population-demand",
      labelAr: "القاعدة السكانية الاستهلاكية",
      labelEn: "Domestic Consumer Base",
      value: "105.9",
      unit: "مليون نسمة",
      source: "CAPMAS / World Bank",
      referenceYear: "2025",
      growthNoteAr: "سوق محلي ضخم ومتنوع يولد طلبًا سنويًا على الملابس يتجاوز 5.2 مليار دولار",
      growthNoteEn: "Massive domestic retail market generating $5.2B+ annual apparel retail spend",
    },
    {
      id: "kpi-eg-top-supplier-china",
      labelAr: "حصة المورد الأول للواردات (الصين)",
      labelEn: "Top Import Supplier Share (China)",
      value: "33.84%",
      unit: "98.82M USD",
      source: "WITS Derived Dataset",
      referenceYear: "2023",
      growthNoteAr: "تليها تركيا بقيمة 78.29 مليون دولار (26.81%) وبنغلاديش بـ 38.08 مليون دولار (13.04%)",
      growthNoteEn: "Followed by Türkiye ($78.29M / 26.81%) and Bangladesh ($38.08M / 13.04%)",
    },
    {
      id: "kpi-eg-vat-standard",
      labelAr: "ضريبة القيمة المضافة العامة (VAT)",
      labelEn: "Standard Value Added Tax",
      value: "14%",
      unit: "مطبقة نظاميًا",
      source: "Egyptian Tax Authority (Law 67/2016)",
      referenceYear: "2026",
      growthNoteAr: "تطبق على مبيعات الملابس المحلية والواردات، مع تعليق للآلات الرأسمالية الصناعية",
      growthNoteEn: "Applied to domestic clothing sales & imports; deferred for capital machinery",
    },
    {
      id: "kpi-eg-strategic-score",
      labelAr: "تقييم الفرصة الشاملة لمجموعة سامي بن عياد",
      labelEn: "SBA Strategic Opportunity Score",
      value: "94/100",
      unit: "Tier 1 Anchor",
      source: "SBA Multi-Factor Matrix",
      referenceYear: "2026",
      growthNoteAr: "المرتبة #1 عربيًا: مركز التوريد والتصنيع المحلي وشبكة شراكات التجزئة والزي الموحد",
      growthNoteEn: "Rank #1: Core manufacturing base, domestic retail brand supply, & uniform contracts",
    },
  ],

  charts: [
    {
      id: "chart-egy-imports-wits-split",
      type: "bar",
      titleAr: "واردات مصر الجمركية من الملابس الجاهزة 2023 (مليون دولار — WITS)",
      titleEn: "Egypt Customs Apparel Imports 2023 by HS Chapter (USD Million — WITS)",
      source: "World Bank WITS / UN Comtrade (2023 Reporter: Egypt)",
      referenceYear: "2023",
      unit: "USD Million",
      items: [
        { labelAr: "HS 61 (مصنرات وتريكو)", labelEn: "HS 61 (Knitted & Crocheted)", value: 114.69 },
        { labelAr: "HS 62 (أقمشة منسوجة)", labelEn: "HS 62 (Woven Apparel)", value: 177.37 },
        { labelAr: "إجمالي الملابس الجاهزة", labelEn: "Total Documented Apparel Imports", value: 292.06 },
      ],
      categories: ["HS 61 (مصنرات وتريكو)", "HS 62 (منسوجات)", "إجمالي الملابس الجاهزة"],
      series: [
        {
          name: "قيمة الواردات",
          nameAr: "قيمة الواردات الجمركية",
          nameEn: "Customs Import Value",
          data: [114.69, 177.37, 292.06],
        },
      ],
    },
    {
      id: "chart-egy-import-supplier-shares",
      type: "bar",
      titleAr: "حصص كبار الموردين في واردات الملابس الجاهزة لمصر 2023 (مليون دولار)",
      titleEn: "Leading Apparel Import Suppliers to Egypt 2023 (USD Million — Derived HS61+HS62)",
      source: "Derived WITS Partner Dataset (HS61 + HS62 Combined)",
      referenceYear: "2023",
      unit: "USD Million",
      items: [
        { labelAr: "الصين", labelEn: "China", value: 98.82 },
        { labelAr: "تركيا", labelEn: "Türkiye", value: 78.29 },
        { labelAr: "بنغلاديش", labelEn: "Bangladesh", value: 38.08 },
        { labelAr: "الإمارات", labelEn: "UAE", value: 12.60 },
        { labelAr: "فيتنام", labelEn: "Vietnam", value: 8.66 },
        { labelAr: "إيطاليا", labelEn: "Italy", value: 8.29 },
        { labelAr: "الهند", labelEn: "India", value: 8.10 },
        { labelAr: "إندونيسيا", labelEn: "Indonesia", value: 7.54 },
        { labelAr: "البرتغال", labelEn: "Portugal", value: 4.20 },
        { labelAr: "الأردن", labelEn: "Jordan", value: 2.29 },
        { labelAr: "المغرب", labelEn: "Morocco", value: 2.11 },
      ],
      categories: [
        "الصين",
        "تركيا",
        "بنغلاديش",
        "الإمارات",
        "فيتنام",
        "إيطاليا",
        "الهند",
        "إندونيسيا",
        "البرتغال",
        "الأردن",
        "المغرب",
      ],
      series: [
        {
          name: "قيمة التوريد المجمعة",
          nameAr: "القيمة المجمعة (HS61+62)",
          nameEn: "Combined Value",
          data: [98.82, 78.29, 38.08, 12.60, 8.66, 8.29, 8.10, 7.54, 4.20, 2.29, 2.11],
        },
      ],
    },
    {
      id: "chart-egy-goeic-trade-series",
      type: "comparison",
      titleAr: "تطور تجارة الملابس الجاهزة الخارجية لمصر 2023–2025 (هيئة الرقابة على الصادرات والواردات)",
      titleEn: "Egypt Apparel Foreign Trade Trajectory 2023–2025 (GOEIC Data Series)",
      source: "General Organization for Export and Import Control (GOEIC)",
      referenceYear: "2023–2025",
      unit: "USD Million",
      primarySeriesLabelAr: "صادرات الملابس الجاهزة",
      primarySeriesLabelEn: "RMG Exports",
      secondarySeriesLabelAr: "واردات الملابس الجاهزة",
      secondarySeriesLabelEn: "RMG Imports",
      items: [
        { labelAr: "2023", labelEn: "2023", value: 2421, secondaryValue: 262 },
        { labelAr: "2024", labelEn: "2024", value: 2834, secondaryValue: 218 },
        { labelAr: "2025", labelEn: "2025", value: 3394, secondaryValue: 277 },
      ],
      categories: ["2023", "2024", "2025"],
      series: [
        {
          name: "الصادرات الجاهزة (مليون دولار)",
          nameAr: "صادرات الملابس الجاهزة",
          nameEn: "RMG Exports ($M)",
          data: [2421, 2834, 3394],
        },
        {
          name: "الواردات الجاهزة (مليون دولار)",
          nameAr: "واردات الملابس الجاهزة",
          nameEn: "RMG Imports ($M)",
          data: [262, 218, 277],
        },
      ],
    },
    {
      id: "chart-egy-export-destinations",
      type: "bar",
      titleAr: "التوزيع الجغرافي لصادرات الملابس المصرية لعام 2024 (مليون دولار)",
      titleEn: "Egypt RMG Export Destinations Breakdown 2024 (USD Million)",
      source: "Apparel Export Council of Egypt (AEC)",
      referenceYear: "2024",
      unit: "USD Million",
      items: [
        { labelAr: "الولايات المتحدة (بروتوكول QIZ)", labelEn: "United States (QIZ Protocol)", value: 1190 },
        { labelAr: "دول الاتحاد الأوروبي", labelEn: "European Union Markets", value: 689 },
        { labelAr: "تركيا", labelEn: "Türkiye", value: 242 },
        { labelAr: "الدول العربية وبقية الأسواق", labelEn: "Arab World & Rest of World", value: 713 },
      ],
      categories: [
        "الولايات المتحدة (QIZ)",
        "دول الاتحاد الأوروبي",
        "تركيا",
        "الدول العربية وبقية الأسواق",
      ],
      series: [
        {
          name: "قيمة الصادرات",
          nameAr: "حجم الصادرات",
          nameEn: "Export Value",
          data: [1190, 689, 242, 713],
        },
      ],
    },
    {
      id: "chart-egy-cluster-distribution",
      type: "bar",
      titleAr: "التوزيع الجغرافي للشركات والمصانع في التجمعات الصناعية المصرية الرئيسية",
      titleEn: "Industrial Cluster Activity & Manufacturing Distribution Index",
      source: "AmCham Egypt & Industrial Development Authority (IDA)",
      referenceYear: "2025",
      unit: "%",
      items: [
        { labelAr: "العاشر من رمضان", labelEn: "10th of Ramadan City", value: 28 },
        { labelAr: "المحلة الكبرى", labelEn: "El Mahalla El Kubra", value: 22 },
        { labelAr: "الإسكندرية وبرج العرب", labelEn: "Alexandria & Borg El Arab", value: 18 },
        { labelAr: "السادس من أكتوبر", labelEn: "6th of October City", value: 12 },
        { labelAr: "مدينة السادات", labelEn: "Sadat City", value: 8 },
        { labelAr: "العبور والقليوبية", labelEn: "Obour City & Qalyubia", value: 6 },
        { labelAr: "كفر الدوار", labelEn: "Kafr El Dawar", value: 4 },
        { labelAr: "المنطقة الاقتصادية لقناة السويس (SCZone)", labelEn: "SCZone", value: 2 },
      ],
      categories: [
        "العاشر من رمضان",
        "المحلة الكبرى",
        "الإسكندرية وبرج العرب",
        "السادس من أكتوبر",
        "مدينة السادات",
        "العبور والقليوبية",
        "كفر الدوار",
        "المنطقة الاقتصادية لقناة السويس",
      ],
      series: [
        {
          name: "الكثافة الصناعية",
          nameAr: "الوزن النسبي للطاقة الإنتاجية %",
          nameEn: "Production Capacity Weight %",
          data: [28, 22, 18, 12, 8, 6, 4, 2],
        },
      ],
    },
  ],

  tables: [
    {
      id: "tbl-egy-wits-baseline",
      titleAr: "جدول واردات مصر من الملابس الجاهزة لعام 2023 (WITS / UN Comtrade)",
      titleEn: "Egypt-Reported Finished Apparel Imports 2023 (WITS / UN Comtrade)",
      unit: "USD Million",
      source: "WITS / UN Comtrade (Egypt Reporter, Imports from World)",
      referenceYear: "2023",
      columnsAr: ["بند النظام المنسق (HS)", "الوصف التجاري للبند", "قيمة الواردات الجمركية", "النسبة من الإجمالي"],
      columnsEn: ["HS Chapter", "Commodity Description", "Customs Import Value", "Share %"],
      rows: [
        ["HS 61", "ألبسة وتوابع ألبسة من مصنّرات أو كروشيه (تريكو ومحبوك)", "114,690,700 دولار ($114.69M)", "39.27%"],
        ["HS 62", "ألبسة وتوابع ألبسة من غير المصنّرات أو الكروشيه (منسوجة)", "177,369,560 دولار ($177.37M)", "60.73%"],
        ["الإجمالي (HS61 + HS62)", "إجمالي واردات الملابس الجاهزة النهائية الجمركية", "292,060,260 دولار ($292.06M)", "100.00%"],
      ],
    },
    {
      id: "tbl-egy-supplier-ranking",
      titleAr: "خريطة كبار موردي الملابس الجاهزة لمصر لعام 2023 (مجمعة من فصلي HS61 وHS62)",
      titleEn: "Derived Combined Apparel Import Suppliers to Egypt (2023)",
      unit: "USD Million",
      source: "Derived WITS Partner Dataset (Combined HS61 + HS62 Values)",
      referenceYear: "2023",
      columnsAr: ["الترتيب", "الدولة الموردة", "القيمة المجمعة (مليون دولار)", "الحصة السوقية من الواردات", "ملاحظة المورد والتصنيف التجاري"],
      columnsEn: ["Rank", "Supplier Country", "Combined Value ($M)", "Import Market Share %", "Trade & Sourcing Note"],
      rows: [
        ["1", "الصين (China)", "98.82", "33.84%", "المورد المهيمن في الملابس الاقتصادية والرياضية والأقمشة المصنعة"],
        ["2", "تركيا (Türkiye)", "78.29", "26.81%", "توريد أزياء وسلاسل تجزئة راقية وماركات كاجوال سريعة بموجب اتفاقية التجارة الحرة"],
        ["3", "بنغلاديش (Bangladesh)", "38.08", "13.04%", "توريد كميات أساسية ضخمة من التيشيرتات والجينز والبناطيل القطنية بأسعار منافسة"],
        ["4", "الإمارات العربية المتحدة (UAE)", "12.60", "4.31%", "مركز إعادة تصدير وتوزيع إقليمي للعلامات الدولية عبر جبل علي"],
        ["5", "فيتنام (Vietnam)", "8.66", "2.97%", "توريد ملابس رياضية ومصنوعات دقيقة وألبسة ألياف صناعية"],
        ["6", "إيطاليا (Italy)", "8.29", "2.84%", "توريد أزياء رجالية راقية، وبدلات رسمية، وماركات فاخرة للمولات الكبرى"],
        ["7", "الهند (India)", "8.10", "2.77%", "توريد منتجات قطنية وألبسة خفيفة وأقمشة ملابس تكميلية"],
        ["8", "إندونيسيا (Indonesia)", "7.54", "2.58%", "توريد ملابس بوليستر وأزياء نسائية ومحبوكات منزلية"],
        ["9", "البرتغال (Portugal)", "4.20", "1.44%", "توريد محبوكات أوروبية فاخرة وقمصان راقية"],
        ["10", "الأردن (Jordan)", "2.29", "0.78%", "تبادل تجاري معفى جمركيًا بموجب اتفاقية أغادير وGAFTA"],
        ["11", "المغرب (Morocco)", "2.11", "0.72%", "ملابس منسوجة وأزياء مشتركة ضمن اتفاقية أغادير"],
        ["-", "بقية دول العالم", "23.08", "7.90%", "إمدادات متفرقة تشمل إسبانيا وفرنسا وباكستان وألمانيا"],
        ["المجموع", "إجمالي واردات الملابس الجاهزة", "292.06", "100.00%", "أساس المقارنة الجمركي المعتمد رسميًا"],
      ],
    },
    {
      id: "tbl-egy-goeic-series",
      titleAr: "سلسلة بيانات الهيئة العامة للرقابة على الصادرات والواردات (GOEIC) لتجارة الملابس (2023–2025)",
      titleEn: "GOEIC Official Ready-Made Garments Trade Series (2023–2025)",
      unit: "USD Million / Billion",
      source: "الهيئة العامة للرقابة على الصادرات والواردات (GOEIC) / المجلس التصديري للملابس الجاهزة",
      referenceYear: "2023–2025",
      columnsAr: ["السنة المالية", "واردات الملابس الجاهزة (مليون دولار)", "صادرات الملابس الجاهزة (مليار دولار)", "معدل النمو السنوي للصادرات %", "صافي الميزان التجاري لقطاع الملابس"],
      columnsEn: ["Year", "RMG Imports ($M)", "RMG Exports ($B)", "Export Growth YoY %", "Trade Balance ($)"],
      rows: [
        ["2023", "262 مليون دولار", "2.421 مليار دولار", "خط الأساس المعتمد", "+2.159 مليار دولار (فائض)"],
        ["2024", "218 مليون دولار", "2.834 مليار دولار", "+17.06% نمو سنوي", "+2.616 مليار دولار (فائض)"],
        ["2025", "277 مليون دولار", "3.394 مليار دولار", "+19.76% (نحو +20%)", "+3.117 مليار دولار (فائض قياسي)"],
      ],
    },
    {
      id: "tbl-egy-export-destinations",
      titleAr: "الأسواق التصديرية الرئيسية للملابس الجاهزة المصرية لعام 2024",
      titleEn: "Egypt RMG Export Destinations Breakdown (2024)",
      unit: "USD Million / Billion",
      source: "المجلس التصديري للملابس الجاهزة (AEC) / وزارة الاستثمار والتجارة الخارجية",
      referenceYear: "2024",
      columnsAr: ["السوق المستورد", "قيمة الصادرات المصرية", "الحصة من الصادرات %", "الإطار الاتفاقي والمزايا التفضيلية"],
      columnsEn: ["Importing Market", "Egyptian Export Value", "Share %", "Trade Agreement / Framework"],
      rows: [
        ["الولايات المتحدة الأمريكية", "1.19 مليار دولار ($1,190M)", "41.99%", "بروتوكول الكويز (QIZ) — إعفاء جمركي بنسبة 100% بشرط المكون الإسرائيلي 10.5%"],
        ["الاتحاد الأوروبي", "689 مليون دولار ($689M)", "24.31%", "اتفاقية الشراكة المصرية الأوروبية — إعفاء كامل مع قواعد المنشأ الأورومتوسطية (EUR.1)"],
        ["تركيا", "242 مليون دولار ($242M)", "8.54%", "اتفاقية التجارة الحرة الثنائية بين مصر وتركيا (سارية منذ 2007)"],
        ["الدول العربية وإفريقيا وبقية العالم", "713 مليون دولار ($713M)", "25.16%", "اتفاقيات GAFTA والكوميسا والمناطق الحرة العربية"],
        ["الإجمالي", "2.834 مليار دولار ($2,834M)", "100.00%", "إجمالي صادرات الملابس الجاهزة المصرية لعام 2024"],
      ],
    },
    {
      id: "tbl-egy-industrial-clusters",
      titleAr: "خريطة التجمعات والمناطق الصناعية للغزل والنسيج والملابس في مصر",
      titleEn: "Major Textile & RMG Industrial Clusters in Egypt",
      unit: "تحليل هيكلي ميداني",
      source: "غرفة صناعة الملابس الجاهزة باتحاد الصناعات المصرية / AmCham Egypt (April 2026)",
      referenceYear: "2025–2026",
      columnsAr: ["التجمع الصناعي", "الطبيعة الإنتاجية والتخصص", "نوعية الشركات", "الموقع واللوجستيات", "الأهمية الاستراتيجية لمجموعة سامي بن عياد"],
      columnsEn: ["Industrial Cluster", "Core Production Specialization", "Company Mix", "Logistics & Location", "Strategic Value to SBA"],
      rows: [
        ["العاشر من رمضان (10th of Ramadan)", "التجمع الصناعي الأكبر في مصر لإنتاج التريكو، المحبوكات، الصباغة، والملابس الجاهزة المصدرة", "مصانع قطاع خاص كبرى واستثمارات أجنبية ومحلية متكاملة", "قرب مباشر من القاهرة وميناء السخنة والموانئ الجافة", "قاعدة التوريد الرئيسية للشراكات والتصنيع المشترك وتوفير الأقمشة المصبوغة"],
        ["المحلة الكبرى (El Mahalla El Kubra)", "العاصمة التاريخية لصناعة الغزل والنسيج القطني والمفروشات المنزلية وأقمشة القمصان", "شركة مصر للغزل والنسيج (مجمع غزل 1 العملاق) ومئات مصانع القطاع الخاص", "وسط الدلتا، ارتباط بشبكات النقل الداخلي", "مصدر الغزول القطنية والأقمشة المنسوجة والمفروشات المنزلية وبرامج التطوير الحكومي"],
        ["الإسكندرية وبرج العرب (Alexandria & Borg El Arab)", "تجمع تصديري عملاق للملابس المنسوجة (القمصان، البناطيل، الدنيم) ومصانع القماش الدائري", "شركات تصدير كبرى واستثمارات أجنبية ومناطق حرة خاصة وعامة", "ملاصقة لأكبر ميناءين بحريين (ميناء الإسكندرية والدخيلة)", "بوابة الشحن البحري الأسرع للتصدير الأوروبي والعربي، وإمكانات عقود CMT مرنة"],
        ["السادس من أكتوبر (6th of October)", "مصانع متطورة للملابس الرياضية، الكاجوال، الجينز، والأزياء العالمية المرخصة", "استثمارات تركية وأوروبية وعربية ومصانع حديثة مؤتمتة", "غرب القاهرة، قرب من الميناء الجاف بـ 6 أكتوبر ومطار سفنكس", "مركز للتعاقد على الملابس الرياضية المتطورة وبرامج الـ Private Label الفاخرة"],
        ["مدينة السادات (Sadat City)", "صناعات غزل خيوط الألياف الصناعية، الصباغة والتجهيز، والمنسوجات غير المنسوجة", "مجمعات نسيجية كبرى واستثمارات صينية ومحلية حديثة", "طريق القاهرة - الإسكندرية الصحراوي، سهولة ربط بين الدلتا والإسكندرية", "تأمين مدخلات الأقمشة المخلوطة والبوليستر وخامات البطانات والإكسسوارات"],
        ["مدينة العبور والقليوبية (Obour City & Qalyubia)", "مصانع ومشاغل ماركات الأزياء المحلية، ومطابع الأقمشة، والتطريز والتشطيب اللوجستي", "ماركات تجزئة محلية ومشاغل متخصصة وشركات زي موحد ومطابع سلك سكرين وديجيتال", "ملاصقة مباشرة للعاصمة والأسواق المركزية بشبرا الخيمة والعتبة والمهندسين", "الشريك الأنسب للتوريد السريع لماركات التجزئة المحلية وتوزيع الزي الموحد للشركات"],
        ["كفر الدوار (Kafr El Dawar)", "مجمعات الغزل الرفيع، الأقمشة القطنية المنسوجة، والصباغة والتجهيز المتخصصة", "شركات قطاع عام مطورة (مصر لصباغة البيضا) ومصانع نسيج عريقة", "قرب مباشر من الإسكندرية (20 كم)", "الاستفادة من طاقات التجهيز والصباغة للأقمشة القطنية الفاخرة"],
        ["المنطقة الاقتصادية لقناة السويس (SCZone)", "تجمعات تصديرية حديثة موجهة للأسواق العالمية (منطقة تيدا الصينية والقنطرة غرب)", "استثمارات صينية وتركية ضخمة بنظام المناطق الاقتصادية الخاصة ذات الحوافز الضريبية", "موانئ شرق وغرب بورسعيد وميناء السخنة على الممر الملاحي العالمي", "منصة مستقبلية للشراكات مع كبار المصنعين الدوليين والتصنيع المشترك لإعادة التصدير"],
      ],
    },
    {
      id: "tbl-egy-product-matrix",
      titleAr: "مصفوفة الفرص التجارية والمنتجات لمجموعة سامي بن عياد في السوق المصري",
      titleEn: "SBA Product Opportunity & Competitiveness Matrix — Egypt",
      unit: "مصفوفة منتجات متكاملة",
      source: "SBA Product Architecture & Field Sourcing Intelligence",
      referenceYear: "2026",
      columnsAr: ["فئة المنتج", "رمز HS المحقق", "شريحة الطلب السوقي", "شواهد الاستيراد والمنافسة المحلية", "المشترون المستهدفون", "المتطلبات التقنية والمعدات", "النموذج التجاري وملاءمة SBA"],
      columnsEn: ["Product Category", "HS Code", "Market Demand Segment", "Import Evidence & Local Comp.", "Target Buyers", "Technical Specs & Machinery", "Commercial Model & SBA Fit"],
      rows: [
        ["التيشيرتات القطنية الأساسية (Basic T-Shirts)", "6109.10", "كاجوال يومي، شبابي، أساسي لكافة الأعمار", "استيراد 20M$+ من بنغلاديش والصين، ومنافسة محلية كبرى من مصانع العاشر والمحلة", "سلاسل التجزئة المحلية، منصات التجارة الإلكترونية، شركات التوزيع بالجملة", "سنجل جيرسي 100% قطن ممشط (160–180 جم/م²)، ماكينات أوفرلوك 4 خيط وسنجر", "Private Label وتوريد مباشر بالجملة | ملاءمة قصوى لـ SBA (Core Fit)"],
        ["قمصان البولو (Polo Shirts)", "6105.10", "كاجوال راقٍ، زي عمل موحد، ملابس نوادي وجامعات", "استيراد ماركات تركية وصينية، وطلب مرتفع لدى سلاسل الأزياء المحلية", "سلاسل التجزئة (Concrete, Tie House, Town Team) وشركات الزي الموحد", "قماش بيكيه قطني (200–240 جم/م²)، ياقات وأساور محبوكة مسبقة، تطريز كمبيوتري", "تصنيع تعاقدي OEM وعلامات خاصة | ملاءمة استراتيجية مرتفعة جدًا"],
        ["القمصان الرجالية المنسوجة (Men's Woven Shirts)", "6205.20", "ملابس عمل رسمية وكاجوال شيميز وأعياد", "منافسة من القمصان التركية والإيطالية وماركات محلية عريقة مثل BTM وConcrete", "متاجر البدلات والقمصان وسلاسل التجزئة الرجالية المتخصصة", "أقمشة قطنية منسوجة 100% وبوبلين وتويل، ماكينات ياقات أوتوماتيكية، مكابس حشو", "عقود Private Label وتوريد للعلامات المرموقة | ملاءمة مؤكدة"],
        ["البناطيل القطنية والجبردين (Cotton Trousers & Chinos)", "6203.42", "كاجوال ورسمي خفيف، زي موحد للشركات", "استيراد ملابس منسوجة HS62 بقيمة 177.4M$ وطلب مستمر على مقاسات الشينو", "متاجر التجزئة وموردي ملابس الشركات ومحلات التوزيع الكبرى", "أقمشة تويل وجبردين قطني مخلوط بإيلاستين، ماكينات تطريز الجيوب والسحابات", "برامج توريد سنوية وعقود كاجوال للماركات | ملاءمة مرتفعة"],
        ["الملابس النسائية الكاجوال والفساتين", "6204.62 / 6104.62", "أزياء محتشمة، عباءات، كاجوال يومي، فساتين منزلية وخروج", "حجم استهلاك ضخم مع استيراد تركي وإماراتي وصيني متزايد", "سلاسل التجزئة النسائية والمولات ومنصات التجارة الرقمية", "أقمشة فيسكوز، قطن، كتان مخلوط، شيفون، ماكينات درابيه وخياطة حساسة", "مجموعات موسمية وتصنيع سريع للماركات المحلية | فرصة نوعية"],
        ["ملابس الأطفال والمواليد (Kidswear & Babywear)", "6111.20 / 6209.20", "مواليد، أطفال حتى 14 سنة، أعياد ومناسبات", "دراسة الجدوى الأولية للهيئة العامة للاستثمار (GAFI - Nov 2024) كمرجع استثماري", "سلاسل التجزئة ومحلات الأطفال وماركات العائلة والموزعون", "قطن طبيعي ناعم ومضاد للحساسية ومطابق للمواصفات الصحية وشهادات الأمان للأزرار", "Private Label وتوريد حزم اقتصادية وراقية | ملاءمة استثنائية"],
        ["السويت شيرت والملابس الشتوية (Sweatshirts & Fleece)", "6110.20", "كاجوال شتوي، موضة جامعية، سترات بغطاء للرأس (Hoodies)", "طلب موسمي ذروي من أكتوبر حتى فبراير ومنافسة تركية ومحلية", "العلامات الشبابية، ومتاجر الجامعات، ومواقع البيع الإلكتروني", "أقمشة ميلتون قطنية مبطنة (280–360 جم/م²)، طباعة سلك سكرين وديجيتال DTF", "إنتاج مسبق بحزم تعاقدية موسمية | ملاءمة ممتازة"],
        ["الملابس الرياضية (Sportswear & Activewear)", "6112.12 / 6114.30", "أندية رياضية، لياقة بدنية، كاجوال رياضي", "استيراد خامات الألياف الصناعية وماركات عالمية بنوكلاء محليين", "سلاسل التجزئة الرياضية، الأندية الخاصة، ومراكز التدريب", "أقمشة بوليستر مطاطية ومثقبة للتنفس (Dry-Fit)، ماكينات درز مسطح Flatlock", "عقود توريد للأندية والماركات الرياضية الصاعدة | ملاءمة تدريجية"],
        ["الملابس الداخلية ومنتجات النوم (Underwear & Homewear)", "6107 / 6108", "بوكسرات، فانلات داخلية، بيجامات منزلية ولانجري قطني", "سوق ضخم تسيطر عليه كبرى العلامات المحلية (Dice, KABO, قطونيل، الإمبراطور)", "الهايبرماركت، محلات الملابس المنزلية، سلاسل الصيدليات الكبرى", "أقمشة قطنية ممشطة ذات ملمس حريري ومطاط مريح وتطريز فاخر", "التركيز على شريحة الفخامة (Luxury Combed Cotton) والـ Private Label الفاخر"],
        ["الزي الموحد للشركات والمصانع (Corporate & Industrial Uniforms)", "6203.22 / 6211.32", "أفرولات عمل، بدل أمن وحراسة، سترات صيانة", "طلب مؤسسي مستمر ومتكرر من المشروعات القومية والمصانع والمقاولات", "شركات المقاولات، مجمعات المصانع، شركات الأمن والحراسة، الموانئ", "أقمشة دك قطنية معالجة ومقاومة للاحتكاك، جيوب متعددة، شرائط عاكسة للضوء", "عقود مناقصات وتوريد مؤسسي مباشر | ميزة تنافسية كبرى لـ SBA"],
        ["الزي الطبي والمستشفيات (Medical Scrubs & Lab Coats)", "6211.42", "سكراب طبي، بالطو أطباء، أزياء تمريض، أغطية جراحية", "طلب متكرر من المستشفيات الحكومية والخاصة والمراكز الطبية", "مجموعات المستشفيات الخاصة (كليوباترا، دار الفؤاد)، المعامل، والصيدليات", "أقمشة مضادة للبكتيريا والسوائل ومعالجة ضد التجعد والكلور والغسيل الحراري", "عقود توريد دورية سنوية بأسعار منافسة وجودة فائقة | فرصة عالية"],
        ["زي الضيافة والفنادق والمطاعم (Hospitality & F&B Uniforms)", "6205 / 6204", "بزات شيفات، مرايل خدمة، قمصان ويترز، أزياء استقبال", "أكثر من 1,200 فندق ومنتجع في القاهرة والبحر الأحمر وجنوب سيناء", "سلاسل الفنادق العالمية والمحلية، والمطاعم الكبرى، وشركات التموين", "أقمشة قطنية مخلوطة سهلة الكي ومقاومة للبقع والحرارة، تفصيل أنيق", "عقود سنوية وتوريد مباشر للمجموعات الفندقية | ميزة نوعية"],
      ],
    },
    {
      id: "tbl-egy-target-accounts",
      titleAr: "دليل الحسابات والشركات المستهدفة في مصر (Research Prospects)",
      titleEn: "Egyptian Retail Brands & Corporate Target Account Directory",
      unit: "دليل حسابات بحثية وتجارية مؤهلة",
      source: "السجلات التجارية، المواقع الرسمية، ودراسات سلاسل التجزئة المصرية (AmCham / GAFI)",
      referenceYear: "2026",
      columnsAr: ["اسم الشركة / العلامة التجارية", "طبيعة النشاط وشبكة الفروع", "الفئات والمنتجات الرئيسية", "المقر الرسمي وبيانات الاتصال المعلنة", "حالة التأهيل (Qualification Status)", "فرصة التعاون وملاءمة مجموعة سامي بن عياد"],
      columnsEn: ["Company / Brand Name", "Business Activity & Network", "Core Product Categories", "Headquarters & Public Contacts", "Qualification Status", "SBA Fit & Potential Collaboration"],
      rows: [
        [
          "Concrete Fashion Group (Arafa Holding سابقًا)",
          "مجموعة رائدة في الأزياء الراقية والبدلات والقمصان تمتلك شبكة فروع Concrete وعمليات يوروميد (Euromed) لليونيفورم وتجارة الجملة",
          "بدلات رسمية، قمصان كلاسيك وكاجوال، تيشيرتات بولو قطنية، بناطيل شينو وجينز، وزي موحد للمؤسسات",
          "القاهرة، مصر | الموقع الرسمي: https://concretefashiongroup.com/ | البريد: ir@concretefashiongroup.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "تصنيع تعاقدي وبنود تريكو كاجوال وبرامج توريد يونيفورم متبادلة مع Euromed"
        ],
        [
          "TIE HOUSE (تاي هاوس)",
          "واحدة من أوسع سلاسل تجزئة الأزياء الرجالية انتشارًا في مصر بأكثر من 100 فرع في كافة المحافظات",
          "قمصان رجالية كلاسيك وكاجوال، تيشيرتات بولو، بناطيل قطن وجبردين وجينز، إكسسوارات رجالية وبدلات",
          "مدينة نصر، القاهرة | الموقع الرسمي: https://tie-house.com/ | خدمة العملاء: 19890 | care@tie-house.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "عقود Private Label وتوريد تشكيلات التيشيرتات والبولو والقمصان القطنية المنسوجة"
        ],
        [
          "DeFacto Egypt (ديفاكتو مصر)",
          "شبكة تجزئة دولية كبرى للأزياء الكاجوال بانتشار واسع في كبرى المولات والمحافظات المصرية وموقع تجارة إلكترونية نشط",
          "أزياء كاجوال متكاملة للرجال والنساء والأطفال، ملابس رياضية وترينجات ومحبوكات يومية",
          "التجمع الخامس، القاهرة الكبرى | الموقع الرسمي: https://www.defacto.com.eg/ | support@defacto.com",
          "Research Prospect (جهة اتصال بحثية)",
          "فرص التوريد المحلي (Local Sourcing) للقطع القطنية الأساسية لتقليل تكلفة الاستيراد والجمارك"
        ],
        [
          "LC Waikiki Egypt (إل سي وايكيكي مصر)",
          "الشبكة الأكبر لملابس العائلة في مصر بأكثر من 40 متجرًا عملاقًا في القاهرة والإسكندرية والدلتا والصعيد",
          "ملابس أطفال، رضع، كاجوال رجالي ونسائي، ملابس منزلية وبيجامات، وأحذية وإكسسوارات",
          "مكاتب التجمع، القاهرة | الموقع المؤسسي: https://corporate.lcwaikiki.com/ | info@lcwaikiki.com",
          "Research Prospect (جهة اتصال بحثية)",
          "توريد محلي لملابس الأطفال والقطنيات الأساسية بالاستفادة من سرعة الاستجابة اللوجستية"
        ],
        [
          "Town Team (تاون تيم)",
          "سلسلة أزياء شبابية مصرية سريعة التوسع بأكثر من 120 فرعًا ومصانع تابعة ومبيعات إلكترونية قوية",
          "تيشيرتات كاجوال، قمصان بولو، سويت شيرت وهوديز، بناطيل جبردين وسويت بانتس وشورتات",
          "القاهرة، مصر | الموقع الرسمي: https://townteam.com/ | خدمة العملاء: 15446 | info@townteam.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "توريد أقمشة ومحبوكات قطنية ودعم الطاقات الإنتاجية في المواسم الذروية (رمضان وعيد الفطر)"
        ],
        [
          "BTM & Marie Louis (مجموعة بشارة للأزياء)",
          "صرح صناعي وتجاري عريق في تصنيع وتجزئة الملابس الرجالية والنسائية واليونيفورم الراقي",
          "بدلات رجالية، قمصان كلاسيكية فاخرة، أزياء نسائية راقية (Marie Louis)، زي موحد فندقي وطبي",
          "مدينة العاشر من رمضان / القاهرة | الموقع الرسمي: https://marielouis.net/ | contact@marielouis.net",
          "Commercially Qualified (مؤهلة تجاريًا للتفاوض)",
          "شراكات تكامل إنتاجي في الأقمشة القطنية وتوريد مستلزمات الملابس الجاهزة والزي الموحد"
        ],
        [
          "Carina Wear (كارينا وير)",
          "العلامة الأولى في مصر للملابس الأساسية النسائية والـ Bodywear والملابس القطنية المريحة",
          "ملابس أساسية (Basics)، ملابس نوم، بيجامات، توبس، كولونات، وأزياء قطنية نسائية",
          "المنطقة الحرة، القاهرة | الموقع الرسمي: https://carinawear.com/ | care@carinawear.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "عقود تصنيع للغير لخطوط البيجامات والملابس القطنية الصيفية الممشطة"
        ],
        [
          "Dice Sport & Casual Wear (دايس للملابس الجاهزة)",
          "واحدة من أكبر شركات الملابس والملابس الداخلية في مصر بانتشار تجزئة وجملة وشبكة تصدير دولية",
          "ملابس داخلية قطنية، كاجوال رجالي وأطفالي، ملابس نوم، أقمشة مصبوغة وتريكو",
          "القاهرة، مصر | كود البورصة: DSCW.CA | الموقع الرسمي: https://dicefashion.net/ | info@dicefashion.net",
          "Commercially Qualified (مؤهلة تجاريًا)",
          "توريد أقمشة متخصصة، وتبادل طلبيات التصدير، والتعاقد على الملابس الرياضية"
        ],
        [
          "Ravin (رافين للأزياء)",
          "ماركة كاجوال مصرية شبابية رائدة بأسلوب عصري ومتاجر متعددة في المولات الكبرى",
          "ملابس كاجوال شبابية، جينز، تيشيرتات مطبوعة، هوديز وسترات شتوية عصرية",
          "مصر الجديدة، القاهرة | الموقع الرسمي: https://ravin.com/ | customercare@ravin.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "عقود Private Label للتيشيرتات المطبوعة والملابس الشتوية الفليس"
        ],
        [
          "Club Aldo (كلوب ألدو)",
          "شبكة تجزئة كاجوال وإكسسوارات وأحذية وملابس عصرية للشباب والفتيات في محافظات مصر",
          "تيشيرتات كاجوال، بناطيل قطنية، أحذية، حقائب، جواكت كاجوال خفيفة",
          "القاهرة، مصر | الموقع الرسمي: https://clubaldo.com/ | info@clubaldo.com",
          "Research Prospect (جهة اتصال بحثية)",
          "توريد التشكيلات القطنية الأساسية لمجموعات الصيف والعودة للمدارس"
        ],
        [
          "مجموعة ماجد الفطيم للتجزئة (كارفور مصر — Private Label Apparel)",
          "الشبكة الأكبر للهايبرماركت ومتاجر التجزئة الكبرى في مصر التي تطرح علامات ملابس اقتصادية خاصة (MyStyle)",
          "حزم ملابس أطفال قطنية، ملابس نوم وبيجامات، تيشيرتات أساسية، ملابس رياضية اقتصادية",
          "المعادي، القاهرة الكبرى | الموقع الرسمي: https://www.carrefouregypt.com/ | sourcing@mafcarrefour.com",
          "Commercially Qualified (مؤهلة للمناقصات والتوريد)",
          "مناقصات تصنيع العلامات التجارية الخاصة (Store Brands) بعقود توريد موسمية ضخمة"
        ],
        [
          "سبينيس مصر (Spinneys Egypt — Private Label)",
          "سلسلة هايبرماركت وسوبرماركت راقية تتوسع في الملابس المنزلية والقطنيات الأساسية ذات الجودة الفائقة",
          "فانلات قطنية، بيجامات، مناشف ومفروشات، حزم ملابس أطفال داخلية",
          "الشيخ زايد، الجيزة | الموقع الرسمي: https://spinneys-egypt.com/ | procurement@spinneys-egypt.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "توريد حزم القطنيات الفاخرة وملابس المنزل بعقود توريد مستدامة"
        ],
        [
          "مجموعة مستشفيات كليوباترا (Cleopatra Hospitals Group)",
          "أكبر شبكة رعاية صحية ومستشفيات خاصة في مصر تضم مستشفيات كليوباترا، النيل بدراوي، الشروق، والكاتب",
          "سكراب طبي للأطباء والتمريض، بالطو المعامل، ملاءات وأغطية أسرة طبية قطنية، ملابس عمليات",
          "مصر الجديدة، القاهرة | الموقع الرسمي: https://cleopatrahospitals.com/ | procurement@cleopatrahospitals.com",
          "Commercially Qualified (مؤهلة لقطاع اليونيفورم الطبي)",
          "عقود توريد وتصنيع الزي الطبي الموحد والمفروشات الصحية المطابقة لمعايير التعقيم"
        ],
        [
          "المقاولون العرب (عثمان أحمد عثمان وشركاه — إدارة المشتريات المركزية)",
          "عملاق التشييد والبناء المصري العامل به أكثر من 70,000 مهندس وفني وعامل في مشروعات قومية ودولية",
          "أفرولات عمل قطنية ثقيلة، سترات سلامة عاكسة، قمصان وبناطيل عمل صيفية وشتوية",
          "مدينة نصر، القاهرة | الموقع الرسمي: https://arabcont.com/ | procurement@arabcont.com",
          "Commercially Qualified (مؤهلة لليونيفورم الصناعي)",
          "مناقصات التوريد المركزي للملابس المهنية وأزياء السلامة الصناعية المعالجة"
        ],
        [
          "أوراسكوم للإنشاءات (Orascom Construction)",
          "شركة مقاولات هندسية رائدة تنفذ أضخم مشروعات البنية التحتية والنقل والمدن الجديدة",
          "زي العمل الميداني، سترات السلامة، بدلات الصيانة، قمصان مهندسي المواقع",
          "أبراج نايل سيتي، بولاق، القاهرة | الموقع الرسمي: https://orascom.com/ | supplychain@orascom.com",
          "Contact Details Verified (جهة اتصال بحثية مؤهلة)",
          "توريد أزياء العمل الميداني عالية المتانة والمطابقة لاشتراطات السلامة والبيئة"
        ],
      ],
    },
    {
      id: "tbl-egy-customs-compliance",
      titleAr: "منظومة الجمارك والرقابة والضرائب المصرية لاستيراد وتداول الملابس",
      titleEn: "Egyptian Customs, Import Regulation & Tax Compliance Framework",
      unit: "الدليل الإجرائي والتشريعي المعتمد",
      source: "مصلحة الجمارك المصرية، نافذة (NAFEZA)، مصلحة الضرائب، والهيئة العامة للرقابة على الصادرات والواردات (GOEIC)",
      referenceYear: "2026",
      columnsAr: ["المحور التنظيمي", "الاشتراطات والآلية التنفيذية", "المرجع القانوني والمنظومة", "الوثائق والبيانات المطلوبة", "التطبيق على مجموعة سامي بن عياد"],
      columnsEn: ["Regulatory Pillar", "Requirements & Mechanism", "Legal Framework & Portal", "Mandatory Documentation", "Application to SBA Operations"],
      rows: [
        [
          "التسجيل المسبق للشحنات (ACI System)",
          "إلزام الشاحن والمستورد باستخراج الرقم التعريفي المسبق للشحنة (ACID) قبل 48 ساعة من شحن البضائع من بلد التصدير إلى الموانئ البحرية والجوية المصرية",
          "منظومة 'نافذة' القومية (NAFEZA) — الموقع: https://nafeza.gov.eg/en/tariff وقانون الجمارك رقم 207 لسنة 2020",
          "الفاتورة المبدئية، بوليصة الشحن، بيانات المصدر والمستورد، رقم ACID مطبوع على كافة المستندات",
          "إلزامية تسجيل بيانات SBA كمصدر أجنبي على منصة CargoX وتفعيل الحساب الرقمي المعتمد"
        ],
        [
          "سجل المصانع المؤهلة للتصدير (قرار 43/2016)",
          "اشتراط تسجيل المصانع والشركات مالكة العلامات التجارية في سجل هيئة الرقابة على الصادرات والواردات (GOEIC) للسماح بالإفراج عن منتجات الملابس تامة الصنع المستوردة",
          "القرار الوزاري رقم 43 لسنة 2016 وتعديلاته وقانون سجل المستوردين رقم 120 لسنة 1982 وموقع: https://www.goeic.gov.eg/",
          "شهادة تسجيل الكيان القانوني، شهادة جودة (ISO 9001)، رخصة المصنع، قائمة العلامات والمنتجات موثقة من السفارة المصرية",
          "تسجيل مصانع SBA مسبقًا لدى GOEIC لضمان الإفراج السلس للمنتجات تامة الصنع"
        ],
        [
          "التعريفة الجمركية للملابس الجاهزة (Customs Tariffs)",
          "تخضع واردات الملابس الجاهزة تامة الصنع (HS 61 وHS 62) لتعريفة جمركية عامة (MFN) تتراوح بين 30% إلى 40%، بينما تعفى واردات الأقمشة والمستلزمات الصناعية أو تخضع لرسوم مخفضة (5%–10%)",
          "التعريفة الجمركية المنسقة لجمهورية مصر العربية وموقع نافذة للتعريفة الرسمية: https://nafeza.gov.eg/en/tariff",
          "الفاتورة التجارية، شهادة المنشأ المعتمدة، إقرار القيمة الجمركية، كود الصنف HS8/HS10",
          "تطبيق الإعفاء الكامل بموجب اتفاقية GAFTA للمنتجات ذات المنشأ العربي بنسبة قيمة مضافة لا تقل عن 40%"
        ],
        [
          "ضريبة القيمة المضافة (Value Added Tax)",
          "تطبق ضريبة القيمة المضافة العامة بنسبة 14% على القيمة الإجمالية للملابس الجاهزة المستوردة مضافًا إليها الرسوم الجمركية والضريبة الجدولية إن وجدت",
          "قانون الضريبة على القيمة المضافة رقم 67 لسنة 2016 وموقع مصلحة الضرائب المصرية: https://www.eta.gov.eg/",
          "الإقرار الضريبي الشهري، الفاتورة الإلكترونية المعتمدة (منظومة الفاتورة والإيصال الإلكتروني)",
          "سداد 14% عند الإفراج الجمركي للمستورد، وتطبيق الفاتورة الإلكترونية لجميع مبيعات التوريد المحلي"
        ],
        [
          "المطابقة الفنية والمواصفات القياسية (EOS Compliance)",
          "خضوع الشحنات للفحص الظاهري والمخبري للتأكد من مطابقتها للمواصفات القياسية المصرية الإلزامية وخلوها من المواد المسرطنة وأصباغ الآزو والمعادن الثقيلة",
          "الهيئة المصرية العامة للمواصفات والجودة (EOS) والمواصفات القياسية للملابس الجاهزة والتريكو",
          "شهادة فحص ومطابقة صادرة من جهة فحص دولية معتمدة (مثل Intertek أو SGS أو TÜV)",
          "إجراء الفحوصات المعملية قبل الشحن لضمان اجتياز فحص الرقابة على الصادرات والواردات دون احتجاز"
        ],
        [
          "بيانات البطاقة الإلزامية واللغة العربية (Labeling Rules)",
          "إلزامية تثبيت بطاقة قماشية غير قابلة للإزالة باللغة العربية توضح: اسم المصنع، العلامة التجارية، نسبة الألياف (100% قطن)، بلد المنشأ، تعليمات العناية والغسيل، والمقاس",
          "القرار الوزاري رقم 643 لسنة 2020 والقرارات المنظمة لبيانات بطاقة المنسوجات في السوق المصري",
          "عينة بطاقة البيانات باللغة العربية مرفقة بالملف الجمركي",
          "طباعة وتثبيت بطاقة العناية والبيانات المزدوجة (عربي/إنجليزي) متوافقة تمامًا مع القواعد المصرية"
        ],
      ],
    },
    {
      id: "tbl-egy-scenario-calculator",
      titleAr: "حاسبة السيناريوهات والتكاليف التقديرية لتشغيلات الملابس الجاهزة في مصر",
      titleEn: "Apparel Production & Financial Feasibility Scenario Matrix",
      unit: "USD / EGP Breakdown (افتراضات تخطيطية قابلة للتعديل)",
      source: "SBA Financial Engineering Model (GAFI Reference Benchmark November 2024)",
      referenceYear: "2026",
      columnsAr: ["بند التكلفة / المؤشر المالي", "تشغيلة 10,000 قطعة", "تشغيلة 25,000 قطعة", "تشغيلة 50,000 قطعة", "تشغيلة 100,000 قطعة", "ملاحظات التحليل الاقتصادي"],
      columnsEn: ["Cost Element / Indicator", "10,000 Pcs Batch", "25,000 Pcs Batch", "50,000 Pcs Batch", "100,000 Pcs Batch", "Economic Rationale"],
      rows: [
        ["تكلفة القماش الخام والصباغة (Fabric Cost)", "14,500 دولار ($1.45/ق)", "35,000 دولار ($1.40/ق)", "67,500 دولار ($1.35/ق)", "130,000 دولار ($1.30/ق)", "وفر الحجم في شراء الغزول وكميات الصباغة الكبيرة"],
        ["الإكسسوارات ومستلزمات الإنتاج (Trims & Acc.)", "3,500 دولار ($0.35/ق)", "8,250 دولار ($0.33/ق)", "15,500 دولار ($0.31/ق)", "29,000 دولار ($0.29/ق)", "أزرار، خيوط، بطاقات عناية، شريط ياقة، أكياس بولي"],
        ["أجور العمالة والتشغيل والقص (Direct Labor / CMT)", "6,500 دولار ($0.65/ق)", "15,500 دولار ($0.62/ق)", "29,500 دولار ($0.59/ق)", "55,000 دولار ($0.55/ق)", "كفاءة خطوط الإنتاج والإنتاجية العالية للعمالة المصرية المدربة"],
        ["المصروفات العامة والتشغيلية (Overhead & Power)", "2,500 دولار ($0.25/ق)", "5,500 دولار ($0.22/ق)", "10,000 دولار ($0.20/ق)", "18,000 دولار ($0.18/ق)", "طاقة كهربائية، إهلاك الآلات، إشراف، استهلاك منشأة"],
        ["التغليف والتعبئة والكراتين (Packaging & Packing)", "1,200 دولار ($0.12/ق)", "2,750 دولار ($0.11/ق)", "5,000 دولار ($0.10/ق)", "9,000 دولار ($0.09/ق)", "كراتين تصدير 5 طبقات، باركود، فواصل بلاستيكية"],
        ["فحص الجودة والمطابقة (Quality Control & Testing)", "800 دولار ($0.08/ق)", "1,500 دولار ($0.06/ق)", "2,500 دولار ($0.05/ق)", "4,000 دولار ($0.04/ق)", "فحص إبري، اختبار ثبات الصبغة ومطابقة المقاسات"],
        ["النقل اللوجستي الداخلي (Domestic Logistics)", "500 دولار ($0.05/ق)", "1,000 دولار ($0.04/ق)", "1,750 دولار ($0.035/ق)", "3,000 دولار ($0.03/ق)", "نقل شاحنات من مصنع العاشر/المحلة لمخازن العميل بالقاهرة/الموانئ"],
        ["إجمالي تكلفة الإنتاج الصافية (Total Production Cost)", "29,500 دولار ($2.95/ق)", "69,500 دولار ($2.78/ق)", "131,750 دولار ($2.635/ق)", "248,000 دولار ($2.48/ق)", "انخفاض تكلفة الوحدة بنسبة 16% عند مضاعفة التشغيلة"],
        ["سعر البيع التعاقدي المقترح (Suggested Contract Price)", "42,000 دولار ($4.20/ق)", "98,750 دولار ($3.95/ق)", "185,000 دولار ($3.70/ق)", "350,000 دولار ($3.50/ق)", "سعر تنافسي للغاية لسلاسل التجزئة المحلية والطلبيات التصديرية"],
        ["مجمل الربح التشغيلي (Gross Profit)", "12,500 دولار (29.76%)", "29,250 دولار (29.62%)", "53,250 دولار (28.78%)", "102,000 دولار (29.14%)", "هامش ربح تشغيلي مستقر يتراوح بين 28.8% إلى 29.8%"],
      ],
    },
    {
      id: "tbl-egy-source-register",
      titleAr: "سجل المصادر والبيانات المعتمدة للدراسة المصرية",
      titleEn: "Transparent Verified Source Register — Egypt Market Study",
      unit: "سجل توثيق منهجي",
      source: "SBA Research Registry",
      referenceYear: "2023–2026",
      columnsAr: ["المؤسسة / المصدر", "رابط المصدر الرسمي", "سنة التقرير والبيانات", "نطاق البيانات المصرح بها", "طبيعة التصنيف والمحددات"],
      columnsEn: ["Institution / Source", "Official URL", "Data Year", "Authorized Data Scope", "Classification & Methodology Notes"],
      rows: [
        [
          "World Bank WITS / UN Comtrade",
          "https://wits.worldbank.org/",
          "2023",
          "الواردات الجمركية الرسمية لمصر من فصلي HS61 وHS62 والشركاء التجاريين",
          "Official Customs Imports Baseline — مصادر رسمية معتمدة دوليًا"
        ],
        [
          "الهيئة العامة للرقابة على الصادرات والواردات (GOEIC)",
          "https://www.goeic.gov.eg/",
          "2023–2025",
          "سلسلة صادرات وواردات الملابس الجاهزة (صادرات 3.394 مليار دولار في 2025)",
          "National Trade Series — أرقام الرقابة والتجارة الخارجية الرسمية"
        ],
        [
          "المجلس التصديري للملابس الجاهزة (AEC)",
          "https://aecegy.com/",
          "2024–2025",
          "توزيع الصادرات المصرية حسب الأسواق (أمريكا، أوروبا، تركيا، الدول العربية)",
          "Export Council Official Data — إحصائيات المجالس التصديرية الرسمية"
        ],
        [
          "غرفة التجارة الأمريكية في مصر (AmCham Egypt)",
          "https://www.amcham.org.eg/",
          "April 2026 (Dec 2025 Data)",
          "حصر 14,339 شركة غزل ونسيج وملابس و8,835 شركة ملابس جاهزة",
          "Industry Census & Intelligence — مسح صناعي موثق للقطاع الخاص والحكومي"
        ],
        [
          "الهيئة العامة للاستثمار والمناطق الحرة (GAFI)",
          "https://www.investinegypt.gov.eg/",
          "Nov 2024 / 2025",
          "دراسة جدوى مصانع ملابس الأطفال والحوافز الاستثمارية للمناطق الحرة والتجمعات",
          "Investment Guide & Indicative Feasibility — بيانات استرشادية واستثمارية"
        ],
        [
          "منظومة نافذة والتعريفة الجمركية (NAFEZA)",
          "https://nafeza.gov.eg/en/tariff",
          "2026",
          "بنود التعريفة الجمركية المصرية، نظام ACI، والرسوم المقررة للملابس",
          "Official Customs Platform — البوابة الجمركية الموحدة لجمهورية مصر العربية"
        ],
        [
          "مصلحة الضرائب المصرية (ETA)",
          "https://www.eta.gov.eg/",
          "2026",
          "قانون ضريبة القيمة المضافة 14% ومنظومة الفاتورة والإيصال الإلكتروني",
          "Tax Authority Regulations — التشريعات واللوائح الضريبية الرسمية"
        ],
        [
          "منظمة التجارة العالمية (WTO Profiles)",
          "https://ttd.wto.org/en/profiles/egypt",
          "2025",
          "ملف التعريفات الجمركية وسياسات التجارة الخارجية لجمهورية مصر العربية",
          "Multilateral Trade Data — التزامات مصر ومعدلات التعريفة المربوطة"
        ],
        [
          "المواقع الرسمية لسلاسل التجزئة المصرية",
          "Concrete, Tie House, DeFacto, LC Waikiki, Town Team",
          "2026",
          "شبكات الفروع، الفئات السلعية، بيانات الاتصال العامة والتواصل المؤسسي",
          "Public Corporate Disclosures — بيانات الشركات العامة المعلنة"
        ],
      ],
    },
  ],

  sections: {
    executiveSummary: {
      summaryAr: "تُعد جمهورية مصر العربية ركيزة استراتيجية مزدوجة في منظومة أعمال مجموعة سامي بن عياد؛ حيث تمثل في آن واحد أكبر سوق استهلاكي محلي للملابس الجاهزة في العالم العربي بقاعدة سكانية تتجاوز 105.9 مليون نسمة، وقاعدة صناعية وإنتاجية عملاقة لتصدير الملابس الجاهزة إلى الأسواق العالمية. بلغت صادرات مصر من الملابس الجاهزة 3.394 مليار دولار في عام 2025 وفق بيانات الهيئة العامة للرقابة على الصادرات والواردات (GOEIC) بنمو قياسي بلغ نحو +20% على أساس سنوي مقارنة بـ 2.834 مليار دولار في 2024 و2.421 مليار دولار في 2023. وفي المقابل، أظهرت بيانات التجارة الدولية (WITS / UN Comtrade) لعام 2023 استيراد ملابس جاهزة جمركية بقيمة 292.06 مليون دولار (114.69 مليون دولار للمحبوك HS61 و177.37 مليون دولار للمنسوج HS62)، تصدرتها الصين بحصة 33.84% ($98.82M) تليها تركيا بحصة 26.81% ($78.29M) وبنغلاديش بحصة 13.04% ($38.08M). يرتكز التموضع التنافسي للمجموعة في مصر على استثمار القاعدة الصناعية الوطنية لتزويد سلاسل التجزئة المحلية ببرامج الـ Private Label عالية الجودة، وتلبية عقود الزي الموحد المؤسسي (Corporate & Medical Uniforms)، وتوظيف المزايا التفضيلية لاتفاقيات QIZ والشراكة الأوروبية وGAFTA والكوميسا للتصدير إلى الأسواق الشقيقة والدولية.",
      summaryEn: "The Arab Republic of Egypt represents a dual strategic anchor within the SAMI BIN AYYAD GROUP ecosystem, functioning simultaneously as the largest domestic apparel consumer market in the Arab world (105.9M+ population) and a powerhouse export manufacturing platform. Egypt's ready-made garment (RMG) exports reached USD 3.394 billion in 2025 according to the General Organization for Export and Import Control (GOEIC), registering an impressive ~20% YoY expansion vs USD 2.834B in 2024 and USD 2.421B in 2023. Concurrently, WITS/UN Comtrade customs data for 2023 records USD 292.06 million in finished apparel imports ($114.69M Knitted HS61 and $177.37M Woven HS62), led by China ($98.82M / 33.84%), Türkiye ($78.29M / 26.81%), and Bangladesh ($38.08M / 13.04%). SBA's strategic positioning capitalizes on domestic manufacturing capabilities to supply leading Egyptian retail chains with high-grade Private Label lines, fulfill recurring institutional uniform contracts, and leverage duty-free access under QIZ, EU-FTA, GAFTA, and COMESA for competitive regional and global supply.",
      bulletsAr: [
        "صادرات ملابس جاهزة قياسية بلغت 3.394 مليار دولار في 2025 بنمو سنوي قرابة 20%، بعد تحقيق 2.834 مليار دولار في 2024 و2.421 مليار دولار في 2023.",
        "واردات جمركية للملابس الجاهزة (HS 61+62) بلغت 292.06 مليون دولار في 2023 وفق WITS (الصين 33.8%، تركيا 26.8%، بنغلاديش 13.0%).",
        "حصر صناعي موثق عبر غرفة التجارة الأمريكية (AmCham) يحدد 14,339 شركة نسيج وملابس مسجلة، بينها 8,835 شركة ملابس جاهزة متخصصة.",
        "الولايات المتحدة الوجهة التصديرية الأولى بقيمة 1.19 مليار دولار في 2024 بفضل بروتوكول الكويز (QIZ)، يليها الاتحاد الأوروبي بـ 689 مليون دولار.",
        "سوق محلي عملاق يضم 105.9 مليون مستهلك يولد طلبًا سنويًا على تجزئة الملابس يتجاوز 5.2 مليار دولار بفرص هائلة للعلامات الخاصة والزي الموحد."
      ],
      bulletsEn: [
        "Record Egyptian RMG exports reached USD 3.394 billion in 2025 (~20% YoY growth vs $2.834B in 2024 and $2.421B in 2023).",
        "Customs finished apparel imports (HS 61+62) recorded at USD 292.06M in 2023 per WITS (China 33.8%, Türkiye 26.8%, Bangladesh 13.0%).",
        "AmCham Egypt census identifies 14,339 registered textile & apparel enterprises, including 8,835 dedicated RMG manufacturers.",
        "United States stands as the #1 export market at USD 1.19 billion in 2024 under QIZ, followed by the European Union at USD 689 million.",
        "Vast domestic consumer base of 105.9M generating $5.2B+ annual apparel retail spend, creating major private label and corporate uniform opportunities."
      ]
    },

    marketDefinition: {
      summaryAr: "يحدد نطاق الدراسة سوق الملابس والمنسوجات في جمهورية مصر العربية عبر بعدين متكاملين: أولًا، سوق الاستهلاك المحلي الذي يشمل مبيعات التجزئة وسلاسل المتاجر وتجارة الجملة والزي الموحد للمؤسسات داخل المحافظات المصرية. ثانيًا، المنصة الصناعية التصديرية المصنفة جمركيًا تحت فصلي النظام المنسق HS 61 (ألبسة وتوابع ألبسة من مصنّرات أو كروشيه / محبوكة) وHS 62 (ألبسة وتوابع ألبسة من غير المصنّرات أو الكروشيه / منسوجة). وتفصل الدراسة بدقة بالغة بين بيانات الواردات الجمركية البالغة 292.06 مليون دولار لعام 2023، وبين مبيعات التجزئة الإجمالية للسوق المحلي التي تتجاوز 5.2 مليار دولار، وصادرات الملابس المصرية البالغة 3.394 مليار دولار في عام 2025 وفق بيانات GOEIC الرسمية. تؤكد الدراسة على عدم تصنيف مصر كوجهة تصدير أجنبية لمصنع مصري، بل كقاعدة إنتاج وتوريد وطنية تخدم السوق الداخلي وتصدر للأسواق العالمية.",
      summaryEn: "This study scopes the apparel and textiles market in the Arab Republic of Egypt across two integrated dimensions: First, the domestic consumer market covering retail chains, department stores, wholesale channels, and corporate uniform procurement across Egyptian governorates. Second, the export manufacturing platform structured under HS Chapters 61 (Knitted apparel) and 62 (Woven apparel). The study rigorously differentiates between customs apparel import figures ($292.06M in 2023), total domestic retail apparel spend ($5.2B+), and Egypt's international RMG exports ($3.394B in 2025 per official GOEIC records). Egypt is strategically evaluated as a domestic production and distribution anchor rather than a foreign export destination for domestic manufacturers.",
      bulletsAr: [
        "الفصل 61 (HS 61): الملابس وتوابعها المصنرة أو الكروشيه (تيشيرتات، بولو، سويت شيرت، ملابس نوم، ملابس أطفال، ملابس داخلية).",
        "الفصل 62 (HS 62): الملابس وتوابعها المنسوجة (قمصان رجالية، بناطيل جبردين وجينز، بدل رسمية، ملابس نسائية منسوجة، أزياء مهنية موحدة).",
        "التمييز الإلزامي بين أرقام الاستيراد الجمركي (WITS) وسلسلة الصادرات والواردات الوطنية (GOEIC) ومبيعات التجزئة الكلية للسوق المحلي.",
        "تحليل دور مصر كقاعدة تصنيع وتوريد وطنية للمجموعة معنية بتلبية الاستهلاك الداخلي وتغذية التصدير الدولي."
      ],
      bulletsEn: [
        "HS Chapter 61: Knitted or crocheted apparel (t-shirts, polos, sweatshirts, homewear, babywear, underwear).",
        "HS Chapter 62: Woven apparel (men's shirts, trousers, suits, denim, woven dresses, institutional uniforms).",
        "Mandatory separation between customs import metrics (WITS), national trade flows (GOEIC), and total domestic retail market spend.",
        "Strategic appraisal of Egypt as SBA's primary manufacturing platform supplying domestic retailers and international buyers."
      ]
    },

    marketSize: {
      summaryAr: "يُقدر الحجم الإجمالي لسوق تجزئة الملابس في جمهورية مصر العربية بما يتراوح بين 5.2 إلى 5.8 مليار دولار سنويًا (ما يعادل قرابة 250 إلى 280 مليار جنيه مصري)، مدعومًا بقاعدة سكانية شابة قوامها 105.9 مليون نسمة، ومعدل نمو سكاني سنوي يولد طلبًا متواصلًا على الملابس الأساسية وملابس الأطفال والأزياء الكاجوال. على الصعيد الصناعي، تمثل مصر المركز الإنتاجي الأكبر للملابس الجاهزة في إفريقيا والشرق الأوسط، حيث حققت صادرات الملابس الجاهزة قفزة نوعية لتصل إلى 3.394 مليار دولار في عام 2025 مقارنة بـ 2.834 مليار دولار في عام 2024 (بنمو تقريبي 20%)، و2.421 مليار دولار في عام 2023 وفق بيانات الهيئة العامة للرقابة على الصادرات والواردات (GOEIC). وفي جانب الواردات الجمركية، سجلت مصر 292.06 مليون دولار لعام 2023 عبر WITS (و218 مليون دولار في 2024 و277 مليون دولار في 2025 وفق GOEIC)، ما يعكس اعتماد السوق المحلي بنسبة تزيد عن 85% إلى 90% على الإنتاج المحلي لتغطية الاستهلاك الجماهيري.",
      summaryEn: "The total domestic apparel retail market in Egypt is valued at between USD 5.2 to 5.8 billion annually (approximately EGP 250 to 280 billion), driven by a young consumer demographic of 105.9 million residents and steady demographic expansion. Industrially, Egypt stands as the leading RMG manufacturing hub in the MENA region, with official GOEIC data confirming ready-made garment exports surging to USD 3.394 billion in 2025, up ~20% YoY from USD 2.834 billion in 2024 and USD 2.421 billion in 2023. On the import side, officially reported customs imports stood at USD 292.06 million in 2023 per WITS (and $218M in 2024, $277M in 2025 per GOEIC), demonstrating that over 85% to 90% of domestic clothing demand is satisfied through domestic production.",
      bulletsAr: [
        "سوق تجزئة محلي يقدر بـ 5.2–5.8 مليار دولار سنويًا يخدم 105.9 مليون نسمة.",
        "صادرات ملابس جاهزة بلغت 3.394 مليار دولار في 2025 بنمو سنوي 19.8%، و2.834 مليار دولار في 2024، و2.421 مليار دولار في 2023 (GOEIC).",
        "واردات ملابس جمركية موثقة لعام 2023 بقيمة 292.06 مليون دولار عبر WITS ($114.69M محبوك و$177.37M منسوج).",
        "اعتماد السوق المحلي بنسبة تفوق 85% على المصانع الوطنية لتغطية الملابس الجماهيرية والاقتصادية والمتوسطة."
      ],
      bulletsEn: [
        "Domestic retail apparel market valued at $5.2–5.8 billion annually serving 105.9 million residents.",
        "RMG exports expanded to $3.394B in 2025 (+19.8% YoY), $2.834B in 2024, and $2.421B in 2023 (GOEIC series).",
        "Customs finished garment imports recorded at $292.06M in 2023 via WITS ($114.69M knitted and $177.37M woven).",
        "Over 85% domestic market self-sufficiency in mass, budget, and mid-tier apparel segments."
      ]
    },

    actualDemand: {
      summaryAr: "يتسم الطلب الفعلي على الملابس في السوق المصري بالتنوع الطبقي والتكرار الموسمي الشديد. تمثل شريحة المستهلكين من الطبقتين الشعبية والمتوسطة أكثر من 80% من حجم الاستهلاك العددي، مع تركيز مكثف على الملابس القطنية الأساسية، التيشيرتات، البولو، ملابس الأطفال، والملابس المنزلية (Homewear & Nightwear). وتتركز ذروة المشتريات السنوية في 4 مواسم رئيسية: موسم شهر رمضان وعيدي الفطر والأضحى (الذي يمثل وحده قرابة 40% من مبيعات التجزئة السنوية للملابس)، وموسم العودة للمدارس والجامعات (سبتمبر/أكتوبر للبناطيل والقمصان والزي المدرسي)، وموسم بدء الصيف (مايو/يونيو للتيشيرتات وملابس العطلات)، وموسم التخفيضات الشتوية والأوكازيون (نوفمبر - فبراير للهوديز والملابس الثقيلة). كما يشهد السوق طلبًا مؤسسيًا ضخمًا ومستمرًا على الأزياء الموحدة (Uniforms) من شركات المقاولات، المشروعات القومية، المستشفيات، والمنشآت الفندقية والسياحية التي تضم أكثر من 1,200 فندق ومنتجع.",
      summaryEn: "Apparel demand in Egypt is defined by significant socio-economic diversity and acute purchasing seasonality. The popular and middle-income segments account for over 80% of unit consumption, prioritizing 100% cotton basics, casual tees, polos, kidswear, and homewear/pyjamas. Annual purchasing peaks concentrate in four cycles: Ramadan and Eid al-Fitr/Eid al-Adha (generating ~40% of annual retail turnover), Back-to-School/University (September/October for trousers, shirts, and school uniforms), Summer launch (May/June for tees and vacationwear), and Winter clearance/Okazion (November-February for fleece and outerwear). Additionally, massive recurring B2B institutional uniform demand arises from construction conglomerates, national mega-projects, healthcare networks, and over 1,200 hotels and tourism resorts.",
      bulletsAr: [
        "مواسم الذروة: رمضان والأعياد (40% من مبيعات التجزئة)، العودة للمدارس، انطلاق الصيف، والأوكازيون الشتوي.",
        "الفئات الأكثر استهلاكًا: التيشيرتات القطنية 100%، قمصان البولو، ملابس المواليد والأطفال، ملابس النوم والمنزل، والجينز والشينو.",
        "الطلب المؤسسي: عقود دورية للزي الموحد للمصانع، شركات المقاولات، المستشفيات الخاصة، وسلاسل الفنادق والضيافة.",
        "تفضيل المستهلك المصري التاريخي للمنسوجات والقطنيات الطبيعية ذات الملمس الناعم والمتانة العالية في الغسيل."
      ],
      bulletsEn: [
        "Peak cycles: Ramadan & Eids (~40% of retail sales), Back-to-School, Summer launch, and Winter clearance sales.",
        "Core consumer categories: 100% cotton t-shirts, polos, babywear, kidswear, loungewear/pyjamas, and chino/denim pants.",
        "Institutional corporate procurement: Recurring uniform contracts for factories, construction giants, private hospitals, and hotels.",
        "Strong cultural affinity for Egyptian natural combed cotton, breathability, and wash durability."
      ]
    },

    importsExports: {
      summaryAr: "توضح البيانات الإحصائية الرسمية طبيعة الميزان التجاري لقطاع الملابس الجاهزة المصري كقطاع تصديري فائق الفائض؛ حيث سجلت صادرات الملابس الجاهزة عبر هيئة الرقابة على الصادرات والواردات (GOEIC) 3.394 مليار دولار في 2025 بنمو سنوي يقارب 20% مقارنة بـ 2.834 مليار دولار في 2024 و2.421 مليار دولار في 2023. وفي المقابل بلغت الواردات المسجلة عبر GOEIC نحو 277 مليون دولار في 2025 و218 مليون دولار في 2024 و262 مليون دولار في 2023، محققة فائضًا تجاريًا قياسيًا للقطاع يتجاوز 3.11 مليار دولار. وعلى صعيد بيانات WITS / UN Comtrade لعام 2023، بلغت الواردات الجمركية الرسمية 292.06 مليون دولار (114.69 مليون للمصنرات HS61 و177.37 مليون للمنسوج HS62). وتصدرت الصين الموردين بقيمة 98.82 مليون دولار (33.84%)، تلتها تركيا بـ 78.29 مليون دولار (26.81%) بفضل اتفاقية التجارة الحرة وسلاسل التجزئة التركية في مصر، وبنغلاديش بـ 38.08 مليون دولار (13.04%)، والإمارات بـ 12.60 مليون دولار (4.31%). أما على صعيد التصدير لعام 2024، فتصدرت الولايات المتحدة الأمريكية الوجهات بقيمة 1.19 مليار دولار مستفيدة من بروتوكول الكويز (QIZ)، تلاها الاتحاد الأوروبي بقيمة 689 مليون دولار بموجب اتفاقية الشراكة المصرية الأوروبية، ثم تركيا بقيمة 242 مليون دولار.",
      summaryEn: "Official statistical series validate Egypt's RMG trade balance as a substantial net export generator. Per GOEIC official records, apparel exports achieved USD 3.394 billion in 2025, surging ~20% YoY from USD 2.834 billion in 2024 and USD 2.421 billion in 2023, against registered apparel imports of USD 277M in 2025, USD 218M in 2024, and USD 262M in 2023, delivering a record sector trade surplus exceeding USD 3.11 billion. WITS/UN Comtrade 2023 customs data records USD 292.06 million in combined imports ($114.69M Knitted HS61 and $177.37M Woven HS62). Derived partner analysis places China as the top supplier at $98.82M (33.84%), followed by Türkiye at $78.29M (26.81%) driven by bilateral FTA preferences and retail store chains, Bangladesh at $38.08M (13.04%), and the UAE at $12.60M (4.31%). On the 2024 export side, the United States absorbed USD 1.19 billion under QIZ duty-free terms, followed by Europe at USD 689 million under the EU Association Agreement, and Türkiye at USD 242 million.",
      bulletsAr: [
        "سلسلة GOEIC: صادرات 3.394 مليار دولار وواردات 277 مليون دولار في 2025، مقارنة بـ 2.834 مليار دولار و218 مليون دولار في 2024.",
        "سلسلة WITS (2023): واردات جمركية بقيمة 292.06 مليون دولار (الصين 33.84%، تركيا 26.81%، بنغلاديش 13.04%، الإمارات 4.31%).",
        "وجهات التصدير 2024: الولايات المتحدة 1.19 مليار دولار (QIZ)، أوروبا 689 مليون دولار (EUR.1)، تركيا 242 مليون دولار.",
        "فائض تجاري سنوي قياسي لقطاع الملابس الجاهزة في مصر يتجاوز 3.1 مليار دولار في عام 2025."
      ],
      bulletsEn: [
        "GOEIC Series: $3.394B exports vs $277M imports in 2025; $2.834B exports vs $218M imports in 2024.",
        "WITS Series (2023): $292.06M customs imports (China 33.84%, Türkiye 26.81%, Bangladesh 13.04%, UAE 4.31%).",
        "Export destinations 2024: US $1.19B (QIZ), Europe $689M (EUR.1), Türkiye $242M (FTA).",
        "Net apparel trade surplus for Egypt surpassing USD 3.1 billion in 2025."
      ]
    },

    demandedProductsAnalysis: {
      summaryAr: "تتركز المنتجات الأكثر طلبًا وتنافسية في السوق المصري ضمن 12 فئة رئيسية تلائم قدرات مجموعة سامي بن عياد. يتصدرها التيشيرتات القطنية الأساسية (HS 6109.10) المصنوعة من القطن المصري الممشط بأوزان 160–180 جم/م²، والتي تشهد طلبًا استهلاكيًا هائلًا، وقمصان البولو بيكيه (HS 6105.10) بأوزان 200–240 جم/م² لماركات التجزئة والزي الموحد، والقمصان الرجالية المنسوجة (HS 6205.20) الكلاسيكية والكاجوال، وبناطيل الشينو والجبردين والجينز (HS 6203.42)، والملابس النسائية القطنية والمحتشمة، وملابس الأطفال والمواليد (HS 6111 / 6209) التي تحظى بأولوية إنفاق عائلي عالية، والملابس الشتوية من الفليس والميلتون (HS 6110.20)، والملابس المنزلية وبيجامات النوم القطنية الفاخرة، إضافة إلى خطوط الأزياء المهنية والزي الموحد المتخصص لقطاعات المقاولات والمصانع والمستشفيات والضيافة.",
      summaryEn: "Demanded apparel categories in Egypt align strategically with SBA's manufacturing profile across 12 product lines. Core demanded items comprise 100% combed cotton basic t-shirts (HS 6109.10, 160–180 gsm) representing massive mass-market turnover, pique polo shirts (HS 6105.10, 200–240 gsm) for retail brands and corporate uniforms, men's woven shirts (HS 6205.20) in casual and formal cuts, chino trousers and denim pants (HS 6203.42), women's modestwear and casual dresses, children's and babywear (HS 6111 / 6209) enjoying resilient family budget priority, winter fleece hoodies and sweatshirts (HS 6110.20), luxury combed cotton homewear and pyjamas, alongside dedicated institutional uniforms for construction, industrial, healthcare, and hospitality sectors.",
      bulletsAr: [
        "التيشيرتات والبولو القطنية: المنتج الأكثر تداولًا واستهلاكًا، مع ميزة تنافسية للقطن المصري الممشط فائق النعومة.",
        "القمصان الرجالية والبناطيل: طلب مستمر لدى سلاسل التجزئة المحلية مع استيراد للموديلات التركية والإيطالية.",
        "ملابس الأطفال والمواليد: قطاع استثماري واعد (مشار إليه في دراسة جدوى GAFI الاسترشادية بنوفمبر 2024).",
        "الأزياء المهنية والزي الموحد: قطاع عالي الربحية والتدفقات النقدية السريعة بعقود سنوية وتوريد مباشر للمؤسسات."
      ],
      bulletsEn: [
        "Cotton Tees & Polos: Volume-driving lines where Egyptian combed cotton delivers unmatched softness and durability.",
        "Woven Shirts & Chinos: Continuous retail demand with strong replacement cycles for formal and smart-casual collections.",
        "Kidswear & Babywear: Resilient household demand (highlighted as an investment focus in GAFI's Nov 2024 feasibility study).",
        "Corporate & Medical Uniforms: High-margin institutional segment with secured B2B annual replenishment contracts."
      ]
    },

    localSupplyProduction: {
      summaryAr: "تتمتع جمهورية مصر العربية بقاعدة إنتاجية وتصنيعية متكاملة رأسيًا تعد الأقوى في الشرق الأوسط وإفريقيا؛ حيث يوثق تقرير غرفة التجارة الأمريكية (AmCham Egypt) الصادر في أبريل 2026 وجود 14,339 شركة مسجلة في قطاع الغزل والنسيج والملابس الجاهزة حتى ديسمبر 2025، من بينها 8,835 شركة متخصصة في صناعة الملابس الجاهزة (RMG). تتوزع هذه المنظومة الإنتاجية بين مصانع القطاع الخاص الكبرى والمصدرة، ومصانع القطاع العام العريقة التابعة للشركة القابضة للقطن والغزل والنسيج والملابس (مثل شركة مصر للغزل والنسيج بالمحلة الكبرى التي تشهد افتتاح مجمع 'غزل 1' الأكبر عالميًا لإنتاج الغزول الرفيعة)، ومصانع الغزل والنسيج والصباغة والتجهيز بالصالحية والعاشر من رمضان والإسكندرية والسادات. تتكامل حلقات التصنيع المحلية من زراعة القطن طويل التيلة وفائق الطول (Giza 86, Giza 94, Giza 96)، مرورًا بالحلج والغزل والنسيج الدائري والمستوي، وعمليات التبييض والصباغة والطباعة (ديجيتال وسلك سكرين)، وحتى القص والتشغيل والتطريز والكي والتعبئة النهائية.",
      summaryEn: "Egypt commands a vertically integrated textile and garment production ecosystem recognized as the most complete across the MENA region and Africa. The April 2026 AmCham Egypt report (December 2025 census) documents 14,339 registered enterprises across the textile and ready-made garment sectors, including 8,835 dedicated ready-made garment (RMG) manufacturing companies. The manufacturing landscape blends massive private-sector export conglomerates, foreign-invested facilities, and revitalized public-sector mills under the Cotton & Textile Holding Company (highlighted by Misr Spinning & Weaving's 'Ghazl 1' mega-mill in El Mahalla, the world's largest single spinning facility). Complete domestic supply chains span extra-long and long-staple cotton cultivation (Giza 86, 94, 96), automated ginning, ring and compact spinning, circular knitting, shuttleless weaving, eco-friendly dyeing, advanced digital/screen printing, through computer-controlled cutting, CMT sewing, embroidery, and retail packaging.",
      bulletsAr: [
        "إحصاء AmCham (ديسمبر 2025): 14,339 شركة مسجلة بالقطاع النسيجي، تتضمن 8,835 شركة ملابس جاهزة متخصصة.",
        "تكامل رأسي يبدأ من أقطان جيزة العالمية، ومصانع غزل متطورة، ومصابغ ومطابع كبرى، ومصانع تشغيل جاهز.",
        "التجمعات الصناعية الـ 8 الرئيسية: العاشر من رمضان، المحلة الكبرى، الإسكندرية، 6 أكتوبر، السادات، العبور، كفر الدوار، والمنطقة الاقتصادية لقناة السويس.",
        "برامج تحديث حكومية ضخمة لقطاع الغزل والنسيج العام بطاقة إنتاجية تستهدف مضاعفة الغزول والأقمشة الرفيعة المجهزة."
      ],
      bulletsEn: [
        "AmCham Census (Dec 2025): 14,339 registered textile/apparel enterprises, including 8,835 dedicated garment factories.",
        "Full vertical integration from Giza cotton, modern spinning mills, industrial dyehouses, to advanced CMT operations.",
        "8 major industrial clusters: 10th of Ramadan, El Mahalla, Alexandria, 6th of October, Sadat, Obour, Kafr El Dawar, and SCZone.",
        "Multibillion-dollar state modernization program upgrading public spinning/weaving mills to boost premium yarn/fabric output."
      ]
    },

    competitionSaturation: {
      summaryAr: "تتسم خريطة المنافسة في السوق المصري بحدة المنافسة المزدوجة بين المصنعين المحليين والواردات الخارجية. في الشريحة الاقتصادية والشعبية، تتنافس المصانع والمشاغل المحلية الصغيرة والمتوسطة بشبرا الخيمة والمحلة والعاشر مع واردات الملابس الصينية والبنغالية الاقتصادية. وفي الشريحة المتوسطة والمتوسطة العليا، تواجه العلامات المحلية منافسة قوية من الماركات التركية (DeFacto, LC Waikiki, Koton) والماركات الأوروبية السريعة (Zara, Bershka, Mango) التي تدير شبكات متاجر كبرى في المولات التجارية بالقاهرة والإسكندرية. وتبرز العلامات التجارية المصرية الرائدة (مثل Concrete, Tie House, Town Team, BTM, Dice, Carina) كقوى تجزئة وطنية راسخة تمتلك مئات الفروع. وتتمثل فرصة مجموعة سامي بن عياد في تجنب الصدام السعري غير المتكافئ مع الملابس الصينية الرخيصة، والتموضع كشريك صناعي وتوريدي موثوق يزود سلاسل التجزئة المحلية الكبرى بمنتجات قطنية راقية تحت علاماتها الخاصة (Private Label)، وتوفير احتياجات المؤسسات الكبرى من الزي الموحد المهني بعقود سنوية مستقرة.",
      summaryEn: "Market competition in Egypt features a two-tiered dynamic between domestic producers and international supply chains. In the budget mass market, small-to-medium domestic workshops in Shubra El Kheima, El Mahalla, and 10th of Ramadan compete against high-volume low-cost Chinese and Bangladeshi apparel imports. In the middle-to-upper segments, domestic retail brands face robust competition from Turkish fast-fashion retail chains (DeFacto, LC Waikiki, Koton) and European retail giants (Zara, Bershka, Mango) operating prominent mall locations across Greater Cairo and Alexandria. Premier Egyptian apparel brands (Concrete, Tie House, Town Team, BTM, Dice, Carina) command extensive multi-governorate store footprints. SBA's strategic opportunity avoids low-margin price wars against budget Asian imports, positioning the Group as a trusted manufacturing partner supplying leading domestic retailers with private-label collections and securing recurring institutional uniform contracts.",
      bulletsAr: [
        "منافسة الواردات: هيمنة صينية على الملابس الاقتصادية (33.8%)، وحضور تركي قوي في الأزياء السريعة ومتاجر المولات (26.8%).",
        "المصنعون المحليون: شبكات تجزئة وطنية كبرى (Concrete, Tie House, Town Team, Dice, Carina) تمثل عملاء مستهدفين للشراكة.",
        "تجنب السلع الرخيصة: التركيز على منتجات القطن المصري الممشط الفاخر، والقمصان المنسوجة، والزي الموحد للمؤسسات.",
        "الميزة التنافسية لـ SBA: سرعة التسليم المحلي، مرونة كميات التشغيل (MOQs)، جودة الخياطة، والامتثال الصارم للمواصفات."
      ],
      bulletsEn: [
        "Import competition: Chinese dominance in budget apparel (33.8%) and Turkish fast-fashion retail chains (26.8%).",
        "Domestic market leaders: Established retail brands (Concrete, Tie House, Town Team, Dice, Carina) represent prime private-label clients.",
        "High-value positioning: Prioritizing premium combed Egyptian cotton basics, woven shirts, and institutional uniforms over cheap synthetics.",
        "SBA competitive advantage: Rapid domestic delivery, flexible MOQs, superior stitching craftsmanship, and verified compliance."
      ]
    },

    potentialBuyers: {
      summaryAr: "تحدد الدراسة خريطة المشترين والحسابات المستهدفة في مصر عبر 3 قطاعات رئيسية مؤهلة تجاريًا (حسابات بحثية وتجارية مؤهلة وليست عملاء مؤكدين حتى إتمام التعاقد): أولًا، سلاسل تجزئة الأزياء الرجالية والشبابية الكبرى التي تبحث عن مصادر تصنيع محلي لتشكيلات الـ Private Label (مثل Concrete Fashion Group، TIE HOUSE، وTown Team). ثانيًا، شبكات التجزئة العائلية والهايبرماركت ومتاجر الماركات الخاصة (مثل LC Waikiki Egypt، DeFacto Egypt، Carrefour Egypt - MyStyle، وSpinneys Egypt) لتوريد القطنيات الأساسية وملابس الأطفال. ثالثًا، كبار المشترين المؤسسيين للزي الموحد وأزياء العمل والسلامة المهنية، بما يشمل كبريات شركات المقاولات (المقاولون العرب، أوراسكوم للإنشاءات)، والمجموعات الصحية والمستشفيات الخاصة (مجموعة مستشفيات كليوباترا)، وسلاسل المنشآت الفندقية والسياحية الكبرى بالبحر الأحمر والقاهرة وجنوب سيناء.",
      summaryEn: "Target accounts in Egypt are structured across three commercially qualified sectors (qualified research prospects, NOT confirmed clients until contractual closing): First, leading men's and youth fashion retail chains requiring domestic contract manufacturing for their private-label collections (Concrete Fashion Group, TIE HOUSE, Town Team). Second, family retail networks, department stores, and hypermarkets expanding private-label basics and kidswear (LC Waikiki Egypt, DeFacto Egypt, Carrefour Egypt - MyStyle, Spinneys Egypt). Third, institutional corporate buyers for professional uniforms, safety workwear, and medical apparel, encompassing infrastructure and construction giants (Arab Contractors, Orascom Construction), premier private hospital networks (Cleopatra Hospitals Group), and major hotel/hospitality chains across Greater Cairo and the Red Sea.",
      bulletsAr: [
        "سلاسل تجزئة الأزياء: Concrete Fashion Group (علاقات تجزئة ويوروميد)، TIE HOUSE (100+ فرع)، Town Team (120+ فرع)، BTM، كارينا، ودايس.",
        "متاجر التجزئة والهايبرماركت الدولية: كارفور مصر (علامة MyStyle)، سبينيس مصر، وفروع LC Waikiki وDeFacto في مصر.",
        "المؤسسات وشركات المقاولات الكبرى: المقاولون العرب، وأوراسكوم للإنشاءات لعقود ملابس العمل والزي الميداني المتكرر.",
        "المؤسسات الطبية والفندقية: مستشفيات كليوباترا، المجموعات الطبية الخاصة، وسلاسل الفنادق الكبرى في القاهرة والمنتجعات السياحية."
      ],
      bulletsEn: [
        "Apparel Retail Chains: Concrete Fashion Group, TIE HOUSE (100+ stores), Town Team (120+ stores), BTM, Carina Wear, and Dice.",
        "Hypermarket & Retail Chains: Carrefour Egypt (MyStyle private label), Spinneys Egypt, LC Waikiki Egypt, and DeFacto Egypt.",
        "Infrastructure & Industrial Conglomerates: Arab Contractors and Orascom Construction for field workwear and protective uniforms.",
        "Healthcare & Hospitality Groups: Cleopatra Hospitals Group, private medical centers, and major hotel resorts in Cairo and the Red Sea."
      ]
    },

    salesDistributionChannels: {
      summaryAr: "تتوزع قنوات البيع والتوزيع لقطاع الملابس في السوق المصري عبر 4 مسارات هيكلية: 1) متاجر التجزئة وسلاسل العلامات التجارية في المولات الكبرى والشوارع التجارية الرئيسية (سيتي ستارز، مول العرب، مول مصر، كايرو فيستيفال سيتي، وسان ستيفانو بالإسكندرية)، والتي تستحوذ على الشريحة المتوسطة والراقية. 2) أسواق ومراكز تجارة الجملة التقليدية الضخمة (العتبة، الموسكي، باب الشعرية، قنطرة غرب، وشارع فرنسا بالإسكندرية) التي تغذي آلاف المحلات الإقليمية في المحافظات والقرى. 3) التجارة الإلكترونية ومنصات البيع الرقمية التي تسجل نموًا استثنائيًا (مثل أمازون مصر، جوميا، بوتيكات، ونون، إضافة إلى المواقع المستقلة ومبيعات وسائل التواصل الاجتماعي). 4) قنوات التوريد المؤسسي المباشر (B2B Procurement) للمصانع والشركات والجهات الحكومية والخاصة عبر المناقصات والممارسات وعقود التوريد السنوية المباشرة.",
      summaryEn: "Apparel sales and distribution channels in Egypt operate across four distinct commercial avenues: 1) Modern retail brand chains and shopping mall anchors (Citystars, Mall of Arabia, Mall of Egypt, Cairo Festival City, San Stefano Alexandria) commanding middle-to-high income fashion retail spend. 2) Historic wholesale commercial hubs (El Ataba, El Mosky, Bab El Shariya, Qantara West, and Rue de France Alexandria) feeding tens of thousands of regional independent shops across Delta and Upper Egypt governorates. 3) Digital commerce platforms experiencing rapid growth (Amazon Egypt, Jumia, Noon, alongside brand-owned online stores and social commerce). 4) Direct B2B institutional procurement channels serving industrial corporations, contracting conglomerates, and healthcare institutions via annual supply contracts and competitive tenders.",
      bulletsAr: [
        "سلاسل المتاجر والمولات الحديثة: المنصة الرئيسية لعقود الـ Private Label والمجموعات الكاجوال الراقية.",
        "مراكز الجملة التاريخية (العتبة والموسكي): القناة الكبرى لتصريف الأحجام الضخمة والملابس الاقتصادية والشعبية.",
        "التجارة الإلكترونية: قناة تسويقية متسارعة النمو تستحوذ على أكثر من 12% من مبيعات الملابس الشبابية في المدن الرئيسية.",
        "التوريد المباشر للمؤسسات (B2B): القناة الأسرع تحصيلًا والأعلى استقرارًا في هوامش الربح للزي الموحد وملابس العمل."
      ],
      bulletsEn: [
        "Modern shopping malls and brand retail: Primary channel for private-label partnerships and premium casualwear collections.",
        "Traditional wholesale epicenters (El Ataba & El Mosky): High-volume distribution channel supplying provincial retail networks.",
        "E-Commerce: Rapidly expanding sales channel accounting for over 12% of youth and casualwear purchases in urban centers.",
        "Direct B2B Procurement: The most secure channel for working capital cash flow and consistent margins in corporate apparel."
      ]
    },

    marketEntryStrategy: {
      summaryAr: "تعتمد استراتيجية دخول وتموضع مجموعة سامي بن عياد في السوق المصري على مصفوفة أولويات تجارية متدرجة من 4 مستويات محكمة: الأولوية الأولى: استهداف سلاسل تجزئة الأزياء المصرية الكبرى (Concrete, Tie House, Town Team, Carina) لتصنيع تشكيلات خاصة تحت علاماتها التجارية (Private Label / OEM) بمنتجات القطن المصري الممشط الفاخر والقمصان المنسوجة. الأولوية الثانية: اقتناص عقود الزي الموحد المؤسسي المتكررة مع شركات المقاولات الكبرى (المقاولون العرب، أوراسكوم) ومجموعات الرعاية الصحية الخاصة (مستشفيات كليوباترا) والمنشآت الفندقية، لما تتيحه من تدفقات نقدية منتظمة وهوامش ربح مجزية. الأولوية الثالثة: تقديم تشكيلات موسمية متخصصة ومسبقة الصنع للموزعين وتجار الجملة الموثوقين لفترات الأعياد والعودة للمدارس. الأولوية الرابعة: بناء تحالفات استراتيجية مع كبار المصنعين المصدرين لتشغيل الطاقات الفائضة والاستفادة المشتركة من المزايا الجمركية لبروتوكول QIZ واتفاقيات الشراكة الأوروبية والكوميسا.",
      summaryEn: "SBA's commercial market entry and positioning strategy in Egypt is built upon a disciplined 4-tier phased framework: Priority 1: Partnering with premier Egyptian apparel retail chains (Concrete, Tie House, Town Team, Carina Wear) to manufacture private-label collections in premium combed Egyptian cotton and woven shirts. Priority 2: Securing recurring institutional B2B uniform contracts with infrastructure leaders (Arab Contractors, Orascom Construction), private healthcare networks (Cleopatra Hospitals Group), and luxury hotels, guaranteeing steady cash flow and attractive margins. Priority 3: Delivering seasonal replenishment packages to vetted wholesalers and e-commerce platforms ahead of peak Eid and Back-to-School seasons. Priority 4: Strategic subcontracting alliances with established export manufacturers to absorb overflow capacity and co-leverage QIZ, EU-FTA, and COMESA duty-free export frameworks.",
      bulletsAr: [
        "الأولوية 1: تصنيع العلامات الخاصة (Private Label) لسلاسل التجزئة المحلية الكبرى (Concrete, Tie House, Town Team).",
        "الأولوية 2: عقود الزي الموحد للمؤسسات الكبرى (شركات المقاولات، المستشفيات الخاصة، وسلاسل الفنادق).",
        "الأولوية 3: حزم التوريد الموسمي بالجملة للتيشيرتات وملابس الأطفال وملابس النوم لفترات الأعياد والمدارس.",
        "الأولوية 4: التحالفات التصديرية المشتركة والتصنيع للغير (OEM / FOB) لأسواق أمريكا (QIZ) وأوروبا والخليج العربي."
      ],
      bulletsEn: [
        "Priority 1: Private-label contract manufacturing for leading domestic retail brand chains (Concrete, Tie House, Town Team).",
        "Priority 2: Corporate uniform and workwear contracts with construction giants, private hospital networks, and hotel chains.",
        "Priority 3: Seasonal wholesale supply packages for tees, babywear, and homewear ahead of Eid and Back-to-School peaks.",
        "Priority 4: Strategic export manufacturing alliances (OEM/FOB) targeting US (QIZ), Europe (EUR.1), and GCC markets."
      ]
    },

    technicalRegulatorySpecs: {
      summaryAr: "تخضع واردات وتداول الملابس الجاهزة في مصر لمنظومة رقابية وجمركية دقيقة ومحكمة بموجب قانون الجمارك رقم 207 لسنة 2020، ولائحته التنفيذية، وقانون سجل المستوردين رقم 120 لسنة 1982 وتعديلاته. تشمل المتطلبات الإلزامية: 1) التسجيل المسبق للشحنات عبر منصة 'نافذة' (NAFEZA) واستخراج رقم ACID قبل الشحن. 2) تسجيل المصانع والشركات المالكة للعلامات التجارية لدى هيئة الرقابة على الصادرات والواردات (GOEIC) وفق القرار الوزاري 43 لسنة 2016 للسماح بالإفراج عن الملابس تامة الصنع. 3) ضريبة القيمة المضافة بنسبة 14% بموجب القانون رقم 67 لسنة 2016. 4) تعريفة جمركية عامة على الملابس تامة الصنع تتراوح بين 30% إلى 40% على بنود HS61 وHS62، مع إعفاء المنتجات العربية المطابقة لاتفاقية GAFTA بنسبة قيمة مضافة لا تقل عن 40%. 5) الفحص الفني والمخبري الإلزامي لمطابقة المواصفات القياسية المصرية (EOS) وخلو الملابس من أصباغ الآزو والمعادن الثقيلة ومقاومة الانكماش وثبات الألوان. 6) بطاقة البيانات الإلزامية باللغة العربية المثبتة بإحكام بالملابس موضحًا بها نسبة الألياف، بلد المنشأ، اسم المصنع، تعليمات الغسيل، والمقاس.",
      summaryEn: "Finished apparel imports and distribution in Egypt are strictly governed under Egyptian Customs Law No. 207 of 2020, its Executive Regulations, and Importers Register Law No. 120 of 1982. Mandatory compliance requirements comprise: 1) Advance Cargo Information (ACI) registration via the NAFEZA portal, obtaining the mandatory ACID code prior to international dispatch. 2) Mandatory manufacturer/trademark registration with GOEIC pursuant to Ministerial Decree No. 43 of 2016 for finished consumer apparel. 3) Standard Value Added Tax (VAT) of 14% under Law No. 67 of 2016. 4) MFN customs tariffs on finished garments ranging from 30% to 40% across HS61 and HS62 tariff lines, with full duty exemptions applied to eligible Arab-origin products satisfying GAFTA rules of origin (minimum 40% local value addition). 5) Technical product inspection by EOS/GOEIC laboratories ensuring absence of carcinogenic azo dyes, heavy metals, dimensional stability, and colorfastness. 6) Indelible Arabic labeling permanently stitched to each garment detailing fiber composition, country of origin, manufacturer data, care instructions, and sizing.",
      bulletsAr: [
        "نظام ACI ومنصة نافذة: إصدار رقم ACID إلزامي قبل الشحن بـ 48 ساعة عبر بوابة https://nafeza.gov.eg/en/tariff.",
        "القرار الوزاري 43 لسنة 2016: إلزامية قيد المصانع والعلامات التجارية بسجل GOEIC كشرط مسبق للإفراج الجمركي.",
        "التعريفة الجمركية وضريبة القيمة المضافة: رسوم MFN بين 30%–40% للملابس الجاهزة + 14% ضريبة قيمة مضافة عامة.",
        "المواصفات القياسية المصرية (EOS) والبطاقة العربية: بطاقة غير قابلة للإزالة باللغة العربية وفحص مخبري لسلامة الأصباغ."
      ],
      bulletsEn: [
        "ACI System & NAFEZA: Mandatory ACID generation 48 hours prior to dispatch via https://nafeza.gov.eg/en/tariff.",
        "Ministerial Decree 43/2016: Compulsory factory and trademark registration with GOEIC for customs clearance.",
        "Customs Tariffs & VAT: MFN duties between 30%–40% on finished garments plus 14% statutory import/sales VAT.",
        "Egyptian Standards (EOS) & Arabic Label: Indelible Arabic care and fiber label, and chemical lab compliance testing."
      ]
    },

    pricingMargins: {
      summaryAr: "تتوزع هيكلية الأسعار وهوامش الربح في قطاع الملابس المصري عبر 3 مستويات تسعيرية واضحة: 1) شريحة الملابس الاقتصادية والجماهيرية (تيشيرتات بأسعار تجزئة 150–350 جنيه، قمصان 300–600 جنيه) بهامش ربح مصنعي 12%–18% وهوامش تجزئة 30%–40%. 2) شريحة الملابس المتوسطة والماركات المحلية (تيشيرتات وبولو 450–950 جنيه، قمصان 800–1,600 جنيه، بناطيل 900–1,800 جنيه) بهوامش مصنعية 22%–28% وهوامش تجزئة 50%–70%. 3) شريحة الأزياء الراقية والماركات العالمية والمول (بأسعار تتجاوز 1,800–4,500 جنيه) بهوامش تتجاوز 100%. أما في عقود الزي الموحد للشركات والمؤسسات (B2B Uniforms)، فيتراوح هامش الربح التشغيلي الصافي للمصنع بين 25% إلى 32% مع ميزة التحصيل السريع وانعدام مخاطر تقلبات الموضة ومخزون نهاية الموسم.",
      summaryEn: "Pricing structures and margin economics across Egypt's apparel industry operate across three well-defined tiers: 1) Budget mass market (retail t-shirts at EGP 150–350, shirts at EGP 300–600) generating manufacturer gross margins of 12%–18% and retailer markups of 30%–40%. 2) Mid-tier and domestic retail brand segment (polos and tees at EGP 450–950, shirts at EGP 800–1,600, trousers at EGP 900–1,800) yielding manufacturing gross margins of 22%–28% and retail markups of 50%–70%. 3) Premium and international mall brands (retailing at EGP 1,800–4,500+) with markups exceeding 100%. In B2B institutional uniform contracts, manufacturer net operating margins reliably achieve 25% to 32%, benefiting from secured advance payments, zero fashion obsolescence, and eliminated end-of-season inventory write-downs.",
      bulletsAr: [
        "الملابس الاقتصادية: هوامش مصنعية 12%–18%، تعتمد على الحجم والتشغيل الكبير والتكلفة المنخفضة.",
        "الملابس المتوسطة والماركات: هوامش مصنعية مجزية 22%–28% بهوامش تجزئة تتراوح بين 50% إلى 70%.",
        "الزي الموحد المؤسسي (B2B): هوامش تشغيلية ممتازة 25%–32% مع تدفق نقدي مضمون وانعدام مخاطر ركود الموضة.",
        "شروط السداد: دفعة مقدمة 30%–50% عند التعاقد، والباقي عند التسليم أو اعتمادات مستندية / شيكات مؤجلة 30–60 يومًا."
      ],
      bulletsEn: [
        "Budget apparel: 12%–18% manufacturer margins driven by massive volume and tight material cost controls.",
        "Mid-tier retail brands: Attractive 22%–28% manufacturing gross margins supporting 50%–70% retail markups.",
        "Institutional uniforms: Solid 25%–32% operating margins with secured cash flow and zero fashion unsold inventory risk.",
        "Payment terms: 30%–50% down payment on contract signing, balance upon delivery or verified 30–60 day corporate receivables."
      ]
    },

    logisticsSupplyChain: {
      summaryAr: "تمتلك مصر بنية لوجستية متطورة تخدم كلًا من سلاسل التوريد المحلية وشبكات التصدير الدولي. بحريًا، يستحوذ ميناء الإسكندرية وميناء الدخيلة على أكثر من 60% من التجارة الخارجية لمصر، بينما يوفر ميناء بورسعيد (شرق وغرب) وميناء دمياط على البحر المتوسط، وميناء السخنة على البحر الأحمر بوابات تصدير فائقة السرعة إلى أوروبا والخليج وآسيا. داخليًا، تتمتع المدن الصناعية الرئيسية (العاشر من رمضان، 6 أكتوبر، السادات، العبور، وبرج العرب) بشبكة طرق سريعة وموانئ جافة حديثة (الميناء الجاف بمدينة 6 أكتوبر، والميناء الجاف بالعاشر من رمضان) تتيح التخليص الجمركي الداخلي وسرعة نقل البضائع. تتيح هذه البنية لمجموعة سامي بن عياد تسليم طلبيات الملابس الجاهزة داخل القاهرة الكبرى والإسكندرية في غضون 24–48 ساعة من اكتمال الإنتاج، وشحن طلبيات التصدير بحريًا إلى موانئ الخليج العربي في 5–7 أيام، وإلى موانئ جنوب أوروبا في 3–5 أيام.",
      summaryEn: "Egypt possesses an advanced logistics infrastructure serving both domestic distribution networks and global maritime export lanes. Maritime gateways include Alexandria Port and El Dekheila (handling over 60% of foreign merchandise trade), Port Said (East and West) and Damietta on the Mediterranean, and Sokhna Port on the Red Sea offering rapid access to European, GCC, and Asian supply routes. Domestically, major industrial clusters (10th of Ramadan, 6th of October, Sadat, Obour, Borg El Arab) are linked via modern multi-lane highway networks and dry ports (6th of October Dry Port, 10th of Ramadan Dry Port) facilitating inland customs clearance. This network enables SBA to fulfill domestic retail delivery within Greater Cairo and Alexandria in 24–48 hours from packing, and dispatch maritime export shipments to GCC ports in 5–7 days and Southern European ports in 3–5 days.",
      bulletsAr: [
        "الموانئ البحرية الرئيسية: الإسكندرية، الدخيلة، شرق وغرب بورسعيد، دمياط، والسخنة على البحر الأحمر.",
        "الموانئ الجافة: ميناء 6 أكتوبر الجاف وميناء العاشر من رمضان لتسريع التخليص الجمركي للبضائع والمواد الخام.",
        "زمن التوصيل المحلي: 24 إلى 48 ساعة من مصانع العاشر والعبور إلى مستودعات ومتاجر القاهرة الكبرى والإسكندرية.",
        "سرعة الشحن التصديري: 3 إلى 5 أيام بحريًا إلى جنوب أوروبا، و5 إلى 7 أيام إلى موانئ البحر الأحمر والخليج العربي."
      ],
      bulletsEn: [
        "Primary Seaports: Alexandria, El Dekheila, Port Said East/West, Damietta, and Sokhna on the Red Sea.",
        "Dry Ports & Logistics Parks: 6th of October Dry Port and 10th of Ramadan Dry Port streamlining containerized customs clearance.",
        "Domestic Lead Times: 24 to 48 hours from 10th of Ramadan/Obour facilities to Greater Cairo and Alexandria retail distribution centers.",
        "Export Maritime Transit: 3 to 5 days to Southern European ports and 5 to 7 days to Red Sea and GCC seaports."
      ]
    },

    risksChallenges: {
      summaryAr: "يتعين على المستثمرين والمصنعين في قطاع الملابس المصري إدارة مجموعة من التحديات والمخاطر التشغيلية والتجارية: 1) تقلبات أسعار الصرف وتكاليف استيراد مدخلات الإنتاج المستوردة (كالألياف الصناعية، الأصباغ الكيماوية، ماكينات الخياطة وقطع الغيار). 2) المنافسة الشرسة في السوق الشعبي من واردات الملابس الصينية والبنغالية الاقتصادية وضعف هوامش الربح في السلع الرخيصة. 3) مخاطر الائتمان وفترات التحصيل لدى بعض سلاسل التجزئة المحلية التي قد تمتد إلى 60–90 يومًا. 4) الإجراءات البيروقراطية الجمركية وتأخيرات التخليص عبر منظومة ACI وقرار 43 في حال عدم استيفاء الوثائق مسبقًا. 5) تقلبات القوة الشرائية للمستهلك المحلي نتيجة التضخم وميله لتأجيل مشتريات الملابس غير الأساسية في فترات الغلاء. توصي الدراسة بتطبيق سياسة تحوط صارمة بالاعتماد الأكبر على المدخلات القطنية المحلية، وطلب دفعات مقدمة لا تقل عن 30%–50% في العقود، والتركيز على شرائح الزي الموحد والمستهلكين الأكثر استقرارًا.",
      summaryEn: "Apparel manufacturers and trade partners operating in Egypt must navigate specific commercial and operational risk factors: 1) Foreign currency fluctuations and imported input price volatility (synthetic yarns, specialized dye chemicals, automated machinery, and spare parts). 2) Intensive price-driven competition in mass-market retail against low-cost Chinese and Bangladeshi finished garments. 3) Trade credit risks and extended receivable payment terms (60–90 days) among certain domestic retail chains. 4) Regulatory and customs documentation bottlenecks under ACI/NAFEZA and Decree 43/2016 if documentation is not pre-audited. 5) Domestic consumer purchasing power elasticity under inflationary pressure, prompting deferred discretionary fashion spending. SBA mitigates these challenges by maximizing domestic cotton raw material integration, enforcing 30%–50% contract down payments, and anchoring revenue in recurring institutional uniform contracts.",
      bulletsAr: [
        "مخاطر العملة ومدخلات الإنتاج: تقلب أسعار الخامات المستوردة والأصباغ الكيماوية والإكسسوارات الدقيقة.",
        "منافسة الأسعار الشعبية: ضغط الأسعار من المنتجات الصينية المستوردة في الأسواق والمحلات غير المنظمة.",
        "مخاطر الائتمان والتحصيل: إلزامية التحري المالي عن سلاسل التجزئة وتأمين دفعات مقدمة لا تقل عن 30%–50%.",
        "التحوط الاستراتيجي: التركيز على الزي الموحد المؤسسي المستقر، والاعتماد على القطن المصري المحلي المتوفر."
      ],
      bulletsEn: [
        "FX & imported input risks: Volatility in imported synthetic fibers, specialty dyes, and precision accessories.",
        "Budget mass-market price pressure: Fierce low-end competition from Chinese imports across informal retail channels.",
        "Trade credit exposure: Prudent financial vetting of retail accounts, enforcing 30%–50% advance payments and bank guarantees.",
        "Strategic mitigation: Anchoring production in institutional uniform tenders and maximizing local Egyptian cotton inputs."
      ]
    },

    swotAnalysis: {
      summaryAr: "يقدم التحليل الرباعي (SWOT) لقطاع الملابس والمنسوجات في جمهورية مصر العربية تقييمًا استراتيجيًا شاملًا يبرز مكانة مصر التنافسية: نقاط القوة (Strengths): الشهرة العالمية والجودة الفائقة للقطن المصري، قاعدة صناعية ضخمة تضم 8,835 شركة ملابس جاهزة، وفرة العمالة الماهرة بتكاليف تنافسية، تكامل سلاسل الإمداد من الغزل حتى المنتج النهائي، وموقع جغرافي فريد على ملتقى قارات العالم. نقاط الضعف (Weaknesses): الاعتماد الجزئي على استيراد ألياف البوليستر والأصباغ الكيماوية المتخصصة، الحاجة لمزيد من التحديث في ماكينات الصباغة والتشطيب ببعض المصانع، وبطء دورة رأس المال العامل لدى صغار المصنعين. الفرص (Opportunities): الطفرة التصديرية الكبرى (+20% نمو في 2025 لتصل الصادرات لـ 3.394 مليار دولار)، التوسع في عقود العلامات الخاصة (Private Label) لسلاسل التجزئة المحلية، الاستفادة الكاملة من اتفاقيات QIZ والشراكة الأوروبية وGAFTA، ونمو مشروعات الزي الموحد القومية والطبية. التهديدات (Threats): تدفق الملابس الجاهزة الصينية والتركية والبنغالية الرخيصة، التحديات التضخمية الضاغطة على ميزانيات الأسر، والتغيرات التنظيمية الجمركية العالمية.",
      summaryEn: "A comprehensive SWOT assessment delineates Egypt's strategic apparel sector landscape: Strengths: World-renowned heritage and quality of Egyptian cotton, vast industrial capacity comprising 8,835 RMG factories, abundant skilled labor at competitive wages, full vertical supply chain integration from spinning to finished garments, and premier geographic positioning on global maritime corridors. Weaknesses: Partial reliance on imported synthetic polyester fibers and specialty dye chemicals, modernization backlogs in select dyeing and finishing mills, and working capital cash flow friction among small producers. Opportunities: Massive RMG export acceleration (+20% in 2025 reaching $3.394B), expanding domestic private-label partnerships with modern retail chains, full monetization of QIZ, EU-FTA, and GAFTA tariff preferences, and surging national institutional uniform tenders. Threats: Low-cost finished garment influx from China and Bangladesh, household inflationary budget pressures, and evolving global compliance mandates.",
      bulletsAr: [
        "نقاط القوة: ريادة القطن المصري، 8,835 مصنع ملابس جاهزة، يد عاملة ماهرة، تكامل إنتاجي، وموقع جغرافي عبقري.",
        "نقاط الضعف: استيراد بعض خامات البوليستر والأصباغ، وتفاوت مستويات الأتمتة التكنولوجية بين المصانع الصغيرة.",
        "الفرص: قفزة الصادرات لـ 3.394 مليار دولار، عقود الـ Private Label للماركات المصرية، ونمو طلب الزي الموحد المؤسسي.",
        "التهديدات: المنافسة السعرية للواردات الآسيوية الرخيصة، والضغوط التضخمية على القوة الشرائية للطبقات الاقتصادية."
      ],
      bulletsEn: [
        "Strengths: Premier Egyptian cotton brand, 8,835 garment factories, skilled workforce, vertical integration, strategic location.",
        "Weaknesses: Dependence on imported synthetic yarns and specialty dyes; varying automation levels among small workshops.",
        "Opportunities: Export surge to $3.394B, private-label retail contracts, and expanding institutional corporate uniform tenders.",
        "Threats: Influx of low-cost Asian apparel imports, and domestic household purchasing power pressures."
      ]
    },

    recommendationsActionPlan: {
      summaryAr: "تضع الدراسة خطة عمل تنفيذية لمجموعة سامي بن عياد مقسمة على 90 يومًا تضمن تحويل الفرص المرصودة إلى تعاقدات تجارية رابحة: الأيام 1–30 (التحضير والتأهيل): تدقيق كتالوج المنتجات القطنية الفاخرة لـ SBA، وإعداد العينات النموذجية للتيشيرتات والبولو والقمصان المنسوجة والزي الموحد، وتحديث التسجيلات النظامية والفواتير الإلكترونية. الأيام 31–60 (التفاوض والاستهداف المباشر): بدء التواصل المباشر مع مديري المشتريات والتوريد لدى سلاسل التجزئة المستهدفة (Concrete, Tie House, Town Team, Carina, Carrefour) وعرض عينات الـ Private Label وتقديم عروض أسعار تنافسية بهامش ربح 25%–30%، والتقدم لمناقصات الزي الموحد لشركات المقاولات والمستشفيات. الأيام 61–90 (التعاقد والتشغيل التجاري): إبرام العقود الأولى لتوريد التشغيلات التجريبية (10,000–25,000 قطعة) بشروط دفع تضمن 40% مقدمًا، وبدء جدولة التوريدات الدورية لمواسم الأعياد والصيف، وتفعيل اتفاقيات الشراكة التصديرية.",
      summaryEn: "The study establishes a prioritized 90-day execution roadmap for SAMI BIN AYYAD GROUP to convert identified market potential into profitable commercial contracts: Days 1–30 (Readiness & Portfolio Alignment): Finalize SBA's premium Egyptian cotton portfolio, manufacture benchmark physical samples (combed tees, pique polos, woven shirts, and institutional scrubs/workwear), and verify regulatory/e-invoicing setup. Days 31–60 (Direct Sourcing Outreach & Qualification): Initiate direct presentations to procurement heads at target retail brands (Concrete, Tie House, Town Team, Carina Wear, Carrefour Egypt), present private-label cost models with 25%–30% gross margins, and bid on active corporate uniform tenders for construction giants and hospital groups. Days 61–90 (Contract Closing & Production Rollout): Execute initial supply contracts for pilot runs (10,000–25,000 units) backed by 40% advance payments, schedule regular delivery cycles for peak Eid/summer seasons, and operationalize strategic export alliances.",
      bulletsAr: [
        "الأيام 1–30: إعداد عينات الجودة الفائقة للتيشيرتات والقمصان والزي الموحد، وتجهيز مصفوفة الأسعار التعاقدية المرنة.",
        "الأيام 31–60: لقاءات مباشرة مع مديري مشتريات Concrete, Tie House, Town Team, كارفور، ومستشفيات كليوباترا والمقاولون العرب.",
        "الأيام 61–90: توقيع عقود تشغيلات تجريبية ممولة بدفعات مقدمة 40%، وبدء خطوط الإنتاج والجدولة اللوجستية.",
        "الهدف النهائي: تحقيق مبيعات تعاقدية سنوية مستقرة في السوق المصري بقيمة مستهدفة تتجاوز 3.5 إلى 5.0 مليون دولار."
      ],
      bulletsEn: [
        "Days 1–30: Build physical sample sets (tees, polos, shirts, uniforms) and finalize tiered production cost matrix.",
        "Days 31–60: Targeted pitch meetings with procurement directors at Concrete, Tie House, Town Team, Carrefour, and Arab Contractors.",
        "Days 61–90: Contract execution for pilot batches with 40% advance payment terms, initiating production scheduling.",
        "Ultimate Commercial Goal: Establish a stable, profitable domestic supply revenue stream targeting $3.5M–$5.0M annually."
      ]
    },

    sourcesMethodology: {
      summaryAr: "اعتمدت الدراسة منهجية بحثية صارمة متعددة المصادر تجمع بين الإحصاءات الجمركية الدولية وبيانات الهيئات الوطنية الرسمية والمسوح الصناعية الميدانية. شملت مصادر البيانات: 1) قاعدة بيانات التجارة الدولية للبنك الدولي والأمم المتحدة (WITS / UN Comtrade) لعام 2023 لخط أساس واردات HS61 وHS62 وحصص الشركاء التجاريين لمصر. 2) سلسلة بيانات الهيئة العامة للرقابة على الصادرات والواردات (GOEIC) لسنوات 2023 و2024 و2025 لصادرات وواردات الملابس الجاهزة الوطنية. 3) تقارير المجلس التصديري للملابس الجاهزة (AEC) لعام 2024 لتوزيع وجهات التصدير الدولية (أمريكا، أوروبا، تركيا). 4) المسح الصناعي لغرفة التجارة الأمريكية في مصر (AmCham Egypt) الصادر في أبريل 2026 (بيانات ديسمبر 2025) لحصر 14,339 شركة نسيج و8,835 شركة ملابس جاهزة والتجمعات الصناعية الـ 8. 5) دراسة الجدوى الأولية الاسترشادية للهيئة العامة للاستثمار (GAFI) لنوفمبر 2024. 6) اللوائح والتعريفات الرسمية عبر بوابة 'نافذة' (NAFEZA) ومصلحة الجمارك ومصلحة الضرائب المصرية. تم فحص وتدقيق كل رقم على حدة، وتفادي الخلط بين السلاسل الإحصائية المختلفة، وتصنيف كافة الحسابات المستهدفة كجهات اتصال بحثية مؤهلة (Research Prospects).",
      summaryEn: "This study utilizes a multi-source empirical intelligence methodology synthesizing international customs databases, statutory national trade reports, and field industrial censuses. Core sources comprise: 1) World Bank WITS / UN Comtrade (2023 Egypt Reporter dataset) establishing the finished apparel baseline across HS Chapters 61 and 62 and derived partner shares. 2) General Organization for Export and Import Control (GOEIC) official trade series across 2023, 2024, and 2025 documenting RMG exports ($3.394B in 2025). 3) Apparel Export Council of Egypt (AEC) 2024 reports detailing export destination flows to the US, Europe, and Türkiye. 4) AmCham Egypt Industrial Census published April 2026 (December 2025 baseline) documenting 14,339 textile/RMG enterprises, 8,835 garment factories, and 8 industrial clusters. 5) GAFI preliminary indicative investment feasibility studies (November 2024). 6) Statutory customs and tax regulations via NAFEZA, Egyptian Customs Authority, and Egyptian Tax Authority. Every metric is individually cited, statistical series are strictly isolated, and all target retail/corporate accounts are designated as qualified Research Prospects.",
      bulletsAr: [
        "WITS / UN Comtrade 2023: واردات ملابس HS61+HS62 بقيمة 292.06 مليون دولار وحصص الشركاء التجاريين.",
        "GOEIC 2023–2025: صادرات 3.394 مليار دولار وواردات 277 مليون دولار في 2025، وصادرات 2.834 مليار دولار في 2024.",
        "المجلس التصديري للملابس (AEC) 2024: صادرات أمريكا 1.19 مليار دولار (QIZ)، وأوروبا 689 مليون دولار، وتركيا 242 مليون دولار.",
        "AmCham Egypt (أبريل 2026): حصر شامل لـ 14,339 شركة نسيجية و8,835 شركة ملابس و8 تجمعات صناعية رئيسية.",
        "منظومة نافذة ووزارة المالية: التعريفات الرسمية (30%–40%)، ونظام ACI، وقرار 43/2016، وضريبة القيمة المضافة 14%."
      ],
      bulletsEn: [
        "WITS / UN Comtrade 2023: $292.06M finished apparel imports (HS 61+62) and derived partner supplier matrix.",
        "GOEIC Series 2023–2025: $3.394B exports vs $277M imports in 2025, and $2.834B exports in 2024.",
        "AEC Export Intelligence 2024: US $1.19B (QIZ), Europe $689M (EUR.1), and Türkiye $242M (FTA).",
        "AmCham Egypt Census (April 2026): 14,339 textile/RMG companies, 8,835 garment manufacturers, and 8 industrial hubs.",
        "NAFEZA & Ministry of Finance: Official tariff lines (30%–40%), ACI system, Decree 43/2016, and 14% import/sales VAT."
      ]
    }
  },

  sources: [
    {
      id: "src-eg-wits-2023",
      name: "World Bank WITS / UN Comtrade — Egypt Reporter Finished Apparel Imports 2023",
      dataYear: "2023",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "البيانات الرسمية الجمركية المعتمدة دوليًا لواردات فصلي HS61 وHS62 وحصص الموردين لمصر لعام 2023",
      methodologyNoteEn: "Official international customs import data for Egypt covering HS 61, HS 62, and partner supplier values",
    },
    {
      id: "src-eg-goeic-trade-series",
      name: "General Organization for Export and Import Control (GOEIC) — Annual Apparel Trade Series 2023–2025",
      dataYear: "2023–2025",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "إحصائيات التجارة الخارجية الرسمية لجمهورية مصر العربية الصادرة عن هيئة الرقابة على الصادرات والواردات (صادرات 3.394 مليار دولار في 2025)",
      methodologyNoteEn: "Statutory national foreign trade data from GOEIC documenting RMG exports ($3.394B in 2025) and imports ($277M in 2025)",
    },
    {
      id: "src-eg-aec-destinations",
      name: "Apparel Export Council of Egypt (AEC) — Export Destinations & Free Trade Report 2024",
      dataYear: "2024",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "التقرير السنوي الرسمي لتوزيع صادرات الملابس الجاهزة للأسواق العالمية (أمريكا 1.19 مليار دولار، أوروبا 689 مليون، تركيا 242 مليون)",
      methodologyNoteEn: "Official export breakdown by destination markets under QIZ, EU Association Agreement, and FTAs",
    },
    {
      id: "src-eg-amcham-census",
      name: "American Chamber of Commerce in Egypt (AmCham) — Textile & RMG Sector Report (April 2026 / Dec 2025 Baseline)",
      dataYear: "2025–2026",
      accessedAt: "2026-11-15",
      classification: "research_estimates",
      methodologyNoteAr: "تقرير المسح الصناعي الموثق الذي يحدد 14,339 شركة نسيجية مسجلة و8,835 شركة ملابس جاهزة وخريطة التجمعات الصناعية الـ 8",
      methodologyNoteEn: "Comprehensive industrial sector report documenting 14,339 registered textile/RMG enterprises and 8,835 garment factories",
    },
    {
      id: "src-eg-gafi-feasibility",
      name: "General Authority for Investment and Free Zones (GAFI) — Preliminary Indicative Feasibility Study on Children's Wear (Nov 2024)",
      dataYear: "2024",
      accessedAt: "2026-11-15",
      classification: "research_estimates",
      methodologyNoteAr: "دراسة استرشادية أولية للمؤشرات الاستثمارية وتقديرات تكلفة الآلات والتشغيل في صناعة ملابس الأطفال بمصر",
      methodologyNoteEn: "Preliminary indicative investment study on children's clothing manufacturing economics in Egypt",
    },
    {
      id: "src-eg-nafeza-customs",
      name: "National Single Window for Foreign Trade (NAFEZA) — Official Tariff Schedule & ACI Regulations 2026",
      dataYear: "2026",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "منظومة نافذة الرسمية: التعريفات الجمركية المنسقة لجمهورية مصر العربية، نظام ACI، والقرارات المنظمة للاستيراد",
      methodologyNoteEn: "Egyptian Single Window trade portal for official HS8/HS10 tariffs, Advance Cargo Information (ACI), and clearance rules",
    },
    {
      id: "src-eg-tax-authority",
      name: "Egyptian Tax Authority — Value Added Tax Law No. 67 of 2016 & E-Invoicing Directives",
      dataYear: "2026",
      accessedAt: "2026-11-15",
      classification: "official",
      methodologyNoteAr: "اللوائح الضريبية العامة المطبقة على مبيعات الملابس والواردات (ضريبة القيمة المضافة 14% ومنظومة الفاتورة الإلكترونية)",
      methodologyNoteEn: "Statutory tax regulations governing apparel sales and imports (14% VAT and e-invoicing compliance)",
    },
    {
      id: "src-eg-target-retailers",
      name: "Egyptian Retail Brand Directories & Corporate Disclosures (Concrete, Tie House, DeFacto, LC Waikiki, Town Team)",
      dataYear: "2026",
      accessedAt: "2026-11-15",
      classification: "commercial",
      methodologyNoteAr: "المواقع الرسمية وسجلات الشركات المعلنة وبيانات سلاسل المتاجر لـ 15 شركة مستهدفة في السوق المصري",
      methodologyNoteEn: "Official company websites, verified business directories, and public corporate disclosures for 15 target retail accounts",
    },
  ],

  groupOpportunities: [
    {
      id: "opp-eg-private-label",
      capabilityAr: "تصنيع العلامات التجارية الخاصة (Private Label) لسلاسل التجزئة المصرية الكبرى",
      capabilityEn: "Private Label Manufacturing for Leading Egyptian Retail Brand Chains",
      descriptionAr: "التعاقد والتصنيع المشترك لخطوط التيشيرتات والبولو والقمصان القطنية الفاخرة لصالح سلاسل التجزئة الكبرى في مصر (مثل Concrete, Tie House, Town Team) مستفيدين من جودة التصنيع ومرونة كميات التوريد.",
      descriptionEn: "Contract manufacturing and private label supply of combed cotton tees, pique polos, and woven shirts for premier Egyptian retail chains (Concrete, Tie House, Town Team) with flexible MOQs.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "سوق محلي يضم 105.9 مليون نسمة، وتوسع سلاسل التجزئة المحلية، وحاجة الماركات لبديل محلي موثوق يقلل مخاطر الاستيراد والعملة",
      evidenceReferenceEn: "Domestic market of 105.9M, expanding modern retail chains, and strong demand for dependable local sourcing alternatives",
      sectorPageUrl: "/sectors/garment",
    },
    {
      id: "opp-eg-uniforms",
      capabilityAr: "عقود الزي الموحد وأزياء العمل للشركات والمشروعات القومية والقطاع الطبي",
      capabilityEn: "Corporate Workwear, Medical Scrubs & Institutional Uniform Contracts",
      descriptionAr: "توريد أزياء العمل الميداني لشركات المقاولات الكبرى (المقاولون العرب، أوراسكوم)، والأزياء الطبية للمستشفيات الخاصة (مستشفيات كليوباترا)، وزي الضيافة لسلاسل الفنادق والمنتجعات.",
      descriptionEn: "Supplying industrial field workwear for construction giants (Arab Contractors, Orascom), medical scrubs for private hospital networks (Cleopatra Hospitals), and hospitality uniforms.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "طلب مؤسسي مستمر ومتكرر بهوامش ربح تشغيلية تتراوح بين 25%–32% وتدفقات نقدية مستقرة",
      evidenceReferenceEn: "Recurring B2B institutional demand with attractive 25%–32% operating margins and secured corporate receivables",
      sectorPageUrl: "/sectors/garment",
    },
    {
      id: "opp-eg-export-alliances",
      capabilityAr: "التصنيع المشترك للأسواق العالمية بموجب اتفاقيات QIZ والشراكة الأوروبية وGAFTA",
      capabilityEn: "Export Manufacturing Partnerships Leveraging QIZ, EU-FTA & GAFTA Platforms",
      descriptionAr: "الاستفادة من المزايا الجمركية التفضيلية التاريخية لمصر لتصدير الملابس الجاهزة المعفاة من الرسوم الجمركية إلى السوق الأمريكي (QIZ)، وأوروبا (اتفاقية الشراكة)، والأسواق العربية (GAFTA) وإفريقيا (الكوميسا).",
      descriptionEn: "Capitalizing on Egypt's premier preferential export agreements for zero-duty apparel export into the US (QIZ), Europe (EU Association Agreement), Arab markets (GAFTA), and Africa (COMESA).",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "صادرات قطاعية قياسية بلغت 3.394 مليار دولار في 2025 (نمو سنوي قرابة 20%)، واستيعاب السوق الأمريكي لـ 1.19 مليار دولار",
      evidenceReferenceEn: "Record sector exports of $3.394B in 2025 (~20% YoY growth), with the US market absorbing $1.19B under QIZ",
      sectorPageUrl: "/sectors/garment",
    },
  ],
};

export const STUDY_EG_APPAREL = STUDY_EGY_APPAREL_012;
