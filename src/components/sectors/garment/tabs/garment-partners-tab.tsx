import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Handshake, ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { garmentPartnerBrands, type PartnerBrand } from "../garment-media-data";
import { cn } from "@/lib/utils";

export function GarmentPartnersTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const categories = useMemo(() => [
    { key: "all", labelEn: "All Partners", labelAr: "كافة الشركاء", count: garmentPartnerBrands.length },
    { key: "casual", labelEn: "Casual Wear", labelAr: "ملابس كاجوال", count: garmentPartnerBrands.filter(b => b.categoryKey === "casual").length },
    { key: "classic", labelEn: "Classic & Formal", labelAr: "ملابس كلاسيك", count: garmentPartnerBrands.filter(b => b.categoryKey === "classic").length },
    { key: "kids", labelEn: "Kids & Children", labelAr: "ملابس أطفال", count: garmentPartnerBrands.filter(b => b.categoryKey === "kids").length },
    { key: "home-wear", labelEn: "Home Wear", labelAr: "ملابس منزلية", count: garmentPartnerBrands.filter(b => b.categoryKey === "home-wear").length },
    { key: "lingerie", labelEn: "Lingerie & Sleepwear", labelAr: "لانجري وملابس نوم", count: garmentPartnerBrands.filter(b => b.categoryKey === "lingerie").length },
    { key: "soir-e", labelEn: "Evening & Soirée", labelAr: "سواريه ومناسبات", count: garmentPartnerBrands.filter(b => b.categoryKey === "soir-e").length },
  ], []);

  const filteredPartners = useMemo(() => {
    let list = garmentPartnerBrands;
    if (activeCategory !== "all") {
      list = list.filter((b) => b.categoryKey === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((b) =>
        b.name.toLowerCase().includes(q) ||
        b.categoryEn.toLowerCase().includes(q) ||
        b.categoryAr.includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-12 py-8">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "شركاؤنا" : "Our Partners"}</span>
            </div>
            <h2 className="mt-2 font-head text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {ar ? "شراكات إنتاجية ممتدة عبر كافة تصنيفات الأزياء" : "Enduring Production Partnerships Across Apparel Sectors"}
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed">
              {ar
                ? "نعتز بشراكاتنا المتنوعة مع عشرات العلامات التجارية المتخصصة في الكاجوال، الكلاسيك، أزياء الأطفال، الملابس المنزلية، اللانجري، والسواريه، حيث نوفر لهم قدرات تصنيع موثوقة ومستدامة."
                : "We collaborate with specialized brand partners spanning casualwear, formal tailoring, children's wear, loungewear, lingerie, and evening collections."}
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
                setVisibleCount(4);
              }}
              placeholder={ar ? "ابحث عن اسم الشريك..." : "Search partner brand..."}
              className="w-full rounded-xl border border-border bg-card ps-9 pe-4 py-2.5 text-sm text-foreground focus:border-brand-orange focus:outline-none shadow-sm transition"
            />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border pb-4">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => {
                  setActiveCategory(cat.key);
                  setVisibleCount(4);
                }}
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

        {/* Results Counter */}
        <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
          <span>
            {ar
              ? `عرض ${Math.min(visibleCount, filteredPartners.length)} من أصل ${filteredPartners.length} شريك تجاري`
              : `Showing ${Math.min(visibleCount, filteredPartners.length)} of ${filteredPartners.length} partner brands`}
          </span>
          {activeCategory !== "all" && (
            <button
              onClick={() => {
                setActiveCategory("all");
                setVisibleCount(4);
              }}
              className="text-brand-orange hover:underline cursor-pointer"
            >
              {ar ? "عرض جميع الفئات" : "Show All Categories"}
            </button>
          )}
        </div>

        {/* Partners Grid — 4 at a time with View More */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredPartners.slice(0, visibleCount).map((partner) => (
            <div
              key={partner.id}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-xl"
            >
              <div className="relative flex h-28 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-4 shadow-xs">
                <img
                  src={partner.src}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain filter transition duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                  }}
                />
              </div>

              <div className="mt-4 w-full text-center">
                <span className="block truncate font-head text-sm font-bold text-foreground group-hover:text-brand-orange transition">
                  {partner.name}
                </span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {ar ? partner.categoryAr : partner.categoryEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length > visibleCount && (
          <div className="mt-10 text-center">
            <Button
              size="lg"
              variant="outline"
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="rounded-full border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 font-head font-bold shadow-sm transition-all cursor-pointer"
            >
              {ar ? "رؤية المزيد من الشركاء" : "View More Partners"}
            </Button>
          </div>
        )}

        {filteredPartners.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-base text-muted-foreground">
              {ar ? "لا يوجد شركاء يطابقون خيارات البحث الحالية." : "No partners found matching the current criteria."}
            </p>
          </div>
        )}
      </Reveal>
    </div>
  );
}


