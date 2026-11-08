import React, { useState } from "react";
import { 
  Building2, 
  ShieldCheck, 
  Users, 
  Globe, 
  Lock, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Filter,
  Search,
  Sparkles
} from "lucide-react";
import { VERIFIED_TRADE_PARTNERS, ALL_INQUIRIES } from "@/lib/trade-data";

interface BusinessNetworkSectionProps {
  ar?: boolean;
}

export function BusinessNetworkSection({ ar = true }: BusinessNetworkSectionProps) {
  const [activeNetworkTab, setActiveNetworkTab] = useState<"partners" | "inquiries">("partners");
  const [inquirySearch, setInquirySearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredInquiries = ALL_INQUIRIES.filter((inq) => {
    const matchSearch =
      !inquirySearch ||
      inq.countryAr.includes(inquirySearch) ||
      inq.countryEn.toLowerCase().includes(inquirySearch.toLowerCase()) ||
      inq.productNameAr.includes(inquirySearch);

    let matchStatus = true;
    if (statusFilter === "recurring") matchStatus = !!inq.isRecurring;
    else if (statusFilter === "dates") matchStatus = inq.category === "dates";
    else if (statusFilter === "commodities") matchStatus = inq.category !== "dates";

    return matchSearch && matchStatus;
  });

  return (
    <div className="w-full space-y-8">
      {/* Category Selection Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full border border-white/20 bg-background/70 p-1.5 backdrop-blur-xl shadow-lg">
          <button
            type="button"
            onClick={() => setActiveNetworkTab("partners")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
              activeNetworkTab === "partners"
                ? "bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-md shadow-emerald-900/30 scale-105"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            <ShieldCheck className="size-4" />
            <span>{ar ? "أولًا: العملاء والشركاء التجاريون المعتمدون" : "A. Verified Clients & Business Partners"}</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveNetworkTab("inquiries")}
            className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-bold transition-all ${
              activeNetworkTab === "inquiries"
                ? "bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-105"
                : "text-foreground/80 hover:text-foreground"
            }`}
          >
            <Users className="size-4" />
            <span>{ar ? "ثانيًا: سجل استفسارات المشترين الدوليين (2025)" : "B. International Buyer Inquiries (2025)"}</span>
          </button>
        </div>
      </div>

      {activeNetworkTab === "partners" ? (
        /* Category A: Verified Clients & Business Partners */
        <div className="space-y-6">
          <div className="glass-box-interactive interactive-card rounded-3xl p-6 sm:p-8 backdrop-blur-2xl cursor-pointer transition-all duration-300">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="size-4" />
                  {ar ? "علاقات تعاقدية وتجارية موثقة ومستقلة" : "Independently Verified Commercial Contracts"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-foreground mt-1">
                  {ar ? "الشركاء والعملاء التجاريون المعتمدون رسميًا" : "Verified Clients & Contracted Business Partners"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
                  {ar
                    ? "هذا القسم مخصص حصريًا للشركات والمؤسسات التي ترتبط مع المجموعة بعقود تجارية رسمية سارية، أو تعاملات تصنيع وتوريد منفذة وموثقة."
                    : "Strictly reserved for entities with verified ongoing commercial contracts, active supply agreements, or executed corporate partnerships."}
                </p>
              </div>

              <span className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-300">
                {ar ? "فئة معتمدة ومفصولة تمامًا عن الاستفسارات" : "Verified Category / Isolated from Inquiries"}
              </span>
            </div>
          </div>

          {/* Partners Cards */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {VERIFIED_TRADE_PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-emerald-500/20 bg-background/70 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl"
              >
                <div className="flex items-start justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                      <Building2 className="size-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground">
                        {partner.companyName}
                      </h4>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                        <span>{partner.countryFlag}</span>
                        <span>{ar ? partner.countryAr : partner.countryEn}</span>
                        <span>•</span>
                        <span>{ar ? `منذ ${partner.establishedYear}` : `Since ${partner.establishedYear}`}</span>
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="size-3" />
                    <span>{ar ? partner.relationshipStatusAr : partner.relationshipStatus}</span>
                  </span>
                </div>

                <div className="mt-4 space-y-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-muted-foreground block text-[11px]">
                      {ar ? "قطاع العمل والنشاط:" : "Business Sector:"}
                    </span>
                    <p className="text-foreground font-medium">
                      {ar ? partner.sectorAr : partner.sectorEn}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-muted-foreground block text-[11px]">
                      {ar ? "المنتجات والخدمات الموردة:" : "Products & Services Supplied:"}
                    </span>
                    <p className="text-foreground/90 font-medium">
                      {ar ? partner.productsSuppliedAr : partner.productsSuppliedEn}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Category B: International Buyer Inquiries */
        <div className="space-y-6">
          <div className="glass-box-interactive interactive-card rounded-3xl p-6 sm:p-8 backdrop-blur-2xl cursor-pointer transition-all duration-300">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                  <Lock className="size-4" />
                  {ar ? "بيانات مفحوصة ومحمية الخصوصية" : "Privacy Protected Commercial Inquiries"}
                </span>
                <h3 className="text-xl font-black text-foreground mt-1">
                  {ar ? "سجل استفسارات وطلبات المشترين الدوليين (2025)" : "International Buyer Commercial Inquiries Log"}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
                  {ar
                    ? "عرض مهني للاستفسارات التجارية المسجلة في ملفات الإكسل الرسمية. حمايةً للخصوصية وسرية الأعمال، لا يتم نشر أرقام الهواتف أو البريد الإلكتروني الشخصي للمشترين."
                    : "Professional log of commercial buyer inquiries from official records. Personal phones and emails are protected and never published."}
                </p>
              </div>

              {/* Filters */}
              <div className="flex flex-wrap items-center gap-2">
                <input
                  type="text"
                  value={inquirySearch}
                  onChange={(e) => setInquirySearch(e.target.value)}
                  placeholder={ar ? "ابحث بدولة أو منتج..." : "Search country or product..."}
                  className="rounded-xl border border-foreground/25 bg-background/95 px-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
                />

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-xl border border-foreground/25 bg-background/95 px-3 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
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

          {/* Inquiries Table / Cards */}
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 max-h-[600px] overflow-y-auto p-1">
            {filteredInquiries.slice(0, 48).map((inq) => (
              <div
                key={inq.id}
                className="rounded-2xl border border-white/10 bg-background/60 p-4 text-xs backdrop-blur-md space-y-2 hover:border-brand-orange/40 transition-colors"
              >
                <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="font-mono font-bold text-brand-orange">{inq.id}</span>
                  <span>{inq.inquiryDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-foreground text-sm flex items-center gap-1.5">
                    <span>{inq.countryFlag}</span>
                    <span>{ar ? inq.countryAr : inq.countryEn}</span>
                  </span>
                  <span className="rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] font-bold text-amber-400 border border-amber-500/20">
                    {inq.isRecurring ? (ar ? "طلب دوري متكرر" : "Recurring Demand") : inq.inquiryStatus}
                  </span>
                </div>

                <div className="text-foreground font-semibold">
                  {inq.productNameAr}
                  {inq.variety && <span className="text-amber-400 ms-1">({inq.variety})</span>}
                </div>

                {inq.quantityRequested && (
                  <p className="text-emerald-400 font-semibold">
                    {ar ? "الكمية المطلوبة:" : "Qty:"} {inq.quantityRequested}
                  </p>
                )}

                <div className="pt-1 text-[11px] text-muted-foreground border-t border-white/5 flex items-center justify-between">
                  <span>{ar ? inq.buyerTypeAr : inq.buyerTypeEn}</span>
                  <span className="text-[10px] text-amber-400/80">
                    {ar ? "قيد التدقيق والتسعير" : "Pending Verification"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center text-xs text-muted-foreground">
            {ar
              ? `يتم عرض أول 48 استفسارًا من إجمالي ${filteredInquiries.length} استفسارًا مسجلًا في قاعدة البيانات لعام 2025.`
              : `Showing first 48 records of ${filteredInquiries.length} documented inquiries in the 2025 database.`}
          </div>
        </div>
      )}
    </div>
  );
}

