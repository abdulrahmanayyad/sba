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
import { AnimatedStatistic } from "@/components/site/animated-statistic";

import homeTextile from "@/assets/home-textile.jpg";
import apparelImg from "@/assets/sector-apparel.jpg";
import jzraCasual from "@/assets/jzra-summer-casual.jpg";
import jzraDresses from "@/assets/jzra-summer-dresses.jpg";

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
              <span className="font-mono text-xs font-bold text-muted-foreground/70">01</span>
            </div>

            <h2 className="section-title mt-3">
              {ar ? whoWeAre.headingAr : whoWeAre.heading}
            </h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:col-span-7">
                <p className="font-semibold text-foreground text-lg leading-relaxed text-justify [text-align-last:start]">
                  {ar ? whoWeAre.bodyAr : whoWeAre.body}
                </p>
                <p className="text-justify [text-align-last:start]">{ar ? whoWeAre.extendedAr : whoWeAre.extended}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 pt-2">
                  <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <Sparkles className="size-5" />
                    </div>
                    <h3 className="mt-3 font-head text-base font-bold text-foreground">
                      {ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-justify [text-align-last:start]">
                      {ar ? whoWeAre.mission.descAr : whoWeAre.mission.desc}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <Globe2 className="size-5" />
                    </div>
                    <h3 className="mt-3 font-head text-base font-bold text-foreground">
                      {ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed text-justify [text-align-last:start]">
                      {ar ? whoWeAre.vision.descAr : whoWeAre.vision.desc}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-border shadow-lg lg:col-span-5">
                <img
                  src={homeTextile}
                  alt={ar ? whoWeAre.headingAr : whoWeAre.heading}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-105"
                />
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
              <span className="font-mono text-xs font-bold text-muted-foreground/70">02</span>
            </div>

            <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="section-title">
                  {ar ? whatWeOffer.headingAr : whatWeOffer.heading}
                </h2>
                <p className="section-intro mt-2 max-w-2xl text-justify [text-align-last:start]">
                  {ar ? whatWeOffer.introAr : whatWeOffer.intro}
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="shrink-0 border-brand-orange/40 hover:bg-brand-orange/10">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "services" }}>
                  {ar ? "عرض تفاصيل الخدمات بالكامل" : "View Detailed Services"}
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {whatWeOffer.services.map((item, index) => {
                const cardImgs = [jzraCasual, jzraDresses, apparelImg, homeTextile];
                const cardImg = cardImgs[index % cardImgs.length];
                return (
                  <div 
                    key={item.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition duration-300 hover:border-brand-orange/50 hover:shadow-lg"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={cardImg}
                        alt={ar ? item.titleAr : item.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-2.5 start-2.5 rounded-full bg-black/60 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="p-5 flex flex-col justify-between flex-1">
                      <div>
                        <h3 className="font-head text-base font-bold text-foreground group-hover:text-brand-orange transition">
                          {ar ? item.titleAr : item.title}
                        </h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground text-justify [text-align-last:start]">
                          {ar ? item.descAr : item.desc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-border/60">
                        <span className="text-xs font-semibold text-brand-orange inline-flex items-center gap-1">
                          <CheckCircle2 className="size-3.5 text-brand-green-text" />
                          {ar ? "جاهز للتنفيذ الفوري" : "Production Ready"}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
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
              <span className="font-mono text-xs font-bold text-muted-foreground/70">03</span>
            </div>

            <h2 className="section-title mt-3">
              {ar ? whyChooseUs.headingAr : whyChooseUs.heading}
            </h2>
            <p className="section-intro mt-2 max-w-2xl text-justify [text-align-last:start]">
              {ar ? whyChooseUs.subtitleAr : whyChooseUs.subtitle}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.points.map((point) => (
                <div key={point.title} className="rounded-2xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur-md transition hover:border-brand-orange/50 hover:shadow-md">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Trophy className="size-5" />
                  </div>
                  <h3 className="mt-4 font-head text-base font-bold text-foreground">
                    {ar ? point.titleAr : point.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify [text-align-last:start]">
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
              <SectionBadge title={ar ? "قدراتنا الإنتاجية" : "Our Capabilities"} />
              <span className="font-mono text-xs font-bold text-muted-foreground/70">04</span>
            </div>

            <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <h2 className="section-title">
                  {ar ? capabilities.headingAr : capabilities.heading}
                </h2>
                <p className="section-intro mt-2 max-w-2xl text-justify [text-align-last:start]">
                  {ar ? capabilities.introAr : capabilities.intro}
                </p>
              </div>
              <Button asChild variant="outline" size="sm" className="shrink-0 border-brand-orange/40 hover:bg-brand-orange/10">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "capabilities" }}>
                  {ar ? "استكشف البنية والمراحل" : "Explore Full Infrastructure"}
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.stats.map((stat, idx) => (
                <div key={stat.labelEn} className={cn(
                  "relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand-orange/50 hover:shadow-lg",
                  ar ? "text-right" : "text-left"
                )}>
                  <div className="flex items-center justify-between mb-3">
                    <p className={cn(
                      "font-head text-3xl sm:text-4xl font-black text-brand-orange drop-shadow-sm tracking-tight",
                      ar ? "text-right" : "text-left"
                    )}>
                      <AnimatedStatistic value={stat.value} />
                    </p>
                    <span className="font-mono text-xs font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2.5 py-0.5">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="mt-2 font-head text-base font-bold text-foreground">
                    {ar ? stat.labelAr : stat.labelEn}
                  </div>
                  <p className="mt-1 text-xs font-medium text-muted-foreground text-justify [text-align-last:start]">
                    {ar ? stat.descAr : stat.descEn}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 — إمكانياتنا | Our Facilities & Infrastructure */}
      <section id="our-facilities" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "إمكانياتنا وبنيتنا الصناعية" : "Our Infrastructure"} />
              <span className="font-mono text-xs font-bold text-muted-foreground/70">05</span>
            </div>

            <h2 className="section-title mt-3">
              {ar ? infrastructure.headingAr : infrastructure.heading}
            </h2>
            <p className="section-intro mt-2 max-w-2xl text-justify [text-align-last:start]">
              {ar ? infrastructure.introAr : infrastructure.intro}
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {infrastructure.pillars.map((item, pIdx) => {
                const pillarImgs = [apparelImg, homeTextile, jzraDresses];
                const pImg = pillarImgs[pIdx % pillarImgs.length];
                return (
                  <div key={item.title} className="group overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-md shadow-sm transition hover:border-brand-orange/50 hover:shadow-md">
                    <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                      <img
                        src={pImg}
                        alt={ar ? item.titleAr : item.title}
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange mb-3">
                        <Factory className="size-5" />
                      </div>
                      <h3 className="font-head text-base font-bold text-foreground">
                        {ar ? item.titleAr : item.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify [text-align-last:start]">
                        {ar ? item.descAr : item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6 — أسواقنا | Our Markets */}
      <section id="our-markets" className="scroll-mt-36">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex items-center gap-3">
              <SectionBadge title={ar ? "أسواقنا وحضورنا الدولي" : "Our Markets"} />
              <span className="font-mono text-xs font-bold text-muted-foreground/70">06</span>
            </div>

            <h2 className="section-title mt-3">
              {ar ? markets.headingAr : markets.heading}
            </h2>
            <p className="section-intro mt-2 max-w-2xl text-justify [text-align-last:start]">
              {ar ? markets.subtitleAr : markets.subtitle}
            </p>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-3xl text-justify [text-align-last:start]">
              {ar ? markets.overviewAr : markets.overview}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {markets.regions.map((reg) => (
                <div key={reg.id} className="rounded-2xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur-md transition hover:border-brand-orange/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-head text-lg font-bold text-foreground">
                      {ar ? reg.nameAr : reg.name}
                    </h3>
                    <Globe2 className="size-5 text-brand-orange" />
                  </div>
                  <div className="mt-2 rounded-md bg-brand-orange/10 px-2.5 py-1 text-xs font-bold text-brand-orange">
                    {ar ? reg.countriesAr : reg.countries}
                  </div>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground text-justify [text-align-last:start]">
                    {ar ? reg.descAr : reg.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
