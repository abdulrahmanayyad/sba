import React, { useState, useMemo } from "react";
import { ApparelFlag, getApparelFlagIso2 } from "./apparel-flag";
import { cn } from "@/lib/utils";
import { APPAREL_MARKETS, ApparelMarket } from "@/lib/apparel-trade-data";
import { GeographicMapMarker, GeographicWorldMap } from "../geographic-world-map";

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

  const mapMarkers = useMemo<GeographicMapMarker[]>(
    () =>
      filteredMarkets.map((m) => ({
        code: m.code,
        isoCode:
          m.code === "IRQ-KRD"
            ? undefined
            : m.code === "ISR-TLV"
              ? "ISR"
              : m.code,
        flagIso2: getApparelFlagIso2(m.code),
        nameAr: m.nameAr,
        nameEn: m.nameEn,
        lat: m.lat,
        lng: m.lng,
      })),
    [filteredMarkets],
  );

  const handleMarkerSelect = (code: string) => {
    const matched = filteredMarkets.find((m) => m.code === code) || APPAREL_MARKETS.find((m) => m.code === code);
    if (matched) handleSelect(matched);
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
        <div>
          <p>
            <strong className="text-foreground">{ar ? "تنويه توثيقي بشأن إقليم كردستان:" : "Documentation Note (Kurdistan Region):"}</strong>{" "}
            {ar
              ? "تم إدراج إقليم كردستان العراق كمنطقة تعامل تجاري مستقلة نظرًا لطبيعة متطلبات المشترين وشروط الشحن والمطابقة الخاصة بالسوق الإقليمي."
              : "Iraqi Kurdistan is catalogued as an independent commercial interaction zone due to specific buyer procurement requirements and regional logistics protocols."}
          </p>
        </div>
        <div>
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
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ar ? "ابحث بدولة أو منتج ملابس..." : "Search country or product..."}
            className="w-full rounded-full border border-border bg-background/90 px-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
          />
        </div>
      </div>

      {/* Interactive Geographic Vector World Map */}
      <div className="relative w-full rounded-2xl border border-border/80 bg-background/50 p-3 sm:p-4 overflow-hidden">
        <GeographicWorldMap
          markers={mapMarkers}
          activeCode={activeMarket?.code ?? null}
          onSelectMarker={handleMarkerSelect}
          ar={ar}
          maxHeightClass="max-h-[460px]"
        />

        {/* Legend & Market Counter */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[11px] text-muted-foreground border-t border-border/50 pt-3">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-emerald-500" />
              <span>{ar ? "مصر (مركز التصنيع والتصدير)" : "Egypt (Manufacturing & Export Hub)"}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-teal-700" />
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
              <ApparelFlag
                codeOrName={activeMarket.code}
                alt={ar ? activeMarket.nameAr : activeMarket.nameEn}
                className="h-6 w-9"
              />
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

