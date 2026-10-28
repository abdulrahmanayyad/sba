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
    slug: "construction",
    name: "Contracting, Construction & Real Estate Development",
    nameAr: "المقاولات والإنشاءات والتطوير العقاري",
    company: "SAMI BIN AYYAD GROUP Contracting & Real Estate Development",
    companyAr: "شركة مجموعة سامي بن عياد للمقاولات والتطوير العقاري",
    image: construction,
    tagline: "Integrated solutions for construction and property development, spanning structural works, finishing, building systems, and specialized installations.",
    taglineAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني، من الأعمال الإنشائية والتشطيبات إلى الأنظمة الهندسية والتجهيزات المتخصصة.",
    body: "Delivering integrated solutions across general contracting, construction, real estate development, building upgrades, electromechanical systems, healthcare installations, and specialized oil & gas civil works.",
    bodyAr: "حلول متكاملة في المقاولات العامة والإنشاءات والتطوير العقاري والتشطيبات، مدعومة بسجل مشروعات موثق يغطي القطاعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية.",
    points: [
      { en: "+57 documented projects", ar: "+57 مشروعًا موثقًا" },
      { en: "+EGP 400.5M turnover (2013–2024)", ar: "+400.5 مليون جنيه حجم أعمال مسجل" },
      { en: "Hospitals, MEP, healthcare fit-out & elevators", ar: "مستشفيات وتجهيزات طبية وأنظمة MEP ومصاعد" },
      { en: "Villas, commercial developments & oil/gas works", ar: "فيلات وتطوير سكني وتجاري ومشروعات بترول وغاز" },
    ],
  },
  {
    slug: "environmental",
    name: "Environment & Sustainability",
    nameAr: "البيئة والاستدامة",
    company: "ENVIROTAQA · Environmental & Sustainability Solutions",
    companyAr: "إنفيروتاقة · حلول واستشارات بيئية مستدامة",
    image: enviro,
    tagline: "Integrated environmental solutions that turn challenges into sustainable opportunities.",
    taglineAr: "حلول بيئية متكاملة تحول التحديات إلى فرص مستدامة.",
    body: "Specialized advisory and technical solutions in environmental impact studies (EIA/ESIA), waste management and resource recovery, water and wastewater treatment, renewable energy, and HSE compliance.",
    bodyAr: "حلول واستشارات متخصصة في تقييم الأثر البيئي، وإدارة المخلفات وتحويلها إلى قيمة، ومعالجة المياه والصرف، والطاقة المتجددة، وإدارة المخاطر والسلامة والصحة المهنية.",
    points: [
      { en: "EIA, ESIA & environmental studies", ar: "دراسات تقييم الأثر البيئي والاجتماعي" },
      { en: "Compost, biochar, biogas & waste-to-energy", ar: "سماد عضوي، فحم حيوي، غاز حيوي، وطاقة من المخلفات" },
      { en: "Water & industrial wastewater treatment", ar: "معالجة المياه ومياه الصرف الصناعي" },
      { en: "QHSE compliance, digital monitoring & IoT", ar: "أنظمة السلامة والامتثال والرصد الرقمي" },
    ],
  },
  {
    slug: "garment",
    name: "Garment Manufacturing & Fashion Development",
    nameAr: "تصنيع الملابس وتطوير الأزياء",
    company: "SAMI BIN AYYAD GROUP · Garment Division",
    companyAr: "مجموعة سامي بن عياد · قطاع تصنيع الملابس",
    image: apparel,
    tagline: "Integrated manufacturing solutions for fashion brands and global markets, from product development to production and export preparation.",
    taglineAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية، من تطوير المنتج إلى الإنتاج والتجهيز للتصدير.",
    body: "Integrated ready-made garment manufacturing: product development, diverse production capabilities, manufacturing management, and quality control, specializing in women's, children's, and men's apparel.",
    bodyAr: "حلول متكاملة لتصنيع الملابس الجاهزة تجمع بين تطوير المنتجات والقدرات الإنتاجية المتنوعة وإدارة التصنيع ومراقبة الجودة، مع تخصص في الملابس الحريمي والأطفالي والرجالية.",
    points: [
      { en: "+5,000 pieces/day · +100,000/month", ar: "+5,000 قطعة يوميًا · +100,000 شهريًا" },
      { en: "+15 lines · +250 machines · +400 workers", ar: "+15 خط إنتاج · +250 ماكينة · +400 عامل" },
      { en: "Dedicated classic shirt factory (30k/mo)", ar: "مصنع مخصص للقمصان الكلاسيك (30 ألف/شهر)" },
      { en: "Private label, FOB & +20,000 styles developed", ar: "علامات خاصة، برامج FOB، و+20,000 موديل" },
    ],
    link: "/apparel",
  },
  {
    slug: "food",
    name: "Food & Natural Products Division",
    nameAr: "قطاع الأغذية والمنتجات الطبيعية",
    company: "SAMI BIN AYYAD GROUP · Food & Natural Products Division",
    companyAr: "مجموعة سامي بن عياد · قطاع الأغذية والمنتجات الطبيعية",
    image: food,
    tagline: "From Nature’s Finest to Global Markets",
    taglineAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    body: "Sourcing and marketing a diverse range of natural food products: pure honey and bee products, olives and olive oil, premium date varieties, herbs, spices, and natural powdered juice products.",
    bodyAr: "توفير وتسويق مجموعة متنوعة من الأغذية الطبيعية عبر شبكة تجارية مرنة: عسل النحل ومنتجاته، الزيتون وزيت الزيتون، أصناف التمور الفاخرة، الأعشاب والتوابل، ومشروبات العصائر البودر الطبيعية.",
    points: [
      { en: "Pure honey & royal jelly", ar: "عسل السدر والزهور وغذاء الملكات" },
      { en: "Olives, olive oil & date products", ar: "الزيتون وزيت الزيتون ودبس ومربى التمر" },
      { en: "Premium dates: Sukkari, Ajwa, Medjool…", ar: "تمور فاخرة: السكري، العجوة، المجدول…" },
      { en: "Herbs, spices & natural powdered juices", ar: "أعشاب وتوابل وعصائر بودر طبيعية" },
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
  { value: "+20,000", label: "Garment models developed", labelAr: "موديل ملابس تم تطويرها" },
  { value: "+57", label: "Construction projects", labelAr: "مشروعًا إنشائيًا" },
  { value: "+400.5M", label: "EGP construction turnover", labelAr: "جنيه حجم أعمال المقاولات" },
  { value: "4", label: "Strategic sectors", labelAr: "قطاعات استراتيجية" },
  { value: "1977", label: "Group heritage since 1977", labelAr: "جذور المجموعة منذ 1977" },
];

/** Verified group-wide figures only — garment figures are attributed to manufacturing operations. */
export const capabilityStats: Stat[] = [
  { value: "+57", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
  { value: "+400.5", label: "EGP million+ recorded project value (2013–2024)", labelAr: "مليون جنيه قيمة مشروعات مسجلة (2013–2024)" },
  { value: "+5,000", label: "Garments per day", labelAr: "قطعة ملابس يوميًا" },
  { value: "+100,000", label: "Garments per month", labelAr: "قطعة ملابس شهريًا" },
  { value: "+15", label: "Production lines", labelAr: "خط إنتاج" },
  { value: "+250", label: "Industrial machines", labelAr: "ماكينة صناعية" },
  { value: "+20,000", label: "Apparel styles developed", labelAr: "موديل ملابس تم تطويره" },
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
    headline: "Contracting, Construction & Real Estate Development",
    headlineAr: "المقاولات والإنشاءات والتطوير العقاري",
    subtitle: "Integrated Solutions for Construction & Property Development",
    subtitleAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني",
    description: "SAMI BIN AYYAD GROUP delivers comprehensive solutions across general contracting, healthcare facilities, MEP systems, finishing works, and oil & gas specialized civil projects, backed by a documented track record of delivery.",
    descriptionAr: "حلول متكاملة في المقاولات العامة، وتجهيز المنشآت الطبية، والأنظمة الكهروميكانيكية، والتشطيبات، ومشروعات البترول والغاز، مدعومة بسجل مشروعات موثق يمتد لعقود.",
    supportingLabel: "Key Figures",
    supportingLabelAr: "أرقام رئيسية",
    figures: [
      { value: "+57", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
      { value: "+400.5", label: "EGP million+ recorded turnover (2013–2024)", labelAr: "مليون جنيه حجم أعمال مسجل (2013–2024)" },
    ],
    cta: "Explore Our Projects",
    ctaAr: "استكشف مشروعاتنا",
    image: construction,
  },
  {
    slug: "environmental",
    headline: "Sustainable Environment",
    headlineAr: "البيئة المستدامة",
    subtitle: "Integrated environmental solutions that turn challenges into sustainable opportunities.",
    subtitleAr: "حلول بيئية متكاملة تحول التحديات إلى فرص مستدامة",
    description: "Specialized solutions and consulting in environmental impact assessments (EIA/ESIA), waste management and resource recovery, water and wastewater treatment, renewable energy, and HSE compliance.",
    descriptionAr: "حلول واستشارات متخصصة تدعم إدارة الأثر البيئي، وتقييم الأثر البيئي (EIA/ESIA)، وإدارة المخلفات وتحويلها إلى قيمة، ومعالجة المياه، والطاقة المتجددة، والامتثال للسلامة والصحة المهنية.",
    supportingLabel: "Key Areas of Expertise",
    supportingLabelAr: "مجالات الخبرة الرئيسية",
    chips: [
      { en: "Environmental Studies (EIA/ESIA)", ar: "دراسات الأثر البيئي (EIA/ESIA)" },
      { en: "Waste Management & Resource Recovery", ar: "إدارة المخلفات واسترداد الموارد" },
      { en: "Water & Wastewater Treatment", ar: "معالجة المياه والصرف" },
      { en: "Energy & Carbon Footprint", ar: "الطاقة والبصمة الكربونية" },
      { en: "HSE & Regulatory Compliance", ar: "السلامة والصحة والامتثال البيئي" },
      { en: "Digital Environmental Monitoring", ar: "الرصد البيئي الرقمي وإنترنت الأشياء" },
    ],
    cta: "Explore Environmental Solutions",
    ctaAr: "استكشف الحلول البيئية",
    image: enviro,
  },
  {
    slug: "garment",
    headline: "Garment Manufacturing & Fashion Development",
    headlineAr: "تصنيع الملابس وتطوير الأزياء",
    subtitle: "Integrated Manufacturing for Brands & Global Markets",
    subtitleAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية",
    description: "Specialized manufacturing of women's, children's, and men's apparel, from pattern making and sampling to bulk production, classic shirt lines, Private Label, and FOB export programs.",
    descriptionAr: "تصنيع متكامل للملابس الجاهزة (حريمي، أطفالي، رجالي)، من إعداد الباترونات والعينات والقص والخياطة، إلى خط القمصان الكلاسيك، وبرامج العلامات الخاصة والتصدير بنظام FOB.",
    supportingLabel: "Key Figures",
    supportingLabelAr: "أرقام رئيسية",
    figures: [
      { value: "+5,000", label: "Garments per day", labelAr: "قطعة ملابس يوميًا" },
      { value: "+100,000", label: "Garments per month", labelAr: "قطعة ملابس شهريًا" },
      { value: "+15", label: "Production lines", labelAr: "خط إنتاج" },
      { value: "+250", label: "Specialized machines", labelAr: "ماكينة متخصصة" },
      { value: "+20,000", label: "Styles developed", labelAr: "موديل تم تطويره" },
    ],
    cta: "Explore Manufacturing",
    ctaAr: "استكشف التصنيع",
    image: apparel,
  },
  {
    slug: "food",
    headline: "Food & Natural Products",
    headlineAr: "الأغذية والمنتجات الطبيعية",
    subtitle: "From Nature’s Finest to Global Markets",
    subtitleAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    description: "Sourcing and marketing a diverse portfolio of natural food products: pure honey and bee products, olives and olive oil, premium dates, herbs, spices, and natural powdered juice products.",
    descriptionAr: "توفير وتسويق مجموعة متنوعة من الأغذية الطبيعية عبر شبكة تجارية مرنة: عسل النحل ومنتجاته، والزيتون وزيت الزيتون، والتمور الفاخرة، والأعشاب والتوابل، ومشروبات العصائر البودر الطبيعية.",
    supportingLabel: "Product Categories",
    supportingLabelAr: "فئات المنتجات",
    chips: [
      { en: "Honey & Bee Products", ar: "عسل النحل ومنتجاته" },
      { en: "Olives, Oils & Date Products", ar: "الزيتون والزيوت ومنتجات التمر" },
      { en: "Premium Dates Varieties", ar: "التمور الفاخرة وأصنافها" },
      { en: "Herbs, Spices & Natural Beverages", ar: "الأعشاب والتوابل والعصائر البودر الطبيعية" },
    ],
    cta: "Discover Natural Products",
    ctaAr: "استكشف المنتجات الطبيعية",
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
  { sector: "Garment & Textiles", sectorAr: "الملابس والمنسوجات", figure: "+20,000", figureNote: "models developed · placeholder", figureNoteAr: "موديل تم تطويرها · بيانات مبدئية", work: 82, projects: 64, people: 78 },
  { sector: "Construction", sectorAr: "المقاولات", figure: "+57", figureNote: "projects · placeholder", figureNoteAr: "مشروعًا · بيانات مبدئية", work: 74, projects: 58, people: 66 },
  { sector: "Environment", sectorAr: "البيئة", figure: "$10M", figureNote: "max project volume · placeholder", figureNoteAr: "أقصى حجم مشروع · بيانات مبدئية", work: 52, projects: 44, people: 38 },
  { sector: "Research", sectorAr: "البحث العلمي", figure: "+4", figureNote: "published titles · placeholder", figureNoteAr: "إصدارات منشورة · بيانات مبدئية", work: 40, projects: 34, people: 26 },
  { sector: "Education", sectorAr: "التعليم", figure: "6", figureNote: "learning areas · placeholder", figureNoteAr: "مجالات تعليمية · بيانات مبدئية", work: 46, projects: 40, people: 42 },
  { sector: "Food & Natural Products", sectorAr: "الأغذية والمنتجات الطبيعية", figure: "+20", figureNote: "product varieties · placeholder", figureNoteAr: "صنفًا من المنتجات · بيانات مبدئية", work: 44, projects: 36, people: 30 },
];

export const chartMetrics = [
  { key: "work", label: "Work volume by sector", labelAr: "حجم الأعمال حسب القطاع", unit: "%" },
  { key: "projects", label: "Projects delivered", labelAr: "المشروعات المنفذة", unit: "%" },
  { key: "people", label: "Team size", labelAr: "حجم الفريق", unit: "%" },
] as const;

export interface ClientMarket {
  en: string;
  ar: string;
  sectorEn: string;
  sectorAr: string;
  image: string;
}

export const whoWeServe: ClientMarket[] = [
  { en: "Developers & Real Estate Leaders", ar: "المطورون وشركات التطوير العقاري", sectorEn: "Contracting & Construction", sectorAr: "المقاولات والإنشاءات", image: construction },
  { en: "Government & National Infrastructure", ar: "الجهات الحكومية والمشروعات القومية", sectorEn: "General Contracting", sectorAr: "المقاولات العامة والبنية التحتية", image: construction },
  { en: "Global & Regional Fashion Brands", ar: "علامات الأزياء الإقليمية والعالمية", sectorEn: "Garment Manufacturing", sectorAr: "تصنيع الملابس وتطوير الأزياء", image: apparel },
  { en: "Wholesale & Apparel Retail Chains", ar: "سلاسل التجزئة وتجار الجملة للملابس", sectorEn: "Garment & Export", sectorAr: "الملابس الجاهزة والتصدير", image: apparel },
  { en: "Industrial Plants & Environmental Entities", ar: "المصانع والمنشآت الصناعية والبيئية", sectorEn: "Environment & Sustainability", sectorAr: "البيئة والاستدامة", image: enviro },
  { en: "Natural Food Importers & Retailers", ar: "مستوردو وتجار التجزئة للمنتجات الطبيعية", sectorEn: "Food & Natural Products", sectorAr: "الأغذية والمنتجات الطبيعية", image: food },
];

export const founders = [
  {
    role: "Chairman of the Board",
    roleAr: "رئيس مجلس الإدارة",
    name: "Sami Bin Ayyad",
    nameAr: "سامي بن عياد",
    image: "/Leadership/Sami Bin Ayyad.jpg",
    bio: "A career in contracting, trade and investment spanning five decades — from contracting and finishing in 1977, through gold, wholesale food and heritage publishing, to building today's diversified group.",
    bioAr: "مسيرة مهنية واستثمارية ممتدة منذ عام 1977، بدأت في المقاولات والتشطيبات، ومرّت بتجارة الذهب والجملة الغذائية وتحقيق التراث، وصولًا إلى بناء مجموعة أعمال متنوعة.",
  },
  {
    role: "Founder",
    roleAr: "المؤسس",
    name: "Abdulhakam Mashhour",
    nameAr: "د. عبد الحكم مشهور",
    image: "/Leadership/Abdelhakam Mashhour.jpg",
    bio: "Founder & CEO of EnviroTaqa. A certified environmental consultant with executive HSSE leadership across the Middle East oil & gas sector, working with BP, Shell, ENI and Schlumberger.",
    bioAr: "المؤسس والرئيس التنفيذي لشركة إنفيروطاقة. استشاري بيئي معتمد، وقائد تنفيذي في أنظمة الصحة والسلامة والبيئة بقطاع النفط والغاز في الشرق الأوسط، مع خبرة مع BP وShell وENI وSchlumberger.",
  },
  {
    role: "Co-Founder",
    roleAr: "الشريك المؤسس",
    name: "Abdulrahman Sami Bin Ayyad",
    nameAr: "عبد الرحمن بن عياد",
    image: "/Leadership/Abdulrahman Bin Ayyad.jpg",
    bio: "CEO of the Garment Division and General Manager for contracts at the group. Founder of Rewaq Academy (2019) and a researcher in heritage editing and scientific research.",
    bioAr: "الرئيس التنفيذي لقطاع الملابس والتصنيع، والمدير العام للتعاقدات بالمجموعة. مؤسس أكاديمية رواق التعليمية (2019)، وباحث في تحقيق التراث والبحث العلمي.",
  },
  {
    role: "Business Developer",
    roleAr: "مطوّر الأعمال",
    name: "Abdullah Sami Bin Ayyad",
    nameAr: "عبد الله بن عياد",
    image: "/Leadership/Abdullah Bin Ayyad.jpg",
    bio: "Leads business development across the group's divisions, connecting partners and clients with the right sector capability.",
    bioAr: "يقود تطوير الأعمال في قطاعات المجموعة، ويربط الشركاء والعملاء بالقدرات المناسبة في كل قطاع.",
  },
  {
    role: "Chief Financial Officer",
    roleAr: "المدير المالي",
    name: "Abdulaziz Bin Ayyad",
    nameAr: "عبد العزيز بن عياد",
    image: "/Leadership/Abdulaziz Bin Ayyad.jpg",
    bio: "Oversees financial planning, reporting and governance across all group divisions, ensuring fiscal discipline and sustainable growth.",
    bioAr: "يشرف على التخطيط المالي والتقارير والحوكمة في جميع قطاعات المجموعة، ضمانًا للانضباط المالي والنمو المستدام.",
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
    body: "Sami Bin Ayyad Group is a diversified group operating across contracting, textile & garment manufacturing, sustainable environment, and natural products. From solid heritage to manufacturing at scale, we build durable value for partners and communities.",
    bodyAr: "مجموعة سامي بن عياد مجموعة متنوعة الأنشطة تعمل في المقاولات والإنشاءات، وتصنيع الملابس، والبيئة المستدامة، والمنتجات الطبيعية. نبني قيمة دائمة وموثوقة لشركائنا ومجتمعاتنا.",
  },
  {
    label: "Leadership",
    labelAr: "القيادة",
    body: "The group is led by its founders and an executive leadership team with deep industry experience across contracting, manufacturing, and sustainability.",
    bodyAr: "تقود المجموعة نخبة من المؤسسين وقيادات تنفيذية تتمتع بخبرات عميقة في المقاولات والتصنيع والاستدامة.",
  },
  {
    label: "Values & Approach",
    labelAr: "قيمنا ونهجنا",
    body: "Clarity, discipline, flexibility and responsibility. Every division is managed with structured processes, technical understanding and accountability to the people we serve.",
    bodyAr: "الوضوح والانضباط والمرونة والمسؤولية. يُدار كل قطاع بعمليات منظمة وفهم تقني ومساءلة تجاه من نخدمهم.",
  },
  {
    label: "Why Sami Bin Ayyad",
    labelAr: "لماذا سامي بن عياد",
    body: "One partner, integrated sectors: connecting construction, production, sustainability and natural products for scale and long-term commitment.",
    bodyAr: "شريك واحد، قطاعات استراتيجية متكاملة: نربط الإنشاءات والإنتاج والاستدامة والمنتجات الطبيعية — فيستفيد العملاء من خبرة مشتركة وحجم أكبر والتزام طويل الأمد.",
  },
];

export const journey = [
  {
    year: "1977",
    title: "Beginning of Contracting Journey",
    titleAr: "بداية رحلة المقاولات",
    body: "Launching contracting and civil engineering operations.",
    bodyAr: "انطلاق أعمال المقاولات والهندسة الإنشائية والتشطيبات.",
  },
  {
    year: "1992",
    title: "Expansion in Saudi Arabia",
    titleAr: "التوسع في المقاولات في المملكة العربية السعودية",
    body: "Extending major contracting projects across the Kingdom of Saudi Arabia.",
    bodyAr: "توسيع المشروعات الإنشائية الكبرى في المملكة العربية السعودية.",
  },
  {
    year: "2008",
    title: "Expansion in Egypt",
    titleAr: "التوسع في المقاولات في جمهورية مصر العربية",
    body: "Broadening construction and real estate operations across Egypt.",
    bodyAr: "توسيع أعمال الإنشاءات والمقاولات والتطوير في جمهورية مصر العربية.",
  },
  {
    year: "2013",
    title: "National Projects Expansion",
    titleAr: "التوسع في المشاريع القومية",
    body: "Delivering strategic national healthcare and infrastructure projects.",
    bodyAr: "المساهمة في تنفيذ مشروعات قومية كبرى ومنشآت طبية وبنية تحتية.",
  },
  {
    year: "2018",
    title: "Entering Sustainable Environment",
    titleAr: "دخول مجال البيئة المستدامة",
    body: "Launching specialized environmental consulting, EIA, and sustainability services.",
    bodyAr: "تأسيس قطاع الاستشارات والحلول البيئية المتكاملة وتقييم الأثر البيئي.",
  },
  {
    year: "2022",
    title: "Environmental Projects Expansion",
    titleAr: "التوسع في المشاريع البيئية",
    body: "Scaling waste-to-resource recovery, water treatment, and HSE compliance systems.",
    bodyAr: "توسيع مشروعات معالجة المياه وإدارة المخلفات وحلول الطاقة والامتثال.",
  },
  {
    year: "2023",
    title: "Entering Apparel & Garment Manufacturing",
    titleAr: "الدخول في مجال الملابس والتصنيع",
    body: "Establishing ready-made garment production lines and export operations.",
    bodyAr: "تأسيس خطوط إنتاج وتصنيع الملابس الجاهزة والبدء في التصدير.",
  },
  {
    year: "2026",
    title: "Expansion in Apparel & Manufacturing",
    titleAr: "التوسع في مجال الملابس والتصنيع",
    body: "Scaling industrial capacity, advanced styling, and global export partnerships.",
    bodyAr: "توسيع القدرات الصناعية وخطوط الإنتاج وشراكات التصدير العالمية.",
  },
];


