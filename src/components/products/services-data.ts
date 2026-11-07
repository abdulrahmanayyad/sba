// ============================================================================
// SAMI BIN AYYAD GROUP — SERVICES & SOLUTIONS REPOSITORY
// Strictly dedicated to professional, engineering, and technical works.
// Exactly 39 services across 3 operational divisions:
// Construction (12), Environmental (19), and Apparel Services (8).
// ============================================================================

export type ServiceSector = "construction" | "environmental" | "apparel-services";

export interface ProfessionalService {
  id: string;
  code: string;
  sector: ServiceSector;
  categoryKey: string;
  categoryEn: string;
  categoryAr: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  scopeOfWorkEn: string[];
  scopeOfWorkAr: string[];
  applicationsEn: string[];
  applicationsAr: string[];
  capabilitiesEn: string[];
  capabilitiesAr: string[];
  image: string;
  linkedProductId?: string;
}

export interface ExecutedProject {
  id: string;
  nameEn: string;
  nameAr: string;
  locationEn: string;
  locationAr: string;
  scopeEn: string;
  scopeAr: string;
  image: string;
  statusEn: string;
  statusAr: string;
}

export const professionalServices: ProfessionalService[] = [
  // --------------------------------------------------------------------------
  // DIVISION 1: CONSTRUCTION & REAL ESTATE DEVELOPMENT (12 Disciplines)
  // --------------------------------------------------------------------------
  {
    "id": "srv-cns-general",
    "code": "SBA-SRV-CNS01",
    "sector": "construction",
    "categoryKey": "general-contracting",
    "categoryEn": "General Contracting",
    "categoryAr": "المقاولات العامة",
    "nameEn": "Turnkey General Contracting & Engineering Construction",
    "nameAr": "المقاولات العامة والتنفيذ الهندسي",
    "descriptionEn": "Comprehensive main contractor services executing complex commercial, institutional, and infrastructure projects from groundbreaking to final handover with single-source accountability.",
    "descriptionAr": "خدمات المقاول العام المتكامل لتنفيذ المشروعات الكبرى والمؤسسية والبنية التحتية، بدءًا من أعمال الحفر والأساسات وحتى التسليم النهائي تحت إدارة هندسية موحدة.",
    "scopeOfWorkEn": [
      "Site preparation, grading, and deep foundations",
      "Reinforced concrete superstructures and structural steel framing",
      "Full MEP systems procurement and integration",
      "Architectural facade, fit-out, and exterior landscape works",
      "Commissioning, municipal testing, and as-built documentation"
    ],
    "scopeOfWorkAr": [
      "تجهيز الموقع وأعمال الحفر والأساسات العميقة",
      "تنفيذ الهياكل الخرسانية المسلحة والجمالونات المعدنية",
      "توريد وتنفيذ الأعمال الكهروميكانيكية المتكاملة",
      "تشطيبات الواجهات المعمارية والتجهيزات الداخلية وتنسيق الموقع",
      "التشغيل التجريبي، الاختبارات البلدية وتسليم المخططات التنفيذية"
    ],
    "applicationsEn": ["Government Complexes", "Corporate Headquarters", "Commercial Centers", "Industrial Campuses"],
    "applicationsAr": ["المجمعات الحكومية", "المقرات الرئيسية للشركات", "المراكز التجارية الكبرى", "المجمعات الصناعية"],
    "capabilitiesEn": ["First-tier contracting classification", "In-house heavy equipment fleet", "Strict zero-defect quality delivery"],
    "capabilitiesAr": ["تصنيف مقاولات فئة أولى", "أسطول معدات ثقيلة وخلاطات مملوكة للشركة", "معايير تسليم هندسية خالية من الملاحظات"],
    "image": "/BG/Contracting & Real Estate Development/Contracting & Real Estate Development Home Page.jpg"
  },
  {
    "id": "srv-cns-civil",
    "code": "SBA-SRV-CNS02",
    "sector": "construction",
    "categoryKey": "civil-works",
    "categoryEn": "Civil & Concrete Works",
    "categoryAr": "الأعمال المدنية والخرسانية",
    "nameEn": "Reinforced Concrete Structures & Civil Engineering Works",
    "nameAr": "الأعمال المدنية والخرسانية",
    "descriptionEn": "Precision formwork, rebar fabrication, mass concrete pouring, and post-tensioned slab construction for high-rise, commercial, and heavy-load foundations.",
    "descriptionAr": "تنفيذ أعمال الشدات المعدنية وتسليح الخرسانات وصب الكتل الخرسانية الضخمة والأسقف سابقة الإجهاد (Post-Tension) للأبراج والمباني ذات الأحمال العالية.",
    "scopeOfWorkEn": [
      "Mass raft foundations and continuous diaphragm walls",
      "Prestressed and post-tensioned long-span slab systems",
      "Laser-screeded industrial flooring and hardstands",
      "Concrete quality testing, curing monitoring, and non-destructive assays"
    ],
    "scopeOfWorkAr": [
      "اللبشات الخرسانية المسلحة الضخمة والحوائط اللوحية الساندة",
      "أنظمة الأسقف سابقة الإجهاد والبحور الإنشائية المفتوحة",
      "الأرضيات الخرسانية الصناعية المسواة بالليزر والمقاومة للاحتكاك",
      "فحوصات الجودة المخبرية ومراقبة معالجة الخرسانة والاختبارات غير الإتلافية"
    ],
    "applicationsEn": ["High-Rise Buildings", "Commercial Plazas", "Logistics Warehouses", "Infrastructure Stations"],
    "applicationsAr": ["الأبراج والمباني الشاهقة", "المراكز التجارية", "المستودعات اللوجستية", "محطات البنية التحتية"],
    "capabilitiesEn": ["Heavy hydraulic formwork systems", "Continuous mass-pour logistical capability", "Dedicated batching plant coordination"],
    "capabilitiesAr": ["شدات معدنية وهيدروليكية متطورة", "قدرة لوجستية لصبات الكتل الكبرى المستمرة", "تنسيق كامل مع محطات الخرسانة الجاهزة المعتمدة"],
    "image": "/BG/Contracting & Real Estate Development/Execution of Major Projects.jpg"
  },
  {
    "id": "srv-cns-structural",
    "code": "SBA-SRV-CNS03",
    "sector": "construction",
    "categoryKey": "structural-works",
    "categoryEn": "Structural Steel Works",
    "categoryAr": "الأعمال والمنشآت الهيكلية",
    "nameEn": "Heavy Structural Steel Fabrication & Pre-Engineered Buildings",
    "nameAr": "الأعمال والمنشآت الهيكلية",
    "descriptionEn": "Engineering fabrication and erection of heavy post-tensioned concrete, precast elements, and large-span structural steel frames for industrial and commercial facilities.",
    "descriptionAr": "تصنيع وتوريد وتركيب الهياكل الفولاذية الثقيلة، الجمالونات المعدنية، والجمالونات الإنشائية ذات البحور الواسعة للمصانع والمستودعات والمطارات.",
    "scopeOfWorkEn": [
      "CAD/CAM steel detailing and structural shop drawings",
      "Heavy column, rafter, and truss robotic welding and fabrication",
      "Sandblasting (Sa 2.5) and multi-coat intumescent fireproofing",
      "On-site crane rigging, high-strength bolt torqueing, and NDT weld testing"
    ],
    "scopeOfWorkAr": [
      "إعداد المخططات التنفيذية والورشية ثلاثية الأبعاد (Tekla Structures)",
      "قص وتجميع ولحام آلي للأعمدة والكمرات والجمالونات الثقيلة",
      "سفع رملي وتطبيق الدهانات الصناعية ومقاومة الحريق المنتفخة",
      "رفع وتركيب بالأوناش وربط المسامير عالية المقاومة واختبارات اللحام NDT"
    ],
    "applicationsEn": ["Industrial Plants", "Aviation Hangars", "Sports Arenas", "Hypermarket Centers"],
    "applicationsAr": ["المصانع الثقيلة", "حظائر الطائرات", "الصالات الرياضية المغطاة", "المراكز اللوجستية والهايبرماركت"],
    "capabilitiesEn": ["Certified AWS / ASME coded welders", "Heavy crawler crane rigging fleet", "In-house ultrasonic and MPI weld inspection"],
    "capabilitiesAr": ["لحامون معتمدون دوليًا وفق معايير AWS و ASME", "أسطول أوناش رفع ثقيلة للحمولات الكبرى", "فحص الموجات فوق الصوتية والجسيمات المغناطيسية للحامات"],
    "image": "/BG/Contracting & Real Estate Development/Architectural & Construction Work.jpg"
  },
  {
    "id": "srv-cns-architectural",
    "code": "SBA-SRV-CNS04",
    "sector": "construction",
    "categoryKey": "architectural-works",
    "categoryEn": "Architectural Design & Drawings",
    "categoryAr": "الأعمال المعمارية والتصميمية",
    "nameEn": "Architectural & Design Works",
    "nameAr": "الأعمال المعمارية والتصميمية",
    "descriptionEn": "Transforming schematic architectural concepts into coordinated, constructible working drawings, BIM models, and clash-free interdisciplinary packages.",
    "descriptionAr": "تحويل المفاهيم المعمارية والتصميمية إلى حزم رسومات تنفيذية متكاملة ونماذج BIM دقيقة خالية من التعارضات بين كافة التخصصات الهندسية.",
    "scopeOfWorkEn": [
      "Full BIM Level 2 architectural and structural coordinated modeling",
      "Detailed architectural construction shop drawings and specifications",
      "Facade detail drafting (curtain walls, double glazing, stone cladding)",
      "Value engineering, BOQ preparation, and technical submittals"
    ],
    "scopeOfWorkAr": [
      "نمذجة معمارية وإنشائية متكاملة بتقنية BIM Level 2",
      "إعداد الرسومات الورشية التفصيلية وجداول المواصفات الفنية",
      "تفاصيل الواجهات المعمارية الزجاجية والرخامية والألومنيوم كبس",
      "الهندسة القيمة وحساب الكميات الدقيقة ومراجعة الاعتمادات الفنية"
    ],
    "applicationsEn": ["Corporate Towers", "Specialized Mixed-Use Plazas", "Luxury Compounds", "Institutional Campuses"],
    "applicationsAr": ["الأبراج الإدارية", "المجمعات متعددة الاستخدامات", "الكمبوندات السكنية الراقية", "المنشآت المؤسسية"],
    "capabilitiesEn": ["Senior BIM managers and Revit coordinators", "Clash detection automation", "Fast-track design-to-build workflows"],
    "capabilitiesAr": ["مهندسو تنسيق BIM معتمدون", "حل تعارضات المسارات آليًا قبل بدء التنفيذ", "منهجية تسريع الانتقال من التصميم للموقع"],
    "image": "/BG/Contracting & Real Estate Development/Administrative Buildings & Commercial Centers.jpg"
  },
  {
    "id": "srv-cns-mep",
    "code": "SBA-SRV-CNS05",
    "sector": "construction",
    "categoryKey": "electromechanical-mep",
    "categoryEn": "Electromechanical Works (MEP)",
    "categoryAr": "الأعمال الكهروميكانيكية المتكاملة",
    "nameEn": "Integrated HVAC, Fire Protection, Electrical & Plumbing Engineering",
    "nameAr": "الأعمال الكهروميكانيكية المتكاملة",
    "descriptionEn": "Complete engineering design, supply, installation, testing, and commissioning of integrated electrical and mechanical building infrastructure systems.",
    "descriptionAr": "هندسة وتوريد وتركيب واختبار وتشغيل الأنظمة الكهروميكانيكية المتكاملة، شاملة شبكات التكييف المركزي، مكافحة الحريق، الجهد المتوسط والمنخفض وأنظمة التيار الخفيف.",
    "scopeOfWorkEn": [
      "Chilled water central HVAC plants and variable refrigerant flow (VRF)",
      "NFPA-compliant wet/dry automatic fire sprinkler and clean agent systems",
      "Medium and low voltage substations, power generators, and busways",
      "Building Management Systems (BMS), structured cabling, and smart telemetry"
    ],
    "scopeOfWorkAr": [
      "محطات المياه المثلجة Chillers وأنظمة التكييف المتغير VRF",
      "شبكات الرش الآلي ومكافحة الحريق بالغازات النظيفة مطابقة لمعايير NFPA",
      "محطات المحولات ولوحات التوزيع والمولدات وقضبان التوزيع Busways",
      "أنظمة التحكم الذكي في المباني BMS وشبكات التيار الخفيف والمراقبة"
    ],
    "applicationsEn": ["Data Centers", "Hospitals", "Financial Towers", "Commercial Shopping Malls"],
    "applicationsAr": ["مراكز البيانات", "المستشفيات", "الأبراج المالية", "المراكز التجارية الكبرى"],
    "capabilitiesEn": ["NFPA certified fire engineering specialists", "BMS automation integration team", "Factory certified commissioning protocol"],
    "capabilitiesAr": ["مهندسون معتمدون من NFPA لمكافحة الحريق", "فريق متخصص في برمجة وتكامل أنظمة BMS", "بروتوكولات فحص وتشغيل تجريبي معتمدة"],
    "image": "/BG/Contracting & Real Estate Development/Electromechanical Works (MEP).jpg"
  },
  {
    "id": "srv-cns-infrastructure",
    "code": "SBA-SRV-CNS06",
    "sector": "construction",
    "categoryKey": "infrastructure-utilities",
    "categoryEn": "Infrastructure & Utilities",
    "categoryAr": "تطوير البنية التحتية والشبكات",
    "nameEn": "Civil Infrastructure, Utility Networks & Deep Earthworks",
    "nameAr": "تطوير البنية التحتية والشبكات",
    "descriptionEn": "Large-scale earthmoving, deep trench excavations, underground potable water, irrigation, stormwater, sewage networks, and road construction.",
    "descriptionAr": "تنفيذ مشروعات البنية التحتية الكبرى، أعمال الحفر والردم والتسوية، وتمديد شبكات مياه الشرب والري وصرف الأمطار والصرف الصحي ورصف الطرق.",
    "scopeOfWorkEn": [
      "Large-volume site grading, rock blasting, and deep pipeline trenching",
      "HDPE and ductile iron pressurized potable and fire water mainlines",
      "Gravity sewer systems, concrete manholes, and pumping lifting stations",
      "Sub-base road compaction, asphalt paving, and roadside curb engineering"
    ],
    "scopeOfWorkAr": [
      "تسوية الموقع العام وتفجير وتكسير الصخور وحفر مسارات خطوط الأنابيب",
      "تمديد خطوط مياه الشرب والحريق بأنابيب البولي إيثيلين HDPE والحديد المرن",
      "شبكات الانحدار للصرف الصحي وغرف التفتيش ومحطات الرفع الخرسانية",
      "دمج طبقات الأساس للطرق والرصف الأسفلتي والبردورات والأرصفة"
    ],
    "applicationsEn": ["New Urban Communities", "Industrial Development Zones", "Resort Masterplans", "Logistics Ports"],
    "applicationsAr": ["المجتمعات العمرانية الجديدة", "المناطق الصناعية", "المنتجعات السياحية", "الموانئ اللوجستية"],
    "capabilitiesEn": ["Heavy earthmoving and trench excavation machinery", "Electrofusion and butt-welding certified technicians", "Laser-guided GPS grade control equipment"],
    "capabilitiesAr": ["معدات حفر وتسوية ثقيلة متطورة", "فنيون معتمدون في لحام أنابيب HDPE بالتسخين الكهربائي", "أجهزة مساحة بنظام GPS لضبط المناسيب بالليزر"],
    "image": "/BG/Contracting & Real Estate Development/Infrastructure & Utility Works.jpg"
  },
  {
    "id": "srv-cns-industrial",
    "code": "SBA-SRV-CNS07",
    "sector": "construction",
    "categoryKey": "industrial-construction",
    "categoryEn": "Industrial Construction",
    "categoryAr": "الإنشاءات الصناعية والمباني الجاهزة",
    "nameEn": "Industrial Facilities, Pre-Engineered Factories & Logistics Hubs",
    "nameAr": "الإنشاءات الصناعية والمباني الجاهزة",
    "descriptionEn": "Turnkey construction of industrial plants, pharmaceutical facilities, heavy machine foundations, logistics parks, and refrigerated warehouses.",
    "descriptionAr": "بناء وتشييد المصانع المتكاملة والمنشآت الدوائية وقواعد الماكينات الثقيلة والمجمعات اللوجستية وثلاجات التخزين الكبرى.",
    "scopeOfWorkEn": [
      "Heavy vibration-isolated reinforced concrete machine foundation beds",
      "Pre-engineered steel portal frames and insulated sandwich panel cladding",
      "Epoxy, polyurethane, and dry-shake hardener industrial flooring systems",
      "Overhead crane gantry beams, loading docks, and industrial drainage"
    ],
    "scopeOfWorkAr": [
      "قواعد خرسانية مسلحة معزولة لامتصاص اهتزازات الماكينات الثقيلة",
      "هياكل حديدية مسبقة الصنع وألواح ساندوتش بانل عازلة للحرارة والصوت",
      "أرضيات صناعية إيبوكسية وبولي يوريثان ومصلدات خرسانية مقاومة للبرى",
      "كمرات مسارات الأوناش العلوية وأرصفة الشحن والتفريغ وشبكات الصرف الصناعي"
    ],
    "applicationsEn": ["Food Processing Plants", "Textile Manufacturing Mills", "Chemical Facilities", "FMCG Distribution Centers"],
    "applicationsAr": ["مصانع الأغذية والمشروبات", "مصانع الغزل والنسيج والملابس", "المنشآت الكيماوية", "مراكز توزيع السلع الاستهلاكية"],
    "capabilitiesEn": ["Fast-track industrial civil construction teams", "High-tolerance floor flatness (FM2 standards)", "Heavy machinery installation coordination"],
    "capabilitiesAr": ["فرق تنفيذ سريعة للمنشآت الصناعية", "تسوية فائقة للأرضيات بمعيار FM2 للمستودعات الذكية", "تنسيق هندسي دقيق لتركيب خطوط الإنتاج والماكينات"],
    "image": "/BG/Contracting & Real Estate Development/Hospital & Health Center Construction.jpg"
  },
  {
    "id": "srv-cns-medical",
    "code": "SBA-SRV-CNS08",
    "sector": "construction",
    "categoryKey": "healthcare-facilities",
    "categoryEn": "Healthcare & Medical Facilities",
    "categoryAr": "المنشآت الطبية والمستشفيات التخصصية",
    "nameEn": "Specialized Healthcare Construction, Cleanrooms & Medical Gas Systems",
    "nameAr": "المنشآت الطبية والمستشفيات التخصصية",
    "descriptionEn": "Highly regulated construction of tertiary hospitals, specialized surgical centers, radiology bunkers, and ISO-certified cleanroom operating suites.",
    "descriptionAr": "تنفيذ وتجهيز المستشفيات التخصصية والمراكز الطبية والجراحية وغرف العمليات المعقمة والتحكم في العدوى وغرف الرنين المغناطيسي والعلاج الإشعاعي.",
    "scopeOfWorkEn": [
      "Hermetically sealed modular operating theaters with laminar airflow",
      "Central medical gas pipeline systems (oxygen, nitrous oxide, vacuum)",
      "Radiation lead-shielded bunker walls, acoustic doors, and anti-static flooring",
      "Hospital-grade HEPA filtration, positive/negative pressure isolation suites"
    ],
    "scopeOfWorkAr": [
      "غرف عمليات نمطية محكمة الغلق بأنظمة تدفق الهواء الصفائحي Laminar Flow",
      "شبكات الغازات الطبية المركزية ومحطات تفريغ الهواء وتوليد الأكسجين",
      "عزل الإشعاع بألواح الرصاص لغرف الأشعة وأبواب عازلة وأرضيات مضادة للشحنات",
      "فلاتر HEPA الطبية وغرف العزل ذات الضغط الإيجابي والسلبي لمنع العدوى"
    ],
    "applicationsEn": ["General & Specialized Hospitals", "Surgical Centers", "Radiology Suites", "Pharmaceutical Cleanrooms"],
    "applicationsAr": ["المستشفيات العامة والتخصصية", "المراكز الجراحية الدقيقة", "أقسام الأشعة المقطعية والرنين", "المعامل الدوائية المعقمة"],
    "capabilitiesEn": ["HTM / NFPA 99 medical gas certified engineers", "Cleanroom validation instrumentation", "Hospital infection control compliance protocol"],
    "capabilitiesAr": ["مهندسون معتمدون في شبكات الغازات الطبية وفق معايير HTM و NFPA 99", "أجهزة قياس واختبار نظافة الهواء في غرف العمليات", "التزام صارم باشتراطات مكافحة العدوى والاعتماد الصحي"],
    "image": "/BG/Contracting & Real Estate Development/Hospital & Health Center Construction.jpg"
  },
  {
    "id": "srv-cns-oilgas",
    "code": "SBA-SRV-CNS09",
    "sector": "construction",
    "categoryKey": "oil-gas-facilities",
    "categoryEn": "Oil, Gas & Energy Facilities",
    "categoryAr": "منشآت ومحطات النفط والغاز والطاقة",
    "nameEn": "Specialized Oil, Gas & Petrochemical Civil Works & Tank Farms",
    "nameAr": "منشآت ومحطات النفط والغاز والطاقة",
    "descriptionEn": "Heavy industrial civil construction within refinery, terminal, and petrochemical facility boundaries, meeting strict HSE zero-incident standards.",
    "descriptionAr": "تنفيذ الأعمال المدنية والإنشائية المتخصصة داخل مصافي البترول، مستودعات التخزين ومحطات توزيع وتداول الوقود وفق أعلى اشتراطات السلامة البترولية.",
    "scopeOfWorkEn": [
      "Rigid concrete ring walls and foundations for vertical bulk storage tanks",
      "Secondary containment dyke walls and chemical-resistant bund lining",
      "Blast-resistant control room buildings and substations",
      "Underground oily water drainage, interceptors, and firewater ring mains"
    ],
    "scopeOfWorkAr": [
      "القواعد الحلقية الخرسانية الثقيلة لخزانات الوقود والغاز العملاقة",
      "حوائط الحماية والاحتواء الثانوي المبطنة بمواد مقاومة للمنتجات البترولية",
      "المباني وغرف التحكم المقاومة للانفجار ومحطات الكهرباء الفرعية",
      "شبكات الصرف الزيتي الصناعي والفواصل الميكانيكية وشبكات مياه الإطفاء"
    ],
    "applicationsEn": ["Refineries & Gas Plants", "Bulk Fuel Storage Terminals", "Pipeline Pumping Stations", "Petrochemical Complexes"],
    "applicationsAr": ["مصافي التكرير ومعالجة الغاز", "مستودعات تداول وتخزين الوقود", "محطات ضخ خطوط الأنابيب", "مجمعات البتروكيماويات"],
    "capabilitiesEn": ["Certified permits-to-work (PTW) safety crew", "ATEX compliant tools and diesel equipment", "Rigorous zero-incident HSE track record"],
    "capabilitiesAr": ["طواقم عمل مؤهلة بنظام تصاريح العمل البترولية PTW", "معدات وأدوات عمل مطابقة لمواصفات ATEX للأجواء الخطرة", "سجل موثق خالي من الحوادث في المنشآت الحيوية"],
    "image": "/BG/Contracting & Real Estate Development/Construction of Gas, Oil & Petroleum Facilities.jpg"
  },
  {
    "id": "srv-cns-commercial",
    "code": "SBA-SRV-CNS10",
    "sector": "construction",
    "categoryKey": "commercial-administrative",
    "categoryEn": "Commercial & Administrative Complexes",
    "categoryAr": "المجمعات الإدارية والمراكز التجارية",
    "nameEn": "Commercial Malls, Corporate Headquarters & Business Towers",
    "nameAr": "المجمعات الإدارية والمراكز التجارية",
    "descriptionEn": "Modern commercial construction integrating structural aesthetics, energy efficiency, flexible open floor plans, and intelligent facilities infrastructure.",
    "descriptionAr": "إنشاء وتطوير المولات التجارية والمباني الإدارية الحديثة بمواصفات عالمية، مساحات مفتوحة مرنة، وأنظمة توفير الطاقة والتحكم الذكي.",
    "scopeOfWorkEn": [
      "Structural framing with post-tensioned wide-span floors for retail layout flexibility",
      "Structural glazing, unitized curtain wall facades, and grand atriums",
      "High-speed passenger and service elevators, escalators, and building automation",
      "Multi-story underground parking structures with guidance systems and ventilation"
    ],
    "scopeOfWorkAr": [
      "هياكل خرسانية بأسقف سابقة الإجهاد وبحور واسعة لمرونة المساحات التجارية",
      "واجهات زجاجية مزدوجة Curtain Walls وأتريوم سماوي وتغطيات معمارية راقية",
      "مصاعد سريعة وسلالم كهربائية متحركة وأنظمة تحكم آلي في الطاقة",
      "جراجات سيارات متعددة الطوابق تحت الأرض مزودة بأنظمة التوجيه والتهوية"
    ],
    "applicationsEn": ["Commercial Centers & Malls", "Corporate Office Parks", "Financial Districts", "Mixed-Use Plazas"],
    "applicationsAr": ["المراكز والمولات التجارية", "المجمعات الإدارية ومقرات البنوك", "الأحياء المالية", "المشروعات متعددة الاستخدامات"],
    "capabilitiesEn": ["Turnkey execution from basement to roof", "LEED-certified construction protocols", "Comprehensive safety barrier and access staging"],
    "capabilitiesAr": ["تنفيذ متكامل من الحفر حتى التشغيل النهائي", "بروتوكولات بناء مطابقة لمعايير الاستدامة LEED", "أنظمة سقالات وسقوط آمنة للمباني المرتفعة"],
    "image": "/BG/Contracting & Real Estate Development/Administrative Buildings & Commercial Centers.jpg"
  },
  {
    "id": "srv-cns-residential",
    "code": "SBA-SRV-CNS11",
    "sector": "construction",
    "categoryKey": "residential-real-estate",
    "categoryEn": "Residential & Real Estate Development",
    "categoryAr": "التطوير العقاري والمجمعات السكنية",
    "nameEn": "Luxury Residential Compounds, Villa Communities & Urban Housing",
    "nameAr": "التطوير العقاري والمجمعات السكنية",
    "descriptionEn": "Full-cycle real estate development and residential building execution, from master development to turnkey villa handovers and landscape integration.",
    "descriptionAr": "تنفيذ المشروعات السكنية الراقية، الكمبوندات المتكاملة، الفيلات المستقلة، التاون هاوس، والعمارات السكنية الحديثة مع كافة خدمات الموقع العام.",
    "scopeOfWorkEn": [
      "Structural skeleton and finishing for multi-building residential clusters",
      "Private villa construction with customized architectural styling",
      "Gated community security systems, boundary walls, and smart access gates",
      "Integrated hardscape, softscape, swimming pools, and community clubhouses"
    ],
    "scopeOfWorkAr": [
      "تنفيذ الهياكل الخرسانية والتشطيبات لمجموعات العمارات السكنية الحديثة",
      "بناء الفيلات الفاخرة والقصور بمواصفات معمارية وتفصيلية حصرية",
      "أسوار الكمبوندات وبوابات الدخول الذكية وأنظمة المراقبة الشاملة",
      "أعمال اللاندسكيب الصلب والزراعات وحمامات السباحة والمباني الخدمية والنوادي"
    ],
    "applicationsEn": ["Gated Residential Compounds", "Luxury Private Villas", "Urban Expansion Housing", "Coastal Resort Developments"],
    "applicationsAr": ["الكمبوندات السكنية المغلقة", "الفيلات والقصور الخاصة", "مشروعات الإسكان والتوسع العمراني", "المنتجعات السكنية الساحلية"],
    "capabilitiesEn": ["Proven on-time delivery across multiple concurrent clusters", "Standardized high-quality procurement", "Comprehensive after-handover defect liability service"],
    "capabilitiesAr": ["التزام دقيق بمواعيد التسليم للمراحل السكنية المتزامنة", "توريد مركزي لمواد التشطيب المعتمدة لضمان الجودة", "خدمات صيانة وضمان ما بعد التسليم للعملاء"],
    "image": "/BG/Contracting & Real Estate Development/Residential Units & Housing Projects.jpg"
  },
  {
    "id": "srv-cns-finishing",
    "code": "SBA-SRV-CNS12",
    "sector": "construction",
    "categoryKey": "finishing-fitout",
    "categoryEn": "Finishing & Interior Fit-Out",
    "categoryAr": "التشطيبات الراقية والتجهيزات الداخلية",
    "nameEn": "Turnkey Architectural Finishing, Luxury Fit-Out & Interior Contracting",
    "nameAr": "التشطيبات الراقية والتجهيزات الداخلية",
    "descriptionEn": "Delivering high-end interior architecture, acoustic treatments, luxury woodwork, marble floors, and specialized false ceiling systems for corporate and commercial spaces.",
    "descriptionAr": "تنفيذ أعمال التشطيبات الداخلية الراقية، المعالجات الصوتية، النجارة المعمارية، الرخام الطبيعي، والأسقف المعلقة للمقرات الإدارية والفندقية والتجارية.",
    "scopeOfWorkEn": [
      "Imported marble waterjet cutting, precision floor installation, and crystallization",
      "Acoustic gypsum partitions, demountable glass office walls, and specialty ceilings",
      "Custom architectural joinery, fire-rated wooden doors, and reception paneling",
      "Integrated decorative lighting, smart automation switches, and luxury sanitaryware"
    ],
    "scopeOfWorkAr": [
      "قص وتركيب الرخام الطبيعي بالووترجيت وجلي وتلميع الأرضيات بالكريستال",
      "قواطع جبسية عازلة للصوت، حوائط زجاجية للمكاتب وأسقف معدنية ديكورية",
      "أعمال النجارة المعمارية المخصصة، الأبواب المقاومة للحريق وتجليد الحوائط الخشبية",
      "أنظمة الإضاءة المعمارية المخفية، مفاتيح التحكم الذكي والأطقم الصحية الفاخرة"
    ],
    "applicationsEn": ["Corporate Executive Suites", "Luxury Hotel Lobbies", "VIP Lounges", "Embassy Buildings"],
    "applicationsAr": ["المقرات والمكاتب التنفيذية للشركات", "بهو الفنادق الفاخرة", "صالات كبار الزوار VIP", "المباني الدبلوماسية والسفارات"],
    "capabilitiesEn": ["In-house master fit-out craftsmen", "Precision laser-level alignment tools", "Zero-snag commercial delivery standards"],
    "capabilitiesAr": ["فريق حرفيين متخصص في أعمال التشطيبات الدقيقة", "أجهزة قياس ومحاذاة ليزرية متقدمة", "معايير تسليم هندسية خالية من الملاحظات"],
    "image": "/BG/Contracting & Real Estate Development/Interior and Exterior Finishing Works.jpg"
  },

  // --------------------------------------------------------------------------
  // DIVISION 2: ENVIRONMENTAL SOLUTIONS & SUSTAINABILITY (19 Services)
  // --------------------------------------------------------------------------
  {
    "id": "srv-env-eia",
    "code": "SBA-SRV-ENV01",
    "sector": "environmental",
    "categoryKey": "environmental-assessment",
    "categoryEn": "Environmental Impact Assessment (EIA)",
    "categoryAr": "تقييم الأثر البيئي (EIA)",
    "nameEn": "Comprehensive Environmental Impact Assessment Studies (EIA)",
    "nameAr": "دراسات تقييم الأثر البيئي (EIA)",
    "descriptionEn": "Preparing statutory EIA studies across Category A, B, and C industrial, commercial, and infrastructure developments for ministry and regulatory compliance.",
    "descriptionAr": "إعداد دراسات تقييم الأثر البيئي للمشروعات الصناعية والسياحية والبنية التحتية بالقوائم (أ، ب، ج) للحصول على موافقات جهاز شئون البيئة والجهات المعنية.",
    "scopeOfWorkEn": [
      "Baseline environmental profiling (ambient air, groundwater, ecology, soil)",
      "Project alternative analysis and environmental footprint modeling",
      "Pollution dispersion modeling for air emissions and wastewater outfalls",
      "Environmental and Social Management Plans (ESMP) and public hearing coordination"
    ],
    "scopeOfWorkAr": [
      "دراسة الوضع البيئي الراهن (الهواء المحيط، المياه الجوفية، التربة، والبيئة البيولوجية)",
      "تحليل بدائل المشروع ونمذجة البصمة البيئية التشغيلية",
      "نمذجة انتشار الملوثات للانبعاثات الغازية وتصريفات الصرف الصناعي",
      "إعداد خطط الإدارة والرصد البيئي والمجتمعي وتنظيم جلسات التشاور العام"
    ],
    "applicationsEn": ["Industrial Manufacturing Zones", "Port & Coastal Developments", "Power Plants", "Tourism Masterplans"],
    "applicationsAr": ["المناطق والمجمعات الصناعية", "الموانئ والتطوير الساحلي", "محطات توليد الطاقة", "المشروعات السياحية الكبرى"],
    "capabilitiesEn": ["Certified environmental consulting house accreditation", "AERMOD / CALPUFF certified air dispersion modelers", "Comprehensive field survey instruments"],
    "capabilitiesAr": ["بيت خبرة واستشارات بيئية معتمد رسميًا", "خبراء نمذجة انتشار الملوثات ببرامج AERMOD و CALPUFF", "أجهزة رصد ومسح بيئي ميدانية معتمدة"],
    "image": "/BG/Environment & Sustainability/Environmental Impact Assessment (EIA).jpg"
  },
  {
    "id": "srv-env-esia-financing",
    "code": "SBA-SRV-ENV02",
    "sector": "environmental",
    "categoryKey": "environmental-assessment",
    "categoryEn": "ESIA Studies",
    "categoryAr": "الدراسات البيئية والمجتمعية (ESIA)",
    "nameEn": "Integrated Environmental & Social Impact Assessment (ESIA) for International Lenders",
    "nameAr": "الدراسات البيئية والمجتمعية (ESIA)",
    "descriptionEn": "Structuring international-standard ESIA dossiers conforming to IFC Performance Standards, World Bank EHS Guidelines, and Equator Principles for global financing.",
    "descriptionAr": "إعداد دراسات الأثر البيئي والمجتمعي وفق معايير الأداء لمؤسسة التمويل الدولية (IFC)، البنك الأوروبي (EBRD)، والبنك الإفريقي للتنمية للحصول على التمويل الدولي.",
    "scopeOfWorkEn": [
      "Social baseline surveys, stakeholder engagement, and community grievance mechanisms",
      "Biodiversity action plans and ecosystem service vulnerability assessments",
      "Labor conditions, human rights, and occupational safety risk assessments",
      "Resettlement policy frameworks and livelihood restoration planning"
    ],
    "scopeOfWorkAr": [
      "المسوحات الاجتماعية الميدانية، إشراك أصحاب المصلحة وآليات التظلم المجتمعي",
      "خطط عمل الحفاظ على التنوع البيولوجي والأنظمة البيئية الحساسة",
      "تقييم ظروف العمل وحقوق الإنسان ومخاطر الصحة والسلامة المهنية",
      "أطر سياسات إعادة التوطين واستعادة سبل العيش المستدامة"
    ],
    "applicationsEn": ["Renewable Energy Mega-Parks", "Cross-Border Infrastructure", "Mining Concessions", "International Joint Ventures"],
    "applicationsAr": ["مشروعات الطاقة المتجددة الضخمة", "مشروعات البنية التحتية الإقليمية", "امتيازات التعدين والصناعات الاستخراجية", "الشراكات الدولية الكبرى"],
    "capabilitiesEn": ["Bilingual IFC-compliant environmental sociologists", "Deep public consultation experience", "Bankable environmental reports approved by global DFIs"],
    "capabilitiesAr": ["خبراء بيئيون واجتماعيون معتمدون بمعايير IFC", "خبرة ميدانية عميقة في جلسات الاستماع والتشاور المجتمعي", "تقارير معتمدة لدى بنوك ومؤسسات التمويل التنموي الدولية"],
    "image": "/BG/Environment & Sustainability/Integrated Environmental & Social Studies (ESIA).jpg"
  },
  {
    "id": "srv-env-carbon",
    "code": "SBA-SRV-ENV03",
    "sector": "environmental",
    "categoryKey": "carbon-footprint",
    "categoryEn": "Carbon Footprint Assessment",
    "categoryAr": "حساب البصمة الكربونية",
    "nameEn": "Corporate Greenhouse Gas (GHG) Accounting & Carbon Footprint Audits",
    "nameAr": "حساب وتدقيق البصمة الكربونية",
    "descriptionEn": "Quantifying Scope 1, Scope 2, and Scope 3 greenhouse gas emissions conforming to the GHG Protocol and ISO 14064 for enterprises aiming for net-zero pathways.",
    "descriptionAr": "قياس واحتساب انبعاثات غازات الاحتباس الحراري للنطاقات الأول والثاني والثالث (Scope 1, 2, 3) طبقًا لمعايير GHG Protocol والأيزو 14064 لتحديد مسارات الحياد الكربوني.",
    "scopeOfWorkEn": [
      "Organizational boundary definition and comprehensive emissions inventory compilation",
      "Product Life Cycle Assessment (LCA) from cradle to grave conforming to ISO 14040/44",
      "Supply chain upstream and downstream emission auditing",
      "Science-Based Targets initiative (SBTi) decarbonization roadmap formulation"
    ],
    "scopeOfWorkAr": [
      "تحديد الحدود المؤسسية وحصر شامل لكافة مصادر الانبعاثات الكربونية",
      "تقييم دورة حياة المنتج (LCA) من المهد إلى اللحد طبقًا للمواصفة ISO 14044",
      "تدقيق انبعاثات سلاسل التوريد والخدمات اللوجستية والشحن",
      "صياغة خريطة طريق لخفض الانبعاثات متوافقة مع مبادرة الأهداف المستندة إلى العلم (SBTi)"
    ],
    "applicationsEn": ["Export-Oriented Industries", "Multinational Enterprises", "Logistics Fleets", "Financial Portfolios"],
    "applicationsAr": ["الشركات والمصانع المصدرة لأوروبا", "الشركات متعددة الجنسيات", "أساطيل النقل واللوجستيات", "المحافظ الاستثمارية الخضراء"],
    "capabilitiesEn": ["Certified GHG Protocol practitioners", "SimaPro / GaBi LCA modeling software licenses", "Direct European CBAM compliance alignment"],
    "capabilitiesAr": ["ممارسون معتمدون في بروتوكول غازات الاحتباس الحراري", "رخص نمذجة دورة الحياة ببرامج SimaPro و GaBi", "مواءمة مباشرة مع متطلبات ضريبة الكربون الأوروبية CBAM"],
    "image": "/BG/Environment & Sustainability/Carbon Footprint & Emissions Reporting.jpg"
  },
  {
    "id": "srv-env-ghg-reporting",
    "code": "SBA-SRV-ENV04",
    "sector": "environmental",
    "categoryKey": "carbon-footprint",
    "categoryEn": "Carbon Emissions Reporting",
    "categoryAr": "تقارير الإفصاح عن الانبعاثات",
    "nameEn": "Carbon Emissions Disclosure, CBAM Compliance & ESG Reporting",
    "nameAr": "تقارير الانبعاثات الكربونية والكربون الأوروبية (CBAM)",
    "descriptionEn": "Drafting verified carbon disclosure reports conforming to GRI, CDP, and the European Carbon Border Adjustment Mechanism (CBAM) for industrial exporters.",
    "descriptionAr": "إعداد وتدقيق تقارير الإفصاح عن الانبعاثات الكربونية المتوافقة مع معايير GRI و CDP ومتطلبات آلية تعديل حدود الكربون الأوروبية (CBAM) لتمكين التصدير بدون غرامات.",
    "scopeOfWorkEn": [
      "CBAM quarterly embedded emissions calculation for steel, cement, fertilizers, and chemicals",
      "CDP Climate Change questionnaire drafting, scoring improvement, and benchmarking",
      "Third-party verification support under ISO 14064-3",
      "Carbon credit generation, offset portfolio design, and voluntary carbon markets"
    ],
    "scopeOfWorkAr": [
      "احتساب الانبعاثات الكربونية المضمنة لآلية CBAM لقطاعات الحديد، الأسمنت، الأسمدة والكيماويات",
      "إعداد ملفات الإفصاح لمنصة CDP العالمية وتحسين التصنيف البيئي للمؤسسة",
      "الدعم الفني خلال مراحل المراجعة والاعتماد الخارجي وفق معيار ISO 14064-3",
      "توليد أرصدة الكربون وشهادات خفض الانبعاثات والتداول في الأسواق الطوعية"
    ],
    "applicationsEn": ["Heavy Industrial Exporters", "Fertilizer & Chemical Plants", "Aluminum & Metal Smelters", "Listed Public Companies"],
    "applicationsAr": ["المصانع الكبرى المصدرة للاتحاد الأوروبي", "شركات الأسمدة والبتروكيماويات", "مصاهر الألومنيوم والمعادن", "الشركات المدرجة بالبورصة"],
    "capabilitiesEn": ["Official CBAM communication template expertise", "Registered carbon offset auditors", "Automated carbon reporting dashboards"],
    "capabilitiesAr": ["خبرة دقيقة في نماذج ومنظومات CBAM الأوروبية", "مراجعو كربون معتمدون لشهادات الخفض الدولية", "لوحات بيانات رقمية لمتابعة الإفصاح السنوي اللحظي"],
    "image": "/BG/Environment & Sustainability/Carbon Footprint & Emissions Reporting.jpg"
  },
  {
    "id": "srv-env-monitoring-lab",
    "code": "SBA-SRV-ENV05",
    "sector": "environmental",
    "categoryKey": "environmental-monitoring",
    "categoryEn": "Monitoring & Measurements",
    "categoryAr": "القياسات والرصد البيئي الميداني",
    "nameEn": "Field & Laboratory Environmental Monitoring (Air, Water, Soil & Noise)",
    "nameAr": "القياسات والرصد البيئي الميداني والمعملي",
    "descriptionEn": "Certified stack emissions testing, ambient air monitoring stations, work environment occupational noise measurements, and analytical wastewater laboratory assays.",
    "descriptionAr": "إجراء القياسات البيئية الميدانية المعتمدة لانبعاثات المداخن، جودة الهواء المحيط، قياسات بيئة العمل المهنية، والتحاليل المعملية لمياه الصرف الصناعي والتربة.",
    "scopeOfWorkEn": [
      "Isokinetic stack emission sampling (SOx, NOx, CO, CO2, PM10/PM2.5, VOCs)",
      "Continuous ambient air quality monitoring station installation and calibration",
      "Work environment occupational physical measurements (noise, light, heat stress, dust)",
      "Physical, chemical, and microbiological water and soil analytical laboratory assays"
    ],
    "scopeOfWorkAr": [
      "سحب عينات انبعاثات المداخن طبقًا للمواصفات الدولية (أكاسيد كبريت، نيتروجين، وأتربة دقيقة)",
      "تركيب ومعايرة محطات الرصد اللحظي المستمر لجودة الهواء المحيط",
      "قياسات بيئة العمل المهنية (الضوضاء، شدة الاستضاءة، وطأة الحرارة، والأتربة العالقة)",
      "التحاليل الكيميائية والميكروبيولوجية الشاملة لمياه الصرف الصناعي والتربة"
    ],
    "applicationsEn": ["Thermal Power Stations", "Cement & Fertilizer Mills", "Textile & Dyeing Plants", "Chemical Complexes"],
    "applicationsAr": ["محطات توليد الكهرباء", "مصانع الأسمنت والأسمدة", "مصانع الغزل والنسيج والصباغة", "المجمعات الكيماوية"],
    "capabilitiesEn": ["Calibrated EPA-compliant sampling trains", "ISO/IEC 17025 accredited partner laboratory", "Official environmental record book documentation"],
    "capabilitiesAr": ["أجهزة قياس مداخن مطابقة لاشتراطات وكالة EPA الأمريكية", "شراكة مع معامل حاصلة على الاعتماد الدولي ISO/IEC 17025", "توثيق السجل البيئي الرسمي للمنشآت الصناعية"],
    "image": "/BG/Environment & Sustainability/Environmental Measurements & Continuous Monitoring.jpg"
  },
  {
    "id": "srv-env-waste-mgmt",
    "code": "SBA-SRV-ENV06",
    "sector": "environmental",
    "categoryKey": "waste-management",
    "categoryEn": "Waste Management Solutions",
    "categoryAr": "حلول إدارة المخلفات",
    "nameEn": "Integrated Municipal, Commercial & Industrial Waste Management",
    "nameAr": "منظومة إدارة وتدوير المخلفات",
    "descriptionEn": "End-to-end advisory and operations covering collection logistics, transfer stations, material sorting, circular recycling, and sanitary landfill engineering.",
    "descriptionAr": "إدارة منظومات المخلفات البلدية والصناعية من المصدر، تشمل خطط الجمع والنقل، تصميم المحطات الوسيطة، مصانع الفرز والتدوير، والمدافن الصحية الآمنة.",
    "scopeOfWorkEn": [
      "Municipal and industrial master waste management logistics planning",
      "Material Recovery Facility (MRF) mechanical sorting layout engineering",
      "Waste generation audit, characterization, and stream minimization protocols",
      "Sanitary landfill cell design, geomembrane lining, and leachate containment"
    ],
    "scopeOfWorkAr": [
      "تخطيط منظومات الإدارة المتكاملة لمخلفات المدن والمناطق الصناعية",
      "تصميم وهندسة مصانع الفرز الميكانيكي واسترداد الموارد القابلة للتدوير",
      "دراسات التولد الكمي والنوعي للمخلفات وبرامج تقليل الهدر من المنبع",
      "تصميم خلايا المدافن الصحية الآمنة وعزلها بالبوليمرات وإدارة عصارة المخلفات"
    ],
    "applicationsEn": ["Municipal Authorities", "Industrial Cities", "Hospitality Resorts", "Logistics Hubs"],
    "applicationsAr": ["أجهزة المدن والمحافظات", "المناطق الصناعية الحرة", "المنتجعات السياحية الكبرى", "الموانئ والمراكز اللوجستية"],
    "capabilitiesEn": ["Fleet routing optimization software", "Full compliance with Waste Law 202/2020", "Turnkey facility operational supervision"],
    "capabilitiesAr": ["برمجيات ذكية لتخطيط مسارات أساطيل النقل", "التزام تام باشتراطات قانون تنظيم إدارة المخلفات رقم 202 لسنة 2020", "إشراف تشغيلي متكامل على المصانع والمدافن"],
    "image": "/BG/Environment & Sustainability/Hazardous & Solid Waste Management & Recycling.jpg"
  },
  {
    "id": "srv-env-industrial-waste",
    "code": "SBA-SRV-ENV07",
    "sector": "environmental",
    "categoryKey": "hazardous-waste",
    "categoryEn": "Hazardous Waste Management",
    "categoryAr": "إدارة المخلفات الخطرة",
    "nameEn": "Hazardous Waste Handling, Chemical Neutralization & Safe Disposal",
    "nameAr": "إدارة ومعالجة المخلفات الخطرة",
    "descriptionEn": "Comprehensive physico-chemical treatment, solidification, stabilization, and safe neutralization of complex industrial solid residues, sludges, and spent chemicals.",
    "descriptionAr": "خدمات الفرز والتحييد الكيميائي والتثبيت والتصليد (Solidification & Stabilization) للمخلفات الصناعية الخطرة والحمأة ونقلها للمدافن المعتمدة.",
    "scopeOfWorkEn": [
      "Hazardous waste manifest documentation, tracking, and regulatory licensing",
      "Heavy metal fixation, sludge dewatering, and chemical encapsulation",
      "Spent solvent and oil re-refining and recovery coordination",
      "Emergency chemical spill clean-up and HazMat response engineering"
    ],
    "scopeOfWorkAr": [
      "إصدار نماذج تتبع المخلفات الخطرة والتراخيص البيئية الرسمية لنقلها",
      "تثبيت المعادن الثقيلة وتجفيف الحمأة الصناعية وعزلها بالمعالجة الكيميائية",
      "استعادة وتدوير المذيبات والزيوت الصناعية المستعملة",
      "خطط الاستجابة للطوارئ وحوادث الانسكاب الكيميائي وتطهير المواقع"
    ],
    "applicationsEn": ["Petrochemical Complexes", "Pharmaceutical Manufacturers", "Automotive Assembly Plants", "Electroplating Facilities"],
    "applicationsAr": ["مجمعات البتروكيماويات", "مصانع الأدوية والكيماويات", "مصانع تجميع السيارات والدهانات", "ورش ومصانع الجلفنة والطلاء الكهربائي"],
    "capabilitiesEn": ["Licensed hazardous waste transport fleet", "Coded HazMat safety engineers", "Certified hazardous landfill chain of custody"],
    "capabilitiesAr": ["أسطول سيارات مجهز ومرخص رسميًا لنقل المخلفات الخطرة", "مهندسو سلامة كيميائية معتمدون", "سلسلة حيازة موثقة حتى التسليم للمدافن الخطرة المعتمدة"],
    "image": "/BG/Environment & Sustainability/Hazardous & Solid Waste Management & Recycling.jpg"
  },
  {
    "id": "srv-env-solid-recycling",
    "code": "SBA-SRV-ENV08",
    "sector": "environmental",
    "categoryKey": "solid-recycling",
    "categoryEn": "Solid Waste Recycling",
    "categoryAr": "تدوير المخلفات واسترداد الموارد",
    "nameEn": "Solid Waste Recycling, Material Recovery & Circular Economy Systems",
    "nameAr": "تدوير المخلفات واسترداد الموارد",
    "descriptionEn": "Developing high-efficiency recycling lines for plastics, paper, cardboard, and agricultural biomass into high-value raw materials and secondary products.",
    "descriptionAr": "تصميم وتشغيل خطوط إعادة تدوير البلاستيك والورق والكرتون والمخلفات الزراعية وتحويلها إلى خامات أولية وبدائل صناعية عالية القيمة.",
    "scopeOfWorkEn": [
      "Automated optical and magnetic sorting line engineering for plastics and metals",
      "Plastic wash lines, mechanical granulation, and food-grade rPET recycling studies",
      "Agricultural biomass briquetting, palletizing, and animal feed formulation",
      "Extended Producer Responsibility (EPR) compliance framework design"
    ],
    "scopeOfWorkAr": [
      "تصميم خطوط الفرز الآلي الضوئي والمغناطيسي للبلاستيك والمعادن",
      "خطوط غسيل وجرش البلاستيك ودراسات إنتاج حبيبات rPET المعتمدة غذائيًا",
      "كبس وتدوير المخلفات الزراعية لإنتاج الوقود الحيوي المضغوط والأعلاف",
      "تصميم أطر الالتزام بالمسؤولية الممتدة للمنتج (EPR) للشركات الصناعية"
    ],
    "applicationsEn": ["Packaging Manufacturers", "Beverage & Bottling Companies", "Agribusiness Corporations", "Recycling Parks"],
    "applicationsAr": ["مصانع التعبئة والتغليف", "شركات الأغذية والمشروبات", "المؤسسات الزراعية الكبرى", "المجمعات الصناعية لتدوير المخلفات"],
    "capabilitiesEn": ["Circular economy engineering advisory", "High-throughput shredding and pelletizing engineering", "Closed-loop supply chain integration"],
    "capabilitiesAr": ["استشارات متقدمة في الاقتصاد الدائري وإعادة التدوير", "هندسة خطوط الجرش والتحبيب عالية الإنتاجية", "تكامل سلاسل الإمداد المغلقة لتقليل الفاقد"],
    "image": "/BG/Environment & Sustainability/Hazardous & Solid Waste Management & Recycling.jpg"
  },
  {
    "id": "srv-env-waste-to-energy",
    "code": "SBA-SRV-ENV09",
    "sector": "environmental",
    "categoryKey": "waste-to-energy",
    "categoryEn": "Waste-to-Energy Solutions",
    "categoryAr": "تحويل المخلفات إلى طاقة (WtE)",
    "nameEn": "Waste & Fuel-to-Energy Systems",
    "nameAr": "أنظمة تحويل المخلفات والوقود إلى طاقة",
    "descriptionEn": "Engineering processing facilities converting non-recyclable combustible waste into high-calorific RDF pellets and steam/electricity for heavy industrial consumption.",
    "descriptionAr": "تصميم وتنفيذ محطات معالجة وإنتاج الوقود البديل عالي القيمة الحرارية (RDF) من المخلفات الصلبة لاستخدامه في أفران مصانع الأسمنت ومحطات توليد الكهرباء.",
    "scopeOfWorkEn": [
      "Waste-to-Energy technical feasibility, calorific profiling, and mass balance modeling",
      "Pre-shredding, air classification, screening, and secondary micro-shredding lines",
      "Calorific value testing (moisture, chlorine, sulfur, heavy metals, LHV/HHV)",
      "Flue gas cleaning systems, baghouses, acid gas scrubbers, and dioxin filtration"
    ],
    "scopeOfWorkAr": [
      "دراسات الجدوى الفنية والاقتصادية ونمذجة الاتزان الحراري لتحويل المخلفات لطاقة",
      "خطوط التمزيق الأولي والفصل الهوائي والغربلة والفرم الناعم لإنتاج RDF",
      "التحاليل المعملية للقيمة الحرارية ونسب الرطوبة والكلور والكبريت والمعادن",
      "أنظمة معالجة وغسيل غازات الاحتراق وفلاتر إزالة الديوكسين والغازات الحمضية"
    ],
    "applicationsEn": ["Cement Manufacturing Plants", "Municipal Incineration Authorities", "Industrial Energy Hubs", "Power IPPs"],
    "applicationsAr": ["مصانع إنتاج الأسمنت", "أجهزة المدن والمحارق المركزية", "المجمعات الصناعية كثيفة استهلاك الطاقة", "مشروعات توليد الكهرباء المستقلة"],
    "capabilitiesEn": ["European RDF standard EN 15359 compliance", "Continuous emissions monitoring system (CEMS) integration", "High calorific density pellet formulation"],
    "capabilitiesAr": ["مطابقة الوقود البديل للمواصفات الأوروبية EN 15359", "تكامل أنظمة الرصد اللحظي المستمر للانبعاثات CEMS", "تركيبات وقود بديل عالية الكثافة الحرارية تفوق 4,000 ك.كالوري/كجم"],
    "image": "/BG/Environment & Sustainability/Waste to Energy & Biogas Plants.jpg"
  },
  {
    "id": "srv-env-biogas",
    "code": "SBA-SRV-ENV10",
    "sector": "environmental",
    "categoryKey": "biogas-plants",
    "categoryEn": "Biogas Plants & Digestion",
    "categoryAr": "محطات الغاز الحيوي (البيوجاز)",
    "nameEn": "Anaerobic Digestion & Biogas Plants Engineering",
    "nameAr": "إنشاء محطات الهضم اللاهوائي وإنتاج الغاز الحيوي",
    "descriptionEn": "Designing and constructing industrial CSTR and UASB biogas reactors utilizing livestock manure, agro-industrial sludges, and food waste to generate green methane and biofertilizer.",
    "descriptionAr": "تصميم وإنشاء محطات الغاز الحيوي (البيوجاز) الصناعية والتخمير اللاهوائي لمخلفات المزارع ومصانع الأغذية والصرف الصحي لتوليد الكهرباء وإنتاج السماد العضوي.",
    "scopeOfWorkEn": [
      "Substrate biochemical methane potential (BMP) laboratory testing",
      "Continuously Stirred Tank Reactor (CSTR) civil and mechanical engineering",
      "Biological and chemical biogas desulfurization (H2S removal) systems",
      "Combined Heat and Power (CHP) cogeneration integration and grid interconnection"
    ],
    "scopeOfWorkAr": [
      "التحليل المعملي للقدرة الحيوية لإنتاج الميثان (BMP) لمختلف المخلفات",
      "التصميم الهندسي والإنشائي للمخمرات الحيوية CSTR والمحركات الميكانيكية",
      "أنظمة تنقية الغاز الحيوي وإزالة كبريتيد الهيدروجين (H2S) والرطوبة",
      "تركيب وحدات التوليد المشترك للكهرباء والحرارة CHP وربطها بالشبكة"
    ],
    "applicationsEn": ["Large Cattle & Poultry Farms", "Sugar, Brewery & Food Factories", "Municipal Wastewater Sludge Units", "Rural Agro-Industrial Cooperatives"],
    "applicationsAr": ["مزارع الإنتاج الحيواني والدواجن الكبرى", "مصانع الأغذية والحلويات والسكر", "محطات معالجة الصرف الصحي (حمأة)", "المجمعات الزراعية الصناعية"],
    "capabilitiesEn": ["Patented biological desulfurization formulations", "High-efficiency anaerobic mixing systems", "Organic bio-fertilizer separation and packaging skids"],
    "capabilitiesAr": ["مركبات بيولوجية متطورة لإزالة كبريتيد الهيدروجين بكفاءة تفوق 99%", "أنظمة تقليب وخلط لاهوائية موفرة للطاقة", "وحدات فصل وتجفيف السماد العضوي السائل والصلب عالي الجودة"],
    "image": "/BG/Environment & Sustainability/Waste to Energy & Biogas Plants.jpg"
  },
  {
    "id": "srv-env-renewable-energy",
    "code": "SBA-SRV-ENV11",
    "sector": "environmental",
    "categoryKey": "renewable-energy",
    "categoryEn": "Renewable Energy Solutions",
    "categoryAr": "حلول وأنظمة الطاقة المتجددة",
    "nameEn": "Solar PV Plants for Industrial Facilities",
    "nameAr": "محطات الطاقة الشمسية للمنشآت الصناعية",
    "descriptionEn": "EPC engineering of rooftop, ground-mounted, and microgrid solar photovoltaic systems reducing enterprise utility costs and decarbonizing industrial operations.",
    "descriptionAr": "تصميم وتوريد وتركيب وتشغيل محطات الطاقة الشمسية الكهروضوئية (Solar PV) على أسطح المصانع والمزارع والمنظومات الهجينة لخفض فواتير الطاقة والانبعاثات.",
    "scopeOfWorkEn": [
      "Solar irradiation assessment, shading analysis, and PVsyst performance simulation",
      "Tier-1 monocrystalline module procurement and heavy-duty mounting structures",
      "Grid-tied string inverters, transformers, net-metering, and grid approvals",
      "Hybrid battery energy storage systems (BESS) and microgrid management"
    ],
    "scopeOfWorkAr": [
      "دراسات الإشعاع الشمسي ومحاكاة الإنتاجية ببرنامج PVsyst وتحليل الظلال",
      "توريد ألواح شمسية نخب أول وهياكل تثبيت معدنية مجلفنة مقاومة للرياح",
      "محولات التيار Inverters، لوحات التوزيع وربط العدادات التبادلية مع شبكة الكهرباء",
      "أنظمة تخزين الطاقة بالبطاريات (BESS) وإدارة الشبكات المصغرة المنفصلة"
    ],
    "applicationsEn": ["Industrial Factories", "Agricultural Water Pumping", "Logistics Warehouses", "Commercial Malls"],
    "applicationsAr": ["المصانع والمنشآت الإنتاجية", "محطات ضخ مياه الري الزراعي بالطاقة الشمسية", "المستودعات اللوجستية", "المجمعات التجارية الكبرى"],
    "capabilitiesEn": ["Licensed renewable energy EPC contractor", "Real-time string telemetry and yield monitoring", "Bankable solar performance yield warranties"],
    "capabilitiesAr": ["مقاول معتمد لتنفيذ محطات الطاقة المتجددة", "أنظمة مراقبة لحظية للأداء عبر السحابة", "ضمانات إنتاجية طاقة معتمدة ومقبولة بنكيًا"],
    "image": "/BG/Environment & Sustainability/Renewable Energy Sector.jpg"
  },
  {
    "id": "srv-env-economics-policy",
    "code": "SBA-SRV-ENV12",
    "sector": "environmental",
    "categoryKey": "environmental-economics",
    "categoryEn": "Environmental Economic Studies",
    "categoryAr": "الدراسات الاقتصادية البيئية",
    "nameEn": "Environmental Economics, Cost-Benefit Studies & Policy Advisory",
    "nameAr": "الدراسات الاقتصادية البيئية",
    "descriptionEn": "Authoritative economic modeling analyzing environmental regulations, green taxation, natural capital valuation, and policy impact on enterprise profitability.",
    "descriptionAr": "النمذجة والتحليل الاقتصادي المتقدم للسياسات البيئية، تقييم رأس المال الطبيعي، دراسات الجدوى الاقتصادية البيئية، وتحليل أثر القوانين الخضراء على ربحية الشركات.",
    "scopeOfWorkEn": [
      "Environmental Cost-Benefit Analysis (CBA) and Cost-Effectiveness Analysis (CEA)",
      "Natural capital accounting and ecosystem services monetization",
      "Carbon price impact sensitivity modeling on corporate profitability",
      "Green subsidy, environmental taxation, and regulatory litigation advisory"
    ],
    "scopeOfWorkAr": [
      "تحليل التكلفة والعائد البيئي (CBA) والفعالية الاقتصادية للبدائل التكنولوجية",
      "محاسبة رأس المال الطبيعي والتقييم المالي لخدمات النظم البيئية",
      "نمذجة حساسية أثر تسعير الكربون والضرائب البيئية على أرباح المنشآت",
      "استشارات الدعم الأخضر والتقاضي والامتثال للاشتراطات والتشريعات الحكومية"
    ],
    "applicationsEn": ["Multinational Conglomerates", "Government Ministries", "Energy & Extraction Companies", "Infrastructure Developers"],
    "applicationsAr": ["الشركات القابضة والمتعددة الجنسيات", "الوزارات والهيئات التنموية", "شركات الطاقة والتعدين", "مستثمرو مشروعات البنية التحتية"],
    "capabilitiesEn": ["Senior environmental economists and legal scholars", "Proprietary macro-economic environmental models", "Defensible policy whitepapers for global bodies"],
    "capabilitiesAr": ["خبراء وأكاديميون متخصصون في الاقتصاد البيئي والتشريعات", "نماذج اقتصادية دقيقة للتنبؤ بتكاليف الامتثال البيئي", "أوراق سياسات ودراسات موثقة معتمدة أمام المنظمات الدولية"],
    "image": "/BG/Environment & Sustainability/Environmental Economics & Policy Consultations.jpg"
  },
  {
    "id": "srv-env-sustainability",
    "code": "SBA-SRV-ENV13",
    "sector": "environmental",
    "categoryKey": "sustainability-consulting",
    "categoryEn": "Sustainability & ESG Consulting",
    "categoryAr": "استشارات الاستدامة واستراتيجيات ESG",
    "nameEn": "Corporate Sustainability Strategies, ESG Frameworks & Impact Programs",
    "nameAr": "استراتيجيات الاستدامة واستراتيجيات (ESG)",
    "descriptionEn": "Formulating comprehensive corporate sustainability roadmaps, ESG scoring improvement, materiality assessments, and transparent non-financial reporting.",
    "descriptionAr": "تصميم وتطوير استراتيجيات الاستدامة المؤسسية الشاملة، تحسين تقييمات ESG للمؤسسات، مصفوفة الأهمية النسبية، وإعداد تقارير الاستدامة المعتمدة دوليًا.",
    "scopeOfWorkEn": [
      "Double materiality assessment engaging internal and external stakeholders",
      "ESG policy architecture (environmental, social responsibility, corporate governance)",
      "GRI Standards and SASB-aligned annual sustainability report drafting",
      "Employee sustainability culture workshops and leadership training"
    ],
    "scopeOfWorkAr": [
      "تقييم الأهمية المزدوجة (Double Materiality) بمشاركة أصحاب المصلحة",
      "صياغة سياسات وإجراءات الحوكمة البيئية والاجتماعية وحوكمة الشركات",
      "إعداد ونشر تقارير الاستدامة السنوية المتوافقة مع معايير GRI و SASB",
      "ورش عمل بناء ثقافة الاستدامة وتدريب القيادات التنفيذية بالمؤسسة"
    ],
    "applicationsEn": ["Commercial Banks & Insurers", "Listed Corporate Groups", "Family Business Conglomerates", "Real Estate Developers"],
    "applicationsAr": ["البنوك والمؤسسات المالية وشركات التأمين", "الشركات المدرجة بالبورصة", "المجموعات العائلية الكبرى", "شركات التطوير والاستثمار العقاري"],
    "capabilitiesEn": ["Certified GRI reporting professionals", "Deep knowledge of regional stock exchange ESG guidelines", "End-to-end stakeholder engagement facilitation"],
    "capabilitiesAr": ["خبراء معتمدون في إعداد تقارير GRI الدولية", "دراية كاملة بدليل الإفصاح عن الاستدامة الصادر عن البورصات الإقليمية", "إدارة وتيسير ورش العمل وجلسات الحوار مع أصحاب المصلحة"],
    "image": "/BG/Environment & Sustainability/Management Consultations & ISO Qualification Projects.jpg"
  },
  {
    "id": "srv-env-sdgs",
    "code": "SBA-SRV-ENV14",
    "sector": "environmental",
    "categoryKey": "sdgs-consulting",
    "categoryEn": "SDGs Consulting",
    "categoryAr": "استشارات أهداف التنمية المستدامة (SDGs)",
    "nameEn": "UN Sustainable Development Goals (SDGs) Alignment & Impact Mapping",
    "nameAr": "استشارات أهداف التنمية المستدامة (SDGs)",
    "descriptionEn": "Mapping enterprise operations to the 17 UN Sustainable Development Goals, designing measurable impact KPIs, and qualifying projects for sovereign and green finance.",
    "descriptionAr": "مواءمة أنشطة وعمليات الشركات مع أهداف التنمية المستدامة الـ 17 للأمم المتحدة، ووضع مؤشرات قياس أثر ملموسة، وتأهيل المشروعات للتمويل الأخضر التنموي.",
    "scopeOfWorkEn": [
      "SDG mapping and contribution prioritization (Targets 6, 7, 9, 11, 12, 13)",
      "Impact KPIs selection and quantitative metrics measurement systems",
      "Corporate social responsibility (CSR) strategy restructuring toward high impact",
      "Partnership development with UN agencies, ministries, and civil society"
    ],
    "scopeOfWorkAr": [
      "ربط أنشطة المؤسسة بأهداف التنمية المستدامة ذات الأولوية (أهداف 6، 7، 9، 11، 12، 13)",
      "تحديد مؤشرات الأداء الرئيسية (KPIs) ونظم الرصد الكمي للأثر الإيجابي",
      "إعادة هيكلة برامج المسؤولية المجتمعية (CSR) لتحقيق نتائج مستدامة ملموسة",
      "بناء الشراكات التنموية مع وكالات الأمم المتحدة والوزارات ومنظمات المجتمع المدني"
    ],
    "applicationsEn": ["Development Agencies", "Sovereign Funds", "Corporate Foundations", "Educational Institutions"],
    "applicationsAr": ["الهيئات والمنظمات التنموية", "الصناديق السيادية والاستثمارية", "المؤسسات الخيرية والتنموية للشركات", "المؤسسات التعليمية والجامعات"],
    "capabilitiesEn": ["UN Global Compact aligned methodology", "Empirical social return on investment (SROI) modeling", "Multi-stakeholder partnership orchestration"],
    "capabilitiesAr": ["منهجية متوافقة مع الميثاق العالمي للأمم المتحدة UNGC", "نمذجة العائد الاجتماعي على الاستثمار (SROI)", "تنسيق الشراكات المؤسسية الفعالة ذات الأثر المستدام"],
    "image": "/BG/Environment & Sustainability/Management Consultations & ISO Qualification Projects.jpg"
  },
  {
    "id": "srv-env-iso-systems",
    "code": "SBA-SRV-ENV15",
    "sector": "environmental",
    "categoryKey": "iso-support",
    "categoryEn": "ISO Management Systems",
    "categoryAr": "تأهيل أنظمة الأيزو البيئية وإدارة الطاقة",
    "nameEn": "ISO 14001 & ISO 50001 Management Systems Qualification & Auditing",
    "nameAr": "تأهيل أنظمة الأيزو البيئية وإدارة الطاقة",
    "descriptionEn": "Comprehensive gap analysis, documentation, internal auditor training, and third-party audit facilitation for ISO 14001 (Environmental) and ISO 50001 (Energy Management).",
    "descriptionAr": "دراسة الفجوات، توثيق الإجراءات، تدريب المراجعين الداخليين، والدعم الكامل للحصول على شهادات الأيزو 14001 لنظم الإدارة البيئية والأيزو 50001 لنظم إدارة الطاقة.",
    "scopeOfWorkEn": [
      "Environmental aspects and impacts register compilation and legal compliance audit",
      "Energy baseline (EnB), Energy Performance Indicators (EnPIs), and SEU identification",
      "Standard operating procedures (SOP), emergency response, and operational control manuals",
      "Internal audit conduction, management review assistance, and certification body liaison"
    ],
    "scopeOfWorkAr": [
      "إعداد سجل المظاهر والآثار البيئية وتدقيق الامتثال للقوانين والتشريعات المنظمة",
      "تحديد خط الأساس للطاقة (EnB) ومؤشرات كفاءة الطاقة ومجالات الاستهلاك الرئيسية",
      "صياغة إجراءات التشغيل القياسية (SOPs) وخطط الطوارئ ودليل الإدارة المتكامل",
      "تنفيذ المراجعات الداخلية، تجهيز اجتماعات مراجعة الإدارة، والتنسيق مع جهات المنح الدولية"
    ],
    "applicationsEn": ["Manufacturing Factories", "Energy-Intensive Mills", "Healthcare Campuses", "Contracting Companies"],
    "applicationsAr": ["المصانع والشركات الإنتاجية", "المنشآت كثيفة استهلاك الطاقة", "المستشفيات والمدن الطبية", "شركات المقاولات الكبرى"],
    "capabilitiesEn": ["IRCA-certified lead auditors for ISO 14001 & ISO 50001", "100% first-attempt certification success rate", "Tailored digital compliance documentation"],
    "capabilitiesAr": ["مراجعون رئيسيون معتمدون دوليًا من منظمة IRCA البريطانية", "نسبة نجاح 100% في اجتياز مراجعات المنح من أول تدقيق", "توثيق رقمي مرن لإجراءات النظام المؤسسي"],
    "image": "/BG/Environment & Sustainability/Management Consultations & ISO Qualification Projects.jpg"
  },
  {
    "id": "srv-env-qhse",
    "code": "SBA-SRV-ENV16",
    "sector": "environmental",
    "categoryKey": "qhse-solutions",
    "categoryEn": "Integrated QHSE Solutions",
    "categoryAr": "حلول الجودة والصحة والسلامة والبيئة",
    "nameEn": "Integrated Quality, Health, Safety & Environment (QHSE) Solutions",
    "nameAr": "حلول الجودة والصحة والسلامة والبيئة",
    "descriptionEn": "Designing robust QHSE management frameworks unifying ISO 9001, ISO 14001, and ISO 45001 to prevent workplace accidents and ensure regulatory compliance.",
    "descriptionAr": "تصميم وتطبيق منظومات متكاملة لإدارة الجودة والصحة والسلامة المهنية والبيئة (QHSE) لدمج معايير الأيزو 9001 و14001 و45001 لمنع الحوادث وضمان سلامة بيئة العمل.",
    "scopeOfWorkEn": [
      "Hazard Identification and Risk Assessment (HIRA) and Job Safety Analysis (JSA)",
      "Incident investigation, root cause analysis (RCA), and corrective action plans",
      "Emergency response planning, fire drill protocols, and evacuation mapping",
      "Contractor safety management and site compliance inspection routines"
    ],
    "scopeOfWorkAr": [
      "تحديد المخاطر وتقييمها (HIRA) وتحليل سلامة المهام (JSA) لكافة مواقع العمل",
      "التحقيق في الحوادث وتحليل الأسباب الجذرية (RCA) وتطبيق الإجراءات التصحيحية",
      "إعداد خطط الطوارئ والإخلاء وسيناريوهات مكافحة الحرائق وتدريب العاملين",
      "إدارة سلامة المقاولين والتفتيش الدوري على مواقع العمل والإنشاءات"
    ],
    "applicationsEn": ["Construction Sites", "Petrochemical Refineries", "Heavy Manufacturing Plants", "Port Terminals"],
    "applicationsAr": ["مواقع المقاولات والإنشاءات الكبرى", "مصافي البترول والغاز", "المصانع الثقيلة", "الموانئ والمستودعات البحرية"],
    "capabilitiesEn": ["NEBOSH / OSHA certified safety consultants", "Zero-incident behavioral safety coaching", "Mobile site safety inspection application"],
    "capabilitiesAr": ["استشاريو سلامة معتمدون من نيبوش NEBOSH والأوشا OSHA", "برامج تدريب تعديل السلوك المهني لتحقيق صفر حوادث", "تطبيقات رقمية للتفتيش الفوري على معايير السلامة بالموقع"],
    "image": "/BG/Environment & Sustainability/Environmental Measurements & Continuous Monitoring.jpg"
  },
  {
    "id": "srv-env-digital-ehs",
    "code": "SBA-SRV-ENV17",
    "sector": "environmental",
    "categoryKey": "digital-ehs",
    "categoryEn": "Digital EHS Software & IoT",
    "categoryAr": "المنظومات والحلول الرقمية للسلامة والبيئة",
    "nameEn": "Digital EHS Enterprise Software Platforms & Real-Time IoT Systems",
    "nameAr": "المنظومات والحلول الرقمية للسلامة والبيئة",
    "descriptionEn": "Deploying proprietary cloud EHS software, mobile inspection tools, and IoT environmental sensor stations for automated data collection and compliance tracking.",
    "descriptionAr": "تطبيق المنظومات السحابية لإدارة البيئة والسلامة وتطبيقات التفتيش بالهاتف المحمول ومحطات الاستشعار الذكية لجمع البيانات البيئية آليًا وتحليل المخاطر لحظيًا.",
    "scopeOfWorkEn": [
      "EHS SaaS portal deployment: permit-to-work, incident logging, compliance audits",
      "IoT real-time ambient monitoring integration (particulate, VOCs, noise, water level)",
      "Automated regulatory compliance calendar and legal violation early warnings",
      "Custom carbon accounting API integrations with corporate ERP systems (SAP/Oracle)"
    ],
    "scopeOfWorkAr": [
      "تثبيت المنظومة السحابية: تصاريح العمل الإلكترونية، تسجيل الحوادث، والتدقيق البيئي",
      "ربط حساسات إنترنت الأشياء (IoT) للرصد اللحظي للأتربة والغازات والضوضاء ومناسيب المياه",
      "تقويم آلي للامتثال البيئي والتنبيه المبكر بمواعيد تجديد التراخيص والقياسات الرسمية",
      "ربط برمجي لحساب البصمة الكربونية آليًا مع أنظمة الشركات مثل SAP و Oracle"
    ],
    "applicationsEn": ["Industrial Parks", "Enterprise Corporations", "Smart Cities", "Contracting Groups"],
    "applicationsAr": ["المدن والمجمعات الصناعية", "المؤسسات والشركات الكبرى", "المدن الذكية والمستدامة", "شركات المقاولات متعددة المواقع"],
    "capabilitiesEn": ["Proprietary SaaS architecture (EHS-APP & IoT-ENV)", "End-to-end encrypted cloud data security", "Customized mobile apps for Android and iOS"],
    "capabilitiesAr": ["منظومات برمجية سحابية مملوكة للمجموعة (EHS-APP و IoT-ENV)", "حماية وتشفير متكامل للبيانات الصناعية على خوادم سحابية آمنة", "تطبيقات هواتف ذكية مخصصة لفرق العمل الميدانية"],
    "image": "/BG/Environment & Sustainability/EHS Digital Platforms, Automation & Environmental Software.jpg"
  },
  {
    "id": "srv-env-biotech",
    "code": "SBA-SRV-ENV18",
    "sector": "environmental",
    "categoryKey": "biotechnology",
    "categoryEn": "Biotechnology & Bioremediation",
    "categoryAr": "التكنولوجيا الحيوية والمعالجة البيولوجية",
    "nameEn": "Applied Environmental Biotechnology & Biological Hydrocarbon Remediation",
    "nameAr": "التكنولوجيا الحيوية والمعالجة البيولوجية",
    "descriptionEn": "Deploying specialized bio-catalytic formulations and microbial consortia to neutralize odor emissions, degrade oil sludge, and restore contaminated soil and wastewater.",
    "descriptionAr": "تطبيق الحلول البيولوجية المتقدمة ومستحضرات البكتيريا المتخصصة لتحييد الروائح الكريهة وتفتيت الحمأة البترولية ومعالجة مياه الصرف الصحي والصناعي طبيعيًا.",
    "scopeOfWorkEn": [
      "Bio-catalytic odor neutralization spraying across municipal landfills and wastewater plants",
      "In-situ and ex-situ bio-piles for crude oil contaminated soil bioremediation",
      "Microbial augmentation for industrial wastewater treatment lagoons to cut COD/BOD",
      "Grease trap and organic drain bio-digestion for commercial hospitality complexes"
    ],
    "scopeOfWorkAr": [
      "رش المستحضرات البيولوجية لإزالة الروائح الكريهة في مدافن المخلفات ومحطات الصرف",
      "معالجة التربة الملوثة بالنفط بيولوجيًا بتقنية الكومات الحيوية دون استخدام كيماويات ضارة",
      "تنشيط المعالجة البيولوجية في أحواض الصرف الصناعي لخفض نسب COD و BOD بكفاءة عالية",
      "تفتيت الدهون والزيوت العضوية في شبكات الصرف للمطاعم والفنادق الكبرى"
    ],
    "applicationsEn": ["Oilfield Storage Terminals", "Municipal Wastewater Facilities", "Rendering & Food Plants", "Landfill Facilities"],
    "applicationsAr": ["مستودعات وحقول إنتاج النفط", "محطات معالجة مياه الصرف الصحي", "مصانع تدوير المخلفات العضوية والأغذية", "مدافن المخلفات البلدية"],
    "capabilitiesEn": ["Proprietary eco-friendly formulations (ET-POT-01 & ET-POR-01)", "100% non-pathogenic, non-toxic biological agents", "Rapid field application mobile units"],
    "capabilitiesAr": ["مركبات بيولوجية متطورة حصرية للمجموعة (ET-POT-01 و ET-POR-01)", "مستحضرات طبيعية 100% غير سامة وغير ضارة بالإنسان أو البيئة", "وحدات ميدانية متنقلة للرش والخلط والمعالجة الفورية بالموقع"],
    "image": "/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg"
  },
  {
    "id": "srv-env-rd",
    "code": "SBA-SRV-ENV19",
    "sector": "environmental",
    "categoryKey": "applied-rd",
    "categoryEn": "Applied Environmental R&D",
    "categoryAr": "البحث والتطوير العلمي البيئي التطبيقي",
    "nameEn": "Applied Environmental Research, Laboratory Assays & Technology Commercialization",
    "nameAr": "البحث والتطوير العلمي البيئي التطبيقي",
    "descriptionEn": "Conducting collaborative scientific R&D in partnership with universities and research institutes to engineer innovative solutions for industrial pollution and resource recovery.",
    "descriptionAr": "تنفيذ برامج البحث العلمي التطبيقي بالتعاون مع الجامعات والمراكز البحثية لتطوير حلول مبتكرة لمشاكل التلوث الصناعي، ومعالجة المياه واسترداد الموارد.",
    "scopeOfWorkEn": [
      "Microbial strain isolation, toxicity assays, and genetic sequencing for biodegradation",
      "Laboratory-scale pilot reactor prototyping for industrial effluent treatment",
      "Valorization of agro-industrial byproducts into high-value biochemicals",
      "Publishing joint scientific whitepapers and intellectual property patenting"
    ],
    "scopeOfWorkAr": [
      "عزل وتوصيف السلالات البكتيرية المعالجة واختبارات السمية للتفتيت الحيوي للملوثات",
      "تصميم واختبار النماذج التجريبية المصغرة (Pilot Plants) لمعالجة الصرف الصناعي المعقد",
      "تحويل المخلفات الزراعية والصناعية إلى مركبات كيميائية ومواد مضافة ذات قيمة عالية",
      "نشر الأوراق العلمية المشتركة وتسجيل براءات الاختراع والابتكارات البيئية"
    ],
    "applicationsEn": ["Chemical & Mining Companies", "University Research Consortia", "Green Technology Incubators", "Government R&D Bodies"],
    "applicationsAr": ["شركات الكيماويات والتعدين الكبرى", "التحالفات البحثية مع الجامعات", "حاضنات التكنولوجيا الخضراء", "هيئات البحث العلمي والابتكار الحكومية"],
    "capabilitiesEn": ["Equipped university-partnered microbiology and analytical laboratories", "Multi-disciplinary team of Ph.D. environmental chemists", "Proven track record bridging academic science with industrial market delivery"],
    "capabilitiesAr": ["معامل ميكروبيولوجية وتحليلية مجهزة بالشراكة مع الجامعات في مصر", "فريق بحثي يضم نخبة من حملة الدكتوراه في الكيمياء والبيولوجيا البيئية", "سجل ناجح في تحويل الأبحاث المعملية إلى منتجات وحلول صناعية تجارية"],
    "image": "/BG/Environment & Sustainability/Scientific Research, Publishing & Heritage Verification.jpg"
  },

  // --------------------------------------------------------------------------
  // DIVISION 3: APPAREL & TEXTILE MANUFACTURING SERVICES (7 Programs)
  // --------------------------------------------------------------------------
  {
    "id": "srv-app-oem",
    "code": "SBA-SRV-APP01",
    "sector": "apparel-services",
    "categoryKey": "oem-manufacturing",
    "categoryEn": "OEM Contract Manufacturing",
    "categoryAr": "التصنيع الأصلي للمعدات OEM",
    "nameEn": "Original Equipment Manufacturer (OEM) Apparel Production",
    "nameAr": "التصنيع بمواصفات العلامات التجارية OEM",
    "descriptionEn": "Providing industrial production line capacity for global retail brands and corporate buyers. Offers pure Cut-Make-Trim (CMT) or partial-supply contract models.",
    "descriptionAr": "توفير طاقات خطوط الإنتاج الصناعية للعلامات التجارية العالمية وتجار التجزئة، مع خيارات التشغيل بنظام القص والخياطة (CMT) أو التصنيع الشامل.",
    "scopeOfWorkEn": [
      "Automated Gerber CNC spreading and precision multi-ply fabric cutting",
      "Dedicated modular assembly lines matching buyer construction specifications",
      "Automated loop making, multi-head embroidery, and screen/digital heat-transfer printing",
      "In-line needle detection, dimensional stability testing, and barcoded carton packaging"
    ],
    "scopeOfWorkAr": [
      "الفرد الآلي والقص الدقيق للأقمشة بأنظمة الكمبيوتر CNC (جيربر)",
      "خطوط خياطة نمطية متخصصة مطابقة للمواصفات الفنية المعتمدة للمشتري",
      "ماكينات التطريز الصناعي متعددة الرؤوس والطباعة الحريرية والحرارية الرقمية",
      "فحص أجهزة الكشف عن الإبر المكسورة واختبار ثبات الأبعاد والتعبئة بالباركود"
    ],
    "applicationsEn": ["International Fashion Brands", "Department Store Chains", "Workwear & Corporate Uniform Buyers", "Online Fashion Retailers"],
    "applicationsAr": ["العلامات التجارية العالمية للأزياء", "سلاسل المتاجر الكبرى", "مشترو الزي الموحد وملابس العمل المؤسسية", "منصات تجارة الأزياء الإلكترونية"],
    "capabilitiesEn": ["Over 250 specialized industrial sewing machines", "Lean manufacturing line balancing", "AQL 1.5 inline and final inspection"],
    "capabilitiesAr": ["أكثر من 250 ماكينة خياطة صناعية متخصصة", "تطبيق مبادئ التصنيع الرشيق Lean Manufacturing لمرونة الخطوط", "مراقبة جودة صارمة بمقاييس AQL 1.5 الدولية"],
    "image": "/BG/Apparel Manufacturing/Textile & Ready-Made Garments Sector.jpg"
  },
  {
    "id": "srv-app-odm",
    "code": "SBA-SRV-APP02",
    "sector": "apparel-services",
    "categoryKey": "odm-development",
    "categoryEn": "ODM Design & Co-Development",
    "categoryAr": "التصميم والتصنيع المشترك ODM",
    "nameEn": "ODM Fashion Co-Development & Ready Design Customization",
    "nameAr": "التصنيع من محفطة الموديلات المعتمدة ODM",
    "descriptionEn": "End-to-end design development allowing fashion labels to select and customize garments from our verified 2,700+ design library without internal design overhead.",
    "descriptionAr": "خدمة تطوير وتصميم متكاملة تتيح للماركات التجارية اختيار وتخصيص موديلات من محفظتنا المعتمدة التي تضم أكثر من 2,700 تصميم جاهز للإنتاج الفوري.",
    "scopeOfWorkEn": [
      "Access to extensive season-ready silhouette catalogs across women's, men's, and children's",
      "Custom colorways, graphic artwork adaptation, and brand labeling insertion",
      "Fit adjustment to specific demographic measurement charts",
      "Fast-track sample delivery within 5 to 7 working days"
    ],
    "scopeOfWorkAr": [
      "إتاحة كتالوجات تصميمات موسمية متكاملة للملابس النسائية والرجالية والأطفال",
      "تخصيص لوحات الألوان والطباعات وتثبيت الشعارات والبطاقات الخاصة بالعلامة",
      "تعديل وتدريج القياسات لملاءمة متطلبات الأسواق المستهدفة",
      "تنفيذ وتسليم عينات الاعتماد الأولية خلال 5 إلى 7 أيام عمل"
    ],
    "applicationsEn": ["Emerging Fashion Labels", "Regional Retail Chains", "Private Label Boutiques", "Fast-Fashion Brands"],
    "applicationsAr": ["العلامات التجارية الصاعدة في الموضة", "سلاسل متاجر التجزئة الإقليمية", "المتاجر والبوتيكات الراقية", "ماركات الأزياء السريعة"],
    "capabilitiesEn": ["In-house fashion design team", "Proprietary library of over 2,700 commercial styles", "3D virtual fitting simulations"],
    "capabilitiesAr": ["فريق تصميم أزياء وباترون متخصص", "مكتبة موديلات تجارية تضم أكثر من 2,700 تصميم مجرب بالأسواق", "محاكاة ثلاثية الأبعاد لملاءمة القياسات 3D Virtual Fitting"],
    "image": "/BG/Apparel Manufacturing/Product Development & Sampling.jpg"
  },
  {
    "id": "srv-app-private-label",
    "code": "SBA-SRV-APP03",
    "sector": "apparel-services",
    "categoryKey": "private-label",
    "categoryEn": "Private Label Manufacturing",
    "categoryAr": "التصنيع للعلامات التجارية الخاصة",
    "nameEn": "Turnkey Private Label Manufacturing & Brand Collection Packaging",
    "nameAr": "التصنيع للعلامات التجارية الخاصة",
    "descriptionEn": "Complete contract manufacturing tailored to brand identity, including custom jacquard woven neck labels, engraved metal hardware, hangtags, and presentation gift boxes.",
    "descriptionAr": "تصنيع متكامل وحصري للعلامات التجارية يشمل حياكة البطاقات المنسوجة الفاخرة، الإكسسوارات المعدنية المنقوشة، كروت الأسعار، والتغليف التصديري الفاخر.",
    "scopeOfWorkEn": [
      "Bespoke label weaving, printed satin care tags, and security QR-code hangtags",
      "Custom branded polybags, tissue wrap, silica gel insertion, and barcode stickering",
      "Master export shipping cartons matching international retail warehouse logistics",
      "Confidentiality agreement protecting proprietary brand silhouettes and artwork"
    ],
    "scopeOfWorkAr": [
      "تصنيع بطاقات الهوية المنسوجة، بطاقات إرشادات الغسيل وبطاقات الأسعار الذكية QR",
      "أكياس تغليف مطبوعة بهوية الماركة، ورق تغليف داخلي، وممتصات الرطوبة",
      "كراتين شحن تصديرية متينة مطابقة لاشتراطات المستودعات اللوجستية العالمية",
      "اتفاقيات سرية وحماية كاملة للتصميمات والباترونات الحصرية الخاصة بالعميل"
    ],
    "applicationsEn": ["Luxury Fashion Houses", "Department Store Own-Brands", "Influencer & Celebrity Brands", "Sportswear Labels"],
    "applicationsAr": ["دور الأزياء الفاخرة", "العلامات الخاصة بسلاسل المتاجر الكبرى", "ماركات المشاهير والمؤثرين", "علامات الملابس الرياضية المتخصصة"],
    "capabilitiesEn": ["End-to-end branding packaging line", "Full IP and design protection", "Flexible multi-SKU minimum order quantities"],
    "capabilitiesAr": ["خطوط تعبئة وتغليف بهوية العلامة التجارية", "حماية كاملة للملكية الفكرية والتصميمات", "مرونة في الحد الأدنى للطلب وتعدد الموديلات"],
    "image": "/BG/Apparel Manufacturing/Private Label & Contract Manufacturing.jpg"
  },
  {
    "id": "srv-app-fob",
    "code": "SBA-SRV-APP04",
    "sector": "apparel-services",
    "categoryKey": "fob-manufacturing",
    "categoryEn": "Full Package FOB Programs",
    "categoryAr": "برامج التصنيع الشامل والتصدير (FOB)",
    "nameEn": "Full Package & FOB Export Garment Manufacturing Programs",
    "nameAr": "التصنيع الشامل بنظام FOB",
    "descriptionEn": "All-inclusive manufacturing coordinating raw cotton fiber, knitting, piece dyeing, bulk production, and port customs export clearance under standard international Incoterms.",
    "descriptionAr": "برامج تصنيع شاملة تتولى شراء الأقمشة والغزول، الصباغة، التصنيع الكامل، الفحص المخبري، وإنهاء الإجراءات الجمركية وشحن الحاويات بموانئ الإسكندرية ودمياط.",
    "scopeOfWorkEn": [
      "Raw materials procurement and complete bill of materials (BOM) management",
      "Continuous inline factory quality audits conforming to approved master golden samples",
      "Export documentation: Phytosanitary certificates, EUR.1, Certificate of Origin, Form A",
      "Port delivery, container stuffing, fumigation, and shipping line freight coordination"
    ],
    "scopeOfWorkAr": [
      "شراء وإدارة كافة الخامات ومستلزمات الإنتاج وفق قائمة BOM المعتمدة",
      "مراقبة جودة مرحلية دقيقة مطابقة للعينة الذهبية المعتمدة من المشتري",
      "إصدار الوثائق التصديرية الرسمية: شهادات المنشأ، اتفاقيات EUR.1، وشهادات الفحص",
      "التوصيل للموانئ، تحميل وتعتيق الحاويات، التبخير، والتنسيق مع الخطوط الملاحية"
    ],
    "applicationsEn": ["European Import Houses", "GCC Retail Groups", "North American Sourcing Agencies", "Trading Companies"],
    "applicationsAr": ["بيوت الاستيراد الأوروبية", "مجموعات التجزئة في دول الخليج", "وكالات الشراء الدولية", "شركات التجارة العالمية"],
    "capabilitiesEn": ["FOB Alexandria / Port Said delivery", "Duty-free trade agreement utilization (EUR.1, Agadir, COMESA)", "Containerized freight logistics team"],
    "capabilitiesAr": ["تسليم FOB على موانئ الإسكندرية وبورسعيد ودمياط", "الاستفادة من الاتفاقيات الجمركية التفضيلية (EUR.1 وأغادير والكوميسا)", "فريق لوجستي متخصص في الشحن والتخليص الجمركي"],
    "image": "/BG/Apparel Manufacturing/Integrated Manufacturing.jpg"
  },
  {
    "id": "srv-app-cm",
    "code": "SBA-SRV-APP05",
    "sector": "apparel-services",
    "categoryKey": "cm-manufacturing",
    "categoryEn": "CM Manufacturing (Cut & Make)",
    "categoryAr": "التصنيع بنظام CM",
    "nameEn": "CM Manufacturing – Cut & Make",
    "nameAr": "التصنيع بنظام CM",
    "descriptionEn": "Providing specialized Cut & Make (CM) apparel manufacturing services where the client supplies all fabrics, trims, and accessories, while our factory executes fabric spreading, precision cutting, sewing, assembly, finishing, and strict quality control conforming to approved technical specifications.",
    "descriptionAr": "نقدم خدمات تصنيع الملابس بنظام CM، حيث يتولى العميل توفير الأقمشة والخامات والإكسسوارات اللازمة للإنتاج، بينما نتولى تنفيذ العمليات التصنيعية داخل المصنع، بدءًا من القص وتجهيز المكونات، مرورًا بالخياطة والتجميع، وصولًا إلى التشطيب ومراقبة الجودة، وفق العينات والمواصفات الفنية المعتمدة.",
    "scopeOfWorkEn": [
      "Receiving and inspecting client-supplied fabrics, materials, and accessories against specifications",
      "Fabric spreading, CAD pattern preparation, and precision cutting",
      "Garment sewing and assembly conforming strictly to approved designs and tech packs",
      "Finishing, measurement verification, and workmanship quality checks",
      "Final AQL quality inspection and packaging according to client requirements"
    ],
    "scopeOfWorkAr": [
      "استلام الأقمشة والخامات ومراجعة مطابقتها للمواصفات",
      "فرد الأقمشة وإعداد الباترونات وتجهيز عمليات القص",
      "تنفيذ عمليات الخياطة والتجميع وفق التصميمات المعتمدة",
      "التشطيب ومراجعة المقاسات وجودة التنفيذ",
      "الفحص النهائي والتعبئة وفق متطلبات العميل"
    ],
    "applicationsEn": [
      "Fashion Brands & Apparel Retailers",
      "Clothing Importers & Distribution Companies",
      "Businesses & Designers with In-House Material Sourcing",
      "Companies Seeking Dedicated Technical Manufacturing Capacity"
    ],
    "applicationsAr": [
      "العلامات التجارية وتجار الملابس",
      "شركات الاستيراد والتوزيع التي تمتلك الخامات ومستلزمات الإنتاج",
      "الشركات والمصممون الباحثون عن طاقة تصنيعية متخصصة لتنفيذ طلبياتهم",
      "سلاسل التجزئة التي تدير توريد الأقمشة والإكسسوارات داخلياً"
    ],
    "capabilitiesEn": [
      "Pricing based on product type, style complexity, and volume, excluding fabric costs",
      "Flexible adaptation to client-provided reference samples, technical specs, and size charts",
      "Precision automated spreading and cutting reducing fabric waste to a minimum",
      "Multi-stage in-line quality audits ensuring zero-defect assembly"
    ],
    "capabilitiesAr": [
      "احتساب تكلفة التصنيع وفق نوع المنتج، وتعقيد الموديل، وحجم الكميات، دون تكلفة الخامات",
      "جاهزية لاستقبال الأقمشة والخامات والإكسسوارات، والعينات المرجعية وجداول المقاسات المعتمدة",
      "خطوط فرد وقص آلية دقيقة تضمن أعلى كفاءة استغلال للأقمشة وتقليل الهادر",
      "رقابة جودة متعددة المراحل وفحص نهائي يضمن مطابقة تامة لمواصفات العميل"
    ],
    "image": "/BG/Apparel Manufacturing/Integrated Manufacturing.jpg"
  },
  {
    "id": "srv-app-product-dev",
    "code": "SBA-SRV-APP06",
    "sector": "apparel-services",
    "categoryKey": "product-development",
    "categoryEn": "CAD Pattern Engineering",
    "categoryAr": "هندسة الباترون وتطوير المنتجات",
    "nameEn": "CAD Pattern Engineering, Computerized Grading & Tech Pack Creation",
    "nameAr": "تنفيذ الباترونات وتطوير الملفات التقنية",
    "descriptionEn": "Precision computerized pattern development using leading CAD systems, accurate multi-size grading, fabric consumption optimization, and comprehensive tech packs.",
    "descriptionAr": "تطوير الباترونات الرقمية الدقيقة على أنظمة CAD المتطورة، تدريج المقاسات الأوروبية والأمريكية والخليجية، وحساب استهلاك القماش الأمثل لتوفير التكلفة.",
    "scopeOfWorkEn": [
      "Digitizing sketch concepts into production-ready 2D and 3D CAD pattern files",
      "Size grading across XS to 5XL conforming to international anatomical sizing standards",
      "Computerized nesting and marker making maximizing fabric cutting yield",
      "Full Tech Pack generation: construction details, seam types, SPI, and tolerance specs"
    ],
    "scopeOfWorkAr": [
      "تحويل الرسومات الأولية إلى باترونات رقمية جاهزة للإنتاج ثنائية وثلاثية الأبعاد",
      "تدريج المقاسات من XS حتى 5XL وفق جداول القياسات القياسية المعتمدة",
      "التعشيق الآلي للباترونات لتقليل هادر الأقمشة إلى أدنى نسبة ممكنة",
      "إعداد الملف الفني الشامل (Tech Pack): تفاصيل الخياطة، عدد الغرز، ونسب التفاوت"
    ],
    "applicationsEn": ["Fashion Brands", "Independent Apparel Designers", "Uniform Contracting Entities", "Garment Factories"],
    "applicationsAr": ["ماركات الأزياء العالمية والمحلية", "مصممو الأزياء المستقلون", "مؤسسات توريد الزي الموحد", "مصانع الملابس الجاهزة"],
    "capabilitiesEn": ["Gerber AccuMark & Lectra CAD software platforms", "Automated digital pattern plotters", "Senior master patternmakers with 20+ years experience"],
    "capabilitiesAr": ["برمجيات Gerber AccuMark و Lectra العالمية", "طابعات بلوتر رقمية عريضة لرسم الباترونات الصناعية", "خبراء باترون أول بخبرة تفوق 20 عامًا في القصات العالمية"],
    "image": "/BG/Apparel Manufacturing/Pattern Lab & Rapid Sampling.jpg"
  },
  {
    "id": "srv-app-sampling",
    "code": "SBA-SRV-APP07",
    "sector": "apparel-services",
    "categoryKey": "rapid-sampling",
    "categoryEn": "Rapid Sampling & Prototyping",
    "categoryAr": "صناعة العينات والنماذج الأولية",
    "nameEn": "Rapid Apparel Sampling, Fit Prototypes & Pre-Production Approvals",
    "nameAr": "تنفيذ العينات والنماذج الأولية",
    "descriptionEn": "Dedicated sample room operating independent lines to cut, sew, finish, and deliver proto samples, fit samples, and sales representative samples under fast turnarounds.",
    "descriptionAr": "معمل عينات متكامل يعمل بخطوط مستقلة لقص وخياطة وتشطيب العينات الأولية وعينات الملاءمة وعينات مندوبي المبيعات قبل الإنتاج الكمي في أوقات قياسية.",
    "scopeOfWorkEn": [
      "First proto sample creation from customer reference images or technical tech packs",
      "Fit sample review on live fit models and dimensional audit against spec sheets",
      "Pre-production (PP) golden sample signing prior to bulk cutting authorization",
      "Salesman sample (SMS) duplicate production for buyer retail trade presentations"
    ],
    "scopeOfWorkAr": [
      "تنفيذ العينة الأولية (Proto Sample) من واقع الرسومات أو العينات المرجعية",
      "فحص عينات القياس (Fit Sample) على مانيكانات وموديلات حية وتدقيق القياسات",
      "اعتماد العينة الذهبية ما قبل الإنتاج (PP Sample) قبل إعطاء إشارة البدء للقص الكمي",
      "إنتاج عينات المبيعات والتسويق (SMS) للعرض على المشترين في المعارض الدولية"
    ],
    "applicationsEn": ["Fashion Brand Merchandisers", "Retail Sourcing Teams", "Apparel Startups", "Corporate Sourcing Directors"],
    "applicationsAr": ["مديرو المشتريات ومسؤولو الموضة", "فرق انتقاء المنتجات بسلاسل التجزئة", "الشركات الناشئة في مجال الأزياء", "مديرو التوريد للشركات"],
    "capabilitiesEn": ["Independent prototype workshop line", "Rapid turnarounds within 5-7 business days", "In-house trim and accessories library"],
    "capabilitiesAr": ["ورشة عينات مستقلة تمامًا عن خطوط الإنتاج الكمي", "سرعة تنفيذ وتسليم العينات خلال 5 إلى 7 أيام عمل", "مكتبة داخلية متكاملة للإكسسوارات والسحابات والخيوط"],
    "image": "/BG/Apparel Manufacturing/Product Development & Sampling.jpg"
  },
  {
    "id": "srv-app-fabric-qc",
    "code": "SBA-SRV-APP08",
    "sector": "apparel-services",
    "categoryKey": "fabric-quality",
    "categoryEn": "Custom Fabric & Quality Assurance",
    "categoryAr": "تطوير الأقمشة وضمان الجودة الشاملة",
    "nameEn": "Custom Fabric Sourcing, Eco-Friendly Dyeing & Multi-Stage AQL Quality Auditing",
    "nameAr": "تطوير وتوريد الأقمشة وصباغتها",
    "descriptionEn": "Integrated textile fabric sourcing, laboratory spectrophotometer computerized dyeing, shrinkage control, and rigorous 4-point fabric and AQL 1.5 finished garment auditing.",
    "descriptionAr": "توريد وتطوير الأقمشة القطنية الفاخرة، الصباغة الآلية بأصباغ معتمدة من OEKO-TEX، ضبط الانكماش وثبات الألوان، وفحص الجودة بمقاييس AQL 1.5 الصارمة.",
    "scopeOfWorkEn": [
      "Circular and flat knitting coordination for Single Jersey, Rib, Interlock, and French Terry",
      "Low-liquor computerized dyeing matching Pantone references with spectrophotometer verification",
      "Fabric roll 4-point inspection system testing for knitting faults, weight (GSM), and torque",
      "Final AQL 1.5 / 2.5 random carton auditing: stitch density, seam strength, and carton pack lists"
    ],
    "scopeOfWorkAr": [
      "تطوير وتصنيع أقمشة التريكو والنسيج: سنجل جيرسيه، ريب، إنترلوك، وبيكيه وميلتون",
      "صباغة منخفضة الاستهلاك المائي ومطابقة كمبيوترية لألوان البانتون بأجهزة الاسبكتروفوتوميتر",
      "فحص أثواب الأقمشة بنظام النقاط الأربع (4-Point System) وثبات الأبعاد والانكماش",
      "الفحص النهائي للكراتين وفق معيار AQL 1.5/2.5 الدولي: متانة الخياطة، نظافة التشطيب، ومطابقة التعبئة"
    ],
    "applicationsEn": ["International Fashion Retailers", "High-End Knitwear Brands", "Quality Audit Inspection Houses", "Corporate Apparel Buyers"],
    "applicationsAr": ["سلاسل التجزئة العالمية للأزياء", "ماركات الملابس القطنية والتريكو الفاخرة", "بيوت التفتيش ومطابقة الجودة الدولية", "المشترون المؤسسيون للملابس الجاهزة"],
    "capabilitiesEn": ["OEKO-TEX Standard 100 chemical conformance", "Full in-house physical testing equipment (pull-test, wash crocking)", "Zero tolerance for safety and chemical non-compliance"],
    "capabilitiesAr": ["مطابقة للمواصفات البيئية لشهادة OEKO-TEX Standard 100", "أجهزة اختبارات ميكانيكية ومعملية (قوة شد الأزرار، ثبات الغسيل)", "صفر تسامح مع أي عيوب تؤثر على السلامة أو مظهر المنتج النهائي"],
    "image": "/BG/Apparel Manufacturing/Textile Mill & Internal Dyeing.jpg"
  }
];

