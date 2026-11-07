import { ArrowRight, Building2, CheckCircle2, Copy, Download, ExternalLink, Factory, FileUp, Globe2, Handshake, Mail, MessageCircle, Send, ShieldCheck, Sparkles, TrendingUp, Truck, UploadCloud } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { PartnersSlider } from "@/components/group/partners-slider";
import { strategicPartners } from "@/components/group/group-data";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { submitCentralForm, buildOwnerWhatsAppFollowupUrl } from "@/lib/central-form-dispatch";

export function PartnersPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Partner Form State
  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    country: "",
    sector: "construction",
    website: "",
    email: "",
    phone: "",
    proposal: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState("");
  const [copiedRef, setCopiedRef] = useState(false);

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = await submitCentralForm({
      formType: "partnership_application",
      name: partnerForm.companyName,
      company: partnerForm.companyName,
      email: partnerForm.email,
      phone: partnerForm.phone,
      country: partnerForm.country,
      sector: partnerForm.sector,
      serviceOrProduct: partnerForm.sector,
      message: `[Strategic Partnership Proposal]\n\nCompany: ${partnerForm.companyName}\nCountry: ${partnerForm.country}\nTarget Sector: ${partnerForm.sector}\nWebsite: ${partnerForm.website || "N/A"}\n\nProposal:\n${partnerForm.proposal}`,
      metadata: {
        website: partnerForm.website,
        sector: partnerForm.sector,
      },
    });

    setSubmissionRef(submission.referenceCode);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const partnerCountryFlags: Record<string, string> = {
    China: "🇨🇳",
    Switzerland: "🇨🇭",
    "Regional / GCC": "🌐",
  };

  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <section className="site-container pt-16 pb-10 scroll-mt-24">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "التعاون التقني والتجاري" : "Technical and Commercial Cooperation"}</span>
          </div>
          <h1 className="section-title mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground">
            {ar ? "التعاون التقني والتجاري" : "Technical and Commercial Cooperation"}
          </h1>
          <p className="section-intro mt-4 max-w-3xl leading-relaxed text-muted-foreground sm:text-lg">
            {ar
              ? "نعمل على تطوير علاقات تعاون تدعم احتياجات عملائنا في التصنيع والتوريد والحلول البيئية والتقنية. ويُحدد نطاق كل علاقة بحسب الاتفاق القائم والمنتجات أو الخدمات المشمولة والأسواق المستهدفة."
              : "We develop relationships that support manufacturing, sourcing and environmental technology requirements. The scope of each relationship depends on the relevant agreement, participating entity, products and markets."}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button asChild size="default" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs sm:text-sm font-bold shadow-md cursor-pointer">
              <a href="/downloads/SBA_Corporate_Capabilities_EN.pdf" download="SBA_Corporate_Capabilities_EN.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="size-4 me-1.5" />
                <span>{ar ? "تحميل بيان القدرات المؤسسية" : "Download Capabilities Statement"}</span>
              </a>
            </Button>
            <Button asChild size="default" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs sm:text-sm font-bold shadow-md cursor-pointer">
              <a href="/downloads/SBA_Business_And_Partnership_Overview_EN.pdf" download="SBA_Business_And_Partnership_Overview_EN.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="size-4 me-1.5" />
                <span>{ar ? "مذكرة الشراكات والاستثمار" : "Partnership Overview"}</span>
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 2. Four Strategic International Partners */}
      <section className="site-container pb-14">
        <Reveal>
          <div className="mb-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-head text-foreground">
                {ar ? "التحالفات والشركاء الاستراتيجيون" : "Key Strategic Alliances"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                {ar ? "شراكات تقنية وصناعية معتمدة تدعم التوسع والابتكار" : "Verified technological & industrial alliances driving innovation and international scale"}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {strategicPartners.map((partner, idx) => (
            <Reveal key={partner.id} delay={idx * 0.06}>
              <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-8 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)] active:translate-y-0">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      <span>{partnerCountryFlags[partner.country] || "🌐"}</span>
                      <span>{ar ? partner.countryAr : partner.country}</span>
                    </span>
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      {ar ? partner.tagAr : partner.tag}
                    </span>
                  </div>

                  {/* Partner Official Verified Logo */}
                  <div className="my-4 flex h-24 w-full items-center justify-center rounded-2xl border border-border/60 bg-white p-4 shadow-xs transition duration-300 group-hover:border-brand-green/50 group-hover:shadow-md">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      loading="lazy"
                      className="max-h-14 max-w-full object-contain filter transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex items-center justify-center gap-2 text-center">
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors duration-200">
                      {ar ? partner.nameAr : partner.name}
                    </h3>
                    <ShieldCheck className="size-4 text-brand-green shrink-0" aria-label="Verified Partner" />
                  </div>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground/95 text-start">
                    {ar ? partner.descriptionAr : partner.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                    <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider font-body">
                      {ar ? "شريك استراتيجي معتمد" : "Verified Strategic Alliance"}
                    </span>
                  </div>

                  <a
                    href={partner.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-green transition-colors"
                    aria-label={`${ar ? partner.nameAr : partner.name} Official Website`}
                  >
                    <span>{ar ? "الموقع الرسمي" : "Official Website"}</span>
                    <ExternalLink className="size-3.5 rtl:rotate-180" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. Interactive Multi-Sector Partnerships Slider */}
      <section className="site-container py-12 scroll-mt-24 border-t border-border/60">
        <Reveal>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "شبكة الشركاء عبر القطاعات" : "Cross-Sector Partner Network"}</span>
          </div>
          <h2 className="section-title text-2xl sm:text-3xl">
            {ar ? "شراكات إنتاجية وتشغيلية واسعة النطاق" : "Broad-Scale Production & Operational Partnerships"}
          </h2>
          <p className="section-intro mt-3 max-w-3xl">
            {ar
              ? "نعمل جنبًا إلى جنب مع كبرى العلامات التجارية، والمطورين، والشركاء الصناعيين عبر قطاعات المقاولات وتصنيع الملابس والحلول البيئية والمنتجات الطبيعية."
              : "Working alongside premier brands, infrastructure developers, and industrial partners across construction, apparel, environment, and natural products."}
          </p>
        </Reveal>

        <div className="mt-8">
          <PartnersSlider ar={ar} />
        </div>
      </section>

      {/* 4. Become a Partner Multi-Step Interactive Form */}
      <section id="become-partner" className="site-container py-14 scroll-mt-24">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/40 bg-background/85 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.08)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "انضم لشبكة شركائنا" : "Become a Partner"}</span>
            </div>
            <h2 className="section-title text-2xl sm:text-3xl font-extrabold text-foreground">
              {ar ? "قدّم طلب شراكة استراتيجية أو تجارية" : "Apply to Become a Verified Partner"}
            </h2>
            <p className="section-intro mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {ar
                ? "نرحب بالشركات والمصنعين والموزعين والمؤسسات التقنية الراغبة في بناء تعاون استراتيجي مستدام يخدم التوسع الإقليمي والدولي للمجموعة."
                : "We welcome suppliers, technology providers, manufacturers, and distributors to explore co-development and strategic supply partnerships."}
            </p>

            {/* Structured Partner Categories Overview */}
            <div className="mt-8 grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {[
                { en: "Strategic Partners", ar: "شركاء استراتيجيون", icon: Handshake },
                { en: "Technology Partners", ar: "شركاء التكنولوجيا", icon: Sparkles },
                { en: "Manufacturing", ar: "شركاء التصنيع", icon: Factory },
                { en: "Supply Partners", ar: "شركاء التوريد", icon: Truck },
                { en: "Distribution", ar: "شركاء التوزيع", icon: Globe2 },
                { en: "Commercial Alliances", ar: "تحالفات تجارية", icon: Building2 },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className="rounded-2xl border border-white/20 bg-secondary/50 p-3 text-center backdrop-blur-md flex flex-col items-center justify-center gap-1.5 shadow-xs">
                    <Icon className="size-4 text-brand-green" />
                    <span className="text-[11px] font-bold text-foreground">{ar ? c.ar : c.en}</span>
                  </div>
                );
              })}
            </div>

            {/* Proposal Submission Form */}
            {isSubmitted ? (
              <div className="mt-10 rounded-3xl border border-brand-green/30 bg-brand-green/10 p-8 sm:p-10 text-center shadow-xl backdrop-blur-xl">
                <CheckCircle2 className="mx-auto size-12 text-brand-green animate-bounce" />
                <h3 className="mt-4 text-xl font-bold text-foreground">
                  {ar ? "تم استلام مقترح الشراكة بنجاح!" : "Partnership Proposal Received!"}
                </h3>
                {submissionRef && (
                  <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-background/80 px-4 py-1.5 border border-brand-green/30 text-xs font-mono font-bold text-foreground">
                    <span>{ar ? `رقم الطلب المرجعي: ${submissionRef}` : `Reference: ${submissionRef}`}</span>
                    <button
                      type="button"
                      onClick={() => {
                        navigator.clipboard.writeText(submissionRef);
                        setCopiedRef(true);
                        setTimeout(() => setCopiedRef(false), 2000);
                      }}
                      className="text-brand-orange hover:text-brand-orange/80"
                      title={ar ? "نسخ المرجع" : "Copy"}
                    >
                      <Copy className="size-3.5" />
                    </button>
                    {copiedRef && <span className="text-[10px] text-brand-green">{ar ? "تم النسخ" : "Copied"}</span>}
                  </div>
                )}
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
                  {ar
                    ? "شكرًا لاهتمامكم بالتعاون مع مجموعة سامي بن عياد. تم تسجيل ملفكم رسميًا وسيقوم فريق تطوير الأعمال والتحالفات الاستراتيجية بمراجعة المقترح والتواصل معكم خلال 48 ساعة عمل."
                    : "Thank you for exploring partnership with Sami Bin Ayyad Group. Your proposal has been logged with our Business Development Office and an alliance officer will contact you within 48 business hours."}
                </p>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={buildOwnerWhatsAppFollowupUrl(
                      submissionRef,
                      "partnership_application",
                      partnerForm.companyName,
                      partnerForm.country
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-orange shadow-md"
                  >
                    <MessageCircle className="size-4" />
                    <span>{ar ? "متابعة فورية عبر الواتساب" : "Direct WhatsApp Follow-up"}</span>
                  </a>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsSubmitted(false)}
                    className="rounded-full text-xs font-bold"
                  >
                    {ar ? "إرسال مقترح آخر" : "Submit Another Proposal"}
                  </Button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handlePartnerSubmit}
                className="mt-10 space-y-5 rounded-2xl border border-border/80 bg-background/60 p-6 sm:p-8 backdrop-blur-xl"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "اسم الشركة / الكيان المؤسسي *" : "Company / Entity Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.companyName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, companyName: e.target.value })}
                      placeholder={ar ? "مثال: شركة الحلول الصناعية" : "e.g. Industrial Solutions Corp."}
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "الدولة والمقر الرئيسي *" : "Country & Headquarters *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.country}
                      onChange={(e) => setPartnerForm({ ...partnerForm, country: e.target.value })}
                      placeholder={ar ? "مثال: مصر، السعودية، الصين، الإمارات..." : "e.g. Egypt, UAE, China, Germany..."}
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "قطاع الشراكة المستهدف *" : "Target Partnership Sector *"}
                    </label>
                    <select
                      required
                      value={partnerForm.sector}
                      onChange={(e) => setPartnerForm({ ...partnerForm, sector: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    >
                      <option value="construction">{ar ? "المقاولات والتطوير العقاري" : "Construction & Real Estate"}</option>
                      <option value="environmental">{ar ? "البيئة والاستدامة وإعادة التدوير" : "Environment & Sustainability"}</option>
                      <option value="garment">{ar ? "تصنيع الملابس وتطوير الأزياء" : "Garment Manufacturing & Apparel"}</option>
                      <option value="food">{ar ? "المنتجات الطبيعية والغذائية والتصدير" : "Natural & Agri-Food Products"}</option>
                      <option value="group-alliances">{ar ? "تحالف استراتيجي عام على مستوى المجموعة" : "Group-Wide Strategic Alliance"}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "الموقع الإلكتروني الرسمي للشركة" : "Official Website URL"}
                    </label>
                    <input
                      type="url"
                      value={partnerForm.website}
                      onChange={(e) => setPartnerForm({ ...partnerForm, website: e.target.value })}
                      placeholder="https://company.com"
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "البريد الإلكتروني المهني للتواصل *" : "Official Contact Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="partnerships@company.com"
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">
                      {ar ? "رقم الهاتف / واتساب مباشر *" : "Phone / Direct WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.phone}
                      onChange={(e) => setPartnerForm({ ...partnerForm, phone: e.target.value })}
                      placeholder="+20 ..."
                      className="w-full rounded-xl border border-border bg-background/90 px-3.5 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    {ar ? "ملخص مقترح الشراكة ونطاق التعاون *" : "Partnership Proposal & Scope of Cooperation *"}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={partnerForm.proposal}
                    onChange={(e) => setPartnerForm({ ...partnerForm, proposal: e.target.value })}
                    placeholder={ar ? "صف بإيجاز طبيعة التعاون المقترح، القيمة المضافة لقطاعات المجموعة، والأسواق المستهدفة..." : "Briefly outline the proposed collaboration, value added to our sectors, and target geographic markets..."}
                    className="w-full rounded-xl border border-border bg-background/90 p-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green shadow-inner"
                  />
                </div>

                {/* Secure Attachment upload note */}
                <div className="flex items-center gap-3 rounded-xl border border-dashed border-border/80 bg-secondary/30 p-3.5 text-xs text-muted-foreground">
                  <UploadCloud className="size-5 text-brand-orange shrink-0" />
                  <span>
                    {ar
                      ? "يمكنك إرفاق الملف التعريفي للشركة لاحقًا عبر البريد الرسمي أو مراسلة فريقنا على info@sami-trade.com"
                      : "Company profiles and NDA agreements can also be shared directly with our desk at info@sami-trade.com"}
                  </span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full sm:w-auto rounded-full bg-brand-green text-white hover:bg-brand-orange font-bold text-xs sm:text-sm px-8 py-3 shadow-md transition-all cursor-pointer"
                  >
                    <Send className="size-4 me-2" />
                    <span>{isSubmitting ? (ar ? "جاري الإرسال..." : "Submitting...") : (ar ? "إرسال مقترح الشراكة رسميًا" : "Submit Formal Proposal")}</span>
                  </Button>
                </div>
              </form>
            )}

            <div className="mt-6 flex items-center justify-center">
              <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <ShieldCheck className="size-3.5 text-brand-green" />
                {ar ? "تخضع جميع الطلبات لسياسة السرية المهنية" : "All submissions are bound by corporate NDA ethics"}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. Discuss a Partnership CTA Box */}
      <section className="site-container py-12">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl grid gap-8 lg:grid-cols-[1.3fr_1fr] items-center transition-all duration-500 hover:-translate-y-0.5 hover:border-white/80 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.1)]">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "ناقش فرصة تعاون" : "Discuss a Partnership"}</span>
            </div>
            <h2 className="section-title mt-2 text-foreground text-2xl sm:text-3xl font-bold">
              {ar ? "ناقش فرصة تعاون معنا" : "Discuss a Partnership"}
            </h2>
            <p className="section-intro mt-4 text-muted-foreground text-sm sm:text-base">
              {ar
                ? "إذا كانت شركتك تقدم منتجات أو تقنيات تتكامل مع قطاعاتنا، أرسل نبذة عن نشاطها ونطاق التعاون المقترح والأسواق المستهدفة."
                : "Tell us about your company, relevant products or services, target markets and proposed cooperation."}
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            <Button asChild size="lg" className="w-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 font-bold text-sm shadow-md cursor-pointer">
              <Link to="/contact/opportunities">
                <Handshake className="size-4 me-2" />
                <span>{ar ? "قدّم مقترح شراكة" : "Submit a partnership proposal"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>

            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#0066CC]/30 bg-[#0066CC]/5 p-4 text-start whitespace-normal hover:border-[#0066CC] hover:bg-[#0066CC]/15 hover:shadow-lg sm:p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
              <a href="mailto:info@sami-trade.com">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/15 text-[#0066CC]">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-head text-xs font-bold text-foreground/80">{ar ? "البريد الإلكتروني المباشر" : "Direct Official Email"}</span>
                  <span dir="ltr" className="mt-0.5 block break-all font-head text-sm sm:text-base font-bold text-foreground">info@sami-trade.com</span>
                </span>
                <span className="shrink-0 text-[#0066CC]"><ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" /></span>
              </a>
            </Button>

            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 text-start whitespace-normal hover:border-[#25D366] hover:bg-[#25D366]/15 hover:shadow-lg sm:p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle aria-hidden="true" className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-head text-xs font-bold text-foreground/80">WhatsApp Direct</span>
                  <span dir="ltr" className="mt-0.5 block font-head text-sm sm:text-base font-bold text-foreground">+20 12 222 380 72</span>
                </span>
                <span className="shrink-0 text-[#25D366]"><ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" /></span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
