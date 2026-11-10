import React, { useState, useMemo } from "react";
import { 
  Globe, 
  Layers, 
  Calendar,
  CheckCircle2,
  AlertCircle,
  FileText,
  Building2,
  ShieldAlert,
  Sparkles
} from "lucide-react";
import { 
  ALL_INQUIRIES,
  TRADE_STATS,
  VERIFIED_TRADE_EVENTS,
  TRADE_EVENTS_2023_ANALYSIS
} from "@/lib/trade-data";
import { cn } from "@/lib/utils";

interface TradeIntelligenceDashboardProps {
  ar?: boolean;
}

export function TradeIntelligenceDashboard({ ar = true }: TradeIntelligenceDashboardProps) {
  const [selectedYear, setSelectedYear] = useState<"all" | "2026" | "2025" | "2024" | "2023">("all");

  const yearTabs = [
    { id: "all" as const, labelAr: "كافة السنوات (2023–2026)", labelEn: "All Period (2023–2026)", count: TRADE_STATS.totalRecords },
    { id: "2025" as const, labelAr: "عام 2025 (الموثق والمُثرى)", labelEn: "2025 (Curated & Enriched)", count: TRADE_STATS.records2025 },
    { id: "2026" as const, labelAr: "عام 2026", labelEn: "Year 2026", count: TRADE_STATS.records2026 },
    { id: "2024" as const, labelAr: "عام 2024", labelEn: "Year 2024", count: TRADE_STATS.records2024 },
    { id: "2023" as const, labelAr: "عام 2023 (معارض وفعاليات)", labelEn: "2023 (Trade Events)", count: 0 },
  ];

  // Inquiries filtered by selected year
  const activeInquiries = useMemo(() => {
    if (selectedYear === "all") return ALL_INQUIRIES;
    return ALL_INQUIRIES.filter((r) => {
      const yr = r.year ? String(r.year) : (r.inquiryDate || "").slice(0, 4);
      return yr === selectedYear;
    });
  }, [selectedYear]);

  // Top 6 countries by inquiries for current filter
  const topCountries = useMemo(() => {
    const counts: Record<string, { countryAr: string; countryEn: string; countryCode: string; count: number }> = {};
    activeInquiries.forEach((inq) => {
      if (!counts[inq.countryAr]) {
        counts[inq.countryAr] = {
          countryAr: inq.countryAr,
          countryEn: inq.countryEn,
          countryCode: inq.countryCode,
          count: 0,
        };
      }
      counts[inq.countryAr].count += 1;
    });
    return Object.values(counts)
      .sort((a, b) => b.count - a.count)
      .slice(0, 6);
  }, [activeInquiries]);

  // Category distribution for current filter
  const categoryStats = useMemo(() => {
    const counts: Record<string, { nameAr: string; nameEn: string; count: number }> = {};
    activeInquiries.forEach((inq) => {
      const key = inq.category || "commodities";
      if (!counts[key]) {
        counts[key] = {
          nameAr: inq.categoryNameAr || "سلع غذائية",
          nameEn: inq.categoryNameEn || "Food Commodities",
          count: 0,
        };
      }
      counts[key].count += 1;
    });

    const total = activeInquiries.length || 1;
    return Object.values(counts)
      .sort((a, b) => b.count - a.count)
      .map((c) => ({
        ...c,
        percentage: Math.round((c.count / total) * 100),
        color: "bg-brand-green",
      }));
  }, [activeInquiries]);

  // Timeline trends
  const timelineData = useMemo(() => {
    if (selectedYear === "all") {
      const years = [
        { labelAr: "2023 (معارض)", labelEn: "2023 (Events)", count: 0 },
        { labelAr: "2024", labelEn: "2024", count: TRADE_STATS.records2024 },
        { labelAr: "2025 (الذروة)", labelEn: "2025 (Peak)", count: TRADE_STATS.records2025 },
        { labelAr: "2026", labelEn: "2026", count: TRADE_STATS.records2026 },
      ];
      const max = Math.max(...years.map((y) => y.count));
      return { items: years, max, isYearly: true };
    }

    // Monthly breakdown for selected year
    const months = [
      { num: "01", ar: "يناير", en: "Jan", count: 0 },
      { num: "02", ar: "فبراير", en: "Feb", count: 0 },
      { num: "03", ar: "مارس", en: "Mar", count: 0 },
      { num: "04", ar: "أبريل", en: "Apr", count: 0 },
      { num: "05", ar: "مايو", en: "May", count: 0 },
      { num: "06", ar: "يونيو", en: "Jun", count: 0 },
      { num: "07", ar: "يوليو", en: "Jul", count: 0 },
      { num: "08", ar: "أغسطس", en: "Aug", count: 0 },
      { num: "09", ar: "سبتمبر", en: "Sep", count: 0 },
      { num: "10", ar: "أكتوبر", en: "Oct", count: 0 },
      { num: "11", ar: "نوفمبر", en: "Nov", count: 0 },
      { num: "12", ar: "ديسمبر", en: "Dec", count: 0 },
    ];

    activeInquiries.forEach((r) => {
      if (r.inquiryDate && r.inquiryDate.length >= 7) {
        const m = r.inquiryDate.slice(5, 7);
        const target = months.find((x) => x.num === m);
        if (target) target.count += 1;
      }
    });

    const max = Math.max(...months.map((m) => m.count), 1);
    return {
      items: months.map((m) => ({ labelAr: m.ar, labelEn: m.en, count: m.count })),
      max,
      isYearly: false,
    };
  }, [selectedYear, activeInquiries]);

  return (
    <div id="trade-intelligence" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 5 Title & Description Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "القسم الخامس: اتجاه السوق التجاري" : "Section 5: Commercial Market Trends"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "تحليل اتجاه الطلب التجاري والأسواق" : "Commercial Demand Trends & Market Intelligence"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-2.5 leading-relaxed max-w-4xl">
              {ar
                ? "لوحة بيانات تفاعلية ومحدثة تغطي طلبات الشراء للمشترين للفترة 2023–2026، مع تمييز منهجي بين طلبات الشراء الحقيقية والنشرات التسويقية بالأرشيف."
                : "Dynamic market intelligence dashboard covering verified purchase requests (2023–2026), systematically distinguishing buyer demand from marketing newsletters."}
            </p>
          </div>

          {/* Year Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-secondary/60 border border-border/70 backdrop-blur-md">
            {yearTabs.map((tab) => {
              const isActive = selectedYear === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setSelectedYear(tab.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs",
                    isActive
                      ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange shadow-md shadow-brand-green/20 hover:shadow-brand-orange/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                  )}
                >
                  <span>{ar ? tab.labelAr : tab.labelEn}</span>
                  <span className={cn("text-[10px] font-mono px-1 rounded transition-colors", isActive ? "bg-white/20 text-white" : "bg-muted text-muted-foreground")}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Methodological Transparency Strip */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-2">
        <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-3.5 flex items-center gap-3">
          <CheckCircle2 className="size-5 text-brand-green shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-foreground block">
              {ar ? "طلبات شراء معتمدة:" : "Verified Buyer Inquiries:"} {activeInquiries.length}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {ar ? "طلبات واردة خاضعة للدراسة والتسعير" : "Commercial inbound purchase requests"}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-border/60 bg-secondary/40 p-3.5 flex items-center gap-3">
          <FileText className="size-5 text-muted-foreground shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-foreground block">
              {ar ? "رسائل الأرشيف التسويقية:" : "Archive Newsletters/Alerts:"} 347
            </span>
            <span className="text-[11px] text-muted-foreground">
              {ar ? "مفصولة ومنفصلة عن سجلات الشراء" : "Separated from actual buyer inquiries"}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-3.5 flex items-center gap-3">
          <AlertCircle className="size-5 text-amber-500 shrink-0" />
          <div className="text-xs">
            <span className="font-bold text-foreground block">
              {ar ? "الصفقات المنفذة:" : "Executed Deals / Contracts:"} {ar ? "عقود مستقلة" : "Independent"}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {ar ? "طلبات الشراء رغبات تفاوض وتوريد ولا تعد مبيعات" : "Inquiries do not represent realized revenue"}
            </span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Analytics & Intelligence Content */}
      <div className="space-y-6">
        {selectedYear === "2023" ? (
          /* Dedicated 2023 Trade Intelligence View */
          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-green/30 bg-background/80 p-6 sm:p-8 shadow-xl backdrop-blur-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-brand-green/15 p-3 text-brand-green border border-brand-green/30">
                    <Sparkles className="size-6" />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/40 bg-brand-green/10 px-3 py-0.5 text-[11px] font-bold text-brand-green mb-1">
                      <span>{ar ? "توثيق رسمي موحد" : "Verified Trade Event"}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-foreground">
                      {ar ? "تقرير تدقيق مراسلات عام 2023 والفعاليات التجارية" : "2023 Archive Audit Report & Trade Events"}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-xl border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-bold text-brand-orange">
                    {ar ? "طلبات الشراء: 0 (صفر معتمد)" : "Purchase Inquiries: 0"}
                  </span>
                  <span className="rounded-xl border border-brand-green bg-brand-green px-3.5 py-1.5 text-xs font-bold text-white">
                    {ar ? "الفعاليات الدولية: 1 معتمد" : "Trade Events: 1 Verified"}
                  </span>
                </div>
              </div>

              {/* 2023 Key Metrics Strip */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-2xl border border-white/10 bg-secondary/50 p-4 text-center">
                  <span className="text-xs text-muted-foreground block mb-1">
                    {ar ? "إجمالي رسائل 2023 المفحوصة" : "2023 Messages Audited"}
                  </span>
                  <span className="text-2xl font-black text-foreground font-mono">
                    {TRADE_EVENTS_2023_ANALYSIS.totalMessagesReviewed}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    {ar ? "رسالة أرشيفية رسمية" : "Official archive messages"}
                  </span>
                </div>

                <div className="rounded-2xl border border-brand-green/30 bg-brand-green/10 p-4 text-center">
                  <span className="text-xs text-brand-green font-semibold block mb-1">
                    {ar ? "فعاليات الأغذية والزراعة" : "Agri-Food Events"}
                  </span>
                  <span className="text-2xl font-black text-brand-green font-mono">
                    {TRADE_EVENTS_2023_ANALYSIS.foodAgriEventsFound}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    {ar ? "معرض صحارى الدولي (15 إشعارًا)" : "Sahara Expo (15 notices)"}
                  </span>
                </div>

                <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-center">
                  <span className="text-xs text-amber-500 font-semibold block mb-1">
                    {ar ? "طلبات شراء فردية" : "Purchase Requests"}
                  </span>
                  <span className="text-2xl font-black text-amber-500 font-mono">
                    {TRADE_EVENTS_2023_ANALYSIS.purchaseInquiries2023}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    {ar ? "لا توجد طلبات - التزام بالشفافية" : "Zero fabricated records"}
                  </span>
                </div>

                <div className="rounded-2xl border border-destructive/30 bg-destructive/10 p-4 text-center">
                  <span className="text-xs text-destructive font-semibold block mb-1">
                    {ar ? "رسائل قطاعات مستبعدة" : "Excluded Non-Food"}
                  </span>
                  <span className="text-2xl font-black text-destructive font-mono">
                    {TRADE_EVENTS_2023_ANALYSIS.nonFoodMessagesExcluded}
                  </span>
                  <span className="text-[10px] text-muted-foreground block mt-1">
                    {ar ? "معادن، طب، أدوية وصناعة" : "Metals, Medical, Pharma"}
                  </span>
                </div>
              </div>

              {/* Sahara Expo 2023 Detailed Card */}
              {VERIFIED_TRADE_EVENTS.map((event) => (
                <div
                  key={event.id}
                  className="rounded-2xl border border-brand-green/30 bg-secondary/40 p-5 sm:p-6 space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <div className="inline-flex items-center gap-1.5 rounded-lg border border-brand-green bg-brand-green/20 px-2.5 py-0.5 text-xs font-bold text-brand-green mb-2">
                        <Building2 className="size-3.5" />
                        <span>{ar ? event.categoryAr : event.categoryEn}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-bold text-foreground">
                        {ar ? event.titleAr : event.titleEn}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {ar ? event.organizerAr : event.organizerEn} • {ar ? event.venueAr : event.venueEn} ({ar ? event.dateAr : event.dateEn})
                      </p>
                    </div>

                    <span className="rounded-xl border border-brand-orange bg-brand-orange px-3 py-1 text-xs font-bold text-white shrink-0 shadow-xs self-start">
                      {ar ? `${event.archiveMessagesCount} رسائل موثقة بالأرشيف` : `${event.archiveMessagesCount} Archive Notices`}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-background/60 p-3.5 rounded-xl border border-white/5">
                    {ar ? event.scopeAr : event.scopeEn}
                  </p>

                  <div className="rounded-xl border border-white/10 bg-background/40 p-3 text-xs text-muted-foreground">
                    <span className="font-bold text-foreground block mb-0.5">
                      {ar ? "الأهمية الاستراتيجية لقطاع الأغذية والزراعة بالمجموعة:" : "Strategic Commercial Value for Agribusiness:"}
                    </span>
                    <span>{ar ? event.relevanceAr : event.relevanceEn}</span>
                  </div>
                </div>
              ))}

              {/* Exclusion Methodology Note */}
              <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 text-xs text-muted-foreground space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-foreground">
                  <ShieldAlert className="size-4 text-brand-orange" />
                  <span>{ar ? "منهجية الفرز والاستبعاد لرسائل عام 2023:" : "2023 Review & Filtering Methodology:"}</span>
                </div>
                <p className="leading-relaxed">
                  {ar ? TRADE_EVENTS_2023_ANALYSIS.noteAr : TRADE_EVENTS_2023_ANALYSIS.noteEn}
                </p>
                <p className="leading-relaxed text-[11px]">
                  {ar
                    ? "تم استبعاد 33 رسالة صناعية غير مرتبطة بقطاع الأغذية شملت: معارض الأنابيب والمعادن والصلب (Tube & Wire / Metec / FABEX - 9 رسائل)، مؤتمرات الرعاية الصحية والمستشفيات (Arab Health / Africa Health - 13 رسالة)، وتصنيع المستحضرات الدوائية (Pharmaconex - 11 رسالة)."
                    : "Systematically excluded 33 non-food messages including metallurgy & steel fairs (Tube & Wire / FABEX - 9 notices), healthcare & medical congresses (Arab Health - 13 notices), and pharmaceutical manufacturing (Pharmaconex - 11 notices)."}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Top Countries by Inquiries */}
            <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Globe className="size-5 text-brand-orange" />
                  <h4 className="text-base font-bold text-foreground">
                    {ar ? "أكثر الأسواق طلبًا" : "Top Markets by Demand"} {selectedYear !== "all" && `(${selectedYear})`}
                  </h4>
                </div>
                <span className="text-xs text-muted-foreground">{ar ? "حسب عدد السجلات" : "By Record Count"}</span>
              </div>

              <div className="space-y-3.5">
                {topCountries.map((c) => {
                  const maxInq = topCountries[0]?.count || 1;
                  const pct = Math.round((c.count / maxInq) * 100);

                  return (
                    <div key={c.countryCode || c.countryAr} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="flex items-center gap-2 text-foreground">
                          <img
                            src={`https://flagcdn.com/w40/${c.countryCode.toLowerCase()}.png`}
                            srcSet={`https://flagcdn.com/w80/${c.countryCode.toLowerCase()}.png 2x`}
                            alt={ar ? c.countryAr : c.countryEn}
                            className="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-white/20 shrink-0"
                            loading="lazy"
                          />
                          <span>{ar ? c.countryAr : c.countryEn}</span>
                        </span>
                        <span className="font-mono text-brand-orange">
                          {c.count} {ar ? "طلبات شراء" : "purchase requests"}
                        </span>
                      </div>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-brand-green transition-all duration-500"
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
                  <Layers className="size-5 text-brand-green" />
                  <h4 className="text-base font-bold text-foreground">
                    {ar ? "توزيع طلبات الشراء حسب فئات المنتجات" : "Purchase Requests by Product Category"}
                  </h4>
                </div>
                <span className="text-xs text-muted-foreground">
                  {activeInquiries.length} {ar ? "طلب شراء إجمالي" : "Total Requests"}
                </span>
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
                        style={{ width: `${Math.min(100, cat.percentage * 1.8)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline Bar Chart */}
            <div className="rounded-3xl border border-white/15 bg-background/60 p-6 shadow-xl backdrop-blur-xl lg:col-span-12">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="size-5 text-brand-orange" />
                  <h4 className="text-base font-bold text-foreground">
                    {timelineData.isYearly
                      ? ar
                        ? "المسار السنوي لتدفق طلبات الشراء للمشترين (2023–2026)"
                        : "Annual Buyer Inquiries Timeline (2023–2026)"
                      : ar
                      ? `المسار الشهري لتدفق طلبات الشراء لعام ${selectedYear}`
                      : `Monthly Inquiry Flow for Year ${selectedYear}`}
                  </h4>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-xl border border-brand-green !bg-brand-green !text-white px-3 py-1.5 text-xs font-bold shadow-sm transition-all duration-300">
                  {timelineData.isYearly
                    ? ar
                      ? "ذروة التوثيق: عام 2025 (352 سجلاً)"
                      : "Peak Year: 2025 (352 Inquiries)"
                    : ar
                    ? `إجمالي طلبات الشراء لعام ${selectedYear}: ${activeInquiries.length}`
                    : `Total ${selectedYear} Inquiries: ${activeInquiries.length}`}
                </span>
              </div>

              <div className={cn(
                "items-end gap-2 h-44 pt-6 px-2 grid",
                timelineData.isYearly ? "grid-cols-4 max-w-2xl mx-auto" : "grid-cols-12"
              )}>
                {timelineData.items.map((m, idx) => {
                  const heightPct = Math.round((m.count / (timelineData.max || 1)) * 100);
                  const isPeak = m.count === timelineData.max && m.count > 0;

                  return (
                    <div key={idx} className="flex flex-col items-center gap-2 h-full justify-end group">
                      <span className={`text-[10px] font-mono ${isPeak ? "text-brand-orange font-bold" : "text-muted-foreground group-hover:text-brand-green"}`}>
                        {m.count}
                      </span>
                      <div className="w-full max-w-[48px] bg-white/10 rounded-t-xl overflow-hidden h-full flex items-end">
                        <div
                          className={`w-full rounded-t-xl transition-all duration-500 ${
                            isPeak
                              ? "bg-brand-orange shadow-md shadow-brand-orange/30"
                              : "bg-brand-green group-hover:brightness-110"
                          }`}
                          style={{ height: `${Math.max(8, heightPct)}%` }}
                        />
                      </div>
                      <span className="text-[11px] font-bold text-foreground text-center">
                        {ar ? m.labelAr : m.labelEn}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
