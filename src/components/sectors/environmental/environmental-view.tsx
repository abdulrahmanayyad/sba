import { Link, useRouterState } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  Building,
  Factory,
  Leaf,
  Sun,
  Droplets,
  Recycle,
  ShieldCheck,
  Award,
  FileText,
  Download,
  Sparkles,
  Filter,
  X,
  Cpu,
  Gauge,
  Wrench,
  Microscope,
  Briefcase,
  Zap,
  Globe2,
  Share2,
  Send,
  MessageCircle,
  HelpCircle,
  Clock,
  Layers,
  ChevronRight
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";

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
import { highlightBrand } from "@/components/site/brand-text";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { JoinPage } from "@/components/join/join-page";
import {
  environmentalAboutData,
  environmentalHeroData,
  environmentalSectorsData,
  environmentalServicesData,
  detailedEnvironmentalServices,
  detailedEnvironmentalProducts,
  environmentalCaseStudies,
  environmentalExpertsData,
  environmentalImpactMetrics,
  type EnvironmentalServiceDetailed,
  type EnvironmentalProductItem,
  type EnvironmentalProjectCaseStudy
} from "./environmental-data";

export type EnvironmentalTab = "about" | "sectors" | "services" | "products" | "start-consultation" | "join";

interface EnvironmentalViewProps {
  tab?: EnvironmentalTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function EnvironmentalSectorView({ tab = "about" }: EnvironmentalViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const validTabs: EnvironmentalTab[] = ["about", "sectors", "services", "products", "start-consultation", "join"];
  const activeTab: EnvironmentalTab = validTabs.includes(tab) ? tab : "about";

  return (
    <div className="w-full">
      {/* Sector Hero — Only displayed on About Us tab, full first screen */}
      {activeTab === "about" && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={environmentalHeroData.image}
            alt={ar ? environmentalHeroData.titleAr : environmentalHeroData.title}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? environmentalHeroData.companyAr : environmentalHeroData.company}</span>
              </div>

              <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? environmentalHeroData.titleAr : environmentalHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? environmentalHeroData.subtitleAr : environmentalHeroData.subtitle}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "services" }}>
                    <span>{ar ? "استكشف خدماتنا البيئية (19 تخصصًا)" : "Explore Our 19 Services"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>

                <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                  <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                    <span>{ar ? "طلب استشارة بيئية" : "Request Consultation"}</span>
                  </Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Active Tab View */}
      <div className="py-8 space-y-12">
        {activeTab === "about" && <EnvironmentalAboutView ar={ar} />}
        {activeTab === "sectors" && <EnvironmentalSectorsView ar={ar} />}
        {activeTab === "services" && <EnvironmentalServicesView ar={ar} />}
        {activeTab === "products" && <EnvironmentalProductsView ar={ar} />}
        {activeTab === "start-consultation" && <EnvironmentalStartConsultationView ar={ar} />}
        {activeTab === "join" && <JoinPage trackId="sustainability" />}
      </div>
    </div>
  );
}

