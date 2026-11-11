// Investor & Corporate Data Room Registry
// SAMI BIN AYYAD GROUP — Structured Corporate Documentation & Investor Repository

export type DataRoomCategoryKey =
  | "corporate_documents"
  | "financial_information"
  | "sector_capabilities"
  | "project_portfolio"
  | "certifications_compliance"
  | "investment_opportunities"
  | "technical_documents";

export type DataRoomAccessLevel =
  | "public"
  | "registered_business"
  | "nda_protected"
  | "restricted_investor";

export interface DataRoomDocument {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  sector: "corporate" | "construction" | "environmental" | "garment" | "food";
  sectorEn: string;
  sectorAr: string;
  category: DataRoomCategoryKey;
  categoryEn: string;
  categoryAr: string;
  accessLevel: DataRoomAccessLevel;
  accessLevelEn: string;
  accessLevelAr: string;
  language: "EN" | "AR" | "Bilingual";
  format: string;
  fileSize: string;
  lastUpdated: string;
  downloadUrl?: string;
  fileName: string;
  featured?: boolean;
}

export const DATA_ROOM_CATEGORIES: {
  id: DataRoomCategoryKey;
  code: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}[] = [
  {
    id: "corporate_documents",
    code: "A",
    titleEn: "Corporate Documents",
    titleAr: "الوثائق المؤسسية والحوكمة",
    descEn: "Company profile, corporate structure, registry references, and governance guidelines.",
    descAr: "الملف التعريفي الشامل، الهيكل المؤسسي، السجلات القانونية المعتمدة، وأدلة الحوكمة."
  },
  {
    id: "financial_information",
    code: "B",
    titleEn: "Financial Information",
    titleAr: "البيانات والمؤشرات المالية",
    descEn: "Approved business performance reports, financial summaries, and institutional valuation metrics.",
    descAr: "تقارير الأداء التجاري، ملخصات البيانات المالية، ومؤشرات الجدارة الائتمانية والاستثمارية."
  },
  {
    id: "sector_capabilities",
    code: "C",
    titleEn: "Sector Capabilities",
    titleAr: "قدرات القطاعات ومواصفات التشغيل",
    descEn: "Operational capacities, delivery models, and technical infrastructure across our four sectors.",
    descAr: "بيانات الطاقة التشغيلية، نماذج التعاقد، والبنية التحتية عبر قطاعاتنا الأربعة."
  },
  {
    id: "project_portfolio",
    code: "D",
    titleEn: "Project Portfolio & Case Studies",
    titleAr: "محفظة المشروعات الموثقة ودراسات الحالة",
    descEn: "Verified execution profiles, completion milestones, and technical case studies.",
    descAr: "سجلات المشروعات المنجزة والموثقة، مراحل التسليم، ودراسات الجدوى التطبيقية."
  },
  {
    id: "certifications_compliance",
    code: "E",
    titleEn: "Certifications & Compliance",
    titleAr: "شهادات الامتثال والجودة والبيئة",
    descEn: "Quality compliance, environmental clearances, and official trade certifications.",
    descAr: "شهادات الجودة الصناعية، تراخيص الامتثال البيئي، وشهادات النفاذ للأسواق الدولية."
  },
  {
    id: "investment_opportunities",
    code: "F",
    titleEn: "Investment Opportunities",
    titleAr: "فرص ومذكرات الاستثمار المشترك",
    descEn: "Approved investment memorandums, PPP initiatives, and joint venture frameworks.",
    descAr: "مذكرات الفرص الاستثمارية المعتمدة، مبادرات الشراكة مع القطاع الخاص، وتحالفات JV."
  },
  {
    id: "technical_documents",
    code: "G",
    titleEn: "Technical Documents & Catalogues",
    titleAr: "الوثائق الفنية والكتالوجات المعتمدة",
    descEn: "Certified product catalogues, manufacturing specifications, and Technical Data Sheets (TDS).",
    descAr: "كتالوجات المنتجات المعتمدة، أدلة المواصفات الفنية، ونشرات البيانات الصناعية TDS."
  }
];

