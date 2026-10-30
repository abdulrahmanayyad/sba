import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const heroBg = "/BG/danist-soh-dqXiw7nCb9Q-unsplash.jpg";
import { Button } from "@/components/ui/button";
import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { useLanguage } from "@/i18n/language-context";
import { getMessages } from "@/i18n";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { JourneySection } from "./journey-section";
import { BusinessDashboard } from "./business-dashboard";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { aboutTabs, divisions, sectorOverviews, strategicPartners, whoWeServe } from "./group-data";
import { SectorsShowcase } from "./sectors-showcase";
import { JoinShowcase } from "./join-showcase";
import { PartnersSlider } from "./partners-slider";


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
            <div data-hero-reveal className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}</span>
            </div>
            <h1 data-hero-reveal className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
              {ar ? messages.hero.titleAr : messages.hero.title}
            </h1>
            <p data-hero-reveal className="mt-3 max-w-3xl text-base sm:text-lg font-bold leading-relaxed text-brand-orange">{messages.hero.lead}</p>
          </div>
        </div>
      </section>

      {/* Corporate introduction */}
      <section className="site-container section-band">
        <Reveal>
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-brand-orange/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-bold text-brand-green">{ar ? "مجموعة سامي بن عياد" : "SAMI BIN AYYAD GROUP"}</span>
            </div>
            <h2 className="section-title mt-2">{ar ? "نقود التقدم عبر الصناعات" : "Driving Progress Across Industries"}</h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-1">
              {ar ? (
                <p className="leading-relaxed">
                  تجمع <span className="text-brand-orange">مجموعة سامي بن عياد</span> قدرات أعمال متنوعة في قطاعات المقاولات، والحلول البيئية، وتصنيع المنسوجات والملابس، والمنتجات الطبيعية. ومن خلال الخبرة التشغيلية والتنفيذ القائم على الجودة والشراكات الاستراتيجية، نعمل جاهدين على خلق وتطوير قيمة دائمة ومستدامة عبر مختلف الصناعات والأسواق.
                </p>
              ) : (
                <p className="">
                  <span className="text-brand-orange">SAMI BIN AYYAD GROUP</span> brings together diverse business capabilities across contracting, environmental solutions, textile and garment manufacturing, and natural products. Through operational expertise, quality-driven execution, and strategic partnerships, we work to create lasting value across industries and markets.
                </p>
              )}
            </div>
            <Button asChild size="lg" className="mt-8 group relative inline-flex items-center justify-center gap-2 rounded-full !bg-brand-green !text-white px-7 py-3 font-head text-sm font-bold shadow-lg transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95">
              <a href="#divisions">
                {ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"} <ArrowRight className="size-4 rtl:rotate-180" />
              </a>
            </Button>
          </div>
        </Reveal>
      </section>

      {/* Corporate Vision & Mission Cards */}
      <section className="site-container -mt-4 mb-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/25 bg-background/80 p-8 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-orange/50">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green">{ar ? "رؤيتنا" : "Our Vision"}</span>
              </div>
              <h3 className="font-head text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                {ar ? "ريادة استثمارية وصناعية تبني قيمة حقيقية تدوم" : "Regional Industrial Leadership & Compounding Value"}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">
                {ar
                  ? "أن نكون مجموعة رائدة وموثوقة إقليميًا ودوليًا في المقاولات والإنشاءات، والحلول البيئية، وصناعة الملابس الجاهزة، والمنتجات الطبيعية، نرتكز على الابتكار والاستدامة لتحقيق أثر تنموي متواصل."
                  : "To be a leading and trusted regional and international group across contracting, environmental solutions, garment manufacturing, and natural products, driven by innovation, quality, and sustainable development."}
              </p>
            </div>

            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-white/25 bg-background/80 p-8 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-orange/50">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green">{ar ? "رسالتنا" : "Our Mission"}</span>
              </div>
              <h3 className="font-head text-xl sm:text-2xl font-extrabold text-foreground leading-snug">
                {ar ? "حلول متكاملة تبتكر وتلبي تطلعات شركائنا" : "Integrated Solutions Delivering Excellence"}
              </h3>
              <p className="mt-4 text-sm sm:text-base leading-7 text-muted-foreground">
                {ar
                  ? "تقديم حلول متكاملة وموثوقة تلبي تطلعات عملائنا وشركائنا، والاستثمار المستمر في كوادرنا وتطوير تقنياتنا التشغيلية، مع الالتزام التام بالمسؤولية المجتمعية والبيئية وصون الموارد للأجيال القادمة."
                  : "Delivering integrated, reliable solutions that exceed partner expectations, continually investing in our people and technology, while upholding corporate and environmental responsibility for generations to come."}
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Sectors Showcase — Integra Magna-style tab section */}
      <SectorsShowcase ar={ar} />

      {/* Sectors at a glance — one homepage showcase */}
      <section id="divisions" aria-labelledby="sectors-heading" className="scroll-mt-24 bg-page-alt section-band">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
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
                className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14 rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/40"
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
                        <div key={sIdx} className="rounded-xl border border-white/20 bg-secondary/50 p-3.5 backdrop-blur-md transition hover:border-brand-green/30">
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
                        const isProminent = sector.slug === "construction" || sector.slug === "garment";
                        return (
                          <div key={figure.label} className="border-t border-border pt-3">
                            <p
                              className={cn(
                                "font-head transition-all drop-shadow-sm",
                                ar ? "text-right" : "text-left",
                                isProminent
                                  ? "text-2xl sm:text-3xl font-black text-brand-orange tracking-tight"
                                  : "text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500"
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

      <BusinessDashboard ar={ar} />

      <JourneySection ar={ar} />

      {/* Partnerships & Markets — Interactive Slider */}
      <section id="partners" className="site-container pt-16 pb-2 scroll-mt-24">
        <Reveal className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "الشراكات والأسواق" : "Partnerships & Markets"}</span>
          </div>
          <h2 className="section-title">{ar ? "نربط القدرات بالفرص العالمية" : "Connecting Capabilities with Global Opportunities"}</h2>
          <p className="section-intro mt-4">
            {ar ? (
              <span>تطوّر <span className="text-brand-orange">مجموعة سامي بن عياد</span> علاقات أعمال عبر قطاعات متنوعة، مع التركيز على التصنيع وتنفيذ المشروعات والتجارة الدولية والشراكات التجارية طويلة الأمد.</span>
            ) : (
              <span><span className="text-brand-orange">SAMI BIN AYYAD GROUP</span> develops business relationships across diverse sectors, with a focus on manufacturing, project execution, international trade, and long-term commercial partnerships.</span>
            )}
          </p>
        </Reveal>

        {/* Strategic International Partnerships (China) */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {strategicPartners.map((partner) => (
            <Reveal key={partner.id}>
              <div className="glass-card h-full flex flex-col justify-between rounded-3xl border border-white/30 bg-background/85 p-6 sm:p-7 shadow-md backdrop-blur-xl transition hover:border-brand-green/50 hover:shadow-xl">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                      <span>🇨🇳</span>
                      <span>{ar ? partner.countryAr : partner.country}</span>
                    </span>
                    <span className="text-xs font-bold text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full border border-brand-orange/20">
                      {ar ? partner.tagAr : partner.tag}
                    </span>
                  </div>
                  <h3 className="font-head text-base sm:text-lg font-bold text-foreground">
                    {ar ? partner.nameAr : partner.name}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ar ? partner.descriptionAr : partner.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Interactive Partnerships Slider */}
        <PartnersSlider ar={ar} />

        <Reveal className="mt-8 text-center sm:text-start">
          <Button asChild size="lg" className="group relative inline-flex items-center justify-center gap-2 rounded-full !bg-brand-green !text-white px-7 py-3 font-head text-sm font-bold shadow-lg transition-all duration-300 hover:!bg-brand-orange hover:shadow-brand-orange/30 hover:scale-105 active:scale-95">
            <a href="#contact">
              {ar ? "ناقش شراكة" : "Discuss a Partnership"} <ArrowRight className="size-4 rtl:rotate-180" />
            </a>
          </Button>
        </Reveal>
      </section>

      {/* Join Us Pathways — 3 Concise Cards linking to dedicated pages */}
      <JoinShowcase />

      {/* Final CTA — Glassmorphic Island matching Footer */}
      <section id="contact" className="relative px-4 pb-6 pt-4 text-foreground scroll-mt-24">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-2xl grid gap-8 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "تواصل معنا" : "Contact Us"}</span>
            </div>
            <h2 className="section-title mt-2 text-foreground">{ar ? "لنبن ما هو قادم" : "Let's Build What's Next"}</h2>
            <p className="section-intro mt-4 text-muted-foreground">{ar ? "استكشف فرص التعاون مع مجموعة سامي عياد في التصنيع والإنشاءات والحلول البيئية والمنتجات الطبيعية." : "Explore opportunities to collaborate with SAMI BIN AYYAD GROUP across manufacturing, construction, environmental solutions, and natural products."}</p>
          </div>
          <div className="min-w-0 flex flex-col gap-4">
            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-border bg-background/60 p-5 text-start whitespace-normal hover:border-brand-green hover:shadow-lg sm:p-6 backdrop-blur-md">
              <a data-email-contact href="mailto:info@sami-trade.com">
                <span data-email-icon className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green"><Mail aria-hidden="true" className="size-5" /></span>
                <span data-email-copy className="min-w-0 flex-1">
                  <span className="block font-head text-sm font-bold text-foreground/80">{ar ? "البريد الإلكتروني" : "Email"}</span>
                  <span dir="ltr" className="mt-1 block break-all font-head text-base font-bold text-foreground sm:text-lg">info@sami-trade.com</span>
                </span>
                <span data-email-arrow className="shrink-0 text-brand-green"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
              </a>
            </Button>

            <Button asChild variant="ghost" className="group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-2xl border border-border bg-background/60 p-5 text-start whitespace-normal hover:border-brand-green hover:shadow-lg sm:p-6 backdrop-blur-md">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-green/10 text-brand-green"><MessageCircle aria-hidden="true" className="size-5" /></span>
                <span className="min-w-0 flex-1">
                  <span className="block font-head text-sm font-bold text-foreground/80">WhatsApp</span>
                  <span dir="ltr" className="mt-1 block font-head text-base font-bold text-foreground sm:text-lg">+20 12 222 380 72</span>
                </span>
                <span className="shrink-0 text-brand-green"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}


