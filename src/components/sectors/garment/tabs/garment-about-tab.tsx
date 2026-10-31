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
  ExternalLink
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentAboutData } from "../garment-data";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { highlightBrand } from "@/components/site/brand-text";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { GarmentPartnersTab } from "./garment-partners-tab";
import { GarmentClientsTab } from "./garment-clients-tab";

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
  const { whoWeAre, whatWeOffer, whyChooseUs, capabilities, infrastructure, markets } = garmentAboutData;

  return (
    <div className="space-y-12 py-4">

      {/* 1 — من نحن | Who We Are */}
      <section id="who-we-are" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "من نحن" : "Who We Are"} />
            </div>

            <h2 className="section-title mt-3">
              {ar ? whoWeAre.headingAr : whoWeAre.heading}
            </h2>

            {/* Main Interactive Description Card */}
            <div className="mt-8 group rounded-2xl border border-border/80 bg-card/70 p-6 sm:p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.005] hover:border-brand-green/50 hover:shadow-md">
              <p className="font-semibold text-foreground text-lg sm:text-xl leading-relaxed">
                {highlightBrand(ar ? whoWeAre.bodyAr : whoWeAre.body)}
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {highlightBrand(ar ? whoWeAre.extendedAr : whoWeAre.extended)}
              </p>
            </div>

            {/* Dedicated Separate Mission & Vision Cards */}
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="group rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-green/50 hover:shadow-md">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}</span>
                </div>
                <h3 className="mt-3 font-head text-lg font-bold text-foreground">
                  {ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ar ? whoWeAre.mission.descAr : whoWeAre.mission.desc}
                </p>
              </div>

              <div className="group rounded-2xl border border-border/80 bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:border-brand-orange/50 hover:shadow-md">
                <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-0.5 text-xs font-bold text-brand-orange">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}</span>
                </div>
                <h3 className="mt-3 font-head text-lg font-bold text-foreground">
                  {ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ar ? whoWeAre.vision.descAr : whoWeAre.vision.desc}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2 — ماذا نقدم | What We Offer */}
      <section id="what-we-offer" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "ماذا نقدم" : "What We Offer"} />
            </div>

            <div className="mt-3">
              <div>
                <h2 className="section-title">
                  {ar ? whatWeOffer.headingAr : whatWeOffer.heading}
                </h2>
                <p className="section-intro mt-2 max-w-2xl">
                  {ar ? whatWeOffer.introAr : whatWeOffer.intro}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whatWeOffer.services.map((item, index) => (
                <div 
                  key={item.id}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/30 bg-card/75 p-6 backdrop-blur-xl shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl active:scale-[0.98] cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex size-8 items-center justify-center rounded-xl bg-brand-orange/15 font-mono text-xs font-bold text-brand-orange">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition">
                      {ar ? item.titleAr : item.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                      {ar ? item.descAr : item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3 — لماذا تختارنا | Why Choose Us */}
      <section id="why-choose-us" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "لماذا تختارنا" : "Why Choose Us"} />
            </div>

            <h2 className="section-title mt-3">
              {ar ? whyChooseUs.headingAr : whyChooseUs.heading}
            </h2>
            <p className="section-intro mt-2 max-w-2xl">
              {ar ? whyChooseUs.subtitleAr : whyChooseUs.subtitle}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.points.map((point) => (
                <div key={point.title} className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-md transition hover:border-brand-orange/50 hover:shadow-md">
                  <h3 className="font-head text-base font-bold text-foreground">
                    {ar ? point.titleAr : point.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ar ? point.descAr : point.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4 — قدراتنا | Our Capabilities */}
      <section id="our-capabilities" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "قدراتنا" : "Our Capabilities"} />
            </div>

            <div className="mt-3">
              <div>
                <h2 className="section-title">
                  {ar ? capabilities.headingAr : capabilities.heading}
                </h2>
                <p className="section-intro mt-2 max-w-2xl">
                  {ar ? capabilities.introAr : capabilities.intro}
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.stats.map((stat, idx) => (
                <div key={stat.labelEn} className={cn(
                  "relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand-orange/50 hover:shadow-lg",
                  ar ? "text-right" : "text-left"
                )}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={cn(
                      "font-head text-2xl sm:text-3xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                      ar ? "text-right" : "text-left"
                    )}>
                      <AnimatedStatistic value={stat.value} />
                    </p>
                    <span className="font-mono text-xs font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2.5 py-0.5">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="mt-2 font-head text-sm font-bold text-foreground">
                    {ar ? stat.labelAr : stat.labelEn}
                  </div>
                  <p className="mt-1 text-xs font-medium text-muted-foreground">
                    {ar ? stat.descAr : stat.descEn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — أسواقنا | Our Markets */}
      <section id="our-markets" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "أسواقنا" : "Our Markets"} />
            </div>

            <h2 className="section-title mt-3">
              {ar ? markets.headingAr : markets.heading}
            </h2>
            <p className="section-intro mt-2 max-w-2xl">
              {ar ? markets.subtitleAr : markets.subtitle}
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-3xl">
              {ar ? markets.overviewAr : markets.overview}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {markets.regions.map((reg) => (
                <div key={reg.id} className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/50 hover:shadow-md cursor-pointer">
                  <div className="flex items-center justify-between">
                    <h3 className="font-head text-lg font-bold text-foreground">
                      {ar ? reg.nameAr : reg.name}
                    </h3>
                  </div>
                  <div className="mt-2 rounded-md bg-brand-orange/10 px-2.5 py-1 text-xs font-bold text-brand-orange">
                    {ar ? reg.countriesAr : reg.countries}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {ar ? reg.descAr : reg.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — شركاؤنا وعملاؤنا مباشرة تحت أسواقنا */}
      <section id="partners-and-clients" className="space-y-12">
        <GarmentPartnersTab />
        <GarmentClientsTab />
      </section>

      {/* Contact Section */}
      <SectorContactSection ar={ar} />
    </div>
  );
}


