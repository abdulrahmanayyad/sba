/** Single source for the homepage business dashboard. Figures are reported company figures — never sum or annualise them. */
export type SectorId = "construction" | "environmental" | "garment" | "food";
export type SectorFilter = "all" | SectorId;
type T = { en: string; ar: string };

export const dashboardSectors: { id: SectorId; name: T; short: T }[] = [
  { id: "construction", name: { en: "Contracting & Real Estate Development", ar: "المقاولات والتطوير العقاري" }, short: { en: "Contracting", ar: "المقاولات" } },
  { id: "environmental", name: { en: "Environmental Solutions & Sustainability", ar: "الحلول البيئية والاستدامة" }, short: { en: "Environment", ar: "البيئة" } },
  { id: "garment", name: { en: "Textile & Garment Manufacturing", ar: "صناعة النسيج والملابس" }, short: { en: "Garment Manufacturing", ar: "تصنيع الملابس" } },
  { id: "food", name: { en: "Natural Products & Food Trading", ar: "المنتجات الطبيعية وتجارة الأغذية" }, short: { en: "Food Products", ar: "المنتجات الغذائية" } },
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
  { sector: "garment", value: "20,000+", label: { en: "Apparel Styles Developed", ar: "موديل ملابس مطوَّر" }, body: { en: "Women’s and children’s apparel styles developed through product development and garment manufacturing activities.", ar: "موديلات ملابس نسائية وأطفال طُوّرت عبر أنشطة تطوير المنتجات وتصنيع الملابس." } },
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
    { en: "Medical Facilities & Hospital Construction", ar: "إنشاء المنشآت الطبية والمستشفيات" },
    { en: "General Construction & Development", ar: "الإنشاءات العامة والتطوير" },
    { en: "Interior Design & Executive Design Drawings", ar: "التصميم الداخلي والرسومات التنفيذية" },
    { en: "Residential Units & Housing Projects", ar: "الوحدات السكنية ومشروعات الإسكان" },
    { en: "Administrative Buildings & Shopping Malls", ar: "المباني الإدارية والمراكز التجارية" },
    { en: "Electromechanical Systems", ar: "الأعمال الكهروميكانيكية" },
    { en: "Interior & Exterior Finishing", ar: "التشطيبات الداخلية والخارجية" },
    { en: "Infrastructure Works", ar: "أعمال البنية التحتية" },
    { en: "Gas, Oil & Petroleum Facilities and Station Construction", ar: "إنشاء منشآت ومحطات الغاز والنفط والبترول" },
  ] },
  environmental: { items: [
    { en: "Renewable Energy", ar: "الطاقة المتجددة" }, { en: "Bioenergy", ar: "الطاقة الحيوية" }, { en: "Biogas", ar: "الغاز الحيوي" }, { en: "Biofuels", ar: "الوقود الحيوي" },
    { en: "Waste Management", ar: "إدارة المخلفات" }, { en: "Oil, Gas & Energy", ar: "النفط والغاز والطاقة" }, { en: "Occupational Health & Safety Systems", ar: "نظم السلامة والصحة المهنية" },
    { en: "Environmental Studies & Consultancy", ar: "الدراسات والاستشارات البيئية" }, { en: "Water & Wastewater Treatment", ar: "معالجة المياه والصرف" },
    { en: "Research, Development & Emerging Technologies", ar: "البحث والتطوير والتقنيات الناشئة" }, { en: "Sustainability & Climate Change", ar: "الاستدامة وتغيّر المناخ" }, { en: "Digital Technologies", ar: "التقنيات الرقمية" },
  ] },
  garment: { items: [
    { en: "B2B · Manufacturing Contracts with Local and International Brands", ar: "B2B · عقود تصنيع مع علامات محلية ودولية" },
    { en: "B2B · Wholesale Supply to Retailers and Trade Buyers", ar: "B2B · توريد بالجملة لتجار التجزئة والمشترين" },
    { en: "B2B · Supply to Commercial Stores and Retail Outlets", ar: "B2B · التوريد للمتاجر ومنافذ البيع" },
    { en: "Retail · Retail Garment Sales", ar: "تجزئة · بيع الملابس بالتجزئة" },
  ] },
  food: { items: [
    { en: "Natural and Premium Honey Products", ar: "منتجات العسل الطبيعي والفاخر" }, { en: "Olives & Olive Oil", ar: "الزيتون وزيت الزيتون" },
    { en: "Premium Dates and Date Varieties", ar: "التمور الفاخرة وأصنافها" }, { en: "Date Molasses & Date Jam", ar: "دبس التمر ومربى التمر" },
    { en: "Herbs & Spices", ar: "الأعشاب والتوابل" }, { en: "Natural Powdered Beverages", ar: "المشروبات الطبيعية البودرة" },
    { en: "Food Products Sourcing, Trading & Export", ar: "توريد المنتجات الغذائية وتجارتها وتصديرها" },
  ] },
};

export const matchesFilter = (filter: SectorFilter, sector: SectorId) => filter === "all" || filter === sector;

export function formatUsd(value: number, ar: boolean) {
  return `${ar ? "" : "USD "}${value.toLocaleString("en-US")}${ar ? " دولار" : ""}`;
}


