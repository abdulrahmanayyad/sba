import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Search,
} from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { JoinPage } from "@/components/join/join-page";
import {
  environmentalAboutData,
  environmentalHeroData,
  environmentalSectorsData,
  environmentalServicesData,
} from "./environmental-data";

export type EnvironmentalTab = "about" | "sectors" | "services" | "products" | "start-consultation" | "join";

interface EnvironmentalViewProps {
  tab?: EnvironmentalTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

export function EnvironmentalSectorView({ tab = "about" }: EnvironmentalViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: EnvironmentalTab = ["about", "sectors", "services", "products", "start-consultation", "join"].includes(tab) ? tab : "about";

  return (
    <div className="w-full">
      {/* Sector Hero — Only displayed on About Us tab, full first screen */}
      {activeTab === "about" && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={environmentalHeroData.image}
            alt={ar ? environmentalHeroData.titleAr : environmentalHeroData.title}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/80 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? environmentalHeroData.companyAr : environmentalHeroData.company}</span>
              </div>

              <h1 className="mt-4 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
                {ar ? environmentalHeroData.titleAr : environmentalHeroData.title}
              </h1>

              <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
                {ar ? environmentalHeroData.subtitleAr : environmentalHeroData.subtitle}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Active Tab View */}
      <div className="py-8 space-y-12">
        {activeTab === "about" && <EnvironmentalAboutView ar={ar} />}
        {activeTab === "sectors" && <EnvironmentalSectorsView ar={ar} />}
        {activeTab === "services" && <EnvironmentalServicesView ar={ar} />}
        {activeTab === "products" && <EnvironmentalProductsView ar={ar} />}
        {activeTab === "start-consultation" && <EnvironmentalStartConsultationView ar={ar} />}
        {activeTab === "join" && <JoinPage trackId="sustainability" />}
      </div>
    </div>
  );
}

