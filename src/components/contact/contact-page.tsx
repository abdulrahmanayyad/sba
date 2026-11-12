import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  CheckCircle2,
  Upload,
  FileText,
  X,
  Send,
  MessageCircle,
  Copy,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  contactPortalSystem,
  type ContactInquiry,
  type ContactInquiryType,
  INQUIRY_TYPES_MAP,
} from "@/lib/contact-portal-system";
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { ContactDirectorySidebar } from "./contact-sidebar";

const DEPT_AR_MAP: Record<ContactInquiryType, string> = {
  general_inquiry: "إدارة الاتصالات المؤسسية",
  business_inquiry: "الإدارة التجارية وتطوير الأعمال",
  international_trade: "قطاع التجارة الدولية والتصدير",
  product_inquiry: "إدارة تطوير المنتجات والمبيعات",
  construction_contracting: "إدارة الهندسة والأعمال المدنية والمقاولات",
  environmental_services: "إدارة الاستشارات البيئية والاستدامة",
  investment_inquiry: "إدارة علاقات المستثمرين والاستراتيجية",
  partnership_proposal: "لجنة التحالفات والشراكات الاستراتيجية",
  media_pr: "إدارة الإعلام والشؤون الخارجية",
  other: "المكتب التنفيذي للمجموعة",
};

