import React from "react";
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2
} from "lucide-react";
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
          {ar ? "شبكتنا التجارية الدولية" : "Our International Business Network"}
        </h2>
      </div>

      {/* Verified Partners Banner */}
      <div className="rounded-2xl border border-white/15 bg-background/50 p-6 sm:p-8 backdrop-blur-xl shadow-inner transition-all duration-300">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-500 dark:text-emerald-400 flex items-center gap-1.5">
              <ShieldCheck className="size-4" />
              {ar ? "علاقات تعاقدية وتجارية موثقة ومستقلة" : "Independently Verified Commercial Contracts"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-foreground mt-1">
              {ar ? "الشركاء والعملاء التجاريون المعتمدون رسميًا" : "Verified Clients & Contracted Business Partners"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-2xl leading-relaxed">
              {ar
                ? "هذا القسم مخصص حصريًا للشركات والمؤسسات التي ترتبط مع المجموعة بعقود تجارية رسمية سارية، أو تعاملات تصنيع وتوريد منفذة وموثقة."
                : "Strictly reserved for entities with verified ongoing commercial contracts, active supply agreements, or executed corporate partnerships."}
            </p>
          </div>

          <span className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs font-bold text-emerald-600 dark:text-emerald-300 shrink-0">
            {ar ? "شركاء معتمدون رسميًا" : "Officially Verified Partners"}
          </span>
        </div>
      </div>

      {/* Partners Cards */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {VERIFIED_TRADE_PARTNERS.map((partner, idx) => (
          <div
            key={idx}
            className="rounded-3xl border border-emerald-500/20 bg-background/70 p-6 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl"
          >
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex size-11 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <Building2 className="size-6" />
                </div>
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
              </div>

              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="size-3" />
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
