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
  Sparkles, 
  X, 
  ZoomIn 
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import { allProducts, type ProductCategory, type ProductItem } from "@/lib/all-products-data";

const PAGE_SIZE = 24;

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
    descEn: "Explore our full ready-made garment library with over 2,700 production-ready models.",
    descAr: "استكشف مكتبتنا الشاملة لتصنيع الملابس الجاهزة التي تضم أكثر من 2,700 تصميم وموديل قابل للتنفيذ.",
  },
  {
    key: "summer",
    labelEn: "Summer Collection",
    labelAr: "المجموعة الصيفية",
    descEn: "Breathable cottons, casual sets, dresses, and lightweight summer apparel.",
    descAr: "أطقم قطنية خفيفة، كاجوال، فساتين وملابس صيفية مريحة للأطفال والناشئين.",
  },
  {
    key: "winter",
    labelEn: "Winter Collection",
    labelAr: "المجموعة الشتوية",
    descEn: "Knits, warm layering pieces, jackets, and winter dresses.",
    descAr: "أزياء شتوية دافئة، تريكو، وجواكت وتشكيلات كاجوال متينة.",
  },
  {
    key: "homewear",
    labelEn: "Home Wear",
    labelAr: "ملابس المنزل والبيجامات",
    descEn: "Comfortable, premium loungewear, sleepwear, and relaxed sets.",
    descAr: "ملابس منزل وبيجامات قطنية فاخرة بتصاميم عصرية مريحة.",
  },
  {
    key: "kids",
    labelEn: "Kids Fashion",
    labelAr: "أزياء الأطفال",
    descEn: "Extensive collections for children across all age ranges from toddlers to teens.",
    descAr: "تشكيلات واسعة ومتنوعة لملابس الأطفال من سن المشي وحتى المراهقة.",
  },
  {
    key: "lingerie",
    labelEn: "Lingerie & Intimates",
    labelAr: "اللانجيري والملابس الداخلية",
    descEn: "Fine fabrics, delicate lace, and premium private-label intimate wear.",
    descAr: "خامات راقية، دانتيل ناعم، ومجموعات ملابس داخلية عالية الجودة للعلامات الخاصة.",
  },
  {
    key: "soiree",
    labelEn: "Soirée & Evening",
    labelAr: "فساتين السهرة والسواريه",
    descEn: "Glamorous evening gowns, cocktail dresses, and special occasion fashion.",
    descAr: "فساتين سهرة وأزياء مناسبات راقية بتطريزات وتشطيبات استثنائية.",
  },
];

