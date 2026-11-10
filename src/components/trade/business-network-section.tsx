import React from "react";
import { Building2, Calendar, MapPin, Sparkles } from "lucide-react";
import { VERIFIED_TRADE_PARTNERS, VERIFIED_TRADE_EVENTS } from "@/lib/trade-data";

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
                  <span>{ar ? ((partner as any).establishedTextAr || `منذ ${partner.establishedYear}`) : `Since ${partner.establishedYear}`}</span>
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

      {/* Verified Trade Events & Opportunity Sources Subsection */}
      {VERIFIED_TRADE_EVENTS && VERIFIED_TRADE_EVENTS.length > 0 && (
        <div className="pt-4 border-t border-border/40 dark:border-white/10 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-brand-orange" />
              <h3 className="text-base sm:text-lg font-bold text-foreground">
                {ar ? "الفعاليات والمعارض الدولية المعتمدة (مصادر الفرص التجارية)" : "Documented Trade Events & Business Opportunity Sources"}
              </h3>
            </div>
            <span className="text-xs text-muted-foreground">
              {ar ? "توثيق رسمي من أرشيف المراسلات" : "Documented Trade Platforms"}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {VERIFIED_TRADE_EVENTS.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl border border-brand-green/30 bg-background/60 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-lg border border-brand-green/40 bg-brand-green/15 px-2.5 py-0.5 text-xs font-bold text-brand-green mb-1.5">
                      <Building2 className="size-3.5" />
                      <span>{ar ? event.categoryAr : event.categoryEn}</span>
                    </div>
                    <h4 className="text-base sm:text-lg font-bold text-foreground">
                      {ar ? event.titleAr : event.titleEn}
                    </h4>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="size-3 text-brand-orange" />
                        <span>{ar ? event.venueAr : event.venueEn}</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3 text-brand-green" />
                        <span>{ar ? event.dateAr : event.dateEn}</span>
                      </span>
                      <span>•</span>
                      <span>{ar ? event.organizerAr : event.organizerEn}</span>
                    </div>
                  </div>

                  <span className="rounded-xl border border-brand-orange bg-brand-orange px-3 py-1 text-xs font-bold text-white shadow-xs shrink-0 self-start">
                    {ar ? `${event.archiveMessagesCount} رسائل موثقة بالأرشيف` : `${event.archiveMessagesCount} Archive Notices`}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed pt-1">
                  {ar ? event.scopeAr : event.scopeEn}
                </p>

                <div className="rounded-xl border border-white/5 bg-secondary/40 p-3 text-xs">
                  <span className="font-bold text-foreground block mb-0.5">
                    {ar ? "القيمة التجارية والاستثمارية:" : "Commercial Sourcing Relevance:"}
                  </span>
                  <span className="text-muted-foreground">{ar ? event.relevanceAr : event.relevanceEn}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
