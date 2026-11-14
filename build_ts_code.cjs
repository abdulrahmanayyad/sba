const fs = require('fs');

const ranked = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\ranked_countries.json', 'utf8'));
const filesMap = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\public_files_map.json', 'utf8'));
const config = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\master_builder_config.json', 'utf8'));

function sanitizeTanween(text) {
  if (!text) return text;
  return text.replace(/\u0627\u064B/g, '\u064B\u0627');
}

// Generate TS code
let tsCode = `import type {
  ApparelSubRegionId,
  GeoRegionId,
  GlobalMarketStudy,
  MarketRoleCategory,
  PriorityGrade,
  StudySourceRecord,
  TradeDataBasis,
} from "../global-markets-data";
import { STUDY_SAU_APPAREL_001 } from "./sba-gm-app-sau-001";

export interface ApparelSubRegionMeta {
  id: ApparelSubRegionId;
  geoRegion: GeoRegionId;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  comparativeSlug: string;
}

export const APPAREL_6_SUBREGIONS_META: ApparelSubRegionMeta[] = [
  {
    id: "gcc",
    geoRegion: "arab_world",
    titleAr: "دول الخليج العربي",
    titleEn: "GCC Countries",
    descAr: "السعودية، الإمارات، الكويت، قطر، سلطنة عُمان، ومملكة البحرين — أسواق الاستهلاك الأعلى دخلًا ومراكز التوزيع الإقليمي وإعادة التصدير.",
    descEn: "Saudi Arabia, UAE, Kuwait, Qatar, Oman, and Bahrain — highest-income consumer markets and regional distribution hubs.",
    comparativeSlug: "gcc-comparative-report",
  },
  {
    id: "other_arab",
    geoRegion: "arab_world",
    titleAr: "الدول العربية الأخرى",
    titleEn: "Other Arab Countries",
    descAr: "مصر، ليبيا، العراق، الأردن، المغرب، الجزائر، تونس، لبنان، السودان، وموريتانيا — أسواق القرب الجغرافي واتفاقيات التجارة الحرة العربية (GAFTA/أغادير).",
    descEn: "Egypt, Libya, Iraq, Jordan, Morocco, Algeria, Tunisia, Lebanon, Sudan, and Mauritania — proximity markets and preferential trade pacts.",
    comparativeSlug: "other-arab-comparative-report",
  },
  {
    id: "europe",
    geoRegion: "europe",
    titleAr: "الأسواق الأوروبية",
    titleEn: "European Markets",
    descAr: "ألمانيا، بريطانيا، فرنسا، إسبانيا، إيطاليا، هولندا، بولندا، بلجيكا، السويد، النمسا، الدنمارك، التشيك، البرتغال، رومانيا، واليونان.",
    descEn: "Germany, UK, France, Spain, Italy, Netherlands, Poland, Belgium, Sweden, Austria, Denmark, Czechia, Portugal, Romania, and Greece.",
    comparativeSlug: "europe-comparative-report",
  },
  {
    id: "africa",
    geoRegion: "africa",
    titleAr: "الأسواق الأفريقية",
    titleEn: "African Markets",
    descAr: "جنوب أفريقيا، كينيا، نيجيريا، موريشيوس، غانا، كوت ديفوار، تنزانيا، السنغال، رواندا، الكاميرون، أوغندا، أنغولا، زامبيا، ناميبيا، وموزمبيق.",
    descEn: "South Africa, Kenya, Nigeria, Mauritius, Ghana, Côte d'Ivoire, Tanzania, Senegal, Rwanda, Cameroon, Uganda, Angola, Zambia, Namibia, and Mozambique.",
    comparativeSlug: "africa-comparative-report",
  },
  {
    id: "north_america",
    geoRegion: "americas",
    titleAr: "أسواق أمريكا الشمالية",
    titleEn: "North American Markets",
    descAr: "الولايات المتحدة الأمريكية وكندا — أكبر سوق استيرادي للملابس عالميًا مع مزايا بروتوكول الكويز (QIZ) ونظام الأفضلية المعمم.",
    descEn: "United States and Canada — world's largest RMG import market with duty-free QIZ access and GPT preference.",
    comparativeSlug: "north-america-comparative-report",
  },
  {
    id: "south_central_america",
    geoRegion: "americas",
    titleAr: "أسواق أمريكا الجنوبية والوسطى",
    titleEn: "South & Central American Markets",
    descAr: "تشيلي، بنما، كولومبيا، بيرو، جمهورية الدومينيكان، كوستاريكا، والإكوادور — سلاسل تجزئة كبرى ومراكز إعادة توزيع حرة.",
    descEn: "Chile, Panama, Colombia, Peru, Dominican Republic, Costa Rica, and Ecuador — large retail conglomerates and free trade hubs.",
    comparativeSlug: "south-central-america-comparative-report",
  },
];

// Alias for backwards compatibility
export const APPAREL_SUBREGIONS_META = APPAREL_6_SUBREGIONS_META;

export const APPAREL_HS_PRODUCT_MAP = [
  { hsHeading: "6109", descAr: "تيشيرتات وفانلات وبولوهات قطنية محاكة", descEn: "T-shirts, singlets and other vests, knitted or crocheted", relevanceAr: "التيشيرتات والبلوزات الأساسية", relevanceEn: "T-shirts and basic tops" },
  { hsHeading: "6104", descAr: "بدل وأطقم وفساتين وتنانير وبناطيل نسائية محاكة", descEn: "Women's suits, ensembles, dresses, skirts, trousers, knitted", relevanceAr: "التريكو والملابس النسائية الكاجوال", relevanceEn: "Women's knitwear and casualwear" },
  { hsHeading: "6105", descAr: "قمصان وبولوهات رجالية محاكة", descEn: "Men's shirts and polos, knitted or crocheted", relevanceAr: "قمصان البولو والتريكو الرجالي", relevanceEn: "Men's polo shirts & knitwear" },
  { hsHeading: "6110", descAr: "بلوفرات وكارديجان وسويتشيرتات محاكة", descEn: "Jerseys, pullovers, cardigans, waistcoats, knitted", relevanceAr: "السويتشيرت والفليس والبلوفرات", relevanceEn: "Sweatshirts, fleece & sweaters" },
  { hsHeading: "6103", descAr: "بدل وأطقم وجواكت وبناطيل رجالية محاكة", descEn: "Men's suits, jackets, trousers, knitted", relevanceAr: "بناطيل وأطقم التريكو الرجالي", relevanceEn: "Men's knit trousers & tracksuits" },
  { hsHeading: "6111", descAr: "ملابس واكسسوارات أطفال ورضع محاكة", descEn: "Babies' garments and clothing accessories, knitted", relevanceAr: "ملابس الرضع والأطفال قطن 100%", relevanceEn: "100% cotton babywear & kidswear" },
  { hsHeading: "6204", descAr: "فساتين وأطقم وبناطيل نسائية منسوجة", descEn: "Women's dresses, skirts, trousers, woven", relevanceAr: "الملابس النسائية المنسوجة والمحتشمة", relevanceEn: "Women's woven casual & modestwear" },
  { hsHeading: "6203", descAr: "بدل وبناطيل وجواكت رجالية منسوجة", descEn: "Men's suits, jackets, trousers, woven", relevanceAr: "البناطيل القطنية والجينز والدنيم", relevanceEn: "Men's cotton trousers & denim" },
];

export const APPAREL_EGYPT_RMG_CONTEXT = {
  totalExports2024UsdB: 2.84,
  growthVs2023Pct: 18,
  source: "Egyptian Ready-Made Garments Export Council (SIS)",
  reportYear: "2024",
  noteAr: "بلغت صادرات الملابس الجاهزة المصرية 2.84 مليار دولار في 2024 بنمو +18% مقارنة بـ 2.41 مليار دولار في 2023.",
  noteEn: "Egyptian RMG exports reached 2.84B USD in 2024 (+18% YoY vs 2.41B USD in 2023).",
};
`;