/** 1. About Us Tab View — Comprehensive 10-Section Architecture */
function EnvironmentalAboutView({ ar }: { ar: boolean }) {
  const data = environmentalAboutData;
  const services = detailedEnvironmentalServices;
  const products = detailedEnvironmentalProducts;
  const caseStudies = environmentalCaseStudies;
  const experts = environmentalExpertsData;
  const impact = environmentalImpactMetrics;
  const sectors = environmentalSectorsData.sectors;

  return (
    <div className="w-full space-y-16">
      {/* 1. SECTOR OVERVIEW & VERIFIED PERFORMANCE STATS */}
      <section className="site-container">
        <Reveal>
          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4 mb-8">
            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-green">19</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "تخصصًا وخدمة بيئية متكاملة" : "Core Disciplines"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-orange">RENERGON</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "تحالف سويسري حصري للبيوجاز" : "Swiss Strategic Alliance"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-green">185K+</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "طن مكافئ كربون تم تجنبه" : "Tons CO₂e Mitigated"}
              </div>
            </div>

            <div className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
              <div className="text-2xl sm:text-3xl font-black text-brand-orange">100%</div>
              <div className="mt-1 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                {ar ? "نسبة اعتماد دراسات EIA" : "Statutory EIA Approval"}
              </div>
            </div>
          </div>

          {/* Executive Corporate Intro Box */}
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? data.whoWeAre.badgeAr : data.whoWeAre.badgeEn}</span>
            </div>
            <h2 className="section-title mt-2">{ar ? data.whoWeAre.titleAr : data.whoWeAre.titleEn}</h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4 text-start">
              {data.whoWeAre.paragraphs.map((p, idx) => (
                <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "services" }}>
                  <span>{ar ? "استعراض الخدمات والاستشارات" : "View Services & Consulting"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>

              <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-md">
                <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                  <span>{ar ? "ابدأ استشارتك الآن" : "Start Consultation"}</span>
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. VISION & MISSION & VALUES */}
      <section className="site-container">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-md backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-green/60 hover:shadow-xl">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
                  <span>{ar ? data.vision.badgeAr : data.vision.badgeEn}</span>
                </div>
              </div>
              <h3 className="font-head text-2xl font-extrabold text-foreground">{ar ? data.vision.titleAr : data.vision.titleEn}</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{ar ? data.vision.bodyAr : data.vision.bodyEn}</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-md backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.mission.badgeAr : data.mission.badgeEn}</span>
                </div>
              </div>
              <h3 className="font-head text-2xl font-extrabold text-foreground">{ar ? data.mission.titleAr : data.mission.titleEn}</h3>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">{ar ? data.mission.bodyAr : data.mission.bodyEn}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. ENVIRONMENTAL SERVICES OVERVIEW */}
      <section className="site-container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionBadge title={ar ? "الخدمات والاستشارات" : "Environmental Services"} />
              <h2 className="section-title mt-3">
                {ar ? "منظومة الخدمات البيئية والاستشارية (19 تخصصًا)" : "19 Specialized Environmental Disciplines"}
              </h2>
            </div>
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange">
              <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "services" }}>
                <span>{ar ? "عرض كافة الخدمات بالتفصيل" : "Explore All Detailed Services"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((srv) => (
              <div
                key={srv.id}
                className="group rounded-2xl border border-white/20 bg-background/70 p-6 backdrop-blur-xl shadow-sm transition hover:border-brand-green hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-bold text-brand-green-text bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                      {srv.number}
                    </span>
                    <span className="text-[11px] font-semibold text-muted-foreground">
                      {ar ? srv.categoryAr : srv.categoryEn}
                    </span>
                  </div>
                  <h4 className="text-center font-head text-base font-bold text-foreground group-hover:text-brand-green transition-colors">
                    {ar ? srv.titleAr : srv.titleEn}
                  </h4>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {ar ? srv.leadAr : srv.leadEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/40">
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "environmental" }}
                    search={{ tab: "services" }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:underline"
                  >
                    <span>{ar ? "التفاصيل والمخرجات" : "View Deliverables"}</span>
                    <ChevronRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 4. TECHNICAL SOLUTIONS SHOWCASE */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "الحلول التكنولوجية المتقدمة" : "Advanced Technical Solutions"} />
              <h2 className="section-title mt-3">
                {ar ? "توطين التكنولوجيا الأوروبية والحلول البيئية الذكية" : "Engineering & Green Technology Systems"}
              </h2>
              <p className="section-intro mt-3">
                {ar
                  ? "نجمع بين الابتكارات الحيوية المعملية والتكنولوجيات السويسرية الحاصلة على براءات اختراع لتقديم حلول مستدامة وعالية المردود."
                  : "Bridging patented European dry-digestion systems with applied microbiology and IoT telemetry."}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl text-center">
                <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-3 mx-auto">
                  <Zap className="size-5" />
                </div>
                <h4 className="text-center font-head text-sm font-bold text-foreground">
                  {ar ? "تكنولوجيا RSD للتخمير الجاف" : "Patented RSD Dry Digestion"}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-center">
                  {ar ? "شراكة استراتيجية مع RENERGON السويسرية لمعالجة المخلفات الصلبة بدون مياه مضافة وإنتاج طاقة وكهرباء نظيفة." : "Patented Swiss dry fermentation converting solid manure and organic streams into renewable power and biochar."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl text-center">
                <div className="size-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3 mx-auto">
                  <Microscope className="size-5" />
                </div>
                <h4 className="text-center font-head text-sm font-bold text-foreground">
                  {ar ? "المعالجة البيولوجية الميكروبية" : "Microbial Bioremediation"}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-center">
                  {ar ? "تحالف سلالات بكتيرية نافعة لتفكيك الهيدروكربونات والزيوت والتخلص الجذري من الروائح الكبريتية بالمواقع." : "Proprietary bacterial consortia degrading toxic hydrocarbons and industrial H₂S odors naturally."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl text-center">
                <div className="size-10 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green mb-3 mx-auto">
                  <Cpu className="size-5" />
                </div>
                <h4 className="text-center font-head text-sm font-bold text-foreground">
                  {ar ? "محطات الرصد اللحظي IoT" : "Autonomous IoT Telemetry"}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-center">
                  {ar ? "محطات رصد شمسية ذكية لقياس جودة الهواء والغازات والضوضاء على مدار 24 ساعة مع إرسال تنبيهات تلقائية." : "Solar-powered 24/7 environmental stations streaming air, stack gas, and acoustic data directly to cloud dashboards."}
                </p>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl text-center">
                <div className="size-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-3 mx-auto">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="text-center font-head text-sm font-bold text-foreground">
                  {ar ? "منظومة EHS الرقمية السحابية" : "Cloud EHS SaaS Platform"}
                </h4>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-center">
                  {ar ? "تطبيق ذكي بالتعاون مع تكنوسيت لإدارة السجلات القانونية والتفتيش الميداني وتتبع معايير السلامة دون أوراق." : "Enterprise digital software automating legal registers, audit checklists, and incident tracking across multi-site facilities."}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. ENVIRONMENTAL PRODUCTS SHOWCASE */}
      <section className="site-container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionBadge title={ar ? "المنتجات البيئية المعتمدة" : "Environmental Products"} />
              <h2 className="section-title mt-3">
                {ar ? "منتجاتنا البيئية المبتكرة" : "Engineered Environmental Products"}
              </h2>
            </div>
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange">
              <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "products" }}>
                <span>{ar ? "استعراض المواصفات والكتالوج" : "View Technical Data Sheets"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="group overflow-hidden rounded-2xl border border-white/20 bg-background/70 backdrop-blur-xl shadow-sm transition hover:border-brand-green hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={prod.image}
                      alt={ar ? prod.titleAr : prod.titleEn}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-2.5 start-2.5 bg-black/70 text-white font-mono text-[11px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm">
                      {prod.code}
                    </span>
                  </div>
                  <div className="p-4 space-y-2">
                    <h4 className="text-center font-head text-sm font-bold text-foreground line-clamp-2">
                      {ar ? prod.titleAr : prod.titleEn}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed text-center">
                      {ar ? prod.leadAr : prod.leadEn}
                    </p>
                  </div>
                </div>
                <div className="p-4 pt-0">
                  <Button asChild size="sm" className="w-full text-xs rounded-xl bg-brand-green text-white hover:bg-brand-orange transition-all duration-300 shadow-sm">
                    <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "products" }}>
                      <span>{ar ? "تفاصيل المنتج ونشرة البيانات" : "Datasheet & Quote"}</span>
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 6. INDUSTRIES WE SERVE */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <SectionBadge title={ar ? "القطاعات والصناعات" : "Industries We Serve"} />
              <h2 className="section-title mt-3">{ar ? "دعم بيئي متخصص عبر كافة القطاعات الحيوية" : "Cross-Industry Environmental Expertise"}</h2>
              <p className="section-intro mt-3">
                {ar ? "استشارات وحلول مدركة للمتطلبات التشغيلية والتجارية لكل صناعة." : "Commercial and technical advisory tailored to specific industrial workflows."}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sec) => (
                <div key={sec.id} className="rounded-2xl border border-border/70 bg-card/60 p-5 backdrop-blur-md hover:border-brand-green transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-brand-orange-text">{sec.number}</span>
                    <h4 className="font-head text-sm font-bold text-foreground">{ar ? sec.nameAr : sec.nameEn}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                    {ar ? sec.descAr : sec.descEn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. ENVIRONMENTAL PROJECTS & CASE STUDIES */}
      <section className="site-container">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <SectionBadge title={ar ? "سابقة الأعمال ودراسات الحالة" : "Environmental Case Studies"} />
              <h2 className="section-title mt-3">
                {ar ? "نماذج مشروعات واقعية ونتائج بيئية موثقة" : "Documented Environmental Project Results"}
              </h2>
            </div>
            <Button asChild size="default" className="rounded-full bg-brand-green text-white hover:bg-brand-orange">
              <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                <span>{ar ? "ناقش دراسة مشروعك" : "Discuss Your Case Study"}</span>
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.slice(0, 3).map((cs) => (
              <div
                key={cs.id}
                className="overflow-hidden rounded-3xl border border-white/20 bg-background/80 shadow-md backdrop-blur-xl flex flex-col justify-between hover:border-brand-green/60 transition"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img src={cs.image} alt={ar ? cs.nameAr : cs.nameEn} className="size-full object-cover" />
                    <span className="absolute top-3 end-3 bg-brand-orange text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                      {cs.year}
                    </span>
                  </div>
                  <div className="p-5 space-y-3">
                    <span className="text-[11px] font-bold text-brand-green-text uppercase tracking-wider block">
                      {ar ? cs.serviceTypeAr : cs.serviceTypeEn}
                    </span>
                    <h4 className="font-head text-base font-bold text-foreground">
                      {ar ? cs.nameAr : cs.nameEn}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">
                      {ar ? cs.challengeAr : cs.challengeEn}
                    </p>

                    <div className="pt-2 border-t border-border/50">
                      <span className="text-[11px] font-bold text-foreground block mb-1">
                        {ar ? "النتائج المحققة:" : "Verified Results:"}
                      </span>
                      <ul className="space-y-1">
                        {(ar ? cs.resultsAr : cs.resultsEn).slice(0, 2).map((res, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-3.5 text-brand-green shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{res}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 8. RESEARCH & DEVELOPMENT (R&D) */}
      <section className="site-container">
        <div className="rounded-3xl border border-white/30 bg-background/80 p-6 sm:p-10 shadow-lg backdrop-blur-2xl">
          <Reveal>
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <SectionBadge title={ar ? "البحث والتطوير العلمي" : "Research & Development"} />
                <h2 className="section-title">
                  {ar ? "معامل أبحاث بالشراكة مع الجامعات لتطوير حلول الغد" : "University-Partnered Research & Bioprocess Labs"}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {ar
                    ? "يمتد نشاط قطاع البحث والتطوير في سامي بن عياد لربط العلوم الأكاديمية بالتطبيقات الصناعية العملية في مجالات عزل السلالات الميكروبية، واختبارات السمية، وتطوير تكنولوجيا التخمير اللاهوائي، وحفازات البيوتشار، ومستشعرات الرصد البيئي."
                    : "Extending science-based breakthroughs into practical industry services through laboratories operating in Egypt in partnership with universities, conducting strain isolation, toxicity assays, and custom IoT sensor engineering."}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? "اختبارات التخمير BMP" : "Biochemical Methane Potential"}</span>
                    <span className="text-[11px] text-muted-foreground">{ar ? "تحديد إنتاجية الطاقة للعينات بدقة" : "Feedstock kinetic benchmarking"}</span>
                  </div>
                  <div className="rounded-xl border border-border/60 bg-secondary/30 p-3">
                    <span className="font-head text-xs font-bold text-foreground block">{ar ? "العزل الميكروبي للتلوث" : "Microbial Isolation"}</span>
                    <span className="text-[11px] text-muted-foreground">{ar ? "سلالات محلية لمكافحة الهيدروكربون" : "Targeted native strain development"}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-border/80 bg-secondary/40 p-6 space-y-4">
                  <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2">
                    <Award className="size-4 text-brand-orange" />
                    <span>{ar ? "فريق الخبراء والاستشاريين" : "Senior Technical & Advisory Team"}</span>
                  </h4>
                  <div className="space-y-3">
                    {experts.map((exp) => (
                      <div key={exp.id} className="border-b border-border/50 pb-2.5 last:border-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="font-head text-xs font-bold text-foreground">{ar ? exp.nameAr : exp.nameEn}</span>
                          <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                            +{exp.experienceYears} {ar ? "عامًا" : "Yrs"}
                          </span>
                        </div>
                        <p className="text-[11px] text-brand-orange font-medium mt-0.5">{ar ? exp.roleAr : exp.roleEn}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9. SUSTAINABILITY & IMPACT */}
      <section className="site-container">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <SectionBadge title={ar ? "مؤشرات الاستدامة والأثر" : "Sustainability & Impact"} />
            <h2 className="section-title mt-3">{ar ? impact.titleAr : impact.titleEn}</h2>
            <p className="section-intro mt-3">{ar ? impact.subtitleAr : impact.subtitleEn}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 mb-10">
            {impact.kpis.map((kpi, idx) => (
              <div key={idx} className="rounded-2xl border border-white/20 bg-background/80 p-5 shadow-sm backdrop-blur-md text-center">
                <div className="text-2xl sm:text-3xl font-black text-brand-green">{kpi.metric}</div>
                <div className="text-xs font-bold text-brand-orange mt-0.5">{ar ? kpi.unitAr : kpi.unitEn}</div>
                <div className="mt-2 text-xs text-muted-foreground leading-snug">{ar ? kpi.labelAr : kpi.labelEn}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl">
            <h4 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground text-center mb-4">
              {ar ? "المساهمة المباشرة في أهداف التنمية المستدامة للأمم المتحدة (UN SDGs)" : "Direct Alignment with UN Sustainable Development Goals"}
            </h4>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {impact.sdgsAlignment.map((sdg) => (
                <div key={sdg.number} className="rounded-xl border border-border/60 bg-secondary/30 p-3 text-center">
                  <span className="font-mono text-sm font-black text-brand-orange block">SDG {sdg.number}</span>
                  <span className="text-[11px] font-semibold text-foreground mt-1 block leading-tight">{ar ? sdg.titleAr : sdg.titleEn}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 10. REQUEST A CONSULTATION CTA */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background to-brand-orange/5 p-8 sm:p-14 text-center shadow-xl backdrop-blur-2xl">
          <Reveal>
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-3">
                <Sparkles className="size-3.5 text-brand-orange" />
                <span>{ar ? "استشارات بيئية موثوقة" : "Certified Environmental Consultation"}</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-head text-foreground">
                {ar ? "جاهزون لتقييم وتطوير المتطلبات البيئية لمنشأتك" : "Ready to Engineer Your Sustainable Future"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? "قدم طلب استشارتك عبر نموذج الاستشارات البيئية متعدد المراحل، وسيتواصل معك خبراؤنا الاستشاريون بعرض فني ودراسة متكاملة تلبي الاشتراطات القانونية وأهدافك الاستثمارية."
                  : "Submit your technical consultation brief through our structured proposal builder and our accredited environmental engineers will evaluate regulatory requirements and deliver tailored solutions."}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-lg px-8">
                  <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                    <span>{ar ? "طلب استشارة بيئية متخصصة" : "Request Environmental Consultation"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>

                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange shadow-md transition-all duration-300">
                  <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "services" }}>
                    <span>{ar ? "استعراض كافة الخدمات (19 خدمة)" : "Browse All 19 Services"}</span>
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <SectorContactSection ar={ar} sector="environmental" />
    </div>
  );
}

/** 2. Our Sectors View */
function EnvironmentalSectorsView({ ar }: { ar: boolean }) {
  const data = environmentalSectorsData;
  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <SectionBadge title={ar ? data.badgeAr : data.badgeEn} />
              <h2 className="section-title mt-3">{ar ? data.titleAr : data.titleEn}</h2>
              <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitleEn}</p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-8">
            {data.sectors.map((sec, idx) => (
              <Reveal key={sec.id} delay={idx * 0.05}>
                <div className="glass-card overflow-hidden rounded-3xl border border-border p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-6">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-widest text-brand-orange-text">{sec.number}</span>
                      <h3 className="mt-1 font-head text-xl font-bold sm:text-2xl text-foreground">{ar ? sec.nameAr : sec.nameEn}</h3>
                      <p className="mt-1 text-sm font-medium text-brand-green-text">{ar ? sec.taglineAr : sec.taglineEn}</p>
                    </div>
                    <Button asChild size="sm" variant="outline" className="rounded-full self-start">
                      <Link to="/sectors/$sector" params={{ sector: "environmental" }} search={{ tab: "start-consultation" }}>
                        <span>{ar ? "طلب استشارة للقطاع" : "Sector Consultation"}</span>
                        <ChevronRight className="size-3.5 ms-1 rtl:rotate-180" />
                      </Link>
                    </Button>
                  </div>

                  <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">{ar ? sec.descAr : sec.descEn}</p>

                  <div className="mt-6 border-t border-border/50 pt-5">
                    <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                      {ar ? "أبرز القدرات ونطاقات العمل لهذا القطاع:" : "Key Sector Capabilities & Scopes:"}
                    </h4>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {sec.keyCapabilities.map((cap, cIdx) => (
                        <div key={cIdx} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green" />
                          <span>{ar ? cap.ar : cap.en}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/** 3. Our Services View — 19 Services with Technical Dossier Modal */
function EnvironmentalServicesView({ ar }: { ar: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeService, setActiveService] = useState<EnvironmentalServiceDetailed | null>(null);

  const categories = [
    { id: "all", titleEn: "All Services (19)", titleAr: "كافة الخدمات (19)" },
    { id: "assessment", titleEn: "Studies & Assessments", titleAr: "الدراسات وتقييم الأثر" },
    { id: "waste-energy", titleEn: "Waste & Renewable Energy", titleAr: "إدارة المخلفات والطاقة" },
    { id: "digital-qhse", titleEn: "QHSE & Digital Software", titleAr: "الجودة والسلامة والبرمجيات" },
    { id: "bio-rd", titleEn: "Biotechnology & R&D", titleAr: "التكنولوجيا الحيوية والبحوث" },
  ];

  const filteredServices = useMemo(() => {
    return detailedEnvironmentalServices.filter((s) => {
      if (selectedCategory !== "all" && s.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = s.titleEn.toLowerCase().includes(q) || s.titleAr.toLowerCase().includes(q);
        const matchLead = s.leadEn.toLowerCase().includes(q) || s.leadAr.toLowerCase().includes(q);
        const matchOverview = s.overviewEn.toLowerCase().includes(q) || s.overviewAr.toLowerCase().includes(q);
        if (!matchTitle && !matchLead && !matchOverview) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionBadge title={ar ? "خدماتنا وتخصصاتنا" : "Specialized Services"} />
                <h2 className="section-title mt-3">
                  {ar ? "منظومة الخدمات البيئية والاستشارية والحلول التكنولوجية" : "Comprehensive Environmental & Engineering Services"}
                </h2>
                <p className="section-intro mt-3">
                  {ar
                    ? "19 تخصصًا استشاريًا وهندسيًا متكاملًا يغطي تقييم الأثر البيئي، وإدارة المخلفات، والبصمة الكربونية، وتأهيل الأيزو والبرمجيات."
                    : "19 specialized disciplines covering environmental impact, waste-to-energy, carbon footprint, ISO qualification, and digital solutions."}
                </p>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ar ? "ابحث عن خدمة أو استشارة..." : "Search services..."}
                  className="w-full rounded-full border border-border bg-background/90 ps-9 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40"
                />
              </div>
            </div>
          </Reveal>

          {/* Category Filter Chips */}
          <div className="mt-8 flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full text-xs shrink-0 transition-all font-medium",
                  selectedCategory === cat.id
                    ? "bg-brand-green text-white hover:bg-brand-orange border-brand-green"
                    : "border-border text-foreground hover:bg-brand-green/10"
                )}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {ar ? cat.titleAr : cat.titleEn}
              </Button>
            ))}
          </div>

          {/* Results count */}
          <div className="mt-4 text-xs text-muted-foreground border-b border-border/50 pb-3">
            {ar ? `عرض ${filteredServices.length} من أصل 19 خدمة وتخصص` : `Showing ${filteredServices.length} of 19 services`}
          </div>

          {/* 19 Services Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.03}>
                <div
                  onClick={() => setActiveService(service)}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-background/70 p-6 backdrop-blur-xl shadow-sm transition hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-xl cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-mono text-xs font-bold text-brand-green-text bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                        {service.number}
                      </span>
                      <span className="text-[11px] font-semibold text-muted-foreground line-clamp-1 max-w-[180px]">
                        {ar ? service.badgeAr : service.badgeEn}
                      </span>
                    </div>

                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-green transition-colors">
                      {ar ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-brand-orange-text">
                      {ar ? service.categoryAr : service.categoryEn}
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                      {ar ? service.leadAr : service.leadEn}
                    </p>

                    <div className="mt-4 pt-3 border-t border-border/40">
                      <span className="text-[11px] font-bold text-foreground block mb-1.5">
                        {ar ? "أبرز مجالات ونطاق العمل:" : "Core Scope Highlights:"}
                      </span>
                      <ul className="space-y-1">
                        {(ar ? service.scopeAr : service.scopeEn).slice(0, 2).map((sc, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-1.5 text-xs text-muted-foreground">
                            <CheckCircle2 className="size-3 text-brand-green shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{sc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-green group-hover:text-brand-orange transition-colors flex items-center gap-1">
                      <span>{ar ? "عرض الملف الفني الشامل" : "View Technical Dossier"}</span>
                      <ChevronRight className="size-3.5 rtl:rotate-180" />
                    </span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveService(service);
                      }}
                      className="size-8 p-0 rounded-full bg-brand-green/10 hover:bg-brand-green hover:text-white"
                    >
                      <FileText className="size-4" />
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Service Technical Dossier Modal Dialog */}
      <Dialog open={!!activeService} onOpenChange={(open) => !open && setActiveService(null)}>
        {activeService && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl shadow-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-white bg-brand-green px-2.5 py-0.5 rounded-full">
                  {activeService.number}
                </span>
                <span className="text-xs font-bold text-brand-orange">
                  {ar ? activeService.badgeAr : activeService.badgeEn}
                </span>
              </div>
              <DialogTitle className="font-head text-xl sm:text-2xl font-bold text-foreground">
                {ar ? activeService.titleAr : activeService.titleEn}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground font-medium">
                {ar ? activeService.leadAr : activeService.leadEn}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6 text-xs sm:text-sm">
              {/* 1. Service Overview */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text flex items-center gap-1.5">
                  <FileText className="size-4" />
                  <span>{ar ? "1. نظرة عامة على الخدمة (Service Overview)" : "1. Service Overview"}</span>
                </h4>
                <p className="leading-relaxed text-muted-foreground bg-muted/40 p-4 rounded-2xl border border-border/60">
                  {ar ? activeService.overviewAr : activeService.overviewEn}
                </p>
              </div>

              {/* 2. Scope of Work */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text flex items-center gap-1.5">
                  <Layers className="size-4" />
                  <span>{ar ? "2. نطاق العمل والتنفيذ (Scope of Work)" : "2. Scope of Work"}</span>
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {(ar ? activeService.scopeAr : activeService.scopeEn).map((sc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-secondary/30 p-2.5 rounded-xl border border-border/40">
                      <CheckCircle2 className="size-4 text-brand-green shrink-0 mt-0.5" />
                      <span className="leading-snug">{sc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Technical Methodology */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text flex items-center gap-1.5">
                  <Wrench className="size-4" />
                  <span>{ar ? "3. المنهجية الفنية المتبعة (Technical Methodology)" : "3. Technical Methodology"}</span>
                </h4>
                <div className="space-y-1.5">
                  {(ar ? activeService.methodologyAr : activeService.methodologyEn).map((m, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="font-mono text-xs font-bold text-brand-orange shrink-0">0{idx + 1}.</span>
                      <span>{m}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 & 5. Applications & Industries Served */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground">
                    {ar ? "4. مجالات التطبيق (Applications):" : "4. Applications:"}
                  </h4>
                  <ul className="space-y-1 text-muted-foreground">
                    {(ar ? activeService.applicationsAr : activeService.applicationsEn).map((app, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="size-1.5 rounded-full bg-brand-green" />
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground">
                    {ar ? "5. القطاعات والصناعات المستفيدة:" : "5. Industries Served:"}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {(ar ? activeService.industriesServedAr : activeService.industriesServedEn).map((ind, idx) => (
                      <span key={idx} className="bg-secondary px-2.5 py-1 rounded-lg text-xs font-medium text-foreground">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 6. Expected Deliverables */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-orange-text flex items-center gap-1.5">
                  <Award className="size-4" />
                  <span>{ar ? "6. المخرجات والتقارير المسلمة (Expected Deliverables)" : "6. Expected Deliverables"}</span>
                </h4>
                <div className="grid gap-2 sm:grid-cols-3">
                  {(ar ? activeService.deliverablesAr : activeService.deliverablesEn).map((del, idx) => (
                    <div key={idx} className="rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-3 text-xs font-medium leading-relaxed">
                      {del}
                    </div>
                  ))}
                </div>
              </div>

              {/* 7. Regulations and Standards */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="size-4 text-brand-green" />
                  <span>{ar ? "7. المعايير والتشريعات المنظمة (Relevant Regulations & Standards)" : "7. Relevant Regulations & Standards"}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(ar ? activeService.regulationsAr : activeService.regulationsEn).map((reg, idx) => (
                    <span key={idx} className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground">
                      {reg}
                    </span>
                  ))}
                </div>
              </div>

              {/* 8. Related Projects */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground">
                  {ar ? "8. مشروعات ودراسات ذات صلة (Related Projects):" : "8. Related Projects:"}
                </h4>
                <div className="space-y-1.5 text-xs text-muted-foreground">
                  {(ar ? activeService.relatedProjectsAr : activeService.relatedProjectsEn).map((prj, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-brand-orange" />
                      <span>{prj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 9. Request a Consultation Action Box */}
              <div className="rounded-2xl border border-brand-green/40 bg-brand-green/10 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h5 className="font-head text-sm font-bold text-foreground">
                    {ar ? "هل ترغب في دراسة أو استشارة في هذه الخدمة؟" : "Require Consultation for this Service?"}
                  </h5>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {ar ? "انتقل لنموذج دراسة المشروع وسيقوم خبراؤنا بالتواصل خلال 48 ساعة." : "Proceed to proposal builder with this service pre-selected."}
                  </p>
                </div>
                <Button asChild size="default" className="rounded-full bg-brand-green hover:bg-brand-orange text-white shrink-0">
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "environmental" }}
                    search={{ tab: "start-consultation", service: activeService.id }}
                    onClick={() => setActiveService(null)}
                  >
                    <span>{ar ? "طلب استشارة في هذه الخدمة" : "Request Consultation"}</span>
                    <ArrowRight className="size-3.5 ms-1.5 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

/** 4. Our Products View — 4 Products with Full Specs, Gallery & Datasheet Download */
function EnvironmentalProductsView({ ar }: { ar: boolean }) {
  const products = detailedEnvironmentalProducts;
  const [activeProduct, setActiveProduct] = useState<EnvironmentalProductItem | null>(null);
  const [rfqProduct, setRfqProduct] = useState<EnvironmentalProductItem | null>(null);
  const [activeImage, setActiveImage] = useState<string>("");

  const handleDownloadDatasheet = (product: EnvironmentalProductItem) => {
    const text = ar ? product.datasheetContentAr : product.datasheetContentEn;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${product.code}_Technical_Datasheet.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "المنتجات والتكنولوجيات البيئية" : "Environmental Products"} />
              <h2 className="section-title mt-3">
                {ar ? "حلول بيئية مبتكرة ومنتجات تكنولوجية متخصصة" : "Specialized Environmental Products & IoT Telemetry"}
              </h2>
              <p className="section-intro mt-4">
                {ar
                  ? "منتجات وحلول بيئية معتمدة ومطورة بالشراكة مع خبراء دوليين لمواجهة التحديات البيئية الصناعية وتحقيق أعلى معايير الاستدامة."
                  : "Engineered biological compounds, IoT stations, and software platforms developed with international partners to solve industrial challenges."}
              </p>
            </div>
          </Reveal>

          {/* 4 Products Full Showcase */}
          <div className="space-y-12">
            {products.map((product) => (
              <Reveal key={product.id}>
                <div className="glass-card overflow-hidden rounded-3xl border border-border p-6 sm:p-10 transition-all hover:border-brand-green/60">
                  <div className="grid gap-8 lg:grid-cols-12 items-start">
                    {/* Product Image & Gallery */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-black/10">
                        <img
                          src={product.image}
                          alt={ar ? product.titleAr : product.titleEn}
                          className="size-full object-cover"
                        />
                        <span className="absolute top-3 start-3 font-mono text-xs font-bold text-white bg-black/70 px-3 py-1 rounded-xl backdrop-blur-md">
                          {product.code}
                        </span>
                      </div>

                      {/* Thumbnails */}
                      <div className="flex items-center gap-2">
                        {product.gallery.map((img, iIdx) => (
                          <div
                            key={iIdx}
                            className="size-16 rounded-xl border border-border overflow-hidden bg-muted cursor-pointer hover:border-brand-green"
                          >
                            <img src={img} alt="Thumbnail" className="size-full object-cover" />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Product Info & Specs */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-5">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-0.5 text-xs font-bold text-brand-green-text mb-2">
                          <span>{product.code}</span>
                        </div>
                        <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                          {ar ? product.titleAr : product.titleEn}
                        </h3>
                        <p className="mt-1 text-sm font-semibold text-brand-green-text">
                          {ar ? product.leadAr : product.leadEn}
                        </p>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                          {ar ? product.overviewAr : product.overviewEn}
                        </p>
                      </div>

                      {/* Specs Highlights Table */}
                      <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4">
                        <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-3 flex items-center gap-1.5">
                          <Gauge className="size-3.5 text-brand-orange" />
                          <span>{ar ? "المواصفات الفنية المعتمدة:" : "Technical Specifications:"}</span>
                        </h4>
                        <div className="grid gap-2 sm:grid-cols-2 text-xs">
                          {(ar ? product.specsAr : product.specsEn).slice(0, 4).map((spec, sIdx) => (
                            <div key={sIdx} className="border-b border-border/40 pb-1.5">
                              <span className="text-muted-foreground block text-[11px]">{spec.name}:</span>
                              <span className="font-semibold text-foreground">{spec.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button
                          size="sm"
                          onClick={() => setActiveProduct(product)}
                          className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-bold gap-1.5 shadow-sm"
                        >
                          <FileText className="size-3.5" />
                          <span>{ar ? "عرض المواصفات ونشرة البيانات" : "Full Specs & Datasheet"}</span>
                        </Button>

                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDownloadDatasheet(product)}
                          className="rounded-full text-xs font-semibold gap-1.5 border-brand-green/40 hover:bg-brand-green/10"
                        >
                          <Download className="size-3.5 text-brand-green" />
                          <span>{ar ? "تحميل نشرة البيانات (Datasheet)" : "Download Datasheet"}</span>
                        </Button>

                        <Button
                          variant="secondary"
                          size="sm"
                          asChild
                          className="rounded-full text-xs font-bold ms-auto"
                        >
                          <Link
                            to="/sectors/$sector"
                            params={{ sector: "environmental" }}
                            search={{ tab: "start-consultation", service: product.id }}
                          >
                            <span>{ar ? "طلب عرض سعر توريد" : "Request Quotation"}</span>
                            <ArrowRight className="size-3.5 ms-1 rtl:rotate-180" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full Product Technical Detail Modal Dialog */}
      <Dialog open={!!activeProduct} onOpenChange={(open) => !open && setActiveProduct(null)}>
        {activeProduct && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl shadow-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs font-bold text-white bg-brand-orange px-2.5 py-0.5 rounded-full">
                  {activeProduct.code}
                </span>
              </div>
              <DialogTitle className="font-head text-xl sm:text-2xl font-bold text-foreground">
                {ar ? activeProduct.titleAr : activeProduct.titleEn}
              </DialogTitle>
              <DialogDescription className="text-xs sm:text-sm text-muted-foreground font-medium">
                {ar ? activeProduct.leadAr : activeProduct.leadEn}
              </DialogDescription>
            </DialogHeader>

            <div className="mt-6 space-y-6 text-xs sm:text-sm">
              {/* Product Overview */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text">
                  {ar ? "1. الوصف ونظرة عامة على المنتج:" : "1. Product Overview:"}
                </h4>
                <p className="leading-relaxed text-muted-foreground bg-muted/30 p-4 rounded-xl border border-border/50">
                  {ar ? activeProduct.overviewAr : activeProduct.overviewEn}
                </p>
              </div>

              {/* Full Specs Table */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text flex items-center gap-1.5">
                  <Gauge className="size-4" />
                  <span>{ar ? "2. المواصفات الفنية التفصيلية (Technical Specifications):" : "2. Technical Specifications:"}</span>
                </h4>
                <div className="divide-y divide-border/60 rounded-xl border border-border/80 bg-background">
                  {(ar ? activeProduct.specsAr : activeProduct.specsEn).map((sp, idx) => (
                    <div key={idx} className="grid grid-cols-12 p-3 text-xs">
                      <span className="col-span-5 sm:col-span-4 font-bold text-foreground">{sp.name}</span>
                      <span className="col-span-7 sm:col-span-8 text-muted-foreground">{sp.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-green-text flex items-center gap-1.5">
                  <Leaf className="size-4" />
                  <span>{ar ? "3. مجالات التطبيق والاستخدام (Applications):" : "3. Applications:"}</span>
                </h4>
                <div className="grid gap-2 sm:grid-cols-2">
                  {(ar ? activeProduct.applicationsAr : activeProduct.applicationsEn).map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-secondary/30 p-2.5 rounded-xl border border-border/40">
                      <CheckCircle2 className="size-4 text-brand-green shrink-0 mt-0.5" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Operating Requirements */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-brand-orange-text flex items-center gap-1.5">
                  <Wrench className="size-4" />
                  <span>{ar ? "4. اشتراطات وظروف التشغيل (Operating Requirements):" : "4. Operating Requirements:"}</span>
                </h4>
                <ul className="space-y-1.5 text-muted-foreground">
                  {(ar ? activeProduct.operatingRequirementsAr : activeProduct.operatingRequirementsEn).map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="size-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Available Configurations */}
              <div className="space-y-2">
                <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground">
                  {ar ? "5. خيارات التعبئة والتكوين (Available Configurations):" : "5. Available Configurations:"}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(ar ? activeProduct.configurationsAr : activeProduct.configurationsEn).map((cfg, idx) => (
                    <span key={idx} className="rounded-xl border border-border bg-secondary/40 px-3 py-1.5 text-xs text-foreground font-medium">
                      {cfg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Datasheet Preview Box */}
              <div className="rounded-2xl border border-brand-green/30 bg-muted/40 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-head text-xs font-bold text-foreground flex items-center gap-1.5">
                    <FileText className="size-4 text-brand-green" />
                    <span>{ar ? "ملخص نشرة البيانات الفنية (Technical Data Sheet)" : "Technical Data Sheet Summary"}</span>
                  </span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownloadDatasheet(activeProduct)}
                    className="h-7 text-xs rounded-full gap-1"
                  >
                    <Download className="size-3" />
                    <span>{ar ? "تنزيل" : "Download"}</span>
                  </Button>
                </div>
                <pre className="text-[11px] leading-relaxed text-muted-foreground font-mono bg-background/80 p-3 rounded-lg border border-border/40 overflow-x-auto whitespace-pre-wrap">
                  {ar ? activeProduct.datasheetContentAr : activeProduct.datasheetContentEn}
                </pre>
              </div>

              {/* RFQ CTA */}
              <div className="pt-2 flex justify-end gap-3">
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => setActiveProduct(null)}
                  className="rounded-full"
                >
                  {ar ? "إغلاق" : "Close"}
                </Button>
                <Button asChild size="default" className="rounded-full bg-brand-green hover:bg-brand-orange text-white">
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "environmental" }}
                    search={{ tab: "start-consultation", service: activeProduct.id }}
                    onClick={() => setActiveProduct(null)}
                  >
                    <span>{ar ? "طلب عرض سعر توريد لهذا المنتج" : "Request Quotation for Product"}</span>
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

/** 5. Start Consultation View — Comprehensive 5-Stage Form */
function EnvironmentalStartConsultationView({ ar }: { ar: boolean }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;

  const requestedServiceId = useRouterState({
    select: (s) => (s.location.search as Record<string, string>)["service"],
  });

  const matchedService = requestedServiceId
    ? detailedEnvironmentalServices.find((s) => s.id === requestedServiceId)
    : null;
  const matchedProduct = requestedServiceId
    ? detailedEnvironmentalProducts.find((p) => p.id === requestedServiceId)
    : null;

  const [form, setForm] = useState({
    consultationType: "",
    activityNature: "",
    industrialSector: "",
    facilityLocation: "",
    facilityScale: "",
    environmentalProblem: "",
    requiredStudyType: "",
    requiredDeliverables: [] as string[],
    expectedTargetDate: "",
    budgetRange: "",
    companyName: "",
    contactPerson: "",
    jobTitle: "",
    email: "",
    phone: "",
    country: "",
    hasAttachments: false,
    consent: false,
    submitted: false,
    refNum: "",
  });

  useEffect(() => {
    if (matchedService) {
      const sName = ar ? matchedService.titleAr : matchedService.titleEn;
      setForm((p) => ({ ...p, consultationType: sName, requiredStudyType: sName }));
    } else if (matchedProduct) {
      const pName = ar ? matchedProduct.titleAr : matchedProduct.titleEn;
      setForm((p) => ({ ...p, consultationType: `Product Quotation: ${pName}`, environmentalProblem: `Inquiry regarding ${pName}` }));
    }
  }, [matchedService, matchedProduct, ar]);

  const up = (k: string, v: unknown) => setForm((p) => ({ ...p, [k]: v }));

  const consultationTypes = ar
    ? ["تقييم الأثر البيئي (EIA)", "التقييم البيئي والمجتمعي (ESIA)", "حساب البصمة الكربونية", "تقارير الانبعاثات وCBAM", "القياسات البيئية للمداخن وبيئة العمل", "إدارة وتدوير المخلفات الصلبة", "المخلفات الخطرة", "محطات الغاز الحيوي (بيوجاز)", "تحويل المخلفات لطاقة (WtE)", "حلول الطاقة المتجددة", "تأهيل شهادات الأيزو (14001 / 5001)", "حلول وبرمجيات السلامة الرقمية (EHS-APP)", "التكنولوجيا الحيوية والمعالجة البيولوجية", "طلب توريد منتجات بيئية", "أخرى"]
    : ["Environmental Impact Assessment (EIA)", "Environmental & Social Impact (ESIA)", "Carbon Footprint Assessment", "Carbon Emissions & CBAM Reporting", "Stack & Workplace Measurements", "Solid Waste Management & Recycling", "Hazardous Waste Management", "Biogas Plants & Dry Digestion", "Waste-to-Energy Solutions (WtE)", "Renewable Energy Solutions", "ISO Qualification (14001 / 50001)", "Digital EHS Software (EHS-APP)", "Environmental Biotechnology", "Product Supply Quotation", "Other"];

  const activityNatures = ar
    ? ["منشأة صناعية قائمة", "مشروع جديد (Greenfield)", "توسعات في خطوط إنتاج", "منشأة رعاية صحية / مستشفى", "تطوير عقاري وسكني", "مشروع بنية تحتية وطاقة", "مزرعة أو إنتاج زراعي حيواني", "أخرى"]
    : ["Operating Industrial Facility", "New Project (Greenfield)", "Production Line Expansion", "Healthcare Facility / Hospital", "Real Estate & Compound", "Infrastructure & Energy Project", "Agricultural / Livestock Farm", "Other"];

  const industrialSectors = ar
    ? ["الكيماويات والبتروكيماويات", "النفط والغاز", "الأغذية والمشروبات", "الملابس والمنسوجات", "الأدوية والمستحضرات الطبية", "الأسمنت ومواد البناء", "المعادن والتعدين", "المحليات والمرافق العامة", "الزراعة والإنتاج الحيواني", "أخرى"]
    : ["Chemicals & Petrochemicals", "Oil & Gas", "Food & Beverage", "Garments & Textiles", "Pharmaceuticals & Healthcare", "Cement & Building Materials", "Metals & Mining", "Municipal & Utilities", "Agriculture & Livestock", "Other"];

  const facilityScales = ar
    ? ["صغيرة (< 50 عامل)", "متوسطة (50 - 250 عامل)", "صناعية كبرى (> 250 عامل)", "مجموعة شركات متعددة الفروع"]
    : ["Small (< 50 employees)", "Medium (50 - 250 employees)", "Large Industrial (> 250 employees)", "Multi-site Enterprise Group"];

  const deliverablesOptions = ar
    ? ["دراسة أثر بيئي معتمدة من جهاز شئون البيئة", "تقرير تدقيق البصمة الكربونية معتمد دوليًا", "سجل بيئي موثق وسجل مواد ومخلفات خطرة", "تقارير قياسات مداخن وضوضاء وبيئة عمل مختومة", "دراسة جدوى فنية ومالية لمحطة بيوجاز / طاقة", "تأهيل كامل لشهادة الأيزو ISO 14001 / 50001", "تهيئة وترخيص منصة EHS-APP الرقمية", "عرض سعر توريد ومواصفات لمنتجات بيئية"]
    : ["Certified EIA Study with EEAA Approval", "Accredited Carbon Footprint Audit Report", "Official Environmental & Hazardous Logbooks", "Certified Stack & Workplace Measurement Reports", "Biogas / WtE Techno-Economic Feasibility Study", "Turnkey ISO 14001 / 50001 Certification Dossier", "Configured Enterprise EHS-APP Instance", "Formal Product Quotation & Datasheets"];

  const toggleDeliverable = (d: string) => {
    setForm((p) => ({
      ...p,
      requiredDeliverables: p.requiredDeliverables.includes(d)
        ? p.requiredDeliverables.filter((x) => x !== d)
        : [...p.requiredDeliverables, d]
    }));
  };

  const handleSubmit = () => {
    const ref = "ENV-" + new Date().getFullYear() + "-" + Math.floor(1000 + Math.random() * 9000);
    setForm((p) => ({ ...p, submitted: true, refNum: ref }));
  };

  if (form.submitted) {
    return (
      <div className="site-container py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-brand-green/40 bg-background/90 p-10 text-center backdrop-blur-2xl shadow-xl">
          <div className="mb-4 flex justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/10">
              <CheckCircle2 className="size-8 text-brand-green-text" />
            </span>
          </div>
          <h2 className="font-head text-2xl font-extrabold text-foreground">
            {ar ? "تم استلام طلب الاستشارة البيئية بنجاح!" : "Environmental Consultation Request Received!"}
          </h2>
          <div className="my-4 inline-block rounded-xl border border-brand-green/30 bg-brand-green/10 px-4 py-2 font-mono text-sm font-bold text-brand-green-text">
            {ar ? `رقم الطلب المرجعي: ${form.refNum}` : `Reference Code: ${form.refNum}`}
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-lg mx-auto">
            {ar
              ? "تم تسجيل طلبكم رسميًا وتوجيهه إلى فريق الاستشارات البيئية والهندسية المختص. سيقوم أحد استشاريينا المعتمدين بمراجعة المتطلبات والتواصل معكم خلال 48 ساعة عمل."
              : "Your request has been logged in our central CRM. Our accredited environmental engineering consultants will evaluate your brief and contact you within 48 business hours."}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:info@sami-trade.com?subject=Environmental Consultation [${form.refNum}] - ${form.companyName}&body=Reference: ${form.refNum}%0ACompany: ${form.companyName}%0AType: ${form.consultationType}%0AContact: ${form.contactPerson} (${form.phone})`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-6 py-3 text-xs font-bold text-white transition hover:bg-brand-orange shadow-md"
            >
              <span>{ar ? "مراسلة الإدارة بالبريد الإلكتروني" : "Email Advisory Team"}</span>
            </a>
            <Button
              variant="outline"
              onClick={() => setForm((p) => ({ ...p, submitted: false }))}
              className="rounded-full text-xs"
            >
              {ar ? "تقديم طلب استشارة آخر" : "Submit Another Request"}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="site-container py-12">
      <div className="mx-auto max-w-3xl mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "طلب استشارة بيئية متخصصة" : "Request Environmental Consultation"}</span>
        </div>
        <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
          {ar ? "دراسات هندسية وبيئية معتمدة تدعم استدامة أعمالك" : "Certified Environmental Engineering & Advisory Brief"}
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-muted-foreground max-w-2xl mx-auto">
          {ar
            ? "أكمل الخطوات التالية لتحديد احتياجات منشأتك وسيتولى مستشارونا البيئيون إعداد مقترح فني ودراسة متكاملة تلبي المتطلبات القانونية والتنظيمية."
            : "Complete the 5 stages below and our senior consultants will prepare a compliant technical and financial advisory brief."}
        </p>

        {/* Multi-step Progress Indicator */}
        <div className="mt-6 flex items-center justify-center gap-1.5">
          {Array.from({ length: totalSteps }, (_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i + 1 === step ? "w-8 bg-brand-orange" : i + 1 < step ? "w-6 bg-brand-green" : "w-4 bg-border"
              )}
            />
          ))}
        </div>
        <p className="mt-2 text-xs text-muted-foreground font-medium">
          {ar ? `الخطوة ${step} من ${totalSteps}` : `Step ${step} of ${totalSteps}`}
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/30 bg-background/80 p-6 sm:p-10 backdrop-blur-2xl shadow-xl">
        {/* STAGE 1: CONSULTATION TYPE */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "1. نوع الاستشارة البيئية المطلوبة *" : "1. Consultation Type & Service Focus *"}
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                {ar ? "اختر نوع الخدمة أو الدراسة البيئية التي تحتاجها منشأتكم:" : "Select the environmental service or study required:"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {consultationTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => up("consultationType", t)}
                  className={cn(
                    "rounded-xl border px-3.5 py-2 text-xs font-semibold transition text-start",
                    form.consultationType === t
                      ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold shadow-sm"
                      : "border-border text-foreground hover:border-brand-green/60"
                  )}
                >
                  {t}
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                {ar ? "طبيعة النشاط *" : "Nature of Facility Activity *"}
              </label>
              <div className="flex flex-wrap gap-2">
                {activityNatures.map((act) => (
                  <button
                    key={act}
                    type="button"
                    onClick={() => up("activityNature", act)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      form.activityNature === act
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange font-bold"
                        : "border-border text-foreground hover:border-brand-orange/60"
                    )}
                  >
                    {act}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STAGE 2: SECTOR, LOCATION & SCALE */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "2. القطاع الصناعي وموقع وحجم المنشأة" : "2. Industrial Sector, Location & Facility Scale"}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1.5">
                {ar ? "القطاع الصناعي التابع له *" : "Industrial Sector *"}
              </label>
              <div className="flex flex-wrap gap-2">
                {industrialSectors.map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => up("industrialSector", sec)}
                    className={cn(
                      "rounded-lg border px-3 py-1.5 text-xs transition",
                      form.industrialSector === sec
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold"
                        : "border-border text-foreground hover:border-brand-green/60"
                    )}
                  >
                    {sec}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "الموقع الجغرافي (المحافظة / المنطقة الصناعية) *" : "Facility Location / Industrial Zone *"}
                </label>
                <input
                  type="text"
                  value={form.facilityLocation}
                  onChange={(e) => up("facilityLocation", e.target.value)}
                  placeholder={ar ? "مثال: المنطقة الصناعية بالسادس من أكتوبر" : "e.g. 6th of October Industrial Zone"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "حجم المنشأة ونطاق العمالة *" : "Facility Scale *"}
                </label>
                <select
                  value={form.facilityScale}
                  onChange={(e) => up("facilityScale", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                >
                  <option value="">{ar ? "اختر حجم المنشأة..." : "Select scale..."}</option>
                  {facilityScales.map((sc) => (
                    <option key={sc} value={sc}>{sc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 3: ENVIRONMENTAL PROBLEM / NEED & STUDY TYPE */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "3. المشكلة أو الاحتياج البيئي ونوع الدراسة" : "3. Environmental Need & Required Study"}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                {ar ? "وصف التحدي أو الاحتياج البيئي القائم *" : "Describe the Environmental Challenge or Compliance Need *"}
              </label>
              <textarea
                rows={4}
                value={form.environmentalProblem}
                onChange={(e) => up("environmentalProblem", e.target.value)}
                placeholder={ar ? "صف طبيعة المشكلة (مثال: انبعاثات روائح، تصريف صرف صناعي، ملاحظات تفتيش، توفيق أوضاع قانونية، قياسات بيئية سنوية...)" : "Detail your operational challenge, e.g., odor emissions, stack exceedance, waste sorting, upcoming EEAA audit, CBAM export requirement..."}
                className="w-full rounded-xl border border-border bg-background/60 p-3.5 text-xs text-foreground focus:border-brand-green focus:outline-none resize-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-1">
                {ar ? "نوع الدراسة أو التقرير المطلوب تفصيلًا" : "Specific Study or Report Type Needed"}
              </label>
              <input
                type="text"
                value={form.requiredStudyType}
                onChange={(e) => up("requiredStudyType", e.target.value)}
                placeholder={ar ? "مثال: دراسة أثر بيئي تصنيف (ب) أو تدقيق بصمة كربونية نطاق 1 و2" : "e.g. Full EIA Category B, Scope 1-3 Carbon Audit, Hazardous Storage Licensing"}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STAGE 4: EXPECTED DELIVERABLES & TIMELINE */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "4. المخرجات والجدول الزمني المتوقع" : "4. Deliverables & Target Timeline"}
              </h3>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground mb-2">
                {ar ? "المخرجات والوثائق المطلوبة استلامها (اختر ما ينطبق):" : "Expected Deliverables (select all applicable):"}
              </label>
              <div className="grid gap-2 sm:grid-cols-2">
                {deliverablesOptions.map((del) => (
                  <button
                    key={del}
                    type="button"
                    onClick={() => toggleDeliverable(del)}
                    className={cn(
                      "flex items-start gap-2 rounded-xl border p-2.5 text-xs text-start transition",
                      form.requiredDeliverables.includes(del)
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text font-bold"
                        : "border-border text-foreground hover:border-brand-green/40"
                    )}
                  >
                    <CheckCircle2 className={cn("size-3.5 mt-0.5 shrink-0", form.requiredDeliverables.includes(del) ? "text-brand-green" : "text-muted-foreground")} />
                    <span>{del}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "الموعد المستهدف للإنجاز *" : "Expected Target Date *"}
                </label>
                <input
                  type="date"
                  value={form.expectedTargetDate}
                  onChange={(e) => up("expectedTargetDate", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">
                  {ar ? "الميزانية الاسترشادية التقريبية" : "Estimated Budget Range"}
                </label>
                <input
                  type="text"
                  value={form.budgetRange}
                  onChange={(e) => up("budgetRange", e.target.value)}
                  placeholder={ar ? "مثال: 50,000 - 150,000 ج.م" : "e.g. EGP 100k - 250k / USD equivalent"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STAGE 5: APPLICANT DETAILS & SUBMISSION */}
        {step === 5 && (
          <div className="space-y-6">
            <div>
              <h3 className="font-head text-lg font-bold text-foreground">
                {ar ? "5. بيانات مقدم الطلب والجهة *" : "5. Applicant & Corporate Contact Details *"}
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "اسم الشركة / المنشأة *" : "Company Name *"}</label>
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) => up("companyName", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "اسم مسؤول الاتصال *" : "Contact Person Name *"}</label>
                <input
                  type="text"
                  required
                  value={form.contactPerson}
                  onChange={(e) => up("contactPerson", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "المسمى الوظيفي" : "Job Title / Role"}</label>
                <input
                  type="text"
                  value={form.jobTitle}
                  onChange={(e) => up("jobTitle", e.target.value)}
                  placeholder={ar ? "مثال: مدير السلامة والبيئة / مدير المصنع" : "e.g. EHS Manager / Plant Director"}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "رقم الهاتف / واتساب *" : "Phone / WhatsApp *"}</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => up("phone", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "البريد الإلكتروني المؤسسي *" : "Corporate Email *"}</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => up("email", e.target.value)}
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>
            </div>

            {/* Document upload notice */}
            <div className="rounded-xl border border-dashed border-border p-4 text-center bg-secondary/20">
              <p className="text-xs text-muted-foreground">
                {ar
                  ? "ملاحظة: يمكنك إرفاق تقارير الفحص البيئي أو المخططات الهندسية لاحقًا عبر البريد الإلكتروني بعد مراجعة المنسق الفني وتأكيد رقم الطلب."
                  : "Note: Supporting engineering layouts or inspection reports can be provided via email following initial coordinator contact."}
              </p>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <input
                type="checkbox"
                id="env-consent"
                checked={form.consent}
                onChange={(e) => up("consent", e.target.checked)}
                className="rounded border-border"
              />
              <label htmlFor="env-consent" className="text-xs text-muted-foreground cursor-pointer">
                {ar ? "أقر بصحة البيانات المقدمة وأوافق على معالجة طلب الاستشارة الفنية." : "I confirm the accuracy of information and consent to technical review."}
              </label>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-border/50 pt-5">
          {step > 1 ? (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setStep((s) => s - 1)}
              className="rounded-full text-xs"
            >
              {ar ? "السابق" : "Previous"}
            </Button>
          ) : <div />}

          {step < totalSteps ? (
            <Button
              size="sm"
              onClick={() => setStep((s) => s + 1)}
              className="rounded-full bg-brand-green text-white hover:bg-brand-orange text-xs font-bold px-6"
            >
              <span>{ar ? "التالي" : "Next"}</span>
              <ArrowRight className="size-3.5 ms-1 rtl:rotate-180" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!form.companyName || !form.email || !form.phone}
              className="rounded-full bg-brand-orange text-white hover:bg-brand-green text-xs font-bold px-8 shadow-md"
            >
              <Send className="size-3.5 me-1.5" />
              <span>{ar ? "إرسال طلب الاستشارة البيئية" : "Submit Consultation Brief"}</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
