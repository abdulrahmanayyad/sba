// Official Real Estate & Investment Opportunities Data
// Sami Bin Ayyad Group — Global Real Estate & Investment Opportunities

export interface RealEstateMarketCoverage {
  regionKey: string;
  regionNameAr: string;
  regionNameEn: string;
  citiesAr: string[];
  citiesEn: string[];
}

export interface RealEstateAssetCategory {
  categoryKey: string;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  itemsAr: string[];
  itemsEn: string[];
}

export interface RealEstateTransactionModel {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  tagEn: string;
}

export interface RealEstateAdvisoryService {
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface RealEstateMajorMilestone {
  titleAr: string;
  titleEn: string;
  valuationAr: string;
  valuationEn: string;
  descAr: string;
  descEn: string;
}

export const REAL_ESTATE_STATS = {
  experienceSince: 2018,
  projectsHandled: 400,
  projectsDisplay: "+400",
  developersNetwork: 200,
  developersDisplay: "+200",
  portfolioMarketedEGP: "5 مليارات جنيه",
  portfolioMarketedEn: "5 Billion EGP",
  pharmacistsAdvised: 100,
  pharmacistsDisplay: "+100",
  targetCountriesCount: 5,
};

export const REAL_ESTATE_MARKET_COVERAGE: RealEstateMarketCoverage[] = [
  {
    regionKey: "greater-cairo-east",
    regionNameAr: "القاهرة الكبرى وشرق القاهرة",
    regionNameEn: "Greater Cairo & East Cairo",
    citiesAr: [
      "القاهرة الجديدة والتجمع الخامس",
      "العاصمة الإدارية الجديدة",
      "مدينتي",
      "مستقبل سيتي",
      "هليوبوليس الجديدة",
      "الشروق",
      "بدر",
      "مدينة العبور والعبور الجديدة",
      "مصر الجديدة",
      "مدينة نصر",
      "العاشر من رمضان"
    ],
    citiesEn: [
      "New Cairo & 5th Settlement",
      "New Administrative Capital",
      "Madinaty",
      "Mostakbal City",
      "New Heliopolis",
      "El Shorouk",
      "Badr City",
      "Obour & New Obour City",
      "Heliopolis",
      "Nasr City",
      "10th of Ramadan City"
    ]
  },
  {
    regionKey: "west-cairo",
    regionNameAr: "غرب القاهرة والمجتمعات العمرانية",
    regionNameEn: "West Cairo & Urban Communities",
    citiesAr: [
      "مدينة السادس من أكتوبر",
      "الشيخ زايد والامتدادات العمرانية",
      "حدائق أكتوبر وأكتوبر الجديدة",
      "سفنكس الجديدة والمجتمعات الغربية"
    ],
    citiesEn: [
      "6th of October City",
      "Sheikh Zayed & Urban Extensions",
      "October Gardens & New October",
      "New Sphinx & Western Developments"
    ]
  },
  {
    regionKey: "coastal-tourism",
    regionNameAr: "المدن الساحلية والسياحية",
    regionNameEn: "Coastal & Tourism Gateways",
    citiesAr: [
      "الساحل الشمالي ورأس الحكمة",
      "العين السخنة والجلالة",
      "الغردقة وسهل حشيش والجونة",
      "مرسى مطروح",
      "دمياط الجديدة"
    ],
    citiesEn: [
      "North Coast & Ras El Hekma",
      "Ain Sokhna & Galala",
      "Hurghada, Sahl Hasheesh & El Gouna",
      "Marsa Matrouh",
      "New Damietta"
    ]
  },
  {
    regionKey: "international-markets",
    regionNameAr: "الأسواق الإقليمية والدولية",
    regionNameEn: "Regional & International Markets",
    citiesAr: [
      "المملكة العربية السعودية (الرياض، جدة، الشرقية)",
      "الإمارات العربية المتحدة (دبي، أبوظبي، الشارقة)",
      "سلطنة عُمان (مسقط والمناطق الاقتصادية)",
      "تركيا (إسطنبول والمدن الاستثمارية)"
    ],
    citiesEn: [
      "Kingdom of Saudi Arabia (Riyadh, Jeddah, Eastern Province)",
      "United Arab Emirates (Dubai, Abu Dhabi, Sharjah)",
      "Sultanate of Oman (Muscat & Economic Zones)",
      "Turkey (Istanbul & Investment Hubs)"
    ]
  }
];

export const REAL_ESTATE_ASSETS_PORTFOLIO: RealEstateAssetCategory[] = [
  {
    categoryKey: "residential",
    titleAr: "الأصول السكنية",
    titleEn: "Residential Assets",
    descriptionAr: "محفظة متكاملة من الوحدات السكنية في أرقى المشروعات والكمبوندات والمدن الجديدة.",
    descriptionEn: "Comprehensive residential asset portfolio across top-tier master-planned developments.",
    itemsAr: [
      "الشقق السكنية الفاخرة",
      "الفلل المستقلة (Stand-alone Villas)",
      "القصور السكنية والمنازل الفارهة",
      "التوين هاوس (Twin Houses)",
      "التاون هاوس (Townhouses)",
      "الدوبلكس والبنتهاوس والاستوديوهات",
      "الشقق الفندقية المدارة (Serviced Apartments)",
      "الوحدات والشاليهات الساحلية",
      "الميني كمبوند والأبراج السكنية",
      "المباني السكنية المستقلة"
    ],
    itemsEn: [
      "Luxury Apartments",
      "Stand-alone Villas",
      "Private Mansions & Palaces",
      "Twin Houses",
      "Townhouses",
      "Duplexes, Penthouses & Studios",
      "Serviced Hotel Apartments",
      "Coastal & Resort Chalets",
      "Mini-compounds & High-rise Towers",
      "Independent Residential Buildings"
    ]
  },
  {
    categoryKey: "commercial-administrative",
    titleAr: "الأصول التجارية والإدارية",
    titleEn: "Commercial & Administrative Assets",
    descriptionAr: "مساحات تجارية وإدارية ذات عوائد إيجارية وتشغيلية مرتفعة لسلاسل التجزئة والمقرات المؤسسية.",
    descriptionEn: "High-yield commercial, retail, and corporate office assets optimized for investment and operations.",
    itemsAr: [
      "المحلات التجارية والواجهات الاستثمارية",
      "المولات ومراكز التسوق الإقليمية",
      "الاستريب مول (Strip Malls)",
      "السنتر والمراكز التجارية الخدمية",
      "المكاتب الإدارية ومقرات الشركات الكبرى",
      "المباني الإدارية المستقلة المخصصة للبنوك والمؤسسات",
      "المقرات المصرفية والبنوك",
      "الصيدليات الاستثمارية المعتمدة",
      "العيادات والمراكز الطبية التخصصية",
      "مساحات الهايبر ماركت وسلاسل السوبرماركت",
      "معارض السيارات والوكالات التجارية",
      "المخازن والمستودعات اللوجستية"
    ],
    itemsEn: [
      "Retail Shops & Street Fronts",
      "Regional Shopping Malls & Plazas",
      "Strip Malls & Promenade Retail",
      "Neighborhood Service Commercial Centers",
      "Executive Offices & Corporate HQs",
      "Standalone Corporate & Institutional Buildings",
      "Bank Branches & Financial Outlets",
      "Accredited Investment Pharmacies",
      "Medical Polyclinics & Specialized Centers",
      "Anchor Hypermarket & Supermarket Spaces",
      "Automotive Showrooms & Dealerships",
      "Fulfillment Warehouses & Logistics Hubs"
    ]
  },
  {
    categoryKey: "industrial-agricultural",
    titleAr: "الأصول الصناعية والزراعية",
    titleEn: "Industrial & Agricultural Assets",
    descriptionAr: "أصول أراضٍ ومرافق مجهزة للتصنيع والإنتاج الزراعي وسلاسل الإمداد.",
    descriptionEn: "Industrial lands, developed manufacturing plants, and strategic agricultural holdings.",
    itemsAr: [
      "الأراضي الاستثمارية متعددة الاستخدامات",
      "الأراضي الصناعية المرفقة والمدن الصناعية",
      "المصانع القائمة وخطوط الإنتاج الجاهزة",
      "الأراضي الزراعية والمزارع الإنتاجية المستصلحة",
      "المزارع النموذجية ومحطات الفرز والتعبئة",
      "الأصول والممتلكات الصناعية والمجمعات الحرفية"
    ],
    itemsEn: [
      "Mixed-Use Investment Land Plots",
      "Serviced Industrial Parcels & Industrial Parks",
      "Operating Factories & Production Facilities",
      "Reclaimed Agricultural Lands & Productive Farms",
      "Model Orchards, Sorting & Packing Stations",
      "Light Industrial Estates & Processing Complexes"
    ]
  },
  {
    categoryKey: "hospitality-entertainment",
    titleAr: "الأصول السياحية والترفيهية",
    titleEn: "Tourism, Hospitality & Leisure Assets",
    descriptionAr: "أصول ضيافة وترفيه ومنتجعات سياحية تحقق تدفقات نقدية مستمرة وجاذبية استثمارية دولية.",
    descriptionEn: "Income-generating hospitality, beachfront resorts, leisure hubs, and wellness complexes.",
    itemsAr: [
      "الفنادق والمنتجعات السياحية",
      "الشاليهات والقرى السياحية المتكاملة",
      "الشواطئ المخصصة والنوادي الشاطئية (Beach Clubs)",
      "المخيمات السياحية والكامبات الفاخرة (Eco Camps)",
      "المدن الترفيهية والمراكز العائلية",
      "الأندية الرياضية والصالات الرياضية التخصصية",
      "مجمعات المطاعم والكافيهات الفاخرة (F&B Hubs)",
      "المدن الرياضية والمشروعات متعددة الأنشطة"
    ],
    itemsEn: [
      "Hotels & Luxury Resorts",
      "Coastal Chalets & Resort Communities",
      "Private Beaches & Coastal Beach Clubs",
      "Eco Camps & Luxury Glamping Sites",
      "Theme Parks & Family Entertainment Centers",
      "Sports Clubs, Gymnasiums & Wellness Facilities",
      "Prime F&B Hubs, Restaurants & Cafes",
      "Sports Cities & Multi-Activity Destinations"
    ]
  },
  {
    categoryKey: "integrated-mixed-use",
    titleAr: "المشروعات العمرانية المتكاملة",
    titleEn: "Master-Planned & Mixed-Use Projects",
    descriptionAr: "مجمعات ومدن عمرانية متكاملة تجمع بين السكن والتجارة والعمل والترفيه.",
    descriptionEn: "Holistic master developments integrating residential, commercial, office, and recreational life.",
    itemsAr: [
      "الكمبوندات السكنية المتكاملة الخدمات",
      "المجمعات متعددة الاستخدامات (Mixed-Use Hubs)",
      "المخططات العمرانية والمدن السكنية الذكية",
      "المشروعات متعددة الأنشطة والواجهات النهرية والبحرية",
      "المجمعات التجارية والسكنية والإدارية المشتركة"
    ],
    itemsEn: [
      "Full-Service Gated Residential Communities",
      "Integrated Mixed-Use Complexes",
      "Master-Planned Urban Developments & Smart Cities",
      "Waterfront & Multi-Activity Iconic Developments",
      "Combined Commercial, Residential & Corporate Quarters"
    ]
  }
];

export const REAL_ESTATE_TRANSACTION_MODELS: RealEstateTransactionModel[] = [
  {
    titleAr: "السوق الأولي والمشروعات المباشرة",
    titleEn: "Primary Market Direct Deals",
    descAr: "التعاقد المباشر مع كبرى شركات التطوير العقاري بأفضل شروط التعاقد وجداول السداد الميسرة.",
    descEn: "Direct acquisitions from tier-one master developers featuring optimized payment schedules.",
    tagEn: "Primary Market"
  },
  {
    titleAr: "سوق إعادة البيع",
    titleEn: "Resale Market & Liquidations",
    descAr: "توفير فرص استثمارية متميزة بأسعار تنافسية فورية في مشروعات تم تسليمها أو قاربت على التسليم.",
    descEn: "Targeted secondary market opportunities delivering immediate capital appreciation.",
    tagEn: "Resale Market"
  },
  {
    titleAr: "المشروعات تحت الإنشاء",
    titleEn: "Under Construction Off-Plan",
    descAr: "دراسة المشروعات في مراحلها الأولى للاستفادة من النمو الرأسمالي التدريجي مع مراحل التطوير.",
    descEn: "Early-stage off-plan allocations maximizing long-term capital compounding.",
    tagEn: "Under Construction"
  },
  {
    titleAr: "الوحدات الجاهزة للتسليم",
    titleEn: "Ready to Move Assets",
    descAr: "وحدات جاهزة للسكن أو التشغيل الفوري توفر عائدًا إيجاريًا مباشرًا دون انتظار أوقات البناء.",
    descEn: "Completed inventory ready for immediate occupancy or immediate recurring rental yield.",
    tagEn: "Ready to Move"
  },
  {
    titleAr: "التأجير والاستئجار التجاري",
    titleEn: "Commercial Leasing & Tenant Mix",
    descAr: "تطوير استراتيجيات التأجير وإدارة المزيج التجاري واستقطاب العلامات التجارية الكبرى.",
    descEn: "Commercial leasing strategies, brand placement, and tenant retention engineering.",
    tagEn: "Leasing & Rental"
  },
  {
    titleAr: "الاستحواذ والتصرف في الأصول",
    titleEn: "Asset Acquisition & Disposal",
    descAr: "تنفيذ صفقات الاستحواذ والتخارج العقاري للشركات والمحافظ الاستثمارية بمهنية وحيادية تامة.",
    descEn: "Strategic asset acquisitions, liquidations, and portfolio rebalancing.",
    tagEn: "Acquisition & Disposal"
  },
  {
    titleAr: "فرص الامتياز التجاري (Franchise)",
    titleEn: "Franchise Placement & Rights",
    descAr: "ربط المساحات التجارية الواعدة بفرص الفرنشايز للعلامات التجارية الغذائية والتجزئة.",
    descEn: "Connecting prime commercial assets with leading regional and international franchise rights.",
    tagEn: "Franchise Opportunities"
  },
  {
    titleAr: "الشراكات وتقاسم الإيرادات",
    titleEn: "Revenue Sharing Joint Ventures",
    descAr: "هيكلة صفقات الشراكة التشغيلية القائمة على تقاسم الدخل أو الإيرادات بين المالك والمشغل.",
    descEn: "Structuring performance-based operating JVs and revenue-sharing mechanisms.",
    tagEn: "Revenue Sharing"
  },
  {
    titleAr: "التحالفات الاستراتيجية",
    titleEn: "Strategic Alliances",
    descAr: "بناء تحالفات متينة بين ملاك الأراضي، المطورين، شركات الإدارة، ومؤسسات التمويل.",
    descEn: "Fostering institutional alliances uniting landowners, developers, operators, and financiers.",
    tagEn: "Strategic Alliances"
  },
  {
    titleAr: "فرص الاستثمار العقاري المؤسسي",
    titleEn: "Institutional Real Estate Investment",
    descAr: "صياغة فرص استثمارية مدرة للدخل وصناديق عقارية خاصة موجهة للمستثمرين ذوي الملاءة.",
    descEn: "Tailored yield-generating investment conduits for private offices and institutional capital.",
    tagEn: "Real Estate Investment"
  }
];

export const REAL_ESTATE_ADVISORY_PILLARS: RealEstateAdvisoryService[] = [
  {
    titleAr: "دراسة المواقع والمناطق الاستثمارية",
    titleEn: "Location & Market Feasibility Analysis",
    descAr: "تحليل ديموغرافي وتجاري شامل لطبيعة الموقع والكثافة السكانية ومحاور الحركة ومعدلات النمو المستقبلي.",
    descEn: "Comprehensive demographic, footfall, and accessibility analysis of target investment corridors."
  },
  {
    titleAr: "تحليل الاستخدام الأمثل للأصول (Highest & Best Use)",
    titleEn: "Highest & Best Use (HBU) Optimization",
    descAr: "تحديد أفضل نشاط عقاري وتجاري يحقق أعلى عائد مالي ممكن من قطعة الأرض أو المبنى القائم.",
    descEn: "Determining the optimal asset mix and configuration yielding maximum return on equity."
  },
  {
    titleAr: "دراسات الجدوى الاقتصادية والتشغيلية",
    titleEn: "Financial & Operational Feasibility Studies",
    descAr: "إعداد نماذج مالية دقيقة تشتمل على التكاليف الاستثمارية، التدفقات النقدية، وفترات الاسترداد ومعدل العائد الداخلي (IRR).",
    descEn: "Robust financial modeling, capital outlay projections, cash flows, payback cycles, and IRR computations."
  },
  {
    titleAr: "تقدير القيمة السوقية والبيعية والإيجارية",
    titleEn: "Market Valuation & Rental Pricing Matrix",
    descAr: "تقييم واقعي ودقيق للقيم السعرية والإيجارية بناءً على مقارنات السوق الفعلية ومؤشرات العرض والطلب.",
    descEn: "Data-driven pricing, rental comps, and valuation benchmarks reflecting real-time transaction data."
  },
  {
    titleAr: "مراجعة العقود والاتفاقيات التجارية",
    titleEn: "Commercial Contract & Deal Structuring Review",
    descAr: "تدقيق البنود والشروط التجارية لضمان حماية المصالح التعاقدية للمستثمر وتفادي المخاطر التشغيلية والمالية.",
    descEn: "Commercial risk auditing of contracts, tenant agreements, and JV covenants to protect capital."
  },
  {
    titleAr: "تقييم المخاطر وبدائل الشراء والاستئجار",
    titleEn: "Risk Assessment & Lease vs. Buy Studies",
    descAr: "مقارنة دقيقة بين خيارات الشراء الرأسمالي والاستئجار التشغيلي للمقرات والفروع التجارية.",
    descEn: "Rigorous trade-off analysis evaluating capital expenditure acquisition versus operating lease structures."
  }
];

export const PHARMACY_ADVISORY_SECTION = {
  headlineAr: "الاستشارات المتخصصة للأصول الصيدلانية",
  headlineEn: "Pharmacy Real Estate & Investment Advisory",
  metricBadgeAr: "دعم استشاري لأكثر من 100 صيدلي ومستثمر",
  metricBadgeEn: "Over 100+ Pharmacists & Investors Consulted",
  introAr: "سجل حافل بالدعم الاستشاري المتخصص لأكثر من 100 صيدلي ومستثمر في قطاع الرعاية الصحية، شمل الشراء والبيع والتأجير وتقييم المواقع الصيدلانية الأكثر ربحية واستدامة.",
  introEn: "Proven advisory track record supporting over 100 pharmacists and healthcare investors across acquisitions, disposals, commercial leasing, and revenue-maximizing location analytics.",
  servicesAr: [
    "دراسة الموقع واختيار المكان الجغرافي الأنسب للصيدلية وتدفقات المشاة والسيارات",
    "تقييم المنطقة والكثافة السكانية والعيادات الطبية المجاورة وحجم الطلب الدوائي",
    "دراسة الجدوى الاستثمارية الشاملة ومعدلات الدوران المتوقعة للمبيعات",
    "التوجيه العملي بشأن شروط التراخيص والمواصفات التشغيلية المعتمدة لوزارة الصحة",
    "تقدير القيمة السوقية العادلة للبيع والخلو والإيجار السنوي للأصول الصيدلانية",
    "دراسة نماذج الشراكة وتقاسم الإيرادات مع سلاسل الصيدليات الكبرى والمجموعات الدوائية",
    "تقييم الأصول والتجهيزات والديكورات وثلاجات الحفظ وأنظمة الربط الآلية",
    "إدارة المفاوضات التجارية وحل النزاعات التعاقدية بين الملاك والمستأجرين"
  ],
  servicesEn: [
    "Strategic site selection assessing pedestrian footfall, vehicular visibility, and accessibility",
    "Catchment area profiling: residential density, nearby clinics, hospitals, and pharmaceutical demand",
    "End-to-end investment feasibility, turnover forecasts, and operational margins modeling",
    "Practical guidance on health authority licensing criteria, spatial standards, and approvals",
    "Objective market appraisal for goodwill, key money, sales valuations, and rental indexation",
    "Structuring revenue-sharing and franchising joint ventures with leading pharmacy chains",
    "Comprehensive physical asset, cold chain, robotics, and fixture audits",
    "Commercial mediation, negotiation oversight, and dispute resolution for lease covenants"
  ]
};

export const REAL_ESTATE_MAJOR_MILESTONES: RealEstateMajorMilestone[] = [
  {
    titleAr: "تسويق وإدارة مبيعات محفظة تجارية كبرى",
    titleEn: "Major Commercial Portfolio Sales & Marketing",
    valuationAr: "5 مليارات جنيه مصري",
    valuationEn: "5 Billion EGP Portfolio",
    descAr: "المشاركة في تسويق وإدارة مبيعات محفظة عقارية استثمارية استثنائية شملت سبعة مراكز تجارية (Malls) وفندقًا سياحيًا متكاملًا.",
    descEn: "Participation in the strategic commercialization and sales management of an institutional portfolio encompassing seven retail malls and a full-service hotel."
  },
  {
    titleAr: "إدارة مشروع مجمع تجاري متكامل",
    titleEn: "Integrated Commercial Mixed-Use Complex",
    valuationAr: "قرابة 1 مليار جنيه مصري",
    valuationEn: "~1 Billion EGP Asset Value",
    descAr: "الإشراف الإداري والتسويقي على مجمع تجاري خدمي متكامل المرافق، شمل تخطيط المزيج التجاري واستقطاب كبرى السلاسل التجارية.",
    descEn: "Full management and commercialization oversight of an integrated multi-service commercial development, planning tenant mix and retail anchoring."
  },
  {
    titleAr: "تطوير وتسويق مشروعات مولات تجارية",
    titleEn: "Commercial Shopping Plazas Commercialization",
    valuationAr: "200 مليون + 100 مليون جنيه",
    valuationEn: "200M + 100M EGP Projects",
    descAr: "المشاركة في تسويق وإدارة مشروعي مولات تجارية في مواقع حيوية بقيم استثمارية قاربت 200 مليون جنيه لمشروع و100 مليون جنيه للآخر.",
    descEn: "Execution of sales, leasing, and marketing programs for two prominent retail plazas valued at 200M EGP and 100M EGP respectively."
  },
  {
    titleAr: "تقييم أصول مصنع ألماني لصناعة المكرونة",
    titleEn: "Industrial Asset Valuation for German Investor",
    valuationAr: "استثمار صناعي دولي",
    valuationEn: "Cross-Border Industrial Asset",
    descAr: "المشاركة في تقييم شامل لأصول وممتلكات ومعدات وخطوط إنتاج مصنع لصناعة المكرونة في مصر لصالح مستثمر صناعي ألماني بارز.",
    descEn: "Comprehensive physical asset, machinery, and facility valuation of an operating pasta production plant in Egypt for a leading German industrial investor."
  }
];

export const REAL_ESTATE_COMMERCIAL_OPERATIONS = {
  headlineAr: "إدارة وتشغيل المشروعات التجارية والشركاء",
  headlineEn: "Commercial Property Management & Partners Ecosystem",
  descAr: "خبرات متراكمة في تشغيل وتطوير استراتيجيات التأجير التجاري، وإدارة علاقات المستأجرين، وتحليل القيمة الإيجارية، بالتعاون مع كبرى الشركات المتخصصة في السوق العقاري المصري.",
  descEn: "Deep expertise in operational mall management, retail leasing, and asset optimization executed in collaboration with leading specialized consultancies.",
  reputablePartners: ["MRB", "EgyMap", "One Commercial", "Ethmar", "Rekaz"],
  developerBrands: ["Emaar", "Azizi", "Binghatti", "Dubai Healthcare City Projects"]
};

export const REAL_ESTATE_DIPLOMATIC_PARTNERSHIPS = [
  {
    titleAr: "الرؤية الاستثمارية الزراعية والعقارية المشتركة مع سفير جمهورية جيبوتي",
    titleEn: "Joint Agricultural & Real Estate Vision with Ambassador of Djibouti",
    descAr: "المشاركة المباشرة مع سفير جمهورية جيبوتي لدى مصر في إعداد استراتيجية استثمارية متكاملة لتعزيز التبادل التجاري وتطوير مشروعات زراعية وصناعية وعقارية وبنية تحتية مشتركة.",
    descEn: "Collaborating directly with the Ambassador of Djibouti to Egypt in formulating an investment roadmap expanding bilateral agricultural, industrial, and real estate infrastructure."
  },
  {
    titleAr: "إدارة وتسويق أصول دبلوماسية على النيل",
    titleEn: "Diplomatic Waterfront Asset Management & Brokerage",
    descAr: "إدارة وتسويق أصول عقارية دبلوماسية رفيعة المستوى، شملت إدارة وبيع دور كامل بإطلالة مباشرة على النيل خاص بسفير جمهورية مصر العربية لدى دولة الإمارات العربية المتحدة.",
    descEn: "Managing the high-profile disposition and sale of a premium full-floor Nile-front diplomatic residence owned by Egypt's Ambassador to the UAE."
  },
  {
    titleAr: "مباحثات دخول استثمارات سعودية كبرى للسوق المصري",
    titleEn: "Saudi-Egyptian Strategic Real Estate Investment Talks",
    descAr: "مباحثات متقدمة مع مجموعة استثمارية سعودية بارزة لدراسة ضخ استثمارات واستحواذات استراتيجية داخل السوق العقاري المصري في القطاعات التجارية والسكنية.",
    descEn: "Advanced discussions with a prominent Saudi investment entity to channel institutional capital and joint acquisitions into Egypt's prime real estate sectors."
  }
];

export const REAL_ESTATE_COLLABORATION_FIELDS = [
  { key: "marketing", labelAr: "تسويق المشروعات العقارية الكبرى", labelEn: "Major Project Commercialization" },
  { key: "brokerage", labelAr: "الوساطة التجارية والعقارية المؤسسية", labelEn: "Institutional Commercial Brokerage" },
  { key: "asset-management", labelAr: "إدارة وتسويق الأصول العقارية", labelEn: "Asset Management & Value Creation" },
  { key: "malls-retail", labelAr: "الاستثمار في المراكز التجارية والمولات", labelEn: "Commercial Centers & Retail Plazas" },
  { key: "mixed-use", labelAr: "تطوير وإدارة المشروعات متعددة الاستخدامات", labelEn: "Mixed-Use Urban Developments" },
  { key: "developer-jvs", labelAr: "الشراكات والتحالفات مع المطورين العقاريين", labelEn: "Developer Joint Ventures & Strategic Alliances" },
  { key: "leasing-mgmt", labelAr: "إدارة المبيعات والتأجير التجاري المتخصص", labelEn: "Specialized Sales & Leasing Management" },
  { key: "valuation", labelAr: "تقييم الأصول والفرص الاستثمارية ودراسات الجدوى", labelEn: "Asset Valuation & Investment Feasibility" },
  { key: "fdi-entry", labelAr: "دخول المستثمرين الأجانب والصناديق للسوق المصري", labelEn: "FDI Market Entry for International Funds" },
  { key: "cross-border", labelAr: "تطوير الشراكات العقارية العابرة للحدود", labelEn: "Cross-Border Real Estate Partnerships" }
];

