import { useMemo, useState } from "react";
import { AlertTriangle, Check, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GlobalMarketSectorId, GlobalMarketStudy } from "@/lib/global-markets-data";

interface MarketComparisonPanelProps {
  sectorId: GlobalMarketSectorId;
  studies: GlobalMarketStudy[];
  ar: boolean;
}

export function MarketComparisonPanel({
  sectorId,
  studies,
  ar,
}: MarketComparisonPanelProps) {
  const comparableStudies = useMemo(
    () => studies.filter((s) => s.comparisonMetrics),
    [studies],
  );

  const [selectedIds, setSelectedIds] = useState<string[]>(() =>
    comparableStudies.slice(0, 2).map((s) => s.id),
  );

  const selectedStudies = useMemo(() => {
    const matched = comparableStudies.filter((s) => selectedIds.includes(s.id));
    if (matched.length >= 2) return matched;
    return comparableStudies.slice(0, 2);
  }, [comparableStudies, selectedIds]);

  const toggleStudy = (id: string) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.length > 2 ? prev.filter((x) => x !== id) : prev;
      }
      if (prev.length >= 4) {
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const unitMismatchWarning = useMemo(() => {
    if (selectedStudies.length < 2) return null;
    const marketUnits = new Set(selectedStudies.map((s) => s.comparisonMetrics?.marketSizeUnit));
    const importUnits = new Set(selectedStudies.map((s) => s.comparisonMetrics?.importsUnit));
    const years = new Set(selectedStudies.map((s) => s.comparisonMetrics?.referenceYear));
    if (marketUnits.size > 1 || importUnits.size > 1 || years.size > 1) {
      return ar
        ? "تنويه منهجي: توجد اختلافات في وحدات القياس أو سنوات المرجع بين الأسواق المختارة؛ يرجى قراءة الوحدة والسنة الموضحة بجانب كل قيمة قبل المقارنة المباشرة."
        : "Methodological Notice: Units of measurement or reference years differ across selected markets. Review the unit and year displayed beside each figure before direct comparison.";
    }
    return null;
  }, [selectedStudies, ar]);

  const isConstruction = sectorId === "construction";

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 sm:p-8 backdrop-blur-2xl shadow-lg space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 dark:border-white/10 pb-4">
        <div className="flex items-center gap-2.5">
          <div className="size-9 rounded-2xl bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 flex items-center justify-center shrink-0">
            <Scale className="size-4.5" />
          </div>
          <div>
            <h3 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
              {ar
                ? isConstruction
                  ? "مقارنة المناطق والمشروعات داخل مصر"
                  : "نظام المقارنة بين الأسواق والدول"
                : isConstruction
                ? "Compare Egyptian Regions & Projects"
                : "Cross-Market Comparison System"}
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {ar
                ? "مقارنة موحدة لحجم السوق، والواردات، ومعدل النمو، والمنتجات الأكثر طلبًا، والمنافسة، واللوجستيات، والفرص الاستثمارية."
                : "Side-by-side comparison of market size, imports, growth, demanded products, competition, entry ease, logistics, and investment opportunities."}
            </p>
          </div>
        </div>
      </div>

      {comparableStudies.length < 2 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50/80 dark:bg-slate-950/40 p-6 text-start space-y-2">
          <p className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-100">
            {ar
              ? "أداة المقارنة جاهزة للتفعيل فور نشر دراستين معتمدتين على الأقل في هذا القطاع."
              : "The comparison engine activates automatically once at least 2 verified studies with standardized metrics are published in this sector."}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {ar
              ? "حفاظًا على دقة البيانات المؤسسية، لا يتم عرض أي أرقام مقارنة تقديرية أو تجريبية قبل اعتماد الدراسات الرسمية."
              : "In keeping with corporate data integrity, no synthetic or placeholder figures are shown prior to verified study publication."}
          </p>
        </div>
      ) : (
        <>
          {/* Market Selector Pills */}
          <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1">
            {comparableStudies.map((s) => {
              const active = selectedStudies.some((x) => x.id === s.id);
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => toggleStudy(s.id)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                    active
                      ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900 shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-400 dark:border-white/15 dark:bg-slate-800/60 dark:text-slate-200",
                  )}
                >
                  {active && <Check className="size-3.5" />}
                  <span>
                    {ar
                      ? s.subRegionOrProjectAr || s.countryNameAr
                      : s.subRegionOrProjectEn || s.countryNameEn}
                  </span>
                </button>
              );
            })}
          </div>

          {unitMismatchWarning && (
            <div className="flex items-start gap-2.5 rounded-2xl border border-amber-500/40 bg-amber-500/10 p-3.5 text-xs text-amber-900 dark:text-amber-200">
              <AlertTriangle className="size-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>{unitMismatchWarning}</span>
            </div>
          )}

          {/* Side-by-Side Comparison Matrix */}
          <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-white/10">
            <table className="w-full text-xs">
              <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-800 dark:text-slate-100">
                <tr>
                  <th className="px-4 py-3 font-extrabold text-start">
                    {ar ? "معيار المقارنة" : "Comparison Criterion"}
                  </th>
                  {selectedStudies.map((s) => (
                    <th key={s.id} className="px-4 py-3 font-extrabold text-start min-w-[180px]">
                      <div>{ar ? s.countryNameAr : s.countryNameEn}</div>
                      {(ar ? s.subRegionOrProjectAr : s.subRegionOrProjectEn) && (
                        <div className="text-[10px] font-semibold text-slate-500">
                          {ar ? s.subRegionOrProjectAr : s.subRegionOrProjectEn}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
                {[
                  {
                    labelAr: "حجم السوق",
                    labelEn: "Market Size",
                    render: (s: GlobalMarketStudy) => {
                      const m = s.comparisonMetrics!;
                      return `${ar ? m.marketSizeDisplayAr : m.marketSizeDisplayEn} (${m.marketSizeUnit} · ${m.referenceYear})`;
                    },
                  },
                  {
                    labelAr: "قيمة الواردات",
                    labelEn: "Import Value",
                    render: (s: GlobalMarketStudy) => {
                      const m = s.comparisonMetrics!;
                      return `${ar ? m.importsDisplayAr : m.importsDisplayEn} (${m.importsUnit} · ${m.referenceYear})`;
                    },
                  },
                  {
                    labelAr: "معدل النمو",
                    labelEn: "Growth Rate",
                    render: (s: GlobalMarketStudy) => {
                      const m = s.comparisonMetrics!;
                      return `${m.growthRateDisplay} (${m.growthUnit})`;
                    },
                  },
                  {
                    labelAr: "المنتجات الأكثر طلبًا",
                    labelEn: "Most Demanded Products",
                    render: (s: GlobalMarketStudy) =>
                      (ar
                        ? s.comparisonMetrics!.topDemandedProductsAr
                        : s.comparisonMetrics!.topDemandedProductsEn
                      ).join(" · "),
                  },
                  {
                    labelAr: "المنافسة",
                    labelEn: "Competition",
                    render: (s: GlobalMarketStudy) =>
                      ar ? s.comparisonMetrics!.competitionLevelAr : s.comparisonMetrics!.competitionLevelEn,
                  },
                  {
                    labelAr: "سهولة دخول السوق",
                    labelEn: "Ease of Market Entry",
                    render: (s: GlobalMarketStudy) =>
                      ar ? s.comparisonMetrics!.entryEaseAr : s.comparisonMetrics!.entryEaseEn,
                  },
                  {
                    labelAr: "التكاليف اللوجستية",
                    labelEn: "Logistics Costs",
                    render: (s: GlobalMarketStudy) =>
                      ar ? s.comparisonMetrics!.logisticsCostAr : s.comparisonMetrics!.logisticsCostEn,
                  },
                  {
                    labelAr: "الفرص الاستثمارية",
                    labelEn: "Investment Opportunities",
                    render: (s: GlobalMarketStudy) =>
                      ar
                        ? s.comparisonMetrics!.investmentOpportunityAr
                        : s.comparisonMetrics!.investmentOpportunityEn,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 dark:hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-bold text-slate-900 dark:text-slate-100 whitespace-nowrap">
                      {ar ? row.labelAr : row.labelEn}
                    </td>
                    {selectedStudies.map((s) => (
                      <td key={s.id} className="px-4 py-3 text-slate-700 dark:text-slate-200 leading-relaxed">
                        {row.render(s)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

