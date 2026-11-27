import React, { useState, useMemo } from "react";
import {
  Layers,
  Building2,
  TrendingUp,
  Percent,
  CheckCircle2,
  AlertCircle,
  ArrowUpDown,
  Compass,
  CheckSquare,
  Square,
  Sparkles,
  BarChart3,
  Scale,
  X,
  ShieldCheck,
  ChevronRight,
  Info,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import {
  DATA_QUALITY_TIERS,
  type DistrictSubmarket,
  type EastCairoCityProfile,
} from "@/lib/studies/east-cairo-master-study";

interface IntraCityDistrictComparatorProps {
  ar: boolean;
  city: EastCairoCityProfile;
}

export function IntraCityDistrictComparator({ ar, city }: IntraCityDistrictComparatorProps) {
  const [selectedDistrictIds, setSelectedDistrictIds] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<"price" | "yield" | "occupancy" | "maturity">("price");
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const submarkets = city.submarkets || [];

  // Toggle selection for head-to-head comparison
  const toggleDistrictSelection = (id: string) => {
    setSelectedDistrictIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 3) {
        // limit to 3 for clean side-by-side comparison
        return [...prev.slice(1), id];
      }
      return [...prev, id];
    });
  };

  const clearSelection = () => {
    setSelectedDistrictIds([]);
  };

  // Sorted submarkets
  const sortedSubmarkets = useMemo(() => {
    return [...submarkets].sort((a, b) => {
      if (sortBy === "price") {
        return (b.avgFlatPriceEgpSqm ?? 0) - (a.avgFlatPriceEgpSqm ?? 0);
      }
      if (sortBy === "yield") {
        return (b.rentalYieldPct ?? 0) - (a.rentalYieldPct ?? 0);
      }
      if (sortBy === "occupancy") {
        return (b.occupancyPct ?? 0) - (a.occupancyPct ?? 0);
      }
      if (sortBy === "maturity") {
        return (b.maturityScore ?? 0) - (a.maturityScore ?? 0);
      }
      return 0;
    });
  }, [submarkets, sortBy]);

  // Selected submarkets for head-to-head comparison
  const comparedSubmarkets = useMemo(() => {
    return submarkets.filter((s) => selectedDistrictIds.includes(s.id));
  }, [submarkets, selectedDistrictIds]);

  // Chart data
  const chartData = useMemo(() => {
    return submarkets.map((s) => ({
      name: ar ? s.nameAr.split(" (")[0] : s.nameEn.split(" (")[0],
      flatPrice: s.avgFlatPriceEgpSqm ?? 0,
      villaPrice: s.avgVillaPriceEgpSqm ?? 0,
      commercialPrice: s.avgCommercialPriceEgpSqm ?? 0,
      yieldPct: s.rentalYieldPct ?? 0,
    }));
  }, [submarkets, ar]);

  if (submarkets.length === 0) {
    return (
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/40 p-6 text-center text-xs text-slate-500">
        {ar
          ? "لم يتم تسجيل أحياء فرعية تفصيلية بعد لهذه المنطقة."
          : "No detailed submarkets registered yet for this city."}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Module Header & View Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-white/10 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300">
              <Scale className="size-3 me-1" />
              {ar ? `المقارنة التحليلية للأحياء داخل ${city.nameAr}` : `Intra-City District Comparator — ${city.nameEn}`}
            </span>
            <span className="text-xs text-slate-500">
              ({submarkets.length} {ar ? "أحياء ومناطق مسجلة" : "Districts Tracked"})
            </span>
          </div>
          <h4 className="font-head text-lg font-bold text-slate-900 dark:text-white">
            {ar
              ? "مقارنة الأسعار والعوائد ومستويات النضج بين أحياء المدينة"
              : "Price, Yield & Maturity Spreads Across City Submarkets"}
          </h4>
        </div>

        {/* Controls: Sort By & View Mode */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Sort selector */}
          <div className="flex items-center gap-1 text-xs">
            <span className="text-slate-400 font-medium">{ar ? "ترتيب حسب:" : "Sort:"}</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 px-2.5 py-1 text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#0F8B7A]"
            >
              <option value="price">{ar ? "سعر الشقق (الأعلى)" : "Flat Price (High)"}</option>
              <option value="yield">{ar ? "العائد الإيجاري (%)" : "Rental Yield (%)"}</option>
              <option value="occupancy">{ar ? "نسبة الإشغال" : "Occupancy Rate"}</option>
              <option value="maturity">{ar ? "مؤشر النضج" : "Maturity Score"}</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="inline-flex rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 p-0.5">
            <button
              type="button"
              onClick={() => setViewMode("cards")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                viewMode === "cards"
                  ? "bg-white dark:bg-slate-900 text-[#0F8B7A] shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {ar ? "بطاقات الأحياء" : "Cards"}
            </button>
            <button
              type="button"
              onClick={() => setViewMode("table")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                viewMode === "table"
                  ? "bg-white dark:bg-slate-900 text-[#0F8B7A] shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {ar ? "جدول مقارن" : "Table"}
            </button>
          </div>
        </div>
      </div>

      {/* Intra-City District Benchmark Chart */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <BarChart3 className="size-3.5 text-[#0F8B7A]" />
            <span>{ar ? `رسم بياني لمقارنة أسعار المتر المربع عبر أحياء ${city.nameAr}` : `District Pricing Benchmark — ${city.nameEn}`}</span>
          </span>
          <span className="text-[11px] text-slate-400">
            {ar ? "حدد الأحياء أدناه للمقارنة المباشرة" : "Select districts below to compare head-to-head"}
          </span>
        </div>

        <div className="mt-4 h-64 w-full" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, left: 10, bottom: 35 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10, fill: "#64748b" }}
                interval={0}
                angle={-25}
                textAnchor="end"
                height={50}
              />
              <YAxis
                tick={{ fontSize: 10, fill: "#64748b" }}
                unit=" EGP"
                tickFormatter={(val) => `${val / 1000}k`}
              />
              <Tooltip
                formatter={(val: any) => [
                  `${new Intl.NumberFormat().format(val)} EGP/m²`,
                  "",
                ]}
                contentStyle={{
                  backgroundColor: "#0f172a",
                  borderColor: "#334155",
                  borderRadius: "12px",
                  color: "#f8fafc",
                  fontSize: "11px",
                }}
              />
              <Legend wrapperStyle={{ fontSize: "11px", paddingTop: "5px" }} />
              <Bar
                dataKey="flatPrice"
                name={ar ? "شقق سكنية" : "Apartments"}
                fill="#0F8B7A"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="villaPrice"
                name={ar ? "فيلات" : "Villas"}
                fill="#F28C00"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                dataKey="commercialPrice"
                name={ar ? "تجاري وإداري" : "Commercial/Office"}
                fill="#3B82F6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Head-to-Head Comparison Panel (when 2 or more districts are selected) */}
      {comparedSubmarkets.length >= 2 && (
        <div className="rounded-2xl border-2 border-[#0F8B7A] bg-teal-50/40 dark:bg-teal-950/20 p-5 space-y-4 shadow-md">
          <div className="flex items-center justify-between border-b border-teal-200 dark:border-teal-900/50 pb-3">
            <div className="flex items-center gap-2">
              <Scale className="size-4 text-[#0F8B7A]" />
              <strong className="text-sm font-bold text-slate-900 dark:text-white">
                {ar
                  ? `مقارنة مباشرة جنباً إلى جنب (${comparedSubmarkets.length} أحياء محددة)`
                  : `Side-by-Side Head-to-Head Comparison (${comparedSubmarkets.length} Selected)`}
              </strong>
            </div>
            <button
              type="button"
              onClick={clearSelection}
              className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-1"
            >
              <X className="size-3" />
              <span>{ar ? "إلغاء المقارنة" : "Clear selection"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparedSubmarkets.map((sub) => {
              const subTier = DATA_QUALITY_TIERS[sub.dataQualityTier];
              return (
                <div
                  key={sub.id}
                  className="rounded-xl border border-teal-500/30 bg-white dark:bg-slate-900 p-4 space-y-3 shadow-xs"
                >
                  <div className="border-b border-slate-100 dark:border-white/5 pb-2">
                    <span className="text-[10px] font-bold text-[#0F8B7A] uppercase block">
                      {ar ? sub.typologyAr : sub.typologyEn}
                    </span>
                    <h5 className="font-head text-base font-bold text-slate-900 dark:text-white mt-0.5">
                      {ar ? sub.nameAr : sub.nameEn}
                    </h5>
                  </div>

                  {/* Price Metrics */}
                  <div className="space-y-1.5 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">{ar ? "متوسط المتر السكني:" : "Flat Price:"}</span>
                      <strong className="text-slate-900 dark:text-white font-extrabold">
                        {sub.avgFlatPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgFlatPriceEgpSqm)} ج.م`
                          : "-"}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">{ar ? "متوسط متر الفيلات:" : "Villa Price:"}</span>
                      <strong className="text-amber-700 dark:text-amber-400 font-extrabold">
                        {sub.avgVillaPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgVillaPriceEgpSqm)} ج.م`
                          : ar ? "غير متاح" : "N/A"}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">{ar ? "متوسط التجاري/الإداري:" : "Commercial:"}</span>
                      <strong className="text-blue-600 dark:text-blue-400 font-extrabold">
                        {sub.avgCommercialPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgCommercialPriceEgpSqm)} ج.م`
                          : "-"}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">{ar ? "العائد الإيجاري المتوقع:" : "Rental Yield:"}</span>
                      <strong className="text-[#0F8B7A] font-extrabold">
                        {sub.rentalYieldPct ? `${sub.rentalYieldPct}%` : "-"}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1 border-b border-slate-100 dark:border-white/5">
                      <span className="text-slate-500">{ar ? "نسبة الإشغال الفعلية:" : "Occupancy:"}</span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {sub.occupancyPct ? `${sub.occupancyPct}%` : "-"}
                      </strong>
                    </div>

                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">{ar ? "مؤشر النضج العمراني:" : "Maturity:"}</span>
                      <strong className="text-slate-800 dark:text-slate-200">
                        {sub.maturityScore ? `${sub.maturityScore}/100` : "-"}
                      </strong>
                    </div>
                  </div>

                  {/* Investor Action Box */}
                  {sub.investorActionAr && (
                    <div className="rounded-lg bg-teal-500/10 border border-teal-500/20 p-2.5 text-[11px] text-teal-900 dark:text-teal-200">
                      <strong className="font-bold block mb-0.5 text-teal-700 dark:text-teal-300">
                        {ar ? "التوصية الاستثمارية المباشرة:" : "Actionable Investor Guidance:"}
                      </strong>
                      <span className="leading-relaxed">
                        {ar ? sub.investorActionAr : sub.investorActionEn}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Submarkets Display: Cards View */}
      {viewMode === "cards" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedSubmarkets.map((sub) => {
            const isSelected = selectedDistrictIds.includes(sub.id);
            const subTier = DATA_QUALITY_TIERS[sub.dataQualityTier];

            return (
              <div
                key={sub.id}
                className={`rounded-2xl border transition-all duration-200 p-5 space-y-3.5 ${
                  isSelected
                    ? "border-[#0F8B7A] bg-teal-500/5 shadow-md shadow-[#0F8B7A]/10 ring-1 ring-[#0F8B7A]"
                    : "border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 hover:border-[#0F8B7A]/50 shadow-xs"
                }`}
              >
                {/* Header & Compare Checkbox */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-white/5 pb-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className={`inline-flex items-center px-1.5 py-0.2 rounded text-[10px] font-bold border ${subTier.badgeClass}`}>
                        {sub.dataQualityTier}
                      </span>
                      <span className="text-[11px] text-[#0F8B7A] font-bold">
                        {ar ? sub.typologyAr : sub.typologyEn}
                      </span>
                    </div>
                    <h5 className="font-head text-base font-extrabold text-slate-900 dark:text-white">
                      {ar ? sub.nameAr : sub.nameEn}
                    </h5>
                  </div>

                  {/* Select for comparison button */}
                  <button
                    type="button"
                    onClick={() => toggleDistrictSelection(sub.id)}
                    className={`shrink-0 rounded-lg p-1.5 text-xs font-semibold flex items-center gap-1 border transition-colors ${
                      isSelected
                        ? "bg-[#0F8B7A] text-white border-[#0F8B7A]"
                        : "bg-slate-50 dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-white/10 hover:border-[#0F8B7A]"
                    }`}
                    title={ar ? "إضافة للمقارنة المباشرة" : "Add to head-to-head comparison"}
                  >
                    {isSelected ? <CheckSquare className="size-4" /> : <Square className="size-4" />}
                    <span className="text-[10px]">{ar ? "مقارنة" : "Compare"}</span>
                  </button>
                </div>

                {/* Quantitative Price & Yield Matrix */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {ar ? "سعر الشقق:" : "Flat Price:"}
                    </span>
                    <strong className="text-xs md:text-sm font-extrabold text-slate-900 dark:text-white block mt-0.5">
                      {sub.avgFlatPriceEgpSqm
                        ? `${new Intl.NumberFormat().format(sub.avgFlatPriceEgpSqm)}`
                        : "-"}
                    </strong>
                    <span className="text-[9px] text-slate-400">ج.م/م²</span>
                  </div>

                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {ar ? "سعر الفيلات:" : "Villa Price:"}
                    </span>
                    <strong className="text-xs md:text-sm font-extrabold text-amber-700 dark:text-amber-400 block mt-0.5">
                      {sub.avgVillaPriceEgpSqm
                        ? `${new Intl.NumberFormat().format(sub.avgVillaPriceEgpSqm)}`
                        : ar ? "غير متاح" : "N/A"}
                    </strong>
                    <span className="text-[9px] text-slate-400">ج.م/م²</span>
                  </div>

                  <div className="rounded-xl bg-slate-50 dark:bg-slate-800/60 p-2 border border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block font-medium">
                      {ar ? "التجاري/الإداري:" : "Commercial:"}
                    </span>
                    <strong className="text-xs md:text-sm font-extrabold text-blue-600 dark:text-blue-400 block mt-0.5">
                      {sub.avgCommercialPriceEgpSqm
                        ? `${new Intl.NumberFormat().format(sub.avgCommercialPriceEgpSqm)}`
                        : "-"}
                    </strong>
                    <span className="text-[9px] text-slate-400">ج.م/م²</span>
                  </div>

                  <div className="rounded-xl bg-teal-50 dark:bg-teal-950/30 p-2 border border-teal-200/50 dark:border-teal-900/30">
                    <span className="text-[10px] text-teal-600 dark:text-teal-400 block font-bold">
                      {ar ? "العائد المتوقع:" : "Yield:"}
                    </span>
                    <strong className="text-xs md:text-sm font-extrabold text-[#0F8B7A] block mt-0.5">
                      {sub.rentalYieldPct ? `${sub.rentalYieldPct}%` : "-"}
                    </strong>
                    <span className="text-[9px] text-teal-600/80">سنويًا</span>
                  </div>
                </div>

                {/* Progress bars: Density, Occupancy, Maturity */}
                <div className="grid grid-cols-2 gap-3 pt-1 text-xs">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">{ar ? "نسبة الإشغال:" : "Occupancy:"}</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {sub.occupancyPct ? `${sub.occupancyPct}%` : "-"}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#0F8B7A]"
                        style={{ width: `${sub.occupancyPct ?? 0}%` }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-slate-400">{ar ? "مؤشر النضج:" : "Maturity:"}</span>
                      <span className="font-bold text-slate-800 dark:text-slate-200">
                        {sub.maturityScore ? `${sub.maturityScore}/100` : "-"}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500"
                        style={{ width: `${sub.maturityScore ?? 0}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Delivery Status */}
                {sub.deliveryStatusAr && (
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                    <CheckCircle2 className="size-3.5 text-teal-600 shrink-0" />
                    <span>{ar ? sub.deliveryStatusAr : sub.deliveryStatusEn}</span>
                  </div>
                )}

                {/* Detailed Narrative Notes */}
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {ar ? sub.notesAr : sub.notesEn}
                </p>

                {/* Pros and Challenges Bullets */}
                {(sub.prosAr || sub.challengesAr) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                    {sub.prosAr && sub.prosAr.length > 0 && (
                      <div className="rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 p-2.5 border border-emerald-200/50 dark:border-emerald-900/30">
                        <strong className="text-emerald-700 dark:text-emerald-300 font-bold block mb-1">
                          {ar ? "نقاط القوة الاستثمارية:" : "Strengths:"}
                        </strong>
                        <ul className="space-y-0.5 text-slate-600 dark:text-slate-300">
                          {(ar ? sub.prosAr : sub.prosEn || sub.prosAr).map((p, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-emerald-600 font-bold">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {sub.challengesAr && sub.challengesAr.length > 0 && (
                      <div className="rounded-lg bg-amber-50/50 dark:bg-amber-950/20 p-2.5 border border-amber-200/50 dark:border-amber-900/30">
                        <strong className="text-amber-700 dark:text-amber-300 font-bold block mb-1">
                          {ar ? "التحديات ونقاط الحذر:" : "Challenges:"}
                        </strong>
                        <ul className="space-y-0.5 text-slate-600 dark:text-slate-300">
                          {(ar ? sub.challengesAr : sub.challengesEn || sub.challengesAr).map((c, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-amber-600 font-bold">•</span>
                              <span>{c}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* Investor Action Guidance Box */}
                {sub.investorActionAr && (
                  <div className="rounded-xl border border-[#0F8B7A]/30 bg-teal-500/10 p-3 text-xs text-slate-800 dark:text-slate-200">
                    <strong className="font-bold text-[#0F8B7A] block mb-0.5">
                      {ar ? "التوصية الاستثمارية للمطور والمستثمر:" : "Actionable Investor Guidance:"}
                    </strong>
                    <span className="leading-relaxed text-[11px]">
                      {ar ? sub.investorActionAr : sub.investorActionEn}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ) : (
        /* Table View */
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
              <thead className="bg-slate-100/80 dark:bg-slate-800/70 text-[11px] font-bold uppercase text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-white/10">
                <tr>
                  <th className="py-3.5 px-4">{ar ? "الحي / المنطقة" : "District / Submarket"}</th>
                  <th className="py-3.5 px-3">{ar ? "النمط العمراني" : "Typology"}</th>
                  <th className="py-3.5 px-3">{ar ? "سعر الشقق (م²)" : "Flat Price"}</th>
                  <th className="py-3.5 px-3">{ar ? "سعر الفيلات (م²)" : "Villa Price"}</th>
                  <th className="py-3.5 px-3">{ar ? "التجاري (م²)" : "Commercial"}</th>
                  <th className="py-3.5 px-3">{ar ? "العائد الإيجاري" : "Yield"}</th>
                  <th className="py-3.5 px-3">{ar ? "نسبة الإشغال" : "Occupancy"}</th>
                  <th className="py-3.5 px-3">{ar ? "النضج" : "Maturity"}</th>
                  <th className="py-3.5 px-4">{ar ? "التوصية الاستثمارية" : "Investor Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-medium">
                {sortedSubmarkets.map((sub) => {
                  const subTier = DATA_QUALITY_TIERS[sub.dataQualityTier];
                  return (
                    <tr key={sub.id} className="hover:bg-teal-500/5 transition-colors">
                      <td className="py-3.5 px-4">
                        <strong className="text-sm font-bold text-slate-900 dark:text-white block">
                          {ar ? sub.nameAr : sub.nameEn}
                        </strong>
                        <span className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold border mt-0.5 ${subTier.badgeClass}`}>
                          {sub.dataQualityTier}
                        </span>
                      </td>

                      <td className="py-3.5 px-3 text-[11px] text-slate-500">
                        {ar ? sub.typologyAr : sub.typologyEn}
                      </td>

                      <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white">
                        {sub.avgFlatPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgFlatPriceEgpSqm)} ج.م`
                          : "-"}
                      </td>

                      <td className="py-3.5 px-3 font-bold text-amber-700 dark:text-amber-400">
                        {sub.avgVillaPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgVillaPriceEgpSqm)} ج.م`
                          : ar ? "غير متاح" : "N/A"}
                      </td>

                      <td className="py-3.5 px-3 font-bold text-blue-600 dark:text-blue-400">
                        {sub.avgCommercialPriceEgpSqm
                          ? `${new Intl.NumberFormat().format(sub.avgCommercialPriceEgpSqm)} ج.م`
                          : "-"}
                      </td>

                      <td className="py-3.5 px-3 font-extrabold text-[#0F8B7A]">
                        {sub.rentalYieldPct ? `${sub.rentalYieldPct}%` : "-"}
                      </td>

                      <td className="py-3.5 px-3 font-bold text-slate-800 dark:text-slate-200">
                        {sub.occupancyPct ? `${sub.occupancyPct}%` : "-"}
                      </td>

                      <td className="py-3.5 px-3">
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                          {sub.maturityScore ? `${sub.maturityScore}/100` : "-"}
                        </span>
                      </td>

                      <td className="py-3.5 px-4 text-xs text-slate-600 dark:text-slate-300 max-w-xs">
                        <span className="line-clamp-2" title={ar ? sub.investorActionAr : sub.investorActionEn}>
                          {ar ? sub.investorActionAr : sub.investorActionEn}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
