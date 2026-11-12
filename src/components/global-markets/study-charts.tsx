import { useState } from "react";
import { BarChart3, Table2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  StudyChartDataset,
  StudyKpiMetric,
  StudyTableDataset,
} from "@/lib/global-markets-data";

export function StudyKpiGrid({ kpis, ar }: { kpis: StudyKpiMetric[]; ar: boolean }) {
  if (kpis.length === 0) return null;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi) => (
        <div
          key={kpi.id}
          className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-5 backdrop-blur-xl shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
        >
          <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
            {ar ? kpi.labelAr : kpi.labelEn}
          </p>
          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="font-head text-2xl font-extrabold text-slate-900 dark:text-white">
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
  const maxVal = Math.max(
    1,
    ...chart.items.flatMap((it) => [it.value, it.secondaryValue ?? 0]),
  );

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-sm space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 flex items-center justify-center shrink-0">
            <BarChart3 className="size-4" />
          </div>
          <div>
            <h3 className="font-head text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {ar ? chart.titleAr : chart.titleEn}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {ar ? "الوحدة:" : "Unit:"} {chart.unit} · {ar ? "السنة:" : "Year:"} {chart.referenceYear}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
          {chart.source}
        </span>
      </div>

      {chart.type === "comparison" && chart.secondarySeriesLabelAr && (
        <div className="flex flex-wrap items-center gap-4 text-[11px] font-semibold text-slate-600 dark:text-slate-300">
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-slate-800 dark:bg-slate-200" />
            <span>{ar ? chart.primarySeriesLabelAr : chart.primarySeriesLabelEn}</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="size-2.5 rounded-sm bg-brand-green" />
            <span>{ar ? chart.secondarySeriesLabelAr : chart.secondarySeriesLabelEn}</span>
          </span>
        </div>
      )}

      <div className="space-y-3">
        {chart.items.map((item, idx) => {
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
                  {item.value.toLocaleString(ar ? "ar-EG" : "en-US")} {chart.unit}
                  {typeof item.secondaryValue === "number" && (
                    <span className="text-brand-green ms-2">
                      / {item.secondaryValue.toLocaleString(ar ? "ar-EG" : "en-US")} {chart.unit}
                    </span>
                  )}
                </span>
              </div>

              <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-slate-800">
                <div
                  className={cn(
                    "h-full rounded-full transition-all duration-500",
                    isHovered ? "bg-brand-green" : "bg-slate-800 dark:bg-slate-300",
                  )}
                  style={{ width: `${pct}%` }}
                />
              </div>

              {secPct !== null && (
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/60 dark:bg-slate-800">
                  <div
                    className="h-full rounded-full bg-brand-green/85 transition-all duration-500"
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
  const columns = ar ? table.columnsAr : table.columnsEn;
  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/75 dark:bg-slate-900/60 p-6 backdrop-blur-xl shadow-sm space-y-4">
      <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-200/70 dark:border-white/10 pb-3">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-xl bg-slate-900/5 dark:bg-white/10 text-slate-800 dark:text-slate-100 flex items-center justify-center shrink-0">
            <Table2 className="size-4" />
          </div>
          <div>
            <h3 className="font-head text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {ar ? table.titleAr : table.titleEn}
            </h3>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">
              {ar ? "الوحدة:" : "Unit:"} {table.unit} · {ar ? "السنة:" : "Year:"} {table.referenceYear}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/80 dark:bg-white/5 px-2.5 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300">
          {table.source}
        </span>
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
            {table.rows.map((row, rIdx) => (
              <tr key={rIdx} className="hover:bg-slate-50/90 dark:hover:bg-white/5 transition-colors">
                {row.map((cell, cIdx) => (
                  <td key={cIdx} className="px-4 py-2.5 text-slate-700 dark:text-slate-200">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

