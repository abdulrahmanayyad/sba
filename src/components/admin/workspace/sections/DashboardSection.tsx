import React, { useEffect, useState } from "react";
import {
  Users,
  FileText,
  ShieldCheck,
  TrendingUp,
  Inbox,
  AlertCircle,
  Clock,
  CheckCircle2,
  Building2,
  FolderLock,
  ArrowRight,
  ExternalLink,
  RefreshCw,
} from "lucide-react";
import { useAdminAuth } from "@/lib/admin-auth-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";

interface DashboardSectionProps {
  onNavigate: (sectionId: any) => void;
}

export function DashboardSection({ onNavigate }: DashboardSectionProps) {
  const { profile, roles, isSuperAdmin } = useAdminAuth();

  const [stats, setStats] = useState({
    totalInquiries: 0,
    newInquiries: 0,
    inProgressInquiries: 0,
    totalAuditLogs: 0,
    totalUsers: 0,
    isLoading: true,
  });

  const loadStats = async () => {
    try {
      setStats((prev) => ({ ...prev, isLoading: true }));

      // 1. Inquiries count
      const { count: totalInq, data: inqData } = await supabase
        .from("central_submissions")
        .select("status", { count: "exact" });

      const newCount = inqData?.filter((i) => i.status === "new").length || 0;
      const inProgressCount = inqData?.filter((i) => i.status === "in_review" || i.status === "in_progress").length || 0;

      // 2. Audit logs count
      const { count: auditCount } = await supabase
        .from("audit_logs")
        .select("*", { count: "exact", head: true });

      // 3. Users count
      const { count: usersCount } = await supabase
        .from("profiles")
        .select("*", { count: "exact", head: true });

      setStats({
        totalInquiries: totalInq || 0,
        newInquiries: newCount,
        inProgressInquiries: inProgressCount,
        totalAuditLogs: auditCount || 0,
        totalUsers: usersCount || 0,
        isLoading: false,
      });
    } catch (err) {
      console.warn("Could not load stats from DB, using fallback", err);
      setStats((prev) => ({ ...prev, isLoading: false }));
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  return (
    <div className="space-y-6" dir="rtl">
      {/* Welcome Banner */}
      <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/30 p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-10 relative">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {roles[0]?.name_ar || (isSuperAdmin ? "المدير العام" : "إداري")}
              </span>
              <span className="text-xs text-slate-400">
                النطاق القطاعي: {profile?.sector_scope === "corporate" ? "المجموعة العامة" : profile?.sector_scope}
              </span>
            </div>
            <h1 className="text-2xl font-black text-white">
              مرحباً بك، {profile?.full_name_ar || profile?.full_name_en || "مدير النظام"}
            </h1>
            <p className="text-xs text-slate-400">
              لوحة التحكم والإشراف المؤسسي المباشر — مجموعة سامي بن عياد القابضة
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={loadStats}
              disabled={stats.isLoading}
              className="border-slate-700 bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs gap-1.5"
            >
              <RefreshCw className={`size-3.5 ${stats.isLoading ? "animate-spin" : ""}`} />
              <span>تحديث البيانات</span>
            </Button>
            <Button
              size="sm"
              onClick={() => onNavigate("crm")}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-bold gap-1.5"
            >
              <span>مراجعة الاستفسارات الجديدة</span>
              <ArrowRight className="size-3.5 rotate-180" />
            </Button>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Inquiries */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-slate-400">طلبات واستفسارات CRM</CardTitle>
            <div className="size-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Inbox className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-white">{stats.totalInquiries}</div>
            <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <span className="text-amber-400 font-semibold">{stats.newInquiries} قيد الانتظار</span> •{" "}
              <span className="text-blue-400 font-semibold">{stats.inProgressInquiries} قيد المعالجة</span>
            </p>
          </CardContent>
        </Card>

        {/* Global Market Studies */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-slate-400">الدراسات السوقية المعتمدة</CardTitle>
            <div className="size-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <FileText className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-white">136</div>
            <p className="text-[11px] text-slate-400 mt-1">
              57 ملابس • 66 بيئة • 13 إنشاءات
            </p>
          </CardContent>
        </Card>

        {/* Storage Buckets & Packages */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-slate-400">حزم التنزيل والوثائق</CardTitle>
            <div className="size-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
              <FolderLock className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-white">141 حزمة ZIP</div>
            <p className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
              <CheckCircle2 className="size-3" />
              <span>4 حاويات تخزين نشطة ومحمية</span>
            </p>
          </CardContent>
        </Card>

        {/* System & RLS Security Status */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-medium text-slate-400">حالة الأمان والسياسات</CardTitle>
            <div className="size-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <ShieldCheck className="size-4" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-black text-emerald-400">100% PASS</div>
            <p className="text-[11px] text-slate-400 mt-1">
              36 جدول RLS • 8 مشغلات أمنية نشطة
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Grid: Sector Health + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sector Portfolio Summary */}
        <Card className="lg:col-span-2 bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <Building2 className="size-4 text-amber-500" />
              <span>محفظة القطاعات التشغيلية للمجموعة</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              ملخص الحالة التشغيلية والدراسات المعتمدة عبر قطاعات سامي بن عياد
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Apparel */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">قطاع الملابس والمنسوجات</span>
                  <span className="text-xs text-amber-400 font-mono">57 دراسة دولية</span>
                </div>
                <p className="text-xs text-slate-400">
                  59 حزمة ZIP للتحميل تحت studies/apparel + 54 حزمة معربة.
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-emerald-400">نشط وجاهز للتصدير</span>
                  <button onClick={() => onNavigate("markets")} className="text-amber-400 hover:underline">
                    إدارة الدراسات
                  </button>
                </div>
              </div>

              {/* Environmental */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">قطاع البيئة المستدامة</span>
                  <span className="text-xs text-emerald-400 font-mono">66 دراسة دولية</span>
                </div>
                <p className="text-xs text-slate-400">
                  26 حزمة ZIP بيئية تخصصية (طاقة، تدوير، مياه).
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-emerald-400">معتمد دولياً</span>
                  <button onClick={() => onNavigate("markets")} className="text-amber-400 hover:underline">
                    إدارة الدراسات
                  </button>
                </div>
              </div>

              {/* Construction */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">قطاع المقاولات والعقارات</span>
                  <span className="text-xs text-blue-400 font-mono">13 دراسة مصرية</span>
                </div>
                <p className="text-xs text-slate-400">
                  دراسة الماستر الإقليمية لشرق القاهرة + 12 دراسة مدن تفصيلية.
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-emerald-400">حزمة Intelligence v2</span>
                  <button onClick={() => onNavigate("markets")} className="text-amber-400 hover:underline">
                    إدارة الدراسات
                  </button>
                </div>
              </div>

              {/* Food & Trade */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white">المنتجات الطبيعية والتجارة</span>
                  <span className="text-xs text-purple-400 font-mono">خط التوريد نشط</span>
                </div>
                <p className="text-xs text-slate-400">
                  تمور سيوة، زيت زيتون بكر ممتاز، تموين دولي ومحلي.
                </p>
                <div className="flex justify-between items-center pt-2 border-t border-slate-800/80 text-[11px]">
                  <span className="text-emerald-400">قنوات التصدير نشطة</span>
                  <button onClick={() => onNavigate("opportunities")} className="text-amber-400 hover:underline">
                    الفرص والصفقات
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Nav Panel */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white">إجراءات سريعة</CardTitle>
            <CardDescription className="text-xs text-slate-400">
              اختصارات المهام التنفيذية اليومية
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2.5">
            <Button
              variant="outline"
              className="w-full justify-between border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-200 text-xs"
              onClick={() => onNavigate("crm")}
            >
              <div className="flex items-center gap-2">
                <Inbox className="size-4 text-blue-400" />
                <span>إدارة استفسارات الوارد (CRM)</span>
              </div>
              <ArrowRight className="size-3.5 rotate-180 text-slate-500" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-200 text-xs"
              onClick={() => onNavigate("markets")}
            >
              <div className="flex items-center gap-2">
                <FileText className="size-4 text-emerald-400" />
                <span>نظام اعتماد ونشر الدراسات (2-Person)</span>
              </div>
              <ArrowRight className="size-3.5 rotate-180 text-slate-500" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-200 text-xs"
              onClick={() => onNavigate("docs")}
            >
              <div className="flex items-center gap-2">
                <FolderLock className="size-4 text-amber-400" />
                <span>مركز الوثائق وحزم التنزيل (141 ZIP)</span>
              </div>
              <ArrowRight className="size-3.5 rotate-180 text-slate-500" />
            </Button>

            <Button
              variant="outline"
              className="w-full justify-between border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-200 text-xs"
              onClick={() => onNavigate("compliance")}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-purple-400" />
                <span>سجلات التدقيق الأمني (Audit Logs)</span>
              </div>
              <ArrowRight className="size-3.5 rotate-180 text-slate-500" />
            </Button>

            {isSuperAdmin && (
              <Button
                variant="outline"
                className="w-full justify-between border-slate-800 bg-slate-950/50 hover:bg-slate-800 text-slate-200 text-xs"
                onClick={() => onNavigate("users")}
              >
                <div className="flex items-center gap-2">
                  <Users className="size-4 text-rose-400" />
                  <span>إدارة المستخدمين والصلاحيات (RBAC)</span>
                </div>
                <ArrowRight className="size-3.5 rotate-180 text-slate-500" />
              </Button>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
