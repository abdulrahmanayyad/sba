import React from "react";
import { CheckCircle2, Clock, ShieldCheck, Box, FileText, ArrowRight } from "lucide-react";
import { APPAREL_REQUIREMENT_TRACKS } from "@/lib/apparel-trade-data";

interface ApparelRequirementsProps {
  ar?: boolean;
}

export function ApparelRequirements({ ar = true }: ApparelRequirementsProps) {
  return (
    <div id="apparel-requirements" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم السادس: متطلبات التصنيع والتوريد" : "Section 6: Manufacturing & Sourcing Requirements"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "مسارات ومعايير التصنيع التعاقدي والتوريد التصديري" : "Manufacturing Tracks & Sourcing Standards"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "نحدد متطلبات واضحة لكل مسار إنتاجي، بما يشمل الحد الأدنى للطلب (MOQ)، والمدد الزمنية للعينات والإنتاج، والأقمشة المعتمدة، وشروط التصدير القياسية."
            : "Clear parameters for every production pathway, outlining minimum order quantities (MOQ), lead times, certified fabric substrates, and international shipping terms."}
        </p>
      </div>

      {/* Tracks Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {APPAREL_REQUIREMENT_TRACKS.map((track) => (
          <div
            key={track.id}
            className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/70 p-6 backdrop-blur-xl shadow-md transition-all duration-300 hover:border-brand-green/60 hover:shadow-xl hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="rounded-lg border border-brand-green/30 bg-brand-green/10 px-2.5 py-1 text-[11px] font-bold text-brand-green">
                  {track.code}
                </span>
                <span className="text-xs font-bold text-muted-foreground">
                  {ar ? track.leadTimeAr : track.leadTimeEn}
                </span>
              </div>

              <h3 className="font-head text-lg font-bold text-foreground mt-4">
                {ar ? track.titleAr : track.titleEn}
              </h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {ar ? track.descriptionAr : track.descriptionEn}
              </p>

              <div className="mt-5 space-y-3 border-t border-border/50 pt-4 text-xs">
                <div>
                  <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider mb-0.5">
                    {ar ? "الحد الأدنى للكمية (MOQ):" : "Minimum Order Quantity (MOQ):"}
                  </span>
                  <p className="text-brand-orange font-bold">
                    {ar ? track.moqAr : track.moqEn}
                  </p>
                </div>

                <div>
                  <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider mb-0.5">
                    {ar ? "الأقمشة والخامات المعتمدة:" : "Approved Fabrics & Materials:"}
                  </span>
                  <ul className="space-y-1">
                    {(ar ? track.materialsAr : track.materialsEn).map((mat, i) => (
                      <li key={i} className="flex items-center gap-1.5 text-muted-foreground font-medium">
                        <CheckCircle2 className="size-3 text-brand-green shrink-0" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="font-bold text-foreground block text-[11px] uppercase tracking-wider mb-0.5">
                    {ar ? "معايير الجودة والشهادات:" : "Quality Standards & Certifications:"}
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {(ar ? track.qualityStandardsAr : track.qualityStandardsEn).map((cert, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-border/60 bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-foreground"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 pt-3 border-t border-border/50 flex items-center justify-between text-[11px]">
              <span className="text-muted-foreground">{ar ? "شروط التسليم:" : "Incoterms:"}</span>
              <span className="font-bold text-foreground">
                {(ar ? track.exportTermsAr : track.exportTermsEn).join(" • ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

