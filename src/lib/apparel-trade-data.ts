// Official Trade Data for Apparel & Textile Sector
// Sami Bin Ayyad Group — Global Apparel & Textile Opportunities

export interface ApparelMarket {
  code: string;
  nameAr: string;
  nameEn: string;
  region: 'arab_north_africa' | 'africa' | 'europe' | 'other';
  regionNameAr: string;
  regionNameEn: string;
  flag: string;
  lat: number;
  lng: number;
  isSubTerritory?: boolean;
  parentCountryNoteAr?: string;
  parentCountryNoteEn?: string;
  productsOfInterestAr: string[];
  productsOfInterestEn: string[];
  clientTypesAr: string[];
  clientTypesEn: string[];
  inquiryNatureAr: string;
  inquiryNatureEn: string;
  manufacturingModels: string[];
  supplyTerms: string[];
  marketNotesAr: string;
  marketNotesEn: string;
}

export interface ApparelProductCategory {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  items: {
    key: string;
    nameAr: string;
    nameEn: string;
    specsAr: string;
    specsEn: string;
  }[];
}

export interface ApparelManufacturingRequirement {
  id: string;
  titleAr: string;
  titleEn: string;
  scopeAr: string;
  scopeEn: string;
  targetClientsAr: string;
  targetClientsEn: string;
  models: string[];
  deliverablesAr: string[];
  deliverablesEn: string[];
}

export interface ApparelInquiryRecord {
  id: string;
  marketCode: string;
  countryAr: string;
  countryEn: string;
  countryFlag: string;
  isSubTerritory?: boolean;
  territoryNoteAr?: string;
  territoryNoteEn?: string;
  date: string;
  clientTypeAr: string;
  clientTypeEn: string;
  requestTypeAr: string;
  requestTypeEn: string;
  productCategoryAr: string;
  productCategoryEn: string;
  productDescriptionAr: string;
  productDescriptionEn: string;
  quantityRequestedAr: string;
  quantityRequestedEn: string;
  skuCount?: string;
  materialsAndColorsAr?: string;
  materialsAndColorsEn?: string;
  manufacturingModel: string;
  targetPrice?: string;
  packagingTermsAr: string;
  packagingTermsEn: string;
  shippingTerms: string;
  shippingMethodAr: string;
  shippingMethodEn: string;
  destinationPort?: string;
  inquiryStatusAr: string;
  inquiryStatusEn: string;
  sourceChannelAr: string;
  sourceChannelEn: string;
}

export const APPAREL_TRADE_STATS = {
  marketsCount: 20,
  communicationsCount: 1500,
  communicationsDisplay: "+1,500",
  factoriesCount: 150,
  factoriesDisplay: "+150",
  requestTypesCount: 3,
};

