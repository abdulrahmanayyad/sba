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
            <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
              {ar ? "شركاؤنا وشبكة أعمالنا" : "Our Brand Partners Network"}
            </span>
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
              onChange={(e) => setSearchQuery(e.target.value)}
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
                onClick={() => setActiveCategory(cat.key)}
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
              ? `عرض ${filteredPartners.length} شريك تجاري`
              : `Displaying ${filteredPartners.length} partner brands`}
          </span>
          {activeCategory !== "all" && (
            <button
              onClick={() => setActiveCategory("all")}
              className="text-brand-orange hover:underline cursor-pointer"
            >
              {ar ? "عرض جميع الفئات" : "Show All Categories"}
            </button>
          )}
        </div>

        {/* Partners Grid */}
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {filteredPartners.map((partner) => (
            <div
              key={partner.id}
              className="group relative flex flex-col items-center justify-between rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-md"
            >
              <div className="relative flex h-24 w-full items-center justify-center overflow-hidden rounded-xl bg-white p-3">
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

              <div className="mt-3 w-full text-center">
                <span className="block truncate font-head text-xs font-bold text-foreground group-hover:text-brand-orange transition">
                  {partner.name}
                </span>
                <span className="mt-1 block text-[10px] text-muted-foreground">
                  {ar ? partner.categoryAr : partner.categoryEn}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredPartners.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-base text-muted-foreground">
              {ar ? "لا يوجد شركاء يطابقون خيارات البحث الحالية." : "No partners found matching the current criteria."}
            </p>
          </div>
        )}

        {/* Partnership Benefits Bar */}
        <div className="mt-16 rounded-3xl border border-border bg-gradient-to-r from-card via-card to-secondary/60 p-6 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-orange">
                <Handshake className="size-4" />
                <span>{ar ? "انضم إلى شبكة شركاء الإنتاج" : "Join Our Production Partner Network"}</span>
              </div>
              <h3 className="mt-2 font-head text-2xl font-bold text-foreground">
                {ar ? "نساعد العلامات على التوسع وزيادة مرونة التوريد" : "Empowering Brands with Resilient Sourcing & Industrial Muscle"}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                {ar
                  ? "نوفر للعلامات التجارية والشركاء برامج إنتاج مرنة، وحلول خامات متنوعة، وضماناً صارماً للمواعيد والمواصفات الفنية."
                  : "We provide our partners with flexible manufacturing schedules, diverse fabric alternatives, and ironclad delivery commitments."}
              </p>
            </div>

            <Button asChild variant="primary" size="lg" className="shrink-0">
              <Link to="/sectors/$sector" params={{ sector: "garment" }} search={{ tab: "join" }}>
                {ar ? "كن شريكاً لنا" : "Partner With Us"}
                <ArrowRight className="size-4 ms-2 rtl:rotate-180" />
              </Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
