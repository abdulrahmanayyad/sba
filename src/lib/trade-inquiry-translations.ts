// Helpers and bilingual mappings for Trade Inquiries in Market Directory

export function isValidInfo(val?: string | null): boolean {
  if (!val) return false;
  const trimmed = val.trim();
  return !(
    trimmed === '' ||
    trimmed === '-' ||
    trimmed === '--' ||
    trimmed === '---' ||
    trimmed === '-...' ||
    trimmed === '...' ||
    trimmed === 'None' ||
    trimmed === 'N/A' ||
    trimmed === 'null' ||
    trimmed === 'undefined'
  );
}

export function cleanText(val?: string | null): string {
  if (!val) return '';
  return val
    .replace(/(?:،\s*|\s+)إلخ\.?/g, '')
    .replace(/(?:,\s*|\s+)etc\.?/gi, '')
    .replace(/\\r\\n/g, '\n')
    .replace(/\r\n/g, '\n')
    .trim();
}

export const PRODUCT_EN_MAP: Record<string, string> = {
  'أدوية عشبية': 'Herbal Medicines',
  'أصابع الكركم': 'Turmeric Fingers',
  'أصابع الكركم - مسحوق الكركمين': 'Turmeric Fingers & Curcumin Powder',
  'أعشاب': 'Culinary & Medicinal Herbs',
  'أفخاذ دجاج': 'Frozen Halal Chicken Thighs',
  'الشمندر': 'Fresh Beetroot',
  'بازلاء': 'Green Peas',
  'بامية - قرع مر': 'Fresh Okra & Bitter Gourd',
  'بامية، زنجبيل، بصل': 'Fresh Okra, Ginger & Onions',
  'بذور الكزبرة': 'Coriander Seeds',
  'بذور اليانسون': 'Anise Seeds',
  'بذور تمور': 'Date Seeds & Pits',
  'بذور حمراء': 'Red Seeds',
  'بذور سمسم': 'Sesame Seeds',
  'بصل': 'Fresh Onions',
  'بصل - ثوم': 'Fresh Onions & Garlic',
  'بصل - ثوم - بطاطس': 'Fresh Onions, Garlic & Potatoes',
  'بصل - فستق - كركم': 'Onions, Pistachios & Turmeric',
  'بصل أحمر وزنجبيل': 'Red Onions & Fresh Ginger',
  'بطاطا': 'Sweet Potatoes',
  'بطاطس': 'Fresh Potatoes',
  'تمور': 'Fresh & Dried Dates',
  'تمور سعودية': 'Saudi Dates',
  'توابل': 'Culinary Spices',
  'ثوم - زنجبيل': 'Fresh Garlic & Ginger',
  'خضروات': 'Fresh Vegetables',
  'خضروات طازجة': 'Fresh Vegetables',
  'زنجبيل': 'Fresh Ginger',
  'زنجبيل مجفف': 'Dried Ginger Slices',
  'زيت فول الصويا - توابل': 'Soybean Oil & Spices',
  'سنتيلا آسياتيكا': 'Centella Asiatica (Gotu Kola)',
  'طماطم': 'Fresh Tomatoes',
  'عسل': 'Natural Honey',
  'فلفل': 'Peppers',
  'فلفل أحمر عين الطائر': "Bird's Eye Red Chili",
  'فلفل أخضر': 'Fresh Green Peppers',
  'فلفل أسود': 'Black Pepper',
  'فلفل أسود - هيل': 'Black Pepper & Cardamom',
  'فلفل أسود ديمون': 'Demon Black Pepper',
  'فلفل أسود وقرنفل': 'Black Pepper & Cloves',
  'فلفل حار': 'Hot Chili Peppers',
  'فلفل حار مجفف': 'Dried Hot Chili Peppers',
  'فلفل عين الطائر الأفريقي': "African Bird's Eye Chili",
  'فلفل ويري ويري': 'Wiri Wiri Chili',
  'فول الصويا والشمندر': 'Soybeans & Beetroot',
  'قرع الجوز': 'Butternut Squash',
  'قرنفل': 'Whole Cloves',
  'قرنفل مجفف': 'Dried Cloves',
  'كراتوم': 'Kratom Extract',
  'كركم': 'Turmeric',
  'كركم - بصل - فستق': 'Turmeric, Onions & Pistachios',
  'كمون - خردل - هيل': 'Cumin, Mustard & Cardamom',
  'ليمون': 'Fresh Lemons',
  'ليمون - بازلاء': 'Lemons & Green Peas',
  'مستخلص أوكسيجولين عشبي': 'Oxygoline Herbal Extract',
  'مستخلص عشبي من أوكسيجولين': 'Oxygoline Herbal Extract',
  'مستخلص عشبي من غرونين': 'Groningen Herbal Extract',
  'مستخلصات زيت أعشاب جرونين': 'Groningen Herbal Oil Extracts',
  'مستخلصات زيوت عشبية': 'Herbal Oil Extracts',
  'مسحوق الثوم': 'Garlic Powder',
  'مسحوق الكركم، الفلفل الأسود': 'Turmeric & Black Pepper Powder',
  'مسحوق براهمي': 'Brahmi Powder',
  'مسحوق ثوم': 'Garlic Powder',
  'مسحوق طماطم وزنجبيل': 'Tomato & Ginger Powder',
  'نوى تمر': 'Date Pits & Seeds',
  'هيل': 'Cardamom',
  'هيل - فلفل': 'Cardamom & Pepper',
  'هيل - كمون': 'Cardamom & Cumin',
  'هيل أخضر': 'Green Cardamom',
  'هيل وفلفل أسود': 'Green Cardamom & Black Pepper',
};