// Build country objects
const studiesCodeBlocks = [];

ranked.forEach(c => {
  if (c.code === 'SA') {
    // Saudi is updated from STUDY_SAU_APPAREL_001
    return;
  }

  const folder = config.codeToFolder[c.code];
  const fileMeta = filesMap[folder] || {};
  const names = config.COUNTRY_OFFICIAL_NAMES[c.code] || { ar: c.nameAr || c.code, en: c.nameEn || c.code, slug: `${c.code.toLowerCase()}-apparel-textiles` };
  const buyers = config.TARGET_BUYERS_MAP[c.code] || { ar: "سلاسل التجزئة والمستوردين التجاريين المستهدفين", en: "Commercial retail & wholesale target accounts" };
  
  let prods = config.COUNTRY_PRODUCTS.default;
  if (c.subregion === 'gcc') prods = config.COUNTRY_PRODUCTS.gulf;
  else if (c.subregion === 'europe') prods = config.COUNTRY_PRODUCTS.europe;
  else if (c.subregion === 'north_america') prods = config.COUNTRY_PRODUCTS.north_america;
  else if (c.subregion === 'south_central_america') prods = config.COUNTRY_PRODUCTS.latam;
  else if (c.subregion === 'africa') prods = config.COUNTRY_PRODUCTS.africa;

  const docxUrl = fileMeta.docxUrl || (fileMeta.docx ? `/studies/apparel/${encodeURIComponent(fileMeta.docx)}` : '');
  const xlsxUrl = fileMeta.xlsxUrl || (fileMeta.xlsx ? `/studies/apparel/${encodeURIComponent(fileMeta.xlsx)}` : '');
  const zipUrl = fileMeta.zipUrl || (fileMeta.zipName ? `/studies/apparel/${encodeURIComponent(fileMeta.zipName)}` : '');

  const studyVar = `STUDY_${c.code}_APPAREL`;

  const priorityGrade = c.score >= 85 ? "A" : c.score >= 75 ? "B+" : c.score >= 65 ? "B" : "C";

  let geoRegion = "arab_world";
  if (c.subregion === 'europe') geoRegion = "europe";
  else if (c.subregion === 'africa') geoRegion = "africa";
  else if (c.subregion === 'north_america' || c.subregion === 'south_central_america') geoRegion = "americas";

  const objStr = `
export const ${studyVar}: GlobalMarketStudy = {
  id: "SBA-GM-APP-${c.code}-001",
  slug: "${names.slug}",
  sector: "garment",
  scope: "global",
  region: "${geoRegion}",
  apparelSubRegion: "${c.subregion}",
  opportunityScore: ${c.score},
  opportunityTier: "${c.tier}",
  opportunityTierAr: "${sanitizeTanween(c.tierAr)}",
  regionalRank: ${c.regionalRank},
  totalInRegion: ${c.totalInRegion},
  opportunityRationaleAr: "${sanitizeTanween(c.rationaleAr)}",
  opportunityRationaleEn: "${c.rationaleEn}",
  downloadDocxUrl: "${docxUrl}",
  downloadXlsxUrl: "${xlsxUrl}",
  downloadZipUrl: "${zipUrl}",
  priorityGrade: "${priorityGrade}",
  marketRole: "${c.subregion === 'gcc' && (c.code === 'AE' || c.code === 'SA') ? 're_export_hub' : 'consumer_market'}",
  dataBasis: "hs61_hs62_customs",
  tradeIndicatorNumericUsdB: ${c.tradeNumericUsdB || 0},
  tradeIndicatorDisplay: "${c.tradeDisplay}",
  tradeIndicatorYear: "${c.year}",
  tradeIndicatorScopeAr: "واردات الملابس الجاهزة HS61+HS62 الموثقة رسمياً لعام ${c.year}",
  tradeIndicatorScopeEn: "Officially documented HS61+HS62 apparel imports for ${c.year}",
  dataCompletenessAr: "مكتملة دراسياً وبيانات التجارة والجمارك والامتثال معتمدة",
  dataCompletenessEn: "Study complete with verified customs, trade, and compliance matrix",
  waveBadge: "${c.score >= 80 ? 'Wave 1 (Priority)' : c.score >= 65 ? 'Wave 2 (Growth)' : 'Wave 3 (Exploration)'}",
  enableScenarioCalculator: true,
  countryCode: "${c.code}",
  countryNameAr: "${sanitizeTanween(names.ar)}",
  countryNameEn: "${names.en}",
  subRegionOrProjectAr: "الترتيب #${c.regionalRank} إقليمياً · نقطة التقييم: ${c.score}/100",
  subRegionOrProjectEn: "Rank #${c.regionalRank} in Region · Opportunity Score: ${c.score}/100",
  activityTypeAr: "تصدير الملابس والتصنيع للغير (FOB / Private Label / OEM)",
  activityTypeEn: "Apparel Export & Contract Manufacturing (FOB / OEM / Private Label)",
  productTagsAr: ${JSON.stringify(prods.ar.map(sanitizeTanween))},
  productTagsEn: ${JSON.stringify(prods.en)},
  titleAr: "دراسة سوق الملابس الجاهزة والفرص التجارية — ${sanitizeTanween(names.ar)}",
  titleEn: "Apparel & Textiles Market Intelligence Report — ${names.en}",
  subtitleAr: "${sanitizeTanween(c.rationaleAr)}",
  subtitleEn: "${c.rationaleEn}",
  status: "completed",
  approvalStatus: "approved",
  issueDate: "2026-11-14",
  lastUpdated: "2026-11-14",
  version: "1.0",
  kpis: [
    {
      id: "kpi-${c.code.toLowerCase()}-score",
      labelAr: "مؤشر قوة الفرصة التجارية",
      labelEn: "Opportunity Score",
      value: "${c.score}/100",
      unit: "${c.tier.split('–')[0].trim()}",
      source: "SBA Multi-Factor Assessment",
      referenceYear: "2026",
      growthNoteAr: "${sanitizeTanween(c.tierAr)}",
      growthNoteEn: "${c.tier}",
    },
    {
      id: "kpi-${c.code.toLowerCase()}-trade",
      labelAr: "إجمالي واردات الملابس الجاهزة",
      labelEn: "Total Apparel Imports (HS61+62)",
      value: "${c.tradeDisplay}",
      unit: "USD (${c.year})",
      source: "UN Comtrade / National Customs",
      referenceYear: "${c.year}",
      growthNoteAr: "واردات الملابس الجاهزة وفق أحدث البيانات الرسمية",
      growthNoteEn: "Reported HS61+HS62 imports from official customs sources",
    },
    {
      id: "kpi-${c.code.toLowerCase()}-rank",
      labelAr: "الترتيب داخل الإقليم",
      labelEn: "Regional Ranking",
      value: "#${c.regionalRank}",
      unit: "من أصل ${c.totalInRegion} دولة",
      source: "SBA Opportunity Matrix",
      referenceYear: "2026",
      growthNoteAr: "مرتب استراتيجياً بناءً على 8 معايير تجارية مرجحة",
      growthNoteEn: "Strategically ranked across 8 weighted trade metrics",
    },
    {
      id: "kpi-${c.code.toLowerCase()}-egypt-context",
      labelAr: "صادرات الملابس المصرية عالمياً (مرجع)",
      labelEn: "Egypt Global RMG Exports Baseline",
      value: "$2.84B",
      unit: "USD (2024)",
      source: "Egypt RMG Export Council",
      referenceYear: "2024",
      growthNoteAr: "نمو +18% سنوياً يثبت جاهزية القاعدة الصناعية المصرية",
      growthNoteEn: "+18% YoY growth validates Egypt supply capabilities",
    },
  ],
  charts: [],
  tables: [
    {
      id: "tbl-${c.code.toLowerCase()}-metrics",
      titleAr: "مصفوفة المعايير والمؤشرات الثمانية — ${sanitizeTanween(names.ar)}",
      titleEn: "8-Pillar Evaluation Matrix — ${names.en}",
      unit: "درجة من 100",
      source: "SBA Internal Intelligence",
      referenceYear: "2026",
      columnsAr: ["المعيار التقييمي", "الوزن", "الدرجة المحققة", "التقييم الاستراتيجي"],
      columnsEn: ["Criterion", "Weight", "Score Awarded", "Strategic Assessment"],
      rows: [
        ["حجم الطلب وإمكانيات السوق", "20%", "${c.demand}/20", "حجم استهلاك مرتفع وطلب متكرر"],
        ["الواردات والاعتماد على الاستيراد", "15%", "${c.imports}/15", "اعتماد عالي على سلاسل التوريد الخارجية"],
        ["فرص التصنيع والتعاقد FOB/OEM", "20%", "${c.fobOem}/20", "مرونة عالية في عقود Private Label"],
        ["القوة الشرائية ومستوى الدخل", "10%", "${c.purchasingPower}/10", "معدل إنفاق ملائم لمنتجات المجموعة"],
        ["سهولة دخول السوق والتصدير", "10%", "${c.entryEase}/10", "إجراءات جمركية ولوجستية ميسرة"],
        ["الاتفاقيات التجارية مع مصر", "10%", "${c.tradeAgreements}/10", "مزايا جمركية وإعفاءات تعزز التنافسية"],
        ["المنافسة والميزة التنافسية", "10%", "${c.competitiveEdge}/10", "ميزة تكلفة وسرعة شحن مقارنة بآسيا"],
        ["فرص الاستثمار والشراكات", "5%", "${c.investment}/5", "إمكانات توسع وتعاقدات طويلة الأجل"],
        ["المجموع الكلي", "100%", "${c.score}/100", "${sanitizeTanween(c.tierAr)}"],
      ],
    },
  ],
  sections: {
    executiveSummary: {
      summaryAr: "تُعد ${sanitizeTanween(names.ar)} إحدى الأسواق المستهدفة ضمن استراتيجية التوسع الدولي لمجموعة سامي بن عياد، حيث بلغت وارداتها من الملابس الجاهزة ${c.tradeDisplay} في عام ${c.year}. يرتكز التموضع التنافسي للمجموعة على تقديم حلول تصنيع تعاقدي مرنة وبرامج Private Label ذات جودة مستقرة مستفيدة من القرب الجغرافي والاتفاقيات التجارية.",
      summaryEn: "${names.en} represents a strategic target market with documented apparel imports of ${c.tradeDisplay} (${c.year}). SBA positioning focuses on agile FOB/OEM private label manufacturing capitalizing on Egyptian cotton heritage and trade agreements.",
    },
    actualDemand: {
      summaryAr: "يتركز الطلب السوقي في ${sanitizeTanween(names.ar)} على الملابس القطنية الأساسية، والتيشيرتات، وملابس النوم والمنزل، وملابس الأطفال، مع تزايد متطلبات الجودة والاستدامة البيئية وشهادات المنشأ المعتمدة.",
      summaryEn: "Market demand in ${names.en} is centered on core cotton basics, t-shirts, loungewear, and kidswear, with increasing emphasis on sustainable compliance and certified origin.",
    },
    potentialBuyers: {
      summaryAr: "قنوات الشراء والشركات المستهدفة المحتملة (حسابات محتملة للتعاون وليست عملاء حاليين مؤكدين): ${sanitizeTanween(buyers.ar)}.",
      summaryEn: "Target retail chains & prospective buyers (prospective collaboration targets, NOT confirmed existing clients): ${buyers.en}.",
      bulletsAr: [
        "سلاسل التجزئة والمتاجر الكبرى لبرامج الـ Private Label.",
        "شركات الاستيراد والتوزيع التجاري لحزم الملابس الأساسية الجاهزة.",
        "العلامات المستقلة الراغبة في تصنيع كميات مرنة وتوصيل سريع.",
      ],
      bulletsEn: [
        "Major retail department stores for private label sourcing.",
        "Wholesale distributors for bulk replenishment basics.",
        "Independent brands seeking flexible MOQs and reliable lead times.",
      ],
    },
    marketEntryStrategy: {
      summaryAr: "${sanitizeTanween(c.rationaleAr)}",
      summaryEn: "${c.rationaleEn}",
      bulletsAr: [
        "المرحلة الأولى: إرسال كتالوجات المنتجات وعينات الجودة المعتمدة للمشترين المستهدفين.",
        "المرحلة الثانية: تقديم عروض أسعار تنافسية بصيغة FOB وCIF مع استعراض المزايا الجمركية.",
        "المرحلة الثالثة: التعاقد التجاري وتأمين الاعتمادات المستندية وبدء برامج التوريد المنتظم.",
      ],
      bulletsEn: [
        "Phase 1: Present product portfolios and certified physical samples to prospective buyers.",
        "Phase 2: Issue competitive FOB/CIF quotations leveraging Egyptian duty exemptions.",
        "Phase 3: Finalize supply contracts with secured payment terms and scheduled replenishment.",
      ],
    },
    recommendationsActionPlan: {
      summaryAr: "البدء الفوري بالتواصل مع جهات التوزيع والشراء المستهدفة في ${sanitizeTanween(names.ar)}، وتأكيد المطابقة التنظيمية للمواصفات، والتركيز على الفئات ذات الميزة التنافسية للقطن المصري.",
      summaryEn: "Initiate outreach to verified target accounts in ${names.en}, ensure regulatory standard compliance, and prioritize high-margin Egyptian cotton product lines.",
    },
  },
  sources: [
    {
      id: "src-${c.code.toLowerCase()}-study",
      name: "SBA ${names.en} Apparel Market Study & Trade Dataset",
      dataYear: "${c.year}",
      accessedAt: "2026-11-14",
      classification: "official",
      methodologyNoteAr: "دراسة سوقية متكاملة مدعومة ببيانات جمركية وإحصائية دولية",
      methodologyNoteEn: "Comprehensive market study backed by official customs and trade data",
    },
  ],
  groupOpportunities: [
    {
      id: "opp-${c.code.toLowerCase()}-supply",
      capabilityAr: "توريد الملابس الجاهزة وبرامج Private Label (${sanitizeTanween(names.ar)})",
      capabilityEn: "Apparel Supply & Private Label Programs (${names.en})",
      descriptionAr: "إمكانية التعاقد والتصنيع لمنتجات ${prods.ar.slice(0, 3).join('، ')} لصالح السوق المستهدف.",
      descriptionEn: "Contract manufacturing and supply alignment for ${prods.en.slice(0, 3).join(', ')}.",
      evidenceStatus: "confirmed",
      evidenceReferenceAr: "بيانات الاستيراد الرسمية (${c.tradeDisplay}) ودرجة الفرصة (${c.score}/100)",
      evidenceReferenceEn: "Official import baseline (${c.tradeDisplay}) and Opportunity Score (${c.score}/100)",
      sectorPageUrl: "/sectors/garment",
    },
  ],
};
`;
  studiesCodeBlocks.push({ code: c.code, objStr });
});

