export interface InvestmentModel {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  structureEn: string;
  structureAr: string;
  highlightsEn: string[];
  highlightsAr: string[];
}

export interface InvestmentOpportunity {
  id: string;
  sector: "construction" | "environmental" | "garment" | "food";
  sectorNameEn: string;
  sectorNameAr: string;
  titleEn: string;
  titleAr: string;
  scopeEn: string;
  scopeAr: string;
  modelEn: string;
  modelAr: string;
  marketDriversEn: string;
  marketDriversAr: string;
  partnershipTypeEn: string;
  partnershipTypeAr: string;
  statusEn: string;
  statusAr: string;
}

export interface InvestorDocument {
  id: string;
  titleEn: string;
  titleAr: string;
  categoryEn: string;
  categoryAr: string;
  fileSize: string;
  fileName: string;
  descEn: string;
  descAr: string;
}

export const investmentOverviewData = {
  hero: {
    badgeEn: "Investor Relations & Capital Alliances",
    badgeAr: "علاقات المستثمرين والتحالفات الرأسمالية",
    titleEn: "Institutional Partnerships Driving Sustainable Industrial & Real Asset Growth",
    titleAr: "شراكات مؤسسية استراتيجية تقود النمو الصناعي والأصول المستدامة",
    subtitleEn: "Sami Bin Ayyad Group collaborates with family offices, private equity funds, sovereign institutions, and international industrial operators to scale high-impact real asset projects across Egypt, the MENA region, and global supply chains.",
    subtitleAr: "تتعاون مجموعة سامي بن عياد مع المكاتب العائلية، وصناديق الاستثمار المباشر، والمؤسسات الاستثمارية والشركاء الصناعيين الدوليين للتوسع في مشروعات الأصول الحقيقية في مصر والشرق الأوسط وسلاسل التوريد العالمية.",
  },
  pillars: [
    {
      titleEn: "Real Asset Focus",
      titleAr: "التركيز على الأصول الحقيقية",
      descEn: "Investments anchored in operating industrial manufacturing plants, commercial contracting portfolios, verified agricultural supply networks, and renewable energy infrastructure.",
      descAr: "استثمارات قائمة على أصول حقيقية تشغيلية تشمل مجمعات التصنيع، محفظة المقاولات العامة، وسلاسل الإمداد الزراعي، ومحطات الطاقة المتجددة.",
    },
    {
      titleEn: "Disciplined Governance",
      titleAr: "حوكمة مؤسسية منضبطة",
      descEn: "Strict adherence to transparency, international accounting alignments, documented operational milestones, and risk-managed execution across every operating division.",
      descAr: "التزام كامل بمعايير الحوكمة والشفافية، والمطابقة المحاسبية الدولية، وتوثيق الإنجازات التشغيلية وإدارة المخاطر في كافة القطاعات.",
    },
    {
      titleEn: "Strategic Geographic Positioning",
      titleAr: "موقع استراتيجي عالمي",
      descEn: "Egypt serves as a tariff-advantaged export launchpad to European, African (AfCFTA), and US (QIZ) markets with competitive operating economics and established logistical corridors.",
      descAr: "مصر مركز إقليمي مميز للتصدير مدعوم باتفاقيات تجارية تفضيلية نحو أوروبا وأفريقيا (AfCFTA) وأمريكا (QIZ) مع كفاءة تشغيلية وبنية لوجستية متطورة.",
    },
    {
      titleEn: "Co-Investment Alignment",
      titleAr: "توافق المصالح الاستثمارية",
      descEn: "SBA commits significant proprietary capital, engineering expertise, executive leadership, and local operating licenses alongside our investment partners.",
      descAr: "تشارك المجموعة برأس مال حقيقي وخبرة هندسية وتراخيص تشغيلية وإشراف مباشر بجانب شركائها الاستثماريين لضمان توافق المصالح.",
    },
  ],
};

