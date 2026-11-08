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
    () => COUNTRY_PROFILES.find((c) => c.code === "SAU") || COUNTRY_PROFILES[0] || null
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

  // Convert lat/lng to approximate SVG viewBox coordinates (equirectangular projection)
  // viewBox: 0 0 1000 500
  // x = ((lng + 180) / 360) * 1000
  // y = ((90 - lat) / 180) * 500
  const getMapCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x: Math.max(20, Math.min(980, x)), y: Math.max(20, Math.min(480, y)) };
  };

  const handleCountryClick = (country: CountryTradeProfile) => {
    setActiveCountry(country);
    if (onSelectCountry) onSelectCountry(country);
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
              className={`rounded-xl border px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer shadow-xs ${
                selectedContinent === cont.id
                  ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-105"
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

          {/* SVG Map Canvas */}
          <div className="relative aspect-[2/1] w-full min-h-[360px] overflow-hidden rounded-2xl bg-background/40 border border-white/15 backdrop-blur-md">
            <svg
              viewBox="0 0 1000 500"
              className="h-full w-full select-none"
              style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.15))" }}
            >
              {/* Simplified world background continents silhouettes */}
              <defs>
                <radialGradient id="landGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.14" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0.06" />
                </radialGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Equator & Meridians Reference Grids */}
              <line x1="0" y1="250" x2="1000" y2="250" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="4 4" />
              <line x1="500" y1="0" x2="500" y2="500" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="4 4" />
              <line x1="250" y1="0" x2="250" y2="500" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
              <line x1="750" y1="0" x2="750" y2="500" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />

              {/* Approximate World Landmass Shapes for Context */}
              {/* North America */}
              <path
                d="M120 70 Q 200 60, 280 80 T 320 180 Q 240 240, 180 200 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />
              {/* South America */}
              <path
                d="M240 240 Q 320 280, 290 400 T 220 440 Q 200 320, 240 240 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />
              {/* Europe */}
              <path
                d="M460 70 Q 560 60, 540 140 T 470 170 Q 440 120, 460 70 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />
              {/* Africa */}
              <path
                d="M470 180 Q 560 170, 570 280 T 520 400 Q 450 320, 470 180 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />
              {/* Asia */}
              <path
                d="M560 60 Q 820 60, 840 200 T 700 300 Q 580 240, 560 60 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />
              {/* Australia */}
              <path
                d="M780 340 Q 880 340, 870 420 T 770 410 Q 760 360, 780 340 Z"
                fill="url(#landGrad)"
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="0.8"
              />

              {/* Country Interactive Flags on Map */}
              {filteredCountries.map((c) => {
                const { x, y } = getMapCoordinates(c.lat, c.lng);
                const isSelected = activeCountry?.code === c.code;

                return (
                  <g
                    key={c.code}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleCountryClick(c)}
                  >
                    {/* Pulsing aura on selected country */}
                    {isSelected && (
                      <>
                        <circle
                          cx={x}
                          cy={y}
                          r={18}
                          fill="none"
                          stroke="var(--brand-green, #10b981)"
                          strokeWidth="2"
                          strokeOpacity="0.8"
                          className="animate-ping"
                        />
                        <circle
                          cx={x}
                          cy={y}
                          r={15}
                          fill="var(--brand-green, #10b981)"
                          fillOpacity="0.25"
                        />
                      </>
                    )}

                    {/* Country National Flag Image on Map */}
                    <rect
                      x={x - (isSelected ? 13 : 9)}
                      y={y - (isSelected ? 9 : 6)}
                      width={isSelected ? 26 : 18}
                      height={isSelected ? 18 : 12}
                      rx={2}
                      fill="#1e293b"
                      stroke={isSelected ? "var(--brand-green, #10b981)" : "rgba(255,255,255,0.7)"}
                      strokeWidth={isSelected ? 1.5 : 0.8}
                    />
                    <image
                      href={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                      x={x - (isSelected ? 13 : 9)}
                      y={y - (isSelected ? 9 : 6)}
                      width={isSelected ? 26 : 18}
                      height={isSelected ? 18 : 12}
                      preserveAspectRatio="none"
                      className="pointer-events-none"
                    />

                    {/* Label for selected or high-inquiry countries */}
                    {(isSelected || c.totalInquiries >= 5) && (
                      <text
                        x={x}
                        y={y - (isSelected ? 14 : 10)}
                        textAnchor="middle"
                        fill={isSelected ? "var(--brand-green, #22c55e)" : "#ffffff"}
                        fontSize={isSelected ? "11" : "9"}
                        fontWeight="bold"
                        className="pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.95)]"
                      >
                        {ar ? c.nameAr : c.nameEn} ({c.totalInquiries})
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

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

