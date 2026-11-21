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
    "nameEn": "General Contracting",
    "nameAr": "المقاولات العامة",
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
    "image": "/services/construction/contracting-real-estate-development-home-page.jpg"
  },
  {
    "id": "srv-cns-civil",
    "code": "SBA-SRV-CNS02",
    "sector": "construction",
    "categoryKey": "civil-works",
    "categoryEn": "Construction & Civil Works",
    "categoryAr": "الأعمال المدنية والإنشائية",
    "nameEn": "Construction & Civil Works",
    "nameAr": "الأعمال المدنية والإنشائية",
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
    "image": "/services/construction/residential-commercial-property-development.jpg"
  },
  {
    "id": "srv-cns-structural",
    "code": "SBA-SRV-CNS03",
    "sector": "construction",
    "categoryKey": "structural-works",
    "categoryEn": "Structural Works",
    "categoryAr": "الأعمال والمنشآت الهيكلية",
    "nameEn": "Structural Works",
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
    "image": "/services/construction/supply-installation-maintenance.jpg"
  },
  {
    "id": "srv-cns-architectural",
    "code": "SBA-SRV-CNS04",
    "sector": "construction",
    "categoryKey": "architectural-works",
    "categoryEn": "Architectural & BIM Works",
    "categoryAr": "الأعمال المعمارية ونمذجة BIM",
    "nameEn": "Architectural & BIM Works",
    "nameAr": "الأعمال المعمارية ونمذجة BIM",
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
    "image": "/services/construction/integrated-solutions-multiple-disciplines.jpg"
  },
  {
    "id": "srv-cns-mep",
    "code": "SBA-SRV-CNS05",
    "sector": "construction",
    "categoryKey": "electromechanical-mep",
    "categoryEn": "Electromechanical Works (MEP)",
    "categoryAr": "الأعمال الكهروميكانيكية MEP",
    "nameEn": "Electromechanical Works (MEP)",
    "nameAr": "الأعمال الكهروميكانيكية MEP",
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
    "image": "/services/construction/electromechanical-systems.jpg"
  },
  {
    "id": "srv-cns-infrastructure",
    "code": "SBA-SRV-CNS06",
    "sector": "construction",
    "categoryKey": "infrastructure-utilities",
    "categoryEn": "Infrastructure & Utilities",
    "categoryAr": "البنية التحتية والمرافق",
    "nameEn": "Infrastructure & Utilities",
    "nameAr": "البنية التحتية والمرافق",
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
    "image": "/services/construction/infrastructure-integrated-building-systems.jpg"
  },
  {
    "id": "srv-cns-industrial",
    "code": "SBA-SRV-CNS07",
    "sector": "construction",
    "categoryKey": "industrial-construction",
    "categoryEn": "Industrial Construction",
    "categoryAr": "الإنشاءات الصناعية",
    "nameEn": "Industrial Construction",
    "nameAr": "الإنشاءات الصناعية",
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
    "image": "/services/construction/oil-gas-industrial-civil-infrastructure.jpg"
  },
  {
    "id": "srv-cns-medical",
    "code": "SBA-SRV-CNS08",
    "sector": "construction",
    "categoryKey": "healthcare-facilities",
    "categoryEn": "Medical Facility Fit-Outs",
    "categoryAr": "تجهيز المستشفيات والمنشآت الصحية",
    "nameEn": "Medical Facility Fit-Outs",
    "nameAr": "تجهيز المستشفيات والمنشآت الصحية",
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
    "image": "/services/construction/healthcare-facilities-medical-fit-out.jpg"
  },
  {
    "id": "srv-cns-oilgas",
    "code": "SBA-SRV-CNS09",
    "sector": "construction",
    "categoryKey": "oil-gas-facilities",
    "categoryEn": "Oil & Gas Specialized Works",
    "categoryAr": "أعمال المقاولات البترولية",
    "nameEn": "Oil & Gas Specialized Works",
    "nameAr": "أعمال المقاولات البترولية",
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
    "image": "/services/construction/oil-gas-specialized-construction.jpg"
  },
  {
    "id": "srv-cns-commercial",
    "code": "SBA-SRV-CNS10",
    "sector": "construction",
    "categoryKey": "commercial-administrative",
    "categoryEn": "Commercial Complexes",
    "categoryAr": "المجمعات التجارية والإدارية",
    "nameEn": "Commercial Complexes",
    "nameAr": "المجمعات التجارية والإدارية",
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
    "image": "/services/construction/commercial-administrative-development.jpg"
  },
  {
    "id": "srv-cns-residential",
    "code": "SBA-SRV-CNS11",
    "sector": "construction",
    "categoryKey": "residential-real-estate",
    "categoryEn": "Real Estate Development",
    "categoryAr": "التطوير والاستثمار العقاري",
    "nameEn": "Real Estate Development",
    "nameAr": "التطوير والاستثمار العقاري",
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
    "image": "/services/construction/residential-development-luxury-villas.jpg"
  },
  {
    "id": "srv-cns-finishing",
    "code": "SBA-SRV-CNS12",
    "sector": "construction",
    "categoryKey": "finishing-fitout",
    "categoryEn": "Finishing & Interior Fit-Out",
    "categoryAr": "التشطيبات والتجهيزات الداخلية",
    "nameEn": "Finishing & Interior Fit-Out",
    "nameAr": "التشطيبات والتجهيزات الداخلية",
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
    "image": "/services/construction/finishing-interior-design.jpg"
  },

  // --------------------------------------------------------------------------
  // DIVISION 2: ENVIRONMENTAL SOLUTIONS & SUSTAINABILITY (17 Services)
  // --------------------------------------------------------------------------
  {
    "id": "srv-env-assessment",
    "code": "SBA-SRV-ENV01",
    "sector": "environmental",
    "categoryKey": "environmental-assessment",
    "categoryEn": "Environmental Assessment (EIA/ESIA)",
    "categoryAr": "تقييم الأثر البيئي والمجتمعي",
    "nameEn": "Environmental Assessment (EIA/ESIA)",
    "nameAr": "تقييم الأثر البيئي والمجتمعي",
    "descriptionEn": "Preparing statutory EIA and international-standard ESIA studies across industrial, infrastructure, and commercial sectors conforming to national environmental agencies and international financing standards (IFC / World Bank).",
    "descriptionAr": "إعداد دراسات تقييم الأثر البيئي (EIA) والأثر البيئي والمجتمعي (ESIA) للمشروعات الصناعية والسياحية والبنية التحتية، وفق اشتراطات الجهات الرسمية ومعايير التمويل الدولية (IFC / World Bank).",
    "scopeOfWorkEn": [
      "Baseline environmental profiling (ambient air, groundwater, ecology, soil)",
      "Statutory EIA studies across Category A, B, and C for ministry and regulatory compliance",
      "Integrated ESIA dossiers conforming to IFC Performance Standards and Equator Principles",
      "Environmental and Social Management Plans (ESMP) and public hearing stakeholder coordination"
    ],
    "scopeOfWorkAr": [
      "دراسة الوضع البيئي الراهن (الهواء المحيط، المياه الجوفية، التربة، والبيئة البيولوجية)",
      "إعداد دراسات تقييم الأثر البيئي للمشروعات بالقوائم (أ، ب، ج) للحصول على موافقات جهاز شئون البيئة",
      "إعداد دراسات الأثر البيئي والمجتمعي (ESIA) وفق معايير الأداء لمؤسسة التمويل الدولية (IFC)",
      "إعداد خطط الإدارة والرصد البيئي والمجتمعي وتنظيم جلسات التشاور العام وجلسات الاستماع"
    ],
    "applicationsEn": ["Industrial Manufacturing Zones", "Port & Coastal Developments", "Renewable Energy Mega-Parks", "Tourism Masterplans"],
    "applicationsAr": ["المناطق والمجمعات الصناعية", "الموانئ والتطوير الساحلي", "مشروعات الطاقة المتجددة الكبرى", "المشروعات السياحية والعمرانية"],
    "capabilitiesEn": ["Certified environmental consulting house accreditation", "AERMOD / CALPUFF certified air dispersion modelers", "Bankable environmental reports approved by global DFIs"],
    "capabilitiesAr": ["بيت خبرة واستشارات بيئية معتمد رسميًا", "خبراء نمذجة انتشار الملوثات ببرامج AERMOD و CALPUFF", "تقارير معتمدة لدى بنوك ومؤسسات التمويل الدولية"],
    "image": "/services/environmental/environmental-assessment.jpg"
  },
  {
    "id": "srv-env-carbon",
    "code": "SBA-SRV-ENV02",
    "sector": "environmental",
    "categoryKey": "carbon-footprint",
    "categoryEn": "Carbon Footprint & CBAM",
    "categoryAr": "البصمة الكربونية وتقارير الانبعاثات",
    "nameEn": "Carbon Footprint & CBAM",
    "nameAr": "البصمة الكربونية وتقارير الانبعاثات",
    "descriptionEn": "Quantifying Scope 1, 2, and 3 GHG emissions, conducting product Life Cycle Assessments (LCA), and preparing European Carbon Border Adjustment Mechanism (CBAM) compliance dossiers and verified carbon disclosures.",
    "descriptionAr": "قياس واحتساب انبعاثات غازات الاحتباس الحراري للنطاقات (Scope 1, 2, 3)، تقييم دورة حياة المنتج (LCA)، وإعداد ملفات الامتثال لضريبة الكربون الأوروبية (CBAM) وتقارير الإفصاح المعتمدة.",
    "scopeOfWorkEn": [
      "Corporate GHG accounting (Scope 1, Scope 2, Scope 3) conforming to GHG Protocol and ISO 14064",
      "Product Life Cycle Assessment (LCA) from cradle to grave conforming to ISO 14040/44",
      "European CBAM embedded emissions calculation, quarterly reporting, and exporter compliance",
      "Carbon emissions disclosure (CDP, GRI), SBTi net-zero roadmaps, and carbon credit generation"
    ],
    "scopeOfWorkAr": [
      "قياس انبعاثات غازات الاحتباس الحراري للنطاقات 1 و2 و3 طبقًا لـ GHG Protocol والأيزو 14064",
      "تقييم دورة حياة المنتج (LCA) من المهد إلى اللحد طبقًا للمواصفة القياسية ISO 14044",
      "احتساب الانبعاثات المضمنة وإعداد تقارير آلية تعديل حدود الكربون الأوروبية (CBAM)",
      "إعداد ملفات الإفصاح لمنصة CDP ومعايير GRI وصياغة خريطة طريق الحياد الكربوني"
    ],
    "applicationsEn": ["Heavy Industrial Exporters", "Fertilizer & Chemical Plants", "Aluminum & Steel Smelters", "Multinational Enterprises"],
    "applicationsAr": ["المصانع والشركات المصدرة لأوروبا", "شركات الأسمدة والبتروكيماويات", "مصاهر الألومنيوم والحديد والصلب", "الشركات الكبرى وسلاسل الإمداد"],
    "capabilitiesEn": ["Certified GHG Protocol practitioners", "SimaPro / GaBi LCA modeling software licenses", "Direct European CBAM compliance alignment"],
    "capabilitiesAr": ["ممارسون معتمدون في بروتوكول غازات الاحتباس الحراري", "رخص نمذجة دورة الحياة ببرامج SimaPro و GaBi", "مواءمة مباشرة مع متطلبات ضريبة الكربون الأوروبية CBAM"],
    "image": "/services/environmental/carbon-footprint-greenhouse-gas-services.jpg"
  },
  {
    "id": "srv-env-monitoring-lab",
    "code": "SBA-SRV-ENV03",
    "sector": "environmental",
    "categoryKey": "environmental-monitoring",
    "categoryEn": "Environmental Monitoring & Lab",
    "categoryAr": "القياسات والرصد المعملي",
    "nameEn": "Environmental Monitoring & Lab",
    "nameAr": "القياسات والرصد المعملي",
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
    "image": "/services/environmental/environmental-measurements-continuous-monitoring.jpg"
  },
  {
    "id": "srv-env-waste-mgmt",
    "code": "SBA-SRV-ENV04",
    "sector": "environmental",
    "categoryKey": "waste-management",
    "categoryEn": "Waste Management Solutions",
    "categoryAr": "حلول إدارة المخلفات",
    "nameEn": "Waste Management Solutions",
    "nameAr": "حلول إدارة المخلفات",
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
    "image": "/services/environmental/comprehensive-waste-management-services.jpg"
  },
  {
    "id": "srv-env-industrial-waste",
    "code": "SBA-SRV-ENV05",
    "sector": "environmental",
    "categoryKey": "hazardous-waste",
    "categoryEn": "Hazardous Waste Management",
    "categoryAr": "إدارة المخلفات الخطرة",
    "nameEn": "Hazardous Waste Management",
    "nameAr": "إدارة المخلفات الخطرة",
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
    "image": "/services/environmental/hazardous-waste-management.jpg"
  },
  {
    "id": "srv-env-solid-recycling",
    "code": "SBA-SRV-ENV06",
    "sector": "environmental",
    "categoryKey": "solid-recycling",
    "categoryEn": "Solid Waste Recycling",
    "categoryAr": "تدوير المخلفات الصلبة",
    "nameEn": "Solid Waste Recycling",
    "nameAr": "تدوير المخلفات الصلبة",
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
    "image": "/services/environmental/solid-waste-recycling.jpg"
  },
  {
    "id": "srv-env-waste-to-energy",
    "code": "SBA-SRV-ENV07",
    "sector": "environmental",
    "categoryKey": "waste-to-energy",
    "categoryEn": "Waste-to-Energy Systems",
    "categoryAr": "أنظمة تحويل المخلفات لطاقة",
    "nameEn": "Waste-to-Energy Systems",
    "nameAr": "أنظمة تحويل المخلفات لطاقة",
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
    "image": "/services/environmental/waste-to-energy-services-biogas-plants.jpg"
  },
  {
    "id": "srv-env-biogas",
    "code": "SBA-SRV-ENV08",
    "sector": "environmental",
    "categoryKey": "biogas-plants",
    "categoryEn": "Biogas Project Development",
    "categoryAr": "تطوير محطات البيوجاز",
    "nameEn": "Biogas Project Development",
    "nameAr": "تطوير محطات البيوجاز",
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
    "image": "/services/environmental/biogas-project-development.jpg"
  },
  {
    "id": "srv-env-renewable-energy",
    "code": "SBA-SRV-ENV09",
    "sector": "environmental",
    "categoryKey": "renewable-energy",
    "categoryEn": "Renewable Energy Solutions",
    "categoryAr": "أنظمة الطاقة المتجددة",
    "nameEn": "Renewable Energy Solutions",
    "nameAr": "أنظمة الطاقة المتجددة",
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
    "image": "/services/environmental/renewable-energy-solutions-green-power.jpg"
  },
  {
    "id": "srv-env-economics-policy",
    "code": "SBA-SRV-ENV10",
    "sector": "environmental",
    "categoryKey": "environmental-economics",
    "categoryEn": "Environmental Economics",
    "categoryAr": "الدراسات الاقتصادية البيئية",
    "nameEn": "Environmental Economics",
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
    "image": "/services/environmental/environmental-economic-studies-policy-advisory.jpg"
  },
  {
    "id": "srv-env-sustainability",
    "code": "SBA-SRV-ENV11",
    "sector": "environmental",
    "categoryKey": "sustainability-consulting",
    "categoryEn": "Sustainability & ESG",
    "categoryAr": "استشارات الاستدامة واستراتيجيات ESG",
    "nameEn": "Sustainability & ESG",
    "nameAr": "استشارات الاستدامة واستراتيجيات ESG",
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
    "image": "/services/environmental/sustainability-esg.jpg"
  },
  {
    "id": "srv-env-sdgs",
    "code": "SBA-SRV-ENV12",
    "sector": "environmental",
    "categoryKey": "sdgs-consulting",
    "categoryEn": "SDGs Consulting",
    "categoryAr": "أهداف التنمية المستدامة SDGs",
    "nameEn": "SDGs Consulting",
    "nameAr": "أهداف التنمية المستدامة SDGs",
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
    "image": "/services/environmental/sustainable-development-advisory-un-global-goals.jpg"
  },
  {
    "id": "srv-env-iso-systems",
    "code": "SBA-SRV-ENV13",
    "sector": "environmental",
    "categoryKey": "iso-support",
    "categoryEn": "ISO Systems (14001 / 50001)",
    "categoryAr": "تأهيل أنظمة الأيزو البيئية",
    "nameEn": "ISO Systems (14001 / 50001)",
    "nameAr": "تأهيل أنظمة الأيزو البيئية",
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
    "image": "/services/environmental/management-consultations-iso-qualification-projects.jpg"
  },
  {
    "id": "srv-env-qhse",
    "code": "SBA-SRV-ENV14",
    "sector": "environmental",
    "categoryKey": "qhse-solutions",
    "categoryEn": "Integrated QHSE Solutions",
    "categoryAr": "حلول الجودة والصحة والسلامة QHSE",
    "nameEn": "Integrated QHSE Solutions",
    "nameAr": "حلول الجودة والصحة والسلامة QHSE",
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
    "image": "/services/environmental/intelligent-qhse-application-software-solutions.jpg"
  },
  {
    "id": "srv-env-digital-ehs",
    "code": "SBA-SRV-ENV15",
    "sector": "environmental",
    "categoryKey": "digital-ehs",
    "categoryEn": "Digital EHS Software & IoT",
    "categoryAr": "المنظومات الرقمية وإنترنت الأشياء",
    "nameEn": "Digital EHS Software & IoT",
    "nameAr": "المنظومات الرقمية وإنترنت الأشياء",
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
    "image": "/services/environmental/iot-environmental-monitoring-system.jpg"
  },
  {
    "id": "srv-env-biotech",
    "code": "SBA-SRV-ENV16",
    "sector": "environmental",
    "categoryKey": "biotechnology",
    "categoryEn": "Biotechnology & Remediation",
    "categoryAr": "التكنولوجيا الحيوية والمعالجة",
    "nameEn": "Biotechnology & Remediation",
    "nameAr": "التكنولوجيا الحيوية والمعالجة",
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
    "image": "/services/environmental/environmental-biotechnology-services.jpg"
  },
  {
    "id": "srv-env-rd",
    "code": "SBA-SRV-ENV17",
    "sector": "environmental",
    "categoryKey": "applied-rd",
    "categoryEn": "Applied Environmental R&D",
    "categoryAr": "البحث والتطوير العلمي البيئي",
    "nameEn": "Applied Environmental R&D",
    "nameAr": "البحث والتطوير العلمي البيئي",
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
    "image": "/services/environmental/research-development-environmental-software-solutions.jpg"
  },

  // --------------------------------------------------------------------------
  // DIVISION 3: APPAREL & TEXTILE MANUFACTURING SERVICES (9 Disciplines)
  // --------------------------------------------------------------------------
  {
    "id": "srv-app-oem",
    "code": "SBA-SRV-APP01",
    "sector": "apparel-services",
    "categoryKey": "oem-manufacturing",
    "categoryEn": "OEM Manufacturing",
    "categoryAr": "التصنيع بنظام OEM",
    "nameEn": "OEM Manufacturing",
    "nameAr": "التصنيع بنظام OEM",
    "descriptionEn": "Providing industrial production line capacity for global retail brands and corporate buyers based on approved Tech Packs, patterns, and client specifications.",
    "descriptionAr": "تصنيع تعاقدي متكامل ينفذ تصميمات وباترونات ومواصفات العميل الفنية (Tech Packs) بأعلى معايير الانضباط والجودة والمواعيد المحددة.",
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
    "image": "/services/apparel/collab-media-t26cTnB0V1k-unsplash.jpg"
  },
  {
    "id": "srv-app-odm",
    "code": "SBA-SRV-APP02",
    "sector": "apparel-services",
    "categoryKey": "odm-manufacturing",
    "categoryEn": "ODM Manufacturing",
    "categoryAr": "التصنيع بنظام ODM",
    "nameEn": "ODM Manufacturing",
    "nameAr": "التصنيع بنظام ODM",
    "descriptionEn": "Developing new apparel collections by leveraging the group's proprietary styles with customized color palettes, fabrications, and brand identity trims.",
    "descriptionAr": "تطوير مجموعات أزياء جديدة بالاعتماد على تصميمات المجموعة مع تخصيص الألوان والخامات وهوية علامتك التجارية وملاءمة الفئات السعرية المستهدفة.",
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
    "image": "/services/apparel/shanjir-h-photo4life-au-hnYQUpNtBws-unsplash.jpg"
  },
  {
    "id": "srv-app-fob",
    "code": "SBA-SRV-APP03",
    "sector": "apparel-services",
    "categoryKey": "fob-manufacturing",
    "categoryEn": "FOB Manufacturing",
    "categoryAr": "التصنيع بنظام FOB",
    "nameEn": "FOB Manufacturing",
    "nameAr": "التصنيع بنظام FOB",
    "descriptionEn": "End-to-end full package management from fabric and trim procurement, through precision cutting and sewing, to export customs clearance and on-board vessel delivery.",
    "descriptionAr": "إدارة متكاملة تبدأ من توريد الخامات ومستلزمات الإنتاج والتصنيع والتعبئة وحتى استكمال التخليص الجمركي والتسليم على ظهر السفينة بميناء الشحن.",
    "scopeOfWorkEn": [
      "Raw materials procurement and complete bill of materials (BOM) management",
      "Continuous inline factory quality audits conforming to approved master golden samples",
      "Export documentation: EUR.1, Certificate of Origin, Form A, and commercial invoices",
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
    "image": "/services/apparel/declan-sun-cQr2x2ALizA-unsplash.jpg"
  },
  {
    "id": "srv-app-cm",
    "code": "SBA-SRV-APP04",
    "sector": "apparel-services",
    "categoryKey": "cm-manufacturing",
    "categoryEn": "CM Manufacturing",
    "categoryAr": "التصنيع بنظام CM",
    "nameEn": "CM Manufacturing",
    "nameAr": "التصنيع بنظام CM",
    "descriptionEn": "Dedicated Cut & Make manufacturing where the client supplies fabrics and trims while our facilities execute spreading, precision cutting, sewing assembly, finishing, and quality inspection.",
    "descriptionAr": "خدمات التصنيع بنظام CM بخامات وإكسسوارات يوردها العميل، مع تنفيذ كافة العمليات الصناعية من القص والخياطة وحتى التشطيب والفحص والتعبئة داخل المصنع.",
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
    "applicationsEn": ["Fashion Brands & Apparel Retailers", "Clothing Importers & Distribution Companies", "Designers with In-House Material Sourcing", "Retail Chains Managing Fabric In-House"],
    "applicationsAr": ["العلامات التجارية وتجار الملابس", "شركات الاستيراد والتوزيع التي تمتلك الخامات ومستلزمات الإنتاج", "الشركات والمصممون الباحثون عن طاقة تصنيعية متخصصة", "سلاسل التجزئة التي تدير توريد الأقمشة والإكسسوارات داخليًا"],
    "capabilitiesEn": ["Pricing based on product type and volume, excluding fabric costs", "Automated spreading and CNC cutting reducing fabric waste", "Multi-stage in-line quality audits ensuring zero-defect assembly"],
    "capabilitiesAr": ["احتساب تكلفة التصنيع وفق نوع المنتج وحجم الكميات دون تكلفة الخامات", "خطوط فرد وقص آلية دقيقة تضمن أعلى كفاءة استغلال للأقمشة", "رقابة جودة متعددة المراحل وفحص نهائي يضمن مطابقة تامة"],
    "image": "/services/apparel/agto-nugroho-1mnXGDl3iRY-unsplash.jpg"
  },
  {
    "id": "srv-app-sampling",
    "code": "SBA-SRV-APP05",
    "sector": "apparel-services",
    "categoryKey": "sampling-prototyping",
    "categoryEn": "Sampling & Prototyping",
    "categoryAr": "تصنيع العينات والنماذج الأولية",
    "nameEn": "Sampling & Prototyping",
    "nameAr": "تصنيع العينات والنماذج الأولية",
    "descriptionEn": "Dedicated prototyping and sample workshop constructing Proto Samples, Fit Samples, Size Sets, and Pre-Production (PP) golden samples prior to bulk production.",
    "descriptionAr": "إعداد العينات والنماذج الأولية وعينات القياس (Fit Samples) وعينات ما قبل الإنتاج (PP Samples) لمراجعة القياسات والتفاصيل الفنية قبل الإنتاج الكمي.",
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
    "image": "/services/apparel/lidya-nada-grQh_x_vZKM-unsplash.jpg"
  },
  {
    "id": "srv-app-design-dev",
    "code": "SBA-SRV-APP06",
    "sector": "apparel-services",
    "categoryKey": "fashion-design-development",
    "categoryEn": "Fashion Design & Product Development",
    "categoryAr": "تصميم الأزياء وتطوير المنتجات",
    "nameEn": "Fashion Design & Product Development",
    "nameAr": "تصميم الأزياء وتطوير المنتجات",
    "descriptionEn": "Bridging creative fashion design with industrial manufacturing feasibility, generating digital Tech Packs, CAD pattern grading, and commercially scalable collection architectures.",
    "descriptionAr": "الجمع بين الرؤية التصميمية والمتطلبات الفنية والتشغيلية لتطوير منتجات ومجموعات أزياء قابلة للتصنيع التجاري، شاملة ملفات المواصفات والباترونات الرقمية.",
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
    "image": "/services/apparel/adrien-olichon-1eQKDWNiIUs-unsplash.jpg"
  },
  {
    "id": "srv-app-bulk",
    "code": "SBA-SRV-APP07",
    "sector": "apparel-services",
    "categoryKey": "bulk-production-contracts",
    "categoryEn": "Bulk Production Contracts",
    "categoryAr": "التعاقدات الكمية",
    "nameEn": "Bulk Production Contracts",
    "nameAr": "التعاقدات الكمية",
    "descriptionEn": "Scalable industrial manufacturing solutions for volume apparel orders, recurring supply agreements, and export programs with rigorous line balancing and milestone delivery.",
    "descriptionAr": "حلول الإنتاج الصناعي الكمي للعلامات التجارية والمستوردين وتجار الجملة لتنفيذ طلبيات كبرى وبرامج توريد دورية مع ضبط الجودة والانضباط الزمني.",
    "scopeOfWorkEn": [
      "Execution of bulk production orders matching contracted quantities",
      "Production line balancing tailored to garment construction and style complexity",
      "Output scheduling by colorways, size runs, and production batches",
      "Quality control audits enforced across all manufacturing and export packaging stages"
    ],
    "scopeOfWorkAr": [
      "تخطيط وتنفيذ الطلبيات الإنتاجية وفق الكميات المتعاقد عليها",
      "تنظيم خطوط الإنتاج وتوزيع العمليات وفق طبيعة كل موديل",
      "تخطيط الإنتاج حسب الألوان والمقاسات ودفعات التشغيل ومتابعة المعدلات",
      "تطبيق إجراءات فحص الجودة والتعبئة والتجهيز للشحن والتصدير"
    ],
    "applicationsEn": ["International Fashion Retailers", "Wholesale Distributors", "Large E-Commerce Platforms", "Government & Institutional Uniform Buyers"],
    "applicationsAr": ["سلاسل التجزئة الدولية", "تجار الجملة والموزعون الكبار", "منصات التجارة الإلكترونية الكبرى", "المؤسسات والهيئات المتعاقدة على توريدات كبرى"],
    "capabilitiesEn": ["High-capacity modular production floors", "Advanced bottleneck monitoring", "Standardized container loading manifests"],
    "capabilitiesAr": ["طاقات تشغيلية كبرى وخطوط إنتاج نمطية مرنة", "متابعة دقيقة لمعدلات الإنجاز ومراحل التنفيذ", "قوائم تعبئة وتغليف تصديرية احترافية"],
    "image": "/services/apparel/winx-U6VKGLgsxz0-unsplash.jpg"
  },
  {
    "id": "srv-app-fabric-dev",
    "code": "SBA-SRV-APP08",
    "sector": "apparel-services",
    "categoryKey": "fabric-yarn-development",
    "categoryEn": "Fabric Manufacturing & Yarn Development",
    "categoryAr": "تصنيع الأقمشة وتطوير الغزول",
    "nameEn": "Fabric Manufacturing & Yarn Development",
    "nameAr": "تصنيع الأقمشة وتطوير الغزول",
    "descriptionEn": "Technical engineering and supply coordination for specialized knit and woven fabrics, spectrophotometer Lab-Dip color matching, shrinkage control, and physical property testing.",
    "descriptionAr": "تطوير وتوريد الأقمشة والغزول التخصصية (Single Jersey, Piqué, Rib, Interlock)، ومطابقة الألوان معمليًا (Lab Dips)، واختبار الخواص النسيجية وضبط الانكماش.",
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
    "image": "/services/apparel/th-o-ph-m-b5ivLh4eD0A-unsplash.jpg"
  },
  {
    "id": "srv-app-brand-advisory",
    "code": "SBA-SRV-APP09",
    "sector": "apparel-services",
    "categoryKey": "fashion-brand-strategy",
    "categoryEn": "Fashion Brand Strategy & Development",
    "categoryAr": "استشارات تأسيس وتطوير العلامات التجارية للأزياء",
    "nameEn": "Fashion Brand Strategy & Development",
    "nameAr": "استشارات تأسيس وتطوير العلامات التجارية للأزياء",
    "descriptionEn": "Comprehensive strategic, design feasibility, and manufacturing execution advisory for emerging and established fashion brands, with over 400+ consultations delivered.",
    "descriptionAr": "خدمات استشارية استراتيجية وتنفيذية متكاملة لرواد الأعمال ومؤسسي علامات الأزياء، مدعومة بسجل حافل تجاوز 400 استشارة ناجحة لتطوير المجموعات وربطها بالمصانع المناسبة.",
    "scopeOfWorkEn": [
      "Brand positioning & target market segment feasibility studies",
      "Collection merchandising architecture (SKU planning, size runs, seasonal calendar)",
      "Tech-pack readiness & bill-of-materials costing analysis",
      "Strategic partner factory matching across 150+ verified manufacturers in Egypt",
      "Pre-launch quality assurance & retail packaging standardization",
      "Over 400+ advisory sessions delivered for fashion entrepreneurs and established brands"
    ],
    "scopeOfWorkAr": [
      "دراسة تموضع العلامة التجارية والجدوى التسويقية لشريحة الجمهور المستهدف",
      "هيكلة المجموعات الموسمية وتخطيط وحدات SKU وجداول المقاسات",
      "تدقيق ملفات المواصفات الفنية (Tech Packs) وهندسة تكلفة القطعة",
      "الربط بالمصانع المتخصصة الأنسب من شبكة تضم أكثر من 150 مصنعًا شريكًا في مصر",
      "معايير ضبط الجودة والتعبئة والتغليف الاحترافي قبل الطرح بالأسواق",
      "سجل استشاري حافل يضم تقديم أكثر من 400 استشارة لرواد أعمال ومؤسسي علامات الأزياء"
    ],
    "applicationsEn": ["Emerging Fashion Labels", "Established Retail Brands", "E-commerce Apparel Startups", "Designers Transitioning to Bulk Production"],
    "applicationsAr": ["علامات الأزياء الصاعدة", "الماركات التجارية القائمة", "الشركات الناشئة في تجارة الملابس الإلكترونية", "المصممون المنتقلون لمرحلة الإنتاج الكمي"],
    "capabilitiesEn": ["400+ fashion brand consultations delivered", "Proprietary network of 150+ audited manufacturing facilities in Egypt", "Holistic business-model to production engineering integration"],
    "capabilitiesAr": ["تقديم أكثر من 400 استشارة معتمدة لمؤسسي علامات الأزياء", "شبكة علاقات صناعية تضم أكثر من 150 مصنعًا معتمدًا في مصر", "تكامل كامل بين دراسة الجدوى وتخطيط الإنتاج الصناعي"],
    "image": "/services/apparel/th-o-ph-m-b5ivLh4eD0A-unsplash.jpg"
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
    "image": "/services/construction/commercial-administrative-development.jpg",
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
    "image": "/services/construction/healthcare-facilities-medical-fit-out.jpg",
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
    "image": "/services/construction/oil-gas-industrial-civil-infrastructure.jpg",
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
    "image": "/services/construction/residential-development-luxury-villas.jpg",
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
    labelAr: "خدمات تصنيع وتطوير الملابس",
    descEn: "OEM, ODM, FOB, and CM manufacturing, sampling & prototyping, design development, bulk production, fabric engineering, and brand advisory.",
    descAr: "حلول التصنيع بأنظمة OEM و ODM و FOB و CM، تصنيع العينات والنماذج الأولية، تصميم الأزياء وتطوير المنتجات، التعاقدات الكمية، تصنيع الأقمشة والغزول، واستشارات العلامات التجارية.",
    categories: [
      { key: "all", labelEn: "All Services", labelAr: "كافة الخدمات" },
      { key: "oem-manufacturing", labelEn: "OEM Manufacturing", labelAr: "التصنيع بنظام OEM" },
      { key: "odm-manufacturing", labelEn: "ODM Manufacturing", labelAr: "التصنيع بنظام ODM" },
      { key: "fob-manufacturing", labelEn: "FOB Manufacturing", labelAr: "التصنيع بنظام FOB" },
      { key: "cm-manufacturing", labelEn: "CM Manufacturing", labelAr: "التصنيع بنظام CM" },
      { key: "sampling-prototyping", labelEn: "Sampling & Prototyping", labelAr: "تصنيع العينات والنماذج الأولية" },
      { key: "fashion-design-development", labelEn: "Fashion Design & Product Development", labelAr: "تصميم الأزياء وتطوير المنتجات" },
      { key: "bulk-production-contracts", labelEn: "Bulk Production Contracts", labelAr: "التعاقدات الكمية" },
      { key: "fabric-yarn-development", labelEn: "Fabric Manufacturing & Yarn Development", labelAr: "تصنيع الأقمشة وتطوير الغزول" },
      { key: "fashion-brand-strategy", labelEn: "Fashion Brand Strategy & Development", labelAr: "استشارات تأسيس وتطوير العلامات التجارية للأزياء" }
    ]
  }
];
