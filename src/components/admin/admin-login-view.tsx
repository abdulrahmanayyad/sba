import React, { useState, useEffect } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import {
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShieldCheck,
  AlertCircle,
  KeyRound,
  ArrowRight,
  CheckCircle2,
  Building2,
  Globe,
  Loader2,
} from "lucide-react";
import { useAdminAuth } from "@/lib/admin-auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export function AdminLoginView() {
  const { user, isAuthorizedStaff, login, requestPasswordReset, updatePassword, isLoading: authLoading } = useAdminAuth();
  const router = useRouter();

  // Login form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  // Password Reset Modal state
  const [resetModalOpen, setResetModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [resetSubmitting, setResetSubmitting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [resetError, setResetError] = useState<string | null>(null);

  // Recovery Mode (from URL)
  const [isRecoveryMode, setIsRecoveryMode] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoverySubmitting, setRecoverySubmitting] = useState(false);
  const [recoverySuccess, setRecoverySuccess] = useState(false);
  const [recoveryError, setRecoveryError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const isRecovery = urlParams.get("recovery") === "true" || window.location.hash.includes("type=recovery");
      setIsRecoveryMode(isRecovery);

      // If already logged in and authorized, redirect to /admin
      if (user && isAuthorizedStaff) {
        window.location.replace("/admin");
      }
    }
  }, [user, isAuthorizedStaff]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!email.trim() || !password) {
      setFormError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await login(email, password);
      if (!res.success) {
        setFormError(
          res.error === "Invalid login credentials"
            ? "بيانات الدخول غير صحيحة. يرجى التحقق من البريد وكلمة المرور."
            : res.error || "فشل تسجيل الدخول"
        );
      } else {
        // Successful login -> Redirect to /admin
        window.location.replace("/admin");
      }
    } catch (err: unknown) {
      setFormError(err instanceof Error ? err.message : "حدث خطأ غير متوقع");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetError(null);
    if (!resetEmail.trim()) {
      setResetError("يرجى إدخال البريد الإلكتروني المؤسسي المسجل");
      return;
    }

    setResetSubmitting(true);
    try {
      const res = await requestPasswordReset(resetEmail);
      if (res.success) {
        setResetSuccess(true);
      } else {
        setResetError(res.error || "تعذر إرسال رابط الاستعادة");
      }
    } catch (err: unknown) {
      setResetError(err instanceof Error ? err.message : "فشل الطلب");
    } finally {
      setResetSubmitting(false);
    }
  };

  const handleUpdatePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setRecoveryError(null);

    if (newPassword.length < 8) {
      setRecoveryError("يجب أن تتكون كلمة المرور من 8 أحرف أو أكثر");
      return;
    }

    if (newPassword !== confirmPassword) {
      setRecoveryError("كلمتا المرور غير متطابقتين");
      return;
    }

    setRecoverySubmitting(true);
    try {
      const res = await updatePassword(newPassword);
      if (res.success) {
        setRecoverySuccess(true);
        setTimeout(() => {
          window.location.replace("/admin");
        }, 2000);
      } else {
        setRecoveryError(res.error || "فشل تحديث كلمة المرور");
      }
    } catch (err: unknown) {
      setRecoveryError(err instanceof Error ? err.message : "حدث خطأ أثناء التحديث");
    } finally {
      setRecoverySubmitting(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col justify-between text-slate-100 relative overflow-hidden" dir="rtl">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-1/4 size-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 size-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      {/* Top Header */}
      <header className="w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="size-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-head font-black text-amber-500 text-lg group-hover:scale-105 transition-transform">
            SBA
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-white group-hover:text-amber-400 transition-colors">مجموعة سامي بن عياد</span>
            <span className="text-[10px] text-slate-400">بوابة الإدارة المؤسسية | Institutional Admin</span>
          </div>
        </Link>

        <Link
          to="/"
          className="text-xs text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors border border-slate-800 rounded-lg px-3 py-1.5 bg-slate-900/60"
        >
          <span>الموقع الرئيسي sami-trade.com</span>
          <ArrowRight className="size-3.5 rotate-180" />
        </Link>
      </header>

      {/* Main Login / Recovery Card */}
      <main className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-900/90 p-8 shadow-2xl backdrop-blur-xl">
          {isRecoveryMode ? (
            /* RECOVERY FORM */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  <KeyRound className="size-6" />
                </div>
                <h1 className="text-xl font-bold text-white">تعيين كلمة مرور جديدة</h1>
                <p className="text-xs text-slate-400">
                  يرجى كتابة كلمة مرور قوية وجديدة لحسابك الإداري في النظام
                </p>
              </div>

              {recoverySuccess ? (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/50 p-4 text-center space-y-2">
                  <CheckCircle2 className="size-8 text-emerald-400 mx-auto" />
                  <p className="text-sm font-semibold text-emerald-200">تم تعيين كلمة المرور بنجاح!</p>
                  <p className="text-xs text-slate-400">جاري توجيهك إلى لوحة الإدارة تلقائياً...</p>
                </div>
              ) : (
                <form onSubmit={handleUpdatePassword} className="space-y-4">
                  {recoveryError && (
                    <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/50 p-3 text-xs text-red-300">
                      <AlertCircle className="size-4 shrink-0 text-red-400" />
                      <span>{recoveryError}</span>
                    </div>
                  )}

                  <div className="space-y-1.5">
                    <Label className="text-xs text-slate-300">كلمة المرور الجديدة</Label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-amber-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-xs text-slate-300">تأكيد كلمة المرور</Label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-amber-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={recoverySubmitting}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
                  >
                    {recoverySubmitting ? (
                      <div className="flex items-center gap-2">
                        <Loader2 className="size-4 animate-spin" />
                        <span>جاري الحفظ...</span>
                      </div>
                    ) : (
                      "تأكيد وتعيين كلمة المرور"
                    )}
                  </Button>
                </form>
              )}
            </div>
          ) : (
            /* STANDARD LOGIN FORM */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
                  <Lock className="size-6" />
                </div>
                <h1 className="text-xl font-bold text-white">تسجيل دخول لوحة الإدارة</h1>
                <p className="text-xs text-slate-400">
                  خاص بالكادر الإداري المعتمد لمجموعة سامي بن عياد
                </p>
              </div>

              {formError && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-950/50 p-3 text-xs text-red-300">
                  <AlertCircle className="size-4 shrink-0 text-red-400" />
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-slate-300">البريد الإلكتروني المؤسسي</Label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="admin@sami-trade.com"
                      required
                      autoComplete="username"
                      className="bg-slate-950 border-slate-800 text-white pr-9 placeholder:text-slate-600 focus-visible:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <Label className="text-xs text-slate-300">كلمة المرور</Label>
                    <button
                      type="button"
                      onClick={() => setResetModalOpen(true)}
                      className="text-[11px] text-amber-400/90 hover:text-amber-300 transition-colors"
                    >
                      نسيت كلمة المرور؟
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-slate-500" />
                    <Input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      required
                      autoComplete="current-password"
                      className="bg-slate-950 border-slate-800 text-white pr-9 pl-9 placeholder:text-slate-600 focus-visible:ring-amber-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
                    </button>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || authLoading}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 transition-all shadow-lg shadow-amber-500/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      <span>جاري التحقق من الجلسة...</span>
                    </div>
                  ) : (
                    "تسجيل الدخول الآمن"
                  )}
                </Button>
              </form>
            </div>
          )}

          {/* Security Features Info Box */}
          <div className="mt-8 border-t border-slate-800 pt-4 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-emerald-400" />
              <span>تشفير SSL / TLS 1.3</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Building2 className="size-3.5 text-amber-400" />
              <span>حماية RBAC الصارمة</span>
            </div>
          </div>
        </div>
      </main>

      {/* Password Reset Modal */}
      <Dialog open={resetModalOpen} onOpenChange={setResetModalOpen}>
        <DialogContent className="bg-slate-900 border-slate-800 text-slate-100 max-w-sm" dir="rtl">
          <DialogHeader className="text-right">
            <DialogTitle className="text-base font-bold text-white">استعادة كلمة المرور</DialogTitle>
            <DialogDescription className="text-xs text-slate-400">
              أدخل البريد الإلكتروني المسجل في النظام، وسنرسل لك رابطاً مشفراً لتعيين كلمة مرور جديدة لحسابك.
            </DialogDescription>
          </DialogHeader>

          {resetSuccess ? (
            <div className="space-y-4 py-4 text-center">
              <CheckCircle2 className="size-10 text-emerald-400 mx-auto" />
              <div className="space-y-1">
                <p className="text-sm font-semibold text-emerald-200">تم إرسال رابط الاستعادة!</p>
                <p className="text-xs text-slate-400">
                  يرجى مراجعة صندوق الوارد في بريدك ({resetEmail}) والنقر على الرابط لتأكيد كلمة المرور الجديدة.
                </p>
              </div>
              <Button
                variant="outline"
                className="w-full border-slate-700 text-slate-200 hover:bg-slate-800"
                onClick={() => {
                  setResetModalOpen(false);
                  setResetSuccess(false);
                }}
              >
                إغلاق
              </Button>
            </div>
          ) : (
            <form onSubmit={handleResetRequest} className="space-y-4 py-2">
              {resetError && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-950/50 p-2.5 text-xs text-red-300">
                  <AlertCircle className="size-4 shrink-0 text-red-400" />
                  <span>{resetError}</span>
                </div>
              )}

              <div className="space-y-1.5">
                <Label className="text-xs text-slate-300">البريد الإلكتروني المسجل</Label>
                <Input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  placeholder="admin@sami-trade.com"
                  required
                  className="bg-slate-950 border-slate-800 text-white placeholder:text-slate-600 focus-visible:ring-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <Button
                  type="button"
                  variant="ghost"
                  className="text-slate-400 hover:text-white"
                  onClick={() => setResetModalOpen(false)}
                >
                  إلغاء
                </Button>
                <Button
                  type="submit"
                  disabled={resetSubmitting}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold"
                >
                  {resetSubmitting ? "جاري الإرسال..." : "إرسال رابط الاستعادة"}
                </Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>

      {/* Footer */}
      <footer className="w-full py-4 text-center text-xs text-slate-500 border-t border-slate-900 z-10">
        جميع الحقوق محفوظة © {new Date().getFullYear()} مجموعة سامي بن عياد القابضة — بوابة الإدارة المركزية
      </footer>
    </div>
  );
}
