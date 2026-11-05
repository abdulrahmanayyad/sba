export type ContactInquiryType =
  | "general_inquiry"
  | "business_inquiry"
  | "international_trade"
  | "product_inquiry"
  | "construction_contracting"
  | "environmental_services"
  | "investment_inquiry"
  | "partnership_proposal"
  | "media_pr"
  | "other";

export type ContactInquiryStatus =
  | "new"
  | "under_review"
  | "assigned"
  | "info_required"
  | "in_progress"
  | "resolved"
  | "closed";

export interface ContactInquiry {
  id: string;
  referenceCode: string;
  createdAt: string;
  updatedAt: string;
  type: ContactInquiryType;
  status: ContactInquiryStatus;
  assignedDepartment: string;
  applicant: {
    fullName: string;
    company?: string;
    jobTitle?: string;
    country: string;
    city?: string;
    email: string;
    phone: string;
    preferredContact: "email" | "phone" | "whatsapp";
  };
  details: {
    sector?: string;
    subject: string;
    message: string;
    expectedBudget?: string;
    expectedTimeline?: string;
    attachments?: Array<{ name: string; size: string }>;
  };
  internalNotes: Array<{ id: string; author: string; createdAt: string; text: string }>;
  auditHistory: Array<{ id: string; timestamp: string; action: string; by: string }>;
}

export type ComplaintCategory =
  | "services"
  | "product_quality"
  | "delayed_delivery"
  | "commercial_transaction"
  | "customer_service"
  | "employee_conduct"
  | "contractual_dispute"
  | "financial_administrative"
  | "website_technical"
  | "suggestion"
  | "other";

export type ComplaintStatus =
  | "received"
  | "under_review"
  | "assigned"
  | "info_required"
  | "under_investigation"
  | "resolution_proposed"
  | "resolved"
  | "closed";

export type ComplaintPriority = "low" | "medium" | "high" | "critical";

export interface ComplaintRecord {
  id: string;
  referenceCode: string;
  createdAt: string;
  updatedAt: string;
  category: ComplaintCategory;
  priority: ComplaintPriority;
  status: ComplaintStatus;
  assignedDepartment: string;
  assignedOfficer?: string;
  resolutionDetails?: string;
  closureDate?: string;
  complainant: {
    fullName: string;
    company?: string;
    country: string;
    email: string;
    phone: string;
    preferredContact: "email" | "phone" | "whatsapp";
    relationship: "customer" | "supplier" | "partner" | "employee" | "contractor" | "other";
  };
  details: {
    sector: string;
    subsidiary?: string;
    department?: string;
    incidentDate?: string;
    incidentLocation?: string;
    referenceNumber?: string;
    subject: string;
    description: string;
    desiredResolution?: string;
    attachments?: Array<{ name: string; size: string }>;
  };
  timelineUpdates: Array<{ id: string; timestamp: string; titleEn: string; titleAr: string; noteEn?: string; noteAr?: string }>;
  internalNotes: Array<{ id: string; author: string; createdAt: string; text: string }>;
  auditHistory: Array<{ id: string; timestamp: string; action: string; by: string }>;
}

export type OpportunityType =
  | "investment_opportunity"
  | "strategic_partnership"
  | "joint_venture"
  | "commercial_partnership"
  | "supply_distribution"
  | "new_business_project"
  | "construction_project"
  | "real_estate_investment"
  | "industrial_manufacturing"
  | "international_trade"
  | "environmental_sustainability"
  | "technology_digital"
  | "acquisition_investment"
  | "other";

export type OpportunityStage =
  | "idea"
  | "feasibility_completed"
  | "seeking_investment"
  | "ready_for_partnership"
  | "operational"
  | "expansion"
  | "existing_seeking_partner";

export type OpportunityStatus =
  | "new_submission"
  | "initial_review"
  | "info_required"
  | "under_evaluation"
  | "meeting_requested"
  | "negotiation"
  | "approved_for_discussion"
  | "declined"
  | "archived";

