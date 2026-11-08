import React, { useState, useMemo } from "react";
import { 
  Search, 
  Filter, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Package, 
  TrendingUp, 
  FileText, 
  Sparkles,
  ExternalLink,
  Tag
} from "lucide-react";
import { COUNTRY_PROFILES, ALL_INQUIRIES, CountryTradeProfile } from "@/lib/trade-data";

interface MarketDirectoryProps {
  ar?: boolean;
  selectedCountryCode?: string;
}

export function MarketDirectory({ ar = true, selectedCountryCode }: MarketDirectoryProps) {
  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [expandedCountry, setExpandedCountry] = useState<string | null>(selectedCountryCode || null);

  const continents = [
    { id: "all", nameAr: "كافة القارات", nameEn: "All Continents" },
    { id: "Middle East", nameAr: "الشرق الأوسط والخليج", nameEn: "Middle East & GCC" },
    { id: "Asia", nameAr: "آسيا والمحيط الهادئ", nameEn: "Asia & Pacific" },
    { id: "Europe", nameAr: "أوروبا", nameEn: "Europe" },
    { id: "Africa", nameAr: "إفريقيا", nameEn: "Africa" },
    { id: "Americas", nameAr: "الأمريكتان", nameEn: "Americas" },
    { id: "Oceania", nameAr: "أوقيانوسيا", nameEn: "Oceania" },
  ];

  const filteredCountries = useMemo(() => {
    return COUNTRY_PROFILES.filter((c) => {
      const matchSearch =
        !search ||
        c.nameAr.includes(search) ||
        c.nameEn.toLowerCase().includes(search.toLowerCase()) ||
        c.products.some((p) => p.includes(search));

      const matchContinent = continentFilter === "all" || c.continent === continentFilter;

      let matchCat = true;
      if (categoryFilter === "dates") {
        matchCat = c.dateInquiriesCount > 0;
      } else if (categoryFilter === "diversified") {
        matchCat = c.diversifiedInquiriesCount > 0;
      }

      return matchSearch && matchContinent && matchCat;
    });
  }, [search, continentFilter, categoryFilter]);

  const toggleExpand = (code: string) => {
    setExpandedCountry((prev) => (prev === code ? null : code));
  };

  return (
    <div id="market-directory" className="w-full space-y-6">
      {/* Directory Search & Filters */}
      <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-background/60 p-5 shadow-xl backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ar ? "ابحث بالدولة أو كودها أو اسم منتج..." : "Search country or product..."}
            className="w-full rounded-full border border-white/20 bg-background/50 py-2 pe-4 ps-10 text-sm text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Continent */}
          <select
            value={continentFilter}
            onChange={(e) => setContinentFilter(e.target.value)}
            className="rounded-full border border-white/20 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground focus:border-brand-orange focus:outline-none"
          >
            {continents.map((cnt) => (
              <option key={cnt.id} value={cnt.id} className="bg-background text-foreground">
                {ar ? cnt.nameAr : cnt.nameEn}
              </option>
            ))}
          </select>

          {/* Type */}
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="rounded-full border border-white/20 bg-background/70 px-4 py-2 text-xs font-semibold text-foreground focus:border-brand-orange focus:outline-none"
          >
            <option value="all" className="bg-background text-foreground">
              {ar ? "كافة فئات طلبات الشراء" : "All Inquiry Types"}
            </option>
            <option value="dates" className="bg-background text-foreground">
              {ar ? "طلبات شراء التمور فقط" : "Dates Only"}
            </option>
            <option value="diversified" className="bg-background text-foreground">
              {ar ? "طلبات السلع الغذائية فقط" : "Food Products Only"}
            </option>
          </select>
        </div>
      </div>

      {/* Directory Count Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-muted-foreground">
        <span>
          {ar ? `عرض ${filteredCountries.length} من أصل 47 دولة مستوردة` : `Showing ${filteredCountries.length} of 47 documented markets`}
        </span>
        <span className="inline-flex items-center justify-center rounded-xl border border-brand-green/40 bg-brand-green/15 px-3 py-1.5 font-bold text-brand-green shadow-xs">
          {ar ? "بيانات موثقة من طلبات الشراء الرسمية" : "Verified from official inquiry records"}
        </span>
      </div>

      {/* Countries Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredCountries.map((country) => {
          const isExpanded = expandedCountry === country.code;
          const countryInquiries = ALL_INQUIRIES.filter((r) => r.countryAr === country.nameAr);

          return (
            <div
              key={country.code}
              className={`interactive-card glass-box-interactive group flex flex-col justify-between rounded-3xl border transition-all duration-300 ${
                isExpanded
                  ? "border-brand-orange/60 bg-background/90 shadow-2xl ring-2 ring-brand-orange/20 md:col-span-2 lg:col-span-3"
                  : "border-white/15 bg-background/60 hover:border-white/30 hover:bg-background/80 hover:-translate-y-1 hover:shadow-xl"
              } p-5 backdrop-blur-xl`}
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl drop-shadow-sm" role="img" aria-label={country.nameEn}>
                      {country.flag}
                    </span>
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                        {ar ? country.nameAr : country.nameEn}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {ar ? country.continentAr : country.continent} • {country.flag}
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/25">
                    <TrendingUp className="size-3" />
                    <span>{country.totalInquiries} {ar ? "طلب شراء" : "Inquiries"}</span>
                  </span>
                </div>

                {/* Badges breakdown */}
                <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
                  {country.dateInquiriesCount > 0 && (
                    <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                      {ar ? `تمور: ${country.dateInquiriesCount} طلبات شراء` : `Dates: ${country.dateInquiriesCount}`}
                    </span>
                  )}
                  {country.diversifiedInquiriesCount > 0 && (
                    <span className="rounded-full bg-brand-orange/15 px-2.5 py-0.5 font-bold text-brand-orange border border-brand-orange/30">
                      {ar ? `سلع غذائية: ${country.diversifiedInquiriesCount} طلبات شراء` : `Food: ${country.diversifiedInquiriesCount}`}
                    </span>
                  )}
                </div>

                {/* Requested Products preview */}
                <div className="mt-3">
                  <p className="text-xs font-semibold text-muted-foreground mb-1.5">
                    {ar ? "أبرز السلع المطلوبة:" : "Top Requested Products:"}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {country.products.slice(0, isExpanded ? 20 : 4).map((p, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-foreground/90"
                      >
                        {p}
                      </span>
                    ))}
                    {!isExpanded && country.products.length > 4 && (
                      <span className="rounded-lg bg-white/5 px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        +{country.products.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="mt-6 space-y-4 border-t border-white/10 pt-4 animate-in fade-in duration-300">
                    <h5 className="text-xs font-bold text-brand-orange uppercase tracking-wider">
                      {ar ? "سجل طلبات الشراء التفصيلي المسجل:" : "Detailed Purchase Records Log:"}
                    </h5>

                    <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {countryInquiries.map((inq, iIdx) => (
                        <div
                          key={inq.id || iIdx}
                          className="rounded-2xl border border-white/10 bg-black/20 p-3.5 text-xs space-y-2"
                        >
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                            <span className="font-mono text-brand-orange font-bold">{inq.id}</span>
                            <span className="flex items-center gap-1">
                              <Calendar className="size-3" />
                              {inq.inquiryDate}
                            </span>
                          </div>

                          <div className="font-bold text-foreground text-sm">
                            {inq.productNameAr}
                            {inq.variety && <span className="text-amber-400 ms-1">({inq.variety})</span>}
                          </div>

                          {inq.quantityRequested && (
                            <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
                              <Package className="size-3.5" />
                              <span>{ar ? "الكمية:" : "Qty:"} {inq.quantityRequested}</span>
                            </div>
                          )}

                          {inq.specifications && (
                            <p className="text-muted-foreground leading-relaxed">
                              <strong>{ar ? "المواصفات:" : "Specs:"}</strong> {inq.specifications}
                            </p>
                          )}

                          {inq.buyerDetails && (
                            <p className="text-muted-foreground leading-relaxed italic border-s-2 border-white/20 ps-2">
                              "{inq.buyerDetails.slice(0, 150)}..."
                            </p>
                          )}

                          <div className="flex flex-wrap gap-2 text-[10px] text-muted-foreground pt-1">
                            {inq.shippingTerms && (
                              <span className="rounded bg-white/10 px-1.5 py-0.5">
                                {inq.shippingTerms}
                              </span>
                            )}
                            {inq.paymentTerms && (
                              <span className="rounded bg-white/10 px-1.5 py-0.5">
                                {inq.paymentTerms}
                              </span>
                            )}
                            {inq.destinationPort && (
                              <span className="rounded bg-white/10 px-1.5 py-0.5">
                                📍 {inq.destinationPort}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => toggleExpand(country.code)}
                className="mt-4 flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/10 bg-white/5 py-2 text-xs font-semibold text-foreground/80 transition-all hover:bg-white/10 hover:text-brand-orange"
              >
                <span>
                  {isExpanded
                    ? ar
                      ? "إغلاق السجل التفصيلي"
                      : "Collapse Details"
                    : ar
                    ? `عرض كافة طلبات الشراء (${country.totalInquiries})`
                    : `View Full Purchase Requests (${country.totalInquiries})`}
                </span>
                {isExpanded ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

