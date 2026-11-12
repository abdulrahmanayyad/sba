import React, { useState } from "react";
import { ALL_INQUIRIES } from "@/lib/trade-data";
import { PRODUCT_EN_MAP, VARIETY_EN_MAP, formatQuantity } from "@/lib/trade-inquiry-translations";

interface BuyerInquiriesSectionProps {
  ar?: boolean;
}

export function BuyerInquiriesSection({ ar = true }: BuyerInquiriesSectionProps) {
  const [inquirySearch, setInquirySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");
  const [showAll, setShowAll] = useState(false);

  const filteredInquiries = ALL_INQUIRIES.filter((inq) => {
    const matchSearch =
      !inquirySearch ||
      inq.countryAr.includes(inquirySearch) ||
      inq.countryEn.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.productNameAr.includes(inquirySearch) ||
      (inq.productNameEn || "").toLowerCase().includes(inquirySearch.toLowerCase()) ||
      (inq.inquiryNumber || "").includes(inquirySearch) ||
      (PRODUCT_EN_MAP[inq.productNameAr] || "").toLowerCase().includes(inquirySearch.toLowerCase());

    let matchStatus = true;
    if (statusFilter === "recurring") matchStatus = !!inq.isRecurring;
    else if (statusFilter === "dates") matchStatus = inq.category === "dates";
    else if (statusFilter === "commodities") matchStatus = inq.category !== "dates";

    let matchYear = true;
    if (yearFilter !== "all") {
      const yr = inq.year ? String(inq.year) : (inq.inquiryDate || "").slice(0, 4);
      matchYear = yr === yearFilter;
    }

    return matchSearch && matchStatus && matchYear;
  });

  const visibleInquiries = showAll ? filteredInquiries : filteredInquiries.slice(0, 9);

  return (
    <div id="buyer-inquiries" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 7 Title & Description Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "سجل طلبات الشراء للمشترين الدوليين" : "Official Commercial Buyer Inquiries Registry"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              {ar
                ? "سجلات موثقة من أرشيف المراسلات والمنصات التجارية الدولية (2023–2026). تمثل طلبات شراء حقيقية، ومفصولة عن النشرات والرسائل التسويقية."
                : "Verified commercial buyer inquiries from international trade correspondence (2023–2026), systematically distinguished from market alerts."}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Year Filter */}
            <div className="relative inline-flex items-center">
              <select
                value={yearFilter}
                onChange={(e) => {
                  setYearFilter(e.target.value);
                  setShowAll(false);
                }}
                className="appearance-none [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden rounded-xl border border-foreground/25 bg-background/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
                style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
              >
                <option value="all" className="bg-background text-foreground">
                  {ar ? "كافة السنوات (2023–2026)" : "All Years (2023–2026)"}
                </option>
                <option value="2026" className="bg-background text-foreground">
                  {ar ? "عام 2026 (194 طلب شراء)" : "Year 2026 (194 Inquiries)"}
                </option>
                <option value="2025" className="bg-background text-foreground">
                  {ar ? "عام 2025 (352 طلب شراء)" : "Year 2025 (352 Inquiries)"}
                </option>
                <option value="2024" className="bg-background text-foreground">
                  {ar ? "عام 2024 (192 طلب شراء)" : "Year 2024 (192 Inquiries)"}
                </option>
                <option value="2023" className="bg-background text-foreground">
                  {ar ? "عام 2023 (0 طلبات - فعاليات ومعارض)" : "Year 2023 (0 Requests - Trade Events)"}
                </option>
              </select>
            </div>

            <div className="relative">
              <input
                type="text"
                value={inquirySearch}
                onChange={(e) => {
                  setInquirySearch(e.target.value);
                  setShowAll(false);
                }}
                placeholder={ar ? "ابحث بدولة أو منتج أو رقم..." : "Search country, product, ID..."}
                className="rounded-xl border border-foreground/25 bg-background/95 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all w-48 sm:w-56"
              />
            </div>

            <div className="relative inline-flex items-center">
              <select
                value={statusFilter}
                onChange={(e) => {
                  setStatusFilter(e.target.value);
                  setShowAll(false);
                }}
                className="appearance-none [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden rounded-xl border border-foreground/25 bg-background/95 px-3.5 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
                style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
              >
                <option value="all" className="bg-background text-foreground">
                  {ar ? "كافة طلبات الشراء" : "All Purchase Requests"}
                </option>
                <option value="recurring" className="bg-background text-foreground">
                  {ar ? "طلبات دورية متكررة" : "Recurring Demand Orders"}
                </option>
                <option value="dates" className="bg-background text-foreground">
                  {ar ? "طلبات شراء التمور" : "Dates & Date Products"}
                </option>
                <option value="commodities" className="bg-background text-foreground">
                  {ar ? "طلبات السلع الغذائية" : "Food Commodities"}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Inquiries Cards Grid or Zero-State */}
      {filteredInquiries.length === 0 ? (
        <div className="rounded-2xl border border-white/10 bg-background/50 p-8 text-center space-y-3">
          <p className="text-base font-bold text-foreground">
            {yearFilter === "2023"
              ? ar
                ? "لا توجد طلبات شراء مسجلة لعام 2023"
                : "No Purchase Requests Recorded for 2023"
              : ar
              ? "لم يتم العثور على طلبات شراء مطابقة"
              : "No Matching Purchase Requests Found"}
          </p>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {yearFilter === "2023"
              ? ar
                ? "أظهر التدقيق الشامل لأرشيف مراسلات 2023 (48 رسالة) عدم وجود طلبات شراء فردية، واقتصرت على المعارض الدولية (معرض صحارى الدولي للزراعة والأغذية 2023 - 15 إشعارًا) ومراسلات قطاعات صناعية مستبعدة. والتزامًا بالدقة التامة لم يتم اصطناع أي طلبات افتراضية."
                : "Thorough audit of 2023 archive messages (48 notices) confirmed zero individual purchase requests. Relevant communications were strictly trade events (Sahara Expo 2023 - 15 notices). No artificial inquiries were fabricated."
              : ar
              ? "يرجى تعديل خيارات البحث أو تصفية الحالة لعرض السجلات التجارية المتاحة."
              : "Please adjust search terms or filters to view available commercial records."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 p-1">
          {visibleInquiries.map((inq) => (
            <div
              key={inq.id}
              className="rounded-2xl border border-white/10 bg-background/60 p-4 text-xs backdrop-blur-md space-y-2.5 hover:border-brand-orange/40 transition-colors shadow-sm"
            >
              <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                <span className="inline-flex items-center rounded-lg border border-brand-orange bg-brand-orange px-2.5 py-0.5 font-mono text-xs font-bold text-white shadow-xs">
                  {inq.id}
                </span>
                <div className="flex items-center gap-1.5 font-mono">
                  <span className="rounded-md bg-secondary/80 px-1.5 py-0.5 text-[10px] font-bold text-foreground">
                    {inq.inquiryDate ? inq.inquiryDate.slice(0, 4) : inq.year}
                  </span>
                  <span>{inq.inquiryDate}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-bold text-foreground text-sm flex items-center gap-1.5">
                  <img
                    src={`https://flagcdn.com/w40/${inq.countryCode.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w80/${inq.countryCode.toLowerCase()}.png 2x`}
                    alt={ar ? inq.countryAr : inq.countryEn}
                    className="h-3.5 w-5 rounded-xs object-cover shadow-xs border border-white/20 shrink-0"
                    loading="lazy"
                  />
                  <span>{ar ? inq.countryAr : inq.countryEn}</span>
                </span>
                <span className="rounded-lg border border-brand-green bg-brand-green px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                  {inq.isRecurring ? (ar ? "طلب دوري متكرر" : "Recurring Demand") : (ar ? inq.inquiryStatusAr || inq.inquiryStatus : inq.inquiryStatus)}
                </span>
              </div>

              <div className="text-foreground font-semibold">
                {ar ? inq.productNameAr : (PRODUCT_EN_MAP[inq.productNameAr] || inq.productNameEn || inq.productNameAr)}
                {inq.variety && (
                  <span className="text-amber-500 dark:text-amber-400 ms-1 font-medium">
                    ({ar ? inq.variety : (VARIETY_EN_MAP[inq.variety] || inq.variety)})
                  </span>
                )}
              </div>

              {inq.quantityRequested && (
                <p className="text-brand-green font-semibold">
                  {ar ? "الكمية المطلوبة:" : "Required Quantity:"} {ar ? inq.quantityRequested : formatQuantity(inq.quantityRequested, false)}
                </p>
              )}

              <div className="pt-2 text-[11px] text-muted-foreground border-t border-white/5 flex items-center justify-between gap-2">
                <span className="truncate">
                  {ar
                    ? inq.buyerTypeAr || (inq.companyName ? inq.companyName.split("<")[0].trim() : "مشتري تجاري معتمد")
                    : inq.buyerTypeEn || (inq.companyName ? inq.companyName.split("<")[0].trim() : "Commercial Buyer")}
                </span>
                {inq.sourceUrl ? (
                  <a
                    href={inq.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 text-[10px] font-bold text-brand-orange hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>{ar ? "طلب الشراء الأصلي" : "Original Lead"}</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                ) : (
                  <span className="shrink-0 text-[10px] font-bold text-muted-foreground/80">
                    {ar ? "سجل 2025 معتمد" : "Curated 2025"}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* View More Button */}
      {filteredInquiries.length > 9 && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-xl border border-brand-green bg-brand-green px-8 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange hover:border-brand-orange hover:text-white hover:shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>
              {showAll
                ? ar
                  ? "عرض أقل"
                  : "Show Less"
                : ar
                ? "رؤية المزيد"
                : "View More"}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
