// Sustainability & Environmental Global Opportunities Data Model
// SAMI BIN AYYAD GROUP — Official Global Opportunities Architecture

export type SustainabilitySubsectorKey =
  | "renewable_energy"
  | "waste_circular"
  | "water_resources"
  | "industrial_sustainability"
  | "environmental_consulting"
  | "project_development";

export type MarketClassification =
  | "strategic_target"
  | "emerging"
  | "published_opportunities"
  | "local_partnerships";

export type ProjectStage =
  | "Announced"
  | "Under Study"
  | "Expression of Interest"
  | "Prequalification"
  | "Tender Open"
  | "Awarded"
  | "Under Implementation"
  | "Closed"
  | "Archived";

export type DeliveryModel = "in_house" | "technical_partner" | "under_development";

export interface SustainabilityMarket {
  countryAr: string;
  countryEn: string;
  countryCode: string;
  flag: string;
  priority: "tier1" | "tier2";
  classification: MarketClassification;
  classificationAr: string;
  classificationEn: string;
  environmentalNeedsAr: string[];
  environmentalNeedsEn: string[];
  suitableSolutionsAr: string[];
  suitableSolutionsEn: string[];
  targetSectorsAr: string[];
  targetSectorsEn: string[];
  entryChannelsAr: string[];
  entryChannelsEn: string[];
  officialSource: string;
  officialSourceUrl: string;
  summaryAr: string;
  summaryEn: string;
}

export interface SustainabilityServiceItem {
  id: string;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
  deliveryModel: DeliveryModel;
  deliveryModelAr: string;
  deliveryModelEn: string;
  keyApplicationsAr: string;
  keyApplicationsEn: string;
}

export interface SustainabilitySolutionCategory {
  categoryKey: SustainabilitySubsectorKey;
  categoryNameAr: string;
  categoryNameEn: string;
  categoryTaglineAr: string;
  categoryTaglineEn: string;
  iconName: string;
  services: SustainabilityServiceItem[];
}

export interface SustainabilityOpportunity {
  id: string;
  projectNameAr: string;
  projectNameEn: string;
  countryAr: string;
  countryEn: string;
  countryCode: string;
  flag: string;
  cityRegionAr: string;
  cityRegionEn: string;
  subsector: SustainabilitySubsectorKey;
  subsectorAr: string;
  subsectorEn: string;
  requiredServicesAr: string;
  requiredServicesEn: string;
  projectDescriptionAr: string;
  projectDescriptionEn: string;
  announcingEntityAr: string;
  announcingEntityEn: string;
  investmentValue: string;
  currency: string;
  contractingModel: "PPP" | "BOT" | "EPC" | "Joint Venture" | "Direct Investment" | "Service Contract";
  projectStage: ProjectStage;
  projectStageAr: string;
  publicationDate: string;
  submissionDeadline: string;
  officialSourceUrl: string;
  qualificationRequirementsAr: string;
  qualificationRequirementsEn: string;
  partnershipRequirementsAr: string;
  partnershipRequirementsEn: string;
  verificationStatusAr: string;
  verificationStatusEn: string;
  lastUpdatedDate: string;
  isPublishedTender: boolean;
  isStrategicPartnership: boolean;
}

