import React, { useMemo, useState } from "react";
import { Award, CheckCircle2, AlertOctagon, HelpCircle, ShieldAlert } from "lucide-react";
import { INVESTMENT_SCORECARD_DIMENSIONS } from "@/lib/studies/east-cairo-master-study";

interface ScorecardCalculatorProps {
  ar: boolean;
}

export function ScorecardCalculator({ ar }: ScorecardCalculatorProps) {
  // Score state (0 to 10 for each dimension)
  const [scores, setScores] = useState<Record<number, number>>({
    0: 8, // Demand (weight 25)
    1: 7, // Supply Gap (weight 20)
    2: 8, // Location (weight 15)
    3: 7, // Feasibility (weight 20)
    4: 8, // Utilities (weight 10)
    5: 9, // Legal Risk (weight 10)
  });

  const handleScoreChange = (index: number, val: number) => {
    setScores((prev) => ({ ...prev, [index]: Math.max(0, Math.min(10, val)) }));
  };

  const totalWeightedScore = useMemo(() => {
    let sum = 0;
    INVESTMENT_SCORECARD_DIMENSIONS.forEach((dim, idx) => {
      const scoreOutOf10 = scores[idx] ?? 5;
      sum += (scoreOutOf10 / 10) * dim.weight;
    });
    return Math.round(sum * 10) / 10;
  }, [scores]);

  const getTier = (score: number) => {
    if (score >= 80) {
      return {
        labelAr: "فرصة جاذبة ومؤهلة للتفاوض (Tier A)",
        labelEn: "Prime Qualified Investment (Tier A)",
        color: "text-emerald-600 dark:text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
        descAr: "الموقع يستوفي معايير الطلب والجاهزية الفنية والجدوى المخصومة.",
        descEn: "Site meets robust demand criteria, technical readiness and discounted NPV yields.",
      };
    }
    if (score >= 65) {
      return {
        labelAr: "فرصة مشروطة بفحص ميداني إضافي (Tier B)",
        labelEn: "Conditional Opportunity (Tier B)",
        color: "text-amber-600 dark:text-amber-400 border-amber-500/30 bg-amber-500/10",
        descAr: "يتطلب الموقع التفاوض على سعر الأرض أو التأكد من إطلاق شبكات المرافق وتراخيص النشاط.",
        descEn: "Requires land price renegotiation or verified utility energization and zoning approval.",
      };
    }
    return {
      labelAr: "مخاطر استثمارية مرتفعة – غير موصى به حاليًا (Tier C)",
      labelEn: "Elevated Risk – Not Currently Recommended (Tier C)",
      color: "text-rose-600 dark:text-rose-400 border-rose-500/30 bg-rose-500/10",
      descAr: "فجوة كبيرة في الطلب الفعلي أو ضعف الجدوى المالية بعد خصم التدفقات النقدية.",
      descEn: "Significant gap in actual demand or deficient returns post cash flow discounting.",
    };
  };

  const tier = getTier(totalWeightedScore);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-900/90 p-6 md:p-8 shadow-xl backdrop-blur-md">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#F28C00]/15 text-[#F28C00]">
              <Award className="size-5" />
            </span>
            <h3 className="font-head text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {ar ? "مصفوفة النقاط الـ 100 لتقييم جاذبية قطعة الأرض" : "100-Point Land Investment Attractiveness Matrix"}
            </h3>
          </div>
          <p className="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            {ar
              ? "إطار القياس العلمي المعتمد في تقرير SBA لتوزيع أوزان القرار الاستثماري دون منح درجات عشوائية لمدن بالكامل."
              : "Scientifically weighted underwriting scorecard from the SBA report; avoids arbitrary city-wide scoring by evaluating individual parcels."}
          </p>
        </div>

        {/* Total Score Badge */}
        <div className="flex items-center gap-3">
          <div className="text-end">
            <span className="text-[11px] font-semibold text-slate-500 block">
              {ar ? "الدرجة المرجحة الكلية:" : "Total Weighted Score:"}
            </span>
            <span className="text-2xl md:text-3xl font-black text-[#0F8B7A]">
              {totalWeightedScore} <span className="text-sm font-bold text-slate-400">/ 100</span>
            </span>
          </div>
        </div>
      </div>

      {/* Warning Box */}
      <div className="mt-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 p-3.5 text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2.5">
        <ShieldAlert className="size-4 text-amber-600 shrink-0 mt-0.5" />
        <p>
          {ar
            ? "تنبيه منهجي إلزامي: هذا النموذج مصمم ليُطبق على قطعة أرض محددة ومسح ميداني محدد. لا يجوز منح درجة تقييم نهائية لمدينة كاملة (كالعبور أو القاهرة الجديدة أو بدر) لاختلاف جودة المواقع والمرافق والقوة الشرائية جذريًا بين الأحياء."
            : "Mandatory methodological guideline: This model evaluates specific parcels. Giving a single blanket score to an entire city (e.g. New Cairo, Obour, or Badr) is analytically flawed due to stark intra-city micro-market variations."}
        </p>
      </div>

      {/* Dimensions Sliders Grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {INVESTMENT_SCORECARD_DIMENSIONS.map((dim, idx) => {
          const currentScore = scores[idx] ?? 5;
          const weightedPoints = ((currentScore / 10) * dim.weight).toFixed(1);

          return (
            <div
              key={idx}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 p-4 space-y-2.5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-[#0F8B7A] block">
                    {ar ? `البعد ${idx + 1} (الوزن: ${dim.weight}%)` : `Dimension ${idx + 1} (Weight: ${dim.weight}%)`}
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {ar ? dim.dimensionAr : dim.dimensionEn}
                  </h4>
                </div>
                <div className="text-end">
                  <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                    {currentScore} / 10
                  </span>
                  <span className="text-[11px] text-slate-500 block">
                    ({weightedPoints} {ar ? "نقطة" : "pts"})
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {ar ? dim.descriptionAr : dim.descriptionEn}
              </p>

              {/* Slider */}
              <div className="flex items-center gap-3 pt-1">
                <input
                  type="range"
                  min="0"
                  max="10"
                  step="0.5"
                  value={currentScore}
                  onChange={(e) => handleScoreChange(idx, Number(e.target.value))}
                  className="w-full accent-[#0F8B7A] cursor-pointer"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Outcome Tier Banner */}
      <div className={`mt-6 rounded-xl border p-4 md:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${tier.color}`}>
        <div>
          <span className="text-xs font-bold uppercase tracking-wider block opacity-80">
            {ar ? "نتيجة تقييم الأرض الاستثمارية:" : "Investment Evaluation Verdict:"}
          </span>
          <h4 className="text-base md:text-lg font-extrabold mt-0.5">
            {ar ? tier.labelAr : tier.labelEn}
          </h4>
          <p className="text-xs mt-1 opacity-90 max-w-xl">
            {ar ? tier.descAr : tier.descEn}
          </p>
        </div>

        <div className="shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white dark:bg-slate-900 px-4 py-2 text-xs font-bold shadow-sm">
            <CheckCircle2 className="size-4 text-[#0F8B7A]" />
            <span>{totalWeightedScore} {ar ? "نقطة من 100" : "points / 100"}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
