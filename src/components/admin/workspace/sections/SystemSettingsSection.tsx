import React from "react";
import {
  Settings,
  Server,
  Database,
  Mail,
  ShieldCheck,
  Lock,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SystemSettingsSection() {
  const sysConfig = {
    supabaseUrl: "https://ksimoihakpocitqdrawq.supabase.co",
    projectId: "ksimoihakpocitqdrawq",
    databaseVersion: "PostgreSQL 17.12",
    tablesCount: 36,
    rlsForceTables: 14,
    rlsPoliciesCount: 125,
    triggersCount: 8,
    storageBuckets: 4,
    smtpHost: "smtppro.zoho.com",
    smtpSender: "info@sami-trade.com",
    tlsStatus: "TLS 1.3 Active",
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Settings className="size-5 text-amber-500" />
            <span>إعدادات النظام والربط البنيوي (System Settings)</span>
          </h2>
          <p className="text-xs text-slate-400">
            مراقبة بيئة التشغيل، سياسات قاعدة البيانات، وحالة الربط مع خدمات التخزين والبريد
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Database & Cloud Stack */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <Database className="size-4 text-emerald-400" />
              <span>قاعدة البيانات والسحابة (PostgreSQL & Supabase)</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              حالة المحرك العلائقي وسياسات أمان صفوف الجداول
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">إصدار المحرك:</span>
              <span className="text-slate-200 font-bold">{sysConfig.databaseVersion}</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">معرف المشروع (Project ID):</span>
              <span className="text-amber-400">{sysConfig.projectId}</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">جداول النظام النشطة:</span>
              <span className="text-slate-200">{sysConfig.tablesCount} جدولاً (RLS مفعل بنسبة 100%)</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">جداول الحماية المشددة (FORCE RLS):</span>
              <span className="text-emerald-400 font-bold">{sysConfig.rlsForceTables} جدولاً حساساً</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">مشغلات الأمان الفعالة (Triggers):</span>
              <span className="text-emerald-400 font-bold">{sysConfig.triggersCount} مشغلات نشطة (tgenabled = O)</span>
            </div>
          </CardContent>
        </Card>

        {/* Email & Storage Gateways */}
        <Card className="bg-slate-900/80 border-slate-800 text-slate-100">
          <CardHeader>
            <CardTitle className="text-base font-bold text-white flex items-center gap-2">
              <Mail className="size-4 text-blue-400" />
              <span>بوابات البريد والتخزين السحابي</span>
            </CardTitle>
            <CardDescription className="text-xs text-slate-400">
              ربط البريد الإلكتروني المؤسسي وخوادم الملفات
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 font-mono text-xs">
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">البريد المؤسسي الرسمي:</span>
              <span className="text-blue-300 font-bold">{sysConfig.smtpSender}</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">خادم البريد (Zoho Mail):</span>
              <span className="text-slate-200">{sysConfig.smtpHost} (Port 465 SSL)</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">حاويات التخزين المعتمدة:</span>
              <span className="text-emerald-400">{sysConfig.storageBuckets} حاويات (corporate, studies, careers, dossiers)</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">بروتوكول الأمان والتشفير:</span>
              <span className="text-emerald-400 font-bold">{sysConfig.tlsStatus}</span>
            </div>
            <div className="flex justify-between p-2.5 rounded-lg bg-slate-950 border border-slate-800/80">
              <span className="text-slate-400 font-sans">نطاق الدخول الرئيسي:</span>
              <span className="text-amber-400">https://sami-trade.com/admin</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
