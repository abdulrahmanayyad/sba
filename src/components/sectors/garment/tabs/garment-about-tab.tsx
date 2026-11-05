import { Link } from "@tanstack/react-router";
import { 
  Building2, 
  CheckCircle2, 
  Factory, 
  Globe2, 
  Layers, 
  Scissors, 
  Sparkles, 
  TrendingUp, 
  Trophy, 
  Users, 
  Workflow, 
  ShieldCheck, 
  Shirt, 
  ArrowRight,
  ExternalLink,
  Cpu,
  Package,
  Wrench,
  CheckCheck
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { 
  garmentAboutData, 
  garmentProductionCapacity, 
  garmentIndustrialCapabilities,
  garmentProductCategories,
  garmentServicesExpanded,
  garmentProcessSteps,
  garmentClassicShirtFacility,
  garmentPortfolioTypes
} from "../garment-data";
import { cn } from "@/lib/utils";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { highlightBrand } from "@/components/site/brand-text";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { FactorySlider } from "@/components/group/factory-slider";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function GarmentAboutTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const { whoWeAre, whyChooseUs, infrastructure, markets } = garmentAboutData;
  const capacity = garmentProductionCapacity;
  const capabilities = garmentIndustrialCapabilities;
  const categories = garmentProductCategories;
  const services = garmentServicesExpanded;
  const shirtFacility = garmentClassicShirtFacility;

  return (
    <div className="space-y-16 py-6">

      {/* 1. ABOUT GARMENT MANUFACTURING & EXECUTIVE OVERVIEW */}
      <section id="about-overview" className="scroll-mt-36">
        <Reveal>
          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 mb-8">
            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-orange">+40 {ar ? "عامًا" : "Years"}</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "خبرة تصنيعية ممتدة" : "Industrial Heritage"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-green">15</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "خط إنتاج تخصصي" : "Active Production Lines"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-orange">100K+</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "قطعة شهريًا طاقة فعلية" : "Actual Monthly Output"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-green">250+</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "ماكينة إلكترونية متقدمة" : "Advanced Machines"}
              </div>
            </div>
          </div>

          {/* Centered Executive Intro Box */}
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "عن قطاع تصنيع الملابس" : "About Garment Manufacturing"}</span>
            </div>
            <h2 className="font-head text-xl sm:text-3xl font-extrabold text-foreground mt-2">
              {ar ? whoWeAre.headingAr : whoWeAre.heading}
            </h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4 text-start">
              <p className="text-start leading-relaxed">{highlightBrand(ar ? whoWeAre.bodyAr : whoWeAre.body)}</p>
              <p className="text-start leading-relaxed text-xs sm:text-sm text-muted-foreground">
                {ar
                  ? "نعمل كجهة تصنيع ملابس جاهزة وتطوير أزياء وتوريد تجاري دولي للعلامات التجارية والمستوردين وتجار الجملة وسلاسل التجزئة في أوروبا والخليج والشرق الأوسط، مع التزام تام بالمعايير الفنية والجودة العالمية."
                  : "We operate as an integrated ready-made garment manufacturer, fashion development studio, and international B2B supplier for fashion brands, retail chains, and wholesale importers across Europe, the GCC, and worldwide."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "capabilities" }}>
                  <span>{ar ? "استكشف قدراتنا وإمكانياتنا الصناعية" : "Explore Industrial Capabilities"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>

              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md transition-all duration-300">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                  <span>{ar ? "ابدأ طلب التصنيع والتوريد" : "Start Manufacturing Project"}</span>
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission Cards */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="group rounded-3xl border border-brand-green/30 bg-card/75 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-green hover:shadow-xl text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}</span>
            </div>
            <h3 className="mt-3 text-center font-head text-xl font-bold text-foreground">
              {ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
              {ar ? whoWeAre.vision.descAr : whoWeAre.vision.desc}
            </p>
          </div>

          <div className="group rounded-3xl border border-brand-green/30 bg-card/75 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-green hover:shadow-xl text-center">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}</span>
            </div>
            <h3 className="mt-3 text-center font-head text-xl font-bold text-foreground">
              {ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-center">
              {ar ? whoWeAre.mission.descAr : whoWeAre.mission.desc}
            </p>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIAL CAPABILITIES HIGHLIGHTS */}
      <section id="industrial-capabilities" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <SectionBadge title={ar ? "القدرات الصناعية المتكاملة" : "Industrial Capabilities"} />
                <h2 className="section-title mt-3">
                  {ar ? "بنية تحتية متطورة تغطي كافة مراحل دورة الإنتاج" : "Complete Manufacturing Ecosystem Across 10 Disciplines"}
                </h2>
              </div>
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shrink-0">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "capabilities" }}>
                  <span>{ar ? "عرض القدرات بالتفصيل" : "View Full Capabilities"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {capabilities.slice(0, 5).map((cap) => (
                <div key={cap.id} className="rounded-2xl border border-border bg-secondary/30 p-4 backdrop-blur-md flex flex-col justify-between hover:border-brand-green transition-colors">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-orange-text block mb-2 text-center">{cap.number}</span>
                    <h4 className="text-center font-head text-sm font-bold text-foreground">{ar ? cap.titleAr : cap.titleEn}</h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">{ar ? cap.leadAr : cap.leadEn}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. PRODUCTION CAPACITY (DESIGN VS ACTUAL VS AVAILABLE) */}
      <section id="production-capacity" className="scroll-mt-36">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "الطاقة والقدرة الإنتاجية" : "Production Capacity"} />
            <h2 className="section-title mt-3">{ar ? capacity.headingAr : capacity.headingEn}</h2>
            <p className="section-intro mt-3">{ar ? capacity.subtitleAr : capacity.subtitleEn}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {capacity.capacities.map((cap) => (
              <div
                key={cap.type}
                className={cn(
                  "rounded-3xl border p-8 shadow-sm backdrop-blur-xl flex flex-col justify-between transition hover:-translate-y-1 hover:shadow-xl",
                  cap.type === "available"
                    ? "border-brand-green bg-brand-green/5 ring-2 ring-brand-green/20"
                    : "border-white/30 bg-background/80"
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={cn(
                      "text-xs font-bold px-3 py-1 rounded-full",
                      cap.type === "available" ? "bg-brand-green text-white" : "bg-secondary text-foreground"
                    )}>
                      {ar ? cap.labelAr : cap.labelEn}
                    </span>
                    {cap.type === "available" && <Sparkles className="size-4 text-brand-orange" />}
                  </div>

                  <div className="font-head text-3xl sm:text-4xl font-black text-brand-orange">
                    {ar ? cap.numberAr : cap.numberEn}
                  </div>
                  <div className="text-xs font-bold text-brand-green mt-1">
                    {ar ? cap.unitAr : cap.unitEn}
                  </div>

                  <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                    {ar ? cap.descAr : cap.descEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/50">
                  <span className="text-[11px] font-semibold text-foreground/80 block">
                    {cap.type === "available" ? (ar ? "جاهزة للتعاقد الفوري للعلامات التجارية" : "Open for Immediate B2B Allocation") : (ar ? "تشغيل صناعي منتظم" : "Dedicated Industrial Operation")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 4. MANUFACTURING SERVICES (8 B2B SERVICES) */}
      <section id="manufacturing-services" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <SectionBadge title={ar ? "خدمات التصنيع التعاقدي" : "Manufacturing Services"} />
                <h2 className="section-title mt-3">
                  {ar ? "برامج تصنيع وتوريد مرنة تناسب كبرى العلامات التجارية" : "8 Turnkey B2B Manufacturing Services"}
                </h2>
              </div>
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shrink-0">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "services" }}>
                  <span>{ar ? "عرض كافة الخدمات (8 خدمات)" : "View All 8 Services"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.slice(0, 4).map((srv) => (
                <div key={srv.id} className="group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md flex flex-col justify-between hover:border-brand-green transition">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-bold text-brand-green-text">{srv.number}</span>
                      <span className="text-[11px] font-bold text-brand-orange">{srv.id.toUpperCase()}</span>
                    </div>
                    <h4 className="text-center font-head text-base font-bold text-foreground group-hover:text-brand-green transition-colors">
                      {ar ? srv.titleAr : srv.titleEn}
                    </h4>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {ar ? srv.leadAr : srv.leadEn}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "services" }}
                      className="text-xs font-bold text-brand-orange hover:underline inline-flex items-center gap-1"
                    >
                      <span>{ar ? "تفاصيل الخدمة" : "Learn More"}</span>
                      <ArrowRight className="size-3 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. PRODUCT CATEGORIES (11 CATEGORIES) */}
      <section id="product-categories" className="scroll-mt-36">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "التصنيفات والمنتجات" : "Product Categories"} />
            <h2 className="section-title mt-3">
              {ar ? "تنوع صناعي شامل عبر 11 فئة رئيسية للملابس" : "Comprehensive Apparel Product Categories"}
            </h2>
            <p className="section-intro mt-3">
              {ar ? "تخصص دقيق وقدرات إنتاجية لتلبية مختلف طلبات بيوت الأزياء وسلاسل التجزئة." : "Specialized production lines for diverse fashion genres from knit basics to tailored formalwear."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat) => (
              <div key={cat.id} className="group rounded-2xl border border-white/20 bg-background/70 p-5 backdrop-blur-xl shadow-sm transition hover:border-brand-orange hover:shadow-lg">
                <h4 className="text-center font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition-colors">
                  {ar ? cat.nameAr : cat.nameEn}
                </h4>
                <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                  {ar ? cat.descriptionAr : cat.descriptionEn}
                </p>
                <div className="mt-3 pt-2.5 border-t border-border/40 flex flex-wrap gap-1">
                  {(ar ? cat.itemsAr : cat.itemsEn).slice(0, 2).map((item, idx) => (
                    <span key={idx} className="bg-secondary/60 text-[10px] font-medium px-2 py-0.5 rounded-md text-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md">
              <Link to="/models">
                <span>{ar ? "استعراض كتالوج الموديلات (+2,700 موديل)" : "Browse Full Models Catalogue (+2,700 Styles)"}</span>
                <ExternalLink className="size-4 ms-2" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* 6. OUR MANUFACTURING PROCESS (10-STAGE LEAN PROTOCOL) */}
      <section id="manufacturing-process" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "منهجية ودورة التصنيع" : "Our Manufacturing Process"} />
              <h2 className="section-title mt-3">
                {ar ? "مسار تصنيع منضبط يضمن دقة التنفيذ وثبات الجودة" : "Disciplined Multi-Stage Manufacturing Protocol"}
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {garmentProcessSteps.map((step) => (
                <div key={step.step} className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-md shadow-sm">
                  <span className="font-mono text-xl font-black text-brand-orange">{step.step}</span>
                  <h4 className="mt-2 font-head text-sm font-bold text-foreground">{ar ? step.titleAr : step.titleEn}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? step.descAr : step.descEn}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. QUALITY CONTROL & TESTING LAB */}
      <section id="quality-control" className="scroll-mt-36">
        <Reveal>
          <div className="rounded-3xl border border-white/30 bg-background/80 p-6 sm:p-10 shadow-lg backdrop-blur-2xl">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <SectionBadge title={ar ? "ضمان ورقابة الجودة" : "Quality Assurance & Standards"} />
                <h2 className="section-title">
                  {ar ? "الجودة مدمجة في كل مرحلة بمعيار AQL 2.5 / 4.0" : "Quality Engineered at Every Station (AQL 2.5 / 4.0)"}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {ar
                    ? "نطبق فحصًا مرحليًا بنظام النقاط الأربعة على الأقمشة، ومتابعة دقيقة لحدود السماح بالخياطة، وفحصًا شاملًا قبل التعبئة، مع تمرير كافة القطع على أجهزة الكشف عن الإبر والمعادن لضمان سلامة المستهلك والامتثال للأسواق الأوروبية والأمريكية."
                    : "Continuous multi-gate quality auditing from raw fabric roll testing to in-line sewing checks, steam finishing inspection, and 100% metal/needle detection ensuring international consumer safety."}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? "فحص الأقمشة 4-Point" : "4-Point Fabric Inspection"}</span>
                    <span className="text-[11px] text-muted-foreground">{ar ? "استبعاد أي عيوب قبل القص" : "Defect zero-tolerance"}</span>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? "كشف الإبر والمعادن" : "Needle Detector Safe"}</span>
                    <span className="text-[11px] text-muted-foreground">{ar ? "مطابقة أمان ملابس الأطفال" : "Certified infant & child safety"}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 overflow-hidden rounded-2xl border border-border shadow-md">
                <img
                  src="/BG/Apparel Manufacturing/Rigorous Quality Assurance.jpg"
                  alt={ar ? "مراقبة الجودة" : "Quality Assurance"}
                  className="size-full object-cover"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 8. OUR FACTORY & SPECIALIZED CLASSIC SHIRT LINE */}
      <section id="our-factory" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "مصانعنا ومرافقنا" : "Our Factory & Dedicated Lines"} />
              <h2 className="section-title mt-3">{ar ? shirtFacility.headingAr : shirtFacility.headingEn}</h2>
              <p className="section-intro mt-3">{ar ? shirtFacility.subtitleAr : shirtFacility.subtitleEn}</p>
            </div>

            <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-6 sm:p-8 mb-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border/50 pb-4 mb-4">
                <div>
                  <h3 className="font-head text-lg font-bold text-foreground">
                    {ar ? "خط إنتاج القمصان الكلاسيكية المستقل" : "Dedicated Classic Shirt Line"}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{ar ? shirtFacility.noteAr : shirtFacility.noteEn}</p>
                </div>
                <div className="text-center sm:text-end shrink-0">
                  <div className="text-2xl font-black text-brand-orange">{ar ? shirtFacility.monthlyCapacityAr : shirtFacility.monthlyCapacityEn}</div>
                  <div className="text-[11px] font-bold text-muted-foreground uppercase">{ar ? "طاقة الخط المعتمدة" : "Certified Line Capacity"}</div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {shirtFacility.specializedMachinery.map((mach, idx) => (
                  <div key={idx} className="rounded-xl border border-border/60 bg-background/80 p-4">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? mach.nameAr : mach.nameEn}</span>
                    <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">{ar ? mach.descAr : mach.descEn}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Factory Gallery Carousel */}
            <div className="mt-8">
              <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 text-center">
                {ar ? "جولة مصورة داخل صالات الإنتاج والماكينات" : "Factory Production Floor Showcase"}
              </h4>
              <FactorySlider />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. OUR PROJECTS & PORTFOLIO BREAKDOWN */}
      <section id="our-projects" className="scroll-mt-36">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <SectionBadge title={ar ? "سابقة الأعمال والتصنيع" : "Our Projects"} />
              <h2 className="section-title mt-3">
                {ar ? "تصنيف أعمالنا ونماذج الإنتاج المعتمدة" : "Categorized Manufacturing Portfolio"}
              </h2>
            </div>
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange">
              <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "projects" }}>
                <span>{ar ? "استعراض معرض الموديلات" : "Explore Style Portfolio"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {garmentPortfolioTypes.map((pt) => (
              <div key={pt.id} className="rounded-2xl border border-white/20 bg-background/80 p-6 shadow-sm backdrop-blur-xl flex flex-col justify-between hover:border-brand-green transition">
                <div>
                  <span className="size-2 rounded-full bg-brand-green inline-block mb-3" />
                  <h4 className="font-head text-base font-bold text-foreground">{ar ? pt.titleAr : pt.titleEn}</h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{ar ? pt.descAr : pt.descEn}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40">
                  <span className="text-[11px] font-semibold text-brand-orange">
                    {ar ? "موثق بسجل الإنتاج" : "Verified Production Spec"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 10. START YOUR MANUFACTURING PROJECT CTA */}
      <section id="start-project-cta" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/5 p-8 sm:p-14 text-center shadow-xl backdrop-blur-2xl">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-3">
                <Sparkles className="size-3.5 text-brand-orange" />
                <span>{ar ? "تصنيع تعاقدي وتصدير دولي" : "Contract Manufacturing & Export Orders"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-head text-foreground">
                {ar ? "جاهزون لبدء إنتاج مجموعتك القادمة وفق أعلى معايير الجودة" : "Ready to Manufacture Your Next Apparel Collection"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "قدّم مواصفات طلبية التصنيع عبر النموذج متعدد المراحل، وسيقوم فريق المكتب الفني بدراسة متطلبات الأقمشة والكميات وتقديم عرض سعر تفصيلي خلال 48 ساعة عمل."
                  : "Submit your manufacturing brief through our multi-stage B2B proposal builder and our engineering team will provide a comprehensive costing within 48 business hours."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-lg px-8">
                  <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                    <span>{ar ? "بدء طلب تصنيع جديد" : "Start Manufacturing Brief"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>

                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md transition-all duration-300">
                  <Link to="/models">
                    <span>{ar ? "تصفح كتالوج الموديلات (+2,700)" : "Browse Model Catalogue"}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <SectorContactSection ar={ar} sector="garment" />
    </div>
  );
}
