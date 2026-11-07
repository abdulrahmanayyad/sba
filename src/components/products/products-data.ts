// ============================================================================
// SAMI BIN AYYAD GROUP — PRODUCTS REPOSITORY (PHYSICAL GOODS & COMMODITIES)
// Strictly dedicated to tangible goods, equipment, and catalogues available for supply.
// ============================================================================

export type ProductDivision = "apparel" | "food";

export interface ProductSpec {
  labelEn: string;
  labelAr: string;
  valueEn: string;
  valueAr: string;
}

export interface PhysicalProduct {
  id: string;
  code: string;
  sector: ProductDivision;
  categoryKey: string;
  categoryKeys?: string[];
  categoryEn: string;
  categoryAr: string;
  mainDepartmentEn?: string;
  mainDepartmentAr?: string;
  nameEn: string;
  nameAr: string;
  taglineEn: string;
  taglineAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  originEn: string;
  originAr: string;
  originFlag: string;
  moqEn: string;
  moqAr: string;
  packagingEn: string;
  packagingAr: string;
  specifications: ProductSpec[];
}

export const physicalProducts: PhysicalProduct[] = [
  // ==========================================================================
  // SECTION 1: ملابس الأطفال والأطفال الرضع (KIDS & BABY WEAR)
  // ==========================================================================
  {
    id: "prod-gar-kid-casual",
    code: "SBA-PRD-KID-CAS01",
    sector: "apparel",
    categoryKey: "kids-wear",
    categoryKeys: ["kids-wear", "casual-wear"],
    categoryEn: "Kids & Baby Wear",
    categoryAr: "ملابس الأطفال والرضع",
    mainDepartmentEn: "Kids & Baby Wear",
    mainDepartmentAr: "ملابس الأطفال والرضع",
    nameEn: "Kids Everyday Casual Wear Collection",
    nameAr: "ملابس الأطفال اليومية (كاجوال)",
    taglineEn: "Kids t-shirts, denim & cotton pants, shorts, casual shirts, 2/3-piece sets, jackets, and fleece hoodies.",
    taglineAr: "تيشيرتات، بناطيل جينز وقطنية، شورتات، قمصان كاجوال، أطقم يومية قطعتين وثلاث قطع، سترات وهوديز.",
    descriptionEn: "A comprehensive casual apparel manufacturing line for children: graphic & basic tees, comfort-stretch denim and twill trousers, shorts, button-down casual shirts, coordinated 2-piece and 3-piece daily sets, light jackets, and French terry/fleece hoodies designed for maximum durability and active play.",
    descriptionAr: "خط تصنيع متكامل لملابس الأطفال اليومية الكاجوال، يشمل تيشيرتات أطفال مطبوعة وسادة، بناطيل جينز وأقمشة قطنية مرنة، شورتات، قمصان كاجوال، أطقم يومية قطعتين وثلاث قطع، جاكيتات وسترات أطفال، وهوديز وسويت شيرت مريحة وعالية التحمل للحركة والنشاط اليومي.",
    image: "/Summer/Casual/2-5/Summer - Casual - (2-5) (1).jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "400 pcs / style",
    moqAr: "400 قطعة / تصميم",
    packagingEn: "Individual barcode polybag inside 5-ply export master cartons.",
    packagingAr: "تغليف فردي في كيس شفاف بباركود داخل كراتين تصدير خماسية الطبقات.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Tees, denim & twill pants, shorts, casual shirts, 2/3-piece daily sets, jackets, hoodies & sweatshirts",
        valueAr: "تيشيرتات، بناطيل جينز وقطن، شورتات، قمصان كاجوال، أطقم يومية قطعتين وثلاث قطع، جاكيتات، هوديز وسويت شيرت"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "100% Cotton, Combed Cotton, Cotton/Poly, Denim, French Terry, Fleece",
        valueAr: "قطن 100%، قطن ممشط، قطن وبوليستر، جينز، French Terry، Fleece"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "160 to 320 GSM (by style and season)",
        valueAr: "من 160 إلى 320 جم/م² (وفق الموديل والموسم)"
      },
      {
        labelEn: "Age Groups",
        labelAr: "الفئات العمرية",
        valueEn: "0-24 Months, 2-6 Years, 6-12 Years",
        valueAr: "حديثو الولادة حتى 24 شهرًا، من 2 إلى 6 سنوات، من 6 إلى 12 سنة"
      },
      {
        labelEn: "Colourways",
        labelAr: "خيارات الألوان",
        valueEn: "Extensive seasonal Pantone range with eco-friendly reactive dyes",
        valueAr: "تشكيلة ألوان صيفية وشتوية غنية مع صباغة تفاعلية ثابتة وآمنة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Screen print, HD puff embroidery, custom trims & private labelling",
        valueAr: "طباعة سلك سكرين، تطريز نافخ عالي الدقة، وإضافة علامات العميل التجارية"
      }
    ]
  },
  {
    id: "prod-gar-kid-underwear",
    code: "SBA-PRD-KID-UND01",
    sector: "apparel",
    categoryKey: "kids-wear",
    categoryKeys: ["kids-wear", "underwear"],
    categoryEn: "Kids & Baby Wear",
    categoryAr: "ملابس الأطفال والرضع",
    mainDepartmentEn: "Kids & Baby Wear",
    mainDepartmentAr: "ملابس الأطفال والرضع",
    nameEn: "Kids & Infants Pure Cotton Underwear Line",
    nameAr: "الملابس الداخلية للأطفال والرضع",
    taglineEn: "Combed cotton undershirts, boys boxers, girls panties, daily cotton sets, and infant base layers.",
    taglineAr: "فانلات داخلية، بوكسرات أولاد، ملابس داخلية بنات، أطقم داخلية قطنية، وملابس داخلية للرضع.",
    descriptionEn: "Precision manufacturing of children's intimates: pure combed cotton undershirts, comfortable boys' boxer briefs, girls' briefs and camisoles, matching sets, and gentle infant undergarments produced with skin-friendly flatlock seams and non-irritating waistbands.",
    descriptionAr: "مجموعة تصنيع متخصصة في الملابس الداخلية للأطفال والرضع، تشمل فانلات داخلية قطنية، بوكسرات أولاد مريحة، سراويل وفانلات داخلية بنات، أطقم داخلية قطنية متناسقة، وملابس داخلية للأطفال الرضع بحياكة مسطحة ناعمة لا تسبب أي احتكاك أو حساسية للبشرة.",
    image: "/Categories/Kids/001.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "1,000 pcs / style",
    moqAr: "1,000 قطعة / تصميم",
    packagingEn: "Multi-pack box (2-3 pcs) or hygienic sealed polybags in export master cartons.",
    packagingAr: "عبوات متعددة (2-3 قطع) أو أكياس معقمة محكمة الإغلاق داخل كراتين التصدير.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Undershirts, boys boxers, girls underwear/panties, cotton matching sets, infant base layers",
        valueAr: "فانلات داخلية، بوكسرات أولاد، ملابس داخلية بنات، أطقم داخلية قطنية، ملابس داخلية للرضع"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "100% Combed Cotton, Cotton with Elastane, ultra-soft daily fabrics",
        valueAr: "قطن ممشط 100%، قطن مع إيلاستين، أقمشة ناعمة ومريحة للاستخدام اليومي"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "140 to 180 GSM fine single jersey",
        valueAr: "من 140 إلى 180 جم/م² سنجل جيرسيه فائق النعومة والتهوية"
      },
      {
        labelEn: "Age Groups",
        labelAr: "الفئات العمرية",
        valueEn: "0-24 Months, 2-6 Years, 6-12 Years",
        valueAr: "حديثو الولادة حتى 24 شهرًا، من 2 إلى 6 سنوات، من 6 إلى 12 سنة"
      },
      {
        labelEn: "Finishing & Comfort",
        labelAr: "التشطيب ومعايير الراحة",
        valueEn: "Tagless heat-transfer labels, gentle elastic bands, flatlock anti-chafing seams",
        valueAr: "ملصقات رقبة مطبوعة حرارياً (Tagless)، أستك ناعم مبطن، وحياكة مسطحة مانعة للاحتكاك"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom multi-pack packaging, custom elastic jacquard with brand logo",
        valueAr: "تغليف مخصص متعدد القطع، وإمكانية إضافة شعار العميل على أستك الخصر"
      }
    ]
  },
  {
    id: "prod-gar-kid-homewear",
    code: "SBA-PRD-KID-HMW01",
    sector: "apparel",
    categoryKey: "kids-wear",
    categoryKeys: ["kids-wear", "homewear"],
    categoryEn: "Kids & Baby Wear",
    categoryAr: "ملابس الأطفال والرضع",
    mainDepartmentEn: "Kids & Baby Wear",
    mainDepartmentAr: "ملابس الأطفال والرضع",
    nameEn: "Kids & Children Homewear & Pyjamas Collection",
    nameAr: "الملابس المنزلية والبيجامات للأطفال",
    taglineEn: "Kids pyjamas, summer sleep sets, warm winter nightwear, cotton loungewear, and relaxation sets.",
    taglineAr: "بيجامات أطفال، أطقم نوم صيفية، أطقم نوم شتوية دافئة، أطقم منزلية قطنية، وملابس استرخاء.",
    descriptionEn: "Comprehensive kids loungewear line: lightweight summer short pyjamas, cozy long winter sleepwear, cotton lounge sets, and relaxation wear made of pure cotton, modal, soft jersey, interlock, and warm fleece for deep rest.",
    descriptionAr: "خط إنتاج متكامل للملابس المنزلية وأطقم النوم للأطفال، يشمل بيجامات أطفال صيفية خفيفة، أطقم نوم شتوية دافئة، أطقم منزلية قطنية مريحة، وملابس استرخاء مصنعة من القطن والمودال والإنترلوك والفليس لمنح الأطفال نومًا مريحًا وراحة دائمة في المنزل.",
    image: "/Categories/Kids/1247 - 1248.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 sets / style",
    moqAr: "300 طقم / تصميم",
    packagingEn: "Hanger pack or polybag with branded ribbon insert in export cartons.",
    packagingAr: "تغليف شماعة أو كيس شفاف مع شريط أنيق وبطاقة العلامة التجارية داخل كراتين التصدير.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Kids pyjamas, summer sleep sets, winter warm sleepwear, cotton home sets, loungewear",
        valueAr: "بيجامات أطفال، أطقم نوم صيفية، أطقم نوم شتوية، أطقم منزلية قطنية، ملابس استرخاء"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "100% Cotton, Cotton Modal, Jersey, Interlock, Fleece",
        valueAr: "قطن 100%، قطن مودال، Jersey، Interlock، Fleece"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "160 to 280 GSM (summer lightweight to winter fleece)",
        valueAr: "من 160 إلى 280 جم/م² (أوزان صيفية خفيفة وخامات شتوية دافئة)"
      },
      {
        labelEn: "Age Groups",
        labelAr: "الفئات العمرية",
        valueEn: "0-24 Months, 2-6 Years, 6-12 Years",
        valueAr: "حديثو الولادة حتى 24 شهرًا، من 2 إلى 6 سنوات، من 6 إلى 12 سنة"
      },
      {
        labelEn: "Comfort Features",
        labelAr: "مواصفات الراحة",
        valueEn: "Ribbed non-binding cuffs, adjustable soft drawstrings, breathable thermal balance",
        valueAr: "أساور مطاطية ناعمة، أحزمة خصر مريحة غير ضاغطة، وتنظيم حراري مريح"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom all-over prints, embroidery, hangtags, and branded presentation packaging",
        valueAr: "طباعة نقشات كاملة، تطريزات مخصصة، وبطاقات وتغليف خاص بالعميل"
      }
    ]
  },
  {
    id: "prod-gar-kid-sportswear",
    code: "SBA-PRD-KID-SPT01",
    sector: "apparel",
    categoryKey: "kids-wear",
    categoryKeys: ["kids-wear", "sportswear"],
    categoryEn: "Kids & Baby Wear",
    categoryAr: "ملابس الأطفال والرضع",
    mainDepartmentEn: "Kids & Baby Wear",
    mainDepartmentAr: "ملابس الأطفال والرضع",
    nameEn: "Kids Athletic Activewear & Sportswear Sets",
    nameAr: "الملابس الرياضية وأطقم التمارين للأطفال",
    taglineEn: "Children's tracksuits, athletic tees, training bottoms, sports shorts, jackets, and activewear.",
    taglineAr: "أطقم رياضية، تيشيرتات رياضية، بناطيل رياضية، شورتات، جاكيتات رياضية، وملابس تدريب وحركة.",
    descriptionEn: "Engineered activewear collection for boys and girls: 2-piece tracksuits, quick-dry training t-shirts, flexible sweatpants, athletic shorts, and zip jackets tailored from breathable Polyester/Spandex blends that allow full freedom of movement.",
    descriptionAr: "تشكيلة أزياء رياضية للأطفال مخصصة للأنشطة والتدريب البدني، تشمل ترنجات وأطقم رياضية قطعتين، تيشيرتات رياضية طاردة للرطوبة، بناطيل تدريب مريحة، شورتات رياضية، جاكيتات تدريب بسحاب، وملابس حركة وتدريب بخامات مرنة سريعة الجفاف تدعم حركة الأطفال بنشاط.",
    image: "/Winter/Casual/Boys/3-6/Winter - Casual - (3-6) (1).jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 pcs / style",
    moqAr: "300 قطعة / تصميم",
    packagingEn: "Individual zipper polybag with hangtag and export master carton.",
    packagingAr: "كيس شفاف بسحاب فردي مع بطاقة المقاسات وكرتون تصدير مقوى.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Tracksuits, athletic t-shirts, training pants, sports shorts, active jackets, movement wear",
        valueAr: "أطقم رياضية، تيشيرتات رياضية، بناطيل رياضية، شورتات رياضية، جاكيتات رياضية، ملابس تدريب وحركة"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Polyester, Polyester / Spandex, Quick-Dry textiles, flexible motion knits",
        valueAr: "Polyester، Polyester / Spandex، أقمشة سريعة الجفاف، وأقمشة مرنة مناسبة للحركة"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "180 to 260 GSM",
        valueAr: "من 180 إلى 260 جم/م²"
      },
      {
        labelEn: "Age Groups",
        labelAr: "الفئات العمرية",
        valueEn: "2-6 Years, 6-12 Years, Junior sizing",
        valueAr: "من 2 إلى 6 سنوات، من 6 إلى 12 سنة، ومقاسات الناشئين"
      },
      {
        labelEn: "Performance Features",
        labelAr: "الخصائص التقنية",
        valueEn: "4-way mechanical stretch, fast moisture wicking, breathable ventilation panels",
        valueAr: "مرونة رباعية الاتجاهات، سرعة طرد الرطوبة والعرق، وألواح تهوية مدمجة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Heat-sealed reflective logos, customized club crests, and branded zipper pulls",
        valueAr: "شعارات عاكسة للضوء مدمجة حرارياً، شعارات أندية مخصصة، وسحابات تحمل علامة العميل"
      }
    ]
  },
  {
    id: "prod-gar-kid-baby",
    code: "SBA-PRD-KID-BBY01",
    sector: "apparel",
    categoryKey: "kids-wear",
    categoryKeys: ["kids-wear"],
    categoryEn: "Kids & Baby Wear",
    categoryAr: "ملابس الأطفال والرضع",
    mainDepartmentEn: "Kids & Baby Wear",
    mainDepartmentAr: "ملابس الأطفال والرضع",
    nameEn: "Newborn & Baby Clothing Essentials Collection",
    nameAr: "ملابس الرضع وحديثي الولادة (بيبي)",
    taglineEn: "Baby rompers, bodysuits, newborn starter sets, infant pyjamas, daily cottons, and outdoor sets.",
    taglineAr: "سالوبيتات، بودي سوت، أطقم حديثي الولادة، بيجامات الرضع، ملابس قطنية يومية، وأطقم خروج.",
    descriptionEn: "Gentle, certified infant apparel collection for babies aged 0 to 24 months: full-length snap rompers, expandable lap-neck bodysuits, hospital-take-home starter sets, baby pyjamas, soft daily cottons, and cute outdoor sets crafted from 100% hypoallergenic and organic combed cotton.",
    descriptionAr: "مجموعة رعاية متكاملة لحديثي الولادة والرضع من عمر يوم حتى 24 شهرًا، تضم سالوبيتات بكباسين سفلية وأمامية، بودي سوت بفتحات عنق مرنة، أطقم استقبال حديثي الولادة، بيجامات مريحة، ملابس قطنية يومية، وأطقم خروج للأطفال الرضع مصنعة من قطن خالص 100% وقطن عضوي فائق النعومة لسلامة بشرة الطفل.",
    image: "/Summer/Casual/2-5/Summer - Casual - (2-5) (2).jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "500 pcs / style",
    moqAr: "500 قطعة / تصميم",
    packagingEn: "Baby-safe vented polybag or gift box with non-toxic certified trims.",
    packagingAr: "أكياس آمنة بفتحات تهوية معتمدة للرضع أو علب هدايا أنيقة داخل كراتين تصدير.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Salopettes / rompers, bodysuits, newborn starter sets, infant pyjamas, daily cottons, outdoor sets",
        valueAr: "سالوبيتات، بودي سوت، أطقم حديثي الولادة، بيجامات الرضع، ملابس قطنية يومية، أطقم خروج للرضع"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "100% Cotton, Organic Cotton when available, ultra-gentle baby knits",
        valueAr: "قطن 100%، Organic Cotton (قطن عضوي عند توافره)، أقمشة ناعمة مناسبة لبشرة الرضع"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "160 to 210 GSM hypoallergenic interlock & rib",
        valueAr: "من 160 إلى 210 جم/م² إنترلوك وريب فائق النعومة ضد التحسس"
      },
      {
        labelEn: "Age Groups",
        labelAr: "الفئات العمرية",
        valueEn: "Newborn up to 24 Months (0-3m, 3-6m, 6-12m, 12-24m)",
        valueAr: "حديثو الولادة حتى 24 شهرًا (0-3، 3-6، 6-12، 12-24 شهرًا)"
      },
      {
        labelEn: "Safety Standards",
        labelAr: "معايير السلامة والأمان",
        valueEn: "Nickel-free snap closures, lead-free trims, tagless collar prints",
        valueAr: "كباسين وأزرار خالية تمامًا من النيكل، ملصقات مطبوعة بدون حواف خشنة، وصبغات آمنة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom gift sets, embroidered monograms, custom branded ribbons and box packaging",
        valueAr: "أطقم هدايا للمواليد، تطريزات مخصصة مبطنة، وتغليف أنيق بعلامة العميل التجارية"
      }
    ]
  },

  // ==========================================================================
  // SECTION 2: الملابس النسائية (WOMEN'S WEAR)
  // (Exclusively 3 categories: Underwear, Homewear, Lingerie. Casual & Soiree strictly removed)
  // ==========================================================================
  {
    id: "prod-gar-wmn-underwear",
    code: "SBA-PRD-WMN-UND01",
    sector: "apparel",
    categoryKey: "womens-wear",
    categoryKeys: ["womens-wear", "underwear"],
    categoryEn: "Women's Wear",
    categoryAr: "الملابس النسائية",
    mainDepartmentEn: "Women's Wear",
    mainDepartmentAr: "الملابس النسائية",
    nameEn: "Women's Everyday Cotton & Seamless Underwear Line",
    nameAr: "الملابس الداخلية النسائية (يومي وسيليس)",
    taglineEn: "Women's basic underwear sets, bras, panties, shorts, undershirts, cotton intimates, and seamless sets.",
    taglineAr: "أطقم داخلية نسائية، حمالات صدر، سراويل داخلية، شورتات، فانلات نسائية، وأطقم سيمليس بدون درزات.",
    descriptionEn: "A dedicated manufacturing line for everyday women's underwear: combed cotton multi-pack panties (bikini, hipster, brief), wireless and comfort everyday bras, inner shorts, cotton undershirts, and seamless circular-knitted basic sets providing irritation-free comfort and supreme breathability.",
    descriptionAr: "خط تصنيع متكامل للملابس الداخلية النسائية اليومية، يشمل أطقم داخلية نسائية، حمالات صدر مريحة (Bras)، سراويل داخلية متنوعة القَصّات (Panties)، شورتات داخلية، فانلات نسائية قطنية، وأطقم داخلية بدون درزات بارزة (Seamless) مصنعة بأحدث تقنيات الحياكة الدائرية لضمان نعومة تامة طوال اليوم.",
    image: "/Categories/Lingerie/1001.jpeg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "1,000 pcs / model",
    moqAr: "1,000 قطعة / موديل",
    packagingEn: "Multi-pack branded boxes (2-3 pcs) or luxury hanging display cards.",
    packagingAr: "علب كرتونية فاخرة متعددة القطع (2-3 قطع) أو أكياس شفافة بشماعة عرض.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Underwear sets, Bras, Panties, Inner shorts, Undershirts / camisoles, Cotton intimates, Seamless sets",
        valueAr: "أطقم داخلية نسائية، حمالات صدر (Bras)، سراويل داخلية (Panties)، شورتات داخلية، فانلات نسائية، ملابس قطنية، أطقم بدون درزات (Seamless)"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "100% Cotton, Cotton / Elastane, Microfiber, Modal, Seamless Knitted Fabrics",
        valueAr: "قطن 100%، Cotton / Elastane، Microfiber، Modal، Seamless Knitted Fabrics"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "140 to 190 GSM fine gauge circular knits",
        valueAr: "من 140 إلى 190 جم/م² حياكة دائرية فائقة الدقة والنعومة"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "XS, S, M, L, XL, XXL (European & US sizing charts)",
        valueAr: "XS, S, M, L, XL, XXL (مطابقة لجداول المقاسات الأوروبية والأمريكية)"
      },
      {
        labelEn: "Available Colours",
        labelAr: "خيارات الألوان",
        valueEn: "Essential neutrals (Optical White, Black, Nude, Beige, Skin) and seasonal pastels",
        valueAr: "ألوان أساسية محايدة (أبيض، أسود، نيود، بيج) بالإضافة إلى درجات الباستيل الموسمية"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom jacquard elastic waistbands, heat-transfer branding, multi-pack box packaging",
        valueAr: "أستك جاكار مطاطي بشعار العميل، ملصقات مطبوعة بالترانسفير، وتغليف علب مخصص"
      }
    ]
  },
  {
    id: "prod-gar-wmn-homewear",
    code: "SBA-PRD-WMN-HMW01",
    sector: "apparel",
    categoryKey: "womens-wear",
    categoryKeys: ["womens-wear", "homewear"],
    categoryEn: "Women's Wear",
    categoryAr: "الملابس النسائية",
    mainDepartmentEn: "Women's Wear",
    mainDepartmentAr: "الملابس النسائية",
    nameEn: "Women's Premium Homewear, Pyjamas & Loungewear",
    nameAr: "الملابس المنزلية والبيجامات النسائية",
    taglineEn: "Women's pyjamas, 2-piece and 3-piece home sets, loungewear, summer light sets, winter sets, and robes.",
    taglineAr: "بيجامات نسائية، أطقم منزلية قطعتين وثلاث قطع، ملابس استرخاء، أطقم صيفية خفيفة وشتوية، وروب منزلي.",
    descriptionEn: "Refined women's homewear and loungewear collection: stylish 2-piece and 3-piece indoor sets, lightweight summer pyjamas, warm fleece and interlock winter sets, relaxed loungewear, and comfortable wrap robes crafted from premium modal, combed cotton, and viscose.",
    descriptionAr: "تشكيلة راقية من الملابس المنزلية والبيجامات النسائية المصممة للراحة والأناقة، تشمل بيجامات نسائية عصرية، أطقم منزلية قطعتين وثلاث قطع، ملابس استرخاء (Loungewear)، أطقم صيفية خفيفة، أطقم شتوية دافئة، وروب منزلي بأقمشة ناعمة من القطن والمودال والفيسكوز الفاخر.",
    image: "/Categories/Home Wear/2003 (1).jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 sets / style",
    moqAr: "300 طقم / تصميم",
    packagingEn: "Polybag with branded presentation ribbon and export master cartons.",
    packagingAr: "تغليف أنيق في كيس شفاف بشريط تعبئة وبطاقة العلامة مع كراتين تصدير.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Women's pyjamas, 2-piece home sets, 3-piece home sets, loungewear, summer light sets, winter sets, robes",
        valueAr: "بيجامات نسائية، أطقم منزلية قطعتين، أطقم منزلية ثلاث قطع، ملابس استرخاء (Loungewear)، أطقم صيفية خفيفة، أطقم شتوية، روب منزلي"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Cotton, Modal, Cotton / Polyester, Viscose, Jersey, Interlock, Fleece",
        valueAr: "Cotton، Modal، Cotton / Polyester، Viscose، Jersey، Interlock، Fleece"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "150 to 260 GSM (summer modal-jersey to warm winter interlock/fleece)",
        valueAr: "من 150 إلى 260 جم/م² (مودال وجيرسيه صيفي خفيف حتى الإنترلوك والفليس الشتوي)"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "S, M, L, XL, XXL and Plus Sizes (relaxed and tailored fits)",
        valueAr: "S, M, L, XL, XXL ومقاسات خاصة (قَصّات مريحة وتفصيل مضبوط)"
      },
      {
        labelEn: "Fabric Features",
        labelAr: "مميزات الأقمشة",
        valueEn: "Supreme thermal balance, silky soft handfeel, pre-shrunk, wash-durable colors",
        valueAr: "تنظيم حراري طبيعي، ملمس حريري ناعم، معالجة ضد الانكماش وثبات الألوان"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom embroidery, lace accents, brand labels, and branded gift wrapping",
        valueAr: "تطريزات خاصة، لمسات دانتيل راقية، علامات الماركة وتغليف هدايا مخصص"
      }
    ]
  },
  {
    id: "prod-gar-wmn-lingerie",
    code: "SBA-PRD-WMN-LNG01",
    sector: "apparel",
    categoryKey: "womens-wear",
    categoryKeys: ["womens-wear", "womens-lingerie"],
    categoryEn: "Women's Wear",
    categoryAr: "الملابس النسائية",
    mainDepartmentEn: "Women's Wear",
    mainDepartmentAr: "الملابس النسائية",
    nameEn: "Women's Luxury Lingerie & Fine Nightwear Collection",
    nameAr: "اللانجري النسائي وأطقم النوم الفاخرة",
    taglineEn: "Luxury lingerie sets, nightwear chemises, bridal robes, bodysuits, satin sets, lace sets, and separates.",
    taglineAr: "أطقم لانجري فاخرة، قمصان نوم، روب لانجري، بودي سوت، أطقم ساتان ودانتيل، وقطع لانجري منفصلة.",
    descriptionEn: "Specialized luxury lingerie manufacturing division: satin bridal and nightwear sets, French lace chemises, sheer bodysuits, delicate wrap robes, satin coordinates, fine mesh designs, and luxury separates produced under strict quality standards for premium retail brands.",
    descriptionAr: "وحدة تصنيع متخصصة في اللانجري النسائي الفاخر، تشمل أطقم لانجري راقية، قمصان نوم (Nightwear)، روب لانجري أنيق، بودي سوت (Bodysuits)، أطقم ساتان ملكي، أطقم دانتيل مطرزة بدقة، وقطع لانجري منفصلة مصممة بأعلى معايير الإتقان لدور الأزياء وماركات اللانجري العالمية.",
    image: "/Categories/Lingerie/1005.jpeg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "500 pcs / style",
    moqAr: "500 قطعة / تصميم",
    packagingEn: "Luxury presentation gift box or boutique garment bag with custom hangtags.",
    packagingAr: "صندوق هدايا فاخر أو كيس بوتيك أنيق مع بطاقات العلامة التجارية الخاصة.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Lingerie sets, Nightwear / chemises, Lingerie robes, Bodysuits, Satin sets, Lace sets, Luxury separates",
        valueAr: "أطقم لانجري، قمصان نوم (Nightwear)، روب لانجري، Bodysuits، أطقم ساتان، أطقم دانتيل، قطع لانجري منفصلة"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Satin, Lace, Microfiber, Mesh, Tulle, Viscose",
        valueAr: "Satin، Lace، Microfiber، Mesh، Tulle، Viscose"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "90 to 160 GSM lightweight flowing luxury textiles",
        valueAr: "من 90 إلى 160 جم/م² أقمشة حريرية خفيفة وانسيابية"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "XS, S, M, L, XL (precision cup and body grading)",
        valueAr: "XS, S, M, L, XL (تدريج قياسات دقيق ومضبوط للصدر والقوام)"
      },
      {
        labelEn: "Available Colours",
        labelAr: "خيارات الألوان",
        valueEn: "Classic Black, Deep Red, Off-White, Champagne, Blush, Emerald, Royal Navy",
        valueAr: "أسود ملكي، أحمر كلاسيكي، أوف وايت، شامبين، وردي ناعم، زمردي، وكحلي ملكي"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Bespoke pattern development, private label satin labels, branded boutique boxes",
        valueAr: "تطوير باترونات حصرية، علامات ساتان مطرزة بالاسم، وعلب بوتيك فاخرة"
      }
    ]
  },

  // ==========================================================================
  // SECTION 3: الملابس الرجالية (MEN'S WEAR)
  // (5 categories: Casual, Classic, Shirts, Homewear, Sportswear)
  // ==========================================================================
  {
    id: "prod-gar-men-casual",
    code: "SBA-PRD-MEN-CAS01",
    sector: "apparel",
    categoryKey: "mens-wear",
    categoryKeys: ["mens-wear", "casual-wear"],
    categoryEn: "Men's Wear",
    categoryAr: "ملابس رجالية",
    mainDepartmentEn: "Men's Wear",
    mainDepartmentAr: "الملابس الرجالية",
    nameEn: "Men's Casual Wear, Polos, Chinos & Hoodies",
    nameAr: "الملابس الرجالية الكاجوال (بولو، تيشيرتات، وتشينو)",
    taglineEn: "Men's t-shirts, polo shirts, chino pants, casual trousers, shorts, hoodies, sweatshirts, and casual jackets.",
    taglineAr: "تيشيرتات رجالية، بولو، بناطيل تشينو، بناطيل كاجوال، شورتات، هوديز، سويت شيرت، وجاكيتات كاجوال.",
    descriptionEn: "Full-scale casual apparel production for men: heavy combed cotton t-shirts, double-pique polo shirts, stretch cotton chino trousers, casual shorts, heavyweight French terry hoodies, crewneck sweatshirts, and casual utility jackets crafted for all-day comfort and long-lasting shape retention.",
    descriptionAr: "خط إنتاج كاجوال رجالي متكامل، يضم تيشيرتات قطنية فاخرة، قمصان بولو (Polo Shirts) بيكيه مزدوج، بناطيل تشينو (Chino Pants) كاجوال مرنة، شورتات رجالية، هوديز وسويت شيرت خامة فرينش تيري وفليس ثقيلة، وجاكيتات كاجوال أنيقة تجمع بين المتانة والراحة اليومية.",
    image: "/BG/Apparel Manufacturing/Specialized Production Lines.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "400 pcs / style",
    moqAr: "400 قطعة / تصميم",
    packagingEn: "Folded in barcode polybag, 36-48 pcs per export master carton.",
    packagingAr: "تغليف فردي في كيس شفاف بباركود، 36-48 قطعة لكل كرتونة تصدير رئيسية.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "T-shirts, Polo shirts, Chino pants, Casual trousers, Shorts, Hoodies, Sweatshirts, Casual jackets",
        valueAr: "تيشيرتات رجالية، بولو رجالي (Polo Shirts)، بناطيل تشينو، بناطيل كاجوال، شورتات رجالية، هوديز، سويت شيرت، جاكيتات كاجوال"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Cotton, Piqué Cotton, Cotton / Elastane, French Terry, Fleece, Twill, Denim",
        valueAr: "Cotton، Piqué Cotton، Cotton / Elastane، French Terry، Fleece، Twill، Denim"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "180 to 380 GSM (light tees to heavyweight winter hoodies)",
        valueAr: "من 180 إلى 380 جم/م² (من التيشيرتات الصيفية حتى الهوديز الشتوية الثقيلة)"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "S, M, L, XL, XXL, 3XL (Regular Fit & Slim Fit)",
        valueAr: "S, M, L, XL, XXL, 3XL (قَصّة عادية مريحة وقَصّة سليم)"
      },
      {
        labelEn: "Finishing & Washes",
        labelAr: "المعالجة والغسيل",
        valueEn: "Bio-wash, anti-pilling treatment, silicon softeners, pre-shrunk",
        valueAr: "غسيل حيوي، معالجة ضد الوبر وضد الانكماش، ومعالجة بالسيليكون المنعم"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Screen print, HD embroidery, custom leather patches, branded metal buttons",
        valueAr: "طباعة سلك سكرين، تطريز عالي الدقة، بادجات جلدية، وأزرار معدنية مخصصة"
      }
    ]
  },
  {
    id: "prod-gar-men-classic",
    code: "SBA-PRD-MEN-CLS01",
    sector: "apparel",
    categoryKey: "mens-wear",
    categoryKeys: ["mens-wear", "classic-wear"],
    categoryEn: "Men's Wear",
    categoryAr: "ملابس رجالية",
    mainDepartmentEn: "Men's Wear",
    mainDepartmentAr: "الملابس الرجالية",
    nameEn: "Men's Classic Suiting, Blazers & Formal Trousers",
    nameAr: "الملابس الرجالية الكلاسيكية والبدلات والسترات",
    taglineEn: "Classic trousers, tailored suits, formal blazers, waistcoats, formal sets, and executive business attire.",
    taglineAr: "بناطيل كلاسيكية، بدلات رجالية، سترات رسمية (Blazers)، صديري رجالي، وأطقم رجال الأعمال.",
    descriptionEn: "Precision tailored classic menswear: structured 2-piece and 3-piece business suits, refined executive blazers, crease-resistant tailored trousers, formal waistcoats, and corporate uniform lines engineered with premium wool blends, polyester-viscose, and stretch suiting textiles.",
    descriptionAr: "وحدة حياكة وتفصيل الأزياء الكلاسيكية والرسمية للرجال: تشمل بدلات رجالية كاملة قطعتين وثلاث قطع، سترات رسمية (Blazers) أنيقة، بناطيل كلاسيكية مقواة ومقاومة للتجعد، صديري رجالي (Waistcoats)، وأطقم رجال الأعمال المصنعة من خامات الصوف والمخاليط الفاخرة لمظهر رسمي متميز.",
    image: "/BG/Apparel Manufacturing/Private Label Manufacturing.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 pcs / style",
    moqAr: "300 قطعة / تصميم",
    packagingEn: "Garment suit cover with heavy hanger in protective export wardrobe carton.",
    packagingAr: "كفر بدلة واقٍ بسحاب مع شماعة متينة داخل كرتونة شحن وحفظ الملابس الرسمية.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Classic trousers, Men's suits (2 & 3 piece), Blazers, Waistcoats, Formal executive business sets",
        valueAr: "بناطيل كلاسيكية، بدلات رجالية، سترات رسمية (Blazers)، صديري رجالي (Waistcoats)، أطقم رسمية، ملابس رجال الأعمال"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Wool Blends, Polyester / Viscose, Cotton Twill, Stretch Suiting Fabrics",
        valueAr: "Wool Blends، Polyester / Viscose، Cotton Twill، Stretch Suiting Fabrics"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "240 to 340 GSM suiting fabrics",
        valueAr: "من 240 إلى 340 جم/م² أقمشة بدل رسمية فاخرة"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "EU 46 to 60 (Regular Fit, Slim Fit, Tailored Fit)",
        valueAr: "من 46 إلى 60 أوروبي (Regular Fit, Slim Fit, Tailored Fit)"
      },
      {
        labelEn: "Tailoring Details",
        labelAr: "تفاصيل الخياطة والتشطيب",
        valueEn: "Fused collar & lapel interfacing, interior satin lining, functional horn/resin buttons",
        valueAr: "تقوية الياقات والصدر بكنافاس متين، بطانة داخلية ساتان، وأزرار قرنية وراتنجية أنيقة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Corporate uniform branding, custom sleeve labels, branded suit covers",
        valueAr: "برامج الزي الموحد للشركات، بطاقات أكمام مخصصة، وأغلفة بدل بشعار العميل"
      }
    ]
  },
  {
    id: "prod-gar-men-shirts",
    code: "SBA-PRD-MEN-SHT01",
    sector: "apparel",
    categoryKey: "mens-wear",
    categoryKeys: ["mens-wear", "mens-shirts"],
    categoryEn: "Men's Wear",
    categoryAr: "ملابس رجالية",
    mainDepartmentEn: "Men's Wear",
    mainDepartmentAr: "الملابس الرجالية",
    nameEn: "Men's Formal & Casual Cotton Shirts Line",
    nameAr: "القمصان الرجالية الرسمية والكاجوال",
    taglineEn: "Formal dress shirts, Oxford shirts, casual button-downs, long & short sleeves, solids, stripes & custom designs.",
    taglineAr: "قمصان رسمية، قمصان أكسفورد، قمصان كاجوال، أكمام طويلة وقصيرة، سادة ومخططة وتصميمات مخصصة.",
    descriptionEn: "Dedicated shirt manufacturing department: crisp executive dress shirts with fusible collars, washed casual Oxford shirts, linen summer shirts, long and short-sleeve options in solid colors, stripes, and checks, crafted from world-renowned Egyptian cotton and fine poplin.",
    descriptionAr: "قسم تصنيع متخصص في القمصان الرجالية: يشمل قمصان رسمية لرجال الأعمال بياقات مقواة (Formal Shirts)، قمصان أكسفورد (Oxford Shirts)، قمصان كاجوال عصرية، قمصان بأكمام طويلة وأكمام قصيرة، موديلات سادة ومخططة ومربعات، وتصميمات مخصصة بالكامل للعلامات التجارية من أجود خامات القطن المصري والبوبلين والكتان.",
    image: "/BG/Apparel Manufacturing/Product Development & Sampling.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "400 pcs / style",
    moqAr: "400 قطعة / تصميم",
    packagingEn: "Individual shirt box or polybag with collar inserts and plastic clips.",
    packagingAr: "تعبئة فردية داخل علبة قميص فاخرة أو كيس شفاف مع دعامات ياقة ومشابك تثبيت.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Formal dress shirts, Oxford shirts, Casual shirts, Long-sleeve shirts, Short-sleeve shirts, Solids & stripes, Custom brand shirts",
        valueAr: "قمصان رسمية (Formal Shirts)، قمصان أكسفورد (Oxford Shirts)، قمصان كاجوال، قمصان بأكمام طويلة، قمصان بأكمام قصيرة، قمصان سادة ومخططة، قمصان بتصميمات مخصصة"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Egyptian Cotton, Poplin, Oxford Fabric, Twill, Linen, Cotton Blends",
        valueAr: "Egyptian Cotton، Poplin، Oxford Fabric، Twill، Linen، Cotton Blends"
      },
      {
        labelEn: "Yarn Count & Weights",
        labelAr: "نمرة الخيط والوزن",
        valueEn: "60/1 to 100/2 Compact Egyptian Giza yarns (110 - 150 GSM)",
        valueAr: "من 60/1 إلى 100/2 قطن جيزة كومباكت فاخر (وزن 110 إلى 150 جم/م²)"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "Collar sizes 14.5\" to 18.5\" (S to 3XL in Slim Fit, Tailored Fit, Regular Fit)",
        valueAr: "قياس الياقة من 14.5 إلى 18.5 بوصة (من S إلى 3XL بقَصّات سليم، مفصلة، وعادية)"
      },
      {
        labelEn: "Collar & Cuff Styles",
        labelAr: "أنماط الياقات والأساور",
        valueEn: "Classic spread, Cutaway, Button-down collars; Single and French double cuffs",
        valueAr: "ياقة كلاسيكية مفرودة، ياقة إيطالية، زر أسفل الياقة، أساور عادية وأساور فرنسية للكبك"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Mother-of-pearl engraved buttons, custom woven labels, branded luxury gift boxes",
        valueAr: "أزرار صدفية محفورة باسم الماركة، علامات منسوجة راقية، وعلب هدايا فاخرة"
      }
    ]
  },
  {
    id: "prod-gar-men-homewear",
    code: "SBA-PRD-MEN-HMW01",
    sector: "apparel",
    categoryKey: "mens-wear",
    categoryKeys: ["mens-wear", "homewear"],
    categoryEn: "Men's Wear",
    categoryAr: "ملابس رجالية",
    mainDepartmentEn: "Men's Wear",
    mainDepartmentAr: "الملابس الرجالية",
    nameEn: "Men's Cotton Homewear & Pyjama Sets",
    nameAr: "الملابس المنزلية والبيجامات الرجالية",
    taglineEn: "Men's pyjamas, indoor sets, lounge pants, home t-shirts, lounge shorts, summer and winter sleepwear.",
    taglineAr: "بيجامات رجالية، أطقم منزلية، بناطيل منزلية، تيشيرتات منزلية، شورتات، وملابس نوم صيفية وشتوية.",
    descriptionEn: "Comfort-engineered men's loungewear and pyjama collection: coordinated 2-piece sleep sets, lightweight summer shorts and tees, warm winter interlock pants, relaxed fit home t-shirts, and lounge trousers made of soft combed cotton, modal, and breathable jersey.",
    descriptionAr: "مجموعة الملابس المنزلية والبيجامات الرجالية المصممة لتوفير أقصى درجات الاسترخاء: تضم بيجامات رجالية قطنية متكاملة، أطقم منزلية مريحة قطعتين، بناطيل منزلية مرنة بأربطة، تيشيرتات منزلية خفيفة، شورتات نوم، وملابس نوم صيفية وشتوية بخامات القطن والمودال والإنترلوك عالي النعومة والتهوية.",
    image: "/BG/Apparel Manufacturing/Ready-Made Garment Manufacturing.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 sets / style",
    moqAr: "300 طقم / تصميم",
    packagingEn: "Polybag with branded presentation insert or box packaging.",
    packagingAr: "كيس شفاف أنيق مع بطاقة تعريف أو علبة كرتونية للهدايا.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Men's pyjamas, Home sets, Lounge pants, Home t-shirts, Lounge shorts, Summer and winter sleepwear",
        valueAr: "بيجامات رجالية، أطقم منزلية، بناطيل منزلية، تيشيرتات منزلية، شورتات منزلية، ملابس نوم صيفية وشتوية"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Cotton, Modal, Jersey, Interlock, Cotton / Polyester",
        valueAr: "Cotton، Modal، Jersey، Interlock، Cotton / Polyester"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "160 to 240 GSM breathable knits",
        valueAr: "من 160 إلى 240 جم/م² تريكو قطني ناعم وعالي التهوية"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "M, L, XL, XXL, 3XL (comfort relaxed fit)",
        valueAr: "M, L, XL, XXL, 3XL (قَصّات استرخاء مريحة)"
      },
      {
        labelEn: "Comfort Details",
        labelAr: "تفاصيل الراحة والتشطيب",
        valueEn: "Adjustable drawstring waistband, side slash pockets, non-binding ankle cuffs",
        valueAr: "خصر مطاطي برباط قابل للضبط، جيوب جانبية عملية، وأساور أرجل ناعمة غير ضاغطة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Yarn-dyed woven plaids, screen prints, embroidered chest crests, and private boxing",
        valueAr: "أقمشة كاروهات مصبوغة في الغزل، طباعة ونقشات، وتطريز وتغليف خاص بالعميل"
      }
    ]
  },
  {
    id: "prod-gar-men-sportswear",
    code: "SBA-PRD-MEN-SPT01",
    sector: "apparel",
    categoryKey: "mens-wear",
    categoryKeys: ["mens-wear", "sportswear"],
    categoryEn: "Men's Wear",
    categoryAr: "ملابس رجالية",
    mainDepartmentEn: "Men's Wear",
    mainDepartmentAr: "الملابس الرجالية",
    nameEn: "Men's Athletic Sportswear & Gym Training Wear",
    nameAr: "الملابس الرياضية وملابس الجيم والتدريب للرجال",
    taglineEn: "Full tracksuits, athletic tees, workout pants, training shorts, athletic jackets, gym and running wear.",
    taglineAr: "أطقم رياضية، تيشيرتات رياضية، بناطيل تدريب، شورتات رياضية، جاكيتات رياضية، ملابس جيم وجري.",
    descriptionEn: "High-performance men's athletic activewear: full coordinated tracksuits, moisture-wicking gym t-shirts, flexible workout joggers, running shorts with inner compression, training zip-ups, and athletic jackets engineered with 4-way stretch and rapid moisture management.",
    descriptionAr: "خط إنتاج متطور للملابس الرياضية الرجالية وملابس التدريب والجيم: يشمل ترنجات وأطقم رياضية كاملة، تيشيرتات تدريب وجري بتقنية طرد الرطوبة، بناطيل تدريب مرنة (Joggers)، شورتات رياضية، جاكيتات تمرين بسحاب، وملابس لياقة بدنية مصنعة من أقمشة البوليستر والسباندكس والنايلون المرنة بأربع اتجاهات.",
    image: "/BG/Apparel Manufacturing/Production Volume & Scale.jpg",
    originEn: "Egypt",
    originAr: "جمهورية مصر العربية",
    originFlag: "🇪🇬",
    moqEn: "300 pcs / style",
    moqAr: "300 قطعة / تصميم",
    packagingEn: "Zipper athletic polybag with venting and barcode hangtag.",
    packagingAr: "كيس رياضي بسحاب مع فتحات تهوية وبطاقة باركود للمواصفات.",
    specifications: [
      {
        labelEn: "Included Products",
        labelAr: "المنتجات المشمولة",
        valueEn: "Tracksuits, Athletic t-shirts, Training pants / joggers, Sports shorts, Athletic jackets, Gym wear, Running & training gear",
        valueAr: "أطقم رياضية، تيشيرتات رياضية، بناطيل تدريب، شورتات رياضية، جاكيتات رياضية، ملابس جيم، ملابس جري وتدريب"
      },
      {
        labelEn: "Fabric Composition",
        labelAr: "الخامات وتركيب الأقمشة",
        valueEn: "Polyester, Polyester / Spandex, Nylon / Elastane, Quick-Dry performance textiles, 4-way stretch fabrics",
        valueAr: "Polyester، Polyester / Spandex، Nylon / Elastane، أقمشة سريعة الجفاف، أقمشة مرنة بأربع اتجاهات"
      },
      {
        labelEn: "Fabric Weights (GSM)",
        labelAr: "أوزان الأقمشة",
        valueEn: "160 to 280 GSM (lightweight training tops to structured warm-up tracksuits)",
        valueAr: "من 160 إلى 280 جم/م² (من تيشيرتات الجري الخفيفة حتى ترنجات التدريب والإحماء)"
      },
      {
        labelEn: "Available Sizes",
        labelAr: "المقاسات المتاحة",
        valueEn: "S, M, L, XL, XXL, 3XL (Athletic Fit & Performance Fit)",
        valueAr: "S, M, L, XL, XXL, 3XL (قَصّة رياضية مريحة وقَصّة تدريب محكمة)"
      },
      {
        labelEn: "Performance Features",
        labelAr: "المواصفات التقنية",
        valueEn: "Rapid dry, 4-way mechanical recovery stretch, anti-odor antimicrobial yarn, reinforced flatlock seams",
        valueAr: "جفاف فوري، تمدد رباعي واستعادة القوام، معالجة ضد الروائح والبكتيريا، وحياكة مسطحة معززة"
      },
      {
        labelEn: "Private Label",
        labelAr: "التخصيص والعلامات الخاصة",
        valueEn: "Custom heat-transfer logos, silicone brand patches, customized club colors and numbering",
        valueAr: "طباعة فينيل حراري لشعار العميل، بادجات سيليكون بارزة، وألوان وترقيم مخصص للفرق والأندية"
      }
    ]
  },
  {
    "id": "prod-food-honey",
    "code": "SBA-PRD-HNY01",
    "sector": "food",
    "categoryKey": "honey-bee",
    "categoryEn": "Natural Honey & Bee Products",
    "categoryAr": "عسل النحل الطبيعي ومنتجات النحل",
    "nameEn": "100% Pure Raw Egyptian Clover & Citrus Honey",
    "nameAr": "عسل نحل طبيعي نقي 100% (برسيم وموالح وسدر)",
    "taglineEn": "Unpasteurized, lab-certified pure natural honey harvested from private organic apiaries.",
    "taglineAr": "عسل نحل خام غير مبستر مفحوص معمليًا وخالٍ من بقايا المضادات والسكر المضاف.",
    "descriptionEn": "Pure natural honey harvested along the fertile Nile Valley. Tested for enzyme activity, low HMF, and pollen purity. Available in wholesale drums or retail glass jars with private labeling.",
    "descriptionAr": "عسل نحل طبيعي مستخلص من مناحلنا الخاصة على ضفاف النيل. مفحوص بالكامل لنسب السكر الطبيعي وإنزيم الدياستاز، ومتاح ببراميل توريد صناعي أو برطمانات زجاجية تجارية.",
    "image": "/BG/Natural & Agri-Food Products/Natural Honey & Bee Products.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1 metric ton (bulk) / 500 cartons (retail jars)",
    "moqAr": "1 طن متري (براميل) / 500 كرتونة (برطمانات)",
    "packagingEn": "300 kg food-grade coated steel drums or 250g/500g/1kg glass jars.",
    "packagingAr": "براميل حديدية مبطنة غذائيًا 300 كجم أو برطمانات زجاجية 250/500/1000 جم.",
    "specifications": [
      {
        "labelEn": "Purity",
        "labelAr": "النقاء",
        "valueEn": "100% Raw Bee Honey, 0% added syrup",
        "valueAr": "عسل خام طبيعي 100%، بدون سكر أو محليات صناعية"
      },
      {
        "labelEn": "Moisture",
        "labelAr": "الرطوبة",
        "valueEn": "Under 18% moisture content",
        "valueAr": "أقل من 18% مطابقة للمواصفات القياسية"
      },
      {
        "labelEn": "HMF Level",
        "labelAr": "مستوى HMF",
        "valueEn": "Less than 15 mg/kg (freshly harvested)",
        "valueAr": "أقل من 15 ملجم/كجم مما يؤكد طزاجة العسل"
      }
    ]
  },
  {
    "id": "prod-food-olives",
    "code": "SBA-PRD-OLV01",
    "sector": "food",
    "categoryKey": "olives-products",
    "categoryEn": "Olives & Olive Products",
    "categoryAr": "الزيتون ومنتجات الزيتون",
    "nameEn": "Egyptian Table Olives (Kalamata, Manzanilla & Picual)",
    "nameAr": "زيتون مائدة مصري فاخر (كلاماتا، منزانيللا، وبيكوال)",
    "taglineEn": "Whole, pitted, sliced, and stuffed table olives cured naturally in light brine.",
    "taglineAr": "زيتون مائدة كامل، مخلي، شرائح، ومحشو بالجزر والفلفل، مخلل طبيعيًا في محلول ملحي متوازن.",
    "descriptionEn": "Carefully handpicked from Mediterranean coastal groves and Siwa Oasis. Processed under strict hygiene and calibrated for size counts, firmness, and rich taste.",
    "descriptionAr": "مقطوف بعناية يدويًا من مزارع الساحل الشمالي وواحة سيوة، ومصنع وفق أحدث المعايير الصحية العالمية لضمان القرمشة والطعم المتوسطي الأصيل.",
    "image": "/BG/Natural & Agri-Food Products/Table Olives.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1 FCL (20ft container / approx. 18-20 metric tons)",
    "moqAr": "حاوية 20 قدم كاملة (حوالي 18-20 طن متري)",
    "packagingEn": "150 kg food-grade plastic drums, 10 kg tins, or 1 kg vacuum pouches.",
    "packagingAr": "براميل بلاستيكية غذائية 150 كجم، صفيح 10 كجم، أو أكياس مفرغة 1 كجم.",
    "specifications": [
      {
        "labelEn": "Varieties",
        "labelAr": "الأصناف",
        "valueEn": "Kalamata, Manzanilla, Picual, Maraki",
        "valueAr": "كلاماتا، منزانيللا، بيكوال، مراقي"
      },
      {
        "labelEn": "Caliber Counts",
        "labelAr": "المعايرة والحجم",
        "valueEn": "140/160, 160/180, 200/220 pieces/kg",
        "valueAr": "140/160، 160/180، 200/220 حبة/كجم"
      }
    ]
  },
  {
    "id": "prod-food-oil-evoo",
    "code": "SBA-PRD-OIL01",
    "sector": "food",
    "categoryKey": "olive-oil",
    "categoryEn": "Olive Oil",
    "categoryAr": "زيت الزيتون",
    "nameEn": "Cold-Pressed Extra Virgin Olive Oil (Acidity < 0.5%)",
    "nameAr": "زيت زيتون بكر ممتاز معصور على البارد (حموضة < 0.5%)",
    "taglineEn": "First cold-extraction virgin olive oil with rich polyphenols, golden-green hue, and fruity aroma.",
    "taglineAr": "عصرة أولى على البارد بدون معالجة حرارية أو كيميائية، غني بمضادات الأكسدة وبنكهة فاكهية متوازنة.",
    "descriptionEn": "Extracted exclusively by mechanical means within 24 hours of harvest. Free from chemical solvents, with acidity strictly under 0.5% and low peroxide values conforming to IOC standards.",
    "descriptionAr": "مستخلص بالطرق الميكانيكية البحتة خلال 24 ساعة من قطف الزيتون. خالٍ تمامًا من المذيبات الكيميائية، بنسبة حموضة أقل من 0.5% مطابقة لمعايير المجلس الدولي للزيتون (IOC).",
    "image": "/BG/Natural & Agri-Food Products/Olive Oil Grades.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "2,000 Litres (bulk IBC) / 500 cartons (bottles)",
    "moqAr": "2,000 لتر (حاويات IBC) / 500 كرتونة (عبوات زجاج)",
    "packagingEn": "1,000L IBC totes, 5L tin canisters, or dark UV-protective Marasca glass bottles (250/500/750ml).",
    "packagingAr": "خزانات IBC سعة 1,000 لتر، صفائح 5 لتر، أو زجاجات ماراسكا داكنة واقية من الضوء.",
    "specifications": [
      {
        "labelEn": "Acidity (Oleic Acid)",
        "labelAr": "نسبة الحموضة",
        "valueEn": "≤ 0.5% at bottling",
        "valueAr": "أقل من أو يساوي 0.5% وقت التعبئة"
      },
      {
        "labelEn": "Peroxide Value",
        "labelAr": "رقم البيروكسيد",
        "valueEn": "< 10 meq O2/kg",
        "valueAr": "أقل من 10 ملي مكافئ أكسجين/كجم"
      },
      {
        "labelEn": "Extraction Method",
        "labelAr": "طريقة الاستخلاص",
        "valueEn": "Continuous centrifugal cold-press (< 27°C)",
        "valueAr": "عصر طرد مركزي ميكانيكي على البارد (< 27 مئوية)"
      }
    ]
  },
  {
    "id": "prod-food-oil-virgin",
    "code": "SBA-PRD-OIL02",
    "sector": "food",
    "categoryKey": "olive-oil",
    "categoryEn": "Olive Oil",
    "categoryAr": "زيت الزيتون",
    "nameEn": "Pure Virgin & Organic Olive Oil for Culinary & Food Processing",
    "nameAr": "زيت زيتون بكر طبيعي وعضوي للتصنيع الغذائي والطهي",
    "taglineEn": "Natural mechanical extraction with acidity < 1.2%, ideal for gourmet canning, dressings, and institutional kitchens.",
    "taglineAr": "مستخلص طبيعيًا بنسبة حموضة أقل من 1.2% مخصص لشركات الصناعات الغذائية والمطابخ الفندقية والتعبئة التجارية.",
    "descriptionEn": "Delivers balanced flavor profiles and high smoke points for premium culinary and food manufacturing applications. Shipped with complete international laboratory analysis and phytosanitary certificates.",
    "descriptionAr": "مثالي للصناعات الغذائية الراقية مثل تعليب التونة والمخللات والصلصات، ويتم شحنه مصحوبًا بشهادات التحليل المخبري وشهادات الصحة النباتية المعتمدة.",
    "image": "/BG/Natural & Agri-Food Products/Olive Oil.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "5,000 Litres (bulk IBC containers)",
    "moqAr": "5,000 لتر (حاويات وخزانات صناعية)",
    "packagingEn": "1,000L food-grade IBC containers, 200L lined steel drums, or 20L Jerry cans.",
    "packagingAr": "خزانات IBC سعة 1,000 لتر، براميل مبطنة 200 لتر، أو جراكين غذائية 20 لتر.",
    "specifications": [
      {
        "labelEn": "Acidity",
        "labelAr": "نسبة الحموضة",
        "valueEn": "≤ 1.2% free oleic acid",
        "valueAr": "أقل من أو يساوي 1.2% حمض أوليك حر"
      },
      {
        "labelEn": "Purity Grade",
        "labelAr": "درجة النقاء",
        "valueEn": "100% unrefined pure virgin olive oil",
        "valueAr": "زيت زيتون بكر نقي 100% غير مكرر"
      }
    ]
  },
  {
    "id": "prod-food-dates-siwi",
    "code": "SBA-PRD-DAT01",
    "sector": "food",
    "categoryKey": "dates-palm",
    "categoryEn": "Dates & Palm Products",
    "categoryAr": "التمور ومنتجات النخيل",
    "nameEn": "Premium Egyptian Siwi Oasis Semi-Dry Dates",
    "nameAr": "تمور الواحات السيوية الفاخرة نصف الجافة (صعيدي/سيوي)",
    "taglineEn": "Selected Egyptian Siwi dates naturally cured, washed, calibrated, and packed under rigorous hygiene.",
    "taglineAr": "تمور سيوية نخب أول مفرزة ومغسولة ومجففة طبيعيًا في واحة سيوة المشهورة بأجود أنواع النخيل.",
    "descriptionEn": "Rich in natural dietary fiber and minerals with a distinctive caramel sweetness. Available loose, pressed in vacuum blocks, or pitted for retail and industrial confectionery.",
    "descriptionAr": "تتميز بنكهة الكراميل الغنية وقوامها نصف الجاف الطري المناسب للاستهلاك المباشر أو الصناعات الغذائية، معقمة ومطابقة لأعلى اشتراطات سلامة الغذاء.",
    "image": "/BG/Natural & Agri-Food Products/Dates.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "5 metric tons / 1 FCL",
    "moqAr": "5 أطنان مترية / حاوية تصدير",
    "packagingEn": "500g/1kg/2kg branded retail cartons, or 10kg loose bulk master boxes.",
    "packagingAr": "عبوات كرتونية تجارية 500 جم و1 و2 كجم أو كراتين توريد بالجملة 10 كجم.",
    "specifications": [
      {
        "labelEn": "Moisture",
        "labelAr": "نسبة الرطوبة",
        "valueEn": "18% - 22% (soft semi-dry texture)",
        "valueAr": "من 18% إلى 22% قوام نصف جاف طري"
      },
      {
        "labelEn": "Defect Rate",
        "labelAr": "نسبة العيوب",
        "valueEn": "Under 2% visual defects",
        "valueAr": "أقل من 2% خالية من التلف أو الحشرات"
      }
    ]
  },
  {
    "id": "prod-food-dates-medjool",
    "code": "SBA-PRD-DAT02",
    "sector": "food",
    "categoryKey": "dates-palm",
    "categoryEn": "Dates & Palm Products",
    "categoryAr": "التمور ومنتجات النخيل",
    "nameEn": "Luxury Egyptian Jumbo & Super Jumbo Medjool Dates",
    "nameAr": "تمور المجدول الملكية الفاخرة (جامبو وسوبر جامبو)",
    "taglineEn": "The King of Dates: large plump fruit, thin translucent skin, and succulent honey-like flesh.",
    "taglineAr": "ملك التمور بحجم حبة ضخم وقشرة رقيقة ومذاق عسلي فاخر، مصنف ومفرز بالليزر بدقة فائقة.",
    "descriptionEn": "Grown in the sunny microclimates of Toshka and the New Valley. Sorted by computerized imaging for weight, caliber, and minimal skin separation (< 5%) for luxury export gifting and gourmet markets.",
    "descriptionAr": "مزروعة في مزارع توشكا والوادي الجديد الحديثة، وتخضع لفرز إلكتروني متقدم لقياس الوزن ونسبة التصاق القشرة لتقديم منتج نخب ممتاز للأسواق الأوروبية والخليجية.",
    "image": "/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "3 metric tons (refrigerated container)",
    "moqAr": "3 أطنان مترية (حاوية مبردة)",
    "packagingEn": "1kg and 2kg luxury gift boxes, or 5kg master boxes under strict temperature control.",
    "packagingAr": "علب هدايا فاخرة 1 كجم و2 كجم، أو كراتين تصدير 5 كجم مبردة.",
    "specifications": [
      {
        "labelEn": "Grades Available",
        "labelAr": "الدرجات المتاحة",
        "valueEn": "Super Jumbo (>27g), Jumbo (23-26g), Large (20-22g)",
        "valueAr": "سوبر جامبو (>27 جم)، جامبو (23-26 جم)، كبير (20-22 جم)"
      },
      {
        "labelEn": "Skin Separation",
        "labelAr": "انفصال القشرة",
        "valueEn": "< 5% (Grade Premium)",
        "valueAr": "أقل من 5% للدرجة الممتازة الأولى"
      }
    ]
  },
  {
    "id": "prod-food-dates-paste",
    "code": "SBA-PRD-DAT03",
    "sector": "food",
    "categoryKey": "dates-palm",
    "categoryEn": "Dates & Palm Products",
    "categoryAr": "التمور ومنتجات النخيل",
    "nameEn": "Pure Natural Date Paste & High-Brix Date Molasses (Silan)",
    "nameAr": "عجينة التمر الطبيعية ودبس التمر الصافي عالي التركيز",
    "taglineEn": "100% pure date puree and date syrup with zero added sugar or preservatives.",
    "taglineAr": "مستخلص وعجينة تمور طبيعية 100% خالية من السكر المضاف أو المواد الحافظة لصناعات المخابز والحلويات.",
    "descriptionEn": "Industrial-grade natural date ingredients for energy bar manufacturers, bakeries, ice-cream makers, and healthy snack producers. Smooth texture and calibrated Brix levels.",
    "descriptionAr": "مكونات طبيعية مخصصة للمصانع والحلوانية لإنتاج ألواح الطاقة والبسكويت، تتميز بنعومة فائقة ونسبة تركيز سكريات طبيعية مضبوطة معمليًا.",
    "image": "/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "2 metric tons",
    "moqAr": "2 طن متري",
    "packagingEn": "10kg block cartons lined with polyethylene, or 25kg/250kg aseptic drums for date syrup.",
    "packagingAr": "قوالب كرتون مبطنة 10 كجم، أو براميل معقمة 25/250 كجم للدبس.",
    "specifications": [
      {
        "labelEn": "Brix (Molasses)",
        "labelAr": "درجة التركيز (الدبس)",
        "valueEn": "72° - 75° Brix",
        "valueAr": "من 72 إلى 75 بريكس"
      },
      {
        "labelEn": "Additives",
        "labelAr": "المواد المضافة",
        "valueEn": "0% additives, 100% date fruit derived",
        "valueAr": "خالٍ تمامًا من أي إضافات كيميائية أو سكر مضاف"
      }
    ]
  },
  {
    "id": "prod-food-herbs-chamomile",
    "code": "SBA-PRD-HRB01",
    "sector": "food",
    "categoryKey": "herbs-plants",
    "categoryEn": "Herbs & Natural Plants",
    "categoryAr": "الأعشاب والنباتات الطبية",
    "nameEn": "Organic Dried Egyptian Chamomile Flowers, Peppermint & Marjoram",
    "nameAr": "أزهار البابونج المصري المجفف، النعناع الفلفلي، والمردقوش العضوي",
    "taglineEn": "Hand-picked, sun-dried Egyptian botanical herbs sorted and steam-sterilized for herbal teas and pharma.",
    "taglineAr": "أعشاب ونباتات طبية وعطرية مجففة طبيعيًا ومفرزة بالليزر ومبخرة وفق مواصفات التصدير لأوروبا والخليج.",
    "descriptionEn": "Sourced from certified organic growers along the Nile basin in Fayoum and Beni Suef. Rigorously inspected for heavy metals, pesticide residues, and essential oil content. Available whole or TBC (tea-bag cut).",
    "descriptionAr": "مستوردة من مزارع معتمدة بالفيوم وبني سويف، مفحوصة لنسب الزيوت العطرية ومتبقيات المبيدات والمعادن الثقيلة، ومتاحة أزهار كاملة أو مجروشة لأكياس الشاي.",
    "image": "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1 metric ton per variety",
    "moqAr": "1 طن متري لكل صنف عشب",
    "packagingEn": "20-25 kg multi-wall kraft paper bags or compressed polypropylene bales.",
    "packagingAr": "أكياس كرافت متعددة الطبقات 20-25 كجم أو بالات بولي بروبلين محكمة.",
    "specifications": [
      {
        "labelEn": "Sterilization",
        "labelAr": "التعقيم",
        "valueEn": "HTST Steam sterilized or controlled drying",
        "valueAr": "تعقيم بالبخار بدرجة حرارة عالية أو تجفيف مضبوط"
      },
      {
        "labelEn": "Purity",
        "labelAr": "درجة النقاء",
        "valueEn": "≥ 99% minimum botanical purity",
        "valueAr": "99% حد أدنى للنقاء العشبي خالي من الشوائب"
      }
    ]
  },
  {
    "id": "prod-food-herbs-hibiscus",
    "code": "SBA-PRD-HRB02",
    "sector": "food",
    "categoryKey": "herbs-plants",
    "categoryEn": "Herbs & Natural Plants",
    "categoryAr": "الأعشاب والنباتات الطبية",
    "nameEn": "Whole Flower Egyptian Hibiscus (Karkadeh) & Dried Botanicals",
    "nameAr": "كركديه مصري أزهار كاملة ممتازة ونباتات عطرية مجففة",
    "taglineEn": "Deep crimson Egyptian Aswan-grade hibiscus sabdariffa with high anthocyanin and sour fruity notes.",
    "taglineAr": "كركديه أسواني زاهي الحمرة كامل الكؤوس غني بمضادات الأكسدة وبنكهة حمضية منعشة ومطلوبة عالميًا.",
    "descriptionEn": "Carefully sifted to remove dust and broken fragments. Perfect for cold brew beverages, herbal infusions, natural colorant extraction, and food processing.",
    "descriptionAr": "مغربل بعناية لإزالة الأتربة والكسر، ومناسب للمشروبات المثلجة والساخنة، واستخلاص الصبغات الطبيعية الغذائية دون أي ملوثات.",
    "image": "/BG/Natural & Agri-Food Products/Herbs & Natural Plants.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "2 metric tons",
    "moqAr": "2 طن متري",
    "packagingEn": "20 kg woven polypropylene bags with inner polyethylene moisture liner.",
    "packagingAr": "أكياس منسوجة 20 كجم مع بطانة داخلية واقية من الرطوبة.",
    "specifications": [
      {
        "labelEn": "Flower Integrity",
        "labelAr": "سلامة الزهرة",
        "valueEn": "Whole calyxes > 85%, fine sifted",
        "valueAr": "كؤوس كاملة أكثر من 85% مع غربلة دقيقة"
      },
      {
        "labelEn": "Anthocyanin Content",
        "labelAr": "صبغة الأنثوسيانين",
        "valueEn": "High natural color intensity (> 1.5%)",
        "valueAr": "كثافة لونية طبيعية عالية (> 1.5%)"
      }
    ]
  },
  {
    "id": "prod-food-spices-cumin",
    "code": "SBA-PRD-SPC01",
    "sector": "food",
    "categoryKey": "spices-seasonings",
    "categoryEn": "Spices & Seasonings",
    "categoryAr": "التوابل والبهارات",
    "nameEn": "Premium Whole & Ground Spices (Cumin, Coriander & Fennel)",
    "nameAr": "توابل وبهارات طبيعية حب ومطحونة (كمون، كزبرة، شمر، وينسون)",
    "taglineEn": "Aromatic Egyptian culinary spices with high volatile oil content and deep pungent aromas.",
    "taglineAr": "بهارات وتوابل زراعية غنية بالزيوت الطيارة، مفرزة آليًا ونظيفة جاهزة للتعبئة أو الصناعات الغذائية.",
    "descriptionEn": "Commercial bulk supply of whole seeds and fine ground culinary spices for spice mills, food manufacturers, and retail packers worldwide.",
    "descriptionAr": "توريد تجاري بالجملة لحبوب التوابل الكاملة أو المطحونة بدقة لمصانع الأغذية وشركات التعبئة والتغليف والتجارة الدولية.",
    "image": "/BG/Natural & Agri-Food Products/Spices & Seasonings.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "2 metric tons (consolidated available)",
    "moqAr": "2 طن متري (يمكن الدمج بين عدة أصناف)",
    "packagingEn": "25 kg double-lined woven polypropylene bags.",
    "packagingAr": "أكياس بولي بروبلين منسوجة ومبطنة سعة 25 كجم.",
    "specifications": [
      {
        "labelEn": "Volatile Oils",
        "labelAr": "نسبة الزيوت الطيارة",
        "valueEn": "> 2.5% in cumin, > 0.8% in coriander",
        "valueAr": "أعلى من 2.5% في الكمون وأعلى من 0.8% في الكزبرة"
      },
      {
        "labelEn": "Moisture",
        "labelAr": "الرطوبة",
        "valueEn": "Max 10-12%",
        "valueAr": "10-12% حد أقصى"
      }
    ]
  },
  {
    "id": "prod-food-spices-anise",
    "code": "SBA-PRD-SPC02",
    "sector": "food",
    "categoryKey": "spices-seasonings",
    "categoryEn": "Spices & Seasonings",
    "categoryAr": "التوابل والبهارات",
    "nameEn": "Selected Egyptian Anise Seeds & Nigella Sativa (Black Seed)",
    "nameAr": "حبوب الينسون المصري الفاخر وحبة البركة الطبيعية (الحبة السوداء)",
    "taglineEn": "Mechanically cleaned and color-sorted Egyptian anise and black cumin seeds with intense aroma.",
    "taglineAr": "حبوب ينسون وحبة بركة طبيعية نظيفة ومفروزة ليزريًا بنسبة نقاء تتجاوز 99% ومناسبة للاستخدام الدوائي والغذائي.",
    "descriptionEn": "Export-grade whole aromatic seeds known for therapeutic and culinary values. Shipped to pharmaceutical labs, herbal tea brands, and commercial bakeries across Europe and the GCC.",
    "descriptionAr": "بذور زراعية ممتازة مشهورة بقيمتها الغذائية والعلاجية، يتم تصديرها إلى مصانع الدواء وماركات شاي الأعشاب والمخابز الكبرى في أوروبا والخليج العربي.",
    "image": "/BG/Natural & Agri-Food Products/Spices and Seasonings.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1 metric ton",
    "moqAr": "1 طن متري",
    "packagingEn": "25 kg multi-ply paper bags or 50kg PP sacks.",
    "packagingAr": "أكياس ورقية متعددة الطبقات 25 كجم أو شكائر 50 كجم.",
    "specifications": [
      {
        "labelEn": "Purity Level",
        "labelAr": "نسبة النظافة والنقاء",
        "valueEn": "≥ 99.5% machine-cleaned",
        "valueAr": "99.5% نقاء ميكانيكي معقم ومفروز"
      },
      {
        "labelEn": "Essential Oil",
        "labelAr": "الزيت العطري",
        "valueEn": "≥ 2.0% in aniseed",
        "valueAr": "أكبر من أو يساوي 2.0% في الينسون"
      }
    ]
  },
  {
    "id": "prod-food-powder-citrus",
    "code": "SBA-PRD-PWD01",
    "sector": "food",
    "categoryKey": "powdered-juices",
    "categoryEn": "Natural Powdered Juices & Ingredients",
    "categoryAr": "مستخلصات وبودرة العصائر الطبيعية والمكونات الغذائية",
    "nameEn": "Spray-Dried Natural Orange & Lemon Juice Powders & Drink Bases",
    "nameAr": "بودرة عصير البرتقال والليمون الطبيعية المجففة بالرذاذ وقواعد المشروبات",
    "taglineEn": "100% natural spray-dried citrus powders retaining fresh aroma, vitamins, and instant cold-water solubility.",
    "taglineAr": "بودرة عصائر حمضيات طبيعية مجففة بالرذاذ خالية من المواد الحافظة سريعة الذوبان للصناعات الغذائية والمشروبات.",
    "descriptionEn": "Highly soluble fruit powders retaining natural Vitamin C, authentic citrus color, and juicy acidity. Ideal for instant drink sachets, confectionery fillings, bakery glazes, and dairy products.",
    "descriptionAr": "مساحيق فواكه طبيعية سريعة الذوبان تحافظ على فيتامين C والنكهة الطازجة، وتستخدم في خلطات العصائر الفورية، السكاكر، المعجنات، ومنتجات الألبان والأغذية الصحية.",
    "image": "/BG/Natural & Agri-Food Products/Natural Powdered Fruit & Vegetable Juices.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "500 kg",
    "moqAr": "500 كجم",
    "packagingEn": "20 kg aluminum foil barrier bags inside heavy-duty cartons.",
    "packagingAr": "أكياس فويل ألومنيوم عازلة للرطوبة 20 كجم داخل كراتين متينة.",
    "specifications": [
      {
        "labelEn": "Solubility",
        "labelAr": "سرعة الذوبان",
        "valueEn": "100% cold-water instant soluble",
        "valueAr": "ذوبان فوري 100% في الماء البارد"
      },
      {
        "labelEn": "Carrier",
        "labelAr": "المادة الحاملة",
        "valueEn": "Non-GMO Maltodextrin (< 5%) or Pure Fruit",
        "valueAr": "مالتوديكسترين غير معدل وراثيًا أو فاكهة مركزة نقية"
      }
    ]
  },
  {
    "id": "prod-food-powder-botanicals",
    "code": "SBA-PRD-PWD02",
    "sector": "food",
    "categoryKey": "powdered-juices",
    "categoryEn": "Natural Powdered Juices & Ingredients",
    "categoryAr": "مستخلصات وبودرة العصائر الطبيعية والمكونات الغذائية",
    "nameEn": "Instant Natural Botanical Drink Extracts (Hibiscus & Tamarind Powders)",
    "nameAr": "مستخلصات وبودرة المشروبات العشبية الفورية (كركديه وتمر هندي وخروب)",
    "taglineEn": "Standardized herbal extract powders for instant traditional beverage preparation and natural colorants.",
    "taglineAr": "مستخلصات بودرة نباتية سريعة التحضير للمشروبات التراثية والطبيعية ومحسنات النكهة الغذائية.",
    "descriptionEn": "Cold-soluble micro-fine botanical powders produced from selected natural infusions. Free from synthetic colorants or artificial flavor enhancers, offering ready formulation for beverage manufacturers.",
    "descriptionAr": "بودرة نقية مستخلصة من الكركديه والتمر هندي والخروب، خالية من الألوان الصناعية وتمنح المشروبات نكهة طبيعية مركزة وسريعة التحضير للقطاعين الصناعي والتجاري.",
    "image": "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "500 kg",
    "moqAr": "500 كجم",
    "packagingEn": "20 kg food-grade poly-lined aluminum drums or cartons.",
    "packagingAr": "براميل أو كراتين ألومنيوم مبطنة غذائيًا سعة 20 كجم.",
    "specifications": [
      {
        "labelEn": "Moisture Content",
        "labelAr": "نسبة الرطوبة",
        "valueEn": "< 4.5% moisture content",
        "valueAr": "أقل من 4.5% لحفظ النكهة والخواص"
      },
      {
        "labelEn": "Color Index",
        "labelAr": "درجة اللون",
        "valueEn": "100% natural botanical pigment",
        "valueAr": "صبغة نباتية طبيعية 100% بدون أي تلوين اصطناعي"
      }
    ]
  }
];

