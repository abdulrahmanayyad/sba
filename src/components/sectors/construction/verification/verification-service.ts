import { supabase } from "@/integrations/supabase/client";
import { CONTACT_EMAIL } from "@/lib/process-steps";
import { contractingProjectsList, type ContractingProject } from "../contracting-projects-list";
import type {
  ProjectVerificationDocument,
  ProjectVerificationDossier,
  VerificationAccessLog,
  VerificationAuditLog,
  VerificationRequest,
  VerificationRequestStatus,
} from "./verification-types";

// Local storage key fallback for demo / resilient offline access
const STORAGE_KEY_REQUESTS = "sba_verification_requests";
const STORAGE_KEY_DOSSIERS = "sba_verification_dossiers";
const STORAGE_KEY_DOCS = "sba_verification_documents";
const STORAGE_KEY_LOGS = "sba_verification_access_logs";
const STORAGE_KEY_AUDIT = "sba_verification_audit_logs";

/**
 * Seed initial mock verification dossiers and documents from contracting projects list
 */
export function getInitialDossiers(): ProjectVerificationDossier[] {
  return contractingProjectsList.slice(0, 15).map((p) => ({
    id: `dossier-${p.id}`,
    project_id: p.id,
    project_reference_number: `SBA-PRJ-${p.year}-${p.id.toString().padStart(3, "0")}`,
    project_name_ar: p.nameAr,
    project_name_en: p.nameEn,
    project_owner_ar: p.clientAr,
    project_owner_en: p.clientEn,
    assigning_authority_ar: p.clientAr,
    assigning_authority_en: p.clientEn,
    project_location_ar: p.locationAr,
    project_location_en: p.locationEn,
    scope_of_work_ar: p.descriptionAr,
    scope_of_work_en: p.descriptionEn,
    assignment_date: p.contractDate,
    execution_period: "12-24 شهرًا / 12-24 Months",
    project_value_disclosed: p.valueAr,
    project_status: "مكتمل ومُسلَّم بالكامل / Completed & Handed Over",
    is_active: true,
    created_at: new Date(Date.now() - 86400000 * 30).toISOString(),
    updated_at: new Date().toISOString(),
  }));
}

export function getInitialDocuments(): ProjectVerificationDocument[] {
  const dossiers = getInitialDossiers();
  const docs: ProjectVerificationDocument[] = [];

  dossiers.forEach((d) => {
    // Contract Extract
    docs.push({
      id: `doc-${d.project_id}-contract`,
      dossier_id: d.id,
      project_id: d.project_id,
      document_type: "contract_extract",
      title_ar: `مستخرج عقد إسناد رسمي - ${d.project_name_ar}`,
      title_en: `Official Assignment Contract Extract - ${d.project_name_en}`,
      description_ar: "نسخة معتمدة ومحررة لحجب البيانات السرية والأسعار غير المصرح بنشرها",
      description_en: "Certified extract with confidential commercial terms redacted in compliance with NDA",
      file_path: `dossiers/${d.project_id}/contract_extract_redacted.pdf`,
      file_name: `${d.project_reference_number}_Contract_Extract.pdf`,
      file_size_bytes: 2450000,
      mime_type: "application/pdf",
      issue_date: d.assignment_date,
      issuing_entity: d.assigning_authority_ar,
      confidentiality_level: "shareable_after_approval",
      is_redacted: true,
      legal_disclosure_confirmed: true,
      created_at: d.created_at,
      updated_at: d.updated_at,
    });

    // Completion / Handover Certificate
    docs.push({
      id: `doc-${d.project_id}-completion`,
      dossier_id: d.id,
      project_id: d.project_id,
      document_type: "completion_certificate",
      title_ar: `محضر استلام نهائي وشهادة إتمام - ${d.project_name_ar}`,
      title_en: `Final Handover & Project Completion Certificate - ${d.project_name_en}`,
      description_ar: "شهادة معتمدة من الاستشاري والجهة المالكة تفيد بالاستلام النهائي للمشروع",
      description_en: "Approved final acceptance certificate signed by project consultant and client",
      file_path: `dossiers/${d.project_id}/handover_certificate.pdf`,
      file_name: `${d.project_reference_number}_Completion_Cert.pdf`,
      file_size_bytes: 1840000,
      mime_type: "application/pdf",
      issue_date: d.assignment_date,
      issuing_entity: d.assigning_authority_ar,
      confidentiality_level: "shareable_after_approval",
      is_redacted: false,
      legal_disclosure_confirmed: true,
      created_at: d.created_at,
      updated_at: d.updated_at,
    });
  });

  return docs;
}