// -------------------------------------------------------------
// 1. TARGET MARKETS (Priority Tier 1 & Tier 2)
// -------------------------------------------------------------
export const SUSTAINABILITY_TARGET_MARKETS: SustainabilityMarket[] = [
  // Tier 1
  {
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    priority: "tier1",
    classification: "published_opportunities",
    classificationAr: "سوق بفرص استثمارية ومشاريع معلنة",
    classificationEn: "Market with Published Opportunities",
    environmentalNeedsAr: [
      "مشاريع تدوير النفايات البلدية والصناعية ومبادرات صفر نفايات 2035",
      "المنصة الوطنية الرقمية لإدارة النفايات بالشراكة بين القطاعين العام والخاص",
      "كفاءة الطاقة للمجمعات الصناعية وحلول الطاقة الشمسية التجارية والزراعية",
      "معالجة وإعادة تدوير المياه الصناعية والرمادية"
    ],
    environmentalNeedsEn: [
      "Municipal & industrial recycling initiatives and Zero-Waste to Landfill by 2035",
      "National Digital Waste Management Platform PPP Framework",
      "Industrial energy efficiency and Commercial & Industrial solar rooftop systems",
      "Industrial wastewater treatment and greywater reuse"
    ],
    suitableSolutionsAr: [
      "إدارة المخلفات الصلبة والصناعية واسترداد المواد",
      "حلول الطاقة الشمسية الموزعة (C&I Solar) والتدقيق الطاقي",
      "استشارات التقييم البيئي ومراقبة الانبعاثات",
      "شراكات التطوير والتشغيل بنظام PPP / BOT"
    ],
    suitableSolutionsEn: [
      "Solid & industrial waste management and material recovery",
      "Commercial & Industrial (C&I) solar systems and energy audits",
      "Environmental Impact Assessment (EIA) and emissions monitoring",
      "PPP / BOT project development alliances"
    ],
    targetSectorsAr: ["الصناعة والتعدين", "الهيئات البلدية والتطوير العمراني", "المجمعات اللوجستية والزراعية"],
    targetSectorsEn: ["Industry & Mining", "Municipalities & Urban Dev", "Logistics & Agri Hubs"],
    entryChannelsAr: ["منصة استثمر في السعودية (Invest Saudi)", "المركز الوطني لإدارة النفايات (موان MWAN)", "تحالفات الشركات المحلية المرخصة"],
    entryChannelsEn: ["Invest Saudi Portal", "National Waste Management Center (MWAN)", "Licensed Local Joint Ventures"],
    officialSource: "Invest Saudi / National Waste Management Center (MWAN)",
    officialSourceUrl: "https://investsaudi.sa",
    summaryAr: "تتصدر السعودية الفرص الاستثمارية البيئية بفضل رؤية 2030 ومبادرة السعودية الخضراء، مع طرح مشاريع كبرى في معالجة النفايات والتحول الرقمي البيئي وكفاءة الطاقة.",
    summaryEn: "Leading regional green investments under Vision 2030 and Saudi Green Initiative, featuring major PPP tenders in digital waste platforms and clean energy."
  },
  {
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    countryCode: "EG",
    flag: "🇪🇬",
    priority: "tier1",
    classification: "strategic_target",
    classificationAr: "سوق استراتيجي رئيسي للعمليات المباشرة",
    classificationEn: "Strategic Target Market",
    environmentalNeedsAr: [
      "تحويل المخلفات البلدية والزراعية إلى طاقة وبدائل وقود ومخصبات عضوية",
      "تطبيقات قانون تنظيم إدارة المخلفات رقم 202 لسنة 2020",
      "ترشيد استهلاك المياه في المجمعات الصناعية والزراعية الكبرى",
      "تكامل حلول الطاقة المتجددة والهيدروجين الأخضر للأغراض الصناعية"
    ],
    environmentalNeedsEn: [
      "Waste-to-energy, RDF alternative fuels, and organic bio-fertilizer production",
      "Execution of National Waste Management Regulatory Law No. 202/2020",
      "Water optimization in large-scale agro-industrial processing clusters",
      "Renewable energy integration and industrial decarbonization"
    ],
    suitableSolutionsAr: [
      "إدارة المخلفات الصناعية والزراعية وإنتاج بدائل الوقود RDF",
      "معالجة مياه الصرف الصناعي وإعادة الاستخدام في الدوائر المغلقة",
      "محطات الطاقة الشمسية للمصانع والمزارع",
      "الاستشارات البيئية ودراسات تقييم الأثر البيئي (EIA)"
    ],
    suitableSolutionsEn: [
      "Industrial & agri-waste management and RDF alternative fuel processing",
      "Industrial effluent treatment and closed-loop water recycling",
      "Rooftop and ground-mounted solar plants for factories and farms",
      "Environmental Impact Assessment (EIA) and compliance studies"
    ],
    targetSectorsAr: ["الصناعات الغذائية والزراعية", "المناطق الصناعية واللوجستية", "قطاع البناء والتشييد الأخضر"],
    targetSectorsEn: ["Agri-Food Processing", "Industrial & Logistics Zones", "Green Construction"],
    entryChannelsAr: ["جهاز تنظيم إدارة المخلفات (WMRA)", "وزارة البيئة المصرية", "الهيئة العامة للتنمية الصناعية (IDA)"],
    entryChannelsEn: ["Waste Management Regulatory Authority (WMRA)", "Ministry of Environment", "Industrial Development Authority (IDA)"],
    officialSource: "Egyptian Ministry of Environment & WMRA",
    officialSourceUrl: "https://www.eeaa.gov.eg",
    summaryAr: "سوق المقر التشغيلي للمجموعة، يتميز بقاعدة تشريعية محفزة لإدارة المخلفات وحوافز الاستثمار الأخضر في ترشيد الموارد والطاقة النظيفة.",
    summaryEn: "Home operating market with robust legislative framework under Law 202/2020 and active industrial decarbonization programs."
  },
  {
    countryAr: "الإمارات العربية المتحدة",
    countryEn: "United Arab Emirates",
    countryCode: "AE",
    flag: "🇦🇪",
    priority: "tier1",
    classification: "published_opportunities",
    classificationAr: "سوق بفرص استثمارية ومشاريع معلنة",
    classificationEn: "Market with Published Opportunities",
    environmentalNeedsAr: [
      "استراتيجية دبي المتكاملة لإدارة النفايات 2021–2041 وتحويل 100% من النفايات عن المكبات",
      "مشاريع تحويل النفايات إلى طاقة متقدمة واسترداد الموارد الثمينة",
      "مباني وصناعات محايدة الكربون وحلول كفاءة استهلاك الموارد المتقدمة",
      "تقنيات معالجة مياه الصرف الصناعي التناضحية المتقدمة"
    ],
    environmentalNeedsEn: [
      "Dubai Integrated Waste Management Strategy 2021–2041 (100% Landfill Diversion)",
      "Advanced waste-to-energy and high-value circular resource recovery",
      "Net-zero industrial facilities and smart resource-efficiency systems",
      "Advanced membrane and tertiary industrial wastewater recycling"
    ],
    suitableSolutionsAr: [
      "حلول استرداد المواد البلاستيكية والكرتونية والمعادن",
      "أنظمة كفاءة استهلاك الطاقة وإدارة البصمة الكربونية للمصانع",
      "الاستشارات المتقدمة للاستدامة والتصنيف الأخضر",
      "تحالفات عقود الخدمات البيئية للمجمعات التجارية والصناعية"
    ],
    suitableSolutionsEn: [
      "Plastics, cardboard, and metal circular recovery systems",
      "Industrial energy optimization and carbon footprint advisory",
      "Green building compliance and ESG corporate transformation",
      "Facility environmental services alliances for industrial clusters"
    ],
    targetSectorsAr: ["المناطق الحرة والموانئ", "المجمعات الصناعية واللوجستية", "العقارات التجارية الفاخرة"],
    targetSectorsEn: ["Free Zones & Ports", "Industrial & Logistics Hubs", "Commercial Real Estate"],
    entryChannelsAr: ["بلدية دبي / مركز دبي لإدارة النفايات", "وزارة التغير المناخي والبيئة", "موانئ دبي العالمية ومجمعات جافزا"],
    entryChannelsEn: ["Dubai Municipality Waste Management", "MOCCAE", "DP World & Jafza Industrial Clusters"],
    officialSource: "Dubai Integrated Waste Management Strategy / MOCCAE",
    officialSourceUrl: "https://www.dm.gov.ae",
    summaryAr: "بيئة استثمارية رائدة إقليميًا تركز على الاقتصاد الدائري عالي التقنية وتحويل النفايات لطاقة والحياد الكربوني بحلول عام 2050.",
    summaryEn: "Pioneering regional hub driving high-tech circular economy, waste-to-energy, and Net Zero 2050 targets."
  },
  {
    countryAr: "سلطنة عُمان",
    countryEn: "Oman",
    countryCode: "OM",
    flag: "🇴🇲",
    priority: "tier1",
    classification: "strategic_target",
    classificationAr: "سوق استراتيجي مستهدف للمشاريع والشراكات",
    classificationEn: "Strategic Target Market",
    environmentalNeedsAr: [
      "مبادرات الاقتصاد الدائري للشركة العمانية القابضة لخدمات البيئة (بيئة be'ah)",
      "مشاريع الطاقة الشمسية وطاقة الرياح لمجمعات النفط والغاز والصناعات الكيميائية",
      "محطات معالجة مياه الصرف وإعادة استخدام المياه المعالجة للمناطق الصناعية",
      "استرداد الطاقة من المخلفات وإدارة المخلفات الخطرة"
    ],
    environmentalNeedsEn: [
      "Circular economy and industrial waste tenders by be'ah (Oman Environmental Services)",
      "Solar and wind renewable power for industrial and petrochemical complexes",
      "Industrial wastewater treatment and treated effluent reuse by Nama Water Services",
      "Hazardous waste recovery and waste-to-energy development"
    ],
    suitableSolutionsAr: [
      "إدارة المخلفات الصناعية والنفطية المتخصصة",
      "محطات الطاقة النظيفة للعمليات الصناعية",
      "معالجة مياه الصرف الصناعي وإعادة التدوير",
      "شراكات الاستثمار والتنفيذ الهندسي (EPC/BOT)"
    ],
    suitableSolutionsEn: [
      "Specialized industrial & oil-sector waste management",
      "Clean captive power for heavy industrial sites",
      "Industrial effluent treatment and reclamation",
      "EPC / BOT engineering and investment consortiums"
    ],
    targetSectorsAr: ["النفط والغاز والبتروكيماويات", "المناطق الاقتصادية الخاصة (الدقم وصحار)", "المرافق العامة والمياه"],
    targetSectorsEn: ["Oil, Gas & Petrochemicals", "Special Economic Zones (Duqm, Sohar)", "Utilities & Water"],
    entryChannelsAr: ["الشركة العمانية القابضة لخدمات البيئة (بيئة)", "شركة نماء لخدمات المياه", "هيئة تنظيم الاتصالات والمرافق العامة"],
    entryChannelsEn: ["be'ah (Oman Environmental Services Holding)", "Nama Water Services", "Public Authority for Special Economic Zones (OPAZ)"],
    officialSource: "Oman Vision 2040 / be'ah Holding",
    officialSourceUrl: "https://www.oman2040.om",
    summaryAr: "سوق واعد بمشاريع كبرى معلنة في الاقتصاد الدائري وتوليد الطاقة المتجددة في المناطق الاقتصادية الحرة بالدقم وصحار ومسقط.",
    summaryEn: "Fast-growing circular economy ecosystem led by be'ah and Nama Water Services with massive industrial decarbonization pipelines."
  },
  {
    countryAr: "دولة قطر",
    countryEn: "Qatar",
    countryCode: "QA",
    flag: "🇶🇦",
    priority: "tier1",
    classification: "published_opportunities",
    classificationAr: "سوق بفرص استثمارية ومشاريع معلنة",
    classificationEn: "Market with Published Opportunities",
    environmentalNeedsAr: [
      "البرنامج الوطني المتكامل لإدارة النفايات الصلبة ومبادرة تدوير قطر",
      "مشروع مركز إدارة النفايات الصلبة المحلية الثاني بنظام الشراكة (PPP)",
      "بنية تحتية متقدمة لمعالجة مياه الصرف الصناعي ومياه التبريد",
      "كفاءة الطاقة للقطاعات اللوجستية والإنشائية"
    ],
    environmentalNeedsEn: [
      "Integrated National Solid Waste Management Program & Tadweer Qatar initiatives",
      "Second Domestic Solid Waste Management Centre PPP Project",
      "Advanced industrial effluent and district cooling water reclamation",
      "Energy conservation and green building systems"
    ],
    suitableSolutionsAr: [
      "شراكات التطوير والتشغيل لمرافق تدوير النفايات",
      "محطات المعالجة الثلاثية للمياه وإعادة التدوير",
      "حلول استرداد المواد والمخلفات الإنشائية والتجارية",
      "الاستشارات والتدقيق البيئي المعتمد"
    ],
    suitableSolutionsEn: [
      "Waste recovery facility development and O&M partnerships",
      "Tertiary water polishing and recycling systems",
      "Commercial & construction waste valorization",
      "Certified environmental auditing and sustainability frameworks"
    ],
    targetSectorsAr: ["البنية التحتية والمرافق الحكومية", "المدن الصناعية واللوجستية (رأس لفان ومسيعيد)", "المراكز التجارية الكبرى"],
    targetSectorsEn: ["Municipal Utilities", "Industrial Cities (Ras Laffan, Mesaieed)", "Commercial Developments"],
    entryChannelsAr: ["وزارة البلدية (مركز تدوير المخلفات)", "هيئة الأشغال العامة (أشغال Ashghal)", "منصة مناقصات قطر الموحدة"],
    entryChannelsEn: ["Ministry of Municipality (Waste Management Dept)", "Ashghal (Public Works Authority)", "Qatar Procurement Portal"],
    officialSource: "Ministry of Municipality / Ashghal PPP Program",
    officialSourceUrl: "https://www.mme.gov.qa",
    summaryAr: "استثمارات حكومية موثقة في البنية التحتية البيئية تشمل مشاريع PPP كبرى لتدوير النفايات الصلبة والمياه المعالجة.",
    summaryEn: "Solid institutional commitment to waste and water infrastructure with announced multi-hundred-million-dollar PPP tenders."
  },

  // Tier 2
  {
    countryAr: "المملكة المغربية",
    countryEn: "Morocco",
    countryCode: "MA",
    flag: "🇲🇦",
    priority: "tier2",
    classification: "strategic_target",
    classificationAr: "سوق استراتيجي للطاقة النظيفة وتدوير المخلفات",
    classificationEn: "Strategic Target Market",
    environmentalNeedsAr: [
      "مشاريع الطاقة الشمسية والرياح وبرامج الوكالة المغربية للطاقة المستدامة (مازن MASEN)",
      "تثمين المخلفات الزراعية وصناعات عصر الزيتون والتمور لإنتاج الكتلة الحيوية",
      "حلول معالجة مياه الصرف الصناعي وإعادة الاستخدام لمواجهة الإجهاد المائي"
    ],
    environmentalNeedsEn: [
      "Utility and industrial solar/wind projects under MASEN renewable frameworks",
      "Agri-waste valorization (olive pomace, date residues) for biomass and energy",
      "Industrial effluent treatment to combat severe regional water stress"
    ],
    suitableSolutionsAr: [
      "محطات معالجة الصرف الصناعي والزراعي",
      "أنظمة تدوير المخلفات العضوية وتحويلها إلى وقود حيوي",
      "حلول الطاقة الشمسية للقطاعين الصناعي والزراعي"
    ],
    suitableSolutionsEn: [
      "Industrial and agro-processing wastewater treatment",
      "Biomass and organic residue pelletization/fuel recovery",
      "Commercial & agricultural solar PV installations"
    ],
    targetSectorsAr: ["الصناعات الغذائية والفلاحية", "المناطق الصناعية (طنجة والدار البيضاء)", "قطاع التعدين والفوسفات"],
    targetSectorsEn: ["Agri-Food & Farming", "Industrial Hubs (Tangier, Casablanca)", "Mining & Phosphates"],
    entryChannelsAr: ["الوكالة المغربية للطاقة المستدامة (مازن MASEN)", "المكتب الوطني للماء والكهرباء (ONEE)", "الشركاء الصناعيون المحليون"],
    entryChannelsEn: ["MASEN", "ONEE (Water & Electricity)", "Local Industrial Alliances"],
    officialSource: "MASEN / Ministry of Energy Transition",
    officialSourceUrl: "https://www.masen.ma",
    summaryAr: "رائد إقليمي في الطاقة المتجددة، يوفر فرصًا واعدة في تثمين المخلفات الزراعية ومعالجة مياه الصرف الصناعي.",
    summaryEn: "Regional pioneer in clean power offering high potential in agricultural waste valorization and industrial water reuse."
  },
  {
    countryAr: "المملكة الأردنية الهاشمية",
    countryEn: "Jordan",
    countryCode: "JO",
    flag: "🇯🇴",
    priority: "tier2",
    classification: "local_partnerships",
    classificationAr: "سوق يتطلب تحالفات وشراكات محلية",
    classificationEn: "Markets Requiring Local Partnerships",
    environmentalNeedsAr: [
      "إدارة كفاءة المياه ومعالجة المياه الصناعية في ظل شح الموارد المائية الحاد",
      "تطبيقات الطاقة المتجددة للمصانع والمنشآت التجارية لتقليل كلفة الكهرباء",
      "إدارة المخلفات الصلبة والصناعية واسترداد المواد"
    ],
    environmentalNeedsEn: [
      "Severe water-stress mitigation and high-efficiency industrial water recycling",
      "Captive solar and energy optimization to offset elevated grid electricity tariffs",
      "Industrial and municipal solid waste recycling systems"
    ],
    suitableSolutionsAr: [
      "محطات إعادة تدوير المياه الصناعية ذات الكفاءة العالية",
      "أنظمة الطاقة الشمسية فوق أسطح المصانع",
      "الاستشارات البيئية ودراسات ترشيد استهلاك الموارد"
    ],
    suitableSolutionsEn: [
      "High-recovery industrial wastewater treatment and recycling",
      "Commercial & Industrial rooftop solar arrays",
      "Resource efficiency audits and cleaner production consulting"
    ],
    targetSectorsAr: ["المدن الصناعية (سحاب والزرقاء)", "القطاع الدوائي والغذائي", "الزراعة المحمية"],
    targetSectorsEn: ["Industrial Estates (Sahab, Zarqa)", "Pharma & Food Processing", "Protected Agriculture"],
    entryChannelsAr: ["وزارة البيئة الأردنية", "شركة المدن الصناعية الأردنية", "تحالفات الموزعين والمقاولين المعتمدين"],
    entryChannelsEn: ["Ministry of Environment", "Jordan Industrial Ports / Estates", "Local Certified Contractors"],
    officialSource: "Ministry of Environment / Water Authority of Jordan",
    officialSourceUrl: "https://moenv.gov.jo",
    summaryAr: "فرص تركز على الكفاءة القصوى لاستهلاك المياه والطاقة الشمسية لخفض تكاليف التشغيل الصناعي.",
    summaryEn: "Focus on industrial water recycling and solar PV to counter extreme water scarcity and high energy tariffs."
  },
  {
    countryAr: "جمهورية كينيا",
    countryEn: "Kenya",
    countryCode: "KE",
    flag: "🇰🇪",
    priority: "tier2",
    classification: "emerging",
    classificationAr: "سوق صاعد ذو استثمارات خضراء دولية",
    classificationEn: "Emerging Market",
    environmentalNeedsAr: [
      "البنية التحتية لمعالجة وتوزيع المياه للمجمعات السكنية والصناعية",
      "شبكات الطاقة الشمسية المصغرة (Mini-Grids) وأنظمة الطاقة الشمسية التجارية",
      "إدارة وتدوير المخلفات البلدية والبلاستيكية وحظر البلاستيك أحادي الاستخدام",
      "مشاريع الاقتصاد الدائري الممولة من مؤسسات التمويل التنموي الدولية"
    ],
    environmentalNeedsEn: [
      "Potable water supply and industrial water treatment infrastructure",
      "Solar mini-grids and commercial captive solar systems",
      "Municipal and plastics recycling enforcing single-use plastic restrictions",
      "Development Finance Institution (DFI)-backed circular economy projects"
    ],
    suitableSolutionsAr: [
      "أنظمة معالجة وتنقية المياه المدمجة",
      "حلول تدوير البلاستيك والمخلفات الزراعية",
      "شراكات الاستثمار في الطاقة المتجددة وحلول خارج الشبكة (Off-Grid)"
    ],
    suitableSolutionsEn: [
      "Modular potable and industrial water purification systems",
      "Plastics and agricultural residue circular processing",
      "Solar off-grid and distributed generation consortiums"
    ],
    targetSectorsAr: ["الصناعات التحويلية والزراعية", "المراكز اللوجستية في نيروبي ومومباسا", "المجتمعات الحضرية والريفية"],
    targetSectorsEn: ["Manufacturing & Agro-Processing", "Logistics Hubs (Nairobi, Mombasa)", "Urban & Peri-Urban Communities"],
    entryChannelsAr: ["هيئة الإدارة البيئية الوطنية (NEMA Kenya)", "هيئة كينيا للاستثمار (KenInvest)", "تحالفات التمويل المناخي الإفريقي"],
    entryChannelsEn: ["NEMA Kenya", "KenInvest", "African Climate Finance Partnerships"],
    officialSource: "National Environment Management Authority (NEMA) / KenInvest",
    officialSourceUrl: "https://www.nema.go.ke",
    summaryAr: "بوابة شرق إفريقيا للتمويل الأخضر، تشهد إقبالاً دوليًا واسعًا على استثمارات المياه والتدوير والطاقة الشمسية.",
    summaryEn: "East Africa green growth hub with major DFI funding for clean water, mini-grids, and circular plastics."
  },
  {
    countryAr: "جمهورية رواندا",
    countryEn: "Rwanda",
    countryCode: "RW",
    flag: "🇷🇼",
    priority: "tier2",
    classification: "emerging",
    classificationAr: "سوق صاعد ذو سياسات بيئية رائدة",
    classificationEn: "Emerging Market",
    environmentalNeedsAr: [
      "الاستراتيجية الوطنية للنمو الأخضر والتحول المناخي (FONERWA)",
      "البنية التحتية لإدارة وتدوير المخلفات الإلكترونية والصلبة في كيغالي",
      "ترشيد وحماية الموارد المائية ومعالجة الصرف الصحي اللامركزي",
      "حلول البناء المستدام وكفاءة الطاقة للمباني الخضراء"
    ],
    environmentalNeedsEn: [
      "National Strategy on Green Growth and Climate Resilience (FONERWA fund)",
      "E-waste and municipal solid waste sorting infrastructure in Kigali",
      "Decentralized wastewater management and watershed protection",
      "Green building construction materials and resource efficiency"
    ],
    suitableSolutionsAr: [
      "حلول تدوير المخلفات الإلكترونية والصناعية",
      "محطات معالجة الصرف المدمجة",
      "استشارات التحول الأخضر وإدارة البصمة الكربونية"
    ],
    suitableSolutionsEn: [
      "E-waste and industrial waste recovery solutions",
      "Packaged decentralized wastewater treatment plants",
      "Carbon accounting and green certification advisory"
    ],
    targetSectorsAr: ["المنطقة الاقتصادية الخاصة بكيغالي", "المرافق العامة الحضرية", "القطاع الفندقي والتجاري"],
    targetSectorsEn: ["Kigali Special Economic Zone", "Urban Municipal Utilities", "Hospitality & Commercial"],
    entryChannelsAr: ["مجلس التنمية الرواندي (RDB)", "صندوق رواندا الأخضر (FONERWA)", "هيئة إدارة البيئة الرواندية (REMA)"],
    entryChannelsEn: ["Rwanda Development Board (RDB)", "FONERWA Green Fund", "REMA"],
    officialSource: "Rwanda Environment Management Authority (REMA) / RDB",
    officialSourceUrl: "https://www.rema.gov.rw",
    summaryAr: "أنظف وأكثر الأسواق الإفريقية انضباطًا تنظيميًا، وتوفر حوافز قوية للاستثمارات في الاقتصاد الدائري وحماية الموارد.",
    summaryEn: "Africa's most progressive regulatory framework for sustainability with direct green-fund co-financing."
  },
  {
    countryAr: "جمهورية جنوب إفريقيا",
    countryEn: "South Africa",
    countryCode: "ZA",
    flag: "🇿🇦",
    priority: "tier2",
    classification: "published_opportunities",
    classificationAr: "سوق بفرص استثمارية ومشاريع معلنة",
    classificationEn: "Market with Published Opportunities",
    environmentalNeedsAr: [
      "التحول العادل للطاقة (JETP) واستبدال محطات الفحم بالطاقة الشمسية والرياح",
      "حلول كفاءة الطاقة للمصانع والمناجم الكبرى لتفادي انقطاعات الكهرباء",
      "معالجة مياه الصرف الصناعي وإعادة استخدام مياه المناجم المعالجة",
      "إدارة المخلفات الخطرة وتدوير المعادن والمخلفات الإلكترونية"
    ],
    environmentalNeedsEn: [
      "Just Energy Transition Partnership (JETP) replacing coal with solar/wind",
      "Captive solar PV for energy security in heavy manufacturing and mining",
      "Acid mine drainage treatment and industrial effluent recycling",
      "Hazardous waste management and high-grade metal recycling"
    ],
    suitableSolutionsAr: [
      "محطات الطاقة الشمسية الخاصة بالمصانع والمناجم",
      "حلول معالجة المياه الصناعية المتقدمة",
      "استرداد وتدوير المعادن والمخلفات الصناعية"
    ],
    suitableSolutionsEn: [
      "Utility & captive industrial solar power stations",
      "Advanced industrial water recycling and zero-liquid discharge",
      "Metals and high-value industrial by-product reclamation"
    ],
    targetSectorsAr: ["التعدين والصناعات الثقيلة", "مرافق الكهرباء والمياه", "التطوير الصناعي في خاوتينغ وكوازولو ناتال"],
    targetSectorsEn: ["Mining & Heavy Industry", "Electric Utilities & Municipalities", "Industrial Clusters (Gauteng, KZN)"],
    entryChannelsAr: ["هيئة منتجي الطاقة المستقلين (IPP Office)", "وكالة الاستثمار في جنوب إفريقيا (InvestSA)", "الشركاء المحليون المعتمدون (B-BBEE)"],
    entryChannelsEn: ["IPP Office (DMRE)", "InvestSA", "Certified Local B-BBEE Joint Ventures"],
    officialSource: "Department of Mineral Resources & Energy (DMRE) / JETP",
    officialSourceUrl: "https://www.energy.gov.za",
    summaryAr: "أكبر سوق صناعي في إفريقيا يشهد تحولاً ضخمًا بمليارات الدولارات نحو الطاقة النظيفة ومعالجة المياه الصناعية.",
    summaryEn: "Africa's largest industrial market undergoing multi-billion-dollar green transition under JETP."
  },
  {
    countryAr: "جمهورية تنزانيا الاتحادية",
    countryEn: "Tanzania",
    countryCode: "TZ",
    flag: "🇹🇿",
    priority: "tier2",
    classification: "emerging",
    classificationAr: "سوق صاعد ذو مشاريع بنية تحتية نشطة",
    classificationEn: "Emerging Market",
    environmentalNeedsAr: [
      "مشاريع إمدادات المياه ومعالجة مياه الصرف في دار السلام والموانئ",
      "تطبيقات الطاقة الشمسية اللامركزية للمجتمعات الزراعية والمناطق الصناعية",
      "إدارة وتدوير المخلفات الصلبة البلدية والزراعية"
    ],
    environmentalNeedsEn: [
      "Potable water supply and wastewater treatment in Dar es Salaam and ports",
      "Decentralized commercial solar systems for agro-industries",
      "Solid waste sorting and agro-industrial byproduct valorization"
    ],
    suitableSolutionsAr: [
      "محطات معالجة المياه المدمجة والصناعية",
      "مشاريع الطاقة الشمسية للقطاع التجاري والزراعي",
      "حلول إدارة المخلفات العضوية والزراعية"
    ],
    suitableSolutionsEn: [
      "Packaged and industrial water filtration plants",
      "Commercial solar installations for agricultural processing",
      "Organic and agricultural residue recovery"
    ],
    targetSectorsAr: ["الموانئ والمناطق الحرة", "الصناعات الزراعية والغذائية", "مرافق البلديات"],
    targetSectorsEn: ["Ports & Free Zones", "Agro-Processing & Food", "Municipal Services"],
    entryChannelsAr: ["المركز التنزاني للاستثمار (TIC)", "الهيئة الوطنية للإدارة البيئية (NEMC)", "شركاء التوزيع والمقاولات في دار السلام"],
    entryChannelsEn: ["Tanzania Investment Centre (TIC)", "NEMC", "Local Commercial Partners"],
    officialSource: "National Environment Management Council (NEMC) / TIC",
    officialSourceUrl: "https://www.tic.go.tz",
    summaryAr: "نمو اقتصادي قوي واستثمارات متزايدة في البنية التحتية للمياه والطاقة الشمسية التجارية والمناطق اللوجستية.",
    summaryEn: "Rapidly expanding economy driving key infrastructure upgrades in water, port logistics, and commercial solar."
  },
  {
    countryAr: "الجمهورية الجزائرية الديمقراطية الشعبية",
    countryEn: "Algeria",
    countryCode: "DZ",
    flag: "🇩🇿",
    priority: "tier2",
    classification: "strategic_target",
    classificationAr: "سوق استراتيجي مستهدف لبرامج الطاقة والتدوير",
    classificationEn: "Strategic Target Market",
    environmentalNeedsAr: [
      "البرنامج الوطني للطاقات المتجددة وكفاءة الطاقة (طاقة شمسية صناعية)",
      "معالجة المياه وإعادة استخدام المياه الصناعية في المناطق الشمالية والجنوبية",
      "إدارة وتثمين المخلفات الصناعية والبلدية ومخلفات قطاع المحروقات"
    ],
    environmentalNeedsEn: [
      "National Renewable Energy and Energy Efficiency Program (Industrial Solar PV)",
      "Industrial effluent treatment and desalination for water-stressed regions",
      "Industrial, municipal, and hydrocarbon residue waste valorization"
    ],
    suitableSolutionsAr: [
      "محطات الطاقة الشمسية الكهروضوئية الموزعة",
      "أنظمة معالجة مياه الصرف الصناعي للمجمعات الإنتاجية",
      "استشارات إدارة المخلفات وإعادة التدوير"
    ],
    suitableSolutionsEn: [
      "Distributed industrial solar PV generation",
      "Industrial effluent recovery and water recycling plants",
      "Waste management consulting and industrial circularity"
    ],
    targetSectorsAr: ["المجمعات الصناعية والتحويلية", "قطاع الطاقة والغاز", "الزراعة الصحراوية المتقدمة"],
    targetSectorsEn: ["Manufacturing Clusters", "Energy & Hydrocarbons", "Desert Agriculture"],
    entryChannelsAr: ["الوكالة الوطنية لترقية الاستثمار (AAPI)", "الوكالة الوطنية للنفايات (AND)", "الشركاء والشركات العمومية المحلية"],
    entryChannelsEn: ["AAPI (Investment Promotion Agency)", "National Waste Agency (AND)", "Local Industrial Consortiums"],
    officialSource: "National Waste Agency (AND) / Ministry of Environment",
    officialSourceUrl: "https://and.dz",
    summaryAr: "برامج وطنية طموحة في الطاقة المتجددة ومعالجة المياه مع التركيز على تقليل الهدر وحماية الموارد الطبيعية.",
    summaryEn: "Large domestic market with nationwide programs in solar power development and industrial waste management."
  },
  {
    countryAr: "الجمهورية التونسية",
    countryEn: "Tunisia",
    countryCode: "TN",
    flag: "🇹🇳",
    priority: "tier2",
    classification: "local_partnerships",
    classificationAr: "سوق يتطلب تحالفات وشراكات محلية",
    classificationEn: "Markets Requiring Local Partnerships",
    environmentalNeedsAr: [
      "كفاءة الطاقة وأنظمة الطاقة الشمسية للقطاع الصناعي التصديري للامتثال لضريبة الكربون الأوروبية (CBAM)",
      "إدارة المخلفات الصناعية والمنزلية ومكبات النفايات الصحية المراقبة",
      "معالجة مياه الصرف الصناعي وإعادة الاستخدام في ري المساحات والزراعة الصناعية"
    ],
    environmentalNeedsEn: [
      "Energy efficiency and solar PV for exporting industries to comply with EU CBAM",
      "Industrial and municipal solid waste recycling and sanitary landfill management",
      "Industrial wastewater treatment and non-potable agricultural reuse"
    ],
    suitableSolutionsAr: [
      "حلول كفاءة الطاقة وتخفيض البصمة الكربونية للمصانع المصدرة لأوروبا",
      "محطات معالجة الصرف الصناعي",
      "أنظمة تدوير المخلفات واسترداد الموارد"
    ],
    suitableSolutionsEn: [
      "Industrial energy optimization & CBAM carbon compliance advisory",
      "Industrial wastewater treatment facilities",
      "Circular waste sorting and secondary materials recovery"
    ],
    targetSectorsAr: ["صناعات النسيج والصناعات الميكانيكية والإلكترونية", "الصناعات الغذائية (زيت الزيتون والتمور)", "المناطق الصناعية الحرة"],
    targetSectorsEn: ["Textiles & Mechanical Components", "Agri-Food (Olive Oil, Dates)", "Industrial Export Zones"],
    entryChannelsAr: ["الوكالة الوطنية للتحكم في الطاقة (ANME)", "الوكالة الوطنية لحماية المحيط (ANPE)", "الشركاء الصناعيون المحليون"],
    entryChannelsEn: ["ANME (National Energy Management)", "ANPE (Environmental Protection)", "Local Export Manufacturers"],
    officialSource: "National Agency for Energy Management (ANME) / ANPE",
    officialSourceUrl: "https://www.anme.tn",
    summaryAr: "فرص ملحة للمصانع التصديرية للامتثال للمعايير الأوروبية للكربون ومعالجة مياه الصرف الصناعي وإدارة المخلفات.",
    summaryEn: "Strong export-driven demand for industrial energy efficiency, EU CBAM carbon compliance, and wastewater recovery."
  }
];

