import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Download,
  FileText,
  Filter,
  Search,
  Send,
  ShieldCheck,
  Wrench,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";

import {
  professionalServices,
  serviceDivisionsConfig,
  type ProfessionalService,
  type ServiceSector,
} from "@/components/products/services-data";

export function ServicesCataloguePage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [selectedServiceSector, setSelectedServiceSector] = useState<ServiceSector>("construction");
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>("all");
  const [serviceSearchQuery, setServiceSearchQuery] = useState("");
  const [activeServiceDetail, setActiveServiceDetail] = useState<ProfessionalService | null>(null);
  const [consultationTargetService, setConsultationTargetService] = useState<ProfessionalService | null>(null);

  const [consultForm, setConsultForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    location: "",
    timeline: "",
    message: "",
  });
  const [isConsultSubmitted, setIsConsultSubmitted] = useState(false);
  const [generatedConsultCode, setGeneratedConsultCode] = useState("");

  // Filter Services
  const filteredServices = useMemo(() => {
    return professionalServices.filter((s) => {
      if (s.sector !== selectedServiceSector) return false;
      if (selectedServiceCategory !== "all" && s.categoryKey !== selectedServiceCategory) {
        return false;
      }
      if (serviceSearchQuery.trim()) {
        const q = serviceSearchQuery.toLowerCase().trim();
        const inName = (s.nameAr + " " + s.nameEn).toLowerCase().includes(q);
        const inCode = s.code.toLowerCase().includes(q);
        const inDesc = (s.descriptionAr + " " + s.descriptionEn).toLowerCase().includes(q);
        const inCat = (s.categoryAr + " " + s.categoryEn).toLowerCase().includes(q);
        const inScope = (s.scopeOfWorkAr.join(" ") + " " + s.scopeOfWorkEn.join(" ")).toLowerCase().includes(q);
        if (!inName && !inCode && !inDesc && !inCat && !inScope) return false;
      }
      return true;
    });
  }, [selectedServiceSector, selectedServiceCategory, serviceSearchQuery]);

  const currentServiceDivisionConfig = useMemo(() => {
    return serviceDivisionsConfig.find((c) => c.division === selectedServiceSector);
  }, [selectedServiceSector]);

  const totalServicesCount = professionalServices.length;

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="site-container pt-20 sm:pt-28 pb-8 scroll-mt-24">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-4">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "دليل الخدمات" : "Services Directory"}</span>
            </div>

            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-black dark:text-white text-center leading-tight tracking-tight">
              {ar ? "دليل الخدمات والحلول المتكاملة" : "Services & Integrated Solutions Directory"}
            </h1>

            <p className="mt-4 max-w-3xl mx-auto text-base sm:text-lg text-muted-foreground leading-relaxed text-center">
              {ar
                ? "دليل القدرات التنفيذية لمجموعة سامي بن عياد عبر المقاولات العامة والإنشاءات، الأنظمة والحلول البيئية المستدامة، وبرامج التصنيع للملابس الجاهزة."
                : "Comprehensive directory of Sami Bin Ayyad Group's turnkey engineering, EPC contracting, and industrial solutions across Construction, Environmental Engineering, and Ready-Made Garments."}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Services Workspace */}
      <section className="site-container pb-24">
        {/* Division Selector Tabs */}
        <div className="flex flex-col gap-6 rounded-3xl border border-white/25 bg-background/85 p-6 sm:p-8 shadow-xl backdrop-blur-xl mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-1">
                {ar ? "دليل الخدمات" : "SERVICES DIRECTORY"}
              </span>
              <h3 className="font-head text-2xl font-black text-foreground">
                {ar ? "اختر قطاع الأعمال" : "Select Business Sector"}
              </h3>
              <div className="mt-2 flex items-center gap-2">
                <Button asChild size="sm" className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange text-xs font-bold shadow-xs cursor-pointer">
                  <a href="/downloads/SBA_Services_And_Solutions_Portfolio_EN.pdf" download="SBA_Services_And_Solutions_Portfolio_EN.pdf" target="_blank" rel="noopener noreferrer">
                    <Download className="size-3.5 me-1.5" />
                    <span>{ar ? "تحميل دليل الخدمات" : "Download Services Portfolio (PDF)"}</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Search Bar for Services */}
            <div className="relative w-full md:w-80">
              <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={ar ? "ابحث في الخدمات ونطاق الأعمال والحلول..." : "Search services, scope of work, solutions..."}
                value={serviceSearchQuery}
                onChange={(e) => setServiceSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-secondary/50 py-2.5 ps-10 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:bg-background focus:outline-none focus:ring-1 focus:ring-brand-green transition-all"
              />
              {serviceSearchQuery && (
                <button
                  type="button"
                  onClick={() => setServiceSearchQuery("")}
                  className="absolute end-3.5 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Major Service Divisions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {serviceDivisionsConfig.map((cfg) => {
              const isSelected = selectedServiceSector === cfg.division;
              return (
                <button
                  key={cfg.division}
                  type="button"
                  onClick={() => {
                    setSelectedServiceSector(cfg.division);
                    setSelectedServiceCategory("all");
                  }}
                  className={cn(
                    "rounded-2xl p-5 text-start transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer border flex flex-col justify-between",
                    isSelected
                      ? "border-brand-green bg-brand-green/10 shadow-md ring-1 ring-brand-green"
                      : "border-border/80 bg-background/80 hover:bg-secondary/50"
                  )}
                >
                  <h4 className="font-head text-base font-bold text-foreground mb-1">
                    {ar ? cfg.labelAr : cfg.labelEn}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {ar ? cfg.descAr : cfg.descEn}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Category Pills inside current Service Division */}
          {currentServiceDivisionConfig && (
            <div className="pt-2">
              <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Filter className="size-3 text-brand-green" />
                <span>{ar ? "التخصصات ومجالات العمل:" : "Service Disciplines:"}</span>
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {currentServiceDivisionConfig.categories.map((cat) => {
                  const isActive = selectedServiceCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setSelectedServiceCategory(cat.key)}
                      className={cn(
                        "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                        isActive
                          ? "bg-brand-green text-white shadow-sm"
                          : "border border-border/80 bg-background text-foreground hover:bg-secondary"
                      )}
                    >
                      {ar ? cat.labelAr : cat.labelEn}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Standard Service Cards Grid */}
        <div>
          <div className="mb-6 flex items-center justify-between">
            <span className="text-xs font-body text-muted-foreground font-semibold">
              {ar
                ? `عرض ${filteredServices.length} من أصل ${professionalServices.filter((s) => s.sector === selectedServiceSector).length} خدمة`
                : `Showing ${filteredServices.length} of ${professionalServices.filter((s) => s.sector === selectedServiceSector).length} services`}
            </span>
          </div>

          {filteredServices.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]"
                >
                  <div>
                    {/* Service Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                      <img
                        src={service.image}
                        alt={ar ? service.nameAr : service.nameEn}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-center font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug">
                        {ar ? service.nameAr : service.nameEn}
                      </h4>

                      <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 text-center">
                        {ar ? service.descriptionAr : service.descriptionEn}
                      </p>

                      {/* Scope of Work Preview */}
                      <div className="mt-4 pt-3 border-t border-border/50">
                        <span className="text-[11px] font-bold text-foreground block mb-2">
                          {ar ? "نطاق الأعمال الرئيسي:" : "Core Scope of Work:"}
                        </span>
                        <ul className="space-y-1.5 text-[11px] text-muted-foreground">
                          {(ar ? service.scopeOfWorkAr : service.scopeOfWorkEn).slice(0, 2).map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-1.5">
                              <span className="size-1 rounded-full bg-brand-green mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Applications Chips */}
                      <div className="mt-3 pt-2 flex flex-wrap gap-1">
                        {(ar ? service.applicationsAr : service.applicationsEn).slice(0, 3).map((app, aIdx) => (
                          <span
                            key={aIdx}
                            className="rounded-md bg-secondary/80 px-2 py-0.5 text-[10px] text-muted-foreground font-medium"
                          >
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="p-6 pt-0 border-t border-border/40 mt-2 flex items-center gap-2">
                    <Button
                      type="button"
                      size="sm"
                      onClick={() => setActiveServiceDetail(service)}
                      className="flex-1 rounded-full text-xs font-bold bg-brand-green text-white hover:bg-brand-orange transition-all duration-300"
                    >
                      <FileText className="size-3.5 me-1.5" />
                      <span>{ar ? "تفاصيل الحل ونطاق العمل" : "Scope Details"}</span>
                    </Button>

                    <Button
                      type="button"
                      size="sm"
                      onClick={() => {
                        setConsultationTargetService(service);
                        setIsConsultSubmitted(false);
                        setGeneratedConsultCode(`SRV-REQ-${Math.floor(1000 + Math.random() * 9000)}`);
                      }}
                      className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-bold px-3.5 transition-all duration-300"
                    >
                      <Briefcase className="size-3.5 me-1.5" />
                      <span>{ar ? "طلب استشارة" : "Consult"}</span>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/30">
              <Wrench className="mx-auto size-12 text-muted-foreground/50 mb-3" />
              <h4 className="font-head text-base font-bold text-foreground">
                {ar ? "لا توجد خدمات مطابقة للبحث" : "No services found"}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                {ar ? "جرّب تغيير كلمات البحث أو اختيار قطاع آخر." : "Try adjusting your search query or choosing another service sector."}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* DIALOG: SERVICE & SOLUTION SCOPE DETAILS MODAL */}
      <Dialog open={!!activeServiceDetail} onOpenChange={() => setActiveServiceDetail(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {activeServiceDetail && (
            <div>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="rounded-full bg-brand-green px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {activeServiceDetail.code}
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">
                    {ar ? activeServiceDetail.categoryAr : activeServiceDetail.categoryEn}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl sm:text-2xl font-black text-foreground">
                  {ar ? activeServiceDetail.nameAr : activeServiceDetail.nameEn}
                </DialogTitle>
                <DialogDescription className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {ar ? activeServiceDetail.descriptionAr : activeServiceDetail.descriptionEn}
                </DialogDescription>
              </DialogHeader>

              {/* Scope of Work */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="size-3.5 text-brand-green" />
                  <span>{ar ? "نطاق الأعمال والمهام التنفيذية الكاملة:" : "Full Scope of Work:"}</span>
                </h5>
                <div className="space-y-2 rounded-2xl border border-border p-4 bg-secondary/20">
                  {(ar ? activeServiceDetail.scopeOfWorkAr : activeServiceDetail.scopeOfWorkEn).map((item, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-2 text-xs">
                      <span className="size-1.5 rounded-full bg-brand-green mt-1.5 shrink-0" />
                      <span className="text-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications & Facilities */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "مجالات التطبيق والمنشآت المستهدفة:" : "Target Applications & Sectors:"}
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {(ar ? activeServiceDetail.applicationsAr : activeServiceDetail.applicationsEn).map((app, aIdx) => (
                    <span key={aIdx} className="rounded-lg bg-secondary px-3 py-1 text-xs text-foreground font-medium">
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities & Standards */}
              <div className="mt-6">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                  {ar ? "القدرات الهندسية والمعايير المعتمدة:" : "Engineering Capabilities & Accreditations:"}
                </h5>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {(ar ? activeServiceDetail.capabilitiesAr : activeServiceDetail.capabilitiesEn).map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2">
                      <ShieldCheck className="size-3.5 text-brand-green shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dialog Actions */}
              <div className="mt-8 pt-4 border-t border-border flex items-center justify-between gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setActiveServiceDetail(null)}
                  className="rounded-full text-xs font-bold"
                >
                  {ar ? "إغلاق" : "Close"}
                </Button>

                <Button
                  type="button"
                  onClick={() => {
                    const srv = activeServiceDetail;
                    setActiveServiceDetail(null);
                    setConsultationTargetService(srv);
                    setIsConsultSubmitted(false);
                    setGeneratedConsultCode(`SRV-REQ-${Math.floor(1000 + Math.random() * 9000)}`);
                  }}
                  className="rounded-full !bg-brand-green text-white hover:!bg-brand-orange font-bold text-xs"
                >
                  <Briefcase className="size-3.5 me-1.5" />
                  <span>{ar ? "طلب استشارة هندسية وتعاقد" : "Request Engineering Consultation"}</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* DIALOG: SERVICE CONSULTATION REQUEST MODAL */}
      <Dialog open={!!consultationTargetService} onOpenChange={() => setConsultationTargetService(null)}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/20 bg-background/95 backdrop-blur-2xl p-6 sm:p-8">
          {consultationTargetService && (
            <div>
              <DialogHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="rounded-full bg-brand-green px-3 py-0.5 text-xs font-bold text-white font-mono">
                    {consultationTargetService.code}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    Ref: {generatedConsultCode}
                  </span>
                </div>
                <DialogTitle className="font-head text-xl font-black text-foreground">
                  {ar ? "طلب استشارة هندسية وتعاقد" : "Request Engineering Consultation"}
                </DialogTitle>
                <DialogDescription className="text-xs text-muted-foreground mt-1">
                  {ar ? consultationTargetService.nameAr : consultationTargetService.nameEn}
                </DialogDescription>
              </DialogHeader>

              {isConsultSubmitted ? (
                <div className="py-8 text-center space-y-3">
                  <div className="size-12 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center mx-auto">
                    <Check className="size-6" />
                  </div>
                  <h4 className="font-head text-lg font-bold text-foreground">
                    {ar ? "تم إرسال طلب الاستشارة بنجاح!" : "Consultation Request Submitted!"}
                  </h4>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto">
                    {ar
                      ? `تم قيد طلبك بالرقم: ${generatedConsultCode}. سيتواصل معك أحد كبار مهندسينا خلال يوم عمل لتنسيق جلسة استشارية فنية.`
                      : `Your consultation inquiry has been logged under: ${generatedConsultCode}. A senior engineering specialist will follow up shortly.`}
                  </p>
                  <Button
                    type="button"
                    onClick={() => setConsultationTargetService(null)}
                    className="mt-4 rounded-full bg-brand-green text-white text-xs font-bold"
                  >
                    {ar ? "إغلاق النافذة" : "Close"}
                  </Button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsConsultSubmitted(true);
                  }}
                  className="mt-6 space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الاسم الكامل *" : "Full Name *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={consultForm.name}
                        onChange={(e) => setConsultForm({ ...consultForm, name: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "الجهة / المؤسسة *" : "Organization / Company *"}
                      </label>
                      <input
                        type="text"
                        required
                        value={consultForm.company}
                        onChange={(e) => setConsultForm({ ...consultForm, company: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "البريد الإلكتروني *" : "Email Address *"}
                      </label>
                      <input
                        type="email"
                        required
                        value={consultForm.email}
                        onChange={(e) => setConsultForm({ ...consultForm, email: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "رقم الهاتف / الاتصال *" : "Phone Number *"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={consultForm.phone}
                        onChange={(e) => setConsultForm({ ...consultForm, phone: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "موقع المشروع أو المنشأة:" : "Project Location:"}
                      </label>
                      <input
                        type="text"
                        value={consultForm.location}
                        onChange={(e) => setConsultForm({ ...consultForm, location: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "المدى الزمني المستهدف للتنفيذ:" : "Target Timeline:"}
                      </label>
                      <input
                        type="text"
                        placeholder={ar ? "مثال: الربع القادم / عاجل" : "e.g. Q1 2027 / Immediate"}
                        value={consultForm.timeline}
                        onChange={(e) => setConsultForm({ ...consultForm, timeline: e.target.value })}
                        className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-foreground block mb-1">
                      {ar ? "شرح موجز لمتطلبات المشروع ونطاق العمل المطلوب:" : "Brief Scope & Project Requirements:"}
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={consultForm.message}
                      onChange={(e) => setConsultForm({ ...consultForm, message: e.target.value })}
                      className="w-full rounded-xl border border-border bg-secondary/50 p-3 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setConsultationTargetService(null)}
                      className="rounded-full text-xs"
                    >
                      {ar ? "إلغاء" : "Cancel"}
                    </Button>

                    <Button
                      type="submit"
                      className="rounded-full !bg-brand-green text-white hover:!bg-brand-orange font-bold text-xs"
                    >
                      <Send className="size-3.5 me-1.5" />
                      <span>{ar ? "إرسال طلب الاستشارة" : "Submit Consultation Request"}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

