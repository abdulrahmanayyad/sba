import React from "react";
import { Link } from "@tanstack/react-router";
import { ShieldAlert, LogOut, Loader2, ArrowLeft } from "lucide-react";
import { useAdminAuth } from "@/lib/admin-auth-context";
import { Button } from "@/components/ui/button";

interface AdminGuardProps {
  children: React.ReactNode;
}

export function AdminGuard({ children }: AdminGuardProps) {
  const { user, profile, roles, isLoading, isAuthorizedStaff, logout } = useAdminAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 text-slate-100 px-4">
        <div className="flex flex-col items-center space-y-4 text-center max-w-sm">
          <div className="relative">
            <div className="size-16 rounded-full border-2 border-amber-500/30 border-t-amber-500 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-head font-black text-amber-500 text-sm">SBA</span>
            </div>
          </div>
          <h2 className="text-lg font-bold text-slate-200">التحقق من الهوية المؤسسية</h2>
          <p className="text-xs text-slate-400">
            جاري فحص الصلاحيات الإدارية وتأكيد الجلسة المشفرة مع خوادم مجموعة سامي بن عياد...
          </p>
        </div>
      </div>
    );
  }

  // Not logged in -> Redirect to /admin/login
  if (!user) {
    if (typeof window !== "undefined") {
      window.location.replace("/admin/login");
    }
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
        <div className="flex items-center gap-2 text-slate-400 text-sm">
          <Loader2 className="size-4 animate-spin text-amber-500" />
          <span>جاري التوجيه إلى بوابة تسجيل الدخول...</span>
        </div>
      </div>
    );
  }

  // Logged in, but account is deactivated or not an authorized staff member
  if (!isAuthorizedStaff) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100 p-4">
        <div className="w-full max-w-md rounded-2xl border border-red-500/30 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl text-center space-y-6">
          <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-400 ring-1 ring-red-500/20">
            <ShieldAlert className="size-8" />
          </div>

          <div className="space-y-2">
            <h1 className="text-xl font-bold text-white">غير مصرح بالدخول للوحة الإدارة</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              الحساب الحالي ({user.email}) مسجل في النظام لكنه غير معين ضمن الكادر الإداري المصرح له، أو تم تعطيل حسابه مؤقتاً بواسطة الإدارة العامة.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400 space-y-1 text-right">
            <div><strong className="text-slate-300">معرف الحساب:</strong> <code className="text-amber-400/90">{user.id}</code></div>
            <div><strong className="text-slate-300">الاسم:</strong> {profile?.full_name_ar || profile?.full_name_en || "غير محدد"}</div>
            <div><strong className="text-slate-300">الأدوار الممنوحة:</strong> {roles.length > 0 ? roles.map(r => r.name_ar).join("، ") : "لا توجد أدوار إدارية"}</div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Button
              variant="destructive"
              className="w-full gap-2 font-medium"
              onClick={async () => {
                await logout();
                window.location.replace("/admin/login");
              }}
            >
              <LogOut className="size-4" />
              <span>تسجيل الخروج والتبديل لحساب آخر</span>
            </Button>
            <Link
              to="/"
              className="inline-flex items-center justify-center text-xs text-slate-400 hover:text-slate-200 transition-colors py-2 gap-1"
            >
              <ArrowLeft className="size-3" />
              <span>العودة إلى الموقع الرئيسي sami-trade.com</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
