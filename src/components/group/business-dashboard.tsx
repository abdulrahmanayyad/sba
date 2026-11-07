import { Building2, Leaf, Shirt, Wheat, CheckCircle2 } from "lucide-react";

import { HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { cn } from "@/lib/utils";
import { activities, dashboardSectors, type SectorId } from "./dashboard-data";

const icons: Record<SectorId, typeof Leaf> = {
  construction: Building2,
  environmental: Leaf,
  garment: Shirt,
  food: Wheat,
};

const aggregateStats = [
  {
    value: "+45",
    labelEn: "Years of Foundational Heritage",
    labelAr: "عامًا من الخبرة المؤسسية الممتدة",
    subEn: "Since 1977 across construction, industry, and international business.",
    subAr: "منذ عام 1977 في قطاعات المقاولات والصناعة والتجارة الدولية.",
    sector: "construction" as SectorId,
  },
  {
    value: "+100",
    labelEn: "Documented Projects & Works Delivered",
    labelAr: "مشروعًا وعملًا موثقًا تم تنفيذه",
    subEn: "Across general contracting, real estate development and environmental systems.",
    subAr: "في المقاولات العامة والتطوير العقاري والأنظمة البيئية.",
    sector: "construction" as SectorId,
  },
  {
    value: "+2,700",
    labelEn: "Apparel Styles & Garment Designs",
    labelAr: "موديل وتصميم ملابس معتمد للإنتاج",
    subEn: "Through specialized product development and ready-to-wear production lines.",
    subAr: "عبر أنشطة تطوير المنتجات المتخصصة وخطوط تصنيع الملابس الجاهزة.",
    sector: "garment" as SectorId,
  },
  {
    value: "4",
    labelEn: "Core Strategic Integrated Sectors",
    labelAr: "قطاعات استراتيجية متكاملة",
    subEn: "Contracting, sustainable environment, garment manufacturing, and natural products.",
    subAr: "المقاولات، والبيئة المستدامة، وتصنيع الملابس، والمنتجات الطبيعية.",
    sector: "food" as SectorId,
  },
  {
    value: "+10M",
    labelEn: "USD Overall Historic Business Volume",
    labelAr: "دولار إجمالي حجم الأعمال التاريخي",
    subEn: "Delivered across construction, environmental services, and industrial manufacturing.",
    subAr: "في المقاولات والخدمات البيئية والتصنيع الصناعي.",
    sector: "environmental" as SectorId,
  },
  {
    value: "4",
    labelEn: "Verified Strategic International Alliances",
    labelAr: "تحالفات استراتيجية دولية معتمدة",
    subEn: "With leading partners across China, Switzerland, and the GCC region.",
    subAr: "مع كبرى الشركات والتحالفات في الصين وسويسرا ودول الخليج.",
    sector: "environmental" as SectorId,
  },
];

export function BusinessDashboard({ ar }: { ar: boolean }) {
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  return (
    <section id="business-numbers" aria-labelledby="dash-heading" className="relative py-16 scroll-mt-24 overflow-hidden">
      <div className="site-container relative z-10">
        {/* Unified Group Performance & Business Numbers Box */}
        <Reveal>
          <div className="glass-box-interactive mx-auto rounded-[36px] p-8 sm:p-12 text-start cursor-pointer">
            <div className="relative z-10">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-3">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>{ar ? "أداء المجموعة ورؤى الأعمال" : "Group Performance & Business Insights"}</span>
                </div>
                <h2 id="dash-heading" className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug">
                  {ar ? "أعمالنا في أرقام" : "Our Business in Numbers"}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed text-start max-w-3xl">
                  {ar ? (
                    <span>تعرّف على حجم عملياتنا المتكاملة، والمشروعات الموثقة التي ننفذها، والأسواق التي نخدمها عبر قطاعات <span className="text-brand-orange font-bold">مجموعة سامي بن عياد</span>.</span>
                  ) : (
                    <span>Explore the scale of our integrated operations, documented projects delivered, and markets served across <span className="text-brand-orange font-bold">SAMI BIN AYYAD GROUP</span>.</span>
                  )}
                </p>
              </div>

              {/* Aggregated Group Statistics Grid inside the same unified glass card */}
              <div className="mt-8 pt-8 border-t border-border/50 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {aggregateStats.map((stat, idx) => {
                  const Icon = icons[stat.sector];
                  return (
                    <div
                      key={idx}
                      className="group/stat relative rounded-2xl border border-white/50 bg-white/50 dark:bg-white/15 p-5 backdrop-blur-xl shadow-xs transition-all duration-300 hover:-translate-y-1 hover:bg-white/80 dark:hover:bg-white/25 hover:shadow-lg cursor-pointer flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="flex size-9 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green-text transition-transform duration-300 group-hover/stat:scale-110">
                            <Icon className="size-4.5" />
                          </span>
                          <span className="font-mono text-[11px] font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2 py-0.5">
                            0{idx + 1}
                          </span>
                        </div>
                        {/* Milestones-style gradient and font size matching Our Journey */}
                        <div
                          className="font-head text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm flex items-center gap-1 text-start"
                          dir={ar ? "rtl" : "ltr"}
                        >
                          <AnimatedStatistic value={stat.value} />
                        </div>
                        <h3 className="mt-2.5 text-xs sm:text-sm font-bold text-foreground">
                          {ar ? stat.labelAr : stat.labelEn}
                        </h3>
                      </div>
                      <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground border-t border-border/40 pt-2.5">
                        {ar ? stat.subAr : stat.subEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}

export function WhatWeOfferSection({ ar }: { ar: boolean }) {
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  return (
    <section id="what-we-offer" className="site-container py-12 scroll-mt-24">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "نظرة عامة على الخدمات" : "Services Overview"}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-head">
          {ar ? "نظرة عامة على الخدمات" : "Services Overview"}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
          {ar
            ? "نقدم حلولًا وخدمات هندسية وتعاقدية وتصنيعية متكاملة تلبي احتياجات مختلف القطاعات، ونحوّل الخبرة إلى قيمة مستدامة."
            : "We deliver integrated engineering, contracting, and specialized manufacturing services that transform expertise into sustainable value."}
        </p>
      </div>

      <div className="grid gap-6">
        {dashboardSectors.filter((s) => s.id !== "food").map((s) => {
          const data = activities[s.id];
          return (
            <div
              key={s.id}
              className="glass-box-interactive rounded-3xl p-6 sm:p-8 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="w-full text-start border-b border-border/60 pb-5 mb-6">
                  <div>
                    <h4 className="text-start font-head text-lg sm:text-xl font-bold text-foreground">
                      {t(s.name)}
                    </h4>
                    <span className={cn("text-xs font-bold text-brand-orange block mt-1 text-start", ar ? "font-sans" : "font-mono")}>
                      {data.items.length} {ar ? "خدمات ومشروعات رئيسية" : "Specialized Capabilities"}
                    </span>
                  </div>
                </div>

                {/* Horizontal Flex Wrap of Services in Curved Glass Boxes */}
                <div className="flex flex-wrap gap-3">
                  {data.items.map((item) => (
                    <div
                      key={item.en}
                      className="group flex items-center gap-2.5 rounded-2xl border border-white/50 bg-white/50 dark:bg-white/15 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-white/80 hover:bg-white/80 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <CheckCircle2 className="size-4 shrink-0 text-brand-green-text transition-transform group-hover:scale-110" />
                      <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug">
                        {t(item)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