export const APPAREL_MARKETS: ApparelMarket[] = [
  // 1. Arab & North Africa (11 destinations)
  {
    code: "SAU",
    nameAr: "المملكة العربية السعودية",
    nameEn: "Saudi Arabia",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇸🇦",
    lat: 23.8859,
    lng: 45.0792,
    productsOfInterestAr: ["ملابس محتشمة وعبايات", "ملابس منزلية وبيجامات قطن", "أطقم كاجوال حريمي"],
    productsOfInterestEn: ["Modest Wear & Abayas", "Cotton Homewear & Loungewear", "Women's Casual Sets"],
    clientTypesAr: ["علامات تجارية ناشئة", "مكاتب جملة وتوزيع", "متاجر تجزئة إلكترونية"],
    clientTypesEn: ["Emerging Fashion Brands", "Wholesale Distributors", "E-commerce Retailers"],
    inquiryNatureAr: "تصنيع مجموعات موسمية خاصة والاختيار من الموديلات الجاهزة مع وسم العلامة الخاصة",
    inquiryNatureEn: "Bespoke seasonal collections and curated portfolio selection with private labeling",
    manufacturingModels: ["OEM", "Private Label", "FOB"],
    supplyTerms: ["FOB الإسكندرية", "شحن جوي سريع", "شحن بحري إلى جدة/الدمام"],
    marketNotesAr: "اهتمام مرتفع بالخامات القطنية المصرية الفاخرة وتشطيبات الخياطة العالية.",
    marketNotesEn: "High demand for premium Egyptian cotton and high-standard garment finishing."
  },
  {
    code: "LBY",
    nameAr: "ليبيا",
    nameEn: "Libya",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇱🇾",
    lat: 26.3351,
    lng: 17.2283,
    productsOfInterestAr: ["ملابس أطفال كاجوال ورضع", "ملابس نسائية كاجوال", "ملابس أساسية"],
    productsOfInterestEn: ["Kids Casualwear & Babywear", "Women's Casualwear", "Basic Apparel"],
    clientTypesAr: ["تجار جملة", "موزعون محليون", "سلاسل محلات ملابس"],
    clientTypesEn: ["Wholesale Merchants", "Regional Distributors", "Retail Store Chains"],
    inquiryNatureAr: "طلبات توريد تجارية سريعة من محفظة الموديلات المعتمدة بأسعار تنافسية",
    inquiryNatureEn: "Volume commercial orders selected from curated styles with competitive turnarounds",
    manufacturingModels: ["FOB", "CM", "Private Label"],
    supplyTerms: ["شحن بري سريع", "شحن بحري إلى طرابلس/بنغازي", "EXW"],
    marketNotesAr: "طلب مستمر على ملابس الأطفال والملابس الصيفية والشتوية القطنية.",
    marketNotesEn: "Consistent demand for kids' knitwear, seasonal cotton apparel, and basics."
  },
  {
    code: "TUN",
    nameAr: "تونس",
    nameEn: "Tunisia",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇹🇳",
    lat: 33.8869,
    lng: 9.5375,
    productsOfInterestAr: ["ملابس نسائية داخلية وهوم وير", "تي شيرت وبولو قطني", "ملابس أطفال"],
    productsOfInterestEn: ["Women's Underwear & Homewear", "Cotton T-Shirts & Polos", "Kidswear"],
    clientTypesAr: ["علامات ملابس", "مكاتب استيراد وتوزيع"],
    clientTypesEn: ["Apparel Brands", "Import & Distribution Desks"],
    inquiryNatureAr: "استفسارات تصنيع تعاقدي وبرامج إنتاج للملابس الجاهزة",
    inquiryNatureEn: "Contract manufacturing inquiries and batch production programs",
    manufacturingModels: ["CM", "OEM", "FOB"],
    supplyTerms: ["FOB الإسكندرية", "شحن بحري إلى ميناء رادس"],
    marketNotesAr: "التركيز على دقة المقاسات ومعايير ثبات الألوان واختبارات الأقمشة.",
    marketNotesEn: "Focus on precise measurement grading, color fastness, and textile certifications."
  },
  {
    code: "DZA",
    nameAr: "الجزائر",
    nameEn: "Algeria",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇩🇿",
    lat: 28.0339,
    lng: 1.6596,
    productsOfInterestAr: ["ملابس أطفال صيفية وشتوية", "ملابس نسائية كاجوال وسواريه", "بيجامات"],
    productsOfInterestEn: ["Seasonal Kidswear", "Women's Casual & Evening Wear", "Pajamas & Loungewear"],
    clientTypesAr: ["مكاتب استيراد ملابس", "تجار جملة رئيسيون"],
    clientTypesEn: ["Garment Importers", "Major Wholesale Stockists"],
    inquiryNatureAr: "تنسيق كميات تصنيع موسمي من محفظة الموديلات مع إمكانية تعديل الخامات",
    inquiryNatureEn: "Seasonal volume manufacturing from collections with fabric adaptations",
    manufacturingModels: ["FOB", "OEM", "Private Label"],
    supplyTerms: ["FOB موانئ مصر", "شحن بحري إلى ميناء الجزائر/وهران"],
    marketNotesAr: "اهتمام ملحوظ بالأطقم القطنية الكاملة وتصاميم الأطفال العملية.",
    marketNotesEn: "Distinct preference for full cotton sets and practical children's designs."
  },
  {
    code: "MRT",
    nameAr: "موريتانيا",
    nameEn: "Mauritania",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇲🇷",
    lat: 21.0079,
    lng: -10.9408,
    productsOfInterestAr: ["ملابس قطنية خفيفة", "ملابس أطفال", "ملابس منزلية نسائية"],
    productsOfInterestEn: ["Lightweight Cotton Garments", "Kidswear", "Women's Homewear"],
    clientTypesAr: ["وسطاء تجاريون", "مستوردو سلع النسيج"],
    clientTypesEn: ["Trade Intermediaries", "Textile & Apparel Importers"],
    inquiryNatureAr: "استفسارات أولية لفرص التوريد المباشر والشحن المجمع",
    inquiryNatureEn: "Preliminary sourcing inquiries for direct supply and consolidated shipments",
    manufacturingModels: ["FOB", "Private Label"],
    supplyTerms: ["FOB الإسكندرية", "شحن بحري إلى نواكشوط"],
    marketNotesAr: "ملاءمة الملابس للمناخ الحار وطلب الأقمشة القطنية المريحة.",
    marketNotesEn: "Suitability for hot climates with an emphasis on breathable cotton weaves."
  },
  {
    code: "MAR",
    nameAr: "المغرب",
    nameEn: "Morocco",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇲🇦",
    lat: 31.7917,
    lng: -7.0926,
    productsOfInterestAr: ["ملابس كاجوال ورياضية", "ملابس حريمي عصرية", "تي شيرت وسويت شيرت"],
    productsOfInterestEn: ["Casualwear & Activewear", "Modern Women's Fashion", "T-Shirts & Sweatshirts"],
    clientTypesAr: ["علامات ملابس ناشئة", "مكاتب وكالات تجارية"],
    clientTypesEn: ["Emerging Apparel Labels", "Commercial Brand Agencies"],
    inquiryNatureAr: "تطوير عينات وإنتاج تشكيلات خاصة للبيع بالتجزئة والتجارة الإلكترونية",
    inquiryNatureEn: "Sample prototyping and custom collections for retail and online channels",
    manufacturingModels: ["OEM", "CM", "Private Label"],
    supplyTerms: ["FOB الإسكندرية", "شحن بحري إلى ميناء طنجة/الدار البيضاء"],
    marketNotesAr: "اهتمام باتجاهات الموضة السريعة والجودة العالية للملابس القطنية.",
    marketNotesEn: "Strong affinity for fast fashion trends combined with durable cotton quality."
  },
  {
    code: "JOR",
    nameAr: "الأردن",
    nameEn: "Jordan",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇯🇴",
    lat: 30.5852,
    lng: 36.2384,
    productsOfInterestAr: ["ملابس أطفال", "ملابس أساسية تي شيرت وبولو", "ملابس نسائية كاجوال"],
    productsOfInterestEn: ["Children's Apparel", "Basic Knits (T-Shirts & Polos)", "Women's Casual"],
    clientTypesAr: ["سلاسل تجزئة", "موزعو ملابس معتمدون"],
    clientTypesEn: ["Retail Chains", "Authorized Garment Distributors"],
    inquiryNatureAr: "برامج توريد سنوية وتعاقدات كميات للمواسم الدراسية والأعياد",
    inquiryNatureEn: "Annual supply programs and volume contracts for back-to-school and festive seasons",
    manufacturingModels: ["OEM", "FOB", "Private Label"],
    supplyTerms: ["شحن بري سريع (نويبع/العقبة)", "FOB موانئ مصر"],
    marketNotesAr: "سهولة النقل اللوجستي البري والبحري عبر خطوط النقل المباشرة.",
    marketNotesEn: "Efficient logistics via direct land and ferry freight links."
  },
  {
    code: "OMN",
    nameAr: "سلطنة عُمان",
    nameEn: "Oman",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇴🇲",
    lat: 21.5126,
    lng: 55.9233,
    productsOfInterestAr: ["ملابس نسائية محتشمة ومنزلية", "ملابس أطفال قطنية", "بولو وتي شيرت قطن 100%"],
    productsOfInterestEn: ["Modest Women's Wear & Homewear", "Cotton Kidswear", "100% Cotton Polos & Tees"],
    clientTypesAr: ["متاجر وموزعون محليون", "مشاريع تجارية ناشئة"],
    clientTypesEn: ["Local Retailers & Distributors", "Emerging Apparel Startups"],
    inquiryNatureAr: "استفسارات لتوريد تشكيلات ذات خامات قطنية راقية بتطريزات وطباعة خاصة",
    inquiryNatureEn: "Inquiries for premium cotton collections featuring custom embroidery and branding",
    manufacturingModels: ["OEM", "Private Label"],
    supplyTerms: ["شحن جوي سريع", "شحن بحري إلى ميناء صحار/صلالة"],
    marketNotesAr: "طلب متنامٍ على المنتجات القطنية الصيفية ذات التهوية العالية.",
    marketNotesEn: "Growing interest in breathable summer cotton collections."
  },
  {
    code: "PSE",
    nameAr: "فلسطين",
    nameEn: "Palestine",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇵🇸",
    lat: 31.9522,
    lng: 35.2332,
    productsOfInterestAr: ["ملابس أطفال شاملة", "ملابس نسائية يومية ومنزلية", "ملابس قطنية أساسية"],
    productsOfInterestEn: ["Comprehensive Kidswear", "Everyday & Home Women's Wear", "Basic Cotton Knits"],
    clientTypesAr: ["تجار جملة وموزعون", "محلات تجارية"],
    clientTypesEn: ["Wholesalers & Distributors", "Commercial Retail Outlets"],
    inquiryNatureAr: "طلبات استيراد منتظمة للملابس القطنية المصرية بمختلف الفئات",
    inquiryNatureEn: "Regular import requests for diverse categories of Egyptian cotton apparel",
    manufacturingModels: ["FOB", "Private Label"],
    supplyTerms: ["تنسيق الشحن التجاري المعتمد", "EXW / FOB"],
    marketNotesAr: "ثقة راسخة في جودة ومتانة المنسوجات والملابس المصنعة في مصر.",
    marketNotesEn: "Established consumer confidence in the durability of Egyptian garments."
  },
  {
    code: "IRQ",
    nameAr: "العراق",
    nameEn: "Iraq",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇮🇶",
    lat: 33.2232,
    lng: 43.6793,
    productsOfInterestAr: ["ملابس نسائية كاجوال وسواريه", "ملابس أطفال", "ملابس رياضية وبولو"],
    productsOfInterestEn: ["Women's Casual & Evening Wear", "Kidswear", "Activewear & Polos"],
    clientTypesAr: ["مكاتب استيراد الجملة", "مجمعات تجارية كبرى"],
    clientTypesEn: ["Wholesale Import Offices", "Major Shopping Malls & Retailers"],
    inquiryNatureAr: "عقود توريد كميات واختيار تشكيلات موسمية من الموديلات الجاهزة",
    inquiryNatureEn: "Bulk supply contracts and seasonal collection-based production",
    manufacturingModels: ["OEM", "FOB", "Private Label"],
    supplyTerms: ["شحن بحري إلى ميناء أم قصر", "شحن جوي سريع إلى بغداد"],
    marketNotesAr: "سوق كبير ذو قدرة استيعابية عالية للطلبات المجمعة وتنوع المقاسات.",
    marketNotesEn: "Extensive market capacity for consolidated shipments and wide size runs."
  },
  {
    code: "IRQ-KRD",
    nameAr: "إقليم كردستان العراق",
    nameEn: "Iraqi Kurdistan Region",
    region: "arab_north_africa",
    regionNameAr: "الأسواق العربية وشمال أفريقيا",
    regionNameEn: "Arab & North Africa",
    flag: "🇮🇶",
    lat: 36.1911,
    lng: 44.0092,
    isSubTerritory: true,
    parentCountryNoteAr: "إقليم كردستان العراق ضمن جمهورية العراق (وليس دولة مستقلة)",
    parentCountryNoteEn: "Iraqi Kurdistan Region within the Republic of Iraq (not an independent state)",
    productsOfInterestAr: ["ملابس شتوية وسويت شيرت", "ملابس أطفال موسمية", "ملابس نسائية كاجوال"],
    productsOfInterestEn: ["Winter Apparel & Sweatshirts", "Seasonal Kidswear", "Women's Casualwear"],
    clientTypesAr: ["مستوردو أربيل والسليمانية", "سلاسل بيع التجزئة"],
    clientTypesEn: ["Erbil & Sulaymaniyah Importers", "Apparel Retail Chains"],
    inquiryNatureAr: "استفسارات لتوريد الملابس الشتوية والملابس القطنية عالية الكثافة",
    inquiryNatureEn: "Inquiries for high-density winter knitwear and outerwear",
    manufacturingModels: ["FOB", "Private Label"],
    supplyTerms: ["شحن جوي إلى أربيل", "شحن بري/بحري منسق"],
    marketNotesAr: "اهتمام خاص بالملابس الشتوية والجاكيتات والسويت شيرت المبطن نظرًا لطبيعة المناخ.",
    marketNotesEn: "Specific focus on heavyweight fleece, winter jackets, and lined hoodies due to local climate."
  },

  // 2. African Markets (4 destinations)
  {
    code: "NGA",
    nameAr: "نيجيريا",
    nameEn: "Nigeria",
    region: "africa",
    regionNameAr: "الأسواق الأفريقية",
    regionNameEn: "African Markets",
    flag: "🇳🇬",
    lat: 9.0820,
    lng: 8.6753,
    productsOfInterestAr: ["تي شيرت وبولو قطني سادة ومطبوع", "ملابس أطفال كاجوال", "ملابس نسائية قطنية"],
    productsOfInterestEn: ["Plain & Graphic Cotton Tees/Polos", "Kids Casualwear", "Women's Cotton Apparel"],
    clientTypesAr: ["شركات استيراد جملة", "علامات تجارية محلية في لاغوس"],
    clientTypesEn: ["Wholesale Import Houses", "Domestic Fashion Brands in Lagos"],
    inquiryNatureAr: "استفسارات لتصنيع وتوريد كميات كبرى من التي شيرت والملابس الأساسية",
    inquiryNatureEn: "Volume manufacturing inquiries for basic knits, t-shirts, and everyday apparel",
    manufacturingModels: ["FOB", "OEM", "Private Label"],
    supplyTerms: ["FOB الإسكندرية / بورسعيد", "شحن بحري إلى ميناء لاغوس (أبابا)"],
    marketNotesAr: "سوق ضخم يتطلب كفاءة تسعير في الكميات الكبيرة وحلول تغليف مدمجة.",
    marketNotesEn: "Vast market demanding cost-efficient volume pricing and compact container packing."
  },
  {
    code: "RWA",
    nameAr: "رواندا",
    nameEn: "Rwanda",
    region: "africa",
    regionNameAr: "الأسواق الأفريقية",
    regionNameEn: "African Markets",
    flag: "🇷🇼",
    lat: -1.9403,
    lng: 29.8739,
    productsOfInterestAr: ["أزياء رسمية وملابس عمل", "ملابس نسائية جاهزة", "ملابس أطفال"],
    productsOfInterestEn: ["Uniforms & Workwear", "Women's Ready-to-Wear", "Children's Clothing"],
    clientTypesAr: ["مؤسسات تجارية", "موزعون محليون في كيغالي"],
    clientTypesEn: ["Commercial Entities", "Local Apparel Distributors in Kigali"],
    inquiryNatureAr: "فرص تصنيع مخصص لتوريدات المؤسسات والمتاجر المتخصصة",
    inquiryNatureEn: "Custom manufacturing for corporate apparel and specialized retail supply",
    manufacturingModels: ["OEM", "CM"],
    supplyTerms: ["شحن جوي سريع", "شحن بحري متعدد الوسائط عبر مومباسا/دار السلام"],
    marketNotesAr: "تركيز حكومي وتجاري متزايد على معايير الجودة والملابس الصديقة للبيئة.",
    marketNotesEn: "Increasing commercial focus on standardized quality and sustainable manufacturing."
  },
  {
    code: "ZAF",
    nameAr: "جنوب أفريقيا",
    nameEn: "South Africa",
    region: "africa",
    regionNameAr: "الأسواق الأفريقية",
    regionNameEn: "African Markets",
    flag: "🇿🇦",
    lat: -30.5595,
    lng: 22.9375,
    productsOfInterestAr: ["ملابس رياضية وأكتيف وير", "هودي وسويت شيرت فليس", "ملابس أطفال قطنية"],
    productsOfInterestEn: ["Sportswear & Activewear", "Hoodies & Fleece Tops", "Cotton Children's Wear"],
    clientTypesAr: ["علامات ملابس رياضية", "سلاسل تجزئة ومكاتب توريد"],
    clientTypesEn: ["Activewear Labels", "Retail Chains & Sourcing Desks"],
    inquiryNatureAr: "تصنيع تعاقدي بمواصفات تقنية عالية لخامات الفليس والقطن المخلوط",
    inquiryNatureEn: "Contract manufacturing with technical specs for blended fleece and performance knits",
    manufacturingModels: ["OEM", "FOB", "Private Label"],
    supplyTerms: ["FOB موانئ مصر", "شحن بحري إلى كيب تاون / ديربان"],
    marketNotesAr: "معايير تدقيق صارمة على جودة الحياكة والمواصفات الفنية للنسيج.",
    marketNotesEn: "Strict auditing requirements regarding seam strength and technical fabric testing."
  },
  {
    code: "TZA",
    nameAr: "تنزانيا",
    nameEn: "Tanzania",
    region: "africa",
    regionNameAr: "الأسواق الأفريقية",
    regionNameEn: "African Markets",
    flag: "🇹🇿",
    lat: -6.3690,
    lng: 34.8888,
    productsOfInterestAr: ["ملابس أطفال", "تي شيرت وملابس قطنية أساسية", "ملابس منزلية نسائية"],
    productsOfInterestEn: ["Kidswear", "T-Shirts & Basic Apparel", "Women's Homewear"],
    clientTypesAr: ["تجار استيراد ملابس", "موزعون إقليميون في دار السلام"],
    clientTypesEn: ["Garment Importers", "Regional Distributors in Dar es Salaam"],
    inquiryNatureAr: "استفسارات تجارية للتعاقد على توريد كميات حاويات مجزأة ومجمعة",
    inquiryNatureEn: "Trade inquiries for LCL and FCL supply of assorted garment lines",
    manufacturingModels: ["FOB", "Private Label"],
    supplyTerms: ["FOB الإسكندرية", "شحن بحري إلى ميناء دار السلام"],
    marketNotesAr: "مركز إعادة تصدير إقليمي لدول شرق ووسط أفريقيا الحبيسة.",
    marketNotesEn: "Regional redistribution gateway serving inland East and Central African markets."
  },

  // 3. European Markets (4 destinations)
  {
    code: "ESP",
    nameAr: "إسبانيا",
    nameEn: "Spain",
    region: "europe",
    regionNameAr: "الأسواق الأوروبية",
    regionNameEn: "European Markets",
    flag: "🇪🇸",
    lat: 40.4637,
    lng: -3.7492,
    productsOfInterestAr: ["ملابس نسائية كاجوال صيفية", "ملابس أطفال قطنية عضوية", "بولو وتي شيرت قطني"],
    productsOfInterestEn: ["Summer Women's Casualwear", "Organic Cotton Kidswear", "Cotton Polos & Tees"],
    clientTypesAr: ["علامات أزياء أوروبية ناشئة", "مكاتب توريد تجزئة في برشلونة ومدريد"],
    clientTypesEn: ["Emerging European Fashion Brands", "Sourcing Offices in Barcelona & Madrid"],
    inquiryNatureAr: "تصنيع تعاقدي خاص (OEM) بتصاميم ومواصفات وتعبئة مستدامة مخصصة للعلامة",
    inquiryNatureEn: "Custom OEM manufacturing with client-designed tech packs and sustainable packaging",
    manufacturingModels: ["OEM", "Private Label", "FOB", "CM"],
    supplyTerms: ["FOB الإسكندرية / دمياط", "شحن بحري سريع إلى ميناء فالنسيا/برشلونة (4-6 أيام)"],
    marketNotesAr: "ميزة القرب الجغرافي وسرعة الشحن البحري عبر البحر الأبيض المتوسط مع الالتزام بمعايير REACH.",
    marketNotesEn: "Proximity advantage via short-sea Mediterranean shipping (4-6 days) complying with REACH."
  },
  {
    code: "FRA",
    nameAr: "فرنسا",
    nameEn: "France",
    region: "europe",
    regionNameAr: "الأسواق الأوروبية",
    regionNameEn: "European Markets",
    flag: "🇫🇷",
    lat: 46.2276,
    lng: 2.2137,
    productsOfInterestAr: ["ملابس رضع وأطفال فاخرة", "تي شيرت وبولو قطن مصري ممتاز", "ملابس منزلية قطنية راقية"],
    productsOfInterestEn: ["Premium Babywear & Kidswear", "Luxury Egyptian Cotton Polos & Tees", "High-End Cotton Loungewear"],
    clientTypesAr: ["بيوت أزياء ومصممون مستقلون", "علامات تجارية مستدامة"],
    clientTypesEn: ["Boutique Fashion Houses & Designers", "Sustainable Garment Brands"],
    inquiryNatureAr: "تطوير عينات تفصيلية وتشغيل مجموعات محدودة بمواصفات جودة أوروبية فائقة",
    inquiryNatureEn: "Detailed tech-pack sampling and small-to-medium luxury batches meeting European standards",
    manufacturingModels: ["OEM", "CM", "Private Label"],
    supplyTerms: ["FOB الإسكندرية", "شحن جوي سريع إلى باريس", "شحن بحري إلى ميناء مرسيليا"],
    marketNotesAr: "طلب كبير على شهادات أصالة القطن المصري وتوثيق ظروف العمل الأخلاقية بالمصانع.",
    marketNotesEn: "High emphasis on Egyptian cotton certification and ethical factory compliance."
  },
  {
    code: "ITA",
    nameAr: "إيطاليا",
    nameEn: "Italy",
    region: "europe",
    regionNameAr: "الأسواق الأوروبية",
    regionNameEn: "European Markets",
    flag: "🇮🇹",
    lat: 41.8719,
    lng: 12.5674,
    productsOfInterestAr: ["منسوجات وأزياء عمل صناعية", "مستلزمات مستشفيات وفنادق", "ملابس أطفال قطنية OEM"],
    productsOfInterestEn: ["Industrial Workwear & Uniforms", "Hospital & Hotel Textile Supplies", "Cotton Baby Bibs & OEM Apparel"],
    clientTypesAr: ["شركات ومجموعات صناعية كبرى (مثل Haier Europe)", "مجموعات طبية ومستشفيات (مثل Fontebasso Group)"],
    clientTypesEn: ["Major Industrial Groups (e.g. Haier Europe)", "Hospitality & Healthcare Consortia (e.g. Fontebasso Group)"],
    inquiryNatureAr: "عقود توريد وتصنيع صناعية ورسمية سارية ومستمرة بمواصفات تقنية دقيقة",
    inquiryNatureEn: "Active, verified commercial supply and manufacturing contracts with stringent technical specs",
    manufacturingModels: ["Contract Manufacturing", "OEM", "FOB", "Private Label"],
    supplyTerms: ["FOB موانئ مصر", "شحن بحري إلى جنوى/ترييستي", "CIF موانئ إيطاليا"],
    marketNotesAr: "علاقات تجارية مؤسسية موثقة ومعتمدة رسميًا لدى المجموعة منذ 2026.",
    marketNotesEn: "Documented institutional corporate partnerships officially verified since 2026."
  },
  {
    code: "TUR",
    nameAr: "تركيا",
    nameEn: "Turkey",
    region: "europe",
    regionNameAr: "الأسواق الأوروبية",
    regionNameEn: "European Markets",
    flag: "🇹🇷",
    lat: 38.9637,
    lng: 35.2433,
    productsOfInterestAr: ["غزول وأقمشة خام ومجهزة", "تي شيرت أساسي للتجهيز والطباعة", "ملابس أطفال"],
    productsOfInterestEn: ["Yarns & Fabric Blanks", "Basic T-Shirts for Printing/Finishing", "Kidswear"],
    clientTypesAr: ["مصانع ومكاتب تجهيز ملابس في إسطنبول وإزمير", "تجار أقمشة دوليون"],
    clientTypesEn: ["Apparel Converters in Istanbul & Izmir", "International Textile Traders"],
    inquiryNatureAr: "استفسارات تصنيع مشترك وتوريد للملابس نصف المصنعة والخامات القطنية",
    inquiryNatureEn: "Co-manufacturing inquiries and blank apparel supplies for local finishing and re-export",
    manufacturingModels: ["CM", "FOB", "OEM"],
    supplyTerms: ["FOB بورسعيد / دمياط", "شحن بحري مباشر إلى مرسين/إسطنبول (2-3 أيام)"],
    marketNotesAr: "تكامل صناعي وتجاري سريع بفضل خطوط الملاحة المباشرة عبر البحر المتوسط.",
    marketNotesEn: "Rapid industrial integration leveraging direct maritime routes across the Mediterranean."
  },

  // 4. Other Markets (1 destination)
  {
    code: "ISR-TLV",
    nameAr: "تل أبيب",
    nameEn: "Tel Aviv",
    region: "other",
    regionNameAr: "وجهات أخرى",
    regionNameEn: "Other Destinations",
    flag: "🌐",
    lat: 32.0853,
    lng: 34.7818,
    isSubTerritory: true,
    parentCountryNoteAr: "مدينة ووجهة تجارية ضمن السوق الإسرائيلي (وليس دولة مستقلة)",
    parentCountryNoteEn: "Commercial destination within the Israeli market (not an independent state)",
    productsOfInterestAr: ["ملابس كاجوال خفيفة", "تي شيرت وملابس أساسية قطنية", "ملابس أطفال"],
    productsOfInterestEn: ["Lightweight Casualwear", "Cotton Basic T-Shirts", "Children's Clothing"],
    clientTypesAr: ["وسطاء تجاريون", "مستوردو ملابس بالتجزئة"],
    clientTypesEn: ["Trade Intermediaries", "Retail Garment Importers"],
    inquiryNatureAr: "استفسارات تجارية أولية لدراسة أسعار وتوريد الملابس القطنية الجاهزة",
    inquiryNatureEn: "Preliminary commercial inquiries regarding pricing and supply feasibility for ready garments",
    manufacturingModels: ["FOB", "Private Label"],
    supplyTerms: ["شحن بري/بحري معتمد وفق الإجراءات المنظمة", "FOB"],
    marketNotesAr: "تواصل تجاري مسجل خاضع للتدقيق وإجراءات التحقق النظامية المعمول بها.",
    marketNotesEn: "Recorded commercial communication subject to ongoing regulatory and compliance verification."
  }
];

