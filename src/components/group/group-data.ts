const apparel = "/BG/arawark-chen-b6WsvhfM-kU-unsplash.jpg";
const construction = "/BG/andrew-whitmore-iVqkxn2PiU0-unsplash.jpg";
const enviro = "/BG/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg";
const research = "/BG/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg";
const education = "/BG/danist-soh-n-3Pn7Ybe-s-unsplash.jpg";
const food = "/BG/jennifer-delmarre-IqmuHJF5khU-unsplash.jpg";

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
    name: "Contracting & Real Estate Development",
    nameAr: "المقاولات والتطوير العقاري",
    company: "SAMI BIN AYYAD GROUP Contracting & Real Estate Development",
    companyAr: "شركة مجموعة سامي بن عياد للمقاولات والتطوير العقاري",
    image: construction,
    tagline: "Integrated solutions for construction and property development, spanning structural works, finishing, building systems, and specialized installations.",
    taglineAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني، من الأعمال الإنشائية والتشطيبات إلى الأنظمة الهندسية والتجهيزات المتخصصة.",
    body: "Delivering integrated solutions across general contracting, construction, real estate development, building upgrades, electromechanical systems, healthcare installations, and specialized oil & gas civil works.",
    bodyAr: "حلول متكاملة في المقاولات العامة والإنشاءات والتطوير العقاري والتشطيبات، مدعومة بسجل مشروعات موثق يغطي القطاعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية.",
    points: [
      { en: "+57 documented projects", ar: "+57 مشروعًا موثقًا" },
      { en: "+EGP 540M turnover (2013–2024)", ar: "+540 مليون جنيه حجم أعمال مسجل" },
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
    name: "Ready-Made Garment Manufacturing",
    nameAr: "تصنيع الملابس الجاهزة",
    company: "SAMI BIN AYYAD GROUP · Garment Division",
    companyAr: "مجموعة سامي بن عياد · قطاع تصنيع الملابس الجاهزة",
    image: apparel,
    tagline: "Integrated manufacturing solutions for fashion brands and global markets, from product development to production and export preparation.",
    taglineAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية، من تطوير المنتج إلى الإنتاج والتجهيز للتصدير.",
    body: "Integrated ready-made garment manufacturing: product development, diverse production capabilities, manufacturing management, and quality control, specializing in women's, children's, and men's apparel.",
    bodyAr: "حلول متكاملة لتصنيع الملابس الجاهزة تجمع بين تطوير المنتجات والقدرات الإنتاجية المتنوعة وإدارة التصنيع ومراقبة الجودة، مع تخصص في الملابس الحريمي والأطفالي والرجالية.",
    points: [
      { en: "+5,000 pieces/day · +100,000/month", ar: "+5,000 قطعة يوميًا · +100,000 شهريًا" },
      { en: "+15 lines · +250 machines", ar: "+15 خط إنتاج · +250 ماكينة" },
      { en: "Dedicated classic shirt lines (30k/mo)", ar: "خطوط متخصصة للقمصان الكلاسيك (30 ألف/شهر)" },
      { en: "Private label, FOB & +20,000 styles developed", ar: "علامات خاصة، برامج FOB، و+20,000 موديل" },
    ],
    link: "/apparel",
  },
  {
    slug: "food",
    name: "Natural Products Division",
    nameAr: "قطاع المنتجات الطبيعية",
    company: "SAMI BIN AYYAD GROUP · Natural Products Division",
    companyAr: "مجموعة سامي بن عياد · قطاع المنتجات الطبيعية",
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
  { value: "+540M", label: "EGP construction turnover", labelAr: "جنيه حجم أعمال المقاولات" },
  { value: "4", label: "Strategic sectors", labelAr: "قطاعات استراتيجية" },
  { value: "1977", label: "Group heritage since 1977", labelAr: "جذور المجموعة منذ 1977" },
];

