import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Mail,
  Phone,
  Clock,
  MapPin,
  Globe,
  Share2,
  CheckCircle2,
  AlertCircle,
  Upload,
  FileText,
  X,
  Send,
  MessageCircle,
  Copy,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
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
import { WHATSAPP_URL } from "@/lib/process-steps";

export function ContactPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

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
      <section className="relative overflow-hidden py-16 sm:py-20 bg-gradient-to-b from-secondary/40 via-background to-background">
        <div className="site-container relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4 shadow-sm">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "مركز الاتصال المؤسسي" : "Corporate Contact Center"}</span>
          </div>

          <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {ar ? "تواصل معنا" : "Contact Our Group"}
          </h1>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
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
      </section>

      {/* Main Grid: Official Contact Info + Contact Form */}
      <section className="site-container mt-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Official Contact Directory & Visual Map (lg:col-span-5) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Corporate Identification Card */}
            <div className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 backdrop-blur-2xl shadow-xl space-y-6">
              <div className="border-b border-border/60 pb-5">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
                  {ar ? "الكيان المؤسسي الرسمي" : "Official Corporate Entity"}
                </span>
                <h2 className="font-head text-xl sm:text-2xl font-bold text-foreground mt-1">
                  {ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2 text-xs text-muted-foreground">
                  <span className="bg-secondary/80 px-2.5 py-1 rounded-full border border-border">
                    {ar ? "سجل تجاري: #209627" : "Company Reg: #209627"}
                  </span>
                  <span className="bg-secondary/80 px-2.5 py-1 rounded-full border border-border">
                    {ar ? "بطاقة ضريبية: #753702878" : "Tax Reg: #753702878"}
                  </span>
                </div>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                      {ar ? "المقر الرئيسي" : "Headquarters Address"}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-foreground/90 leading-relaxed mt-0.5">
                      {ar
                        ? "المكتب رقم 212، الطابق الثاني، المبنى رقم 7، مجمع العلوم والابتكار بالجامعة البريطانية في مصر، المربع رقم 36، الحي الخامس، مدينة الشروق، القاهرة، مصر 11837"
                        : "Office No. 212, 2nd Floor, Building No.7, The Science & Innovation Park at The British University in Egypt (BUE), Block No.36, Fifth District, El Sherouk City, Cairo, Egypt 11837"}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Phone className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                      {ar ? "أرقام الهاتف المباشرة" : "Telephone Lines"}
                    </h3>
                    <div className="mt-1 flex flex-col gap-1 text-sm font-bold font-mono">
                      <a href="tel:+201222238072" className="hover:text-brand-orange transition-colors">
                        +20 12 222 380 72
                      </a>
                      <a href="tel:+201222238073" className="hover:text-brand-orange transition-colors">
                        +20 12 222 380 73
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                    <MessageCircle className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                      {ar ? "واتساب التجاري للأعمال" : "Business WhatsApp"}
                    </h3>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-1 text-xs sm:text-sm font-bold text-emerald-600 hover:text-emerald-700"
                    >
                      <span dir="ltr">+20 12 222 380 72</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Mail className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                      {ar ? "البريد الإلكتروني المعتمد" : "Official Email"}
                    </h3>
                    <a
                      href="mailto:info@sami-trade.com"
                      className="mt-1 block text-sm font-bold hover:text-brand-orange transition-colors font-mono"
                    >
                      info@sami-trade.com
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center shrink-0">
                    <Clock className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-head text-xs font-bold uppercase text-brand-orange">
                      {ar ? "ساعات العمل الرسمية" : "Official Business Hours"}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-foreground/90 mt-0.5">
                      {ar
                        ? "الأحد – الخميس: 9:00 صباحاً – 5:00 مساءً (توقيت القاهرة)"
                        : "Sunday – Thursday: 9:00 AM – 5:00 PM (Cairo Time)"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-border/60">
                <span className="text-xs font-bold text-muted-foreground block mb-3">
                  {ar ? "قنوات التواصل الاجتماعي الرسمية:" : "Official Social Channels:"}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
                  >
                    <Facebook className="size-4" />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
                  >
                    <Instagram className="size-4" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="size-10 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all shadow-sm"
                  >
                    <Linkedin className="size-4" />
                  </a>
                </div>
              </div>

              {/* Google Maps Visual Interactive Locator */}
              <div className="pt-2">
                <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-border shadow-inner bg-secondary/80">
                  <iframe
                    title={ar ? "موقع مجموعة سامي بن عياد" : "Sami Bin Ayyad Group Location"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.6918816654273!2d31.60338787555627!3d30.103023474895692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817c76899144d%3A0xe54d6faebdf98687!2sThe%20British%20University%20in%20Egypt%20(BUE)!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                    className="size-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div className="absolute bottom-2 start-2 bg-background/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-foreground border border-border shadow-sm flex items-center gap-1.5">
                    <MapPin className="size-3 text-brand-orange" />
                    <span>BUE Science & Innovation Park</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links to Other Contact Channels */}
            <div className="rounded-3xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-md space-y-3">
              <h3 className="font-head text-sm font-bold text-foreground">
                {ar ? "قنوات اتصال متخصصة أخرى:" : "Specialized Portals:"}
              </h3>
              <div className="grid gap-2">
                <Link
                  to="/contact/complaints"
                  className="flex items-center justify-between p-3 rounded-2xl border border-border bg-secondary/40 hover:bg-brand-orange/10 hover:border-brand-orange/40 transition-all text-xs font-bold"
                >
                  <span className="flex items-center gap-2 text-foreground">
                    <AlertCircle className="size-4 text-brand-orange" />
                    {ar ? "بوابة الشكاوى والمقترحات" : "Complaints & Suggestions Portal"}
                  </span>
                  <span className="text-brand-orange">{ar ? "فتح البوابة ←" : "Open →"}</span>
                </Link>
                <Link
                  to="/contact/opportunities"
                  className="flex items-center justify-between p-3 rounded-2xl border border-border bg-secondary/40 hover:bg-brand-green/10 hover:border-brand-green/40 transition-all text-xs font-bold"
                >
                  <span className="flex items-center gap-2 text-foreground">
                    <Building2 className="size-4 text-brand-green" />
                    {ar ? "اعرض فرصتك الاستثمارية" : "Submit Your Opportunity"}
                  </span>
                  <span className="text-brand-green">{ar ? "تقديم الفرصة ←" : "Submit →"}</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Full Inquiry Form (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
              <div className="border-b border-border/60 pb-5 mb-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange mb-2">
                  <Send className="size-3" />
                  <span>{ar ? "نموذج المراسلة المعتمد" : "Official Inquiry Form"}</span>
                </div>
                <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar ? "أرسل استفسارك" : "Send Us an Inquiry"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar
                    ? "يرجى ملء البيانات بدقة لضمان تحويل رسالتك إلى الفريق المختص والرد خلال يوم عمل."
                    : "Please provide accurate information to route your request and ensure a response within one business day."}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Field 1: Inquiry Type */}
                <div>
                  <label className="block text-xs sm:text-sm font-bold text-foreground mb-2">
                    {ar ? "نوع الاستفسار *" : "Inquiry Type *"}
                  </label>
                  <select
                    value={inquiryType}
                    onChange={(e) => setInquiryType(e.target.value as ContactInquiryType)}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                  >
                    {(Object.keys(INQUIRY_TYPES_MAP) as ContactInquiryType[]).map((type) => (
                      <option key={type} value={type}>
                        {ar ? INQUIRY_TYPES_MAP[type].ar : INQUIRY_TYPES_MAP[type].en}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Field 2: Personal Information */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "الاسم بالكامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={ar ? "الاسم ثلاثي أو رباعي" : "e.g. John Doe"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors.fullName ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
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
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
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
                      placeholder={ar ? "مثال: مصر، السعودية، ألمانيا" : "e.g. Egypt, UAE, Germany"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors.country ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.country && <p className="text-[11px] text-red-500 mt-1">{errors.country}</p>}
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
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
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
                      {ar ? "رقم الهاتف *" : "Phone Number *"}
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

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "وسيلة التواصل المفضلة" : "Preferred Contact Method"}
                    </label>
                    <select
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value as any)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      <option value="email">{ar ? "البريد الإلكتروني" : "Email"}</option>
                      <option value="phone">{ar ? "الاتصال الهاتفي" : "Phone Call"}</option>
                      <option value="whatsapp">{ar ? "واتساب (WhatsApp)" : "WhatsApp"}</option>
                    </select>
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
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "موضوع الاستفسار *" : "Subject *"}
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder={ar ? "عنوان موجز ومحدد للاستفسار" : "Brief specific summary of inquiry"}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green",
                        errors.subject ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "تفاصيل الاستفسار *" : "Inquiry Details *"}
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={ar ? "اشرح استفسارك، الكميات المطلوبة، أو مجالات التعاون المقترحة..." : "Describe your inquiry, volumes, technical specifications or proposed collaboration..."}
                      className={cn(
                        "w-full rounded-2xl border bg-background px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed",
                        errors.message ? "border-red-500" : "border-border"
                      )}
                    />
                    {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
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

                  <label className="flex flex-col items-center justify-center p-6 rounded-2xl border-2 border-dashed border-border hover:border-brand-green/60 bg-secondary/30 hover:bg-secondary/50 cursor-pointer transition-all">
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
                  شكراً لتواصلك مع مجموعة سامي بن عياد.
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