export const APPAREL_CATEGORIES: ApparelProductCategory[] = [
  {
    id: "womenswear",
    nameAr: "الملابس الحريمي",
    nameEn: "Women's Wear",
    descriptionAr: "تصنيع متكامل للملابس الحريمي عبر شبكة تضم أكثر من 150 مصنعًا متخصصًا في مصر.",
    descriptionEn: "Comprehensive women's apparel manufacturing coordinated across 150+ specialized partner factories in Egypt.",
    items: [
      { key: "casualwear", nameAr: "Casualwear (ملابس كاجوال يومية)", nameEn: "Casualwear", specsAr: "بلوزات، توبات، فساتين كاجوال، بناطيل وتنانير قطنية وخامات مخلوطة", specsEn: "Blouses, tops, casual dresses, trousers, and skirts in cotton and blends." },
      { key: "formalwear", nameAr: "Formalwear (ملابس رسمية وكلاسيكية)", nameEn: "Formalwear", specsAr: "بليزرات، بناطيل قماشية، تاييرات، وقمصان رسمية بقصات دقيقة", specsEn: "Blazers, tailored trousers, suits, and formal shirts with precise tailoring." },
      { key: "eveningwear", nameAr: "Eveningwear (فساتين وسواريه)", nameEn: "Eveningwear", specsAr: "فساتين سهرة وأزياء مناسبات بأقمشة شيفون، ساتان، وتطريزات متخصصة", specsEn: "Occasion and evening gowns crafted in chiffon, satin, and delicate embroidery." },
      { key: "sportswear", nameAr: "Sportswear (ملابس رياضية وأكتيف وير)", nameEn: "Sportswear", specsAr: "ليجنز، توبات رياضية، بدلات تدريب بأقمشة مطاطية طاردة للرطوبة", specsEn: "Leggings, sports tops, and athletic tracksuits with moisture-wicking stretch." },
      { key: "homewear", nameAr: "Homewear (ملابس منزلية وبيجامات)", nameEn: "Homewear", specsAr: "أطقم بيجامات قطنية ناعمة، أرواب، وملابس منزلية مريحة لجميع الفصول", specsEn: "Soft cotton pajama sets, robes, and comfortable year-round home garments." },
      { key: "loungewear", nameAr: "Loungewear (ملابس استرخاء مريحة)", nameEn: "Loungewear", specsAr: "أطقم استرخاء فضفاضة، هوديز كاجوال وبناطيل سويت بانتس قطنية", specsEn: "Relaxed lounge sets, casual hoodies, and comfortable cotton sweatpants." },
      { key: "underwear", nameAr: "Underwear (ملابس داخلية قطنية)", nameEn: "Underwear", specsAr: "ملابس داخلية قطنية 100% عالية النعومة مع مطاط مرن ومقاوم للغسيل", specsEn: "100% fine cotton underwear featuring durable elastic and gentle touch." },
      { key: "modestwear", nameAr: "Modest Wear (أزياء محتشمة وعبايات)", nameEn: "Modest Wear", specsAr: "عبايات، فساتين واسعة، وكارديجانات بتصاميم عصرية وأقمشة راقية", specsEn: "Abayas, maxi dresses, and modern cardigans in refined flowing textiles." }
    ]
  },
  {
    id: "kidswear",
    nameAr: "ملابس الأطفال",
    nameEn: "Kidswear",
    descriptionAr: "خطوط إنتاج مخصصة لمراحل الرضع والأطفال بأعلى معايير الأمان وسلامة الأقمشة الحساسة.",
    descriptionEn: "Dedicated production lines for infant and children's apparel prioritizing sensitive skin safety and durability.",
    items: [
      { key: "babywear", nameAr: "Babywear (ملابس رضع وحديثي ولادة)", nameEn: "Babywear", specsAr: "سالوبيتات، بودي سوت، ومريلات أطفال قطنية 100% خالية من المواد الكيميائية الضارة", specsEn: "Sleepsuits, bodysuits, and baby bibs crafted in 100% OEKO-TEX compliant pure cotton." },
      { key: "kids_casual", nameAr: "Kids Casualwear (ملابس كاجوال للأطفال)", nameEn: "Kids Casualwear", specsAr: "تي شيرتات، شورتات، فساتين وبناطيل جينز خفيفة مريحة للحركة اليومية", specsEn: "Tees, shorts, playful dresses, and flexible lightweight pants built for daily movement." },
      { key: "kids_sport", nameAr: "Kids Sportswear (ملابس رياضية للأطفال)", nameEn: "Kids Sportswear", specsAr: "ترنجات وبدلات رياضية للأندية والمدارس بألوان ثابتة ومقاومة للاهتراء", specsEn: "School and club tracksuits offering high wash durability and color retention." },
      { key: "kids_home", nameAr: "Kids Homewear (ملابس منزلية وبيجامات أطفال)", nameEn: "Kids Homewear", specsAr: "بيجامات قطنية لطيفة بطبعات آمنة ومريحة للنوم والاسترخاء", specsEn: "Cozy cotton sleepwear featuring non-toxic, skin-friendly water-based prints." },
      { key: "seasonal_kids", nameAr: "Seasonal Kidswear (ملابس موسمية للأطفال)", nameEn: "Seasonal Kidswear", specsAr: "جاكيتات وسويت شيرتات شتوية مبطنة، وأطقم صيفية قطنية خفيفة", specsEn: "Insulated winter outerwear, hooded sweatshirts, and breezy summer cotton sets." }
    ]
  },
  {
    id: "specialized",
    nameAr: "المنتجات والتصنيفات المتخصصة",
    nameEn: "Specialized Apparel",
    descriptionAr: "تصنيفات ومنتجات قياسية جاهزة للإنتاج السريع والتخصيص التام للعلامات التجارية.",
    descriptionEn: "Standardized apparel constructions engineered for rapid scaling and comprehensive brand customization.",
    items: [
      { key: "tshirt_ss", nameAr: "T-Shirt SS (تي شيرت نصف كم)", nameEn: "T-Shirt SS", specsAr: "تي شيرت ياقة دائرية أو V، قطن سنجل جيرسي 160-200 جم/م² سادة أو مطبوع", specsEn: "Short sleeve crewneck or V-neck, single jersey 160-200 GSM in solid or printed finish." },
      { key: "polo_ss", nameAr: "Polo SS (بولو نصف كم)", nameEn: "Polo SS", specsAr: "بولو بيكيه قطن أو قطن مخلوط 200-240 جم/م² بياقة مضلعة وأزرار لؤلؤية", specsEn: "Short sleeve polo in cotton piqué 200-240 GSM with flat-knit collar and durable placket." },
      { key: "polo_ls", nameAr: "Polo LS (بولو كم طويل)", nameEn: "Polo LS", specsAr: "بولو بأكمام طويلة مع أساور مضلعة للمواسم الانتقالية والشتوية", specsEn: "Long sleeve piqué polo with ribbed cuffs suited for transitional and corporate use." },
      { key: "shirt_ls", nameAr: "Shirt LS (قميص كاجوال ورسمي كم طويل)", nameEn: "Shirt LS", specsAr: "قمصان أكسفورد وبوبلين قطنية بقصات كلاسيكية أو ضيقة (Slim Fit)", specsEn: "Oxford and poplin long sleeve shirts in tailored classical and contemporary cuts." },
      { key: "sweatshirt_fz", nameAr: "Sweatshirt FZ (سويت شيرت سحاب كامل)", nameEn: "Sweatshirt FZ", specsAr: "سويت شيرت فليس أو ميلتون بسحاب معدني/بلاستيكي كامل وجيوب كنغر", specsEn: "Full-zip fleece sweatshirt featuring reinforced heavy-duty zippers and split pouch pockets." },
      { key: "fleece_fz", nameAr: "Fleece FZ (فليس حراري بسحاب كامل)", nameEn: "Fleece FZ", specsAr: "سترات فليس بولار حرارية عازلة للاستخدام الخارجي وأزياء العمل الميداني", specsEn: "Polar thermal fleece jackets offering superior warmth for outdoor and industrial workwear." },
      { key: "basic_apparel", nameAr: "Basic Apparel (ملابس أساسية)", nameEn: "Basic Apparel", specsAr: "قطع ملابس قطنية سادة مجهزة لإعادة الطباعة والتطريز والوسم السريع", specsEn: "Essential solid blanks optimized for screen printing, direct-to-garment, and fast relabeling." },
      { key: "custom_collections", nameAr: "Customized Apparel Collections (تشكيلات موسمية مخصصة)", nameEn: "Customized Apparel Collections", specsAr: "تطوير خطوط إنتاج كاملة وفق كتيب الهوية والمواصفات الخاص بالعميل", specsEn: "End-to-end bespoke fashion collection execution per client's detailed brand tech pack." }
    ]
  }
];

