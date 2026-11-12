import React from "react";

interface ApparelIntelligenceProps {
  ar?: boolean;
}

export function ApparelIntelligence({ ar = true }: ApparelIntelligenceProps) {
  const categoriesDemand = [
    { nameAr: "ملابس نسائية (عبايات، بيجامات، إسدالات)", nameEn: "Women's Wear & Modest Fashion", pct: 45, color: "bg-brand-orange" },
    { nameAr: "ملابس أطفال ورضع وحديثي الولادة", nameEn: "Infants & Childrenswear", pct: 30, color: "bg-brand-green" },
    { nameAr: "أزياء وتريكو وقطنيات متخصصة", nameEn: "Specialized Knits & Basics", pct: 25, color: "bg-blue-500" },
  ];

  const clientSegments = [
    { nameAr: "تجار الجملة والمستوردين الإقليميين", nameEn: "Regional Wholesalers & Importers", share: "38%" },
    { nameAr: "العلامات التجارية وسلاسل التجزئة الخاصة", nameEn: "Retail Brands & Private Labels", share: "34%" },
    { nameAr: "المتاجر الإلكترونية ومنصات البيع الرقمية", nameEn: "E-Commerce & Digital Marketplaces", share: "18%" },
    { nameAr: "المستشفيات والجهات المؤسسية واليونيفورم", nameEn: "Institutional, Healthcare & Uniforms", share: "10%" },
  ];

  const regionalShare = [
    { regionAr: "العالم العربي وشمال إفريقيا", regionEn: "Arab & North Africa", count: 11, share: "55%" },
    { regionAr: "إفريقيا جنوب الصحراء", regionEn: "Sub-Saharan Africa", count: 4, share: "20%" },
    { regionAr: "أوروبا (إيطاليا، بريطانيا، ألمانيا)", regionEn: "Europe", count: 3, share: "15%" },
    { regionAr: "وجهات أخرى (كندا، تل أبيب/1948)", regionEn: "Other Destinations", count: 2, share: "10%" },
  ];

  return (
    <div id="apparel-intelligence" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم السابع: اتجاهات السوق والتحليلات" : "Section 7: Market Trends & Analytics"}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
          {ar ? "تحليل اتجاهات الطلب وحركة الأسواق الدولية" : "Commercial Demand Trends & Market Intelligence"}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
          {ar
            ? "قراءة تحليلية مستندة إلى أكثر من 1500 محادثة وسجل تواصلي تاريخي مع المستوردين والعلامات التجارية حول العالم."
            : "Analytical synthesis grounded in over 1,500 historical business dialogues and buyer procurement requests worldwide."}
        </p>
      </div>

      {/* Analytics Disclaimer */}
      <div className="rounded-2xl border border-border/60 bg-muted/30 p-4 text-xs text-muted-foreground">
        <p>
          <strong className="text-foreground">{ar ? "تنويه تحليلي:" : "Analytical Note:"}</strong>{" "}
          {ar
            ? "النسب والبيانات الموضحة أدناه تمثل استخلاصًا تحليليًا لمؤشرات الاهتمام وحجم المباحثات التصديرية التاريخية المسجلة لدى المجموعة وليست أرقام مبيعات نهائية قطعية."
            : "The percentages and trends displayed represent analytical indices of historical inquiry volume and export dialogues, rather than executed final audited financial turnover."}
        </p>
      </div>

      {/* Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* 1. Demand by Category */}
        <div className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-sm text-foreground">
              {ar ? "توزيع الطلب حسب فئة المنتجات" : "Demand Breakdown by Category"}
            </h3>
          </div>

          <div className="space-y-3 pt-2">
            {categoriesDemand.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-foreground">{ar ? item.nameAr : item.nameEn}</span>
                  <span className="font-bold text-foreground">{item.pct}%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted/60 overflow-hidden">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Client Segmentation */}
        <div className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-sm text-foreground">
              {ar ? "تصنيف شرائح المشترين والمستوردين" : "Buyer Segmentation Breakdown"}
            </h3>
          </div>

          <div className="space-y-2.5 pt-2">
            {clientSegments.map((seg, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/30 p-2.5 text-xs"
              >
                <span className="font-medium text-foreground">{ar ? seg.nameAr : seg.nameEn}</span>
                <span className="font-bold text-brand-green px-2 py-0.5 rounded-md bg-brand-green/10">
                  {seg.share}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Regional Distribution */}
        <div className="rounded-2xl border border-border/80 bg-background/70 p-5 backdrop-blur-xl shadow-sm space-y-4">
          <div>
            <h3 className="font-bold text-sm text-foreground">
              {ar ? "التوزيع الجغرافي للأسواق" : "Regional Geographical Share"}
            </h3>
          </div>

          <div className="space-y-2.5 pt-2">
            {regionalShare.map((reg, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between rounded-xl border border-border/60 bg-muted/30 p-2.5 text-xs"
              >
                <div>
                  <span className="font-bold text-foreground block">{ar ? reg.regionAr : reg.regionEn}</span>
                  <span className="text-[11px] text-muted-foreground">
                    {ar ? `${reg.count} أسواق موثقة` : `${reg.count} Documented Markets`}
                  </span>
                </div>
                <span className="font-bold text-foreground px-2 py-0.5 rounded-md bg-secondary">
                  {reg.share}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

