import {
  sectionHeader,
  glassCard,
  kpiGrid,
  glassTable,
  policyBanner,
  contactConsultationCard,
  modelCardHtml,
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
            'المراحل 5–8: فحص منتصف الإنتاج عند 30%، الفحص النهائي للقطع بنسبة 100%، الكي بالبخار وكشف المعادن، وأخيرًا فحص ما قبل الشحن بالعينات الإحصائية AQL.'
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
  // 2A & 2B: Apparel Product Catalogue (EN & AR) — 5 pages each (Rich Model Photos)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Apparel_Product_Catalogue_EN.pdf',
    language: 'EN',
    docCode: 'SBA-APPAREL-CAT-2026-EN',
    sectorLabel: 'Apparel · Product Lookbook & Specs',
    title: 'Apparel Product Catalogue & Model Specifications',
    subtitle:
      'Comprehensive Manufacturing Lookbook Covering 3 Core Divisions and 13 Certified Lines: Kids & Newborn Wear, Women’s Wear, and Men’s Wear',
    edition: '2026 Verified Product Edition',
    heroImage: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
    pages: [
      `
        ${sectionHeader(
          'Apparel Product Architecture · 3 Core Divisions',
          'Industrial Manufacturing Structure strictly aligned with Website (/products)',
          'Complete coverage across 13 certified lines, +2,700 style library, and digital showroom.'
        )}
        ${kpiGrid([
          { value: '3', label: 'Core Divisions', sub: 'Kids, Women & Men' },
          { value: '13', label: 'Manufacturing Lines', sub: 'Certified for Export' },
          { value: '+2,700', label: 'Archived Silhouettes', sub: 'OEM & Private Label' },
          { value: '45,000', label: 'Shirts Monthly', sub: '100-Machine Facility' },
        ])}
        ${glassTable(
          ['Division', 'Included Product Lines', 'Fabric Capabilities', 'Target MOQs'],
          [
            ['Section 1: Kids & Newborn', 'Casual Wear, Underwear, Homewear, Sportswear & Newborn Wear', '100% Organic Combed Cotton, Interlock, Fleece', '400–1,000 pcs'],
            ['Section 2: Women’s Wear', 'Underwear, Homewear, Nightwear', 'Rayon, Linen, Viscose, Modal, Silk Satin', '400–800 pcs'],
            ['Section 3: Men’s Wear', 'Casual Wear, Classic Wear, Homewear, Sportswear', 'High-Thread Poplin, Dobby, Pique, French Terry', '300–500 pcs']
          ],
          ['25%', '35%', '25%', '15%']
        )}
        ${policyBanner('Quality Standard', 'All manufacturing complies with OEKO-TEX Standard 100 and AQL 1.5/2.5 international export auditing.')}
      `,
      `
        ${sectionHeader(
          'Section 1: Kids & Newborn Wear (Part 1)',
          'Certified Casual, Underwear, and Homewear Lines for Children',
          'Crafted from gentle 100% Egyptian combed cotton with non-allergenic reactive dyes.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-KID-CAS01',
            badge: "Kids' Wear",
            title: 'Kids Casual Wear',
            tagline: 'Tees, denim & twill pants, shorts, button-down shirts, coordinated 2/3-piece sets, jackets, and fleece hoodies.',
            image: '/Summer/Casual/2-5/Summer - Casual - (2-5) (1).jpg',
            fabrics: '100% Cotton, Combed Cotton, Denim, French Terry',
            gsm: '160 to 320 GSM',
            sizes: '0-24M, 2-6Y, 6-12 Years',
            moq: '400 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-UND01',
            badge: "Kids' Wear",
            title: 'Kids Underwear & Basics',
            tagline: 'Combed cotton undershirts, boys boxers, girls briefs/panties, matching sets, and gentle infant undergarments.',
            image: '/Categories/Kids/001.jpg',
            fabrics: '100% Combed Cotton, Flatlock Seams',
            gsm: '140 to 180 GSM',
            sizes: '0-24 Months, 2-14 Years',
            moq: '1,000 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-HOM01',
            badge: "Kids' Wear",
            title: 'Kids Homewear',
            tagline: 'Two-piece sleepwear sets, cotton pyjamas, loungewear robes, nightgowns, and cozy winter fleece sleepwear.',
            image: '/Categories/Kids/1247 - 1248.jpg',
            fabrics: 'Single Jersey, Cotton/Spandex, Fleece',
            gsm: '160 to 240 GSM',
            sizes: '6-24 Months, 2-14 Years',
            moq: '500 pcs / style',
            isAr: false,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'Section 1 (Cont.) & Section 2: Women’s Wear',
          'Kids Sportswear & Newborn + Women’s Premium Underwear',
          'Transitioning from active youth lines to adult intimate fashion.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-KID-SPO01',
            badge: "Kids' Wear",
            title: 'Kids Sportswear',
            tagline: 'Training tracksuits, PE uniform sets, athletic shorts, breathable Dry-Fit gym tees, and compression leggings.',
            image: '/Winter/Casual/Boys/3-6/Winter - Casual - (3-6) (1).jpg',
            fabrics: 'Moisture-Wicking Poly, Cotton Lycra',
            gsm: '180 to 280 GSM',
            sizes: '2 to 14 Years',
            moq: '400 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-NEW01',
            badge: 'Newborn Line',
            badgeColor: 'orange',
            title: 'Newborn Wear',
            tagline: 'Bodysuits, footed rompers/sleepsuits, kimono baby grows, bibs, swaddle wraps, and hospital welcome sets.',
            image: '/Summer/Casual/2-5/Summer - Casual - (2-5) (2).jpg',
            fabrics: '100% Organic Cotton, Nickel-Free Snaps',
            gsm: '160 to 200 GSM',
            sizes: 'Preemie, 0-3M, 3-6M, 6-12M',
            moq: '600 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-UND01',
            badge: "Women's Wear",
            title: 'Women’s Underwear',
            tagline: 'Cotton camisoles, briefs, seamless boyshorts, bralettes, shaping basics, and multi-pack sets with laser-cut edges.',
            image: '/Categories/Lingerie/1001.jpeg',
            fabrics: 'Egyptian Cotton, Modal, Soft Lace, Elastane',
            gsm: '140 to 180 GSM',
            sizes: 'XS to 3XL',
            moq: '800 pcs / style',
            isAr: false,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'Section 2 (Cont.) & Section 3: Men’s Wear',
          'Women’s Homewear & Nightwear + Men’s Casual & Classic Lines',
          'Precision fit, trend-conscious designs, and verified private label execution.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-HOM01',
            badge: "Women's Wear",
            title: 'Women’s Homewear',
            tagline: 'Buttoned pyjama sets, nightgowns, loungewear robes, oversized lounge tees, and cozy modal sweat sets.',
            image: '/Categories/Home Wear/2003 (1).jpg',
            fabrics: 'Viscose, Modal, Cotton Lycra, Satin',
            gsm: '140 to 200 GSM',
            sizes: 'S to 3XL',
            moq: '500 pcs / color',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-LNG01',
            badge: "Women's Wear",
            title: 'Women’s Nightwear',
            tagline: 'Babydolls, silk satin slips, lace nighties, chemises, kimono robes, and luxury bridal honeymoon collections.',
            image: '/Categories/Lingerie/1005.jpeg',
            fabrics: 'Silk Satin, Fine Chiffon, Lined French Lace',
            gsm: '90 to 150 GSM',
            sizes: 'XS to XXL',
            moq: '400 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-CAS01',
            badge: "Men's Wear",
            badgeColor: 'orange',
            title: 'Men’s Casual Wear',
            tagline: 'Polo shirts (pique), basic & graphic tees, denim jeans, chino trousers, shorts, zip hoodies, and sweatshirts.',
            image: '/BG/Apparel Manufacturing/Specialized Production Lines.jpg',
            fabrics: '100% Combed Cotton, Pique, French Terry',
            gsm: '160 to 340 GSM',
            sizes: 'S to 4XL',
            moq: '500 pcs / color',
            isAr: false,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'Section 3 (Cont.): Men’s Formal & Sportswear + Coordination',
          'Men’s Classic Wear and Active Sportswear',
          'Single unified contract for full-package FOB export delivery at shipping ports.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-FSH01',
            badge: "Men's Wear",
            badgeColor: 'orange',
            title: 'Men’s Classic Wear',
            tagline: 'Dedicated 100-machine facility producing 45,000 monthly dress shirts: Italian spread, button-down, and tuxedo collars.',
            image: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
            fabrics: 'High-Thread Egyptian Cotton Poplin & Dobby',
            gsm: '110 to 145 GSM',
            sizes: '14.5" to 18.5" Collar',
            moq: '500 pcs / style',
            isAr: false,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-SPO01',
            badge: "Men's Wear",
            badgeColor: 'orange',
            title: 'Men’s Sportswear',
            tagline: 'Gym tanks, moisture-wicking tees, athletic training shorts, running joggers, and zip-up track jackets.',
            image: '/BG/Apparel Manufacturing/Production Volume & Scale.jpg',
            fabrics: 'Dry-Fit Polyester, Spandex, Elastane',
            gsm: '150 to 240 GSM',
            sizes: 'S to 3XL',
            moq: '500 pcs / color',
            isAr: false,
          })}
        </div>
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Apparel_Product_Catalogue_AR.pdf',
    language: 'AR',
    docCode: 'SBA-APPAREL-CAT-2026-AR',
    sectorLabel: 'الملابس · كتالوج الموديلات والمواصفات',
    title: 'كتالوج منتجات ومواصفات تصنيع الملابس المعتمد',
    subtitle:
      'دليل خطوط وموديلات التصنيع التعاقدي للملابس الجاهزة عبر الأقسام الثلاثة المعتمدة (الأطفال وحديثي الولادة، النسائي، الرجالي) متطابق تمامًا مع الويب سايت',
    edition: 'كتالوج المشترين والمستوردين المعتمد · 2026',
    heroImage: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
    pages: [
      `
        ${sectionHeader(
          'هيكل كتالوج الملابس والأزياء المعتمد',
          'ثلاثة أقسام تصنيعية رئيسية تغطي 13 خط إنتاج متكامل',
          'تصميم ومواصفات مطابقة لمنظومة المنتجات والمعرض الرقمي على الموقع (/products).'
        )}
        ${kpiGrid([
          { value: '3', label: 'أقسام تصنيعية رئيسية', sub: 'أطفال، نسائي، رجالي' },
          { value: '13', label: 'خط إنتاج معتمد', sub: 'تصدير دولي معتمد' },
          { value: '+2,700', label: 'موديل في الأرشيف', sub: 'OEM وتصنيع FOB' },
          { value: '45,000', label: 'قميص كلاسيكي / شهر', sub: 'مصنع 100 ماكينة مخصص' },
        ])}
        ${glassTable(
          ['القسم الرئيسي', 'خطوط الإنتاج المشمولة', 'خامات الأقمشة المعتمدة', 'الحد الأدنى للطلب MOQ'],
          [
            ['القسم الأول: ملابس الأطفال وحديثي الولادة', 'ملابس الخروج، الملابس الداخلية، الملابس المنزلية، الملابس الرياضية، ملابس حديثي الولادة', 'قطن مصري عضوي 100%، إنترلوك، وسنجل جيرسي', '400–1,000 قطعة'],
            ['القسم الثاني: الملابس النسائية', 'الملابس الداخلية، الملابس المنزلية، ملابس النوم', 'رايون، كتان، فيسكوز، مودال، وساتان حريري', '400–800 قطعة'],
            ['القسم الثالث: الملابس الرجالية', 'ملابس الخروج، الملابس الكلاسيك، الملابس المنزلية، الملابس الرياضية', 'قطن مصري ممشط، بوبلين عالي الكثافة، ميلتون، وبيكيه', '300–500 قطعة']
          ],
          ['25%', '35%', '25%', '15%']
        )}
        ${policyBanner('معايير الجودة والرقابة', 'تخضع كافة الموديلات لفحص جودة صارم في 8 مراحل وفق معايير AQL 1.5/2.5 وشهادات OEKO-TEX Standard 100 الدولية.')}
      `,
      `
        ${sectionHeader(
          'القسم الأول: ملابس الأطفال وحديثي الولادة (الجزء 1)',
          'خطوط إنتاج الكاجوال والأندر وير والهوم وير للأطفال',
          'خامات قطنية آمنة 100% معتمدة ومضادة للحساسية مصممة لحركة الطفل واللعب اليومي.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-KID-CAS01',
            badge: 'أزياء أطفالي',
            title: 'ملابس الكاجوال للأطفال',
            tagline: 'تيشيرتات مطبوعة وسادة، بناطيل جينز وتويل مرنة، شورتات، قمصان كاجوال، أطقم يومية قطعتين وثلاث قطع، سترات وهوديز.',
            image: '/Summer/Casual/2-5/Summer - Casual - (2-5) (1).jpg',
            fabrics: 'قطن 100%، قطن ممشط، جينز، French Terry',
            gsm: 'من 160 إلى 320 جم/م²',
            sizes: '0–24 شهر، 2–6 سنوات، 6–12 سنة',
            moq: '400 قطعة / تصميم',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-UND01',
            badge: 'أزياء أطفالي',
            title: 'الملابس الداخلية للأطفال (الأندر وير)',
            tagline: 'فانلات داخلية قطنية، بوكسرات أولاد مريحة، سراويل وفانلات داخلية بنات، أطقم داخلية قطنية، وملابس داخلية للرضع بحياكة مسطحة ناعمة.',
            image: '/Categories/Kids/001.jpg',
            fabrics: 'قطن مصري ممشط 100%، حياكة Flatlock ناعمة',
            gsm: 'من 140 إلى 180 جم/م²',
            sizes: '0–24 شهر، ومن 2 إلى 14 سنة',
            moq: '1,000 قطعة / تصميم',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-HOM01',
            badge: 'أزياء أطفالي',
            title: 'ملابس المنزل والبيجامات للأطفال (الهوم وير)',
            tagline: 'بيجامات قطعتين، أطقم نوم قطنية مريحة، أرواب نوم منزلية، ملابس نوم شتوية مبطنة بوبرة ناعمة بألوان ورسومات جذابة.',
            image: '/Categories/Kids/1247 - 1248.jpg',
            fabrics: 'قطن سنجل جيرسي، قطن ليكرا، فليس شتوي',
            gsm: 'من 160 إلى 240 جم/م²',
            sizes: '6–24 شهر، ومن 2 إلى 14 سنة',
            moq: '500 قطعة / تصميم',
            isAr: true,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'استكمال ملابس الأطفال + القسم الثاني: الملابس النسائية',
          'الرياضي وحديثي الولادة للأطفال · والأندر وير النسائي الفاخر',
          'انتقال متناسق من خطوط الأطفال المتخصصة إلى أزياء المرأة العصرية.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-KID-SPO01',
            badge: 'أزياء أطفالي',
            title: 'الملابس الرياضية وأطقم التمارين للأطفال',
            tagline: 'ترنجات رياضية كاملة، أطقم تمارين الأندية والمدارس، شورتات وتيشيرتات بوليستر طاردة للعرق Dry-Fit، وبنطلونات سويت بانتس مريحة.',
            image: '/Winter/Casual/Boys/3-6/Winter - Casual - (3-6) (1).jpg',
            fabrics: 'بوليستر تقني طارد للرطوبة، قطن ليكرا',
            gsm: 'من 180 إلى 280 جم/م²',
            sizes: 'من 2 إلى 14 سنة',
            moq: '400 قطعة / تصميم',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-KID-NEW01',
            badge: 'حديثو الولادة',
            badgeColor: 'orange',
            title: 'ملابس ومستلزمات حديثي الولادة (Newborn)',
            tagline: 'سلوبتات نوم كاملة القدم، سالوبيتات كباسين بدون نيكل، أطقم استقبال المواليد، مرايل قطنية، وبطانيات لف ناعمة لا تسبب أي حساسية.',
            image: '/Summer/Casual/2-5/Summer - Casual - (2-5) (2).jpg',
            fabrics: 'قطن عضوي نقي 100%، كباسين خالية من النيكل',
            gsm: 'من 160 إلى 200 جم/م²',
            sizes: 'مبتسرين، 0–3، 3–6، 6–12 شهر',
            moq: '600 قطعة / تصميم',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-UND01',
            badge: 'أزياء نسائية',
            title: 'الملابس الداخلية النسائية (الأندر وير)',
            tagline: 'توبات داخلية قطنية ناعمة، بانتيز وبوكسرات نسائية مريحة، حمالات صدر يومية غير سلكية، وملابس تشكيل الجسم المريحة بدون خياطة بارزة.',
            image: '/Categories/Lingerie/1001.jpeg',
            fabrics: 'قطن مصري ممشط، مودال، دانتيل، وإيلاستان',
            gsm: 'من 140 إلى 180 جم/م²',
            sizes: 'XS إلى 3XL',
            moq: '800 قطعة / تصميم',
            isAr: true,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'استكمال الملابس النسائية + القسم الثالث: الملابس الرجالية',
          'الهوم وير واللانجري النسائي · والكاجوال الرجالي',
          'قصات راقية وموديلات حديثة تلبي متطلبات التصدير وسلاسل التجزئة الفاخرة.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-HOM01',
            badge: 'أزياء نسائية',
            title: 'الملابس المنزلية والبيجامات النسائية (الهوم وير)',
            tagline: 'بيجامات قطن وفيسكوز ناعمة، أرواب منزلية مريحة، قمصان نوم قطنية واسعة، وأطقم منزلية كاجوال تجمع بين الراحة المطلقة والأناقة.',
            image: '/Categories/Home Wear/2003 (1).jpg',
            fabrics: 'فيسكوز، قطن ليكرا ناعم، مودال، وساتان',
            gsm: 'من 140 إلى 200 جم/م²',
            sizes: 'S إلى 3XL',
            moq: '500 قطعة / لون',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-WOM-LNG01',
            badge: 'أزياء نسائية',
            title: 'ملابس اللانجري النسائي الفاخر',
            tagline: 'قمصان نوم ساتان حريري، بيبي دول فاخر، أرواب دانتيل شفاف ومبطن، وأطقم لانجري للمناسبات والعرائس بتشطيبات وتطريزات راقية.',
            image: '/Categories/Lingerie/1005.jpeg',
            fabrics: 'ساتان حريري ناعم، شيفون، دانتيل أوروبي',
            gsm: 'من 90 إلى 150 جم/م²',
            sizes: 'XS إلى XXL',
            moq: '400 قطعة / موديل',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-CAS01',
            badge: 'أزياء رجالية',
            badgeColor: 'orange',
            title: 'الملابس الكاجوال الرجالية',
            tagline: 'تيشيرتات قطن مصري 100%، قمصان بولو بيكيه فاخرة، بناطيل جينز وتشينو قطنية، شورتات كاجوال، هوديز وسويت شيرت ميلتون ثقيل.',
            image: '/BG/Apparel Manufacturing/Specialized Production Lines.jpg',
            fabrics: 'قطن مصري ممشط 100%، بيكيه، ميلتون ثقيل',
            gsm: 'من 160 إلى 340 جم/م²',
            sizes: 'S إلى 4XL',
            moq: '500 قطعة / لون',
            isAr: true,
          })}
        </div>
      `,
      `
        ${sectionHeader(
          'استكمال الأزياء الرجالية · والشروط التعاقدية والتصدير',
          'القمصان الرسمية، الهوم وير، والملابس الرياضية الرجالية',
          'طاقة تصنيع 45,000 قميص شهرياً وبرامج توريد FOB وCIF مرنة تشمل الشحن والتخليص.'
        )}
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-FSH01',
            badge: 'أزياء رجالية',
            badgeColor: 'orange',
            title: 'القمصان الكلاسيكية والرسمية للرجال',
            tagline: 'مصنع متخصص مجهز بأحدث ماكينات الحياكة الإيطالية ينتج 45,000 قميص شهريًا: ياقات كلاسيكية، وأزرار خشبية وصدفية، وتطريز دقيق.',
            image: '/BG/Apparel Manufacturing/Product Development & Sampling.jpg',
            fabrics: 'قطن مصري بوبلين وتويل ودوبي عالي الكثافة',
            gsm: 'من 110 إلى 145 جم/م²',
            sizes: 'مقاس الياقة 14.5 إلى 18.5 بوصة',
            moq: '500 قطعة / تصميم',
            isAr: true,
          })}
          ${modelCardHtml({
            code: 'SBA-PRD-MEN-SPO01',
            badge: 'أزياء رجالية',
            badgeColor: 'orange',
            title: 'الملابس الرياضية وملابس التمارين الرجالية',
            tagline: 'تيشيرتات رياضية طاردة للعرق Dry-Fit، شورتات تمارين مرنة، ترنجات رياضية كاملة، وسويت بانتس مخصصة للنشاط البدني والجري.',
            image: '/BG/Apparel Manufacturing/Production Volume & Scale.jpg',
            fabrics: 'بوليستر تقني معالج، سباندكس مرن، وإيلاستان',
            gsm: 'من 150 إلى 240 جم/م²',
            sizes: 'S إلى 3XL',
            moq: '500 قطعة / لون',
            isAr: true,
          })}
        </div>
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
            title: 'أولًا — قطاع تصنيع الملابس والمنسوجات',
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

