import React, { useState, useMemo, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Globe, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  Package, 
  FileText, 
  Sparkles,
  ExternalLink,
  Tag
} from "lucide-react";
import { COUNTRY_PROFILES, ALL_INQUIRIES, CountryTradeProfile } from "@/lib/trade-data";
import {
  isValidInfo,
  cleanText,
  PRODUCT_EN_MAP,
  formatShippingTerms,
  formatPaymentTerms,
  formatQuantity,
  formatSpecs,
  formatVariety,
  formatBuyerDetails,
  PORT_EN_MAP,
} from "@/lib/trade-inquiry-translations";

interface MarketDirectoryProps {
  ar?: boolean;
  selectedCountryCode?: string;
}

export function MarketDirectory({ ar = true, selectedCountryCode }: MarketDirectoryProps) {
  const [search, setSearch] = useState("");
  const [continentFilter, setContinentFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [expandedCountry, setExpandedCountry] = useState<string | null>(selectedCountryCode || null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (selectedCountryCode) {
      setExpandedCountry(selectedCountryCode);
      setShowAll(true);
    }
  }, [selectedCountryCode]);

  const continents = [
    { id: "all", nameAr: "كافة القارات", nameEn: "All Continents" },
    { id: "Middle East", nameAr: "الشرق الأوسط", nameEn: "Middle East" },
    { id: "Asia", nameAr: "قارة آسيا", nameEn: "Asia" },
    { id: "Europe", nameAr: "قارة أوروبا", nameEn: "Europe" },
    { id: "Africa", nameAr: "قارة إفريقيا", nameEn: "Africa" },
    { id: "Americas", nameAr: "أمريكا", nameEn: "Americas" },
    { id: "Oceania", nameAr: "أخرى", nameEn: "Other" },
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

  const visibleCountries = useMemo(() => {
    return showAll ? filteredCountries : filteredCountries.slice(0, 9);
  }, [showAll, filteredCountries]);

  return (
    <div id="market-directory" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 2 Title & Description Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الثاني: دليل الأسواق" : "Section 2: Market Directory"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "دليل الأسواق والطلب الدولي" : "Our Markets & International Demand"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed max-w-4xl">
          {ar
            ? "بطاقات تفاعلية موسعة لكل دولة تتضمن قوائم السلع المطلوبة، المواصفات المسجلة، والكميات المحددة."
            : "Dedicated expandable profiles for all 47 countries detailing products requested, quantities, and dates."}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Directory Search & Filters */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ar ? "ابحث بالدولة أو كودها أو اسم منتج..." : "Search country or product..."}
            className="w-full rounded-xl border border-foreground/25 bg-background/95 py-2 pe-4 ps-10 text-sm text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Continent */}
          <select
            value={continentFilter}
            onChange={(e) => setContinentFilter(e.target.value)}
            className="appearance-none [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden rounded-xl border border-foreground/25 bg-background/95 px-4 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
            style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
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
            className="appearance-none [appearance:none] [-webkit-appearance:none] [-moz-appearance:none] [&::-ms-expand]:hidden rounded-xl border border-foreground/25 bg-background/95 px-4 py-2 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
            style={{ WebkitAppearance: "none", MozAppearance: "none", appearance: "none", backgroundImage: "none" }}
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
          {ar
            ? `عرض ${visibleCountries.length} من أصل ${filteredCountries.length} دولة مستوردة`
            : `Showing ${visibleCountries.length} of ${filteredCountries.length} documented markets`}
        </span>
      </div>

      {/* Countries Cards Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visibleCountries.map((country) => {
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
                    <img
                      src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${country.code.toLowerCase()}.png 2x`}
                      alt={ar ? country.nameAr : country.nameEn}
                      className="h-6 w-9 rounded-md object-cover shadow-sm border border-foreground/15 dark:border-white/20 shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                        {ar ? country.nameAr : country.nameEn}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {ar ? country.continentAr : country.continent}
                      </p>
                    </div>
                  </div>

                  <span className="flex items-center rounded-full border border-brand-green bg-brand-green px-3 py-1 text-xs font-bold text-white shadow-xs">
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

                    <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                      {countryInquiries.map((inq, iIdx) => {
                        const productTitle = ar
                          ? cleanText(inq.productNameAr)
                          : PRODUCT_EN_MAP[cleanText(inq.productNameAr)] || inq.categoryNameEn || cleanText(inq.productNameAr);
                        const varietyTitle = isValidInfo(inq.variety) ? formatVariety(inq.variety, ar) : null;
                        const qtyDisplay = isValidInfo(inq.quantityRequested) ? formatQuantity(inq.quantityRequested, ar) : null;
                        const specsDisplay = isValidInfo(inq.specifications) ? formatSpecs(inq.specifications, ar) : null;
                        const buyerDetailsDisplay = isValidInfo(inq.buyerDetails) ? formatBuyerDetails(inq.buyerDetails, ar) : null;
                        const shippingDisplay = formatShippingTerms(inq.shippingTerms, ar);
                        const paymentDisplay = formatPaymentTerms(inq.paymentTerms, ar);
                        const portDisplay = isValidInfo(inq.destinationPort)
                          ? (ar ? cleanText(inq.destinationPort) : (PORT_EN_MAP[cleanText(inq.destinationPort)] || cleanText(inq.destinationPort)))
                          : null;
                        const buyerTypeDisplay = ar ? cleanText(inq.buyerTypeAr) : cleanText(inq.buyerTypeEn);

                        return (
                          <div
                            key={inq.id || iIdx}
                            className="group/inq relative rounded-2xl border border-black/15 bg-white/80 dark:bg-white/70 backdrop-blur-xl p-4 text-xs space-y-3 shadow-md transition-all duration-300 hover:bg-white/95 hover:border-black/35 hover:shadow-xl hover:-translate-y-0.5 text-black font-sans"
                          >
                            <div className="flex items-center justify-between text-[11px] font-sans">
                              <span className="font-mono text-black font-extrabold bg-black/5 px-2 py-0.5 rounded border border-black/10">
                                {inq.id}
                              </span>
                              <span className="flex items-center gap-1.5 font-bold text-black">
                                <Calendar className="size-3.5 text-black shrink-0" />
                                {inq.inquiryDate}
                              </span>
                            </div>

                            <div className="font-bold text-black text-sm leading-snug">
                              {productTitle}
                              {varietyTitle && (
                                <span className="text-black font-semibold ms-1.5">
                                  ({varietyTitle})
                                </span>
                              )}
                            </div>

                            {qtyDisplay && (
                              <div className="text-black font-bold flex items-center gap-1.5 text-xs">
                                <Package className="size-3.5 text-black shrink-0" />
                                <span>
                                  {ar ? "الكمية:" : "Quantity:"} {qtyDisplay}
                                </span>
                              </div>
                            )}

                            {specsDisplay && (
                              <div className="text-black font-medium leading-relaxed">
                                <strong className="font-bold text-black me-1">
                                  {ar ? "المواصفات:" : "Specifications:"}
                                </strong>
                                <span className="text-black">{specsDisplay}</span>
                              </div>
                            )}

                            {buyerDetailsDisplay && (
                              <div className="text-black font-medium leading-relaxed border-s-2 border-black/30 ps-3 bg-black/[0.04] p-3 rounded-e-xl">
                                <strong className="block font-bold text-black mb-1">
                                  {ar ? "بيانات ومتطلبات المشتري:" : "Buyer Requirements & Details:"}
                                </strong>
                                <p className="whitespace-pre-line text-black font-normal">
                                  {buyerDetailsDisplay}
                                </p>
                              </div>
                            )}

                            <div className="flex flex-wrap gap-2 text-[11px] pt-1">
                              {shippingDisplay && (
                                <span className="rounded-lg border border-black/15 bg-black/5 px-2.5 py-1 font-bold text-black">
                                  {shippingDisplay}
                                </span>
                              )}
                              {paymentDisplay && (
                                <span className="rounded-lg border border-black/15 bg-black/5 px-2.5 py-1 font-bold text-black">
                                  {paymentDisplay}
                                </span>
                              )}
                              {portDisplay && (
                                <span className="rounded-lg border border-black/15 bg-black/5 px-2.5 py-1 font-bold text-black">
                                  📍 {portDisplay}
                                </span>
                              )}
                              {buyerTypeDisplay && (
                                <span className="rounded-lg border border-black/15 bg-black/5 px-2.5 py-1 font-bold text-black">
                                  {buyerTypeDisplay}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
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

      {/* View More / رؤية المزيد Button */}
      {filteredCountries.length > 9 && (
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
                ? "رؤية المزيد"
                : "View More"}
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

