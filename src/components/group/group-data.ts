import apparel from "@/assets/sector-apparel.jpg";
import construction from "@/assets/sector-construction.jpg";
import enviro from "@/assets/sector-enviro.jpg";
import research from "@/assets/sector-research.jpg";
import education from "@/assets/sector-education.jpg";
import food from "@/assets/sector-food.jpg";

export type SectorSlug = "garment" | "construction" | "environmental" | "research" | "education" | "food";

export interface Division {
  slug: SectorSlug;
  name: string;
  nameAr: string;
  company: string;
  companyAr: string;
  image: string;
  tagline: string;
  taglineAr: string;
  body: string;
  bodyAr: string;
  points: { en: string; ar: string }[];
  link?: string;
}

export const divisions: Division[] = [
  {
    slug: "garment",
    name: "Garment & Textile Manufacturing",
    nameAr: "تصنيع الملابس والمنسوجات",
    company: "SBA · JZRA FASHION",
    companyAr: "SBA · JZRA FASHION",
    image: apparel,
    tagline: "We manufacture what fashion imagines",
    taglineAr: "نصنع ما تتخيله الموضة",
    body: "An integrated textile and garment manufacturing group: fabric production, garment manufacturing, product development, private label, contract manufacturing, FOB programs and export coordination — specialised in women's and children's wear.",
    bodyAr: "مجموعة متكاملة لتصنيع الأقمشة والملابس: إنتاج الأقمشة، وتصنيع الملابس، وتطوير المنتجات، والعلامات الخاصة، والتصنيع التعاقدي، وبرامج التسليم على ظهر السفينة، وتنسيق التصدير — مع تخصص في ملابس النساء والأطفال.",
    points: [
      { en: "Garment & fabric factories", ar: "مصانع الملابس والأقمشة" },
      { en: "Private label · OEM · FOB", ar: "علامات خاصة · تصنيع للمصنّع · تسليم على ظهر السفينة" },
      { en: "20,000+ models developed", ar: "أكثر من 20,000 موديل تم تطويرها" },
      { en: "Own brand JZRA in Egypt, Türkiye, KSA", ar: "علامة JZRA الخاصة في مصر وتركيا والسعودية" },
    ],
    link: "/apparel",
  },
  {
    slug: "construction",
    name: "Construction & Contracting",
    nameAr: "المقاولات والإنشاءات",
    company: "El Dakhel Contracting & Real Estate",
    companyAr: "الداخ للمقاولات والاستثمار العقاري",
    image: construction,
    tagline: "Integrated contracting and real-estate development",
    taglineAr: "مقاولات متكاملة وتطوير عقاري",
    body: "General contracting, construction, finishing and real-estate development across medical, residential, commercial, industrial, petroleum and service sectors in Egypt.",
    bodyAr: "مقاولات عامة وإنشاءات وتشطيبات وتطوير عقاري في القطاعات الطبية والسكنية والتجارية والصناعية والبترولية والخدمية في مصر.",
    points: [
      { en: "57+ documented projects", ar: "أكثر من 57 مشروعًا موثقًا" },
      { en: "EGP 400.5M recorded turnover (2013–2024)", ar: "حجم أعمال مسجل 400.5 مليون جنيه (2013–2024)" },
      { en: "Hospitals, MEP, fire fighting, elevators", ar: "مستشفيات وأعمال MEP ومكافحة حريق ومصاعد" },
      { en: "Villas, malls and administrative buildings", ar: "فيلات ومولات ومباني إدارية" },
    ],
  },
  {
    slug: "environmental",
    name: "Environmental Solutions",
    nameAr: "الحلول البيئية",
    company: "EnviroTaqa · Sustainable Environmental Services & Renewable Energy",
    companyAr: "إنفيروطاقة · خدمات بيئية مستدامة وطاقة متجددة",
    image: enviro,
    tagline: "Turning waste into value and energy",
    taglineAr: "نحوّل النفايات إلى قيمة وطاقة",
    body: "Specialised solutions in renewable energy, waste management, water and sustainability across Egypt and the Middle East — from feasibility studies to scalable products, with project volumes up to 10M USD.",
    bodyAr: "حلول متخصصة في الطاقة المتجددة وإدارة النفايات والمياه والاستدامة في مصر والشرق الأوسط — من دراسات الجدوى إلى منتجات قابلة للتوسع، بأحجام مشروعات تصل إلى 10 مليون دولار.",
    points: [
      { en: "Solar & building energy systems", ar: "أنظمة الطاقة الشمسية وطاقة المباني" },
      { en: "Biogas, biomass, waste-to-energy", ar: "غاز حيوي وكتلة حيوية وتحويل النفايات إلى طاقة" },
      { en: "Compost, biochar & fertiliser", ar: "سماد عضوي وبيوتشار وأسمدة" },
      { en: "Environmental project volume up to 10M USD", ar: "حجم مشروعات بيئية يصل إلى 10 مليون دولار" },
    ],
  },
  {
    slug: "research",
    name: "Scientific Research & Innovation",
    nameAr: "البحث العلمي والابتكار",
    company: "Al-Abadelah Heritage & Research",
    companyAr: "العبادلة للتراث والبحث",
    image: research,
    tagline: "The scholarly roots of the group",
    taglineAr: "الجذور العلمية للمجموعة",
    body: "Research, authorship and critical editing of heritage books, connected to the scholarly works of Sheikh Sami bin Bayoumi bin Ayyad — with published titles and many works in preparation.",
    bodyAr: "بحث وتأليف وتحقيق كتب التراث، مرتبطة بالمؤلفات العلمية للشيخ سامي بن بيومي بن عياد — مع إصدارات منشورة وأعمال كثيرة قيد الإعداد.",
    points: [
      { en: "Al-Madkhal ila al-Tawheed", ar: "المقدمة إلى التوحيد" },
      { en: "Fiqh al-Siyam", ar: "فقه الصيام" },
      { en: "Shara'i Sha'ban", ar: "شرائع شعبان" },
      { en: "Al-Bayan fi Hadith Rufi'a 'an Ummati", ar: "البيان في حديث رُفع عن أمتي" },
    ],
  },
  {
    slug: "education",
    name: "Education & Development",
    nameAr: "التعليم والتطوير",
    company: "REWAQ Academy",
    companyAr: "أكاديمية رواق",
    image: education,
    tagline: "Knowledge, character and skills",
    taglineAr: "معرفة، وشخصية، ومهارات",
    body: "An educational system combining academic support, religious knowledge, language and cultural skills, and character building — organised, flexible and increasingly digital.",
    bodyAr: "نظام تعليمي يجمع الدعم الأكاديمي والمعرفة الدينية والمهارات اللغوية والثقافية وبناء الشخصية — منظمًا ومرنًا ورقميًا بشكل متزايد.",
    points: [
      { en: "Academic learning & skills", ar: "التعلم الأكاديمي والمهارات" },
      { en: "Quran & Islamic studies", ar: "القرآن والدراسات الإسلامية" },
      { en: "Languages & culture", ar: "اللغات والثقافة" },
      { en: "Digital learning content", ar: "محتوى التعلم الرقمي" },
    ],
  },
  {
    slug: "food",
    name: "Food & Natural Products",
    nameAr: "الأغذية والمنتجات الطبيعية",
    company: "Sami Bin Ayyad Group · Food & Natural Products",
    companyAr: "مجموعة سامي عياد · الأغذية والمنتجات الطبيعية",
    image: food,
    tagline: "From nature's finest to global markets",
    taglineAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    body: "Sourcing and marketing a diverse range of natural food products for local and international markets — honey and bee products, olives and oils, premium dates, herbs, spices and natural beverages.",
    bodyAr: "توريد وتسويق مجموعة متنوعة من الأغذية الطبيعية للأسواق المحلية والعالمية — عسل النحل ومنتجاته، والزيتون والزيوت، والتمور الفاخرة، والأعشاب والتوابل والمشروبات الطبيعية.",
    points: [
      { en: "Honey & bee products", ar: "عسل النحل ومنتجاته" },
      { en: "Olives, oils & date products", ar: "الزيتون والزيوت ومنتجات التمر" },
      { en: "Premium dates: Sukkari, Ajwa, Medjool…", ar: "تمور فاخرة: السكري، العجوة، المجدول…" },
      { en: "Herbs, spices & natural beverages", ar: "الأعشاب والتوابل والمشروبات الطبيعية" },
    ],
  },
];