/** Verified group-wide figures only — garment figures are attributed to manufacturing operations. */
export const capabilityStats: Stat[] = [
  { value: "+57", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
  { value: "+540", label: "EGP million+ recorded project value", labelAr: "مليون جنيه قيمة مشروعات مسجلة" },
  { value: "+5,000", label: "Garments per day", labelAr: "قطعة ملابس يوميًا" },
  { value: "+100,000", label: "Garments per month", labelAr: "قطعة ملابس شهريًا" },
  { value: "+15", label: "Production lines", labelAr: "خط إنتاج" },
  { value: "+250", label: "Industrial machines", labelAr: "ماكينة صناعية" },
  { value: "+20,000", label: "Apparel styles developed", labelAr: "موديل ملابس تم تطويره" },
];

export interface SubsectorBrief {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export interface SectorOverview {
  slug: SectorSlug;
  tab?: string;
  headline: string;
  headlineAr: string;
  subtitle: string;
  subtitleAr: string;
  description: string;
  descriptionAr: string;
  supportingLabel: string;
  supportingLabelAr: string;
  /** Internal subsectors and specialized disciplines */
  subsectors?: SubsectorBrief[];
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
    tab: "projects",
    headline: "Contracting, & Real Estate Development",
    headlineAr: "المقاولات والإنشاءات والتطوير العقاري",
    subtitle: "Integrated Solutions for Construction & Property Development",
    subtitleAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني",
    description: "SAMI BIN AYYAD GROUP delivers comprehensive solutions across general contracting, healthcare facilities, MEP systems, finishing works, and oil & gas specialized civil projects, backed by a documented track record of delivery.",
    descriptionAr: "حلول متكاملة في المقاولات العامة، وتجهيز المنشآت الطبية، والأنظمة الكهروميكانيكية، والتشطيبات، ومشروعات البترول والغاز، مدعومة بسجل مشروعات موثق يمتد لعقود.",
    supportingLabel: "Sectors Inside Contracting",
    supportingLabelAr: "القطاعات المتخصصة داخل قطاع المقاولات",
    subsectors: [
      {
        titleEn: "General Contracting & Civil Works",
        titleAr: "المقاولات العامة والإنشاءات المدنية",
        descEn: "Turnkey structural concrete, multi-story buildings, and large-scale public and private infrastructure.",
        descAr: "تنفيذ شامل للهياكل الخرسانية والأعمال المدنية الكبرى والمشروعات القومية وتسليم المفتاح.",
      },
      {
        titleEn: "Residential & Luxury Villas Development",
        titleAr: "التطوير العقاري والسكني والفلل الفاخرة",
        descEn: "High-end private villas, twin houses, compounds, and turnkey coastal resort developments.",
        descAr: "تطوير الفلل الفاخرة، المجمعات السكنية، والمشروعات الساحلية بأحدث معايير التشطيب والتصميم.",
      },
      {
        titleEn: "Commercial & Administrative Complexes",
        titleAr: "المولات والمباني التجارية والإدارية",
        descEn: "Shopping centers, commercial headquarters, and retail facilities engineered for high traffic and life-safety.",
        descAr: "إنشاء وتشطيب المراكز التجارية والمقرات الإدارية والشركات بأعلى متانة وأنظمة أمان.",
      },
      {
        titleEn: "Healthcare & Specialized Hospital Fit-Out",
        titleAr: "المنشآت الطبية والمستشفيات التخصصية",
        descEn: "Operating theatres, imaging/sterilization suites, medical gas networks, and hospital elevators.",
        descAr: "تجهيز غرف العمليات، الأشعة، وحدات التعقيم، شبكات الغازات الطبية، ومصاعد المستشفيات.",
      },
      {
        titleEn: "Integrated Electromechanical Systems (MEP)",
        titleAr: "الأنظمة الكهروميكانيكية المتكاملة (MEP)",
        descEn: "Central HVAC, power distribution, automated fire fighting, low-current networks, and elevators.",
        descAr: "شبكات القوى والإنارة، التكييف المركزي، مكافحة الحريق، والتيار الخفيف، والمصاعد.",
      },
      {
        titleEn: "Oil & Gas Industrial Civil Works",
        titleAr: "البنية التحتية لمشروعات البترول والغاز",
        descEn: "Gas pipeline concrete protection, gas regulator stations, and petrol service stations.",
        descAr: "أعمال مدنية متخصصة، حماية خطوط الغاز، غرف تخفيض الضغط، ومحطات تموين الوقود والغاز.",
      },
    ],
    figures: [
      { value: "+57", label: "Documented projects", labelAr: "مشروعًا موثقًا" },
      { value: "+540", label: "EGP million+ recorded turnover", labelAr: "مليون جنيه حجم أعمال مسجل" },
    ],
    cta: "Explore Our Projects",
    ctaAr: "استكشف مشروعاتنا",
    image: construction,
  },
  {
    slug: "environmental",
    tab: "services",
    headline: "Sustainable Environment",
    headlineAr: "البيئة المستدامة",
    subtitle: "Integrated environmental solutions that turn challenges into sustainable opportunities.",
    subtitleAr: "حلول بيئية متكاملة تحول التحديات إلى فرص مستدامة",
    description: "Specialized solutions and consulting in environmental impact assessments (EIA/ESIA), waste management and resource recovery, water and wastewater treatment, renewable energy, and HSE compliance.",
    descriptionAr: "حلول واستشارات متخصصة تدعم إدارة الأثر البيئي، وتقييم الأثر البيئي (EIA/ESIA)، وإدارة المخلفات وتحويلها إلى قيمة، ومعالجة المياه، والطاقة المتجددة، والامتثال للسلامة والصحة المهنية.",
    supportingLabel: "Sectors Inside Environmental",
    supportingLabelAr: "القطاعات المتخصصة داخل قطاع البيئة",
    subsectors: [
      {
        titleEn: "EIA / ESIA Studies & Permitting",
        titleAr: "دراسات تقييم الأثر البيئي والتراخيص",
        descEn: "Full environmental compliance assessments, licensing approvals, and environmental audits.",
        descAr: "تقييم بيئي شامل وتراخيص بيئية معتمدة ومراجعة امتثال المنشآت وفق القوانين والتشريعات.",
      },
      {
        titleEn: "Waste Management & Resource Recovery",
        titleAr: "إدارة المخلفات وتدوير الموارد",
        descEn: "Waste-to-energy systems, organic compost, biochar, and circular economy integration.",
        descAr: "تحويل المخلفات إلى طاقة وموارد قيّمة، إنتاج السماد العضوي، الفحم الحيوي، والاقتصاد الدائري.",
      },
      {
        titleEn: "Bioremediation & Odor Treatment",
        titleAr: "المعالجة البيئية الحيوية وإزالة الروائح",
        descEn: "ET-POT-01 for oil-based drilling waste and ET-POR-01 for industrial & municipal odor control.",
        descAr: "منتجات حيوية مبتكرة لمعالجة مخلفات الحفر البترولي (ET-POT-01) وإزالة الروائح (ET-POR-01).",
      },
      {
        titleEn: "Water & Industrial Effluent Treatment",
        titleAr: "معالجة المياه والصرف الصناعي",
        descEn: "Custom engineering solutions for industrial wastewater recycling and zero liquid discharge.",
        descAr: "تصميم وتنفيذ محطات متطورة لمعالجة مياه الصرف الصناعي والصحي وإعادة تدوير الموارد المائية.",
      },
      {
        titleEn: "Digital EHS Platform & IoT Monitoring",
        titleAr: "المنصة الرقمية للامتثال وإنترنت الأشياء",
        descEn: "Authorized agent for Techno Set IoT solutions and the proprietary EHS Regulatory compliance app.",
        descAr: "وكيل معتمد لحلول إنترنت الأشياء Techno Set وتطبيق EHS Regulatory لإدارة السلامة والامتثال.",
      },
    ],
    cta: "Explore Environmental Solutions",
    ctaAr: "استكشف الحلول البيئية",
    image: enviro,
  },
  {
    slug: "garment",
    tab: "services",
    headline: "Garment Manufacturing & Fashion Development",
    headlineAr: "تصنيع الملابس وتطوير الأزياء",
    subtitle: "Integrated Manufacturing for Brands & Global Markets",
    subtitleAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية",
    description: "Specialized manufacturing of women's, children's, and men's apparel, from pattern making and sampling to bulk production, classic shirt lines, Private Label, and FOB export programs.",
    descriptionAr: "تصنيع متكامل للملابس الجاهزة (حريمي، أطفالي، رجالي)، من إعداد الباترونات والعينات والقص والخياطة، إلى خط القمصان الكلاسيك، وبرامج العلامات الخاصة والتصدير بنظام FOB.",
    supportingLabel: "Production Divisions Inside Garment",
    supportingLabelAr: "خطوط الإنتاج والتصنيع داخل قطاع الملابس",
    subsectors: [
      {
        titleEn: "Casual & Contemporary Wear",
        titleAr: "الملابس الكاجوال واليومية",
        descEn: "High-volume precision apparel across cotton, blends, and denim for men and women.",
        descAr: "خطوط إنتاج للملابس الكاجوال النسائية والشبابية بأحدث خطوط الموضة وأقمشة عالية الجودة.",
      },
      {
        titleEn: "Evening Wear & Soirée Collections",
        titleAr: "فساتين السهرة والسواريه",
        descEn: "High-end occasionwear with detailed embroidery, delicate stitching, and premium finishes.",
        descAr: "أزياء راقية وتطريز وتشطيبات دقيقة للمناسبات بمقاييس فاخرة تواكب الأسواق الراقية.",
      },
      {
        titleEn: "Kids & Youth Collections",
        titleAr: "ملابس الأطفال والمواليد",
        descEn: "Safe, ultra-soft combed cotton wear designed specifically for comfort and active use.",
        descAr: "خامات قطنية آمنة وتصاميم عملية مريحة للأطفال من عمر المواليد حتى سن المراهقة.",
      },
      {
        titleEn: "Home Wear & Lingerie",
        titleAr: "الملابس المنزلية واللانجري",
        descEn: "Export-grade loungewear, pajama sets, and delicate lingerie crafted from soft fabrics.",
        descAr: "أقمشة ناعمة ومريحة ومواصفات تصديرية تلبي معايير الجودة والأناقة المنزلية.",
      },
      {
        titleEn: "Dedicated Classic Shirt Lines",
        titleAr: "خطوط القمصان الكلاسيكية التخصصية",
        descEn: "Specialized lines producing 30,000 classic formal shirts per month for prominent brands.",
        descAr: "خط إنتاج متخصص لقمصان الرجال الكلاسيكية بطاقة 30,000 قميص شهرياً بجودة أوروبية.",
      },
      {
        titleEn: "Private Label & FOB Export Programs",
        titleAr: "تصنيع العلامات الخاصة وبرامج FOB",
        descEn: "End-to-end manufacturing from patterns, trims, and packaging to international shipping.",
        descAr: "تصنيع متكامل للعلامات التجارية العالمية من مرحلة الباترون حتى التعبئة والشحن الدولي.",
      },
    ],
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
    supportingLabel: "Product Sectors Inside Natural Products",
    supportingLabelAr: "الأقسام والمنتجات داخل قطاع المنتجات الطبيعية",
    subsectors: [
      {
        titleEn: "Pure Natural Honey & Bee Products",
        titleAr: "عسل النحل النقي ومنتجات الخلية",
        descEn: "Sidr, clover, black seed honey, royal jelly, and propolis verified for purity.",
        descAr: "عسل السدر، البرسيم، حبة البركة، الغذاء الملكي وحبوب اللقاح المعتمدة مخبريًا.",
      },
      {
        titleEn: "Olives & Extra Virgin Olive Oil",
        titleAr: "الزيتون وزيت الزيتون البكر الممتاز",
        descEn: "Cold-pressed extra virgin olive oil, table olives, and premium agricultural crops.",
        descAr: "زيت زيتون بكر ممتاز معصور على البارد، مخللات ومصنعات الزيتون بمواصفات تصديرية.",
      },
      {
        titleEn: "Premium Dates & Gourmet Products",
        titleAr: "التمور الفاخرة ومشتقاتها الطبيعية",
        descEn: "Finest Sukkari, Medjool, Ajwa, date paste, syrup, and artisanal date delicacies.",
        descAr: "أصناف السكري، المجدول، العجوة، دبس ومربى التمر والمنتجات الغذائية المشتقة.",
      },
      {
        titleEn: "Herbs, Spices & Natural Juice Powders",
        titleAr: "الأعشاب والتوابل وعصائر البودر الطبيعية",
        descEn: "Aromatic herbs, culinary spices, and 100% natural powdered beverages.",
        descAr: "أعشاب عطرية وتوابل منتقاة وعصائر بودر طبيعية خالية تماماً من الملونات الصناعية.",
      },
    ],
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

export interface StrategicPartner {
  id: string;
  name: string;
  nameAr: string;
  country: string;
  countryAr: string;
  description: string;
  descriptionAr: string;
  tag: string;
  tagAr: string;
}

export const strategicPartners: StrategicPartner[] = [
  {
    id: "dianyingpu",
    name: "SHENZHEN DIANYINGPU TECHNOLOGY Co., Ltd.",
    nameAr: "شركة شنتشن ديانينغبو للتكنولوجيا المحدودة (SHENZHEN DIANYINGPU TECHNOLOGY Co., Ltd.)",
    country: "China",
    countryAr: "الصين",
    description:
      "Shenzhen Dianyingpu Technology Co., Ltd. (hereinafter referred to as DYP) located in shenzhen city was incorporated in 2008, as a China national high-tech enterprises designs and manufactures ultrasonic sensors, providing OEM, ODM, JDM business service of ultrasonic sensor solutions. DYP company provided millions of sensors worldwide per year, Excellent quality products and good services are highly recognized by customers, our sensors have been integrated into 5000 projects worldwide. DYP company has become the industry preferred ultrasonic sensor supplier in china market.",
    descriptionAr:
      "تأسست شركة شنتشن ديانينغبو للتكنولوجيا المحدودة (DYP) في مدينة شنتشن عام 2008 كإحدى الشركات الوطنية الصينية الرائدة في التقنيات الفائقة. تختص الشركة في تصميم وتصنيع حساسات الموجات فوق الصوتية وتقديم خدمات OEM وODM وJDM المتكاملة، حيث تورد ملايين الحساسات سنويًا حول العالم وتم دمج منتجاتها في أكثر من 5000 مشروع دولي، لتصبح المورد المفضل في السوق الصيني والعالمي.",
    tag: "Ultrasonic Sensors & High-Tech OEM",
    tagAr: "حساسات الموجات فوق الصوتية والتصنيع الذكي",
  },
  {
    id: "jumptek",
    name: "Ningbo JumpTek co.,ltd",
    nameAr: "شركة نينغبو جامبتيك المحدودة (Ningbo JumpTek co.,ltd)",
    country: "China",
    countryAr: "الصين",
    description:
      "Ningbo JumpTek co.,ltd is specialize in the water filter and its spare parts. The company was established in 2011, Through years' development, it has become a large scaled export company of water filters, the products are sold well to domestic and industrial market, a complete global system for marketing and service has been established and is providing good products and excellent service to customers of all over the world. The general manager of the company has been committed to the export trading of water purifier products since 2006, and has accumulated lots of experience in this field and also familiar with QC and export trade process. The company is located in the beautiful Chinese port city of ningbo, according to the favorable geographical conditions, and rely on the hometown of mold&plastic to provide professional mold design and production and injection molding, at the same time rely on the professional bending and spray molding process, to provide customized processing services.",
    descriptionAr:
      "تتخصص شركة نينغبو جامبتيك المحدودة (تأسست عام 2011) في فلاتر المياه وقطع غيارها المتطورة. تطورت الشركة لتصبح صرحًا تصديريًا بارزًا يغطي الأسواق المنزلية والصناعية حول العالم بمنظومة تسويق وخدمة متكاملة. يقود إدارتها رواد متخصصون في تجارة وتنقية المياه منذ 2006 مع خبرة متعمقة في مراقبة الجودة وضوابط التصدير. وتقع الشركة في ميناء نينغبو وتعتمد على قدرات استثنائية في تصميم القوالب وحقن البلاستيك والتشكيل والرش لتقديم خدمات تصنيع مخصصة وفق أعلى المواصفات.",
    tag: "Water Filtration Systems & Precision Mold",
    tagAr: "فلاتر المياه والقوالب الصناعية الدقيقة",
  },
  {
    id: "renergon",
    name: "RENERGON International AG",
    nameAr: "شركة رينرجون الدولية (RENERGON International AG)",
    country: "Switzerland",
    countryAr: "سويسرا",
    description:
      "RENERGON International AG is a dynamic, innovative and globally active company with forward-looking solutions and technologies based on biogas production from biogenic waste. With headquarters in Lengwil, Switzerland and a subsidiary in Berlin, Germany, and a worldwide network of partners. Renergon & EnviroTaqa Alliance will collaborate creating and Developing Biogas Plants with various capacity, Small, Medium and Large-Scale plants Using the advanced dry fermentations technology in Biomass.",
    descriptionAr:
      "شركة رينرجون الدولية (سويسرا) شركة ديناميكية ومبتكرة عالمية رائدة في تقنيات إنتاج الغاز الحيوي من المخلفات العضوية ومقرها الرئيسي في لينغويل بسويسرا وفرعها في برلين بألمانيا مع شبكة شركاء دولية. يتعاون تحالف رينرجون وإنفيروطاقة في إنشاء وتطوير محطات الغاز الحيوي بقدرات متنوعة (صغيرة ومتوسطة وكبيرة) باستخدام تقنية التخمير الجاف المتقدمة في الكتلة الحيوية لتحويل المخلفات لطاقة متجددة وأسمدة عضوية.",
    tag: "Biogas & Dry Fermentation Technology",
    tagAr: "الغاز الحيوي وتكنولوجيا التخمير الجاف",
  },
  {
    id: "technoset",
    name: "TechnoSet",
    nameAr: "شركة تكنوسيت (TechnoSet)",
    country: "Regional / GCC",
    countryAr: "الشرق الأوسط والخليج",
    description:
      "Techno Set is a Zoho Advanced Partner and Creator Certified Expert (Low-Code Solution Provider). We implement Zoho CRM, Zoho Creator ERP, and Zoho One for 220+ businesses across Southeast Asia and the Gulf — with 10+ years of Zoho specialization.",
    descriptionAr:
      "تكنوسيت هي شريك Zoho المتقدم وخبير معتمد في حلول Zoho Creator (مزود حلول Low-Code المتطورة). تنفذ الشركة أنظمة Zoho CRM وZoho Creator ERP وZoho One لأكثر من 220 شركة ومؤسسة عبر جنوب شرق آسيا والخليج العربي مع أكثر من 10 سنوات من التخصص والتطوير التقني المتقدم.",
    tag: "Zoho Advanced ERP & QHSE Systems",
    tagAr: "أنظمة ERP الرقمية وتطبيقات QHSE وIoT",
  },
];

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
    name: "Sheikh Sami Bin Ayyad",
    nameAr: "الشيخ سامي بن عياد",
    image: "/Leadership/Sami Bin Ayyad.jpg",
    bio: "Sheikh Sami Bin Ayyad has an extensive professional and investment journey that began in 1977, when he started in contracting, finishing, and decor, gaining early practical experience in project execution, workforce management, cost estimation, and project oversight. This foundation paved the way for his successful trajectory in trade, investment, and multi-sector corporate leadership.\n\n1977 | The Inception of the Contracting & Finishing Career\nSheikh Sami Bin Ayyad began his operations in contracting, finishing, and interior decor, executing paint works, styling, and outfitting residential units, commercial offices, and retail stores. This formative period built his executive and operational competence, team leadership, and quality control.\n\n1992 | Expansion into Contracting & Finishing in Saudi Arabia\nHis expertise expanded to the Kingdom of Saudi Arabia through architectural works, marble installations, and renovations in collaboration with a Saudi partner, broadening his experience in multi-jurisdiction project management and diverse execution requirements.\n\nDecember 4, 1996 | Founding of Gold & Jewelry Trading\nSheikh Sami Bin Ayyad entered the gold, jewelry, and precious metals trade by establishing a specialized enterprise. His operations covered wholesale markets, purchasing, sales management, market movement tracking, alongside parallel commercial activities in currency trade and automobiles.\n\nJune 5, 1998 | Founding of «Jomlat Al-Sheikh»\nHe established a wholesale food and confectionery distribution enterprise under the trade name «Jomlat Al-Sheikh». This marked a significant expansion in commercial reach, inventory logistics, distribution networks, and operations management.\n\nFebruary 12, 2008 | Founding of Al-Abadila for Heritage Publishing & Scientific Research\nCombining his passion for reading and knowledge with entrepreneurial experience, he founded Al-Abadila for Heritage Book Editing and Scientific Research. The company’s scope grew to scholarly text verification, academic review, and partnerships with specialized printing and publishing houses.\n\nSubsequent Era | Institutional Development & Corporate Expansion\nSheikh Sami Bin Ayyad continued developing ventures across contracting, finishing, procurement, trade, and services. In subsequent institutional structuring, operations evolved into Al-Dakhel General Contracting, followed by SAMI BIN AYYAD FOR TRADE & INVESTMENT, solidifying an integrated corporate ecosystem.\n\nExecutive & Investment Philosophy\nHis management philosophy rests on thorough opportunity assessment, realistic planning, prudent partner selection, rigorous cost estimation, documented commitments, continuous performance monitoring, and learning from practical execution.",
    bioAr: "يمتلك الشيخ سامي بن عياد مسيرة مهنية واستثمارية ممتدة بدأت عام 1977، حين انطلق في مجال المقاولات والتشطيبات والديكور، مكتسبًا خبرة عملية مبكرة في تنفيذ الأعمال وإدارة العمال وتقدير التكاليف ومتابعة المشروعات. وشكّلت هذه البداية الأساس الذي انطلقت منه مسيرته في التجارة والاستثمار وإدارة الأنشطة المتنوعة.\n\nعام 1977 | بداية المسيرة المهنية في المقاولات والتشطيبات\nبدأ الشيخ سامي بن عياد نشاطه في أعمال المقاولات والتشطيبات والديكور، وشملت خبراته تنفيذ أعمال الدهانات والديكورات وتجهيز الوحدات السكنية والمكاتب والمحلات التجارية. وأسهمت هذه المرحلة في بناء خبرته التنفيذية والإدارية، وتعزيز قدرته على إدارة فرق العمل ومتابعة جودة التنفيذ والتعامل مع العملاء.\n\nعام 1992 | التوسع في أعمال المقاولات والتشطيبات بالمملكة العربية السعودية\nامتدت خبرته إلى المملكة العربية السعودية من خلال تجربة في الأعمال المعمارية والتشطيبات بالتعاون مع شريك سعودي، وشملت الأعمال تنفيذ التشطيبات والرخام والترميمات ومشروعات متنوعة. وأسهمت هذه التجربة في توسيع خبرته في إدارة المشروعات والتعامل مع متطلبات التنفيذ في بيئات عمل مختلفة.\n\n4 ديسمبر 1996 | تأسيس نشاط تجارة الذهب والمجوهرات\nدخل الشيخ سامي بن عياد مجال تجارة الذهب والمصوغات والمجوهرات من خلال تأسيس منشأة متخصصة في هذا النشاط. وشملت تجربته التعامل مع أسواق الجملة وإدارة عمليات الشراء والبيع ومتابعة حركة السوق، إلى جانب أنشطة تجارية أخرى، من بينها تجارة العملات والسيارات المستعملة.\n\n5 يونيو 1998 | تأسيس مؤسسة «جملة الشيخ»\nأسس مؤسسة متخصصة في تجارة الجملة للمواد الغذائية ومختلف أنواع الحلويات تحت اسم «جملة الشيخ». ومثّلت هذه المرحلة توسعًا في نطاق أنشطته التجارية، مع اكتساب خبرة في إدارة المخزون وشبكات العملاء والتوزيع والتحصيل والتشغيل.\n\n12 فبراير 2008 | تأسيس شركة العبادلة لتحقيق كتب التراث والبحث العلمي\nأسس شركة العبادلة لتحقيق كتب التراث والبحث العلمي، جامعًا بين اهتمامه بالقراءة والبحث والمطالعة وخبرته في تأسيس الأعمال وإدارتها. وامتد نشاط الشركة إلى إعداد الكتب ومراجعة الأعمال العلمية والتعاون مع المتخصصين في الطباعة والنشر والتوزيع، لتصبح هذه التجربة محطة مهمة تجمع بين الإدارة والعمل المعرفي.\n\nالمرحلة اللاحقة | تطوير المسار المؤسسي والتوسع في الاستثمار والتجارة\nواصل الشيخ سامي بن عياد تطوير خبراته من خلال أنشطة وشراكات متنوعة شملت المقاولات والتشطيبات والتوريدات والتجارة والخدمات، إلى جانب تجارب في قطاعات أخرى. وفي المسار المؤسسي اللاحق، تطورت الأنشطة لتشمل شركة الداخل للمقاولات العامة، ثم شركة سامي بن عياد للتجارة والاستثمار، ضمن توجه نحو بناء منظومة أعمال متنوعة تجمع بين الخبرة التنفيذية والنشاط التجاري والاستثماري.\n\nالرؤية الإدارية والاستثمارية\nتقوم فلسفة الشيخ سامي بن عياد في إدارة الأعمال على دراسة الفرص قبل الدخول فيها، والتخطيط الواقعي، وحسن اختيار الشركاء، وتقدير التكاليف، وتوثيق الالتزامات، ومتابعة الأداء، والاستفادة من التجارب العملية. وتعكس مسيرته الممتدة منذ عام 1977 توجهًا نحو تنويع الأنشطة وتراكم الخبرة وبناء الأعمال على أسس عملية وإدارية واضحة.",
  },
  {
    role: "Founder & HSSE Environmental Leader",
    roleAr: "المؤسس واستشاري البيئة والسلامة",
    name: "Abdelhakam Mashhour",
    nameAr: "عبد الحكم مشهور",
    image: "/Leadership/Abdelhakam Mashhour.jpg",
    bio: "Abdelhakam Mashhour graduated from Alazhar University- Egypt, with Bachelor of Science degree in Biology Department, Over 15 years’ experience in Health, Safety, Environment and the Integrated Management Systems for Oil & Gas industry throughout Middle East. Accredited as Environmental Consultant by the Egyptian Ministry of Environment.\n\nAbdelhakam Mashhour is a highly experienced leader, he has served as Regional HSSE Manager of Seenopex in Middle East in 2012-2018, appointed as QHSE Manager of United Oil Company in Syria & Iraq 2010-2012.\n\nParticipated in a large scale projects in Drilling, intervention Services, Wellhead Integrity and Inspection Services with a global corporations such BP, Shell, ENI, Luk Oil, Schlumberger, Halliburton, SOC Iraq, Weatherford, Daqing.\n\nThese experiences bring not only a deep understanding of the projects management, but the skills to co-ordinate the diverse range of knowledge and perspectives provided to the board.",
    bioAr: "تخرج عبد الحكم مشهور من جامعة الأزهر بمصر، حاصلًا على بكالوريوس العلوم في قسم البيولوجي، ويمتلك أكثر من 15 عامًا من الخبرة في مجالات الصحة والسلامة والبيئة ونظم الإدارة المتكاملة لصناعة النفط والغاز في مختلف أنحاء الشرق الأوسط. وهو استشاري بيئي معتمد ومصرح له من وزارة البيئة المصرية.\n\nيُعد عبد الحكم مشهور قائدًا تنفيذيًا رفيع الخبرة؛ حيث شغل منصب المدير الإقليمي للصحة والسلامة والبيئة (HSSE) لشركة سينوبكس (Seenopex) في الشرق الأوسط خلال الفترة 2012–2018، كما عُيّن مديرًا للجودة والصحة والسلامة والبيئة (QHSE) لشركة يونايتد أويل في سوريا والعراق خلال الفترة 2010–2012.\n\nشارك في مشروعات واسعة النطاق في عمليات الحفر وخدمات التدخل وسلامة رؤوس الآبار وخدمات الفحص والمعاينة مع كبرى الشركات والمؤسسات العالمية مثل BP، وShell، وENI، وLuk Oil، وSchlumberger، وHalliburton، وSOC العراق، وWeatherford، وDaqing.\n\nتمنح هذه الخبرات العميقة ليس فقط فهمًا متقدمًا لإدارة المشروعات، بل والمهارات اللازمة لتنسيق النطاق المتنوع من المعارف والرؤى وتقديمها لمجلس الإدارة.",
  },
  {
    role: "Founder",
    roleAr: "المؤسس",
    name: "Dr. Abdulrahman Bin Ayyad",
    nameAr: "د. عبد الرحمن بن عياد",
    image: "/Leadership/Abdulrahman Bin Ayyad.jpg",
    bio: "Dr. Abdulrahman Ayyad brings multi-disciplinary leadership across executive direction, corporate management, scientific research, educational development, industrial operations, and commercial contracting, with a strategic focus on planning, digital transformation, and international expansion.\n\nHe founded Rewaq Educational Academy in 2019, managing its programs, curricula, and proprietary digital platform, and expanding services to non-Arabic speakers across Europe and the Americas. In scientific research, he conducts heritage manuscript editing with Al-Abadila, having received commendations from eminent scholars of Al-Azhar.\n\nIn industry and trade, he serves as CEO of a specialized apparel manufacturing and export facility and General Manager of Contracts at SAMI BIN AYYAD GROUP, driving contractual partnerships, client-production alignment, and international institutional growth.",
    bioAr: "يمتلك د. عبد الرحمن عياد خبرة متعددة المجالات في القيادة التنفيذية والإدارة المؤسسية والبحث العلمي وتطوير الأنظمة التعليمية وإدارة العمليات الصناعية والتعاقدات التجارية مع اهتمام بالتخطيط الاستراتيجي والتحول الرقمي وبناء الشراكات والتوسع في الأسواق المحلية والدولية.\n\nأسّس أكاديمية رواق التعليمية عام 2019 ويتولى إدارتها وتطوير برامجها ومناهجها لمختلف المراحل العمرية. وفي عام 2021 ساهم في توسيع نطاق خدماتها من خلال التعليم الحضوري وعن بُعد للناطقين بغير العربية في أسواق دولية من بينها أوروبا وأمريكا كما عمل على تطوير تطبيق خاص لدعم العمليات التعليمية والإدارية.\n\nوفي المجال البحثي يعمل باحثًا لدى شركة العبادلة في تحقيق كتب التراث والبحث العلمي كما يمتلك خبرات في التواصل العلمي والثقافي الدولي وحصل على تزكيات من علماء الأزهر الشريف وتولى أدوارًا مرتبطة بالبحث والتمثيل الثقافي وفق صفاته ومهامه المعلنة.\n\nوعلى الصعيد الصناعي والتجاري يشغل منصب الرئيس التنفيذي لمصنع ملابس متخصص في التصنيع للسوقين المحلي والتصديري ويتولى إدارة التعاقدات ومنصب المدير العام في مجموعة سامي بن عياد (SAMI BIN AYYAD GROUP) حيث يركز على إدارة العلاقات التعاقدية وتطوير الشراكات والتنسيق بين متطلبات العملاء والقدرات الإنتاجية ودعم النمو المؤسسي والتوسع الدولي.\n\nوتجمع مسيرته بين الإدارة والبحث والتعليم والصناعة بما يدعم تأسيس المبادرات وتطوير الأنظمة التشغيلية وقيادة الفرق وتحويل الأهداف الاستراتيجية إلى خطط عمل قابلة للتنفيذ والتطوير.",
  },
  {
    role: "Business Developer",
    roleAr: "مطوّر الأعمال",
    name: "Dr. Abdullah Bin Ayyad",
    nameAr: "د. عبد الله بن عياد",
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


