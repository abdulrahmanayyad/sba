import { useState } from "react";
import { Building2, ChevronDown, Leaf, Shirt, Wheat } from "lucide-react";

import { HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { cn } from "@/lib/utils";
import { achievements, activities, businessVolumes, dashboardSectors, formatUsd, matchesFilter, targetMarkets, type SectorFilter, type SectorId } from "./dashboard-data";

const icons: Record<SectorId, typeof Leaf> = { construction: Building2, environmental: Leaf, garment: Shirt, food: Wheat };
const maxVolume = Math.max(...businessVolumes.map((v) => v.usd));

export function BusinessDashboard({ ar }: { ar: boolean }) {
  const [filter, setFilter] = useState<SectorFilter>("all");
  const [open, setOpen] = useState<SectorId | null>(null);
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);
  const sectorName = (id: SectorId) => t(dashboardSectors.find((s) => s.id === id)!.name);
  const visibleSectors = dashboardSectors.filter((s) => matchesFilter(filter, s.id));
  const volumes = businessVolumes.filter((v) => matchesFilter(filter, v.sector));
  const stats = achievements.filter((a) => matchesFilter(filter, a.sector));
  const markets = visibleSectors.flatMap((s) => targetMarkets[s.id].map((mk) => ({ ...mk, sector: s.id })));
  const uniq = <X extends { name: { en: string } }>(list: X[]) => list.filter((x, i) => list.findIndex((y) => y.name.en === x.name.en) === i);
  const countries = uniq(markets.filter((mk) => mk.kind === "country"));
  const regions = uniq(markets.filter((mk) => mk.kind === "region"));

  const filters: { id: SectorFilter; label: string }[] = [{ id: "all", label: ar ? "كل القطاعات" : "All Sectors" }, ...dashboardSectors.map((s) => ({ id: s.id, label: t(s.short) }))];
  const card = "rounded-2xl border border-border bg-background p-5 md:p-7";

  return (
    <section id="business-numbers" aria-labelledby="dash-heading" className="bg-page-alt section-band scroll-mt-24">
      <div className="site-container">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{ar ? "أداء المجموعة ورؤى الأعمال" : "Group Performance & Business Insights"}</p>
          <h2 id="dash-heading" className="section-title">{ar ? "أعمالنا في أرقام" : "Our Business in Numbers"}</h2>
          <p className="section-intro mt-4">{ar ? "تعرّف على حجم عملياتنا والمشروعات التي ننفذها والأسواق التي نخدمها والقدرات المتنوعة التي تميّز مجموعة سامي بن عياد." : "Explore the scale of our operations, the projects we deliver, the markets we serve, and the diverse capabilities that define SAMI BIN AYYAD GROUP."}</p>
        </Reveal>

        <div role="radiogroup" aria-label={ar ? "تصفية حسب القطاع" : "Filter by sector"} className="no-scrollbar mt-8 flex gap-2 overflow-x-auto pb-1">
          {filters.map((f) => (
            <button key={f.id} type="button" role="radio" aria-checked={filter === f.id} onClick={() => setFilter(f.id)}
              className={cn("shrink-0 rounded-full border px-4 py-2 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green",
                filter === f.id ? "border-brand-green bg-brand-green text-footer-foreground" : "border-border bg-background text-foreground can-hover:hover:border-brand-green")}>
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* Layer 1 — business volume */}
          <div className={card}>
            <h3 className="text-xl font-semibold">{ar ? "حجم الأعمال عبر قطاعاتنا" : "Business Volume Across Our Sectors"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{ar ? "نظرة تاريخية على حجم الأعمال المُعلن لكل قطاع." : "A Historical Overview of Reported Business Volume by Sector."}</p>
            {volumes.length ? (
              <ul className="mt-6 grid gap-5" aria-label={ar ? "ملخص حجم الأعمال" : "Business volume summary"}>
                {volumes.map((v) => (
                  <li key={v.sector} className="group" title={`${sectorName(v.sector)} · ${v.period} · ${formatUsd(v.usd, ar)}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm">
                      <span className="font-medium">{sectorName(v.sector)}</span>
                      <span className="font-mono text-xs text-muted-foreground" dir="ltr">{v.period}</span>
                    </div>
                    <div className="mt-2 h-3 overflow-hidden rounded-full bg-frame">
                      <div data-grow-bar className="h-full rounded-full bg-brand-green transition-[width] duration-700 ease-out can-hover:group-hover:bg-brand-green-text" style={{ width: `${Math.max(6, (v.usd / maxVolume) * 100)}%` }} />
                    </div>
                    <p className="mt-1.5 font-head text-lg font-semibold text-brand-green-text" dir="ltr">{formatUsd(v.usd, ar)}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-6 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">{ar ? "لم تُنشر بعد بيانات مالية موثّقة لهذا القطاع." : "Verified financial data for this sector has not been published yet."}</p>
            )}
            <p className="mt-6 border-t border-border pt-4 text-xs text-muted-foreground">{ar ? "أحجام أعمال مُعلنة عن فترات تاريخية مختلفة، وليست إيرادات سنوية أو أرباحًا أو قوائم مالية مدققة، ولا تُجمع في إجمالي واحد." : "Reported business volumes over different historical periods — not annual revenue, profit or audited statements, and not combined into a group total."}</p>
          </div>

          {/* Layer 2 — achievements */}
          <div className={cn(card, "flex flex-col")}>
            <h3 className="text-xl font-semibold">{ar ? "إنجازاتنا في أرقام" : "Our Achievements in Numbers"}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{ar ? "لمحة عن خبرتنا في المشروعات وقدراتنا التصنيعية." : "A Snapshot of Our Project Experience and Manufacturing Capabilities."}</p>
            <div className="mt-5 grid flex-1 gap-3">
              {stats.length ? stats.map((s) => {
                const Icon = icons[s.sector];
                return (
                  <div key={s.sector} className="flex gap-4 rounded-xl border border-border p-4 transition-colors can-hover:hover:border-brand-green">
                    <Icon className="mt-1 size-5 shrink-0 text-brand-green-text" aria-hidden="true" />
                    <div>
                      <p className="font-head text-3xl font-semibold text-brand-orange-text"><AnimatedStatistic value={s.value} /> <span className="text-base font-medium text-foreground">{t(s.label)}</span></p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-brand-green-text">{sectorName(s.sector)}</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{t(s.body)}</p>
                    </div>
                  </div>
                );
              }) : <p className="rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">{ar ? "لا توجد أرقام إنجاز منشورة لهذا القطاع بعد." : "No achievement figures published for this sector yet."}</p>}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{ar ? "أرقام مُعلنة من الشركة، رهن التحقق من السجلات الرسمية." : "Reported company figures, subject to verification against official records."}</p>
          </div>
        </div>

        {/* Layer 3 — markets */}
        <div className={cn(card, "mt-5")}>
          <h3 className="text-xl font-semibold">{ar ? "أسواقنا وانتشارنا الجغرافي" : "Our Markets & Geographic Reach"}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{ar ? "نربط قدراتنا بالفرص الإقليمية والدولية." : "Connecting Our Capabilities with Regional and International Opportunities."}</p>
          <div className="mt-6 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-footer" role="img" aria-label={(ar ? "الأسواق المستهدفة: " : "Target markets: ") + countries.map((c) => t(c.name)).join(", ")}>
              <div className="map-grid absolute inset-0 opacity-30" aria-hidden="true" />
              {countries.map((c) => (
                <span key={c.name.en} className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 transition-opacity duration-500" style={{ left: `${c.x}%`, top: `${c.y}%` }} dir="ltr">
                  <span className="relative flex size-2.5"><span className="absolute inset-0 animate-ping rounded-full bg-brand-orange opacity-60 motion-reduce:hidden" /><span className="relative size-2.5 rounded-full bg-brand-orange" /></span>
                  <span className="hidden font-mono text-[10px] text-footer-foreground sm:inline">{t(c.name)}</span>
                </span>
              ))}
              <p className="absolute bottom-3 start-3 flex items-center gap-2 font-mono text-[10px] text-footer-muted"><span className="size-2 rounded-full bg-brand-orange" />{ar ? "سوق مستهدف (دولة)" : "Target market (country)"}</p>
            </div>
            <div className="grid content-start gap-5">
              <div>
                <p className="eyebrow">{ar ? "الدول" : "Countries"}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{countries.map((c) => <li key={c.name.en} className="rounded-full border border-border px-3 py-1 text-sm">{t(c.name)}</li>)}</ul>
              </div>
              {regions.length > 0 && <div>
                <p className="eyebrow">{ar ? "الأقاليم" : "Regions"}</p>
                <ul className="mt-3 flex flex-wrap gap-2">{regions.map((r) => <li key={r.name.en} className="rounded-full bg-brand-green/10 px-3 py-1 text-sm text-brand-green-text">{t(r.name)}</li>)}</ul>
              </div>}
              <p className="text-xs text-muted-foreground">{ar ? "أسواق مستهدفة ونطاق انتشار مخطط، وليست بالضرورة وجهات تصدير مؤكدة." : "Target markets and intended reach — not necessarily confirmed export destinations."}</p>
            </div>
          </div>
        </div>

        {/* Layer 4 — activities */}
        <div className="mt-5">
          <h3 className="text-xl font-semibold">{ar ? "ماذا نقدّم" : "What We Do"}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{ar ? "استكشف القدرات والخدمات عبر قطاعات أعمالنا." : "Explore the Capabilities and Services Across Our Business Sectors."}</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {visibleSectors.map((s) => {
              const Icon = icons[s.id];
              const isOpen = open === s.id || filter === s.id;
              const data = activities[s.id];
              return (
                <div key={s.id} className={cn(card, "!p-0")}>
                  <button type="button" aria-expanded={isOpen} aria-controls={`act-${s.id}`} onClick={() => setOpen(open === s.id ? null : s.id)}
                    className="flex w-full items-center gap-3 rounded-2xl p-5 text-start focus-visible:outline-2 focus-visible:outline-brand-green">
                    <Icon className="size-5 text-brand-green-text" aria-hidden="true" />
                    <span className="flex-1 font-medium">{t(s.name)}</span>
                    <span className="font-mono text-xs text-muted-foreground">{data.items.length}</span>
                    <ChevronDown className={cn("size-4 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                  </button>
                  <div id={`act-${s.id}`} className={cn("grid transition-[grid-template-rows] duration-300 ease-out", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <ol className="grid gap-2 px-5 pb-5 text-sm text-muted-foreground">
                        {data.items.map((item, i) => <li key={item.en} className="flex gap-3 border-t border-border pt-2"><span className="font-mono text-[10px] text-brand-green-text">{String(i + 1).padStart(2, "0")}</span>{t(item)}</li>)}
                      </ol>
                      {data.note && <p className="px-5 pb-5 text-xs text-brand-orange-text">{t(data.note)}</p>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
