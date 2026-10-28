import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight, Layers, MessageCircle, Phone, Send, Sparkles, Trophy } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/home/reveal";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { sectorOrder, sectorFullMenu, sectors, type SectorPageData, type SectorSlug } from "./sector-data";
import { sectionId } from "./sector-navigation";

import heroSustainable from "@/assets/hero-sustainable.png";
import enviroImg from "@/assets/sector-enviro.jpg";
import foodImg from "@/assets/sector-food.jpg";
import researchImg from "@/assets/sector-research.jpg";
import educationImg from "@/assets/sector-education.jpg";
import constructionImg from "@/assets/sector-construction.jpg";
import apparelImg from "@/assets/sector-apparel.jpg";

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

// Visual placeholders mapping for internal section richness
const sectorImagesPool: Record<SectorSlug, string[]> = {
  environmental: [enviroImg, heroSustainable, constructionImg, apparelImg],
  food: [foodImg, heroSustainable, foodImg, enviroImg],
  research: [researchImg, educationImg, researchImg, heroSustainable],
  education: [educationImg, researchImg, educationImg, heroSustainable],
  construction: [constructionImg, heroSustainable, constructionImg, enviroImg],
  garment: [apparelImg, heroSustainable, apparelImg, constructionImg],
};

// Key sector stats matching Home page numbers system
const sectorStatsConfig: Record<SectorSlug, Array<{ value: string; labelEn: string; labelAr: string }>> = {
  environmental: [
    { value: "+25", labelEn: "Specialized Environmental Solutions", labelAr: "حلول واستشارات تخصصية" },
    { value: "100%", labelEn: "Regulatory & HSE Compliance", labelAr: "امتثال تام للاشتراطات البيئية" },
    { value: "+8", labelEn: "Target Industrial Sectors", labelAr: "قطاعات صناعية وتنموية نخدمها" },
    { value: "2023", labelEn: "Group Sustainability Pillar", labelAr: "ركيزة الاستدامة في المجموعة" },
  ],
  food: [
    { value: "+4", labelEn: "Core Natural Product Lines", labelAr: "تصنيفات منتجات طبيعية رئيسية" },
    { value: "+15", labelEn: "Honey & Date Varieties", labelAr: "صنفاً من التمور وعسل النحل" },
    { value: "100%", labelEn: "Pure Natural Sourcing", labelAr: "منتجات طبيعية نقية وموثوقة" },
    { value: "+10", labelEn: "Target Regional & Global Markets", labelAr: "أسواق مستهدفة للتوزيع والتصدير" },
  ],
  research: [
    { value: "2008", labelEn: "Scholarly Foundation Year", labelAr: "تاريخ التأسيس والعطاء العلمي" },
    { value: "+50", labelEn: "Published Reference Works", labelAr: "مؤلفاً وبحثاً محققاً معتمداً" },
    { value: "+15", labelEn: "Years of Academic Editing", labelAr: "عاماً في تحقيق التراث والعلوم" },
    { value: "100%", labelEn: "Peer-Reviewed Scholarly Rigor", labelAr: "تحقيق وتأصيل شرعي رصين" },
  ],
  education: [
    { value: "+4", labelEn: "Integrated Learning Tracks", labelAr: "مسارات تعليمية وتأهيلية" },
    { value: "100%", labelEn: "Academic & Values Alignment", labelAr: "تأصيل معرفي وتميز أكاديمي" },
    { value: "+10", labelEn: "Training & Digital Programs", labelAr: "برامج تدريبية وتفاعلية متطورة" },
    { value: "2024", labelEn: "Knowledge & Human Growth", labelAr: "ريادة مستمرة في بناء الأجيال" },
  ],
  construction: [
    { value: "+57", labelEn: "Documented Projects", labelAr: "+57 مشروعاً موثقاً" },
    { value: "+400.5M", labelEn: "Turnover (EGP)", labelAr: "+400.5 مليون جنيه أعمال مسجلة" },
    { value: "+20", labelEn: "Years Practical Track Record", labelAr: "+20 عاماً من الخبرة التنفيذية" },
    { value: "100%", labelEn: "Client Specification Delivery", labelAr: "100% الالتزام بالمواصفات" },
  ],
  garment: [
    { value: "+100K", labelEn: "Pieces Monthly Capacity", labelAr: "+100 ألف قطعة شهرياً" },
    { value: "+20K", labelEn: "Developed Styles", labelAr: "+20 ألف موديل تم تطويره" },
    { value: "+15", labelEn: "Parallel Production Lines", labelAr: "+15 خط إنتاج متوازي" },
    { value: "7", labelEn: "Direct Showrooms", labelAr: "7 معارض كبرى مباشرة" },
  ],
};