export const DATA_ROOM_ACCESS_LEVELS: {
  id: DataRoomAccessLevel;
  badgeEn: string;
  badgeAr: string;
  color: string;
  descEn: string;
  descAr: string;
}[] = [
  {
    id: "public",
    badgeEn: "Public Access",
    badgeAr: "متاح للعموم",
    color: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
    descEn: "Instantly downloadable for all prospective clients and partners.",
    descAr: "تحميل فوري مباشر لجميع العملاء والشركاء."
  },
  {
    id: "registered_business",
    badgeEn: "Registered Business Access",
    badgeAr: "للشركات المسجلة",
    color: "bg-sky-500/15 text-sky-400 border-sky-500/30",
    descEn: "Accessible upon corporate verification and commercial registration validation.",
    descAr: "متاح للشركات بعد التحقق من البيانات المؤسسية والسجل التجاري."
  },
  {
    id: "nda_protected",
    badgeEn: "NDA-Protected",
    badgeAr: "محمي باتفاقية سرية (NDA)",
    color: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    descEn: "Requires formal Non-Disclosure Agreement (NDA) countersignature.",
    descAr: "يتطلب توقيع اتفاقية الحفاظ على سرية المعلومات المؤسسية."
  },
  {
    id: "restricted_investor",
    badgeEn: "Restricted Investor Access",
    badgeAr: "مخصص للمستثمرين المعتمدين",
    color: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    descEn: "Exclusive to qualified institutional investors and vetted funds with clearance.",
    descAr: "مخصص حصرياً للمؤسسات والصناديق الاستثمارية المؤهلة بعد موافقة مجلس الإدارة."
  }
];