export const APPAREL_REQUIREMENT_TRACKS: ApparelManufacturingRequirement[] = [
  {
    id: "custom-oem",
    titleAr: "طلبات التصنيع المخصصة (Custom Manufacturing)",
    titleEn: "Custom Manufacturing Requests (OEM)",
    scopeAr: "مخصصة للعلامات التجارية الناشئة والقائمة الراغبة في تصنيع منتجات بتصميمات ومواصفات خاصة ومقاسات وجداول مقاسات محددة بدقة.",
    scopeEn: "Dedicated to emerging and established fashion brands requiring production strictly against bespoke tech packs, grade rules, and proprietary specs.",
    targetClientsAr: "علامات الأزياء، المصممون المستقلون، وسلاسل المتاجر الكبرى",
    targetClientsEn: "Fashion Labels, Independent Designers, and Department Retailers",
    models: ["OEM", "Cut & Make (CM)", "Full Package (FOB)"],
    deliverablesAr: [
      "دراسة ملف التصميم والتكلفة الأولية (Tech Pack Analysis)",
      "تطوير العينات الأولية واعتماد المقاسات (Proto & Fit Samples)",
      "اختيار واعتماد الأقمشة والصبغات والإكسسوارات (Lab Dips & Trims)",
      "تصنيع العينات المعتمدة قبل بدء الإنتاج (Pre-Production Samples)",
      "الإنتاج الكمي وفق جدول زمني متفق عليه (Bulk Production)",
      "التعبئة الخاصة ووسم العلامة التجارية (Custom Labeling & Packaging)"
    ],
    deliverablesEn: [
      "Tech pack evaluation and preliminary costing",
      "Proto and fit sample creation and approval cycles",
      "Fabric testing, lab dips, and trim sourcing",
      "Pre-production (PP) golden sample clearance",
      "Bulk production under rigorous line inspection",
      "Custom brand tagging, barcode labeling, and export packaging"
    ]
  },
  {
    id: "collection-selection",
    titleAr: "طلبات التصنيع من محفظة الموديلات (Collection-Based)",
    titleEn: "Collection-Based Manufacturing Requests",
    scopeAr: "مخصصة للمشترين وتجار الجملة الراغبين في اختيار موديلات جاهزة ومثبتة من محفظة المجموعة، مع إمكانية تعديل الألوان والخامات وإضافة وسم العلامة الخاصة.",
    scopeEn: "Tailored for buyers and stockists wishing to select proven silhouettes from our curated portfolio with custom colorways, fabrics, and private branding.",
    targetClientsAr: "مكاتب الجملة، المتاجر الإلكترونية، والموزعون الإقليميون",
    targetClientsEn: "Wholesale Houses, E-Commerce Brands, and Regional Stockists",
    models: ["Private Label", "FOB", "Quick Response"],
    deliverablesAr: [
      "استعراض كتالوج الموديلات الجاهزة المصنفة",
      "تحديد الموديلات المختارة وتوزيع المقاسات والألوان",
      "إضافة العلامة التجارية الخاصة والباركود (Private Labeling)",
      "إنتاج كمي بحد أدنى مرن للطلب (Flexible MOQ)",
      "شحن سريع ومباشر وفق شروط التسليم المختارة"
    ],
    deliverablesEn: [
      "Access to cataloged ready-to-produce designs",
      "Selection of style codes, size matrices, and seasonal shades",
      "Private label neck-tags, care labels, and hangtags attachment",
      "Flexible minimum order quantities (MOQs)",
      "Expedited manufacturing and direct port dispatch"
    ]
  },
  {
    id: "contract-manufacturing",
    titleAr: "عقود وبرامج التصنيع السنوية (Contract Manufacturing)",
    titleEn: "Contract Manufacturing Orders & Programs",
    scopeAr: "اتفاقيات تصنيع وتوريد منتظمة وبرامج إنتاج سنوية مجدولة لمجموعات تجارية أو مؤسسية كبرى وفق معايير فنية وشروط تجارية تعاقدية ملزمة.",
    scopeEn: "Structured, recurring manufacturing frameworks and scheduled annual production allocations for major corporate or institutional buyers.",
    targetClientsAr: "المؤسسات الصناعية، المجموعات الطبية والفندقية، والمشترون الدوليون",
    targetClientsEn: "Industrial Corporations, Healthcare Groups, and Global Buying Desks",
    models: ["Contract Manufacturing", "FOB", "OEM", "Annual Framework Agreements"],
    deliverablesAr: [
      "تخصيص خطوط إنتاج وطاقات تشغيلية مخصصة بالمصانع الشريكة",
      "إدارة سلاسل الإمداد وتأمين الخامات وفق كراسات الشروط والمواصفات",
      "اختبارات معملية دورية للتحقق من مطابقة معايير السلامة والأداء",
      "جدولة الشحنات الدورية (أسبوعية / شهرية / ربع سنوية)",
      "تقارير تدقيق الجودة والمطابقة المعتمدة قبل الشحن"
    ],
    deliverablesEn: [
      "Dedicated factory line reservations and committed capacities",
      "Raw material supply chain resilience and specification compliance",
      "Routine laboratory tests for safety, colorfastness, and tensile strength",
      "Scheduled milestone shipments (weekly, monthly, or quarterly FCLs)",
      "Accredited pre-shipment quality and inspection reports"
    ]
  }
];

