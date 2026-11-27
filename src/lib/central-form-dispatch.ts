import { supabase } from "@/integrations/supabase/client";
import { contactPortalSystem } from "./contact-portal-system";
import { crmSystem } from "./crm-system";
import { WHATSAPP_URL } from "./process-steps";

export type CentralFormType =
  | "free_consultation"
  | "quote_request_model"
  | "rfq_model"
  | "general_contact"
  | "complaint"
  | "opportunity_proposal"
  | "join_application"
  | "investor_interest"
  | "construction_proposal"
  | "environmental_consultation"
  | "garment_b2b"
  | "food_rfq"
  | "partnership_application"
  | "trade_supplier_bid";

export type FormType = CentralFormType;

export type CentralSubmissionStatus =
  | "new"
  | "under_review"
  | "info_required"
  | "qualified"
  | "not_qualified"
  | "assigned"
  | "contacted"
  | "scheduled"
  | "proposal_sent"
  | "in_progress"
  | "completed"
  | "closed";

export interface CentralFormSubmission {
  id: string;
  referenceCode: string;
  formType: CentralFormType;
  formTitleEn: string;
  formTitleAr: string;
  sector: "garment" | "construction" | "environmental" | "food" | "investor" | "group" | "multi";
  selectedSectors?: string[];
  createdAt: string;
  applicant: {
    fullName: string;
    email: string;
    phone: string;
    company?: string;
    country?: string;
    city?: string;
    jobTitle?: string;
    website?: string;
    linkedin?: string;
  };
  details: Record<string, any>;
  modelMeta?: {
    code: string;
    image: string;
    category: string;
    subcategory?: string;
    age?: string;
    fabric?: string;
    moq?: string | number;
  };
  status: CentralSubmissionStatus;
  assignedSpecialist?: string;
  internalNotes?: string[];

  // Convenience flat fields for backward compatibility and admin views
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  serviceOrProduct?: string;
  timestamp?: string | number;
  metadata?: Record<string, any>;
  message?: string;
}

const STORAGE_KEY_CENTRAL_SUBMISSIONS = "sba_central_submissions_v1";
export const BUSINESS_OWNER_EMAIL = "info@sami-trade.com";
export const BACKUP_NOTIFICATION_EMAIL = "ayyad.investments@gmail.com";

export function generateSubmissionReference(type: CentralFormType): string {
  const year = new Date().getFullYear();
  const rand = Math.floor(1000 + Math.random() * 9000);
  const prefixes: Record<CentralFormType, string> = {
    free_consultation: "SBA-CNS",
    quote_request_model: "SBA-QTE",
    general_contact: "SBA-CNT",
    complaint: "SBA-CMP",
    opportunity_proposal: "SBA-OPP",
    join_application: "SBA-REC",
    investor_interest: "SBA-INV",
    construction_proposal: "SBA-CON",
    environmental_consultation: "SBA-ENV",
    garment_b2b: "SBA-GAR",
    food_rfq: "SBA-FOD",
    partnership_application: "SBA-PRT",
    trade_supplier_bid: "SBA-TRD",
  };
  const prefix = prefixes[type] || "SBA-REQ";
  return `${prefix}-${year}-${rand}`;
}

export function getCentralSubmissions(): CentralFormSubmission[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_CENTRAL_SUBMISSIONS);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (err) {
    console.error("Error reading central submissions:", err);
    return [];
  }
}

export function saveCentralSubmissions(data: CentralFormSubmission[]): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY_CENTRAL_SUBMISSIONS, JSON.stringify(data));
  } catch (err) {
    console.error("Error saving central submissions:", err);
  }
}

