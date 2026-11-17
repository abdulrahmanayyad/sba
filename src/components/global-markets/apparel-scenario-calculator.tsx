import { useState } from "react";

interface ApparelScenarioCalculatorProps {
  countryNameAr?: string;
  countryNameEn?: string;
  ar: boolean;
}

const VOLUME_SCENARIOS = [
  { key: "10k", monthly: 10000, labelAr: "مرحلة تجريبية", labelEn: "Pilot Scale" },
  { key: "25k", monthly: 25000, labelAr: "مرحلة متوسطة", labelEn: "Medium Scale" },
  { key: "50k", monthly: 50000, labelAr: "مرحلة التوسع", labelEn: "Expansion Scale" },
  { key: "100k", monthly: 100000, labelAr: "طاقة كبيرة", labelEn: "High-Capacity Scale" },
];

export function ApparelScenarioCalculator({
  ar,
}: ApparelScenarioCalculatorProps) {
  const [modelType, setModelType] = useState<"FOB" | "CM">("FOB");
  const [customQtyInput, setCustomQtyInput] = useState<string>("25000");
  const [unitPriceInput, setUnitPriceInput] = useState<string>("6");

  const parsedPrice = Number(unitPriceInput);
  const unitPrice = Number.isFinite(parsedPrice) && parsedPrice >= 0 ? parsedPrice : 0;

  const parsedCustomQty = Number(customQtyInput);
  const customQty = Number.isFinite(parsedCustomQty) && parsedCustomQty > 0 ? parsedCustomQty : 0;
  const customMonthlyVal = customQty * unitPrice;
  const customAnnualUnits = customQty * 12;
  const customAnnualVal = customMonthlyVal * 12;

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-md space-y-5 text-start">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 dark:border-white/10 pb-4">
        <div>
          <h2 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            {ar
              ? "حساب السيناريوهات التخطيطية للطاقة الإنتاجية"
              : "Production Volume & Pricing Scenario Calculations"}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {ar
              ? "اختبار حسابي مرن لأثر سعر الوحدة والكمية المطلوبة شهريًا (FOB أو CM) مع سيناريوهات تشغيلية قياسية."
              : "Flexible arithmetic calculation of unit price and monthly production volume (FOB or CM) with standard reference scenarios."}
          </p>
        </div>
      </div>

      {/* Controls: Reordered as requested: نموذج التصنيع - كمية الإنتاج (قطعة/شهر) - سعر القطعة (دولار) */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* 1. نموذج التصنيع */}
        <div className="space-y-1.5 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200 block">
            {ar ? "نموذج التصنيع" : "Manufacturing Model"}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setModelType("FOB")}
              className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                modelType === "FOB"
                  ? "border-brand-green bg-brand-green text-white shadow-xs"
                  : "border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-brand-green hover:text-brand-green"
              }`}
            >
              {ar ? "نموذج FOB" : "FOB Model"}
            </button>
            <button
              type="button"
              onClick={() => setModelType("CM")}
              className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                modelType === "CM"
                  ? "border-brand-orange bg-brand-orange text-white shadow-xs"
                  : "border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              {ar ? "نموذج CM" : "CM Model"}
            </button>
          </div>
        </div>

        {/* 2. كمية الإنتاج (قطعة/شهر) - Without X button */}
        <label className="block space-y-1.5 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200 block">
            {ar ? "كمية الإنتاج (قطعة/شهر)" : "Production Volume (pcs/month)"}
          </span>
          <input
            type="number"
            min="1"
            step="500"
            placeholder={ar ? "أدخل الكمية" : "Enter quantity"}
            value={customQtyInput}
            onChange={(e) => setCustomQtyInput(e.target.value)}
            className="w-full rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-slate-950/60 px-3.5 py-2 text-sm font-mono font-bold text-slate-900 dark:text-white focus:border-brand-green focus:outline-none"
          />
        </label>

        {/* 3. سعر القطعة (دولار) */}
        <label className="block space-y-1.5 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200 block">
            {ar ? "سعر القطعة (دولار)" : "Unit Price (USD)"}
          </span>
          <input
            type="number"
            min="0"
            step="0.25"
            value={unitPriceInput}
            onChange={(e) => setUnitPriceInput(e.target.value)}
            className="w-full rounded-xl border border-slate-300 dark:border-white/20 bg-white dark:bg-slate-950/60 px-3.5 py-2 text-sm font-mono font-bold text-slate-900 dark:text-white focus:border-brand-green focus:outline-none"
          />
        </label>
      </div>

      {/* Live Custom Calculation Box (المربع اللي تحتهم مباشرة) */}
      {customQty > 0 && (
        <div className="rounded-2xl border-2 border-brand-green/30 bg-gradient-to-r from-brand-green/10 via-brand-green/5 to-transparent dark:from-brand-green/15 dark:via-brand-green/10 p-4 sm:p-5 transition-all duration-300 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 pb-3 border-b border-brand-green/20">
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-brand-green text-white text-xs font-black shadow-xs">
                ✓
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white">
                {ar ? "نتيجة الحساب للكمية المحددة:" : "Calculation Result for Selected Quantity:"}
              </span>
              <span className="rounded-full bg-brand-green/20 text-brand-green px-2.5 py-0.5 text-xs font-mono font-extrabold">
                {customQty.toLocaleString("en-US")} {ar ? "قطعة / شهر" : "pcs / mo"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="rounded-lg bg-brand-green px-2.5 py-1 text-xs font-bold text-white shadow-xs">
                {ar ? (modelType === "FOB" ? "نموذج FOB" : "نموذج CM") : `${modelType} Model`}
              </span>
              <span className="font-mono text-xs font-bold text-slate-600 dark:text-slate-300">
                @ ${unitPrice.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {ar ? "القيمة الشهرية التقديرية:" : "Estimated Monthly Gross:"}
              </span>
              <span className="font-mono text-lg sm:text-xl font-extrabold text-brand-green">
                ${customMonthlyVal.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </div>

            <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {ar ? "إجمالي الإنتاج السنوي:" : "Total Annualized Quantity:"}
              </span>
              <span className="font-mono text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {customAnnualUnits.toLocaleString("en-US")}{" "}
                <span className="text-xs font-normal text-slate-500">{ar ? "قطعة" : "pcs"}</span>
              </span>
            </div>

            <div className="rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 p-3.5 shadow-xs">
              <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1">
                {ar ? "الإيراد السنوي التقديري:" : "Estimated Annualized Gross:"}
              </span>
              <span className="font-mono text-lg sm:text-xl font-extrabold text-brand-orange">
                ${customAnnualVal.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Scenarios Cards */}
      <div className="space-y-2.5">
        <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
          {ar ? "السيناريوهات التخطيطية القياسية (انقر على أي مرحلة للتطبيق المباشر):" : "Standard Planning Benchmarks (Click any scale to apply):"}
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {VOLUME_SCENARIOS.map((sc, idx) => {
            const monthlyVal = sc.monthly * unitPrice;
            const annualUnits = sc.monthly * 12;
            const annualVal = monthlyVal * 12;
            const isGreen = idx % 2 === 0;
            const isSelected = customQty === sc.monthly;

            return (
              <div
                key={sc.key}
                onClick={() => setCustomQtyInput(String(sc.monthly))}
                className={`group rounded-2xl border p-4 space-y-2 transition-all duration-300 cursor-pointer shadow-xs ${
                  isSelected
                    ? "border-brand-green ring-2 ring-brand-green/30 bg-brand-green/10 dark:bg-brand-green/15"
                    : isGreen
                      ? "border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 hover:border-brand-green hover:bg-brand-green/10 hover:shadow-md dark:hover:bg-brand-green/15"
                      : "border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 hover:border-brand-orange hover:bg-brand-orange/10 hover:shadow-md dark:hover:bg-brand-orange/15"
                }`}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span
                    className={`font-bold transition-colors ${
                      isSelected
                        ? "text-brand-green"
                        : isGreen
                          ? "group-hover:text-brand-green text-slate-500"
                          : "group-hover:text-brand-orange text-slate-500"
                    }`}
                  >
                    {ar ? sc.labelAr : sc.labelEn}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold transition-colors ${
                      isSelected
                        ? "bg-brand-green text-white"
                        : isGreen
                          ? "bg-slate-200/70 text-slate-800 dark:bg-white/10 dark:text-slate-100 group-hover:bg-brand-green group-hover:text-white"
                          : "bg-slate-200/70 text-slate-800 dark:bg-white/10 dark:text-slate-100 group-hover:bg-brand-orange group-hover:text-white"
                    }`}
                  >
                    {ar ? (modelType === "FOB" ? "نموذج FOB" : "نموذج CM") : modelType}
                  </span>
                </div>
                <div className="font-head text-lg font-extrabold text-slate-900 dark:text-white">
                  {sc.monthly.toLocaleString("en-US")}{" "}
                  <span className="text-xs font-semibold text-slate-500">
                    {ar ? "قطعة/شهر" : "pcs/mo"}
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-200/70 dark:border-white/10 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500">{ar ? "قيمة شهرية:" : "Monthly Gross:"}</span>
                    <span
                      className={`font-mono font-bold transition-colors ${
                        isGreen ? "text-brand-green" : "text-brand-orange"
                      }`}
                    >
                      ${monthlyVal.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{ar ? "حجم سنوي:" : "Annual Qty:"}</span>
                    <span className="font-mono text-slate-700 dark:text-slate-300">
                      {annualUnits.toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{ar ? "إيراد سنوي:" : "Annualized Gross:"}</span>
                    <span className="font-mono font-bold text-slate-900 dark:text-white">
                      ${annualVal.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
