import React from "react";
import { TrendingUp, BarChart3, PieChart, ArrowUpRight, Users, Eye, Download, Globe2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function AnalyticsSection() {
  const sectorData = [
    { sector: "قطاع الملابس والمنسوجات", inquiries: 42, pct: "38%", color: "bg-amber-500" },
    { sector: "قطاع البيئة المستدامة والطاقة", inquiries: 31, pct: "28%", color: "bg-emerald-500" },
    { sector: "قطاع المقاولات والعقارات", inquiries: 24, pct: "22%", color: "bg-blue-500" },
    { sector: "المنتجات الغذائية والتجارة العامة", inquiries: 13, pct: "12%", color: "bg-purple-500" },
  ];

  const topDownloads = [
    { name: "SBA_East_Cairo_Intelligence_v2_Full_Package.zip", downloads: 148, sector: "إنشاءات" },
    { name: "saudi_arabia_apparel_study.zip", downloads: 112, sector: "ملابس" },
    { name: "egypt_apparel_master_study.zip", downloads: 97, sector: "ملابس" },
    { name: "global_solar_energy_transition_2026.zip", downloads: 84, sector: "بيئة" },
    { name: "waste_to_energy_mena_master_study.zip", downloads: 65, sector: "بيئة" },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <TrendingUp className="size-5 text-amber-500" />
            <span>التحليلات ومؤشرات الأداء المؤسسي (Analytics)</span>
          </h2>
          <p className="text-xs text-slate-400">
            مؤشرات الإقبال التجاري والاستثماري، وتوزيع الاستفسارات وتنزيلات الدراسات السوقية
          </p>
        </div>
      </div>

      {/* Top Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-slate-400">معدل تحويل الاستفسارات (Conversion Rate)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-emerald-400">84.2%</div>
            <p className="text-[11px] text-slate-400 mt-1">نسبة الرد والمعالجة خلال 24 ساعة</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-slate-400">إجمالي تنزيل حزم الدراسات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-amber-400">506 تنزيل</div>
            <p className="text-[11px] text-slate-400 mt-1">عبر 141 حزمة دراسة معتمدة</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="pb-2">
            <CardTitle className="text-xs font-medium text-slate-400">الاهتمام الدولي والإقليمي</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-blue-400">32 دولة</div>
            <p className="text-[11px] text-slate-400 mt-1">اهتمام استثماري وتجاري نشط</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts / Distribution Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sector Interest Breakdown */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <PieChart className="size-4 text-amber-500" />
              <span>توزيع الاستفسارات حسب القطاع التشغيلي</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              حجم الطلبات والاهتمام التجاري عبر القطاعات الأربعة
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {sectorData.map((sec, i) => (
              <div key={i} className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-semibold text-slate-200">{sec.sector}</span>
                  <span className="font-mono text-slate-400">
                    {sec.inquiries} استفسار ({sec.pct})
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-950 overflow-hidden">
                  <div className={`h-full ${sec.color} rounded-full`} style={{ width: sec.pct }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Downloads Table */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <Download className="size-4 text-emerald-400" />
              <span>أكثر حزم الدراسات طلباً وتنزيلاً</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              الحزم الأكثر تنزيلاً من قبل المستثمرين والشركاء
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-right text-xs">
                <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                  <tr>
                    <th className="p-2.5">اسم حزمة الدراسة</th>
                    <th className="p-2.5">القطاع</th>
                    <th className="p-2.5 text-center">التنزيلات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono">
                  {topDownloads.map((td, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/30">
                      <td className="p-2.5 text-slate-200 font-sans text-xs">{td.name}</td>
                      <td className="p-2.5">
                        <Badge variant="outline" className="border-slate-700 text-slate-300 text-[10px]">
                          {td.sector}
                        </Badge>
                      </td>
                      <td className="p-2.5 text-center font-bold text-amber-400">{td.downloads}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
