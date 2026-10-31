import { useState } from "react";
import { Building2, Leaf, Shirt, Wheat, Globe, CheckCircle2, MapPin, Sparkles, Plus, Minus, Layers, X } from "lucide-react";

import { HomeReveal as Reveal } from "@/components/home/home-motion";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { cn } from "@/lib/utils";
import { activities, dashboardSectors, targetMarkets, type SectorId } from "./dashboard-data";

const icons: Record<SectorId, typeof Leaf> = {
  construction: Building2,
  environmental: Leaf,
  garment: Shirt,
  food: Wheat,
};

const aggregateStats = [
  {
    value: "+100",
    labelEn: "Documented Projects & Works Delivered",
    labelAr: "مشروعًا وعملًا موثقًا تم تنفيذه",
    subEn: "Across general contracting, real estate development and environmental systems.",
    subAr: "في المقاولات العامة والتطوير العقاري والأنظمة البيئية.",
    sector: "construction" as SectorId,
  },
  {
    value: "+20,000",
    labelEn: "Apparel Styles & Garment Designs",
    labelAr: "موديل وتصميم ملابس تم تطويره",
    subEn: "Through specialized product development and ready-to-wear production lines.",
    subAr: "عبر أنشطة تطوير المنتجات المتخصصة وخطوط تصنيع الملابس الجاهزة.",
    sector: "garment" as SectorId,
  },
  {
    value: "+10M",
    labelEn: "USD Overall Historic Business Volume",
    labelAr: "دولار إجمالي حجم الأعمال التاريخي",
    subEn: "Delivered across construction, environmental services, and industrial manufacturing.",
    subAr: "في المقاولات والخدمات البيئية والتصنيع الصناعي.",
    sector: "environmental" as SectorId,
  },
  {
    value: "4",
    labelEn: "Core Strategic Integrated Sectors",
    labelAr: "قطاعات استراتيجية متكاملة",
    subEn: "Contracting, sustainable environment, garment manufacturing, and natural products.",
    subAr: "المقاولات، والبيئة المستدامة، وتصنيع الملابس، والمنتجات الطبيعية.",
    sector: "food" as SectorId,
  },
];

// Partner countries list — ONLY the countries SBA operates in
interface PartnerCountry {
  nameEn: string;
  nameAr: string;
  flag: string;
  capitalEn: string;
  capitalAr: string;
  coords: string;
  roleAr: string;
  roleEn: string;
  x: number; // percentage in view (0-100)
  y: number; // percentage in view (0-100)
}