/** 1. About Us Tab View */
function EnvironmentalAboutView({ ar }: { ar: boolean }) {
  const data = environmentalAboutData;

  return (
    <div className="w-full space-y-12">
      {/* 1. Who We Are — Isolated centered box matching Contracting format */}
      <section className="site-container">
        <Reveal>
          <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-white/20 bg-background/75 p-8 sm:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:border-brand-orange/40 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? data.whoWeAre.badgeAr : data.whoWeAre.badgeEn}</span>
            </div>
            <h2 className="font-head text-xl sm:text-2xl font-extrabold text-foreground mt-2 drop-shadow-md">
              {ar ? data.whoWeAre.titleAr : data.whoWeAre.titleEn}
            </h2>
            <div className="section-intro mx-auto mt-6 leading-relaxed max-w-3xl space-y-4 text-start">
              {data.whoWeAre.paragraphs.map((p, idx) => (
                <p key={idx} className="text-start">{highlightBrand(ar ? p.ar : p.en)}</p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. What We Do — Problem-Solving & Core Disciplines (Side-by-side compact layout) */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5 transition-all duration-300 hover:shadow-xl hover:border-brand-orange/40 hover:scale-[1.005]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
            <Reveal>
              <div>
                <SectionBadge title={ar ? data.whatWeDo.badgeAr : data.whatWeDo.badgeEn} />
                <h2 className="section-title mt-3">{ar ? data.whatWeDo.titleAr : data.whatWeDo.titleEn}</h2>
                <p className="section-intro mt-4 leading-relaxed">{ar ? data.whatWeDo.introAr : data.whatWeDo.introEn}</p>
              </div>
            </Reveal>

            <div>
              <div className="rounded-2xl border border-border/70 bg-secondary/40 p-5 backdrop-blur-md">
                <h3 className="font-head text-xs sm:text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "القدرات المتكاملة للخدمات الأساسية:" : "Core Integrated Service Capabilities:"}</span>
                </h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {data.whatWeDo.coreServices.map((service, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 rounded-xl border border-white/20 bg-background/80 px-3 py-2 text-xs shadow-xs transition hover:border-brand-orange/50 hover:bg-secondary/70">
                      <CheckCircle2 className="size-3.5 shrink-0 text-brand-orange" />
                      <span className="font-head text-xs font-semibold text-foreground line-clamp-1">
                        {ar ? service.ar : service.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Approach — Highlight Motto Card (Transparent white liquid glass) */}
      <section className="site-container">
        <Reveal>
          <div className="group relative overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-8 sm:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl text-center transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-green/60 active:scale-[0.99] cursor-pointer">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? data.approach.badgeAr : data.approach.badgeEn}</span>
            </div>
            <h2 className="font-head text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
              {ar ? data.approach.mottoAr : data.approach.mottoEn}
            </h2>
            <p className="mt-4 mx-auto max-w-2xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              {ar ? data.approach.descAr : data.approach.descEn}
            </p>
          </div>
        </Reveal>
      </section>

      {/* 4. Vision & Mission — Separate interactive transparent curved glass cards */}
      <section className="site-container">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {/* Vision */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.vision.badgeAr : data.vision.badgeEn}</span>
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.vision.titleAr : data.vision.titleEn}</h3>
                <p className="mt-4 text-sm sm:text-base leading-7 text-foreground/90">
                  {ar ? data.vision.bodyAr : data.vision.bodyEn}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-8 sm:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:border-brand-orange/60 hover:shadow-xl">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? data.mission.badgeAr : data.mission.badgeEn}</span>
                </div>
                <h3 className="font-head text-xl font-bold text-foreground">{ar ? data.mission.titleAr : data.mission.titleEn}</h3>
                <ul className="mt-4 space-y-3">
                  {data.mission.pillars.map((pillar, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-brand-green-text" />
                      <span>{ar ? pillar.ar : pillar.en}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 5. Our Values — 6 Guiding Principles */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? data.values.badgeAr : data.values.badgeEn} />
              <h2 className="section-title mt-3 text-center">{ar ? data.values.titleAr : data.values.titleEn}</h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.values.items.map((val, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60 hover:shadow-md">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                        0{idx + 1}
                      </span>
                      <h3 className="font-head text-base font-bold text-foreground">{ar ? val.titleAr : val.titleEn}</h3>
                    </div>
                    <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">{ar ? val.descAr : val.descEn}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Sami Bin Ayyad — 6 Pillars matching Contracting format */}
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <SectionBadge title={ar ? data.whyUs.badgeAr : data.whyUs.badgeEn} />
              <h2 className="section-title mt-3 text-center">{ar ? data.whyUs.titleAr : data.whyUs.titleEn}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{ar ? data.whyUs.introAr : data.whyUs.introEn}</p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.whyUs.pillars.map((pillar, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="flex h-full flex-col rounded-2xl border border-white/20 bg-background/60 p-6 backdrop-blur-xl shadow-sm transition-all hover:border-brand-green/60 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-green/10 font-mono text-xs font-bold text-brand-green-text">
                      {pillar.number}
                    </span>
                    <h3 className="font-head text-base font-bold text-foreground">{ar ? pillar.titleAr : pillar.titleEn}</h3>
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-6 text-muted-foreground">{ar ? pillar.bodyAr : pillar.bodyEn}</p>
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

/** 2. Our Sectors Tab View */
function EnvironmentalSectorsView({ ar }: { ar: boolean }) {
  const data = environmentalSectorsData;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSectors = data.sectors.filter((sector) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      sector.nameEn.toLowerCase().includes(q) ||
      sector.nameAr.toLowerCase().includes(q) ||
      sector.descEn.toLowerCase().includes(q) ||
      sector.descAr.toLowerCase().includes(q) ||
      sector.taglineEn.toLowerCase().includes(q) ||
      sector.taglineAr.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <SectionBadge title={ar ? data.badgeAr : data.badgeEn} />
                <h2 className="section-title mt-3">{ar ? data.titleAr : data.titleEn}</h2>
                <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitleEn}</p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full max-w-xs shrink-0">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={ar ? "ابحث في القطاعات..." : "Search sectors..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-background/60 py-2 ps-9 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>
          </Reveal>

          {/* Sectors Stacked Vertically with Big Image on Top */}
          <div className="mt-12 flex flex-col gap-10">
            {filteredSectors.map((sec, idx) => {
              const sectorImages = [
                "/BG/steve-marquez-zi7gDhirekg-unsplash.jpg",
                "/BG/jennifer-delmarre-IqmuHJF5khU-unsplash.jpg",
                "/BG/chelsea-WvusC5M-TM8-unsplash.jpg",
                "/BG/paula-prekopova-Mt9DbRm2KmA-unsplash.jpg",
                "/BG/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg",
              ];
              const sectorImg = sectorImages[idx % sectorImages.length];

              return (
                <Reveal key={sec.id} delay={idx * 0.04}>
                  <div className="group overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-6 sm:p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-green/60 hover:shadow-2xl hover:scale-[1.005] active:scale-[0.99] cursor-pointer">
                    {/* Big Image on Top */}
                    <div className="relative aspect-[21/9] sm:aspect-[24/9] max-h-80 w-full overflow-hidden rounded-2xl bg-secondary mb-6 shadow-sm">
                      <img
                        src={sectorImg}
                        alt={ar ? sec.nameAr : sec.nameEn}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 start-4 inline-flex size-10 items-center justify-center rounded-xl bg-black/60 font-mono text-sm font-bold text-white backdrop-blur-md">
                        {sec.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                        {ar ? sec.nameAr : sec.nameEn}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-brand-orange">
                        {ar ? sec.taglineAr : sec.taglineEn}
                      </p>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {ar ? sec.descAr : sec.descEn}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-5">
                      <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        {ar ? "نطاق الخدمات والقدرات التخصصية:" : "Key Scope & Technical Capabilities:"}
                      </h4>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {sec.keyCapabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="flex items-center gap-2 rounded-xl border border-white/20 bg-background/80 p-2.5 text-xs font-medium text-foreground">
                            <CheckCircle2 className="size-4 shrink-0 text-brand-green" />
                            <span>{ar ? cap.ar : cap.en}</span>
                          </div>
                        ))}
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

/** 4. Our Products Tab View */
function EnvironmentalProductsView({ ar }: { ar: boolean }) {
  const products = [
    {
      id: "ET-POT-01",
      titleEn: "ET-POT-01 — Oil Terminator",
      titleAr: "ET-POT-01 — محلل الزيوت البيولوجي",
      leadEn: "Biological oil decomposition for industrial wastewater",
      leadAr: "تحليل بيولوجي للزيوت في مياه الصرف الصناعي",
      descEn: "A proprietary biological formulation that decomposes hydrocarbon contaminants in industrial wastewater and oil-polluted environments. Ideal for factories, oil refineries, fuel stations, and marine applications.",
      descAr: "تركيبة بيولوجية خاصة تحلل الملوثات الهيدروكربونية في مياه الصرف الصناعي والبيئات الملوثة بالزيوت. مثالية للمصانع والمصافي ومحطات الوقود والتطبيقات البحرية.",
      features: [
        { en: "Rapidly degrades petroleum hydrocarbons", ar: "يحلل الهيدروكربونات النفطية بسرعة عالية" },
        { en: "Effective in aerobic and anaerobic conditions", ar: "فعّال في الظروف الهوائية واللاهوائية" },
        { en: "Non-toxic, environmentally safe formulation", ar: "تركيبة غير سامة وآمنة بيئيًا" },
        { en: "Reduces COD and BOD in effluent", ar: "يقلل COD وBOD في مياه الصرف" },
        { en: "Compatible with existing treatment systems", ar: "متوافق مع أنظمة المعالجة القائمة" },
      ],
    },
    {
      id: "ET-POR-01",
      titleEn: "ET-POR-01 — Odor Removal Solution",
      titleAr: "ET-POR-01 — محلول إزالة الروائح",
      leadEn: "Industrial-grade odor neutralization for waste & wastewater",
      leadAr: "تحييد الروائح الصناعية للنفايات ومياه الصرف",
      descEn: "A concentrated odor-neutralizing compound that eliminates hydrogen sulfide (H₂S) and organic odor compounds at source. Widely used in wastewater treatment plants, landfills, composting facilities, and food processing plants.",
      descAr: "مركب متخصص لتحييد الروائح يزيل كبريتيد الهيدروجين والمركبات العضوية المسببة للروائح من المصدر. يُستخدم على نطاق واسع في محطات معالجة المياه ومدافن النفايات والمصانع.",
      features: [
        { en: "Eliminates H₂S and VOCs at source", ar: "يزيل H₂S والمركبات العضوية المتطايرة من المصدر" },
        { en: "Immediate and long-lasting effect", ar: "تأثير فوري وطويل الأمد" },
        { en: "Safe for operators and environment", ar: "آمن للمشغلين والبيئة" },
        { en: "Available in liquid and powder forms", ar: "متاح في صورة سائل أو مسحوق" },
        { en: "Suitable for large-scale industrial use", ar: "مناسب للاستخدام الصناعي على نطاق واسع" },
      ],
    },
    {
      id: "IoT-ENV",
      titleEn: "IoT Environmental Monitoring System",
      titleAr: "نظام مراقبة بيئية عبر إنترنت الأشياء",
      leadEn: "Real-time environmental data collection via Techno Set partnership",
      leadAr: "جمع بيانات بيئية لحظية بالشراكة مع Techno Set",
      descEn: "Smart IoT-based sensors and dashboards for continuous monitoring of air quality, water parameters, temperature, humidity, and pollution indicators. Delivered in partnership with Techno Set.",
      descAr: "أجهزة استشعار ذكية ولوحات تحكم مبنية على إنترنت الأشياء لمراقبة مستمرة لجودة الهواء وبارامترات المياه ودرجات الحرارة والرطوبة ومؤشرات التلوث. تُقدَّم بالشراكة مع Techno Set.",
      features: [
        { en: "Real-time data dashboards and alerts", ar: "لوحات بيانات لحظية وتنبيهات فورية" },
        { en: "Air quality: PM2.5, PM10, CO₂, VOC, NOx", ar: "جودة الهواء: PM2.5، PM10، CO₂، VOC، NOx" },
        { en: "Water: pH, TDS, turbidity, DO, conductivity", ar: "المياه: pH، TDS، عكارة، DO، التوصيلية" },
        { en: "Remote access via web and mobile apps", ar: "وصول عن بعد عبر تطبيقات الويب والجوال" },
        { en: "Integration with EHS compliance reports", ar: "تكامل مع تقارير الامتثال البيئي والصحي" },
      ],
    },
    {
      id: "EHS-APP",
      titleEn: "EHS Regulatory Compliance App",
      titleAr: "تطبيق الامتثال لمتطلبات EHS",
      leadEn: "Digital EHS management and regulatory reporting platform",
      leadAr: "منصة رقمية لإدارة EHS والتقارير التنظيمية",
      descEn: "A regulatory compliance management application that helps organizations track EHS obligations, manage audits, generate compliance reports, and maintain documentation in line with Egyptian and international standards.",
      descAr: "تطبيق إدارة الامتثال التنظيمي يساعد المؤسسات على تتبع التزامات EHS وإدارة عمليات التدقيق وإنشاء تقارير الامتثال والحفاظ على التوثيق وفق المعايير المصرية والدولية.",
      features: [
        { en: "EHS audit scheduling and tracking", ar: "جدولة ومتابعة عمليات التدقيق البيئي" },
        { en: "Automated compliance reporting", ar: "إعداد تقارير الامتثال تلقائيًا" },
        { en: "Incident and near-miss logging", ar: "تسجيل الحوادث وحالات اقتراب الخطر" },
        { en: "Egyptian Environmental Law integration", ar: "تكامل مع قانون البيئة المصري" },
        { en: "Multi-site and multi-user support", ar: "دعم متعدد المواقع والمستخدمين" },
      ],
    },
  ];

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <SectionBadge title={ar ? "منتجاتنا" : "Our Products"} />
              <h2 className="section-title mt-3">
                {ar ? "حلول بيئية مبتكرة ومنتجات متخصصة" : "Innovative Environmental Solutions & Specialized Products"}
              </h2>
              <p className="section-intro mt-4">
                {ar
                  ? "نقدم منتجات وحلولًا بيئية متخصصة مطورة بالشراكة مع خبراء دوليين لمواجهة التحديات البيئية الصناعية."
                  : "We offer specialized environmental products and solutions developed in partnership with international experts to address industrial environmental challenges."}
              </p>
            </div>
          </Reveal>

          {/* Products Stacked Vertically with Big Image on Top */}
          <div className="flex flex-col gap-10">
            {products.map((product, idx) => {
              const productImages = [
                "/BG/chelsea-WvusC5M-TM8-unsplash.jpg",
                "/BG/jennifer-delmarre-IqmuHJF5khU-unsplash.jpg",
                "/BG/google-deepmind-s2TPKAD6fag-unsplash.jpg",
                "/BG/riccardo-annandale-7e2pe9wjL9M-unsplash.jpg",
              ];
              const prodImg = productImages[idx % productImages.length];

              return (
                <Reveal key={product.id} delay={idx * 0.05}>
                  <div className="group overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-6 sm:p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-green/60 hover:shadow-2xl hover:scale-[1.005] active:scale-[0.99] cursor-pointer">
                    {/* Big Image on Top */}
                    <div className="relative aspect-[21/9] sm:aspect-[24/9] max-h-80 w-full overflow-hidden rounded-2xl bg-secondary mb-6 shadow-sm">
                      <img
                        src={prodImg}
                        alt={ar ? product.titleAr : product.titleEn}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 start-4 inline-flex items-center rounded-xl bg-black/60 px-3.5 py-1.5 font-mono text-xs font-bold text-white backdrop-blur-md">
                        {product.id}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                        {ar ? product.titleAr : product.titleEn}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-brand-green-text">
                        {ar ? product.leadAr : product.leadEn}
                      </p>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {ar ? product.descAr : product.descEn}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-5">
                      <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        {ar ? "المزايا والمواصفات الفنية:" : "Key Technical Features & Specifications:"}
                      </h4>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {product.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 rounded-xl border border-white/20 bg-background/80 p-2.5 text-xs font-medium text-foreground">
                            <CheckCircle2 className="size-4 shrink-0 text-brand-green-text" />
                            <span>{ar ? feat.ar : feat.en}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-end">
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault();
                            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>{ar ? "استفسر عن المنتج" : "Inquire Product"}</span>
                          <ArrowRight className={cn("size-3.5", ar && "rotate-180")} />
                        </a>
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

/** 5. Start Consultation View — Multi-step Form */
function EnvironmentalStartConsultationView({ ar }: { ar: boolean }) {
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const [form, setForm] = useState({
    projectName: "",
    projectType: "",
    services: [] as string[],
    engagementModel: "",
    techNotes: "",
    budget: "",
    currency: "EGP",
    startDate: "",
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
    ? ["صناعي", "تجاري", "بنية تحتية", "طاقة", "مياه", "إدارة نفايات", "نفط وغاز", "أخرى"]
    : ["Industrial", "Commercial", "Infrastructure", "Energy", "Water", "Waste Management", "Oil & Gas", "Other"];
  const servicesList = ar
    ? ["استشارات بيئية", "دراسة جدوى", "هندسة وتصميم", "توريد منتجات", "تنفيذ", "تشغيل وصيانة", "شراكة استراتيجية", "أخرى"]
    : ["Environmental Consulting", "Feasibility Study", "Engineering & Design", "Supply", "Implementation", "O&M", "Strategic Partnership", "Other"];
  const engagementModels = ar
    ? ["استشارة", "دراسة جدوى", "هندسة وتصميم", "توريد", "تنفيذ", "تشغيل وصيانة", "شراكة استراتيجية", "أخرى"]
    : ["Consulting", "Feasibility Study", "Engineering & Design", "Supply", "Implementation", "O&M", "Strategic Partnership", "Other"];

  const toggleService = (s: string) =>
    setForm((p) => ({ ...p, services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s] }));

  const handleSubmit = () => {
    const ref = "ENV-" + Date.now().toString(36).toUpperCase();
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
            {ar ? "تم استلام طلب الاستشارة!" : "Consultation Request Received!"}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            {ar
              ? `رقم المرجع: ${form.refNum} — سيتواصل معك خبراؤنا البيئيون خلال 48 ساعة عمل.`
              : `Reference: ${form.refNum} — Our environmental experts will contact you within 48 business hours.`}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`mailto:info@sami-trade.com?subject=Environmental Consultation ${form.refNum}&body=Project: ${form.projectName}%0AContact: ${form.contact} — ${form.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-green px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-orange"
            >
              <span>{ar ? "راسلنا مباشرة" : "Email Us Directly"}</span>
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
          <span>{ar ? "ابدأ استشارتك" : "Start Consultation"}</span>
        </div>
        <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground mt-2">
          {ar ? "احصل على استشارة بيئية متخصصة" : "Get a Specialized Environmental Consultation"}
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          {ar
            ? "أكمل النموذج وسيتواصل معك خبراؤنا البيئيون خلال 48 ساعة."
            : "Complete the form and our environmental experts will reach out within 48 hours."}
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
                placeholder={ar ? "وصف مختصر للمشروع" : "Brief project description"}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "نوع المشروع *" : "Project Type *"}</label>
              <div className="flex flex-wrap gap-2">
                {projectTypes.map((t) => (
                  <button key={t} type="button" onClick={() => up("projectType", t)}
                    className={cn("rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.projectType === t ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-foreground hover:border-brand-green")}>
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "الخدمات المطلوبة" : "Required Services"}</h3>
            <div className="flex flex-wrap gap-2">
              {servicesList.map((s) => (
                <button key={s} type="button" onClick={() => toggleService(s)}
                  className={cn("rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                    form.services.includes(s) ? "border-brand-green bg-brand-green/10 text-brand-green-text" : "border-border text-foreground hover:border-brand-green")}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        {step === 3 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "المتطلبات التقنية" : "Technical Requirements"}</h3>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "نموذج التعاون المفضل" : "Preferred Engagement Model"}</label>
              <div className="flex flex-wrap gap-2">
                {engagementModels.map((m) => (
                  <button key={m} type="button" onClick={() => up("engagementModel", m)}
                    className={cn("rounded-full border px-4 py-1.5 text-xs font-semibold transition",
                      form.engagementModel === m ? "border-brand-orange bg-brand-orange/10 text-brand-orange" : "border-border text-foreground hover:border-brand-green")}>
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-xs font-bold text-foreground mb-1">{ar ? "ملاحظات تقنية إضافية" : "Additional Technical Notes"}</label>
              <textarea rows={4} className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none resize-none"
                value={form.techNotes} onChange={(e) => up("techNotes", e.target.value)}
                placeholder={ar ? "وصف الموقع، التقنيات المستخدمة، أي معلومات فنية ذات صلة..." : "Site description, current technologies, relevant technical info..."} />
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "الميزانية والتوقيت" : "Budget & Timeline"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "الميزانية التقريبية" : "Approximate Budget"}</label>
                <input className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.budget} onChange={(e) => up("budget", e.target.value)} placeholder={ar ? "مثال: 500,000" : "e.g. 500,000"} />
              </div>
              <div>
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "العملة" : "Currency"}</label>
                <select className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.currency} onChange={(e) => up("currency", e.target.value)}>
                  <option value="EGP">EGP</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-foreground mb-1">{ar ? "تاريخ البداية المتوقع" : "Expected Start Date"}</label>
                <input type="date" className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                  value={form.startDate} onChange={(e) => up("startDate", e.target.value)} />
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="space-y-5">
            <h3 className="font-head text-lg font-bold text-foreground">{ar ? "بيانات التواصل والمراجعة" : "Contact Info & Review"}</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: "company", labelAr: "الشركة / الجهة *", labelEn: "Company *", ph: ar ? "اسم الشركة" : "Company name", span: true },
                { k: "contact", labelAr: "اسم التواصل *", labelEn: "Contact Name *", ph: ar ? "الاسم الكامل" : "Full name", span: false },
                { k: "email", labelAr: "البريد الإلكتروني *", labelEn: "Business Email *", ph: "name@company.com", span: false },
                { k: "phone", labelAr: "رقم الجوال", labelEn: "Phone Number", ph: "+20 10x xxx xxxx", span: false },
                { k: "country", labelAr: "الدولة", labelEn: "Country", ph: ar ? "مصر" : "Egypt", span: false },
              ].map(({ k, labelAr, labelEn, ph, span }) => (
                <div key={k} className={span ? "sm:col-span-2" : ""}>
                  <label className="block text-xs font-bold text-foreground mb-1">{ar ? labelAr : labelEn}</label>
                  <input className="w-full rounded-xl border border-border bg-background/60 px-4 py-2.5 text-sm text-foreground focus:border-brand-green focus:outline-none"
                    value={(form as unknown as Record<string, string>)[k]} onChange={(e) => up(k, e.target.value)} placeholder={ph}
                    type={k === "email" ? "email" : "text"} />
                </div>
              ))}
            </div>
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" checked={form.consent} onChange={(e) => up("consent", e.target.checked)} className="mt-1 size-4 accent-brand-green" />
              <span className="text-xs text-muted-foreground leading-relaxed">
                {ar ? "أوافق على مشاركة بياناتي مع فريق مجموعة سامي بن عياد للتواصل بشأن هذا الطلب." : "I agree to share my information with Sami Bin Ayyad Group for communication regarding this request."}
              </span>
            </label>
            <div className="rounded-xl border border-border/60 bg-secondary/20 p-4 text-xs text-muted-foreground">
              <p>{ar ? "📧 للتواصل المباشر: info@sami-trade.com" : "📧 Direct contact: info@sami-trade.com"}</p>
            </div>
          </div>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <Button variant="outline" size="sm" onClick={() => setStep((p) => Math.max(1, p - 1))} disabled={step === 1} className="rounded-full px-6">
            {ar ? "السابق" : "Back"}
          </Button>
          {step < totalSteps ? (
            <Button size="sm" onClick={() => setStep((p) => Math.min(totalSteps, p + 1))} className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-8">
              {ar ? "التالي" : "Next"}
            </Button>
          ) : (
            <Button size="sm" onClick={handleSubmit} disabled={!form.consent || !form.projectName || !form.contact || !form.email}
              className="rounded-full bg-brand-orange hover:bg-brand-green text-white px-8">
              {ar ? "إرسال الطلب" : "Submit Request"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

/** 3. Our Services Tab View */
function EnvironmentalServicesView({ ar }: { ar: boolean }) {
  const data = environmentalServicesData;
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = data.services.filter((service) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      service.titleEn.toLowerCase().includes(q) ||
      service.titleAr.toLowerCase().includes(q) ||
      service.leadEn.toLowerCase().includes(q) ||
      service.leadAr.toLowerCase().includes(q) ||
      service.bodyEn.toLowerCase().includes(q) ||
      service.bodyAr.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full space-y-12">
      <section className="site-container">
        <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/80 p-6 md:p-12 shadow-[0_16px_50px_rgba(0,0,0,0.06)] backdrop-blur-2xl ring-1 ring-black/5">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="max-w-3xl">
                <SectionBadge title={ar ? data.badgeAr : data.badgeEn} />
                <h2 className="section-title mt-3">{ar ? data.titleAr : data.titleEn}</h2>
                <p className="section-intro mt-4">{ar ? data.subtitleAr : data.subtitleEn}</p>
              </div>

              {/* Search Bar */}
              <div className="relative w-full max-w-xs shrink-0">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder={ar ? "ابحث في الخدمات..." : "Search services..."}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-border bg-background/60 py-2 ps-9 pe-4 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
                />
              </div>
            </div>
          </Reveal>

          {/* Services Stacked Vertically with Big Image on Top */}
          <div className="mt-12 flex flex-col gap-10">
            {filteredServices.map((service, idx) => {
              const serviceImages = [
                "/BG/andreas-gucklhorn-Ilpf2eUPpUE-unsplash.jpg",
                "/BG/jennifer-delmarre-IqmuHJF5khU-unsplash.jpg",
                "/BG/steve-marquez-zi7gDhirekg-unsplash.jpg",
                "/BG/chelsea-WvusC5M-TM8-unsplash.jpg",
                "/BG/paula-prekopova-Mt9DbRm2KmA-unsplash.jpg",
                "/BG/sebastian-dario-A3BVd3_mOCo-unsplash.jpg",
                "/BG/sasun-bughdaryan-SFNUwmLEOis-unsplash.jpg",
                "/BG/philipp-HGBCAbRBIME-unsplash.jpg",
              ];
              const sImg = serviceImages[idx % serviceImages.length];

              return (
                <Reveal key={service.id} delay={idx * 0.04}>
                  <div className="group overflow-hidden rounded-3xl border border-white/30 bg-background/70 p-6 sm:p-8 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-green/60 hover:shadow-2xl hover:scale-[1.005] active:scale-[0.99] cursor-pointer">
                    {/* Big Image on Top */}
                    <div className="relative aspect-[21/9] sm:aspect-[24/9] max-h-80 w-full overflow-hidden rounded-2xl bg-secondary mb-6 shadow-sm">
                      <img
                        src={sImg}
                        alt={ar ? service.titleAr : service.titleEn}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <span className="absolute top-4 start-4 inline-flex size-10 items-center justify-center rounded-xl bg-black/60 font-mono text-sm font-bold text-white backdrop-blur-md">
                        {service.number}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                        {ar ? service.titleAr : service.titleEn}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-brand-orange">
                        {ar ? service.leadAr : service.leadEn}
                      </p>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {ar ? service.bodyAr : service.bodyEn}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-5">
                      <h4 className="font-head text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        {ar ? "أبرز المحاور والمخرجات الفنية:" : "Key Technical Deliverables & Scope:"}
                      </h4>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 rounded-xl border border-white/20 bg-background/80 p-2.5 text-xs font-medium text-foreground">
                            <CheckCircle2 className="size-4 shrink-0 text-brand-green" />
                            <span>{ar ? feat.ar : feat.en}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-end">
                        <Link
                          to="/sectors/$sector"
                          params={{ sector: "environmental" }}
                          search={{ tab: "start-consultation" }}
                          className="inline-flex items-center gap-2 rounded-full bg-brand-green px-5 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-brand-orange hover:shadow-md hover:scale-105 active:scale-95 cursor-pointer"
                        >
                          <span>{ar ? "طلب استشارة" : "Request Consultation"}</span>
                          <ArrowRight className={cn("size-3.5", ar && "rotate-180")} />
                        </Link>
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
