import React, { useState, useMemo } from "react";
import {
  Building2,
  TrendingUp,
  BarChart3,
  Percent,
  CheckCircle2,
  Compass,
  ArrowUpDown,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  AlertTriangle,
  Layers,
  Sparkles,
  Search,
  Filter,
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
  EAST_CAIRO_CITIES,
  DATA_QUALITY_TIERS,
  CONFIDENCE_TAGS,
  type EastCairoCityProfile,
} from "@/lib/studies/east-cairo-master-study";

interface InterCityComparatorProps {
  ar: boolean;
  onSelectCity: (cityId: string) => void;
}

type SortField =
  | "avgFlatPriceEgpSqm"
  | "avgVillaPriceEgpSqm"
  | "avgCommercialPriceEgpSqm"
  | "expectedRentalYieldPct"
  | "currentEstimatedOccupancyPct"
  | "overallMaturityScore"
  | "planningAreaFeddans"
  | "urbanMassFeddans"
  | "investmentRank";

export function InterCityComparator({ ar, onSelectCity }: InterCityComparatorProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortField, setSortField] = useState<SortField>("investmentRank");
  const [sortAsc, setSortAsc] = useState<boolean>(true);
  const [activeChartMetric, setActiveChartMetric] = useState<"prices" | "yield_maturity">("prices");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", labelAr: "كافة المدن (12 مدينة)", labelEn: "All Cities (12)" },
    { id: "established", labelAr: "مدن قائمة وناضجة", labelEn: "Established Cities" },
    { id: "extension", labelAr: "امتدادات عمرانية", labelEn: "Urban Extensions" },
    { id: "special_authority", labelAr: "سلطة امتياز خاصة", labelEn: "Special Authority" },
    { id: "private_community", labelAr: "مجتمعات خاصة مستقلة", labelEn: "Private Communities" },
    { id: "regional_benchmark", labelAr: "مقارنة إقليمية", labelEn: "Regional Benchmark" },
  ];

  const filteredAndSortedCities = useMemo(() => {
    return EAST_CAIRO_CITIES.filter((city) => {
      const matchesCategory =
        selectedCategory === "all" || city.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        city.nameAr.toLowerCase().includes(query) ||
        city.nameEn.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      let aVal = a[sortField] ?? 0;
      let bVal = b[sortField] ?? 0;
      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortAsc ? aVal - bVal : bVal - aVal;
      }
      return 0;
    });
  }, [selectedCategory, sortField, sortAsc, searchQuery]);

  // Chart dataset
  const chartData = useMemo(() => {
    return filteredAndSortedCities.map((c) => ({
      name: ar ? c.nameAr.split(" (")[0] : c.nameEn.split(" (")[0],
      cityId: c.id,
      flatPrice: c.avgFlatPriceEgpSqm ?? 0,
      villaPrice: c.avgVillaPriceEgpSqm ?? 0,
      commercialPrice: c.avgCommercialPriceEgpSqm ?? 0,
      yieldPct: c.expectedRentalYieldPct ?? 0,
      maturity: c.overallMaturityScore ?? 0,
      occupancy: c.currentEstimatedOccupancyPct ?? 0,
    }));
  }, [filteredAndSortedCities, ar]);

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(field === "investmentRank");
    }
  };

  const getCategoryBadge = (cat: EastCairoCityProfile["category"]) => {
    switch (cat) {
      case "established":
        return {
          labelAr: "مدينة قائمة",
          labelEn: "Established",
          badgeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20",
        };
      case "extension":
        return {
          labelAr: "امتداد تنموي",
          labelEn: "Extension",
          badgeClass: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
        };
      case "special_authority":
        return {
          labelAr: "امتياز خاص",
          labelEn: "Special Authority",
          badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
        };
      case "private_community":
        return {
          labelAr: "مجتمع خاص",
          labelEn: "Private Master",
          badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        };
      case "regional_benchmark":
        return {
          labelAr: "مقارنة إقليمية",
          labelEn: "Regional Benchmark",
          badgeClass: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Executive Key Takeaways Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="rounded-2xl border border-teal-500/30 bg-teal-500/5 dark:bg-teal-950/20 p-4">
          <span className="text-[11px] font-bold text-teal-700 dark:text-teal-300 uppercase block">
            {ar ? "أعلى متوسط سعر للمتر السكني" : "Highest Prime Res Price"}
          </span>
          <strong className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
            {ar ? "القاهرة الجديدة" : "New Cairo"}
          </strong>
          <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold block mt-0.5">
            49,500 {ar ? "ج.م/م² (شقق) | 85k (فيلات)" : "EGP/sqm (Flats) | 85k (Villas)"}
          </span>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 p-4">
          <span className="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase block">
            {ar ? "أعلى عائد إيجاري متوقع" : "Highest Expected Rental Yield"}
          </span>
          <strong className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
            {ar ? "العاصمة الإدارية / بدر" : "New Capital / Badr"}
          </strong>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold block mt-0.5">
            9.8% – 10.2% {ar ? "سنويًا (مكاتب وسكن طلاب)" : "p.a. (Offices & Students)"}
          </span>
        </div>

        <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 dark:bg-blue-950/20 p-4">
          <span className="text-[11px] font-bold text-blue-700 dark:text-blue-300 uppercase block">
            {ar ? "أعلى مؤشر نضج وإشغال" : "Highest Maturity & Occupancy"}
          </span>
          <strong className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
            {ar ? "الرحاب / مدينتي" : "Al Rehab / Madinaty"}
          </strong>
          <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold block mt-0.5">
            94% – 98% {ar ? "نضج عمراني واستقرار خدمات" : "Urban maturity & stability"}
          </span>
        </div>

        <div className="rounded-2xl border border-purple-500/30 bg-purple-500/5 dark:bg-purple-950/20 p-4">
          <span className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase block">
            {ar ? "أعلى فرص نمو رأسمالي للأراضي" : "Highest Land Upside Potential"}
          </span>
          <strong className="text-base md:text-lg font-extrabold text-slate-900 dark:text-white block mt-1">
            {ar ? "مستقبل سيتي / العبور الجديدة" : "Mostakbal City / New Obour"}
          </strong>
          <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold block mt-0.5">
            +30% – +45% {ar ? "مع اكتمال الربط بالأوسطي" : "with Middle Ring link"}
          </span>
        </div>
      </div>

      {/* Filter and Switcher Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? "bg-[#0F8B7A] text-white shadow-sm shadow-[#0F8B7A]/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {ar ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Search & Chart Metric Toggle */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="size-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "بحث عن مدينة..." : "Filter city..."}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/60 px-3 pr-8 py-1.5 text-xs text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-1 focus:ring-[#0F8B7A]"
            />
          </div>

          <div className="inline-flex rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 p-1">
            <button
              type="button"
              onClick={() => setActiveChartMetric("prices")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                activeChartMetric === "prices"
                  ? "bg-white dark:bg-slate-900 text-[#0F8B7A] shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {ar ? "مقارنة الأسعار" : "Prices"}
            </button>
            <button
              type="button"
              onClick={() => setActiveChartMetric("yield_maturity")}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-colors ${
                activeChartMetric === "yield_maturity"
                  ? "bg-white dark:bg-slate-900 text-[#0F8B7A] shadow-xs"
                  : "text-slate-500 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {ar ? "العائد والنضج" : "Yield & Maturity"}
            </button>
          </div>
        </div>
      </div>

      {/* Visual Inter-City Benchmark Bar Chart */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border border-teal-500/30 bg-teal-500/10 text-teal-700 dark:text-teal-300">
                {ar ? "رصد مقارن — 12 مدينة" : "12-City Comparative Matrix"}
              </span>
              <span className="text-xs text-slate-500">
                {ar ? "انقر على أي مدينة للانتقال لدراستها ومقارنة أحيائها" : "Click any bar or row to view dedicated city study"}
              </span>
            </div>
            <h3 className="font-head text-lg font-bold text-slate-900 dark:text-white">
              {activeChartMetric === "prices"
                ? ar
                  ? "مقارنة متوسطات أسعار المتر المربع (شقق وفيلات وتجاري) عبر مدن شرق القاهرة"
                  : "Price Benchmarks (Flats, Villas & Commercial/Office) across East Cairo"
                : ar
                  ? "مقارنة العائد الإيجاري السنوي المتوقع مقابل نسبة النضج العمراني"
                  : "Expected Rental Yield (%) vs Urban Maturity Score across East Cairo"}
            </h3>
          </div>
        </div>

        <div className="mt-6 h-80 w-full" dir="ltr">
          <ResponsiveContainer width="100%" height="100%">
            {activeChartMetric === "prices" ? (
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 10, bottom: 40 }}
                onClick={(e) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    const cId = e.activePayload[0].payload.cityId;
                    if (cId) onSelectCity(cId);
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#64748b" }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  tick={{ fontSize: 11, fill: "#64748b" }}
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
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
                <Bar
                  dataKey="flatPrice"
                  name={ar ? "شقق سكنية" : "Apartments"}
                  fill="#0F8B7A"
                  radius={[6, 6, 0, 0]}
                  cursor="pointer"
                />
                <Bar
                  dataKey="villaPrice"
                  name={ar ? "فيلات" : "Villas"}
                  fill="#F28C00"
                  radius={[6, 6, 0, 0]}
                  cursor="pointer"
                />
                <Bar
                  dataKey="commercialPrice"
                  name={ar ? "تجاري وإداري" : "Commercial/Office"}
                  fill="#3B82F6"
                  radius={[6, 6, 0, 0]}
                  cursor="pointer"
                />
              </BarChart>
            ) : (
              <BarChart
                data={chartData}
                margin={{ top: 10, right: 30, left: 10, bottom: 40 }}
                onClick={(e) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    const cId = e.activePayload[0].payload.cityId;
                    if (cId) onSelectCity(cId);
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fill: "#64748b" }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                  height={60}
                />
                <YAxis
                  yAxisId="left"
                  tick={{ fontSize: 11, fill: "#0F8B7A" }}
                  unit="%"
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  tick={{ fontSize: 11, fill: "#3B82F6" }}
                  domain={[0, 100]}
                  unit="/100"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    borderColor: "#334155",
                    borderRadius: "12px",
                    color: "#f8fafc",
                    fontSize: "12px",
                  }}
                />
                <Legend wrapperStyle={{ fontSize: "12px", paddingTop: "10px" }} />
                <Bar
                  yAxisId="left"
                  dataKey="yieldPct"
                  name={ar ? "العائد الإيجاري السنوي (%)" : "Rental Yield (%)"}
                  fill="#0F8B7A"
                  radius={[6, 6, 0, 0]}
                  cursor="pointer"
                />
                <Bar
                  yAxisId="right"
                  dataKey="maturity"
                  name={ar ? "مؤشر النضج العمراني (/100)" : "Maturity Score (/100)"}
                  fill="#3B82F6"
                  radius={[6, 6, 0, 0]}
                  cursor="pointer"
                />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>

      {/* Comprehensive Comparative Table */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
        <div className="p-5 border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h4 className="font-head text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="size-4 text-[#0F8B7A]" />
              <span>{ar ? "جدول المقارنة المؤسسية الشاملة لمدن شرق القاهرة" : "Comprehensive East Cairo Inter-City Matrix"}</span>
            </h4>
            <span className="text-xs text-slate-500">
              {ar
                ? "يمكنك فرز الجدول بالنقر على عناوين الأعمدة، أو النقر على 'فتح الدراسة المستقلة' لأي مدينة"
                : "Click any column header to sort; click 'Open City Study' to deep-dive into districts"}
            </span>
          </div>
          <span className="text-xs font-bold text-[#0F8B7A] bg-[#0F8B7A]/10 px-3 py-1.5 rounded-xl border border-[#0F8B7A]/30">
            {filteredAndSortedCities.length} {ar ? "مدن معروضة" : "Cities Displayed"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-100/80 dark:bg-slate-800/70 text-[11px] font-bold uppercase text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-white/10">
              <tr>
                <th className="py-3.5 px-4 cursor-pointer" onClick={() => handleSort("investmentRank")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "المدينة والتصنيف" : "City & Typology"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("avgFlatPriceEgpSqm")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "سعر الشقق (م²)" : "Flats (EGP/m²)"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("avgVillaPriceEgpSqm")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "سعر الفيلات (م²)" : "Villas (EGP/m²)"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("avgCommercialPriceEgpSqm")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "سعر التجاري/الإداري" : "Commercial (m²)"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("expectedRentalYieldPct")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "العائد المتوقع" : "Rental Yield"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("currentEstimatedOccupancyPct")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "نسبة الإشغال" : "Occupancy"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("overallMaturityScore")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "مؤشر النضج" : "Maturity"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-3 cursor-pointer" onClick={() => handleSort("planningAreaFeddans")}>
                  <div className="flex items-center gap-1">
                    <span>{ar ? "المساحة الكلية" : "Total Acreage"}</span>
                    <ArrowUpDown className="size-3 text-slate-400" />
                  </div>
                </th>
                <th className="py-3.5 px-4 text-center">
                  <span>{ar ? "إجراء الدراسة المستقلة" : "Dedicated Study"}</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5 font-medium">
              {filteredAndSortedCities.map((city) => {
                const tier = DATA_QUALITY_TIERS[city.dataQualityTier];
                const catBadge = getCategoryBadge(city.category);

                return (
                  <tr
                    key={city.id}
                    className="hover:bg-teal-500/5 transition-colors group cursor-pointer"
                    onClick={() => onSelectCity(city.id)}
                  >
                    {/* City Name & Category */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-2.5">
                        <span className="size-2 rounded-full bg-[#0F8B7A] shrink-0" />
                        <div>
                          <strong className="text-sm font-bold text-slate-900 dark:text-white block group-hover:text-[#0F8B7A] transition-colors">
                            {ar ? city.nameAr : city.nameEn}
                          </strong>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <span className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold border ${catBadge.badgeClass}`}>
                              {ar ? catBadge.labelAr : catBadge.labelEn}
                            </span>
                            <span className={`inline-block px-1.5 py-0.2 rounded text-[10px] font-bold border ${tier.badgeClass}`}>
                              {city.dataQualityTier}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* Flat Price */}
                    <td className="py-3.5 px-3 font-bold text-slate-900 dark:text-white">
                      {city.avgFlatPriceEgpSqm ? (
                        <span>{new Intl.NumberFormat().format(city.avgFlatPriceEgpSqm)} <span className="text-[10px] text-slate-400 font-normal">ج.م</span></span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>

                    {/* Villa Price */}
                    <td className="py-3.5 px-3 font-bold text-amber-700 dark:text-amber-400">
                      {city.avgVillaPriceEgpSqm ? (
                        <span>{new Intl.NumberFormat().format(city.avgVillaPriceEgpSqm)} <span className="text-[10px] text-slate-400 font-normal">ج.م</span></span>
                      ) : (
                        <span className="text-slate-400">{ar ? "غير مخصص" : "N/A"}</span>
                      )}
                    </td>

                    {/* Commercial Price */}
                    <td className="py-3.5 px-3 font-bold text-blue-600 dark:text-blue-400">
                      {city.avgCommercialPriceEgpSqm ? (
                        <span>{new Intl.NumberFormat().format(city.avgCommercialPriceEgpSqm)} <span className="text-[10px] text-slate-400 font-normal">ج.م</span></span>
                      ) : (
                        <span className="text-slate-400">-</span>
                      )}
                    </td>

                    {/* Rental Yield */}
                    <td className="py-3.5 px-3 font-extrabold text-[#0F8B7A]">
                      {city.expectedRentalYieldPct ? `${city.expectedRentalYieldPct}%` : "-"}
                    </td>

                    {/* Occupancy */}
                    <td className="py-3.5 px-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-12 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#0F8B7A]"
                            style={{ width: `${city.currentEstimatedOccupancyPct ?? 0}%` }}
                          />
                        </div>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                          {city.currentEstimatedOccupancyPct ?? 0}%
                        </span>
                      </div>
                    </td>

                    {/* Maturity Score */}
                    <td className="py-3.5 px-3">
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {city.overallMaturityScore ?? 0}/100
                      </span>
                    </td>

                    {/* Acreage */}
                    <td className="py-3.5 px-3 text-[11px] text-slate-500">
                      {city.planningAreaDisplayAr ? (
                        <span className="truncate block max-w-[130px]" title={ar ? city.planningAreaDisplayAr : city.planningAreaDisplayEn}>
                          {ar ? city.planningAreaDisplayAr.split(" (")[0] : city.planningAreaDisplayEn.split(" (")[0]}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>

                    {/* Action Button */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectCity(city.id);
                        }}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[#0F8B7A]/30 bg-[#0F8B7A]/10 px-3 py-1.5 text-xs font-bold text-[#0F8B7A] hover:bg-[#0F8B7A] hover:text-white transition-all shadow-xs"
                      >
                        <span>{ar ? "الدراسة ومقارنة الأحياء" : "Study & Districts"}</span>
                        <ChevronRight className="size-3" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
