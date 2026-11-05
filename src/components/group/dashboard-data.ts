/** Single source for the homepage business dashboard. Figures are reported company figures — never sum or annualise them. */
export type SectorId = "construction" | "environmental" | "garment" | "food";
export type SectorFilter = "all" | SectorId;
type T = { en: string; ar: string };

export const dashboardSectors: { id: SectorId; name: T; short: T }[] = [
  { id: "construction", name: { en: "Contracting & Real Estate Development", ar: "المقاولات والتطوير العقاري" }, short: { en: "Contracting", ar: "المقاولات" } },
  { id: "environmental", name: { en: "Environmental Solutions & Sustainability", ar: "الحلول البيئية والاستدامة" }, short: { en: "Environment", ar: "البيئة" } },
  { id: "garment", name: { en: "Textile & Garment Manufacturing", ar: "صناعة النسيج والملابس" }, short: { en: "Garment Manufacturing", ar: "تصنيع الملابس" } },
  { id: "food", name: { en: "Natural Products", ar: "المنتجات الطبيعية" }, short: { en: "Natural Products", ar: "المنتجات الطبيعية" } },
];

/** Reported business volume over a stated period (USD). Food is intentionally absent until verified. */
export const businessVolumes: { sector: SectorId; period: string; usd: number }[] = [
  { sector: "construction", period: "2013–2024", usd: 8_000_000 },
  { sector: "environmental", period: "2018–2024", usd: 2_000_000 },
  { sector: "garment", period: "2023–2025", usd: 750_000 },
];

export const achievements: { sector: SectorId; value: string; label: T; body: T }[] = [
  { sector: "construction", value: "60+", label: { en: "Projects Executed", ar: "مشروعًا منفّذًا" }, body: { en: "Documented project execution experience across the contracting and real estate development sector.", ar: "خبرة موثّقة في تنفيذ المشروعات بقطاع المقاولات والتطوير العقاري." } },
  { sector: "environmental", value: "40+", label: { en: "Projects Executed", ar: "مشروعًا منفّذًا" }, body: { en: "Environmental and technical projects delivered across relevant fields of expertise.", ar: "مشروعات بيئية وفنية نُفّذت في مجالات الخبرة ذات الصلة." } },
  { sector: "garment", value: "2,700+", label: { en: "Apparel Styles Developed", ar: "موديل ملابس مطوَّر" }, body: { en: "Women’s and children’s apparel styles developed through product development and garment manufacturing activities.", ar: "موديلات ملابس نسائية وأطفال طُوّرت عبر أنشطة تطوير المنتجات وتصنيع الملابس." } },
];

export type Market = { name: T; kind: "country" | "region"; x?: number | undefined; y?: number | undefined };
const m = (en: string, ar: string, kind: Market["kind"], x?: number, y?: number): Market => ({ name: { en, ar }, kind, x, y });
const egypt = m("Egypt", "مصر", "country", 57, 47);
const africa = m("African Markets", "الأسواق الأفريقية", "region");
const arab = m("Arab Markets", "الأسواق العربية", "region");

export const targetMarkets: Record<SectorId, Market[]> = {
  construction: [egypt],
  environmental: [egypt, m("Gulf Countries", "دول الخليج", "region"), m("Arab Countries", "الدول العربية", "region"), m("African Countries", "الدول الأفريقية", "region")],
  garment: [egypt, m("Turkey", "تركيا", "country", 58, 30), m("France", "فرنسا", "country", 41, 22), m("Italy", "إيطاليا", "country", 48, 28), m("Kuwait", "الكويت", "country", 67, 42), m("Libya", "ليبيا", "country", 49, 46), m("Algeria", "الجزائر", "country", 39, 45), m("Morocco", "المغرب", "country", 31, 40), m("Mauritania", "موريتانيا", "country", 24, 55), africa],
  food: [arab, africa],
};

