import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { APPAREL_CATEGORIES, ApparelProductCategory } from "@/lib/apparel-trade-data";

interface ApparelProductDemandProps {
  ar?: boolean;
}

export function ApparelProductDemand({ ar = true }: ApparelProductDemandProps) {
  const [activeCategory, setActiveCategory] = useState<string>(APPAREL_CATEGORIES[0]?.id || "womenswear");

  return (
    <div id="apparel-products" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-8 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الخامس: محفظة المنتجات والمجموعات" : "Section 5: Products & Collections Portfolio"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "محفظة منتجات ومجموعات الملابس والمنسوجات" : "Apparel & Textile Collections Portfolio"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "نغطي 3 فئات تصنيعية رئيسية تشمل الملابس النسائية، وملابس الأطفال والرضع، والأزياء المتخصصة، مدعومة بمسارين للتوريد والتصنيع التعاقدي."
            : "Covering 3 core apparel manufacturing categories: Women's Wear, Kidswear & Infants, and Specialized Knits/Basics, operated under two agile sourcing pathways."}
        </p>
      </div>

      {/* Two Sourcing Pathways Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-border/80 bg-background/80 p-5 backdrop-blur-md shadow-sm">
          <div className="mb-2">
            <h4 className="font-bold text-sm text-foreground">
              {ar ? "المسار الأول: التوريد والتصنيع الكامل (FOB / Turnkey Supply)" : "Track 1: Full Turnkey OEM & FOB Supply"}
            </h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {ar
              ? "إدارة شاملة لدورة الإنتاج بدءًا من شراء وتوريد الغزول والأقمشة والإكسسوارات، مرورًا بالقص والحياكة والفحص، حتى التعبئة والتصدير بماركة العميل الخاصة."
              : "End-to-end production management including yarn & fabric procurement, trims, cutting, sewing, quality inspection, and custom branded export packaging."}
          </p>
        </div>

        <div className="rounded-2xl border border-border/80 bg-background/80 p-5 backdrop-blur-md shadow-sm">
          <div className="mb-2">
            <h4 className="font-bold text-sm text-foreground">
              {ar ? "المسار الثاني: التصنيع التعاقدي وتشغيل الخطوط (CMT / Cut, Make, Trim)" : "Track 2: Contract Manufacturing & CMT Operations"}
            </h4>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {ar
              ? "تشغيل خطوط الإنتاج المتخصصة وفق باترونات وتصاميم ومواد خام يوفرها العميل أو بتنسيق مشترك، مع الالتزام الصارم بمعايير الجودة ومواعيد التسليم الدقيقة."
              : "Dedicated production line operations adhering to client tech packs, patterns, and provided raw materials, guaranteeing strict compliance with international specs."}
          </p>
        </div>
      </div>

      {/* Categories Switcher */}
      <div className="flex flex-wrap gap-2 border-b border-border/60 pb-3">
        {APPAREL_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer border",
              activeCategory === cat.id
                ? "bg-foreground text-background border-foreground shadow-sm"
                : "bg-background/70 text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
            )}
          >
            {ar ? cat.nameAr : cat.nameEn}
          </button>
        ))}
      </div>

      {/* Category Detail Cards */}
      {APPAREL_CATEGORIES.filter((c) => c.id === activeCategory).map((cat) => (
        <div key={cat.id} className="space-y-6 animate-in fade-in duration-300">
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {ar ? cat.descriptionAr : cat.descriptionEn}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.items.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl border border-border/80 bg-background/60 p-4.5 backdrop-blur-md shadow-xs transition-all duration-300 hover:border-brand-green/50 hover:shadow-md"
              >
                <div className="mb-2">
                  <h4 className="font-bold text-sm text-foreground">
                    {ar ? item.nameAr : item.nameEn}
                  </h4>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar ? item.specsAr : item.specsEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

