import React, { useState } from "react";
import { FileText, Download, Eye, Mail, MessageSquare, Printer, CheckCircle2, ShieldAlert } from "lucide-react";
import { APPAREL_DOWNLOADS } from "@/lib/apparel-trade-data";

interface ApparelReportsDownloadsProps {
  ar?: boolean;
}

export function ApparelReportsDownloads({ ar = true }: ApparelReportsDownloadsProps) {
  const [activeReportModal, setActiveReportModal] = useState<string | null>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div id="apparel-downloads" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الحادي عشر: التوثيق والتحميلات" : "Section 11: Dossiers & Technical Downloads"}</span>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "الملفات الفنية وكراسات المواصفات التصديرية" : "Technical Dossiers & Export Specifications"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-3xl">
              {ar
                ? "كراسات ومستندات رسمية تغطي القدرات التصنيعية، معايير فحص الأقمشة والتريكو، بروتوكولات العلامات الخاصة، والامتثال لمعايير السلامة التصديرية."
                : "Official downloadable corporate dossiers detailing manufacturing capacities, fabric inspection benchmarks, private label protocols, and safety compliance."}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/60 px-4 py-2 text-xs text-muted-foreground shrink-0">
            <span className="text-foreground font-bold">{ar ? "الإصدار: " : "Edition: "}</span>
            <span className="font-mono text-brand-orange">2025/2026 Official</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border/40" />

      {/* Reports Grid */}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {APPAREL_DOWNLOADS.map((rep) => (
          <div
            key={rep.id}
            className="group flex flex-col justify-between rounded-2xl border border-border/80 bg-background/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-brand-green/60 hover:bg-background/80 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div>
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <FileText className="size-5" />
                </span>
                <span dir="ltr" className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-mono font-medium text-foreground">
                  {rep.fileSize}
                </span>
              </div>

              <div className="mt-3.5 space-y-1.5">
                <h4 className="text-base font-bold text-foreground group-hover:text-brand-orange transition-colors">
                  {ar ? rep.titleAr : rep.titleEn}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {ar ? rep.descriptionAr : rep.descriptionEn}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-[11px] text-muted-foreground pt-3 border-t border-border/50">
                <span>{ar ? rep.pageCountAr : rep.pageCountEn}</span>
                <span className="font-bold text-foreground bg-secondary px-2 py-0.5 rounded-md">
                  {ar ? rep.dateAr : rep.dateEn}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-5 grid grid-cols-2 gap-2 pt-3 border-t border-border/50">
              <button
                type="button"
                onClick={() => setActiveReportModal(rep.id)}
                className="flex items-center justify-center gap-1.5 rounded-xl border border-border bg-secondary/50 py-2 text-xs font-semibold text-foreground hover:bg-secondary hover:text-brand-orange transition-colors cursor-pointer"
              >
                <Eye className="size-3.5" />
                <span>{ar ? "معاينة" : "Preview"}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveReportModal(rep.id);
                  setTimeout(() => window.print(), 300);
                }}
                className="flex items-center justify-center gap-1.5 rounded-xl bg-brand-green py-2 text-xs font-bold text-white shadow-md hover:bg-brand-orange transition-all duration-300 cursor-pointer"
              >
                <Download className="size-3.5" />
                <span>{ar ? "تحميل PDF" : "Download PDF"}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Special Tender & Custom Specifications Card (with direct contact info on the right in Arabic) */}
      <div className="mt-8 rounded-3xl border border-border/80 bg-background/80 p-6 sm:p-8 backdrop-blur-2xl shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Official Contact Info Box (Placed on the right in Arabic / RTL) */}
          <div className="lg:col-span-5 rounded-2xl border border-border bg-card/90 p-5 shadow-md space-y-3.5 order-1">
            <span className="text-xs font-bold text-foreground uppercase tracking-wider block border-b border-border/60 pb-2">
              {ar ? "قنوات الاتصال الرسمية المعتمدة:" : "Official Direct Channels:"}
            </span>

            <a
              href="mailto:info@sami-trade.com"
              className="flex items-center gap-3 p-2.5 rounded-xl border border-border/70 bg-background/80 hover:border-brand-orange hover:bg-background transition-all group"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                <Mail className="size-4" />
              </div>
              <div className="text-start">
                <span className="text-[10px] text-muted-foreground block">{ar ? "البريد الرسمي المعتمد" : "Official Email"}</span>
                <span className="text-xs font-bold text-foreground font-mono group-hover:text-brand-orange">
                  info@sami-trade.com
                </span>
              </div>
            </a>

            <a
              href="https://wa.me/201222238072"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl border border-brand-green/30 bg-brand-green/10 hover:border-brand-green hover:bg-brand-green/20 transition-all group"
            >
              <div className="flex size-9 items-center justify-center rounded-lg bg-brand-green text-white">
                <MessageSquare className="size-4" />
              </div>
              <div className="text-start">
                <span className="text-[10px] text-brand-green block font-bold">{ar ? "واتساب التجاري المعتمد" : "Official WhatsApp"}</span>
                <span dir="ltr" className="text-xs font-bold text-foreground font-mono group-hover:text-brand-green">
                  +20 122 223 8072
                </span>
              </div>
            </a>
          </div>

          {/* Main Info */}
          <div className="lg:col-span-7 space-y-3 order-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-bold text-brand-orange">
              <span>{ar ? "عطاءات ومناقصات دولية" : "International Tenders"}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-foreground">
              {ar ? "طلبات المستندات الخاصة والمناقصات" : "Custom Specifications & Tender Documentation Inquiries"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {ar
                ? "للجهات والمؤسسات التي تتطلب كراسات شروط خاصة، أو شهادات فحص مخبري محددة للملابس والأقمشة، أو عقود توريد حكومية ومؤسسية، يرجى التواصل المباشر مع مكتب التجارة والتعاقدات الدولية بالمجموعة."
                : "For institutional clients requiring specialized technical dossiers, accredited third-party laboratory certifications, or bespoke government tender documents, please contact our International Contracts Office directly."}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {activeReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl rounded-3xl border border-white/20 bg-background/95 p-8 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="size-5 text-brand-orange" />
                <span className="text-sm font-bold text-foreground">
                  {ar ? "معاينة الملف التوثيقي المعتمد" : "Official Dossier Preview"}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="rounded-xl border border-border bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary cursor-pointer"
                >
                  <Printer className="size-3.5 inline me-1.5" />
                  <span>{ar ? "طباعة" : "Print"}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveReportModal(null)}
                  className="rounded-xl border border-border bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-secondary cursor-pointer"
                >
                  {ar ? "إغلاق" : "Close"}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground">
                {ar
                  ? APPAREL_DOWNLOADS.find((r) => r.id === activeReportModal)?.titleAr
                  : APPAREL_DOWNLOADS.find((r) => r.id === activeReportModal)?.titleEn}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {ar
                  ? APPAREL_DOWNLOADS.find((r) => r.id === activeReportModal)?.descriptionAr
                  : APPAREL_DOWNLOADS.find((r) => r.id === activeReportModal)?.descriptionEn}
              </p>

              <div className="rounded-2xl border border-border bg-muted/30 p-4 text-xs space-y-2">
                <p className="font-bold text-foreground">
                  {ar ? "بيانات الحفظ والتحقق المهني:" : "Verification & Audit Data:"}
                </p>
                <p className="text-muted-foreground">
                  {ar
                    ? "تم إعداد ومراجعة هذا الملف الفني بواسطة قطاع التصنيع والتجارة الدولية بمجموعة سامي بن عياد. جميع المواصفات الفنية معتمدة وتتوافق مع المعايير القياسية المصرية والمواصفات الأوروبية والدولية المعنية بصناعة النسيج والملابس الجاهزة."
                    : "Prepared and verified by Sami Bin Ayyad Group Apparel & International Trade Division. All specifications comply with Egyptian and international quality, safety, and manufacturing benchmarks."}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] text-muted-foreground">
              <span>SAMI BIN AYYAD GROUP • Apparel & Textile Global Trade</span>
              <span>Official Document</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

