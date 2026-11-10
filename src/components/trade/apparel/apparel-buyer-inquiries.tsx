import React, { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, Tag, ShieldCheck, Clock, Layers } from "lucide-react";
import { APPAREL_BUYER_INQUIRIES, ApparelInquiryRecord } from "@/lib/apparel-trade-data";

interface ApparelBuyerInquiriesProps {
  ar?: boolean;
}

export function ApparelBuyerInquiries({ ar = true }: ApparelBuyerInquiriesProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const filteredInquiries = useMemo(() => {
    return APPAREL_BUYER_INQUIRIES.filter((inq) => {
      const matchSearch =
        !searchQuery ||
        inq.inquiryCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.countryAr.includes(searchQuery) ||
        inq.countryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.productItemAr.includes(searchQuery) ||
        inq.productItemEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        inq.fabricSpecsAr.includes(searchQuery);

      const matchCat =
        categoryFilter === "all" ||
        inq.productCategoryAr.includes(categoryFilter) ||
        inq.productCategoryEn.toLowerCase().includes(categoryFilter.toLowerCase());

      const matchStatus =
        statusFilter === "all" ||
        inq.statusAr.includes(statusFilter) ||
        inq.statusEn.toLowerCase().includes(statusFilter.toLowerCase());

      return matchSearch && matchCat && matchStatus;
    });
  }, [searchQuery, categoryFilter, statusFilter]);

  const visibleInquiries = showAll ? filteredInquiries : filteredInquiries.slice(0, 9);

  return (
    <div id="apparel-inquiries" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "سجل استفسارات وطلبات المشترين الدوليين للملابس والمنسوجات" : "Apparel & Textile International Buyer Inquiries Registry"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1.5 leading-relaxed max-w-3xl">
              {ar
                ? "سجل توثيقي يضم 18 حقلاً تفصيلياً لكل طلبية، مستندًا إلى سجلات ومحادثات تفاوضية رسمية مع المشترين الدوليين."
                : "A documented registry detailing 18 verified parameters per order, derived from official buyer procurement dialogues."}
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="relative">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowAll(false);
                }}
                placeholder={ar ? "ابحث بدولة، كود، خامة..." : "Search code, country, fabric..."}
                className="rounded-xl border border-border bg-background/95 ps-8 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all w-52 sm:w-60"
              />
            </div>

            <select
              value={categoryFilter}
              onChange={(e) => {
                setCategoryFilter(e.target.value);
                setShowAll(false);
              }}
              className="rounded-xl border border-border bg-background/95 px-3 py-2 text-xs font-semibold text-foreground shadow-sm cursor-pointer focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            >
              <option value="all">{ar ? "كافة فئات الملابس" : "All Categories"}</option>
              <option value="نسائية">{ar ? "ملابس نسائية" : "Women's Wear"}</option>
              <option value="أطفال">{ar ? "ملابس أطفال" : "Childrenswear"}</option>
              <option value="تريكو">{ar ? "تريكو وأزياء" : "Knits & Basics"}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Inquiries Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5">
        {visibleInquiries.map((inq) => {
          const isExpanded = expandedCode === inq.inquiryCode;
          return (
            <div
              key={inq.inquiryCode}
              className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-green/60 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="space-y-3">
                {/* Header: Code & Flag */}
                <div className="flex items-center justify-between border-b border-border/50 pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xl select-none">{inq.countryFlag}</span>
                    <span className="text-xs font-bold text-foreground">
                      {ar ? inq.countryAr : inq.countryEn}
                    </span>
                  </div>
                  <span className="rounded-lg border border-border bg-secondary/80 px-2 py-0.5 text-[10px] font-mono font-bold text-foreground">
                    {inq.inquiryCode}
                  </span>
                </div>

                {/* Product Name & Category */}
                <div>
                  <span className="text-[10px] font-bold text-brand-orange block uppercase tracking-wider">
                    {ar ? inq.productCategoryAr : inq.productCategoryEn}
                  </span>
                  <h4 className="font-bold text-sm text-foreground mt-0.5">
                    {ar ? inq.productItemAr : inq.productItemEn}
                  </h4>
                </div>

                {/* Core Parameters */}
                <div className="space-y-1.5 text-xs text-muted-foreground pt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{ar ? "الكمية المطلوبة:" : "Quantity:"}</span>
                    <span className="font-bold text-brand-green">
                      {ar ? inq.quantityRequestedAr : inq.quantityRequestedEn}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">{ar ? "نمط التصنيع:" : "Model:"}</span>
                    <span className="font-semibold text-foreground">
                      {inq.manufacturingModel}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">{ar ? "شروط التسليم:" : "Terms:"}</span>
                    <span className="font-semibold text-foreground">
                      {inq.incoterms} • {inq.paymentTerms}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-medium">{ar ? "المواصفات الفنية:" : "Fabrics:"}</span>
                    <span className="font-medium text-foreground text-[11px] truncate max-w-[170px]" title={ar ? inq.fabricSpecsAr : inq.fabricSpecsEn}>
                      {ar ? inq.fabricSpecsAr : inq.fabricSpecsEn}
                    </span>
                  </div>
                </div>

                {/* Expandable 18-field detail drawer */}
                {isExpanded && (
                  <div className="border-t border-border/60 pt-3 mt-3 space-y-2 text-[11px] animate-in fade-in duration-200">
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "صفة المشتري:" : "Buyer Profile:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.buyerProfileAr : inq.buyerProfileEn}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "جدول التوريد:" : "Delivery Schedule:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.deliveryScheduleAr : inq.deliveryScheduleEn}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "المقاسات والتدريج:" : "Size Range:"}</span>
                      <span className="text-muted-foreground">{inq.sizeRange}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "التعبئة والتغليف:" : "Packaging Specs:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.packagingSpecsAr : inq.packagingSpecsEn}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "العينات المطلوبة:" : "Sampling Specs:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.samplingReqAr : inq.samplingReqEn}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "الشهادات والامتثال:" : "Certifications:"}</span>
                      <span className="text-muted-foreground">{inq.certificationsReq.join(", ")}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "السوق المستهدف:" : "Target Market:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.targetMarketAr : inq.targetMarketEn}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground block">{ar ? "ملاحظات إضافية:" : "Technical Notes:"}</span>
                      <span className="text-muted-foreground">{ar ? inq.notesAr : inq.notesEn}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer: Status & Expand Toggle */}
              <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                <span className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-2.5 py-0.5 text-[10px] font-bold text-brand-green">
                  {ar ? inq.statusAr : inq.statusEn}
                </span>

                <button
                  type="button"
                  onClick={() => setExpandedCode(isExpanded ? null : inq.inquiryCode)}
                  className="text-[11px] font-bold text-foreground hover:text-brand-orange transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>{isExpanded ? (ar ? "تفاصيل أقل" : "Less") : (ar ? "كافة الحقول (18)" : "18 Fields")}</span>
                  {isExpanded ? <ChevronUp className="size-3" /> : <ChevronDown className="size-3" />}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* View More Button */}
      {filteredInquiries.length > 9 && (
        <div className="flex justify-center pt-2">
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
                ? `عرض المزيد من الطلبات (${filteredInquiries.length})`
                : `View More Inquiries (${filteredInquiries.length})`}
            </span>
            {showAll ? (
              <ChevronUp className="size-4 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="size-4 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