// -------------------------------------------------------------
// 2. SERVICES & SOLUTIONS PORTFOLIO (6 Categories A to F)
// -------------------------------------------------------------
export const SUSTAINABILITY_SOLUTIONS_PORTFOLIO: SustainabilitySolutionCategory[] = [
  {
    categoryKey: "renewable_energy",
    categoryNameAr: "الطاقة المتجددة والحلول النظيفة",
    categoryNameEn: "Renewable Energy & Clean Solutions",
    categoryTaglineAr: "محطات الطاقة الشمسية، ترشيد استهلاك الكهرباء، وتحسين كفاءة الطاقة الصناعية",
    categoryTaglineEn: "Solar PV installations, energy efficiency systems, and industrial energy optimization",
    iconName: "Sun",
    services: [
      {
        id: "SOL-RE-01",
        nameAr: "مشاريع الطاقة الشمسية للمنشآت التجارية والصناعية (C&I Solar)",
        nameEn: "Commercial & Industrial (C&I) Solar PV Projects",
        descriptionAr: "تصميم وتوريد وتركيب محطات الطاقة الشمسية الكهروضوئية على أسطح المصانع والمستودعات والمزارع لتقليل تكلفة الطاقة والبصمة الكربونية.",
        descriptionEn: "Turnkey engineering, procurement, and construction of rooftop and ground-mounted solar PV systems for factories, warehouses, and agricultural facilities.",
        deliveryModel: "technical_partner",
        deliveryModelAr: "تنفيذ عبر تحالف هندسي وتقني معتمد",
        deliveryModelEn: "Delivered via Certified Technical Consortium",
        keyApplicationsAr: "مصانع الأغذية، مصانع الملابس، المجمعات اللوجستية، والمزارع الكبرى",
        keyApplicationsEn: "Food processing plants, garment mills, logistics hubs, and commercial farms"
      },
      {
        id: "SOL-RE-02",
        nameAr: "حلول الطاقة النظيفة والتوليد الهجين",
        nameEn: "Clean Energy Solutions & Hybrid Generation",
        descriptionAr: "أنظمة التوليد الهجين التي تجمع بين الطاقة الشمسية والديزل وبطاريات التخزين (BESS) للمواقع الصناعية والنائية.",
        descriptionEn: "Hybrid generation architectures combining solar PV, diesel generators, and battery energy storage systems (BESS) for remote and off-grid industrial operations.",
        deliveryModel: "under_development",
        deliveryModelAr: "فرصة استثمارية قيد التطوير المشترك",
        deliveryModelEn: "Investment Opportunity Under Co-Development",
        keyApplicationsAr: "المواقع الزراعية المعزولة، محطات الضخ، والمناطق الصناعية الناشئة",
        keyApplicationsEn: "Isolated agricultural projects, remote pumping stations, and emerging industrial zones"
      },
      {
        id: "SOL-RE-03",
        nameAr: "أنظمة كفاءة الطاقة والتدقيق الحراري والكهربائي",
        nameEn: "Energy Efficiency Systems & Industrial Audits",
        descriptionAr: "إجراء فحوصات وتدقيق طاقي شامل للمعدات الصناعية، محركات التشغيل، وأنظمة التبريد والبخار لتحديد فرص الترشيد وخفض الفاقد.",
        descriptionEn: "Comprehensive Level 2 & Level 3 industrial energy audits across motors, compressors, chillers, and steam systems to eliminate waste and optimize power usage.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "مصانع الغزل والنسيج، خطوط التبريد الغذائي، ومجمعات الصناعات الثقيلة",
        keyApplicationsEn: "Textile & spinning mills, cold storage chains, and heavy manufacturing"
      },
      {
        id: "SOL-RE-04",
        nameAr: "تحسين كفاءة الطاقة الصناعية واسترداد الحرارة المفقودة",
        nameEn: "Industrial Energy Optimization & Waste Heat Recovery",
        descriptionAr: "تصميم أنظمة استرداد الحرارة العادمة من المداخن والمولدات لإعادة استخدامها في عمليات التسخين والتجفيف الصناعي.",
        descriptionEn: "Waste heat recovery systems capturing thermal energy from industrial exhaust flues and generators for process heating, water pre-heating, and drying.",
        deliveryModel: "technical_partner",
        deliveryModelAr: "تنفيذ عبر تحالف هندسي وتقني معتمد",
        deliveryModelEn: "Delivered via Certified Technical Consortium",
        keyApplicationsAr: "صباغة المنسوجات، أفران التجفيف الغذائي، ومصانع الكيماويات ومواد البناء",
        keyApplicationsEn: "Textile finishing, commercial food drying, chemical and building materials plants"
      }
    ]
  },
  {
    categoryKey: "waste_circular",
    categoryNameAr: "إدارة المخلفات والاقتصاد الدائري",
    categoryNameEn: "Waste Management & Circular Economy",
    categoryTaglineAr: "إدارة وتدوير المخلفات الصناعية والزراعية، استرداد المواد، وإنتاج بدائل الوقود والموارد",
    categoryTaglineEn: "Industrial & agri-waste management, materials recovery, and waste-to-resource valorization",
    iconName: "Recycle",
    services: [
      {
        id: "SOL-WM-01",
        nameAr: "إدارة المخلفات الصناعية غير الخطرة للمصانع",
        nameEn: "Industrial Non-Hazardous Waste Management",
        descriptionAr: "حلول تعاقدية متكاملة لجمع، وفرز، وتوثيق المخلفات الصناعية الناتجة عن خطوط الإنتاج والامتثال لمتطلبات القوانين البيئية الوطنية.",
        descriptionEn: "Integrated contracted management for source-segregation, collection, and compliant manifest documentation of non-hazardous industrial solid wastes.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "المناطق الصناعية، مصانع الألبسة الجاهزة، وشركات التعبئة والتغليف",
        keyApplicationsEn: "Industrial zones, garment & textile factories, packaging and assembly plants"
      },
      {
        id: "SOL-WM-02",
        nameAr: "إدارة المخلفات التجارية والمجمعات اللوجستية",
        nameEn: "Commercial & Logistics Waste Management",
        descriptionAr: "أنظمة الفرز والتفريغ وضغط المخلفات الكرتونية والبلاستيكية والخشبية في المراكز التجارية الكبرى والمستودعات.",
        descriptionEn: "Dedicated on-site baling, compaction, and systematic collection of corrugated cardboard, stretch film, and wooden pallets for commercial hubs.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "المراكز اللوجستية، سلاسل التجزئة الكبرى، ومجمعات التوزيع المركزية",
        keyApplicationsEn: "Logistics parks, retail fulfillment centers, and distribution warehouses"
      },
      {
        id: "SOL-WM-03",
        nameAr: "منظومات فرز المخلفات واسترداد المواد القابلة للتدوير",
        nameEn: "Waste Sorting & Materials Recovery Facilities (MRF)",
        descriptionAr: "تطوير وتشغيل خطوط فرز المواد واسترداد البلاستيك (PET / HDPE)، الكرتون والمعادن لإعادة إدخالها في سلاسل الإمداد التصنيعية.",
        descriptionEn: "Engineering and operating mechanical Materials Recovery Facilities (MRF) reclaiming PET, HDPE, OCC cardboard, and scrap metals into manufacturing supply chains.",
        deliveryModel: "under_development",
        deliveryModelAr: "فرصة استثمارية قيد التطوير المشترك",
        deliveryModelEn: "Investment Opportunity Under Co-Development",
        keyApplicationsAr: "مجمعات تدوير النفايات البلدية، المدن الصناعية، وشركات إعادة التدوير",
        keyApplicationsEn: "Municipal recycling complexes, eco-industrial parks, and secondary processors"
      },
      {
        id: "SOL-WM-04",
        nameAr: "تثمين المخلفات الزراعية والعضوية وإنتاج الوقود والكمبوست",
        nameEn: "Agricultural & Organic Waste Valorization",
        descriptionAr: "معالجة مخلفات النخيل والتمور والمحاصيل الزراعية لتحويلها إلى مخصبات عضوية عالية الجودة وأعلاف ووقود حيوي بديل.",
        descriptionEn: "Upcycling date palm residues, pruning waste, and agri-food organic byproducts into high-grade compost, animal feed, and biomass fuel pellets.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "مزارع النخيل ومصانع التمور، معاصر الزيتون، ومحطات الحاصلات الزراعية",
        keyApplicationsEn: "Date palm orchards & packaging plants, olive mills, and agricultural packing stations"
      },
      {
        id: "SOL-WM-05",
        nameAr: "فرص تحويل المخلفات إلى موارد وطاقة بديلة (Waste-to-Resource / RDF)",
        nameEn: "Waste-to-Resource & Refuse-Derived Fuel (RDF)",
        descriptionAr: "إنتاج الوقود البديل المشتق من المرفوضات الصناعية والتجارية غير القابلة لإعادة التدوير لاستخدامه في أفران مصانع الأسمنت والصناعات الثقيلة.",
        descriptionEn: "Processing non-recyclable high-calorific commercial residues into Refuse-Derived Fuel (RDF) conforming to cement kiln and heavy industrial specifications.",
        deliveryModel: "technical_partner",
        deliveryModelAr: "تنفيذ عبر تحالف هندسي وتقني معتمد",
        deliveryModelEn: "Delivered via Certified Technical Consortium",
        keyApplicationsAr: "أفران الأسمنت، مصانع الأسمدة، ومحطات المعالجة الحرارية المعتمدة",
        keyApplicationsEn: "Cement kilns, fertilizer plants, and authorized thermal recovery units"
      }
    ]
  },
  {
    categoryKey: "water_resources",
    categoryNameAr: "المياه وإدارة الموارد المائية",
    categoryNameEn: "Water & Resource Management",
    categoryTaglineAr: "ترشيد استهلاك المياه، معالجة الصرف الصناعي، وإعادة استخدام المياه في الدوائر المغلقة",
    categoryTaglineEn: "Water optimization, industrial effluent treatment, and closed-loop process water recycling",
    iconName: "Droplets",
    services: [
      {
        id: "SOL-WR-01",
        nameAr: "ترشيد وكفاءة استهلاك المياه في المجمعات الصناعية",
        nameEn: "Industrial Water Consumption Optimization",
        descriptionAr: "تدقيق تدفقات المياه داخل المصانع، وتركيب أنظمة القياس الذكية، وتحديد نقاط الهدر لإعادة موازنة استهلاك المياه التشغيلية.",
        descriptionEn: "Plant-wide water balance audits, telemetry metering, and process flow re-engineering to reduce freshwater intake across industrial operations.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "مصانع النسيج والصباغة، مصانع الأغذية والمشروبات، والمزارع الكبرى",
        keyApplicationsEn: "Textile dyeing mills, food & beverage processing, and commercial farming"
      },
      {
        id: "SOL-WR-02",
        nameAr: "محطات معالجة مياه الصرف الصناعي (ETP / WWTP)",
        nameEn: "Industrial Effluent Treatment Plants (ETP)",
        descriptionAr: "تصميم وتنفيذ وتشغيل محطات معالجة الصرف الصناعي الكيميائية والبيولوجية للامتثال للمعايير البيئية الصارمة قبل الصرف أو إعادة الاستخدام.",
        descriptionEn: "Turnkey design, supply, and commissioning of physical-chemical and biological Effluent Treatment Plants (ETP) meeting environmental discharge limits.",
        deliveryModel: "technical_partner",
        deliveryModelAr: "تنفيذ عبر تحالف هندسي وتقني معتمد",
        deliveryModelEn: "Delivered via Certified Technical Consortium",
        keyApplicationsAr: "مصانع الصباغة والتشطيب، مسالخ الدواجن، والمدابغ، ومصانع الألبان",
        keyApplicationsEn: "Textile finishing, food processing, tanneries, and dairy manufacturing"
      },
      {
        id: "SOL-WR-03",
        nameAr: "أنظمة إعادة تدوير المياه والتصريف السائل الصفري (ZLD)",
        nameEn: "Water Reuse & Zero Liquid Discharge (ZLD)",
        descriptionAr: "تطبيقات التناضح العكسي (RO) والفصل الغشائي لإعادة تدوير حتى 95% من مياه الغسيل والتصنيع لاستخدامها مجددًا في خطوط الإنتاج.",
        descriptionEn: "Advanced membrane recovery (UF/RO) and thermal concentration systems achieving up to 95% process water recovery and near Zero Liquid Discharge.",
        deliveryModel: "technical_partner",
        deliveryModelAr: "تنفيذ عبر تحالف هندسي وتقني معتمد",
        deliveryModelEn: "Delivered via Certified Technical Consortium",
        keyApplicationsAr: "صناعات النسيج الدائرية، الكيماويات المتخصصة، والمجمعات الصناعية المقيدة بالمياه",
        keyApplicationsEn: "Closed-loop textile mills, chemical manufacturing, and water-stressed clusters"
      },
      {
        id: "SOL-WR-04",
        nameAr: "حلول الري الذكي وترشيد استهلاك المياه الزراعية",
        nameEn: "Precision Irrigation & Agricultural Water Efficiency",
        descriptionAr: "أنظمة الري بالتنقيط المحكوم بالحساسات والرطوبة الأرضية لمزارع النخيل والزيتون والمحاصيل التصديرية.",
        descriptionEn: "Sensor-based precision drip irrigation, automated soil moisture telemetry, and pressure-regulated delivery for date palm and olive plantations.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "مزارع النخيل والزيتون، مشاريع الزراعة المحمية، واستصلاح الأراضي الصحراوية",
        keyApplicationsEn: "Date and olive groves, greenhouse complexes, and desert land reclamation"
      }
    ]
  },
  {
    categoryKey: "industrial_sustainability",
    categoryNameAr: "الاستدامة الصناعية والإنتاج الأنظف",
    categoryNameEn: "Industrial Sustainability & Cleaner Production",
    categoryTaglineAr: "تقييم استهلاك الموارد، تقليل الفاقد، ورفع الكفاءة التشغيلية للمصانع",
    categoryTaglineEn: "Resource consumption benchmarking, waste minimization, and operational eco-efficiency",
    iconName: "Factory",
    services: [
      {
        id: "SOL-IS-01",
        nameAr: "تقييم ومطابقة استهلاك الموارد الصناعية",
        nameEn: "Industrial Resource Consumption Benchmarking",
        descriptionAr: "مقارنة معدلات استهلاك المواد الخام والمياه والطاقة في خطوط الإنتاج مع المؤشرات القياسية العالمية لتحديد الهدر التشغيلي.",
        descriptionEn: "Diagnostic benchmarking of raw materials, energy, and water intensity per unit produced against international best-available-techniques (BAT).",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "مصانع الملابس والنسيج، خطوط تصنيع الأغذية، ومصانع الكرتون والتعبئة",
        keyApplicationsEn: "Garment manufacturing, food processing lines, packaging production"
      },
      {
        id: "SOL-IS-02",
        nameAr: "برامج تقليل الهدر والإنتاج الخالي من الفواقد (Lean & Green)",
        nameEn: "Waste Minimization & Lean-Green Programs",
        descriptionAr: "تطبيق أدوات كايزن والإنتاج الرشيق الموجه للاستدامة لتقليص فاقد الأقمشة، تقليل تالف الأغذية، وإلغاء العمليات المسببة للانبعاثات.",
        descriptionEn: "Deploying Lean-Green toolkits to eliminate fabric cut-waste, food processing spoilage, and non-value-added emission-generating steps.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "خطوط تفصيل وخياطة الملابس، مصانع فرز وتعبئة التمور، ومصانع البلاستيك",
        keyApplicationsEn: "Garment sewing floors, date sorting & packaging facilities, plastic molders"
      },
      {
        id: "SOL-IS-03",
        nameAr: "حلول الاستدامة والامتثال لسلاسل الإمداد العالمية (Higg Index & ZDHC)",
        nameEn: "Supply Chain Environmental Compliance (Higg / ZDHC / ESG)",
        descriptionAr: "مساعدة المصانع الوطنية على استيفاء متطلبات الاستدامة لبروتوكول Higg FEM ومبادرة ZDHC للتخلص من الكيماويات الخطرة في سلاسل التوريد.",
        descriptionEn: "Guiding manufacturing facilities to achieve top-tier performance on the Higg Facility Environmental Module (FEM) and ZDHC chemical discharge compliance.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "المصانع المصدرة للأسواق الأوروبية والأمريكية، مصابغ الأقمشة، ومصانع الأغذية",
        keyApplicationsEn: "Export-oriented garment and food manufacturers supplying EU and US retailers"
      }
    ]
  },
  {
    categoryKey: "environmental_consulting",
    categoryNameAr: "الاستشارات البيئية ودراسات الاستدامة",
    categoryNameEn: "Environmental Consulting & Advisory",
    categoryTaglineAr: "دراسات تقييم الأثر البيئي، قياس البصمة الكربونية، وخطط التحول المستدام",
    categoryTaglineEn: "Environmental Impact Assessment (EIA), carbon accounting, and corporate transition planning",
    iconName: "FileCheck2",
    services: [
      {
        id: "SOL-EC-01",
        nameAr: "دراسات تقييم الأثر البيئي والاجتماعي (EIA / ESIA)",
        nameEn: "Environmental & Social Impact Assessments (ESIA)",
        descriptionAr: "إعداد دراسات الأثر البيئي الفئة (أ، ب، ج) للحصول على الموافقات الرسمية من وزارات البيئة والجهات المانحة للمشاريع الصناعية والعقارية.",
        descriptionEn: "Comprehensive Category A, B, and C environmental and social impact assessments required for ministerial permitting and international project financing.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "المصانع الجديدة، المجمعات اللوجستية، والمشاريع العقارية والسياحية الكبرى",
        keyApplicationsEn: "Greenfield industrial projects, logistics parks, and major real estate developments"
      },
      {
        id: "SOL-EC-02",
        nameAr: "حساب البصمة الكربونية وخطط إزالة الكربون (Scope 1, 2, 3)",
        nameEn: "Carbon Footprint Accounting & Decarbonization Plans",
        descriptionAr: "حساب انبعاثات الغازات الدفيئة وفق بروتوكول GHG العالمي، ووضع خطط عملية تدريجية للوصول إلى الحياد الكربوني وخفض تكاليف ضريبة CBAM.",
        descriptionEn: "Quantifying Scope 1, 2, and 3 greenhouse gas inventories in accordance with the GHG Protocol, with science-based decarbonization and CBAM offset roadmaps.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "الشركات المصدرة، المجموعات التجارية الكبرى، ومصانع الصناعات التصديرية",
        keyApplicationsEn: "Export manufacturers, corporate conglomerates, and supply chain vendors"
      },
      {
        id: "SOL-EC-03",
        nameAr: "تأهيل وتطبيق أنظمة الإدارة البيئية (ISO 14001 & ISO 50001)",
        nameEn: "Environmental & Energy Management Systems (ISO 14001 / 50001)",
        descriptionAr: "بناء وتطبيق أنظمة الإدارة البيئية وإدارة الطاقة وتدريب الكوادر الداخلية لاجتياز اختبارات الاعتماد الدولي بنجاح.",
        descriptionEn: "Full development, rollout, internal auditing, and pre-assessment certification support for ISO 14001 (Environment) and ISO 50001 (Energy Management).",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات استشارية بالمجموعة",
        deliveryModelEn: "In-House Advisory & Engineering Capability",
        keyApplicationsAr: "المصانع والشركات الخدمية والمجمعات التجارية والطبية",
        keyApplicationsEn: "Manufacturing plants, corporate offices, healthcare and commercial campuses"
      }
    ]
  },
  {
    categoryKey: "project_development",
    categoryNameAr: "تطوير المشروعات والشراكات الاستثمارية",
    categoryNameEn: "Project Development & Investment Partnerships",
    categoryTaglineAr: "تطوير مشاريع البنية التحتية البيئية، شراكات القطاعين العام والخاص (PPP)، والتحالفات الدولية",
    categoryTaglineEn: "Environmental infrastructure development, PPP concessions, and international technical joint ventures",
    iconName: "Building2",
    services: [
      {
        id: "SOL-PD-01",
        nameAr: "تطوير مشاريع البنية التحتية البيئية بنظام الشراكة (PPP / BOT)",
        nameEn: "Environmental PPP & Concession Project Development",
        descriptionAr: "هيكلة التحالفات المالية والهندسية للمنافسة على عقود الامتياز الحكومية لمعالجة النفايات، محطات المياه، ومجمعات تدوير الموارد.",
        descriptionEn: "Forming consortiums, financial structuring, and bidding for municipal and national PPP concessions in waste management, water treatment, and resource recovery.",
        deliveryModel: "under_development",
        deliveryModelAr: "فرصة استثمارية قيد التطوير المشترك",
        deliveryModelEn: "Investment Opportunity Under Co-Development",
        keyApplicationsAr: "مشاريع إدارة النفايات البلدية، محطات المعالجة الثلاثية، ومراكز التدوير الكبرى",
        keyApplicationsEn: "Municipal solid waste concessions, tertiary treatment utilities, and regional MRFs"
      },
      {
        id: "SOL-PD-02",
        nameAr: "التحالفات التقنية مع الشركات والمشغلين الدوليين",
        nameEn: "International Technical Joint Ventures & Licensing",
        descriptionAr: "استقطاب التقنيات البيئية الأوروبية والآسيوية المتقدمة وتوطينها في الأسواق العربية والإفريقية بنماذج شراكة تجارية متوازنة.",
        descriptionEn: "Partnering with established European, Asian, and international green technology licensors to localize equipment, operations, and specialized circular services.",
        deliveryModel: "under_development",
        deliveryModelAr: "فرصة استثمارية قيد التطوير المشترك",
        deliveryModelEn: "Investment Opportunity Under Co-Development",
        keyApplicationsAr: "توليد الطاقة من المخلفات، معالجة المياه المتقدمة، وتدوير البوليمرات المتخصصة",
        keyApplicationsEn: "Waste-to-energy, advanced effluent polishing, and high-purity polymer recycling"
      },
      {
        id: "SOL-PD-03",
        nameAr: "عقود التشغيل والصيانة للمرافق البيئية (O&M Agreements)",
        nameEn: "Operations & Maintenance (O&M) for Environmental Facilities",
        descriptionAr: "إدارة وتشغيل وصيانة محطات معالجة الصرف ومرافق الفرز والتدوير بكوادر فنية متخصصة ومؤشرات أداء تعاقدية (SLA).",
        descriptionEn: "Long-term performance-based operations, preventive maintenance, and chemical optimization for industrial effluent plants and sorting stations.",
        deliveryModel: "in_house",
        deliveryModelAr: "قدرات وخبرات تشغيلية بالمجموعة",
        deliveryModelEn: "In-House Operational Capability",
        keyApplicationsAr: "محطات معالجة المياه الصناعية، مرافق التدوير الخاصة، والمجمعات الصناعية الكبرى",
        keyApplicationsEn: "Industrial effluent plants, private recycling facilities, and industrial clusters"
      }
    ]
  }
];

