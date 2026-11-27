import React, { useEffect, useState } from "react";
import {
  Users,
  ShieldCheck,
  UserCheck,
  UserX,
  Plus,
  RefreshCw,
  Search,
  Key,
  Lock,
  Mail,
  ShieldAlert,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useAdminAuth } from "@/lib/admin-auth-context";
import { supabase } from "@/integrations/supabase/client";

interface UserProfileRow {
  id: string;
  email: string;
  full_name_ar: string;
  full_name_en: string;
  sector_scope: string;
  is_active: boolean;
  mfa_enabled: boolean;
  created_at: string;
  roles?: string[];
}

export function UsersSection() {
  const { isSuperAdmin } = useAdminAuth();
  const [usersList, setUsersList] = useState<UserProfileRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [provisionModalOpen, setProvisionModalOpen] = useState(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      // 1. Fetch profiles
      const { data: profiles, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.warn("Could not fetch profiles:", error.message);
      }

      // 2. Fetch roles mapping
      const { data: userRoles } = await supabase
        .from("user_roles")
        .select("user_id, role_id");

      const rolesByUser: Record<string, string[]> = {};
      if (userRoles) {
        for (const ur of userRoles) {
          if (!rolesByUser[ur.user_id]) rolesByUser[ur.user_id] = [];
          rolesByUser[ur.user_id].push(ur.role_id);
        }
      }

      if (profiles) {
        const enriched: UserProfileRow[] = profiles.map((p) => ({
          ...p,
          roles: rolesByUser[p.id] || [],
        }));
        setUsersList(enriched);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const toggleUserStatus = async (user: UserProfileRow) => {
    try {
      const newStatus = !user.is_active;
      const { error } = await supabase
        .from("profiles")
        .update({ is_active: newStatus })
        .eq("id", user.id);

      if (error) {
        alert("فشل تحديث حالة المستخدم: " + error.message);
      } else {
        setUsersList((prev) =>
          prev.map((u) => (u.id === user.id ? { ...u, is_active: newStatus } : u))
        );
      }
    } catch (err) {
      console.error(err);
    }
  };

  const filteredUsers = usersList.filter(
    (u) =>
      u.email.toLowerCase().includes(search.toLowerCase()) ||
      u.full_name_ar.includes(search) ||
      u.full_name_en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Users className="size-5 text-amber-500" />
            <span>إدارة المستخدمين والصلاحيات المؤسسية (RBAC)</span>
          </h2>
          <p className="text-xs text-slate-400">
            التحكم في الكادر الإداري، توزيع الأدوار، وتفعيل وتعطيل الحسابات (خاص بالمدير العام)
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={fetchUsers}
            disabled={isLoading}
            className="border-slate-800 bg-slate-900 text-slate-300 text-xs gap-1.5"
          >
            <RefreshCw className={`size-3.5 ${isLoading ? "animate-spin" : ""}`} />
            <span>تحديث</span>
          </Button>
          <Button
            size="sm"
            onClick={() => setProvisionModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs gap-1.5"
          >
            <Plus className="size-3.5" />
            <span>إضافة مستخدم إداري جديد</span>
          </Button>
        </div>
      </div>

      {/* Users Table */}
      <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
        <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <CardTitle className="text-base font-bold text-white">الكادر الإداري المعتمد</CardTitle>
            <CardDescription className="text-xs text-slate-400">
              المستخدمون المقيدون في جدول profiles وuser_roles الخاضعون لسياسات RLS
            </CardDescription>
          </div>
          <div className="w-full sm:w-64">
            <div className="relative">
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-3.5 text-slate-500" />
              <Input
                placeholder="بحث بالاسم أو البريد..."
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
                  <th className="p-3">الاسم والبريد الإلكتروني</th>
                  <th className="p-3">الأدوار الممنوحة</th>
                  <th className="p-3">نطاق القطاع</th>
                  <th className="p-3">تاريخ الإنشاء</th>
                  <th className="p-3">الحالة</th>
                  <th className="p-3 text-center">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500">
                      لا يوجد مستخدمون مطابقون لبحثك
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-800/40 transition-colors">
                      <td className="p-3">
                        <div className="font-semibold text-white">{u.full_name_ar || u.full_name_en}</div>
                        <div className="text-[11px] text-slate-400 font-mono" dir="ltr">
                          {u.email}
                        </div>
                      </td>
                      <td className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {u.roles && u.roles.length > 0 ? (
                            u.roles.map((r, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className={`text-[10px] ${
                                  r === "super_admin"
                                    ? "bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold"
                                    : "bg-blue-500/10 border-blue-500/30 text-blue-300"
                                }`}
                              >
                                {r}
                              </Badge>
                            ))
                          ) : (
                            <span className="text-slate-500 text-[11px]">بدون أدوار</span>
                          )}
                        </div>
                      </td>
                      <td className="p-3">
                        <span className="font-mono text-slate-300">{u.sector_scope}</span>
                      </td>
                      <td className="p-3 text-slate-400 font-mono text-[11px]" dir="ltr">
                        {new Date(u.created_at).toLocaleDateString("ar-EG")}
                      </td>
                      <td className="p-3">
                        {u.is_active ? (
                          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                            <UserCheck className="size-3" />
                            <span>نشط</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] text-rose-400 font-medium">
                            <UserX className="size-3" />
                            <span>معطل</span>
                          </span>
                        )}
                      </td>
                      <td className="p-3 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleUserStatus(u)}
                          className={`h-7 px-2 text-[11px] ${
                            u.is_active
                              ? "text-rose-400 hover:bg-rose-950/40 hover:text-rose-300"
                              : "text-emerald-400 hover:bg-emerald-950/40 hover:text-emerald-300"
                          }`}
                        >
                          {u.is_active ? "تعطيل الحساب" : "تفعيل الحساب"}
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Guide / Safe Provisioning Info Modal */}
      <Dialog open={provisionModalOpen} onOpenChange={setProvisionModalOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 max-w-lg" dir="rtl">
          <DialogHeader className="text-right">
            <DialogTitle className="text-base font-bold text-white flex items-center gap-2">
              <Key className="size-4 text-amber-500" />
              <span>إضافة وتعيين مستخدم إداري جديد بطريقة آمنة</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              للحفاظ على أعلى معايير الأمان المؤسسي، يتم إنشاء المستخدمين عبر خوادم Supabase Auth المشفرة
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-2 text-xs text-slate-300 leading-relaxed">
            <p>
              تتيح مجموعة سامي بن عياد طريقتين آمنتين لإنشاء حسابات الكادر الإداري دون كتابة كلمات المرور داخل الكود:
            </p>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
              <div className="font-bold text-amber-400">الطريقة الأولى: السكربت التفاعلي المشفر (CLI)</div>
              <p className="text-[11px] text-slate-400">
                قم بتشغيل الأمر التالي في التيرمينال المحلي، وسيطلب منك إدخال البريد وكلمة المرور بشكل مشفر:
              </p>
              <pre className="rounded bg-slate-900 p-2 font-mono text-[11px] text-emerald-400" dir="ltr">
                node scripts/provision_super_admin.mjs
              </pre>
            </div>

            <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 space-y-2">
              <div className="font-bold text-amber-400">الطريقة الثانية: دعوة البريد الإلكتروني (Invite Email)</div>
              <p className="text-[11px] text-slate-400">
                يمكن إرسال دعوة تعيين كلمة المرور إلى البريد المؤسسي للموظف عبر واجهة الدخول بالنقر على "نسيت كلمة المرور؟"، فيتلقى رابطاً مشفراً لإنشاء كلمة المرور الخاصة به.
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
              onClick={() => setProvisionModalOpen(false)}
            >
              فهمت ذلك
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
