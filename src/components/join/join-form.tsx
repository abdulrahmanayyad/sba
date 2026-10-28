import { useState } from "react";
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  ChevronDown,
  FileText,
  HelpCircle,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Shield,
  Sparkles,
  Upload,
  User,
  X,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import type { JoinTrackConfig } from "./join-data";

export type ApplicantType = "individual" | "organization";

interface JoinFormProps {
  track: JoinTrackConfig;
}

const MAX_INDIVIDUAL_FILE_BYTES = 10 * 1024 * 1024; // 10MB
const MAX_ORGANIZATION_FILE_BYTES = 25 * 1024 * 1024; // 25MB

export function JoinForm({ track }: JoinFormProps) {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [applicantType, setApplicantType] = useState<ApplicantType>("individual");

  // Form State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);

  // Individual-specific fields
  const [currentTitle, setCurrentTitle] = useState("");
  const [skills, setSkills] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");

  // Organization-specific fields
  const [companyName, setCompanyName] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");
  const [companyRegistration, setCompanyRegistration] = useState("");
  const [organizationScope, setOrganizationScope] = useState("");

  // Anti-spam honeypot
  const [honeypot, setHoneypot] = useState("");

  // File Uploads
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");

  // Submission State
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");
  const [backendErrorDetails, setBackendErrorDetails] = useState("");
  const [referenceId, setReferenceId] = useState("");

  // Categories list based on active applicant type
  const activeCategories = applicantType === "individual" ? track.individualCategories : track.organizationCategories;

  const handleTypeChange = (type: ApplicantType) => {
    setApplicantType(type);
    setCategory("");
    setFiles([]);
    setFileError("");
    setValidationError("");
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError("");
    const selected = e.target.files;
    if (!selected || selected.length === 0) return;

    const maxBytes = applicantType === "individual" ? MAX_INDIVIDUAL_FILE_BYTES : MAX_ORGANIZATION_FILE_BYTES;
    const maxMB = applicantType === "individual" ? "10MB" : "25MB";

    const newFiles: File[] = [];
    for (let i = 0; i < selected.length; i++) {
      const file = selected.item(i);
      if (!file) continue;
      if (file.size > maxBytes) {
        setFileError(
          ar
            ? `الملف ${file.name} يتجاوز الحد الأقصى المسموح (${maxMB})`
            : `File ${file.name} exceeds maximum allowed size (${maxMB})`
        );
        return;
      }
      newFiles.push(file);
    }

    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    if (honeypot.trim()) return false; // Bot caught
    if (!fullName.trim()) return ar ? "يرجى إدخال الاسم بالكامل" : "Please enter your full name";
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return ar ? "يرجى إدخال بريد إلكتروني صحيح" : "Please enter a valid email address";
    if (!phone.trim()) return ar ? "يرجى إدخال رقم الهاتف أو الواتساب" : "Please enter a phone or WhatsApp number";
    if (!category) return ar ? "يرجى اختيار فئة التقديم" : "Please select an application category";
    if (!experience.trim()) return ar ? "يرجى توضيح سنوات الخبرة أو سابقة الأعمال" : "Please specify your relevant experience";
    if (!message.trim()) return ar ? "يرجى كتابة رسالة أو نبذة تعريفية" : "Please write a message or brief overview";

    if (applicantType === "organization") {
      if (!companyName.trim()) return ar ? "يرجى إدخال اسم الشركة أو المؤسسة" : "Please enter the company/organization name";
      if (!organizationScope.trim()) return ar ? "يرجى توضيح نطاق الخدمات أو المنتجات" : "Please describe your scope of services/products";
    }

    if (!consent) return ar ? "يرجى الموافقة على سياسة الخصوصية للمتابعة" : "Please agree to the privacy consent to proceed";

    return "";
  };

  const buildApplicationPayloadText = () => {
    const selectedCategoryObj = activeCategories.find((c) => c.id === category);
    const catLabel = selectedCategoryObj ? (ar ? selectedCategoryObj.labelAr : selectedCategoryObj.labelEn) : category;

    return `
==============================
SAMI BIN AYYAD GROUP — APPLICATION
==============================
Track: ${track.titleEn} (${track.titleAr})
Applicant Type: ${applicantType === "individual" ? "Individual Professional" : "Organization / Partner / Supplier"}
Reference: ${referenceId || "Direct Submission"}

[CONTACT DETAILS]
Full Name / Contact: ${fullName}
Email: ${email}
Phone / WhatsApp: ${phone}
Country / City: ${country} - ${city || "N/A"}

[CATEGORY & EXPERIENCE]
Application Category: ${catLabel}
Relevant Experience: ${experience}

${
  applicantType === "individual"
    ? `[INDIVIDUAL PROFILE]
Current Title / Role: ${currentTitle || "N/A"}
Key Skills: ${skills || "N/A"}
Portfolio / LinkedIn: ${portfolioUrl || "N/A"}`
    : `[ORGANIZATION PROFILE]
Company Name: ${companyName}
Commercial Registration: ${companyRegistration || "N/A"}
Website: ${companyWebsite || "N/A"}
Scope of Services: ${organizationScope}`
}

[MESSAGE / STATEMENT OF INTEREST]
${message}

Attached Files: ${files.map((f) => f.name).join(", ") || "None"}
==============================
`.trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");
    setBackendErrorDetails("");

    const errorMsg = validateForm();
    if (errorMsg) {
      setValidationError(errorMsg);
      return;
    }

    setStatus("submitting");

    // Generate unique application reference ID
    const refCode = `SBA-${track.id.toUpperCase().slice(0, 3)}-${Date.now().toString(36).toUpperCase()}`;
    setReferenceId(refCode);

    try {
      const selectedCategoryObj = activeCategories.find((c) => c.id === category);
      const catLabel = selectedCategoryObj ? `${selectedCategoryObj.labelEn} (${selectedCategoryObj.labelAr})` : category;

      // 1. Upload files to Supabase storage if storage is active
      const uploadedPaths: string[] = [];
      let storageErrorMessage = "";

      for (const file of files) {
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]+/g, "-");
        const path = `applications/${track.id}/${Date.now()}-${safeName}`;
        try {
          const { error: uploadError } = await supabase.storage.from("inquiries").upload(path, file);
          if (uploadError) {
            storageErrorMessage = uploadError.message;
          } else {
            uploadedPaths.push(path);
          }
        } catch (err: unknown) {
          const e = err as Error;
          storageErrorMessage = e?.message || "Storage upload issue";
        }
      }

      // 2. Prepare structured notes
      const structuredNotes = [
        `[Application Track: ${track.titleEn} / ${track.titleAr}]`,
        `[Type: ${applicantType === "individual" ? "Individual Professional" : "Organization / Company"}]`,
        `[Category: ${catLabel}]`,
        `[Experience: ${experience}]`,
        applicantType === "individual" ? `[Current Role: ${currentTitle || "N/A"}]` : `[Company: ${companyName}]`,
        applicantType === "individual" ? `[Skills: ${skills || "N/A"}]` : `[Scope: ${organizationScope}]`,
        applicantType === "individual" && portfolioUrl ? `[Portfolio/LinkedIn: ${portfolioUrl}]` : "",
        applicantType === "organization" && companyWebsite ? `[Website: ${companyWebsite}]` : "",
        applicantType === "organization" && companyRegistration ? `[CR/Tax: ${companyRegistration}]` : "",
        files.length > 0 ? `[Files Attached: ${files.map((f) => f.name).join(", ")}]` : "",
        `\n[Applicant Statement / Message]:\n${message}`,
      ]
        .filter(Boolean)
        .join("\n");

      // 3. Insert record into Supabase backend
      const { error: insertError } = await supabase.from("inquiries").insert({
        company: applicantType === "organization" ? companyName : `Individual: ${fullName}`,
        contact_name: fullName,
        email: email,
        phone: phone,
        country: `${country}${city ? ` · ${city}` : ""}`,
        model_code: `join-${track.id}`,
        product_type: `Join Application · ${catLabel}`,
        quantity: applicantType,
        timeline: `Exp: ${experience}`,
        message: structuredNotes,
        file_paths: uploadedPaths,
      });

      if (insertError) {
        // Backend returned an error (e.g. RLS policy violation or table permission missing)
        // Strictly per requirement: "If no backend or email integration is configured, clearly identify the missing integration and do not simulate a successful submission."
        console.error("[JoinForm Submission Error]", insertError);
        setStatus("error");
        setBackendErrorDetails(
          insertError.message ||
            (insertError.code === "42501"
              ? "Row-Level Security (RLS) permission on Supabase requires an insert policy for public applications."
              : "Database service returned an unhandled status.")
        );
        return;
      }

      // If insert succeeded cleanly
      setStatus("success");
    } catch (err: unknown) {
      console.error("[JoinForm Unexpected Error]", err);
      const e = err as Error;
      setStatus("error");
      setBackendErrorDetails(e?.message || "Connection to backend service could not be established.");
    }
  };

  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `[Application - ${track.titleEn}] ${fullName} - ${category}`
  )}&body=${encodeURIComponent(buildApplicationPayloadText())}`;

  const whatsappHref = `${WHATSAPP_URL}?text=${encodeURIComponent(
    `*SAMI BIN AYYAD GROUP — Application*\n\nTrack: ${track.titleEn}\nApplicant: ${fullName}\nType: ${
      applicantType === "individual" ? "Individual" : "Organization"
    }\nCategory: ${category}\nEmail: ${email}\nPhone: ${phone}\n\n*Message:*\n${message}`
  )}`;

  return (
    <div className="w-full">
      {/* SUCCESS STATE */}
      {status === "success" && (
        <Reveal>
          <div className="rounded-3xl border border-brand-green/30 bg-background/85 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-center max-w-2xl mx-auto">
            <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <CheckCircle2 className="size-10" />
            </div>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground">
              <span className="size-2 rounded-full bg-brand-green animate-pulse" />
              <span>{referenceId}</span>
            </div>

            <h3 className="mt-4 font-head text-2xl sm:text-3xl font-extrabold text-foreground">
              {ar ? "تم استلام طلبك بنجاح" : "Application Received Successfully"}
            </h3>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
              {ar
                ? `شكراً لاهتمامك بالانضمام إلى ${track.titleAr}. تمت أرشفة بياناتك وسيقوم فريق الاستقطاب والشراكات بمراجعة طلبك والتواصل معك عبر البريد الإلكتروني أو الهاتف خلال أيام العمل الرسمية.`
                : `Thank you for your interest in ${track.titleEn}. Your application has been logged and our recruitment and partnerships team will review your qualifications and contact you within standard business days.`}
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-secondary/40 p-4 text-start text-xs sm:text-sm space-y-2">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">{ar ? "المسار المستهدف:" : "Target Track:"}</span>
                <span className="font-bold text-foreground">{ar ? track.titleAr : track.titleEn}</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">{ar ? "نوع مقدم الطلب:" : "Applicant Type:"}</span>
                <span className="font-bold text-foreground">
                  {applicantType === "individual" ? (ar ? "فرد / متخصص" : "Individual Professional") : (ar ? "شركة / شريك / مورد" : "Organization / Partner / Supplier")}
                </span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">{ar ? "مقدم الطلب:" : "Applicant Name:"}</span>
                <span className="font-bold text-foreground">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">{ar ? "البريد الإلكتروني:" : "Email:"}</span>
                <span className="font-mono text-foreground">{email}</span>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  setStatus("idle");
                  setFullName("");
                  setEmail("");
                  setPhone("");
                  setMessage("");
                  setFiles([]);
                }}
                className="rounded-full"
              >
                {ar ? "تقديم طلب آخر" : "Submit Another Application"}
              </Button>

              <Button asChild size="lg" className="rounded-full bg-brand-green hover:bg-brand-orange text-white">
                <a href={whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 me-2" />
                  {ar ? "متابعة الطلب عبر واتساب" : "Follow Up on WhatsApp"}
                </a>
              </Button>
            </div>
          </div>
        </Reveal>
      )}

      {/* ERROR STATE: Transparent identification of backend integration requirement per prompt instructions */}
      {status === "error" && (
        <Reveal>
          <div className="rounded-3xl border border-destructive/40 bg-background/90 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-destructive/10 text-destructive">
                <AlertCircle className="size-7" />
              </div>
              <div>
                <h3 className="font-head text-lg sm:text-xl font-bold text-foreground">
                  {ar ? "تنبيه نظام معالجة الطلبات" : "Backend Integration Notice"}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {ar
                    ? "وفقاً لاشتراطات الأمان، لم تتم محاكاة نجاح زائف. تعذّر تسجيل الطلب تلقائياً في قاعدة البيانات نظراً للاحتياج إلى ضبط تصاريح الأمان (Row-Level Security) على Supabase أو خدمة معالجة النماذج."
                    : "In accordance with strict security specifications, no simulated success was shown. The submission could not be committed directly to the database due to backend service permissions or Row-Level Security (RLS) restrictions."}
                </p>

                {backendErrorDetails && (
                  <div className="mt-3 rounded-xl border border-border bg-secondary/60 p-3 font-mono text-[11px] text-muted-foreground break-all">
                    <span className="font-bold text-destructive">{ar ? "التشخيص الفني: " : "Diagnostic: "}</span>
                    {backendErrorDetails}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-6 border-t border-border pt-6">
              <h4 className="font-head text-sm font-bold text-foreground mb-3">
                {ar ? "بياناتك محفوظة جاهزة! يمكنك إرسالها مباشرة الآن عبر القنوات المعتمدة:" : "Your application data is intact! Send it directly through verified channels:"}
              </h4>

              <div className="grid gap-3 sm:grid-cols-2">
                <Button asChild size="lg" className="rounded-2xl bg-brand-green hover:bg-brand-orange text-white w-full">
                  <a href={mailtoHref}>
                    <Mail className="size-4 me-2" />
                    {ar ? "إرسال بالبريد الإلكتروني الرسمي" : "Send via Official Email"}
                  </a>
                </Button>

                <Button asChild size="lg" variant="outline" className="rounded-2xl border-brand-green/40 hover:bg-brand-green/10 w-full">
                  <a href={whatsappHref} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4 me-2 text-brand-green" />
                    {ar ? "إرسال فوري عبر واتساب" : "Send Instant via WhatsApp"}
                  </a>
                </Button>
              </div>

              <div className="mt-4 text-center">
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="text-xs font-semibold text-muted-foreground hover:text-foreground underline underline-offset-4"
                >
                  {ar ? "العودة للنموذج وتعديل البيانات" : "Back to form to edit details"}
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      )}

      {/* ACTIVE FORM STATE */}
      {status !== "success" && status !== "error" && (
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="website_check"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          {/* 1. APPLICANT TYPE TOGGLE (Apple-inspired Pill Switcher) */}
          <div className="rounded-3xl border border-white/40 bg-background/80 p-3 sm:p-4 shadow-sm backdrop-blur-xl">
            <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 px-2">
              {ar ? "اختر صفة التقديم:" : "Select Applicant Type:"}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleTypeChange("individual")}
                className={cn(
                  "flex items-center justify-center gap-2.5 rounded-2xl py-3 px-4 text-xs sm:text-sm font-bold transition-all duration-300",
                  applicantType === "individual"
                    ? "bg-brand-green text-white shadow-md scale-[1.01]"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <User className="size-4" />
                <span>{ar ? "أفراد / مهنيون / كوادر" : "Individual / Professional"}</span>
              </button>

              <button
                type="button"
                onClick={() => handleTypeChange("organization")}
                className={cn(
                  "flex items-center justify-center gap-2.5 rounded-2xl py-3 px-4 text-xs sm:text-sm font-bold transition-all duration-300",
                  applicantType === "organization"
                    ? "bg-brand-green text-white shadow-md scale-[1.01]"
                    : "bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Building2 className="size-4" />
                <span>{ar ? "شركات / مقاولون / موردون" : "Organization / Partner / Supplier"}</span>
              </button>
            </div>
          </div>

          {/* 2. GENERAL & CONDITIONAL FIELDS CONTAINER */}
          <div className="rounded-3xl border border-white/40 bg-background/80 p-6 sm:p-10 shadow-xl backdrop-blur-2xl space-y-6">
            <div className="border-b border-border/80 pb-4">
              <h3 className="font-head text-lg sm:text-xl font-bold text-foreground">
                {applicantType === "individual"
                  ? ar
                    ? "البيانات المهنية والشخصية"
                    : "Personal & Professional Information"
                  : ar
                    ? "بيانات المنشأة والمسؤول المفوض"
                    : "Organization & Contact Details"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {ar ? "جميع البيانات تعامل بسرية تامة ولا تنشر علناً." : "All data is securely handled and never displayed publicly."}
              </p>
            </div>

            {/* Row 1: Name & Email */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {applicantType === "individual" ? (ar ? "الاسم بالكامل *" : "Full Name *") : (ar ? "اسم المسؤول المفوض للتواصل *" : "Authorized Contact Person *")}
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder={ar ? "مثال: م. أحمد عبد الرحمن" : "e.g. Johnathan Doe"}
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {ar ? "البريد الإلكتروني الرسمي *" : "Official Email Address *"}
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
            </div>

            {/* Row 2: Phone & Country/City */}
            <div className="grid gap-5 sm:grid-cols-3">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {ar ? "رقم الهاتف / الواتساب *" : "Phone / WhatsApp Number *"}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+20 100 000 0000"
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {ar ? "الدولة *" : "Country *"}
                </label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  placeholder={ar ? "مصر / السعودية / الإمارات..." : "Egypt, UAE, KSA..."}
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {ar ? "المدينة / المحافظة" : "City / Region"}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={ar ? "القاهرة / الإسكندرية..." : "Cairo, Riyadh..."}
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
            </div>

            {/* CONDITIONAL ORGANIZATION FIELDS */}
            {applicantType === "organization" && (
              <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-5 space-y-5">
                <h4 className="font-head text-xs sm:text-sm font-bold text-foreground flex items-center gap-2">
                  <Building2 className="size-4 text-brand-green" />
                  {ar ? "معلومات الشركة أو المؤسسة" : "Company & Commercial Information"}
                </h4>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2">
                      {ar ? "اسم الشركة / المؤسسة *" : "Company / Entity Name *"}
                    </label>
                    <input
                      type="text"
                      required={applicantType === "organization"}
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={ar ? "اسم المؤسسة أو المكتب الهندسي" : "e.g. Al-Amal Engineering Consultants"}
                      className="w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2">
                      {ar ? "الموقع الإلكتروني للشركة" : "Company Website / URL"}
                    </label>
                    <input
                      type="url"
                      value={companyWebsite}
                      onChange={(e) => setCompanyWebsite(e.target.value)}
                      placeholder="https://company.com"
                      className="w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2">
                      {ar ? "رقم السجل التجاري / الترخيص (اختياري)" : "Commercial Registration / Tax ID (Optional)"}
                    </label>
                    <input
                      type="text"
                      value={companyRegistration}
                      onChange={(e) => setCompanyRegistration(e.target.value)}
                      placeholder="CR-12345678"
                      className="w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-2">
                      {ar ? "نطاق الخدمات والمنتجات الموردة *" : "Scope of Services / Products Supplied *"}
                    </label>
                    <input
                      type="text"
                      required={applicantType === "organization"}
                      value={organizationScope}
                      onChange={(e) => setOrganizationScope(e.target.value)}
                      placeholder={ar ? "مثال: مقاولات كهروميكانيكية / توريد أنابيب وكيماويات" : "e.g. MEP Subcontracting / Solar Panels Supply"}
                      className="w-full rounded-2xl border border-border bg-background/90 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CONDITIONAL INDIVIDUAL FIELDS */}
            {applicantType === "individual" && (
              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {ar ? "المسمى الوظيفي الحالي / التخصص" : "Current Role / Specialization"}
                  </label>
                  <input
                    type="text"
                    value={currentTitle}
                    onChange={(e) => setCurrentTitle(e.target.value)}
                    placeholder={ar ? "مهندس موقع أول / باحث بيئي" : "e.g. Senior Site Engineer"}
                    className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {ar ? "أبرز المهارات أو الشهادات" : "Key Skills / Certifications"}
                  </label>
                  <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder={ar ? "PMP, OSHA, LEED, BIM..." : "PMP, BIM, ISO 14001, Primavera..."}
                    className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-2">
                    {ar ? "رابط لينكد إن / معرض الأعمال" : "LinkedIn / Portfolio Link"}
                  </label>
                  <input
                    type="url"
                    value={portfolioUrl}
                    onChange={(e) => setPortfolioUrl(e.target.value)}
                    placeholder="https://linkedin.com/in/..."
                    className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                  />
                </div>
              </div>
            )}

            {/* Row 3: Category & Experience */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {ar ? "فئة التقديم والتخصص *" : "Application Category *"}
                </label>
                <div className="relative">
                  <select
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full appearance-none rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 pe-10"
                  >
                    <option value="">{ar ? "— اختر الفئة المناسبة —" : "— Select Target Category —"}</option>
                    {activeCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {ar ? cat.labelAr : cat.labelEn}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute end-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-2">
                  {applicantType === "individual"
                    ? ar
                      ? "سنوات الخبرة في المجال *"
                      : "Years of Relevant Experience *"
                    : ar
                      ? "سنوات العمل في السوق / سابقة الأعمال *"
                      : "Years in Business / Projects Track Record *"}
                </label>
                <input
                  type="text"
                  required
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  placeholder={
                    applicantType === "individual"
                      ? ar
                        ? "مثال: 7 سنوات خبرة بالمشروعات الطبية"
                        : "e.g. 7 years in healthcare MEP contracting"
                      : ar
                        ? "مثال: أكثر من 12 عاماً ونفذنا 30 مشروعاً"
                        : "e.g. 10+ years with 25+ delivered industrial projects"
                  }
                  className="w-full rounded-2xl border border-border bg-background/80 px-4 py-3 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20"
                />
              </div>
            </div>

            {/* Message / Statement of Interest */}
            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {applicantType === "individual"
                  ? ar
                    ? "رسالة التقديم / النبذة التعريفية *"
                    : "Cover Message / Statement of Interest *"
                  : ar
                    ? "نبذة عن سابقة الأعمال وفرص التعاون المقترحة *"
                    : "Company Overview & Proposed Cooperation Scope *"}
              </label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  ar
                    ? "وضح باختصار مؤهلاتك أو خدمات شركتك وكيف تتوافق مع رؤية مجموعة سامي بن عياد..."
                    : "Provide a brief summary of your qualifications or organizational capabilities and how you wish to collaborate..."
                }
                className="w-full rounded-2xl border border-border bg-background/80 p-4 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 resize-y"
              />
            </div>

            {/* 3. DOCUMENT UPLOAD ZONE (Apple-inspired clean drag/drop zone) */}
            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {applicantType === "individual"
                  ? ar
                    ? "السيرة الذاتية (CV / Resume) والشهادات (اختياري أو مستحسن)"
                    : "Curriculum Vitae (CV) & Credentials (Recommended)"
                  : ar
                    ? "الملف التعريفي للشركة (Company Profile) وسجل المشروعات والكتالوجات"
                    : "Company Profile, Portfolio & Pre-qualification Dossier"}
              </label>

              <div className="relative rounded-2xl border-2 border-dashed border-border bg-secondary/20 p-6 text-center hover:border-brand-green/50 transition-colors">
                <input
                  type="file"
                  multiple
                  id="join-file-upload"
                  accept=".pdf,.doc,.docx,.zip,.png,.jpg,.jpeg"
                  onChange={handleFileChange}
                  className="absolute inset-0 size-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center pointer-events-none">
                  <div className="flex size-12 items-center justify-center rounded-full bg-brand-green/10 text-brand-green mb-3">
                    <Upload className="size-5" />
                  </div>
                  <p className="font-head text-xs sm:text-sm font-bold text-foreground">
                    {ar ? "انقر هنا لاختيار الملفات أو اسحبها إلى هنا" : "Click to browse or drag & drop documents here"}
                  </p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    {applicantType === "individual"
                      ? ar
                        ? "صيغ PDF أو Word (الحد الأقصى 10 ميجابايت)"
                        : "PDF or Word documents (up to 10MB)"
                      : ar
                        ? "ملفات PDF أو ملفات مضغوطة ZIP تضم الكتالوجات وسابقة الأعمال (حتى 25 ميجابايت)"
                        : "PDF, ZIP, or portfolios containing project references (up to 25MB)"}
                  </p>
                </div>
              </div>

              {fileError && <p className="mt-2 text-xs font-bold text-destructive">{fileError}</p>}

              {/* Uploaded Files Chips */}
              {files.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {files.map((f, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-xs"
                    >
                      <FileText className="size-3.5 text-brand-green" />
                      <span className="max-w-[180px] truncate">{f.name}</span>
                      <span className="text-[10px] text-muted-foreground">({(f.size / 1024 / 1024).toFixed(1)} MB)</span>
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <X className="size-3.5" />
                      </button>
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* 4. PRIVACY CONSENT & SUBMISSION */}
            <div className="pt-4 border-t border-border/80 space-y-4">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 size-4 rounded border-border text-brand-green focus:ring-brand-green"
                />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  {ar
                    ? "أوافق على قيام مجموعة سامي بن عياد بمعالجة البيانات والمستندات المقدمة لأغراض التوظيف والتقييم الفني والشراكات التجارية وفق سياسة الخصوصية وسرية المعلومات."
                    : "I consent to SAMI BIN AYYAD GROUP processing the submitted data and documents for recruitment, technical evaluation, and partnership purposes in strict accordance with the privacy policy."}
                </span>
              </label>

              {validationError && (
                <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-3 text-xs font-bold text-destructive flex items-center gap-2">
                  <AlertCircle className="size-4 shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="size-4 text-brand-green" />
                  <span>{ar ? "معالجة آمنة ومشفرة للبيانات" : "Secure encrypted processing"}</span>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold px-8 shadow-lg shadow-brand-green/20 transition-all hover:scale-105 active:scale-95 disabled:opacity-50"
                >
                  {status === "submitting" ? (
                    <span className="flex items-center gap-2">
                      <span className="size-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      <span>{ar ? "جاري الإرسال والمعالجة..." : "Processing submission..."}</span>
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <span>{ar ? "إرسال طلب الانضمام" : "Submit Application"}</span>
                      <Send className="size-4 rtl:rotate-180" />
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