export const VARIETY_EN_MAP: Record<string, string> = {
  'تمر عنب': 'Grape Dates',
  'جميع الأنواع': 'All Varieties',
  'حلوة': 'Halwa Dates',
  'طازجة': 'Fresh',
  'عجوة': 'Ajwa',
  'عجوة طازجة\r\nمتوسطة الحجم - عالية الجودة': 'Fresh Ajwa, Medium Size - Premium Quality',
  'عجوة طازجة\nمتوسطة الحجم - عالية الجودة': 'Fresh Ajwa, Medium Size - Premium Quality',
};

export const SPECS_EN_MAP: Record<string, string> = {
  'نوى': 'Pits & Seeds',
  'عُمانية': 'Omani Origin',
  'طازجة': 'Fresh Grade A',
  'مجدول، سكري، صقعي': 'Medjool, Sukkari, Sagai',
  'مجدول': 'Medjool Premium',
  'مجففة': 'Dried Grade A',
  'عجوة، مجدول': 'Ajwa & Medjool',
  'عضوية': 'Certified Organic',
  'كيميا، مجدول، زاهيدي': 'Kimia, Medjool, Zahedi',
  'عجوة المدينة المنورة': 'Medina Al-Munawwarah Ajwa',
  'عجوة أو مجدول': 'Ajwa or Medjool',
  'عجوة، تمر مجدول': 'Ajwa & Medjool Dates',
  'مجدول، عجوة، صفاوي': 'Medjool, Ajwa, Safawi',
  'طازج وجاف مع نوى\r\nحجم متوسط ​​في صناديق كرتونية من ١ كجم إلى ٥ كجم': 'Fresh and dry with pits, medium size in 1kg to 5kg cartons',
  'طازج وجاف مع نوى\nحجم متوسط ​​في صناديق كرتونية من ١ كجم إلى ٥ كجم': 'Fresh and dry with pits, medium size in 1kg to 5kg cartons',
  '400 غرام من أفضل ثمار التمور العضوية مبيعًا في المصنع': '400g factory best-selling organic dates packaging',
  'عجوة، مبروم، مجدول، صفاوي، مشروق، سكري، صقعي، برحي، معجون تمر، دبس تمر': 'Ajwa, Mabroom, Medjool, Safawi, Mashrooq, Sukkari, Sagai, Barhi, date paste, date syrup',
  'شهادة GFSI\r\nخطاب ضمان (تاريخه خلال العام الماضي)\r\nشهادة كوشير\r\nمواصفات المنتج (بما في ذلك مدة الصلاحية وشروط التخزين)\r\nالمعلومات الغذائية للمنتج\r\nبيان بلد المنشأ (للمواد الخام والمعالجة)\r\nبيان مسببات الحساسية والغلوتين\r\nبيان غير معدل وراثيًا\r\nبيان جاهز للأكل\r\nشهادة تأمين المسؤولية':
    'GFSI Certificate, Guarantee Letter, Kosher Certificate, Product Specifications, Nutritional Facts, Country of Origin Declaration, Allergen & Gluten-Free Statement, Non-GMO Statement, Ready-to-Eat Statement, Liability Insurance Certificate',
  'شهادة GFSI\nخطاب ضمان (تاريخه خلال العام الماضي)\nشهادة كوشير\nمواصفات المنتج (بما في ذلك مدة الصلاحية وشروط التخزين)\nالمعلومات الغذائية للمنتج\nبيان بلد المنشأ (للمواد الخام والمعالجة)\nبيان مسببات الحساسية والغلوتين\nبيان غير معدل وراثيًا\nبيان جاهز للأكل\nشهادة تأمين المسؤولية':
    'GFSI Certificate, Guarantee Letter, Kosher Certificate, Product Specifications, Nutritional Facts, Country of Origin Declaration, Allergen & Gluten-Free Statement, Non-GMO Statement, Ready-to-Eat Statement, Liability Insurance Certificate',
};

