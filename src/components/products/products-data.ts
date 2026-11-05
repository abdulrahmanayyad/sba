// ============================================================================
// SAMI BIN AYYAD GROUP — PRODUCTS REPOSITORY (PHYSICAL GOODS & COMMODITIES)
// Strictly dedicated to tangible goods, equipment, and catalogues available for supply.
// ============================================================================

export type ProductDivision = "apparel" | "food" | "industrial";

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
  categoryEn: string;
  categoryAr: string;
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
  {
    "id": "prod-gar-women",
    "code": "SBA-PRD-WMN01",
    "sector": "apparel",
    "categoryKey": "womens-wear",
    "categoryEn": "Women's Wear",
    "categoryAr": "الملابس النسائية",
    "nameEn": "Women's Contemporary Fashion & Ready-to-Wear Line",
    "nameAr": "تشكيلة الملابس النسائية العصرية والجاهزة",
    "taglineEn": "Refined women's blouses, trousers, tailored sets, and seasonal collections crafted from premium Egyptian fabrics.",
    "taglineAr": "بلوزات، بناطيل، أطقم نسائية مصممة بأعلى معايير الأناقة والراحة من أجود خامات القطن والكتان.",
    "descriptionEn": "A comprehensive manufacturing line for contemporary women's apparel. Includes woven and knit blouses, relaxed-fit pants, and coordinated two-piece sets designed for everyday elegance and durability.",
    "descriptionAr": "خط تصنيع متكامل للملابس النسائية العصرية، يشمل بلوزات قماش وتريكو، بناطيل كاجوال ورسمية، وأطقم متناسقة مصممة لتوفير أقصى درجات الأناقة والراحة اليومية.",
    "image": "/Categories/Kids/Casual/summer/Casual - (8-14) (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "300 pcs / style",
    "moqAr": "300 قطعة / تصميم",
    "packagingEn": "Individual polybag with custom hanger and export carton packing.",
    "packagingAr": "تغليف فردي في كيس شفاف مع شماعة مخصصة وكراتين تصدير مقواة.",
    "specifications": [
      {
        "labelEn": "Material",
        "labelAr": "الخامة",
        "valueEn": "Cotton-Linen, Viscose & Poplin blends",
        "valueAr": "خلائط قطن-كتان، فيسكوز وبوبلين عالي النعومة"
      },
      {
        "labelEn": "Sizes",
        "labelAr": "المقاسات",
        "valueEn": "S, M, L, XL, XXL (European & US sizing)",
        "valueAr": "S, M, L, XL, XXL (مقاسات أوروبية وأمريكية)"
      },
      {
        "labelEn": "Colourways",
        "labelAr": "خيارات الألوان",
        "valueEn": "12+ seasonal pantones with reactive dyeing",
        "valueAr": "أكثر من 12 لونًا موسميًا مع صباغة تفاعلية ثابتة"
      },
      {
        "labelEn": "Customization",
        "labelAr": "التخصيص",
        "valueEn": "Private label tag, custom embroidery and buttons",
        "valueAr": "إضافة علامة العميل التجارية، تطريز وأزرار خاصة"
      }
    ]
  },
  {
    "id": "prod-gar-men",
    "code": "SBA-PRD-MEN01",
    "sector": "apparel",
    "categoryKey": "mens-wear",
    "categoryEn": "Men's Wear",
    "categoryAr": "ملابس رجالية",
    "nameEn": "Men's Premium Cotton Polos, Shirts & Chinos",
    "nameAr": "قمصان بولو وبناطيل تشينو رجالية فاخرة",
    "taglineEn": "Heavyweight combed cotton polos, business-casual oxford shirts, and comfort stretch trousers.",
    "taglineAr": "قمصان بولو قطنية فاخرة، قمصان أكسفورد كاجوال وبناطيل قطنية مرنة عالية التحمل.",
    "descriptionEn": "Precision-tailored men's apparel crafted for long-lasting fit and shape retention. Features double-pique knits, mother-of-pearl style buttons, and anti-wrinkle finishing.",
    "descriptionAr": "أزياء رجالية مصممة ومحاكة بدقة فائقة للحفاظ على القوام والشكل بعد تكرار الغسيل. تشمل أقمشة البيكيه المزدوج، وياقات مقواة، ومعالجة مقاومة للتجعد.",
    "image": "/Categories/Kids/Casual/summer/Casual - (8-14) (10).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "500 pcs / style",
    "moqAr": "500 قطعة / تصميم",
    "packagingEn": "Folded in polybag with collar support in master carton (48 pcs).",
    "packagingAr": "مطوية في كيس شفاف مع دعامات الياقة في كرتونة رئيسية (48 قطعة).",
    "specifications": [
      {
        "labelEn": "Fabric",
        "labelAr": "نوع القماش",
        "valueEn": "100% Giza Egyptian Cotton (220 GSM)",
        "valueAr": "قطن جيزة مصري 100% (وزن 220 جم/م²)"
      },
      {
        "labelEn": "Finish",
        "labelAr": "المعالجة",
        "valueEn": "Bio-washed, anti-pilling and pre-shrunk",
        "valueAr": "غسيل حيوي، معالجة ضد الوبر وضد الانكماش"
      },
      {
        "labelEn": "Sizes",
        "labelAr": "المقاسات",
        "valueEn": "S to 3XL",
        "valueAr": "من S إلى 3XL"
      }
    ]
  },
  {
    "id": "prod-gar-kids",
    "code": "SBA-PRD-KID01",
    "sector": "apparel",
    "categoryKey": "kids-wear",
    "categoryEn": "Kids & Baby Wear",
    "categoryAr": "ملابس الأطفال والرضع",
    "nameEn": "Hypoallergenic Organic Cotton Baby & Kids Collection",
    "nameAr": "تشكيلة ملابس الأطفال والرضع من القطن العضوي الآمن",
    "taglineEn": "OEKO-TEX certified baby rompers, sleepsuits, and kids daily sets with nickel-free closures.",
    "taglineAr": "أطقم وسالوبيتات أطفال معتمدة بشهادة OEKO-TEX 100، كباسين خالية من النيكل وأقمشة فائقة النعومة.",
    "descriptionEn": "Designed exclusively for sensitive young skin. Features tagless labels, expandable lap shoulders, and ultra-soft interlock cotton knits resistant to repeated washing.",
    "descriptionAr": "مصممة خصيصًا لبشرة الأطفال الحساسة، بملصقات مطبوعة بدون حواف خشنة، وفتحات رقبة مرنة، وأقمشة إنترلوك قطنية فائقة النعومة ومقاومة للغسيل المتكرر.",
    "image": "/Categories/Kids/Casual/summer/Casual - (2-5) (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "500 pcs / style",
    "moqAr": "500 قطعة / تصميم",
    "packagingEn": "Hanger pack or polybag with child-safety ventilation holes.",
    "packagingAr": "تغليف علاقة أو أكياس مع فتحات تهوية مطابقة لمعايير سلامة الأطفال.",
    "specifications": [
      {
        "labelEn": "Certification",
        "labelAr": "الشهادات",
        "valueEn": "OEKO-TEX Standard 100 Class 1 (Baby)",
        "valueAr": "معيار OEKO-TEX 100 الفئة الأولى المخصصة للرضع"
      },
      {
        "labelEn": "Age Groups",
        "labelAr": "الأعمار",
        "valueEn": "0-24 months, 2-6 years, 6-12 years",
        "valueAr": "0-24 شهرًا، 2-6 سنوات، 6-12 سنة"
      },
      {
        "labelEn": "Snaps & Trims",
        "labelAr": "الملحقات والكباسين",
        "valueEn": "Prym nickel-free snaps & non-toxic dyes",
        "valueAr": "كباسين ألمانية خالية من النيكل وصبغات غير سامة"
      }
    ]
  },
  {
    "id": "prod-gar-casual",
    "code": "SBA-PRD-CAS01",
    "sector": "apparel",
    "categoryKey": "casual-wear",
    "categoryEn": "Casual Wear",
    "categoryAr": "ملابس كاجوال يومية",
    "nameEn": "Everyday Casual Sets, Hoodies & Denim Wear",
    "nameAr": "أطقم الكاجوال اليومية والسترات وهوديز",
    "taglineEn": "Heavyweight French terry hoodies, printed tees, and relaxed denim bottoms.",
    "taglineAr": "هوديز وسويت شيرت خامة فرينش تيري قطنية فاخرة، تيشرتات مطبوعة وبناطيل جينز مريحة.",
    "descriptionEn": "High-volume casual fashion line utilizing combed compact yarns. Supports screen printing, puff embroidery, pigment dye washes, and custom silicon softeners.",
    "descriptionAr": "خط إنتاج كاجوال عالي الطاقة يعتمد على خيوط القطن الممشط، ويدعم الطباعة الحريرية والنافخة، والغسيل الصبغي المتطور والمعالجة بالسليكون المنعم.",
    "image": "/Categories/Kids/Casual/summer/Casual - (6-12) (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "400 pcs / style",
    "moqAr": "400 قطعة / تصميم",
    "packagingEn": "Folded in barcode polybags inside export 5-ply cartons.",
    "packagingAr": "مطوية في أكياس بباركود داخل كراتين تصدير خماسية الطبقات.",
    "specifications": [
      {
        "labelEn": "Fabric Weights",
        "labelAr": "أوزان الأقمشة",
        "valueEn": "180 GSM (Tees) to 360 GSM (Terry Hoodies)",
        "valueAr": "180 جم (تيشرتات) إلى 360 جم (هوديز ثقيلة)"
      },
      {
        "labelEn": "Printing Options",
        "labelAr": "تقنيات الطباعة",
        "valueEn": "Plastisol, Water-based, Discharge & DTF",
        "valueAr": "بلاستيزول، صبغات مائية، تفريغ وطباعة DTF"
      }
    ]
  },
  {
    "id": "prod-gar-homewear",
    "code": "SBA-PRD-HMW01",
    "sector": "apparel",
    "categoryKey": "homewear",
    "categoryEn": "Homewear & Pyjamas",
    "categoryAr": "الملابس المنزلية والبيجامات",
    "nameEn": "Ultra-Soft Cotton & Modal Loungewear & Pyjama Sets",
    "nameAr": "أطقم ملابس منزلية وبيجامات قطنية ومودال فائقة النعومة",
    "taglineEn": "Breathable homewear sets offering supreme relaxation, thermal balance, and luxury handfeel.",
    "taglineAr": "بيجامات وملابس بيت تجمع بين الملمس الحريري والتهوية الفائقة والمرونة العالية لراحة تدوم طوال اليوم.",
    "descriptionEn": "Manufactured from combed modal-cotton blends and soft waffle knits. Designed with elasticated drawstrings, non-binding cuffs, and smooth flatlock stitching.",
    "descriptionAr": "مصنوعة من مزيج القطن والمودال الفاخر وأقمشة الوافل المريحة، ومزودة بأربطة مطاطية مريحة ودرزات مسطحة تمنع الاحتكاك وتمنح راحة لا تضاهى.",
    "image": "/Categories/Kids/Casual/summer/Casual - (8-14) (15).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "300 sets / style",
    "moqAr": "300 طقم / تصميم",
    "packagingEn": "Polybag with branded ribbon wrap and hangtag.",
    "packagingAr": "تغليف أنيق في أكياس شفافة مع شريط تعبئة وبطاقة العلامة.",
    "specifications": [
      {
        "labelEn": "Composition",
        "labelAr": "التركيب",
        "valueEn": "50% Modal / 50% Combed Cotton or 100% Cotton",
        "valueAr": "50% مودال / 50% قطن ممشط أو 100% قطن خالص"
      },
      {
        "labelEn": "Features",
        "labelAr": "المميزات",
        "valueEn": "Breathable, thermal regulating, wrinkle resistant",
        "valueAr": "تنظيم حراري طبيعي، مقاوم للتجعد وسهل الغسيل"
      }
    ]
  },
  {
    "id": "prod-gar-classic",
    "code": "SBA-PRD-CLS01",
    "sector": "apparel",
    "categoryKey": "classic-wear",
    "categoryEn": "Classic Wear",
    "categoryAr": "الملابس الكلاسيكية",
    "nameEn": "Men's & Women's Classic Formal Shirts & Trousers",
    "nameAr": "القمصان والبناطيل الكلاسيكية والرسمية",
    "taglineEn": "Crisp formal shirts with fusible collar stays and structured classic trousers.",
    "taglineAr": "قمصان رسمية كلاسيكية مع ياقات مقواة وبناطيل قماشية رسمية أنيقة لرجال الأعمال والمؤسسات.",
    "descriptionEn": "Engineered for executive corporate wear and uniform programs. Uses compact single-fold and two-ply fine yarns for a sleek, crisp visual drape and easy-iron performance.",
    "descriptionAr": "مخصصة للمناسبات الرسمية ومجموعات الزي الموحد للشركات. تعتمد على خيوط قطنية فائقة النعومة ومزدوجة تمنح القميص مظهرًا مصقولًا وخصائص سهلة الكي.",
    "image": "/Categories/Kids/Casual/summer/Casual - (8-14) (20).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "400 pcs / style",
    "moqAr": "400 قطعة / تصميم",
    "packagingEn": "Standard carton box with collar butterfly inserts.",
    "packagingAr": "تعبئة رسمية بكرتونة مع مشابك تثبيت ودعامات ياقة ورقية.",
    "specifications": [
      {
        "labelEn": "Yarn Count",
        "labelAr": "نمرة الخيط",
        "valueEn": "60/1 to 100/2 Compact Giza Cotton",
        "valueAr": "من 60/1 إلى 100/2 قطن جيزة كومباكت"
      },
      {
        "labelEn": "Fit Types",
        "labelAr": "أنواع القَصّات",
        "valueEn": "Slim Fit, Regular Fit, Tailored Fit",
        "valueAr": "سليم فيت، قَصّة عادية، وتفصيل مخصص"
      }
    ]
  },
  {
    "id": "prod-gar-sport",
    "code": "SBA-PRD-SPT01",
    "sector": "apparel",
    "categoryKey": "sportswear",
    "categoryEn": "Sportswear & Activewear",
    "categoryAr": "الملابس الرياضية",
    "nameEn": "High-Performance Moisture-Wicking Activewear",
    "nameAr": "ملابس رياضية عالية الأداء بتقنية طرد الرطوبة والجفاف السريع",
    "taglineEn": "Technical athletic jerseys, compression tights, and training shorts with 4-way stretch.",
    "taglineAr": "تيشرتات رياضية تقنية، شورتات وبناطيل تمارين مرنة بأربع اتجاهات مع تقنية سريعة الجفاف.",
    "descriptionEn": "Designed for intense athletic performance. Incorporates breathable mesh panels, antimicrobial yarn treatments, and heat-sealed reflective logos for nighttime visibility.",
    "descriptionAr": "مصممة للأداء الرياضي الشاق، بألواح شبكية للتهوية ومعالجة ضد البكتيريا والروائح، وشعارات عاكسة للضوء مدمجة حراريًا.",
    "image": "/Categories/Kids/Casual/summer/Casual - (8-14) (25).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "300 pcs / style",
    "moqAr": "300 قطعة / تصميم",
    "packagingEn": "Zipper polybag with silica gel and barcode.",
    "packagingAr": "كيس بولي بروبلين بسحاب مع حبيبات سيليكا للحماية وملصق باركود.",
    "specifications": [
      {
        "labelEn": "Tech Fabric",
        "labelAr": "الخامة التقنية",
        "valueEn": "Polyester-Spandex (88/12) with QuickDry tech",
        "valueAr": "بوليستر مع سباندكس (88/12) بتقنية الجفاف الفوري"
      },
      {
        "labelEn": "Stretch",
        "labelAr": "المرونة",
        "valueEn": "4-way mechanical stretch and recovery",
        "valueAr": "تمدد ميكانيكي رباعي الاتجاهات وعودة للقوام"
      }
    ]
  },
  {
    "id": "prod-gar-lingerie",
    "code": "SBA-PRD-LNG01",
    "sector": "apparel",
    "categoryKey": "underwear-lingerie",
    "categoryEn": "Underwear & Lingerie",
    "categoryAr": "الملابس الداخلية واللانجري",
    "nameEn": "Fine Cotton Underwear & Seamless Lingerie Line",
    "nameAr": "الملابس الداخلية القطنية الفاخرة واللانجري بدون درزات",
    "taglineEn": "100% fine Egyptian cotton undershirts, boxers, and seamless women's intimates.",
    "taglineAr": "ملابس داخلية قطنية رجالية ونسائية فائقة النعومة بدون درزات بارزة توفر راحة تامة طوال اليوم.",
    "descriptionEn": "Produced on specialized circular knitting machines with ultra-fine gauge. Flat elastic waistbands, soft-edge bindings, and gentle dyes for continuous skin comfort.",
    "descriptionAr": "تُنتج على ماكينات تريكو دائرية حديثة بدون درزات جانبية، مع أستك مرن ومريح وأصباغ عضوية لا تسبب أي تحسس.",
    "image": "/Categories/Lingerie/Lingerie (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1,000 pcs / model",
    "moqAr": "1,000 قطعة / موديل",
    "packagingEn": "Multi-pack box (2-3 pcs) or luxury hanging card.",
    "packagingAr": "علب كرتونية فاخرة (2-3 قطع) أو أكياس فردية مع شماعة عرض.",
    "specifications": [
      {
        "labelEn": "Knitting",
        "labelAr": "نوع الحياكة",
        "valueEn": "Seamless tube body knits (fine gauge)",
        "valueAr": "حياكة دائرية مفرغة بدون درزات جانبية"
      },
      {
        "labelEn": "Elastic",
        "labelAr": "الأستك والخصر",
        "valueEn": "Jacquard woven plush-back waistband",
        "valueAr": "أستك جاكار مطاطي ناعم الملمس مبطن"
      }
    ]
  },
  {
    "id": "prod-gar-evening",
    "code": "SBA-PRD-EVN01",
    "sector": "apparel",
    "categoryKey": "evening-wear",
    "categoryEn": "Evening Wear",
    "categoryAr": "فساتين السهرة والسواريه",
    "nameEn": "Evening Gowns, Cocktail Dresses & Soirée Collections",
    "nameAr": "فساتين السهرة والمناسبات والأزياء الراقية (سواريه)",
    "taglineEn": "Opulent satin, chiffon, and hand-embroidered evening dresses for formal occasions.",
    "taglineAr": "تصميمات فساتين سهرة راقية تعتمد على الساتان الملكي والشيفون والتطريز الدقيق للمناسبات الخاصة.",
    "descriptionEn": "Dedicated couture and special occasion manufacturing unit. Features built-in corsetry, hand-placed crystal and bead work, and fine French lace trims.",
    "descriptionAr": "وحدة تصنيع مخصصة لفساتين المناسبات الراقية، تشمل كورسيهات داخلية مثبتة، تطريز يدوي متقن بالخرز والكريستال، وأقمشة دانتيل وشيفون فرنسي.",
    "image": "/Categories/Soirée/Soirée (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "100 pcs / style",
    "moqAr": "100 قطعة / تصميم",
    "packagingEn": "Garment suit bag with zipper in protective wardrobe carton.",
    "packagingAr": "حقيبة قماشية بسحاب لحفظ الفستان داخل كرتونة مخصصة للملابس الراقية.",
    "specifications": [
      {
        "labelEn": "Fabrics",
        "labelAr": "الأقمشة",
        "valueEn": "Silk Satin, Chiffon, Tulle, Crepe & Lace",
        "valueAr": "ساتان حريري، شيفون، تول، كريب ودانتيل"
      },
      {
        "labelEn": "Finishing",
        "labelAr": "التشطيب",
        "valueEn": "Hand-embroidery, invisible YKK zipper, lining",
        "valueAr": "تطريز يدوي دقيق، سحاب YKK مخفي وبطانة داخلية ناعمة"
      }
    ]
  },
  {
    "id": "prod-gar-abaya",
    "code": "SBA-PRD-ABY01",
    "sector": "apparel",
    "categoryKey": "abayas",
    "categoryEn": "Abayas",
    "categoryAr": "العبايات والأزياء المحتشمة",
    "nameEn": "Luxury Modest Abayas, Kaftans & Khaleeji Capes",
    "nameAr": "العبايات الخليجية الفاخرة والقفطان والأزياء المحتشمة",
    "taglineEn": "Tailored from premium Nada, crepe, and linen fabrics with refined sleeve detailing and matching sheilas.",
    "taglineAr": "مفصلة من أقمشة ندى الفاخرة والكريب الملكي، مع تطريز راقٍ على الأكمام وشيلات متناسقة.",
    "descriptionEn": "Crafted for Gulf and international modest fashion markets. Characterized by deep rich blacks, lightweight breathability in hot climates, and impeccable draping.",
    "descriptionAr": "مخصصة للأسواق الخليجية والدولية لأزياء المحتشمات، وتتميز بسواد داكن غني، وأقمشة خفيفة مناسبة للأجواء الحارة وانسيابية مريحة.",
    "image": "/Categories/Kids/Dresses/winter/Winter - Dresses - (3-6) (1).jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "150 pcs / style",
    "moqAr": "150 قطعة / تصميم",
    "packagingEn": "Luxury branded gift box or protective garment bag.",
    "packagingAr": "صندوق هدايا فاخر أو كيس ملابس أنيق مع الشيلة المتطابقة.",
    "specifications": [
      {
        "labelEn": "Fabric Source",
        "labelAr": "نوع القماش",
        "valueEn": "Premium Royal Crepe & Nada Fabric",
        "valueAr": "كريب ملكي كوري وأقمشة ندى الممتازة"
      },
      {
        "labelEn": "Color",
        "labelAr": "اللون",
        "valueEn": "Jet Deep Black (Color-fast)",
        "valueAr": "أسود فاحم عميق وثابت لا يبهت"
      }
    ]
  },
  {
    "id": "prod-gar-fabrics",
    "code": "SBA-PRD-FAB01",
    "sector": "apparel",
    "categoryKey": "fabrics-textiles",
    "categoryEn": "Fabrics & Textiles",
    "categoryAr": "الأقمشة والمنسوجات",
    "nameEn": "Woven & Knitted Industrial Raw Fabrics & Yarns",
    "nameAr": "الأقمشة النسيجية والتريكو الخام والغزول الصناعية",
    "taglineEn": "Wholesale fabric rolls including Single Jersey, Interlock, Rib, Piqué, French Terry and Poplin.",
    "taglineAr": "توريد أثواب وأقمشة قطنية خام ومصبوغة بالجملة: سنجل جيرسيه، إنترلوك، ريب، بيكيه، وبوبلين.",
    "descriptionEn": "Direct supply of certified circular-knitted and shuttle-woven fabrics for garment factories and fashion houses. Fully tested for yarn count, tensile strength, and color fastness.",
    "descriptionAr": "توريد مباشر لأثواب الأقمشة التريكو والنسيج لمصانع الملابس ودور الأزياء، مع اختبارات الجودة المعتمدة لشد الخيط وثبات الألوان ونسب الانكماش.",
    "image": "/BG/Apparel Manufacturing/Textile Mill & Internal Dyeing.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "500 kg / colour / quality",
    "moqAr": "500 كجم / لون / نوع قماش",
    "packagingEn": "Standard roll packaging with plastic outer wrap and lot labels.",
    "packagingAr": "لفائف وأثواب قماش ملفوفة ببلاستيك واقٍ مع بطاقات بيانات الدفعة.",
    "specifications": [
      {
        "labelEn": "Widths",
        "labelAr": "عرض القماش",
        "valueEn": "160 cm to 220 cm open-width or tubular",
        "valueAr": "160 سم إلى 220 سم مفتوح أو أسطواني"
      },
      {
        "labelEn": "Weights",
        "labelAr": "الأوزان",
        "valueEn": "120 GSM to 420 GSM",
        "valueAr": "من 120 إلى 420 جم/م²"
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
    "id": "prod-food-oil",
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
    "id": "prod-food-dates",
    "code": "SBA-PRD-DAT01",
    "sector": "food",
    "categoryKey": "dates-palm",
    "categoryEn": "Dates & Palm Products",
    "categoryAr": "التمور ومنتجات النخيل",
    "nameEn": "Premium Egyptian Medjool & Siwi Semi-Dry Dates",
    "nameAr": "تمور المجدول الفاخرة والتمور السيوية نصف الجافة",
    "taglineEn": "Jumbo Medjool and premium Siwi dates sorted by moisture, size, and skin separation.",
    "taglineAr": "تمور مجدول جامبو وسيوية فاخرة مفرزة ومغسولة ومجففة وفق أرقى مواصفات التصدير.",
    "descriptionEn": "Naturally grown in Egyptian oases and southern valleys. Packed with natural energy, dietary fiber, and essential minerals. Offered in whole with pit, pitted, or date paste formats.",
    "descriptionAr": "مزروعة طبيعيًا في واحات مصر والوادي الجديد، تتميز بالحلاوة المتوازنة وخلوها من الإضافات الكيميائية. متوفرة كاملة بنوى، منزوعة النوى، أو في هيئة عجينة تمور للصناعات الغذائية.",
    "image": "/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "5 metric tons / 1 FCL",
    "moqAr": "5 أطنان مترية / حاوية تصدير",
    "packagingEn": "1kg, 2kg, 5kg luxury retail cartons or 10kg bulk master boxes.",
    "packagingAr": "عبوات كرتونية فاخرة 1، 2، 5 كجم أو كراتين توريد صناعي 10 كجم.",
    "specifications": [
      {
        "labelEn": "Grade Types",
        "labelAr": "الدرجات المتاحة",
        "valueEn": "Medjool (Jumbo, Large, Medium) & Siwi Grade A",
        "valueAr": "مجدول (جامبو، كبير، متوسط) وسيوي نخب أول"
      },
      {
        "labelEn": "Skin Separation",
        "labelAr": "انفصال القشرة",
        "valueEn": "Under 5% (Jumbo Medjool)",
        "valueAr": "أقل من 5% لتمور المجدول الجامبو"
      },
      {
        "labelEn": "Moisture Content",
        "labelAr": "نسبة الرطوبة",
        "valueEn": "18% - 22% (soft semi-dry)",
        "valueAr": "من 18% إلى 22% نصف جاف طري"
      }
    ]
  },
  {
    "id": "prod-food-herbs",
    "code": "SBA-PRD-HRB01",
    "sector": "food",
    "categoryKey": "herbs-plants",
    "categoryEn": "Herbs & Natural Plants",
    "categoryAr": "الأعشاب والنباتات الطبية",
    "nameEn": "Organic Dried Egyptian Chamomile, Peppermint & Hibiscus",
    "nameAr": "الأعشاب الطبية والعطرية (بابونج، نعناع، كركديه، ومردقوش)",
    "taglineEn": "Hand-picked, sun-dried Egyptian botanical herbs sorted and steam-sterilized for tea and extraction.",
    "taglineAr": "أعشاب ونباتات طبية وعطرية مجففة طبيعيًا ومفرزة بالليزر ومبخرة وفق مواصفات التصدير لأوروبا والخليج.",
    "descriptionEn": "Sourced from certified growers along the Nile. Rigorously inspected for heavy metals, pesticide residues, and essential oil levels. Available whole, crushed, or fine-cut for tea bags.",
    "descriptionAr": "مستوردة من مزارع معتمدة بالفيوم وصعيد مصر، مفحوصة لنسب الزيوت العطرية ومتبقيات المبيدات والمعادن الثقيلة، ومتاحة أزهار كاملة أو مجروشة لأكياس الشاي.",
    "image": "/BG/Natural & Agri-Food Products/Aromatic Herbs & Natural Botanicals.jpg",
    "originEn": "Egypt",
    "originAr": "جمهورية مصر العربية",
    "originFlag": "🇪🇬",
    "moqEn": "1 metric ton per herb",
    "moqAr": "1 طن متري لكل صنف عشب",
    "packagingEn": "20-25 kg multi-wall craft paper bags or woven polypropylene bales.",
    "packagingAr": "أكياس كرافت متعددة الطبقات 20-25 كجم أو بالات بولي بروبلين محكمة.",
    "specifications": [
      {
        "labelEn": "Sterilization",
        "labelAr": "التعقيم",
        "valueEn": "Steam sterilized or natural sun drying",
        "valueAr": "تعقيم بالبخار الطبيعي أو تجفيف هوائي محمي"
      },
      {
        "labelEn": "Purity",
        "labelAr": "درجة النقاء",
        "valueEn": "99% minimum botanical purity",
        "valueAr": "99% حد أدنى للنقاء العشبي خالي من الشوائب"
      }
    ]
  },
  {
    "id": "prod-food-spices",
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
    "id": "prod-food-powder",
    "code": "SBA-PRD-PWD01",
    "sector": "food",
    "categoryKey": "powdered-juices",
    "categoryEn": "Natural Powdered Juices & Ingredients",
    "categoryAr": "مستخلصات وبودرة العصائر الطبيعية والمكونات الغذائية",
    "nameEn": "Spray-Dried Natural Fruit & Vegetable Powders & Instant Drink Bases",
    "nameAr": "بودرة العصائر الطبيعية المجففة بالرذاذ والمكونات الغذائية الفورية",
    "taglineEn": "100% natural spray-dried orange, lemon, pomegranate, and botanical drink powders.",
    "taglineAr": "بودرة فواكه وعصائر مجففة بالرذاذ خالية من المواد الحافظة سريعة الذوبان للصناعات الغذائية والمشروبات.",
    "descriptionEn": "Highly soluble powders retaining natural vitamins, color, and fruit notes. Ideal for instant drink mixes, bakery glazes, dairy flavoring, and nutritional formulations.",
    "descriptionAr": "مساحيق سريعة الذوبان تحافظ على الفيتامينات واللون والرائحة الطبيعية للفاكهة، وتستخدم في خلطات العصائر الفورية، المعجنات، ومنتجات الألبان والأغذية الصحية.",
    "image": "/BG/Natural & Agri-Food Products/Natural Powdered Juices & Ingredients.jpg",
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
    "id": "prod-ind-ultrasonic",
    "code": "SBA-PRD-ULT01",
    "sector": "industrial",
    "categoryKey": "ultrasonic-sensors",
    "categoryEn": "Ultrasonic Sensors",
    "categoryAr": "حساسات الموجات فوق الصوتية الصناعية",
    "nameEn": "Industrial Non-Contact Ultrasonic Level & Flow Sensors",
    "nameAr": "حساسات قياس المنسوب والتدفق بالموجات فوق الصوتية الصناعية",
    "taglineEn": "High-precision IP68 non-contact measurement sensors for chemical tanks, open channels, and wastewater basins.",
    "taglineAr": "حساسات متطورة لقياس منسوب وتدفق السوائل بدون تلامس وبدرجة حماية IP68 لخزانات الكيماويات والمياه.",
    "descriptionEn": "Ruggedized ultrasonic transceivers delivering millimetric accuracy across harsh industrial environments. Features temperature compensation, Modbus RTU/4-20mA output, and anti-condensation PVDF transducers.",
    "descriptionAr": "أجهزة استشعار بالموجات فوق الصوتية مصممة للبيئات الصناعية القاسية، توفر دقة قياس بالملم مع تعويض تلقائي لدرجات الحرارة ومخارج 4-20mA ومقاومة كاملة للأبخرة والكيماويات.",
    "image": "/BG/Environment & Sustainability/IoT Environmental Monitoring System.jpg",
    "originEn": "Germany / Partner Assembly",
    "originAr": "ألمانيا / تجميع بمواصفات معتمدة",
    "originFlag": "🇩🇪",
    "moqEn": "2 units",
    "moqAr": "قطعتان",
    "packagingEn": "Individual anti-static padded enclosure box with calibration certificate.",
    "packagingAr": "صندوق مضاد للكهرباء الساكنة مبطن مع شهادة معايرة معملية فردية.",
    "specifications": [
      {
        "labelEn": "Range",
        "labelAr": "مدى القياس",
        "valueEn": "0.2 m to 15 m (liquid level)",
        "valueAr": "من 0.2 متر إلى 15 مترًا للمناسيب السائلة"
      },
      {
        "labelEn": "Protection",
        "labelAr": "معيار الحماية",
        "valueEn": "IP68 / NEMA 6P (submersible transducer)",
        "valueAr": "IP68 مع حماية كاملة ضد الغمر والأتربة"
      },
      {
        "labelEn": "Outputs",
        "labelAr": "مخارج الإشارة",
        "valueEn": "4-20 mA HART & RS-485 Modbus",
        "valueAr": "إشارة 4-20 مللي أمبير وبروتوكول Modbus RS-485"
      }
    ]
  },
  {
    "id": "prod-ind-meters",
    "code": "SBA-PRD-MTR01",
    "sector": "industrial",
    "categoryKey": "smart-meters",
    "categoryEn": "Smart Measurement Devices",
    "categoryAr": "أجهزة القياس الذكية",
    "nameEn": "Electromagnetic & Multi-Parameter Smart Water Quality Meters",
    "nameAr": "أجهزة القياس الذكية للتدفق وجودة المياه والمعايير البيئية",
    "taglineEn": "In-line electromagnetic flowmeters and multi-parameter transmitters (pH, ORP, Conductivity, DO).",
    "taglineAr": "عدادات تدفق كهرومغناطيسية ومحللات كيميائية متعددة المعايير لقياس الحموضة والتوصيلية الكهربية والأكسجين الذائب.",
    "descriptionEn": "Certified industrial flowmeters and digital analytical transmitters with cloud IoT telemetry for continuous monitoring of municipal and industrial water networks.",
    "descriptionAr": "عدادات قياس التدفق الكهرومغناطيسي وأجهزة التحليل الكيميائي الرقمية المزودة بوحدات اتصال إنترنت الأشياء IoT لمراقبة خطوط المياه الصناعية والبلدية.",
    "image": "/BG/Environment & Sustainability/Environmental Measurements & Continuous Monitoring.jpg",
    "originEn": "EU / Certified Global Partner",
    "originAr": "الاتحاد الأوروبي / شريك صناعي معتمد",
    "originFlag": "🇪🇺",
    "moqEn": "1 unit",
    "moqAr": "وحدة واحدة",
    "packagingEn": "Reinforced wooden crating with inspection protocol.",
    "packagingAr": "صناديق خشبية مقواة للشحن مع بروتوكول المعايرة الفنية.",
    "specifications": [
      {
        "labelEn": "Accuracy",
        "labelAr": "دقة القياس",
        "valueEn": "± 0.2% of reading (Flowmeters)",
        "valueAr": "± 0.2% من القراءة المقاسة لعدادات التدفق"
      },
      {
        "labelEn": "Pipe Diameters",
        "labelAr": "أقطار المواسير",
        "valueEn": "DN15 to DN1200 flanged",
        "valueAr": "من DN15 حتى DN1200 بفلنشات قياسية"
      },
      {
        "labelEn": "Telemetry",
        "labelAr": "الاتصال اللاسلكي",
        "valueEn": "Integrated 4G/NB-IoT logger options",
        "valueAr": "وحدات مدمجة تدعم شبكات 4G و NB-IoT"
      }
    ]
  },
  {
    "id": "prod-ind-equipment",
    "code": "SBA-PRD-EQP01",
    "sector": "industrial",
    "categoryKey": "industrial-equipment",
    "categoryEn": "Industrial Equipment",
    "categoryAr": "المعدات الصناعية والتشغيلية",
    "nameEn": "Heavy-Duty Chemical Dosing Pumps & Aeration Blowers",
    "nameAr": "مضخات حقن الكيماويات الدقيقة ومنفاخات التهوية الصناعية",
    "taglineEn": "Diaphragm metering pumps, positive displacement blowers, and mechanical mixers for process plants.",
    "taglineAr": "مضخات جرعات ومقاييس غشائية للكيماويات ومنفاخات هواء صناعية قوية لمحطات المعالجة والمصانع.",
    "descriptionEn": "Supplying certified heavy-duty pumping equipment built for aggressive chemicals, acids, coagulants, and aeration basins in chemical and environmental facilities.",
    "descriptionAr": "توريد معتمد لمعدات الضخ والتهوية والخلط الميكانيكي المصممة لتحمل الأحماض والكيماويات القاسية وأحواض التهوية في المنشآت الصناعية والبيئية.",
    "image": "/BG/Environment & Sustainability/Renewable Energy Sector.jpg",
    "originEn": "Italy / Germany",
    "originAr": "إيطاليا / ألمانيا",
    "originFlag": "🇮🇹",
    "moqEn": "1 unit",
    "moqAr": "وحدة واحدة",
    "packagingEn": "Export wooden pallet with protective moisture wrap.",
    "packagingAr": "طبلية خشبية للتصدير مغلفة بغطاء واقٍ من الرطوبة.",
    "specifications": [
      {
        "labelEn": "Flow Capacity",
        "labelAr": "معدل التدفق",
        "valueEn": "1.0 L/h to 1,500 L/h dosing capacity",
        "valueAr": "من 1 لتر/ساعة إلى 1,500 لتر/ساعة لحقن الكيماويات"
      },
      {
        "labelEn": "Materials",
        "labelAr": "خامات التصنيع",
        "valueEn": "PVDF, PTFE, Hastelloy-C & SS316L",
        "valueAr": "PVDF، تيفلون، سبيكة هاستيلوي وفولاذ ستانلس 316L"
      }
    ]
  },
  {
    "id": "prod-ind-filtration",
    "code": "SBA-PRD-FLT01",
    "sector": "industrial",
    "categoryKey": "filtration-equipment",
    "categoryEn": "Water Filtration Equipment",
    "categoryAr": "معدات فلترة وتنقية المياه",
    "nameEn": "Commercial Multi-Media Sand & Activated Carbon Pressure Vessels",
    "nameAr": "فلاتر وخزانات ضغط الوسائط المتعددة والكربون النشط",
    "taglineEn": "ASME certified fiberglass (FRP) and epoxy-coated carbon steel pressurized filtration vessels.",
    "taglineAr": "أوعية وفلاتر ترشيح مضغوطة من الفيبرجلاس FRP والفولاذ الكربوني المبطن لمعالجة وتنقية المياه.",
    "descriptionEn": "Complete physical filtration vessels equipped with top/bottom distribution laterals, automatic multi-port control valves, and high-capacity gravel, sand, and granular carbon media.",
    "descriptionAr": "خزانات وأوعية ترشيح فيزيائي كاملة مزودة بنجوم توزيع داخلية، وصمامات تحكم أوتوماتيكية متعددة المسارات، مع وسائط ترشيح عالية الكفاءة لإزالة العكارة والكلور والشوائب.",
    "image": "/BG/Environment & Sustainability/Water & Wastewater Sector.jpg",
    "originEn": "USA / Global Assembly",
    "originAr": "الولايات المتحدة / تجميع عالمي",
    "originFlag": "🇺🇸",
    "moqEn": "1 system vessel",
    "moqAr": "خزان / نظام واحد",
    "packagingEn": "Heavy-duty skid mount with protective wrapping.",
    "packagingAr": "تثبيت على قاعدة شاسيه حديدية مع تغليف حماية.",
    "specifications": [
      {
        "labelEn": "Pressure Rating",
        "labelAr": "ضغط التشغيل",
        "valueEn": "10 bar (150 psi) test pressure",
        "valueAr": "ضغط اختبار 10 بار (150 رطل/بوصة مربعة)"
      },
      {
        "labelEn": "Diameters",
        "labelAr": "الأقطار المتاحة",
        "valueEn": "14 inches to 72 inches vessel diameter",
        "valueAr": "من 14 بوصة إلى 72 بوصة قطر الوعاء"
      },
      {
        "labelEn": "Control Valves",
        "labelAr": "صمامات التحكم",
        "valueEn": "Fleck / Clack digital automatic backwash valves",
        "valueAr": "صمامات غسيل عكسي أوتوماتيكية رقمية معتمدة"
      }
    ]
  },
  {
    "id": "prod-ind-treatment",
    "code": "SBA-PRD-TRT01",
    "sector": "industrial",
    "categoryKey": "treatment-equipment",
    "categoryEn": "Water Treatment Equipment",
    "categoryAr": "معدات ووحدات معالجة المياه المادية",
    "nameEn": "Skid-Mounted Reverse Osmosis (RO) Desalination Racks & UV Disinfection Units",
    "nameAr": "وحدات تحلية المياه بالتناضح العكسي (RO) ووحدات التعقيم بالأشعة فوق البنفسجية",
    "taglineEn": "Modular physical water treatment skids with high-rejection TFC membranes and stainless steel pressure housings.",
    "taglineAr": "محطات ووحدات تنقية وتحلية مياه مدمجة على شاسيه ستانلس ستيل مع أغشية تناضح عكسي عالية العزل.",
    "descriptionEn": "Factory pre-assembled and tested commercial and industrial physical desalination equipment. Includes high-pressure pumps, energy recovery devices, cartridge microfiltration, and clean-in-place (CIP) skids.",
    "descriptionAr": "معدات تحلية وتطهير مياه مادية مجمعة ومختبرة مسبقًا في المصنع، تشمل مضخات ضغط عالي، أوعية ضغط من الستانلس ستيل، أنظمة تعقيم UV، وأجهزة غسيل كيميائي CIP.",
    "image": "/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg",
    "originEn": "EU / Regional Modular Assembly",
    "originAr": "الاتحاد الأوروبي / تجميع إقليمي معتمد",
    "originFlag": "🇪🇺",
    "moqEn": "1 unit",
    "moqAr": "وحدة واحدة",
    "packagingEn": "Export wooden crate with protective desiccant packaging.",
    "packagingAr": "صندوق شحن خشبي معبأ بأكياس تجفيف وحماية كيميائية.",
    "specifications": [
      {
        "labelEn": "Output Capacities",
        "labelAr": "طاقات الإنتاج",
        "valueEn": "5 m³/day to 500 m³/day modular output",
        "valueAr": "من 5 م³/يوم حتى 500 م³/يوم للوحدات المدمجة"
      },
      {
        "labelEn": "Membranes",
        "labelAr": "نوع الأغشية",
        "valueEn": "Dow FilmTec / Hydranautics 8-inch high-rejection",
        "valueAr": "أغشية 8 بوصة داو فيلمتك أو هايدروناتيكس عالية العزل"
      },
      {
        "labelEn": "Recovery Rate",
        "labelAr": "نسبة الاسترداد",
        "valueEn": "Up to 75% on brackish water",
        "valueAr": "تصل إلى 75% للمياه متوسطة الملوحة"
      }
    ]
  }
];

export const productCategoriesConfig = [
  {
    division: "apparel" as const,
    labelEn: "Apparel & Textile Products",
    labelAr: "منتجات الملابس والمنسوجات",
    descEn: "Ready-to-wear fashion lines, uniforms, and fine Egyptian cotton textiles ready for supply and export.",
    descAr: "أزياء جاهزة، ملابس أطفال ونساء ورجال، ومنسوجات قطنية فاخرة جاهزة للتوريد والتصدير الدولي.",
    categories: [
      { key: "all", labelEn: "All Apparel", labelAr: "كافة منتجات الملابس" },
      { key: "womens-wear", labelEn: "Women's Wear", labelAr: "الملابس النسائية" },
      { key: "mens-wear", labelEn: "Men's Wear", labelAr: "ملابس رجالية" },
      { key: "kids-wear", labelEn: "Kids & Baby Wear", labelAr: "ملابس الأطفال والرضع" },
      { key: "casual-wear", labelEn: "Casual Wear", labelAr: "ملابس كاجوال يومية" },
      { key: "homewear", labelEn: "Homewear", labelAr: "الملابس المنزلية والبيجامات" },
      { key: "classic-wear", labelEn: "Classic Wear", labelAr: "الملابس الكلاسيكية" },
      { key: "sportswear", labelEn: "Sportswear", labelAr: "الملابس الرياضية" },
      { key: "underwear-lingerie", labelEn: "Underwear & Lingerie", labelAr: "الملابس الداخلية واللانجري" },
      { key: "evening-wear", labelEn: "Evening Wear", labelAr: "فساتين السهرة والسواريه" },
      { key: "abayas", labelEn: "Abayas", labelAr: "العبايات والأزياء المحتشمة" },
      { key: "fabrics-textiles", labelEn: "Fabrics & Textiles", labelAr: "الأقمشة والمنسوجات" }
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
  },
  {
    division: "industrial" as const,
    labelEn: "Industrial & Technical Products",
    labelAr: "المنتجات والمعدات الصناعية والتقنية",
    descEn: "Hardware and physical measurement instruments, dosing pumps, filtration vessels, and RO modular equipment.",
    descAr: "حساسات صناعية، أجهزة قياس ذكية، مضخات جرعات، أوعية وفلاتر ترشيح، ووحدات تحلية فيزيائية قابلة للتوريد.",
    categories: [
      { key: "all", labelEn: "All Industrial Products", labelAr: "كافة المعدات الصناعية" },
      { key: "ultrasonic-sensors", labelEn: "Ultrasonic Sensors", labelAr: "حساسات الموجات فوق الصوتية" },
      { key: "smart-meters", labelEn: "Smart Measurement Devices", labelAr: "أجهزة القياس الذكية" },
      { key: "industrial-equipment", labelEn: "Industrial Equipment", labelAr: "المعدات الصناعية والتشغيلية" },
      { key: "filtration-equipment", labelEn: "Water Filtration Equipment", labelAr: "معدات فلترة وتنقية المياه" },
      { key: "treatment-equipment", labelEn: "Water Treatment Equipment", labelAr: "معدات ووحدات معالجة المياه المادية" }
    ]
  }
];