export const executedConstructionProjects: ExecutedProject[] = [
  {
    "id": "proj-01",
    "nameEn": "Administrative Complex & Commercial Towers",
    "nameAr": "المجمع الإداري والأبراج التجارية المتطورة",
    "locationEn": "New Administrative Capital, Egypt",
    "locationAr": "العاصمة الإدارية الجديدة، مصر",
    "scopeEn": "Full turnkey civil, structural, facade glazing, and MEP engineering across 45,000 m² built-up area.",
    "scopeAr": "تنفيذ متكامل للأعمال المدنية والخرسانية والواجهات الزجاجية وشبكات الكهروميكانيك بمسطح 45,000 م².",
    "image": "/BG/Contracting & Real Estate Development/Administrative Buildings & Commercial Centers.jpg",
    "statusEn": "Completed & Handed Over",
    "statusAr": "تم التسليم"
  },
  {
    "id": "proj-02",
    "nameEn": "Specialized Healthcare Center & Surgical Hospital",
    "nameAr": "المركز الطبي التخصصي ومستشفى الجراحات الدقيقة",
    "locationEn": "Greater Cairo, Egypt",
    "locationAr": "القاهرة الكبرى، مصر",
    "scopeEn": "Specialized hospital civil construction, hermetic operating theaters, and medical gas pipeline networks.",
    "scopeAr": "أعمال إنشائية تخصصية، تجهيز غرف العمليات المعقمة الكبسولية وتمديد شبكات الغازات الطبية المركزية.",
    "image": "/BG/Contracting & Real Estate Development/Hospital & Health Center Construction.jpg",
    "statusEn": "Operational",
    "statusAr": "قيد التشغيل"
  },
  {
    "id": "proj-03",
    "nameEn": "Heavy Industrial Factory & Steel Warehouse Facility",
    "nameAr": "مجمع المصانع والمستودعات الفولاذية الثقيلة",
    "locationEn": "Suez Industrial Zone, Egypt",
    "locationAr": "المنطقة الصناعية بالسويس، مصر",
    "scopeEn": "Reinforced deep pile foundations, pre-engineered steel frames (36m clear span), and laser-leveled industrial floors.",
    "scopeAr": "أساسات خوازيق عميقة، جمالونات فولاذية ببحور مفتوحة 36 مترًا، وأرضيات صناعية عالية التحمل ومسواة بالليزر.",
    "image": "/BG/Contracting & Real Estate Development/Industrial Construction & Pre-Engineered Buildings.jpg",
    "statusEn": "Completed",
    "statusAr": "تم الإنجاز"
  },
  {
    "id": "proj-04",
    "nameEn": "Gated Residential Community & Luxury Villas",
    "nameAr": "المجمع السكني والفيلات الفاخرة",
    "locationEn": "New Cairo, Egypt",
    "locationAr": "القاهرة الجديدة، مصر",
    "scopeEn": "Civil skeleton, architectural finishing, road paving, utility infrastructure, and integrated community landscape.",
    "scopeAr": "الهياكل الخرسانية، التشطيبات المعمارية الفاخرة، رصف الطرق وشبكات المرافق المتكاملة واللاندسكيب.",
    "image": "/BG/Contracting & Real Estate Development/Residential Units & Housing Projects.jpg",
    "statusEn": "Delivered",
    "statusAr": "تم التسليم"
  }
];