export interface OpportunityRecord {
  id: string;
  referenceCode: string;
  createdAt: string;
  updatedAt: string;
  type: OpportunityType;
  stage: OpportunityStage;
  status: OpportunityStatus;
  assignedManager?: string;
  applicant: {
    fullName: string;
    company?: string;
    country: string;
    city?: string;
    jobTitle?: string;
    email: string;
    phone: string;
    website?: string;
    linkedin?: string;
    preferredContact: "email" | "phone" | "whatsapp";
  };
  project: {
    name: string;
    sector: string;
    country?: string;
    city?: string;
    description: string;
    estimatedValue?: string;
    requiredInvestment?: string;
    currency?: string;
    investmentStructure?: string;
    revenueModel?: string;
    projectDuration?: string;
    partnershipShare?: string;
    expectedStartDate?: string;
    strategicRequirements: string[];
    attachments?: Array<{ name: string; size: string }>;
  };
  internalNotes: Array<{ id: string; author: string; createdAt: string; text: string }>;
  auditHistory: Array<{ id: string; timestamp: string; action: string; by: string }>;
}

export const INQUIRY_TYPES_MAP: Record<ContactInquiryType, { ar: string; en: string; dept: string }> = {
  general_inquiry: { ar: "استفسار عام", en: "General Inquiry", dept: "Corporate Communications" },
  business_inquiry: { ar: "استفسار تجاري", en: "Business Inquiry", dept: "Commercial Department" },
  international_trade: { ar: "التجارة الدولية", en: "International Trade", dept: "Global Trade & Export Division" },
  product_inquiry: { ar: "استفسار عن المنتجات", en: "Product Inquiry", dept: "Product Development & Sales" },
  construction_contracting: { ar: "المقاولات والإنشاءات", en: "Construction & Contracting", dept: "Engineering & Civil Works" },
  environmental_services: { ar: "الخدمات البيئية", en: "Environmental Services", dept: "Environmental Advisory & Biogas" },
  investment_inquiry: { ar: "استفسار استثماري", en: "Investment Inquiry", dept: "Investor Relations & Strategy" },
  partnership_proposal: { ar: "مقترح شراكة", en: "Partnership Proposal", dept: "Strategic Alliances Committee" },
  media_pr: { ar: "الإعلام والعلاقات العامة", en: "Media & Public Relations", dept: "Press & External Affairs" },
  other: { ar: "أخرى", en: "Other", dept: "Executive Office" },
};

export const COMPLAINT_CATEGORIES_MAP: Record<ComplaintCategory, { ar: string; en: string }> = {
  services: { ar: "شكوى بشأن الخدمات", en: "Complaint Regarding Services" },
  product_quality: { ar: "جودة المنتجات", en: "Product Quality" },
  delayed_delivery: { ar: "تأخر التسليم", en: "Delayed Delivery" },
  commercial_transaction: { ar: "معاملة تجارية", en: "Commercial Transaction" },
  customer_service: { ar: "خدمة العملاء", en: "Customer Service" },
  employee_conduct: { ar: "سلوك أحد الموظفين", en: "Employee Conduct" },
  contractual_dispute: { ar: "خلاف تعاقدي", en: "Contractual Dispute" },
  financial_administrative: { ar: "مشكلة مالية أو إدارية", en: "Financial or Administrative Issue" },
  website_technical: { ar: "مشكلة تقنية أو بالموقع", en: "Website or Technical Issue" },
  suggestion: { ar: "مقترح تطوير", en: "Suggestion for Improvement" },
  other: { ar: "أخرى", en: "Other" },
};

