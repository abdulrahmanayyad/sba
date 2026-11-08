import React from "react";
import { 
  Globe, 
  Layers, 
  Calendar 
} from "lucide-react";
import { 
  COUNTRY_PROFILES 
} from "@/lib/trade-data";

interface TradeIntelligenceDashboardProps {
  ar?: boolean;
}

export function TradeIntelligenceDashboard({ ar = true }: TradeIntelligenceDashboardProps) {
  // Top 6 countries by inquiries
  const topCountries = COUNTRY_PROFILES.slice(0, 6);

  // Category distribution
  const categoryStats = [
    { nameAr: "التمور ومنتجاتها", nameEn: "Dates & Products", count: 66, percentage: 37, color: "bg-amber-500" },
    { nameAr: "التوابل والبهارات", nameEn: "Spices & Seasonings", count: 38, percentage: 21, color: "bg-emerald-500" },
    { nameAr: "الخضروات الطازجة", nameEn: "Fresh Vegetables", count: 34, percentage: 19, color: "bg-teal-500" },
    { nameAr: "البذور والحبوب والمكسرات", nameEn: "Seeds, Grains & Nuts", count: 26, percentage: 15, color: "bg-brand-orange" },
    { nameAr: "الأعشاب والمستخلصات", nameEn: "Herbs & Extracts", count: 22, percentage: 12, color: "bg-indigo-500" },
    { nameAr: "الفواكه والسلع المتنوعة", nameEn: "Fruits & Commodities", count: 19, percentage: 11, color: "bg-rose-500" },
  ];

  // Monthly trends (2025)
  const monthlyTrends = [
    { monthAr: "يناير", monthEn: "Jan", count: 22 },
    { monthAr: "فبراير", monthEn: "Feb", count: 18 },
    { monthAr: "مارس", monthEn: "Mar", count: 25 },
    { monthAr: "أبريل", monthEn: "Apr", count: 34 },
    { monthAr: "مايو", monthEn: "May", count: 20 },
    { monthAr: "يونيو", monthEn: "Jun", count: 28 },
    { monthAr: "يوليو", monthEn: "Jul", count: 16 },
    { monthAr: "أغسطس", monthEn: "Aug", count: 12 },
    { monthAr: "سبتمبر", monthEn: "Sep", count: 4 },
    { monthAr: "أكتوبر", monthEn: "Oct", count: 0 },
  ];

  const maxMonthly = Math.max(...monthlyTrends.map((m) => m.count));

  return (
    <div id="trade-intelligence" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 4 Title & Description Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الرابع: ذكاء السوق والكميات" : "Section 4: Market Intelligence"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "ذكاء السوق واتجاهات الطلب التجاري" : "Market Demand & Trade Intelligence"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed max-w-4xl">
          {ar
            ? "لوحة بيانات تحليلية للمسار الشهري وتوزيع طلبات الشراء للأسواق المستوردة لسجلات عام 2025."
            : "Analytics dashboard covering monthly trends, top markets, and category breakdown for 2025 purchase requests."}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Analytics & Intelligence Content */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Top Countries by Inquiries */}
          <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Globe className="size-5 text-brand-orange" />
                <h4 className="text-base font-bold text-foreground">
                  {ar ? "أكثر الأسواق طلبًا (2025)" : "Top Markets by Demand (2025)"}
                </h4>
              </div>
              <span className="text-xs text-muted-foreground">{ar ? "حسب عدد السجلات" : "By Record Count"}</span>
            </div>

            <div className="space-y-3.5">
              {topCountries.map((c) => {
                const maxInq = topCountries[0].totalInquiries;
                const pct = Math.round((c.totalInquiries / maxInq) * 100);

                return (
                  <div key={c.code} className="space-y-1">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className="flex items-center gap-2 text-foreground">
                        <img
                          src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png 2x`}
                          alt={ar ? c.nameAr : c.nameEn}
                          className="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-white/20 shrink-0"
                          loading="lazy"
                        />
                        <span>{ar ? c.nameAr : c.nameEn}</span>
                      </span>
                      <span className="font-mono text-brand-orange">
                        {c.totalInquiries} {ar ? "طلبات شراء" : "purchase requests"}
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Layers className="size-5 text-emerald-400" />
                <h4 className="text-base font-bold text-foreground">
                  {ar ? "توزيع طلبات الشراء حسب فئات المنتجات" : "Purchase Requests by Product Category"}
                </h4>
              </div>
              <span className="text-xs text-muted-foreground">179 {ar ? "طلب شراء إجمالي" : "Total Requests"}</span>
            </div>

            <div className="space-y-3.5">
              {categoryStats.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-foreground">{ar ? cat.nameAr : cat.nameEn}</span>
                    <span className="font-mono text-foreground/80">{cat.count} ({cat.percentage}%)</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${cat.color} transition-all duration-500`}
                      style={{ width: `${cat.percentage * 2}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Trend Bar Chart */}
          <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-12">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-brand-orange" />
                <h4 className="text-base font-bold text-foreground">
                  {ar ? "المسار الزمني الشهري لتدفق طلبات الشراء للمشترين (2025)" : "Monthly Purchase Requests Timeline (2025)"}
                </h4>
              </div>
              <span className="rounded-md bg-emerald-400 px-2.5 py-1 text-xs font-bold text-black border border-emerald-500/30 shadow-xs">
                {ar ? "ذروة الطلبات: أبريل 2025" : "Peak Demand: April 2025"}
              </span>
            </div>

            <div className="grid grid-cols-10 items-end gap-2 h-44 pt-6 px-2">
              {monthlyTrends.map((m, idx) => {
                const heightPct = Math.round((m.count / maxMonthly) * 100);
                const isPeak = m.count === maxMonthly;

                return (
                  <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                    <span className="text-[10px] font-mono text-muted-foreground group-hover:text-brand-orange">
                      {m.count}
                    </span>
                    <div className="w-full max-w-[36px] bg-white/10 rounded-t-xl overflow-hidden h-full flex items-end">
                      <div
                        className={`w-full rounded-t-xl transition-all duration-500 ${
                          isPeak
                            ? "bg-gradient-to-t from-brand-orange to-amber-400 shadow-lg shadow-brand-orange/30"
                            : "bg-gradient-to-t from-emerald-600 to-teal-400 group-hover:from-emerald-500 group-hover:to-teal-300"
                        }`}
                        style={{ height: `${heightPct}%` }}
                      />
                    </div>
                    <span className="text-[11px] font-bold text-foreground">
                      {ar ? m.monthAr : m.monthEn}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