// -------------------------------------------------------------
// 3. OPPORTUNITY DATABASE (Verified Market Records)
// -------------------------------------------------------------
export const SUSTAINABILITY_OPPORTUNITY_RECORDS: SustainabilityOpportunity[] = [
  // 1. Saudi Arabia - Invest Saudi / MWAN PPP Platform
  {
    id: "ENV-SAU-2026-01",
    projectNameAr: "مبادرة المنصة الرقمية الوطنية لإدارة النفايات (PPP) - المركز الوطني لإدارة النفايات (موان)",
    projectNameEn: "National Digital Waste Management Platform PPP Initiative — MWAN",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    cityRegionAr: "الرياض (تغطية لكافة مناطق المملكة)",
    cityRegionEn: "Riyadh (Kingdom-wide Coverage)",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "تطوير وتشغيل منصة رقمية متكاملة لربط منتجي المخلفات، الناقلين، والمشغلين، ومراقبة مسارات التدوير",
    requiredServicesEn: "Development, integration, and operational scaling of nationwide digital manifest and tracking platform for waste generators and operators",
    projectDescriptionAr: "مبادرة شراكة بين القطاعين العام والخاص أعلن عنها المركز الوطني لإدارة النفايات (موان) لرقمنة قطاع إدارة النفايات بالمملكة وتحقيق استراتيجية صفر نفايات وتحفيز استثمارات الاقتصاد الدائري.",
    projectDescriptionEn: "Strategic PPP initiative announced by National Waste Management Center (MWAN) to digitize tracking, licensing, and transactions across the Saudi waste ecosystem under Vision 2030.",
    announcingEntityAr: "المركز الوطني لإدارة النفايات (موان) / المركز الوطني للتخصيص (NCP)",
    announcingEntityEn: "National Waste Management Center (MWAN) / National Center for Privatization (NCP)",
    investmentValue: "قيد التسعير الاستثماري (PPP)",
    currency: "SAR",
    contractingModel: "PPP",
    projectStage: "Expression of Interest",
    projectStageAr: "إبداء رغبة / قيد الدراسة الرسمية",
    publicationDate: "2026-04-12",
    submissionDeadline: "مرحلة التأهيل المسبق للتحالفات (نافذة مفتوحة)",
    officialSourceUrl: "https://mwan.gov.sa",
    qualificationRequirementsAr: "خبرة مثبتة في رقمنة السلاسل اللوجستية وتطوير منصات تتبع المخلفات والتحالف مع شركات تقنية وبيئية معتمدة بالمملكة",
    qualificationRequirementsEn: "Demonstrated track record in digital logistics platforms, waste-tracking software, and registered commercial entity in Saudi Arabia",
    partnershipRequirementsAr: "تحالف بين مطور محلي ومطورين تقنيين واستشاريين بيئيين معتمدين",
    partnershipRequirementsEn: "Consortium between local licensed environmental operator and specialized enterprise digital systems integrator",
    verificationStatusAr: "مبادرة رسمية منشورة عبر المنصات الاستثمارية الحكومية",
    verificationStatusEn: "Officially Verified Government Investment Initiative",
    lastUpdatedDate: "2026-04-20",
    isPublishedTender: true,
    isStrategicPartnership: true
  },
  // 2. Saudi Arabia - Industrial Recycling & Material Recovery Hub
  {
    id: "ENV-SAU-2025-02",
    projectNameAr: "فرص استثمارية في مجمعات تدوير المواد البلاستيكية والصناعية - استثمر في السعودية",
    projectNameEn: "Industrial Polymer & Secondary Materials Recycling Hubs — Invest Saudi",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    countryCode: "SA",
    flag: "🇸🇦",
    cityRegionAr: "الجبيل وينبع والدمام",
    cityRegionEn: "Jubail, Yanbu & Dammam",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "إنشاء وتشغيل مصانع فرز وتدوير البوليمرات والمخلفات الصناعية لإنتاج خامات ثانوية معتمدة للصناعات البتروكيماوية",
    requiredServicesEn: "Establishment of specialized mechanical recycling plants producing high-grade rPET and rHDPE resins for industrial packaging",
    projectDescriptionAr: "فرص استثمارية رسمية مطروحة عبر منصة 'استثمر في السعودية' لتوطين مجمعات معالجة وتدوير البلاستيك الصناعي والتجاري بدعم من وزارة الاستثمار ووزارة الصناعة والثروة المعدنية.",
    projectDescriptionEn: "Government-supported investment opportunities listed on Invest Saudi to establish circular plastic re-processing facilities supporting industrial Net Zero objectives.",
    announcingEntityAr: "وزارة الاستثمار السعودية (Invest Saudi) / الهيئة الملكية للجبيل وينبع",
    announcingEntityEn: "Ministry of Investment (Invest Saudi) / Royal Commission for Jubail & Yanbu",
    investmentValue: "35,000,000 إلى 80,000,000",
    currency: "SAR",
    contractingModel: "Direct Investment",
    projectStage: "Announced",
    projectStageAr: "فرصة استثمارية معلنة للتقديم المباشر",
    publicationDate: "2025-11-18",
    submissionDeadline: "نافذة استثمارية مستمرة عبر المنصة",
    officialSourceUrl: "https://investsaudi.sa",
    qualificationRequirementsAr: "ملاءة مالية مثبتة وخبرة تصنيعية وتشغيلية في إعادة تدوير البوليمرات واستيفاء اشتراطات المركز الوطني للرقابة البيئية (NCEC)",
    qualificationRequirementsEn: "Proven financial solvency, technical expertise in plastics extrusion/pelletization, and environmental compliance licensing from NCEC",
    partnershipRequirementsAr: "مستثمر صناعي بالشراكة مع مصنعين وموردي تقنيات دوليين",
    partnershipRequirementsEn: "Industrial investor in partnership with international recycling technology OEM",
    verificationStatusAr: "فرصة استثمارية معتمدة عبر Invest Saudi",
    verificationStatusEn: "Officially Verified Invest Saudi Opportunity",
    lastUpdatedDate: "2026-03-10",
    isPublishedTender: false,
    isStrategicPartnership: true
  },
  // 3. UAE - Dubai Integrated Waste Management Strategy 2021-2041
  {
    id: "ENV-UAE-2025-01",
    projectNameAr: "مشاريع استرداد الموارد والتدوير المتقدم - استراتيجية دبي لإدارة النفايات 2021–2041",
    projectNameEn: "Resource Recovery & Advanced Circular Infrastructure — Dubai Waste Strategy 2041",
    countryAr: "الإمارات العربية المتحدة",
    countryEn: "United Arab Emirates",
    countryCode: "AE",
    flag: "🇦🇪",
    cityRegionAr: "إمارة دبي (ورسان وجبل علي)",
    cityRegionEn: "Dubai (Warsan & Jebel Ali)",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "خطوط فرز واسترداد المخلفات التجارية والإنشائية، ومحطات معالجة النفايات العضوية لإنتاج البيوغاز والكمبوست",
    requiredServicesEn: "Automated optical sorting, commercial & demolition waste reclamation, and organic composting/biogas digestion facilities",
    projectDescriptionAr: "ضمن مستهدفات دبي لتحويل 100% من النفايات عن المكبات بحلول 2041، تطرح الإمارة حزم شراكات استثمارية مع القطاع الخاص لتشغيل محطات الفرز الميكانيكي ومرافق تحويل النفايات إلى طاقة وموارد.",
    projectDescriptionEn: "Strategic concession packages under Dubai Municipality's masterplan to eliminate landfill disposal by 2041 through high-capacity private sector recycling hubs.",
    announcingEntityAr: "بلدية دبي (مؤسسة إدارة النفايات) / هيئة دبي الرقمية",
    announcingEntityEn: "Dubai Municipality (Waste Management Agency)",
    investmentValue: "120,000,000",
    currency: "AED",
    contractingModel: "BOT",
    projectStage: "Prequalification",
    projectStageAr: "تأهيل مسبق وتحالفات مطروحة",
    publicationDate: "2025-09-14",
    submissionDeadline: "تأهيل مستمر للشركات المتخصصة",
    officialSourceUrl: "https://www.dm.gov.ae",
    qualificationRequirementsAr: "سجل أعمال دولي أو إقليمي في تشغيل مرافق استرداد المواد وفرز النفايات الميكانيكي (MRF) بطاقة تفوق 500 طن يوميًا",
    qualificationRequirementsEn: "Verified regional/international track record in operating commercial MRFs exceeding 500 tons/day throughput",
    partnershipRequirementsAr: "تحالف بين مشغل بيئي إقليمي وشركاء تكنولوجيين معتمدين في الفرز البصري",
    partnershipRequirementsEn: "Joint venture between regional environmental concessionaire and advanced optical sorting technology provider",
    verificationStatusAr: "مشروع رسمي موثق باستراتيجية بلدية دبي 2041",
    verificationStatusEn: "Officially Documented Dubai Municipality Strategy Program",
    lastUpdatedDate: "2026-02-15",
    isPublishedTender: true,
    isStrategicPartnership: true
  },
  // 4. Qatar - Second Domestic Solid Waste Management Centre PPP
  {
    id: "ENV-QAT-2025-01",
    projectNameAr: "مشروع مركز إدارة ومعالجة النفايات المنزلية الصلبة الثاني بنظام الشراكة (PPP) - تدوير قطر",
    projectNameEn: "Second Domestic Solid Waste Management Centre (DSWMC-2) PPP Project — Qatar",
    countryAr: "دولة قطر",
    countryEn: "Qatar",
    countryCode: "QA",
    flag: "🇶🇦",
    cityRegionAr: "مسيعيد والمناطق الجنوبية",
    cityRegionEn: "Mesaieed & Southern Region",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "تصميم وتمويل وبناء وتشغيل مجمع لمعالجة وتدوير النفايات البلدية بطاقة 2,500 طن/يوم مع استرداد الطاقة والكمبوست",
    requiredServicesEn: "Design, Finance, Build, Operate and Maintain (DBFOM) of 2,500 TPD integrated solid waste treatment facility with waste-to-energy and composting",
    projectDescriptionAr: "مشروع استراتيجي وطني أطلقته وزارة البلدية القطرية بالشراكة مع هيئة الأشغال العامة (أشغال) لإنشاء ثاني أضخم مجمع لمعالجة النفايات بالدولة لتعزيز الاستدامة وتوليد الطاقة النظيفة.",
    projectDescriptionEn: "Mega PPP initiative by Ministry of Municipality and Ashghal to establish Qatar's second integrated waste treatment complex, supporting National Environment & Climate Strategy.",
    announcingEntityAr: "وزارة البلدية القطرية / هيئة الأشغال العامة (أشغال Ashghal)",
    announcingEntityEn: "Ministry of Municipality / Public Works Authority (Ashghal)",
    investmentValue: "850,000,000",
    currency: "QAR",
    contractingModel: "PPP",
    projectStage: "Tender Open",
    projectStageAr: "طرح مناقصة عامة للمؤهلين",
    publicationDate: "2025-10-05",
    submissionDeadline: "وفق جدول عطاءات أشغال الرسمي",
    officialSourceUrl: "https://www.ashghal.gov.qa",
    qualificationRequirementsAr: "ائتلافات شركات عالمية ومحلية مؤهلة مسبقًا تمتلك خبرة في مشاريع DSWMC والتحويل الحراري للنفايات",
    qualificationRequirementsEn: "Prequalified international EPC and environmental concession consortiums with operational waste-to-energy references",
    partnershipRequirementsAr: "تحالف مالي وهندسي وتقني بمشاركة شركات محلية بنسبة 30% على الأقل",
    partnershipRequirementsEn: "Financial, EPC, and O&M consortium with minimum 30% local Qatari content allocation",
    verificationStatusAr: "مشروع بنية تحتية وطني معتمد رسميًا لدى أشغال",
    verificationStatusEn: "Officially Verified National Infrastructure PPP Tender",
    lastUpdatedDate: "2026-03-01",
    isPublishedTender: true,
    isStrategicPartnership: true
  },
  // 5. Oman - Nama Water Services Industrial Effluent Treatment
  {
    id: "ENV-OMN-2025-01",
    projectNameAr: "توسعة محطات معالجة الصرف الصناعي وإعادة استخدام المياه - نماء لخدمات المياه وميناء صحار",
    projectNameEn: "Industrial Wastewater Treatment & Water Reuse Expansion — Nama Water / Sohar Port",
    countryAr: "سلطنة عُمان",
    countryEn: "Oman",
    countryCode: "OM",
    flag: "🇴🇲",
    cityRegionAr: "المنطقة الحرة بصحار ومحافظة الباطنة",
    cityRegionEn: "Sohar Freezone & Al Batinah",
    subsector: "water_resources",
    subsectorAr: "المياه وإدارة الموارد المائية",
    subsectorEn: "Water & Resource Management",
    requiredServicesAr: "محطات معالجة ثلاثية لمياه الصرف الصناعي، وشبكات توزيع المياه المعالجة للمصانع والمسطحات الخضراء",
    requiredServicesEn: "Tertiary polishing industrial wastewater treatment and treated effluent distribution loop for heavy industrial tenants",
    projectDescriptionAr: "مشاريع استثمارية تهدف إلى رفع كفاءة استخدام المياه بنسبة 80% في المنطقة الحرة بصحار وتوفير بدائل مستدامة للمياه العذبة عبر معالجة الصرف الصناعي عالي الملوحة والملوثات.",
    projectDescriptionEn: "Strategic utility project under Nama Water Services providing advanced treated effluent loops for petrochemical and metallurgy facilities in Sohar industrial zone.",
    announcingEntityAr: "شركة نماء لخدمات المياه (Nama Water Services) / ميناء والمنطقة الحرة بصحار",
    announcingEntityEn: "Nama Water Services / Sohar Port and Freezone",
    investmentValue: "45,000,000",
    currency: "OMR",
    contractingModel: "EPC",
    projectStage: "Under Study",
    projectStageAr: "قيد الدراسة الفنية وطرح كراسات الشروط",
    publicationDate: "2025-12-02",
    submissionDeadline: "طرح الكراسات المحدثة لعام 2026",
    officialSourceUrl: "https://www.oman2040.om",
    qualificationRequirementsAr: "شهادات تصنيف في معالجة مياه الصرف الصناعي وتقنيات الفصل الغشائي (MBR / RO)",
    qualificationRequirementsEn: "Category 1 wastewater engineering grade and proven references in industrial MBR/RO effluent treatment",
    partnershipRequirementsAr: "مقاول رئيسي متحالف مع مورد تكنولوجيا أغشية عالمي ومكتب استشاري محلي",
    partnershipRequirementsEn: "General contractor allied with specialized international membrane technology licensor",
    verificationStatusAr: "مشروع معلن عبر منصة التخطيط والتطوير العمانية",
    verificationStatusEn: "Officially Verified Omani Utility Program",
    lastUpdatedDate: "2026-03-22",
    isPublishedTender: true,
    isStrategicPartnership: false
  },
  // 6. Oman - Circular Economy Hub (be'ah)
  {
    id: "ENV-OMN-2025-02",
    projectNameAr: "فرص استثمارية في الاقتصاد الدائري واسترداد المخلفات الصناعية - شركة بيئة (be'ah)",
    projectNameEn: "Circular Economy & Industrial Byproduct Recovery Concessions — be'ah",
    countryAr: "سلطنة عُمان",
    countryEn: "Oman",
    countryCode: "OM",
    flag: "🇴🇲",
    cityRegionAr: "المنطقة الاقتصادية الخاصة بالدقم ومسقط",
    cityRegionEn: "Special Economic Zone at Duqm (SEZAD) & Muscat",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "معالجة المخلفات الهيدروكربونية والصناعية واسترداد الزيوت والمعادن وتدوير الإطارات والمخلفات الإلكترونية",
    requiredServicesEn: "Specialized processing of oily sludges, spent catalyst recycling, tire-derived fuel (TDF), and e-waste recycling",
    projectDescriptionAr: "حزم امتيازات استثمارية طويلة الأجل تطرحها الشركة العمانية القابضة لخدمات البيئة (بيئة) للشركات المتخصصة لتأسيس منشآت معالجة بيئية متطورة في الدقم ومسقط.",
    projectDescriptionEn: "Long-term circular investment concessions offered by be'ah for private environmental firms to build industrial waste recovery centers.",
    announcingEntityAr: "الشركة العمانية القابضة لخدمات البيئة (بيئة be'ah)",
    announcingEntityEn: "Oman Environmental Services Holding Company (be'ah)",
    investmentValue: "28,000,000",
    currency: "OMR",
    contractingModel: "Joint Venture",
    projectStage: "Announced",
    projectStageAr: "فرص استثمارية مفتوحة للتأهيل والشراكة",
    publicationDate: "2025-08-20",
    submissionDeadline: "تقديم العروض والمقترحات المباشرة مفتوح",
    officialSourceUrl: "https://www.oman2040.om",
    qualificationRequirementsAr: "تراخيص معالجة المخلفات الخطرة وغير الخطرة وخبرة معتمدة لدى هيئة البيئة العمانية",
    qualificationRequirementsEn: "Accredited hazardous & industrial waste handling credentials approved by Environment Authority Oman",
    partnershipRequirementsAr: "شراكة استثمارية تقنية مع مستثمرين عمانيين",
    partnershipRequirementsEn: "Technical joint venture with local Omani waste-sector operators",
    verificationStatusAr: "مبادرة رسمية ضمن استراتيجية بيئة للاقتصاد الدائري",
    verificationStatusEn: "Officially Documented be'ah Circular Concession",
    lastUpdatedDate: "2026-02-28",
    isPublishedTender: false,
    isStrategicPartnership: true
  },
  // 7. Egypt - Industrial Solar & Energy Efficiency for Factories
  {
    id: "ENV-EGY-2025-01",
    projectNameAr: "برنامج كفاءة الطاقة ومحطات الطاقة الشمسية للمجمعات الصناعية - وزارة التجارة والصناعة وهيئة التنمية الصناعية",
    projectNameEn: "Industrial Energy Efficiency & Rooftop Solar Scale-up Program — Egypt IDA",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    countryCode: "EG",
    flag: "🇪🇬",
    cityRegionAr: "العاشر من رمضان، السادس من أكتوبر، وبرج العرب",
    cityRegionEn: "10th of Ramadan, 6th of October & Borg El Arab",
    subsector: "renewable_energy",
    subsectorAr: "الطاقة المتجددة والحلول النظيفة",
    subsectorEn: "Renewable Energy & Clean Solutions",
    requiredServicesAr: "تركيب محطات طاقة شمسية كهروضوئية موزعة بنظام صافي القياس (Net Metering) واستبدال المحركات الصناعية عالية الفاقد",
    requiredServicesEn: "Turnkey rooftop solar PV installation under Net Metering scheme, and high-efficiency IE3/IE4 electric motor retrofits",
    projectDescriptionAr: "مبادرة وطنية بالتعاون مع المنظمات التنموية الدولية لمساعدة 500 مصنع على خفض استهلاك الطاقة بنسبة 25% وتركيب 150 ميجاوات من الطاقة الشمسية التجارية والصناعية.",
    projectDescriptionEn: "National initiative supported by international climate funds enabling 500 industrial plants to install captive rooftop solar and cut power consumption by 25%.",
    announcingEntityAr: "الهيئة العامة للتنمية الصناعية (IDA) / هيئة الطاقة الجديدة والمتجددة (NREA)",
    announcingEntityEn: "Industrial Development Authority (IDA) / New & Renewable Energy Authority (NREA)",
    investmentValue: "350,000,000",
    currency: "EGP",
    contractingModel: "Service Contract",
    projectStage: "Tender Open",
    projectStageAr: "طرح دوري لطلبات التوريد والتركيب",
    publicationDate: "2025-07-15",
    submissionDeadline: "نافذة التقديم للشركات الصناعية مستمرة",
    officialSourceUrl: "https://www.eeaa.gov.eg",
    qualificationRequirementsAr: "شهادة قيد وتأهيل لدى هيئة الطاقة الجديدة والمتجددة (NREA) كشركة مؤهلة لتركيب محطات الطاقة الشمسية",
    qualificationRequirementsEn: "NREA Tier 1 or Tier 2 official accreditation for solar PV installation and electrical contracting",
    partnershipRequirementsAr: "مقاول طاقة شمسية معتمد بالتعاون مع البنوك المانحة لتمويل كفاءة الطاقة",
    partnershipRequirementsEn: "Accredited solar EPC partnered with green concessionary financing banks",
    verificationStatusAr: "برنامج حكومي نشط ومعتمد لدى NREA",
    verificationStatusEn: "Active Government Renewable Program",
    lastUpdatedDate: "2026-03-15",
    isPublishedTender: true,
    isStrategicPartnership: false
  },
  // 8. Egypt - Agri-Waste Biomass & Bio-fertilizer Plants
  {
    id: "ENV-EGY-2025-02",
    projectNameAr: "مشروع تدوير المخلفات الزراعية وإنتاج الوقود الحيوي والمخصبات العضوية - جهاز تنظيم إدارة المخلفات (WMRA)",
    projectNameEn: "Agri-Waste Biomass & Organic Bio-Fertilizer Valorization Units — WMRA Egypt",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    countryCode: "EG",
    flag: "🇪🇬",
    cityRegionAr: "محافظات الدلتا والوادي الجديد والفيوم",
    cityRegionEn: "Nile Delta, New Valley & Faiyum",
    subsector: "waste_circular",
    subsectorAr: "إدارة المخلفات والاقتصاد الدائري",
    subsectorEn: "Waste Management & Circular Economy",
    requiredServicesAr: "تجميع ومعالجة متبقيات تقليم النخيل وقش الأرز والذرة لإنتاج الكمبوست المعقم وحبيبات الوقود الحيوي المضغوط (Biomass Pellets)",
    requiredServicesEn: "Mechanical chipping, anaerobic composting, and pelletization of date palm fronds and agricultural residues for organic agriculture",
    projectDescriptionAr: "مشاريع استثمارية تتماشى مع قانون المخلفات 202 لسنة 2020 لحظر حرق المخلفات الزراعية وتحويلها إلى أسمدة عضوية وبدائل وقود ومواد تعبئة مستدامة قابلة للتصدير.",
    projectDescriptionEn: "Strategic investment initiative under Waste Law 202/2020 converting agricultural residues into high-export-value bio-fertilizers and solid biomass fuels.",
    announcingEntityAr: "جهاز تنظيم إدارة المخلفات (WMRA) / وزارة البيئة المصرية",
    announcingEntityEn: "Waste Management Regulatory Authority (WMRA) / Ministry of Environment",
    investmentValue: "45,000,000",
    currency: "EGP",
    contractingModel: "Direct Investment",
    projectStage: "Under Implementation",
    projectStageAr: "قيد التنفيذ والتوسع في مواقع تجميع إضافية",
    publicationDate: "2025-06-10",
    submissionDeadline: "تراخيص وخطوط استثمارية مفتوحة",
    officialSourceUrl: "https://www.eeaa.gov.eg",
    qualificationRequirementsAr: "تراخيص تداول مخلفات زراعية من وزارة البيئة ووزارة الزراعة وسجل صناعي لإنتاج الأسمدة والوقود الحيوي",
    qualificationRequirementsEn: "Commercial environmental permits from WMRA and Ministry of Agriculture for organic fertilizer manufacturing",
    partnershipRequirementsAr: "شراكة بين شركات إدارة المخلفات الزراعية والجمعيات الزراعية والشركات التصديرية",
    partnershipRequirementsEn: "Partnership between agri-waste technology operators and regional farming cooperatives",
    verificationStatusAr: "مبادرة استثمارية معتمدة ومتوافقة مع قانون المخلفات 202",
    verificationStatusEn: "Officially Verified Investment Concession",
    lastUpdatedDate: "2026-04-05",
    isPublishedTender: false,
    isStrategicPartnership: true
  },
  // 9. Morocco - MASEN Renewable Solar & Agricultural Byproduct Valorization
  {
    id: "ENV-MAR-2025-01",
    projectNameAr: "برنامج الطاقة الشمسية اللامركزية وتثمين مخلفات الصناعات الغذائية - الوكالة المغربية للطاقة المستدامة (مازن)",
    projectNameEn: "Decentralized Solar & Agro-Food Waste Valorization Program — MASEN Morocco",
    countryAr: "المملكة المغربية",
    countryEn: "Morocco",
    countryCode: "MA",
    flag: "🇲🇦",
    cityRegionAr: "سوس ماسة، فاس مكناس، ومراكش",
    cityRegionEn: "Souss-Massa, Fes-Meknes & Marrakech",
    subsector: "renewable_energy",
    subsectorAr: "الطاقة المتجددة والحلول النظيفة",
    subsectorEn: "Renewable Energy & Clean Solutions",
    requiredServicesAr: "تجهيز محطات الطاقة الشمسية لضخ المياه ومعالجة وتجفيف مخلفات الزيتون والتمور لاستخراج الطاقة والكتلة الحيوية",
    requiredServicesEn: "Solar PV for agricultural pumping, and biomass recovery systems for olive pomace and date processing residues",
    projectDescriptionAr: "مبادرة لدعم مرونة القطاع الفلاحي في مواجهة الجفاف عبر تزويد التعاونيات والمزارع بمصادر طاقة شمسية مستقلة وتثمين المخلفات العضوية بنماذج الاقتصاد الدائري.",
    projectDescriptionEn: "Government-backed agro-industry greening program led by MASEN to install off-grid solar and convert food-processing residues into clean thermal energy.",
    announcingEntityAr: "الوكالة المغربية للطاقة المستدامة (مازن MASEN) / وزارة الفلاحة والصيد البحري",
    announcingEntityEn: "MASEN / Ministry of Agriculture, Fisheries and Water Resources",
    investmentValue: "65,000,000",
    currency: "MAD",
    contractingModel: "Joint Venture",
    projectStage: "Announced",
    projectStageAr: "مبادرة معلنة لدعوة الشركاء والمستثمرين",
    publicationDate: "2025-11-04",
    submissionDeadline: "وفق روزنامة مازن للاستثمار الفلاحي",
    officialSourceUrl: "https://www.masen.ma",
    qualificationRequirementsAr: "خبرة في حلول الطاقة الشمسية وضخ المياه ومعالجة المخلفات الزراعية وتثمين الكتلة الحيوية",
    qualificationRequirementsEn: "Proven expertise in solar PV water pumping and agro-industrial biomass energy conversion",
    partnershipRequirementsAr: "تحالف مع شركات الطاقة المتجددة المعتمدة بالمغرب",
    partnershipRequirementsEn: "Consortium with locally licensed Moroccan renewable energy service companies",
    verificationStatusAr: "برنامج رسمي معتمد ضمن خطة مازن للطاقة المستدامة",
    verificationStatusEn: "Officially Verified MASEN Green Agriculture Program",
    lastUpdatedDate: "2026-03-12",
    isPublishedTender: true,
    isStrategicPartnership: true
  },
  // 10. Kenya & Rwanda - Green Investment & Industrial Water Hub
  {
    id: "ENV-AFR-2025-01",
    projectNameAr: "مبادرة تمويل البنية التحتية للمياه والتدوير الصناعي في شرق إفريقيا - نيروبي وكيغالي",
    projectNameEn: "East Africa Industrial Water & Circular Infrastructure Concession — Nairobi & Kigali",
    countryAr: "جمهورية كينيا",
    countryEn: "Kenya & Rwanda",
    countryCode: "KE",
    flag: "🇰🇪",
    cityRegionAr: "نيروبي (كينيا) والمنطقة الاقتصادية الخاصة بكيغالي (رواندا)",
    cityRegionEn: "Nairobi (Kenya) & Kigali SEZ (Rwanda)",
    subsector: "water_resources",
    subsectorAr: "المياه وإدارة الموارد المائية",
    subsectorEn: "Water & Resource Management",
    requiredServicesAr: "محطات مدمجة لمعالجة المياه الصناعية وإعادة تدويرها، وأنظمة إدارة المخلفات البلاستيكية والإلكترونية",
    requiredServicesEn: "Packaged industrial effluent treatment units, tertiary membrane recycling, and certified circular plastics/e-waste processing",
    projectDescriptionAr: "مشاريع ممولة جزئيًا عبر صناديق المناخ الإفريقية لتوفير حلول مياه مستدامة للمناطق الصناعية الحرة وإقامة مرافق فرز وتدوير متطورة تدعم سلاسل التوريد الخضراء.",
    projectDescriptionEn: "Multi-country green infrastructure initiative co-financed by climate facilities supporting industrial parks in Kenya and Rwanda with closed-loop water treatment.",
    announcingEntityAr: "مجلس التنمية الرواندي (RDB) / هيئة الاستثمار الكينية (KenInvest) / صندوق المناخ الإفريقي",
    announcingEntityEn: "Rwanda Development Board (RDB) / KenInvest / Africa Green Co",
    investmentValue: "18,500,000",
    currency: "USD",
    contractingModel: "PPP",
    projectStage: "Expression of Interest",
    projectStageAr: "مرحلة إبداء الرغبة وتشكيل التحالفات الاستثمارية",
    publicationDate: "2025-10-25",
    submissionDeadline: "نافذة التقديم الأولى للتحالفات مفتوحة",
    officialSourceUrl: "https://www.nema.go.ke",
    qualificationRequirementsAr: "سجل أعمال دولي في محطات معالجة الصرف الصناعي وإدارة المخلفات والقدرة على العمل في دول شرق إفريقيا",
    qualificationRequirementsEn: "Demonstrated international track record in modular wastewater recycling and regional operating presence in East Africa",
    partnershipRequirementsAr: "تحالف بين مشغل بيئي دولي ومؤسسات تنمية واستثمار محلية",
    partnershipRequirementsEn: "Joint consortium combining international environmental operator with regional development equity partners",
    verificationStatusAr: "مبادرة موثقة عبر وكالات الاستثمار الرسمية برواندا وكينيا",
    verificationStatusEn: "Officially Verified Multi-Lateral Climate Opportunity",
    lastUpdatedDate: "2026-04-10",
    isPublishedTender: true,
    isStrategicPartnership: true
  }
];

