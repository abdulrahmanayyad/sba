import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, FileText, HardHat, Layers, MessageCircle, Phone, ShieldCheck, Sparkles, Trophy, Users } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import {
  constructionAboutData,
  constructionHeroData,
  constructionProjectsData,
  constructionSectorsData,
  constructionServicesData,
} from "./construction-data";
import heroSustainable from "@/assets/hero-sustainable.png";

export type ConstructionTab = "about" | "sectors" | "services" | "projects";

interface ConstructionViewProps {
  tab?: ConstructionTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function ConstructionSectorView({ tab = "about" }: ConstructionViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: ConstructionTab = ["about", "sectors", "services", "projects"].includes(tab) ? tab : "about";

  const tabLabels: Record<ConstructionTab, { en: string; ar: string; descEn: string; descAr: string }> = {
    about: {
      en: "About Us",
      ar: "من نحن",
      descEn: "Overview, vision, values, and project delivery methodology",
      descAr: "الرؤية والرسالة، قيم الجودة، ومنهجية تنفيذ المشروعات",
    },
    sectors: {
      en: "Our Sectors",
      ar: "قطاعاتنا",
      descEn: "Healthcare, residential, commercial, oil & gas, and infrastructure",
      descAr: "القطاع الطبي، السكني، التجاري، البترول والغاز، والبنية التحتية",
    },
    services: {
      en: "Our Services",
      ar: "خدماتنا وتخصصاتنا",
      descEn: "General contracting, MEP, fit-out, healthcare systems & maintenance",
      descAr: "المقاولات العامة، التشطيبات، الأنظمة الكهروميكانيكية، وتجهيز المنشآت",
    },
    projects: {
      en: "Our Projects",
      ar: "سجل الأعمال الموثق",
      descEn: "57+ documented projects and EGP 400.5M+ turnover across Egypt",
      descAr: "أكثر من 57 مشروعًا موثقًا و400.5 مليون جنيه حجم أعمال مسجل",
    },
  };

  return (
    <div className="w-full">
      {/* Sector Hero — Only displayed on About Us tab, full first screen, matching Home hero font size */}
      {activeTab === "about" && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={constructionHeroData.image}
            alt={ar ? constructionHeroData.titleAr : constructionHeroData.title}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? constructionHeroData.titleAr : constructionHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? constructionHeroData.subtitleAr : constructionHeroData.subtitle}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Active Page Content */}
      <div className="py-8 space-y-12">
        {activeTab === "about" && <ConstructionAboutView ar={ar} />}
        {activeTab === "sectors" && <ConstructionSectorsView ar={ar} />}
        {activeTab === "services" && <ConstructionServicesView ar={ar} />}
        {activeTab === "projects" && <ConstructionProjectsView ar={ar} />}
      </div>
    </div>
  );
}

