import React from "react";
import { ApparelFlag } from "./apparel-flag";
import { APPAREL_VERIFIED_PARTNERS } from "@/lib/apparel-trade-data";

interface ApparelBusinessNetworkProps {
  ar?: boolean;
}

export function ApparelBusinessNetwork({ ar = true }: ApparelBusinessNetworkProps) {
  return (
    <div id="apparel-partners" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الثامن: شبكة الأعمال والشركاء المعتمدين" : "Section 8: Business Network & Approved Partners"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "الشركاء والعملاء التجاريون المعتمدون في قطاع الملابس والمنسوجات" : "Approved Commercial Partners in Apparel & Textiles"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "هذا القسم مخصص حصريًا للشركات والمؤسسات الدولية التي ترتبط مع المجموعة بعقود تصنيع وتوريد رسمية سارية ومعتمدة."
            : "Reserved exclusively for international corporate entities holding verified, active manufacturing and supply contracts with the Group."}
        </p>
      </div>

      <div className="border-t border-border/40" />

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {APPAREL_VERIFIED_PARTNERS.map((partner, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-emerald-500/20 bg-background/70 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-border/40 pb-4">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  {partner.companyName}
                </h4>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <ApparelFlag codeOrName={partner.countryEn} alt={ar ? partner.countryAr : partner.countryEn} className="h-3.5 w-5" />
                  <span>{ar ? partner.countryAr : partner.countryEn}</span>
                  <span>•</span>
                  <span>{ar ? partner.establishedTextAr : `Since ${partner.establishedYear}`}</span>
                </p>
              </div>

              <span className="rounded-xl border border-brand-green bg-brand-green px-3 py-1 text-xs font-bold text-white shadow-xs">
                <span>{ar ? partner.relationshipStatusAr : partner.relationshipStatus}</span>
              </span>
            </div>

            <div className="mt-4 space-y-2.5 text-xs">
              <div>
                <span className="font-semibold text-muted-foreground block text-[11px]">
                  {ar ? "قطاع العمل والنشاط:" : "Business Sector:"}
                </span>
                <p className="text-foreground font-medium">
                  {ar ? partner.sectorAr : partner.sectorEn}
                </p>
              </div>

              <div>
                <span className="font-semibold text-muted-foreground block text-[11px]">
                  {ar ? "المنتجات والخدمات الموردة:" : "Products & Services Supplied:"}
                </span>
                <p className="text-foreground/90 font-medium">
                  {ar ? partner.productsSuppliedAr : partner.productsSuppliedEn}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

