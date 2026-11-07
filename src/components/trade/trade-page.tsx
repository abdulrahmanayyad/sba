import React, { useState } from "react";
import { 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Package, 
  MapPin, 
  Briefcase, 
  FileText, 
  Sparkles, 
  Layers, 
  AlertCircle,
  ArrowDown
} from "lucide-react";
import { TradeWorldMap } from "./trade-world-map";
import { MarketDirectory } from "./market-directory";
import { GlobalProductDemand } from "./global-product-demand";
import { TradeIntelligenceDashboard } from "./trade-intelligence-dashboard";
import { BusinessNetworkSection } from "./business-network-section";
import { TradeOpportunitiesSection } from "./trade-opportunities-section";
import { TradeReportsDownloads } from "./trade-reports-downloads";
import { TRADE_STATS, COUNTRY_PROFILES, CountryTradeProfile } from "@/lib/trade-data";

interface TradePageProps {
  ar?: boolean;
}

export function TradePage({ ar = true }: TradePageProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState<string | undefined>(undefined);

  const navItems = [
    { id: "world-map", labelAr: "الخريطة التفاعلية", labelEn: "World Map" },
    { id: "market-directory", labelAr: "دليل الأسواق", labelEn: "Market Directory" },
    { id: "product-demand", labelAr: "المنتجات المطلوبة", labelEn: "Product Demand" },
    { id: "trade-intelligence", labelAr: "ذكاء السوق والمتطلبات", labelEn: "Trade Intelligence" },
    { id: "business-network", labelAr: "شبكتنا الدولية", labelEn: "Business Network" },
    { id: "trade-opportunities", labelAr: "الفرص التجارية", labelEn: "Trade Opportunities" },
    { id: "trade-reports", labelAr: "التقارير والتحميلات", labelEn: "Reports & Downloads" },
  ];

  const handleCountrySelect = (country: CountryTradeProfile) => {
    setSelectedCountryCode(country.code);
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground pb-24">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 start-1/2 -translate-x-1/2 size-[650px] rounded-full bg-emerald-600/10 blur-[130px]" />
        <div className="absolute top-96 end-10 size-[450px] rounded-full bg-brand-orange/10 blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 w-full max-w-[1536px] mx-auto">
        <div className="space-y-6 text-start">
          {/* Top Pill - at the start of the line matching homepage style */}
          <div className="flex justify-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مجموعة سامي بن عياد · انتشارنا التجاري العالمي" : "SAMI BIN AYYAD GROUP · Global Trade Footprint"}</span>
            </div>
          </div>

          {/* Main Headings */}
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-foreground text-black dark:text-white leading-tight">
              {ar ? "نربط الأسواق العالمية، ونصنع الفرص التجارية الموثوقة" : "Connecting Global Markets, Delivering Real Trade Opportunities"}
            </h1>

            <p className="max-w-4xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              {ar
                ? "استعراض مهني موثق لشبكة الطلبات التجارية الدولية لعام 2025، وقاعدة متطلبات المشترين للتمور والسلع الزراعية والمحاصيل الاستراتيجية عبر 47 دولة حول العالم."
                : "A documented corporate showcase of our 2025 international commercial inquiry network, covering product demand for dates, agricultural commodities, and export crops across 47 countries."}
            </p>
          </div>

          {/* Main Key Statistics Grid - Interactive Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 w-full pt-2">
            <div className="interactive-card glass-box-interactive group rounded-3xl border border-white/20 bg-background/70 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">47</span>
              <p className="text-xs font-bold text-foreground mt-1">
                {ar ? "دولة مسجلة في الطلبات" : "Documented Destination Markets"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "عبر 5 قارات حول العالم" : "Across 5 Global Continents"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl border border-white/20 bg-background/70 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">179</span>
              <p className="text-xs font-bold text-foreground mt-1">
                {ar ? "سجل استفسار تجاري موثق" : "Recorded Commercial Inquiries"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "سجلات أصلية لعام 2025" : "2025 Original Verified Records"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl border border-white/20 bg-background/70 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">66</span>
              <p className="text-xs font-bold text-foreground mt-1">
                {ar ? "استفسارات التمور ومنتجاتها" : "Date-Related Inquiry Records"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "عجوة، مجدول، سكري، دبس" : "Ajwa, Medjool, Sukkari, Paste"}
              </span>
            </div>

            <div className="interactive-card glass-box-interactive group rounded-3xl border border-white/20 bg-background/70 p-5 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
              <span className="font-head text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">113</span>
              <p className="text-xs font-bold text-foreground mt-1">
                {ar ? "استفسارات السلع المتنوعة" : "Diversified Product Inquiries"}
              </p>
              <span className="text-[11px] text-muted-foreground block mt-0.5">
                {ar ? "توابل، خضار، بذور، أعشاب" : "Spices, Produce, Seeds, Herbs"}
              </span>
            </div>
          </div>

          {/* Documentary Compliance Alert as Transparent Glass Interactive Card */}
          <div className="interactive-card glass-box-interactive w-full rounded-2xl border border-white/20 bg-background/60 p-4 text-xs text-muted-foreground leading-relaxed text-start flex items-start gap-3 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md cursor-pointer">
            <AlertCircle className="size-4 shrink-0 text-brand-orange mt-0.5" />
            <div>
              <strong className="font-bold text-foreground">
                {ar ? "إقرار الحوكمة والامتثال التوثيقي: " : "Documentary Compliance Statement: "}
              </strong>
              <span>
                {ar
                  ? "تمثل هذه الأرقام طلبات شراء واردة ومسجلة ضمن متطلبات المشترين الدوليين، ولا تعني بالضرورة صدور أوامر شراء مؤكدة أو إبرام عقود تجارية أو إتمام عمليات توريد وشحن."
                  : "These figures represent purchase requests received and recorded within international buyer requirements, and do not necessarily imply confirmed purchase orders, executed commercial contracts, or completed supply and shipping operations."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Quick-Nav Bar */}
      <div className="sticky top-20 z-40 px-4 py-2 flex justify-center pointer-events-none">
        <div className="pointer-events-auto flex items-center gap-1.5 overflow-x-auto rounded-full border border-white/20 bg-background/85 px-4 py-2 shadow-2xl backdrop-blur-2xl scrollbar-none max-w-full">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold text-foreground/80 transition-all hover:bg-white/10 hover:text-brand-orange"
            >
              {ar ? item.labelAr : item.labelEn}
            </a>
          ))}
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 mt-12">
        {/* Section 1: Interactive World Map */}
        <section id="world-map" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-brand-orange ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "القسم الأول: الخريطة التفاعلية" : "Section 1: Interactive Map"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "خريطة الانتشار التجاري للأسواق الدولية" : "Global Trade Footprint Map"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "تحديد بصري تفاعلي لـ 47 دولة تم تسجيل استفسارات تجارية منها خلال عام 2025 مصنفة حسب القارات ونوع السلعة."
                : "Interactive visualization of 47 destination markets representing 2025 recorded commercial inquiries."}
            </p>
          </div>

          <TradeWorldMap ar={ar} onSelectCountry={handleCountrySelect} />
        </section>

        {/* Section 2: International Market Directory */}
        <section id="market-directory" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-emerald-500 ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {ar ? "القسم الثاني: دليل الأسواق" : "Section 2: Market Directory"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "دليل الأسواق والطلب الدولي (47 دولة)" : "Our Markets & International Demand"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "بطاقات تفاعلية موسعة لكل دولة تتضمن قوائم السلع المطلوبة، المواصفات المسجلة، والكميات المحددة."
                : "Dedicated expandable profiles for all 47 countries detailing products requested, quantities, and dates."}
            </p>
          </div>

          <MarketDirectory ar={ar} selectedCountryCode={selectedCountryCode} />
        </section>

        {/* Section 3: Global Product Demand */}
        <section id="product-demand" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-amber-500 ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {ar ? "القسم الثالث: محفظة السلع" : "Section 3: Product Portfolio"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "المنتجات المطلوبة في الأسواق العالمية" : "Global Product Demand Portfolio"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "استعراض تصنيفي متكامل لـ 7 فئات رئيسية تغطي التمور، التوابل، الخضروات، الفواكه، الحبوب، الأعشاب، والسلع الاستراتيجية."
                : "Comprehensive product taxonomy covering seven core categories documented in international buyer inquiries."}
            </p>
          </div>

          <GlobalProductDemand ar={ar} />
        </section>

        {/* Section 4: Trade Intelligence & Documented Quantities */}
        <section id="trade-intelligence" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-brand-orange ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "القسم الرابع: ذكاء السوق والكميات" : "Section 4: Market Intelligence"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "ذكاء السوق ومتطلبات المشترين الموثقة" : "Market Demand & Trade Intelligence"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "لوحة بيانات تحليلية للمسار الشهري، وحصر حصري للطلبات الـ 12 المحددة كمياً بدقة في سجلات عام 2025."
                : "Analytics dashboard covering monthly trends and 12 explicitly quantified buyer requirement orders."}
            </p>
          </div>

          <TradeIntelligenceDashboard ar={ar} />
        </section>

        {/* Section 5: Our International Business Network */}
        <section id="business-network" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-teal-500 ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-400">
              {ar ? "القسم الخامس: شبكة الأعمال" : "Section 5: Business Network"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "شبكتنا التجارية الدولية" : "Our International Business Network"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "فصل كامل وصارم بين الشركاء والعملاء المتعاقد معهم فعلياً، وبين استفسارات المشترين قيد التفاوض والتدقيق."
                : "Strict separation between verified contracted clients/partners and privacy-protected buyer inquiries."}
            </p>
          </div>

          <BusinessNetworkSection ar={ar} />
        </section>

        {/* Section 6: International Trade Opportunities */}
        <section id="trade-opportunities" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-emerald-500 ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              {ar ? "القسم السادس: الفرص التجارية" : "Section 6: Trade Opportunities"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "الفرص التجارية وعروض التوريد المفتوحة" : "International Trade Opportunities"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "بوابة تقديم العروض التنافسية أمام المنتجين والموردين المؤهلين للتعاقد على كميات التصدير المطلوبة."
                : "Open bidding opportunities allowing qualified producers and suppliers to submit competitive supply quotes."}
            </p>
          </div>

          <TradeOpportunitiesSection ar={ar} />
        </section>

        {/* Section 7: Downloadable Reports */}
        <section id="trade-reports" className="scroll-mt-32 space-y-6">
          <div className="border-s-4 border-indigo-500 ps-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              {ar ? "القسم السابع: التوثيق والتحميلات" : "Section 7: Reports & Documentation"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5">
              {ar ? "تقارير ودراسات التجارة الدولية الرسمية (PDF)" : "Official Trade Reports & PDFs"}
            </h2>
            <p className="text-xs text-muted-foreground mt-1">
              {ar
                ? "مكتبة التقارير التنفيذية الخمسة الموثقة، مهيأة للتحميل والطباعة وفق الهوية البصرية للمجموعة."
                : "Comprehensive library of five executive trade reports, ready for PDF export and high-resolution printing."}
            </p>
          </div>

          <TradeReportsDownloads ar={ar} />
        </section>
      </div>
    </div>
  );
}