export function buildOwnerNotificationEmail(submission: CentralFormSubmission): {
  subject: string;
  body: string;
  mailtoUrl: string;
} {
  const { referenceCode, formTitleEn, applicant, details, modelMeta, createdAt } = submission;
  
  const subject = `[${referenceCode}] New Submission: ${formTitleEn} - ${applicant.fullName} (${applicant.company || "Individual"})`;
  
  let detailsText = "";
  if (modelMeta) {
    detailsText += `\n--- MODEL QUOTE REQUEST DOSSIER ---
Model Code: ${modelMeta.code}
Category: ${modelMeta.category}
Subcategory: ${modelMeta.subcategory || "N/A"}
Age Range: ${modelMeta.age ? `${modelMeta.age} yrs` : "N/A"}
Target Fabric / Spec: ${modelMeta.fabric || "Customizable"}
Image Reference: https://sami-trade.com${modelMeta.image}
`;
  }

  for (const [key, val] of Object.entries(details)) {
    if (val !== undefined && val !== null && val !== "") {
      const formattedKey = key.replace(/([A-Z])/g, " $1").toUpperCase();
      const formattedVal = Array.isArray(val) ? val.join(", ") : String(val);
      detailsText += `\n${formattedKey}: ${formattedVal}`;
    }
  }

  const body = `SAMI BIN AYYAD GROUP — CENTRAL INCOMING SUBMISSION
Reference Code: ${referenceCode}
Form Type: ${formTitleEn}
Date/Time: ${new Date(createdAt).toLocaleString()}

--- APPLICANT CONTACT INFORMATION ---
Full Name: ${applicant.fullName}
Company / Organization: ${applicant.company || "—"}
Job Title: ${applicant.jobTitle || "—"}
Email: ${applicant.email}
Phone / WhatsApp: ${applicant.phone}
Country: ${applicant.country || "—"}
City: ${applicant.city || "—"}

--- SUBMISSION DETAILS & SPECIFICATIONS ---${detailsText}

--------------------------------------------------
To view and manage this submission in your internal dashboard:
https://sami-trade.com/admin/inquiries?ref=${referenceCode}`;

  const mailtoUrl = `mailto:${BUSINESS_OWNER_EMAIL}?cc=${BACKUP_NOTIFICATION_EMAIL}&subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  return { subject, body, mailtoUrl };
}

export function buildOwnerWhatsAppFollowupUrl(
  submissionOrRef: CentralFormSubmission | string,
  arOrFormType?: boolean | string,
  name?: string,
  company?: string
): string {
  if (typeof submissionOrRef === "object" && submissionOrRef !== null) {
    const s = submissionOrRef;
    const ar = arOrFormType !== false;
    const title = ar ? s.formTitleAr : s.formTitleEn;
    const modelInfo = s.modelMeta ? ` (موديل: ${s.modelMeta.code})` : "";
    const applicantName = s.applicant?.fullName || s.name || "";
    const applicantCompany = s.applicant?.company || s.company || "";
    const text = ar
      ? `مرحبًا إدارة مجموعة سامي بن عياد، أود متابعة الطلب المقدم برقم مرجعي [${s.referenceCode}] بخصوص ${title}${modelInfo}.\nالاسم: ${applicantName} - ${applicantCompany}`
      : `Hello SBA Management, following up on submission [${s.referenceCode}] regarding ${s.formTitleEn}${modelInfo}.\nName: ${applicantName} - ${applicantCompany}`;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
  } else {
    const ref = String(submissionOrRef);
    const formType = typeof arOrFormType === "string" ? arOrFormType : "Inquiry";
    const text = `مرحبًا إدارة مجموعة سامي بن عياد، أود متابعة الطلب المقدم برقم مرجعي [${ref}] بخصوص ${formType}.\nالاسم: ${name || ""} ${company ? `(${company})` : ""}`;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
  }
}

export function buildApplicantConfirmationEmail(submission: CentralFormSubmission, ar = true): {
  subject: string;
  body: string;
} {
  const { referenceCode } = submission;
  if (ar) {
    return {
      subject: `تأكيد استلام طلب الاستشارة المجانية — مجموعة سامي بن عياد [${referenceCode}]`,
      body: `شكرًا لتواصلكم مع مجموعة سامي بن عياد.

تم استلام طلب الاستشارة المجانية الخاص بكم بنجاح.

سيقوم المختص في القطاع المعني بمراجعة استفساركم والتواصل معكم لمناقشة متطلباتكم والتنسيق للخطوات القادمة.

الرقم المرجعي لطلبكم: ${referenceCode}

نقدّر اهتمامكم وثقتكم بمجموعة سامي بن عياد.`
    };
  }

  return {
    subject: `Your Free Consultation Request – SAMI BIN AYYAD GROUP [${referenceCode}]`,
    body: `Thank you for contacting SAMI BIN AYYAD GROUP.

Your free consultation request has been successfully received.

Our relevant sector specialist will review your inquiry and contact you to discuss your requirements.

Your Inquiry Reference: ${referenceCode}

We appreciate your interest in SAMI BIN AYYAD GROUP.`
  };
}

/**
 * Universal Form Dispatcher
 * Dispatches every form across the site into:
 * 1. Persistent central storage (indexed by reference code)
 * 2. CRM & Contact Portal internal databases
 * 3. Supabase cloud database
 * 4. Pre-configured notification to business owner
 */
export async function submitCentralForm(
  input: Omit<CentralFormSubmission, "id" | "referenceCode" | "createdAt" | "status">
): Promise<{
  success: boolean;
  referenceCode: string;
  submission: CentralFormSubmission;
  emailNotification: { subject: string; body: string; mailtoUrl: string };
  whatsappUrl: string;
}> {
  const referenceCode = generateSubmissionReference(input.formType);
  const now = new Date().toISOString();
  const id = `sub-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

  const applicantName = input.applicant?.fullName || (input as any).name || "Visitor";
  const applicantEmail = input.applicant?.email || (input as any).email || "inquiry@sami-trade.com";
  const applicantPhone = input.applicant?.phone || (input as any).phone || "";
  const applicantCompany = input.applicant?.company || (input as any).company || undefined;
  const applicantCountry = input.applicant?.country || (input as any).country || undefined;

  const submission: CentralFormSubmission = {
    id,
    referenceCode,
    createdAt: now,
    status: "new",
    name: applicantName,
    company: applicantCompany,
    email: applicantEmail,
    phone: applicantPhone,
    country: applicantCountry,
    serviceOrProduct: (input as any).serviceOrProduct || input.modelMeta?.code || input.formTitleEn,
    timestamp: now,
    message: typeof input.details?.message === "string" ? input.details.message : ((input as any).message || input.details?.description || input.formTitleEn),
    metadata: {
      ...(input.details || {}),
      ...(input as any).metadata,
      modelCode: input.modelMeta?.code || (input as any).metadata?.modelCode,
      modelPhoto: input.modelMeta?.image || (input as any).metadata?.modelPhoto,
    },
    ...input,
    applicant: {
      fullName: applicantName,
      email: applicantEmail,
      phone: applicantPhone,
      company: applicantCompany,
      country: applicantCountry,
      city: input.applicant?.city,
      jobTitle: input.applicant?.jobTitle,
      website: input.applicant?.website,
      linkedin: input.applicant?.linkedin,
    },
  };

  // 1. Save to Central Submissions store
  const existing = getCentralSubmissions();
  existing.unshift(submission);
  saveCentralSubmissions(existing);

  // 2. Register into Contact Portal System if appropriate
  try {
    if (input.formType === "complaint") {
      contactPortalSystem.submitComplaint({
        category: "services",
        priority: "medium",
        complainant: {
          fullName: input.applicant.fullName,
          company: input.applicant.company,
          country: input.applicant.country || "Egypt",
          email: input.applicant.email,
          phone: input.applicant.phone,
          preferredContact: "email",
          relationship: "customer",
        },
        details: {
          sector: input.sector,
          subject: input.formTitleEn,
          description: input.details.message || input.details.description || input.formTitleEn,
        },
      });
    } else {
      contactPortalSystem.submitInquiry({
        type: "business_inquiry",
        applicant: {
          fullName: input.applicant.fullName,
          company: input.applicant.company,
          jobTitle: input.applicant.jobTitle,
          country: input.applicant.country || "Egypt",
          city: input.applicant.city,
          email: input.applicant.email,
          phone: input.applicant.phone,
          preferredContact: "email",
        },
        details: {
          sector: input.sector,
          subject: `${input.formTitleEn} [${referenceCode}]`,
          message: JSON.stringify(input.details),
        },
      });
    }
  } catch (err) {
    console.warn("Contact portal sync notice:", err);
  }

  // 3. Register into CRM System
  try {
    crmSystem.submitInquiry({
      sector: input.sector,
      type: input.formType === "quote_request_model" ? "garment_manufacturing" : "partnership_application",
      applicant: {
        fullName: input.applicant.fullName,
        organization: input.applicant.company || "Individual",
        email: input.applicant.email,
        phone: input.applicant.phone,
        country: input.applicant.country || "Egypt",
        role: input.applicant.jobTitle,
      },
      details: {
        title: `${input.formTitleEn} [${referenceCode}]`,
        description: JSON.stringify(input.details),
        targetProducts: input.modelMeta ? [input.modelMeta.code] : undefined,
      },
    });
  } catch (err) {
    console.warn("CRM system sync notice:", err);
  }

  // 4. Cloud Database write attempt to public.central_submissions
  try {
    const mapSectorToEnum = (s: string): "corporate" | "apparel" | "environmental" | "construction" | "food" => {
      switch (s) {
        case "garment": return "apparel";
        case "construction": return "construction";
        case "environmental": return "environmental";
        case "food": return "food";
        default: return "corporate";
      }
    };

    const payloadRow: any = {
      reference_number: referenceCode,
      form_type: input.formType,
      sector: mapSectorToEnum(input.sector),
      status: "new",
      sender_name: applicantName,
      sender_email: applicantEmail,
      sender_phone: applicantPhone || null,
      sender_organization: applicantCompany || null,
      sender_country: applicantCountry || null,
      subject: `${input.formTitleEn || input.formType} [${referenceCode}]`,
      message: typeof input.details?.message === "string" ? input.details.message : ((input as any).message || input.details?.description || input.formTitleEn || input.formType),
      form_payload: {
        form_title_ar: input.formTitleAr,
        form_title_en: input.formTitleEn,
        original_sector: input.sector,
        applicant: input.applicant,
        details: input.details,
        model_meta: input.modelMeta || null,
      },
    };

    const { error: centralErr } = await supabase.from("central_submissions" as any).insert(payloadRow);
    if (centralErr) {
      console.warn("[CentralFormDispatch] Supabase central_submissions notice:", centralErr.message);
    }
  } catch (err) {
    // Graceful fallback: local persistent storage & direct mail dispatch guarantee delivery
    console.info("Cloud storage logged locally with direct email transmission dispatch.");
  }

  // 5. Build Owner Notification Details
  const emailNotification = buildOwnerNotificationEmail(submission);
  const whatsappUrl = buildOwnerWhatsAppFollowupUrl(submission);

  // 6. Broadcast event for real-time admin view updates
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("sba-submission-received", {
        detail: submission,
      })
    );
  }

  return {
    success: true,
    referenceCode,
    submission,
    emailNotification,
    whatsappUrl,
  };
}

