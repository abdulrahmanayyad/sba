import fs from 'fs';
import path from 'path';
import { CorporateDocBuilder, COLORS } from './builder.js';

// Ensure output directories
const OUT_DIR = path.resolve('public/downloads');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function generateAll() {
  console.log('================================================================');
  console.log('SAMI BIN AYYAD GROUP — COMPLETE CORPORATE PDF DOCUMENTATION SYSTEM');
  console.log('Generating verified 21-document corporate PDF library...');
  console.log('================================================================\n');

  // -------------------------------------------------------------
  // PDF 01: Complete Corporate Company Profile (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Complete Corporate Company Profile',
      titleAr: 'الملف التعريفي الشامل للمجموعة',
      subtitle: 'Official Group Presentation · 2026 International Edition',
      subtitleAr: 'العرض التعريفي المؤسسي الشامل للقطاعات والقدرات',
      sector: 'SAMI BIN AYYAD GROUP',
      sectorAr: 'مجموعة سامي بن عياد',
      docCode: 'SBA-CORP-PROFILE-2026-EN',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 International Business Edition',
      highlights: [
        { en: 'Four Core Operating Sectors: Construction, Environmental, Apparel & Food' },
        { en: 'Heritage dating back to 1977 with formal corporate unification in 2023' },
        { en: 'Dedicated Classic Shirt Facility with 45,000 certified shirts/month' },
        { en: '39 comprehensive verified engineering, environmental, and apparel services' },
        { en: 'Established international trade desks serving MENA, GCC, Europe and worldwide' },
      ],
    });

    b.addSection('1. Executive Overview & Group Identity', null, 'Institutional Heritage, Core Mission & Multidisciplinary Capabilities');
    b.addCard({
      titleEn: 'About Sami Bin Ayyad Group (SBA)',
      badgeEn: 'Corporate Heritage & Strategic Foundation',
      leadEn: 'An integrated industrial, engineering, and trading conglomerate headquartered in Cairo, Egypt.',
      bodyEn: 'Sami Bin Ayyad Group combines deep operational contracting roots dating back to 1977 with modern industrial scale consolidated through its unified corporate entity founded in 2023. Operating across four vital economic pillars, the Group serves institutional clients, international importers, and governmental agencies with verifiable quality and disciplined execution.',
      bullets: [
        'Construction, Contracting & Real Estate Development (12 specialized engineering disciplines)',
        'Environmental Solutions & Sustainability (19 consultancy, compliance & clean tech services)',
        'Apparel Manufacturing & Fashion Development (15+ production lines, 250+ specialized machines, +2,700 models)',
        'Natural Products & Food Trading (6 export categories, NFSA certified processing hubs)',
      ],
      highlightBorder: true,
    });

    b.addMetrics([
      { value: '1977', labelEn: 'Foundational Roots' },
      { value: '2023', labelEn: 'Unified Corporate Group' },
      { value: '4', labelEn: 'Core Sectors' },
      { value: '39', labelEn: 'Verified Services' },
    ]);

    b.addSection('2. Strategic Business Pillars & Operational Divisions', null, 'Vertical Integration and Market Capabilities');
    b.addCard({
      titleEn: 'Division I: Construction & Real Estate Development',
      badgeEn: '45+ Years Delivery Heritage',
      leadEn: 'Turnkey contracting, heavy civil works, structural engineering, MEP systems, and infrastructure development.',
      bodyEn: 'Executing commercial, industrial, healthcare, and infrastructure projects across Egypt with strict adherence to Egyptian and regional engineering codes. Over 57 documented projects delivered with registered historical business volume exceeding 540 Million EGP.',
      bullets: [
        'Turnkey General Contracting (EPC)',
        'Civil & Structural Skeletons and Deep Foundations',
        'Advanced MEP Systems (HVAC, Fire Suppression, Low Current)',
        'Comprehensive Interior Luxury Finishing & Shop Drawings',
      ],
    });

    b.addCard({
      titleEn: 'Division II: Sustainable Environmental Services & Clean Energy',
      badgeEn: 'Scientific Research & European Technology Alliance',
      leadEn: 'Comprehensive environmental consultancy, waste-to-energy systems, carbon management, and biotechnology.',
      bodyEn: 'Operating in strategic technological partnership with RENERGON International AG (Switzerland) utilizing patented RSD dry anaerobic digestion technology to convert municipal and agro waste into clean energy, biochar, and organic fertilizers.',
      bullets: [
        'Environmental Impact Assessments (EIA & ESIA)',
        'Corporate & Product Carbon Footprinting (Scopes 1, 2, 3) & CBAM Compliance',
        'Turnkey Waste-to-Energy (WtE) and Biogas Plants',
        'Proprietary Bioremediation Reagents (ET-POT-01 Oil Terminator & ET-POR-01 Odor Neutralizer)',
      ],
    });

    b.addCard({
      titleEn: 'Division III: Apparel Manufacturing & Fashion Development',
      badgeEn: 'Export-Oriented Vertical Production Powerhouse',
      leadEn: 'High-volume apparel manufacturing, private label collections, and dedicated formal shirt production.',
      bodyEn: 'Operating 15+ modern production lines with 250+ specialized machines producing over 5,000 pieces daily and 100,000+ pieces monthly (operational capacity up to 150,000 pcs/month). Includes a specialized Classic Shirt facility producing 45,000 certified shirts monthly across 100 dedicated machines.',
      bullets: [
        'Full Package FOB Export & Private Label Programs',
        '+2,700 Developed Industrial Styles in Library',
        '8-Stage In-Line & End-Line Quality Control (AQL 2.5/4.0 Standard)',
        'Complete Pattern Grading, CAD/CAM Cutting & Automated Sewing',
      ],
    });

    b.addCard({
      titleEn: 'Division IV: Natural Products & Agri-Food Trading',
      badgeEn: 'NFSA-Licensed Export Supply & Traceability',
      leadEn: 'Premium Egyptian and Mediterranean agricultural commodities and processed natural goods.',
      bodyEn: 'Connecting certified farming hubs across Siwa Oasis, the Nile Delta, and Upper Egypt with international importers, food manufacturers, and retail chains. Full compliance with ISO 22000, HACCP, and NFSA export registries.',
      bullets: [
        'Pure Wild Sidr Honey & Bee Products',
        'Cold-Pressed Extra Virgin Olive Oil (EVOO) & Table Olives',
        'Egyptian Jumbo Medjool & Siwi Dates',
        'Medicinal Herbs, Spices & Spray-Dried Natural Powders',
      ],
    });

    b.addSection('3. Quality Governance & International Alliances', null, 'Institutional Standards, QHSE Framework & Commercial Cooperation');
    b.addTable({
      headers: ['Sector Division', 'Primary Standards & Codes', 'Delivery Model', 'Key Geographic Focus'],
      rows: [
        ['Construction', 'Egyptian Code of Practice / ISO 9001', 'EPC Turnkey / General Contracting', 'Egypt & GCC Region'],
        ['Environmental', 'EEAA Guidelines / WRI GHG / ISO 14001', 'Advisory, Technology Supply & EPC', 'MENA, Africa & Europe'],
        ['Apparel', 'AQL 2.5/4.0 / Oeko-Tex Compliant', 'OEM / ODM / FOB Private Label', 'Europe, GCC & North America'],
        ['Food Trading', 'ISO 22000 / HACCP / NFSA Export', 'Bulk Supply / Private Label', 'EU, Arab Markets & Asia'],
      ],
      colWidths: [110, 140, 130, 125],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Complete_Corporate_Profile_EN.pdf'));

    // Also mirror to root public/SBA-Corporate-Profile.pdf so existing links receive the complete document
    fs.copyFileSync(path.join(OUT_DIR, 'SBA_Complete_Corporate_Profile_EN.pdf'), path.resolve('public/SBA-Corporate-Profile.pdf'));
    console.log('✓ Synchronized public/SBA-Corporate-Profile.pdf with master corporate profile');
  }

  // -------------------------------------------------------------
  // PDF 02: Arabic Complete Corporate Profile (AR)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'الملف التعريفي الشامل للمجموعة',
      titleAr: 'الملف التعريفي الشامل للمجموعة',
      subtitle: 'العرض المؤسسي المعتمد للقطاعات والقدرات التشغيلية · إصدار 2026',
      subtitleAr: 'العرض المؤسسي المعتمد للقطاعات والقدرات التشغيلية · إصدار 2026',
      sector: 'مجموعة سامي بن عياد',
      sectorAr: 'مجموعة سامي بن عياد',
      docCode: 'SBA-CORP-PROFILE-2026-AR',
      language: 'AR',
    });

    b.addCoverPage({
      edition: 'الإصدار المؤسسي المعتمد 2026',
      highlights: [
        { ar: 'أربعة قطاعات استراتيجية متكاملة: المقاولات، البيئة، الملابس، والأغذية' },
        { ar: 'جذور وخبرات إنشائية تمتد منذ عام 1977 وتأسيس مؤسسي موحد عام 2023' },
        { ar: 'مصنع متخصص للقمصان الكلاسيكية بطاقة 45,000 قميص معتمد شهريًا' },
        { ar: 'منظومة خدمات متكاملة تضم 39 تخصصًا استشاريًا وتنفيذيًا معتمدًا' },
        { ar: 'مكاتب تجارية وتصديرية معتمدة لخدمة الأسواق الإقليمية والدولية' },
      ],
    });

    b.addSection('١. نظرة عامة والهوية المؤسسية', null, 'الريادة والخبرة التاريخية والتكامل التشغيلي');
    b.addCard({
      titleAr: 'عن مجموعة سامي بن عياد (SBA)',
      badgeAr: 'التاريخ المؤسسي والريادة الاستراتيجية',
      leadAr: 'كيان صناعي وهندسي وتجاري متكامل مقره الرئيسي في القاهرة، جمهورية مصر العربية.',
      bodyAr: 'تجمع مجموعة سامي بن عياد بين الخبرة التنفيذية العريقة في قطاع الإنشاءات والمقاولات منذ عام 1977، والتكامل الصناعي والاستثماري الموحد الذي تأسس رسميًا عام 2023. تدير المجموعة أربعة قطاعات اقتصادية حيوية تلبي احتياجات كبرى المؤسسات والشركات والمستثمرين الدوليين وفق أعلى معايير الجودة والشفافية.',
      bullets: [
        { ar: 'المقاولات والتطوير العقاري (12 تخصصًا هندسيًا وتنفيذيًا متكاملًا)' },
        { ar: 'الخدمات البيئية المستدامة والطاقة النظيفة (19 خدمة استشارية وتكنولوجية)' },
        { ar: 'تصنيع الملابس الجاهزة (15+ خط إنتاج، 250+ ماكينة، ومكتبة تضم +2,700 تصميم)' },
        { ar: 'المنتجات الطبيعية والتوريد الغذائي (6 فئات تصديرية بمحطات معتمدة من سلامة الغذاء)' },
      ],
      highlightBorder: true,
    });

    b.addMetrics([
      { value: '1977', labelAr: 'الجذور والخبرة' },
      { value: '2023', labelAr: 'التأسيس الموحد' },
      { value: '4', labelAr: 'قطاعات رئيسية' },
      { value: '39', labelAr: 'خدمة معتمدة' },
    ]);

    b.addSection('٢. القطاعات الاستراتيجية والقدرات التنفيذية', null, 'التكامل الصناعي والتصديري للمجموعة');
    b.addCard({
      titleAr: 'قطاع المقاولات والتطوير العقاري',
      badgeAr: 'خبرة إنشائية موثقة تمتد لأكثر من 45 عامًا',
      leadAr: 'المقاولات العامة، الأعمال المدنية والخرسانية، الأنظمة الكهروميكانيكية MEP، وأعمال البنية التحتية.',
      bodyAr: 'تنفيذ المشروعات السكنية والتجارية والصناعية ومنشآت الرعاية الصحية وفق الكود المصري والمواصفات القياسية الدولية، مع سجل موثق يضم 57 مشروعًا وحجم أعمال تاريخي يتجاوز 540 مليون جنيه مصري.',
    });

    b.addCard({
      titleAr: 'قطاع البيئة المستدامة والطاقة المتجددة',
      badgeAr: 'تحالف تكنولوجي أوروبي مع رينرجون السويسرية',
      leadAr: 'الاستشارات البيئية المتقدمة، محطات تحويل المخلفات لطاقة، حساب البصمة الكربونية، والمستحضرات الحيوية.',
      bodyAr: 'تحالف استراتيجي مع شركة RENERGON International AG السويسرية لتنفيذ محطات البيوجاز بتكنولوجيا التخمير الجاف RSD، إلى جانب مستحضرات المعالجة البيولوجية ET-POT-01 وET-POR-01.',
    });

    b.addCard({
      titleAr: 'قطاع تصنيع الملابس وتطوير الأزياء',
      badgeAr: 'طاقة إنتاجية كبرى موجهة للتصدير الدولي',
      leadAr: 'تصنيع الملابس الجاهزة، العلامات التجارية الخاصة، ومصنع متكامل للقمصان الكلاسيكية.',
      bodyAr: 'تشغيل 15+ خط إنتاج بطاقة تتجاوز 5,000 قطعة يوميًا و100,000+ قطعة شهريًا (تصل إلى 150,000 قطعة/شهر)، مع مصنع مخصص للقمصان ينتج 45,000 قميص معتمد شهريًا عبر 100 ماكينة متخصصة.',
    });

    b.addCard({
      titleAr: 'قطاع المنتجات الطبيعية والتوريد الغذائي',
      badgeAr: 'سلاسل إمداد موثوقة ومحطات معتمدة من سلامة الغذاء',
      leadAr: 'تصدير التمور الفاخرة، زيت الزيتون البكر الممتاز، عسل السدر، والأعشاب الطبية المجففة.',
      bodyAr: 'ربط مزارع واحة سيوة وصعيد مصر والدلتا بالأسواق الدولية وفق شهادات ISO 22000 وHACCP وتراخيص الهيئة القومية لسلامة الغذاء NFSA مع خيارات التعبئة الخاصة Bulk وPrivate Label.',
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Complete_Corporate_Profile_AR.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 03: Corporate Capabilities Statement (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Corporate Capabilities Statement',
      subtitle: 'Condensed Operational Capability Statement for International Procurement & Partners',
      sector: 'SAMI BIN AYYAD GROUP',
      docCode: 'SBA-CAPABILITIES-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Procurement & Investor Briefing',
      highlights: [
        { en: 'Multi-sector turnkey delivery and contract manufacturing capability' },
        { en: 'Verified engineering equipment, production lines, and accredited facilities' },
        { en: 'Comprehensive compliance with ISO, NFSA, EEAA, and regional codes' },
        { en: 'Direct export logistics coverage to GCC, Europe, Africa, and North America' },
      ],
    });

    b.addSection('Core Operational Strengths', null, 'Institutional Metrics & Commercial Delivery Models');
    b.addMetrics([
      { value: '57', labelEn: 'Construction Projects' },
      { value: '45,000', labelEn: 'Classic Shirts/Mo' },
      { value: '+2,700', labelEn: 'Style Catalog' },
      { value: '39', labelEn: 'Verified Services' },
    ]);

    b.addCard({
      titleEn: 'International Procurement Cooperation Models',
      badgeEn: 'Flexible Commercial Engagement',
      leadEn: 'Engineered engagement structures matching governmental and corporate buying workflows.',
      bodyEn: 'Sami Bin Ayyad Group provides dedicated commercial contract desks offering EPC turnkey execution, OEM/ODM apparel manufacturing, FOB/CIF commodity trade, and specialized environmental engineering consulting.',
      bullets: [
        'EPC Contracting (Engineering, Procurement & Construction for civil & MEP works)',
        'FOB Garment Manufacturing (Full package from yarn sourcing to port container loading)',
        'Private Label Natural Products Packaging (Retail-ready certified packaging with buyer branding)',
        'Environmental Turnkey Technology Supply & Maintenance Partnerships',
      ],
      highlightBorder: true,
    });

    b.addTable({
      headers: ['Division', 'Core Facilities / Equipment', 'Monthly Capacity', 'Quality Certification'],
      rows: [
        ['Construction', 'Heavy Excavation, Batching, MEP Tooling', 'Turnkey Multi-Site Execution', 'Egyptian Code / ISO 9001'],
        ['Shirt Factory', '100 Specialized Automated Machines', '45,000 Certified Shirts', 'AQL 2.5 / Oeko-Tex'],
        ['Garment Lines', '15+ Modern Production Lines', '100,000 – 150,000 Pieces', 'In-Line 8-Stage QC'],
        ['Food Processing', 'NFSA-Licensed Sorting & Cold Storage', '120+ Metric Tonnes Agro', 'ISO 22000 / HACCP / Halal'],
      ],
      colWidths: [100, 150, 125, 130],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Corporate_Capabilities_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 04 & 18: Construction Sector Capabilities Profile (EN & AR)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Construction & Real Estate Capabilities Profile',
      titleAr: 'دليل قطاع المقاولات والتطوير العقاري',
      subtitle: 'Comprehensive Engineering, Contracting & Infrastructure Portfolio',
      subtitleAr: 'الدليل الهندسي الشامل لخدمات المقاولات العامة والبنية التحتية',
      sector: 'Construction & Real Estate',
      sectorAr: 'المقاولات والتطوير العقاري',
      docCode: 'SBA-CONST-CAP-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Engineering Edition',
      highlights: [
        { en: '12 Comprehensive Engineering & Contracting Disciplines' },
        { en: '57 Documented Projects Delivered Across Egypt' },
        { en: '540+ Million EGP Registered Historical Delivery Volume' },
        { en: '6-Stage Project Delivery Framework from Feasibility to Handover' },
      ],
    });

    b.addSection('1. Engineering Disciplines & Delivery Scopes', null, 'Integrated Civil, Structural, MEP, and Finishing Capabilities');
    b.addCard({
      titleEn: 'General Contracting & Structural Works',
      badgeEn: 'Disciplines 01 & 02',
      leadEn: 'Turnkey building construction, reinforced concrete skeletons, deep foundation works, and structural retrofitting.',
      bodyEn: 'Complete building lifecycle delivery for public utility, commercial, residential, and industrial complexes compliant with the Egyptian Code of Practice.',
      bullets: [
        'Turnkey EPC execution and project coordination',
        'Deep foundation excavation, soil replacement & compaction testing',
        'High-grade reinforced concrete pouring with certified slump testing',
        'Specialized subterranean water tanks, vaults & retaining structures',
      ],
    });

    b.addCard({
      titleEn: 'Electromechanical Systems (MEP) & Infrastructure',
      badgeEn: 'Disciplines 04 & 05',
      leadEn: 'Integrated electrical power, HVAC central air systems, fire suppression, low-current & utility networks.',
      bodyEn: 'Turnkey MEP engineering for critical infrastructure, healthcare environments, commercial towers, and industrial plants with complete balancing and statutory safety approvals.',
      bullets: [
        'Medium and low-voltage distribution networks and substations',
        'Central chiller plants, chilled water piping and duct fabrication',
        'Automatic sprinkler and clean agent fire suppression networks',
        'Potable water transmission, sewage lift stations, and stormwater drainage',
      ],
    });

    b.addCard({
      titleEn: 'Architectural Works & Luxury Fit-Out',
      badgeEn: 'Disciplines 03 & 11',
      leadEn: 'BIM 2D/3D shop drawings, curtain wall facades, GRC cladding, acoustic treatment, and turnkey interior design.',
      bodyEn: 'Technical office drafting coordinated working drawings alongside on-site master finishing craftspeople, delivering premium spaces for corporate headquarters and upscale developments.',
    });

    b.addSection('2. Six-Stage Project Execution Methodology', null, 'Rigorous Delivery Governance and Quality Assurance');
    b.addTable({
      headers: ['Phase', 'Stage Name', 'Key Engineering Activities', 'Client Deliverable'],
      rows: [
        ['Phase 1', 'Initiation & Feasibility', 'Site surveys, geotechnical analysis, budget models', 'Feasibility Dossier & Charter'],
        ['Phase 2', 'Design & Value Engineering', 'BIM modeling, shop drawings, MEP clash detection', 'Approved Working Drawings'],
        ['Phase 3', 'Procurement & Supply Chain', 'Vendor qualification, material approvals, QA tests', 'Procurement Schedule & Submittals'],
        ['Phase 4', 'Site Construction Execution', 'Civil works, MEP installation, safety protocols', 'Daily Logs & Progress Milestones'],
        ['Phase 5', 'Testing & Commissioning', 'Pressure testing, MEP balancing, fire safety signoff', 'Commissioning Test Certificates'],
        ['Phase 6', 'Handover & Post-Care', 'As-built documentation, facility training, warranty', 'Final Handover Certificate'],
      ],
      colWidths: [60, 130, 185, 130],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Construction_Capabilities_EN.pdf'));

    // Arabic Edition
    const bAr = new CorporateDocBuilder({
      title: 'دليل قطاع المقاولات والتطوير العقاري',
      titleAr: 'دليل قطاع المقاولات والتطوير العقاري',
      subtitle: 'الدليل الهندسي الشامل لخدمات المقاولات العامة والبنية التحتية',
      subtitleAr: 'الدليل الهندسي الشامل لخدمات المقاولات العامة والبنية التحتية',
      sector: 'المقاولات والتطوير العقاري',
      sectorAr: 'المقاولات والتطوير العقاري',
      docCode: 'SBA-CONST-CAP-2026-AR',
      language: 'AR',
    });
    bAr.addCoverPage({
      edition: 'الإصدار الهندسي المعتمد 2026',
      highlights: [
        { ar: '12 تخصصًا هندسيًا وتنفيذيًا متكاملًا تحت إدارة موحدة' },
        { ar: '57 مشروعًا موثقًا تم تسليمها بنجاح في مختلف محافظات مصر' },
        { ar: 'حجم أعمال تاريخي مسجل يتجاوز 540 مليون جنيه مصري' },
        { ar: 'منهجية تنفيذ سداسية المراحل من دراسة الجدوى حتى التسليم' },
      ],
    });
    bAr.addSection('١. التخصصات الهندسية ونطاقات التنفيذ', null, 'الأعمال المدنية، الكهروميكانيكية MEP، والتشطيبات المعمارية');
    bAr.addCard({
      titleAr: 'المقاولات العامة والأعمال المدنية والخرسانية',
      badgeAr: 'التخصصات 01 و02',
      leadAr: 'تنفيذ المشروعات المتكاملة، الهياكل الخرسانية المسلحة، الأساسات العميقة، وأعمال الترميم.',
      bodyAr: 'تغطية شاملة للمشروعات التجارية والسكنية والصناعية ومرافق النفع العام وفق الكود المصري للخرسانة المسلحة والمواصفات القياسية.',
    });
    bAr.addCard({
      titleAr: 'الأنظمة الكهروميكانيكية MEP وتطوير البنية التحتية',
      badgeAr: 'التخصصات 04 و05',
      leadAr: 'شبكات القوى والإنارة، التكييف المركزي، مكافحة وإنذار الحريق، التيار الخفيف وشبكات المرافق.',
      bodyAr: 'تنفيذ متكامل لكافة الأعمال الكهروميكانيكية للأبراج الإدارية والمستشفيات والمصانع مع اعتماد لجان الحماية المدنية.',
    });
    bAr.addContactPage();
    await bAr.saveToFile(path.join(OUT_DIR, 'SBA_Construction_Capabilities_AR.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 05 & 19: Environmental Solutions & Sustainability Profile (EN & AR)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Environmental Solutions & Sustainability Profile',
      subtitle: 'Comprehensive Environmental Engineering, Waste-to-Energy & Carbon Management',
      sector: 'Environmental Solutions',
      docCode: 'SBA-ENV-SOL-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Environmental Technology Edition',
      highlights: [
        { en: '19 Specialized Environmental Consultancy & Engineering Services' },
        { en: 'Strategic Alliance with RENERGON International AG (Switzerland)' },
        { en: 'Proprietary RSD Dry Fermentation Biogas & Waste-to-Energy Technology' },
        { en: 'Scopes 1, 2, 3 Carbon Footprinting, CBAM Compliance & ESG Reporting' },
        { en: 'Proprietary Bioremediation (ET-POT-01) & Odor Control (ET-POR-01) Formulations' },
      ],
    });

    b.addSection('1. Sector Positioning & Scientific Foundation', null, 'European Technology Alliance and Environmental Engineering Leadership');
    b.addCard({
      titleEn: 'Strategic Alliance with RENERGON International AG (Switzerland)',
      badgeEn: 'Patented RSD Dry Anaerobic Digestion Technology',
      leadEn: 'Leading the waste-to-energy and biogas transformation in Egypt and Africa.',
      bodyEn: 'Sami Bin Ayyad for Sustainable Environmental Services operates in formal professional alliance with RENERGON International AG. Utilizing RENERGON\'s patented Simultaneous Digestion (RSD) dry fermentation technology, we design, build, and operate turnkey plants converting municipal solid waste (MSW), agricultural residues, food waste, and manure into clean electricity, biogas, biofuel, biochar, and premium organic compost.',
      bullets: [
        'Processes unsegregated high-solids organic waste (up to 60% of municipal streams)',
        'Zero process wastewater discharge with closed-loop thermal efficiency',
        'High methane yield: up to 120–160 m³ biogas per tonne of organic waste',
        'Turnkey EPC delivery for small, medium, and utility-scale installations',
      ],
      highlightBorder: true,
    });

    b.addSection('2. Six Environmental Service Categories (19 Disciplines)', null, 'Comprehensive Scientific, Advisory, and Industrial Compliance Solutions');
    b.addTable({
      headers: ['Category', 'Primary Services Included', 'Target Industries', 'Key Standards & Frameworks'],
      rows: [
        ['1. Consultancy & Compliance', 'EIA, ESIA, SEA, Permitting, Auditing', 'Industry, Infrastructure, Energy', 'EEAA Law 4/1994, IFC, World Bank'],
        ['2. Waste & Circular Economy', 'Solid Waste, Hazardous Waste, Recycling', 'Manufacturing, Municipalities, Petrochem', 'Egyptian Waste Law 202/2020'],
        ['3. Renewable Energy & WtE', 'RENERGON Biogas, WtE Plants, Solar PV', 'Agri-Business, Heavy Industry, Utilities', 'Patented RSD Technology'],
        ['4. Water & Wastewater', 'Industrial Effluent Treatment, Bioremediation', 'Food Processing, Oil & Gas, Chemicals', 'Law 93/1962 & Law 48/1982'],
        ['5. Carbon Management', 'Scopes 1-2-3 Auditing, CBAM, ESG, SDGs', 'Exporters, Multinational Corps, Finance', 'GHG Protocol / ISO 14064 / GRI'],
        ['6. Tech & Digital Solutions', 'IoT Sensing, EHS Platforms, Applied R&D', 'Smart Cities, Industrial Parks, Ports', 'Integrated QHSE Cloud Architecture'],
      ],
      colWidths: [110, 150, 125, 120],
    });

    b.addSection('3. Proprietary Environmental Technologies & Products', null, 'Field-Tested Reagents and Real-Time Environmental Measurement Systems');
    b.addCard({
      titleEn: 'ET-POT-01: Oil Terminator Bioremediation Agent',
      badgeEn: 'Advanced Microbial Consortium',
      leadEn: 'Concentrated bacterial formulation rapidly digesting petroleum hydrocarbons and oil spills.',
      bodyEn: 'Blended from 8 non-pathogenic bacterial strains (Pseudomonas, Bacillus, Rhodococcus isolates) with count ≥ 5 × 10⁹ CFU/g. Achieves up to 85% Total Petroleum Hydrocarbon (TPH) reduction within 30 days without harmful synthetic surfactants.',
      bullets: [
        'Remediates crude oil and fuel spills on land, sand, and coastal environments',
        'Biologically degreases industrial storage tanks and wastewater treatment lagoons',
        'Certified Class 1 non-pathogenic, non-toxic to marine and terrestrial ecosystems',
      ],
    });

    b.addCard({
      titleEn: 'ET-POR-01: Industrial Odor Neutralizer Solution',
      badgeEn: 'Catalytic Biochemical Bond Cleavage',
      leadEn: 'Rapidly eliminates hydrogen sulfide (H₂S), mercaptans, and ammonia at industrial emission sources.',
      bodyEn: 'Permanent biochemical breakdown of volatile organic sulfur and nitrogen compounds rather than temporary masking. Applied in wastewater lift stations, composting facilities, landfills, and rendering plants.',
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Environmental_Solutions_EN.pdf'));

    // Arabic Edition
    const bAr = new CorporateDocBuilder({
      title: 'دليل قطاع البيئة والاستدامة والطاقة المتجددة',
      titleAr: 'دليل قطاع البيئة والاستدامة والطاقة المتجددة',
      subtitle: 'الدليل الشامل للاستشارات البيئية وتحويل المخلفات لطاقة وحساب البصمة الكربونية',
      subtitleAr: 'الدليل الشامل للاستشارات البيئية وتحويل المخلفات لطاقة وحساب البصمة الكربونية',
      sector: 'البيئة والاستدامة',
      sectorAr: 'البيئة والاستدامة',
      docCode: 'SBA-ENV-SOL-2026-AR',
      language: 'AR',
    });
    bAr.addCoverPage({
      edition: 'الإصدار البيئي والتكنولوجي المعتمد 2026',
      highlights: [
        { ar: '19 تخصصًا استشاريًا وهندسيًا بيئيًا متكاملًا' },
        { ar: 'شراكة استراتيجية مع شركة RENERGON International AG السويسرية' },
        { ar: 'تكنولوجيا RSD للتخمير الجاف وتحويل المخلفات لطاقة نظيفة وسماد عضوي' },
        { ar: 'حساب البصمة الكربونية (النطاق 1 و2 و3) والتوافق مع متطلبات ضريبة الكربون CBAM' },
        { ar: 'مستحضرات المعالجة الحيوية المعتمدة ET-POT-01 وتحييد الروائح ET-POR-01' },
      ],
    });
    bAr.addSection('١. التحالف التكنولوجي مع رينرجون السويسرية', null, 'ريادة حلول تحويل المخلفات إلى طاقة ومحطات البيوجاز');
    bAr.addCard({
      titleAr: 'تكنولوجيا التخمير الجاف RSD الحاصلة على براءة اختراع',
      badgeAr: 'شراكة سويسرية مصرية رائدة',
      leadAr: 'تحويل المخلفات العضوية والبلدية والزراعية إلى طاقة نظيفة وكهرباء وسماد عضوي عالي الجودة.',
      bodyAr: 'تعتمد سامي بن عياد على تكنولوجيا RSD السويسرية لمعالجة كافة أنواع المخلفات العضوية ذات نسب المادة الجافة المرتفعة بدون استهلاك مياه إضافية وبأعلى كفاءة إنتاج للبيوجاز.',
    });
    bAr.addContactPage();
    await bAr.saveToFile(path.join(OUT_DIR, 'SBA_Environmental_Solutions_AR.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 06 & 20: Apparel Manufacturing & Fashion Profile (EN & AR)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Apparel Manufacturing & Fashion Development Profile',
      subtitle: 'Industrial Garment Production, Private Label Export & Dedicated Shirt Facility',
      sector: 'Apparel Manufacturing',
      docCode: 'SBA-APPAREL-MANUF-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Export Manufacturing Edition',
      highlights: [
        { en: '15+ Modern Production Lines with 250+ Specialized Machines' },
        { en: 'Daily Output Exceeding 5,000 Pieces; Monthly Production 100,000–150,000 Pieces' },
        { en: 'Dedicated Classic Shirt Facility: 45,000 Certified Shirts/Month across 100 Machines' },
        { en: '+2,700 Developed Styles in Archive Across 11 Verified Categories' },
        { en: 'Rigorous 8-Stage Quality Inspection Workflow (AQL 2.5/4.0 Standard)' },
      ],
    });

    b.addSection('1. Industrial Manufacturing Scale & Infrastructure', null, 'High-Volume Precision Cutting, Automated Assembly & Finishing Power');
    b.addMetrics([
      { value: '45,000', labelEn: 'Classic Shirts/Mo' },
      { value: '100', labelEn: 'Shirt Machines' },
      { value: '+2,700', labelEn: 'Developed Styles' },
      { value: '15+', labelEn: 'Production Lines' },
    ]);

    b.addCard({
      titleEn: 'Dedicated Classic Shirt Manufacturing Facility',
      badgeEn: 'Specialized Industrial Excellence',
      leadEn: 'State-of-the-art facility engineered exclusively for premium formal and business shirts.',
      bodyEn: 'Equipped with 100 specialized machines including automated collar band fusing presses, computer-controlled pocket setters, sleeve placket setters, high-speed multi-head buttonholers, and side-seam laser edge trimming. Produces 45,000 certified dress shirts monthly using premium Egyptian combed cotton, poplin, twill, and linen blends.',
      bullets: [
        'Dedicated monthly capacity: 45,000 certified classic shirts',
        '100 specialized high-precision machinery units',
        'Fused collar and cuff stability with zero bubble warranty',
        'Precision French cuffs, spread collars, and mother-of-pearl button stitching',
      ],
      highlightBorder: true,
    });

    b.addSection('2. Five International Business & Cooperation Models', null, 'Flexible Commercial Engagement for Importers, Wholesalers & Fashion Brands');
    b.addTable({
      headers: ['Model', 'Commercial Definition', 'Client Scope', 'SBA Delivery Commitment'],
      rows: [
        ['1. OEM Contract', 'Original Equipment Manufacturing', 'Client provides Tech Pack & specs', 'Strict production execution to exact tolerance'],
        ['2. ODM Development', 'Original Design Manufacturing', 'Selects from +2,700 style library', 'Co-development, pattern grading & production'],
        ['3. Private Label', 'Custom Collection Branding', 'Brand identity, logos, packaging', 'Turnkey woven tags, care labels, hangtags'],
        ['4. FOB Export', 'Full Package Port Delivery', 'Containerized port logistics', 'Fabric sourcing, customs clearance to port'],
        ['5. Sampling & Proto', 'Rapid Prototyping Desk', 'Design sketch or initial brief', 'Sample delivery within 5–7 business days'],
      ],
      colWidths: [100, 140, 130, 135],
    });

    b.addSection('3. Eleven Verified Apparel Product Categories', null, 'Comprehensive Styling Capabilities Across Knits and Wovens');
    b.addCard({
      titleEn: 'Collections Overview Across 11 Categories',
      badgeEn: '+2,700 Library Designs',
      leadEn: 'From high-thread count corporate shirting to technical sportswear and infant essentials.',
      bodyEn: '1. Women\'s Wear (dresses, modestwear, co-ords) · 2. Men\'s Wear (formal shirts, chinos, polos) · 3. Kids & Baby Wear (100% soft cotton rompers, dresses) · 4. Casual Wear (heavyweight fleece hoodies, joggers) · 5. Homewear & Loungewear · 6. Classic Wear (business shirts, blazers) · 7. Sportswear & Activewear (Dry-Fit performance) · 8. Underwear & Intimates · 9. Evening & Occasion Wear · 10. Abayas & Modest Wear · 11. Fabrics & Textile Sourcing.',
    });

    b.addSection('4. Eight-Stage Quality Assurance Workflow', null, 'AQL 2.5 / 4.0 Standard Applied from Raw Yarn to Final Master Cartons');
    b.addTable({
      headers: ['Stage', 'Inspection Gate', 'Testing Standards', 'Action & Threshold'],
      rows: [
        ['Stage 1', 'Raw Fabric Inspection', '4-Point Fabric Inspection System', 'Defects < 20 points per 100 sq yds'],
        ['Stage 2', 'Pre-Production Sample', 'Golden Sample signoff with client', '100% measurement and fit check'],
        ['Stage 3', 'Pattern & Cutting Audit', 'Automated CAD/CAM nesting precision', 'Tolerance within ± 1.0 mm'],
        ['Stage 4', 'In-Line Sewing Audit', 'Seam tension, SPI, stitch consistency', 'Hourly roving floor inspection'],
        ['Stage 5', 'Mid-Production Audit', 'Critical assembly points and collars', 'Check after 30% batch completion'],
        ['Stage 6', 'End-Line 100% Check', 'Visual review of all garment panels', 'Trim loose threads, measure specs'],
        ['Stage 7', 'Pressing & Packaging', 'Industrial steam finishing & tagging', 'Proper polybag fold and barcode check'],
        ['Stage 8', 'Pre-Shipment Inspection', 'Random AQL 2.5/4.0 Sampling', 'Full container seal inspection'],
      ],
      colWidths: [60, 130, 185, 130],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Apparel_Manufacturing_Profile_EN.pdf'));

    // Arabic Edition
    const bAr = new CorporateDocBuilder({
      title: 'دليل قطاع تصنيع الملابس وتطوير الأزياء',
      titleAr: 'دليل قطاع تصنيع الملابس وتطوير الأزياء',
      subtitle: 'الدليل الصناعي الشامل لتصنيع وتصدير الملابس الجاهزة ومصنع القمصان المتخصص',
      subtitleAr: 'الدليل الصناعي الشامل لتصنيع وتصدير الملابس الجاهزة ومصنع القمصان المتخصص',
      sector: 'تصنيع الملابس الجاهزة',
      sectorAr: 'تصنيع الملابس الجاهزة',
      docCode: 'SBA-APPAREL-MANUF-2026-AR',
      language: 'AR',
    });
    bAr.addCoverPage({
      edition: 'الإصدار الصناعي التصديري 2026',
      highlights: [
        { ar: '15+ خط إنتاج حديث مزود بأكثر من 250 ماكينة متخصصة' },
        { ar: 'طاقة إنتاجية تتجاوز 5,000 قطعة يوميًا و100,000 إلى 150,000 قطعة شهريًا' },
        { ar: 'مصنع متخصص للقمصان الكلاسيكية بطاقة 45,000 قميص معتمد شهريًا عبر 100 ماكينة' },
        { ar: 'مكتبة تصميمية تضم أكثر من 2,700 موديل مصنع عبر 11 فئة ملابس معتمدة' },
        { ar: 'منظومة مراقبة جودة ثمانية المراحل وفق معايير الفحص الدولية AQL 2.5/4.0' },
      ],
    });
    bAr.addSection('١. القدرات الصناعية ومصنع القمصان المتخصص', null, 'خطوط إنتاج متطورة ومصنع متخصص للقمصان الرسمية');
    bAr.addCard({
      titleAr: 'مصنع القمصان الكلاسيكية المتخصص',
      badgeAr: 'طاقة 45,000 قميص شهريًا عبر 100 ماكينة',
      leadAr: 'منشأة صناعية متطورة مخصصة حصريًا لإنتاج القمصان الرسمية والبزنس بأعلى معايير الدقة.',
      bodyAr: 'يضم المصنع 100 ماكينة متخصصة في دمج الياقات والأساور، فتح العراوي الأوتوماتيكي، وتركيب الأزرار بالليزر، بطاقة إنتاجية معتمدة تبلغ 45,000 قميص كلاسيكي شهريًا تصدر للأسواق الأوروبية والعربية.',
    });
    bAr.addContactPage();
    await bAr.saveToFile(path.join(OUT_DIR, 'SBA_Apparel_Manufacturing_Profile_AR.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 07 & 21: Natural Products & Food Trading Profile (EN & AR)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Natural Products & Food Trading Profile',
      subtitle: 'International Agricultural Sourcing, Processing & Food Commodity Export',
      sector: 'Natural Products & Food',
      docCode: 'SBA-FOOD-TRADE-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Food Trade Edition',
      highlights: [
        { en: 'Six Core Agricultural Export Divisions: Honey, Olives, Dates, Herbs, Beverages, Seeds' },
        { en: 'NFSA-Licensed Sorting, Processing, and Cold Logistics Hubs' },
        { en: 'Full Traceability from Egyptian Oasis Reserves to International Ports' },
        { en: 'Flexible Supply Models: Bulk Industrial Supply, Private Label & Custom Grading' },
        { en: 'Comprehensive Export Documentation: Phyto-Sanitary, Health, COA & Halal' },
      ],
    });

    b.addSection('1. Export Sourcing Network & Quality Traceability', null, 'Direct Farm Reserves Across Siwa Oasis, the Nile Delta, and Upper Egypt');
    b.addCard({
      titleEn: 'Agricultural Supply Infrastructure',
      badgeEn: 'NFSA-Registered Export Packing Facilities',
      leadEn: 'Integrated cold-chain logistics, optical sorting, and batch quality certification.',
      bodyEn: 'Sami Bin Ayyad Group operates dedicated sourcing networks across Egypt\'s most fertile micro-climates. Our facilities are licensed by the National Food Safety Authority (NFSA) and compliant with ISO 22000:2018, HACCP, and Codex Alimentarius guidelines.',
      bullets: [
        'Siwa Oasis Date Palm & Olive Reserves: Certified pristine desert terroir with zero industrial runoff',
        'Upper Egypt Aromatic & Botanical Cooperative: Sun-dried herbs, chamomile, hibiscus, and cumin',
        'Nile Delta Certified Apiary Network: Mono-floral clover, citrus, and wild Sidr reserves',
        'NFSA-licensed sorting and cold storage hubs equipped with optical sorters and vacuum sealers',
      ],
      highlightBorder: true,
    });

    b.addSection('2. Six Export Product Categories & Verified Parameters', null, 'Technical Grading, Packing Options, and Export Specifications');
    b.addTable({
      headers: ['Category', 'Featured Products', 'Available Grades', 'Packaging Options'],
      rows: [
        ['1. Natural Honey', 'Wild Sidr, Mountain Flower, Citrus Blossom', 'Grade A Royal, Raw Unfiltered', '250g-1kg Jars, 25kg-300kg Drums'],
        ['2. Olives & EVOO', 'Cold Extracted EVOO (Acidity < 0.6%), Tofahi Olives', 'Extra Virgin, Jumbo Table', '500ml-5L Tins/Bottles, 200L Barrels'],
        ['3. Dates & Paste', 'Jumbo Medjool, Siwi Oasis Dates, Date Paste', 'Jumbo, Super Jumbo, Pitted', '250g-5kg Retail Cartons, 10kg Bulk'],
        ['4. Herbs & Spices', 'Egyptian Hibiscus, Chamomile, Peppermint, Cumin', 'Whole Flower, Crushed, Powder', '25kg Polypropylene Bags, Vacuum Packs'],
        ['5. Natural Beverages', 'Instant Spray-Dried Hibiscus & Tamarind Powders', '100% Water Soluble Extract', '1kg Food Bags, 25kg Sealed Drums'],
        ['6. Seeds & Commodities', 'Egyptian Golden & White Sesame, Black Seed', 'Purity > 99.5%, Machine Cleaned', '25kg & 50kg Multi-Ply Export Sacks'],
      ],
      colWidths: [100, 160, 115, 130],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Natural_Products_Profile_EN.pdf'));

    // Arabic Edition
    const bAr = new CorporateDocBuilder({
      title: 'دليل قطاع المنتجات الطبيعية والتوريد الغذائي',
      titleAr: 'دليل قطاع المنتجات الطبيعية والتوريد الغذائي',
      subtitle: 'الدليل التجاري والتصديري الشامل للمحاصيل والمنتجات الغذائية الطبيعية',
      subtitleAr: 'الدليل التجاري والتصديري الشامل للمحاصيل والمنتجات الغذائية الطبيعية',
      sector: 'المنتجات الطبيعية والغذائية',
      sectorAr: 'المنتجات الطبيعية والغذائية',
      docCode: 'SBA-FOOD-TRADE-2026-AR',
      language: 'AR',
    });
    bAr.addCoverPage({
      edition: 'الإصدار التصديري الغذائي المعتمد 2026',
      highlights: [
        { ar: 'ست فئات تصديرية زراعية رئيسية: العسل، الزيتون، التمور، الأعشاب، المشروبات، والسمسم' },
        { ar: 'محطات فرز وتعبئة ومخازن مبردة مرخصة من الهيئة القومية لسلامة الغذاء NFSA' },
        { ar: 'تتبع كامل لجودة المحاصيل من مزارع سيوة والصعيد والدلتا حتى موانئ التصدير' },
        { ar: 'خيارات توريد مرنة: التوريد السائب للمصانع، والتعبئة بعلامة تجارية خاصة Private Label' },
        { ar: 'شهادات صحية ورقابية دولية: تحليل مخبري شامل COA، شهادات حلال، وشهادات المنشأ' },
      ],
    });
    bAr.addSection('١. المحاصيل والفئات التصديرية الست', null, 'مواصفات قياسية وتعبئة مطابقة للاشتراطات الدولية');
    bAr.addCard({
      titleAr: 'التمور الفاخرة وزيت الزيتون البكر الممتاز',
      badgeAr: 'واحة سيوة وبساتين البحر المتوسط',
      leadAr: 'تمور المجدول الجامبو وتمور سيوة وزيت الزيتون البكر الممتاز المعصور على البارد.',
      bodyAr: 'منتجات طبيعية 100% معصورة ومفرزة بأحدث التقنيات مع نسب حموضة منخفضة ومطابقة تامة للمواصفات التصديرية للأسواق الأوروبية والخليجية.',
    });
    bAr.addContactPage();
    await bAr.saveToFile(path.join(OUT_DIR, 'SBA_Natural_Products_Profile_AR.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 08: Apparel Product Catalogue (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Apparel Product Catalogue — 11 Collections',
      subtitle: 'Official Model Library & Manufacturing Specification Index',
      sector: 'Apparel Manufacturing',
      docCode: 'SBA-APPAREL-CAT-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Buyer Catalogue Edition',
      highlights: [
        { en: '11 Product Categories: Formal, Casual, Women, Men, Kids, Sportswear, Loungewear' },
        { en: '+2,700 Developed Industrial Styles in Manufacturing Archive' },
        { en: 'Dedicated Classic Shirt Collection with 45,000 Certified Shirts/Month' },
        { en: 'Detailed Fabric Compositions, GSM Ranges, and Sizing Tables' },
      ],
    });

    b.addSection('Catalogue Index: 11 Verified Categories', null, 'Production Specifications, Fabric Types, and Minimum Order Quantities');

    const collections = [
      { name: '01. Women\'s Wear', fabrics: 'Rayon, Linen, Viscose, Modal, Poly-blend', gsm: '140–220 GSM', sizes: 'XS to 3XL', moq: '500 pcs/color' },
      { name: '02. Men\'s Wear', fabrics: 'Combed Cotton, Oxford Woven, Twill, Chino', gsm: '160–280 GSM', sizes: 'S to 4XL', moq: '500 pcs/color' },
      { name: '03. Kids & Baby Wear', fabrics: '100% Organic Combed Cotton, Interlock', gsm: '160–200 GSM', sizes: '0–24M, 2–14Y', moq: '600 pcs/style' },
      { name: '04. Casual Wear', fabrics: 'French Terry (Fleece), Cotton Jersey', gsm: '240–380 GSM', sizes: 'S to 3XL', moq: '500 pcs/color' },
      { name: '05. Homewear & Loungewear', fabrics: 'Single Jersey, Cotton Spandex, Satin', gsm: '140–180 GSM', sizes: 'XS to 3XL', moq: '500 pcs/color' },
      { name: '06. Classic Shirts', fabrics: 'Fine Poplin, High-Thread Count Twill', gsm: '110–145 GSM', sizes: '14.5"–18.5" Neck', moq: '500 pcs/style' },
      { name: '07. Sportswear & Activewear', fabrics: 'Polyester Dry-Fit, Elastane Spandex', gsm: '150–220 GSM', sizes: 'XS to XXL', moq: '500 pcs/color' },
      { name: '08. Underwear & Intimates', fabrics: '100% Egyptian Combed Cotton, Rib Knit', gsm: '140–170 GSM', sizes: 'S to 3XL', moq: '1,000 pcs/pack' },
      { name: '09. Evening & Occasion Wear', fabrics: 'Satin, Crepe, Chiffon, Lurex Woven', gsm: '120–260 GSM', sizes: 'XS to XXL', moq: '300 pcs/style' },
      { name: '10. Abayas & Modest Wear', fabrics: 'Nida, Crepe, Linen, Soft Georgette', gsm: '140–210 GSM', sizes: '50 to 62 Length', moq: '300 pcs/color' },
      { name: '11. Fabrics & Textile Sourcing', fabrics: 'Single Jersey, Pique, French Terry, Rib', gsm: 'Custom Made', sizes: 'Rolls / Weight', moq: '1,000 kg/fabric' },
    ];

    b.addTable({
      headers: ['Collection Name', 'Primary Fabric Types', 'GSM Range', 'Size Curve', 'Standard MOQ'],
      rows: collections.map(c => [c.name, c.fabrics, c.gsm, c.sizes, c.moq]),
      colWidths: [110, 140, 85, 95, 75],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Apparel_Product_Catalogue_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 09: Natural Products Catalogue (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Natural Products & Agri-Food Export Catalogue',
      subtitle: 'Technical Dossiers for Egyptian Agricultural Commodities & Processed Foods',
      sector: 'Natural Products & Food',
      docCode: 'SBA-FOOD-CAT-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Importer Specification Dossier',
      highlights: [
        { en: 'Detailed Technical Specifications for 8 Flagship Food Products' },
        { en: 'Physical, Chemical, and Microbiological Quality Parameters' },
        { en: 'Export Packaging, Net Weights, Shelf Life, and Storage Conditions' },
        { en: 'ISO 22000, HACCP, and NFSA Export Health Certification Included' },
      ],
    });

    b.addSection('Featured Product Dossiers', null, 'Certified Specifications for International Food Importers');

    const foodProducts = [
      {
        name: 'Pure Wild Sidr Honey',
        origin: 'Egypt / Wild Ziziphus spina-christi',
        specs: 'Moisture ≤ 18%, HMF < 20 mg/kg, Diastase ≥ 10 Schade units',
        pack: '250g/500g/1kg Jars, 25kg/300kg Drums',
        shelf: '24–36 Months',
        moq: '1 Pallet (600kg)',
      },
      {
        name: 'Cold-Pressed EVOO',
        origin: 'Egypt / Mediterranean Coastal Groves',
        specs: 'Acidity ≤ 0.6%, Peroxide < 12 meq O₂/kg, Cold-extracted < 27°C',
        pack: '500ml/1L Glass, 5L Tins, 200L Steel Barrels',
        shelf: '24 Months',
        moq: '2 Metric Tonnes',
      },
      {
        name: 'Egyptian Tofahi Jumbo Olives',
        origin: 'Egypt / Mediterranean Olive Groves',
        specs: 'Size 80–120 fruits/kg, Crisp texture, Natural brine cure',
        pack: '10kg / 15kg / 200L HDPE Drums',
        shelf: '18 Months',
        moq: '1 FCL (18 MT)',
      },
      {
        name: 'Jumbo Medjool Dates',
        origin: 'Egypt / Oasis Micro-climate',
        specs: 'Moisture 18–22%, Skin separation < 5%, Jumbo (21–25g/fruit)',
        pack: '250g/500g/1kg/5kg Master Export Cartons',
        shelf: '12 Months (Cold)',
        moq: '1 Pallet (1 MT)',
      },
      {
        name: 'Dried Hibiscus Calyces',
        origin: 'Upper Egypt / Aswan Organic Soils',
        specs: 'Deep ruby whole flowers, Moisture < 12%, Non-GMO, Cleaned',
        pack: '20kg–25kg PP bags, Pressed Bales',
        shelf: '24 Months',
        moq: '3 Metric Tonnes',
      },
      {
        name: 'Instant Spray-Dried Hibiscus Powder',
        origin: 'Formulated Extract Facility / Egypt',
        specs: '100% Water soluble, Moisture < 5%, Zero synthetic additives',
        pack: '1kg multi-layer vacuum pouches, 25kg fiber drums',
        shelf: '24 Months',
        moq: '500 kg',
      },
      {
        name: 'Sun-Dried Cumin Seeds',
        origin: 'Upper Egypt / Certified Farming Guilds',
        specs: 'Purity ≥ 99.0%, Volatile Oil ≥ 2.5%, Moisture < 9%',
        pack: '25kg Polypropylene woven sacks',
        shelf: '24 Months',
        moq: '2 Metric Tonnes',
      },
      {
        name: 'Golden & White Sesame Seeds',
        origin: 'Egypt / Nile River Valley',
        specs: 'Purity ≥ 99.5%, Oil content ≥ 50%, Moisture < 6%',
        pack: '25kg / 50kg Export bags',
        shelf: '18 Months',
        moq: '1 FCL (18 MT)',
      },
    ];

    b.addTable({
      headers: ['Product Name', 'Origin & Botanical', 'Critical Specs', 'Packaging', 'MOQ'],
      rows: foodProducts.map(p => [p.name, p.origin, p.specs, p.pack, p.moq]),
      colWidths: [110, 120, 140, 85, 50],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Natural_Products_Catalogue_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 10: Complete Products Portfolio (Consolidated) (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Complete Products Portfolio (Apparel & Food)',
      subtitle: 'Consolidated Commercial Export Catalogue Across Industrial & Natural Products',
      sector: 'Group Products Division',
      docCode: 'SBA-ALL-PRODUCTS-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: '2026 Consolidated Commercial Edition',
      highlights: [
        { en: 'Part 1: Apparel & Textile Manufacturing (11 Collections, +2,700 Styles)' },
        { en: 'Part 2: Natural Products & Agri-Food Commodities (8 Detailed Dossiers)' },
        { en: 'Dedicated Classic Shirt Facility (45,000 Certified Shirts/Month)' },
        { en: 'International Export Logistics & Private Label Packaging Solutions' },
      ],
    });

    b.addSection('Part 1: Apparel & Textile Collections', null, 'Vertical Manufacturing Power, Sizing, Fabrics, and Minimum Order Quantities');
    b.addCard({
      titleEn: 'Overview of Apparel Manufacturing Collections',
      badgeEn: '11 Product Lines',
      leadEn: 'From high-count classic shirting to infant wear and active performance apparel.',
      bodyEn: 'Full package OEM and ODM production backed by our +2,700 developed design archive. Supported by CAD grading, automated fabric spreaders, multi-needle embroidery, screen and DTG printing, and strict 8-stage quality control.',
    });

    b.addSection('Part 2: Natural & Agri-Food Products', null, 'Certified Sourcing, NFSA Export Standards, and Packaging Options');
    b.addCard({
      titleEn: 'Overview of Agricultural & Natural Food Commodities',
      badgeEn: 'NFSA-Certified Export Network',
      leadEn: 'Pure wild Sidr honey, extra virgin olive oil, table olives, Medjool dates, herbs, and instant botanical powders.',
      bodyEn: 'All products processed under ISO 22000:2018 and HACCP guidelines with complete laboratory certificates of analysis (COA), phytosanitary clearance, and customized branding packaging.',
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Complete_Products_Portfolio_EN.pdf'));
  }

  // -------------------------------------------------------------
  // Technical Data Sheets: ET-POT-01 & ET-POR-01
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Technical Data Sheet: ET-POT-01 Oil Terminator',
      subtitle: 'Concentrated Microbial Bioremediation Agent for Hydrocarbon Contamination',
      sector: 'Environmental Technologies',
      docCode: 'SBA-TDS-ET-POT-01-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Official Technical Data Sheet (TDS)',
      highlights: [
        { en: 'Product Code: ET-POT-01 (Oil Terminator Bioremediation Formulation)' },
        { en: 'Consortium of 8 Hydrocarbon-Degrading Bacterial Strains (Pseudomonas, Bacillus, Rhodococcus)' },
        { en: 'Bacterial Concentration: ≥ 5 × 10⁹ CFU/g (Colony Forming Units)' },
        { en: 'Degradation Efficiency: Up to 85% Total Petroleum Hydrocarbons (TPH) in 30 Days' },
        { en: 'Biological Safety Classification: Class 1 Non-Pathogenic & Non-Toxic' },
      ],
    });

    b.addSection('1. Product Identification & Properties', null, 'Physical, Chemical, and Biological Characteristics');
    b.addTable({
      headers: ['Technical Parameter', 'Specification Value', 'Testing Standard / Method', 'Operational Remarks'],
      rows: [
        ['Active Microorganisms', '8 Synergistic Bacterial Strains', 'DNA Sequencing & Lab Isolation', 'Non-pathogenic, non-GMO natural isolates'],
        ['Bacterial Count', '≥ 5 × 10⁹ CFU/g', 'Standard Plate Count (CFU)', 'High concentration for rapid colonization'],
        ['Physical Form', 'Dry granular powder / liquid concentrate', 'Visual & Sieve Analysis', 'Tan/beige powder with organic carrier'],
        ['Operating pH Range', '5.5 – 9.0 (Optimal: 6.8 – 7.5)', 'Calibrated pH Probe', 'Buffer required if soil pH < 5.0'],
        ['Temperature Range', '10°C to 45°C (Active up to 55°C)', 'Incubation Trials', 'Optimal metabolic rate at 25°C–35°C'],
        ['TPH Degradation Rate', 'Up to 85% reduction in 30 days', 'GC-FID / EPA Method 8015', 'Verified on crude oil and diesel spills'],
        ['Shelf Life', '24 Months from manufacturing date', 'Viability Retention Assay', 'Store sealed in dry ambient room (<30°C)'],
      ],
      colWidths: [120, 140, 130, 115],
    });

    b.addSection('2. Intended Applications & Dosing Guidelines', null, 'Target Environmental Remediations and Application Protocols');
    b.addCard({
      titleEn: 'Field Dosing & Application Instructions',
      badgeEn: 'Application Guidelines',
      leadEn: 'Engineered for soil land-farming, shoreline spills, drilling mud, and industrial tanks.',
      bodyEn: 'Soil Remediation: Apply 1 kg of ET-POT-01 per 10 m³ of contaminated soil. Blend thoroughly to ensure uniform contact. Maintain soil moisture between 35% and 50% through periodic watering. Aerate by turning soil every 7–10 days.\n\nTank Cleaning & Water Lagoons: Add 1 kg of concentrate per 5,000 L of oily wastewater under continuous agitation or aeration. Do not apply simultaneously with chemical bleach, chlorine, or biocides.',
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'ET-POT-01_Technical_Data_Sheet.pdf'));
  }

  {
    const b = new CorporateDocBuilder({
      title: 'Technical Data Sheet: ET-POR-01 Odor Neutralizer',
      subtitle: 'Fast-Acting Biochemical Solution for Industrial & Municipal Odor Abatement',
      sector: 'Environmental Technologies',
      docCode: 'SBA-TDS-ET-POR-01-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Official Technical Data Sheet (TDS)',
      highlights: [
        { en: 'Product Code: ET-POR-01 (Industrial Odor Neutralizer Formulation)' },
        { en: 'Target Compounds: H₂S (Hydrogen Sulfide), Methyl Mercaptan, Ammonia, Amines' },
        { en: 'Mode of Action: Catalytic oxidation and biochemical bond cleavage' },
        { en: 'Zero synthetic perfumes or masking agents — permanently eliminates odors' },
        { en: '100% Water-soluble, biodegradable, and non-corrosive to pumping equipment' },
      ],
    });

    b.addSection('1. Technical Properties & Specifications', null, 'Chemical Characteristics, Target Compounds, and Dilution Ratios');
    b.addTable({
      headers: ['Property', 'Specification', 'Test Method', 'Operational Feature'],
      rows: [
        ['Appearance', 'Clear to amber liquid', 'Visual Inspection', 'Uniform liquid concentrate'],
        ['Specific Gravity', '1.02 – 1.05 g/cm³ at 20°C', 'Hydrometer Method', 'Readily mixes with municipal water'],
        ['pH Concentrate', '6.5 – 7.5', 'Electrochemical Probe', 'Neutral, non-corrosive to piping'],
        ['Target Odorants', 'H₂S, Mercaptans, NH₃, VOCs', 'Olfactometry & Gas Sensors', 'True chemical neutralization'],
        ['Dilution Ratio', '1:50 to 1:500 with water', 'Volumetric Mixing', 'High economical coverage in misting'],
        ['Biodegradability', '> 95% in 28 days', 'OECD 301D Standard', 'Safe for discharge to sewage networks'],
        ['Shelf Life', '24 Months sealed at 5°C–35°C', 'Active Stability Assay', 'Protect from freezing and direct sunlight'],
      ],
      colWidths: [110, 135, 125, 135],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'ET-POR-01_Technical_Data_Sheet.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 11: Construction Project Portfolio (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Construction & Contracting Project Portfolio',
      subtitle: 'Structured Index of 57 Documented Engineering Projects Delivered Across Egypt',
      sector: 'Construction & Real Estate',
      docCode: 'SBA-CONST-PORTFOLIO-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Official Track Record & Delivery Portfolio',
      highlights: [
        { en: 'Complete Registry of 57 Delivered Contracting Projects' },
        { en: '540+ Million EGP Total Registered Delivery Volume' },
        { en: 'Project Categories: Commercial, Residential, Healthcare, Industrial, Oil & Gas' },
        { en: 'Full Compliance with Egyptian Building Codes and Safety Regulations' },
      ],
    });

    b.addSection('Selected Major Project Track Record', null, 'Institutional Clients, Execution Scopes, and Delivery Locations');

    const sampleProjects = [
      ['01', 'Commercial Banking Center & Office Tower', 'Commercial', 'New Cairo, Egypt', 'Turnkey Civil, MEP & Interior Fit-Out', 'Completed'],
      ['02', 'Specialized Medical Center & Surgical Wing', 'Healthcare', 'Giza, Egypt', 'Medical Gas, Clean Rooms, HVAC & Civil', 'Completed'],
      ['03', 'Industrial Manufacturing & Warehousing Hub', 'Industrial', '10th of Ramadan City', 'Pre-Engineered Steel, Concrete Slabs', 'Completed'],
      ['04', 'Residential Luxury Compound & Villas', 'Residential', 'Sheikh Zayed, Egypt', 'Full Structural Skeletons & Finishes', 'Completed'],
      ['05', 'Oil & Gas Civil Foundation Infrastructure', 'Oil & Gas', 'Suez Canal Corridor', 'Heavy Reinforced Foundations & Containment', 'Completed'],
      ['06', 'Corporate Administrative Headquarters', 'Administrative', 'Nasr City, Cairo', 'Curtain Wall Facade, MEP & Finishes', 'Completed'],
      ['07', 'Educational Campus & Science Facilities', 'Education', 'Alexandria, Egypt', 'Structural Framing, MEP & Site Works', 'Completed'],
      ['08', 'Regional Logistics Distribution Center', 'Logistics', '6th of October City', 'Heavy Flooring, Loading Docks, MEP', 'Completed'],
    ];

    b.addTable({
      headers: ['Ref', 'Project Name', 'Sector Type', 'Location', 'Execution Scope', 'Status'],
      rows: sampleProjects,
      colWidths: [35, 140, 75, 95, 110, 50],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Construction_Project_Portfolio_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 12: Selected Project Case Studies (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Selected Multi-Sector Project Case Studies',
      subtitle: 'Technical Challenges, Engineered Solutions & Verified Commercial Outcomes',
      sector: 'Corporate Delivery Track Record',
      docCode: 'SBA-CASE-STUDIES-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Case Studies Dossier',
      highlights: [
        { en: 'Case 01: Fast-Track Commercial Complex (Construction & MEP Integration)' },
        { en: 'Case 02: Industrial Waste-to-Energy Dry Fermentation (Environmental Alliance)' },
        { en: 'Case 03: High-Volume FOB Classic Shirt Export Program (Apparel Division)' },
        { en: 'Case 04: International Single-Origin Olive Oil Export Chain (Agri-Food Division)' },
      ],
    });

    b.addSection('Case Study 01: Fast-Track Commercial Complex', null, 'Execution Under Tight Urban Constraints with Zero Structural Non-Conformance');
    b.addCard({
      titleEn: 'Commercial Tower & Banking Hall (New Cairo)',
      badgeEn: 'Construction Division',
      leadEn: 'Client Requirement: Complete structural execution and MEP commissioning in 14 months.',
      bodyEn: 'Technical Challenge: Complex subterranean groundwater conditions and congested urban site logistics.\n\nEngineered Solution: In-house technical office implemented 3D BIM clash detection and deep dewatering systems, pouring over 12,000 m³ of high-strength concrete with synchronized day-night delivery rotations.\n\nOutcome: Delivered 18 days ahead of schedule, fully inspected and approved by statutory civil protection authorities.',
      highlightBorder: true,
    });

    b.addSection('Case Study 02: Industrial Agro Waste-to-Energy', null, 'RENERGON RSD Technology Deployment Converting Farm Manure into Power');
    b.addCard({
      titleEn: 'Biogas & Bio-Compost Facility Implementation',
      badgeEn: 'Environmental Division',
      leadEn: 'Client Requirement: Eliminate 80 tonnes/day of agro-livestock waste while offsetting plant power bills.',
      bodyEn: 'Engineered Solution: Deployed modular RSD dry anaerobic digestion digesters. The patented technology digest organic fractions at thermophilic temperatures with zero process wastewater.\n\nOutcome: Generates 1.2 MW clean electric power fed into factory grid while yielding 35 tonnes/day of pasteurized high-nitrogen bio-fertilizer.',
      highlightBorder: true,
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Selected_Project_Case_Studies_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 13: Complete Services & Solutions Portfolio (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Complete Services & Solutions Portfolio (39 Disciplines)',
      subtitle: 'Consolidated Directory of 39 Engineering, Environmental, and Apparel Services',
      sector: 'Corporate Services Division',
      docCode: 'SBA-SERVICES-39-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Official Services Directory · 39 Disciplines',
      highlights: [
        { en: '12 Construction & Engineering Contracting Disciplines' },
        { en: '19 Sustainable Environmental, Waste-to-Energy & Carbon Disciplines' },
        { en: '8 Industrial Apparel Manufacturing & Export Solutions' },
        { en: 'Turnkey Delivery Under a Single Accountable Corporate Entity' },
      ],
    });

    b.addSection('1. Construction & Contracting Services (12 Disciplines)', null, 'EPC, Civil, Structural, MEP, Infrastructure, and Healthcare Works');
    const constServices = [
      ['01. General Contracting', 'Turnkey building execution, facility upgrades, rehabilitation'],
      ['02. Civil & Structural Works', 'Deep reinforced concrete foundations, skeletons, earthworks'],
      ['03. Architectural Works', 'BIM coordinated 2D/3D shop drawings, curtain wall facades'],
      ['04. Electromechanical (MEP)', 'Electrical power, HVAC central air, fire suppression, elevators'],
      ['05. Infrastructure Development', 'Potable water pipelines, sewage lift networks, roadworks'],
      ['06. Industrial Construction', 'Pre-engineered steel warehouses, industrial factories, cranes'],
      ['07. Healthcare & Medical Fit-Out', 'Medical gas piping, surgical theaters, radiation shielding'],
      ['08. Oil & Gas Civil Works', 'Heavy machine foundations, pipeline containment, blast walls'],
      ['09. Commercial Buildings', 'Corporate administrative towers, shopping malls, retail plazas'],
      ['10. Residential Development', 'Multi-family residential buildings, private residential compounds'],
      ['11. Finishing & Luxury Fit-Out', 'Turnkey interior finishing, marble, wood craft, acoustic ceilings'],
      ['12. Project Management', 'Time schedule management, budget engineering, site supervision'],
    ];
    b.addTable({
      headers: ['Service Title', 'Core Scope & Deliverable'],
      rows: constServices,
      colWidths: [170, 335],
    });

    b.addSection('2. Environmental & Sustainability Services (19 Disciplines)', null, 'Consultancy, Waste-to-Energy, Carbon Accounting, and Clean Technology');
    const envServices = [
      ['01. Environmental Impact Assessment (EIA)', 'Full baseline surveys, dispersion modeling & statutory permits'],
      ['02. Environmental & Social Assessment (ESIA)', 'IFC/EBRD international due diligence & community consultation'],
      ['03. Carbon Footprint Assessment', 'GHG Protocol Scopes 1, 2, 3 accounting & product lifecycle LCA'],
      ['04. Carbon Emissions Reporting (CBAM)', 'EU carbon border tax disclosure & decarbonization roadmaps'],
      ['05. Environmental Monitoring & Sensing', 'Calibrated stack emissions, noise, air & water testing'],
      ['06. Comprehensive Waste Management', 'Zero-waste-to-landfill strategies & circular economy plans'],
      ['07. Hazardous Waste Management', 'Industrial sludge handling, safe transport & licensed disposal'],
      ['08. Solid Waste Recycling & Recovery', 'Mechanical sorting, material reclamation & RDF production'],
      ['09. Waste-to-Energy Solutions (WtE)', 'Turnkey municipal & industrial organic waste to energy plants'],
      ['10. Biogas Plants (RENERGON RSD)', 'Patented dry anaerobic digestion turning manure to clean power'],
      ['11. Renewable Energy Solutions', 'Industrial solar PV rooftops and decentralized clean energy'],
      ['12. Environmental Economic Studies', 'Cost-benefit analysis, green bond and climate finance advisory'],
      ['13. Sustainability & ESG Consulting', 'GRI, SASB, ISSB sustainability governance and disclosures'],
      ['14. SDGs Consulting & Alignment', 'Alignment with UN Sustainable Development Goals & Egypt 2030'],
      ['15. ISO Environmental Systems', 'Turnkey qualification for ISO 14001, ISO 50001, and ISO 45001'],
      ['16. Integrated QHSE Solutions', 'Industrial safety audits, hazard risk matrices, and compliance'],
      ['17. EHS Digital Platforms & Software', 'Cloud environmental compliance tracking and emissions logs'],
      ['18. Environmental Biotechnology', 'Microbial bioremediation for oil spills (ET-POT-01 & ET-POR-01)'],
      ['19. Research & Development (R&D)', 'Applied scientific research solving industrial environmental issues'],
    ];
    b.addTable({
      headers: ['Service Title', 'Core Scope & Deliverable'],
      rows: envServices,
      colWidths: [170, 335],
    });

    b.addSection('3. Apparel Manufacturing Services (8 Disciplines)', null, 'Contract Manufacturing, Style Development, and FOB Export Programs');
    const appServices = [
      ['01. Ready-Made Garment Manufacturing', 'High-volume cutting, sewing & automated assembly across 11 lines'],
      ['02. Private Label Manufacturing', 'Custom branded collections with client labels, tags, and packaging'],
      ['03. FOB Manufacturing Programs', 'Turnkey full package from fabric sourcing to container port delivery'],
      ['04. Textile Mill & Internal Dyeing', 'Quality controlled dyeing, lab dip matching & fabric procurement'],
      ['05. Product Development & Sampling', 'Rapid pattern drafting, tech pack preparation & prototype samples'],
      ['06. Dedicated Classic Shirt Production', 'Specialized factory producing 45,000 certified dress shirts/month'],
      ['07. Modern Embroidery & Printing', 'Multi-head computer embroidery, screen printing, DTG & heat seal'],
      ['08. Apparel Export & Logistics', 'Full customs clearance, certificates of origin & sea freight'],
    ];
    b.addTable({
      headers: ['Service Title', 'Core Scope & Deliverable'],
      rows: appServices,
      colWidths: [170, 335],
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Services_And_Solutions_Portfolio_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 14: Corporate Business & Partnership Overview (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Corporate Business & Partnership Overview',
      subtitle: 'Strategic Investment, Multi-Sector Synergies & International Partnership Prospectus',
      sector: 'Investor Relations & Partnerships',
      docCode: 'SBA-INVESTOR-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Strategic Business & Investor Brief',
      highlights: [
        { en: 'Multi-Sector Integration Driving Operational Resilience and Sustainable Growth' },
        { en: 'Scalable Export Platforms with Established MENA, GCC, and European Trade' },
        { en: 'Commercial Joint Ventures, Technology Representation, and Distribution Models' },
        { en: 'Zero Fabricated Projections — Strictly Documented Assets, Scale, and Capacities' },
      ],
    });

    b.addSection('Investment & Commercial Cooperation Areas', null, 'Institutional Opportunities Across Core Economic Sectors');
    b.addCard({
      titleEn: '1. Industrial Waste-to-Energy Expansion (RENERGON Alliances)',
      badgeEn: 'Clean Energy Transition',
      leadEn: 'Co-development of commercial biogas and bio-compost plants across Egypt and Africa.',
      bodyEn: 'Leveraging Swiss RSD technology to capture growing organic waste streams and monetize clean electricity, green certificates, and biochar.',
    });

    b.addCard({
      titleEn: '2. Apparel Export Manufacturing Scaling',
      badgeEn: 'High-Volume Production',
      leadEn: 'Expanding dedicated production lines for international fashion brands and European retail chains.',
      bodyEn: 'Competitive labor and energy advantage in Egypt combined with duty-free trade agreements into the EU, US, and Arab markets.',
    });

    b.addCard({
      titleEn: '3. Agricultural Processing & Export Consolidation',
      badgeEn: 'Food Security & High-Value Exports',
      leadEn: 'Modern cold-chain sorting and packing facilities for Medjool dates, extra virgin olive oil, and medicinal herbs.',
      bodyEn: 'Direct farm aggregation guaranteeing purity, NFSA compliance, and higher export margins.',
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Business_And_Partnership_Overview_EN.pdf'));
  }

  // -------------------------------------------------------------
  // PDF 15: Supplier & Procurement Introduction (EN)
  // -------------------------------------------------------------
  {
    const b = new CorporateDocBuilder({
      title: 'Supplier & Procurement Introduction',
      subtitle: 'Vendor Qualification Guidelines, Sourcing Categories & Compliance Standards',
      sector: 'Procurement & Supply Chain',
      docCode: 'SBA-SUPPLIER-2026',
      language: 'EN',
    });

    b.addCoverPage({
      edition: 'Official Procurement Guide',
      highlights: [
        { en: 'Procurement Requirements Across Civil Materials, Textiles, and Eco-Reagents' },
        { en: 'Transparent 4-Stage Supplier Qualification and Performance Auditing' },
        { en: 'Commitment to Quality, Environmental Compliance, and Fair Payment Terms' },
        { en: 'Direct Vendor Application Route via Official SBA Portal (/join?tab=supplier)' },
      ],
    });

    b.addSection('Major Purchasing & Supply Categories', null, 'Material Specifications and Sourcing Scopes for Prospective Vendors');
    b.addTable({
      headers: ['Sector Division', 'Primary Material / Equipment Requirements', 'Quality Expectation'],
      rows: [
        ['Construction', 'Ready-mix concrete, rebar steel, cement, MEP cables, HVAC chillers, tiles', 'Certified lab test reports, Egyptian Code compliance'],
        ['Apparel', 'Cotton yarns, woven shirting fabrics, lycra knits, sewing threads, polybags', 'Oeko-Tex Standard 100, color fastness grade 4+'],
        ['Environmental', 'Piping, pumps, gas blowers, geomembrane liners, lab analytical reagents', 'CE certified, industrial duty ratings, chemical resistance'],
        ['Food Trading', 'Bulk honey, raw table olives, fresh Medjool dates, packaging cartons, jars', 'NFSA food contact certified, pesticide residue free'],
      ],
      colWidths: [100, 240, 165],
    });

    b.addCard({
      titleEn: 'Supplier Qualification Process',
      badgeEn: 'Vendor Enrollment',
      leadEn: 'Four simple steps to register as an accredited supplier to Sami Bin Ayyad Group.',
      bodyEn: '1. Online Registration via /join (submit company profile & commercial registry) · 2. Technical Evaluation & Sample Audit by our QA engineering team · 3. Factory / Facility Visit where required · 4. Vendor Code Issuance & Invitation to Tender.',
      highlightBorder: true,
    });

    b.addContactPage();
    await b.saveToFile(path.join(OUT_DIR, 'SBA_Supplier_And_Procurement_Profile_EN.pdf'));
  }

  console.log('\n================================================================');
  console.log('✓ Successfully generated all 21 corporate PDF documents in public/downloads/');
  console.log('================================================================\n');
}

generateAll().catch(err => {
  console.error('Fatal error during PDF generation:', err);
  process.exit(1);
});
