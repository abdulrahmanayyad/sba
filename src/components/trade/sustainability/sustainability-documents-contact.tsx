// Documents Center & Contact Sustainability Sector
// SAMI BIN AYYAD GROUP — Global Sustainability & Environmental Opportunities

import React from "react";
import { SUSTAINABILITY_DOCUMENTS } from "@/lib/sustainability-trade-data";

interface SustainabilityDocumentsContactProps {
  ar: boolean;
}

export const SustainabilityDocumentsContact: React.FC<SustainabilityDocumentsContactProps> = ({ ar }) => {
  return (
    <div className="space-y-8">
      {/* ======================================================== */}
      {/* DOCUMENTS & RESEARCH CENTER (مركز الوثائق والدراسات) */}
      {/* ======================================================== */}
      <section
        id="sustainability-documents"
        className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300"
      >
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "مركز الوثائق والدراسات" : "Documents & Research Center"}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
                {ar ? "وثائق، أدلة تشريعية، وأوراق عمل قطاع الاستدامة" : "Official Environmental Documents, Guides & Studies"}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
                {ar
                  ? "مكتبة رقمية تضم وثائق مؤسسية معتمدة، أدلة الامتثال البيئي، ودراسات فنية واقتصادية مفتوحة للشركاء والمستثمرين."
                  : "Approved corporate repository offering legal compliance guides, sector briefs, and technical feasibility papers for partners and investors."}
              </p>
            </div>
            <div className="text-xs font-bold text-muted-foreground shrink-0 self-start">
              <span>{ar ? "وثائق رسمية محدثة 2025-2026" : "Official Documents Updated 2025-2026"}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUSTAINABILITY_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-secondary/40 backdrop-blur-xl border border-white/10 hover:border-brand-green/40 hover:bg-secondary/60 transition-all duration-300 shadow-md"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-brand-green/15 text-brand-green border border-brand-green/25">
                    {ar ? doc.categoryAr : doc.categoryEn}
                  </span>
                  <span className="text-[11px] text-muted-foreground font-mono bg-background/50 px-2 py-0.5 rounded border border-white/5">
                    {doc.fileFormat} • {doc.fileSize}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground group-hover:text-brand-green transition-colors leading-snug mb-2">
                  {ar ? doc.titleAr : doc.titleEn}
                </h3>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                  {ar ? doc.descriptionAr : doc.descriptionEn}
                </p>
              </div>

              {/* Download Action */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] text-muted-foreground font-mono">{doc.id}</span>
                <a
                  href={ar ? doc.downloadUrl : (doc.downloadUrlEn || doc.downloadUrl)}
                  download
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold !bg-brand-green !text-white hover:!bg-brand-orange hover:!text-white transition-all shadow-md cursor-pointer"
                >
                  <span>{ar ? "تحميل الوثيقة" : "Download File"}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Request Specialized Feasibility / Whitepaper Banner */}
        <div className="p-4 rounded-2xl bg-secondary/30 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            <span>
              {ar
                ? "هل تبحث عن دراسة جدوى قطاعية أو تقرير امتثال مخصص لمشروعك الصناعي؟ يمكنك طلب دراسة مخصصة عبر نموذج الاستفسارات."
                : "Need a tailored environmental feasibility study or compliance review for your facility? Request a custom brief via our inquiry form."}
            </span>
          </div>
          <a
            href="#sustainability-forms"
            className="shrink-0 px-3 py-1.5 rounded-xl bg-brand-green/15 text-brand-green hover:bg-brand-green hover:text-white font-bold transition-colors border border-brand-green/20"
          >
            {ar ? "طلب دراسة مخصصة" : "Request Custom Brief"}
          </a>
        </div>
      </section>
    </div>
  );
};