// Sectors shown on the group homepage, in display order. Add a slug to publish a sector.
export const homepageSectorSlugs: SectorSlug[] = ["construction", "environmental", "garment", "food"];
export const homepageDivisions: Division[] = homepageSectorSlugs.flatMap((slug) => divisions.filter((division) => division.slug === slug));

const countWords: Record<number, { en: string; ar: string }> = {
  1: { en: "One", ar: "واحد" },
  2: { en: "Two", ar: "اثنان" },
  3: { en: "Three", ar: "ثلاثة" },
  4: { en: "Four", ar: "أربعة" },
  5: { en: "Five", ar: "خمسة" },
  6: { en: "Six", ar: "ستة" },
};

export const sectorCount = countWords[homepageDivisions.length] ?? {
  en: String(homepageDivisions.length),
  ar: String(homepageDivisions.length),
};

export interface Stat {
  value: string;
  label: string;
  labelAr: string;
}

export const stats: Stat[] = [
  { value: "20,000+", label: "Garment models developed", labelAr: "موديل ملابس تم تطويرها" },
  { value: "57+", label: "Construction projects", labelAr: "مشروعًا إنشائيًا" },
  { value: "400.5M", label: "EGP construction turnover", labelAr: "جنيه حجم أعمال المقاولات" },
  { value: "4", label: "Strategic sectors", labelAr: "قطاعات استراتيجية" },
  { value: "1977", label: "Group heritage since 1977", labelAr: "جذور المجموعة منذ 1977" },
];