export const activities: Record<SectorId, { items: T[]; note?: T }> = {
  construction: { items: [
    { en: "Turnkey General Contracting", ar: "المقاولات العامة المتكاملة" },
    { en: "Civil & Concrete Structural Works", ar: "الأعمال المدنية والخرسانية" },
    { en: "Architectural & Interior Fit-Out", ar: "الأعمال المعمارية والتشطيبات الفاخرة" },
    { en: "Electromechanical Works (MEP)", ar: "الأعمال الكهروميكانيكية المتكاملة" },
    { en: "Infrastructure & Utilities", ar: "تطوير البنية التحتية والمرافق" },
    { en: "Industrial Facilities Construction", ar: "الإنشاءات الصناعية والمباني الجاهزة" },
    { en: "Healthcare & Medical Facilities", ar: "المنشآت الطبية والمستشفيات التخصصية" },
    { en: "Oil, Gas & Energy Facilities", ar: "منشآت ومحطات النفط والغاز والطاقة" },
    { en: "Commercial & Administrative Complexes", ar: "المجمعات الإدارية والمراكز التجارية" },
    { en: "Residential & Real Estate Development", ar: "التطوير العقاري والمجمعات السكنية" },
    { en: "Finishing & Interior Decoration", ar: "التشطيبات والديكورات الداخلية" },
    { en: "Engineering Project Management", ar: "إدارة المشروعات والإشراف الهندسي" },
  ] },
  environmental: { items: [
    { en: "Environmental Impact Assessment (EIA)", ar: "تقييم الأثر البيئي (EIA)" },
    { en: "Integrated ESIA Studies", ar: "التقييم البيئي والمجتمعي (ESIA)" },
    { en: "Carbon Footprint Assessment", ar: "حساب البصمة الكربونية" },
    { en: "Carbon Emissions Reporting", ar: "تقارير الإفصاح عن الانبعاثات" },
    { en: "Environmental Monitoring & Measurements", ar: "القياسات والرصد البيئي الميداني" },
    { en: "Integrated Waste Management", ar: "إدارة المخلفات المتكاملة" },
    { en: "Hazardous Waste Management", ar: "إدارة المخلفات الخطرة والكيماويات" },
    { en: "Solid Waste Recycling", ar: "تدوير المخلفات واسترداد الموارد" },
    { en: "Waste-to-Energy Solutions (WtE)", ar: "تحويل المخلفات إلى طاقة (WtE)" },
    { en: "Biogas Plants & Anaerobic Digestion", ar: "محطات الغاز الحيوي (البيوجاز)" },
    { en: "Advanced Renewable Energy", ar: "حلول الطاقة المتجددة" },
    { en: "Environmental Economic Studies", ar: "الدراسات الاقتصادية البيئية" },
    { en: "Sustainability & ESG Consulting", ar: "استشارات الاستدامة واستراتيجيات ESG" },
    { en: "SDGs Development Consulting", ar: "استشارات أهداف التنمية المستدامة" },
    { en: "ISO 14001 & 50001 Systems Support", ar: "تأهيل أنظمة الأيزو البيئية وإدارة الطاقة" },
    { en: "Integrated QHSE Solutions", ar: "حلول الجودة والصحة والسلامة والبيئة" },
    { en: "EHS Digital Platforms & Software", ar: "المنظومات والحلول الرقمية للسلامة والبيئة" },
    { en: "Biotechnology & Bioremediation", ar: "التكنولوجيا الحيوية والمعالجة البيولوجية" },
    { en: "Applied Environmental R&D", ar: "البحث والتطوير العلمي البيئي التطبيقي" },
  ] },
  garment: { items: [
    { en: "OEM Partner Manufacturing", ar: "التصنيع كشريك للمعدات الأصلية (OEM)" },
    { en: "ODM Design & Co-Development", ar: "التصميم والتصنيع المشترك (ODM)" },
    { en: "Private Label Turnkey Programs", ar: "التصنيع للعلامات التجارية الخاصة" },
    { en: "Full FOB Integrated Manufacturing", ar: "برامج التصنيع الشامل والتصدير (FOB)" },
    { en: "CAD Pattern Engineering & Grading", ar: "هندسة الباترون وتطوير المنتجات" },
    { en: "Rapid Prototyping & Sampling", ar: "صناعة العينات والنماذج الأولية السريعة" },
    { en: "Commercial Bulk Production", ar: "الإنتاج الصناعي الكمي المتوسع" },
    { en: "Custom Fabric Development & Dyeing", ar: "تطوير وتوريد الأقمشة والصباغة" },
  ] },
  food: { items: [
    { en: "Natural Honey & Bee Products", ar: "عسل النحل الطبيعي النقي ومنتجات النحل" },
    { en: "Premium Table Olives", ar: "زيتون المائدة الفاخر وأصنافه" },
    { en: "Extra Virgin Cold-Pressed Olive Oil", ar: "زيت الزيتون البكر الممتاز المعصور على البارد" },
    { en: "Medjool & Siwi Oasis Dates", ar: "التمور الفاخرة (المجدول والسيوية)" },
    { en: "Organic Dried Herbs & Botanicals", ar: "الأعشاب الطبية والعطرية المجففة" },
    { en: "Natural Spray-Dried Fruit Powders", ar: "بودرة العصائر الطبيعية والمكونات الغذائية" },
  ] },
};

export const matchesFilter = (filter: SectorFilter, sector: SectorId) => filter === "all" || filter === sector;

export function formatUsd(value: number, ar: boolean) {
  return `${ar ? "" : "USD "}${value.toLocaleString("en-US")}${ar ? " دولار" : ""}`;
}