export const serviceDivisionsConfig = [
  {
    division: "construction" as const,
    labelEn: "Construction Services",
    labelAr: "خدمات المقاولات والإنشاءات",
    descEn: "Turnkey general contracting, civil infrastructure, structural engineering, medical fit-outs, and project management.",
    descAr: "مقاولات عامة متكاملة، بنية تحتية، منشآت خرسانية ومعدنية، تجهيزات طبية وإشراف هندسي.",
    categories: [
      { key: "all", labelEn: "All Services", labelAr: "كافة الخدمات" },
      { key: "general-contracting", labelEn: "General Contracting", labelAr: "المقاولات العامة" },
      { key: "civil-works", labelEn: "Construction & Civil Works", labelAr: "الأعمال المدنية والإنشائية" },
      { key: "structural-works", labelEn: "Structural Works", labelAr: "الأعمال والمنشآت الهيكلية" },
      { key: "architectural-works", labelEn: "Architectural & BIM Works", labelAr: "الأعمال المعمارية ونمذجة BIM" },
      { key: "electromechanical-mep", labelEn: "Electromechanical Works (MEP)", labelAr: "الأعمال الكهروميكانيكية MEP" },
      { key: "infrastructure-utilities", labelEn: "Infrastructure & Utilities", labelAr: "البنية التحتية والمرافق" },
      { key: "industrial-construction", labelEn: "Industrial Construction", labelAr: "الإنشاءات الصناعية" },
      { key: "healthcare-facilities", labelEn: "Medical Facility Fit-Outs", labelAr: "تجهيز المستشفيات والمنشآت الصحية" },
      { key: "oil-gas-facilities", labelEn: "Oil & Gas Specialized Works", labelAr: "أعمال المقاولات البترولية" },
      { key: "commercial-administrative", labelEn: "Commercial Complexes", labelAr: "المجمعات التجارية والإدارية" },
      { key: "residential-real-estate", labelEn: "Real Estate Development", labelAr: "التطوير والاستثمار العقاري" },
      { key: "finishing-fitout", labelEn: "Finishing & Interior Fit-Out", labelAr: "التشطيبات والتجهيزات الداخلية" }
    ]
  },
  {
    division: "environmental" as const,
    labelEn: "Environmental Solutions",
    labelAr: "خدمات الحلول البيئية والاستدامة",
    descEn: "Comprehensive waste management, biogas systems, odor control, bio-remediation, EIA studies, and carbon footprint assessments.",
    descAr: "إدارة المخلفات، محطات البيوجاز وتحويل المخلفات لطاقة، معالجة الروائح، دراسات تقييم الأثر البيئي، وحساب البصمة الكربونية.",
    categories: [
      { key: "all", labelEn: "All Services", labelAr: "كافة الخدمات" },
      { key: "environmental-assessment", labelEn: "Environmental Assessment (EIA/ESIA)", labelAr: "تقييم الأثر البيئي والمجتمعي" },
      { key: "carbon-footprint", labelEn: "Carbon Footprint & CBAM", labelAr: "البصمة الكربونية وتقارير الانبعاثات" },
      { key: "environmental-monitoring", labelEn: "Environmental Monitoring & Lab", labelAr: "القياسات والرصد المعملي" },
      { key: "waste-management", labelEn: "Waste Management Solutions", labelAr: "حلول إدارة المخلفات" },
      { key: "hazardous-waste", labelEn: "Hazardous Waste Management", labelAr: "إدارة المخلفات الخطرة" },
      { key: "solid-recycling", labelEn: "Solid Waste Recycling", labelAr: "تدوير المخلفات الصلبة" },
      { key: "waste-to-energy", labelEn: "Waste-to-Energy Systems", labelAr: "أنظمة تحويل المخلفات لطاقة" },
      { key: "biogas-plants", labelEn: "Biogas Project Development", labelAr: "تطوير محطات البيوجاز" },
      { key: "renewable-energy", labelEn: "Renewable Energy Solutions", labelAr: "أنظمة الطاقة المتجددة" },
      { key: "environmental-economics", labelEn: "Environmental Economics", labelAr: "الدراسات الاقتصادية البيئية" },
      { key: "sustainability-consulting", labelEn: "Sustainability & ESG", labelAr: "استشارات الاستدامة واستراتيجيات ESG" },
      { key: "sdgs-consulting", labelEn: "SDGs Consulting", labelAr: "أهداف التنمية المستدامة SDGs" },
      { key: "iso-support", labelEn: "ISO Systems (14001 / 50001)", labelAr: "تأهيل أنظمة الأيزو البيئية" },
      { key: "qhse-solutions", labelEn: "Integrated QHSE Solutions", labelAr: "حلول الجودة والصحة والسلامة QHSE" },
      { key: "digital-ehs", labelEn: "Digital EHS Software & IoT", labelAr: "المنظومات الرقمية وإنترنت الأشياء" },
      { key: "biotechnology", labelEn: "Biotechnology & Remediation", labelAr: "التكنولوجيا الحيوية والمعالجة" },
      { key: "applied-rd", labelEn: "Applied Environmental R&D", labelAr: "البحث والتطوير العلمي البيئي" }
    ]
  },
  {
    division: "apparel-services" as const,
    labelEn: "Apparel Manufacturing Services",
    labelAr: "خدمات تصنيع الملابس الجاهزة",
    descEn: "Private label programs, OEM/FOB manufacturing, CAD sampling, fabric dyeing, and certified quality control.",
    descAr: "تصنيع لحساب الغير، حلول OEM و FOB، تطوير العينات والباترون، الصباغة المعملية، وضبط الجودة بمقاييس AQL.",
    categories: [
      { key: "all", labelEn: "All Services", labelAr: "كافة الخدمات" },
      { key: "oem-manufacturing", labelEn: "OEM Contract Manufacturing", labelAr: "التصنيع الأصلي OEM" },
      { key: "odm-development", labelEn: "ODM Design & Co-Development", labelAr: "التصميم والتصنيع المشترك ODM" },
      { key: "private-label", labelEn: "Private Label Manufacturing", labelAr: "التصنيع للعلامات التجارية الخاصة" },
      { key: "fob-manufacturing", labelEn: "FOB Full Package Programs", labelAr: "برامج التصنيع الشامل والتصدير FOB" },
      { key: "cm-manufacturing", labelEn: "CM Manufacturing (Cut & Make)", labelAr: "التصنيع بنظام CM" },
      { key: "product-development", labelEn: "CAD Pattern Engineering", labelAr: "هندسة الباترون وتطوير المنتجات" },
      { key: "rapid-sampling", labelEn: "Rapid Sampling & Prototyping", labelAr: "صناعة العينات والنماذج الأولية" },
      { key: "fabric-quality", labelEn: "Fabric Sourcing & AQL Quality", labelAr: "توريد الأقمشة وضمان الجودة AQL" }
    ]
  }
];