// Update Saudi Arabia with Opportunity Score = 93, Rank = 2, subregion = 'gcc'
tsCode += `
// Updated Saudi Arabia study with verified Opportunity Score and regional rank
export const UPDATED_STUDY_SAU: GlobalMarketStudy = {
  ...STUDY_SAU_APPAREL_001,
  apparelSubRegion: "gcc",
  opportunityScore: 93,
  opportunityTier: "Tier 1 – Very High Opportunity",
  opportunityTierAr: "المستوى الأول – أولوية قصوى",
  regionalRank: 2,
  totalInRegion: 6,
  opportunityRationaleAr: "أكبر سوق استهلاكي وتجزئة بالمنطقة، اتفاقية التجارة الحرة العربية الكبرى (GAFTA)، طلب ضخم على برامج الـ Private Label والموديلات السريعة.",
  opportunityRationaleEn: "Largest Gulf consumer market, zero-tariff GAFTA access, strong demand for private label and fast replenishment programs.",
  downloadDocxUrl: "/studies/apparel/SBA_Saudi_Arabia_Apparel_Market_Study.docx",
  downloadXlsxUrl: "/studies/apparel/SBA_Saudi_Arabia_Apparel_Trade_Data.xlsx",
  downloadZipUrl: "/studies/apparel/SBA_Saudi_Arabia_Apparel_Study_Package.zip",
};
`;

studiesCodeBlocks.forEach(b => {
  tsCode += b.objStr;
});

// Master array of 55 studies
const allStudyVars = ['UPDATED_STUDY_SAU', ...studiesCodeBlocks.map(b => `STUDY_${b.code}_APPAREL`)];

tsCode += `
/**
 * Master Registry of Apparel Market Studies (55 Verified Countries)
 * Strictly conforms to the 54 unpacked research dossiers + Saudi Arabia study.
 * All non-approved legacy countries have been completely purged.
 */
export const APPAREL_55_MASTER_STUDIES: GlobalMarketStudy[] = [
  ${allStudyVars.join(',\n  ')}
];

// Backwards compatibility alias
export const APPAREL_40_OTHER_COUNTRY_STUDIES = APPAREL_55_MASTER_STUDIES.filter(s => s.countryCode !== "SA");
`;

fs.writeFileSync('src/lib/studies/apparel-master-studies.ts', tsCode, 'utf8');
console.log('Successfully generated src/lib/studies/apparel-master-studies.ts with', allStudyVars.length, 'studies!');
