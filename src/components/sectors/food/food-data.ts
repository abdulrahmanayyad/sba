export interface FoodHero {
  titleEn: string;
  titleAr: string;
  companyEn: string;
  companyAr: string;
  subtitleEn: string;
  subtitleAr: string;
  heroImage: string;
}

export const foodHeroData: FoodHero = {
  titleEn: "Natural & Agri-Food Products",
  titleAr: "المنتجات الطبيعية والغذائية",
  companyEn: "SAMI BIN AYYAD GROUP",
  companyAr: "مجموعة سامي بن عياد",
  subtitleEn:
    "Developing, marketing, and supplying selected authentic agri-food products connecting certified Egyptian and international origins to global markets.",
  subtitleAr:
    "أصالة المصادر وجودة المنتج وتنوع الاستخدامات في الأسواق الإقليمية والدولية",
  heroImage: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg",
};

export interface ValueItem {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export interface SupplyModel {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  badgeEn: string;
  badgeAr: string;
}

export interface WhyChooseItem {
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
}

export interface FoodAbout {
  whoWeAre: {
    titleEn: string;
    titleAr: string;
    paragraphsEn: string[];
    paragraphsAr: string[];
  };
  vision: {
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
  };
  mission: {
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
  };
  approach: {
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
  };
  values: ValueItem[];
  whatWeOffer: {
    titleEn: string;
    titleAr: string;
    descEn: string;
    descAr: string;
    models: SupplyModel[];
  };
  whyChooseUs: WhyChooseItem[];
}

export const foodAboutData: FoodAbout = {
  whoWeAre: {
    titleAr: "من نحن",
    titleEn: "Who We Are",
    paragraphsAr: [
      "نوفر خيارات توريد من العسل ومنتجات النحل، والزيتون وزيت الزيتون، والتمور ومشتقاتها، والأعشاب والتوابل ومكونات المشروبات. نراجع مع العميل المنشأ والمواصفات والكميات والتعبئة ومتطلبات التسليم لكل طلب.",
      "ونستهدف بناء منظومة تجارية مرنة تشمل التوريد بالجملة للكميات التجارية، والتعبئة بعلامة العميل بحسب الإمكانات المتاحة، وتجهيز المستندات المطلوبة للشحنة وفق المنتج والوجهة.",
    ],
    paragraphsEn: [
      "We source and supply selected honey and bee products, olives and olive oil, dates and date products, herbs, spices and beverage ingredients. Each enquiry is reviewed against the required origin, specification, quantity, packaging and destination.",
      "Our supply models include commercial wholesale, bulk orders, private-label packing where available, and food-service supply, with shipment documentation and logistics responsibilities agreed for each order.",
    ],
  },
  vision: {
    titleAr: "رؤيتنا",
    titleEn: "Our Vision",
    descAr:
      "أن نكون علامة تجارية موثوقة في مجال المنتجات الطبيعية والغذائية، وأن نوسع حضور المنتجات ذات المنشأ الموثوق في الأسواق الإقليمية والدولية.",
    descEn:
      "To stand as a recognized and trusted brand benchmark in natural and food products, expanding the footprint of authentic, origin-certified commodities in regional and international markets.",
  },
  mission: {
    titleAr: "رسالتنا",
    titleEn: "Our Mission",
    descAr:
      "تقديم منتجات طبيعية وغذائية مختارة بمواصفات واضحة ومعلومات دقيقة عن المنشأ والجودة والتعبئة، بما يلبي احتياجات المستهلكين والموزعين وشركاء الأعمال.",
    descEn:
      "Delivering selected natural and food items with transparent specifications, accurate origin traceability, uncompromising quality, and tailored packaging that fulfills the needs of consumers, distributors, and B2B commercial partners.",
  },
  approach: {
    titleAr: "نهجنا",
    titleEn: "Our Approach",
    descAr:
      "نعتمد على اختيار مصادر التوريد بعناية، وتحديد المواصفات الفنية المناسبة لكل منتج، ومراعاة متطلبات الجودة وسلامة الغذاء والتعبئة والتغليف، مع توفير حلول توريد مرنة تتناسب مع طبيعة كل سوق واحتياجات كل عميل.",
    descEn:
      "We rely on rigorous sourcing criteria, clearly defined technical specifications, strict adherence to international food safety and packaging standards, and agile supply programs aligned with market dynamics and buyer requirements.",
  },
  values: [
    {
      titleAr: "الجودة والموثوقية",
      titleEn: "Quality & Reliability",
      descAr: "الالتزام بتقديم منتجات مطابقة للمواصفات المتفق عليها.",
      descEn: "Strict adherence to delivering products matching contractual specifications.",
    },
    {
      titleAr: "الشفافية",
      titleEn: "Transparency",
      descAr: "الوضوح في تحديد المنشأ والمكونات والمواصفات.",
      descEn: "Full clarity and traceability in stating origin, ingredients, and specs.",
    },
    {
      titleAr: "المسؤولية",
      titleEn: "Responsibility",
      descAr: "الاهتمام بمصادر المنتجات وطرق توريدها.",
      descEn: "Stewardship over sourcing origins, agricultural integrity, and supply chains.",
    },
    {
      titleAr: "الالتزام",
      titleEn: "Commitment",
      descAr: "احترام المواعيد ومتطلبات العملاء.",
      descEn: "Honoring delivery schedules, export quotas, and exact client requirements.",
    },
    {
      titleAr: "التطوير",
      titleEn: "Innovation & Growth",
      descAr: "مواكبة احتياجات الأسواق وتطوير حلول التوريد.",
      descEn: "Keeping pace with market evolutions and engineering flexible supply solutions.",
    },
    {
      titleAr: "الشراكة",
      titleEn: "Strategic Partnership",
      descAr: "بناء علاقات تجارية طويلة الأمد قائمة على الثقة والمصالح المشتركة.",
      descEn: "Fostering long-term commercial relationships built on mutual trust.",
    },
  ],
  whatWeOffer: {
    titleAr: "ماذا نقدم",
    titleEn: "What We Offer",
    descAr:
      "نوفر مجموعة متنوعة من المنتجات الطبيعية والغذائية من خلال نماذج توريد متعددة تشمل التوريد بالجملة والتوريد التجاري والتعبئة بعلامة العميل الخاصة، وفقًا للإمكانات والمواصفات المطلوبة.\n\nكما نعمل على توفير خيارات متنوعة من المنتجات والأحجام ومواد التعبئة والتغليف، مع الاهتمام بتجهيز متطلبات التوريد والتصدير بما يتناسب مع احتياجات الأسواق المستهدفة.",
    descEn:
      "We provide an expansive range of natural and food products through versatile supply models, including bulk commodity supply, commercial wholesale, and Private Label contract packaging.\n\nWe provide diverse product grades, pack sizes, and food-grade packaging materials, tailored to international export protocols and destination market regulatory requirements.",
    models: [
      {
        titleAr: "التوريد بالجملة والكميات الكبيرة",
        titleEn: "Bulk Commodity & Wholesale Supply",
        descAr: "توريد كميات تجارية وصناعية للمصانع والشركات ومراكز التعبئة ببراميل وأكياس وحاويات معتمدة.",
        descEn: "Commercial and industrial bulk supply for food processors, packers, and distributors in certified drums and containers.",
        badgeAr: "كميات تجارية",
        badgeEn: "Bulk Volume",
      },
      {
        titleAr: "التعبئة بعلامة العميل الخاصة (Private Label)",
        titleEn: "Private Label Contract Packing",
        descAr: "تصنيع وتعبئة المنتجات تحت علامتك التجارية الخاصة بمختلف خيارات الزجاج والعبوات الكرتونية والأكياس.",
        descEn: "Custom co-packing and bottling under your private brand with diverse glass, jar, pouch, and carton options.",
        badgeAr: "علامتك التجارية",
        badgeEn: "OEM / ODM",
      },
      {
        titleAr: "التوريد لقطاع الضيافة والمطاعم (HoReCa)",
        titleEn: "HoReCa & Food Service Supply",
        descAr: "حلول تعبئة وتوريد دوري منتظم للفنادق والمنتجعات والمطاعم الكبرى بأعلى معايير سلامة الغذاء.",
        descEn: "Scheduled supply programs and tailored packaging for premium hotels, restaurants, and food service chains.",
        badgeAr: "خدمات الضيافة",
        badgeEn: "Food Service",
      },
      {
        titleAr: "تجهيز متطلبات التصدير والتخليص",
        titleEn: "Export Logistics & Compliance",
        descAr: "إصدار الشهادات الصحية، شهادات المنشأ، نتائج التحاليل المخبرية، والتحميل البحري والجوي المنتظم.",
        descEn: "Comprehensive health certificates, phytosanitary origin docs, lab assays, and sea/air export logistics.",
        badgeAr: "معايير دولية",
        badgeEn: "Certified Export",
      },
    ],
  },
  whyChooseUs: [
    {
      titleAr: "تنوع في فئات المنتجات ومصادر التوريد",
      titleEn: "Diverse Categories & Trusted Origins",
      descAr: "تغطية شاملة لـ 7 فئات إنتاجية متخصصة تجمع بين المصادر المصرية الأصيلة ومصادر الاستيراد العالمية الموثوقة.",
      descEn: "Comprehensive coverage across 7 specialized product categories bridging authentic Egyptian farms and vetted international sources.",
    },
    {
      titleAr: "مرونة في كميات التوريد وخيارات التعبئة",
      titleEn: "Volume Flexibility & Packaging Solutions",
      descAr: "حلول تبدأ من عبوات التجزئة الفاخرة وصولًا إلى الحاويات والبراميل الصناعية لتلبية كافة نماذج العمل.",
      descEn: "Versatile options ranging from premium consumer retail glass jars to industrial containers and food drums.",
    },
    {
      titleAr: "اهتمام بجودة المنتج وتوثيق بيانات المنشأ",
      titleEn: "Rigorous Quality & Origin Traceability",
      descAr: "فحص دوري، شهادات تحليل معملية معتمدة، وتتبع دقيق للمواصفات ومستويات الحموضة والنقاء.",
      descEn: "Routine lab testing, accredited chemical/physical analyses, and precise traceability of harvest origin.",
    },
    {
      titleAr: "حلول تجارية تتناسب مع احتياجات الأسواق المختلفة",
      titleEn: "Targeted Regional Market Solutions",
      descAr: "معرفة تفصيلية بمتطلبات الاستيراد والمواصفات القياسية في دول الخليج، شمال إفريقيا، وأسواق الاتحاد الأوروبي.",
      descEn: "Deep understanding of regulatory, sanitary, and quality specifications across the GCC, North Africa, and the EU.",
    },
    {
      titleAr: "تواصل واضح واحترافي مع العملاء والشركاء",
      titleEn: "Transparent, Professional Communication",
      descAr: "فريق تجاري متخصص يقدم عروض أسعار سريعة ومفصلة ومتابعة مباشرة من التعاقد حتى الاستلام.",
      descEn: "Dedicated commercial team offering swift quotation responses, sample dispatches, and end-to-end order tracking.",
    },
    {
      titleAr: "توجه نحو بناء علاقات توريد مستدامة وطويلة الأمد",
      titleEn: "Long-Term Sustainable Partnerships",
      descAr: "نركز على الشراكة الاستراتيجية المستمرة التي تضمن استقرار الإمدادات وثبات الجودة على مدار المواسم.",
      descEn: "Commitment to long-range supplier-buyer alliances securing seasonal supply stability and price predictability.",
    },
  ],
};

export interface FoodSectorItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  iconName: string;
  highlightsAr: string[];
  highlightsEn: string[];
  image: string;
}

