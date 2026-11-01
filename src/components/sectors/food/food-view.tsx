import { Link } from "@tanstack/react-router";
import {
  Apple,
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDot,
  Droplets,
  Flower,
  Globe,
  Leaf,
  Layers,
  MapPin,
  MessageCircle,
  Package,
  Scale,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Truck,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { highlightBrand } from "@/components/site/brand-text";
import { SectorContactSection } from "@/components/site/sector-contact-section";
import { AnimatedStatistic } from "@/components/site/animated-statistic";
import { JoinPage } from "@/components/join/join-page";
import {
  foodAboutData,
  foodHeroData,
  foodMarketsData,
  foodProductsCategories,
  foodSectorsData,
  type FoodProductCategory,
  type FoodProductDetail,
  type FoodSectorItem,
} from "./food-data";

export type FoodTab = "about" | "sectors" | "products" | "markets" | "order-product" | "join";

interface FoodViewProps {
  tab?: FoodTab;
}

function SectionBadge({ title }: { title: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
      <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
      {title}
    </span>
  );
}

const sectorIcons: Record<string, typeof Flower> = {
  honey: Flower,
  olives: CircleDot,
  "olive-oil": Droplets,
  dates: Sun,
  herbs: Leaf,
  spices: Sparkles,
  "powdered-juices": Apple,
};

export function FoodSectorView({ tab = "about" }: FoodViewProps) {
  const { language } = useLanguage();
  const ar = language === "AR";
  const activeTab: FoodTab = [
    "about",
    "sectors",
    "products",
    "markets",
    "order-product",
    "join",
  ].includes(tab)
    ? tab
    : "about";

  const tabLabels: Record<FoodTab, { en: string; ar: string; descEn: string; descAr: string }> = {
    about: {
      en: "About Us",
      ar: "نبذة عنا",
      descEn: "Who we are, vision, mission, core values, supply models and why partners choose us",
      descAr: "من نحن، الرؤية والرسالة، قيم الجودة، نماذج التوريد ولماذا يختارنا الشركاء",
    },
    sectors: {
      en: "Our Sectors",
      ar: "قطاعاتنا",
      descEn: "7 specialized sectors across honey, olives, oils, dates, herbs, spices and juices",
      descAr: "7 قطاعات متخصصة في العسل، الزيتون، زيت الزيتون، التمور، الأعشاب، التوابل والعصائر",
    },
    products: {
      en: "Our Products",
      ar: "منتجاتنا",
      descEn: "Complete agri-food catalog, product varieties, grades, cuts and packaging formats",
      descAr: "كتالوج المنتجات الغذائية والطبيعية الكامل، الأصناف، درجات الجودة وخيارات التعبئة والتصدير",
    },
    markets: {
      en: "Our Markets",
      ar: "أسواقنا",
      descEn: "Arab and European markets, 2024 annual import stats, Egyptian export destinations",
      descAr: "الأسواق العربية والأوروبية، مؤشرات حجم الواردات لعام 2024، ووجهات التصدير المصرية",
    },
    "order-product": {
      en: "Order Product",
      ar: "اطلب منتج",
      descEn: "Submit your wholesale, bulk or private label request for rapid commercial quotation",
      descAr: "قدّم طلبك للتوريد بالجملة أو التعبئة الخاصة واحصل على عرض أسعار فوري ومفصل",
    },
    join: {
      en: "Join Us",
      ar: "انضم إلينا",
      descEn: "Commercial partnership, distribution contracts, apiary cooperatives & careers",
      descAr: "الشراكات التجارية، عقود التوزيع الدولي، شبكات التوريد الزراعية والفرص المهنية",
    },
  };

  return (
    <div className="w-full">
      {/* Sector Hero — Only displayed on About Us tab, matching other sectors */}
      {activeTab === "about" && (
        <section className="relative w-full overflow-hidden text-footer-foreground min-h-screen flex items-center">
          <img
            data-clip-reveal
            src={foodHeroData.heroImage}
            alt={ar ? foodHeroData.titleAr : foodHeroData.titleEn}
            className="absolute inset-0 size-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/65" />
          <div className="site-container relative w-full py-20 sm:py-28 z-10">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs font-bold tracking-wide text-white backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                  <span>
                    {ar
                      ? "مجموعة سامي بن عياد · قطاع المنتجات الطبيعية والغذائية"
                      : "SAMI BIN AYYAD · Natural & Agri-Food Products"}
                  </span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-head text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight">
                {ar ? foodHeroData.titleAr : foodHeroData.titleEn}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg sm:text-2xl text-white/90 max-w-3xl leading-relaxed">
                {ar ? foodHeroData.subtitleAr : foodHeroData.subtitleEn}
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* Render Sub Tabs */}
      {activeTab === "about" && <FoodAboutTab ar={ar} />}
      {activeTab === "sectors" && <FoodSectorsTab ar={ar} />}
      {activeTab === "products" && <FoodProductsTab ar={ar} />}
      {activeTab === "markets" && <FoodMarketsTab ar={ar} />}
      {activeTab === "order-product" && <FoodOrderProductTab ar={ar} />}
      {activeTab === "join" && <div className="pt-24 sm:pt-28"><JoinPage trackId="food" /></div>}
    </div>
  );
}

/** 1. About Us Tab */
function FoodAboutTab({ ar }: { ar: boolean }) {
  const { whoWeAre, vision, mission, approach, values, whatWeOffer, whyChooseUs } = foodAboutData;

  return (
    <div className="w-full">
      {/* Who We Are Section */}
      <section className="site-container py-16 sm:py-24">
        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl mb-12 text-center transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:border-brand-green/40">
            <SectionBadge title={ar ? "أصالة المصادر وجودة التصدير" : "Authentic Origin & Export Quality"} />
            <h2 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-4 mb-6">
              {ar ? "من نحن" : "Who We Are"}
            </h2>

            <div className="mx-auto space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl text-center">
              {(ar ? whoWeAre.paragraphsAr : whoWeAre.paragraphsEn).map((p, idx) => (
                <p key={idx}>{highlightBrand(p)}</p>
              ))}
            </div>

            {/* Direct exploration button */}
            <div className="mt-8 flex justify-center pt-4 border-t border-border/60">
              <Link
                to="/sectors/$sector"
                params={{ sector: "food" }}
                search={{ tab: "sectors" }}
                className="inline-flex items-center gap-2 rounded-full bg-brand-green px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-brand-orange hover:scale-105 active:scale-95"
              >
                <span>{ar ? "استكشف قطاعاتنا" : "Explore Our Sectors"}</span>
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Vision & Mission — Vision first, then Mission, without badges/icons */}
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {/* 1. Vision / رؤيتنا */}
          <Reveal>
            <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer">
              <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-brand-orange transition-colors">
                {ar ? vision.titleAr : vision.titleEn}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {highlightBrand(ar ? vision.descAr : vision.descEn)}
              </p>
            </div>
          </Reveal>

          {/* 2. Mission / رسالتنا */}
          <Reveal delay={0.1}>
            <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-10 shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer">
              <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-brand-green transition-colors">
                {ar ? mission.titleAr : mission.titleEn}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {highlightBrand(ar ? mission.descAr : mission.descEn)}
              </p>
            </div>
          </Reveal>
        </div>

        {/* 3. Approach / نهجنا — Without icon, without operational methodology badge */}
        <Reveal>
          <div className="group rounded-3xl border border-white/20 bg-gradient-to-br from-background/90 via-background/70 to-secondary/30 p-8 sm:p-10 shadow-lg backdrop-blur-2xl mb-16 transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green cursor-pointer">
            <h3 className="font-head text-xl sm:text-2xl font-bold text-foreground mb-4 group-hover:text-brand-green transition-colors">
              {ar ? approach.titleAr : approach.titleEn}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {highlightBrand(ar ? approach.descAr : approach.descEn)}
            </p>
          </div>
        </Reveal>

        {/* Our Values — 6 Values in Interactive Responsive Grid */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionBadge title={ar ? "ركائز التميز" : "Core Foundations"} />
              <h3 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3">
                {ar ? "قيمنا المؤسسية" : "Our Values"}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                {ar
                  ? "المبادئ المهنية التي تحكم علاقاتنا مع المزارعين والموردين والمستوردين"
                  : "The professional standards governing our relationships with growers, suppliers, and global buyers"}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-orange/15 text-brand-orange font-bold text-sm">
                      0{idx + 1}
                    </span>
                    <CheckCircle2 className="size-5 text-brand-green-text transition-transform group-hover:scale-110" />
                  </div>
                  <h4 className="font-head text-lg font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                    {ar ? v.titleAr : v.titleEn}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ar ? v.descAr : v.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* What We Offer — Supply Models */}
        <div className="mb-16">
          <Reveal>
            <div className="rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl mb-8">
              <SectionBadge title={ar ? "خدمات التوريد" : "Supply Capabilities"} />
              <h3 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
                {ar ? whatWeOffer.titleAr : whatWeOffer.titleEn}
              </h3>
              <div className="text-base text-muted-foreground leading-relaxed max-w-4xl space-y-3">
                {(ar ? whatWeOffer.descAr : whatWeOffer.descEn).split("\n\n").map((part, i) => (
                  <p key={i}>{part}</p>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeOffer.models.map((m, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl hover:border-brand-green hover:bg-card/95 cursor-pointer flex flex-col justify-between">
                  <div>
                    <span className="inline-block rounded-full bg-brand-orange/15 px-3 py-1 text-xs font-bold text-brand-orange mb-4">
                      {ar ? m.badgeAr : m.badgeEn}
                    </span>
                    <h4 className="font-head text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                      {ar ? m.titleAr : m.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {ar ? m.descAr : m.descEn}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-border/50 flex items-center justify-between">
                    <span className="text-xs font-semibold text-brand-green-text">
                      {ar ? "متاح للتوريد" : "Active Model"}
                    </span>
                    <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 rtl:group-hover:-translate-x-1" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Why Choose Us — 6 Interactive Animated Cards with Green Hover Borders */}
        <div className="mb-16">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <SectionBadge title={ar ? "الميزة التنافسية" : "Competitive Advantage"} />
              <h3 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3">
                {ar ? "لماذا تختارنا؟" : "Why Choose Us"}
              </h3>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                {ar
                  ? "معايير الجودة والموثوقية التي تجعلنا الشريك المفضل للمستوردين والموزعين"
                  : "Quality benchmarks and supply reliability making us the preferred commercial trade partner"}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.05}>
                <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 sm:p-8 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:shadow-xl hover:border-brand-green hover:scale-[1.02] cursor-pointer">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex size-11 items-center justify-center rounded-2xl bg-brand-green/15 text-brand-green-text transition-transform group-hover:scale-110">
                      <ShieldCheck className="size-5" />
                    </div>
                    <span className="text-xs font-bold text-brand-orange">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-head text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-green transition-colors">
                    {ar ? item.titleAr : item.titleEn}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {ar ? item.descAr : item.descEn}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Global Sector Contact Section */}
        <div className="mt-16">
          <SectorContactSection ar={ar} />
        </div>
      </section>
    </div>
  );
}

/** 2. Our Sectors Tab */
function FoodSectorsTab({ ar }: { ar: boolean }) {
  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      <Reveal>
        <div className="max-w-3xl mb-12">
          <SectionBadge title={ar ? "تنوع زراعي وصناعي متكامل" : "Integrated Agri-Food Divisions"} />
          <h2 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
            {ar
              ? "7 قطاعات متخصصة تغطي أهم سلاسل القيمة الغذائية"
              : "7 Specialized Divisions Covering Premier Agri-Food Value Chains"}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {ar
              ? "يضم قطاع المنتجات الطبيعية والغذائية بمجموعة سامي بن عياد مجموعة من الأنشطة التجارية المتخصصة التي تغطي عددًا من أهم فئات المنتجات الغذائية والطبيعية، بما يتيح تنوعًا في المنتجات وحلول التوريد."
              : "The sector encompasses dedicated commercial divisions covering the most vital food and natural product classes, ensuring extensive product variety, origin certification, and flexible supply programs."}
          </p>
        </div>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {foodSectorsData.map((sec, idx) => {
          const IconComp = sectorIcons[sec.id] || Flower;
          return (
            <Reveal key={sec.id} delay={idx * 0.05}>
              <div className="group h-full rounded-3xl border border-white/20 bg-background/80 overflow-hidden shadow-lg backdrop-blur-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-brand-green hover:-translate-y-1.5 flex flex-col justify-between cursor-pointer">
                <div>
                  {/* Sector Image Banner */}
                  <div className="relative h-48 w-full overflow-hidden bg-secondary">
                    <img
                      src={sec.image}
                      alt={ar ? sec.nameAr : sec.nameEn}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute top-4 start-4 flex size-11 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md text-white border border-white/30 shadow-md">
                      <IconComp className="size-5" />
                    </div>
                    <span className="absolute bottom-3 start-4 text-xs font-bold text-white/90">
                      {ar ? `قطاع رقم 0${idx + 1}` : `Division 0${idx + 1}`}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="font-head text-xl font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                      {ar ? sec.nameAr : sec.nameEn}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                      {ar ? sec.descAr : sec.descEn}
                    </p>

                    {/* Bullet Highlights */}
                    <div className="space-y-2 border-t border-border/60 pt-4">
                      <span className="text-xs font-bold text-brand-orange block mb-2">
                        {ar ? "أبرز الأصناف والتطبيقات:" : "Key Varieties & Applications:"}
                      </span>
                      {(ar ? sec.highlightsAr : sec.highlightsEn).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-foreground/85">
                          <Check className="size-3.5 text-brand-green-text shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "food" }}
                    search={{ tab: "products" }}
                    className="w-full flex items-center justify-between rounded-2xl border border-border bg-secondary/60 px-4 py-2.5 text-xs font-bold text-foreground transition-all duration-200 hover:bg-brand-green hover:text-white hover:border-brand-green"
                  >
                    <span>{ar ? "استعراض منتجات هذا القطاع" : "Browse Category Products"}</span>
                    <ArrowRight className="size-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

/** 3. Our Products Tab */
function FoodProductsTab({ ar }: { ar: boolean }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = useMemo(() => {
    return foodProductsCategories
      .map((cat) => {
        if (selectedCategory !== "all" && cat.id !== selectedCategory) {
          return null;
        }

        const filteredItems = cat.items.filter((item) => {
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase().trim();
          const nameMatch =
            item.nameAr.toLowerCase().includes(q) || item.nameEn.toLowerCase().includes(q);
          const descMatch =
            item.descAr.toLowerCase().includes(q) || item.descEn.toLowerCase().includes(q);
          const tagsMatch =
            item.tagsAr.some((t) => t.toLowerCase().includes(q)) ||
            item.tagsEn.some((t) => t.toLowerCase().includes(q));
          return nameMatch || descMatch || tagsMatch;
        });

        if (filteredItems.length === 0 && searchQuery.trim()) return null;

        return {
          ...cat,
          items: filteredItems,
        };
      })
      .filter(Boolean) as FoodProductCategory[];
  }, [selectedCategory, searchQuery]);

  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      {/* Category Filter Pills & Search */}
      <Reveal>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-border/60">
          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-bold transition-all duration-200",
                selectedCategory === "all"
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "border border-border bg-background/80 text-foreground hover:bg-secondary hover:text-brand-orange"
              )}
            >
              {ar ? "جميع المنتجات (7 قطاعات)" : "All Products (7 Categories)"}
            </button>

            {foodProductsCategories.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCategory(c.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-xs font-bold transition-all duration-200",
                  selectedCategory === c.id
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "border border-border bg-background/80 text-foreground hover:bg-secondary hover:text-brand-orange"
                )}
              >
                {ar ? c.titleAr.split(". ")[1] || c.titleAr : c.titleEn.split(". ")[1] || c.titleEn}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder={ar ? "ابحث عن صنف أو بهار أو نوع زيت..." : "Search product, seed or variety..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-background/90 px-4 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange shadow-inner"
            />
          </div>
        </div>
      </Reveal>

      {/* Render Product Categories */}
      <div className="space-y-16">
        {filteredCategories.map((cat, idx) => (
          <Reveal key={cat.id} delay={idx * 0.05}>
            <div className="rounded-3xl border border-white/20 bg-background/85 p-6 sm:p-10 shadow-xl backdrop-blur-2xl">
              {/* Category Header */}
              <div className="border-b border-border/60 pb-6 mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <SectionBadge title={ar ? "كتالوج التصدير والمواصفات" : "Export Catalog & Specs"} />
                  <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-2">
                    {ar ? cat.titleAr : cat.titleEn}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-1 max-w-3xl leading-relaxed">
                    {ar ? cat.introAr : cat.introEn}
                  </p>
                </div>

                <Link
                  to="/sectors/$sector"
                  params={{ sector: "food" }}
                  search={{ tab: "order-product" }}
                  className="inline-flex items-center gap-2 self-start rounded-full bg-brand-orange/15 border border-brand-orange/30 px-5 py-2.5 text-xs font-bold text-brand-orange hover:bg-brand-orange hover:text-white transition-all shrink-0"
                >
                  <span>{ar ? "طلب توريد لهذه الفئة" : "Request Sourcing"}</span>
                  <ArrowRight className="size-3.5 rtl:rotate-180" />
                </Link>
              </div>

              {/* Items Grid */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-8">
                {cat.items.map((item) => (
                  <div
                    key={item.id}
                    className="group rounded-2xl border border-border/70 bg-secondary/40 p-4 transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-brand-green hover:bg-background hover:shadow-lg flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h4 className="font-head text-sm sm:text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                          {ar ? item.nameAr : item.nameEn}
                        </h4>
                        <span className="size-2 rounded-full bg-brand-green shrink-0 group-hover:animate-ping" />
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {ar ? item.descAr : item.descEn}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/40">
                      {(ar ? item.tagsAr : item.tagsEn).map((t, ti) => (
                        <span
                          key={ti}
                          className="rounded-md bg-background px-2 py-0.5 text-[10px] font-semibold text-foreground/80 border border-border/50 group-hover:border-brand-orange/40 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Packaging / Preparation Forms Box if available */}
              {(cat.prepFormsAr || cat.specsAr) && (
                <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5 transition-all duration-300 hover:border-brand-orange/40 hover:shadow-md">
                  <div className="flex items-center gap-2 mb-3">
                    <Package className="size-4 text-brand-orange" />
                    <h5 className="font-head text-xs sm:text-sm font-bold text-foreground">
                      {ar
                        ? "خيارات التجهيز وأشكال التوريد والتعبئة المتاحة:"
                        : "Available Packaging, Grading & Sourcing Formats:"}
                    </h5>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {((ar ? cat.prepFormsAr : cat.prepFormsEn) ||
                      (ar ? cat.specsAr : cat.specsEn))?.map((fmt, fi) => (
                      <div
                        key={fi}
                        className="flex items-center gap-2 rounded-xl bg-background/80 px-3 py-2 text-xs font-medium text-foreground/90 border border-border/60 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:border-brand-green cursor-pointer"
                      >
                        <CheckCircle2 className="size-3.5 text-brand-green-text shrink-0" />
                        <span className="truncate">{fmt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </Reveal>
        ))}

        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-base">
              {ar
                ? "لم يتم العثور على نتائج تطابق بحثك. جرّب كتابة اسم آخر."
                : "No items match your search. Please try a different query."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

/** 4. Our Markets Tab */
function FoodMarketsTab({ ar }: { ar: boolean }) {
  const { introAr, introEn, arabMarkets, europeanMarkets, stats2024, egyptianExports, globalOutlook } =
    foodMarketsData;

  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      {/* Intro Reach Card */}
      <Reveal>
        <div className="rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl mb-12">
          <SectionBadge title={ar ? "انتشارنا التجاري والجغرافي" : "Commercial & Geographic Reach"} />
          <h2 className="font-head text-2xl sm:text-4xl font-bold tracking-tight text-foreground mt-3 mb-4">
            {ar ? "حضور ممتد في الأسواق العربية والأوروبية" : "Expanding Presence Across Arab & European Markets"}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-4xl">
            {ar ? introAr : introEn}
          </p>
        </div>
      </Reveal>

      {/* 2024 Market Size Indicators Banner */}
      <Reveal>
        <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background to-secondary/30 p-8 sm:p-10 shadow-lg backdrop-blur-2xl mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border/60 pb-6 mb-8">
            <div>
              <SectionBadge title={ar ? "مؤشرات حجم الأسواق لعام 2024" : "2024 Global Import Indicators"} />
              <h3 className="font-head text-xl sm:text-3xl font-bold text-foreground mt-2">
                {ar ? "أبرز مؤشرات الاستيراد السنوي في الأسواق المستهدفة" : "Annual Import Volumes in Target Export Destinations"}
              </h3>
            </div>
            <span className="text-xs font-bold text-brand-orange bg-brand-orange/15 px-3 py-1.5 rounded-full shrink-0">
              {ar ? "بيانات موثقة لعام 2024" : "Verified 2024 Trade Data"}
            </span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats2024.map((stat, sIdx) => (
              <div
                key={sIdx}
                className="rounded-2xl border border-white/25 bg-background/80 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:border-brand-green hover:shadow-lg cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-2 rounded-full bg-brand-orange animate-pulse" />
                  <h4 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? stat.productAr : stat.productEn}
                  </h4>
                </div>
                <div className="space-y-3">
                  {stat.data.map((row, rIdx) => (
                    <div key={rIdx} className="flex items-center justify-between text-xs border-b border-border/40 pb-2 last:border-0 last:pb-0">
                      <span className="text-muted-foreground">{ar ? row.countryAr : row.countryEn}</span>
                      <span className="font-bold text-foreground font-mono">{row.volume}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Arab Markets Section */}
      <div className="mb-16">
        <Reveal>
          <div className="mb-8">
            <SectionBadge title={ar ? "الشرق الأوسط والخليج" : "Middle East & GCC"} />
            <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-2">
              {ar ? "الأسواق العربية المستهدفة" : "Target Arab Markets"}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {ar
                ? "علاقات توريد تجارية نشطة وطلب مستمر على العسل، زيت الزيتون، التمور، والتوابل"
                : "Active commercial supply lines with sustained demand for honey, olive oils, dates, and spices"}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {arabMarkets.map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:border-brand-green hover:bg-card/95 flex flex-col justify-between cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                      <MapPin className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold text-brand-green-text">
                      {ar ? "سوق إقليمي" : "Regional Market"}
                    </span>
                  </div>
                  <h4 className="font-head text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-orange transition-colors">
                    {ar ? m.countryAr : m.countryEn}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {m.descAr && (ar ? m.descAr : m.descEn)}
                  </p>
                </div>

                {m.statAr && (
                  <div className="rounded-xl bg-secondary/80 p-3 text-xs font-semibold text-brand-orange border border-border/50">
                    {ar ? m.statAr : m.statEn}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* European Markets Section */}
      <div className="mb-16">
        <Reveal>
          <div className="mb-8">
            <SectionBadge title={ar ? "الاتحاد الأوروبي والمملكة المتحدة" : "European Union & UK"} />
            <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-2">
              {ar ? "الأسواق الأوروبية المستهدفة" : "Target European Markets"}
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-1">
              {ar
                ? "مواصفات قياسية معتمدة وتوريد منظم للموزعين ومراكز إعادة التصدير والمصانع"
                : "Certified technical compliance and organized supply for distributors, re-export hubs, and food processors"}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {europeanMarkets.map((m, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div className="group h-full rounded-3xl border border-white/20 bg-background/80 p-6 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-xl hover:border-brand-green hover:bg-card/95 flex flex-col justify-between cursor-pointer">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand-green/15 text-brand-green-text">
                      <Globe className="size-4" />
                    </span>
                    <span className="text-[11px] font-bold text-brand-orange">
                      {ar ? "أوروبا" : "Europe"}
                    </span>
                  </div>
                  <h4 className="font-head text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-green transition-colors">
                    {ar ? m.countryAr : m.countryEn}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {ar ? m.descAr : m.descEn}
                  </p>
                </div>

                {m.statAr && (
                  <div className="rounded-xl bg-secondary/80 p-3 text-[11px] font-semibold text-brand-green-text border border-border/50">
                    {ar ? m.statAr : m.statEn}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Egyptian Products in International Markets */}
      <Reveal>
        <div className="rounded-3xl border border-white/20 bg-background/80 p-8 sm:p-12 shadow-xl backdrop-blur-2xl mb-12">
          <SectionBadge title={ar ? "الريادة التصديرية المصرية" : "Egyptian Export Leadership"} />
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-3">
            {ar ? egyptianExports.titleAr : egyptianExports.titleEn}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8 max-w-4xl">
            {ar ? egyptianExports.descAr : egyptianExports.descEn}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {egyptianExports.destinations.map((dest, di) => (
              <div
                key={di}
                className="rounded-2xl border border-border/70 bg-secondary/50 p-5 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:border-brand-green hover:shadow-md cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="size-4 text-brand-green-text" />
                  <h4 className="font-head text-sm sm:text-base font-bold text-foreground">
                    {ar ? dest.productAr : dest.productEn}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <span className="font-semibold text-foreground/90">
                    {ar ? "أبرز الوجهات: " : "Top Destinations: "}
                  </span>
                  {ar ? dest.countriesAr : dest.countriesEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Global Outlook */}
      <Reveal>
        <div className="rounded-3xl border border-brand-orange/30 bg-gradient-to-r from-background/90 via-secondary/40 to-background/90 p-8 sm:p-12 shadow-lg backdrop-blur-2xl text-center max-w-4xl mx-auto">
          <SectionBadge title={ar ? "آفاق المستقبل" : "Global Horizon"} />
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mt-3 mb-4">
            {ar ? globalOutlook.titleAr : globalOutlook.titleEn}
          </h3>
          <p className="text-muted-foreground text-base leading-relaxed">
            {highlightBrand(ar ? globalOutlook.descAr : globalOutlook.descEn)}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              to="/sectors/$sector"
              params={{ sector: "food" }}
              search={{ tab: "order-product" }}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-xl shadow-brand-orange/25 transition-all duration-300 hover:bg-brand-green hover:scale-105 active:scale-95"
            >
              <span>{ar ? "اطلب منتج الآن" : "Order Products Now"}</span>
              <ArrowRight className="size-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/** 5. Order Product Tab (RFQ Form) */
function FoodOrderProductTab({ ar }: { ar: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    category: "honey",
    supplyModel: "bulk",
    packaging: "jars",
    volume: "",
    destination: "",
    name: "",
    company: "",
    email: "",
    phone: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="site-container py-16 sm:py-24">
        <div className="max-w-2xl mx-auto rounded-3xl border border-brand-green/30 bg-background/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl text-center">
          <div className="flex size-16 items-center justify-center rounded-3xl bg-brand-green/20 text-brand-green-text mx-auto mb-6">
            <Check className="size-8" />
          </div>
          <h3 className="font-head text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {ar ? "تم استلام طلبك بنجاح!" : "Order Request Received Successfully!"}
          </h3>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
            {ar
              ? "شكرًا لاهتمامك بمنتجات مجموعة سامي بن عياد. سيقوم فريق المبيعات والتصدير بمراجعة طلبك وإرسال عرض الأسعار والمواصفات الفنية خلال 24 ساعة."
              : "Thank you for partnering with SAMI BIN AYYAD GROUP. Our export commercial desk will review your specifications and contact you with a formal quotation within 24 hours."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="size-4" />
              <span>{ar ? "متابعة الطلب عبر واتساب" : "Follow Up on WhatsApp"}</span>
            </a>

            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="rounded-full border border-border bg-secondary px-6 py-3 text-sm font-bold text-foreground hover:bg-secondary/80 transition-all"
            >
              {ar ? "إرسال طلب جديد" : "Submit Another Request"}
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="site-container pt-28 sm:pt-36 pb-20">
      <Reveal>
        <div className="max-w-3xl mx-auto rounded-3xl border border-white/20 bg-background/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/40">
          <div className="text-center mb-8">
            <SectionBadge title={ar ? "طلب عروض الأسعار والتوريد" : "Request for Quotation (RFQ)"} />
            <h2 className="font-head text-2xl sm:text-4xl font-bold text-foreground mt-3 mb-2">
              {ar ? "نموذج طلب وتوريد المنتجات الطبيعية" : "Natural Products Order & Supply RFQ"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto">
              {ar
                ? "حدد فئة المنتجات ونموذج التوريد المطلوب لنوافيكم بعرض فني وتجاري تفصيلي يشمل المواصفات والتحاليل والأسعار."
                : "Select your desired product category and supply model to receive a comprehensive commercial and technical proposal."}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Category Selection */}
            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                {ar ? "1. فئة المنتج المطلوب *" : "1. Desired Product Category *"}
              </label>
              <select
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
              >
                <option value="honey">{ar ? "العسل الطبيعي ومنتجات النحل" : "Natural Honey & Bee Products"}</option>
                <option value="olives">{ar ? "الزيتون المصري بمختلف أشكاله" : "Egyptian Table Olives"}</option>
                <option value="olive-oil">{ar ? "زيت الزيتون وأنواعه (بكر ممتاز / بكر)" : "Olive Oil & EVOO"}</option>
                <option value="dates">{ar ? "التمور ومنتجات النخيل (مجدول / سيوي / معجون)" : "Dates & Palm Derivatives"}</option>
                <option value="herbs">{ar ? "الأعشاب والنباتات الطبيعية المصرية" : "Egyptian Aromatic Herbs & Botanicals"}</option>
                <option value="powdered-juices">{ar ? "العصائر والمكونات الطبيعية المجففة (بودر)" : "Natural Powdered Juices"}</option>
                <option value="spices">{ar ? "التوابل والبهارات المفردة والخلطات" : "Single Spices & Seasoning Blends"}</option>
              </select>
            </div>

            {/* 2. Supply Model & Packaging */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "2. نموذج التوريد *" : "2. Supply Model *"}
                </label>
                <select
                  required
                  value={formData.supplyModel}
                  onChange={(e) => setFormData({ ...formData, supplyModel: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="bulk">{ar ? "توريد بالجملة والكميات الكبيرة (Bulk)" : "Bulk Wholesale"}</option>
                  <option value="private-label">{ar ? "تعبئة بعلامة العميل الخاصة (Private Label)" : "Private Label OEM"}</option>
                  <option value="horeca">{ar ? "توريد قطاع الضيافة والمطاعم (HoReCa)" : "HoReCa & Food Service"}</option>
                  <option value="distribution">{ar ? "توزيع ووكالة تجارية حصرية" : "Commercial Distribution"}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "3. نوع التعبئة المفضل *" : "3. Packaging Preference *"}
                </label>
                <select
                  required
                  value={formData.packaging}
                  onChange={(e) => setFormData({ ...formData, packaging: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                >
                  <option value="jars">{ar ? "برطمانات زجاجية للتجزئة (Retail Glass Jars)" : "Retail Glass Jars"}</option>
                  <option value="pouches">{ar ? "أكياس وعبوات محكمة الغلق (Pouches / Sacks)" : "Sealed Pouches / Sacks"}</option>
                  <option value="drums">{ar ? "براميل غذائية صناعية 150-200-300 كجم" : "Industrial Food Drums (150-300kg)"}</option>
                  <option value="ibc">{ar ? "خزانات وسوائل IBC سعة 1000 لتر" : "1,000L Bulk IBC Totes"}</option>
                  <option value="cartons">{ar ? "كراتين مجهزة للتصدير المباشر" : "Direct Export Cartons"}</option>
                </select>
              </div>
            </div>

            {/* 3. Estimated Quantity & Target Country */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "الكمية التقديرية المطلوبة (طن / عبوة)" : "Estimated Quantity (Tonnes / Units)"}
                </label>
                <input
                  type="text"
                  placeholder={ar ? "مثال: 20 طن شهريًا أو حاوية 20 قدم" : "e.g. 20 tonnes or 1x20ft container"}
                  value={formData.volume}
                  onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "دولة الوجهة / ميناء الوصول *" : "Target Destination Country / Port *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={ar ? "مثال: السعودية / ميناء جدة، فرنسا / لوهافر" : "e.g. Saudi Arabia, Germany, UAE"}
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            {/* 4. Contact Information */}
            <div className="grid gap-4 sm:grid-cols-2 pt-2 border-t border-border/60">
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "الاسم الكريم *" : "Your Name *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={ar ? "الاسم بالكامل" : "Full Name"}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "اسم الشركة / المنشأة *" : "Company / Organization *"}
                </label>
                <input
                  required
                  type="text"
                  placeholder={ar ? "اسم شركتك أو جهة الاستيراد" : "Company or Trading Name"}
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "البريد الإلكتروني *" : "Official Email *"}
                </label>
                <input
                  required
                  type="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                  {ar ? "رقم الهاتف / واتساب مع رمز الدولة *" : "Phone / WhatsApp with Country Code *"}
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+20 12..."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full rounded-2xl border border-border bg-secondary/60 px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground uppercase tracking-wider mb-2">
                {ar ? "تفاصيل إضافية أو مواصفات خاصة" : "Additional Specs or Notes"}
              </label>
              <textarea
                rows={3}
                placeholder={ar ? "يرجى ذكر أي اشتراطات معملية أو نسب حموضة أو أحجام محددة..." : "Mention specific lab criteria, acidity levels, cut sizes..."}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full rounded-2xl border border-border bg-secondary/60 p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <Button
              type="submit"
              className="w-full rounded-full bg-brand-orange py-4 text-sm font-bold text-white shadow-xl shadow-brand-orange/30 hover:bg-brand-green transition-all duration-300 hover:scale-[1.01] active:scale-95"
            >
              <Send className="size-4 me-2 rtl:rotate-180" />
              <span>{ar ? "إرسال طلب التوريد وعرض السعر" : "Submit RFQ & Sourcing Request"}</span>
            </Button>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
