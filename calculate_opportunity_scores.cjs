const fs = require('fs');

const FOLDER_MAP = JSON.parse(fs.readFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\folder_mapping.json', 'utf8'));

// Objective scoring criteria definitions:
// 1. Demand & Market Potential (max 20)
// 2. Import Volume & Dependency (max 15)
// 3. FOB/OEM & Private Label Opportunities (max 20)
// 4. Purchasing Power (max 10)
// 5. Entry Ease & Logistics (max 10)
// 6. Trade Agreements with Egypt (max 10)
//    - Full Zero-Duty FTAs (GAFTA, Agadir, COMESA, EU Association, US QIZ): 9-10
//    - Partial / Developing FTAs (AfCFTA in implementation, MERCOSUR): 6-8
//    - MFN / Standard Bilateral: 3-5
// 7. Competitive Edge & Pricing Advantage against Asian peers (max 10)
// 8. Long-term Investment & Partnerships (max 5)

const COUNTRY_PROFILES = {
  // === GCC (6) ===
  SA: {
    demand: 19, imports: 14, fobOem: 19, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 5,
    tradeNumericUsdB: 4.39, tradeDisplay: "4.39B USD", year: "2025",
    rationaleAr: "أكبر سوق استهلاكي وتجزئة بالمنطقة، اتفاقية التجارة الحرة العربية الكبرى (GAFTA)، طلب ضخم على برامج الـ Private Label والموديلات السريعة.",
    rationaleEn: "Largest Gulf consumer market, zero-tariff GAFTA access, strong demand for private label and fast replenishment programs."
  },
  AE: {
    demand: 19, imports: 15, fobOem: 18, purchasingPower: 10, entryEase: 9, tradeAgreements: 10, competitiveEdge: 8, investment: 5,
    tradeNumericUsdB: 6.37, tradeDisplay: "6.37B USD", year: "2024",
    rationaleAr: "المركز التجاري واللوجستي وإعادة التصدير الأول إقليميًا، ومقر كبرى مجموعات التجزئة في الشرق الأوسط مع إعفاء GAFTA كامل.",
    rationaleEn: "Top regional re-export and trading hub, headquarters of major Middle East retail conglomerates, full GAFTA exemption."
  },
  KW: {
    demand: 16, imports: 13, fobOem: 17, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 1.85, tradeDisplay: "1.85B USD", year: "2024",
    rationaleAr: "قوة شرائية فائقة ومعدل إنفاق مرتفع للفرد على الملابس الراقية والمحتشمة مع وصول جمركي معفى عبر GAFTA.",
    rationaleEn: "High per-capita spending, strong purchasing power for modestwear and essentials, duty-free GAFTA access."
  },
  QA: {
    demand: 15, imports: 13, fobOem: 16, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 1.42, tradeDisplay: "1.42B USD", year: "2024",
    rationaleAr: "أعلى متوسط دخل للفرد، تفضيل للعلامات الخاصة والملابس القطنية الفاخرة، وشراكات توريد مؤسسية.",
    rationaleEn: "Leading GDP per capita, preference for premium cotton private label, robust institutional supply channels."
  },
  OM: {
    demand: 14, imports: 11, fobOem: 15, purchasingPower: 8, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 0.95, tradeDisplay: "950M USD", year: "2024",
    rationaleAr: "سوق مستقر متنامي، تكامل جغرافي ولوجستي بحري، وإعفاء جمركي عبر اتفاقية تيسير وتنمية التبادل التجاري العربي.",
    rationaleEn: "Steady consumer market, maritime proximity, zero customs tariffs under GAFTA."
  },
  BH: {
    demand: 13, imports: 10, fobOem: 14, purchasingPower: 8, entryEase: 9, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 0.68, tradeDisplay: "680M USD", year: "2024",
    rationaleAr: "سوق مفتوح وسرعة تخليص جمركي فائقة، ارتباط وثيق بالسوق الشرقي السعودي، وقنوات تجزئة نشطة.",
    rationaleEn: "Open trading environment, rapid customs clearance, strong synergy with Eastern Province Saudi market."
  },

  // === Other Arab Countries (10) ===
  EG: {
    demand: 18, imports: 12, fobOem: 20, purchasingPower: 7, entryEase: 10, tradeAgreements: 10, competitiveEdge: 10, investment: 5,
    tradeNumericUsdB: 2.84, tradeDisplay: "2.84B USD (Exports) / 1.6B USD (Imports)", year: "2024",
    rationaleAr: "القاعدة الصناعية والإنتاجية الرئيسية للمجموعة، قاعدة سلاسل إمداد محلية متكاملة وسوق محلي يتجاوز 105 مليون نسمة.",
    rationaleEn: "Core domestic manufacturing hub, integrated cotton supply chain, and 105M+ domestic population."
  },
  LY: {
    demand: 15, imports: 13, fobOem: 16, purchasingPower: 7, entryEase: 8, tradeAgreements: 10, competitiveEdge: 9, investment: 4,
    tradeNumericUsdB: 1.15, tradeDisplay: "1.15B USD", year: "2024",
    rationaleAr: "قرب جغرافي بري وبحري مباشر من مصر، إعفاء جمركي كامل، واعتماد شبه كلي على استيراد الملابس الجاهزة.",
    rationaleEn: "Direct land/sea proximity, zero customs under GAFTA, near-total dependence on apparel imports."
  },
  IQ: {
    demand: 17, imports: 14, fobOem: 16, purchasingPower: 7, entryEase: 7, tradeAgreements: 9, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 2.65, tradeDisplay: "2.65B USD", year: "2024",
    rationaleAr: "سوق استهلاكي كبير يفوق 43 مليون نسمة، طلب مرتفع على الملابس القطنية والرجالية والولادية بأسعار منافسة.",
    rationaleEn: "Massive consumer market of 43M+, high demand for basic cottons, menswear, and childrenswear."
  },
  JO: {
    demand: 14, imports: 11, fobOem: 16, purchasingPower: 7, entryEase: 9, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 0.88, tradeDisplay: "880M USD", year: "2024",
    rationaleAr: "اتفاقية أغادير وGAFTA، إمكانية التكامل الصناعي للتصدير المشترك إلى أمريكا وأوروبا.",
    rationaleEn: "Agadir Agreement & GAFTA member, potential for joint manufacturing exports to US/EU."
  },
  MA: {
    demand: 15, imports: 11, fobOem: 16, purchasingPower: 7, entryEase: 7, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 1.72, tradeDisplay: "1.72B USD", year: "2024",
    rationaleAr: "مركز صناعي إقليمي متطور مع إمكانية التكامل في الأقمشة والخيوط المصرية بموجب اتفاقية أغادير وقواعد المنشأ التراكمي.",
    rationaleEn: "Developed regional manufacturing hub; potential fabric supply integration under Agadir rules of origin."
  },
  DZ: {
    demand: 16, imports: 12, fobOem: 14, purchasingPower: 7, entryEase: 6, tradeAgreements: 9, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 1.45, tradeDisplay: "1.45B USD", year: "2024",
    rationaleAr: "سوق يتجاوز 45 مليون نسمة، طلب استهلاكي مرتفع، وفرص للتعاقد التجاري المباشر وتوريد مستلزمات الإنتاج.",
    rationaleEn: "Consumer market of 45M+, high domestic demand, direct trade potential under GAFTA framework."
  },
  TN: {
    demand: 13, imports: 10, fobOem: 15, purchasingPower: 6, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 0.92, tradeDisplay: "920M USD", year: "2024",
    rationaleAr: "شريك في اتفاقية أغادير وGAFTA، فرص للتكامل في برامج التشغيل المشترك وسلاسل إمداد البحر المتوسط.",
    rationaleEn: "Agadir and GAFTA partner, Mediterranean proximity, joint co-production programs."
  },
  LB: {
    demand: 12, imports: 10, fobOem: 13, purchasingPower: 6, entryEase: 7, tradeAgreements: 10, competitiveEdge: 8, investment: 3,
    tradeNumericUsdB: 0.54, tradeDisplay: "540M USD", year: "2024",
    rationaleAr: "سوق تجاري مميز في خطوط الأزياء والموضة والعلامات المستقلة رغم التحديات الاقتصادية والنقدية.",
    rationaleEn: "Dynamic fashion taste and independent boutiques despite macroeconomic volatility."
  },
  SD: {
    demand: 13, imports: 9, fobOem: 13, purchasingPower: 4, entryEase: 7, tradeAgreements: 10, competitiveEdge: 9, investment: 3,
    tradeNumericUsdB: 0.62, tradeDisplay: "620M USD", year: "2024",
    rationaleAr: "حدود برية وبحرية مباشرة، اتفاقية الكوميسا وGAFTA، وطلب عاجل على الملابس الأساسية والشعبية.",
    rationaleEn: "Direct geographical border, COMESA and GAFTA benefits, strong demand for affordable basics."
  },
  MR: {
    demand: 11, imports: 8, fobOem: 12, purchasingPower: 5, entryEase: 7, tradeAgreements: 9, competitiveEdge: 8, investment: 3,
    tradeNumericUsdB: 0.38, tradeDisplay: "380M USD", year: "2024",
    rationaleAr: "سوق واعد معتمد على الواردات، إعفاء جمركي عربي، وفرص لتوريد الأقمشة والملابس القطنية الأساسية.",
    rationaleEn: "Import-dependent market, Arab tariff preferences, opportunities for cotton staples."
  },

  // === European Markets (15) ===
  DE: {
    demand: 20, imports: 15, fobOem: 19, purchasingPower: 10, entryEase: 7, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 38.5, tradeDisplay: "38.5B USD", year: "2024",
    rationaleAr: "أكبر سوق ملابس في الاتحاد الأوروبي، إعفاء جمركي كامل بموجب اتفاقية الشراكة المصرية الأوروبية، طلب ضخم على القطنيات المستدامة.",
    rationaleEn: "Largest EU apparel market, 0% tariff via EU-Egypt Association Agreement, immense volume for sustainable cotton basics."
  },
  GB: {
    demand: 19, imports: 15, fobOem: 19, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 26.8, tradeDisplay: "26.8B USD", year: "2024",
    rationaleAr: "اتفاقية شراكة ثنائية مع مصر بعد بريكست تمنح دخولًا معفى من الرسوم، سوق تجزئة شديد التطور وقنوات شراء واسعة.",
    rationaleEn: "Post-Brexit UK-Egypt Association Agreement grants tariff-free access; highly structured retail and e-commerce."
  },
  FR: {
    demand: 19, imports: 14, fobOem: 18, purchasingPower: 10, entryEase: 7, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 27.2, tradeDisplay: "27.2B USD", year: "2024",
    rationaleAr: "سوق عالمي للأزياء والموضة، وصول جمركي حر بموجب الشراكة الأوروبية، واستقطاب لسلاسل التوريد السريعة في البحر المتوسط.",
    rationaleEn: "Global fashion capital, zero-tariff EU access, strategic nearshoring demand for Mediterranean agile sourcing."
  },
  IT: {
    demand: 18, imports: 14, fobOem: 18, purchasingPower: 9, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 21.4, tradeDisplay: "21.4B USD", year: "2024",
    rationaleAr: "قرب ملاحي فائق عبر موانئ البحر المتوسط، إعفاء جمركي أوروبي كامل، وشراكات عريقة مع قطاع الغزل والنسيج المصري.",
    rationaleEn: "Fast maritime shipping across Mediterranean, zero duty, historical textile trade partnerships with Egypt."
  },
  ES: {
    demand: 18, imports: 14, fobOem: 19, purchasingPower: 9, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 22.1, tradeDisplay: "22.1B USD", year: "2024",
    rationaleAr: "موطن كبرى مجموعات الموضة السريعة العالمية (إنديتكس)، طلب مكثف على برامج التوريد القريب (Nearshoring) من مصر.",
    rationaleEn: "Home of global fast-fashion giants (Inditex), high-velocity nearshoring demand favoring Egyptian production."
  },
  NL: {
    demand: 17, imports: 14, fobOem: 17, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 18.9, tradeDisplay: "18.9B USD", year: "2024",
    rationaleAr: "بوابة لوجستية وميناء روتردام لإعادة توزيع المنسوجات في شمال غرب أوروبا، وقوة شرائية ممتازة.",
    rationaleEn: "Logistics hub via Port of Rotterdam distributing into NW Europe, excellent purchasing power."
  },
  PL: {
    demand: 17, imports: 13, fobOem: 18, purchasingPower: 8, entryEase: 8, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 13.8, tradeDisplay: "13.8B USD", year: "2024",
    rationaleAr: "أسرع أسواق أوروبا الشرقية نموًا، مركز لمجموعات أزياء صاعدة (مثل LPP)، ونمو ملحوظ في عقود التصنيع الخاص.",
    rationaleEn: "Fastest-growing CEE apparel market, home to expanding retail groups (LPP), strong private label growth."
  },
  BE: {
    demand: 16, imports: 13, fobOem: 16, purchasingPower: 9, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 11.2, tradeDisplay: "11.2B USD", year: "2024",
    rationaleAr: "موقع محوري وسط أوروبا، إعفاء أوروبي كامل، وقنوات استيراد منظمة في الملابس الجاهزة والملابس المهنية.",
    rationaleEn: "Central EU position, duty-free access, established channels for retail and workwear."
  },
  SE: {
    demand: 15, imports: 12, fobOem: 16, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 6.8, tradeDisplay: "6.8B USD", year: "2024",
    rationaleAr: "سوق إسكندنافي ذو معايير استدامة بيئية واجتماعية رفيعة، تفضيل للقطن العضوي والإنتاج الأخضر المسؤول.",
    rationaleEn: "High ESG standards, organic cotton preferences, strong retail buyers with premium margins."
  },
  AT: {
    demand: 15, imports: 12, fobOem: 15, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 7.4, tradeDisplay: "7.4B USD", year: "2024",
    rationaleAr: "قوة شرائية عالية، معايير جودة دقيقة، وإعفاء كامل بموجب الشراكة مع الاتحاد الأوروبي.",
    rationaleEn: "High household income, strict quality requirements, duty-free EU-Egypt partnership."
  },
  DK: {
    demand: 14, imports: 11, fobOem: 16, purchasingPower: 10, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 5.9, tradeDisplay: "5.9B USD", year: "2024",
    rationaleAr: "مقر لمجموعات أزياء أوروبية كبرى (Bestseller)، وقنوات توريد دولية تعتمد على الجودة وسرعة التوصيل.",
    rationaleEn: "Headquarters of major fashion groups (Bestseller), demanding high quality and fast logistics."
  },
  CZ: {
    demand: 15, imports: 12, fobOem: 15, purchasingPower: 8, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 6.2, tradeDisplay: "6.2B USD", year: "2024",
    rationaleAr: "سوق وسط أوروبي نشط، نمو في التجزئة الحديثة والتجارة الإلكترونية، وإعفاء جمركي تام.",
    rationaleEn: "Central European distribution, growing e-commerce and retail presence, full tariff exemption."
  },
  PT: {
    demand: 14, imports: 11, fobOem: 16, purchasingPower: 8, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 5.4, tradeDisplay: "5.4B USD", year: "2024",
    rationaleAr: "دولة مصنعة ذات خبرة نسيجية عريقة، إمكانية التكامل في إنتاج الملابس الجاهزة الفاخرة وسلاسل القيمة الأوروبية.",
    rationaleEn: "Established textile nation; opportunities for co-manufacturing and European value chain integration."
  },
  RO: {
    demand: 14, imports: 11, fobOem: 15, purchasingPower: 7, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 5.8, tradeDisplay: "5.8B USD", year: "2024",
    rationaleAr: "سوق شرقي أوروبي صاعد، نمو مطرد في واردات الملابس الجاهزة، وقرب لوجستي عبر البحر الأسود والبحر المتوسط.",
    rationaleEn: "Emerging Eastern European buyer, steady import growth, convenient logistics via Mediterranean."
  },
  GR: {
    demand: 13, imports: 10, fobOem: 14, purchasingPower: 8, entryEase: 9, tradeAgreements: 10, competitiveEdge: 8, investment: 3,
    tradeNumericUsdB: 3.2, tradeDisplay: "3.2B USD", year: "2024",
    rationaleAr: "أقرب دولة أوروبية لمصر بحريًا (48–72 ساعة إبحار)، إعفاء جمركي أوروبي، وقنوات تجارة تجزئة وسياحة نشطة.",
    rationaleEn: "Closest EU market by sea (48-72 hrs transit), full EU tariff exemption, active seasonal tourist demand."
  },

  // === North America (2) ===
  US: {
    demand: 20, imports: 15, fobOem: 20, purchasingPower: 10, entryEase: 7, tradeAgreements: 10, competitiveEdge: 9, investment: 5,
    tradeNumericUsdB: 105.4, tradeDisplay: "105.4B USD", year: "2024",
    rationaleAr: "أكبر سوق ملابس مستورد في العالم، اتفاقية المناطق الصناعية المؤهلة (QIZ) تمنح دخولًا معفى بنسبة 100% من الجمارك، أكبر وجهة للصادرات المصرية.",
    rationaleEn: "World's largest apparel importer, 100% duty-free access via Egypt-US QIZ protocol, primary destination of Egyptian RMG."
  },
  CA: {
    demand: 17, imports: 13, fobOem: 16, purchasingPower: 10, entryEase: 7, tradeAgreements: 7, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 11.8, tradeDisplay: "11.8B USD", year: "2024",
    rationaleAr: "سوق ذو قدرة شرائية رفيعة، نظام الأفضلية المعمم (GPT)، قنوات تجزئة وسلاسل تجارية كبرى تبحث عن بدائل موثوقة.",
    rationaleEn: "High income market, GPT tariff preferences, major department and specialty chains seeking reliable suppliers."
  },

  // === South & Central America (7) ===
  CL: {
    demand: 15, imports: 12, fobOem: 15, purchasingPower: 8, entryEase: 7, tradeAgreements: 6, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 3.65, tradeDisplay: "3.65B USD", year: "2023",
    rationaleAr: "أعلى دخل للفرد في أمريكا اللاتينية، سلاسل تجزئة كبرى (Falabella, Cencosud, Ripley) تطلب كميات ضخمة من الـ Private Label.",
    rationaleEn: "Highest per-capita GDP in Latin America, major multi-national retail chains seeking private label programs."
  },
  CO: {
    demand: 15, imports: 11, fobOem: 14, purchasingPower: 7, entryEase: 6, tradeAgreements: 6, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 1.25, tradeDisplay: "1.25B USD", year: "2023",
    rationaleAr: "سوق كبير يفوق 50 مليون نسمة، طلب مستمر على ملابس التريكو والكاجوال، وفرص للمنافسة في الفئات السعرية المتوسطة.",
    rationaleEn: "Large market of 50M+, steady demand for knitwear and casualwear, competitive opportunities in mid-market."
  },
  PA: {
    demand: 14, imports: 12, fobOem: 14, purchasingPower: 8, entryEase: 8, tradeAgreements: 6, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 1.45, tradeDisplay: "1.45B USD", year: "2023",
    rationaleAr: "منطقة كولون الحرة (Colon Free Zone) كمركز إعادة تصدير وتوزيع رئيسي لكل دول أمريكا اللاتينية والبحر الكاريبي.",
    rationaleEn: "Colon Free Zone serves as regional distribution gateway for Latin America and Caribbean buyers."
  },
  PE: {
    demand: 14, imports: 10, fobOem: 13, purchasingPower: 7, entryEase: 6, tradeAgreements: 6, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 1.18, tradeDisplay: "1.18B USD", year: "2023",
    rationaleAr: "سوق استهلاكي نشط يضم سلاسل كبرى، رغم المنافسة المحلية في قطاع القطن إلا أن هناك فرصًا لمنتجات البوليستر والمزيج.",
    rationaleEn: "Active retail consumer base; demand for poly-blend and synthetic performance garments complement local cotton."
  },
  CR: {
    demand: 12, imports: 9, fobOem: 13, purchasingPower: 8, entryEase: 7, tradeAgreements: 6, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.58, tradeDisplay: "580M USD", year: "2023",
    rationaleAr: "سوق مستقر سياسيًا واقتصاديًا، نمو في مراكز التسوق والتجزئة المنظمة، ومطابقة واضحة للاشتراطات الفنية.",
    rationaleEn: "Stable economic environment, expanding organized mall retail, transparent customs procedures."
  },
  DO: {
    demand: 13, imports: 10, fobOem: 13, purchasingPower: 7, entryEase: 7, tradeAgreements: 6, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.76, tradeDisplay: "760M USD", year: "2023",
    rationaleAr: "سوق سياحي واستيرادي نشط، موقع استراتيجي في الكاريبي، وفرص لتوريد الأزياء الصيفية وملابس المنتجعات والزي الموحد.",
    rationaleEn: "Vibrant tourism economy, Caribbean hub, demand for resortwear, summer basics, and hospitality uniforms."
  },
  EC: {
    demand: 12, imports: 9, fobOem: 12, purchasingPower: 6, entryEase: 6, tradeAgreements: 6, competitiveEdge: 6, investment: 3,
    tradeNumericUsdB: 0.64, tradeDisplay: "640M USD", year: "2023",
    rationaleAr: "اقتصاد معتمد على الدولار الأمريكي يزيل مخاطر أسعار الصرف، طلب على الملابس الكاجوال والأساسية في كيتو وغواياكيل.",
    rationaleEn: "Dollarized economy mitigating FX risk, consumer demand in Quito and Guayaquil for imported basics."
  },

  // === African Markets (15) ===
  ZA: {
    demand: 17, imports: 13, fobOem: 16, purchasingPower: 8, entryEase: 7, tradeAgreements: 8, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 2.95, tradeDisplay: "2.95B USD", year: "2024",
    rationaleAr: "أكبر وأحدث سوق تجزئة للملابس في أفريقيا، وجود سلاسل عملاقة (Woolworths, Mr Price, Foschini)، واتفاقية التجارة الحرة القارية (AfCFTA).",
    rationaleEn: "Most sophisticated apparel retail market in Africa, home to major retail giants, AfCFTA preferential trade framework."
  },
  NG: {
    demand: 18, imports: 13, fobOem: 14, purchasingPower: 5, entryEase: 5, tradeAgreements: 7, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 2.45, tradeDisplay: "2.45B USD", year: "2024",
    rationaleAr: "أكبر كتلة سكانية في أفريقيا (220+ مليون نسمة)، طلب هائل على الملابس الجاهزة والملابس القطنية الشعبية مع تطبيق AfCFTA.",
    rationaleEn: "Africa's largest consumer base (220M+), massive demand for affordable readymade apparel under AfCFTA."
  },
  KE: {
    demand: 14, imports: 11, fobOem: 15, purchasingPower: 6, entryEase: 7, tradeAgreements: 10, competitiveEdge: 8, investment: 4,
    tradeNumericUsdB: 0.85, tradeDisplay: "850M USD", year: "2024",
    rationaleAr: "عضوية الكوميسا تمنح إعفاءً جمركيًا بنسبة 100%، مركز تجاري وتوزيعي لشرق أفريقيا، وقنوات تجزئة متنامية في نيروبي.",
    rationaleEn: "Full 100% customs exemption via COMESA, East African logistics gateway, fast-growing modern retail in Nairobi."
  },
  GH: {
    demand: 14, imports: 10, fobOem: 13, purchasingPower: 6, entryEase: 7, tradeAgreements: 8, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.72, tradeDisplay: "720M USD", year: "2024",
    rationaleAr: "مقر الأمانة العامة لاتفاقية AfCFTA، بيئة أعمال مستقرة في غرب أفريقيا، وفرص لنمو التجارة البينية المباشرة.",
    rationaleEn: "Host of AfCFTA Secretariat, stable business environment in West Africa, direct bilateral trade momentum."
  },
  CI: {
    demand: 14, imports: 10, fobOem: 13, purchasingPower: 6, entryEase: 7, tradeAgreements: 8, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.68, tradeDisplay: "680M USD", year: "2024",
    rationaleAr: "المركز الاقتصادي لغرب أفريقيا الفرانكوفوني (UEMOA)، نمو اقتصادي قوي، وطلب على الملابس والزي الرسمي.",
    rationaleEn: "Economic engine of Francophone West Africa (UEMOA), solid GDP growth, rising formal apparel demand."
  },
  TZ: {
    demand: 13, imports: 9, fobOem: 13, purchasingPower: 5, entryEase: 7, tradeAgreements: 8, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.52, tradeDisplay: "520M USD", year: "2024",
    rationaleAr: "بوابة بحرية عبر ميناء دار السلام لدول شرق ووسط أفريقيا الحبيسة، نمو في التجزئة بدار السلام وأروشا.",
    rationaleEn: "Maritime gateway via Dar es Salaam for landlocked neighbours, retail development in key cities."
  },
  AO: {
    demand: 13, imports: 9, fobOem: 12, purchasingPower: 6, entryEase: 5, tradeAgreements: 7, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.58, tradeDisplay: "580M USD", year: "2024",
    rationaleAr: "سوق مدفوع بالاستهلاك الحضري في لواندا، برنامج تنويع الواردات PICE، واعتماد على السلع الجاهزة.",
    rationaleEn: "Urban consumption concentrated in Luanda, import substitution policies creating partnership openings."
  },
  CM: {
    demand: 13, imports: 9, fobOem: 12, purchasingPower: 5, entryEase: 6, tradeAgreements: 8, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.48, tradeDisplay: "480M USD", year: "2024",
    rationaleAr: "القلب الاقتصادي لدول وسط أفريقيا (CEMAC/ECCAS)، فرص لبرامج التوريد التعاقدي وتوزيع الملابس الجاهزة.",
    rationaleEn: "Economic core of Central Africa, growing distribution network across Douala and Yaoundé."
  },
  SN: {
    demand: 13, imports: 9, fobOem: 12, purchasingPower: 6, entryEase: 7, tradeAgreements: 8, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.44, tradeDisplay: "440M USD", year: "2024",
    rationaleAr: "استقرار سياسي وميناء داكار الاستراتيجي، اهتمام بالأزياء والموضة الإقليمية، وتسهيلات تجارية واعدة.",
    rationaleEn: "Political stability, deep-water port of Dakar, active regional fashion culture, favorable trade logistics."
  },
  MU: {
    demand: 11, imports: 8, fobOem: 14, purchasingPower: 8, entryEase: 8, tradeAgreements: 10, competitiveEdge: 7, investment: 4,
    tradeNumericUsdB: 0.36, tradeDisplay: "360M USD", year: "2024",
    rationaleAr: "عضو الكوميسا بإعفاء جمركي 100%، مركز مالي وخدمي متطور، فرص للتكامل في خطوط التصدير والمنتجات الراقية.",
    rationaleEn: "COMESA member with 100% tariff exemption, sophisticated financial hub, luxury textile co-production."
  },
  UG: {
    demand: 12, imports: 8, fobOem: 12, purchasingPower: 5, entryEase: 6, tradeAgreements: 10, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.38, tradeDisplay: "380M USD", year: "2024",
    rationaleAr: "عضو الكوميسا بإعفاء تام من الرسوم، سوق استهلاكي شاب في كمبالا، وطلب متزايد على الملابس المدرسية والعملية.",
    rationaleEn: "Zero customs via COMESA, young demographic in Kampala, rising demand for school/work uniforms."
  },
  ZM: {
    demand: 11, imports: 8, fobOem: 12, purchasingPower: 5, entryEase: 6, tradeAgreements: 10, competitiveEdge: 7, investment: 3,
    tradeNumericUsdB: 0.32, tradeDisplay: "320M USD", year: "2024",
    rationaleAr: "عضو الكوميسا بإعفاء 100%، سوق تعديني وتجاري يطلب ملابس العمل والملابس القطنية الأساسية.",
    rationaleEn: "COMESA member with duty-free treatment, steady demand for mining workwear and basic cotton apparel."
  },
  NA: {
    demand: 11, imports: 8, fobOem: 12, purchasingPower: 7, entryEase: 7, tradeAgreements: 7, competitiveEdge: 6, investment: 3,
    tradeNumericUsdB: 0.28, tradeDisplay: "280M USD", year: "2024",
    rationaleAr: "مستوى دخل مرتفع نسبيًا، ارتباط بسلاسل التجزئة في جنوب أفريقيا (SACU)، وفرص للشحنات المتخصصة.",
    rationaleEn: "Relatively high per-capita income, integration with South African SACU retail networks."
  },
  RW: {
    demand: 11, imports: 8, fobOem: 12, purchasingPower: 6, entryEase: 8, tradeAgreements: 10, competitiveEdge: 6, investment: 3,
    tradeNumericUsdB: 0.24, tradeDisplay: "240M USD", year: "2024",
    rationaleAr: "عضو الكوميسا، أعلى مؤشرات سهولة الأعمال وشفافية الإجراءات في المنطقة، وسياسات حكومية تشجع استيراد الملابس الجديدة بدل المستعملة.",
    rationaleEn: "COMESA duty-free, leading ease-of-doing-business governance, government restrictions on used clothing boosting new imports."
  },
  MZ: {
    demand: 11, imports: 7, fobOem: 11, purchasingPower: 5, entryEase: 5, tradeAgreements: 7, competitiveEdge: 6, investment: 3,
    tradeNumericUsdB: 0.26, tradeDisplay: "260M USD", year: "2024",
    rationaleAr: "سوق ناشئ ذو خط ساحلي طويل، طلب على الملابس القطنية الاقتصادية والخفيفة، وفرص تدريجية بموجب AfCFTA.",
    rationaleEn: "Emerging coastal market, baseline demand for lightweight budget apparel, gradual AfCFTA tariff reductions."
  }
};

// Calculate scores and tiers
const allScored = [];

for (const [code, p] of Object.entries(COUNTRY_PROFILES)) {
  const totalScore = p.demand + p.imports + p.fobOem + p.purchasingPower + p.entryEase + p.tradeAgreements + p.competitiveEdge + p.investment;
  let tier = "";
  let tierAr = "";
  if (totalScore >= 80) {
    tier = "Tier 1 – Very High Opportunity";
    tierAr = "المستوى الأول – فرصة مرتفعة للغاية";
  } else if (totalScore >= 65) {
    tier = "Tier 2 – High Opportunity";
    tierAr = "المستوى الثاني – فرصة مرتفعة";
  } else if (totalScore >= 50) {
    tier = "Tier 3 – Moderate Opportunity";
    tierAr = "المستوى الثالث – فرصة متوسطة / واعدة";
  } else {
    tier = "Tier 4 – Emerging Opportunity";
    tierAr = "المستوى الرابع – فرصة ناشئة";
  }

  allScored.push({
    code,
    score: totalScore,
    tier,
    tierAr,
    ...p
  });
}

// Group by subregion and assign rank
const subregions = ["gcc", "other_arab", "europe", "africa", "north_america", "south_central_america"];

const finalRanked = [];

subregions.forEach(sub => {
  // Find countries matching
  const matching = allScored.filter(c => {
    if (sub === "gcc") return ["SA", "AE", "KW", "QA", "OM", "BH"].includes(c.code);
    if (sub === "other_arab") return ["EG", "LY", "IQ", "JO", "MA", "DZ", "TN", "LB", "SD", "MR"].includes(c.code);
    if (sub === "europe") return ["DE", "GB", "FR", "IT", "ES", "NL", "PL", "BE", "SE", "AT", "DK", "CZ", "PT", "RO", "GR"].includes(c.code);
    if (sub === "north_america") return ["US", "CA"].includes(c.code);
    if (sub === "south_central_america") return ["CL", "CO", "PA", "PE", "CR", "DO", "EC"].includes(c.code);
    if (sub === "africa") return ["ZA", "NG", "KE", "GH", "CI", "TZ", "AO", "CM", "SN", "MU", "UG", "ZM", "NA", "RW", "MZ"].includes(c.code);
    return false;
  });

  // Sort descending by score
  matching.sort((a, b) => b.score - a.score);

  matching.forEach((c, idx) => {
    finalRanked.push({
      ...c,
      subregion: sub,
      regionalRank: idx + 1,
      totalInRegion: matching.length
    });
  });
});

console.log('Total ranked countries:', finalRanked.length);

fs.writeFileSync('c:\\Users\\20101\\Downloads\\sba-brand-compass\\ranked_countries.json', JSON.stringify(finalRanked, null, 2), 'utf8');
console.log('Saved to ranked_countries.json');
