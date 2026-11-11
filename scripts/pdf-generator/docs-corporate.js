import {
  sectionHeader,
  glassCard,
  kpiGrid,
  glassTable,
  policyBanner,
  contactConsultationCard,
} from './doc-helpers.js';

export function buildCorporateDocs() {
  const docs = [];

  // =========================================================================
  // 1A. Complete Corporate Company Profile — EN (4 rich A4 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Complete_Corporate_Profile_EN.pdf',
    mirrorToRoot: true,
    language: 'EN',
    docCode: 'SBA-CORP-PROFILE-2026-EN',
    sectorLabel: 'SAMI BIN AYYAD GROUP · Corporate Profile',
    title: 'Complete Corporate Company Profile',
    subtitle:
      'Unified Institutional Overview Across Contracting & Real Estate, Sustainability & Clean Energy, Apparel Manufacturing, and Natural Agri-Food Trade',
    edition: '2026 International Corporate Edition',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      // Page 1: Cover Hero + Executive Overview + KPI Grid + Corporate Distinction
      `
        ${sectionHeader(
          'Executive Institutional Overview',
          'Driving Industrial, Engineering & Commercial Progress',
          'Official corporate architecture unifying multidisciplinary capabilities under strict governance.'
        )}
        ${glassCard({
          title: 'About SAMI BIN AYYAD GROUP (SBA)',
          badge: 'Unified Holding Structure · Est. 2023',
          lead: 'An integrated industrial, engineering, sustainability, and international trading group headquartered in Cairo, Egypt.',
          paragraphs: [
            'SAMI BIN AYYAD GROUP operates across four strategic pillars: Contracting & Real Estate Development, Environment & Sustainability (ENVIROTAQA), Apparel Manufacturing & Fashion Development, and Natural & Agri-Food Products. We focus on disciplined execution, institutional transparency, and verifiable supply capacity.',
            'Corporate Attribution Notice: The unified corporate group was formally established in 2023, consolidating deep executive and foundational contracting experience dating back to 1977 alongside commercial real estate advisory portfolios active since 2018 under a single accountable governance umbrella.'
          ],
          accent: true,
        })}
        ${kpiGrid([
          { value: '2023', label: 'Unified Group Est.', sub: 'Institutional Incorporation' },
          { value: '1977', label: 'Contracting Roots', sub: 'Foundational Heritage' },
          { value: '4', label: 'Core Sectors', sub: 'Integrated Business Pillars' },
          { value: '39', label: 'Verified Services', sub: 'Engineering, Eco & Apparel' },
        ])}
        ${policyBanner(
          'Data Governance & Registry Compliance',
          'All published group metrics strictly reflect verified records in the SBA Corporate Data Registry, distinguishing direct group execution from partner capacity and executive track records.'
        )}
      `,

      // Page 2: Divisions I & II
      `
        ${sectionHeader(
          'Core Business Divisions (Part 1)',
          'Infrastructure, Real Estate & Sustainable Environmental Solutions',
          'Technical capabilities aligned with the live group service directory.'
        )}
        ${glassCard({
          title: 'Division I: Contracting & Real Estate Development',
          badge: '57+ Documented Projects',
          lead: 'Turnkey civil contracting, MEP engineering, healthcare fit-out, and commercial real estate advisory.',
          paragraphs: [
            'Delivering integrated construction and building upgrades across medical towers, residential developments, commercial plazas, industrial hubs, and specialized oil & gas civil works compliant with Egyptian engineering codes.',
            'Backed by a documented 2013–2024 contracting turnover exceeding EGP 540M and an executive real estate advisory portfolio spanning 400+ developments and 200+ developer partnerships (since 2018).'
          ],
          bullets: [
            'General Contracting (EPC) & Reinforced Concrete Civil Structures',
            'Electromechanical Systems (MEP): Central HVAC, Fire Suppression & Power Networks',
            'Specialized Healthcare Installations: Surgical Wings, Medical Gas & Imaging Suites',
            'Oil & Gas Civil Infrastructure, Pipeline Containment & Asset Advisory'
          ],
        })}
        ${glassCard({
          title: 'Division II: Environment & Sustainability (ENVIROTAQA)',
          badge: 'RENERGON Swiss Alliance',
          badgeColor: 'orange',
          lead: 'Integrated environmental solutions that turn operational challenges into sustainable opportunities.',
          paragraphs: [
            'Covering 19 specialized scientific and consulting services across 6 categories, operating in formal technological partnership with RENERGON International AG (Switzerland) utilizing patented RSD dry anaerobic digestion to convert organic waste into biogas, clean power, and biochar.',
            'Transparent Delivery Disclosure: Environmental assessments (EIA/ESIA), GHG Scopes 1–3 carbon audits, and CBAM advisory are executed in-house, while utility-scale EPC plants are delivered through accredited technical consortia.'
          ],
          bullets: [
            'Environmental Impact Studies (EIA/ESIA) & Legislative Compliance (Law 4/1994 & 202/2020)',
            'Waste-to-Energy (WtE), Biogas Plants (RENERGON RSD) & C&I Rooftop Solar PV',
            'Carbon Footprinting, EU CBAM Export Readiness & ESG / GRI Advisory',
            'Proprietary Bio-Reagents: ET-POT-01 (Oil Terminator) & ET-POR-01 (Odor Neutralizer)'
          ],
          accent: true,
        })}
      `,

      // Page 3: Divisions III & IV + Cross-Sector Matrix
      `
        ${sectionHeader(
          'Core Business Divisions (Part 2)',
          'Industrial Apparel Manufacturing & Natural Agri-Food Export',
          'Export-ready production scale serving MENA, GCC, Europe, Africa, and Asia.'
        )}
        ${glassCard({
          title: 'Division III: Apparel Manufacturing & Fashion Development',
          badge: '20 Export Markets · 150+ Partner Network',
          lead: 'Contract manufacturing, agile sourcing, and full-package export programs from pattern to port.',
          paragraphs: [
            'Operating 15+ modern production lines and 250+ machines delivering 5,000+ pieces daily (100,000–150,000 pcs/month core scale, expanding to 600,000 pcs/month through our accredited partner manufacturing ecosystem), supported by a library of +2,700 developed garment styles.',
            'Includes a dedicated Classic Shirt Facility operating 100 specialized machines producing 45,000 certified formal dress shirts monthly under 8-stage AQL 2.5/4.0 inspection.'
          ],
          bullets: [
            'OEM, ODM, Private Label, CM/CMT & Full-Package FOB Export Delivery',
            '11 Verified Collections: Classic Shirts, Women, Men, Kids, Sportswear & Modestwear',
            'Dedicated Product Development, CAD/CAM Grading & 5–7 Day Rapid Prototyping'
          ],
        })}
        ${glassCard({
          title: 'Division IV: Natural Products & Agri-Food Division',
          badge: '84 Documented Markets · 738 Inquiries',
          badgeColor: 'orange',
          lead: 'From Nature’s Finest to Global Markets — certified Egyptian origins with full batch traceability.',
          paragraphs: [
            'Sourcing, optical sorting, cold storage, and export packaging across 7 core categories serving international importers across 84 documented markets backed by 738 verified commercial purchase inquiries (2023–2026).'
          ],
          bullets: [
            'Siwi & Jumbo Medjool Dates, Cold-Pressed Extra Virgin Olive Oil & Table Olives',
            'Pure Wild Sidr & Blossom Honey, Medicinal Herbs, Spices & Natural Powdered Juices',
            'NFSA-Licensed Processing Hubs compliant with ISO 22000, HACCP, COA & Halal Standards'
          ],
        })}
      `,

      // Page 4: Governance Matrix + Free Consultation Policy & Contact
      `
        ${sectionHeader(
          'Corporate Governance & Operational Matrix',
          'Cross-Sector Standards, Delivery Models & Commercial Reach',
          'Verified operational matrix aligned with our Global Opportunities and Investor Data Room.'
        )}
        ${glassTable(
          ['Sector Division', 'Registered Standards', 'Primary Engagement Models', 'Verified Geographic Reach'],
          [
            ['Contracting & Real Estate', 'Egyptian Code / ISO 9001', 'EPC Turnkey, MEP, Asset Advisory', 'Egypt & Regional GCC Markets'],
            ['Environment (ENVIROTAQA)', 'EEAA / IFC / ISO 14001 / GHG', 'In-House Advisory & Partner EPC', '13 Target Markets (MENA & Africa)'],
            ['Apparel Manufacturing', 'AQL 2.5/4.0 / OEKO-TEX®', 'OEM, ODM, FOB, CMT, Private Label', '20 Markets (Europe, GCC, North Africa)'],
            ['Natural & Food Products', 'NFSA / ISO 22000 / HACCP', 'Bulk FCL, Retail Private Label', '84 Documented Buyer Markets Globally']
          ],
          ['22%', '24%', '28%', '26%']
        )}
        ${glassCard({
          title: 'Institutional Values & Quality Commitment',
          badge: 'Vision 2030 & ESG Aligned',
          paragraphs: [
            'Every engagement is governed by four foundational principles: verifiable technical evidence before commitment, transparent attribution between direct and partner execution, strict compliance with international import/export standards, and long-term partnership continuity.'
          ],
          bullets: [
            'Investor & Corporate Data Room hosted at www.sami-trade.com/downloads',
            'Centralized Global Opportunities Exchange covering 4 active business sectors',
            'Access-controlled project records with verified client handover milestones'
          ],
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  // =========================================================================
  // 1B. Complete Corporate Company Profile — AR (4 rich A4 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Complete_Corporate_Profile_AR.pdf',
    language: 'AR',
    docCode: 'SBA-CORP-PROFILE-2026-AR',
    sectorLabel: 'مجموعة سامي بن عياد · الملف التعريفي',
    title: 'الملف التعريفي الشامل للمجموعة',
    subtitle:
      'العرض المؤسسي المتكامل لقدرات مجموعة سامي بن عياد عبر قطاعات المقاولات والتطوير العقاري، البيئة والاستدامة، تصنيع الملابس، والمنتجات الطبيعية والغذائية',
    edition: 'الإصدار المؤسسي الدولي المعتمد · 2026',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      // Page 1
      `
        ${sectionHeader(
          'نظرة عامة والهوية المؤسسية',
          'نقود التقدم الصناعي والهندسي والتجاري عبر القطاعات',
          'بنية مؤسسية موحدة تجمع الخبرة التنفيذية المتعمقة والحوكمة والقدرات التصديرية.'
        )}
        ${glassCard({
          title: 'عن مجموعة سامي بن عياد (SAMI BIN AYYAD GROUP)',
          badge: 'كيان موحد · تأسيس 2023',
          lead: 'مجموعة صناعية وهندسية وتجارية متكاملة مقرها الرئيسي في جمهورية مصر العربية.',
          paragraphs: [
            'تعمل مجموعة سامي بن عياد عبر أربعة قطاعات اقتصادية استراتيجية متكاملة: المقاولات والتطوير العقاري، البيئة والاستدامة (إنفيروتاقة ENVIROTAQA)، تصنيع الملابس الجاهزة وتطوير الأزياء، والمنتجات الطبيعية والغذائية، مع تركيز راسخ على التنفيذ المنضبط وبناء الشراكات المؤسسية طويلة الأمد.',
            'إفصاح الحوكمة والتأريخ المؤسسي: تأسس الكيان المؤسسي الموحد للمجموعة رسميًا عام 2023، مستندًا إلى جذور وخبرات إنشائية عريقة للمؤسسين منذ عام 1977، ومسيرة استشارية موثقة في التسويق العقاري وإدارة الأصول منذ عام 2018 تحت مظلة حوكمة دقيقة تفصل بين التنفيذ المباشر وتحالفات الشركاء.'
          ],
          accent: true,
        })}
        ${kpiGrid([
          { value: '2023', label: 'التأسيس المؤسسي الموحد', sub: 'الكيان القابض للمجموعة' },
          { value: '1977', label: 'الجذور والخبرة الإنشائية', sub: 'إرث الأعمال التأسيسي' },
          { value: '4', label: 'قطاعات استراتيجية', sub: 'منظومة أعمال متكاملة' },
          { value: '39', label: 'خدمة متخصصة معتمدة', sub: 'مقاولات وبيئة وتصنيع' },
        ])}
        ${policyBanner(
          'الشفافية ودقة السجل المؤسسي',
          'تلتزم المجموعة بنشر الأرقام المدققة والموثقة فقط في السجل المؤسسي الموحد، مع التمييز الصريح بين التنفيذ المباشر، الطاقة التشغيلية عبر المصانع الشريكة، والمسيرة المهنية للإدارة.'
        )}
      `,

      // Page 2
      `
        ${sectionHeader(
          'القطاعات الاستراتيجية (الجزء الأول)',
          'قطاع المقاولات والتطوير العقاري وقطاع البيئة والاستدامة',
          'القدرات الهندسية والتقنية المطابقة تمامًا للدليل المنشور على الموقع الرسمي.'
        )}
        ${glassCard({
          title: 'القطاع الأول: المقاولات والتطوير العقاري',
          badge: '+57 مشروعًا موثقًا',
          lead: 'المقاولات العامة، الأعمال المدنية والخرسانية، الأنظمة الكهروميكانيكية MEP، والتجهيزات الطبية.',
          paragraphs: [
            'تنفيذ المشروعات الطبية والسكنية والتجارية والإدارية والصناعية وأعمال البترول والغاز وفق الكود المصري والمواصفات الهندسية القياسية، مع سجل أعمال تاريخي مسجل يتجاوز 540 مليون جنيه مصري (للفترة 2013–2024).',
            'كما تشمل خبرات إدارة القطاع مسيرة استشارية في التسويق وإدارة المحافظ العقارية منذ عام 2018 تغطي أكثر من 400 مشروع و200 مطور عقاري في مصر.'
          ],
          bullets: [
            'المقاولات العامة المتكاملة (Turnkey EPC) والأعمال الإنشائية والخرسانية',
            'الأنظمة الكهروميكانيكية (MEP): التكييف المركزي، القوى، ومكافحة الحريق',
            'تجهيز المستشفيات والمراكز الطبية: غرف العمليات وشبكات الغازات الطبية والمصاعد',
            'أعمال البترول والغاز المدنية وحماية الخطوط والاستشارات العقارية'
          ],
        })}
        ${glassCard({
          title: 'القطاع الثاني: البيئة والاستدامة (إنفيروتاقة ENVIROTAQA)',
          badge: 'تحالف RENERGON السويسرية',
          badgeColor: 'orange',
          lead: 'حلول بيئية متكاملة تحول التحديات التشغيلية إلى فرص استثمارية مستدامة.',
          paragraphs: [
            'يضم القطاع 19 خدمة استشارية وعلمية وتقنية في 6 فئات، مع شراكة تكنولوجية مع شركة RENERGON International AG السويسرية لتطبيق تقنية التخمير الجاف RSD لتحويل المخلفات العضوية لطاقة نظيفة وبيوجاز وسماد عضوي.',
            'إفصاح نموذج التنفيذ: تُقدم الاستشارات ودراسات الأثر البيئي والبصمة الكربونية والـ CBAM مباشرة عبر خبراء القطاع، بينما تُنفذ محطات الطاقة الكبرى عبر تحالفات EPC دولية معتمدة.'
          ],
          bullets: [
            'دراسات تقييم الأثر البيئي والاجتماعي (EIA/ESIA) والامتثال لقانون البيئة والمخلفات 202/2020',
            'تحويل المخلفات إلى طاقة (WtE)، محطات البيوجاز، والطاقة الشمسية للمصانع (C&I Solar)',
            'حساب البصمة الكربونية (النطاقات 1 و2 و3) والجاهزية لضريبة الكربون الأوروبية CBAM',
            'المستحضرات الحيوية المعتمدة: ET-POT-01 لمعالجة البقع البترولية وET-POR-01 لإزالة الروائح'
          ],
          accent: true,
        })}
      `,

      // Page 3
      `
        ${sectionHeader(
          'القطاعات الاستراتيجية (الجزء الثاني)',
          'قطاع تصنيع الملابس الجاهزة وقطاع المنتجات الطبيعية والغذائية',
          'منصات تصنيع وتصدير موجهة للأسواق العربية والأفريقية والأوروبية والآسيوية.'
        )}
        ${glassCard({
          title: 'القطاع الثالث: تصنيع الملابس الجاهزة وتطوير الأزياء',
          badge: '20 سوق تصدير · +150 منشأة شريكة',
          lead: 'تصنيع تعاقدي مرن وبرامج توريد متكاملة للعلامات التجارية والمستوردين الدوليين.',
          paragraphs: [
            'تشغيل منظومة تضم أكثر من 15 خط إنتاج حديث و250 ماكينة متخصصة بطاقة تتجاوز 5,000 قطعة يوميًا (100,000 إلى 150,000 قطعة شهريًا كطاقة أساسية، وتصل عبر شبكة المصانع الشريكة المعتمدة إلى 600,000 قطعة شهريًا)، مدعومة بأرشيف تصميمي يتجاوز 2,700 موديل.',
            'يضم القطاع مصنعًا متخصصًا للقمصان الكلاسيكية مزودًا بـ 100 ماكينة آلية لإنتاج 45,000 قميص رسمي معتمد شهريًا تحت رقابة جودة ثمانية المراحل (AQL 2.5/4.0).'
          ],
          bullets: [
            'نماذج العمل: التصنيع للغير OEM/ODM، العلامات الخاصة Private Label، وبرامج FOB وCMT',
            '11 فئة ملابس معتمدة: قمصان كلاسيك، نسائي، رجالي، أطفال، رياضي، ومنزلي',
            'تطوير العينات الأولية والباترونات بتقنية CAD/CAM خلال 5 إلى 7 أيام عمل'
          ],
        })}
        ${glassCard({
          title: 'القطاع الرابع: المنتجات الطبيعية والتوريد الغذائي',
          badge: '84 دولة موثقة · 738 طلب شراء',
          badgeColor: 'orange',
          lead: 'من خيرات الطبيعة إلى الأسواق العالمية — مصادر مصرية معتمدة وتتبع كامل للشحنات.',
          paragraphs: [
            'ربط مزارع واحة سيوة وصعيد مصر والدلتا بشبكة استيراد دولية موثقة في 84 دولة عبر سجل يضم 738 طلب شراء تجاري معتمد للأعوام 2023–2026، عبر محطات فرز وتعبئة وتخزين مبرد مرخصة.'
          ],
          bullets: [
            'التمور السيوي والمجدول الجامبو، زيت الزيتون البكر الممتاز المعصور على البارد، والزيتون',
            'عسل السدر والزهور الطبيعي، الأعشاب الطبية المجففة، التوابل، والعصائر البودر الطبيعية',
            'التزام تام باشتراطات الهيئة القومية لسلامة الغذاء NFSA وشهادات ISO 22000 وHACCP وحلال'
          ],
        })}
      `,

      // Page 4
      `
        ${sectionHeader(
          'مصفوفة الحوكمة والانتشار التجاري',
          'المعايير التنظيمية، نماذج التعاقد، والتواصل المؤسسي',
          'بيانات مطابقة لسجل الفرص العالمية وغرفة البيانات المؤسسية على الموقع الرسمي.'
        )}
        ${glassTable(
          ['القطاع التشغيلي', 'المعايير والشهادات المعتمدة', 'نماذج التعاقد والتنفيذ', 'النطاق الجغرافي الموثق'],
          [
            ['المقاولات والتطوير العقاري', 'الكود المصري / ISO 9001', 'مقاولات عامة EPC، MEP، استشارات عقارية', 'جمهورية مصر العربية وأسواق الخليج'],
            ['البيئة والاستدامة (إنفيروتاقة)', 'جهاز شؤون البيئة / GHG / ISO 14001', 'استشارات مباشرة + تحالفات EPC دولية', '13 سوقًا مستهدفًا (الخليج وأفريقيا)'],
            ['تصنيع الملابس والمنسوجات', 'AQL 2.5/4.0 / OEKO-TEX®', 'OEM / ODM / FOB / Private Label', '20 سوقًا (أوروبا، الخليج، شمال أفريقيا)'],
            ['المنتجات الطبيعية والغذائية', 'NFSA / ISO 22000 / HACCP', 'توريد سائب حاويات FCL / علامات خاصة', '84 دولة مسجلة في شبكة الطلبات الدولية']
          ],
          ['22%', '24%', '28%', '26%']
        )}
        ${glassCard({
          title: 'الالتزام المؤسسي ومنظومة البيانات',
          badge: 'غرفة البيانات المؤسسية',
          paragraphs: [
            'تتيح مجموعة سامي بن عياد للمستثمرين والشركاء الدوليين الوصول المنظم للوثائق عبر غرفة البيانات المؤسسية (/downloads) وفق 4 مستويات تصريح (متاح للعموم، الشركات المسجلة، محمي باتفاقية سرية NDA، ومخصص للمستثمرين المعتمدين).'
          ],
          bullets: [
            'فصل واضح ودقيق بين خبرة المجموعة المؤسسية (منذ 2023) والخبرة التاريخية للإدارة',
            'تحديث دوري لقاعدة بيانات الفرص العالمية والطلبات التجارية لكل قطاع'
          ],
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 2A. Corporate Capabilities Statement — EN (3 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Corporate_Capabilities_EN.pdf',
    language: 'EN',
    docCode: 'SBA-CAPABILITIES-2026-EN',
    sectorLabel: 'SAMI BIN AYYAD GROUP · Capabilities',
    title: 'Corporate Capabilities Statement',
    subtitle:
      'Executive Procurement & Partner Briefing Detailing Verified Production Capacities, Engineering Assets & Commercial Delivery Models',
    edition: 'Procurement & Institutional Qualification Brief',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Operational Capacity Snapshot',
          'Verified Multi-Sector Procurement & Production Readiness',
          'Consolidated figures from the SBA Corporate Data Registry.'
        )}
        ${kpiGrid([
          { value: '57+', label: 'Delivered Civil Projects', sub: '2013–2024 Portfolio' },
          { value: '45,000', label: 'Classic Shirts / Month', sub: '100 Dedicated Machines' },
          { value: '600K', label: 'Apparel Partner Network', sub: 'Monthly Ecosystem Scale' },
          { value: '84', label: 'Food Buyer Markets', sub: '738 Verified Inquiries' },
        ])}
        ${glassCard({
          title: 'Institutional Commercial Engagement Framework',
          badge: 'Flexible B2B Contracting',
          lead: 'Engineered contracting structures built for government agencies, retail chains, and global importers.',
          paragraphs: [
            'SAMI BIN AYYAD GROUP operates centralized commercial and technical desks enabling partners to contract for turnkey construction (EPC), full-package apparel manufacturing (FOB/OEM/ODM), environmental compliance & waste-to-energy projects, and bulk agri-food supply under accountable delivery SLAs.'
          ],
          bullets: [
            'Single-Point Contractual Accountability with Transparent Partner Attribution',
            'Complete Technical Documentation: BIM Shop Drawings, Tech Packs, Lab COAs & ESIA Dossiers',
            'Export Documentation Readiness: EUR.1, COMESA, Certificates of Origin, Health & Halal',
            'Integrated Financial Governance & NDA-Protected Technical Exchange'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Facility, Equipment & Compliance Matrix',
          'Production Infrastructure Across Operating Divisions',
          'Standardized capacity and quality benchmarks verified for procurement prequalification.'
        )}
        ${glassTable(
          ['Operating Division', 'Core Facilities & Infrastructure', 'Verified Capacity / Volume', 'Certification & Compliance'],
          [
            ['Contracting & Civil', 'Excavation, Batching Coordination, BIM Office, MEP Tooling', '57+ Projects · +EGP 540M Turnover', 'Egyptian Building Code / ISO 9001'],
            ['Dedicated Shirt Plant', '100 Automated Shirt Production Machines & Collar Fusing', '45,000 Certified Formal Shirts/Mo', 'AQL 2.5/4.0 · Combed Cotton'],
            ['Garment Lines & Network', '15+ Internal Lines (250+ Machines) + 150 Partner Facilities', '100K–150K Internal · Up to 600K Network', 'OEKO-TEX® / 8-Stage QC'],
            ['Environmental (ENVIROTAQA)', 'R&D Experts Network & RENERGON Swiss Technology', '19 Advisory & Clean-Tech Disciplines', 'EEAA / Law 202 / GHG / CBAM'],
            ['Agri-Food Export', 'Optical Sorting, Fumigation & NFSA Cold Storage Hubs', '738 Verified Buyer Inquiries (84 Countries)', 'NFSA / ISO 22000 / HACCP']
          ],
          ['20%', '28%', '26%', '26%']
        )}
        ${glassCard({
          title: 'Four-Step Partner Onboarding & Prequalification',
          badge: 'Rapid Mobilization',
          bullets: [
            'Step 1 — Free Initial Consultation: Scope submission via www.sami-trade.com/request-consultation',
            'Step 2 — Technical Due Diligence: Exchange of specs, blueprints, tech packs, or lab parameters under NDA',
            'Step 3 — Commercial Proposal & Prototyping: Golden sample / BOQ pricing within 5–7 business days',
            'Step 4 — Contract Execution & Quality Reporting: Milestone tracking and pre-shipment certification'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'Data Room & Qualification Access',
          'Institutional Verification & Free Advisory Desk',
          'Direct procurement channels for international tenders and corporate buyers.'
        )}
        ${glassCard({
          title: 'Investor & Procurement Data Room Categories',
          badge: '4 Security Tiers',
          lead: 'Seven organized documentation categories available at www.sami-trade.com/downloads',
          bullets: [
            'A. Corporate Documents (Registrations, Group Structure & Governance Charters)',
            'B. Financial Information (Performance Summaries & Institutional Presentations)',
            'C. Sector Capabilities & D. Verified Project Portfolio Case Studies',
            'E. Certifications & Compliance · F. Investment Memos · G. Technical Catalogues'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  // =========================================================================
  // 2B. Corporate Capabilities Statement — AR (3 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Corporate_Capabilities_AR.pdf',
    language: 'AR',
    docCode: 'SBA-CAPABILITIES-2026-AR',
    sectorLabel: 'مجموعة سامي بن عياد · القدرات المؤسسية',
    title: 'بيان القدرات المؤسسية والتشغيلية الشامل',
    subtitle:
      'وثيقة تأهيل ومشتريات معتمدة لاستعراض الطاقات الإنتاجية، البنية الهندسية، ونماذج التعاقد لجهات الإسناد والشركاء الدوليين',
    edition: 'ملف التأهيل للمشتريات والمناقصات · 2026',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'مؤشرات الجاهزية التشغيلية',
          'الطاقات الإنتاجية والقدرات الهندسية المعتمدة عبر القطاعات',
          'أرقام موحدة ومطابقة للسجل المؤسسي للمجموعة.'
        )}
        ${kpiGrid([
          { value: '+57', label: 'مشروعًا إنشائيًا موثقًا', sub: 'سجل 2013–2024' },
          { value: '45,000', label: 'قميص كلاسيكي / شهر', sub: '100 ماكينة مخصصة' },
          { value: '600K', label: 'طاقة شبكة الملابس', sub: 'قطعة شهريًا عبر الشبكة' },
          { value: '84', label: 'سوقًا لقطاع الأغذية', sub: '738 طلب شراء موثق' },
        ])}
        ${glassCard({
          title: 'إطار التعاقد المؤسسي وإدارة سلاسل الإمداد',
          badge: 'نماذج B2B مرنة',
          lead: 'هياكل تعاقدية مصممة لتلبية متطلبات الهيئات الحكومية وسلاسل التجزئة والمستوردين الدوليين.',
          paragraphs: [
            'توفر مجموعة سامي بن عياد مكاتب فنية وتجارية متخصصة تتيح للشركاء التعاقد على مشروعات المقاولات المتكاملة (EPC)، التصنيع التعاقدي للملابس (FOB/OEM/ODM)، الاستشارات والحلول البيئية، وتوريد السلع الغذائية الطبيعية وفق عقود موثقة ومعايير تسليم صارمة.'
          ],
          bullets: [
            'حوكمة واضحة تفصل بدقة بين قدرات التنفيذ المباشر وتحالفات المصانع والشركاء',
            'جاهزية المستندات الفنية: رسومات BIM، ملفات Tech Packs، شهادات التحليل COA ودراسات الأثر البيئي',
            'تغطية كافة مستندات التصدير الدولية: EUR.1، كوميسا، شهادات المنشأ، والشهادات الصحية وحلال',
            'حماية البيانات والمشروعات عبر اتفاقيات سرية المعلومات NDA'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'مصفوفة المنشآت والقدرات والامتثال',
          'البنية التحتية والطاقات التشغيلية للقطاعات الأربعة',
          'بيانات تفصيلية لفرق المشتريات والتقييم الفني.'
        )}
        ${glassTable(
          ['القطاع التشغيلي', 'المنشآت والمعدات الرئيسية', 'الطاقة وحجم الأعمال الموثق', 'شهادات الجودة والامتثال'],
          [
            ['المقاولات والإنشاءات', 'مكتب فني BIM، معدات مدنية وفرق MEP', '+57 مشروعًا · +540 مليون ج.م', 'الكود المصري للبناء / ISO 9001'],
            ['مصنع القمصان المتخصص', '100 ماكينة متخصصة للياقات والأزرار', '45,000 قميص رسمي شهريًا', 'فحص AQL 2.5/4.0 · قطن مصري'],
            ['خطوط وشبكة الملابس', '15+ خطًا داخليًا + 150 منشأة شريكة', '100–150 ألف داخلي · حتى 600 ألف شبكة', 'OEKO-TEX® / فحص 8 مراحل'],
            ['البيئة والاستدامة', 'خبراء بحث وتطوير + تحالف RENERGON', '19 تخصصًا استشاريًا وتقنيًا', 'جهاز شؤون البيئة / GHG / CBAM'],
            ['التوريد الغذائي الطبيعي', 'محطات فرز وتعبئة وتبريد مرخصة NFSA', '738 طلب شراء across 84 دولة', 'NFSA / ISO 22000 / HACCP']
          ],
          ['20%', '28%', '26%', '26%']
        )}
        ${glassCard({
          title: 'مراحل التأهيل والتعاقد القياسية (4 خطوات)',
          badge: 'انطلاق سريع',
          bullets: [
            '1. الاستشارة المجانية الأولية: تقديم المتطلبات عبر www.sami-trade.com/request-consultation',
            '2. التقييم الفني: دراسة المقايسات، الباترونات، أو التحاليل المخبرية تحت مظلة NDA',
            '3. العرض الفني والعينة المعتمدة: تسليم العينة الذهبية أو العرض المالي خلال 5–7 أيام عمل',
            '4. التنفيذ ومراقبة الجودة: تقارير تقدم دورية وفحص ما قبل الشحن أو التسليم الابتدائي'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'غرفة البيانات والتأهيل المؤسسي',
          'الوصول المنظم للوثائق ومنظومة الاستشارات المجانية',
          'بوابة رسمية لخدمة فرق المشتريات والمستثمرين.'
        )}
        ${glassCard({
          title: 'أقسام غرفة البيانات المؤسسية (/downloads)',
          badge: '4 مستويات أمان',
          lead: 'سبعة تصنيفات رسمية تضم كافة الأدلة والتقارير المعتمدة للمجموعة:',
          bullets: [
            'أ. الوثائق المؤسسية والحوكمة · ب. البيانات والمؤشرات المالية المعتمدة',
            'ج. قدرات القطاعات الأربعة · د. محفظة المشروعات الموثقة ودراسات الحالة',
            'هـ. شهادات الامتثال والجودة · و. مذكرات الاستثمار · ز. الكتالوجات والنشرات الفنية'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 3A. Services & Solutions Portfolio (39 Disciplines) — EN (3 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Services_And_Solutions_Portfolio_EN.pdf',
    language: 'EN',
    docCode: 'SBA-SERVICES-39-2026-EN',
    sectorLabel: 'SAMI BIN AYYAD GROUP · 39 Services',
    title: 'Complete Services & Solutions Portfolio',
    subtitle:
      'Consolidated Directory of 39 Verified Engineering, Environmental & Industrial Apparel Services Across Our Core Operating Divisions',
    edition: '2026 Official Services Directory · 39 Disciplines',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Division I · 12 Construction Disciplines',
          'Construction, Contracting, MEP & Real Estate Services',
          'Turnkey engineering and facility development delivered under unified supervision.'
        )}
        ${kpiGrid([
          { value: '12', label: 'Contracting Disciplines' },
          { value: '19', label: 'Environmental Services' },
          { value: '8', label: 'Apparel Export Programs' },
          { value: '39', label: 'Total Verified Services' },
        ])}
        ${glassTable(
          ['#', 'Construction Service Title', 'Core Engineering Scope & Deliverable'],
          [
            ['01', 'General Contracting (Turnkey)', 'End-to-end civil & architectural execution for commercial, medical & industrial sites'],
            ['02', 'Civil & Structural Works', 'Deep foundations, soil stabilization, concrete skeletons & water-retaining tanks'],
            ['03', 'Architectural & Facade Systems', '2D/3D BIM shop drawings, curtain walls, cladding & structural glazing'],
            ['04', 'Electromechanical (MEP)', 'Medium/low voltage networks, central HVAC chillers, fire suppression & BMS'],
            ['05', 'Infrastructure Development', 'Potable water pipelines, sewage lift stations, utility trenches & roadworks'],
            ['06', 'Industrial Facilities', 'Pre-engineered steel warehouses, manufacturing plants & crane foundations'],
            ['07', 'Healthcare & Medical Fit-Out', 'Surgical suites, clean rooms, medical gas networks, radiation shielding & elevators'],
            ['08', 'Oil & Gas Civil Works', 'Heavy machinery pads, blast-resistant control rooms & pipeline protection'],
            ['09–10', 'Commercial & Residential Dev.', 'Corporate towers, plazas, luxury villas & multi-family compounds'],
            ['11–12', 'Luxury Fit-Out & Project Mgmt', 'Marble, acoustic ceilings, joinery, cost engineering & site supervision']
          ],
          ['8%', '32%', '60%']
        )}
      `,
      `
        ${sectionHeader(
          'Division II · 19 Environmental Disciplines',
          'Environmental Consultancy, Waste-to-Energy, Carbon & Biotechnology',
          'Aligned with EEAA guidelines, Law 202/2020, GHG Protocol, and EU CBAM readiness.'
        )}
        ${glassTable(
          ['#', 'Environmental Service Discipline', 'Technical Scope & Regulatory Alignment'],
          [
            ['01–02', 'EIA, ESIA & Environmental Audits', 'Statutory Egyptian & IFC/World Bank environmental and social assessments'],
            ['03–04', 'Carbon Footprint & CBAM Readiness', 'Scopes 1, 2 & 3 GHG inventories, LCA & EU carbon border disclosure dossiers'],
            ['05', 'Continuous Monitoring & IoT', 'Calibrated ambient air, stack emissions, noise, and water sensing'],
            ['06–08', 'Waste Management & Recycling', 'Solid & hazardous waste plans (Law 202/2020), mechanical sorting & RDF fuel'],
            ['09–10', 'Waste-to-Energy & RENERGON Biogas', 'Patented Swiss RSD dry anaerobic digestion turning organic waste to power'],
            ['11', 'C&I Renewable Energy & Solar PV', 'Industrial rooftop solar feasibility, load modeling & EPC consortium delivery'],
            ['12–14', 'ESG, SDGs & Eco-Economic Advisory', 'GRI/ISSB reporting, green finance modeling & SDG corporate alignment'],
            ['15–16', 'ISO Qualification & Integrated QHSE', 'ISO 14001, 50001 & 45001 readiness plus workplace risk management'],
            ['17–19', 'EHS Software, Bio-Tech & R&D', 'QHSE platforms, ET-POT-01 & ET-POR-01 reagents, applied industrial R&D']
          ],
          ['10%', '34%', '56%']
        )}
      `,
      `
        ${sectionHeader(
          'Division III · 8 Apparel Disciplines & Free Advisory',
          'Apparel Manufacturing, Private Label & Export Coordination',
          'Vertical textile sourcing, rapid sampling, and global export logistics.'
        )}
        ${glassTable(
          ['#', 'Apparel Manufacturing Service', 'Production Deliverable & Quality Threshold'],
          [
            ['01', 'Ready-Made Garment Manufacturing', 'Bulk production across 15+ lines for women’s, men’s, kids & activewear'],
            ['02', 'Private Label & Custom Branding', 'Full custom woven labels, hangtags, care labels & retail packaging'],
            ['03', 'Full-Package FOB Programs', 'End-to-end fabric sourcing to port container dispatch'],
            ['04', 'Textile Sourcing & Internal Dyeing', 'Egyptian cotton knits/wovens, custom GSM & Pantone lab-dip matching'],
            ['05', 'Product Development & Sampling', 'CAD/CAM pattern engineering, grading & golden samples in 5–7 days'],
            ['06', 'Classic Shirt Specialized Plant', '45,000 certified shirts/month across 100 dedicated machines'],
            ['07', 'Modern Embroidery & Printing', 'Computerized multi-head embroidery, screen, DTG & sublimation'],
            ['08', 'International Export Logistics', 'AQL 2.5/4.0 QC, customs clearance, EUR.1/COMESA & sea/air freight']
          ],
          ['8%', '34%', '58%']
        )}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  // =========================================================================
  // 3B. Services & Solutions Portfolio (39 Disciplines) — AR (3 pages)
  // =========================================================================
  docs.push({
    fileName: 'SBA_Services_And_Solutions_Portfolio_AR.pdf',
    language: 'AR',
    docCode: 'SBA-SERVICES-39-2026-AR',
    sectorLabel: 'مجموعة سامي بن عياد · دليل الـ 39 خدمة',
    title: 'دليل الخدمات والحلول المتكاملة الشامل',
    subtitle:
      'الدليل الموحد لمنظومة تضم 39 خدمة تخصصية في المقاولات الهندسية، الحلول البيئية المستدامة، وتصنيع وتصدير الملابس الجاهزة',
    edition: 'الدليل الرسمي للخدمات المعتمدة · 39 تخصصًا · 2026',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'القطاع الأول · 12 تخصصًا هندسيًا',
          'خدمات المقاولات العامة والإنشاءات والتطوير العقاري',
          'تنفيذ متكامل تحت إشراف مكتب فني وهندسي موحد.'
        )}
        ${kpiGrid([
          { value: '12', label: 'تخصص مقاولات وهندسة' },
          { value: '19', label: 'خدمة بيئية واستدامة' },
          { value: '8', label: 'حلول تصنيع وتصدير ملابس' },
          { value: '39', label: 'إجمالي الخدمات المعتمدة' },
        ])}
        ${glassTable(
          ['م', 'عنوان الخدمة الهندسية', 'نطاق التنفيذ والمخرجات الرئيسية'],
          [
            ['01', 'المقاولات العامة المتكاملة', 'تنفيذ شامل للمباني الطبية والتجارية والإدارية والصناعية بنظام تسليم المفتاح'],
            ['02', 'الأعمال المدنية والخرسانية', 'الأساسات العميقة، تحسين التربة، الهياكل الخرسانية، والخزانات الأرضية'],
            ['03', 'الأعمال المعمارية والواجهات', 'الرسومات التنفيذية BIM، واجهات الكلادينج والزجاج الإنشائي والـ GRC'],
            ['04', 'الأنظمة الكهروميكانيكية MEP', 'محطات القوى، التكييف المركزي، مكافحة وإنذار الحريق، وأنظمة المباني الذكية'],
            ['05', 'تطوير البنية التحتية والمرافق', 'خطوط المياه الرئيسية، محطات الرفع، شبكات الصرف، وأعمال الطرق'],
            ['06', 'المنشآت الصناعية واللوجستية', 'المخازن والهناجر المعدنية، المصانع، والأرضيات الخرسانية عالية الإجهاد'],
            ['07', 'تجهيز المنشآت الطبية والمستشفيات', 'غرف العمليات المعقمة، شبكات الغازات الطبية، الحماية الإشعاعية والمصاعد'],
            ['08', 'الأعمال المدنية للبترول والغاز', 'قواعد المعدات الثقيلة، غرف التحكم، وحماية خطوط الأنابيب'],
            ['09–10', 'التطوير التجاري والسكني', 'الأبراج الإدارية والمراكز التجارية والمجمعات السكنية والفيلات'],
            ['11–12', 'التشطيبات الفاخرة وإدارة المشروعات', 'الرخام، القواطع الصوتية، الجدولة الزمنية، وهندسة التكلفة']
          ],
          ['8%', '32%', '60%']
        )}
      `,
      `
        ${sectionHeader(
          'القطاع الثاني · 19 تخصصًا بيئيًا',
          'الاستشارات البيئية، تحويل المخلفات لطاقة، البصمة الكربونية والبيوتكنولوجيا',
          'خدمات متوافقة مع اشتراطات جهاز شؤون البيئة وقانون 202/2020 وضريبة الكربون الأوروبية CBAM.'
        )}
        ${glassTable(
          ['م', 'الخدمة البيئية المتخصصة', 'النطاق الفني والتوافق التشريعي'],
          [
            ['01–02', 'تقييم الأثر البيئي والاجتماعي EIA/ESIA', 'دراسات الحالة الراهنة، نمذجة الانبعاثات، وتراخيص جهاز شؤون البيئة وIFC'],
            ['03–04', 'البصمة الكربونية وجاهزية CBAM', 'حساب انبعاثات الغازات الدفيئة النطاقات 1–3 وإعداد تقارير التصدير الأوروبية'],
            ['05', 'القياسات والرصد البيئي الذكي', 'قياس انبعاثات المداخن، جودة الهواء، الضوضاء، ومياه الصرف الصناعي'],
            ['06–08', 'إدارة وتدوير المخلفات والاقتصاد الدائري', 'خطط المخلفات الصلبة والخطرة (قانون 202/2020)، الفرز وإنتاج وقود RDF'],
            ['09–10', 'تحويل المخلفات لطاقة وبيوجاز RENERGON', 'تكنولوجيا التخمير الجاف السويسرية RSD لإنتاج الكهرباء والسماد العضوي'],
            ['11', 'الطاقة الشمسية للمنشآت الصناعية C&I', 'دراسات الجدوى وتصميم محطات الطاقة الشمسية على أسطح المصانع'],
            ['12–14', 'استشارات الاستدامة ESG والتمويل الأخضر', 'تقارير الاستدامة GRI/ISSB ودراسات الجدوى البيئية والاقتصادية'],
            ['15–16', 'تأهيل أنظمة ISO وحلول QHSE', 'التأهيل لشهادات ISO 14001 و50001 و45001 وأنظمة السلامة الصناعية'],
            ['17–19', 'برمجيات EHS والبيوتكنولوجيا والبحث', 'منصات الامتثال الرقمي، مستحضرات ET-POT-01 وET-POR-01 والبحث التطبيقي']
          ],
          ['10%', '34%', '56%']
        )}
      `,
      `
        ${sectionHeader(
          'القطاع الثالث · 8 حلول تصنيع وتصدير ملابس',
          'تصنيع الملابس الجاهزة، العلامات الخاصة، وبرامج التصدير المتكاملة',
          'سلسلة إمداد رأسية من الخامة والنسيج حتى الميناء التصديري.'
        )}
        ${glassTable(
          ['م', 'خدمة التصنيع والتصدير', 'المخرجات ومعايير الجودة المعتمدة'],
          [
            ['01', 'تصنيع الملابس الجاهزة بكميات تجارية', 'إنتاج عبر 15+ خطًا حديثًا للملابس النسائية والرجالية والأطفال والرياضية'],
            ['02', 'التصنيع للعلامات الخاصة Private Label', 'إنتاج متكامل بالليبل المنسوج، الهانج تاج، وتعبئة التجزئة باسم العميل'],
            ['03', 'برامج التصدير الكاملة FOB', 'توريد الخامات، القص والخياطة، والتسليم على ظهر السفينة بميناء التصدير'],
            ['04', 'توريد الأقمشة والصباغة المتخصصة', 'أقطان مصرية تريكو ومنسوج، مطابقة الألوان مخبريًا (Lab Dips)'],
            ['05', 'تطوير المنتجات والعينات السريعة', 'إعداد الباترون الرقمي CAD/CAM وتسليم العينة الذهبية خلال 5–7 أيام'],
            ['06', 'مصنع القمصان الكلاسيكية المتخصص', 'إنتاج 45,000 قميص رسمي معتمد شهريًا عبر 100 ماكينة مخصصة'],
            ['07', 'التطريز والطباعة الصناعية الحديثة', 'تطريز كمبيوتر متعدد الرؤوس، طباعة سلك سكرين، وDTG'],
            ['08', 'التصدير والخدمات اللوجستية الدولية', 'فحص AQL 2.5/4.0، التخليص الجمركي، وشهادات المنشأ EUR.1 وكوميسا']
          ],
          ['8%', '34%', '58%']
        )}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 4A & 4B: Business & Partnership Overview (EN & AR) — 2 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Business_And_Partnership_Overview_EN.pdf',
    language: 'EN',
    docCode: 'SBA-INVESTOR-2026-EN',
    sectorLabel: 'SAMI BIN AYYAD GROUP · Investor Relations',
    title: 'Corporate Business & Partnership Overview',
    subtitle:
      'Strategic Investment Framework, Co-Development Joint Ventures & International Commercial Cooperation Prospectus',
    edition: '2026 Strategic Partnerships & Investor Brief',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Institutional Investment Thesis',
          'Multi-Sector Synergies & Export-Driven Value Creation',
          'Transparent asset structure anchored in industrial production, clean tech, and regional trade.'
        )}
        ${kpiGrid([
          { value: '4', label: 'Resilient Core Sectors', sub: 'Diversified Revenue Pillars' },
          { value: '2023', label: 'Unified Group Holding', sub: 'Institutional Governance' },
          { value: '4', label: 'Data Room Tiers', sub: 'NDA & Investor Controls' },
          { value: '100%', label: 'Free Initial Advisory', sub: 'Direct Management Access' },
        ])}
        ${glassCard({
          title: 'Three Priority Co-Development & Investment Pillars',
          badge: 'Verified Frameworks',
          lead: 'Zero fabricated financial projections — anchored strictly in verified market demand and operational scale.',
          bullets: [
            'Pillar I — Clean Energy & Circular Economy (ENVIROTAQA × RENERGON): Co-development of agricultural waste-to-energy biogas complexes, RDF production, and C&I rooftop solar PPAs across Egypt, KSA, Oman, and Africa.',
            'Pillar II — Export Apparel Manufacturing Expansion: Dedicated dedicated production line allocations and joint ventures serving European and GCC retail buyers leveraging Egypt’s zero-duty QIZ, EUR.1, and COMESA agreements.',
            'Pillar III — Agri-Food Sorting, Processing & Cold Logistics: Expanding optical grading and private-label export hubs for Siwi/Medjool dates, extra virgin olive oil, and medicinal botanicals across 84 documented markets.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Partnership Models & Data Room Protocol',
          'Flexible Structures for Funds, Technology Licensors & Trade Partners',
          'Backed by role-based access in the SBA Investor Data Room.'
        )}
        ${glassTable(
          ['Cooperation Model', 'Target Partner Profile', 'Group Contribution', 'Documentation & Security Tier'],
          [
            ['Joint Venture (JV) / PPP', 'Institutional Funds & Developers', 'Local presence, engineering, permits & distribution', 'Tier 3/4: NDA & Restricted Investor Memo'],
            ['Technical Consortium (EPC)', 'Global Clean-Tech & Heavy Contractors', 'Civil works, local compliance & operations desk', 'Tier 2: Registered Business Qualification'],
            ['Contract Manufacturing / OEM', 'International Apparel & Food Brands', 'Dedicated factory lines, QA & export clearance', 'Tier 1/2: Capabilities & Catalogue Dossiers'],
            ['Commercial Agency / Distribution', 'Global Technology & Bio-Tech Providers', 'Direct MENA & African B2B sales channels', 'Tier 2: Distribution Framework Brief']
          ],
          ['22%', '24%', '28%', '26%']
        )}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Business_And_Partnership_Overview_AR.pdf',
    language: 'AR',
    docCode: 'SBA-INVESTOR-2026-AR',
    sectorLabel: 'مجموعة سامي بن عياد · علاقات المستثمرين',
    title: 'نظرة عامة على الأعمال والشراكات الاستراتيجية',
    subtitle:
      'إطار الاستثمار المؤسسي، التحالفات المشتركة، وفرص التوسع التصديري والصناعي عبر قطاعات مجموعة سامي بن عياد',
    edition: 'موجز الشراكات الاستراتيجية والمستثمرين · 2026',
    heroImage: '/BG/Main Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'أطروحة الاستثمار والشراكات',
          'التكامل متعدد القطاعات وبناء القيمة التصديرية المستدامة',
          'هيكل مؤسسي شفاف يرتكز على الإنتاج الصناعي، الطاقة النظيفة، والتجارة الدولية.'
        )}
        ${kpiGrid([
          { value: '4', label: 'قطاعات استراتيجية', sub: 'تنويع مدروس للعوائد' },
          { value: '2023', label: 'الكيان المؤسسي الموحد', sub: 'حوكمة وإدارة مركزية' },
          { value: '4', label: 'مستويات غرفة البيانات', sub: 'حماية NDA وتصاريح دخول' },
          { value: '100%', label: 'استشارات مجانية', sub: 'تواصل مباشر مع القيادة' },
        ])}
        ${glassCard({
          title: 'الركائز الثلاث ذات الأولوية للاستثمار والتطوير المشترك',
          badge: 'أطر استثمارية موثقة',
          lead: 'شفافية تامة دون توقعات مالية مختلقة — ترتكز على طلب سوقي موثق وطاقات تشغيلية حقيقية.',
          bullets: [
            'المحور الأول — الطاقة النظيفة والاقتصاد الدائري (إنفيروتاقة × RENERGON): تطوير مشروعات تحويل المخلفات الزراعية لطاقة (بيوجاز وأسمدة) ومحطات الطاقة الشمسية للمصانع C&I في مصر والسعودية وعُمان وأفريقيا.',
            'المحور الثاني — التوسع في تصنيع وتصدير الملابس الجاهزة: تخصيص خطوط إنتاج وشراكات توريد لسلاسل التجزئة الأوروبية والخليجية بالاستفادة من اتفاقيات الإعفاء الجمركي (EUR.1 وكوميسا).',
            'المحور الثالث — مراكز الفرز والتبريد والتصدير الغذائي: التوسع في خطوط الفرز الضوئي والتعبئة للتمور وزيت الزيتون البكر والأعشاب الطبية لتلبية طلبات 84 سوقًا دوليًا.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'نماذج التعاون وحوكمة غرفة البيانات',
          'هياكل شراكة مرنة للصناديق، مزودي التكنولوجيا، والشركاء التجاريين',
          'مدعومة بصلاحيات وصول متدرجة في غرفة البيانات المؤسسية.'
        )}
        ${glassTable(
          ['نموذج الشراكة والتعاون', 'الشريك المستهدف', 'مساهمة مجموعة سامي بن عياد', 'مستوى التصريح في غرفة البيانات'],
          [
            ['شراكة استثمارية (JV / PPP)', 'صناديق الاستثمار والمطورون', 'الكيان المحلي، التنفيذ الهندسي، التراخيص والتسويق', 'المستوى 3 و4: اتفاقية سرية NDA وتصريح مستثمر'],
            ['تحالف فني ومقاولات (EPC)', 'شركات التكنولوجيا والمقاولات الدولية', 'الأعمال المدنية، الامتثال البيئي والتشغيل الميداني', 'المستوى 2: تأهيل الشركات المسجلة'],
            ['التصنيع التعاقدي (OEM / FOB)', 'العلامات التجارية والمستوردون الدوليون', 'خطوط إنتاج مخصصة، مراقبة الجودة، والتصدير', 'المستوى 1 و2: أدلة القدرات والكتالوجات'],
            ['التمثيل التجاري والتوزيع', 'مزودو التقنيات والمعدات الصناعية', 'قنوات البيع المباشرة في الشرق الأوسط وأفريقيا', 'المستوى 2: مذكرة أطر التوزيع والوكالات']
          ],
          ['22%', '24%', '28%', '26%']
        )}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 5A & 5B: Supplier & Procurement Profile (EN & AR) — 2 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Supplier_And_Procurement_Profile_EN.pdf',
    language: 'EN',
    docCode: 'SBA-SUPPLIER-2026-EN',
    sectorLabel: 'SAMI BIN AYYAD GROUP · Procurement',
    title: 'Supplier & Procurement Introduction',
    subtitle:
      'Vendor Qualification Guidelines, Sector Material Specifications & Accredited Supply Chain Onboarding',
    edition: '2026 Official Procurement & Vendor Guide',
    heroImage: '/BG/Join Us Background.jpg',
    pages: [
      `
        ${sectionHeader(
          'Procurement Categories & Material Specs',
          'Vendor Requirements Across Our Four Operating Divisions',
          'Transparent sourcing criteria for raw materials, machinery, and specialized subcontractors.'
        )}
        ${glassTable(
          ['Sector Division', 'Primary Procurement & Material Requirements', 'Mandatory Quality & Compliance Standard'],
          [
            ['Construction & MEP', 'Ready-mix concrete, structural rebar, cement, copper cables, HVAC chillers, elevators & finishing stone', 'Certified mill & lab test reports, Egyptian Code & civil defense compliance'],
            ['Apparel Manufacturing', 'Combed Egyptian cotton yarns, woven shirting poplin, French terry, elastane knits, trims & zippers', 'OEKO-TEX® Standard 100, color fastness grade 4+, shrinkage tolerance ≤ 3%'],
            ['Environment & Energy', 'Biogas digester components, solar PV inverters, HDPE geomembranes, stainless pumping & lab reagents', 'CE / UL certification, industrial duty rating & chemical compatibility dossiers'],
            ['Agri-Food Trading', 'Raw farm harvests (Siwi/Medjool dates, olives, raw Sidr honey, dried herbs) & food-grade packaging', 'NFSA food-contact certification, zero prohibited pesticide residues, full COA']
          ],
          ['22%', '44%', '34%']
        )}
        ${glassCard({
          title: 'Four-Stage Vendor Qualification & Onboarding Process',
          badge: 'Vendor Portal: /join/group',
          bullets: [
            '1. Corporate Registration: Submit company profile, commercial registry & tax card via www.sami-trade.com/join/group.',
            '2. Technical & Sample Evaluation: Lab testing, material sample verification & quality audit by sector engineers.',
            '3. Facility Inspection (where required): Verification of warehousing, cold chain, or factory compliance.',
            '4. Accredited Vendor Enrollment: Issuance of Vendor Code and direct inclusion in tender RFQs.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Commercial Terms & Ethical Supply Governance',
          'Fair Contracting, Traceability & Direct Vendor Coordination',
          'Standards governing every vendor relationship within SAMI BIN AYYAD GROUP.'
        )}
        ${glassCard({
          title: 'Supply Chain Integrity & ESG Expectations',
          badge: 'Vendor Code of Conduct',
          paragraphs: [
            'Sami Bin Ayyad Group is committed to ethical procurement, occupational health and safety (HSE), child-labor-free textile manufacturing, environmental waste accountability, and transparent payment schedules aligned with contract milestones.'
          ],
          bullets: [
            'Full batch traceability documentation required on all food and apparel material deliveries',
            'Zero-tolerance policy against counterfeit certifications or unauthorized material substitutions',
            'Dedicated procurement coordination desk accessible via free consultation or vendor portal'
          ],
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Supplier_And_Procurement_Profile_AR.pdf',
    language: 'AR',
    docCode: 'SBA-SUPPLIER-2026-AR',
    sectorLabel: 'مجموعة سامي بن عياد · المشتريات وسلاسل الإمداد',
    title: 'دليل الموردين والتأهيل للمشتريات',
    subtitle:
      'معايير تأهيل الموردين والمقاولين الفرعيين، وفئات المواد الخام والمستلزمات المطلوبة عبر قطاعات المجموعة',
    edition: 'الدليل الرسمي للموردين والمشتريات · 2026',
    heroImage: '/BG/Join Us Background.jpg',
    pages: [
      `
        ${sectionHeader(
          'فئات المشتريات والمواصفات الفنية',
          'متطلبات التوريد والمواد الخام عبر القطاعات الأربعة',
          'ضوابط واضحة لتأهيل موردي الخامات والمعدات ومقاولي الباطن.'
        )}
        ${glassTable(
          ['القطاع التشغيلي', 'احتياجات التوريد والمواد الخام الرئيسية', 'معايير الجودة والامتثال الإلزامية'],
          [
            ['المقاولات والأنظمة MEP', 'الخرسانة الجاهزة، حديد التسليح، الكابلات، وحدات التكييف المركزية، المصاعد ومواد التشطيب', 'تقارير اختبارات معملية معتمدة، مطابقة الكود المصري واعتماد الحماية المدنية'],
            ['تصنيع الملابس والمنسوجات', 'خيوط القطن المصري الممشط، أقمشة القمصان البوبلين، التيري والليكرا، السوست والإكسسوارات', 'شهادات OEKO-TEX® 100، ثبات الألوان درجة 4+، ونسبة انكماش لا تتجاوز 3%'],
            ['البيئة والطاقة النظيفة', 'مكونات محطات البيوجاز، إنفرترات الطاقة الشمسية، أغشية العزل HDPE، المضخات ومواد الفحص', 'شهادات CE / UL، مواصفات التشغيل الصناعي، ومقاومة التآكل الكيميائي'],
            ['المنتجات الطبيعية والغذائية', 'المحاصيل الزراعية الخام (تمور سيوة ومجدول، زيتون، عسل سدر، أعشاب) وعبوات التغليف الغذائية', 'شهادات ملامسة الغذاء المعتمدة من NFSA، خلو من متبقيات المبيدات، وشهادات تحليل COA']
          ],
          ['22%', '44%', '34%']
        )}
        ${glassCard({
          title: 'خطوات تأهيل وتسجيل الموردين المعتمدين (4 مراحل)',
          badge: 'بوابة التسجيل: /join/group',
          bullets: [
            '1. التسجيل المؤسسي: تقديم الملف التعريفي والسجل التجاري والبطاقة الضريبية عبر www.sami-trade.com/join/group.',
            '2. الفحص الفني واعتماد العينات: مراجعة المواصفات المخبرية وفحص العينات عبر مهندسي الجودة بالقطاع.',
            '3. الزيارة الميدانية (عند الحاجة): التحقق من قدرات التخزين والتبريد أو جاهزية خطوط الإنتاج.',
            '4. قيد المورد وإدراج المناقصات: إصدار كود مورد معتمد ودعوته للمناقصات وطلبات الأسعار.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'حوكمة المشتريات والالتزام التعاقدي',
          'العدالة التعاقدية، تتبع سلاسل الإمداد، والتنسيق المباشر',
          'المبادئ الحاكمة لعلاقات الموردين مع مجموعة سامي بن عياد.'
        )}
        ${glassCard({
          title: 'ميثاق سلاسل الإمداد والنزاهة المهنية',
          badge: 'مدونة سلوك الموردين',
          paragraphs: [
            'تلتزم مجموعة سامي بن عياد بمشتريات عادلة وشفافة تقوم على اشتراطات السلامة والصحة المهنية، ومنع تشغيل الأطفال في الصناعات النسيجية، والالتزام بالضوابط البيئية، وصرف المستحقات وفق جداول الإنجاز المتفق عليها.'
          ],
          bullets: [
            'إلزامية توفير مستندات التتبع (Traceability) لكافة شحنات الأغذية والمنسوجات',
            'سياسة عدم التسامح تجاه أي شهادات غير موثقة أو تغيير في المواصفات المعتمدة',
            'إتاحة بوابة الاستشارات المجانية للتنسيق الفني قبل التقديم في المناقصات'
          ],
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  return docs;
}

