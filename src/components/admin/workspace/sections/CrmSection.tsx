import React from "react";
import { CentralSubmissionsTab } from "@/components/admin/central-submissions-tab";

export function CrmSection() {
  return (
    <div className="space-y-4" dir="rtl">
      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white">إدارة الاستفسارات وطلبات التواصل (CRM)</h2>
          <p className="text-xs text-slate-400">
            صندوق الوارد المركزي المربوط بجدول central_submissions وسجل التغييرات والملاحظات الداخلية
          </p>
        </div>
      </div>
      <CentralSubmissionsTab />
    </div>
  );
}
