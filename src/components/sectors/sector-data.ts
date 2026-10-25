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
    company: "SBA · JZRA FASHION",
    companyAr: "SBA · JZRA FASHION",
    logo: { url: jzraLogo.url, alt: "JZRA Fashion" },
    name: "Garment Manufacturing & Fashion Development",
    nameAr: "تصنيع الملابس وتطوير الأزياء",
    tagline: "Integrated manufacturing solutions for fashion brands and global markets",
    taglineAr: "حلول تصنيع متكاملة للعلامات التجارية والأسواق العالمية",
    intro: "Integrated ready-made garment manufacturing: product development, diverse production capabilities and manufacturing management — specialised in women's, children's and men's apparel, from pattern making to export preparation.",
    introAr: "حلول متكاملة لتصنيع الملابس الجاهزة: تطوير المنتجات، وقدرات إنتاج متنوعة، وإدارة التصنيع — مع تخصص في ملابس النساء والأطفال والرجال، من إعداد الباترون حتى تجهيز التصدير.",
    sections: [
      {
        title: "Who We Are", titleAr: "من نحن",
        body: "An integrated fabric and garment manufacturing group, combining fabric production, garment manufacturing, product development, private-label programmes and export preparation.",
        bodyAr: "مجموعة متكاملة في تصنيع الأقمشة والملابس الجاهزة، تجمع بين تصنيع الأقمشة وتصنيع الملابس وتطوير المنتجات وبرامج التصنيع للعلامات التجارية وتجهيز التصدير.",
      },
      {
        title: "Why Us", titleAr: "لماذا نحن",
        body: "An integrated manufacturing network covering fabrics, product development, sampling, production, quality control and packaging, with a focus on lasting manufacturing partnerships.",
        bodyAr: "منظومة تصنيع متكاملة تغطي الأقمشة وتطوير المنتجات والعينات والإنتاج ومراقبة الجودة والتعبئة، مع التركيز على بناء علاقات تصنيع مستمرة ومستدامة.",
      },
      {
        title: "Our Services", titleAr: "خدماتنا",
        body: "Product development and sampling, private-label manufacturing, OEM and FOB programmes, quality control, packaging and export preparation.",
        bodyAr: "تطوير المنتجات والعينات، والتصنيع للعلامات الخاصة، وبرامج OEM وFOB، ومراقبة الجودة، والتعبئة وتجهيز التصدير.",
      },
      {
        title: "What We Do",
        titleAr: "ماذا نقدم",
        body: "Engagement models for brands, importers and distributors.",
        bodyAr: "نماذج تعاون للعلامات التجارية والمستوردين والموزعين.",
        items: [
          { label: "Product Development & Sampling", labelAr: "تطوير المنتجات والعينات" },
          { label: "Private Label (OEM)", labelAr: "العلامات الخاصة (OEM)" },
          { label: "FOB Programs", labelAr: "برامج التسليم على ظهر السفينة" },
          { label: "Quality Control", labelAr: "مراقبة الجودة" },
        ],
      },
      {
        title: "Our Products",
        titleAr: "منتجاتنا",
        body: "Women's wear: dresses, abayas, modestwear, tunics, sleepwear, eveningwear, sportswear. Men's wear: classic shirts, polos, T-shirts, casual pants, hoodies. Children's wear: sets, casualwear, dresses and sportswear.",
        bodyAr: "ملابس حريمي: فساتين وعبايات وملابس محتشمة وتونيك وملابس نوم وسهرة ورياضية. رجالي: قمصان كلاسيك وبولو وتي شيرت وبناطيل كاجوال وهودي. أطفال: أطقم وملابس كاجوال وفساتين وملابس رياضية.",
        items: [
          { label: "Women's Apparel", labelAr: "الملابس الحريمي" },
          { label: "Men's Apparel", labelAr: "الملابس الرجالي" },
          { label: "Children's Apparel", labelAr: "ملابس الأطفال" },
        ],
      },
      {
        title: "Manufacturing Capabilities",
        titleAr: "قدراتنا التصنيعية",
        body: "5,000+ pieces produced daily and 100,000+ monthly, across 15+ production lines with 250+ machines and a team of 400+ — with more than 20,000 styles developed.",
        bodyAr: "أكثر من 5,000 قطعة يوميًا وأكثر من 100,000 قطعة شهريًا، عبر أكثر من 15 خط إنتاج و250 ماكينة وفريق يضم أكثر من 400 عامل — مع تطوير أكثر من 20,000 موديل.",
      },
      {
        title: "Classic Shirt Factory",
        titleAr: "مصنع القمصان الكلاسيك",
        body: "A specialised facility with 100 dedicated machines producing up to 30,000 classic shirts per month.",
        bodyAr: "مصنع متخصص بـ100 ماكينة مخصصة بطاقة تصل إلى 30,000 قميص كلاسيك شهريًا.",
      },
      {
        title: "Manufacturing Process",
        titleAr: "مراحل التصنيع",
        body: "Pattern making, sampling, cutting, sewing, finishing and export preparation — each stage controlled against the approved specifications.",
        bodyAr: "إعداد الباترون، والعينات، والقص، والخياطة، والتشطيب، وتجهيز التصدير — مع ضبط كل مرحلة وفق المواصفات المعتمدة.",
      },
      {
        title: "Quality Assurance",
        titleAr: "الجودة",
        body: "Quality is built into every stage: fabric and measurement checks, pattern verification, prototype approval, and final inspection against client-approved technical specifications.",
        bodyAr: "الجودة جزء من عملية التصنيع: فحص الأقمشة والمقاسات، ومراجعة الباترون، واعتماد العينة، وفحص نهائي وفق المواصفات الفنية المعتمدة للعميل.",
      },
    ],
  },
  construction: {
    slug: "construction",
    image: construction,
    company: "Sami Bin Ayyad Group Contracting & Real Estate Development",
    companyAr: "مجموعة سامي بن عياد للمقاولات والتطوير العقاري",
    name: "Contracting & Real Estate Development",
    nameAr: "المقاولات والتطوير العقاري",
    tagline: "Integrated solutions for construction and property development",
    taglineAr: "حلول متكاملة لتنفيذ المشروعات وتطوير المباني",
    intro: "General contracting, construction, real-estate development and finishing — with documented delivery across healthcare, residential, commercial, administrative, industrial and oil & gas projects.",
    introAr: "مقاولات عامة وإنشاءات وتطوير عقاري وتشطيبات — مع سجل تنفيذ موثق في المشروعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية.",
    sections: [
      {
        title: "Who We Are",
        titleAr: "من نحن",
        body: "General contracting, construction, real-estate development and finishing — with documented delivery across healthcare, residential, commercial, administrative, industrial and oil & gas projects.",
        bodyAr: "مقاولات عامة وإنشاءات وتطوير عقاري وتشطيبات — مع سجل تنفيذ موثق في المشروعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية.",
      },
      {
        title: "What We Do",
        titleAr: "ماذا نفعل",
        body: "Construction, development and building upgrades, comprehensive maintenance and restoration, architectural and structural works, interior and exterior finishing, and electromechanical systems.",
        bodyAr: "أعمال الإنشاء والتطوير ورفع كفاءة المباني، والصيانة الشاملة والترميم، والأعمال المعمارية والإنشائية، والتشطيبات الداخلية والخارجية، والأنظمة الكهروميكانيكية.",
      },
      {
        title: "What We Offer",
        titleAr: "ماذا نقدم",
        body: "Integrated solutions and multiple disciplines under one accountable roof.",
        bodyAr: "حلول متكاملة وتخصصات متعددة تحت مسؤولية واحدة.",
        items: [
          { label: "General Contracting & Construction", labelAr: "المقاولات والإنشاءات العامة" },
          { label: "Healthcare Facilities", labelAr: "المنشآت الطبية" },
          { label: "Oil & Gas Projects", labelAr: "مشروعات البترول والغاز" },
          { label: "Electromechanical Systems", labelAr: "الأنظمة الكهروميكانيكية" },
          { label: "Finishing & Design", labelAr: "التشطيبات والتصميم" },
        ],
      },
      {
        title: "Sectors We Serve",
        titleAr: "قطاعات نخدمها",
        body: "Execution experience across healthcare, residential, commercial, administrative, industrial and oil & gas sectors.",
        bodyAr: "خبرة تنفيذ في القطاعات الطبية والسكنية والتجارية والإدارية والصناعية والبترولية.",
      },
      {
        title: "Track Record",
        titleAr: "خبرة موثقة بالأرقام",
        body: "57+ documented projects with a recorded business volume of EGP 400,520,409 between 2013 and 2024 — peaking at EGP 125,950,813 in 2016 and EGP 86,220,000 in 2023.",
        bodyAr: "أكثر من 57 مشروعًا موثقًا بحجم أعمال مسجل 400,520,409 جنيهًا بين 2013 و2024 — بذروة بلغت 125,950,813 جنيهًا في 2016 و86,220,000 جنيهًا في 2023.",
      },
      {
        title: "Healthcare & Specialised Installations",
        titleAr: "المنشآت الطبية والتجهيزات المتخصصة",
        body: "Operating theatres, imaging and sterilisation rooms, and medical gas systems — executed to the operational technicalities healthcare facilities require.",
        bodyAr: "غرف عمليات وغرف أشعة وتعقيم وأنظمة غازات طبية — بتنفيذ يراعى فيه الجوانب التشغيلية التي تتطلبها المنشآت الطبية.",
      },
      {
        title: "Quality & Execution",
        titleAr: "الجودة والتنفيذ",
        body: "Coordination between disciplines and commitment to client requirements and agreed specifications — responsible execution on every site.",
        bodyAr: "التنسيق بين التخصصات المختلفة والالتزام بمتطلبات العميل والمواصفات المتفق عليها — مسؤولية في التنفيذ في كل موقع.",
      },
    ],
  },
  environmental: {
    slug: "environmental",
    image: enviro,
    company: "ENVIROTAQA",
    companyAr: "إنفيروتاقة",
    name: "Environment & Sustainability",
    nameAr: "البيئة والاستدامة",
    tagline: "Integrated environmental solutions that turn challenges into sustainable opportunities",
    taglineAr: "حلول بيئية متكاملة تحوّل التحديات إلى فرص مستدامة",
    intro: "Specialised advisory and technical services in environmental performance, regulatory compliance and resource efficiency — spanning environmental management, energy, water, waste, technology and R&D.",
    introAr: "خدمات استشارية وفنية متخصصة في الأداء البيئي والالتزام التنظيمي وكفاءة الموارد — تشمل الإدارة البيئية والطاقة والمياه والنفايات والتكنولوجيا والبحث والتطوير.",
    sections: [
      {
        title: "Who We Are", titleAr: "من نحن",
        body: "A multidisciplinary team drawing on accumulated experience in energy, environment, water, waste management, sustainability, technology and research and development in Egypt and the Middle East.",
        bodyAr: "فريق متعدد التخصصات يستند إلى خبرات متراكمة في الطاقة والبيئة والمياه وإدارة المخلفات والاستدامة والتكنولوجيا والبحث والتطوير في مصر والشرق الأوسط.",
      },
      {
        title: "What We Do", titleAr: "ماذا نفعل",
        body: "Developing, managing and supporting environmental solutions, studies and projects by combining technical, scientific, management and commercial expertise.",
        bodyAr: "تطوير وإدارة ودعم الحلول والدراسات والمشروعات البيئية، من خلال الجمع بين الخبرات الفنية والعلمية والإدارية والتجارية.",
      },
      {
        title: "Why Us", titleAr: "لماذا نحن",
        body: "Multidisciplinary expertise connects environmental performance, operational requirements and business development, adapting technologies to local and regional market needs.",
        bodyAr: "خبرات متعددة التخصصات تربط الأداء البيئي بالمتطلبات التشغيلية وتطوير الأعمال، مع تكييف التقنيات لاحتياجات السوق المحلي والإقليمي.",
      },
      {
        title: "Our Services", titleAr: "خدماتنا",
        body: "Environmental studies and consulting, waste management and resource recovery, water and wastewater solutions, energy and sustainability support, and HSE, compliance and risk management.",
        bodyAr: "الدراسات والاستشارات البيئية، وإدارة المخلفات واسترداد الموارد، وحلول المياه والصرف، ودعم الطاقة والاستدامة، والسلامة والامتثال وإدارة المخاطر.",
      },
      {
        title: "Our Products", titleAr: "منتجاتنا",
        body: "Specialised environmental and technical products and solutions for biological treatment, oil-waste treatment and odour control, alongside digital environmental monitoring and compliance tools.",
        bodyAr: "منتجات وحلول بيئية وتقنية متخصصة للمعالجة البيولوجية ومعالجة المخلفات النفطية والتحكم في الروائح، إلى جانب أدوات الرصد البيئي الرقمي ومتابعة الامتثال.",
        items: [
          { label: "Bioremediation Products", labelAr: "منتجات المعالجة البيولوجية" },
          { label: "Oil Waste Treatment", labelAr: "معالجة المخلفات النفطية" },
          { label: "Odour Control", labelAr: "التحكم في الروائح" },
        ],
      },
      {
        title: "Sectors We Serve", titleAr: "قطاعاتنا",
        body: "Experience spans oil and gas, renewable energy, manufacturing, construction and real estate, water and wastewater, waste management, agriculture, healthcare, education, retail and the public sector.",
        bodyAr: "تمتد الخبرات إلى النفط والغاز والطاقة المتجددة والتصنيع والمقاولات والعقارات والمياه والصرف وإدارة المخلفات والزراعة والرعاية الصحية والتعليم والتجزئة والقطاع العام.",
      },
      {
        title: "Environmental Studies & Consulting",
        titleAr: "الدراسات والاستشارات البيئية",
        body: "Regulatory assessments and strategic consulting for industrial, tourism and development projects.",
        bodyAr: "تقييمات تنظيمية واستشارات استراتيجية لمشروعات الصناعة والسياحة والتطوير.",
        items: [
          { label: "Environmental Impact Assessment (EIA)", labelAr: "تقييم الأثر البيئي" },
          { label: "Environmental & Social Impact Assessment (ESIA)", labelAr: "تقييم الأثر البيئي والاجتماعي" },
          { label: "Strategic Environmental Assessment (SEA)", labelAr: "التقييم البيئي الاستراتيجي" },
          { label: "Environmental Audit & Due Diligence", labelAr: "التدقيق البيئي والفحص النافي للجهالة" },
        ],
      },
      {
        title: "Waste Management & Resource Recovery",
        titleAr: "إدارة المخلفات وتحويلها إلى قيمة",
        body: "Management of solid, organic, agricultural, food, animal and industrial waste — turning waste into valuable resources.",
        bodyAr: "إدارة النفايات الصلبة والعضوية والزراعية والغذائية والحيوانية والصناعية — وتحويلها إلى موارد ذات قيمة.",
        items: [
          { label: "Compost (السماد العضوي)", labelAr: "السماد العضوي" },
          { label: "Biochar (الفحم الحيوي)", labelAr: "الفحم الحيوي" },
          { label: "Biogas (الغاز الحيوي)", labelAr: "الغاز الحيوي" },
          { label: "Bioremediation & Oil-waste Treatment", labelAr: "المعالجة الحيوية ومعالجة النفايات النفطية" },
          { label: "Waste-to-Energy", labelAr: "تحويل النفايات إلى طاقة" },
        ],
      },
      {
        title: "Water & Wastewater",
        titleAr: "المياه ومعالجة مياه الصرف",
        body: "Chemical and biological analysis, quality assessment and treatment solutions for water resources and wastewater.",
        bodyAr: "تحاليل كيميائية وبيولوجية وتقييم جودة وحلول معالجة لموارد المياه ومياه الصرف.",
      },
      {
        title: "Energy, Sustainability & Climate",
        titleAr: "الطاقة والاستدامة والتغير المناخي",
        body: "Technical support for solar energy, bioenergy, biogas, biofuels and waste-to-energy — with greenhouse gas management and carbon footprint reduction.",
        bodyAr: "دعم فني للطاقة الشمسية والطاقة الحيوية والغاز الحيوي والوقود الحيوي وتحويل النفايات إلى طاقة — مع إدارة انبعاثات الغازات الدفيئة وخفض البصمة الكربونية.",
      },
      {
        title: "HSE, Compliance & Risk Management",
        titleAr: "السلامة والامتثال وإدارة المخاطر",
        body: "Operational safety, quality assurance and environmental risk assessment for industry and development.",
        bodyAr: "السلامة التشغيلية وضمان الجودة وتقييم المخاطر البيئية للصناعة والتطوير.",
      },
      {
        title: "Technology & Specialised Products",
        titleAr: "التكنولوجيا والمنتجات المتخصصة",
        body: "EHS/QHSE mobile applications, IoT-based environmental monitoring, data management platforms and compliance tracking — with scalable solutions from small to large projects.",
        bodyAr: "تطبيقات EHS/QHSE للهواتف، ورصد بيئي قائم على إنترنت الأشياء، ومنصات إدارة البيانات وتتبع الالتزام — مع حلول قابلة للتوسع من المشروعات الصغيرة إلى الكبيرة.",
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
        bodyAr: "علوم الحديث، والفقه والعبادات، والتوحيد والعقيدة — نصل بين العلوم الشرعية الأصيلة والبحث المعاصر.",
      },
      {
        title: "Sheikh Sami bin Bayoumi bin Ayyad",
        titleAr: "الشيخ سامي بن بيومي بن عياد",
        body: "The scholarly works at the heart of the sector's publishing programme.",
        bodyAr: "المؤلفات العلمية التي يقوم عليها برنامج النشر في القطاع.",
      },
      {
        title: "Areas of Scholarly Focus",
        titleAr: "مجالات التخصص العلمي",
        body: "Specialised research disciplines.",
        bodyAr: "تخصصات بحثية دقيقة.",
        items: [
          { label: "Hadith Studies & Rulings", labelAr: "علوم الحديث وأحكام الأحاديث" },
          { label: "Jurisprudence & Worship", labelAr: "الفقه والعبادات" },
          { label: "Tawhid & Creed", labelAr: "التوحيد والعقيدة" },
          { label: "Critical Editing of Classical Texts", labelAr: "التحقيق والدراسة العلمية للنصوص" },
        ],
      },
      {
        title: "Books & Scholarly Works",
        titleAr: "المؤلفات والأعمال العلمية",
        body: "Al-Madkhal ila al-Tawhid · Fiqh al-Siyam · Shara'i Sha'ban · What Do You Know About the Shia? · Al-Bayan on the Hadith «رُفع عن أمتي الخطأ والنسيان» · Majmu'at al-Ajza' al-Hadithiyyah · treatises on prayer and its description.",
        bodyAr: "المدخل إلى التوحيد · فقه الصيام · شرائع شعبان · ماذا تعرف عن الشيعة؟ · البيان في حديث «رُفع عن أمتي الخطأ والنسيان» · مجموعة الأجزاء الحديثية · رسائل في الصلاة وصفاتها.",
      },
      {
        title: "An Ongoing Scholarly Project",
        titleAr: "مشروع علمي ممتد",
        body: "More than 30 substantial works under preparation, with active participation in international book fairs from 2009 to 2025.",
        bodyAr: "أكثر من 30 مؤلفًا كبيرًا تحت التجهيز، مع مشاركة فعالة في معارض الكتاب الدولية من 2009 إلى 2025.",
      },
      {
        title: "Our Scholarly Workflow",
        titleAr: "منهجية العمل العلمي",
        body: "From source collection and verification to digital archiving and publication.",
        bodyAr: "من جمع المصادر وتخريجها إلى الأرشفة الرقمية والنشر.",
      },
    ],
  },
  education: {
    slug: "education",
    image: education,
    company: "REWAQ ACADEMY",
    companyAr: "أكاديمية رِواق",
    name: "Education & Knowledge Development",
    nameAr: "التعليم وتنمية المعرفة",
    tagline: "Structured knowledge, thoughtful education, and skills that grow through lifelong learning",
    taglineAr: "معرفة منظمة، وتربية واعية، ومهارات تنمو بالتعلم المستمر",
    intro: "An integrated educational initiative harmonising academic support, religious knowledge and cultural development — using modern technology and supplementary activities to turn educational needs into meaningful opportunities.",
    introAr: "مبادرة تعليمية متكاملة تجمع الدعم الأكاديمي والمعرفة الدينية والتنمية الثقافية — باستخدام التكنولوجيا الحديثة والأنشطة المساندة لتحويل الاحتياجات التعليمية إلى فرص حقيقية.",
    sections: [
      {
        title: "Learning Areas",
        titleAr: "ماذا نقدم",
        body: "Core pillars of the academy's offerings.",
        bodyAr: "الركائز الأساسية لما تقدمه الأكاديمية.",
        items: [
          { label: "Academic Learning & Skills Development", labelAr: "التعليم الأكاديمي وتنمية المهارات" },
          { label: "Qur'an & Islamic Studies", labelAr: "القرآن الكريم والعلوم الشرعية" },
          { label: "Arabic Language & Cultural Identity", labelAr: "اللغة العربية والهوية الثقافية" },
          { label: "Foreign Languages", labelAr: "اللغات الأجنبية" },
          { label: "Character & Personal Development", labelAr: "التربية وبناء الشخصية" },
          { label: "Educational & Cultural Activities", labelAr: "الأنشطة التعليمية والثقافية" },
        ],
      },
      {
        title: "Our Learning Approach",
        titleAr: "منهجيتنا التعليمية",
        body: "Organised pathways and learner-centric design, tailored to the diverse needs and abilities of each stage.",
        bodyAr: "مسارات منظمة وتصميم يرتكز على المتعلم، يراعى فيه اختلاف الاحتياجات والقدرات بين المراحل.",
      },
      {
        title: "Digital Platform & Content",
        titleAr: "المنصة التعليمية والمحتوى الرقمي",
        body: "An Arabic-English electronic library under active development, with digital learning content and access solutions.",
        bodyAr: "مكتبة إلكترونية باللغتين العربية والإنجليزية قيد التطوير، مع محتوى تعلم رقمي وحلول وصول.",
      },
      {
        title: "Who We Serve",
        titleAr: "الفئات المستفيدة",
        body: "Learners of every stage and institutional partners — delivery determined by approved content tailored to each target group.",
        bodyAr: "متعلمون في كل المراحل وشركاء مؤسسيون — ويُحدد التنفيذ وفق المحتوى المعتمد لكل فئة.",
      },
      {
        title: "Educational Partnerships",
        titleAr: "الشراكات والتعاون التعليمي",
        body: "Curriculum development, knowledge material preparation and joint initiatives — partnerships are announced only after formal verification and approval.",
        bodyAr: "تطوير المناهج وإعداد المواد المعرفية والمبادرات المشتركة — ولا يُعلن عن أي شراكة إلا بعد التحقق الرسمي والموافقة.",
      },
    ],
  },
  food: {
    slug: "food",
    image: food,
    company: "Sami Bin Ayyad Group · Food & Natural Products",
    companyAr: "مجموعة سامي بن عياد · الأغذية والمنتجات الطبيعية",
    name: "Food & Natural Products",
    nameAr: "الأغذية والمنتجات الطبيعية",
    tagline: "From nature's finest to global markets",
    taglineAr: "من خيرات الطبيعة إلى الأسواق العالمية",
    intro: "Sourcing and marketing a diverse range of natural food products for local and international markets — a flexible commercial ecosystem that bridges primary producers and global distributors, with variety, quality and supply reliability at its core.",
    introAr: "توريد وتسويق مجموعة متنوعة من الأغذية الطبيعية للأسواق المحلية والعالمية — منظومة تجارية مرنة تربط بين المصادر الأولى والموزعين العالميين، مع التنوع والجودة وموثوقية التوريد في صميم عملها.",
    sections: [
      {
        title: "Our Products",
        titleAr: "منتجاتنا",
        body: "A multi-category portfolio tailored to different consumer segments.",
        bodyAr: "محفظة منتجات متعددة الفئات تلبي شرائح المستهلكين المختلفة.",
        items: [
          { label: "Honey & Bee Products", labelAr: "عسل النحل ومنتجاته" },
          { label: "Olives, Oils & Date Products", labelAr: "الزيتون والزيوت ومنتجات التمر" },
          { label: "Premium Dates", labelAr: "التمور الفاخرة" },
          { label: "Herbs, Spices & Natural Beverages", labelAr: "الأعشاب والتوابل والمشروبات الطبيعية" },
        ],
      },
      {
        title: "Honey & Bee Products",
        titleAr: "عسل النحل ومنتجاته",
        body: "Sidr, black seed, clover, citrus and marjoram honey — plus honeycomb and royal jelly.",
        bodyAr: "عسل السدر وحبة البركة ونوارة البرسيم وزهور الموالح والبردقوش — مع عسل الشمع وغذاء الملكات.",
      },
      {
        title: "Olives, Oils & Date Products",
        titleAr: "الزيتون والزيوت ومنتجات التمر",
        body: "Various olive types and extra virgin olive oil, with date molasses and date jam.",
        bodyAr: "أنواع متعددة من الزيتون وزيت الزيتون البكر، مع دبس التمر ومربى التمر.",
      },
      {
        title: "Premium Dates",
        titleAr: "التمور الفاخرة",
        body: "Sukkari, Ajwa, Medjool, Rutab, Sagai, Safawi, Khudri and Anbara — a specialised selection for premium markets.",
        bodyAr: "السكري والعجوة والمجدول والرطب والصقعي والصفاوي والخضري والعنبري — تشكيلة مختصة للأسواق الفاخرة.",
      },
      {
        title: "Commercial Vision",
        titleAr: "الرؤية التجارية",
        body: "An integrated sector built on product diversity and sustainable trade routes connecting producers directly to global distributors — with flexible sourcing, scalable packaging to international standards, and strategic partnerships with suppliers and large-scale importers.",
        bodyAr: "قطاع متكامل يقوم على تنوع المنتجات ومسارات تجارية مستدامة تربط المنتجين بالموزعين العالميين مباشرة — مع مرونة في التوريد وتغليف قابل للتوسع وفق المعايير الدولية، وشراكات استراتيجية مع الموردين والمستوردين على نطاق واسع.",
      },
      {
        title: "Division Highlights", titleAr: "مميزات القطاع",
        body: "A diverse natural-food portfolio, commercial partnerships with suppliers and distributors, flexible sourcing and packaging, and opportunities for local, regional and international market expansion.",
        bodyAr: "منتجات غذائية طبيعية متنوعة، وشراكات تجارية مع الموردين والموزعين، وخيارات توريد وتعبئة مرنة، وفرص للتوسع في الأسواق المحلية والإقليمية والدولية.",
        items: [
          { label: "Diverse Product Portfolio", labelAr: "تنوع المنتجات" },
          { label: "Commercial Partnerships", labelAr: "شراكات تجارية" },
          { label: "Flexible Sourcing", labelAr: "حلول توريد مرنة" },
          { label: "Market Expansion", labelAr: "التوسع في الأسواق" },
        ],
      },
      {
        title: "Cooperation Opportunities", titleAr: "فرص التعاون",
        body: "Contact SAMI BIN AYYAD GROUP to explore sourcing, distribution, and commercial partnership opportunities, and discuss suitable products, quantities, and packaging options for your business.",
        bodyAr: "تواصل مع مجموعة سامي بن عياد لاستكشاف فرص التوريد والتوزيع والتعاون التجاري، ومناقشة المنتجات والكميات وخيارات التعبئة المناسبة لاحتياجات أعمالك.",
      },
    ],
  },
};

export const sectorOrder: SectorSlug[] = ["garment", "construction", "environmental", "research", "education", "food"];

export const sectorSectionCount = (sector: SectorPageData) => sector.sections.length;

export const sectorFullMenu = (sector: SectorPageData): SectorSection[] => [
  ...sector.sections,
  { title: "News & Resources", titleAr: "الأخبار والمصادر", body: "Sector news, catalogues, studies and company profiles.", bodyAr: "أخبار القطاع والكتالوجات والدراسات والملفات التعريفية." },
  contactSection,
];
