import React, { useState, useMemo } from "react";
import { 
  Globe, 
  Search, 
  AlertCircle,
  ChevronDown
} from "lucide-react";
import { cn } from "@/lib/utils";
import { 
  COUNTRY_PROFILES, 
  TRADE_STATS, 
  CountryTradeProfile 
} from "@/lib/trade-data";
import { GeographicMapMarker, GeographicWorldMap } from "./geographic-world-map";

interface TradeWorldMapProps {
  ar?: boolean;
  onSelectCountry?: (country: CountryTradeProfile) => void;
}

export function TradeWorldMap({ ar = true, onSelectCountry }: TradeWorldMapProps) {
  const [selectedContinent, setSelectedContinent] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeCountry, setActiveCountry] = useState<CountryTradeProfile | null>(
    () => COUNTRY_PROFILES.find((c) => c.code === "SA" || c.code === "SAU") || COUNTRY_PROFILES[0] || null
  );

  const continents = useMemo(() => [
    { id: "all", labelAr: "كافة القارات", labelEn: "All Continents" },
    { id: "Middle East", labelAr: "الشرق الأوسط", labelEn: "Middle East" },
    { id: "Asia", labelAr: "قارة آسيا", labelEn: "Asia" },
    { id: "Europe", labelAr: "قارة أوروبا", labelEn: "Europe" },
    { id: "Africa", labelAr: "قارة إفريقيا", labelEn: "Africa" },
    { id: "Americas", labelAr: "أمريكا", labelEn: "Americas" },
    { id: "Oceania", labelAr: "أخرى", labelEn: "Other" },
  ], []);

  const categories = useMemo(() => [
    { id: "all", labelAr: "كافة القطاعات", labelEn: "All Inquiries" },
    { id: "dates", labelAr: "التمور ومنتجاتها", labelEn: "Dates & Date Products" },
    { id: "spices", labelAr: "التوابل والبهارات", labelEn: "Spices & Seasonings" },
    { id: "vegetables", labelAr: "خضروات وفواكه", labelEn: "Fresh Produce" },
    { id: "seeds_grains", labelAr: "حبوب وبذور", labelEn: "Seeds & Grains" },
    { id: "herbs_powders", labelAr: "أعشاب ومستخلصات", labelEn: "Herbs & Extracts" },
  ], []);

  const filteredCountries = useMemo(() => {
    return COUNTRY_PROFILES.filter((c) => {
      const matchContinent = selectedContinent === "all" || c.continent === selectedContinent;
      const matchSearch =
        !searchQuery ||
        c.nameAr.includes(searchQuery) ||
        c.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.products.some((p) => p.includes(searchQuery));
      
      let matchCat = true;
      if (selectedCategory === "dates") {
        matchCat = c.dateInquiriesCount > 0;
      } else if (selectedCategory !== "all") {
        matchCat = c.diversifiedInquiriesCount > 0;
      }

      return matchContinent && matchSearch && matchCat;
    });
  }, [selectedContinent, selectedCategory, searchQuery]);

  const handleCountryClick = (country: CountryTradeProfile) => {
    setActiveCountry(country);
    if (onSelectCountry) onSelectCountry(country);
  };

  const mapMarkers = useMemo<GeographicMapMarker[]>(
    () =>
      filteredCountries.map((c) => ({
        code: c.code,
        isoCode: c.code,
        flagIso2: c.code,
        nameAr: c.nameAr,
        nameEn: c.nameEn,
        lat: c.lat,
        lng: c.lng,
        badgeCount: c.totalInquiries,
      })),
    [filteredCountries],
  );

  const handleMarkerSelect = (code: string) => {
    const matched = filteredCountries.find((c) => c.code === code) || COUNTRY_PROFILES.find((c) => c.code === code);
    if (matched) handleCountryClick(matched);
  };

  return (
    <div id="world-map" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Title & Description */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الأول: الخريطة التفاعلية" : "Section 1: Interactive Map"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "خريطة الانتشار التجاري للأسواق الدولية" : "Global Trade Footprint Map"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed max-w-4xl">
          {ar
            ? "بيان للدول التي قامت بتسجيل طلبات شراء تجارية خلال عام 2025"
            : "Overview of countries that recorded commercial purchase requests during 2025."}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Filters Bar */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Continent Pills */}
        <div className="flex flex-wrap items-center gap-2 no-scrollbar pb-1 md:pb-0">
          {continents.map((cont) => (
            <button
              key={cont.id}
              type="button"
              onClick={() => setSelectedContinent(cont.id)}
              className={`rounded-full border px-3.5 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer shadow-xs ${
                selectedContinent === cont.id
                  ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange shadow-md shadow-brand-green/20 hover:shadow-brand-orange/30 scale-105"
                  : "border-border/80 dark:border-white/15 bg-background/80 text-foreground hover:border-brand-orange hover:text-brand-orange hover:bg-background"
              }`}
            >
              {ar ? cont.labelAr : cont.labelEn}
            </button>
          ))}
        </div>

        {/* Category & Search */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative min-w-[200px]">
            <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "ابحث بالدولة أو المنتج..." : "Search country or product..."}
              className="w-full rounded-xl border border-foreground/25 bg-background/95 py-1.5 pe-4 ps-9 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
            />
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              className="rounded-xl border border-foreground/25 bg-background/95 px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all flex items-center justify-between gap-2 min-w-[125px]"
            >
              <span>{ar ? (categories.find((c) => c.id === selectedCategory)?.labelAr || "كافة القطاعات") : (categories.find((c) => c.id === selectedCategory)?.labelEn || "All Inquiries")}</span>
              <ChevronDown className={cn("size-3.5 text-muted-foreground transition-transform duration-200", isCategoryOpen && "rotate-180 text-brand-orange")} />
            </button>

            {isCategoryOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsCategoryOpen(false)}
                />
                <div className="absolute start-0 top-full mt-1.5 z-50 min-w-[170px] rounded-xl border border-border bg-background/95 p-1.5 shadow-xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat.id);
                        setIsCategoryOpen(false);
                      }}
                      className={`flex w-full items-center px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer text-start ${
                        selectedCategory === cat.id
                          ? "bg-brand-orange text-white font-bold"
                          : "hover:bg-foreground/5 text-foreground"
                      }`}
                    >
                      {ar ? cat.labelAr : cat.labelEn}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Map Box & Available Countries Panel */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 pt-2">
        {/* Map Canvas */}
        <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-background/40 p-4 shadow-inner backdrop-blur-xl lg:col-span-7 transition-all duration-300">
          {/* Subtle Grid Lines Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
          
          {/* Map Header with Stats */}
          <div className="relative z-10 mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex size-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-sm font-bold text-foreground">
                {ar ? "خريطة انتشار طلبات التجارة الدولية 2025" : "Global Commercial Purchase Requests Map 2025"}
              </h3>
            </div>
          </div>

          {/* Geographic Vector World Map */}
          <GeographicWorldMap
            markers={mapMarkers}
            activeCode={activeCountry?.code ?? null}
            onSelectMarker={handleMarkerSelect}
            ar={ar}
            maxHeightClass="min-h-[360px]"
          />

          {/* Compliance Disclaimer Notice as Glass Box */}
          <div className="mt-3 flex items-start gap-2 rounded-xl border border-white/20 bg-background/50 p-2.5 text-xs text-muted-foreground backdrop-blur-md">
            <AlertCircle className="size-4 shrink-0 text-brand-orange mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold text-foreground">
                {ar ? "تنويه توثيقي رسمي: " : "Official Documentary Notice: "}
              </strong>
              {ar ? TRADE_STATS.legalDisclaimerAr : TRADE_STATS.legalDisclaimerEn}
            </p>
          </div>
        </div>

        {/* Available Countries Panel (Country Name + Flag Only) */}
        <div className="lg:col-span-5 flex flex-col h-full">
          <div className="flex h-full flex-col rounded-2xl border border-white/15 bg-background/50 p-4 sm:p-5 shadow-inner backdrop-blur-xl transition-all duration-300">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-3">
              <div className="flex items-center gap-2">
                <Globe className="size-4 text-brand-orange" />
                <h4 className="text-sm font-bold text-foreground">
                  {ar ? "الدول المتاحة" : "Available Markets"}
                </h4>
              </div>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-bold text-foreground">
                {filteredCountries.length} {ar ? "دولة" : "Countries"}
              </span>
            </div>

            {/* Countries List with Flag Only */}
            <div className="grid grid-cols-2 gap-2 overflow-y-auto max-h-[480px] p-1 pe-1.5">
              {filteredCountries.map((c) => {
                const isSelected = activeCountry?.code === c.code;
                return (
                  <button
                    key={c.code}
                    type="button"
                    onClick={() => handleCountryClick(c)}
                    className={`flex items-center gap-2.5 rounded-xl border px-3 py-2 text-xs font-bold transition-all text-start cursor-pointer ${
                      isSelected
                        ? "border-brand-green bg-brand-green/20 text-brand-green shadow-sm scale-[1.02]"
                        : "border-white/10 bg-white/5 text-foreground hover:border-brand-green/40 hover:bg-white/10"
                    }`}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w80/${c.code.toLowerCase()}.png 2x`}
                      alt={ar ? c.nameAr : c.nameEn}
                      className="h-4 w-6 rounded-[2px] object-cover shadow-xs border border-white/20 shrink-0"
                      loading="lazy"
                    />
                    <span className="truncate leading-normal">
                      {ar ? c.nameAr : c.nameEn}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