export const foodSectorsData: FoodSectorItem[] = [
  {
    id: "honey",
    nameAr: "قطاع العسل ومنتجات النحل",
    nameEn: "Honey & Bee Products",
    descAr:
      "نوفر مجموعة مختارة من أنواع العسل الطبيعي ومنتجات النحل المختلفة، مع تنوع المصادر النباتية والخصائص الطبيعية، والاهتمام بتحديد المنشأ والمواصفات الخاصة بكل منتج.",
    descEn:
      "Providing a curated selection of natural honey varieties and bee products, featuring diverse floral sources, distinctive physical profiles, and rigorous origin traceability.",
    iconName: "Flower",
    highlightsAr: [
      "عسل السدر الفاخر وحبة البركة",
      "عسل البرسيم المصري وعسل الموالح الزهري",
      "العسل الأبيض المجري وعسل الشمع والغذاء الملكي",
      "خيارات التعبئة بالتجزئة والبراميل الغذائية للمصانع",
    ],
    highlightsEn: [
      "Premium Sidr & Black Seed floral honeys",
      "Egyptian Clover & Citrus blossom honeys",
      "Hungarian White Honey, Comb Honey & Royal Jelly",
      "Retail glass jars & industrial food-grade drums",
    ],
    image: "/BG/Natural & Agri-Food Products/Natural Honey & Bee Products.jpg",
  },
  {
    id: "olives",
    nameAr: "قطاع الزيتون ومنتجاته",
    nameEn: "Olives & Olive Products",
    descAr:
      "نقدم الزيتون بأصنافه المختلفة ودرجات تجهيزه المتنوعة، سواء للاستهلاك المباشر أو الاستخدام الصناعي، مع خيارات متعددة للتخليل والتعبئة والتجهيز التجاري.",
    descEn:
      "Supplying diverse table olive varieties across multiple preparation grades for direct consumption or industrial processing, with flexible pickling, stuffing, and packaging options.",
    iconName: "CircleDot",
    highlightsAr: [
      "أصناف التفاحي والعجيزي والمانزانيلا والبيكوال",
      "زيتون كامل، منزوع النواة، وشرائح بيتزا وسلطات",
      "زيتون محشو بالفلفل والجزر واللوز",
      "براميل توريد تجاري وصناعي وعبوات مخصصة للبيع بالتجزئة",
    ],
    highlightsEn: [
      "Tofahi, Agizi, Manzanilla, and Picual varieties",
      "Whole, pitted, and sliced table olives",
      "Stuffed olives with bell pepper, carrots, and almonds",
      "Industrial bulk drums and branded retail packaging",
    ],
    image: "/BG/Natural & Agri-Food Products/Table Olives.jpg",
  },
  {
    id: "olive-oil",
    nameAr: "قطاع زيت الزيتون",
    nameEn: "Olive Oil",
    descAr:
      "نوفر أنواعًا متعددة من زيت الزيتون وفق درجات الجودة وطرق الاستخلاص المختلفة، مع الاهتمام بالمواصفات الفنية وبيانات المنشأ وخصائص المنتج.",
    descEn:
      "Offering multiple grades of olive oil categorized by extraction method and culinary profile, with documented acidity benchmarks, harvest origins, and lab certifications.",
    iconName: "Droplets",
    highlightsAr: [
      "زيت زيتون بكر ممتاز Extra Virgin معصور على البارد",
      "زيت زيتون بكر وزيت زيتون مكرر",
      "زيت تفل الزيتون للاستخدامات الصناعية والغذائية",
      "توثيق بلد المنشأ ودرجة الحموضة وتواريخ الصلاحية والتحاليل",
    ],
    highlightsEn: [
      "Cold-extracted Extra Virgin Olive Oil (EVOO)",
      "Virgin Olive Oil & Refined Olive Oil",
      "Olive Pomace Oil for industrial and culinary use",
      "Documented acidity rates, origin verification, and certified assays",
    ],
    image: "/BG/Natural & Agri-Food Products/Olive Oil Grades.jpg",
  },
  {
    id: "dates",
    nameAr: "قطاع التمور ومنتجات النخيل",
    nameEn: "Dates & Palm Products",
    descAr:
      "يشمل القطاع مجموعة من أصناف التمور المحلية والدولية، بالإضافة إلى المنتجات المصنعة من التمور مثل دبس التمر ومربى التمر ومعجون التمر.",
    descEn:
      "Encompassing an extensive selection of Egyptian and international date cultivars alongside high-value palm derivatives including date molasses, date jam, and bakery date paste.",
    iconName: "Sun",
    highlightsAr: [
      "التمور المصرية: السيوي، الصعيدي، الزغلول، الحياني، السماني، الأمهات",
      "أصناف دولية فاخرة: المجدول والبرحي والسكري والعجوة والصفاوي والعنبرة",
      "منتجات مصنعة: دبس التمر الطبيعي، مربى التمر، ومعجون التمر للمخابز",
      "فرز إلكتروني وتدريج للحجم ودرجات الرطوبة وتعبئة محكمة",
    ],
    highlightsEn: [
      "Egyptian heritage cultivars: Siwi, Saidi, Zaghloul, Hayani, Samani, Ommhat",
      "High-value varieties: Medjool, Barhi, Sukkari, Ajwa, Safawi, Anbara",
      "Processed derivatives: Date molasses, date jam, and confectionary paste",
      "Electronic sorting, moisture calibration, and vacuum-sealed packing",
    ],
    image: "/BG/Natural & Agri-Food Products/Dates.jpg",
  },
  {
    id: "herbs",
    nameAr: "قطاع الأعشاب والنباتات الطبيعية",
    nameEn: "Herbs & Natural Plants",
    descAr:
      "نقدم مجموعة من الأعشاب والنباتات الطبيعية المجففة المستخدمة في الصناعات الغذائية والمشروبات والخلطات العشبية، مع تنوع في الأصناف وطرق التجهيز والتعبئة.",
    descEn:
      "Supplying sun-dried and dehydrated aromatic herbs and culinary botanicals for tea infusions, food industries, and seasonings, available in whole, crushed, or cut cuts.",
    iconName: "Leaf",
    highlightsAr: [
      "16 صنفًا رئيسيًا تشمل الكركديه، البابونج، النعناع، والريحان",
      "الأعشاب الطبية والعطرية: الشمر، اليانسون، الكمون، الكزبرة، والكراوية",
      "أعشاب الطهي: الزعتر، الميرمية، إكليل الجبل، الشبت، والبقدونس",
      "أشكال تجهيز متعددة: كاملة، مجروشة، أوراق مقطعة، ومطحونة",
    ],
    highlightsEn: [
      "16 signature botanicals: Hibiscus, Chamomile, Peppermint, Sweet Basil",
      "Medicinal & aromatic seeds: Fennel, Anise, Cumin, Coriander, Caraway",
      "Culinary green herbs: Thyme, Sage, Rosemary, Dill, Parsley",
      "Preparation cuts: Whole leaves, TBC tea-bag cut, crushed, and fine ground",
    ],
    image: "/BG/Natural & Agri-Food Products/Herbs & Natural Plants.jpg",
  },
  {
    id: "spices",
    nameAr: "قطاع التوابل والبهارات",
    nameEn: "Spices & Seasonings",
    descAr:
      "نوفر التوابل المفردة والخلطات الغذائية المتنوعة، سواء كاملة أو مطحونة، لتلبية احتياجات الاستخدام المنزلي والتجاري والصناعي.",
    descEn:
      "Providing single-origin spices and customized culinary seasoning blends, available in whole seed or micronized ground form for household, food service, and industrial manufacturing.",
    iconName: "Sparkles",
    highlightsAr: [
      "توابل مفردة: الكمون، الكزبرة، الفلفل الأسود والأحمر، البابريكا، والكركم",
      "توابل عطرية فاخرة: القرفة، الزنجبيل، الهيل والحبهان، القرنفل، وجوزة الطيب",
      "خلطات بهارات متخصصة: السبع بهارات، خخلطات اللحوم والدجاج والأسماك والكفتة",
      "خيارات التعبئة بالتجزئة وأكياس التوريد الصناعي المقاومة للرطوبة",
    ],
    highlightsEn: [
      "Single spices: Cumin, Coriander, Black/Red Pepper, Paprika, Turmeric",
      "Aromatic premium spices: Cinnamon, Ginger, Cardamom, Clove, Nutmeg",
      "Proprietary blends: 7 Spices, Meat seasoning, Poultry, Seafood, Kofta marinades",
      "Moisture-proof industrial bulk sacks and retail jars/shakers",
    ],
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
  },
  {
    id: "powdered-juices",
    nameAr: "قطاع العصائر والمكونات الطبيعية المجففة",
    nameEn: "Natural Powdered Juices & Ingredients",
    descAr:
      "يشمل القطاع مساحيق الفواكه والخضروات الطبيعية المستخدمة في تحضير المشروبات والمنتجات الغذائية، مع تنوع في النكهات والمكونات وطرق الاستخدام.",
    descEn:
      "Offering spray-dried and dehydrated natural fruit and vegetable powders for instant beverage reconstitution, food blends, and functional ingredient manufacturing.",
    iconName: "Apple",
    highlightsAr: [
      "10 نكهات رئيسية: الكركديه، التمر الهندي، الليمون، والبرتقال",
      "مساحيق فواكه استوائية: المانجو، الجوافة، الرمان، والفراولة",
      "مساحيق خضروات وظيفية: الشمندر (البنجر) والجزر الغني بالكاروتين",
      "مواصفات قياسية للتجفيف وسرعة الذوبان وخيارات التعبئة التجارية",
    ],
    highlightsEn: [
      "10 primary flavors: Hibiscus, Tamarind, Lemon, and Orange",
      "Rich tropical fruit powders: Mango, Guava, Pomegranate, Strawberry",
      "Functional vegetable powders: Beetroot and beta-carotene-rich Carrot",
      "Calibrated solubility rates, fine mesh particle size, and food-grade packaging",
    ],
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Fruit & Vegetable Juices.jpg",
  },
];

export interface FoodProductDetail {
  id: string;
  category: string;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  tagsAr: string[];
  tagsEn: string[];
  image?: string;
}

export interface FoodProductCategory {
  id: string;
  titleAr: string;
  titleEn: string;
  introAr: string;
  introEn: string;
  items: FoodProductDetail[];
  prepFormsAr?: string[];
  prepFormsEn?: string[];
  specsAr?: string[];
  specsEn?: string[];
}

