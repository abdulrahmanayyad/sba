import React, { useEffect, useState } from "react";
import {
  AlertCircle,
  Building,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  Eye,
  FileCheck,
  FilePlus,
  FileSearch,
  Filter,
  Lock,
  Mail,
  Phone,
  RefreshCw,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  User,
  X,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/i18n/language-context";
import { contractingProjectsList } from "../contracting-projects-list";
import { verificationService } from "./verification-service";
import type {
  ProjectVerificationDocument,
  ProjectVerificationDossier,
  VerificationAccessLog,
  VerificationAuditLog,
  VerificationRequest,
  VerificationRequestStatus,
} from "./verification-types";
import {
  CONFIDENTIALITY_LABELS,
  DOCUMENT_TYPE_LABELS,
  STATUS_LABELS,
  VERIFICATION_PURPOSES,
} from "./verification-types";

export function ProjectVerificationAdminDashboard() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [activeTab, setActiveTab] = useState<"requests" | "dossiers" | "audits">("requests");
  const [requests, setRequests] = useState<VerificationRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  // Selected Request Detail Modal
  const [selectedRequest, setSelectedRequest] = useState<VerificationRequest | null>(null);
  const [actionNotes, setActionNotes] = useState("");
  const [customApprovalMsg, setCustomApprovalMsg] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  // Dossier Management State
  const [selectedProjectId, setSelectedProjectId] = useState<number>(1);
  const [currentDossier, setCurrentDossier] = useState<ProjectVerificationDossier | null>(null);
  const [currentDocs, setCurrentDocs] = useState<ProjectVerificationDocument[]>([]);

  // Add Document Dialog
  const [isAddDocOpen, setIsAddDocOpen] = useState(false);
  const [newDocType, setNewDocType] = useState<any>("contract_extract");
  const [newDocTitleAr, setNewDocTitleAr] = useState("");
  const [newDocTitleEn, setNewDocTitleEn] = useState("");
  const [newDocDescAr, setNewDocDescAr] = useState("");
  const [newDocDescEn, setNewDocDescEn] = useState("");
  const [newDocConfidentiality, setNewDocConfidentiality] = useState<any>("shareable_after_approval");
  const [newDocIsRedacted, setNewDocIsRedacted] = useState(true);
  const [newDocFile, setNewDocFile] = useState<File | null>(null);

  // Audit Logs
  const [auditLogs, setAuditLogs] = useState<VerificationAuditLog[]>([]);
  const [accessLogs, setAccessLogs] = useState<VerificationAccessLog[]>([]);

  const loadData = async () => {
    setLoading(true);
    try {
      const reqs = await verificationService.getRequests();
      setRequests(reqs);

      const d = await verificationService.getDossierByProjectId(selectedProjectId);
      setCurrentDossier(d);

      const docs = await verificationService.getDocumentsForProject(selectedProjectId);
      setCurrentDocs(docs);

      setAuditLogs(verificationService.getAuditLogs());
      setAccessLogs(verificationService.getAccessLogs());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedProjectId]);

  const filteredRequests = requests.filter((r) => {
    const matchesSearch =
      r.company_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.applicant_full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.reference_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.project_name_ar.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.project_name_en.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus = statusFilter === "all" || r.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = async (
    requestId: string,
    newStatus: VerificationRequestStatus
  ) => {
    setIsUpdating(true);
    try {
      const updated = await verificationService.updateRequestStatus(requestId, {
        status: newStatus,
        adminEmail: "compliance@sami-trade.com",
        internalNotes: actionNotes,
        rejectionReason: newStatus === "rejected" ? actionNotes : undefined,
        additionalInfoRequested: newStatus === "additional_info_required" ? actionNotes : undefined,
        customApprovalMessage: newStatus === "approved" || newStatus === "documents_shared" ? customApprovalMsg : undefined,
      });

      setSelectedRequest(updated);
      setRequests((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
      setActionNotes("");
      setCustomApprovalMsg("");
      setAuditLogs(verificationService.getAuditLogs());
    } finally {
      setIsUpdating(false);
    }
  };

  const handleAddDocumentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentDossier || !newDocTitleAr || !newDocTitleEn) return;

    await verificationService.addDocument({
      dossier_id: currentDossier.id,
      project_id: currentDossier.project_id,
      document_type: newDocType,
      title_ar: newDocTitleAr,
      title_en: newDocTitleEn,
      description_ar: newDocDescAr,
      description_en: newDocDescEn,
      file_path: `dossiers/${currentDossier.project_id}/${newDocFile ? newDocFile.name : "doc.pdf"}`,
      file_name: newDocFile ? newDocFile.name : `${currentDossier.project_reference_number}_Document.pdf`,
      file_size_bytes: newDocFile ? newDocFile.size : 1500000,
      mime_type: "application/pdf",
      issue_date: currentDossier.assignment_date,
      issuing_entity: currentDossier.assigning_authority_ar,
      confidentiality_level: newDocConfidentiality,
      is_redacted: newDocIsRedacted,
      legal_disclosure_confirmed: true,
    });

    setIsAddDocOpen(false);
    setNewDocTitleAr("");
    setNewDocTitleEn("");
    setNewDocDescAr("");
    setNewDocDescEn("");
    setNewDocFile(null);

    const refreshedDocs = await verificationService.getDocumentsForProject(currentDossier.project_id);
    setCurrentDocs(refreshedDocs);
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green-text font-head text-xs font-bold border border-brand-green/20 mb-2">
            <ShieldCheck className="size-3.5" />
            <span>{ar ? "لوحة الحوكمة والتحقق الإدارية" : "Compliance & Verification Control Center"}</span>
          </div>
          <h1 className="font-head text-2xl sm:text-3xl font-bold text-foreground">
            {ar ? "إدارة طلبات التحقق من المشروعات" : "Project Verification Management"}
          </h1>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            {ar
              ? "مراجعة واعتماد طلبات الشركات للاطلاع على مستندات المشروعات وإدارة ملفات التوثيق الرسمية"
              : "Review, vet, and manage corporate verification dossiers and requests in full compliance with corporate confidentiality"}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={loadData}
            className="rounded-full text-xs gap-1.5"
          >
            <RefreshCw className={loading ? "size-3.5 animate-spin" : "size-3.5"} />
            <span>{ar ? "تحديث البيانات" : "Refresh"}</span>
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-border/60">
        <button
          onClick={() => setActiveTab("requests")}
          className={`px-4 py-2.5 text-xs font-head font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === "requests"
              ? "border-brand-green text-brand-green-text"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <FileSearch className="size-4" />
          <span>{ar ? "قائمة طلبات التحقق" : "Verification Requests"}</span>
          <span className="ms-1 px-2 py-0.5 rounded-full text-[10px] bg-muted font-mono">
            {requests.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab("dossiers")}
          className={`px-4 py-2.5 text-xs font-head font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === "dossiers"
              ? "border-brand-green text-brand-green-text"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Building className="size-4" />
          <span>{ar ? "ملفات توثيق المشروعات (57 مشروع)" : "Project Dossiers (57 Projects)"}</span>
        </button>

        <button
          onClick={() => setActiveTab("audits")}
          className={`px-4 py-2.5 text-xs font-head font-bold border-b-2 transition-all flex items-center gap-2 ${
            activeTab === "audits"
              ? "border-brand-green text-brand-green-text"
              : "border-transparent text-muted-foreground hover:text-foreground"
          }`}
        >
          <Lock className="size-4" />
          <span>{ar ? "سجل الرقابة والعمليات (Audit Log)" : "Audit & Access Trail"}</span>
        </button>
      </div>

      {/* TAB 1: Requests Management */}
      {activeTab === "requests" && (
        <div className="space-y-4">
          {/* Filters Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-4 rounded-2xl bg-muted/40 border border-border/80">
            <div className="relative w-full sm:w-80">
              <Search className="absolute start-3 top-2.5 size-4 text-muted-foreground" />
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={ar ? "بحث بالشركة، مقدم الطلب، أو الرقم المرجعي..." : "Search company, applicant, or ref..."}
                className="ps-9 text-xs"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Filter className="size-4 text-muted-foreground shrink-0" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-md border border-input bg-background px-3 py-1.5 text-xs font-medium text-foreground shadow-sm focus:outline-none w-full sm:w-auto"
              >
                <option value="all">{ar ? "جميع الحالات" : "All Statuses"}</option>
                {Object.entries(STATUS_LABELS).map(([key, val]) => (
                  <option key={key} value={key}>
                    {ar ? val.ar : val.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Requests Table */}
          <div className="overflow-x-auto rounded-2xl border border-border/80 bg-background/80 shadow-sm">
            <table className="w-full text-start text-xs">
              <thead className="bg-muted/50 border-b border-border/80 font-head font-bold text-muted-foreground">
                <tr>
                  <th className="p-3.5 text-start">{ar ? "الرقم المرجعي" : "Request ID"}</th>
                  <th className="p-3.5 text-start">{ar ? "الشركة ومقدم الطلب" : "Company / Applicant"}</th>
                  <th className="p-3.5 text-start">{ar ? "المشروع المطلوب" : "Project"}</th>
                  <th className="p-3.5 text-start">{ar ? "الغرض" : "Purpose"}</th>
                  <th className="p-3.5 text-start">{ar ? "تاريخ التقديم" : "Date"}</th>
                  <th className="p-3.5 text-start">{ar ? "الحالة" : "Status"}</th>
                  <th className="p-3.5 text-end">{ar ? "الإجراء" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filteredRequests.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-8 text-muted-foreground">
                      {ar ? "لا توجد طلبات تحقق مطابقة." : "No verification requests match your filters."}
                    </td>
                  </tr>
                ) : (
                  filteredRequests.map((req) => {
                    const statusInfo = STATUS_LABELS[req.status] || STATUS_LABELS.pending_review;
                    const purposeInfo = VERIFICATION_PURPOSES.find((p) => p.id === req.purpose);

                    return (
                      <tr key={req.id} className="hover:bg-muted/30 transition-colors">
                        <td className="p-3.5 font-mono font-bold text-brand-orange whitespace-nowrap">
                          {req.reference_number}
                        </td>
                        <td className="p-3.5 space-y-0.5">
                          <div className="font-bold text-foreground">{req.company_name}</div>
                          <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                            <User className="size-3 text-brand-green" />
                            <span>
                              {req.applicant_full_name} ({req.job_title})
                            </span>
                          </div>
                        </td>
                        <td className="p-3.5 font-medium text-foreground max-w-[200px] truncate">
                          {ar ? req.project_name_ar : req.project_name_en}
                        </td>
                        <td className="p-3.5 text-muted-foreground">
                          {purposeInfo ? (ar ? purposeInfo.ar : purposeInfo.en) : req.purpose}
                        </td>
                        <td className="p-3.5 text-muted-foreground font-mono whitespace-nowrap">
                          {new Date(req.created_at).toLocaleDateString(ar ? "ar-EG" : "en-US")}
                        </td>
                        <td className="p-3.5 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${statusInfo.color}`}
                          >
                            {ar ? statusInfo.ar : statusInfo.en}
                          </span>
                        </td>
                        <td className="p-3.5 text-end whitespace-nowrap">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => setSelectedRequest(req)}
                            className="rounded-full text-xs font-semibold gap-1"
                          >
                            <Eye className="size-3" />
                            <span>{ar ? "مراجعة الطلب" : "Review"}</span>
                          </Button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: Project Dossiers Management */}
      {activeTab === "dossiers" && (
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Projects Selector */}
          <div className="lg:col-span-4 rounded-2xl border border-border/80 bg-background/80 p-4 space-y-3">
            <h3 className="font-head text-sm font-bold text-foreground">
              {ar ? "اختر المشروع لإدارة ملف التوثيق:" : "Select Project Dossier:"}
            </h3>
            <div className="max-h-[600px] overflow-y-auto space-y-1.5 pe-1">
              {contractingProjectsList.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setSelectedProjectId(p.id)}
                  className={`w-full text-start p-3 rounded-xl border text-xs transition-all flex items-start justify-between gap-2 ${
                    selectedProjectId === p.id
                      ? "border-brand-green bg-brand-green/10 text-foreground font-bold shadow-sm"
                      : "border-border/60 hover:bg-muted/40 text-muted-foreground"
                  }`}
                >
                  <div className="truncate">
                    <span className="block font-bold truncate text-foreground">
                      #{p.id} {ar ? p.nameAr : p.nameEn}
                    </span>
                    <span className="text-[11px] text-muted-foreground truncate block">
                      {ar ? p.clientAr : p.clientEn}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-muted">
                    {p.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Dossier Content & Documents */}
          <div className="lg:col-span-8 space-y-5">
            {currentDossier && (
              <div className="rounded-2xl border border-border/80 bg-background/80 p-6 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/60 pb-4">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-orange">
                      {currentDossier.project_reference_number}
                    </span>
                    <h2 className="font-head text-xl font-bold text-foreground mt-1">
                      {ar ? currentDossier.project_name_ar : currentDossier.project_name_en}
                    </h2>
                  </div>
                  <Button
                    size="sm"
                    onClick={() => setIsAddDocOpen(true)}
                    className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-head font-bold gap-1.5"
                  >
                    <FilePlus className="size-3.5" />
                    <span>{ar ? "إضافة مستند توثيق" : "Add Document"}</span>
                  </Button>
                </div>

                {/* Dossier Metadata Grid */}
                <div className="grid gap-3 sm:grid-cols-2 text-xs bg-muted/30 p-4 rounded-xl border border-border/60">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الجهة المالكة:" : "Owner:"}</span>
                    <span className="font-bold text-foreground">
                      {ar ? currentDossier.project_owner_ar : currentDossier.project_owner_en}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "جهة الإسناد:" : "Assigning Authority:"}</span>
                    <span className="font-bold text-foreground">
                      {ar ? currentDossier.assigning_authority_ar : currentDossier.assigning_authority_en}
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "تاريخ الإسناد:" : "Assignment Date:"}</span>
                    <span className="font-mono font-bold text-foreground">{currentDossier.assignment_date}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "حالة المشروع:" : "Project Status:"}</span>
                    <span className="font-bold text-emerald-600">{currentDossier.project_status}</span>
                  </div>
                </div>

                {/* Verification Documents in Dossier */}
                <div className="space-y-3">
                  <h4 className="font-head text-sm font-bold text-foreground flex items-center gap-2">
                    <FileCheck className="size-4 text-brand-green" />
                    <span>{ar ? "مستندات إثبات المشروع المعتمدة:" : "Verified Project Documents:"}</span>
                  </h4>

                  <div className="grid gap-3">
                    {currentDocs.map((doc) => {
                      const typeInfo = DOCUMENT_TYPE_LABELS[doc.document_type] || {
                        ar: "مستند",
                        en: "Document",
                      };
                      const confInfo = CONFIDENTIALITY_LABELS[doc.confidentiality_level] || {
                        ar: "سري",
                        en: "Confidential",
                        badgeClass: "bg-muted text-muted-foreground",
                      };

                      return (
                        <div
                          key={doc.id}
                          className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-border/80 bg-background hover:border-brand-green/40 transition-all text-xs"
                        >
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-foreground">
                                {ar ? doc.title_ar : doc.title_en}
                              </span>
                              <span
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${confInfo.badgeClass}`}
                              >
                                {ar ? confInfo.ar : confInfo.en}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-[11px]">
                              {ar ? typeInfo.ar : typeInfo.en} • {doc.file_name} (
                              {(doc.file_size_bytes / 1024 / 1024).toFixed(2)} MB)
                            </p>
                          </div>

                          <div className="flex items-center gap-2">
                            {doc.is_redacted && (
                              <span className="text-[10px] font-semibold text-muted-foreground bg-muted px-2 py-0.5 rounded">
                                {ar ? "محرر ومحجوب" : "Redacted"}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 3: Audits & Logs */}
      {activeTab === "audits" && (
        <div className="space-y-6">
          <div className="rounded-2xl border border-border/80 bg-background/80 p-5 space-y-4">
            <h3 className="font-head text-base font-bold text-foreground flex items-center gap-2">
              <Shield className="size-4 text-brand-green" />
              <span>{ar ? "سجل الإجراءات الإدارية (Administrative Audit Trail)" : "Audit Log Trail"}</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-muted/40 font-bold text-muted-foreground border-b border-border">
                  <tr>
                    <th className="p-3 text-start">{ar ? "التاريخ والوقت" : "Timestamp"}</th>
                    <th className="p-3 text-start">{ar ? "الإجراء" : "Action"}</th>
                    <th className="p-3 text-start">{ar ? "المسؤول" : "Actor"}</th>
                    <th className="p-3 text-start">{ar ? "الملاحظات" : "Notes"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {auditLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">
                        {new Date(log.created_at).toLocaleString(ar ? "ar-EG" : "en-US")}
                      </td>
                      <td className="p-3 font-semibold text-foreground">{log.action}</td>
                      <td className="p-3 text-brand-green font-mono">{log.actor_email}</td>
                      <td className="p-3 text-muted-foreground">{log.notes || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl border border-border/80 bg-background/80 p-5 space-y-4">
            <h3 className="font-head text-base font-bold text-foreground flex items-center gap-2">
              <Eye className="size-4 text-brand-orange" />
              <span>{ar ? "سجل الدخول والاطلاع على المستندات (Document Access Log)" : "Access Logs"}</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead className="bg-muted/40 font-bold text-muted-foreground border-b border-border">
                  <tr>
                    <th className="p-3 text-start">{ar ? "التاريخ" : "Timestamp"}</th>
                    <th className="p-3 text-start">{ar ? "رمز الوصول" : "Access Token"}</th>
                    <th className="p-3 text-start">{ar ? "نوع العملية" : "Action"}</th>
                    <th className="p-3 text-start">{ar ? "عنوان IP / الجهاز" : "IP / User Agent"}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {accessLogs.map((log) => (
                    <tr key={log.id}>
                      <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">
                        {new Date(log.accessed_at).toLocaleString(ar ? "ar-EG" : "en-US")}
                      </td>
                      <td className="p-3 font-mono text-brand-orange">{log.access_token.slice(0, 15)}...</td>
                      <td className="p-3 font-semibold text-foreground">{log.action_type}</td>
                      <td className="p-3 text-muted-foreground font-mono">{log.ip_address}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Selected Request Detail Dialog */}
      <Dialog open={!!selectedRequest} onOpenChange={(open) => !open && setSelectedRequest(null)}>
        {selectedRequest && (
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border border-border/80 bg-background/95 backdrop-blur-2xl shadow-2xl">
            <DialogHeader className="border-b border-border/60 pb-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-orange/10 text-brand-orange">
                  Ref: {selectedRequest.reference_number}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    STATUS_LABELS[selectedRequest.status]?.color
                  }`}
                >
                  {ar
                    ? STATUS_LABELS[selectedRequest.status]?.ar
                    : STATUS_LABELS[selectedRequest.status]?.en}
                </span>
              </div>
              <DialogTitle className="font-head text-xl font-bold text-foreground mt-2">
                {selectedRequest.company_name}
              </DialogTitle>
              <DialogDescription className="text-xs text-muted-foreground">
                {ar
                  ? `طلب التحقق من: ${selectedRequest.project_name_ar}`
                  : `Verification request for: ${selectedRequest.project_name_en}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-4 text-xs">
              {/* Company & Applicant Grid */}
              <div className="grid gap-4 sm:grid-cols-2 rounded-2xl bg-muted/30 p-4 border border-border/80">
                <div>
                  <span className="text-muted-foreground block">{ar ? "رقم السجل التجاري:" : "Commercial Registration:"}</span>
                  <span className="font-mono font-bold text-foreground">
                    {selectedRequest.commercial_registration_number}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "دولة التسجيل:" : "Country:"}</span>
                  <span className="font-bold text-foreground">
                    {selectedRequest.country_of_registration}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "البريد الرسمي للشركة:" : "Official Email:"}</span>
                  <span className="font-mono text-brand-green">{selectedRequest.official_company_email}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "الموقع الإلكتروني:" : "Website:"}</span>
                  <span className="font-mono text-muted-foreground">
                    {selectedRequest.company_website || "N/A"}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "مقدم الطلب:" : "Applicant Name:"}</span>
                  <span className="font-bold text-foreground">{selectedRequest.applicant_full_name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "المسمى والقسم:" : "Title & Dept:"}</span>
                  <span className="text-foreground">
                    {selectedRequest.job_title} · {selectedRequest.department}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "هاتف مقدم الطلب:" : "Mobile:"}</span>
                  <span className="font-mono text-foreground">{selectedRequest.mobile_number}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block">{ar ? "بريد مقدم الطلب:" : "Applicant Email:"}</span>
                  <span className="font-mono text-brand-green">{selectedRequest.applicant_email}</span>
                </div>
              </div>

              {/* Purpose & Notes */}
              <div className="space-y-2 rounded-xl bg-background p-4 border border-border/80">
                <span className="font-bold text-foreground block">{ar ? "الغرض من التحقق:" : "Purpose of Request:"}</span>
                <p className="text-muted-foreground">
                  {VERIFICATION_PURPOSES.find((p) => p.id === selectedRequest.purpose)?.ar ||
                    selectedRequest.purpose}
                </p>
                {selectedRequest.additional_notes && (
                  <div className="pt-2 border-t border-border/40">
                    <span className="font-semibold text-foreground block">{ar ? "ملاحظات إضافية:" : "Notes:"}</span>
                    <p className="text-muted-foreground mt-0.5">{selectedRequest.additional_notes}</p>
                  </div>
                )}
              </div>

              {/* Attached CR Document */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-muted/40 border border-border/80">
                <div className="flex items-center gap-2">
                  <FileCheck className="size-4 text-brand-green" />
                  <div>
                    <span className="font-bold block">{selectedRequest.commercial_registration_doc_name}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {ar ? "مستند السجل التجاري المرفوع" : "Uploaded Commercial Registration"}
                    </span>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => alert(ar ? "معاينة السجل التجاري من التخزين الخاص" : "Viewing CR from private storage")}
                  className="rounded-full text-xs"
                >
                  <Eye className="size-3.5 me-1" />
                  {ar ? "معاينة السجل" : "View CR"}
                </Button>
              </div>

              {/* If Approved, show Secure Token Link */}
              {selectedRequest.access_token && (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-700 dark:text-emerald-400">
                      {ar ? "رابط بوابة الاطلاع الآمنة المعتمدة:" : "Approved Secure Access Portal Link:"}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">
                      Token: {selectedRequest.access_token}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      readOnly
                      value={`${typeof window !== "undefined" ? window.location.origin : ""}/sectors/construction?tab=verify-portal&token=${selectedRequest.access_token}`}
                      className="font-mono text-xs bg-background"
                    />
                    <Button
                      size="sm"
                      onClick={() => {
                        const url = `${window.location.origin}/sectors/construction?tab=verify-portal&token=${selectedRequest.access_token}`;
                        navigator.clipboard.writeText(url);
                        alert(ar ? "تم نسخ الرابط بنجاح" : "Link copied to clipboard");
                      }}
                      className="rounded-full text-xs shrink-0"
                    >
                      {ar ? "نسخ الرابط" : "Copy"}
                    </Button>
                  </div>
                </div>
              )}

              {/* Administrative Actions */}
              <div className="space-y-3 pt-3 border-t border-border/60">
                <h4 className="font-head text-sm font-bold text-foreground">
                  {ar ? "اتخاذ قرار إداري / تحديث الحالة:" : "Administrative Actions & Decision:"}
                </h4>

                <div>
                  <Label className="text-xs font-semibold">
                    {ar ? "ملاحظات داخلية / أسباب القرار:" : "Internal Notes / Action Notes:"}
                  </Label>
                  <Textarea
                    value={actionNotes}
                    onChange={(e) => setActionNotes(e.target.value)}
                    placeholder={ar ? "اكتب أي ملاحظات داخلية أو أسباب الرفض/طلب استكمال بيانات..." : "Enter internal or communication notes..."}
                    rows={2}
                    className="mt-1 text-xs"
                  />
                </div>

                <div>
                  <Label className="text-xs font-semibold">
                    {ar ? "رسالة مخصصة لمقدم الطلب عند الموافقة:" : "Custom Approval Message to Applicant:"}
                  </Label>
                  <Input
                    value={customApprovalMsg}
                    onChange={(e) => setCustomApprovalMsg(e.target.value)}
                    placeholder={ar ? "مثال: تم تدقيق السجل التجاري واعتماد مشاركة مستندات المشروع..." : "Approval guidance message..."}
                    className="mt-1 text-xs"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <Button
                    size="sm"
                    disabled={isUpdating}
                    onClick={() => handleStatusChange(selectedRequest.id, "approved")}
                    className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-head font-bold gap-1"
                  >
                    <CheckCircle2 className="size-3.5" />
                    <span>{ar ? "موافقة وإنشاء رابط وصول" : "Approve & Generate Portal"}</span>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    disabled={isUpdating}
                    onClick={() => handleStatusChange(selectedRequest.id, "under_verification")}
                    className="rounded-full text-xs font-semibold border-blue-500 text-blue-600"
                  >
                    <span>{ar ? "قيد التحقق" : "Mark Under Verification"}</span>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    disabled={isUpdating}
                    onClick={() => handleStatusChange(selectedRequest.id, "additional_info_required")}
                    className="rounded-full text-xs font-semibold border-purple-500 text-purple-600"
                  >
                    <span>{ar ? "طلب استكمال بيانات" : "Request Info"}</span>
                  </Button>

                  <Button
                    size="sm"
                    variant="destructive"
                    disabled={isUpdating}
                    onClick={() => handleStatusChange(selectedRequest.id, "rejected")}
                    className="rounded-full text-xs font-head font-bold gap-1"
                  >
                    <XCircle className="size-3.5" />
                    <span>{ar ? "رفض الطلب" : "Reject Request"}</span>
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    disabled={isUpdating}
                    onClick={() => handleStatusChange(selectedRequest.id, "closed")}
                    className="rounded-full text-xs font-semibold"
                  >
                    <span>{ar ? "إغلاق الطلب" : "Close"}</span>
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>

      {/* Add Document to Dossier Dialog */}
      <Dialog open={isAddDocOpen} onOpenChange={setIsAddDocOpen}>
        <DialogContent className="max-w-lg p-6 rounded-3xl border border-border/80 bg-background shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-head text-lg font-bold text-foreground">
              {ar ? "إضافة مستند إثبات لملف المشروع" : "Add Verification Document to Dossier"}
            </DialogTitle>
          </DialogHeader>

          <form onSubmit={handleAddDocumentSubmit} className="space-y-4 text-xs mt-3">
            <div>
              <Label className="text-xs font-semibold">{ar ? "نوع المستند *" : "Document Type *"}</Label>
              <select
                value={newDocType}
                onChange={(e) => setNewDocType(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
              >
                {Object.entries(DOCUMENT_TYPE_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {ar ? v.ar : v.en}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Label className="text-xs font-semibold">{ar ? "عنوان المستند (عربي) *" : "Title (Arabic) *"}</Label>
              <Input
                value={newDocTitleAr}
                onChange={(e) => setNewDocTitleAr(e.target.value)}
                placeholder="مستخرج عقد إسناد رسمي..."
                className="mt-1 text-xs"
                required
              />
            </div>

            <div>
              <Label className="text-xs font-semibold">{ar ? "عنوان المستند (إنجليزي) *" : "Title (English) *"}</Label>
              <Input
                value={newDocTitleEn}
                onChange={(e) => setNewDocTitleEn(e.target.value)}
                placeholder="Official Contract Extract..."
                className="mt-1 text-xs"
                required
              />
            </div>

            <div>
              <Label className="text-xs font-semibold">{ar ? "مستوى السرية *" : "Confidentiality Level *"}</Label>
              <select
                value={newDocConfidentiality}
                onChange={(e) => setNewDocConfidentiality(e.target.value)}
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-xs"
              >
                {Object.entries(CONFIDENTIALITY_LABELS).map(([k, v]) => (
                  <option key={k} value={k}>
                    {ar ? v.ar : v.en}
                  </option>
                ))}
              </select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={newDocIsRedacted}
                onChange={(e) => setNewDocIsRedacted(e.target.checked)}
                className="rounded border-border text-brand-green"
              />
              <span>{ar ? "تم حجب وتعديل الأسعار والبيانات السرية (Redacted)" : "Confidential pricing redacted"}</span>
            </label>

            <div>
              <Label className="text-xs font-semibold">{ar ? "رفع ملف المستند (PDF) *" : "Upload Document File *"}</Label>
              <Input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={(e) => setNewDocFile(e.target.files?.[0] || null)}
                className="mt-1 text-xs"
              />
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-border/60">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsAddDocOpen(false)}
                className="rounded-full text-xs"
              >
                {ar ? "إلغاء" : "Cancel"}
              </Button>
              <Button
                type="submit"
                className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-head font-bold"
              >
                {ar ? "حفظ المستند بالملف" : "Save Document"}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