export function ModelsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const [selectedSubcat, setSelectedSubcat] = useState<string>("all");
  const [selectedAge, setSelectedAge] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeItem, setActiveItem] = useState<ProductItem | null>(null);

  // Available subcategories based on current category
  const availableSubcategories = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach((p) => {
      if (activeCategory === "all" || p.category === activeCategory) {
        if (p.subcategory && p.subcategory !== "Home Wear" && p.subcategory !== "Kids Wear" && p.subcategory !== "Lingerie" && p.subcategory !== "Soirée") {
          set.add(p.subcategory);
        }
      }
    });
    return Array.from(set).sort();
  }, [activeCategory]);

  // Available ages based on current category
  const availableAges = useMemo(() => {
    const set = new Set<string>();
    allProducts.forEach((p) => {
      if (activeCategory === "all" || p.category === activeCategory) {
        if (p.age) set.add(p.age);
      }
    });
    return Array.from(set).sort((a, b) => parseInt(a) - parseInt(b));
  }, [activeCategory]);

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
      if (selectedSubcat !== "all" && p.subcategory !== selectedSubcat) return false;
      if (selectedAge !== "all" && p.age !== selectedAge) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesCode = p.code.toLowerCase().includes(q);
        const matchesSubcat = p.subcategory.toLowerCase().includes(q);
        const matchesCat = p.category.toLowerCase().includes(q);
        if (!matchesCode && !matchesSubcat && !matchesCat) return false;
      }
      return true;
    });
  }, [activeCategory, selectedSubcat, selectedAge, searchQuery]);

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
          src="/BG/vitaly-gariev-1lg6Gn0-o54-unsplash.jpg"
          alt={ar ? "كتالوج منتجات الملابس" : "Garment Product Catalogue"}
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-footer via-footer/85 to-footer/65" />
        <div className="site-container relative w-full py-16 md:py-24 z-10">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md">
              <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مجموعة سامي بن عياد · كتالوج ومكتبة المنتجات" : "SAMI BIN AYYAD · Product Catalogue & Model Library"}</span>
            </div>

            <h1 className="mt-2 max-w-4xl font-head text-[clamp(1.85rem,3.5vw,3rem)] font-extrabold leading-tight text-white drop-shadow-md">
              {ar ? "مكتبة الموديلات والمنتجات الجاهزة" : "Our Production-Ready Models & Apparel Lines"}
            </h1>

            <p className={cn("mt-4 max-w-3xl font-head text-base sm:text-lg font-bold leading-relaxed text-footer-foreground/90", ar && "font-body")}>
              {ar
                ? "مكتبة شاملة تضم أكثر من 2,700 تصميم وموديل عبر كبرى خطوط الأزياء — الكاجوال، الفساتين، ملابس المنزل، الأطفال، اللانجيري، والسواريه — جاهزة للتصنيع والطلب المباشر."
                : "Explore our comprehensive library of over 2,700 designs across major fashion lines — casual, dresses, loungewear, kids, lingerie, and soirée — ready for contract manufacturing and immediate private label orders."}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 2. Main Content & Explorer */}
      <main className="site-container py-10 md:py-16 space-y-10">
        {/* Category Navigation Pills */}
        <div className="rounded-3xl border border-white/30 bg-background/80 p-3 shadow-lg backdrop-blur-2xl">
          <div className="flex flex-wrap gap-2">
            {categoriesConfig.map((cat) => {
              const count = categoryCounts[cat.key] || 0;
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className={cn(
                    "flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-300",
                    isActive
                      ? "bg-brand-green text-white shadow-md shadow-brand-green/25 scale-[1.02]"
                      : "bg-secondary/60 text-foreground hover:bg-secondary hover:text-brand-orange"
                  )}
                >
                  <span>{ar ? cat.labelAr : cat.labelEn}</span>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 font-mono text-[11px]",
                      isActive ? "bg-white/20 text-white font-bold" : "bg-black/5 text-muted-foreground"
                    )}
                  >
                    {count.toLocaleString()}
                  </span>
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
                <Sparkles className="size-3.5" />
                <span>{ar ? currentConfig.labelAr : currentConfig.labelEn}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl font-bold text-foreground">
                {ar ? `${currentConfig.labelAr} (${filteredProducts.length} تصميم متاح)` : `${currentConfig.labelEn} (${filteredProducts.length} available styles)`}
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
                className="rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold text-foreground focus:border-brand-green focus:outline-none"
              >
                <option value="all">{ar ? "كافة الأنواع" : "All Subcategories"}</option>
                {availableSubcategories.map((sub) => (
                  <option key={sub} value={sub}>
                    {sub}
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
                className="rounded-full border border-border bg-background/70 px-4 py-2 text-xs font-semibold text-foreground focus:border-brand-green focus:outline-none"
              >
                <option value="all">{ar ? "كافة الأعمار" : "All Age Ranges"}</option>
                {availableAges.map((age) => (
                  <option key={age} value={age}>
                    {ar ? `سن (${age}) سنوات` : `Age ${age} yrs`}
                  </option>
                ))}
              </select>
            )}

            {/* Reset Filters button if filtered */}
            {(selectedSubcat !== "all" || selectedAge !== "all" || searchQuery) && (
              <button
                type="button"
                onClick={() => {
                  setSelectedSubcat("all");
                  setSelectedAge("all");
                  setSearchQuery("");
                  setCurrentPage(1);
                }}
                className="text-xs font-bold text-brand-orange hover:underline underline-offset-4"
              >
                {ar ? "إعادة تعيين الفلاتر" : "Reset Filters"}
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div className="text-xs font-semibold text-muted-foreground font-mono">
            {ar
              ? `عرض ${(currentPage - 1) * PAGE_SIZE + 1} - ${Math.min(currentPage * PAGE_SIZE, filteredProducts.length)} من أصل ${filteredProducts.length.toLocaleString()} تصميم`
              : `Showing ${(currentPage - 1) * PAGE_SIZE + 1} - ${Math.min(currentPage * PAGE_SIZE, filteredProducts.length)} of ${filteredProducts.length.toLocaleString()} designs`}
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
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-[11px] font-bold text-foreground line-clamp-1 group-hover:text-brand-green transition-colors">
                      {item.subcategory || item.code}
                    </span>
                    {item.age && (
                      <span className="shrink-0 rounded-md bg-secondary px-1.5 py-0.5 font-mono text-[9px] font-semibold text-muted-foreground">
                        {item.age}y
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center rounded-3xl border border-dashed border-border bg-secondary/20">
            <p className="text-base font-semibold text-muted-foreground">
              {ar ? "لا توجد تصميمات مطابقة لمعايير البحث الحالية." : "No designs match your selected criteria."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setActiveCategory("all");
                setSelectedSubcat("all");
                setSelectedAge("all");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="mt-4 rounded-full"
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
              className="rounded-full px-5 text-xs font-bold"
            >
              <ChevronLeft className="size-4 me-1 rtl:rotate-180" />
              <span>{ar ? "السابق" : "Previous"}</span>
            </Button>

            {/* Page Jump Numbers */}
            <div className="flex items-center gap-1 font-mono text-xs">
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
                      "size-8 rounded-full font-bold transition-all",
                      isCurrent
                        ? "bg-brand-green text-white shadow-sm"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <span className="px-1 text-muted-foreground">...</span>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="rounded-full px-5 text-xs font-bold"
            >
              <span>{ar ? "التالي" : "Next"}</span>
              <ChevronRight className="size-4 ms-1 rtl:rotate-180" />
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
                <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                  {activeItem.category} {activeItem.age ? `• ${activeItem.age} yrs` : ""}
                </span>
              </div>
              <DialogTitle className="font-head text-xl font-bold text-foreground">
                {activeItem.subcategory || activeItem.code}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              {/* Image Preview with proper containment */}
              <div className="overflow-hidden rounded-2xl border border-border bg-black/5 flex items-center justify-center p-2">
                <img
                  src={activeItem.image}
                  alt={activeItem.code}
                  className="max-h-[500px] w-auto max-w-full object-contain mx-auto rounded-xl shadow-sm"
                />
              </div>

              {/* Action Buttons: Request Manufacturing Quotation / WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 rounded-full bg-brand-green hover:bg-brand-orange text-white font-head font-bold shadow-md transition-all duration-300"
                >
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "garment" }}
                    search={{ tab: "start-project" }}
                    onClick={() => setActiveItem(null)}
                  >
                    <Send className="size-4 me-2" />
                    <span>{ar ? "طلب عرض سعر لهذا الموديل" : "Request Quote for this Model"}</span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-border bg-background/60 hover:border-brand-green hover:bg-brand-green/10"
                >
                  <a
                    href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello, I am interested in inquiring about model ${activeItem.code} (${activeItem.subcategory || activeItem.category}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="size-4 me-2 text-brand-green" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
}
