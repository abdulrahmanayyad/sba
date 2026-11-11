// Central Verified Project Database & Portfolio
// SAMI BIN AYYAD GROUP — Documented Project Track Record & Attribution System

export type ExecutionAttributionRole =
  | "direct_group"
  | "subsidiary"
  | "strategic_partner"
  | "commercial_cooperation"
  | "founder_prior_track_record"
  | "under_execution";

export interface VerifiedProjectRecord {
  id: string;
  nameAr: string;
  nameEn: string;
  sector: "construction" | "environmental" | "garment" | "food";
  sectorAr: string;
  sectorEn: string;
  clientAr: string;
  clientEn: string;
  countryAr: string;
  countryEn: string;
  cityAr: string;
  cityEn: string;
  descriptionAr: string;
  descriptionEn: string;
  scopeOfWorkAr: string;
  scopeOfWorkEn: string;
  actualGroupRole: ExecutionAttributionRole;
  actualGroupRoleAr: string;
  actualGroupRoleEn: string;
  contractModel: "EPC" | "Turnkey" | "PPP" | "BOT" | "Joint Venture" | "Contract Manufacturing" | "Advisory / Brokerage";
  startDate: string;
  completionDate: string;
  projectStatus: "Completed" | "Under Implementation" | "Active Program";
  projectStatusAr: string;
  projectStatusEn: string;
  contractValue?: string;
  verificationStatus: "Verified & Approved" | "Audited Archive";
  publicationApproval: boolean;
  technicalHighlightsAr: string[];
  technicalHighlightsEn: string[];
}