// -------------------------------------------------------------
// 4. STRATEGIC ALLIANCES & MARKET TRANSITION TRENDS
// -------------------------------------------------------------
export const SUSTAINABILITY_STRATEGIC_ALLIANCES = [
  {
    categoryAr: "تحالفات الهندسة والتنفيذ (EPC Consortiums)",
    categoryEn: "EPC Engineering Consortiums",
    descriptionAr: "شراكات مع كبرى الشركات الهندسية المتخصصة لتنفيذ محطات الطاقة الشمسية ومحطات معالجة الصرف الصناعي بنظام تسليم المفتاح.",
    descriptionEn: "Turnkey EPC execution alliances with certified engineering contractors for solar PV plants and effluent treatment facilities.",
    partnerTypesAr: "مقاولون كهروميكانيكيون، شركات الطاقة الشمسية، ومكاتب التصميم الهندسي المعتمدة",
    partnerTypesEn: "Electromechanical contractors, certified solar EPCs, and accredited engineering firms"
  },
  {
    categoryKey: "tech_licensors",
    categoryAr: "موردو التكنولوجيا وترخيص التقنيات البيئية",
    categoryEn: "Technology Licensors & OEMs",
    descriptionAr: "التعاون مع رواد تصنيع أغشية التناضح العكسي (RO)، وحساسات الفرز البصري للمخلفات، والمحركات الصناعية فائقة الكفاءة.",
    descriptionEn: "Alliances with international OEMs for reverse osmosis membranes, optical waste-sorting sensors, and ultra-high-efficiency motors.",
    partnerTypesAr: "مصنعو أغشية الترشيح، موردو محطات الغاز الحيوي، وشركات الأتمتة البيئية",
    partnerTypesEn: "Membrane manufacturers, biogas equipment suppliers, and industrial automation vendors"
  },
  {
    categoryKey: "green_finance",
    categoryAr: "صناديق التمويل الأخضر والتنمية (Climate & Green Finance)",
    categoryEn: "Green Finance & Climate Funds",
    descriptionAr: "تنسيق الاستفادة من خطوط التمويل الميسر وحوافز الاستثمار المستدام من البنوك التنموية ومؤسسات التمويل الدولية (EBRD / IFC / AFDB).",
    descriptionEn: "Structuring co-financing frameworks utilizing green concessional facilities from multilateral DFIs and commercial green bonds.",
    partnerTypesAr: "بنوك التنمية الإقليمية، صناديق المناخ، والمصارف التجارية المانحة للقروض الخضراء",
    partnerTypesEn: "Multilateral development banks, climate investment funds, and green commercial lenders"
  }
];

