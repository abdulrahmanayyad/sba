import { Link } from "@tanstack/react-router";
import { ArrowRight, Building2, ExternalLink, Globe2, Handshake, Mail, MessageCircle, Newspaper, Sparkles, TrendingUp } from "lucide-react";

const heroBg = "/BG/Main Home Page.jpg";
import { Button } from "@/components/ui/button";
import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { useLanguage } from "@/i18n/language-context";
import { getMessages } from "@/i18n";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { JourneySection } from "./journey-section";
import { BusinessDashboard, WhatWeOfferSection } from "./business-dashboard";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { aboutTabs, divisions, sectorOverviews, strategicPartners, whoWeServe } from "./group-data";
import { SectorsShowcase } from "./sectors-showcase";
import { JoinShowcase } from "./join-showcase";
import { getLatestNewsArticles } from "@/components/news/news-data";
import { HomeTradeSection } from "@/components/home/home-trade-section";


export function GroupPage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const messages = getMessages(language);

  const titleLines = messages.hero.title.split("•").map((line) => line.trim());

  return (
    <HomeMotion key={language} variant="group">
      {/* Hero */}
      <section data-home-hero className="relative min-h-[min(640px,calc(100svh-76px))] overflow-hidden text-footer-foreground">
        <img data-hero-image src={heroBg} alt={ar ? "بناء مستقبل مستدام معًا" : "Building a Sustainable Future Together"} width={1920} height={1088} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        <div className="group-hero-overlay absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        <div className="site-container relative flex min-h-[inherit] flex-col justify-center py-14 sm:py-20 z-10">
          <div>
            <div data-hero-reveal className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide backdrop-blur-md shadow-sm">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-bold text-black dark:text-white font-head">{ar ? "مجموعة سامي بن عياد - الصفحة الرئيسية" : "SAMI BIN AYYAD GROUP - Homepage"}</span>
            </div>
            <h1 data-hero-reveal className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
              {ar ? messages.hero.titleAr : messages.hero.title}
            </h1>
            <p data-hero-reveal className="mt-3 max-w-3xl text-base sm:text-lg font-bold leading-relaxed text-brand-orange">{messages.hero.lead}</p>
            <div data-hero-reveal className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full !bg-brand-green !text-white px-7 py-3 font-head text-xs sm:text-sm font-bold shadow-lg transition-all duration-300 hover:!bg-brand-orange hover:scale-105 active:scale-95 cursor-pointer">
                <a href="#divisions">
                  {ar ? "استكشف قطاعاتنا" : "Explore Our Business Sectors"} <ArrowRight className="size-4 rtl:rotate-180" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate introduction */}
      <section className="site-container section-band">
        <Reveal>
          <div className="glass-box-interactive group mx-auto max-w-4xl rounded-3xl p-8 sm:p-12 text-center cursor-pointer">
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green font-head">{ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}</span>
              </div>
              <h2 className="section-title mt-2 text-center mx-auto">{ar ? "نقود التقدم عبر القطاعات" : "Driving Progress Across Sectors"}</h2>
              <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-3 text-start">
                {ar ? (
                  <>
                    <p className="leading-relaxed text-start">
                      نطوّر أعمالًا رائدة في المقاولات والتطوير العقاري، والبيئة والاستدامة، وتصنيع الملابس وتطوير الأزياء، والمنتجات الطبيعية والغذائية. يجمع عملنا بين الفهم العميق لمتطلبات العملاء وبناء شراكات تجارية موثوقة تستند إلى أعلى معايير الجودة والشفافية.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-start">
                      تستند المجموعة إلى خبرات مؤسسية وتنفيذية عريقة تمتد جذورها منذ عام <span className="font-bold text-foreground">1977</span> في قطاع الإنشاءات والمقاولات، وتوجت بتأسيس الكيان المؤسسي الموحد للمجموعة عام <span className="font-bold text-foreground">2023</span> لتكامل القدرات الصناعية والاستثمارية عبر 4 قطاعات رئيسية.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="leading-relaxed text-start">
                      Our operations span four integrated sectors: contracting and real estate development, environment and sustainability, apparel manufacturing and fashion development, and natural agri-food products. We focus on delivering value, disciplined execution, and long-term corporate partnerships.
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed text-start">
                      The Group builds upon foundational commercial and contracting experience dating back to <span className="font-bold text-foreground">1977</span>, formally unified into its institutional corporate structure in <span className="font-bold text-foreground">2023</span> to drive multidisciplinary growth across global markets.
                    </p>
                  </>
                )}
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="group relative inline-flex items-center justify-center gap-2 rounded-full !bg-brand-green !text-white px-7 py-3 font-head text-sm font-bold shadow-lg transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 cursor-pointer">
                  <a href="#divisions">
                    {ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"} <ArrowRight className="size-4 rtl:rotate-180" />
                  </a>
                </Button>
                <Button asChild size="lg" className="rounded-full bg-brand-green text-white hover:bg-brand-orange px-7 py-3 font-head text-sm font-bold transition-all duration-300 hover:scale-105 active:scale-95 shadow-md cursor-pointer">
                  <Link to="/about">
                    {ar ? "رحلة المجموعة وتاريخها" : "Our Group Story & History"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Corporate Vision & Mission Cards */}
      <section className="site-container -mt-4 mb-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision Card */}
            <div className="glass-box-interactive group rounded-3xl p-8 text-center cursor-pointer">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="font-bold text-brand-green">{ar ? "رؤيتنا" : "Our Vision"}</span>
                </div>
                <h3 className="text-center font-head text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {ar ? "شريك موثوق وقيمة مستدامة للعملاء والشركاء" : "A Trusted Business Partner Creating Lasting Value"}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground text-center">
                  {ar
                    ? "أن نكون شريكًا موثوقًا في القطاعات التي نعمل بها، وأن نبني أعمالًا قابلة للنمو تحقق قيمة للعملاء والشركاء."
                    : "To become a trusted business partner in our chosen sectors, building businesses that create lasting value for clients and partners."}
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="glass-box-interactive group rounded-3xl p-8 text-center cursor-pointer">
              <div className="relative z-10">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span className="font-bold text-brand-green">{ar ? "رسالتنا" : "Our Mission"}</span>
                </div>
                <h3 className="text-center font-head text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                  {ar ? "تحويل الاحتياجات إلى نطاق عمل وحلول عملية" : "Translating Client Needs into Practical Solutions"}
                </h3>
                <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground text-center">
                  {ar
                    ? "تحويل احتياجات العملاء إلى نطاق عمل واضح وحلول قابلة للتنفيذ، من خلال تطوير الكفاءات وتحسين العمليات والاستخدام المسؤول للموارد."
                    : "To translate client needs into clearly defined work and practical solutions through capable teams, coordinated delivery and responsible use of resources."}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sectors Showcase — Integra Magna-style tab section */}
      <SectorsShowcase ar={ar} />

      {/* Sectors at a glance — one homepage showcase */}
      <section id="divisions" aria-labelledby="sectors-heading" className="scroll-mt-24 section-band">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{messages.nav.sectors}</span>
            </div>
            <h2 id="sectors-heading" className="section-title">{ar ? "قطاعاتنا في لمحة" : "Our Sectors at a Glance"}</h2>
            <p className="section-intro mt-4">{ar ? "نظرة عامة على قدراتنا وخبراتنا وأنشطة أعمالنا." : "An Overview of Our Capabilities, Experience, and Business Activities."}</p>
          </Reveal>
          <div className="mt-12 grid gap-10 md:mt-16 md:gap-12">
            {sectorOverviews.map((sector, index) => (
              <article
                key={sector.slug}
                className="glass-box-interactive grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14 rounded-3xl p-6 sm:p-10 cursor-pointer"
              >
                <Reveal className={cn("overflow-hidden rounded-2xl shadow-sm", index % 2 === 1 && "md:order-2")}>
                  <img src={sector.image} alt={ar ? sector.headlineAr : sector.headline} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none" />
                </Reveal>
                <Reveal delay={0.08} className={cn(index % 2 === 1 && "md:order-1")}>
                  <span className="font-mono text-xs font-bold text-brand-orange">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-head text-2xl font-bold leading-snug md:text-3xl">{ar ? sector.headlineAr : sector.headline}</h3>
                  <p className={cn("mt-2 text-xs font-semibold text-muted-foreground", ar ? "font-sans tracking-normal text-sm" : "font-mono uppercase tracking-[0.14em] text-[11px]")}>{ar ? sector.subtitleAr : sector.subtitle}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{ar ? sector.descriptionAr : sector.description}</p>
                  <p className={cn("mt-6 font-bold text-brand-green", ar ? "font-sans tracking-normal text-xs" : "font-mono text-[10px] uppercase tracking-[0.18em]")}>{ar ? sector.supportingLabelAr : sector.supportingLabel}</p>

                  {/* Internal Subsectors Overview */}
                  {sector.subsectors && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {sector.subsectors.map((sub, sIdx) => (
                        <div key={sIdx} className="rounded-xl border border-white/50 bg-white/40 dark:bg-white/10 p-3.5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-green/60 hover:shadow-md hover:bg-white/60 dark:hover:bg-white/20">
                          <p className="font-head text-xs sm:text-sm font-bold text-foreground">
                            {ar ? sub.titleAr : sub.titleEn}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                            {ar ? sub.descAr : sub.descEn}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {sector.figures && (
                    <div data-stagger className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {sector.figures.map((figure) => {
                        return (
                          <div key={figure.label} className="border-t border-border pt-3">
                            <p
                              className={cn(
                                "font-head text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm transition-all",
                                ar ? "text-right" : "text-left"
                              )}
                            >
                              <AnimatedStatistic value={figure.value} />
                            </p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground font-semibold">{ar ? figure.labelAr : figure.label}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  {sector.chips && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sector.chips.map((chip) => (
                        <span key={chip.en} className="glass-chip px-3 py-1.5 text-xs font-semibold">{ar ? chip.ar : chip.en}</span>
                      ))}
                    </div>
                  )}
                  {sector.brand && <p className="mt-5 font-head text-sm font-bold text-brand-orange">{ar ? sector.brandAr : sector.brand}</p>}
                  <Button asChild size="default" className="mt-7 group relative inline-flex items-center justify-center gap-2 rounded-full !bg-brand-green !text-white px-6 py-2.5 font-head text-sm font-bold shadow-md transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95 cursor-pointer">
                    <Link to="/sectors/$sector" params={{ sector: sector.slug }} search={sector.tab ? { tab: sector.tab } : {}}>
                      {ar ? sector.ctaAr : sector.cta} <ArrowRight className="size-4 rtl:rotate-180 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                    </Link>
                  </Button>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer — Directly under Our Sectors at a Glance after Food & Natural Products */}
      <WhatWeOfferSection ar={ar} />

      {/* Group Performance & Verified Markets Map */}
      <BusinessDashboard ar={ar} />

      {/* Journey & History */}
      <JourneySection ar={ar} />

      {/* Verified Strategic Alliances Section */}
      <section className="site-container py-14 scroll-mt-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "تحالفاتنا وشراكاتنا" : "Our Strategic Partners"}</span>
              </div>
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
                {ar ? "شراكات استراتيجية وتقنية دولية" : "Strategic & Technological Alliances"}
              </h2>
              <p className="section-intro mt-2 max-w-2xl text-sm sm:text-base">
                {ar
                  ? "شبكة موثقة من التحالفات الصناعية والتكنولوجية العالمية تدعم الابتكار والقدرات التشغيلية للمجموعة."
                  : "Verified global alliances driving technological innovation and expanding our operational capabilities."}
              </p>
            </div>
            <Button asChild size="default" className="rounded-full !bg-brand-green !text-white px-5 py-2 text-xs font-bold shadow-md transition-all duration-300 hover:!bg-brand-orange hover:scale-105 active:scale-95 shrink-0 cursor-pointer">
              <Link to="/partners">
                {ar ? "عرض كافة الشركاء" : "View All Partners"} <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {strategicPartners.slice(0, 4).map((p, idx) => {
              const partnerLinks: Record<string, string> = {
                dianyingpu: "https://www.dyp-sensor.com",
                jumptek: "https://www.jumptek.com",
                renergon: "https://www.renergon-biogas.com",
                technoset: "https://www.technoset.com",
              };
              const partnerShort: Record<string, string> = {
                dianyingpu: "DYP Sensor",
                jumptek: "JumpTek Water",
                renergon: "RENERGON Biogas",
                technoset: "TechnoSet Systems",
              };
              const url = partnerLinks[p.id] || "https://www.sami-trade.com/partners";
              return (
                <div
                  key={p.id}
                  className="glass-box-interactive rounded-3xl p-6 flex flex-col justify-between cursor-pointer"
                >
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className={cn(
                          "text-xs font-bold text-brand-orange bg-brand-orange/10 px-2.5 py-0.5 rounded-full border border-brand-orange/20",
                          ar ? "font-sans" : "font-mono"
                        )}>
                          {ar ? p.countryAr : p.country}
                        </span>
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full">
                          <Handshake className="size-3" />
                          <span>{partnerShort[p.id] || "Partner"}</span>
                        </span>
                      </div>
                      <h3 className="text-start font-head text-base font-bold text-foreground group-hover:text-brand-green transition-colors">
                        {ar ? p.nameAr : p.name}
                      </h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-start">
                        {ar ? p.descriptionAr : p.description}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-brand-green">
                        {ar ? p.tagAr : p.tag}
                      </span>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-brand-orange hover:text-brand-green transition-colors"
                        aria-label={`${ar ? p.nameAr : p.name} Official Website`}
                      >
                        <span>{ar ? "الموقع الرسمي" : "Official Website"}</span>
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* International Trade Footprint Section (2025 Market Intelligence) */}
      <HomeTradeSection ar={ar} />

      {/* Latest Corporate News & Industry Insights */}
      <section className="site-container py-14 rounded-3xl my-8 scroll-mt-24">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "المركز الإعلامي" : "News & Media"}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                {ar ? "آخر أخبار ورؤى المجموعة" : "Latest News & Insights"}
              </h2>
              <p className="section-intro mt-2 max-w-2xl text-sm sm:text-base">
                {ar
                  ? "متابعة مستمرة لأحدث التطورات المؤسسية، الصفقات الصناعية، والتقارير التحليلية لأسواقنا."
                  : "Stay updated with institutional announcements, sector achievements, and market insights."}
              </p>
            </div>
            <Button asChild size="default" className="rounded-full !bg-brand-green !text-white px-5 py-2 text-xs font-bold shadow-md transition-all duration-300 hover:!bg-brand-orange hover:scale-105 active:scale-95 shrink-0 cursor-pointer">
              <Link to="/news">
                {ar ? "كافة الأخبار والتقارير" : "All News & Reports"} <ArrowRight className="size-3.5 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {getLatestNewsArticles().slice(0, 3).map((article, idx) => (
              <article
                key={article.id}
                className="glass-box-interactive rounded-3xl flex flex-col justify-between cursor-pointer"
              >
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary">
                      <img
                        src={article.image}
                        alt={ar ? article.titleAr : article.titleEn}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-3 start-3 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md">
                        <Newspaper className="size-3" />
                        <span>{ar ? article.dateAr : article.dateEn}</span>
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 text-start">
                      <h3 className="text-start font-head text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-brand-green transition-colors">
                        {ar ? article.titleAr : article.titleEn}
                      </h3>
                      <p className="mt-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 text-start">
                        {ar ? article.excerptAr : article.excerptEn}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 pt-0 text-start">
                    <Link
                      to="/news/$slug"
                      params={{ slug: article.slug }}
                      className="inline-flex items-center gap-2 text-xs font-bold text-brand-green group-hover:text-brand-green transition-colors"
                    >
                      <span>{ar ? "قراءة التحليل والمقال" : "Read Full Article"}</span>
                      <ArrowRight className="size-3.5 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Investment & Strategic Opportunities Section */}
      <section className="site-container py-12 scroll-mt-24">
        <Reveal>
          <div className="glass-box-interactive rounded-3xl p-8 sm:p-12 cursor-pointer">
            <div className="relative z-10 grid gap-6 lg:grid-cols-12 items-center">
              <div className="lg:col-span-8">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "الاستثمار والشراكات الاستراتيجية" : "Investment & Strategic Alliances"}</span>
                </div>
                <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                  {ar ? "فرص استثمارية وشراكات تطوير عبر عدة قطاعات حيوية" : "Strategic Investment & Co-Development Opportunities"}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {ar
                    ? "نستقبل المستثمرين والمؤسسات والصناديق لمناقشة المشروعات المشتركة، التوسع الصناعي في تصنيع الملابس، محطات تدوير الموارد والبيئة، وفرص المقاولات الكبرى والتوريد التصديري."
                    : "We welcome investors, funds, and strategic partners to explore co-development projects, apparel manufacturing expansion, circular environmental plants, and turnkey infrastructure ventures."}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Button asChild size="lg" className="rounded-full !bg-brand-green !text-white px-6 py-3 font-head text-xs sm:text-sm font-bold shadow-lg transition-all hover:!bg-brand-orange hover:scale-105 active:scale-95 cursor-pointer">
                  <Link to="/join/group">
                    {ar ? "طلب اجتماع استثماري" : "Request Investment Meeting"} <ArrowRight className="size-4 rtl:rotate-180" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="rounded-full bg-brand-green text-white px-6 py-3 font-head text-xs sm:text-sm font-bold shadow-lg transition-all hover:bg-brand-orange hover:scale-105 active:scale-95 cursor-pointer">
                  <Link to="/partners">
                    {ar ? "استكشف نماذج التعاون" : "Explore Partnership Models"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Join Us Pathways — 3 Concise Cards linking to dedicated pages */}
      <JoinShowcase />

      {/* Final CTA — Interactive Glassmorphic Island matching Footer */}
      <section id="contact" className="relative px-4 pb-10 pt-4 text-foreground scroll-mt-24">
        <div className="glass-box-interactive mx-auto max-w-6xl rounded-3xl p-8 sm:p-12 cursor-pointer">
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "تواصل وشراكات الأعمال" : "Business & Partnership Connect"}</span>
              </div>
              <h2 className="section-title mt-2 text-foreground">{ar ? "نبني شراكات الغد اليوم" : "Let's Build What's Next"}</h2>
              <p className="section-intro mt-4 text-muted-foreground">{ar ? "استكشف فرص التعاون المتكاملة مع مجموعة سامي بن عياد عبر التصنيع، الإنشاءات، والحلول البيئية والمنتجات التصديرية." : "Explore multidisciplinary collaboration opportunities with SAMI BIN AYYAD GROUP across manufacturing, construction, environmental solutions, and global trade."}</p>
              
              {/* Quick Action Pills */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <Button asChild size="sm" className="rounded-full !bg-brand-green !text-white text-xs font-bold hover:!bg-brand-orange transition-colors cursor-pointer">
                  <Link to="/sectors/$sector" params={{ sector: "construction" }} search={{ tab: "projects" }}>
                    {ar ? "بدء مشروع" : "Start a Project"}
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-brand-green text-white text-xs font-bold hover:bg-brand-orange transition-colors cursor-pointer">
                  <Link to="/partners">
                    {ar ? "كن شريكًا" : "Become a Partner"}
                  </Link>
                </Button>
                <Button asChild size="sm" className="rounded-full bg-brand-green text-white text-xs font-bold hover:bg-brand-orange transition-colors cursor-pointer">
                  <Link to="/join/group">
                    {ar ? "فرص الاستثمار" : "Explore Investment"}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="min-w-0 flex flex-col gap-4">
              <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#0066CC]/30 bg-[#0066CC]/5 p-5 text-start whitespace-normal hover:border-[#0066CC] hover:bg-[#0066CC]/15 hover:shadow-lg sm:p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
                <a data-email-contact href="mailto:info@sami-trade.com" aria-label={ar ? "البريد الإلكتروني الرسمي: info@sami-trade.com" : "Official Email: info@sami-trade.com"}>
                  <span data-email-icon className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#0066CC]/15 text-[#0066CC]"><Mail aria-hidden="true" className="size-5" /></span>
                  <span data-email-copy className="min-w-0 flex-1">
                    <span className="block font-head text-sm font-bold text-foreground/80">{ar ? "البريد الإلكتروني الرسمي: " : "Official Email: "}</span>
                    <span dir="ltr" className="mt-1 block break-all font-head text-base font-bold text-foreground sm:text-lg">info@sami-trade.com</span>
                  </span>
                  <span data-email-arrow className="shrink-0 text-[#0066CC]"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
                </a>
              </Button>

              <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-5 text-start whitespace-normal hover:border-[#25D366] hover:bg-[#25D366]/15 hover:shadow-lg sm:p-6 backdrop-blur-md transition-all duration-300 hover:scale-[1.01] active:scale-[0.98]">
                <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="WhatsApp Direct: +20 12 222 380 72">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]"><MessageCircle aria-hidden="true" className="size-5" /></span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-head text-sm font-bold text-foreground/80">WhatsApp Direct: </span>
                    <span dir="ltr" className="mt-1 block font-head text-base font-bold text-foreground sm:text-lg">+20 12 222 380 72</span>
                  </span>
                  <span className="shrink-0 text-[#25D366]"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}


