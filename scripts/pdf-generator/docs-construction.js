import {
  sectionHeader,
  glassCard,
  kpiGrid,
  glassTable,
  policyBanner,
  contactConsultationCard,
} from './doc-helpers.js';

export function buildConstructionDocs() {
  const docs = [];

  // =========================================================================
  // 1A & 1B: Construction Capabilities Profile (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Construction_Capabilities_EN.pdf',
    language: 'EN',
    docCode: 'SBA-CONST-CAP-2026-EN',
    sectorLabel: 'Contracting & Real Estate Development',
    title: 'Construction & Real Estate Capabilities Profile',
    subtitle:
      'Integrated Contracting, Reinforced Structural Works, Electromechanical Systems (MEP), Healthcare Installations & Asset Advisory',
    edition: '2026 Engineering & Contracting Edition',
    heroImage: '/BG/Contracting & Real Estate Development/Contracting & Real Estate Development Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'Division Overview & Verified Track Record',
          'Your Partner in Construction, Execution & Development',
          'Aligned with our documented 2013–2024 project archive and real estate advisory platform.'
        )}
        ${kpiGrid([
          { value: '57+', label: 'Documented Projects', sub: '2013–2024 Execution Record' },
          { value: '+540M', label: 'Registered Volume (EGP)', sub: 'Contracting Archive Value' },
          { value: '12', label: 'Engineering Disciplines', sub: 'Civil, MEP & Specialized' },
          { value: '400+', label: 'Advisory Developments', sub: 'Real Estate Portfolio (Since 2018)' },
        ])}
        ${glassCard({
          title: 'Core Contracting & Development Mandate',
          badge: 'Egyptian Code & ISO 9001 Compliant',
          lead: 'Coordinating civil, architectural, electromechanical (MEP), and specialized installations under clear technical governance.',
          paragraphs: [
            'SAMI BIN AYYAD GROUP Contracting & Real Estate Development executes commercial, healthcare, residential, industrial, and oil & gas civil infrastructure projects across Egypt and regional corridors. Our approach starts with clear client requirements, scope coordination, and adherence to approved engineering specifications.',
            'Corporate Attribution Notice: The 2013–2024 documented project record (57+ projects, +EGP 540M turnover) and the real estate advisory portfolio (400+ developments, 200+ developer partnerships, 5B EGP since 2018) represent verified foundational executive and sector track records consolidated within the unified Group (est. 2023).'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          '12 Specialized Engineering & Contracting Disciplines',
          'Multi-Disciplinary Civil, MEP, Medical & Oil/Gas Capabilities',
          'Full scope from deep geotechnical works to high-specification healthcare and luxury finishing.'
        )}
        ${glassCard({
          title: 'Structural, Architectural & MEP Core Scopes',
          badge: 'Turnkey EPC Contracting',
          bullets: [
            'General Contracting & Structural Works: Turnkey concrete skeletons, deep foundations, earthworks, retaining walls & subterranean water tanks.',
            'Electromechanical Systems (MEP): Medium/low-voltage power substations, central chiller HVAC, clean-agent & sprinkler fire suppression, elevators & BMS.',
            'Healthcare & Medical Fit-Out: Surgical operating theatres, ICU zones, medical gas networks, radiation shielding & ambulance facility modernizations.',
            'Oil & Gas Civil Infrastructure: CNG/Fuel stations (GASTEC/T-Oil), gas pressure regulator chambers (NAC), heavy compressor pads & 100km pipeline protection slabs (GASCO).',
            'Architectural Facades & Luxury Fit-Out: BIM 2D/3D shop drawings, curtain wall glazing, GRC cladding, marble, acoustic ceilings & turnkey corporate interiors.'
          ],
        })}
        ${glassCard({
          title: 'Six-Stage Project Execution Methodology',
          badge: 'Accountable Governance',
          bullets: [
            '01. Project Assessment: Site survey, geotechnical review & operational scope mapping.',
            '02. Scope & Value Engineering: BIM clash detection, working shop drawings & BOQ alignment.',
            '03. Procurement & QA: Certified mill certificates, concrete slump tests & vendor approval.',
            '04. Coordinated Execution: Multi-trade site supervision under strict HSE protocols.',
            '05. Testing & Commissioning: Hydrostatic pressure tests, MEP balancing & civil defense signoff.',
            '06. Handover & Post-Care: As-built dossiers, maintenance manuals & official handover certificates.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Real Estate Advisory & Sectors Served',
          'Institutional Asset Management & Regional Development Coverage',
          'Connecting technical execution with commercial real estate viability.'
        )}
        ${glassTable(
          ['Sector Category', 'Representative Project Types', 'Key Institutional Clients / Counterparts'],
          [
            ['Healthcare & Medical', 'Medical towers, ambulance hubs, imaging & sterilization suites', 'Egyptian Ambulance Organization & Private Medical Sectors'],
            ['Oil, Gas & Utilities', 'CNG stations, pipeline protection corridors, regulator stations', 'GASCO, GASTEC, Petrobel, General Petroleum Company'],
            ['Residential Compounds', 'Standalone luxury villas, twin houses & gated developments', 'LAVISTA Developments, Armed Forces Engineering Authority'],
            ['Commercial & Admin', 'Banking headquarters, retail malls & educational buildings', 'SIAC Engineering & Corporate Institutional Investors']
          ],
          ['24%', '40%', '36%']
        )}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Construction_Capabilities_AR.pdf',
    language: 'AR',
    docCode: 'SBA-CONST-CAP-2026-AR',
    sectorLabel: 'المقاولات والتطوير العقاري',
    title: 'دليل قدرات قطاع المقاولات والتطوير العقاري',
    subtitle:
      'الدليل الهندسي الشامل للمقاولات العامة، الأعمال المدنية والخرسانية، الأنظمة الكهروميكانيكية MEP، التجهيزات الطبية والاستشارات العقارية',
    edition: 'الإصدار الهندسي المعتمد · 2026',
    heroImage: '/BG/Contracting & Real Estate Development/Contracting & Real Estate Development Home Page.jpg',
    pages: [
      `
        ${sectionHeader(
          'نظرة عامة وسجل الأداء الموثق',
          'شريكك في التنفيذ الهندسي والتطوير العقاري المتكامل',
          'متطابق مع سجل المشروعات الموثق للفترة 2013–2024 ومنصة الاستشارات العقارية.'
        )}
        ${kpiGrid([
          { value: '+57', label: 'مشروعًا موثقًا', sub: 'سجل التنفيذ 2013–2024' },
          { value: '+540M', label: 'حجم أعمال تاريخي (ج.م)', sub: 'قيمة عقود موثقة' },
          { value: '12', label: 'تخصصًا هندسيًا', sub: 'مدني، كهروميكانيك وتخصصي' },
          { value: '+400', label: 'مشروعًا عقاريًا', sub: 'محفظة الاستشارات (منذ 2018)' },
        ])}
        ${glassCard({
          title: 'نطاق عمل قطاع المقاولات والتطوير العقاري',
          badge: 'الكود المصري · ISO 9001',
          lead: 'تنسيق متكامل بين الأعمال المدنية والمعمارية والأنظمة الكهروميكانيكية والتجهيزات التخصصية.',
          paragraphs: [
            'تعمل شركة مجموعة سامي بن عياد للمقاولات والتطوير العقاري في تنفيذ المشروعات الطبية والسكنية والتجارية والإدارية والصناعية وأعمال البترول والغاز عبر مختلف محافظات مصر والأسواق الإقليمية، بالالتزام الصارم بالمواصفات الفنية وجداول التسليم.',
            'إفصاح النسبة المؤسسية: يعكس سجل الـ +57 مشروعًا (+540 مليون جنيه حجم أعمال للفترة 2013–2024) ومحفظة الاستشارات العقارية (أكثر من 400 مشروع و200 مطور منذ عام 2018) الخبرات التنفيذية والتأسيسية الموثقة التي تم توحيدها تحت مظلة المجموعة (المؤسسة عام 2023).'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          '12 تخصصًا هندسيًا وتنفيذيًا متكاملًا',
          'الأعمال الإنشائية، الكهروميكانيك MEP، المنشآت الطبية والبترولية',
          'تغطية هندسية تبدأ من الجسات والأعمال الترابية حتى التشطيبات الراقية وتسليم المفتاح.'
        )}
        ${glassCard({
          title: 'نطاقات التنفيذ والتخصصات الفنية الرئيسية',
          badge: 'تنفيذ متكامل EPC',
          bullets: [
            'المقاولات العامة والهياكل الخرسانية: إنشاء المباني المتكاملة، الأساسات العميقة، الخزانات الأرضية، والترميم الإنشائي.',
            'الأنظمة الكهروميكانيكية (MEP): شبكات الجهد المتوسط والمنخفض، التكييف المركزي، أنظمة إطفاء الحريق، المصاعد، وBMS.',
            'تجهيز المنشآت الطبية والمستشفيات: غرف العمليات، الأشعة والتعقيم، شبكات الغازات الطبية، وتطوير مرافق الإسعاف.',
            'الأعمال المدنية للبترول والغاز: محطات التموين والغاز الطبيعي (غاز تك / T-Oil)، غرف محولات الغاز، وحماية خطوط الأنابيب (جاسكو).',
            'الواجهات والتشطيبات الفاخرة: الرسومات التنفيذية BIM، الكلادينج والزجاج الإنشائي، الرخام، والعزل الصوتي والحراري.'
          ],
        })}
        ${glassCard({
          title: 'منهجية إدارة وتنفيذ المشروعات (6 مراحل قياسية)',
          badge: 'حوكمة الجودة',
          bullets: [
            '01. دراسة المشروع والرفع المساحي: تحليل التربة، المتطلبات التشغيلية، ودراسة الجدوى الأولية.',
            '02. الهندسة القيمية والتصميم التنفيذي: إعداد رسومات BIM ومنع التعارضات بين المدني والـ MEP.',
            '03. المشتريات واعتماد المواد: فحص شهادات الاختبار المعملية واختبارات الهبوط للخرسانة والمصادقات.',
            '04. التنفيذ الميداني المنسق: إشراف هندسي متواصل وفق اشتراطات السلامة والصحة المهنية HSE.',
            '05. الاختبارات والتشغيل التجريبي: اختبارات الضغط، اتزان التكييف، واعتماد الحماية المدنية.',
            '06. التسليم الابتدائي والنهائي: تسليم رسومات الواقع As-Built وكتيبات التشغيل والضمان.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'القطاعات المخدومة وجهات الإسناد',
          'شراكات موثقة مع هيئات حكومية وكبرى شركات البترول والتطوير العقاري',
          'توزيع المشروعات المنفذة حسب الفئات المنشورة في البوابة الرقمية للمجموعة.'
        )}
        ${glassTable(
          ['الفئة القطاعية', 'أبرز نماذج الأعمال المنفذة', 'نماذج من جهات الإسناد والشركاء'],
          [
            ['الرعاية الصحية والطبية', 'تطوير مرافق الإسعاف الرئيسية، غرف العمليات والأشعة والمصاعد الطبية', 'هيئة الإسعاف المصرية والقطاع الطبي الخاص'],
            ['البترول والغاز والمرافق', 'محطات التموين بالغاز، غرف محولات الغاز وبلاطات حماية الخطوط 100كم', 'جاسكو، غاز تك، بتروبل، والشركة العامة للبترول'],
            ['التطوير السكني والفيلات', 'إنشاء فيلات ستندالون وتوين هاوس والهياكل والواجهات المتكاملة', 'شركة لافيستا للتطوير العقاري والهيئة الهندسية'],
            ['التجاري والإداري', 'الأعمال الكهربائية والبنية التحتية للمولات والمراكز التجارية', 'شركة سياك الهندسية ومستثمرو القطاع الخاص']
          ],
          ['24%', '40%', '36%']
        )}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 2A & 2B: Construction Project Portfolio (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Construction_Project_Portfolio_EN.pdf',
    language: 'EN',
    docCode: 'SBA-CONST-PORTFOLIO-2026-EN',
    sectorLabel: 'Contracting · Verified Project Registry',
    title: 'Construction & Contracting Project Portfolio',
    subtitle:
      'Verified Execution Ledger of Infrastructure, Oil & Gas, Healthcare, Residential & Commercial Contracting Works (2013–2024)',
    edition: 'Official Track Record Dossier · 57+ Projects',
    heroImage: '/BG/Contracting & Real Estate Development/Commercial & Administrative Development.jpg',
    pages: [
      `
        ${sectionHeader(
          'Portfolio Summary & Contract Attribution',
          '57 Documented Contracting Milestones Across Egypt',
          'Official contracts extracted directly from the SBA Verification Portal and Company Archives.'
        )}
        ${kpiGrid([
          { value: '57', label: 'Archived Contracts', sub: 'PRJ-EGY-001 to 057' },
          { value: '+540M', label: 'Historical Volume (EGP)', sub: 'Verified Contract Values' },
          { value: '2013–24', label: 'Archive Span', sub: '11-Year Delivery Record' },
          { value: '100%', label: 'Handover Compliance', sub: 'Signed Completion Records' },
        ])}
        ${glassTable(
          ['Ref Code', 'Project Name & Scope', 'Client / Authority', 'Year & Location', 'Contract Value'],
          [
            ['PRJ-EGY-057', 'Patio Town Compound — Complete concrete skeletons, masonry & plastering for luxury villas & townhouses', 'LAVISTA Developments', '2024 · Fifth Settlement, New Cairo', '137,000,000 EGP'],
            ['PRJ-EGY-056', '17 Standalone Luxury Villas — Full construction from concrete skeleton to exterior facades', 'Armed Forces Eng. Authority', '2023 · Obour City, Qalyubia', '68,000,000 EGP'],
            ['PRJ-EGY-045', '60 Gas Pressure Regulator Substation Chambers (Civil Turnkey Works)', 'Administrative Capital Co.', '2018 · New Admin Capital', '30,000,000 EGP'],
            ['PRJ-EGY-048', 'GASTEC Integrated CNG & Fuel Station — Main station, admin bldg & 2 canopies', 'GASTEC', '2020 · Sharm El-Sheikh', '23,000,000 EGP'],
            ['PRJ-EGY-053', 'GASTEC Compressed Natural Gas Station (1,000 sq.m Turnkey Site)', 'GASTEC', '2021 · Damanhour, Beheira', '22,000,000 EGP']
          ],
          ['13%', '35%', '20%', '18%', '14%']
        )}
      `,
      `
        ${sectionHeader(
          'Infrastructure, Energy & Healthcare Contracts',
          'Oil & Gas Pipeline Protection, Electrical MEP & Medical Modernization',
          'Continuation of documented contracts synchronized with the online contracting projects catalogue.'
        )}
        ${glassTable(
          ['Ref Code', 'Project Name & Scope', 'Client / Authority', 'Year & Location', 'Contract Value'],
          [
            ['PRJ-EGY-049', 'Cairo–Ismailia Gas Pipeline Protection — 3m×1m reinforced protection slabs across 100 km', 'GASCO', '2020 · Cairo–Ismailia Road', '12,000,000 EGP'],
            ['PRJ-EGY-055', 'Twin House Residential Villas (Nos. 43 & 44) Structural Concrete Framing', 'Armed Forces Eng. Authority', '2023 · Obour City, Qalyubia', '12,000,000 EGP'],
            ['PRJ-EGY-054', 'STODA Artillery Mall — Supply, installation, testing & commissioning of electrical works', 'SIAC Engineering', '2023 · Cairo, Egypt', '6,000,000 EGP'],
            ['PRJ-EGY-046', 'T-Oil Fuel & Service Station — Admin building, 4 oil tanks maintenance & 20 chambers', 'General Petroleum Co.', '2018 · Western Desert', '6,000,000 EGP'],
            ['PRJ-EGY-051', 'Correctional Center High-Security Court Perimeter Wall Construction', 'Ministry of Interior Projects', '2021 · 15th of May City', '5,000,000 EGP'],
            ['PRJ-EGY-052', 'Petrobel Headquarters Structural Restoration & Efficiency Upgrade', 'Petrobel (Belayim)', '2021 · Abu Rudeis, Sinai', '5,000,000 EGP'],
            ['PRJ-EGY-044', 'Cairo Main Ambulance Facility Renovation & MEP Upgrade', 'Egyptian Ambulance Org.', '2018 · Cairo, Egypt', '3,337,706 EGP'],
            ['PRJ-EGY-003', 'Egyptian Ambulance Units — Modernization Supplies & Facility Rehabilitation', 'Egyptian Ambulance Org.', '2014 · Nationwide Points', '3,109,500 EGP']
          ],
          ['13%', '35%', '20%', '18%', '14%']
        )}
      `,
      `
        ${sectionHeader(
          'Verification Portal & Real Estate Advisory',
          'Audit Traceability & Commercial Portfolio Governance',
          'Full compliance records available upon qualification request.'
        )}
        ${glassCard({
          title: 'Portfolio Attribution & Verification Standards',
          badge: 'Verification Portal Active',
          lead: 'Every project in our registry includes reference code, contract date, scope definition, and handover attribution.',
          paragraphs: [
            'Institutional clients and tender committees may request formal handover certificates and site verification dossiers through our online Verification Portal (/sectors/construction?tab=verify-portal) or via our Data Room.'
          ],
          bullets: [
            'Direct Group Execution & Foundational Archive (2013–2024): 57 documented infrastructure, healthcare, residential & oil/gas projects.',
            'Executive Real Estate Advisory Portfolio (Since 2018): 400+ residential & commercial developments co-marketed across 200+ Egyptian developers.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Construction_Project_Portfolio_AR.pdf',
    language: 'AR',
    docCode: 'SBA-CONST-PORTFOLIO-2026-AR',
    sectorLabel: 'المقاولات · سجل المشروعات الموثق',
    title: 'محفظة مشروعات قطاع المقاولات والإنشاءات',
    subtitle:
      'السجل الموثق لمشروعات البنية التحتية، البترول والغاز، الرعاية الصحية، المجمعات السكنية والتجارية (2013–2024)',
    edition: 'سجل الأعمال المعتمد · 57 مشروعًا موثقًا',
    heroImage: '/BG/Contracting & Real Estate Development/Commercial & Administrative Development.jpg',
    pages: [
      `
        ${sectionHeader(
          'ملخص محفظة الأعمال والعقود الموثقة',
          '57 عقدًا ومشروعًا موثقًا في مختلف محافظات مصر',
          'بيانات مستخرجة مباشرة من سجل المشروعات المعتمد على الموقع الرسمي.'
        )}
        ${kpiGrid([
          { value: '57', label: 'عقدًا ومشروعًا موثقًا', sub: 'PRJ-EGY-001 إلى 057' },
          { value: '+540M', label: 'حجم الأعمال المسجل (ج.م)', sub: 'قيم تعاقدية مثبتة' },
          { value: '2013–24', label: 'النطاق الزمني للأرشيف', sub: '11 عامًا من التنفيذ' },
          { value: '100%', label: 'الالتزام بالتسليم', sub: 'محاضر استلام معتمدة' },
        ])}
        ${glassTable(
          ['الكود المرجعي', 'اسم المشروع ونطاق التنفيذ', 'جهة الإسناد / العميل', 'السنة والموقع', 'القيمة التعاقدية'],
          [
            ['PRJ-EGY-057', 'مشروع باتيو تاون — تنفيذ كامل المنشأ الخرساني والمباني والبياض الداخلي والخارجي للفيلات والتاون هاوس', 'شركة لافيستا للتطوير العقاري', '2024 · التجمع الخامس، القاهرة الجديدة', '137,000,000 ج.م'],
            ['PRJ-EGY-056', 'إنشاء عدد 17 فيلا ستندالون بالكامل من العظم حتى المباني والتشطيب الخارجي والواجهات', 'الهيئة الهندسية للقوات المسلحة', '2023 · الحي التاسع، العبور', '68,000,000 ج.م'],
            ['PRJ-EGY-045', 'تنفيذ عدد 60 غرفة محولات الغاز (Regulator Rooms) بالأعمال المدنية المتكاملة', 'شركة العاصمة الإدارية', '2018 · العاصمة الإدارية الجديدة', '30,000,000 ج.م'],
            ['PRJ-EGY-048', 'إنشاء محطة غاز تك بالكامل مع مبنى إداري ومظلتين تموين غاز طبيعي', 'شركة غاز تك (GASTEC)', '2020 · الرويسات، شرم الشيخ', '23,000,000 ج.م'],
            ['PRJ-EGY-053', 'إنشاء محطة تموين غاز تك متكاملة على مساحة 1,000 متر مربع', 'شركة غاز تك (GASTEC)', '2021 · دمنهور، البحيرة', '22,000,000 ج.م']
          ],
          ['13%', '35%', '20%', '18%', '14%']
        )}
      `,
      `
        ${sectionHeader(
          'مشروعات البنية التحتية والطاقة والرعاية الصحية',
          'حماية خطوط الغاز، البنية الكهربائية للمولات، وتطوير المنشآت الطبية',
          'استكمال سجل العقود الموثقة والمطابقة لقائمة مشروعات قطاع المقاولات.'
        )}
        ${glassTable(
          ['الكود المرجعي', 'اسم المشروع ونطاق التنفيذ', 'جهة الإسناد / العميل', 'السنة والموقع', 'القيمة التعاقدية'],
          [
            ['PRJ-EGY-049', 'إنشاء بلاطات حماية خرسانية 3م×1م على خط الغاز الرئيسي بطول 100 كم', 'شركة جاسكو (GASCO)', '2020 · طريق مصر الإسماعيلية', '12,000,000 ج.م'],
            ['PRJ-EGY-055', 'إنشاء فيلات توين هاوس أرقام 43 و44 ضمن مشروع 141 فدانًا', 'الهيئة الهندسية للقوات المسلحة', '2023 · مدينة العبور', '12,000,000 ج.م'],
            ['PRJ-EGY-054', 'مول المدفعية STODA — توريد وتركيب واختبار وضمان الأعمال الكهربائية', 'شركة سياك الهندسية (SIAC)', '2023 · القاهرة', '6,000,000 ج.م'],
            ['PRJ-EGY-046', 'محطة T-Oil — إنشاء المحطة والمبنى الإداري وصيانة 4 تانكات و20 غرفة تفتيش', 'الشركة العامة للبترول', '2018 · الصحراء الغربية (أبو سنان)', '6,000,000 ج.م'],
            ['PRJ-EGY-051', 'تنفيذ وإنشاء سور المحكمة الأمني بمركز الإصلاح والتأهيل', 'قطاع المشروعات - وزارة الداخلية', '2021 · مدينة 15 مايو، القاهرة', '5,000,000 ج.م'],
            ['PRJ-EGY-052', 'ترميم وصيانة ورفع كفاءة المبنى الرئيسي لشركة بترول بلاعيم', 'شركة بتروبل (Petrobel)', '2021 · أبو رديس، جنوب سيناء', '5,000,000 ج.م'],
            ['PRJ-EGY-044', 'أعمال رفع كفاءة وتطوير مرفق الإسعاف الرئيسي بالقاهرة', 'هيئة الإسعاف المصرية', '2018 · القاهرة', '3,337,706 ج.م'],
            ['PRJ-EGY-003', 'توريد مستلزمات تطوير ورفع كفاءة النقاط التابعة لهيئة الإسعاف', 'هيئة الإسعاف المصرية', '2014 · على مستوى الجمهورية', '3,109,500 ج.م']
          ],
          ['13%', '35%', '20%', '18%', '14%']
        )}
      `,
      `
        ${sectionHeader(
          'بوابة التحقق والاستشارات العقارية',
          'ضوابط التوثيق، التحقق التعاقدي، والاستشارات المجانية للمشروعات',
          'إتاحة الاطلاع على مستندات الإنجاز لجهات الإسناد المعتمدة.'
        )}
        ${glassCard({
          title: 'منظومة التوثيق والشفافية التعاقدية',
          badge: 'بوابة التحقق المفعلة',
          lead: 'كل مشروع في سجلنا يحمل كودًا مرجعيًا وتاريخ تعاقد ونطاق عمل محددًا وقيمة موثقة.',
          paragraphs: [
            'يمكن للعملاء المؤسسيين ولجان البت طلب الاطلاع على محاضر التسليم وشهادات الإنجاز عبر بوابة التحقق الرقمية على الموقع (/sectors/construction?tab=verify-portal) أو من خلال غرفة البيانات المؤسسية.'
          ],
          bullets: [
            'سجل التنفيذ الإنشائي الموثق (2013–2024): 57 مشروعًا موثقًا في المرافق، البترول، الإسكان، والرعاية الصحية.',
            'محفظة الاستشارات والتسويق العقاري (منذ 2018): أكثر من 400 مشروع عقاري بالتعاون مع +200 مطور في مصر.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 3A & 3B: Selected Multi-Sector Case Studies (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Selected_Project_Case_Studies_EN.pdf',
    language: 'EN',
    docCode: 'SBA-CASE-STUDIES-2026-EN',
    sectorLabel: 'Corporate Track Record · Case Studies',
    title: 'Selected Multi-Sector Project Case Studies',
    subtitle:
      'Verified Execution Scope, Engineering Challenges, Delivery Attribution & Measured Outcomes Across Our Four Business Sectors',
    edition: '2026 Verified Case Studies Dossier',
    heroImage: '/BG/Contracting & Real Estate Development/Integrated Solutions, Multiple Disciplines.jpg',
    pages: [
      `
        ${sectionHeader(
          'Case Studies 01 & 02 · Construction & Energy',
          'Medical Healthcare Tower & Patio Town Luxury Compound',
          'Verified execution dossiers anchored in our Central Project Portfolio.'
        )}
        ${glassCard({
          title: 'Case Study 01: Al-Safa Specialized Medical Tower (Kafr El-Sheikh)',
          badge: 'PRJ-CON-01 · Direct Group Mandate',
          lead: 'Turnkey 11-storey specialized healthcare complex delivered under medical building codes.',
          paragraphs: [
            'Scope & Challenge: Constructing 4,200 sq.m of clinical space requiring strict sterile zoning, radiation shielding, central medical gas piping, and zero-interruption power redundancy.',
            'Execution & Result: Completed general contracting, reinforced concrete frame, medical fit-out, full MEP networks, and a 500 kVA emergency backup plant cleanly handed over in June 2025.'
          ],
          bullets: [
            '4,200 sq.m built-up clinical area across 11 levels with medical elevators',
            'Central medical gas network engineered to ISO healthcare facility standards',
            'Synchronized MEP commissioning completed prior to statutory medical licensing'
          ],
          accent: true,
        })}
        ${glassCard({
          title: 'Case Study 02: Patio Town Compound & Obour Standalone Villas (New Cairo / Obour)',
          badge: 'PRJ-EGY-056 & 057 · 205M EGP Combined',
          lead: 'Large-scale residential concrete skeletons, masonry & exterior architectural finishes.',
          paragraphs: [
            'Counterparts: LAVISTA Developments (Patio Town — 137M EGP) & Armed Forces Engineering Authority (17 Standalone Villas — 68M EGP).',
            'Outcome: High-rate reinforced concrete pouring and synchronized structural finishing under tight developer quality audits.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'Case Studies 03 & 04 · Sustainability & Apparel',
          'Industrial Solar PV Advisory & European Garment Export Program',
          'Demonstrating partner-aligned clean energy engineering and AQL 1.5 apparel exports.'
        )}
        ${glassCard({
          title: 'Case Study 03: Industrial Rooftop Solar PV Engineering — 10th of Ramadan City',
          badge: 'PRJ-ENV-01 · Advisory + EPC Partner',
          badgeColor: 'orange',
          lead: '1.2 MW rooftop solar PV feasibility and engineering design reducing factory utility costs by 35%.',
          paragraphs: [
            'Technical Scope: Load profile analysis across an 8,500 sq.m textile & logistics rooftop, structural wind/weight verification, grid-tie interconnection study, and inverter selection.',
            'Verified Projection: 3.2-year typical capital payback with an annual carbon footprint offset of approximately 1,450 tonnes CO2 equivalent — supporting EU CBAM export readiness.'
          ],
        })}
        ${glassCard({
          title: 'Case Study 04: European Retail Apparel Export Program (Germany & Spain)',
          badge: 'PRJ-GAR-01 · Direct Manufacturing Mgmt',
          lead: '180,000 OEKO-TEX® compliant cotton garments manufactured and shipped FOB to Hamburg & Barcelona.',
          paragraphs: [
            'Scope & Outcome: Tech-pack pattern development, Egyptian combed cotton sourcing, multi-line CMT sewing across vetted partner plants, AQL 1.5 inline/final quality inspection, and full private-label retail packaging delivered strictly on seasonal retail dates.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Case Study 05 · Agri-Food Export & Advisory Contact',
          'Egyptian Siwi Dates Export Supply Program — Indonesia & UAE',
          'Traceable agricultural processing from Siwa Oasis farms to refrigerated export containers.'
        )}
        ${glassCard({
          title: 'Case Study 05: 420 Metric Tons Graded Siwi Dates Supply (Jakarta & Dubai)',
          badge: 'PRJ-FOD-01 · Direct Trade Coordination',
          lead: 'Farm aggregation, optical sorting, moisture control & phytosanitary clearance.',
          bullets: [
            'Dispatched 420 MT in refrigerated 40ft High-Cube reefer containers',
            'Standardized lab-verified moisture balance maintained strictly between 18% and 20%',
            'Full NFSA export health clearance, COA & zero prohibited pesticide residue certificates'
          ],
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Selected_Project_Case_Studies_AR.pdf',
    language: 'AR',
    docCode: 'SBA-CASE-STUDIES-2026-AR',
    sectorLabel: 'سجل الأعمال · دراسات حالة موثقة',
    title: 'دراسات حالة مختارة لمشروعات المجموعة',
    subtitle:
      'نماذج تطبيقية توثق نطاق التنفيذ الفعلي، التحديات الهندسية والتصديرية، والنتائج المتحققة عبر قطاعات المجموعة الأربعة',
    edition: 'ملف دراسات الحالة الموثقة · 2026',
    heroImage: '/BG/Contracting & Real Estate Development/Integrated Solutions, Multiple Disciplines.jpg',
    pages: [
      `
        ${sectionHeader(
          'دراسات الحالة 01 و02 · المقاولات والتطوير',
          'مجمع برج الصفا الطبي ومشروعات باتيو تاون وفيلات العبور',
          'نماذج موثقة من سجل المشروعات المركزي المعتمد على الموقع الرسمي.'
        )}
        ${glassCard({
          title: 'دراسة حالة 01: مجمع برج الصفا الطبي التخصصي (كفر الشيخ)',
          badge: 'PRJ-CON-01 · تنفيذ مباشر للمجموعة',
          lead: 'برج طبي متكامل بارتفاع 11 طابقًا وفق أكواد المنشآت الطبية العالمية.',
          paragraphs: [
            'النطاق والتحدي: إنشاء 4,200 م² من المساحات الطبية المتخصصة التي تتطلب مناطق تعقيم، عزلًا إشعاعيًا، شبكات غازات طبية مركزية، ومحطة طاقة احتياطية بدون انقطاع.',
            'التنفيذ والنتيجة: استكمال المقاولات العامة والهيكل الخرساني والتشطيب الطبي وشبكات MEP ومحطة طوارئ 500 ك.ف.أ مع التسليم الكامل في يونيو 2025.'
          ],
          bullets: [
            'مساحة بنائية 4,200 متر مربع موزعة على 11 طابقًا ومصاعد طبية',
            'شبكات غازات طبية مركزية مطابقة لمعايير المنشآت الصحية الدولية',
            'تشغيل وتجريب كافة الأنظمة الكهروميكانيكية قبل اعتماد التراخيص الطبية'
          ],
          accent: true,
        })}
        ${glassCard({
          title: 'دراسة حالة 02: كمبوند باتيو تاون (القاهرة الجديدة) و17 فيلا بالعبور',
          badge: 'PRJ-EGY-056 & 057 · 205 ملايين ج.م',
          lead: 'هياكل خرسانية مسلحة، أعمال مباني، وتشطيبات واجهات لجهات إسناد كبرى.',
          paragraphs: [
            'جهات الإسناد: شركة لافيستا للتطوير العقاري (باتيو تاون بقيمة 137 مليون جنيه) والهيئة الهندسية للقوات المسلحة (17 فيلا ستندالون بقيمة 68 مليون جنيه).',
            'النتيجة: معدلات صب خرساني مرتفعة ومطابقة تامة لاختبارات الجودة المعمارية والإنشائية.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'دراسات الحالة 03 و04 · الاستدامة والملابس',
          'محطة الطاقة الشمسية الصناعية بالعاشر وبرنامج التصدير الأوروبي للملابس',
          'تكامل الاستشارات الهندسية النظيفة وبرامج التصدير وفق معايير الجودة الصارمة.'
        )}
        ${glassCard({
          title: 'دراسة حالة 03: دراسة وهندسة محطة الطاقة الشمسية الصناعية C&I (العاشر من رمضان)',
          badge: 'PRJ-ENV-01 · استشارات + شريك EPC',
          badgeColor: 'orange',
          lead: 'تصميم هندسي ومالي لمحطة طاقة شمسية بقدرة 1.2 ميجاوات تخفض فاتورة الكهرباء بنسبة 35%.',
          paragraphs: [
            'النطاق الفني: دراسة أحمال مجمع صناعات نسيجية ولوجستية على مساحة أسطح 8,500 م²، الفحص الإنشائي للأحمال والرياح، ودراسة الربط الشبكي واختيار المحولات.',
            'الأثر المالي والبيئي: فترة استرداد مالي متوقعة 3.2 سنوات، وخفض سنوي في الانبعاثات يقدر بنحو 1,450 طن مكافئ ثاني أكسيد الكربون لدعم توافق المصنع مع ضريبة CBAM.'
          ],
        })}
        ${glassCard({
          title: 'دراسة حالة 04: برنامج التوريد التصديري لسلسلة التجزئة الأوروبية (ألمانيا وإسبانيا)',
          badge: 'PRJ-GAR-01 · إدارة تصنيع مباشر',
          lead: 'تصنيع وشحن 180,000 قطعة ملابس قطنية متوافقة مع OEKO-TEX® إلى هامبورغ وبرشلونة.',
          paragraphs: [
            'النطاق والنتيجة: تطوير الباترونات، توريد الأقطان المصرية الممشطة، التشغيل عبر شبكة المصانع المؤهلة، الفحص المرحلي والنهائي بمعيار AQL 1.5، والتعبئة بالعلامة الخاصة والتسليم بنظام FOB في المواعيد الموسمية المحددة.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'دراسة الحالة 05 · الصادرات الغذائية والتواصل',
          'برنامج تصدير التمور السيوي المصرية الفاخرة إلى إندونيسيا والإمارات',
          'تتبع كامل للمحصول من مزارع واحة سيوة حتى الحاويات المبردة بموانئ الوصول.'
        )}
        ${glassCard({
          title: 'دراسة حالة 05: فرز وتعبئة وشحن 420 طنًا متريًا من التمور السيوي (جاكرتا ودبي)',
          badge: 'PRJ-FOD-01 · تنسيق وتصدير مباشر',
          lead: 'استلام من المزارع، فرز ضوئي، ضبط نسبة الرطوبة، واستيفاء الفحص الحجري.',
          bullets: [
            'تصدير 420 طنًا متريًا في حاويات مبردة 40 قدمًا (Reefer Containers)',
            'تثبيت نسبة الرطوبة مخبريًا بدقة بين 18% و20% لضمان صلاحية الشحن البحري',
            'استصدار كامل شهادات التحليل COA وسلامة الغذاء والخلو من متبقيات المبيدات'
          ],
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  return docs;
}

