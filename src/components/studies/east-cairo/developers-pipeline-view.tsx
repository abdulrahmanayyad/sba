import React, { useState } from "react";
import {
  Building2,
  Calendar,
  CreditCard,
  ExternalLink,
  Layers,
  MapPin,
  Search,
  Tag,
} from "lucide-react";
import {
  DEVELOPER_PROJECTS_PIPELINE,
  DATA_QUALITY_TIERS,
  type DeveloperProjectPipelineRecord,
} from "@/lib/studies/east-cairo-master-study";

interface DevelopersPipelineViewProps {
  ar: boolean;
}

export function DevelopersPipelineView({ ar }: DevelopersPipelineViewProps) {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProjects = DEVELOPER_PROJECTS_PIPELINE.filter((p) => {
    if (selectedCity !== "all" && p.cityId !== selectedCity) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchAr =
        p.developerNameAr.toLowerCase().includes(q) ||
        p.projectNameAr.toLowerCase().includes(q) ||
        p.locationAr.toLowerCase().includes(q);
      const matchEn =
        p.developerNameEn.toLowerCase().includes(q) ||
        p.projectNameEn.toLowerCase().includes(q) ||
        p.locationEn.toLowerCase().includes(q);
      if (!matchAr && !matchEn) return false;
    }
    return true;
  });

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-[#0F8B7A]/15 text-[#0F8B7A]">
              <Building2 className="size-5" />
            </span>
            <h3 className="font-head text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {ar ? "سجل كبار المطورين والمشروعات قيد التنفيذ والتسليم" : "DEVELOPERS & COMPETITOR PROJECTS PIPELINE"}
            </h3>
          </div>
          <p className="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            {ar
              ? "قاعدة بيانات المشروعات الكبرى بشرق القاهرة: المطور، الموقع، مسطحات BUA، حالة التسليم، الأسعار المعلنة، وشروط السداد."
              : "Institutional pipeline tracking major master-developments: developer, site, BUA scale, delivery milestones, list prices, and payment structures."}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0F8B7A]/10 border border-[#0F8B7A]/20 px-3 py-1 text-xs font-bold text-[#0F8B7A]">
            <span>{filteredProjects.length} {ar ? "مشروعات مرصودة" : "Projects Tracked"}</span>
          </span>
        </div>
      </div>

      {/* Filter Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="w-full sm:w-72">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-100"
          >
            <option value="all">{ar ? "كافة المدن والنطاقات" : "All Cities & Zones"}</option>
            <option value="new-cairo">{ar ? "القاهرة الجديدة" : "New Cairo"}</option>
            <option value="madinaty">{ar ? "مدينتي" : "Madinaty"}</option>
            <option value="new-capital">{ar ? "العاصمة الإدارية" : "New Capital"}</option>
            <option value="mostakbal-city">{ar ? "مستقبل سيتي" : "Mostakbal City"}</option>
            <option value="new-heliopolis">{ar ? "هليوبوليس الجديدة" : "New Heliopolis"}</option>
          </select>
        </div>

        <div className="w-full sm:w-80 relative">
          <Search className="size-3.5 absolute top-2.5 start-3 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ar ? "ابحث باسم المطور أو المشروع..." : "Search developer or project name..."}
            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 ps-9 pe-3 py-2 text-xs text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((p) => {
          const tier = DATA_QUALITY_TIERS[p.dataQualityTier];

          return (
            <div
              key={p.id}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-800/40 p-5 space-y-3.5 hover:border-[#0F8B7A]/40 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] font-bold text-[#0F8B7A] block">
                      {ar ? p.developerNameAr : p.developerNameEn}
                    </span>
                    <h4 className="font-head text-base font-extrabold text-slate-900 dark:text-white">
                      {ar ? p.projectNameAr : p.projectNameEn}
                    </h4>
                  </div>
                  <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold border shrink-0 ${tier.badgeClass}`}>
                    {p.dataQualityTier}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                  <MapPin className="size-3.5 text-slate-400 shrink-0" />
                  <span>{ar ? p.locationAr : p.locationEn}</span>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2 text-xs">
                  <div className="rounded-lg bg-white dark:bg-slate-900 p-2.5 border border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block">{ar ? "نوع الأصل والمساحة:" : "Asset Class & Scale:"}</span>
                    <strong className="text-xs text-slate-800 dark:text-slate-200 font-bold block mt-0.5">
                      {ar ? p.assetClassAr : p.assetClassEn}
                    </strong>
                    {p.landAreaFeddans && (
                      <span className="text-[10px] text-[#0F8B7A] font-medium block mt-0.5">
                        {p.landAreaFeddans} {ar ? "فدان" : "Feddans"}
                      </span>
                    )}
                  </div>

                  <div className="rounded-lg bg-white dark:bg-slate-900 p-2.5 border border-slate-100 dark:border-white/5">
                    <span className="text-[10px] text-slate-400 block">{ar ? "حالة الإنجاز والتسليم:" : "Delivery Milestone:"}</span>
                    <strong className="text-xs text-amber-600 dark:text-amber-400 font-bold block mt-0.5">
                      {ar ? p.statusAr : p.statusEn}
                    </strong>
                    <span className="text-[10px] text-slate-400 block mt-0.5">
                      {ar ? `هدف التسليم: ${p.deliveryYearTarget}` : `Target: ${p.deliveryYearTarget}`}
                    </span>
                  </div>
                </div>

                {/* Pricing & Terms */}
                <div className="rounded-lg bg-white dark:bg-slate-900 p-3 border border-slate-100 dark:border-white/5 space-y-1 text-xs">
                  <div className="flex items-baseline justify-between">
                    <span className="text-slate-500 text-[11px]">{ar ? "الأسعار المنشورة:" : "Reported Pricing:"}</span>
                    <span className="font-extrabold text-[#0F8B7A]">{ar ? p.indicativePriceEgpSqmAr : p.indicativePriceEgpSqmEn}</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px] pt-1 border-t border-slate-100 dark:border-white/5 text-slate-500">
                    <span>{ar ? "شروط السداد:" : "Terms:"} </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{ar ? p.paymentPlanAr : p.paymentPlanEn}</span>
                  </div>
                </div>
              </div>

              {/* Source attribution */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                <span>{p.sourceAttribution}</span>
                <span>{ar ? `طرح عام: ${p.launchYear}` : `Launched: ${p.launchYear}`}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