export const PORT_EN_MAP: Record<string, string> = {
  'استراليا': 'Australia',
  'الدوحة/حمد، قطر': 'Doha / Hamad Port, Qatar',
  'الدوحة، قطر': 'Doha Port, Qatar',
  'الكويت': 'Kuwait Port',
  'الممكلة المتحدة': 'United Kingdom',
  'المنامة، البحرين': 'Manama Port, Bahrain',
  'الهند': 'India',
  'الولايات المتحدة الأمريكية': 'United States',
  'بلغاريا': 'Bulgaria',
  'بنغلاديش': 'Bangladesh',
  'بيروت، لبنان': 'Beirut Port, Lebanon',
  'جمهورية التشيك': 'Czech Republic',
  'حمد، قطر': 'Hamad Port, Qatar',
  'دبي، الإمارات العربية المتحدة': 'Dubai (Jebel Ali), UAE',
  'دكا، بنغلاديش': 'Dhaka, Bangladesh',
  'روتردام، هولندا': 'Rotterdam Port, Netherlands',
  'سترة، البحرين': 'Sitra, Bahrain',
  'سريلانكا': 'Sri Lanka',
  'سنغاورة': 'Singapore Port',
  'شيتا غونغ، بنغلاديش': 'Chittagong Port, Bangladesh',
  'عُمان': 'Oman',
  'فرانكفورت، ألمانيا': 'Frankfurt, Germany',
  'فيليكستوي، المملكة المتحدة': 'Felixstowe Port, United Kingdom',
  'قطر': 'Qatar',
  'لام تشا بانغ، تايلاند': 'Laem Chabang Port, Thailand',
  'لبنان': 'Lebanon',
  'ماليه، جزر المالديف': 'Malé Port, Maldives',
  'ميناء كلانج، ماليزيا': 'Port Klang, Malaysia',
  'هونج كونج': 'Hong Kong Port',
};

export function formatShippingTerms(terms: string | undefined, ar: boolean): string {
  if (!terms || !isValidInfo(terms)) return '';
  const t = cleanText(terms);
  if (ar) {
    if (t === 'FOB') return 'تسليم ميناء الشحن';
    if (t === 'CIF') return 'شامل التكلفة والتأمين والشحن';
    if (t === 'CNF') return 'شامل التكلفة وأجور الشحن';
    if (t === 'CIF / CNF / FOB / CFR' || t === 'CIF, CNF, FOB') return 'شامل الشحن والتأمين أو تسليم ميناء الشحن';
    if (t === 'FOB / CIF' || t === 'FOB أو CIF' || t === 'CIF, FOB') return 'تسليم ميناء الشحن أو شامل التكاليف';
    if (t === 'CIF عن طريق الجو') return 'شحن جوي شامل التكاليف';
    if (t === 'FOB عن طريق الجو' || t === 'عن طريق الجو FOB') return 'شحن جوي تسليم مطار الإقلاع';
    if (t === 'FOB أو CNF شحن جوي') return 'تسليم ميناء الشحن أو شحن جوي';
    if (t === 'برًا') return 'شحن بري';
    return t
      .replace(/FOB/g, 'تسليم ميناء الشحن')
      .replace(/CIF/g, 'شامل الشحن والتأمين')
      .replace(/CNF/g, 'شامل أجور الشحن')
      .replace(/CFR/g, 'أجور الشحن');
  } else {
    if (t === 'برًا') return 'Land Freight';
    if (t === 'CIF عن طريق الجو') return 'Air Freight (CIF)';
    if (t === 'FOB عن طريق الجو' || t === 'عن طريق الجو FOB') return 'Air Freight (FOB)';
    if (t === 'FOB أو CNF شحن جوي') return 'Air Freight (FOB / CNF)';
    if (t === 'FOB أو CIF') return 'FOB / CIF';
    return t;
  }
}

export function formatPaymentTerms(terms: string | undefined, ar: boolean): string {
  if (!terms || !isValidInfo(terms)) return '';
  const t = cleanText(terms);
  if (ar) {
    return t
      .replace(/CAD/g, 'دفع مقابل المستندات')
      .replace(/LC/g, 'خطاب اعتماد')
      .replace(/TT/g, 'تحويل بنكي مباشر')
      .replace(/دولار كندي/g, 'دفع بالدولار الكندي');
  } else {
    if (t.includes('خطاب اعتماد') && t.includes('تحويل')) return 'Letter of Credit or Bank Wire Transfer';
    if (t === 'خطاب اعتماد') return 'Letter of Credit (L/C)';
    if (t.includes('خطاب اعتماد') && t.includes('دولار')) return 'Letter of Credit (Expected $9.46/kg)';
    if (t === 'تحويل بنكي' || t === 'حوالة مصرفية' || t === 'حوالية مصرفية') return 'Bank Wire Transfer';
    if (t.includes('سيتم مناقشتها')) return 'To be negotiated with suppliers';
    if (t.includes('45 يوم')) return 'Bank Wire Transfer (45-Day Credit)';
    if (t.includes('60 يوم')) return 'Bank Wire Transfer (60-Day Credit)';
    if (t.includes('بعد وصول') || t.includes('بعد استلام')) return 'Bank Wire Transfer upon cargo arrival';
    if (t.includes('خلال 7 أيام')) return 'Bank Wire Transfer within 7 days of arrival';
    if (t.includes('التلكس')) return 'Telegraphic Transfer (T/T, 15-21 days after arrival)';
    if (t.includes('عمولة')) return 'Commission-based trading only';
    if (t.includes('البحرين')) return '70% balance upon vessel arrival in Bahrain';
    return t
      .replace(/CAD/g, 'Cash Against Documents (CAD)')
      .replace(/LC/g, 'Letter of Credit (L/C)')
      .replace(/TT/g, 'Telegraphic Transfer (T/T)');
  }
}