export const VERIFIED_PROJECT_DATABASE: VerifiedProjectRecord[] = [
  // 1. Construction & Infrastructure
  {
    id: "PRJ-CON-01",
    nameAr: "مجمع برج الصفا الطبي التخصصي — كفر الشيخ",
    nameEn: "Al-Safa Specialized Medical Tower — Kafr El-Sheikh",
    sector: "construction",
    sectorAr: "المقاولات والتطوير العقاري",
    sectorEn: "Construction & Real Estate",
    clientAr: "القطاع الطبي الخاص واستثمار الأطباء",
    clientEn: "Private Healthcare Sector & Physicians Syndicate",
    countryAr: "مصر",
    countryEn: "Egypt",
    cityAr: "كفر الشيخ",
    cityEn: "Kafr El-Sheikh",
    descriptionAr: "برج طبي متكامل بارتفاع 11 طابقاً مجهز بأحدث معايير المنشآت الطبية وغرف العمليات الكبرى وشبكات الغازات.",
    descriptionEn: "Turnkey 11-storey specialized healthcare tower featuring advanced operating theatres and medical gas networks.",
    scopeOfWorkAr: "المقاولات العامة، الأعمال الإنشائية الخرسانية، التشطيبات الفندقية الطبية، وشبكات الكهروميكانيك (MEP).",
    scopeOfWorkEn: "General contracting, reinforced concrete, specialized medical fit-out, and MEP networks.",
    actualGroupRole: "direct_group",
    actualGroupRoleAr: "تنفيذ مباشر بموجب عقد مقاولات عامة متكامل",
    actualGroupRoleEn: "Direct execution under turnkey general contracting mandate",
    contractModel: "Turnkey",
    startDate: "2023-03-01",
    completionDate: "2025-06-30",
    projectStatus: "Completed",
    projectStatusAr: "مكتمل ومسلّم",
    projectStatusEn: "Completed & Handed Over",
    verificationStatus: "Verified & Approved",
    publicationApproval: true,
    technicalHighlightsAr: [
      "مساحة بنائية 4,200 متر مربع موزعة على 11 طابقاً",
      "شبكات غازات طبية مركزية مطابقة للأكواد الدولية",
      "محطة طوارئ ومولدات احتياطية بقدرة 500 ك.ف.أ"
    ],
    technicalHighlightsEn: [
      "4,200 sq.m built-up area across 11 functional levels",
      "Central medical gas infrastructure meeting ISO healthcare codes",
      "500 kVA backup emergency power generation system"
    ]
  },
  {
    id: "PRJ-CON-02",
    nameAr: "محفظة الاستشارات والتسويق العقاري المصري (400+ مشروع)",
    nameEn: "Egyptian Commercial Real Estate Advisory Portfolio (400+ Developments)",
    sector: "construction",
    sectorAr: "المقاولات والتطوير العقاري",
    sectorEn: "Construction & Real Estate",
    clientAr: "أكثر من 200 مطور عقاري معتمد في مصر",
    clientEn: "200+ Tier-One Egyptian Real Estate Developers",
    countryAr: "مصر",
    countryEn: "Egypt",
    cityAr: "القاهرة الجديدة، العاصمة الإدارية، الساحل الشمالي",
    cityEn: "New Cairo, New Administrative Capital, North Coast",
    descriptionAr: "إدارة وتسويق محافظ عقارية سكنية وتجارية وإدارية بإجمالي مبيعات استشارية تجاوزت 5 مليارات جنيه منذ 2018.",
    descriptionEn: "Strategic commercial marketing and advisory portfolio exceeding 5 Billion EGP in transactional value since 2018.",
    scopeOfWorkAr: "الاستشارات الاستثمارية، دراسات السوق، تسويق المشروعات الكبرى، وتنسيق التحالفات مع المطورين.",
    scopeOfWorkEn: "Investment advisory, market intelligence, master development sales, and institutional co-marketing.",
    actualGroupRole: "founder_prior_track_record",
    actualGroupRoleAr: "مسيرة مهنية واستشارية موثقة لإدارة المجموعة منذ عام 2018",
    actualGroupRoleEn: "Documented executive advisory track record active since 2018",
    contractModel: "Advisory / Brokerage",
    startDate: "2018-01-15",
    completionDate: "2026-12-31",
    projectStatus: "Active Program",
    projectStatusAr: "برنامج استشاري نشط",
    projectStatusEn: "Active Ongoing Program",
    verificationStatus: "Verified & Approved",
    publicationApproval: true,
    technicalHighlightsAr: [
      "أكثر من 400 مشروع عقاري معتمد ومدروس",
      "قاعدة علاقات موثقة مع أكثر من 200 مطور رئيسي",
      "تغطية جغرافية استراتيجية لأهم مناطق الاستثمار المصري"
    ],
    technicalHighlightsEn: [
      "Portfolio spanning 400+ verified developments",
      "Accredited developer network of 200+ partner entities",
      "Pan-Egyptian geographic footprint covering premier investment zones"
    ]
  },

  // 2. Apparel & Manufacturing
  {
    id: "PRJ-GAR-01",
    nameAr: "برنامج التوريد التصديري لسلسلة التجزئة الأوروبية — ملابس نسائية وأطفال",
    nameEn: "European Retail Export Supply Program — Women & Kidswear",
    sector: "garment",
    sectorAr: "تصنيع الملابس وتطوير الأزياء",
    sectorEn: "Apparel & Textiles",
    clientAr: "سلاسل توزيع ومستوردون في ألمانيا وإسبانيا",
    clientEn: "Specialized European Retail Importers (Germany & Spain)",
    countryAr: "ألمانيا / إسبانيا",
    countryEn: "Germany / Spain",
    cityAr: "هامبورغ / برشلونة",
    cityEn: "Hamburg / Barcelona",
    descriptionAr: "تصنيع وتصدير 180,000 قطعة ملابس قطنية عالية الجودة متوافقة مع معايير OEKO-TEX® الأوروبية.",
    descriptionEn: "Contract manufacturing and FOB export delivery of 180,000 certified cotton garments.",
    scopeOfWorkAr: "تطوير العينات الفنية، توريد خامات القطن المصري، القص والخياطة، ومراقبة الجودة AQL 1.5 والتعبئة.",
    scopeOfWorkEn: "Pattern development, Egyptian cotton yarn sourcing, CMT manufacturing, AQL 1.5 inspection, and FOB export.",
    actualGroupRole: "direct_group",
    actualGroupRoleAr: "إدارة وتصنيع تعاقدي عبر شبكة المصانع المؤهلة للمجموعة",
    actualGroupRoleEn: "Direct manufacturing management via verified partner facility network",
    contractModel: "Contract Manufacturing",
    startDate: "2024-02-01",
    completionDate: "2024-11-30",
    projectStatus: "Completed",
    projectStatusAr: "مكتمل ومسلّم",
    projectStatusEn: "Completed & Dispatched",
    verificationStatus: "Verified & Approved",
    publicationApproval: true,
    technicalHighlightsAr: [
      "180,000 قطعة منجزة مطابقة لجدول التسليم الفصلي",
      "معايير فحص الجودة بنسبة AQL 1.5 المعتمدة دولياً",
      "تسمية خاصة (Private Label) وتغليف كامل بعلامة العميل"
    ],
    technicalHighlightsEn: [
      "180,000 pieces delivered strictly to seasonal retail schedules",
      "AQL 1.5 international quality standard compliance rate",
      "Turnkey private labeling and retail-ready packaging"
    ]
  },

  // 3. Sustainability & Clean Energy
  {
    id: "PRJ-ENV-01",
    nameAr: "استشارات محطة الطاقة الشمسية على أسطح المنشآت الصناعية (C&I Solar)",
    nameEn: "Industrial Rooftop Solar PV Advisory & Engineering (C&I)",
    sector: "environmental",
    sectorAr: "البيئة والاستدامة",
    sectorEn: "Sustainability & Environment",
    clientAr: "مجمع صناعات نسيجية ومستودعات لوجستية",
    clientEn: "Textile & Logistic Industrial Complex",
    countryAr: "مصر",
    countryEn: "Egypt",
    cityAr: "مدينة العاشر من رمضان",
    cityEn: "10th of Ramadan City",
    descriptionAr: "دراسة جدوى هندسية ومالية لتركيب محطة طاقة شمسية بقدرة 1.2 ميجاوات لتحقيق خفض 35% في فواتير الكهرباء.",
    descriptionEn: "1.2 MW rooftop solar PV engineering and financial modeling yielding a 35% reduction in grid power costs.",
    scopeOfWorkAr: "حساب الأحمال، الفحص الإنشائي للأسطح، دراسة الربط الشبكي، واختيار تكنولوجيا المحولات والألواح.",
    scopeOfWorkEn: "Load analysis, structural roof assessment, grid interconnection study, and inverter selection.",
    actualGroupRole: "direct_group",
    actualGroupRoleAr: "استشارات هندسية وتصميم مباشر بالتعاون مع شريك EPC معتمد",
    actualGroupRoleEn: "Direct engineering advisory in partnership with accredited EPC contractor",
    contractModel: "Joint Venture",
    startDate: "2024-09-01",
    completionDate: "2025-04-30",
    projectStatus: "Under Implementation",
    projectStatusAr: "قيد التنفيذ والتوريد",
    projectStatusEn: "Under Implementation",
    verificationStatus: "Verified & Approved",
    publicationApproval: true,
    technicalHighlightsAr: [
      "قدرة محطة 1.2 ميجاوات على مساحة سطح 8,500 م²",
      "فترة استرداد مالي متوقعة 3.2 سنوات فقط",
      "خفض انبعاثات سنوية تقدر بـ 1,450 طن مكافئ كربون"
    ],
    technicalHighlightsEn: [
      "1.2 MW PV capacity across 8,500 sq.m rooftop area",
      "3.2 years projected operational investment payback",
      "Annual carbon offset of 1,450 tons CO2 equivalent"
    ]
  },

  // 4. Food & Natural Commodities
  {
    id: "PRJ-FOD-01",
    nameAr: "توريد التمور السيوي المصرية الممتازة لموزعي آسيا والخليج",
    nameEn: "Premium Egyptian Siwi Dates Export Program — Asia & GCC",
    sector: "food",
    sectorAr: "المنتجات الطبيعية والغذائية",
    sectorEn: "Food & Agri-Commodities",
    clientAr: "شركات استيراد وتوزيع سلع غذائية في إندونيسيا والإمارات",
    clientEn: "Commodity Importers in Indonesia & UAE",
    countryAr: "إندونيسيا / الإمارات",
    countryEn: "Indonesia / UAE",
    cityAr: "جاكرتا / دبي",
    cityEn: "Jakarta / Dubai",
    descriptionAr: "فرز وتعبئة وشحن 420 طناً من تمور واحة سيوة الطبيعية المفروزة آلياً والمعالجة حرارياً.",
    descriptionEn: "Grading, fumigation, packaging, and export of 420 Metric Tons of premium Egyptian Siwi dates.",
    scopeOfWorkAr: "الاستلام من المزارع، الفرز حسب درجات الجودة، الغسيل والتجفيف، التعبئة في كراتين 5 كجم و10 كجم، والفحص الحجري.",
    scopeOfWorkEn: "Farm procurement, mechanical grading, optical sorting, moisture standardization, bulk packing, and phytosanitary clearance.",
    actualGroupRole: "direct_group",
    actualGroupRoleAr: "توريد وتنسيق تصديري مباشر",
    actualGroupRoleEn: "Direct procurement & export coordination",
    contractModel: "Turnkey",
    startDate: "2024-10-01",
    completionDate: "2025-02-15",
    projectStatus: "Completed",
    projectStatusAr: "مكتمل ومسلّم",
    projectStatusEn: "Completed & Dispatched",
    verificationStatus: "Verified & Approved",
    publicationApproval: true,
    technicalHighlightsAr: [
      "420 طناً مترياً تم شحنها بحاويات مبردة 40 قدماً",
      "نسبة رطوبة مقاسة ومثبتة بين 18% و 20%",
      "خلو تام من المبيدات وشهادات فحص مخبري موثقة"
    ],
    technicalHighlightsEn: [
      "420 Metric Tons dispatched in refrigerated 40ft reefer containers",
      "Standardized moisture balance between 18% and 20%",
      "Complete pesticide-free lab clearance certificates"
    ]
  }
];

export function getProjectsBySector(sector: "construction" | "environmental" | "garment" | "food"): VerifiedProjectRecord[] {
  return VERIFIED_PROJECT_DATABASE.filter((p) => p.sector === sector);
}

