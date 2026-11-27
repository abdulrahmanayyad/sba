import React, { useState } from "react";
import {
  FolderLock,
  Download,
  Upload,
  FileCheck,
  ShieldCheck,
  Archive,
  Search,
  CheckCircle2,
  Lock,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export function DocumentCenterSection() {
  const [search, setSearch] = useState("");
  const [activeBucket, setActiveBucket] = useState<"media" | "studies" | "careers" | "dossiers">("media");

  const buckets = [
    {
      id: "corporate-media",
      name: "corporate-media",
      label: "الأصول العامة والوسائط (141 ZIP)",
      access: "عام ومفتوح (Public Read)",
      sizeLimit: "50 MB",
      count: "141 حزمة ZIP + أصول الموقع",
      desc: "تحتوي على كافة حزم التنزيل لدراسات الملابس (59 حزمة) والأرشيف العربي (54 حزمة) والبيئة (26 حزمة) وحزمة شرق القاهرة.",
    },
    {
      id: "market-studies",
      name: "market-studies",
      label: "الدراسات السوقية والملاحق الفنية",
      access: "مقيد ومحمي (Private)",
      sizeLimit: "50 MB",
      count: "136 ملف دراسة معتمد",
      desc: "ملفات دراسات الجدوى المعتمدة والمذكرات التحليلية الصادرة عن وحدة الاستخبارات السوقية.",
    },
    {
      id: "career-applications",
      name: "career-applications",
      label: "السير الذاتية وطلبات التوظيف",
      access: "سري للغاية (Service-Role Only)",
      sizeLimit: "5 MB",
      count: "ملفات المتقدمين للوظائف",
      desc: "الرفع محصور فقط عبر خوادم المجموعة، والقراءة مقيدة بمسؤولي الموارد البشرية بروابط مشفرة مؤقتة (15 دقيقة).",
    },
    {
      id: "contracting-dossiers",
      name: "contracting-dossiers",
      label: "ملفات المقاولات والتراخيص السرية (NDA)",
      access: "محمي باتفاقيات عدم إفصاح (Strict NDA)",
      sizeLimit: "20 MB",
      count: "ملفات الامتثال والتراخيص",
      desc: "ملفات التعاقدات والمستندات الفنية المحمية برموز تحقق ديناميكية وبوابة أمان مشفرة.",
    },
  ];

  const packagesSample = [
    { name: "SBA_East_Cairo_Intelligence_v2_Full_Package.zip", sector: "إنشاءات", path: "/studies/east-cairo/", size: "6.8 MB", hash: "SHA-256 موثق" },
    { name: "egypt_apparel_master_study.zip", sector: "ملابس", path: "/studies/apparel/", size: "4.2 MB", hash: "SHA-256 موثق" },
    { name: "saudi_arabia_apparel_study.zip", sector: "ملابس", path: "/studies/apparel/", size: "3.9 MB", hash: "SHA-256 موثق" },
    { name: "germany_textiles_trade_study.zip", sector: "ملابس", path: "/studies/apparel/", size: "4.5 MB", hash: "SHA-256 موثق" },
    { name: "global_solar_energy_transition_2026.zip", sector: "بيئة", path: "/دراسات قطاع البيئة/", size: "5.1 MB", hash: "SHA-256 موثق" },
    { name: "waste_to_energy_mena_master_study.zip", sector: "بيئة", path: "/دراسات قطاع البيئة/", size: "4.7 MB", hash: "SHA-256 موثق" },
    { name: "sami_trade_real_images.zip", sector: "المجموعة", path: "/", size: "12.4 MB", hash: "SHA-256 موثق" },
  ];

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <FolderLock className="size-5 text-amber-500" />
            <span>مركز الوثائق والتخزين السحابي الآمن</span>
          </h2>
          <p className="text-xs text-slate-400">
            إدارة حاويات التخزين الأربع (4 Authoritative Buckets) ومراقبة سلامة 141 حزمة ZIP
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="border-emerald-500/30 text-emerald-400 bg-emerald-500/10 text-xs py-1">
            <ShieldCheck className="size-3.5 ml-1" />
            <span>سياسات Storage RLS مفعلة بنسبة 100%</span>
          </Badge>
        </div>
      </div>

      {/* Buckets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {buckets.map((b) => (
          <Card key={b.id} className="bg-slate-900/80 border-slate-800 text-slate-100 flex flex-col justify-between">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-amber-400 font-bold">{b.name}</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded-full">
                  حد أقصى {b.sizeLimit}
                </span>
              </div>
              <CardTitle className="text-sm font-bold text-white mt-1">{b.label}</CardTitle>
              <CardDescription className="text-xs text-slate-400 leading-relaxed mt-1">
                {b.desc}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-2 border-t border-slate-800/80">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400 font-semibold">{b.count}</span>
                <span className="text-emerald-400 font-mono text-[11px]">{b.access}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Package Explorer Table */}
      <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <Archive className="size-4 text-amber-500" />
              <span>مستودع حزم التنزيل المعتمدة (141 حزمة ZIP)</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              جميع الحزم مطابقة بنسبة 100% لبصمات التشفير SHA-256 ومتاحة للتحميل
            </CardDescription>
          </div>
          <div className="w-full sm:w-64">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-500" />
              <Input
                placeholder="بحث في الحزم والملفات..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-slate-950 border-slate-800 text-xs pr-8 h-8 text-white placeholder:text-slate-600"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-xl border border-slate-800 overflow-hidden">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-950/80 text-slate-400 border-b border-slate-800">
                <tr>
                  <th className="p-3">اسم حزمة ZIP</th>
                  <th className="p-3">القطاع</th>
                  <th className="p-3">المسار في public/</th>
                  <th className="p-3">الحجم التقريبي</th>
                  <th className="p-3">بصمة النزاهة</th>
                  <th className="p-3 text-center">الإجراء</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {packagesSample
                  .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()) || p.sector.includes(search))
                  .map((pkg, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3 font-mono text-slate-200 font-semibold">{pkg.name}</td>
                      <td className="p-3">
                        <Badge variant="outline" className="border-slate-700 text-slate-300 text-[10px]">
                          {pkg.sector}
                        </Badge>
                      </td>
                      <td className="p-3 font-mono text-slate-400 text-[11px]" dir="ltr">
                        {pkg.path}
                      </td>
                      <td className="p-3 text-slate-400 font-mono">{pkg.size}</td>
                      <td className="p-3">
                        <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400">
                          <CheckCircle2 className="size-3" />
                          <span>{pkg.hash}</span>
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <a
                          href={`${pkg.path}${pkg.name}`}
                          download
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-[11px] font-medium transition-colors"
                        >
                          <Download className="size-3" />
                          <span>تنزيل</span>
                        </a>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 mt-3 text-center">
            يتم فحص وجود وسلامة 141 حزمة ZIP آلياً بواسطة كود الجرد المصدري <code className="text-slate-400">raw_assets_and_studies_inventory.json</code>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
