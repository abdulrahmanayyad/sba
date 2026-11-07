import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ShieldAlert,
  ShieldCheck,
  Search,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Upload,
  FileText,
  X,
  Send,
  Lock,
  Copy,
  ChevronRight,
  Info,
  Calendar,
  Building,
  User,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  contactPortalSystem,
  type ComplaintRecord,
  type ComplaintCategory,
  type ComplaintPriority,
  COMPLAINT_CATEGORIES_MAP,
  COMPLAINT_STATUSES_MAP,
} from "@/lib/contact-portal-system";
import { submitCentralForm } from "@/lib/central-form-dispatch";

export function ComplaintsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Active View Tab: Submit New vs Track Existing
  const [activeTab, setActiveTab] = useState<"submit" | "track">("submit");

  // Form State
  const [category, setCategory] = useState<ComplaintCategory>("services");
  const [priority, setPriority] = useState<ComplaintPriority>("medium");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "whatsapp">("email");
  const [relationship, setRelationship] = useState<"customer" | "supplier" | "partner" | "employee" | "contractor" | "other">("customer");

  const [sector, setSector] = useState(ar ? "المقاولات والتطوير العقاري" : "Contracting & Real Estate");
  const [subsidiary, setSubsidiary] = useState("");
  const [department, setDepartment] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [incidentLocation, setIncidentLocation] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [desiredResolution, setDesiredResolution] = useState("");
  const [confidentialityConsent, setConfidentialityConsent] = useState(false);
  const [attachments, setAttachments] = useState<Array<{ name: string; size: string }>>([]);

  // Form Validation & Submission
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedComplaint, setSubmittedComplaint] = useState<ComplaintRecord | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Tracking System State
  const [trackRefCode, setTrackRefCode] = useState("");
  const [trackEmail, setTrackEmail] = useState("");
  const [trackedRecord, setTrackedRecord] = useState<ComplaintRecord | null>(null);
  const [trackSearched, setTrackSearched] = useState(false);
  const [trackError, setTrackError] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      }));
      setAttachments((prev) => [...prev, ...files]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = ar ? "الاسم بالكامل مطلوب" : "Full Name is required";
    if (!country.trim()) errs.country = ar ? "الدولة مطلوبة" : "Country is required";
    if (!email.trim() || !email.includes("@")) errs.email = ar ? "بريد إلكتروني صحيح مطلوب" : "Valid email is required";
    if (!phone.trim()) errs.phone = ar ? "رقم الهاتف مطلوب" : "Phone number is required";
    if (!subject.trim()) errs.subject = ar ? "موضوع الشكوى أو المقترح مطلوب" : "Subject is required";
    if (!description.trim()) errs.description = ar ? "التفاصيل والشرح مطلوبان" : "Detailed description is required";
    if (!confidentialityConsent) errs.consent = ar ? "يرجى الإقرار بصحة البيانات وسياسة الخصوصية" : "Consent is required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    submitCentralForm({
      formType: "complaint",
      name: fullName,
      company: company || undefined,
      email,
      phone,
      country,
      sector: sector || undefined,
      serviceOrProduct: subject,
      message: `[Complaint Category: ${category}] | [Priority: ${priority}]\n[Relationship: ${relationship}]\n[Subsidiary: ${subsidiary || "N/A"}] | [Department: ${department || "N/A"}]\n[Date: ${incidentDate || "N/A"}] | [Location: ${incidentLocation || "N/A"}]\n[Existing Ref: ${referenceNumber || "N/A"}]\n\n[Description]:\n${description}\n\n[Desired Resolution]:\n${desiredResolution || "Standard Review"}`,
      metadata: {
        category,
        priority,
        relationship,
        subsidiary,
        department,
        attachments: attachments.map((a) => a.name),
      },
    }).catch(console.error);

    setTimeout(() => {
      const created = contactPortalSystem.submitComplaint({
        category,
        priority,
        complainant: {
          fullName,
          company: company || undefined,
          country,
          email,
          phone,
          preferredContact,
          relationship,
        },
        details: {
          sector,
          subsidiary: subsidiary || undefined,
          department: department || undefined,
          incidentDate: incidentDate || undefined,
          incidentLocation: incidentLocation || undefined,
          referenceNumber: referenceNumber || undefined,
          subject,
          description,
          desiredResolution: desiredResolution || undefined,
          attachments: attachments.length > 0 ? attachments : undefined,
        },
      });

      setSubmittedComplaint(created);
      setIsSubmitting(false);

      // Reset
      setFullName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setSubject("");
      setDescription("");
      setDesiredResolution("");
      setReferenceNumber("");
      setAttachments([]);
      setConfidentialityConsent(false);
      setErrors({});
    }, 600);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackRefCode.trim() || !trackEmail.trim()) return;

    setTrackSearched(true);
    const result = contactPortalSystem.trackComplaint(trackRefCode, trackEmail);
    if (result) {
      setTrackedRecord(result);
      setTrackError(false);
    } else {
      setTrackedRecord(null);
      setTrackError(true);
    }
  };

  const copyRef = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedRef(true);
    setTimeout(() => setCopiedRef(false), 2000);
  };

  return (
    <div className="w-full pb-20">
      {/* Hero Header */}
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-secondary/40 via-background to-background">
        <div className="site-container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4 shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "الجودة والامتثال المؤسسي" : "Governance & Quality Assurance"}</span>
          </div>

          <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {ar ? "الشكاوى والمقترحات" : "Complaints & Suggestions"}
          </h1>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
            <p className="font-medium text-foreground">
              {ar
                ? "تحرص مجموعة سامي بن عياد على تطبيق أعلى معايير الجودة والاحترافية في خدماتها وعلاقاتها التجارية."
                : "At Sami Bin Ayyad Group, we are committed to maintaining high standards of quality, professionalism, and business integrity."}
            </p>
            <p>
              {ar
                ? "ونؤمن بأن ملاحظات عملائنا وشركائنا وموظفينا تمثل أحد أهم مصادر التطوير والتحسين المستمر."
                : "We consider feedback, complaints, and suggestions essential to our continuous improvement."}
            </p>
            <p className="text-sm sm:text-base text-brand-orange font-semibold">
              {ar
                ? "لذلك خصصنا هذه الصفحة لاستقبال الشكاوى والملاحظات والمقترحات، والعمل على مراجعتها ومعالجتها من خلال آلية واضحة تضمن السرية والشفافية والاهتمام بكل طلب."
                : "This channel provides a structured and confidential way to submit concerns, report issues, and share recommendations for review and appropriate action."}
            </p>
          </div>

          {/* Mode Switcher Pills: Submit vs Track */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex rounded-full border border-border bg-background/80 p-1.5 backdrop-blur-xl shadow-md">
              <button
                type="button"
                onClick={() => setActiveTab("submit")}
                className={cn(
                  "rounded-full px-6 py-2.5 text-xs sm:text-sm font-head font-bold transition-all duration-300 cursor-pointer",
                  activeTab === "submit"
                    ? "bg-brand-green text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {ar ? "تقديم شكوى أو مقترح جديد" : "Submit Complaint / Suggestion"}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("track")}
                className={cn(
                  "rounded-full px-6 py-2.5 text-xs sm:text-sm font-head font-bold transition-all duration-300 cursor-pointer",
                  activeTab === "track"
                    ? "bg-brand-orange text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {ar ? "متابعة حالة شكوى سابقة" : "Track Existing Complaint"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="site-container mt-6">
        {activeTab === "track" ? (
          /* ── TRACKING INTERFACE ── */
          <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-300">
            <div className="rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-10 backdrop-blur-2xl shadow-xl">
              <div className="border-b border-border/60 pb-4 mb-6">
                <span className="text-xs font-bold text-brand-orange uppercase block">
                  {ar ? "الاستعلام المباشر الآمن" : "Secure Direct Inquiry"}
                </span>
                <h2 className="font-head text-2xl font-bold text-foreground mt-1">
                  {ar ? "متابعة شكواك" : "Track Your Complaint"}
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  {ar
                    ? "أدخل الرقم المرجعي للشكوى والبريد الإلكتروني المسجل لعرض آخر مستجدات المعالجة."
                    : "Enter your reference number and registered email to check real-time resolution progress."}
                </p>
              </div>

              <form onSubmit={handleTrackSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "رقم الشكوى المرجعي *" : "Complaint Reference Number *"}
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. SBA-CMP-2026-4401"
                      value={trackRefCode}
                      onChange={(e) => setTrackRefCode(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono font-bold focus:outline-none focus:ring-2 focus:ring-brand-orange uppercase"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "البريد الإلكتروني المسجل *" : "Registered Email Address *"}
                    </label>
                    <input
                      type="email"
                      placeholder="name@domain.com"
                      value={trackEmail}
                      onChange={(e) => setTrackEmail(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-2xl bg-brand-orange text-white hover:bg-brand-green py-3 font-head font-bold text-xs sm:text-sm shadow-md"
                >
                  <Search className="size-4" />
                  <span>{ar ? "البحث والاستعلام عن الحالة" : "Search & Verify Status"}</span>
                </Button>
              </form>

              {/* Sample Quick Demo Numbers */}
              <div className="mt-4 pt-3 border-t border-border/40 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <span className="font-semibold">{ar ? "أرقام تجريبية للاختبار:" : "Sample demo codes:"}</span>
                <button
                  type="button"
                  onClick={() => { setTrackRefCode("SBA-CMP-2026-4401"); setTrackEmail("k.mansour@medapparel.com"); }}
                  className="font-mono text-brand-orange underline text-[11px] cursor-pointer"
                >
                  SBA-CMP-2026-4401 (High Priority)
                </button>
                <span>·</span>
                <button
                  type="button"
                  onClick={() => { setTrackRefCode("SBA-CMP-2026-4392"); setTrackEmail("k.zahrani@seri.gov.sa"); }}
                  className="font-mono text-brand-green underline text-[11px] cursor-pointer"
                >
                  SBA-CMP-2026-4392 (Resolved)
                </button>
              </div>
            </div>

            {/* Tracking Results View */}
            {trackSearched && trackError && (
              <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-center text-xs sm:text-sm text-red-600 font-semibold animate-in fade-in">
                {ar
                  ? "لم يتم العثور على أي شكوى مطابقة لرقم المرجع والبريد الإلكتروني المدخلين. يرجى التحقق وإعادة المحاولة."
                  : "No complaint matches the provided reference number and registered email. Please check and retry."}
              </div>
            )}

            {trackedRecord && (
              <div className="rounded-3xl border border-white/20 bg-background/90 p-6 sm:p-8 backdrop-blur-2xl shadow-xl space-y-6 animate-in fade-in">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase text-muted-foreground block">
                      {ar ? "رقم المرجع الموثق" : "Verified Reference Code"}
                    </span>
                    <span className="font-mono text-lg font-black text-foreground">
                      {trackedRecord.referenceCode}
                    </span>
                  </div>

                  <span
                    className={cn(
                      "rounded-full px-3.5 py-1 text-xs font-bold border",
                      COMPLAINT_STATUSES_MAP[trackedRecord.status].bg,
                      COMPLAINT_STATUSES_MAP[trackedRecord.status].color
                    )}
                  >
                    {ar
                      ? COMPLAINT_STATUSES_MAP[trackedRecord.status].ar
                      : COMPLAINT_STATUSES_MAP[trackedRecord.status].en}
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 text-xs">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "مقدم الشكوى:" : "Complainant:"}</span>
                    <span className="font-bold text-foreground">{trackedRecord.complainant.fullName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "التصنيف:" : "Category:"}</span>
                    <span className="font-bold text-foreground">
                      {ar ? COMPLAINT_CATEGORIES_MAP[trackedRecord.category].ar : COMPLAINT_CATEGORIES_MAP[trackedRecord.category].en}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "تاريخ الاستلام:" : "Date Received:"}</span>
                    <span className="font-mono font-semibold text-foreground">
                      {new Date(trackedRecord.createdAt).toLocaleDateString(ar ? "ar-EG" : "en-US")}
                    </span>
                  </div>
                </div>

                {/* Resolution note if resolved */}
                {trackedRecord.resolutionDetails && (
                  <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-4">
                    <span className="font-bold text-xs text-brand-green block mb-1">
                      {ar ? "القرار والإجراء المتخذ من الإدارة:" : "Management Resolution:"}
                    </span>
                    <p className="text-xs sm:text-sm text-foreground leading-relaxed font-sans">
                      {trackedRecord.resolutionDetails}
                    </p>
                  </div>
                )}

                {/* Public Timeline Updates */}
                <div>
                  <h3 className="font-head text-sm font-bold text-foreground mb-3">
                    {ar ? "سجل ومراحل متابعة الشكوى:" : "Resolution Milestones & Timeline:"}
                  </h3>
                  <div className="space-y-3">
                    {trackedRecord.timelineUpdates.map((t, idx) => (
                      <div key={t.id || idx} className="flex items-start gap-3 p-3 rounded-2xl border border-border/80 bg-secondary/30">
                        <div className="size-6 rounded-full bg-brand-orange/20 text-brand-orange flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="font-bold text-xs text-foreground">
                            {ar ? t.titleAr : t.titleEn}
                          </p>
                          <span className="text-[10px] text-muted-foreground font-mono">
                            {new Date(t.timestamp).toLocaleString(ar ? "ar-EG" : "en-US")}
                          </span>
                          {(ar ? t.noteAr : t.noteEn) && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {ar ? t.noteAr : t.noteEn}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-border/40 text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <Lock className="size-3 text-brand-green" />
                  <span>
                    {ar
                      ? "نظام مشفر ومحمي: لا يتم عرض أي ملاحظات إدارية داخلية أو بيانات شخصية للغير."
                      : "Protected system: Internal administrative notes and third-party data are strictly withheld."}
                  </span>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* ── SUBMISSION FORM ── */
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
              <div className="border-b border-border/60 pb-5 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green mb-2">
                  <ShieldCheck className="size-3.5" />
                  <span>{ar ? "سرية تامة وتعامل مهني موثق" : "Confidential & Structured Workflow"}</span>
                </div>
                <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar ? "نموذج تسجيل شكوى أو مقترح تطوير" : "Register Complaint or Improvement Suggestion"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar
                    ? "يتم قيد الشكوى برقم مرجعي تلقائي وتوجيهها مباشرة إلى إدارة الحوكمة والجودة للتحقيق والمعالجة."
                    : "Your submission will generate an official reference code and be referred directly to Quality & Governance."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* SECTION A: Complainant Information */}
                <div>
                  <h3 className="font-head text-sm sm:text-base font-bold text-brand-orange border-b border-border/40 pb-2 mb-4 flex items-center gap-2">
                    <User className="size-4" />
                    <span>{ar ? "أولاً: بيانات مقدم الطلب" : "Section A: Complainant Information"}</span>
                  </h3>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الاسم بالكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={ar ? "الاسم ثلاثي أو رباعي" : "Full Name"}
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                          errors.fullName ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الشركة أو المؤسسة (اختياري)" : "Company / Organization (Optional)"}
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={ar ? "اسم المنشأة أو الشركة" : "Company name"}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الدولة *" : "Country *"}
                      </label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                          errors.country ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.country && <p className="text-[11px] text-red-500 mt-1">{errors.country}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "صفة العلاقة مع المجموعة *" : "Relationship with the Group *"}
                      </label>
                      <select
                        value={relationship}
                        onChange={(e) => setRelationship(e.target.value as any)}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                      >
                        <option value="customer">{ar ? "عميل حالي أو سابق" : "Customer / Client"}</option>
                        <option value="supplier">{ar ? "مورد أو مقاول باطن" : "Supplier / Vendor"}</option>
                        <option value="partner">{ar ? "شريك تجاري أو استثماري" : "Business Partner"}</option>
                        <option value="employee">{ar ? "موظف بالمجموعة" : "Employee"}</option>
                        <option value="contractor">{ar ? "مقاول أو استشاري خارجي" : "Contractor / Consultant"}</option>
                        <option value="other">{ar ? "أخرى" : "Other"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@domain.com"
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green font-mono",
                          errors.email ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "رقم الهاتف للتواصل *" : "Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 100 000 0000"
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green font-mono",
                          errors.phone ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.phone && <p className="text-[11px] text-red-500 mt-1">{errors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* SECTION B: Complaint Information */}
                <div>
                  <h3 className="font-head text-sm sm:text-base font-bold text-brand-orange border-b border-border/40 pb-2 mb-4 flex items-center gap-2">
                    <AlertTriangle className="size-4" />
                    <span>{ar ? "ثانياً: تفاصيل وموضوع الشكوى أو المقترح" : "Section B: Complaint Information"}</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "تصنيف الطلب *" : "Complaint Category *"}
                        </label>
                        <select
                          value={category}
                          onChange={(e) => setCategory(e.target.value as ComplaintCategory)}
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                        >
                          {(Object.keys(COMPLAINT_CATEGORIES_MAP) as ComplaintCategory[]).map((cat) => (
                            <option key={cat} value={cat}>
                              {ar ? COMPLAINT_CATEGORIES_MAP[cat].ar : COMPLAINT_CATEGORIES_MAP[cat].en}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "القطاع المعني *" : "Related Business Sector *"}
                        </label>
                        <select
                          value={sector}
                          onChange={(e) => setSector(e.target.value)}
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                        >
                          <option value="construction">{ar ? "المقاولات والتطوير العقاري" : "Contracting & Real Estate"}</option>
                          <option value="environmental">{ar ? "الحلول البيئية والاستدامة" : "Environmental Solutions"}</option>
                          <option value="garment">{ar ? "صناعة النسيج والملابس الجاهزة" : "Garment Manufacturing"}</option>
                          <option value="food">{ar ? "المنتجات الطبيعية والغذائية" : "Natural Products"}</option>
                          <option value="group">{ar ? "الإدارة المركزية للمجموعة" : "Group Central Administration"}</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "الشركة التابعة أو المصنع" : "Related Company or Subsidiary"}
                        </label>
                        <input
                          type="text"
                          value={subsidiary}
                          onChange={(e) => setSubsidiary(e.target.value)}
                          placeholder={ar ? "مثال: مصنع الملابس، شركة المقاولات" : "Subsidiary or plant"}
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "رقم العقد / الفاتورة / أمر التوريد (إن وجد)" : "Contract / Invoice / PO Number"}
                        </label>
                        <input
                          type="text"
                          value={referenceNumber}
                          onChange={(e) => setReferenceNumber(e.target.value)}
                          placeholder="e.g. INV-2026-902"
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "تاريخ الواقعة أو الملاحظة" : "Date of Incident"}
                        </label>
                        <input
                          type="date"
                          value={incidentDate}
                          onChange={(e) => setIncidentDate(e.target.value)}
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-foreground mb-1.5">
                          {ar ? "مكان الواقعة أو المشروع" : "Location of Incident"}
                        </label>
                        <input
                          type="text"
                          value={incidentLocation}
                          onChange={(e) => setIncidentLocation(e.target.value)}
                          placeholder={ar ? "مثال: موقع المشروع، الميناء، المصنع" : "Location or project site"}
                          className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "موضوع الشكوى / المقترح *" : "Complaint Subject *"}
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={ar ? "ملخص واضح ومباشر للشكوى" : "Brief specific summary"}
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                          errors.subject ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الشرح التفصيلي للشكوى أو المقترح *" : "Detailed Description *"}
                      </label>
                      <textarea
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder={ar ? "يرجى ذكر كافة التفاصيل بدقة، والتواريخ، والأسماء إن أمكن..." : "Detail the full facts, dates, personnel involved, and occurrences..."}
                        className={cn(
                          "w-full rounded-2xl border bg-background px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed",
                          errors.description ? "border-red-500" : "border-border"
                        )}
                      />
                      {errors.description && <p className="text-[11px] text-red-500 mt-1">{errors.description}</p>}
                    </div>
                  </div>
                </div>

                {/* SECTION C: Supporting Documents */}
                <div>
                  <h3 className="font-head text-sm sm:text-base font-bold text-brand-orange border-b border-border/40 pb-2 mb-3 flex items-center gap-2">
                    <FileText className="size-4" />
                    <span>{ar ? "ثالثاً: المستندات المؤيدة والمرفقات" : "Section C: Supporting Documentation"}</span>
                  </h3>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    {ar
                      ? "يمكنك إرفاق صور، فواتير، عقود، أو مراسلات تدعم الشكوى (PDF, DOCX, JPG, PNG)."
                      : "Upload supporting photos, invoices, contracts, or email correspondence."}
                  </p>

                  <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-border hover:border-brand-green/60 bg-secondary/30 hover:bg-secondary/50 cursor-pointer transition-all">
                    <Upload className="size-6 text-brand-green mb-2" />
                    <span className="text-xs font-bold text-foreground">
                      {ar ? "انقر لاختيار المستندات المؤيدة" : "Click to select files"}
                    </span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </label>

                  {attachments.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {attachments.map((file, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between p-2.5 rounded-xl border border-border bg-background/90 text-xs"
                        >
                          <div className="flex items-center gap-2">
                            <FileText className="size-4 text-brand-orange" />
                            <span className="font-semibold">{file.name}</span>
                            <span className="text-[10px] text-muted-foreground font-mono">({file.size})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeAttachment(idx)}
                            className="text-muted-foreground hover:text-red-500 transition-colors p-1"
                          >
                            <X className="size-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* SECTION D: Desired Resolution */}
                <div>
                  <h3 className="font-head text-sm sm:text-base font-bold text-brand-orange border-b border-border/40 pb-2 mb-3 flex items-center gap-2">
                    <CheckCircle2 className="size-4" />
                    <span>{ar ? "رابعاً: الإجراء أو الحل المأمول" : "Section D: Desired Resolution"}</span>
                  </h3>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    {ar ? "ما الإجراء أو الحل الذي تتطلع إليه؟" : "What outcome or resolution are you seeking?"}
                  </label>
                  <textarea
                    rows={2}
                    value={desiredResolution}
                    onChange={(e) => setDesiredResolution(e.target.value)}
                    placeholder={ar ? "وضح مقترحك لحل المشكلة أو التعويض المطلوب..." : "State your desired corrective action or compensation..."}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed"
                  />
                </div>

                {/* SECTION E: Confidentiality Consent */}
                <div className="pt-2 border-t border-border/60">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={confidentialityConsent}
                      onChange={(e) => setConfidentialityConsent(e.target.checked)}
                      className="size-4 rounded border-border text-brand-green focus:ring-brand-green mt-1 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-foreground/90 font-medium leading-relaxed">
                      {ar
                        ? "أقر بأن المعلومات المقدمة صحيحة حسب علمي، وأوافق على استخدام البيانات المقدمة لغرض مراجعة الشكوى والتواصل بشأنها وفق سياسة الخصوصية."
                        : "I declare that the information provided is accurate to the best of my knowledge, and I consent to the use of submitted data for complaint evaluation in accordance with the Privacy Policy."}
                    </span>
                  </label>
                  {errors.consent && <p className="text-[11px] text-red-500 mt-1.5">{errors.consent}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4 border-t border-border/60">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl !bg-brand-green !text-white hover:!bg-brand-orange py-3.5 font-head font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{ar ? "جاري القيد والتشفير..." : "Registering Complaint..."}</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="size-4" />
                        <span>{ar ? "تسجيل الشكوى وإصدار رقم المرجع" : "Register Complaint & Generate Reference"}</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Success Dialog */}
      <Dialog open={!!submittedComplaint} onOpenChange={(open) => !open && setSubmittedComplaint(null)}>
        <DialogContent className="max-w-md rounded-3xl border border-brand-green/30 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <div className="mx-auto size-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-3">
              <CheckCircle2 className="size-8" />
            </div>
            <DialogTitle className="font-head text-xl font-bold text-center text-foreground">
              {ar ? "تم استلام شكواك بنجاح" : "Complaint Successfully Registered"}
            </DialogTitle>
            <DialogDescription className="text-center text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              {ar ? (
                <>
                  نشكرك على مشاركتنا ملاحظاتك، ونؤكد أن طلبك سيخضع للمراجعة من الإدارة المختصة، مع التعامل مع المعلومات المقدمة بسرية واهتمام.
                </>
              ) : (
                <>
                  Thank you for sharing your feedback. Your submission will be carefully reviewed by the responsible department with absolute confidentiality and care.
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {submittedComplaint && (
            <div className="my-4 p-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                  {ar ? "رقم الشكوى المرجعي (احفظه للمتابعة)" : "Complaint Reference Number"}
                </span>
                <span className="font-mono text-base font-black text-brand-orange">
                  {submittedComplaint.referenceCode}
                </span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => copyRef(submittedComplaint.referenceCode)}
                className="rounded-xl border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white gap-1.5 text-xs font-bold"
              >
                <Copy className="size-3.5" />
                <span>{copiedRef ? (ar ? "تم النسخ" : "Copied") : (ar ? "نسخ" : "Copy")}</span>
              </Button>
            </div>
          )}

          <div className="flex gap-2">
            <Button
              type="button"
              onClick={() => {
                if (submittedComplaint) {
                  setTrackRefCode(submittedComplaint.referenceCode);
                  setTrackEmail(submittedComplaint.complainant.email);
                  setActiveTab("track");
                }
                setSubmittedComplaint(null);
              }}
              className="w-full rounded-2xl bg-brand-green text-white hover:bg-brand-orange font-bold text-xs"
            >
              {ar ? "الانتقال إلى شاشة المتابعة" : "Go to Tracking Interface"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

