import React from "react";
import { GlobalMarketsCmsTab } from "@/components/admin/global-markets-cms-tab";

export function GlobalMarketsSection() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">الأسواق العالمية ودراسات القطاعات (136 دراسة)</h2>
          <p className="text-xs text-slate-400">
            إدارة مسودات الدراسات، مراجعة المؤشرات الاقتصادية، وتطبيق قاعدة الشخصين الصارمة (Two-Person Approval Rule)
          </p>
        </div>
      </div>
      <GlobalMarketsCmsTab />
    </div>
  );
}
