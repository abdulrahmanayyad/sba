// Centralized Free Consultation Page & Multi-Step System
// SAMI BIN AYYAD GROUP — 100% Free Consultation Across All Business Sectors

import React, { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Sparkles,
  CheckCircle2,
  Building2,
  Shirt,
  Leaf,
  Wheat,
  Upload,
  X,
  Lock,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  MessageCircle,
  Copy,
  ExternalLink,
  ShieldCheck,
  Clock,
  AlertCircle,
  FileCheck2
} from "lucide-react";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import {
  submitCentralForm,
  buildApplicantConfirmationEmail,
  buildOwnerWhatsAppFollowupUrl,
  CentralFormSubmission,
  BUSINESS_OWNER_EMAIL
} from "@/lib/central-form-dispatch";
import { CORPORATE_IDENTITY } from "@/lib/corporate-registry";
import { ContactDirectorySidebar } from "@/components/contact/contact-sidebar";

export type ConsultationSectorOption = "construction" | "garment" | "environmental" | "food";

export function ConsultationPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Pre-fill sector from query params if available
  const routerState = useRouterState();
  const searchParams = new URLSearchParams(routerState.location.search);
  const initialSectorParam = searchParams.get("sector");

  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Step 1: Contact Information
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [country, setCountry] = useState(ar ? "مصر" : "Egypt");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");

  // Step 2: Multi-Sector Selection
  const [selectedSectors, setSelectedSectors] = useState<ConsultationSectorOption[]>(() => {
    if (initialSectorParam === "construction") return ["construction"];
    if (initialSectorParam === "garment" || initialSectorParam === "apparel") return ["garment"];
    if (initialSectorParam === "environmental" || initialSectorParam === "sustainability") return ["environmental"];
    if (initialSectorParam === "food") return ["food"];
    return ["construction"];
  });

  // Step 3: Consultation Purpose
  const [purposes, setPurposes] = useState<string[]>(["Initial Business Consultation"]);

  // Step 4: Sector-Specific Fields
  // 4.A Construction
  const [conProjectType, setConProjectType] = useState("General Contracting");
  const [conProjectLocation, setConProjectLocation] = useState("");
  const [conPropertyType, setConPropertyType] = useState("Commercial / Medical");
  const [conProjectScale, setConProjectScale] = useState("");
  const [conCurrentStage, setConCurrentStage] = useState("Design & Planning");
  const [conRequiredService, setConRequiredService] = useState("Turnkey EPC Contracting");

  // 4.B Apparel
  const [garCategory, setGarCategory] = useState("Women’s Wear");
  const [garTargetMarket, setGarTargetMarket] = useState("Europe & GCC");
  const [garEstimatedQty, setGarEstimatedQty] = useState("");
  const [garFabricSpecs, setGarFabricSpecs] = useState("100% Egyptian Cotton / Knitted");
  const [garMfgModel, setGarMfgModel] = useState("FOB");
  const [garSampleAvailable, setGarSampleAvailable] = useState("Yes - Tech Pack Ready");

  // 4.C Sustainability
  const [envProjectType, setEnvProjectType] = useState("Industrial Rooftop Solar PV (C&I)");
  const [envFacilityType, setEnvFacilityType] = useState("Manufacturing Plant / Industrial Cluster");
  const [envChallenge, setEnvChallenge] = useState("High energy tariffs & carbon compliance");
  const [envCapacity, setEnvCapacity] = useState("");
  const [envRequiredSolution, setEnvRequiredSolution] = useState("Feasibility study & EPC partner delivery");

  // 4.D Food
  const [foodCategory, setFoodCategory] = useState("Dates & Date Products");
  const [foodProductName, setFoodProductName] = useState("Egyptian Siwi Dates");
  const [foodRequiredQty, setFoodRequiredQty] = useState("");
  const [foodPackaging, setFoodPackaging] = useState("5kg / 10kg Bulk Master Cartons");
  const [foodDestination, setFoodDestination] = useState("Europe / GCC / Asia");

  // Step 5: Business Requirements & Objectives
  const [detailedDescription, setDetailedDescription] = useState("");
  const [mainObjectives, setMainObjectives] = useState("");
  const [currentChallenges, setCurrentChallenges] = useState("");
  const [expectedOutcome, setExpectedOutcome] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [expectedStartDate, setExpectedStartDate] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] = useState("Email & WhatsApp");

  // Step 6: Attachments & Consent
  const [attachments, setAttachments] = useState<Array<{ name: string; size: string }>>([]);
  const [privacyConsent, setPrivacyConsent] = useState(true);
  const [contactPermission, setContactPermission] = useState(true);
  const [ndaRequested, setNdaRequested] = useState(false);

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSubmission, setSubmittedSubmission] = useState<CentralFormSubmission | null>(null);
  const [copiedRef, setCopiedRef] = useState(false);

  // Toggle Sector
  const toggleSector = (s: ConsultationSectorOption) => {
    setSelectedSectors((prev) => {
      if (prev.includes(s)) {
        if (prev.length === 1) return prev; // Keep at least one
        return prev.filter((item) => item !== s);
      }
      return [...prev, s];
    });
  };

  // Toggle Purpose
  const togglePurpose = (p: string) => {
    setPurposes((prev) => {
      if (prev.includes(p)) {
        return prev.filter((item) => item !== p);
      }
      return [...prev, p];
    });
  };

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

  // Validation
  const validateStep = (currentStep: number): boolean => {
    if (currentStep === 1) {
      return !!fullName.trim() && !!email.trim() && email.includes("@") && !!phone.trim();
    }
    if (currentStep === 2) {
      return selectedSectors.length > 0;
    }
    if (currentStep === 3) {
      return purposes.length > 0;
    }
    if (currentStep === 5) {
      return !!detailedDescription.trim();
    }
    if (currentStep === 6) {
      return privacyConsent && contactPermission;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;
    setIsSubmitting(true);

    const primarySector = selectedSectors.length === 1 ? selectedSectors[0] : "multi";

    const submissionData = {
      formType: "free_consultation" as const,
      formTitleAr: `طلب استشارة مجانية (${selectedSectors.join(", ")})`,
      formTitleEn: `Free Consultation Request (${selectedSectors.join(", ")})`,
      sector: primarySector as any,
      selectedSectors,
      applicant: {
        fullName,
        company,
        jobTitle,
        country,
        city,
        email,
        phone,
        website,
        linkedin,
      },
      details: {
        consultationFeePolicy: "100% Free of Charge — No Consultation Fees",
        selectedSectors: selectedSectors.join(", "),
        consultationPurposes: purposes.join(", "),
        detailedDescription,
        mainObjectives,
        currentChallenges,
        expectedOutcome,
        estimatedBudget: estimatedBudget || "Not Specified",
        expectedStartDate: expectedStartDate || "Immediate / Q1",
        preferredContactMethod,
        ndaRequested: ndaRequested ? "Yes - Official NDA Requested" : "Standard Privacy Agreement",
        uploadedAttachments: attachments.map((a) => a.name).join(", ") || "None",
        // Conditional Sector Data
        ...(selectedSectors.includes("construction") && {
          construction_ProjectType: conProjectType,
          construction_Location: conProjectLocation,
          construction_PropertyType: conPropertyType,
          construction_Scale: conProjectScale,
          construction_Stage: conCurrentStage,
          construction_RequiredService: conRequiredService,
        }),
        ...(selectedSectors.includes("garment") && {
          apparel_Category: garCategory,
          apparel_TargetMarket: garTargetMarket,
          apparel_EstimatedQty: garEstimatedQty,
          apparel_FabricSpecs: garFabricSpecs,
          apparel_ManufacturingModel: garMfgModel,
          apparel_SampleAvailability: garSampleAvailable,
        }),
        ...(selectedSectors.includes("environmental") && {
          sustainability_ProjectType: envProjectType,
          sustainability_FacilityType: envFacilityType,
          sustainability_Challenge: envChallenge,
          sustainability_Capacity: envCapacity,
          sustainability_RequiredSolution: envRequiredSolution,
        }),
        ...(selectedSectors.includes("food") && {
          food_Category: foodCategory,
          food_ProductName: foodProductName,
          food_RequiredQty: foodRequiredQty,
          food_Packaging: foodPackaging,
          food_DestinationMarket: foodDestination,
        }),
      },
    };

    try {
      const res = await submitCentralForm(submissionData);
      if (res.success) {
        setSubmittedSubmission(res.submission);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyRefCode = () => {
    if (submittedSubmission) {
      navigator.clipboard.writeText(submittedSubmission.referenceCode);
      setCopiedRef(true);
      setTimeout(() => setCopiedRef(false), 2000);
    }
  };

  return (
    <div className="w-full pb-24">
      {/* 1. Header / Hero Section (Apple-inspired Glassmorphism) */}
      <section className="site-container pt-10 pb-4">
        <div className="interactive-card glass-box-interactive group overflow-hidden rounded-3xl border border-white/40 bg-background/70 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5 text-start">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "منظومة الاستشارات المجانية المعتمدة" : "Centralized Free Consultation System"}</span>
            </div>

            <h1 className="font-head text-2xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight leading-tight text-start transition-colors duration-300 group-hover:text-brand-green-text">
              {ar ? "طلب استشارة مجانية" : "Request a Free Consultation"}
            </h1>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground font-sans text-start">
              {ar
                ? "شاركنا تفاصيل احتياجات أعمالك أو مشروعك أو فرصتك الاستثمارية، وسيقوم مستشار القطاع المعني بمراجعة طلبك والتواصل معك لمناقشة الخطوات القادمة."
                : "Tell us about your business needs, project, or opportunity. Our relevant sector specialist will review your inquiry and contact you to discuss the next steps."}
            </p>

            {/* Mandatory Business Policy Notice (Exact Corporate Copy) */}
            <div className="mt-6 p-4 rounded-2xl bg-brand-green/10 border border-brand-green/25 backdrop-blur-md text-xs sm:text-sm text-foreground/90 leading-relaxed font-medium flex items-center gap-3 text-start transition-all duration-300 group-hover:bg-brand-green/15 group-hover:border-brand-green/35">
              <CheckCircle2 className="size-5 text-brand-green shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <p className="text-start">
                {ar
                  ? CORPORATE_IDENTITY.freeConsultationPolicy.ar
                  : CORPORATE_IDENTITY.freeConsultationPolicy.en}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Grid: Official Contact Info + Multi-Step Form */}
      <section className="site-container mt-6">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <ContactDirectorySidebar ar={ar} />
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/20 bg-card/75 p-6 sm:p-10 lg:p-12 backdrop-blur-2xl shadow-2xl">
          {/* Submission Success Screen */}
          {submittedSubmission ? (
            <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="size-20 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto shadow-lg shadow-brand-green/20">
                <CheckCircle2 className="size-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-brand-green uppercase tracking-wider">
                  {ar ? "تم تأكيد الاستلام بنجاح" : "Consultation Request Logged"}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                  {ar ? "شكرًا لتواصلكم مع مجموعة سامي بن عياد" : "Thank You for Contacting SAMI BIN AYYAD GROUP"}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground max-w-lg mx-auto leading-relaxed">
                  {ar
                    ? "تم تسجيل طلب استشارتك المجانية بنجاح وتوجيهه إلى فريق الخبراء المختص في القطاع المحدد، مع إشعار مباشر لبريد إدارة المجموعة (info@sami-trade.com)."
                    : "Your free consultation request has been successfully received and routed to our relevant sector specialist desk with direct notification sent to info@sami-trade.com."}
                </p>
              </div>

              {/* Reference Code Card */}
              <div className="p-5 rounded-2xl bg-secondary/80 border border-border inline-flex flex-col sm:flex-row items-center gap-4 mx-auto shadow-inner">
                <div className="text-start">
                  <span className="text-[10px] uppercase font-bold text-muted-foreground block">
                    {ar ? "الرقم المرجعي للاستشارة:" : "Your Inquiry Reference:"}
                  </span>
                  <span className="text-base sm:text-lg font-mono font-black text-foreground">
                    {submittedSubmission.referenceCode}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyRefCode}
                  className="px-3 py-1.5 rounded-xl bg-background border border-border text-xs font-bold text-foreground hover:text-brand-green flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Copy className="size-3.5" />
                  <span>{copiedRef ? (ar ? "تم النسخ!" : "Copied!") : ar ? "نسخ الرقم" : "Copy Ref"}</span>
                </button>
              </div>

              {/* Direct Follow-up Actions */}
              <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={buildOwnerWhatsAppFollowupUrl(submittedSubmission, ar)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full !bg-[#25D366] text-white font-bold text-xs sm:text-sm shadow-lg hover:brightness-105 transition-all"
                >
                  <MessageCircle className="size-4" />
                  <span>{ar ? "متابعة فورية عبر الواتساب" : "Instant WhatsApp Follow-up"}</span>
                  <ExternalLink className="size-3.5" />
                </a>

                <Button asChild variant="outline" className="rounded-full text-xs sm:text-sm px-6 py-3">
                  <Link to="/">
                    {ar ? "العودة للرئيسية" : "Return to Home"}
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Stepper Bar */}
              <div className="border-b border-border/60 pb-6">
                <div className="flex items-center justify-between text-xs font-bold mb-3">
                  <span className="text-brand-green flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                    <span>
                      {ar ? `الخطوة ${step} من ${totalSteps}` : `Step ${step} of ${totalSteps}`}
                    </span>
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {step === 1 && (ar ? "بيانات التواصل" : "Contact Details")}
                    {step === 2 && (ar ? "اختيار القطاعات" : "Sector Selection")}
                    {step === 3 && (ar ? "الهدف من الاستشارة" : "Consultation Purpose")}
                    {step === 4 && (ar ? "متطلبات القطاع" : "Sector Requirements")}
                    {step === 5 && (ar ? "تفاصيل المشروع" : "Project Details")}
                    {step === 6 && (ar ? "المرفقات والموافقة" : "Attachments & Consent")}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-brand-green to-brand-orange transition-all duration-300"
                    style={{ width: `${(step / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* STEP 1: CONTACT INFORMATION */}
              {step === 1 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 1: بيانات الاتصال والمسؤول" : "Step 1: Contact Information"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "يرجى إدخال بياناتك بدقة لتوجيه الاستشارة والتواصل المهني المباشر." : "Please provide your corporate details for tailored advisory routing."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الاسم الكامل *" : "Full Name *"}</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={ar ? "الاسم الثلاثي" : "Your full name"}
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الشركة / المؤسسة" : "Company / Organization"}</label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={ar ? "اسم الشركة أو الجهة" : "Entity name"}
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "المسمى الوظيفي" : "Job Title"}</label>
                      <input
                        type="text"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                        placeholder={ar ? "الرئيس التنفيذي، مدير مشتريات..." : "Managing Director, Procurement Head..."}
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "البريد الإلكتروني المؤسسي *" : "Business Email *"}</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="corporate@domain.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "رقم الهاتف / الواتساب مع كود الدولة *" : "Phone Number with Country Code *"}</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 100 000 0000"
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الدولة والمدينة *" : "Country & City *"}</label>
                      <input
                        type="text"
                        required
                        value={city ? `${city}, ${country}` : country}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder={ar ? "القاهرة، مصر" : "Cairo, Egypt"}
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الموقع الإلكتروني (اختياري)" : "Website (Optional)"}</label>
                      <input
                        type="url"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="https://company.com"
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "رابط لينكد إن (اختياري)" : "LinkedIn Profile (Optional)"}</label>
                      <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        placeholder="https://linkedin.com/in/..."
                        className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: MULTI-SECTOR SELECTION */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 2: اختيار القطاعات المطلوبة للاستشارة" : "Step 2: Sector Selection"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "يمكنك اختيار قطاع واحد أو عدة قطاعات في نفس الطلب دون الحاجة لإعادة التقديم." : "Select one or more sectors. Relevant conditional fields will adapt automatically."}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Construction */}
                    <div
                      onClick={() => toggleSector("construction")}
                      className={cn(
                        "p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5",
                        selectedSectors.includes("construction")
                          ? "!border-brand-green !bg-brand-green/10 shadow-md ring-1 ring-brand-green/40"
                          : "border-border bg-secondary/40 hover:bg-secondary/80"
                      )}
                    >
                      <div className={cn("p-2.5 rounded-xl shrink-0", selectedSectors.includes("construction") ? "bg-brand-green text-white" : "bg-secondary text-foreground")}>
                        <Building2 className="size-5" />
                      </div>
                      <div className="space-y-1 text-start">
                        <div className="text-sm font-bold text-foreground">{ar ? "المقاولات والتطوير العقاري" : "Construction & Real Estate"}</div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{ar ? "مقاولات عامة، تشطيبات، MEP، واستشارات عقارية." : "General contracting, MEP, fit-out & asset advisory."}</p>
                      </div>
                    </div>

                    {/* Apparel */}
                    <div
                      onClick={() => toggleSector("garment")}
                      className={cn(
                        "p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5",
                        selectedSectors.includes("garment")
                          ? "!border-brand-green !bg-brand-green/10 shadow-md ring-1 ring-brand-green/40"
                          : "border-border bg-secondary/40 hover:bg-secondary/80"
                      )}
                    >
                      <div className={cn("p-2.5 rounded-xl shrink-0", selectedSectors.includes("garment") ? "bg-brand-green text-white" : "bg-secondary text-foreground")}>
                        <Shirt className="size-5" />
                      </div>
                      <div className="space-y-1 text-start">
                        <div className="text-sm font-bold text-foreground">{ar ? "تصنيع الملابس والمنسوجات" : "Apparel & Manufacturing"}</div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{ar ? "تصنيع تعاقدي، ماركات خاصة، وتوريد تصديري." : "Contract manufacturing, private label & OEM/FOB."}</p>
                      </div>
                    </div>

                    {/* Sustainability */}
                    <div
                      onClick={() => toggleSector("environmental")}
                      className={cn(
                        "p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5",
                        selectedSectors.includes("environmental")
                          ? "!border-brand-green !bg-brand-green/10 shadow-md ring-1 ring-brand-green/40"
                          : "border-border bg-secondary/40 hover:bg-secondary/80"
                      )}
                    >
                      <div className={cn("p-2.5 rounded-xl shrink-0", selectedSectors.includes("environmental") ? "bg-brand-green text-white" : "bg-secondary text-foreground")}>
                        <Leaf className="size-5" />
                      </div>
                      <div className="space-y-1 text-start">
                        <div className="text-sm font-bold text-foreground">{ar ? "البيئة المستدامة والطاقة النظيفة" : "Sustainability & Environment"}</div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{ar ? "طاقة شمسية صناعية، تدوير مخلفات، ومعالجة مياه." : "C&I solar, circular waste, and effluent recycling."}</p>
                      </div>
                    </div>

                    {/* Food */}
                    <div
                      onClick={() => toggleSector("food")}
                      className={cn(
                        "p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-start gap-3.5",
                        selectedSectors.includes("food")
                          ? "!border-brand-green !bg-brand-green/10 shadow-md ring-1 ring-brand-green/40"
                          : "border-border bg-secondary/40 hover:bg-secondary/80"
                      )}
                    >
                      <div className={cn("p-2.5 rounded-xl shrink-0", selectedSectors.includes("food") ? "bg-brand-green text-white" : "bg-secondary text-foreground")}>
                        <Wheat className="size-5" />
                      </div>
                      <div className="space-y-1 text-start">
                        <div className="text-sm font-bold text-foreground">{ar ? "المنتجات الطبيعية والغذائية" : "Food & Natural Products"}</div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed">{ar ? "تمور مصرية، زيت زيتون، أعشاب، وتوريد جملة." : "Egyptian dates, olive oil, herbs & international supply."}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: CONSULTATION PURPOSE */}
              {step === 3 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 3: أهداف الاستشارة المطلوبة" : "Step 3: Consultation Purpose"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "حدد هدفًا أو أكثر لمساعدة الفريق المختص في تحضير ملف الاستشارة المناسب لك." : "Choose your primary consultation objectives."}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[
                      { en: "Initial Business Consultation", ar: "استشارة أعمال أولية" },
                      { en: "Technical Consultation", ar: "استشارة فنية متخصصة" },
                      { en: "Commercial Consultation", ar: "استشارة تجارية وتسويقية" },
                      { en: "Project Assessment", ar: "تقييم ودراسة مشروع" },
                      { en: "Product Sourcing", ar: "توريد وتأمين منتجات" },
                      { en: "Manufacturing", ar: "تصنيع وتشغيل تعاقدي" },
                      { en: "Supply & Procurement", ar: "مشتريات ومناقصات" },
                      { en: "Request a Quotation", ar: "طلب عرض سعر رسمي" },
                      { en: "Investment Opportunity", ar: "فرصة استثمارية" },
                      { en: "Joint Venture", ar: "تحالف / شركة مشتركة" },
                      { en: "Strategic Partnership", ar: "شراكة استراتيجية" },
                      { en: "Market Entry", ar: "دخول أسواق إقليمية" },
                    ].map((item) => {
                      const isSelected = purposes.includes(item.en);
                      return (
                        <div
                          key={item.en}
                          onClick={() => togglePurpose(item.en)}
                          className={cn(
                            "p-3 rounded-xl border text-start cursor-pointer text-xs font-bold transition-all",
                            isSelected
                              ? "!border-brand-green !bg-brand-green !text-white shadow-xs"
                              : "border-border bg-secondary/60 text-foreground hover:bg-secondary/90"
                          )}
                        >
                          {ar ? item.ar : item.en}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 4: DYNAMIC SECTOR REQUIREMENTS */}
              {step === 4 && (
                <div className="space-y-8 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 4: متطلبات القطاعات المختارة" : "Step 4: Sector-Specific Requirements"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "الحقول أدناه تظهر تلقائيًا حسب القطاعات التي قمت بتحديدها." : "Fields are conditionally displayed for your selected sectors."}
                    </p>
                  </div>

                  {/* Construction Fields */}
                  {selectedSectors.includes("construction") && (
                    <div className="p-6 rounded-2xl bg-secondary/40 border border-border space-y-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-green">
                        <Building2 className="size-4" />
                        <span>{ar ? "متطلبات قطاع المقاولات والتطوير العقاري" : "Construction & Real Estate Requirements"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "نوع المشروع" : "Project Type"}</label>
                          <select
                            value={conProjectType}
                            onChange={(e) => setConProjectType(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          >
                            <option value="General Contracting">General Contracting</option>
                            <option value="Real Estate Development">Real Estate Development</option>
                            <option value="Residential Projects">Residential Projects</option>
                            <option value="Commercial Projects">Commercial Projects</option>
                            <option value="Industrial Projects">Industrial Projects</option>
                            <option value="Fit-Out & Finishing">Fit-Out & Finishing</option>
                            <option value="Asset Management">Asset Management</option>
                            <option value="Brokerage & Advisory">Brokerage & Advisory</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "موقع المشروع" : "Project Location"}</label>
                          <input
                            type="text"
                            value={conProjectLocation}
                            onChange={(e) => setConProjectLocation(e.target.value)}
                            placeholder={ar ? "المدينة، المنطقة" : "City / Governorate"}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "مرحلة المشروع الحالية" : "Current Project Stage"}</label>
                          <input
                            type="text"
                            value={conCurrentStage}
                            onChange={(e) => setConCurrentStage(e.target.value)}
                            placeholder="Planning, Foundation, Finishing..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "المساحة أو الحجم التقريبي" : "Project Scale / Area"}</label>
                          <input
                            type="text"
                            value={conProjectScale}
                            onChange={(e) => setConProjectScale(e.target.value)}
                            placeholder="e.g. 5,000 sq.m / 10 Floors"
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Apparel Fields */}
                  {selectedSectors.includes("garment") && (
                    <div className="p-6 rounded-2xl bg-secondary/40 border border-border space-y-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-green">
                        <Shirt className="size-4" />
                        <span>{ar ? "متطلبات قطاع الملابس والمنسوجات" : "Apparel & Manufacturing Requirements"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "فئة المنتج" : "Product Category"}</label>
                          <select
                            value={garCategory}
                            onChange={(e) => setGarCategory(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          >
                            <option value="Women’s Wear">Women’s Wear</option>
                            <option value="Kidswear / Babywear">Kidswear / Babywear</option>
                            <option value="Sportswear">Sportswear</option>
                            <option value="Casualwear">Casualwear</option>
                            <option value="Homewear / Loungewear">Homewear / Loungewear</option>
                            <option value="Underwear / Basics">Underwear / Basics</option>
                            <option value="Modest Wear / Abayas">Modest Wear / Abayas</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "نموذج التصنيع" : "Manufacturing Model"}</label>
                          <select
                            value={garMfgModel}
                            onChange={(e) => setGarMfgModel(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          >
                            <option value="FOB">FOB (Full Package Delivery)</option>
                            <option value="CMT">CMT (Cut, Make, Trim)</option>
                            <option value="CM">CM (Cut & Make)</option>
                            <option value="OEM">OEM / Private Label</option>
                            <option value="ODM">ODM (Design & Produce)</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "الكمية التقديرية" : "Estimated Quantity"}</label>
                          <input
                            type="text"
                            value={garEstimatedQty}
                            onChange={(e) => setGarEstimatedQty(e.target.value)}
                            placeholder="e.g. 5,000 pcs / style"
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "جاهزية العينة الفنية" : "Sample Availability"}</label>
                          <input
                            type="text"
                            value={garSampleAvailable}
                            onChange={(e) => setGarSampleAvailable(e.target.value)}
                            placeholder="Tech pack ready, physical sample..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Sustainability Fields */}
                  {selectedSectors.includes("environmental") && (
                    <div className="p-6 rounded-2xl bg-secondary/40 border border-border space-y-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-green">
                        <Leaf className="size-4" />
                        <span>{ar ? "متطلبات قطاع البيئة والاستدامة" : "Sustainability & Environmental Requirements"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "نوع المشروع البيئي" : "Project Type"}</label>
                          <select
                            value={envProjectType}
                            onChange={(e) => setEnvProjectType(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          >
                            <option value="Industrial Rooftop Solar PV (C&I)">Industrial Rooftop Solar PV (C&I)</option>
                            <option value="Industrial Wastewater Recycling (ZLD)">Industrial Wastewater Recycling (ZLD)</option>
                            <option value="Circular Waste Management & RDF">Circular Waste Management & RDF</option>
                            <option value="Environmental Compliance & Audit">Environmental Compliance & Audit</option>
                            <option value="EPR Packaging Scheme">EPR Packaging Scheme</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "نوع المنشأة / المصنع" : "Facility Type"}</label>
                          <input
                            type="text"
                            value={envFacilityType}
                            onChange={(e) => setEnvFacilityType(e.target.value)}
                            placeholder="Textile mill, food plant, warehouse..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div className="sm:col-span-2">
                          <label className="font-bold text-foreground block mb-1">{ar ? "التحدي البيئي أو المتطلب التشغيلي" : "Environmental Challenge / Goal"}</label>
                          <input
                            type="text"
                            value={envChallenge}
                            onChange={(e) => setEnvChallenge(e.target.value)}
                            placeholder="High electricity bills, wastewater discharge limits..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Food Fields */}
                  {selectedSectors.includes("food") && (
                    <div className="p-6 rounded-2xl bg-secondary/40 border border-border space-y-4">
                      <div className="flex items-center gap-2 text-sm font-bold text-brand-green">
                        <Wheat className="size-4" />
                        <span>{ar ? "متطلبات قطاع الأغذية والمنتجات الطبيعية" : "Food & Natural Products Requirements"}</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "السلعة / المنتج الغذائي" : "Commodity / Product"}</label>
                          <select
                            value={foodCategory}
                            onChange={(e) => setFoodCategory(e.target.value)}
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          >
                            <option value="Dates & Date Products">Dates & Date Products (Siwi, Medjool)</option>
                            <option value="Olives & Olive Oil">Extra Virgin Olive Oil & Table Olives</option>
                            <option value="Honey & Bee Products">Natural Honey & Bee Products</option>
                            <option value="Herbs & Spices">Dried Herbs & Spices</option>
                            <option value="Agricultural Commodities">Agricultural Commodities</option>
                          </select>
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "سوق الوصول المستهدف" : "Destination Market"}</label>
                          <input
                            type="text"
                            value={foodDestination}
                            onChange={(e) => setFoodDestination(e.target.value)}
                            placeholder="Europe, Turkey, GCC, Asia..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "الكمية المطلوبة" : "Required Quantity"}</label>
                          <input
                            type="text"
                            value={foodRequiredQty}
                            onChange={(e) => setFoodRequiredQty(e.target.value)}
                            placeholder="e.g. 2 x 40ft Containers (50 MT)"
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                        <div>
                          <label className="font-bold text-foreground block mb-1">{ar ? "مواصفات التعبئة والتغليف" : "Packaging Requirements"}</label>
                          <input
                            type="text"
                            value={foodPackaging}
                            onChange={(e) => setFoodPackaging(e.target.value)}
                            placeholder="Bulk cartons, retail packs..."
                            className="w-full px-3 py-2 rounded-xl bg-background border border-border"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* STEP 5: BUSINESS REQUIREMENTS & OBJECTIVES */}
              {step === 5 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 5: تفاصيل المشروع والأهداف التجارية" : "Step 5: Business Requirements & Objectives"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "اشرح رؤيتك ومتطلباتك بدقة ليتمكن المستشار المختص من إعداد الرد المناسب." : "Provide project context, expected milestones, and timeline."}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الوصف التفصيلي لطلب الاستشارة *" : "Detailed Project / Inquiry Description *"}</label>
                      <textarea
                        required
                        rows={4}
                        value={detailedDescription}
                        onChange={(e) => setDetailedDescription(e.target.value)}
                        placeholder={ar ? "اكتب تفاصيل مشروعك، أهدافك، أو الاستفسارات التي تود مناقشتها مع مستشارنا..." : "Describe your project scope, requirements, or specific guidance needed..."}
                        className="w-full px-4 py-3 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "النتائج والمخرجات المتوقعة" : "Expected Outcome"}</label>
                        <input
                          type="text"
                          value={expectedOutcome}
                          onChange={(e) => setExpectedOutcome(e.target.value)}
                          placeholder="Cost reduction, partner sourcing, turnkey build..."
                          className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "الميزانية التقديرية (اختياري)" : "Estimated Budget (Optional)"}</label>
                        <input
                          type="text"
                          value={estimatedBudget}
                          onChange={(e) => setEstimatedBudget(e.target.value)}
                          placeholder="e.g. $100K - $500K / Open for study"
                          className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "التاريخ المستهدف للبدء" : "Target Start Date"}</label>
                        <input
                          type="text"
                          value={expectedStartDate}
                          onChange={(e) => setExpectedStartDate(e.target.value)}
                          placeholder="Immediate, Q2 2026, 6 Months..."
                          className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold text-foreground block mb-1.5">{ar ? "طريقة التواصل المفضلة" : "Preferred Contact Method"}</label>
                        <select
                          value={preferredContactMethod}
                          onChange={(e) => setPreferredContactMethod(e.target.value)}
                          className="w-full px-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                        >
                          <option value="Email & WhatsApp">Email & WhatsApp</option>
                          <option value="Direct Phone Call">Direct Phone Call</option>
                          <option value="Virtual Video Meeting (Google Meet)">Virtual Video Meeting (Google Meet)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 6: ATTACHMENTS & CONSENT */}
              {step === 6 && (
                <div className="space-y-6 animate-in fade-in duration-200">
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {ar ? "الخطوة 6: المرفقات والموافقة وسياسة السرية" : "Step 6: Attachments & Final Consent"}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {ar ? "يمكنك إرفاق ملفات المواصفات الفنية أو مذكرات المشروع، وتأكيد الموافقة." : "Attach project briefs or technical specs, and confirm consent."}
                    </p>
                  </div>

                  {/* File Upload Box */}
                  <div className="p-6 rounded-2xl border-2 border-dashed border-border bg-secondary/30 text-center space-y-3">
                    <div className="size-10 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                      <Upload className="size-5" />
                    </div>
                    <div>
                      <label htmlFor="consultation-files" className="cursor-pointer text-xs font-bold text-brand-green hover:underline">
                        {ar ? "انقر لاختيار ملفات (PDF, DOCX, XLSX, PNG)" : "Click to select files (PDF, DOCX, XLSX, PNG)"}
                      </label>
                      <input
                        id="consultation-files"
                        type="file"
                        multiple
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                      <p className="text-[10px] text-muted-foreground mt-1">
                        {ar ? "الحد الأقصى لكل ملف: 15 ميجابايت" : "Max file size: 15 MB per file"}
                      </p>
                    </div>

                    {attachments.length > 0 && (
                      <div className="pt-2 flex flex-wrap gap-2 justify-center">
                        {attachments.map((file, idx) => (
                          <div
                            key={idx}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-xl bg-background border border-border text-xs font-mono"
                          >
                            <span>{file.name}</span>
                            <span className="text-[10px] text-muted-foreground">({file.size})</span>
                            <button
                              type="button"
                              onClick={() => removeAttachment(idx)}
                              className="text-red-500 hover:text-red-700 p-0.5"
                            >
                              <X className="size-3" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Consent & NDA Checkboxes */}
                  <div className="space-y-3 p-5 rounded-2xl bg-secondary/50 border border-border text-xs">
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="c-privacy"
                        required
                        checked={privacyConsent}
                        onChange={(e) => setPrivacyConsent(e.target.checked)}
                        className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green cursor-pointer"
                      />
                      <label htmlFor="c-privacy" className="text-muted-foreground leading-relaxed cursor-pointer">
                        {ar
                          ? "أوافق على سياسة الخصوصية واستخدام البيانات لمراجعة ومعالجة طلب الاستشارة من قبل المختصين في مجموعة سامي بن عياد."
                          : "I agree to the privacy policy and consent to the processing of submitted data by SBA Group specialists."}
                      </label>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="c-permission"
                        required
                        checked={contactPermission}
                        onChange={(e) => setContactPermission(e.target.checked)}
                        className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green cursor-pointer"
                      />
                      <label htmlFor="c-permission" className="text-muted-foreground leading-relaxed cursor-pointer">
                        {ar
                          ? "أمنح الإذن لفريق مجموعة سامي بن عياد بالتواصل معي عبر البريد الإلكتروني أو الهاتف لمناقشة الطلب."
                          : "I authorize SAMI BIN AYYAD GROUP to contact me via email or phone regarding this consultation."}
                      </label>
                    </div>

                    <div className="flex items-start gap-2.5 pt-2 border-t border-border/60">
                      <input
                        type="checkbox"
                        id="c-nda"
                        checked={ndaRequested}
                        onChange={(e) => setNdaRequested(e.target.checked)}
                        className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green cursor-pointer"
                      />
                      <label htmlFor="c-nda" className="text-foreground font-semibold leading-relaxed cursor-pointer flex items-center gap-1.5">
                        <Lock className="size-3.5 text-amber-500 shrink-0" />
                        <span>
                          {ar
                            ? "أطلب توقيع اتفاقية الحفاظ على سرية المعلومات (NDA) قبل بدء تداول المستندات الفنية المتخصصة."
                            : "I request an executed Non-Disclosure Agreement (NDA) prior to exchanging sensitive technical project files."}
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Actions */}
              <div className="pt-6 border-t border-border/60 flex items-center justify-between gap-4">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((p) => Math.max(1, p - 1))}
                    className="rounded-full px-6 text-xs font-bold"
                  >
                    <ArrowLeft className="size-4 rtl:rotate-180 me-1.5" />
                    <span>{ar ? "السابق" : "Previous"}</span>
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={() => {
                      if (validateStep(step)) {
                        setStep((p) => Math.min(totalSteps, p + 1));
                      }
                    }}
                    className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold px-8 shadow-md"
                  >
                    <span>{ar ? "المتابعة للخطوة التالية" : "Continue to Next Step"}</span>
                    <ArrowRight className="size-4 rtl:rotate-180 ms-1.5" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting || !privacyConsent || !contactPermission}
                    className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs sm:text-sm font-bold px-10 py-3 shadow-xl shadow-brand-green/20"
                  >
                    {isSubmitting ? (
                      ar ? "جاري الإرسال والتوثيق..." : "Submitting to info@sami-trade.com..."
                    ) : (
                      <>
                        <Sparkles className="size-4 me-1.5" />
                        <span>{ar ? "إرسال طلب الاستشارة المجانية" : "Submit Free Consultation Request"}</span>
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

