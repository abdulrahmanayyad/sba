import { Building2, Leaf, Shirt, Wheat, Globe, CheckCircle2 } from "lucide-react";

import { HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { cn } from "@/lib/utils";
import { activities, dashboardSectors, targetMarkets, type SectorId } from "./dashboard-data";

const icons: Record<SectorId, typeof Leaf> = {
  construction: Building2,
  environmental: Leaf,
  garment: Shirt,
  food: Wheat,
};

const aggregateStats = [
  {
    value: "100+",
    labelEn: "Documented Projects & Works Delivered",
    labelAr: "مشروعًا وعملاً موثقًا تم تنفيذه",
    subEn: "Across general contracting, real estate development and environmental systems.",
    subAr: "في المقاولات العامة والتطوير العقاري والأنظمة البيئية.",
    sector: "construction" as SectorId,
  },
  {
    value: "20,000+",
    labelEn: "Apparel Styles & Garment Designs",
    labelAr: "موديل وتصميم ملابس تم تطويره",
    subEn: "Through specialized product development and ready-to-wear production lines.",
    subAr: "عبر أنشطة تطوير المنتجات المتخصصة وخطوط تصنيع الملابس الجاهزة.",
    sector: "garment" as SectorId,
  },
  {
    value: "10M+",
    labelEn: "USD Overall Historic Business Volume",
    labelAr: "دولار إجمالي حجم الأعمال التاريخي",
    subEn: "Delivered across construction, environmental services, and industrial manufacturing.",
    subAr: "في المقاولات والخدمات البيئية والتصنيع الصناعي.",
    sector: "environmental" as SectorId,
  },
  {
    value: "4",
    labelEn: "Core Strategic Integrated Sectors",
    labelAr: "قطاعات استراتيجية متكاملة",
    subEn: "Contracting, sustainable environment, garment manufacturing, and natural products.",
    subAr: "المقاولات، والبيئة المستدامة، وتصنيع الملابس، والمنتجات الطبيعية.",
    sector: "food" as SectorId,
  },
];

export function BusinessDashboard({ ar }: { ar: boolean }) {
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  const allMarkets = dashboardSectors.flatMap((s) =>
    targetMarkets[s.id].map((mk) => ({ ...mk, sector: s.id }))
  );
  const uniq = <X extends { name: { en: string } }>(list: X[]) =>
    list.filter((x, i) => list.findIndex((y) => y.name.en === x.name.en) === i);
  const countries = uniq(allMarkets.filter((mk) => mk.kind === "country"));
  const regions = uniq(allMarkets.filter((mk) => mk.kind === "region"));

  const card = "rounded-3xl border border-white/20 bg-background/80 p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-brand-orange/30";

  return (
    <section id="business-numbers" aria-labelledby="dash-heading" className="bg-page-alt section-band scroll-mt-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 blur-3xl rounded-full" />

      <div className="site-container relative z-10">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md mb-3">
            <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
            {ar ? "أداء المجموعة ورؤى الأعمال" : "Group Performance & Business Insights"}
          </div>
          <h2 id="dash-heading" className="section-title">
            {ar ? "أعمالنا في أرقام" : "Our Business in Numbers"}
          </h2>
          <p className="section-intro mt-4">
            {ar
              ? "تعرّف على حجم عملياتنا المتكاملة، والمشروعات الموثقة التي ننفذها، والأسواق التي نخدمها عبر قطاعات مجموعة سامي بن عياد."
              : "Explore the scale of our integrated operations, documented projects delivered, and markets served across SAMI BIN AYYAD GROUP."}
          </p>
        </Reveal>

        {/* Aggregated Group Statistics Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aggregateStats.map((stat, idx) => {
            const Icon = icons[stat.sector];
            return (
              <div
                key={idx}
                className={cn(card, "flex flex-col justify-between group")}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-text transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  {/* Plus on the left of number */}
                  <div className="font-head text-3xl md:text-4xl font-bold text-brand-orange flex items-center gap-1" dir="ltr">
                    <AnimatedStatistic value={stat.value} />
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-foreground">
                    {ar ? stat.labelAr : stat.labelEn}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                  {ar ? stat.subAr : stat.subEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Geographic Presence & Markets */}
        <div className={cn(card, "mt-8")}>
          <div className="flex items-center gap-3 mb-2">
            <Globe className="size-5 text-brand-green-text" />
            <h3 className="text-xl font-semibold">
              {ar ? "أسواقنا وانتشارنا الجغرافي" : "Our Markets & Geographic Reach"}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground">
            {ar ? "نربط قدراتنا بالفرص الإقليمية والدولية عبر شبكة واسعة من الشركاء." : "Connecting Our Capabilities with Regional and International Opportunities."}
          </p>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl bg-slate-900 shadow-inner" role="img" aria-label={(ar ? "الأسواق المستهدفة: " : "Target markets: ") + countries.map((c) => t(c.name)).join(", ")}>
              <div className="map-grid absolute inset-0 opacity-25" aria-hidden="true" />
              {countries.map((c) => (
                <span
                  key={c.name.en}
                  className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 transition-transform duration-300 hover:scale-125"
                  style={{ left: `${c.x}%`, top: `${c.y}%` }}
                  dir="ltr"
                >
                  <span className="relative flex size-2.5">
                    <span className="absolute inset-0 animate-ping rounded-full bg-brand-orange opacity-60 motion-reduce:hidden" />
                    <span className="relative size-2.5 rounded-full bg-brand-orange shadow-lg shadow-brand-orange" />
                  </span>
                  <span className="hidden font-mono text-[10px] text-white/90 font-medium sm:inline drop-shadow">
                    {t(c.name)}
                  </span>
                </span>
              ))}
              <p className="absolute bottom-3 start-3 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] text-white/80 backdrop-blur-md">
                <span className="size-2 rounded-full bg-brand-orange" />
                {ar ? "الأسواق والشركاء التجاريين" : "Markets & Trade Partners"}
              </p>
            </div>

            <div className="grid content-center gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  {ar ? "البلدان والأسواق" : "Countries & Markets"}
                </p>
                <div className="flex flex-wrap gap-2">
                  {countries.map((c) => (
                    <span key={c.name.en} className="rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-medium backdrop-blur-sm">
                      {t(c.name)}
                    </span>
                  ))}
                </div>
              </div>
              {regions.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                    {ar ? "الأقاليم" : "Regions"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {regions.map((r) => (
                      <span key={r.name.en} className="rounded-full bg-brand-green/10 border border-brand-green/20 px-3.5 py-1 text-xs font-medium text-brand-green-text backdrop-blur-sm">
                        {t(r.name)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* What We Do — Separate Open Cards Per Sector */}
        <div className="mt-12">
          <div className="mb-6">
            <h3 className="text-2xl font-bold font-head">
              {ar ? "ماذا نقدّم" : "What We Do"}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {ar
                ? "قائمة شاملة ومفصلة بكافة المشروعات والخدمات والقدرات عبر كل قطاع من قطاعاتنا."
                : "A comprehensive breakdown of all projects, capabilities, and services delivered by each sector."}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {dashboardSectors.map((s) => {
              const Icon = icons[s.id];
              const data = activities[s.id];
              return (
                <div
                  key={s.id}
                  className="rounded-3xl border border-white/20 bg-background/85 p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-brand-green/40"
                >
                  <div className="flex items-center gap-3 border-b border-border/60 pb-4 mb-5">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-text">
                      <Icon className="size-6" />
                    </span>
                    <div>
                      <h4 className="font-head text-lg font-bold text-foreground">
                        {t(s.name)}
                      </h4>
                      <span className="font-mono text-xs text-muted-foreground">
                        {data.items.length} {ar ? "خدمات ومشروعات رئيسية" : "Core Offerings"}
                      </span>
                    </div>
                  </div>

                  <ul className="grid gap-2.5 text-sm text-muted-foreground">
                    {data.items.map((item, i) => (
                      <li key={item.en} className="flex items-start gap-3 rounded-xl p-2 transition-colors hover:bg-muted/40">
                        <CheckCircle2 className="size-4 shrink-0 text-brand-green-text mt-0.5" />
                        <span className="text-foreground/90 font-medium leading-relaxed">
                          {t(item)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
