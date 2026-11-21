import React, { useState } from "react";
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  Filter,
  HelpCircle,
  MapPin,
  Search,
  ShieldAlert,
} from "lucide-react";
import {
  DATA_GAPS_REGISTER,
  type DataGapRecord,
} from "@/lib/studies/east-cairo-master-study";

interface DataGapsRegisterViewProps {
  ar: boolean;
}

export function DataGapsRegisterView({ ar }: DataGapsRegisterViewProps) {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedPriority, setSelectedPriority] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredGaps = DATA_GAPS_REGISTER.filter((gap) => {
    if (selectedCity !== "all" && gap.cityId !== selectedCity) return false;
    if (selectedPriority !== "all" && gap.priority !== selectedPriority) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchAr =
        gap.cityNameAr.toLowerCase().includes(q) ||
        gap.districtAr.toLowerCase().includes(q) ||
        gap.missingMetricAr.toLowerCase().includes(q);
      const matchEn =
        gap.cityNameEn.toLowerCase().includes(q) ||
        gap.districtEn.toLowerCase().includes(q) ||
        gap.missingMetricEn.toLowerCase().includes(q);
      if (!matchAr && !matchEn) return false;
    }
    return true;
  });

  const getPriorityBadge = (priority: DataGapRecord["priority"]) => {
    switch (priority) {
      case "high":
        return {
          labelAr: "أولوية قصوى (حرج للقرار)",
          labelEn: "High Priority (Critical)",
          className: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30",
        };
      case "medium":
        return {
          labelAr: "أولوية متوسطة (تأكيد تسعير)",
          labelEn: "Medium Priority",
          className: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30",
        };
      case "low":
        return {
          labelAr: "أولوية منخفضة (معيار تكميلي)",
          labelEn: "Low Priority",
          className: "bg-slate-500/15 text-slate-700 dark:text-slate-300 border-slate-500/30",
        };
    }
  };

  const getStatusBadge = (status: DataGapRecord["status"]) => {
    switch (status) {
      case "pending_field_survey":
        return {
          labelAr: "بانتظار المسح الميداني",
          labelEn: "Pending Field Survey",
          className: "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-200",
        };
      case "in_progress":
        return {
          labelAr: "المسح الميداني قيد التنفيذ",
          labelEn: "Survey In Progress",
          className: "bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200",
        };
      case "verified":
        return {
          labelAr: "تم التحقق المكتمل",
          labelEn: "Verified",
          className: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200",
        };
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-6 md:p-8 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-xl bg-rose-500/15 text-rose-600">
              <ShieldAlert className="size-5" />
            </span>
            <h3 className="font-head text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
              {ar ? "سجل فجوات البيانات والتحقق الميداني الإلزامي" : "DATA GAPS & FIELD VERIFICATION REGISTER"}
            </h3>
          </div>
          <p className="mt-1.5 text-xs md:text-sm text-slate-600 dark:text-slate-300">
            {ar
              ? "حوكمة منهجية صارمة: رصد المؤشرات غير المتاحة علنًا لكل حي لمنع التخمين العشوائي وبيان طريقة التحقق الميداني المطلوبة قبل الاستحواذ."
              : "Strict research governance: Audits indicators unavailable publicly per district to preclude synthetic guesswork, outlining required field protocols."}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 px-3 py-1 text-xs font-bold text-rose-700 dark:text-rose-300">
            <AlertTriangle className="size-3.5" />
            <span>{filteredGaps.length} {ar ? "فجوات مسجلة" : "Gaps Logged"}</span>
          </span>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* City Filter */}
        <div>
          <label className="text-[11px] font-bold text-slate-500 block mb-1">
            {ar ? "تصفية حسب النطاق:" : "Filter by Region:"}
          </label>
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-100"
          >
            <option value="all">{ar ? "كافة المدن والنطاقات" : "All Cities & Zones"}</option>
            <option value="new-cairo">{ar ? "القاهرة الجديدة" : "New Cairo"}</option>
            <option value="obour-new">{ar ? "العبور الجديدة" : "New Obour"}</option>
            <option value="new-capital">{ar ? "العاصمة الإدارية" : "New Capital"}</option>
            <option value="badr">{ar ? "مدينة بدر" : "Badr City"}</option>
            <option value="mostakbal-city">{ar ? "مستقبل سيتي" : "Mostakbal City"}</option>
          </select>
        </div>

        {/* Priority Filter */}
        <div>
          <label className="text-[11px] font-bold text-slate-500 block mb-1">
            {ar ? "تصفية حسب الأثر الاستثماري:" : "Filter by Impact Priority:"}
          </label>
          <select
            value={selectedPriority}
            onChange={(e) => setSelectedPriority(e.target.value)}
            className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 px-3 py-2 text-xs font-bold text-slate-800 dark:text-slate-100"
          >
            <option value="all">{ar ? "كافة الأولويات" : "All Priorities"}</option>
            <option value="high">{ar ? "أولوية قصوى (حرج)" : "High Priority (Critical)"}</option>
            <option value="medium">{ar ? "أولوية متوسطة" : "Medium Priority"}</option>
            <option value="low">{ar ? "أولوية منخفضة" : "Low Priority"}</option>
          </select>
        </div>

        {/* Search Input */}
        <div>
          <label className="text-[11px] font-bold text-slate-500 block mb-1">
            {ar ? "بحث سريع في الفجوات:" : "Search Missing Indicators:"}
          </label>
          <div className="relative">
            <Search className="size-3.5 absolute top-2.5 start-3 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={ar ? "ابحث بالحي أو المؤشر..." : "Search district or metric..."}
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800 ps-9 pe-3 py-2 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Gaps Cards List */}
      <div className="space-y-3.5">
        {filteredGaps.map((gap) => {
          const prio = getPriorityBadge(gap.priority);
          const st = getStatusBadge(gap.status);

          return (
            <div
              key={gap.id}
              className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-slate-800/40 p-4 md:p-5 space-y-3 transition-all hover:border-slate-300 dark:hover:border-white/20"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/60 dark:border-white/5 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="flex size-6 items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-mono text-xs font-bold">
                    {gap.id.replace("gap-", "#")}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                    <MapPin className="size-3.5 text-[#0F8B7A]" />
                    <span>{ar ? gap.cityNameAr : gap.cityNameEn}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-[#0F8B7A]">{ar ? gap.districtAr : gap.districtEn}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${prio.className}`}>
                    {ar ? prio.labelAr : prio.labelEn}
                  </span>
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${st.className}`}>
                    {ar ? st.labelAr : st.labelEn}
                  </span>
                </div>
              </div>

              {/* Missing Metric & Reason */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="space-y-1">
                  <strong className="text-rose-600 dark:text-rose-400 block font-bold">
                    {ar ? "المؤشر الناقص غير المتاح علنًا:" : "Missing / Unavailable Metric:"}
                  </strong>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                    {ar ? gap.missingMetricAr : gap.missingMetricEn}
                  </p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-normal">
                    {ar ? gap.reasonUnavailableAr : gap.reasonUnavailableEn}
                  </p>
                </div>

                <div className="space-y-1">
                  <strong className="text-amber-600 dark:text-amber-400 block font-bold">
                    {ar ? "الأثر على القرار الاستثماري:" : "Investment Decision Impact:"}
                  </strong>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {ar ? gap.investmentImpactAr : gap.investmentImpactEn}
                  </p>
                </div>
              </div>

              {/* Protocol for Verification */}
              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <div className="flex items-start sm:items-center gap-1.5">
                  <span className="font-bold text-slate-700 dark:text-slate-300 shrink-0">
                    {ar ? "بروتوكول التحقق الميداني الإلزامي:" : "Field Verification Protocol:"}
                  </span>
                  <span>{ar ? gap.fieldVerificationMethodAr : gap.fieldVerificationMethodEn}</span>
                </div>
                <div className="shrink-0 font-medium text-slate-600 dark:text-slate-300">
                  <span className="text-slate-400">{ar ? "الجهة:" : "Source:"} </span>
                  {ar ? gap.verificationSourceAr : gap.verificationSourceEn}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
