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
  downloadUrlAr?: string;
  downloadUrlEn?: string;
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
    titleEn: "Complete Corporate Company Profile (2026 Bilingual Editions)",
    titleAr: "الملف التعريفي الشامل للمجموعة (النسختان العربية والإنجليزية 2026)",
    descriptionEn: "Comprehensive overview of Sami Bin Ayyad Group, executive leadership, legal constitution, and cross-sector portfolio.",
    descriptionAr: "وثيقة مؤسسية معتمدة تستعرض رؤية المجموعة، القيادة التنفيذية، التأسيس القانوني، ومحفظة العمليات عبر القطاعات الأربعة.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.8 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
    fileName: "SBA_Complete_Corporate_Profile",
    featured: true
  },
  {
    id: "DOC-CORP-02",
    titleEn: "Corporate Capabilities Statement (AR & EN)",
    titleAr: "بيان القدرات المؤسسية والتشغيلية الشامل (عربي وإنجليزي)",
    descriptionEn: "Procurement briefing detailing verified engineering assets, capacities, compliance & onboarding workflows.",
    descriptionAr: "ملف تأهيل ومشتريات معتمد لاستعراض الطاقات الإنتاجية، البنية الهندسية، ونماذج التعاقد لجهات الإسناد.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.5 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Corporate_Capabilities_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Corporate_Capabilities_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Corporate_Capabilities_EN.pdf",
    fileName: "SBA_Corporate_Capabilities",
    featured: true
  },
  {
    id: "DOC-CORP-03",
    titleEn: "Complete Services & Solutions Portfolio — 39 Disciplines",
    titleAr: "دليل الخدمات والحلول المتكاملة الشامل (39 خدمة معتمدة)",
    descriptionEn: "Consolidated directory spanning 12 Construction, 19 Environmental, and 8 Apparel manufacturing disciplines.",
    descriptionAr: "الدليل الموحد لمنظومة تضم 39 خدمة تخصصية في المقاولات الهندسية، الحلول البيئية، وتصنيع الملابس.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.1 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Services_And_Solutions_Portfolio_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Services_And_Solutions_Portfolio_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Services_And_Solutions_Portfolio_EN.pdf",
    fileName: "SBA_Services_And_Solutions_Portfolio"
  },
  {
    id: "DOC-CORP-04",
    titleEn: "Supplier & Procurement Introduction Profile",
    titleAr: "دليل الموردين والتأهيل للمشتريات وسلاسل الإمداد",
    descriptionEn: "Vendor qualification guidelines, raw material specifications, and onboarding workflows across all 4 divisions.",
    descriptionAr: "معايير تأهيل الموردين والمقاولين الفرعيين، وفئات المواد الخام المطلوبة عبر قطاعات المجموعة.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "corporate_documents",
    categoryEn: "Corporate Documents",
    categoryAr: "الوثائق المؤسسية والحوكمة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "2.0 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Supplier_And_Procurement_Profile_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Supplier_And_Procurement_Profile_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Supplier_And_Procurement_Profile_EN.pdf",
    fileName: "SBA_Supplier_And_Procurement_Profile"
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
    titleEn: "Corporate Business & Partnership Overview (Investor Brief)",
    titleAr: "نظرة عامة على الأعمال والشراكات الاستراتيجية والاستثمار",
    descriptionEn: "Strategic investment framework, co-development joint ventures & international commercial cooperation prospectus.",
    descriptionAr: "إطار الاستثمار المؤسسي، التحالفات المشتركة، وفرص التوسع التصديري والصناعي عبر قطاعات المجموعة.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "financial_information",
    categoryEn: "Financial Information",
    categoryAr: "البيانات والمؤشرات المالية",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.0 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Business_And_Partnership_Overview_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Business_And_Partnership_Overview_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Business_And_Partnership_Overview_EN.pdf",
    fileName: "SBA_Business_And_Partnership_Overview",
    featured: true
  },

  // Category C: Sector Capabilities
  {
    id: "DOC-CAP-01",
    titleEn: "Apparel Manufacturing & Fashion Development Profile",
    titleAr: "دليل قطاع تصنيع الملابس وتطوير الأزياء",
    descriptionEn: "15+ production lines, dedicated 45,000 shirts/mo facility, OEM/ODM/FOB models & 8-stage AQL inspection.",
    descriptionAr: "التصنيع التعاقدي، مصنع القمصان الكلاسيكية (45 ألف قميص/شهر)، العلامات الخاصة وبرامج التصدير FOB.",
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
    fileSize: "3.9 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Apparel_Manufacturing_Profile_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Apparel_Manufacturing_Profile_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Apparel_Manufacturing_Profile_EN.pdf",
    fileName: "SBA_Apparel_Manufacturing_Profile"
  },
  {
    id: "DOC-CAP-02",
    titleEn: "Construction & Real Estate Capabilities Profile",
    titleAr: "دليل قدرات قطاع المقاولات والتطوير العقاري",
    descriptionEn: "12 engineering disciplines, civil contracting, MEP systems, healthcare installations & 6-stage delivery methodology.",
    descriptionAr: "المقاولات العامة، الأعمال المدنية والخرسانية، الأنظمة الكهروميكانيكية MEP، التجهيزات الطبية والاستشارات.",
    sector: "construction",
    sectorEn: "Construction & Real Estate",
    sectorAr: "المقاولات والتطوير العقاري",
    category: "sector_capabilities",
    categoryEn: "Sector Capabilities",
    categoryAr: "قدرات القطاعات ومواصفات التشغيل",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "5.9 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Construction_Capabilities_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Construction_Capabilities_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Construction_Capabilities_EN.pdf",
    fileName: "SBA_Construction_Capabilities"
  },
  {
    id: "DOC-CAP-03",
    titleEn: "Environmental Solutions & Sustainability Profile (ENVIROTAQA)",
    titleAr: "دليل قطاع البيئة المستدامة والطاقة المتجددة (إنفيروتاقة)",
    descriptionEn: "19 environmental services, RENERGON Swiss RSD biogas alliance, EU CBAM readiness & 13 regional markets.",
    descriptionAr: "الاستشارات البيئية EIA/ESIA، تحويل المخلفات لطاقة، البصمة الكربونية وجاهزية CBAM والفرص الإقليمية.",
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
    fileSize: "7.8 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Environmental_Solutions_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Environmental_Solutions_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Environmental_Solutions_EN.pdf",
    fileName: "SBA_Environmental_Solutions"
  },
  {
    id: "DOC-CAP-04",
    titleEn: "Natural Products & Food Trading Profile",
    titleAr: "دليل قطاع المنتجات الطبيعية والتوريد الغذائي",
    descriptionEn: "NFSA cold logistics hubs, 7 agricultural export categories & 738 verified inquiries across 84 buyer markets.",
    descriptionAr: "مصادر زراعية مصرية أصيلة، محطات فرز وتبريد NFSA، وشبكة طلبات موثقة في 84 دولة حول العالم.",
    sector: "food",
    sectorEn: "Natural & Food Products",
    sectorAr: "المنتجات الطبيعية والغذائية",
    category: "sector_capabilities",
    categoryEn: "Sector Capabilities",
    categoryAr: "قدرات القطاعات ومواصفات التشغيل",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "4.1 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Natural_Products_Profile_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Natural_Products_Profile_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Natural_Products_Profile_EN.pdf",
    fileName: "SBA_Natural_Products_Profile"
  },

  // Category D: Project Portfolio & Case Studies
  {
    id: "DOC-PRJ-01",
    titleEn: "Construction & Contracting Project Portfolio (57+ Projects)",
    titleAr: "محفظة مشروعات قطاع المقاولات والإنشاءات الموثقة (+57 مشروعًا)",
    descriptionEn: "Structured execution ledger covering Patio Town, Obour Villas, GASTEC, GASCO 100km pipeline & healthcare works.",
    descriptionAr: "السجل الموثق لمشروعات البنية التحتية، البترول والغاز، الرعاية الصحية والمجمعات السكنية والتجارية.",
    sector: "construction",
    sectorEn: "Construction & Real Estate",
    sectorAr: "المقاولات والتطوير العقاري",
    category: "project_portfolio",
    categoryEn: "Project Portfolio & Case Studies",
    categoryAr: "محفظة المشروعات الموثقة ودراسات الحالة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.2 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Construction_Project_Portfolio_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Construction_Project_Portfolio_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Construction_Project_Portfolio_EN.pdf",
    fileName: "SBA_Construction_Project_Portfolio"
  },
  {
    id: "DOC-PRJ-02",
    titleEn: "Selected Multi-Sector Project Case Studies",
    titleAr: "دراسات حالة مختارة لمشروعات المجموعة عبر القطاعات",
    descriptionEn: "Verified case studies across Al-Safa Medical Tower, Patio Town, 1.2 MW C&I Solar, European apparel & Siwi dates.",
    descriptionAr: "نماذج تطبيقية توثق نطاق التنفيذ الفعلي والنتائج المتحققة في المقاولات، الطاقة الشمسية، الملابس والتمور.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "project_portfolio",
    categoryEn: "Project Portfolio & Case Studies",
    categoryAr: "محفظة المشروعات الموثقة ودراسات الحالة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "6.2 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Selected_Project_Case_Studies_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Selected_Project_Case_Studies_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Selected_Project_Case_Studies_EN.pdf",
    fileName: "SBA_Selected_Project_Case_Studies"
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
    downloadUrl: "/downloads/SBA_Apparel_Manufacturing_Profile_EN.pdf",
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
    fileSize: "4.1 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Natural_Products_Profile_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Natural_Products_Profile_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Natural_Products_Profile_EN.pdf",
    fileName: "SBA_Natural_Products_Profile"
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

  // Category G: Technical Documents & Catalogues
  {
    id: "DOC-TECH-01",
    titleEn: "Natural Products & Agri-Food Export Catalogue",
    titleAr: "كتالوج التصدير الرسمي: التمور الطبيعية والسلع الزراعية المصرية",
    descriptionEn: "Full product specs for Siwi, Medjool, olive oils, honey, herbs, and powders with moisture & packing standards.",
    descriptionAr: "المواصفات الكاملة للتمور السيوي، المجدول، زيت الزيتون، العسل والأعشاب مع نسب الرطوبة وأوزان التعبئة.",
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
    fileSize: "3.5 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Natural_Products_Catalogue_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Natural_Products_Catalogue_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Natural_Products_Catalogue_EN.pdf",
    fileName: "SBA_Natural_Products_Catalogue",
    featured: true
  },
  {
    id: "DOC-TECH-02",
    titleEn: "Apparel Product Catalogue — 11 Verified Collections",
    titleAr: "كتالوج منتجات ومواصفات تصنيع الملابس (11 فئة معتمدة)",
    descriptionEn: "Fabric compositions, GSM ranges, international size curves & standard MOQs across 11 apparel lines.",
    descriptionAr: "دليل المواصفات الفنية للأقمشة، الأوزان (GSM)، جداول المقاسات الدولية، والحد الأدنى للكميات (MOQ).",
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
    fileSize: "3.1 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Apparel_Product_Catalogue_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Apparel_Product_Catalogue_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Apparel_Product_Catalogue_EN.pdf",
    fileName: "SBA_Apparel_Product_Catalogue",
    featured: true
  },
  {
    id: "DOC-TECH-03",
    titleEn: "Complete Products Portfolio (Consolidated Apparel & Food)",
    titleAr: "كتالوج المنتجات المجمع (الملابس والأغذية الطبيعية)",
    descriptionEn: "Consolidated B2B commercial export catalogue uniting both industrial garment and agri-food product portfolios.",
    descriptionAr: "الدليل التجاري التصديري الموحد لمجموعات تصنيع الملابس الجاهزة والمنتجات الزراعية والغذائية الطبيعية.",
    sector: "corporate",
    sectorEn: "Group Corporate",
    sectorAr: "المجموعة المؤسسية",
    category: "technical_documents",
    categoryEn: "Technical Documents & Catalogues",
    categoryAr: "الوثائق الفنية والكتالوجات المعتمدة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (A4)",
    fileSize: "3.4 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/SBA_Complete_Products_Portfolio_AR.pdf",
    downloadUrlAr: "/downloads/SBA_Complete_Products_Portfolio_AR.pdf",
    downloadUrlEn: "/downloads/SBA_Complete_Products_Portfolio_EN.pdf",
    fileName: "SBA_Complete_Products_Portfolio"
  },
  {
    id: "DOC-TECH-04",
    titleEn: "Technical Data Sheet: ET-POT-01 Oil Terminator",
    titleAr: "النشرة الفنية المعتمدة: ET-POT-01 قاهر الزيوت البترولية",
    descriptionEn: "Microbial bioremediation specification sheet (≥5×10⁹ CFU/g, 85% TPH reduction in 30 days) & dosing protocols.",
    descriptionAr: "المواصفات المخبرية والبيولوجية وجرعات التطبيق الميداني لمستحضر معالجة التلوث البترولي في التربة والمياه.",
    sector: "environmental",
    sectorEn: "Environment & Sustainability",
    sectorAr: "البيئة والاستدامة",
    category: "technical_documents",
    categoryEn: "Technical Documents & Catalogues",
    categoryAr: "الوثائق الفنية والكتالوجات المعتمدة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (TDS)",
    fileSize: "2.8 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/ET-POT-01_Technical_Data_Sheet_AR.pdf",
    downloadUrlAr: "/downloads/ET-POT-01_Technical_Data_Sheet_AR.pdf",
    downloadUrlEn: "/downloads/ET-POT-01_Technical_Data_Sheet_EN.pdf",
    fileName: "ET-POT-01_Technical_Data_Sheet"
  },
  {
    id: "DOC-TECH-05",
    titleEn: "Technical Data Sheet: ET-POR-01 Odor Neutralizer",
    titleAr: "النشرة الفنية المعتمدة: ET-POR-01 محيد الروائح الصناعية",
    descriptionEn: "Biochemical odor abatement specs for H₂S, mercaptans, and ammonia (>95% OECD 301D biodegradability).",
    descriptionAr: "المواصفات الكيميائية ونسب التخفيف لمحلول إزالة روائح غازات الصرف والمخلفات دون عطور تغطية.",
    sector: "environmental",
    sectorEn: "Environment & Sustainability",
    sectorAr: "البيئة والاستدامة",
    category: "technical_documents",
    categoryEn: "Technical Documents & Catalogues",
    categoryAr: "الوثائق الفنية والكتالوجات المعتمدة",
    accessLevel: "public",
    accessLevelEn: "Public Access",
    accessLevelAr: "متاح للعموم",
    language: "Bilingual",
    format: "PDF (TDS)",
    fileSize: "2.5 MB",
    lastUpdated: "2026-02-11",
    downloadUrl: "/downloads/ET-POR-01_Technical_Data_Sheet_AR.pdf",
    downloadUrlAr: "/downloads/ET-POR-01_Technical_Data_Sheet_AR.pdf",
    downloadUrlEn: "/downloads/ET-POR-01_Technical_Data_Sheet_EN.pdf",
    fileName: "ET-POR-01_Technical_Data_Sheet"
  }
];