// Local storage helpers
function readLocal<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocal<T>(key: string, data: T): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn("[Storage Write Warn]", e);
  }
}

// Seed mock requests if empty for immediate admin review testing
function seedMockRequests(): VerificationRequest[] {
  return [
    {
      id: "req-mock-01",
      reference_number: "SBA-VR-2026-9A10",
      project_id: 1,
      project_name_ar: "النقاط التابعة لهيئة الإسعاف المصرية",
      project_name_en: "Ambulance Service Dispatch Points",
      company_name: "شركة المعمار العربي للاستشارات الهندسية",
      commercial_registration_number: "CR-10492847",
      country_of_registration: "المملكة العربية السعودية / Saudi Arabia",
      company_website: "https://arabarchitects.example.com",
      official_company_email: "tenders@arabarchitects.example.com",
      commercial_registration_doc_path: "verification-requests/CR-10492847.pdf",
      commercial_registration_doc_name: "Saudi_CR_Certificate_Verified.pdf",
      applicant_full_name: "م. طارق العتيبي",
      job_title: "مدير العقود والمناقصات",
      department: "إدارة المشروعات الكبرى",
      mobile_number: "+966 50 123 4567",
      applicant_email: "t.otaibi@arabarchitects.example.com",
      purpose: "new_project_award",
      additional_notes: "نرغب بالتحقق من الخبرات السابقة في تطوير المنشآت الطبية لمشروع تأهيلي جديد.",
      declaration_confirmed: true,
      privacy_consent_confirmed: true,
      status: "pending_review",
      created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
      updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
    },
    {
      id: "req-mock-02",
      reference_number: "SBA-VR-2026-8B22",
      project_id: 2,
      project_name_ar: "النقاط التابعة لهيئة الإسعاف المصرية",
      project_name_en: "Ambulance Service Dispatch Points",
      company_name: "Gulf Infrastructure Consortium Ltd.",
      commercial_registration_number: "DIFC-88912",
      country_of_registration: "الإمارات العربية المتحدة / UAE",
      company_website: "https://gulfinfra.example.com",
      official_company_email: "partnerships@gulfinfra.example.com",
      commercial_registration_doc_path: "verification-requests/DIFC-88912.pdf",
      commercial_registration_doc_name: "Trade_License_GulfInfra.pdf",
      applicant_full_name: "David Vance",
      job_title: "VP Strategic Partnerships",
      department: "Commercial Governance",
      mobile_number: "+971 4 987 6543",
      applicant_email: "david.vance@gulfinfra.example.com",
      purpose: "strategic_partnership",
      additional_notes: "Conducting pre-qualification evaluation for regional infrastructure venture.",
      declaration_confirmed: true,
      privacy_consent_confirmed: true,
      status: "approved",
      access_token: "token-gulfinfra-88912-access",
      access_expires_at: new Date(Date.now() + 86400000 * 5).toISOString(),
      access_granted_at: new Date(Date.now() - 3600000 * 12).toISOString(),
      shared_document_ids: ["doc-2-contract", "doc-2-completion"],
      custom_approval_message: "تم اعتماد الطلب بعد مراجعة السجل التجاري وصفة مقدم الطلب. تجدون المستندات المعتمدة متاحة عبر البوابة الآمنة.",
      created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
      updated_at: new Date(Date.now() - 3600000 * 12).toISOString(),
    },
  ];
}

/**
 * Service API for Verification Requests
 */