export const COMPLAINT_STATUSES_MAP: Record<ComplaintStatus, { ar: string; en: string; color: string; bg: string }> = {
  received: { ar: "تم الاستلام", en: "Received", color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
  under_review: { ar: "قيد المراجعة", en: "Under Review", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  assigned: { ar: "تم تحويلها للإدارة المختصة", en: "Assigned", color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/30" },
  info_required: { ar: "مطلوب معلومات إضافية", en: "Additional Information Required", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/30" },
  under_investigation: { ar: "قيد التحقيق", en: "Under Investigation", color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/30" },
  resolution_proposed: { ar: "تم اقتراح حل", en: "Resolution Proposed", color: "text-teal-500", bg: "bg-teal-500/10 border-teal-500/30" },
  resolved: { ar: "تمت المعالجة", en: "Resolved", color: "text-brand-green", bg: "bg-brand-green/10 border-brand-green/30" },
  closed: { ar: "تم الإغلاق", en: "Closed", color: "text-slate-500", bg: "bg-slate-500/10 border-slate-500/30" },
};

export const OPPORTUNITY_TYPES_MAP: Record<OpportunityType, { ar: string; en: string }> = {
  investment_opportunity: { ar: "فرصة استثمارية", en: "Investment Opportunity" },
  strategic_partnership: { ar: "شراكة استراتيجية", en: "Strategic Partnership" },
  joint_venture: { ar: "مشروع مشترك", en: "Joint Venture" },
  commercial_partnership: { ar: "تعاون تجاري", en: "Commercial Partnership" },
  supply_distribution: { ar: "فرصة توريد وتوزيع", en: "Supply & Distribution Opportunity" },
  new_business_project: { ar: "مشروع تجاري جديد", en: "New Business Project" },
  construction_project: { ar: "مشروع مقاولات وإنشاءات", en: "Construction & Contracting Project" },
  real_estate_investment: { ar: "استثمار عقاري", en: "Real Estate Investment" },
  industrial_manufacturing: { ar: "فرصة صناعية أو تصنيعية", en: "Industrial & Manufacturing Opportunity" },
  international_trade: { ar: "فرصة تجارة دولية", en: "International Trade Opportunity" },
  environmental_sustainability: { ar: "مشروع بيئي واستدامة", en: "Environmental & Sustainability Project" },
  technology_digital: { ar: "حلول تقنية ورقمية", en: "Technology & Digital Solutions" },
  acquisition_investment: { ar: "استحواذ أو استثمار في شركة", en: "Acquisition or Company Investment" },
  other: { ar: "فرصة أخرى", en: "Other Opportunity" },
};

export const OPPORTUNITY_STAGES_MAP: Record<OpportunityStage, { ar: string; en: string }> = {
  idea: { ar: "مرحلة الفكرة", en: "Idea Stage" },
  feasibility_completed: { ar: "دراسة الجدوى مكتملة", en: "Feasibility Study Completed" },
  seeking_investment: { ar: "طلب استثمار وتمويل", en: "Seeking Investment" },
  ready_for_partnership: { ar: "جاهز للشراكة", en: "Ready for Partnership" },
  operational: { ar: "مشروع قائم تشغيليًا", en: "Operational Project" },
  expansion: { ar: "مرحلة التوسع والنمو", en: "Expansion Stage" },
  existing_seeking_partner: { ar: "نشاط قائم يبحث عن شريك استراتيجي", en: "Existing Business Seeking Strategic Partner" },
};

export const OPPORTUNITY_STATUSES_MAP: Record<OpportunityStatus, { ar: string; en: string; color: string; bg: string }> = {
  new_submission: { ar: "طلب جديد", en: "New Submission", color: "text-blue-500", bg: "bg-blue-500/10 border-blue-500/30" },
  initial_review: { ar: "مراجعة أولية", en: "Initial Review", color: "text-amber-500", bg: "bg-amber-500/10 border-amber-500/30" },
  info_required: { ar: "مطلوب معلومات إضافية", en: "Additional Info Required", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/30" },
  under_evaluation: { ar: "قيد التقييم الفني والاستثماري", en: "Under Evaluation", color: "text-indigo-500", bg: "bg-indigo-500/10 border-indigo-500/30" },
  meeting_requested: { ar: "مطلوب عقد اجتماع تنسيقي", en: "Meeting Requested", color: "text-brand-orange", bg: "bg-brand-orange/10 border-brand-orange/30" },
  negotiation: { ar: "مرحلة التفاوض ومسودة التفاهم", en: "Negotiation", color: "text-cyan-500", bg: "bg-cyan-500/10 border-cyan-500/30" },
  approved_for_discussion: { ar: "معتمد للنقاش الإضافي", en: "Approved for Further Discussion", color: "text-brand-green", bg: "bg-brand-green/10 border-brand-green/30" },
  declined: { ar: "معتذر عنه", en: "Declined", color: "text-red-500", bg: "bg-red-500/10 border-red-500/30" },
  archived: { ar: "مؤرشف", en: "Archived", color: "text-slate-500", bg: "bg-slate-500/10 border-slate-500/30" },
};

// Seed Inquiries
const SEED_INQUIRIES: ContactInquiry[] = [
  {
    id: "inq-101",
    referenceCode: "SBA-INQ-2026-8912",
    createdAt: "2026-11-04T11:20:00Z",
    updatedAt: "2026-11-04T15:30:00Z",
    type: "international_trade",
    status: "in_progress",
    assignedDepartment: "Global Trade & Export Division",
    applicant: {
      fullName: "Eng. Ahmed El-Saeed",
      company: "Gulf Food Trade LLC",
      jobTitle: "Procurement Director",
      country: "Saudi Arabia",
      city: "Riyadh",
      email: "ahmed.saeed@gulffood.sa",
      phone: "+966 50 123 4567",
      preferredContact: "email",
    },
    details: {
      sector: "Food & Natural Products",
      subject: "Annual Supply Agreement for Premium Egyptian Dates and Olive Oil",
      message: "We are seeking a formal annual supply framework for premium Medjool dates (Grade A) and cold-pressed extra virgin olive oil with private label packaging for our hypermarket chain across the GCC.",
      expectedBudget: "$250,000 – $500,000",
      expectedTimeline: "Q1 2027",
      attachments: [{ name: "Specifications_Dates_OliveOil_2027.pdf", size: "1.8 MB" }],
    },
    internalNotes: [
      { id: "note-1", author: "Hossam Zaki", createdAt: "2026-11-04T15:30:00Z", text: "Quality specification sheet matched. Sent initial catalog and FOB Alexandria price tiers." }
    ],
    auditHistory: [
      { id: "aud-1", timestamp: "2026-11-04T11:20:00Z", action: "Submitted via Portal", by: "Eng. Ahmed El-Saeed" },
      { id: "aud-2", timestamp: "2026-11-04T15:30:00Z", action: "Assigned to Global Trade & Export", by: "System Intake" },
    ],
  },
  {
    id: "inq-102",
    referenceCode: "SBA-INQ-2026-8905",
    createdAt: "2026-11-03T09:15:00Z",
    updatedAt: "2026-11-03T10:00:00Z",
    type: "construction_contracting",
    status: "under_review",
    assignedDepartment: "Engineering & Civil Works",
    applicant: {
      fullName: "Dr. Mohamed Badawi",
      company: "Nile Specialized Healthcare",
      jobTitle: "Board Member",
      country: "Egypt",
      city: "Cairo",
      email: "m.badawi@nilehealth.eg",
      phone: "+20 100 555 4321",
      preferredContact: "phone",
    },
    details: {
      sector: "Contracting & Construction",
      subject: "Specialized Medical Fit-Out & MEP for Surgical Center Expansion",
      message: "Inquiry regarding turnkey electromechanical and civil execution for 4 operating theatres and central sterilization unit according to Egyptian healthcare codes.",
      expectedBudget: "+15,000,000 EGP",
      expectedTimeline: "6 Months",
    },
    internalNotes: [
      { id: "note-2", author: "Eng. Mahmoud", createdAt: "2026-11-03T10:00:00Z", text: "Hospital engineering team scheduled a site visit and initial BOQ review." }
    ],
    auditHistory: [
      { id: "aud-3", timestamp: "2026-11-03T09:15:00Z", action: "Submitted via Website", by: "Dr. Mohamed Badawi" },
    ],
  },
];

// Seed Complaints
const SEED_COMPLAINTS: ComplaintRecord[] = [
  {
    id: "cmp-201",
    referenceCode: "SBA-CMP-2026-4401",
    createdAt: "2026-11-02T14:10:00Z",
    updatedAt: "2026-11-03T16:00:00Z",
    category: "delayed_delivery",
    priority: "high",
    status: "under_investigation",
    assignedDepartment: "Logistics & Supply Chain",
    assignedOfficer: "Capt. Tarek Farouk",
    complainant: {
      fullName: "Karim Mansour",
      company: "Mediterranean Apparel Stores",
      country: "Egypt",
      email: "k.mansour@medapparel.com",
      phone: "+20 122 998 7766",
      preferredContact: "phone",
      relationship: "customer",
    },
    details: {
      sector: "Garment Manufacturing",
      subsidiary: "JZRA / Apparel Factory",
      department: "Finished Goods Dispatch",
      incidentDate: "2026-10-30",
      incidentLocation: "Alexandria Logistics Terminal",
      referenceNumber: "ORD-SBA-2026-781",
      subject: "Delay in Dispatching Shipment #781 of Classic Oxford Shirts",
      description: "Our agreed delivery date for 2,500 units of classic Oxford shirts was October 28. The shipment was delayed due to customs document processing at the terminal.",
      desiredResolution: "Expedite dispatch within 48 hours and waive terminal storage charges.",
      attachments: [{ name: "BillOfLading_781.pdf", size: "1.1 MB" }],
    },
    timelineUpdates: [
      { id: "t-1", timestamp: "2026-11-02T14:10:00Z", titleEn: "Complaint Received", titleAr: "تم استلام الشكوى وتسجيلها رسميًا", noteEn: "Complaint registered and routed to Quality & Logistics Office.", noteAr: "تم قيد الشكوى وتحويلها فورًا لمكتب الجودة وسلاسل الإمداد." },
      { id: "t-2", timestamp: "2026-11-03T11:00:00Z", titleEn: "Investigation Commenced", titleAr: "بدء التحقيق والتنسيق مع الميناء", noteEn: "Coordination with customs broker and shipping line initiated.", noteAr: "تم التواصل مع المخلص الجمركي والتوكيل الملاحي لإنهاء الإجراءات." },
    ],
    internalNotes: [
      { id: "cn-1", author: "Capt. Tarek", createdAt: "2026-11-03T11:00:00Z", text: "Customs clearance certificate secured this morning. Container scheduled for loading tomorrow morning." }
    ],
    auditHistory: [
      { id: "ca-1", timestamp: "2026-11-02T14:10:00Z", action: "Submitted via Portal", by: "Karim Mansour" },
    ],
  },
  {
    id: "cmp-202",
    referenceCode: "SBA-CMP-2026-4392",
    createdAt: "2026-10-28T09:40:00Z",
    updatedAt: "2026-10-31T12:00:00Z",
    category: "suggestion",
    priority: "low",
    status: "resolved",
    assignedDepartment: "Digital Solutions & Customer Care",
    assignedOfficer: "Heba Adel",
    resolutionDetails: "Customer suggestion integrated into the 2026 product catalog portal.",
    closureDate: "2026-10-31",
    complainant: {
      fullName: "Dr. Khaled Al-Zahrani",
      company: "Saudi Environmental Research Institute",
      country: "Saudi Arabia",
      email: "k.zahrani@seri.gov.sa",
      phone: "+966 54 888 1122",
      preferredContact: "email",
      relationship: "partner",
    },
    details: {
      sector: "Environmental Solutions",
      subject: "Suggestion: Add Search by Feedstock Type to Biogas Data Sheets",
      message: "It would be tremendously beneficial for international partners if the technical documentation allowed filtering biogas plants by organic feedstock type (agro-waste, dairy slurry, sewage).",
      description: "It would be tremendously beneficial for international partners if the technical documentation allowed filtering biogas plants by organic feedstock type (agro-waste, dairy slurry, sewage).",
      desiredResolution: "Incorporate feedstock categorization in technical specs download section.",
    },
    timelineUpdates: [
      { id: "t-3", timestamp: "2026-10-28T09:40:00Z", titleEn: "Suggestion Logged", titleAr: "تم تسجيل المقترح", noteEn: "Passed to Engineering Documentation unit.", noteAr: "تمت إحالة المقترح لفريق التوثيق الفني." },
      { id: "t-4", timestamp: "2026-10-31T12:00:00Z", titleEn: "Suggestion Implemented", titleAr: "تم اعتماد وتنفيذ المقترح", noteEn: "Feedstock filter added to environmental downloads portal.", noteAr: "تمت إضافة تصنيف المواد الأولية إلى مركز التحميلات البيئية." },
    ],
    internalNotes: [
      { id: "cn-2", author: "Heba Adel", createdAt: "2026-10-31T12:00:00Z", text: "Communicated thank you letter and updated PDF download links to partner." }
    ],
    auditHistory: [
      { id: "ca-2", timestamp: "2026-10-28T09:40:00Z", action: "Submitted via Portal", by: "Dr. Khaled Al-Zahrani" },
      { id: "ca-3", timestamp: "2026-10-31T12:00:00Z", action: "Resolved & Closed", by: "Heba Adel" },
    ],
  },
];

// Seed Opportunities
const SEED_OPPORTUNITIES: OpportunityRecord[] = [
  {
    id: "opp-301",
    referenceCode: "SBA-OPP-2026-7721",
    createdAt: "2026-11-01T10:30:00Z",
    updatedAt: "2026-11-04T14:00:00Z",
    type: "joint_venture",
    stage: "operational",
    status: "under_evaluation",
    assignedManager: "Executive Strategy Office",
    applicant: {
      fullName: "Marc Dumont",
      company: "Helvetia CleanTech S.A.",
      country: "Switzerland",
      city: "Geneva",
      jobTitle: "Chief Investment Officer",
      email: "m.dumont@helvetia-cleantech.ch",
      phone: "+41 22 710 4400",
      website: "https://www.helvetia-cleantech.ch",
      preferredContact: "email",
    },
    project: {
      name: "Middle East Modular Dry Fermentation Biogas Rollout",
      sector: "Environmental Solutions & Sustainability",
      country: "Egypt & GCC",
      city: "Suez Industrial Zone & Dammam",
      description: "Co-development and SPV structuring for 5 standardized modular RSD anaerobic dry fermentation plants converting municipal and agricultural green waste into biomethane and organic fertilizer.",
      estimatedValue: "$18,000,000",
      requiredInvestment: "$6,500,000 equity co-investment",
      currency: "USD",
      investmentStructure: "SPV 60/40 Equity Joint Venture",
      revenueModel: "Long-term PPA with industrial off-takers + organic certified bio-fertilizer sales",
      projectDuration: "3 Years implementation",
      partnershipShare: "40% SBA Group, 60% Helvetia Consortium",
      expectedStartDate: "Q2 2027",
      strategicRequirements: ["Technical Expertise", "Local Project Development", "Operational Management", "Market Access"],
      attachments: [{ name: "CleanTech_RSD_Investment_Teaser.pdf", size: "4.2 MB" }],
    },
    internalNotes: [
      { id: "on-1", author: "Executive Strategy", createdAt: "2026-11-04T14:00:00Z", text: "High strategic fit with our Swiss Renergon partnership. Preliminary financial model under review by CFO." }
    ],
    auditHistory: [
      { id: "oa-1", timestamp: "2026-11-01T10:30:00Z", action: "Submitted via Opportunity Portal", by: "Marc Dumont" },
      { id: "oa-2", timestamp: "2026-11-04T14:00:00Z", action: "Status: new_submission -> under_evaluation", by: "Executive Strategy" },
    ],
  },
  {
    id: "opp-302",
    referenceCode: "SBA-OPP-2026-7714",
    createdAt: "2026-10-27T16:00:00Z",
    updatedAt: "2026-10-30T11:00:00Z",
    type: "supply_distribution",
    stage: "ready_for_partnership",
    status: "meeting_requested",
    assignedManager: "Garment Commercial Team",
    applicant: {
      fullName: "Sultan Al-Shamsi",
      company: "Al-Shamsi Retail Group",
      country: "United Arab Emirates",
      city: "Dubai",
      jobTitle: "Commercial Managing Director",
      email: "sultan@alshamsi-retail.ae",
      phone: "+971 4 330 9988",
      website: "https://www.alshamsi-retail.ae",
      preferredContact: "whatsapp",
    },
    project: {
      name: "Exclusive GCC Retail Distribution for JZRA Fashion Brand",
      sector: "Garment Manufacturing & Fashion",
      country: "UAE, Saudi Arabia, Kuwait, Qatar",
      description: "Exclusive master franchise and distribution rights for JZRA Turkish-style apparel collections across 24 premium shopping malls in UAE, Saudi Arabia and Qatar.",
      estimatedValue: "$5,000,000",
      requiredInvestment: "Zero direct capex required from SBA; retail fit-out borne by distributor",
      currency: "USD",
      revenueModel: "Wholesale FOB + 8% retail royalty on gross sales",
      projectDuration: "5 Years renewable",
      partnershipShare: "Master Distribution Franchise",
      expectedStartDate: "Summer 2027",
      strategicRequirements: ["Distribution Network", "Manufacturing Capabilities", "Market Access"],
      attachments: [{ name: "AlShamsi_Retail_Footprint_2026.pdf", size: "3.5 MB" }],
    },
    internalNotes: [
      { id: "on-2", author: "Garment Commercial", createdAt: "2026-10-30T11:00:00Z", text: "Commercial terms approved in principle. Video conference scheduled with Sheikh Sami Bin Ayyad." }
    ],
    auditHistory: [
      { id: "oa-3", timestamp: "2026-10-27T16:00:00Z", action: "Submitted via Portal", by: "Sultan Al-Shamsi" },
      { id: "oa-4", timestamp: "2026-10-30T11:00:00Z", action: "Meeting Requested", by: "Garment Commercial Team" },
    ],
  },
];

const STORAGE_KEY_INQUIRIES = "sba_portal_inquiries_db_v2";
const STORAGE_KEY_COMPLAINTS = "sba_portal_complaints_db_v2";
const STORAGE_KEY_OPPORTUNITIES = "sba_portal_opportunities_db_v2";

class ContactPortalService {
  // Inquiries
  public getInquiries(): ContactInquiry[] {
    if (typeof window === "undefined") return SEED_INQUIRIES;
    try {
      const data = localStorage.getItem(STORAGE_KEY_INQUIRIES);
      if (!data) {
        localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(SEED_INQUIRIES));
        return SEED_INQUIRIES;
      }
      return JSON.parse(data);
    } catch {
      return SEED_INQUIRIES;
    }
  }

  private saveInquiries(data: ContactInquiry[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_INQUIRIES, JSON.stringify(data));
    } catch (e) {
      console.error("Save Inquiries Error:", e);
    }
  }

  public submitInquiry(payload: Omit<ContactInquiry, "id" | "referenceCode" | "createdAt" | "updatedAt" | "status" | "assignedDepartment" | "internalNotes" | "auditHistory">): ContactInquiry {
    const list = this.getInquiries();
    const refCode = `SBA-INQ-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();
    const dept = INQUIRY_TYPES_MAP[payload.type]?.dept || "General Corporate Intake";

    const item: ContactInquiry = {
      id: `inq-${Date.now()}`,
      referenceCode: refCode,
      createdAt: now,
      updatedAt: now,
      status: "new",
      assignedDepartment: dept,
      ...payload,
      internalNotes: [
        { id: `note-${Date.now()}`, author: "System Intake", createdAt: now, text: `Inquiry registered with ref code ${refCode}. Routed to ${dept}.` }
      ],
      auditHistory: [
        { id: `aud-${Date.now()}`, timestamp: now, action: "Submitted via Contact Portal", by: payload.applicant.fullName }
      ],
    };

    list.unshift(item);
    this.saveInquiries(list);
    return item;
  }

  public updateInquiryStatus(id: string, newStatus: ContactInquiryStatus, byUser: string, note?: string): ContactInquiry | null {
    const list = this.getInquiries();
    const item = list.find((i) => i.id === id);
    if (!item) return null;

    const oldStatus = item.status;
    item.status = newStatus;
    item.updatedAt = new Date().toISOString();

    if (note?.trim()) {
      item.internalNotes.unshift({
        id: `note-${Date.now()}`,
        author: byUser,
        createdAt: item.updatedAt,
        text: note.trim(),
      });
    }

    item.auditHistory.unshift({
      id: `aud-${Date.now()}`,
      timestamp: item.updatedAt,
      action: `Status changed: ${oldStatus} -> ${newStatus}`,
      by: byUser,
    });

    this.saveInquiries(list);
    return item;
  }

  // Complaints
  public getComplaints(): ComplaintRecord[] {
    if (typeof window === "undefined") return SEED_COMPLAINTS;
    try {
      const data = localStorage.getItem(STORAGE_KEY_COMPLAINTS);
      if (!data) {
        localStorage.setItem(STORAGE_KEY_COMPLAINTS, JSON.stringify(SEED_COMPLAINTS));
        return SEED_COMPLAINTS;
      }
      return JSON.parse(data);
    } catch {
      return SEED_COMPLAINTS;
    }
  }

  private saveComplaints(data: ComplaintRecord[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_COMPLAINTS, JSON.stringify(data));
    } catch (e) {
      console.error("Save Complaints Error:", e);
    }
  }

  public submitComplaint(payload: Omit<ComplaintRecord, "id" | "referenceCode" | "createdAt" | "updatedAt" | "status" | "assignedDepartment" | "timelineUpdates" | "internalNotes" | "auditHistory">): ComplaintRecord {
    const list = this.getComplaints();
    const refCode = `SBA-CMP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();

    const item: ComplaintRecord = {
      id: `cmp-${Date.now()}`,
      referenceCode: refCode,
      createdAt: now,
      updatedAt: now,
      status: "received",
      assignedDepartment: "Quality & Governance Office",
      ...payload,
      timelineUpdates: [
        {
          id: `t-${Date.now()}`,
          timestamp: now,
          titleEn: "Complaint Received",
          titleAr: "تم استلام الشكوى وتسجيلها رسميًا",
          noteEn: "Complaint registered in SBA Governance Portal. Under preliminary review.",
          noteAr: "تم قيد الشكوى بنجاح وسيتم فحصها بسرية واهتمام من الإدارة المختصة.",
        }
      ],
      internalNotes: [
        { id: `cn-${Date.now()}`, author: "Quality Intake", createdAt: now, text: `Complaint registered with reference ${refCode}. Priority: ${payload.priority}.` }
      ],
      auditHistory: [
        { id: `ca-${Date.now()}`, timestamp: now, action: "Submitted via Complaints Portal", by: payload.complainant.fullName }
      ],
    };

    list.unshift(item);
    this.saveComplaints(list);
    return item;
  }

  public trackComplaint(referenceCode: string, email: string): ComplaintRecord | null {
    const list = this.getComplaints();
    const cleanRef = referenceCode.trim().toUpperCase();
    const cleanEmail = email.trim().toLowerCase();

    const found = list.find(
      (c) => c.referenceCode.toUpperCase() === cleanRef && c.complainant.email.toLowerCase() === cleanEmail
    );

    if (!found) return null;

    // Return a sanitized copy without sensitive internal notes of other staff
    return {
      ...found,
      internalNotes: [], // Protected from public exposure
    };
  }

  public updateComplaintStatus(
    id: string,
    newStatus: ComplaintStatus,
    byUser: string,
    resolutionNote?: string,
    closureDate?: string
  ): ComplaintRecord | null {
    const list = this.getComplaints();
    const item = list.find((c) => c.id === id);
    if (!item) return null;

    const oldStatus = item.status;
    item.status = newStatus;
    item.updatedAt = new Date().toISOString();

    if (resolutionNote?.trim()) {
      item.resolutionDetails = resolutionNote.trim();
      item.internalNotes.unshift({
        id: `cn-${Date.now()}`,
        author: byUser,
        createdAt: item.updatedAt,
        text: `Resolution update: ${resolutionNote.trim()}`,
      });
    }

    if (closureDate) {
      item.closureDate = closureDate;
    }

    // Add public timeline update
    const cfg = COMPLAINT_STATUSES_MAP[newStatus];
    item.timelineUpdates.unshift({
      id: `t-${Date.now()}`,
      timestamp: item.updatedAt,
      titleEn: `Status Updated: ${cfg.en}`,
      titleAr: `تحديث الحالة: ${cfg.ar}`,
      noteEn: resolutionNote,
      noteAr: resolutionNote,
    });

    item.auditHistory.unshift({
      id: `ca-${Date.now()}`,
      timestamp: item.updatedAt,
      action: `Status: ${oldStatus} -> ${newStatus}`,
      by: byUser,
    });

    this.saveComplaints(list);
    return item;
  }

  // Opportunities
  public getOpportunities(): OpportunityRecord[] {
    if (typeof window === "undefined") return SEED_OPPORTUNITIES;
    try {
      const data = localStorage.getItem(STORAGE_KEY_OPPORTUNITIES);
      if (!data) {
        localStorage.setItem(STORAGE_KEY_OPPORTUNITIES, JSON.stringify(SEED_OPPORTUNITIES));
        return SEED_OPPORTUNITIES;
      }
      return JSON.parse(data);
    } catch {
      return SEED_OPPORTUNITIES;
    }
  }

  private saveOpportunities(data: OpportunityRecord[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY_OPPORTUNITIES, JSON.stringify(data));
    } catch (e) {
      console.error("Save Opportunities Error:", e);
    }
  }

  public submitOpportunity(payload: Omit<OpportunityRecord, "id" | "referenceCode" | "createdAt" | "updatedAt" | "status" | "assignedManager" | "internalNotes" | "auditHistory">): OpportunityRecord {
    const list = this.getOpportunities();
    const refCode = `SBA-OPP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const now = new Date().toISOString();

    const item: OpportunityRecord = {
      id: `opp-${Date.now()}`,
      referenceCode: refCode,
      createdAt: now,
      updatedAt: now,
      status: "new_submission",
      assignedManager: "Executive Investment Committee",
      ...payload,
      internalNotes: [
        { id: `on-${Date.now()}`, author: "Investment Portal", createdAt: now, text: `Opportunity logged with reference ${refCode}. Stage: ${payload.stage}.` }
      ],
      auditHistory: [
        { id: `oa-${Date.now()}`, timestamp: now, action: "Submitted via Opportunity Portal", by: payload.applicant.fullName }
      ],
    };

    list.unshift(item);
    this.saveOpportunities(list);
    return item;
  }

  public updateOpportunityStatus(id: string, newStatus: OpportunityStatus, byUser: string, note?: string): OpportunityRecord | null {
    const list = this.getOpportunities();
    const item = list.find((o) => o.id === id);
    if (!item) return null;

    const oldStatus = item.status;
    item.status = newStatus;
    item.updatedAt = new Date().toISOString();

    if (note?.trim()) {
      item.internalNotes.unshift({
        id: `on-${Date.now()}`,
        author: byUser,
        createdAt: item.updatedAt,
        text: note.trim(),
      });
    }

    item.auditHistory.unshift({
      id: `oa-${Date.now()}`,
      timestamp: item.updatedAt,
      action: `Status: ${oldStatus} -> ${newStatus}`,
      by: byUser,
    });

    this.saveOpportunities(list);
    return item;
  }
}

export const contactPortalSystem = new ContactPortalService();