export const investmentModels: InvestmentModel[] = [
  {
    id: "joint-ventures",
    titleEn: "Strategic Joint Ventures (JV)",
    titleAr: "المشروعات المشتركة الاستراتيجية (JV)",
    descEn: "Co-ownership in newly incorporated special purpose operating companies (SPVs) for targeted industrial facilities or specialized contracting subsidiaries.",
    descAr: "ملكية مشتركة في شركات ذات غرض خاص (SPVs) لتأسيس وتشغيل مصانع متخصصة أو أذرع مقاولات تخصصية.",
    structureEn: "50/50 or tailored equity split with shared board representation and milestone-based governance.",
    structureAr: "هيكل مساهمة متفق عليه مع تمثيل بمجلس الإدارة وحوكمة مبنية على مؤشرات الإنجاز.",
    highlightsEn: [
      "Dedicated corporate legal entity",
      "Shared technological & intellectual property",
      "SBA provides local execution, licensing, and facilities",
      "Quarterly operational & financial reporting",
    ],
    highlightsAr: [
      "كيان قانوني مستقل ومسجل رسميًا",
      "مشاركة الأصول الفنية والتكنولوجية",
      "توفير التراخيص والبنية التحتية والتشغيل الميداني من SBA",
      "تقارير تشغيلية ومالية دورية ربع سنوية",
    ],
  },
  {
    id: "project-equity",
    titleEn: "Project-Specific Equity Financing",
    titleAr: "المساهمة الرأسمالية في المشروعات المحددة",
    descEn: "Targeted capital allocation into designated large-scale projects such as Waste-to-Energy biogas installations, industrial real estate developments, or agricultural processing lines.",
    descAr: "ضخ رأس مال استثماري في مشروعات محددة مثل محطات تحويل المخلفات لطاقة، التطوير العقاري الصناعي، أو خطوط التصنيع الغذائي والزراعي.",
    structureEn: "Preferred equity or structured equity with preferred dividend distribution prior to common distributions.",
    structureAr: "حصص ملكية مفضلة أو هيكل استثماري يضمن أولوية توزيعات الأرباح المرتبطة بتدفقات المشروع.",
    highlightsEn: [
      "Ring-fenced project balance sheet",
      "Clear asset collateral and off-take contracts",
      "Defined milestone exit horizons (3-7 years)",
      "Independent project auditing and escrow accounts",
    ],
    highlightsAr: [
      "ذمة مالية مستقلة للمشروع",
      "عقود شراء وتوريد مسبقة (Off-take Agreements)",
      "أفق تخارج استثماري محدد (3-7 سنوات)",
      "حسابات ضمان بنكية وتدقيق مالي مستقل",
    ],
  },
  {
    id: "expansion-equity",
    titleEn: "Growth Capital & Expansion Equity",
    titleAr: "رأس مال النمو والتوسع التشغيلي",
    descEn: "Direct equity investment into SBA's established operating sectors to accelerate automated machinery procurement, international export distribution, and working capital scale.",
    descAr: "استثمار مباشر في القطاعات التشغيلية القائمة للمجموعة لتمويل التوسع في خطوط الإنتاج المؤتمتة وزيادة حجم الصادرات والقدرة التشغيلية.",
    structureEn: "Minority growth equity stakes in parent holding sector subsidiaries with agreed value-creation roadmaps.",
    structureAr: "حصص أقلية استراتيجية في الشركات التابعة مع خطة عمل واضحة لتعظيم القيمة السوقية.",
    highlightsEn: [
      "Direct exposure to profitable operating cash flows",
      "Immediate operational utilization with zero greenfield delays",
      "Leverage existing export client books and supply agreements",
      "Structured buyback or strategic IPO / trade sale options",
    ],
    highlightsAr: [
      "عائد مرتبط مباشرة بتدفقات نقدية تشغيلية قائمة",
      "استفادة فورية من الأصول دون فترات انتظار التأسيس",
      "الاستفادة من قاعدة عملاء التصدير الحالية",
      "خيارات تخارج مدروسة وإعادة شراء أو طرح استراتيجي",
    ],
  },
];