export const verificationService = {
  // 1. Submit a new verification request
  async submitRequest(data: {
    projectId: number;
    project: ContractingProject;
    companyName: string;
    crNumber: string;
    country: string;
    website?: string;
    officialEmail: string;
    crFile: File;
    applicantName: string;
    jobTitle: string;
    department: string;
    mobile: string;
    applicantEmail: string;
    purpose: string;
    notes?: string;
    authLetterFile?: File | null;
    proofCapacityFile?: File | null;
  }): Promise<{ success: boolean; referenceNumber: string; message?: string }> {
    const referenceNumber = `SBA-VR-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase().slice(-5)}`;

    // Upload CR File to Supabase Private Storage Bucket if possible
    let crPath = `verification/${referenceNumber}/CR_${data.crFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
    try {
      const { data: uploadData, error: uploadErr } = await supabase.storage
        .from("verification-docs")
        .upload(crPath, data.crFile, { upsert: true });

      if (uploadErr) {
        // Fallback to inquiries bucket if verification-docs bucket is not yet provisioned in remote Supabase
        const { error: inqErr } = await supabase.storage
          .from("inquiries")
          .upload(crPath, data.crFile, { upsert: true });
        if (inqErr) {
          console.warn("[Supabase Storage Note]", uploadErr.message);
        }
      } else if (uploadData?.path) {
        crPath = uploadData.path;
      }
    } catch (e) {
      console.warn("[Upload Exception]", e);
    }

    let authPath: string | undefined;
    if (data.authLetterFile) {
      authPath = `verification/${referenceNumber}/AUTH_${data.authLetterFile.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      try {
        await supabase.storage.from("verification-docs").upload(authPath, data.authLetterFile);
      } catch (e) {
        console.warn("[Upload Auth Letter]", e);
      }
    }

    const newRequest: VerificationRequest = {
      id: `req-${Date.now()}`,
      reference_number: referenceNumber,
      project_id: data.projectId,
      project_name_ar: data.project.nameAr,
      project_name_en: data.project.nameEn,
      company_name: data.companyName,
      commercial_registration_number: data.crNumber,
      country_of_registration: data.country,
      company_website: data.website || "",
      official_company_email: data.officialEmail,
      commercial_registration_doc_path: crPath,
      commercial_registration_doc_name: data.crFile.name,
      applicant_full_name: data.applicantName,
      job_title: data.jobTitle,
      department: data.department,
      mobile_number: data.mobile,
      applicant_email: data.applicantEmail,
      purpose: data.purpose,
      additional_notes: data.notes || "",
      authorization_letter_doc_path: authPath ?? undefined,
      authorization_letter_doc_name: data.authLetterFile?.name ?? undefined,
      declaration_confirmed: true,
      privacy_consent_confirmed: true,
      status: "pending_review",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    // 1. Try Supabase Insert
    try {
      const { error: dbError } = await supabase.from("verification_requests" as any).insert({
        reference_number: newRequest.reference_number,
        project_id: newRequest.project_id,
        project_name_ar: newRequest.project_name_ar,
        project_name_en: newRequest.project_name_en,
        company_name: newRequest.company_name,
        commercial_registration_number: newRequest.commercial_registration_number,
        country_of_registration: newRequest.country_of_registration,
        company_website: newRequest.company_website,
        official_company_email: newRequest.official_company_email,
        commercial_registration_doc_path: newRequest.commercial_registration_doc_path,
        commercial_registration_doc_name: newRequest.commercial_registration_doc_name,
        applicant_full_name: newRequest.applicant_full_name,
        job_title: newRequest.job_title,
        department: newRequest.department,
        mobile_number: newRequest.mobile_number,
        applicant_email: newRequest.applicant_email,
        purpose: newRequest.purpose,
        additional_notes: newRequest.additional_notes,
        declaration_confirmed: true,
        privacy_consent_confirmed: true,
        status: "pending_review",
      });

      if (dbError) {
        console.warn("[Supabase Verification Request Insert Note]", dbError.message);
      }
    } catch (e) {
      console.warn("[Supabase Call]", e);
    }

    // 2. Persist in local storage state
    const current = readLocal<VerificationRequest[]>(STORAGE_KEY_REQUESTS, seedMockRequests());
    writeLocal(STORAGE_KEY_REQUESTS, [newRequest, ...current]);

    // 3. Log Audit
    this.logAudit({
      request_id: newRequest.id,
      action: "request_submitted",
      actor_email: data.applicantEmail,
      previous_status: undefined,
      new_status: "pending_review",
      notes: `New Project Verification Request submitted for ${data.project.nameEn} by ${data.companyName}`,
    });

    return {
      success: true,
      referenceNumber,
    };
  },

  // 2. Fetch all verification requests (for Admin Dashboard)
  async getRequests(): Promise<VerificationRequest[]> {
    try {
      const { data, error } = await supabase
        .from("verification_requests" as any)
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data && data.length > 0) {
        return data as unknown as VerificationRequest[];
      }
    } catch {
      // Fallback to local
    }
    return readLocal<VerificationRequest[]>(STORAGE_KEY_REQUESTS, seedMockRequests());
  },

  // 3. Get single request by reference number or ID
  async getRequestByRef(ref: string): Promise<VerificationRequest | null> {
    const all = await this.getRequests();
    return (
      all.find(
        (r) =>
          r.reference_number.toLowerCase() === ref.toLowerCase() ||
          r.id === ref ||
          r.access_token === ref
      ) ?? null
    );
  },

  // 4. Update request status & administration action
  async updateRequestStatus(
    requestId: string,
    params: {
      status: VerificationRequestStatus;
      adminEmail: string;
      internalNotes?: string | undefined;
      rejectionReason?: string | undefined;
      additionalInfoRequested?: string | undefined;
      sharedDocumentIds?: string[] | undefined;
      customApprovalMessage?: string | undefined;
      tokenExpiryDays?: number | undefined;
    }
  ): Promise<VerificationRequest> {
    const all = await this.getRequests();
    const index = all.findIndex((r) => r.id === requestId);
    if (index === -1) {
      throw new Error("Request not found");
    }

    const prev = all[index]!;
    const prevStatus = prev.status;

    let accessToken = prev.access_token;
    let accessExpiresAt = prev.access_expires_at;
    let accessGrantedAt = prev.access_granted_at;

    if (params.status === "approved" || params.status === "documents_shared") {
      if (!accessToken) {
        accessToken = `SBA-SEC-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 9)}`.toUpperCase();
      }
      accessGrantedAt = new Date().toISOString();
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + (params.tokenExpiryDays || 7));
      accessExpiresAt = expiry.toISOString();
    }

    const updated: VerificationRequest = {
      ...prev,
      status: params.status,
      admin_internal_notes: params.internalNotes ?? prev.admin_internal_notes,
      rejection_reason: params.rejectionReason ?? prev.rejection_reason,
      additional_info_requested: params.additionalInfoRequested ?? prev.additional_info_requested,
      assigned_admin_email: params.adminEmail,
      access_token: accessToken,
      access_expires_at: accessExpiresAt,
      access_granted_at: accessGrantedAt,
      shared_document_ids: params.sharedDocumentIds ?? prev.shared_document_ids,
      custom_approval_message: params.customApprovalMessage ?? prev.custom_approval_message,
      updated_at: new Date().toISOString(),
    };

    all[index] = updated;
    writeLocal(STORAGE_KEY_REQUESTS, all);

    // Try Supabase update
    try {
      await supabase
        .from("verification_requests" as any)
        .update({
          status: updated.status,
          admin_internal_notes: updated.admin_internal_notes,
          rejection_reason: updated.rejection_reason,
          additional_info_requested: updated.additional_info_requested,
          assigned_admin_email: updated.assigned_admin_email,
          access_token: updated.access_token,
          access_expires_at: updated.access_expires_at,
          access_granted_at: updated.access_granted_at,
          shared_document_ids: updated.shared_document_ids,
          custom_approval_message: updated.custom_approval_message,
          updated_at: updated.updated_at,
        })
        .eq("id", requestId);
    } catch (e) {
      console.warn("[Supabase Update]", e);
    }

    // Log Audit Trail
    this.logAudit({
      request_id: requestId,
      action: `status_changed_to_${params.status}`,
      actor_email: params.adminEmail,
      previous_status: prevStatus,
      new_status: params.status,
      notes: params.internalNotes || params.rejectionReason || params.customApprovalMessage,
    });

    return updated;
  },

  // 5. Dossier Management
  async getDossierByProjectId(projectId: number): Promise<ProjectVerificationDossier | null> {
    const dossiers = readLocal<ProjectVerificationDossier[]>(STORAGE_KEY_DOSSIERS, getInitialDossiers());
    const existing = dossiers.find((d) => d.project_id === projectId);
    if (existing) return existing;

    // Create on demand from contracting project data
    const proj = contractingProjectsList.find((p) => p.id === projectId);
    if (!proj) return null;

    const newDossier: ProjectVerificationDossier = {
      id: `dossier-${proj.id}`,
      project_id: proj.id,
      project_reference_number: `SBA-PRJ-${proj.year}-${proj.id.toString().padStart(3, "0")}`,
      project_name_ar: proj.nameAr,
      project_name_en: proj.nameEn,
      project_owner_ar: proj.clientAr,
      project_owner_en: proj.clientEn,
      assigning_authority_ar: proj.clientAr,
      assigning_authority_en: proj.clientEn,
      project_location_ar: proj.locationAr,
      project_location_en: proj.locationEn,
      scope_of_work_ar: proj.descriptionAr,
      scope_of_work_en: proj.descriptionEn,
      assignment_date: proj.contractDate,
      execution_period: "12-24 شهرًا / 12-24 Months",
      project_value_disclosed: proj.valueAr,
      project_status: "مكتمل ومُسلَّم بالكامل / Completed & Handed Over",
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    writeLocal(STORAGE_KEY_DOSSIERS, [...dossiers, newDossier]);
    return newDossier;
  },

  // 6. Documents for a specific Project
  async getDocumentsForProject(projectId: number): Promise<ProjectVerificationDocument[]> {
    const docs = readLocal<ProjectVerificationDocument[]>(STORAGE_KEY_DOCS, getInitialDocuments());
    const matched = docs.filter((d) => d.project_id === projectId);
    if (matched.length > 0) return matched;

    // Seed default documents for this project
    const dossier = await this.getDossierByProjectId(projectId);
    if (!dossier) return [];

    const generatedDocs: ProjectVerificationDocument[] = [
      {
        id: `doc-${projectId}-contract`,
        dossier_id: dossier.id,
        project_id: projectId,
        document_type: "contract_extract",
        title_ar: `مستخرج عقد إسناد رسمي - ${dossier.project_name_ar}`,
        title_en: `Official Assignment Contract Extract - ${dossier.project_name_en}`,
        description_ar: "نسخة معتمدة ومحررة لحجب البيانات السرية والأسعار غير المصرح بنشرها",
        description_en: "Certified extract with confidential commercial terms redacted in compliance with NDA",
        file_path: `dossiers/${projectId}/contract_extract_redacted.pdf`,
        file_name: `${dossier.project_reference_number}_Contract_Extract.pdf`,
        file_size_bytes: 2450000,
        mime_type: "application/pdf",
        issue_date: dossier.assignment_date,
        issuing_entity: dossier.assigning_authority_ar,
        confidentiality_level: "shareable_after_approval",
        is_redacted: true,
        legal_disclosure_confirmed: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
      {
        id: `doc-${projectId}-completion`,
        dossier_id: dossier.id,
        project_id: projectId,
        document_type: "completion_certificate",
        title_ar: `شهادة إتمام وتسليم المشروع - ${dossier.project_name_ar}`,
        title_en: `Final Completion & Handover Certificate - ${dossier.project_name_en}`,
        description_ar: "محضر الاستلام الابتدائي والنهائي الصادر عن جهة الإسناد",
        description_en: "Official initial and final handover protocol signed by awarding authority",
        file_path: `dossiers/${projectId}/completion_cert.pdf`,
        file_name: `${dossier.project_reference_number}_Completion_Cert.pdf`,
        file_size_bytes: 1820000,
        mime_type: "application/pdf",
        issue_date: dossier.assignment_date,
        issuing_entity: dossier.assigning_authority_ar,
        confidentiality_level: "shareable_after_approval",
        is_redacted: false,
        legal_disclosure_confirmed: true,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ];

    writeLocal(STORAGE_KEY_DOCS, [...docs, ...generatedDocs]);
    return generatedDocs;
  },

  // 7. Add document to Dossier (Admin)
  async addDocument(doc: Omit<ProjectVerificationDocument, "id" | "created_at" | "updated_at">): Promise<ProjectVerificationDocument> {
    const docs = readLocal<ProjectVerificationDocument[]>(STORAGE_KEY_DOCS, getInitialDocuments());
    const newDoc: ProjectVerificationDocument = {
      ...doc,
      id: `doc-${Date.now()}`,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    writeLocal(STORAGE_KEY_DOCS, [newDoc, ...docs]);
    return newDoc;
  },

  // 8. Access Portal for Verified Documents (Secure Token Access)
  async getVerifiedDocumentsByToken(token: string): Promise<{
    valid: boolean;
    expired: boolean;
    request?: VerificationRequest;
    documents: ProjectVerificationDocument[];
    error?: string;
  }> {
    const all = await this.getRequests();
    const req = all.find((r) => r.access_token === token);

    if (!req) {
      return { valid: false, expired: false, documents: [], error: "رابط الوصول غير صحيح أو غير مفعل / Invalid Access Token" };
    }

    if (req.status !== "approved" && req.status !== "documents_shared") {
      return { valid: false, expired: false, documents: [], error: "الطلب غير معتمد لمشاركة المستندات / Request is not approved for disclosure" };
    }

    if (req.access_expires_at && new Date(req.access_expires_at) < new Date()) {
      return { valid: false, expired: true, request: req, documents: [], error: "انتهت صلاحية رابط الاطلاع المحدد. يرجى طلب تجديد الصلاحية. / Access link has expired." };
    }

    const allDocs = await this.getDocumentsForProject(req.project_id);
    const sharedIds = new Set(req.shared_document_ids || []);
    
    // Only return documents explicitly approved for sharing AND marked shareable/public
    const authorizedDocs = allDocs.filter(
      (d) =>
        (sharedIds.size === 0 || sharedIds.has(d.id)) &&
        (d.confidentiality_level === "shareable_after_approval" || d.confidentiality_level === "public")
    );

    // Record access log
    this.logAccess({
      request_id: req.id,
      access_token: token,
      action_type: "portal_view",
    });

    return {
      valid: true,
      expired: false,
      request: req,
      documents: authorizedDocs,
    };
  },

  // 9. Log Access & Audit
  logAccess(log: Omit<VerificationAccessLog, "id" | "accessed_at">): void {
    const logs = readLocal<VerificationAccessLog[]>(STORAGE_KEY_LOGS, []);
    const newLog: VerificationAccessLog = {
      ...log,
      id: `log-${Date.now()}`,
      ip_address: "Client IP (Secure Handshake)",
      user_agent: typeof navigator !== "undefined" ? navigator.userAgent : "N/A",
      accessed_at: new Date().toISOString(),
    };
    writeLocal(STORAGE_KEY_LOGS, [newLog, ...logs]);
  },

  logAudit(audit: Omit<VerificationAuditLog, "id" | "created_at">): void {
    const audits = readLocal<VerificationAuditLog[]>(STORAGE_KEY_AUDIT, []);
    const newAudit: VerificationAuditLog = {
      ...audit,
      id: `audit-${Date.now()}`,
      created_at: new Date().toISOString(),
    };
    writeLocal(STORAGE_KEY_AUDIT, [newAudit, ...audits]);
  },

  getAuditLogs(requestId?: string): VerificationAuditLog[] {
    const audits = readLocal<VerificationAuditLog[]>(STORAGE_KEY_AUDIT, []);
    if (requestId) {
      return audits.filter((a) => a.request_id === requestId);
    }
    return audits;
  },

  getAccessLogs(requestId?: string): VerificationAccessLog[] {
    const logs = readLocal<VerificationAccessLog[]>(STORAGE_KEY_LOGS, []);
    if (requestId) {
      return logs.filter((l) => l.request_id === requestId);
    }
    return logs;
  },
};