export const foodProductsCategories: FoodProductCategory[] = [
  {
    id: "honey",
    titleAr: "1. العسل الطبيعي ومنتجات النحل",
    titleEn: "1. Natural Honey & Bee Products",
    introAr:
      "العسل الطبيعي من المنتجات الغذائية التي تتميز بتنوع مصادرها النباتية واختلاف خصائصها من حيث اللون والقوام والرائحة والطعم. نوفر تشكيلة موثوقة المصدر ومفحوصة معمليًا.",
    introEn:
      "Natural honey is characterized by its botanical diversity, varying in hue, viscosity, aroma, and flavor profile. We deliver certified, lab-tested harvests from verified apiaries.",
    items: [
      {
        id: "sidr",
        category: "honey",
        nameAr: "عسل السدر",
        nameEn: "Sidr Honey",
        descAr: "يتميز بنكهته الغنية وخصائصه الطبيعية الفائقة، وينتج من رحيق أزهار أشجار السدر البرية.",
        descEn: "Celebrated for its robust aroma, distinct therapeutic qualities, and rich amber color harvested from Sidr blossoms.",
        tagsAr: ["نكهة غنية", "سدر بري", "قيمة غذائية عالية"],
        tagsEn: ["Rich Flavor", "Wild Sidr", "Premium Grade"],
      },
      {
        id: "black-seed",
        category: "honey",
        nameAr: "عسل حبة البركة",
        nameEn: "Black Seed Honey",
        descAr: "عسل يرتبط بمراعي أزهار حبة البركة (الحبة السوداء)، ويتميز بخصائصه المرتبطة بمصدره النباتي ونكهته الفريدة.",
        descEn: "Harvested from Nigella sativa fields, offering an earthy nuance and natural bioactive botanical properties.",
        tagsAr: ["حبة البركة", "لون داكن", "طبيعي 100%"],
        tagsEn: ["Nigella Sativa", "Dark Amber", "100% Pure"],
      },
      {
        id: "clover",
        category: "honey",
        nameAr: "عسل البرسيم",
        nameEn: "Egyptian Clover Honey",
        descAr: "من أشهر أنواع العسل المصري وأكثرها استهلاكًا، ويتميز بلونه الفاتح وقوامه المتوازن وطعمه المعتدل اللطيف.",
        descEn: "Egypt's most widely appreciated staple honey, featuring a light golden hue, smooth texture, and gentle mild sweetness.",
        tagsAr: ["عسل مصري شهير", "لون فاتح", "طعم معتدل"],
        tagsEn: ["Egyptian Classic", "Light Amber", "Mild Taste"],
      },
      {
        id: "citrus",
        category: "honey",
        nameAr: "عسل الموالح",
        nameEn: "Citrus Honey",
        descAr: "ينتج من رحيق أزهار بساتين البرتقال والليمون واليوسفي، ويتميز برائحة زهرية فواحة ونكهة حمضية خفيفة منعشة.",
        descEn: "Harvested from blooming orange and lemon orchards, prized for its delicate floral bouquet and crisp light flavor.",
        tagsAr: ["أزهار البرتقال", "رائحة عطرية", "خفيف ومنعش"],
        tagsEn: ["Orange Blossom", "Floral Fragrance", "Light & Crisp"],
      },
      {
        id: "marjoram",
        category: "honey",
        nameAr: "عسل البردقوش",
        nameEn: "Marjoram Honey",
        descAr: "عسل عشبي مميز يرتبط بمراعي نبات البردقوش العطري، وله خصائص ونكهة عشبية دافئة محببة.",
        descEn: "Rare botanical honey harvested from blooming wild marjoram pastures, featuring a warm herbal aftertaste.",
        tagsAr: ["عشبي نادر", "مراعي البردقوش", "نكهة عطرية"],
        tagsEn: ["Herbal Note", "Wild Pastures", "Aromatic"],
      },
      {
        id: "hungarian-white",
        category: "honey",
        nameAr: "العسل الأبيض المجري",
        nameEn: "Hungarian White Honey",
        descAr: "عسل مستورد فاخر فاتح اللون يتميز بنقائه العالي وقوامه الكريمي ومصدره الأوروبي الموثوق.",
        descEn: "Imported European specialty honey, celebrated for its ultra-light crystalline tone, silky texture, and delicate sweetness.",
        tagsAr: ["مستورد أوروبي", "لون أبيض ناصع", "قوام كريمي"],
        tagsEn: ["European Origin", "Ultra Light", "Silky Texture"],
      },
      {
        id: "comb-honey",
        category: "honey",
        nameAr: "عسل الشمع الطبيعي",
        nameEn: "Pure Comb Honey",
        descAr: "عسل طبيعي خام محفوظ بصورته الأصلية داخل أقراص الشمع الطبيعية التي يبنيها النحل مباشرة.",
        descEn: "Raw, unpasteurized honey intact in its original hexagonal beeswax combs straight from certified hives.",
        tagsAr: ["شمع طبيعي", "خام 100%", "بدون تصفية"],
        tagsEn: ["Raw Honeycomb", "Unfiltered", "Direct from Hive"],
      },
      {
        id: "royal-jelly",
        category: "honey",
        nameAr: "الغذاء الملكي",
        nameEn: "Fresh Royal Jelly",
        descAr: "إفراز غذائي فائق تنتجه شغالات النحل لتغذية الملكة، غني بالبروتينات والإنزيمات الحيوية النادرة.",
        descEn: "Fresh bee royal jelly, concentrated with essential amino acids, proteins, and bioactive natural enzymes.",
        tagsAr: ["غذاء الملكات", "مكمل طبيعي فائق", "إنزيمات نشطة"],
        tagsEn: ["Royal Jelly", "Bioactive", "High Potency"],
      },
    ],
    prepFormsAr: ["برطمانات زجاجية 250جم، 500جم، 1كجم", "عبوات ضغط سهلة الاستخدام", "براميل غذائية سعة 25كجم و300كجم"],
    prepFormsEn: ["Glass jars: 250g, 500g, 1kg", "Squeeze bottles", "Food-grade bulk drums: 25kg & 300kg"],
  },
  {
    id: "olives",
    titleAr: "2. الزيتون المصري",
    titleEn: "2. Authentic Egyptian Table Olives",
    introAr:
      "نقدم مجموعة واسعة من أصناف الزيتون المصري المشهور بجودته وحجم ثماره، مناسبة للاستهلاك المباشر وتجهيز مائدة الطعام أو التصنيع الغذائي، مع تنوع في درجات النضج وطرق المعالجة.",
    introEn:
      "Offering Egypt's finest table olive cultivars celebrated globally for flesh density and size, suited for gourmet dining, food service, and industrial processing.",
    items: [
      {
        id: "tofahi",
        category: "olives",
        nameAr: "الزيتون التفاحي",
        nameEn: "Tofahi Olives",
        descAr: "من أشهر أصناف الزيتون المصري وأكبرها حجمًا، يتميز بثمرته الكروية اللحمية ومذاقه المميز كزيتون مائدة فاخر.",
        descEn: "Egypt's signature jumbo olive variety, renowned for its spherical apple-like shape, thick succulent flesh, and rich palate.",
        tagsAr: ["حجم كبير جامبو", "لحمي وفاخر", "زيتون مائدة أول"],
        tagsEn: ["Jumbo Caliber", "Succulent Flesh", "Prime Table Olive"],
      },
      {
        id: "agizi",
        category: "olives",
        nameAr: "الزيتون العجيزي",
        nameEn: "Agizi Olives",
        descAr: "صنف مصري متوارث قوي التماسك مثالي للتخليل طويل الأمد، يتوفر بدرجات تدرج مختلفة ومذاق متوازن.",
        descEn: "Heritage Egyptian variety with firm skin and solid texture, ideal for prolonged brining and pickling.",
        tagsAr: ["قوي التماسك", "تخليل طويل", "صنف متوارث"],
        tagsEn: ["Firm Texture", "Long Shelf-life", "Heritage Olive"],
      },
      {
        id: "manzanilla",
        category: "olives",
        nameAr: "زيتون المانزانيلا",
        nameEn: "Manzanilla Olives",
        descAr: "صنف عالمي ممتاز ذو شكل بيضاوي مستدير ونواة صغيرة سهلة الفصل، مما يجعله الصنف الأنسب للحشو والتتبيل.",
        descEn: "Globally acclaimed Spanish-origin variety grown in Egyptian soil, perfect for pitting, slicing, and stuffing.",
        tagsAr: ["مثالي للحشو", "نواة صغيرة", "شكل متناسق"],
        tagsEn: ["Pitting & Stuffing", "Small Pit", "Uniform Shape"],
      },
      {
        id: "picual",
        category: "olives",
        nameAr: "زيتون البيكوال",
        nameEn: "Picual Olives",
        descAr: "صنف متعدد الاستخدامات يتميز بصلابته ونسبة الزيت الجيدة، ويصلح كزيتون مائدة مخلل أو للعصر وإنتاج الزيت.",
        descEn: "Dual-purpose cultivar known for high oil yield and firm flesh, suitable for table brining or virgin oil extraction.",
        tagsAr: ["متعدد الاستخدام", "مائدة وعصر", "صلابة ممتازة"],
        tagsEn: ["Dual Purpose", "Table & Oil", "High Firmness"],
      },
      {
        id: "green-olives",
        category: "olives",
        nameAr: "الزيتون الأخضر المعالج",
        nameEn: "Natural Green Olives",
        descAr: "زيتون يتم قطافه في مرحلة النضج الأخضر ومعالجته بمحاليل ملحية مضبوطة ليمنح قرمشة ونكهة متوازنة.",
        descEn: "Harvested at peak green maturity and gently cured in controlled sea salt brine for crisp texture and tart savor.",
        tagsAr: ["حصاد مبكر", "قرمشة طازجة", "تخليل طبيعي"],
        tagsEn: ["Early Harvest", "Crisp Texture", "Natural Brine"],
      },
      {
        id: "black-olives",
        category: "olives",
        nameAr: "الزيتون الأسود الطبيعي والمؤكسد",
        nameEn: "Natural & Kalamata-Style Black Olives",
        descAr: "زيتون يترك على الأشجار حتى اكتمال النضج أو يعالج بالطرق المعتمدة ليكتسب لونه الداكن ونكهته الناعمة الغنية.",
        descEn: "Tree-ripened or naturally oxidized to a deep black hue, offering tender texture and mellow savory depth.",
        tagsAr: ["نضج كامل", "طري وناعم", "لون داكن طبيعي"],
        tagsEn: ["Tree-Ripened", "Tender Bite", "Deep Black"],
      },
    ],
    prepFormsAr: [
      "زيتون كامل بالنواة (Whole)",
      "زيتون منزوع النواة (Pitted)",
      "زيتون شرائح (Sliced / Rings)",
      "زيتون محشو بالفلفل الحلو الطبيعي (Stuffed with Red Pepper)",
      "زيتون محشو بالجزر الطازج (Stuffed with Carrot)",
      "زيتون محشو باللوز المقشر الفاخر (Stuffed with Almond)",
      "برطمانات زجاجية وصفائح معدنية بالتجزئة (Retail Jars & Tins)",
      "براميل بلاستيكية غذائية سعة 150كجم و200كجم للتوريد الصناعي (Industrial Drums)",
    ],
    prepFormsEn: [
      "Whole olives in brine",
      "Machine pitted olives",
      "Uniform sliced rings for pizza & salads",
      "Stuffed with natural sweet red bell pepper paste",
      "Stuffed with crisp fresh carrot",
      "Stuffed with blanched whole almond",
      "Retail glass jars and lithographed food tins",
      "Industrial food-grade drums (150kg / 200kg) for B2B processors",
    ],
  },
  {
    id: "olive-oil",
    titleAr: "3. زيت الزيتون وأنواعه",
    titleEn: "3. Premium Olive Oil Grades",
    introAr:
      "نوفر أنواعًا مختلفة من زيت الزيتون وفق طريقة الاستخلاص الميكانيكي، ودرجة النقاء، ونسب الحموضة المعتمدة دوليًا، مع وثائق المنشأ والتحاليل المعملية الكاملة.",
    introEn:
      "Supplying certified olive oil grades categorized according to international IOC parameters, extraction method, sensory attributes, and laboratory acidity analysis.",
    items: [
      {
        id: "evoo",
        category: "olive-oil",
        nameAr: "زيت الزيتون البكر الممتاز (Extra Virgin)",
        nameEn: "Extra Virgin Olive Oil (EVOO)",
        descAr: "أعلى درجات الجودة، يستخلص بالعصر الميكانيكي على البارد دون أي معالجة حرارية أو كيميائية، بحموضة أقل من 0.8%.",
        descEn: "Highest quality grade, cold mechanically extracted without refining. Free acidity strictly below 0.8% with intense fruited bouquet.",
        tagsAr: ["عصر على البارد", "حموضة < 0.8%", "نكهة فاكهية غنية"],
        tagsEn: ["Cold Pressed", "Acidity < 0.8%", "Fruity Bouquet"],
      },
      {
        id: "virgin",
        category: "olive-oil",
        nameAr: "زيت الزيتون البكر (Virgin)",
        nameEn: "Virgin Olive Oil",
        descAr: "زيت مستخلص ميكانيكيًا بطرق طبيعية، يحتفظ بخصائصه ورائحته الممتازة، مع نسبة حموضة لا تتعدى 2%.",
        descEn: "Mechanically extracted natural oil retaining vibrant flavor and aroma, with free acidity bounded up to 2.0%.",
        tagsAr: ["مستخلص ميكانيكيًا", "حموضة ≤ 2%", "استخدام طهي راقٍ"],
        tagsEn: ["Mechanical Press", "Acidity ≤ 2.0%", "Culinary Grade"],
      },
      {
        id: "refined",
        category: "olive-oil",
        nameAr: "زيت الزيتون المكرر (Refined)",
        nameEn: "Refined Olive Oil",
        descAr: "زيت معالج تقنيًا بطرق تكرير معتمدة لضبط الحموضة والمواصفات دون المساس بتركيبته الدهنية الأصلية.",
        descEn: "Refined using standardized processes to eliminate defects and balance acidity while keeping the fatty acid profile.",
        tagsAr: ["مكرر بمواصفات قياسية", "نكهة حيادية", "ثبات حراري"],
        tagsEn: ["Standard Refined", "Neutral Palate", "Thermal Stability"],
      },
      {
        id: "pure-blend",
        category: "olive-oil",
        nameAr: "زيت الزيتون النقي التجاري (Olive Oil)",
        nameEn: "Pure Olive Oil Blend",
        descAr: "مزيج تجاري متوازن يتكون من زيت الزيتون المكرر مضافًا إليه نسبة من الزيت البكر لتعزيز النكهة والرائحة.",
        descEn: "A balanced commercial blend of refined olive oil harmonized with virgin olive oil to impart aromatic flavor.",
        tagsAr: ["مزيج مكرر وبكر", "استهلاك يومي", "سعر اقتصادي"],
        tagsEn: ["Refined & Virgin Blend", "Daily Cooking", "Cost Effective"],
      },
      {
        id: "pomace",
        category: "olive-oil",
        nameAr: "زيت تفل الزيتون (Pomace Olive Oil)",
        nameEn: "Olive Pomace Oil",
        descAr: "زيت يستخلص من معالجة تفل الزيتون المتبقي بعد العصر الأول، ويصلح للاستخدامات الصناعية والطهي عالي الحرارة.",
        descEn: "Extracted from residual olive pomace and blended with virgin oil; highly stable for high-heat frying and industrial foods.",
        tagsAr: ["استخدام صناعي وقلي", "ثبات عالي", "اقتصادي"],
        tagsEn: ["High Heat Frying", "Industrial Use", "High Smoke Point"],
      },
    ],
    specsAr: [
      "توثيق بلد المنشأ (مصر / حوض المتوسط)",
      "شهادة نسبة الحموضة (Acidity Rate) ورقم البيروكسيد",
      "نتائج التحليل الكروماتوجرافي للأحماض الدهنية",
      "خيارات تعبئة: زجاج داكن 250مل، 500مل، 1لتر، صفائح 5لتر و18لتر، وخزانات IBC سعة 1000لتر",
    ],
    specsEn: [
      "Origin documentation (Egypt / Mediterranean basin)",
      "Certified lab assay of acidity and peroxide index",
      "Fatty acid chromatography profile",
      "Packaging: Marasca dark glass (250ml, 500ml, 1L), tinplates (5L, 18L), and 1,000L IBC totes",
    ],
  },
  {
    id: "dates",
    titleAr: "4. التمور ومنتجات النخيل",
    titleEn: "4. Dates & Heritage Palm Derivatives",
    introAr:
      "تعد مصر أكبر منتج للتمور عالميًا، ونقدم باقة واسعة من التمور المصرية المحلية وأصناف النخيل الدولية الفاخرة، بالإضافة إلى منتجات التصنيع الغذائي المشتقة من التمر.",
    introEn:
      "Egypt is the world's leading producer of dates. We supply an extensive range of native Egyptian cultivars, premium international varieties, and processed confectionery date derivatives.",
    items: [
      {
        id: "siwi",
        category: "dates",
        nameAr: "التمر السيوي (الواحات)",
        nameEn: "Siwi Oasis Dates",
        descAr: "أشهر أصناف التمور نصف الجافة في مصر، يزرع بواحة سيوة والوادي الجديد، ويتميز بقوامه المتماسك وحلاوته المتوازنة ومناسبته للتصنيع والتصدير.",
        descEn: "Egypt's flagship semi-dry date cultivated in the Siwa Oasis, prized for chewy flesh, sweet caramel flavor, and export resilience.",
        tagsAr: ["نصف جاف", "واحة سيوة", "مثالي للتصدير"],
        tagsEn: ["Semi-Dry", "Siwa Oasis", "Top Export"],
      },
      {
        id: "saidi",
        category: "dates",
        nameAr: "التمر الصعيدي",
        nameEn: "Saidi Dates",
        descAr: "صنف محلي شهير من صعيد مصر، يتميز بقيمته الغذائية العالية ولونه الكهرماني الجذاب واستخدامه الواسع كتمور مائدة وتصنيع.",
        descEn: "Heritage cultivar from Upper Egypt with amber golden color, honeyed profile, and versatile consumption as table date or baking ingredient.",
        tagsAr: ["صعيد مصر", "قيمة غذائية", "كهرماني جذاب"],
        tagsEn: ["Upper Egypt", "Nutrient Rich", "Golden Amber"],
      },
      {
        id: "zaghloul",
        category: "dates",
        nameAr: "تمر الزغلول",
        nameEn: "Zaghloul Fresh Dates",
        descAr: "تمر مصري طري أحمر مميز يستهلك طازجًا في مرحلة البسر (الخلال)، ويتميز بحجمه الكبير وقرمشته الغنية بالسكريات.",
        descEn: "Vibrant red fresh date harvested at the crunchy 'Bissir' stage, celebrated for crispy bite and sweet natural juice.",
        tagsAr: ["أحمر طازج", "خلال مقرمش", "صنف مصري أصيل"],
        tagsEn: ["Crisp Red", "Bissir Stage", "Fresh Harvest"],
      },
      {
        id: "hayani",
        category: "dates",
        nameAr: "تمر الحياني",
        nameEn: "Hayani Dates",
        descAr: "من أكثر التمور الطازجة انتشارًا في مصر، لونه أسود لماع عند اكتمال النضج، غني بالرطوبة والمذاق السكري الناعم.",
        descEn: "Popular soft Egyptian date with glossy black skin upon ripening, very moist with a melt-in-mouth sugary sweetness.",
        tagsAr: ["طري وناعم", "أسود لماع", "رطوبة متوازنة"],
        tagsEn: ["Soft & Moist", "Glossy Black", "Sweet Fresh"],
      },
      {
        id: "samani",
        category: "dates",
        nameAr: "تمر السماني",
        nameEn: "Samani Dates",
        descAr: "صنف مصري كبير الحجم أصفر اللون يتحول إلى رطب غني بالعسل، يستخدم للاستهلاك المباشر ومربيات التمر.",
        descEn: "Large yellow-skinned Egyptian date transitioning into succulent honeyed Rutab, widely used for table dining and preserves.",
        tagsAr: ["أصفر كبير", "رطب عسلي", "استهلاك طازج"],
        tagsEn: ["Large Yellow", "Honey Rutab", "Fresh Table"],
      },
      {
        id: "ommhat",
        category: "dates",
        nameAr: "تمر الأمهات",
        nameEn: "Ommhat Dates",
        descAr: "صنف تقليدي طري يستخدم في إنتاج العجوة الطازجة والتمور المحفوظة لقوامه اللين وسهولة نزع نواه.",
        descEn: "Traditional soft date cultivar with tender dark flesh, traditionally prepared into date paste or sun-cured packs.",
        tagsAr: ["طري ولين", "تحضير العجوة", "متوارث"],
        tagsEn: ["Soft Flesh", "Date Paste Base", "Traditional"],
      },
      {
        id: "barhi",
        category: "dates",
        nameAr: "تمر البرحي",
        nameEn: "Barhi Fresh Dates",
        descAr: "صنف عالمي شهير كروي الشكل أصفر اللون، يمتاز بحلاوته الفائقة وخلوه من القابضية في مرحلة الخلال والرطب.",
        descEn: "World-renowned golden orb dates with crisp crunchy sweetness at the yellow stage, turning into creamy caramel Rutab.",
        tagsAr: ["أصفر كروي", "حلاوة تامة", "خلال ورطب"],
        tagsEn: ["Golden Orb", "Zero Astringency", "Crisp & Creamy"],
      },
      {
        id: "medjool",
        category: "dates",
        nameAr: "تمر المجدول (ملك التمور)",
        nameEn: "Medjool Dates (King of Dates)",
        descAr: "الصنف الأرقى والأعلى قيمة تجارية في الأسواق العالمية، بحجمه الجامبو وقوامه الكراميلي الفاخر وتدرجات فرزه الدقيقة.",
        descEn: "The undisputed 'King of Dates', commanding premium market demand for its colossal size, amber wrinkly skin, and rich caramel bite.",
        tagsAr: ["ملك التمور", "حجم جامبو", "أعلى قيمة تصديرية"],
        tagsEn: ["King of Dates", "Jumbo / Super Jumbo", "Gourmet Class"],
      },
      {
        id: "sukkari",
        category: "dates",
        nameAr: "تمر السكري",
        nameEn: "Sukkari Dates",
        descAr: "من أشهر أصناف التمور المفضلة في الخليج العربي، ذو قوام مخروطي ولون ذهبي فاتح ومذاق سكري مقرمش أو رطب.",
        descEn: "The favorite date of the Arabian Gulf, named for its sweet sugary flavor, crisp golden skin, and melt-in-mouth flesh.",
        tagsAr: ["ذهبي فاخر", "حلاوة سكرية", "مفضل خليجيًا"],
        tagsEn: ["Golden Hue", "Sugar Sweet", "Gulf Favorite"],
      },
      {
        id: "ajwa",
        category: "dates",
        nameAr: "تمر العجوة",
        nameEn: "Ajwa Dates",
        descAr: "صنف مبارك شهير ذو لون أسود وقوام مجعد ناعم وخصائص غذائية وروحية استثنائية مطلوبة عالميًا.",
        descEn: "Renowned dark wrinkled dates with unique historical and nutritional significance, offering smooth texture and rich mineral balance.",
        tagsAr: ["تمر العجوة", "لون أسود داكن", "قيمة استثنائية"],
        tagsEn: ["Holy Ajwa", "Deep Black", "Highly Prized"],
      },
      {
        id: "safawi",
        category: "dates",
        nameAr: "تمر الصفاوي",
        nameEn: "Safawi Dates",
        descAr: "صنف داكن مائل للسواد أسطواني الشكل، يتميز بنعومة لحمه ومذاقه المتوازن وغناه بالمعادن.",
        descEn: "Cylindrical dark black dates with soft chewy texture, moderate sweetness, and concentrated potassium and fiber.",
        tagsAr: ["أسطواني داكن", "لحم ناعم", "متوازن الحلاوة"],
        tagsEn: ["Cylindrical", "Soft Chew", "Mineral Dense"],
      },
      {
        id: "anbara",
        category: "dates",
        nameAr: "تمر العنبرة",
        nameEn: "Anbara Dates",
        descAr: "صنف فاخر كبير الحجم ذو لون بني مائل للحمرة، يعتبر من أندر وأثمن التمور مائدة في الأسواق.",
        descEn: "Extremely large, reddish-brown premium dates, among the rarest and most expensive table date cultivars.",
        tagsAr: ["نادر وفاخر", "حجم كبير", "بني محمر"],
        tagsEn: ["Rare Specialty", "Large Fruit", "Reddish Brown"],
      },
      {
        id: "date-molasses",
        category: "dates",
        nameAr: "دبس التمر الطبيعي",
        nameEn: "Pure Date Molasses (Silan)",
        descAr: "مستخلص طبيعي 100% مركز من التمر دون أي سكر مضاف، يستخدم كمحلي صحي بديل في الطهي والحلويات.",
        descEn: "100% pure thick date syrup extracted without added sugar or additives; a healthy unrefined natural sweetener.",
        tagsAr: ["محلي طبيعي", "بدون سكر مضاف", "مركز 100%"],
        tagsEn: ["Natural Sweetener", "Zero Added Sugar", "100% Pure Syrup"],
      },
      {
        id: "date-jam",
        category: "dates",
        nameAr: "مربى التمر الفاخر",
        nameEn: "Gourmet Date Jam",
        descAr: "منتج غذائي شهي قابل للدهن محضر من قطع التمر الطبيعي، مناسب للإفطار وقطاع الضيافة.",
        descEn: "Rich spreadable fruit preserve crafted from choice dates, ideal for gourmet breakfast buffets and food service.",
        tagsAr: ["قابل للدهن", "قطع تمر طبيعي", "للفنادق والتجزئة"],
        tagsEn: ["Spreadable", "Real Date Chunks", "Retail & HoReCa"],
      },
      {
        id: "date-paste",
        category: "dates",
        nameAr: "معجون التمر (العجوة المعجونة)",
        nameEn: "Confectionery Date Paste",
        descAr: "تمر منزوع النوى ومفروم آليًا بقوام ناعم ومتجانس، مخصص لمعامل الحلويات والمخابز وصناعة البسكويت والمعمول.",
        descEn: "Pitted and homogeneously micronized date paste engineered specifically for bakeries, energy bars, biscuits, and Ma'amoul.",
        tagsAr: ["للمخابز والمعمول", "منزوع النوى 100%", "قوام متجانس"],
        tagsEn: ["Bakery Grade", "100% Pit-Free", "Smooth Uniform Texture"],
      },
    ],
  },
  {
    id: "herbs",
    titleAr: "5. الأعشاب والنباتات الطبيعية المصرية",
    titleEn: "5. Egyptian Aromatic Herbs & Natural Botanicals",
    introAr:
      "تعد مصر من أقدم وأكبر مصدري الأعشاب والنباتات العطرية والطبية في العالم بفضل مناخها الجاف وتربتها الخصبة على ضفاف النيل. نوفر 16 صنفًا أساسيًا بفرز نقي ونسب زيوت طيارة مطابقة للمعايير.",
    introEn:
      "Egypt is a premier global exporter of aromatic herbs and botanical crops, favored by optimal Nile sunshine and low humidity. We offer 16 primary botanical species with certified volatile oil benchmarks.",
    items: [
      { id: "hibiscus", category: "herbs", nameAr: "الكركديه الأسواني (Hibiscus)", nameEn: "Egyptian Hibiscus (Karkadeh)", descAr: "زهور كركديه حمراء داكنة مجففة كاملة أو مجروشة، غنية بمضادات الأكسدة ولها لون أحمر قرمزي فاقع وطعم حامض منعش.", descEn: "Whole deep-ruby dried calyces and TBC tea cut, delivering vibrant crimson infusion and crisp tart flavor.", tagsAr: ["زهور كاملة", "لون قرمزي", "مشروبات ومستخلصات"], tagsEn: ["Whole Calyces", "Deep Ruby", "Teas & Extracts"] },
      { id: "chamomile", category: "herbs", nameAr: "البابونج (Chamomile)", nameEn: "German Chamomile Flowers", descAr: "رؤوس أزهار البابونج الذهبية المجففة بعناية للحفاظ على الزيوت العطرية المهدئة ونقاوتها العالية من الشوائب.", descEn: "Sun-dried golden flower heads free from stems, rich in essential chamazulene soothing oils.", tagsAr: ["أزهار ذهبية", "زيوت مهدئة", "نقاء عالي"], tagsEn: ["Golden Flower", "Calming Essential Oil", "High Purity"] },
      { id: "mint", category: "herbs", nameAr: "النعناع الفلفلي والبلدي (Mint)", nameEn: "Peppermint & Spearmint Leaves", descAr: "أوراق نعناع مجففة برائحة المنثول النفاذة، متوفرة كأوراق كاملة أو مقطوعة للشاي وصناعات النكهات.", descEn: "Vibrant green leaves dried to preserve high menthol fragrance; available in crushed leaves or tea cut.", tagsAr: ["منثول عالي", "أوراق خضراء", "شاي ونكهات"], tagsEn: ["High Menthol", "Green Leaves", "Teas & Flavors"] },
      { id: "basil", category: "herbs", nameAr: "الريحان العطري (Sweet Basil)", nameEn: "Sweet Basil Leaves", descAr: "أوراق ريحان خضراء مجففة برائحة زكية، أساسية لصلصات البيستو وتتبيلات المطبخ المتوسطي والصناعات الغذائية.", descEn: "Aromatic dried sweet basil leaves, indispensable for Mediterranean seasonings, pestos, and culinary blends.", tagsAr: ["عطري فاخر", "مطبخ متوسطي", "صلصات وتتبيل"], tagsEn: ["Aromatic", "Mediterranean Cuisine", "Seasonings"] },
      { id: "marjoram", category: "herbs", nameAr: "البردقوش (Marjoram)", nameEn: "Marjoram Leaves & Rubbed", descAr: "نبات عطري ذو رائحة دافئة ونكهة مركبة، يستخدم في خلطات الشاي وتتبيل اللحوم والمستحضرات الطبيعية.", descEn: "Warm herbal leaves and rubbed cut with subtle sweet notes, popular in herbal blends and savory seasonings.", tagsAr: ["رائحة دافئة", "خلطات عشبية", "لحوم وتتبيل"], tagsEn: ["Warm Herbal Note", "Tea Blends", "Meat Seasonings"] },
      { id: "fennel", category: "herbs", nameAr: "الشمر (Fennel Seeds)", nameEn: "Fennel Seeds", descAr: "بذور شمر نقية برائحة اليانسون المحببة وحلاوة معتدلة، تستخدم في المخبوزات والمشروبات الهاضمة.", descEn: "Clean sweet fennel seeds with distinct licorice nuance, used in bakery infusions and digestive teas.", tagsAr: ["بذور نقية", "مخبوزات وشاي", "نكهة حلوة"], tagsEn: ["Clean Seeds", "Baking & Teas", "Sweet Licorice"] },
      { id: "anise", category: "herbs", nameAr: "اليانسون النجمي والبلدي (Anise)", nameEn: "Anise Seeds", descAr: "بذور يانسون مصرية مختارة بنسبة زيوت طيارة مرتفعة ومذاق سكري منعش لمشروبات الأعشاب والتصنيع الدوائي.", descEn: "Aromatic Egyptian aniseed with high essential anethole oil content for beverages and pharmaceutical confectionery.", tagsAr: ["زيوت طيارة", "مشروب تقليدي", "نكهة سكرية"], tagsEn: ["Essential Oils", "Traditional Drink", "Sweet Note"] },
      { id: "cumin-seeds", category: "herbs", nameAr: "الكمون (Cumin Seeds)", nameEn: "Whole Cumin Seeds", descAr: "بذور كمون كاملة مجففة تحت أشعة الشمس بنكهة ترابية دافئة لا غنى عنها في خلطات التوابل العالمية.", descEn: "Sun-dried whole cumin seeds delivering an intense, earthy, warm aroma essential to global spice trade.", tagsAr: ["بذور كاملة", "نكهة ترابية دافئة", "تصدير واسع"], tagsEn: ["Whole Seeds", "Earthy Warmth", "Major Export"] },
      { id: "coriander-seeds", category: "herbs", nameAr: "الكزبرة (Coriander Seeds)", nameEn: "Coriander Seeds", descAr: "بذور كزبرة كروية مجففة برائحة حمضية خفيفة، تستخدم كاملة أو مطحونة في توابل الأغذية ومساحيق الكاري.", descEn: "Spherical golden coriander seeds with subtle citrus undertones, foundational for pickling and curry seasonings.", tagsAr: ["بذور ذهبية", "حمضية خفيفة", "خلطات كاري"], tagsEn: ["Golden Seeds", "Subtle Citrus", "Curry Base"] },
      { id: "black-seed-herb", category: "herbs", nameAr: "حبة البركة (Black Seeds)", nameEn: "Nigella Sativa (Black Cumin)", descAr: "بذور حبة البركة السوداء النقية 100%، غنية بالزيوت الحيوية ومضادات الأكسدة وتستخدم في المخبوزات والزيوت.", descEn: "100% clean Nigella seeds rich in thymoquinone oils, used extensively in artisan breads and cold pressing.", tagsAr: ["حبة البركة", "مخبوزات وزيوت", "نقاء 99%"], tagsEn: ["Black Cumin", "Baking & Oil", "99% Purity"] },
      { id: "caraway", category: "herbs", nameAr: "الكراوية (Caraway Seeds)", nameEn: "Caraway Seeds", descAr: "بذور كراوية مصرية مقوسة بنكهة دافئة مميزة، تستخدم في مشروبات الأطفال والمخبوزات الأوروبية كخبز الجاودار.", descEn: "Crescent caraway seeds with distinct peppery warmth, popular in digestive teas and European rye breads.", tagsAr: ["بذور مقوسة", "خبز ومشروبات", "نكهة دافئة"], tagsEn: ["Crescent Seeds", "Rye Breads", "Digestive Teas"] },
      { id: "dill", category: "herbs", nameAr: "الشبت (Dill Weed & Seeds)", nameEn: "Dill Weed & Seeds", descAr: "أوراق شبت خضراء مجففة وبذور شبت عطرية، تستخدم في تتبيل الأسماك والمخللات والسلطات الجاهزة.", descEn: "Dehydrated green dill tips and aromatic dill seeds, ideal for fish rubs, pickling brines, and dressings.", tagsAr: ["أوراق وبذور", "أسماك ومخللات", "لون أخضر زاهٍ"], tagsEn: ["Tips & Seeds", "Seafood & Pickles", "Bright Green"] },
      { id: "parsley", category: "herbs", nameAr: "البقدونس (Dehydrated Parsley)", nameEn: "Dehydrated Parsley Flakes", descAr: "رقائق بقدونس مجففة بعناية للحفاظ على اللون الأخضر الناصع والرائحة العشبية المنعشة في الشوربات والأطباق الجاهزة.", descEn: "Vibrant green dried parsley flakes used in instant soups, dry seasoning mixes, and ready meals.", tagsAr: ["رقائق خضراء", "شوربات وتتبيل", "تجفيف هوائي"], tagsEn: ["Green Flakes", "Soups & Mixes", "Air Dried"] },
      { id: "sage", category: "herbs", nameAr: "الميرمية (Sage Leaves)", nameEn: "Sage Leaves", descAr: "أوراق ميرمية مخملية فضية برائحة كافورية مميزة، تستخدم في المشروبات الدافئة وتتبيل اللحوم والدواجن.", descEn: "Velvety greyish-green sage leaves offering robust herbal-camphor notes for teas and savory roasts.", tagsAr: ["مخملي عطر", "شاي دافئ", "لحوم ودواجن"], tagsEn: ["Velvety Leaf", "Herbal Infusion", "Poultry Rub"] },
      { id: "rosemary", category: "herbs", nameAr: "إكليل الجبل / الروزماري (Rosemary)", nameEn: "Rosemary Leaves", descAr: "إبر إكليل الجبل المجففة برائحة خشبية صنوبرية غنية بالزيوت العطرية، أساسية للطهي والمشاوي وحفظ الأغذية.", descEn: "Needle-shaped dried rosemary leaves bursting with piney aroma, pivotal for marinades and natural preservation.", tagsAr: ["إبر صنوبرية", "مشاوي وتتبيل", "زيوت عطرية"], tagsEn: ["Piney Aroma", "Grills & Marinades", "Natural Preservative"] },
      { id: "thyme", category: "herbs", nameAr: "الزعتر (Thyme)", nameEn: "Wild Thyme & Za'atar", descAr: "أوراق زعتر بري مجففة بنكهة حارة عطرية غنية بمادة الثيمول، متوفرة منفردة أو ممزوجة بخلطات الزعتر التقليدية.", descEn: "Wild thyme leaves rich in antiseptic thymol, available whole rubbed or blended into Mediterranean za'atar.", tagsAr: ["ثيمول نفاذ", "زعتر بري", "خلطات المائدة"], tagsEn: ["High Thymol", "Wild Thyme", "Zaatar Mixes"] },
    ],
  },
  {
    id: "powdered-juices",
    titleAr: "6. العصائر البودر الطبيعية",
    titleEn: "6. Natural Powdered Fruit & Vegetable Juices",
    introAr:
      "نقدم مجموعة متطورة من مساحيق الفواكه والخضروات الطبيعية المجففة بالرش والتجفيف الهوائي، سريعة الذوبان، وخالية من الإضافات الاصطناعية، مخصصة للمشروبات الفورية، الخلطات الغذائية، وتطبيقات الصناعات الغذائية والحلويات.",
    introEn:
      "Engineered spray-dried and vacuum-dehydrated natural fruit and vegetable powders with instantaneous solubility and zero artificial colorants, built for instant beverages, dairy, confectionery, and functional food.",
    items: [
      { id: "pw-hibiscus", category: "powdered-juices", nameAr: "مسحوق الكركديه الطبيعي", nameEn: "Natural Hibiscus Powder", descAr: "مستخلص كركديه مجفف بالرش يذوب سريعًا في الماء البارد والساخن بلون ياقوتي مذهل ونكهة حمضية طبيعية.", descEn: "Spray-dried extract dissolving instantly in cold/hot water with brilliant ruby clarity and natural tartness.", tagsAr: ["سريع الذوبان", "لون ياقوتي طبيعي", "بارد وساخن"], tagsEn: ["Instant Dissolve", "Natural Ruby", "Cold & Hot"] },
      { id: "pw-tamarind", category: "powdered-juices", nameAr: "مسحوق التمر الهندي", nameEn: "Tamarind Fruit Powder", descAr: "مسحوق طبيعي من لب التمر الهندي بنكهة متوازنة تجمع بين الحلاوة والحموضة، مثالي لمشروبات الصيف التقليدية.", descEn: "Natural tamarind pulp powder delivering authentic sweet-sour equilibrium for instant traditional refreshments.", tagsAr: ["حامض حلو", "مشروبات تراثية", "لب طبيعي"], tagsEn: ["Sweet & Sour", "Heritage Drink", "Pure Pulp"] },
      { id: "pw-lemon", category: "powdered-juices", nameAr: "مسحوق الليمون الطبيعي", nameEn: "Natural Lemon Powder", descAr: "مسحوق ليمون طبيعي مجفف غني بفيتامين ج ورائحة الزيوت الحمضية المنعشة، يستخدم في المشروبات والتتبيلات الغذائية.", descEn: "Dehydrated pure lemon powder concentrated with Vitamin C and fresh citrus oils for drinks and seasonings.", tagsAr: ["فيتامين ج", "حمضيات منعشة", "تتبيل ومشروبات"], tagsEn: ["Vitamin C", "Citrus Zest", "Drinks & Marinades"] },
      { id: "pw-orange", category: "powdered-juices", nameAr: "مسحوق البرتقال الطبيعي", nameEn: "Natural Orange Powder", descAr: "محضر من عصير برتقال مصري طازج، يحتفظ بنكهته الغنية ولونه البرتقالي المشرق دون ألوان صناعية.", descEn: "Crafted from fresh Egyptian orange juice, locking in sweet aroma and natural radiant color without synthetic dyes.", tagsAr: ["برتقال مصري", "بدون ألوان صناعية", "نكهة فاكهية"], tagsEn: ["Egyptian Orange", "No Synthetic Dyes", "Fruity Aroma"] },
      { id: "pw-mango", category: "powdered-juices", nameAr: "مسحوق المانجو الطبيعي", nameEn: "Natural Mango Powder", descAr: "مسحوق فاخر مستخلص من أصناف المانجو المصرية الفاخرة برائحتها الاستوائية وقوامها الغني.", descEn: "Gourmet powder extracted from premium Egyptian mango pulp, offering tropical aroma and velvety mouthfeel.", tagsAr: ["مانجو مصري فاخر", "قوام مخملي", "رائحة استوائية"], tagsEn: ["Egyptian Mango", "Velvety Texture", "Tropical"] },
      { id: "pw-guava", category: "powdered-juices", nameAr: "مسحوق الجوافة الطبيعي", nameEn: "Natural Guava Powder", descAr: "مسحوق جوافة مصري برائحة مميزة محببة وغنية بالألياف الطبيعية وفيتامينات التغذية المتوازنة.", descEn: "Aromatic white guava powder carrying Egypt's renowned fruit fragrance, rich in dietary fiber and vitamin content.", tagsAr: ["جوافة مصرية", "غنية بالألياف", "رائحة مميزة"], tagsEn: ["Egyptian Guava", "Dietary Fiber", "Signature Aroma"] },
      { id: "pw-pomegranate", category: "powdered-juices", nameAr: "مسحوق الرمان الطبيعي", nameEn: "Natural Pomegranate Powder", descAr: "مسحوق مستخلص من حبوب الرمان الأحمر، غني بمركبات البوليفينول ومضادات الأكسدة ومثالي للمشروبات الوظيفية.", descEn: "Derived from ruby pomegranate arils, concentrated with polyphenols and antioxidants for functional health drinks.", tagsAr: ["مضادات أكسدة", "رمان أحمر", "مشروبات وظيفية"], tagsEn: ["Antioxidant Rich", "Ruby Arils", "Functional Health"] },
      { id: "pw-strawberry", category: "powdered-juices", nameAr: "مسحوق الفراولة الطبيعي", nameEn: "Natural Strawberry Powder", descAr: "محضر من فراولة طازجة مجففة بنعومة، بلون وردي مبهج ونكهة سكرية ناعمة لمنتجات الألبان والعصائر.", descEn: "Gently dried fresh strawberries yielding delicate pink color and fragrant sweetness for dairy and beverage blending.", tagsAr: ["فراولة طازجة", "لون وردي مبهج", "ألبان وعصائر"], tagsEn: ["Fresh Strawberry", "Natural Pink", "Dairy & Smoothies"] },
      { id: "pw-beetroot", category: "powdered-juices", nameAr: "مسحوق الشمندر (البنجر)", nameEn: "Natural Beetroot Powder", descAr: "مسحوق شمندر فائق النقاء يستخدم كملون غذائي طبيعي أحمر قرمزي ومصدر غني بالحديد والنترات الطبيعية للرياضيين.", descEn: "Pure beetroot powder serving as a vibrant natural red colorant and athletic nitrate energy booster.", tagsAr: ["ملون طبيعي أحمر", "غني بالحديد", "طاقة للرياضيين"], tagsEn: ["Natural Red Dye", "Iron & Nitrates", "Sports Nutrition"] },
      { id: "pw-carrot", category: "powdered-juices", nameAr: "مسحوق الجزر الطبيعي", nameEn: "Natural Carrot Powder", descAr: "مسحوق جزر ناعم غني بالبيتا كاروتين والألياف ومضادات الأكسدة، يستخدم في المخبوزات والشوربات والصلصات الصحية.", descEn: "Fine carrot powder loaded with provitamin A beta-carotene, ideal for bakery enrichment, soups, and wellness blends.", tagsAr: ["بيتا كاروتين", "ألياف صحية", "شوربات ومخبوزات"], tagsEn: ["Beta Carotene", "Dietary Fiber", "Soups & Baking"] },
    ],
  },
  {
    id: "spices",
    titleAr: "7. التوابل والبهارات المفردة والخلطات",
    titleEn: "7. Single Spices & Master Culinary Blends",
    introAr:
      "نوفر تشكيلة متكاملة من التوابل الفردية النقية وخلطات البهارات المتخصصة الكاملة والمطحونة، لتلبية متطلبات المطابخ التجارية، وشركات تعبئة الأغذية، ومصانع اللحوم والمصنعات الغذائية.",
    introEn:
      "A complete portfolio of single pure spices and master-blended culinary seasonings, available whole or micronized for commercial kitchens, retail packers, and meat/food processors.",
    items: [
      { id: "sp-cumin", category: "spices", nameAr: "الكمون المطحون والكامل", nameEn: "Ground & Whole Cumin", descAr: "كمون عالي النقاء بنكهة شرقية دافئة لا تخطئها الحواس.", descEn: "High-purity cumin with warm earthy aromatics.", tagsAr: ["نقاء 99%", "مطحون وحب"], tagsEn: ["99% Pure", "Whole & Ground"] },
      { id: "sp-coriander", category: "spices", nameAr: "الكزبرة الناعمة", nameEn: "Ground Coriander", descAr: "كزبرة مطحونة ناعمة برائحة زهرية حمضية.", descEn: "Finely ground coriander with fragrant citrus undertones.", tagsAr: ["مطحون ناعم", "عطري"], tagsEn: ["Fine Ground", "Aromatic"] },
      { id: "sp-black-pepper", category: "spices", nameAr: "الفلفل الأسود (حب ومطحون)", nameEn: "Black Pepper (Whole & Ground)", descAr: "حبوب فلفل أسود ممتازة بحرارة قوية ونسبة بيبيرين مرتفعة.", descEn: "Premium black peppercorns with robust piperine heat.", tagsAr: ["بيبيرين عالي", "حبوب ومطحون"], tagsEn: ["High Piperine", "Coarse & Fine"] },
      { id: "sp-red-pepper", category: "spices", nameAr: "الفلفل الأحمر الحار (الشطة)", nameEn: "Hot Red Chili Powder", descAr: "مسحوق فلفل أحمر ناري مجفف بحرارة معايرة بدقة.", descEn: "Fiery dried red chili powder calibrated for consistent Scoville heat.", tagsAr: ["حرارة معايرة", "شطة نارية"], tagsEn: ["Calibrated Heat", "Fiery Red"] },
      { id: "sp-paprika", category: "spices", nameAr: "البابريكا الحلوة والمدخنة", nameEn: "Sweet & Smoked Paprika", descAr: "مسحوق فلفل حلو بلون أحمر قاني ونكهة فاكهية أو مدخنة جذابة.", descEn: "Brilliant red sweet pepper powder with fruity or oak-smoked depth.", tagsAr: ["أحمر قاني", "حلو ومدخن"], tagsEn: ["Vibrant Red", "Sweet & Smoked"] },
      { id: "sp-turmeric", category: "spices", nameAr: "الكركم النقي (Turmeric)", nameEn: "Pure Turmeric Powder", descAr: "كركم طبيعي ذهبي فاقع بنسبة كوركومين مرتفعة وخصائص صحية.", descEn: "Golden yellow turmeric powder rich in bioactive curcuminoids.", tagsAr: ["كوركومين عالي", "لون ذهبي"], tagsEn: ["High Curcumin", "Golden Yellow"] },
      { id: "sp-cinnamon", category: "spices", nameAr: "القرفة السيلانية والدارسين", nameEn: "Ceylon & Cassia Cinnamon", descAr: "أعواد قرفة وبودرة ناعمة برائحة سكرية خشبية فاخرة.", descEn: "Aromatic cinnamon quills and powder with warm woody sweetness.", tagsAr: ["أعواد وبودرة", "رائحة دافئة"], tagsEn: ["Quills & Powder", "Woody Sweet"] },
      { id: "sp-ginger", category: "spices", nameAr: "الزنجبيل المجفف المطحون", nameEn: "Ground Dried Ginger", descAr: "مسحوق زنجبيل لاذع بنكهة منعشة للمخبوزات والمشروبات والطهي.", descEn: "Pungent dried ginger powder for baking, beverages, and savory dishes.", tagsAr: ["لاذع ومنعش", "توابل ومشروبات"], tagsEn: ["Pungent Zest", "Baking & Savory"] },
      { id: "sp-cardamom", category: "spices", nameAr: "الهيل والحبهان الأخضر", nameEn: "Green Cardamom Pods & Powder", descAr: "فصوص هيل خضراء جامبو وبودرة هيل برائحة كافورية فاخرة للقهوة والطهي.", descEn: "Jumbo green cardamom pods and aromatic ground powder for Arabic coffee and gourmet cuisine.", tagsAr: ["هيل أخضر جامبو", "للقهوة والطهي"], tagsEn: ["Jumbo Green Pods", "Arabic Coffee"] },
      { id: "sp-clove", category: "spices", nameAr: "القرنفل (المسمار)", nameEn: "Whole & Ground Cloves", descAr: "مسامير قرنفل كاملة غنية بزيت الأوجينول العطري بنكهة قوية نافذة.", descEn: "Whole aromatic flower buds loaded with eugenol for savory and sweet culinary uses.", tagsAr: ["مسامير كاملة", "أوجينول عالي"], tagsEn: ["Whole Cloves", "High Eugenol"] },
      { id: "sp-nutmeg", category: "spices", nameAr: "جوزة الطيب (Nutmeg)", nameEn: "Whole & Ground Nutmeg", descAr: "حبات جوزة الطيب الصلبة ومسحوقها المعطر لصلصات البشاميل والحلويات.", descEn: "Solid nutmeg kernels and fragrant powder for béchamel sauces and baking.", tagsAr: ["معطر ودافئ", "صلصات ومخبوزات"], tagsEn: ["Fragrant Warmth", "Béchamel & Bakes"] },
      { id: "sp-seven-blend", category: "spices", nameAr: "خلطة السبع بهارات الشرقية", nameEn: "Traditional 7 Spices Blend", descAr: "الخلطة الشرقية الأيقونية المتوازنة التي تجمع أفخر التوابل لجميع أنواع الطهي.", descEn: "Iconic Middle Eastern 7-spice harmony delivering rich rounded culinary depth.", tagsAr: ["خلطة أيقونية", "متوازنة لجميع الأطباق"], tagsEn: ["Master Blend", "All-Purpose"] },
      { id: "sp-meat-blend", category: "spices", nameAr: "بهارات اللحوم المتخصصة", nameEn: "Master Meat Seasoning", descAr: "توليفة دافئة تعزز نكهة اللحوم الحمراء والمشاوي في المطاعم والمنازل.", descEn: "Warm seasoning formulated to accentuate roasted and braised red meats.", tagsAr: ["للحوم والمشاوي", "نكهة عميقة"], tagsEn: ["Roasts & Steaks", "Deep Savor"] },
      { id: "sp-chicken-blend", category: "spices", nameAr: "بهارات الدجاج والشاورما", nameEn: "Poultry & Shawarma Seasoning", descAr: "تتبيلة عطرية غنية بالأعشاب والبابريكا والليمون للدواجن والشواء.", descEn: "Aromatic blend infused with herbs, paprika, and citrus notes for poultry.", tagsAr: ["دواجن وشاورما", "أعشاب وحمضيات"], tagsEn: ["Poultry & Grills", "Herbs & Paprika"] },
      { id: "sp-fish-blend", category: "spices", nameAr: "بهارات الأسماك والمأكولات البحرية", nameEn: "Seafood & Fish Rub", descAr: "توليفة خفيفة بالكمون والكزبرة والثوم المجفف والليمون للأسماك البحرية.", descEn: "Zesty blend pairing cumin, coriander, garlic, and citrus for delicate fish.", tagsAr: ["أسماك ومأكولات بحرية", "كمون وثوم وليمون"], tagsEn: ["Fish & Seafood", "Zesty Blend"] },
      { id: "sp-kofta-blend", category: "spices", nameAr: "بهارات الكفتة والكباب", nameEn: "Kofta & Kebab Seasoning", descAr: "خلطة تقليدية متخصصة تمنح الكفتة تماسكًا ورائحة شواء مميزة.", descEn: "Specialty spice ratio engineered for charcoal-grilled kofta and kebabs.", tagsAr: ["كفتة وكباب", "رائحة شواء"], tagsEn: ["Kofta & Kebab", "Charcoal Grill"] },
    ],
  },
];