export function ContactPage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const fullNameInputRef = useRef<HTMLInputElement>(null);

  // Form State
  const [inquiryType, setInquiryType] = useState<ContactInquiryType>("general_inquiry");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "whatsapp">("email");
  const [sector, setSector] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [expectedBudget, setExpectedBudget] = useState("");
  const [expectedTimeline, setExpectedTimeline] = useState("");
  const [attachments, setAttachments] = useState<Array<{ name: string; size: string }>>([]);

  // Submission State
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successInquiry, setSuccessInquiry] = useState<ContactInquiry | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f) => {
        const sizeMb = (f.size / (1024 * 1024)).toFixed(1);
        return { name: f.name, size: `${sizeMb} MB` };
      });
      setAttachments((prev) => [...prev, ...newFiles]);
    }
  };

  const removeAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const clearError = (field: string) => {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const requiredChecks = [
    fullName.trim().length > 0,
    country.trim().length > 0,
    email.trim().length > 0 && email.includes("@"),
    phone.trim().length > 0,
    subject.trim().length > 0,
    message.trim().length > 0,
  ];
  const completedRequiredCount = requiredChecks.filter(Boolean).length;
  const completionPercent = Math.round((completedRequiredCount / requiredChecks.length) * 100);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) errs.fullName = ar ? "الاسم مطلوب" : "Full Name is required";
    if (!country.trim()) errs.country = ar ? "الدولة مطلوبة" : "Country is required";
    if (!email.trim() || !email.includes("@")) errs.email = ar ? "بريد إلكتروني صحيح مطلوب" : "Valid email is required";
    if (!phone.trim()) errs.phone = ar ? "رقم الهاتف مطلوب" : "Phone number is required";
    if (!subject.trim()) errs.subject = ar ? "موضوع الاستفسار مطلوب" : "Subject is required";
    if (!message.trim()) errs.message = ar ? "تفاصيل الاستفسار مطلوبة" : "Inquiry details are required";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    submitCentralForm({
      formType: "general_contact",
      name: fullName,
      company: company || undefined,
      email,
      phone,
      country: `${country}${city ? ` · ${city}` : ""}`,
      sector: sector || undefined,
      serviceOrProduct: subject,
      message: `[Inquiry Type: ${inquiryType}]\n[Subject: ${subject}]\n[Job Title: ${jobTitle || "N/A"}]\n[Budget: ${expectedBudget || "N/A"}]\n[Timeline: ${expectedTimeline || "N/A"}]\n[Contact Preference: ${preferredContact}]\n\n${message}`,
      metadata: {
        inquiryType,
        subject,
        expectedBudget,
        expectedTimeline,
        attachments: attachments.map((a) => a.name),
      },
    }).catch(console.error);

    setTimeout(() => {
      const created = contactPortalSystem.submitInquiry({
        type: inquiryType,
        applicant: {
          fullName,
          company: company || undefined,
          jobTitle: jobTitle || undefined,
          country,
          city: city || undefined,
          email,
          phone,
          preferredContact,
        },
        details: {
          sector: sector || undefined,
          subject,
          message,
          expectedBudget: expectedBudget || undefined,
          expectedTimeline: expectedTimeline || undefined,
          attachments: attachments.length > 0 ? attachments : undefined,
        },
      });

      setSuccessInquiry(created);
      setIsSubmitting(false);

      // Reset form
      setFullName("");
      setCompany("");
      setJobTitle("");
      setCity("");
      setEmail("");
      setPhone("");
      setSector("");
      setSubject("");
      setMessage("");
      setExpectedBudget("");
      setExpectedTimeline("");
      setAttachments([]);
      setErrors({});
    }, 600);
  };

  const copyRefCode = () => {
    if (successInquiry) {
      navigator.clipboard.writeText(successInquiry.referenceCode);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="w-full pb-20">
      {/* Hero Header */}
      <section className="site-container pt-10 pb-4">
        <div className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-white/40 bg-background/70 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5 text-start">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مركز الاتصال المؤسسي" : "Corporate Contact Center"}</span>
            </div>

            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight text-start transition-colors duration-300 group-hover:text-brand-green-text">
              {ar ? "تواصل معنا" : "Contact Our Group"}
            </h1>

            <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans text-start">
              <p className="font-medium text-foreground">
                {ar
                  ? "نؤمن بأن التواصل الفعّال هو بداية كل علاقة ناجحة."
                  : "Effective communication is the foundation of every successful business relationship."}
              </p>
              <p>
                {ar
                  ? "سواء كنت ترغب في الاستفسار عن أنشطتنا وقطاعات أعمالنا، أو تبحث عن مورد موثوق، أو ترغب في مناقشة تعاون تجاري أو استثماري، يسعدنا استقبال تواصلك والتعرف على احتياجاتك."
                  : "Whether you are interested in our business sectors, seeking a reliable supplier, exploring a commercial opportunity, or discussing a potential partnership, we welcome your inquiry."}
              </p>
              <p className="text-sm sm:text-base text-brand-orange font-semibold">
                {ar
                  ? "يعمل فريقنا على توجيه كل استفسار إلى الإدارة أو القطاع المختص لضمان سرعة الاستجابة وفعالية التواصل."
                  : "Our team ensures that each request is directed to the appropriate department for a professional response."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Official Contact Info + Contact Form */}
      <section className="site-container mt-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Official Contact Directory & Visual Map (lg:col-span-5) */}
          <ContactDirectorySidebar ar={ar} />

          {/* Right Column: Full Inquiry Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="group/form rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl transition-all duration-300 hover:border-brand-green/35 hover:shadow-[0_24px_60px_rgba(22,135,108,0.12)] focus-within:border-brand-green/50 focus-within:ring-2 focus-within:ring-brand-green/15">
              <div className="border-b border-border/60 pb-5 mb-6">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                  <button
                    type="button"
                    onClick={() => fullNameInputRef.current?.focus()}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-sm transition-all duration-200 hover:border-brand-orange/50 hover:bg-secondary cursor-pointer active:scale-95"
                  >
                    <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span>{ar ? "نموذج المراسلة المعتمد" : "Official Inquiry Form"}</span>
                  </button>

                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold transition-all duration-300 border",
                      completionPercent === 100
                        ? "border-brand-green/40 bg-brand-green/15 text-brand-green"
                        : "border-border bg-secondary/60 text-muted-foreground"
                    )}
                  >
                    {completionPercent === 100 && <CheckCircle2 className="size-3.5" />}
                    <span>
                      {completionPercent === 100
                        ? ar
                          ? "جاهز للإرسال (100%)"
                          : "Ready to Submit (100%)"
                        : ar
                        ? `الاكتمال: ${completedRequiredCount} / ${requiredChecks.length} (${completionPercent}%)`
                        : `Completion: ${completedRequiredCount} / ${requiredChecks.length} (${completionPercent}%)`}
                    </span>
                  </span>
                </div>

                <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar ? "أرسل استفسارك" : "Send Us an Inquiry"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar
                    ? "يرجى ملء البيانات بدقة لضمان تحويل رسالتك إلى الفريق المختص والرد خلال يوم عمل."
                    : "Please provide accurate information to route your request and ensure a response within one business day."}
                </p>

                {/* Live Completion Progress Bar */}
                <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary/80">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-orange transition-all duration-500 ease-out"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field 1: Interactive Inquiry Type Pills + Live Routing */}
                <div className="space-y-3">
                  <label className="block text-xs sm:text-sm font-bold text-foreground">
                    {ar ? "نوع الاستفسار *" : "Inquiry Type *"}
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {(Object.keys(INQUIRY_TYPES_MAP) as ContactInquiryType[]).map((type) => {
                      const active = inquiryType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setInquiryType(type)}
                          aria-pressed={active}
                          className={cn(
                            "rounded-xl px-3 py-2 text-xs font-bold transition-all duration-200 border cursor-pointer active:scale-95",
                            active
                              ? "border-brand-green bg-brand-green text-white shadow-md shadow-brand-green/20"
                              : "border-border bg-secondary/50 text-foreground/85 hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:text-foreground"
                          )}
                        >
                          {ar ? INQUIRY_TYPES_MAP[type].ar : INQUIRY_TYPES_MAP[type].en}
                        </button>
                      );
                    })}
                  </div>

                  {/* Automatic Routing Preview */}
                  <div className="flex items-center justify-between gap-3 rounded-2xl border border-brand-green/25 bg-brand-green/5 px-4 py-2.5 text-xs transition-all duration-300">
                    <span className="text-muted-foreground font-medium">
                      {ar ? "الإدارة المستلمة تلقائيًا:" : "Auto-Routed Department:"}
                    </span>
                    <span className="font-bold text-brand-green">
                      {ar ? DEPT_AR_MAP[inquiryType] : INQUIRY_TYPES_MAP[inquiryType].dept}
                    </span>
                  </div>
                </div>

                {/* Field 2: Personal Information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "الاسم بالكامل *" : "Full Name *"}</span>
                      {fullName.trim().length > 0 && <CheckCircle2 className="size-3.5 text-brand-green" />}
                    </label>
                    <input
                      ref={fullNameInputRef}
                      type="text"
                      value={fullName}
                      onChange={(e) => {
                        setFullName(e.target.value);
                        clearError("fullName");
                      }}
                      placeholder={ar ? "الاسم ثلاثي أو رباعي" : "e.g. John Doe"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors['fullName'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['fullName'] && <p className="text-[11px] text-red-500 mt-1">{errors['fullName']}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "الشركة أو المؤسسة" : "Company / Organization"}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={ar ? "اسم الشركة (إن وجد)" : "Company name"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "المسمى الوظيفي" : "Job Title"}
                    </label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder={ar ? "مثال: مدير المشتريات" : "e.g. Procurement Lead"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "الدولة *" : "Country *"}</span>
                      {country.trim().length > 0 && <CheckCircle2 className="size-3.5 text-brand-green" />}
                    </label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => {
                        setCountry(e.target.value);
                        clearError("country");
                      }}
                      placeholder={ar ? "مثال: مصر، السعودية، ألمانيا" : "e.g. Egypt, UAE, Germany"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors['country'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['country'] && <p className="text-[11px] text-red-500 mt-1">{errors['country']}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "المدينة" : "City"}
                    </label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={ar ? "المدينة" : "City name"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all hover:border-foreground/30 focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "البريد الإلكتروني *" : "Email Address *"}</span>
                      {email.trim().length > 0 && email.includes("@") && <CheckCircle2 className="size-3.5 text-brand-green" />}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        clearError("email");
                      }}
                      placeholder="name@domain.com"
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green font-mono",
                        errors['email'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['email'] && <p className="text-[11px] text-red-500 mt-1">{errors['email']}</p>}
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "رقم الهاتف *" : "Phone Number *"}</span>
                      {phone.trim().length > 0 && <CheckCircle2 className="size-3.5 text-brand-green" />}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        clearError("phone");
                      }}
                      placeholder="+20 100 000 0000"
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green font-mono",
                        errors['phone'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['phone'] && <p className="text-[11px] text-red-500 mt-1">{errors['phone']}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "وسيلة التواصل المفضلة" : "Preferred Contact Method"}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {([
                        { id: "email", ar: "إيميل", en: "Email", Icon: Mail },
                        { id: "phone", ar: "هاتف", en: "Phone", Icon: Phone },
                        { id: "whatsapp", ar: "واتساب", en: "WhatsApp", Icon: MessageCircle },
                      ] as const).map(({ id, ar: labelAr, en: labelEn, Icon }) => {
                        const active = preferredContact === id;
                        return (
                          <button
                            key={id}
                            type="button"
                            onClick={() => setPreferredContact(id)}
                            aria-pressed={active}
                            className={cn(
                              "flex items-center justify-center gap-1.5 rounded-xl border px-2 py-2.5 text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95",
                              active
                                ? "border-brand-green bg-brand-green text-white shadow-sm"
                                : "border-border bg-background text-foreground/80 hover:border-brand-orange/40 hover:bg-brand-orange/5"
                            )}
                          >
                            <Icon className="size-3.5 shrink-0" />
                            <span>{ar ? labelAr : labelEn}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Field 3: Business Details */}
                <div className="space-y-4 pt-2 border-t border-border/60">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "القطاع المعني" : "Business Sector"}
                      </label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                      >
                        <option value="">{ar ? "-- اختر القطاع --" : "-- Select Sector --"}</option>
                        <option value="construction">{ar ? "المقاولات والتطوير العقاري" : "Contracting & Real Estate"}</option>
                        <option value="environmental">{ar ? "الحلول البيئية والاستدامة" : "Environmental Solutions"}</option>
                        <option value="garment">{ar ? "صناعة النسيج والملابس الجاهزة" : "Garment Manufacturing"}</option>
                        <option value="food">{ar ? "المنتجات الطبيعية والغذائية" : "Natural Products"}</option>
                        <option value="group">{ar ? "إدارة المجموعة العامة" : "Group Executive Office"}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground mb-1.5">
                        {ar ? "الإطار الزمني المتوقع" : "Expected Timeline"}
                      </label>
                      <input
                        type="text"
                        value={expectedTimeline}
                        onChange={(e) => setExpectedTimeline(e.target.value)}
                        placeholder={ar ? "مثال: فوري، الربع الأول 2027" : "e.g. Immediate, Q1 2027"}
                        className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "موضوع الاستفسار *" : "Subject *"}</span>
                      {subject.trim().length > 0 && <CheckCircle2 className="size-3.5 text-brand-green" />}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => {
                        setSubject(e.target.value);
                        clearError("subject");
                      }}
                      placeholder={ar ? "عنوان موجز ومحدد للاستفسار" : "Brief specific summary of inquiry"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors['subject'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['subject'] && <p className="text-[11px] text-red-500 mt-1">{errors['subject']}</p>}
                  </div>

                  <div>
                    <label className="flex items-center justify-between text-xs font-bold text-foreground mb-1.5">
                      <span>{ar ? "تفاصيل الاستفسار *" : "Inquiry Details *"}</span>
                      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground font-mono">
                        <span>{ar ? `${message.length} حرف` : `${message.length} chars`}</span>
                        {message.trim().length > 0 && <CheckCircle2 className="size-3.5 text-brand-green" />}
                      </span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        clearError("message");
                      }}
                      placeholder={ar ? "اشرح استفسارك، الكميات المطلوبة، أو مجالات التعاون المقترحة..." : "Describe your inquiry, volumes, technical specifications or proposed collaboration..."}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-3 text-xs sm:text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed",
                        errors['message'] ? "border-red-500" : "border-border hover:border-foreground/30"
                      )}
                    />
                    {errors['message'] && <p className="text-[11px] text-red-500 mt-1">{errors['message']}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "الميزانية المتوقعة (اختياري)" : "Expected Budget (Optional)"}
                    </label>
                    <input
                      type="text"
                      value={expectedBudget}
                      onChange={(e) => setExpectedBudget(e.target.value)}
                      placeholder={ar ? "مثال: 50,000 دولار أو 2,000,000 جنيه" : "e.g. $50,000 USD"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                {/* Field 4: Attachments */}
                <div className="pt-2 border-t border-border/60">
                  <label className="block text-xs font-bold text-foreground mb-1">
                    {ar ? "المرفقات والملفات الداعمة" : "Attachments & Supporting Documents"}
                  </label>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    {ar
                      ? "الصيغ المقبولة: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (بحد أقصى 15 ميجابايت للملف)"
                      : "Accepted formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG (Max 15MB per file)"}
                  </p>

                  <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-border hover:border-foreground/30 bg-secondary/30 hover:bg-secondary/50 cursor-pointer transition-all">
                    <Upload className="size-6 text-brand-green mb-2" />
                    <span className="text-xs font-bold text-foreground">
                      {ar ? "انقر لاختيار الملفات من جهازك" : "Click to select files"}
                    </span>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
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

                {/* Submit Button */}
                <div className="pt-4 border-t border-border/60">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-2xl !bg-brand-green !text-white hover:!bg-brand-orange py-3.5 font-head font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>{ar ? "جاري الإرسال والتسجيل..." : "Submitting Inquiry..."}</span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="size-4" />
                        <span>{ar ? "إرسال الاستفسار" : "Submit Inquiry"}</span>
                      </span>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={!!successInquiry} onOpenChange={(open) => !open && setSuccessInquiry(null)}>
        <DialogContent className="max-w-md rounded-3xl border border-brand-green/30 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <div className="mx-auto size-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-3">
              <CheckCircle2 className="size-8" />
            </div>
            <DialogTitle className="font-head text-xl font-bold text-center text-foreground">
              {ar ? "تم استلام استفسارك بنجاح" : "Inquiry Successfully Received"}
            </DialogTitle>
            <DialogDescription className="text-center text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              {ar ? (
                <>
                  شكرًا لتواصلك مع مجموعة سامي بن عياد.
                  <br />
                  تم استلام استفسارك بنجاح، وسيتم توجيهه إلى الإدارة المختصة لمراجعته والتواصل معك.
                </>
              ) : (
                <>
                  Thank you for contacting Sami Bin Ayyad Group.
                  <br />
                  Your request has been received and routed to the responsible department for prompt review.
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {successInquiry && (
            <div className="my-4 p-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                  {ar ? "رقم الاستفسار المرجعي" : "Inquiry Reference Number"}
                </span>
                <span className="font-mono text-base font-black text-brand-orange">
                  {successInquiry.referenceCode}
                </span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={copyRefCode}
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
              onClick={() => setSuccessInquiry(null)}
              className="w-full rounded-2xl bg-brand-green text-white hover:bg-brand-orange font-bold text-xs"
            >
              {ar ? "موافق وإغلاق" : "OK & Close"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
