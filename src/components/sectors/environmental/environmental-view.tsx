import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Cpu,
  Droplets,
  Factory,
  FileCheck2,
  Filter,
  Flame,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Leaf,
  Lightbulb,
  Microscope,
  Phone,
  Recycle,
  Scale,
  Search,
  ShieldCheck,
  Sparkles,
  Sun,
  Trees,
  Wind,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import {
  environmentalAboutData,
  environmentalHeroData,
  environmentalSectorsData,
  environmentalServicesData,
} from "./environmental-data";

export type EnvironmentalTab = "about" | "sectors" | "services";

interface EnvironmentalViewProps {
  tab?: EnvironmentalTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
      {title}
    </span>
  );
}

export function EnvironmentalSectorView({ tab = "about" }: EnvironmentalViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: EnvironmentalTab = ["about", "sectors", "services"].includes(tab) ? tab : "about";

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
                <span className="size-2 rounded-full bg-brand-green animate-pulse" />
                <span>{ar ? environmentalHeroData.companyAr : environmentalHeroData.company}</span>
              </div>

              <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? environmentalHeroData.titleAr : environmentalHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? environmentalHeroData.subtitleAr : environmentalHeroData.subtitle}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Active Tab View */}
      <div className="py-8 space-y-12">
        {activeTab === "about" && <EnvironmentalAboutView ar={ar} />}
        {activeTab === "sectors" && <EnvironmentalSectorsView ar={ar} />}
        {activeTab === "services" && <EnvironmentalServicesView ar={ar} />}
      </div>
    </div>
  );
}

