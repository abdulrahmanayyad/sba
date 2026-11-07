import { useState, useEffect, useMemo } from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  Mail,
  Phone,
  Calendar,
  MessageCircle,
  Copy,
  ExternalLink,
  Trash2,
  RefreshCw,
  Building,
  User,
  Package,
  Layers,
  Sparkles,
  CheckCircle2,
  FileText,
  Tag,
  Clock,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  getCentralSubmissions,
  buildOwnerWhatsAppFollowupUrl,
  type CentralFormSubmission,
  type FormType,
} from "@/lib/central-form-dispatch";

export function CentralSubmissionsTab({ ar }: { ar: boolean }) {
  const [submissions, setSubmissions] = useState<CentralFormSubmission[]>([]);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedSubmission, setSelectedSubmission] = useState<CentralFormSubmission | null>(null);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const loadSubmissions = () => {
    setSubmissions(getCentralSubmissions());
  };

  useEffect(() => {
    loadSubmissions();
    const handleNew = () => loadSubmissions();
    window.addEventListener("sba-submission-received", handleNew);
    return () => window.removeEventListener("sba-submission-received", handleNew);
  }, []);

  const FORM_TYPE_LABELS: Record<FormType, { en: string; ar: string; color: string }> = {
    rfq_model: { en: "Garment Model RFQ", ar: "طلب عرض سعر موديل", color: "border-purple-500/30 bg-purple-500/10 text-purple-600 dark:text-purple-400" },
    general_contact: { en: "General Contact", ar: "استفسار تواصل عام", color: "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    opportunity_proposal: { en: "Opportunity Proposal", ar: "مقترح فرصة استثمارية", color: "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-400" },
    investor_interest: { en: "Investor Dialogue", ar: "حوار استثماري مؤسسي", color: "border-brand-green/30 bg-brand-green/10 text-brand-green" },
    complaint: { en: "Complaint / Suggestion", ar: "شكوى ومقترح", color: "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400" },
    join_application: { en: "Join / Career Application", ar: "طلب انضمام وتوظيف", color: "border-indigo-500/30 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400" },
    construction_proposal: { en: "Construction Brief", ar: "دراسة مشروع مقاولات", color: "border-orange-500/30 bg-orange-500/10 text-brand-orange" },
    environmental_consultation: { en: "Environmental Consultation", ar: "استشارة وحلول بيئية", color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    garment_b2b: { en: "Garment Manufacturing", ar: "تصنيع ملابس B2B", color: "border-pink-500/30 bg-pink-500/10 text-pink-600 dark:text-pink-400" },
    food_rfq: { en: "Food Sourcing RFQ", ar: "توريد منتجات غذائية", color: "border-yellow-500/30 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
    trade_supplier_bid: { en: "Trade Supplier Bid", ar: "عرض توريد تجاري", color: "border-teal-500/30 bg-teal-500/10 text-teal-600 dark:text-teal-400" },
    partnership_application: { en: "Strategic Partnership", ar: "طلب شراكة استراتيجية", color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400" },
  };

  const filtered = useMemo(() => {
    return submissions.filter((s) => {
      const matchType = selectedType === "all" || s.formType === selectedType;
      const q = search.toLowerCase().trim();
      const matchQuery =
        !q ||
        s.referenceCode.toLowerCase().includes(q) ||
        s.name.toLowerCase().includes(q) ||
        (s.company && s.company.toLowerCase().includes(q)) ||
        s.email.toLowerCase().includes(q) ||
        s.phone.includes(q) ||
        (s.serviceOrProduct && s.serviceOrProduct.toLowerCase().includes(q)) ||
        (s.metadata?.modelCode && String(s.metadata.modelCode).toLowerCase().includes(q));

      return matchType && matchQuery;
    });
  }, [submissions, search, selectedType]);

  const copyRef = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const exportCsv = () => {
    if (submissions.length === 0) return;
    const headers = ["Reference", "Type", "Name", "Company", "Email", "Phone", "Country", "Sector", "Product/Service", "Date", "Status"];
    const rows = submissions.map((s) => [
      s.referenceCode,
      s.formType,
      s.name,
      s.company || "",
      s.email,
      s.phone,
      s.country || "",
      s.sector || "",
      s.serviceOrProduct || "",
      new Date(s.timestamp).toISOString(),
      s.status,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map((e) => e.map((x) => `"${String(x).replace(/"/g, '""')}"`).join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SBA_Universal_Submissions_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const clearAllLocal = () => {
    if (window.confirm(ar ? "هل أنت متأكد من مسح كافة الطلبات المخزنة محلياً في هذا المتصفح؟" : "Are you sure you want to clear all locally cached submissions?")) {
      localStorage.removeItem("sba_central_submissions_v1");
      loadSubmissions();
    }
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-3xl border border-white/20 bg-background/70 p-6 backdrop-blur-2xl shadow-xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-1.5">
            <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
            <span>{ar ? "صندوق الوارد المركزي الموحد" : "Central Dispatch Inbox"}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground">
            {ar ? "كافة الطلبات والاستفسارات الواردة عبر الموقع" : "Universal Inbound Requests & Quotations"}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {ar
              ? "استعراض فوري لكافة طلبات عروض الأسعار (الملابس 2,727 موديل)، استفسارات المستثمرين، عروض التوريد، والتوظيف."
              : "Live unified stream of all garment model RFQs (2,727 SKUs), IR dialogues, project briefs, and join applications."}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadSubmissions}
            className="rounded-full text-xs font-bold"
          >
            <RefreshCw className="size-3.5 me-1.5" />
            <span>{ar ? "تحديث" : "Refresh"}</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={exportCsv}
            disabled={submissions.length === 0}
            className="rounded-full text-xs font-bold"
          >
            <Download className="size-3.5 me-1.5" />
            <span>{ar ? "تصدير CSV" : "Export CSV"}</span>
          </Button>

          {submissions.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllLocal}
              className="rounded-full text-xs text-destructive hover:bg-destructive/10"
            >
              <Trash2 className="size-3.5 me-1.5" />
              <span>{ar ? "مسح المؤقت" : "Clear Cache"}</span>
            </Button>
          )}
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/20 bg-background/60 p-4 shadow-md backdrop-blur-xl">
          <span className="text-xs font-semibold text-muted-foreground">{ar ? "إجمالي الطلبات" : "Total Submissions"}</span>
          <p className="mt-1 text-2xl font-black text-foreground">{submissions.length}</p>
        </div>
        <div className="rounded-2xl border border-purple-500/20 bg-purple-500/5 p-4 shadow-md backdrop-blur-xl">
          <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{ar ? "عروض أسعار الموديلات" : "Model RFQs"}</span>
          <p className="mt-1 text-2xl font-black text-foreground">
            {submissions.filter((s) => s.formType === "rfq_model").length}
          </p>
        </div>
        <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-4 shadow-md backdrop-blur-xl">
          <span className="text-xs font-semibold text-brand-green">{ar ? "علاقات المستثمرين" : "Investor Relations"}</span>
          <p className="mt-1 text-2xl font-black text-foreground">
            {submissions.filter((s) => s.formType === "investor_interest").length}
          </p>
        </div>
        <div className="rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-4 shadow-md backdrop-blur-xl">
          <span className="text-xs font-semibold text-brand-orange">{ar ? "طلبات الانضمام والشراكة" : "Join & Partnerships"}</span>
          <p className="mt-1 text-2xl font-black text-foreground">
            {submissions.filter((s) => s.formType === "join_application" || s.formType === "partnership_application").length}
          </p>
        </div>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-2xl border border-white/20 bg-background/60 p-4 backdrop-blur-xl shadow-md">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute start-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={ar ? "ابحث بالمرجع، الاسم، الشركة، الموديل، الهاتف..." : "Search ref, name, company, model, phone..."}
            className="w-full rounded-full border border-border bg-background/80 py-2 pe-4 ps-10 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          <Filter className="size-4 text-muted-foreground shrink-0" />
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="rounded-full border border-border bg-background/90 px-3 py-1.5 text-xs font-bold text-foreground focus:border-brand-green focus:outline-none"
          >
            <option value="all">{ar ? "كافة أنواع النماذج" : "All Form Types"}</option>
            {Object.entries(FORM_TYPE_LABELS).map(([k, v]) => (
              <option key={k} value={k}>
                {ar ? v.ar : v.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Submissions List */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/20 p-12 text-center text-muted-foreground">
          <FileText className="mx-auto size-12 opacity-40 mb-3" />
          <h4 className="font-head text-base font-bold text-foreground">
            {ar ? "لا توجد طلبات واردة حتى الآن" : "No Submissions Found"}
          </h4>
          <p className="text-xs text-muted-foreground mt-1 max-w-md mx-auto">
            {ar
              ? "عندما يقوم أي زائر بطلب عرض سعر لأي موديل ملابس، أو إرسال استفسار استثماري أو مشروع، سيظهر الطلب مباشرة هنا وفي بريد الإدارة."
              : "Whenever a visitor requests a quote for any of the 2,727 garment models or submits an inquiry, it will instantly appear here."}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => {
            const typeConfig = FORM_TYPE_LABELS[item.formType] || {
              en: item.formType,
              ar: item.formType,
              color: "border-border bg-secondary text-foreground",
            };
            const modelPhoto = item.metadata?.modelPhoto as string | undefined;
            const modelCode = item.metadata?.modelCode as string | undefined;

            return (
              <div
                key={item.id}
                className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-white/20 bg-background/70 p-4 sm:p-5 backdrop-blur-xl shadow-md transition-all duration-300 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)] hover:-translate-y-1"
              >
                <div className="flex items-start gap-3.5">
                  {/* Photo if model RFQ */}
                  {modelPhoto ? (
                    <img
                      src={modelPhoto}
                      alt={modelCode || "Model"}
                      className="size-16 rounded-xl object-cover border border-white/20 shadow-sm shrink-0"
                    />
                  ) : (
                    <div className="size-12 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground shrink-0 border border-white/10">
                      <FileText className="size-6 text-brand-green" />
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-bold text-brand-orange">
                        {item.referenceCode}
                      </span>
                      <button
                        type="button"
                        onClick={() => copyRef(item.referenceCode)}
                        className="text-muted-foreground hover:text-foreground text-[10px]"
                        title={ar ? "نسخ المرجع" : "Copy"}
                      >
                        <Copy className="size-3" />
                      </button>
                      {copiedCode === item.referenceCode && (
                        <span className="text-[10px] text-brand-green font-bold">{ar ? "تم النسخ" : "Copied"}</span>
                      )}

                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${typeConfig.color}`}>
                        {ar ? typeConfig.ar : typeConfig.en}
                      </span>

                      {modelCode && (
                        <span className="rounded-md bg-secondary px-2 py-0.5 text-[10px] font-mono font-bold text-foreground">
                          {modelCode}
                        </span>
                      )}
                    </div>

                    <h4 className="text-sm font-bold text-foreground">
                      {item.name} {item.company && <span className="font-normal text-muted-foreground">({item.company})</span>}
                    </h4>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Mail className="size-3 text-brand-green" />
                        <span>{item.email}</span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Phone className="size-3 text-brand-orange" />
                        <span dir="ltr">{item.phone}</span>
                      </span>
                      {item.country && (
                        <span>• {item.country}</span>
                      )}
                      <span className="inline-flex items-center gap-1 text-[11px]">
                        <Clock className="size-3" />
                        <span>{new Date(item.timestamp).toLocaleDateString()}</span>
                      </span>
                    </div>

                    {item.serviceOrProduct && (
                      <p className="text-xs font-medium text-foreground/80 line-clamp-1 pt-0.5">
                        <strong className="text-muted-foreground">{ar ? "المنتج / الموضوع:" : "Subject/Product:"} </strong>
                        {item.serviceOrProduct}
                      </p>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 self-end sm:self-center shrink-0">
                  <a
                    href={buildOwnerWhatsAppFollowupUrl(item.referenceCode, item.formType, item.name, item.company)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 hover:bg-emerald-500 hover:text-white transition"
                    title={ar ? "مراسلة عبر واتساب" : "WhatsApp"}
                  >
                    <MessageCircle className="size-4" />
                  </a>

                  <a
                    href={`mailto:${item.email}?subject=Regarding Your SBA Request ${item.referenceCode}&body=Dear ${item.name},%0D%0A%0D%0AThank you for reaching out to Sami Bin Ayyad Group regarding ${item.serviceOrProduct || item.formType}.`}
                    className="flex size-9 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 hover:bg-blue-500 hover:text-white transition"
                    title={ar ? "مراسلة بريدية" : "Email"}
                  >
                    <Mail className="size-4" />
                  </a>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedSubmission(item)}
                    className="rounded-full text-xs font-bold"
                  >
                    <Eye className="size-3.5 me-1.5" />
                    <span>{ar ? "معاينة الملف" : "View Dossier"}</span>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Detail Modal */}
      <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
        <DialogContent className="max-w-2xl rounded-3xl border border-white/20 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
          {selectedSubmission && (
            <div className="space-y-6">
              <DialogHeader>
                <div className="flex items-center justify-between border-b border-border/60 pb-3">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {selectedSubmission.referenceCode}
                    </span>
                    <DialogTitle className="text-xl font-bold text-foreground mt-1">
                      {selectedSubmission.name}
                    </DialogTitle>
                    <DialogDescription className="text-xs text-muted-foreground">
                      {new Date(selectedSubmission.timestamp).toLocaleString()} • {selectedSubmission.country}
                    </DialogDescription>
                  </div>
                  {selectedSubmission.metadata?.modelPhoto && (
                    <img
                      src={selectedSubmission.metadata.modelPhoto as string}
                      alt="Model"
                      className="size-16 rounded-xl object-cover border border-white/20"
                    />
                  )}
                </div>
              </DialogHeader>

              {/* Contact Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-border bg-secondary/40 p-3">
                  <span className="text-muted-foreground block text-[11px] font-semibold">{ar ? "الشركة / الجهة:" : "Company:"}</span>
                  <span className="font-bold text-foreground">{selectedSubmission.company || "N/A"}</span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-3">
                  <span className="text-muted-foreground block text-[11px] font-semibold">{ar ? "نوع النموذج:" : "Form Type:"}</span>
                  <span className="font-bold text-brand-green">{selectedSubmission.formType}</span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-3">
                  <span className="text-muted-foreground block text-[11px] font-semibold">{ar ? "البريد الإلكتروني:" : "Email:"}</span>
                  <span className="font-medium text-foreground">{selectedSubmission.email}</span>
                </div>
                <div className="rounded-xl border border-border bg-secondary/40 p-3">
                  <span className="text-muted-foreground block text-[11px] font-semibold">{ar ? "رقم الهاتف / واتساب:" : "Phone:"}</span>
                  <span className="font-medium text-foreground" dir="ltr">{selectedSubmission.phone}</span>
                </div>
              </div>

              {/* Message Details */}
              <div className="rounded-2xl border border-border bg-secondary/30 p-4">
                <h5 className="text-xs font-bold text-foreground mb-2">
                  {ar ? "تفاصيل الطلب والرسالة:" : "Submission Payload & Notes:"}
                </h5>
                <pre className="text-xs text-foreground/90 whitespace-pre-wrap font-sans leading-relaxed">
                  {selectedSubmission.message}
                </pre>
              </div>

              {/* Metadata Details */}
              {selectedSubmission.metadata && Object.keys(selectedSubmission.metadata).length > 0 && (
                <div className="rounded-2xl border border-border bg-secondary/20 p-4 text-xs">
                  <h5 className="text-xs font-bold text-muted-foreground mb-2 uppercase tracking-wider">
                    {ar ? "البيانات الفنية الإضافية (Metadata):" : "Technical Metadata:"}
                  </h5>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(selectedSubmission.metadata).map(([k, v]) => {
                      if (k === "modelPhoto") return null;
                      return (
                        <div key={k} className="p-2 rounded-lg bg-background/50 border border-white/5">
                          <span className="text-[10px] text-muted-foreground block uppercase">{k}:</span>
                          <span className="font-mono text-xs font-semibold text-foreground">
                            {Array.isArray(v) ? v.join(", ") : String(v)}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyRef(selectedSubmission.referenceCode)}
                  className="rounded-full text-xs font-bold"
                >
                  <Copy className="size-3.5 me-1.5" />
                  <span>{copiedCode === selectedSubmission.referenceCode ? (ar ? "تم النسخ" : "Copied") : (ar ? "نسخ كود المرجع" : "Copy Ref Code")}</span>
                </Button>

                <div className="flex items-center gap-2">
                  <a
                    href={buildOwnerWhatsAppFollowupUrl(
                      selectedSubmission.referenceCode,
                      selectedSubmission.formType,
                      selectedSubmission.name,
                      selectedSubmission.company
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-green px-4 py-2 text-xs font-bold text-white transition hover:bg-brand-orange"
                  >
                    <MessageCircle className="size-3.5" />
                    <span>{ar ? "محادثة واتساب" : "Direct WhatsApp"}</span>
                  </a>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedSubmission(null)}
                    className="rounded-full text-xs"
                  >
                    {ar ? "إغلاق" : "Close"}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

