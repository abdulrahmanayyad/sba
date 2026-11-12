// Master Corporate Data Registry & Statistics Consolidation
// SAMI BIN AYYAD GROUP — Single Source of Truth for Published Corporate Indicators

export interface CorporateIndicator {
  id: string;
  nameAr: string;
  nameEn: string;
  approvedValue: string | number;
  unitAr: string;
  unitEn: string;
  sector: "corporate" | "construction" | "environmental" | "garment" | "food";
  reportingPeriod: string;
  calculationMethodologyAr: string;
  calculationMethodologyEn: string;
  supportingEvidenceAr: string;
  supportingEvidenceEn: string;
  lastVerificationDate: string;
  approvalStatus: "Approved" | "Pending Verification" | "Internal Only";
  publicationPermission: boolean;
  attributionNoteAr?: string;
  attributionNoteEn?: string;
}

/**
 * CRITICAL CORPORATE DISTINCTION:
 * - SAMI BIN AYYAD GROUP was formally founded in 2023 as an integrated multi-sector corporate holding structure.
 * - Prior foundational and executive track records (e.g. 1977 family contracting roots, 2018 real estate advisory operations)
 *   are strictly attributed to historical entities, executive management, and partner track records.
 */
export const CORPORATE_REGISTRY: Record<string, CorporateIndicator> = {
  // 1. Group Corporate Foundation
  group_establishment: {
    id: "group_establishment",
    nameAr: "سنة تأسيس الكيان المؤسسي الموحد",
    nameEn: "Group Corporate Establishment Year",
    approvedValue: 2023,
    unitAr: "سنة ميلادية",
    unitEn: "Year",
    sector: "corporate",
    reportingPeriod: "Permanent",
    calculationMethodologyAr: "تاريخ القيد والتأسيس المؤسسي الموحد لمجموعة سامي بن عياد.",
    calculationMethodologyEn: "Formal corporate establishment and unified registration date of SAMI BIN AYYAD GROUP.",
    supportingEvidenceAr: "السجلات التجارية والوثائق المؤسسية لعام 2023.",
    supportingEvidenceEn: "Official commercial registry and corporate formation documentation (2023).",
    lastVerificationDate: "2026-01-15",
    approvalStatus: "Approved",
    publicationPermission: true,
    attributionNoteAr: "الكيان المؤسسي الموحد تأسس عام 2023، بينما تستند خبرات الإدارة التنفيذية إلى مسيرة مهنية ممتدة.",
    attributionNoteEn: "The unified holding group was established in 2023, building on decades of executive leadership experience."
  },

  historical_contracting_roots: {
    id: "historical_contracting_roots",
    nameAr: "جذور الخبرة الإنشائية والتنفيذية",
    nameEn: "Historical Contracting & Execution Roots",
    approvedValue: 1977,
    unitAr: "سنة ميلادية",
    unitEn: "Year",
    sector: "construction",
    reportingPeriod: "Historical",
    calculationMethodologyAr: "تاريخ بدء أولى المشروعات الإنشائية العائلية التي انطلقت منها خبرات الإدارة.",
    calculationMethodologyEn: "Historical commencement of family contracting works preceding the unified group structure.",
    supportingEvidenceAr: "سجلات المشروعات الإنشائية المعتمدة والموثقة تاريخيًا.",
    supportingEvidenceEn: "Historical verified infrastructure and contracting archives.",
    lastVerificationDate: "2026-01-15",
    approvalStatus: "Approved",
    publicationPermission: true,
    attributionNoteAr: "تُنسب الجذور التاريخية إلى خبرة المؤسسين التأسيسية وليس تاريخ تأسيس الكيان الحالي.",
    attributionNoteEn: "Reflects foundational family heritage and executive track record, distinguished from the 2023 group incorporation."
  },

  real_estate_track_record: {
    id: "real_estate_track_record",
    nameAr: "بداية الاستشارات العقارية وإدارة الأصول المعتمدة",
    nameEn: "Real Estate Advisory & Asset Track Record",
    approvedValue: 2018,
    unitAr: "سنة ميلادية",
    unitEn: "Year",
    sector: "construction",
    reportingPeriod: "2018–2026",
    calculationMethodologyAr: "بداية العمليات الاستشارية المتخصصة في التسويق والاستثمار وإدارة المحافظ العقارية المصرية.",
    calculationMethodologyEn: "Commencement of specialized commercial real estate advisory and asset portfolio operations in Egypt.",
    supportingEvidenceAr: "سجلات التعاقدات مع كبرى شركات التطوير العقاري وإدارة المشروعات.",
    supportingEvidenceEn: "Documented advisory agreements with tier-one Egyptian real estate developers.",
    lastVerificationDate: "2026-02-01",
    approvalStatus: "Approved",
    publicationPermission: true,
    attributionNoteAr: "مسيرة استشارية لإدارة المجموعة تغطي أكثر من 400 مشروع وأكثر من 200 مطور معتمد.",
    attributionNoteEn: "Executive advisory portfolio spanning 400+ developments and 200+ developer partnerships."
  },

  // 2. Apparel Sector Indicators
  apparel_export_markets: {
    id: "apparel_export_markets",
    nameAr: "الأسواق المستهدفة لصادرات الملابس والمنسوجات",
    nameEn: "Apparel & Textile Export Destination Markets",
    approvedValue: 20,
    unitAr: "سوق إقليمي ودولي",
    unitEn: "Markets",
    sector: "garment",
    reportingPeriod: "2024–2026",
    calculationMethodologyAr: "عدد الأسواق الدولية الموثقة في شبكة التصدير والطلبات التجارية في أوروبا، الخليج، وشمال أفريقيا.",
    calculationMethodologyEn: "Documented destination markets across Europe, GCC, and North Africa in the export network.",
    supportingEvidenceAr: "سجل الشحنات والطلبات التصديرية وقاعدة الشركاء الدوليين.",
    supportingEvidenceEn: "Commercial export manifests, buyer agreements, and partner network logs.",
    lastVerificationDate: "2026-02-10",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  apparel_partner_factories: {
    id: "apparel_partner_factories",
    nameAr: "شبكة المصانع وموردي سلاسل الإمداد المعتمدة",
    nameEn: "Approved Manufacturing & Supply Chain Network",
    approvedValue: 150,
    unitAr: "منشأة تصنيع وشريك",
    unitEn: "Partner Facilities",
    sector: "garment",
    reportingPeriod: "2024–2026",
    calculationMethodologyAr: "المصانع وخطوط الإنتاج المؤهلة للتشغيل المشترك والإنتاج التعاقدي (CM / CMT / FOB).",
    calculationMethodologyEn: "Vetted industrial plants and production lines operating under contract manufacturing programs.",
    supportingEvidenceAr: "اتفاقيات التشغيل التعاقدي وسجلات التأهيل الفني.",
    supportingEvidenceEn: "Contract manufacturing agreements and industrial qualification audit reports.",
    lastVerificationDate: "2026-02-10",
    approvalStatus: "Approved",
    publicationPermission: true,
    attributionNoteAr: "تُنفذ الطاقة الإنتاجية عبر التحالفات الصناعية وشبكة المصانع المؤهلة للمجموعة.",
    attributionNoteEn: "Capacity delivered through our vetted contract manufacturing partner ecosystem."
  },

  apparel_monthly_capacity: {
    id: "apparel_monthly_capacity",
    nameAr: "الطاقة الإنتاجية الشهرية عبر شبكة التصنيع",
    nameEn: "Monthly Production Capacity via Partner Network",
    approvedValue: 600000,
    unitAr: "قطعة / شهر",
    unitEn: "Pieces / Month",
    sector: "garment",
    reportingPeriod: "Active Operational Capacity",
    calculationMethodologyAr: "إجمالي الطاقة التشغيلية المتاحة عبر خطوط الإنتاج والتحالفات التصنيعية المعتمدة.",
    calculationMethodologyEn: "Aggregated monthly operational capacity across accredited partner production lines.",
    supportingEvidenceAr: "سجلات التقييم الفني للمصانع والقدرات الإنتاجية المخصصة للمجموعة.",
    supportingEvidenceEn: "Technical factory audit records and allocated production capacities.",
    lastVerificationDate: "2026-02-10",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  // 3. Food & Agri-Commodities Indicators
  food_destination_markets: {
    id: "food_destination_markets",
    nameAr: "أسواق تصدير المنتجات الغذائية والتمور",
    nameEn: "Food & Natural Products Destination Markets",
    approvedValue: 84,
    unitAr: "دولة حول العالم",
    unitEn: "Countries",
    sector: "food",
    reportingPeriod: "2023–2026 Archive",
    calculationMethodologyAr: "إجمالي الدول المسجلة في قاعدة بيانات استفسارات وطلبات المشترين الموثقة بالأصل التجاري.",
    calculationMethodologyEn: "Total documented buyer inquiry destination markets across the 2023–2026 commercial archive.",
    supportingEvidenceAr: "أرشيف مراسلات المشترين الدوليين (738 طلب شراء موثق).",
    supportingEvidenceEn: "Verified 2023–2026 commercial inquiry and buyer procurement archive (738 verified logs).",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  food_total_inquiries: {
    id: "food_total_inquiries",
    nameAr: "إجمالي طلبات الشراء المعتمدة لقطاع الأغذية",
    nameEn: "Total Verified Food Purchase Inquiries",
    approvedValue: 738,
    unitAr: "طلب شراء موثق",
    unitEn: "Verified Inquiries",
    sector: "food",
    reportingPeriod: "2023–2026",
    calculationMethodologyAr: "سجلات الشراء التجارية المستخلصة بعد استبعاد الرسائل التسويقية والإعلانات غير التجارية.",
    calculationMethodologyEn: "Commercial procurement records filtered and audited to exclude spam and non-trade mail.",
    supportingEvidenceAr: "قاعدة بيانات استفسارات المشترين المستخلصة من ملفات الإكسل المعتمدة.",
    supportingEvidenceEn: "Curated Excel database and correspondence logs (2023–2026).",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  food_inquiries_2025: {
    id: "food_inquiries_2025",
    nameAr: "طلبات شراء عام 2025 الموثقة لقطاع الأغذية",
    nameEn: "2025 Verified Food Purchase Inquiries",
    approvedValue: 269,
    unitAr: "طلب شراء",
    unitEn: "Inquiries",
    sector: "food",
    reportingPeriod: "Calendar Year 2025",
    calculationMethodologyAr: "حصر دقيق لكافة طلبات المشترين الواردة والمؤرخة في عام 2025.",
    calculationMethodologyEn: "Precise count of all documented buyer purchase inquiries dated in 2025.",
    supportingEvidenceAr: "سجل رسائل وقاعدة بيانات 2025 المستخلصة والمعالجة برمجيًا.",
    supportingEvidenceEn: "Audited 2025 commercial email ledger and purchase records.",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  // 4. Sustainability & Environmental Indicators
  sustainability_target_markets: {
    id: "sustainability_target_markets",
    nameAr: "الأسواق المستهدفة لقطاع الاستدامة",
    nameEn: "Sustainability Target Markets",
    approvedValue: 13,
    unitAr: "سوق إقليمي ودولي",
    unitEn: "Target Markets",
    sector: "environmental",
    reportingPeriod: "2025–2026",
    calculationMethodologyAr: "5 أسواق أولوية أولى (مصر، السعودية، الإمارات، عُمان، قطر) + 8 أسواق أولوية ثانية في أفريقيا والمغرب العربي.",
    calculationMethodologyEn: "5 Tier-1 strategic markets (Egypt, KSA, UAE, Oman, Qatar) + 8 Tier-2 African and Maghreb markets.",
    supportingEvidenceAr: "دراسات الجدوى ومذكرات التفاهم وبرامج المشروعات الوطنية المعتمدة.",
    supportingEvidenceEn: "National development programs and strategic market feasibility assessments.",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true
  },

  sustainability_active_projects: {
    id: "sustainability_active_projects",
    nameAr: "فرص ومناقصات الاستدامة المطروحة الموثقة",
    nameEn: "Documented Environmental Tenders & Projects",
    approvedValue: 10,
    unitAr: "مشروع وفرصة استثمارية",
    unitEn: "Active Opportunities",
    sector: "environmental",
    reportingPeriod: "Current Active Portfolios",
    calculationMethodologyAr: "المشروعات المطروحة من الجهات الحكومية والمناطق الصناعية بنماذج PPP / BOT / EPC.",
    calculationMethodologyEn: "Public tenders and C&I opportunities under PPP, BOT, EPC, and JV delivery models.",
    supportingEvidenceAr: "بيانات الطرح الرسمية من المركز الوطني لإدارة النفايات (موان)، وزارة البيئة، وبيئة عُمان.",
    supportingEvidenceEn: "Official procurement notices from MWAN KSA, Egypt EEAA, be'ah Oman, and DEWA.",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true,
    attributionNoteAr: "إفصاح شفاف كامل: تُنفذ المشروعات المباشرة استشاريًا، والمشروعات الكبرى عبر التحالفات الدولية المعتمدة.",
    attributionNoteEn: "Transparent delivery model: consulting delivered in-house, EPC/mega-plants delivered via certified international consortia."
  },

  sustainability_services_count: {
    id: "sustainability_services_count",
    nameAr: "محفظة الخدمات البيئية المتخصصة",
    nameEn: "Specialized Environmental Services Portfolio",
    approvedValue: 20,
    unitAr: "خدمة متخصصة عبر 6 فئات",
    unitEn: "Specialized Services across 6 Categories",
    sector: "environmental",
    reportingPeriod: "Active Portfolio",
    calculationMethodologyAr: "خدمات الامتثال، إدارة المخلفات، الطاقة الشمسية، ومعالجة المياه والتمويل الأخضر.",
    calculationMethodologyEn: "Compliance consulting, circular waste, C&I solar, effluent recycling, and green finance.",
    supportingEvidenceAr: "الملف التعريفي المعتمد لقطاع الاستدامة (DOC-ENV-01).",
    supportingEvidenceEn: "Official approved corporate profile for the sustainability sector.",
    lastVerificationDate: "2026-02-11",
    approvalStatus: "Approved",
    publicationPermission: true
  }
};

/**
 * Helper to safely get an approved corporate indicator
 */
export function getCorporateStat(id: string): CorporateIndicator | undefined {
  return CORPORATE_REGISTRY[id];
}

/**
 * Universal Corporate Data Standards
 */
export const CORPORATE_IDENTITY = {
  officialNameAr: "مجموعة سامي بن عياد",
  officialNameEn: "SAMI BIN AYYAD GROUP",
  officialWebsite: "https://www.sami-trade.com",
  officialEmail: "info@sami-trade.com",
  backupEmail: "ayyad.investments@gmail.com",
  officialPhone: "+20 12 222 380 72",
  centralRegistrationYear: 2023,
  foundationalContractingHeritage: 1977,
  realEstateAdvisoryStart: 2018,
  coreSectorsCount: 4,
  freeConsultationPolicy: {
    en: "All consultations provided by SAMI BIN AYYAD GROUP are completely free of charge. Our specialists will review your inquiry and provide initial professional guidance relevant to your selected business sector.",
    ar: "جميع الاستشارات المقدمة من مجموعة سامي بن عياد مجانية بالكامل دون أي رسوم. وسيقوم المختص في القطاع المعني بمراجعة طلبكم والتواصل معكم لمناقشة احتياجاتكم وتقديم التوجيه المهني الأولي المناسب."
  }
};

