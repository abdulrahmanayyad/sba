// ============================================================================
// SAMI BIN AYYAD GROUP — SERVICES & SOLUTIONS REPOSITORY
// Strictly dedicated to professional, engineering, and technical works.
// ============================================================================

export type ServiceSector = "construction" | "environmental" | "apparel-services" | "industrial-solutions";

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
  {
    "id": "srv-cns-general",
    "code": "SBA-SRV-CNS01",
    "sector": "construction",
    "categoryKey": "general-contracting",
    "categoryEn": "General Contracting",
    "categoryAr": "المقاولات العامة",
    "nameEn": "Turnkey General Contracting & Engineering Construction",
    "nameAr": "المقاولات العامة المتكاملة والتنفيذ الهندسي الشامل",
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
    "applicationsEn": [
      "Government Complexes",
      "Corporate Headquarters",
      "Commercial Plazas",
      "Industrial Parks"
    ],
    "applicationsAr": [
      "المجمعات الحكومية",
      "المقرات الإدارية الكبرى",
      "المراكز التجارية",
      "المناطق الصناعية"
    ],
    "capabilitiesEn": [
      "Multi-discipline site engineers",
      "Heavy machinery fleet",
      "ERP-driven procurement and cost control"
    ],
    "capabilitiesAr": [
      "فريق مهندسين متكامل بمختلف التخصصات",
      "أسطول معدات ثقيلة",
      "إدارة التكاليف والجدولة عبر أنظمة ERP"
    ],
    "image": "/BG/Contracting & Real Estate Development/Contracting & Real Estate Development Home Page.jpg"
  },
  {
    "id": "srv-cns-civil",
    "code": "SBA-SRV-CNS02",
    "sector": "construction",
    "categoryKey": "civil-works",
    "categoryEn": "Construction & Civil Works",
    "categoryAr": "الأعمال المدنية والإنشائية",
    "nameEn": "Civil Infrastructure, Earthworks & Utility Networks",
    "nameAr": "أعمال الهندسة المدنية وشبكات البنية التحتية",
    "descriptionEn": "Large-scale civil engineering works including bulk excavation, underground utility conduits, storm drainage lines, and highway access pavements.",
    "descriptionAr": "تنفيذ الأعمال المدنية الكبرى وشبكات المرافق التحتية، بما يشمل الحفر العام، خطوط تصريف مياه الأمطار، شبكات الصرف والتغذية ورصف الطرق.",
    "scopeOfWorkEn": [
      "Bulk earthmoving, dewatering, and soil compaction",
      "Potable water distribution lines and gravity sewer trunks",
      "Stormwater culverts and retention basins",
      "Paved asphalt roadways, curbs, and heavy-duty concrete aprons"
    ],
    "scopeOfWorkAr": [
      "أعمال تسوية الأراضي وسحب المياه الجوفية ودمك التربة",
      "شبكات خطوط مياه الشرب وخطوط الانحدار للصرف الصحي",
      "إنشاء البرابخ وقنوات ومجمعات مياه الأمطار",
      "رصف الطرق الإسفلتية، البردورات والأرضيات الخرسانية عالية التحمل"
    ],
    "applicationsEn": [
      "New Urban Communities",
      "Logistics Hubs",
      "Utility Corridors",
      "Industrial Zones"
    ],
    "applicationsAr": [
      "المجتمعات العمرانية الجديدة",
      "المراكز اللوجستية",
      "مسارات المرافق العامة",
      "المناطق الصناعية"
    ],
    "capabilitiesEn": [
      "GPS-guided grading equipment",
      "High-capacity dewatering systems",
      "Certified soil laboratory testing"
    ],
    "capabilitiesAr": [
      "معدات تسوية مدعومة بنظام GPS",
      "منظومات سحب مياه جوفية متقدمة",
      "فحوصات معملية معتمدة للتربة والدمك"
    ],
    "image": "/BG/Contracting & Real Estate Development/Infrastructure & Integrated Building Systems.jpg"
  },
  {
    "id": "srv-cns-structural",
    "code": "SBA-SRV-CNS03",
    "sector": "construction",
    "categoryKey": "structural-works",
    "categoryEn": "Structural Works",
    "categoryAr": "الأعمال والمنشآت الخرسانية والمعدنية",
    "nameEn": "Heavy Structural Concrete & Pre-Engineered Steel Framing",
    "nameAr": "الهياكل الخرسانية المسلحة والمنشآت الفولاذية والمعدنية",
    "descriptionEn": "Engineering fabrication and erection of heavy post-tensioned concrete, precast elements, and large-span structural steel frames for industrial and commercial facilities.",
    "descriptionAr": "تصميم وتنفيذ وتوريد المنشآت الخرسانية لاحقة الشد (Post-Tension)، والخرسانات مسبقة الصب، والهياكل المعدنية ذات البحور الواسعة للمصانع والمخازن.",
    "scopeOfWorkEn": [
      "Cast-in-place high-strength post-tension concrete slabs",
      "Precast concrete beam, column, and hollow-core installations",
      "Fabrication and erection of heavy PEB structural steel",
      "Structural retrofitting, carbon fiber wrapping, and load testing"
    ],
    "scopeOfWorkAr": [
      "صب بلاطات الخرسانة المسلحة عالية المقاومة لاحقة الشد",
      "تركيب العناصر الخرسانية مسبقة الصب والأسقف المجوفة",
      "تصنيع وتركيب الهياكل الفولاذية والجمالونات سابقة الهندسة",
      "تدعيم وتقوية العناصر الإنشائية بألياف الكربون واختبارات التحميل"
    ],
    "applicationsEn": [
      "Industrial Warehouses",
      "Factories",
      "Exhibition Halls",
      "Multi-Storey Towers"
    ],
    "applicationsAr": [
      "المستودعات الصناعية",
      "المصانع وخطوط الإنتاج",
      "صالات المعارض الكبرى",
      "الأبراج متعددة الطوابق"
    ],
    "capabilitiesEn": [
      "In-house structural BIM modeling",
      "Certified steel erectors",
      "Laser-guided slab leveling"
    ],
    "capabilitiesAr": [
      "نمذجة إنشائية متقدمة BIM",
      "فنيو ومهندسو تركيبات معتمدون",
      "تسوية الأرضيات والخرسانات بأشعة الليزر"
    ],
    "image": "/BG/Contracting & Real Estate Development/Integrated Solutions, Multiple Disciplines.jpg"
  },
  {
    "id": "srv-cns-finishing",
    "code": "SBA-SRV-CNS04",
    "sector": "construction",
    "categoryKey": "architectural-finishing",
    "categoryEn": "Architectural & Finishing Works",
    "categoryAr": "أعمال التشطيبات والديكور المعماري",
    "nameEn": "Premium Interior Fit-Out & Architectural Facade Engineering",
    "nameAr": "أعمال التشطيبات المعمارية الفاخرة والديكور والواجهات",
    "descriptionEn": "Delivering world-class interior fit-outs, curtain walls, ventilated stone cladding, acoustic ceilings, and precision marble flooring for luxury spaces.",
    "descriptionAr": "تنفيذ أرقى أعمال التشطيبات الداخلية والواجهات المعمارية، وواجهات الزجاج كورتن وول، والكلادينج الحجري، والأسقف الصوتية والأرضيات الرخامية الفاخرة.",
    "scopeOfWorkEn": [
      "Structural glazed curtain walling and aluminum composite cladding",
      "Imported marble, granite, and porcelain flooring installations",
      "Custom acoustic gypsum partitions and decorative woodwork",
      "Architectural lighting design and lighting automation integration"
    ],
    "scopeOfWorkAr": [
      "واجهات زجاجية كورتن وول وتجليد ألومنيوم كلادينج معتمد",
      "توريد وتركيب الرخام والجرانيت المستورد والبورسلين الفاخر",
      "قواطع جبسية عازلة للصوت وديكورات خشبية مخصصة",
      "تصميم وتنفيذ أنظمة الإضاءة المعمارية المتطورة"
    ],
    "applicationsEn": [
      "Luxury Hotels",
      "Corporate Boardrooms",
      "Commercial Showrooms",
      "High-End Villas"
    ],
    "applicationsAr": [
      "الفنادق والمنتجعات",
      "المقرات الإدارية الفاخرة",
      "المعارض التجارية",
      "الفيلات والقصور الخاصة"
    ],
    "capabilitiesEn": [
      "Skilled master craftsmen",
      "Direct quarry marble sourcing",
      "3D architectural visualization"
    ],
    "capabilitiesAr": [
      "حرفيون ومعلمون مهرة",
      "استيراد مباشر للرخام من المحاجر",
      "تصميم ورندرة معمارية ثلاثية الأبعاد"
    ],
    "image": "/BG/Contracting & Real Estate Development/Finishing & Interior Design.jpg"
  },
  {
    "id": "srv-cns-mep",
    "code": "SBA-SRV-CNS05",
    "sector": "construction",
    "categoryKey": "electromechanical-mep",
    "categoryEn": "Electromechanical Works (MEP)",
    "categoryAr": "الأعمال الكهروميكانيكية (MEP)",
    "nameEn": "Integrated HVAC, Fire Protection, Electrical & Plumbing Engineering",
    "nameAr": "الهندسة الكهروميكانيكية وأنظمة التكييف ومكافحة الحريق والكهرباء",
    "descriptionEn": "Turnkey electro-mechanical systems design, installation, and balancing. Encompassing chillers, ductwork, fire sprinkler loops, MV/LV substations, and smart building management (BMS).",
    "descriptionAr": "تصميم وتنفيذ وتشغيل الأنظمة الكهروميكانيكية المتكاملة، بما يشمل محطات التكييف المركزي، شبكات مكافحة الحريق، محولات الجهد، وشبكات التيار الخفيف وأنظمة التحكم BMS.",
    "scopeOfWorkEn": [
      "Central HVAC chillers, air handling units (AHUs), and ductwork",
      "NFPA-compliant fire alarm and automated sprinkler firefighting networks",
      "Medium and low voltage electrical power distribution and backup generators",
      "Sanitary plumbing, rainwater recovery, and booster pumping systems",
      "Smart Building Management System (BMS) controls"
    ],
    "scopeOfWorkAr": [
      "محطات تكييف مركزي مائي وشبكات مجاري الهواء وموزعات التبريد",
      "أنظمة إنذار ومكافحة حريق أوتوماتيكية مطابقة لكود NFPA",
      "شبكات توزيع القوى الكهربائية جهد متوسط ومنخفض والمولدات",
      "شبكات التغذية الصحية ومضخات تعزيز الضغط وتصريف السيول",
      "أنظمة التحكم الذكي وإدارة المباني BMS"
    ],
    "applicationsEn": [
      "Hospitals",
      "Data Centers",
      "Shopping Malls",
      "High-Rise Complexes"
    ],
    "applicationsAr": [
      "المستشفيات والمراكز الطبية",
      "مراكز البيانات",
      "المولات التجارية",
      "الأبراج السكنية والإدارية"
    ],
    "capabilitiesEn": [
      "NFPA & ASHRAE certified MEP engineers",
      "Air balancing testing equipment",
      "Automated duct fabrication"
    ],
    "capabilitiesAr": [
      "مهندسو MEP معتمدون من NFPA و ASHRAE",
      "أجهزة موازنة تدفق الهواء والهيدروليك",
      "تصنيع آلي لمجاري الهواء"
    ],
    "image": "/BG/Contracting & Real Estate Development/Electromechanical Systems (MEP).jpg"
  },
  {
    "id": "srv-cns-realestate",
    "code": "SBA-SRV-CNS06",
    "sector": "construction",
    "categoryKey": "real-estate-dev",
    "categoryEn": "Real Estate Development",
    "categoryAr": "التطوير والاستثمار العقاري",
    "nameEn": "Commercial, Administrative & Residential Property Development",
    "nameAr": "التطوير العقاري للمشروعات التجارية والإدارية والسكنية",
    "descriptionEn": "Strategic real estate development covering land acquisition, project feasibility, master planning, architectural concept, construction, and investor asset management.",
    "descriptionAr": "تطوير عقاري استثماري متكامل يشمل دراسات الجدوى واختيار المواقع الاستراتيجية، المخطط العام، التصميم المعماري، التنفيذ وإدارة الأصول العقارية الاستثمارية.",
    "scopeOfWorkEn": [
      "Market demand analytics and highest-and-best-use feasibility studies",
      "Master planning and zoning regulatory approvals",
      "Value engineering and lifecycle cost optimization",
      "Turnkey construction and sales/leasing program coordination"
    ],
    "scopeOfWorkAr": [
      "دراسات الجدوى الاقتصادية وأبحاث السوق وتحديد الاستخدام الأمثل",
      "إعداد المخططات العامة واعتماد التراخيص الحكومية",
      "الهندسة القيمة وتحسين تكاليف دورة حياة المبنى",
      "الإشراف على التنفيذ والتسويق وتنسيق برامج التأجير والبيع"
    ],
    "applicationsEn": [
      "Mixed-Use Compounds",
      "Business Parks",
      "Gated Communities",
      "Retail Strips"
    ],
    "applicationsAr": [
      "المجمعات متعددة الاستخدامات",
      "واحات الأعمال",
      "المجمعات السكنية المغلقة",
      "المراكز التجارية المفتوحة"
    ],
    "capabilitiesEn": [
      "Financial modeling & investment structuring",
      "Award-winning architectural partners",
      "Turnkey in-house execution"
    ],
    "capabilitiesAr": [
      "هيكلة استثمارية ونمذجة مالية احترافية",
      "شراكات مع بيوت خبرة معمارية",
      "قدرة تنفيذية متكاملة للإنشاءات"
    ],
    "image": "/BG/Contracting & Real Estate Development/Residential & Commercial Property Development.jpg"
  },
  {
    "id": "srv-cns-medical",
    "code": "SBA-SRV-CNS07",
    "sector": "construction",
    "categoryKey": "medical-fitout",
    "categoryEn": "Medical Facility Fit-Outs",
    "categoryAr": "تجهيز المستشفيات والمنشآت الصحية",
    "nameEn": "Specialized Healthcare Construction, Cleanrooms & Medical Gas Systems",
    "nameAr": "تجهيز المستشفيات، غرف العمليات المعقمة وشبكات الغازات الطبية",
    "descriptionEn": "Highly specialized contracting adhering to international HTM and AIA healthcare guidelines. Delivering sterile operating theatres, intensive care units, and positive-pressure cleanrooms.",
    "descriptionAr": "تنفيذ هندسي فائق التخصص للمنشآت الطبية وفق معايير HTM و AIA العالمية، يشمل أجنحة العمليات الجراحية المعقمة، العناية المركزة، وشبكات الغازات الطبية.",
    "scopeOfWorkEn": [
      "Modular antibacterial cleanroom wall and ceiling panels",
      "HEPA air filtration and laminar airflow ceiling systems (ISO Class 5-8)",
      "Medical gas pipeline systems (Oxygen, Nitrous Oxide, Vacuum, Medical Air)",
      "Radiation shielding for X-ray, CT, and MRI diagnostic suites"
    ],
    "scopeOfWorkAr": [
      "قواطع وأسقف معيارية مضادة للبكتيريا ومقاومة للمنظفات الكيميائية",
      "أنظمة تدفق الهواء الصفائحي وفلاتر HEPA لغرف العمليات (ISO 5-8)",
      "شبكات الغازات الطبية المركزية (أكسجين، شفط، هواء طبي)",
      "أعمال العزل الإشعاعي بالرصاص لغرف الأشعة المقطعية والرنين المغناطيسي"
    ],
    "applicationsEn": [
      "General Hospitals",
      "Specialized Clinics",
      "Surgical Centers",
      "Pharmaceutical Cleanrooms"
    ],
    "applicationsAr": [
      "المستشفيات العامة والخاصة",
      "المراكز الطبية التخصصية",
      "مراكز جراحة اليوم الواحد",
      "معامل الأدوية المعقمة"
    ],
    "capabilitiesEn": [
      "Healthcare-certified engineering team",
      "Cleanroom validation instrumentation",
      "Strict infection control protocol"
    ],
    "capabilitiesAr": [
      "فريق هندسي متخصص في الأكواد الطبية",
      "أجهزة اختبار واعتماد الغرف المعقمة",
      "بروتوكولات صارمة لمكافحة العدوى أثناء التنفيذ"
    ],
    "image": "/BG/Contracting & Real Estate Development/Healthcare & Medical Facilities.jpg"
  },
  {
    "id": "srv-cns-oilgas",
    "code": "SBA-SRV-CNS08",
    "sector": "construction",
    "categoryKey": "oil-gas-works",
    "categoryEn": "Oil & Gas Specialized Works",
    "categoryAr": "أعمال المقاولات البترولية المتخصصة",
    "nameEn": "Industrial Civil Foundations, Tank Farms & Petrochemical Civil Works",
    "nameAr": "الأعمال المدنية المتخصصة لقطاع البترول والغاز ومزارع الخزانات",
    "descriptionEn": "Heavy industrial civil and structural construction within refinery, terminal, and petrochemical facility boundaries, meeting strict HSE zero-incident standards.",
    "descriptionAr": "تنفيذ الأعمال المدنية والإنشائية الثقيلة داخل مصافي التكرير ومستودعات التخزين ومجمعات البتروكيماويات وفق أعلى اشتراطات السلامة والصحة المهنية HSE.",
    "scopeOfWorkEn": [
      "Heavy ring-wall and pile foundations for bulk hydrocarbon storage tanks",
      "Reinforced concrete bund walls, containment basins, and oil-water separators",
      "Pipe rack concrete supports and heavy vibrating compressor foundations",
      "Blast-resistant control rooms and substation civil structures"
    ],
    "scopeOfWorkAr": [
      "أساسات الحوائط الحلقية والخوازيق لخزانات الوقود والغاز الضخمة",
      "حوائط وأحواض الاحتواء الخرسانية المقاومة للهيدروكربونات ومصائد الزيوت",
      "قواعد الكباري وحوامل الأنابيب (Pipe Racks) وقواعد الضواغط الثقيلة",
      "غرف التحكم والمحطات الفرعية المقاومة للانفجار والصدمات"
    ],
    "applicationsEn": [
      "Petroleum Refineries",
      "Tank Terminals",
      "LNG Facilities",
      "Chemical Processing Complexes"
    ],
    "applicationsAr": [
      "مصافي تكرير البترول",
      "مستودعات شحن وتخزين الوقود",
      "محطات الغاز الطبيعي",
      "المجمعات الكيميائية"
    ],
    "capabilitiesEn": [
      "Strict Permit-to-Work (PTW) protocols",
      "Explosion-proof construction equipment",
      "Certified non-destructive testing"
    ],
    "capabilitiesAr": [
      "تطبيق صارم لتصاريح العمل الساخن والبارد PTW",
      "معدات إنشائية مطابقة لاشتراطات المناطق المصنفة",
      "فحوصات لا إتلافية NDT معتمدة"
    ],
    "image": "/BG/Contracting & Real Estate Development/Oil & Gas Industrial Civil Infrastructure.jpg"
  },
  {
    "id": "srv-cns-pm",
    "code": "SBA-SRV-CNS09",
    "sector": "construction",
    "categoryKey": "project-management",
    "categoryEn": "Project Management & Execution",
    "categoryAr": "إدارة المشروعات والإشراف الهندسي",
    "nameEn": "Professional Construction Management, QA/QC & Engineering Supervision",
    "nameAr": "إدارة المشروعات الاحترافية، ضبط الجودة والإشراف الهندسي",
    "descriptionEn": "Owner's representative and engineering project management services overseeing schedule, budget, quality control, contract administration, and safety compliance.",
    "descriptionAr": "خدمات تمثيل المالك وإدارة المشروعات الهندسية، للتحكم في البرنامج الزمني، وضبط التكاليف، وضمان أعلى معايير الجودة ومراقبة عقود التنفيذ والسلامة.",
    "scopeOfWorkEn": [
      "Primavera P6 project baseline scheduling, critical path, and earned value analysis",
      "Detailed cost tracking, value engineering, and change order evaluation",
      "Comprehensive site QA/QC inspection programs and non-conformance tracking",
      "Contract administration under FIDIC and local commercial conditions"
    ],
    "scopeOfWorkAr": [
      "إعداد الجداول الزمنية عبر Primavera P6 وتحليل المسار الحرج والقيمة المكتسبة",
      "مراقبة التدفقات المالية والهندسة القيمة ومراجعة أوامر التغيير",
      "برامج فحص وضبط الجودة الشاملة وتقارير عدم المطابقة NCR",
      "إدارة العقود وفق شروط الفيديك FIDIC والقوانين المنظمة"
    ],
    "applicationsEn": [
      "Major Real Estate Projects",
      "Infrastructure Concessions",
      "Industrial Plants",
      "Institutional Campuses"
    ],
    "applicationsAr": [
      "المشروعات العقارية الكبرى",
      "امتيازات البنية التحتية",
      "المصانع والمجمعات الصناعية",
      "المقرات والمجمعات الحكومية"
    ],
    "capabilitiesEn": [
      "PMP-certified senior directors",
      "Digital dashboard reporting",
      "Risk management matrix"
    ],
    "capabilitiesAr": [
      "مديرو مشروعات معتمدون بشهادات PMP الدولية",
      "لوحات متابعة رقمية لحظية للمالك",
      "مصفوفة متطورة لإدارة المخاطر"
    ],
    "image": "/BG/Contracting & Real Estate Development/Commercial & Administrative Development.jpg"
  },
  {
    "id": "srv-env-waste-mgmt",
    "code": "SBA-SRV-ENV01",
    "sector": "environmental",
    "categoryKey": "waste-management",
    "categoryEn": "Waste Management Solutions",
    "categoryAr": "حلول إدارة المخلفات المتكاملة",
    "nameEn": "Comprehensive Integrated Municipal & Industrial Waste Management",
    "nameAr": "المنظومة المتكاملة لإدارة وتدوير المخلفات البلدية والصناعية",
    "descriptionEn": "Turnkey design, operational management, and lifecycle engineering of solid waste collection, sorting, recovery, and sanitary containment facilities.",
    "descriptionAr": "تصميم وتنفيذ وتشغيل منظومات إدارة المخلفات الصلبة والصناعية، تشمل محطات الفرز الميكانيكي، استرداد الموارد والتدوير، والمدافن الصحية الآمنة.",
    "scopeOfWorkEn": [
      "Material recovery facility (MRF) engineering and automated optical sorting line setup",
      "Engineered sanitary landfill cell design with composite geomembrane liners and leachate collection",
      "Industrial waste minimization and circular economy resource audit programs",
      "Regulatory waste transport manifests and continuous environmental reporting"
    ],
    "scopeOfWorkAr": [
      "تصميم وإنشاء محطات فرز واسترداد المواد (MRF) بخطوط فرز آلية وبصرية",
      "تصميم خلايا المدافن الصحية الآمنة بعوازل الجيوممبرين ومحطات معالجة سائل الرشيح",
      "برامج تقليل الهدر والتدوير في المصانع وفق مفاهيم الاقتصاد الدائري",
      "إصدار بيانات التتبع الرسمية لنقل وتدوير المخلفات والتقارير البيئية الدورية"
    ],
    "applicationsEn": [
      "Municipalities",
      "Industrial Complexes",
      "Ports & Free Zones",
      "Agricultural Processing Centers"
    ],
    "applicationsAr": [
      "المحافظات والمجتمعات العمرانية",
      "المجمعات الصناعية",
      "الموانئ والمناطق الحرة",
      "مجمعات التصنيع الزراعي"
    ],
    "capabilitiesEn": [
      "Licensed environmental engineers",
      "GIS waste routing models",
      "EPA & EU compliance certified"
    ],
    "capabilitiesAr": [
      "خبراء واستشاريون بيئيون معتمدون",
      "خرائط توجيه رقمية GIS لنقل المخلفات",
      "مطابقة لمعايير جهاز شؤون البيئة والاتحاد الأوروبي"
    ],
    "image": "/BG/Environment & Sustainability/Comprehensive Waste Management Services.jpg"
  },
  {
    "id": "srv-env-waste-to-energy",
    "code": "SBA-SRV-ENV02",
    "sector": "environmental",
    "categoryKey": "waste-to-energy",
    "categoryEn": "Waste-to-Energy Systems",
    "categoryAr": "أنظمة تحويل المخلفات إلى طاقة",
    "nameEn": "Thermal & Refuse-Derived Fuel (RDF) Waste-to-Energy Systems",
    "nameAr": "محطات وأنظمة تحويل المخلفات الصلبة والوقود البديل (RDF) إلى طاقة",
    "descriptionEn": "Engineering processing facilities converting non-recyclable combustible waste into high-calorific RDF pellets and steam/electricity for heavy industrial consumption.",
    "descriptionAr": "هندسة وتصميم وإنشاء محطات معالجة المخلفات لإنتاج الوقود البديل عالي القيمة الحرارية (RDF) وتوليد البخار والكهرباء لمصانع الأسمنت والصناعات الثقيلة.",
    "scopeOfWorkEn": [
      "Heavy-duty primary and secondary shredding systems with magnetic metal separators",
      "Air classification and moisture reduction thermal drying tunnels",
      "High-density RDF pelletizing and automated truck loading terminals",
      "Advanced flue gas cleaning systems (scrubbers, baghouse filters, carbon injection)"
    ],
    "scopeOfWorkAr": [
      "معدات الفرم والتكسير الثقيل الأولية والثانوية مع فواصل المعادن المغناطيسية",
      "أنظمة الفرز الهوائي وتجفيف المخلفات للتحكم في نسب الرطوبة والقيمة الحرارية",
      "محطات تكوير الوقود البديل RDF وأنظمة التعبئة والشحن الآلي للشاحنات",
      "منظومات تنقية ومعالجة الغازات المنبعثة ومصائد الجسيمات ومطابقة المعايير"
    ],
    "applicationsEn": [
      "Cement Plants",
      "Industrial Boilers",
      "Municipal Energy Hubs",
      "District Power Generation"
    ],
    "applicationsAr": [
      "مصانع الأسمنت ومحارق الطاقة",
      "الغلايات ومحطات البخار الصناعية",
      "مجمعات الطاقة البلدية",
      "محطات التوليد المشترك"
    ],
    "capabilitiesEn": [
      "Calorific value testing lab",
      "Partnership with European thermal equipment OEMs",
      "Emission telemetry integration"
    ],
    "capabilitiesAr": [
      "معمل قياس القيمة الحرارية للوقود",
      "شراكات مع كبرى الشركات الأوروبية المصنعة",
      "ربط لحظي لمنظومات رصد الانبعاثات مع الجهات التنظيمية"
    ],
    "image": "/BG/Environment & Sustainability/Waste to Energy Services & Biogas Plants.jpg"
  },
  {
    "id": "srv-env-biogas",
    "code": "SBA-SRV-ENV03",
    "sector": "environmental",
    "categoryKey": "biogas-development",
    "categoryEn": "Biogas Project Development",
    "categoryAr": "تطوير محطات الغاز الحيوي والبيوجاز",
    "nameEn": "Commercial Anaerobic Digestion & Biogas Power Generation Plants",
    "nameAr": "تطوير وإنشاء محطات الهضم اللاهوائي وإنتاج الغاز الحيوي وتوليد الكهرباء",
    "descriptionEn": "Turnkey development of anaerobic digestion facilities converting agricultural residues, food processing waste, and animal manure into green methane gas and organic bio-fertilizer.",
    "descriptionAr": "تطوير متكامل لمحطات التخمير اللاهوائي لتحويل المخلفات الزراعية وروث الحيوانات ومخلفات مصانع الأغذية إلى غاز ميثان حيوي نظيف وأسمدة عضوية عالية الخصوبة.",
    "scopeOfWorkEn": [
      "Substrate feedstock characterization, biochemical methane potential (BMP) testing",
      "Continuous stirred-tank reactor (CSTR) digester engineering with gas-tight membrane roofs",
      "Biogas desulfurization, moisture removal, and biomethane upgrading systems",
      "Combined Heat and Power (CHP) engine integration and organic digestate solid-liquid separation"
    ],
    "scopeOfWorkAr": [
      "تحليل خصائص المخلفات وفحوصات الجدوى الحيوية لإنتاج الميثان (BMP)",
      "تصميم وإنشاء مخمرات CSTR المستمرة مع أغطية عازلة مزدوجة لحبس الغاز",
      "وحدات تنقية وإزالة كبريتيد الهيدروجين (H2S) وتجفيف ورفع كفاءة الغاز",
      "تركيب مولدات التوليد المشترك للطاقة والحرارة (CHP) ووحدات فصل السماد العضوي"
    ],
    "applicationsEn": [
      "Dairy Mega-Farms",
      "Sugar & Food Processing Plants",
      "Slaughterhouses",
      "Rural Renewable Microgrids"
    ],
    "applicationsAr": [
      "مزارع الإنتاج الحيواني والألبان الكبرى",
      "مصانع السكر والصناعات الغذائية",
      "المجازر الآلية",
      "المناطق الريفية والمزارع المغلقة"
    ],
    "capabilitiesEn": [
      "Biological process stability monitoring",
      "Turnkey EPC execution",
      "Carbon credit registration under CDM/Verra"
    ],
    "capabilitiesAr": [
      "مراقبة وضبط العمليات الحيوية والكيميائية",
      "تنفيذ متكامل بنظام التصميم والإنشاء EPC",
      "تسجيل أرصدة الكربون والشهادات الخضراء الدولية"
    ],
    "image": "/BG/Environment & Sustainability/Renewable Energy Solutions & Green Power.jpg"
  },
  {
    "id": "srv-env-bio-treatment",
    "code": "SBA-SRV-ENV04",
    "sector": "environmental",
    "categoryKey": "biological-treatment",
    "categoryEn": "Biological Waste Treatment",
    "categoryAr": "معالجة المخلفات الحيوية",
    "nameEn": "Aerobic In-Vessel Composting & Bio-Remediation Systems",
    "nameAr": "أنظمة الكمبوست الهوائي المتقدم والمعالجة الحيوية للمخلفات العضوية",
    "descriptionEn": "Controlled biological treatment converting organic sludges, green clippings, and organic industrial byproducts into pathogen-free, high-grade agricultural soil amendments.",
    "descriptionAr": "أنظمة المعالجة البيولوجية الهوائية لتدوير الحمأة ومخلفات التصنيع الزراعي وتحويلها إلى أسمدة كمبوست عضوية معقمة وخالية تمامًا من مسببات الأمراض وبذور الحشائش.",
    "scopeOfWorkEn": [
      "Enclosed composting tunnels and forced-aeration windrow pad design",
      "Continuous temperature, oxygen, and moisture telemetry monitoring",
      "Screening, curing, and custom nutrient enhancement blending",
      "Bio-filter odor control integration ensuring zero neighborhood emissions"
    ],
    "scopeOfWorkAr": [
      "تصميم أنفاق الكمبوست المغلقة وساحات التقليب والتهوية القسرية",
      "مراقبة لحظية ومستمرة لدرجات الحرارة ونسب الأكسجين والرطوبة",
      "غربلة وتجهيز وإضافة العناصر الصغرى والمخصبات الحيوية للسماد",
      "ربط المنظومة بفلاتر بيولوجية لمعالجة الروائح ومنع أي انبعاثات"
    ],
    "applicationsEn": [
      "Agri-Business Farms",
      "Municipal Sludge Facilities",
      "Landscape Forestry",
      "Organic Fertilizers"
    ],
    "applicationsAr": [
      "المزارع وشركات الاستصلاح الزراعي",
      "محطات معالجة الصرف الصحي (للحمأة)",
      "مشاريع التشجير الكبرى",
      "مصانع الأسمدة الحيوية"
    ],
    "capabilitiesEn": [
      "Agronomic nutrient formulation",
      "Pathogen eradication verification",
      "Turnkey aeration blowers"
    ],
    "capabilitiesAr": [
      "صياغة خلطات التغذية والخصوبة الزراعية",
      "فحوصات معملية للقضاء على البكتيريا الضارة",
      "توريد وتركيب منفاخات التهوية الميكانيكية"
    ],
    "image": "/BG/Environment & Sustainability/Environmental Biotechnology Services.jpg"
  },
  {
    "id": "srv-env-industrial-waste",
    "code": "SBA-SRV-ENV05",
    "sector": "environmental",
    "categoryKey": "industrial-waste",
    "categoryEn": "Industrial Waste Treatment",
    "categoryAr": "معالجة المخلفات الصناعية الخطرة وغير الخطرة",
    "nameEn": "Hazardous & Non-Hazardous Industrial Waste Treatment & Neutralization",
    "nameAr": "معالجة ومعادلة المخلفات الصناعية الخطرة وغير الخطرة",
    "descriptionEn": "Comprehensive physico-chemical treatment, solidification, stabilization, and safe neutralization of complex industrial solid residues, sludges, and spent chemicals.",
    "descriptionAr": "معالجة فيزيوكيميائية متطورة للمخلفات الصناعية المعقدة، تشمل التثبيت والتدعيم الكيميائي (Stabilization) ومعادلة المواد الخطرة لضمان التخلص الآمن وفق القوانين.",
    "scopeOfWorkEn": [
      "Industrial chemical fingerprinting and toxicity characteristic leaching procedure (TCLP)",
      "Heavy metal precipitation and pozzolanic matrix solidification",
      "Thermal destruction coordination and safe secure burial of non-reactive residues",
      "Chain-of-custody tracking, certified disposal manifests, and EPA-audited documentation"
    ],
    "scopeOfWorkAr": [
      "التوصيف والتحليل الكيميائي للمخلفات واختبارات التسريب السمي TCLP",
      "ترسيب المعادن الثقيلة وتثبيت المخلفات بالخلطات الأسمنتية البوزولانية",
      "المعالجة الحرارية الآمنة والدفن المحمي للنواتج الخاملة المعالجة",
      "شهادات الإعدام والتخلص الآمن المعتمدة مع توثيق كامل لسلسلة النقل والتداول"
    ],
    "applicationsEn": [
      "Chemical Plants",
      "Electroplating Industries",
      "Pharmaceutical Factories",
      "Textile Dyehouses"
    ],
    "applicationsAr": [
      "مصانع الكيماويات والبتروكيماويات",
      "مصانع جلفنة وتشغيل المعادن",
      "شركات الأدوية",
      "مصانع صباغة وتجهيز المنسوجات"
    ],
    "capabilitiesEn": [
      "Licensed hazardous waste handlers",
      "On-site mobile stabilization units",
      "Certified analytical laboratory"
    ],
    "capabilitiesAr": [
      "تراخيص رسمية لتداول ومعالجة المخلفات الخطرة",
      "وحدات معالجة وتثبيت كيميائي متنقلة للمصانع",
      "معمل تحاليل كيميائية معتمد"
    ],
    "image": "/BG/Environment & Sustainability/Built Environment Sector.jpg"
  },
  {
    "id": "srv-env-odor-control",
    "code": "SBA-SRV-ENV06",
    "sector": "environmental",
    "categoryKey": "odor-control",
    "categoryEn": "Odor Control Solutions",
    "categoryAr": "حلول إزالة والتحكم في الروائح الصناعية",
    "nameEn": "Industrial Odor Abatement, Wet Scrubbing & Bio-Trickling Filters",
    "nameAr": "محطات وأنظمة إزالة الروائح والمركبات الكبريتية والعضوية المتطايرة",
    "descriptionEn": "High-efficiency odor elimination systems removing hydrogen sulfide (H2S), ammonia (NH3), mercaptans, and volatile organic compounds (VOCs) from wastewater and process plants.",
    "descriptionAr": "أنظمة متطورة لإزالة الروائح الكريهة والمركبات الكبريتية والأمونيا والغازات العضوية المتطايرة، تشمل أبراج الغسيل الكيميائي، الفلاتر الحيوية، وأجهزة الأكسدة المتقدمة.",
    "scopeOfWorkEn": [
      "Gas chromatography olfactometry and airborne emission dispersion modeling",
      "Multi-stage chemical packed-tower wet scrubbers (acid, caustic, oxidizing)",
      "Biological trickling filtration with synthetic inorganic media",
      "Activated carbon deep-bed dry adsorption vessels with impregnated media"
    ],
    "scopeOfWorkAr": [
      "قياس وتحديد تركيزات الروائح والغازات ونمذجة انتشار الانبعاثات الهوائية",
      "تصميم وتوريد أبراج الغسيل الكيميائي الرطبة متعددة المراحل (حمضي، قلوي، مؤكسد)",
      "فلاتر الترشيح الحيوية ذات الوسائط الاصطناعية المعمرة لإزالة الروائح بدون كيماويات",
      "خزانات امتزاز جافة محشوة بالكربون النشط المعالج خصيصًا لامتصاص كبريتيد الهيدروجين"
    ],
    "applicationsEn": [
      "Sewage Lift Stations & WWTPs",
      "Rendering Plants",
      "Solid Waste Composting",
      "Paper & Pulp Mills"
    ],
    "applicationsAr": [
      "محطات رفع ومعالجة مياه الصرف الصحي",
      "مصانع تدوير المخلفات والمسالخ",
      "محطات الكمبوست",
      "مصانع الورق والكرتون"
    ],
    "capabilitiesEn": [
      "99.5%+ H2S removal efficiency",
      "Corrosion-resistant FRP/PP construction",
      "Automated chemical dosing control"
    ],
    "capabilitiesAr": [
      "كفاءة إزالة كبريتيد الهيدروجين تتجاوز 99.5%",
      "تصنيع الخزانات والأبراج من الفيبرجلاس FRP والبولي بروبلين المقاوم للكيماويات",
      "تحكم آلي متصل بمجسات الغاز"
    ],
    "image": "/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg"
  },
  {
    "id": "srv-env-oil-spill",
    "code": "SBA-SRV-ENV07",
    "sector": "environmental",
    "categoryKey": "oil-spill-treatment",
    "categoryEn": "Oil Spill & Hydrocarbon Treatment",
    "categoryAr": "معالجة الانسكابات البترولية والهيدروكربونية",
    "nameEn": "Rapid Oil Spill Response, Bioremediation & Hydrocarbon Soil Remediation",
    "nameAr": "المعالجة الحيوية للتربة الملوثة بالنفط ومكافحة الانسكابات الهيدروكربونية",
    "descriptionEn": "Deploying certified microbial bio-augmentation agents, containment barriers, and specialized skimming equipment to clean up crude oil spills on land and inland waterways.",
    "descriptionAr": "حلول التدخل السريع ومعالجة التربة والمياه الملوثة بالانسكابات البترولية باستخدام بكتيريا التكسير الحيوي الطبيعية المعتمدة عالميًا، الحواجز العائمة ومضخات القشط المتخصصة.",
    "scopeOfWorkEn": [
      "Emergency marine and freshwater containment booms and recovery skimming",
      "Ex-situ and in-situ bio-piles with tailored indigenous hydrocarbon-degrading microbes",
      "Soil washing and thermal desorption coordination for heavy sludge residues",
      "Post-remediation groundwater testing and total petroleum hydrocarbon (TPH) clearance"
    ],
    "scopeOfWorkAr": [
      "نشر الحواجز المطاطية العائمة ومعدات القشط لاستعادة الزيوت من المسطحات المائية",
      "إنشاء أكوام المعالجة الحيوية (Bio-piles) وحقن البكتيريا المهضمة للهيدروكربونات",
      "غسيل التربة واستخلاص الزيوت من الرواسب الطينية الثقيلة",
      "فحوصات مخبرية للمياه الجوفية والتربة لإثبات خفض مؤشر TPH وتسليم الموقع خاليًا من التلوث"
    ],
    "applicationsEn": [
      "Oil Terminals",
      "Drilling Rigs & Refineries",
      "Pipeline Corridors",
      "Industrial Ports"
    ],
    "applicationsAr": [
      "مستودعات الشحن وموانئ البترول",
      "مواقع الحفر ومصافي التكرير",
      "مسارات خطوط الأنابيب",
      "المناطق الصناعية والموانئ"
    ],
    "capabilitiesEn": [
      "Proprietary eco-friendly bio-enzymatic agents",
      "Rapid mobilization emergency teams",
      "Compliance with international MARPOL conventions"
    ],
    "capabilitiesAr": [
      "استخدام مركبات حيوية طبيعية آمنة بيئيًا 100%",
      "فرق تدخل سريع ومعدات استجابة طوارئ",
      "مطابقة لمعايير اتفاقيات ماربول MARPOL الدولية"
    ],
    "image": "/BG/Environment & Sustainability/ET-POT-01 — Oil Terminator.jpg"
  },
  {
    "id": "srv-env-eia",
    "code": "SBA-SRV-ENV08",
    "sector": "environmental",
    "categoryKey": "environmental-assessment",
    "categoryEn": "Environmental Assessment (EIA/ESIA)",
    "categoryAr": "دراسات تقييم الأثر البيئي والمجتمعي",
    "nameEn": "Comprehensive Environmental & Social Impact Assessments (EIA / ESIA)",
    "nameAr": "إعداد دراسات تقييم الأثر البيئي والمجتمعي الشاملة (EIA / ESIA)",
    "descriptionEn": "Authoritative environmental studies qualifying industrial, infrastructure, and tourist projects for government permits and international financial institution compliance.",
    "descriptionAr": "إعداد دراسات تقييم الأثر البيئي والمجتمعي المعتمدة للمشروعات الصناعية والسياحية والبنية التحتية، لاستخراج التراخيص الحكومية واستيفاء متطلبات جهات التمويل الدولية.",
    "scopeOfWorkEn": [
      "Baseline environmental measurements: ambient air quality, noise, soil, and ecology",
      "Pollution dispersion modeling for air emissions and wastewater outfalls",
      "Environmental and Social Management Plans (ESMP) with mitigation strategies",
      "Stakeholder engagement, public consultation sessions, and regulatory approvals"
    ],
    "scopeOfWorkAr": [
      "القياسات البيئية الميدانية: جودة الهواء المحيط، الضوضاء، فحص التربة والتنوع الحيوي",
      "نمذجة انتشار الملوثات الرياضية لانبعاثات المداخن ومصبات الصرف",
      "إعداد خطط الإدارة والرصد البيئي والمجتمعي (ESMP) وإجراءات التخفيف",
      "جلسات الاستماع والتشاور المجتمعي ومتابعة الموافقات مع جهاز شؤون البيئة"
    ],
    "applicationsEn": [
      "Manufacturing Plants",
      "Energy & Oil Facilities",
      "Tourism Resorts",
      "Infrastructure Concessions"
    ],
    "applicationsAr": [
      "المصانع والمنشآت الإنتاجية",
      "مشروعات الطاقة والبترول",
      "المنتجعات السياحية",
      "مشروعات البنية التحتية والنقل"
    ],
    "capabilitiesEn": [
      "Accredited consultant registration with environmental authorities",
      "Calibrated field measurement equipment",
      "World Bank / IFC performance standard alignment"
    ],
    "capabilitiesAr": [
      "بيت خبرة واستشاريون معتمدون لدى جهاز شؤون البيئة",
      "أجهزة قياس ميدانية معايرة ومعتمدة دوليًا",
      "تطابق كامل مع معايير البنك الدولي ومؤسسة التمويل الدولية IFC"
    ],
    "image": "/BG/Environment & Sustainability/Environmental Impact Studies & Strategic Assessments.jpg"
  },
  {
    "id": "srv-env-carbon",
    "code": "SBA-SRV-ENV09",
    "sector": "environmental",
    "categoryKey": "carbon-footprint",
    "categoryEn": "Carbon Footprint Assessment",
    "categoryAr": "دراسات البصمة الكربونية وتقارير الانبعاثات",
    "nameEn": "Corporate Greenhouse Gas (GHG) Accounting & Carbon Footprint Audits",
    "nameAr": "حساب البصمة الكربونية للمؤسسات والمنتجات ومحاسبة غازات الاحتباس الحراري",
    "descriptionEn": "Measuring Scope 1, 2, and 3 emissions conforming to the GHG Protocol and ISO 14064. Assisting exporters in complying with EU CBAM (Carbon Border Adjustment Mechanism).",
    "descriptionAr": "قياس انبعاثات غازات الاحتباس الحراري للنطاقات 1 و 2 و 3 وفق بروتوكول GHG ومعايير ISO 14064، وتأهيل الشركات المصدرة لمتطلبات ضريبة الكربون الأوروبية CBAM.",
    "scopeOfWorkEn": [
      "Organizational boundary setup and activity data inventory compilation",
      "Calculation of Scope 1 (direct), Scope 2 (electricity), and Scope 3 (value chain) CO₂e",
      "Product Carbon Footprint (PCF) lifecycle analysis from cradle to gate",
      "Decarbonization pathway roadmap, net-zero strategy, and carbon offset advisory"
    ],
    "scopeOfWorkAr": [
      "تحديد الحدود المؤسسية وحصر بيانات أنشطة استهلاك الوقود والكهرباء وسلاسل الإمداد",
      "حساب انبعاثات مكافئ ثاني أكسيد الكربون للنطاقات المباشرة وغير المباشرة",
      "حساب البصمة الكربونية للمنتج الفردي (PCF) لتلبية اشتراطات التصدير لأوروبا",
      "وضع خارطة طريق لخفض الانبعاثات وخطط التحول نحو الحياد الكربوني وشراء الشهادات الخضراء"
    ],
    "applicationsEn": [
      "Export Manufacturers",
      "Fertilizer & Steel Companies",
      "Textile Exporters",
      "Financial Institutions"
    ],
    "applicationsAr": [
      "المصانع المصدرة للأسواق الأوروبية",
      "مصانع الأسمدة والحديد والأسمنت",
      "مصانع الغزل والنسيج والملابس",
      "المؤسسات المالية والشركات المدرجة"
    ],
    "capabilitiesEn": [
      "ISO 14064 certified lead auditors",
      "Specialized GHG inventory databases",
      "Official EU CBAM reporting templates"
    ],
    "capabilitiesAr": [
      "مراجعون رئيسيون معتمدون في معايير ISO 14064",
      "قواعد بيانات معاملات الانبعاثات المعتمدة",
      "نماذج إعداد تقارير CBAM المعتمدة للمفوضية الأوروبية"
    ],
    "image": "/BG/Environment & Sustainability/Carbon Footprint & Greenhouse Gas Services.jpg"
  },
  {
    "id": "srv-env-emissions",
    "code": "SBA-SRV-ENV10",
    "sector": "environmental",
    "categoryKey": "emission-control",
    "categoryEn": "Emission Control Solutions",
    "categoryAr": "حلول التحكم في الانبعاثات والملوثات الصناعية",
    "nameEn": "Continuous Emission Monitoring Systems (CEMS) & Industrial Air Filtration",
    "nameAr": "أنظمة الرصد المستمر للانبعاثات (CEMS) وفلاتر تنقية المداخن الصناعية",
    "descriptionEn": "Engineering flue gas filtration and automated continuous emission monitoring networks connected to national environmental regulatory databases.",
    "descriptionAr": "تصميم وتوريد وتركيب أجهزة الرصد اللحظي المستمر لانبعاثات المداخن (CEMS) وشبكات الربط الإلكتروني، مع فلاتر الأكياس وأبراج المعالجة للتحكم في الملوثات.",
    "scopeOfWorkEn": [
      "Supply and calibration of extractive optical and laser gas analyzers (SO₂, NOₓ, CO, O₂, Dust)",
      "Pulse-jet baghouse dust collection systems and ceramic high-temperature filters",
      "Real-time telemetry interface connecting plant emissions directly to environmental ministries",
      "Periodic stack emission manual isokinetic compliance testing"
    ],
    "scopeOfWorkAr": [
      "توريد ومعايرة محللات الغازات البصرية والليزرية المستمرة لقياس الغازات والغبار بالمداخن",
      "تصميم وتركيب فلاتر الأكياس النبضية Baghouse ومصائد الغبار الصناعية",
      "إنشاء منظومة الربط الإلكتروني اللحظي ونقل البيانات مع غرف الرصد الحكومية",
      "إجراء القياسات والتحاليل الدورية للانبعاثات الغازية والجسيمات الصلبة"
    ],
    "applicationsEn": [
      "Power Stations",
      "Steel & Metallurgical Mills",
      "Chemical Processing",
      "Glass & Ceramic Factories"
    ],
    "applicationsAr": [
      "محطات توليد الكهرباء",
      "مصانع الحديد والصلب والمعادن",
      "الصناعات الكيماوية",
      "مصانع السيراميك والزجاج"
    ],
    "capabilitiesEn": [
      "EPA 40 CFR Part 60/75 compliance",
      "QAL1 certified analyzer brands",
      "24/7 technical field maintenance"
    ],
    "capabilitiesAr": [
      "مطابقة اشتراطات وكالة EPA والمعايير البيئية",
      "أجهزة تحليل معتمدة بشهادات QAL1 الأوروبية",
      "عقود صيانة ميدانية ودعم فني على مدار الساعة"
    ],
    "image": "/BG/Environment & Sustainability/Intelligent QHSE Application & Software Solutions.jpg"
  },
  {
    "id": "srv-env-sustainability",
    "code": "SBA-SRV-ENV11",
    "sector": "environmental",
    "categoryKey": "sustainability-consulting",
    "categoryEn": "Sustainability Consulting (SDGs)",
    "categoryAr": "استشارات الاستدامة وأهداف التنمية المستدامة",
    "nameEn": "Corporate Sustainability Strategies, ESG Frameworks & UN SDGs Alignment",
    "nameAr": "استراتيجيات الاستدامة المؤسسية وتقارير الإفصاح البيئي والمجتمعي (ESG)",
    "descriptionEn": "Guiding corporations in embedding Environmental, Social, and Governance (ESG) principles into operations, publishing GRI-standard sustainability reports, and achieving UN Global Goals.",
    "descriptionAr": "مساعدة الشركات والمؤسسات على دمج ممارسات الاستدامة والحوكمة البيئية والاجتماعية (ESG)، وإصدار تقارير الاستدامة الرسمية وفق معايير المبادرة العالمية للتقارير GRI.",
    "scopeOfWorkEn": [
      "Double materiality assessments identifying core sustainability risks and impacts",
      "GRI Standards & SASB aligned corporate sustainability reporting",
      "Gap analysis and implementation roadmap for UN Sustainable Development Goals (SDGs)",
      "ISO 14001 (Environmental) and ISO 50001 (Energy) corporate management system integration"
    ],
    "scopeOfWorkAr": [
      "دراسة الأهمية النسبية المزدوجة لتحديد المخاطر والفرص البيئية والمجتمعية للمؤسسة",
      "إعداد وتدقيق تقارير الاستدامة المؤسسية وفق معايير GRI و SASB",
      "تحليل الفجوات ووضع برامج التوافق مع أهداف التنمية المستدامة للأمم المتحدة SDGs",
      "تأهيل الشركات للحصول على شهادات الآيزو 14001 للبيئة و 50001 لإدارة الطاقة"
    ],
    "applicationsEn": [
      "Listed Corporations",
      "Banking & Investment Groups",
      "Multinational Enterprises",
      "Government Authorities"
    ],
    "applicationsAr": [
      "الشركات المدرجة في البورصة",
      "المصارف والمؤسسات التمويلية",
      "الشركات متعددة الجنسيات",
      "الجهات والمؤسسات الحكومية"
    ],
    "capabilitiesEn": [
      "GRI certified sustainability professionals",
      "Corporate ESG scoring models",
      "Executive workshop facilitation"
    ],
    "capabilitiesAr": [
      "استشاريون معتمدون من المبادرة العالمية للتقارير GRI",
      "نماذج تقييم الامتثال لمعايير ESG",
      "تقديم ورش عمل تدريبية للقيادات التنفيذية"
    ],
    "image": "/BG/Environment & Sustainability/Sustainable Development Advisory & UN Global Goals.jpg"
  },
  {
    "id": "srv-app-privatelabel",
    "code": "SBA-SRV-APP01",
    "sector": "apparel-services",
    "categoryKey": "private-label",
    "categoryEn": "Private Label Manufacturing",
    "categoryAr": "التصنيع لحساب العلامات التجارية الخاصة",
    "nameEn": "Turnkey Private Label Apparel Program for Global Fashion Brands",
    "nameAr": "برامج التصنيع الحصري للعلامات التجارية العالمية والمحلية",
    "descriptionEn": "Complete production execution under the client's own brand name. We transform fashion sketches and tech-packs into commercial export collections, managing labels, barcodes, and branded packaging.",
    "descriptionAr": "تنفيذ شامل للمجموعات والأزياء تحت الاسم التجاري للعميل بالكامل، من تحويل الرسومات الفنية والمخططات إلى منتجات جاهزة مع البطاقات والأزرار والتغليف المخصص.",
    "scopeOfWorkEn": [
      "Custom woven neck labels, care tags, and barcode hangtags development",
      "Exclusive color palette development and lab dip matching",
      "Strict confidentiality agreements protecting proprietary brand designs",
      "Consolidated multi-store retail carton packaging ready for immediate shelf placement"
    ],
    "scopeOfWorkAr": [
      "تصنيع بطاقات العلامة التجارية المنسوجة، بطاقات الغسيل وملصقات الباركود",
      "تطوير ألوان وصبغات حصرية للعميل مع اعتماد معملي لدرجات الألوان",
      "اتفاقيات سرية تامة لحماية التصميمات والموديلات الخاصة بالعلامة",
      "تعبئة وتغليف كرتوني مطابق للمقاييس اللوجستية للمتاجر وسلاسل التجزئة"
    ],
    "applicationsEn": [
      "Fashion Retail Chains",
      "E-Commerce Apparel Brands",
      "Department Stores",
      "Designer Boutiques"
    ],
    "applicationsAr": [
      "سلاسل متاجر الأزياء",
      "علامات الملابس عبر التجارة الإلكترونية",
      "المتاجر الكبرى متعددة الأقسام",
      "دور الأزياء والمصممون المستقلون"
    ],
    "capabilitiesEn": [
      "Dedicated account managers",
      "AQL 2.5 final inspection",
      "Flexible minimum order quantities per colorway"
    ],
    "capabilitiesAr": [
      "مدير حساب هندسي مخصص لكل عميل",
      "فحص جودة نهائي صارم بمعايير AQL 2.5",
      "مرونة في الحد الأدنى للكميات لكل تصميم ولون"
    ],
    "image": "/BG/Apparel Manufacturing/Private Label Manufacturing.jpg"
  },
  {
    "id": "srv-app-oem",
    "code": "SBA-SRV-APP02",
    "sector": "apparel-services",
    "categoryKey": "oem-manufacturing",
    "categoryEn": "OEM Manufacturing",
    "categoryAr": "التصنيع الأصلي للمعدات والملابس (OEM)",
    "nameEn": "Original Equipment Manufacturing (OEM) to Exact Technical Specifications",
    "nameAr": "التصنيع الأصلي المتطابق مع المواصفات الفنية للعميل (OEM)",
    "descriptionEn": "Contract manufacturing strictly following client-supplied technical specifications, tolerance measurements, fabric weights, stitch densities, and material compositions.",
    "descriptionAr": "تصنيع تعاقدي دقيق يعتمد كليًا على المواصفات الفنية والجداول القياسية المقدمة من العميل، ونسب التفاوت المقبولة، وأوزان الأنسجة وكثافة الغرز وخامات التصنيع.",
    "scopeOfWorkEn": [
      "Strict compliance with client tech packs, size charts, and sewing tolerances",
      "Fabric tensile, tear strength, and color fastness pre-production laboratory testing",
      "Automated CAD pattern cutting ensuring zero dimensional variance",
      "In-line needle detection and comprehensive quality inspection logs"
    ],
    "scopeOfWorkAr": [
      "التزام صارم بجداول المقاسات والمخططات الفنية ونسب التفاوت المسموحة",
      "فحوصات معملية لقوة الشد، مقاومة التمزق، وثبات الصباغة قبل بدء الإنتاج",
      "قص آلي بالكمبيوتر CAD يضمن انعدام أي فروق بين أجزاء الباترون",
      "فحص إلكتروني بمكاشف الإبر وتوثيق كامل لسجلات فحص الجودة أثناء الخياطة"
    ],
    "applicationsEn": [
      "Global Brand Licensees",
      "Corporate Uniform Contracts",
      "Institutional Workwear",
      "Sporting Leagues"
    ],
    "applicationsAr": [
      "الوكلاء المعتمدون للماركات العالمية",
      "عقود الزي الموحد للمؤسسات الكبرى",
      "ملابس العمل الصناعية المتخصصة",
      "الأندية والاتحادات الرياضية"
    ],
    "capabilitiesEn": [
      "Daily capacity exceeding 15,000 units",
      "Multi-stage QA checkpoints",
      "Certified ISO 9001 quality management"
    ],
    "capabilitiesAr": [
      "طاقة إنتاجية يومية تتجاوز 15,000 قطعة",
      "نقاط تفتيش جودة متتابعة في كل مرحلة إنتاج",
      "نظام إدارة جودة معتمد بشهادة ISO 9001:2015"
    ],
    "image": "/BG/Apparel Manufacturing/Ready-Made Garment Manufacturing.jpg"
  },
  {
    "id": "srv-app-fob",
    "code": "SBA-SRV-APP03",
    "sector": "apparel-services",
    "categoryKey": "fob-manufacturing",
    "categoryEn": "FOB Manufacturing",
    "categoryAr": "التصنيع الشامل بنظام FOB",
    "nameEn": "Full Package & FOB Export Garment Manufacturing Programs",
    "nameAr": "برامج التصنيع الشامل بنظام FOB والتسليم على ظهر السفينة بالموانئ",
    "descriptionEn": "Complete end-to-end manufacturing package covering all raw materials, accessories, manufacturing labor, packaging, inland logistics, and port customs clearance on FOB terms.",
    "descriptionAr": "حزمة تصنيع وتصدير شاملة تغطي كافة الخامات، الإكسسوارات، تكاليف التشغيل والخياطة، التعبئة والتغليف، النقل الداخلي والتخليص الجمركي بموانئ الشحن بنظام FOB.",
    "scopeOfWorkEn": [
      "All-inclusive unit pricing covering yarns, fabrics, buttons, zippers, and trims",
      "Handling export documentation, Certificate of Origin (COO), and EUR.1 certifications",
      "Container stuffing, palletization, and insured bonded transport to Egyptian seaports",
      "FOB delivery to Alexandria, Port Said, Damietta, or Sokhna ports"
    ],
    "scopeOfWorkAr": [
      "تسعير شامل للقطعة يتضمن الأقمشة، الأزرار، السحابات، الحشوات وتكاليف الحياكة",
      "إصدار المستندات الرسمية للتصدير: شهادة المنشأ، الفواتير الموثقة وشهادات اليورو 1",
      "تحميل الحاويات ورص الطبالي والنقل المؤمن إلى الموانئ البحرية والجوية",
      "تسليم البضائع على ظهر السفينة بموانئ الإسكندرية، بورسعيد، دمياط، أو السخنة"
    ],
    "applicationsEn": [
      "International Importers",
      "Global Sourcing Agencies",
      "Wholesale Distributors",
      "Trading Houses"
    ],
    "applicationsAr": [
      "المستوردون الدوليون",
      "وكالات التوريد والمكاتب العالمية",
      "شركات التوزيع والجملة الكبرى",
      "بيوت التجارة الدولية"
    ],
    "capabilitiesEn": [
      "Experienced customs export division",
      "Direct sea shipping access to Europe & US",
      "Trade agreement duty-free access (Agadir, EU, COMESA)"
    ],
    "capabilitiesAr": [
      "قسم تخليص جمركي وتصدير خبير",
      "قرب خطوط الشحن البحري لأوروبا وأمريكا",
      "استفادة من اتفاقيات الإعفاء الجمركي (أغادير، الشراكة الأوروبية، والكوميسا)"
    ],
    "image": "/BG/Apparel Manufacturing/FOB Manufacturing Programs.jpg"
  },
  {
    "id": "srv-app-contract",
    "code": "SBA-SRV-APP04",
    "sector": "apparel-services",
    "categoryKey": "contract-manufacturing",
    "categoryEn": "Contract Manufacturing",
    "categoryAr": "التصنيع التعاقدي للمجموعات الكبرى",
    "nameEn": "High-Volume Contract Manufacturing & Industrial Cut-Make-Trim (CMT)",
    "nameAr": "التصنيع التعاقدي والتشغيل للغير (CMT) للطاقات الإنتاجية الكبرى",
    "descriptionEn": "Providing industrial production line capacity for global retail brands and corporate buyers. Offers pure Cut-Make-Trim (CMT) or partial-supply contract models.",
    "descriptionAr": "توفير خطوط إنتاجية متخصصة ومكثفة لتشغيل وتنفيذ طلبيات الملابس الكبرى بنظام القص والخياطة والتشطيب (CMT) للمجموعات والمصانع الشريكة.",
    "scopeOfWorkEn": [
      "Automated spreading and computer-controlled precision cutting",
      "Multi-needle specialized assembly line sewing",
      "Automated buttonholing, bar-tacking, and snap fastening",
      "Steam tunnel pressing, final folding, and bulk carton packing"
    ],
    "scopeOfWorkAr": [
      "فرد الأقمشة آليًا والقص الدقيق عبر مقصات التحكم الرقمي بالكمبيوتر",
      "حياكة تجميعية متخصصة عبر خطوط إنتاج متوازية عالية السرعة",
      "فتح العراوي، تركيب الأزرار، والكباسين عبر ماكينات أوتوماتيكية",
      "كي بالبخار في أنفاق الكي الحراري، والطي والتعبئة الكرتونية للكميات الكبيرة"
    ],
    "applicationsEn": [
      "Mass Retailers",
      "High-Volume Fast Fashion Labels",
      "Industrial Garment Partners",
      "Seasonal Campaign Orders"
    ],
    "applicationsAr": [
      "سلاسل التجزئة الضخمة",
      "علامات الأزياء السريعة عالية الطلب",
      "مصانع الملابس الكبرى",
      "طلبيات الحملات والمواسم السنوية"
    ],
    "capabilitiesEn": [
      "Over 25 dedicated production lines",
      "High on-time delivery record (> 98%)",
      "Continuous worker skill upgrading"
    ],
    "capabilitiesAr": [
      "أكثر من 25 خط إنتاج متخصص",
      "سجل التزام بالمواعيد يتجاوز 98%",
      "تدريب مستمر للكوادر الفنية على أحدث تقنيات التشغيل"
    ],
    "image": "/BG/Apparel Manufacturing/Specialized Production Lines.jpg"
  },
  {
    "id": "srv-app-product-dev",
    "code": "SBA-SRV-APP05",
    "sector": "apparel-services",
    "categoryKey": "product-development",
    "categoryEn": "Product Development",
    "categoryAr": "تطوير المنتجات وتصميم العينات والباترون",
    "nameEn": "Apparel Product Design, CAD Pattern Grading & Proto Sampling",
    "nameAr": "تصميم الأزياء وتطوير الباترونات الرقمية CAD وتنفيذ العينات الأولية",
    "descriptionEn": "Turning client concepts into production-ready apparel. Our creative studio develops CAD pattern grading, 3D digital fit visualization, and rapid turnaround physical prototypes.",
    "descriptionAr": "تحويل أفكار وتصميمات العميل إلى عينات حقيقية جاهزة للإنتاج الصناعي، من خلال رسم الباترونات الرقمية ببرامج CAD والمحاكاة ثلاثية الأبعاد وعينات الاعتماد.",
    "scopeOfWorkEn": [
      "Gerber / Lectra CAD digital pattern creation, grading across all size charts",
      "Virtual 3D digital garment sampling for fit and drape review prior to fabric cutting",
      "Physical pre-production prototype sample delivery within 7-10 business days",
      "Bill of Materials (BOM) compilation, costing optimization, and fabric consumption calculation"
    ],
    "scopeOfWorkAr": [
      "رسم وتدريج الباترونات الرقمية ببرامج Gerber و Lectra لمختلف المقاسات",
      "المحاكاة ثلاثية الأبعاد 3D للتصميم والتأكد من انسيابية القَصّة قبل قص القماش",
      "تنفيذ وتسليم العينات الأولية الفعلية للمعاينة خلال 7-10 أيام عمل",
      "إعداد جداول المواد والمستهلكات BOM وحساب الاستهلاك لتقليل تكلفة القطعة"
    ],
    "applicationsEn": [
      "Fashion Designers",
      "Startup Clothing Brands",
      "Corporate Buyers",
      "Retail Category Managers"
    ],
    "applicationsAr": [
      "مصممو الأزياء",
      "العلامات التجارية الناشئة",
      "مسؤولو المشتريات بالشركات",
      "مديرو فئات المنتجات بسلاسل المتاجر"
    ],
    "capabilitiesEn": [
      "Dedicated sample room workshop",
      "Advanced 3D Clo3D / Optitex simulation",
      "Expert pattern engineers"
    ],
    "capabilitiesAr": [
      "غرفة عينات وورشة نمذجة منفصلة تمامًا",
      "أنظمة محاكاة ثلاثية الأبعاد متقدمة",
      "مهندسو باترون ذوو خبرة تزيد عن 20 عامًا"
    ],
    "image": "/BG/Apparel Manufacturing/Product Development & Sampling.jpg"
  },
  {
    "id": "srv-app-sourcing",
    "code": "SBA-SRV-APP06",
    "sector": "apparel-services",
    "categoryKey": "fabric-sourcing",
    "categoryEn": "Fabric Sourcing",
    "categoryAr": "توريد وفحص الأقمشة والخامات الممتازة",
    "nameEn": "Certified Fabric Sourcing & Raw Material Quality Verification",
    "nameAr": "توريد وانتقاء الأقمشة الفاخرة والفحص المعملي للمواد الخام",
    "descriptionEn": "Procuring premier long-staple Egyptian cotton knits, imported performance fabrics, and specialized trims from certified sustainable mills worldwide.",
    "descriptionAr": "توريد واختيار أجود أقمشة القطن المصري طويل التيلة، الخامات التقنية المستوردة، والإكسسوارات الفاخرة من مصانع ومغازل معتمدة ومطابقة للاستدامة.",
    "scopeOfWorkEn": [
      "Sourcing 100% Giza Egyptian cotton yarns (Giza 86, 92, 94)",
      "Global procurement of specialty synthetics, recycled polyester, modal, and elastane blends",
      "Laboratory testing for GSM, color fastness, yarn count, and zero harmful substances",
      "Certified organic and BCI (Better Cotton Initiative) chain of custody tracking"
    ],
    "scopeOfWorkAr": [
      "توريد خيوط وأقمشة قطن جيزة المصري الأصيل 100% (أصناف جيزة 86، 92، 94)",
      "استيراد الخامات التخصصية: بوليستر معاد تدويره، مودال، سباندكس وخامات رياضية",
      "الفحص المعملي لوزن القماش GSM، ثبات الألوان، نمرة الخيط، وخلوها من المواد الضارة",
      "شهادات تتبع للقطن العضوي المعتمد ومبادرة Better Cotton Initiative (BCI)"
    ],
    "applicationsEn": [
      "Premium Fashion Brands",
      "Sustainable Eco-Labels",
      "Industrial Fabric Buyers",
      "Uniform Manufacturers"
    ],
    "applicationsAr": [
      "علامات الأزياء الفاخرة",
      "الماركات الصديقة للبيئة",
      "مشتري الأقمشة بالجملة",
      "مصانع الزي الموحد"
    ],
    "capabilitiesEn": [
      "Direct partnerships with premier textile spinning mills",
      "In-house physical testing lab",
      "Extensive physical fabric swatch library"
    ],
    "capabilitiesAr": [
      "شراكات مباشرة مع كبرى المغازل والنسيج",
      "معمل فحص فيزيائي داخلي للأقمشة",
      "مكتبة عينات أقمشة تضم آلاف الخامات المتنوعة"
    ],
    "image": "/BG/Apparel Manufacturing/Manufacturing Infrastructure.jpg"
  },
  {
    "id": "srv-app-dyeing",
    "code": "SBA-SRV-APP07",
    "sector": "apparel-services",
    "categoryKey": "fabric-dyeing",
    "categoryEn": "Fabric Dyeing",
    "categoryAr": "صباغة الأقمشة والغزول والتشطيب المعملي",
    "nameEn": "Eco-Friendly Fabric & Yarn Dyeing, Printing & Specialized Finishing",
    "nameAr": "الصباغة الآلية للأقمشة والغزول والتشطيبات المعملية الصديقة للبيئة",
    "descriptionEn": "Advanced industrial dyeing house utilizing low-liquor jet dyeing machines, spectrophotometer computerized color matching, and OEKO-TEX certified reactive dyes.",
    "descriptionAr": "مصبغة صناعية متطورة تعتمد على ماكينات الصباغة النفاثة منخفضة استهلاك المياه، والمطابقة الآلية للألوان بالكمبيوتر Spectrophotometer، مع أصباغ تفاعلية آمنة.",
    "scopeOfWorkEn": [
      "Computerized color formulation and 24-hour lab dip turnaround with Delta-E < 0.8 tolerance",
      "Reactive piece dyeing and yarn hank dyeing with Grade 4-5 color fastness to washing",
      "Specialty functional finishing: antibacterial, Teflon water-repellent, bio-polishing",
      "Full closed-loop industrial wastewater treatment conforming to national discharge norms"
    ],
    "scopeOfWorkAr": [
      "مطابقة ألوان رقمية وإصدار عينات الصباغة المعملية بدقة انحراف Delta-E < 0.8",
      "صباغة تفاعلية للأقمشة والغزول بثبات لون عالي (درجة 4-5 للغسيل والاحتكاك)",
      "تشطيبات وظيفية خاصة: معالجة ضد البكتيريا، معالجة تيفلون طاردة للماء، وغسيل إنزيمي",
      "معالجة متكاملة لمياه الصرف الصناعي للمصبغة وفق أعلى الاشتراطات البيئية"
    ],
    "applicationsEn": [
      "Garment Manufacturers",
      "Textile Converters",
      "Yarn Importers",
      "Home Textile Companies"
    ],
    "applicationsAr": [
      "مصانع الملابس الجاهزة",
      "تجار ومحولو الأقمشة",
      "مستوردو الغزول",
      "مصانع المفروشات المنزلية"
    ],
    "capabilitiesEn": [
      "DataColor spectrophotometers",
      "Soft-flow jet dyeing vessels",
      "OEKO-TEX Standard 100 compliance"
    ],
    "capabilitiesAr": [
      "أجهزة DataColor لقياس الألوان",
      "غلايات صباغة سوفت فلو نفاثة تحافظ على نعومة القماش",
      "مطابقة لمعايير OEKO-TEX 100 الدولية"
    ],
    "image": "/BG/Apparel Manufacturing/Textile Mill & Internal Dyeing.jpg"
  },
  {
    "id": "srv-app-planning",
    "code": "SBA-SRV-APP08",
    "sector": "apparel-services",
    "categoryKey": "production-planning",
    "categoryEn": "Production Planning",
    "categoryAr": "تخطيط وجدولة خطوط الإنتاج والقص الآلي",
    "nameEn": "Industrial Production Planning, Line Balancing & Supply Chain Coordination",
    "nameAr": "تخطيط وموازنة خطوط الإنتاج وإدارة الإمداد اللوجستي للمصانع",
    "descriptionEn": "Optimizing apparel production through advanced ERP enterprise planning, capacity scheduling, line balancing, and lean manufacturing methodologies.",
    "descriptionAr": "إدارة وتخطيط الطاقة الإنتاجية عبر أنظمة ERP المتطورة، وموازنة مسارات خطوط الخياطة، وتطبيق أساليب التصنيع الرشيق Lean Manufacturing لضمان أعلى إنتاجية.",
    "scopeOfWorkEn": [
      "Capacity reservation and production critical path scheduling (Gantt tracking)",
      "Scientific standard allowed minute (SAM) calculation for each garment operation",
      "Line balancing reducing bottlenecks and elevating throughput efficiency",
      "Real-time digital production monitoring on factory floor tracking hourly output"
    ],
    "scopeOfWorkAr": [
      "حجز الطاقات الإنتاجية وجدولة المسار الحرج للطلبيات عبر برامج التخطيط",
      "حساب الوقت القياسي المعياري (SAM) لكل عملية حياكة وتشطيب بدقة",
      "موازنة خطوط الإنتاج لمنع التراكم والاختناقات ورفع الكفاءة التشغيلية",
      "شاشات رصد رقمية حية داخل صالات الإنتاج لتتبع الإنتاجية بالساعة"
    ],
    "applicationsEn": [
      "Multi-Store Retail Programs",
      "Export Contract Orders",
      "Supply Chain Planners",
      "Sourcing Directors"
    ],
    "applicationsAr": [
      "برامج التوريد لمتاجر التجزئة الكبرى",
      "عقود التصدير الخارجية",
      "مخططو سلاسل الإمداد",
      "مديرو المشتريات والتوريد"
    ],
    "capabilitiesEn": [
      "ERP apparel software modules",
      "Industrial engineering team",
      "Just-in-time (JIT) material delivery"
    ],
    "capabilitiesAr": [
      "برمجيات متخصصة لإدارة مصانع الملابس ERP",
      "فريق هندسة صناعية متخصص",
      "إمداد لوجستي فوري للمواد الخام Just-in-Time"
    ],
    "image": "/BG/Apparel Manufacturing/Production Volume & Scale.jpg"
  },
  {
    "id": "srv-app-qc",
    "code": "SBA-SRV-APP09",
    "sector": "apparel-services",
    "categoryKey": "quality-control",
    "categoryEn": "Quality Control",
    "categoryAr": "مراقبة وفحص الجودة بمقاييس AQL الدولية",
    "nameEn": "Rigorous Garment Quality Assurance & Multi-Stage AQL Inspection",
    "nameAr": "برامج ضبط ومراقبة الجودة الشاملة للملابس بمقاييس AQL الدولية",
    "descriptionEn": "Independent multi-stage garment quality inspections ensuring zero defects reach the export carton. Conducted under ISO 2859-1 (AQL 1.5/2.5) statistical standards.",
    "descriptionAr": "منظومة فحص ورقابة جودة متعددة المراحل تضمن خلو الشحنات المصدرة من أي عيوب، وفق مقاييس الفحص الإحصائي الدولي ISO 2859-1 (معايير AQL 1.5 و AQL 2.5).",
    "scopeOfWorkEn": [
      "Pre-production raw fabric inspection on 4-point light tables (grading defect points)",
      "In-line inspections checking seam alignment, stitch tension, and dimensional tolerances",
      "100% metal and broken needle detection with digital logging",
      "Pre-shipment final random inspection (FRI) with comprehensive photo audit reports"
    ],
    "scopeOfWorkAr": [
      "فحص أثواب القماش الواردة على طاولات الإضاءة بنظام النقاط الأربع (4-Point System)",
      "فحص أثناء مراحل التشغيل لسلامة الخياطة، استقامة الغرز ومطابقة المقاسات",
      "فحص كامل بنسبة 100% بأجهزة الكشف عن المعادن والإبر المكسورة",
      "فحص عشوائي نهائي معتمد قبل الشحن (FRI) مع تقارير مصورة مفصلة للعميل"
    ],
    "applicationsEn": [
      "Global Fashion Labels",
      "Quality Audit Firms",
      "Retail Importers",
      "Department Stores"
    ],
    "applicationsAr": [
      "العلامات التجارية العالمية",
      "شركات التدقيق والتفتيش الدولية",
      "المستوردون وتجار التجزئة",
      "سلاسل المتاجر الفاخرة"
    ],
    "capabilitiesEn": [
      "Full-time certified QA inspectors",
      "Calibrated pull-test and wash-test equipment",
      "Zero tolerance for safety non-compliance"
    ],
    "capabilitiesAr": [
      "فريق مفتشي جودة متفرغ ومعتمد",
      "أجهزة اختبار قوة شد الأزرار والغسيل المعملي",
      "صفر تسامح مع أي مخالفات لشروط السلامة"
    ],
    "image": "/BG/Apparel Manufacturing/Rigorous Quality Assurance.jpg"
  },
  {
    "id": "srv-ind-water-integrated",
    "code": "SBA-SRV-IND01",
    "sector": "industrial-solutions",
    "categoryKey": "integrated-water-treatment",
    "categoryEn": "Integrated Water Treatment Solutions",
    "categoryAr": "حلول محطات معالجة المياه المتكاملة",
    "nameEn": "Turnkey Industrial & Municipal Water Treatment Plants (Design, EPC & Commissioning)",
    "nameAr": "تصميم وتنفيذ محطات معالجة المياه الصناعية والبلدية المتكاملة (EPC)",
    "descriptionEn": "Complete engineering design, procurement, civil construction, and commissioning of integrated water clarification, softening, and tertiary purification plants.",
    "descriptionAr": "تصميم وهندسة وإنشاء وتشغيل محطات معالجة وتنقية المياه المتكاملة، تشمل الترويب والترسيب، إزالة عسر المياه، والترشيح الدقيق والتطهير للمنشآت الصناعية والمدن.",
    "scopeOfWorkEn": [
      "Raw water source chemical profiling and process flow diagram (PFD/P&ID) engineering",
      "Civil basin construction: clarifiers, flocculation tanks, and filtered water reservoirs",
      "Mechanical and electrical equipment procurement, piping headers, and automation",
      "Plant commissioning, operator training, and performance guarantee testing"
    ],
    "scopeOfWorkAr": [
      "التحليل الكيميائي لمصدر المياه الخام وإعداد المخططات الهندسية P&ID ومسارات المعالجة",
      "تنفيذ الأعمال المدنية للأحواض: أحواض الترويب والندف، المروقات وخزانات المياه المعالجة",
      "توريد وتركيب المعدات الميكانيكية والكهربائية وشبكات المواسير ومحابس التحكم",
      "التشغيل التجريبي وضبط جودة المياه وتدريب الكوادر وتسليم شهادات الضمان"
    ],
    "applicationsEn": [
      "Municipal Water Authorities",
      "Heavy Industrial Plants",
      "Power Stations",
      "Pharmaceutical Campuses"
    ],
    "applicationsAr": [
      "شركات ومحطات مياه الشرب",
      "المجمعات الصناعية الكبرى",
      "محطات توليد الطاقة",
      "مصانع الأدوية والمستحضرات"
    ],
    "capabilitiesEn": [
      "Experienced process engineers",
      "Hydraulic simulation modeling",
      "Turnkey performance warranties"
    ],
    "capabilitiesAr": [
      "مهندسو كيمياء ومعالجة مياه ذوو خبرة دولية",
      "نمذجة محاكاة هيدروليكية متطورة",
      "ضمانات أداء معتمدة لمواصفات المياه الخارجة"
    ],
    "image": "/BG/Environment & Sustainability/Water & Wastewater Sector.jpg",
    "linkedProductId": "prod-ind-treatment"
  },
  {
    "id": "srv-ind-filtration-design",
    "code": "SBA-SRV-IND02",
    "sector": "industrial-solutions",
    "categoryKey": "filtration-design",
    "categoryEn": "Water Filtration System Design",
    "categoryAr": "تصميم وهندسة أنظمة فلترة المياه الصناعية",
    "nameEn": "Custom Industrial Filtration System Engineering & Membrane System Sizing",
    "nameAr": "تصميم وهندسة أنظمة الفلترة الصناعية وتحديد مقاسات الأغشية",
    "descriptionEn": "Custom engineering design of high-throughput industrial filtration systems: ultrafiltration (UF), nano-filtration (NF), and customized multi-media pressure banks.",
    "descriptionAr": "دراسة وتصميم أنظمة الفلترة والترشيح الصناعي المخصصة، وحساب مساحات وسعات أغشية الترشيح الفائق (UF) والنانو والترشيح الرملي المتعدد وفق نوعية المياه.",
    "scopeOfWorkEn": [
      "Silt Density Index (SDI) and turbidity loading rate calculations",
      "Hydraulic design of header pipe manifolds, valve skids, and backwash pumping",
      "Selection of specialized media: catalytic iron/manganese removal, granular carbon",
      "PLC automated backwash sequence programming and pressure differential alarms"
    ],
    "scopeOfWorkAr": [
      "حسابات مؤشر كثافة الطمي (SDI) ومعدلات إزالة العكارة والجسيمات العالقة",
      "التصميم الهيدروليكي لمجمعات المواسير والصمامات ومضخات الغسيل العكسي",
      "اختيار وسائط الترشيح التخصصية: رمال الكوارتز، الكربون النشط، ووسائط إزالة الحديد والمنجنيز",
      "برمجة دورات الغسيل العكسي الأوتوماتيكية بنظام PLC ومراقبة فرق الضغط"
    ],
    "applicationsEn": [
      "Food & Beverage Plants",
      "Textile Processing",
      "Agricultural Micro-Irrigation",
      "Pre-RO Treatment"
    ],
    "applicationsAr": [
      "مصانع الأغذية والمشروبات",
      "مصانع النسيج والصباغة",
      "أنظمة الري الحديث بالمزارع",
      "مراحل الفلترة التمهيدية قبل محطات التحلية RO"
    ],
    "capabilitiesEn": [
      "Membrane projection software calculations",
      "Modular skid 3D CAD modeling",
      "High recovery engineering"
    ],
    "capabilitiesAr": [
      "حسابات برمجية دقيقة لمصنعي الأغشية العالمية",
      "تصميم ثلاثي الأبعاد CAD للشاسيهات والمواسير",
      "تحقيق أعلى نسب استرداد للمياه"
    ],
    "image": "/BG/Environment & Sustainability/Development & Construction Sector.jpg",
    "linkedProductId": "prod-ind-filtration"
  },
  {
    "id": "srv-ind-integration",
    "code": "SBA-SRV-IND03",
    "sector": "industrial-solutions",
    "categoryKey": "system-integration",
    "categoryEn": "Industrial System Integration",
    "categoryAr": "تكامل الأنظمة والتحكم الصناعي",
    "nameEn": "PLC/SCADA Automation, Control Panel Assembly & Industrial System Integration",
    "nameAr": "تكامل الأنظمة وبرمجة PLC/SCADA وتجميع لوحات التحكم الصناعي",
    "descriptionEn": "Integrating plant machinery, instrumentation, pumps, and valves into unified automated control architectures utilizing Siemens, Schneider, and Allen-Bradley systems.",
    "descriptionAr": "ربط وتكامل المعدات وخطوط الإنتاج والمضخات ومحابس التحكم في منظومة آلية ذكية وموحدة عبر برمجة وحدات التحكم PLC وشاشات المراقبة والتحكم SCADA.",
    "scopeOfWorkEn": [
      "Functional control philosophy specification and I/O point schedule development",
      "Custom electrical control panel design, assembly, and testing (VFD, soft starters, MCC)",
      "PLC program coding, HMI touch screen interface design, and SCADA graphics",
      "Industrial Ethernet, Modbus TCP, and Profinet communication network integration"
    ],
    "scopeOfWorkAr": [
      "إعداد فلسفة التحكم والتشغيل وجداول نقاط الدخل والخرج I/O Schedule",
      "تصميم وتجميع واختبار لوحات التحكم الكهربائي (MCC) ومغيرات السرعة VFD",
      "برمجة أجهزة PLC وتصميم واجهات الشاشات اللمسية HMI ورسوم المراقبة SCADA",
      "تأسيس شبكات الاتصال الصناعية Ethernet IP و Profinet و Modbus"
    ],
    "applicationsEn": [
      "Automated Process Factories",
      "Water Treatment Facilities",
      "Pumping Stations",
      "Material Handling"
    ],
    "applicationsAr": [
      "المصانع وخطوط الإنتاج الآلية",
      "محطات معالجة المياه والصرف",
      "محطات الرفع والضخ الكبرى",
      "أنظمة مناولة ونقل المواد"
    ],
    "capabilitiesEn": [
      "Certified Siemens & Schneider automation engineers",
      "Factory acceptance testing (FAT) rigs",
      "Remote telemetry support"
    ],
    "capabilitiesAr": [
      "مهندسو تحكم آلي معتمدون من شنايدر وسيمنز",
      "إجراء اختبارات القبول المصنعي FAT قبل الشحن",
      "دعم فني وبرمجة عن بُعد عبر خوادم آمنة"
    ],
    "image": "/BG/Environment & Sustainability/IoT Environmental Monitoring System.jpg"
  },
  {
    "id": "srv-ind-smart-monitoring",
    "code": "SBA-SRV-IND04",
    "sector": "industrial-solutions",
    "categoryKey": "smart-monitoring",
    "categoryEn": "Smart Monitoring Solutions",
    "categoryAr": "حلول المراقبة والقياس الذكي والتحكم عن بعد",
    "nameEn": "IoT-Powered Remote Sensor Monitoring & Cloud Environmental Dashboards",
    "nameAr": "حلول المراقبة الذكية بإنترنت الأشياء (IoT) ولوحات المتابعة السحابية",
    "descriptionEn": "End-to-end telemetry solutions streaming live flow, water quality, tank level, and energy data from remote field sites to centralized management dashboards.",
    "descriptionAr": "منظومات ذكية لنقل وقراءة بيانات حساسات المنسوب والتدفق وجودة المياه واستهلاك الطاقة لحظيًا من المواقع البعيدة إلى لوحات تحكم سحابية عبر تقنيات IoT.",
    "scopeOfWorkEn": [
      "Supply and field installation of solar-powered IoT cellular remote terminal units (RTUs)",
      "Integration with level, pressure, flow, and chemical water quality sensors",
      "Secure cloud server database hosting and custom web dashboard visualization",
      "Automated SMS/Email alert triggers on parameter exceedances and predictive analytics"
    ],
    "scopeOfWorkAr": [
      "توريد وتركيب وحدات RTU الذكية التي تعمل بالطاقة الشمسية وشبكات 4G/NB-IoT",
      "ربط وتوصيل حساسات المنسوب والضغط والتدفق ومحللات المياه الرقمية",
      "استضافة البيانات على خوادم سحابية آمنة وعرضها في لوحات تحكم تفاعلية",
      "إرسال تنبيهات فورية عبر الرسائل القصيرة والبريد عند تجاوز المعدلات الآمنة"
    ],
    "applicationsEn": [
      "Groundwater Wells",
      "Municipal Distribution Networks",
      "Industrial Environmental Compliance",
      "Tank Farms"
    ],
    "applicationsAr": [
      "آبار المياه الجوفية",
      "شبكات التوزيع والخطوط الناقلة",
      "المراقبة البيئية لمصارف المصانع",
      "مستودعات وخزانات المواد السائلة"
    ],
    "capabilitiesEn": [
      "Custom cloud dashboard development",
      "Low-power battery IoT devices",
      "API export to client ERP"
    ],
    "capabilitiesAr": [
      "تطوير لوحات تحكم سحابية مخصصة للعميل",
      "أجهزة استشعار منخفضة الاستهلاك تعمل لسنوات بالبطارية",
      "ربط مباشر عبر API مع أنظمة إدارة المنشأة"
    ],
    "image": "/BG/Environment & Sustainability/Intelligent QHSE Application & Software Solutions.jpg",
    "linkedProductId": "prod-ind-ultrasonic"
  },
  {
    "id": "srv-ind-consulting",
    "code": "SBA-SRV-IND05",
    "sector": "industrial-solutions",
    "categoryKey": "technical-consulting",
    "categoryEn": "Technical Consulting",
    "categoryAr": "الاستشارات الفنية والهندسية الصناعية",
    "nameEn": "Process Optimization, Energy Auditing & Industrial Engineering Advisory",
    "nameAr": "الاستشارات الهندسية وتحسين كفاءة العمليات وترشيد الطاقة الصناعية",
    "descriptionEn": "Expert engineering reviews evaluating industrial plant performance, water reuse feasibility, energy conservation measures, and mechanical equipment troubleshooting.",
    "descriptionAr": "دراسات واستشارات هندسية متخصصة لتقييم كفاءة تشغيل المصانع، دراسات جدوى إعادة تدوير المياه، ترشيد استهلاك الطاقة وفحص الأعطال الميكانيكية المعقدة.",
    "scopeOfWorkEn": [
      "Comprehensive industrial water balance and zero-liquid-discharge (ZLD) feasibility studies",
      "Thermal and electrical energy audits identifying high-loss equipment and ROI savings",
      "Troubleshooting recurring membrane fouling, scaling, and pump cavitation issues",
      "Drafting equipment technical specifications and commercial vendor bid evaluation"
    ],
    "scopeOfWorkAr": [
      "دراسات الاتزان المائي الشاملة وجدوى إعادة التدوير الكامل للمياه (ZLD) بالمصانع",
      "تدقيق استهلاك الطاقة الحرارية والكهربائية وحساب فترات استرداد الاستثمار",
      "تشخيص ومعالجة مشاكل انسداد الأغشية وترسبات الأملاح وتكويف المضخات",
      "إعداد دفاتر الشروط والمواصفات الفنية وتقييم العروض الفنية للموردين"
    ],
    "applicationsEn": [
      "Heavy Manufacturing Facilities",
      "Textile Mills",
      "Food Processing",
      "Chemical Industries"
    ],
    "applicationsAr": [
      "المصانع الثقيلة والكيماوية",
      "مصانع النسيج والصباغة",
      "مصانع الأغذية والمشروبات",
      "المنشآت الصناعية الكبرى"
    ],
    "capabilitiesEn": [
      "Senior chartered engineering consultants",
      "Thermal imaging & power quality analyzers",
      "Unbiased vendor-neutral advisory"
    ],
    "capabilitiesAr": [
      "استشاريون وخبراء هندسيون مسجلون بنقابة المهندسين",
      "أجهزة تصوير حراري ومحللات جودة القدرة الكهربائية",
      "رأي استشاري فني حيادي مستقل يضمن مصلحة العميل"
    ],
    "image": "/BG/Environment & Sustainability/Environmental Economic Studies & Policy Advisory.jpg"
  },
  {
    "id": "srv-ind-installation",
    "code": "SBA-SRV-IND06",
    "sector": "industrial-solutions",
    "categoryKey": "installation-commissioning",
    "categoryEn": "Equipment Installation & Commissioning",
    "categoryAr": "التركيب والتشغيل التجريبي للمعدات",
    "nameEn": "Turnkey Mechanical Installation, Alignment, Rigging & Plant Commissioning",
    "nameAr": "التركيبات الميكانيكية الدقيقة، التثبيت والتشغيل التجريبي للمعدات",
    "descriptionEn": "Professional field rigging, laser alignment, high-pressure piping installation, and site acceptance testing (SAT) for industrial pumps, skids, and equipment.",
    "descriptionAr": "خدمات التوريد والتركيب الميكانيكي في الموقع، ضبط المحاذاة بالليزر، مد وربط شبكات المواسير عالية الضغط، والتشغيل التجريبي واختبارات القبول الموقع SAT.",
    "scopeOfWorkEn": [
      "Heavy equipment rigging, placement, and precision foundation grouting",
      "Laser shaft alignment between pumps, gearboxes, and electric motors",
      "Stainless steel, carbon steel, and HDPE process piping installation and pressure testing",
      "Pre-commissioning hydraulic testing, chemical flushing, and Site Acceptance Testing (SAT)"
    ],
    "scopeOfWorkAr": [
      "أعمال التنزيل والرفع الثقيل للمعدات والتثبيت على القواعد بالخلطات الإيبوكسية",
      "ضبط محاذاة أعمدة الدوران بين المضخات والمحركات الكهربائية بأشعة الليزر",
      "تركيب ولحام خطوط المواسير ستانلس ستيل وبولي إيثيلين HDPE واختبارات الضغط",
      "الغسيل الكيميائي والهيدروليكي للمواسير واختبارات القبول والتشغيل النهائي SAT"
    ],
    "applicationsEn": [
      "New Industrial Plants",
      "Facility Expansion Projects",
      "Equipment Modernization",
      "Pumping Stations"
    ],
    "applicationsAr": [
      "المصانع والمحطات الجديدة",
      "مشروعات توسعات المنشآت القائمة",
      "تحديث وتطوير المعدات",
      "محطات الضخ والرفع"
    ],
    "capabilitiesEn": [
      "Certified industrial millwrights & coded welders",
      "Laser alignment tools",
      "Strict HSE site compliance"
    ],
    "capabilitiesAr": [
      "فنيو تركيبات ميكانيكية ولحامون معتمدون",
      "أجهزة ضبط اتزان ومحاذاة ليزرية دقيقة",
      "التزام صارم باشتراطات السلامة والصحة المهنية بموقع العمل"
    ],
    "image": "/BG/Contracting & Real Estate Development/Supply, Installation & Maintenance.jpg"
  },
  {
    "id": "srv-ind-maintenance",
    "code": "SBA-SRV-IND07",
    "sector": "industrial-solutions",
    "categoryKey": "maintenance-support",
    "categoryEn": "Maintenance & Technical Support",
    "categoryAr": "عقود الصيانة وخدمات الدعم الفني",
    "nameEn": "Comprehensive Plant Maintenance Contracts, Membrane Cleaning (CIP) & Spare Parts",
    "nameAr": "عقود الصيانة الوقائية والطارئة، الغسيل الكيميائي للأغشية وقطع الغيار",
    "descriptionEn": "Guaranteed uptime through preventive maintenance contracts, on-call emergency response, chemical clean-in-place (CIP) services, and genuine spare parts management.",
    "descriptionAr": "ضمان استمرارية التشغيل عبر عقود الصيانة الوقائية السنوية، الاستجابة السريعة للأعطال، خدمات الغسيل الكيميائي المتخصص لأغشية التحلية وتوفير قطع الغيار الأصلية.",
    "scopeOfWorkEn": [
      "Scheduled quarterly and annual preventive maintenance inspection routines",
      "Specialized Clean-in-Place (CIP) membrane chemical cleaning and biological sanitation",
      "Pump mechanical seal replacement, motor rewinding, and valve overhaul",
      "Consumable replenishment: cartridge filter elements, antiscalant chemicals, calibration reagents"
    ],
    "scopeOfWorkAr": [
      "برامج تفتيش وصيانة وقائية دورية ربع سنوية وسنوية لكافة مكونات المحطة",
      "خدمات الغسيل الكيميائي والتعقيم الحيوي CIP لأغشية التناضح العكسي RO",
      "عَمرة المضخات وتغيير موانع التسرب الميكانيكية وصيانة الصمامات",
      "توريد المستهلكات الأصلية: فلاتر ميكرونية، موانع ترسب Antiscalant، ومحاليل المعايرة"
    ],
    "applicationsEn": [
      "Desalination Plants",
      "Industrial Water Stations",
      "Food & Beverage Facilities",
      "Corporate Campuses"
    ],
    "applicationsAr": [
      "محطات تحلية المياه",
      "محطات المعالجة بالمصانع",
      "شركات الأغذية والمشروبات",
      "المجمعات والمنشآت الكبرى"
    ],
    "capabilitiesEn": [
      "24/7 on-call technical hotline",
      "Mobile field chemical CIP skid",
      "Consignment inventory spare parts stock"
    ],
    "capabilitiesAr": [
      "خط دعم فني واستجابة طارئة 24/7",
      "وحدة غسيل كيميائي متنقلة تصل لموقع المصنع",
      "مخزون قطع غيار أصلية ومستهلكات معتمدة متوفرة فورًا"
    ],
    "image": "/BG/Environment & Sustainability/Management Consultations & ISO Qualification Projects.jpg"
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
    "scopeAr": "تنفيذ متكامل للأعمال المدنية والإنشائية، الواجهات الزجاجية وشبكات الكهروميكانيك لمساحة 45,000 م².",
    "image": "/Contracting Photos/مشروع 01.jpg",
    "statusEn": "Completed & Handed Over",
    "statusAr": "تم الإنجاز والتسليم النهائي"
  },
  {
    "id": "proj-02",
    "nameEn": "Specialized Healthcare Center & Surgical Hospital",
    "nameAr": "المركز الطبي التخصصي ومستشفى الجراحات الدقيقة",
    "locationEn": "Greater Cairo, Egypt",
    "locationAr": "القاهرة الكبرى، مصر",
    "scopeEn": "Complete medical facility fit-out, operating cleanrooms, positive pressure HVAC, and medical gas network.",
    "scopeAr": "تجهيز مستشفى متكامل، غرف عمليات معقمة، تكييف ضغط موجب، وشبكة غازات طبية مركزية.",
    "image": "/Contracting Photos/مشروع 02.jpg",
    "statusEn": "Completed & Commissioned",
    "statusAr": "تم الإنجاز والتشغيل الطبي"
  },
  {
    "id": "proj-03",
    "nameEn": "Heavy Industrial Factory & Steel Warehouse Facility",
    "nameAr": "مجمع المصانع والمستودعات الفولاذية الثقيلة",
    "locationEn": "10th of Ramadan Industrial City",
    "locationAr": "مدينة العاشر من رمضان الصناعية",
    "scopeEn": "Reinforced deep pile foundations, pre-engineered steel frames (36m clear span), and laser-leveled industrial floors.",
    "scopeAr": "أساسات خوازيق عميقة، جمالونات فولاذية ببحور 36 مترًا، وأرضيات خرسانية صناعية ممسوسة بالليزر.",
    "image": "/Contracting Photos/مشروع 03.jpg",
    "statusEn": "Completed",
    "statusAr": "تم التنفيذ والتسليم"
  },
  {
    "id": "proj-04",
    "nameEn": "Gated Residential Community & Luxury Villas",
    "nameAr": "المجمع السكني والفيلات الفاخرة",
    "locationEn": "New Cairo, Egypt",
    "locationAr": "القاهرة الجديدة، مصر",
    "scopeEn": "Turnkey residential villa clusters, internal road infrastructure, landscaping, and premium marble fit-out.",
    "scopeAr": "إنشاء فيلات سكنية متكاملة، شبكات البنية التحتية، أعمال اللاندسكيب وتشطيبات الواجهات والرخام الفاخر.",
    "image": "/Contracting Photos/مشروع 04.jpg",
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
      { key: "all", labelEn: "All Construction Services", labelAr: "كافة خدمات المقاولات" },
      { key: "general-contracting", labelEn: "General Contracting", labelAr: "المقاولات العامة" },
      { key: "civil-works", labelEn: "Construction & Civil Works", labelAr: "الأعمال المدنية والإنشائية" },
      { key: "structural-works", labelEn: "Structural Works", labelAr: "الأعمال والمنشآت الهيكلية" },
      { key: "architectural-finishing", labelEn: "Architectural & Finishing Works", labelAr: "التشطيبات والديكور المعماري" },
      { key: "electromechanical-mep", labelEn: "Electromechanical Works (MEP)", labelAr: "الأعمال الكهروميكانيكية MEP" },
      { key: "real-estate-dev", labelEn: "Real Estate Development", labelAr: "التطوير والاستثمار العقاري" },
      { key: "medical-fitout", labelEn: "Medical Facility Fit-Outs", labelAr: "تجهيز المستشفيات والمنشآت الصحية" },
      { key: "oil-gas-works", labelEn: "Oil & Gas Specialized Works", labelAr: "أعمال المقاولات البترولية" },
      { key: "project-management", labelEn: "Project Management & Execution", labelAr: "إدارة المشروعات والإشراف الهندسي" }
    ]
  },
  {
    division: "environmental" as const,
    labelEn: "Environmental Solutions",
    labelAr: "الحلول البيئية والاستدامة",
    descEn: "Comprehensive waste management, biogas systems, odor control, bio-remediation, EIA studies, and carbon footprint assessments.",
    descAr: "إدارة المخلفات، محطات البيوجاز وتحويل المخلفات لطاقة، معالجة الروائح، دراسات تقييم الأثر البيئي، وحساب البصمة الكربونية.",
    categories: [
      { key: "all", labelEn: "All Environmental Solutions", labelAr: "كافة الحلول البيئية" },
      { key: "waste-management", labelEn: "Waste Management Solutions", labelAr: "حلول إدارة المخلفات" },
      { key: "waste-to-energy", labelEn: "Waste-to-Energy Systems", labelAr: "أنظمة تحويل المخلفات لطاقة" },
      { key: "biogas-development", labelEn: "Biogas Project Development", labelAr: "تطوير محطات البيوجاز" },
      { key: "biological-treatment", labelEn: "Biological Waste Treatment", labelAr: "معالجة المخلفات الحيوية" },
      { key: "industrial-waste", labelEn: "Industrial Waste Treatment", labelAr: "معالجة المخلفات الصناعية" },
      { key: "odor-control", labelEn: "Odor Control Solutions", labelAr: "حلول إزالة الروائح" },
      { key: "oil-spill-treatment", labelEn: "Oil Spill & Hydrocarbon Treatment", labelAr: "معالجة الانسكابات البترولية" },
      { key: "environmental-assessment", labelEn: "Environmental Assessment (EIA)", labelAr: "دراسات تقييم الأثر البيئي" },
      { key: "carbon-footprint", labelEn: "Carbon Footprint Assessment", labelAr: "دراسات البصمة الكربونية" },
      { key: "emission-control", labelEn: "Emission Control Solutions", labelAr: "حلول التحكم في الانبعاثات" },
      { key: "sustainability-consulting", labelEn: "Sustainability Consulting", labelAr: "استشارات الاستدامة" }
    ]
  },
  {
    division: "apparel-services" as const,
    labelEn: "Apparel Manufacturing Services",
    labelAr: "خدمات تصنيع الملابس",
    descEn: "Private label programs, OEM/FOB manufacturing, CAD sampling, fabric dyeing, and certified quality control.",
    descAr: "تصنيع لحساب الغير، حلول OEM و FOB، تطوير العينات والباترون، الصباغة المعملية، وضبط الجودة بمقاييس AQL.",
    categories: [
      { key: "all", labelEn: "All Manufacturing Services", labelAr: "كافة خدمات التصنيع" },
      { key: "private-label", labelEn: "Private Label Manufacturing", labelAr: "التصنيع للعلامات التجارية" },
      { key: "oem-manufacturing", labelEn: "OEM Manufacturing", labelAr: "التصنيع الأصلي للمعدات OEM" },
      { key: "fob-manufacturing", labelEn: "FOB Manufacturing", labelAr: "التصنيع الشامل FOB" },
      { key: "contract-manufacturing", labelEn: "Contract Manufacturing", labelAr: "التشغيل والإنتاج التعاقدي" },
      { key: "product-development", labelEn: "Product Development", labelAr: "تطوير المنتجات والباترون" },
      { key: "fabric-sourcing", labelEn: "Fabric Sourcing", labelAr: "توريد وفحص الأقمشة" },
      { key: "fabric-dyeing", labelEn: "Fabric Dyeing", labelAr: "صباغة الأقمشة والغزول" },
      { key: "production-planning", labelEn: "Production Planning", labelAr: "تخطيط وموازنة خطوط الإنتاج" },
      { key: "quality-control", labelEn: "Quality Control", labelAr: "مراقبة وفحص الجودة" }
    ]
  },
  {
    division: "industrial-solutions" as const,
    labelEn: "Industrial & Technical Solutions",
    labelAr: "الحلول الصناعية والتقنية",
    descEn: "Turnkey water treatment plants, system integration, smart IoT monitoring, industrial consulting, and maintenance.",
    descAr: "محطات معالجة المياه، تكامل الأنظمة وبرمجة SCADA، حلول المراقبة بإنترنت الأشياء IoT، والاستشارات والصيانة.",
    categories: [
      { key: "all", labelEn: "All Technical Solutions", labelAr: "كافة الحلول التقنية" },
      { key: "integrated-water-treatment", labelEn: "Integrated Water Treatment", labelAr: "محطات معالجة المياه المتكاملة" },
      { key: "filtration-design", labelEn: "Filtration System Design", labelAr: "تصميم أنظمة الفلترة" },
      { key: "system-integration", labelEn: "Industrial System Integration", labelAr: "تكامل الأنظمة والتحكم" },
      { key: "smart-monitoring", labelEn: "Smart Monitoring Solutions", labelAr: "حلول المراقبة والقياس الذكي" },
      { key: "technical-consulting", labelEn: "Technical Consulting", labelAr: "الاستشارات الفنية والهندسية" },
      { key: "installation-commissioning", labelEn: "Equipment Installation", labelAr: "التركيب والتشغيل التجريبي" },
      { key: "maintenance-support", labelEn: "Maintenance & Support", labelAr: "عقود الصيانة والدعم الفني" }
    ]
  }
];
