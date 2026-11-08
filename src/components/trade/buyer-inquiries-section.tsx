import React, { useState } from "react";
import { Lock, Users, Search, Filter } from "lucide-react";
import { ALL_INQUIRIES } from "@/lib/trade-data";
import { PRODUCT_EN_MAP } from "@/lib/trade-inquiry-translations";

interface BuyerInquiriesSectionProps {
  ar?: boolean;
}

export function BuyerInquiriesSection({ ar = true }: BuyerInquiriesSectionProps) {
  const [inquirySearch, setInquirySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInquiries = ALL_INQUIRIES.filter((inq) => {
    const matchSearch =
      !inquirySearch ||
      inq.countryAr.includes(inquirySearch) ||
      inq.countryEn.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.productNameAr.includes(inquirySearch) ||
      (PRODUCT_EN_MAP[inq.productNameAr] || "").toLowerCase().includes(inquirySearch.toLowerCase());

    let matchStatus = true;
    if (statusFilter === "recurring") matchStatus = !!inq.isRecurring;
    else if (statusFilter === "dates") matchStatus = inq.category === "dates";
    else if (statusFilter === "commodities") matchStatus = inq.category !== "dates";

    return matchSearch && matchStatus;
  });

  return (
    <div id="buyer-inquiries" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 7 Badge & Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم السابع: سجل استفسارات المشترين" : "Section 7: Buyer Inquiries Log"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "سجل استفسارات المشترين الدوليين (2025)" : "International Buyer Inquiries Log (2025)"}
        </h2>
      </div>

      {/* Privacy and Search Filter Banner */}
      <div className="rounded-2xl border border-white/15 bg-background/50 p-6 sm:p-8 backdrop-blur-xl shadow-inner transition-all duration-300">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-500 dark:text-amber-400 flex items-center gap-1.5">
              <Lock className="size-4" />
              {ar ? "بيانات مفحوصة ومحمية الخصوصية" : "Privacy Protected Commercial Inquiries"}
            </span>
            <h3 className="text-xl font-black text-foreground mt-1">
              {ar ? "سجل استفسارات وطلبات المشترين الدوليين" : "Official Commercial Buyer Inquiries Registry"}
            </h3>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={inquirySearch}
                onChange={(e) => setInquirySearch(e.target.value)}
                placeholder={ar ? "ابحث بدولة أو منتج..." : "Search country or product..."}
                className="rounded-xl border border-foreground/25 bg-background/95 ps-8 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all w-52 sm:w-60"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden rounded-xl border border-foreground/25 bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
              style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
            >
              <option value="all" className="bg-background text-foreground">
                {ar ? "كافة طلبات الشراء (179)" : "All Purchase Requests (179)"}
              </option>
              <option value="recurring" className="bg-background text-foreground">
                {ar ? "طلبات دورية متكررة" : "Recurring Demand"}
              </option>
              <option value="dates" className="bg-background text-foreground">
                {ar ? "طلبات شراء التمور" : "Dates Purchase Requests"}
              </option>
              <option value="commodities" className="bg-background text-foreground">
                {ar ? "طلبات السلع الغذائية" : "Food Commodities Requests"}
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Inquiries Cards Grid */}
      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3 max-h-[640px] overflow-y-auto p-1">
        {filteredInquiries.map((inq) => (
          <div
            key={inq.id}
            className="rounded-2xl border border-white/10 bg-background/60 p-4 text-xs backdrop-blur-md space-y-2.5 hover:border-brand-orange/40 transition-colors shadow-sm"
          >
            <div className="flex items-center justify-between text-[11px] text-muted-foreground">
              <span className="font-mono font-bold text-brand-orange">{inq.id}</span>
              <span>{inq.inquiryDate}</span>
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
              <span className="rounded-md bg-emerald-400 px-2 py-0.5 text-[10px] font-bold text-black border border-emerald-500/30 shadow-xs">
                {inq.isRecurring ? (ar ? "طلب دوري متكرر" : "Recurring Demand") : (ar ? inq.inquiryStatusAr || inq.inquiryStatus : inq.inquiryStatus)}
              </span>
            </div>

            <div className="text-foreground font-semibold">
              {ar ? inq.productNameAr : (PRODUCT_EN_MAP[inq.productNameAr] || inq.productNameAr)}
              {inq.variety && <span className="text-amber-500 dark:text-amber-400 ms-1">({inq.variety})</span>}
            </div>

            {inq.quantityRequested && (
              <p className="text-brand-green font-semibold">
                {ar ? "الكمية المطلوبة:" : "Qty:"} {inq.quantityRequested}
              </p>
            )}

            <div className="pt-2 text-[11px] text-muted-foreground border-t border-white/5 flex items-center justify-between">
              <span>{ar ? inq.buyerTypeAr : inq.buyerTypeEn}</span>
              <span className="text-[10px] text-amber-500 dark:text-amber-400 font-medium">
                {ar ? "قيد التدقيق والتسعير" : "Pending Verification"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