export const investmentOpportunities: InvestmentOpportunity[] = [
  {
    id: "opp-waste-to-energy",
    sector: "environmental",
    sectorNameEn: "Sustainable Environment & Energy",
    sectorNameAr: "البيئة المستدامة والطاقة المتجددة",
    titleEn: "Regional Waste-to-Energy & Dry Fermentation Biogas Utilities",
    titleAr: "محطات تحويل المخلفات لطاقة وتوليد الغاز الحيوي الإقليمية",
    scopeEn: "Scaling utility-scale biogas and biomethane power facilities in partnership with RENERGON International AG (Switzerland) across high-density agricultural and municipal centers in Egypt.",
    scopeAr: "توسيع وتدشين محطات كبرى للبيوجاز والميثان الحيوي بالشراكة مع رينرجون السويسرية في المناطق الزراعية والمجمعات الصناعية المصرية.",
    modelEn: "SPV Project Equity & BOT / BOO Concession Frameworks",
    modelAr: "شركة ذات غرض خاص (SPV) بنظام الامتياز والتشغيل والتمويل",
    marketDriversEn: "Surging demand for renewable base-load power, European green ammonia/fertilizer off-take, and Egyptian government carbon-reduction incentives.",
    marketDriversAr: "الطلب المتزايد على الطاقة النظيفة، تصدير الأسمدة الخضراء، وتوجه الدولة لدعم الاقتصاد الدائري.",
    partnershipTypeEn: "Co-Investor / Institutional Fund",
    partnershipTypeAr: "مستثمر شريك / صناديق استثمار مؤسسية",
    statusEn: "Active Structuring",
    statusAr: "قيد الإعداد والترتيب المؤسسي",
  },
  {
    id: "opp-apparel-export",
    sector: "garment",
    sectorNameEn: "Garment Manufacturing & Export",
    sectorNameAr: "تصنيع وتصدير الملابس الجاهزة",
    titleEn: "Advanced Automated Textile Dyeing & High-Capacity Export Facility",
    titleAr: "مجمع النسيج والصباغة الآلية ورفع الطاقة التصديرية للملابس",
    scopeEn: "Expanding continuous automated dyeing, digital textile printing, and specialized stitching lines to double export output to European and North American fashion retailers.",
    scopeAr: "مضاعفة الطاقة الإنتاجية عبر إضافة خطوط صباغة رقمية وتجهيز نسيج مؤتمت لتلبية عقود التوريد المتنامية لأوروبا وأمريكا.",
    modelEn: "Growth Equity Injection / Strategic Industrial JV",
    modelAr: "مساهمة رأسمالية للتوسع / شراكة صناعية استراتيجية",
    marketDriversEn: "Global nearshoring shift from Asia to Egypt, competitive energy and labor costs, and duty-free access via international trade agreements.",
    marketDriversAr: "إعادة توطين سلاسل التوريد العالمية (Nearshoring)، ميزة التكلفة التنافسية، والاتفاقيات الجمركية الحرة.",
    partnershipTypeEn: "Industrial Co-Manufacturer / Private Equity",
    partnershipTypeAr: "شريك صناعي دولي / صندوق استثمار خاص",
    statusEn: "Open for Strategic Dialogue",
    statusAr: "متاح للمباحثات الاستراتيجية",
  },
  {
    id: "opp-food-processing",
    sector: "food",
    sectorNameEn: "Natural & Agri-Food Products",
    sectorNameAr: "الأغذية والمنتجات الطبيعية والزراعية",
    titleEn: "Integrated Olive Oil Cold-Extraction & Certified Aromatic Extraction Plant",
    titleAr: "مجمع استخلاص وتعبئة زيت الزيتون البكر ومستخلصات الأعشاب الطبية",
    scopeEn: "Developing a modern high-capacity olive milling and botanical solventless extraction facility in the Sinai / Ismailia agricultural corridor targeting premium bulk and bottled exports.",
    scopeAr: "إنشاء مجمع صناعي لعصر وتكرير زيت الزيتون واستخلاص الزيوت العطرية والطبية بمحور الإسماعيلية وسيناء الزراعي للتصدير الدولي.",
    modelEn: "Agro-Industrial Joint Venture / Equity Partnership",
    modelAr: "مشروع استثماري مشترك في التصنيع الزراعي",
    marketDriversEn: "Worldwide shortage in high-grade Mediterranean EVOO, soaring global natural botanical extract demand, and certified non-GMO organic origin premiums.",
    marketDriversAr: "العجز العالمي في زيت الزيتون البكر الممتاز، والطلب القياسي على الأعشاب والمستخلصات الطبية المصرية الخالية من التعديل الوراثي.",
    partnershipTypeEn: "Global Food Conglomerate / Agri-Fund",
    partnershipTypeAr: "مجموعات غذائية دولية / صناديق التنمية الزراعية",
    statusEn: "Feasibility Validated",
    statusAr: "دراسات الجدوى معتمدة ومكتملة",
  },
  {
    id: "opp-construction-mep",
    sector: "construction",
    sectorNameEn: "Contracting & Infrastructure",
    sectorNameAr: "المقاولات العامة والبنية التحتية",
    titleEn: "Healthcare Specialized MEP & Gas Infrastructure Development Division",
    titleAr: "ذراع المشروعات الطبية المتخصصة وشبكات الغاز الكهروميكانيكية",
    scopeEn: "Consolidating SBA's 45+ year track record into an independent high-spec engineering subsidiary for specialized healthcare cleanrooms, medical gases, and industrial civil contracts.",
    scopeAr: "تحويل خبرة الـ 45 عامًا في المستشفيات وشبكات الغاز إلى كيان هندسي متخصص لمشروعات الرعاية الصحية والبنية التحتية الكبرى.",
    modelEn: "Strategic Alliance / Institutional Debt & Equity",
    modelAr: "تحالف استراتيجي / تمويل رأسمالي مشترك",
    marketDriversEn: "Egypt's Universal Health Insurance rollout, national hospital modernization programs, and high-margin specialized fit-out demands.",
    marketDriversAr: "منظومة التأمين الصحي الشامل القومية، وتحديث المستشفيات والمراكز التخصصية، ومعدلات الربحية المرتفعة للأعمال التخصصية.",
    partnershipTypeEn: "Healthcare Operator / Institutional Contractor",
    partnershipTypeAr: "مشغلو المستشفيات / شركات المقاولات الدولية",
    statusEn: "Active Structuring",
    statusAr: "قيد الترتيب والتعاقد",
  },
];

