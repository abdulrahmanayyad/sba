import React, { useMemo, useState } from "react";
import {
  Calculator,
  RotateCcw,
  TrendingUp,
  Percent,
  Coins,
  ShieldCheck,
  AlertTriangle,
  Info,
  Sliders,
  Table as TableIcon,
} from "lucide-react";

interface FeasibilityCalculatorProps {
  ar: boolean;
}

export function FeasibilityCalculator({ ar }: FeasibilityCalculatorProps) {
  // Inputs
  const [landAreaSqm, setLandAreaSqm] = useState<number>(10000);
  const [landCostPerSqm, setLandCostPerSqm] = useState<number>(15000);
  const [buaSqm, setBuaSqm] = useState<number>(25000);
  const [constructionCostPerSqm, setConstructionCostPerSqm] = useState<number>(18000);
  const [softCostsPercent, setSoftCostsPercent] = useState<number>(8);
  const [infraCostPerSqm, setInfraCostPerSqm] = useState<number>(1500);
  const [contingencyPercent, setContingencyPercent] = useState<number>(7);
  const [marketingPercent, setMarketingPercent] = useState<number>(5);
  const [financePercent, setFinancePercent] = useState<number>(8);
  const [revenuePerSqm, setRevenuePerSqm] = useState<number>(45000);
  const [phasingYears, setPhasingYears] = useState<number>(3);
  const [discountRatePercent, setDiscountRatePercent] = useState<number>(18);

  const applyPreset = (preset: "base" | "conservative" | "optimistic") => {
    if (preset === "base") {
      setLandAreaSqm(10000);
      setLandCostPerSqm(15000);
      setBuaSqm(25000);
      setConstructionCostPerSqm(18000);
      setRevenuePerSqm(45000);
      setDiscountRatePercent(18);
    } else if (preset === "conservative") {
      setLandAreaSqm(10000);
      setLandCostPerSqm(16500);
      setBuaSqm(25000);
      setConstructionCostPerSqm(21600); // +20% cost shock
      setRevenuePerSqm(40500); // -10% price soften
      setDiscountRatePercent(22);
    } else if (preset === "optimistic") {
      setLandAreaSqm(10000);
      setLandCostPerSqm(14000);
      setBuaSqm(26000);
      setConstructionCostPerSqm(16500);
      setRevenuePerSqm(52000);
      setDiscountRatePercent(16);
    }
  };

  const calcs = useMemo(() => {
    const totalLandCost = landAreaSqm * landCostPerSqm;
    const directConstruction = buaSqm * constructionCostPerSqm;
    const infrastructure = landAreaSqm * infraCostPerSqm;
    const softCosts = directConstruction * (softCostsPercent / 100);
    const contingency = (directConstruction + infrastructure) * (contingencyPercent / 100);
    const totalHardAndSoft = directConstruction + infrastructure + softCosts + contingency;

    const gdv = buaSqm * revenuePerSqm;
    const marketingCosts = gdv * (marketingPercent / 100);
    const financeCosts = (totalLandCost + totalHardAndSoft) * (financePercent / 100);
    const tdc = totalLandCost + totalHardAndSoft + marketingCosts + financeCosts;

    const profit = gdv - tdc;
    const marginOnCost = tdc > 0 ? (profit / tdc) * 100 : 0;
    const marginOnRevenue = gdv > 0 ? (profit / gdv) * 100 : 0;
    const breakEvenRate = gdv > 0 ? (tdc / gdv) * 100 : 0;
    const peakFunding = totalLandCost + (directConstruction + infrastructure) * 0.4;
    const equityMultiple = tdc > 0 ? gdv / tdc : 0;

    // Simplified Phased DCF for NPV & IRR estimation
    const rate = discountRatePercent / 100;
    let npv = - (totalLandCost + totalHardAndSoft * 0.3);
    const remainingCostPerYear = (totalHardAndSoft * 0.7 + marketingCosts + financeCosts) / phasingYears;
    const revenuePerYear = gdv / phasingYears;

    for (let yr = 1; yr <= phasingYears; yr++) {
      const netCash = revenuePerYear - remainingCostPerYear;
      npv += netCash / Math.pow(1 + rate, yr);
    }

    const annualReturn = phasingYears > 0 ? Math.pow(Math.max(0.1, 1 + profit / tdc), 1 / phasingYears) - 1 : 0;
    const approxIrr = annualReturn * 100;

    // Sensitivity Matrix calculation:
    // Variations in Cost Shock (+0%, +10%, +20%) vs Revenue Softening (0%, -5%, -10%, -15%)
    const costMultipliers = [1.0, 1.1, 1.2];
    const revenueMultipliers = [1.0, 0.95, 0.9, 0.85];

    const sensitivityMatrix = costMultipliers.map((cMult) => {
      const adjustedConstruction = directConstruction * cMult;
      const adjHardSoft = adjustedConstruction + infrastructure + (adjustedConstruction * softCostsPercent / 100) + ((adjustedConstruction + infrastructure) * contingencyPercent / 100);
      return revenueMultipliers.map((rMult) => {
        const adjGdv = gdv * rMult;
        const adjMarketing = adjGdv * (marketingPercent / 100);
        const adjFinance = (totalLandCost + adjHardSoft) * (financePercent / 100);
        const adjTdc = totalLandCost + adjHardSoft + adjMarketing + adjFinance;
        const adjProfit = adjGdv - adjTdc;
        const adjMargin = adjTdc > 0 ? (adjProfit / adjTdc) * 100 : 0;
        return {
          profit: adjProfit,
          margin: adjMargin,
        };
      });
    });

    return {
      totalLandCost,
      directConstruction,
      infrastructure,
      softCosts,
      contingency,
      gdv,
      tdc,
      profit,
      marginOnCost,
      marginOnRevenue,
      breakEvenRate,
      peakFunding,
      equityMultiple,
      npv,
      approxIrr,
      sensitivityMatrix,
    };
  }, [
    landAreaSqm,
    landCostPerSqm,
    buaSqm,
    constructionCostPerSqm,
    softCostsPercent,
    infraCostPerSqm,
    contingencyPercent,
    marketingPercent,
    financePercent,
    revenuePerSqm,
    phasingYears,
    discountRatePercent,
  ]);

  const fmt = (num: number) =>
    new Intl.NumberFormat(ar ? "ar-EG" : "en-US", {
      maximumFractionDigits: 1,
    }).format(num);

  const fmtCurrency = (num: number) => {
    if (Math.abs(num) >= 1_000_000_000) {
      return `${fmt(num / 1_000_000_000)} ${ar ? "مليار جنيه" : "B EGP"}`;
    }
    if (Math.abs(num) >= 1_000_000) {
      return `${fmt(num / 1_000_000)} ${ar ? "مليون جنيه" : "M EGP"}`;
    }
    return `${fmt(num)} ${ar ? "جنيه" : "EGP"}`;
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 p-6 md:p-8 shadow-xl backdrop-blur-md space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#0F8B7A]/15 text-[#0F8B7A]">
              <Calculator className="size-5" />
            </span>
            <h3 className="font-head text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {ar ? "أداة النمذجة والجدوى المالية التفاعلية للأرض" : "Interactive Land Financial Feasibility Engine"}
            </h3>
          </div>
          <p className="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            {ar
              ? "اختبر الفرضيات المالية الحقيقية لأي قطعة أرض بشرق القاهرة (GDV, TDC, Margin, NPV, IRR) مع مصفوفة حساسية الصدمات السعرية والتكاليف."
              : "Institutional land underwriting model (GDV, TDC, Margins, NPV, IRR) featuring stress-tested cost shock and revenue sensitivity matrices."}
          </p>
        </div>

        {/* Scenarios Preset */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">{ar ? "سيناريو:" : "Scenario:"}</span>
          <button
            type="button"
            onClick={() => applyPreset("base")}
            className="rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-xs font-bold text-slate-800 dark:text-slate-200 hover:bg-[#0F8B7A] hover:text-white transition-colors"
          >
            {ar ? "الأساس" : "Base"}
          </button>
          <button
            type="button"
            onClick={() => applyPreset("conservative")}
            className="rounded-lg border border-amber-300 dark:border-amber-700/50 bg-amber-50 dark:bg-amber-950/30 px-3 py-1.5 text-xs font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-600 hover:text-white transition-colors"
          >
            {ar ? "متحفظ (+20% تكلفة)" : "Conservative"}
          </button>
          <button
            type="button"
            onClick={() => applyPreset("optimistic")}
            className="rounded-lg border border-teal-300 dark:border-teal-700/50 bg-teal-50 dark:bg-teal-950/30 px-3 py-1.5 text-xs font-bold text-teal-800 dark:text-teal-200 hover:bg-teal-600 hover:text-white transition-colors"
          >
            {ar ? "متفائل" : "Optimistic"}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Inputs Column */}
        <div className="lg:col-span-7 space-y-4">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {ar ? "1. مدخلات الأرض والإنشاء (قابلة للتعديل)" : "1. Land & Construction Inputs (Editable)"}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {/* Land Area */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "مساحة الأرض (متر مربع):" : "Land Area (sqm):"}
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={landAreaSqm}
                  onChange={(e) => setLandAreaSqm(Number(e.target.value))}
                  className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
                />
                <span className="text-xs text-slate-500 shrink-0">
                  ≈ {(landAreaSqm / 4200.83).toFixed(2)} {ar ? "فدان" : "Fed."}
                </span>
              </div>
            </div>

            {/* Land Price */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "سعر متر الأرض النقدي (جنيه/م²):" : "Land Cash Basis (EGP/sqm):"}
              </label>
              <input
                type="number"
                value={landCostPerSqm}
                onChange={(e) => setLandCostPerSqm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* BUA */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "المساحة البنائية BUA (متر مربع):" : "Built-up Area / BUA (sqm):"}
              </label>
              <input
                type="number"
                value={buaSqm}
                onChange={(e) => setBuaSqm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* Construction Cost */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "تكلفة البناء المباشرة (جنيه/م² بنائي):" : "Construction Cost (EGP/sqm BUA):"}
              </label>
              <input
                type="number"
                value={constructionCostPerSqm}
                onChange={(e) => setConstructionCostPerSqm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* Revenue / Sales Price */}
            <div className="rounded-xl border border-[#0F8B7A]/30 bg-[#0F8B7A]/5 p-3">
              <label className="text-xs font-bold text-[#0F8B7A] block mb-1">
                {ar ? "متوسط سعر البيع المستهدف (جنيه/م²):" : "Target Average Sale Price (EGP/sqm):"}
              </label>
              <input
                type="number"
                value={revenuePerSqm}
                onChange={(e) => setRevenuePerSqm(Number(e.target.value))}
                className="w-full rounded-lg border border-[#0F8B7A]/40 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-[#0F8B7A]"
              />
            </div>

            {/* Infrastructure Cost */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "مرافق وشبكات الموقع (جنيه/م² أرض):" : "Site Infrastructure (EGP/sqm Land):"}
              </label>
              <input
                type="number"
                value={infraCostPerSqm}
                onChange={(e) => setInfraCostPerSqm(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* Contingency */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "احتياطي طوارئ وتضخم (%):" : "Contingency & Escalation (%):"}
              </label>
              <input
                type="number"
                value={contingencyPercent}
                onChange={(e) => setContingencyPercent(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>

            {/* Discount Rate */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/50 p-3">
              <label className="text-xs font-semibold text-slate-600 dark:text-slate-300 block mb-1">
                {ar ? "معدل الخصم المستهدف WACC (%):" : "Discount Rate / WACC (%):"}
              </label>
              <input
                type="number"
                value={discountRatePercent}
                onChange={(e) => setDiscountRatePercent(Number(e.target.value))}
                className="w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-1.5 text-sm font-bold text-slate-900 dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Results Dashboard Column */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/70 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
              <TrendingUp className="size-4 text-[#0F8B7A]" />
              {ar ? "2. المخرجات المالية للمشروع" : "2. Financial Underwriting Outputs"}
            </h4>
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-bold ${
              calcs.profit > 0 ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300" : "bg-red-500/15 text-red-700"
            }`}>
              {calcs.profit > 0 ? (ar ? "مجدٍ ماليًا" : "Feasible") : (ar ? "عجز مالي" : "Deficit")}
            </span>
          </div>

          {/* GDV & TDC Big Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white dark:bg-slate-900 p-3.5 border border-slate-200 dark:border-white/10">
              <span className="text-xs font-semibold text-slate-500 block">
                {ar ? "إجمالي القيمة التنموية (GDV):" : "Gross Dev Value (GDV):"}
              </span>
              <span className="text-lg md:text-xl font-extrabold text-[#0F8B7A] block mt-1">
                {fmtCurrency(calcs.gdv)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {fmt(calcs.gdv / buaSqm)} {ar ? "جنيه/م² بنائي" : "EGP/sqm BUA"}
              </span>
            </div>

            <div className="rounded-xl bg-white dark:bg-slate-900 p-3.5 border border-slate-200 dark:border-white/10">
              <span className="text-xs font-semibold text-slate-500 block">
                {ar ? "إجمالي تكلفة التطوير (TDC):" : "Total Dev Cost (TDC):"}
              </span>
              <span className="text-lg md:text-xl font-extrabold text-slate-800 dark:text-slate-100 block mt-1">
                {fmtCurrency(calcs.tdc)}
              </span>
              <span className="text-[11px] text-slate-400 block mt-0.5">
                {fmt(calcs.tdc / buaSqm)} {ar ? "جنيه/م² شامل" : "EGP/sqm all-in"}
              </span>
            </div>
          </div>

          {/* Profit & Margins Breakdown */}
          <div className="rounded-xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-white/10 space-y-2.5">
            <div className="flex items-center justify-between text-sm pb-2 border-b border-slate-100 dark:border-white/5">
              <span className="text-slate-600 dark:text-slate-400 font-medium">
                {ar ? "صافي الربح التنموي الإجمالي:" : "Gross Development Profit:"}
              </span>
              <span className={`font-extrabold ${calcs.profit >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`}>
                {fmtCurrency(calcs.profit)}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{ar ? "هامش الربح على التكلفة (Margin on Cost):" : "Margin on Cost:"}</span>
              <span className="font-bold text-slate-900 dark:text-white">{fmt(calcs.marginOnCost)}%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{ar ? "هامش الربح على الإيراد (Margin on GDV):" : "Margin on Revenue:"}</span>
              <span className="font-bold text-slate-900 dark:text-white">{fmt(calcs.marginOnRevenue)}%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{ar ? "معدل التعادل في المبيعات (Break-Even):" : "Break-Even Sales Rate:"}</span>
              <span className="font-bold text-amber-600 dark:text-amber-400">{fmt(calcs.breakEvenRate)}%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{ar ? "مضاعف حقوق الملكية (Equity Multiple):" : "Equity Multiple:"}</span>
              <span className="font-bold text-[#0F8B7A]">{fmt(calcs.equityMultiple)}x</span>
            </div>

            <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 dark:border-white/5">
              <span className="text-slate-500">{ar ? "صافي القيمة الحالية المخصومة (NPV):" : "Net Present Value (NPV):"}</span>
              <span className={`font-bold ${calcs.npv >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600"}`}>
                {fmtCurrency(calcs.npv)}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">{ar ? "معدل العائد الداخلي السنوي المقدر (IRR):" : "Estimated Annual IRR:"}</span>
              <span className="font-bold text-[#0F8B7A]">{fmt(calcs.approxIrr)}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sensitivity Analysis Matrix */}
      <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/80 dark:bg-slate-800/40 p-5 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <TableIcon className="size-4 text-[#F28C00]" />
            <span>{ar ? "مصفوفة اختبار الحساسية (صدمات تكلفة الإنشاء مقابل تراجع أسعار البيع)" : "SENSITIVITY MATRIX: Construction Cost Inflation vs. Price Softening"}</span>
          </h4>
          <span className="text-[11px] text-slate-500">
            {ar ? "هوامش الربح على التكلفة الناتجة" : "Resulting Margin on Cost (%)"}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900">
                <th className="p-2.5 text-start font-bold text-slate-700 dark:text-slate-300">
                  {ar ? "صدمة التكلفة \\ سعر البيع" : "Cost Shock \\ Price"}
                </th>
                <th className="p-2.5 font-bold text-slate-700 dark:text-slate-300">{ar ? "سعر الأساس (100%)" : "Base Price (100%)"}</th>
                <th className="p-2.5 font-bold text-slate-700 dark:text-slate-300">{ar ? "تراجع -5%" : "-5% Revenue"}</th>
                <th className="p-2.5 font-bold text-slate-700 dark:text-slate-300">{ar ? "تراجع -10%" : "-10% Revenue"}</th>
                <th className="p-2.5 font-bold text-slate-700 dark:text-slate-300">{ar ? "تراجع -15%" : "-15% Revenue"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-white/5">
              {[
                { labelAr: "تكلفة الأساس (100%)", labelEn: "Base Cost (100%)", rowIdx: 0 },
                { labelAr: "صدمة تكلفة +10%", labelEn: "+10% Cost Shock", rowIdx: 1 },
                { labelAr: "صدمة تكلفة +20%", labelEn: "+20% Cost Shock", rowIdx: 2 },
              ].map((cRow) => (
                <tr key={cRow.rowIdx} className="hover:bg-white/60 dark:hover:bg-slate-800/80">
                  <td className="p-2.5 text-start font-bold text-slate-800 dark:text-slate-200">
                    {ar ? cRow.labelAr : cRow.labelEn}
                  </td>
                  {calcs.sensitivityMatrix[cRow.rowIdx]?.map((cell, colIdx) => {
                    const isPositive = cell.profit > 0;
                    return (
                      <td key={colIdx} className="p-2.5">
                        <span className={`inline-block px-2.5 py-1 rounded-md font-bold text-xs ${
                          cell.margin >= 25
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                            : cell.margin >= 10
                            ? "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                            : "bg-rose-500/15 text-rose-700 dark:text-rose-300"
                        }`}>
                          {fmt(cell.margin)}%
                        </span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
