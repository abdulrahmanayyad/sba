import React from "react";
import { VERIFIED_TRADE_PARTNERS } from "@/lib/trade-data";

interface BusinessNetworkSectionProps {
  ar?: boolean;
}

export function BusinessNetworkSection({ ar = true }: BusinessNetworkSectionProps) {
  return (
    <div id="business-network" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Section 6 Title & Description Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم السادس: شبكة الأعمال" : "Section 6: Business Network"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "الشركاء والعملاء التجاريون المعتمدون" : "Verified Clients & Contracted Business Partners"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2.5 sm:mt-3 leading-relaxed max-w-4xl">
          {ar
            ? "هذا القسم مخصص حصريًا للشركات والمؤسسات التي ترتبط مع المجموعة بعقود تجارية رسمية سارية، أو تعاملات تصنيع وتوريد منفذة وموثقة."
            : "Strictly reserved for entities with verified ongoing commercial contracts, active supply agreements, or executed corporate partnerships."}
        </p>
      </div>

      {/* Divider */}
      <div className="border-t border-border/40 dark:border-white/10" />

      {/* Partners Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {VERIFIED_TRADE_PARTNERS.map((partner, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-emerald-500/20 bg-background/70 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <h4 className="text-base font-bold text-foreground">
                  {partner.companyName}
                </h4>
                <p className="text-xs text-muted-foreground flex items-center gap-1.5 mt-0.5">
                  <span>{partner.countryFlag}</span>
                  <span>{ar ? partner.countryAr : partner.countryEn}</span>
                  <span>•</span>
                  <span>{ar ? `منذ ${partner.establishedYear}` : `Since ${partner.establishedYear}`}</span>
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
