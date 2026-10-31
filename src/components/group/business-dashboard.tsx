import { useState } from "react";
import { Building2, Leaf, Shirt, Wheat, Globe, CheckCircle2, MapPin, Sparkles, Plus, Minus, Layers, X, Search, Mic, Navigation, Map } from "lucide-react";

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
            {/* Apple Maps Interactive Canvas — Full Width Styled after Apple Maps UI */}
            <div
              className="relative aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.4/1] w-full overflow-hidden rounded-3xl border border-black/10 dark:border-white/15 bg-[#007AFF] shadow-[0_16px_50px_rgba(0,122,255,0.18)] select-none transition-colors duration-500 font-sans"
              role="region"
              aria-label={ar ? "خريطة Apple التفاعلية لأسواقنا" : "Interactive Apple Maps of our markets"}
            >
              {/* Apple Maps Top-Start Badge */}
              <div className="absolute start-3 top-3 z-30 flex items-center gap-2 rounded-full border border-black/10 bg-white/90 dark:bg-zinc-900/90 px-3.5 py-1.5 shadow-md text-xs font-bold text-slate-800 dark:text-slate-100 backdrop-blur-md">
                <span className="font-sans font-bold text-sm leading-none"></span>
                <span className="font-sans font-semibold tracking-tight">{ar ? "خرائط Apple" : "Apple Maps"}</span>
                <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                <span className="text-[11px] text-brand-orange font-medium">{ar ? "الأسواق المعتمدة" : "Verified Markets"}</span>
              </div>

              {/* Apple Maps Top-End Quick Info Chip when country is active */}
              {activeCountry && (
                <div className="absolute end-3 top-3 z-30 hidden sm:flex items-center gap-2 rounded-full border border-white/60 bg-white/90 dark:bg-zinc-900/90 px-3 py-1 shadow-lg text-xs font-bold text-slate-800 dark:text-slate-100 backdrop-blur-md animate-in fade-in zoom-in-95">
                  <span className="text-sm">{activeCountry.flag}</span>
                  <span className="font-semibold">{ar ? activeCountry.nameAr : activeCountry.nameEn}</span>
                  <span className="text-[10px] text-sky-600 dark:text-sky-400 font-mono">({activeCountry.capitalEn})</span>
                </div>
              )}

              {/* Apple Maps Vector Canvas */}
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
                  <defs>
                    {/* Apple Maps Vibrant Ocean Blue Gradient */}
                    <linearGradient id="apple-ocean-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#1ea0ff" />
                      <stop offset="25%" stopColor="#0086fb" />
                      <stop offset="65%" stopColor="#006ee6" />
                      <stop offset="100%" stopColor="#0058c4" />
                    </linearGradient>

                    {/* Coastal shelf cyan glow */}
                    <radialGradient id="nile-delta-glow" cx="57%" cy="45%" r="30%">
                      <stop offset="0%" stopColor="#5eead4" stopOpacity="0.45" />
                      <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#007aff" stopOpacity="0" />
                    </radialGradient>

                    <radialGradient id="aegean-shelf-glow" cx="53%" cy="32%" r="25%">
                      <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.5" />
                      <stop offset="70%" stopColor="#007aff" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* 1. Deep Ocean Base */}
                  <rect width="1000" height="600" fill="url(#apple-ocean-grad)" />

                  {/* Coastal Cyan Shelf Glows */}
                  <rect width="1000" height="600" fill="url(#nile-delta-glow)" />
                  <rect width="1000" height="600" fill="url(#aegean-shelf-glow)" />

                  {/* 2. Landmasses with Apple Maps Soft Pastel Palettes */}
                  {/* Europe / Balkans / Romania / Bulgaria / Greece (Apple Maps Lush Olive Green) */}
                  <path
                    d="M260,110 Q320,60 410,70 Q490,50 560,90 Q620,120 590,170 Q540,200 500,190 Q460,225 430,215 Q390,200 360,170 Q300,180 260,140 Z"
                    fill="#C3E298"
                    stroke="#A8CE7A"
                    strokeWidth="1.2"
                  />
                  {/* France (Apple Maps Soft Green) */}
                  <path
                    d="M360,130 Q420,120 435,160 Q410,200 375,185 Q350,160 360,130 Z"
                    fill={activeCountry?.nameEn === "France" ? "#B5DE86" : "#C8E6A2"}
                    stroke={activeCountry?.nameEn === "France" ? "#007AFF" : "#ADCFA0"}
                    strokeWidth={activeCountry?.nameEn === "France" ? 2.5 : 1}
                  />
                  {/* Italy Peninsula (Apple Maps Green) */}
                  <path
                    d="M455,165 Q485,180 475,230 Q455,240 450,210 Q450,175 455,165 Z"
                    fill={activeCountry?.nameEn === "Italy" ? "#B5DE86" : "#C8E6A2"}
                    stroke={activeCountry?.nameEn === "Italy" ? "#007AFF" : "#ADCFA0"}
                    strokeWidth={activeCountry?.nameEn === "Italy" ? 2.5 : 1}
                  />

                  {/* Turkey / Anatolia (Apple Maps Sage Green with Relief) */}
                  <path
                    d="M540,165 Q625,150 670,175 Q650,215 550,205 Q530,185 540,165 Z"
                    fill={activeCountry?.nameEn === "Turkey" ? "#BCE38E" : "#C6E49E"}
                    stroke={activeCountry?.nameEn === "Turkey" ? "#007AFF" : "#ABCFA1"}
                    strokeWidth={activeCountry?.nameEn === "Turkey" ? 2.5 : 1.2}
                  />

                  {/* Cyprus Island */}
                  <path
                    d="M615,225 Q635,220 642,225 Q628,235 615,225 Z"
                    fill="#C6E4A0"
                    stroke="#ABCFA1"
                    strokeWidth="1"
                  />

                  {/* Crete Island */}
                  <path
                    d="M500,218 Q535,215 540,222 Q515,226 500,218 Z"
                    fill="#C6E4A0"
                    stroke="#ABCFA1"
                    strokeWidth="1"
                  />

                  {/* Levant (Lebanon, Syria, Jordan) */}
                  <path
                    d="M635,225 Q660,225 665,270 Q640,280 635,250 Z"
                    fill="#EFE7D2"
                    stroke="#DFCFB0"
                    strokeWidth="1"
                  />

                  {/* North Africa & Sahara (Apple Maps Warm Desert Sand: #FAF1E3) */}
                  <path
                    d="M170,230 Q330,210 470,230 Q540,240 580,280 Q560,370 480,430 Q330,460 210,410 Q160,320 170,230 Z"
                    fill="#FAF1E3"
                    stroke="#E6D3BF"
                    strokeWidth="1.2"
                  />

                  {/* Morocco */}
                  <path
                    d="M200,240 Q260,235 270,280 Q230,310 200,280 Z"
                    fill={activeCountry?.nameEn === "Morocco" ? "#F5E2C4" : "#FAF1E3"}
                    stroke={activeCountry?.nameEn === "Morocco" ? "#007AFF" : "#E2CFB8"}
                    strokeWidth={activeCountry?.nameEn === "Morocco" ? 2.5 : 1}
                  />

                  {/* Algeria */}
                  <path
                    d="M275,240 Q380,235 385,320 Q330,350 275,310 Z"
                    fill={activeCountry?.nameEn === "Algeria" ? "#F5E2C4" : "#FAF2E5"}
                    stroke={activeCountry?.nameEn === "Algeria" ? "#007AFF" : "#E5D4BF"}
                    strokeWidth={activeCountry?.nameEn === "Algeria" ? 2.5 : 1}
                  />

                  {/* Libya */}
                  <path
                    d="M390,240 Q495,240 495,330 Q440,350 390,320 Z"
                    fill={activeCountry?.nameEn === "Libya" ? "#F5E2C4" : "#FBF3E7"}
                    stroke={activeCountry?.nameEn === "Libya" ? "#007AFF" : "#E5D4BF"}
                    strokeWidth={activeCountry?.nameEn === "Libya" ? 2.5 : 1}
                  />

                  {/* Egypt (Warm Apple Maps Sand with delicate coast) */}
                  <path
                    d="M500,250 Q600,250 605,330 Q540,360 500,335 Z"
                    fill={activeCountry?.nameEn === "Egypt" ? "#F3E2C4" : "#FCF5EA"}
                    stroke={activeCountry?.nameEn === "Egypt" ? "#007AFF" : "#E5D4BD"}
                    strokeWidth={activeCountry?.nameEn === "Egypt" ? 2.5 : 1.2}
                  />

                  {/* Arabian Peninsula */}
                  <path
                    d="M620,260 Q690,230 750,270 Q770,360 690,410 Q640,360 620,260 Z"
                    fill="#FAF1E3"
                    stroke="#E6D3BF"
                    strokeWidth="1.2"
                  />

                  {/* Kuwait Region */}
                  <circle
                    cx="735"
                    cy="255"
                    r="13"
                    fill={activeCountry?.nameEn === "Kuwait" ? "#F5E2C4" : "#FAF1E3"}
                    stroke={activeCountry?.nameEn === "Kuwait" ? "#007AFF" : "#E2CFB8"}
                    strokeWidth={activeCountry?.nameEn === "Kuwait" ? 2.5 : 1}
                  />

                  {/* Mauritania */}
                  <path
                    d="M160,350 Q210,340 215,400 Q170,420 150,380 Z"
                    fill={activeCountry?.nameEn === "Mauritania" ? "#F5E2C4" : "#FAF1E3"}
                    stroke={activeCountry?.nameEn === "Mauritania" ? "#007AFF" : "#E2CFB8"}
                    strokeWidth={activeCountry?.nameEn === "Mauritania" ? 2.5 : 1}
                  />

                  {/* Red Sea Cutout (Apple Blue) */}
                  <path
                    d="M592,274 L608,295 L650,395 L638,400 L598,298 L588,276 Z"
                    fill="url(#apple-ocean-grad)"
                    stroke="#4FA3E3"
                    strokeWidth="0.8"
                  />

                  {/* 3. Nile River & Nile Delta (Signature Vivid Apple Maps Green: #67C439) */}
                  {/* Delta Fan */}
                  <path
                    d="M555,260 Q575,250 590,260 Q585,275 575,275 Q565,275 555,260 Z"
                    fill="#67C439"
                    stroke="#52AC27"
                    strokeWidth="1"
                  />
                  {/* Nile River Fertile Valley Buffer */}
                  <path
                    d="M575,275 Q570,300 575,315 Q578,335 585,348 Q590,365 588,380 L590,410"
                    fill="none"
                    stroke="#8BE052"
                    strokeWidth="7"
                    strokeLinecap="round"
                    opacity="0.4"
                  />
                  {/* Nile River Main Stem */}
                  <path
                    d="M575,275 Q570,300 575,315 Q578,335 585,348 Q590,365 588,380 L590,410"
                    fill="none"
                    stroke="#52AC27"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                  {/* Delta branches */}
                  <path d="M575,275 L565,262 M575,275 L582,261" fill="none" stroke="#52AC27" strokeWidth="1.6" />

                  {/* 4. Apple Maps Delicate Highways & Transport Lines */}
                  <g stroke="#ADC4DB" strokeWidth="0.85" opacity="0.75" fill="none">
                    {/* Egypt highways: Alexandria to Cairo, Cairo to Suez, Cairo to Asyut */}
                    <path d="M550,260 L575,275 L595,277" />
                    <path d="M575,275 L576,315 L585,348" />
                    {/* Turkey highways: Istanbul to Bursa, Ankara, Konya, Mersin */}
                    <path d="M570,155 L580,170 L615,165 L605,195 L635,205" />
                    <path d="M580,170 L545,185 L565,202" />
                    {/* Levant & Jordan */}
                    <path d="M635,235 L645,245 L640,265 L655,290" />
                  </g>

                  {/* 5. Apple Maps Subtle Country Boundaries (Delicate Pinkish-Purple Dashes) */}
                  <g stroke="#C47C9E" strokeWidth="0.9" strokeDasharray="3 3" fill="none" opacity="0.85">
                    {/* Egypt - Libya border */}
                    <path d="M498,252 L498,340" />
                    {/* Egypt - Sudan border */}
                    <path d="M498,340 L605,340" />
                    {/* Turkey - Syria - Iraq border */}
                    <path d="M630,215 L665,215 L680,240" />
                    {/* Jordan borders */}
                    <path d="M635,258 L655,258 L665,285" />
                  </g>

                  {/* 6. Apple Maps Typographic Labels (Matching Screenshot) */}
                  {/* Water Labels (Italic, Subtle, Apple Serif/Sans) */}
                  <text x="450" y="228" fontStyle="italic" fontSize="11" fill="rgba(255,255,255,0.78)" letterSpacing="1.5">
                    Mediterranean Sea
                  </text>
                  <text x="630" y="112" fontStyle="italic" fontSize="10" fill="rgba(255,255,255,0.72)" letterSpacing="1.5">
                    Black Sea
                  </text>
                  <text x="640" y="340" fontStyle="italic" fontSize="10" fill="rgba(255,255,255,0.72)" letterSpacing="1.5">
                    Red Sea
                  </text>

                  {/* Regional Names (Matching Screenshot) */}
                  <text x="590" y="196" fontSize="7.5" fontWeight="700" fill="#6B8055" letterSpacing="2.5">
                    TAURUS MOUNTAINS
                  </text>
                  <text x="598" y="174" fontSize="7" fontWeight="700" fill="#6B8055" letterSpacing="2">
                    ANADOLU
                  </text>
                  <text x="525" y="325" fontSize="9" fontWeight="800" fill="#B39379" letterSpacing="3.5">
                    EGYPT
                  </text>
                  <text x="630" y="176" fontSize="8" fontWeight="800" fill="#A8526F" letterSpacing="2">
                    TÜRKIYE
                  </text>
                  <text x="515" y="105" fontSize="7.5" fontWeight="800" fill="#758B5D" letterSpacing="2">
                    BULGARIA
                  </text>
                  <text x="642" y="278" fontSize="7.5" fontWeight="800" fill="#A8526F" letterSpacing="2">
                    JORDAN
                  </text>
                  <text x="430" y="320" fontSize="7.5" fontWeight="800" fill="#B39379" letterSpacing="2">
                    LIBYAN DESERT
                  </text>

                  {/* City Dots & Text Labels (Matching Screenshot) */}
                  {/* Alexandria */}
                  <circle cx="550" cy="260" r="2.2" fill="#334155" />
                  <text x="520" y="256" fontSize="9" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Alexandria
                  </text>

                  {/* Istanbul */}
                  <circle cx="570" cy="155" r="2.5" fill="#334155" />
                  <text x="575" y="157" fontSize="10" fontWeight="700" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" paintOrder="stroke fill">
                    Istanbul
                  </text>

                  {/* Ankara */}
                  <circle cx="615" cy="165" r="2.2" fill="#334155" />
                  <text x="618" y="163" fontSize="8.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Ankara
                  </text>

                  {/* Izmir */}
                  <circle cx="545" cy="185" r="2" fill="#334155" />
                  <text x="523" y="187" fontSize="8" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Izmir
                  </text>

                  {/* Antalya */}
                  <circle cx="565" cy="202" r="2" fill="#334155" />
                  <text x="568" y="205" fontSize="7.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Antalya
                  </text>

                  {/* Konya */}
                  <circle cx="605" cy="195" r="2" fill="#334155" />
                  <text x="608" y="196" fontSize="7.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Konya
                  </text>

                  {/* Beirut */}
                  <circle cx="635" cy="235" r="2.5" fill="#334155" />
                  <text x="600" y="238" fontSize="9.5" fontWeight="700" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" paintOrder="stroke fill">
                    Beirut
                  </text>

                  {/* Amman */}
                  <circle cx="640" cy="265" r="2.5" fill="#334155" />
                  <text x="645" y="268" fontSize="9.5" fontWeight="700" fill="#0f172a" stroke="#ffffff" strokeWidth="2.5" paintOrder="stroke fill">
                    Amman
                  </text>

                  {/* Asyut */}
                  <circle cx="575" cy="315" r="2" fill="#334155" />
                  <text x="580" y="318" fontSize="7.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Asyut
                  </text>

                  {/* Luxor */}
                  <circle cx="585" cy="348" r="2" fill="#334155" />
                  <text x="590" y="350" fontSize="7.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Luxor
                  </text>

                  {/* Aswan */}
                  <circle cx="590" cy="380" r="2" fill="#334155" />
                  <text x="595" y="382" fontSize="7.5" fontWeight="600" fill="#0f172a" stroke="#ffffff" strokeWidth="2" paintOrder="stroke fill">
                    Aswan
                  </text>

                  {/* 7. Signature Apple Maps Current Location Puck for Cairo / SBA Headquarters */}
                  <g id="apple-cairo-puck" className="cursor-pointer" onClick={() => setSelectedCountry(partnerCountries.find(c => c.nameEn === "Egypt") || null)}>
                    {/* Outer animated radar pulse */}
                    <circle cx="575" cy="275" r="22" fill="#007AFF" opacity="0.2" className="animate-ping" />
                    {/* Middle soft cyan-blue glow */}
                    <circle cx="575" cy="275" r="13" fill="#007AFF" opacity="0.32" />
                    {/* Crisp white outer ring */}
                    <circle cx="575" cy="275" r="7.5" fill="#FFFFFF" filter="drop-shadow(0 2px 5px rgba(0,0,0,0.35))" />
                    {/* Inner Apple vibrant blue puck */}
                    <circle cx="575" cy="275" r="4.8" fill="#007AFF" />

                    {/* Cairo Label matching Apple Maps */}
                    <text
                      x="587"
                      y="278"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif"
                      fontWeight="800"
                      fontSize="13"
                      fill="#0f172a"
                      stroke="#ffffff"
                      strokeWidth="3.5"
                      paintOrder="stroke fill"
                    >
                      Cairo
                    </text>
                    <text
                      x="587"
                      y="290"
                      fontFamily="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif"
                      fontWeight="700"
                      fontSize="8.5"
                      fill="#0284c7"
                    >
                      HQ · المقر الرئيسي
                    </text>
                  </g>
                </svg>

                {/* Apple Maps Style Floating Capsule Pins for Verified Partner Countries */}
                {partnerCountries.map((c) => {
                  const isActive = activeCountry?.nameEn === c.nameEn;
                  const isEgypt = c.nameEn === "Egypt";
                  return (
                    <button
                      key={c.nameEn}
                      type="button"
                      onMouseEnter={() => setHoveredCountry(c.nameEn)}
                      onMouseLeave={() => setHoveredCountry(null)}
                      onClick={() => setSelectedCountry((prev) => (prev?.nameEn === c.nameEn ? null : c))}
                      className={cn(
                        "group/pin absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-300 focus-visible:outline-none cursor-pointer",
                        isActive ? "z-40 scale-125" : "z-20 hover:scale-110",
                        isEgypt && "mt-[-20px]"
                      )}
                      style={{ left: `${c.x}%`, top: `${c.y}%` }}
                      aria-label={`${c.nameAr} - ${c.capitalAr}`}
                    >
                      <div className="relative flex flex-col items-center">
                        {/* Apple Maps Pill Marker */}
                        <div
                          className={cn(
                            "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-[0_4px_14px_rgba(0,0,0,0.18)] backdrop-blur-md whitespace-nowrap transition-all duration-200 border",
                            isActive
                              ? "bg-[#007AFF] text-white border-white/60 shadow-[0_6px_22px_rgba(0,122,255,0.45)] ring-2 ring-white/50"
                              : "bg-white/95 dark:bg-zinc-900/95 text-slate-800 dark:text-slate-100 border-black/10 dark:border-white/20 hover:border-[#007AFF]/60 hover:bg-white"
                          )}
                        >
                          {/* Pulsing Apple Blue dot indicator */}
                          <span
                            className={cn(
                              "size-2 rounded-full",
                              isActive ? "bg-white animate-pulse" : "bg-[#007AFF]"
                            )}
                          />
                          <span className="text-xs leading-none">{c.flag}</span>
                          <span className={ar ? "font-head font-medium text-[11px]" : "font-sans font-semibold"}>
                            {ar ? c.nameAr : c.nameEn}
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Apple Maps Floating Bottom Search Bar (Exact Matching Screenshot) */}
              <div className="absolute bottom-3 inset-x-4 sm:inset-x-auto sm:start-1/2 sm:-translate-x-1/2 z-30 flex items-center justify-between gap-3 rounded-full border border-white/60 bg-white/85 dark:bg-zinc-900/85 backdrop-blur-2xl shadow-[0_10px_35px_rgba(0,0,0,0.18)] px-4 py-2 sm:min-w-[320px] max-w-sm pointer-events-auto">
                <div className="flex items-center gap-2 text-slate-800 dark:text-slate-100 font-sans text-xs font-semibold">
                  <Search className="size-3.5 text-slate-400" />
                  <span>{ar ? "خرائط Apple · شبكة أسواقنا" : "Apple Maps · Global Markets"}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Mic className="size-3.5 hover:text-sky-500 transition cursor-pointer" />
                  <div className="size-5 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-700 dark:text-slate-200">
                    SBA
                  </div>
                </div>
              </div>

              {/* Apple Maps Floating Blue Control Pill (Exact Matching Bottom-Right of Screenshot) */}
              <div className="absolute bottom-16 sm:bottom-4 end-3 z-30 flex flex-col items-center gap-2 rounded-2xl border border-white/50 bg-[#38bdf8]/45 dark:bg-sky-500/30 p-1.5 shadow-[0_8px_24px_rgba(0,122,255,0.25)] backdrop-blur-xl">
                <button
                  type="button"
                  onClick={() => setZoom((prev) => (prev > 1.2 ? 1 : 1.35))}
                  title={ar ? "تبديل وضع الخريطة" : "Toggle map view"}
                  className="flex size-8 items-center justify-center rounded-xl bg-white/40 dark:bg-white/20 text-slate-900 dark:text-white hover:bg-white/70 transition active:scale-95 cursor-pointer shadow-xs"
                >
                  <Map className="size-4" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const egypt = partnerCountries.find((c) => c.nameEn === "Egypt") || null;
                    setSelectedCountry(egypt);
                    setZoom(1.3);
                  }}
                  title={ar ? "تحديد المقر الرئيسي في مصر" : "Center on Cairo HQ"}
                  className="flex size-8 items-center justify-center rounded-xl bg-white/40 dark:bg-white/20 text-[#007AFF] hover:bg-white/70 transition active:scale-95 cursor-pointer shadow-xs"
                >
                  <Navigation className="size-4 -rotate-45 fill-current" />
                </button>
              </div>

              {/* Apple Maps Bottom-Start Attribution */}
              <div className="absolute bottom-2 start-3 z-20 flex items-center gap-1.5 text-[10px] text-white/90 dark:text-white/80 font-sans font-medium drop-shadow-sm">
                <span className="font-bold"> Maps</span>
                <span>·</span>
                <span className="text-[9px]">{ar ? "البيانات الجغرافية المعتمدة" : "Verified Geographic Data"}</span>
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


