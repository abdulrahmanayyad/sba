import apparel from "@/assets/sector-apparel.jpg";
import construction from "@/assets/sector-construction.jpg";
import enviro from "@/assets/sector-enviro.jpg";
import food from "@/assets/sector-food.jpg";
import research from "@/assets/sector-research.jpg";
import education from "@/assets/sector-education.jpg";
import jzraLogo from "@/assets/JZRA_Logo.svg.asset.json";

export type SectorSlug = "garment" | "construction" | "environmental" | "research" | "education" | "food";

export interface SectorItem {
  label: string;
  labelAr: string;
}

export interface SectorSection {
  title: string;
  titleAr: string;
  body: string;
  bodyAr: string;
  items?: SectorItem[];
}

export interface SectorPageData {
  slug: SectorSlug;
  image: string;
  company: string;
  companyAr: string;
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  intro: string;
  introAr: string;
  sections: SectorSection[];
  logo?: { url: string; alt: string };
}

const contactSection: SectorSection = {
  title: "Contact & Opportunities",
  titleAr: "التواصل والفرص",
  body: "Request a quotation, propose a collaboration or apply to join the team — our sector team replies with feasibility, terms and timelines.",
  bodyAr: "اطلب عرض سعر، أو اقترح تعاونًا، أو تقدّم للانضمام إلى الفريق — ويقوم فريق القطاع بالرد مع دراسة الجدوى والشروط والجداول الزمنية.",
};

