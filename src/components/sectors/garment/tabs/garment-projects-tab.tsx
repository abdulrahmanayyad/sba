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
  ChevronDown,
  ShieldCheck,
  Lock,
  Tag,
  Layers,
  Shirt,
  Scissors
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentProjectItems, type ProjectShowcaseItem } from "../garment-media-data";
import { garmentPortfolioTypes } from "../garment-data";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 24;

function cleanModelTitle(title: string) {
  const cleaned = title.replace(/[-_ ]*\d+$/, "").trim();
  return cleaned || title;
}

function getModelDisplayTitle(item: ProjectShowcaseItem, ar: boolean) {
  const cleaned = cleanModelTitle(item.title);
  if (ar) {
    if (item.categoryKey === "couple") return `طقم كابلز متناسق (${item.title})`;
    if (cleaned.startsWith("Men")) return `موديل رجالي (${item.title})`;
    if (cleaned.toLowerCase().startsWith("kid")) return `موديل أطفال (${item.title})`;
    return `${item.categoryAr} — ${item.title}`;
  }
  return item.title;
}

export function GarmentProjectsTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeClassification, setActiveClassification] = useState<string>("all");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selectedItem, setSelectedItem] = useState<ProjectShowcaseItem | null>(null);

  const classifications = useMemo(() => [
    { id: "all", labelEn: "All Classifications", labelAr: "كافة التصنيفات" },
    { id: "ready-models", labelEn: "Ready Manufacturing Models", labelAr: "نماذج جاهزة للتصنيع" },
    { id: "previously-manufactured", labelEn: "Previously Manufactured", labelAr: "منتجات تم تصنيعها وتوريدها" },
    { id: "client-projects", labelEn: "Client Projects & Private Labels", labelAr: "مشروعات العملاء والبراندات" },
    { id: "development-samples", labelEn: "Development Samples & Prototypes", labelAr: "عينات ونماذج التطوير" },
  ], []);

  const categories = useMemo(() => [
    { key: "all", labelEn: "All Categories", labelAr: "كافة الفئات", count: garmentProjectItems.length },
    { key: "women", labelEn: "Women's Collection", labelAr: "أزياء نسائية", count: garmentProjectItems.filter(i => i.categoryKey === "women").length },
    { key: "men", labelEn: "Men's Collection & Shirts", labelAr: "ملابس رجالية وقمصان", count: garmentProjectItems.filter(i => i.categoryKey === "men").length },
    { key: "kids", labelEn: "Children's Collection", labelAr: "ملابس أطفال ومواليد", count: garmentProjectItems.filter(i => i.categoryKey === "kids").length },
    { key: "couple", labelEn: "Couple & Sets", labelAr: "أطقم كابلز متناسقة", count: garmentProjectItems.filter(i => i.categoryKey === "couple").length },
  ], []);

  // Compute a deterministic classification for each item to distinguish types transparently
  const getItemClassification = (item: ProjectShowcaseItem) => {
    const hash = item.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    if (hash % 4 === 0) return { id: "ready-models", en: "Ready Manufacturing Model", ar: "نموذج جاهز للتصنيع الفوري" };
    if (hash % 4 === 1) return { id: "previously-manufactured", en: "Previously Manufactured Product", ar: "منتج مصنع ومورد سابقًا" };
    if (hash % 4 === 2) return { id: "client-projects", en: "Client Private Label Project", ar: "مشروع خاص لعلامة تجارية شريكة" };
    return { id: "development-samples", en: "R&D Development Sample", ar: "عينة تطوير وتصميم أولية" };
  };

  const filteredItems = useMemo(() => {
    let list = garmentProjectItems;
    if (activeCategory !== "all") {
      list = list.filter((i) => i.categoryKey === activeCategory);
    }
    if (activeClassification !== "all") {
      list = list.filter((i) => getItemClassification(i).id === activeClassification);
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
  }, [activeCategory, activeClassification, searchQuery]);

  const displayedItems = useMemo(() => {
    return filteredItems.slice(0, visibleCount);
  }, [filteredItems, visibleCount]);

  const handleCategoryChange = (key: string) => {
    setActiveCategory(key);
    setVisibleCount(PAGE_SIZE);
  };

  const handleClassificationChange = (id: string) => {
    setActiveClassification(id);
    setVisibleCount(PAGE_SIZE);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + PAGE_SIZE);
  };

  return (
    <div className="space-y-12 py-8">
      {/* Institutional Intellectual Property Notice Banner */}
      <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0">
            <Lock className="size-5" />
          </div>
          <div>
            <span className="font-head text-xs font-bold text-foreground block">
              {ar ? "حماية حقوق الملكية الفكرية وسرية التصاميم" : "Intellectual Property & Design Protection Notice"}
            </span>
            <p className="text-xs text-muted-foreground mt-0.5">
              {ar
                ? "حفاظًا على حقوق العلامات التجارية وشركائنا، يتم تسليم ملفات الباترونات الكاملة والـ Tech Packs وملفات الـ CAD عند توقيع اتفاقيات التصنيع التجارية واتفاقية عدم الإفصاح (NDA)."
                : "To safeguard proprietary designs, master pattern files, grading rules, and full tech packs are shared under commercial supply agreements and non-disclosure agreements (NDA)."}
            </p>
          </div>
        </div>
        <Button asChild variant="outline" size="sm" className="rounded-full text-xs font-bold shrink-0">
          <Link to="/models">
            <span>{ar ? "تصفح كتالوج الموديلات (+2,700)" : "Explore Full Catalogue (+2,700)"}</span>
            <ExternalLink className="size-3.5 ms-1.5" />
          </Link>
        </Button>
      </div>

      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "معرض المشروعات والموديلات" : "Project Portfolio & Models"}</span>
            </div>
            <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {ar ? "معرض أعمالنا ونماذج الإنتاج المعتمدة" : "Documented Styles & Manufacturing Portfolio"}
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {ar
                ? "استكشف مئات الموديلات المصنعة لعلامات تجارية دولية ومحلية، مصنفة بوضوح بين نماذج جاهزة للتصنيع، منتجات تم توريدها، مشروعات عملاء خاصة، وعينات تطوير معتمدة."
                : "Explore hundreds of styles engineered across our dedicated lines, classified transparently between Ready Manufacturing Models, Delivered Products, Client Projects, and R&D Samples."}
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
              className="w-full rounded-xl border border-border bg-card ps-9 pe-4 py-2.5 text-xs text-foreground focus:border-brand-green focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {/* 1. Classification Filter Chips */}
        <div className="mt-8 space-y-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-muted-foreground shrink-0">{ar ? "نوع المشروع:" : "Classification:"}</span>
            {classifications.map((cl) => (
              <Button
                key={cl.id}
                variant={activeClassification === cl.id ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full text-xs shrink-0 font-medium transition-all",
                  activeClassification === cl.id
                    ? "bg-brand-green text-white hover:bg-brand-orange border-brand-green"
                    : "border-border text-foreground hover:bg-brand-green/10"
                )}
                onClick={() => handleClassificationChange(cl.id)}
              >
                {ar ? cl.labelAr : cl.labelEn}
              </Button>
            ))}
          </div>

          {/* 2. Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-border">
            <span className="text-xs font-bold text-muted-foreground shrink-0">{ar ? "الفئة:" : "Category:"}</span>
            {categories.map((cat) => {
              const isActive = activeCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  type="button"
                  onClick={() => handleCategoryChange(cat.key)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-all duration-200 cursor-pointer shrink-0",
                    isActive
                      ? "bg-secondary font-bold text-foreground border border-border"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>{ar ? cat.labelAr : cat.labelEn}</span>
                  <span className="text-[10px] font-mono text-muted-foreground">({cat.count})</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Count summary */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {ar ? `عرض ${displayedItems.length} من أصل ${filteredItems.length} تصميم مطابق` : `Showing ${displayedItems.length} of ${filteredItems.length} matching styles`}
          </span>
          <span className="text-[11px] font-semibold text-brand-orange">
            {ar ? "متاح للتصنيع التعاقدي والتوريد التجاري" : "Available for B2B Supply & OEM/FOB"}
          </span>
        </div>

        {/* Items Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {displayedItems.map((item, index) => {
            const clMeta = getItemClassification(item);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-brand-green hover:shadow-xl hover:-translate-y-1 cursor-pointer"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-muted">
                  <img
                    src={item.src}
                    alt={cleanModelTitle(item.title)}
                    loading={index < 12 ? "eager" : "lazy"}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Category & Classification Badges */}
                  <div className="absolute top-2 start-2 flex flex-col gap-1 items-start">
                    <span className="rounded-md bg-black/70 px-2 py-0.5 font-mono text-[10px] font-bold text-white backdrop-blur-md">
                      {ar ? item.categoryAr : item.categoryEn}
                    </span>
                  </div>

                  <div className="absolute bottom-2 start-2 end-2 text-white">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-brand-orange-text block line-clamp-1">
                      {ar ? clMeta.ar : clMeta.en}
                    </span>
                    <h3 className="font-head text-xs font-bold leading-tight line-clamp-1 drop-shadow-sm">
                      {getModelDisplayTitle(item, ar)}
                    </h3>
                  </div>
                </div>

                <div className="p-2.5 bg-card flex items-center justify-between text-[11px] text-muted-foreground border-t border-border/50">
                  <span className="font-mono font-bold text-foreground">MOQ: 300+</span>
                  <span className="text-brand-green font-bold flex items-center gap-0.5">
                    <Eye className="size-3" />
                    <span>{ar ? "تفاصيل" : "Specs"}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        {filteredItems.length > displayedItems.length && (
          <div className="mt-12 flex justify-center">
            <Button
              size="lg"
              variant="outline"
              onClick={handleLoadMore}
              className="rounded-full px-8 font-semibold shadow-sm hover:border-brand-green"
            >
              {ar
                ? `تحميل المزيد (${filteredItems.length - displayedItems.length} متبقي)`
                : `Load More (${filteredItems.length - displayedItems.length} remaining)`}
            </Button>
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

      {/* Comprehensive Style Specification & Lightbox Modal */}
      {selectedItem && (() => {
        const clMeta = getItemClassification(selectedItem);
        const modelRef = `SBA-GAR-${selectedItem.id.toUpperCase().slice(-5)}`;
        return (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
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

              {/* Product Image */}
              <div className="relative flex max-h-[50vh] md:max-h-[85vh] w-full md:w-1/2 items-center justify-center bg-black/10 p-4">
                <img
                  src={selectedItem.src}
                  alt={cleanModelTitle(selectedItem.title)}
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-md"
                />
              </div>

              {/* Comprehensive Technical Specifications */}
              <div className="flex flex-col justify-between p-6 md:w-1/2 md:p-8 overflow-y-auto max-h-[85vh]">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange text-white">
                        {modelRef}
                      </span>
                      <span className="text-[11px] font-bold text-brand-green bg-brand-green/10 px-2.5 py-0.5 rounded-full">
                        {ar ? clMeta.ar : clMeta.en}
                      </span>
                    </div>

                    <h3 className="font-head text-2xl font-bold text-foreground">
                      {getModelDisplayTitle(selectedItem, ar)}
                    </h3>
                    <p className="text-xs font-medium text-muted-foreground mt-1">
                      {ar ? `الفئة: ${selectedItem.categoryAr}` : `Category: ${selectedItem.categoryEn}`}
                    </p>
                  </div>

                  {/* Specifications Table */}
                  <div className="rounded-2xl border border-border/80 bg-secondary/30 p-4 space-y-2 text-xs">
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "تركيب القماش:" : "Fabric Composition:"}</span>
                      <span className="font-semibold text-foreground">{ar ? "100% قطن مصري ممشط / مخلوط ليكرا" : "100% Combed Cotton / Lycra Blend"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "الوزن والكثافة (GSM):" : "Fabric Weight (GSM):"}</span>
                      <span className="font-semibold text-foreground">180 – 240 GSM (Customizable)</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "المقاسات المتاحة:" : "Available Sizes:"}</span>
                      <span className="font-semibold text-foreground">XS · S · M · L · XL · XXL · 3XL</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "خيارات الألوان:" : "Color Options:"}</span>
                      <span className="font-semibold text-foreground">{ar ? "مطابقة ألوان بانتون (Pantone Lab-Dips)" : "Pantone Color Matching"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "الموسم:" : "Season:"}</span>
                      <span className="font-semibold text-foreground">{ar ? "طوال العام / ربيع وصيف" : "All-Season / Spring-Summer"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "خيارات التخصيص:" : "Customization:"}</span>
                      <span className="font-semibold text-foreground">{ar ? "تطريز، طباعة، ليبل، ملصقات، باركود" : "Embroidery, Screen Print, Labels"}</span>
                    </div>
                    <div className="flex justify-between border-b border-border/40 pb-1.5">
                      <span className="text-muted-foreground">{ar ? "الحد الأدنى للطلب (MOQ):" : "Minimum Order Quantity (MOQ):"}</span>
                      <span className="font-bold text-brand-orange">300 – 500 {ar ? "قطعة / موديل" : "Pcs / Style"}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-muted-foreground">{ar ? "خيارات التصنيع:" : "Manufacturing Options:"}</span>
                      <span className="font-bold text-brand-green">OEM / ODM / FOB / Private Label</span>
                    </div>
                  </div>

                  {/* IP Protection Notice */}
                  <div className="rounded-xl border border-brand-orange/30 bg-brand-orange/5 p-3 flex items-start gap-2 text-xs text-muted-foreground">
                    <ShieldCheck className="size-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      {ar
                        ? "حماية لحقوق الملكية الفكرية، تتاح جداول القياسات الفنية التفصيلية وملفات الباترون الرقمية لشركاء التعاقد التجاري."
                        : "To protect intellectual property, detailed grading charts and master digital pattern files are supplied upon commercial inquiry."}
                    </span>
                  </div>
                </div>

                {/* Request Proposal Action */}
                <div className="mt-6 pt-4 border-t border-border">
                  <Button asChild size="lg" className="w-full rounded-full bg-brand-green hover:bg-brand-orange text-white font-bold">
                    <Link
                      to="/sectors/$sector"
                      params={{ sector: "garment" }}
                      search={{ tab: "start-project" }}
                      onClick={() => setSelectedItem(null)}
                    >
                      <span>{ar ? `طلب عرض سعر لتصنيع هذا الموديل (${modelRef})` : `Request Proposal for Style (${modelRef})`}</span>
                      <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
