import sectorConstructionImg from "@/assets/sector-construction.jpg";
import sectorEnviroImg from "@/assets/sector-enviro.jpg";
import sectorApparelImg from "@/assets/sector-apparel.jpg";
import sectorFoodImg from "@/assets/sector-food.jpg";
import { APPAREL_55_MASTER_STUDIES } from "./studies/apparel-master-studies";

export type GlobalMarketSectorId =
  | "construction"
  | "environmental"
  | "garment"
  | "food";

export type StudyStatus =
  | "in_research"
  | "under_review"
  | "completed"
  | "needs_update"
  | "archived";

export type StudyApprovalStatus = "draft" | "pending_review" | "approved";

export type GeoRegionId =
  | "egypt"
  | "arab_world"
  | "europe"
  | "americas"
  | "asia"
  | "africa"
  | "oceania";

export type SourceDataClassification =
  | "official"
  | "research_estimates"
  | "commercial"
  | "analysis_conclusions"
  | "financial_assumptions";

export interface StudySectionContent {
  applicable?: boolean | undefined;
  summaryAr: string;
  summaryEn: string;
  bulletsAr?: string[] | undefined;
  bulletsEn?: string[] | undefined;
}

export type StudySectionKey =
  | "executiveSummary"
  | "marketDefinition"
  | "marketSize"
  | "actualDemand"
  | "importsExports"
  | "demandedProductsAnalysis"
  | "localSupplyProduction"
  | "competitionSaturation"
  | "potentialBuyers"
  | "salesDistributionChannels"
  | "marketEntryStrategy"
  | "technicalRegulatorySpecs"
  | "pricingCostAnalysis"
  | "logisticsSupplyChain"
  | "risksChallenges"
  | "commercialInvestmentOpportunities"
  | "capacityFinancialFeasibility"
  | "recommendationsActionPlan";

export interface StudyKpiMetric {
  id: string;
  labelAr: string;
  labelEn: string;
  value: string;
  unit: string;
  source: string;
  referenceYear: string;
  growthNoteAr?: string | undefined;
  growthNoteEn?: string | undefined;
}

export interface StudyChartPoint {
  labelAr: string;
  labelEn: string;
  value: number;
  secondaryValue?: number | undefined;
  noteAr?: string | undefined;
  noteEn?: string | undefined;
}

export interface StudyChartDataset {
  id: string;
  type: "bar" | "comparison" | "share" | "trend";
  titleAr: string;
  titleEn: string;
  unit: string;
  source: string;
  referenceYear: string;
  primarySeriesLabelAr?: string | undefined;
  primarySeriesLabelEn?: string | undefined;
  secondarySeriesLabelAr?: string | undefined;
  secondarySeriesLabelEn?: string | undefined;
  items: StudyChartPoint[];
}

export interface StudyTableDataset {
  id: string;
  titleAr: string;
  titleEn: string;
  unit: string;
  source: string;
  referenceYear: string;
  columnsAr: string[];
  columnsEn: string[];
  rows: string[][];
}

export interface StudySourceRecord {
  id: string;
  name: string;
  url?: string | undefined;
  dataYear: string;
  accessedAt: string;
  classification: SourceDataClassification;
  methodologyNoteAr?: string | undefined;
  methodologyNoteEn?: string | undefined;
}

export interface MarketComparisonSnapshot {
  marketSizeValue?: number | undefined;
  marketSizeDisplayAr: string;
  marketSizeDisplayEn: string;
  marketSizeUnit: string;
  importsValue?: number | undefined;
  importsDisplayAr: string;
  importsDisplayEn: string;
  importsUnit: string;
  growthRateDisplay: string;
  growthUnit: string;
  topDemandedProductsAr: string[];
  topDemandedProductsEn: string[];
  competitionLevelAr: string;
  competitionLevelEn: string;
  entryEaseAr: string;
  entryEaseEn: string;
  logisticsCostAr: string;
  logisticsCostEn: string;
  investmentOpportunityAr: string;
  investmentOpportunityEn: string;
  referenceYear: string;
  methodologyNoteAr?: string | undefined;
  methodologyNoteEn?: string | undefined;
}