export const APPAREL_VERIFIED_PARTNERS = [
  {
    companyName: 'Haier Europe',
    countryAr: 'إيطاليا',
    countryEn: 'Italy',
    countryFlag: '🇮🇹',
    sectorAr: 'المنسوجات والملابس الصناعية المتخصصة والتجهيزات',
    sectorEn: 'Apparel, Technical Textiles & Workwear',
    productsSuppliedAr: 'أزياء العمل المعتمدة وملابس الترويج والتشغيل الصناعي',
    productsSuppliedEn: 'Certified Industrial Workwear, Merchandising & Uniforms',
    relationshipStatus: 'Contracted Business Partner',
    relationshipStatusAr: 'شريك تجاري متعاقد رسمي',
    establishedYear: 2026,
    establishedTextAr: 'منذ عام 2026'
  },
  {
    companyName: 'Fontebasso Hospital Group',
    countryAr: 'إيطاليا',
    countryEn: 'Italy',
    countryFlag: '🇮🇹',
    sectorAr: 'مستلزمات المستشفيات والفنادق',
    sectorEn: 'Hospital & Hotel Supplies',
    productsSuppliedAr: 'مريلات ومستلزمات أطفال قطنية وتصنيع خاص OEM',
    productsSuppliedEn: 'Cotton Baby Bibs, Accessories & OEM Garments',
    relationshipStatus: 'Active Commercial Contract',
    relationshipStatusAr: 'عقد تصنيع وتوريد ساري',
    establishedYear: 2026,
    establishedTextAr: 'منذ 2026'
  }
];

