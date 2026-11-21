import React, { useState } from "react";
import {
  Building2,
  MapPin,
  ExternalLink,
  ShieldCheck,
  AlertTriangle,
  Compass,
  CheckCircle2,
  Layers,
  Users,
  Route as RouteIcon,
  Briefcase,
  FileText,
  BadgeInfo,
  ChevronRight,
} from "lucide-react";
import {
  EAST_CAIRO_CITIES,
  DATA_QUALITY_TIERS,
  type EastCairoCityProfile,
} from "@/lib/studies/east-cairo-master-study";

interface CityProfilesBrowserProps {
  ar: boolean;
  initialCityId?: string;
}

export function CityProfilesBrowser({
  ar,
  initialCityId = "new-cairo",
}: CityProfilesBrowserProps) {
  const [selectedCityId, setSelectedCityId] = useState<string>(initialCityId);
  const [selectedSubmarketId, setSelectedSubmarketId] = useState<string | null>(null);

  const selectedCity =
    EAST_CAIRO_CITIES.find((c) => c.id === selectedCityId) ??
    EAST_CAIRO_CITIES[2]!;

  const getCategoryBadge = (cat: EastCairoCityProfile["category"]) => {
    switch (cat) {
      case "established":
        return {
          labelAr: "مدينة قائمة وناضجة",
          labelEn: "Established City",
          badgeClass: "bg-teal-500/10 text-teal-700 dark:text-teal-300 border-teal-500/20",
        };
      case "extension":
        return {
          labelAr: "امتداد عمراني وتوسعي",
          labelEn: "Urban Growth Extension",
          badgeClass: "bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20",
        };
      case "special_authority":
        return {
          labelAr: "نطاق امتياز / سلطة خاصة",
          labelEn: "Special Authority / Master Concession",
          badgeClass: "bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-500/20",
        };
      case "private_community":
        return {
          labelAr: "مجتمعات تنمية خاصة مستقلة",
          labelEn: "Private Master Community",
          badgeClass: "bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-500/20",
        };
      case "regional_benchmark":
        return {
          labelAr: "منطقة مقارنة إقليمية صناعية",
          labelEn: "Regional Industrial Benchmark",
          badgeClass: "bg-slate-500/10 text-slate-700 dark:text-slate-300 border-slate-500/20",
        };
    }
  };

  const handleCitySelect = (id: string) => {
    setSelectedCityId(id);
    setSelectedSubmarketId(null);
  };

  const cityTier = DATA_QUALITY_TIERS[selectedCity.dataQualityTier];

  return (
    <div className="space-y-6">
      {/* 12-City Switcher Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200 dark:border-white/10">
        {EAST_CAIRO_CITIES.map((city) => {
          const isSelected = city.id === selectedCityId;
          return (
            <button
              key={city.id}
              type="button"
              onClick={() => handleCitySelect(city.id)}
              className={`shrink-0 rounded-xl px-4 py-2 text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
                isSelected
                  ? "bg-[#0F8B7A] text-white shadow-md shadow-[#0F8B7A]/20 scale-[1.02]"
                  : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200 dark:border-white/10"
              }`}
            >
              <Building2 className={`size-3.5 ${isSelected ? "text-white" : "text-[#0F8B7A]"}`} />
              <span>{ar ? city.nameAr : city.nameEn}</span>
            </button>
          );
        })}
      </div>

      {/* Main Selected City Detailed Profile Card */}
      <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/90 shadow-xl overflow-hidden backdrop-blur-md">
        {/* City Profile Header */}
        <div className="border-b border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${getCategoryBadge(selectedCity.category).badgeClass}`}>
                  <Compass className="size-3.5" />
                  {ar ? getCategoryBadge(selectedCity.category).labelAr : getCategoryBadge(selectedCity.category).labelEn}
                </span>

                <span className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-bold border ${cityTier.badgeClass}`}>
                  {ar ? cityTier.labelAr : cityTier.labelEn}
                </span>

                <span className="text-xs text-slate-500 font-medium">
                  {ar ? selectedCity.establishmentLawAr : selectedCity.establishmentLawEn}
                </span>
              </div>

              <h3 className="font-head text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                {ar ? selectedCity.nameAr : selectedCity.nameEn}
              </h3>

              <p className="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed flex items-start gap-1.5">
                <MapPin className="size-4 text-[#0F8B7A] shrink-0 mt-0.5" />
                <span>{ar ? selectedCity.locationAndBoundariesAr : selectedCity.locationAndBoundariesEn}</span>
              </p>
            </div>

            {/* Official Source Link */}
            <div className="shrink-0">
              <a
                href={selectedCity.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[#0F8B7A]/30 bg-[#0F8B7A]/10 px-4 py-2 text-xs font-bold text-[#0F8B7A] hover:bg-[#0F8B7A] hover:text-white transition-colors"
              >
                <span>{ar ? selectedCity.officialSourceNameAr : selectedCity.officialSourceNameEn}</span>
                <ExternalLink className="size-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {/* Planning Area */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3.5">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                {ar ? "المساحة التخطيطية الإجمالية:" : "Planning Area (Gross):"}
              </span>
              <strong className="text-sm md:text-base font-extrabold text-slate-900 dark:text-white block mt-0.5">
                {ar ? selectedCity.planningAreaDisplayAr : selectedCity.planningAreaDisplayEn}
              </strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {ar ? "* مساحة تخطيطية وليست كتلة مطورة بالكامل" : "* Planning area, not fully built mass"}
              </span>
            </div>

            {/* Urban Footprint */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3.5">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                {ar ? "الكتلة العمرانية / مناطق الأولوية:" : "Built Urban Mass / Priority:"}
              </span>
              <strong className="text-sm md:text-base font-extrabold text-slate-800 dark:text-slate-200 block mt-0.5">
                {ar ? selectedCity.urbanMassDisplayAr : selectedCity.urbanMassDisplayEn}
              </strong>
            </div>

            {/* Target vs Actual Population */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-3.5">
              <span className="text-[11px] font-semibold text-slate-500 uppercase block">
                {ar ? "السكان المستهدفون تخطيطيًا:" : "Planning Population Target:"}
              </span>
              <strong className="text-xs md:text-sm font-bold text-amber-700 dark:text-amber-400 block mt-0.5">
                {ar ? selectedCity.targetPopulation : selectedCity.targetPopulationEn}
              </strong>
              <span className="text-[10px] text-rose-600 dark:text-rose-400 font-semibold block mt-0.5">
                {ar ? "تحذير: مستهدف تخطيطي – ليس تعدادًا سكانيًا حاليًا" : "Warning: Target, not current headcount"}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Sections & Submarkets */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Submarkets / District Breakdown if present */}
          {selectedCity.submarkets && selectedCity.submarkets.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-1.5">
                  <Layers className="size-4 text-[#0F8B7A]" />
                  <span>{ar ? `الأحياء والمناطق التفصيلية لـ ${selectedCity.nameAr}` : `Submarkets & Districts of ${selectedCity.nameEn}`}</span>
                </h4>
                <span className="text-xs text-slate-500">
                  {selectedCity.submarkets.length} {ar ? "أحياء مرصودة" : "Submarkets"}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {selectedCity.submarkets.map((sub) => {
                  const subTier = DATA_QUALITY_TIERS[sub.dataQualityTier];

                  return (
                    <div
                      key={sub.id}
                      className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-800/40 p-4 space-y-2 hover:border-[#0F8B7A]/40 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-2 border-b border-slate-200/60 dark:border-white/5 pb-2">
                        <div>
                          <h5 className="font-head text-sm font-bold text-slate-900 dark:text-white">
                            {ar ? sub.nameAr : sub.nameEn}
                          </h5>
                          <span className="text-[11px] text-[#0F8B7A] font-medium block">
                            {ar ? sub.typologyAr : sub.typologyEn}
                          </span>
                        </div>
                        <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold border shrink-0 ${subTier.badgeClass}`}>
                          {sub.dataQualityTier}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                        <div>
                          <span className="text-slate-400 block">{ar ? "كثافة الإشغال:" : "Density / Occupancy:"}</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{ar ? sub.densityLevelAr : sub.densityLevelEn}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">{ar ? "النشاط الغالب:" : "Dominant Use:"}</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{ar ? sub.dominantLandUseAr : sub.dominantLandUseEn}</span>
                        </div>
                      </div>

                      <div className="rounded-lg bg-white dark:bg-slate-900 p-2 border border-slate-100 dark:border-white/5 text-xs">
                        <span className="text-[10px] text-slate-400 block">{ar ? "نطاق الأسعار المنشورة:" : "Reported Pricing:"}</span>
                        <strong className="text-xs text-[#0F8B7A] font-bold block mt-0.5">
                          {ar ? sub.priceRangeEgpSqmAr : sub.priceRangeEgpSqmEn}
                        </strong>
                      </div>

                      <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                        {ar ? sub.notesAr : sub.notesEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Population Reality Alert Box */}
          <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 p-4 flex items-start gap-3">
            <Users className="size-5 text-[#0F8B7A] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-200">
                {ar ? "حالة التعداد السكاني الفعلي ونسب الإشغال:" : "Current Population Census & Occupancy Reality:"}
              </h4>
              <p className="mt-1 text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {ar ? selectedCity.actualPopulationStatusAr : selectedCity.actualPopulationStatusEn}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Roads & Transport */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4 md:p-5 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-100 dark:border-white/5">
                <RouteIcon className="size-4 text-[#0F8B7A]" />
                <span>{ar ? "المحاور وشبكات النقل الرابطة" : "Arterial Corridors & Transit Access"}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {(ar ? selectedCity.majorRoadsAr : selectedCity.majorRoadsEn).map((road, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#0F8B7A]" />
                    <span>{road}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Land-Use Structure */}
            <div className="rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-4 md:p-5 space-y-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b pb-2 border-slate-100 dark:border-white/5">
                <Layers className="size-4 text-[#F28C00]" />
                <span>{ar ? "هيكل وتوزيع استعمالات الأراضي" : "Zoning & Land-Use Structure"}</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                {(ar ? selectedCity.landUseStructureAr : selectedCity.landUseStructureEn).map((use, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#F28C00]" />
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Investment Hypothesis */}
          <div className="rounded-xl border border-[#0F8B7A]/25 bg-[#0F8B7A]/5 p-4 md:p-5">
            <h4 className="text-sm font-bold text-[#0F8B7A] flex items-center gap-2 mb-2">
              <Briefcase className="size-4" />
              <span>{ar ? "الفرضية الاستثمارية المعتمدة بالتقرير" : "Authoritative Investment Hypothesis"}</span>
            </h4>
            <p className="text-xs md:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
              {ar ? selectedCity.investmentHypothesisAr : selectedCity.investmentHypothesisEn}
            </p>
          </div>

          {/* Opportunities vs Risks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Promising Sectors */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 md:p-5 space-y-3">
              <h4 className="text-sm font-bold text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-600" />
                <span>{ar ? "فرص وقطاعات تستحق الفحص الميداني" : "Promising Sectors for Site Inspection"}</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {(ar ? selectedCity.promisingSectorsAr : selectedCity.promisingSectorsEn).map((sector, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                    <span>{sector}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Risks */}
            <div className="rounded-xl border border-rose-500/20 bg-rose-50/50 dark:bg-rose-950/20 p-4 md:p-5 space-y-3">
              <h4 className="text-sm font-bold text-rose-800 dark:text-rose-300 flex items-center gap-2">
                <AlertTriangle className="size-4 text-rose-600" />
                <span>{ar ? "المخاطر والتحديات الميدانية الواجب التحوط منها" : "Key Risks & Impeding Factors"}</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {(ar ? selectedCity.keyRisksAr : selectedCity.keyRisksEn).map((risk, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-600 font-bold shrink-0 mt-0.5">⚠</span>
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mandatory Pre-Acquisition Requirements */}
          <div className="rounded-xl border border-amber-300/40 bg-amber-50/40 dark:bg-amber-950/20 p-4 md:p-5">
            <h4 className="text-sm font-bold text-amber-900 dark:text-amber-200 flex items-center gap-2 mb-2">
              <ShieldCheck className="size-4 text-amber-600" />
              <span>{ar ? "إجراءات الفحص الإلزامي قبل شراء أي قطعة أرض في هذه المدينة" : "Mandatory Pre-Acquisition Due Diligence Protocol"}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mt-3 text-xs text-slate-700 dark:text-slate-300">
              {(ar ? selectedCity.preAcquisitionRequirementsAr : selectedCity.preAcquisitionRequirementsEn).map((req, idx) => (
                <div key={idx} className="rounded-lg bg-white/80 dark:bg-slate-900/80 p-2.5 border border-amber-200/50 dark:border-amber-800/30 flex items-start gap-2">
                  <span className="size-5 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
