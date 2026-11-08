import React, { useState, useMemo } from "react";
import { 
  Globe, 
  MapPin, 
  Filter, 
  Sparkles, 
  Info, 
  ExternalLink, 
  Search, 
  CheckCircle2, 
  Layers,
  ChevronRight,
  TrendingUp,
  AlertCircle
} from "lucide-react";
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
    <div className="w-full space-y-6">
      {/* Filters Bar */}
      <div className="interactive-card glass-box-interactive flex flex-col gap-4 rounded-3xl p-4 sm:p-5 shadow-lg backdrop-blur-xl md:flex-row md:items-center md:justify-between transition-all duration-300">
        {/* Continent Pills */}
        <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {continents.map((cont) => (
            <button
              key={cont.id}
              type="button"
              onClick={() => setSelectedContinent(cont.id)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all ${
                selectedContinent === cont.id
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-105"
                  : "bg-white/10 text-foreground/80 hover:bg-white/20 hover:text-foreground"
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

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-xl border border-foreground/25 bg-background/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-sm hover:border-brand-orange focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 cursor-pointer transition-all"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id} className="bg-background text-foreground">
                {ar ? cat.labelAr : cat.labelEn}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Map Box & Country Drawer */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Map Canvas */}
        <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-background/50 p-4 shadow-2xl backdrop-blur-2xl lg:col-span-8 interactive-card glass-box-interactive transition-all duration-300">
          {/* Subtle Grid Lines Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04]" />
          
          {/* Map Header with Stats */}
          <div className="relative z-10 mb-2 flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex size-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-sm font-bold text-foreground">
                {ar ? "خريطة انتشار طلبات التجارة الدولية 2025" : "Global Commercial Purchase Requests Map 2025"}
              </h3>
              <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                {filteredCountries.length} {ar ? "دولة نشطة" : "Active Markets"}
              </span>
            </div>

            {/* Marker Legend */}
            <div className="flex items-center gap-3 text-[11px] text-foreground/80 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-500" />
                {ar ? "تمور" : "Dates"}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-brand-orange" />
                {ar ? "سلع غذائية" : "Food Products"}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="size-2.5 rounded-full bg-teal-500 ring-2 ring-white/30" />
                {ar ? "مشترك" : "Both"}
              </span>
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

              {/* Country Interactive Pins */}
              {filteredCountries.map((c) => {
                const { x, y } = getMapCoordinates(c.lat, c.lng);
                const isSelected = activeCountry?.code === c.code;
                const isBoth = c.dateInquiriesCount > 0 && c.diversifiedInquiriesCount > 0;
                const isDateOnly = c.dateInquiriesCount > 0 && c.diversifiedInquiriesCount === 0;

                const pinColor = isBoth
                  ? "#0d9488" // teal for both
                  : isDateOnly
                  ? "#10b981" // emerald green for dates
                  : "#ea580c"; // brand orange for food commodities

                const size = isSelected ? 12 : Math.min(10, Math.max(5, Math.sqrt(c.totalInquiries) * 2.5));

                return (
                  <g
                    key={c.code}
                    className="cursor-pointer transition-all duration-300"
                    onClick={() => handleCountryClick(c)}
                  >
                    {/* Pulsing ring on selected country */}
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={y}
                        r={size + 8}
                        fill="none"
                        stroke={pinColor}
                        strokeWidth="1.5"
                        strokeOpacity="0.8"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer glow aura */}
                    <circle
                      cx={x}
                      cy={y}
                      r={size + 4}
                      fill={pinColor}
                      fillOpacity={isSelected ? "0.4" : "0.2"}
                    />

                    {/* Main marker circle */}
                    <circle
                      cx={x}
                      cy={y}
                      r={size}
                      fill={pinColor}
                      stroke="#ffffff"
                      strokeWidth={isSelected ? "2" : "1"}
                      className="hover:scale-125 transition-transform"
                    />

                    {/* Label for high-inquiry or active countries */}
                    {(isSelected || c.totalInquiries >= 5) && (
                      <text
                        x={x}
                        y={y - size - 4}
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize={isSelected ? "11" : "9"}
                        fontWeight={isSelected ? "bold" : "600"}
                        className="pointer-events-none drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                      >
                        {c.flag} {ar ? c.nameAr : c.nameEn} ({c.totalInquiries})
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Quick Map Controls Floating in Bottom Corner */}
            <div className="absolute bottom-3 end-3 flex items-center gap-1.5 rounded-full border border-white/20 bg-background/80 px-3 py-1 text-[11px] text-foreground backdrop-blur-md shadow-md">
              <Globe className="size-3.5 text-brand-orange" />
              <span>{filteredCountries.length} / 47 {ar ? "دولة مدرجة" : "Countries"}</span>
            </div>
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

        {/* Selected Country Profile Drawer */}
        <div className="lg:col-span-4 flex flex-col">
          {activeCountry ? (
            <div className="interactive-card glass-box-interactive flex h-full flex-col justify-between rounded-3xl border border-white/20 bg-background/70 p-5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/10 transition-all duration-300">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" role="img" aria-label={activeCountry.nameEn}>
                      {activeCountry.flag}
                    </span>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {ar ? activeCountry.nameAr : activeCountry.nameEn}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {ar ? activeCountry.continentAr : activeCountry.continent} • {activeCountry.flag}
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-bold text-brand-orange">
                    {activeCountry.totalInquiries} {ar ? "طلب شراء" : "Purchase Requests"}
                  </span>
                </div>

                {/* Inquiries Breakdown */}
                <div className="grid grid-cols-2 gap-2 py-4">
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-3">
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {ar ? "تمور ومنتجاتها" : "Dates & Products"}
                    </span>
                    <p className="mt-1 text-xl font-black text-foreground">
                      {activeCountry.dateInquiriesCount} <span className="text-xs font-semibold text-muted-foreground">{ar ? "طلب شراء" : "requests"}</span>
                    </p>
                  </div>
                  <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/10 p-3">
                    <span className="text-[11px] font-bold text-brand-orange">
                      {ar ? "سلع غذائية" : "Food Commodities"}
                    </span>
                    <p className="mt-1 text-xl font-black text-foreground">
                      {activeCountry.diversifiedInquiriesCount} <span className="text-xs font-semibold text-muted-foreground">{ar ? "طلب شراء" : "requests"}</span>
                    </p>
                  </div>
                </div>

                {/* Requested Products */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    {ar ? "أبرز المنتجات المطلوبة:" : "Requested Products:"}
                  </h5>
                  <div className="flex flex-wrap gap-1.5 max-h-36 overflow-y-auto p-1">
                    {activeCountry.products.slice(0, 8).map((prod, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-white/15 bg-white/10 px-2.5 py-1 text-xs font-medium text-foreground"
                      >
                        {prod}
                      </span>
                    ))}
                    {activeCountry.products.length > 8 && (
                      <span className="rounded-lg bg-white/5 px-2 py-1 text-[11px] text-muted-foreground">
                        +{activeCountry.products.length - 8} {ar ? "منتجات أخرى" : "more"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Documented Quantities if any */}
                {activeCountry.documentedQuantities.length > 0 && (
                  <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-3">
                    <h5 className="text-xs font-bold text-brand-orange mb-1 flex items-center gap-1.5">
                      <TrendingUp className="size-3.5" />
                      {ar ? "كميات مسجلة موثقة:" : "Documented Quantities:"}
                    </h5>
                    <ul className="space-y-1 text-xs text-foreground/90">
                      {activeCountry.documentedQuantities.slice(0, 3).map((q, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="size-1 rounded-full bg-brand-orange" />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-3 border-t border-border/40">
                <a
                  href="#market-directory"
                  onClick={() => handleCountryClick(activeCountry)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-green px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-brand-orange hover:-translate-y-0.5 active:scale-95"
                >
                  <span>{ar ? "عرض الملف التجاري الكامل للدولة" : "View Full Country Profile"}</span>
                  <ChevronRight className="size-4 rtl:rotate-180" />
                </a>
              </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/20 p-6 text-center text-muted-foreground">
              <Globe className="size-10 text-muted-foreground/50 mb-2" />
              <p className="text-sm">
                {ar ? "اختر أي دولة من الخريطة لمعاينة ملفها التجاري" : "Select a country from the map to view details"}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

