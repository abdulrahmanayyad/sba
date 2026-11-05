import React, { useState } from "react";
import { 
  BarChart3, 
  TrendingUp, 
  Calendar, 
  Package, 
  Globe, 
  Clock, 
  ShieldAlert, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2,
  Sparkles
} from "lucide-react";
import { 
  DOCUMENTED_BUYER_REQUIREMENTS, 
  COUNTRY_PROFILES, 
  TRADE_STATS, 
  PRODUCT_DEMAND_PORTFOLIO 
} from "@/lib/trade-data";

interface TradeIntelligenceDashboardProps {
  ar?: boolean;
}

export function TradeIntelligenceDashboard({ ar = true }: TradeIntelligenceDashboardProps) {
  const [activeTab, setActiveTab] = useState<"analytics" | "requirements">("requirements");

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
    { monthAr: "سبتمبر", monthEn: "Sep", count: 14 },
    { monthAr: "أكتوبر", monthEn: "Oct", count: 10 },
  ];
  const maxMonthly = Math.max(...monthlyTrends.map((m) => m.count));

  return (
    <div className="w-full space-y-8">
      {/* Tab Switcher */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-white/20 bg-background/70 p-1.5 backdrop-blur-xl shadow-lg">
          <button
            type="button"
            onClick={() => setActiveTab("requirements")}
            className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
              activeTab === "requirements"
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {ar ? "متطلبات المشترين الموثقة والكميات (12 طلب)" : "Documented Buyer Requirements (12 Orders)"}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("analytics")}
            className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
              activeTab === "analytics"
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            {ar ? "تحليلات واتجاهات الطلب التجاري (2025)" : "Trade Demand Analytics (2025)"}
          </button>
        </div>
      </div>

      {activeTab === "requirements" ? (
        /* Section 4 Part B: Documented Buyer Requirements */
        <div className="space-y-6">
          {/* Header Banner */}
          <div className="rounded-3xl border border-white/15 bg-gradient-to-r from-background/80 via-background/60 to-amber-950/20 p-6 backdrop-blur-2xl">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <ShieldAlert className="size-4" />
                  {ar ? "بيانات كميات رسمية مسجلة" : "Explicitly Documented Quantities"}
                </span>
                <h3 className="text-2xl font-black text-foreground mt-1">
                  {ar ? "متطلبات المشترين والكميات الموثقة رسمياً" : "Documented Buyer Requirements & Quantities"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
                  {ar
                    ? "قائمة بالطلبات التي تضمنت تحديداً كمياً دقيقاً في سجلات الاستفسارات لعام 2025، سواء كعقود توريد أسبوعية/شهرية دورية أو طلبيات فورية ضخمة."
                    : "Explicit quantities documented in the 2025 international buyer inquiries dataset, covering recurring weekly/monthly supply contracts and large bulk shipments."}
                </p>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-amber-300">
                <TrendingUp className="size-5 shrink-0" />
                <span className="text-xs font-bold">
                  {ar ? "12 طلباً بـ كميات محددة صراحة" : "12 Explicitly Documented Orders"}
                </span>
              </div>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DOCUMENTED_BUYER_REQUIREMENTS.map((req) => (
              <div
                key={req.id}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/15 bg-background/60 p-5 backdrop-blur-xl transition-all duration-300 hover:border-brand-orange/50 hover:bg-background/80 hover:shadow-2xl"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {req.id}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-foreground">
                      <span>{req.countryFlag}</span>
                      <span>{ar ? req.countryAr : req.countryEn}</span>
                    </span>
                  </div>

                  {/* Product Title */}
                  <div className="mt-3">
                    <h4 className="text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                      {ar ? req.productAr : req.productEn}
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      {ar ? req.buyerTypeAr : req.buyerTypeEn}
                    </p>
                  </div>

                  {/* Quantity Highlight Box */}
                  <div className="mt-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3.5">
                    <span className="text-[11px] font-semibold text-emerald-400 block mb-0.5">
                      {ar ? "الكمية المطلوبة الموثقة:" : "Documented Quantity:"}
                    </span>
                    <p className="text-lg font-black text-emerald-300">
                      {ar ? req.quantity : req.quantityEn}
                    </p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-emerald-200/80">
                      <Clock className="size-3" />
                      <span>{ar ? req.frequencyAr : req.frequencyEn}</span>
                    </div>
                  </div>

                  {/* Terms & Date */}
                  <div className="mt-3.5 space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span>{ar ? "شروط التسليم والميناء:" : "Terms & Port:"}</span>
                      <span className="font-semibold text-foreground">{req.terms}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>{ar ? "تاريخ تسجيل الاستفسار:" : "Inquiry Date:"}</span>
                      <span className="font-mono">{req.inquiryDate}</span>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-amber-500/15 px-2.5 py-0.5 text-[11px] font-bold text-amber-400 border border-amber-500/20">
                    {ar ? "طلب استفسار مسجل" : "Recorded Inquiry"}
                  </span>
                  <a
                    href="#trade-opportunities"
                    className="text-brand-orange font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>{ar ? "تقديم عرض" : "Quote"}</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Legal Compliance Disclaimer Banner */}
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs text-amber-200 leading-relaxed shadow-lg">
            <div className="flex items-start gap-3">
              <ShieldAlert className="size-5 shrink-0 text-amber-400 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-300 block mb-1">
                  {ar ? "إخلاء مسؤولية توثيقي وقانوني معتمد:" : "Mandatory Documentary Disclaimer:"}
                </strong>
                <p>
                  {ar ? TRADE_STATS.legalDisclaimerAr : TRADE_STATS.legalDisclaimerEn}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Section 4 Part A: Analytics & Intelligence */
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Top Countries by Inquiries */}
            <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-brand-orange" />
                  <h4 className="text-base font-bold text-foreground">
                    {ar ? "أكثر الأسواق طلباً واستفساراً (2025)" : "Top Markets by Inquiries (2025)"}
                  </h4>
                </div>
                <span className="text-xs text-muted-foreground">{ar ? "حسب عدد السجلات" : "By Record Count"}</span>
              </div>

              <div className="space-y-3.5">
                {topCountries.map((c, idx) => {
                  const maxInq = topCountries[0].totalInquiries;
                  const pct = Math.round((c.totalInquiries / maxInq) * 100);

                  return (
                    <div key={c.code} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-2 text-foreground">
                          <span className="text-base">{c.flag}</span>
                          <span>{ar ? c.nameAr : c.nameEn}</span>
                        </span>
                        <span className="font-mono text-brand-orange">
                          {c.totalInquiries} {ar ? "استفسار" : "inquiries"}
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
                    {ar ? "توزيع الاستفسارات حسب فئات المنتجات" : "Inquiries by Product Category"}
                  </h4>
                </div>
                <span className="text-xs text-muted-foreground">179 {ar ? "استفسار إجمالي" : "Total"}</span>
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
                    {ar ? "المسار الزمني الشهري لتدفق استفسارات المشترين (2025)" : "Monthly Inquiries Timeline (2025)"}
                  </h4>
                </div>
                <span className="text-xs font-bold text-emerald-400">
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
      )}
    </div>
  );
}