/** 1. About Us Tab View */
function EnvironmentalAboutView({ ar }: { ar: boolean }) {
  const data = environmentalAboutData;

  return (
    <div className="w-full space-y-12">
      {/* 1. Who We Are — Isolated centered box matching Contracting format */}
      <section className="site-container">
        <Reveal>
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-brand-green/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
              <span>{ar ? data.whoWeAre.badgeAr : data.whoWeAre.badgeEn}</span>
            </div>
            <h2 className="section-title mt-2">{ar ? data.whoWeAre.titleAr : data.whoWeAre.titleEn}</h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4">
              {data.whoWeAre.paragraphs.map((p, idx) => (
                <p key={idx}>{highlightBrand(ar ? p.ar : p.en)}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. What We Do — Problem-Solving & Core Disciplines */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <SectionBadge title={ar ? data.whatWeDo.badgeAr : data.whatWeDo.badgeEn} />
              <h2 className="section-title mt-3">{ar ? data.whatWeDo.titleAr : data.whatWeDo.titleEn}</h2>
              <p className="section-intro mt-4 leading-relaxed">{ar ? data.whatWeDo.introAr : data.whatWeDo.introEn}</p>
            </div>
          </Reveal>

          <div className="mt-8 pt-6 border-t border-border/80">
            <h3 className="font-head text-sm sm:text-base font-bold text-foreground mb-4">
              {ar ? "منظومة الخدمات والحلول المتكاملة الأساسية:" : "Core Integrated Service Capabilities:"}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {data.whatWeDo.coreServices.map((service, idx) => (
                <Reveal key={idx} delay={idx * 0.04}>
                  <div className="flex items-center gap-3 rounded-2xl border border-white/20 bg-background/60 p-4 shadow-sm backdrop-blur-xl transition hover:border-brand-green/50 hover:bg-secondary/50">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green-text">
                      <CheckCircle2 className="size-4" />
                    </span>
                    <span className="font-head text-xs sm:text-sm font-semibold text-foreground">
                      {ar ? service.ar : service.en}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach — Highlight Motto Card */}
      <section className="site-container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background/90 to-brand-orange/10 p-8 sm:p-12 shadow-lg backdrop-blur-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/90 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
              <span>{ar ? data.approach.badgeAr : data.approach.badgeEn}</span>
            </div>
            <h2 className="font-head text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight drop-shadow-sm">
              &ldquo;{ar ? data.approach.mottoAr : data.approach.mottoEn}&rdquo;
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              {ar ? data.approach.descAr : data.approach.descEn}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. Vision & Mission — Separate interactive transparent curved glass cards */}
      <section className="site-container">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-green/60 hover:shadow-xl">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
                  <span>{ar ? data.vision.badgeAr : data.vision.badgeEn}</span>
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.vision.titleAr : data.vision.titleEn}</h3>
                <p className="mt-4 text-sm sm:text-base leading-7 text-foreground/90">
                  {ar ? data.vision.bodyAr : data.vision.bodyEn}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.mission.badgeAr : data.mission.badgeEn}</span>
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.mission.titleAr : data.mission.titleEn}</h3>
                <ul className="mt-4 space-y-3">
                  {data.mission.pillars.map((pillar, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-green-text" />
                      <span>{ar ? pillar.ar : pillar.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Our Values — 6 Guiding Principles */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? data.values.badgeAr : data.values.badgeEn} />
              <h2 className="section-title mt-3 text-center">{ar ? data.values.titleAr : data.values.titleEn}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.values.items.map((val, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                        0{idx + 1}
                      </span>
                      <h3 className="font-head text-base font-bold text-foreground">{ar ? val.titleAr : val.titleEn}</h3>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">{ar ? val.descAr : val.descEn}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Sami Bin Ayyad — 6 Pillars matching Contracting format */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? data.whyUs.badgeAr : data.whyUs.badgeEn} />
              <h2 className="section-title mt-3 text-center">{ar ? data.whyUs.titleAr : data.whyUs.titleEn}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{ar ? data.whyUs.introAr : data.whyUs.introEn}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyUs.pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                      {pillar.number}
                    </span>
                    <h3 className="font-head text-base font-bold text-foreground">{ar ? pillar.titleAr : pillar.titleEn}</h3>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">{ar ? pillar.bodyAr : pillar.bodyEn}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/** 2. Our Sectors Tab View */
function EnvironmentalSectorsView({ ar }: { ar: boolean }) {
  const data = environmentalSectorsData;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSectors = data.sectors.filter((sector) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sector.nameEn.toLowerCase().includes(q) ||
      sector.nameAr.toLowerCase().includes(q) ||
      sector.descEn.toLowerCase().includes(q) ||
      sector.descAr.toLowerCase().includes(q) ||
      sector.taglineEn.toLowerCase().includes(q) ||
      sector.taglineAr.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <SectionBadge title={ar ? data.badgeAr : data.badgeEn} />
                <h2 className="section-title mt-3">{ar ? data.titleAr : data.titleEn}</h2>
                <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitleEn}</p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full max-w-xs shrink-0">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={ar ? "ابحث في القطاعات..." : "Search sectors..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-background/60 py-2 ps-9 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>
          </Reveal>

          {/* Sectors Grid */}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredSectors.map((sec, idx) => (
              <Reveal key={sec.id} delay={idx * 0.04}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/60 p-6 sm:p-8 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-brand-green/60 hover:shadow-xl hover:-translate-y-1">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                        {sec.number}
                      </span>
                      <span className="text-xs font-semibold text-muted-foreground">
                        {ar ? "قطاع متخصص" : "Specialized Sector"}
                      </span>
                    </div>

                    <h3 className="mt-4 font-head text-lg sm:text-xl font-bold text-foreground">
                      {ar ? sec.nameAr : sec.nameEn}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-brand-green-text">
                      {ar ? sec.taglineAr : sec.taglineEn}
                    </p>
                    <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">
                      {ar ? sec.descAr : sec.descEn}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <h4 className="font-head text-xs font-bold text-foreground mb-3">
                      {ar ? "نطاق الخدمات والقدرات التخصصية:" : "Key Scope & Technical Capabilities:"}
                    </h4>
                    <ul className="space-y-2">
                      {sec.keyCapabilities.map((cap, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-green-text" />
                          <span>{ar ? cap.ar : cap.en}</span>
                        </li>
                      ))}
                    </ul>
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

/** 3. Our Services Tab View */
function EnvironmentalServicesView({ ar }: { ar: boolean }) {
  const data = environmentalServicesData;
  const [selectedService, setSelectedService] = useState<(typeof data.services)[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = data.services.filter((service) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      service.titleEn.toLowerCase().includes(q) ||
      service.titleAr.toLowerCase().includes(q) ||
      service.leadEn.toLowerCase().includes(q) ||
      service.leadAr.toLowerCase().includes(q) ||
      service.bodyEn.toLowerCase().includes(q) ||
      service.bodyAr.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <SectionBadge title={ar ? data.badgeAr : data.badgeEn} />
                <h2 className="section-title mt-3">{ar ? data.titleAr : data.titleEn}</h2>
                <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitleEn}</p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full max-w-xs shrink-0">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={ar ? "ابحث في الخدمات..." : "Search services..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-background/60 py-2 ps-9 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>
          </Reveal>

          {/* Services Grid matching Construction cards aesthetic */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {filteredServices.map((service, idx) => (
              <Reveal key={service.id} delay={idx * 0.04}>
                <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-background/60 p-6 sm:p-8 backdrop-blur-xl shadow-sm transition-all duration-300 hover:border-brand-green/60 hover:shadow-xl">
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                        {service.number}
                      </span>
                      <span className="rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 font-mono text-[11px] font-bold text-brand-green-text">
                        {ar ? service.badgeAr : service.badgeEn}
                      </span>
                    </div>

                    <h3 className="mt-4 font-head text-lg sm:text-xl font-bold text-foreground">
                      {ar ? service.titleAr : service.titleEn}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm font-medium text-brand-green-text">
                      {ar ? service.leadAr : service.leadEn}
                    </p>
                    <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">
                      {ar ? service.bodyAr : service.bodyEn}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <h4 className="font-head text-xs font-semibold text-foreground mb-3">
                      {ar ? "أبرز المحاور والمخرجات الفنية:" : "Key Technical Deliverables & Scope:"}
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-green-text" />
                          <span>{ar ? feat.ar : feat.en}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setSelectedService(service)}
                        className="text-xs font-bold text-brand-green hover:text-brand-orange hover:bg-secondary p-0"
                      >
                        <span>{ar ? "عرض التفاصيل الكاملة" : "View Full Details"}</span>
                        <ChevronRight className={cn("size-3.5 ms-1", ar && "rotate-180")} />
                      </Button>

                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-brand-green"
                      >
                        <span>{ar ? "طلب استشارة" : "Inquire Service"}</span>
                        <ArrowRight className={cn("size-3", ar && "rotate-180")} />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Dialog open={!!selectedService} onOpenChange={(open) => !open && setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground w-fit">
                <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
                <span>{ar ? selectedService.badgeAr : selectedService.badgeEn}</span>
              </div>
              <DialogTitle className="font-head text-xl font-bold mt-2">
                {ar ? selectedService.titleAr : selectedService.titleEn}
              </DialogTitle>
              <p className="text-xs sm:text-sm font-medium text-brand-green-text">
                {ar ? selectedService.leadAr : selectedService.leadEn}
              </p>
            </DialogHeader>

            <div className="space-y-4 pt-2">
              <p className="text-sm leading-relaxed text-foreground/90">
                {ar ? selectedService.bodyAr : selectedService.bodyEn}
              </p>

              <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                <h4 className="font-head text-xs font-bold text-foreground mb-3">
                  {ar ? "المحاور الفنية والقدرات التفصيلية:" : "Detailed Scope & Capabilities:"}
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-text" />
                      <span>{ar ? feat.ar : feat.en}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-border">
                <Button variant="outline" size="sm" onClick={() => setSelectedService(null)}>
                  {ar ? "إغلاق" : "Close"}
                </Button>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-brand-green px-4 py-2 text-xs font-bold text-white hover:bg-brand-orange transition"
                  onClick={() => setSelectedService(null)}
                >
                  {ar ? "تواصل للاستفسار والتعاقد" : "Inquire Now"}
                </Link>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
