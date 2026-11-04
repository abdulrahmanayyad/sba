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
    value: "+45",
    labelEn: "Years of Foundational Heritage",
    labelAr: "عامًا من الخبرة المؤسسية الممتدة",
    subEn: "Since 1977 across construction, industry, and international business.",
    subAr: "منذ عام 1977 في قطاعات المقاولات والصناعة والتجارة الدولية.",
    sector: "construction" as SectorId,
  },
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
    value: "4",
    labelEn: "Core Strategic Integrated Sectors",
    labelAr: "قطاعات استراتيجية متكاملة",
    subEn: "Contracting, sustainable environment, garment manufacturing, and natural products.",
    subAr: "المقاولات، والبيئة المستدامة، وتصنيع الملابس، والمنتجات الطبيعية.",
    sector: "food" as SectorId,
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
    labelEn: "Verified Strategic International Alliances",
    labelAr: "تحالفات استراتيجية دولية معتمدة",
    subEn: "With leading partners across China, Switzerland, and the GCC region.",
    subAr: "مع كبرى الشركات والتحالفات في الصين وسويسرا ودول الخليج.",
    sector: "environmental" as SectorId,
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

  const t = (v: { en: string; ar: string }) => (ar ? v.ar : v.en);

  const card = "rounded-3xl border border-white/20 bg-background/80 p-6 md:p-8 backdrop-blur-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] hover:border-brand-orange/40 active:scale-[0.99] cursor-pointer";

  const activeCountry = selectedCountry ?? (hoveredCountry ? partnerCountries.find((c) => c.nameEn === hoveredCountry) ?? null : null);

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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
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

        {/* Geographic Presence: Side-by-Side White Map & Countries List */}
        <div className={cn(card, "mt-8")}>
          <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>{ar ? "أسواقنا" : "Our Markets"}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-head">
                {ar ? "أسواقنا وحضورنا الدولي" : "Our Markets & International Reach"}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                {ar
                  ? "خريطة توضح شبكة الأسواق الدولية الحالية التي نتعامل معها."
                  : "Interactive map showcasing our current international partner markets."}
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

          {/* Side-by-Side Responsive Grid: White Map + Country List with Flags */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 1. White Stationary Map Column (lg:col-span-7 xl:col-span-8) */}
            <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
              <div
                className="relative aspect-[16/10] sm:aspect-[16/11] lg:aspect-[16/11] w-full overflow-hidden rounded-3xl border border-slate-200 dark:border-zinc-800 bg-[#FFFFFF] shadow-[0_8px_30px_rgba(0,0,0,0.06)] select-none font-sans"
                role="region"
                aria-label={ar ? "خريطة شبكة أسواقنا الحالية" : "Map of our current partner markets"}
              >
                {/* Top Badge */}
                <div className="absolute start-3 top-3 z-30 flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm backdrop-blur-md">
                  <Globe className="size-3.5 text-brand-orange" />
                  <span className="font-sans font-semibold tracking-tight text-[11px] text-slate-700">
                    {ar ? "شبكة الأسواق الحالية" : "Current Markets Network"}
                  </span>
                </div>

                {/* Fixed Vector Canvas (No transform shift or zoom jitter) */}
                <div className="absolute inset-0 size-full">
                  <svg
                    viewBox="0 0 1000 600"
                    className="size-full"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      {/* Subtle architectural dot grid */}
                      <pattern id="white-map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="0.8" fill="#CBD5E1" opacity="0.6" />
                      </pattern>
                    </defs>

                    {/* White Ocean Base */}
                    <rect width="1000" height="600" fill="#FFFFFF" />
                    <rect width="1000" height="600" fill="url(#white-map-grid)" />

                    {/* Europe / Balkans / Romania / Bulgaria / Greece */}
                    <path
                      d="M260,110 Q320,60 410,70 Q490,50 560,90 Q620,120 590,170 Q540,200 500,190 Q460,225 430,215 Q390,200 360,170 Q300,180 260,140 Z"
                      fill="#F1F5F9"
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                    />

                    {/* France */}
                    <path
                      d="M360,130 Q420,120 435,160 Q410,200 375,185 Q350,160 360,130 Z"
                      fill={activeCountry?.nameEn === "France" ? "#FFEDD5" : "#E2E8F0"}
                      stroke={activeCountry?.nameEn === "France" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "France" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Italy Peninsula */}
                    <path
                      d="M455,165 Q485,180 475,230 Q455,240 450,210 Q450,175 455,165 Z"
                      fill={activeCountry?.nameEn === "Italy" ? "#FFEDD5" : "#E2E8F0"}
                      stroke={activeCountry?.nameEn === "Italy" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Italy" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Turkey / Anatolia */}
                    <path
                      d="M540,165 Q625,150 670,175 Q650,215 550,205 Q530,185 540,165 Z"
                      fill={activeCountry?.nameEn === "Turkey" ? "#FFEDD5" : "#E2E8F0"}
                      stroke={activeCountry?.nameEn === "Turkey" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Turkey" ? 2.5 : 1.2}
                      className="transition-colors duration-300"
                    />

                    {/* Cyprus Island */}
                    <path
                      d="M615,225 Q635,220 642,225 Q628,235 615,225 Z"
                      fill="#E2E8F0"
                      stroke="#CBD5E1"
                      strokeWidth="1"
                    />

                    {/* Crete Island */}
                    <path
                      d="M500,218 Q535,215 540,222 Q515,226 500,218 Z"
                      fill="#E2E8F0"
                      stroke="#CBD5E1"
                      strokeWidth="1"
                    />

                    {/* Levant */}
                    <path
                      d="M635,225 Q660,225 665,270 Q640,280 635,250 Z"
                      fill="#F1F5F9"
                      stroke="#E2E8F0"
                      strokeWidth="1"
                    />

                    {/* North Africa & Sahara Base */}
                    <path
                      d="M170,230 Q330,210 470,230 Q540,240 580,280 Q560,370 480,430 Q330,460 210,410 Q160,320 170,230 Z"
                      fill="#F8FAFC"
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                    />

                    {/* Morocco */}
                    <path
                      d="M200,240 Q260,235 270,280 Q230,310 200,280 Z"
                      fill={activeCountry?.nameEn === "Morocco" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Morocco" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Morocco" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Algeria */}
                    <path
                      d="M275,240 Q380,235 385,320 Q330,350 275,310 Z"
                      fill={activeCountry?.nameEn === "Algeria" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Algeria" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Algeria" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Libya */}
                    <path
                      d="M390,240 Q495,240 495,330 Q440,350 390,320 Z"
                      fill={activeCountry?.nameEn === "Libya" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Libya" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Libya" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Egypt */}
                    <path
                      d="M500,250 Q600,250 605,330 Q540,360 500,335 Z"
                      fill={activeCountry?.nameEn === "Egypt" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Egypt" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Egypt" ? 2.5 : 1.2}
                      className="transition-colors duration-300"
                    />

                    {/* Arabian Peninsula */}
                    <path
                      d="M620,260 Q690,230 750,270 Q770,360 690,410 Q640,360 620,260 Z"
                      fill="#F8FAFC"
                      stroke="#E2E8F0"
                      strokeWidth="1.2"
                    />

                    {/* Kuwait Region */}
                    <circle
                      cx="735"
                      cy="255"
                      r="13"
                      fill={activeCountry?.nameEn === "Kuwait" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Kuwait" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Kuwait" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Mauritania */}
                    <path
                      d="M160,350 Q210,340 215,400 Q170,420 150,380 Z"
                      fill={activeCountry?.nameEn === "Mauritania" ? "#FFEDD5" : "#F1F5F9"}
                      stroke={activeCountry?.nameEn === "Mauritania" ? "#F97316" : "#CBD5E1"}
                      strokeWidth={activeCountry?.nameEn === "Mauritania" ? 2.5 : 1}
                      className="transition-colors duration-300"
                    />

                    {/* Red Sea Cutout */}
                    <path
                      d="M592,274 L608,295 L650,395 L638,400 L598,298 L588,276 Z"
                      fill="#FFFFFF"
                      stroke="#E2E8F0"
                      strokeWidth="0.8"
                    />

                    {/* Nile River & Nile Delta (Vivid Brand Green) */}
                    <path
                      d="M555,260 Q575,250 590,260 Q585,275 575,275 Q565,275 555,260 Z"
                      fill="#10B981"
                      stroke="#059669"
                      strokeWidth="1"
                    />
                    <path
                      d="M575,275 Q570,300 575,315 Q578,335 585,348 Q590,365 588,380 L590,410"
                      fill="none"
                      stroke="#A7F3D0"
                      strokeWidth="6"
                      strokeLinecap="round"
                      opacity="0.4"
                    />
                    <path
                      d="M575,275 Q570,300 575,315 Q578,335 585,348 Q590,365 588,380 L590,410"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                    />
                    <path d="M575,275 L565,262 M575,275 L582,261" fill="none" stroke="#10B981" strokeWidth="1.6" />

                    {/* Subtle Transport / Maritime Connectors */}
                    <g stroke="#CBD5E1" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.6" fill="none">
                      <path d="M575,275 L475,230" />
                      <path d="M575,275 L435,160" />
                      <path d="M575,275 L570,155" />
                      <path d="M575,275 L735,255" />
                      <path d="M575,275 L495,330" />
                      <path d="M495,330 L385,320 L270,280 L215,400" />
                    </g>

                    {/* Water Labels */}
                    <text x="440" y="228" fontStyle="italic" fontSize="10" fill="#94A3B8" letterSpacing="1.5">
                      Mediterranean Sea
                    </text>
                    <text x="630" y="112" fontStyle="italic" fontSize="9" fill="#94A3B8" letterSpacing="1.5">
                      Black Sea
                    </text>
                    <text x="640" y="340" fontStyle="italic" fontSize="9" fill="#94A3B8" letterSpacing="1.5">
                      Red Sea
                    </text>

                    {/* Cairo / SBA Headquarters Puck */}
                    <g
                      id="sba-cairo-puck"
                      className="cursor-pointer"
                      onClick={() => setSelectedCountry(partnerCountries.find(c => c.nameEn === "Egypt") || null)}
                    >
                      <circle cx="575" cy="275" r="18" fill="#F97316" opacity="0.22" className="animate-ping" />
                      <circle cx="575" cy="275" r="10" fill="#F97316" opacity="0.3" />
                      <circle cx="575" cy="275" r="5.5" fill="#FFFFFF" stroke="#F97316" strokeWidth="2" />
                      <circle cx="575" cy="275" r="3" fill="#F97316" />

                      <text
                        x="585"
                        y="278"
                        fontFamily="inherit"
                        fontWeight="800"
                        fontSize="11"
                        fill="#0F172A"
                        stroke="#FFFFFF"
                        strokeWidth="3"
                        paintOrder="stroke fill"
                      >
                        Cairo
                      </text>
                      <text
                        x="585"
                        y="288"
                        fontFamily="inherit"
                        fontWeight="700"
                        fontSize="8"
                        fill="#EA580C"
                      >
                        HQ · المقر الرئيسي
                      </text>
                    </g>
                  </svg>

                  {/* Highlighting Pins for Verified Partner Countries */}
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
                          isEgypt && "mt-[-16px]"
                        )}
                        style={{ left: `${c.x}%`, top: `${c.y}%` }}
                        aria-label={`${c.nameAr} - ${c.capitalAr}`}
                      >
                        <div className="relative flex flex-col items-center">
                          {/* Pulsing ring on hover/active */}
                          {isActive && (
                            <span className="absolute -inset-2.5 rounded-full bg-brand-orange/35 animate-ping pointer-events-none" />
                          )}
                          <div
                            className={cn(
                              "flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold shadow-md whitespace-nowrap transition-all duration-200 border",
                              isActive
                                ? "bg-brand-orange text-white border-white shadow-xl ring-4 ring-brand-orange/30"
                                : "bg-white text-slate-800 border-slate-200 hover:border-brand-orange/60 hover:bg-orange-50/60"
                            )}
                          >
                            <span
                              className={cn(
                                "size-2 rounded-full shrink-0",
                                isActive ? "bg-white animate-pulse" : "bg-brand-orange"
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

                {/* Bottom Attribution */}
                <div className="absolute bottom-2.5 start-3 z-20 flex items-center gap-1.5 text-[10px] text-slate-500 font-sans font-medium">
                  <span className="font-bold text-slate-700">SBA Global</span>
                  <span>·</span>
                  <span>{ar ? "الأسواق الحالية" : "Current Markets"}</span>
                </div>
              </div>
            </div>

            {/* 2. Side Column: Countries List with Flags beside names (lg:col-span-5 xl:col-span-4) */}
            <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between border-b border-border/60 pb-3 mb-3">
                  <div>
                    <h4 className="font-head text-base sm:text-lg font-bold text-foreground">
                      {ar ? "الدول الشريكة والأسواق الحالية" : "Partner Countries & Current Markets"}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {ar ? "أشر على أي دولة لإبراز موقعها على الخريطة" : "Hover over any country to highlight on map"}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold bg-brand-green/10 text-brand-green-text border border-brand-green/30 px-2.5 py-1 rounded-full">
                    {partnerCountries.length} {ar ? "دول" : "Countries"}
                  </span>
                </div>

                {/* Active Country Detail Highlight Box */}
                {activeCountry ? (
                  <div className="rounded-2xl border border-brand-orange/40 bg-brand-orange/5 p-3.5 backdrop-blur-md mb-3 transition-all duration-200 animate-in fade-in zoom-in-95">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{activeCountry.flag}</span>
                        <div>
                          <p className="font-head font-bold text-sm text-foreground">
                            {ar ? activeCountry.nameAr : activeCountry.nameEn}
                          </p>
                          <p className="text-[11px] text-muted-foreground">
                            {ar ? activeCountry.capitalAr : activeCountry.capitalEn} · <span className="font-mono text-[10px]">{activeCountry.coords}</span>
                          </p>
                        </div>
                      </div>
                      <span className="size-2 rounded-full bg-brand-orange animate-ping" />
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed pt-1.5 border-t border-brand-orange/20">
                      {ar ? activeCountry.roleAr : activeCountry.roleEn}
                    </p>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-dashed border-border/80 bg-background/40 p-3 mb-3 text-center text-xs text-muted-foreground">
                    {ar ? "مرر المؤشر فوق اسم أي دولة أو علامتها لمعاينة تفاصيل الشراكة" : "Hover over any country name or pin to inspect partnership details"}
                  </div>
                )}

                {/* Countries List with Flags beside names — No Scrollbar, All visible */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 pe-1">
                  {partnerCountries.map((c) => {
                    const isSelected = activeCountry?.nameEn === c.nameEn;
                    return (
                      <div
                        key={c.nameEn}
                        onMouseEnter={() => setHoveredCountry(c.nameEn)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        onClick={() => setSelectedCountry((prev) => (prev?.nameEn === c.nameEn ? null : c))}
                        className={cn(
                          "group flex items-center justify-between rounded-xl border p-2 text-xs font-semibold transition-all duration-200 cursor-pointer",
                          isSelected
                            ? "border-brand-orange bg-brand-orange text-white shadow-md shadow-brand-orange/20 scale-[1.01]"
                            : "border-border/70 bg-background/60 text-foreground hover:border-brand-orange/50 hover:bg-brand-orange/10 hover:scale-[1.01]"
                        )}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Flag beside each country name */}
                          <span className="text-lg shrink-0 leading-none">{c.flag}</span>
                          <div className="min-w-0 text-start">
                            <p className={cn("font-bold truncate", ar ? "font-head text-xs" : "text-xs")}>
                              {ar ? c.nameAr : c.nameEn}
                            </p>
                            <p className={cn("text-[10px] truncate", isSelected ? "text-white/80" : "text-muted-foreground")}>
                              {ar ? c.capitalAr : c.capitalEn}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 shrink-0">
                          {c.nameEn === "Egypt" && (
                            <span className={cn(
                              "text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider",
                              isSelected ? "bg-white/20 text-white" : "bg-brand-green/15 text-brand-green-text"
                            )}>
                              {ar ? "المقر" : "HQ"}
                            </span>
                          )}
                          <span className={cn(
                            "size-1.5 rounded-full transition-transform group-hover:scale-125",
                            isSelected ? "bg-white animate-pulse" : "bg-brand-orange"
                          )} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Summary footprint card */}
              <div className="rounded-2xl border border-white/20 bg-background/60 p-3.5 backdrop-blur-md mt-2">
                <p className="text-xs font-bold text-foreground">
                  {ar ? "شبكة عمليات وتجارة دولية موثقة" : "Targeted Commercial Reach"}
                </p>
                <p className="mt-1 text-[11px] text-muted-foreground leading-relaxed">
                  {ar ? (
                    <span>تتوسع أنشطة الاستيراد والتصدير والتوريد ل<span className="text-brand-orange font-bold">مجموعة سامي بن عياد</span> في هذه الدول وفق معايير الجودة والاتفاقيات الدولية.</span>
                  ) : (
                    <span><span className="text-brand-orange font-bold">SAMI BIN AYYAD GROUP</span> expands its import, export, and supply partnerships across these nations in accordance with international quality standards.</span>
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


