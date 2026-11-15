import { useState } from "react";

interface ApparelScenarioCalculatorProps {
  countryNameAr: string;
  countryNameEn: string;
  ar: boolean;
}

const VOLUME_SCENARIOS = [
  { key: "10k", monthly: 10000, labelAr: "مرحلة تجريبية", labelEn: "Pilot Scale" },
  { key: "25k", monthly: 25000, labelAr: "مرحلة متوسطة", labelEn: "Medium Scale" },
  { key: "50k", monthly: 50000, labelAr: "مرحلة التوسع", labelEn: "Expansion Scale" },
  { key: "100k", monthly: 100000, labelAr: "طاقة كبيرة", labelEn: "High-Capacity Scale" },
];

export function ApparelScenarioCalculator({
  countryNameAr,
  countryNameEn,
  ar,
}: ApparelScenarioCalculatorProps) {
  const [unitPriceInput, setUnitPriceInput] = useState<string>("6");
  const [modelType, setModelType] = useState<"FOB" | "CM">("FOB");

  const parsedPrice = Number(unitPriceInput);
  const unitPrice = Number.isFinite(parsedPrice) && parsedPrice >= 0 ? parsedPrice : 0;

  return (
    <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-md space-y-5 text-start">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 dark:border-white/10 pb-4">
        <div>
          <h2 className="font-head text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
            {ar
              ? `حاسبة السيناريوهات التخطيطية للطاقة الإنتاجية — ${countryNameAr}`
              : `Production Volume & Pricing Scenario Calculator — ${countryNameEn}`}
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {ar
              ? "اختبار حسابي لأثر سعر الوحدة الافتراضي (مدخل بواسطة المستخدم) عبر 10k / 25k / 50k / 100k قطعة شهريًا."
              : "Arithmetic illustration of monthly & annualized gross turnover using user-entered unit price assumptions across 10k / 25k / 50k / 100k monthly pieces."}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <label className="block space-y-1.5 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200 block">
            {ar
              ? `سعر القطعة الافتراضي (${modelType} — دولار أمريكي / مدخل المستخدم):`
              : `Assumed ${modelType} Unit Price (USD / User Assumption):`}
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

        <div className="space-y-1.5 text-xs">
          <span className="font-bold text-slate-700 dark:text-slate-200 block">
            {ar ? "نموذج التصنيع للاختبار:" : "Commercial Scope Assumption:"}
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setModelType("FOB")}
              className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                modelType === "FOB"
                  ? "border-brand-green bg-brand-green text-white shadow-sm"
                  : "border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-brand-green hover:text-brand-green"
              }`}
            >
              FOB ({ar ? "توريد كامل" : "Full-Package"})
            </button>
            <button
              type="button"
              onClick={() => setModelType("CM")}
              className={`rounded-xl border px-3 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                modelType === "CM"
                  ? "border-brand-orange bg-brand-orange text-white shadow-sm"
                  : "border-slate-200 dark:border-white/15 bg-white dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-brand-orange hover:text-brand-orange"
              }`}
            >
              CM ({ar ? "تشغيل مصنعية" : "Cut & Make"})
            </button>
          </div>
        </div>
      </div>

      {/* Scenarios Cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {VOLUME_SCENARIOS.map((sc, idx) => {
          const monthlyVal = sc.monthly * unitPrice;
          const annualUnits = sc.monthly * 12;
          const annualVal = monthlyVal * 12;
          const isGreen = idx % 2 === 0;

          return (
            <div
              key={sc.key}
              className={`group rounded-2xl border p-4 space-y-2 transition-all duration-300 cursor-pointer shadow-xs ${
                isGreen
                  ? "border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 hover:border-brand-green hover:bg-brand-green/10 hover:shadow-md dark:hover:bg-brand-green/15"
                  : "border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 hover:border-brand-orange hover:bg-brand-orange/10 hover:shadow-md dark:hover:bg-brand-orange/15"
              }`}
            >
              <div className="flex items-center justify-between text-[11px]">
                <span
                  className={`font-bold transition-colors ${
                    isGreen ? "group-hover:text-brand-green" : "group-hover:text-brand-orange"
                  } text-slate-500`}
                >
                  {ar ? sc.labelAr : sc.labelEn}
                </span>
                <span
                  className={`rounded px-1.5 py-0.5 font-mono text-[10px] font-bold transition-colors ${
                    isGreen
                      ? "bg-slate-200/70 text-slate-800 dark:bg-white/10 dark:text-slate-100 group-hover:bg-brand-green group-hover:text-white"
                      : "bg-slate-200/70 text-slate-800 dark:bg-white/10 dark:text-slate-100 group-hover:bg-brand-orange group-hover:text-white"
                  }`}
                >
                  {modelType}
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
                  <span className="text-slate-500">{ar ? "قيمة شهرية (افتراضية):" : "Monthly Gross:"}</span>
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
                  <span className="text-slate-500">{ar ? "إيراد سنوي (افتراضي):" : "Annualized Gross:"}</span>
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
  );
}

