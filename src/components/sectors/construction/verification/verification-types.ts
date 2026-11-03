// Types and Data Models for Verified Projects & Project Verification System

export type VerificationRequestStatus =
  | "pending_review"
  | "under_verification"
  | "additional_info_required"
  | "approved"
  | "rejected"
  | "documents_shared"
  | "closed";

export type DocumentConfidentialityLevel =
  | "internal_only"
  | "restricted"
  | "shareable_after_approval"
  | "public";

export type ProjectVerificationDocumentType =
  | "contract"
  | "award_letter"
  | "work_order"
  | "contract_extract"
  | "completion_certificate"
  | "handover_certificate"
  | "official_correspondence"
  | "supporting_document";

export interface ProjectVerificationDossier {
  id: string;
  project_id: number;
  project_reference_number: string;
  project_name_ar: string;
  project_name_en: string;
  project_owner_ar: string;
  project_owner_en: string;
  assigning_authority_ar: string;
  assigning_authority_en: string;
  project_location_ar: string;
  project_location_en: string;
  scope_of_work_ar: string;
  scope_of_work_en: string;
  assignment_date: string;
  execution_period: string;
  project_value_disclosed?: string | undefined;
  project_status: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface ProjectVerificationDocument {
  id: string;
  dossier_id: string;
  project_id: number;
  document_type: ProjectVerificationDocumentType;
  title_ar: string;
  title_en: string;
  description_ar?: string | undefined;
  description_en?: string | undefined;
  file_path: string;
  file_name: string;
  file_size_bytes: number;
  mime_type: string;
  issue_date?: string | undefined;
  issuing_entity?: string | undefined;
  confidentiality_level: DocumentConfidentialityLevel;
  is_redacted: boolean;
  legal_disclosure_confirmed: boolean;
  created_at: string;
  updated_at: string;
}

export interface VerificationRequest {
  id: string;
  reference_number: string;
  project_id: number;
  project_name_ar: string;
  project_name_en: string;

  // Company Information
  company_name: string;
  commercial_registration_number: string;
  country_of_registration: string;
  company_website?: string | undefined;
  official_company_email: string;
  commercial_registration_doc_path: string;
  commercial_registration_doc_name: string;

  // Applicant Information
  applicant_full_name: string;
  job_title: string;
  department: string;
  mobile_number: string;
  applicant_email: string;

  // Verification Purpose
  purpose: string;
  additional_notes?: string | undefined;

  // Optional Authorization Documents
  authorization_letter_doc_path?: string | undefined;
  authorization_letter_doc_name?: string | undefined;
  proof_of_capacity_doc_path?: string | undefined;
  proof_of_capacity_doc_name?: string | undefined;

  // Consents
  declaration_confirmed: boolean;
  privacy_consent_confirmed: boolean;

  // Administrative State
  status: VerificationRequestStatus;
  admin_internal_notes?: string | undefined;
  rejection_reason?: string | undefined;
  additional_info_requested?: string | undefined;
  assigned_admin_email?: string | undefined;

  // Secure Access Token for approved sharing
  access_token?: string | undefined;
  access_expires_at?: string | undefined;
  access_granted_at?: string | undefined;
  shared_document_ids?: string[] | undefined;
  custom_approval_message?: string | undefined;

  // Meta
  created_at: string;
  updated_at: string;
}

export interface VerificationAccessLog {
  id: string;
  request_id: string;
  access_token: string;
  document_id?: string | undefined;
  action_type: "portal_view" | "document_view" | "document_download";
  ip_address?: string | undefined;
  user_agent?: string | undefined;
  accessed_at: string;
}

export interface VerificationAuditLog {
  id: string;
  request_id?: string | undefined;
  action: string;
  actor_email: string;
  previous_status?: string | undefined;
  new_status?: string | undefined;
  notes?: string | undefined;
  metadata?: Record<string, unknown> | undefined;
  created_at: string;
}

export const VERIFICATION_PURPOSES = [
  {
    id: "commercial_cooperation",
    ar: "دراسة فرص التعاون التجاري",
    en: "Exploring commercial cooperation opportunities",
  },
  {
    id: "new_project_award",
    ar: "دراسة فرص إسناد مشروع جديد",
    en: "Evaluating award of a new construction project",
  },
  {
    id: "experience_verification",
    ar: "التحقق من الخبرات وسابقة الأعمال",
    en: "Verifying corporate track record and past performance",
  },
  {
    id: "strategic_partnership",
    ar: "دراسة شراكة استراتيجية",
    en: "Exploring a strategic long-term partnership",
  },
  {
    id: "other_professional",
    ar: "غرض مهني آخر",
    en: "Other authorized professional purpose",
  },
];

export const STATUS_LABELS: Record<VerificationRequestStatus, { ar: string; en: string; color: string }> = {
  pending_review: {
    ar: "في انتظار المراجعة",
    en: "Pending Review",
    color: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  },
  under_verification: {
    ar: "قيد التحقق",
    en: "Under Verification",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  },
  additional_info_required: {
    ar: "مطلوب استكمال بيانات",
    en: "Additional Information Required",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/30",
  },
  approved: {
    ar: "تمت الموافقة",
    en: "Approved",
    color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  },
  rejected: {
    ar: "تم رفض الطلب",
    en: "Rejected",
    color: "bg-red-500/10 text-red-600 border-red-500/30",
  },
  documents_shared: {
    ar: "تمت إتاحة المستندات",
    en: "Documents Shared",
    color: "bg-teal-500/10 text-teal-600 border-teal-500/30",
  },
  closed: {
    ar: "تم إغلاق الطلب",
    en: "Closed",
    color: "bg-gray-500/10 text-gray-600 border-gray-500/30",
  },
};

export const DOCUMENT_TYPE_LABELS: Record<ProjectVerificationDocumentType, { ar: string; en: string }> = {
  contract: {
    ar: "عقد إسناد المشروع",
    en: "Project Assignment Contract",
  },
  award_letter: {
    ar: "خطاب الترسية",
    en: "Letter of Award",
  },
  work_order: {
    ar: "أمر التكليف أو التشغيل",
    en: "Work Order / Commissioning Notice",
  },
  contract_extract: {
    ar: "مستخرج من العقد",
    en: "Official Contract Extract",
  },
  completion_certificate: {
    ar: "شهادة إتمام المشروع",
    en: "Project Completion Certificate",
  },
  handover_certificate: {
    ar: "شهادة الاستلام",
    en: "Handover Certificate",
  },
  official_correspondence: {
    ar: "مراسلات رسمية داعمة",
    en: "Official Supporting Correspondence",
  },
  supporting_document: {
    ar: "مستندات إثبات إضافية",
    en: "Additional Supporting Evidence",
  },
};

export const CONFIDENTIALITY_LABELS: Record<DocumentConfidentialityLevel, { ar: string; en: string; badgeClass: string }> = {
  internal_only: {
    ar: "للاستخدام الداخلي فقط",
    en: "Internal Only",
    badgeClass: "bg-red-500/10 text-red-600 border-red-500/30",
  },
  restricted: {
    ar: "مستند مقيد (بموافقة خاصة)",
    en: "Restricted (Special Approval)",
    badgeClass: "bg-amber-500/10 text-amber-600 border-amber-500/30",
  },
  shareable_after_approval: {
    ar: "قابل للمشاركة بعد الموافقة",
    en: "Shareable After Approval",
    badgeClass: "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
  },
  public: {
    ar: "مسموح بالنشر العام",
    en: "Public Disclosure",
    badgeClass: "bg-blue-500/10 text-blue-600 border-blue-500/30",
  },
};
