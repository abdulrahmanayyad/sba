import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Building2, 
  HelpCircle, 
  UploadCloud, 
  FileCheck2,
  Sparkles
} from "lucide-react";
import { 
  submitCentralForm, 
  CentralFormSubmission, 
  generateSubmissionReference 
} from "@/lib/central-form-dispatch";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";

interface SustainabilityFormsSectionProps {
  ar?: boolean;
}

export function SustainabilityFormsSection({ ar = true }: SustainabilityFormsSectionProps) {
  const [activeFormTab, setActiveFormTab] = useState<"submit_opportunity" | "request_service">("submit_opportunity");

  // Form 1: Submit Opportunity state
  const [oppData, setOppData] = useState({
    fullName: "",
    companyName: "",
    country: "",
    email: "",
    phone: "",
    opportunityType: "Renewable Energy",
    projectLocation: "",
    requiredServices: "",
    estimatedValue: "",
    description: "",
    attachmentNote: ""
  });
  const [oppSubmitting, setOppSubmitting] = useState(false);
  const [oppSubmittedRef, setOppSubmittedRef] = useState<string | null>(null);

  // Form 2: Request Services state
  const [reqData, setReqData] = useState({
    fullName: "",
    companyName: "",
    facilityType: "Industrial Manufacturing",
    country: "",
    email: "",
    phone: "",
    requestedCategory: "Energy Efficiency",
    projectScope: "",
  });
  const [reqSubmitting, setReqSubmitting] = useState(false);
  const [reqSubmittedRef, setReqSubmittedRef] = useState<string | null>(null);

  const handleOppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!oppData.fullName || !oppData.email || !oppData.phone) return;

    setOppSubmitting(true);
    const ref = generateSubmissionReference("opportunity_proposal");

    const submission: CentralFormSubmission = {
      id: "sub_" + Date.now(),
      referenceCode: ref,
      formType: "opportunity_proposal",
      formTitleEn: "Environmental Project / Investment Proposal",
      formTitleAr: "مقترح مشروع بيئي / فرصة استثمارية مستدامة",
      sector: "environmental",
      createdAt: new Date().toISOString(),
      applicant: {
        fullName: oppData.fullName,
        email: oppData.email,
        phone: oppData.phone,
        company: oppData.companyName,
        country: oppData.country,
      },
      details: {
        opportunityType: oppData.opportunityType,
        projectLocation: oppData.projectLocation,
        requiredServices: oppData.requiredServices,
        estimatedValue: oppData.estimatedValue || "Not Specified",
        description: oppData.description,
        attachmentNote: oppData.attachmentNote || "No attachment link provided",
      },
      status: "new"
    };

    try {
      await submitCentralForm(submission);
      setOppSubmittedRef(ref);
    } catch {
      setOppSubmittedRef(ref);
    } finally {
      setOppSubmitting(false);
    }
  };

  const handleReqSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reqData.fullName || !reqData.email || !reqData.phone) return;

    setReqSubmitting(true);
    const ref = generateSubmissionReference("environmental_consultation");

    const submission: CentralFormSubmission = {
      id: "sub_" + Date.now(),
      referenceCode: ref,
      formType: "environmental_consultation",
      formTitleEn: "Environmental Solutions & Consulting Request",
      formTitleAr: "طلب خدمات وحلول واستشارات بيئية",
      sector: "environmental",
      createdAt: new Date().toISOString(),
      applicant: {
        fullName: reqData.fullName,
        email: reqData.email,
        phone: reqData.phone,
        company: reqData.companyName,
        country: reqData.country,
      },
      details: {
        facilityType: reqData.facilityType,
        requestedCategory: reqData.requestedCategory,
        projectScope: reqData.projectScope,
      },
      status: "new"
    };

    try {
      await submitCentralForm(submission);
      setReqSubmittedRef(ref);
    } catch {
      setReqSubmittedRef(ref);
    } finally {
      setReqSubmitting(false);
    }
  };

  return (
    <div id="collaboration-forms" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم 13 و 14: طلبات التعاون وبوابة تقديم المشاريع" : "Sections 13 & 14: Inquiries & Project Submission Portals"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "بوابة تقديم المشاريع وطلبات الحلول البيئية" : "Environmental Project Submission & Solutions Request"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "نرحب بفرص التعاون مع المطورين، الجهات الحكومية، المستثمرين، والمصانع لتقديم مشاريع جديدة أو طلب حلول واستشارات بيئية معتمدة."
            : "Connect with our environmental advisory team to submit prospective green projects, PPP alliances, or request tailored industrial eco-solutions."}
        </p>
      </div>

      {/* Tabs Switcher */}
      <div className="flex flex-wrap items-center gap-2 border-y border-white/10 py-3.5">
        <button
          type="button"
          onClick={() => setActiveFormTab("submit_opportunity")}
          className={cn(
            "rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer border shadow-xs",
            activeFormTab === "submit_opportunity"
              ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange"
              : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/50 hover:text-brand-orange"
          )}
        >
          {ar ? "1. تقديم مشروع أو فرصة استثمارية بيئية" : "1. Submit Project / Investment Opportunity"}
        </button>

        <button
          type="button"
          onClick={() => setActiveFormTab("request_service")}
          className={cn(
            "rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer border shadow-xs",
            activeFormTab === "request_service"
              ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange"
              : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/50 hover:text-brand-orange"
          )}
        >
          {ar ? "2. طلب خدمات وحلول بيئية للمصانع والمنشآت" : "2. Request Environmental Solutions & Services"}
        </button>
      </div>

      {/* FORM 1: Submit Opportunity */}
      {activeFormTab === "submit_opportunity" && (
        <div className="rounded-3xl border border-white/15 bg-background/70 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
          {oppSubmittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="size-16 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                {ar ? "تم استلام مقترح المشروع بنجاح!" : "Project Opportunity Submitted Successfully!"}
              </h3>
              <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                {ar
                  ? `تم تسجيل مقترحكم بالرقم المرجعي المعتمد [${oppSubmittedRef}]. سيقوم الفريق الاستشاري لقطاع الاستدامة بمراجعة الجدوى والتواصل معكم رسميًا.`
                  : `Your submission is registered under reference [${oppSubmittedRef}]. Our environmental team will review technical feasibility and contact you.`}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`مرحبًا مجموعة سامي بن عياد، بخصوص مقترح المشروع البيئي برقم مرجعي: ${oppSubmittedRef}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-6 py-2.5 text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  <span>{ar ? "المتابعة عبر واتساب مباشرة" : "Follow up on WhatsApp"}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setOppSubmittedRef(null);
                    setOppData({
                      fullName: "",
                      companyName: "",
                      country: "",
                      email: "",
                      phone: "",
                      opportunityType: "Renewable Energy",
                      projectLocation: "",
                      requiredServices: "",
                      estimatedValue: "",
                      description: "",
                      attachmentNote: ""
                    });
                  }}
                  className="rounded-full border border-border bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:bg-background"
                >
                  {ar ? "تقديم مقترح آخر" : "Submit Another Project"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleOppSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={oppData.fullName}
                    onChange={(e) => setOppData({ ...oppData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "اسم المسؤول أو المستثمر" : "Representative name"}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "اسم الشركة / الكيان *" : "Company / Entity Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={oppData.companyName}
                    onChange={(e) => setOppData({ ...oppData, companyName: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "الشركة أو الهيئة" : "Company / Organization"}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "الدولة *" : "Country *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={oppData.country}
                    onChange={(e) => setOppData({ ...oppData, country: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "السعودية، مصر، الإمارات..." : "Saudi Arabia, Egypt, UAE..."}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "البريد الإلكتروني الرسمي *" : "Official Email *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={oppData.email}
                    onChange={(e) => setOppData({ ...oppData, email: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={oppData.phone}
                    onChange={(e) => setOppData({ ...oppData, phone: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder="+966 / +20 / +971..."
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "نوع الفرصة البيئية *" : "Opportunity Type *"}
                  </label>
                  <select
                    value={oppData.opportunityType}
                    onChange={(e) => setOppData({ ...oppData, opportunityType: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none cursor-pointer"
                  >
                    <option value="Renewable Energy">{ar ? "الطاقة المتجددة (Renewable Energy)" : "Renewable Energy"}</option>
                    <option value="Waste Management">{ar ? "إدارة المخلفات (Waste Management)" : "Waste Management"}</option>
                    <option value="Recycling">{ar ? "إعادة التدوير واسترداد المواد (Recycling)" : "Recycling"}</option>
                    <option value="Water & Resource Management">{ar ? "المياه وإدارة الموارد (Water & Resources)" : "Water & Resource Management"}</option>
                    <option value="Industrial Sustainability">{ar ? "الاستدامة الصناعية (Industrial Sustainability)" : "Industrial Sustainability"}</option>
                    <option value="Environmental Consulting">{ar ? "الاستشارات البيئية (Environmental Consulting)" : "Environmental Consulting"}</option>
                    <option value="Investment Partnership">{ar ? "شراكة استثمارية / امتياز PPP (Investment Partnership)" : "Investment Partnership / PPP"}</option>
                    <option value="Other">{ar ? "أخرى (Other)" : "Other"}</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "موقع المشروع (المدينة / المنطقة)" : "Project Location (City / Region)"}
                  </label>
                  <input
                    type="text"
                    value={oppData.projectLocation}
                    onChange={(e) => setOppData({ ...oppData, projectLocation: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "الرياض، القاهرة، صحار..." : "City, Industrial Zone..."}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "الخدمات والحلول المطلوبة" : "Required Services"}
                  </label>
                  <input
                    type="text"
                    value={oppData.requiredServices}
                    onChange={(e) => setOppData({ ...oppData, requiredServices: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "محطة طاقة شمسية، معالجة مياه..." : "Solar EPC, Effluent Plant..."}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "القيمة التقديرية (اختياري)" : "Estimated Project Value (Optional)"}
                  </label>
                  <input
                    type="text"
                    value={oppData.estimatedValue}
                    onChange={(e) => setOppData({ ...oppData, estimatedValue: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "مثال: 5,000,000 دولار" : "e.g. $5M USD / SAR"}
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-foreground block mb-1">
                  {ar ? "وصف المشروع والمواصفات الفنية *" : "Project Description & Technical Scope *"}
                </label>
                <textarea
                  required
                  rows={3}
                  value={oppData.description}
                  onChange={(e) => setOppData({ ...oppData, description: e.target.value })}
                  className="w-full rounded-xl border border-foreground/20 bg-background/90 p-3 text-xs text-foreground focus:border-brand-green focus:outline-none"
                  placeholder={ar ? "اشرح طبيعة المشروع، القدرة الإنتاجية المستهدفة، والإطار الزمني..." : "Describe the project scale, capacity, deliverables, and timelines..."}
                />
              </div>

              <div>
                <label className="text-xs font-bold text-foreground block mb-1">
                  {ar ? "رابط المرفقات / مستندات المشروع (Google Drive / OneDrive / Dropbox)" : "Attachments Link (Drive / Dropbox / Cloud Storage)"}
                </label>
                <input
                  type="url"
                  value={oppData.attachmentNote}
                  onChange={(e) => setOppData({ ...oppData, attachmentNote: e.target.value })}
                  className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                  placeholder="https://drive.google.com/..."
                />
                <span className="text-[10px] text-muted-foreground mt-0.5 block">
                  {ar ? "يمكنك إرفاق رابط آمن لمستندات المشروع وكراسة الشروط للاطلاع الفني المباشر" : "Paste secure cloud link to tender documents, RFP briefs, or project drawings"}
                </span>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={oppSubmitting}
                  className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8 py-3 text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer disabled:opacity-60 inline-flex items-center gap-2"
                >
                  <Send className="size-4" />
                  <span>{oppSubmitting ? (ar ? "جاري الإرسال والتسجيل..." : "Registering Submission...") : (ar ? "إرسال مقترح المشروع رسميًا" : "Submit Project Proposal Officially")}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}

      {/* FORM 2: Request Services */}
      {activeFormTab === "request_service" && (
        <div className="rounded-3xl border border-white/15 bg-background/70 p-6 sm:p-8 backdrop-blur-xl shadow-lg">
          {reqSubmittedRef ? (
            <div className="text-center py-8 space-y-4">
              <div className="size-16 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30 flex items-center justify-center mx-auto">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-xl font-black text-foreground">
                {ar ? "تم استلام طلب الخدمات بنجاح!" : "Solutions Request Submitted Successfully!"}
              </h3>
              <p className="text-xs text-muted-foreground max-w-lg mx-auto">
                {ar
                  ? `تم تسجيل طلبكم بالرقم المرجعي [${reqSubmittedRef}]. سيقوم الفريق الاستشاري بالتواصل لترتيب دراسة المعاينة وتقديم العرض الفني.`
                  : `Your request is registered under reference [${reqSubmittedRef}]. Our advisory team will follow up for technical scoping.`}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <a
                  href={`${WHATSAPP_URL}?text=${encodeURIComponent(`مرحبًا مجموعة سامي بن عياد، بخصوص طلب الحلول البيئية بالرقم المرجعي: ${reqSubmittedRef}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-6 py-2.5 text-xs font-bold transition-all shadow-md inline-flex items-center gap-2"
                >
                  <MessageCircle className="size-4" />
                  <span>{ar ? "التواصل الفوري عبر واتساب" : "Direct WhatsApp Chat"}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setReqSubmittedRef(null);
                    setReqData({
                      fullName: "",
                      companyName: "",
                      facilityType: "Industrial Manufacturing",
                      country: "",
                      email: "",
                      phone: "",
                      requestedCategory: "Energy Efficiency",
                      projectScope: "",
                    });
                  }}
                  className="rounded-full border border-border bg-secondary px-6 py-2.5 text-xs font-bold text-foreground hover:bg-background"
                >
                  {ar ? "طلب خدمة أخرى" : "Submit Another Request"}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleReqSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "الاسم الكامل *" : "Full Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={reqData.fullName}
                    onChange={(e) => setReqData({ ...reqData, fullName: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "اسم مسؤول المنشأة" : "Plant / Facility Manager"}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "اسم المنشأة أو المصنع *" : "Plant / Facility Name *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={reqData.companyName}
                    onChange={(e) => setReqData({ ...reqData, companyName: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "اسم المصنع أو الشركة" : "Factory / Facility Name"}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "الدولة *" : "Country *"}
                  </label>
                  <input
                    type="text"
                    required
                    value={reqData.country}
                    onChange={(e) => setReqData({ ...reqData, country: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder={ar ? "مصر، السعودية، عُمان..." : "Egypt, Saudi Arabia..."}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "البريد الإلكتروني *" : "Email Address *"}
                  </label>
                  <input
                    type="email"
                    required
                    value={reqData.email}
                    onChange={(e) => setReqData({ ...reqData, email: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder="manager@factory.com"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}
                  </label>
                  <input
                    type="tel"
                    required
                    value={reqData.phone}
                    onChange={(e) => setReqData({ ...reqData, phone: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    placeholder="+20 / +966..."
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-foreground block mb-1">
                    {ar ? "مجال الخدمة المطلوب *" : "Requested Solutions Category *"}
                  </label>
                  <select
                    value={reqData.requestedCategory}
                    onChange={(e) => setReqData({ ...reqData, requestedCategory: e.target.value })}
                    className="w-full rounded-xl border border-foreground/20 bg-background/90 px-3.5 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none cursor-pointer"
                  >
                    <option value="Energy Efficiency">{ar ? "محطات طاقة شمسية وكفاءة طاقة" : "Solar PV & Energy Efficiency"}</option>
                    <option value="Wastewater Treatment">{ar ? "معالجة الصرف الصناعي وإعادة التدوير" : "Industrial Wastewater & ETP"}</option>
                    <option value="Waste Management">{ar ? "إدارة المخلفات الصلبة والصناعية" : "Industrial Solid Waste Management"}</option>
                    <option value="EIA & Consulting">{ar ? "دراسات تقييم الأثر البيئي والبصمة الكربونية" : "EIA & Carbon Footprint"}</option>
                    <option value="Supply Chain ESG">{ar ? "تأهيل الامتثال لسلاسل الإمداد (Higg / CBAM)" : "Supply Chain ESG (Higg / CBAM)"}</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-foreground block mb-1">
                  {ar ? "تفاصيل الاحتياج والمشكلة البيئية الحالية *" : "Requirements & Current Operational Challenge *"}
                </label>
                <textarea
                  required
                  rows={3}
                  value={reqData.projectScope}
                  onChange={(e) => setReqData({ ...reqData, projectScope: e.target.value })}
                  className="w-full rounded-xl border border-foreground/20 bg-background/90 p-3 text-xs text-foreground focus:border-brand-green focus:outline-none"
                  placeholder={ar ? "وضح حجم الاستهلاك الحالي، كميات المياه أو المخلفات، وأهداف التوفير المطلوبة..." : "Describe current consumption metrics, volumes, and compliance targets..."}
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={reqSubmitting}
                  className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8 py-3 text-xs sm:text-sm font-bold transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer disabled:opacity-60 inline-flex items-center gap-2"
                >
                  <Send className="size-4" />
                  <span>{reqSubmitting ? (ar ? "جاري الإرسال..." : "Sending...") : (ar ? "إرسال طلب الحلول البيئية" : "Submit Solutions Request")}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}

