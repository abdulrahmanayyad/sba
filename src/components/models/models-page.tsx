import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowLeft, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  MessageCircle, 
  Search, 
  Send, 
  X, 
  ZoomIn 
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { 
  allProducts, 
  type ProductCategory, 
  type ProductSeason, 
  type ProductItem 
} from "@/lib/all-products-data";

const PAGE_SIZE = 24;

export const SUBCATEGORY_LABELS_AR: Record<string, string> = {
  "Casual": "كاجوال",
  "Cotton Sets": "أطقم قطنية",
  "Jeans Sets": "أطقم جينز",
  "Jumpsuit": "سلوبيت",
  "Long Suites": "أطقم وبدل طويلة",
  "Short Suites": "أطقم وبدل قصيرة",
  "Shirts & Blouses": "قمصان وبلوزات",
  "Blouses": "بلوزات",
  "Suites": "بدل وأطقم",
  "T-Shirts": "تي شيرتات",
  "Dresses": "فساتين",
  "Home Wear": "ملابس منزل وبيجامات",
  "Kids Wear": "أطقم وملابس أطفال",
  "Lingerie": "ملابس داخلية ولانجيري",
};

export function getSubcategoryLabel(sub: string, ar: boolean): string {
  if (!sub) return "";
  if (ar) return SUBCATEGORY_LABELS_AR[sub] || sub;
  return sub;
}

export function getAgeLabel(age: string, ar: boolean): string {
  if (age === "adults") return ar ? "البالغين" : "Adults";
  if (age === "2-5") return ar ? "2 - 5 سنوات" : "2-5 yrs";
  if (age === "3-6") return ar ? "3 - 6 سنوات" : "3-6 yrs";
  if (age === "6-12") return ar ? "6 - 12 سنة" : "6-12 yrs";
  if (age === "8-14") return ar ? "8 - 14 سنة" : "8-14 yrs";
  return ar ? `سن (${age})` : `Age ${age}`;
}

interface CategoryConfig {
  key: ProductCategory;
  labelEn: string;
  labelAr: string;
  descEn: string;
  descAr: string;
}

const categoriesConfig: CategoryConfig[] = [
  {
    key: "all",
    labelEn: "All Collections",
    labelAr: "كافة التشكيلات",
    descEn: "Explore our comprehensive ready-made garment manufacturing library.",
    descAr: "استكشف مكتبتنا الشاملة لتصنيع الملابس الجاهزة",
  },
  {
    key: "kids",
    labelEn: "Kids & Baby Wear",
    labelAr: "ملابس الأطفال والرضع",
    descEn: "Extensive collections for children across all age ranges from toddlers to teens.",
    descAr: "تشكيلات واسعة ومتنوعة لملابس الأطفال والرضع من سن المشي وحتى سن المراهقة.",
  },
  {
    key: "lingerie",
    labelEn: "Underwear & Lingerie",
    labelAr: "ملابس الأندر وير واللانجيري",
    descEn: "Fine fabrics, delicate lace, and premium private-label intimate wear.",
    descAr: "خامات قطنية راقية، دانتيل ناعم، ومجموعات ملابس داخلية عالية الجودة للعلامات الخاصة.",
  },
  {
    key: "homewear",
    labelEn: "Homewear & Pyjamas",
    labelAr: "ملابس الهوم وير والبيجامات",
    descEn: "Comfortable, premium loungewear, sleepwear, and relaxed sets.",
    descAr: "ملابس منزل وبيجامات قطنية فاخرة بتصاميم عصرية مريحة لكافة الفئات.",
  },
];

