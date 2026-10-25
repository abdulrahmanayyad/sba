import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

import heroBg from "@/assets/hero-sustainable.png";
import { Button } from "@/components/ui/button";
import { HomeMotion, HomeReveal as Reveal } from "@/components/home/home-motion";
import { useLanguage } from "@/i18n/language-context";
import { getMessages } from "@/i18n";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { JourneySection } from "./journey-section";
import { BusinessDashboard } from "./business-dashboard";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { aboutTabs, divisions, sectorCount, sectorOverviews, whoWeServe } from "./group-data";
import { FactorySlider } from "./factory-slider";
import { SectorsShowcase } from "./sectors-showcase";


export function GroupPage() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const messages = getMessages(language);

  const titleLines = messages.hero.title.split("•").map((line) => line.trim());

  return (
    <HomeMotion key={language} variant="group">
      {/* Hero */}
      <section data-home-hero className="relative min-h-[min(640px,calc(100svh-76px))] overflow-hidden text-footer-foreground">
        <img data-hero-image src={heroBg} alt={ar ? "بناء مستقبل مستدام معاً" : "Building a Sustainable Future Together"} width={1920} height={1088} fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        <div className="group-hero-overlay absolute inset-0" />
        <div className="site-container relative flex min-h-[inherit] flex-col justify-center py-14 sm:py-20">
          <div>
            <p data-hero-reveal className="eyebrow text-brand-orange">{messages.hero.eyebrow}</p>
            <h1 data-hero-reveal className="mt-4 max-w-4xl font-head text-[clamp(1.65rem,3vw,2.6rem)] font-bold leading-tight">
              {ar ? messages.hero.titleAr : messages.hero.title}
            </h1>
            <p data-hero-reveal className="mt-3 max-w-3xl text-sm sm:text-base leading-relaxed text-footer-muted">{messages.hero.lead}</p>
            <p data-hero-reveal className="mt-5 max-w-xl text-sm leading-7 text-footer-muted sm:text-base">{messages.hero.leadBody}</p>
            <div data-hero-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" data-magnetic className="w-full sm:w-auto"><a href="#divisions">{ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"} <ArrowRight className="size-4 rtl:rotate-180" /></a></Button>
              <Button asChild size="lg" className="glass-dark w-full !text-footer-foreground hover:!bg-footer sm:w-auto"><Link to="/contact">{ar ? "اطلب عرض سعر" : "Request a Quote"}</Link></Button>
            </div>
          </div>
          <p className="absolute bottom-12 end-6 hidden font-head text-2xl leading-tight md:block">{ar ? `${sectorCount.ar} قطاعات` : `${sectorCount.en} Sectors`}<br />{ar ? "رؤية واحدة" : "One Vision"}</p>
        </div>
      </section>

      {/* Corporate introduction */}
      <section className="site-container section-band">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">{ar ? "مجموعة سامي عياد" : "Sami Bin Ayyad Group"}</p>
          <h2 className="section-title">{ar ? "نقود التقدم عبر الصناعات" : "Driving Progress Across Industries"}</h2>
          <p className="section-intro mx-auto mt-5">
            {ar
              ? "تجمع مجموعة سامي عياد قدرات أعمال متنوعة في المقاولات والحلول البيئية وتصنيع المنسوجات والملابس والمنتجات الطبيعية. ومن خلال الخبرة التشغيلية والتنفيذ القائم على الجودة والشراكات الاستراتيجية، نعمل على خلق قيمة دائمة عبر الصناعات والأسواق."
              : "SAMI BIN AYYAD GROUP brings together diverse business capabilities across contracting, environmental solutions, textile and garment manufacturing, and natural products. Through operational expertise, quality-driven execution, and strategic partnerships, we work to create lasting value across industries and markets."}
          </p>
          <Button asChild variant="primary" size="lg" data-magnetic className="mt-8"><a href="#divisions">{ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"} <ArrowRight className="size-4 rtl:rotate-180" /></a></Button>
        </Reveal>
      </section>

      {/* Sectors Showcase — Integra Magna-style tab section */}
      <SectorsShowcase ar={ar} />

      {/* Sectors at a glance — one homepage showcase */}
      <section id="divisions" aria-labelledby="sectors-heading" className="scroll-mt-24 bg-page-alt section-band">
        <div className="site-container">
          <Reveal className="max-w-3xl">
            <p className="eyebrow">{messages.nav.sectors}</p>
            <h2 id="sectors-heading" className="section-title">{ar ? "قطاعاتنا في لمحة" : "Our Sectors at a Glance"}</h2>
            <p className="section-intro mt-4">{ar ? "نظرة عامة على قدراتنا وخبراتنا وأنشطة أعمالنا." : "An Overview of Our Capabilities, Experience, and Business Activities."}</p>
          </Reveal>
          <div className="mt-12 grid gap-14 md:mt-16 md:gap-20">
            {sectorOverviews.map((sector, index) => (
              <article key={sector.slug} className="grid items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-14">
                <Reveal className={cn("overflow-hidden", index % 2 === 1 && "md:order-2")}>
                  <img src={sector.image} alt={ar ? sector.headlineAr : sector.headline} loading="lazy" width={944} height={704} className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none" />
                </Reveal>
                <Reveal delay={0.08} className={cn(index % 2 === 1 && "md:order-1")}>
                  <span className="font-mono text-xs text-brand-orange-text">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-head text-2xl font-semibold leading-snug md:text-3xl">{ar ? sector.headlineAr : sector.headline}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{ar ? sector.subtitleAr : sector.subtitle}</p>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{ar ? sector.descriptionAr : sector.description}</p>
                  <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-text">{ar ? sector.supportingLabelAr : sector.supportingLabel}</p>
                  {sector.figures && (
                    <div data-stagger className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {sector.figures.map((figure) => (
                        <div key={figure.label} className="border-t border-border pt-3">
                          <p className="font-head text-xl font-semibold text-brand-green-text md:text-2xl"><AnimatedStatistic value={figure.value} /></p>
                          <p className="mt-1 text-xs leading-5 text-muted-foreground">{ar ? figure.labelAr : figure.label}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  {sector.chips && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {sector.chips.map((chip) => (
                        <span key={chip.en} className="glass-chip px-3 py-1.5 text-xs">{ar ? chip.ar : chip.en}</span>
                      ))}
                    </div>
                  )}
                  {sector.brand && <p className="mt-5 font-head text-sm font-semibold text-brand-orange-text">{ar ? sector.brandAr : sector.brand}</p>}
                  <Button asChild variant="outline" className="mt-7"><Link to="/sectors/$sector" params={{ sector: sector.slug }}>{ar ? sector.ctaAr : sector.cta} <ArrowRight className="size-4 rtl:rotate-180" /></Link></Button>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Overview — Sequential walkthrough from Cutting to Packing */}
      <FactorySlider ar={ar} />

      <BusinessDashboard ar={ar} />

      <section id="about" className="site-container section-band scroll-mt-24">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{ar ? "عن مجموعة سامي عياد" : "About Sami Bin Ayyad Group"}</p>
          <h2 className="section-title">{ar ? "نبني مستقبلًا أقوى معًا" : "Building a Stronger Future Together"}</h2>
          <p className="section-intro mt-4">{ar ? aboutTabs[0]?.bodyAr : aboutTabs[0]?.body}</p>
          <Button asChild variant="primary" size="lg" className="mt-8" data-magnetic><Link to="/about">{ar ? "اعرف المزيد" : "Learn more"} <ArrowRight className="size-4 rtl:rotate-180" /></Link></Button>
        </Reveal>
      </section>

      <JourneySection ar={ar} />

      {/* Partnerships & Markets */}
      <section className="site-container section-band">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{ar ? "الشراكات والأسواق" : "Partnerships & Markets"}</p>
          <h2 className="section-title">{ar ? "نربط القدرات بالفرص العالمية" : "Connecting Capabilities with Global Opportunities"}</h2>
          <p className="section-intro mt-4">{ar ? "تطوّر مجموعة سامي عياد علاقات أعمال عبر قطاعات متنوعة، مع التركيز على التصنيع وتنفيذ المشروعات والتجارة الدولية والشراكات التجارية طويلة الأمد." : "SAMI BIN AYYAD GROUP develops business relationships across diverse sectors, with a focus on manufacturing, project execution, international trade, and long-term commercial partnerships."}</p>
        </Reveal>
        <div data-stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeServe.map((audience) => (
            <div key={audience.en} className="glass-card p-5 font-head font-semibold">{ar ? audience.ar : audience.en}</div>
          ))}
        </div>
        <Reveal className="mt-10">
          <Button asChild variant="primary" size="lg" data-magnetic><Link to="/contact">{ar ? "ناقش شراكة" : "Discuss a Partnership"} <ArrowRight className="size-4 rtl:rotate-180" /></Link></Button>
        </Reveal>
      </section>

      {/* Final CTA */}
      <section id="contact" className="bg-footer text-footer-foreground section-band">
        <div className="site-container grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-brand-green">{ar ? "تواصل معنا" : "Get In Touch"}</p>
            <h2 className="section-title text-footer-foreground">{ar ? "لنبنِ ما هو قادم" : "Let's Build What's Next"}</h2>
            <p className="section-intro mt-4 text-footer-muted">{ar ? "استكشف فرص التعاون مع مجموعة سامي عياد في التصنيع والإنشاءات والحلول البيئية والمنتجات الطبيعية." : "Explore opportunities to collaborate with SAMI BIN AYYAD GROUP across manufacturing, construction, environmental solutions, and natural products."}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="lg" data-magnetic className="w-full sm:w-auto"><Link to="/contact">{ar ? "تواصل مع فريقنا" : "Contact Our Team"}</Link></Button>
              <Button asChild size="lg" className="glass-dark w-full !text-footer-foreground hover:!bg-footer sm:w-auto"><a href="#divisions">{ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"}</a></Button>
              <Button asChild size="lg" className="bg-brand-green w-full text-footer-foreground hover:bg-brand-green-text sm:w-auto"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle className="size-4" /> WhatsApp</a></Button>
            </div>
          </div>
          <div className="min-w-0 self-center">
            <Button asChild variant="ghost" className="glass-dark group relative h-auto w-full justify-start gap-4 overflow-hidden rounded-lg border border-footer-line p-5 text-start whitespace-normal hover:border-brand-green sm:p-7">
              <a data-email-contact href="mailto:info@sami-trade.com">
                <span data-email-icon className="flex size-12 shrink-0 items-center justify-center rounded-full bg-footer-line text-brand-green"><Mail aria-hidden="true" className="size-5" /></span>
                <span data-email-copy className="min-w-0 flex-1">
                  <span className="block font-mono text-[10px] uppercase text-footer-muted">{ar ? "البريد الإلكتروني" : "Email"}</span>
                  <span dir="ltr" className="mt-2 block break-all font-head text-base font-medium sm:text-lg">info@sami-trade.com</span>
                </span>
                <span data-email-arrow className="shrink-0 text-brand-green"><ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" /></span>
              </a>
            </Button>
          </div>
        </div>
      </section>
    </HomeMotion>
  );
}
