import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import type {
  StudyChartDataset,
  StudyChartPoint,
  StudyKpiMetric,
  StudyTableDataset,
} from "@/lib/global-markets-data";

export function StudyKpiGrid({ kpis, ar }: { kpis: StudyKpiMetric[]; ar: boolean }) {
  const visibleKpis = useMemo(() => {
    return kpis.filter((kpi) => {
      const labelAr = kpi.labelAr || "";
      const labelEn = kpi.labelEn || "";
      if (labelAr.includes("الترتيب ضمن محفظة") || labelEn.includes("Portfolio Sequence")) return false;
      if (labelAr.includes("أوراق عمل") || labelEn.includes("Worksheets Count")) return false;
      return true;
    });
  }, [kpis]);

  if (visibleKpis.length === 0) return null;

  const getKpiScoreColor = (val: string) => {
    const m = val.match(/^(\d+)\/100$/);
    if (!m) return "text-slate-900 dark:text-white";
    const num = parseInt(m[1], 10);
    if (num >= 80) return "text-brand-green";
    if (num >= 65) return "text-brand-orange";
    return "text-red-500";
  };

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {visibleKpis.map((kpi) => (
        <div
          key={kpi.id}
          className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 backdrop-blur-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
            {ar ? kpi.labelAr : kpi.labelEn}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className={cn("font-head text-2xl font-extrabold", getKpiScoreColor(kpi.value))}>
              {kpi.value}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              {kpi.unit}
            </span>
          </div>
          {(ar ? kpi.growthNoteAr : kpi.growthNoteEn) && (
            <p className="mt-1.5 text-[11px] font-bold text-brand-green">
              {ar ? kpi.growthNoteAr : kpi.growthNoteEn}
            </p>
          )}
          <div className="mt-3 pt-2.5 border-t border-slate-200/70 dark:border-white/10 text-[10px] text-slate-500 dark:text-slate-400">
            <span className="font-semibold">{ar ? "المصدر:" : "Source:"}</span>{" "}
            <span>{kpi.source}</span> · <span>{kpi.referenceYear}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export function StudyChartCard({ chart, ar }: { chart: StudyChartDataset; ar: boolean }) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const cAny = chart as any;
  const items: StudyChartPoint[] = useMemo(() => {
    if (Array.isArray(chart.items) && chart.items.length > 0) {
      return chart.items;
    }
    if (Array.isArray(cAny.categories) && Array.isArray(cAny.series) && cAny.series.length > 0) {
      const primary = cAny.series[0];
      const secondary = cAny.series[1];
      return cAny.categories.map((cat: string, idx: number) => {
        const val = primary?.data?.[idx];
        const secVal = secondary?.data?.[idx];
        return {
          labelAr: cat,
          labelEn: cat,
          value: typeof val === "number" ? val : Number(val) || 0,
          secondaryValue: typeof secVal === "number" ? secVal : undefined,
        };
      });
    }
    return [];
  }, [chart, cAny.categories, cAny.series]);

  if (items.length === 0) return null;

  const maxVal = Math.max(
    1,
    ...items.flatMap((it) => [it.value, it.secondaryValue ?? 0]),
  );

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-sm space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
        <div>
          <h3 className="font-head text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {ar ? chart.titleAr : chart.titleEn}
          </h3>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            {ar ? "الوحدة:" : "Unit:"} {chart.unit} · {ar ? "السنة:" : "Year:"} {chart.referenceYear}
          </p>
        </div>
        {chart.source && !chart.source.includes("قاعدة بيانات قطاع البيئة") && (
          <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
            {chart.source}
          </span>
        )}
      </div>

      {chart.type === "comparison" && chart.secondarySeriesLabelAr && (
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-brand-green" />
            <span>{ar ? chart.primarySeriesLabelAr : chart.primarySeriesLabelEn}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-brand-orange" />
            <span>{ar ? chart.secondarySeriesLabelAr : chart.secondarySeriesLabelEn}</span>
          </span>
        </div>
      )}

      <div className="space-y-3">
        {items.map((item, idx) => {
          const pct = Math.max(2, Math.round((item.value / maxVal) * 100));
          const secPct =
            typeof item.secondaryValue === "number"
              ? Math.max(2, Math.round((item.secondaryValue / maxVal) * 100))
              : null;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={`${chart.id}-${idx}`}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className="space-y-1.5 rounded-xl p-2 transition-colors hover:bg-slate-100/70 dark:hover:bg-white/5"
            >
              <div className="flex items-center justify-between gap-3 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-100">
                  {ar ? item.labelAr : item.labelEn}
                </span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">
                  <span className="text-brand-green font-extrabold">{item.value.toLocaleString(ar ? "ar-EG" : "en-US")}</span> {chart.unit}
                  {typeof item.secondaryValue === "number" && (
                    <span className="text-brand-orange ms-2">
                      / {item.secondaryValue.toLocaleString(ar ? "ar-EG" : "en-US")} {chart.unit}
                    </span>
                  )}
                </span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    isHovered ? "bg-brand-orange" : "bg-brand-green",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>

              {secPct !== null && (
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800">
                  <div
                    className={cn(
                      "h-full rounded-full transition-all duration-500",
                      isHovered ? "bg-brand-green" : "bg-brand-orange/85",
                    )}
                    style={{ width: `${secPct}%` }}
                  />
                </div>
              )}

              {isHovered && (ar ? item.noteAr : item.noteEn) && (
                <p className="text-[11px] text-slate-600 dark:text-slate-300">
                  {ar ? item.noteAr : item.noteEn}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function StudyTableCard({ table, ar }: { table: StudyTableDataset; ar: boolean }) {
  const tAny = table as any;
  const rawCols = ar
    ? (table.columnsAr || tAny.headersAr)
    : (table.columnsEn || tAny.headersEn);
  const columns: string[] = Array.isArray(rawCols)
    ? rawCols
    : tAny.columns?.map((c: any) => (ar ? c.headerAr : c.headerEn) || c) ||
      tAny.headers?.map((c: any) => (ar ? c.headerAr : c.headerEn) || c) ||
      [];

  const rawRows = ar
    ? (tAny.rowsAr || table.rows || tAny.dataAr || tAny.data)
    : (tAny.rowsEn || table.rows || tAny.dataEn || tAny.data);
  const rows: any[] = Array.isArray(rawRows) ? rawRows : [];

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-sm space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
        <div>
          <h3 className="font-head text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {ar ? table.titleAr : table.titleEn}
          </h3>
          {(table.unit || table.referenceYear) && (
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {table.unit ? `${ar ? "الوحدة:" : "Unit:"} ${table.unit}` : ""}
              {table.unit && table.referenceYear ? " · " : ""}
              {table.referenceYear ? `${ar ? "السنة:" : "Year:"} ${table.referenceYear}` : ""}
            </p>
          )}
        </div>
        {table.source && !table.source.includes("قاعدة بيانات قطاع البيئة") && (
          <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
            {table.source}
          </span>
        )}
      </div>

      <div className="overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-white/10">
        <table className="w-full text-xs">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-4 py-3 font-bold text-start whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
            {rows.map((row, rIdx) => {
              const cells = Array.isArray(row)
                ? row
                : typeof row === "object" && row !== null
                ? Object.values(row)
                : [row];
              return (
                <tr key={rIdx} className="hover:bg-slate-50/90 dark:hover:bg-white/5 transition-colors">
                  {cells.map((cell, cIdx) => (
                    <td key={cIdx} className="px-4 py-2.5 text-slate-700 dark:text-slate-200">
                      {String(cell ?? "")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}