export interface GroupOpportunityLink {
  id: string;
  capabilityAr: string;
  capabilityEn: string;
  descriptionAr: string;
  descriptionEn: string;
  evidenceStatus: "confirmed" | "exploratory";
  evidenceReferenceAr?: string | undefined;
  evidenceReferenceEn?: string | undefined;
  sectorPageUrl: string;
}

export interface GlobalOpportunityLink {
  enabled: boolean;
  approved: boolean;
  tradeSectorParam: "real-estate" | "sustainability" | "apparel" | "food";
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface ArchivedStudyVersion {
  version: string;
  archivedAt: string;
  status: StudyStatus;
  lastUpdated: string;
  summaryAr: string;
  summaryEn: string;
}

export type ApparelSubRegionId =
  | "gcc"
  | "other_arab"
  | "europe"
  | "africa"
  | "north_america"
  | "south_central_america"
  | "levant"
  | "north_africa"
  | "americas"
  | "asia_pacific";

export type PriorityGrade = "A" | "A-" | "B+" | "B" | "B-" | "C" | "D";

export type MarketRoleCategory =
  | "consumer_market"
  | "re_export_hub"
  | "competitor_sourcing"
  | "hybrid_partner"
  | "high_risk";

export type TradeDataBasis =
  | "hs61_hs62_customs"
  | "eurostat_sitc84"
  | "tradegov_estimate"
  | "secondary_aggregate"
  | "pending_verification";

export interface GlobalMarketStudy {
  id: string;
  slug: string;
  sector: GlobalMarketSectorId;
  scope: "egypt_only" | "global";
  region: GeoRegionId;
  apparelSubRegion?: ApparelSubRegionId | undefined;
  opportunityScore?: number | undefined;
  opportunityTier?: string | undefined;
  opportunityTierAr?: string | undefined;
  regionalRank?: number | undefined;
  totalInRegion?: number | undefined;
  opportunityRationaleAr?: string | undefined;
  opportunityRationaleEn?: string | undefined;
  downloadDocxUrl?: string | undefined;
  downloadXlsxUrl?: string | undefined;
  downloadZipUrl?: string | undefined;
  priorityGrade?: PriorityGrade | undefined;
  marketRole?: MarketRoleCategory | undefined;
  dataBasis?: TradeDataBasis | undefined;
  tradeIndicatorNumericUsdB?: number | undefined;
  tradeIndicatorDisplay?: string | undefined;
  tradeIndicatorYear?: string | undefined;
  tradeIndicatorScopeAr?: string | undefined;
  tradeIndicatorScopeEn?: string | undefined;
  dataCompletenessAr?: string | undefined;
  dataCompletenessEn?: string | undefined;
  waveBadge?: string | undefined;
  enableScenarioCalculator?: boolean | undefined;
  countryCode?: string | undefined;
  countryNameAr: string;
  countryNameEn: string;
  subRegionOrProjectAr?: string | undefined;
  subRegionOrProjectEn?: string | undefined;
  activityTypeAr: string;
  activityTypeEn: string;
  productTagsAr: string[];
  productTagsEn: string[];
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  status: StudyStatus;
  approvalStatus: StudyApprovalStatus;
  issueDate: string;
  lastUpdated: string;
  version: string;
  pdfUrl?: string | undefined;
  coverImage?: string | undefined;
  galleryImages?: string[] | undefined;
  kpis: StudyKpiMetric[];
  charts: StudyChartDataset[];
  tables: StudyTableDataset[];
  sections: Partial<Record<StudySectionKey, StudySectionContent>>;
  comparisonMetrics?: MarketComparisonSnapshot | undefined;
  sources: StudySourceRecord[];
  groupOpportunities: GroupOpportunityLink[];
  globalOpportunityLink?: GlobalOpportunityLink | undefined;
  archivedVersions?: ArchivedStudyVersion[] | undefined;
  isCustomStored?: boolean | undefined;
}

export interface GlobalMarketSectorConfig {
  id: GlobalMarketSectorId;
  order: number;
  nameAr: string;
  nameEn: string;
  shortDescAr: string;
  shortDescEn: string;
  scope: "egypt_only" | "global";
  scopeLabelAr: string;
  scopeLabelEn: string;
  image: string;
  topicsAr: string[];
  topicsEn: string[];
  regionNoteAr?: string | undefined;
  regionNoteEn?: string | undefined;
  sectorRoute: string;
  tradeSectorParam: "real-estate" | "sustainability" | "apparel" | "food";
  classificationHintAr: string;
  classificationHintEn: string;
}

/**
 * STRICT CANONICAL SECTOR ORDER (Matches Main Website Order):
 * 1. Construction & Real Estate Development (Egypt Only)
 * 2. Sustainability & Environment (Global)
 * 3. Apparel & Textiles (Global — Arab markets prioritized first)
 * 4. Food & Natural Products (Global)
 */
export const GLOBAL_MARKET_SECTORS: GlobalMarketSectorConfig[] = [
  {
    id: "construction",
    order: 1,
    nameAr: "المقاولات والتطوير العقاري",
    nameEn: "Construction & Real Estate Development",
    shortDescAr:
      "دراسات تحليلية متخصصة لسوق التشييد والبناء والتطوير العقاري والمشروعات القومية والخاصة داخل جمهورية مصر العربية فقط.",
    shortDescEn:
      "Specialized market studies covering construction spending, real estate development, infrastructure, and contracting opportunities inside Egypt only.",
    scope: "egypt_only",
    scopeLabelAr: "جمهورية مصر العربية فقط",
    scopeLabelEn: "Egypt Only",
    image: sectorConstructionImg,
    topicsAr: [
      "حجم سوق المقاولات المصري",
      "حجم الإنفاق على مشروعات البناء والتشييد",
      "المشروعات الحكومية والخاصة",
      "التطوير العقاري",
      "التشطيبات",
      "البنية التحتية",
      "الطلب على خدمات المقاولات",
      "المنافسة والشركات العاملة",
      "فرص التعاقد والتنفيذ",
      "المناقصات والمشروعات المستقبلية",
      "التكاليف والأسعار",
      "نماذج التعاقد",
      "الفرص الاستثمارية",
      "تحليل الجدوى والمخاطر",
    ],
    topicsEn: [
      "Egyptian Construction Market Size",
      "Building & Construction Expenditure",
      "Public & Private Projects",
      "Real Estate Development",
      "Interior & Architectural Finishing",
      "Infrastructure Works",
      "Contracting Services Demand",
      "Competition & Active Contractors",
      "Execution & Contracting Opportunities",
      "Upcoming Tenders & Pipelines",
      "Cost & Pricing Benchmarks",
      "Contracting Models",
      "Investment Opportunities",
      "Feasibility & Risk Analysis",
    ],
    regionNoteAr: "تقتصر الدراسات في هذا القطاع على المحافظات والمناطق والمشروعات داخل جمهورية مصر العربية فقط.",
    regionNoteEn: "Studies in this sector are strictly scoped to regions, cities, and developments within Egypt.",
    sectorRoute: "/sectors/construction",
    tradeSectorParam: "real-estate",
    classificationHintAr: "مصنفة حسب المناطق والمشروعات والأنشطة داخل مصر",
    classificationHintEn: "Classified by Egyptian regions, projects, and activities",
  },
  {
    id: "environmental",
    order: 2,
    nameAr: "البيئة والاستدامة",
    nameEn: "Sustainability & Environment",
    shortDescAr:
      "دراسات الأسواق العالمية الأكثر طلبًا في الطاقة المتجددة وإدارة المخلفات ومعالجة المياه والاقتصاد الدائري والتكنولوجيا البيئية.",
    shortDescEn:
      "Global market intelligence across renewable energy, waste management, water treatment, circular economy, and sustainable infrastructure.",
    scope: "global",
    scopeLabelAr: "عالمي",
    scopeLabelEn: "Global",
    image: sectorEnviroImg,
    topicsAr: [
      "الطاقة المتجددة",
      "الطاقة الشمسية",
      "إدارة المخلفات",
      "إعادة التدوير",
      "معالجة المياه",
      "الحلول البيئية",
      "الاقتصاد الدائري",
      "كفاءة الموارد والطاقة",
      "التكنولوجيا البيئية",
      "المشروعات المستدامة",
    ],
    topicsEn: [
      "Renewable Energy",
      "Solar Power",
      "Waste Management",
      "Recycling Systems",
      "Water & Wastewater Treatment",
      "Environmental Solutions",
      "Circular Economy",
      "Resource & Energy Efficiency",
      "Clean Environmental Tech",
      "Sustainable Projects",
    ],
    regionNoteAr: "تحليل الأسواق الأكثر طلبًا والاستثمارات والمشروعات والفرص التجارية والتنظيمية عالميًا.",
    regionNoteEn: "Analyzing highest-demand global markets, investments, regulatory drivers, and commercial opportunities.",
    sectorRoute: "/sectors/environmental",
    tradeSectorParam: "sustainability",
    classificationHintAr: "مصنفة حسب الدول والمناطق الجغرافية عالميًا",
    classificationHintEn: "Classified by countries and geographic regions globally",
  },
  {
    id: "garment",
    order: 3,
    nameAr: "الملابس والمنسوجات",
    nameEn: "Apparel & Textiles",
    shortDescAr:
      "تحليل أسواق التصدير والتصنيع التعاقدي للملابس والمنسوجات والأقمشة وبرامج FOB وCM وOEM وPrivate Label عالميًا.",
    shortDescEn:
      "Global apparel market research across womenswear, menswear, kidswear, sportswear, abayas, fabrics, and FOB/CM/OEM/Private Label supply.",
    scope: "global",
    scopeLabelAr: "عالمي",
    scopeLabelEn: "Global",
    image: sectorApparelImg,
    topicsAr: [
      "ملابس النساء",
      "ملابس الرجال",
      "ملابس الأطفال",
      "الملابس الرياضية",
      "الملابس الكاجوال",
      "الملابس المنزلية",
      "الملابس الداخلية",
      "العبايات",
      "تصنيع الملابس للغير",
      "تصنيع العلامات التجارية الخاصة",
      "الأقمشة والصباغة",
      "برامج FOB وCM وOEM وPrivate Label",
    ],
    topicsEn: [
      "Womenswear",
      "Menswear",
      "Kidswear",
      "Sportswear",
      "Casualwear",
      "Homewear & Loungewear",
      "Underwear & Essentials",
      "Abayas & Modest Fashion",
      "Contract Manufacturing",
      "Private Label Manufacturing",
      "Fabrics & Dyeing",
      "FOB / CM / OEM / Private Label Programs",
    ],
    regionNoteAr: "ترتيب أولوية الدراسة: الأسواق العربية أولًا بالكامل، ثم أوروبا والأمريكتان وآسيا وإفريقيا وأستراليا.",
    regionNoteEn: "Research priority order: Arab markets covered first in full, followed by Europe, Americas, Asia, Africa, and Australia.",
    sectorRoute: "/sectors/garment",
    tradeSectorParam: "apparel",
    classificationHintAr: "مصنفة حسب الدول والمناطق (الأسواق العربية أولًا)",
    classificationHintEn: "Classified by countries & regions (Arab markets first)",
  },
  {
    id: "food",
    order: 4,
    nameAr: "الأغذية والمنتجات الطبيعية",
    nameEn: "Food & Natural Products",
    shortDescAr:
      "دراسات الطلب والاستيراد والأسعار والاشتراطات الصحية وقنوات التوزيع العالمية للعسل وزيت الزيتون والتمور والأعشاب والمنتجات الزراعية.",
    shortDescEn:
      "Global food trade intelligence analyzing import demand, pricing, food safety regulations, and distribution for honey, olive oil, dates, and herbs.",
    scope: "global",
    scopeLabelAr: "عالمي",
    scopeLabelEn: "Global",
    image: sectorFoodImg,
    topicsAr: [
      "العسل الطبيعي بأنواعه",
      "زيت الزيتون والزيتون",
      "التمور ومنتجاتها",
      "الأعشاب والتوابل",
      "العصائر الطبيعية والمساحيق",
      "المنتجات الغذائية الطبيعية",
      "المنتجات الزراعية ذات فرص التصدير",
    ],
    topicsEn: [
      "Natural Honey Varieties",
      "Olive Oil & Table Olives",
      "Dates & Date Derivatives",
      "Herbs & Spices",
      "Natural Juices & Powders",
      "Natural Food Products",
      "Export-Ready Agri-Commodities",
    ],
    regionNoteAr: "تشمل تحليل الاستيراد والطلب والأسعار والمنافسة والاشتراطات الصحية والغذائية وقنوات التوزيع.",
    regionNoteEn: "Covers import volumes, pricing, competition, sanitary/food regulations, and distribution channels.",
    sectorRoute: "/sectors/food",
    tradeSectorParam: "food",
    classificationHintAr: "مصنفة حسب الدول والمناطق الجغرافية عالميًا",
    classificationHintEn: "Classified by countries and geographic regions globally",
  },
];

export const STUDY_SECTION_BLUEPRINT: Array<{
  key: StudySectionKey;
  order: number;
  titleAr: string;
  titleEn: string;
}> = [
  { key: "executiveSummary", order: 1, titleAr: "الملخص التنفيذي", titleEn: "Executive Summary" },
  { key: "marketDefinition", order: 2, titleAr: "تعريف السوق", titleEn: "Market Definition" },
  { key: "marketSize", order: 3, titleAr: "حجم السوق", titleEn: "Market Size" },
  { key: "actualDemand", order: 4, titleAr: "حجم الطلب الفعلي", titleEn: "Actual Demand Volume" },
  { key: "importsExports", order: 5, titleAr: "حجم الواردات والصادرات", titleEn: "Imports & Exports Volume" },
  { key: "demandedProductsAnalysis", order: 6, titleAr: "تحليل المنتجات والخدمات المطلوبة", titleEn: "Demanded Products & Services Analysis" },
  { key: "localSupplyProduction", order: 7, titleAr: "تحليل العرض والإنتاج المحلي", titleEn: "Local Supply & Production Analysis" },
  { key: "competitionSaturation", order: 8, titleAr: "المنافسة والتشبع", titleEn: "Competition & Market Saturation" },
  { key: "potentialBuyers", order: 9, titleAr: "العملاء والمشترون المحتملون", titleEn: "Potential Clients & Buyers" },
  { key: "salesDistributionChannels", order: 10, titleAr: "قنوات البيع والتوزيع", titleEn: "Sales & Distribution Channels" },
  { key: "marketEntryStrategy", order: 11, titleAr: "استراتيجية دخول السوق", titleEn: "Market Entry Strategy" },
  { key: "technicalRegulatorySpecs", order: 12, titleAr: "المواصفات والشروط الفنية والتنظيمية", titleEn: "Technical & Regulatory Specifications" },
  { key: "pricingCostAnalysis", order: 13, titleAr: "تحليل الأسعار والتكاليف", titleEn: "Pricing & Cost Analysis" },
  { key: "logisticsSupplyChain", order: 14, titleAr: "اللوجستيات وسلاسل الإمداد", titleEn: "Logistics & Supply Chain" },
  { key: "risksChallenges", order: 15, titleAr: "المخاطر والتحديات", titleEn: "Risks & Challenges" },
  { key: "commercialInvestmentOpportunities", order: 16, titleAr: "الفرص التجارية والتصنيعية والاستثمارية", titleEn: "Commercial, Manufacturing & Investment Opportunities" },
  { key: "capacityFinancialFeasibility", order: 17, titleAr: "الطاقة الإنتاجية أو التشغيلية والجدوى المالية", titleEn: "Operational Capacity & Financial Feasibility" },
  { key: "recommendationsActionPlan", order: 18, titleAr: "التوصيات والخطة التنفيذية", titleEn: "Recommendations & Action Plan" },
];

export const STUDY_STATUS_LABELS: Record<
  StudyStatus,
  { ar: string; en: string; badgeClass: string }
> = {
  in_research: {
    ar: "قيد البحث",
    en: "In Research",
    badgeClass: "border-slate-300 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800/80 dark:text-slate-200",
  },
  under_review: {
    ar: "قيد المراجعة",
    en: "Under Review",
    badgeClass: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  completed: {
    ar: "مكتملة",
    en: "Completed",
    badgeClass: "border-brand-green/40 bg-brand-green/10 text-brand-green",
  },
  needs_update: {
    ar: "تحتاج إلى تحديث",
    en: "Needs Update",
    badgeClass: "border-brand-orange/40 bg-brand-orange/10 text-brand-orange",
  },
  archived: {
    ar: "مؤرشفة",
    en: "Archived",
    badgeClass: "border-border bg-secondary text-muted-foreground",
  },
};

export const APPROVAL_STATUS_LABELS: Record<
  StudyApprovalStatus,
  { ar: string; en: string; badgeClass: string }
> = {
  draft: {
    ar: "مسودة غير معتمدة",
    en: "Draft (Unapproved)",
    badgeClass: "border-border bg-secondary text-muted-foreground",
  },
  pending_review: {
    ar: "بانتظار الاعتماد",
    en: "Pending Approval",
    badgeClass: "border-amber-500/40 bg-amber-500/10 text-amber-700",
  },
  approved: {
    ar: "معتمدة للنشر والتنزيل",
    en: "Approved",
    badgeClass: "border-brand-green/40 bg-brand-green/10 text-brand-green",
  },
};

export const SOURCE_CLASSIFICATION_LABELS: Record<
  SourceDataClassification,
  { ar: string; en: string; badgeClass: string }
> = {
  official: {
    ar: "البيانات الرسمية",
    en: "Official Data",
    badgeClass: "border-brand-green/40 bg-brand-green/10 text-brand-green",
  },
  research_estimates: {
    ar: "تقديرات المؤسسات البحثية",
    en: "Research Institute Estimates",
    badgeClass: "border-slate-400/50 bg-slate-500/10 text-slate-700 dark:text-slate-200",
  },
  commercial: {
    ar: "البيانات التجارية",
    en: "Commercial / Trade Data",
    badgeClass: "border-sky-500/40 bg-sky-500/10 text-sky-700 dark:text-sky-300",
  },
  analysis_conclusions: {
    ar: "التحليلات والاستنتاجات",
    en: "Analysis & Conclusions",
    badgeClass: "border-indigo-500/40 bg-indigo-500/10 text-indigo-700 dark:text-indigo-300",
  },
  financial_assumptions: {
    ar: "الافتراضات والنماذج المالية",
    en: "Financial Assumptions & Models",
    badgeClass: "border-brand-orange/40 bg-brand-orange/10 text-brand-orange",
  },
};

/**
 * Geographic regions in strict display order.
 * Note: For Apparel, `arab_world` is intentionally first, followed by Europe, Americas, Asia, Africa, Australia/Oceania.
 */
export const GEO_REGIONS_ORDER: Array<{
  id: GeoRegionId;
  ar: string;
  en: string;
}> = [
  { id: "egypt", ar: "جمهورية مصر العربية", en: "Egypt" },
  { id: "arab_world", ar: "الأسواق العربية", en: "Arab Markets" },
  { id: "europe", ar: "الأسواق الأوروبية", en: "Europe" },
  { id: "americas", ar: "الأمريكتان", en: "Americas" },
  { id: "asia", ar: "الأسواق الآسيوية", en: "Asia" },
  { id: "africa", ar: "الأسواق الإفريقية", en: "Africa" },
  { id: "oceania", ar: "أستراليا وأوقيانوسيا", en: "Australia & Oceania" },
];

export const SECTOR_ALLOWED_REGIONS: Record<GlobalMarketSectorId, GeoRegionId[]> = {
  construction: ["egypt"],
  environmental: ["arab_world", "europe", "americas", "asia", "africa", "oceania"],
  garment: ["arab_world", "europe", "americas", "asia", "africa", "oceania"],
  food: ["arab_world", "europe", "americas", "asia", "africa", "oceania"],
};

/**
 * VERIFIED PUBLISHED STUDIES REGISTRY
 * Populated exclusively from externally authored, evidence-backed research dossiers.
 * NEVER add placeholder or fabricated statistics here.
 */
export const PUBLISHED_GLOBAL_STUDIES: GlobalMarketStudy[] = [
  ...APPAREL_55_MASTER_STUDIES,
];