const partnerCountries: PartnerCountry[] = [
  {
    nameEn: "Egypt",
    nameAr: "مصر",
    flag: "🇪🇬",
    capitalEn: "Cairo",
    capitalAr: "القاهرة",
    coords: "30.0444° N, 31.2357° E",
    roleAr: "المقر الرئيسي والمصانع ومراكز التطوير والمشروعات الإنشائية الكبرى",
    roleEn: "Group Headquarters, Industrial Facilities & Core Projects",
    x: 58,
    y: 52,
  },
  {
    nameEn: "Turkey",
    nameAr: "تركيا",
    flag: "🇹🇷",
    capitalEn: "Istanbul",
    capitalAr: "إسطنبول",
    coords: "41.0082° N, 28.9784° E",
    roleAr: "شراكات توريد الأقمشة وتطوير الموديلات والتصنيع المشترك",
    roleEn: "Textile Sourcing, Model Development & Sourcing Hub",
    x: 60,
    y: 32,
  },
  {
    nameEn: "France",
    nameAr: "فرنسا",
    flag: "🇫🇷",
    capitalEn: "Paris",
    capitalAr: "باريس",
    coords: "48.8566° N, 2.3522° E",
    roleAr: "سوق تصدير لمنتجات الملابس الفاخرة والعلامات التجارية",
    roleEn: "Export Market for Premium Apparel & Fashion Brands",
    x: 36,
    y: 22,
  },
  {
    nameEn: "Italy",
    nameAr: "إيطاليا",
    flag: "🇮🇹",
    capitalEn: "Rome",
    capitalAr: "روما",
    coords: "41.9028° N, 12.4964° E",
    roleAr: "مركز شراكات التصميم والأزياء والتبادل التجاري الأوروبي",
    roleEn: "European Fashion Design & Commercial Trade Hub",
    x: 44,
    y: 30,
  },
  {
    nameEn: "Kuwait",
    nameAr: "الكويت",
    flag: "🇰🇼",
    capitalEn: "Kuwait City",
    capitalAr: "مدينة الكويت",
    coords: "29.3759° N, 47.9774° E",
    roleAr: "سوق خليجي رئيسي لتوريد وتوزيع المنتجات والشراكات التجارية",
    roleEn: "GCC Supply Chain & Regional Distribution Partner",
    x: 74,
    y: 48,
  },
  {
    nameEn: "Libya",
    nameAr: "ليبيا",
    flag: "🇱🇾",
    capitalEn: "Tripoli",
    capitalAr: "طرابلس",
    coords: "32.8872° N, 13.1913° E",
    roleAr: "شراكات تجارية وإمدادات مشروعات الإعمار والمقاولات",
    roleEn: "Trading Partnerships & Infrastructure Project Supplies",
    x: 48,
    y: 52,
  },
  {
    nameEn: "Algeria",
    nameAr: "الجزائر",
    flag: "🇩🇿",
    capitalEn: "Algiers",
    capitalAr: "الجزائر",
    coords: "36.7538° N, 3.0588° E",
    roleAr: "توزيع وتجارة المنتجات وشراكات إقليمية بشمال أفريقيا",
    roleEn: "North Africa Distribution & Regional Commerce",
    x: 35,
    y: 50,
  },
  {
    nameEn: "Morocco",
    nameAr: "المغرب",
    flag: "🇲🇦",
    capitalEn: "Rabat / Casablanca",
    capitalAr: "الرباط / الدار البيضاء",
    coords: "33.5731° N, -7.5898° E",
    roleAr: "تعاون تصنيعي وتجاري وتبادل منتجات مستدامة",
    roleEn: "Manufacturing Cooperation & Sustainable Product Exchange",
    x: 24,
    y: 46,
  },
  {
    nameEn: "Mauritania",
    nameAr: "موريتانيا",
    flag: "🇲🇷",
    capitalEn: "Nouakchott",
    capitalAr: "نواكشوط",
    coords: "18.0735° N, -15.9582° E",
    roleAr: "منفذ للتجارة الإقليمية وتوريد المنتجات لغرب أفريقيا",
    roleEn: "West African Regional Trade & Product Gateway",
    x: 18,
    y: 64,
  },
];