export function ModelsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [activeSeason, setActiveSeason] = useState<ProductSeason>("all");
  const [selectedSubcat, setSelectedSubcat] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeItem, setActiveItem] = useState<ProductItem | null>(null);

  // Available subcategories based on current category and season
  const availableSubcategories = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach((p) => {
      if (activeCategory === "all" || p.category === activeCategory) {
        if (activeSeason === "all" || p.season === activeSeason) {
          if (p.subcategory && p.subcategory !== "Home Wear" && p.subcategory !== "Lingerie") {
            set.add(p.subcategory);
          }
        }
      }
    });
    return Array.from(set).sort();
  }, [activeCategory, activeSeason]);

  // Available ages based on current category and season
  const availableAges = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach((p) => {
      if (activeCategory === "all" || p.category === activeCategory) {
        if (activeSeason === "all" || p.season === activeSeason) {
          if (p.age) set.add(p.age);
        }
      }
    });
    const order = ["2-5", "3-6", "6-12", "8-14", "adults"];
    return Array.from(set).sort((a, b) => {
      const idxA = order.indexOf(a);
      const idxB = order.indexOf(b);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      return a.localeCompare(b);
    });
  }, [activeCategory, activeSeason]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allProducts.length };
    allProducts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered products
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      if (activeCategory !== "all" && p.category !== activeCategory) return false;
      if (activeSeason !== "all" && p.season !== activeSeason) return false;
      if (selectedSubcat !== "all" && p.subcategory !== selectedSubcat) return false;
      if (selectedAge !== "all" && p.age !== selectedAge) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesCode = p.code.toLowerCase().includes(q) || (p.originalCode && p.originalCode.toLowerCase().includes(q));
        const matchesSubcat = p.subcategory.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        if (!matchesCode && !matchesSubcat && !matchesCat) return false;
      }
      return true;
    });
  }, [activeCategory, activeSeason, selectedSubcat, selectedAge, searchQuery]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / PAGE_SIZE) || 1;
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [filteredProducts, currentPage]);

  const handleCategoryChange = (cat: ProductCategory) => {
    setActiveCategory(cat);
    setSelectedSubcat("all");
    setSelectedAge("all");
    setCurrentPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 380, behavior: "smooth" });
  };

  const currentConfig = categoriesConfig.find((c) => c.key === activeCategory) ?? categoriesConfig[0]!;

  return (
    <div className="w-full">
      {/* 1. Hero Section matching website aesthetic with matched BG */}
      <section className="relative w-full overflow-hidden text-footer-foreground min-h-[420px] md:min-h-[480px] flex items-center">
        <img
          data-clip-reveal
          src="/BG/Apparel Manufacturing/Apparel Manufacturing Home Page.jpg"
          alt={ar ? "كتالوج الملابس الجاهزة" : "Ready-Made Garments Catalogue"}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/65" />
        <div className="site-container relative w-full py-16 md:py-24 z-10">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "كتالوج الملابس الجاهزة" : "Ready-Made Garments Catalogue"}</span>
            </div>

            <h1 className="mt-2 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
              {ar ? "كتالوج الملابس الجاهزة" : "Ready-Made Garments Catalogue"}
            </h1>

            <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
              {ar
                ? "تصفح الموديلات بحسب الفئة والموسم والفئة العمرية، واختر التصاميم المناسبة لطلب التصنيع. تُراجع الخامات والمقاسات والكميات والألوان ومواعيد التسليم قبل تأكيد الطلب."
                : "Browse styles by collection, garment category, season, and age range. Select the designs you would like to discuss, then confirm materials, sizes, colours, quantities and delivery requirements with our manufacturing team."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Main Content & Explorer */}
      <main className="site-container py-10 md:py-16 space-y-10">
        {/* Category Navigation Pills */}
        <div className="rounded-3xl border border-white/30 bg-background/80 p-4 shadow-lg backdrop-blur-2xl space-y-3">
          <div className="flex flex-wrap gap-2">
            {categoriesConfig.map((cat) => {
              const count = categoryCounts[cat.key] || 0;
              const isActive = activeCategory === cat.key;
              const isAll = cat.key === "all";
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className={cn(
                    "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-body font-bold transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-brand-green text-white shadow-md shadow-brand-green/25 scale-[1.02]"
                      : "bg-secondary/60 text-foreground hover:bg-secondary hover:text-brand-orange"
                  )}
                >
                  <span>{ar ? cat.labelAr : cat.labelEn}</span>
                  {!isAll && (
                    <span
                      className={cn(
                        "rounded-full px-2 py-0.5 font-mono text-[11px]",
                        isActive ? "bg-white/20 text-white font-bold" : "bg-black/5 text-muted-foreground"
                      )}
                    >
                      {count.toLocaleString()}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Season Selector Filter inside Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
            <span className="text-xs font-body font-bold text-muted-foreground me-1">
              {ar ? "الموسم:" : "Season:"}
            </span>
            {[
              { key: "all", labelAr: "كافة المواسم", labelEn: "All Seasons" },
              { key: "summer", labelAr: "المجموعة الصيفية", labelEn: "Summer Collection" },
              { key: "winter", labelAr: "المجموعة الشتوية", labelEn: "Winter Collection" },
            ].map((season) => {
              const isActive = activeSeason === season.key;
              return (
                <button
                  key={season.key}
                  type="button"
                  onClick={() => {
                    setActiveSeason(season.key as ProductSeason);
                    setCurrentPage(1);
                  }}
                  className={cn(
                    "rounded-full px-3.5 py-1 text-xs font-body font-bold transition-all duration-300 cursor-pointer",
                    isActive
                      ? "bg-brand-orange text-white shadow-xs"
                      : "border border-border/80 bg-background/80 text-foreground hover:bg-secondary hover:border-brand-orange/40"
                  )}
                >
                  {ar ? season.labelAr : season.labelEn}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Description Banner + Controls */}
        <Reveal>
          <div className="rounded-3xl border border-white/40 bg-background/85 p-6 md:p-8 shadow-sm backdrop-blur-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-brand-orange mb-1">
                <span>{ar ? currentConfig.labelAr : currentConfig.labelEn}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                {ar ? currentConfig.labelAr : currentConfig.labelEn}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                {ar ? currentConfig.descAr : currentConfig.descEn}
              </p>
            </div>

            {/* Quick Action Button to Start Project */}
            <div className="shrink-0 flex items-center gap-3">
              <Button
                asChild
                className="rounded-full bg-brand-green hover:bg-brand-orange text-white px-6 font-head font-bold shadow-md transition-all duration-300"
              >
                <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "start-project" }}>
                  <span>{ar ? "طلب تصنيع خاص" : "Custom Manufacturing"}</span>
                  <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
            {/* Search Input */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder={ar ? "ابحث برقم الموديل أو النوع..." : "Search by code or style..."}
                className="w-full rounded-full border border-border bg-background/70 py-2 ps-9 pe-8 text-xs font-medium text-foreground placeholder:text-muted-foreground focus:border-brand-green focus:outline-none focus:ring-1 focus:ring-brand-green"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute end-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Subcategory Select if available */}
            {availableSubcategories.length > 0 && (
              <select
                value={selectedSubcat}
                onChange={(e) => {
                  setSelectedSubcat(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-body font-semibold text-foreground focus:border-brand-green focus:outline-none cursor-pointer"
              >
                <option value="all">{ar ? "كافة الأنواع والتصنيفات" : "All Subcategories"}</option>
                {availableSubcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {getSubcategoryLabel(sub, ar)}
                  </option>
                ))}
              </select>
            )}

            {/* Age Range Select if available */}
            {availableAges.length > 0 && (
              <select
                value={selectedAge}
                onChange={(e) => {
                  setSelectedAge(e.target.value);
                  setCurrentPage(1);
                }}
                className="rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-body font-semibold text-foreground focus:border-brand-green focus:outline-none cursor-pointer"
              >
                <option value="all">{ar ? "كافة الأعمار" : "All Age Ranges"}</option>
                {availableAges.map((age) => (
                  <option key={age} value={age}>
                    {getAgeLabel(age, ar)}
                  </option>
                ))}
              </select>
            )}

            {/* Reset Filters button if filtered */}
            {(selectedSubcat !== "all" || selectedAge !== "all" || activeSeason !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setActiveSeason("all");
                  setSelectedSubcat("all");
                  setSelectedAge("all");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-body font-bold text-brand-orange hover:underline underline-offset-4 cursor-pointer"
              >
                {ar ? "إعادة تعيين الفلاتر" : "Reset Filters"}
              </button>
            )}
          </div>

          {/* Results Summary - Pages Only per user request */}
          <div className="text-xs font-body font-bold text-muted-foreground">
            {ar
              ? `صفحة ${currentPage} من أصل ${totalPages} صفحة`
              : `Page ${currentPage} of ${totalPages}`}
          </div>
        </div>

        {/* 3. Products Grid */}
        {paginatedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {paginatedProducts.map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className="group relative flex flex-col overflow-hidden rounded-2xl sm:rounded-3xl border border-white/30 bg-background/70 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/50 hover:shadow-xl cursor-pointer"
              >
                {/* Image Container with 3:4 Fashion Ratio */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted/40">
                  <img
                    src={item.image}
                    alt={item.code}
                    loading="lazy"
                    className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.opacity = "0.5";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Zoom badge hint */}
                  <div className="absolute bottom-2.5 end-2.5 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="size-3" />
                    <span>{ar ? "تكبير" : "Preview"}</span>
                  </div>

                  {/* Code Tag Top */}
                  <div className="absolute top-2.5 start-2.5">
                    <span className="rounded-full bg-black/65 px-2.5 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md border border-white/20">
                      {item.code}
                    </span>
                  </div>
                </div>

                {/* Meta details footer */}
                <div className="p-3">
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[11px] font-bold text-foreground line-clamp-1 group-hover:text-brand-green transition-colors">
                      {ar ? getSubcategoryLabel(item.subcategory, true) : (item.subcategory || item.code)}
                    </span>
                    {item.age && (
                      <span className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-body text-[10px] font-semibold text-muted-foreground">
                        {getAgeLabel(item.age, ar)}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-body text-muted-foreground font-semibold mb-2">
                    {ar ? (
                      <>
                        <span>الموديل: </span>
                        <span className="font-mono font-bold text-foreground/80">{item.code}</span>
                      </>
                    ) : (
                      <>
                        <span>Ref: </span>
                        <span className="font-mono font-bold text-foreground/80">{item.code}</span>
                      </>
                    )}
                  </p>

                  <Button
                    asChild
                    size="sm"
                    className="w-full h-7 text-[10px] font-body font-bold rounded-xl bg-brand-green text-white hover:bg-brand-orange transition-all py-0 px-2 shadow-sm"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link to="/models/$code" params={{ code: item.code }}>
                      {ar ? "اطلب هذا التصميم" : "Order Design"}
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/20">
            <p className="text-base font-body font-semibold text-muted-foreground">
              {ar ? "لم نعثر على موديلات مطابقة. جرّب تعديل الفلاتر." : "No styles match your selection. Try adjusting the filters."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveCategory("all");
                setActiveSeason("all");
                setSelectedSubcat("all");
                setSelectedAge("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="mt-4 rounded-full font-body font-bold"
            >
              {ar ? "عرض جميع التصميمات" : "View All Designs"}
            </Button>
          </div>
        )}

        {/* 4. Pagination Navigation */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-8 border-t border-border/80">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="rounded-full px-5 h-9 text-xs font-body font-bold inline-flex items-center justify-center text-center gap-1.5"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
              <span>{ar ? "السابق" : "Previous"}</span>
            </Button>

            {/* Page Jump Numbers */}
            <div className="flex items-center gap-1.5 font-body text-xs">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum = currentPage;
                if (currentPage <= 3) pageNum = i + 1;
                else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                else pageNum = currentPage - 2 + i;

                if (pageNum < 1 || pageNum > totalPages) return null;

                const isCurrent = pageNum === currentPage;
                return (
                  <button
                    key={pageNum}
                    type="button"
                    onClick={() => handlePageChange(pageNum)}
                    className={cn(
                      "min-w-9 h-9 px-2.5 rounded-full font-body font-bold transition-all flex items-center justify-center text-center cursor-pointer",
                      isCurrent
                        ? "bg-brand-green text-white shadow-sm"
                        : "text-foreground hover:bg-secondary border border-border/60"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-1 text-muted-foreground font-body">...</span>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full px-5 h-9 text-xs font-body font-bold inline-flex items-center justify-center text-center gap-1.5"
            >
              <span>{ar ? "التالي" : "Next"}</span>
              <ChevronRight className="size-4 rtl:rotate-180" />
            </Button>
          </div>
        )}
      </main>

      {/* 5. Full Image Detail & Direct Quotation Modal */}
      <Dialog open={!!activeItem} onOpenChange={(open) => !open && setActiveItem(null)}>
        {activeItem && (
          <DialogContent className="max-w-2xl max-h-[92vh] overflow-y-auto p-6 rounded-3xl border border-white/30 bg-background/95 backdrop-blur-2xl shadow-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-brand-green text-white shadow-sm">
                  {activeItem.code}
                </span>
                <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wide">
                  {getSubcategoryLabel(activeItem.subcategory, ar)} {activeItem.age ? `• ${getAgeLabel(activeItem.age, ar)}` : ""}
                </span>
              </div>
              <DialogTitle className="font-head text-xl font-bold text-foreground">
                {ar
                  ? `${getSubcategoryLabel(activeItem.subcategory, true)} — موديل ${activeItem.code}`
                  : `${activeItem.subcategory || "Style"} — Model ${activeItem.code}`}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              {/* Image Preview with proper containment */}
              <div className="relative aspect-[3/4] max-h-[50vh] w-full overflow-hidden rounded-2xl bg-muted/30 border border-border/60">
                <img
                  src={activeItem.image}
                  alt={activeItem.code}
                  className="size-full object-contain object-center"
                />
              </div>

              {/* Specs & Quick Action */}
              <div className="space-y-4 rounded-2xl border border-border/70 bg-secondary/30 p-4">
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-body">{ar ? "كود الموديل المعتمد:" : "Model Reference:"}</span>
                    <span className="font-mono font-bold text-foreground">{activeItem.code}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-body">{ar ? "التصنيف الرئيسي:" : "Category:"}</span>
                    <span className="font-body font-bold text-foreground">
                      {ar
                        ? activeItem.category === "kids"
                          ? "ملابس الأطفال والرضع"
                          : activeItem.category === "homewear"
                          ? "ملابس الهوم وير والبيجامات"
                          : "ملابس الأندر وير واللانجيري"
                        : activeItem.category}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-body">{ar ? "النوع / التشكيلة:" : "Subcategory:"}</span>
                    <span className="font-body font-bold text-foreground">{getSubcategoryLabel(activeItem.subcategory, ar)}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-body">{ar ? "الفئة العمرية / الاستهداف:" : "Age Group:"}</span>
                    <span className="font-body font-bold text-foreground">{activeItem.age ? getAgeLabel(activeItem.age, ar) : (ar ? "كافة الأعمار" : "All Ages")}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block text-[11px] font-body">{ar ? "الموسم:" : "Season:"}</span>
                    <span className="font-body font-bold text-foreground">{activeItem.season === "summer" ? (ar ? "صيفي" : "Summer") : (ar ? "شتوي" : "Winter")}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
                  <Button
                    asChild
                    className="w-full sm:flex-1 rounded-full bg-brand-green hover:bg-brand-orange text-white font-body font-bold text-xs shadow-md"
                  >
                    <Link to="/models/$code" params={{ code: activeItem.code }}>
                      <span>{ar ? "تقديم طلب تسعير وتصنيع الموديل" : "Request Production Quote"}</span>
                      <ArrowRight className="size-3.5 ms-1.5 rtl:rotate-180" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full sm:w-auto rounded-full text-xs font-body font-bold"
                  >
                    <a
                      href={`${WHATSAPP_URL}&text=${encodeURIComponent(
                        ar
                          ? `مرحباً، أود الاستفسار عن تصنيع الموديل رقم (${activeItem.code}) من كتالوج الملابس الجاهزة.`
                          : `Hello, I'd like to inquire about manufacturing model (${activeItem.code}) from the ready garments catalogue.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="size-3.5 me-1.5 text-emerald-500" />
                      <span>{ar ? "واتساب مباشر" : "WhatsApp"}</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
