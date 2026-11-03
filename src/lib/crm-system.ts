export type InquiryType =
  | "construction_project"
  | "project_verification"
  | "environmental_consultation"
  | "garment_manufacturing"
  | "food_supply"
  | "investment_inquiry"
  | "partnership_application"
  | "supplier_registration"
  | "career_application";

export type InquiryStatus =
  | "new"
  | "under_review"
  | "info_required"
  | "in_progress"
  | "approved"
  | "rejected"
  | "closed";

export type InquirySector =
  | "construction"
  | "garment"
  | "environmental"
  | "food"
  | "investor"
  | "group";

export interface InternalNote {
  id: string;
  author: string;
  createdAt: string;
  text: string;
}

export interface AuditRecord {
  id: string;
  timestamp: string;
  action: string;
  by: string;
  notes?: string;
}

export interface CrmInquiry {
  id: string;
  referenceCode: string;
  createdAt: string;
  updatedAt: string;
  sector: InquirySector;
  type: InquiryType;
  status: InquiryStatus;
  assignedOfficer: string;
  applicant: {
    fullName: string;
    organization: string;
    email: string;
    phone: string;
    country: string;
    role?: string;
  };
  details: {
    title: string;
    description: string;
    estimatedVolume?: string;
    preferredTimeline?: string;
    targetProducts?: string[];
    attachments?: Array<{ name: string; size: string }>;
  };
  internalNotes: InternalNote[];
  auditHistory: AuditRecord[];
}

export const INQUIRY_TYPE_CONFIG: Record<
  InquiryType,
  { labelEn: string; labelAr: string; sector: InquirySector }
> = {
  construction_project: {
    labelEn: "Construction Project Request",
    labelAr: "طلب تنفيذ مشروع مقاولات",
    sector: "construction",
  },
  project_verification: {
    labelEn: "Project Verification Request",
    labelAr: "طلب تحقق من سابقة أعمال",
    sector: "construction",
  },
  environmental_consultation: {
    labelEn: "Environmental Consultation",
    labelAr: "استشارة بيئية وتقييم أثر",
    sector: "environmental",
  },
  garment_manufacturing: {
    labelEn: "Garment Manufacturing Request",
    labelAr: "طلب تصنيع ملابس وتوريد OEM",
    sector: "garment",
  },
  food_supply: {
    labelEn: "Food & Agri Supply Request",
    labelAr: "طلب توريد أغذية ومنتجات طبيعية",
    sector: "food",
  },
  investment_inquiry: {
    labelEn: "Institutional Investment Inquiry",
    labelAr: "استفسار وشراكة استثمارية",
    sector: "investor",
  },
  partnership_application: {
    labelEn: "Strategic Partnership Application",
    labelAr: "طلب انضمام كشريك استراتيجي",
    sector: "group",
  },
  supplier_registration: {
    labelEn: "Supplier & Vendor Registration",
    labelAr: "تسجيل مورد معتمد",
    sector: "group",
  },
  career_application: {
    labelEn: "Career & Talent Application",
    labelAr: "طلب توظيف والتحاق بالكادر",
    sector: "group",
  },
};

export const INQUIRY_STATUS_CONFIG: Record<
  InquiryStatus,
  { labelEn: string; labelAr: string; color: string; bg: string }