export function BusinessDashboard({ ar }: { ar: boolean }) {
  const [selectedCountry, setSelectedCountry] = useState<PartnerCountry | null>(null);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const mapType = "roadmap" as const;

  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  const card = "rounded-3xl border border-white/20 bg-background/80 p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-brand-orange/40 active:scale-[0.99] cursor-pointer";

  const activeCountry = selectedCountry ?? (hoveredCountry ? partnerCountries.find((c) => c.nameEn === hoveredCountry) ?? null : null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 2));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 0.85));

  return (
    <section id="business-numbers" aria-labelledby="dash-heading" className="bg-page-alt pt-16 pb-4 scroll-mt-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute -top-40 start-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-green/5 blur-3xl rounded-full" />

      <div className="site-container relative z-10">
        <Reveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-3.5 py-1 text-xs font-medium tracking-wide text-muted-foreground backdrop-blur-md mb-3">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            {ar ? "أداء المجموعة ورؤى الأعمال" : "Group Performance & Business Insights"}
          </div>
          <h2 id="dash-heading" className="section-title">
            {ar ? "أعمالنا في أرقام" : "Our Business in Numbers"}
          </h2>
          <p className="section-intro mt-4">
            {ar ? (
              <span>تعرّف على حجم عملياتنا المتكاملة، والمشروعات الموثقة التي ننفذها، والأسواق التي نخدمها عبر قطاعات <span className="text-brand-orange">مجموعة سامي بن عياد</span>.</span>
            ) : (
              <span>Explore the scale of our integrated operations, documented projects delivered, and markets served across <span className="text-brand-orange">SAMI BIN AYYAD GROUP</span>.</span>
            )}
          </p>
        </Reveal>

        {/* Aggregated Group Statistics Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {aggregateStats.map((stat, idx) => {
            const Icon = icons[stat.sector];
            return (
              <div
                key={idx}
                className={cn(card, "flex flex-col justify-between group")}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green-text transition-transform duration-300 group-hover:scale-110">
                      <Icon className="size-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-muted-foreground/70 border border-border/60 rounded-full px-2.5 py-0.5">
                      0{idx + 1}
                    </span>
                  </div>
                  {/* Milestones-style gradient and font size */}
                  <div
                    className={cn(
                      "font-head drop-shadow-sm flex items-center gap-1 text-start",
                      (stat.sector === "construction" || stat.sector === "garment")
                        ? "text-2xl sm:text-3xl font-black text-brand-orange tracking-tight"
                        : "text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500"
                    )}
                    dir={ar ? "rtl" : "ltr"}
                  >
                    <AnimatedStatistic value={stat.value} />
                  </div>
                  <h3 className="mt-3 text-sm sm:text-base font-bold text-foreground">
                    {ar ? stat.labelAr : stat.labelEn}
                  </h3>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground border-t border-border/50 pt-3">
                  {ar ? stat.subAr : stat.subEn}
                </p>
              </div>
            );
          })}
        </div>

        {/* Geographic Presence & Realistic Google Maps */}
        <div className={cn(card, "mt-8")}>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <div className="space-y-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "أسواقنا" : "Our Markets"}</span>
              </span>
              <h3 className="text-xl font-bold font-head">
                {ar ? "أسواقنا وحضورنا الدولي" : "Our Markets & International Reach"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {ar ? "خريطة تفاعلية توضح شبكة الأسواق الدولية المعتمدة التي نتعامل معها." : "Interactive map showcasing the verified international partner markets we exclusively operate with."}
              </p>
            </div>

            {activeCountry && (
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 px-3.5 py-1.5 text-xs font-bold text-brand-orange animate-in fade-in zoom-in-95 duration-200">
                <span className="text-base">{activeCountry.flag}</span>
                <span>{ar ? activeCountry.nameAr : activeCountry.nameEn}</span>
                <span className="text-[10px] text-muted-foreground font-mono">({activeCountry.coords})</span>
              </span>
            )}
          </div>

          <div className="mt-6 space-y-6">
            {/* Realistic Google Maps Interactive Canvas — Full Width */}
            <div
              className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.4/1] w-full overflow-hidden rounded-2xl border border-[#d0d7de] bg-[#aad3df] shadow-inner select-none transition-colors duration-500"
              role="region"
              aria-label={ar ? "خريطة Google التفاعلية لأسواقنا" : "Interactive Google Maps of our markets"}
            >
              {/* Clean Map Badge indicator */}
              <div className="absolute start-3 top-3 z-30 flex items-center gap-2 rounded-lg border border-black/15 bg-white/95 px-3 py-1.5 shadow-md text-xs font-bold text-slate-800 backdrop-blur-sm">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "خريطة الأسواق المعتمدة" : "Verified Markets Map"}</span>
              </div>

              {/* Realistic Google Maps Vector Geography */}
              <div
                className="absolute inset-0 size-full transition-transform duration-700 ease-out"
                style={{
                  transform: `scale(${zoom}) ${activeCountry ? `translate(${(50 - activeCountry.x) * 0.3}%, ${(45 - activeCountry.y) * 0.3}%)` : ""}`,
                  transformOrigin: "center center",
                }}
              >
                <svg
                  viewBox="0 0 1000 600"
                  className="size-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Subtle Google Maps coordinate grid lines */}
                  <defs>
                    <pattern id="gmap-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path
                        d="M 60 0 L 0 0 0 60"
                        fill="none"
                        stroke={mapType === "roadmap" ? "rgba(180, 210, 225, 0.45)" : "rgba(255, 255, 255, 0.08)"}
                        strokeWidth="0.8"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#gmap-grid)" />

                  {/* Landmass Outlines with Realistic Google Maps Palettes */}
                  {/* Europe */}
                  <path
                    d="M260,110 Q320,60 410,70 Q490,50 560,90 Q620,120 590,170 Q540,200 500,190 Q460,225 430,215 Q390,200 360,170 Q300,180 260,140 Z"
                    fill={mapType === "roadmap" ? "#f5f3f0" : "#2d3748"}
                    stroke={mapType === "roadmap" ? "#d9d6cb" : "#4a5568"}
                    strokeWidth="1.2"
                  />
                  {/* France Highlight contour */}
                  <path
                    d="M360,130 Q420,120 435,160 Q410,200 375,185 Q350,160 360,130 Z"
                    fill={activeCountry?.nameEn === "France" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#edf5e5" : "#374151")}
                    stroke={activeCountry?.nameEn === "France" ? "#1a73e8" : (mapType === "roadmap" ? "#d0d9cd" : "#4b5563")}
                    strokeWidth={activeCountry?.nameEn === "France" ? 2 : 1}
                  />
                  {/* Italy Peninsula */}
                  <path
                    d="M455,165 Q485,180 475,230 Q455,240 450,210 Q450,175 455,165 Z"
                    fill={activeCountry?.nameEn === "Italy" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#edf5e5" : "#374151")}
                    stroke={activeCountry?.nameEn === "Italy" ? "#1a73e8" : (mapType === "roadmap" ? "#d0d9cd" : "#4b5563")}
                    strokeWidth={activeCountry?.nameEn === "Italy" ? 2 : 1}
                  />
                  {/* Turkey / Anatolia */}
                  <path
                    d="M540,165 Q625,150 645,185 Q610,215 550,205 Q530,185 540,165 Z"
                    fill={activeCountry?.nameEn === "Turkey" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#f3ecd8" : "#3f3f46")}
                    stroke={activeCountry?.nameEn === "Turkey" ? "#1a73e8" : (mapType === "roadmap" ? "#d9d0b8" : "#52525b")}
                    strokeWidth={activeCountry?.nameEn === "Turkey" ? 2 : 1}
                  />
                  {/* North Africa & Sahara */}
                  <path
                    d="M170,230 Q330,210 470,230 Q540,240 580,280 Q560,370 480,430 Q330,460 210,410 Q160,320 170,230 Z"
                    fill={mapType === "roadmap" ? "#fbf5eb" : "#443428"}
                    stroke={mapType === "roadmap" ? "#e5ded2" : "#5c4838"}
                    strokeWidth="1.2"
                  />
                  {/* Morocco & Atlas */}
                  <path
                    d="M200,240 Q260,235 270,280 Q230,310 200,280 Z"
                    fill={activeCountry?.nameEn === "Morocco" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#f2ede2" : "#4a3c30")}
                    stroke={activeCountry?.nameEn === "Morocco" ? "#1a73e8" : "#d9d0c0"}
                    strokeWidth={activeCountry?.nameEn === "Morocco" ? 2 : 1}
                  />
                  {/* Algeria */}
                  <path
                    d="M275,240 Q380,235 385,320 Q330,350 275,310 Z"
                    fill={activeCountry?.nameEn === "Algeria" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#f7f1e4" : "#4e3f32")}
                    stroke={activeCountry?.nameEn === "Algeria" ? "#1a73e8" : "#ded5c4"}
                    strokeWidth={activeCountry?.nameEn === "Algeria" ? 2 : 1}
                  />
                  {/* Libya */}
                  <path
                    d="M390,240 Q495,240 495,330 Q440,350 390,320 Z"
                    fill={activeCountry?.nameEn === "Libya" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#f8f2e5" : "#534436")}
                    stroke={activeCountry?.nameEn === "Libya" ? "#1a73e8" : "#ded5c4"}
                    strokeWidth={activeCountry?.nameEn === "Libya" ? 2 : 1}
                  />
                  {/* Egypt & Nile River Valley Greenery */}
                  <path
                    d="M500,250 Q600,250 605,330 Q540,360 500,335 Z"
                    fill={activeCountry?.nameEn === "Egypt" ? (mapType === "roadmap" ? "#d2e3fc" : "#1a365d") : (mapType === "roadmap" ? "#fdf8ee" : "#5a4a3c")}
                    stroke={activeCountry?.nameEn === "Egypt" ? "#1a73e8" : "#d9d0be"}
                    strokeWidth={activeCountry?.nameEn === "Egypt" ? 2.5 : 1.2}
                  />
                  {/* Nile Delta & River in Egypt */}
                  <path
                    d="M570,255 L575,275 L565,315"
                    fill="none"
                    stroke={mapType === "roadmap" ? "#2e7d32" : "#48bb78"}
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="opacity-75"
                  />
                  {/* Arabian Peninsula */}
                  <path
                    d="M620,260 Q690,230 750,270 Q770,360 690,410 Q640,360 620,260 Z"
                    fill={mapType === "roadmap" ? "#f8f0e0" : "#534333"}
                    stroke={mapType === "roadmap" ? "#e2d7c5" : "#6b5844"}
                    strokeWidth="1.2"
                  />
                  {/* Kuwait Region */}
                  <circle
                    cx="735"
                    cy="255"
                    r="12"
                    fill={activeCountry?.nameEn === "Kuwait" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#fdf0d5" : "#614f3c")}
                    stroke={activeCountry?.nameEn === "Kuwait" ? "#1a73e8" : "#d4c5a9"}
                    strokeWidth={activeCountry?.nameEn === "Kuwait" ? 2 : 1}
                  />
                  {/* Mauritania */}
                  <path
                    d="M160,350 Q210,340 215,400 Q170,420 150,380 Z"
                    fill={activeCountry?.nameEn === "Mauritania" ? (mapType === "roadmap" ? "#e8f0fe" : "#1e3a5f") : (mapType === "roadmap" ? "#f5eedd" : "#4a3c2e")}
                    stroke={activeCountry?.nameEn === "Mauritania" ? "#1a73e8" : "#ded4bf"}
                    strokeWidth={activeCountry?.nameEn === "Mauritania" ? 2 : 1}
                  />
                </svg>

                {/* Authentic Google Maps Red Teardrop Markers for Partner Countries */}
                {partnerCountries.map((c) => {
                  const isActive = activeCountry?.nameEn === c.nameEn;
                  return (
                    <button
                      key={c.nameEn}
                      type="button"
                      onMouseEnter={() => setHoveredCountry(c.nameEn)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry((prev) => (prev?.nameEn === c.nameEn ? null : c))}
                      className={cn(
                        "group/pin absolute -translate-x-1/2 -translate-y-full transition-all duration-300 focus-visible:outline-none cursor-pointer",
                        isActive ? "z-40 scale-125" : "z-20 hover:scale-115"
                      )}
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                      aria-label={`${c.nameAr} - ${c.capitalAr}`}
                    >
                      {/* Google Maps Authentic Pin Icon */}
                      <div className="relative flex flex-col items-center">
                        <svg
                          width="28"
                          height="36"
                          viewBox="0 0 28 36"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={cn(
                            "drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] transition-transform duration-200",
                            isActive && "scale-110"
                          )}
                        >
                          <path
                            d="M14 0C6.268 0 0 6.268 0 14C0 24.5 14 36 14 36C14 36 28 24.5 28 14C28 6.268 21.732 0 14 0Z"
                            fill={isActive ? "#ea4335" : "#e03828"}
                          />
                          <circle cx="14" cy="14" r="5.5" fill="#ffffff" />
                          <circle cx="14" cy="14" r="2.8" fill={isActive ? "#c5221f" : "#a51d24"} />
                        </svg>

                        {/* Country Label Pill under Pin */}
                        <span
                          className={cn(
                            "mt-1 flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-bold shadow-md whitespace-nowrap transition-all",
                            ar ? "font-head font-medium" : "font-sans",
                            isActive
                              ? "bg-slate-900 text-white ring-2 ring-blue-500 scale-105"
                              : "bg-white/95 text-slate-800 border border-slate-300/80"
                          )}
                        >
                          <span className="text-xs leading-none">{c.flag}</span>
                          <span>{ar ? c.nameAr : c.nameEn}</span>
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Google Maps Bottom-Start Watermark Logo */}
              <div className="absolute bottom-2 start-3 z-30 flex items-center gap-1 bg-white/70 px-2 py-0.5 rounded backdrop-blur-sm">
                <span className="font-sans font-bold text-xs tracking-tight text-slate-700">Google</span>
              </div>

              {/* Google Maps Bottom-End Zoom Controls */}
              <div className="absolute bottom-3 end-3 z-30 flex flex-col rounded-lg border border-black/15 bg-white shadow-md overflow-hidden">
                <button
                  type="button"
                  aria-label="Zoom in"
                  onClick={handleZoomIn}
                  className="flex size-8 items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors border-b border-slate-200 cursor-pointer"
                >
                  <Plus className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Zoom out"
                  onClick={handleZoomOut}
                  className="flex size-8 items-center justify-center text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <Minus className="size-4" />
                </button>
              </div>

              {/* Google Maps Attribution */}
              <div className="absolute bottom-1 end-14 z-20 text-[9px] text-slate-500 bg-white/60 px-1.5 py-0.5 rounded backdrop-blur-xs font-mono">
                {ar ? "بيانات الخريطة ©2026 Google" : "Map data ©2026 Google"}
              </div>
            </div>

            {/* Exclusive Partner Countries List — Full Width Grid */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {ar ? "الدول الشريكة المعتمدة فقط (9 دول)" : "Verified Partner Markets Only (9 Countries)"}
                </p>
                {!ar && (
                  <span className="font-mono text-[11px] font-bold text-brand-green">
                    {partnerCountries.length} Countries
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2">
                {partnerCountries.map((c) => {
                  const isSelected = activeCountry?.nameEn === c.nameEn;
                  return (
                    <button
                      key={c.nameEn}
                      type="button"
                      onMouseEnter={() => setHoveredCountry(c.nameEn)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry((prev) => (prev?.nameEn === c.nameEn ? null : c))}
                      className={cn(
                        "group flex flex-col items-center justify-center text-center rounded-2xl border p-2.5 text-xs font-semibold transition-all duration-200 cursor-pointer",
                        isSelected
                          ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/30 scale-[1.03]"
                          : "border-border bg-background/70 text-foreground hover:border-brand-orange/40 hover:bg-brand-orange/10 hover:scale-[1.02] active:scale-95"
                      )}
                    >
                      <span className="text-xl mb-1">{c.flag}</span>
                      <p className={cn("font-bold leading-tight", ar ? "font-head text-xs" : "text-xs")}>{ar ? c.nameAr : c.nameEn}</p>
                      <span className={cn("text-[9px] mt-0.5", ar ? "font-head text-muted-foreground" : "font-mono text-muted-foreground", isSelected && "text-white/80")}>
                        {ar ? c.capitalAr : c.capitalEn}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Summary footprint badge */}
              <div className="rounded-2xl border border-white/20 bg-background/60 p-4 backdrop-blur-md">
                <p className="text-xs font-bold text-foreground">
                  {ar ? "شبكة عمليات وتجارة دولية مغلقة" : "Targeted Commercial Reach"}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                  {ar ? (
                    <span>تتركز أنشطة استيراد وتصدير وتوريد <span className="text-brand-orange">مجموعة سامي بن عياد</span> في هذه الدول التسع المختارة بدقة وفق معايير الجودة والاتفاقيات الدولية.</span>
                  ) : (
                    <span><span className="text-brand-orange">SAMI BIN AYYAD GROUP</span> focuses its export, import, and manufacturing partnerships exclusively on these 9 verified global markets.</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhatWeOfferSection({ ar }: { ar: boolean }) {
  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  return (
    <section id="what-we-offer" className="site-container py-12 scroll-mt-24">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "ماذا نقدم" : "What We Offer"}</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold font-head">
          {ar ? "ماذا نقدم" : "What We Do"}
        </h3>
        <p className="mt-1.5 text-sm text-muted-foreground max-w-2xl">
          {ar
            ? "قائمة شاملة ومفصلة بكافة المشروعات والخدمات والقدرات عبر كل قطاع من قطاعاتنا، معروضة بوضوح ومرونة."
            : "A structured breakdown of all projects, capabilities, and specialized services delivered by each sector."}
        </p>
      </div>

      <div className="grid gap-6">
        {dashboardSectors.map((s) => {
          const data = activities[s.id];
          return (
            <div
              key={s.id}
              className="rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 backdrop-blur-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-brand-green/35 hover:scale-[1.005]"
            >
              <div className="flex items-center justify-between flex-wrap gap-4 border-b border-border/60 pb-5 mb-6">
                <div>
                  <h4 className="font-head text-lg sm:text-xl font-bold text-foreground">
                    {t(s.name)}
                  </h4>
                  <span className={cn("text-xs font-bold text-brand-orange", ar ? "font-sans" : "font-mono")}>
                    {data.items.length} {ar ? "خدمات ومشروعات رئيسية" : "Specialized Capabilities"}
                  </span>
                </div>
              </div>

              {/* Horizontal Flex Wrap of Services in Curved Glass Boxes */}
              <div className="flex flex-wrap gap-3">
                {data.items.map((item) => (
                  <div
                    key={item.en}
                    className="group flex items-center gap-2.5 rounded-2xl border border-white/25 bg-background/70 px-4 py-2.5 shadow-sm backdrop-blur-md transition-all duration-200 hover:border-brand-green hover:bg-brand-green/10 hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-brand-green-text transition-transform group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-semibold text-foreground/90 leading-snug">
                      {t(item)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}