export const APPAREL_EGYPTIAN_NETWORK = {
  headlineAr: "شبكة شركاء تصنيع الملابس في مصر",
  headlineEn: "Egyptian Apparel Manufacturing Partners Network",
  bodyAr: "تمتلك المجموعة شبكة من الشراكات التصنيعية المحلية تضم أكثر من 150 مصنعًا متخصصًا في تصنيع الملابس داخل جمهورية مصر العربية، وتركز هذه الشبكة على تصنيع الملابس الحريمي وملابس الأطفال بمختلف تخصصاتها، بما يشمل الملابس الكاجوال والكلاسيكية والسواريه والرياضية والمنزلية والداخلية وغيرها من فئات الملابس المتخصصة.\n\nوتعزز هذه الشراكات قدرة المجموعة على تنسيق وتنفيذ طلبات التصنيع المتنوعة، وتوفير حلول إنتاج مرنة، واستيعاب متطلبات العلامات التجارية الناشئة والقائمة وفق طبيعة المنتجات والكميات والمواصفات المطلوبة.",
  bodyEn: "The Group maintains a local network of more than 150 partner factories across Egypt, specializing exclusively in women’s and children’s apparel manufacturing.\n\nThe network covers a broad range of garment categories, including casualwear, formalwear, eveningwear, sportswear, homewear, underwear, and other specialized apparel segments.\n\nThese partnerships strengthen the Group’s ability to coordinate flexible manufacturing solutions and support the production requirements of both emerging and established fashion brands.",
  subSpecialties: [
    { key: "womenswear", labelAr: "ملابس حريمي", labelEn: "Women's Wear", descAr: "خطوط خياطة متخصصة في القصات النسائية المتنوعة", descEn: "Specialized sewing lines for versatile women's silhouettes" },
    { key: "kidswear", labelAr: "ملابس أطفال", labelEn: "Kidswear", descAr: "بيئة تصنيع معتمدة ومطابقة لسلامة منتجات الأطفال", descEn: "Certified clean manufacturing compliant with children's safety" },
    { key: "casual", labelAr: "كاجوال", labelEn: "Casualwear", descAr: "ملابس يومية عصرية بأقمشة قطنية متينة وعملية", descEn: "Everyday contemporary garments crafted in resilient cottons" },
    { key: "classic", labelAr: "كلاسيك", labelEn: "Formalwear", descAr: "حياكة وتشطيبات فائقة للقطع الرسمية والمكتبية", descEn: "Tailored precision for office, formal, and classical wear" },
    { key: "evening", labelAr: "سواريه", labelEn: "Eveningwear", descAr: "تشغيل متخصص للأقمشة الرقيقة والتطريزات اليدوية والآلية", descEn: "Specialist handling of delicate evening fabrics and intricate trims" },
    { key: "sport", labelAr: "رياضي", labelEn: "Sportswear", descAr: "أقمشة مطاطية مرنة وخياطة فلات لوك للأداء العالي", descEn: "High-stretch performance textiles with flatlock stitching" },
    { key: "homewear", labelAr: "هوم وير", labelEn: "Homewear", descAr: "بيجامات وملابس منزلية فائقة النعومة لكافة المواسم", descEn: "Ultra-soft home pajamas and lounge apparel for all seasons" },
    { key: "underwear", labelAr: "اندر وير", labelEn: "Underwear", descAr: "ملابس قطنية داخلية مريحة تراعي أعلى درجات الراحة", descEn: "Fine-count cotton undergarments offering optimal comfort" }
  ]
};

