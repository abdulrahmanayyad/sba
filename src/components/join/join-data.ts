import groupHero from "@/assets/group-hero.jpg";
import constructionImg from "@/assets/sector-construction.jpg";
import sustainableImg from "@/assets/hero-sustainable.png";
import garmentImg from "@/assets/sector-apparel.jpg";

export type JoinTrackId = "group" | "construction" | "sustainability" | "garment";

export interface ApplicationCategory {
  id: string;
  labelEn: string;
  labelAr: string;
}

export interface JoinTrackConfig {
  id: JoinTrackId;
  url: string;
  titleEn: string;
  titleAr: string;
  eyebrowEn: string;
  eyebrowAr: string;
  headlineEn: string;
  headlineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  purposeEn: string;
  purposeAr: string;
  heroImage: string;
  badgeColor: string;
  individualCategories: ApplicationCategory[];
  organizationCategories: ApplicationCategory[];
  perksEn: { title: string; desc: string }[];
  perksAr: { title: string; desc: string }[];
  targetAudienceEn: string[];
  targetAudienceAr: string[];
}

export const joinTracks: Record<JoinTrackId, JoinTrackConfig> = {
  group: {
    id: "group",
    url: "/join/group",
    titleEn: "Join Our Group",
    titleAr: "انضم إلى مجموعتنا",
    eyebrowEn: "SAMI BIN AYYAD GROUP · Careers & Strategic Partnerships",
    eyebrowAr: "مجموعة سامي بن عياد · التوظيف والشراكات الاستراتيجية",
    headlineEn: "Build the Future With Us",
    headlineAr: "لنبن المستقبل معًا",
    descriptionEn:
      "We welcome ambitious professionals, strategic partners, investors, and organizations that share our vision for sustainable growth, operational excellence, and long-term value creation across our business sectors.",
    descriptionAr:
      "نرحب بالمهنيين الطموحين، والشركاء الاستراتيجيين، والمستثمرين، والشركات التي تشاركنا رؤيتنا للنمو المستدام، والتميز التشغيلي، وصناعة القيمة طويلة الأجل عبر كافة قطاعاتنا الاستراتيجية.",
    purposeEn:
      "Group-level recruitment, strategic partnerships, investment and business development, suppliers, and general applications.",
    purposeAr:
      "التوظيف على مستوى المجموعة، الشراكات الاستراتيجية، الاستثمار والتطوير التجاري، الموردون المعتمدون، والطلبات العامة.",
    heroImage: groupHero,
    badgeColor: "bg-brand-orange text-white",
    individualCategories: [
      { id: "exec-mgmt", labelEn: "Executive & Senior Leadership", labelAr: "الإدارة العليا والقيادية" },
      { id: "biz-dev", labelEn: "Business Development & Strategy", labelAr: "تطوير الأعمال والتخطيط الاستراتيجي" },
      { id: "finance-acc", labelEn: "Finance, Accounting & Audit", labelAr: "المالية والمحاسبة والتدقيق" },
      { id: "supply-chain", labelEn: "Supply Chain & International Procurement", labelAr: "سلاسل الإمداد والمشتريات الدولية" },
      { id: "legal-gov", labelEn: "Legal, Corporate Governance & Compliance", labelAr: "الشؤون القانونية والحوكمة والامتثال" },
      { id: "hr-talent", labelEn: "Human Resources & Talent Development", labelAr: "الموارد البشرية وتطوير الكفاءات" },
      { id: "marketing-comms", labelEn: "Brand, Marketing & Global Communications", labelAr: "الهوية والتسويق والاتصال المؤسسي" },
      { id: "general-talent", labelEn: "General Professional Application", labelAr: "طلب انضمام مهني عام" },
    ],
    organizationCategories: [
      { id: "strategic-inv", labelEn: "Strategic Investment & Capital Partnerships", labelAr: "الاستثمار الاستراتيجي ورؤوس الأموال" },
      { id: "biz-alliance", labelEn: "Commercial & Business Development Alliances", labelAr: "التحالفات التجارية وتطوير الأسواق" },
      { id: "supplier-vendor", labelEn: "Group-Wide Supplier & Vendor Registration", labelAr: "تسجيل الموردين ومقدمي الخدمات للمجموعة" },
      { id: "joint-venture", labelEn: "Joint Ventures & Co-Development Projects", labelAr: "المشروعات المشتركة (JV) والتطوير الثنائي" },
      { id: "distribution", labelEn: "Regional & International Distribution", labelAr: "الوكالات والتوزيع الإقليمي والدولي" },
      { id: "advisory-consulting", labelEn: "Corporate Advisory & Technical Consulting", labelAr: "الاستشارات المؤسسية والفنية" },
    ],
    perksEn: [
      { title: "Multidisciplinary Scale", desc: "Collaborate across contracting, environmental solutions, apparel manufacturing, and food products." },
      { title: "Long-Term Value", desc: "Built on sustainable business fundamentals, corporate ethics, and compounding growth." },
      { title: "Regional & Global Reach", desc: "Direct market footprint spanning Egypt, the Middle East, Africa, and international trade routes." },
    ],
    perksAr: [
      { title: "تنوع وتكامل القطاعات", desc: "فرص للعمل والتعاون عبر المقاولات، البيئة، تصنيع الملابس، والمنتجات الغذائية الطبيعية." },
      { title: "قيمة استثمارية مستدامة", desc: "مرتكزات مؤسسية راسخة وأخلاقيات عمل مهنية تضمن النمو المستمر للشركاء والكوادر." },
      { title: "حضور إقليمي ودولي", desc: "عمليات وأسواق تغطي جمهورية مصر العربية، والشرق الأوسط، وأفريقيا، وشبكات التصدير العالمية." },
    ],
    targetAudienceEn: ["Senior Executives", "Strategic Investors", "Global Brands", "Supply Chain Partners", "Professional Talents"],
    targetAudienceAr: ["القيادات التنفيذية", "المستثمرون الاستراتيجيون", "الشركات العالمية", "شركاء سلاسل الإمداد", "الكفاءات المهنية"],
  },

  construction: {
    id: "construction",
    url: "/join/construction",
    titleEn: "Join Our Construction Team",
    titleAr: "انضم إلى قطاع المقاولات",
    eyebrowEn: "SAMI BIN AYYAD · Contracting & Real Estate Development",
    eyebrowAr: "مجموعة سامي بن عياد · قطاع المقاولات والتطوير العقاري",
    headlineEn: "Engineering Excellence. Building Tomorrow.",
    headlineAr: "ريادة هندسية. نبني الغد.",
    descriptionEn:
      "Recruitment and collaboration with engineers, project managers, technical teams, contractors, subcontractors, consultants, engineering offices, and construction material suppliers.",
    descriptionAr:
      "فرص التوظيف والتعاون الهندسي مع المهندسين، ومديري المشروعات، والكوادر الفنية، والمقاولين، والمقاولين من الباطن، والمكاتب الاستشارية، وموردي مواد ومعدات البناء.",
    purposeEn:
      "Recruitment and collaboration with engineers, project managers, technical teams, contractors, subcontractors, consultants, engineering offices, and construction material suppliers.",
    purposeAr:
      "استقطاب الكفاءات الهندسية والشراكات التنفيذية مع المقاولين والاستشاريين والموردين للمشروعات الطبية والسكنية والتجارية والبنية التحتية.",
    heroImage: constructionImg,
    badgeColor: "bg-brand-orange text-white",
    individualCategories: [
      { id: "project-mgr", labelEn: "Project Manager (Civil / MEP / Architectural)", labelAr: "مدير مشروع (مدني / كهروميكانيك / معماري)" },
      { id: "site-engineer", labelEn: "Site Engineer (Civil & Structural)", labelAr: "مهندس موقع (مدني وإنشائي)" },
      { id: "mep-engineer", labelEn: "MEP Engineer (Mechanical / Electrical / Plumbing)", labelAr: "مهندس كهروميكانيك (MEP - ميكانيكا وكهرباء)" },
      { id: "arch-engineer", labelEn: "Architectural & Interior Fit-Out Engineer", labelAr: "مهندس معماري وتشطيبات وديكور" },
      { id: "qs-engineer", labelEn: "Quantity Surveyor & Cost Control Engineer", labelAr: "مهندس حصر كميات ومراقبة تكاليف (QS)" },
      { id: "qa-qc", labelEn: "Quality Assurance & Quality Control (QA/QC)", labelAr: "مهندس مراقبة وضمان الجودة (QA/QC)" },
      { id: "hse-safety", labelEn: "HSE & Site Safety Officer / Manager", labelAr: "مسؤول / مدير سلامة وصحة مهنية (HSE)" },
      { id: "site-supervisor", labelEn: "General Site Supervisor & Foreman", labelAr: "مشرف موقع عام ومراقب تنفيذ" },
      { id: "technical-office", labelEn: "Technical Office & BIM Engineer", labelAr: "مهندس مكتب فني ونمذجة (BIM)" },
    ],
    organizationCategories: [
      { id: "general-contractor", labelEn: "General Contracting Joint Ventures", labelAr: "تحالفات المقاولات العامة والمشروعات الكبرى" },
      { id: "subcontractor-mep", labelEn: "Specialized MEP Subcontractor", labelAr: "مقاول باطن أعمال كهروميكانيكية (MEP)" },
      { id: "subcontractor-fitout", labelEn: "Architectural & Premium Fit-Out Subcontractor", labelAr: "مقاول باطن تشطيبات معمارية متكاملة" },
      { id: "subcontractor-civil", labelEn: "Civil, Concrete & Structural Subcontractor", labelAr: "مقاول باطن أعمال خرسانات وهياكل مدنية" },
      { id: "engineering-consultant", labelEn: "Engineering Design & Supervision Office", labelAr: "مكاتب الاستشارات والتصميم والإشراف الهندسي" },
      { id: "material-supplier", labelEn: "Building Materials & Finishing Supplier", labelAr: "مورد مواد بناء وتشطيبات وتجهيزات متخصصة" },
      { id: "plant-machinery", labelEn: "Heavy Equipment & Plant Hire Supplier", labelAr: "تأجير وتوريد المعدات الثقيلة والآلات" },
      { id: "labs-inspection", labelEn: "Soil, Concrete & Materials Testing Lab", labelAr: "مختبرات فحص التربة واختبارات الخرسانة والمواد" },
    ],
    perksEn: [
      { title: "Documented Track Record", desc: "57+ completed projects and over EGP 540M turnover spanning medical, energy, and commercial sectors." },
      { title: "Specialized Environments", desc: "Expertise in complex healthcare facilities, gas regulator installations, and high-spec developments." },
      { title: "Integrated Collaboration", desc: "Rigorous planning, transparent procurement, and long-term subcontracts." },
    ],
    perksAr: [
      { title: "سجل أعمال موثق", desc: "أكثر من 57 مشروعًا منجزًا وحجم أعمال يتجاوز 540 مليون جنيه في القطاعات الطبية والسكنية والبترولية." },
      { title: "بيئات تنفيذ متخصصة", desc: "ريادة في المنشآت الطبية وغرف العمليات والأشعة، ومحطات وشبكات الغاز، والمجمعات الراقية." },
      { title: "شراكة تعاقدية شفافة", desc: "تخطيط دقيق، تسديد مستحقات منضبط، وعلاقات عمل مستمرة مع نخبة الموردين ومقاولي الباطن." },
    ],
    targetAudienceEn: ["Civil & MEP Engineers", "Specialized Subcontractors", "Engineering Consultants", "Materials Suppliers", "Site Managers"],
    targetAudienceAr: ["مهندسو التنفيذ والمكتب الفني", "مقاولو الباطن المتخصصون", "المكاتب الاستشارية", "موردو مواد البناء", "مديرو المشروعات"],
  },

  sustainability: {
    id: "sustainability",
    url: "/join/sustainability",
    titleEn: "Join Our Sustainability Team",
    titleAr: "انضم إلى قطاع البيئة والاستدامة",
    eyebrowEn: "SAMI BIN AYYAD · Environmental & Sustainability Solutions",
    eyebrowAr: "مجموعة سامي بن عياد · قطاع البيئة المستدامة والطاقة المتجددة",
    headlineEn: "",
    headlineAr: "",
    descriptionEn:
      "Recruitment and collaboration with environmental professionals, sustainability experts, renewable energy specialists, water and waste management companies, technology providers, researchers, consultants, and strategic project partners.",
    descriptionAr:
      "فرص التوظيف والشراكات الاستراتيجية مع الخبراء البيئيين، ومتخصصي الاستدامة، وخبراء الطاقة المتجددة، وشركات إدارة المياه والمخلفات، ومزودي التكنولوجيا الخضراء، والباحثين، والمكاتب الاستشارية.",
    purposeEn:
      "Recruitment and collaboration with environmental professionals, sustainability experts, renewable energy specialists, water and waste management companies, technology providers, researchers, consultants, and strategic project partners.",
    purposeAr:
      "استقطاب الكوادر العلمية والشراكات الاستراتيجية في البحث والتطوير، محطات الغاز الحيوي، البصمة الكربونية، تقييم الأثر البيئي، وإدارة المخلفات والطاقة النظيفة.",
    heroImage: sustainableImg,
    badgeColor: "bg-brand-green text-white",
    individualCategories: [
      { id: "env-scientist", labelEn: "Environmental Scientist & Field Researcher", labelAr: "عالم بيئي وباحث علمي ميداني" },
      { id: "eia-consultant", labelEn: "EIA / ESIA / SEA Environmental Consultant", labelAr: "استشاري دراسات تقييم الأثر البيئي والمجتمعي" },
      { id: "renewable-engineer", labelEn: "Renewable Energy Specialist (Solar / Wind / Biogas)", labelAr: "مهندس طاقة متجددة (طاقة شمسية / رياح / بيوجاز)" },
      { id: "waste-energy", labelEn: "Waste-to-Energy & RSD Fermentation Engineer", labelAr: "مهندس محطات تحويل المخلفات لطاقة وتخمير جاف" },
      { id: "water-wastewater-eng", labelEn: "Water & Wastewater Treatment Engineer", labelAr: "مهندس معالجة مياه ومياه الصرف الصناعي والبلدي" },
      { id: "carbon-esg", labelEn: "Carbon Footprint & ESG Sustainability Analyst", labelAr: "محلل بصمة كربونية وتقارير استدامة ESG" },
      { id: "microbiologist", labelEn: "Environmental Microbiologist & Laboratory Chemist", labelAr: "كيميائي تحاليل وأخصائي ميكروبيولوجيا بيئية" },
      { id: "qhse-specialist", labelEn: "QHSE & ISO Lead Auditor / Consultant", labelAr: "استشاري ومدقق جودة وسلامة وبيئة (ISO Lead Auditor)" },
      { id: "green-software", labelEn: "Environmental IoT & Software Solutions Developer", labelAr: "مطور برمجيات وأنظمة إنترنت الأشياء البيئية (IoT)" },
    ],
    organizationCategories: [
      { id: "tech-wte-biogas", labelEn: "Biogas & Waste-to-Energy Technology Provider", labelAr: "مزود تكنولوجيا محطات البيوجاز وتحويل المخلفات لطاقة" },
      { id: "env-consultancy", labelEn: "Accredited Environmental Studies & ESIA Firm", labelAr: "مكاتب الاستشارات والدراسات البيئية المعتمدة" },
      { id: "waste-management-op", labelEn: "Waste Management, Recycling & Resource Recovery", labelAr: "شركات إدارة وتدوير المخلفات الصلبة والصناعية" },
      { id: "green-tech-iot", labelEn: "Green Tech, IoT Environmental Sensors & Software", labelAr: "شركات تكنولوجيا الاستشعار البيئي والبرمجيات الذكية" },
      { id: "academic-univ", labelEn: "Academic, University & Scientific Research Partner", labelAr: "الجامعات والمراكز البحثية والمؤسسات العلمية" },
      { id: "cleantech-supplier", labelEn: "Clean Tech, Solar PV & Micro-Turbine Equipment", labelAr: "موردو معدات الطاقة النظيفة والتوربينات والخلايا" },
      { id: "labs-testing", labelEn: "Accredited Environmental Testing & Calibration Lab", labelAr: "مختبرات القياسات والمعايرة البيئية المعتمدة (ISO 17025)" },
    ],
    perksEn: [
      { title: "European Technology Alliances", desc: "Leading the RSD dry fermentation industry in Egypt in partnership with Switzerland's Ren ergon AG." },
      { title: "Real-World Impact", desc: "Volunteer contributions to 4 UN Global Goals: Clean Water, Clean Energy, Responsible Consumption, and Climate Action." },
      { title: "Advanced Laboratory Facilities", desc: "State-of-the-art microbiology and environmental testing laboratories operating in Egypt." },
    ],
    perksAr: [
      { title: "تحالفات تكنولوجية أوروبية", desc: "شراكة استراتيجية مع رين إرجون السويسرية (Ren ergon AG) لريادة محطات التخمير الجاف بمصر." },
      { title: "أثر بيئي ومجتمعي حقيقي", desc: "مساهمة فعالة في 4 أهداف عالمية للتنمية المستدامة: المياه، الطاقة، الموارد، والعمل المناخي." },
      { title: "مختبرات بحثية متطورة", desc: "مختبرات متخصصة في مصر لاختبارات السمية والمعالجة الحيوية وتحاليل الانبعاثات والتربة." },
    ],
    targetAudienceEn: ["Environmental Scientists", "EIA Consultants", "Clean Tech Providers", "Recycling Operators", "Academic Researchers"],
    targetAudienceAr: ["علماء وباحثو البيئة", "استشاريو دراسات EIA", "مزودو التكنولوجيا النظيفة", "شركات إعادة التدوير", "المراكز البحثية"],
  },

  garment: {
    id: "garment",
    url: "/join/garment",
    titleEn: "Join Our Garment Manufacturing Team",
    titleAr: "انضم إلى قطاع تصنيع الملابس الجاهزة",
    eyebrowEn: "SAMI BIN AYYAD · Ready-Made Garment Manufacturing",
    eyebrowAr: "مجموعة سامي بن عياد · قطاع تصنيع الملابس الجاهزة",
    headlineEn: "Crafting Excellence. Dressing the World.",
    headlineAr: "إتقان التصنيع. نصنع أزياء الغد.",
    descriptionEn:
      "Recruitment and collaboration for fashion brands, international buyers, textile mills, fashion designers, pattern makers, production managers, QA specialists, and trim suppliers.",
    descriptionAr:
      "فرص التوظيف والتعاون الصناعي والتجاري مع مصممي الأزياء، مديري خطوط الإنتاج، مسؤولي الجودة، ماركات الأزياء، المستوردين الدوليين، وموردي الأقمشة ومستلزمات الإنتاج.",
    purposeEn:
      "Garment-level recruitment, fashion brand partnerships, FOB production contracts, fabric suppliers, and specialized technical roles.",
    purposeAr:
      "استقطاب الكفاءات والكوادر الفنية، والشراكات مع العلامات التجارية المحلية والعالمية، وعقود التصنيع والتصدير، وتوريدات خامات ومستلزمات الأزياء.",
    heroImage: garmentImg,
    badgeColor: "bg-brand-orange text-white",
    individualCategories: [
      { id: "fashion-designer", labelEn: "Fashion & Apparel Designer", labelAr: "مصمم أزياء وتطوير تشكيلات" },
      { id: "pattern-maker", labelEn: "Pattern Maker & Gerber / Lectra Specialist", labelAr: "متخصص باترون وبرامج كمبيوتر (Gerber / Lectra)" },
      { id: "production-mgr", labelEn: "Garment Production & Line Manager", labelAr: "مدير إنتاج وخطوط تشغيل ملابس جاهزة" },
      { id: "qa-qc-garment", labelEn: "Garment QA / QC Quality Inspector", labelAr: "مراقب ومفتش جودة ملابس ومنسوجات" },
      { id: "merchandiser", labelEn: "Export Merchandiser & Account Manager", labelAr: "ميرشندايزر ومتابع طلبيات تصدير" },
      { id: "maintenance-tech", labelEn: "Sewing & Industrial Machine Maintenance Tech", labelAr: "فني صيانة ماكينات حياكة وخطوط آلية" },
      { id: "cutting-master", labelEn: "Automated Cutting Room Master", labelAr: "مسؤول غرفة القص الآلي والتخطيط" },
    ],
    organizationCategories: [
      { id: "fashion-brand", labelEn: "Fashion Brands & Retailers (Private Label / OEM)", labelAr: "العلامات التجارية ومتاجر التجزئة (Private Label)" },
      { id: "importer-buyer", labelEn: "International Importers, Agents & Buyers", labelAr: "المستوردون والوكلاء التجاريون الدوليون" },
      { id: "fabric-mill", labelEn: "Fabric & Knitwear Textile Mills", labelAr: "مصانع الغزل والنسيج والأقمشة والتريكو" },
      { id: "trims-accessories", labelEn: "Zippers, Buttons, Trims & Packaging Suppliers", labelAr: "موردو الإكسسوارات والسحابات والأزرار والتغليف" },
      { id: "logistics-shipping", labelEn: "Garment Freight Forwarding & Logistics Partners", labelAr: "شركات الشحن والخدمات اللوجستية والتخليص" },
    ],
    perksEn: [
      { title: "High Production Scale", desc: "Over 5,000 pieces per day and 100,000+ pieces monthly across +15 specialized lines." },
      { title: "Global Compliance", desc: "Strict adherence to international apparel standards, BSCI, and verified quality control gates." },
      { title: "End-to-End Capabilities", desc: "From sample room and digital pattern grading to automated cutting, assembly, and export." },
    ],
    perksAr: [
      { title: "طاقة إنتاجية متقدمة", desc: "أكثر من 5,000 قطعة يوميًا و100,000 قطعة شهريًا عبر أكثر من 15 خط إنتاج متخصص." },
      { title: "معايير تصدير دولية", desc: "مطابقة تامة للمواصفات العالمية والتزام صارم بجدول التسليم وفحص الجودة 100%." },
      { title: "سلسلة قيمة متكاملة", desc: "من غرف العينات والباترون الرقمي إلى القص الآلي، الحياكة، والكي والتغليف النهائي للتصدير." },
    ],
    targetAudienceEn: ["Fashion Brands", "Textile Mills", "Apparel Designers", "Production Supervisors", "International Buyers"],
    targetAudienceAr: ["ماركات الأزياء", "مصانع الأقمشة", "مصممو الباترون والأزياء", "مشرفو الإنتاج", "المستوردون الدوليون"],
  },
};
