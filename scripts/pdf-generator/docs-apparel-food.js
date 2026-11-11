import {
  sectionHeader,
  glassCard,
  kpiGrid,
  glassTable,
  policyBanner,
  contactConsultationCard,
} from './doc-helpers.js';

export function buildApparelAndFoodDocs() {
  const docs = [];

  // =========================================================================
  // 1A & 1B: Apparel Manufacturing Profile (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Apparel_Manufacturing_Profile_EN.pdf',
    language: 'EN',
    docCode: 'SBA-APPAREL-MANUF-2026-EN',
    sectorLabel: 'Apparel Manufacturing & Textiles',
    title: 'Apparel Manufacturing & Fashion Profile',
    subtitle:
      'Industrial Contract Manufacturing, Dedicated Classic Shirt Facility, Private Label & Full-Package FOB Export Across 20 Global Markets',
    edition: '2026 Export Manufacturing Edition',
    heroImage: '/BG/Apparel Manufacturing/Apparel Manufacturing Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Industrial Capacity & Export Network',
          'Your Partner in Precision Apparel Manufacturing',
          'Aligned with our Apparel Division and Global Apparel Trade Portal.'
        )}
        ${kpiGrid([
          { value: '45,000', label: 'Classic Shirts / Mo', sub: '100 Dedicated Machines' },
          { value: '+2,700', label: 'Developed Styles', sub: 'Ready Industrial Library' },
          { value: '600K', label: 'Partner Network Scale', sub: '150+ Qualified Facilities' },
          { value: '20', label: 'Export Markets', sub: 'Europe, GCC & N. Africa' },
        ])}
        ${glassCard({
          title: 'Dedicated Classic Shirt Facility & Core Production Lines',
          badge: '15+ Modern Lines · 250+ Machines',
          lead: 'High-volume woven and knit manufacturing engineered for retail brands and international buyers.',
          paragraphs: [
            'Operating 15+ core production lines equipped with 250+ automated machines producing 5,000+ pieces daily (100,000–150,000 pcs/month core capacity, scaling to 600,000 pcs/month via our 150+ accredited Egyptian partner factories network).',
            'Features a dedicated Classic Shirt Facility operating 100 specialized machines (automated collar fusing presses, sleeve placket setters, multi-head buttonholers) outputting 45,000 certified dress shirts monthly in Egyptian combed cotton poplin and twill.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Commercial Engagement & 8-Stage Quality Gate',
          'OEM, ODM, Private Label, FOB & Rigorous AQL 2.5/4.0 Inspection',
          'Complete cycle from tech pack CAD/CAM pattern engineering to port container dispatch.'
        )}
        ${glassTable(
          ['Engagement Model', 'Client Responsibility', 'SBA Delivery Commitment', 'Best Suited For'],
          [
            ['OEM Contract (CM / CMT)', 'Provides Tech Pack & approved patterns', 'Precision cutting, sewing, finishing & QC to tolerance', 'Established retail chains & brands'],
            ['ODM Co-Development', 'Selects base silhouettes from +2,700 library', 'CAD/CAM grading, fabric development & sampling in 5–7 days', 'Growing fashion houses & wholesalers'],
            ['Private Label', 'Brand logo, hangtags & identity guidelines', 'Woven labels, barcode polybags & retail-ready packaging', 'Department stores & e-commerce labels'],
            ['Full-Package FOB Export', 'Approves Golden Sample & L/C or TT terms', 'Yarn-to-container execution, customs & EUR.1 / COMESA', 'International importers worldwide']
          ],
          ['20%', '25%', '32%', '23%']
        )}
        ${glassCard({
          title: '8-Stage Quality Control Protocol (Zero-Defect Export Gate)',
          badge: 'AQL 2.5 / 4.0 Compliant',
          bullets: [
            'Stages 1–4: 4-Point raw fabric inspection (< 20 pts/100 yd²), Golden Sample fit approval, CAD/CAM cutting audit (±1.0 mm tolerance), and hourly inline sewing checks.',
            'Stages 5–8: 30% mid-production collar/seam audit, 100% end-line panel & thread inspection, industrial steam pressing/metal detection, and pre-shipment AQL 2.5/4.0 container audit.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          '11 Collections & Free Manufacturing Consultation',
          'Comprehensive Wovens, Knits, Shirkwear & Kidswear Production',
          'Discuss custom styles, GSM weights, or request samples free of charge.'
        )}
        ${glassCard({
          title: 'Eleven Verified Manufacturing Collections',
          badge: '+2,700 Archive Styles',
          paragraphs: [
            '1. Women’s Wear (Dresses, Co-ords) · 2. Men’s Wear (Dress Shirts, Polos, Chinos) · 3. Kids & Baby Wear (0–14Y Organic Cotton) · 4. Casual Wear (Heavy Fleece Hoodies) · 5. Homewear & Loungewear · 6. Classic Formal Shirts · 7. Sportswear (Dry-Fit) · 8. Underwear & Basics · 9. Evening & Occasion · 10. Abayas & Modest Wear · 11. Custom Textiles & Fabrics.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Apparel_Manufacturing_Profile_AR.pdf',
    language: 'AR',
    docCode: 'SBA-APPAREL-MANUF-2026-AR',
    sectorLabel: 'تصنيع الملابس الجاهزة والمنسوجات',
    title: 'دليل قطاع تصنيع الملابس وتطوير الأزياء',
    subtitle:
      'التصنيع التعاقدي المتكامل، مصنع القمصان الكلاسيكية المتخصص، العلامات الخاصة وبرامج التصدير FOB عبر 20 سوقًا دوليًا',
    edition: 'الإصدار الصناعي التصديري المعتمد · 2026',
    heroImage: '/BG/Apparel Manufacturing/Apparel Manufacturing Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'القدرات الصناعية وشبكة التصدير',
          'شريكك الموثوق في رحلة تصنيع وتصدير الملابس الجاهزة',
          'متطابق مع دليل قطاع الملابس وبوابة الفرص التجارية للمنسوجات على الموقع الرسمي.'
        )}
        ${kpiGrid([
          { value: '45,000', label: 'قميص كلاسيكي / شهر', sub: '100 ماكينة آلية مخصصة' },
          { value: '+2,700', label: 'موديل مصنع ومطور', sub: 'أرشيف تصميمات جاهز' },
          { value: '600K', label: 'طاقة الشبكة الإنتاجية', sub: '+150 منشأة ومصنع شريك' },
          { value: '20', label: 'سوق تصدير دولي', sub: 'أوروبا، الخليج وشمال أفريقيا' },
        ])}
        ${glassCard({
          title: 'مصنع القمصان الكلاسيكية المتخصص وخطوط الإنتاج الحديثة',
          badge: '+15 خط إنتاج · +250 ماكينة',
          lead: 'تصنيع احترافي للمنسوج والتريكو مصمم لخدمة العلامات التجارية وسلاسل التجزئة الدولية.',
          paragraphs: [
            'تشغل المنظومة أكثر من 15 خط إنتاج رئيسيًا تضم +250 ماكينة متخصصة بطاقة تتجاوز 5,000 قطعة يوميًا (100,000 إلى 150,000 قطعة شهريًا كطاقة أساسية، وتتوسع حتى 600,000 قطعة شهريًا عبر شبكة المصانع الشريكة المعتمدة البالغة +150 منشأة).',
            'تتضمن الطاقة مصنعًا مخصصًا للقمصان الكلاسيكية يضم 100 ماكينة حديثة (لدمج الياقات والأساور، العراوي الأوتوماتيكية، وتركيب الأزرار) لإنتاج 45,000 قميص رسمي معتمد شهريًا من أجود أقطان البوبلين والتويل المصري.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'نماذج التعاون الدولي ونظام الجودة ذو الـ 8 مراحل',
          'برامج OEM وODM والماركات الخاصة والتصدير الكامل FOB وفق معيار AQL 2.5/4.0',
          'إدارة متكاملة تبدأ من الباترون الرقمي CAD/CAM حتى تحميل الحاويات في ميناء التصدير.'
        )}
        ${glassTable(
          ['نموذج التعاقد', 'دور العلامة التجارية / المشتري', 'التزام مجموعة سامي بن عياد بالتنفيذ', 'الفئة الأنسب'],
          [
            ['التصنيع للغير OEM (CM / CMT)', 'تقديم ملف المواصفات Tech Pack والباترون', 'القص، الحياكة، التشطيب والفحص الدقيق للمقاسات', 'سلاسل التجزئة والبراندات الكبرى'],
            ['التصميم والتطوير ODM', 'اختيار موديلات من أرشيف +2,700 تصميم', 'تعديل الباترون وتدريج المقاسات والعينة خلال 5–7 أيام', 'المستوردون وتجار الجملة'],
            ['العلامات الخاصة Private Label', 'توفير الشعار والهوية البصرية للعلامة', 'تجهيز التيكت المنسوج، الهانج تاج، وتغليف التجزئة', 'المتاجر الإلكترونية والبراندات الناشئة'],
            ['برامج التصدير المتكاملة FOB', 'اعتماد العينة الذهبية وشروط الدفع', 'شراء الخامات، التصنيع، التخليص، وشهادات EUR.1 وكوميسا', 'شركات الاستيراد الدولية']
          ],
          ['20%', '25%', '32%', '23%']
        )}
        ${glassCard({
          title: 'بروتوكول مراقبة الجودة ذو الـ 8 مراحل المعتمدة',
          badge: 'معيار فحص AQL 2.5 / 4.0',
          bullets: [
            'المراحل 1–4: فحص القماش بنظام النقاط الأربع (< 20 نقطة/100 ياردة)، اعتماد العينة الذهبية، مراجعة القص بالكمبيوتر (±1.0 مم)، والتفتيش الساعي على خطوط الحياكة.',
            'المراحل 5–8: فحص منتصف الإنتاج عند 30%، الفحص النهائي للقطع بنسبة 100%، الكي بالبخار وكشف المعادن، وأخيراً فحص ما قبل الشحن بالعينات الإحصائية AQL.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'الفئات الـ 11 المعتمدة والاستشارة التصنيعية المجانية',
          'تنوع كامل يغطي القمصان، النسائي، الرجالي، الأطفال، الرياضي والمنزلي',
          'تواصل لمناقشة مواصفات مجموعتك القادمة أو طلب العينات مجانًا.'
        )}
        ${glassCard({
          title: 'مجموعات الإنتاج الـ 11 المتوفرة',
          badge: '+2,700 موديل في الأرشيف',
          paragraphs: [
            '1. الملابس النسائية (فساتين، أطقم، مودست وير) · 2. الملابس الرجالية · 3. ملابس الأطفال والرضع (قطن 100%) · 4. الكاجوال والهوديز · 5. ملابس المنزل واللانجري · 6. القمصان الكلاسيكية الرسمية · 7. الملابس الرياضية Dry-Fit · 8. الملابس الداخلية الأساسية · 9. السواريه والمناسبات · 10. العبايات · 11. توريد الأقمشة والمنسوجات.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 2A & 2B: Apparel Product Catalogue (EN & AR) — 2 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Apparel_Product_Catalogue_EN.pdf',
    language: 'EN',
    docCode: 'SBA-APPAREL-CAT-2026-EN',
    sectorLabel: 'Apparel · Product Lookbook & Specs',
    title: 'Apparel Product Catalogue (11 Collections)',
    subtitle:
      'Production Matrix Detailing Fabric Compositions, GSM Weights, International Size Curves & Standard Minimum Order Quantities (MOQs)',
    edition: '2026 Buyer Specification Catalogue',
    heroImage: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
    pages: [
      `
        ${sectionHeader(
          'Catalogue Specifications · 11 Collections',
          'Technical Fabrics, Weights (GSM), Size Grading & MOQs',
          'Aligned with our +2,700 Style Library and Curated 150+ Sample Showroom (/models).'
        )}
        ${glassTable(
          ['Collection Category', 'Primary Fabric Compositions', 'Weight Range', 'Size Curves', 'Standard MOQ'],
          [
            ['01. Women’s Wear', 'Rayon, Linen, Viscose, Modal & Poly-Blends', '140–220 GSM', 'XS to 3XL', '500 pcs / color'],
            ['02. Men’s Wear', 'Combed Cotton, Pique, Oxford & Chino Twill', '160–280 GSM', 'S to 4XL', '500 pcs / color'],
            ['03. Kids & Baby Wear', '100% Organic Combed Cotton Interlock & Jersey', '160–200 GSM', '0–24M & 2–14Y', '600 pcs / style'],
            ['04. Casual Wear', 'Heavyweight French Terry Fleece & Single Jersey', '240–380 GSM', 'S to 3XL', '500 pcs / color'],
            ['05. Homewear & Loungewear', 'Soft Single Jersey, Cotton Spandex & Satin', '140–180 GSM', 'XS to 3XL', '500 pcs / color'],
            ['06. Classic Formal Shirts', 'High-Thread Egyptian Poplin, Dobby & Twill', '110–145 GSM', '14.5"–18.5" Neck', '500 pcs / style'],
            ['07. Sportswear & Activewear', 'Moisture-Wicking Dry-Fit Poly & Elastane', '150–220 GSM', 'XS to XXL', '500 pcs / color'],
            ['08. Underwear & Basics', '100% Combed Egyptian Cotton & Fine Rib', '140–170 GSM', 'S to 3XL', '1,000 pcs / pack'],
            ['09. Evening & Occasion', 'Crepe, Satin, Chiffon & Structured Lurex', '120–260 GSM', 'XS to XXL', '300 pcs / style'],
            ['10. Abayas & Modest Wear', 'Premium Nida, Korean Crepe, Linen & Georgette', '140–210 GSM', 'Length 50–62', '300 pcs / color'],
            ['11. Custom Fabric Supply', 'Single Jersey, Pique, Interlock, Fleece & Rib', 'Custom GSM', 'Tubular / Open Width', '1,000 kg / fabric']
          ],
          ['20%', '30%', '14%', '18%', '18%']
        )}
      `,
      `
        ${sectionHeader(
          'Online Showroom & Free Sampling Coordination',
          'Browse Verified Models Live & Schedule Free Production Consultation',
          'Digital catalogue available at www.sami-trade.com/models'
        )}
        ${glassCard({
          title: 'Showroom Sample Highlights (JZRA & SBA Archive)',
          badge: '150+ Curated Models Live',
          lead: 'Featured silhouettes ready for private label customization and immediate buyer sampling.',
          bullets: [
            'Women & Modest: Wrap Maxi Dresses (SBA-WDR-1002), Tailored Sets (SBA-WST-1012), Classic Abayas (SBA-WAB-1015).',
            'Men & Formal: Egyptian Poplin Classic Shirts (SBA-MSH-1062), Heavyweight Hoodies (SBA-MHD-1007), Slim Polos (SBA-MPL-1047).',
            'Children & Infant: Girls Draped Dresses (SBA-CDR-1020), Kids Cotton Sets (SBA-CST-1049), Kids Hoodies (SBA-CHD-1121).'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Apparel_Product_Catalogue_AR.pdf',
    language: 'AR',
    docCode: 'SBA-APPAREL-CAT-2026-AR',
    sectorLabel: 'الملابس · كتالوج الموديلات والمواصفات',
    title: 'كتالوج منتجات ومواصفات تصنيع الملابس (11 فئة)',
    subtitle:
      'دليل المواصفات الفنية للأقمشة، الأوزان (GSM)، جداول المقاسات الدولية، والحد الأدنى للكميات (MOQ) عبر كافة المجموعات',
    edition: 'كتالوج المشترين والمستوردين · 2026',
    heroImage: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
    pages: [
      `
        ${sectionHeader(
          'مواصفات الكتالوج · 11 فئة ملابس معتمدة',
          'تركيبات الأقمشة، الأوزان، المقاسات، والحد الأدنى للكميات (MOQ)',
          'متطابق مع مكتبة +2,700 موديل ومعرض العينات الرقمي (/models).'
        )}
        ${glassTable(
          ['الفئة الإنتاجية', 'خامات الأقمشة المعتمدة', 'نطاق الوزن GSM', 'المقاسات', 'الحد الأدنى MOQ'],
          [
            ['01. الملابس النسائية', 'رايون، كتان، فيسكوز، مودال وأقطان مخلوطة', '140–220 GSM', 'XS إلى 3XL', '500 قطعة / لون'],
            ['02. الملابس الرجالية', 'قطن مصري ممشط، بيكيه، أوكسفورد وجبردين', '160–280 GSM', 'S إلى 4XL', '500 قطعة / لون'],
            ['03. ملابس الأطفال والرضع', 'قطن عضوي 100% إنترلوك وسنجل جيرسي ناعم', '160–200 GSM', '0–24 شهر و2–14 سنة', '600 قطعة / موديل'],
            ['04. الكاجوال والهوديز', 'ميلتون قطن ثقيل (French Terry) وجيرسي', '240–380 GSM', 'S إلى 3XL', '500 قطعة / لون'],
            ['05. الملابس المنزلية', 'قطن ليكرا ناعم وسنجل جيرسي وساتان', '140–180 GSM', 'XS إلى 3XL', '500 قطعة / لون'],
            ['06. القمصان الكلاسيكية', 'بوبلين مصري عالي الكثافة وتويل ودوبي', '110–145 GSM', 'ياقة 14.5–18.5 بوصة', '500 قطعة / موديل'],
            ['07. الملابس الرياضية', 'بوليستر Dry-Fit طارد للرطوبة وإيلاستان', '150–220 GSM', 'XS إلى XXL', '500 قطعة / لون'],
            ['08. الملابس الداخلية والأساسية', 'قطن مصري ممشط 100% وريب مرن', '140–170 GSM', 'S إلى 3XL', '1,000 قطعة / باكدج'],
            ['09. ملابس السهرة والمناسبات', 'كريب، ساتان، شيفون وأقمشة مطرزة', '120–260 GSM', 'XS إلى XXL', '300 قطعة / موديل'],
            ['10. العبايات والملابس المحتشمة', 'ندى، كريب كوري، كتان وجورجيت ناعم', '140–210 GSM', 'أطوال 50 إلى 62', '300 قطعة / لون'],
            ['11. توريد الأقمشة الخام', 'سنجل جيرسي، بيكيه، ميلتون وريب مصبوغ', 'أوزان مخصصة', 'أتواب مفتوح / مقفول', '1,000 كجم / لون']
          ],
          ['20%', '30%', '14%', '18%', '18%']
        )}
      `,
      `
        ${sectionHeader(
          'معرض الموديلات الرقمي والاستشارة المجانية',
          'استعرض العينات المعتمدة أونلاين وتواصل لبدء الإنتاج التعاقدي',
          'معرض العينات الموثق متاح على: www.sami-trade.com/models'
        )}
        ${glassCard({
          title: 'نماذج بارزة من الموديلات المعتمدة للعرض والتخصيص',
          badge: '+150 موديل معروض بالصور',
          lead: 'موديلات جاهزة للتعديل أو الإنتاج بالعلامة التجارية الخاصة للمشتري (Private Label).',
          bullets: [
            'النسائي والمحتشم: فساتين ماكسي (SBA-WDR-1002)، أطقم متناسقة (SBA-WST-1012)، عبايات كلاسيكية (SBA-WAB-1015).',
            'الرجالي والرسمي: قمصان بوبلين كلاسيكية (SBA-MSH-1062)، هوديز ثقيلة (SBA-MHD-1007)، بولو سليم فت (SBA-MPL-1047).',
            'الأطفال والرضع: فساتين أطفال قطنية (SBA-CDR-1020)، أطقم أطفال أساسية (SBA-CST-1049)، هوديز أطفال (SBA-CHD-1121).'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 3A & 3B: Natural Products & Food Trading Profile (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Natural_Products_Profile_EN.pdf',
    language: 'EN',
    docCode: 'SBA-FOOD-TRADE-2026-EN',
    sectorLabel: 'Natural & Agri-Food Products Division',
    title: 'Natural Products & Food Trading Profile',
    subtitle:
      'Authentic Egyptian & Mediterranean Agricultural Origins, NFSA-Licensed Cold Logistics & Documented Demand Across 84 Global Markets',
    edition: '2026 Food Export & Trade Edition',
    heroImage: '/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Origin Traceability & Verified Global Trade Demand',
          'From Nature’s Finest to Global Markets',
          'Backed by our audited 2023–2026 commercial archive on the Global Opportunities Exchange.'
        )}
        ${kpiGrid([
          { value: '84', label: 'Buyer Markets', sub: 'Across 6 Continents' },
          { value: '738', label: 'Purchase Inquiries', sub: '2023–2026 Audited Log' },
          { value: '269', label: '2025 Active Inquiries', sub: 'Curated & Verified' },
          { value: '7', label: 'Export Divisions', sub: 'NFSA / ISO 22000 Hubs' },
        ])}
        ${glassCard({
          title: 'Certified Egyptian Origin & Cold-Chain Infrastructure',
          badge: 'NFSA · ISO 22000 · HACCP',
          lead: 'Direct farm partnerships across Siwa Oasis, Upper Egypt botanical cooperatives & the Nile Delta.',
          paragraphs: [
            'SAMI BIN AYYAD GROUP Natural Products Division supplies wholesale importers, industrial food processors, and retail private-label distributors through NFSA-registered sorting, optical cleaning, fumigation, and climate-controlled cold storage hubs.',
            'Our commercial food desk maintains complete batch-level traceability, accredited lab Certificates of Analysis (COA), zero-pesticide verification, and full customs clearance (Phytosanitary, Health, EUR.1, Halal, Certificate of Origin).'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Export Categories & Supply Models',
          'Bulk Industrial Sourcing, Private Label & Custom Export Grading',
          'Comprehensive product portfolio synchronized with our live Food Sector page.'
        )}
        ${glassTable(
          ['Product Category', 'Flagship Varieties & Origins', 'Key Grading & Specs', 'Packing & Container Options'],
          [
            ['Honey & Bee Products', 'Wild Sidr Honey, Mountain Blossom, Clover & Royal Jelly', 'Moisture ≤ 18%, HMF < 20 mg/kg', '250g–1kg Glass Jars · 25kg–300kg Drums'],
            ['Olives & Olive Oil', 'Cold-Pressed EVOO (< 0.6% acidity), Tofahi & Kalamata', 'First Cold Extraction (< 27°C)', '500ml–5L Glass/Tins · 200L Steel/HDPE'],
            ['Dates & Date Products', 'Egyptian Siwi Oasis Dates, Jumbo Medjool & Date Paste', 'Moisture 18–20%, Super Jumbo', '250g–5kg Retail · 10kg Bulk Reefers'],
            ['Medicinal Herbs & Spices', 'Aswan Hibiscus, Chamomile, Peppermint & Sun-Dried Cumin', 'Purity ≥ 99%, Moisture < 9–12%', '25kg Woven PP Sacks & Pressed Bales'],
            ['Natural Powdered Juices', 'Spray-Dried Hibiscus, Tamarind, Doum & Carob Extracts', '100% Soluble, Moisture < 5%', '1kg Vacuum Pouches · 25kg Fiber Drums'],
            ['Seeds & Agri-Commodities', 'Golden & White Sesame Seeds, Nigella (Black Seed)', 'Machine & Optical Purity > 99.5%', '25kg & 50kg Multi-Ply Export Bags']
          ],
          ['20%', '30%', '22%', '28%']
        )}
        ${glassCard({
          title: 'Flexible International Supply Models',
          badge: 'FOB · CIF · Private Label',
          bullets: [
            'Bulk Industrial & Commodity Supply: Full Container Loads (20ft/40ft FCL & Reefers) for packers and factories.',
            'Private Label (OEM) Retail Packaging: Custom jar sizing, multi-language nutrition labeling & palletized dispatch.',
            'Spot Quotations & Seasonal Contracts: Forward harvest allocations securing stable pricing and moisture grading.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'Global Demand Intelligence & Free Buyer Consultation',
          'Request Lot Samples, Lab COAs & FOB/CIF Quotations',
          'Live market analytics published at www.sami-trade.com/trade'
        )}
        ${glassCard({
          title: 'Documented Global Buyer Network (2023–2026)',
          badge: 'Verified Market Demand',
          paragraphs: [
            'Our Global Opportunities Food portal tracks real international procurement across 84 countries spanning the GCC (Saudi Arabia, UAE, Kuwait), Asia (Indonesia, Malaysia, India), Europe (Germany, UK, France, Italy), Africa, and the Americas — totaling 738 audited purchase requests.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Natural_Products_Profile_AR.pdf',
    language: 'AR',
    docCode: 'SBA-FOOD-TRADE-2026-AR',
    sectorLabel: 'المنتجات الطبيعية والغذائية',
    title: 'دليل قطاع المنتجات الطبيعية والتوريد الغذائي',
    subtitle:
      'مصادر زراعية مصرية أصيلة، محطات فرز وتبريد مرخصة من سلامة الغذاء NFSA، وشبكة طلبات موثقة في 84 دولة حول العالم',
    edition: 'الإصدار التصديري الغذائي المعتمد · 2026',
    heroImage: '/BG/Natural & Agri-Food Products/Natural & Agri-Food Products Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'أصالة المصادر وحجم الطلب الدولي الموثق',
          'من خيرات الطبيعة إلى الأسواق العالمية',
          'مدعوم بأرشيف الطلبات التجارية المدقق للأعوام 2023–2026 على بوابة الفرص العالمية.'
        )}
        ${kpiGrid([
          { value: '84', label: 'دولة في شبكة الطلبات', sub: 'عبر 6 قارات عالمية' },
          { value: '738', label: 'طلب شراء موثق', sub: 'أرشيف 2023–2026 المدقق' },
          { value: '269', label: 'طلب شراء في 2025', sub: 'بيانات محدثة ومثرية' },
          { value: '7', label: 'فئات تصديرية', sub: 'محطات NFSA / ISO 22000' },
        ])}
        ${glassCard({
          title: 'البنية التحتية للتصدير الزراعي والتتبع الغذائي',
          badge: 'NFSA · ISO 22000 · HACCP',
          lead: 'شراكات مزارع مباشرة في واحة سيوة وصعيد مصر والدلتا بمحطات فرز وتعبئة وتبريد مرخصة.',
          paragraphs: [
            'يعمل قطاع المنتجات الطبيعية بمجموعة سامي بن عياد على تأمين وتوريد المحاصيل والأغذية الطبيعية لكبرى شركات الاستيراد ومصانع الأغذية وسلاسل التجزئة الدولية عبر محطات مزودة بفرازات ضوئية وغرف تبخير وحفظ مبرد.',
            'تلتزم كافة الشحنات بالتتبع الكامل (Traceability) وإصدار شهادات التحليل المخبري COA وشهادات الخلو من المبيدات وكافة مستندات التصدير (الفحص الحجري، الشهادة الصحية، المنشأ، EUR.1، وحلال).'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'الفئات التصديرية السبع ونماذج التوريد',
          'توريد سائب للمصانع، تعبئة بعلامات خاصة، وفرز قياسي للتصدير',
          'متطابق مع دليل المنتجات المنشور على صفحة قطاع الأغذية بالموقع الرسمي.'
        )}
        ${glassTable(
          ['الفئة التصديرية', 'أبرز الأصناف والمصادر المعتمدة', 'مواصفات الجودة والفرز', 'خيارات التعبئة والشحن'],
          [
            ['العسل ومنتجات النحل', 'عسل السدر البري، زهور الجبل، البرسيم، وغذاء الملكات', 'رطوبة ≤ 18%، HMF < 20 مجم/كجم', 'برطمانات 250جم–1كجم · براميل 25–300كجم'],
            ['الزيتون وزيت الزيتون', 'زيت زيتون بكر ممتاز (حموضة < 0.6%) وزيتون تفاحي', 'عصر على البارد (< 27°م)', 'عبوات زجاجية/صفيح 500مل–5لتر · براميل 200لتر'],
            ['التمور ومنتجات التمر', 'التمور السيوي من الواحة، المجدول الجامبو، وعجينة التمر', 'رطوبة قياسية 18–20%، فرز جامبو', 'كراتين تجزئة 250جم–5كجم · سائب 10كجم مبرد'],
            ['الأعشاب والتوابل الطبية', 'كركديه أسوان، بابونج، نعناع، وكمون مجفف شمسيًا', 'نقاء ≥ 99%، رطوبة < 9–12%', 'أجولة بولي بروبلين 25كجم وبالات مضغوطة'],
            ['العصائر البودر الطبيعية', 'مستخلصات كركديه، تمر هندي، دوم وخروب فوري', 'ذوبان 100%، رطوبة < 5%', 'أكياس فاكيوم 1كجم · براميل ألياف 25كجم'],
            ['البذور والسلع الزراعية', 'السمسم الأبيض والذهبي وحبة البركة المنقى آليًا', 'نقاء فرز ضوئي وليزر > 99.5%', 'شكائر تصدير متعددة الطبقات 25 و50كجم']
          ],
          ['20%', '30%', '22%', '28%']
        )}
        ${glassCard({
          title: 'نماذج التوريد التعاقدي الدولي المرنة',
          badge: 'FOB · CIF · Private Label',
          bullets: [
            'التوريد السائب (Bulk Industrial Supply): شحنات حاويات كاملة 20 و40 قدمًا ومبردة لمصانع التعبئة.',
            'التصنيع للعلامات الخاصة (Private Label): تصميم وتنفيذ عبوات التجزئة بملصقات متعددة اللغات.',
            'التعاقدات الموسمية وعقود التوريد: حجز حصص المحاصيل موسميًا لتثبيت الجودة والأسعار التصديرية.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'بيانات الطلب العالمي والاستشارة الغذائية المجانية',
          'طلب عينات فحص، شهادات التحليل COA وعروض أسعار FOB/CIF',
          'مؤشرات السوق منشورة ومحدثة عبر www.sami-trade.com/trade'
        )}
        ${glassCard({
          title: 'شبكة المشترين الدوليين الموثقة (2023–2026)',
          badge: 'طلب سوقي حقيقي موثق',
          paragraphs: [
            'ترصد بوابة الفرص العالمية لقطاع الأغذية طلبات الشراء الفعلية من 84 دولة تشمل الخليج (السعودية، الإمارات، الكويت)، آسيا (إندونيسيا، ماليزيا، الهند)، أوروبا (ألمانيا، بريطانيا، فرنسا، إيطاليا)، أفريقيا والأمريكتين بإجمالي 738 طلب شراء موثق.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 4A & 4B: Natural Products Catalogue (EN & AR) — 2 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Natural_Products_Catalogue_EN.pdf',
    language: 'EN',
    docCode: 'SBA-FOOD-CAT-2026-EN',
    sectorLabel: 'Food Division · Product Dossiers',
    title: 'Natural Products & Agri-Food Export Catalogue',
    subtitle:
      'Technical Specifications, Microbiological/Chemical Limits, Export Packaging & MOQs for Eight Flagship Egyptian Agricultural Products',
    edition: '2026 Importer Technical Catalogue',
    heroImage: '/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg',
    pages: [
      `
        ${sectionHeader(
          'Flagship Product Specifications · Technical Index',
          'Verified Chemical, Moisture & Packaging Standards',
          'Certified commodities matching our Products Catalogue (/products).'
        )}
        ${glassTable(
          ['Product Name', 'Origin / Grade', 'Key Laboratory & Quality Specs', 'Packaging & Shelf Life', 'MOQ'],
          [
            ['Pure Wild Sidr Honey', 'Egypt · Grade A Raw Unfiltered', 'Moisture ≤ 18%, HMF < 20 mg/kg, Diastase ≥ 10', '250g–1kg Jars / 25–300kg Drums · 24–36M', '600 kg'],
            ['Extra Virgin Olive Oil (EVOO)', 'Mediterranean Groves · Cold Press', 'Acidity ≤ 0.6%, Peroxide < 12 meq O₂/kg', '500ml–1L Glass / 5L Tin / 200L Steel · 24M', '2 MT'],
            ['Egyptian Tofahi Jumbo Olives', 'Oasis & Coastal · Brine Cured', '80–120 fruits/kg, firm crisp texture', '10kg / 15kg / 200L HDPE Drums · 18M', '1 FCL (18 MT)'],
            ['Jumbo Medjool & Siwi Dates', 'Siwa & Oasis · Graded Premium', 'Moisture 18–22%, Skin separation < 5%', '250g–5kg Retail / 10kg Bulk Reefers · 12M', '1 MT'],
            ['Whole Dried Hibiscus Calyces', 'Aswan / Upper Egypt · Whole', 'Deep ruby flowers, Moisture < 12%, Non-GMO', '20kg–25kg PP Sacks / Pressed Bales · 24M', '3 MT'],
            ['Instant Spray-Dried Hibiscus', 'Certified Extract Facility', '100% Water soluble, Moisture < 5%, Pure', '1kg Vacuum Foil Pouches / 25kg Drums · 24M', '500 kg'],
            ['Sun-Dried Cumin Seeds', 'Upper Egypt Farming Guilds', 'Purity ≥ 99.0%, Volatile Oil ≥ 2.5%, Moist < 9%', '25kg Woven PP Export Sacks · 24M', '2 MT'],
            ['Golden & White Sesame Seeds', 'Nile River Valley · Laser Cleaned', 'Purity ≥ 99.5%, Oil ≥ 50%, Moisture < 6%', '25kg & 50kg Multi-Ply Export Bags · 18M', '1 FCL (18 MT)']
          ],
          ['20%', '18%', '28%', '24%', '10%']
        )}
      `,
      `
        ${sectionHeader(
          'Export Documentation & Sample Coordination',
          'Zero-Compromise Compliance & Free Supply Chain Consultation',
          'Full batch lab testing prior to port dispatch.'
        )}
        ${glassCard({
          title: 'Mandatory Export Clearance Dossier per Shipment',
          badge: 'NFSA & ISO 22000 Compliant',
          bullets: [
            'Accredited Lab Certificate of Analysis (COA): Pesticide residues, heavy metals, aflatoxins & microbiology.',
            'Official Phytosanitary Certificate, Egyptian Health Certificate & Chamber of Commerce Certificate of Origin.',
            'EUR.1 / COMESA / Arab League Free-Trade Preference Certificates & Accredited Halal Certification.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Natural_Products_Catalogue_AR.pdf',
    language: 'AR',
    docCode: 'SBA-FOOD-CAT-2026-AR',
    sectorLabel: 'المنتجات الغذائية · كتالوج المواصفات',
    title: 'كتالوج التصدير للتمور والمنتجات الطبيعية',
    subtitle:
      'المواصفات الفنية والمخبرية القياسية، نسب الرطوبة والنقاء، خيارات التعبئة، والحد الأدنى للطلبات لثمانية منتجات تصديرية رائدة',
    edition: 'كتالوج المستوردين والمواصفات القياسية · 2026',
    heroImage: '/BG/Natural & Agri-Food Products/Dates & Palm Products.jpg',
    pages: [
      `
        ${sectionHeader(
          'المواصفات الفنية للمنتجات الرئيسية',
          'معايير التحليل المخبري، الرطوبة، والتعبئة المعتمدة للتصدير',
          'مواصفات متطابقة تمامًا مع كتالوج المنتجات على الموقع (/products).'
        )}
        ${glassTable(
          ['اسم المنتج', 'المصدر والدرجة', 'المواصفات المخبرية والقياسية', 'التعبئة وفترة الصلاحية', 'الحد الأدنى'],
          [
            ['عسل السدر البري النقي', 'مصر · درجة أولى خام', 'رطوبة ≤ 18%، HMF < 20 مجم/كجم، دياستيز ≥ 10', 'برطمان 250جم–1كجم / براميل 25–300كجم · 36ش', '600 كجم'],
            ['زيت الزيتون البكر الممتاز', 'بساتين الساحل · عصر بارد', 'حموضة ≤ 0.6%، بيروكسيد < 12 مللي مكافئ', 'زجاج 500مل–1لتر / صفيح 5لتر / براميل 200لتر · 24ش', '2 طن'],
            ['الزيتون التفاحي الجامبو', 'سيوة والساحل · تخليل طبيعي', 'حجم 80–120 ثمرة/كجم، قوام متماسك', 'براميل غذائية 10 و15 كجم و200 لتر · 18ش', 'حاوية 18 طن'],
            ['التمور المجدول والسيوي', 'واحة سيوة · فرز ممتاز', 'رطوبة 18–22%، انفصال قشرة < 5%', 'علب 250جم–5كجم / كراتين سائب 10كجم · 12ش', '1 طن'],
            ['زهور الكركديه الأسواني', 'أسوان وصعيد مصر · زهرة كاملة', 'لون ياقوتي غامق، رطوبة < 12%، نقي', 'أجولة 20–25 كجم وبالات مكبوسة · 24ش', '3 طن'],
            ['بودرة الكركديه سريعة الذوبان', 'محطة استخلاص وتجفيف رذاذي', 'ذوبان مائي 100%، رطوبة < 5%، بدون إضافات', 'أكياس فاكيوم 1كجم / براميل ألياف 25كجم · 24ش', '500 كجم'],
            ['بذور الكمون المجفف شمسيًا', 'مزارع صعيد مصر المعتمدة', 'نقاء ≥ 99.0%، زيت طيار ≥ 2.5%، رطوبة < 9%', 'شكائر بولي بروبلين منسوجة 25كجم · 24ش', '2 طن'],
            ['بذور السمسم الذهبي والأبيض', 'وادي النيل · فرز بالليزر', 'نقاء ≥ 99.5%، نسبة زيت ≥ 50%، رطوبة < 6%', 'شكائر تصدير متعددة الطبقات 25 و50 كجم · 18ش', 'حاوية 18 طن']
          ],
          ['20%', '18%', '28%', '24%', '10%']
        )}
      `,
      `
        ${sectionHeader(
          'مستندات التخليص والتنسيق التصديري',
          'شهادات الفحص المخبري، الحجر الزراعي، وطلب العينات المجانية',
          'مراجعة كاملة لكل شحنة قبل إغلاق الحاويات بالميناء.'
        )}
        ${glassCard({
          title: 'ملف الشهادات المرفق بكل شحنة تصديرية معتمدة',
          badge: 'امتثال NFSA و ISO 22000',
          bullets: [
            'شهادة تحليل مخبري معتمدة (COA): فحص متبقيات المبيدات، المعادن الثقيلة، الأفلاتوكسين والميكروبيولوجي.',
            'شهادة الحجر الزراعي المصرية، الشهادة الصحية التصديرية، وشهادة المنشأ المعتمدة من الغرف التجارية.',
            'شهادات الإعفاء الجمركي (EUR.1 الأوروبية، الكوميسا، التيسير العربية) وشهادات الذبح/المنتج الحلال المعتمدة.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 5A & 5B: Complete Products Portfolio (Consolidated Apparel + Food, EN & AR) — 2 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Complete_Products_Portfolio_EN.pdf',
    language: 'EN',
    docCode: 'SBA-ALL-PRODUCTS-2026-EN',
    sectorLabel: 'Group Products Portfolio',
    title: 'Complete Products Portfolio (Apparel & Agri-Food)',
    subtitle:
      'Consolidated B2B Export Catalogue Uniting 11 Apparel Collections (+2,700 Styles) and 7 Natural Food Divisions Under One Supply Umbrella',
    edition: '2026 Consolidated Commercial Edition',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Consolidated Products Architecture',
          'Part 1: Apparel Collections · Part 2: Natural Agri-Food Products',
          'Synchronized with the Master Products Catalogue (www.sami-trade.com/products).'
        )}
        ${kpiGrid([
          { value: '11', label: 'Apparel Collections', sub: '+2,700 Developed Styles' },
          { value: '45,000', label: 'Classic Shirts / Mo', sub: 'Dedicated 100-Machine Plant' },
          { value: '8', label: 'Flagship Food Dossiers', sub: 'NFSA / ISO 22000 Certified' },
          { value: '104', label: 'Combined Markets', sub: '20 Apparel + 84 Food' },
        ])}
        <div class="grid-2">
          ${glassCard({
            title: 'Part I — Industrial Apparel & Textiles',
            badge: 'OEM · ODM · FOB',
            lead: 'Egyptian cotton shirting, retail knits, kidswear & activewear.',
            bullets: [
              'Women’s Wear, Men’s Wear, Kids/Baby, Classic Shirts, Casualwear, Sportswear & Modestwear',
              'Custom GSM development, multi-head embroidery, screen/DTG printing & private labeling',
              'AQL 2.5/4.0 end-to-end quality inspection & rapid 5–7 day prototype samples'
            ],
            accent: true,
          })}
          ${glassCard({
            title: 'Part II — Natural & Agri-Food Products',
            badge: 'NFSA · HACCP',
            badgeColor: 'orange',
            lead: 'Certified Siwa & Nile Valley origins exported globally.',
            bullets: [
              'Siwi & Jumbo Medjool Dates, Cold-Pressed Extra Virgin Olive Oil (<0.6%) & Table Olives',
              'Wild Sidr & Clover Honey, Sun-Dried Aswan Hibiscus, Cumin & Spray-Dried Powders',
              'Laser-cleaned Golden/White Sesame Seeds (>99.5% purity) in bulk FCL or private label'
            ],
            accent: true,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'Commercial Ordering & Free Supply Consultation',
          'Unified Export Documentation, Packaging & Quality Assurance',
          'Seamless commercial desk supporting global importers and multi-line retailers.'
        )}
        ${glassTable(
          ['Portfolio Track', 'Primary Packaging Options', 'Incoterms & Trade Docs', 'Online Reference'],
          [
            ['Apparel & Garments', 'Custom woven labels, hangtags, individual barcode polybags & export master cartons', 'FOB Alexandria/Damietta, EXW, CIF · EUR.1 & COMESA', '/models & /sectors/garment'],
            ['Natural & Food Products', 'Glass jars (250g–1kg), food-grade tins, vacuum foil pouches, 25kg PP sacks & 200L drums', 'FOB, CIF Reefer Containers · COA, Health, Phyto & Halal', '/products & /trade']
          ],
          ['20%', '35%', '27%', '18%']
        )}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Complete_Products_Portfolio_AR.pdf',
    language: 'AR',
    docCode: 'SBA-ALL-PRODUCTS-2026-AR',
    sectorLabel: 'محفظة المنتجات المجمعة',
    title: 'كتالوج المنتجات المجمع (الملابس والأغذية الطبيعية)',
    subtitle:
      'الدليل التجاري التصديري الموحد لمجموعات تصنيع الملابس الجاهزة (11 فئة) والمنتجات الزراعية والغذائية الطبيعية (7 فئات) تحت مظلة واحدة',
    edition: 'الإصدار التجاري الموحد · 2026',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'هيكل محفظة المنتجات الموحدة',
          'القسم الأول: مجموعات الملابس · القسم الثاني: المنتجات الغذائية الطبيعية',
          'متطابق مع صفحة المنتجات المجمعة على الموقع الرسمي (www.sami-trade.com/products).'
        )}
        ${kpiGrid([
          { value: '11', label: 'فئة ملابس جاهزة', sub: '+2,700 موديل في الأرشيف' },
          { value: '45,000', label: 'قميص كلاسيكي / شهر', sub: 'مصنع 100 ماكينة مخصص' },
          { value: '8', label: 'منتجات غذائية رئيسية', sub: 'مرخصة NFSA و ISO 22000' },
          { value: '104', label: 'إجمالي الأسواق الموثقة', sub: '20 للملابس + 84 للأغذية' },
        ])}
        <div class="grid-2">
          ${glassCard({
            title: 'أولاً — قطاع تصنيع الملابس والمنسوجات',
            badge: 'OEM · ODM · FOB',
            lead: 'قمصان القطن المصري، التريكو المنسوج، ملابس الأطفال والرياضة.',
            bullets: [
              'تغطية الملابس النسائية، الرجالية، الأطفال، القمصان الرسمية، الكاجوال، الرياضي والعبايات',
              'صباغة ومطابقة ألوان، تطريز وطباعة رقمية، وتغليف بالعلامة الخاصة Private Label',
              'رقابة جودة 8 مراحل وفق معيار AQL 2.5/4.0 وتسليم العينات في 5–7 أيام عمل'
            ],
            accent: true,
          })}
          ${glassCard({
            title: 'ثانيًا — قطاع المنتجات الطبيعية والغذائية',
            badge: 'NFSA · HACCP',
            badgeColor: 'orange',
            lead: 'محاصيل واحة سيوة ووادي النيل المصدّرة لأرقى الأسواق العالمية.',
            bullets: [
              'التمور السيوي والمجدول، زيت الزيتون البكر (<0.6%) والزيتون التفاحي والكلاماتا',
              'عسل السدر والزهور، كركديه أسوان، الكمون وبودرة العصائر الطبيعية سريعة الذوبان',
              'بذور السمسم المنقى بالليزر (>99.5% نقاء) في حاويات سائب أو عبوات تجزئة'
            ],
            accent: true,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'شروط التوريد والتصدير والاستشارة المجانية',
          'توحيد مستندات الشحن، التغليف التصديري، وبروتوكولات الفحص',
          'مكتب تجاري موحد لخدمة المستوردين وسلاسل التوزيع العالمية.'
        )}
        ${glassTable(
          ['مسار المنتجات', 'خيارات التعبئة والتغليف المعتمدة', 'شروط الشحن ومستندات التصدير', 'المرجع على الموقع'],
          [
            ['الملابس والمنسوجات', 'تيكت منسوج مخصص، هانج تاج، أكياس باركود وكراتين تصدير قياسية', 'FOB ميناء الإسكندرية/دمياط، CIF · شهادات EUR.1 وكوميسا', '/models و /sectors/garment'],
            ['المنتجات الغذائية الطبيعية', 'برطمانات زجاجية، عبوات صفيح، أكياس فاكيوم 1كجم، شكائر 25كجم وبراميل 200لتر', 'FOB و CIF حاويات مبردة · تحليل COA، صحي، حجري وحلال', '/products و /trade']
          ],
          ['20%', '35%', '27%', '18%']
        )}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  return docs;
}