/** Verified group-wide figures only — garment figures are attributed to manufacturing operations. */
export const capabilityStats: Stat[] = [
  { value: "57+", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
  { value: "400.5", label: "EGP million+ recorded project value (2013–2024)", labelAr: "مليون جنيه+ قيمة مشروعات مسجلة (2013–2024)" },
  { value: "5,000+", label: "Garments per day", labelAr: "قطعة ملابس يوميًا" },
  { value: "100,000+", label: "Garments per month", labelAr: "قطعة ملابس شهريًا" },
  { value: "15+", label: "Production lines", labelAr: "خط إنتاج" },
  { value: "250+", label: "Industrial machines", labelAr: "ماكينة صناعية" },
  { value: "20,000+", label: "Apparel styles developed", labelAr: "موديل ملابس تم تطويره" },
];

export interface SectorOverview {
  slug: SectorSlug;
  headline: string;
  headlineAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  supportingLabel: string;
  supportingLabelAr: string;
  /** Chips for sectors without verified figures. */
  chips?: { en: string; ar: string }[];
  /** Verified figures shown as animated counters. */
  figures?: Stat[];
  brand?: string;
  brandAr?: string;
  cta: string;
  ctaAr: string;
  image: string;
}

export const sectorOverviews: SectorOverview[] = [
  {
    slug: "construction",
    headline: "Building What Moves Business Forward",
    headlineAr: "نبني ما يدفع الأعمال إلى الأمام",
    subtitle: "Construction, Development & Project Execution",
    subtitleAr: "الإنشاء والتطوير وتنفيذ المشروعات",
    description: "We focus on project development, construction execution, planning, resource management, quality control, and schedule coordination. Our approach emphasizes efficient project delivery, operational discipline, and value creation throughout the project lifecycle.",
    descriptionAr: "نركز على تطوير المشروعات وتنفيذ الإنشاءات والتخطيط وإدارة الموارد وضبط الجودة وتنسيق الجداول الزمنية، مع التركيز على التسليم الفعّال والانضباط التشغيلي وخلق القيمة طوال دورة حياة المشروع.",
    supportingLabel: "Key Figures",
    supportingLabelAr: "أرقام رئيسية",
    figures: [
      { value: "57+", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
      { value: "400.5", label: "EGP million+ recorded project value (2013–2024)", labelAr: "مليون جنيه+ قيمة مشروعات مسجلة (2013–2024)" },
    ],
    cta: "Explore Our Projects",
    ctaAr: "استكشف مشروعاتنا",
    image: construction,
  },
  {
    slug: "environmental",
    headline: "Advancing Environmental Solutions",
    headlineAr: "نطوّر الحلول البيئية",
    subtitle: "Technology, Resources & Sustainability",
    subtitleAr: "التكنولوجيا والموارد والاستدامة",
    description: "Our environmental sector focuses on sustainable solutions and technical capabilities across energy, water, waste management, oil and gas, industrial applications, environmental technologies, and research and development — supporting responsible resource utilization, environmental performance, and sustainable industrial development.",
    descriptionAr: "يركز قطاعنا البيئي على الحلول المستدامة والقدرات التقنية في الطاقة والمياه وإدارة النفايات والنفط والغاز والتطبيقات الصناعية والتقنيات البيئية والبحث والتطوير — دعمًا للاستخدام الرشيد للموارد والأداء البيئي والتنمية الصناعية المستدامة.",
    supportingLabel: "Key Areas of Expertise",
    supportingLabelAr: "مجالات الخبرة الرئيسية",
    chips: [
      { en: "Energy", ar: "الطاقة" },
      { en: "Environmental Solutions", ar: "الحلول البيئية" },
      { en: "Oil & Gas", ar: "النفط والغاز" },
      { en: "Water Management", ar: "إدارة المياه" },
      { en: "Waste Management", ar: "إدارة النفايات" },
      { en: "Industrial Solutions", ar: "الحلول الصناعية" },
      { en: "Sustainability", ar: "الاستدامة" },
      { en: "Technology & R&D", ar: "التكنولوجيا والبحث والتطوير" },
    ],
    cta: "Explore Environmental Solutions",
    ctaAr: "استكشف الحلول البيئية",
    image: enviro,
  },
  {
    slug: "garment",
    headline: "Manufacturing at Scale. Designed for Brands.",
    headlineAr: "تصنيع على نطاق واسع. مصمم للعلامات التجارية.",
    subtitle: "Textile, Apparel & Contract Manufacturing",
    subtitleAr: "المنسوجات والملابس والتصنيع التعاقدي",
    description: "Our textile and garment manufacturing sector specializes in women's and children's apparel, product development, private-label manufacturing, contract manufacturing, and FOB production programs. Our capabilities also include fabric manufacturing and dyeing, supporting integrated production requirements for local and international markets.",
    descriptionAr: "يتخصص قطاع تصنيع المنسوجات والملابس في ملابس النساء والأطفال وتطوير المنتجات والتصنيع للعلامات الخاصة والتصنيع التعاقدي وبرامج التسليم على ظهر السفينة (FOB)، وتشمل قدراتنا تصنيع الأقمشة وصباغتها دعمًا لمتطلبات الإنتاج المتكامل للأسواق المحلية والدولية.",
    supportingLabel: "Key Figures",
    supportingLabelAr: "أرقام رئيسية",
    figures: [
      { value: "5,000+", label: "Garments per day", labelAr: "قطعة ملابس يوميًا" },
      { value: "100,000+", label: "Garments per month", labelAr: "قطعة ملابس شهريًا" },
      { value: "15+", label: "Production lines", labelAr: "خط إنتاج" },
      { value: "250+", label: "Machines", labelAr: "ماكينة" },
      { value: "20,000+", label: "Styles developed", labelAr: "موديل تم تطويره" },
    ],
    cta: "Explore Manufacturing",
    ctaAr: "استكشف التصنيع",
    image: apparel,
  },
  {
    slug: "food",
    headline: "Bringing Nature to Global Markets",
    headlineAr: "من الطبيعة إلى الأسواق العالمية",
    subtitle: "Natural Products, Quality & Export",
    subtitleAr: "منتجات طبيعية وجودة وتصدير",
    description: "Our natural products sector focuses on a diverse range of natural and food products, including premium honey, olives and olive oil, dates, date-based products, herbs, spices, and natural powdered beverages. The sector aims to connect carefully selected products with local and international markets under the AZRA brand.",
    descriptionAr: "يركز قطاع المنتجات الطبيعية على مجموعة متنوعة من المنتجات الطبيعية والغذائية، تشمل العسل الفاخر والزيتون وزيت الزيتون والتمور ومنتجاتها والأعشاب والتوابل والمشروبات الطبيعية المجففة، بهدف ربط منتجات مختارة بعناية بالأسواق المحلية والدولية تحت علامة AZRA.",
    supportingLabel: "Product Categories",
    supportingLabelAr: "فئات المنتجات",
    chips: [
      { en: "Honey & Honey Products", ar: "العسل ومنتجاته" },
      { en: "Olives & Olive Oil", ar: "الزيتون وزيت الزيتون" },
      { en: "Premium Dates & Date Varieties", ar: "التمور الفاخرة وأصنافها" },
      { en: "Date Molasses & Date Jam", ar: "دبس التمر ومربى التمر" },
      { en: "Herbs & Spices", ar: "الأعشاب والتوابل" },
      { en: "Natural Powdered Beverages", ar: "المشروبات الطبيعية المجففة" },
    ],
    brand: "AZRA — A Brand by SAMI BIN AYYAD GROUP",
    brandAr: "AZRA — علامة من مجموعة سامي عياد",
    cta: "Discover AZRA",
    ctaAr: "اكتشف AZRA",
    image: food,
  },
];

export const approachValues = [
  {
    title: "Quality & Precision",
    titleAr: "الجودة والدقة",
    body: "Maintaining clear standards and attention to detail across our operations.",
    bodyAr: "الحفاظ على معايير واضحة واهتمام بالتفاصيل في جميع عملياتنا.",
  },
  {
    title: "Operational Excellence",
    titleAr: "التميز التشغيلي",
    body: "Supporting efficient planning, coordinated execution, and continuous improvement.",
    bodyAr: "دعم التخطيط الفعّال والتنفيذ المنسق والتحسين المستمر.",
  },
  {
    title: "Responsible Growth",
    titleAr: "النمو المسؤول",
    body: "Pursuing sustainable practices and long-term business development.",
    bodyAr: "اعتماد ممارسات مستدامة وتنمية أعمال طويلة الأمد.",
  },
  {
    title: "Strategic Partnerships",
    titleAr: "شراكات استراتيجية",
    body: "Building professional relationships founded on trust, accountability, and shared objectives.",
    bodyAr: "بناء علاقات مهنية قائمة على الثقة والمساءلة والأهداف المشتركة.",
  },
] as const;

export interface PerformanceEntry {
  sector: string;
  sectorAr: string;
  figure: string;
  figureNote: string;
  figureNoteAr: string;
  work: number;
  projects: number;
  people: number;
}

// Illustrative placeholder values — to be replaced with verified figures.
export const performance: PerformanceEntry[] = [
  { sector: "Garment & Textiles", sectorAr: "الملابس والمنسوجات", figure: "20,000+", figureNote: "models developed · placeholder", figureNoteAr: "موديل تم تطويرها · بيانات مبدئية", work: 82, projects: 64, people: 78 },
  { sector: "Construction", sectorAr: "المقاولات", figure: "57+", figureNote: "projects · placeholder", figureNoteAr: "مشروعًا · بيانات مبدئية", work: 74, projects: 58, people: 66 },
  { sector: "Environment", sectorAr: "البيئة", figure: "$10M", figureNote: "max project volume · placeholder", figureNoteAr: "أقصى حجم مشروع · بيانات مبدئية", work: 52, projects: 44, people: 38 },
  { sector: "Research", sectorAr: "البحث العلمي", figure: "4+", figureNote: "published titles · placeholder", figureNoteAr: "إصدارات منشورة · بيانات مبدئية", work: 40, projects: 34, people: 26 },
  { sector: "Education", sectorAr: "التعليم", figure: "6", figureNote: "learning areas · placeholder", figureNoteAr: "مجالات تعليمية · بيانات مبدئية", work: 46, projects: 40, people: 42 },
  { sector: "Food & Natural Products", sectorAr: "الأغذية والمنتجات الطبيعية", figure: "20+", figureNote: "product varieties · placeholder", figureNoteAr: "صنفًا من المنتجات · بيانات مبدئية", work: 44, projects: 36, people: 30 },
];

export const chartMetrics = [
  { key: "work", label: "Work volume by sector", labelAr: "حجم الأعمال حسب القطاع", unit: "%" },
  { key: "projects", label: "Projects delivered", labelAr: "المشروعات المنفذة", unit: "%" },
  { key: "people", label: "Team size", labelAr: "حجم الفريق", unit: "%" },
] as const;

export const whoWeServe = [
  { en: "Fashion brands & retailers", ar: "علامات الأزياء وتجار التجزئة" },
  { en: "Government & public projects", ar: "الجهات الحكومية والمشروعات العامة" },
  { en: "Industrial & factory owners", ar: "المصنعون وأصحاب الصناعات" },
  { en: "Developers & contractors", ar: "المطورون والمقاولون" },
  { en: "Schools, academies & learners", ar: "المدارس والأكاديميات والمتعلمون" },
  { en: "Researchers & publishers", ar: "الباحثون والناشرون" },
  { en: "Food distributors & importers", ar: "موزعو ومستوردو الأغذية" },
] as const;

export const founders = [
  {
    role: "Chairman of the Board",
    roleAr: "رئيس مجلس الإدارة",
    name: "Sheikh Sami Bin Ayyad",
    nameAr: "الشيخ سامي عياد",
    bio: "A career in contracting, trade and investment spanning five decades — from contracting and finishing in 1977, through gold, wholesale food and heritage publishing, to building today's diversified group.",
    bioAr: "مسيرة مهنية واستثمارية ممتدة منذ عام 1977، بدأت في المقاولات والتشطيبات، ومرّت بتجارة الذهب والجملة الغذائية وتحقيق التراث، وصولًا إلى بناء مجموعة أعمال متنوعة.",
  },
  {
    role: "Founder",
    roleAr: "المؤسس",
    name: "Abdulhakam Mashhour",
    nameAr: "د. عبد الحكم مشهور",
    bio: "Founder & CEO of EnviroTaqa. A certified environmental consultant with executive HSSE leadership across the Middle East oil & gas sector, working with BP, Shell, ENI and Schlumberger.",
    bioAr: "المؤسس والرئيس التنفيذي لشركة إنفيروطاقة. استشاري بيئي معتمد، وقائد تنفيذي في أنظمة الصحة والسلامة والبيئة بقطاع النفط والغاز في الشرق الأوسط، مع خبرة مع BP وShell وENI وSchlumberger.",
  },
  {
    role: "Co-Founder",
    roleAr: "الشريك المؤسس",
    name: "Abdulrahman Sami Bin Ayyad",
    nameAr: "د. عبد الرحمن سامي عياد",
    bio: "CEO of the JZRA factory and brand, and General Manager for contracts at the group. Founder of Rewaq Academy (2019) and a researcher in heritage editing and scientific research.",
    bioAr: "الرئيس التنفيذي لمصنع وعلامة JZRA، والمدير العام للتعاقدات بالمجموعة. مؤسس أكاديمية رواق التعليمية (2019)، وباحث في تحقيق التراث والبحث العلمي.",
  },
  {
    role: "Business Developer",
    roleAr: "مطوّر الأعمال",
    name: "Abdullah Sami Bin Ayyad",
    nameAr: "د. عبد الله سامي عياد",
    bio: "Leads business development across the group's divisions, connecting partners and clients with the right sector capability.",
    bioAr: "يقود تطوير الأعمال في قطاعات المجموعة، ويربط الشركاء والعملاء بالقدرات المناسبة في كل قطاع.",
  },
] as const;

export const processSteps = [
  ["Design", "Design references become technical patterns, measurements and approved samples.", "التصميم", "تتحول المراجع التصميمية إلى باترونات فنية ومقاسات وعينات معتمدة."],
  ["Cutting", "Fabric is spread and cut precisely to the approved pattern markers.", "القص", "تُفرد الأقمشة وتُقص بدقة وفق الباترونات المعتمدة."],
  ["Sewing", "Organised production lines assemble each garment under controlled processes.", "الخياطة", "خطوط إنتاج منظمة تُجمّع كل قطعة ملابس ضمن عمليات مضبوطة."],
  ["Finishing", "Pressing, labelling, inspection and packing prepare orders for export.", "التشطيب", "الكبس والترقيم والفحص والتغليف تُجهّز الطلبات للتصدير."],
] as const;


export interface AboutTab {
  label: string;
  labelAr: string;
  body: string;
  bodyAr: string;
}

export const aboutTabs: AboutTab[] = [
  {
    label: "Who We Are",
    labelAr: "من نحن",
    body: "Sami Bin Ayyad Group is a diversified group operating across textile & garment manufacturing, construction, environment, research and education. From scholarly roots to manufacturing at scale, we build durable value for partners and communities.",
    bodyAr: "مجموعة سامي عياد مجموعة متنوعة الأنشطة تعمل في تصنيع الأقمشة والملابس والمقاولات والبيئة والبحث العلمي والتعليم. من جذور علمية إلى تصنيع على نطاق واسع، نبني قيمة دائمة لشركائنا ومجتمعاتنا.",
  },
  {
    label: "Leadership",
    labelAr: "القيادة",
    body: "The group is led by its founders and a management team with experience across manufacturing, contracting, energy and education. Their profiles appear in the Company Leadership section.",
    bodyAr: "تقود المجموعة مؤسسوها وفريق إداري بخبرة في التصنيع والمقاولات والطاقة والتعليم. وتظهر ملفاتهم في قسم «قيادة الشركة».",
  },
  {
    label: "Values & Approach",
    labelAr: "قيمنا ونهجنا",
    body: "Clarity, discipline, flexibility and responsibility. Every division is managed with structured processes, technical understanding and accountability to the people we serve.",
    bodyAr: "الوضوح والانضباط والمرونة والمسؤولية. يُدار كل قطاع بعمليات منظمة وفهم تقني ومساءلة تجاه من نخدمهم.",
  },
  {
    label: "Why Sami Bin Ayyad",
    labelAr: "لماذا سامي عياد",
    body: "One partner, four integrated sectors: we connect production, construction, sustainability and natural products — so clients benefit from shared expertise, scale and long-term commitment.",
    bodyAr: "شريك واحد، أربعة قطاعات متكاملة: نربط الإنتاج والإنشاءات والاستدامة والمنتجات الطبيعية — فيستفيد العملاء من خبرة مشتركة وحجم أكبر والتزام طويل الأمد.",
  },
];

/** Placeholder milestones — replace with the group's real dates. */
export const journey = [
  { year: "2000s", title: "Group founded", titleAr: "تأسيس المجموعة", body: "Sami Bin Ayyad Group begins in contracting and trade.", bodyAr: "انطلاق مجموعة سامي عياد في المقاولات والتجارة." },
  { year: "2010s", title: "Contracting expands", titleAr: "توسع المقاولات", body: "Major construction and infrastructure projects across Egypt.", bodyAr: "مشروعات إنشائية وبنية تحتية كبرى في مصر." },
  { year: "2015", title: "Garment manufacturing", titleAr: "تصنيع الملابس", body: "Textile and garment production with the JZRA brand.", bodyAr: "إنتاج المنسوجات والملابس مع علامة جزرة." },
  { year: "2020", title: "Environmental services", titleAr: "الخدمات البيئية", body: "A dedicated environment sector for sustainable solutions.", bodyAr: "قطاع بيئي متخصص لحلول مستدامة." },
  { year: "Today", title: "Natural products", titleAr: "المنتجات الطبيعية", body: "Four sectors united by one long-term vision.", bodyAr: "أربعة قطاعات تجمعها رؤية واحدة طويلة المدى." },
];
