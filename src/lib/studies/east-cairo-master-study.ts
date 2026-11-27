import type {
  GlobalMarketStudy,
  StudyChartDataset,
  StudyKpiMetric,
  StudySourceRecord,
  StudyTableDataset,
} from "../global-markets-data";

export type DataQualityTier = "A" | "B" | "C" | "D" | "E";

export interface DataQualityLabel {
  tier: DataQualityTier;
  labelAr: string;
  labelEn: string;
  descriptionAr: string;
  descriptionEn: string;
  badgeClass: string;
}


export type ConfidenceGrade = "confirmed" | "probable" | "estimated";

export interface ConfidenceTagInfo {
  grade: ConfidenceGrade;
  tagAr: string;
  tagEn: string;
  labelAr: string;
  labelEn: string;
  badgeClass: string;
  definitionAr: string;
  definitionEn: string;
}

export const CONFIDENCE_TAGS: Record<ConfidenceGrade, ConfidenceTagInfo> = {
  confirmed: {
    grade: "confirmed",
    tagAr: "[مؤكد]",
    tagEn: "[Confirmed]",
    labelAr: "مؤكد — مصدر رسمي أو استشاري دولي موثق",
    labelEn: "Confirmed — Official/Institutional Audit",
    badgeClass: "border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 font-bold",
    definitionAr: "من مصدر رسمي أو حكومي (NUCA, CAPMAS, ACUD, IDA) أو تقرير استشاري دولي موثّق (JLL, Knight Frank).",
    definitionEn: "Direct presidential/ministerial decrees, official NUCA planning records, Central Bank or CAPMAS census data, or Tier 1 global consultancy reports (JLL, Knight Frank).",
  },
  probable: {
    grade: "probable",
    tagAr: "[محتمل]",
    tagEn: "[Probable]",
    labelAr: "محتمل — مصدر عقاري متخصص أو منصة تسعير",
    labelEn: "Probable — Specialized Portal or Media",
    badgeClass: "border-blue-500/50 bg-blue-500/10 text-blue-700 dark:text-blue-300 font-bold",
    definitionAr: "من مصدر عقاري متخصص موثوق غير رسمي (منصات التسعير Aqarmap, Nawy, PropertyFinder، تقارير صحفية كـ Daily News Egypt والمال).",
    definitionEn: "From reputable specialized listing portals (Aqarmap, Nawy, PropertyFinder) or vetted economic financial press.",
  },
  estimated: {
    grade: "estimated",
    tagAr: "[تقديري]",
    tagEn: "[Estimated]",
    labelAr: "تقديري — استنتاج وتحليل لفريق البحث عند غياب رقم مباشر",
    labelEn: "Estimated — Analytical Inference",
    badgeClass: "border-amber-500/50 bg-amber-500/10 text-amber-700 dark:text-amber-300 font-bold",
    definitionAr: "استنتاج أو ترجيح من فريق البحث عند غياب رقم مباشر، ويُذكر صراحة كاستنتاج تحليلي وليس حقيقة قطعية.",
    definitionEn: "Empirical deduction by the research team in the absence of published district records; strictly disclosed as an estimate.",
  },
};

export const DATA_QUALITY_TIERS: Record<DataQualityTier, DataQualityLabel> = {
  A: {
    tier: "A",
    labelAr: "الفئة A — بيانات رسمية معتمدة",
    labelEn: "Tier A — Official Verified Data",
    descriptionAr: "بيانات صادرة بقرارات جمهورية أو وزارية أو هيئة المجتمعات العمرانية (NUCA) أو البنك المركزي أو CAPMAS.",
    descriptionEn: "Direct presidential/ministerial decrees, official NUCA planning records, Central Bank or CAPMAS census data.",
    badgeClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
  },
  B: {
    tier: "B",
    labelAr: "الفئة B — بيانات مؤسسية رصينة",
    labelEn: "Tier B — Reputable Institutional Data",
    descriptionAr: "تقارير وأبحاث مؤسسات استشارية دولية وإقليمية مرموقة (JLL, Savills, KW Egypt × Gateway Financials).",
    descriptionEn: "Published market research from recognized international real estate advisors (JLL, Savills, KW Egypt × Gateway).",
    badgeClass: "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300",
  },
  C: {
    tier: "C",
    labelAr: "الفئة C — رصد سوق وقوائم مطورين",
    labelEn: "Tier C — Market Observations & List Prices",
    descriptionAr: "قوائم أسعار مطورين معلنة وعروض بيع مرصودة بتاريخ محدد مع الإفصاح عن حجم العينة وطريقة المعالجة.",
    descriptionEn: "Developer price lists, active asking prices recorded at specific observation dates with explicit sample sizing.",
    badgeClass: "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
  },
  D: {
    tier: "D",
    labelAr: "الفئة D — نماذج وتقديرات تحليلية",
    labelEn: "Tier D — Modelled & Estimated Data",
    descriptionAr: "افتراضات مالية، ونماذج تدفقات نقدية مخصومة (DCF)، وسيناريوهات حساسية معلنة المعايير والافتراضات.",
    descriptionEn: "Financial feasibility DCF models, WACC discounting, and structured sensitivity underwriting assumptions.",
    badgeClass: "border-purple-500/40 bg-purple-500/10 text-purple-700 dark:text-purple-300",
  },
  E: {
    tier: "E",
    labelAr: "الفئة E — غير متاحة / تتطلب مسحًا ميدانيًا",
    labelEn: "Tier E — Unavailable / Field Verification Needed",
    descriptionAr: "مؤشرات غير منشورة علنًا على مستوى الحي؛ مدرجة صراحة في سجل فجوات البيانات لمنع التخمين أو التلفيق.",
    descriptionEn: "Indicators not publicly reported at district level; explicitly recorded in Data Gaps Register to preclude fabrication.",
    badgeClass: "border-rose-500/40 bg-rose-500/10 text-rose-700 dark:text-rose-300",
  },
};

export interface DistrictSubmarket {
  id: string;
  nameAr: string;
  nameEn: string;
  typologyAr: string;
  typologyEn: string;
  densityLevelAr: string;
  densityLevelEn: string;
  dominantLandUseAr: string;
  dominantLandUseEn: string;
  priceRangeEgpSqmAr: string;
  priceRangeEgpSqmEn: string;
  dataQualityTier: DataQualityTier;
  notesAr: string;
  notesEn: string;
  // Enhanced numerical & intra-city comparative fields
  avgFlatPriceEgpSqm?: number;
  avgVillaPriceEgpSqm?: number;
  avgCommercialPriceEgpSqm?: number;
  rentalYieldPct?: number;
  occupancyPct?: number;
  maturityScore?: number; // 0-100
  deliveryStatusAr?: string;
  deliveryStatusEn?: string;
  investmentAttractivenessScore?: number; // 0-100
  prosAr?: string[];
  prosEn?: string[];
  challengesAr?: string[];
  challengesEn?: string[];
  investorActionAr?: string;
  investorActionEn?: string;
}

export interface EastCairoCityProfile {
  id: string;
  confidenceGrade?: ConfidenceGrade;
  discrepancyHighlightAr?: string;
  discrepancyHighlightEn?: string;
  detailedSectorPricesAr?: { sectorAr: string; sectorEn: string; priceEgpSqm: number; changeAr?: string; noteAr?: string }[];
  keyPrivateDevelopersAr?: string[];
  keyPrivateDevelopersEn?: string[];
  underConstructionHighlightsAr?: string[];
  underConstructionHighlightsEn?: string[];

  // Inter-city numerical comparison benchmarks
  avgFlatPriceEgpSqm?: number;
  avgVillaPriceEgpSqm?: number;
  avgCommercialPriceEgpSqm?: number;
  avgLandPriceEgpSqm?: number;
  expectedRentalYieldPct?: number;
  currentEstimatedOccupancyPct?: number;
  overallMaturityScore?: number; // 0-100
  investmentRank?: number; // 1-12
  primaryAxisAr?: string;
  primaryAxisEn?: string;

  nameAr: string;
  nameEn: string;
  category: "established" | "extension" | "special_authority" | "private_community" | "regional_benchmark";
  establishmentLawAr: string;
  establishmentLawEn: string;
  planningAreaFeddans: number | null;
  planningAreaDisplayAr: string;
  planningAreaDisplayEn: string;
  urbanMassFeddans: number | null;
  urbanMassDisplayAr: string;
  urbanMassDisplayEn: string;
  targetPopulation: string;
  targetPopulationEn: string;
  actualPopulationStatusAr: string;
  actualPopulationStatusEn: string;
  dataQualityTier: DataQualityTier;
  locationAndBoundariesAr: string;
  locationAndBoundariesEn: string;
  majorRoadsAr: string[];
  majorRoadsEn: string[];
  landUseStructureAr: string[];
  landUseStructureEn: string[];
  submarkets: DistrictSubmarket[];
  investmentHypothesisAr: string;
  investmentHypothesisEn: string;
  promisingSectorsAr: string[];
  promisingSectorsEn: string[];
  keyRisksAr: string[];
  keyRisksEn: string[];
  preAcquisitionRequirementsAr: string[];
  preAcquisitionRequirementsEn: string[];
  officialSourceUrl: string;
  officialSourceNameAr: string;
  officialSourceNameEn: string;
}

export interface DataGapRecord {
  id: string;
  cityId: string;
  cityNameAr: string;
  cityNameEn: string;
  districtAr: string;
  districtEn: string;
  missingMetricAr: string;
  missingMetricEn: string;
  reasonUnavailableAr: string;
  reasonUnavailableEn: string;
  investmentImpactAr: string;
  investmentImpactEn: string;
  fieldVerificationMethodAr: string;
  fieldVerificationMethodEn: string;
  verificationSourceAr: string;
  verificationSourceEn: string;
  status: "pending_field_survey" | "in_progress" | "verified";
  priority: "high" | "medium" | "low";
}

export interface DeveloperProjectPipelineRecord {
  id: string;
  developerNameAr: string;
  developerNameEn: string;
  projectNameAr: string;
  projectNameEn: string;
  cityId: string;
  locationAr: string;
  locationEn: string;
  assetClassAr: string;
  assetClassEn: string;
  landAreaFeddans?: number;
  totalUnitsOrGlaDisplayAr: string;
  totalUnitsOrGlaDisplayEn: string;
  statusAr: string;
  statusEn: string;
  deliveryYearTarget: string;
  launchYear: string;
  indicativePriceEgpSqmAr: string;
  indicativePriceEgpSqmEn: string;
  paymentPlanAr: string;
  paymentPlanEn: string;
  sourceAttribution: string;
  dataQualityTier: DataQualityTier;
}

export const EAST_CAIRO_CITIES: EastCairoCityProfile[] = [
  {
    id: "obour-old",
    avgFlatPriceEgpSqm: 21500,
    avgVillaPriceEgpSqm: 36000,
    avgCommercialPriceEgpSqm: 58000,
    avgLandPriceEgpSqm: 18000,
    expectedRentalYieldPct: 7.8,
    currentEstimatedOccupancyPct: 84,
    overallMaturityScore: 88,
    investmentRank: 7,
    primaryAxisAr: "طريق مصر-الإسماعيلية الصحراوي ومحور العبور الرئيسي",
    primaryAxisEn: "Cairo-Ismailia Desert Rd & Main Obour Axis",
    nameAr: "العبور القديمة",
    nameEn: "Obour City (Old Obour)",
    category: "established",
    establishmentLawAr: "قرار رئيس مجلس الوزراء رقم 1608 لسنة 1990",
    establishmentLawEn: "Prime Ministerial Decree No. 1608 of 1990",
    planningAreaFeddans: 16000,
    planningAreaDisplayAr: "حوالي 16,000 فدان (إجمالي الزمام الرسمي)",
    planningAreaDisplayEn: "Approx. 16,000 Feddans (Total Planning Area)",
    urbanMassFeddans: 12500,
    urbanMassDisplayAr: "حوالي 12,500 فدان (كتلة عمرانية وصناعية قائمة)",
    urbanMassDisplayEn: "Approx. 12,500 Feddans (Built Urban & Industrial Mass)",
    targetPopulation: "حوالي 500 ألف نسمة عند اكتمال البناء [محتمل]",
    confidenceGrade: "probable",
    discrepancyHighlightAr: "تضارب بيانات السكان بنسبة 3 أضعاف بين تعداد 2023 (142,955 نسمة) ورقم منافس (47,787 نسمة)؛ وتضارب المصانع العاملة بين 432 و1,100+ مصنع؛ استخدامات الأراضي: ~4,500 فدان سكني، ~3,200 خدمات، ~3,700 صناعي.",
    discrepancyHighlightEn: "3x population variance between 2023 census (142,955) vs competing dataset (47,787); operating factories range from 432 to 1,100+.",
    detailedSectorPricesAr: [
      { sectorAr: "سكني (شقق)", sectorEn: "Residential Flats", priceEgpSqm: 21753, changeAr: "+9.6% سنويًا" },
      { sectorAr: "فيلات", sectorEn: "Villas", priceEgpSqm: 50037 },
      { sectorAr: "أراضي", sectorEn: "Land", priceEgpSqm: 11221 },
      { sectorAr: "تجاري", sectorEn: "Commercial Retail", priceEgpSqm: 82154 },
      { sectorAr: "إداري", sectorEn: "Administrative Offices", priceEgpSqm: 51411 },
      { sectorAr: "طبي", sectorEn: "Medical & Clinics", priceEgpSqm: 81855 }
    ],
    targetPopulationEn: "Planning target accommodating residential & industrial growth",
    actualPopulationStatusAr: "مدينة ناضجة ومأهولة فعليًا بكثافة سكانية وصناعية قائمة؛ لا تتوفر إحصائية موحدة حديثة معلنة لكل حي على حدة ويلزم التحقق الميداني.",
    actualPopulationStatusEn: "Mature, actively populated city with established residential & industrial fabric. District-level census requires field validation.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع بمحافظة القليوبية، عند الكيلو 26 طريق القاهرة–الإسماعيلية الصحراوي وحتى الكيلو 30. يحدها طريق الإسماعيلية جنوبًا ومحور العبور.",
    locationAndBoundariesEn: "Located in Qalyubia Governorate, at km 26–30 on Cairo–Ismailia Desert Road. Bounded south by Ismailia Road.",
    majorRoadsAr: [
      "طريق القاهرة–الإسماعيلية الصحراوي",
      "محور العبور الرئيسي",
      "محور بلبيس",
      "الطريق الدائري القديم القريب",
    ],
    majorRoadsEn: [
      "Cairo–Ismailia Desert Road",
      "Main Obour Corridor",
      "Belbeis Highway",
      "Proximity to Ring Road",
    ],
    landUseStructureAr: [
      "أحياء سكنية متعددة المستويات (الحي الأول حتى التاسع، وحي الجولف/السابع، والحي الرابع)",
      "مناطق صناعية ثقيلة ومتوسطة كبرى (ب، ج، أ)",
      "سوق العبور المركزي لتجارة الجملة والخضار والفاكهة والأسماك",
      "مناطق خدمات ومراكز تجارية وترفيهية ومستشفيات",
    ],
    landUseStructureEn: [
      "Residential districts across tiers (Districts 1 to 9, Golf/7th, 4th)",
      "Major industrial zones (A, B, C)",
      "Obour Central Wholesale Market (vegetables, fruit, fish)",
      "Community commercial strips, diagnostic clinics, service zones",
    ],
    submarkets: [
{
            "id": "obour-golf-7th",
            "nameAr": "حي الجولف (الحي السابع الفاخر)",
            "nameEn": "Golf District (7th Luxury Quarter)",
            "typologyAr": "فيلات وقصور ومجمعات سكنية راقية منخفضة الكثافة",
            "typologyEn": "Ultra-luxury villas, palaces and low-density residential enclaves",
            "densityLevelAr": "منخفضة جدًا (حدائق ومساحات خضراء واسعة)",
            "densityLevelEn": "Very low, expansive private gardens & golf-adjacent estates",
            "dominantLandUseAr": "سكني فاخر (فيلات مستقلة)، نادٍ رياضي، أنشطة خدمية راقية",
            "dominantLandUseEn": "High-end residential villas, golf resort, exclusive private amenities",
            "priceRangeEgpSqmAr": "24,000 – 30,000 ج.م/م² (شقق) | 35,000 – 48,000 ج.م/م² (فيلات)",
            "priceRangeEgpSqmEn": "24k – 30k EGP/sqm (Flats) | 35k – 48k EGP/sqm (Villas)",
            "dataQualityTier": "Tier A",
            "notesAr": "أرقى أحياء العبور القديمة وموطن النخبة الصناعية والطبية ورجال الأعمال. استقرار مجتمعي ونضج عمراني كامل منذ أكثر من 15 عاماً.",
            "notesEn": "The premier residential address in Old Obour, housing industrialists, physicians and business executives.",
            "avgFlatPriceEgpSqm": 26500,
            "avgVillaPriceEgpSqm": 40000,
            "avgCommercialPriceEgpSqm": 68000,
            "rentalYieldPct": 8.2,
            "occupancyPct": 86,
            "maturityScore": 94,
            "deliveryStatusAr": "مكتمل وناضج بالكامل",
            "deliveryStatusEn": "Fully Matured & Built Out",
            "investmentAttractivenessScore": 88,
            "prosAr": [
                  "أعلى قيمة عقارية في العبور واستقرار أسعار ممتاز",
                  "بيئة سكنية هادئة وشوارع مشجرة واسعة",
                  "طلب دائم على شراء وإيجار الفيلات"
            ],
            "prosEn": [
                  "Top capital stability in Obour with zero speculative swings",
                  "Placid green residential environment",
                  "Steady affluent family rental demand"
            ],
            "challengesAr": [
                  "ندرة الأراضي المتاحة للبناء الجديد",
                  "حجم صفقات الفيلات الكبيرة يتطلب سيولة مرتفعة"
            ],
            "challengesEn": [
                  "Scarcity of vacant plots",
                  "Substantial ticket size for detached villa transactions"
            ],
            "investorActionAr": "شراء فيلات لإعادة التجديد والبيع الفاخر أو التأجير طويل الأجل للكوادر الأجنبية بالمناطق الصناعية.",
            "investorActionEn": "Acquire secondary villas for luxury remodeling or long-term multinational corporate executive leasing."
      },
      {
            "id": "obour-dist-1-6",
            "nameAr": "الأحياء السكنية (من الأول حتى السادس)",
            "nameEn": "Core Residential Districts (1st through 6th)",
            "typologyAr": "عمارات سكنية ومناطق عائلية متكاملة الخدمات",
            "typologyEn": "Mid-to-upper residential apartment blocks and community centers",
            "densityLevelAr": "متوسطة إلى مرتفعة ومأهولة بنسبة تتجاوز 90%",
            "densityLevelEn": "Medium-high density, >90% fully inhabited",
            "dominantLandUseAr": "سكني عائلي، مدارس، مستشفيات، أسواق تجارية ومولات أحياء",
            "dominantLandUseEn": "Family residences, schools, hospitals, local souks and community malls",
            "priceRangeEgpSqmAr": "18,000 – 24,000 ج.م/م² (سكني) | 50,000 – 75,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "18k – 24k EGP/sqm (Res) | 50k – 75k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "الكتلة السكنية الأساسية لمدينة العبور وتتميز بكثافة سكانية فعلية ومرافق مكتملة (مياه، صرف، غاز طبيعي، اتصالات) وأسواق تجارية نشطة.",
            "notesEn": "The core urban mass of Obour with genuine demographic vibrancy and 100% utility connectivity.",
            "avgFlatPriceEgpSqm": 20500,
            "avgVillaPriceEgpSqm": 32000,
            "avgCommercialPriceEgpSqm": 56000,
            "rentalYieldPct": 7.8,
            "occupancyPct": 90,
            "maturityScore": 96,
            "deliveryStatusAr": "مكتمل ومأهول بالكامل",
            "deliveryStatusEn": "Fully Inhabited & Active",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "سيولة سريعة جدًا في بيع وتأجير الشقق",
                  "خدمات يومية مكتملة ومواصلات داخلية منتظمة",
                  "أسعار معقولة تناسب شريحة الموظفين وأصحاب المشروعات"
            ],
            "prosEn": [
                  "Very fast resale and tenant turnaround",
                  "Comprehensive daily services and transit",
                  "Accessible price point for middle-income households"
            ],
            "challengesAr": [
                  "هوامش نمو رأسمالي سنوي معتدلة (8-12%) وليست قفزات مضاربية"
            ],
            "challengesEn": [
                  "Moderate annual capital growth without speculative spikes"
            ],
            "investorActionAr": "الاستثمار في المحلات التجارية والمراكز الطبية على المحاور الرئيسية للأحياء لضمان عائد إيجاري دوري مستقر.",
            "investorActionEn": "Invest in ground-floor retail and specialized medical clinics along main intra-district avenues."
      },
      {
            "id": "obour-dist-8-9",
            "nameAr": "أحياء الفيلات (الحي الثامن والتاسع)",
            "nameEn": "Villa Quarters (8th & 9th Districts)",
            "typologyAr": "إسكان فيلات وعمارات فاخرة متوسطة الكثافة",
            "typologyEn": "Upper-scale villas and boutique apartment villas",
            "densityLevelAr": "متوسطة إلى منخفضة",
            "densityLevelEn": "Medium to low",
            "dominantLandUseAr": "سكني راقٍ، حدائق، أنشطة خدمية محدودة",
            "dominantLandUseEn": "Prime residential, landscaping, boutique services",
            "priceRangeEgpSqmAr": "22,000 – 28,000 ج.م/م² (سكني) | 34,000 – 44,000 ج.م/م² (فيلات)",
            "priceRangeEgpSqmEn": "22k – 28k EGP/sqm (Res) | 34k – 44k EGP/sqm (Villas)",
            "dataQualityTier": "Tier A",
            "notesAr": "امتداد راقٍ للحي السابع يتمتع بهدوء شديد وشوارع عريضة وواجهات معمارية كلاسيكية وحديثة.",
            "notesEn": "High-end residential extension adjacent to the 7th quarter offering privacy and wider avenues.",
            "avgFlatPriceEgpSqm": 24500,
            "avgVillaPriceEgpSqm": 38000,
            "avgCommercialPriceEgpSqm": 58000,
            "rentalYieldPct": 7.5,
            "occupancyPct": 82,
            "maturityScore": 90,
            "deliveryStatusAr": "مكتمل في معظمه",
            "deliveryStatusEn": "Predominantly Completed",
            "investmentAttractivenessScore": 83,
            "prosAr": [
                  "طابع معماري متناسق وخصوصية عالية",
                  "قرب مباشر من محور خط 10 وميدان العبور",
                  "نسب إشغال جيدة مع استقرار سكاني"
            ],
            "prosEn": [
                  "Homogeneous architectural styling and privacy",
                  "Direct access to Line 10 axis and Obour Square",
                  "Solid occupancy and stable tenant base"
            ],
            "challengesAr": [
                  "قلة الأنشطة التجارية الداخلية المسموح بها"
            ],
            "challengesEn": [
                  "Zoning limits on internal commercial activities"
            ],
            "investorActionAr": "شراء شقق دوبلكس وفيلات للبيع العائلي أو الإيجار السكني المستقر.",
            "investorActionEn": "Acquire duplexes and villas for stable long-term executive residential tenancy."
      },
      {
            "id": "obour-industrial",
            "nameAr": "المناطق الصناعية الكبرى (أ، ب، ج)",
            "nameEn": "Major Industrial Mega-Parks (Zones A, B & C)",
            "typologyAr": "قلاع صناعية ومستودعات لوجستية ومراكز توزيع كبرى",
            "typologyEn": "Heavy & light industrial manufacturing, warehousing and logistics hubs",
            "densityLevelAr": "مرتفعة تشغيلياً وصناعياً (أكثر من 1500 مصنع قائم)",
            "densityLevelEn": "Intense operational density with over 1,500 active factories",
            "dominantLandUseAr": "صناعات دوائية، غذائية، هندسية، غزل ونسيج، مخازن ومقار إدارة",
            "dominantLandUseEn": "Pharmaceuticals, food processing, engineering, textiles, bonded logistics",
            "priceRangeEgpSqmAr": "12,000 – 18,000 ج.م/م² (أراضٍ/عنابر) | 25,000 – 40,000 ج.م/م² (إداري/معارض)",
            "priceRangeEgpSqmEn": "12k – 18k EGP/sqm (Land/Sheds) | 25k – 40k EGP/sqm (Office/Showroom)",
            "dataQualityTier": "Tier A",
            "notesAr": "أحد أهم المراكز الصناعية في مصر وقاطرة الاقتصاد لشرق القاهرة. يضم مصانع أدوية عالمية (فايزر، إيبيكو، فاركو) وشركات أغذية كبرى.",
            "notesEn": "One of Egypt's powerhouse industrial zones, anchoring global pharma and food conglomerates.",
            "avgFlatPriceEgpSqm": 14000,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 42000,
            "rentalYieldPct": 10.8,
            "occupancyPct": 94,
            "maturityScore": 98,
            "deliveryStatusAr": "قائم ومشغول بالكامل ومكتمل البنية الأساسية",
            "deliveryStatusEn": "Fully Operational & Stabilized",
            "investmentAttractivenessScore": 93,
            "prosAr": [
                  "أعلى عائد تأجيري استثماري على العنابر والمخازن (10-12% سنوياً)",
                  "قوة كهربائية ومحطات مياه وصرف صناعي مخصصة",
                  "موقع استراتيجي على طريق الإسماعيلية والدائري"
            ],
            "prosEn": [
                  "Top-tier industrial yields (10-12% p.a.) on ready-built factory sheds",
                  "Dedicated heavy industrial power & wastewater infrastructure",
                  "Direct frontage on Cairo-Ismailia expressway"
            ],
            "challengesAr": [
                  "اشتراطات ترخيص صناعي وبيئي صارمة",
                  "ندرة الأراضي الصناعية الشاغرة بالأسعار الرسمية"
            ],
            "challengesEn": [
                  "Rigid industrial and environmental licensing procedures",
                  "Scarcity of virgin industrial plots at official government rates"
            ],
            "investorActionAr": "تطوير مجمعات مستودعات ومخازن قياسية ولوجستيات التبريد (Cold Storage) للإيجار للشركات الدوائية والغذائية.",
            "investorActionEn": "Develop institutional-grade logistics parks and cold-storage facilities for pharma and FMCG tenants."
      },
      {
            "id": "obour-central-strip",
            "nameAr": "المحور المركزي والخدمي (سوق العبور والمراكز التجارية)",
            "nameEn": "Central Commercial & Services Strip",
            "typologyAr": "شريط الخدمات الإقليمية والتجارة وتجارة الجملة",
            "typologyEn": "Regional commercial corridor, retail strips and wholesale market hub",
            "densityLevelAr": "مرتفعة جدًا على مدار اليوم",
            "densityLevelEn": "High daily commercial footfall",
            "dominantLandUseAr": "مولات تجارية، بنوك، مطاعم، مجمعات طبية، سوق العبور للجملة",
            "dominantLandUseEn": "Retail malls, bank branches, hospitals, wholesale transit hub",
            "priceRangeEgpSqmAr": "22,000 – 28,000 ج.م/م² (سكني) | 65,000 – 95,000 ج.م/م² (تجاري إداري)",
            "priceRangeEgpSqmEn": "22k – 28k EGP/sqm (Res) | 65k – 95k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "شريان الحركة التجارية لمدينة العبور والمدن المجاورة. يربط مدخل المدينة بطريق بلبيس ويستقطب آلاف الزوار يوميًا.",
            "notesEn": "The primary commercial and transit spine of Obour with high daily footfall and banking presence.",
            "avgFlatPriceEgpSqm": 24000,
            "avgVillaPriceEgpSqm": 36000,
            "avgCommercialPriceEgpSqm": 78000,
            "rentalYieldPct": 9.8,
            "occupancyPct": 88,
            "maturityScore": 92,
            "deliveryStatusAr": "مكتمل ونشط تجاريًا",
            "deliveryStatusEn": "Fully Active Commercial Node",
            "investmentAttractivenessScore": 91,
            "prosAr": [
                  "حركة تجارية مستمرة وقوة شرائية قائمة",
                  "طلب قوي من فروع البنوك ومطاعم الوجبات السريعة",
                  "سهولة الوصول من كافة أحياء المدينة"
            ],
            "prosEn": [
                  "Non-stop commercial vibrancy and established purchasing power",
                  "Strong tenant appetite from banks, chains and clinics",
                  "Easy access from all residential zones"
            ],
            "challengesAr": [
                  "اختناقات مرورية في ساعات الذروة حول الميادين الرئيسية"
            ],
            "challengesEn": [
                  "Traffic chokepoints during peak evening retail hours"
            ],
            "investorActionAr": "شراء محلات تجارية ومكاتب بنكية مؤجرة بعقود طويلة الأجل.",
            "investorActionEn": "Acquire retail strip spaces and bank-leased commercial properties."
      }
    ],
    investmentHypothesisAr: "مدينة أكثر نضجًا من المجتمعات المحيطة، مع طلب حقيقي مدفوع بالسكان القائمين والعمالة والأنشطة الصناعية والخدمية الراسخة.",
    investmentHypothesisEn: "Mature market compared to newer peripheries, with genuine demand driven by existing residents, workforce, and industrial base.",
    promisingSectorsAr: [
      "محلات الخدمات اليومية والتجزئة الحيوية",
      "المراكز الطبية التخصصية وعيادات اليوم الواحد والتشخيص",
      "مكاتب الخدمات المهنية والهندسية والإدارية الصغيرة",
      "الإسكان متوسط وفوق متوسط السعر التكميلي",
    ],
    promisingSectorsEn: [
      "Essential daily convenience retail",
      "Specialized polyclinics & diagnostic centres",
      "SME professional & corporate service offices",
      "Mid-market residential infill development",
    ],
    keyRisksAr: [
      "تفاوت جودة الشوارع والمرافق بين الأحياء القديمة والجديدة",
      "منافسة تجارية قوية من المحلات والأنشطة القائمة بالفعل",
      "تباين ملحوظ في القوة الشرائية بين القطاعات السكنية المختلفة",
    ],
    keyRisksEn: [
      "Disparity in infrastructure quality between older & newer districts",
      "Intense local competition from established retail and service hubs",
      "Purchasing power variations across different neighborhoods",
    ],
    preAcquisitionRequirementsAr: [
      "رصد التعداد التقديري للسكان المقيمين في الحي المستهدف",
      "مسح حركة المشاة والسيارات في 3 فترات يومية (صباح، ذروة، مساء)",
      "مراجعة قيود الارتفاع والردود والاشتراطات البنائية في جهاز المدينة",
    ],
    preAcquisitionRequirementsEn: [
      "Validate resident headcount for specific target district",
      "Conduct pedestrian & vehicular traffic counts across 3 daily peak windows",
      "Confirm building codes, setbacks, heights & FAR with Obour City Authority",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=13",
    officialSourceNameAr: "هيئة المجتمعات العمرانية الجديدة – جهاز مدينة العبور",
    officialSourceNameEn: "NUCA – Obour City Development Authority",
  },
  {
    id: "obour-new",
    avgFlatPriceEgpSqm: 14500,
    avgVillaPriceEgpSqm: 26000,
    avgCommercialPriceEgpSqm: 36000,
    avgLandPriceEgpSqm: 9500,
    expectedRentalYieldPct: 7.2,
    currentEstimatedOccupancyPct: 42,
    overallMaturityScore: 54,
    investmentRank: 8,
    primaryAxisAr: "محور بلبيس وطريق الإسماعيلية والدائري الإقليمي",
    primaryAxisEn: "Belbeis Corridor, Ismailia Rd & Regional Ring Rd",
    nameAr: "العبور الجديدة",
    nameEn: "New Obour City",
    category: "extension",
    establishmentLawAr: "قرار رئيس الجمهورية رقم 246 لسنة 2016",
    establishmentLawEn: "Presidential Decree No. 246 of 2016",
    planningAreaFeddans: 58914.4,
    planningAreaDisplayAr: "58,914.4 فدان (الرئاسة) / قرابة 59 ألف فدان (NUCA)",
    planningAreaDisplayEn: "58,914.4 Feddans (Presidency) / ~59k Feddans (NUCA)",
    urbanMassFeddans: 22000,
    urbanMassDisplayAr: "قرابة 22,000 فدان (كتلة عمرانية ومناطق أولوية)",
    urbanMassDisplayEn: "Approx. 22,000 Feddans (Urban Mass Priority Zones)",
    targetPopulation: "2.9 مليون نسمة (مستهدف تخطيطي مستقبلي للرئاسة – ليس تعدادًا حاليًا)",
    targetPopulationEn: "2.9 Million residents (Long-term planning target – NOT current residents)",
    actualPopulationStatusAr: "بيانات التعداد الفعلي الحالي غير متاحة علنًا لكل حي؛ التجمعات في مرحلة التسليم والنمو والإشغال الأولي التدريجي.",
    confidenceGrade: "confirmed",
    discrepancyHighlightAr: "العبور القديمة والجديدة كيانان إداريان منفصلان تمامًا؛ العبور الجديدة مساحتها ~58,914 فدان ومستهدفها 2.9 مليون نسمة، وتضم تجمعات الأمل، القادسية، والطلعة، وأشهر أحيائها حي المجد.",
    discrepancyHighlightEn: "Old and New Obour are legally separate entities. New Obour spans 58,914 feddans with 2.9M planning target, incorporating Al-Majd, Al-Amal, Al-Qadisiya, and Al-Tal'a.",
    underConstructionHighlightsAr: [
      "مستشفى 189 سريرًا قيد الإنشاء في منطقة طبا [مؤكد، مايو 2025]",
      "مجمع حرفي بـ 76 ورشة بالمنطقة الصناعية الأولى [مؤكد]",
      "حوالي 91,806 وحدة سكنية مخططة بمشروعات الهيئة (إسكان شباب/مستقبل، اقتصادي، فاخر، دار مصر) [محتمل]"
    ],
    underConstructionHighlightsEn: [
      "189-bed hospital under construction in Taba area [Confirmed, May 2025]",
      "Craft complex with 76 workshops in 1st Industrial Zone [Confirmed]",
      "91,806 planned housing units under NUCA schemes [Probable]"
    ],
    keyPrivateDevelopersAr: [
      "مزايا للتطوير: مشروع Town Ten (25 فدان)",
      "أفا مينا جروب: Oro Obour (28 فدان، 200 فيلا + مول تجاري، مبيعات متوقعة 3 مليار جنيه)",
      "إعمار للمقاولات: مشروعا Verdance وAspire التجاريان/الإداريان (استثمار ~650 مليون جنيه ضمن محفظة 1.5 مليار)"
    ],
    keyPrivateDevelopersEn: [
      "Mazaya Developments: Town Ten (25 feddans)",
      "Ava Mina Group: Oro Obour (28 feddans, 200 villas + mall, EGP 3B sales)",
      "Emaar Contracting: Verdance & Aspire commercial/office (EGP 650M capex)"
    ],
    detailedSectorPricesAr: [
      { sectorAr: "طروحات NUCA (2022)", sectorEn: "NUCA 2022 Offerings", priceEgpSqm: 6120, noteAr: "طرح إسكان رسمي" },
      { sectorAr: "قرعة السكن المميز (مارس 2024)", sectorEn: "Sakan Momayaz Ballot (Mar 2024)", priceEgpSqm: 8500, noteAr: "سعر رسمي معتمد" }
    ],
    actualPopulationStatusEn: "Current resident count not publicly published per district. Communities are in progressive handover & early occupancy phase.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع بين الكيلو 9 والكيلو 15 طريق بلبيس الصحراوي، وبين الكيلو 26 والكيلو 48 طريق القاهرة–الإسماعيلية الصحراوي.",
    locationAndBoundariesEn: "Located between km 9–15 Cairo–Belbeis Desert Rd, and km 26–48 Cairo–Ismailia Desert Rd.",
    majorRoadsAr: [
      "طريق القاهرة–الإسماعيلية الصحراوي",
      "الطريق الدائري الإقليمي",
      "طريق القاهرة–بلبيس الصحراوي",
      "محور R2 ومحور العبور الجديدة",
    ],
    majorRoadsEn: [
      "Cairo–Ismailia Desert Road",
      "Regional Ring Road",
      "Cairo–Belbeis Desert Road",
      "R2 Corridor & Internal Arterials",
    ],
    landUseStructureAr: [
      "الحي 24 على طريق R2 والمجاورات من 1 إلى 6",
      "الحي 13 (قطاعين 13A و13B) ومناطق إسكان اجتماعي وبديل",
      "منطقة 2600 فدان ومناطق توفيق الأوضاع والأراضي الشاغرة",
      "مناطق خدمات مركزية مخططة وشبكات مرافق قيد الاكتمال",
    ],
    landUseStructureEn: [
      "District 24 on R2 corridor & Neighborhoods 1–6",
      "District 13 (Zones 13A & 13B), social housing & replacement developments",
      "2,600 Feddan zone, land tenure regularization sectors",
      "Master-planned central service nodes with infrastructure phasing",
    ],
    submarkets: [
{
            "id": "new-obour-r2-dist24",
            "nameAr": "الحي 24 والحي 39 ومحور R2 التنموي",
            "nameEn": "Districts 24, 39 & R2 Development Corridor",
            "typologyAr": "كتلة إسكان عائلي واستثماري واعدة قيد التشييد",
            "typologyEn": "Emerging mid-market residential and investment corridor",
            "densityLevelAr": "منخفضة إلى متوسطة قيد التزايد",
            "densityLevelEn": "Low to medium, actively expanding",
            "dominantLandUseAr": "سكني استثماري، أنشطة خدمية، إسكان حر متميز",
            "dominantLandUseEn": "Private residential schemes, community retail, public services",
            "priceRangeEgpSqmAr": "15,000 – 19,000 ج.م/م² (سكني) | 35,000 – 50,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "15k – 19k EGP/sqm (Res) | 35k – 50k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "يقع مباشرة على محور R2 الرابط بين طريق القاهرة-الإسماعيلية والطريق الدائري الإقليمي، ويعد من أوائل أحياء العبور الجديدة التي تم طرحها للمطورين والأفراد.",
            "notesEn": "Fronts the R2 artery linking Cairo-Ismailia to Regional Ring Road; early urban pioneer in New Obour.",
            "avgFlatPriceEgpSqm": 16500,
            "avgVillaPriceEgpSqm": 28000,
            "avgCommercialPriceEgpSqm": 42000,
            "rentalYieldPct": 7.5,
            "occupancyPct": 38,
            "maturityScore": 52,
            "deliveryStatusAr": "قيد البناء والتسليم المرحلي (2025–2027)",
            "deliveryStatusEn": "Active Construction & Phased Handover (2025–2027)",
            "investmentAttractivenessScore": 82,
            "prosAr": [
                  "أسعار أراضٍ ووحدات جاذبة جداً مع هوامش نمو رأسمالي تفوق 25%",
                  "تخطيط شوارع حديث ومحاور رئيسية واسعة",
                  "قرب مباشر من المناطق الصناعية ومحطة القطار"
            ],
            "prosEn": [
                  "Highly competitive entry prices with >25% capital upside",
                  "Modern road grids and wide boulevards",
                  "Proximity to industrial employment hubs"
            ],
            "challengesAr": [
                  "وتيرة توصيل المرافق الثانوية في بعض البلوكات الداخلية"
            ],
            "challengesEn": [
                  "Secondary utility rollout pace in internal sub-blocks"
            ],
            "investorActionAr": "شراء أراضٍ وبناء عمارات سكنية وتجارية بهدف البيع بالتقسيط أو الاحتفاظ طويل الأجل.",
            "investorActionEn": "Acquire residential and retail parcels for staged development or mid-term holding."
      },
      {
            "id": "new-obour-2600-feddan",
            "nameAr": "منطقة الـ 2600 فدان (سكن بديل وسكن لكل المصريين)",
            "nameEn": "2600 Feddan Zone (Public & Affordable Housing Hub)",
            "typologyAr": "مجمعات سكنية ضخمة مدعومة حكومياً مع مراكز خدمات",
            "typologyEn": "Large-scale public affordable housing blocks and service centres",
            "densityLevelAr": "مرتفعة من حيث عدد الوحدات المنفذة (أكثر من 30 ألف وحدة)",
            "densityLevelEn": "High structural unit density (>30,000 completed units)",
            "dominantLandUseAr": "إسكان اجتماعي ومتوسط، مدارس حكومية، مراكز شباب، محال تجارية",
            "dominantLandUseEn": "Social/affordable apartments, public schools, youth centers, local markets",
            "priceRangeEgpSqmAr": "12,000 – 15,000 ج.م/م² (سكني) | 30,000 – 42,000 ج.م/م² (تجاري بالمزادات)",
            "priceRangeEgpSqmEn": "12k – 15k EGP/sqm (Res) | 30k – 42k EGP/sqm (Commercial Auction)",
            "dataQualityTier": "Tier A",
            "notesAr": "أكبر تجمع لإسكان 'سكن لكل المصريين' في شرق القاهرة. نفذت الدولة فيه آلاف الوحدات كاملة التشطيب والمرافق مع تخصيص المدارس والملاعب ومحطات الحافلات.",
            "notesEn": "The centerpiece of national affordable housing in East Cairo with extensive completed social infrastructure.",
            "avgFlatPriceEgpSqm": 13200,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 35000,
            "rentalYieldPct": 7.2,
            "occupancyPct": 55,
            "maturityScore": 68,
            "deliveryStatusAr": "مسلم في معظمه مع تسكين تدريجي مستمر",
            "deliveryStatusEn": "Largely delivered with continuous family habitation",
            "investmentAttractivenessScore": 78,
            "prosAr": [
                  "كتلة سكانية حقيقية تتزايد شهرياً",
                  "طلب تجاري وخدمي كثيف على السلع الأساسية والمخابز والصيدليات",
                  "مرافق وطرق رئيسية منتهية بالكامل"
            ],
            "prosEn": [
                  "Real resident footprint growing month over month",
                  "Intense demand for basic retail, pharmacies, grocers",
                  "Completed arterial road and public bus infrastructure"
            ],
            "challengesAr": [
                  "الطابع الاجتماعي للوحدات يحد من الاستثمار السكني الفاخر"
            ],
            "challengesEn": [
                  "Social housing covenants restrict speculative private residential re-trading"
            ],
            "investorActionAr": "المنافسة في مزادات المحلات التجارية والصيدليات والأنشطة الغذائية لخدمة السكان المقيمين.",
            "investorActionEn": "Bid in public authority auctions for ground-floor commercial shops and retail services."
      },
      {
            "id": "new-obour-hay-elmagd",
            "nameAr": "حي المجد والكرامة (الإسكان المتوسط والمتميز)",
            "nameEn": "Hay El-Magd & Al-Karama (Middle-Income District)",
            "typologyAr": "أحياء عائلية متوسطة مخططة تضم أراضي وعمارات خاصة",
            "typologyEn": "Master-planned middle-income family quarters with private apartment plots",
            "densityLevelAr": "متوسطة قيد الاستقرار",
            "densityLevelEn": "Medium, stabilizing",
            "dominantLandUseAr": "سكني عائلي، خدمات تجارية ومجتمعية، مساجد ومدارس",
            "dominantLandUseEn": "Family apartments, community retail, mosques, local schools",
            "priceRangeEgpSqmAr": "13,500 – 17,000 ج.م/م² (سكني) | 32,000 – 45,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "13.5k – 17k EGP/sqm (Res) | 32k – 45k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "يقع بالقرب من الطريق الدائري الإقليمي ويمثل نموذجاً للأحياء المنظمة ذات الطابع الهادئ للطبقة المتوسطة العاملة في العبور والعاشر من رمضان.",
            "notesEn": "Located near Regional Ring Road, catering to working professionals in Obour and 10th of Ramadan.",
            "avgFlatPriceEgpSqm": 14800,
            "avgVillaPriceEgpSqm": 25000,
            "avgCommercialPriceEgpSqm": 38000,
            "rentalYieldPct": 7.4,
            "occupancyPct": 48,
            "maturityScore": 58,
            "deliveryStatusAr": "مراحل تسليم وبناء نشطة",
            "deliveryStatusEn": "Active Phased Delivery & Occupancy",
            "investmentAttractivenessScore": 80,
            "prosAr": [
                  "طلب إيجاري وسكني مستقر من أسر العاملين بالمدن الصناعية المجاورة",
                  "أسعار معقولة جداً وتسهيلات سداد مريحة"
            ],
            "prosEn": [
                  "Stable tenant demand from industrial workforce families",
                  "Affordable purchase baseline"
            ],
            "challengesAr": [
                  "الحاجة لمزيد من خطوط المواصلات العامة المنتظمة داخل الأحياء"
            ],
            "challengesEn": [
                  "Need for expanded intra-district public transit feeder lines"
            ],
            "investorActionAr": "شراء وتطوير عمارات سكنية متكاملة وإعادة بيعها بنظام التقسيط المباشر للمواطنين.",
            "investorActionEn": "Develop residential apartment blocks for installment-based retail sales to families."
      },
      {
            "id": "new-obour-tawfeeq-alamal",
            "nameAr": "مناطق توفيق الأوضاع (الأمل، القادسية، محور بلبيس)",
            "nameEn": "Land Regularization Belts (Al-Amal, Al-Qadisiya, Belbeis Rd)",
            "typologyAr": "أراضٍ زراعية وسكنية سابقة قيد التقنين والتخطيط العمراني",
            "typologyEn": "Former agricultural holdings undergoing master planning and tenure regularization",
            "densityLevelAr": "منخفضة حاليًا مع وجود إشغالات ومبانٍ متفرقة",
            "densityLevelEn": "Low density with scattered initial settlements",
            "dominantLandUseAr": "أراضٍ قيد التقنين، مخطط لمشروعات عمرانية متكاملة ومراكز لوجستية",
            "dominantLandUseEn": "Plots under regularization, planned future mixed-use and logistics",
            "priceRangeEgpSqmAr": "7,000 – 11,000 ج.م/م² (أراضٍ قبل/بعد الرسوم) | 18,000 – 28,000 ج.م/م² (مباني أولية)",
            "priceRangeEgpSqmEn": "7k – 11k EGP/sqm (Land pre/post fees) | 18k – 28k EGP/sqm (Initial built)",
            "dataQualityTier": "Tier D",
            "notesAr": "مساحات شاسعة دخلت الكردون بالقرار الجمهوري 249 لسنة 2016. يقوم جهاز المدينة حاليًا بدراسة ملفات توفيق الأوضاع وسداد رسوم التحسين والمرافق.",
            "notesEn": "Vast expanses incorporated under Presidential Decree 249/2016 undergoing utility enhancement charge settlements.",
            "avgFlatPriceEgpSqm": 11000,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 24000,
            "rentalYieldPct": 6.8,
            "occupancyPct": 22,
            "maturityScore": 32,
            "deliveryStatusAr": "قيد التقنين وتخطيط شبكات المرافق السيادية",
            "deliveryStatusEn": "Under Legal Regularization & Trunk Infrastructure Planning",
            "investmentAttractivenessScore": 76,
            "prosAr": [
                  "أدنى سعر للمتر المربع للأراضي في نطاق شرق القاهرة",
                  "إمكانات مضاعفة سعرية هائلة عند صدور المخططات التفصيلية المعتمدة"
            ],
            "prosEn": [
                  "Lowest land price per square meter in East Cairo perimeter",
                  "Substantial multiplier upside upon final approved master plan adoption"
            ],
            "challengesAr": [
                  "مخاطر قانونية وإجرائية تتعلق بسداد رسوم المرافق والتقنين لجهاز المدينة",
                  "أفق زمني طويل للاكتمال الكامل"
            ],
            "challengesEn": [
                  "Legal and administrative risks regarding regularization fee payments to NUCA",
                  "Long development gestation"
            ],
            "investorActionAr": "الاستحواذ الانتقائي فقط على القطع التي أنهت إجراءات توفيق الأوضاع واستخرجت إخطارات سداد رسمية من جهاز المدينة.",
            "investorActionEn": "Selective acquisition restricted to plots with finalized NUCA clearance and official payment notices."
      }
    ],
    investmentHypothesisAr: "فرصة تنموية كبرى مرتبطة بالمدى المتوسط وتوقيت اكتمال المرافق ونقل السكان الفعلي؛ الأولوية للخدمات الأساسية في المناطق المسلمة.",
    investmentHypothesisEn: "Medium-term growth corridor dependent on actual occupancy momentum and utility delivery; focus on daily essentials in populated clusters.",
    promisingSectorsAr: [
      "متاجر السلع الأساسية والخدمات اليومية للأسر المستقرة",
      "المراكز الطبية الأولية والصيدليات والمختبرات",
      "الحضانات والمدارس الأساسية الخاصة",
      "التجارة المحلية في المناطق ذات الكثافة المسلمة فعليًا",
    ],
    promisingSectorsEn: [
      "Convenience groceries, essential retail & neighbourhood services",
      "Primary health clinics, community pharmacies & labs",
      "Nurseries & private K-12 foundational schools",
      "Community commercial strips directly adjacent to inhabited blocks",
    ],
    keyRisksAr: [
      "الفجوة الزمنية الكبيرة بين المساحة المخططة والإشغال الفعلي",
      "بطء انتقال الأسر في بعض المجاورات لانتظار استكمال المواصلات",
      "مخاطر عدم تزامن تشغيل شبكات المرافق مع استلام الأراضي",
    ],
    keyRisksEn: [
      "Significant lead time between zoned planning acreage and actual occupancy",
      "Pacing of residential move-in awaiting transit connectivity",
      "Risk of lag in utility infrastructure hook-ups relative to plot handover",
    ],
    preAcquisitionRequirementsAr: [
      "معاينة ميدانية لنسب إشغال العمارات والمجاورات الملاصقة للأرض",
      "التأكد من تشغيل شبكات الكهرباء ومياه الشرب والصرف الصحي رسميًا",
      "التحقق من اعتماد المخطط التفصيلي وسند الملكية بجهاز المدينة",
    ],
    preAcquisitionRequirementsEn: [
      "Field verification of actual inhabited units in surrounding clusters",
      "Official confirmation of energized electricity, potable water & sewerage",
      "Verification of approved detailed master plan & allocation decree at city authority",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=16",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز العبور الجديدة / موقع الرئاسة",
    officialSourceNameEn: "NUCA – New Obour Authority / Presidency State Projects Portal",
  },
  {
    id: "new-cairo",
    avgFlatPriceEgpSqm: 49500,
    avgVillaPriceEgpSqm: 85000,
    avgCommercialPriceEgpSqm: 145000,
    avgLandPriceEgpSqm: 38000,
    expectedRentalYieldPct: 9.2,
    currentEstimatedOccupancyPct: 78,
    overallMaturityScore: 92,
    investmentRank: 1,
    primaryAxisAr: "محور التسعين الشمالي والجنوبي ومحور محمد بن زايد والدائري الأوسطي",
    primaryAxisEn: "North & South 90th Axis, Bin Zayed Axis & Middle Ring Rd",
    nameAr: "القاهرة الجديدة",
    nameEn: "New Cairo",
    category: "established",
    establishmentLawAr: "قرار رئيس الجمهورية رقم 191 لسنة 2000 وتعديلاته",
    establishmentLawEn: "Presidential Decree No. 191 of 2000 & amendments",
    planningAreaFeddans: 89000,
    planningAreaDisplayAr: "قرابة 89,000 فدان (المساحة المنشورة NUCA)",
    planningAreaDisplayEn: "Approx. 89,000 Feddans (NUCA Published Area)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "موزعة بين 5 تجمعات رئيسية وامتدادات عمرانية متعددة",
    urbanMassDisplayEn: "Spanning 5 core settlements and multiple submarket extensions",
    targetPopulation: "5.0 مليون نسمة مستهدف تخطيطي عند اكتمال المراحل",
    targetPopulationEn: "5.0 Million planning target upon full build-out",
    actualPopulationStatusAr: "الكتلة السكانية الأكبر والأكثر ثراءً بشرق القاهرة؛ تباين كبير في الإشغال بين التجمع الخامس الراسخ ومناطق الامتداد كبيت الوطن.",
    actualPopulationStatusEn: "Highest-income residential mass in East Cairo; marked occupancy difference between mature 5th Settlement and extensions like Beit Al-Watan.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع شرق الطريق الدائري، بين طريقي القاهرة–السويس شمالًا والقاهرة–العين السخنة جنوبًا.",
    locationAndBoundariesEn: "Located east of Ring Road, bounded north by Cairo–Suez Road and south by Cairo–Ain Sokhna Road.",
    majorRoadsAr: [
      "الطريق الدائري",
      "محور التسعين الشمالي والتسعين الجنوبي",
      "محور محمد بن زايد الشمالي والجنوبي",
      "طريق السويس ومحور المشير ومحور محمد نجيب",
      "محور طلعت حرب ومحور الجزيرة",
      "خط المونوريل شرق النيل (محطات متعددة)",
    ],
    majorRoadsEn: [
      "Cairo Ring Road",
      "North & South 90th Street Corridors",
      "Mohamed Bin Zayed Northern/Southern Corridors",
      "Suez Road, Field Marshal Tantawy & Mohamed Naguib Axes",
      "Talaat Harb & Gezira Corridors",
      "East Nile Monorail Line (Multiple Stations)",
    ],
    landUseStructureAr: [
      "التجمع الأول (الياسمين، البنفسج، المستثمرين الشمالي)",
      "التجمع الثالث (أحياء إسكان ومراكز خدمات مجتمعية)",
      "التجمع الخامس (القطاع الذهبي، غرب الأرابيسك، الدبلوماسيين، الشويفات)",
      "التجمع السادس والامتدادات الجنوبية",
      "مناطق بيت الوطن (منطقة 1 إلى 8 ومحور النور)",
      "مناطق اللوتس والأندلس والنرجس الجديدة وجنوب الأكاديمية",
    ],
    landUseStructureEn: [
      "First Settlement (Al-Yasmine, Al-Banafsaj, North Investors)",
      "Third Settlement (Residential & community service centres)",
      "Fifth Settlement (Golden Square, Diplomats, Choueifat, Sector 1-5)",
      "Sixth Settlement & Southern Expansions",
      "Beit Al-Watan (Zones 1 to 8 & Al-Nour corridor)",
      "Al-Lotus, Al-Andalus, New Narges & South Academy",
    ],
    submarkets: [
{
            "id": "nc-fifth-settlement-golden-square",
            "nameAr": "المربع الذهبي (Golden Square)",
            "nameEn": "Golden Square (New Cairo Prime)",
            "typologyAr": "كومباوندات وفيلات فاخرة متكاملة الخدمات",
            "typologyEn": "Ultra-prime gated residential & villa master communities",
            "densityLevelAr": "منخفضة إلى متوسطة (مجتمعات مغلقة راقية)",
            "densityLevelEn": "Low-to-medium (luxury gated compounds)",
            "dominantLandUseAr": "سكني فاخر، نوادٍ رياضية، مراكز تجارية راقية",
            "dominantLandUseEn": "High-end residential, private sports clubs, lifestyle retail",
            "priceRangeEgpSqmAr": "65,000 – 95,000 ج.م/م² (سكني) | 140,000 – 210,000 ج.م/م² (تجاري/إداري)",
            "priceRangeEgpSqmEn": "65k – 95k EGP/sqm (Residential) | 140k – 210k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "يضم مشروعات كبرى الشركات: سوديك (Villette)، ماونتن فيو، بالم هيلز، مراسم، وإعمار (Mivida). أعلى قيمة أصول في التجمع الخامس واستقرار طلبي استثنائي.",
            "notesEn": "Anchored by top-tier developers (Sodic, Mountain View, Palm Hills, Marakez, Emaar). Premium capital preservation hub.",
            "avgFlatPriceEgpSqm": 68000,
            "avgVillaPriceEgpSqm": 105000,
            "avgCommercialPriceEgpSqm": 180000,
            "rentalYieldPct": 9.6,
            "occupancyPct": 85,
            "maturityScore": 94,
            "deliveryStatusAr": "مكتمل في معظمه (تسليم فوري ومراحل أخيرة)",
            "deliveryStatusEn": "Predominantly Delivered / Immediate Occupancy",
            "investmentAttractivenessScore": 95,
            "prosAr": [
                  "أعلى معدل أمان رأسمالي وإعادة بيع",
                  "إشغال حقيقي ومجتمع نخبوي متجانس",
                  "قرب مباشر من الجامعة الأمريكية ومحور بن زايد"
            ],
            "prosEn": [
                  "Highest capital preservation and secondary liquidity",
                  "Genuine high-income executive occupancy",
                  "Adjacent to AUC and Bin Zayed Axis"
            ],
            "challengesAr": [
                  "ارتفاع تذكرة الدخول الرأسمالية",
                  "ندرة الأراضي الخام المتاحة للتطوير الجديد"
            ],
            "challengesEn": [
                  "High entry ticket",
                  "Scarcity of raw infill land for new schemes"
            ],
            "investorActionAr": "شراء أصول مدرة للدخل، أو الاستحواذ على عيادات ومكاتب تجارية فاخرة للتأجير للشركات متعددة الجنسيات.",
            "investorActionEn": "Acquire income-generating retail/office assets or luxury villas for corporate leasing."
      },
      {
            "id": "nc-90th-axis",
            "nameAr": "محور التسعين الشمالي والجنوبي",
            "nameEn": "North & South 90th Commercial Axis",
            "typologyAr": "شريان الأعمال والتجارة والمقرات الإقليمية (CBD التجمع)",
            "typologyEn": "Commercial, banking HQ and regional office corridor",
            "densityLevelAr": "مرتفعة حركيًا ومتوسطة إنشائيًا",
            "densityLevelEn": "High daytime traffic, medium structural FAR",
            "dominantLandUseAr": "مقرات بنوك وشركات، مولات تجارية، مراكز طبية ومستشفيات",
            "dominantLandUseEn": "Corporate HQs, commercial malls, medical hubs",
            "priceRangeEgpSqmAr": "55,000 – 75,000 ج.م/م² (سكني محيط) | 150,000 – 240,000 ج.م/م² (إداري/تجاري)",
            "priceRangeEgpSqmEn": "55k – 75k EGP/sqm (Res) | 150k – 240k EGP/sqm (Office/Retail)",
            "dataQualityTier": "Tier A",
            "notesAr": "أهم شريان مالي وتجاري في القاهرة الكبرى. يربط الطريق الدائري بالأوسطي ويضم مقرات البنوك الدولية ومراكز التسوق الكبرى (كايرو فيستيفال، كونكورد، بوينت 90).",
            "notesEn": "The premier financial and corporate strip of Greater Cairo with established Tier-1 institutional tenants.",
            "avgFlatPriceEgpSqm": 58000,
            "avgVillaPriceEgpSqm": 88000,
            "avgCommercialPriceEgpSqm": 195000,
            "rentalYieldPct": 10.4,
            "occupancyPct": 92,
            "maturityScore": 98,
            "deliveryStatusAr": "ناضج ومكتمل بالكامل",
            "deliveryStatusEn": "Fully Matured & Stabilized",
            "investmentAttractivenessScore": 96,
            "prosAr": [
                  "أعلى عائد إيجاري تجاري وإداري في مصر (بالدولار والجنيه)",
                  "طلب مؤسسي دائم من البنوك والشركات متعددة الجنسيات",
                  "ربط مباشر بمحطات المونوريل"
            ],
            "prosEn": [
                  "Highest commercial office yields in Egypt",
                  "Permanent institutional corporate leasing demand",
                  "Direct Monorail station connectivity"
            ],
            "challengesAr": [
                  "ازدحام مروري في أوقات الذروة",
                  "أسعار صيانة وإدارة مرافق مرتفعة"
            ],
            "challengesEn": [
                  "Peak hour traffic congestion",
                  "Elevated CAM/facility management costs"
            ],
            "investorActionAr": "استحواذ على وحدات إدارية وتجارية مؤجرة بالفعل لمستأجرين دوليين (Sale & Leaseback).",
            "investorActionEn": "Acquire stabilized office/retail assets under long-term corporate leases."
      },
      {
            "id": "nc-beit-al-watan",
            "nameAr": "منطقة بيت الوطن ومحور الفيو زون",
            "nameEn": "Bait Al-Watan (Districts 1-8 & View Zone)",
            "typologyAr": "إسكان عائلي فاخر (فيلات وعمارات مستقلة) ومحور تجاري وسطي",
            "typologyEn": "Boutique residential villas, low-rise buildings & View Zone retail",
            "densityLevelAr": "متوسطة إلى منخفضة (كثافة بنائية مقيدة)",
            "densityLevelEn": "Medium to low density with controlled heights (G+3)",
            "dominantLandUseAr": "سكني عائلي، شقق مستقلة، خدمات View Zone المركزية",
            "dominantLandUseEn": "Private residential apartments, View Zone commercial strip",
            "priceRangeEgpSqmAr": "34,000 – 44,000 ج.م/م² (سكني) | 80,000 – 125,000 ج.م/م² (تجاري View Zone)",
            "priceRangeEgpSqmEn": "34k – 44k EGP/sqm (Res) | 80k – 125k EGP/sqm (View Zone Retail)",
            "dataQualityTier": "Tier B",
            "notesAr": "أكبر رقعة توسعية لشركات التطوير الصغيرة والمتوسطة بالقاهرة الجديدة. 8 أحياء محاطة بطريق السويس شمالاً ومحور بن زايد جنوباً والدائري الأوسطي شرقاً. الفيو زون يمثل الرئة التجارية المركزية.",
            "notesEn": "The primary growth reservoir for mid-tier developers in New Cairo, bounded by Suez Rd and Bin Zayed Axis.",
            "avgFlatPriceEgpSqm": 37500,
            "avgVillaPriceEgpSqm": 56000,
            "avgCommercialPriceEgpSqm": 95000,
            "rentalYieldPct": 8.5,
            "occupancyPct": 52,
            "maturityScore": 65,
            "deliveryStatusAr": "قيد التسليم والتشطيب (مراحل البناء 2024–2027)",
            "deliveryStatusEn": "Active Construction & Delivery Cycle (2024–2027)",
            "investmentAttractivenessScore": 88,
            "prosAr": [
                  "موقع استراتيجي بين القاهرة الجديدة والعاصمة الإدارية",
                  "أسعار دخول معقولة وهوامش نمو رأسمالي واعدة",
                  "اشتراطات بنائية تمنع التكدس العشوائي"
            ],
            "prosEn": [
                  "Strategic gateway between New Cairo and New Capital",
                  "Accessible entry point with significant capital upside",
                  "Strict zoning prevents overcrowding"
            ],
            "challengesAr": [
                  "تأخر استكمال بعض شبكات المرافق وسفلتة الشوارع الداخلية",
                  "منافسة سعرية شديدة بين صغار المطورين"
            ],
            "challengesEn": [
                  "Lagging secondary infrastructure & internal paving",
                  "Intense price competition among boutique developers"
            ],
            "investorActionAr": "شراء أراضٍ ومبانٍ تجارية في منطقة الفيو زون، أو عمارات سكنية متكاملة قبل اكتمال الرصف لتعظيم العائد الرأسمالي.",
            "investorActionEn": "Acquire commercial plots along View Zone or turnkey boutique buildings prior to infrastructure finalization."
      },
      {
            "id": "nc-lotus",
            "nameAr": "منطقة اللوتس (الشمالية والجنوبية)",
            "nameEn": "Al-Lotus (North & South)",
            "typologyAr": "إسكان عائلي راقٍ وكتلة خدمية مركزية (قلب التجمع)",
            "typologyEn": "Prime central family residential & retail service hub",
            "densityLevelAr": "متوسطة ومستقرة",
            "densityLevelEn": "Medium, stabilized",
            "dominantLandUseAr": "سكني عائلي، مقرات شركات، مراكز طبية ومولات أحياء",
            "dominantLandUseEn": "Apartments, regional offices, medical centers, district malls",
            "priceRangeEgpSqmAr": "44,000 – 54,000 ج.م/م² (سكني) | 90,000 – 140,000 ج.م/م² (تجاري/إداري)",
            "priceRangeEgpSqmEn": "44k – 54k EGP/sqm (Res) | 90k – 140k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "تتوسط شارعي التسعين الشمالي والجنوبي مباشرة خلف المونوريل والجامعة الأمريكية. تمتاز باكتمال الخدمات وشبكات المياه والكهرباء والغاز ونسبة إشغال تفوق 80%.",
            "notesEn": "Nestled between North and South 90th axes with high occupancy and fully stabilized utilities.",
            "avgFlatPriceEgpSqm": 48000,
            "avgVillaPriceEgpSqm": 72000,
            "avgCommercialPriceEgpSqm": 115000,
            "rentalYieldPct": 9.1,
            "occupancyPct": 82,
            "maturityScore": 91,
            "deliveryStatusAr": "مكتمل ومسكون في معظمه",
            "deliveryStatusEn": "Predominantly Completed & Inhabited",
            "investmentAttractivenessScore": 90,
            "prosAr": [
                  "موقع وسطي محوري شديد الحيوية",
                  "سيولة عالية وسرعة في إعادة البيع والإيجار",
                  "خدمات تجارية وطبية متكاملة بالفعل"
            ],
            "prosEn": [
                  "Central prime location between twin 90th corridors",
                  "High liquidity in secondary resale and leasing",
                  "Comprehensive operating medical and retail amenities"
            ],
            "challengesAr": [
                  "قلة المعروض من الأراضي الشاغرة",
                  "ارتفاع أسعار الوحدات القائمة"
            ],
            "challengesEn": [
                  "Very limited vacant raw land",
                  "Elevated acquisition base"
            ],
            "investorActionAr": "شراء شقق سكنية ومقرات إدارية لإعادة تأجيرها فوراً للكوادر الجامعية والطبية والشركات.",
            "investorActionEn": "Acquire residential and corporate units for immediate cash-flow generation."
      },
      {
            "id": "nc-narges-banafsaj",
            "nameAr": "النرجس والنرجس الجديدة والبنفسج",
            "nameEn": "Al-Narges, New Narges & Al-Banafsaj",
            "typologyAr": "إسكان فيلات وعمارات فاخرة متكاملة النضج",
            "typologyEn": "Upscale villa estates and luxury low-rise apartments",
            "densityLevelAr": "منخفضة إلى متوسطة (أحياء ناضجة هادئة)",
            "densityLevelEn": "Low to medium, tranquil mature enclave",
            "dominantLandUseAr": "فيلات، عمارات سكنية فاخرة، مدارس لغات، مولات خدمية",
            "dominantLandUseEn": "Villas, luxury residences, international schools, community retail",
            "priceRangeEgpSqmAr": "48,000 – 62,000 ج.م/م² (سكني) | 110,000 – 160,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "48k – 62k EGP/sqm (Res) | 110k – 160k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "من أعرق وأهدأ مناطق التجمع الخامس. النرجس الجديدة تمثل الامتداد الجنوبي المباشر المطل على محور جمال عبد الناصر والدائري الأوسطي.",
            "notesEn": "One of the most established and affluent enclaves in 5th Settlement, with New Narges extending south.",
            "avgFlatPriceEgpSqm": 53500,
            "avgVillaPriceEgpSqm": 82000,
            "avgCommercialPriceEgpSqm": 125000,
            "rentalYieldPct": 9.3,
            "occupancyPct": 86,
            "maturityScore": 93,
            "deliveryStatusAr": "مكتمل في النرجس والبنفسج / مراحل تسليم في النرجس الجديدة",
            "deliveryStatusEn": "Delivered in Narges/Banafsaj; active handover in New Narges",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "مستوى اجتماعي راقٍ وثبات سعري قوي",
                  "قرب مباشر من محور طلعت حرب ومحور محمد نجيب",
                  "طلب إيجاري دائم من الأسر والدبلوماسيين"
            ],
            "prosEn": [
                  "Affluent demographic profile and strong price stability",
                  "Direct access to Talaat Harb & Naguib corridors",
                  "Steady executive family rental demand"
            ],
            "challengesAr": [
                  "قلة فرص التطوير على مساحات شاسعة (تطوير فردي/عمارات)"
            ],
            "challengesEn": [
                  "Limited large-scale master-development parcels"
            ],
            "investorActionAr": "استثمار في تطوير عمارات متميزة في النرجس الجديدة أو وحدات تجارية بأسواق النرجس.",
            "investorActionEn": "Develop boutique residential blocks in New Narges or invest in community retail strips."
      },
      {
            "id": "nc-andalus",
            "nameAr": "منطقة الأندلس وإسكان المستثمرين",
            "nameEn": "Al-Andalus & Investors Area",
            "typologyAr": "إسكان عائلي هادئ وعمارات راقية مجاورة للقطامية ديونز",
            "typologyEn": "Contemporary family apartments adjacent to Katameya Dunes",
            "densityLevelAr": "متوسطة متوازنة",
            "densityLevelEn": "Medium balanced",
            "dominantLandUseAr": "سكني عائلي، خدمات ترفيهية، مجاورة للنوادي والمجمعات الفاخرة",
            "dominantLandUseEn": "Residential apartments, community services, adjacent to golf resorts",
            "priceRangeEgpSqmAr": "38,000 – 48,000 ج.م/م² (سكني) | 80,000 – 115,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "38k – 48k EGP/sqm (Res) | 80k – 115k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "تقع بين التجمع الخامس والامتداد الجنوبي بالقرب من قطامية ديونز وميفيدا. تحظى بنمو سكاني سريع وجاذبية للعائلات الشابة.",
            "notesEn": "Strategically located next to Katameya Dunes and Mivida with strong family appeal.",
            "avgFlatPriceEgpSqm": 42000,
            "avgVillaPriceEgpSqm": 65000,
            "avgCommercialPriceEgpSqm": 95000,
            "rentalYieldPct": 8.7,
            "occupancyPct": 74,
            "maturityScore": 82,
            "deliveryStatusAr": "أغلب الأحياء سلمت والخدمات قيد الاكتمال",
            "deliveryStatusEn": "Mostly delivered with commercial services stabilizing",
            "investmentAttractivenessScore": 87,
            "prosAr": [
                  "جيرة عمرانية ممتازة لكبرى الكومباوندات الفاخرة",
                  "شبكة شوارع واسعة وتخطيط حديث",
                  "عائد تأجيري مجزٍ قياساً لسعر الشراء"
            ],
            "prosEn": [
                  "Excellent adjacency to tier-1 luxury compounds",
                  "Wide street grid and modern planning",
                  "Favorable rent-to-price ratio"
            ],
            "challengesAr": [
                  "اكتمال المرافق الترفيهية والمولات لا يزال جاريًا في بعض القطاعات"
            ],
            "challengesEn": [
                  "Commercial amenities still maturing in specific pockets"
            ],
            "investorActionAr": "شراء شقق لإعادة البيع بعد اكتمال شبكات الخدمات بالكامل، أو الاستثمار في عيادات ومحلات تجارية.",
            "investorActionEn": "Acquire residential inventory for medium-term capital gains or invest in local clinics and retail."
      },
      {
            "id": "nc-first-settlement",
            "nameAr": "التجمع الأول (الياسمين، القرنفل، محور السادات)",
            "nameEn": "First Settlement (Al-Yasmine, Al-Qoronfol, Sadat Axis)",
            "typologyAr": "كتلة سكنية عريقة متكاملة الخدمات مع فيلات وعمارات",
            "typologyEn": "Established mature residential community with villas and apartments",
            "densityLevelAr": "متوسطة إلى مرتفعة ومأهولة بالكامل",
            "densityLevelEn": "Medium to high, fully inhabited",
            "dominantLandUseAr": "سكني، تعليمي (الجامعات والمدارس الدولية)، مراكز طبية ومولات",
            "dominantLandUseEn": "Residential, major international schools, hospitals, local markets",
            "priceRangeEgpSqmAr": "40,000 – 52,000 ج.م/م² (سكني) | 95,000 – 140,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "40k – 52k EGP/sqm (Res) | 95k – 140k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "شمال القاهرة الجديدة بالقرب من طريق السويس ومطار القاهرة والرحاب. نسبة إشغال تتجاوز 90%، واستقرار سكاني استثنائي.",
            "notesEn": "Northern gateway of New Cairo near Suez Road, Cairo Airport and Al Rehab with >90% occupancy.",
            "avgFlatPriceEgpSqm": 45000,
            "avgVillaPriceEgpSqm": 75000,
            "avgCommercialPriceEgpSqm": 110000,
            "rentalYieldPct": 8.9,
            "occupancyPct": 91,
            "maturityScore": 96,
            "deliveryStatusAr": "مكتمل وناضج بالكامل",
            "deliveryStatusEn": "Fully Matured & Built Out",
            "investmentAttractivenessScore": 89,
            "prosAr": [
                  "قرب فائق من مطار القاهرة ومدينة نصر ومصر الجديدة",
                  "كثافة سكانية فعلية وقوة شرائية قائمة",
                  "جاهزية كاملة لجميع المرافق الحكومية والخاصة"
            ],
            "prosEn": [
                  "Immediate proximity to Airport, Heliopolis and Nasr City",
                  "Real operational demographic density",
                  "Zero utility or infrastructure risk"
            ],
            "challengesAr": [
                  "ندرة الأراضي الاستثمارية الشاغرة",
                  "عمر بعض المباني الأولى يتطلب تجديدًا"
            ],
            "challengesEn": [
                  "Scarcity of infill redevelopment land",
                  "Older initial clusters need facade upgrades"
            ],
            "investorActionAr": "إعادة تطوير الأصول القديمة وشراء المحلات التجارية والمكاتب في المولات الخدمية الناجحة.",
            "investorActionEn": "Asset repositioning and acquiring operating retail/office units in proven shopping centres."
      },
      {
            "id": "nc-third-settlement",
            "nameAr": "التجمع الثالث وحي النخيل ومحور غرب أرابيلا",
            "nameEn": "Third Settlement (Al-Nakheel & West Arabella)",
            "typologyAr": "إسكان متوسط ومطور ومناطق خدمية وصناعية خفيفة",
            "typologyEn": "Mid-market residential, developed housing & light technical zones",
            "densityLevelAr": "مرتفعة في الأحياء الحكومية ومتوسطة في الفيلات",
            "densityLevelEn": "High in municipal sectors, medium in villa quarters",
            "dominantLandUseAr": "سكني عائلي، إسكان نقابي، جامعات (الجامعة الألمانية GUC)، خدمات",
            "dominantLandUseEn": "Family housing, universities (GUC), local commerce and services",
            "priceRangeEgpSqmAr": "28,000 – 38,000 ج.م/م² (سكني) | 60,000 – 90,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "28k – 38k EGP/sqm (Res) | 60k – 90k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "يضم الجامعة الألمانية GUC ومحمية وادي دجلة. يمثل خيارًا سكنيًا واقتصاديًا ملائمًا للطبقة المتوسطة وطلبًا طلابيًا إيجاريًا كثيفًا.",
            "notesEn": "Home to GUC and Wadi Degla protectorate. Strong student rental demand and mid-market affordability.",
            "avgFlatPriceEgpSqm": 32000,
            "avgVillaPriceEgpSqm": 52000,
            "avgCommercialPriceEgpSqm": 72000,
            "rentalYieldPct": 8.4,
            "occupancyPct": 80,
            "maturityScore": 86,
            "deliveryStatusAr": "مكتمل في معظمه",
            "deliveryStatusEn": "Predominantly Complete",
            "investmentAttractivenessScore": 82,
            "prosAr": [
                  "طلب إيجاري طلابي قوي ومستمر حول GUC",
                  "تذكرة سعرية في متناول شريحة واسعة من المستثمرين",
                  "قرب مباشر من الطريق الدائري ومحور العين السخنة"
            ],
            "prosEn": [
                  "Consistent student leasing market around GUC",
                  "Affordable entry ticket for mid-scale investors",
                  "Direct ring road and Sokhna access"
            ],
            "challengesAr": [
                  "مستويات الأسعار تنمو بوتيرة أهدأ مقارنة بالتسعين والمربع الذهبي"
            ],
            "challengesEn": [
                  "Capital appreciation pace is moderate compared to 90th / Golden Square"
            ],
            "investorActionAr": "شراء شقق سكنية صغيرة لتأجيرها لطلاب وأساتذة الجامعة الألمانية.",
            "investorActionEn": "Acquire compact apartments tailored for student/faculty accommodation yields."
      },
      {
            "id": "nc-sixth-settlement",
            "nameAr": "التجمع السادس (مثلث الأمل والامتداد الجنوبي)",
            "nameEn": "Sixth Settlement (Triangle of Hope / Southern Extension)",
            "typologyAr": "الامتداد العمراني الجديد للقاهرة الجديدة (أراضٍ ومخططات كبرى)",
            "typologyEn": "New master expansion frontier of New Cairo (raw land & mega concessions)",
            "densityLevelAr": "منخفضة جدًا حاليًا (أراضٍ قيد التخطيط والتسليم)",
            "densityLevelEn": "Currently very low (planning & initial groundwork phase)",
            "dominantLandUseAr": "مخطط لمجتمعات عمرانية متكاملة، مناطق لوجستية وأنشطة تجارية كبرى",
            "dominantLandUseEn": "Planned mixed-use communities, logistics, regional commercial hubs",
            "priceRangeEgpSqmAr": "26,000 – 36,000 ج.م/م² (سكني تقديري) | 50,000 – 85,000 ج.م/م² (تجاري مبدئي)",
            "priceRangeEgpSqmEn": "26k – 36k EGP/sqm (Res initial) | 50k – 85k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier C",
            "notesAr": "يقع بمحاذاة طريق العين السخنة والدائري الأوسطي بمساحة تتجاوز 4800 فدان. يمثل الاحتياطي الاستراتيجي المستقبلي للقاهرة الجديدة للمطورين الكبار.",
            "notesEn": "Over 4,800 feddans along Sokhna Rd and Middle Ring Rd representing the long-term strategic reserve of New Cairo.",
            "avgFlatPriceEgpSqm": 29500,
            "avgVillaPriceEgpSqm": 48000,
            "avgCommercialPriceEgpSqm": 65000,
            "rentalYieldPct": 7.8,
            "occupancyPct": 20,
            "maturityScore": 35,
            "deliveryStatusAr": "قيد أعمال البنية التحتية وتسليم الأراضي (أفق 2026–2030)",
            "deliveryStatusEn": "Infrastructure Groundwork & Land Allocation (Horizon 2026–2030)",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "أكبر هوامش ربح رأسمالية طويلة الأجل (Long-term Capital Gain)",
                  "إمكانية الاستحواذ على قطع أراضٍ بمساحات ضخمة",
                  "موقع استراتيجي على طريق السخنة الجديد"
            ],
            "prosEn": [
                  "Maximum long-term land value appreciation potential",
                  "Opportunity to assemble large-scale contiguous acreage",
                  "Direct frontage on the expanded Sokhna expressway"
            ],
            "challengesAr": [
                  "أفق استثماري يتطلب من 3 إلى 5 سنوات لبدء التدفقات النقدية التشغيلية",
                  "الحاجة لضخ سيولة كبيرة في شبكات المرافق"
            ],
            "challengesEn": [
                  "Long gestation period (3–5 years) before operational cash-flows",
                  "Heavy infrastructure capital expenditure required"
            ],
            "investorActionAr": "الاستحواذ المبكر على أراضٍ تجارية ومختلطة والاستفادة من منحنيات إعادة التسعير التدريجية.",
            "investorActionEn": "Early-stage land acquisition and banking for master-planned commercial and mixed-use ventures."
      }
    ],
    investmentHypothesisAr: "أعلى الأسواق عمقًا في القدرة الشرائية والطلب المؤسسي والتأجيري، مع ضرورة الحذر من تخمة المعروض المكتبي والمولات المكررة غير المتميزة.",
    investmentHypothesisEn: "Deepest institutional liquidity and purchasing power in East Cairo; critical caution required on generic office & undifferentiated retail saturation.",
    promisingSectorsAr: [
      "مباني المكاتب الإدارية عالية الجودة ذات الإدارة المؤسسية والشهادات الخضراء",
      "المراكز الطبية التخصصية ومستشفيات جراحة اليوم الواحد",
      "التجزئة المتخصصة (F&B / Lifestyle Hubs) ذات مواقف سيارات وافرة",
      "الشقق الفندقية والسكنية المخدومة ذات العوائد الدولارية أو المستقرة",
    ],
    promisingSectorsEn: [
      "Grade A institutional office assets with LEED certifications & deep parking",
      "Specialized healthcare facilities & day-surgery centres",
      "Curated lifestyle & F&B retail with generous parking ratios",
      "Serviced branded residences & corporate rental accommodation",
    ],
    keyRisksAr: [
      "ارتفاع تكلفة أسعار الأراضي ورسوم التراخيص والمرافق",
      "دخول حجم معروض ضخم من المكاتب في الربع الرابع 2026 والسنوات اللاحقة",
      "تشتت الحركة التجارية بين محاور متعددة والتنافس الحاد",
    ],
    keyRisksEn: [
      "Elevated land acquisition costs, development fees & utility connection tariffs",
      "Substantial pipeline deliveries in office space entering market through 2026-2027",
      "Fragmentation of retail footfall across multiple rival commercial strips",
    ],
    preAcquisitionRequirementsAr: [
      "حساب زمن الوصول الميداني ونقاط الاختناق المروري في أوقات الذروة",
      "فحص خط المعروض المنافس القائم وتحت الإنشاء ضمن دائرة نصف قطرها 3 كم",
      "التأكد من كفاية مواقف السيارات المنفذة مقارنة بنسب الإشغال المستهدفة",
    ],
    preAcquisitionRequirementsEn: [
      "Empirical field travel-time measurement during peak hours",
      "Audit competing pipeline within a strict 3-km catchment radius",
      "Confirm parking ratio sufficiency against expected daytime peak demand",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=001",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز تنمية مدينة القاهرة الجديدة",
    officialSourceNameEn: "NUCA – New Cairo City Authority",
  },
  {
    id: "new-heliopolis",
    avgFlatPriceEgpSqm: 23500,
    avgVillaPriceEgpSqm: 48000,
    avgCommercialPriceEgpSqm: 62000,
    avgLandPriceEgpSqm: 16500,
    expectedRentalYieldPct: 7.5,
    currentEstimatedOccupancyPct: 38,
    overallMaturityScore: 56,
    investmentRank: 6,
    primaryAxisAr: "طريق مصر-السويس وطريق الإسماعيلية ومحطة LRT هليوبوليس",
    primaryAxisEn: "Suez Road, Ismailia Road & New Heliopolis LRT Station",
    nameAr: "هليوبوليس الجديدة",
    confidenceGrade: "confirmed",
    discrepancyHighlightAr: "تصحيح مهم: محطة مترو هليوبوليس (الخط الثالث) تخص حي مصر القديمة وليس الجديدة؛ تضارب في تقدير مبيعات مشروع Talala بين 90 و194.67 مليار جنيه؛ إيرادات شركة مصر الجديدة HELI قفزت من 1.055 مليار (2024) إلى 3.13 مليار (2025) بنمو 197% بفضل بيع الأراضي للمطورين.",
    discrepancyHighlightEn: "Key transit correction: Heliopolis Metro Station belongs to Historic Heliopolis, not New Heliopolis. Talala project sales report discrepancy between EGP 90B and 194.67B.",
    underConstructionHighlightsAr: [
      "صفقات أراضٍ كبرى: SODIC East (655 فدان، 17 مليار استثمار مخطط، 44 مليار مبيعات متوقعة)",
      "مشروع تلالا Talala بالشراكة مع مدينة مصر (491 فدان، مبيعات مقدرة بين 90 و194.67 مليار جنيه)",
      "مشروع البروج (IMKAN MISR، 1,200 فدان)، ومشروع Rock White/Rock Green (7 مليار ج.م)، والقاهرة الجديدة (G Developments، 1,800 فدان)",
      "بيع أراضٍ بالجملة: HELI باعت 1 مليون م² في الحي 20 بسعر ~1,700 ج.م/م² (أبريل 2022، أرض خام بدون مرافق)"
    ],
    underConstructionHighlightsEn: [
      "Landmark megadeals: SODIC East (655 feddans, EGP 17B capex, EGP 44B sales)",
      "Talala with Madinet Masr (491 feddans, EGP 90B-194.67B projected sales)",
      "El Brouj (1,200 feddans), Rock White/Green (EGP 7B), New Cairo by G Developments (1,800 feddans)",
      "Wholesale land disposal: HELI sold 1M sqm in District 20 at EGP 1,700/sqm (April 2022, unserviced raw plot)"
    ],
    detailedSectorPricesAr: [
      { sectorAr: "شقق (متوسط المدينة)", sectorEn: "City Average Flats", priceEgpSqm: 33310 },
      { sectorAr: "شقق ضمن كمبوندات", sectorEn: "Compound Flats", priceEgpSqm: 49480 },
      { sectorAr: "فيلات", sectorEn: "Villas", priceEgpSqm: 73792 },
      { sectorAr: "أراضي", sectorEn: "Land", priceEgpSqm: 27642 }
    ],
    nameEn: "New Heliopolis",
    category: "special_authority",
    establishmentLawAr: "قرار رئيس مجلس الوزراء رقم 193 لسنة 1995 (تطوير شركة مصر الجديدة للإسكان والتعمير)",
    establishmentLawEn: "Prime Ministerial Decree No. 193 of 1995 (Misr Al Gadida Co. master concession)",
    planningAreaFeddans: 5400,
    planningAreaDisplayAr: "5,400 فدان (بيان شركة مصر الجديدة المطور الرئيسي)",
    planningAreaDisplayEn: "5,400 Feddans (Misr Al Gadida Housing Master Dev.)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "تخضع لشراكات تطوير كبرى ومشروعات ذاتية",
    urbanMassDisplayEn: "Under master partnership contracts & proprietary sub-developments",
    targetPopulation: "مستهدفات نمو مرتبطة باكتمال مراحل المشروعات والشراكات",
    targetPopulationEn: "Growth targets indexed to private developer handover milestones",
    actualPopulationStatusAr: "بيانات التعداد السكاني الفعلي غير منشورة كإحصاء مستقل؛ إشغال تدريجي في المناطق المسلمة وشراكات كبرى قيد الإنشاء.",
    actualPopulationStatusEn: "Census resident headcount not published as standalone municipal data. Incremental occupancy in completed clusters.",
    dataQualityTier: "B",
    locationAndBoundariesAr: "تقع شرق القاهرة بين طريقي القاهرة–الإسماعيلية شمالًا والقاهرة–السويس جنوبًا، محاذية لمدينة الشروق وبدر.",
    locationAndBoundariesEn: "Located east of Cairo between Cairo–Ismailia (north) and Cairo–Suez (south), bordering Shorouk & Badr.",
    majorRoadsAr: [
      "طريق القاهرة–السويس",
      "طريق القاهرة–الإسماعيلية",
      "محور الربط بين الشروق وبدر",
      "قرب مسار القطار الكهربائي الخفيف (LRT)",
    ],
    majorRoadsEn: [
      "Cairo–Suez Road",
      "Cairo–Ismailia Road",
      "Shorouk-Badr Connector Corridors",
      "Proximity to LRT network",
    ],
    landUseStructureAr: [
      "مشروع SODIC East على مساحة 655 فدانًا (شراكة)",
      "مشروعات شراكة أخرى مع كبرى شركات التطوير العقاري",
      "أحياء سكنية وعمارات وفيلات تطورها شركة مصر الجديدة",
      "مناطق نوادٍ رياضية ومراكز خدمات مخططة",
    ],
    landUseStructureEn: [
      "SODIC East master development over 655 Feddans (partnership)",
      "Strategic revenue-sharing joint ventures with institutional developers",
      "Proprietary residential compounds by Misr Al Gadida",
      "Master-planned sports clubs & community hubs",
    ],
    submarkets: [
{
            "id": "heliopolis-classical-1-9",
            "nameAr": "الأحياء الكلاسيكية (من الحي الأول حتى التاسع)",
            "nameEn": "Classical Districts (1st through 9th)",
            "typologyAr": "إسكان عائلي وفيلات بتخطيط شبكي كلاسيكي واسع",
            "typologyEn": "Traditional grid-planned residential apartments and standalone villas",
            "densityLevelAr": "منخفضة إلى متوسطة (إشغال تدريجي متسارع)",
            "densityLevelEn": "Low to medium, accelerating occupancy",
            "dominantLandUseAr": "سكني عائلي، مناطق خضراء، خدمات بلدية، مدارس",
            "dominantLandUseEn": "Family residences, green parks, municipal amenities, schools",
            "priceRangeEgpSqmAr": "19,000 – 25,000 ج.م/م² (سكني) | 42,000 – 60,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "19k – 25k EGP/sqm (Res) | 42k – 60k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "تم تخطيطها بواسطة شركة مصر الجديدة للإسكان والتعمير كمدينة حدائقية. تشهد طفرة إشغال مدفوعة بتشغيل محطة LRT هليوبوليس الجديدة وتطوير طريق السويس.",
            "notesEn": "Master-planned by Heliopolis Housing as a garden city; boosted by New Heliopolis LRT station operationalization.",
            "avgFlatPriceEgpSqm": 21500,
            "avgVillaPriceEgpSqm": 36000,
            "avgCommercialPriceEgpSqm": 52000,
            "rentalYieldPct": 7.4,
            "occupancyPct": 44,
            "maturityScore": 62,
            "deliveryStatusAr": "أغلب الأحياء منتهية البناء مع استكمال المرافق",
            "deliveryStatusEn": "Substantially built out with ongoing final utility upgrades",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "أسعار شقق منافسة جدًا مقارنة بالشروق والتجمع",
                  "شوارع عريضة وتخطيط عمراني منظم ومساحات خضراء",
                  "ربط مباشر بمحطة قطار LRT هليوبوليس"
            ],
            "prosEn": [
                  "Highly competitive pricing compared to Shorouk and New Cairo",
                  "Wide boulevards and spacious green corridors",
                  "Direct connectivity via New Heliopolis LRT Station"
            ],
            "challengesAr": [
                  "تفاوت وتيرة تشغيل بعض شبكات المرافق في الأطراف الجنوبية"
            ],
            "challengesEn": [
                  "Uneven operational pace of commercial amenities in southern sectors"
            ],
            "investorActionAr": "شراء شقق وفيلات عائلية للاستفادة من تسارع وتيرة الإشغال وارتفاع الإيجارات بعد تشغيل محطات النقل السريع.",
            "investorActionEn": "Acquire residential apartments and villas for mid-term capital growth and LRT-driven rental upside."
      },
      {
            "id": "heliopolis-sodic-east",
            "nameAr": "مشروع سوديك إيست (SODIC East) والقطاع التشاركي",
            "nameEn": "SODIC East Master Community & Co-Development Zone",
            "typologyAr": "كومباوند متكامل ومجتمع مسور فاخر متعدد الاستخدامات",
            "typologyEn": "Integrated luxury gated master community & lifestyle hub",
            "densityLevelAr": "منخفضة ومحكومة وفق أعلى المعايير المعمارية",
            "densityLevelEn": "Low density, master-planned to top architectural standards",
            "dominantLandUseAr": "فيلات فاخرة، تاون هاوس، شقق حديقة، نوادٍ رياضية، قطاع تجاري",
            "dominantLandUseEn": "Luxury villas, townhouses, private sports club, retail promenade",
            "priceRangeEgpSqmAr": "52,000 – 68,000 ج.م/م² (سكني) | 90,000 – 130,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "52k – 68k EGP/sqm (Res) | 90k – 130k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "شراكة استراتيجية بين سوديك وشركة مصر الجديدة للإسكان على مساحة 655 فداناً. يمثل نقطة التحول الكبرى في القيمة التسويقية لمدينة هليوبوليس الجديدة.",
            "notesEn": "655-feddan co-development between SODIC and Heliopolis Housing, redefining regional value perception.",
            "avgFlatPriceEgpSqm": 58000,
            "avgVillaPriceEgpSqm": 82000,
            "avgCommercialPriceEgpSqm": 105000,
            "rentalYieldPct": 8.8,
            "occupancyPct": 42,
            "maturityScore": 72,
            "deliveryStatusAr": "مراحل تسليم كبرى نشطة وسكن فعلي للعائلات",
            "deliveryStatusEn": "Major active delivery phases and operational family occupancy",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "جودة تطوير وإدارة مرافق بمستوى النخبة في شرق القاهرة",
                  "نادي رياضي واجتماعي ضخم (Club S) يعمل بالفعل",
                  "نمو مستمر في القيمة السوقية وإقبال قوي من المشترين"
            ],
            "prosEn": [
                  "Tier-1 construction quality and professional facility management",
                  "Operating landmark sports club (Club S)",
                  "Consistent market demand and strong brand equity"
            ],
            "challengesAr": [
                  "ارتفاع تذكرة الشراء مقارنة بالأحياء العامة في المدينة"
            ],
            "challengesEn": [
                  "Premium price point relative to municipal sectors of the city"
            ],
            "investorActionAr": "شراء تاون هاوس وشقق استثمارية لإعادة التأجير الفاخر للعائلات وكبار المهندسين.",
            "investorActionEn": "Acquire townhouses and apartments for premium family leasing yields."
      },
      {
            "id": "heliopolis-talala-brouj",
            "nameAr": "قطاع تلالا (Talala) وامتداد محيط البروج",
            "nameEn": "Talala Sector & Al-Brouj Regional Interface",
            "typologyAr": "مشروعات تطوير عقاري وسكن فندقي وترفيهي",
            "typologyEn": "Mixed-use hospitality, residential and lifestyle developments",
            "densityLevelAr": "متوسطة",
            "densityLevelEn": "Medium",
            "dominantLandUseAr": "سكني استثماري، مراكز تسوق، شقق فندقية، خدمات ترفيهية",
            "dominantLandUseEn": "Residential apartments, retail villages, serviced residences",
            "priceRangeEgpSqmAr": "26,000 – 34,000 ج.م/م² (سكني) | 55,000 – 75,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "26k – 34k EGP/sqm (Res) | 55k – 75k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "شراكة تطويرية مع عامر جروب ومطورين إقليميين لإنشاء مجمعات سكنية وترفيهية على محاور المدينة الرئيسية.",
            "notesEn": "Partnership ventures with regional developers introducing lifestyle communities along main arteries.",
            "avgFlatPriceEgpSqm": 29000,
            "avgVillaPriceEgpSqm": 46000,
            "avgCommercialPriceEgpSqm": 62000,
            "rentalYieldPct": 7.8,
            "occupancyPct": 34,
            "maturityScore": 54,
            "deliveryStatusAr": "قيد البناء والتشييد المرحلي",
            "deliveryStatusEn": "Under active construction and phased delivery",
            "investmentAttractivenessScore": 82,
            "prosAr": [
                  "تسهيلات سداد طويلة الأجل تصل إلى 8–10 سنوات",
                  "عناصر جذب سياحي وترفيهي ومساحات مائية",
                  "موقع متميز بالقرب من طريق الإسماعيلية ومحور البروج"
            ],
            "prosEn": [
                  "Long-term payment plans up to 8–10 years",
                  "Water features and lifestyle retail components",
                  "Strategic nexus between Ismailia Rd and Al-Brouj axis"
            ],
            "challengesAr": [
                  "الحاجة لمتابعة الجداول الزمنية للإنشاءات والتسليم"
            ],
            "challengesEn": [
                  "Monitoring delivery schedules and construction progression"
            ],
            "investorActionAr": "حجز وحدات سكنية وتجارية في المراحل المبكرة للاستفادة من نمو الأسعار مع تقدم نسب التنفيذ.",
            "investorActionEn": "Early-phase off-plan purchases to capture construction-stage valuation appreciation."
      },
      {
            "id": "heliopolis-golf-villas",
            "nameAr": "منطقة الجولف والفيلات المتميزة",
            "nameEn": "Golf & Premium Villas Quarter",
            "typologyAr": "فيلات مستقلة وتاون هاوس محاطة بمسطحات خضراء",
            "typologyEn": "Standalone luxury villas and golf-fronting residences",
            "densityLevelAr": "منخفضة جدًا (خصوصية فائقة)",
            "densityLevelEn": "Very low, exclusive private layouts",
            "dominantLandUseAr": "سكني فاخر (فيلات فقط)، مسطحات خضراء، خدمات خاصة",
            "dominantLandUseEn": "Exclusive luxury villas, private green corridors, boutique amenities",
            "priceRangeEgpSqmAr": "28,000 – 38,000 ج.م/م² (فيلات) | 50,000 – 70,000 ج.م/م² (خدمات)",
            "priceRangeEgpSqmEn": "28k – 38k EGP/sqm (Villas) | 50k – 70k EGP/sqm (Services)",
            "dataQualityTier": "Tier B",
            "notesAr": "تقع في القطاع الأكثر هدوءاً بمدينة هليوبوليس الجديدة، ومخصصة للفيلات والقصور بمساحات أراضٍ تبدأ من 500 متر مربع.",
            "notesEn": "Designed exclusively for villas and private estates with minimum plot sizes starting at 500 sqm.",
            "avgFlatPriceEgpSqm": 24000,
            "avgVillaPriceEgpSqm": 38000,
            "avgCommercialPriceEgpSqm": 56000,
            "rentalYieldPct": 7.2,
            "occupancyPct": 36,
            "maturityScore": 58,
            "deliveryStatusAr": "أراضٍ وفيلات مبنية ومسكونة جزئيًا",
            "deliveryStatusEn": "Partially delivered and inhabited villa cluster",
            "investmentAttractivenessScore": 81,
            "prosAr": [
                  "طابع فيلات خالص خالي من العمارات الشاهقة",
                  "خصوصية استثنائية ونقاء بيئي",
                  "إمكانية تشييد قصور عائلية بأسعار معقولة"
            ],
            "prosEn": [
                  "Pure low-rise villa zoning with zero high-density intrusion",
                  "Exceptional privacy and quiet atmosphere",
                  "Affordable land basis for private family compounds"
            ],
            "challengesAr": [
                  "ضرورة استكمال رصف بعض الطرق الداخلية في أطراف المنطقة"
            ],
            "challengesEn": [
                  "Final internal road paving needed in peripheral cul-de-sacs"
            ],
            "investorActionAr": "شراء أراضٍ وبناء فيلات عائلية فاخرة أو الاحتفاظ بها كأصل عيني متصاعد القيمة.",
            "investorActionEn": "Acquire single plots to build custom luxury villas or land-bank for long-term equity growth."
      }
    ],
    investmentHypothesisAr: "قيمة الموقع ترتبط بتسارع تشغيل الشراكات والتكامل مع الشروق وبدر؛ وتتطلب فحص كل قطعة ومشروع ومطابقة تواريخ التسليم بشكل مستقل.",
    investmentHypothesisEn: "Site potential anchored by execution velocity of institutional developer partnerships; requires parcel-by-parcel delivery verification.",
    promisingSectorsAr: [
      "الخدمات السكنية اليومية والنوادي والمجمعات المجتمعية",
      "المشروعات السكنية متوسطة وفوق متوسطة الكثافة",
      "العيادات الطبية التخصصية والصيدليات",
      "التجزئة المفتوحة ذات الواجهات الخدمية",
    ],
    promisingSectorsEn: [
      "Neighborhood retail & family sports club concessions",
      "Mid-to-upper residential gated developments",
      "Specialist clinics & pharmacies",
      "Open-air neighborhood service strips",
    ],
    keyRisksAr: [
      "تأخر استكمال بعض شبكات المرافق المركزية عن الجداول الأولية",
      "اعتماد البيانات على تصريحات الشركة المطورة لا على مسوح حكومية مستقلة",
      "المنافسة من مشروعات التجمع والشروق ومدينتي المجاورة",
    ],
    keyRisksEn: [
      "Historical delays in off-site trunk utility integration vs initial schedules",
      "Corporate-reported data requiring third-party field cross-checking",
      "Direct market competition from proximate developments in Shorouk & Madinaty",
    ],
    preAcquisitionRequirementsAr: [
      "مراجعة عقد الشراكة أو قرار التخصيص الصادر من شركة مصر الجديدة",
      "فحص الموقف التنفيذي للمرافق الخارجية (محطات الكهرباء، الصرف، المياه)",
      "التحقق من التزام المطورين المجاورين بجداول التسليم والإشغال",
    ],
    preAcquisitionRequirementsEn: [
      "Review joint venture agreement or allotment decree from Misr Al Gadida",
      "Verify completion status of external trunk infrastructure (substations, water)",
      "Audit delivery timeline compliance of neighboring developers",
    ],
    officialSourceUrl: "https://misr-algadida.com/partnerships",
    officialSourceNameAr: "شركة مصر الجديدة للإسكان والتعمير – محفظة الشراكات",
    officialSourceNameEn: "Misr Al Gadida Housing & Development — Master Concession",
  },
  {
    id: "el-shorouk",
    avgFlatPriceEgpSqm: 26000,
    avgVillaPriceEgpSqm: 45000,
    avgCommercialPriceEgpSqm: 68000,
    avgLandPriceEgpSqm: 21000,
    expectedRentalYieldPct: 8.1,
    currentEstimatedOccupancyPct: 72,
    overallMaturityScore: 78,
    investmentRank: 5,
    primaryAxisAr: "طريق السويس ومحور جمال عبد الناصر ومحطة LRT الشروق",
    primaryAxisEn: "Suez Road, Nasser Axis & Shorouk LRT Station",
    nameAr: "الشروق",
    nameEn: "El Shorouk",
    category: "established",
    establishmentLawAr: "قرار جمهوري رقم 326 لسنة 1995، ثم قرار 636 لسنة 2017 بتعديل الكردون",
    establishmentLawEn: "Presidential Decree No. 326 of 1995 & No. 636 of 2017 boundary update",
    planningAreaFeddans: 52991.83,
    planningAreaDisplayAr: "52,991.83 فدان (حدود الكردون الحديث) / أصلها 10,808 ثم 16,110 فدان",
    planningAreaDisplayEn: "52,991.83 Feddans (Cordone boundary) / Orig. 10,808 then 16,110 Feddans",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "لا تخلط المساحة الأصلية المأهولة بحدود الكردون التخطيطي الموسع",
    urbanMassDisplayEn: "Crucial distinction between original urban fabric and expanded planning border",
    targetPopulation: "مستهدفات تخطيطية متعددة للمراحل المتعاقبة",
    targetPopulationEn: "Phased planning targets across successive expansion decrees",
    actualPopulationStatusAr: "أحياء المدينة الأصلية تتمتع بإشغال سكني مستقر وعائلي، بينما مناطق الامتداد الغربي والشرقي قيد التطوير والتسليم التدريجي.",
    actualPopulationStatusEn: "Original city sectors possess stable family occupancy, while eastern & western expansion belts undergo progressive development.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع عند الكيلو 37 طريق القاهرة–الإسماعيلية حتى طريق القاهرة–السويس، شرق هليوبوليس الجديدة والرحاب ومدينتي.",
    locationAndBoundariesEn: "Located at km 37 Cairo–Ismailia Road extending to Cairo–Suez Road, east of New Heliopolis & Madinaty.",
    majorRoadsAr: [
      "طريق القاهرة–الإسماعيلية الصحراوي شمالًا",
      "طريق القاهرة–السويس الصحراوي جنوبًا",
      "طريق الحرية ومحور السادات الداخلي",
      "القطار الكهربائي الخفيف (LRT) محطة الشروق",
    ],
    majorRoadsEn: [
      "Cairo–Ismailia Desert Road (North)",
      "Cairo–Suez Desert Road (South)",
      "Al-Horreya Road & Sadat Internal Corridor",
      "LRT Light Rail Transit — El Shorouk Station",
    ],
    landUseStructureAr: [
      "أحياء الفيلات والإسكان العائلي المتميز (الحي الأول إلى التاسع)",
      "مناطق زهرة الشروق والامتدادات الشرقية ومناطق توفيق الأوضاع",
      "مجمع الجامعات الدولية (الجامعة البريطانية BUE، الجامعة الفرنسية، أكاديمية الشروق)",
      "مناطق خدمات مركزية على طريقي السويس والحرية",
    ],
    landUseStructureEn: [
      "Villa & upscale family residential districts (Districts 1 to 9)",
      "Zahrat El Shorouk & eastern regularization extensions",
      "Higher education cluster (British University BUE, French University, Shorouk Academy)",
      "Commercial strips fronting Suez Road & Al-Horreya Corridor",
    ],
    submarkets: [
{
            "id": "shorouk-uni-corridor",
            "nameAr": "محور الجامعات الدولية (BUE / الجامعة الفرنسية)",
            "nameEn": "International Universities Axis (BUE & French Uni)",
            "typologyAr": "شريط تعليمي وتجاري وسكني طلابي عالي الحيوية",
            "typologyEn": "Higher-education, commercial and student residential corridor",
            "densityLevelAr": "مرتفعة خلال الفصول الدراسية",
            "densityLevelEn": "High seasonal student & faculty density",
            "dominantLandUseAr": "جامعات كبرى، مجمعات مطاعم ومقاهٍ، سكن طلابي وأعضاء تدريس، مراكز طبية",
            "dominantLandUseEn": "Major universities, dining strips, student/faculty housing, medical centers",
            "priceRangeEgpSqmAr": "26,000 – 34,000 ج.م/م² (سكني) | 75,000 – 110,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "26k – 34k EGP/sqm (Res) | 75k – 110k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "أقوى تجمع تعليمي بشروق القاهرة، يضم الجامعة البريطانية في مصر (BUE) والجامعة الفرنسية وأكاديمية الشروق، مع حركة تجارية متصلة.",
            "notesEn": "Anchors British University in Egypt (BUE), French University & El Shorouk Academy with vibrant commercial life.",
            "avgFlatPriceEgpSqm": 28500,
            "avgVillaPriceEgpSqm": 46000,
            "avgCommercialPriceEgpSqm": 88000,
            "rentalYieldPct": 9.4,
            "occupancyPct": 84,
            "maturityScore": 90,
            "deliveryStatusAr": "مكتمل وناشط تعليميًا وتجاريًا",
            "deliveryStatusEn": "Fully Operational & Active Campus Corridor",
            "investmentAttractivenessScore": 93,
            "prosAr": [
                  "طلب إيجاري دائم بالعملات الصعبة والمحلية من الطلاب الوافدين",
                  "حركة تجارية مستمرة للكافيهات والمطاعم والمكتبات",
                  "قرب مباشر من طريق الإسماعيلية ومحطة قطار LRT"
            ],
            "prosEn": [
                  "Resilient student rental market with foreign currency revenue",
                  "Continuous daily consumption at F&B and services",
                  "Direct access to Ismailia Rd & Shorouk LRT Station"
            ],
            "challengesAr": [
                  "ازدحام مروري عند مواعيد بدء وانتهاء المحاضرات"
            ],
            "challengesEn": [
                  "Traffic congestion around peak lecture start/end hours"
            ],
            "investorActionAr": "شراء شقق وفيلات وتقسيمها إلى استوديوهات سكنية فندقية مؤجرة للطلاب والأساتذة.",
            "investorActionEn": "Acquire residential apartments/villas and reposition into student serviced micro-units."
      },
      {
            "id": "shorouk-villas-districts",
            "nameAr": "أحياء الفيلات المتميزة (الأحياء 1 إلى 9)",
            "nameEn": "Exclusive Villa Quarters (Districts 1-9 East & West)",
            "typologyAr": "فيلات مستقلة وتاون هاوس في بيئة خضراء منخفضة الكثافة",
            "typologyEn": "Low-density standalone villas, townhouses and landscaped estates",
            "densityLevelAr": "منخفضة وهادئة",
            "densityLevelEn": "Low, peaceful family residential enclaves",
            "dominantLandUseAr": "سكني فاخر (فيلات فقط)، حدائق خاصة، نوادٍ اجتماعية",
            "dominantLandUseEn": "Detached villas, private gardens, community clubs",
            "priceRangeEgpSqmAr": "28,000 – 42,000 ج.م/م² (فيلات) | 60,000 – 85,000 ج.م/م² (خدمات)",
            "priceRangeEgpSqmEn": "28k – 42k EGP/sqm (Villas) | 60k – 85k EGP/sqm (Services)",
            "dataQualityTier": "Tier A",
            "notesAr": "تشتهر الشروق بكونها مدينة فيلات بالأساس، وتمتد أحياء الفيلات شرق وغرب المدينة بخصوصية عالية وشوارع عريضة وواجهات راقية.",
            "notesEn": "Renowned as a premier villa suburb in East Cairo, with extensive dedicated villa zoning.",
            "avgFlatPriceEgpSqm": 26000,
            "avgVillaPriceEgpSqm": 38000,
            "avgCommercialPriceEgpSqm": 65000,
            "rentalYieldPct": 7.6,
            "occupancyPct": 74,
            "maturityScore": 86,
            "deliveryStatusAr": "مكتمل في معظمه ومأهول بالعائلات",
            "deliveryStatusEn": "Predominantly Completed & Inhabited",
            "investmentAttractivenessScore": 85,
            "prosAr": [
                  "طابع معماري راقٍ وبيئة صحية نقية",
                  "أسعار فيلات منافسة جداً مقارنة بالقاهرة الجديدة (أقل بنحو 35%)",
                  "نوادٍ رياضية كبرى (نادي هليوبوليس ونادي جرين هيلز)"
            ],
            "prosEn": [
                  "Sophisticated architectural character and clean air",
                  "Villas priced ~35% below New Cairo equivalents",
                  "Landmark private clubs (Heliopolis Club, Green Hills)"
            ],
            "challengesAr": [
                  "صيانة الفيلات الكبيرة تتطلب مصاريف تشغيلية دورية"
            ],
            "challengesEn": [
                  "Ongoing upkeep expenses for large private detached villas"
            ],
            "investorActionAr": "شراء فيلات نصف تشطيب وإعادة تشطيبها وبيعها بأسعار السوق الجاهزة.",
            "investorActionEn": "Acquire core & shell villas, execute luxury turnkey finishing, and sell at retail margins."
      },
      {
            "id": "shorouk-family-districts",
            "nameAr": "الأحياء العائلية والإسكان المتوسط (1-4 وحي النخيل)",
            "nameEn": "Family Residential & Mid-Market Districts (1-4 & Al-Nakheel)",
            "typologyAr": "عمارات سكنية متكاملة الخدمات مع أسواق محلية",
            "typologyEn": "Mid-market apartment buildings and neighborhood retail centres",
            "densityLevelAr": "متوسطة إلى مرتفعة ومأهولة بنسبة 85%",
            "densityLevelEn": "Medium to high, 85% occupied",
            "dominantLandUseAr": "سكني عائلي، مدارس، مستشفيات، مساجد، أسواق أحياء",
            "dominantLandUseEn": "Family residences, schools, clinics, local community markets",
            "priceRangeEgpSqmAr": "20,000 – 26,000 ج.م/م² (سكني) | 50,000 – 72,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "20k – 26k EGP/sqm (Res) | 50k – 72k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "الكتلة السكانية الأسرع نموًا للطبقة المتوسطة والأسر الشابة، تتمتع بتوافر المواصلات والمدارس الحكومية والخاصة والمستشفيات.",
            "notesEn": "Fast-growing residential core for middle-class families with comprehensive schools and hospitals.",
            "avgFlatPriceEgpSqm": 22500,
            "avgVillaPriceEgpSqm": 32000,
            "avgCommercialPriceEgpSqm": 58000,
            "rentalYieldPct": 8.2,
            "occupancyPct": 86,
            "maturityScore": 92,
            "deliveryStatusAr": "مكتمل وناضج بالكامل",
            "deliveryStatusEn": "Fully Matured & Inhabited",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "سيولة سريعة ومضمونة في تأجير وبيع الوحدات السكنية",
                  "طلب محلي مستقر لا يتأثر بتقلبات السوق الفاخر",
                  "مرافق كاملة من غاز طبيعي ومياه نقية وألياف ضوئية"
            ],
            "prosEn": [
                  "Fast liquidity in leasing and secondary sales",
                  "Resilient domestic demand unperturbed by luxury cycles",
                  "Complete municipal infrastructure and fiber broadband"
            ],
            "challengesAr": [
                  "العائد الرأسمالي سنوي معتدل ومستقر (10–14%)"
            ],
            "challengesEn": [
                  "Annual capital gains are stable and incremental (10–14%)"
            ],
            "investorActionAr": "الاستثمار في المحلات التجارية بالأسواق المركزية ومراكز الأشعة والتحاليل الطبية.",
            "investorActionEn": "Invest in commercial strip stores and diagnostic/medical centres."
      },
      {
            "id": "shorouk-suez-strip",
            "nameAr": "الشريط الاستثماري على طريق السويس (Suez Strip)",
            "nameEn": "Suez Road Investment & Commercial Strip",
            "typologyAr": "واجهة استثمارية كبرى تضم مولات ومقار شركات ومستشفيات",
            "typologyEn": "Regional landmark retail, corporate HQs and healthcare corridor",
            "densityLevelAr": "مرتفعة تجارياً مع حركة مرورية إقليمية مكثفة",
            "densityLevelEn": "High commercial footfall along regional expressway",
            "dominantLandUseAr": "مولات تجارية كبرى، معارض سيارات، مراكز إدارية وطبية، فنادق",
            "dominantLandUseEn": "Regional malls, auto showrooms, corporate offices, medical hubs, hotels",
            "priceRangeEgpSqmAr": "36,000 – 48,000 ج.م/م² (سكني فندقي) | 85,000 – 140,000 ج.م/م² (تجاري/إداري)",
            "priceRangeEgpSqmEn": "36k – 48k EGP/sqm (Serviced Res) | 85k – 140k EGP/sqm (Commercial/Office)",
            "dataQualityTier": "Tier A",
            "notesAr": "واجهة الشروق على أهم محور تنموي في مصر (طريق السويس). يربط القاهرة بالعاصمة الإدارية ومستقبل سيتي ومدينتي.",
            "notesEn": "Frontage on the critical Suez corridor linking Cairo to the New Capital, Mostakbal City and Madinaty.",
            "avgFlatPriceEgpSqm": 38000,
            "avgVillaPriceEgpSqm": 55000,
            "avgCommercialPriceEgpSqm": 115000,
            "rentalYieldPct": 9.6,
            "occupancyPct": 70,
            "maturityScore": 82,
            "deliveryStatusAr": "مراحل تشغيل وافتتاح متتالية للمولات والمراكز",
            "deliveryStatusEn": "Active Openings of Mega Malls & Flagships",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "أعلى كثافة مرورية وقيمة إعلانية وترويجية في شرق القاهرة",
                  "جذب مستأجرين عالميين للعلامات التجارية والمطاعم والبنوك",
                  "إمكانية تطوير مشروعات متعددة الاستخدامات بمساحات ضخمة"
            ],
            "prosEn": [
                  "Highest vehicular traffic and brand visibility in East Cairo",
                  "Attracts blue-chip retail, F&B and banking anchor tenants",
                  "Capacity for mixed-use mega developments"
            ],
            "challengesAr": [
                  "تكلفة استثمارية ورأسمالية مرتفعة للمشروعات"
            ],
            "challengesEn": [
                  "High upfront capital commitment for land and construction"
            ],
            "investorActionAr": "الاستحواذ على محلات تجارية ومكاتب إدارية في المولات ذات العلامات التجارية المشهورة.",
            "investorActionEn": "Acquire retail and corporate units within established branded commercial complexes."
      }
    ],
    investmentHypothesisAr: "سوق سكني وتعليمي مستقر نسبيًا؛ فرص المشروعات التجارية اليومية والخدمات الطبية والتعليمية في الأحياء السكنية المأهولة.",
    investmentHypothesisEn: "Stable residential & higher education ecosystem; strong opportunities in neighborhood commercial strips, student housing, and healthcare.",
    promisingSectorsAr: [
      "المراكز التجارية المجتمعية (Neighborhood Centers) التي تخدم الأحياء القائمة",
      "سكن الطلاب والخدمات الطلابية المتطورة قرب الجامعات",
      "المجمعات الطبية والعيادات التخصصية اليومية",
      "مدارس اللغات والتعليم الأساسي في مناطق الامتداد المأهولة",
    ],
    promisingSectorsEn: [
      "Community neighborhood retail centres anchored by supermarkets",
      "Modern student accommodation & co-working hubs near universities",
      "Daytime clinics and diagnostic centers",
      "Private K-12 schooling in emerging residential zones",
    ],
    keyRisksAr: [
      "تفاوت نضج وإشغال الأحياء بين المركز التأسيسي والمناطق المضافة للكردون",
      "ضعف الجدوى للمولات الإقليمية الكبرى لوجود مدينتي والتجمع على مقربة",
      "اعتماد قطاع كبير من الحركة على المحاور السريعة",
    ],
    keyRisksEn: [
      "Disparity in infrastructure maturity between original districts and cordone extensions",
      "Limited viability for super-regional malls given proximity to Madinaty & New Cairo",
      "Reliance on vehicular artery movements rather than walkability",
    ],
    preAcquisitionRequirementsAr: [
      "تحديد ما إذا كانت الأرض تقع داخل الكتلة الأصلية أم مناطق توفيق الأوضاع",
      "فحص الموقف القانوني ومطابقة قرارات التخصيص وشهادات الصلاحية",
      "قياس المسافة ومسار الحركة إلى محطة القطار الخفيف LRT",
    ],
    preAcquisitionRequirementsEn: [
      "Clarify whether plot lies within original master plan or regularization zones",
      "Inspect legal title, NUCA allocation decree and site zoning clearance",
      "Measure road access & distance to nearest LRT transit hub",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=015",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز تنمية مدينة الشروق",
    officialSourceNameEn: "NUCA – El Shorouk City Authority",
  },
  {
    id: "badr",
    avgFlatPriceEgpSqm: 13800,
    avgVillaPriceEgpSqm: 22000,
    avgCommercialPriceEgpSqm: 34000,
    avgLandPriceEgpSqm: 10500,
    expectedRentalYieldPct: 8.6,
    currentEstimatedOccupancyPct: 58,
    overallMaturityScore: 65,
    investmentRank: 9,
    primaryAxisAr: "طريق السويس وطريق الروبيكي ومحطة القطار الكهربائي التبادلية",
    primaryAxisEn: "Suez Road, Rubeiki Corridor & Badr LRT Interchange",
    nameAr: "مدينة بدر",
    confidenceGrade: "confirmed",
    discrepancyHighlightAr: "تعداد السكان المسجلين رسميًا (34,681 نسمة) لا يشمل عمال المصانع وطلاب 4 جامعات؛ اعتماد المدينة الكبير على الطلب الحكومي الموجه؛ سيولة ضعيفة للفيلات (27 إعلان نشط مقابل 953 للشقق) مع تراجع أسعار الفيلات.",
    discrepancyHighlightEn: "Registered census (34.6k) excludes non-resident factory workers and 4 universities' students. Heavy reliance on state-directed demand; low villa liquidity (27 listings vs 953 flats).",
    underConstructionHighlightsAr: [
      "إسكان موظفي العاصمة الإدارية (زهرة العاصمة): المرحلة الثالثة 7,080 وحدة، والرابعة 11,112 وحدة (إجمالي 18,192 وحدة)",
      "إسكان اجتماعي: 88,788 وحدة مخططة (25,464 منجزة)",
      "المنطقة الصناعية: 2,200 فدان، 564 مصنعًا عاملًا + 501 مصنع قيد الإنشاء؛ ومدينة طبية مخططة 109 فدان",
      "مزادات NUCA: بيع قطعة تجاري/إداري 1,014 م² بالحي المتميز بـ 25,440 ج.م/م² (أغسطس 2026)، ومحلات تجارية بالمزاد حتى 220,000 ج.م/م²",
      "مطور خاص: Lora Compound (زعيم هولدينج، 450 وحدة ذكية) وUrban Mall (إداري/تجاري/طبي)"
    ],
    underConstructionHighlightsEn: [
      "Civil servants housing 'Zahrat El-Assema': Phase 3 (7,080 units) & Phase 4 (11,112 units) = 18,192 units",
      "Social Housing: 88,788 planned units (25,464 delivered)",
      "Industrial Zone: 2,200 feddans with 564 operating + 501 under construction factories; planned 109-feddan medical city",
      "NUCA auctions: 1,014 sqm commercial plot at 25,440 EGP/sqm (Aug 2026); retail shops up to 220,000 EGP/sqm",
      "Private development: Lora Compound (450 smart units) and Urban Mall"
    ],
    detailedSectorPricesAr: [
      { sectorAr: "شقق سكنية", sectorEn: "Residential Flats", priceEgpSqm: 11856, changeAr: "+12.1% سنويًا" },
      { sectorAr: "فيلات", sectorEn: "Villas", priceEgpSqm: 24803, noteAr: "تراجع من ذروة يوليو 2026" },
      { sectorAr: "محلات تجارية (مزاد حكومي)", sectorEn: "Retail Shops (Gov Auction)", priceEgpSqm: 220000, noteAr: "سعر ذروة المزاد" },
      { sectorAr: "إداري (مزاد حكومي)", sectorEn: "Admin Offices (Gov Auction)", priceEgpSqm: 34000 },
      { sectorAr: "أرض تجاري/إداري (مزاد حكومي)", sectorEn: "Commercial/Admin Land", priceEgpSqm: 25440 }
    ],
    nameEn: "Badr City",
    category: "established",
    establishmentLawAr: "قرار رئيس مجلس الوزراء رقم 335 لسنة 1982 وتعديلاته",
    establishmentLawEn: "Prime Ministerial Decree No. 335 of 1982 & amendments",
    planningAreaFeddans: null,
    planningAreaDisplayAr: "بيانات المساحة الموحدة لكل مرحلة تستلزم استكمالًا رسميًا من الجهاز",
    planningAreaDisplayEn: "Official aggregate area per phase requires device record validation",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "تضم مناطق صناعية نشطة ومجاورات سكنية واسعة ومجمع جامعات",
    urbanMassDisplayEn: "Contains active industrial zones, extensive housing & university cluster",
    targetPopulation: "مستهدفات توسعية تشمل إسكان موظفي العاصمة الإدارية",
    targetPopulationEn: "Expansion targets including New Capital civil service housing",
    actualPopulationStatusAr: "قاعدة عمالية وسكانية متنامية بعد تسليم مشروعات سكن العاملين بالعاصمة الإدارية؛ بيانات تعداد شامل غير متاحة علنًا.",
    actualPopulationStatusEn: "Rapidly growing workforce and resident base following New Capital staff housing handovers; district-level census data requires field check.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع عند الكيلو 46 طريق القاهرة–السويس، على بعد 35 كم من مطار القاهرة، غرب هليوبوليس الجديدة وشرق الطريق الدائري الأوسطي.",
    locationAndBoundariesEn: "Located at km 46 Cairo–Suez Road, 35 km from Cairo Airport, west of New Heliopolis & east of Middle Ring Road.",
    majorRoadsAr: [
      "طريق القاهرة–السويس الصحراوي",
      "طريق الروبيكي الصناعي",
      "الطريق الدائري الأوسطي والدائري الإقليمي القريبين",
      "محطة القطار الكهربائي الخفيف (LRT) بدر",
    ],
    majorRoadsEn: [
      "Cairo–Suez Desert Road",
      "Robbiki Industrial Corridor",
      "Middle Ring Road & Regional Ring Road proximity",
      "LRT Light Rail Transit — Badr Station & Interchange",
    ],
    landUseStructureAr: [
      "المناطق الصناعية الكبرى ومدينة الروبيكي للجلود",
      "أرض الجامعات (الجامعة الروسية ERU، جامعة بدر BUC)",
      "سكن موظفي العاصمة الإدارية (زهرة العاصمة)",
      "الحي المتميز 1 و2 ومناطق الامتداد الشرقي والشمالي",
    ],
    landUseStructureEn: [
      "Heavy & medium industrial parks, Robbiki Leather City",
      "University zone (Egyptian Russian University ERU, Badr University BUC)",
      "New Capital civil servant housing (Zahrat Al-Assema)",
      "Distinctive Housing Districts 1 & 2, Eastern & Northern expansions",
    ],
    submarkets: [
{
            "id": "badr-distinguished",
            "nameAr": "الحي المتميز (فيلات وعمارات متوسط وفاخر)",
            "nameEn": "Distinctive District (Al-Hayy Al-Motamayyez)",
            "typologyAr": "إسكان راقٍ وفيلات مستقلة وعمارات سكنية متميزة",
            "typologyEn": "Upper-scale residential apartments, boutique buildings and private villas",
            "densityLevelAr": "متوسطة إلى منخفضة",
            "densityLevelEn": "Medium to low",
            "dominantLandUseAr": "سكني متميز، فيلات، مولات تجارية محلية، خدمات ترفيهية",
            "dominantLandUseEn": "Upscale residential, detached villas, community malls, recreation",
            "priceRangeEgpSqmAr": "14,500 – 19,000 ج.م/م² (سكني) | 36,000 – 52,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "14.5k – 19k EGP/sqm (Res) | 36k – 52k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "واجهة مدينة بدر الراقية والأقرب لمدخل المدينة من طريق السويس ومحطة القطار الكهربائي LRT. يضم مشروعات فيلات وعمارات فاخرة لكبار المستثمرين.",
            "notesEn": "The premier residential quarter of Badr City closest to Suez Road and the central LRT terminal.",
            "avgFlatPriceEgpSqm": 16500,
            "avgVillaPriceEgpSqm": 25000,
            "avgCommercialPriceEgpSqm": 42000,
            "rentalYieldPct": 8.2,
            "occupancyPct": 56,
            "maturityScore": 70,
            "deliveryStatusAr": "مكتمل في أجزائه الأولى ومراحل جديدة قيد البناء",
            "deliveryStatusEn": "Core phases fully built with active new deliveries",
            "investmentAttractivenessScore": 86,
            "prosAr": [
                  "أرقى عنوان سكني في مدينة بدر",
                  "قرب مباشر من طريق السويس والعاصمة الإدارية الجديدة (10 دقائق)",
                  "طلب متزايد من أطباء وأساتذة جامعات BUC وERU"
            ],
            "prosEn": [
                  "Prime residential prestige within Badr City",
                  "10-minute commute to New Administrative Capital via Suez Road",
                  "Strong demand from university faculty and medical professionals"
            ],
            "challengesAr": [
                  "ارتفاع سعر المتر مقارنة بباقي أحياء مدينة بدر العمالية"
            ],
            "challengesEn": [
                  "Price premium over standard industrial worker residential sectors"
            ],
            "investorActionAr": "شراء عمارات وأراضٍ لبناء شقق فندقية ومقرات إدارية لخدمة أعضاء هيئات التدريس والشركات.",
            "investorActionEn": "Develop boutique serviced apartment buildings targeting academic and corporate executives."
      },
      {
            "id": "badr-zahrat-capital",
            "nameAr": "زهرة العاصمة (سكن موظفي العاصمة الإدارية)",
            "nameEn": "Zahrat El-Assema (Civil Servants Housing District)",
            "typologyAr": "مجمعات عمارات إسكان حديثة كاملة الخدمات والمرافق",
            "typologyEn": "Modern government-built residential blocks with complete infrastructure",
            "densityLevelAr": "مرتفعة ومأهولة بالآلاف من موظفي الوزارات المنتقلين",
            "densityLevelEn": "High, densely inhabited by relocated ministry civil servants",
            "dominantLandUseAr": "سكني حكومي متميز، مدارس حديثة، أسواق مركزية، مواصلات للعاصمة",
            "dominantLandUseEn": "Civil servant housing, new schools, central markets, direct NAC shuttles",
            "priceRangeEgpSqmAr": "11,500 – 14,000 ج.م/م² (سكني) | 30,000 – 45,000 ج.م/م² (محلات تجارية)",
            "priceRangeEgpSqmEn": "11.5k – 14k EGP/sqm (Res) | 30k – 45k EGP/sqm (Commercial Shops)",
            "dataQualityTier": "Tier A",
            "notesAr": "المشروع الرئاسي الأضخم لسكن موظفي الوزارات والجهات الحكومية المنقولة للعاصمة الإدارية. أكثر من 20 ألف وحدة تم تسليم مرحلتيها الأولى والثانية بنسبة إشغال تفوق 75%.",
            "notesEn": "The primary national residential project for ministries relocated to the New Administrative Capital.",
            "avgFlatPriceEgpSqm": 12500,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 36000,
            "rentalYieldPct": 8.8,
            "occupancyPct": 76,
            "maturityScore": 84,
            "deliveryStatusAr": "مكتمل ومسكون بالكامل مع حافلات منتظمة للحي الحكومي",
            "deliveryStatusEn": "Fully Delivered & Inhabited with dedicated NAC bus routes",
            "investmentAttractivenessScore": 88,
            "prosAr": [
                  "كثافة سكانية حقيقية مضمونة برواتب حكومية منتظمة",
                  "قوة شرائية متواصلة على مدار اليوم للأنشطة الغذائية والطبية",
                  "خط حافلات مباشر ودائم ينقل السكان إلى الحي الحكومي بالعاصمة"
            ],
            "prosEn": [
                  "Guaranteed resident footprint with stable government payrolls",
                  "High daily footfall for groceries, bakeries, pharmacies",
                  "Dedicated daily transport shuttles to NAC Government District"
            ],
            "challengesAr": [
                  "الوحدات السكنية غير متاحة للمضاربة الخاصة (مخصصة للموظفين)"
            ],
            "challengesEn": [
                  "Residential units are non-speculative state-allocated apartments"
            ],
            "investorActionAr": "شراء المحلات التجارية والخدمية والمراكز الطبية في المزادات العامة لخدمة آلاف الأسر المقيمة.",
            "investorActionEn": "Acquire ground-floor commercial shops, service centres and clinics via public authority auctions."
      },
      {
            "id": "badr-universities",
            "nameAr": "قطاع الجامعات (جامعة بدر BUC والجامعة الروسية ERU)",
            "nameEn": "Universities Academic & Student Housing Hub",
            "typologyAr": "منطقة خدمات تعليمية وتجارية وسكن طلابي وأعضاء تدريس",
            "typologyEn": "Higher education campuses, student dorms & vibrant retail node",
            "densityLevelAr": "مرتفعة جدًا خلال العام الدراسي (أكثر من 40 ألف طالب)",
            "densityLevelEn": "High seasonal demographic density (>40,000 active students)",
            "dominantLandUseAr": "جامعات كبرى، سكن فندقي للطلاب، كافيهات، مطاعم، مراكز طباعة",
            "dominantLandUseEn": "Major universities, student residences, cafes, dining, support retail",
            "priceRangeEgpSqmAr": "15,000 – 21,000 ج.م/م² (سكني طلابي) | 45,000 – 70,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "15k – 21k EGP/sqm (Student Res) | 45k – 70k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "أقوى محرك اقتصادي وإيجاري في مدينة بدر. يضم جامعة بدر (BUC) والجامعة المصرية الروسية (ERU) وعدة معاهد عليا، مما يولد طلباً إيجارياً ضخماً بالدولار والجنيه للطلاب الوافدين والمصريين.",
            "notesEn": "The strongest rental yield generator in Badr, housing BUC, Russian University ERU and multiple colleges.",
            "avgFlatPriceEgpSqm": 17500,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 54000,
            "rentalYieldPct": 10.2,
            "occupancyPct": 92,
            "maturityScore": 92,
            "deliveryStatusAr": "مكتمل وناشط اقتصاديًا وتعليميًا",
            "deliveryStatusEn": "Fully Operational & Thriving Educational Node",
            "investmentAttractivenessScore": 94,
            "prosAr": [
                  "أعلى عائد إيجاري سكني في مدينة بدر (10–12% سنوياً)",
                  "طلب متزايد على السكن الفندقي للطلاب العرب والأجانب (بالعملات الأجنبية)",
                  "نشاط تجاري لا ينقطع للمطاعم والمقاهي والخدمات التكنولوجية"
            ],
            "prosEn": [
                  "Top residential rental yields in Badr (10–12% p.a.)",
                  "Surging foreign/Arab student demand paying premium rents",
                  "Vibrant daily retail consumption for F&B, tech and printing"
            ],
            "challengesAr": [
                  "انخفاض نسبي في الإشغال خلال العطلة الصيفية (يوليو–أغسطس)"
            ],
            "challengesEn": [
                  "Seasonal occupancy dip during summer vacation months (July-August)"
            ],
            "investorActionAr": "شراء مبانٍ سكنية كاملة وتحويلها إلى سكن طلابي فندقي خاص بإدارة فندقية احترافية.",
            "investorActionEn": "Acquire residential buildings and convert into private student hostel accommodations with professional management."
      },
      {
            "id": "badr-industrial-mega",
            "nameAr": "المنطقة الصناعية الكبرى ومدينة الروبيكي للجلود",
            "nameEn": "Mega Industrial Zone & Al-Rubeiki Leather City",
            "typologyAr": "قلاع صناعات ثقيلة ومتوسطة ومدن صناعية تخصصية",
            "typologyEn": "Heavy, medium and specialized manufacturing & logistics parks",
            "densityLevelAr": "مرتفعة صناعيًا وتشغيليًا (أكثر من 2200 مصنع ومنشأة)",
            "densityLevelEn": "High operational footprint with >2,200 operating factories",
            "dominantLandUseAr": "دباغة وصناعات جلدية (الروبيكي)، صناعات نسيجية وهندسية وكيماوية ومخازن",
            "dominantLandUseEn": "Leather tanning & goods (Rubeiki), textiles, engineering, chemical, warehousing",
            "priceRangeEgpSqmAr": "8,500 – 13,000 ج.م/م² (أراضٍ/عنابر) | 20,000 – 32,000 ج.م/م² (إداري وخدمي)",
            "priceRangeEgpSqmEn": "8.5k – 13k EGP/sqm (Industrial Land/Sheds) | 20k – 32k EGP/sqm (Office/Services)",
            "dataQualityTier": "Tier A",
            "notesAr": "أكبر منطقة صناعية تتبع هيئة المجتمعات العمرانية في شرق القاهرة بعد العاشر من رمضان. تضم مدينة الجلود بالروبيكي ومنطقة الـ 100 فدان الصناعية المتطورة ومحطة شحن بضائع.",
            "notesEn": "The largest NUCA industrial cluster in East Cairo, housing Al-Rubeiki Leather City and major manufacturing plants.",
            "avgFlatPriceEgpSqm": 10000,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 28000,
            "rentalYieldPct": 11,
            "occupancyPct": 88,
            "maturityScore": 90,
            "deliveryStatusAr": "قائم ومشغول بكثافة مع توسعات مستمرة",
            "deliveryStatusEn": "Fully active with ongoing industrial expansions",
            "investmentAttractivenessScore": 90,
            "prosAr": [
                  "حوافز حكومية استثنائية للمصانع والورش المتخصصة",
                  "وفرة عمالة ماهرة ومواصلات سهلة من محافظات الشرقية والقاهرة والقليوبية",
                  "عائد إيجاري ممتاز على العنابر الجاهزة والمخازن اللوجستية"
            ],
            "prosEn": [
                  "Strong state industrial incentives and export facilitation",
                  "Abundant technical workforce from Sharkia, Cairo and Qalyubia",
                  "High yields on pre-engineered factory sheds and logistics parks"
            ],
            "challengesAr": [
                  "الالتزام بالاشتراطات البيئية والتخلص من المخلفات الصناعية"
            ],
            "challengesEn": [
                  "Compliance with environmental zoning and industrial waste standards"
            ],
            "investorActionAr": "تطوير هناجر صناعية قياسية مسبقة الصنع ومستودعات تخزين جاف للإيجار للمصدرين والمصانع.",
            "investorActionEn": "Develop standard modular factory sheds and dry warehousing for export-oriented manufacturers."
      }
    ],
    investmentHypothesisAr: "طلب قوي في إسكان العاملين والطلاب، وخدمات الدعم اللوجستي والصناعي والخدمات الطبية والتجارية الأساسية ذات التكلفة المنضبطة.",
    investmentHypothesisEn: "Resilient student & workforce housing demand, industrial logistics facilities, and value-oriented essential services.",
    promisingSectorsAr: [
      "سكن الطلاب والمدرسين المفروش والمستأجر بعقود سنوية",
      "المستودعات والخدمات اللوجستية الخفيفة ومراكز الصيانة",
      "العيادات الطبية التخصصية ومراكز الأشعة والتحاليل",
      "التجزئة الاقتصادية وسلاسل السوبرماركت ومحطات الخدمة",
    ],
    promisingSectorsEn: [
      "Turnkey student accommodation & faculty rental apartments",
      "Light warehousing, distribution nodes & technical services",
      "Community polyclinics, imaging & pathology labs",
      "Value grocery supermarkets & commercial service strips",
    ],
    keyRisksAr: [
      "اعتماد الطلب على شرائح سعرية محددة ذات قدرة شرائية حساسة للتضخم",
      "التباعد المكاني بين المناطق الصناعية والتجمعات السكنية الجديدة",
      "المنافسة السعرية الشديدة وهوامش ربح تحتاج انضباطًا في التكلفة",
    ],
    keyRisksEn: [
      "Purchasing power concentration in price-sensitive demographics",
      "Spatial separation between industrial parks and newly built housing",
      "Tight operational margins requiring strict construction cost control",
    ],
    preAcquisitionRequirementsAr: [
      "التأكد من رخصة الأرض (سكنية، صناعية، تجارية، مخازن)",
      "فحص نسب الإشغال الفعلية في مشروعات الإسكان المحيطة",
      "مراجعة توافر شبكات المرافق وقدرات الكهرباء المغذية للمشروع",
    ],
    preAcquisitionRequirementsEn: [
      "Confirm land-use designation (residential, industrial, commercial, storage)",
      "Measure physical occupancy levels in adjacent residential developments",
      "Verify utility substation capacity and water intake connectivity",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=2",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز تنمية مدينة بدر",
    officialSourceNameEn: "NUCA – Badr City Authority",
  },
  {
    id: "mostakbal-city",
    avgFlatPriceEgpSqm: 56000,
    avgVillaPriceEgpSqm: 82000,
    avgCommercialPriceEgpSqm: 120000,
    avgLandPriceEgpSqm: 42000,
    expectedRentalYieldPct: 9,
    currentEstimatedOccupancyPct: 35,
    overallMaturityScore: 68,
    investmentRank: 3,
    primaryAxisAr: "محور الأمل وامتداد طريق السويس والدائري الأوسطي",
    primaryAxisEn: "Al-Amal Axis, Suez Road Extension & Middle Ring Road",
    nameAr: "مستقبل سيتي",
    nameEn: "Mostakbal City",
    category: "special_authority",
    establishmentLawAr: "تطوير رئيسي لشركة المستقبل للتنمية العمرانية (ميدار MIDAR حاليًا)",
    establishmentLawEn: "Master-developed by El Mostakbal for Urban Development (now MIDAR)",
    planningAreaFeddans: 11000,
    planningAreaDisplayAr: "قرابة 11,000 فدان (المساحة الإجمالية المعلنة للمطور الرئيسي)",
    planningAreaDisplayEn: "Approx. 11,000 Feddans (Master Developer Gross Concession)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "مقسمة إلى مراحل تطوير كبرى تباع كأراضٍ للمطورين الفرعيين",
    urbanMassDisplayEn: "Subdivided into major phases sub-sold to tier-1 private developers",
    targetPopulation: "مستهدفات سكنية مخططة تعتمد على تسليم كمبوندات المطورين",
    targetPopulationEn: "Target population dependent on compound handovers by private developers",
    actualPopulationStatusAr: "بيانات التعداد الإجمالي الحالي غير معلنة رسميًا؛ المدينة في مرحلة بدء الإشغال وتسليم المراحل السكنية الأولى وتجهيز المرافق.",
    actualPopulationStatusEn: "Municipal population census not publicly released; entering early residential occupancy & initial phases handover.",
    dataQualityTier: "B",
    locationAndBoundariesAr: "تقع على طريق القاهرة–السويس بين الكيلو 46 والكيلو 51، بجوار مدينتي والعاصمة الإدارية والشروق.",
    locationAndBoundariesEn: "Located on Cairo–Suez Road between km 46–51, adjacent to Madinaty, New Capital & Shorouk.",
    majorRoadsAr: [
      "طريق القاهرة–السويس الصحراوي",
      "محور الأمل ومحاور الربط مع العاصمة الإدارية",
      "الطريق الدائري الأوسطي والدائري الإقليمي القريبين",
      "طريق المستقبل الداخلي",
    ],
    majorRoadsEn: [
      "Cairo–Suez Desert Road",
      "Al-Amal Axis & New Capital Connectors",
      "Middle Ring Road & Regional Ring Road proximity",
      "Mostakbal Master Boulevard",
    ],
    landUseStructureAr: [
      "مشروعات سكنية فاخرة مغلقة لكبار المطورين (الأهلي صبور، حسن علام، تطوير مصر، مصر إيطاليا، ماونتن فيو، إلخ)",
      "المرحلة الأولى والمرحلة الثالثة ومناطق الامتداد",
      "محاور الخدمات الإدارية والتجارية والتعليمية المركزية (الـ Spine)",
      "مناطق ترفيهية ومساحات خضراء ومجتمعية واسعة",
    ],
    landUseStructureEn: [
      "Tier-1 gated residential compounds (Al Ahly Sabbour, Hassan Allam, Tatweer Misr, Misr Italia, Mountain View, etc.)",
      "Phase 1, Phase 3 & expansion corridors",
      "Central commercial, educational & office spine",
      "Extensive green landscapes & sports facilities",
    ],
    submarkets: [
{
            "id": "mostakbal-phase-1",
            "nameAr": "المرحلة الأولى (بوليفارد المستقبل ومشروعات كبار المطورين)",
            "nameEn": "Phase 1 (Boulevard & Tier-1 Master Developers)",
            "typologyAr": "كومباوندات متكاملة راقية ومحور بوليفارد تجاري وترفيهي",
            "typologyEn": "Master-planned residential compounds & central lifestyle Boulevard",
            "densityLevelAr": "منخفضة إلى متوسطة ومحكومة بالكامل",
            "densityLevelEn": "Low to medium, meticulously regulated",
            "dominantLandUseAr": "سكني فاخر (شقق وفيلات)، بوليفارد تجاري، نوادٍ رياضية، مساحات خضراء",
            "dominantLandUseEn": "High-end residential, lifestyle retail boulevard, sports clubs, green parks",
            "priceRangeEgpSqmAr": "56,000 – 78,000 ج.م/م² (سكني) | 120,000 – 175,000 ج.م/م² (تجاري إداري)",
            "priceRangeEgpSqmEn": "56k – 78k EGP/sqm (Res) | 120k – 175k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "تضم ألمع مشروعات التطوير العقاري: حسن علام (Haptown)، الأهلي صبور (The City of Odyssia, Rare, Green Square)، تطوير مصر (Bloomfields)، ومصر إيطاليا (Il Bosco City).",
            "notesEn": "Showcases prime communities by Hassan Allam, Al Ahly Sabbour, Tatweer Misr, and Misr Italia.",
            "avgFlatPriceEgpSqm": 64000,
            "avgVillaPriceEgpSqm": 92000,
            "avgCommercialPriceEgpSqm": 145000,
            "rentalYieldPct": 9.4,
            "occupancyPct": 48,
            "maturityScore": 78,
            "deliveryStatusAr": "تسليمات مرحلية كبرى مستمرة وتسكين فعلي",
            "deliveryStatusEn": "Major Active Handover Waves & Growing Family Residence",
            "investmentAttractivenessScore": 94,
            "prosAr": [
                  "بيئة سكنية ذكية وخضراء بالكامل (Green & Smart City)",
                  "مطورون من الفئة الأولى يضمنون جودة البناء والصيانة",
                  "موقع محوري كبوابة وصل مباشرة بين القاهرة الجديدة والعاصمة الإدارية"
            ],
            "prosEn": [
                  "State-of-the-art green and smart city master infrastructure",
                  "Tier-1 institutional developers guarantee execution quality",
                  "Strategic hinge connecting New Cairo and New Capital"
            ],
            "challengesAr": [
                  "تحصيل مصاريف صيانة وإدارة مرافق متقدمة على الملاك"
            ],
            "challengesEn": [
                  "Higher ongoing master-community facility management charges"
            ],
            "investorActionAr": "شراء شقق وفيلات في مراحل التسليم القريبة وإعادة تأجيرها للمديرين التنفيذيين بالعاصمة الإدارية.",
            "investorActionEn": "Acquire near-delivery residential units targeting executive tenants working in the New Capital."
      },
      {
            "id": "mostakbal-phase-2-central",
            "nameAr": "المرحلة الثانية والمنطقة المركزية والخدمات",
            "nameEn": "Phase 2 & Central Commercial/Club Spine",
            "typologyAr": "مراكز تجارية إقليمية ونوادٍ كبرى ومجمعات تعليمية وطبية",
            "typologyEn": "Regional retail centres, mega sports clubs and institutional campuses",
            "densityLevelAr": "متوسطة",
            "densityLevelEn": "Medium",
            "dominantLandUseAr": "مولات تجارية، مكاتب إدارية، نوادٍ رياضية دولية، مدارس وجامعات",
            "dominantLandUseEn": "Commercial hubs, corporate offices, mega clubs, educational institutions",
            "priceRangeEgpSqmAr": "50,000 – 68,000 ج.م/م² (سكني) | 100,000 – 150,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "50k – 68k EGP/sqm (Res) | 100k – 150k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "تمثل القلب الخدمي والترفيهي لمستقبل سيتي، وتربط بين المراحل السكنية المختلفة مع تخصيص مساحات شاسعة للنوادي الرياضية ومناطق التسوق المفتوحة.",
            "notesEn": "The service and entertainment core of Mostakbal City, bridging residential quadrants.",
            "avgFlatPriceEgpSqm": 56000,
            "avgVillaPriceEgpSqm": 80000,
            "avgCommercialPriceEgpSqm": 120000,
            "rentalYieldPct": 9,
            "occupancyPct": 32,
            "maturityScore": 64,
            "deliveryStatusAr": "قيد البناء والتشييد المتسارع",
            "deliveryStatusEn": "Accelerated Construction & Phased Execution",
            "investmentAttractivenessScore": 90,
            "prosAr": [
                  "فرص استثمار تجاري وطبي لا تعوض في قلب المدينة",
                  "تصميمات معمارية عالمية ومساحات مواقف كبرى",
                  "استفادة مباشرة من تدفق سكان المراحل المحيطة"
            ],
            "prosEn": [
                  "Prime commercial, F&B and medical investment opportunities",
                  "World-class architectural master layouts with ample parking",
                  "Captive customer base from surrounding residential phases"
            ],
            "challengesAr": [
                  "اكتمال الإشغال التجاري يرتبط بوتيرة تسكين المراحل السكنية"
            ],
            "challengesEn": [
                  "Commercial retail stabilization tied to residential occupancy pacing"
            ],
            "investorActionAr": "الاستثمار في مكاتب إدارية وعيادات طبية ومحلات تجارية بمقدمات ميسرة وأقساط حتى 8 سنوات.",
            "investorActionEn": "Invest in commercial clinics, offices and retail units with 8-year developer payment plans."
      },
      {
            "id": "mostakbal-phase-3-capital",
            "nameAr": "المراحل 3 و4 (امتداد العاصمة والطريق الدائري الأوسطي)",
            "nameEn": "Phases 3 & 4 (NAC Extension & Middle Ring Road)",
            "typologyAr": "امتدادات عمرانية كبرى ومجتمعات سكنية واستثمارية حديثة",
            "typologyEn": "Expansive master-development reserves and new mixed-use clusters",
            "densityLevelAr": "منخفضة حاليًا (أراضٍ ومراحل تأسيس)",
            "densityLevelEn": "Low initial footprint (groundwork & early structural phases)",
            "dominantLandUseAr": "سكني استثماري، أنشطة لوجستية ذكية، واجهات تجارية على الأوسطي",
            "dominantLandUseEn": "Mixed residential, smart logistics, commercial frontages on Middle Ring Rd",
            "priceRangeEgpSqmAr": "44,000 – 58,000 ج.م/م² (سكني) | 85,000 – 125,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "44k – 58k EGP/sqm (Res) | 85k – 125k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "تمتد بمحاذاة الطريق الدائري الأوسطي ومحور الأمل، وتعد أقرب نقاط مستقبل سيتي للعاصمة الإدارية ومطار العاصمة الدولي.",
            "notesEn": "Fronts Middle Ring Road and Al-Amal Axis, representing the closest interface with New Capital and Capital Airport.",
            "avgFlatPriceEgpSqm": 48000,
            "avgVillaPriceEgpSqm": 72000,
            "avgCommercialPriceEgpSqm": 98000,
            "rentalYieldPct": 8.5,
            "occupancyPct": 22,
            "maturityScore": 50,
            "deliveryStatusAr": "قيد أعمال التشييد الأولية (تسليمات 2026–2028)",
            "deliveryStatusEn": "Early Construction Works (Handovers 2026–2028)",
            "investmentAttractivenessScore": 88,
            "prosAr": [
                  "أفضل أسعار دخول للمتر في مستقبل سيتي مع فترات سداد ممتدة",
                  "موقع استثنائي على الطريق الدائري الأوسطي مباشرة",
                  "هوامش نمو رأسمالي متوقعة تفوق 40% عند التسليم"
            ],
            "prosEn": [
                  "Best price-per-sqm entry in Mostakbal City with extended payment horizons",
                  "Prime frontage on Middle Ring Road",
                  "Anticipated >40% capital gain upon completion"
            ],
            "challengesAr": [
                  "فترة انتظار أطول قبل بدء التشغيل الفعلي للوحدات"
            ],
            "challengesEn": [
                  "Longer waiting cycle before operational cash generation"
            ],
            "investorActionAr": "اقتناص وحدات سكنية وتجارية بأسعار الإطلاق الأولى لتحقيق أقصى ربحية رأسمالية عند إعادة البيع.",
            "investorActionEn": "Enter off-plan at launch pricing to capture maximum equity appreciation on resale."
      }
    ],
    investmentHypothesisAr: "سوق كمبوندات راقٍ ومستقل يتمتع بجاذبية شرائية عالية، وفرص واعدة في المراكز التجارية والخدمات المدرسية والطبية الداعمة للمقيمين.",
    investmentHypothesisEn: "Upscale master-planned compound cluster commanding strong brand equity; high upside in commercial amenities & healthcare supporting early resident move-ins.",
    promisingSectorsAr: [
      "المراكز التجارية المجتمعية (Strip Malls) عند بوابات المشروعات الكبرى",
      "العيادات الطبية التخصصية ومراكز العناية الصحية المتكاملة",
      "المدارس الدولية والخاصة اللغات وحضانات الأطفال",
      "المكاتب الإدارية ومساحات العمل المشتركة للشركات والمهنيين",
    ],
    promisingSectorsEn: [
      "Curated strip malls at arterial gates of major compounds",
      "Specialized medical clinics & wellness hubs",
      "International K-12 schooling & premium nurseries",
      "Boutique office suites & flexible workspaces",
    ],
    keyRisksAr: [
      "تفاوت نسب الإنجاز والتسليم الفعلي بين المطورين الفرعيين المختلفين",
      "الاعتماد على وتيرة استكمال البنية التحتية والمرافق الرئيسية من المطور العام",
      "ارتفاع أسعار الأراضي والمنافسة الشديدة بين الكمبوندات المتجاورة",
    ],
    keyRisksEn: [
      "Uneven delivery and construction velocity among sub-developers",
      "Dependency on master developer for off-site utilities and road commissioning",
      "High land price basis and direct marketing competition between adjacent compounds",
    ],
    preAcquisitionRequirementsAr: [
      "فحص سجل المطور الفرعي ومعدلات الإنجاز على أرض الواقع",
      "التحقق من توقيت إطلاق التيار الكهربائي وخطوط المياه والصرف لكل قطعة",
      "مراجعة نسب الشغور والتأجير في المشروعات التي بدأت التسليم",
    ],
    preAcquisitionRequirementsEn: [
      "Audit delivery track record of specific sub-developer",
      "Verify utility commissioning dates (water, sewage, substation hook-up)",
      "Measure physical move-in and vacancy rates in delivered phases",
    ],
    officialSourceUrl: "https://midar.com.eg",
    officialSourceNameAr: "شركة ميدار للتنمية العمرانية (المطور الرئيسي لمدينة المستقبل)",
    officialSourceNameEn: "MIDAR for Urban Development (Master Developer)",
  },
  {
    id: "madinaty",
    avgFlatPriceEgpSqm: 54000,
    avgVillaPriceEgpSqm: 88000,
    avgCommercialPriceEgpSqm: 150000,
    avgLandPriceEgpSqm: 48000,
    expectedRentalYieldPct: 8.8,
    currentEstimatedOccupancyPct: 82,
    overallMaturityScore: 94,
    investmentRank: 4,
    primaryAxisAr: "طريق السويس ومحور مدينتي والربط مع الشروق ومستقبل سيتي",
    primaryAxisEn: "Suez Road, Madinaty Spine & Shorouk Link",
    nameAr: "مدينتي",
    nameEn: "Madinaty",
    category: "private_community",
    establishmentLawAr: "عقد تطوير وتخصيص مشروعات خاصة مع مجموعة طلعت مصطفى (TMG) منذ 2006",
    establishmentLawEn: "Private master developer concession with Talaat Moustafa Group (TMG) since 2006",
    planningAreaFeddans: 8000,
    planningAreaDisplayAr: "8,000 فدان تقريبًا (أرقام المطور الخاص TMG)",
    planningAreaDisplayEn: "Approx. 8,000 Feddans (TMG Master Developer Data)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "مدينة مغلقة متكاملة ذات إدارة وتشغيل ذاتي فائق التطور",
    urbanMassDisplayEn: "Fully integrated gated city with autonomous high-end FM",
    targetPopulation: "700,000 - 800,000 نسمة مستهدف عند اكتمال المراحل",
    targetPopulationEn: "700k-800k resident target at total build-out",
    actualPopulationStatusAr: "تضم مئات الآلاف من السكان المقيمين فعليًا يوميًا (تعتبر أعلى المجتمعات الخاصة إشغالًا بشرق القاهرة).",
    actualPopulationStatusEn: "Hosts hundreds of thousands of active daily residents; highest physical occupancy among private communities.",
    dataQualityTier: "B",
    locationAndBoundariesAr: "تقع على طريق القاهرة–السويس بين الكيلو 33 والكيلو 45، شرق القاهرة الجديدة والشروق.",
    locationAndBoundariesEn: "Located on Cairo–Suez Road between km 33–45, east of New Cairo & Shorouk.",
    majorRoadsAr: [
      "طريق القاهرة–السويس الصحراوي",
      "الطريق الدائري الأوسطي",
      "محور الأمل",
      "شبكة الحافلات الترددية الخاصة بمدينتي",
    ],
    majorRoadsEn: [
      "Cairo–Suez Desert Road",
      "Middle Ring Road",
      "Al-Amal Corridor",
      "Dedicated Madinaty private shuttle bus fleet",
    ],
    landUseStructureAr: [
      "مناطق عمارات وفيلات موزعة على مراحل (B1 إلى B12 وVG)",
      "المراكز التجارية العالمية (Open Air Mall، Craft Zone، South Gate)",
      "المركز الطبي المتكامل والمستشفى التخصصي",
      "نوادٍ رياضية وبطولات جولف ومدارس دولية متعددة",
    ],
    landUseStructureEn: [
      "Apartment & villa zones across sectors (B1 to B12, VG)",
      "Flagship retail (Open Air Mall, Craft Zone, South Gate)",
      "Madinaty Integrated Medical Centre & Tertiary Hospital",
      "Championship golf clubs & multiple international schools",
    ],
    submarkets: [
{
            "id": "madinaty-residential-b1-b8",
            "nameAr": "المراحل السكنية (B1 حتى B8) - الشقق السكنية",
            "nameEn": "Residential Clusters (B1 through B8) - Apartments",
            "typologyAr": "مجمعات عمارات سكنية متكاملة ذات طابع حدائقي متناسق",
            "typologyEn": "Integrated garden apartment clusters with standardized architectural aesthetic",
            "densityLevelAr": "متوسطة إلى مرتفعة ومأهولة بنسبة تفوق 85%",
            "densityLevelEn": "Medium to high, >85% stabilized occupancy",
            "dominantLandUseAr": "سكني عائلي، مراكز خدمات أحياء، حدائق وملاعب، مواقف سيارات",
            "dominantLandUseEn": "Family residences, neighborhood service centers, gardens, playgrounds",
            "priceRangeEgpSqmAr": "48,000 – 62,000 ج.م/م² (سكني) | 110,000 – 160,000 ج.م/م² (تجاري أحياء)",
            "priceRangeEgpSqmEn": "48k – 62k EGP/sqm (Res) | 110k – 160k EGP/sqm (Local Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "أكبر وأنجح مجتمع سكني متكامل في مصر طورته مجموعة طلعت مصطفى (TMG). خدمات بلدية وإدارة مرافق خاصة على مدار 24 ساعة، وحافلات خاصة.",
            "notesEn": "Egypt's premier master community developed by TMG with 24/7 private facility management and private transit.",
            "avgFlatPriceEgpSqm": 54000,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 135000,
            "rentalYieldPct": 8.8,
            "occupancyPct": 86,
            "maturityScore": 96,
            "deliveryStatusAr": "مكتمل وناضج ومأهول بمئات الآلاف من السكان",
            "deliveryStatusEn": "Fully Matured & Inhabited with >350,000 residents",
            "investmentAttractivenessScore": 93,
            "prosAr": [
                  "أعلى معدل أمان رأسمالي وطلب إيجاري مستمر دون انقطاع",
                  "منظومة أمن وإدارة مرافق ونظافة هي الأفضل في مصر",
                  "حياة يومية متكاملة بدون الحاجة لمغادرة المدينة"
            ],
            "prosEn": [
                  "Top-tier capital preservation and continuous rental demand",
                  "Best-in-class security, maintenance and sanitation in Egypt",
                  "Self-contained township living with all lifestyle amenities"
            ],
            "challengesAr": [
                  "ارتفاع رسوم الصيانة الدورية واشتراكات النوادي"
            ],
            "challengesEn": [
                  "High annual maintenance fees and private club subscriptions"
            ],
            "investorActionAr": "شراء شقق سكنية لإعادة تأجيرها للعائلات والكوادر الطبية والهندسية بعوائد إيجارية دورية مضمونة.",
            "investorActionEn": "Acquire residential apartments for guaranteed cash-flow leasing to professional families."
      },
      {
            "id": "madinaty-four-seasons-villas",
            "nameAr": "قطاع الفيلات ونادي الجولف ومجمع فورسيزونز",
            "nameEn": "Golf Villas, Golf Club & Four Seasons Resort",
            "typologyAr": "فيلات وقصور فاخرة مطلة على ملاعب الجولف العالمية",
            "typologyEn": "Ultra-luxury villas and estates fronting championship golf course",
            "densityLevelAr": "منخفضة جدًا مع مسطحات خضراء وبحيرات مائية",
            "densityLevelEn": "Very low density, lakes and sprawling championship fairways",
            "dominantLandUseAr": "فيلات فاخرة، ملاعب جولف 18 حفرة، منتجع فورسيزونز، نوادٍ خاصة",
            "dominantLandUseEn": "Luxury villas, 18-hole golf course, Four Seasons hotel, exclusive clubhouses",
            "priceRangeEgpSqmAr": "75,000 – 120,000 ج.م/م² (فيلات وقصور فاخرة)",
            "priceRangeEgpSqmEn": "75k – 120k EGP/sqm (Luxury Villas & Palaces)",
            "dataQualityTier": "Tier A",
            "notesAr": "قمة الفخامة في مدينتي وشرق القاهرة. يضم ملاعب جولف صممها روبرت ترينت جونز وفندق فورسيزونز العالمي.",
            "notesEn": "The pinnacle of luxury in Madinaty, featuring Robert Trent Jones golf course and Four Seasons resort.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 95000,
            "avgCommercialPriceEgpSqm": 0,
            "rentalYieldPct": 7.8,
            "occupancyPct": 78,
            "maturityScore": 95,
            "deliveryStatusAr": "مكتمل وناضج بالكامل",
            "deliveryStatusEn": "Fully Completed & Established",
            "investmentAttractivenessScore": 91,
            "prosAr": [
                  "أعلى درجات الخصوصية والرفاهية والهدوء",
                  "إطلالات مفتوحة دائمة على ملاعب الجولف والبحيرات",
                  "أصل عقاري نخبوي يحفظ الثروة في مواجهة التضخم"
            ],
            "prosEn": [
                  "Maximum privacy, tranquility and elite social standing",
                  "Permanent panoramic views of lakes and manicured greens",
                  "Premier wealth preservation asset hedge against inflation"
            ],
            "challengesAr": [
                  "حجم التذكرة الاستثمارية كبير جدًا (يتطلب سيولة نقدية ضخمة)"
            ],
            "challengesEn": [
                  "Substantial capital ticket required per transaction"
            ],
            "investorActionAr": "شراء فيلات جولف لإعادة البيع للنخبة ورجال الأعمال أو التأجير الدبلوماسي الفاخر.",
            "investorActionEn": "Acquire golf-front villas for high-net-worth resale or diplomatic long-term leasing."
      },
      {
            "id": "madinaty-open-air-mall",
            "nameAr": "منطقة الأوبن إير مول والخدمات المركزية (Open Air Mall)",
            "nameEn": "Open Air Mall & Regional Commercial District",
            "typologyAr": "أكبر مركز تسوق وترفيه مفتوح في الشرق الأوسط",
            "typologyEn": "Largest open-air lifestyle, dining and commercial destination in the region",
            "densityLevelAr": "مرتفعة جدًا تجاريًا وترفيهيًا طوال أيام الأسبوع",
            "densityLevelEn": "High daily commercial footfall from inside and outside Madinaty",
            "dominantLandUseAr": "مولات مفتوحة، سينمات رينيسانس، بنوك، مطاعم عالمية، مراكز طبية ومقرات شركات",
            "dominantLandUseEn": "Open-air retail, cinemas, international F&B, banking HQ, medical hubs",
            "priceRangeEgpSqmAr": "130,000 – 210,000 ج.م/م² (تجاري/إداري/طبي)",
            "priceRangeEgpSqmEn": "130k – 210k EGP/sqm (Commercial/Office/Clinics)",
            "dataQualityTier": "Tier A",
            "notesAr": "يستقطب ملايين الزوار سنويًا من كافة أنحاء القاهرة بفضل تصميمه المبتكر وبحيراته وقطار الترام الداخلي.",
            "notesEn": "Attracts millions of regional visitors annually with open-air waterways and internal tram system.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 165000,
            "rentalYieldPct": 10.2,
            "occupancyPct": 92,
            "maturityScore": 98,
            "deliveryStatusAr": "مكتمل ويعمل بكامل طاقته التشغيلية",
            "deliveryStatusEn": "Fully Operational & Stabilized",
            "investmentAttractivenessScore": 96,
            "prosAr": [
                  "أعلى حركة مبيعات وإقبال تجاري في شرق القاهرة",
                  "تأجير لكبرى العلامات التجارية العالمية (Zara, H&M, Starbucks, Carrefour)",
                  "عائد إيجاري استثنائي واستقرار تعاقدي طويل الأجل"
            ],
            "prosEn": [
                  "Top retail sales performance and footfall density in East Cairo",
                  "Leased to global blue-chip retail and dining brands",
                  "Exceptional rental yields under institutional multi-year leases"
            ],
            "challengesAr": [
                  "ندرة المعروض للبيع (تحتفظ الشركة بالجزء الأكبر للتأجير المباشر)"
            ],
            "challengesEn": [
                  "Scarcity of units for sale as developer retains primary leasing ownership"
            ],
            "investorActionAr": "شراء أي وحدات تجارية أو مكاتب أو عيادات تطرح بنظام التمليك فور توفرها.",
            "investorActionEn": "Acquire any available freehold retail, office or medical space immediately upon release."
      }
    ],
    investmentHypothesisAr: "أقوى حوض طلب استهلاكي متكامل في شرق القاهرة؛ الفرص تتمركز في التجزئة المكملة، والخدمات الطبية التخصصية، والأنشطة اللوجستية.",
    investmentHypothesisEn: "Premier affluent consumer catchment in East Cairo; prime upside in ancillary commercial, specialist clinics, and last-mile fulfillment.",
    promisingSectorsAr: [
      "التجزئة المتخصصة والماركات العالمية والمطاعم المتميزة",
      "المراكز الطبية التخصصية وعيادات جراحة التجميل والأسنان والعيون",
      "الأنشطة الترفيهية والمراكز التعليمية والرياضية المتطورة",
      "خدمات الدعم اللوجستي والتوصيل السريع للمنازل",
    ],
    promisingSectorsEn: [
      "Specialty international retail, fine dining & curated lifestyle brands",
      "High-end medical clinics (dental, dermatology, ophthalmology)",
      "Youth sports academies, extracurricular & enrichment centres",
      "Last-mile dark stores, fulfillment and high-touch delivery hubs",
    ],
    keyRisksAr: [
      "ارتفاع تكلفة الإيجارات ورسوم الصيانة والتشغيل المفروضة من المطور الرئيسي",
      "شروط صارمة للموافقات التجارية وقيود على العلامات التجارية",
      "تشبع بعض فئات التجزئة العامة في الأسواق المركزية القائمة",
    ],
    keyRisksEn: [
      "Substantial rental rates and facility management fees levied by master operator",
      "Stringent tenant mix approvals and strict operational regulations",
      "Category saturation in basic convenience retail across established markets",
    ],
    preAcquisitionRequirementsAr: [
      "مراجعة لوائح الإدارة والتشغيل والرسوم الشهرية للخدمات",
      "فحص شروط التنازل وإعادة البيع أو التأجير من المطور الرئيسي",
      "دراسة حجم الإقبال والمبيعات الفعلية للمتاجر المماثلة في نفس المجمع",
    ],
    preAcquisitionRequirementsEn: [
      "Review master HOA bylaws, operating covenants and service charge structures",
      "Examine developer transfer fees, sub-leasing permissions and commercial rules",
      "Audit documented sales velocity and average footfall of comparable tenants",
    ],
    officialSourceUrl: "https://talaatmoustafa.com",
    officialSourceNameAr: "مجموعة طلعت مصطفى TMG (المطور الرئيسي لمدينتي)",
    officialSourceNameEn: "Talaat Moustafa Group (TMG Master Developer)",
  },
  {
    id: "al-rehab",
    avgFlatPriceEgpSqm: 52000,
    avgVillaPriceEgpSqm: 79000,
    avgCommercialPriceEgpSqm: 135000,
    avgLandPriceEgpSqm: 45000,
    expectedRentalYieldPct: 9.1,
    currentEstimatedOccupancyPct: 92,
    overallMaturityScore: 98,
    investmentRank: 4,
    primaryAxisAr: "طريق السويس ومحور طلعت حرب ومحور محمد نجيب",
    primaryAxisEn: "Suez Road, Talaat Harb Axis & Mohamed Naguib Corridor",
    nameAr: "الرحاب",
    nameEn: "Al Rehab",
    category: "private_community",
    establishmentLawAr: "مشروع خاص لمجموعة طلعت مصطفى (TMG) منذ 1997",
    establishmentLawEn: "Private master community by Talaat Moustafa Group (TMG) since 1997",
    planningAreaFeddans: 2500,
    planningAreaDisplayAr: "قرابة 2,500 فدان (أرقام المطور الخاص)",
    planningAreaDisplayEn: "Approx. 2,500 Feddans (TMG Master Developer Data)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "مدينة مغلقة متكاملة ومكتملة الإشغال بنسبة تقارب 100%",
    urbanMassDisplayEn: "Fully built & near 100% physically occupied gated city",
    targetPopulation: "200,000 - 250,000 نسمة مقيمون فعليًا بالكامل",
    targetPopulationEn: "200k-250k residents actively living on-site",
    actualPopulationStatusAr: "مأهولة بالكامل وتتمتع بكثافة سكانية واستقرار اجتماعي وتجاري هو الأعلى في التجمع الأول.",
    actualPopulationStatusEn: "Fully inhabited with maximum demographic maturity and stable spending in New Cairo.",
    dataQualityTier: "B",
    locationAndBoundariesAr: "تقع بقلب التجمع الأول/القاهرة الجديدة، مباشرة على طريق القاهرة–السويس ومحور طلعت حرب.",
    locationAndBoundariesEn: "Located in First Settlement/New Cairo, fronting Cairo–Suez Road & Talaat Harb Axis.",
    majorRoadsAr: [
      "طريق القاهرة–السويس",
      "محور السادات الداخلي",
      "محور محمد نجيب ومحور يوسف السباعي",
      "شبكة النقل الترددي الخاصة بالرحاب",
    ],
    majorRoadsEn: [
      "Cairo–Suez Road",
      "Sadat Inner Axis",
      "Mohamed Naguib & Youssef El-Sebaei Corridors",
      "Dedicated Rehab shuttle bus system",
    ],
    landUseStructureAr: [
      "10 مراحل سكنية تضم عمارات وفيلات مستقلة",
      "السوق التجاري القديم والسوق الشرقي (Eastern Market)",
      "سيتي سكوير (City Square) ومجمع المطاعم المفتوحة",
      "المركز الطبي الأول والمركز الطبي الثاني ونادي الرحاب الرياضي",
    ],
    landUseStructureEn: [
      "10 residential phases featuring apartments and stand-alone villas",
      "Commercial Market & Eastern Market (Al-Souq Al-Sharqy)",
      "City Square open-air dining and family entertainment hub",
      "Medical Centre 1 & 2, and Rehab Sports Club",
    ],
    submarkets: [
{
            "id": "rehab-phase-1",
            "nameAr": "الرحاب 1 (المراحل الأولى 1 إلى 5 والفيلات)",
            "nameEn": "Al Rehab 1 (Phases 1-5 & Villa Estates)",
            "typologyAr": "مجتمع سكني متكامل ناضج بالكامل ذو طابع كلاسيكي أنيق",
            "typologyEn": "Fully matured, stabilized master residential enclave with classic styling",
            "densityLevelAr": "متوسطة ومأهولة بنسبة 95%",
            "densityLevelEn": "Medium, 95% inhabited",
            "dominantLandUseAr": "سكني عائلي، فيلات، مساجد، نوادٍ، أسواق محلية متكاملة",
            "dominantLandUseEn": "Family residences, detached villas, sports club, mature souks",
            "priceRangeEgpSqmAr": "48,000 – 58,000 ج.م/م² (شقق) | 72,000 – 90,000 ج.م/م² (فيلات)",
            "priceRangeEgpSqmEn": "48k – 58k EGP/sqm (Flats) | 72k – 90k EGP/sqm (Villas)",
            "dataQualityTier": "Tier A",
            "notesAr": "أول مدينة سكنية متكاملة يطورها القطاع الخاص في مصر (1997). تمتاز بنضج استثنائي واكتمال كافة الخدمات والأشجار العالية.",
            "notesEn": "Egypt's historic first private master-planned township (1997) with complete mature amenities.",
            "avgFlatPriceEgpSqm": 51000,
            "avgVillaPriceEgpSqm": 78000,
            "avgCommercialPriceEgpSqm": 125000,
            "rentalYieldPct": 9,
            "occupancyPct": 95,
            "maturityScore": 99,
            "deliveryStatusAr": "مكتمل وناضج بنسبة 100%",
            "deliveryStatusEn": "100% Fully Built & Inhabited",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "صفر مخاطر إنشائية أو تشغيلية (Zero Execution Risk)",
                  "طلب إيجاري لا يتوقف وسرعة إعادة بيع قياسية",
                  "موقع متميز ملاصق للتجمع الأول وطريق السويس ومطار القاهرة"
            ],
            "prosEn": [
                  "Zero construction or infrastructure risk",
                  "Continuous non-stop rental demand and fast liquidity",
                  "Strategic location abutting 1st Settlement, Suez Rd and Airport"
            ],
            "challengesAr": [
                  "عمر بعض العمارات الأولى (أكثر من 20 عاماً) يتطلب تجديدات داخلية"
            ],
            "challengesEn": [
                  "Older building age (20+ years) requires interior renovation capital"
            ],
            "investorActionAr": "شراء شقق وفيلات بهدف إعادة التجديد والتشطيب الفاخر والتأجير للوافدين والدبلوماسيين.",
            "investorActionEn": "Acquire residential units for luxury remodeling and executive/expat leasing."
      },
      {
            "id": "rehab-phase-2",
            "nameAr": "الرحاب 2 (المراحل الأحدث 6 إلى 10)",
            "nameEn": "Al Rehab 2 (Phases 6-10 Modern Expansion)",
            "typologyAr": "عمارات سكنية حديثة بتصميمات ومساحات معاصرة",
            "typologyEn": "Contemporary apartment clusters with updated floor plans and elevators",
            "densityLevelAr": "متوسطة ومأهولة بنسبة 90%",
            "densityLevelEn": "Medium, 90% occupied",
            "dominantLandUseAr": "سكني عائلي، مساحات خضراء، بوابات خاصة، خدمات تجارية متطورة",
            "dominantLandUseEn": "Family residences, green parks, gated access, modern district retail",
            "priceRangeEgpSqmAr": "52,000 – 64,000 ج.م/م² (سكني) | 120,000 – 170,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "52k – 64k EGP/sqm (Res) | 120k – 170k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "التوسعة الأحدث لمدينة الرحاب وتتميز بوجود مصاعد حديثة وتصميمات داخلية أكثر مرونة وقرب مباشر من السوق الشرقي وسيتي سكوير.",
            "notesEn": "Newer phase of Al Rehab featuring elevators, modern layouts and proximity to Eastern Market.",
            "avgFlatPriceEgpSqm": 55000,
            "avgVillaPriceEgpSqm": 82000,
            "avgCommercialPriceEgpSqm": 140000,
            "rentalYieldPct": 9.2,
            "occupancyPct": 91,
            "maturityScore": 97,
            "deliveryStatusAr": "مكتمل ومأهول بالكامل",
            "deliveryStatusEn": "Fully Completed & Inhabited",
            "investmentAttractivenessScore": 93,
            "prosAr": [
                  "حداثة المباني وتوافر المصاعد وجراجات السيارات",
                  "قرب مباشر من بوابات طريق السويس ومحور طلعت حرب",
                  "أسعار إيجارية مرتفعة ومستقرة"
            ],
            "prosEn": [
                  "Modern construction with elevators and underground parking",
                  "Immediate access to Suez Road gates and Talaat Harb Axis",
                  "Consistently high rental yields"
            ],
            "challengesAr": [
                  "ارتفاع القيمة السوقية الابتدائية للوحدات"
            ],
            "challengesEn": [
                  "Elevated capital entry price per unit"
            ],
            "investorActionAr": "شراء شقق سكنية جاهزة للتأجير الفوري بعوائد سنوية تتجاوز 9%.",
            "investorActionEn": "Acquire turnkey residential apartments for immediate 9%+ cash yields."
      },
      {
            "id": "rehab-eastern-market",
            "nameAr": "السوق الشرقي وسيتي سكوير (Eastern Market & City Square)",
            "nameEn": "Eastern Market & City Square Commercial District",
            "typologyAr": "مركز الأعمال والتسوق والخدمات الطبية والتجارية الكبرى",
            "typologyEn": "Commercial business hub, lifestyle retail, clinics and dining district",
            "densityLevelAr": "مرتفعة جدًا على مدار الساعة",
            "densityLevelEn": "High 24/7 commercial footfall",
            "dominantLandUseAr": "بنوك، مطاعم وكافيهات، مراكز طبية وعيادات، صيدليات، مراكز صيانة وسلع",
            "dominantLandUseEn": "Major banks, international dining, medical centres, pharmacies, consumer retail",
            "priceRangeEgpSqmAr": "130,000 – 220,000 ج.م/م² (تجاري/إداري/طبي)",
            "priceRangeEgpSqmEn": "130k – 220k EGP/sqm (Commercial/Office/Medical)",
            "dataQualityTier": "Tier A",
            "notesAr": "أحد أنشط المراكز التجارية في شرق القاهرة ويخدم مئات الآلاف من سكان الرحاب والتجمع الأول ومدينتي والشروق يوميًا.",
            "notesEn": "One of East Cairo's busiest commercial centers serving Al Rehab, 1st Settlement, Madinaty and Shorouk daily.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 175000,
            "rentalYieldPct": 10.6,
            "occupancyPct": 96,
            "maturityScore": 99,
            "deliveryStatusAr": "مكتمل ويعمل بأعلى طاقة إشغال",
            "deliveryStatusEn": "Fully Active & Maximally Occupied",
            "investmentAttractivenessScore": 97,
            "prosAr": [
                  "أعلى معدل إشغال تجاري في القاهرة الكبرى (96%+)",
                  "تدفقات نقدية مستمرة واستقرار كامل في دفع الإيجارات",
                  "تنوع المستأجرين بين سلاسل دولية ومحلية وبنوك ومراكز طبية"
            ],
            "prosEn": [
                  "Highest commercial occupancy rate in Greater Cairo (96%+)",
                  "Guaranteed non-stop cash-flow and prompt rent collection",
                  "Diverse tenant mix spanning banks, global F&B and medical labs"
            ],
            "challengesAr": [
                  "ندرة شديدة في الوحدات المعروضة للبيع (طلب أعلى من العرض بمرات)"
            ],
            "challengesEn": [
                  "Extreme scarcity of secondary market units for sale"
            ],
            "investorActionAr": "اقتناص أي وحدة تجارية أو عيادة طبية معروضة للبيع فوراً دون تردد.",
            "investorActionEn": "Acquire any available retail shop or medical clinic immediately whenever brought to market."
      }
    ],
    investmentHypothesisAr: "سوق ناضج تمامًا يمثل نموذجًا لمعدلات الإشغال الحقيقية؛ الاستثمار يتركز في إعادة تطوير الأصول القائمة وخدمات القيمة المضافة الطبية والتجارية.",
    investmentHypothesisEn: "Fully mature benchmark for real occupancy; opportunities center on asset repositioning, high-touch clinics, and premium services.",
    promisingSectorsAr: [
      "المراكز والعيادات الطبية التخصصية الراقية",
      "التعليم التكميلي وحضانات الأطفال المتطورة",
      "المطاعم الراقية ومفاهيم الأطعمة والمشروبات المتميزة",
      "إعادة تأجير وتحسين العائد للمساحات التجارية القائمة",
    ],
    promisingSectorsEn: [
      "Premium specialized polyclinics & wellness suites",
      "Enrichment education & upscale preschools",
      "Curated dining & boutique food concepts",
      "Commercial asset repositioning & tenant mix optimization",
    ],
    keyRisksAr: [
      "ندرة الأراضي الفضاء والفرص الجديدة المتاحة للتطوير المباشر",
      "ارتفاع القيمة السوقية للوحدات القائمة وتكلفة الاستحواذ",
      "قدم بعض المراحل الأولى والحاجة لصيانة وتطوير الواجهات",
    ],
    keyRisksEn: [
      "Absolute scarcity of vacant plots for greenfield development",
      "Elevated acquisition basis for existing commercial assets",
      "Aging infrastructure in earliest phases requiring maintenance capex",
    ],
    preAcquisitionRequirementsAr: [
      "التحقق من عقد البيع الأصلي وموقف سداد مصاريف الصيانة مع إدارة الرحاب",
      "فحص رخصة النشاط التجاري أو الطبي وسند التخصيص",
      "حساب صافي العائد الإيجاري بعد خصم مصاريف الصيانة والتشغيل السنوية",
    ],
    preAcquisitionRequirementsEn: [
      "Verify original purchase deed and HOA service charge clearance with TMG",
      "Inspect municipal commercial/medical operating license",
      "Calculate net rental yield post maintenance service charges and capex",
    ],
    officialSourceUrl: "https://talaatmoustafa.com",
    officialSourceNameAr: "مجموعة طلعت مصطفى TMG (المطور الرئيسي لمدينة الرحاب)",
    officialSourceNameEn: "Talaat Moustafa Group (TMG Master Developer)",
  },
  {
    id: "new-capital",
    avgFlatPriceEgpSqm: 38000,
    avgVillaPriceEgpSqm: 68000,
    avgCommercialPriceEgpSqm: 165000,
    avgLandPriceEgpSqm: 46000,
    expectedRentalYieldPct: 9.8,
    currentEstimatedOccupancyPct: 32,
    overallMaturityScore: 62,
    investmentRank: 2,
    primaryAxisAr: "محور محمد بن زايد الشمالي والجنوبي والمونوريل والقطار السريع",
    primaryAxisEn: "Bin Zayed North & South, Monorail & High-Speed Rail",
    nameAr: "العاصمة الإدارية الجديدة",
    nameEn: "New Administrative Capital (NAC)",
    category: "special_authority",
    establishmentLawAr: "قرار رئيس الجمهورية رقم 57 لسنة 2016 وقرارات هيئة المجتمعات وتأسيس ACUD",
    establishmentLawEn: "Presidential Decree No. 57 of 2016 & ACUD Master Concession",
    planningAreaFeddans: 170000,
    planningAreaDisplayAr: "170,000 فدان (المساحة الإجمالية التخطيطية لكافة المراحل)",
    planningAreaDisplayEn: "170,000 Feddans (Aggregate Master Plan across all phases)",
    urbanMassFeddans: 40000,
    urbanMassDisplayAr: "المرحلة الأولى تمتد على قرابة 40,000 فدان",
    urbanMassDisplayEn: "Phase 1 encompasses approx. 40,000 Feddans",
    targetPopulation: "6.5 مليون نسمة مستهدف عند اكتمال نمو المدينة (المرحلة الأولى: 0.5 مليون نسمة مستهدف – ليس تعدادًا حاليًا)",
    targetPopulationEn: "6.5 Million target at full maturity (Phase 1: 0.5M target – NOT current residents)",
    actualPopulationStatusAr: "انتقال رسمي للحكومة والوزارات بنحو 40–50 ألف موظف؛ تشغيل الحي المالي تدريجيًا وبدء تسليم الأحياء السكنية (R1–R8)؛ الإشغال الفعلي قيد النمو.",
    actualPopulationStatusEn: "Active relocation of ministries & 40k-50k civil servants; progressive commissioning of Financial District & R1–R8 handovers.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع على بعد 45 كم شرق القاهرة بين طريق القاهرة–السويس شمالًا وطريق القاهرة–العين السخنة جنوبًا، شرق الدائري الإقليمي.",
    locationAndBoundariesEn: "Located 45 km east of Cairo between Cairo–Suez & Cairo–Ain Sokhna roads, east of Regional Ring Road.",
    majorRoadsAr: [
      "محور محمد بن زايد الشمالي والجنوبي",
      "الطريق الدائري الإقليمي والطريق الدائري الأوسطي",
      "طريق القاهرة–السويس وطريق العين السخنة",
      "محور الأمل ومحور الوزارات",
      "خط المونوريل شرق النيل وقطار السخنة–العلمين السريع وLRT",
    ],
    majorRoadsEn: [
      "North & South Mohamed Bin Zayed Corridors",
      "Regional Ring Road & Middle Ring Road",
      "Cairo–Suez & Cairo–Ain Sokhna Expressways",
      "Al-Amal & Ministries Corridors",
      "East Nile Monorail, High-Speed Rail & LRT Hubs",
    ],
    landUseStructureAr: [
      "الحي الحكومي ومجلس الوزراء ومجلس النواب ومجلس الشيوخ",
      "الحي المالي وحي البنوك ومقر البنك المركزي المصري",
      "منطقة الأعمال المركزية (CBD) والبرج الأيقوني (Iconic Tower)",
      "الأحياء السكنية من R1 إلى R8 ومشروعات المستثمرين",
      "منطقة MU23 والداون تاون (Downtown) والنهر الأخضر",
    ],
    landUseStructureEn: [
      "Government District, Cabinet, Parliament & Senate",
      "Financial District, Banking Sector & Central Bank of Egypt HQ",
      "Central Business District (CBD) featuring the Iconic Tower",
      "Residential Districts R1 through R8 & private compounds",
      "MU23 Mixed-use strip, Downtown & Green River Park",
    ],
    submarkets: [
{
            "id": "nac-r7",
            "nameAr": "الحي السكني السابع (R7 - مهد كمبوندات المطورين)",
            "nameEn": "R7 Residential District (Developers Gated Communities)",
            "typologyAr": "كومباوندات سكنية متكاملة تطورها كبرى الشركات العقارية الخاصة",
            "typologyEn": "Master gated residential communities developed by leading private developers",
            "densityLevelAr": "متوسطة ومخططة بعناية",
            "densityLevelEn": "Medium, master-planned with regulated FAR",
            "dominantLandUseAr": "سكني فاخر، مولات خدمية داخلية، مدارس دولية، جامعات، حدائق مركزية",
            "dominantLandUseEn": "Gated residential, community strip malls, international schools, university campuses",
            "priceRangeEgpSqmAr": "32,000 – 46,000 ج.م/م² (سكني) | 70,000 – 110,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "32k – 46k EGP/sqm (Res) | 70k – 110k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "أول حي سكني للمطورين في العاصمة الإدارية والأكثر اكتمالاً، يضم أكثر من 35 كومباوند خاصاً والجامعة البريطانية السويدية والجامعة الروسية ومدارس دولية.",
            "notesEn": "The pioneer developer residential district in NAC with >35 gated compounds and major universities.",
            "avgFlatPriceEgpSqm": 37500,
            "avgVillaPriceEgpSqm": 58000,
            "avgCommercialPriceEgpSqm": 88000,
            "rentalYieldPct": 9.4,
            "occupancyPct": 40,
            "maturityScore": 76,
            "deliveryStatusAr": "مراحل تسليم كبرى نشطة وسكن فعلي لآلاف الأسر",
            "deliveryStatusEn": "Active Delivery Waves & Expanding Real Inhabitation",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "أعلى نسبة إنجاز بين الأحياء السكنية الخاصة بالعاصمة",
                  "توافر الخدمات والمدارس والجامعات في مراحل التشغيل",
                  "قرب مباشر من الحي الدبلوماسي والنهر الأخضر"
            ],
            "prosEn": [
                  "Highest construction completion rate among NAC private residential districts",
                  "Operating schools, universities and community retail",
                  "Direct adjacency to Diplomatic Quarter and Green River"
            ],
            "challengesAr": [
                  "المنافسة الإيجارية الأولية بين ملاك الوحدات المسلمة حديثاً"
            ],
            "challengesEn": [
                  "Initial rental competition among owners of newly delivered units"
            ],
            "investorActionAr": "شراء شقق جاهزة للاستلام الفوري بأسعار إعادة البيع (Resale) لإعادة تأجيرها للسفارات والكوادر الدولية.",
            "investorActionEn": "Acquire ready-to-move resale apartments for leasing to embassies and international personnel."
      },
      {
            "id": "nac-r8",
            "nameAr": "الحي السكني الثامن (R8 - إطلالات النهر الأخضر والفيلات)",
            "nameEn": "R8 Residential District (Green River Views & Premium Compounds)",
            "typologyAr": "كومباوندات راقية وفيلات مطلة على الفنادق والحدائق المفتوحة",
            "typologyEn": "Upscale residential compounds and villas fronting open parks and hotels",
            "densityLevelAr": "منخفضة إلى متوسطة",
            "densityLevelEn": "Low to medium",
            "dominantLandUseAr": "سكني فاخر (شقق وفيلات)، نوادٍ رياضية خاصة، قطاع فنادق، مراكز تجارية",
            "dominantLandUseEn": "Luxury residences, private sports clubs, hotel zones, retail plazas",
            "priceRangeEgpSqmAr": "30,000 – 44,000 ج.م/م² (سكني) | 65,000 – 100,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "30k – 44k EGP/sqm (Res) | 65k – 100k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "يتميز بموقعه الجنوبي المباشر على النهر الأخضر وتخصيص مساحات أوسع للفيلات والنوادي المفتوحة والبحيرات.",
            "notesEn": "Fronts the Green River directly to the south with higher villa allocations and club amenities.",
            "avgFlatPriceEgpSqm": 35500,
            "avgVillaPriceEgpSqm": 62000,
            "avgCommercialPriceEgpSqm": 82000,
            "rentalYieldPct": 9,
            "occupancyPct": 28,
            "maturityScore": 68,
            "deliveryStatusAr": "قيد التسليم والتشطيبات النهائية (2025–2027)",
            "deliveryStatusEn": "Phased Handover & Finishing Cycle (2025–2027)",
            "investmentAttractivenessScore": 90,
            "prosAr": [
                  "إطلالات استثنائية على النهر الأخضر ومنطقة الفنادق",
                  "أسعار تنافسية وتسهيلات سداد ممتدة حتى 10 سنوات",
                  "بيئة سكنية أكثر هدوءاً ومساحات خضراء أوسع"
            ],
            "prosEn": [
                  "Exceptional vistas over the Green River and hotel row",
                  "Competitive pricing with extended 10-year installment plans",
                  "Lower density with larger open green parkland"
            ],
            "challengesAr": [
                  "نسب الإشغال السكني الفعلية تتأخر بنحو سنة عن حي R7"
            ],
            "challengesEn": [
                  "Real occupancy lags R7 by approximately 12 months"
            ],
            "investorActionAr": "شراء فيلات ووحدات بنتهاوس بإطلالات مباشرة على النهر الأخضر لتحقيق أعلى عائد رأسمالي.",
            "investorActionEn": "Acquire villas and penthouses with direct Green River views for maximum capital gain."
      },
      {
            "id": "nac-cbd",
            "nameAr": "منطقة الأعمال المركزية (CBD - ناطحات السحاب والبرج الأيقوني)",
            "nameEn": "Central Business District (CBD & Iconic Tower)",
            "typologyAr": "أبراج تجارية وإدارية وفندقية شاهقة بمواصفات عالمية",
            "typologyEn": "Global-standard corporate towers, luxury hospitality & iconic skyscrapers",
            "densityLevelAr": "مرتفعة جدًا للأبراج والمقرات المؤسسية",
            "densityLevelEn": "High vertical structural density and corporate presence",
            "dominantLandUseAr": "مقرات بنوك عالمية، شركات متعددة الجنسيات، فنادق 5 نجوم، شقق فندقية راقية",
            "dominantLandUseEn": "Multinational corporate HQs, international banks, 5-star hotels, luxury branded residences",
            "priceRangeEgpSqmAr": "130,000 – 240,000 ج.م/م² (إداري/فندقي فاخر)",
            "priceRangeEgpSqmEn": "130k – 240k EGP/sqm (Prime Office & Branded Hotel Units)",
            "dataQualityTier": "Tier A",
            "notesAr": "قلب العاصمة الإدارية النابض ورمز النهضة العمرانية المصرية. يضم 20 برجاً من بينها البرج الأيقوني (الأعلى في إفريقيا بارتفاع 394 متراً) بتنفيذ CSCEC الصينية.",
            "notesEn": "The beating economic heart of NAC featuring 20 towers anchored by Africa's tallest Iconic Tower (394m).",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 185000,
            "rentalYieldPct": 10.8,
            "occupancyPct": 35,
            "maturityScore": 75,
            "deliveryStatusAr": "أعمال الواجهات والتشطيبات الفندقية والتشغيل التجريبي",
            "deliveryStatusEn": "Facade Completion & Staged Operational Commissioning",
            "investmentAttractivenessScore": 98,
            "prosAr": [
                  "أعلى عنوان إداري وهيبة مؤسسية في مصر وإفريقيا",
                  "عقود إيجار دولية مقومة بالدولار للشركات العالمية والسفارات",
                  "محطة مركزية للمونوريل والقطار السريع والربط بمحور بن زايد"
            ],
            "prosEn": [
                  "Preeminent corporate address and institutional prestige in Africa",
                  "Dollar-denominated multi-year leases to multinationals",
                  "Intermodal transit terminal for Monorail and High-Speed Train"
            ],
            "challengesAr": [
                  "ارتفاع تذكرة الاستثمار وتكاليف التشغيل والصيانة الفندقية"
            ],
            "challengesEn": [
                  "High investment threshold and premium CAM hotel operating charges"
            ],
            "investorActionAr": "الاستحواذ على مكاتب إدارية وشقق فندقية في الأبراج الرئيسية لإعادة تأجيرها للشركات العالمية.",
            "investorActionEn": "Acquire prime corporate office suites and branded serviced apartments for multinational tenancy."
      },
      {
            "id": "nac-financial-district",
            "nameAr": "حي المال والأعمال والحي الحكومي والبورصة",
            "nameEn": "Financial District & Government Ministry Complex",
            "typologyAr": "المقرات السيادية للحكومة المصرية والبنوك والبورصة المصرية",
            "typologyEn": "Sovereign government ministry ministries, central banks & stock exchange",
            "densityLevelAr": "مرتفعة نهارًا ومأهولة بأكثر من 50 ألف موظف حكومي وبنكي",
            "densityLevelEn": "High daytime density with >50,000 active ministry civil servants & bankers",
            "dominantLandUseAr": "مقرات 34 وزارة، مجلس الوزراء، البرلمان، مقرات البنوك المصرية والأجنبية، البورصة",
            "dominantLandUseEn": "34 ministries, cabinet, parliament, central bank, commercial bank HQs, stock exchange",
            "priceRangeEgpSqmAr": "110,000 – 190,000 ج.م/م² (مكاتب إدارية وتجارية بالقطاع الخاص)",
            "priceRangeEgpSqmEn": "110k – 190k EGP/sqm (Private corporate office & banking space)",
            "dataQualityTier": "Tier A",
            "notesAr": "تعمل الحكومة بكامل وزاراتها وهيئاتها يوميًا من هذا الحي منذ عام 2023. يضم المقرات الرئيسية للبنك المركزي والأهلي ومصر والبنك التجاري الدولي (CIB).",
            "notesEn": "Fully operational seat of the Egyptian state since 2023, anchoring Central Bank and major commercial banks.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 155000,
            "rentalYieldPct": 10.4,
            "occupancyPct": 75,
            "maturityScore": 92,
            "deliveryStatusAr": "مكتمل ويعمل بالكامل كمركز لإدارة الدولة",
            "deliveryStatusEn": "Fully Delivered & Operational Sovereign Administrative Seat",
            "investmentAttractivenessScore": 97,
            "prosAr": [
                  "حضور دائم لجميع صانعي القرار والوزراء والبنوك في مكان واحد",
                  "إشغال حقيقي وكثافة يومية مستقرة",
                  "بنية تحتية رقمية ذكية وأعلى مستويات الأمان"
            ],
            "prosEn": [
                  "Permanent co-location of all state decision-makers, ministries and banks",
                  "Guaranteed operational occupancy and institutional presence",
                  "State-of-the-art smart digital grid and peak security"
            ],
            "challengesAr": [
                  "قيود أمنية وتنظيمية على بعض الأنشطة التجارية غير المتوافقة"
            ],
            "challengesEn": [
                  "Strict security regulations on commercial activities"
            ],
            "investorActionAr": "شراء مساحات مكاتب إدارية لشركات المحاماة والاستشارات المالية والشركات المتعاملة مع الوزارات.",
            "investorActionEn": "Acquire corporate office units catering to law firms, consultancies and government contracting entities."
      },
      {
            "id": "nac-downtown-mu23",
            "nameAr": "الداون تاون (Downtown) ومحور الأمل (MU23)",
            "nameEn": "Downtown Commercial Strip & Al-Amal Corridor (MU23)",
            "typologyAr": "شريط الأنشطة التجارية والاستثمارية والمولات متعددة الاستخدامات",
            "typologyEn": "Commercial retail strips, mixed-use towers and community service plazas",
            "densityLevelAr": "متوسطة إلى مرتفعة قيد التزايد السريع",
            "densityLevelEn": "Rapidly growing commercial density",
            "dominantLandUseAr": "مولات تجارية، مكاتب إدارية، عيادات طبية، فندقي، ترفيهي",
            "dominantLandUseEn": "Retail malls, office suites, specialized medical clinics, hotels, leisure",
            "priceRangeEgpSqmAr": "75,000 – 140,000 ج.م/م² (تجاري) | 55,000 – 90,000 ج.م/م² (إداري/طبي)",
            "priceRangeEgpSqmEn": "75k – 140k EGP/sqm (Retail) | 55k – 90k EGP/sqm (Office/Medical)",
            "dataQualityTier": "Tier B",
            "notesAr": "يقع محور MU23 بين الحيين السكنيين R2 وR3 ومدخل العاصمة من طريق السويس، والداون تاون يتوسط النهر الأخضر ومسجد مصر وسوق الذهب.",
            "notesEn": "MU23 corridor sits between R2 and R3; Downtown is adjacent to Green River, Misr Mosque and Gold Souk.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 110000,
            "rentalYieldPct": 9.6,
            "occupancyPct": 35,
            "maturityScore": 66,
            "deliveryStatusAr": "مراحل تشييد متقدمة وبدء تسليمات المولات الأولى",
            "deliveryStatusEn": "Advanced Construction & Initial Mall Handover Waves",
            "investmentAttractivenessScore": 91,
            "prosAr": [
                  "أسعار تنافسية للمكاتب والعيادات مقارنة بـ CBD",
                  "موقع استراتيجي يخدم مئات الآلاف من سكان الأحياء السكنية المجاورة",
                  "أنظمة سداد مرنة تصل إلى 8–10 سنوات"
            ],
            "prosEn": [
                  "Competitive entry pricing for offices/clinics relative to CBD",
                  "Strategic catchment area serving adjacent residential quarters",
                  "Flexible 8-10 year developer payment structures"
            ],
            "challengesAr": [
                  "ضرورة التدقيق في الملاءة المالية للمطور وسابقة أعماله لتجنب تأخير التسليم"
            ],
            "challengesEn": [
                  "Rigorous developer financial due diligence required to prevent delivery slippage"
            ],
            "investorActionAr": "شراء عيادات ومكاتب طبية في مبانٍ متخصصة في محور MU23 لخدمة سكان R2 وR3.",
            "investorActionEn": "Acquire specialized medical clinic suites along MU23 corridor serving R2 and R3 populations."
      }
    ],
    investmentHypothesisAr: "أكبر مشروع عمراني وإداري بالشرق الأوسط؛ الجدوى ترتبط بنسبة التشغيل الفعلي وحركة المؤسسات والشركات، وليس بوعود المخطط وحدها.",
    investmentHypothesisEn: "Middle East's flagship administrative mega-project; investment success hinges on verified corporate leasing and physical workplace occupancy.",
    promisingSectorsAr: [
      "المباني الإدارية المؤجرة مسبقًا لكيانات بنكية ومؤسسات متعددة الجنسيات",
      "الضيافة الفندقية والشقق المخدومة للأعمال والدبلوماسيين والوفود",
      "المجمعات الطبية المتخصصة ومراكز التشخيص المعتمدة دوليًا",
      "خدمات الدعم اللوجستي وتكنولوجيا المعلومات ومراكز البيانات",
    ],
    promisingSectorsEn: [
      "Pre-leased institutional offices to corporate and multinational occupiers",
      "Business hospitality, serviced apartments & extended-stay suites",
      "Accredited specialized healthcare complexes & day hospitals",
      "ICT, mission-critical infrastructure & data centre facilities",
    ],
    keyRisksAr: [
      "حجم المعروض الإداري والتجاري الضخم في الداون تاون ومناطق MU23",
      "فترة الانتظار حتى الوصول إلى الكثافة السكانية المستهدفة في الأحياء السكنية",
      "منافسة تسعيرية حادة وخطط سداد طويلة ترفع مخاطر التدفقات النقدية",
    ],
    keyRisksEn: [
      "Substantial commercial and retail supply pipeline in Downtown & MU23",
      "Absorption lead-time to achieve mature resident density across residential zones",
      "Aggressive payment plan competition impacting developer cash flow present values",
    ],
    preAcquisitionRequirementsAr: [
      "فحص الموقف القانوني والتسديدات لشركة العاصمة الإدارية ACUD",
      "التأكد من رخصة النشاط ومطابقتها لاشتراطات كود الحريق وتراخيص التشغيل",
      "دراسة الإيجار المسبق والتحقق من الجدوى المالية على أساس السعر النقدي لا التقسيط",
    ],
    preAcquisitionRequirementsEn: [
      "Audit installment settlement clearance with ACUD",
      "Verify civil protection, fire code compliance & operating permits",
      "Conduct financial feasibility on discounted cash basis rather than installment lists",
    ],
    officialSourceUrl: "https://newcapital.nuca.gov.eg/ar/ViewCity.aspx?ID=1",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز العاصمة الإدارية / شركة ACUD",
    officialSourceNameEn: "NUCA New Capital Authority / ACUD Official Portal",
  },
  {
    id: "capital-gardens",
    avgFlatPriceEgpSqm: 12500,
    avgVillaPriceEgpSqm: 22000,
    avgCommercialPriceEgpSqm: 29000,
    avgLandPriceEgpSqm: 8500,
    expectedRentalYieldPct: 7.4,
    currentEstimatedOccupancyPct: 30,
    overallMaturityScore: 48,
    investmentRank: 10,
    primaryAxisAr: "طريق السويس ومحطة LRT حدائق العاصمة ومحور العاصمة المباشر",
    primaryAxisEn: "Suez Road, Capital Gardens LRT Station & Direct NAC Link",
    nameAr: "حدائق العاصمة",
    nameEn: "Capital Gardens (Hadaiq Al Assema)",
    category: "extension",
    establishmentLawAr: "قرار رئيس الجمهورية رقم 645 لسنة 2020",
    establishmentLawEn: "Presidential Decree No. 645 of 2020",
    planningAreaFeddans: 29435,
    planningAreaDisplayAr: "قرابة 29,435 فدانًا (NUCA)",
    planningAreaDisplayEn: "Approx. 29,435 Feddans (NUCA)",
    urbanMassFeddans: null,
    urbanMassDisplayAr: "مدينة ذكية حديثة مخصصة للامتداد السكني والخدمي",
    urbanMassDisplayEn: "Modern smart city planned for residential and service overflow",
    targetPopulation: "مستهدفات تخطيطية استيعابية طويلة الأجل",
    targetPopulationEn: "Long-term master plan absorption targets",
    actualPopulationStatusAr: "مدينة حديثة قيد الإنشاء السريع والتسليم المتتابع لمشروعات الإسكان وسكن موظفي العاصمة؛ لا يتوفر تعداد سكاني فعلي منشور.",
    actualPopulationStatusEn: "Rapidly expanding young city with phased handovers of social & middle-income housing; census data unavailable publicly.",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع بمحاذاة مدينة بدر مباشرة، أمام العاصمة الإدارية الجديدة، على طريق القاهرة–السويس.",
    locationAndBoundariesEn: "Directly adjacent to Badr City, facing the New Capital, fronting Cairo–Suez Road.",
    majorRoadsAr: [
      "طريق القاهرة–السويس الصحراوي",
      "محور الربط مع العاصمة الإدارية وبدر",
      "الطريق الدائري الإقليمي القريب",
      "محطة القطار الكهربائي الخفيف (LRT) حدائق العاصمة",
    ],
    majorRoadsEn: [
      "Cairo–Suez Desert Road",
      "Capital Gardens–New Capital Link Corridors",
      "Regional Ring Road proximity",
      "LRT Light Rail Transit — Capital Gardens Station",
    ],
    landUseStructureAr: [
      "مشروعات الإسكان البديل وسكن كل المصريين",
      "أحياء سكنية متوسطة واستثمارية قيد الطرح",
      "مناطق خدمات تجارية وصحية وتعليمية مركزية مخططة",
      "مناطق أراضٍ مطروحة للمستثمرين من هيئة المجتمعات",
    ],
    landUseStructureEn: [
      "Housing for All Egyptians initiative & civil service staff housing",
      "Upcoming middle-income & private investment residential sectors",
      "Master-planned central community, healthcare & educational zones",
      "NUCA investment land plot auctions",
    ],
    submarkets: [
{
            "id": "cap-gardens-housing",
            "nameAr": "سكن كل المصريين والإسكان المتميز",
            "nameEn": "Public & Affordable Housing Quarters",
            "typologyAr": "مجمعات عمارات إسكان حديثة كاملة المرافق ومسبقة التجهيز",
            "typologyEn": "Modern public housing blocks, fully serviced with municipal amenities",
            "densityLevelAr": "متوسطة قيد التزايد السريع (أكثر من 35 ألف وحدة منتهية)",
            "densityLevelEn": "Rapidly growing residential footprint (>35,000 finished units)",
            "dominantLandUseAr": "سكني عائلي، مدارس، مساجد، مراكز رعاية صحية، أسواق تجارية",
            "dominantLandUseEn": "Family housing, schools, clinics, local community retail, parks",
            "priceRangeEgpSqmAr": "11,500 – 14,000 ج.م/م² (سكني) | 26,000 – 38,000 ج.م/م² (تجاري)",
            "priceRangeEgpSqmEn": "11.5k – 14k EGP/sqm (Res) | 26k – 38k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier A",
            "notesAr": "أكبر امتداد عمراني يخدم العاملين في العاصمة الإدارية ومحافظات شرق القاهرة. ترتبط مباشرة بمحطة القطار الكهربائي الخفيف LRT حدائق العاصمة.",
            "notesEn": "Largest urban expansion dedicated to NAC workforce, anchored by Capital Gardens LRT Terminal.",
            "avgFlatPriceEgpSqm": 12500,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 32000,
            "rentalYieldPct": 7.6,
            "occupancyPct": 45,
            "maturityScore": 56,
            "deliveryStatusAr": "تسليمات مرحلية متتالية وسكن فعلي لآلاف الأسر",
            "deliveryStatusEn": "Continuous phased handovers with active family residence",
            "investmentAttractivenessScore": 82,
            "prosAr": [
                  "سعر دخول منخفض جدًا للمتر المربع",
                  "ربط مباشر بقطار LRT يصل إلى العاصمة ومحطة عدلي منصور المركزية",
                  "إشغال حقيقي ومضمون للموظفين والشباب"
            ],
            "prosEn": [
                  "Very low entry acquisition cost per square meter",
                  "Direct LRT rail connection to New Capital and Adly Mansour Hub",
                  "Guaranteed steady family and employee occupancy"
            ],
            "challengesAr": [
                  "محدودية الأنشطة الترفيهية الفاخرة"
            ],
            "challengesEn": [
                  "Limited high-end entertainment or luxury dining amenities"
            ],
            "investorActionAr": "المنافسة على شراء المحلات التجارية والخدمية في المزادات العلنية لجهاز المدينة.",
            "investorActionEn": "Bid in public authority auctions for essential commercial retail shops and bakeries."
      },
      {
            "id": "cap-gardens-invest",
            "nameAr": "المحور الاستثماري والخدمي الإقليمي",
            "nameEn": "Regional Investment & Commercial Corridor",
            "typologyAr": "أراضٍ استثمارية مخصصة للقطاع الخاص والمشروعات متعددة الاستخدامات",
            "typologyEn": "Private investment parcels, mixed-use commercial and regional services",
            "densityLevelAr": "منخفضة حاليًا (قيد التخصيص والتشييد)",
            "densityLevelEn": "Low initial footprint (under land allocation and early site works)",
            "dominantLandUseAr": "مولات تجارية، مجمعات طبية، مدارس وجامعات خاصة، نوادٍ رياضية",
            "dominantLandUseEn": "Commercial malls, private healthcare, private universities, sports clubs",
            "priceRangeEgpSqmAr": "16,000 – 24,000 ج.م/م² (سكني متميز) | 35,000 – 55,000 ج.م/م² (تجاري/إداري)",
            "priceRangeEgpSqmEn": "16k – 24k EGP/sqm (Res) | 35k – 55k EGP/sqm (Commercial)",
            "dataQualityTier": "Tier B",
            "notesAr": "يمثل الشريط التنموي الاستثماري الموازي لطريق القاهرة-السويس ومدخل العاصمة الإدارية الشمالي، وطرحته الهيئة لتطوير مشروعات متكاملة.",
            "notesEn": "Fronts Cairo-Suez expressway, allocated by NUCA for private master-planned development.",
            "avgFlatPriceEgpSqm": 18000,
            "avgVillaPriceEgpSqm": 26000,
            "avgCommercialPriceEgpSqm": 42000,
            "rentalYieldPct": 7.8,
            "occupancyPct": 20,
            "maturityScore": 42,
            "deliveryStatusAr": "قيد التخطيط والتخصيص وبدء الأعمال الإنشائية",
            "deliveryStatusEn": "Site Preparation & Construction Mobilization",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "هوامش ربحية رأسمالية واعدة مع اكتمال تشغيل المدينة",
                  "موقع محوري كواجهة مباشرة على طريق السويس ومحطة القطار السريع",
                  "مرونة في المساحات المعروضة للاستثمار المؤسسي"
            ],
            "prosEn": [
                  "Strong capital gain potential as the city reaches stabilization",
                  "Direct strategic frontage on Suez Expressway and LRT interchange",
                  "Scalable plot footprints available for institutional co-development"
            ],
            "challengesAr": [
                  "أفق زمني متوسط يتطلب 2–4 سنوات للنضج الكامل"
            ],
            "challengesEn": [
                  "Medium-term gestation (2-4 years) to reach commercial maturity"
            ],
            "investorActionAr": "الاستحواذ على أراضٍ تجارية وتعليمية لتلبية الاحتياجات المتزايدة لآلاف الأسر المقيمة.",
            "investorActionEn": "Acquire commercial and private education plots to capture emerging domestic demand."
      }
    ],
    investmentHypothesisAr: "امتداد سكني اقتصادي واعد؛ تتطلب الاستثمارات التجارية والطبية التركيز على الخدمات اليومية والضرورية المرتبطة بكتل التسليم الفعلية.",
    investmentHypothesisEn: "Promising value residential extension; commercial & healthcare investments must strictly align with clusters of actual delivered housing.",
    promisingSectorsAr: [
      "المتاجر التموينية والتجزئة اليومية والخدمات الحيوية",
      "مراكز الرعاية الصحية الأولية والعيادات التخصصية",
      "المدارس الخاصة التجريبية واللغات ذات المصروفات المتوسطة",
      "الأنشطة الحرفية والخدمية المنظمة",
    ],
    promisingSectorsEn: [
      "Daily convenience retail, food markets & basic service strips",
      "Primary health clinics & community pharmacies",
      "Accessible mid-tier private language & experimental schools",
      "Organized light maintenance and service workshops",
    ],
    keyRisksAr: [
      "الفجوة الزمنية بين وتيرة البناء ومعدلات السكن والإقامة الدائمة للأسر",
      "حساسية القدرة الشرائية لأي زيادات سعرية غير مبررة",
      "تأخر تشغيل بعض الخدمات العامة في المراحل الأولى",
    ],
    keyRisksEn: [
      "Time lag between physical completion and permanent family move-ins",
      "High price sensitivity of local residential demographics",
      "Lag in operational readiness of tertiary public amenities",
    ],
    preAcquisitionRequirementsAr: [
      "التحقق من جداول تسليم الوحدات السكنية المجاورة ونسب الإشغال",
      "مراجعة توافر خطوط النقل العام والمواصلات الداخلية إلى محطة LRT",
      "فحص رخص البناء والاشتراطات الفنية للأرض بجهاز المدينة",
    ],
    preAcquisitionRequirementsEn: [
      "Confirm handover schedule and actual occupancy of adjacent blocks",
      "Audit public feeder transit connectivity to Capital Gardens LRT station",
      "Verify building permits and technical zoning stipulations at city authority",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=023",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز مدينة حدائق العاصمة",
    officialSourceNameEn: "NUCA – Capital Gardens City Authority",
  },
  {
    id: "tenth-of-ramadan",
    avgFlatPriceEgpSqm: 11500,
    avgVillaPriceEgpSqm: 20000,
    avgCommercialPriceEgpSqm: 26000,
    avgLandPriceEgpSqm: 8000,
    expectedRentalYieldPct: 7.6,
    currentEstimatedOccupancyPct: 86,
    overallMaturityScore: 90,
    investmentRank: 11,
    primaryAxisAr: "طريق مصر-الإسماعيلية الصحراوي وطريق بلبيس والدائري الإقليمي والميناء الجاف",
    primaryAxisEn: "Cairo-Ismailia Desert Rd, Belbeis Rd, Regional Ring Rd & Dry Port",
    nameAr: "العاشر من رمضان (منطقة المقارنة الإقليمية)",
    nameEn: "10th of Ramadan (Regional Benchmark)",
    category: "regional_benchmark",
    establishmentLawAr: "قرار رئيس الجمهورية رقم 249 لسنة 1977 (أقدم المدن الصناعية)",
    establishmentLawEn: "Presidential Decree No. 249 of 1977 (Egypt's pioneer industrial city)",
    planningAreaFeddans: 95000,
    planningAreaDisplayAr: "قرابة 95,000 فدان (إجمالي الزمام الصناعي والسكني)",
    planningAreaDisplayEn: "Approx. 95,000 Feddans (Industrial & Residential Boundary)",
    urbanMassFeddans: 60000,
    urbanMassDisplayAr: "تضم أكبر تجمع صناعي بمصر ونحو 3,000 مصنع منتج",
    urbanMassDisplayEn: "Largest industrial manufacturing cluster in Egypt (~3,000 factories)",
    targetPopulation: "1.0 - 1.2 مليون نسمة عند اكتمال المراحل",
    targetPopulationEn: "1.0-1.2 Million planning target",
    actualPopulationStatusAr: "كتلة عمالية وسكانية تتجاوز 700 ألف نسمة مقيمين ومترددين يوميًا (تستخدم للدراسة المقارنة الإقليمية).",
    actualPopulationStatusEn: "Active daily workforce and residents exceeding 700k (used as an economic manufacturing benchmark).",
    dataQualityTier: "A",
    locationAndBoundariesAr: "تقع عند الكيلو 55 طريق القاهرة–الإسماعيلية الصحراوي، وتبعد 45 كم عن القاهرة.",
    locationAndBoundariesEn: "Located at km 55 on Cairo–Ismailia Desert Road, 45 km from Cairo.",
    majorRoadsAr: [
      "طريق القاهرة–الإسماعيلية الصحراوي",
      "طريق بلبيس–العاشر",
      "الطريق الدائري الإقليمي",
      "محطة القطار الكهربائي الخفيف (LRT) العاشر من رمضان",
    ],
    majorRoadsEn: [
      "Cairo–Ismailia Desert Road",
      "Belbeis–10th of Ramadan Corridor",
      "Regional Ring Road",
      "10th of Ramadan LRT Terminal",
    ],
    landUseStructureAr: [
      "المناطق الصناعية من A1 إلى A6 ومناطق المطورين الصناعيين",
      "الأحياء السكنية من الحي الأول حتى الحي 33",
      "الميناء الجاف والمركز اللوجستي التصديري",
      "مراكز تجارية وخدمية وإسكان عمالي واجتماعي",
    ],
    landUseStructureEn: [
      "Industrial Zones A1 to A6 & private industrial park developers",
      "Residential neighborhoods from District 1 to 33",
      "Dry Port & Export Logistics Hub",
      "Commercial service centers, worker housing & social apartments",
    ],
    submarkets: [
{
            "id": "tenth-industrial-parks",
            "nameAr": "المناطق الصناعية الكبرى (A1 حتى A6)",
            "nameEn": "Industrial Mega-Parks (Zones A1 through A6)",
            "typologyAr": "قلاع صناعية ثقيلة ومتوسطة ومصانع تصديرية كبرى",
            "typologyEn": "Heavy, medium and export-oriented industrial manufacturing clusters",
            "densityLevelAr": "مرتفعة تشغيلياً وصناعياً (أكثر من 3000 مصنع قائم)",
            "densityLevelEn": "Intense operational density with over 3,000 functioning industrial facilities",
            "dominantLandUseAr": "غزل ونسيج، سيراميك، مواد بناء، كيماويات، أغذية، صناعات هندسية وإلكترونية",
            "dominantLandUseEn": "Textiles, ceramics, building materials, chemicals, food processing, electronics",
            "priceRangeEgpSqmAr": "7,000 – 12,000 ج.م/م² (أراضٍ صناعية وعنابر) | 16,000 – 25,000 ج.م/م² (إداري)",
            "priceRangeEgpSqmEn": "7k – 12k EGP/sqm (Industrial Land/Sheds) | 16k – 25k EGP/sqm (Office)",
            "dataQualityTier": "Tier A",
            "notesAr": "أقدم وأكبر مدينة صناعية في مصر والشرق الأوسط (أنشئت 1977). تساهم بنحو ثلث الصادرات الصناعية المصرية وتضم كبريات المجموعات الصناعية (النساجون الشرقيون، سيراميكا كليوباترا، إل جي).",
            "notesEn": "Egypt's foremost industrial citadel (founded 1977), contributing ~30% of national industrial exports.",
            "avgFlatPriceEgpSqm": 10000,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 24000,
            "rentalYieldPct": 10.6,
            "occupancyPct": 94,
            "maturityScore": 98,
            "deliveryStatusAr": "مكتمل ومشغول بالكامل ومستقر تشغيلياً",
            "deliveryStatusEn": "Fully Stabilized & Operating Industrial Complex",
            "investmentAttractivenessScore": 92,
            "prosAr": [
                  "أعلى كثافة صناعية واستقرار تشغيلي وتصديري في مصر",
                  "وفرة عمالة فنية ماهرة وبنية تحتية ضخمة للغاز الطبيعي والكهرباء ومحطات المياه",
                  "عوائد إيجارية ممتازة على العنابر والمخازن الصناعية الجاهزة"
            ],
            "prosEn": [
                  "Maximum industrial density, export capabilities and operating stability",
                  "Abundant technical labor, deep industrial gas/power infrastructure",
                  "Outstanding yields on ready-built modular factory sheds"
            ],
            "challengesAr": [
                  "اشتراطات ترخيص صناعي وبيئي تتطلب موافقات هيئة التنمية الصناعية"
            ],
            "challengesEn": [
                  "Strict industrial licensing and IDA regulatory compliance"
            ],
            "investorActionAr": "تطوير مجمعات صناعية للمشروعات الصغيرة والمتوسطة (Plug & Play) وتأجيرها فوراً للمصنعين.",
            "investorActionEn": "Develop plug-and-play modular industrial parks for immediate leasing to export SMEs."
      },
      {
            "id": "tenth-residential-districts",
            "nameAr": "الأحياء السكنية والخدمات (الأردنية، والمجاورات السكنية)",
            "nameEn": "Residential Quarters & Al-Ordoniya Commercial Core",
            "typologyAr": "كتلة سكنية عائلية ضخمة ومراكز تجارية إقليمية حيوية",
            "typologyEn": "Expansive family residential mass & Al-Ordoniya vibrant commercial downtown",
            "densityLevelAr": "مرتفعة ومأهولة بمئات الآلاف من السكان",
            "densityLevelEn": "High, densely populated with hundreds of thousands of residents",
            "dominantLandUseAr": "سكني عائلي، مولات ومحلات الأردنية، مدارس، مستشفيات، نوادٍ رياضية",
            "dominantLandUseEn": "Family residences, Al-Ordoniya retail center, schools, hospitals, sports clubs",
            "priceRangeEgpSqmAr": "11,000 – 15,000 ج.م/م² (سكني) | 30,000 – 48,000 ج.م/م² (تجاري الأردنية)",
            "priceRangeEgpSqmEn": "11k – 15k EGP/sqm (Res) | 30k – 48k EGP/sqm (Al-Ordoniya Retail)",
            "dataQualityTier": "Tier A",
            "notesAr": "تعد منطقة 'الأردنية' القلب التجاري والميدان الأكثر حيوية في العاشر من رمضان ومحافظة الشرقية، مع حركة تجارية مستمرة طوال 24 ساعة.",
            "notesEn": "Al-Ordoniya is the central commercial core and transit node of 10th of Ramadan with 24/7 footfall.",
            "avgFlatPriceEgpSqm": 12500,
            "avgVillaPriceEgpSqm": 22000,
            "avgCommercialPriceEgpSqm": 36000,
            "rentalYieldPct": 7.8,
            "occupancyPct": 90,
            "maturityScore": 94,
            "deliveryStatusAr": "مكتمل وناضج بالكامل",
            "deliveryStatusEn": "Fully Matured & Inhabited",
            "investmentAttractivenessScore": 84,
            "prosAr": [
                  "حركة تجارية واستهلاكية جبارة في منطقة الأردنية",
                  "طلب سكني وتأجيري دائم من مئات الآلاف من العاملين والمهندسين بالمدينة",
                  "أسعار معقولة وسيولة سريعة جدًا"
            ],
            "prosEn": [
                  "Immense daily retail and consumer transactions in Al-Ordoniya",
                  "Enduring residential tenant demand from technical and engineering workforce",
                  "Affordable purchase baseline and rapid liquidity"
            ],
            "challengesAr": [
                  "طابع المدينة صناعي وعمالي لا يناسب المشروعات السكنية الفاخرة"
            ],
            "challengesEn": [
                  "Primarily working-class demographic unsuitable for ultra-luxury residential schemes"
            ],
            "investorActionAr": "شراء محلات تجارية ومكاتب إدارية في منطقة الأردنية لضمان دخل إيجاري فوري ومستمر.",
            "investorActionEn": "Acquire retail and corporate commercial properties in Al-Ordoniya for reliable immediate yields."
      },
      {
            "id": "tenth-logistics-port",
            "nameAr": "الميناء الجاف والمنطقة اللوجستية الإقليمية",
            "nameEn": "Dry Port & Regional Inland Logistics Hub",
            "typologyAr": "موانئ جافة ومناطق لوجستية ومستودعات جمركية متطورة",
            "typologyEn": "Inland dry port terminal, bonded warehousing & multi-modal freight logistics",
            "densityLevelAr": "مرتفعة لوجستيًا وحركة شاحنات بضائع دولية ومحلية",
            "densityLevelEn": "High freight throughput and commercial transport operations",
            "dominantLandUseAr": "ميناء جاف، تخزين حاويات، مستودعات مبردة وجافة، مكاتب تخليص جمركي",
            "dominantLandUseEn": "Dry port, container terminal, cold storage, customs brokerage, logistics",
            "priceRangeEgpSqmAr": "8,000 – 13,000 ج.م/م² (أراضٍ ومستودعات لوجستية)",
            "priceRangeEgpSqmEn": "8k – 13k EGP/sqm (Logistics Land & Warehouses)",
            "dataQualityTier": "Tier A",
            "notesAr": "يضم الميناء الجاف بمدينة العاشر من رمضان على مساحة 250 فداناً، ويرتبط بشبكة سكك حديد بضائع تربط موانئ البحر الأحمر (العين السخنة) بالمتوسط (الإسكندرية ودمياط).",
            "notesEn": "Features the 250-feddan 10th of Ramadan Dry Port connecting Red Sea ports (Sokhna) with Mediterranean ports.",
            "avgFlatPriceEgpSqm": 0,
            "avgVillaPriceEgpSqm": 0,
            "avgCommercialPriceEgpSqm": 26000,
            "rentalYieldPct": 9.8,
            "occupancyPct": 78,
            "maturityScore": 82,
            "deliveryStatusAr": "قائم ومشغول ويعمل كمركز شحن جمركي رئيسي",
            "deliveryStatusEn": "Operational Inland Port & Multi-Modal Freight Terminal",
            "investmentAttractivenessScore": 93,
            "prosAr": [
                  "ربط سككي ولوجستي مباشر مع موانئ السخنة والإسكندرية",
                  "تسهيلات جمركية متكاملة ومستودعات تخزين مؤمنة",
                  "عائد استثماري متميز على تطوير المستودعات الحديثة"
            ],
            "prosEn": [
                  "Direct rail and highway corridors linking major maritime ports",
                  "Comprehensive on-site customs clearance and bonded yards",
                  "Superior yields on modern automated logistics facilities"
            ],
            "challengesAr": [
                  "متطلبات أمنية وجمارك صارمة في إدارة المنشآت"
            ],
            "challengesEn": [
                  "Strict customs and security compliance regulations"
            ],
            "investorActionAr": "الاستثمار في مستودعات التبريد والتخزين الدوائي والغذائي بالقرب من الميناء الجاف.",
            "investorActionEn": "Develop temperature-controlled cold chain logistics facilities adjacent to the Dry Port."
      }
    ],
    investmentHypothesisAr: "تُدرس كنطاق مقارنة إقليمي وصناعي؛ تكشف عن قوة الطلب اللوجستي والعمالي، وتكامل سلاسل التوريد مع العبور وبدر والشروق.",
    investmentHypothesisEn: "Serves as an institutional economic benchmark demonstrating industrial demand, export logistics, and supply chain synergy with East Cairo.",
    promisingSectorsAr: [
      "المستودعات والخدمات اللوجستية الحديثة",
      "سكن العاملين المنظم والفندقي",
      "المراكز الطبية التخصصية للطب المهني وجراحة الطوارئ",
      "محطات الخدمة وصيانة الشاحنات والمركبات الثقيلة",
    ],
    promisingSectorsEn: [
      "Modern bonded warehousing & cold-storage logistics",
      "Organized institutional workforce hostels",
      "Occupational health & emergency surgical clinics",
      "Fleet maintenance & heavy transportation service depots",
    ],
    keyRisksAr: [
      "التركيز العالي على الصناعات الثقيلة وحساسيتها لتكاليف الطاقة ومدخلات الإنتاج",
      "طول المسافة للمشروعات السكنية الفاخرة التي تستهدف عملاء التجمع",
      "المنافسة من المناطق الاقتصادية الجديدة (SCZone)",
    ],
    keyRisksEn: [
      "Heavy industry sensitivity to energy tariffs and imported feedstock",
      "Commute distance to luxury residential catchments in New Cairo",
      "Direct competition from special economic zones (SCZone)",
    ],
    preAcquisitionRequirementsAr: [
      "التحقق من التخصيص الصناعي من هيئة التنمية الصناعية (IDA) وجهاز المدينة",
      "مراجعة إمدادات الغاز الطبيعي والجهد الكهربائي المتاح للمصنع",
      "التأكد من التراخيص البيئية والموافقات الأمنية والدفاع المدني",
    ],
    preAcquisitionRequirementsEn: [
      "Confirm IDA industrial allotment and municipal building license",
      "Verify natural gas grid pressure and medium-voltage electricity capacity",
      "Secure environmental impact assessment and civil protection clearance",
    ],
    officialSourceUrl: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=3",
    officialSourceNameAr: "هيئة المجتمعات العمرانية – جهاز مدينة العاشر من رمضان",
    officialSourceNameEn: "NUCA – 10th of Ramadan City Authority",
  },
];

export const DATA_GAPS_REGISTER: DataGapRecord[] = [
  {
    id: "gap-001",
    cityId: "new-cairo",
    cityNameAr: "القاهرة الجديدة",
    cityNameEn: "New Cairo",
    districtAr: "بيت الوطن (المناطق من 1 إلى 8)",
    districtEn: "Beit Al-Watan (Zones 1-8)",
    missingMetricAr: "نسبة الإشغال السكني الفعلية وعدد الأسر المقيمة ليلًا",
    missingMetricEn: "Physical residential occupancy rate & active overnight households",
    reasonUnavailableAr: "عدم صدور تعداد محلي مستقل من CAPMAS أو جهاز المدينة للامتدادات الحديثة قيد التسليم.",
    reasonUnavailableEn: "Absence of localized district census from CAPMAS or municipal authority for newly delivered extensions.",
    investmentImpactAr: "حرج جدًا؛ يمنع بناء دراسات جدوى تجارية أو طبية واقعية دون التحقق من حجم الاستهلاك المحلي.",
    investmentImpactEn: "Highly critical; prevents reliable commercial/medical feasibility modeling without verified catchment headcount.",
    fieldVerificationMethodAr: "مسح ميداني مباشر لحصر عدادات الكهرباء المشغلة وإحصاء الإضاءة الليلية لعينات عشوائية من المباني.",
    fieldVerificationMethodEn: "Direct field audit counting energized utility meters and nocturnal balcony lighting across sample blocks.",
    verificationSourceAr: "شركة كهرباء شمال القاهرة + مسح فريق SBA الميداني",
    verificationSourceEn: "North Cairo Electricity Distribution Co. + SBA Field Audit Team",
    status: "pending_field_survey",
    priority: "high",
  },
  {
    id: "gap-002",
    cityId: "obour-new",
    cityNameAr: "العبور الجديدة",
    cityNameEn: "New Obour City",
    districtAr: "منطقة 2600 فدان والمجاورات (1-6)",
    districtEn: "2,600 Feddan Zone & Neighborhoods 1-6",
    missingMetricAr: "أسعار الصفقات النقدية المنفذة فعليًا للوحدات السكنية في السوق الثانوي",
    missingMetricEn: "Executed deed cash transaction prices for secondary residential resales",
    reasonUnavailableAr: "تسجيل معظم العمليات بعقود عرفية وتوكيلات قبل اكتمال التسجيل العقاري النهائي بجهاز المدينة.",
    reasonUnavailableEn: "Transactions executed via informal power-of-attorney before final title registration with city device.",
    investmentImpactAr: "مرتفع؛ الاعتماد على أسعار إعلانات وسائل التواصل يضخم تقييم القيمة الحالية للأرض بنسبة 20-30%.",
    investmentImpactEn: "High; relying on unvetted online classifieds inflates land baseline appraisal by 20-30%.",
    fieldVerificationMethodAr: "مقابلات منظمة مع 5 مكاتب وساطة عقارية محلية معتمدة ومراجعة دفاتر التصديق بالشهر العقاري.",
    fieldVerificationMethodEn: "Structured interviews with 5 certified local brokers and inspection of notary public validation logs.",
    verificationSourceAr: "مكاتب التوثيق العقاري + وسطاء محليون معتمدون",
    verificationSourceEn: "Notary Public Office + Vetted Local Brokerage Register",
    status: "pending_field_survey",
    priority: "high",
  },
  {
    id: "gap-003",
    cityId: "new-capital",
    cityNameAr: "العاصمة الإدارية",
    cityNameEn: "New Administrative Capital",
    districtAr: "منطقة الداون تاون ومحور MU23",
    districtEn: "Downtown & MU23 Commercial Corridor",
    missingMetricAr: "معدلات الإشغال الفعلي للمكاتب وعقود الإيجار الموثقة (Lease Absorption Rate)",
    missingMetricEn: "Verified office lease absorption rate & executed commercial tenancy agreements",
    reasonUnavailableAr: "المشروعات في مرحلة التسليم والتشطيب الأولي؛ غياب سجل علني موحد للإيجارات التجارية المبرمة.",
    reasonUnavailableEn: "Developments are in fit-out & preliminary handover stage; no unified public lease registry exists.",
    investmentImpactAr: "حرج للغاية؛ خطورة الوقوع في فخ المعروض المكتبي الفائض غير المؤجر.",
    investmentImpactEn: "Extremely critical; risk of entering oversupplied commercial office market with prolonged vacancy.",
    fieldVerificationMethodAr: "حصر المباني الحاصلة على رخص تشغيل دائمة، وفحص عقود الإيجار المسبق المسجلة لدى كبرى شركات إدارة المرافق.",
    fieldVerificationMethodEn: "Audit buildings holding permanent municipal operating permits; survey pre-leasing contracts at tier-1 FM firms.",
    verificationSourceAr: "شركة ACUD + شركات إدارة المرافق والمشغلون الدوليون",
    verificationSourceEn: "ACUD Commercial Licensing Dept + Operating Facility Management Firms",
    status: "in_progress",
    priority: "high",
  },
  {
    id: "gap-004",
    cityId: "badr",
    cityNameAr: "مدينة بدر",
    cityNameEn: "Badr City",
    districtAr: "أرض الجامعات والامتداد الشرقي",
    districtEn: "University Zone & Eastern Extension",
    missingMetricAr: "حجم المعروض الإجمالي للأسرة الطبية والعيادات التخصصية المرخصة لكل 10,000 نسمة",
    missingMetricEn: "Total licensed hospital beds & specialized polyclinics per 10k population",
    reasonUnavailableAr: "عدم نشر وزارة الصحة أو نقابة الأطباء خريطة رقمية مجمعة للعيادات والمراكز الطبية الخاصة بكل مدينة جديدة.",
    reasonUnavailableEn: "Ministry of Health does not publish an open unified digital registry for private healthcare per new city.",
    investmentImpactAr: "متوسط إلى مرتفع؛ يحدد الجدوى الحقيقية لإنشاء مركز طبي جراحي متكامل.",
    investmentImpactEn: "Medium to High; crucial for underwriting feasibility of specialized day-surgery polyclinics.",
    fieldVerificationMethodAr: "استخراج حصر تراخيص المنشآت الطبية من إدارة العلاج الحر بمديرية الشؤون الصحية ومطابقتها ميدانيًا.",
    fieldVerificationMethodEn: "Procure private healthcare licensing register from Directorate of Health (Free Treatment Dept) with physical audit.",
    verificationSourceAr: "مديرية الشؤون الصحية بالقاهرة (إدارة العلاج الحر) + جهاز مدينة بدر",
    verificationSourceEn: "Cairo Directorate of Health (Free Treatment Administration) + Badr Authority",
    status: "pending_field_survey",
    priority: "medium",
  },
  {
    id: "gap-005",
    cityId: "mostakbal-city",
    cityNameAr: "مستقبل سيتي",
    cityNameEn: "Mostakbal City",
    districtAr: "المرحلة الأولى ومحور الخدمات الرئيسي",
    districtEn: "Phase 1 & Central Service Spine",
    missingMetricAr: "نسب الشغور الفعلي للوحدات السكنية المسلمة وتكلفة الصيانة السنوية الحقيقية",
    missingMetricEn: "Physical vacancy rate in delivered compound units & actual annual service charge capex",
    reasonUnavailableAr: "تفاوت إدارة كل كمبوند ومطوره الفرعي وعدم نشر شركة ميدار تقرير إشغال موحد.",
    reasonUnavailableEn: "Decentralized sub-developer compound management; master developer MIDAR publishes no consolidated census.",
    investmentImpactAr: "مرتفع؛ يؤثر على تقييم العائد الإيجاري الصافي (Net Operating Income) بعد مصاريف الصيانة.",
    investmentImpactEn: "High; impacts Net Operating Income (NOI) after deducting master community service levies.",
    fieldVerificationMethodAr: "مسح بوابات المشروعات المسلمة، والتواصل مع إدارات اتحاد الشاغلين وشركات إدارة المرافق.",
    fieldVerificationMethodEn: "Physical gate surveys of delivered gated communities; direct inquiries with HOAs and FM operators.",
    verificationSourceAr: "شركة ميدار للتنمية العمرانية + إدارات المشروعات الفرعية",
    verificationSourceEn: "MIDAR Master Developer + Sub-developer Facility Teams",
    status: "in_progress",
    priority: "high",
  },
];

export const DEVELOPER_PROJECTS_PIPELINE: DeveloperProjectPipelineRecord[] = [
  {
    id: "pipe-001",
    developerNameAr: "مجموعة طلعت مصطفى (TMG)",
    developerNameEn: "Talaat Moustafa Group (TMG)",
    projectNameAr: "مدينتي – أوبن إير مول ومراحل جنوبية",
    projectNameEn: "Madinaty — Open Air Mall & Southern Phases",
    cityId: "madinaty",
    locationAr: "طريق القاهرة–السويس، الكيلو 33",
    locationEn: "Cairo–Suez Road, Km 33",
    assetClassAr: "مجتمع عمراني متكامل وتجزئة عالمية",
    assetClassEn: "Master Planned Community & Regional Retail",
    landAreaFeddans: 8000,
    totalUnitsOrGlaDisplayAr: "80,000+ وحدة سكنية / 400,000 م² مساحات تجزئة",
    totalUnitsOrGlaDisplayEn: "80,000+ units / 400,000 sqm Retail GLA",
    statusAr: "مأهول بنسبة تتجاوز 70% وتوسعات تجارية مستمرة",
    statusEn: "70%+ physically occupied with ongoing commercial expansions",
    deliveryYearTarget: "تشغيل مستمر",
    launchYear: "2006",
    indicativePriceEgpSqmAr: "سكني إعادة بيع: 55,000 - 85,000 ج/م² | تجاري: 250,000 - 450,000 ج/م²",
    indicativePriceEgpSqmEn: "Resi resale: 55k-85k EGP/sqm | Retail: 250k-450k",
    paymentPlanAr: "كاش في إعادة البيع / فترات تقسيط للطروحات الجديدة",
    paymentPlanEn: "Cash resale / long developer terms on new releases",
    sourceAttribution: "القوائم المالية والتقارير المنشورة للمطور بالبورصة المصرية",
    dataQualityTier: "B",
  },
  {
    id: "pipe-002",
    developerNameAr: "شركة سوديك (SODIC)",
    developerNameEn: "SODIC (Sixth of October Development & Investment)",
    projectNameAr: "سوديك إيست (SODIC East)",
    projectNameEn: "SODIC East",
    cityId: "new-heliopolis",
    locationAr: "هليوبوليس الجديدة، بين طريقي السويس والإسماعيلية",
    locationEn: "New Heliopolis, between Suez & Ismailia Roads",
    assetClassAr: "كمبوند سكني متكامل ونادٍ رياضي وتجاري",
    assetClassEn: "Gated residential, sports club & retail center",
    landAreaFeddans: 655,
    totalUnitsOrGlaDisplayAr: "4,500+ وحدة سكنية متنوعة ومرافق خدمية",
    totalUnitsOrGlaDisplayEn: "4,500+ mixed residential units & amenities",
    statusAr: "تسليمات متتابعة للمراحل الأولى وإنشاءات المراحل المتقدمة",
    statusEn: "Phased handovers under way; ongoing active construction",
    deliveryYearTarget: "2024 - 2027",
    launchYear: "2017",
    indicativePriceEgpSqmAr: "سكني: 48,000 - 75,000 ج/م² (قوائم معلنة)",
    indicativePriceEgpSqmEn: "Resi: 48k-75k EGP/sqm list prices",
    paymentPlanAr: "مقدم 5-10% وتقسيط حتى 7-8 سنوات",
    paymentPlanEn: "5-10% down payment, up to 7-8 years installment",
    sourceAttribution: "تقارير شركة مصر الجديدة للإسكان وسوديك بالبورصة",
    dataQualityTier: "B",
  },
  {
    id: "pipe-003",
    developerNameAr: "حسن علام العقارية (Hassan Allam Properties)",
    developerNameEn: "Hassan Allam Properties (HAP)",
    projectNameAr: "سوان ليك ريزيدنس وسوان ليك التجمع",
    projectNameEn: "SwanLake Residences & SwanLake New Cairo",
    cityId: "new-cairo",
    locationAr: "القاهرة الجديدة – التجمع الأول ومحور محمد نجيب",
    locationEn: "New Cairo — 1st Settlement & Mohamed Naguib Corridor",
    assetClassAr: "كمبوند سكني فاخر جدا ومكاتب إدارية",
    assetClassEn: "Ultra-luxury residential & Grade A boutique offices",
    landAreaFeddans: 460,
    totalUnitsOrGlaDisplayAr: "وحدات فاخرة ومجمع تجاري Every",
    totalUnitsOrGlaDisplayEn: "Luxury villas/apartments & Every commercial hub",
    statusAr: "تسليم وإشغال فعلي لمراحل واسعة وتشغيل مجمع Every",
    statusEn: "Extensively delivered and inhabited; commercial fully operating",
    deliveryYearTarget: "مسلم جزئيًا / تشغيل كامل",
    launchYear: "2018",
    indicativePriceEgpSqmAr: "سكني فاخر: 85,000 - 150,000 ج/م² | تجاري: 350,000+ ج/م²",
    indicativePriceEgpSqmEn: "Resi: 85k-150k EGP/sqm | Retail: 350k+ EGP/sqm",
    paymentPlanAr: "كاش أو تقسيط قصير في إعادة البيع",
    paymentPlanEn: "Cash or short resale installment",
    sourceAttribution: "بيانات المطور وتقارير وسطاء السوق المعتمدين",
    dataQualityTier: "B",
  },
  {
    id: "pipe-004",
    developerNameAr: "الأهلي صبور للتنمية العقارية (Al Ahly Sabbour)",
    developerNameEn: "Al Ahly Sabbour Developments",
    projectNameAr: "ذا سيتي أوف أوديسيا (The City of Odyssia)",
    projectNameEn: "The City of Odyssia",
    cityId: "mostakbal-city",
    locationAr: "مدينة المستقبل – المرحلة الأولى والثانية",
    locationEn: "Mostakbal City — Phases 1 & 2",
    assetClassAr: "مدينة سكنية متكاملة ومراكز ترفيهية وخدمية",
    assetClassEn: "Integrated residential city & lifestyle hub",
    landAreaFeddans: 580,
    totalUnitsOrGlaDisplayAr: "آلاف الوحدات السكنية ومساحات تجارية",
    totalUnitsOrGlaDisplayEn: "Thousands of residential units & retail spaces",
    statusAr: "إنشاءات متقدمة وتسليمات متعاقبة",
    statusEn: "Advanced construction with phased scheduled handovers",
    deliveryYearTarget: "2025 - 2028",
    launchYear: "2018",
    indicativePriceEgpSqmAr: "سكني: 42,000 - 68,000 ج/م²",
    indicativePriceEgpSqmEn: "Resi: 42k-68k EGP/sqm",
    paymentPlanAr: "مقدم 5% وتقسيط حتى 8-9 سنوات",
    paymentPlanEn: "5% down payment, 8-9 years installment",
    sourceAttribution: "إفصاحات المطور وشركة ميدار للمطورين",
    dataQualityTier: "B",
  },
  {
    id: "pipe-005",
    developerNameAr: "شركة CSCEC الصينية ووزارة الإسكان المصرية",
    developerNameEn: "CSCEC China & Ministry of Housing Egypt",
    projectNameAr: "منطقة الأعمال المركزية بالعاصمة (CBD Iconic Tower)",
    projectNameEn: "New Capital Central Business District (CBD)",
    cityId: "new-capital",
    locationAr: "العاصمة الإدارية الجديدة، النهر الأخضر ومحور بن زايد",
    locationEn: "New Capital, Green River & Bin Zayed Corridor",
    assetClassAr: "20 برجًا إداريًا وفندقيًا وتجاريًا وناطحة سحاب",
    assetClassEn: "20 High-rise towers (offices, 5-star hotels, retail)",
    landAreaFeddans: 195,
    totalUnitsOrGlaDisplayAr: "1,900,000 م² مسطحات بنائية إجمالية BUA",
    totalUnitsOrGlaDisplayEn: "1.9M sqm Gross Built-up Area (BUA)",
    statusAr: "اكتمال الأعمال الهيكلية والواجهات والتشطيبات الداخلية والتشغيل التجريبي",
    statusEn: "Superstructure & curtain walls complete; MEP testing & commissioning",
    deliveryYearTarget: "2024 - 2026",
    launchYear: "2018",
    indicativePriceEgpSqmAr: "مكاتب إدارية Grade A: 180,000 - 320,000 ج/م²",
    indicativePriceEgpSqmEn: "Grade A offices: 180k-320k EGP/sqm",
    paymentPlanAr: "عقود استثمار وتأجير مؤسسي وشراء مباشر",
    paymentPlanEn: "Institutional leases & direct capital sales",
    sourceAttribution: "وزارة الإسكان المصرية وهيئة المجتمعات العمرانية",
    dataQualityTier: "A",
  },
  {
    id: "pipe-006",
    developerNameAr: "شركة مصر إيطاليا العقارية (Misr Italia)",
    developerNameEn: "Misr Italia Properties",
    projectNameAr: "إلبوسكو العاصمة الإدارية (IL Bosco New Capital)",
    projectNameEn: "IL Bosco New Capital",
    cityId: "new-capital",
    locationAr: "العاصمة الإدارية – الحي السكني السابع R7 على النهر الأخضر",
    locationEn: "New Capital — District R7 fronting Green River",
    assetClassAr: "كمبوند سكني فاخر وفيلات وشقق ومركز تجاري The Vertical",
    assetClassEn: "Gated residential, villas, apartments & Vertical Forest",
    landAreaFeddans: 200,
    totalUnitsOrGlaDisplayAr: "3,500+ وحدة سكنية وتجارية",
    totalUnitsOrGlaDisplayEn: "3,500+ residential & commercial units",
    statusAr: "تسليم مراحل متعددة وبدء إشغال الأسر الأولى",
    statusEn: "Multiple phases delivered; early resident occupancy",
    deliveryYearTarget: "2023 - 2026",
    launchYear: "2017",
    indicativePriceEgpSqmAr: "سكني: 40,000 - 62,000 ج/م²",
    indicativePriceEgpSqmEn: "Resi: 40k-62k EGP/sqm",
    paymentPlanAr: "مقدم 10% وتقسيط حتى 7 سنوات",
    paymentPlanEn: "10% down payment, up to 7 years installment",
    sourceAttribution: "إفصاحات المطور الرسمية ومحاضر التسليمات",
    dataQualityTier: "B",
  },
];

export const REGIONAL_DEMAND_KPI = {
  cutOffDate: "2026-11-21",
  publisher: "SBA Group — Construction & Real Estate Development",
  headlineContractedSalesEgpB: 499.6,
  headlineContractedSalesSharePercent: 37.1,
  totalReportedEgyptSalesEgpB: 1348.1,
  totalReportedUnitsSold: 103643,
  averageTicketPriceEgpM: 13.0,
  sourceAttribution: "KW Egypt × Gateway Financial Services — Q3 2026 Report (1 Nov 2026 administrative data baseline)",
  caveatNoteAr:
    "مبيعات تعاقدية مقدرة في السوق الذي يغطيه التقرير خلال الفترة من يناير إلى سبتمبر 2026؛ ولا تعادل قيمة صفقات الأراضي أو إجمالي تداول السوق الثانوي أو تعدادًا شاملاً لكافة صفقات الجمهورية.",
  caveatNoteEn:
    "Report-estimated contracted sales for the market universe tracked between Jan–Sep 2026; does NOT equate to land transaction volumes, secondary market turnover, or exhaustive national census of transactions.",
};

export const REGIONAL_SALES_COMPARISON_CHART: StudyChartDataset = {
  id: "east-cairo-sales-q3-2026",
  type: "bar",
  titleAr: "المبيعات التعاقدية المقدرة حسب المناطق (يناير–سبتمبر 2026)",
  titleEn: "Estimated Contracted Sales by Region (Jan–Sep 2026)",
  unit: "مليار جنيه مصري (EGP bn)",
  source: "KW Egypt × Gateway Financial Services — Q3 2026",
  referenceYear: "2026 (Jan–Sep)",
  primarySeriesLabelAr: "المبيعات المقدرة (مليار جنيه)",
  primarySeriesLabelEn: "Estimated Sales (EGP bn)",
  items: [
    { labelAr: "شرق القاهرة", labelEn: "East Cairo", value: 499.6, noteAr: "الحصة السوقية الأولى: 37.1%", noteEn: "Rank 1 market share: 37.1%" },
    { labelAr: "الساحل الشمالي", labelEn: "North Coast", value: 439.4, noteAr: "حصة 32.6% (طلبات موسمية فاخرة)", noteEn: "32.6% share (seasonal prime luxury)" },
    { labelAr: "غرب القاهرة", labelEn: "West Cairo", value: 114.4, noteAr: "حصة 8.5% (أكتوبر وزايد والتوسعات)", noteEn: "8.5% share (October & Zayed)" },
    { labelAr: "العين السخنة", labelEn: "Ain Sokhna", value: 86.7, noteAr: "حصة 6.4% (ساحلي واستثماري)", noteEn: "6.4% share (coastal second home)" },
    { labelAr: "العاصمة الإدارية", labelEn: "New Capital", value: 40.9, noteAr: "حصة 3.0% (وفق تصنيف التقرير للمطورين المرصودين)", noteEn: "3.0% share (per report tracked developer universe)" },
    { labelAr: "مناطق أخرى / غير مخصصة", labelEn: "Other / Unallocated", value: 167.1, noteAr: "حصة 12.4% (بقية المحافظات والمشروعات)", noteEn: "12.4% share (rest of governorates & other)" },
  ],
};

export const CITY_AREAS_COMPARISON_CHART: StudyChartDataset = {
  id: "east-cairo-city-areas",
  type: "comparison",
  titleAr: "مقارنة المساحات التخطيطية للمدن المعتمدة (بالفدان)",
  titleEn: "Official Planning Area Comparison (Feddans)",
  unit: "فدان (Feddans)",
  source: "هيئة المجتمعات العمرانية الجديدة (NUCA) والقرارات الجمهورية ورئاسة الجمهورية وشركة مصر الجديدة",
  referenceYear: "2026 Official Decrees Baseline",
  primarySeriesLabelAr: "المساحة التخطيطية الإجمالية (فدان)",
  primarySeriesLabelEn: "Total Planning Area (Feddans)",
  items: [
    { labelAr: "العاصمة الإدارية", labelEn: "New Capital", value: 170000, noteAr: "إجمالي المراحل (المرحلة الأولى ~40 ألف فدان)", noteEn: "All phases (Phase 1 ~40k feddans)" },
    { labelAr: "العاشر من رمضان", labelEn: "10th of Ramadan", value: 95000, noteAr: "منطقة مقارنة إقليمية صناعية وسكنية", noteEn: "Regional industrial benchmark" },
    { labelAr: "القاهرة الجديدة", labelEn: "New Cairo", value: 89000, noteAr: "تشمل التجمعات الخمسة والامتدادات الرسمية", noteEn: "Includes all 5 settlements and official extensions" },
    { labelAr: "العبور الجديدة", labelEn: "New Obour", value: 58914.4, noteAr: "القرار الجمهوري (الكتلة العمرانية قرابة 22 ألف فدان)", noteEn: "Presidential decree (urban mass ~22k feddans)" },
    { labelAr: "الشروق", labelEn: "El Shorouk", value: 52991.83, noteAr: "حدود الكردون 2017 (المساحة الأصلية 10,808 فدان)", noteEn: "2017 cordone boundary (original 10,808 feddans)" },
    { labelAr: "حدائق العاصمة", labelEn: "Capital Gardens", value: 29435, noteAr: "قرار الإنشاء 2020", noteEn: "Decree of establishment 2020" },
    { labelAr: "العبور القديمة", labelEn: "Old Obour", value: 16000, noteAr: "إجمالي الزمام (الكتلة العمرانية المرفقة ~12.5 ألف فدان)", noteEn: "Total boundary (built urban mass ~12.5k feddans)" },
    { labelAr: "مدينة المستقبل", labelEn: "Mostakbal City", value: 11000, noteAr: "امتياز المطور العام شركة ميدار", noteEn: "MIDAR master development concession" },
    { labelAr: "مدينتي", labelEn: "Madinaty", value: 8000, noteAr: "مجتمع خاص متكامل لمجموعة طلعت مصطفى", noteEn: "TMG private master community" },
    { labelAr: "هليوبوليس الجديدة", labelEn: "New Heliopolis", value: 5400, noteAr: "المساحة المعلنة لشركة مصر الجديدة للإسكان والتعمير", noteEn: "Reported by Misr Al Gadida Housing & Development" },
    { labelAr: "الرحاب", labelEn: "Al Rehab", value: 2500, noteAr: "مجتمع خاص متكامل لمجموعة طلعت مصطفى", noteEn: "TMG private master community" },
  ],
};

export const CAIRO_STOCK_INDICATORS_CHART: StudyChartDataset = {
  id: "cairo-stock-indicators-q3-2026",
  type: "bar",
  titleAr: "مؤشرات المخزون العقاري بالقاهرة – الربع الثالث 2026 (تنبيه: وحدات القياس مختلفة)",
  titleEn: "Cairo Real Estate Stock Indicators Q3 2026 (Warning: Different Metric Units)",
  unit: "وحدة سكنية / متر مربع مساحات إدارية وتجزئة",
  source: "JLL Cairo Market Dynamics — Q3 2026",
  referenceYear: "Q3 2026",
  primarySeriesLabelAr: "حجم المخزون القائم",
  primarySeriesLabelEn: "Current Stock Volume",
  items: [
    { labelAr: "المخزون السكني (بالوحدة)", labelEn: "Residential Stock (Units)", value: 362600, noteAr: "362,600 وحدة (+5,600 في Q3، ومتوقع 19,600 في Q4)", noteEn: "362,600 units (+5.6k in Q3, 19.6k expected Q4)" },
    { labelAr: "المخزون الإداري (بالمتر المربع GLA)", labelEn: "Office Stock (Sqm GLA)", value: 3100000, noteAr: "3.1 مليون م² (+116,800 في Q3، ومتوقع 110,300 في Q4 معظمه شرق القاهرة)", noteEn: "3.1M sqm (+116.8k Q3, 110.3k expected Q4 mostly East Cairo)" },
    { labelAr: "مخزون التجزئة (بالمتر المربع GLA)", labelEn: "Retail Stock (Sqm GLA)", value: 3600000, noteAr: "3.6 مليون م² (+25,500 في Q3، ومتوقع 191,200 في Q4)", noteEn: "3.6M sqm (+25.5k Q3, 191.2k expected Q4)" },
  ],
};


export const EAST_CAIRO_4_CITIES_PRICE_CHART: StudyChartDataset = {
  id: "east-cairo-4-cities-res-prices-nov2026",
  type: "bar",
  titleAr: "متوسط سعر المتر السكني (ج.م/م²) — التجمع الخامس هو الأعلى (نوفمبر 2026)",
  titleEn: "Residential Apartment Price Benchmark Across 4 Core East Cairo Cities (Nov 2026)",
  unit: "جنيه مصري / م² (EGP/sqm)",
  source: "تجميع المؤلف من أرقام Aqarmap وMasrawy (نوفمبر–ديسمبر 2025–2026) — تنبيه: مؤشرات مختلفة التواريخ والمنهجيات",
  referenceYear: "Nov 2026",
  primarySeriesLabelAr: "متوسط سعر المتر السكني (شقق)",
  primarySeriesLabelEn: "Average Flat Price (EGP/sqm)",
  items: [
    {
      labelAr: "التجمع الخامس (متوسط كمبوندات)",
      labelEn: "5th Settlement (Compound Avg)",
      value: 72000,
      noteAr: "الأعلى سعرًا بفارق كبير؛ يتراوح من 21,400 بالتجمع الثالث إلى 92,100 بالمربع الذهبي؛ (Knight Frank يسجل 102,245 للمشروعات الفاخرة الجديدة)",
      noteEn: "Highest pricing; from 21.4k in 3rd Sett. to 92.1k in Golden Sq. (Knight Frank logs 102.2k for prime launches)",
    },
    {
      labelAr: "هليوبوليس الجديدة",
      labelEn: "New Heliopolis",
      value: 33310,
      noteAr: "متوسط الشقق بالمدينة؛ يصل إلى 49,480 داخل الكمبوندات و73,792 للفيلات و27,642 للأراضي",
      noteEn: "City average flat; reaches 49.5k in compounds, 73.8k for villas, and 27.6k for land plots",
    },
    {
      labelAr: "العبور القديمة",
      labelEn: "Old Obour City",
      value: 21753,
      noteAr: "نمو سنوي +9.6% للشقق، بينما تسجل الفيلات 50,037 ج.م/م² والتجاري 82,154 ج.م/م² والإداري 51,411 ج.م/م² والطبي 81,855 ج.م/م²",
      noteEn: "+9.6% YoY flat growth; villas at 50k, retail at 82.2k, office at 51.4k, and medical at 81.9k",
    },
    {
      labelAr: "مدينة بدر",
      labelEn: "Badr City",
      value: 11856,
      noteAr: "الأقل سعرًا بوضوح؛ نمو سنوي +12.1%؛ تراجع في أسعار الفيلات إلى 24,803 وسيولة محدودة (27 إعلان فيلا مقابل 953 للشقق)",
      noteEn: "Lowest entry pricing; +12.1% flat growth; villa price softened to 24.8k with low liquidity (27 villa listings vs 953 flats)",
    },
  ],
};

export interface DataDiscrepancyItem {
  id: string;
  entityNameAr: string;
  entityNameEn: string;
  metricAr: string;
  metricEn: string;
  sourceAAr: string;
  sourceAEn: string;
  valueAAr: string;
  valueAEn: string;
  confidenceA: ConfidenceGrade;
  sourceBAr: string;
  sourceBEn: string;
  valueBAr: string;
  valueBEn: string;
  confidenceB: ConfidenceGrade;
  discrepancyRatioAr: string;
  discrepancyRatioEn: string;
  rootCauseAnalysisAr: string;
  rootCauseAnalysisEn: string;
  investmentActionAr: string;
  investmentActionEn: string;
}

export const DATA_DISCREPANCIES_REGISTER: DataDiscrepancyItem[] = [
  {
    id: "DISC-01",
    entityNameAr: "مدينة العبور القديمة",
    entityNameEn: "Old Obour City",
    metricAr: "تعداد السكان الحالي",
    metricEn: "Current Resident Population",
    sourceAAr: "تعداد 2023 عبر Wikipedia / citypopulation.de نقلاً عن مصادر الجهاز",
    sourceAEn: "2023 Census via Wikipedia / citypopulation.de citing agency feeds",
    valueAAr: "142,955 نسمة",
    valueAEn: "142,955 residents",
    confidenceA: "probable",
    sourceBAr: "قاعدة بيانات Chislennost (2026)",
    sourceBEn: "Chislennost demographic database (2026)",
    valueBAr: "47,787 نسمة",
    valueBEn: "47,787 residents",
    confidenceB: "probable",
    discrepancyRatioAr: "تفاوت بنسبة 3 أضعاف (300%) بين المصدرين",
    discrepancyRatioEn: "3x (300%) variance between datasets",
    rootCauseAnalysisAr: "خلط بين المقيمين المسجلين رسميًا ببطاقات الرقم القومي وبين إجمالي المقيمين الفعليين والعمالة المؤقتة والمترددين اليوميين على المصانع وسوق الجملة.",
    rootCauseAnalysisEn: "Confusion between formally registered census inhabitants and total physical residents including industrial workers and transient traders.",
    investmentActionAr: "الرجوع لجدول تعداد CAPMAS 2023 الخام وإجراء مسح استهلاكي ميداني قبل اعتماد القوة الشرائية لأي مشروع تجاري.",
    investmentActionEn: "Consult raw CAPMAS 2023 census tables and perform localized footfall counts before underwriting retail projects.",
  },
  {
    id: "DISC-02",
    entityNameAr: "القاهرة الجديدة والتجمع الخامس",
    entityNameEn: "New Cairo & 5th Settlement",
    metricAr: "إجمالي السكان المقيمين",
    metricEn: "Total Inhabitant Population",
    sourceAAr: "تعداد CAPMAS الرسمي 2017 وتحديث تقديري 2023",
    sourceAEn: "Official CAPMAS Census 2017 & 2023 Official Estimate",
    valueAAr: "319,488 نسمة (2023) — التجمع الخامس 145,286 نسمة",
    valueAEn: "319,488 residents (2023) — 5th Settlement 145,286",
    confidenceA: "confirmed",
    sourceBAr: "هيئة المجتمعات العمرانية الجديدة (NUCA) — إعلانات رسمية",
    sourceBEn: "NUCA Public Planning Announcements",
    valueBAr: "حوالي 1.5 مليون ساكن (مع استهداف 4–5 ملايين عند اكتمال البناء)",
    valueBEn: "Approx. 1.5M residents (with 4-5M long-term target)",
    confidenceB: "confirmed",
    discrepancyRatioAr: "تفاوت بمقدار 4.7 أضعاف بين تعداد السكان المسجلين والرقم التخطيطي للهيئة",
    discrepancyRatioEn: "4.7x variance between registered census headcount and NUCA user estimate",
    rootCauseAnalysisAr: "أرقام الهيئة تشمل السكان المتواجدين نهارًا، طلاب 7 جامعات خاصة، موظفي الشركات بشارع التسعين، ومالكي الوحدات المغلقة/الموسمية، بينما يرصد الجهاز المقيمين إقامة دائمة ومسجلة.",
    rootCauseAnalysisEn: "NUCA figures aggregate daytime corporate workforce, university students, and secondary home owners; CAPMAS strictly tracks permanent legal households.",
    investmentActionAr: "فصل التقدير السكني الليلي (لخدمات الأحياء والمدارس) عن التواجد النهاري التجاري والإداري؛ وتجنب بناء مشروعات سكنية بناءً على رقم الـ 1.5 مليون كقوة استيعابية جاهزة.",
    investmentActionEn: "Segregate nighttime resident demand from daytime corporate footfall; never size residential supply on the 1.5M figure.",
  },
  {
    id: "DISC-03",
    entityNameAr: "القاهرة الجديدة والتجمع الخامس",
    entityNameEn: "New Cairo & 5th Settlement",
    metricAr: "متوسط سعر متر الشقق السكنية",
    metricEn: "Average Residential Apartment Price (EGP/sqm)",
    sourceAAr: "تقرير Knight Frank لأسواق السكن بالقاهرة (مايو 2025)",
    sourceAEn: "Knight Frank Cairo Residential Market Review (May 2025)",
    valueAAr: "102,245 جنيه/م²",
    valueAEn: "102,245 EGP/sqm",
    confidenceA: "confirmed",
    sourceBAr: "رصد Aqarmap وMasrawy المجمع (ديسمبر 2025 / نوفمبر 2026)",
    sourceBEn: "Aqarmap & Masrawy Composite Market Index (Dec 2025 / Nov 2026)",
    valueBAr: "72,000 جنيه/م² (متوسط كمبوندات) — المربع الذهبي 92,100 — شارع 90: 38,700",
    valueBEn: "72,000 EGP/sqm (Compound Avg) — Golden Square 92,100 — 90th St: 38,700",
    confidenceB: "probable",
    discrepancyRatioAr: "فارق 42% بين المؤشرين",
    discrepancyRatioEn: "42% variance between indices",
    rootCauseAnalysisAr: "يرصد تقرير Knight Frank المشروعات الجديدة الفاخرة والطروحات الأولية لكبار المطورين المؤسسيين (Tier 1)، بينما يعكس مؤشر Aqarmap/Masrawy قاعدة أوسع تشمل السوق الثانوي وإعادة البيع والأحياء المتوسطة (كالتجمع الثالث 21,400 ج.م/م²).",
    rootCauseAnalysisEn: "Knight Frank surveys tier-1 developer primary launches in prime compounds; Aqarmap incorporates secondary resale stock and diverse submarkets.",
    investmentActionAr: "عدم دمج الرقمين أو احتساب متوسط حسابي بينهما؛ استخدام رقم Knight Frank للمشروعات الفاخرة الجديدة ورقم Aqarmap لمشروعات إعادة البيع والشراء النقدي.",
    investmentActionEn: "Never average these datasets; benchmark primary luxury against Knight Frank and secondary resale against Aqarmap/Masrawy.",
  },
  {
    id: "DISC-04",
    entityNameAr: "مشروع تلالا — هليوبوليس الجديدة",
    entityNameEn: "Talala Project — New Heliopolis",
    metricAr: "القيمة الإجمالية للمشروع والمبيعات المتوقعة",
    metricEn: "Total Project Value & Projected Sales",
    sourceAAr: "تقارير وبيانات صحفية لمجموعة من المواقع الاقتصادية",
    sourceAEn: "Initial press coverage and real estate filings",
    valueAAr: "90 مليار جنيه مصري",
    valueAEn: "EGP 90 Billion",
    confidenceA: "probable",
    sourceBAr: "إفصاحات وتقارير اقتصادية مفصلة لاحقة لمطور المشروع (مدينة مصر)",
    sourceBEn: "Subsequent detailed developer disclosures (Madinet Masr)",
    valueBAr: "194.67 مليار جنيه مصري",
    valueBEn: "EGP 194.67 Billion",
    confidenceB: "probable",
    discrepancyRatioAr: "تفاوت بأكثر من الضعف (116%) في تقدير إجمالي المبيعات",
    discrepancyRatioEn: "Over 2x (116%) valuation spread",
    rootCauseAnalysisAr: "اختلاف بين تقدير مبيعات المرحلة الأولى أو التكلفة الاستثمارية المباشرة وبين إجمالي القيمة البيعية الاسمية لكافة مراحل المشروع البالغة مساحته 491 فدان على مدار دورة تطويرية تمتد لعدة سنوات.",
    rootCauseAnalysisEn: "Variance between Phase 1 target sales / capital expenditure and lifetime aggregate gross nominal development value across the full 491 feddans.",
    investmentActionAr: "الاعتماد دائمًا على الإفصاحات الرسمية المدققة بالبورصة المصرية (EGX) للشركات المقيدة والتحقق من القيمة الحالية الصافية بدلاً من الأرقام التسويقية الإجمالية.",
    investmentActionEn: "Verify audited EGX regulatory filings rather than media headlines; discount multi-year projections to Present Value.",
  },
  {
    id: "DISC-05",
    entityNameAr: "المنطقة الصناعية بمدينة العبور القديمة",
    entityNameEn: "Obour Industrial Zone (Old Obour)",
    metricAr: "عدد المصانع العاملة الفعلية",
    metricEn: "Operational Operating Factories Count",
    sourceAAr: "بيانات تاريخية وحصر أجهزة التنمية",
    sourceAEn: "Historical municipal directory counts",
    valueAAr: "432 مصنعًا عاملًا",
    valueAEn: "432 operating factories",
    confidenceA: "probable",
    sourceBAr: "تقارير جمعية المستثمرين والمنصات الاقتصادية الحديثة",
    sourceBEn: "Investors Association and recent industrial reports",
    valueBAr: "أكثر من 1,100 مصنع",
    valueBEn: "Over 1,100 operating factories",
    confidenceB: "probable",
    discrepancyRatioAr: "تفاوت بنسبة 2.5 ضعفًا",
    discrepancyRatioEn: "2.5x variance",
    rootCauseAnalysisAr: "الحصر الأدنى يقتصر على المنشآت الكبرى المرخصة مباشرة بهيئة التنمية الصناعية (IDA)، بينما الحصر الأوسع يضم الورش والمنشآت الحرفية والتأجير من الباطن ضمن المناطق الصناعية (أ، ب، ج).",
    rootCauseAnalysisEn: "Lower figure counts major licensed industrial plants; higher figure aggregates SME workshops, craft clusters, and subleased manufacturing units.",
    investmentActionAr: "حصر مباشر للقطاع الصناعي المستهدف (دوائي، غذائي، هندسي) عبر خريطة التنمية الصناعية بدلاً من التعميم الإجمالي.",
    investmentActionEn: "Query IDA's official sectoral registry directly for target verticals (pharma, food, engineering).",
  },
  {
    id: "DISC-06",
    entityNameAr: "تصحيح محطة مترو هليوبوليس",
    entityNameEn: "Correction: Heliopolis Metro Station Location",
    metricAr: "الربط بالخط الثالث لمترو الأنفاق",
    metricEn: "Metro Line 3 Transit Connectivity",
    sourceAAr: "الاعتقاد الشائع والخلط بين مصر الجديدة وهليوبوليس الجديدة",
    sourceAEn: "Common public misconception between Historic Heliopolis and New Heliopolis",
    valueAAr: "الترويج بأن هليوبوليس الجديدة متصلة مباشرة بمحطة مترو هليوبوليس",
    valueAEn: "Promotional claims that New Heliopolis connects directly to Metro Line 3",
    confidenceA: "estimated",
    sourceBAr: "خريطة الهيئة القومية للأنفاق (NAT) والمسار الجغرافي الفعلي",
    sourceBEn: "National Authority for Tunnels (NAT) official transit maps",
    valueBAr: "محطة مترو 'هليوبوليس' تقع في حي مصر القديمة/التاريخية بالقاهرة، ولا تصل لهليوبوليس الجديدة على طريق الإسماعيلية",
    valueBEn: "Heliopolis Metro Station is in historic Heliopolis (Masr El-Gedida), entirely separate from New Heliopolis satellite",
    confidenceB: "confirmed",
    discrepancyRatioAr: "تصحيح جغرافي إلزامي (مسافة تفصل بينهما تزيد عن 25–30 كم)",
    discrepancyRatioEn: "Mandatory geographic correction (25–30 km separation)",
    rootCauseAnalysisAr: "تشابه الأسماء أدى لاستغلال بعض الإعلانات التسويقية غير الدقيقة لمحطة المترو للترويج لعقارات هليوبوليس الجديدة التي تقع بين الشروق وبدر وتعتمد على طريق الإسماعيلية والقطار الكهربائي LRT.",
    rootCauseAnalysisEn: "Homonymous naming led to unverified marketing claims; New Heliopolis is on the Ismailia corridor reliant on Cairo LRT and road transport.",
    investmentActionAr: "استبعاد أي دراسة جدوى تسوق لأصل بهليوبوليس الجديدة باعتباره قريبًا سيرًا على الأقدام من المترو؛ والاعتماد على محطات LRT الشروق وبدر.",
    investmentActionEn: "Discard promotional claims of Metro Line 3 access; factor Cairo LRT El Shorouk / Badr connectivity instead.",
  },
];

export const PRICE_INTELLIGENCE_RECORDS: StudyTableDataset = {
  id: "east-cairo-price-benchmarks",
  titleAr: "مؤشرات الأسعار المنشورة وقوائم المطورين (تنبيه: أسعار طلب/مؤشرات وليست صفقات منفذة)",
  titleEn: "Reported Price Benchmarks & Developer Lists (Warning: Asking Prices, Not Completed Deals)",
  unit: "جنيه مصري للمتر المربع (EGP/sqm)",
  source: "تقارير صحفية ناقلة عن بيانات KW وقوائم مطورين معلنة – رصد نوفمبر 2026",
  referenceYear: "Nov 2026",
  columnsAr: ["النطاق الجغرافي", "نوع الأصل", "السعر المنشور (جنيه/م²)", "طبيعة المؤشر ومصدره", "محاذير الاستخدام والتحقق الإلزامي"],
  columnsEn: ["Geography", "Asset Type", "Reported Price (EGP/sqm)", "Indicator Nature & Source", "Caveats & Mandatory Due Diligence"],
  rows: [
    [
      "القاهرة الجديدة",
      "تجاري (تجزئة)",
      "312,000",
      "متوسط منشورة وفق منهجية تقرير KW الصحفي",
      "مؤشر مجمع لمنهجية التقرير؛ يختلف جذريًا حسب موقع المول ورؤية الواجهة والطابق، ولا يعبر عن سعر صفقات الأراضي.",
    ],
    [
      "العاصمة الإدارية",
      "تجاري (تجزئة)",
      "264,000",
      "متوسط منشورة وفق منهجية تقرير KW الصحفي",
      "متوسط عينة لمشروعات تجارية؛ يتضمن خطط سداد وتقسيط طويل؛ يلزم خصمه إلى قيمة نقدية حالية.",
    ],
    [
      "القاهرة الجديدة",
      "إداري وعيادات طبية",
      "189,000",
      "متوسط منشورة وفق منهجية تقرير KW الصحفي",
      "يجمع الإداري والطبي في مؤشر واحد؛ يلزم فصل العيادات ذات التجهيزات الطبية عن المكاتب الإدارية.",
    ],
    [
      "العاصمة الإدارية",
      "إداري وعيادات طبية",
      "152,000",
      "متوسط منشورة وفق منهجية تقرير KW الصحفي",
      "مؤشر مجمع لمشروعات الداون تاون والحي المالي؛ لا يستخدم كتقييم لمبنى أو مكتب بعينه.",
    ],
    [
      "مدينة المستقبل وهليوبوليس الجديدة",
      "قوائم مطورين مجمعة",
      "139,000",
      "متوسط قوائم أسعار مطورين معلنة (نوفمبر 2026)",
      "أسعار إعلانية وقوائم بيع مطورين؛ تدمج المدينتين في مؤشر واحد؛ ليست صفقات منفذة ولا تعبر عن متوسط المدينة.",
    ],
    [
      "مدينة الشروق",
      "قوائم مطورين معلنة",
      "76,400",
      "مؤشر عينة محدودة (مشروعان فقط في التقرير)",
      "عينة صغيرة جدًا محدودة بمشروعين؛ لا تمثل متوسط أسعار الشروق ولا تصلح للتعميم دون مسح شامل.",
    ],
  ],
};

export const JLL_RENT_PRICE_DYNAMICS = {
  residentialRentGrowthNewCairo: 15.5,
  residentialSalePriceGrowthNewCairo: 3.6,
  officeVacancyRateCairo: 9.4,
  officePrimeRentGrowthYoY: 2.7,
  officeGradeARentGrowthYoY: 5.5,
  retailSuperRegionalVacancyRate: 4.1,
  retailSuperRegionalVacancyPreviousQ: 6.0,
  retailSuperRegionalRentGrowthYoY: 7.0,
  retailPrimeRentGrowthYoY: 7.9,
  source: "JLL Cairo Market Dynamics Q3 2026 (Living, Office & Retail reports)",
};

export const INVESTMENT_SCORECARD_DIMENSIONS = [
  {
    dimensionAr: "الطلب القابل للتحقق",
    dimensionEn: "Verified Demand",
    weight: 25,
    descriptionAr: "كثافة السكان الفعليين، عدد الأسر، نسب الإشغال، معدلات المبيعات والإيجارات المحققة، والقوة الشرائية الفعلية.",
    descriptionEn: "Current resident density, households, actual occupancy, verified sales & rental velocity, genuine purchasing power.",
  },
  {
    dimensionAr: "فجوة العرض والمنافسة",
    dimensionEn: "Supply Gap & Competition",
    weight: 20,
    descriptionAr: "المعروض القائم والمخطط، معدلات الشغور، أعداد المنافسين المباشرين، وخطوط التسليم المستقبلية خلال 3 سنوات.",
    descriptionEn: "Existing & planned stock, vacancy levels, direct competitor density, pipeline delivery timeline over 36 months.",
  },
  {
    dimensionAr: "الموقع والاتصال والوصول",
    dimensionEn: "Location & Connectivity",
    weight: 15,
    descriptionAr: "القرب من المحاور الرئيسية، زمن الوصول في الذروة، واجهة الأرض، تدفقات حركة المشاة والمركبات، وشبكات النقل العام (مونوريل/LRT).",
    descriptionEn: "Proximity to primary arteries, peak travel times, frontage visibility, traffic counts, and mass transit connectivity.",
  },
  {
    dimensionAr: "الجدوى المالية والعوائد",
    dimensionEn: "Financial Feasibility & Yields",
    weight: 20,
    descriptionAr: "تكلفة الأرض والإنشاء والتمويل، الإيرادات المخصومة، صافي القيمة الحالية (NPV)، معدل العائد الداخلي (IRR)، وهامش الربح التنموي.",
    descriptionEn: "Land price basis, construction cost, financing, discounted revenues, NPV, IRR, and gross development profit margin.",
  },
  {
    dimensionAr: "المرافق والجاهزية الفنية",
    dimensionEn: "Utilities & Site Readiness",
    weight: 10,
    descriptionAr: "جاهزية شبكات المياه والكهرباء والصرف الصحي والاتصالات، رخص البناء، قيود الارتفاع، والاشتراطات الهندسية لجهاز المدينة.",
    descriptionEn: "Energized electricity substations, potable water intake, sewerage, fiber optic, zoning clearances, and height allowances.",
  },
  {
    dimensionAr: "المخاطر والالتزام القانوني",
    dimensionEn: "Risks & Legal Compliance",
    weight: 10,
    descriptionAr: "سلامة سند الملكية، الموقف المالي وسداد الأقساط مع هيئة المجتمعات أو المطور الرئيسي، ومخاطر تقلبات التكلفة وسعر الصرف.",
    descriptionEn: "Cadastral title integrity, settlement history with NUCA / master developer, inflation and currency escalation mitigations.",
  },
];

export const CORE_RISKS_REGISTER = [
  {
    riskAr: "خلط السعر المطلوب بسعر الصفقة المنفذة",
    riskEn: "Confusing Asking Prices with Executed Transaction Deals",
    impactAr: "تضخيم القيمة الإجمالية للتطوير (GDV) وبناء نموذج مالي متفائل غير واقعي.",
    impactEn: "Inflates Gross Development Value (GDV) and produces over-optimistic cash flow projections.",
    mitigationAr: "فصل أسعار العرض عن الصفقات المسجلة فعليًا، وتطبيق هوامش أمان وخصم تحوطي لا يقل عن 15–20%.",
    mitigationEn: "Segregate list prices from deeds; apply empirical haircut discount of 15–20% on developer asking lists.",
  },
  {
    riskAr: "اعتبار السكان المستهدفين سكانًا مقيمين حاليًا",
    riskEn: "Treating Long-term Target Populations as Current Resident Headcount",
    impactAr: "تقدير طلب استهلاكي وطبي وتجاري أعلى بكثير من القاعدة السكانية المتواجدة بالفعل في الموقع.",
    impactEn: "Overestimates catchment demand for commercial, retail, and medical services based on vacant blocks.",
    mitigationAr: "إجراء مسح ميداني ليلي ونهاري لإحصاء الشقق المأهولة وعدادات المرافق المشغلة في نطاق نصف قطر 2 كم.",
    mitigationEn: "Execute day/night field audits counting occupied balconies and energized utility meters within 2-km radius.",
  },
  {
    riskAr: "تخمة المعروض الإداري والتجاري المخطط",
    riskEn: "Oversupply Risk in Commercial & Office Pipelines",
    impactAr: "ضغط مستقبلي على الإيجارات، ارتفاع معدلات الشغور، وطول فترة التأجير واسترداد رأس المال.",
    impactEn: "Downward pressure on rental yields, elevated vacancy, and prolonged lease-up absorption periods.",
    mitigationAr: "الاشتراط الإلزامي للتأجير المسبق (Pre-leasing) لنسبة لا تقل عن 30–40% من المساحة قبل بدء صب الخرسانات.",
    mitigationEn: "Enforce binding pre-leasing commitments for at least 30–40% of GLA prior to breaking ground on superstructure.",
  },
  {
    riskAr: "تأخر تشغيل شبكات المرافق الرئيسية",
    riskEn: "Lag in Trunk Infrastructure & Utility Commissioning",
    impactAr: "تعطيل إصدار رخص التشغيل النهائية، تأخير التسليم، وتراكم أعباء وتكاليف التمويل البنكي.",
    impactEn: "Prevents final occupancy licensing, delays handovers, and compounds capitalized financing charges.",
    mitigationAr: "مراجعة موقف محطات التغذية الكهربائية وشبكات الصرف مع جهاز المدينة المختص قبل إتمام شراء الأرض.",
    mitigationEn: "Obtain binding written verification from city engineering department regarding substation energization timelines.",
  },
  {
    riskAr: "التقسيط طويل الأجل ومخاطر التضخم",
    riskEn: "Long-term Installment Plans vs. Inflation Erosion",
    impactAr: "تآكل القيمة الحقيقية للتدفقات النقدية المستقبلية في حال ثبات أقساط البيع وتصاعد تكلفة التنفيذ.",
    impactEn: "Severe erosion of net present value when fixed installment collections face construction cost inflation.",
    mitigationAr: "خصم كافة التدفقات النقدية بمعدل خصم حقيقي معلن، وربط وتيرة البيع بالتقدم الفعلي في عقود المقاولات والتنفيذ.",
    mitigationEn: "Discount all receivables at audited WACC rates, and strictly index sales release pacing to procurement hedging milestones.",
  },
  {
    riskAr: "المخاطر القانونية والتنظيمية وتغيير الاشتراطات",
    riskEn: "Legal, Permitting & Zoning Title Risks",
    impactAr: "تعذر استخراج تراخيص البناء، النزاع على ملكية الأرض، أو فرض غرامات ومصاريف تعديل نشاط باهظة.",
    impactEn: "Inability to secure building permits, title disputes, or punitive land-use conversion penalties.",
    mitigationAr: "فحص سند الملكية، قرار التخصيص، ومحاضر الاستلام، ومطابقة الاستخدام المعتمد في المخطط التفصيلي الرسمي.",
    mitigationEn: "Comprehensive legal due diligence inspecting official allotment decree, handover minutes, and zoning compliance.",
  },
];

export const AUTHORITATIVE_RESEARCH_SOURCES: StudySourceRecord[] = [
  {
    id: "src-kw-q3-2026",
    name: "KW Egypt × Gateway Financial Services — Egypt Property Intelligence Q3 2026",
    url: "https://static.kw.com/dc/a1/678f75fa4cecb483572d10b1dae6/kw-egypt-property-intelligence-q3-2026.pdf",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "commercial",
    methodologyNoteAr: "مبيعات السوق حسب المناطق، أعداد الوحدات المباعة، والأسعار؛ تاريخ الرصد الإداري 1 نوفمبر 2026.",
    methodologyNoteEn: "Market contracted sales by region, unit volume, and pricing; administrative data baseline 1 Nov 2026.",
  },
  {
    id: "src-jll-living-q3-2026",
    name: "JLL — Cairo Living Market Dynamics Q3 2026",
    url: "https://www.jll.com/en-us/insights/market-dynamics/cairo-living",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "research_estimates",
    methodologyNoteAr: "مخزون السكن بالقاهرة، الإضافات الربعية، نمو الإيجارات السنوي (+15.5%) وأسعار البيع (+3.6%) بالقاهرة الجديدة.",
    methodologyNoteEn: "Cairo residential stock, quarterly completions, annual rent growth (+15.5%) vs sales price growth (+3.6%) in New Cairo.",
  },
  {
    id: "src-jll-office-q3-2026",
    name: "JLL — Cairo Office Market Dynamics Q3 2026",
    url: "https://www.jll.com/en-us/insights/market-dynamics/cairo-office",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "research_estimates",
    methodologyNoteAr: "مخزون المكاتب (3.1 مليون م²)، معدل الشغور (9.4%)، نمو إيجارات Grade A (+5.5%)، وPrime (+2.7%).",
    methodologyNoteEn: "Office stock (3.1M sqm), vacancy rate (9.4%), Grade A rents (+5.5%), and Prime (+2.7%) YoY.",
  },
  {
    id: "src-jll-retail-q3-2026",
    name: "JLL — Cairo Retail Market Dynamics Q3 2026",
    url: "https://www.jll.com/en-us/insights/market-dynamics/cairo-retail",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "research_estimates",
    methodologyNoteAr: "مخزون التجزئة (3.6 مليون م²)، انخفاض شغور المراكز فائقة الإقليمية إلى 4.1%، ونمو إيجارات المراكز الرئيسية (+7.9%).",
    methodologyNoteEn: "Retail stock (3.6M sqm), super-regional mall vacancy dipping to 4.1%, prime retail rent growth (+7.9%) YoY.",
  },
  {
    id: "src-nuca-obour",
    name: "هيئة المجتمعات العمرانية الجديدة – مدينة العبور القديمة",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=13",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة الإجمالية 16 ألف فدان، الكتلة العمرانية 12.5 ألف فدان، والحدود والأحياء السكنية والصناعية.",
    methodologyNoteEn: "Total boundary 16k feddans, urban mass 12.5k feddans, residential and industrial zoning allocations.",
  },
  {
    id: "src-nuca-new-obour",
    name: "هيئة المجتمعات العمرانية الجديدة – مدينة العبور الجديدة",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=16",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة الإجمالية قرابة 59 ألف فدان، الكتلة العمرانية 22 ألف فدان، وقرار الإنشاء 246 لسنة 2016.",
    methodologyNoteEn: "Aggregate area approx. 59k feddans, urban mass 22k feddans, establishment decree 246 of 2016.",
  },
  {
    id: "src-presidency-new-obour",
    name: "رئاسة الجمهورية – مشروعات قومية: وضع حجر أساس مدينة العبور الجديدة",
    url: "https://www.presidency.eg/EN/المشاريع-القومية/وضع-حجر-أساس-مدينة-العبور-الجديدة/",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة 58,914.4 فدان، والسكان المستهدفون 2.9 مليون نسمة، والمحاور الإقليمية الرابطة.",
    methodologyNoteEn: "Planning area 58,914.4 feddans, target population 2.9M residents, and regional connector axes.",
  },
  {
    id: "src-nuca-new-cairo",
    name: "هيئة المجتمعات العمرانية الجديدة – جهاز تنمية مدينة القاهرة الجديدة",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=001",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة 89 ألف فدان، الموقع الجغرافي شرق الدائري، وتقسيم التجمعات والأنشطة.",
    methodologyNoteEn: "Planning area approx. 89k feddans, location east of Ring Road, and settlement segmentation.",
  },
  {
    id: "src-nuca-shorouk",
    name: "هيئة المجتمعات العمرانية الجديدة – مدينة الشروق",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=015",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "قرارات المساحة الأصلية 10,808 فدان وتعديل الكردون إلى 52,991.83 فدان بالقرار 636 لسنة 2017.",
    methodologyNoteEn: "Original planning area 10,808 feddans and expanded cordone 52,991.83 feddans per Decree 636/2017.",
  },
  {
    id: "src-nuca-badr",
    name: "هيئة المجتمعات العمرانية الجديدة – مدينة بدر",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=2",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "الموقع عند الكيلو 46 طريق القاهرة–السويس، الحدود، وأرض الجامعات والامتداد الشرقي.",
    methodologyNoteEn: "Location km 46 Cairo–Suez Road, official boundaries, university cluster, and eastern extension.",
  },
  {
    id: "src-misr-gadida-heliopolis",
    name: "شركة مصر الجديدة للإسكان والتعمير – شراكات هليوبوليس الجديدة",
    url: "https://misr-algadida.com/partnerships",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "commercial",
    methodologyNoteAr: "المطور الرئيسي، مساحة 5,400 فدان، ومشروع سوديك إيست على 655 فدانًا وشراكات التطوير العقاري.",
    methodologyNoteEn: "Master developer, 5,400 feddans concession, SODIC East on 655 feddans, and JV partnerships.",
  },
  {
    id: "src-nuca-capital-gardens",
    name: "هيئة المجتمعات العمرانية الجديدة – مدينة حدائق العاصمة",
    url: "https://lands.nuca.gov.eg/ar/ViewCity.aspx?ID=023",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة 29,435 فدانًا، قرار الإنشاء رقم 645 لسنة 2020، وموقعها أمام العاصمة الإدارية.",
    methodologyNoteEn: "Area 29,435 feddans, presidential establishment decree 645 of 2020, and location facing New Capital.",
  },
  {
    id: "src-nuca-new-capital",
    name: "هيئة المجتمعات العمرانية الجديدة – العاصمة الإدارية الجديدة",
    url: "https://newcapital.nuca.gov.eg/ar/ViewCity.aspx?ID=1",
    dataYear: "2026",
    accessedAt: "2026-11-21",
    classification: "official",
    methodologyNoteAr: "المساحة 170 ألف فدان، وسكان مستهدفون 6.5 مليون عند اكتمال المراحل، وخطة نقل موظفي الدولة.",
    methodologyNoteEn: "Gross area 170k feddans, 6.5M target population at full build-out, and government relocation staging.",
  },
  {
    id: "src-savills-cairo-2025",
    name: "Savills — Cairo Property Report 2025",
    url: "https://www.savills.com.eg/research_articles/243971/381808-0",
    dataYear: "2025",
    accessedAt: "2026-11-21",
    classification: "research_estimates",
    methodologyNoteAr: "تحليل قطاعات التعليم والرعاية الصحية كفرص كثيفة رأس المال تتطلب مشغلين تخصصيين.",
    methodologyNoteEn: "Strategic analysis of healthcare and education sectors as long-term capital-intensive opportunities requiring specialized operators.",
  },
];

export const EAST_CAIRO_MASTER_STUDY: GlobalMarketStudy = {
  id: "SBA-GM-CON-EGY-001",
  slug: "east-cairo-real-estate-study",
  sector: "construction",
  scope: "egypt_only",
  region: "egypt",
  opportunityScore: 92,
  opportunityTier: "Tier 1 – Flagship Real Estate Demand Epicenter",
  opportunityTierAr: "المستوى الأول – مركز الثقل والطلب العقاري الأكبر بمصر",
  regionalRank: 1,
  totalInRegion: 1,
  opportunityRationaleAr:
    "يمثل شرق القاهرة بؤرة النشاط العقاري الأكبر في مصر بمبيعات تعاقدية مقدرة بلغت 499.6 مليار جنيه خلال 9 أشهر (37.1% من إجمالي مبيعات السوق المرصودة)، مدعومة بمخزون سكني يتجاوز 362 ألف وحدة، ومخزون إداري وتجاري متنامٍ، ونمو إيجاري قوي في القاهرة الجديدة بلغ 15.5% سنويًا.",
  opportunityRationaleEn:
    "East Cairo serves as Egypt's foremost real estate market epicenter with EGP 499.6bn in report-estimated contracted sales (37.1% market share over Jan–Sep 2026), 362.6k residential units, growing office and retail stock, and robust 15.5% annual rental growth in New Cairo.",
  downloadDocxUrl: "/studies/east-cairo/SBA_East_Cairo_Real_Estate_Study_v2_AR.docx",
  downloadXlsxUrl: "/studies/east-cairo/SBA_East_Cairo_Real_Estate_Database_v2.xlsx",
  downloadZipUrl: "/studies/east-cairo/SBA_East_Cairo_Intelligence_v2_Full_Package.zip",
  priorityGrade: "A",
  marketRole: "high_growth_consumption",
  dataBasis: "desk_research_verified",
  tradeIndicatorNumericUsdB: 10.3,
  tradeIndicatorDisplay: "499.6B EGP",
  tradeIndicatorYear: "2026 (Jan-Sep)",
  tradeIndicatorScopeAr: "مبيعات تعاقدية مقدرة بشرق القاهرة (يناير–سبتمبر 2026) / KW Egypt × Gateway Financials",
  tradeIndicatorScopeEn: "East Cairo Estimated Contracted Sales Jan–Sep 2026 (KW Egypt × Gateway Financials)",
  dataCompletenessAr: "إصدار بحثي مؤسسي شامل 2.0 موثق ومطابق لمنهجية المصادر؛ الفجوات مصرح بها صراحة بسجل مستقل",
  dataCompletenessEn: "Institutional Grade 2.0 release strictly verified against public datasets with dedicated Data Gaps Register",
  waveBadge: "Version 2.0 Comprehensive",
  enableScenarioCalculator: true,
  countryCode: "EG",
  countryNameAr: "جمهورية مصر العربية",
  countryNameEn: "Arab Republic of Egypt",
  subRegionOrProjectAr: "القاهرة الجديدة · العاصمة الإدارية · مدينة المستقبل · الشروق · العبور القديمة والجديدة · بدر · هليوبوليس الجديدة · مدينتي · الرحاب · حدائق العاصمة",
  subRegionOrProjectEn: "New Cairo · New Capital · Mostakbal City · El Shorouk · Old & New Obour · Badr · New Heliopolis · Madinaty · Al Rehab · Capital Gardens",
  activityTypeAr: "التطوير العقاري، الاستثمار الإداري والتجاري والسكني والطبي، ونماذج الجدوى الميدانية المخصومة",
  activityTypeEn: "Real Estate Development, Commercial, Office, Residential & Medical Investment, and Discounted DCF Feasibility",
  productTagsAr: [
    "مبيعات شرق القاهرة 499.6 مليار جنيه",
    "حصة سوقية 37.1%",
    "المخزون السكني 362,600 وحدة",
    "نمو إيجارات القاهرة الجديدة +15.5%",
    "المخزون الإداري 3.1 مليون م²",
    "مخزون التجزئة 3.6 مليون م²",
    "شغور المولات الإقليمية 4.1%",
    "العاصمة الإدارية 170 ألف فدان",
    "12 مدينة ونطاقًا جغرافيًا",
    "سجل فجوات البيانات الميدانية",
    "قاعدة بيانات 17 ورقة عمل Excel",
    "محرك الجدوى المالية والحساسية",
  ],
  productTagsEn: [
    "East Cairo EGP 499.6B Sales",
    "37.1% Market Share",
    "Residential Stock 362.6k Units",
    "New Cairo Rent Growth +15.5%",
    "Office Stock 3.1M sqm",
    "Retail Stock 3.6M sqm",
    "Super-Regional Vacancy 4.1%",
    "New Capital 170k Feddans",
    "12 Geographic Zones & Benchmarks",
    "Data Gaps & Verification Register",
    "17-Sheet Excel Master Database",
    "DCF Feasibility & Sensitivity Engine",
  ],
  titleAr: "دراسة سوق التطوير العقاري والاستثمار – شرق القاهرة (الإصدار المؤسسي الشامل 2.0)",
  titleEn: "East Cairo Real Estate Development & Investment Intelligence (Comprehensive Institutional Edition 2.0)",
  subtitleAr:
    "دراسة بحثية واستثمارية متكاملة لمدن وأحياء ومجتمعات شرق القاهرة: المؤشرات الكلية، ملفات 12 منطقة، القطاعات الأربعة، استخبارات الأسعار، خطط المطورين، وسجل فجوات البيانات",
  subtitleEn:
    "Integrated institutional intelligence covering 12 East Cairo geographic entities: macro demand, district profiles, 4 sectors, pricing benchmarks, developer pipelines, and data gap governance",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-21",
  lastUpdated: "2026-11-21",
  version: "2.0",
  coverImage: "/studies/east-cairo/east_cairo_sales_q3_2026.png",
  galleryImages: [
    "/studies/east-cairo/east_cairo_sales_q3_2026.png",
    "/studies/east-cairo/cairo_stock_indicators_q3_2026.png",
    "/studies/east-cairo/east_cairo_city_areas.png",
  ],
  kpis: [
    {
      id: "kpi-ec-sales",
      labelAr: "مبيعات شرق القاهرة المقدرة (يناير–سبتمبر 2026)",
      labelEn: "East Cairo Contracted Sales (Jan–Sep 2026)",
      value: "499.6",
      unit: "مليار جنيه",
      source: "KW Egypt × Gateway Financials Q3 2026",
      referenceYear: "2026",
      growthNoteAr: "المركز الأول بنسبة 37.1% من إجمالي مبيعات السوق المرصودة بالتقرير",
      growthNoteEn: "Rank 1 with 37.1% share of total report-estimated sales",
    },
    {
      id: "kpi-egypt-units",
      labelAr: "إجمالي الوحدات المباعة المسجلة بمصر",
      labelEn: "Total Reported Units Sold (Egypt Tracked Universe)",
      value: "103,643",
      unit: "وحدة",
      source: "KW Egypt × Gateway Financials Q3 2026",
      referenceYear: "2026",
      growthNoteAr: "بمتوسط سعر تذكرة بيعية يقارب 13 مليون جنيه مصري",
      growthNoteEn: "At an average sale ticket price of approx. EGP 13M",
    },
    {
      id: "kpi-nc-rent-growth",
      labelAr: "نمو الإيجارات السكنية السنوي بالقاهرة الجديدة",
      labelEn: "New Cairo Residential Annual Rent Growth",
      value: "+15.5%",
      unit: "سنويًا YoY",
      source: "JLL Cairo Living Dynamics Q3 2026",
      referenceYear: "Q3 2026",
      growthNoteAr: "مقابل نمو أسعار البيع بنسبة 3.6% فقط (مؤشر ضغط القدرة على الشراء والتحول للإيجار)",
      growthNoteEn: "Outpacing sales price growth of +3.6% (indicates affordability constraints & rental shift)",
    },
    {
      id: "kpi-retail-vacancy",
      labelAr: "معدل شغور مراكز التسوق فائقة الإقليمية",
      labelEn: "Super-Regional Mall Vacancy Rate",
      value: "4.1%",
      unit: "نسبة مئوية",
      source: "JLL Cairo Retail Dynamics Q3 2026",
      referenceYear: "Q3 2026",
      growthNoteAr: "تراجع ملحوظ من 6.0% في الربع الثاني 2026، مع نمو إيجاري رئيسي بلغ 7.9%",
      growthNoteEn: "Down from 6.0% in Q2 2026, alongside prime retail rental growth of +7.9%",
    },
    {
      id: "kpi-office-stock",
      labelAr: "مخزون المكاتب بالقاهرة وشغوره",
      labelEn: "Cairo Office Stock & Vacancy Rate",
      value: "3.1M م² | 9.4%",
      unit: "GLA / شغور",
      source: "JLL Cairo Office Dynamics Q3 2026",
      referenceYear: "Q3 2026",
      growthNoteAr: "نمو إيجارات Grade A بنسبة 5.5%، مع تركيز الإمدادات الجديدة بشرق القاهرة",
      growthNoteEn: "Grade A office rents up +5.5% YoY, with upcoming pipeline heavily concentrated in East Cairo",
    },
    {
      id: "kpi-nac-area",
      labelAr: "المساحة التخطيطية للعاصمة الإدارية الجديدة",
      labelEn: "New Administrative Capital Master Planning Area",
      value: "170,000",
      unit: "فدان",
      source: "هيئة المجتمعات العمرانية (NUCA) والقرارات الجمهورية",
      referenceYear: "2026",
      growthNoteAr: "مستهدف استيعابي 6.5 مليون نسمة عند اكتمال نمو المدينة؛ المرحلة الأولى 40 ألف فدان",
      growthNoteEn: "Target 6.5M population at full build-out; Phase 1 spans approx. 40k feddans",
    },
  ],
  charts: [
    EAST_CAIRO_4_CITIES_PRICE_CHART,
    REGIONAL_SALES_COMPARISON_CHART,
    CITY_AREAS_COMPARISON_CHART,
    CAIRO_STOCK_INDICATORS_CHART,
  ],
  tables: [
    PRICE_INTELLIGENCE_RECORDS,
  ],
  sections: {
    executiveSummary: {
      summaryAr:
        "يحتل شرق القاهرة صدارة الطلب العقاري والاستثماري في جمهورية مصر العربية، حيث استحوذ على 499.6 مليار جنيه مصري من المبيعات التعاقدية المقدرة خلال التسعة أشهر الأولى من عام 2026 (بحصة سوقية بلغت 37.1%)، متقدمًا على الساحل الشمالي (439.4 مليار جنيه / 32.6%) وغرب القاهرة (114.4 مليار جنيه / 8.5%). وتكشف مؤشرات الربع الثالث من عام 2026 عن وصول المخزون السكني بالقاهرة إلى 362,600 وحدة، مع نمو إيجاري سنوي قوي في القاهرة الجديدة بنسبة 15.5% مقابل نمو أسعار البيع بنسبة 3.6%. كما سجل القطاع الإداري مخزونًا بلغ 3.1 مليون متر مربع بشغور 9.4%، بينما سجل قطاع التجزئة 3.6 مليون متر مربع بشغور 4.1% في المراكز فائقة الإقليمية. الاستنتاج الاستثماري الأساسي: قوة المبيعات الكلية لا تعني الجدوى التلقائية لكل قطعة أرض؛ يلزم فحص الموقع والطلب الفعلي القابل للتحقق، وفصل الأسعار النقدية عن عروض التقسيط، وعدم الخلط بين السكان المستهدفين تخطيطيًا والتعداد الفعلي.",
      summaryEn:
        "East Cairo represents Egypt's foremost real estate demand epicenter, capturing EGP 499.6bn in report-estimated contracted sales over Jan–Sep 2026 (37.1% share), ahead of North Coast (EGP 439.4bn / 32.6%) and West Cairo (EGP 114.4bn / 8.5%). Q3 2026 indicators benchmark Cairo residential stock at 362,600 units with New Cairo annual rent growth at 15.5% against 3.6% sales price growth. Office stock stands at 3.1M sqm (9.4% vacancy), while retail stock reached 3.6M sqm (super-regional mall vacancy at 4.1%). Critical takeaway: macro sales momentum does not validate every land parcel; parcel-specific due diligence, verified resident demand, and discounted cash flow models are mandatory.",
      bulletsAr: [
        "شرق القاهرة يسجل 499.6 مليار جنيه مبيعات مقدرة (37.1% من السوق المرصود).",
        "المخزون السكني بالقاهرة 362,600 وحدة (+5,600 في Q3 ومتوقع 19,600 في Q4).",
        "نمو إيجارات القاهرة الجديدة السكنية 15.5% سنويًا مقابل 3.6% لأسعار البيع.",
        "مخزون المكاتب 3.1 مليون م² بشغور 9.4%، وتسليمات إضافية مرتقبة تتركز شرق القاهرة.",
        "شغور مراكز التسوق فائقة الإقليمية تراجع إلى 4.1% مع نمو إيجاري بلغ 7.9% سنويًا.",
        "تنبيه منهجي إلزامي: عدم اختلاق أرقام السكان الفعليين والاعتماد فقط على المصادر الموثقة.",
      ],
      bulletsEn: [
        "East Cairo recorded EGP 499.6bn in estimated contracted sales (37.1% market share).",
        "Cairo residential stock reached 362,600 units (+5.6k in Q3, 19.6k expected in Q4).",
        "New Cairo residential rents surged +15.5% YoY compared to +3.6% sale price growth.",
        "Office stock at 3.1M sqm with 9.4% vacancy; future deliveries heavily concentrated in East Cairo.",
        "Super-regional mall vacancy dropped to 4.1% with prime rents up +7.9% YoY.",
        "Mandatory methodological caveat: no fabrication of resident counts; strict verified sourcing.",
      ],
    },
    marketDefinition: {
      summaryAr:
        "يستخدم التقرير مفهوم شرق القاهرة كنطاق سوقي ووظيفي متكامل لحوض الطلب والاستثمار وليس حدودًا إدارية واحدة لمحافظة واحدة. يضم النطاق 12 كيانًا ونطاقًا جغرافيًا: 1) العبور القديمة، 2) العبور الجديدة، 3) القاهرة الجديدة بتجمعاتها الخمسة وامتداداتها وبيت الوطن واللوتس والنرجس والبنفسج والتجمع السادس، 4) الشروق، 5) بدر، 6) هليوبوليس الجديدة، 7) مدينة المستقبل، 8) العاصمة الإدارية الجديدة، 9) حدائق العاصمة، 10) مدينتي، 11) الرحاب، و12) العاشر من رمضان كنطاق مقارنة إقليمي وصناعي. ويميز التحليل بدقة بين الحدود الرسمية المعتمدة، المساحات المخططة، الكتل العمرانية المنفذة، والمشروعات السكنية الخاصة.",
      summaryEn:
        "The report defines East Cairo as an integrated market catchment and functional demand corridor covering 12 geographic entities: 1) Old Obour, 2) New Obour, 3) New Cairo and its submarket districts, 4) El Shorouk, 5) Badr, 6) New Heliopolis, 7) Mostakbal City, 8) New Administrative Capital, 9) Capital Gardens, 10) Madinaty, 11) Al Rehab, and 12) 10th of Ramadan as an industrial regional benchmark.",
    },
    actualDemand: {
      summaryAr:
        "حقق شرق القاهرة مبيعات تعاقدية بلغت 499.6 مليار جنيه في التسعة أشهر الأولى من عام 2026، مستحوذًا على أكثر من ثلث مبيعات السوق المرصودة في مصر (37.1%). ويبلغ متوسط سعر التذكرة البيعية للوحدة نحو 13 مليون جنيه مصري في العينة التي غطاها تقرير KW Egypt × Gateway Financials (إجمالي 103,643 وحدة مباعة بمصر بقيمة 1,348.1 مليار جنيه). الطلب مدفوع بتحوط رؤوس الأموال ضد انخفاض قيمة العملة، الرغبة في التملك في مجتمعات مغلقة ومخططة، وانتقال تدريجي للمقرات الحكومية والشركات نحو شرق القاهرة.",
      summaryEn:
        "East Cairo captured EGP 499.6bn in contracted sales over Jan–Sep 2026, securing more than a third of tracked national sales (37.1%). Average sales ticket stood at approx. EGP 13M across 103,643 units sold nationally (EGP 1,348.1bn total market).",
    },
    localSupplyProduction: {
      summaryAr:
        "يشهد شرق القاهرة تركزًا لمعظم إمدادات التطوير العقاري الجديدة في القاهرة الكبرى. أضاف القطاع السكني 5,600 وحدة في الربع الثالث 2026 ليصل المخزون إلى 362,600 وحدة مع توقع 19,600 وحدة إضافية في الربع الرابع. وفي القطاع الإداري، يتوقع تسليم 110,300 متر مربع قبل نهاية العام تتركز معظمها في شرق القاهرة (المخزون القائم 3.1 مليون م² والشغور 9.4%). وفي التجزئة، أضيف 25,500 متر مربع في الربع الثالث مع 191,200 متر مربع مرتقبة في الربع الرابع (المخزون القائم 3.6 مليون م²).",
      summaryEn:
        "East Cairo hosts the highest concentration of real estate completions in Greater Cairo. Residential stock added 5.6k units in Q3 2026 to reach 362.6k units, with 19.6k units scheduled for Q4.",
    },
    competitionSaturation: {
      summaryAr:
        "المنافسة شديدة في المشروعات السكنية الفاخرة والمكاتب التجارية العامة غير المصنفة. في المقابل، تظهر مؤشرات JLL أداءً متميزًا في فئات محددة: المراكز التجارية فائقة الإقليمية تراجع شغورها إلى 4.1% وزادت إيجاراتها 7.0% سنويًا، والمكاتب الإدارية عالية الجودة Grade A نمت إيجاراتها 5.5% سنويًا. بينما تواجه المشروعات التجارية المجزأة والمولات الشريطية منافسة حادة وضعفًا في نسب الإشغال إذا لم ترتبط بكثافة سكانية فورية.",
      summaryEn:
        "Competition is intense in generic residential compounds and speculative offices. JLL data highlights resilience in specialized segments: super-regional mall vacancy compressed to 4.1% with +7.0% rent growth, and Grade A office rents expanded +5.5% YoY.",
    },
    pricingCostAnalysis: {
      summaryAr:
        "تتراوح مؤشرات الأسعار المعلنة في تقارير السوق بين 312 ألف جنيه/م² للتجاري بالقاهرة الجديدة و264 ألف جنيه/م² بالعاصمة الإدارية، ونحو 189 ألف جنيه/م² للإداري والعيادات بالقاهرة الجديدة و152 ألف جنيه بالعاصمة الإدارية. وبلغ متوسط قوائم المطورين لمستقبل وهليوبوليس نحو 139 ألف جنيه/م². تنبيه حاسم: هذه أسعار طلب وقوائم إعلانية للمطورين تتضمن فترات تقسيط وخصومات نقدية وتفاوتًا في مواعيد التسليم، ولا تمثل صفقات نقدية منفذة؛ ويلزم خصمها إلى القيمة الحالية (PV) عند بناء نماذج الجدوى.",
      summaryEn:
        "Reported commercial pricing benchmarks range from EGP 312k/sqm for retail in New Cairo to EGP 264k/sqm in the New Capital; developer lists must be discounted to Present Value (PV) for financial underwriting.",
    },
    risksChallenges: {
      summaryAr:
        "تحدد الدراسة 6 مخاطر جوهرية: 1) خلط السعر المطلوب بسعر الصفقة وتضخيم الـGDV، 2) معاملة السكان المستهدفين تخطيطيًا كسكان مقيمين فعليًا، 3) تخمة المعروض الإداري والتجاري في بعض المحاور، 4) تأخر تشغيل شبكات المرافق وتوصيل الكهرباء، 5) تآكل التدفقات النقدية بسبب التضخم وطول فترات التقسيط، و6) المخاطر القانونية والتنظيمية وتغيير الاشتراطات البنائية.",
      summaryEn:
        "The study details 6 principal risks: 1) Confusing asking prices with executed transaction prices, 2) Treating planning targets as current residents, 3) Office/retail oversupply, 4) Utility infrastructure lag, 5) Inflation erosion over long installment plans, and 6) Permitting & zoning risks.",
    },
    commercialInvestmentOpportunities: {
      summaryAr:
        "الفرص الاستثمارية الواعدة بشرق القاهرة: 1) مباني المكاتب الإدارية المؤسسية Grade A ذات الشهادات الخضراء والإدارة المتخصصة في القاهرة الجديدة، 2) المراكز الطبية التخصصية ومستشفيات جراحة اليوم الواحد ذات الحاجة الملحة، 3) المراكز التجارية المجتمعية (Neighborhood Retail) المرتبطة بالتجمعات السكنية المأهولة فعليًا في العبور والشروق وبدر، و4) الشقق الفندقية والسكنية المخدومة ذات العوائد المستقرة.",
      summaryEn:
        "Key investment opportunities: 1) Institutional Grade A office assets, 2) Specialized polyclinics & day hospitals, 3) Neighborhood community retail anchored by supermarkets, and 4) Serviced corporate residences.",
    },
    recommendationsActionPlan: {
      summaryAr:
        "توصيات تنفيذية لمطوري ومستثمري مجموعة سامي بن عياد: 1) عدم شراء أي قطعة أرض بناءً على المؤشرات الكلية للمدينة دون مسح ميداني للحي ومحيط 2 كم، 2) اشتراط الحصول على خطابات تأكيد رسمية لجاهزية شبكات الكهرباء والمياه والصرف وسند الملكية، 3) بناء نماذج التدفقات النقدية على أساس السعر النقدي المخصوم والتحوط ضد التضخم في تكلفة التنفيذ بنسبة 20%، 4) تفعيل التأجير المسبق قبل البدء في المشروعات الإدارية والتجارية، و5) تطبيق نموذج النقاط الـ100 والرجوع لسجل فجوات البيانات قبل اتخاذ أي قرار استثماري.",
      summaryEn:
        "Actionable recommendations for SBA Group: 1) Never acquire land based on macro indicators alone without a 2-km field survey, 2) Demand official utility energization letters, 3) Underwrite on discounted present value with 20% cost contingency, 4) Secure pre-leasing commitments, and 5) Apply the 100-point scorecard and Data Gaps Register.",
    },
  },
  sources: AUTHORITATIVE_RESEARCH_SOURCES,
  groupOpportunities: [
    {
      sectorId: "construction",
      nameAr: "قطاع المقاولات العامة والتطوير العقاري",
      nameEn: "General Contracting & Real Estate Development",
      descriptionAr: "تنفيذ أعمال الإنشاءات والمقاولات المتكاملة والمشروعات السكنية والإدارية والطبية المتخصصة بشرق القاهرة.",
      descriptionEn: "Turnkey general contracting, civil works, MEP, and specialized medical/commercial development across East Cairo.",
      route: "/sectors/construction",
    },
    {
      sectorId: "environmental",
      nameAr: "قطاع حلول البيئة والطاقة المستدامة",
      nameEn: "Sustainable Environment & Green Energy",
      descriptionAr: "تجهيز المباني والمشروعات بالأنظمة الخضراء، الطاقة الشمسية، ومعالجة وترشيد المياه وفق المعايير البيئية.",
      descriptionEn: "Green building certifications, solar PV integration, water treatment and energy efficiency systems for commercial developments.",
      route: "/sectors/environmental",
    },
  ],
};

export const CONSTRUCTION_12_CITY_STUDIES: GlobalMarketStudy[] = EAST_CAIRO_CITIES.map((city) => {
  const subCount = city.submarkets ? city.submarkets.length : 0;
  const flatPriceFormatted = new Intl.NumberFormat().format(city.avgFlatPriceEgpSqm ?? 25000);
  const villaPriceFormatted = city.avgVillaPriceEgpSqm ? new Intl.NumberFormat().format(city.avgVillaPriceEgpSqm) : null;
  const commPriceFormatted = city.avgCommercialPriceEgpSqm ? new Intl.NumberFormat().format(city.avgCommercialPriceEgpSqm) : null;

  let tierAr = "المستوى الأول – مدينة قائمة وناضجة بطلب مستقر";
  if (city.category === "special_authority") {
    tierAr = "المستوى الاستراتيجي – نطاق امتياز وعاصمة استثمارية";
  } else if (city.category === "private_community") {
    tierAr = "المستوى الخاص – مجتمع عمراني متكامل عالي الاستقرار";
  } else if (city.category === "extension") {
    tierAr = "المستوى التوسعي – امتداد تنموي وهوامش نمو واعدة";
  } else if (city.category === "regional_benchmark") {
    tierAr = "المستوى الإقليمي – قلعة صناعية ومقارنة إقليمية";
  }

  const tagsAr = [
    `متوسط الشقق: ${flatPriceFormatted} ج.م/م²`,
    villaPriceFormatted ? `متوسط الفيلات: ${villaPriceFormatted} ج.م/م²` : "فيلات حسب الطلب",
    commPriceFormatted ? `التجاري: ${commPriceFormatted} ج.م/م²` : "",
    city.expectedRentalYieldPct ? `العائد الإيجاري: ${city.expectedRentalYieldPct}%` : "",
    city.currentEstimatedOccupancyPct ? `نسبة الإشغال: ${city.currentEstimatedOccupancyPct}%` : "",
    city.overallMaturityScore ? `مؤشر النضج: ${city.overallMaturityScore}/100` : "",
    `${subCount} أحياء ومناطق مفصلة ومقارنة`,
  ].filter(Boolean);

  const tagsEn = [
    `Flats: ${city.avgFlatPriceEgpSqm} EGP/sqm`,
    city.avgVillaPriceEgpSqm ? `Villas: ${city.avgVillaPriceEgpSqm} EGP/sqm` : "",
    city.expectedRentalYieldPct ? `Yield: ${city.expectedRentalYieldPct}%` : "",
    city.currentEstimatedOccupancyPct ? `Occupancy: ${city.currentEstimatedOccupancyPct}%` : "",
    city.overallMaturityScore ? `Maturity: ${city.overallMaturityScore}/100` : "",
    `${subCount} Submarkets Tracked`,
  ].filter(Boolean);

  return {
    id: `SBA-GM-CON-${city.id.toUpperCase()}`,
    slug: city.id,
    sector: "construction" as const,
    scope: "egypt_only" as const,
    region: "egypt" as const,
    opportunityScore: city.overallMaturityScore ?? 85,
    opportunityTier: `Tier ${city.investmentRank ?? 1} – ${city.category}`,
    opportunityTierAr: tierAr,
    regionalRank: city.investmentRank ?? 1,
    totalInRegion: 12,
    opportunityRationaleAr: city.investmentHypothesisAr,
    opportunityRationaleEn: city.investmentHypothesisEn,
    downloadDocxUrl: "/studies/east-cairo/SBA_East_Cairo_Real_Estate_Study_v2_AR.docx",
    downloadXlsxUrl: "/studies/east-cairo/SBA_East_Cairo_Real_Estate_Database_v2.xlsx",
    downloadZipUrl: "/studies/east-cairo/SBA_East_Cairo_Intelligence_v2_Full_Package.zip",
    priorityGrade: "A" as const,
    marketRole: "high_growth_consumption" as const,
    dataBasis: "desk_research_verified" as const,
    tradeIndicatorNumericUsdB: (city.avgFlatPriceEgpSqm ?? 25000) / 1000,
    tradeIndicatorDisplay: `${flatPriceFormatted} ج.م/م²`,
    tradeIndicatorYear: "2026",
    tradeIndicatorScopeAr: `متوسط سعر المتر السكني (شقق) بـ ${city.nameAr}`,
    tradeIndicatorScopeEn: `Average residential flat price per sqm in ${city.nameEn}`,
    dataCompletenessAr: `دراسة موثقة لـ ${city.nameAr} تشمل ${subCount} أحياء ومناطق مفصلة ومقارنة`,
    dataCompletenessEn: `Verified dossier covering ${subCount} analyzed submarkets`,
    waveBadge: "Version 2.0 City Dossier",
    enableScenarioCalculator: true,
    countryCode: "EG",
    countryNameAr: city.nameAr,
    countryNameEn: city.nameEn,
    subRegionOrProjectAr: `جمهورية مصر العربية — ${city.locationAndBoundariesAr.split('—')[0].trim()}`,
    subRegionOrProjectEn: `Egypt — ${city.locationAndBoundariesEn.split('—')[0].trim()}`,
    activityTypeAr: (city.promisingSectorsAr && city.promisingSectorsAr.length > 0) ? city.promisingSectorsAr.join(" · ") : "التطوير العقاري والاستثمار السكني والتجاري",
    activityTypeEn: (city.promisingSectorsEn && city.promisingSectorsEn.length > 0) ? city.promisingSectorsEn.join(" · ") : "Real Estate Development & Commercial Investment",
    productTagsAr: tagsAr,
    productTagsEn: tagsEn,
    titleAr: `دراسة سوق التطوير العقاري والاستثمار — ${city.nameAr}`,
    titleEn: `Real Estate Development & Investment Intelligence — ${city.nameEn}`,
    subtitleAr: `تحليل تحليلي مستقل يشمل ${subCount} أحياء، والأسعار والعوائد الإيجارية، ونسب الإشغال، وشبكات النقل، والمشروعات قيد التنفيذ.`,
    subtitleEn: `Granular standalone dossier analyzing ${subCount} submarkets, residential and commercial pricing spreads, rental yields, transit and pipeline.`,
    status: "completed" as const,
    approvalStatus: "approved" as const,
    issueDate: "2026-11-22",
    lastUpdated: "2026-11-23",
    version: "2.0",
    kpis: [
      {
        id: "flat-price",
        labelAr: "متوسط سعر متر الشقق",
        labelEn: "Avg Flat Price/sqm",
        valueNumeric: city.avgFlatPriceEgpSqm ?? 0,
        valueDisplay: `${flatPriceFormatted} ج.م`,
        unitAr: "ج.م/م²",
        unitEn: "EGP/sqm",
        isPrimaryHighlight: true,
      },
      {
        id: "rental-yield",
        labelAr: "العائد الإيجاري المتوقع",
        labelEn: "Expected Rental Yield",
        valueNumeric: city.expectedRentalYieldPct ?? 0,
        valueDisplay: `${city.expectedRentalYieldPct ?? 0}%`,
        unitAr: "سنوياً",
        unitEn: "p.a.",
        isPrimaryHighlight: true,
      },
      {
        id: "occupancy",
        labelAr: "نسبة الإشغال الفعلي",
        labelEn: "Estimated Occupancy",
        valueNumeric: city.currentEstimatedOccupancyPct ?? 0,
        valueDisplay: `${city.currentEstimatedOccupancyPct ?? 0}%`,
        unitAr: "مأهول",
        unitEn: "occupied",
      },
      {
        id: "maturity",
        labelAr: "مؤشر النضج العمراني",
        labelEn: "Maturity Score",
        valueNumeric: city.overallMaturityScore ?? 0,
        valueDisplay: `${city.overallMaturityScore ?? 0}/100`,
        unitAr: "نقطة",
        unitEn: "pts",
      },
    ],
    charts: [],
    tables: [],
    sections: {
      executiveSummary: {
        summaryAr: city.investmentHypothesisAr,
        summaryEn: city.investmentHypothesisEn,
        bulletsAr: city.promisingSectorsAr,
        bulletsEn: city.promisingSectorsEn,
      },
      marketDefinition: {
        summaryAr: city.locationAndBoundariesAr,
        summaryEn: city.locationAndBoundariesEn,
      },
    },
    sources: AUTHORITATIVE_RESEARCH_SOURCES,
    groupOpportunities: [
      {
        sectorId: "construction" as const,
        nameAr: "قطاع المقاولات العامة والتطوير العقاري",
        nameEn: "General Contracting & Real Estate Development",
        descriptionAr: `تنفيذ أعمال الإنشاءات والمقاولات المتكاملة والمشروعات السكنية والتجارية في ${city.nameAr}.`,
        descriptionEn: `Turnkey general contracting and development execution across ${city.nameEn}.`,
        route: "/sectors/construction",
      },
    ],
  };
});
