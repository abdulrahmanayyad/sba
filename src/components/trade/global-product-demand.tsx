import React, { useState } from "react";
import { 
  Package, 
  Globe, 
  Layers, 
  Tag, 
  FileCheck, 
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Search
} from "lucide-react";
import { PRODUCT_DEMAND_PORTFOLIO, ALL_INQUIRIES, COUNTRY_META } from "@/lib/trade-data";

interface GlobalProductDemandProps {
  ar?: boolean;
  onInquireProduct?: (productName: string) => void;
}

export function GlobalProductDemand({ ar = true, onInquireProduct }: GlobalProductDemandProps) {
  const [activeCategory, setActiveCategory] = useState<string>("dates");
  const [searchProduct, setSearchProduct] = useState<string>("");

  const currentCat = PRODUCT_DEMAND_PORTFOLIO.find((c) => c.categoryKey === activeCategory) || PRODUCT_DEMAND_PORTFOLIO[0];

  const filteredProducts = currentCat.subProducts.filter((p) => {
    if (!searchProduct) return true;
    return (
      p.nameAr.includes(searchProduct) ||
      p.nameEn.toLowerCase().includes(searchProduct.toLowerCase()) ||
      p.specs.includes(searchProduct) ||
      p.markets.some((m) => m.includes(searchProduct))
    );
  });

  return (
    <div className="w-full space-y-8">
      {/* Category Tabs Header */}
      <div className="flex flex-wrap items-center gap-2.5 pb-2">
        {PRODUCT_DEMAND_PORTFOLIO.map((cat) => {
          const isActive = activeCategory === cat.categoryKey;
          return (
            <button
              key={cat.categoryKey}
              type="button"
              onClick={() => {
                setActiveCategory(cat.categoryKey);
                setSearchProduct("");
              }}
              className={`interactive-card glass-box-interactive flex shrink-0 items-center gap-2 rounded-2xl px-5 py-3 text-xs font-bold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-2 border-brand-green bg-brand-green/20 text-brand-green shadow-lg shadow-brand-green/20 scale-[1.03] backdrop-blur-xl"
                  : "border border-white/20 bg-background/60 text-foreground/85 hover:border-white/40 hover:bg-background/85 hover:text-foreground hover:-translate-y-0.5 shadow-sm backdrop-blur-xl"
              }`}
            >
              <Package className="size-4 shrink-0" />
              <span>{ar ? cat.categoryNameAr : cat.categoryNameEn}</span>
            </button>
          );
        })}
      </div>

      {/* Category Overview Banner & Search */}
      <div className="interactive-card glass-box-interactive flex flex-col gap-4 rounded-3xl border border-white/20 bg-background/60 p-6 shadow-xl backdrop-blur-2xl transition-all duration-300 hover:bg-background/80 hover:shadow-2xl md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-brand-orange text-xs font-bold uppercase tracking-wider mb-1">
            <span>{ar ? "فئة التصدير والطلب الدولي" : "Export & Global Demand Category"}</span>
          </div>
          <h3 className="text-xl font-black text-foreground">
            {ar ? currentCat.categoryNameAr : currentCat.categoryNameEn}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-xl">
            {ar
              ? `تم تسجيل وتوثيق طلب شراء لـ ${currentCat.subProducts.length} صنفًا أساسيًا ضمن هذه الفئة عبر أكثر من 20 دولة مستوردة خلال عام 2025.`
              : `Documented demand and purchase inquiries across ${currentCat.subProducts.length} core product lines from international buyers during 2025.`}
          </p>
        </div>

        {/* Product Search Inside Category */}
        <div className="relative min-w-[240px]">
          <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchProduct}
            onChange={(e) => setSearchProduct(e.target.value)}
            placeholder={ar ? "ابحث عن صنف أو مواصفة..." : "Search product or spec..."}
            className="w-full rounded-xl border border-foreground/25 bg-background/95 py-2 pe-4 ps-10 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
          />
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((prod, idx) => {
          return (
            <div
              key={idx}
              className="interactive-card glass-box-interactive group flex flex-col justify-between rounded-3xl border border-white/15 bg-background/60 p-5 backdrop-blur-xl transition-all duration-300 hover:bg-background/80 hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* Product Titles */}
                <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover:text-brand-green transition-colors">
                      {prod.nameAr}
                    </h4>
                    <p className="text-xs text-muted-foreground font-medium">
                      {prod.nameEn}
                    </p>
                  </div>

                  <span className="inline-flex items-center justify-center rounded-xl border border-brand-green bg-brand-green px-2.5 py-1 text-[11px] font-bold text-white shadow-xs transition-colors duration-300 hover:bg-brand-orange hover:border-brand-orange">
                    {ar ? "مطلوب دوليًا" : "In Demand"}
                  </span>
                </div>

                {/* Specifications & Packaging */}
                <div className="mt-3.5 space-y-2.5 text-xs">
                  <div>
                    <span className="font-semibold text-muted-foreground block text-[11px] mb-0.5">
                      {ar ? "المواصفات المطلوبة:" : "Requested Specifications:"}
                    </span>
                    <p className="text-foreground/90 leading-relaxed font-medium">
                      {prod.specs}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-muted-foreground block text-[11px] mb-0.5">
                      {ar ? "خيارات التعبئة المفضلة:" : "Packaging Preferences:"}
                    </span>
                    <p className="text-foreground/80 leading-relaxed">
                      {prod.packaging}
                    </p>
                  </div>

                  {/* Destination Markets */}
                  <div className="pt-2">
                    <span className="font-semibold text-brand-orange block text-[11px] mb-1.5 flex items-center gap-1">
                      <Globe className="size-3" />
                      {ar ? "الأسواق المستوردة الموثقة:" : "Documented Import Markets:"}
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {prod.markets.map((m, mIdx) => {
                        const meta = COUNTRY_META[m];
                        return (
                          <span
                            key={mIdx}
                            className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground"
                          >
                            <span>{meta?.flag || "🌐"}</span>
                            <span>{m}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-5 pt-3 border-t border-white/10">
                <a
                  href="#trade-opportunities"
                  onClick={() => onInquireProduct?.(prod.nameAr)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-brand-green !bg-brand-green !text-white py-2 text-xs font-bold shadow-sm transition-all duration-300 hover:!bg-brand-orange hover:!border-brand-orange hover:!text-white hover:-translate-y-0.5 hover:shadow-md active:scale-95 cursor-pointer"
                >
                  <span>{ar ? "استفسر عن توريد هذا الصنف" : "Inquire About This Product"}</span>
                  <ChevronRight className="size-3.5 rtl:rotate-180" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