export const APPAREL_BUYER_INQUIRIES: ApparelInquiryRecord[] = [
  {
    id: "REQ-APP-2025-01",
    marketCode: "SAU",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    countryFlag: "🇸🇦",
    date: "2025-01-14",
    clientTypeAr: "علامة تجارية ناشئة",
    clientTypeEn: "Emerging Fashion Brand",
    requestTypeAr: "تصنيع مخصص (OEM)",
    requestTypeEn: "Custom OEM Manufacturing",
    productCategoryAr: "ملابس حريمي — ملابس محتشمة وهوم وير",
    productCategoryEn: "Women's Wear — Modest & Homewear",
    productDescriptionAr: "مجموعة عبايات وبيجامات قطنية ناعمة (100% قطن مصري ممتاز) بتطريزات ووسم العلامة التجارية الخاصة",
    productDescriptionEn: "Collection of premium cotton abayas and soft loungewear sets (100% Egyptian cotton) with private labeling",
    quantityRequestedAr: "5,000 قطعة موزعة على 5 موديلات",
    quantityRequestedEn: "5,000 pieces across 5 models",
    skuCount: "5 SKUs (S, M, L, XL)",
    materialsAndColorsAr: "قطن مصري 100% سنجل جيرسي 180 جم، ألوان ترابية وباستيل",
    materialsAndColorsEn: "100% Egyptian single jersey 180 GSM, earth & pastel tones",
    manufacturingModel: "OEM",
    packagingTermsAr: "أكياس بولي فردية قابلة للتحلل الحيوي مع علامات تعليق كرتونية خاصة وباركود",
    packagingTermsEn: "Individual biodegradable polybags with custom hangtags and printed barcodes",
    shippingTerms: "FOB الإسكندرية",
    shippingMethodAr: "بحري إلى ميناء جدة الإسلامي",
    shippingMethodEn: "Sea freight to Jeddah Islamic Port",
    destinationPort: "Jeddah Islamic Port",
    inquiryStatusAr: "عرض سعر قُدم",
    inquiryStatusEn: "Quotation Submitted",
    sourceChannelAr: "واتساب",
    sourceChannelEn: "WhatsApp"
  },
  {
    id: "REQ-APP-2025-02",
    marketCode: "ITA",
    countryAr: "إيطاليا",
    countryEn: "Italy",
    countryFlag: "🇮🇹",
    date: "2025-02-03",
    clientTypeAr: "شركة صناعية كبرى",
    clientTypeEn: "Major Industrial Corporation",
    requestTypeAr: "عقد تصنيع وتوريد سنوي",
    requestTypeEn: "Annual Contract Manufacturing",
    productCategoryAr: "منتجات وتصنيفات متخصصة — أزياء عمل صناعية",
    productCategoryEn: "Specialized Apparel — Industrial Workwear",
    productDescriptionAr: "أزياء عمل معتمدة للتشغيل الميداني والصناعي ومآزر متينة مع جيوب متعددة وسحابات صناعية معززة",
    productDescriptionEn: "Certified industrial workwear uniforms and heavy-duty technician overalls with reinforced stitching",
    quantityRequestedAr: "12,000 طقم سنوي على دفعات ربع سنوية",
    quantityRequestedEn: "12,000 sets annually in quarterly deliveries",
    skuCount: "3 SKUs (M, L, XL, XXL, 3XL)",
    materialsAndColorsAr: "تويل قطن وبوليستر 65/35 وزن 245 جم/م² مقاوم للاحتكاك، كحلي ورمادي صناعي",
    materialsAndColorsEn: "65/35 Poly-Cotton Twill 245 GSM abrasion-resistant, Navy & Industrial Grey",
    manufacturingModel: "Contract Manufacturing",
    packagingTermsAr: "تعبئة صناعية مجمعة في كراتين خماسية الطبقات مدعمة للشحن البحري",
    packagingTermsEn: "Heavy-duty 5-ply export master cartons suitable for containerized sea transit",
    shippingTerms: "FOB موانئ مصر / CIF جنوى",
    shippingMethodAr: "شحن بحري إلى ميناء جنوى (حاوية 40 قدم)",
    shippingMethodEn: "Sea freight to Genoa Port (40ft FCL)",
    destinationPort: "Port of Genoa",
    inquiryStatusAr: "طلب مؤكد سارٍ",
    inquiryStatusEn: "Active Confirmed Order",
    sourceChannelAr: "بريد إلكتروني رسمي",
    sourceChannelEn: "Official Email"
  },
  {
    id: "REQ-APP-2025-03",
    marketCode: "LBY",
    countryAr: "ليبيا",
    countryEn: "Libya",
    countryFlag: "🇱🇾",
    date: "2025-02-18",
    clientTypeAr: "مكتب جملة وتوزيع",
    clientTypeEn: "Wholesale Distribution Office",
    requestTypeAr: "اختيار من محفظة الموديلات (Collection-Based)",
    requestTypeEn: "Collection-Based Selection",
    productCategoryAr: "ملابس أطفال — ملابس كاجوال ورضع",
    productCategoryEn: "Kidswear — Casual & Babywear",
    productDescriptionAr: "تشكيلة أطقم أطفال صيفية وسالوبيتات رضع قطنية من موديلات المجموعة الجاهزة مع وسم خاص",
    productDescriptionEn: "Assorted kids' summer sets and infant rompers selected from group collection with custom labels",
    quantityRequestedAr: "8,500 قطعة متنوعة",
    quantityRequestedEn: "8,500 assorted pieces",
    skuCount: "8 SKUs (0-24 Months & 2-8 Years)",
    materialsAndColorsAr: "قطن 100% ناعم، تشكيلة ألوان صيفية مبهجة",
    materialsAndColorsEn: "100% fine cotton, bright summer color palette",
    manufacturingModel: "Private Label",
    packagingTermsAr: "شماعة بلاستيكية لكل قطعة مع كيس شفاف وكرتونة 48 قطعة",
    packagingTermsEn: "Plastic hanger per piece with clear polybag and 48-pc carton packing",
    shippingTerms: "FOB الإسكندرية / شحن بري",
    shippingMethodAr: "شحن بري سريع ومباشر إلى طرابلس",
    shippingMethodEn: "Direct overland freight to Tripoli",
    destinationPort: "Tripoli",
    inquiryStatusAr: "قيد المراجعة والاعتماد",
    inquiryStatusEn: "Under Review & Approval",
    sourceChannelAr: "واتساب",
    sourceChannelEn: "WhatsApp"
  },
  {
    id: "REQ-APP-2025-04",
    marketCode: "ESP",
    countryAr: "إسبانيا",
    countryEn: "Spain",
    countryFlag: "🇪🇸",
    date: "2025-03-01",
    clientTypeAr: "علامة أزياء أوروبية ناشئة",
    clientTypeEn: "Emerging European Fashion Label",
    requestTypeAr: "تصنيع مخصص (OEM)",
    requestTypeEn: "Custom OEM Manufacturing",
    productCategoryAr: "ملابس حريمي — كاجوال وتوبات صيفية",
    productCategoryEn: "Women's Wear — Summer Casual & Tops",
    productDescriptionAr: "بلوزات صيفية وفساتين كاجوال قطنية منسوجة بأسلوب مستدام متوافقة مع متطلبات السوق الإسباني",
    productDescriptionEn: "Sustainably produced summer blouses and casual cotton dresses tailored to the Spanish market",
    quantityRequestedAr: "3,500 قطعة",
    quantityRequestedEn: "3,500 pieces",
    skuCount: "4 SKUs (XS, S, M, L)",
    materialsAndColorsAr: "قطن ممشوق ومخلوط بالكتان، ألوان طبيعية غير معالجة بصبغات كيميائية قاسية",
    materialsAndColorsEn: "Combed cotton and linen blends, natural unbleached and eco-dyed hues",
    manufacturingModel: "OEM",
    packagingTermsAr: "تغليف ورقي كرافت معاد تدويره مع وسم الشهادة العضوية",
    packagingTermsEn: "Recycled kraft paper packaging with eco-friendly hangtags and GOTS-aligned labels",
    shippingTerms: "FOB الإسكندرية",
    shippingMethodAr: "شحن بحري سريع إلى ميناء فالنسيا (5 أيام)",
    shippingMethodEn: "Short-sea maritime freight to Port of Valencia (5 days)",
    destinationPort: "Port of Valencia",
    inquiryStatusAr: "عينة قيد التطوير",
    inquiryStatusEn: "Sample Under Development",
    sourceChannelAr: "بريد إلكتروني رسمي",
    sourceChannelEn: "Official Email"
  },
  {
    id: "REQ-APP-2025-05",
    marketCode: "FRA",
    countryAr: "فرنسا",
    countryEn: "France",
    countryFlag: "🇫🇷",
    date: "2025-03-12",
    clientTypeAr: "بيت أزياء ومصممون مستقلون",
    clientTypeEn: "Independent Fashion Boutique",
    requestTypeAr: "تصنيع مخصص بدفعات محدودة",
    requestTypeEn: "Custom Boutique Batch Manufacturing",
    productCategoryAr: "منتجات وتصنيفات متخصصة — بولو وتي شيرت قطن مصري ممتاز",
    productCategoryEn: "Specialized Apparel — Luxury Egyptian Cotton Tees & Polos",
    productDescriptionAr: "تي شيرتات وبولو قطن مصري طويل التيلة فائق النعومة (Giza Grade) بخياطة مزدوجة دقيقة وأزرار لؤلؤية طبيعية",
    productDescriptionEn: "Long-staple Egyptian luxury cotton polos and t-shirts featuring twin-needle stitching and mother-of-pearl buttons",
    quantityRequestedAr: "2,000 قطعة عالية القيمة",
    quantityRequestedEn: "2,000 high-grade pieces",
    skuCount: "2 Styles in 4 Colorways",
    materialsAndColorsAr: "قطن جيزة مصري 100% وزن 200 جم/م² ناعم الملمس، أبيض كلاسيكي، كحلي، زيتي، وأسود فاحم",
    materialsAndColorsEn: "100% Giza-grade Egyptian cotton 200 GSM, Classic White, Navy, Olive, and Deep Black",
    manufacturingModel: "OEM",
    packagingTermsAr: "علب هدايا فاخرة منفصلة لكل قطعة وشريط قطني داخلي مخصص",
    packagingTermsEn: "Individual rigid gift box per polo with branded interior tissue wrapping",
    shippingTerms: "FOB الإسكندرية / شحن جوي",
    shippingMethodAr: "شحن جوي سريع إلى مطار باريس شارل ديغول",
    shippingMethodEn: "Express air cargo to Paris CDG Airport",
    destinationPort: "Paris CDG",
    inquiryStatusAr: "تفاوض على شروط العقد النهائي",
    inquiryStatusEn: "Contract Terms Negotiation",
    sourceChannelAr: "بريد إلكتروني",
    sourceChannelEn: "Email"
  },
  {
    id: "REQ-APP-2025-06",
    marketCode: "IRQ",
    countryAr: "العراق",
    countryEn: "Iraq",
    countryFlag: "🇮🇶",
    date: "2025-03-22",
    clientTypeAr: "مجمع تجاري وسلسلة متاجر",
    clientTypeEn: "Department Store Chain",
    requestTypeAr: "اختيار من محفظة الموديلات (Collection-Based)",
    requestTypeEn: "Collection-Based Manufacturing",
    productCategoryAr: "ملابس حريمي وأطفال — كاجوال وبيجامات",
    productCategoryEn: "Women's & Kids — Casual & Sleepwear",
    productDescriptionAr: "تشكيلات موسمية من بيجامات حريمي وأطقم أطفال صيفية ذات جودة قطنية ممتازة وتصاميم مريحة",
    productDescriptionEn: "Seasonal selection of women's sleepwear sets and kidswear in breathable Egyptian cotton knits",
    quantityRequestedAr: "10,000 قطعة مجمعة في حاوية كاملة",
    quantityRequestedEn: "10,000 pieces assembled in FCL container",
    skuCount: "12 SKUs",
    materialsAndColorsAr: "قطن 100% ومخلوط ليكرا 5%، نقوش صيفية وورود وألوان سادة",
    materialsAndColorsEn: "100% cotton with 5% lycra stretch in patterned and solid colorways",
    manufacturingModel: "Private Label",
    packagingTermsAr: "تغليف تجزئة احترافي في كراتين تصدير 60 قطعة مع كود الفرز اللوجستي",
    packagingTermsEn: "Retail-ready individual polybag with logistic sorting codes per 60-piece carton",
    shippingTerms: "FOB ميناء الإسكندرية",
    shippingMethodAr: "شحن بحري إلى ميناء أم قصر (البصرة)",
    shippingMethodEn: "Sea freight to Umm Qasr Port (Basra)",
    destinationPort: "Port of Umm Qasr",
    inquiryStatusAr: "عرض سعر قُدم",
    inquiryStatusEn: "Quotation Submitted",
    sourceChannelAr: "واتساب",
    sourceChannelEn: "WhatsApp"
  },
  {
    id: "REQ-APP-2025-07",
    marketCode: "JOR",
    countryAr: "الأردن",
    countryEn: "Jordan",
    countryFlag: "🇯🇴",
    date: "2025-04-05",
    clientTypeAr: "سلسلة محلات تجزئة",
    clientTypeEn: "Retail Apparel Chain",
    requestTypeAr: "عقد تصنيع للموسم الدراسي",
    requestTypeEn: "Back-to-School Contract Program",
    productCategoryAr: "ملابس أطفال — ملابس مدرسية وكاجوال",
    productCategoryEn: "Kidswear — Uniforms & School Knits",
    productDescriptionAr: "تي شيرت وبولو مدرسي وأطقم رياضية قطنية متينة تتحمل الغسيل المتكرر",
    productDescriptionEn: "School polos, t-shirts, and durable cotton-rich athletic sets with high wash resistance",
    quantityRequestedAr: "15,000 قطعة",
    quantityRequestedEn: "15,000 pieces",
    skuCount: "6 SKUs (Ages 4 to 16)",
    materialsAndColorsAr: "قطن وبوليستر 60/40 مقاوم للتجعد 210 جم/م²، كحلي، أبيض، وسماوي",
    materialsAndColorsEn: "60/40 Cotton-Poly crease-resistant 210 GSM, Navy, White, and Sky Blue",
    manufacturingModel: "OEM",
    packagingTermsAr: "حزم مجدولة 6 قطع لكل مقاس مع باركود تسعير جاهز",
    packagingTermsEn: "Pre-packs of 6 pieces per size with client retail price barcodes",
    shippingTerms: "FOB / شحن بري سريع",
    shippingMethodAr: "شحن بري سريع عبر نويبع / ميناء العقبة",
    shippingMethodEn: "Direct overland and ferry freight via Nuweiba to Aqaba",
    destinationPort: "Aqaba Port",
    inquiryStatusAr: "قيد المراجعة الفنية واعتماد العينات",
    inquiryStatusEn: "Technical Review & Sample Approval",
    sourceChannelAr: "واتساب",
    sourceChannelEn: "WhatsApp"
  },
  {
    id: "REQ-APP-2025-08",
    marketCode: "NGA",
    countryAr: "نيجيريا",
    countryEn: "Nigeria",
    countryFlag: "🇳🇬",
    date: "2025-04-18",
    clientTypeAr: "شركة استيراد كبرى",
    clientTypeEn: "Major Wholesale Importer",
    requestTypeAr: "تصنيع كميات تجارية (FOB)",
    requestTypeEn: "Volume Commercial Sourcing (FOB)",
    productCategoryAr: "منتجات وتصنيفات متخصصة — تي شيرت وبولو أساسي",
    productCategoryEn: "Specialized Apparel — Basic Knits & Tees",
    productDescriptionAr: "تي شيرتات قطنية سادة وبولو خفيف الوزن للاستخدام اليومي وإعادة الطباعة والتوزيع في غرب أفريقيا",
    productDescriptionEn: "Solid basic cotton t-shirts and lightweight polos for distribution and promotional re-printing",
    quantityRequestedAr: "20,000 قطعة في حاوية 20 قدم",
    quantityRequestedEn: "20,000 pieces in 20ft container",
    skuCount: "4 Core Colors (White, Black, Red, Royal Blue)",
    materialsAndColorsAr: "قطن 100% سنجل جيرسي 160 جم، تشكيلة 4 ألوان أساسية",
    materialsAndColorsEn: "100% single jersey 160 GSM, 4 fundamental primary colorways",
    manufacturingModel: "FOB",
    packagingTermsAr: "أكياس دستة (12 قطعة) في كراتين تصدير قوية ومضغوطة لزيادة حمولة الحاوية",
    packagingTermsEn: "Dozen packs (12 pcs) in dense export cartons optimized for maximum container cube load",
    shippingTerms: "FOB بورسعيد",
    shippingMethodAr: "شحن بحري إلى ميناء لاغوس (أبابا)",
    shippingMethodEn: "Sea freight to Port of Lagos (Apapa)",
    destinationPort: "Port of Lagos (Apapa)",
    inquiryStatusAr: "تم طلب تفاصيل إضافية والاعتماد المالي",
    inquiryStatusEn: "Awaiting Financial Clearance & Details",
    sourceChannelAr: "بريد إلكتروني",
    sourceChannelEn: "Email"
  },
  {
    id: "REQ-APP-2025-09",
    marketCode: "ZAF",
    countryAr: "جنوب أفريقيا",
    countryEn: "South Africa",
    countryFlag: "🇿🇦",
    date: "2025-05-02",
    clientTypeAr: "علامة ملابس رياضية",
    clientTypeEn: "Sportswear & Outdoor Brand",
    requestTypeAr: "تصنيع مخصص (OEM)",
    requestTypeEn: "Custom OEM Manufacturing",
    productCategoryAr: "منتجات وتصنيفات متخصصة — سويت شيرت وهودي فليس",
    productCategoryEn: "Specialized Apparel — Fleece Hoodies & Sweatshirts",
    productDescriptionAr: "هودي وسويت شيرت فليس حراري قطن مبطن 320 جم/م² مع رباط سميك وجيوب مبطنة وشعار مطرز",
    productDescriptionEn: "Heavyweight 320 GSM brushed fleece hoodies and sweatshirts with custom embroidery and drawcords",
    quantityRequestedAr: "4,000 قطعة",
    quantityRequestedEn: "4,000 pieces",
    skuCount: "3 SKUs (S, M, L, XL, XXL)",
    materialsAndColorsAr: "قطن/بوليستر فليس 80/20 معزول حراريًا، رمادي مبلور، أسود، وكحلي",
    materialsAndColorsEn: "80/20 Cotton-Poly thermal brushed fleece 320 GSM, Heather Grey, Black, Navy",
    manufacturingModel: "OEM",
    packagingTermsAr: "أكياس شفافة محكمة الإغلاق مع ملصق الحجم والباركود",
    packagingTermsEn: "Resealable ziplock bags with integrated size sticker and universal barcode",
    shippingTerms: "FOB الإسكندرية",
    shippingMethodAr: "شحن بحري إلى ميناء ديربان",
    shippingMethodEn: "Sea freight to Port of Durban",
    destinationPort: "Port of Durban",
    inquiryStatusAr: "عينة قيد التطوير والقياس",
    inquiryStatusEn: "Proto Sample in Fabrication",
    sourceChannelAr: "بريد إلكتروني",
    sourceChannelEn: "Email"
  }
];

