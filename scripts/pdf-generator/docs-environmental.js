import {
  sectionHeader,
  glassCard,
  kpiGrid,
  glassTable,
  policyBanner,
  contactConsultationCard,
} from './doc-helpers.js';

export function buildEnvironmentalDocs() {
  const docs = [];

  // =========================================================================
  // 1A & 1B: Environmental Solutions & Sustainability Profile (EN & AR) — 3 pages each
  // =========================================================================
  docs.push({
    fileName: 'SBA_Environmental_Solutions_EN.pdf',
    language: 'EN',
    docCode: 'SBA-ENV-SOL-2026-EN',
    sectorLabel: 'ENVIROTAQA · Environment & Sustainability',
    title: 'Environmental Solutions & Sustainability Profile',
    subtitle:
      'Scientific R&D, Environmental Compliance (EIA/ESIA), Carbon & CBAM Readiness, Waste-to-Energy & Regional Clean-Tech Opportunities',
    edition: '2026 Environmental & Sustainability Edition',
    heroImage: '/BG/Environment & Sustainability/Sustainable Environmental Home Page.avif',
    pages: [
      `
        ${sectionHeader(
          'Division Overview & Delivery Transparency',
          'Turning Operational Challenges into Sustainable Opportunities',
          'Synchronized with ENVIROTAQA Sector Directory and Global Sustainability Opportunities Portal.'
        )}
        ${kpiGrid([
          { value: '19', label: 'Environmental Disciplines', sub: 'Across 6 Core Categories' },
          { value: '13', label: 'Target Markets', sub: '5 Tier-1 + 8 Tier-2' },
          { value: '10', label: 'Active Tenders & Projects', sub: 'PPP, BOT & C&I Solar' },
          { value: '100%', label: 'Delivery Transparency', sub: 'Disclosed Execution Model' },
        ])}
        ${glassCard({
          title: 'Strategic Alliance: RENERGON International AG (Switzerland)',
          badge: 'Patented RSD Dry Fermentation',
          badgeColor: 'orange',
          lead: 'Converting unsegregated organic waste streams into clean power, biogas, biochar & bio-fertilizer.',
          paragraphs: [
            'Operating in formal technological partnership with RENERGON International AG (Switzerland), ENVIROTAQA (SAMI BIN AYYAD GROUP) deploys modular RSD (RENERGON Simultaneous Digestion) dry anaerobic fermentation technology across municipal, agricultural, and industrial organic waste.',
            'Delivery Model Transparency: Environmental Impact Assessments (EIA/ESIA), Law 202/2020 compliance, GHG Scopes 1–3 audits, and EU CBAM readiness are executed directly in-house, while utility-scale Waste-to-Energy, ZLD water treatment, and C&I Solar EPC installations are delivered with accredited technical consortia.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'Six Service Categories (19 Disciplines) & Regional Reach',
          'Consultancy, Circular Economy, Clean Energy, Water, Carbon & Bio-Tech',
          'Serving industrial parks, municipalities, oil & gas, and agriculture across MENA & Africa.'
        )}
        ${glassTable(
          ['Category', 'Core Services & Deliverables', 'Delivery Scope', 'Regulatory Standards'],
          [
            ['A. Environmental Advisory', 'EIA, ESIA, SEA, Industrial Compliance Audits & Permitting', 'In-House Specialists', 'EEAA Law 4/1994 · IFC / World Bank'],
            ['B. Waste & Circular Economy', 'Agri-Waste Composting, Municipal Sorting, RDF & EPR Schemes', 'In-House + Partner', 'Egyptian Waste Law 202/2020 · EPR'],
            ['C. Clean Energy & WtE', 'RENERGON RSD Biogas Plants, C&I Rooftop Solar PV Studies', 'Advisory + EPC Partner', 'PPA / BOT / Swiss RSD Patented Tech'],
            ['D. Water & Effluent', 'Closed-Loop Industrial Wastewater Recycling & ZLD Advisory', 'Technical Partner', 'Law 93/1962 · Law 48/1982'],
            ['E. Carbon & EU CBAM', 'Scopes 1–2–3 GHG Accounting, ESG (GRI/ISSB) & CBAM Ready', 'In-House Specialists', 'GHG Protocol · ISO 14064 · EU CBAM'],
            ['F. Bio-Tech & Smart EHS', 'ET-POT-01 Oil Terminator, ET-POR-01 Odor Control & IoT', 'In-House + Lab QA', 'Class 1 Non-Pathogenic · OECD 301D']
          ],
          ['20%', '34%', '20%', '26%']
        )}
        ${glassCard({
          title: 'Priority Target Markets & Global Sustainability Drivers',
          badge: '5 Tier-1 · 8 Tier-2 Markets',
          bullets: [
            'Tier-1 Priority Markets: Saudi Arabia (MWAN PPP Programs), Egypt (WMRA & IDA Industrial Clusters), UAE (Dubai Waste & Circular Strategy 2041), Oman (be’ah Concessions & Nama Water), and Qatar (DSWMC-2 PPP).',
            'Tier-2 Expansion Markets: Morocco (MASEN Solar), Jordan, Kenya, Rwanda, South Africa, Tanzania, Algeria & Tunisia.',
            'Key Regulatory Drivers: EU Carbon Border Adjustment Mechanism (CBAM), Extended Producer Responsibility (EPR) laws, and C&I rooftop solar utility savings.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'Proprietary Bio-Reagents & Free Technical Consultation',
          'Field-Proven Environmental Formulations & Direct Advisory Desk',
          'Available for oil & gas, wastewater lift stations, industrial parks, and agricultural hubs.'
        )}
        ${glassCard({
          title: 'ET-POT-01 & ET-POR-01 Specialized Formulations',
          badge: 'Dedicated Technical Data Sheets',
          bullets: [
            'ET-POT-01 (Oil Terminator): Consortium of 8 non-pathogenic bacterial isolates (≥ 5 × 10⁹ CFU/g) achieving up to 85% TPH hydrocarbon degradation in 30 days on oil spills, sludge & lagoons.',
            'ET-POR-01 (Odor Neutralizer): Catalytic biochemical bond-cleavage liquid permanently neutralizing H₂S, mercaptans, and ammonia (> 95% OECD 301D biodegradability) without synthetic masking.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(false)}
      `,
    ],
  });

  docs.push({
    fileName: 'SBA_Environmental_Solutions_AR.pdf',
    language: 'AR',
    docCode: 'SBA-ENV-SOL-2026-AR',
    sectorLabel: 'إنفيروتاقة · البيئة والاستدامة',
    title: 'دليل قطاع البيئة المستدامة والطاقة المتجددة',
    subtitle:
      'الدليل الشامل للاستشارات البيئية (EIA/ESIA)، تحويل المخلفات لطاقة، البصمة الكربونية وجاهزية CBAM، ومنظومة الفرص الإقليمية',
    edition: 'الإصدار البيئي والتكنولوجي المعتمد · 2026',
    heroImage: '/BG/Environment & Sustainability/Sustainable Environmental Home Page.avif',
    pages: [
      `
        ${sectionHeader(
          'نظرة عامة والشفافية التشغيلية',
          'تحويل التحديات البيئية إلى فرص استثمارية وتشغيلية مستدامة',
          'متطابق بالكامل مع دليل قطاع إنفيروتاقة وبوابة الفرص البيئية العالمية.'
        )}
        ${kpiGrid([
          { value: '19', label: 'خدمة بيئية متخصصة', sub: 'عبر 6 فئات عمل رئيسية' },
          { value: '13', label: 'سوقًا مستهدفًا', sub: '5 أولوية أولى + 8 ثانية' },
          { value: '10', label: 'مناقصات وفرص نشطة', sub: 'برامج PPP وBOT وشمسية' },
          { value: '100%', label: 'إفصاح نموذج التنفيذ', sub: 'شفافية مباشرة وتحالفات' },
        ])}
        ${glassCard({
          title: 'التحالف التكنولوجي الاستراتيجي مع RENERGON السويسرية',
          badge: 'تكنولوجيا التخمير الجاف RSD',
          badgeColor: 'orange',
          lead: 'تحويل المخلفات العضوية والزراعية والبلدية إلى كهرباء نظيفة وبيوجاز وسماد عضوي عالي الجودة.',
          paragraphs: [
            'تعمل وحدة الخدمات البيئية المستدامة (ENVIROTAQA — مجموعة سامي بن عياد) في شراكة تكنولوجية مع شركة RENERGON International AG السويسرية لتطبيق تقنية التخمير الجاف اللاهوائي الحاصلة على براءة اختراع (RSD) بدون استهلاك مياه إضافية.',
            'إفصاح شفافية نموذج التنفيذ: تُنفذ دراسات تقييم الأثر البيئي (EIA/ESIA)، الامتثال لقانون 202/2020، حسابات البصمة الكربونية، واستشارات CBAM مباشرة بواسطة خبرائنا، بينما تُنفذ محطات الطاقة ومعالجة المياه الكبرى عبر تحالفات EPC دولية معتمدة.'
          ],
          accent: true,
        })}
      `,
      `
        ${sectionHeader(
          'ست فئات خدمات (19 تخصصًا) والنطاق الإقليمي',
          'الاستشارات البيئية، الاقتصاد الدائري، الطاقة المتجددة، المياه، الكربون والبيوتكنولوجيا',
          'خدمة المجمعات الصناعية، البترول والغاز، البلديات، والمزارع في الشرق الأوسط وأفريقيا.'
        )}
        ${glassTable(
          ['الفئة التشغيلية', 'الخدمات والمخرجات الفنية الرئيسية', 'نموذج التنفيذ المعلن', 'المعايير والقوانين الحاكمة'],
          [
            ['أ. الاستشارات والامتثال', 'دراسات EIA / ESIA، التفتيش البيئي، والسجلات البيئية للمصانع', 'تنفيذ مباشر (خبراء القطاع)', 'قانون 4/1994 · معايير IFC والبنك الدولي'],
            ['ب. المخلفات والاقتصاد الدائري', 'تدوير المخلفات الزراعية والصلبة، وقود RDF وبرامج EPR', 'مباشر + تحالف فني', 'قانون إدارة المخلفات رقم 202 لسنة 2020'],
            ['ج. الطاقة النظيفة والبيوجاز', 'محطات RENERGON RSD وطاقة شمسية على أسطح المصانع C&I', 'استشاري + شريك EPC', 'عقود PPA / BOT · براءة اختراع RSD'],
            ['د. المياه والصرف الصناعي', 'معالجة مياه الصرف الصناعي وإعادة الاستخدام (Closed-Loop/ZLD)', 'شريك تقني متخصص', 'قانون 93/1962 · قانون 48/1982'],
            ['هـ. الكربون وضريبة CBAM', 'جرد الغازات الدفيئة النطاقات 1–3، ESG، وجاهزية الصادرات لأوروبا', 'تنفيذ مباشر (خبراء القطاع)', 'GHG Protocol · ISO 14064 · EU CBAM'],
            ['و. البيوتكنولوجيا والرصد الذكي', 'مستحضرات ET-POT-01 وET-POR-01 ومنصات رصد الانبعاثات IoT', 'مباشر + فحص مخبري', 'تصنيف أمان Class 1 · معيار OECD 301D']
          ],
          ['20%', '34%', '20%', '26%']
        )}
        ${glassCard({
          title: 'الأسواق المستهدفة والتحولات التشريعية العالمية',
          badge: '5 أسواق أولوية أولى · 8 ثانية',
          bullets: [
            'أسواق الأولوية الأولى: السعودية (برامج موان MWAN)، مصر (جهاز المخلفات والمناطق الصناعية)، الإمارات (استراتيجية دبي 2041)، عُمان (شركة بيئة ونماء للمياه)، وقطر (DSWMC-2).',
            'أسواق الأولوية الثانية: المغرب (مازن للطاقة)، الأردن، كينيا، رواندا، جنوب أفريقيا، تنزانيا، الجزائر وتونس.',
            'المحركات السوقية: آلية تعديل الكربون الأوروبية (CBAM)، قوانين المسؤولية الممتدة للمنتج (EPR)، والطلب المتسارع على الطاقة الشمسية للمصانع.'
          ],
        })}
      `,
      `
        ${sectionHeader(
          'المستحضرات البيولوجية المعتمدة والتواصل الفني',
          'تقنيات معالجة ميدانية وتنسيق مجاني لمشروعات المصانع والمستثمرين',
          'متاحة لقطاعات البترول، محطات الصرف، المدابغ، ومزارع الإنتاج الحيواني.'
        )}
        ${glassCard({
          title: 'المنتجات البيولوجية المخصصة ET-POT-01 وET-POR-01',
          badge: 'نشرات فنية مستقلة TDS',
          bullets: [
            'ET-POT-01 (قاهر الزيوت البترولية): مزيج من 8 سلالات بكتيرية آمنة بتركيز ≥ 5 × 10⁹ CFU/g يحلل حتى 85% من الهيدروكربونات البترولية في 30 يومًا دون كيماويات ضارة.',
            'ET-POR-01 (محيد الروائح الصناعية): مركب كيميائي حيوي يفكك جزيئات كبريتيد الهيدروجين H₂S والأمونيا نهائيًا عند المصدر (قابلية تحلل > 95%) دون عطور تغطية مؤقتة.'
          ],
          accent: true,
        })}
        ${contactConsultationCard(true)}
      `,
    ],
  });

  // =========================================================================
  // 2. ET-POT-01 Technical Data Sheet (Standard + EN + AR) — 2 pages each
  // =========================================================================
  const etPotPagesEn = [
    `
      ${sectionHeader(
        'Product Identification & Formulation',
        'ET-POT-01 — Oil Terminator Microbial Bioremediation Agent',
        'Concentrated non-pathogenic bacterial consortium engineered for hydrocarbon remediation.'
      )}
      ${kpiGrid([
        { value: '8', label: 'Bacterial Strains', sub: 'Synergistic Isolates' },
        { value: '≥5×10⁹', label: 'Concentration (CFU/g)', sub: 'High Colonization' },
        { value: '85%', label: 'TPH Degradation', sub: 'Within 30 Days' },
        { value: 'Class 1', label: 'Biosafety Rating', sub: 'Non-Pathogenic / Safe' },
      ])}
      ${glassTable(
        ['Technical Parameter', 'Verified Specification', 'Testing Method', 'Operational Remarks'],
        [
          ['Active Microorganisms', '8 Synergistic Hydrocarbon-Degrading Strains (Pseudomonas, Bacillus, Rhodococcus)', 'DNA Isolation & Plate Verification', 'Natural non-GMO isolates; Class 1 biosafety'],
          ['Viable Bacterial Count', '≥ 5 × 10⁹ CFU/g', 'Standard Plate Count (CFU)', 'Rapid logarithmic enzymatic colonization'],
          ['Physical Form & Carrier', 'Dry granular tan powder / liquid concentrate', 'Visual & Sieve Analysis', 'Organic bran/mineral carrier base'],
          ['Effective Operating pH', '5.5 – 9.0 (Optimal Range: 6.8 – 7.5)', 'Calibrated pH Meter', 'Add neutral buffer if soil pH < 5.0'],
          ['Active Temperature', '10°C to 45°C (Survives up to 55°C)', 'Controlled Incubation Trials', 'Peak metabolic digestion at 25°C–35°C'],
          ['TPH Reduction Rate', 'Up to 85% reduction within 30 days', 'GC-FID / US EPA Method 8015', 'Proven on crude oil, diesel, bunker fuel & lube'],
          ['Shelf Life & Storage', '24 Months (sealed dry storage < 30°C)', 'Viability Retention Assay', 'Keep away from strong oxidizers & chlorine']
        ],
        ['22%', '30%', '22%', '26%']
      )}
    `,
    `
      ${sectionHeader(
        'Field Applications & Dosing Guidelines',
        'Protocol for Soil Remediation, Industrial Tanks & Oily Lagoons',
        'Zero-solvent bioremediation preserving marine and terrestrial ecosystems.'
      )}
      ${glassCard({
        title: 'Recommended Field Application & Dosing Schedules',
        badge: 'Industrial & Oilfield Approved',
        bullets: [
          'Oil-Contaminated Soil & Land-Farming: Pre-hydrate ET-POT-01 and apply 1 kg per 10 m³ of contaminated soil. Till thoroughly to ensure even contact, keep soil moisture between 35%–50%, and turn weekly for aeration.',
          'Storage Tank Degreasing & Wastewater Lagoons: Dose 1 kg of concentrate per 5,000 L of oily water under continuous aeration or mechanical circulation.',
          'Critical Compatibility Warning: Never co-apply simultaneously with free chlorine, sodium hypochlorite, harsh acids, or synthetic biocides that neutralize living microbial biomass.'
        ],
        accent: true,
      })}
      ${contactConsultationCard(false)}
    `,
  ];

  const etPotPagesAr = [
    `
      ${sectionHeader(
        'التعريف بالمنتج والخصائص الحيوية',
        'ET-POT-01 — المستحضر البيولوجي لمعالجة التلوث البترولي (Oil Terminator)',
        'تركيب بكتيري مركز وآمن بيئيًا لتحليل الهيدروكربونات النفطية والشحوم الصناعية بسرعة فائقة.'
      )}
      ${kpiGrid([
        { value: '8', label: 'سلالات بكتيرية متكاملة', sub: 'عزلات طبيعية آمنة' },
        { value: '≥5×10⁹', label: 'التركيز (CFU/جم)', sub: 'كثافة استيطان فائقة' },
        { value: '85%', label: 'نسبة تفكيك TPH', sub: 'خلال 30 يومًا ميدانيًا' },
        { value: 'Class 1', label: 'تصنيف الأمان الحيوي', sub: 'غير ممرض وآمن تمامًا' },
      ])}
      ${glassTable(
        ['المعيار الفني', 'المواصفة القياسية المعتمدة', 'طريقة الفحص', 'ملاحظات التشغيل'],
        [
          ['الكائنات النشطة', '8 سلالات بكتيرية متآزرة (Pseudomonas, Bacillus, Rhodococcus)', 'العزل المخبري والتسلسل الجيني', 'سلالات طبيعية غير معدلة وراثيًا، مصنفة Class 1'],
          ['التركيز الحيوي الفعال', '≥ 5 × 10⁹ وحدة مكونة للمستعمرة / جم', 'اختبار العد القياسي CFU', 'نشاط إنزيمي سريع لتفكيك السلاسل الكربونية الثقيلة'],
          ['الصورة الفيزيائية', 'مسحوق حبيبي فاتح / مركز سائل', 'الفحص البصري والمنخلي', 'محمل على وسط عضوي طبيعي سريع الانتشار'],
          ['نطاق الأس الهيدروجيني pH', 'من 5.5 إلى 9.0 (المثالي: 6.8 – 7.5)', 'قياس pH المعاير', 'ينصح بمعادلة التربة شديدة الحموضة (< 5.0)'],
          ['نطاق درجات الحرارة', '10°م إلى 45°م (يتحمل حتى 55°م)', 'اختبارات الحضانة المخبرية', 'ذروة الكفاءة الحيوية بين 25°م و35°م'],
          ['معدل تكسير البترول TPH', 'خفض يصل إلى 85% خلال 30 يومًا', 'تحليل GC-FID / EPA 8015', 'مختبر على الزيت الخام، السولار، والزيوت المستعملة'],
          ['الصلاحية والتخزين', '24 شهرًا في عبوة محكمة (< 30°م)', 'اختبار احتفاظ الحيوية', 'يحفظ في مكان جاف بعيدًا عن الكلور والمطهرات القوية']
        ],
        ['22%', '30%', '22%', '26%']
      )}
    `,
    `
      ${sectionHeader(
        'إرشادات الاستخدام والجرعات الميدانية',
        'بروتوكولات معالجة التربة، خزانات الوقود، وأحواض الصرف الزيتي',
        'معالجة بيولوجية طبيعية دون مذيبات كيميائية أو مخلفات ثانوية سامة.'
      )}
      ${glassCard({
        title: 'جدول الجرعات وتوصيات التطبيق الصناعي',
        badge: 'معتمد لحقول البترول والمصانع',
        bullets: [
          'معالجة التربة الملوثة بالبترول (Land-Farming): يُذاب المستحضر ويُرش بمعدل 1 كجم لكل 10 أمتار مكعبة من التربة، مع تقليب التربة دوريًا كل 7–10 أيام للتهوية وضبط الرطوبة بين 35% و50%.',
          'تنظيف الخزانات وأحواض الصرف الزيتية: يضاف بمعدل 1 كجم لكل 5,000 لتر من المياه الملوثة بالزيوت مع توفير التهوية أو التقليب المستمر.',
          'تحذير تشغيلي هام: يُحظر استخدام المستحضر بالتزامن المباشر مع الكلور، هيبوكلوريت الصوديوم، أو المبيدات البكتيرية الكيميائية لأنها تثبط نشاط السلالات الحية.'
        ],
        accent: true,
      })}
      ${contactConsultationCard(true)}
    `,
  ];

  docs.push({
    fileName: 'ET-POT-01_Technical_Data_Sheet.pdf',
    language: 'EN',
    docCode: 'SBA-TDS-ET-POT-01-2026',
    sectorLabel: 'ENVIROTAQA · Technical Data Sheet',
    title: 'Technical Data Sheet: ET-POT-01 Oil Terminator',
    subtitle: 'Concentrated Microbial Bioremediation Formulation for Crude Oil, Fuel Spills & Industrial Sludge',
    edition: 'Official Technical Data Sheet (TDS)',
    heroImage: '/BG/Environment & Sustainability/ET-POT-01 — Oil Terminator.jpg',
    pages: etPotPagesEn,
  });

  docs.push({
    fileName: 'ET-POT-01_Technical_Data_Sheet_EN.pdf',
    language: 'EN',
    docCode: 'SBA-TDS-ET-POT-01-EN',
    sectorLabel: 'ENVIROTAQA · Technical Data Sheet',
    title: 'Technical Data Sheet: ET-POT-01 Oil Terminator',
    subtitle: 'Concentrated Microbial Bioremediation Formulation for Crude Oil, Fuel Spills & Industrial Sludge',
    edition: 'Official Technical Data Sheet (TDS) · EN',
    heroImage: '/BG/Environment & Sustainability/ET-POT-01 — Oil Terminator.jpg',
    pages: etPotPagesEn,
  });

  docs.push({
    fileName: 'ET-POT-01_Technical_Data_Sheet_AR.pdf',
    language: 'AR',
    docCode: 'SBA-TDS-ET-POT-01-AR',
    sectorLabel: 'إنفيروتاقة · النشرة الفنية المعتمدة',
    title: 'النشرة الفنية: ET-POT-01 قاهر الزيوت البترولية',
    subtitle: 'مستحضر بيولوجي مركز لمعالجة التلوث بالزيت الخام والوقود والرواسب البترولية في التربة والمياه',
    edition: 'النشرة الفنية القياسية المعتمدة (TDS)',
    heroImage: '/BG/Environment & Sustainability/ET-POT-01 — Oil Terminator.jpg',
    pages: etPotPagesAr,
  });

  // =========================================================================
  // 3. ET-POR-01 Technical Data Sheet (Standard + EN + AR) — 2 pages each
  // =========================================================================
  const etPorPagesEn = [
    `
      ${sectionHeader(
        'Product Identification & Mechanism',
        'ET-POR-01 — Biochemical Odor Neutralizer Solution',
        'Permanent molecular neutralization of H₂S, ammonia, mercaptans, and industrial VOCs.'
      )}
      ${kpiGrid([
        { value: '0%', label: 'Masking Perfumes', sub: 'Permanent Bond Cleavage' },
        { value: '>95%', label: 'Biodegradability', sub: 'OECD 301D in 28 Days' },
        { value: '1:500', label: 'Max Dilution Ratio', sub: 'Ultra-Low Operating Cost' },
        { value: '6.5–7.5', label: 'Neutral pH Value', sub: 'Non-Corrosive to Pumps' },
      ])}
      ${glassTable(
        ['Technical Property', 'Verified Specification', 'Analytical Method', 'Operational Advantage'],
        [
          ['Appearance & State', 'Clear to light amber homogeneous liquid', 'Visual Inspection', 'Clog-free in high-pressure fogging nozzles'],
          ['Specific Gravity', '1.02 – 1.05 g/cm³ at 20°C', 'Hydrometer Density', 'Instantly miscible in municipal or well water'],
          ['Concentrate pH', '6.5 – 7.5 (Neutral)', 'Calibrated pH Probe', '100% non-corrosive to steel misting piping'],
          ['Target Emission Gases', 'H₂S, Methyl Mercaptan, Ammonia (NH₃), Amines, Volatile Acids', 'Olfactometry & Multi-Gas Sensors', 'Irreversible biochemical reaction at source'],
          ['Dilution Ratios', '1:50 to 1:500 (Water Dilution)', 'Volumetric Dosing', 'Adapts to perimeter fogging or sludge spraying'],
          ['Biodegradability', '> 95% biodegradable within 28 days', 'OECD 301D Standard', 'Zero toxicity when discharged to treatment works'],
          ['Shelf Life & Handling', '24 Months stored sealed (5°C – 35°C)', 'Active Stability Test', 'Non-flammable; standard PPE handling']
        ],
        ['22%', '28%', '22%', '28%']
      )}
    `,
    `
      ${sectionHeader(
        'Industrial Applications & Dosing Protocols',
        'Wastewater Lift Stations, Landfills, Composting & Rendering Facilities',
        'Engineered to satisfy municipal air quality regulations and occupational HSE limits.'
      )}
      ${glassCard({
        title: 'Recommended Systems & Dosing Ratios',
        badge: 'Municipal & Industrial Ready',
        bullets: [
          'Perimeter Odor Mist Cannons & Fogging Lines: Dilute ET-POR-01 at 1:200 to 1:500 in clean water for continuous airborne neutralization across landfill faces and transfer stations.',
          'Wastewater Wet Wells & Sludge Hoppers: Dilute at 1:50 to 1:150 for direct surface or vapor-phase dosing over open clarifiers, holding tanks, and composting windrows.',
          'Environmental Advantage: Contains zero synthetic masking fragrances, zero heavy metals, and zero volatile organic solvents.'
        ],
        accent: true,
      })}
      ${contactConsultationCard(false)}
    `,
  ];

  const etPorPagesAr = [
    `
      ${sectionHeader(
        'التعريف بالمنتج وآلية العمل الكيميائية',
        'ET-POR-01 — محلول التحييد الكيميائي الحيوي للروائح الصناعية',
        'إزالة دائمة وفورية لغازات كبريتيد الهيدروجين H₂S والأمونيا والمركبتانات دون عطور تغطية مؤقتة.'
      )}
      ${kpiGrid([
        { value: '0%', label: 'عطور تغطية مؤقتة', sub: 'تكسير دائم للروابط الغازية' },
        { value: '>95%', label: 'القابلية للتحلل الحيوي', sub: 'معيار OECD 301D' },
        { value: '1:500', label: 'أقصى نسبة تخفيف', sub: 'اقتصادي للغاية بالتشغيل' },
        { value: '6.5–7.5', label: 'أس هيدروجيني متعادل', sub: 'آمن على المضخات والأنابيب' },
      ])}
      ${glassTable(
        ['الخاصية الفنية', 'المواصفة القياسية المعتمدة', 'طريقة القياس', 'الميزة التشغيلية'],
        [
          ['المظهر والحالة', 'سائل متجانس شفاف إلى كهرماني فاتح', 'الفحص البصري', 'لا يسبب انسداد فوهات الضباب والرش الدقيق'],
          ['الكثافة النوعية', '1.02 – 1.05 جم/سم³ عند 20°م', 'جهاز الهيدروميتر', 'سريع الذوبان والامتزاج الفوري بالمياه'],
          ['الأس الهيدروجيني pH', '6.5 – 7.5 (متعادل تمامًا)', 'مقياس pH المعاير', 'غير مسبب لتآكل المواسير المعدنية أو المضخات'],
          ['الغازات المستهدفة', 'H₂S، الميركابتان، الأمونيا NH₃، والأمينات المتطايرة', 'حساسات الغاز والقياس الشمي', 'تحييد كيميائي حيوي غير عكسي عند مصدر الانبعاث'],
          ['معدلات التخفيف بالماء', 'من 1:50 حتى 1:500 حسب شدة الانبعاث', 'أنظمة الخلط الحجمي', 'مرونة فائقة لأنظمة الرش السطحي أو مدافع الضباب'],
          ['التحلل الحيوي والأمان', 'أكثر من 95% خلال 28 يومًا', 'معيار OECD 301D الدولي', 'آمن تمامًا عند التصريف لمحطات المعالجة البيولوجية'],
          ['الصلاحية والتخزين', '24 شهرًا في عبوات محكمة (5°م – 35°م)', 'اختبار الثبات الفعال', 'غير قابل للاشتعال وآمن بالتداول الصناعي المعتاد']
        ],
        ['22%', '28%', '22%', '28%']
      )}
    `,
    `
      ${sectionHeader(
        'التطبيقات الميدانية وبروتوكولات الحقن والرش',
        'محطات رفع الصرف، المدافن الصحية، مصانع الكمبوست والمجزر الآلي',
        'توافق تام مع حدود الانبعاثات الهوائية واشتراطات السلامة المهنية في المصانع.'
      )}
      ${glassCard({
        title: 'بروتوكولات الرش وتوصيات التشغيل الاقتصادي',
        badge: 'جاهز لمحطات المعالجة والمدافن',
        bullets: [
          'شبكات الضباب وخطوط الرش المحيطية (Perimeter Fogging): يخفف بنسبة 1:200 إلى 1:500 بالماء النظيف لتحييد سحب الروائح فوق خلايا الدفن الصحي ومحطات الوسيطة.',
          'بيارات الرفع وأحواض الحمأة ومصفوفات التسميد: يخفف بنسبة 1:50 إلى 1:150 للرش المباشر أو الحقن الضبابي فوق أسطح الأحواض المكشوفة.',
          'ميزة الأمان البيئي: خالٍ تمامًا من المذيبات العضوية أو المعادن الثقيلة أو المعطرات الصناعية المهيجة للجهاز التنفسي.'
        ],
        accent: true,
      })}
      ${contactConsultationCard(true)}
    `,
  ];

  docs.push({
    fileName: 'ET-POR-01_Technical_Data_Sheet.pdf',
    language: 'EN',
    docCode: 'SBA-TDS-ET-POR-01-2026',
    sectorLabel: 'ENVIROTAQA · Technical Data Sheet',
    title: 'Technical Data Sheet: ET-POR-01 Odor Neutralizer',
    subtitle: 'Fast-Acting Biochemical Solution for H₂S, Ammonia & Industrial Emission Odor Abatement',
    edition: 'Official Technical Data Sheet (TDS)',
    heroImage: '/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg',
    pages: etPorPagesEn,
  });

  docs.push({
    fileName: 'ET-POR-01_Technical_Data_Sheet_EN.pdf',
    language: 'EN',
    docCode: 'SBA-TDS-ET-POR-01-EN',
    sectorLabel: 'ENVIROTAQA · Technical Data Sheet',
    title: 'Technical Data Sheet: ET-POR-01 Odor Neutralizer',
    subtitle: 'Fast-Acting Biochemical Solution for H₂S, Ammonia & Industrial Emission Odor Abatement',
    edition: 'Official Technical Data Sheet (TDS) · EN',
    heroImage: '/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg',
    pages: etPorPagesEn,
  });

  docs.push({
    fileName: 'ET-POR-01_Technical_Data_Sheet_AR.pdf',
    language: 'AR',
    docCode: 'SBA-TDS-ET-POR-01-AR',
    sectorLabel: 'إنفيروتاقة · النشرة الفنية المعتمدة',
    title: 'النشرة الفنية: ET-POR-01 محيد الروائح الصناعية',
    subtitle: 'محلول كيميائي حيوي فائق السرعة لإزالة غازات كبريتيد الهيدروجين والأمونيا في محطات الصرف والمخلفات',
    edition: 'النشرة الفنية القياسية المعتمدة (TDS)',
    heroImage: '/BG/Environment & Sustainability/ET-POR-01 — Odor Removal Solution.jpg',
    pages: etPorPagesAr,
  });

  return docs;
}