export function formatQuantity(qty: string | undefined, ar: boolean): string {
  if (!qty || !isValidInfo(qty)) return '';
  const q = cleanText(qty);
  if (ar) return q;

  const qMap: Record<string, string> = {
    '0.4 كجم': '0.4 kg',
    '10 أطنان': '10 Tons',
    '100 طن': '100 Tons',
    '100 طنًا': '100 Tons',
    '1000 - 2000 طن سنوي': '1,000 - 2,000 Tons / Year',
    '1000 كجم مبدئيًا': '1,000 kg (Initial Trial)',
    '10000 كجم': '10,000 kg',
    '1000كجم - 5كجم للعلبة': '1,000 kg (5 kg / box)',
    '150 طن': '150 Tons',
    '20 حاوية (عشرون قدمًا)': '20 Containers (20ft)',
    '20 طن': '20 Tons',
    '200 برميل': '200 Barrels',
    '25 طن': '25 Tons',
    '25 كجم': '25 kg',
    '28 طنًا': '28 Tons',
    '3 كجم (حد أدنى للطلب لاحقًا)': '3 kg (Trial / MOQ later)',
    '30 طنًا': '30 Tons',
    '40 كجم': '40 kg',
    '5 حاويات (عشرون قدمًا)': '5 Containers (20ft)',
    '5 كجم': '5 kg',
    '500 كجم': '500 kg',
    'الحد الأدنى للطلب': 'Minimum Order Quantity (MOQ)',
    'الحد الأدنى للطلب\nمطلوب موردين معتمدين': 'MOQ - Certified Suppliers Required',
    'حاوية واحدة (أربعون قدمًا)': '1 Container (40ft)',
    'حاوية واحدة (عشرون قدمًا)': '1 Container (20ft)',
    'حاويتان (عشرون قدمًا)': '2 Containers (20ft)',
    'طن واحد': '1 Ton',
    'طن واحد / طن شهريًا': '1 Ton / 1 Ton Monthly',
    'من 0 إلى 28 طن': '0 to 28 Tons',
  };

  return qMap[q] || q.replace(/طنًا|أطنان|طن/g, 'Tons').replace(/كجم/g, 'kg');
}

export function formatSpecs(specs: string | undefined, ar: boolean): string {
  if (!specs || !isValidInfo(specs)) return '';
  const s = cleanText(specs);
  if (ar) {
    return s.replace(/GFSI/g, 'سلامة الغذاء العالمية (GFSI)').replace(/  +/g, ' ').trim();
  } else {
    return SPECS_EN_MAP[s] || s;
  }
}

export function formatVariety(variety: string | undefined, ar: boolean): string {
  if (!variety || !isValidInfo(variety)) return '';
  const v = cleanText(variety);
  if (ar) return v;
  return VARIETY_EN_MAP[v] || v;
}

export function formatBuyerDetails(text: string | undefined, ar: boolean): string {
  if (!text || !isValidInfo(text)) return '';
  const val = cleanText(text);

  if (ar) {
    // Pure Arabic: strip English acronyms and notations
    return val
      .replace(/\(NPS\)/g, '')
      .replace(/\bFOB\b/g, 'تسليم ميناء الشحن')
      .replace(/\bCIF\b/g, 'شامل التكاليف')
      .replace(/\bCFR\b/g, 'أجور الشحن')
      .replace(/\bCNF\b/g, 'التكلفة والشحن')
      .replace(/\b40HQ\b/g, 'حاوية 40 قدم عالية السعة')
      .replace(/\bOH7\b/g, 'درجة 7-هيدروكسي')
      .replace(/\bCG1,3\b/g, 'درجة CG1,3')
      .replace(/\bCG3\b/g, 'درجة CG3')
      .replace(/  +/g, ' ')
      .trim();
  } else {
    // English mode: Translate and remove Arabic
    return translateBuyerDetailsEn(val);
  }
}

