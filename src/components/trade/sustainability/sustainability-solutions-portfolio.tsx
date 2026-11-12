import React, { useState } from "react";
import { 
  SUSTAINABILITY_SOLUTIONS_PORTFOLIO,
  SustainabilitySubsectorKey,
  DeliveryModel
} from "@/lib/sustainability-trade-data";
import { cn } from "@/lib/utils";

interface SustainabilitySolutionsPortfolioProps {
  ar?: boolean;
}

export function SustainabilitySolutionsPortfolio({ ar = true }: SustainabilitySolutionsPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<SustainabilitySubsectorKey>("renewable_energy");

  const selectedPortfolio = SUSTAINABILITY_SOLUTIONS_PORTFOLIO.find(
    (c) => c.categoryKey === activeCategory
  ) || SUSTAINABILITY_SOLUTIONS_PORTFOLIO[0];

  const getDeliveryBadge = (model: DeliveryModel, modelAr: string, modelEn: string) => {
    switch (model) {
      case "in_house":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-brand-green/40 bg-brand-green/15 px-3 py-0.5 text-[11px] font-bold text-brand-green">
            <span className="size-1.5 rounded-full bg-brand-green" />
            <span>{ar ? modelAr : modelEn}</span>
          </span>
        );
      case "technical_partner":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-sky-500/40 bg-sky-500/15 px-3 py-0.5 text-[11px] font-bold text-sky-600 dark:text-sky-400">
            <span className="size-1.5 rounded-full bg-sky-500" />
            <span>{ar ? modelAr : modelEn}</span>
          </span>
        );
      case "under_development":
        return (
          <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/15 px-3 py-0.5 text-[11px] font-bold text-amber-600 dark:text-amber-400">
            <span className="size-1.5 rounded-full bg-amber-500" />
            <span>{ar ? modelAr : modelEn}</span>
          </span>
        );
    }
  };

  return (
    <div id="solutions-portfolio" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الرابع: محفظة الخدمات والحلول البيئية" : "Section 4: Environmental Services & Solutions Portfolio"}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "محفظة الخدمات البيئية ونماذج تقديم الحلول" : "Environmental Services & Solutions Portfolio"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
              {ar
                ? "استعراض منظم لـ 6 فئات رئيسية للخدمات البيئية، مع التمييز الواضح والشفاف بين القدرات الذاتية، والخدمات المنفذة عبر تحالفات تقنية، والفرص الاستثمارية قيد التطوير المشترك."
                : "Structured overview of 6 core environmental categories, transparently differentiating in-house capabilities, technical consortium deliveries, and co-development opportunities."}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-2xl border border-white/20 bg-secondary/70 px-4 py-2 text-xs font-bold text-foreground shrink-0 self-start">
            <span>{ar ? "شفافية تعاقدية معتمدة" : "Verified Delivery Integrity"}</span>
          </span>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6 border-y border-white/10 py-4">
        {SUSTAINABILITY_SOLUTIONS_PORTFOLIO.map((cat) => {
          const isActive = activeCategory === cat.categoryKey;

          return (
            <button
              key={cat.categoryKey}
              type="button"
              onClick={() => setActiveCategory(cat.categoryKey)}
              className={cn(
                "group flex flex-col items-center justify-center gap-2 rounded-2xl p-3.5 text-center transition-all duration-300 cursor-pointer border shadow-xs",
                isActive
                  ? "!border-brand-green !bg-brand-green !text-white shadow-md shadow-brand-green/25 hover:!bg-brand-orange hover:!border-brand-orange hover:!text-white"
                  : "border-border/80 bg-secondary/70 text-foreground hover:border-brand-orange/50 hover:text-brand-orange hover:bg-secondary/90"
              )}
            >
              <span className="text-xs font-bold leading-tight">
                {ar ? cat.categoryNameAr : cat.categoryNameEn}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Category Display */}
      <div className="space-y-6">
        <div className="rounded-2xl border border-white/10 bg-secondary/40 p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {ar ? selectedPortfolio.categoryNameAr : selectedPortfolio.categoryNameEn}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {ar ? selectedPortfolio.categoryTaglineAr : selectedPortfolio.categoryTaglineEn}
            </p>
          </div>
          <span className="rounded-xl border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green shrink-0 self-start">
            {ar ? `${selectedPortfolio.services.length} حلول متخصصة` : `${selectedPortfolio.services.length} Solutions`}
          </span>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {selectedPortfolio.services.map((svc) => (
            <div
              key={svc.id}
              className="rounded-3xl border border-white/15 bg-background/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-4 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-mono text-xs font-bold text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-lg border border-border">
                    {svc.id}
                  </span>
                  {getDeliveryBadge(svc.deliveryModel, svc.deliveryModelAr, svc.deliveryModelEn)}
                </div>

                <h4 className="text-base font-bold text-foreground leading-snug">
                  {ar ? svc.nameAr : svc.nameEn}
                </h4>

                <p className="text-xs text-foreground/80 leading-relaxed">
                  {ar ? svc.descriptionAr : svc.descriptionEn}
                </p>
              </div>

              <div className="rounded-2xl border border-white/5 bg-secondary/40 p-3 text-xs space-y-1">
                <span className="font-bold text-foreground block text-[11px]">
                  {ar ? "أبرز التطبيقات والقطاعات المستهدفة:" : "Core Applications & Sectors:"}
                </span>
                <span className="text-muted-foreground">{ar ? svc.keyApplicationsAr : svc.keyApplicationsEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Disclosure Notice */}
        <div className="rounded-2xl border border-border/70 bg-secondary/30 p-4 text-xs text-muted-foreground">
          <div className="space-y-1 leading-relaxed">
            <span className="font-bold text-foreground block">
              {ar ? "إقرار الشفافية ونطاق التنفيذ المعتمد:" : "Transparency & Delivery Scope Disclosure:"}
            </span>
            <p>
              {ar
                ? "تلتزم مجموعة سامي بن عياد بالتمييز الواضح بين الخدمات المنفذة مباشرة بكوادرها الاستشارية والتشغيلية، وتلك التي تُقدم عبر تحالفات هندسية وتقنية دولية مرخصة، أو المشاريع الاستثمارية المشتركة قيد التطوير، دون اصطناع أي تراخيص أو مؤهلات غير موثقة."
                : "SAMI BIN AYYAD GROUP maintains strict integrity by clearly differentiating directly executed services from technical consortium-led projects and investment opportunities under co-development, without claiming unverified licenses or reference qualifications."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

