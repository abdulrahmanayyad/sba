import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { 
  ArrowRight, 
  ExternalLink, 
  Eye, 
  Filter, 
  Search, 
  X, 
  Sparkles,
  ChevronDown
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentProjectItems, type ProjectShowcaseItem } from "../garment-media-data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 24;

export function GarmentProjectsTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedItem, setSelectedItem] = useState<ProjectShowcaseItem | null>(null);

  const categories = useMemo(() => [
    { key: "all", labelEn: "All Projects", labelAr: "كافة المشاريع", count: garmentProjectItems.length },
    { key: "women", labelEn: "Women's Collection", labelAr: "أزياء حريمي ومحتشمة", count: garmentProjectItems.filter(i => i.categoryKey === "women").length },
    { key: "men", labelEn: "Men's Collection", labelAr: "ملابس رجالية وقمصان", count: garmentProjectItems.filter(i => i.categoryKey === "men").length },
    { key: "kids", labelEn: "Children's Collection", labelAr: "ملابس أطفال ومواليد", count: garmentProjectItems.filter(i => i.categoryKey === "kids").length },
    { key: "couple", labelEn: "Couple & Sets", labelAr: "أطقم كابلز متناسقة", count: garmentProjectItems.filter(i => i.categoryKey === "couple").length },
  ], []);

  const filteredItems = useMemo(() => {
    let list = garmentProjectItems;
    if (activeCategory !== "all") {
      list = list.filter((i) => i.categoryKey === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((i) => 
        i.title.toLowerCase().includes(q) || 
        i.categoryEn.toLowerCase().includes(q) || 
        i.categoryAr.includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="space-y-12 py-8">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "مشاريعنا وسابقة أعمالنا" : "Our Projects & Fashion Portfolio"}
            </span>
            <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {ar ? "نماذج حقيقية من إبداعاتنا وجودة تصنيعنا" : "Documented Styles Manufactured for Top Brands"}
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {ar
                ? "استكشف مئات الموديلات والتصميمات المصنعة ضمن خطوط إنتاجنا لمختلف الفئات: الأزياء الحريمي، والملابس الرجالية، وأزياء الأطفال، وأطقم الكابلز المتناسقة."
                : "Explore hundreds of real garments engineered and manufactured across our dedicated lines, categorized by Women, Men, Kids, and Matching Sets."}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder={ar ? "ابحث برقم الموديل أو الفئة..." : "Search by style or code..."}
              className="w-full rounded-xl border border-border bg-card ps-9 pe-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => handleCategoryChange(cat.key)}
                className={cn(
                  "flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition cursor-pointer",
                  isActive
                    ? "bg-brand-orange text-white shadow-sm"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                <span>{ar ? cat.labelAr : cat.labelEn}</span>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-mono font-bold",
                    isActive ? "bg-white/20 text-white" : "bg-card text-foreground"
                  )}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Total results info */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {ar
              ? `عرض ${displayedItems.length} من إجمالي ${filteredItems.length} تصميم`
              : `Showing ${displayedItems.length} of ${filteredItems.length} styles`}
          </span>
          {activeCategory !== "all" && (
            <button
              onClick={() => handleCategoryChange("all")}
              className="text-brand-orange hover:underline cursor-pointer"
            >
              {ar ? "عرض الكل" : "Reset Filter"}
            </button>
          )}
        </div>

        {/* Projects Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-secondary">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="size-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-3">
                  <div className="flex items-center gap-1.5 text-white text-xs font-semibold">
                    <Eye className="size-3.5" />
                    <span>{ar ? "معاينة الموديل" : "Quick View"}</span>
                  </div>
                </div>
              </div>

              <div className="p-3">
                <span className="block text-[10px] uppercase font-bold tracking-wider text-brand-orange">
                  {ar ? item.categoryAr : item.categoryEn}
                </span>
                <span className="mt-0.5 block truncate font-head text-xs font-semibold text-foreground">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {displayedItems.length < filteredItems.length && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <Button
              variant="outline"
              size="lg"
              onClick={handleLoadMore}
              className="min-w-48 border-brand-orange/40 hover:bg-brand-orange/10 hover:text-brand-orange"
            >
              <ChevronDown className="size-4 me-2" />
              {ar
                ? `تحميل المزيد (${filteredItems.length - displayedItems.length} متبقي)`
                : `Load More (${filteredItems.length - displayedItems.length} remaining)`}
            </Button>
            <span className="text-xs text-muted-foreground">
              {ar ? "تم عرض الصور بتدرج لضمان أسرع تجربة تصفح" : "Paginated for ultra-fast browsing performance"}
            </span>
          </div>
        )}

        {/* Empty state */}
        {filteredItems.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-base text-muted-foreground">
              {ar ? "لا توجد تصميمات تطابق البحث المحدد." : "No projects found matching the selected filters."}
            </p>
          </div>
        )}
      </Reveal>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-4xl flex-col overflow-hidden rounded-3xl bg-card border border-border shadow-2xl md:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute end-4 top-4 z-10 rounded-full bg-background/80 p-2 text-foreground backdrop-blur-md transition hover:bg-background"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div className="relative flex max-h-[60vh] md:max-h-[85vh] w-full md:w-3/5 items-center justify-center bg-black/20 p-2">
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-full max-w-full rounded-2xl object-contain shadow-md"
              />
            </div>

            <div className="flex flex-col justify-between p-6 md:w-2/5 md:p-8">
              <div>
                <span className="rounded-full bg-brand-orange/15 px-3 py-1 font-mono text-xs font-bold text-brand-orange">
                  {ar ? selectedItem.categoryAr : selectedItem.categoryEn}
                </span>

                <h3 className="mt-4 font-head text-2xl font-bold text-foreground">
                  {selectedItem.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {ar
                    ? "تم تطوير وتنفيذ هذا الموديل وفق أعلى معايير الجودة والحياكة الدقيقة. متاح لبرامج Private Label وFOB والتصنيع التعاقدي."
                    : "Engineered and manufactured to rigorous specifications. Available for Private Label, FOB, and contract manufacturing programs."}
                </p>

                <div className="mt-6 space-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
                  <div className="flex justify-between">
                    <span>{ar ? "نوع الخدمة:" : "Service Model:"}</span>
                    <span className="font-semibold text-foreground">OEM / FOB / Private Label</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{ar ? "التوفر:" : "Availability:"}</span>
                    <span className="font-semibold text-foreground">{ar ? "تصنيع حسب الطلب" : "Custom Manufacturing"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{ar ? "الحد الأدنى:" : "MOQ:"}</span>
                    <span className="font-semibold text-foreground">{ar ? "مرن وفق المواصفات" : "Flexible per style"}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-border">
                <Button asChild variant="primary" size="lg" className="w-full">
                  <Link
                    to="/sectors/$sector"
                    params={{ sector: "garment" }}
                    search={{ tab: "join" }}
                    onClick={() => setSelectedItem(null)}
                  >
                    {ar ? "طلب تصنيع هذا الموديل" : "Inquire About This Style"}
                    <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
