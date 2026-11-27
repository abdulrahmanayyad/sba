import React from "react";
import { TradeCmsTab } from "@/components/admin/trade-cms-tab";

export function OpportunitiesSection() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">الفرص الاستثمارية والشراكات الدولية</h2>
          <p className="text-xs text-slate-400">
            متابعة عروض التوريد والتصدير، عروض الشراكة، وفحص ملفات التعاقدات السرية (NDA Dossiers)
          </p>
        </div>
      </div>
      <TradeCmsTab />
    </div>
  );
}