export function SectorPage({ sector }: { sector: SectorPageData }) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const sections = sectorFullMenu(sector);
  const name = ar ? sector.nameAr : sector.name;
  const tagline = ar ? sector.taglineAr : sector.tagline;
  const intro = ar ? sector.introAr : sector.intro;

  const stats = sectorStatsConfig[sector.slug] || sectorStatsConfig.environmental;
  const pool = sectorImagesPool[sector.slug] || [sector.image];

  return (
    <div className="w-full space-y-12">
      {/* Sector Hero */}
      <section className="relative w-full overflow-hidden text-footer-foreground min-h-[380px] md:min-h-[460px] lg:min-h-[480px] flex items-center">
        <img
          data-clip-reveal
          src={sector.image}
          alt={name}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
        <div className="site-container relative w-full py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-brand-orange">
              {sector.logo ? (
                <span className="inline-flex rounded-full bg-white px-4 py-2">
                  <img src={sector.logo.url} alt={sector.logo.alt} className="h-6 w-auto sm:h-8" />
                </span>
              ) : (
                <span className="text-white/80">{ar ? sector.companyAr : sector.company}</span>
              )}
            </div>

            <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,6vw,3.75rem)] font-bold leading-[1.15] text-white">
              {name}
            </h1>

            <p className={cn("mt-4 max-w-3xl font-head text-base text-footer-muted sm:text-xl", ar && "font-body")}>
              {tagline}
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-footer-foreground/90 sm:text-base text-justify [text-align-last:start]">
              {intro}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-orange w-full sm:w-auto shadow-md">
                <Link to="/contact">
                  {ar ? "تواصل معنا" : "Contact Us"}
                </Link>
              </Button>
              <Button asChild size="lg" className="bg-brand-green text-white hover:bg-brand-orange w-full sm:w-auto shadow-md">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 me-1.5" /> WhatsApp
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Key Numbers Banner — Matching Home Page Numbers System */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-8 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "p-4 border-b sm:border-b-0 sm:border-e border-border/60 last:border-none",
                    ar ? "text-right" : "text-left"
                  )}
                >
                  <p
                    className={cn(
                      "font-head text-3xl sm:text-4xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                      ar ? "text-right" : "text-left"
                    )}
                  >
                    <AnimatedStatistic value={stat.value} />
                  </p>
                  <p className="mt-2 text-xs sm:text-sm font-semibold text-foreground">
                    {ar ? stat.labelAr : stat.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Section Jump Chips */}
      <section className="site-container">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => (
            <a
              key={section.title}
              href={`#${slugify(section.title)}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-4 py-2 text-xs sm:text-sm font-semibold text-foreground backdrop-blur-md transition hover:border-brand-orange hover:bg-secondary"
            >
              <span className="size-1 rounded-full bg-brand-orange" />
              <span>{ar ? section.titleAr : section.title}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Sector Sections — Each in Curved Glass Container Matching Home Page */}
      <div className="space-y-12">
        {sections.map((section, index) => {
          const sectionImg = pool[index % pool.length];
          return (
            <section
              key={section.title}
              id={slugify(section.title)}
              className="site-container scroll-mt-28"
            >
              <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
                <Reveal>
                  <div className="grid items-center gap-8 lg:grid-cols-12">
                    <div className={cn("space-y-4", sectionImg ? "lg:col-span-7" : "lg:col-span-12")}>
                      <div className="flex items-center gap-3">
                        <SectionBadge title={ar ? section.titleAr : section.title} />
                        <span className="font-mono text-xs font-bold text-muted-foreground/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <h2 className="section-title mt-2">
                        {ar ? section.titleAr : section.title}
                      </h2>

                      <p className="section-intro mt-4 text-justify [text-align-last:start] leading-relaxed">
                        {ar ? section.bodyAr : section.body}
                      </p>

                      {sector.slug === "garment" && section.title === "Our Products" && (
                        <div className="mt-6 flex flex-wrap gap-3">
                          {[
                            { key: "b2c" as const, label: ar ? "منتجات التجزئة B2C" : "B2C Line" },
                            { key: "b2b" as const, label: ar ? "التصنيع للشركات B2B" : "B2B Production" },
                          ].map((item) => (
                            <Button key={item.key} asChild variant="outline">
                              <Link to="/products" search={{ line: item.key }}>
                                {item.label}
                                <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
                              </Link>
                            </Button>
                          ))}
                        </div>
                      )}

                      {sector.slug === "food" && section.title === "Cooperation Opportunities" && (
                        <Button asChild size="lg" className="mt-6 bg-brand-green text-white hover:bg-brand-orange">
                          <Link to="/contact">
                            {ar ? "تواصل معنا لمناقشة التوريد" : "Contact Us for Supply"}
                          </Link>
                        </Button>
                      )}
                    </div>

                    {sectionImg && (
                      <div className="overflow-hidden rounded-2xl border border-border shadow-md lg:col-span-5">
                        <img
                          src={sectionImg}
                          alt={ar ? section.titleAr : section.title}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    )}
                  </div>

                  {/* Feature items if present */}
                  {section.items && (
                    <div className="mt-8 border-t border-border/70 pt-6">
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {section.items.map((item, itemIndex) => (
                          <Reveal key={item.label} delay={itemIndex * 0.04}>
                            <div className="flex h-full items-center justify-between rounded-2xl border border-border/80 bg-card/60 p-4 sm:p-5 backdrop-blur-md shadow-sm transition hover:border-brand-orange/60 hover:shadow-md">
                              <span className="font-head text-sm sm:text-base font-semibold text-foreground">
                                {ar ? item.labelAr : item.label}
                              </span>
                              <CheckCircle2 className="size-4 shrink-0 text-brand-orange ms-2" />
                            </div>
                          </Reveal>
                        ))}
                      </div>
                    </div>
                  )}
                </Reveal>
              </div>
            </section>
          );
        })}
      </div>

      {/* Unified CTA Card Matching Construction / Home Page */}
      <section className="site-container py-8">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <div className="mx-auto max-w-3xl text-center">
            <SectionBadge title={ar ? "دعوة للتواصل" : "Let's Connect"} />
            <h2 className="section-title mt-3">
              {ar ? "ابدأ شراكتك ومشروعك معنا بخطوات واضحة" : "Start Your Partnership with Us Today"}
            </h2>
            <p className="section-intro mx-auto mt-4 text-justify [text-align-last:center]">
              {ar
                ? "فريقنا المتخصص في قطاع الأعمال جاهز لدراسة متطلباتك وتقديم الحلول الفنية والتشغيلية المخصصة لمشروعك، مع الالتزام بأعلى معايير الجودة والاستدامة."
                : "Our dedicated sector team is ready to evaluate your requirements and deliver tailored technical and operational solutions, committed to the highest standards of quality."}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto bg-brand-green text-white hover:bg-brand-orange shadow-md">
                <Link to="/contact">
                  <Send className="size-4 me-2 rtl:rotate-180" />
                  {ar ? "تواصل معنا" : "Contact Us"}
                </Link>
              </Button>
              <Button asChild size="lg" className="w-full sm:w-auto bg-brand-green text-white hover:bg-brand-orange shadow-md">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4 me-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Other Sectors Showcase */}
      {sector.slug !== "food" && (
        <section className="site-container py-8">
          <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
            <div className="max-w-2xl">
              <SectionBadge title={ar ? "قطاعات أخرى" : "Other Sectors"} />
              <h2 className="section-title mt-2">
                {ar ? "استكشف منظومة أعمال المجموعة" : "Explore Group Capabilities"}
              </h2>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {sectorOrder
                .filter((slug) => slug !== sector.slug)
                .map((slug, index) => {
                  const s = sectors[slug];
                  return (
                    <Link
                      key={slug}
                      to="/sectors/$sector"
                      params={{ sector: slug }}
                      className="group overflow-hidden rounded-2xl border border-border bg-card/60 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-lg"
                    >
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-secondary">
                        <img
                          src={s.image}
                          alt={ar ? s.nameAr : s.name}
                          loading="lazy"
                          className="size-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="mt-3">
                        <span className="font-mono text-[10px] font-bold text-brand-orange">
                          0{index + 1}
                        </span>
                        <p className="mt-1 font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition line-clamp-1">
                          {ar ? s.nameAr : s.name}
                        </p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

const slugify = sectionId;
