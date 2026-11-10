import React, { useState, useMemo } from "react";
import { Globe, Search, AlertCircle, MapPin, Building, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { APPAREL_MARKETS, ApparelMarket } from "@/lib/apparel-trade-data";

interface ApparelWorldMapProps {
  ar?: boolean;
  onSelectMarket?: (market: ApparelMarket) => void;
}

export function ApparelWorldMap({ ar = true, onSelectMarket }: ApparelWorldMapProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeMarket, setActiveMarket] = useState<ApparelMarket | null>(
    () => APPAREL_MARKETS.find((m) => m.code === "SAU") || APPAREL_MARKETS[0] || null
  );

  const regions = useMemo(
    () => [
      { id: "all", labelAr: "كافة المناطق (20 سوقًا)", labelEn: "All Regions (20 Markets)" },
      { id: "arab_north_africa", labelAr: "الدول العربية وشمال إفريقيا", labelEn: "Arab & North Africa" },
      { id: "africa", labelAr: "إفريقيا جنوب الصحراء", labelEn: "Sub-Saharan Africa" },
      { id: "europe", labelAr: "أوروبا", labelEn: "Europe" },
      { id: "other", labelAr: "وجهات أخرى", labelEn: "Other Destinations" },
    ],
    []
  );

  const filteredMarkets = useMemo(() => {
    return APPAREL_MARKETS.filter((m) => {
      const matchRegion = selectedRegion === "all" || m.region === selectedRegion;
      const matchSearch =
        !searchQuery ||
        m.nameAr.includes(searchQuery) ||
        m.nameEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.productsOfInterestAr.some((p) => p.includes(searchQuery)) ||
        m.productsOfInterestEn.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery]);

  const handleSelect = (market: ApparelMarket) => {
    setActiveMarket(market);
    if (onSelectMarket) onSelectMarket(market);
  };

  // Convert lat/lng to approximate SVG coordinates (equirectangular projection: viewBox 0 0 1000 500)
  const getCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x: Math.max(10, Math.min(990, x)), y: Math.max(10, Math.min(490, y)) };
  };

  return (
    <div className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الثالث: خريطة الانتشار التصديري" : "Section 3: Export Footprint Map"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "خريطة انتشار وتصدير الملابس والمنسوجات" : "Global Apparel & Textile Export Footprint"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "تغطية جغرافية موثقة عبر 20 دولة وسوقًا دوليًا لطلبات تصنيع وتوريد الملابس الجاهزة والمنسوجات المصرية."
            : "Documented global coverage across 20 international destination markets for Egyptian apparel, knitwear, and textile manufacturing inquiries."}
        </p>
      </div>

      {/* Disclaimers Box */}
      <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 space-y-2 text-xs text-muted-foreground">
        <div className="flex items-start gap-2">
          <AlertCircle className="size-4 shrink-0 text-brand-orange mt-0.5" />
          <p>
            <strong className="text-foreground">{ar ? "تنويه توثيقي بشأن إقليم كردستان:" : "Documentation Note (Kurdistan Region):"}</strong>{" "}
            {ar
              ? "تم إدراج إقليم كردستان العراق كمنطقة تعامل تجاري مستقلة نظرًا لطبيعة متطلبات المشترين وشروط الشحن والمطابقة الخاصة بالسوق الإقليمي."
              : "Iraqi Kurdistan is catalogued as an independent commercial interaction zone due to specific buyer procurement requirements and regional logistics protocols."}
          </p>
        </div>
        <div className="flex items-start gap-2">
          <AlertCircle className="size-4 shrink-0 text-brand-orange mt-0.5" />
          <p>
            <strong className="text-foreground">{ar ? "تنويه توثيقي بشأن مناطق 1948 / تل أبيب:" : "Documentation Note (1948 Areas / Tel Aviv):"}</strong>{" "}
            {ar
              ? "تم إدراج تل أبيب لتوثيق محادثة تجارية تاريخية واردة من مشترٍ في مناطق 1948 عبر الوسط التجاري هناك لأغراض التوثيق الإحصائي فقط."
              : "Tel Aviv is listed strictly to document an incoming commercial inquiry from a buyer in the 1948 territories through local commercial channels for archival completeness."}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between pt-2">
        {/* Region Pills */}
        <div className="flex flex-wrap items-center gap-2">
          {regions.map((reg) => (
            <button
              key={reg.id}
              type="button"
              onClick={() => setSelectedRegion(reg.id)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer border",
                selectedRegion === reg.id
                  ? "bg-foreground text-background border-foreground shadow-sm"
                  : "bg-background/80 text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              )}
            >
              {ar ? reg.labelAr : reg.labelEn}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full lg:w-64">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ar ? "ابحث بدولة أو منتج ملابس..." : "Search country or product..."}
            className="w-full rounded-full border border-border bg-background/90 ps-9 pe-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </div>
      </div>

      {/* SVG Interactive Map Container */}
      <div className="relative w-full rounded-2xl border border-border/80 bg-gradient-to-b from-muted/20 to-muted/40 p-4 overflow-hidden">
        <svg viewBox="0 0 1000 500" className="w-full h-auto max-h-[460px] drop-shadow-sm select-none">
          <defs>
            <radialGradient id="mapPinGlowApparel" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Stylized Minimal Continental Grid */}
          <g opacity="0.15" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3,3">
            <line x1="0" y1="125" x2="1000" y2="125" />
            <line x1="0" y1="250" x2="1000" y2="250" />
            <line x1="0" y1="375" x2="1000" y2="375" />
            <line x1="250" y1="0" x2="250" y2="500" />
            <line x1="500" y1="0" x2="500" y2="500" />
            <line x1="750" y1="0" x2="750" y2="500" />
          </g>

          {/* Stylized World Continents Background Path */}
          <path
            d="M150,120 Q180,80 280,100 Q320,130 260,200 Q200,240 160,200 Z 
               M220,260 Q280,270 300,340 Q280,440 220,430 Q190,360 220,260 Z
               M460,90 Q540,80 560,140 Q520,170 470,160 Q450,120 460,90 Z
               M460,180 Q560,180 580,260 Q550,380 480,360 Q440,280 460,180 Z
               M600,80 Q850,70 880,180 Q820,260 680,220 Q600,160 600,80 Z
               M740,320 Q860,310 870,400 Q800,430 740,380 Z"
            fill="currentColor"
            opacity="0.06"
          />

          {/* Connection Lines from Egypt (approx x=587, y=194) to active markets */}
          {filteredMarkets.map((m) => {
            const coords = getCoordinates(m.lat, m.lng);
            const isSelected = activeMarket?.code === m.code;
            return (
              <line
                key={`line-${m.code}`}
                x1={587}
                y1={194}
                x2={coords.x}
                y2={coords.y}
                stroke={isSelected ? "#ff7a00" : "currentColor"}
                strokeWidth={isSelected ? "1.5" : "0.5"}
                strokeDasharray={isSelected ? "none" : "2,3"}
                opacity={isSelected ? 0.8 : 0.2}
                className="transition-all duration-300"
              />
            );
          })}

          {/* Egypt Central Hub Marker */}
          <g transform="translate(587, 194)">
            <circle r="9" fill="#10b981" opacity="0.3" className="animate-ping" />
            <circle r="5" fill="#10b981" stroke="#ffffff" strokeWidth="1.5" />
          </g>

          {/* Destination Markers */}
          {filteredMarkets.map((m) => {
            const { x, y } = getCoordinates(m.lat, m.lng);
            const isSelected = activeMarket?.code === m.code;
            return (
              <g
                key={`pin-${m.code}`}
                transform={`translate(${x}, ${y})`}
                onClick={() => handleSelect(m)}
                className="cursor-pointer group"
              >
                {isSelected && (
                  <circle r="16" fill="url(#mapPinGlowApparel)" className="animate-pulse" />
                )}
                <circle
                  r={isSelected ? "7" : "4.5"}
                  fill={isSelected ? "#ff7a00" : "#3b82f6"}
                  stroke="#ffffff"
                  strokeWidth={isSelected ? "2" : "1"}
                  className="transition-all duration-300 group-hover:scale-125"
                />
                <text
                  x="0"
                  y="-10"
                  textAnchor="middle"
                  className={cn(
                    "text-[9px] font-bold fill-foreground pointer-events-none transition-opacity",
                    isSelected ? "opacity-100 font-extrabold" : "opacity-0 group-hover:opacity-100"
                  )}
                >
                  {ar ? m.nameAr : m.nameEn}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground border-t border-border/50 pt-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-emerald-500" />
              <span>{ar ? "مصر (مركز التصنيع والتصدير)" : "Egypt (Manufacturing & Export Hub)"}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-blue-500" />
              <span>{ar ? "أسواق الوجهة التصديرية (20 سوقًا)" : "Destination Markets (20 Markets)"}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-brand-orange" />
              <span>{ar ? "السوق المحدد" : "Selected Market"}</span>
            </span>
          </div>
          <span className="font-medium">
            {ar ? `المعروض: ${filteredMarkets.length} من 20 سوقًا` : `Showing: ${filteredMarkets.length} of 20 markets`}
          </span>
        </div>
      </div>

      {/* Selected Market Detail Card */}
      {activeMarket && (
        <div className="rounded-2xl border border-border bg-background/80 p-5 backdrop-blur-xl shadow-lg animate-in fade-in duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl select-none">{activeMarket.flag}</span>
              <div>
                <h3 className="text-lg font-bold text-foreground">
                  {ar ? activeMarket.nameAr : activeMarket.nameEn}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {ar ? activeMarket.regionNameAr : activeMarket.regionNameEn}
                  {activeMarket.parentCountryNoteAr && (
                    <span className="text-brand-orange font-medium ms-1">
                      ({ar ? activeMarket.parentCountryNoteAr : activeMarket.parentCountryNoteEn})
                    </span>
                  )}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-1.5">
              {activeMarket.manufacturingModels.map((m, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-border/80 bg-secondary/80 px-2.5 py-1 text-[11px] font-semibold text-foreground"
                >
                  {m}
                </span>
              ))}
              {activeMarket.supplyTerms.map((t, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-[11px] font-bold text-brand-green"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div>
              <span className="font-bold text-muted-foreground block text-[11px] uppercase tracking-wider mb-1">
                {ar ? "أبرز منتجات الاهتمام والطلب:" : "Products of Interest:"}
              </span>
              <ul className="space-y-1">
                {(ar ? activeMarket.productsOfInterestAr : activeMarket.productsOfInterestEn).map((p, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-foreground font-medium">
                    <span className="size-1 rounded-full bg-brand-orange" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold text-muted-foreground block text-[11px] uppercase tracking-wider mb-1">
                {ar ? "فئات المشترين والمستوردين:" : "Client & Importer Profiles:"}
              </span>
              <ul className="space-y-1">
                {(ar ? activeMarket.clientTypesAr : activeMarket.clientTypesEn).map((c, i) => (
                  <li key={i} className="flex items-center gap-1.5 text-foreground font-medium">
                    <span className="size-1 rounded-full bg-brand-green" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="font-bold text-muted-foreground block text-[11px] uppercase tracking-wider mb-1">
                {ar ? "طبيعة طلبات الشراء وملاحظات السوق:" : "Inquiry Nature & Market Notes:"}
              </span>
              <p className="text-foreground/90 font-medium leading-relaxed">
                {ar ? activeMarket.marketNotesAr : activeMarket.marketNotesEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