> = {
  new: {
    labelEn: "New",
    labelAr: "جديد وغير مسند",
    color: "text-blue-500",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  under_review: {
    labelEn: "Under Review",
    labelAr: "قيد المراجعة الفنية",
    color: "text-amber-500",
    bg: "bg-amber-500/10 border-amber-500/20",
  },
  info_required: {
    labelEn: "Info Required",
    labelAr: "مطلوب مستندات إضافية",
    color: "text-purple-500",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  in_progress: {
    labelEn: "In Progress",
    labelAr: "قيد الدراسة والتعاقد",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10 border-brand-orange/20",
  },
  approved: {
    labelEn: "Approved",
    labelAr: "معتمد ومقبول",
    color: "text-brand-green",
    bg: "bg-brand-green/10 border-brand-green/20",
  },
  rejected: {
    labelEn: "Rejected",
    labelAr: "مرفوض / غير مستوفٍ",
    color: "text-red-500",
    bg: "bg-red-500/10 border-red-500/20",
  },
  closed: {
    labelEn: "Closed",
    labelAr: "مكتمل ومغلق",
    color: "text-slate-500",
    bg: "bg-slate-500/10 border-slate-500/20",
  },
};

const SEED_INQUIRIES: CrmInquiry[] = [
  {
    id: "inq-01",
    referenceCode: "SBA-2026-8912",
    createdAt: "2026-11-03T10:15:00Z",
    updatedAt: "2026-11-03T14:30:00Z",
    sector: "environmental",
    type: "environmental_consultation",
    status: "new",
    assignedOfficer: "Dr. Abdelhakam Mashhour",
    applicant: {
      fullName: "Eng. Tareq Al-Mansoor",
      organization: "Delta Petrochemical Industries",
      email: "t.mansoor@deltapetro.eg",
      phone: "+20 102 345 6789",
      country: "Egypt",
      role: "EHS Operations Director",
    },
    details: {
      title: "Biogas Dry Digestion & Waste-to-Energy Feasibility Request",
      description: "Requesting a detailed engineering feasibility evaluation to convert 45,000 tons/year of organic agro-industrial sludge into renewable biogas utilizing Swiss RSD dry anaerobic technology.",
      estimatedVolume: "45,000 tons/yr",
      preferredTimeline: "Q1 2027",
      targetProducts: ["RSD Biogas Plant", "Carbon Footprint Assessment"],
      attachments: [{ name: "Delta_Sludge_Analysis_2026.pdf", size: "2.8 MB" }],
    },
    internalNotes: [
      {
        id: "note-1",
        author: "System Intake",
        createdAt: "2026-11-03T10:15:00Z",
        text: "Inquiry received through the Environmental Sector portal. Automatically assigned to Environmental Engineering division.",
      },
    ],
    auditHistory: [
      {
        id: "audit-1",
        timestamp: "2026-11-03T10:15:00Z",
        action: "Inquiry Created",
        by: "System",
      },
    ],
  },
  {
    id: "inq-02",
    referenceCode: "SBA-2026-8910",
    createdAt: "2026-11-02T16:40:00Z",
    updatedAt: "2026-11-03T09:20:00Z",
    sector: "garment",
    type: "garment_manufacturing",
    status: "in_progress",
    assignedOfficer: "Sarah Mostafa (Garment Commercial Team)",
    applicant: {
      fullName: "Marcus Weber",
      organization: "Nordic Kids Fashion GmbH",
      email: "m.weber@nordickids.de",
      phone: "+49 89 452 1190",
      country: "Germany",
      role: "Head of Global Sourcing",
    },
    details: {
      title: "FOB Garment Manufacturing — Summer 2027 Organic Cotton Line",
      description: "Looking for contract manufacturing for 35,000 units of children casual sets (models SUM-005 to SUM-025) certified OEKO-TEX Standard 100 with private hangtags and barcode distribution cartons.",
      estimatedVolume: "35,000 units",
      preferredTimeline: "Delivery by May 2027",
      targetProducts: ["SBA-GAR-CAS01", "SBA-GAR-OEM02"],
      attachments: [{ name: "NordicKids_TechPack_SS27.pdf", size: "4.5 MB" }],
    },
    internalNotes: [
      {
        id: "note-2",
        author: "Sarah Mostafa",
        createdAt: "2026-11-03T09:20:00Z",
        text: "Fabric mill confirmed organic cotton yarn availability. Drafted FOB Alexandria quotation ($4.20/pc). Waiting for client size breakdown.",
      },
    ],
    auditHistory: [
      { id: "audit-2", timestamp: "2026-11-02T16:40:00Z", action: "Created", by: "Portal" },
      { id: "audit-3", timestamp: "2026-11-03T09:20:00Z", action: "Status Changed: under_review -> in_progress", by: "Sarah Mostafa" },
    ],
  },
  {
    id: "inq-03",
    referenceCode: "SBA-2026-8904",
    createdAt: "2026-11-01T11:20:00Z",
    updatedAt: "2026-11-02T14:10:00Z",
    sector: "investor",
    type: "investment_inquiry",
    status: "under_review",
    assignedOfficer: "Executive Strategy Office",
    applicant: {
      fullName: "Faisal Al-Otaibi",
      organization: "Al-Riyadh Sovereign Real Asset Fund",
      email: "f.alotaibi@riyadhfund.sa",
      phone: "+966 11 890 2233",
      country: "Saudi Arabia",
      role: "Senior Investment Director",
    },
    details: {
      title: "Strategic Joint Venture Inquiry — Industrial Biogas Infrastructure",
      description: "Evaluating strategic co-investment and SPV structuring in SBA's patented Swiss dry fermentation biogas installations across Egypt and the GCC. Requesting bilateral executive meeting.",
      estimatedVolume: "$15,000,000 equity tranche",
      preferredTimeline: "Q2 2027 Deployment",
      targetProducts: ["RSD Biogas Plants", "Environmental SPV"],
    },
    internalNotes: [
      {
        id: "note-3",
        author: "Executive Office",
        createdAt: "2026-11-02T14:10:00Z",
        text: "NDA draft sent via legal counsel. Preliminary video conference scheduled with Group Chairman Sheikh Sami Bin Ayyad for next Monday.",
      },
    ],
    auditHistory: [
      { id: "audit-4", timestamp: "2026-11-01T11:20:00Z", action: "Created", by: "Portal" },
      { id: "audit-5", timestamp: "2026-11-02T14:10:00Z", action: "Status: new -> under_review", by: "Executive Office" },
    ],
  },
  {
    id: "inq-04",
    referenceCode: "SBA-2026-8898",
    createdAt: "2026-10-31T09:10:00Z",
    updatedAt: "2026-11-01T12:00:00Z",
    sector: "food",
    type: "food_supply",
    status: "approved",
    assignedOfficer: "Hossam Zaki (Agri-Food Division)",
    applicant: {
      fullName: "Lucia Rossi",
      organization: "Mediterraneo Bio Importers S.r.l.",
      email: "l.rossi@mediterraneobio.it",
      phone: "+39 02 876 5431",
      country: "Italy",
      role: "Procurement Manager",
    },
    details: {
      title: "Bulk Extra Virgin Olive Oil & Egyptian Table Olives Supply Contract",
      description: "Order confirmation for two 20ft containers: one Flexitank of Extra Virgin Olive Oil (<0.6% acidity) and one container of whole Tofahi green olives in natural brine (caliber 140/160).",
      estimatedVolume: "2 x 20ft Containers (approx. 40 Metric Tons)",
      preferredTimeline: "Immediate Dispatch via Damietta Port",
      targetProducts: ["SBA-FOD-OIL03", "SBA-FOD-OLV02"],
      attachments: [{ name: "LC_Draft_Mediterraneo_Bio.pdf", size: "1.2 MB" }],
    },
    internalNotes: [
      {
        id: "note-4",
        author: "Hossam Zaki",
        createdAt: "2026-11-01T12:00:00Z",
        text: "Quality COA laboratory test approved. Phytosanitary and export clearance completed. Shipping booking confirmed with Maersk.",
      },
    ],
    auditHistory: [
      { id: "audit-6", timestamp: "2026-10-31T09:10:00Z", action: "Created", by: "Portal" },
      { id: "audit-7", timestamp: "2026-11-01T12:00:00Z", action: "Status: in_progress -> approved", by: "Hossam Zaki" },
    ],
  },
  {
    id: "inq-05",
    referenceCode: "SBA-2026-8885",
    createdAt: "2026-10-29T14:25:00Z",
    updatedAt: "2026-10-30T16:00:00Z",
    sector: "construction",
    type: "project_verification",
    status: "closed",
    assignedOfficer: "Compliance & Governance Office",
    applicant: {
      fullName: "Eng. Sherif El-Ghamry",
      organization: "Arab Contractors Specialized Projects Committee",
      email: "s.ghamry@arabcont.com",
      phone: "+20 111 888 9900",
      country: "Egypt",
      role: "Technical Audit Lead",
    },
    details: {
      title: "Project Verification Request — GASCO Natural Gas Regulating Station #12",
      description: "Requesting certified project execution extract, official completion certificate, and client sign-off records for GASCO regulator projects executed between 2013-2016 for tender qualification.",
      targetProducts: ["Project Verification Dossier #PRJ-012"],
    },
    internalNotes: [
      {
        id: "note-5",
        author: "Compliance Office",
        createdAt: "2026-10-30T16:00:00Z",
        text: "Credentials verified. Redacted completion certificate and official scope document generated and transmitted via secure token.",
      },
    ],
    auditHistory: [
      { id: "audit-8", timestamp: "2026-10-29T14:25:00Z", action: "Created", by: "Portal" },
      { id: "audit-9", timestamp: "2026-10-30T16:00:00Z", action: "Approved & Transmitted -> Closed", by: "Compliance Officer" },
    ],
  },
  {
    id: "inq-06",
    referenceCode: "SBA-2026-8879",
    createdAt: "2026-10-28T11:00:00Z",
    updatedAt: "2026-10-29T10:30:00Z",
    sector: "group",
    type: "partnership_application",
    status: "info_required",
    assignedOfficer: "International Partnerships Committee",
    applicant: {
      fullName: "Zheng Wei",
      organization: "Shenzhen Precision Automation Systems Co.",
      email: "w.zheng@sz-precision.cn",
      phone: "+86 755 8823 4455",
      country: "China",
      role: "Director of International Cooperation",
    },
    details: {
      title: "Commercial & Technical Agency Proposal — Industrial IoT Sensors",
      description: "Proposal for exclusive Middle East distribution and joint technical packaging of ultrasonic and environmental IoT telemetry sensors alongside SBA's industrial solutions.",
      targetProducts: ["IoT Industrial Sensors"],
      attachments: [{ name: "Company_Presentation_2026_EN.pdf", size: "6.8 MB" }],
    },
    internalNotes: [
      {
        id: "note-6",
        author: "Partnership Team",
        createdAt: "2026-10-29T10:30:00Z",
        text: "Requested CE/RoHS test reports and factory accreditation documents before scheduling introductory presentation.",
      },
    ],
    auditHistory: [
      { id: "audit-10", timestamp: "2026-10-28T11:00:00Z", action: "Created", by: "Portal" },
      { id: "audit-11", timestamp: "2026-10-29T10:30:00Z", action: "Status: new -> info_required", by: "Partnership Team" },
    ],
  },
];

const STORAGE_KEY = "sba_crm_inquiries_db_v1";

class CrmSystemService {
  private getStore(): CrmInquiry[] {
    if (typeof window === "undefined") return SEED_INQUIRIES;
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_INQUIRIES));
        return SEED_INQUIRIES;
      }
      return JSON.parse(stored);
    } catch {
      return SEED_INQUIRIES;
    }
  }

  private saveStore(inquiries: CrmInquiry[]): void {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(inquiries));
    } catch (e) {
      console.error("CRM save error:", e);
    }
  }

  public getAllInquiries(): CrmInquiry[] {
    return this.getStore();
  }

  public getInquiryByCode(code: string): CrmInquiry | undefined {
    return this.getStore().find(
      (inq) => inq.referenceCode.toLowerCase() === code.toLowerCase().trim()
    );
  }

  public generateReferenceCode(): string {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `SBA-${year}-${random}`;
  }

  public submitInquiry(data: {
    sector: InquirySector;
    type: InquiryType;
    applicant: CrmInquiry["applicant"];
    details: CrmInquiry["details"];
  }): CrmInquiry {
    const inquiries = this.getStore();
    const referenceCode = this.generateReferenceCode();
    const now = new Date().toISOString();

    const newInquiry: CrmInquiry = {
      id: `inq-${Date.now()}`,
      referenceCode,
      createdAt: now,
      updatedAt: now,
      sector: data.sector,
      type: data.type,
      status: "new",
      assignedOfficer: "Unassigned (Pending Review)",
      applicant: data.applicant,
      details: data.details,
      internalNotes: [
        {
          id: `note-${Date.now()}`,
          author: "Intake Automation",
          createdAt: now,
          text: `Inquiry successfully logged into SBA Central CRM. Reference assigned: ${referenceCode}.`,
        },
      ],
      auditHistory: [
        {
          id: `audit-${Date.now()}`,
          timestamp: now,
          action: "Submitted via Website Portal",
          by: data.applicant.fullName,
        },
      ],
    };

    inquiries.unshift(newInquiry);
    this.saveStore(inquiries);
    return newInquiry;
  }

  public updateInquiryStatus(
    id: string,
    newStatus: InquiryStatus,
    byUser: string,
    noteText?: string
  ): CrmInquiry | null {
    const inquiries = this.getStore();
    const item = inquiries.find((i) => i.id === id);
    if (!item) return null;

    const oldStatus = item.status;
    item.status = newStatus;
    item.updatedAt = new Date().toISOString();

    item.auditHistory.unshift({
      id: `audit-${Date.now()}`,
      timestamp: item.updatedAt,
      action: `Status changed from [${oldStatus}] to [${newStatus}]`,
      by: byUser,
      notes: noteText,
    });

    if (noteText) {
      item.internalNotes.unshift({
        id: `note-${Date.now()}`,
        author: byUser,
        createdAt: item.updatedAt,
        text: `Status update [${newStatus}]: ${noteText}`,
      });
    }

    this.saveStore(inquiries);
    return item;
  }

  public assignOfficer(
    id: string,
    officer: string,
    byUser: string
  ): CrmInquiry | null {
    const inquiries = this.getStore();
    const item = inquiries.find((i) => i.id === id);
    if (!item) return null;

    item.assignedOfficer = officer;
    item.updatedAt = new Date().toISOString();

    item.auditHistory.unshift({
      id: `audit-${Date.now()}`,
      timestamp: item.updatedAt,
      action: `Assigned officer changed to: ${officer}`,
      by: byUser,
    });

    this.saveStore(inquiries);
    return item;
  }

  public addInternalNote(
    id: string,
    author: string,
    noteText: string
  ): CrmInquiry | null {
    const inquiries = this.getStore();
    const item = inquiries.find((i) => i.id === id);
    if (!item) return null;

    item.internalNotes.unshift({
      id: `note-${Date.now()}`,
      author,
      createdAt: new Date().toISOString(),
      text: noteText,
    });
    item.updatedAt = new Date().toISOString();

    this.saveStore(inquiries);
    return item;
  }

  public getDashboardMetrics() {
    const inquiries = this.getStore();
    const total = inquiries.length;
    const newCount = inquiries.filter((i) => i.status === "new").length;
    const inProgressCount = inquiries.filter(
      (i) => i.status === "in_progress" || i.status === "under_review"
    ).length;
    const closedCount = inquiries.filter(
      (i) => i.status === "closed" || i.status === "approved"
    ).length;

    // Sector breakdown
    const bySector: Record<InquirySector, number> = {
      construction: 0,
      garment: 0,
      environmental: 0,
      food: 0,
      investor: 0,
      group: 0,
    };
    inquiries.forEach((i) => {
      if (bySector[i.sector] !== undefined) {
        bySector[i.sector]++;
      }
    });

    // Country breakdown
    const byCountry: Record<string, number> = {};
    inquiries.forEach((i) => {
      const c = i.applicant.country || "Other";
      byCountry[c] = (byCountry[c] || 0) + 1;
    });

    // Status breakdown
    const byStatus: Record<InquiryStatus, number> = {
      new: 0,
      under_review: 0,
      info_required: 0,
      in_progress: 0,
      approved: 0,
      rejected: 0,
      closed: 0,
    };
    inquiries.forEach((i) => {
      if (byStatus[i.status] !== undefined) {
        byStatus[i.status]++;
      }
    });

    return {
      total,
      newCount,
      inProgressCount,
      closedCount,
      bySector,
      byCountry,
      byStatus,
      avgResponseHours: 4.5,
      slaComplianceRate: "98.2%",
    };
  }
}

export const crmSystem = new CrmSystemService();
