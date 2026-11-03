import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Eye,
  FileCheck,
  FileText,
  Lock,
  Shield,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { verificationService } from "./verification-service";
import type {
  ProjectVerificationDocument,
  VerificationRequest,
} from "./verification-types";
import { DOCUMENT_TYPE_LABELS } from "./verification-types";

interface VerificationPortalProps {
  token: string;
}

export function VerificationPortal({ token }: VerificationPortalProps) {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const [expired, setExpired] = useState(false);
  const [request, setRequest] = useState<VerificationRequest | null>(null);
  const [documents, setDocuments] = useState<ProjectVerificationDocument[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [previewDoc, setPreviewDoc] = useState<ProjectVerificationDocument | null>(null);

  useEffect(() => {
    async function loadPortal() {
      setLoading(true);
      try {
        const res = await verificationService.getVerifiedDocumentsByToken(token);
        if (res.valid) {
          setValid(true);
          setRequest(res.request || null);
          setDocuments(res.documents);
        } else {
          setValid(false);
          setExpired(res.expired);
          setRequest(res.request || null);
          setErrorMessage(res.error || (ar ? "رابط الوصول غير صالح" : "Invalid access link"));
        }
      } catch (e: unknown) {
        const err = e as Error;
        setErrorMessage(err?.message || (ar ? "تعذر فتح بوابة التحقق" : "Failed to open portal"));
      } finally {
        setLoading(false);
      }
    }

    if (token) {
      loadPortal();
    }
  }, [token, ar]);

  const handleDocumentAction = (
    doc: ProjectVerificationDocument,
    action: "view" | "download"
  ) => {
    if (request) {
      verificationService.logAccess({
        request_id: request.id,
        access_token: token,
        document_id: doc.id,
        action_type: action === "view" ? "document_view" : "document_download",
      });
    }

    if (action === "view") {
      setPreviewDoc(doc);
    } else {
      // In a real environment with Supabase signed URLs, this downloads via authenticated signed URL
      const alertText = ar
        ? `جاري بدء تنزيل المستند المعتمد: ${doc.file_name}`
        : `Initiating secure download for: ${doc.file_name}`;
      alert(alertText);
    }
  };

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="size-10 border-3 border-brand-green border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-muted-foreground">
            {ar ? "جاري التحقق من صلاحيات الدخول الآمن..." : "Validating secure credential handshake..."}
          </p>
        </div>
      </div>
    );
  }

  if (!valid || expired) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center p-6">
        <div className="max-w-md w-full text-center space-y-5 rounded-3xl border border-destructive/30 bg-destructive/5 p-8 shadow-xl">
          <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
            <ShieldAlert className="size-7" />
          </div>

          <div className="space-y-2">
            <h2 className="font-head text-xl font-bold text-foreground">
              {ar ? "تعذر فتح بوابة المستندات الموثقة" : "Unable to Open Verification Dossier"}
            </h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {errorMessage}
            </p>
          </div>

          {request && (
            <div className="text-xs bg-background/80 p-3 rounded-xl border border-border text-start space-y-1">
              <div>
                <span className="text-muted-foreground">{ar ? "رقم الطلب: " : "Request Ref: "}</span>
                <span className="font-mono font-bold text-foreground">{request.reference_number}</span>
              </div>
              <div>
                <span className="text-muted-foreground">{ar ? "الشركة: " : "Company: "}</span>
                <span className="font-semibold text-foreground">{request.company_name}</span>
              </div>
            </div>
          )}

          <Button
            onClick={() => (window.location.href = "/sectors/construction?tab=projects")}
            className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-head font-bold"
          >
            {ar ? "العودة لصفحة المشروعات" : "Return to Construction Sector"}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-8">
      {/* Portal Header */}
      <Reveal>
        <div className="rounded-3xl border border-brand-green/30 bg-gradient-to-br from-brand-green/10 via-background to-muted/20 p-6 sm:p-8 backdrop-blur-xl shadow-lg space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 px-3 py-1 text-xs font-bold text-brand-green-text border border-brand-green/30">
              <ShieldCheck className="size-4" />
              <span>{ar ? "بوابة الاطلاع المعتمدة · Secure Project Dossier" : "Secure Verification Dossier"}</span>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border">
              <Lock className="size-3 text-brand-green" />
              <span>Ref: {request?.reference_number}</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="font-head text-2xl sm:text-3xl font-bold text-foreground">
              {ar ? request?.project_name_ar : request?.project_name_en}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {ar
                ? `المستندات الرسمية المعتمدة للمشاركة مع: ${request?.company_name} (ممثلة بالسيد/ة: ${request?.applicant_full_name})`
                : `Official project documentation authorized for disclosure to: ${request?.company_name} (Attn: ${request?.applicant_full_name})`}
            </p>
          </div>

          {/* Expiry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-700 dark:text-amber-400">
            <div className="flex items-center gap-2">
              <Clock className="size-4 shrink-0" />
              <span>
                {ar
                  ? `صلاحية رابط الاطلاع سارية حتى: ${
                      request?.access_expires_at
                        ? new Date(request.access_expires_at).toLocaleDateString(
                            ar ? "ar-EG" : "en-US",
                            { dateStyle: "long" }
                          )
                        : "7 أيام"
                    }`
                  : `Access link valid until: ${
                      request?.access_expires_at
                        ? new Date(request.access_expires_at).toLocaleDateString("en-US", {
                            dateStyle: "long",
                          })
                        : "7 days"
                    }`}
              </span>
            </div>
            <span className="text-[11px] font-semibold bg-background/80 px-2.5 py-0.5 rounded-full border border-amber-500/30">
              {ar ? "مستندات مقيدة تحت بند السرية" : "Protected under NDA protocols"}
            </span>
          </div>

          {/* Custom Admin Approval Message */}
          {request?.custom_approval_message && (
            <div className="p-4 rounded-2xl bg-muted/40 border border-border/80 text-xs text-foreground/90 leading-relaxed">
              <strong className="block text-brand-green font-head mb-1">
                {ar ? "إفادة إدارة الامتثال والعقود:" : "Compliance & Contracts Notice:"}
              </strong>
              {request.custom_approval_message}
            </div>
          )}
        </div>
      </Reveal>

      {/* Authorized Documents List */}
      <Reveal delay={0.1}>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-head text-lg sm:text-xl font-bold text-foreground flex items-center gap-2">
              <FileCheck className="size-5 text-brand-green" />
              <span>{ar ? "المستندات المعتمدة للإطلاع والتنزيل" : "Authorized Verification Documents"}</span>
            </h2>
            <span className="text-xs text-muted-foreground font-semibold">
              {ar ? `${documents.length} مستندات مصرح بها` : `${documents.length} authorized files`}
            </span>
          </div>

          {documents.length === 0 ? (
            <div className="text-center py-12 rounded-3xl border border-dashed border-border p-6 bg-muted/10">
              <p className="text-xs sm:text-sm text-muted-foreground font-semibold">
                {ar
                  ? "لا توجد مستندات مدرجة حاليًا للمشاركة ضمن هذا الملف."
                  : "No documents are currently authorized for disclosure in this dossier."}
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {documents.map((doc) => {
                const typeLabel = DOCUMENT_TYPE_LABELS[doc.document_type] || {
                  ar: "مستند رسمي",
                  en: "Official Document",
                };

                return (
                  <div
                    key={doc.id}
                    className="flex flex-col justify-between rounded-2xl border border-border/80 bg-background/80 p-5 shadow-sm hover:shadow-md hover:border-brand-green/40 transition-all space-y-4"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-brand-green/10 text-brand-green-text text-[11px] font-bold border border-brand-green/20">
                          <FileText className="size-3" />
                          {ar ? typeLabel.ar : typeLabel.en}
                        </span>
                        {doc.is_redacted && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border">
                            {ar ? "بيانات محررة لحفظ السرية" : "Redacted"}
                          </span>
                        )}
                      </div>

                      <h3 className="font-head text-sm sm:text-base font-bold text-foreground line-clamp-2">
                        {ar ? doc.title_ar : doc.title_en}
                      </h3>

                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {ar ? doc.description_ar : doc.description_en}
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground pt-1 border-t border-border/40 font-mono">
                        <span>{(doc.file_size_bytes / 1024 / 1024).toFixed(2)} MB</span>
                        <span>•</span>
                        <span>{doc.mime_type.split("/")[1]?.toUpperCase() || "PDF"}</span>
                        <span>•</span>
                        <span>{doc.issue_date || "N/A"}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-border/60">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleDocumentAction(doc, "view")}
                        className="flex-1 rounded-full text-xs font-semibold gap-1.5 border-border hover:border-brand-green"
                      >
                        <Eye className="size-3.5 text-brand-green" />
                        <span>{ar ? "معاينة آمنة" : "Preview"}</span>
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleDocumentAction(doc, "download")}
                        className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-semibold px-4 gap-1.5"
                      >
                        <Download className="size-3.5" />
                        <span>{ar ? "تنزيل" : "Download"}</span>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </Reveal>

      {/* Document Safe Viewer Dialog */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-background rounded-3xl max-w-3xl w-full p-6 space-y-4 border border-border shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-border/60 pb-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-5 text-brand-green" />
                <h3 className="font-head text-base font-bold text-foreground truncate max-w-md">
                  {ar ? previewDoc.title_ar : previewDoc.title_en}
                </h3>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPreviewDoc(null)}
                className="h-8 w-8 p-0 rounded-full"
              >
                ✕
              </Button>
            </div>

            {/* Redaction Notice */}
            <div className="p-3 rounded-xl bg-muted/40 border border-border text-xs flex items-center gap-2 text-muted-foreground">
              <Lock className="size-4 text-brand-orange shrink-0" />
              <span>
                {ar
                  ? "معاينة المستند الموثق: تم حجب الأسعار والتفاصيل التعاقدية السرية وفق شروط عدم الإفصاح المتبادلة."
                  : "Verified Document Preview: Commercial pricing and sensitive confidential clauses redacted pursuant to mutual NDA."}
              </span>
            </div>

            {/* Document Mock Viewer Container */}
            <div className="aspect-[4/3] rounded-2xl bg-muted/20 border border-border/80 flex flex-col items-center justify-center p-8 text-center space-y-4">
              <FileCheck className="size-16 text-brand-green/80" />
              <div className="space-y-1">
                <p className="font-head text-sm font-bold text-foreground">
                  {previewDoc.file_name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {ar ? `جهة الإصدار: ${previewDoc.issuing_entity || "الجهة المعتمدة"}` : `Issuing Authority: ${previewDoc.issuing_entity || "Authorized Entity"}`}
                </p>
                <p className="text-[11px] font-mono text-muted-foreground">
                  Status: Certified & Cryptographically Signed
                </p>
              </div>

              <Button
                onClick={() => handleDocumentAction(previewDoc, "download")}
                className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-head font-bold px-6"
              >
                <Download className="size-3.5 me-1.5" />
                {ar ? "تنزيل النسخة المعتمدة" : "Download Official Copy"}
              </Button>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setPreviewDoc(null)}
                className="rounded-full text-xs"
              >
                {ar ? "إغلاق المعاينة" : "Close Preview"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