export const DATA_ROOM_DOCUMENTS: DataRoomDocument[] = [
  // Category A: Corporate Documents
  {
    id: "DOC-CORP-01",
    titleEn: "Complete Corporate Company Profile (2025–2026 Edition)",
    titleAr: "الملف التعريفي الشامل للمجموعة (إصدار 2025–2026)",
    descriptionEn: "Comprehensive overview of Sami Bin Ayyad Group, executive leadership, legal constitution, and cross-sector portfolio.",
    descriptionAr: "وثيقة مؤسسية معتمدة تستعرض رؤية المجموعة، القيادة التنفيذية، التأسيس القانوني، ومحفظة العمليات عبر القطاعات.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "AR",
    format: "PDF (A4)",
    fileSize: "4.8 MB",
    lastUpdated: "2026-01-15",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Complete_Corporate_Profile_AR.pdf",
    featured: true
  },
  {
    id: "DOC-CORP-02",
    titleEn: "Corporate Company Profile (English International Edition)",
    titleAr: "الملف التعريفي المؤسسي (النسخة الإنجليزية الدولية)",
    descriptionEn: "Certified international edition detailing corporate structure, holding subsidiaries, and export infrastructure.",
    descriptionAr: "النسخة الدولية المعتمدة باللغة الإنجليزية لتوضيح الهيكل المؤسسي وشبكة العمليات والتصدير الدولية.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "EN",
    format: "PDF (A4)",
    fileSize: "4.6 MB",
    lastUpdated: "2026-01-15",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
    fileName: "SBA_Complete_Corporate_Profile_EN.pdf",
    featured: true
  },
  {
    id: "DOC-CORP-03",
    titleEn: "Corporate Governance & Compliance Charter",
    titleAr: "ميثاق الحوكمة المؤسسية والالتزام التنظيمي",
    descriptionEn: "Framework governing board committees, executive audits, transparency policies, and code of conduct.",
    descriptionAr: "الإطار المنظم للجان الحوكمة، التدقيق المؤسسي، سياسات الشفافية، وميثاق السلوك المهني.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "registered_business",
    accessLevelEn: "Registered Business Access",
    accessLevelAr: "للشركات المسجلة",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "2.1 MB",
    lastUpdated: "2025-11-20",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Governance_Charter.pdf"
  },

  // Category B: Financial Information
  {
    id: "DOC-FIN-01",
    titleEn: "Annual Business Performance & Trading Summary (FY 2024–2025)",
    titleAr: "تقرير الأداء التجاري والمالي المعتمد (2024–2025)",
    descriptionEn: "Consolidated operational turnover, sector contribution ratios, and audited commercial milestones.",
    descriptionAr: "حجم الأعمال التشغيلي، مؤشرات مساهمة القطاعات في العوائد، ومعدلات النمو التجاري المعتمدة.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "financial_information",
    categoryEn: "Financial Information",
    categoryAr: "البيانات والمؤشرات المالية",
    accessLevel: "restricted_investor",
    accessLevelEn: "Restricted Investor Access",
    accessLevelAr: "مخصص للمستثمرين المعتمدين",
    language: "Bilingual",
    format: "PDF / Financial Dossier",
    fileSize: "3.5 MB",
    lastUpdated: "2026-01-30",
    fileName: "SBA_Financial_Performance_Summary.pdf"
  },
  {
    id: "DOC-FIN-02",
    titleEn: "Institutional Investor Presentation: Multi-Sector Growth 2026–2030",
    titleAr: "العرض الاستثماري المؤسسي: استراتيجية النمو والتوسع 2026–2030",
    descriptionEn: "Strategic investment thesis, expansion plans in regional manufacturing, industrial real estate, and clean energy.",
    descriptionAr: "أطروحة الاستثمار المؤسسي، خطط التوسع في التصنيع الإقليمي، التطوير العقاري، ومحطات الطاقة النظيفة.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "financial_information",
    categoryEn: "Financial Information",
    categoryAr: "البيانات والمؤشرات المالية",
    accessLevel: "nda_protected",
    accessLevelEn: "NDA-Protected",
    accessLevelAr: "محمي باتفاقية سرية (NDA)",
    language: "EN",
    format: "Presentation (PDF)",
    fileSize: "7.2 MB",
    lastUpdated: "2026-02-01",
    fileName: "SBA_Investor_Presentation_2026.pdf",
    featured: true
  },

  // Category C: Sector Capabilities
  {
    id: "DOC-CAP-01",
    titleEn: "Apparel & Textile Manufacturing Capabilities Dossier",
    titleAr: "دليل القدرات التشغيلية لتصنيع الملابس والمنسوجات",
    descriptionEn: "Complete production line specs, fabric sourcing networks, quality inspection stages, and CM/CMT/FOB models.",
    descriptionAr: "المواصفات الفنية لخطوط الإنتاج، شبكة سلاسل إمداد الأقمشة، مراحل مراقبة الجودة، ونماذج التوريد التعاقدي.",
    sector: "garment",
    sectorEn: "Apparel Manufacturing",
    sectorAr: "تصنيع الملابس وتطوير الأزياء",
    category: "sector_capabilities",
    categoryEn: "Sector Capabilities",
    categoryAr: "قدرات القطاعات ومواصفات التشغيل",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.8 MB",
    lastUpdated: "2026-01-20",
    downloadUrl: "/downloads/SBA_Apparel_Capabilities_EN.pdf",
    fileName: "SBA_Apparel_Capabilities.pdf"
  },
  {
    id: "DOC-CAP-02",
    titleEn: "General Contracting & Infrastructure Technical Scope",
    titleAr: "النطاق الفني لأعمال المقاولات المتكاملة والبنية التحتية",
    descriptionEn: "Engineering workflows, civil contracting, electromechanical (MEP) execution, and project governance protocols.",
    descriptionAr: "المنهجية الهندسية، المقاولات المدنية، الأعمال الكهروميكانيكية، وبروتوكولات إدارة المشروعات.",
    sector: "construction",
    sectorEn: "Construction & Real Estate",
    sectorAr: "المقاولات والتطوير العقاري",
    category: "sector_capabilities",
    categoryEn: "Sector Capabilities",
    categoryAr: "قدرات القطاعات ومواصفات التشغيل",
    accessLevel: "registered_business",
    accessLevelEn: "Registered Business Access",
    accessLevelAr: "للشركات المسجلة",
    language: "AR",
    format: "PDF (A4)",
    fileSize: "4.1 MB",
    lastUpdated: "2025-12-10",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Contracting_Technical_Scope.pdf"
  },
  {
    id: "DOC-CAP-03",
    titleEn: "Sustainability Services & Environmental Compliance Scope",
    titleAr: "محفظة الخدمات البيئية واستشارات الامتثال الصناعي",
    descriptionEn: "Detailed delivery models (in-house vs international technical partner) for industrial effluent, C&I solar, and EPR.",
    descriptionAr: "نماذج التنفيذ المباشر وعبر الشركاء الدوليين لمحطات معالجة الصرف الصناعي، الطاقة الشمسية، ومسؤولية المنتج.",
    sector: "environmental",
    sectorEn: "Environment & Sustainability",
    sectorAr: "البيئة والاستدامة",
    category: "sector_capabilities",
    categoryEn: "Sector Capabilities",
    categoryAr: "قدرات القطاعات ومواصفات التشغيل",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.2 MB",
    lastUpdated: "2026-02-05",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Environmental_Services_Scope.pdf"
  },

  // Category D: Project Portfolio & Case Studies
  {
    id: "DOC-PRJ-01",
    titleEn: "Verified Construction & Infrastructure Projects Record",
    titleAr: "سجل المشروعات الإنشائية وأعمال البنية التحتية المنجزة",
    descriptionEn: "Documented project completions, institutional client rosters, handover certificates, and execution roles.",
    descriptionAr: "قائمة المشروعات المسلمة، شهادات الإنجاز، بيانات جهات الإسناد، وتوضيح نطاق التنفيذ الدقيق.",
    sector: "construction",
    sectorEn: "Construction & Real Estate",
    sectorAr: "المقاولات والتطوير العقاري",
    category: "project_portfolio",
    categoryEn: "Project Portfolio & Case Studies",
    categoryAr: "محفظة المشروعات الموثقة ودراسات الحالة",
    accessLevel: "registered_business",
    accessLevelEn: "Registered Business Access",
    accessLevelAr: "للشركات المسجلة",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "5.4 MB",
    lastUpdated: "2026-01-25",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Verified_Projects_Record.pdf"
  },
  {
    id: "DOC-PRJ-02",
    titleEn: "Commercial Real Estate Advisory & Brokerage Portfolio (2018–2026)",
    titleAr: "محفظة الاستشارات والتسويق العقاري المصري (2018–2026)",
    descriptionEn: "Executive track record covering 400+ developments, developer agreements, and institutional marketing volume.",
    descriptionAr: "المسيرة المهنية الموثقة لإدارة القطاع في تسويق أكثر من 400 مشروع لكبرى شركات التطوير في مصر.",
    sector: "construction",
    sectorEn: "Construction & Real Estate",
    sectorAr: "المقاولات والتطوير العقاري",
    category: "project_portfolio",
    categoryEn: "Project Portfolio & Case Studies",
    categoryAr: "محفظة المشروعات الموثقة ودراسات الحالة",
    accessLevel: "registered_business",
    accessLevelEn: "Registered Business Access",
    accessLevelAr: "للشركات المسجلة",
    language: "AR",
    format: "PDF (A4)",
    fileSize: "3.7 MB",
    lastUpdated: "2026-02-01",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_RealEstate_Advisory_Portfolio.pdf"
  },

  // Category E: Certifications & Compliance
  {
    id: "DOC-CERT-01",
    titleEn: "Apparel Quality & Environmental Compliance Portfolio",
    titleAr: "ملف شهادات الجودة والامتثال البيئي لصناعة الملابس",
    descriptionEn: "Audited lab test protocols, OEKO-TEX® & ISO compliance standards verified across our manufacturing network.",
    descriptionAr: "بروتوكولات الفحص المخبري، معايير OEKO-TEX® وشهادات ISO المعتمدة عبر شبكة المصانع الشريكة.",
    sector: "garment",
    sectorEn: "Apparel Manufacturing",
    sectorAr: "تصنيع الملابس وتطوير الأزياء",
    category: "certifications_compliance",
    categoryEn: "Certifications & Compliance",
    categoryAr: "شهادات الامتثال والجودة والبيئة",
    accessLevel: "registered_business",
    accessLevelEn: "Registered Business Access",
    accessLevelAr: "للشركات المسجلة",
    language: "Bilingual",
    format: "PDF Portfolio",
    fileSize: "2.9 MB",
    lastUpdated: "2026-01-10",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
    fileName: "SBA_Apparel_Certifications.pdf"
  },
  {
    id: "DOC-CERT-02",
    titleEn: "Food Export Safety & Phytosanitary Protocol Guidelines",
    titleAr: "دليل الامتثال لسلامة الغذاء والاشتراطات الحجرية للتصدير",
    descriptionEn: "Compliance dossier for Egyptian dates, olive oil, and herbs for European, Turkish, and GCC entry.",
    descriptionAr: "ملف الاشتراطات الحجرية، شهادات سلامة الغذاء، والفحوص المخبرية لتصدير التمور والسلع الزراعية.",
    sector: "food",
    sectorEn: "Natural & Food Products",
    sectorAr: "المنتجات الطبيعية والغذائية",
    category: "certifications_compliance",
    categoryEn: "Certifications & Compliance",
    categoryAr: "شهادات الامتثال والجودة والبيئة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "2.4 MB",
    lastUpdated: "2026-01-18",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Food_Safety_Protocols.pdf"
  },

  // Category F: Investment Opportunities
  {
    id: "DOC-INV-01",
    titleEn: "Joint Venture Framework: Industrial Solar PV Rooftops (C&I)",
    titleAr: "مذكرة شراكة استثمارية: محطات الطاقة الشمسية للمنشآت الصناعية",
    descriptionEn: "Financial payback modeling, EPC partnership terms, and long-term PPA frameworks for manufacturing clusters.",
    descriptionAr: "نموذج الجدوى المالية، شروط التحالف الفني، وعقود شراء الطاقة طويلة الأجل للمجمعات الصناعية.",
    sector: "environmental",
    sectorEn: "Environment & Sustainability",
    sectorAr: "البيئة والاستدامة",
    category: "investment_opportunities",
    categoryEn: "Investment Opportunities",
    categoryAr: "فرص ومذكرات الاستثمار المشترك",
    accessLevel: "nda_protected",
    accessLevelEn: "NDA-Protected",
    accessLevelAr: "محمي باتفاقية سرية (NDA)",
    language: "EN",
    format: "Investment Memo (PDF)",
    fileSize: "4.2 MB",
    lastUpdated: "2026-02-05",
    fileName: "SBA_Solar_Investment_Memo.pdf"
  },
  {
    id: "DOC-INV-02",
    titleEn: "Co-Development Opportunity: Agri-Waste Organic Fertilizer Complex",
    titleAr: "فرصة استثمار مشترك: مجمع تدوير المخلفات الزراعية وإنتاج الأسمدة",
    descriptionEn: "PPP project structure with WMRA Egypt, raw material off-take guarantees, and green finance incentives.",
    descriptionAr: "هيكل مشروع الشراكة (PPP) في الدلتا، عقود التوريد المضمونة للمخلفات، وحوافز الاقتصاد الدائري.",
    sector: "environmental",
    sectorEn: "Environment & Sustainability",
    sectorAr: "البيئة والاستدامة",
    category: "investment_opportunities",
    categoryEn: "Investment Opportunities",
    categoryAr: "فرص ومذكرات الاستثمار المشترك",
    accessLevel: "restricted_investor",
    accessLevelEn: "Restricted Investor Access",
    accessLevelAr: "مخصص للمستثمرين المعتمدين",
    language: "Bilingual",
    format: "Dossier (PDF)",
    fileSize: "6.1 MB",
    lastUpdated: "2026-02-10",
    fileName: "SBA_AgriWaste_Fertilizer_PPP.pdf"
  },

  // Category G: Technical Documents
  {
    id: "DOC-TECH-01",
    titleEn: "Official Export Catalogue: Egyptian Natural Dates & Agri-Commodities",
    titleAr: "كتالوج التصدير الرسمي: التمور الطبيعية والسلع الزراعية المصرية",
    descriptionEn: "Full product specs for Siwi, Medjool, olive oils, and herbs with moisture, sizing, and packing standards.",
    descriptionAr: "المواصفات الكاملة للتمور السيوي، المجدول، زيت الزيتون، والأعشاب مع نسب الرطوبة وأوزان التعبئة.",
    sector: "food",
    sectorEn: "Natural & Food Products",
    sectorAr: "المنتجات الطبيعية والغذائية",
    category: "technical_documents",
    categoryEn: "Technical Documents & Catalogues",
    categoryAr: "الوثائق الفنية والكتالوجات المعتمدة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "5.1 MB",
    lastUpdated: "2026-01-22",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    fileName: "SBA_Dates_Export_Catalogue.pdf",
    featured: true
  },
  {
    id: "DOC-TECH-02",
    titleEn: "Apparel Export Lookbook & Sample Collections Dossier",
    titleAr: "دليل الموديلات والكتالوج المعتمد للملابس الجاهزة",
    descriptionEn: "Curated 150+ sample catalogue covering women's wear, children's wear, hoodies, and private label specifications.",
    descriptionAr: "كتالوج يضم أكثر من 150 موديلاً تم تصنيعها، ومواصفات خامات القطن، ونماذج التسمية الخاصة (Private Label).",
    sector: "garment",
    sectorEn: "Apparel Manufacturing",
    sectorAr: "تصنيع الملابس وتطوير الأزياء",
    category: "technical_documents",
    categoryEn: "Technical Documents & Catalogues",
    categoryAr: "الوثائق الفنية والكتالوجات المعتمدة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "6.8 MB",
    lastUpdated: "2026-01-28",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
    fileName: "SBA_Apparel_Export_Lookbook.pdf",
    featured: true
  }
];
