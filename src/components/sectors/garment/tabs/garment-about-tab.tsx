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

export function GarmentAboutTab() {
  const { language } = useLanguage();
  const ar = language === "AR";
  const { whoWeAre, whatWeOffer, whyChooseUs, capabilities, infrastructure, productionVolume, experience, markets } = garmentAboutData;

  const quickSections = [
    { id: "who-we-are", labelEn: "1. Who We Are", labelAr: "1. من نحن" },
    { id: "what-we-offer", labelEn: "2. What We Offer", labelAr: "2. ماذا نقدم" },
    { id: "why-choose-us", labelEn: "3. Why Choose Us", labelAr: "3. لماذا تختارنا" },
    { id: "our-capabilities", labelEn: "4. Our Capabilities", labelAr: "4. قدراتنا" },
    { id: "our-facilities", labelEn: "5. Our Infrastructure", labelAr: "5. إمكانياتنا" },
    { id: "production-volume", labelEn: "6. Production Volume", labelAr: "6. حجم الإنتاج" },
    { id: "our-experience", labelEn: "7. Our Experience", labelAr: "7. خبراتنا" },
    { id: "our-markets", labelEn: "8. Our Markets", labelAr: "8. أسواقنا" },
  ];

  return (
    <div className="space-y-24 py-8">
      {/* Quick Jump Bar */}
      <div className="sticky top-20 z-30 -mt-4 rounded-xl border border-border/80 bg-background/95 p-2 shadow-md backdrop-blur-md">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs sm:text-sm no-scrollbar">
          <span className="shrink-0 font-bold px-2 text-brand-orange">{ar ? "أقسام الصفحة:" : "Sections:"}</span>
          {quickSections.map((sec) => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              className="shrink-0 rounded-lg px-3 py-1.5 font-medium text-muted-foreground transition hover:bg-secondary hover:text-foreground"
            >
              {ar ? sec.labelAr : sec.labelEn}
            </a>
          ))}
        </div>
      </div>

      {/* 1 — من نحن | Who We Are */}
      <section id="who-we-are" className="scroll-mt-36">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "01 — من نحن" : "01 — Who We Are"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? whoWeAre.headingAr : whoWeAre.heading}
          </h2>

          <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground lg:col-span-7">
              <p className="font-medium text-foreground text-lg leading-relaxed">
                {ar ? whoWeAre.bodyAr : whoWeAre.body}
              </p>
              <p>{ar ? whoWeAre.extendedAr : whoWeAre.extended}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Sparkles className="size-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-foreground">
                  {ar ? whoWeAre.mission.titleAr : whoWeAre.mission.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ar ? whoWeAre.mission.descAr : whoWeAre.mission.desc}
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Globe2 className="size-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-foreground">
                  {ar ? whoWeAre.vision.titleAr : whoWeAre.vision.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {ar ? whoWeAre.vision.descAr : whoWeAre.vision.desc}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2 — ماذا نقدم | What We Offer */}
      <section id="what-we-offer" className="scroll-mt-36">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "02 — ماذا نقدم" : "02 — What We Offer"}</span>
          </div>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {ar ? whatWeOffer.headingAr : whatWeOffer.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                {ar ? whatWeOffer.introAr : whatWeOffer.intro}
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "services" }}>
                {ar ? "عرض تفاصيل الخدمات بالكامل" : "View Detailed Services"}
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeOffer.services.map((item, index) => (
              <div 
                key={item.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition duration-300 hover:border-brand-orange/50 hover:shadow-lg"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-orange/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-head text-lg font-bold text-foreground group-hover:text-brand-orange transition">
                    {ar ? item.titleAr : item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {ar ? item.descAr : item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border/60">
                  <span className="text-xs font-medium text-brand-orange inline-flex items-center gap-1">
                    {ar ? "جاهز للتنفيذ" : "Production Ready"}
                    <CheckCircle2 className="size-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 3 — لماذا تختارنا | Why Choose Us */}
      <section id="why-choose-us" className="scroll-mt-36 rounded-3xl bg-secondary/50 p-6 md:p-10 border border-border">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "03 — لماذا تختارنا" : "03 — Why Choose Us"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? whyChooseUs.headingAr : whyChooseUs.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {ar ? whyChooseUs.subtitleAr : whyChooseUs.subtitle}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.points.map((point) => (
              <div key={point.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Trophy className="size-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-foreground">
                  {ar ? point.titleAr : point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ar ? point.descAr : point.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 4 — قدراتنا | Our Capabilities */}
      <section id="our-capabilities" className="scroll-mt-36">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "04 — قدراتنا الإنتاجية" : "04 — Our Capabilities"}</span>
          </div>

          <div className="mt-3 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {ar ? capabilities.headingAr : capabilities.heading}
              </h2>
              <p className="mt-2 max-w-2xl text-base text-muted-foreground">
                {ar ? capabilities.introAr : capabilities.intro}
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "capabilities" }}>
                {ar ? "استكشف البنية والمراحل" : "Explore Full Infrastructure"}
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.stats.map((stat) => (
              <div key={stat.labelEn} className="relative overflow-hidden rounded-2xl border border-border bg-card p-6">
                <div className="font-mono text-3xl font-black text-brand-orange sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 font-head text-lg font-bold text-foreground">
                  {ar ? stat.labelAr : stat.labelEn}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {ar ? stat.descAr : stat.descEn}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 5 — إمكانياتنا | Our Facilities & Infrastructure */}
      <section id="our-facilities" className="scroll-mt-36">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "05 — إمكانياتنا وبنيتنا الصناعية" : "05 — Our Infrastructure"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? infrastructure.headingAr : infrastructure.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {ar ? infrastructure.introAr : infrastructure.intro}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {infrastructure.pillars.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Factory className="size-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-foreground">
                  {ar ? item.titleAr : item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ar ? item.descAr : item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 6 — حجم الإنتاج الحالي | Current Production Volume */}
      <section id="production-volume" className="scroll-mt-36 rounded-3xl bg-secondary/40 p-6 md:p-10 border border-border">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "06 — حجم الإنتاج الحالي" : "06 — Current Production Volume"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? productionVolume.headingAr : productionVolume.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {ar ? productionVolume.introAr : productionVolume.intro}
          </p>

          {/* Dedicated Classic Shirt Facility Highlight Card */}
          <div className="mt-8 overflow-hidden rounded-2xl border-2 border-brand-orange/30 bg-card p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange">
                  <Shirt className="size-6" />
                </div>
                <div>
                  <h3 className="font-head text-xl font-bold text-foreground">
                    {ar ? productionVolume.classicShirtUnit.titleAr : productionVolume.classicShirtUnit.title}
                  </h3>
                  <span className="text-xs font-medium text-brand-orange">
                    {ar ? "تخصص صناعي عالي الدقة" : "High-Precision Dedicated Apparel Unit"}
                  </span>
                </div>
              </div>
              <span className="rounded-full bg-brand-orange/15 px-4 py-1.5 font-mono text-sm font-bold text-brand-orange">
                {ar ? productionVolume.classicShirtUnit.badgeAr : productionVolume.classicShirtUnit.badge}
              </span>
            </div>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {ar ? productionVolume.classicShirtUnit.descAr : productionVolume.classicShirtUnit.desc}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 border-t border-border pt-4">
              {productionVolume.classicShirtUnit.features.map((feat) => (
                <div key={feat.en} className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-4 shrink-0 text-brand-orange" />
                  <span>{ar ? feat.ar : feat.en}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Volume Summary Cards */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productionVolume.volumeSummary.map((item) => (
              <div key={item.categoryEn} className="rounded-2xl border border-border bg-card p-5">
                <span className="text-xs text-muted-foreground">{ar ? item.categoryAr : item.categoryEn}</span>
                <div className="mt-1 font-head text-xl font-bold text-brand-orange">
                  {ar ? item.volumeAr : item.volumeEn}
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{ar ? item.notesAr : item.notesEn}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 7 — خبراتنا | Our Experience & Expertise */}
      <section id="our-experience" className="scroll-mt-36">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "07 — خبراتنا وتطوير الأزياء" : "07 — Our Experience"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? experience.headingAr : experience.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {ar ? experience.subtitleAr : experience.subtitle}
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-3xl">
            {ar ? experience.overviewAr : experience.overview}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {experience.pillars.map((item) => (
              <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Scissors className="size-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-foreground">
                  {ar ? item.titleAr : item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {ar ? item.descAr : item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* 8 — أسواقنا | Our Markets */}
      <section id="our-markets" className="scroll-mt-36 rounded-3xl bg-gradient-to-br from-card via-card to-secondary/50 p-6 md:p-10 border border-border">
        <Reveal>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <span className="inline-block size-2 rounded-full bg-brand-orange" />
            <span>{ar ? "08 — أسواقنا وحضورنا الدولي" : "08 — Our Markets"}</span>
          </div>

          <h2 className="mt-3 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {ar ? markets.headingAr : markets.heading}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            {ar ? markets.subtitleAr : markets.subtitle}
          </p>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground max-w-3xl">
            {ar ? markets.overviewAr : markets.overview}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {markets.regions.map((reg) => (
              <div key={reg.id} className="rounded-2xl border border-border bg-background/80 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <h3 className="font-head text-xl font-bold text-foreground">
                    {ar ? reg.nameAr : reg.name}
                  </h3>
                  <Globe2 className="size-5 text-brand-orange" />
                </div>
                <div className="mt-2 rounded-md bg-brand-orange/10 px-2.5 py-1 text-xs font-bold text-brand-orange">
                  {ar ? reg.countriesAr : reg.countries}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ar ? reg.descAr : reg.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Call Banner */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand-orange/10 p-6 sm:flex-row sm:p-8">
            <div>
              <h3 className="font-head text-xl font-bold text-foreground">
                {ar ? "هل تبحث عن شريك تصنيع موثوق لعلامتك التجارية؟" : "Looking for a Trusted Apparel Manufacturing Partner?"}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {ar ? "فريقنا الفني جاهز لمراجعة تصاميمك وتقديم دراسة جدوى وتكلفة تفصيلية." : "Our technical team is ready to review your tech pack and quote your project."}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild variant="primary" size="lg">
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                  {ar ? "اطلب عرض سعر الآن" : "Request Quotation Now"}
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