export const sectors: Record<SectorSlug, SectorPageData> = {
  garment: {
    slug: "garment",
    image: apparel,
    company: "SAMI BIN AYYAD GROUP · Garment Division",
    companyAr: "مجموعة سامي بن عياد · قطاع تصنيع الملابس الجاهزة",
    logo: { url: jzraLogo.url, alt: "JZRA Fashion" },
    name: "Ready-Made Garment Manufacturing",
    nameAr: "تصنيع الملابس الجاهزة",
    tagline: "Integrated manufacturing solutions for fashion brands and global markets, from product development to production and export preparation.",
    taglineAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية، من تطوير المنتج إلى الإنتاج والتجهيز للتصدير.",
    intro: "SAMI BIN AYYAD GROUP delivers integrated ready-made garment manufacturing solutions, combining product development, diverse production capabilities, manufacturing management, and quality control. With a specialization in women’s and children’s apparel alongside men’s clothing, we support fashion brands, importers, and international buyers through flexible manufacturing programs tailored to each project.",
    introAr: "نقدم من خلال قطاع الملابس في مجموعة سامي بن عياد حلولًا متكاملة لتصنيع الملابس الجاهزة، تجمع بين تطوير المنتجات، والقدرات الإنتاجية المتنوعة، وإدارة التصنيع، ومراقبة الجودة. نتخصص في الملابس الحريمي والأطفالي، إلى جانب الملابس الرجالية، وندعم العلامات التجارية والمستوردين والعملاء الدوليين من خلال برامج تصنيع مرنة تتوافق مع متطلبات كل مشروع.",
    sections: [
      {
        title: "Who We Are",
        titleAr: "من نحن",
        body: "Garment manufacturing is one of the Group’s core industrial divisions, supported by our own garment factory, ownership interests in three additional manufacturing factories, and a network of production partnerships. Our operations cover multiple stages of the manufacturing cycle, from product development to export preparation.",
        bodyAr: "يمثل قطاع الملابس أحد القطاعات الصناعية الرئيسية في المجموعة، ويعتمد على منظومة تجمع بين مصنع الملابس التابع للمجموعة، والملكية في ثلاثة مصانع تصنيع إضافية، وشبكة من الشراكات الإنتاجية. نغطي مراحل متعددة بدءًا من تطوير المنتج والباترونات والعينات وصولًا إلى التعبئة والتصدير.",
      },
      {
        title: "What We Do",
        titleAr: "ماذا نقدم",
        body: "Integrated manufacturing solutions and diverse capabilities for brands, importers, and global buyers.",
        bodyAr: "حلول تصنيع متكاملة وقدرات متعددة للعلامات التجارية والمستوردين والمشترين الدوليين.",
        items: [
          { label: "Ready-Made Garment Manufacturing", labelAr: "تصنيع الملابس الجاهزة" },
          { label: "Product Development & Sampling", labelAr: "تطوير المنتجات والعينات" },
          { label: "Private Label Manufacturing", labelAr: "التصنيع للعلامات التجارية الخاصة" },
          { label: "FOB Manufacturing Programs", labelAr: "برامج التصنيع بنظام FOB" },
          { label: "Rigorous Quality Control", labelAr: "مراقبة الجودة وضبط المعايير" },
          { label: "Packaging & Export Preparation", labelAr: "التعبئة والتجهيز للتصدير" },
        ],
      },
      {
        title: "Why Us",
        titleAr: "لماذا تختارنا",
        body: "More than a manufacturing facility: an integrated textile-garment network, deep product development expertise with 20,000+ styles, flexible production lines, international delivery experience, and long-term partnership commitment.",
        bodyAr: "أكثر من مجرد مصنع: منظومة تصنيع متكاملة تجمع بين الأقمشة وتصنيع الملابس، وخبرة تطوير أكثر من 20,000 موديل، ومرونة إنتاجية، وخبرة تصدير دولية، والتزام بالشراكات طويلة الأمد.",
      },
      {
        title: "Our Products",
        titleAr: "منتجاتنا",
        body: "We manufacture across apparel categories: Women's (dresses, abayas, modestwear, sets, tunics, sleepwear, sportswear), Men's (classic shirts, polos, t-shirts, casual pants, hoodies), and Children's (tops, sets, dresses, sleepwear, hoodies).",
        bodyAr: "نصنع لمختلف فئات الأزياء: الملابس الحريمي (الفساتين، العبايات، الملابس المحتشمة، الأطقم، التونيكات، السهرة، الرياضة)، والملابس الرجالية (القمصان الكلاسيك، البولو، التيشيرتات، البنطلونات، الهوديز)، وملابس الأطفال (الأطقم، الفساتين، الكاجوال، والرياضة).",
        items: [
          { label: "Women's Apparel & Modestwear", labelAr: "الملابس الحريمي والأزياء المحتشمة" },
          { label: "Men's Apparel & Classic Shirts", labelAr: "الملابس الرجالية والقمصان الكلاسيك" },
          { label: "Children's Wear & Coordinated Sets", labelAr: "ملابس الأطفال والأطقم المتناسقة" },
          { label: "Custom Category Development", labelAr: "تطوير فئات وتصميمات مخصصة" },
        ],
      },
      {
        title: "Manufacturing Capabilities",
        titleAr: "قدراتنا التصنيعية",
        body: "Scalable production capacity: 5,000+ pieces per day, 100,000+ pieces per month across 15+ production lines, 250+ specialized machines, and a skilled workforce of 400+ across operations.",
        bodyAr: "طاقة إنتاجية قابلة للتوسع: أكثر من 5,000 قطعة يوميًا، وأكثر من 100,000 قطعة شهريًا، عبر أكثر من 15 خط إنتاج و250 ماكينة متخصصة وفريق عمل يضم أكثر من 400 عامل ضمن المنظومة.",
        items: [
          { label: "+5,000 Pieces Per Day", labelAr: "+5,000 قطعة يوميًا" },
          { label: "+100,000 Pieces Per Month", labelAr: "+100,000 قطعة شهريًا" },
          { label: "+15 Production Lines", labelAr: "+15 خط إنتاج" },
          { label: "+250 Machines & +400 Workers", labelAr: "+250 ماكينة و+400 عامل" },
        ],
      },
      {
        title: "Classic Shirt Factory",
        titleAr: "مصنع القمصان الكلاسيك",
        body: "A dedicated manufacturing facility equipped with 100 specialized machines and a dedicated line producing up to 30,000 classic shirts monthly to strict international standards.",
        bodyAr: "مصنع متخصص ومملوك للمجموعة لتصنيع القمصان الكلاسيك، يضم 100 ماكينة متخصصة وخط إنتاج مخصصًا بطاقة تصل إلى 30,000 قميص كلاسيك شهريًا وفق أعلى معايير الجودة.",
      },
      {
        title: "Manufacturing Process",
        titleAr: "مراحل التصنيع",
        body: "Structured execution path: Product Assessment → Fabric & Materials → Pattern Development → Prototype → Sample Approval → Pre-Production → Bulk Production → Quality Control → Finishing & Packaging → Export Preparation.",
        bodyAr: "خطوات تنفيذ منظمة: دراسة المنتج → الخامات والأقمشة → الباترونات والتطوير → العينة الأولية → اعتماد العينة → ما قبل الإنتاج → الإنتاج الكمي → مراقبة الجودة → التشطيب والتعبئة → التجهيز للتصدير.",
      },
      {
        title: "Our Services",
        titleAr: "خدماتنا وبرامج التعاون",
        body: "Flexible collaboration models: Private Label (OEM), FOB programs, end-to-end technical product development, industrial fabric integration, and international export coordination.",
        bodyAr: "نماذج تعاون مرنة: التصنيع للعلامات التجارية (Private Label)، وبرامج FOB المتكاملة، وتطوير المنتجات والباترونات، والتكامل الصناعي من القماش للمنتج، وتجهيز التصدير للأسواق العالمية.",
      },
      {
        title: "International Markets",
        titleAr: "الأسواق والخبرة الدولية",
        body: "Proven export delivery with brands and buyers across France, Italy, Turkey, Saudi Arabia, the Gulf, Europe, and Africa.",
        bodyAr: "خبرة تصدير موثقة وسوابق أعمال مع علامات تجارية وعملاء في فرنسا وإيطاليا وتركيا والمملكة العربية السعودية وأسواق الخليج وأوروبا وإفريقيا.",
      },
      {
        title: "Quality Assurance",
        titleAr: "الجودة وضمان المطابقة",
        body: "Quality built into every stage: fabric inspection, measurements, cutting precision, inline sewing audits, finishing, labeling, and final packaging checks against approved client tech-packs.",
        bodyAr: "الجودة جزء أصيل من عملية التصنيع: فحص الأقمشة والمقاسات والباترونات، ومراقبة مراحل القص والخياطة والتشطيب، والمظهر النهائي والتغليف وفق الوثائق والمواصفات المعتمدة.",
      },
    ],
  },

  construction: {
    slug: "construction",
    image: construction,
    company: "SAMI BIN AYYAD GROUP Contracting & Real Estate Development",
    companyAr: "شركة مجموعة سامي بن عياد للمقاولات والتطوير العقاري",
    name: "Contracting & Real Estate Development",
    nameAr: "المقاولات والتطوير العقاري",
    tagline: "Integrated solutions for construction and property development, spanning structural works, finishing, building systems, and specialized installations.",
    taglineAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني، من الأعمال الإنشائية والتشطيبات إلى الأنظمة الهندسية والتجهيزات المتخصصة.",
    intro: "SAMI BIN AYYAD GROUP Contracting & Real Estate Development delivers integrated solutions across general contracting, construction, real estate development, and finishing works. Our documented project portfolio reflects extensive experience across healthcare, residential, commercial, administrative, industrial, oil and gas, and service-related sectors.",
    introAr: "تقدم شركة مجموعة سامي بن عياد للمقاولات والتطوير العقاري حلولًا متكاملة في المقاولات العامة والإنشاءات والتطوير العقاري والتشطيبات، مدعومة بخبرة عملية في تنفيذ مشروعات متنوعة بالقطاعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية والخدمية.",
    sections: [
      {
        title: "Who We Are",
        titleAr: "من نحن",
        body: "Your partner in construction and development: operating across general contracting, construction, property development, and high-end finishing with a documented portfolio spanning decades, diverse contract values, and multidisciplinary capabilities.",
        bodyAr: "شريكك في التنفيذ والتطوير: نعمل في المقاولات العامة والإنشاءات والتطوير العقاري والتشطيبات، مستندين إلى سجل مشروعات موثق يمتد لسنوات ويغطي أعمالًا مدنية ومعمارية وكهروميكانيكية متخصصة.",
      },
      {
        title: "What We Do",
        titleAr: "ماذا نفعل",
        body: "Building construction and upgrades, civil and structural works, comprehensive restoration, turnkey residential and villa finishing, specialized healthcare facilities, electromechanical systems, and oil & gas civil infrastructure.",
        bodyAr: "أعمال الإنشاء والتطوير ورفع كفاءة المباني، والأعمال المدنية والمعمارية والإنشائية، والصيانة الشاملة، والتشطيبات المتكاملة للوحدات السكنية والفلل، وتجهيز المنشآت الطبية، والأنظمة الكهروميكانيكية، والأعمال الإنشائية لقطاع البترول والغاز.",
      },
      {
        title: "What We Offer",
        titleAr: "ماذا نقدم",
        body: "Integrated solutions and multiple disciplines executed under one accountable roof.",
        bodyAr: "حلول متكاملة وتخصصات متعددة تنفذ تحت إدارة هندسية مسؤولة.",
        items: [
          { label: "General Contracting & Building Upgrades", labelAr: "المقاولات والإنشاءات العامة ورفع الكفاءة" },
          { label: "Finishing & Interior Design", labelAr: "التشطيبات المتكاملة وأعمال الديكور" },
          { label: "Healthcare & Medical Facilities Fit-Out", labelAr: "إنشاء وتجهيز وتطوير المنشآت الطبية" },
          { label: "Electromechanical & Building Systems", labelAr: "الأنظمة الكهروميكانيكية وأنظمة المباني" },
          { label: "Oil & Gas Specialized Projects", labelAr: "مشروعات البترول والغاز والأعمال المتخصصة" },
          { label: "Residential & Commercial Development", labelAr: "التطوير السكني والتجاري والإداري" },
          { label: "Equipment Supply & Maintenance", labelAr: "التوريد والتركيب والصيانة المتخصصة" },
        ],
      },
      {
        title: "Sectors We Serve",
        titleAr: "قطاعات نخدمها",
        body: "Healthcare and medical facilities, residential communities and luxury villas, commercial malls and administrative centers, oil & gas installations, and urban infrastructure.",
        bodyAr: "خبرة تنفيذية عبر قطاعات متنوعة: القطاع الطبي والرعاية الصحية، القطاع السكني والفلل الفاخرة، القطاع التجاري والمباني الإدارية، قطاع البترول والغاز، وأنظمة البنية التحتية.",
        items: [
          { label: "Healthcare Facilities & Hospitals", labelAr: "المستشفيات والمراكز الطبية وغرف العمليات" },
          { label: "Residential Units & Luxury Villas", labelAr: "الوحدات السكنية والفلل والمنتجعات" },
          { label: "Commercial Malls & Admin Buildings", labelAr: "المولات التجارية والمباني الإدارية" },
          { label: "Oil & Gas Pipeline & Plant Civil Works", labelAr: "منشآت البترول والغاز وخطوط الأنابيب" },
        ],
      },
      {
        title: "Track Record",
        titleAr: "خبرة موثقة بالأرقام",
        body: "57+ documented projects with recorded contract turnover of EGP 400,520,409 between 2013 and 2024 — including annual delivery peaks of EGP 125,950,813 (2016) and EGP 86,220,000 (2023).",
        bodyAr: "أكثر من 57 مشروعًا موثقًا بحجم أعمال مسجل بلغ 400,520,409 جنيهًا مصريًا (2013–2024)، وسجلت الشركة حجم أعمال 125,950,813 جنيهًا في عام 2016، و86,220,000 جنيهًا في عام 2023.",
        items: [
          { label: "+57 Documented Projects", labelAr: "+57 مشروعًا موثقًا" },
          { label: "+EGP 400.5M Turnover (2013–2024)", labelAr: "+400.5 مليون جنيه حجم أعمال مسجل" },
          { label: "EGP 125.9M in 2016", labelAr: "125.9 مليون جنيه حجم أعمال 2016" },
          { label: "EGP 86.2M in 2023", labelAr: "86.2 مليون جنيه حجم أعمال 2023" },
        ],
      },
      {
        title: "Healthcare Facilities",
        titleAr: "المنشآت الطبية والمستشفيات",
        body: "Documented healthcare delivery: Nasser Institute Hospital (6 elevators), Mit Ghamr Oncology Center (2 elevators), One-Day Surgery Hospital (upgrades, radiology and sterilization rooms), Imbaba Chest and Allergy Research Center (3rd-floor upgrade), Al-Hilal Hospital (kitchen, laundry and 50 bathrooms), Cairo Fatimid Hospital, and Egyptian Ambulance Organization.",
        bodyAr: "سجل حافل في المنشآت الطبية: معهد ناصر (توريد وتركيب 6 مصاعد)، مركز أورام ميت غمر (مصعدين)، مستشفى جراحات اليوم الواحد (غرف الأشعة ووحدة التعقيم)، مركز أبحاث الصدر بإمبابة، مستشفى الهلال (المطبخ والمغسلة و50 حمامًا)، مستشفى القاهرة الفاطمية، وهيئة الإسعاف المصرية.",
      },
      {
        title: "Oil & Gas Projects",
        titleAr: "قطاع البترول والغاز",
        body: "Specialized civil infrastructure for oil and gas: GASCO Gas Pipeline Protection project at Abu Rawash (EGP 3,000,000), gas regulator rooms in the New Administrative Capital, T-Oil station construction, oil refinery tanks, and inspection chambers.",
        bodyAr: "أعمال إنشائية متخصصة لمنشآت البترول والغاز: مشروع حماية خط الغاز بأبو رواش لصالح شركة جاسكو (3,000,000 جنيه)، وغرف محولات الغاز بالعاصمة الإدارية، وإنشاء محطة T-Oil، وتانكات تكرير الزيت وغرف التفتيش.",
      },
      {
        title: "Residential Development",
        titleAr: "التطوير السكني والتشطيبات الفاخرة",
        body: "Turnkey architectural finishing and 2D/3D design: Katameya Dunes, Mountain View Fifth Settlement, and recent contracts at Vidala El-Galala (Blocks A, C, D, E, 1, Attach and Twin Villas).",
        bodyAr: "تصميم وتنفيذ التشطيبات المتكاملة والـ 3D: فلل قطامية ديونز، وماونتن فيو التجمع الخامس، وأعمال التطوير والتشطيب الحديثة بمشروع فيدالا الجلالة (Blocks A, C, D, E, 1 وفلل التوين).",
      },
      {
        title: "Project Delivery Process",
        titleAr: "مراحل تنفيذ المشروعات",
        body: "Project Assessment → Scope Definition → Planning & Coordination → Design & Preparations → On-Site Execution → Progress Monitoring → Inspection & Quality Review → Handover.",
        bodyAr: "منهجية تنفيذ دقيقة: دراسة المشروع → تحديد نطاق الأعمال → التخطيط والتنسيق الهندسي → التصميمات والتجهيزات → التنفيذ بالموقع → متابعة سير الأعمال → الفحص وضبط الجودة → الاستكمال والتسليم.",
      },
      {
        title: "Quality & Execution",
        titleAr: "الجودة والالتزام بالتنفيذ",
        body: "Quality starts with clear requirements: rigorous coordination across civil, architectural, and MEP disciplines, full compliance with approved specs, safety standards, and client operational goals.",
        bodyAr: "الجودة تبدأ من وضوح المتطلبات: فهم متطلبات العميل، وتنسيق التخصصات المعمارية والمدنية والكهروميكانيكية، والالتزام بالمواصفات الفنية والتنفيذ في المواعيد المقررة.",
      },
    ],
  },

  environmental: {
    slug: "environmental",
    image: enviro,
    company: "ENVIROTAQA · Environmental & Sustainability Solutions",
    companyAr: "إنفيروتاقة · حلول واستشارات بيئية مستدامة",
    name: "Environment & Sustainability",
    nameAr: "البيئة والاستدامة",
    tagline: "Integrated environmental solutions that turn challenges into sustainable opportunities.",
    taglineAr: "حلول بيئية متكاملة تحول التحديات إلى فرص مستدامة.",
    intro: "The Environment & Sustainability sector supports organizations and projects through specialized solutions and advisory services focused on environmental performance, regulatory compliance, and resource efficiency. Its multidisciplinary experience spans environmental management, energy, water, waste, technology, and research and development, with solutions tailored to each project's operational context.",
    introAr: "يقدم قطاع البيئة والاستدامة حلولًا واستشارات متخصصة تدعم المؤسسات والمشروعات في إدارة الأثر البيئي، والامتثال للمتطلبات التنظيمية، ورفع كفاءة استخدام الموارد. ويستند القطاع إلى خبرات متعددة التخصصات تشمل البيئة والطاقة والمياه وإدارة المخلفات والتكنولوجيا والبحث والتطوير، مع مراعاة احتياجات كل مشروع وطبيعة تشغيله.",
    sections: [
      {
        title: "Who We Are",
        titleAr: "نبذة عن القطاع",
        body: "Multidisciplinary environmental advisory and engineering practice in Egypt and the Middle East, connecting environmental stewardship with operational viability and business growth.",
        bodyAr: "يقدم قطاع البيئة والاستدامة حلولًا واستشارات متخصصة تدعم المؤسسات والمشروعات في إدارة الأثر البيئي، والامتثال للمتطلبات التنظيمية، ورفع كفاءة استخدام الموارد في مصر والشرق الأوسط.",
      },
      {
        title: "Vision & Mission",
        titleAr: "رؤيتنا ورسالتنا",
        body: "Vision: Building efficient and sustainable organizations through practical environmental solutions balancing impact with economic value. Mission: Helping clients understand and manage environmental challenges through technical assessment, compliance, and continuous improvement.",
        bodyAr: "رؤيتنا: المساهمة في بناء مشروعات ومؤسسات أكثر كفاءة واستدامة، من خلال حلول بيئية قابلة للتطبيق تجمع بين الأثر الإيجابي والقيمة الاقتصادية. رسالتنا: دعم العملاء في إدارة التحديات البيئية عبر التقييم الفني والامتثال وكفاءة الموارد.",
      },
      {
        title: "What We Do",
        titleAr: "ماذا نقدم",
        body: "Comprehensive environmental and technical services covering assessments, solution engineering, implementation support, and digital monitoring.",
        bodyAr: "نطاق متكامل من الخدمات البيئية والفنية، يبدأ بالدراسة والتقييم، ويمتد إلى تطوير الحلول، ودعم التنفيذ، والمتابعة والتحسين.",
        items: [
          { label: "Environmental Studies & Consulting", labelAr: "الدراسات والاستشارات البيئية" },
          { label: "Waste Management & Resource Recovery", labelAr: "إدارة المخلفات وتحويلها إلى قيمة" },
          { label: "Water & Wastewater Treatment", labelAr: "المياه ومعالجة مياه الصرف" },
          { label: "Energy, Sustainability & Climate", labelAr: "الطاقة والاستدامة والتغير المناخي" },
          { label: "HSE, Compliance & Risk Management", labelAr: "السلامة والامتثال وإدارة المخاطر" },
          { label: "Digital Solutions & Specialized Products", labelAr: "التكنولوجيا والحلول الرقمية والمنتجات المتخصصة" },
        ],
      },
      {
        title: "Our Services",
        titleAr: "خدماتنا وتخصصاتنا",
        body: "Comprehensive environmental and technical services covering waste-to-energy, carbon footprint, environmental studies (EIA/SEA/ESIA), laboratory measurements, waste management, biotechnology, and ISO qualifications.",
        bodyAr: "نطاق متكامل من الخدمات والحلول البيئية يشمل تحويل المخلفات لطاقة، البصمة الكربونية، دراسات تقييم الأثر البيئي، القياسات الميدانية والمعملية، التكنولوجيا الحيوية، وتأهيل شهادات الأيزو.",
      },
      {
        title: "Environmental Studies & Consulting",
        titleAr: "الدراسات والاستشارات البيئية",
        body: "Environmental Impact Assessment (EIA), Environmental and Social Impact Assessment (ESIA), Strategic Environmental Assessment (SEA), Environmental Risk Assessment, Due Diligence, Environmental Auditing, Compliance Studies, and Permitting.",
        bodyAr: "إعداد ودعم الدراسات البيئية للمشروعات الصناعية والسياحية والتنموية: تقييم الأثر البيئي (EIA)، تقييم الأثر البيئي والاجتماعي (ESIA)، التقييم البيئي الاستراتيجي (SEA)، تقييم المخاطر البيئية، التدقيق البيئي، ودراسات التراخيص.",
      },
      {
        title: "Waste Management & Resource Recovery",
        titleAr: "إدارة المخلفات وتحويلها إلى قيمة",
        body: "Solid, organic, agricultural, and industrial waste treatment, sludge management, recycling, biological waste treatment, compost and biochar production, biogas generation, and waste-to-energy solutions.",
        bodyAr: "حلول لإدارة المخلفات ومعالجتها: المخلفات الصلبة والعضوية والزراعية والغذائية والصناعية، معالجة الحمأة، إنتاج السماد العضوي (Compost) والفحم الحيوي (Biochar)، إنتاج الغاز الحيوي (Biogas) وتوليد الطاقة من المخلفات.",
      },
      {
        title: "Water & Wastewater",
        titleAr: "المياه ومعالجة مياه الصرف",
        body: "Water-quality assessment, chemical and biological analysis, biological wastewater treatment, bioremediation, and environmental monitoring of water sources.",
        bodyAr: "تقييم جودة المياه، والتحاليل الكيميائية والبيولوجية، وحلول معالجة المياه والصرف الصحي والصناعي، والمعالجة الحيوية، والمراقبة البيئية للمصادر المائية.",
      },
      {
        title: "Energy, Sustainability & Climate",
        titleAr: "الطاقة والاستدامة والتغير المناخي",
        body: "Renewable energy (solar, bioenergy, biogas, biofuels), greenhouse gas management, carbon footprint accounting, circular economy strategies, and sustainability reporting.",
        bodyAr: "حلول الطاقة المتجددة وكفاءة الطاقة (الطاقة الشمسية، الطاقة الحيوية، الغاز الحيوي، الوقود الحيوي)، وإدارة الانبعاثات الكربونية، واستراتيجيات الاقتصاد الدائري، وتقارير الاستدامة المعتمدة.",
      },
      {
        title: "HSE, Compliance & Risk Management",
        titleAr: "السلامة والامتثال وإدارة المخاطر",
        body: "Health, Safety and Environment (HSE), QHSE management systems, environmental compliance reviews, industrial waste management, and workplace safety systems.",
        bodyAr: "أنظمة الصحة والسلامة والبيئة (HSE) والجودة (QHSE)، وإدارة المخاطر التشغيلية، والامتثال البيئي، وتقييم الأداء، وإدارة المخلفات الصناعية الخطرة وغير الخطرة.",
      },
      {
        title: "Technology & Digital Solutions",
        titleAr: "التكنولوجيا والحلول الرقمية والمنتجات المتخصصة",
        body: "EHS/QHSE mobile apps, IoT environmental monitoring, digital compliance platforms, bioremediation biological agents, oil-waste treatment formulas, and odor-control products.",
        bodyAr: "برمجيات وتطبيقات EHS وQHSE، وأنظمة إنترنت الأشياء (IoT) للرصد البيئي الرقمي، ومنتجات المعالجة البيولوجية، ومعالجة المخلفات الزيتية، والتحكم في الروائح.",
      },
      {
        title: "Sectors We Serve",
        titleAr: "القطاعات التي نخدمها",
        body: "Oil and gas, renewable energy, industrial manufacturing, construction & real estate, water & wastewater, agriculture, healthcare, and public sector projects.",
        bodyAr: "النفط والغاز، الطاقة المتجددة، الصناعة والتصنيع، الإنشاءات والعقارات، المياه ومياه الصرف، إدارة المخلفات، الزراعة، الرعاية الصحية، والمشروعات الحكومية.",
      },
      {
        title: "Why Us",
        titleAr: "لماذا تختار خدماتنا البيئية؟",
        body: "Multidisciplinary expertise connecting environment with energy and technology, practical solutions balancing engineering with economic value, and technology transfer alliances.",
        bodyAr: "خبرات متعددة التخصصات تربط البيئة بالطاقة والمياه والتكنولوجيا، واهتمام بالحلول العملية القابلة للتطبيق، والجمع بين التقييم الفني والاعتبارات الاقتصادية، وبناء شراكات نقل التكنولوجيا.",
      },
    ],
  },

  food: {
    slug: "food",
    image: food,
    company: "SAMI BIN AYYAD GROUP · Natural Products Division",
    companyAr: "مجموعة سامي بن عياد · قطاع المنتجات الطبيعية",
    name: "Natural Products",
    nameAr: "المنتجات الطبيعية",
    tagline: "From Nature’s Finest to Global Markets",
    taglineAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    intro: "The Food & Natural Products Division is a business unit of SAMI BIN AYYAD GROUP, specializing in the sourcing and marketing of a diverse range of natural food products, including honey, olives and olive oil, dates and date-based products, herbs, spices, and natural powdered juice products. The division aims to build a flexible commercial network connecting product sources with target markets.",
    introAr: "يمثل قطاع الأغذية والمنتجات الطبيعية أحد قطاعات مجموعة سامي بن عياد، ويختص بتوفير وتسويق مجموعة متنوعة من المنتجات الغذائية الطبيعية، تشمل عسل النحل، والزيتون وزيت الزيتون، والتمور، ومنتجات التمر، والأعشاب والتوابل، ومشروبات العصائر البودر الطبيعية، عبر منظومة تجارية مرنة تربط بين مصادر المنتجات والأسواق المستهدفة.",
    sections: [
      {
        title: "About the Division",
        titleAr: "نبذة عن القطاع",
        body: "Specializing in sourcing, packaging, and marketing diverse natural food products. We connect high-quality local agricultural production with distributors, wholesalers, retailers, and export markets worldwide.",
        bodyAr: "يختص القطاع بتوفير وتسويق مجموعة متنوعة من المنتجات الغذائية الطبيعية، وبناء منظومة تجارية مرنة تربط بين مصادر المنتجات ومصانع التعبئة والأسواق المستهدفة، مع موثوقية عالية في سلاسل التوريد والجودة.",
      },
      {
        title: "Main Product Categories",
        titleAr: "التصنيفات الرئيسية للمنتجات",
        body: "Our portfolio spans six core categories: Honey & Bee Products, Olives, Oils & Date Products, Premium Dates, Natural Herbs, Aromatic Spices, and Natural Powdered Juices.",
        bodyAr: "تتوزع منتجاتنا عبر ستة تصنيفات رئيسية تلبي احتياجات الأسواق المحلية والدولية.",
        items: [
          { label: "Honey & Bee Products", labelAr: "عسل النحل ومنتجاته" },
          { label: "Olives, Oils & Date Products", labelAr: "الزيتون والزيوت ومنتجات التمر" },
          { label: "Premium Dates Varieties", labelAr: "التمور الفاخرة وأصنافها" },
          { label: "Natural Herbs", labelAr: "الأعشاب الطبيعية والطبية" },
          { label: "Aromatic Spices", labelAr: "التوابل والبهارات العطرية" },
          { label: "Natural Powdered Juice Beverages", labelAr: "مشروبات العصائر البودر الطبيعية" },
        ],
      },
      {
        title: "Honey & Bee Products",
        titleAr: "عسل النحل ومنتجاته",
        body: "A premium selection of pure natural honey: Sidr honey, black seed honey, clover blossom honey, citrus blossom honey, honeycomb, marjoram honey, and royal jelly, with versatile packaging options for retail and bulk distribution.",
        bodyAr: "تشكيلة متنوعة من عسل النحل الطبيعي ومنتجاته: عسل السدر، حبة البركة، نوارة البرسيم، زهور الموالح، عسل الشمع، عسل البردقوش، وغذاء الملكات، مع خيارات تعبئة وتوريد مرنة وفق متطلبات العملاء.",
      },
      {
        title: "Olives, Oils & Date Products",
        titleAr: "الزيتون والزيوت ومنتجات التمر",
        body: "Varieties of olives, extra virgin olive oil, date molasses, and date jam — selected for retail, wholesale, and food service channels.",
        bodyAr: "الزيتون بمختلف أنواعه، وزيت الزيتون البكر، ودبس التمر الطبيعي، ومربى التمر، ضمن مجموعة غذائية متكاملة لقنوات التجزئة والجملة والتوزيع التجاري.",
      },
      {
        title: "Premium Dates",
        titleAr: "التمور الفاخرة",
        body: "Distinguished varieties of fine dates: Sukkari, Ajwa, Medjool, Rutab, Sagai, Safawi, Khudri, and Anbara dates, with graded packaging for premium gift and bulk markets.",
        bodyAr: "أجود أصناف التمور: السكري، العجوة، المجدول، الرطب، الصقعي، الصفاوي، الخضري، والعنبري، بتعبئة فاخرة ومرونة في خيارات التوريد للأسواق المحلية والدولية.",
      },
      {
        title: "Natural Herbs",
        titleAr: "الأعشاب الطبيعية",
        body: "A pure collection of high-grade medicinal and culinary herbs, carefully dried and sorted to preserve their natural aroma, essential oils, and health properties.",
        bodyAr: "تشكيلة نقية من الأعشاب الطبية والعطرية المجففة والمفرزة بعناية فائقة للحفاظ على زيتها الطيار وخصائصها الطبيعية وفوائدها الصحية.",
      },
      {
        title: "Aromatic Spices",
        titleAr: "التوابل والبهارات",
        body: "Finest quality whole and ground spices selected for high potency, vibrant color, and rich flavor, suitable for culinary and commercial food preparation.",
        bodyAr: "أجود أصناف التوابل والبهارات الحصى والمطحونة، المختارة لنقائها الفائق ونكهتها الغنية وقيمتها العالية في قطاع الصناعات الغذائية والمطابخ الراقية.",
      },
      {
        title: "Natural Powdered Juice Beverages",
        titleAr: "مشروبات العصائر البودر الطبيعية",
        body: "Natural powdered fruit juice beverages formulated for commercial, institutional, and consumer consumption with natural fruit extracts and refreshingly authentic flavors.",
        bodyAr: "مشروبات عصائر بودر طبيعية مستخلصة من نكهات الفواكه الطبيعية، سريعة التحضير ومناسبة للاستخدام المنزلي والتجاري ومنافذ الضيافة والتصدير.",
      },
      {
        title: "Division Highlights",
        titleAr: "مميزات القطاع",
        body: "Diverse natural food portfolio, solid commercial partnerships, flexible sourcing and packaging capabilities, and active expansion across regional and international markets.",
        bodyAr: "تنوع المنتجات لتلبية شرائح مختلفة، شراكات تجارية مع الموردين والموزعين، حلول توريد وتعبئة مرنة قابلة للتطوير، والتوسع المستمر في الأسواق.",
        items: [
          { label: "Diverse Product Portfolio", labelAr: "تنوع المنتجات الغذائية الطبيعية" },
          { label: "Strategic Commercial Partnerships", labelAr: "شراكات تجارية مع الموزعين والمستوردين" },
          { label: "Flexible Sourcing & Packaging", labelAr: "حلول توريد وتعبئة مرنة ومخصصة" },
          { label: "Local & Global Market Expansion", labelAr: "توسع في الأسواق المحلية والإقليمية والدولية" },
        ],
      },
      {
        title: "Cooperation Opportunities",
        titleAr: "فرص التعاون والاستفسارات التجارية",
        body: "Looking for a reliable supplier of natural food products? Contact SAMI BIN AYYAD GROUP to explore sourcing, distribution, private labeling, and commercial partnerships.",
        bodyAr: "هل تبحث عن مورد موثوق للمنتجات الغذائية الطبيعية؟ تواصل مع مجموعة سامي بن عياد لاستكشاف فرص التوريد والتوزيع والتعاون التجاري ومناقشة الكميات وخيارات التعبئة المناسبة لأعمالك.",
      },
    ],
  },

  research: {
    slug: "research",
    image: research,
    company: "Al-Abadilah for Heritage Book Editing & Scientific Research",
    companyAr: "العبادلة لتحقيق كتب التراث والبحث العلمي",
    name: "Scientific Research & Heritage Editing",
    nameAr: "البحث العلمي وتحقيق التراث",
    tagline: "From research and critical editing to published knowledge and a lasting scholarly legacy",
    taglineAr: "من البحث والتحقيق إلى المعرفة المنشورة والإرث العلمي المستمر",
    intro: "Established in 2008, a foundational pillar of the group's commitment to Islamic scholarship: critical editing of heritage texts, original authorship and publication of research connected to the scholarly works of Sheikh Sami bin Bayoumi bin Ayyad.",
    introAr: "تأسس عام 2008 ليكون ركيزة أساسية في التزام المجموعة بالعلم الشرعي: تحقيق التراث، والتأليف الأصيل، ونشر البحوث المرتبطة بالمؤلفات العلمية للشيخ سامي بن بيومي بن عياد.",
    sections: [
      {
        title: "Scholarly Foundations",
        titleAr: "الجذور العلمية والبحثية",
        body: "Hadith studies, jurisprudence and worship, Tawhid and creed — bridging traditional Islamic sciences with contemporary inquiry.",
        bodyAr: "دراسات الحديث، وفقه العبادات، والتوحيد والعقيدة — ربط العلوم الشرعية الأصيلة بالدراسة والتحقيق الرصين.",
      },
      {
        title: "Published Works",
        titleAr: "الأعمال المنشورة",
        body: "Peer-reviewed critical editions and reference works across Islamic jurisprudence and prophetic tradition.",
        bodyAr: "إصدارات محققة ومراجع معتمدة في الفقه والحديث النبوي الشريف.",
      },
    ],
  },

  education: {
    slug: "education",
    image: education,
    company: "REWAQ Academy",
    companyAr: "أكاديمية رواق",
    name: "Education & Human Development",
    nameAr: "التعليم وتنمية المعرفة",
    tagline: "Knowledge, character and skills for the next generation",
    taglineAr: "معرفة وشخصية ومهارات لأجيال المستقبل",
    intro: "A modern educational system combining academic excellence, Islamic foundations, language proficiency, and character building.",
    introAr: "منظومة تعليمية تجمع بين التميز الأكاديمي، والتأصيل الشرعي، والمهارات اللغوية، وبناء الشخصية المتوازنة.",
    sections: [
      {
        title: "Educational Framework",
        titleAr: "الإطار التعليمي",
        body: "Academic tutoring, Quranic studies, modern languages, and digital learning platforms.",
        bodyAr: "دعم أكاديمي، ودراسات قرآنية، ولغات حديثة، ومنصات تعلم رقمية متطورة.",
      },
    ],
  },
};

export const sectorOrder: SectorSlug[] = ["construction", "environmental", "garment", "food", "research", "education"];

export const sectorSectionCount = (sector: SectorPageData) => sector.sections.length;

export const sectorFullMenu = (sector: SectorPageData): SectorSection[] => {
  if (sector.slug === "food") {
    return [...sector.sections];
  }
  return [
    ...sector.sections,
    { title: "News & Resources", titleAr: "الأخبار والمصادر", body: "Sector news, catalogues, studies and company profiles.", bodyAr: "أخبار القطاع والكتالوجات والدراسات والملفات التعريفية." },
    contactSection,
  ];
};


