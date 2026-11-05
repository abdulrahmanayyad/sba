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
  }
];