export const SUSTAINABILITY_MARKET_TRENDS = [
  {
    trendAr: "ضريبة الكربون الأوروبية الحدودية (CBAM) وأثرها على الصادرات",
    trendEn: "EU Carbon Border Adjustment Mechanism (CBAM) Compliance",
    impactAr: "إلزام المصانع المصدرة إلى الاتحاد الأوروبي بالحد من البصمة الكربونية واستخدام الطاقة النظيفة لتجنب الرسوم الجمركية البيئية.",
    impactEn: "Mandates industrial exporters to the EU to reduce carbon emissions and verify clean energy usage to avoid border carbon tariffs.",
    urgencyAr: "أولوية قصوى (2025–2026)",
    urgencyEn: "Top Priority (2025–2026)"
  },
  {
    trendAr: "إلزامية الاقتصاد الدائري وقوانين المسؤولية الممتدة للمنتج (EPR)",
    trendEn: "Extended Producer Responsibility (EPR) & Circular Packaging",
    impactAr: "تحميل الشركات المنتجة مسؤولية استرداد وتدوير مواد التعبئة والتغليف (بلاستيك، كرتون) بنسب تصاعدية في مصر والخليج.",
    impactEn: "Mandating manufacturers to finance or execute recovery and recycling of post-consumer packaging across MENA markets.",
    urgencyAr: "سارية ومطبقة تدريجيًا",
    urgencyEn: "Active & Phased Regulatory Rollout"
  },
  {
    trendAr: "الإجهاد المائي الإقليمي والتحول الإلزامي نحو إعادة استخدام المياه الصناعية",
    trendEn: "Regional Water Stress Driving Industrial Effluent Recycling",
    impactAr: "حظر التخلص من مياه الصرف الصناعي بدون معالجة متقدمة وفرض حوافز للمصانع التي تعتمد أنظمة الدوائر المغلقة (Closed-Loop).",
    impactEn: "Prohibiting untreated industrial wastewater discharge while offering incentives for plants adopting closed-loop and ZLD systems.",
    urgencyAr: "ضرورة تشغيلية واقتصادية",
    urgencyEn: "Critical Operational & Economic Necessity"
  },
  {
    trendAr: "التحول نحو الطاقة الشمسية الذاتية للمنشآت التجارية (C&I Solar Boom)",
    trendEn: "Commercial & Industrial (C&I) Rooftop Solar Surge",
    impactAr: "ارتفاع أسعار الكهرباء الشبكية يدفع المصانع والمستودعات للاستثمار في محطات الطاقة الشمسية على الأسطح لتحقيق وفورات مباشرة.",
    impactEn: "Escalating commercial utility tariffs accelerating industrial rooftop solar installations with typical paybacks under 3.5 years.",
    urgencyAr: "نمو سوقي متسارع",
    urgencyEn: "Rapid Market Expansion"
  }
];

