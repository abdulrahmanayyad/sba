// Investor & Corporate Data Room (Upgraded Document Center)
// SAMI BIN AYYAD GROUP — Structured Institutional Data Room & Governance Center

import { useState, useMemo, useEffect } from "react";
import {
  Download,
  ExternalLink,
  FileText,
  Filter,
  Globe2,
  Layers,
  Search,
  ShieldCheck,
  Mail,
  Lock,
  Building2,
  FileCheck2,
  CheckCircle2,
  X,
  AlertCircle,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import {
  DATA_ROOM_CATEGORIES,
  DATA_ROOM_ACCESS_LEVELS,
  DATA_ROOM_DOCUMENTS,
  DataRoomDocument,
  DataRoomCategoryKey,
  DataRoomAccessLevel
} from "./downloads-data";
import { submitCentralForm } from "@/lib/central-form-dispatch";
import { cn } from "@/lib/utils";

export function DownloadsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedAccessLevel, setSelectedAccessLevel] = useState<string>("all");
  const [selectedSector, setSelectedSector] = useState<string>("all");

  // Access Request Modal State
  const [requestModalDoc, setRequestModalDoc] = useState<DataRoomDocument | null>(null);
  const [applicantName, setApplicantName] = useState("");
  const [applicantCompany, setApplicantCompany] = useState("");
  const [applicantEmail, setApplicantEmail] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [applicantPurpose, setApplicantPurpose] = useState("");
  const [ndaAccepted, setNdaAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const filteredDocuments = useMemo(() => {
    return DATA_ROOM_DOCUMENTS.filter((doc) => {
      // Category filter
      if (selectedCategory !== "all" && doc.category !== selectedCategory) return false;
      // Access Level filter
      if (selectedAccessLevel !== "all" && doc.accessLevel !== selectedAccessLevel) return false;
      // Sector filter
      if (selectedSector !== "all" && doc.sector !== selectedSector) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = doc.titleEn.toLowerCase().includes(q) || doc.titleAr.toLowerCase().includes(q);
        const matchDesc = doc.descriptionEn.toLowerCase().includes(q) || doc.descriptionAr.toLowerCase().includes(q);
        const matchId = doc.id.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchId) return false;
      }

      return true;
    });
  }, [selectedCategory, selectedAccessLevel, selectedSector, searchQuery]);

  const handleRequestAccess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!requestModalDoc) return;
    setIsSubmitting(true);

    try {
      const res = await submitCentralForm({
        formType: "investor_interest",
        formTitleAr: `طلب تصريح دخول لغرفة البيانات: ${requestModalDoc.titleAr}`,
        formTitleEn: `Data Room Access Request: ${requestModalDoc.titleEn}`,
        sector: requestModalDoc.sector as any,
        applicant: {
          fullName: applicantName,
          company: applicantCompany,
          email: applicantEmail,
          phone: applicantPhone
        },
        details: {
          documentId: requestModalDoc.id,
          documentTitle: requestModalDoc.titleEn,
          accessLevelRequired: requestModalDoc.accessLevel,
          purposeOfReview: applicantPurpose,
          ndaAcknowledged: ndaAccepted ? "Yes - Digital Consent Given" : "Pending",
          submissionSource: "Investor & Corporate Data Room"
        }
      });

      if (res.success) {
        setSubmittedRef(res.referenceCode);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeRequestModal = () => {
    setRequestModalDoc(null);
    setApplicantName("");
    setApplicantCompany("");
    setApplicantEmail("");
    setApplicantPhone("");
    setApplicantPurpose("");
    setNdaAccepted(false);
    setSubmittedRef(null);
  };

  return (
    <div className="w-full pb-24">
      {/* 1. Hero Section (Apple-inspired Glassmorphism) */}
      <section className="relative w-full min-h-[calc(80svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
        <img
          src="/BG/Main Home Page.jpg"
          alt={ar ? "غرفة البيانات المؤسسية والاستثمارية — مجموعة سامي بن عياد" : "Investor & Corporate Data Room — Sami Bin Ayyad Group"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/75 backdrop-blur-[2px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-center py-16 sm:py-24">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-black/60 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-brand-green animate-pulse" />
              <span>
                {ar ? "مجموعة سامي بن عياد · غرفة البيانات المؤسسية والاستثمارية" : "SAMI BIN AYYAD GROUP · Investor & Corporate Data Room"}
              </span>
            </div>

            <h1 className="mt-2 max-w-4xl font-head text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
              {ar
                ? "غرفة البيانات المؤسسية والاستثمارية المعتمدة"
                : "Investor & Corporate Data Room"}
            </h1>

            <p className="mt-4 max-w-3xl text-sm sm:text-base font-normal leading-relaxed text-slate-200 drop-shadow-sm">
              {ar
                ? "منظومة موثقة لإتاحة الوثائق المؤسسية، التقارير المالية، مواصفات القدرات التشغيلية للقطاعات، شهادات الامتثال، ومذكرات الاستثمار المشترك للمستثمرين والشركاء الدوليين وفق مستويات تصريح محكمة."
                : "A certified governance repository providing corporate documents, financial indicators, sector capabilities, compliance records, and joint venture proposals under four secure, role-based access levels."}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                <ShieldCheck className="size-4 text-brand-green" />
                <span>{ar ? "7 فئات وثائق معتمدة" : "7 Certified Categories"}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                <Lock className="size-4 text-amber-400" />
                <span>{ar ? "4 مستويات حماية وتصريح" : "4 Tier Access Control"}</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md">
                <FileCheck2 className="size-4 text-sky-400" />
                <span>{ar ? "بيانات موثقة دون ادعاءات غير مدعومة" : "Strict Verification Protocol"}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Main Content & Data Room Experience */}
      <div className="site-container space-y-12">
        {/* Categories Grid (A to G) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "p-3.5 rounded-2xl border text-start transition-all duration-300 cursor-pointer flex flex-col justify-between",
              selectedCategory === "all"
                ? "!border-brand-green !bg-brand-green !text-white shadow-lg shadow-brand-green/20"
                : "border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.08]"
            )}
          >
            <div className="text-[10px] font-mono opacity-80 uppercase">{ar ? "كافة الفئات" : "ALL"}</div>
            <div className="text-xs font-bold mt-2 leading-snug">{ar ? "جميع الوثائق" : "All Documents"}</div>
          </button>

          {DATA_ROOM_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "p-3.5 rounded-2xl border text-start transition-all duration-300 cursor-pointer flex flex-col justify-between",
                selectedCategory === cat.id
                  ? "!border-brand-green !bg-brand-green !text-white shadow-lg shadow-brand-green/20"
                  : "border-white/10 bg-white/[0.03] text-foreground hover:bg-white/[0.08]"
              )}
            >
              <div className="text-[10px] font-mono opacity-80">Cat. {cat.code}</div>
              <div className="text-xs font-bold mt-2 leading-snug">{ar ? cat.titleAr : cat.titleEn}</div>
            </button>
          ))}
        </div>

        {/* Filter Bar & Access Level Legend */}
        <div className="p-6 rounded-3xl bg-secondary/40 border border-border/80 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Search Box */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute start-4 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "ابحث بالاسم أو الكود (مثال: DOC-CORP)..." : "Search by title or ref ID (e.g. DOC-CORP)..."}
              className="w-full ps-11 pe-4 py-2.5 rounded-2xl bg-background/80 border border-border text-xs focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>

          {/* Access Levels Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto">
            <span className="text-xs text-muted-foreground font-semibold me-1 flex items-center gap-1.5">
              <Filter className="size-3.5" />
              <span>{ar ? "مستوى التصريح:" : "Access:"}</span>
            </span>
            <button
              type="button"
              onClick={() => setSelectedAccessLevel("all")}
              className={cn(
                "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all",
                selectedAccessLevel === "all"
                  ? "bg-foreground text-background"
                  : "bg-background/80 text-muted-foreground hover:text-foreground border border-border"
              )}
            >
              {ar ? "الكل" : "All"}
            </button>
            {DATA_ROOM_ACCESS_LEVELS.map((lvl) => (
              <button
                key={lvl.id}
                type="button"
                onClick={() => setSelectedAccessLevel(lvl.id)}
                className={cn(
                  "px-3 py-1.5 rounded-xl text-xs font-semibold transition-all border",
                  selectedAccessLevel === lvl.id
                    ? "!bg-brand-green !text-white !border-brand-green"
                    : "bg-background/80 text-muted-foreground hover:text-foreground border-border"
                )}
              >
                {ar ? lvl.badgeAr : lvl.badgeEn}
              </button>
            ))}
          </div>
        </div>

        {/* Documents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDocuments.map((doc) => {
            const isPublic = doc.accessLevel === "public";
            const levelInfo = DATA_ROOM_ACCESS_LEVELS.find((l) => l.id === doc.accessLevel);

            return (
              <div
                key={doc.id}
                className="group relative flex flex-col justify-between p-6 rounded-3xl bg-card/60 backdrop-blur-xl border border-border/80 hover:border-brand-green/40 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  {/* Top metadata badges */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-mono text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-lg border border-border">
                      {doc.id}
                    </span>
                    <span
                      className={cn(
                        "text-[10px] font-bold px-2.5 py-1 rounded-full border",
                        levelInfo?.color || "bg-secondary text-muted-foreground"
                      )}
                    >
                      {ar ? levelInfo?.badgeAr : levelInfo?.badgeEn}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug mb-2">
                    {ar ? doc.titleAr : doc.titleEn}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {ar ? doc.descriptionAr : doc.descriptionEn}
                  </p>
                </div>

                {/* Bottom details & Download Action */}
                <div className="pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  <div className="text-[11px] font-mono text-muted-foreground">
                    <span>{doc.format}</span> • <span>{doc.fileSize}</span>
                  </div>

                  {isPublic ? (
                    <div className="flex items-center gap-1.5">
                      <a
                        href={(ar ? doc.downloadUrlAr : doc.downloadUrlEn) || doc.downloadUrl || "/downloads/SBA_Complete_Corporate_Profile_AR.pdf"}
                        download
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold !bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white transition-all shadow-md"
                      >
                        <Download className="size-3.5" />
                        <span>{ar ? "عربي (PDF)" : "English (PDF)"}</span>
                      </a>
                      {doc.downloadUrlAr && doc.downloadUrlEn && (
                        <a
                          href={ar ? doc.downloadUrlEn : doc.downloadUrlAr}
                          download
                          title={ar ? "تحميل النسخة الإنجليزية" : "Download Arabic Edition"}
                          className="inline-flex items-center justify-center px-2.5 py-2 rounded-xl text-[11px] font-bold bg-secondary/90 hover:bg-brand-orange hover:text-white border border-border transition-all"
                        >
                          {ar ? "EN" : "AR"}
                        </a>
                      )}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRequestModalDoc(doc)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-secondary hover:bg-brand-green hover:text-white border border-border transition-all cursor-pointer"
                    >
                      <Lock className="size-3.5 text-amber-500" />
                      <span>{ar ? "طلب تصريح وصول" : "Request Access"}</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="text-center py-16 p-8 rounded-3xl bg-secondary/30 border border-border">
            <AlertCircle className="size-10 text-muted-foreground mx-auto mb-3" />
            <h4 className="font-bold text-foreground">{ar ? "لا توجد وثائق مطابقة لبحثك" : "No matching documents found"}</h4>
            <p className="text-xs text-muted-foreground mt-1">
              {ar ? "يرجى تعديل الفلاتر أو مسح كلمة البحث" : "Please adjust your search or reset the filters."}
            </p>
          </div>
        )}

        {/* Free Consultation Callout in Data Room */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-secondary/80 to-secondary/40 border border-border backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-foreground">
              {ar ? "هل تبحث عن دراسة جدوى استثمارية أو تقرير قطاعي مخصص؟" : "Looking for a Custom Investment Feasibility Study or Sector Brief?"}
            </h3>
            <p className="text-xs text-muted-foreground max-w-2xl leading-relaxed">
              {ar
                ? "فريق الاستثمار والتحالفات الاستراتيجية بمجموعة سامي بن عياد يقدم استشارات أولية مجانية بالكامل للمؤسسات والصناديق لمناقشة فرص التوسع والشراكة."
                : "Sami Bin Ayyad Group’s investment desk provides 100% complimentary initial consultations for funds and institutional partners."}
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold shrink-0">
            <Link to="/request-consultation">
              {ar ? "طلب استشارة مجانية" : "Request Free Consultation"} <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* ACCESS REQUEST MODAL (Role-based Data Room Access) */}
      {/* ======================================================== */}
      {requestModalDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-background/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl">
            <button
              type="button"
              onClick={closeRequestModal}
              className="absolute end-5 top-5 p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="size-4" />
            </button>

            {submittedRef ? (
              <div className="text-center py-6 space-y-4">
                <div className="size-16 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {ar ? "تم استلام طلب تصريح الوصول بنجاح" : "Access Request Received Successfully"}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-md mx-auto">
                  {ar
                    ? "تم تسجيل طلبك وتوجيهه إلى أمانة سر غرفة البيانات المؤسسية. سيتم مراجعة بياناتك المؤسسية والتواصل معك عبر البريد الإلكتروني المعتمد."
                    : "Your request has been routed to the Corporate Data Room Secretariat for compliance verification. You will be contacted via business email."}
                </p>
                <div className="p-3 rounded-2xl bg-secondary/80 border border-border inline-block text-xs font-mono font-bold text-brand-green">
                  {submittedRef}
                </div>
                <div className="pt-4">
                  <Button
                    type="button"
                    onClick={closeRequestModal}
                    className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold px-8"
                  >
                    {ar ? "إغلاق النافذة" : "Close"}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleRequestAccess} className="space-y-4">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-500 mb-2">
                    <Lock className="size-3" />
                    <span>{requestModalDoc.id}</span>
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {ar ? `طلب تصريح وصول: ${requestModalDoc.titleAr}` : `Request Access: ${requestModalDoc.titleEn}`}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {ar
                      ? "هذه الوثيقة تخضع لضوابط الحوكمة واتفاقيات السرية. يرجى إدخال البيانات المؤسسية لإصدار تصريح الوصول."
                      : "This document is restricted under corporate governance protocols. Please provide your business credentials for authorization."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "الاسم الكامل *" : "Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder={ar ? "الاسم الثلاثي" : "Your Name"}
                      className="w-full px-3 py-2 rounded-xl bg-secondary/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "الشركة / المؤسسة *" : "Company / Entity *"}
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantCompany}
                      onChange={(e) => setApplicantCompany(e.target.value)}
                      placeholder={ar ? "اسم الكيان القانوني" : "Legal Company Name"}
                      className="w-full px-3 py-2 rounded-xl bg-secondary/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "البريد المؤسسي *" : "Business Email *"}
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="corporate@domain.com"
                      className="w-full px-3 py-2 rounded-xl bg-secondary/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "رقم الهاتف / الواتساب *" : "Phone / WhatsApp *"}
                    </label>
                    <input
                      type="tel"
                      required
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      placeholder="+20 100 000 0000"
                      className="w-full px-3 py-2 rounded-xl bg-secondary/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-foreground block mb-1">
                    {ar ? "الغرض من الاطلاع على الوثيقة *" : "Purpose of Review *"}
                  </label>
                  <textarea
                    required
                    rows={2}
                    value={applicantPurpose}
                    onChange={(e) => setApplicantPurpose(e.target.value)}
                    placeholder={ar ? "استثمار مشترك، تدقيق تعاقدي، توريد صناعي..." : "Joint venture evaluation, procurement audit, investment memo..."}
                    className="w-full px-3 py-2 rounded-xl bg-secondary/80 border border-border text-xs focus:outline-none focus:border-brand-green"
                  />
                </div>

                {/* NDA Checkbox */}
                <div className="p-3 rounded-2xl bg-secondary/60 border border-border flex items-start gap-2 text-xs">
                  <input
                    type="checkbox"
                    id="nda-consent"
                    required
                    checked={ndaAccepted}
                    onChange={(e) => setNdaAccepted(e.target.checked)}
                    className="mt-0.5 rounded border-border text-brand-green focus:ring-brand-green cursor-pointer"
                  />
                  <label htmlFor="nda-consent" className="text-[11px] text-muted-foreground leading-relaxed cursor-pointer">
                    {ar
                      ? "أقر بالالتزام التام باتفاقية الحفاظ على سرية المعلومات (NDA) الخاصة بمجموعة سامي بن عياد وعدم تداول محتوى الوثائق لأي طرف ثالث."
                      : "I agree to be bound by SBA Group’s Non-Disclosure Agreement (NDA) and commit not to disclose or distribute restricted documents to any third party."}
                  </label>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={closeRequestModal}
                    className="rounded-full text-xs"
                  >
                    {ar ? "إلغاء" : "Cancel"}
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold px-6 shadow-md"
                  >
                    {isSubmitting
                      ? ar
                        ? "جاري التوثيق..."
                        : "Authorizing..."
                      : ar
                      ? "إرسال طلب التصريح"
                      : "Submit Access Request"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
