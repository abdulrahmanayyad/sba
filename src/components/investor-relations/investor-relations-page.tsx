import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Copy,
  Download,
  FileCheck,
  FileText,
  Globe2,
  Handshake,
  Layers,
  Leaf,
  Lock,
  Mail,
  MessageCircle,
  Phone,
  PieChart,
  Send,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  Sparkles,
  TrendingUp,
  Utensils,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { submitCentralForm, buildOwnerWhatsAppFollowupUrl } from "@/lib/central-form-dispatch";
import {
  investmentOverviewData,
  investmentModels,
  investmentOpportunities,
  investorDocuments,
  type InvestmentOpportunity,
  type InvestorDocument,
} from "./investor-relations-data";

export function InvestorRelationsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [selectedOpportunity, setSelectedOpportunity] = useState<string>("");
  const [inquiryForm, setInquiryForm] = useState({
    investorName: "",
    organization: "",
    country: "",
    email: "",
    phone: "",
    preferredSector: "all",
    investmentType: "jv",
    timeframe: "3-6-months",
    notes: "",
    ndaAgreed: true,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionRef, setSubmissionRef] = useState<string>("");
  const [copiedRef, setCopiedRef] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDownloadDoc = (doc: InvestorDocument) => {
    const docMap: Record<string, string> = {
      "doc-corporate-profile": ar ? "/downloads/SBA_Complete_Corporate_Profile_AR.pdf" : "/downloads/SBA_Complete_Corporate_Profile_EN.pdf",
      "doc-investment-presentation": "/downloads/SBA_Business_And_Partnership_Overview_EN.pdf",
      "doc-sector-dossier-environmental": ar ? "/downloads/SBA_Environmental_Solutions_AR.pdf" : "/downloads/SBA_Environmental_Solutions_EN.pdf",
      "doc-sector-dossier-apparel": ar ? "/downloads/SBA_Apparel_Manufacturing_Profile_AR.pdf" : "/downloads/SBA_Apparel_Manufacturing_Profile_EN.pdf",
    };
    const targetUrl = docMap[doc.id] || "/downloads/SBA_Complete_Corporate_Profile_EN.pdf";
    const a = document.createElement("a");
    a.href = targetUrl;
    a.download = doc.fileName;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submission = await submitCentralForm({
      formType: "investor_interest",
      name: inquiryForm.investorName,
      company: inquiryForm.organization,
      email: inquiryForm.email,
      phone: inquiryForm.phone,
      country: inquiryForm.country,
      sector: inquiryForm.preferredSector,
      serviceOrProduct: selectedOpportunity || inquiryForm.investmentType,
      message: `[Investor Dialogue Request]\n\nTarget Opportunity: ${selectedOpportunity || "General Strategic Co-Investment"}\nStructure: ${inquiryForm.investmentType}\nTarget Sector: ${inquiryForm.preferredSector}\nTimeframe: ${inquiryForm.timeframe}\nNDA Agreed: ${inquiryForm.ndaAgreed ? "Yes" : "No"}\n\nNotes:\n${inquiryForm.notes}`,
      metadata: {
        opportunity: selectedOpportunity,
        investmentType: inquiryForm.investmentType,
        timeframe: inquiryForm.timeframe,
        ndaAgreed: inquiryForm.ndaAgreed,
      },
    });

    setSubmissionRef(submission.referenceCode);
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const getWhatsappMeetingUrl = () => {
    const text = ar
      ? `مرحبًا إدارة الاستثمار بمجموعة سامي بن عياد، أود ترتيب اجتماع استثماري وبحث فرص الشراكة المؤسسية معكم.`
      : `Hello Investor Relations at Sami Bin Ayyad Group, I represent an institutional investor/fund and would like to schedule a strategic discussion regarding partnership opportunities.`;
    return `${WHATSAPP_URL}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-secondary/15 to-background pt-20 pb-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.09),rgba(255,255,255,0))]" />
        <div className="site-container">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? investmentOverviewData.hero.badgeAr : investmentOverviewData.hero.badgeEn}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground font-head max-w-4xl leading-tight">
              {ar ? investmentOverviewData.hero.titleAr : investmentOverviewData.hero.titleEn}
            </h1>
            <p className="mt-5 max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted-foreground">
              {ar ? investmentOverviewData.hero.subtitleAr : investmentOverviewData.hero.subtitleEn}
            </p>

            {/* Hero Quick Navigation CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="primary" size="lg" className="rounded-full shadow-lg">
                <a href="#investment-opportunities">
                  <span>{ar ? "استعراض الفرص الاستثمارية" : "Explore Opportunities"}</span>
                  <ArrowRight className="size-4 rtl:rotate-180" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href="#investor-inquiry">
                  <span>{ar ? "طلب اجتماع استثماري رسمي" : "Request Institutional Meeting"}</span>
                  <Handshake className="size-4" />
                </a>
              </Button>

              <Button asChild variant="ghost" size="lg" className="rounded-full text-brand-green">
                <a href="#investor-documents">
                  <span>{ar ? "تحميل ملفات المستثمرين" : "Investor Data Room"}</span>
                  <Download className="size-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. INVESTMENT PILLARS */}
      <section className="site-container py-12 border-t border-border/60">
        <Reveal>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "أسس الشراكة الرأسمالية" : "Strategic Foundation"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-head text-foreground mt-1">
              {ar ? "لماذا الشراكة مع مجموعة سامي بن عياد؟" : "Why Institutional Capital Partners With SBA"}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {investmentOverviewData.pillars.map((pillar, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="size-8 rounded-2xl bg-brand-green/10 flex items-center justify-center text-brand-green font-bold text-xs">
                      0{idx + 1}
                    </span>
                    <ShieldCheck className="size-4 text-brand-orange" />
                  </div>
                  <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                    {ar ? pillar.titleAr : pillar.titleEn}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ar ? pillar.descAr : pillar.descEn}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 3. VERIFIED OPERATING ASSETS OVERVIEW */}
      <section className="site-container py-12">
        <div className="rounded-3xl border border-border bg-secondary/30 p-8 sm:p-10 backdrop-blur-md">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  {ar ? "النموذج المؤسسي الموحد" : "Consolidated Portfolio"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold font-head text-foreground mt-2">
                  {ar ? "أربعة قطاعات إنتاجية تدعم النمو المتوازن" : "Four Operating Divisions Anchoring Growth"}
                </h3>
                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {ar
                    ? "توزع المجموعة استثماراتها التشغيلية عبر قطاعات المقاولات والبنية التحتية، تصنيع الملابس، الحلول البيئية، والصناعات الغذائية، مما يوفر تنوعًا متوازنًا في التدفقات النقدية وقدرة عالية على التحوط."
                    : "SBA balances capital exposure across Construction Infrastructure, Ready-Made Garments, Environmental Technologies, and Natural Agri-Food, delivering resilient operational cash flows and inflation protection."}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 shrink-0">
                <div className="text-center p-4 rounded-2xl bg-background/80 border border-border">
                  <div className="text-2xl sm:text-3xl font-black text-brand-orange">+45 {ar ? "عامًا" : "Yrs"}</div>
                  <div className="text-[11px] font-bold text-muted-foreground mt-1">{ar ? "تاريخ وخبرة متراكمة" : "Operating Heritage"}</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-background/80 border border-border">
                  <div className="text-2xl sm:text-3xl font-black text-brand-green">+100</div>
                  <div className="text-[11px] font-bold text-muted-foreground mt-1">{ar ? "مشروعًا منجزًا" : "Completed Projects"}</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-background/80 border border-border">
                  <div className="text-2xl sm:text-3xl font-black text-brand-orange">4</div>
                  <div className="text-[11px] font-bold text-muted-foreground mt-1">{ar ? "تحالفات دولية معتمدة" : "Global Strategic Alliances"}</div>
                </div>
                <div className="text-center p-4 rounded-2xl bg-background/80 border border-border">
                  <div className="text-2xl sm:text-3xl font-black text-brand-green">+2,700</div>
                  <div className="text-[11px] font-bold text-muted-foreground mt-1">{ar ? "موديل وتصميم صناعي" : "Apparel Models"}</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. INVESTMENT OPPORTUNITIES BY SECTOR */}
      <section className="site-container py-12 scroll-mt-20" id="investment-opportunities">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                {ar ? "فرص التوسع والاستثمار" : "Target Pipeline"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-head text-foreground mt-1">
                {ar ? "الفرص الاستثمارية الحالية بحسب القطاع" : "Current Strategic Expansion Opportunities"}
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md">
              {ar
                ? "فرص نمو حقيقية جاهزة للشراكة مع المجموعات الصناعية والصناديق المؤهلة."
                : "Real growth projects structured for qualified institutional funds and industrial co-investors."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {investmentOpportunities.map((opp, idx) => (
            <Reveal key={opp.id} delay={idx * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-8 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      {opp.sector === "environmental" && <Leaf className="size-3" />}
                      {opp.sector === "garment" && <Shirt className="size-3" />}
                      {opp.sector === "food" && <Utensils className="size-3" />}
                      {opp.sector === "construction" && <Building2 className="size-3" />}
                      <span>{ar ? opp.sectorNameAr : opp.sectorNameEn}</span>
                    </span>
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      {ar ? opp.statusAr : opp.statusEn}
                    </span>
                  </div>

                  <h3 className="font-head text-lg sm:text-xl font-bold text-foreground">
                    {ar ? opp.titleAr : opp.titleEn}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ar ? opp.scopeAr : opp.scopeEn}
                  </p>

                  {/* Details Grid */}
                  <div className="mt-5 space-y-2.5 pt-4 border-t border-border/60 text-xs">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-muted-foreground font-semibold">{ar ? "هيكل الشراكة:" : "Structure:"}</span>
                      <span className="font-medium text-foreground text-end">{ar ? opp.modelAr : opp.modelEn}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-muted-foreground font-semibold">{ar ? "نوع الشريك المستهدف:" : "Partner Profile:"}</span>
                      <span className="font-medium text-foreground text-end">{ar ? opp.partnershipTypeAr : opp.partnershipTypeEn}</span>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-muted-foreground font-semibold">{ar ? "دوافع السوق:" : "Market Drivers:"}</span>
                      <span className="font-medium text-foreground text-end">{ar ? opp.marketDriversAr : opp.marketDriversEn}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider font-mono">
                    {ar ? "بيانات مفصلة تحت اتفاقية السرية" : "Detailed Data Under NDA"}
                  </span>
                  <Button
                    onClick={() => {
                      setSelectedOpportunity(ar ? opp.titleAr : opp.titleEn);
                      const el = document.getElementById("investor-inquiry");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    variant="outline"
                    size="sm"
                    className="rounded-full text-xs font-bold hover:border-brand-green hover:bg-brand-green/5"
                  >
                    <span>{ar ? "إبداء الاهتمام" : "Express Interest"}</span>
                    <ArrowRight className="size-3 rtl:rotate-180" />
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 5. INVESTMENT MODELS */}
      <section className="site-container py-12 border-t border-border/60">
        <Reveal>
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
              {ar ? "نماذج وأطر الشراكة" : "Transaction Frameworks"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-head text-foreground mt-1">
              {ar ? "هياكل التعاون والاستثمار المؤسسي" : "Institutional Investment Models"}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-muted-foreground">
              {ar
                ? "خيارات مرنة متوافقة مع المتطلبات التنظيمية والمعايير المحاسبية الدولية."
                : "Flexible structures tailored to institutional investor mandates and international regulatory standards."}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {investmentModels.map((model, idx) => (
            <Reveal key={model.id} delay={idx * 0.08}>
              <div className="glass-card flex h-full flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 shadow-md backdrop-blur-xl">
                <div>
                  <div className="size-10 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
                    <PieChart className="size-5" />
                  </div>
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? model.titleAr : model.titleEn}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {ar ? model.descAr : model.descEn}
                  </p>

                  <div className="mt-4 p-3 rounded-2xl bg-secondary/50 border border-border text-xs">
                    <span className="font-bold text-foreground block mb-1">
                      {ar ? "طبيعة الهيكل:" : "Legal Structure:"}
                    </span>
                    <p className="text-muted-foreground">{ar ? model.structureAr : model.structureEn}</p>
                  </div>

                  <div className="mt-4 space-y-1.5">
                    <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      {ar ? "أهم المميزات:" : "Key Features:"}
                    </span>
                    {(ar ? model.highlightsAr : model.highlightsEn).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-foreground">
                        <CheckCircle2 className="size-3.5 text-brand-green shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. INVESTOR DOCUMENTS & DATA ROOM */}
      <section className="site-container py-12 scroll-mt-20" id="investor-documents">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                {ar ? "غرفة البيانات والملفات" : "Investor Data Room"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold font-head text-foreground mt-1">
                {ar ? "الملفات والوثائق المؤسسية المتاحة للتحميل" : "Corporate & Sector Dossiers"}
              </h2>
            </div>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <Lock className="size-3.5 text-brand-green" />
              <span>{ar ? "وثائق رسمية محدثة لعام 2026" : "Official 2026 Institutional Releases"}</span>
            </span>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {investorDocuments.map((doc) => (
            <div
              key={doc.id}
              className="glass-card flex flex-col justify-between rounded-3xl border border-white/20 bg-background/85 p-6 shadow-md backdrop-blur-xl transition-all duration-200 hover:border-brand-green/60"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                    {ar ? doc.categoryAr : doc.categoryEn}
                  </span>
                  <span className="text-xs font-mono font-bold text-muted-foreground">
                    {doc.fileSize}
                  </span>
                </div>
                <h4 className="font-head text-base font-bold text-foreground">
                  {ar ? doc.titleAr : doc.titleEn}
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {ar ? doc.descAr : doc.descEn}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground">{doc.fileName}</span>
                <Button
                  onClick={() => handleDownloadDoc(doc)}
                  variant="outline"
                  size="sm"
                  className="rounded-full text-xs font-bold gap-1.5 hover:border-brand-green hover:bg-brand-green/5"
                >
                  <Download className="size-3.5" />
                  <span>{ar ? "تحميل الملف" : "Download File"}</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. INVESTOR INQUIRY & MEETING REQUEST FORM */}
      <section className="site-container py-14 scroll-mt-20" id="investor-inquiry">
        <div className="rounded-3xl border border-white/30 bg-background/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
          <Reveal>
            <div className="max-w-3xl mx-auto text-center mb-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-3">
                <Handshake className="size-4 text-brand-orange" />
                <span>{ar ? "طلب اجتماع واستفسار استثماري" : "Confidential Institutional Inquiry"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-head text-foreground">
                {ar ? "ابدأ الحوار الاستثماري مع إدارة المجموعة" : "Initiate Strategic Investment Dialogue"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "نرحب بمديري الصناديق والمكاتب العائلية والشركاء الصناعيين الراغبين في بحث التعاون المشترك وترتيب اجتماعات ثنائية سرية."
                  : "We welcome direct inquiries from sovereign funds, family offices, private equity executives, and industrial operators to discuss tailored co-investment."}
              </p>
            </div>
          </Reveal>

          {isSubmitted ? (
            <div className="max-w-xl mx-auto rounded-3xl bg-brand-green/10 border border-brand-green/30 p-10 text-center shadow-xl backdrop-blur-xl">
              <CheckCircle2 className="mx-auto size-14 text-brand-green animate-bounce" />
              <h3 className="mt-4 text-xl font-bold text-foreground">
                {ar ? "تم استلام استفساركم الاستثماري بنجاح" : "Institutional Inquiry Received"}
              </h3>
              {submissionRef && (
                <div className="mt-3 inline-flex items-center gap-2 rounded-xl bg-background/80 px-4 py-1.5 border border-brand-green/30 text-xs font-mono font-bold text-foreground">
                  <span>{ar ? `رقم المرجع الاستثماري: ${submissionRef}` : `IR Reference: ${submissionRef}`}</span>
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
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "شكرًا لتواصلكم. تم توجيه طلبكم مباشرة إلى مكتب الرئيس التنفيذي وإدارة الاستراتيجية، وسيتواصل معكم فريق علاقات المستثمرين لتحديد موعد الاجتماع خلال يومي عمل."
                  : "Thank you for your interest. Your inquiry has been routed to the Executive Office & Corporate Strategy Team. Our IR representative will follow up within two business days to schedule the discussion."}
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={buildOwnerWhatsAppFollowupUrl(
                    submissionRef,
                    "investor_interest",
                    inquiryForm.investorName,
                    inquiryForm.organization
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition hover:bg-brand-orange shadow-md"
                >
                  <MessageCircle className="size-4" />
                  <span>{ar ? "متابعة مباشرة عبر الواتساب" : "Direct WhatsApp Follow-up"}</span>
                </a>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsSubmitted(false)}
                  className="rounded-full text-xs font-bold"
                >
                  {ar ? "إرسال استفسار إضافي" : "Submit Another Inquiry"}
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto space-y-4">
              {selectedOpportunity && (
                <div className="rounded-2xl bg-brand-orange/10 border border-brand-orange/30 p-3.5 flex items-center justify-between text-xs">
                  <span className="font-semibold text-foreground">
                    {ar ? `الفرصة الاستثمارية المحددة: ${selectedOpportunity}` : `Target Opportunity: ${selectedOpportunity}`}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedOpportunity("")}
                    className="text-muted-foreground hover:text-foreground text-[11px] underline"
                  >
                    {ar ? "إلغاء التحديد" : "Clear"}
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "اسم الممثل الاستثماري *" : "Representative Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.investorName}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, investorName: e.target.value })}
                    placeholder={ar ? "الاسم واللقب المهني" : "Managing Director / Partner Name"}
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "اسم المؤسسة / الصندوق / الكيان *" : "Institution / Fund / Family Office *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.organization}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, organization: e.target.value })}
                    placeholder={ar ? "اسم الصندوق أو الشركة الاستثمارية" : "Alpha Capital Partners"}
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "البريد الإلكتروني المؤسسي *" : "Corporate Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    placeholder="partner@alphacapital.com"
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "رقم الهاتف / واتساب المباشر *" : "Direct Telephone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    placeholder="+971 50 000 0000"
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "دولة المقر / النشاط *" : "Headquarters Country *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryForm.country}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, country: e.target.value })}
                    placeholder={ar ? "الإمارات، السعودية، سويسرا، مصر..." : "UAE, KSA, Switzerland, UK..."}
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "القطاع محل الاهتمام" : "Preferred Business Sector"}
                  </label>
                  <select
                    value={inquiryForm.preferredSector}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, preferredSector: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  >
                    <option value="all">{ar ? "كافة قطاعات المجموعة (مستوى القابضة)" : "Group-Wide / Holding Level"}</option>
                    <option value="environmental">{ar ? "البيئة المستدامة والطاقة المتجددة (Biogas / RSD)" : "Environmental & Renewable Energy (Biogas)"}</option>
                    <option value="garment">{ar ? "تصنيع وتصدير الملابس الجاهزة (Garments)" : "Garment Manufacturing & Export"}</option>
                    <option value="food">{ar ? "الأغذية والمنتجات الطبيعية والزراعية" : "Agri-Food & Natural Products"}</option>
                    <option value="construction">{ar ? "المقاولات العامة والبنية التحتية" : "Contracting & Infrastructure"}</option>
                  </select>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                    {ar ? "نموذج الشراكة المقترح" : "Proposed Investment Structure"}
                  </label>
                  <select
                    value={inquiryForm.investmentType}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, investmentType: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                  >
                    <option value="jv">{ar ? "مشروع مشترك استراتيجي (Joint Venture)" : "Strategic Joint Venture (JV)"}</option>
                    <option value="project-equity">{ar ? "مساهمة رأسمالية في مشروع محدد (Project Equity)" : "Project-Specific Equity Financing"}</option>
                    <option value="expansion-equity">{ar ? "رأس مال نمو وتوسع تشغيلي (Growth Equity)" : "Growth Capital & Expansion Equity"}</option>
                    <option value="strategic-commercial">{ar ? "شراكة تصنيعية / تجارية دولية" : "International Industrial / Sourcing Alliance"}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-bold text-muted-foreground mb-1 block">
                  {ar ? "تفاصيل إضافية / مقترح جدول الاجتماع (اختياري)" : "Confidential Discussion Scope / Proposed Meeting Times"}
                </label>
                <textarea
                  rows={3}
                  value={inquiryForm.notes}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                  placeholder={
                    ar
                      ? "أدخل ملخصًا لطبيعة التعاون المقترح أو المواعيد المفضلة لعقد اجتماع افتراضي أو حضوري بمقر المجموعة..."
                      : "Brief outline of your investment thesis, target allocation, or preferred schedule for a virtual or in-person executive session..."
                  }
                  className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              {/* NDA & Privacy Agreement */}
              <div className="flex items-center gap-2 pt-2">
                <input
                  type="checkbox"
                  id="ndaCheckbox"
                  required
                  checked={inquiryForm.ndaAgreed}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, ndaAgreed: e.target.checked })}
                  className="size-4 rounded border-border text-brand-green focus:ring-brand-green"
                />
                <label htmlFor="ndaCheckbox" className="text-xs text-muted-foreground">
                  {ar
                    ? "أوافق على معالجة البيانات وفق سياسة الخصوصية وتوقيع اتفاقية سرية المعلومات (NDA) قبل تبادل البيانات المالية."
                    : "I agree to data processing under SBA's privacy policy and standard bilateral Non-Disclosure Agreement (NDA)."}
                </label>
              </div>

              {/* Form Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-md">
                  <Send className="size-4" />
                  <span>{ar ? "إرسال الطلب الاستثماري" : "Submit Investment Inquiry"}</span>
                </Button>

                <Button
                  type="button"
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto rounded-full gap-2 text-emerald-600 border-emerald-500/30 hover:bg-emerald-500/10"
                >
                  <a href={getWhatsappMeetingUrl()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" />
                    <span>{ar ? "تواصل مباشر عبر واتساب" : "Direct WhatsApp Inquiries"}</span>
                  </a>
                </Button>
              </div>
            </form>
          )}

          {/* Compliance & Governance Footer Note */}
          <div className="mt-10 pt-6 border-t border-border/60 max-w-3xl mx-auto text-center">
            <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
              <ShieldAlert className="inline size-3.5 me-1 text-brand-orange" />
              {ar
                ? "إشعار الامتثال والحوكمة: تلتزم مجموعة سامي بن عياد بعدم نشر أي توقعات مالية أو بيانات مستقبلية غير معتمدة. كافة البيانات المحاسبية الرسمية وسجلات التدقيق المالي تخضع لاتفاقيات سرية المعلومات المعمول بها دوليًا."
                : "Compliance & Governance Notice: Sami Bin Ayyad Group does not publish unverified financial projections or speculative forward-looking claims. All verified corporate financial audits, asset evaluations, and legal agreements are shared strictly under customary bilateral Non-Disclosure Agreements."}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