/** 1. About Us View */
function ConstructionAboutView({ ar }: { ar: boolean }) {
  const data = constructionAboutData;
  return (
    <div className="w-full space-y-12">
      {/* 1. Who We Are — Isolated centered box matching Home "نقود التقدم عبر الصناعات" */}
      <section className="site-container">
        <Reveal>
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-brand-green/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "من نحن" : "Who We Are"}</span>
            </div>
            <h2 className="section-title mt-2">{ar ? data.partnerTitleAr : data.partnerTitle}</h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4">
              {data.partnerContent.map((item, idx) => (
                <p key={idx}>{ar ? item.ar : item.en}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. Mission & Vision — Separate interactive transparent curved glass cards */}
      <section className="site-container">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Mission */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-green/60 hover:shadow-xl">
              <div className="flex items-center gap-3 text-brand-green-text mb-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-text">
                  <Sparkles className="size-5 shrink-0" />
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.mission.titleAr : data.mission.title}</h3>
              </div>
              <p className="text-sm sm:text-base leading-7 text-foreground/90">
                {ar ? data.mission.bodyAr : data.mission.body}
              </p>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div className="flex items-center gap-3 text-brand-orange-text mb-4">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange-text">
                  <Trophy className="size-5 shrink-0" />
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.vision.titleAr : data.vision.title}</h3>
              </div>
              <p className="text-sm sm:text-base leading-7 text-foreground/90">
                {ar ? data.vision.bodyAr : data.vision.body}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. Quality Commitment — 2-column layout (Text on right in AR, Portrait Image on left in AR; reversed in EN) */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* Text Column: Right in AR, Left in EN */}
              <div className="md:col-span-7 space-y-4">
                <SectionBadge title={ar ? "الجودة والالتزام" : "Quality Assurance"} />
                <h2 className="section-title mt-2">{ar ? data.quality.titleAr : data.quality.title}</h2>
                <p className="section-intro leading-relaxed text-foreground/90">
                  {ar ? data.quality.bodyAr : data.quality.body}
                </p>
              </div>

              {/* Portrait Image Column: Left in AR, Right in EN */}
              <div className="md:col-span-5 flex justify-center">
                <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-border shadow-xl">
                  <img
                    src={heroSustainable}
                    alt={ar ? data.quality.titleAr : data.quality.title}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Why Choose Us / Building Enduring Value */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? "لماذا سامي بن عياد للمقاولات" : "Why Choose SAMI BIN AYYAD GROUP"} />
              <h2 className="section-title mt-3 text-center">{ar ? data.whyChooseUs.titleAr : data.whyChooseUs.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyChooseUs.pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                      0{idx + 1}
                    </span>
                    <h3 className="font-head text-base font-bold text-foreground">{ar ? pillar.titleAr : pillar.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">{ar ? pillar.bodyAr : pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Project Delivery Steps — Title centered in Arabic and English */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <SectionBadge title={ar ? "منهجية العمل" : "Project Delivery Process"} />
              <h2 className="section-title mt-3 text-center leading-snug">{ar ? data.deliveryProcess.titleAr : data.deliveryProcess.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.deliveryProcess.steps.map((step) => (
              <Reveal key={step.number}>
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm">
                  <span className="font-mono text-xs font-bold text-brand-orange-text">{step.number}</span>
                  <h3 className="mt-2 font-head text-base font-semibold text-foreground">{ar ? step.titleAr : step.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">{ar ? step.bodyAr : step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/** 2. Our Sectors View */
function ConstructionSectorsView({ ar }: { ar: boolean }) {
  const data = constructionSectorsData;
  const sectorImages = [
    constructionHeroData.image, // Healthcare / General
    heroSustainable,            // Residential
    constructionHeroData.image, // Commercial
    heroSustainable,            // Oil & Gas
    constructionHeroData.image, // Infrastructure
  ];

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <SectionBadge title={ar ? "قطاعاتنا" : "Our Sectors"} />
              <h2 className="section-title mt-3">{ar ? data.titleAr : data.title}</h2>
              <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
            </div>
          </Reveal>

          <div className="mt-12 space-y-12">
            {data.sectors.map((sector, index) => {
              const cardImg = sectorImages[index % sectorImages.length];
              return (
                <Reveal key={sector.id} delay={index * 0.05}>
                  <div className="glass-card overflow-hidden rounded-3xl border border-border p-6 sm:p-10">
                    <div className="grid gap-6 md:grid-cols-12 md:items-center border-b border-border pb-6">
                      <div className="md:col-span-8">
                        <span className="font-mono text-xs uppercase tracking-widest text-brand-orange-text">{sector.number}</span>
                        <h3 className="mt-1 font-head text-xl font-bold sm:text-2xl text-foreground">{ar ? sector.titleAr : sector.title}</h3>
                        <p className="mt-1 text-sm font-medium text-brand-green-text">{ar ? sector.taglineAr : sector.tagline}</p>
                        <p className="mt-4 text-sm sm:text-base leading-7 text-foreground/90">{ar ? sector.bodyAr : sector.body}</p>
                      </div>
                      <div className="md:col-span-4 overflow-hidden rounded-2xl border border-border shadow-md">
                        <img
                          src={cardImg}
                          alt={ar ? sector.titleAr : sector.title}
                          loading="lazy"
                          className="aspect-[16/10] w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </div>

                    <div className="mt-8 grid gap-8 lg:grid-cols-2">
                      <div>
                        <h4 className="flex items-center gap-2 font-head text-sm font-semibold text-foreground">
                          <Layers className="size-4 text-brand-green-text" /> {ar ? "نطاق الأعمال والقدرات" : "Scope & Capabilities"}
                        </h4>
                        <ul className="mt-4 space-y-2.5">
                          {sector.scopeList.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                              <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand-green-text" />
                              <span>{ar ? item.ar : item.en}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="flex items-center gap-2 font-head text-sm font-semibold text-foreground">
                          <Trophy className="size-4 text-brand-orange-text" /> {ar ? "أبرز المشروعات في هذا القطاع" : "Selected Sector Projects"}
                        </h4>
                        <div className="mt-4 space-y-3">
                          {sector.featuredProjects.map((proj, pIdx) => (
                            <div key={pIdx} className="rounded-xl border border-border/70 bg-secondary/40 p-3.5">
                              <p className="font-head text-xs sm:text-sm font-bold text-foreground">{ar ? proj.nameAr : proj.nameEn}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{ar ? proj.noteAr : proj.noteEn}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/** 3. Our Services View */
function ConstructionServicesView({ ar }: { ar: boolean }) {
  const data = constructionServicesData;
  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <SectionBadge title={ar ? "خدماتنا وتخصصاتنا" : "Our Services"} />
              <h2 className="section-title mt-3">{ar ? data.titleAr : data.title}</h2>
              <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {data.services.map((service, idx) => {
              const serviceImgs = [constructionHeroData.image, heroSustainable];
              const cardImg = serviceImgs[idx % serviceImgs.length];
              return (
                <Reveal key={service.id} delay={idx * 0.05}>
                  <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/20 bg-background/60 backdrop-blur-xl shadow-sm transition hover:border-brand-green/60 hover:shadow-xl">
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
                      <img
                        src={cardImg}
                        alt={ar ? service.titleAr : service.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-3 start-3 rounded-full bg-black/60 px-3 py-1 font-mono text-xs font-bold text-white backdrop-blur-md">
                        {service.number}
                      </span>
                    </div>

                    <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-border pb-4">
                          <span className="rounded-full bg-brand-green/10 px-3 py-1 font-mono text-[11px] font-semibold text-brand-green-text">
                            SBA Contracting
                          </span>
                        </div>

                        <h3 className="mt-4 font-head text-lg sm:text-xl font-bold text-foreground">{ar ? service.titleAr : service.title}</h3>
                        <p className="mt-1 text-xs sm:text-sm font-medium text-brand-green-text">{ar ? service.leadAr : service.lead}</p>
                        <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">{ar ? service.bodyAr : service.body}</p>

                        <div className="mt-6 border-t border-border pt-4">
                          <h4 className="font-head text-xs font-semibold text-foreground">{ar ? "مجالات العمل التخصصية:" : "Key Technical Disciplines:"}</h4>
                          <ul className="mt-3 space-y-2">
                            {service.capabilities.map((cap, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-brand-green-text" />
                                <span>{ar ? cap.ar : cap.en}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

/** 4. Our Projects View */
function ConstructionProjectsView({ ar }: { ar: boolean }) {
  const data = constructionProjectsData;
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all" ? data.categories : data.categories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="w-full space-y-12">
      {/* Key Numbers Banner with Title */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? "مؤشرات وأرقام موثقة" : "Documented Track Record"} />
              <h2 className="section-title mt-2">
                {ar ? "سجل إنجازاتنا بالأرقام والمشروعات المنفذة" : "Our Track Record in Numbers & Executed Projects"}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data.stats.map((stat, idx) => (
                <div key={idx} className={cn("p-4 border-b sm:border-b-0 sm:border-e border-border/60 last:border-none", ar ? "text-right" : "text-left")}>
                  <p className={cn(
                    "font-head text-3xl sm:text-4xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                    ar ? "text-right" : "text-left"
                  )}>
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-foreground">{ar ? stat.labelAr : stat.labelEn}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="max-w-3xl">
              <SectionBadge title={ar ? "سجل الأعمال الموثق" : "Project Portfolio"} />
              <h2 className="section-title mt-3">{ar ? data.titleAr : data.title}</h2>
              <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
            </div>
          </Reveal>

          {/* Filter Chips */}
          <div className="mt-8 flex flex-wrap gap-2">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory("all")}
            >
              {ar ? "جميع المشروعات" : "All Projects"}
            </Button>
            {data.categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat.id)}
              >
                {ar ? cat.titleAr : cat.titleEn}
              </Button>
            ))}
          </div>

          {/* Categories and Project Cards */}
          <div className="mt-10 space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id}>
                <div className="border-b border-border pb-3">
                  <h3 className="font-head text-xl font-bold text-foreground">{ar ? category.titleAr : category.titleEn}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{ar ? category.descriptionAr : category.descriptionEn}</p>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {category.projects.map((proj, pIdx) => (
                    <Reveal key={pIdx} delay={pIdx * 0.04}>
                      <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-5 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60">
                        <div>
                          <div className="flex items-center justify-between gap-2">
                            <span className="rounded bg-brand-green/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-brand-green-text">
                              {proj.category}
                            </span>
                            {"year" in proj && proj.year && <span className="font-mono text-[11px] text-muted-foreground">{proj.year}</span>}
                          </div>

                          <h4 className="mt-3 font-head text-base font-bold text-foreground">{ar ? proj.nameAr : proj.nameEn}</h4>
                          <p className="mt-1 text-xs font-medium text-brand-orange-text">{ar ? proj.clientAr : proj.clientEn}</p>
                          <p className="mt-3 text-xs leading-5 text-muted-foreground">{ar ? proj.scopeAr : proj.scopeEn}</p>
                        </div>

                        {"value" in proj && proj.value && (
                          <div className="mt-4 border-t border-border/70 pt-3 flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{ar ? "القيمة المسجلة:" : "Contract Value:"}</span>
                            <span className={cn("font-mono font-bold text-brand-green-text", ar ? "text-right" : "text-left")}>{ar ? ("valueAr" in proj && proj.valueAr ? proj.valueAr : proj.value) : proj.value}</span>
                          </div>
                        )}
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