export const investorDocuments: InvestorDocument[] = [
  {
    id: "doc-corporate-profile",
    titleEn: "Sami Bin Ayyad Group — Corporate Profile (2026 Edition)",
    titleAr: "الملف التعريفي المؤسسي لمجموعة سامي بن عياد (إصدار 2026)",
    categoryEn: "Corporate Overview",
    categoryAr: "نظرة عامة على المجموعة",
    fileSize: "4.8 MB",
    fileName: "SBA_Group_Corporate_Profile_2026.pdf",
    descEn: "Comprehensive corporate presentation covering 45+ years heritage, governance framework, board members, 4 core sectors, and international alliances.",
    descAr: "عرض مؤسسي شامل يغطي تاريخ المجموعة الممتد لأكثر من 45 عامًا، هيكل الحوكمة، مجلس الإدارة، القطاعات الأربعة، والشراكات الدولية.",
  },
  {
    id: "doc-investment-presentation",
    titleEn: "SBA Strategic Investment & Expansion Prospectus",
    titleAr: "مذكرة التوجهات والفرص الاستثمارية للمجموعة",
    categoryEn: "Investment Strategy",
    categoryAr: "استراتيجية الاستثمار",
    fileSize: "6.2 MB",
    fileName: "SBA_Investment_Expansion_Prospectus.pdf",
    descEn: "Detailed institutional overview of business models, capital allocation principles, target sector returns criteria, and co-investment frameworks.",
    descAr: "وثيقة مفصلة للمستثمرين توضح نماذج الشراكة، أولويات تخصيص رأس المال، ومعايير الجدوى التشغيلية، ومحددات الحوكمة الاستثمارية.",
  },
  {
    id: "doc-sector-dossier-environmental",
    titleEn: "Environmental Technologies & Waste-to-Energy Dossier",
    titleAr: "الملف الفني للحلول البيئية وتكنولوجيا تحويل المخلفات لطاقة",
    categoryEn: "Sector Technical Brief",
    categoryAr: "ملف القطاع الفني",
    fileSize: "3.5 MB",
    fileName: "SBA_Environmental_Sector_Investment_Brief.pdf",
    descEn: "Technical specifications, patented Swiss RSD biogas technology data, carbon footprint tools, and market opportunity analysis.",
    descAr: "المواصفات الفنية لمحطات البيوجاز السويسرية RSD، برمجيات البصمة الكربونية، وحجم السوق المستهدف في الشرق الأوسط وأفريقيا.",
  },
  {
    id: "doc-sector-dossier-apparel",
    titleEn: "Apparel Industrial Infrastructure & FOB Export Capacity",
    titleAr: "البنية الصناعية لتصنيع وتصدير الملابس الجاهزة",
    categoryEn: "Sector Industrial Brief",
    categoryAr: "ملف القطاع الصناعي",
    fileSize: "5.1 MB",
    fileName: "SBA_Garment_Manufacturing_Export_Capacity.pdf",
    descEn: "Machinery specifications, production capacities (up to 150,000 units/mo), international certifications (OEKO-TEX, ISO), and model library index.",
    descAr: "مواصفات خطوط الإنتاج والقص والتطريز، الطاقات الشهرية (تصل إلى 150,000 قطعة شهريًا)، شهادات المطابقة الدولية، وفهرس مكتبة الموديلات.",
  },
];

