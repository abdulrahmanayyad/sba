import React, { useState } from "react";
import { 
  FileText, 
  Download, 
  Eye, 
  Printer, 
  ShieldAlert, 
  CheckCircle2, 
  Globe, 
  Package, 
  TrendingUp,
  X
} from "lucide-react";
import { 
  TRADE_STATS, 
  DOCUMENTED_BUYER_REQUIREMENTS, 
  COUNTRY_PROFILES, 
  TRADE_OPPORTUNITIES, 
  PRODUCT_DEMAND_PORTFOLIO 
} from "@/lib/trade-data";

interface TradeReportsDownloadsProps {
  ar?: boolean;
}

export function TradeReportsDownloads({ ar = true }: TradeReportsDownloadsProps) {
  const [activeReportModal, setActiveReportModal] = useState<string | null>(null);

  const reportsList = [
    {
      id: "footprint",
      titleAr: "تقرير الانتشار التجاري الدولي 2025",
      titleEn: "2025 Global Trade Footprint Report",
      descAr: "تحليل شامل لـ 47 دولة مستوردة و179 استفسارًا تجاريًا مسجلًا عبر القارات الخمس، مع تصنيف مؤشرات الطلب.",
      descEn: "Comprehensive analysis of 47 destination markets and 179 recorded buyer inquiries across five continents.",
      pages: "12 صفحة موثقة",
      pagesEn: "12 Documented Pages",
      size: "2.4MB",
      date: "نوفمبر 2025",
      dateEn: "November 2025"
    },
    {
      id: "directory",
      titleAr: "دليل الأسواق الدولية والطلب التجاري",
      titleEn: "International Market Directory Report",
      descAr: "فهرس مفصل لكل دولة من الدول الـ 47 يتضمن قائمة السلع والكميات وتواريخ الاستفسارات وشروط الشحن.",
      descEn: "Detailed country-by-country profiles covering requested commodities, documented quantities, and terms.",
      pages: "18 صفحة مفصلة",
      pagesEn: "18 Detailed Pages",
      size: "3.1MB",
      date: "نوفمبر 2025",
      dateEn: "November 2025"
    },
    {
      id: "demand",
      titleAr: "تقرير الطلب العالمي على المحاصيل والتمور",
      titleEn: "Global Product Demand & Portfolio Report",
      descAr: "دراسة تصنيفية متخصصة للفئات السبع (التمور، التوابل، الخضروات، الفواكه، الحبوب، الأعشاب، السلع).",
      descEn: "Specialized taxonomy and demand study across seven agricultural and food product categories.",
      pages: "14 صفحة متخصصة",
      pagesEn: "14 Analytical Pages",
      size: "2.8MB",
      date: "نوفمبر 2025",
      dateEn: "November 2025"
    },
    {
      id: "requirements",
      titleAr: "تقرير متطلبات المشترين والكميات الموثقة",
      titleEn: "Documented Buyer Requirements Report",
      descAr: "حصر دقيق للطلبات الـ 12 المحددة كميًا بدقة (عقود التوريد الأسبوعية والشهرية والشحنات البحرية الكبرى).",
      descEn: "Exhaustive registry of the 12 explicitly quantified buyer inquiries, recurring weekly/monthly supply contracts.",
      pages: "8 صفحات تنفيذية",
      pagesEn: "8 Executive Pages",
      size: "1.9MB",
      date: "نوفمبر 2025",
      dateEn: "November 2025"
    },
    {
      id: "opportunities",
      titleAr: "دليل الفرص التجارية وعروض التوريد المفتوحة",
      titleEn: "International Trade Opportunities Report",
      descAr: "كراسة الشروط والمواصفات الفنية للفرص التجارية المتاحة أمام الموردين والمنتجين المؤهلين للتعاقد.",
      descEn: "Technical specifications, packaging terms, and supply guidelines for open international trade opportunities.",
      pages: "10 صفحات تعاقدية",
      pagesEn: "10 Commercial Pages",
      size: "2.2MB",
      date: "نوفمبر 2025",
      dateEn: "November 2025"
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 8 Title & Description Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الثامن: التوثيق والتحميلات" : "Section 8: Reports & Documentation"}</span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "تقارير ودراسات التجارة الدولية" : "International Trade Reports & Studies"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed max-w-4xl">
              {ar
                ? "تقارير مهنية موثقة تتضمن الجداول الإحصائية الكاملة، وقوائم الأسواق، ودراسات الطلب."
                : "Professional downloadable corporate reports featuring comprehensive statistics, market matrices, and demand audits."}
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-xs text-muted-foreground shrink-0">
            <span className="text-foreground font-bold">{ar ? "فترة البيانات: " : "Data Period: "}</span>
            <span className="font-mono text-brand-orange">2025 Comprehensive</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Reports Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reportsList.map((rep) => (
          <div
            key={rep.id}
            className="interactive-card glass-box-interactive group flex flex-col justify-between rounded-3xl border border-white/15 bg-background/60 p-6 backdrop-blur-xl transition-all duration-300 hover:bg-background/80 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange">
                  <FileText className="size-5" />
                </span>
                <span dir="ltr" className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-mono font-medium text-foreground">
                  {rep.size}
                </span>
              </div>

              <div className="mt-3.5 space-y-1.5">
                <h4 className="text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                  {ar ? rep.titleAr : rep.titleEn}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar ? rep.descAr : rep.descEn}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t border-white/5">
                <span>{ar ? rep.pages : rep.pagesEn}</span>
                <span className="font-bold text-black dark:text-black bg-white/90 px-2 py-0.5 rounded-md shadow-xs">{ar ? rep.date : rep.dateEn}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 grid grid-cols-2 gap-2 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={() => setActiveReportModal(rep.id)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2 text-xs font-semibold text-foreground hover:bg-white/10 hover:text-brand-orange"
              >
                <Eye className="size-3.5" />
                <span>{ar ? "معاينة" : "Preview"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveReportModal(rep.id);
                  setTimeout(() => window.print(), 300);
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-green py-2 text-xs font-bold text-white shadow-md hover:bg-brand-orange transition-all duration-300 cursor-pointer"
              >
                <Download className="size-3.5" />
                <span>{ar ? "تحميل PDF" : "Download PDF"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Report Preview Modal */}
      {activeReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-background/95 p-8 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto print:max-h-none print:m-0 print:p-4 print:border-none print:bg-white print:text-black">
            {/* Close & Print Buttons */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6 print:hidden">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-brand-orange" />
                <span className="text-sm font-bold text-foreground">
                  {ar ? "معاينة التقرير الرسمي المعتمد" : "Official Report Preview"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 rounded-xl bg-brand-green px-4 py-1.5 text-xs font-bold text-white shadow hover:bg-brand-orange transition-all duration-300 cursor-pointer"
                >
                  <Printer className="size-3.5" />
                  <span>{ar ? "طباعة / تصدير PDF" : "Print / Export PDF"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportModal(null)}
                  className="rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                >
                  <X className="size-5" />
                </button>
              </div>
            </div>

            {/* Document Body Matching SBA Corporate Identity */}
            <div className="space-y-6 text-foreground print:text-black">
              {/* Header Letterhead */}
              <div className="flex items-center justify-between border-b-2 border-emerald-600/40 pb-4">
                <div>
                  <h2 className="text-xl font-black text-brand-orange">
                    SAMI BIN AYYAD GROUP
                  </h2>
                  <p className="text-xs text-muted-foreground">
                    مجموعة سامي بن عياد التجارية القابضة • إدارة التجارة الدولية والتصدير
                  </p>
                  <p className="text-[11px] font-mono text-muted-foreground mt-0.5">
                    Official Trade Intelligence & Market Analysis Document
                  </p>
                </div>

                <div className="text-end text-xs text-muted-foreground">
                  <p className="font-semibold text-foreground">{ar ? "تاريخ الإصدار:" : "Issue Date:"} 2025/11/05</p>
                  <p className="font-mono text-brand-orange">Ref: SBA-TRADE-2025-DOC</p>
                </div>
              </div>

              {/* Title */}
              <div>
                <h3 className="text-2xl font-black text-foreground">
                  {reportsList.find((r) => r.id === activeReportModal)?.[ar ? "titleAr" : "titleEn"]}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {reportsList.find((r) => r.id === activeReportModal)?.[ar ? "descAr" : "descEn"]}
                </p>
              </div>

              {/* Compliance Alert in PDF */}
              <div className="rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-300 leading-relaxed print:border-black print:text-black">
                <strong>{ar ? "تنويه توثيقي معتمد: " : "Documentary Compliance Notice: "}</strong>
                {ar ? TRADE_STATS.legalDisclaimerAr : TRADE_STATS.legalDisclaimerEn}
              </div>

              {/* Dynamic Content Table depending on modal */}
              {activeReportModal === "requirements" ? (
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-foreground">
                    {ar ? "جدول متطلبات المشترين والكميات المحددة صراحة (12 طلبًا)" : "Explicitly Documented Buyer Requirements Table"}
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-white/10">
                    <table className="w-full text-start text-xs">
                      <thead className="bg-white/10 text-muted-foreground text-[11px]">
                        <tr>
                          <th className="p-2.5">الكود</th>
                          <th className="p-2.5">المنتج</th>
                          <th className="p-2.5">الدولة</th>
                          <th className="p-2.5">الكمية الموثقة</th>
                          <th className="p-2.5">التكرار والشرط</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {DOCUMENTED_BUYER_REQUIREMENTS.map((r) => (
                          <tr key={r.id} className="hover:bg-white/5">
                            <td className="p-2.5 font-mono text-brand-orange">{r.id}</td>
                            <td className="p-2.5 font-bold">{ar ? r.productAr : r.productEn}</td>
                            <td className="p-2.5">{r.countryFlag} {ar ? r.countryAr : r.countryEn}</td>
                            <td className="p-2.5 font-semibold text-emerald-400">{ar ? r.quantity : r.quantityEn}</td>
                            <td className="p-2.5 text-muted-foreground">{ar ? r.frequencyAr : r.frequencyEn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : activeReportModal === "directory" ? (
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-foreground">
                    {ar ? "فهرس الأسواق والدول المستوردة الموثقة (47 دولة)" : "Documented Destination Markets Matrix (47 Countries)"}
                  </h4>
                  <div className="overflow-x-auto rounded-xl border border-white/10 max-h-96">
                    <table className="w-full text-start text-xs">
                      <thead className="bg-white/10 text-muted-foreground text-[11px] sticky top-0">
                        <tr>
                          <th className="p-2.5">الدولة</th>
                          <th className="p-2.5">القارة</th>
                          <th className="p-2.5">إجمالي الاستفسارات</th>
                          <th className="p-2.5">طلبات شراء التمور</th>
                          <th className="p-2.5">طلبات شراء السلع المتنوعة</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        {COUNTRY_PROFILES.map((c) => (
                          <tr key={c.code} className="hover:bg-white/5">
                            <td className="p-2.5 font-bold flex items-center gap-2">
                              <img
                                src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                alt={ar ? c.nameAr : c.nameEn}
                                className="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-white/20 shrink-0 inline-block"
                                loading="lazy"
                              />
                              <span>{ar ? c.nameAr : c.nameEn}</span>
                            </td>
                            <td className="p-2.5 text-muted-foreground">{ar ? c.continentAr : c.continent}</td>
                            <td className="p-2.5 font-mono text-brand-orange font-bold">{c.totalInquiries}</td>
                            <td className="p-2.5 font-mono text-amber-400">{c.dateInquiriesCount}</td>
                            <td className="p-2.5 font-mono text-teal-400">{c.diversifiedInquiriesCount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <h4 className="font-bold text-sm text-foreground">
                    {ar ? "ملخص مؤشرات وبيانات التقرير التنفيذي" : "Executive Report Summary & Metrics"}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <span className="font-head text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">47</span>
                      <p className="text-xs text-muted-foreground mt-1">{ar ? "دولة مسجلة" : "Documented Countries"}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <span className="font-head text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">179</span>
                      <p className="text-xs text-muted-foreground mt-1">{ar ? "استفسار تجاري موثق" : "Recorded Inquiries"}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <span className="font-head text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">66</span>
                      <p className="text-xs text-muted-foreground mt-1">{ar ? "استفسارات التمور" : "Dates Inquiries"}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
                      <span className="font-head text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">113</span>
                      <p className="text-xs text-muted-foreground mt-1">{ar ? "استفسارات سلع متنوعة" : "Diversified Inquiries"}</p>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {ar
                      ? "يتضمن التقرير الكامل كافة البيانات الموثقة المستخرجة من السجلات الرسمية للاستفسارات لعام 2025 مع تصنيف السلع وشروط الشحن وتفاصيل التعبئة والموانئ المستهدفة."
                      : "The full report includes all documented inquiry data extracted from the 2025 records with product specifications, shipping terms, and destination ports."}
                  </p>
                </div>
              )}

              {/* Document Sign-off Footer */}
              <div className="border-t border-white/10 pt-4 text-[11px] text-muted-foreground flex items-center justify-between">
                <span>Sami Bin Ayyad Group • Corporate Trade Division</span>
                <span>Page 1 of Document • Confidential / Official Presentation</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

