import React from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu,
  Bell,
  ShieldCheck,
  Globe,
  ExternalLink,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";
import { useAdminAuth, type AdminSection } from "@/lib/admin-auth-context";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface AdminHeaderProps {
  activeSection: AdminSection;
  onOpenMobileMenu: () => void;
}

const sectionTitles: Record<AdminSection, { title: string; desc: string }> = {
  dashboard: { title: "لوحة القيادة والمؤشرات العامة", desc: "نظرة شمولية على العمليات والاستفسارات والدراسات" },
  crm: { title: "إدارة الاستفسارات وطلبات التواصل (CRM)", desc: "صندوق الوارد المركزي والملاحظات وسجل الحالات" },
  markets: { title: "الأسواق العالمية ودراسات القطاعات", desc: "إدارة 136 دراسة ونظام الاعتماد المزدوج (2-Person Rule)" },
  docs: { title: "مركز الوثائق والتخزين السحابي", desc: "إدارة 4 حاويات تخزين و141 حزمة ZIP معتمدة" },
  opportunities: { title: "الفرص الاستثمارية والشراكات", desc: "عروض التوريد والمشاريع المشتركة وتراخيص NDA" },
  content: { title: "إدارة المحتوى المؤسسي (CMS)", desc: "الأخبار، الإعلانات الصحفية، وإعدادات بوابات التواصل" },
  compliance: { title: "الامتثال وسجلات التدقيق الأمني", desc: "سجل العمليات غير القابل للتعديل وحماية البيانات" },
  users: { title: "المستخدمين وإدارة الصلاحيات (RBAC)", desc: "إدارة حسابات الكادر الإداري والأدوار الممنوحة" },
  analytics: { title: "التحليلات ومؤشرات الأداء", desc: "مؤشرات التفاعل، وتوزيع الاستفسارات حسب القطاع" },
  settings: { title: "إعدادات النظام والبنية التحتية", desc: "حالة الربط مع PostgreSQL وسحابة Supabase وخادم البريد" },
};

export function AdminHeader({ activeSection, onOpenMobileMenu }: AdminHeaderProps) {
  const { profile, roles, isSuperAdmin, logout } = useAdminAuth();
  const currentInfo = sectionTitles[activeSection] || { title: "لوحة الإدارة", desc: "" };

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between sticky top-0 z-20" dir="rtl">
      {/* Left (RTL Right): Mobile Menu Toggle + Section Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <Menu className="size-5" />
        </button>

        <div className="flex flex-col">
          <h1 className="text-base font-bold text-white leading-tight">{currentInfo.title}</h1>
          <p className="text-[11px] text-slate-400 hidden sm:block">{currentInfo.desc}</p>
        </div>
      </div>

      {/* Right (RTL Left): Status Badges + Quick Actions + User Profile */}
      <div className="flex items-center gap-3">
        {/* Environment Connection Badge */}
        <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Production Stack Connected</span>
        </div>

        {/* Public Site Link */}
        <Link
          to="/"
          target="_blank"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-950/60 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
        >
          <span>الموقع المباشر</span>
          <ExternalLink className="size-3" />
        </Link>

        {/* User Pill */}
        <div className="flex items-center gap-2 pl-1 border-r border-slate-800 pr-3">
          <div className="size-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
            {(profile?.full_name_ar || profile?.full_name_en || "A")[0]}
          </div>
          <div className="hidden xl:flex flex-col text-right">
            <span className="text-xs font-semibold text-white leading-tight">
              {profile?.full_name_ar || profile?.full_name_en || "مدير النظام"}
            </span>
            <span className="text-[10px] text-amber-400 font-mono">
              {roles[0]?.name_ar || (isSuperAdmin ? "المدير العام" : "إداري")}
            </span>
          </div>

          <Button
            variant="ghost"
            size="sm"
            onClick={async () => {
              await logout();
              window.location.replace("/admin/login");
            }}
            className="h-8 px-2 text-slate-400 hover:text-rose-400 hover:bg-slate-800 text-xs gap-1"
          >
            <LogOut className="size-3.5" />
            <span className="hidden sm:inline">خروج</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
