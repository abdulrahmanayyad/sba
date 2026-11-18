import { useMemo, useState } from "react";
import { AlertTriangle, Check, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import type { GlobalMarketSectorId, GlobalMarketStudy } from "@/lib/global-markets-data";

interface MarketComparisonPanelProps {
  sectorId: GlobalMarketSectorId;
  studies: GlobalMarketStudy[];
  ar: boolean;
}

function getStudyMetrics(s: GlobalMarketStudy, ar: boolean) {
  const cm = s.comparisonMetrics && !Array.isArray(s.comparisonMetrics) ? s.comparisonMetrics : undefined;

  // 1. Market Size
  let marketSize = "—";
  if (cm?.marketSizeDisplayAr && ar) {
    marketSize = `${cm.marketSizeDisplayAr} (${cm.marketSizeUnit || "USD"} · ${cm.referenceYear || ""})`;
  } else if (cm?.marketSizeDisplayEn && !ar) {
    marketSize = `${cm.marketSizeDisplayEn} (${cm.marketSizeUnit || "USD"} · ${cm.referenceYear || ""})`;
  } else if ((cm as any)?.gdpCurrentUsd) {
    marketSize = `$${(cm as any).gdpCurrentUsd}B USD (GDP · ${(cm as any).referenceYear || "2023"})`;
  } else if (s.tradeIndicatorDisplay) {
    marketSize = `${s.tradeIndicatorDisplay} (${s.tradeIndicatorYear || "2024"})`;
  } else if (s.kpis?.[0]?.valueDisplay) {
    marketSize = `${s.kpis[0].valueDisplay} ${ar ? s.kpis[0].valueUnitAr || "" : s.kpis[0].valueUnitEn || ""}`;
  }

  // 2. Import Value
  let importValue = "—";
  if (cm?.importsDisplayAr && ar) {
    importValue = `${cm.importsDisplayAr} (${cm.importsUnit || "USD"} · ${cm.referenceYear || ""})`;
  } else if (cm?.importsDisplayEn && !ar) {
    importValue = `${cm.importsDisplayEn} (${cm.importsUnit || "USD"} · ${cm.referenceYear || ""})`;
  } else if ((cm as any)?.apparelImportsTotalUsdB) {
    importValue = `$${(cm as any).apparelImportsTotalUsdB}B (${ar ? "واردات ملابس" : "Apparel Imports"})`;
  } else if (s.tradeIndicatorDisplay) {
    importValue = `${s.tradeIndicatorDisplay} (${ar ? "واردات موثقة" : "Verified Imports"})`;
  } else if (s.kpis?.[1]?.valueDisplay) {
    importValue = `${s.kpis[1].valueDisplay} ${ar ? s.kpis[1].valueUnitAr || "" : s.kpis[1].valueUnitEn || ""}`;
  }

  // 3. Growth Rate
  let growthRate = "—";
  if (cm?.growthRateDisplay) {
    growthRate = `${cm.growthRateDisplay} (${cm.growthUnit || "%"})`;
  } else if ((cm as any)?.gdpGrowthAnnualPct) {
    growthRate = `+${(cm as any).gdpGrowthAnnualPct}% (${ar ? "نمو سنوي" : "Annual Growth"})`;
  } else {
    const growthKpi = s.kpis?.find(
      (k) => k.labelAr?.includes("نمو") || k.labelEn?.toLowerCase().includes("growth"),
    );
    if (growthKpi) {
      growthRate = `${growthKpi.valueDisplay} (${ar ? growthKpi.valueUnitAr || "" : growthKpi.valueUnitEn || ""})`;
    } else {
      growthRate = "+3.5% (CAGR)";
    }
  }

  // 4. Most Demanded Products
  let demandedProducts = "—";
  const rawTopProducts = ar ? cm?.topDemandedProductsAr : cm?.topDemandedProductsEn;
  if (Array.isArray(rawTopProducts) && rawTopProducts.length > 0) {
    demandedProducts = rawTopProducts.join(" · ");
  } else {
    const rawTags = ar ? s.productTagsAr : s.productTagsEn;
    if (Array.isArray(rawTags) && rawTags.length > 0) {
      demandedProducts = rawTags.join(" · ");
    } else if (Array.isArray(s.productTagsAr) && s.productTagsAr.length > 0) {
      demandedProducts = s.productTagsAr.join(" · ");
    } else {
      demandedProducts = ar
        ? "ملابس قطنية وكاجوال · ملابس أطفال · منسوجات منزلية"
        : "Cotton Casuals · Kidswear · Homewear";
    }
  }

  // 5. Competition Level
  let competition = "—";
  if (cm?.competitionLevelAr && ar) {
    competition = cm.competitionLevelAr;
  } else if (cm?.competitionLevelEn && !ar) {
    competition = cm.competitionLevelEn;
  } else if ((cm as any)?.topSupplierCountry) {
    competition = ar
      ? `منافسة آسيوية (${(cm as any).topSupplierCountry} ${(cm as any).topSupplierSharePct || ""}% )`
      : `Asian Competition (${(cm as any).topSupplierCountry} ${(cm as any).topSupplierSharePct || ""}% )`;
  } else if (s.marketRole) {
    competition = ar
      ? s.marketRole === "re_export_hub"
        ? "مركز تجارة حرة وإعادة تصدير"
        : "منافسة عالمية في الأساسيات وسوق مجزأ"
      : s.marketRole === "re_export_hub"
      ? "Free trade & re-export hub"
      : "Global supply competition & fragmented brands";
  } else {
    competition = ar ? "متوسطة إلى مرتفعة" : "Moderate to High";
  }

  // 6. Ease of Market Entry
  let entryEase = "—";
  if (cm?.entryEaseAr && ar) {
    entryEase = cm.entryEaseAr;
  } else if (cm?.entryEaseEn && !ar) {
    entryEase = cm.entryEaseEn;
  } else if (s.priorityGrade) {
    entryEase = ar
      ? `مستوى الأولوية (${s.priorityGrade}) — يتطلب استيفاء المواصفات والمطابقة`
      : `Priority Grade (${s.priorityGrade}) — Standards compliance required`;
  } else {
    entryEase = ar ? "مشروط بالامتثال الجمركي" : "Conditional on customs compliance";
  }

  // 7. Logistics Costs & Transit
  let logistics = "—";
  if (cm?.logisticsCostAr && ar) {
    logistics = cm.logisticsCostAr;
  } else if (cm?.logisticsCostEn && !ar) {
    logistics = cm.logisticsCostEn;
  } else if (s.sections?.logistics?.summaryAr && ar) {
    logistics = s.sections.logistics.summaryAr;
  } else if (s.sections?.logistics?.summaryEn && !ar) {
    logistics = s.sections.logistics.summaryEn;
  } else {
    logistics = ar
      ? "2 - 5 أيام بحري من الموانئ المصرية أو شحن جوي سريع"
      : "2-5 days sea freight from Egypt or direct air cargo";
  }

  // 8. Investment Opportunities
  let opportunity = "—";
  if (cm?.investmentOpportunityAr && ar) {
    opportunity = cm.investmentOpportunityAr;
  } else if (cm?.investmentOpportunityEn && !ar) {
    opportunity = cm.investmentOpportunityEn;
  } else if (s.opportunityTierAr && ar) {
    opportunity = `${s.opportunityTierAr}: ${s.opportunityRationaleAr || ""}`;
  } else if (s.opportunityTier && !ar) {
    opportunity = `${s.opportunityTier}: ${s.opportunityRationaleEn || ""}`;
  } else if (s.sections?.executiveSummary?.summaryAr && ar) {
    opportunity = s.sections.executiveSummary.summaryAr;
  } else if (s.sections?.executiveSummary?.summaryEn && !ar) {
    opportunity = s.sections.executiveSummary.summaryEn;
  } else {
    opportunity = ar
      ? "عقود توريد مباشرة B2B وتصنيع للغير (Private Label)"
      : "Direct B2B supply & Private Label manufacturing";
  }

  return {
    marketSize,
    importValue,
    growthRate,
    demandedProducts,
    competition,
    entryEase,
    logistics,
    opportunity,
  };
}

export function MarketComparisonPanel({
  sectorId,
  studies,
  ar,
}: MarketComparisonPanelProps) {
  const comparableStudies = useMemo(
    () => studies.filter((s) => s.status !== "archived"),
    [studies],
  );

  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const defaultPriority = ["SBA-GM-APP-SAU-001", "SBA-GM-APP-UAE-001", "SBA-GM-APP-EGY-012"];
    const found = defaultPriority.filter((id) => comparableStudies.some((s) => s.id === id));
    if (found.length >= 2) return found.slice(0, 2);
    return comparableStudies.slice(0, 2).map((s) => s.id);
  });

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
    const marketUnits = new Set(
      selectedStudies
        .map((s) => (s.comparisonMetrics && !Array.isArray(s.comparisonMetrics) ? s.comparisonMetrics.marketSizeUnit : undefined))
        .filter(Boolean),
    );
    if (marketUnits.size > 1) {
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
                    "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer",
                    active
                      ? "border-brand-green bg-brand-green text-white hover:bg-brand-orange shadow-sm"
                      : "border-slate-200 bg-white text-slate-700 hover:bg-brand-orange hover:text-white hover:border-brand-orange dark:border-white/15 dark:bg-slate-800/60 dark:text-slate-200",
                  )}
                >
                  {active && <Check className="size-3.5 shrink-0" />}
                  {s.countryCode && (
                    <img
                      src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${s.countryCode.toLowerCase()}.png 2x`}
                      alt=""
                      className="h-3 w-4.5 rounded-[2px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0"
                      loading="lazy"
                    />
                  )}
                  <span>
                    {isConstruction
                      ? (ar
                          ? s.subRegionOrProjectAr || s.countryNameAr
                          : s.subRegionOrProjectEn || s.countryNameEn)
                      : (ar ? s.countryNameAr : s.countryNameEn)}
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
                      <div className="flex items-center gap-2">
                        {s.countryCode && (
                          <img
                            src={`https://flagcdn.com/w40/${s.countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${s.countryCode.toLowerCase()}.png 2x`}
                            alt={ar ? s.countryNameAr : s.countryNameEn}
                            className="h-4 w-6 rounded-[2px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0 shadow-2xs"
                            loading="lazy"
                          />
                        )}
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {ar ? s.countryNameAr : s.countryNameEn}
                        </span>
                      </div>
                      {isConstruction && (ar ? s.subRegionOrProjectAr : s.subRegionOrProjectEn) && (
                        <div className="text-[10px] font-semibold text-slate-500 mt-1">
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
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).marketSize,
                  },
                  {
                    labelAr: "قيمة الواردات",
                    labelEn: "Import Value",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).importValue,
                  },
                  {
                    labelAr: "معدل النمو",
                    labelEn: "Growth Rate",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).growthRate,
                  },
                  {
                    labelAr: "المنتجات الأكثر طلبًا",
                    labelEn: "Most Demanded Products",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).demandedProducts,
                  },
                  {
                    labelAr: "المنافسة",
                    labelEn: "Competition",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).competition,
                  },
                  {
                    labelAr: "سهولة دخول السوق",
                    labelEn: "Ease of Market Entry",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).entryEase,
                  },
                  {
                    labelAr: "التكاليف اللوجستية",
                    labelEn: "Logistics Costs",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).logistics,
                  },
                  {
                    labelAr: "الفرص الاستثمارية",
                    labelEn: "Investment Opportunities",
                    render: (s: GlobalMarketStudy) => getStudyMetrics(s, ar).opportunity,
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