// -------------------------------------------------------------
// 5. DOCUMENT CENTER ENTRIES (Real approved documents)
// -------------------------------------------------------------
export const SUSTAINABILITY_DOCUMENTS = [
  {
    id: "DOC-ENV-01",
    titleAr: "الملف التعريفي لقطاع الاستدامة والخدمات البيئية — مجموعة سامي بن عياد",
    titleEn: "Sustainability & Environmental Sector Corporate Profile — SBA Group",
    fileSize: "4.8 MB",
    fileFormat: "PDF",
    categoryAr: "ملفات تعريفية مؤسسية",
    categoryEn: "Corporate Profiles",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    descriptionAr: "وثيقة مؤسسية معتمدة تستعرض رؤية المجموعة البيئية، محفظة الخدمات الاستشارية، ونماذج التحالفات الاستثمارية.",
    descriptionEn: "Official approved profile detailing our environmental vision, consulting portfolio, and investment partnership models."
  },
  {
    id: "DOC-ENV-02",
    titleAr: "دليل الامتثال لقانون إدارة المخلفات رقم 202 لسنة 2020 للمنشآت الصناعية",
    titleEn: "Industrial Compliance Guidelines: National Waste Management Law No. 202",
    fileSize: "2.6 MB",
    fileFormat: "PDF",
    categoryAr: "دراسات وأدلة تشريعية",
    categoryEn: "Legislative Guides",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_AR.pdf",
    descriptionAr: "ملخص إرشادي لأصحاب المصانع حول اشتراطات تصنيف وتوثيق وسجلات المخلفات الصناعية وحوافز الاقتصاد الدائري.",
    descriptionEn: "Executive guide for plant managers on waste manifest protocols, classification standards, and circular economy incentives."
  },
  {
    id: "DOC-ENV-03",
    titleAr: "ورقة عمل: حلول الطاقة الشمسية وترشيد المياه في الصناعات الغذائية والنسيجية",
    titleEn: "Technical Brief: Solar PV & Water Recycling for Agri-Food & Textile Industries",
    fileSize: "3.2 MB",
    fileFormat: "PDF",
    categoryAr: "أوراق عمل ودراسات تقنية",
    categoryEn: "Technical Briefs",
    downloadUrl: "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
    descriptionAr: "دراسة تطبيقية تشرح عوائد الاستثمار ونماذج التوفير المالي لمحطات الطاقة الشمسية ومعالجة مياه الغسيل الصناعي.",
    descriptionEn: "Applied technical brief detailing financial payback, water balance savings, and rooftop solar integration for manufacturing."
  }
];

// -------------------------------------------------------------
// 6. DYNAMIC STATS COMPUTATION
// -------------------------------------------------------------
export const SUSTAINABILITY_STATS = {
  totalOpportunities: SUSTAINABILITY_OPPORTUNITY_RECORDS.length,
  totalMarkets: SUSTAINABILITY_TARGET_MARKETS.length,
  tier1MarketsCount: SUSTAINABILITY_TARGET_MARKETS.filter((m) => m.priority === "tier1").length,
  tier2MarketsCount: SUSTAINABILITY_TARGET_MARKETS.filter((m) => m.priority === "tier2").length,
  renewableCount: SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((o) => o.subsector === "renewable_energy").length,
  wasteCircularCount: SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((o) => o.subsector === "waste_circular").length,
  waterResourcesCount: SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((o) => o.subsector === "water_resources").length,
  tendersCount: SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((o) => o.isPublishedTender).length,
  partnershipsCount: SUSTAINABILITY_OPPORTUNITY_RECORDS.filter((o) => o.isStrategicPartnership).length,
  totalServicesCount: SUSTAINABILITY_SOLUTIONS_PORTFOLIO.reduce((acc, cat) => acc + cat.services.length, 0),
};

