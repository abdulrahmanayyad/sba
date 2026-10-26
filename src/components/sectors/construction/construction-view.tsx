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

export type ConstructionTab = "about" | "sectors" | "services" | "projects";

interface ConstructionViewProps {
  tab?: ConstructionTab;
}

export function ConstructionSectorView({ tab = "about" }: ConstructionViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: ConstructionTab = ["about", "sectors", "services", "projects"].includes(tab) ? tab : "about";

  const tabLabels: Record<ConstructionTab, { en: string; ar: string; descEn: string; descAr: string }> = {
    about: {
      en: "About Us",
      ar: "نبذة عن القطاع",
      descEn: "Overview, vision, values, and project delivery methodology",
      descAr: "الرؤية والرسالة، قيم الجودة، ومنهجية تنفيذ المشروعات",
    },
    sectors: {
      en: "Our Sectors",
      ar: "قطاعات نخدمها",
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
      ar: "سجل المشروعات والأعمال",
      descEn: "57+ documented projects and EGP 400.5M+ turnover across Egypt",
      descAr: "أكثر من 57 مشروعًا موثقًا و400.5 مليون جنيه حجم أعمال مسجل",
    },
  };

  return (
    <div className="w-full">
      {/* Sector Hero */}
      <section className="relative text-footer-foreground">
        <img
          data-clip-reveal
          src={constructionHeroData.image}
          alt={ar ? constructionHeroData.titleAr : constructionHeroData.title}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/70" />
        <div className="site-container relative py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-orange">
              <span>{ar ? constructionHeroData.companyAr : constructionHeroData.company}</span>
              <ChevronRight className="size-3.5 rtl:rotate-180" />
              <span className="text-white/80">{ar ? tabLabels[activeTab].ar : tabLabels[activeTab].en}</span>
            </div>

            <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,6vw,3.75rem)] font-bold leading-[1.15] text-white">
              {ar ? constructionHeroData.titleAr : constructionHeroData.title}
            </h1>

            <p className={cn("mt-4 max-w-3xl font-head text-base text-footer-muted sm:text-xl", ar && "font-body")}>
              {ar ? constructionHeroData.subtitleAr : constructionHeroData.subtitle}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-footer-foreground/90 sm:text-base">
              {ar ? constructionHeroData.introAr : constructionHeroData.intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  {ar ? "اطلب عرض سعر" : "Request a Quotation"}
                </Link>
              </Button>
              <Button asChild size="lg" className="glass-dark w-full !text-footer-foreground hover:!bg-footer sm:w-auto">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <Link to="/contact">
                  <HardHat className="size-4" /> {ar ? "انضم إلينا" : "Join Us"}
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contracting Subpage Tab Switcher */}
      <section className="sticky top-[76px] z-40 border-b border-border bg-background/95 backdrop-blur-md">
        <div className="site-container">
          <div className="no-scrollbar -mx-4 flex overflow-x-auto px-4 py-3 sm:mx-0 sm:px-0 sm:gap-2">
            {(["about", "sectors", "services", "projects"] as ConstructionTab[]).map((tabKey) => {
              const active = activeTab === tabKey;
              const info = tabLabels[tabKey];
              return (
                <Link
                  key={tabKey}
                  to="/sectors/$sector"
                  params={{ sector: "construction" }}
                  search={{ tab: tabKey === "about" ? undefined : tabKey }}
                  className={cn(
                    "flex shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold sm:text-sm transition-all",
                    active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-foreground/80 hover:bg-secondary hover:text-foreground"
                  )}
                >
                  <span>{ar ? info.ar : info.en}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Render Active Page Content */}
      {activeTab === "about" && <ConstructionAboutView ar={ar} />}
      {activeTab === "sectors" && <ConstructionSectorsView ar={ar} />}
      {activeTab === "services" && <ConstructionServicesView ar={ar} />}
      {activeTab === "projects" && <ConstructionProjectsView ar={ar} />}

      {/* Bottom CTA & Quote Request Banner */}
      <section className="site-container section-band">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-secondary/80 via-background to-secondary/50 p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">{ar ? "دعوة للتواصل" : "Let's Build Together"}</p>
            <h2 className="section-title mt-2">
              {ar ? "لنبدأ مشروعك بخطوات واضحة وتنفيذ مسؤول" : "Let's Move Your Project Forward with Precision"}
            </h2>
            <p className="section-intro mx-auto mt-4 max-w-2xl">
              {ar
                ? "سواء كنت تخطط لإنشاء مبنى جديد، أو تطوير منشأة قائمة، أو تشطيبات سكنية وتجارية فاخرة، أو تجهيزات طبية وأنظمة كهروميكانيكية، فإننا نرحب بمراجعة متطلباتك ومناقشة نطاق العمل المناسب."
                : "Whether you are planning a new construction build, facility upgrades, turnkey interior fit-out, medical installations, or specialized MEP infrastructure, our technical team welcomes your inquiry."}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild variant="primary" size="lg">
                <Link to="/contact">
                  {ar ? "إرسال طلب مشروع" : "Submit Project Inquiry"} <ArrowRight className="size-4 rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+201222238072" dir="ltr">
                  <Phone className="size-4" /> +20 12 222 380 72
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/** 1. About Us View */
function ConstructionAboutView({ ar }: { ar: boolean }) {
  const data = constructionAboutData;
  return (
    <div className="w-full">
      {/* Partner in Execution */}
      <section className="site-container section-band">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">{ar ? "من نحن" : "About the Division"}</p>
            <h2 className="section-title mt-2">{ar ? data.partnerTitleAr : data.partnerTitle}</h2>
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-7 text-muted-foreground">
              {data.partnerContent.map((item, idx) => (
                <p key={idx}>{ar ? item.ar : item.en}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-6">
              <div className="glass-card rounded-2xl border border-border p-6 sm:p-8">
                <div className="flex items-center gap-3 text-brand-green-text">
                  <Sparkles className="size-5 shrink-0" />
                  <h3 className="font-head text-lg font-bold">{ar ? data.mission.titleAr : data.mission.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/90">{ar ? data.mission.bodyAr : data.mission.body}</p>
              </div>

              <div className="glass-card rounded-2xl border border-border p-6 sm:p-8">
                <div className="flex items-center gap-3 text-brand-orange-text">
                  <Trophy className="size-5 shrink-0" />
                  <h3 className="font-head text-lg font-bold">{ar ? data.vision.titleAr : data.vision.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-foreground/90">{ar ? data.vision.bodyAr : data.vision.body}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="border-y border-border bg-page-alt section-band">
        <div className="site-container">
          <Reveal>
            <div className="max-w-3xl">
              <p className="eyebrow">{ar ? "الجودة والالتزام" : "Quality Assurance"}</p>
              <h2 className="section-title mt-2">{ar ? data.quality.titleAr : data.quality.title}</h2>
              <p className="mt-4 text-base leading-8 text-foreground/90">{ar ? data.quality.bodyAr : data.quality.body}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="site-container section-band">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow">{ar ? "لماذا سامي بن عياد للمقاولات؟" : "Why Choose SAMI BIN AYYAD GROUP?"}</p>
            <h2 className="section-title mt-2">{ar ? data.whyChooseUs.titleAr : data.whyChooseUs.title}</h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.whyChooseUs.pillars.map((pillar, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="glass-card group flex h-full flex-col rounded-2xl border border-border p-6 transition-all hover:border-brand-green/60 hover:shadow-md">
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
      </section>

      {/* Project Delivery Steps */}
      <section className="border-t border-border bg-page-alt section-band">
        <div className="site-container">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow">{ar ? "منهجية العمل" : "Project Delivery Process"}</p>
              <h2 className="section-title mt-2">{ar ? data.deliveryProcess.titleAr : data.deliveryProcess.title}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {data.deliveryProcess.steps.map((step) => (
              <Reveal key={step.number}>
                <div className="glass-card flex h-full flex-col rounded-2xl border border-border p-6">
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
  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{ar ? "قطاعات نخدمها" : "Sectors We Serve"}</p>
            <h2 className="section-title mt-2">{ar ? data.titleAr : data.title}</h2>
            <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-12">
          {data.sectors.map((sector, index) => (
            <Reveal key={sector.id} delay={index * 0.05}>
              <div className="glass-card overflow-hidden rounded-3xl border border-border p-6 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-6">
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-orange-text">{sector.number}</span>
                    <h3 className="mt-1 font-head text-xl font-bold sm:text-2xl text-foreground">{ar ? sector.titleAr : sector.title}</h3>
                    <p className="mt-1 text-sm font-medium text-brand-green-text">{ar ? sector.taglineAr : sector.tagline}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm sm:text-base leading-7 text-foreground/90">{ar ? sector.bodyAr : sector.body}</p>

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
          ))}
        </div>
      </section>
    </div>
  );
}

/** 3. Our Services View */
function ConstructionServicesView({ ar }: { ar: boolean }) {
  const data = constructionServicesData;
  return (
    <div className="w-full">
      <section className="site-container section-band">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{ar ? "خدماتنا وتخصصاتنا" : "Our Services"}</p>
            <h2 className="section-title mt-2">{ar ? data.titleAr : data.title}</h2>
            <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {data.services.map((service, idx) => (
            <Reveal key={service.id} delay={idx * 0.05}>
              <div className="glass-card flex h-full flex-col rounded-3xl border border-border p-6 sm:p-8">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono text-xs font-bold text-brand-orange-text">{service.number}</span>
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
            </Reveal>
          ))}
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
    <div className="w-full">
      {/* Key Numbers Banner */}
      <section className="site-container pt-12">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.stats.map((stat, idx) => (
              <div key={idx} className="glass-card rounded-2xl border border-border p-6 text-center">
                <p className="font-mono text-3xl sm:text-4xl font-bold text-brand-orange-text">{stat.value}</p>
                <p className="mt-2 text-xs sm:text-sm font-semibold text-foreground">{ar ? stat.labelAr : stat.labelEn}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects Showcase */}
      <section className="site-container section-band">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{ar ? "سجل الأعمال الموثق" : "Project Portfolio"}</p>
            <h2 className="section-title mt-2">{ar ? data.titleAr : data.title}</h2>
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
                    <div className="glass-card flex h-full flex-col justify-between rounded-2xl border border-border p-5 transition-all hover:border-brand-green/60">
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
                          <span className="font-mono font-bold text-brand-green-text">{ar ? ("valueAr" in proj && proj.valueAr ? proj.valueAr : proj.value) : proj.value}</span>
                        </div>
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