export interface MarketStatItem {
  productAr: string;
  productEn: string;
  data: {
    countryAr: string;
    countryEn: string;
    volume: string;
  }[];
}

export interface FoodMarketsData {
  introAr: string;
  introEn: string;
  arabMarkets: {
    countryAr: string;
    countryEn: string;
    descAr: string;
    descEn: string;
    statAr?: string;
    statEn?: string;
  }[];
  europeanMarkets: {
    countryAr: string;
    countryEn: string;
    descAr: string;
    descEn: string;
    statAr?: string;
    statEn?: string;
  }[];
  stats2024: MarketStatItem[];
  egyptianExports: {
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
    destinations: {
      productAr: string;
      productEn: string;
      countriesAr: string;
      countriesEn: string;
    }[];
  };
  globalOutlook: {
    titleAr: string;
    titleEn: string;
    descAr: string;
    descEn: string;
  };
}

export const foodMarketsData: FoodMarketsData = {
  introAr:
    "نستهدف التوسع في الأسواق العربية والأوروبية من خلال توفير منتجات طبيعية وغذائية متنوعة تتناسب مع احتياجات المستوردين والموزعين وتجار الجملة وشركات الصناعات الغذائية. ويرتكز توجهنا على الأسواق ذات الطلب المرتفع على المنتجات الطبيعية والغذائية، مع دراسة متطلبات كل سوق من حيث الجودة والمنشأ والتعبئة والمواصفات التجارية.",
  introEn:
    "We target expansion across Arab and European markets by supplying diverse natural and food products tailored to the needs of importers, distributors, wholesalers, and food manufacturers. Our strategy prioritizes high-demand markets with rigorous analysis of quality, origin verification, and certified packaging protocols.",
  arabMarkets: [
    {
      countryAr: "المملكة العربية السعودية",
      countryEn: "Saudi Arabia",
      descAr:
        "من أهم الأسواق الإقليمية للمنتجات الغذائية والطبيعية، مع طلب واسع على العسل الطبيعي وزيت الزيتون والتمور والأعشاب والتوابل.",
      descEn:
        "A premier regional market with expansive demand for natural honey, olive oil, premium dates, herbs, and culinary spices.",
      statAr: "استيراد نحو 18,509 طن من العسل الطبيعي، ونحو 21,650 طن من زيت الزيتون في 2024.",
      statEn: "Imported ~18,509 tonnes of natural honey and ~21,650 tonnes of olive oil in 2024.",
    },
    {
      countryAr: "الإمارات العربية المتحدة",
      countryEn: "United Arab Emirates",
      descAr:
        "تُعد الإمارات مركزًا تجاريًا مهمًا للاستيراد والتوزيع وإعادة التصدير، وتوفر فرصًا لتسويق العسل والتمور والزيوت والأعشاب والتوابل والمنتجات الغذائية المعبأة.",
      descEn:
        "A premier logistics and re-export hub offering dynamic channels for honey, dates, olive oils, botanicals, and private label packed goods.",
    },
    {
      countryAr: "دولة الكويت",
      countryEn: "Kuwait",
      descAr:
        "سوق مهم للمنتجات الغذائية المتخصصة، مع طلب على العسل الطبيعي وزيت الزيتون والتمور والمنتجات ذات الجودة المرتفعة.",
      descEn:
        "High-value market for premium food products with discerning demand for natural honey, cold-pressed olive oils, and luxury dates.",
      statAr: "بلغت واردات الكويت من العسل الطبيعي خلال عام 2024 نحو 4,050 طن.",
      statEn: "Kuwait imported ~4,050 tonnes of natural honey during 2024.",
    },
    {
      countryAr: "قطر والبحرين وسلطنة عمان",
      countryEn: "Qatar, Bahrain & Oman",
      descAr:
        "أسواق خليجية تعتمد على الاستيراد في عدد من الفئات الغذائية، وتوفر فرصًا لتوريد المنتجات الطبيعية والمعبأة، بالإضافة إلى التوريد للموزعين والفنادق وشركات الأغذية.",
      descEn:
        "Dynamic GCC import markets with high hospitality (HoReCa) and retail consumption across packaged natural commodities.",
    },
    {
      countryAr: "المملكة الأردنية الهاشمية",
      countryEn: "Jordan",
      descAr:
        "سوق إقليمي قريب يتميز بتنوع الطلب على المنتجات الغذائية، ويتيح فرصًا لتوريد الزيتون والتمور والعسل والأعشاب والتوابل.",
      descEn:
        "Strategic neighboring Levant market with active demand for Egyptian table olives, dates, honey, spices, and dried herbs.",
    },
    {
      countryAr: "دولة ليبيا",
      countryEn: "Libya",
      descAr:
        "من الأسواق القريبة جغرافيًا التي يمكن استهدافها بمنتجات الزيتون والتمور والعسل والتوابل والمنتجات الغذائية المعبأة.",
      descEn:
        "Geographically contiguous North African market with continuous demand for table olives, packaged honey, dates, and spices.",
    },
    {
      countryAr: "المملكة المغربية والجمهورية التونسية",
      countryEn: "Morocco & Tunisia",
      descAr:
        "أسواق ذات حضور قوي في إنتاج عدد من المنتجات الزراعية والغذائية، وتوفر فرصًا تجارية انتقائية في المنتجات المتخصصة والمنتجات المصنعة.",
      descEn:
        "Major agricultural powerhouses offering selective bilateral trade channels for specialized dates, botanicals, and value-added goods.",
    },
  ],
  europeanMarkets: [
    {
      countryAr: "الجمهورية الفرنسية",
      countryEn: "France",
      descAr:
        "من الأسواق الأوروبية المهمة للتمور والزيتون والعسل وزيت الزيتون، مع طلب على المنتجات الغذائية ذات المنشأ الواضح والمواصفات المعتمدة.",
      descEn:
        "Key European destination for dates, olives, honey, and olive oil, demanding strict origin traceability and certified specs.",
      statAr: "واردات 2024: 54,063 طن تمور، 158,443 طن زيتون محفوظ، 111,233 طن زيت زيتون.",
      statEn: "2024 imports: 54,063t dates, 158,443t preserved olives, 111,233t olive oil.",
    },
    {
      countryAr: "جمهورية ألمانيا الاتحادية",
      countryEn: "Germany",
      descAr:
        "سوق أوروبي كبير للمنتجات الطبيعية والغذائية، ويتميز بالطلب على العسل وزيت الزيتون والأعشاب والتوابل والتمور.",
      descEn:
        "Europe's largest consumer market for organic botanicals, natural honey, extra virgin oils, and culinary herbs.",
      statAr: "واردات 2024: 78,772 طن عسل طبيعي، 68,664 طن زيت زيتون، 76,803 طن زيتون محفوظ.",
      statEn: "2024 imports: 78,772t natural honey, 68,664t olive oil, 76,803t preserved olives.",
    },
    {
      countryAr: "الجمهورية الإيطالية",
      countryEn: "Italy",
      descAr:
        "تتمتع إيطاليا بسوق واسع للزيوت والمنتجات الغذائية، مع أهمية خاصة لمنتجات الزيتون وزيت الزيتون والتمور والأعشاب والتوابل.",
      descEn:
        "World-renowned Mediterranean culinary hub with substantial demand for bulk preserved olives, dates, and aromatic botanicals.",
      statAr: "بلغت واردات إيطاليا من الزيتون المحفوظ خلال عام 2024 نحو 86,320 طن.",
      statEn: "Italy imported ~86,320 tonnes of preserved table olives during 2024.",
    },
    {
      countryAr: "مملكة إسبانيا",
      countryEn: "Spain",
      descAr:
        "تُعد من الأسواق الرئيسية لإنتاج وتجارة الزيتون وزيت الزيتون، وتوفر فرصًا للتعاون والتوريد للمنتجات المصرية المتخصصة والمنتجات الغذائية المعبأة.",
      descEn:
        "Leading global olive powerhouse offering strategic co-packing and supply collaboration for Egyptian specialty cultivars.",
    },
    {
      countryAr: "مملكة هولندا",
      countryEn: "Netherlands",
      descAr:
        "مركز أوروبي مهم للاستيراد والتوزيع وإعادة التصدير، ويوفر فرصًا للوصول إلى أسواق أوروبية متعددة، خاصة في منتجات التمور والمنتجات الطبيعية.",
      descEn:
        "Europe's primary logistics trade gateway and distribution junction, notably for dates and dried botanical ingredients.",
      statAr: "بلغت واردات هولندا من التمور خلال عام 2024 نحو 24,416 طن.",
      statEn: "The Netherlands imported ~24,416 tonnes of dates in 2024.",
    },
    {
      countryAr: "المملكة المتحدة",
      countryEn: "United Kingdom",
      descAr:
        "سوق متنوع للمنتجات الغذائية والطبيعية، مع طلب على زيت الزيتون والعسل والتمور والأعشاب والتوابل والمنتجات الغذائية ذات الجودة المرتفعة.",
      descEn:
        "A diversified food and beverage market with consistent demand for virgin olive oils, natural honey, dates, and herbs.",
      statAr: "بلغت واردات المملكة المتحدة من زيت الزيتون خلال عام 2024 نحو 60,893 طن.",
      statEn: "The UK imported ~60,893 tonnes of olive oil during 2024.",
    },
    {
      countryAr: "البرتغال واليونان",
      countryEn: "Portugal & Greece",
      descAr:
        "أسواق مرتبطة بإنتاج واستهلاك الزيتون وزيت الزيتون، وتتيح فرصًا لدراسة التوريد للمنتجات الغذائية المتخصصة والأصناف غير المحلية.",
      descEn:
        "Mediterranean countries with deep olive tradition, offering niche trade channels for exotic date cultivars and herbal ingredients.",
    },
    {
      countryAr: "بلجيكا وسويسرا والنمسا",
      countryEn: "Belgium, Switzerland & Austria",
      descAr:
        "أسواق تتميز بالاهتمام بالمنتجات الطبيعية والغذائية المعبأة عالية الجودة، وتوفر فرصًا للتوسع من خلال الموزعين وشركات الاستيراد والتجارة الغذائية.",
      descEn:
        "Affluent Central European markets with premium interest in certified organic honey, herbs, and gourmet confectionery dates.",
    },
  ],
  stats2024: [
    {
      productAr: "العسل الطبيعي",
      productEn: "Natural Honey",
      data: [
        { countryAr: "ألمانيا", countryEn: "Germany", volume: "78,772 طن/سنة" },
        { countryAr: "السعودية", countryEn: "Saudi Arabia", volume: "18,509 طن/سنة" },
        { countryAr: "الكويت", countryEn: "Kuwait", volume: "4,050 طن/سنة" },
        { countryAr: "الاتحاد الأوروبي إجمالًا", countryEn: "European Union (Total)", volume: "174,630 طن/سنة" },
      ],
    },
    {
      productAr: "التمور ومنتجات النخيل",
      productEn: "Dates & Palm Products",
      data: [
        { countryAr: "المغرب", countryEn: "Morocco", volume: "138,450 طن/سنة" },
        { countryAr: "تركيا", countryEn: "Turkey", volume: "70,792 طن/سنة" },
        { countryAr: "فرنسا", countryEn: "France", volume: "54,063 طن/سنة" },
        { countryAr: "هولندا", countryEn: "Netherlands", volume: "24,416 طن/سنة" },
      ],
    },
    {
      productAr: "الزيتون المحفوظ",
      productEn: "Preserved Olives",
      data: [
        { countryAr: "فرنسا", countryEn: "France", volume: "158,443 طن/سنة" },
        { countryAr: "إيطاليا", countryEn: "Italy", volume: "86,320 طن/سنة" },
        { countryAr: "ألمانيا", countryEn: "Germany", volume: "76,803 طن/سنة" },
      ],
    },
    {
      productAr: "زيت الزيتون",
      productEn: "Olive Oil",
      data: [
        { countryAr: "فرنسا", countryEn: "France", volume: "111,233 طن/سنة" },
        { countryAr: "ألمانيا", countryEn: "Germany", volume: "68,664 طن/سنة" },
        { countryAr: "المملكة المتحدة", countryEn: "United Kingdom", volume: "60,893 طن/سنة" },
        { countryAr: "السعودية", countryEn: "Saudi Arabia", volume: "21,650 طن/سنة" },
      ],
    },
  ],
  egyptianExports: {
    titleAr: "المنتجات المصرية في الأسواق الدولية",
    titleEn: "Egyptian Agri-Products in Global Markets",
    descAr:
      "تمتلك المنتجات المصرية فرصًا تنافسية في عدد من الأسواق الإقليمية والدولية، خاصة في العسل الطبيعي والتمور والزيتون والأعشاب والنباتات الطبيعية. وتعكس هذه الأسواق فرصًا للتوسع في توريد المنتجات المصرية، إلى جانب إمكانية توفير منتجات من مصادر دولية أخرى وفقًا لمتطلبات العملاء.",
    descEn:
      "Egyptian agricultural and food products hold robust competitive advantages across regional and international destinations, particularly in natural honey, dates, table olives, aromatic herbs, and botanicals. We provide direct export lines from Egypt alongside sourcing from international partners.",
    destinations: [
      {
        productAr: "العسل الطبيعي",
        productEn: "Natural Honey",
        countriesAr: "المملكة العربية السعودية، الجمهورية التونسية، دولة الإمارات، دولة الكويت، المملكة الأردنية.",
        countriesEn: "Saudi Arabia, Tunisia, United Arab Emirates, Kuwait, Jordan.",
      },
      {
        productAr: "التمور ومنتجات النخيل",
        productEn: "Dates & Palm Cultivars",
        countriesAr: "المملكة المغربية، جمهورية إندونيسيا، الجمهورية التركية، دولة الإمارات.",
        countriesEn: "Morocco, Indonesia, Turkey, United Arab Emirates.",
      },
      {
        productAr: "الزيتون وزيت الزيتون",
        productEn: "Olives & Olive Oil",
        countriesAr: "دول الاتحاد الأوروبي (فرنسا، إيطاليا، إسبانيا)، المملكة المتحدة، ودول الخليج العربي.",
        countriesEn: "European Union (France, Italy, Spain), United Kingdom, and GCC countries.",
      },
      {
        productAr: "الأعشاب والتوابل المجففة",
        productEn: "Herbs & Botanicals",
        countriesAr: "ألمانيا، هولندا، فرنسا، الولايات المتحدة الأمريكية، ودول الخليج العربي.",
        countriesEn: "Germany, Netherlands, France, United States of America, and GCC.",
      },
    ],
  },
  globalOutlook: {
    titleAr: "توجهنا نحو الأسواق العالمية",
    titleEn: "Our International Horizon",
    descAr:
      "تعمل المجموعة على تطوير شبكة من علاقات التوريد والتوزيع التجاري بما يدعم الوصول إلى أسواق جديدة، وتوفير منتجات متنوعة تلائم احتياجات المستوردين والموزعين وشركات الصناعات الغذائية، مع الالتزام بأعلى معايير سلامة الغذاء وشهادات التصدير المعتمدة دوليًا.",
    descEn:
      "SAMI BIN AYYAD GROUP is actively expanding its network of international supply and distribution partnerships, facilitating entry into emerging markets and delivering versatile product solutions that cater to the exacting standards of global food conglomerates, packers, and distributors.",
  },
};

