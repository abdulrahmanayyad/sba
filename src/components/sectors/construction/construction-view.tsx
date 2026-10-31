import { Link } from "@tanstack/react-router";
import { ArrowRight, Building, Calendar, CheckCircle2, ChevronRight, FileText, HardHat, Layers, MapPin, MessageCircle, Phone, Search, ShieldCheck, Sparkles, Trophy, Users, ZoomIn } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import {
  constructionAboutData,
  constructionHeroData,
  constructionProjectsData,
  constructionSectorsData,
  constructionServicesData,
} from "./construction-data";
import { contractingProjectsList, type ContractingProject } from "./contracting-projects-list";
import heroSustainable from "@/assets/hero-sustainable.png";
import { JoinPage } from "@/components/join/join-page";

export type ConstructionTab = "about" | "sectors" | "services" | "projects" | "start-project" | "join";

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
  const activeTab: ConstructionTab = ["about", "sectors", "services", "projects", "start-project", "join"].includes(tab) ? tab : "about";

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
      ar: "خدماتنا",
      descEn: "General contracting, MEP, fit-out, healthcare systems & maintenance",
      descAr: "المقاولات العامة، التشطيبات، الأنظمة الكهروميكانيكية، وتجهيز المنشآت",
    },
    projects: {
      en: "Our Projects",
      ar: "سجل الأعمال الموثق",
      descEn: "57+ documented projects and EGP 400.5M+ turnover across Egypt",
      descAr: "أكثر من 57 مشروعًا موثقًا و400.5 مليون جنيه حجم أعمال مسجل",
    },
    "start-project": {
      en: "Start Project",
      ar: "ابدأ مشروعك",
      descEn: "Submit your project brief and get a proposal",
      descAr: "قدّم موجز مشروعك واحصل على عرض",
    },
    join: {
      en: "Join Us",
      ar: "انضم إلينا",
      descEn: "Contractor registration, subcontracting and partnership opportunities",
      descAr: "تسجيل مقاول، فرص التعاقد من الباطن والفرص المهنية",
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
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "مجموعة سامي بن عياد · قطاع المقاولات والتطوير العقاري" : "SAMI BIN AYYAD · Contracting & Real Estate Development"}</span>
                </span>
              </div>

              <h1 className="mt-2 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
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
        {activeTab === "start-project" && <ConstructionStartProjectView ar={ar} />}
        {activeTab === "join" && <JoinPage trackId="construction" />}
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
                <p key={idx}>{highlightBrand(ar ? item.ar : item.en)}</p>
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
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.mission.titleAr : data.mission.title}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-7 text-foreground/90">
                {ar ? data.mission.bodyAr : data.mission.body}
              </p>
            </div>

            {/* Vision */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div className="mb-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.vision.titleAr : data.vision.title}</span>
                </div>
              </div>
              <p className="text-sm sm:text-base leading-7 text-foreground/90">
                {ar ? data.vision.bodyAr : data.vision.body}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. Quality Commitment — Compact centered text box */}
      <section className="site-container">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl border border-white/40 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur-xl ring-1 ring-black/5 text-center flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:border-brand-green/60 active:scale-[0.98] cursor-pointer">
          <Reveal>
            <div className="space-y-3 flex flex-col items-center text-center">
              <SectionBadge title={ar ? "الجودة والالتزام" : "Quality Assurance"} />
              <h2 className="section-title mt-2 text-xl sm:text-2xl text-center">{ar ? data.quality.titleAr : data.quality.title}</h2>
              <p className="text-sm sm:text-base leading-relaxed text-foreground/90 max-w-2xl mx-auto text-center">
                {ar ? data.quality.bodyAr : data.quality.body}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Why Choose Us / Building Enduring Value */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? "لماذا تختارنا" : "Why Choose Us"} />
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
              <SectionBadge title={ar ? "نهجنا" : "Project Delivery Process"} />
              <h2 className="section-title mt-3 text-center leading-snug">{ar ? data.deliveryProcess.titleAr : data.deliveryProcess.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.deliveryProcess.steps.map((step) => (
              <Reveal key={step.number}>
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:border-brand-orange/60 active:scale-[0.98] cursor-pointer">
                  <span className="font-mono text-xs font-bold text-brand-orange-text">{step.number}</span>
                  <h3 className="mt-2 font-head text-base font-semibold text-foreground">{ar ? step.titleAr : step.title}</h3>
                  <p className="mt-3 text-xs leading-5 text-muted-foreground">{ar ? step.bodyAr : step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <SectorContactSection ar={ar} />
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
              const cardImg = ("image" in sector && sector.image) ? (sector.image as string) : sectorImages[index % sectorImages.length];
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
              <SectionBadge title={ar ? "خدماتنا" : "Our Services"} />
              <h2 className="section-title mt-3">{ar ? data.titleAr : data.title}</h2>
              <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-8">
            {data.services.map((service, idx) => {
              const cardImg = ("image" in service && service.image) ? (service.image as string) : constructionHeroData.image;
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
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<ContractingProject | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);

  const years = ["all", "2023", "2021", "2020", "2019", "2018", "2016", "2015", "2014", "2013"];

  const categories = [
    { id: "all", titleEn: "All Sectors", titleAr: "جميع القطاعات" },
    { id: "healthcare", titleEn: "Healthcare & Medical", titleAr: "المنشآت الطبية والمستشفيات" },
    { id: "infrastructure", titleEn: "Infrastructure & Energy", titleAr: "البنية التحتية والغاز والبترول" },
    { id: "residential", titleEn: "Residential & Compounds", titleAr: "المجمعات والفيلات السكنية" },
    { id: "commercial", titleEn: "Commercial & Administrative", titleAr: "المراكز التجارية والإدارية" },
  ];

  const parseContractValue = (val: string) => {
    const num = parseInt(val.replace(/[^0-9]/g, ""), 10);
    return isNaN(num) ? 0 : num;
  };

  const sortedProjects = useMemo(() => {
    return [...contractingProjectsList].sort((a, b) => parseContractValue(b.valueEn) - parseContractValue(a.valueEn));
  }, []);

  const filteredProjects = sortedProjects.filter((proj) => {
    if (selectedYear !== "all" && proj.year !== selectedYear) return false;
    if (selectedCategory !== "all" && proj.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchName = proj.nameAr.toLowerCase().includes(q) || proj.nameEn.toLowerCase().includes(q);
      const matchClient = proj.clientAr.toLowerCase().includes(q) || proj.clientEn.toLowerCase().includes(q);
      const matchDesc = proj.descriptionAr.toLowerCase().includes(q) || proj.descriptionEn.toLowerCase().includes(q);
      const matchLoc = proj.locationAr.toLowerCase().includes(q) || proj.locationEn.toLowerCase().includes(q);
      if (!matchName && !matchClient && !matchDesc && !matchLoc) return false;
    }
    return true;
  });

  const displayedProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="w-full space-y-12">
      {/* Projects Showcase */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-2xl">
                <SectionBadge title={ar ? "سجل الأعمال الموثق" : "Project Portfolio"} />
                <h2 className="section-title mt-3">{ar ? data.titleAr : data.title}</h2>
              </div>

              {/* Search input */}
              <div className="relative w-full md:w-72">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ar ? "ابحث بالاسم أو الجهة أو الموقع..." : "Search project, client, location..."}
                  className="w-full rounded-full border border-border bg-background/90 ps-9 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
                />
              </div>
            </div>
          </Reveal>

          {/* Filter Chips by Category */}
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-semibold text-muted-foreground shrink-0">{ar ? "القطاع:" : "Sector:"}</span>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  size="sm"
                  className={cn("rounded-full text-xs shrink-0", selectedCategory === cat.id && "bg-brand-orange hover:bg-brand-orange/90 text-white")}
                  onClick={() => {
                    setSelectedCategory(cat.id);
                    setVisibleCount(5);
                  }}
                >
                  {ar ? cat.titleAr : cat.titleEn}
                </Button>
              ))}
            </div>

            {/* Filter Chips by Year */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-semibold text-muted-foreground shrink-0">{ar ? "السنة:" : "Year:"}</span>
              {years.map((y) => (
                <Button
                  key={y}
                  variant={selectedYear === y ? "default" : "outline"}
                  size="sm"
                  className={cn("rounded-full text-xs shrink-0 font-sans font-medium", selectedYear === y && "bg-brand-green hover:bg-brand-green/90 text-white")}
                  onClick={() => {
                    setSelectedYear(y);
                    setVisibleCount(5);
                  }}
                >
                  {y === "all" ? (ar ? "كل السنوات" : "All Years") : y}
                </Button>
              ))}
            </div>
          </div>

          {/* Result Count */}
          <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground border-b border-border/60 pb-3">
            <span>
              {ar
                ? `عرض ${displayedProjects.length} من أصل ${filteredProjects.length} مشروعًا مطابقًا (إجمالي ${contractingProjectsList.length})`
                : `Showing ${displayedProjects.length} of ${filteredProjects.length} matching projects (${contractingProjectsList.length} total)`}
            </span>
          </div>

          {/* 57 Project Cards Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((proj, pIdx) => (
              <Reveal key={proj.id} delay={Math.min(pIdx * 0.03, 0.3)}>
                <div 
                  onClick={() => setActiveProject(proj)}
                  className="group flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/30 bg-background/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-xl cursor-pointer"
                >
                  <div>
                    {/* Project Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/40 border-b border-border/60">
                      <img
                        src={proj.image}
                        alt={ar ? proj.nameAr : proj.nameEn}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 end-3 flex items-center">
                        <span className="font-sans text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange text-white shadow-sm">
                          {proj.year}
                        </span>
                      </div>

                      {/* Zoom icon hint */}
                      <div className="absolute bottom-3 end-3 flex items-center gap-1 text-[11px] font-medium text-white/90 bg-black/50 px-2 py-0.5 rounded-md backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                        <ZoomIn className="size-3" />
                        <span>{ar ? "عرض الصورة" : "Enlarge"}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-5 space-y-3">
                      <h4 className="font-head text-base font-bold text-foreground group-hover:text-brand-orange transition-colors line-clamp-2">
                        {ar ? proj.nameAr : proj.nameEn}
                      </h4>

                      {/* Client */}
                      <div className="flex items-start gap-2 text-xs text-foreground/80">
                        <Building className="size-3.5 shrink-0 text-brand-green mt-0.5" />
                        <span className="line-clamp-1"><strong className="text-muted-foreground font-medium">{ar ? "جهة الإسناد: " : "Client: "}</strong>{ar ? proj.clientAr : proj.clientEn}</span>
                      </div>

                      {/* Location */}
                      <div className="flex items-start gap-2 text-xs text-foreground/80">
                        <MapPin className="size-3.5 shrink-0 text-brand-orange mt-0.5" />
                        <span className="line-clamp-1"><strong className="text-muted-foreground font-medium">{ar ? "الموقع: " : "Location: "}</strong>{ar ? proj.locationAr : proj.locationEn}</span>
                      </div>

                      {/* Description / Scope */}
                      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2 pt-1 border-t border-border/40">
                        {ar ? proj.descriptionAr : proj.descriptionEn}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer: Date & Value */}
                  <div className="border-t border-border/70 p-4 bg-muted/20 flex flex-col gap-1.5 text-xs">
                    <div className="flex items-center justify-between text-muted-foreground text-[11px]">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3 text-muted-foreground" />
                        <span>{ar ? "تاريخ التعاقد:" : "Date:"}</span>
                      </span>
                      <span className="font-sans font-medium">{proj.contractDate}</span>
                    </div>

                    <div className="flex items-center justify-between pt-1 border-t border-border/40">
                      <span className="font-semibold text-foreground">{ar ? "القيمة التعاقدية:" : "Contract Value:"}</span>
                      <span className="font-head font-bold text-brand-orange drop-shadow-sm">
                        {ar ? proj.valueAr : proj.valueEn}
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* View More Projects Button */}
          {filteredProjects.length > visibleCount && (
            <div className="mt-10 flex justify-center">
              <Button
                size="lg"
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8 py-3 font-head font-bold shadow-md transition-all duration-300"
              >
                {ar
                  ? `رؤية المزيد من المشروعات (${filteredProjects.length - visibleCount} متبقية)`
                  : `View More Projects (${filteredProjects.length - visibleCount} remaining)`}
              </Button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="mt-12 text-center py-12 border border-dashed border-border rounded-2xl">
              <p className="text-sm font-semibold text-muted-foreground">
                {ar ? "لا توجد مشروعات مطابقة لمعايير البحث الحالية." : "No projects match the selected criteria."}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  setSelectedYear("all");
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
              >
                {ar ? "إعادة تعيين الفلاتر" : "Reset Filters"}
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Full Project Detail & Image Modal Dialog */}
      <Dialog open={!!activeProject} onOpenChange={(open) => !open && setActiveProject(null)}>
        {activeProject && (
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-6 rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl shadow-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-sans text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange text-white">
                  {activeProject.year}
                </span>
                <span className="text-xs font-semibold text-muted-foreground font-sans">
                  {ar ? activeProject.contractDate : `Contract: ${activeProject.contractDate}`}
                </span>
              </div>
              <DialogTitle className="font-head text-xl font-bold text-foreground">
                {ar ? activeProject.nameAr : activeProject.nameEn}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-5">
              {/* Image Preview */}
              <div className="overflow-hidden rounded-2xl border border-border bg-black/10">
                <img
                  src={activeProject.image}
                  alt={ar ? activeProject.nameAr : activeProject.nameEn}
                  className="w-full max-h-[380px] object-contain mx-auto"
                />
              </div>

              {/* Project Meta Details */}
              <div className="grid gap-3 sm:grid-cols-2 rounded-2xl border border-border/80 bg-muted/30 p-4 text-xs">
                <div>
                  <span className="text-muted-foreground font-medium block">{ar ? "جهة الإسناد:" : "Client:"}</span>
                  <span className="font-semibold text-foreground text-sm">{ar ? activeProject.clientAr : activeProject.clientEn}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium block">{ar ? "موقع المشروع:" : "Location:"}</span>
                  <span className="font-semibold text-foreground text-sm">{ar ? activeProject.locationAr : activeProject.locationEn}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium block">{ar ? "تاريخ التعاقد:" : "Contract Date:"}</span>
                  <span className="font-sans font-semibold text-foreground text-sm">{activeProject.contractDate}</span>
                </div>
                <div>
                  <span className="text-muted-foreground font-medium block">{ar ? "القيمة التعاقدية:" : "Contract Value:"}</span>
                  <span className="font-head font-bold text-brand-orange text-sm">{ar ? activeProject.valueAr : activeProject.valueEn}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1.5">
                <h5 className="font-head text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {ar ? "وصف ونطاق المشروع:" : "Project Scope & Description:"}
                </h5>
                <p className="text-sm leading-relaxed text-foreground/90 bg-card/60 p-4 rounded-xl border border-border/60">
                  {ar ? activeProject.descriptionAr : activeProject.descriptionEn}
                </p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}

/** 5. Start Project View — Multi-step Proposal Form */
function ConstructionStartProjectView({ ar }: { ar: boolean }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [form, setForm] = useState({
    projectName: "",
    projectType: "",
    projectLocation: "",
    services: [] as string[],
    scopeNotes: "",
    budget: "",
    currency: "EGP",
    startDate: "",
    endDate: "",
    contractType: "",
    company: "",
    contact: "",
    title: "",
    email: "",
    phone: "",
    country: "",
    website: "",
    consent: false,
    submitted: false,
    refNum: "",
  });
  const up = (k: string, v: unknown) => setForm((p) => ({ ...p, [k]: v }));

  const projectTypes = ar
    ? ["سكني", "تجاري", "إداري", "صناعي", "بنية تحتية", "متعدد الاستخدامات", "أخرى"]
    : ["Residential", "Commercial", "Administrative", "Industrial", "Infrastructure", "Mixed-Use", "Other"];
  const servicesList = ar
    ? ["مقاولات عامة", "أعمال هيكلية", "أعمال خرسانية", "تشطيبات", "أعمال MEP", "بنية تحتية", "تسليم مفتاح", "إدارة مشروع", "أخرى"]
    : ["General Contracting", "Structural Works", "Concrete Works", "Finishing Works", "MEP Works", "Infrastructure", "Turnkey", "Project Management", "Other"];
  const contractTypes = ar
    ? ["تسليم مفتاح", "مقاولات عامة", "إدارة مشروع", "BOT", "PPP", "أخرى"]
    : ["Turnkey", "General Contracting", "Project Management", "BOT", "PPP", "Other"];

  const toggleService = (s: string) => {
    setForm((p) => ({
      ...p,
      services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s],
    }));
  };

  const handleSubmit = () => {
    const ref = "CP-" + Date.now().toString(36).toUpperCase();
    setForm((p) => ({ ...p, submitted: true, refNum: ref }));
  };

  if (form.submitted) {
    return (
      <div className="site-container py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-brand-green/40 bg-background/80 p-10 text-center backdrop-blur-2xl shadow-xl">
          <div className="mb-4 flex justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-brand-green/10">
              <CheckCircle2 className="size-8 text-brand-green-text" />
            </span>
          </div>
          <h2 className="font-head text-2xl font-extrabold text-foreground">
            {ar ? "تم استلام طلبك بنجاح!" : "Request Received Successfully!"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {ar
              ? `رقم المرجع: ${form.refNum} — سيتواصل معك فريقنا خلال 48 ساعة عمل.`
              : `Reference: ${form.refNum} — Our team will contact you within 48 business hours.`}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:info@sami-trade.com?subject=Project Inquiry ${form.refNum}&body=Project: ${form.projectName}%0AType: ${form.projectType}%0AContact: ${form.contact} — ${form.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
            >
              <span>{ar ? "راسلنا مباشرة" : "Email Us Directly"}</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-6 py-3 text-sm font-bold text-foreground transition hover:border-brand-green"
            >
              <MessageCircle className="size-4" />
              <span>WhatsApp</span>
            </a>
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
          <span>{ar ? "ابدأ مشروعك" : "Start Your Project"}</span>
        </div>
        <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
          {ar ? "نصنع المستقبل برؤية هندسية متكاملة" : "Build the Future with Integrated Engineering Vision"}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {ar
            ? "أكمل النموذج أدناه وسيتواصل معك فريقنا خلال 48 ساعة عمل بعرض مفصّل."
            : "Complete the form below and our team will reach out within 48 business hours with a detailed proposal."}
        </p>
        <div className="mt-6 flex items-center justify-center gap-1">
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
        <p className="mt-2 text-xs text-muted-foreground">
          {ar ? `الخطوة ${step} من ${totalSteps}` : `Step ${step} of ${totalSteps}`}
        </p>
      </div>

      <div className="mx-auto max-w-3xl rounded-3xl border border-white/30 bg-background/80 p-8 sm:p-10 backdrop-blur-2xl shadow-xl">
        {step === 1 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "معلومات المشروع" : "Project Information"}</h3>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "اسم المشروع *" : "Project Name *"}</label>
              <input
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                value={form.projectName}
                onChange={(e) => up("projectName", e.target.value)}
                placeholder={ar ? "مثال: برج سكني في القاهرة الجديدة" : "e.g. Residential Tower in New Cairo"}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "نوع المشروع *" : "Project Type *"}</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => up("projectType", t)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.projectType === t
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                        : "border-border text-foreground hover:border-brand-green"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "موقع المشروع *" : "Project Location *"}</label>
              <input
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                value={form.projectLocation}
                onChange={(e) => up("projectLocation", e.target.value)}
                placeholder={ar ? "المحافظة / المدينة / المنطقة" : "Governorate / City / District"}
              />
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "نطاق العمل" : "Scope of Work"}</h3>
            <div>
              <label className="block text-xs font-bold text-foreground mb-2">{ar ? "الخدمات المطلوبة (اختر ما ينطبق)" : "Required Services (select all that apply)"}</label>
              <div className="flex flex-wrap gap-2">
                {servicesList.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleService(s)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.services.includes(s)
                        ? "border-brand-green bg-brand-green/10 text-brand-green-text"
                        : "border-border text-foreground hover:border-brand-green"
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "ملاحظات إضافية عن النطاق" : "Additional Scope Notes"}</label>
              <textarea
                rows={4}
                className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none resize-none"
                value={form.scopeNotes}
                onChange={(e) => up("scopeNotes", e.target.value)}
                placeholder={ar ? "وصف مختصر لنطاق المشروع ومتطلباته..." : "Brief description of project scope and requirements..."}
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "الميزانية والجدول الزمني" : "Budget & Timeline"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "الميزانية التقريبية" : "Approximate Budget"}</label>
                <input
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.budget}
                  onChange={(e) => up("budget", e.target.value)}
                  placeholder={ar ? "مثال: 5,000,000" : "e.g. 5,000,000"}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "العملة" : "Currency"}</label>
                <select
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.currency}
                  onChange={(e) => up("currency", e.target.value)}
                >
                  <option value="EGP">EGP</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="SAR">SAR</option>
                  <option value="AED">AED</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "تاريخ البداية المتوقع" : "Expected Start Date"}</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.startDate}
                  onChange={(e) => up("startDate", e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "تاريخ الانتهاء المتوقع" : "Expected End Date"}</label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.endDate}
                  onChange={(e) => up("endDate", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "نوع العقد" : "Contract Type"}</label>
              <div className="flex flex-wrap gap-2">
                {contractTypes.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => up("contractType", t)}
                    className={cn(
                      "rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.contractType === t
                        ? "border-brand-orange bg-brand-orange/10 text-brand-orange"
                        : "border-border text-foreground hover:border-brand-green"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "بيانات العميل" : "Client Information"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "company", labelAr: "الشركة / الجهة *", labelEn: "Company / Entity *", ph: ar ? "اسم الشركة أو الجهة" : "Company or entity name" },
                { k: "contact", labelAr: "اسم التواصل *", labelEn: "Contact Name *", ph: ar ? "الاسم الكامل" : "Full name" },
                { k: "title", labelAr: "المسمى الوظيفي", labelEn: "Job Title", ph: ar ? "المسمى الوظيفي" : "Your job title" },
                { k: "email", labelAr: "البريد الإلكتروني *", labelEn: "Business Email *", ph: "name@company.com" },
                { k: "phone", labelAr: "رقم الجوال *", labelEn: "Phone Number *", ph: "+20 10x xxx xxxx" },
                { k: "country", labelAr: "الدولة", labelEn: "Country", ph: ar ? "مصر" : "Egypt" },
                { k: "website", labelAr: "الموقع الإلكتروني", labelEn: "Website", ph: "https://yourcompany.com" },
              ].map(({ k, labelAr, labelEn, ph }) => (
                <div key={k} className={k === "company" || k === "website" ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-bold text-foreground mb-1">{ar ? labelAr : labelEn}</label>
                  <input
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                    value={(form as unknown as Record<string, string>)[k]}
                    onChange={(e) => up(k, e.target.value)}
                    placeholder={ph}
                    type={k === "email" ? "email" : k === "website" ? "url" : "text"}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "المراجعة والإرسال" : "Review & Submit"}</h3>
            <div className="rounded-2xl border border-border/60 bg-secondary/30 p-5 space-y-3 text-sm">
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "المشروع:" : "Project:"}</span>
                <span className="font-semibold text-foreground">{form.projectName || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "النوع:" : "Type:"}</span>
                <span className="font-semibold text-foreground">{form.projectType || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "الخدمات:" : "Services:"}</span>
                <span className="font-semibold text-foreground text-end">{form.services.join(", ") || "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "الميزانية:" : "Budget:"}</span>
                <span className="font-semibold text-foreground">{form.budget ? `${form.budget} ${form.currency}` : "—"}</span>
              </div>
              <div className="flex justify-between gap-2">
                <span className="text-muted-foreground">{ar ? "جهة التواصل:" : "Contact:"}</span>
                <span className="font-semibold text-foreground">{form.contact || "—"} — {form.email || "—"}</span>
              </div>
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => up("consent", e.target.checked)}
                className="mt-1 size-4 accent-brand-green"
              />
              <span className="text-xs text-muted-foreground leading-relaxed">
                {ar
                  ? "أوافق على مشاركة بياناتي مع فريق مجموعة سامي بن عياد للتواصل بشأن هذا المشروع."
                  : "I agree to share my information with Sami Bin Ayyad Group team for communication regarding this project."}
              </span>
            </label>
            <div className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-xs text-muted-foreground">
              <p>{ar ? "📧 للتواصل المباشر: info@sami-trade.com" : "📧 Direct contact: info@sami-trade.com"}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setStep((p) => Math.max(1, p - 1))}
            disabled={step === 1}
            className="rounded-full px-6"
          >
            {ar ? "السابق" : "Back"}
          </Button>
          {step < totalSteps ? (
            <Button
              size="sm"
              onClick={() => setStep((p) => Math.min(totalSteps, p + 1))}
              className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8"
            >
              {ar ? "التالي" : "Next"}
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={!form.consent || !form.projectName || !form.contact || !form.email}
              className="rounded-full bg-brand-orange hover:bg-brand-green text-white px-8"
            >
              {ar ? "إرسال الطلب" : "Submit Request"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}


