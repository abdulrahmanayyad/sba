// ============================================================================
// SAMI BIN AYYAD GROUP — CENTRAL FOOD & NATURAL PRODUCTS REPOSITORY
// Single Central Source of Truth for Natural & Agri-Food Products Portfolio
// ============================================================================

export interface CentralFoodProductItem {
  id: string;
  code: string;
  nameAr: string;
  nameEn: string;
  mainCategoryKey: 
    | "soups-stocks" 
    | "traditional-foods" 
    | "rice-seasonings" 
    | "essential-spices" 
    | "asian-spices" 
    | "meat-poultry-seasonings" 
    | "specialty-blends";
  mainCategoryAr: string;
  mainCategoryEn: string;
  subCategoryAr: string;
  subCategoryEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
  originAr: string;
  originEn: string;
  originFlag: string;
  availability: "In Stock" | "Made to Order" | "Seasonal";
  availabilityAr: string;
  packagingOptionsAr: string;
  packagingOptionsEn: string;
  relatedMarketsAr: string[];
  relatedMarketsEn: string[];
  specifications: {
    labelAr: string;
    labelEn: string;
    valueAr: string;
    valueEn: string;
  }[];
}

export interface FoodCategoryMeta {
  key: CentralFoodProductItem["mainCategoryKey"];
  nameAr: string;
  nameEn: string;
  iconName: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export const CENTRAL_FOOD_CATEGORIES: FoodCategoryMeta[] = [
  {
    key: "soups-stocks",
    nameAr: "الشوربات والمرقات",
    nameEn: "Soups & Stocks",
    iconName: "Soup",
    descriptionAr: "خلطات شوربة بودرة سريعة التحضير ومكعبات/بودرة مرقات مركزة غنية بالنكهات الطبيعية لصناعة الأغذية والمطابخ والمطاعم.",
    descriptionEn: "Instant powder soup bases and concentrated natural broth bouillons engineered for food service, catering, and institutional culinary supply.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg"
  },
  {
    key: "traditional-foods",
    nameAr: "الأكلات التراثية",
    nameEn: "Traditional Food Products",
    iconName: "UtensilsCrossed",
    descriptionAr: "منتجات وخلطات غذائية تراثية مصرية وشرقية سريعة التحضير تجمع بين النكهة الأصيلة وجودة التعبئة القياسية.",
    descriptionEn: "Authentic Egyptian and Eastern heritage culinary specialties and quick-prep mixes combining traditional taste with modern packaging standards.",
    image: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg"
  },
  {
    key: "rice-seasonings",
    nameAr: "خلطات الأرز",
    nameEn: "Rice Seasoning Blends",
    iconName: "Wheat",
    descriptionAr: "توليفات بهارات متخصصة لأطباق الأرز الشرقية والخليجية والآسيوية الشهيرة (كبسة، بخاري، برياني، ومحشي).",
    descriptionEn: "Master-crafted seasoning blends for iconic Gulf, Middle Eastern, and Asian specialty rice preparations (Kabsa, Bukhari, Biryani, and Mahshi).",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg"
  },
  {
    key: "essential-spices",
    nameAr: "التوابل الأساسية",
    nameEn: "Essential Spices & Seasonings",
    iconName: "Flame",
    descriptionAr: "توابل طبيعية مفردة ومطحونة وحصى نقية 100% مختارة من أجود المحاصيل الزراعية مع فحص معملي كامل لنسب الزيوت الطيارة.",
    descriptionEn: "100% pure single ground and whole seed spices harvested from prime farms, lab-tested for essential volatile oils and microbiological safety.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg"
  },
  {
    key: "asian-spices",
    nameAr: "التوابل والخلطات الآسيوية",
    nameEn: "Asian Spices & Blends",
    iconName: "Sparkles",
    descriptionAr: "خلطات بهارات مستوحاة من المطابخ الآسيوية والعالمية بتوازن عطري غني يخدم صناعة الأغذية وقطاع الضيافة.",
    descriptionEn: "Internationally renowned Asian and fusion seasoning profiles delivering balanced aromatic intensity for foodservice and manufacturing.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg"
  },
  {
    key: "meat-poultry-seasonings",
    nameAr: "تتبيلات اللحوم والدجاج",
    nameEn: "Meat & Poultry Seasonings",
    iconName: "Beef",
    descriptionAr: "خلطات تتبيل احترافية متوازنة لشركات مصنعات اللحوم وسلاسل المطاعم ومحلات الجزارة الحديثة (شاورما، كفتة، بروستد، ومشاوي).",
    descriptionEn: "Commercial-grade marinades and dry rubs engineered for meat processing plants, quick-service chains, and culinary operators.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg"
  },
  {
    key: "specialty-blends",
    nameAr: "المتفرقات والخلطات المتخصصة",
    nameEn: "Specialty Blends & Other Products",
    iconName: "Package",
    descriptionAr: "توليفات ومكونات غذائية متميزة تشمل الطحينة السمسمية النقية، خلطات السلطات والأعشاب الإيطالية، واللومي المجفف.",
    descriptionEn: "Gourmet specialty staples including pure stone-ground sesame tahini, Italian herb infusions, dried whole lumi, and artisan condiments.",
    image: "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg"
  }
];

export const CENTRAL_FOOD_PRODUCTS: CentralFoodProductItem[] = [
  // ==========================================================================
  // 1. الشوربات والمرقات (SOUPS & STOCKS) — 8 Products
  // ==========================================================================
  {
    id: "fp-soup-cream-chicken",
    code: "SBA-FOD-SOP01",
    nameAr: "شوربة كريمة دجاج",
    nameEn: "Chicken Cream Soup",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "شوربات كريمة فورية",
    subCategoryEn: "Instant Cream Soups",
    descriptionAr: "بودرة شوربة كريمة دجاج سريعة التحضير بقوام كريمي غني ونكهة دجاج طبيعية متوازنة مخصصة للمطاعم والفنادق والعبوات التجارية.",
    descriptionEn: "Gourmet instant chicken cream soup base with a velvety smooth texture and authentic roasted poultry notes, formulated for HORECA and retail packaging.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس فويل محكمة 1 كجم، عبوات تجزئة 70 جم، أو شكائر 25 كجم صناعية",
    packagingOptionsEn: "1 kg laminated foil barrier pouches, 70g retail sachets, or 25 kg industrial kraft bags",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "الأردن", "ليبيا"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "Jordan", "Libya"],
    specifications: [
      { labelAr: "طريقة التحضير", labelEn: "Preparation", valueAr: "تذاب في ماء أو حليب دافئ وتغلى لمدة دقيقتين مع التحريك", valueEn: "Dissolve in warm water or milk, simmer for 2 minutes with stirring" },
      { labelAr: "المكونات الأساسية", labelEn: "Key Ingredients", valueAr: "خلاصة دجاج مجففة، كريمة نباتية/ألبان، بهارات بيضاء، نشا ذرة نقي", valueEn: "Dehydrated chicken stock, dairy/non-dairy creamer, white pepper, pure starch" }
    ]
  },
  {
    id: "fp-soup-cream-mushroom",
    code: "SBA-FOD-SOP02",
    nameAr: "شوربة كريمة بالمشروم",
    nameEn: "Mushroom Cream Soup",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "شوربات كريمة فورية",
    subCategoryEn: "Instant Cream Soups",
    descriptionAr: "شوربة مشروم بودرة ناعمة مدعمة بقطع الفطر المجفف الطبيعي ونكهة غنية تذوب بسرعة دون تكتل.",
    descriptionEn: "Savory cream of mushroom instant soup blend loaded with dehydrated natural mushroom bits, designed for smooth, lump-free reconstitution.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس فويل 1 كجم، عبوات 65 جم، أو براميل كرتونية 20 كجم",
    packagingOptionsEn: "1 kg moisture-proof foil bags, 65g retail sachets, or 20 kg bulk fiber drums",
    relatedMarketsAr: ["المملكة المتحدة", "السعودية", "الأردن", "قطر"],
    relatedMarketsEn: ["United Kingdom", "Saudi Arabia", "Jordan", "Qatar"],
    specifications: [
      { labelAr: "قطع المشروم", labelEn: "Mushroom Content", valueAr: "قطع مشروم مجفف حقيقي ظاهرة بعد التحضير", valueEn: "Real dehydrated wild mushroom pieces visible upon preparation" },
      { labelAr: "القوام", labelEn: "Texture", valueAr: "كريمي مخملي متجانس", valueEn: "Homogeneous, velvety creamy consistency" }
    ]
  },
  {
    id: "fp-soup-syrian-lentil",
    code: "SBA-FOD-SOP03",
    nameAr: "شوربة عدس سورية",
    nameEn: "Syrian Lentil Soup",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "شوربات بقولية تقليدية",
    subCategoryEn: "Traditional Pulse Soups",
    descriptionAr: "شوربة عدس أصفر شامي أصيل متبلة بالكمون والكسبرة ومرقة الخضار، مجهزة للتحضير الفوري بدون نقع أو سلق مطول.",
    descriptionEn: "Authentic Levantine golden lentil soup blend infused with ground cumin, coriander, and light vegetable aromatics, formulated for rapid boiling.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس ألومنيوم 1 كجم، عبوات كرتونية 80 جم، أو شكائر 25 كجم",
    packagingOptionsEn: "1 kg aluminum pouches, 80g retail cartons, or 25 kg woven sacks",
    relatedMarketsAr: ["ألمانيا", "فرنسا", "السعودية", "العراق", "تركيا"],
    relatedMarketsEn: ["Germany", "France", "Saudi Arabia", "Iraq", "Turkey"],
    specifications: [
      { labelAr: "مصدر البروتين", labelEn: "Protein Source", valueAr: "عدس أصفر نخب أول عالي البروتين والألياف", valueEn: "Grade-A yellow split lentils rich in plant protein and fiber" }
    ]
  },
  {
    id: "fp-stock-chicken",
    code: "SBA-FOD-STK01",
    nameAr: "مرقة دجاج",
    nameEn: "Chicken Stock",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "مرقات وبودرة تعزيز النكهة",
    subCategoryEn: "Seasoning Stocks & Bouillons",
    descriptionAr: "مرقة دجاج مركزة بودرة ومكعبات غنية بخلاصة الدجاج والأعشاب الطبيعية لتعزيز أطباق الأرز والصلصات واليخنات.",
    descriptionEn: "Concentrated dehydrated chicken stock and bouillon granules infused with celery, onion, and herbs, enhancing stews, sauces, and rice dishes.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب بلاستيكية 1 كجم، مكعبات 10 جم (علب 24 مكعب)، أو شكائر 25 كجم",
    packagingOptionsEn: "1 kg plastic tubs, 10g bouillon cubes (24-cube display cartons), or 25 kg sacks",
    relatedMarketsAr: ["نيجيريا", "السعودية", "العراق", "ليبيا", "الأردن"],
    relatedMarketsEn: ["Nigeria", "Saudi Arabia", "Iraq", "Libya", "Jordan"],
    specifications: [
      { labelAr: "الذوبان", labelEn: "Solubility", valueAr: "ذوبان فوري وتام في الماء الساخن بدون رواسب", valueEn: "Instant total solubility in boiling water without gritty residue" }
    ]
  },
  {
    id: "fp-stock-beef",
    code: "SBA-FOD-STK02",
    nameAr: "مرقة لحم",
    nameEn: "Beef Stock",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "مرقات وبودرة تعزيز النكهة",
    subCategoryEn: "Seasoning Stocks & Bouillons",
    descriptionAr: "مرقة لحم بقري مركزة بودرة ومكعبات تمنح الشوربات والصلصات البنية (Brown Gravy) عمقًا ونكهة شواء قوية.",
    descriptionEn: "Rich granulated and cubed beef stock bouillon delivering robust roasted meat depth to demi-glace, gravies, and braised dishes.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب 1 كجم، عبوات كرتونية مكعبات، وشكائر 25 كجم توريد مصانع",
    packagingOptionsEn: "1 kg foodservice jars, retail cube boxes, and 25 kg factory bulk sacks",
    relatedMarketsAr: ["السعودية", "الجزائر", "الأردن", "إسبانيا"],
    relatedMarketsEn: ["Saudi Arabia", "Algeria", "Jordan", "Spain"],
    specifications: [
      { labelAr: "التركيز", labelEn: "Strength", valueAr: "ملعقة طعام واحدة تكفي لعمل لتر كامل من المرقة الغنية", valueEn: "One level tablespoon yields 1 full liter of rich, dark broth" }
    ]
  },
  {
    id: "fp-stock-vegetable",
    code: "SBA-FOD-STK03",
    nameAr: "مرقة خضروات",
    nameEn: "Vegetable Stock",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "مرقات نباتية طبيعية",
    subCategoryEn: "Vegetable Bouillons",
    descriptionAr: "مرقة خضروات طبيعية 100% نباتية وخالية من الدهون الحيوانية، مستخلصة من الجزر والكرفس والبصل والكرات والأعشاب العطرية.",
    descriptionEn: "100% plant-based vegetarian vegetable bouillon powder crafted from dehydrated carrots, celery, leeks, onions, and delicate garden herbs.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "عبوات 1 كجم، أكياس 500 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg tubs, 500g pouches, and 20 kg bulk sacks",
    relatedMarketsAr: ["فرنسا", "ألمانيا", "المملكة المتحدة", "إيطاليا"],
    relatedMarketsEn: ["France", "Germany", "United Kingdom", "Italy"],
    specifications: [
      { labelAr: "التصنيف الصحي", labelEn: "Dietary", valueAr: "نباتي 100% (Vegan)، خالٍ من الملونات الصناعية", valueEn: "100% Vegan, free from artificial azo dyes" }
    ]
  },
  {
    id: "fp-stock-shrimp",
    code: "SBA-FOD-STK04",
    nameAr: "مرقة جمبري",
    nameEn: "Shrimp / Seafood Stock",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "مرقات بحرية متخصصة",
    subCategoryEn: "Seafood Stocks",
    descriptionAr: "مرقة جمبري ومأكولات بحرية مركزة بنكهة القشريات الطبيعية المميزة لطهي الصيادية والشوربات البحرية والصلصات الإسبانية والآسيوية.",
    descriptionEn: "Deep crustacean seafood broth base rich in dehydrated shrimp essence, formulated for Paella, Sayadieh, bisque, and Asian noodle broths.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب 1 كجم، عبوات 500 جم، وشكائر 20 كجم لقطاع المطاعم والمصانع",
    packagingOptionsEn: "1 kg containers, 500g zip-pouches, and 20 kg bulk food-grade containers",
    relatedMarketsAr: ["إسبانيا", "إيطاليا", "تونس", "السعودية"],
    relatedMarketsEn: ["Spain", "Italy", "Tunisia", "Saudi Arabia"],
    specifications: [
      { labelAr: "النكهة", labelEn: "Flavor Profile", valueAr: "طعم بحري أصيل بدون زفارة أو نكهات صناعية منفرة", valueEn: "Pure oceanic crustacean sweetness with clean aromatic finish" }
    ]
  },
  {
    id: "fp-soup-onion",
    code: "SBA-FOD-SOP04",
    nameAr: "شوربة بصل",
    nameEn: "French Onion Soup",
    mainCategoryKey: "soups-stocks",
    mainCategoryAr: "الشوربات والمرقات",
    mainCategoryEn: "Soups & Stocks",
    subCategoryAr: "شوربات بصل كلاسيكية",
    subCategoryEn: "Classical Onion Soups",
    descriptionAr: "شوربة بصل تقليدية ببودرة البصل المكرمل الطبيعي ورقائق البصل المجفف، ممتازة كشوربة ساخنة أو كقاعدة تتبيل للروستو والصواني.",
    descriptionEn: "Classic French-style onion soup mix combining golden caramelized onion powder with toasted onion flakes; also serves as a premium roast dip/rub.",
    image: "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، عبوات تجزئة 60 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg sealed pouches, 60g retail sachets, and 25 kg industrial sacks",
    relatedMarketsAr: ["فرنسا", "أمريكا", "كندا", "السعودية"],
    relatedMarketsEn: ["France", "USA", "Canada", "Saudi Arabia"],
    specifications: [
      { labelAr: "رقائق البصل", labelEn: "Onion Flakes", valueAr: "رقائق بصل مصري مجفف ذهبي عالية الحلاوة الطبيعية", valueEn: "Dehydrated sweet golden Egyptian onion flakes" }
    ]
  },