export const productCategoriesConfig = [
  {
    division: "apparel" as const,
    labelEn: "Ready-Made Garments",
    labelAr: "منتجات الملابس الجاهزة",
    descEn: "Export-certified ready-made garments across Kids & Baby, Women, and Men wear for international buyers, brands, and wholesalers.",
    descAr: "حلول تصنيع وتصدير الملابس الجاهزة المعتمدة للأطفال والنساء والرجال، موجهة للعلامات التجارية والمستوردين وتجار الجملة دولياً.",
    categories: [
      { key: "all", labelEn: "All Apparel", labelAr: "كافة منتجات الملابس" },
      { key: "kids-wear", labelEn: "Kids & Baby Wear", labelAr: "ملابس الأطفال" },
      { key: "womens-wear", labelEn: "Women's Wear", labelAr: "الملابس النسائية" },
      { key: "mens-wear", labelEn: "Men's Wear", labelAr: "الملابس الرجالية" },
      { key: "underwear", labelEn: "Underwear", labelAr: "الملابس الداخلية" },
      { key: "homewear", labelEn: "Homewear", labelAr: "الملابس المنزلية" },
      { key: "sportswear", labelEn: "Sportswear", labelAr: "الملابس الرياضية" },
      { key: "classic-wear", labelEn: "Classic Wear", labelAr: "الملابس الكلاسيكية" },
      { key: "mens-shirts", labelEn: "Men's Shirts", labelAr: "القمصان الرجالية" },
      { key: "womens-lingerie", labelEn: "Women's Lingerie", labelAr: "اللانجري النسائي" }
    ]
  },
  {
    division: "food" as const,
    labelEn: "Natural & Food Products",
    labelAr: "المنتجات الطبيعية والغذائية",
    descEn: "Export-grade natural honey, table olives, extra virgin olive oil, premium dates, and botanical ingredients.",
    descAr: "عسل نحل طبيعي، زيتون مائدة، زيت زيتون بكر ممتاز، تمور فاخرة، وأعشاب وتوابل زراعية معتمدة.",
    categories: [
      { key: "all", labelEn: "All Food Products", labelAr: "كافة المنتجات الغذائية" },
      { key: "honey-bee", labelEn: "Natural Honey & Bee Products", labelAr: "عسل النحل ومنتجات النحل" },
      { key: "olives-products", labelEn: "Olives & Olive Products", labelAr: "الزيتون ومنتجات الزيتون" },
      { key: "olive-oil", labelEn: "Olive Oil", labelAr: "زيت الزيتون" },
      { key: "dates-palm", labelEn: "Dates & Palm Products", labelAr: "التمور ومنتجات النخيل" },
      { key: "herbs-plants", labelEn: "Herbs & Natural Plants", labelAr: "الأعشاب والنباتات الطبية" },
      { key: "spices-seasonings", labelEn: "Spices & Seasonings", labelAr: "التوابل والبهارات" },
      { key: "powdered-juices", labelEn: "Natural Powdered Juices & Ingredients", labelAr: "بودرة العصائر الطبيعية والمكونات" }
    ]
  }
];