function translateBuyerDetailsEn(val: string): string {
  // Normalize whitespace
  const normalized = val.replace(/\r\n/g, '\n').trim();

  // Common comprehensive mapping dictionary
  const MAP: Record<string, string> = {
    'نحن مجموعة شركات ومصانع دولية مرموقة، \nوأحد وكلاء العمولة المعتمدين لدى خدمات الشراء الهولندية (NPS)\nنحن أحد تجار البصل والثوم والبطاطس في هولندا.\nنتمتع بخبرة طويلة في هذا المجال، ونتمتع بسمعة طيبة وخبرة مالية جيدة.':
      'We are an established group of international companies and factories, and an authorized commission agent with Netherlands Purchasing Services (NPS). We are leading onion, garlic, and potato traders in the Netherlands with long-standing experience, solid market reputation, and strong financial standing.',
    'نحتاج إلى شراء بذور سمسم، كمون، خردل، بذور يقطين، شيا، كتان، كينوا، هيل.\nالكمية:٢٠ طنًا':
      'Seeking procurement of sesame seeds, cumin, mustard, pumpkin seeds, chia, flaxseed, quinoa, and cardamom.\nQuantity: 20 Tons.',
    'نبحث عن شرائح زنجبيل مجفف بكميات كبيرة\nبشكل منتظم':
      'Seeking large bulk quantities of dried ginger slices on an ongoing regular basis.',
    'نحتاج لشراء ١٠٠ كيلوغرام من الفستق\n٥٠٠ كيلوغرام من البصل\n٨٠٠ كيلوغرام من الكركم':
      'Required procurement: 100 kg pistachios, 500 kg onions, 800 kg turmeric.',
    'نحتاج إلى شراء بطاطس من باكستان':
      'Looking to import commercial potatoes from Pakistan.',
    'نرغب في استيراد البصل والثوم':
      'Interested in importing fresh onions and garlic.',
    'نرغب في شراء خضراوات وفواكه طازجة من شمال أفريقيا، وخاصةً الطماطم والجزر والبصل، وغيرها':
      'Seeking to import fresh fruits and vegetables from North Africa, especially tomatoes, carrots, onions, and seasonal produce.',
    'نرغب في شراء فواكه وخضراوات بطول ٢٠ قدمًا':
      'Looking to procure a 20ft container of fresh fruits and vegetables.',
    'نحتاج لشراء الخضراوات التالية:\nبامية 380 - قرع مر 300 - باذنجان أخضر 250\nبطاطا 370 - فلفل أخضر حار 380 - مزيج جارد - طماطم 200\nالوزن الصافي: 5 كجم\nمن مومباي أو ماهاراشترا \nنحتاج فقط 3 أطنان يوميًا (مزيج)':
      'Seeking to purchase mixed fresh vegetables: Okra 380, Bitter Gourd 300, Green Eggplant 250, Sweet Potato 370, Hot Green Chili 380, Guard Mix, Tomatoes 200.\nNet weight: 5kg boxes from Mumbai or Maharashtra. Required volume: 3 tons daily mixed.',
    'نرغب في شراء دوار الشمس، القرطم، الخردل،\nالفول السوداني، السمسم، النيجر، القطن، بذور الخروع،\nالطماطم من الهند فقط':
      'Interested in purchasing sunflower seeds, safflower, mustard, peanuts, sesame, niger seeds, cottonseed, castor seeds, and tomatoes from India.',
    'نرغب في شراء أصابع الكركم ومسحوقه مع مسحوق الكركمين بكميات كبيرة':
      'Seeking bulk procurement of turmeric fingers, turmeric powder, and curcumin powder.',
    'نبحث عن موردين للمنتجات التالية:\nسمسم - كاكاو - زنجبيل - كركديه - فحم':
      'Seeking qualified suppliers for: Sesame, Cocoa, Ginger, Hibiscus, and Charcoal.',
    'نرغب في شراء توابل':
      'Looking to purchase quality culinary spices.',
    'نرغب في شراء قرع الجوز':
      'Interested in purchasing butternut squash.',
    'نرغب في شراء هيل أخضر وفلفل أسود.\nالكميات المطلوبة: من ٢٥ إلى ١٠٠ طن':
      'Looking to purchase green cardamom and black pepper. Required quantity: 25 to 100 Tons.',
    'الكمية: ٥ حاويات كاملة\nالتأمين والشحن - الكونغو، وسط أفريقيا':
      'Quantity: 5 full containers (CIF delivery to Congo, Central Africa).',
    'نرغب في استيراد قرنفل من مدغشقر إلى باكستان\nونرجو الحصول على عرض سعر مع سعر CNF لكمية 100 طن متري \nيرجى أيضًا مشاركة شروط الدفع، ووقت التسليم، وأي تفاصيل أخرى ذات صلة':
      'Seeking to import cloves from Madagascar to Pakistan. Requesting quotation with CNF price for 100 MT, along with payment terms, delivery schedule, and relevant details.',
    'نرغب في شراء هيل أخضر لفترة طويلة في الولايات المتحدة الأمريكية وأسواق أخرى.\nيرجى تزويدنا بمواصفات المنتج والشروط الأخرى، \nبما في ذلك عرض السعر (CIF) ومدينة نيويورك':
      'Interested in purchasing green cardamom on a long-term contract for the US and other markets. Please provide product specifications, CIF quotation for New York, and commercial terms.',
    'نحتاج لشراء أرز، توابل،\nسكر، دقيق قمح':
      'Required purchase: Rice, spices, sugar, and wheat flour.',
    'نرغب في شراء ٢٥ رطلًا من فلفل ويري ويري\nكم سيكلف ذلك عند وصوله إلى مونتريال، كندا؟':
      'Looking to buy 25 lbs of Wiri Wiri pepper. Requesting landed cost quotation delivered to Montreal, Canada.',
    'نرغب في استيراد قرنفل مجفف من مدغشقر إلى هولندا وسنغافورة.\nالكمية المطلوبة هي حاويتان (40HQ) شهريًا.\nمطلوب عرض سعر الشحن والتفريغ (CFR) في ميناء روتردام وسنغافورة فورًا، \nمع ذكر المواصفات التفصيلية للقرنفل المجفف وصورته. نتطلع إلى بناء علاقة عمل طويلة الأمد':
      'Seeking to import dried cloves from Madagascar to the Netherlands and Singapore. Required volume: two 40HQ containers monthly. Requesting CFR quotation for Rotterdam and Singapore ports with detailed specifications and product photos.',
    'نرغب في شراء حاوية سعة ٢٠ قدمًا من القرنفل\nالاستفسار عن سعر الجملة للقرنفل\nمعلومات عن الشحن، وشروط الدفع، ومواعيد التسليم':
      'Seeking to purchase a 20ft container of cloves. Inquiring about wholesale pricing, shipping details, payment terms, and delivery schedules.',
    'ينصب تركيزنا الأساسي على اللحوم الحلال المجمدة، والأطعمة الطازجة مثل الخضراوات والفواكه الطازجة، والبطاطس المقلية المجمدة.\nيرجى تزويدنا بالمعلومات التالية:\nكتالوج المنتجات والأسعار\nخيارات التعبئة والتغليف والحد الأدنى لكميات الطلب\nتفاصيل الشحن والخدمات اللوجستية\nنبحث عن شروط ائتمانية من خلال شركة تأمين ائتماني':
      'Our primary focus is frozen halal meats, fresh produce (vegetables and fruits), and frozen French fries. Requesting product catalog and pricing, packaging options and MOQs, shipping logistics, and credit terms backed by credit insurance.',
    'نرغب في شراء مستخلص الكراتوم.\nدرجة OH7 أو أعلى\nسعر الكيلوغرام والطن\nنحتاج إلى مورد، وسأساعد في تنظيم النقل إلى الولايات المتحدة الأمريكية':
      'Looking to purchase Kratom extract (7-OH grade or higher). Inquiring about per-kg and per-ton pricing with US transportation coordination.',
    'الكمية: عبوة واحدة (٢٠ قدمًا) وعبوة واحدة (٤٠ قدمًا) كعينة اختبار في البداية\nفلفل أسود غير مطحون':
      'Quantity: One 20ft container and one 40ft container as an initial trial shipment of whole unground black pepper.',
    'نحتاج إلى شراء أفخاذ دجاج كاملة ومجمدة (حلال)':
      'Seeking procurement of frozen whole halal chicken thighs in commercial volumes.',
    'نرغب في استيراد طماطم طازجة':
      'Interested in importing fresh commercial tomatoes.',
    'نبحث عن موردين لنوى التمر':
      'Seeking reliable commercial suppliers for date seeds / pits.',
    'نبحث عن موردين للتمور العضوية عالية الجودة':
      'Seeking certified suppliers for high-grade organic dates.',
    'نحتاج إلى شراء كميات كبيرة من القرنفل\nللتصدير، ما يقارب 15-25 طنًا من الفلفل الأسود':
      'Looking to purchase bulk quantities of cloves for export, and approximately 15-25 tons of black pepper.',
    'نحتاج إلى شراء مستخلص عشبي من غرونين مع أعشاب\nسوبر 98-ky1 بكميات كبيرة.':
      'Required purchase: Groningen herbal extract with Super 98-ky1 herbs in commercial bulk quantities.',
    'نرغب في شراء منتجات زراعية وتوابل\nالأسعار بالدولار الأمريكي لحمولات ٢٠ قدمًا و٤٠ قدمًا\nحمولات متنوعة\nالدفع بالدولار الكندي عند وصول السفينة\nعبر بنك المشتري.':
      'Looking to procure agricultural produce and spices. Requesting USD pricing for 20ft and 40ft mixed container loads. Payment in CAD upon vessel arrival via buyer bank.',
    'نحتاج إلى شراء قرنفل CG3\nالتعبئة: كيس ٥٠ كجم، الرطوبة: ١٢٪\nقرنفل صغير: ٥٪، الكمية: ٥٠ طنًا\nالدفع: دولار كندي من بنك إلى بنك':
      'Looking to buy CG3 cloves. Packing: 50kg bags, Moisture: 12%, Baby cloves: 5%, Quantity: 50 MT. Payment: CAD bank-to-bank.',
    'نحتاج إلى شراء مسحوق ثوم مجفف للسوق المحلية.\nيرجى إرسال السعر، والشروط، والمواصفات التفصيلية للمنتج المتوفر، والقدرة الإنتاجية، والجودة، مع شهادة الجودة، إن وجدت.':
      'Required purchase: Dehydrated garlic powder for local market. Please provide pricing, terms, product specs, production capacity, quality details, and certifications.',
    'نحتاج إلى استيراد هيل (حاوية واحدة) إلى ميناء شيتاغونغ، بنغلاديش.':
      'Seeking to import 1 container of green cardamom to Chittagong Port, Bangladesh.',
    'نرغب في شراء بيض، كاجو، توابل، أرز.\nللتصدير من ميناء جبل علي، دبي، يرجى التواصل معنا عبر واتساب.':
      'Looking to purchase eggs, cashews, spices, and rice for export from Jebel Ali Port, Dubai.',
    'نبحث عن بصل أحمر، مقاس ٥٥ مم فأكثر\nكيس شبكي أحمر ٢٠ كجم\nللهند فقط\nالوجهة: ميناء جبل علي، الإمارات العربية المتحدة':
      'Seeking red onions, size 55mm+, 20kg red mesh bags. Destination: Jebel Ali Port, UAE.',
    'نشتري البيض، الكاجو، التوابل، الأرز، الفواكه، الخضراوات، الهيل، \nمن ميناء جبل علي بدبي. نوفر طرق دفع آمنة عبر البنوك.':
      'Buying eggs, cashews, spices, rice, fruits, vegetables, and cardamom from Jebel Ali Port, Dubai. Secure bank payment available.',
    'نرغب في شراء مسحوق براهمي':
      'Looking to purchase commercial Brahmi powder.',
    'نرغب في شراء فول الصويا والشمندر والذرة الرفيعة':
      'Interested in purchasing soybeans, beetroot, and sorghum.',
    'نحتاج لشراء هيل أخضر\nمقاسات 6-7 مم و7-8 مم\nمجفف في أكياس بولي بروبيلين سعة 25 كجم.':
      'Seeking green cardamom, sizes 6-7mm and 7-8mm, dried in 25kg PP bags.',
    'نحتاج إلى استيراد تفاح جالا رويال، وليمون، وإجاص':
      'Seeking to import Royal Gala apples, lemons, and pears.',
    'نحتاج إلى شراء كزبرة وكركم':
      'Looking to buy coriander and turmeric in commercial volumes.',
    'نحتاج لشراء الهيل الأخضر.\n٤ عبوات شهريًا':
      'Seeking to purchase green cardamom. Volume: 4 containers monthly.',
    'نرغب في شراء زنجبيل مجفف مجفف\nمُعبأ في أكياس بولي بروبيلين سعة 40 كجم\nجودة ممتازة\nالمنشأ: الهند ونيجيريا\nالوجهة: ميناء جبل علي، الإمارات العربية المتحدة':
      'Looking to purchase dried ginger packed in 40kg PP bags, premium quality, origin India/Nigeria. Destination: Jebel Ali Port, UAE.',
    'نرغب في شراء بذور اليانسون النجمي بكميات كبيرة':
      'Seeking bulk quantities of star anise seeds.',
    'نود الاستفسار عن إمكانية إرسال فلفل أسود إلينا.\nما هو الحد الأدنى لكميات الطلب لفرصة عمل مع شركتي التجارية في موريشيوس؟':
      'Inquiring about black pepper supply and MOQs for commercial trading in Mauritius.',
    'نرغب في شراء بصل أحمر، زنجبيل، ثوم، كزبرة، فلفل حار بشكل منتظم. نحن مشترون من المملكة المتحدة، مانشستر، أي شخص يمكنه توفير ثلاث مرات أسبوعيًا.':
      'Regular procurement of red onions, ginger, garlic, coriander, and chili peppers. UK buyers based in Manchester seeking 3 shipments weekly.',
    'نحتاج لشراء فلفل أسود.\n٦٠ كجم، يرجى ذكر أفضل سعر لديكم.':
      'Required purchase: Black pepper (60 kg trial). Please provide best competitive quotation.',
    'نبحث عن بذور كزبرة بكميات كبيرة.\nيرجى التواصل معنا في أقرب وقت ممكن.':
      'Seeking coriander seeds in large bulk quantities. Please contact as soon as possible.',
    'نحتاج لشراء هيل أخضر وفلفل أسود.\nالكمية: ٥ حاويات':
      'Required procurement: Green cardamom and black pepper. Quantity: 5 full containers.',
    'نودّ إعلامكم بإمكانية توفير الزنجبيل والثوم والتمر والليمون.\nكم سعر العلبة من كل نوع حتى أتمكن من تحديد الكمية المطلوبة.\nهل لديكم خدمة توصيل إلى ليسوتو؟':
      'Inquiry for ginger, garlic, dates, and lemons with pricing per box and delivery availability to Lesotho.',
    'نرغب في شراء منتجكم من الفواكه المعلبة والخضراوات\nيرجى التواصل معنا في أقرب وقت ممكن.':
      'Seeking procurement of canned fruits and vegetables. Please get in touch promptly.',
    'نحتاج إلى تاجر كراتوم بالجملة لتوريده.':
      'Seeking a reliable wholesale trader for Kratom supply.',
    'نبحث عن هيل أخضر (مقاس 8 مم)\nنبحث عن أسعار FOB بالدولار الأمريكي للطن.':
      'Seeking green cardamom (8mm size). Requesting FOB pricing in USD per metric ton.',
    'نحتاج لشراء هيل وكاجو.\nنحتاج طنًا واحدًا لكليهما.\nهيل كاجو بقطر 7-8 مم، وزنه 180 أو 210. أرغب في الاستيراد من بنغلاديش، ميناء شيتاغونغ.':
      'Seeking 1 ton green cardamom (7-8mm) and 1 ton cashews (W180/W210). Destination: Chittagong Port, Bangladesh.',
    'نبحث عن فلفل أسود ٥٥٠ غالون، قرنفل، بذور يقطين، بذور دوار الشمس.':
      'Seeking black pepper 550g/l, cloves, pumpkin seeds, and sunflower seeds.',
    'نبحث عن فلفل ديمون.\nكمية أسبوعية ٥ أطنان':
      'Seeking Demon hot peppers with weekly volume of 5 tons.',
  };

  if (MAP[normalized]) {
    return MAP[normalized];
  }

  // General fallback: translate common trade keywords so NO Arabic characters appear in English mode
  return normalized
    .replace(/نحتاج إلى شراء|نحتاج لشراء|نرغب في شراء/g, 'Seeking procurement of')
    .replace(/نرغب في استيراد/g, 'Interested in importing')
    .replace(/نبحث عن موردين لـ|نبحث عن موردين/g, 'Seeking suppliers for')
    .replace(/نبحث عن/g, 'Looking for')
    .replace(/الكمية:/g, 'Quantity:')
    .replace(/الوجهة:/g, 'Destination:')
    .replace(/ميناء جبل علي/g, 'Jebel Ali Port')
    .replace(/الإمارات العربية المتحدة/g, 'UAE')
    .replace(/المملكة العربية السعودية/g, 'Saudi Arabia')
    .replace(/طنًا|أطنان|طن/g, 'Tons')
    .replace(/كجم|كيلوغرام/g, 'kg')
    .replace(/حاويات|حاوية/g, 'containers')
    .replace(/بصل/g, 'onions')
    .replace(/ثوم/g, 'garlic')
    .replace(/بطاطس/g, 'potatoes')
    .replace(/طماطم/g, 'tomatoes')
    .replace(/تمور|تمر/g, 'dates')
    .replace(/هيل/g, 'cardamom')
    .replace(/فلفل أسود/g, 'black pepper')
    .replace(/قرنفل/g, 'cloves')
    .replace(/كركم/g, 'turmeric')
    .replace(/زنجبيل/g, 'ginger')
    .replace(/سمسم/g, 'sesame')
    .replace(/كزبرة/g, 'coriander')
    .replace(/كمون/g, 'cumin')
    .replace(/خضراوات|خضروات/g, 'vegetables')
    .replace(/فواكه/g, 'fruits')
    .replace(/توابل/g, 'spices')
    .replace(/أرز/g, 'rice')
    .replace(/عسل/g, 'honey')
    .replace(/دجاج/g, 'chicken')
    .replace(/طازجة|طازج/g, 'fresh')
    .replace(/مجففة|مجفف/g, 'dried')
    .replace(/عضوية|عضوي/g, 'organic')
    .replace(/بشكل منتظم/g, 'regularly')
    .replace(/بكميات كبيرة/g, 'in bulk')
    .replace(/جودة ممتازة/g, 'premium quality')
    // Remove any remaining Arabic characters if any
    .replace(/[\u0600-\u06FF]/g, '')
    .replace(/  +/g, ' ')
    .trim();
}