  // ==========================================================================
  // 2. الأكلات التراثية (TRADITIONAL FOOD PRODUCTS) — 8 Products
  // ==========================================================================
  {
    id: "fp-trad-duqqa",
    code: "SBA-FOD-TRD01",
    nameAr: "الدقة المصرية",
    nameEn: "Egyptian Duqqa",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "خلطات التغميس التراثية",
    subCategoryEn: "Heritage Dipping Blends",
    descriptionAr: "التوليفة التراثية المصرية الشهيرة من السمسم المحمص والكسبرة والكمون والملح والمكسرات، تؤكل تقليديًا مع زيت الزيتون والخبز الطازج.",
    descriptionEn: "The legendary Egyptian heritage dry dip of toasted sesame, freshly cracked coriander seeds, cumin, salt, and crushed nuts, paired with olive oil and warm bread.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "برطمانات زجاجية 250 جم، أكياس محكمة 500 جم و1 كجم، أو عبوات جملة 10 كجم",
    packagingOptionsEn: "250g glass jars, 500g/1kg standup zip-pouches, and 10 kg bulk boxes",
    relatedMarketsAr: ["السعودية", "أمريكا", "أستراليا", "بريطانيا", "الإمارات"],
    relatedMarketsEn: ["Saudi Arabia", "USA", "Australia", "United Kingdom", "UAE"],
    specifications: [
      { labelAr: "التحميص", labelEn: "Roasting", valueAr: "تحميص هوائي بطيء يحافظ على الزيوت العطرية والقرمشة", valueEn: "Gentle hot-air slow roasting locking in volatile aromatics and crunch" }
    ]
  },
  {
    id: "fp-trad-bissara",
    code: "SBA-FOD-TRD02",
    nameAr: "بصارة سريعة التحضير",
    nameEn: "Instant Bissara",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "بقوليات تراثية سريعة التحضير",
    subCategoryEn: "Ready-to-Cook Heritage Pulses",
    descriptionAr: "مسحوق بصارة مصرية تقليدية من الفول المدشوش والملوخية والكزبرة والنعناع المجفف، تطهى في 5 دقائق بقوام مخملي أصيل.",
    descriptionEn: "Convenient instant mix for the historic Egyptian Bissara: split fava bean meal, molokhia, dry spearmint, and aromatics ready in 5 minutes.",
    image: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس فويل 400 جم، عبوات 1 كجم، أو شكائر 20 كجم",
    packagingOptionsEn: "400g barrier pouches, 1 kg food-service bags, and 20 kg sacks",
    relatedMarketsAr: ["أمريكا", "كندا", "أوروبا", "الخليج العربي"],
    relatedMarketsEn: ["USA", "Canada", "Europe", "GCC"],
    specifications: [
      { labelAr: "الفول المستخدم", labelEn: "Fava Bean Quality", valueAr: "فول بلدي مصري مقشور مطحون بدرجة نعومة متجانسة", valueEn: "Premium split Egyptian field beans milled to uniform smooth grade" }
    ]
  },
  {
    id: "fp-trad-fava-seasoned",
    code: "SBA-FOD-TRD03",
    nameAr: "فول بالخلطة",
    nameEn: "Seasoned Fava Beans",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "فول مدمس وتتبيلات مجهزة",
    subCategoryEn: "Prepared & Seasoned Fava",
    descriptionAr: "فول مدمس مصري متبل بخلطة الطماطم والكمون والثوم والليمون والفلفل الحار، معبأ بأعلى معايير التعقيم الغذائي.",
    descriptionEn: "Authentic Egyptian cooked fava beans seasoned with tomato paste, cumin, garlic, lemon, and mild chili, commercially sterilized for long shelf-life.",
    image: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب صفيح سهلة الفتح 400 جم (كرتونة 24 علبة)، برطمانات زجاجية، أو أكياس أوتوكلاف 1 كجم",
    packagingOptionsEn: "400g easy-open cans (cartons of 24), glass jars, or 1 kg retort pouches",
    relatedMarketsAr: ["السعودية", "الكويت", "قطر", "أمريكا", "بريطانيا"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Qatar", "USA", "United Kingdom"],
    specifications: [
      { labelAr: "حجم الحبة", labelEn: "Bean Caliber", valueAr: "فول مدمس حبوب كاملة طرية القشرة سهلة الهرس", valueEn: "Soft-skinned whole Egyptian fava beans, easily mashable" }
    ]
  },
  {
    id: "fp-trad-fava-hot-oil",
    code: "SBA-FOD-TRD04",
    nameAr: "فول بالزيت الحار",
    nameEn: "Fava Beans with Linseed / Hot Oil",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "فول مدمس وتتبيلات مجهزة",
    subCategoryEn: "Prepared & Seasoned Fava",
    descriptionAr: "فول مدمس مصري أصيل بزيت بذور الكتان الطبيعي (الزيت الحار النقي) والكمون والملح بنكهته التراثية الفريدة الغنية بأوميغا 3.",
    descriptionEn: "Classic Egyptian fava beans steeped in pure cold-pressed flaxseed (linseed) oil and cumin, delivering a smoky nutty heritage flavor packed with Omega-3.",
    image: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب صفيح 400 جم، برطمانات زجاجية 450 جم، أو عبوات كرتونية 24 علبة",
    packagingOptionsEn: "400g sanitary tins, 450g glass jars, or 24-can master export cartons",
    relatedMarketsAr: ["الخليج العربي", "أمريكا", "كندا", "أوروبا"],
    relatedMarketsEn: ["GCC Countries", "USA", "Canada", "Europe"],
    specifications: [
      { labelAr: "نوع الزيت", labelEn: "Oil Type", valueAr: "زيت بذر كتان خام معصور على البارد 100% طبيعي", valueEn: "100% cold-pressed virgin flaxseed oil" }
    ]
  },
  {
    id: "fp-trad-fava-tahini",
    code: "SBA-FOD-TRD05",
    nameAr: "فول بالطحينة",
    nameEn: "Fava Beans with Tahini",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "فول مدمس وتتبيلات مجهزة",
    subCategoryEn: "Prepared & Seasoned Fava",
    descriptionAr: "فول مدمس كريمي ممزوج بالطحينة السمسمية النقية 100% والليمون والتوابل الشرقية، جاهز للأكل الفوري على مائدة الإفطار والسحور.",
    descriptionEn: "Creamy cooked fava beans blended with 100% pure stone-ground sesame tahini, fresh lemon juice, and cumin, ready-to-serve for breakfast and mezze.",
    image: "/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب 400 جم، عبوات زجاجية 500 جم، أو كراتين 24 علبة",
    packagingOptionsEn: "400g lithographed cans, 500g glass jars, or export master cartons of 24",
    relatedMarketsAr: ["السعودية", "الإمارات", "أمريكا", "أستراليا"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "USA", "Australia"],
    specifications: [
      { labelAr: "نسبة الطحينة", labelEn: "Tahini Proportion", valueAr: "طحينة سمسم صافية لا تقل عن 12% من إجمالي الخلطة", valueEn: "Pure sesame tahini comprising no less than 12% of total recipe" }
    ]
  },
  {
    id: "fp-trad-zaatar-duqqa",
    code: "SBA-FOD-TRD06",
    nameAr: "دقة الزعتر",
    nameEn: "Za'atar Blend",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "خلطات التغميس التراثية",
    subCategoryEn: "Heritage Dipping Blends",
    descriptionAr: "خلطة زعتر بلدي فاخرة ممزوجة بالسمسم المحمص الذهبي والسماق الطبيعي وزيت الزيتون البكر، مثالية للمناقيش والتغميس الصباحي.",
    descriptionEn: "Premium artisanal Za'atar blend of wild thyme leaves, golden toasted sesame, acidic sumac berries, and a touch of sea salt for flatbreads and dipping.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس سحاب 250 جم و500 جم و1 كجم، أو شكائر كرافت 15 كجم",
    packagingOptionsEn: "250g, 500g, and 1 kg standup zip pouches, or 15 kg multi-wall craft bags",
    relatedMarketsAr: ["الأردن", "السعودية", "الإمارات", "أمريكا", "بريطانيا"],
    relatedMarketsEn: ["Jordan", "Saudi Arabia", "UAE", "USA", "United Kingdom"],
    specifications: [
      { labelAr: "السمسم", labelEn: "Sesame Quality", valueAr: "سمسم بلدي مصري محمص بنسبة نقاوة 99.9%", valueEn: "99.9% clean grade-A Egyptian roasted sesame seeds" }
    ]
  },
  {
    id: "fp-trad-molokhia-taaleya",
    code: "SBA-FOD-TRD07",
    nameAr: "ملوخية بالتقلية",
    nameEn: "Molokhia with Ta'leya",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "خضار مجفف وخلطات طهي",
    subCategoryEn: "Dried Greens & Cooking Kits",
    descriptionAr: "ملوخية خضراء مجففة شمسيًا ومطحونة ناعمًا مرفقة بكيس تقلية الكسبرة الجافة والثوم المقرمش بنكهة الطشة المصرية الشهيرة.",
    descriptionEn: "Finely milled sun-dried green Molokhia (jute leaves) accompanied by a distinct pouch of crisp garlic and coriander 'Ta'leya' tempering seasoning.",
    image: "/BG/Natural & Agri-Food Products/Herbs & Natural Plants.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "علب كرتونية 200 جم و400 جم، أكياس مفرغة 1 كجم، أو شكائر 20 كجم للتصدير",
    packagingOptionsEn: "200g & 400g retail duplex boxes, 1 kg vacuum packs, or 20 kg export bales",
    relatedMarketsAr: ["السعودية", "الكويت", "قطر", "أمريكا", "كندا"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Qatar", "USA", "Canada"],
    specifications: [
      { labelAr: "اللون والرائحة", labelEn: "Aroma & Hue", valueAr: "لون أخضر زمردي زاهٍ بدون شوائب ورائحة عطرية قوية", valueEn: "Vibrant emerald green color, zero sand residue, pungent herbal aroma" }
    ]
  },
  {
    id: "fp-trad-rice-kofta-mix",
    code: "SBA-FOD-TRD08",
    nameAr: "خلطة كفتة الأرز",
    nameEn: "Rice Kofta Seasoning & Mix",
    mainCategoryKey: "traditional-foods",
    mainCategoryAr: "الأكلات التراثية",
    mainCategoryEn: "Traditional Food Products",
    subCategoryAr: "خلطات طهي مجهزة",
    subCategoryEn: "Heritage Prepared Mixes",
    descriptionAr: "خلطة متكاملة من دقيق الأرز المصري الناعم وخضار الشبت والكزبرة والبقدونس المجفف وتوليفة بهارات الكفتة التراثية لتحضير كفتة الأرز في دقائق.",
    descriptionEn: "Complete ready-blend of fine Egyptian rice flour, dehydrated green herbs (dill, coriander, parsley), and heritage spices for classic Egyptian rice kofta.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 500 جم و1 كجم، وشكائر 25 كجم لمصانع اللحوم والمطابخ المركزية",
    packagingOptionsEn: "500g and 1 kg retail bags, and 25 kg sacks for commercial central commissaries",
    relatedMarketsAr: ["الخليج العربي", "أمريكا", "أوروبا"],
    relatedMarketsEn: ["GCC Countries", "USA", "Europe"],
    specifications: [
      { labelAr: "طريقة الاستخدام", labelEn: "Usage", valueAr: "تضاف مباشرة إلى اللحم المفروم مع البصل دون الحاجة لطحن مسبق", valueEn: "Blend directly with ground minced beef and onion without prior pre-soaking" }
    ]
  },

  // ==========================================================================
  // 3. خلطات الأرز (RICE SEASONING BLENDS) — 4 Products
  // ==========================================================================
  {
    id: "fp-rice-indian-biryani",
    code: "SBA-FOD-RCE01",
    nameAr: "بهار أرز هندي",
    nameEn: "Indian Biryani / Rice Spice",
    mainCategoryKey: "rice-seasonings",
    mainCategoryAr: "خلطات الأرز",
    mainCategoryEn: "Rice Seasoning Blends",
    subCategoryAr: "توابل الأرز التخصصية",
    subCategoryEn: "Specialty Rice Seasonings",
    descriptionAr: "توليفة هندية عطرية أصيلة تضم الهيل الأخضر والقرنفل والقرفة واليانسون النجمي والزعفران الطبيعي لإعداد البرياني الملكي.",
    descriptionEn: "Authentic Indian Biryani spice blend featuring crushed green cardamom, whole cloves, cinnamon bark, star anise, and natural saffron notes.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "برطمانات بهارات 100 جم و250 جم، أكياس 1 كجم، أو شكائر 25 كجم",
    packagingOptionsEn: "100g/250g shaker jars, 1 kg standup bags, or 25 kg industrial bulk sacks",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "المملكة المتحدة", "عُمان"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "United Kingdom", "Oman"],
    specifications: [
      { labelAr: "طبيعة الخلطة", labelEn: "Blend Type", valueAr: "مزيج خشن ومطحون يحتوي على حبوب بهارات كاملة عطرية", valueEn: "Coarse & ground hybrid blend retaining whole aromatic seeds" }
    ]
  },
  {
    id: "fp-rice-bukhari",
    code: "SBA-FOD-RCE02",
    nameAr: "بهار أرز بخاري",
    nameEn: "Bukhari Rice Spice",
    mainCategoryKey: "rice-seasonings",
    mainCategoryAr: "خلطات الأرز",
    mainCategoryEn: "Rice Seasoning Blends",
    subCategoryAr: "توابل الأرز التخصصية",
    subCategoryEn: "Specialty Rice Seasonings",
    descriptionAr: "تتبيلة الأرز البخاري الحجازي والآسيوي الغنية بالكمون المحمص وجوزة الطيب والهيل والكزبرة وقشور البرتقال المجففة لمنح الأرز لونه ونكهته الجذابة.",
    descriptionEn: "Traditional Bukhari rice seasoning crafted with roasted cumin seeds, sweet nutmeg, cardamom, and citrus peel for savory caramelized pilaf.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس فويل 1 كجم، عبوات زجاجية 200 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg foil bags, 200g glass containers, and 20 kg bulk sacks",
    relatedMarketsAr: ["السعودية", "الكويت", "الأردن", "البحرين"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Jordan", "Bahrain"],
    specifications: [
      { labelAr: "النكهة البارزة", labelEn: "Dominant Note", valueAr: "نكهة الكمون المحمص العطري والبهارات الدافئة", valueEn: "Toasted sweet cumin with warm aromatic undertones" }
    ]
  },
  {
    id: "fp-rice-kabsa",
    code: "SBA-FOD-RCE03",
    nameAr: "بهار أرز كبسة",
    nameEn: "Kabsa Rice Spice",
    mainCategoryKey: "rice-seasonings",
    mainCategoryAr: "خلطات الأرز",
    mainCategoryEn: "Rice Seasoning Blends",
    subCategoryAr: "توابل الأرز التخصصية",
    subCategoryEn: "Specialty Rice Seasonings",
    descriptionAr: "بهارات الكبسة الخليجية الكلاسيكية باللومي المجفف والقرفة والهيل وورق الغار والقرنفل والكركم الذهبي، متوازنة تمامًا لكافة أطباق اللحم والدجاج.",
    descriptionEn: "Classic Arabian Gulf Kabsa spice mix balancing ground dried black lime (lumi), Ceylon cinnamon, green cardamom, bay leaves, and golden turmeric.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "برطمانات 120 جم، أكياس سحاب 1 كجم، أو شكائر 25 كجم",
    packagingOptionsEn: "120g spice shakers, 1 kg standup zip pouches, and 25 kg industrial bags",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "قطر", "عُمان"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "Qatar", "Oman"],
    specifications: [
      { labelAr: "الاستخدام", labelEn: "Application", valueAr: "ملعقة طعام لكل 500 جم أرز بسمتي أو أثناء سلق الدجاج واللحم", valueEn: "1 tablespoon per 500g Basmati rice or during meat/poultry simmering" }
    ]
  },
  {
    id: "fp-rice-mahshi",
    code: "SBA-FOD-RCE04",
    nameAr: "بهار أرز محشي",
    nameEn: "Egyptian Mahshi Rice Seasoning",
    mainCategoryKey: "rice-seasonings",
    mainCategoryAr: "خلطات الأرز",
    mainCategoryEn: "Rice Seasoning Blends",
    subCategoryAr: "توابل الأرز التخصصية",
    subCategoryEn: "Specialty Rice Seasonings",
    descriptionAr: "الخلطة السرية التراثية لأرز المحشي المصري (كرنب، ورق عنب، كوسة، باذنجان) بالكمون والنعناع الجاف والكزبرة والبابريكا والقرفة والفلفل الأسود.",
    descriptionEn: "The secret traditional Egyptian spice blend for stuffed vegetable rice fillings (vine leaves, cabbage, zucchini) with mint, cumin, and sweet paprika.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 250 جم و1 كجم، وشكائر 20 كجم",
    packagingOptionsEn: "250g and 1 kg pouches, and 20 kg bulk packing",
    relatedMarketsAr: ["الخليج العربي", "أمريكا", "أوروبا", "كندا"],
    relatedMarketsEn: ["GCC Countries", "USA", "Europe", "Canada"],
    specifications: [
      { labelAr: "الرائحة العطرية", labelEn: "Herbaceous Note", valueAr: "تركيز غني بالنعناع الجاف الصعيدي والكزبرة العطرية", valueEn: "Enriched with Upper Egyptian spearmint and fragrant coriander" }
    ]
  },

  // ==========================================================================
  // 4. التوابل الأساسية (ESSENTIAL SPICES & SEASONINGS) — 18 Products
  // ==========================================================================
  {
    id: "fp-spice-coriander",
    code: "SBA-FOD-SPC01",
    nameAr: "كسبرة",
    nameEn: "Coriander",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل بذرية ومطحونة",
    subCategoryEn: "Seed & Ground Spices",
    descriptionAr: "كزبرة مصرية فاخرة (حبوب كاملة أو مطحونة ناعمًا) بنسبة نقاوة 99% ونسبة زيوت طيارة مرتفعة ورائحة حمضية دافئة.",
    descriptionEn: "Egyptian premium coriander seeds and ground powder (99% purity) with superior volatile oil content and warm, citrusy herbal notes.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر بولي بروبيلين 25 كجم، أكياس 1 كجم، أو برطمانات 100 جم",
    packagingOptionsEn: "25 kg PP export bags, 1 kg food-service pouches, or 100g retail jars",
    relatedMarketsAr: ["الهند", "ألمانيا", "أمريكا", "السعودية", "فرنسا"],
    relatedMarketsEn: ["India", "Germany", "USA", "Saudi Arabia", "France"],
    specifications: [
      { labelAr: "الزيوت الطيارة", labelEn: "Volatile Oil", valueAr: "أعلى من 0.8% مل / 100 جم", valueEn: "Min 0.8 ml / 100g" }
    ]
  },
  {
    id: "fp-spice-cumin",
    code: "SBA-FOD-SPC02",
    nameAr: "كمون",
    nameEn: "Cumin",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل بذرية ومطحونة",
    subCategoryEn: "Seed & Ground Spices",
    descriptionAr: "كمون بلدي مصري درجة أولى مطحون أو بذور كاملة مغربلة، مفحوص مخبريًا لخلوه من الشوائب والأتربة.",
    descriptionEn: "Grade-A Egyptian cumin (ground and machine-cleaned seeds) featuring intense aroma and high essential oil content, zero sand residue.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم، أكياس تفريغ هواء 1 كجم، أو برطمانات 120 جم",
    packagingOptionsEn: "25 kg double-lined sacks, 1 kg vacuum bags, or 120g retail shakers",
    relatedMarketsAr: ["إسبانيا", "تركيا", "المملكة المتحدة", "السعودية", "المغرب"],
    relatedMarketsEn: ["Spain", "Turkey", "United Kingdom", "Saudi Arabia", "Morocco"],
    specifications: [
      { labelAr: "الزيوت الطيارة", labelEn: "Volatile Oil", valueAr: "أعلى من 2.5% مل / 100 جم", valueEn: "Min 2.5 ml / 100g" }
    ]
  },
  {
    id: "fp-spice-black-pepper",
    code: "SBA-FOD-SPC03",
    nameAr: "فلفل أسود",
    nameEn: "Black Pepper",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل بذرية ومطحونة",
    subCategoryEn: "Seed & Ground Spices",
    descriptionAr: "فلفل أسود نخب أول حبوب كاملة (500-550 جم/لتر) ومطحون ناعم وخشن بنكهة حارة حادة ومحتوى بيبيرين عالي.",
    descriptionEn: "Premium whole black peppercorns (500-550 G/L density) and precision ground pepper rich in pungent piperine.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر خيش/بولي 25 كجم، أكياس 1 كجم، وبرطمانات توابل زجاجية",
    packagingOptionsEn: "25 kg jute/PP bags, 1 kg vacuum bags, and glass grinders",
    relatedMarketsAr: ["السعودية", "فرنسا", "إيطاليا", "الأردن"],
    relatedMarketsEn: ["Saudi Arabia", "France", "Italy", "Jordan"],
    specifications: [
      { labelAr: "نسبة البيبيرين", labelEn: "Piperine Content", valueAr: "لا تقل عن 5.5%", valueEn: "Min 5.5%" }
    ]
  },
  {
    id: "fp-spice-paprika",
    code: "SBA-FOD-SPC04",
    nameAr: "بابريكا",
    nameEn: "Paprika",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل ملونة ومطحونة",
    subCategoryEn: "Ground Capsicum Spices",
    descriptionAr: "بابريكا حلوة نقية 100% بلون أحمر قاني (120-140 ASTA) ومذاق سكري معتدل بدون مرارة أو حرارة لاذعة.",
    descriptionEn: "100% pure sweet red paprika powder with high natural color value (120-140 ASTA) and gentle fruity warmth.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم مبطنة ألومنيوم لمنع الأكسدة، أكياس 1 كجم، وبرطمانات 100 جم",
    packagingOptionsEn: "25 kg foil-lined kraft bags to prevent photo-oxidation, 1 kg bags, and 100g jars",
    relatedMarketsAr: ["إسبانيا", "أمريكا", "ألمانيا", "السعودية"],
    relatedMarketsEn: ["Spain", "USA", "Germany", "Saudi Arabia"],
    specifications: [
      { labelAr: "قوة اللون", labelEn: "Color Value", valueAr: "120 - 140 ASTA", valueEn: "120 - 140 ASTA units" }
    ]
  },
  {
    id: "fp-spice-smoked-paprika",
    code: "SBA-FOD-SPC05",
    nameAr: "بابريكا مدخنة",
    nameEn: "Smoked Paprika",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل ملونة ومطحونة",
    subCategoryEn: "Ground Capsicum Spices",
    descriptionAr: "بابريكا مجففة بالدخان الطبيعي بخشب البلوط تمنح الأطباق وصلصات الباربكيو نكهة تدخين عميقة ولونًا أحمر ساحرًا.",
    descriptionEn: "Oakwood naturally smoked paprika powder infusing stews, roasted meats, and BBQ sauces with complex smoky depth.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس فويل 1 كجم، عبوات 250 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg foil pouches, 250g retail canisters, and 20 kg sacks",
    relatedMarketsAr: ["إسبانيا", "إيطاليا", "المملكة المتحدة", "الخليج"],
    relatedMarketsEn: ["Spain", "Italy", "United Kingdom", "GCC"],
    specifications: [
      { labelAr: "طريقة التدخين", labelEn: "Smoking Process", valueAr: "تدخين طبيعي 100% بدون منكهات صناعية مضافة", valueEn: "100% authentic wood-smoked, zero artificial smoke liquid" }
    ]
  },
  {
    id: "fp-spice-chili-flakes",
    code: "SBA-FOD-SPC06",
    nameAr: "رقائق شطة",
    nameEn: "Chili Flakes",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "فلفل حار ورقائق",
    subCategoryEn: "Crushed Chili & Flakes",
    descriptionAr: "رقائق فلفل أحمر حار مجروشة بالبذور الطبيعية لإضفاء قرمشة وحرارة متدرجة على البيتزا والمعكرونة والصلصات.",
    descriptionEn: "Crushed dried red chili flakes with seeds delivering gradual clean heat, color contrast, and texture for pizza, pasta, and rubs.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 20 كجم، أكياس سحاب 1 كجم، ومرشات بهارات 100 جم",
    packagingOptionsEn: "20 kg bulk sacks, 1 kg standup bags, and 100g pizza shakers",
    relatedMarketsAr: ["إيطاليا", "أمريكا", "كندا", "السعودية"],
    relatedMarketsEn: ["Italy", "USA", "Canada", "Saudi Arabia"],
    specifications: [
      { labelAr: "الحرارة", labelEn: "Heat Level", valueAr: "25,000 - 35,000 وحدة سكوفيل (SHU)", valueEn: "25,000 - 35,000 Scoville Heat Units (SHU)" }
    ]
  },
  {
    id: "fp-spice-chili-powder",
    code: "SBA-FOD-SPC07",
    nameAr: "شطة",
    nameEn: "Chili Powder",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "فلفل حار ورقائق",
    subCategoryEn: "Crushed Chili & Flakes",
    descriptionAr: "شطة حمراء ناعمة نقية 100% مطحونة من قرون الفلفل الحار الصعيدي المجفف بدرجة حرارة ولاذعية عالية.",
    descriptionEn: "Fine cayenne chili powder milled from sun-dried Upper Egyptian red peppers with intense, immediate heat.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم، أكياس 1 كجم، وبرطمانات 120 جم",
    packagingOptionsEn: "25 kg sacks, 1 kg barrier pouches, and 120g retail jars",
    relatedMarketsAr: ["نيجيريا", "الجزائر", "السعودية", "الهند"],
    relatedMarketsEn: ["Nigeria", "Algeria", "Saudi Arabia", "India"],
    specifications: [
      { labelAr: "الحرارة", labelEn: "Heat Level", valueAr: "35,000 - 45,000 SHU", valueEn: "35,000 - 45,000 SHU" }
    ]
  },
  {
    id: "fp-spice-ginger",
    code: "SBA-FOD-SPC08",
    nameAr: "جنزبيل",
    nameEn: "Ginger",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "جذور وتوابل عطرية",
    subCategoryEn: "Rhizomes & Roots",
    descriptionAr: "جنزبيل مجفف مطحون ناعمًا بنكهة حارة لاذعة ورائحة ليمونية عطرية، خالٍ من الألياف الخشنة وسريع الذوبان في السوائل.",
    descriptionEn: "Fine-ground dried ginger root powder delivering zesty, citrus-tinged warmth; low fiber and free-flowing for beverages and baking.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم، أكياس 1 كجم، وبرطمانات 100 جم",
    packagingOptionsEn: "25 kg paper bags, 1 kg zip pouches, and 100g shakers",
    relatedMarketsAr: ["المملكة المتحدة", "السعودية", "أمريكا", "هولندا"],
    relatedMarketsEn: ["United Kingdom", "Saudi Arabia", "USA", "Netherlands"],
    specifications: [
      { labelAr: "النقاء", labelEn: "Purity", valueAr: "100% زنجبيل طبيعي بدون إضافات نشوية", valueEn: "100% pure root, zero starch fillers" }
    ]
  },
  {
    id: "fp-spice-cinnamon",
    code: "SBA-FOD-SPC09",
    nameAr: "قرفة",
    nameEn: "Cinnamon",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "لحاء وتوابل دافئة",
    subCategoryEn: "Bark & Sweet Spices",
    descriptionAr: "قرفة مطحونة فائقة النعومة برائحة خشبية سكرية ونسبة سينامالدهيد مرتفعة للحلويات والمخبوزات والمشروبات والطهي.",
    descriptionEn: "Micro-milled sweet aromatic cinnamon powder rich in cinnamaldehyde, perfect for bakery, confectioneries, and savory rubs.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم، أكياس 1 كجم، وبرطمانات 100 جم",
    packagingOptionsEn: "25 kg craft bags, 1 kg pouches, and 100g glass jars",
    relatedMarketsAr: ["أمريكا", "ألمانيا", "السعودية", "فرنسا"],
    relatedMarketsEn: ["USA", "Germany", "Saudi Arabia", "France"],
    specifications: [
      { labelAr: "الرطوبة", labelEn: "Moisture", valueAr: "أقل من 10% لضمان حفظ الرائحة", valueEn: "Max 10% ensuring prolonged volatile retention" }
    ]
  },
  {
    id: "fp-spice-cinnamon-sticks",
    code: "SBA-FOD-SPC10",
    nameAr: "قرفة عيدان",
    nameEn: "Cinnamon Sticks",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "لحاء وتوابل دافئة",
    subCategoryEn: "Bark & Sweet Spices",
    descriptionAr: "أعواد قرفة خشبية طبيعية ملفوفة ومفرزة بأطوال متجانسة (8-10 سم) خالية من العفن والكسور لسلق اللحوم والمشروبات الساخنة.",
    descriptionEn: "Select whole rolled cinnamon quills sorted to uniform 8-10 cm lengths, whole and mold-free for hot infusions and braising.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "كراتين تصدير 10 كجم، علب شفافة 200 جم، وأكياس 500 جم",
    packagingOptionsEn: "10 kg export cartons, 200g clear cylinders, and 500g pouches",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "الأردن"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "Jordan"],
    specifications: [
      { labelAr: "طول العود", labelEn: "Stick Length", valueAr: "8 سم إلى 10 سم منتظم", valueEn: "8 cm to 10 cm uniform" }
    ]
  },
  {
    id: "fp-spice-onion-powder",
    code: "SBA-FOD-SPC11",
    nameAr: "بصل",
    nameEn: "Onion Powder",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "خضار مجفف ومطحون",
    subCategoryEn: "Dehydrated Allium Powders",
    descriptionAr: "بودرة بصل مصري ذهبي مجفف نقي 100% بنكهة سكرية حادة وقوة تركيز تعادل 10 أضعاف البصل الطازج بدون أي كتل.",
    descriptionEn: "100% pure dehydrated Egyptian golden onion powder delivering intense sweet-savory potency (1:10 fresh ratio), free-flowing without caking.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم مبطنة ببولي إيثيلين محكم، كراتين 20 كجم، أو عبوات 1 كجم",
    packagingOptionsEn: "25 kg PE-lined bags, 20 kg cartons, or 1 kg food-service pouches",
    relatedMarketsAr: ["ألمانيا", "أمريكا", "هولندا", "إسبانيا", "السعودية"],
    relatedMarketsEn: ["Germany", "USA", "Netherlands", "Spain", "Saudi Arabia"],
    specifications: [
      { labelAr: "مضاد التكتل", labelEn: "Anti-Caking", valueAr: "خالٍ من أي مواد مضافة أو كيميائية (100% بصل صافي)", valueEn: "Zero chemical anti-caking additives (100% pure allium)" }
    ]
  },
  {
    id: "fp-spice-garlic-powder",
    code: "SBA-FOD-SPC12",
    nameAr: "ثوم",
    nameEn: "Garlic Powder",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "خضار مجفف ومطحون",
    subCategoryEn: "Dehydrated Allium Powders",
    descriptionAr: "بودرة ثوم مصري بلدي نخب أول بلون عاجي طبيعي ورائحة أليسين قوية نفاذة تذوب بنعومة في الصلصات ومصنعات اللحوم.",
    descriptionEn: "Grade-A Egyptian garlic powder with natural ivory tone and potent allicin pungency, dispersing evenly in brines, rubs, and processed meats.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم محكمة الغلق، كراتين 20 كجم، وبرطمانات 120 جم",
    packagingOptionsEn: "25 kg airtight bags, 20 kg cartons, and 120g retail shakers",
    relatedMarketsAr: ["ألمانيا", "فرنسا", "أمريكا", "السعودية", "البرازيل"],
    relatedMarketsEn: ["Germany", "France", "USA", "Saudi Arabia", "Brazil"],
    specifications: [
      { labelAr: "النعومة", labelEn: "Mesh Size", valueAr: "80 - 100 مش مسحوق ناعم متجانس", valueEn: "80 - 100 Mesh fine uniform powder" }
    ]
  },
  {
    id: "fp-spice-turmeric",
    code: "SBA-FOD-SPC13",
    nameAr: "كركم",
    nameEn: "Turmeric",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "جذور وتوابل ملونة",
    subCategoryEn: "Rhizomes & Natural Colorants",
    descriptionAr: "كركم طبيعي مطحون بلون أصفر ذهبي ساطع ونسبة كوركومين مرتفعة (3-5%) لاستخدامات الطهي والمكملات الغذائية.",
    descriptionEn: "High-curcumin (3-5%) radiant golden turmeric powder offering rich earthy notes and bright coloring power for rice, curry, and wellness products.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر 25 كجم، أكياس 1 كجم، وبرطمانات 100 جم",
    packagingOptionsEn: "25 kg sacks, 1 kg pouches, and 100g spice jars",
    relatedMarketsAr: ["السعودية", "المملكة المتحدة", "الأردن", "العراق"],
    relatedMarketsEn: ["Saudi Arabia", "United Kingdom", "Jordan", "Iraq"],
    specifications: [
      { labelAr: "الكوركومين", labelEn: "Curcumin Content", valueAr: "3% إلى 5% حد أدنى", valueEn: "Min 3% to 5%" }
    ]
  },
  {
    id: "fp-spice-sumac",
    code: "SBA-FOD-SPC14",
    nameAr: "سماق",
    nameEn: "Sumac",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "توابل حمضية ومطحونة",
    subCategoryEn: "Tart Berry Spices",
    descriptionAr: "سماق بري طبيعي خشن مطحون بلون عنابي داكن ومذاق ليموني حامض أصيل، خالٍ من الصبغات الكيميائية والملح الزائد.",
    descriptionEn: "Pure crushed wild sumac berries boasting a deep burgundy color and crisp tart acidity, free from artificial colorants and salt loading.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg zip bags, 150g table jars, and 20 kg bulk bags",
    relatedMarketsAr: ["الأردن", "السعودية", "تركيا", "أمريكا", "أستراليا"],
    relatedMarketsEn: ["Jordan", "Saudi Arabia", "Turkey", "USA", "Australia"],
    specifications: [
      { labelAr: "الحموضة", labelEn: "Acidity", valueAr: "حموضة طبيعية بنكهة الليمون الطازج", valueEn: "Naturally vibrant citric-malic berry acidity" }
    ]
  },
  {
    id: "fp-spice-himalayan-salt-fine",
    code: "SBA-FOD-SPC15",
    nameAr: "ملح هيمالايا مطحون",
    nameEn: "Ground Himalayan Salt",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "أملاح معدنية طبيعية",
    subCategoryEn: "Natural Mineral Salts",
    descriptionAr: "ملح هيمالايا وردي نقي مطحون ناعم غني بأكثر من 84 معدنًا طبيعيًا، غير مكرر وخالٍ من المواد الكيميائية ومبيضات الملح.",
    descriptionEn: "Fine-ground pure pink Himalayan mountain crystal salt rich in 84+ essential trace minerals, unrefined and unbleached.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "ملاحات 200 جم، أكياس كرافت 1 كجم، وشكائر 25 كجم",
    packagingOptionsEn: "200g shakers, 1 kg standup craft pouches, and 25 kg food-grade sacks",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "ألمانيا"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "Germany"],
    specifications: [
      { labelAr: "النقاء", labelEn: "Mineral Purity", valueAr: "100% ملح صخري طبيعي غير مكرر", valueEn: "100% unrefined natural pink crystal salt" }
    ]
  },
  {
    id: "fp-spice-himalayan-salt-coarse",
    code: "SBA-FOD-SPC16",
    nameAr: "ملح هيمالايا حصى",
    nameEn: "Coarse Himalayan Salt",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "أملاح معدنية طبيعية",
    subCategoryEn: "Natural Mineral Salts",
    descriptionAr: "بلورات ملح هيمالايا وردي خشنة (2-5 مم) مخصصة لمطاحن المائدة وتتبيل اللحوم المشوية وتمليح الأسماك والأجبان.",
    descriptionEn: "Coarse pink Himalayan salt crystals (2-5mm grain size) tailored for ceramic table grinders, dry brining, and steak finishing.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "مطاحن زجاجية 200 جم، أكياس 1 كجم، وشكائر 25 كجم",
    packagingOptionsEn: "200g grinder jars, 1 kg zip bags, and 25 kg sacks",
    relatedMarketsAr: ["ألمانيا", "فرنسا", "السعودية", "أمريكا"],
    relatedMarketsEn: ["Germany", "France", "Saudi Arabia", "USA"],
    specifications: [
      { labelAr: "حجم الحبيبات", labelEn: "Grain Caliber", valueAr: "2 مم إلى 5 مم بلورات صلبة شفافة", valueEn: "2 mm to 5 mm solid translucent crystals" }
    ]
  },
  {
    id: "fp-spice-bay-leaves",
    code: "SBA-FOD-SPC17",
    nameAr: "ورق لوري / لوري مطحون",
    nameEn: "Bay Leaves / Ground Bay Leaf",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "أوراق عطرية وتوابل سلق",
    subCategoryEn: "Aromatic Whole Leaves & Powders",
    descriptionAr: "أوراق غار (لوري) كاملة خضراء مجففة مختارة بعناية بدون تكسير، ومسحوق لوري ناعم لإكساب الشوربات والصلصات نكهة عطرية دافئة.",
    descriptionEn: "Hand-picked whole dried green laurel (bay) leaves unbroken, alongside micro-ground bay leaf powder for stocks and marinades.",
    image: "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "كراتين 10 كجم (أوراق كاملة)، أكياس 1 كجم مطحون، وعبوات تجزئة 50 جم",
    packagingOptionsEn: "10 kg carton boxes (whole leaves), 1 kg ground bags, and 50g retail canisters",
    relatedMarketsAr: ["السعودية", "الأردن", "إيطاليا", "فرنسا", "العراق"],
    relatedMarketsEn: ["Saudi Arabia", "Jordan", "Italy", "France", "Iraq"],
    specifications: [
      { labelAr: "نسبة الأوراق الكاملة", labelEn: "Whole Leaf Ratio", valueAr: "لا تقل عن 95% أوراق سليمة غير مكسرة", valueEn: "Min 95% unbroken intact leaves" }
    ]
  },
  {
    id: "fp-spice-thyme",
    code: "SBA-FOD-SPC18",
    nameAr: "زعتر",
    nameEn: "Thyme / Oregano",
    mainCategoryKey: "essential-spices",
    mainCategoryAr: "التوابل الأساسية",
    mainCategoryEn: "Essential Spices & Seasonings",
    subCategoryAr: "أعشاب عطرية مجففة",
    subCategoryEn: "Dried Culinary Herbs",
    descriptionAr: "أوراق زعتر بري مصري نخب أول مجفف ومفرز بعناية، غني بمادة الثيمول الطبيعية التي تمنحه رائحة ونكهة دافئة قوية للبيتزا والمخبوزات واللحوم.",
    descriptionEn: "Prime Egyptian wild thyme leaves rubbed and sorted, rich in natural thymol providing intense herbaceous notes to Italian pizza and roasts.",
    image: "/BG/Natural & Agri-Food Products/Herbs & Natural Plants.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "شكائر كرافت 15 كجم، أكياس 500 جم و1 كجم، وبرطمانات 80 جم",
    packagingOptionsEn: "15 kg multi-wall craft sacks, 1 kg bags, and 80g spice jars",
    relatedMarketsAr: ["إيطاليا", "إسبانيا", "السعودية", "أمريكا", "ألمانيا"],
    relatedMarketsEn: ["Italy", "Spain", "Saudi Arabia", "USA", "Germany"],
    specifications: [
      { labelAr: "الزيوت الأساسية", labelEn: "Thymol Index", valueAr: "نسبة ثيمول وزيوت طيارة مرتفعة مفحوصة معمليًا", valueEn: "Certified high thymol content and volatile herb oil" }
    ]
  },

  // ==========================================================================
  // 5. التوابل والخلطات الآسيوية (ASIAN SPICES & BLENDS) — 4 Products
  // ==========================================================================
  {
    id: "fp-asian-cajun",
    code: "SBA-FOD-ASN01",
    nameAr: "كيجن Cajun",
    nameEn: "Cajun Seasoning",
    mainCategoryKey: "asian-spices",
    mainCategoryAr: "التوابل والخلطات الآسيوية",
    mainCategoryEn: "Asian Spices & Blends",
    subCategoryAr: "خلطات عالمية وحارة",
    subCategoryEn: "Global Spicy Blends",
    descriptionAr: "تتبيلة الكيجن لويزيانا الحارة الشهيرة بتوليفة البابريكا والثوم والبصل والأوريجانو والفلفل الأسود الحار للروبيان والمأكولات البحرية والدجاج المقلي.",
    descriptionEn: "Authentic spicy Louisiana Cajun seasoning combining paprika, garlic, onion, oregano, and cayenne for seafood boils, shrimp, and poultry.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 20 كجم لمصانع الأغذية وسلاسل المطاعم",
    packagingOptionsEn: "1 kg pouches, 150g shakers, and 20 kg sacks for food chains and processors",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "المملكة المتحدة"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "United Kingdom"],
    specifications: [
      { labelAr: "التطبيق الأمثل", labelEn: "Best Pairings", valueAr: "أكياس الجمبري والمأكولات البحرية والبطاطس الودجز", valueEn: "Seafood boils, crispy shrimp, and seasoned potato wedges" }
    ]
  },
  {
    id: "fp-asian-tandoori",
    code: "SBA-FOD-ASN02",
    nameAr: "تتبيلة تندوري دجاج",
    nameEn: "Tandoori Chicken Seasoning",
    mainCategoryKey: "asian-spices",
    mainCategoryAr: "التوابل والخلطات الآسيوية",
    mainCategoryEn: "Asian Spices & Blends",
    subCategoryAr: "تتبيلات آسيوية متخصصة",
    subCategoryEn: "Asian Regional Rubs",
    descriptionAr: "بهار التندوري الهندي الأصيل بلونه الأحمر الياقوتي المميز ونكهة الزنجبيل والثوم والكمون والكزبرة وجوزة الطيب لدجاج التندوري والتيككا.",
    descriptionEn: "Vibrant ruby-red Indian Tandoori dry rub rich in ginger, garlic, toasted cumin, and fenugreek for authentic Tandoori tikka and skewers.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg zip pouches, 150g table jars, and 20 kg sacks",
    relatedMarketsAr: ["المملكة المتحدة", "السعودية", "الإمارات", "البحرين"],
    relatedMarketsEn: ["United Kingdom", "Saudi Arabia", "UAE", "Bahrain"],
    specifications: [
      { labelAr: "اللون", labelEn: "Coloring", valueAr: "لون أحمر تندوري طبيعي مستخلص من البابريكا والشمندر", valueEn: "Natural red hue derived from high-ASTA paprika and beetroot" }
    ]
  },
  {
    id: "fp-asian-masala",
    code: "SBA-FOD-ASN03",
    nameAr: "ماسالا Masala",
    nameEn: "Garam Masala Blend",
    mainCategoryKey: "asian-spices",
    mainCategoryAr: "التوابل والخلطات الآسيوية",
    mainCategoryEn: "Asian Spices & Blends",
    subCategoryAr: "تتبيلات آسيوية متخصصة",
    subCategoryEn: "Asian Regional Rubs",
    descriptionAr: "توليفة الجرام ماسالا الهندية التقليدية المحمصة من الهيل الأسود والكزبرة والكمون والقرفة والقرنفل والصولجان للأطباق الهندية واليخنات.",
    descriptionEn: "Warming Indian Garam Masala featuring roasted black cardamom, whole mace, coriander, cloves, and cinnamon for rich curry curations.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 120 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg barrier bags, 120g jars, and 25 kg industrial sacks",
    relatedMarketsAr: ["المملكة المتحدة", "السعودية", "جنوب أفريقيا", "الإمارات"],
    relatedMarketsEn: ["United Kingdom", "Saudi Arabia", "South Africa", "UAE"],
    specifications: [
      { labelAr: "الدفء العطري", labelEn: "Aromatic Balance", valueAr: "توازن عطري محمص خفيف الحرارة وغني بالروائح الدافئة", valueEn: "Aromatic sweet-savory warmth without overpowering heat" }
    ]
  },
  {
    id: "fp-asian-curry",
    code: "SBA-FOD-ASN04",
    nameAr: "كاري Curry",
    nameEn: "Curry Powder",
    mainCategoryKey: "asian-spices",
    mainCategoryAr: "التوابل والخلطات الآسيوية",
    mainCategoryEn: "Asian Spices & Blends",
    subCategoryAr: "تتبيلات آسيوية متخصصة",
    subCategoryEn: "Asian Regional Rubs",
    descriptionAr: "بودرة الكاري الأصفر الإنجلو-هندي المتوازنة بالكركم والكمون والكزبرة والحلبة والزنجبيل والشطة المعتدلة لإعداد أطباق الكاري والشوربات والصلصات.",
    descriptionEn: "Classic Madras-style golden curry powder formulated with turmeric, fenugreek, cumin, coriander, and gentle ginger-chili warmth.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، علب صفيح 250 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg pouches, 250g litho tins, and 25 kg sacks",
    relatedMarketsAr: ["المملكة المتحدة", "ألمانيا", "السعودية", "فرنسا", "نيجيريا"],
    relatedMarketsEn: ["United Kingdom", "Germany", "Saudi Arabia", "France", "Nigeria"],
    specifications: [
      { labelAr: "الكركمين واللون", labelEn: "Golden Hue", valueAr: "لون أصفر ذهبي ساطع يعتمد على الكركم الطبيعي عالي النقاوة", valueEn: "Radiant yellow hue derived from grade-A high-curcumin roots" }
    ]
  },

  // ==========================================================================
  // 6. تتبيلات اللحوم والدجاج (MEAT & POULTRY SEASONINGS) — 9 Products
  // ==========================================================================
  {
    id: "fp-meat-greek-souvlaki",
    code: "SBA-FOD-MEA01",
    nameAr: "مشاوي يوناني",
    nameEn: "Greek Souvlaki / Grill Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الشواء والمشاوي",
    subCategoryEn: "BBQ & Grill Rubs",
    descriptionAr: "تتبيلة المشاوي المتوسطية واليونانية بالأوريجانو والزعتر البري والثوم المجفف وقشور الليمون والفلفل الأبيض لقطع لحم الضأن وشيش الدجاج.",
    descriptionEn: "Mediterranean Greek souvlaki grill blend loaded with wild oregano, rosemary, sun-dried lemon peel, and roasted garlic for lamb and poultry skewers.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg bags, 150g shaker jars, and 20 kg bulk packs",
    relatedMarketsAr: ["اليونان", "إيطاليا", "المملكة المتحدة", "السعودية"],
    relatedMarketsEn: ["Greece", "Italy", "United Kingdom", "Saudi Arabia"],
    specifications: [
      { labelAr: "الأعشاب المستخدمة", labelEn: "Herbal Base", valueAr: "أوريجانو وزعتر مصري مجفف شمسيًا فائق العطرية", valueEn: "Sun-cured aromatic Mediterranean oregano and wild thyme" }
    ]
  },
  {
    id: "fp-meat-bbq-grill",
    code: "SBA-FOD-MEA02",
    nameAr: "بهار مشاوي",
    nameEn: "BBQ & Grill Spice",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الشواء والمشاوي",
    subCategoryEn: "BBQ & Grill Rubs",
    descriptionAr: "بهار شواء متكامل للمشاوي على الفحم والشوايات الكهربائية بنكهة تدخين متوازنة مع البابريكا والكزبرة والفلفل الأسود والثوم المعتق.",
    descriptionEn: "All-purpose master BBQ & charcoal grill seasoning balancing natural smoked paprika, cracked pepper, garlic, and savory sea salt.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، عبوات 250 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg pouches, 250g canisters, and 25 kg industrial sacks",
    relatedMarketsAr: ["السعودية", "الكويت", "الأردن", "العراق", "تركيا"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Jordan", "Iraq", "Turkey"],
    specifications: [
      { labelAr: "التغطية والكرملة", labelEn: "Crust Formation", valueAr: "يساعد على تشكيل قشرة كراميل مشوية ومقرمشة على سطح اللحم", valueEn: "Promotes deep mahogany crust and savory bark on grilled proteins" }
    ]
  },
  {
    id: "fp-meat-beef-spice",
    code: "SBA-FOD-MEA03",
    nameAr: "بهار لحم",
    nameEn: "Meat Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات اللحوم المتخصصة",
    subCategoryEn: "Red Meat Blends",
    descriptionAr: "توليفة بهارات لحم كلاسيكية ناعمة تضم جوزة الطيب والهيل والقرفة والكبابة الصيني والقرنفل لإزالة أي روائح غير محببة وإبراز طراوة اللحم.",
    descriptionEn: "Classical red meat seasoning harmonizing allspice (cubeb), nutmeg, cardamom, cinnamon, and cloves to enrich beef roasts and braises.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 120 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg vacuum pouches, 120g jars, and 25 kg export bags",
    relatedMarketsAr: ["السعودية", "الإمارات", "الأردن", "ليبيا"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Jordan", "Libya"],
    specifications: [
      { labelAr: "الكبابة الصيني", labelEn: "Allspice Note", valueAr: "كبابة صيني نخب أول بنسبة مدروسة لتعميق النكهة", valueEn: "Select Jamaican allspice providing warm peppery-clove undertones" }
    ]
  },
  {
    id: "fp-meat-chicken-spice",
    code: "SBA-FOD-MEA04",
    nameAr: "بهار دجاج",
    nameEn: "Chicken Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الدواجن المتخصصة",
    subCategoryEn: "Poultry Blends",
    descriptionAr: "بهار دجاج شامل يجمع بين الزنجبيل والثوم والبصل والكزبرة والزعتر وقليل من الكركم لمنح الدجاج المحمر والمشوي لونًا ذهبيًا وطعمًا لذيذًا.",
    descriptionEn: "Complete poultry dry rub featuring garlic, dried ginger, onion, thyme, and golden turmeric for succulent roasted or fried chicken.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 120 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg pouches, 120g jars, and 25 kg bags",
    relatedMarketsAr: ["السعودية", "الكويت", "العراق", "الجزائر"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Iraq", "Algeria"],
    specifications: [
      { labelAr: "اللون على الجلد", labelEn: "Roast Hue", valueAr: "يمنح جلد الدجاج لونًا ذهبيًا لامعًا عند التحمير", valueEn: "Imparts an appetizing golden sheen upon roasting" }
    ]
  },
  {
    id: "fp-meat-arabic-spice",
    code: "SBA-FOD-MEA05",
    nameAr: "بهارات عربي",
    nameEn: "Arabic Mixed Spice / 7 Spices",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "توليفات شرقية شاملة",
    subCategoryEn: "Traditional Middle Eastern Blends",
    descriptionAr: "السبع بهارات العربية الشرقية المتوارثة (كبابة، فلفل أسود، قرفة، جوزة الطيب، كزبرة، قرنفل، هيل) المحضرة بأعلى معايير التوازن النكهي.",
    descriptionEn: "The legendary Middle Eastern Seven Spices blend balancing allspice, black pepper, Ceylon cinnamon, nutmeg, coriander, cloves, and cardamom.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 100 جم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg standup bags, 100g glass jars, and 25 kg sacks",
    relatedMarketsAr: ["السعودية", "الأردن", "الكويت", "أمريكا", "أوروبا"],
    relatedMarketsEn: ["Saudi Arabia", "Jordan", "Kuwait", "USA", "Europe"],
    specifications: [
      { labelAr: "التوازن", labelEn: "Proportions", valueAr: "نسب دقيقة تضمن عدم طغيان أي بهار على النكهة الإجمالية", valueEn: "Micro-balanced formula preventing overpowering by clove or nutmeg" }
    ]
  },
  {
    id: "fp-meat-kofta-hati",
    code: "SBA-FOD-MEA06",
    nameAr: "كفتة حاتي",
    nameEn: "Kofta Hati Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الكفتة والمفروم",
    subCategoryEn: "Minced Meat & Kofta Rubs",
    descriptionAr: "خلطة كفتة الحاتي المصرية الأصلية ببهارات الشواء الشرقية ومحسنات التماسك الطبيعية التي تمنع انكماش أو تفكك الكفتة على السيخ.",
    descriptionEn: "Authentic Egyptian Hati charcoal kofta seasoning engineered to bind minced meat firmly to skewers while infusing mouthwatering grilled aromatics.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، عبوات 250 جم، وشكائر 25 كجم لمصانع اللحوم والمطاعم",
    packagingOptionsEn: "1 kg food-service bags, 250g retail bags, and 25 kg bulk sacks for meat packers",
    relatedMarketsAr: ["السعودية", "الإمارات", "الكويت", "ليبيا"],
    relatedMarketsEn: ["Saudi Arabia", "UAE", "Kuwait", "Libya"],
    specifications: [
      { labelAr: "التماسك", labelEn: "Cohesion", valueAr: "تعزز تماسك أنسجة اللحم وتمنع تساقطه أثناء الشواء على الفحم", valueEn: "Enhances protein binding to prevent skewer drop during high heat" }
    ]
  },
  {
    id: "fp-meat-hawawshi",
    code: "SBA-FOD-MEA07",
    nameAr: "حواوشي",
    nameEn: "Hawawshi Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات اللحوم المفرومة التراثية",
    subCategoryEn: "Heritage Minced Meat Blends",
    descriptionAr: "تتبيلة الحواوشي المصري التراثي الغنية بالفلفل الحار والبارد والكزبرة والكبابة الصيني وجوزة الطيب لتتبيل اللحم المفروم داخل الخبز البلدي.",
    descriptionEn: "Traditional Egyptian Hawawshi spice blend balancing mild and hot chilies, coriander, allspice, and nutmeg for stuffed baked flatbread pockets.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 20 كجم",
    packagingOptionsEn: "1 kg zip pouches, 150g jars, and 20 kg bulk packs",
    relatedMarketsAr: ["الخليج العربي", "أمريكا", "أوروبا"],
    relatedMarketsEn: ["GCC Countries", "USA", "Europe"],
    specifications: [
      { labelAr: "الحرارة والتوازن", labelEn: "Zest & Spice", valueAr: "حرارة معتدلة متجانسة تبرز دهون اللحم الطبيعية", valueEn: "Zesty medium spice that cuts cleanly through natural meat fat" }
    ]
  },
  {
    id: "fp-meat-shawarma",
    code: "SBA-FOD-MEA08",
    nameAr: "شاورما",
    nameEn: "Shawarma Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الشاورما المتخصصة",
    subCategoryEn: "Shawarma Rotisserie Marinades",
    descriptionAr: "بهارات شاورما لحم ودجاج سورية ومصرية كلاسيكية بالهيل والقرنفل والقرفة والبابريكا والثوم والليمون المجفف لأسياخ الشاورما والمقالي.",
    descriptionEn: "Master rotisserie Shawarma dry marinade combining green cardamom, cloves, cinnamon, sweet paprika, and sun-dried lemon for succulent meat layers.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 25 كجم لسلاسل المطاعم",
    packagingOptionsEn: "1 kg food-service bags, 150g jars, and 25 kg sacks for restaurant chains",
    relatedMarketsAr: ["السعودية", "ألمانيا", "المملكة المتحدة", "الإمارات", "الأردن"],
    relatedMarketsEn: ["Saudi Arabia", "Germany", "United Kingdom", "UAE", "Jordan"],
    specifications: [
      { labelAr: "التغلغل", labelEn: "Penetration", valueAr: "تغلغل سريع في أنسجة اللحم خلال ساعتين من النقع", valueEn: "Fast-absorbing tenderizing formulation ready in under 2 hours" }
    ]
  },
  {
    id: "fp-meat-broasted",
    code: "SBA-FOD-MEA09",
    nameAr: "توابل بروستد",
    nameEn: "Broasted / Crispy Fried Chicken Seasoning",
    mainCategoryKey: "meat-poultry-seasonings",
    mainCategoryAr: "تتبيلات اللحوم والدجاج",
    mainCategoryEn: "Meat & Poultry Seasonings",
    subCategoryAr: "تتبيلات الدجاج المقلي والمقرمش",
    subCategoryEn: "Crispy Coating & Marinades",
    descriptionAr: "خلطة بهارات البروستد والدجاج المقرمش (نقع + تغليف بقسماط) بنكهة الفلفل الأبيض والثوم والأعشاب السرية لمنح الدجاج قرمشة ذهبية وطراوة داخلية.",
    descriptionEn: "Complete broasted fried chicken seasoning system (brine/marinade + flour breading mix) delivering a golden crunchy crust and juicy interior.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، كراتين 10 كجم، وشكائر 25 كجم",
    packagingOptionsEn: "1 kg pouches, 10 kg boxes, and 25 kg sacks",
    relatedMarketsAr: ["السعودية", "العراق", "ليبيا", "الأردن", "الكويت"],
    relatedMarketsEn: ["Saudi Arabia", "Iraq", "Libya", "Jordan", "Kuwait"],
    specifications: [
      { labelAr: "القرمشة", labelEn: "Crunch Retention", valueAr: "تحافظ على قرمشة القشرة الخارجية لأكثر من 45 دقيقة بعد القلي", valueEn: "Maintains exterior crunch for over 45 minutes under warming lights" }
    ]
  },

  // ==========================================================================
  // 7. المتفرقات والخلطات المتخصصة (SPECIALTY BLENDS & OTHER PRODUCTS) — 7 Products
  // ==========================================================================
  {
    id: "fp-spec-tahini",
    code: "SBA-FOD-SPC19",
    nameAr: "طحينة",
    nameEn: "Pure Sesame Tahini",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "منتجات سمسمية وطحينة",
    subCategoryEn: "Artisanal Sesame Paste",
    descriptionAr: "طحينة سمسم صافية 100% معصورة من بذور السمسم الأبيض المقشور النقي على أحجار جرانيتية تقليدية، بدون أي إضافات زيتية أو دقيق.",
    descriptionEn: "100% pure stone-ground white sesame tahini paste, roasted and ground using traditional mills, 100% free of palm oil, bleaching agents, or flour.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "برطمانات زجاجية 300 جم و500 جم، صفائح معدنية 5 كجم و18 كجم، وبراميل غذائية 200 كجم",
    packagingOptionsEn: "300g/500g glass jars, 5 kg & 18 kg food tins, and 200 kg food-grade drums",
    relatedMarketsAr: ["أمريكا", "ألمانيا", "المملكة المتحدة", "السعودية", "فرنسا"],
    relatedMarketsEn: ["USA", "Germany", "United Kingdom", "Saudi Arabia", "France"],
    specifications: [
      { labelAr: "النقاء", labelEn: "Purity", valueAr: "100% سمسم طبيعي معصور بدون أي مواد مضافة", valueEn: "100% pure sesame seed paste, zero additives" },
      { labelAr: "البروتين", labelEn: "Protein", valueAr: "أعلى من 24% بروتين نباتي طبيعي", valueEn: "Min 24% natural plant protein" }
    ]
  },
  {
    id: "fp-spec-italian-blend",
    code: "SBA-FOD-SPC20",
    nameAr: "خلطة إيطالي",
    nameEn: "Italian Herb Blend",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "أعشاب طهي وتتبيلات أوروبية",
    subCategoryEn: "Mediterranean Culinary Herbs",
    descriptionAr: "توليفة الأعشاب الإيطالية الكلاسيكية من الريحان والروزماري والأوريجانو والزعتر والمردقوش والثوم لإعداد صلصات المكرونة والبيتزا والفطائر.",
    descriptionEn: "Classic Tuscan Italian herb seasoning featuring sweet basil, wild oregano, rosemary, thyme, marjoram, and garlic flakes for marinara and pizza.",
    image: "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 500 جم و1 كجم، برطمانات 80 جم، وشكائر 15 كجم",
    packagingOptionsEn: "500g & 1 kg pouches, 80g spice jars, and 15 kg bulk cartons",
    relatedMarketsAr: ["إيطاليا", "المملكة المتحدة", "السعودية", "أمريكا"],
    relatedMarketsEn: ["Italy", "United Kingdom", "Saudi Arabia", "USA"],
    specifications: [
      { labelAr: "الريحان والأوريجانو", labelEn: "Herb Selection", valueAr: "أوراق ريحان مصري سويسي وأوريجانو عالي العطرية", valueEn: "Fragrant sweet Egyptian basil and premium rubbed oregano" }
    ]
  },
  {
    id: "fp-spec-salad-dressing",
    code: "SBA-FOD-SPC21",
    nameAr: "سلطة",
    nameEn: "Salad Dressing Seasoning",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "تتبيلات السلطات والمقبلات",
    subCategoryEn: "Salad Dressing & Zest",
    descriptionAr: "بهار السلطة الخضراء والمقبلات بالنعناع الجاف والسماق وقشور الليمون والكمون والملح الخفيف، يضاف إلى زيت الزيتون والخل لمنح السلطة نكهة منعشة.",
    descriptionEn: "Fresh Mediterranean salad seasoning blending dried spearmint, tart sumac, dried lemon zest, cumin, and light salt for vinaigrettes and mezze.",
    image: "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "برطمانات 120 جم، أكياس 1 كجم، وكراتين 15 كجم",
    packagingOptionsEn: "120g shaker jars, 1 kg zip pouches, and 15 kg cartons",
    relatedMarketsAr: ["السعودية", "الكويت", "الأردن", "الإمارات"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Jordan", "UAE"],
    specifications: [
      { labelAr: "الانتعاش", labelEn: "Zesty Profile", valueAr: "نكهة حمضية منعشة تخفف الحاجة لكميات ملح كبيرة", valueEn: "Tangy citrus-herb blend reducing dietary sodium needs" }
    ]
  },
  {
    id: "fp-spec-seafood",
    code: "SBA-FOD-SPC22",
    nameAr: "مأكولات بحرية",
    nameEn: "Seafood & Fish Seasoning",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "تتبيلات الأسماك والبحريات",
    subCategoryEn: "Fish & Seafood Rubs",
    descriptionAr: "تتبيلة الأسماك الإسكندرانية والبحريات بالكمون والشمر والثوم والكزبرة وقشور الليمون والبابريكا لمنح الأسماك المقلية والمشوية والجمبري طعمًا لا يقاوم.",
    descriptionEn: "Alexandrian coastal seafood and fish seasoning blending sweet fennel, cumin, garlic, lemon peel, and coriander for fried fish and grilled prawns.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس 1 كجم، برطمانات 150 جم، وشكائر 25 كجم لمصانع الأسماك",
    packagingOptionsEn: "1 kg pouches, 150g jars, and 25 kg bags for commercial seafood processors",
    relatedMarketsAr: ["إسبانيا", "اليونان", "السعودية", "ليبيا", "إيطاليا"],
    relatedMarketsEn: ["Spain", "Greece", "Saudi Arabia", "Libya", "Italy"],
    specifications: [
      { labelAr: "القضاء على الزفارة", labelEn: "Deodorizing", valueAr: "تأثير حمضي فعال يقضي على أي روائح زفارة في الأسماك", valueEn: "High-citric natural formula neutralizing fishy odors immediately" }
    ]
  },
  {
    id: "fp-spec-noodles",
    code: "SBA-FOD-SPC23",
    nameAr: "نودلز",
    nameEn: "Noodle Seasoning Blend",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "بهارات الأغذية الفورية",
    subCategoryEn: "Instant Food Seasonings",
    descriptionAr: "بهار النودلز الفوري الآسيوي المتوازن بمستخلصات الخضار وفول الصويا والزنجبيل والثوم والفلفل لإعطاء أطباق المكرونة والنودلز طعمًا سريعًا ولذيذًا.",
    descriptionEn: "Savory instant noodle seasoning blend featuring soy sauce powder, allium notes, ginger, and mild pepper for ramen, noodles, and stir-fries.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "أكياس ساشيهات صغيرة، أكياس 1 كجم، وشكائر 20 كجم لمصانع النودلز",
    packagingOptionsEn: "Single-serving sachets, 1 kg food-service bags, and 20 kg bulk packs for noodle factories",
    relatedMarketsAr: ["السعودية", "مصر", "الجزائر", "نيجيريا"],
    relatedMarketsEn: ["Saudi Arabia", "Egypt", "Algeria", "Nigeria"],
    specifications: [
      { labelAr: "الذوبان في المرق", labelEn: "Broth Dissolution", valueAr: "ذوبان فوري في الماء المغلي لمنح مرقة نودلز غنية", valueEn: "Instant dissolution in boiling water yielding clear rich broth" }
    ]
  },
  {
    id: "fp-spec-dried-lumi",
    code: "SBA-FOD-SPC24",
    nameAr: "لومي",
    nameEn: "Dried Black Lime / Lumi",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "حمضيات وتوابل مجففة",
    subCategoryEn: "Dried Citrus & Whole Spices",
    descriptionAr: "ليمون أسود مجفف شمسيًا كامل ومطحون ذو نكهة حمضية مدخنة مميزة، يعتبر أساسيًا في الكبسة واليخنات والمأكولات الخليجية والعراقية.",
    descriptionEn: "Whole and crushed sun-dried black limes (lumi / loomi) providing an irreplaceable tangy, fermented smoky sourness to Gulf and Iraqi stews.",
    image: "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "كراتين 10 كجم (حبوب كاملة)، أكياس 1 كجم مطحون، وعبوات 150 جم",
    packagingOptionsEn: "10 kg cartons (whole black limes), 1 kg ground bags, and 150g retail packs",
    relatedMarketsAr: ["السعودية", "الكويت", "العراق", "عُمان", "الإمارات"],
    relatedMarketsEn: ["Saudi Arabia", "Kuwait", "Iraq", "Oman", "UAE"],
    specifications: [
      { labelAr: "طريقة التجفيف", labelEn: "Drying Method", valueAr: "تجفيف شمسي طبيعي 100% بدون أي مواد كبريتية", valueEn: "100% natural sun-cured, zero sulfur treatment" }
    ]
  },
  {
    id: "fp-spec-garlic-vinegar-daqqa",
    code: "SBA-FOD-SPC25",
    nameAr: "دقة الثوم بالخل",
    nameEn: "Garlic & Vinegar Daqqa",
    mainCategoryKey: "specialty-blends",
    mainCategoryAr: "المتفرقات والخلطات المتخصصة",
    mainCategoryEn: "Specialty Blends & Other Products",
    subCategoryAr: "تتبيلات ومطيبات سائلة وجافة",
    subCategoryEn: "Heritage Condiment Blends",
    descriptionAr: "التوليفة التراثية الشهيرة لدقة الكشري والمشاوي المصرية بالثوم المفروم والخل الطبيعي والكمون وعصير الليمون والكزبرة بنكهة شهية وحموضة متوازنة.",
    descriptionEn: "The quintessential Egyptian condiment blend of minced garlic, natural white vinegar, ground cumin, lemon, and coriander for Koshari, seafood, and grills.",
    image: "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    originAr: "جمهورية مصر العربية",
    originEn: "Egypt",
    originFlag: "🇪🇬",
    availability: "In Stock",
    availabilityAr: "متاح للتوريد الفوري",
    packagingOptionsAr: "زجاجات 250 مل و500 مل، جراكن 5 لتر، أو مسحوق تتبيلة جاف في أكياس 1 كجم",
    packagingOptionsEn: "250ml & 500ml glass bottles, 5L food-service jerricans, or 1 kg dry mix pouches",
    relatedMarketsAr: ["الخليج العربي", "أمريكا", "أوروبا", "كندا"],
    relatedMarketsEn: ["GCC Countries", "USA", "Europe", "Canada"],
    specifications: [
      { labelAr: "الحموضة والتوازن", labelEn: "Acidity & Punch", valueAr: "توازن مدروس بين لاذعية الثوم النفاذة وانتعاش الخل والليمون", valueEn: "Sharp garlic punch softened with balanced aged vinegar and lemon" }
    ]
  }
];

// Helper to convert CentralFoodProductItem to PhysicalProduct schema used in /products
export function getCentralFoodPhysicalProducts() {
  return CENTRAL_FOOD_PRODUCTS.map((p) => ({
    id: p.id,
    code: p.code,
    sector: "food" as const,
    categoryKey: p.mainCategoryKey,
    categoryKeys: [p.mainCategoryKey],
    categoryEn: p.mainCategoryEn,
    categoryAr: p.mainCategoryAr,
    mainDepartmentEn: "Natural & Food Products",
    mainDepartmentAr: "المنتجات الطبيعية والغذائية",
    nameEn: p.nameEn,
    nameAr: p.nameAr,
    taglineEn: p.subCategoryEn + " — " + p.packagingOptionsEn,
    taglineAr: p.subCategoryAr + " — " + p.packagingOptionsAr,
    descriptionEn: p.descriptionEn,
    descriptionAr: p.descriptionAr,
    image: p.image,
    originEn: p.originEn,
    originAr: p.originAr,
    originFlag: p.originFlag,
    moqEn: "Commercial Orders / Flexible MOQ",
    moqAr: "طلبات تجارية / حد أدنى مرن",
    packagingEn: p.packagingOptionsEn,
    packagingAr: p.packagingOptionsAr,
    specifications: p.specifications
  }));
}

// Helper to convert CentralFoodProductItem to DetailedFoodProduct schema used in /sectors/food
export function getCentralFoodSectorDetailedProducts() {
  return CENTRAL_FOOD_PRODUCTS.map((p) => ({
    id: p.id,
    category: p.mainCategoryKey as any,
    nameEn: p.nameEn,
    nameAr: p.nameAr,
    productOverviewEn: p.descriptionEn,
    productOverviewAr: p.descriptionAr,
    countryOfOriginEn: p.originEn,
    countryOfOriginAr: p.originAr,
    productSpecificationsEn: p.specifications.map((s) => `${s.labelEn}: ${s.valueEn}`),
    productSpecificationsAr: p.specifications.map((s) => `${s.labelAr}: ${s.valueAr}`),
    availableGradesEn: ["Export Grade A", "Food-Service Specification", "Custom Private Blend"],
    availableGradesAr: ["نخب أول تصدير", "مواصفات المطابخ والفنادق", "خلطات خاصة للعلامات التجارية"],
    packagingOptionsEn: [p.packagingOptionsEn],
    packagingOptionsAr: [p.packagingOptionsAr],
    storageConditionsEn: "Store in a cool, dry place away from direct sunlight",
    storageConditionsAr: "يحفظ في مكان جاف وبارد بعيدًا عن أشعة الشمس المباشرة",
    shelfLifeEn: "18 to 24 Months",
    shelfLifeAr: "من 18 إلى 24 شهرًا",
    availableQuantitiesEn: "Commercial supply upon confirmed contract",
    availableQuantitiesAr: "توريد كميات تجارية حسب التعاقد",
    qualityCertificatesEn: ["ISO 22000", "HACCP", "Halal Certified", "Phytosanitary Certificate"],
    qualityCertificatesAr: ["آيزو 22000", "هاسب للسلامة الغذائية", "شهادة حلال", "شهادة صحة نباتية"],
    minOrderQuantityEn: "Flexible MOQ for trial commercial orders",
    minOrderQuantityAr: "حد أدنى مرن للطلبات التجارية والتجريبية",
    exportDocumentationEn: ["Certificate of Origin", "Bill of Lading", "Commercial Invoice & Packing List", "Certificate of Analysis (COA)"],
    exportDocumentationAr: ["شهادة المنشأ", "بوليصة الشحن", "الفاتورة وبيان العبوة", "شهادة التحليل المخبري (COA)"],
    image: p.image,
    featured: false
  }));
}