export const APPAREL_DOWNLOADS = [
  {
    id: "apparel-curated-catalog",
    titleAr: "كتالوج محفظة موديلات الملابس والمنسوجات 2026",
    titleEn: "2026 Curated Apparel Collections Portfolio",
    descAr: "استعراض تصنيفي متكامل لتشكيلات الملابس الحريمي وملابس الأطفال والملابس المتخصصة الجاهزة للتصنيع والوسم التجاري.",
    descEn: "Comprehensive lookbook detailing ready-to-produce women's, kids', and specialized garment collections for private label customization.",
    fileType: "PDF",
    size: "3.4MB",
    dateAr: "نوفمبر 2026",
    dateEn: "November 2026"
  },
  {
    id: "apparel-network-profile",
    titleAr: "ملف شبكة مصانع الملابس الشريكة في مصر (150+ مصنع)",
    titleEn: "Egyptian Apparel Manufacturing Partners Network Dossier",
    descAr: "بيان القدرات التشغيلية والتخصصات الإنتاجية المعتمدة لشبكة المصانع الشريكة للمجموعة في محافظات جمهورية مصر العربية.",
    descEn: "Operational profile outlining verified manufacturing capabilities, specialized lines, and quality certifications across 150+ partner factories in Egypt.",
    fileType: "PDF",
    size: "2.6MB",
    dateAr: "نوفمبر 2026",
    dateEn: "November 2026"
  },
  {
    id: "apparel-technical-sourcing-guidelines",
    titleAr: "الدليل الإجرائي والتعاقدي للمناقصات والتوريدات الدولية",
    titleEn: "International Apparel Sourcing & Contracting Guidelines",
    descAr: "كراسة الشروط الفنية والمعايير التعاقدية (نماذج CM وFOB وOEM) وشروط الفحص وضبط الجودة للشحنات التصديرية.",
    descEn: "Commercial framework document outlining contract models (CM, FOB, OEM), testing protocols, quality control checkpoints, and export logistics.",
    fileType: "PDF",
    size: "1.8MB",
    dateAr: "نوفمبر 2026",
    dateEn: "November 2026"
  }
];

