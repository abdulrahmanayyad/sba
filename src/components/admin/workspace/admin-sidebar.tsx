import React from "react";
import { Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Inbox,
  Globe2,
  FolderLock,
  Handshake,
  Newspaper,
  ShieldAlert,
  Users,
  TrendingUp,
  Settings,
  Lock,
  LogOut,
  ExternalLink,
  ChevronLeft,
} from "lucide-react";
import { useAdminAuth, type AdminSection } from "@/lib/admin-auth-context";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface AdminSidebarProps {
  activeSection: AdminSection;
  onSelectSection: (section: AdminSection) => void;
  className?: string;
  onCloseMobile?: () => void;
}

export function AdminSidebar({ activeSection, onSelectSection, className, onCloseMobile }: AdminSidebarProps) {
  const { profile, roles, isSuperAdmin, canAccessSection, logout } = useAdminAuth();

  const navItems: { id: AdminSection; title: string; subtitle: string; icon: React.ElementType }[] = [
    { id: "dashboard", title: "لوحة القيادة والمؤشرات", subtitle: "Overview & KPIs", icon: LayoutDashboard },
    { id: "crm", title: "إدارة الاستفسارات (CRM)", subtitle: "Central Inquiries", icon: Inbox },
    { id: "markets", title: "الأسواق العالمية والدراسات", subtitle: "136 Studies & Approvals", icon: Globe2 },
    { id: "docs", title: "مركز الوثائق والتخزين", subtitle: "141 ZIPs & Buckets", icon: FolderLock },
    { id: "opportunities", title: "الفرص والشراكات الدولية", subtitle: "Bids & Trade Deals", icon: Handshake },
    { id: "content", title: "إدارة المحتوى والموقع", subtitle: "News & Portal CMS", icon: Newspaper },
    { id: "compliance", title: "الامتثال وسجلات التدقيق", subtitle: "Audit Trail & RLS", icon: ShieldAlert },
    { id: "users", title: "المستخدمين والصلاحيات", subtitle: "RBAC & Profiles", icon: Users },
    { id: "analytics", title: "التحليلات ومؤشرات الأداء", subtitle: "Conversion & Trends", icon: TrendingUp },
    { id: "settings", title: "إعدادات النظام والربط", subtitle: "System & Infrastructure", icon: Settings },
  ];

  return (
    <aside
      className={cn(
        "w-72 bg-slate-900 border-l border-slate-800 flex flex-col justify-between shrink-0 select-none z-30",
        className
      )}
      dir="rtl"
    >
      {/* Top Brand Header */}
      <div>
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="size-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-head font-black text-amber-500 text-base group-hover:scale-105 transition-transform">
              SBA
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">مجموعة سامي بن عياد</span>
              <span className="text-[10px] text-slate-400">لوحة الإدارة المركزية</span>
            </div>
          </Link>

          <Link
            to="/"
            title="فتح الموقع الرئيسي"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ExternalLink className="size-3.5" />
          </Link>
        </div>

        {/* Navigation Items List */}
        <div className="p-3 space-y-1 overflow-y-auto max-h-[calc(100vh-170px)]">
          {navItems.map((item) => {
            const hasAccess = canAccessSection(item.id);
            const isActive = activeSection === item.id;
            const Icon = item.icon;

            return (
              <button
                key={item.id}
                disabled={!hasAccess}
                onClick={() => {
                  if (hasAccess) {
                    onSelectSection(item.id);
                    onCloseMobile?.();
                  }
                }}
                className={cn(
                  "w-full flex items-center justify-between p-2.5 rounded-xl text-right transition-all group",
                  isActive
                    ? "bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/10"
                    : hasAccess
                    ? "text-slate-300 hover:bg-slate-800/80 hover:text-white"
                    : "text-slate-600 opacity-50 cursor-not-allowed"
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div
                    className={cn(
                      "size-8 rounded-lg flex items-center justify-center shrink-0",
                      isActive
                        ? "bg-slate-950/20 text-slate-950"
                        : "bg-slate-800/60 text-slate-400 group-hover:text-amber-400"
                    )}
                  >
                    <Icon className="size-4" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-xs leading-snug truncate">{item.title}</span>
                    <span
                      className={cn(
                        "text-[10px] truncate",
                        isActive ? "text-slate-900/80" : "text-slate-500"
                      )}
                    >
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {!hasAccess ? (
                  <Lock className="size-3 text-slate-600 shrink-0" />
                ) : (
                  isActive && <ChevronLeft className="size-3.5 text-slate-950 shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* User Footer Profile & Logout */}
      <div className="p-3 border-t border-slate-800/80 bg-slate-950/60">
        <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-slate-900 border border-slate-800">
          <div className="flex items-center gap-2 min-w-0">
            <div className="size-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0">
              {(profile?.full_name_ar || profile?.full_name_en || "S")[0]}
            </div>
            <div className="flex flex-col truncate">
              <span className="text-xs font-semibold text-white truncate">
                {profile?.full_name_ar || profile?.full_name_en || "مدير النظام"}
              </span>
              <span className="text-[10px] text-amber-400 truncate">
                {roles[0]?.name_ar || (isSuperAdmin ? "المدير العام" : "إداري")}
              </span>
            </div>
          </div>

          <button
            onClick={async () => {
              await logout();
              window.location.replace("/admin/login");
            }}
            title="تسجيل الخروج"
            className="size-7 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800 flex items-center justify-center transition-colors shrink-0"
          >
            <LogOut className="size-3.5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
