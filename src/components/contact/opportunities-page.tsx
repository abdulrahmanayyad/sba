import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  TrendingUp,
  Building2,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Upload,
  FileText,
  X,
  Send,
  Lock,
  Copy,
  DollarSign,
  ShieldCheck,
  Briefcase,
  Layers,
  ArrowRight,
  Handshake,
} from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  contactPortalSystem,
  type OpportunityRecord,
  type OpportunityType,
  type OpportunityStage,
  OPPORTUNITY_TYPES_MAP,
  OPPORTUNITY_STAGES_MAP,
} from "@/lib/contact-portal-system";
import { submitCentralForm } from "@/lib/central-form-dispatch";

export function SubmitOpportunityPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Wizard Step (1 to 6)
  const [currentStep, setCurrentStep] = useState(1);

  // Step 1: Applicant Information
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [city, setCity] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [preferredContact, setPreferredContact] = useState<"email" | "phone" | "whatsapp">("email");

  // Step 2: Opportunity Details
  const [opportunityType, setOpportunityType] = useState<OpportunityType>("joint_venture");
  const [projectName, setProjectName] = useState("");
  const [sector, setSector] = useState(ar ? "المقاولات والتطوير العقاري" : "Contracting & Real Estate");
  const [projectCountry, setProjectCountry] = useState(ar ? "مصر" : "Egypt");
  const [projectCity, setProjectCity] = useState("");
  const [stage, setStage] = useState<OpportunityStage>("ready_for_partnership");
  const [description, setDescription] = useState("");

  // Step 3: Financial & Commercial Information
  const [estimatedValue, setEstimatedValue] = useState("");
  const [requiredInvestment, setRequiredInvestment] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [investmentStructure, setInvestmentStructure] = useState("");
  const [revenueModel, setRevenueModel] = useState("");
  const [projectDuration, setProjectDuration] = useState("");
  const [partnershipShare, setPartnershipShare] = useState("");
  const [expectedStartDate, setExpectedStartDate] = useState("");

  // Step 4: Strategic Requirements (Multi-Select)
  const [selectedRequirements, setSelectedRequirements] = useState<string[]>([
    "Strategic Partnership",
    "Technical Expertise",
  ]);

  // Step 5: Supporting Documents
  const [attachments, setAttachments] = useState<Array<{ name: string; size: string }>>([]);

  // Step 6: Declarations
  const [decAccuracy, setDecAccuracy] = useState(false);
  const [decAuthorize, setDecAuthorize] = useState(false);
  const [decNoCommitment, setDecNoCommitment] = useState(false);
  const [decPrivacy, setDecPrivacy] = useState(false);

  // Submission & Validation
  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedOpportunity, setSubmittedOpportunity] = useState<OpportunityRecord | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  const STRATEGIC_OPTIONS = [
    { id: "Financial Investment", ar: "استثمار وتمويل مالي", en: "Financial Investment" },
    { id: "Strategic Partnership", ar: "شراكة استراتيجية وتوسع", en: "Strategic Partnership" },
    { id: "Technical Expertise", ar: "خبرات هندسية وفنية متخصصة", en: "Technical Expertise" },
    { id: "Manufacturing Capabilities", ar: "قدرات وخطوط تصنيع متقدمة", en: "Manufacturing Capabilities" },
    { id: "Distribution Network", ar: "شبكات توزيع وتسويق إقليمية", en: "Distribution Network" },
    { id: "Market Access", ar: "النفاذ للأسواق الدولية والمحلية", en: "Market Access" },
    { id: "Project Development", ar: "تطوير وإدارة المشروعات", en: "Project Development" },
    { id: "Operational Management", ar: "إدارة وتشغيل المنشآت", en: "Operational Management" },
    { id: "Joint Venture", ar: "تأسيس كيان مشترك (SPV)", en: "Joint Venture" },
    { id: "Other", ar: "متطلبات أخرى", en: "Other" },
  ];

  const handleRequirementToggle = (id: string) => {
    setSelectedRequirements((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files).map((f) => ({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(1)} MB`,
      }));
      setAttachments((prev) => [...prev, ...files]);
    }
  };

  const removeAttachment = (idx: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== idx));
  };

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};
    if (step === 1) {
      if (!fullName.trim()) errs.fullName = ar ? "الاسم مطلوب" : "Full Name is required";
      if (!country.trim()) errs.country = ar ? "الدولة مطلوبة" : "Country is required";
      if (!email.trim() || !email.includes("@")) errs.email = ar ? "البريد الإلكتروني مطلوب" : "Valid email is required";
      if (!phone.trim()) errs.phone = ar ? "رقم الهاتف مطلوب" : "Phone number is required";
    } else if (step === 2) {
      if (!projectName.trim()) errs.projectName = ar ? "اسم المشروع مطلوب" : "Project name is required";
      if (!description.trim() || description.length < 20) {
        errs.description = ar
          ? "يرجى كتابة شرح وافٍ للفرصة (20 حرف على الأقل)"
          : "Please write a comprehensive description (at least 20 chars)";
      }
    } else if (step === 6) {
      if (!decAccuracy || !decAuthorize || !decNoCommitment || !decPrivacy) {
        errs.declarations = ar
          ? "يرجى الموافقة على جميع الإقرارات الأربعة للمتابعة"
          : "Please accept all four declarations to proceed";
      }
    }
    setStepErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    setIsSubmitting(true);

    submitCentralForm({
      formType: "opportunity_proposal",
      name: fullName,
      company: company || undefined,
      email,
      phone,
      country: `${country}${city ? ` · ${city}` : ""}`,
      sector,
      serviceOrProduct: projectName,
      message: `[Opportunity: ${projectName}]\n[Type: ${opportunityType}] | [Stage: ${stage}]\n[Location: ${projectCountry || "N/A"}${projectCity ? `, ${projectCity}` : ""}]\n[Estimated Value: ${estimatedValue || "N/A"} ${currency}]\n[Required Investment: ${requiredInvestment || "N/A"} ${currency}]\n[Structure: ${investmentStructure || "N/A"}] | [Revenue Model: ${revenueModel || "N/A"}]\n[Duration: ${projectDuration || "N/A"}] | [Share: ${partnershipShare || "N/A"}]\n[Requirements: ${selectedRequirements.join(", ")}]\n\nDescription:\n${description}`,
      metadata: {
        opportunityType,
        stage,
        projectName,
        estimatedValue,
        requiredInvestment,
        currency,
        selectedRequirements,
        attachments: attachments.map((a) => a.name),
      },
    }).catch(console.error);

    setTimeout(() => {
      const created = contactPortalSystem.submitOpportunity({
        type: opportunityType,
        stage,
        applicant: {
          fullName,
          company: company || undefined,
          country,
          city: city || undefined,
          jobTitle: jobTitle || undefined,
          email,
          phone,
          website: website || undefined,
          linkedin: linkedin || undefined,
          preferredContact,
        },
        project: {
          name: projectName,
          sector,
          country: projectCountry || undefined,
          city: projectCity || undefined,
          description,
          estimatedValue: estimatedValue || undefined,
          requiredInvestment: requiredInvestment || undefined,
          currency,
          investmentStructure: investmentStructure || undefined,
          revenueModel: revenueModel || undefined,
          projectDuration: projectDuration || undefined,
          partnershipShare: partnershipShare || undefined,
          expectedStartDate: expectedStartDate || undefined,
          strategicRequirements: selectedRequirements,
          attachments: attachments.length > 0 ? attachments : undefined,
        },
      });

      setSubmittedOpportunity(created);
      setIsSubmitting(false);

      // Reset
      setCurrentStep(1);
      setProjectName("");
      setDescription("");
      setEstimatedValue("");
      setRequiredInvestment("");
      setAttachments([]);
      setDecAccuracy(false);
      setDecAuthorize(false);
      setDecNoCommitment(false);
      setDecPrivacy(false);
    }, 600);
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
            <span>{ar ? "بوابة الاستثمار وتطوير الأعمال" : "Strategic Co-Development Portal"}</span>
          </div>

          <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
            {ar ? "اعرض فرصتك" : "Submit Your Opportunity"}
          </h1>

          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans">
            <p className="font-medium text-foreground">
              {ar
                ? "نؤمن بأن الفرص الواعدة تبدأ بالتواصل، وأن الشراكات الناجحة تقوم على تكامل الخبرات والموارد والرؤى."
                : "We believe that promising opportunities begin with meaningful connections and that successful partnerships are built on complementary expertise, resources, and strategic vision."}
            </p>
            <p>
              {ar
                ? "ومن خلال أنشطتنا المتنوعة في قطاعات الأعمال والاستثمار والتجارة والصناعة والمقاولات والخدمات البيئية، نرحب باستقبال الفرص والمبادرات والمشروعات المقترحة التي تتوافق مع توجهات المجموعة وإمكاناتها الاستراتيجية."
                : "Across our diverse business activities, we welcome investment proposals, business opportunities, strategic partnerships, commercial initiatives, and promising projects that align with the Group’s interests and capabilities."}
            </p>
            <p className="text-sm sm:text-base text-brand-orange font-semibold">
              {ar
                ? "إذا كنت تمتلك فرصة استثمارية، أو مشروعاً واعداً، أو مقترح شراكة، أو فرصة تعاون تجاري، ندعوك إلى عرض فكرتك علينا لدراستها من قبل الإدارة المختصة."
                : "Present your opportunity to our team for professional review and consideration."}
            </p>
          </div>
        </div>
      </section>

      {/* Stepped Form Card */}
      <section className="site-container mt-4 max-w-4xl mx-auto">
        <div className="rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl">
          {/* Progress Indicator */}
          <div className="mb-8 border-b border-border/60 pb-6">
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
              {[
                { num: 1, labelAr: "بيانات مقدم الطلب", labelEn: "Applicant Info" },
                { num: 2, labelAr: "تفاصيل الفرصة", labelEn: "Opportunity" },
                { num: 3, labelAr: "البيانات المالية", labelEn: "Financials" },
                { num: 4, labelAr: "المتطلبات الاستراتيجية", labelEn: "Requirements" },
                { num: 5, labelAr: "المستندات الداعمة", labelEn: "Documents" },
                { num: 6, labelAr: "الإقرار والتقديم", labelEn: "Submission" },
              ].map((s) => {
                const isPassed = currentStep > s.num;
                const isCurrent = currentStep === s.num;
                return (
                  <button
                    key={s.num}
                    type="button"
                    onClick={() => {
                      if (s.num < currentStep) setCurrentStep(s.num);
                    }}
                    className={cn(
                      "flex items-center gap-2 whitespace-nowrap text-xs font-head font-bold transition-all py-1 px-3 rounded-full",
                      isCurrent && "bg-brand-orange text-white shadow-sm ring-2 ring-brand-orange/30",
                      isPassed && "text-brand-green bg-brand-green/10",
                      !isCurrent && !isPassed && "text-muted-foreground opacity-60"
                    )}
                  >
                    <span className="size-5 rounded-full flex items-center justify-center text-[10px] font-mono bg-white/20">
                      {isPassed ? "✓" : s.num}
                    </span>
                    <span>{ar ? s.labelAr : s.labelEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* STEP 1: APPLICANT INFORMATION */}
            {currentStep === 1 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 1: بيانات مقدم الطلب والجهة" : "Step 1: Applicant Information"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "أدخل بيانات التواصل المباشرة لممثل المشروع أو المستثمر." : "Provide primary contact details of the applicant or company representative."}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "الاسم بالكامل *" : "Full Name *"}</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={ar ? "الاسم ثلاثي أو رباعي" : "Full Name"}
                      className={cn("w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green", stepErrors.fullName ? "border-red-500" : "border-border")}
                    />
                    {stepErrors.fullName && <p className="text-[11px] text-red-500 mt-1">{stepErrors.fullName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "الشركة أو المؤسسة" : "Company / Organization"}</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={ar ? "اسم الشركة أو الكيان المنفذ" : "Company Name"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "المسمى الوظيفي" : "Position / Job Title"}</label>
                    <input
                      type="text"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      placeholder={ar ? "مثال: الشريك المؤسس، المدير التنفيذي" : "e.g. Managing Director"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "الدولة *" : "Country *"}</label>
                    <input
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className={cn("w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green", stepErrors.country ? "border-red-500" : "border-border")}
                    />
                    {stepErrors.country && <p className="text-[11px] text-red-500 mt-1">{stepErrors.country}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "المدينة" : "City"}</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder={ar ? "المدينة" : "City"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "البريد الإلكتروني المهني *" : "Business Email *"}</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="corporate@domain.com"
                      className={cn("w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green", stepErrors.email ? "border-red-500" : "border-border")}
                    />
                    {stepErrors.email && <p className="text-[11px] text-red-500 mt-1">{stepErrors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "رقم الهاتف المباشر *" : "Phone Number *"}</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 100 000 0000"
                      className={cn("w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green", stepErrors.phone ? "border-red-500" : "border-border")}
                    />
                    {stepErrors.phone && <p className="text-[11px] text-red-500 mt-1">{stepErrors.phone}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "الموقع الإلكتروني أو لينكد إن" : "Website or LinkedIn"}</label>
                    <input
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://..."
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: OPPORTUNITY DETAILS */}
            {currentStep === 2 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 2: مواصفات وطبيعة الفرصة المطروحة" : "Step 2: Opportunity Details"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "حدد نوع الفرصة والقطاع المعني واشرح القيمة الاستراتيجية المضافة." : "Define the category, sector, stage, and commercial value of the proposal."}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "نوع الفرصة *" : "Opportunity Type *"}</label>
                    <select
                      value={opportunityType}
                      onChange={(e) => setOpportunityType(e.target.value as OpportunityType)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      {(Object.keys(OPPORTUNITY_TYPES_MAP) as OpportunityType[]).map((type) => (
                        <option key={type} value={type}>
                          {ar ? OPPORTUNITY_TYPES_MAP[type].ar : OPPORTUNITY_TYPES_MAP[type].en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "مرحلة المشروع *" : "Project Stage *"}</label>
                    <select
                      value={stage}
                      onChange={(e) => setStage(e.target.value as OpportunityStage)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      {(Object.keys(OPPORTUNITY_STAGES_MAP) as OpportunityStage[]).map((stg) => (
                        <option key={stg} value={stg}>
                          {ar ? OPPORTUNITY_STAGES_MAP[stg].ar : OPPORTUNITY_STAGES_MAP[stg].en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "اسم المشروع أو الفرصة المقترحة *" : "Proposed Project / Opportunity Name *"}</label>
                    <input
                      type="text"
                      value={projectName}
                      onChange={(e) => setProjectName(e.target.value)}
                      placeholder={ar ? "مثال: مجمع لتصنيع الملابس الرياضية التصديرية أو محطة توليد بيوجاز" : "e.g. Advanced Solar-Powered Water Desalination Facility"}
                      className={cn("w-full rounded-2xl border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green", stepErrors.projectName ? "border-red-500" : "border-border")}
                    />
                    {stepErrors.projectName && <p className="text-[11px] text-red-500 mt-1">{stepErrors.projectName}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "القطاع المعني *" : "Relevant Business Sector *"}</label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      <option value="construction">{ar ? "المقاولات والتطوير العقاري" : "Contracting & Real Estate"}</option>
                      <option value="environmental">{ar ? "الحلول البيئية والاستدامة والطاقة" : "Environmental & Sustainability"}</option>
                      <option value="garment">{ar ? "صناعة وتصدير الملابس الجاهزة" : "Garment Manufacturing & Fashion"}</option>
                      <option value="food">{ar ? "الأغذية والمنتجات الطبيعية والتصدير" : "Food & Natural Products"}</option>
                      <option value="tech">{ar ? "التقنيات والحلول الرقمية" : "Technology & Digital"}</option>
                      <option value="other">{ar ? "قطاع استثماري آخر" : "Other Sector"}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "دولة / موقع المشروع" : "Project Location / Country"}</label>
                    <input
                      type="text"
                      value={projectCountry}
                      onChange={(e) => setProjectCountry(e.target.value)}
                      placeholder={ar ? "الدولة والمحافظة" : "Country & City"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">
                    {ar ? "شرح وتفاصيل الفرصة الاستثمارية *" : "Opportunity Description *"}
                  </label>
                  <p className="text-[11px] text-muted-foreground mb-2">
                    {ar
                      ? "وضح: ما هي الفرصة؟ ما المشكلة أو الحاجة التي تحلها؟ ما القيمة التجارية؟ ولماذا اخترت الشراكة مع مجموعة سامي بن عياد؟"
                      : "Explain: What is the opportunity? What problem does it solve? What is its commercial value? Why partner with SBA Group?"}
                  </p>
                  <textarea
                    rows={5}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder={ar ? "اكتب شرحًا متكاملاً للفرصة..." : "Describe the opportunity, key market drivers, and synergy..."}
                    className={cn("w-full rounded-2xl border bg-background px-4 py-3 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed", stepErrors.description ? "border-red-500" : "border-border")}
                  />
                  {stepErrors.description && <p className="text-[11px] text-red-500 mt-1">{stepErrors.description}</p>}
                </div>
              </div>
            )}

            {/* STEP 3: FINANCIAL & COMMERCIAL INFORMATION */}
            {currentStep === 3 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 3: المؤشرات المالية والتجارية (اختياري)" : "Step 3: Financial & Commercial Information"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "هذه الحقول استرشادية لمساعدتنا في تقييم الحجم والجدوى الأولية ولا تلزمك بكشف بيانات حساسة." : "These fields are optional to help evaluate preliminary scale and investment scope."}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "العملة" : "Currency"}</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-brand-green"
                    >
                      <option value="USD">USD ($)</option>
                      <option value="EGP">EGP (جنيه)</option>
                      <option value="EUR">EUR (€)</option>
                      <option value="SAR">SAR (ريال سعودي)</option>
                      <option value="AED">AED (درهم إماراتي)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "القيمة الإجمالية التقديرية" : "Estimated Total Project Value"}</label>
                    <input
                      type="text"
                      value={estimatedValue}
                      onChange={(e) => setEstimatedValue(e.target.value)}
                      placeholder="e.g. 5,000,000"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "الاستثمار أو التمويل المطلوب" : "Required Investment Amount"}</label>
                    <input
                      type="text"
                      value={requiredInvestment}
                      onChange={(e) => setRequiredInvestment(e.target.value)}
                      placeholder="e.g. 1,500,000"
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "هيكل الاستثمار المقترح" : "Proposed Investment Structure"}</label>
                    <input
                      type="text"
                      value={investmentStructure}
                      onChange={(e) => setInvestmentStructure(e.target.value)}
                      placeholder={ar ? "مثال: حصة ملكية، مشروع مشترك SPV" : "e.g. Equity, SPV, Mezzanine"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "حصة الشراكة المقترحة للمجموعة" : "Proposed Partnership Share"}</label>
                    <input
                      type="text"
                      value={partnershipShare}
                      onChange={(e) => setPartnershipShare(e.target.value)}
                      placeholder={ar ? "مثال: 40% أو حصة أغلبية" : "e.g. 35% Equity"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "المدة المتوقعة لتنفيذ المشروع" : "Project Duration"}</label>
                    <input
                      type="text"
                      value={projectDuration}
                      onChange={(e) => setProjectDuration(e.target.value)}
                      placeholder={ar ? "مثال: سنتان، 5 سنوات" : "e.g. 3 Years"}
                      className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-foreground mb-1.5">{ar ? "نموذج الإيرادات والعائد المتوقع" : "Expected Return / Revenue Model"}</label>
                  <textarea
                    rows={2}
                    value={revenueModel}
                    onChange={(e) => setRevenueModel(e.target.value)}
                    placeholder={ar ? "وضح كيف يولد المشروع تدفقات نقدية وعوائد سنوية متوقعة..." : "Describe revenue streams and expected ROI..."}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-2.5 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-green leading-relaxed"
                  />
                </div>
              </div>
            )}

            {/* STEP 4: STRATEGIC REQUIREMENTS */}
            {currentStep === 4 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 4: ماذا تتوقع وتطلب من مجموعة سامي بن عياد؟" : "Step 4: Strategic Requirements from SBA Group"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "حدد مجالات الدعم والشراكة المطلوبة (يمكنك اختيار أكثر من خيار)." : "Select all capabilities you require from Sami Bin Ayyad Group."}
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {STRATEGIC_OPTIONS.map((opt) => {
                    const isSelected = selectedRequirements.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        onClick={() => handleRequirementToggle(opt.id)}
                        className={cn(
                          "flex items-center gap-3 p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 select-none",
                          isSelected
                            ? "bg-brand-green/10 border-brand-green text-foreground shadow-sm"
                            : "bg-secondary/30 border-border text-muted-foreground hover:bg-secondary/60"
                        )}
                      >
                        <div
                          className={cn(
                            "size-5 rounded-lg border flex items-center justify-center shrink-0 transition-colors",
                            isSelected ? "bg-brand-green border-brand-green text-white" : "border-border bg-background"
                          )}
                        >
                          {isSelected && <span className="text-xs font-bold">✓</span>}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">
                          {ar ? opt.ar : opt.en}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 5: SUPPORTING DOCUMENTS */}
            {currentStep === 5 && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 5: الوثائق والدراسات الداعمة (اختياري)" : "Step 5: Supporting Documents"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar
                      ? "يمكنك إرفاق دراسة الجدوى، العرض التقديمي (Pitch Deck)، أو الملف التعريفي للشركة (PDF, DOCX, XLSX, PPTX, JPG)."
                      : "Upload Feasibility Study, Pitch Deck, Business Plan, or Financial Model."}
                  </p>
                </div>

                <label className="flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed border-border hover:border-foreground/30 bg-secondary/30 hover:bg-secondary/50 cursor-pointer transition-all">
                  <Upload className="size-8 text-brand-green mb-2" />
                  <span className="text-xs sm:text-sm font-bold text-foreground">
                    {ar ? "انقر لاختيار ملفات العرض التقديمي والدراسات" : "Click to select pitch presentation & files"}
                  </span>
                  <span className="text-[11px] text-muted-foreground mt-1">
                    PDF, PPTX, DOCX, XLSX (Max 15MB)
                  </span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx,.pptx,.xlsx,.jpg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>

                {attachments.length > 0 && (
                  <div className="space-y-2 mt-4">
                    {attachments.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-3 rounded-2xl border border-border bg-background/90 text-xs"
                      >
                        <div className="flex items-center gap-2">
                          <FileText className="size-4 text-brand-orange" />
                          <span className="font-semibold">{file.name}</span>
                          <span className="text-[10px] text-muted-foreground font-mono">({file.size})</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeAttachment(idx)}
                          className="text-muted-foreground hover:text-red-500 p-1"
                        >
                          <X className="size-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* STEP 6: DECLARATIONS & SUBMISSION */}
            {currentStep === 6 && (
              <div className="space-y-5 animate-in fade-in duration-300">
                <div className="border-b border-border/40 pb-2 mb-4">
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "الخطوة 6: الإقرارات القانونية والتقديم النهائي" : "Step 6: Declarations & Final Submission"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "يرجى قراءة والموافقة على الشروط الحاكمة لعرض الفرص الاستثمارية." : "Please review and confirm the governing terms before submission."}
                  </p>
                </div>

                <div className="space-y-3.5 bg-secondary/30 p-5 rounded-2xl border border-border">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={decAccuracy}
                      onChange={(e) => setDecAccuracy(e.target.checked)}
                      className="size-4 rounded border-border text-brand-green focus:ring-brand-green mt-1 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {ar
                        ? "1. أقر بأن كافة المعلومات والبيانات الواردة في هذا العرض صحيحة ودقيقة ومحدثة حسب علمي."
                        : "1. I confirm that the information provided is accurate and truthful to the best of my knowledge."}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={decAuthorize}
                      onChange={(e) => setDecAuthorize(e.target.checked)}
                      className="size-4 rounded border-border text-brand-green focus:ring-brand-green mt-1 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {ar
                        ? "2. أفوض مجموعة سامي بن عياد ولجانها المختصة بدراسة ومراجعة العرض والمعلومات المرفقة لأغراض التقييم الفني والاستثماري."
                        : "2. I authorize the Group to review the submitted information for evaluation purposes."}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={decNoCommitment}
                      onChange={(e) => setDecNoCommitment(e.target.checked)}
                      className="size-4 rounded border-border text-brand-green focus:ring-brand-green mt-1 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-brand-orange leading-relaxed font-bold">
                      {ar
                        ? "3. أدرك تماماً وأوافق على أن استلام هذا العرض أو تسجيله لا يشكل بأي حال من الأحوال قبولاً مبدئياً، أو موافقة استثمارية، أو اتفاق شراكة، أو أي التزام تعاقدي أو مالي من جانب مجموعة سامي بن عياد."
                        : "3. I understand that submitting an opportunity does not constitute acceptance, investment approval, partnership agreement, or any contractual commitment by the Group."}
                    </span>
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={decPrivacy}
                      onChange={(e) => setDecPrivacy(e.target.checked)}
                      className="size-4 rounded border-border text-brand-green focus:ring-brand-green mt-1 shrink-0"
                    />
                    <span className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium">
                      {ar
                        ? "4. أقر باطلاعي على سياسة الخصوصية وحماية البيانات المعمول بها لدى المجموعة والموافقة عليها."
                        : "4. I acknowledge and agree to the Group's Privacy Policy."}
                    </span>
                  </label>
                </div>

                {stepErrors.declarations && (
                  <p className="text-xs text-red-500 font-bold">{stepErrors.declarations}</p>
                )}
              </div>
            )}

            {/* Stepper Navigation Buttons */}
            <div className="pt-6 border-t border-border/60 flex items-center justify-between gap-3">
              {currentStep > 1 ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  className="rounded-2xl border-border hover:bg-secondary px-6 font-head text-xs font-bold"
                >
                  {ar ? "← الخطوة السابقة" : "Previous Step"}
                </Button>
              ) : <div />}

              {currentStep < 6 ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  className="rounded-2xl bg-brand-green text-white hover:bg-brand-orange px-8 font-head text-xs sm:text-sm font-bold shadow-md"
                >
                  {ar ? "متابعة الخطوة التالية →" : "Next Step →"}
                </Button>
              ) : (
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-2xl !bg-brand-green !text-white hover:!bg-brand-orange px-8 py-3.5 font-head font-bold text-sm shadow-xl transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{ar ? "جاري تسجيل الفرصة..." : "Submitting Opportunity..."}</span>
                  ) : (
                    <span>{ar ? "تقديم الفرصة" : "Present Your Opportunity"}</span>
                  )}
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Success Dialog */}
      <Dialog open={!!submittedOpportunity} onOpenChange={(open) => !open && setSubmittedOpportunity(null)}>
        <DialogContent className="max-w-md rounded-3xl border border-brand-green/30 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <div className="mx-auto size-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mb-3">
              <CheckCircle2 className="size-8" />
            </div>
            <DialogTitle className="font-head text-xl font-bold text-center text-foreground">
              {ar ? "تم استلام عرض الفرصة بنجاح" : "Opportunity Successfully Received"}
            </DialogTitle>
            <DialogDescription className="text-center text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              {ar ? (
                <>
                  نشكرك على ثقتك بمجموعة سامي بن عياد.
                  <br />
                  تم استلام عرضك بنجاح، وسيتم تحويله إلى الإدارة المختصة لدراسة مدى توافقه مع توجهات المجموعة وفرص التعاون الممكنة.
                </>
              ) : (
                <>
                  Thank you for presenting your opportunity to Sami Bin Ayyad Group.
                  <br />
                  Your submission has been successfully received and will be referred to the relevant team for review and evaluation.
                </>
              )}
            </DialogDescription>
          </DialogHeader>

          {submittedOpportunity && (
            <div className="my-4 p-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase block">
                  {ar ? "رقم الفرصة المرجعي" : "Opportunity Reference Number"}
                </span>
                <span className="font-mono text-base font-black text-brand-orange">
                  {submittedOpportunity.referenceCode}
                </span>
              </div>
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => copyRef(submittedOpportunity.referenceCode)}
                className="rounded-xl border-brand-orange/40 text-brand-orange hover:bg-brand-orange hover:text-white gap-1.5 text-xs font-bold"
              >
                <Copy className="size-3.5" />
                <span>{copiedRef ? (ar ? "تم النسخ" : "Copied") : (ar ? "نسخ" : "Copy")}</span>
              </Button>
            </div>
          )}

          <div className="p-3 rounded-2xl bg-secondary/50 border border-border text-[11px] text-muted-foreground leading-relaxed text-center font-sans">
            {ar
              ? "نؤكد أن استلام العرض لا يمثل موافقة مبدئية أو التزاماً استثمارياً أو تعاقدياً من جانب المجموعة."
              : "Submission does not constitute investment approval, partnership acceptance, or any contractual commitment."}
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              type="button"
              onClick={() => setSubmittedOpportunity(null)}
              className="w-full rounded-2xl bg-brand-green text-white hover:bg-brand-orange font-bold text-xs"
            >
              {ar ? "تم والحفظ" : "Done & Finish"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

