import React, { useState, useMemo } from "react";
import { Search, ChevronDown, ChevronUp, Layers, MapPin, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { APPAREL_MARKETS, ApparelMarket } from "@/lib/apparel-trade-data";

interface ApparelMarketDirectoryProps {
  ar?: boolean;
  selectedMarketCode?: string;
}

export function ApparelMarketDirectory({ ar = true, selectedMarketCode }: ApparelMarketDirectoryProps) {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showAll, setShowAll] = useState<boolean>(false);

  const tabs = useMemo(
    () => [
      { id: "all", nameAr: "جميع الأسواق (20)", nameEn: "All Markets (20)" },
      { id: "arab_north_africa", nameAr: "العالم العربي وشمال إفريقيا (11)", nameEn: "Arab & North Africa (11)" },
      { id: "africa", nameAr: "إفريقيا جنوب الصحراء (4)", nameEn: "Sub-Saharan Africa (4)" },
      { id: "europe", nameAr: "أوروبا (3)", nameEn: "Europe (3)" },
      { id: "other", nameAr: "وجهات أخرى (2)", nameEn: "Other Destinations (2)" },
    ],
    []
  );

  const filteredMarkets = useMemo(() => {
    return APPAREL_MARKETS.filter((m) => {
      const matchTab = activeTab === "all" || m.region === activeTab;
      const matchSearch =
        !searchQuery ||
        m.nameAr.includes(searchQuery) ||
        m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.productsOfInterestAr.some((p) => p.includes(searchQuery)) ||
        m.productsOfInterestEn.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchTab && matchSearch;
    });
  }, [activeTab, searchQuery]);

  const visibleMarkets = showAll ? filteredMarkets : filteredMarkets.slice(0, 6);

  return (
    <div id="apparel-market-directory" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الرابع: دليل الأسواق التصديرية" : "Section 4: Export Market Directory"}</span>
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "دليل الأسواق والمستوردين الإقليميين والدوليين" : "International Markets & Sourcing Directory"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-3xl">
              {ar
                ? "بيانات شاملة عن تفضيلات كل سوق، فئات المشترين، أنماط التصنيع المطلوبة، وشروط التوريد المتوافقة مع متطلبات كل وجهة."
                : "Comprehensive market profiles detailing buyer categories, product demand, manufacturing tracks, and commercial incoterms across each target market."}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowAll(false);
              }}
              placeholder={ar ? "ابحث بدولة أو صنف..." : "Search country or item..."}
              className="w-full rounded-xl border border-border bg-background/95 ps-8 pe-4 py-2 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30"
            />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-border/50 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => {
              setActiveTab(tab.id);
              setShowAll(false);
            }}
            className={cn(
              "rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer border",
              activeTab === tab.id
                ? "bg-foreground text-background border-foreground shadow-sm"
                : "bg-background/70 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {ar ? tab.nameAr : tab.nameEn}
          </button>
        ))}
      </div>

      {/* Markets Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleMarkets.map((market) => (
          <div
            key={market.code}
            className={cn(
              "group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-orange/50 hover:shadow-xl hover:-translate-y-0.5",
              selectedMarketCode === market.code && "ring-2 ring-brand-orange"
            )}
          >
            <div>
              <div className="flex items-start justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl select-none">{market.flag}</span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {ar ? market.nameAr : market.nameEn}
                    </h3>
                    <p className="text-[11px] text-muted-foreground">
                      {ar ? market.regionNameAr : market.regionNameEn}
                    </p>
                  </div>
                </div>
                <span className="rounded-lg border border-border bg-secondary/80 px-2 py-0.5 text-[10px] font-mono font-bold text-foreground">
                  {market.code}
                </span>
              </div>

              {market.parentCountryNoteAr && (
                <div className="mt-2.5 rounded-lg border border-brand-orange/30 bg-brand-orange/10 p-2 text-[11px] text-foreground font-medium">
                  {ar ? market.parentCountryNoteAr : market.parentCountryNoteEn}
                </div>
              )}

              {/* Products */}
              <div className="mt-3.5 space-y-1">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "المنتجات الأكثر طلبًا:" : "High-Demand Products:"}
                </span>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {(ar ? market.productsOfInterestAr : market.productsOfInterestEn).map((prod, pIdx) => (
                    <span
                      key={pIdx}
                      className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[11px] text-foreground font-medium"
                    >
                      {prod}
                    </span>
                  ))}
                </div>
              </div>

              {/* Clients */}
              <div className="mt-3 space-y-1">
                <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider block">
                  {ar ? "نوعية المشترين:" : "Buyer Categories:"}
                </span>
                <p className="text-xs text-foreground/90 font-medium">
                  {(ar ? market.clientTypesAr : market.clientTypesEn).join(" • ")}
                </p>
              </div>

              {/* Notes */}
              <p className="mt-3 text-xs text-muted-foreground leading-relaxed line-clamp-2">
                {ar ? market.marketNotesAr : market.marketNotesEn}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-4 pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 text-[10px]">
              <div className="flex items-center gap-1 text-muted-foreground">
                <span className="font-bold text-foreground">{ar ? "نماذج:" : "Models:"}</span>
                <span>{market.manufacturingModels.join(", ")}</span>
              </div>
              <span className="font-bold text-brand-green">
                {market.supplyTerms.join(" / ")}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* View More / Less Button */}
      {filteredMarkets.length > 6 && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2 rounded-xl border border-border bg-background/90 px-6 py-2.5 text-xs font-bold text-foreground shadow-sm transition-all duration-300 hover:border-brand-orange hover:text-brand-orange hover:shadow-md cursor-pointer"
          >
            <span>
              {showAll
                ? ar
                  ? "عرض أقل"
                  : "Show Less"
                : ar
                ? `عرض كافة الأسواق (${filteredMarkets.length})`
                : `View All Markets (${filteredMarkets.length})`}
            </span>
            {showAll ? (
              <ChevronUp className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            )}
          </button>
        </div>
      )}
    </div>
  );
}

