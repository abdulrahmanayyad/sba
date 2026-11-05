import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Download,
  ShieldAlert,
  Sparkles,
  MessageSquare,
  Eye,
  CheckCircle2,
  Clock,
  AlertTriangle,
  User,
  Building,
  Mail,
  Phone,
  Calendar,
  FileText,
  Send,
  MoreVertical,
  Layers,
  ChevronDown,
} from "lucide-react";
import * as XLSX from "xlsx";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  contactPortalSystem,
  type ContactInquiry,
  type ComplaintRecord,
  type OpportunityRecord,
  type ComplaintStatus,
  type OpportunityStatus,
  type ContactInquiryStatus,
  type ComplaintPriority,
  INQUIRY_TYPES_MAP,
  COMPLAINT_CATEGORIES_MAP,
  COMPLAINT_STATUSES_MAP,
  OPPORTUNITY_TYPES_MAP,
  OPPORTUNITY_STAGES_MAP,
  OPPORTUNITY_STATUSES_MAP,
} from "@/lib/contact-portal-system";

export function ContactPortalCmsTab({ ar }: { ar: boolean }) {
  // Sub-module: inquiries | complaints | opportunities
  const [activeModule, setActiveModule] = useState<"inquiries" | "complaints" | "opportunities">("inquiries");

  // Filter & Search states
  const [searchQuery, setSearchQuery] = useState("");
  const [filterSector, setFilterSector] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");

  // Active records for detail view / editing
  const [selectedInquiry, setSelectedInquiry] = useState<ContactInquiry | null>(null);
  const [selectedComplaint, setSelectedComplaint] = useState<ComplaintRecord | null>(null);
  const [selectedOpportunity, setSelectedOpportunity] = useState<OpportunityRecord | null>(null);

  // Status Change & Notes forms
  const [statusUpdateNote, setStatusUpdateNote] = useState("");
  const [resolutionDetails, setResolutionDetails] = useState("");
  const [assignedStaff, setAssignedStaff] = useState("");

  // Email response simulation modal
  const [emailModalItem, setEmailModalItem] = useState<{
    to: string;
    subject: string;
    body: string;
    reference: string;
  } | null>(null);
  const [emailSentSuccess, setEmailSentSuccess] = useState(false);

  // Local state refresh trigger
  const [refreshKey, setRefreshKey] = useState(0);

  const inquiries = useMemo(() => contactPortalSystem.getInquiries(), [refreshKey]);
  const complaints = useMemo(() => contactPortalSystem.getComplaints(), [refreshKey]);
  const opportunities = useMemo(() => contactPortalSystem.getOpportunities(), [refreshKey]);

  // Filtering Logic
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      if (filterStatus !== "all" && inq.status !== filterStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inRef = inq.referenceCode.toLowerCase().includes(q);
        const inName = inq.applicant.fullName.toLowerCase().includes(q);
        const inOrg = (inq.applicant.company || "").toLowerCase().includes(q);
        const inEmail = inq.applicant.email.toLowerCase().includes(q);
        const inSubject = inq.details.subject.toLowerCase().includes(q);
        if (!inRef && !inName && !inOrg && !inEmail && !inSubject) return false;
      }
      return true;
    });
  }, [inquiries, filterStatus, searchQuery]);

  const filteredComplaints = useMemo(() => {
    return complaints.filter((cmp) => {
      if (filterStatus !== "all" && cmp.status !== filterStatus) return false;
      if (filterPriority !== "all" && cmp.priority !== filterPriority) return false;
      if (filterSector !== "all" && cmp.details.sector !== filterSector) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inRef = cmp.referenceCode.toLowerCase().includes(q);
        const inName = cmp.complainant.fullName.toLowerCase().includes(q);
        const inEmail = cmp.complainant.email.toLowerCase().includes(q);
        const inSubject = cmp.details.subject.toLowerCase().includes(q);
        if (!inRef && !inName && !inEmail && !inSubject) return false;
      }
      return true;
    });
  }, [complaints, filterStatus, filterPriority, filterSector, searchQuery]);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      if (filterStatus !== "all" && opp.status !== filterStatus) return false;
      if (filterSector !== "all" && opp.project.sector !== filterSector) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inRef = opp.referenceCode.toLowerCase().includes(q);
        const inName = opp.applicant.fullName.toLowerCase().includes(q);
        const inOrg = (opp.applicant.company || "").toLowerCase().includes(q);
        const inProject = opp.project.name.toLowerCase().includes(q);
        if (!inRef && !inName && !inOrg && !inProject) return false;
      }
      return true;
    });
  }, [opportunities, filterStatus, filterSector, searchQuery]);

  // Status Handlers
  const handleInquiryStatusChange = (newStatus: ContactInquiryStatus) => {
    if (!selectedInquiry) return;
    contactPortalSystem.updateInquiryStatus(selectedInquiry.id, newStatus, "Administrator", statusUpdateNote);
    setStatusUpdateNote("");
    setRefreshKey((k) => k + 1);
    setSelectedInquiry(null);
  };

  const handleComplaintStatusChange = (newStatus: ComplaintStatus) => {
    if (!selectedComplaint) return;
    const closureDate = newStatus === "resolved" || newStatus === "closed" ? new Date().toISOString().slice(0, 10) : undefined;
    contactPortalSystem.updateComplaintStatus(selectedComplaint.id, newStatus, "Administrator", resolutionDetails || statusUpdateNote, closureDate);
    setStatusUpdateNote("");
    setResolutionDetails("");
    setRefreshKey((k) => k + 1);
    setSelectedComplaint(null);
  };

  const handleOpportunityStatusChange = (newStatus: OpportunityStatus) => {
    if (!selectedOpportunity) return;
    contactPortalSystem.updateOpportunityStatus(selectedOpportunity.id, newStatus, "Administrator", statusUpdateNote);
    setStatusUpdateNote("");
    setRefreshKey((k) => k + 1);
    setSelectedOpportunity(null);
  };

  // Export functions
  const exportToExcel = () => {
    const wb = XLSX.utils.book_new();

    // Sheet 1: Inquiries
    const inqData = inquiries.map((i) => ({
      Reference: i.referenceCode,
      Date: i.createdAt,
      Type: INQUIRY_TYPES_MAP[i.type]?.en || i.type,
      Applicant: i.applicant.fullName,
      Company: i.applicant.company || "",
      Email: i.applicant.email,
      Phone: i.applicant.phone,
      Country: i.applicant.country,
      Status: i.status,
      Department: i.assignedDepartment,
      Subject: i.details.subject,
    }));
    const inqWs = XLSX.utils.json_to_sheet(inqData);
    XLSX.utils.book_append_sheet(wb, inqWs, "General Inquiries");

    // Sheet 2: Complaints
    const cmpData = complaints.map((c) => ({
      Reference: c.referenceCode,
      Date: c.createdAt,
      Category: COMPLAINT_CATEGORIES_MAP[c.category]?.en || c.category,
      Priority: c.priority,
      Status: c.status,
      Complainant: c.complainant.fullName,
      Email: c.complainant.email,
      Phone: c.complainant.phone,
      Sector: c.details.sector,
      Subject: c.details.subject,
      Resolution: c.resolutionDetails || "",
      ClosureDate: c.closureDate || "",
    }));
    const cmpWs = XLSX.utils.json_to_sheet(cmpData);
    XLSX.utils.book_append_sheet(wb, cmpWs, "Complaints");

    // Sheet 3: Opportunities
    const oppData = opportunities.map((o) => ({
      Reference: o.referenceCode,
      Date: o.createdAt,
      ProjectName: o.project.name,
      Type: OPPORTUNITY_TYPES_MAP[o.type]?.en || o.type,
      Stage: o.stage,
      Sector: o.project.sector,
      EstimatedValue: o.project.estimatedValue || "",
      RequiredInvestment: o.project.requiredInvestment || "",
      Applicant: o.applicant.fullName,
      Company: o.applicant.company || "",
      Email: o.applicant.email,
      Phone: o.applicant.phone,
      Country: o.applicant.country,
      Status: o.status,
    }));
    const oppWs = XLSX.utils.json_to_sheet(oppData);
    XLSX.utils.book_append_sheet(wb, oppWs, "Opportunities");

    XLSX.writeFile(wb, `SBA_Contact_Portal_Report_${new Date().toISOString().slice(0, 10)}.xlsx`);
  };

  const openEmailModal = (to: string, reference: string, type: "inquiry" | "complaint" | "opportunity") => {
    let subject = `Sami Bin Ayyad Group — Status Update regarding [${reference}]`;
    let body = `Dear Partner,\n\nThank you for reaching out to Sami Bin Ayyad Group.\n\nThis is an official communication regarding your submission reference: ${reference}.\n\nOur team has reviewed your file and we would like to provide you with the following update:\n[Insert specific details / next steps here]\n\nBest regards,\nCorporate Governance & Client Relations\nSami Bin Ayyad Group\nhttps://www.sami-trade.com`;

    if (type === "complaint") {
      subject = `SBA Quality & Governance — Complaint Resolution Update [${reference}]`;
      body = `Dear Valued Partner,\n\nWe refer to your complaint registered under reference: ${reference}.\n\nWe take your feedback with utmost seriousness. An internal investigation has been conducted and corrective measures are being implemented.\n\nPlease find the official resolution details enclosed.\n\nKind regards,\nQuality & Governance Office\nSami Bin Ayyad Group`;
    } else if (type === "opportunity") {
      subject = `SBA Investment Committee — Project Opportunity Review [${reference}]`;
      body = `Dear Applicant,\n\nThank you for presenting your opportunity [${reference}] to Sami Bin Ayyad Group.\n\nOur Executive Investment Committee has conducted an initial evaluation and we would like to schedule a formal introductory video conference to discuss synergy.\n\nKindly confirm your availability for next week.\n\nSincerely,\nExecutive Strategy Office\nSami Bin Ayyad Group`;
    }

    setEmailModalItem({ to, subject, body, reference });
    setEmailSentSuccess(false);
  };

  return (
    <div className="space-y-6">
      {/* Module Selector & Header */}
      <div className="rounded-3xl border border-white/20 bg-background/80 p-6 backdrop-blur-xl shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-orange block">
              {ar ? "منظومة الاتصالات وتطوير الأعمال الموحدة" : "Unified Corporate Communication & Opportunity System"}
            </span>
            <h2 className="font-head text-xl sm:text-2xl font-bold text-foreground mt-0.5">
              {ar ? "إدارة الاتصالات والفرص والشكاوى" : "Contact & Opportunity Management"}
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={exportToExcel}
              className="rounded-full border-border hover:bg-secondary gap-1.5 text-xs font-bold"
            >
              <Download className="size-3.5 text-brand-green" />
              <span>{ar ? "تصدير تقرير شامل (Excel)" : "Export Report (Excel)"}</span>
            </Button>
          </div>
        </div>

        {/* 3 Main Modules Tabs */}
        <div className="mt-6 flex flex-wrap gap-2 border-b border-border/60 pb-4">
          <button
            type="button"
            onClick={() => { setActiveModule("inquiries"); setFilterStatus("all"); }}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-head font-bold transition-all cursor-pointer",
              activeModule === "inquiries"
                ? "bg-brand-green text-white shadow-md scale-[1.02]"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            <MessageSquare className="size-4" />
            <span>{ar ? "الاستفسارات العامة والتجارية" : "General Inquiries"}</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-mono">
              {inquiries.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveModule("complaints"); setFilterStatus("all"); }}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-head font-bold transition-all cursor-pointer",
              activeModule === "complaints"
                ? "bg-brand-orange text-white shadow-md scale-[1.02]"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            <ShieldAlert className="size-4" />
            <span>{ar ? "إدارة الشكاوى والمقترحات" : "Complaints & Suggestions"}</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-mono">
              {complaints.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => { setActiveModule("opportunities"); setFilterStatus("all"); }}
            className={cn(
              "flex items-center gap-2 rounded-2xl px-5 py-2.5 text-xs sm:text-sm font-head font-bold transition-all cursor-pointer",
              activeModule === "opportunities"
                ? "bg-indigo-600 text-white shadow-md scale-[1.02]"
                : "bg-secondary/40 text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
            )}
          >
            <Sparkles className="size-4" />
            <span>{ar ? "بوابة الفرص والاستثمار" : "Business Opportunities"}</span>
            <span className="rounded-full bg-white/20 px-2 py-0.5 text-[11px] font-mono">
              {opportunities.length}
            </span>
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="size-4 absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder={ar ? "بحث بالرقم المرجعي، الاسم، الشركة، البريد..." : "Search by reference code, name, company, email..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-background ps-9 pe-4 py-2 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-brand-green"
            />
          </div>

          {/* Module-Specific Status Filter */}
          {activeModule === "inquiries" && (
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة الحالات" : "All Statuses"}</option>
              <option value="new">{ar ? "جديد (New)" : "New"}</option>
              <option value="under_review">{ar ? "قيد المراجعة" : "Under Review"}</option>
              <option value="assigned">{ar ? "تم التوجيه" : "Assigned"}</option>
              <option value="in_progress">{ar ? "جاري المتابعة" : "In Progress"}</option>
              <option value="resolved">{ar ? "تم الرد" : "Resolved"}</option>
              <option value="closed">{ar ? "مغلق" : "Closed"}</option>
            </select>
          )}

          {activeModule === "complaints" && (
            <>
              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none"
              >
                <option value="all">{ar ? "كافة الأولويات" : "All Priorities"}</option>
                <option value="critical">{ar ? "حرجة للغاية (Critical)" : "Critical"}</option>
                <option value="high">{ar ? "عالية (High)" : "High"}</option>
                <option value="medium">{ar ? "متوسطة (Medium)" : "Medium"}</option>
                <option value="low">{ar ? "منخفضة (Low)" : "Low"}</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none"
              >
                <option value="all">{ar ? "كافة الحالات" : "All Statuses"}</option>
                {(Object.keys(COMPLAINT_STATUSES_MAP) as ComplaintStatus[]).map((st) => (
                  <option key={st} value={st}>
                    {ar ? COMPLAINT_STATUSES_MAP[st].ar : COMPLAINT_STATUSES_MAP[st].en}
                  </option>
                ))}
              </select>
            </>
          )}

          {activeModule === "opportunities" && (
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="rounded-2xl border border-border bg-background px-3 py-2 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة حالات التقييم" : "All Evaluation Statuses"}</option>
              {(Object.keys(OPPORTUNITY_STATUSES_MAP) as OpportunityStatus[]).map((st) => (
                <option key={st} value={st}>
                  {ar ? OPPORTUNITY_STATUSES_MAP[st].ar : OPPORTUNITY_STATUSES_MAP[st].en}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>

      {/* MODULE A: GENERAL INQUIRIES TABLE */}
      {activeModule === "inquiries" && (
        <div className="rounded-3xl border border-white/20 bg-background/80 overflow-hidden shadow-xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/40 text-muted-foreground font-head">
                  <th className="p-3 text-start">{ar ? "كود المرجع" : "Ref ID"}</th>
                  <th className="p-3 text-start">{ar ? "مقدم الطلب / الشركة" : "Applicant / Org"}</th>
                  <th className="p-3 text-start">{ar ? "النوع والقسم" : "Type & Department"}</th>
                  <th className="p-3 text-start">{ar ? "الدولة" : "Country"}</th>
                  <th className="p-3 text-start">{ar ? "التاريخ" : "Date"}</th>
                  <th className="p-3 text-start">{ar ? "الحالة" : "Status"}</th>
                  <th className="p-3 text-center">{ar ? "الإجراءات" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium">
                {filteredInquiries.map((inq) => (
                  <tr key={inq.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-3 font-mono font-bold text-foreground">{inq.referenceCode}</td>
                    <td className="p-3">
                      <div className="font-bold text-foreground">{inq.applicant.fullName}</div>
                      <div className="text-[11px] text-muted-foreground">{inq.applicant.company || "Individual"}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-semibold text-brand-orange">{INQUIRY_TYPES_MAP[inq.type]?.ar || inq.type}</div>
                      <div className="text-[10px] text-muted-foreground">{inq.assignedDepartment}</div>
                    </td>
                    <td className="p-3">{inq.applicant.country}</td>
                    <td className="p-3 font-mono text-[11px] text-muted-foreground">
                      {new Date(inq.createdAt).toLocaleDateString(ar ? "ar-EG" : "en-US")}
                    </td>
                    <td className="p-3">
                      <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-bold text-foreground border border-border">
                        {inq.status}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-1.5">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedInquiry(inq)}
                          className="h-8 rounded-xl px-2.5 text-xs font-bold text-brand-green hover:bg-brand-green/10"
                        >
                          <Eye className="size-3.5 me-1" />
                          <span>{ar ? "معاينة" : "Review"}</span>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => openEmailModal(inq.applicant.email, inq.referenceCode, "inquiry")}
                          className="h-8 rounded-xl px-2 text-xs text-brand-orange hover:bg-brand-orange/10"
                        >
                          <Mail className="size-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODULE B: COMPLAINTS MANAGEMENT TABLE */}
      {activeModule === "complaints" && (
        <div className="rounded-3xl border border-white/20 bg-background/80 overflow-hidden shadow-xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/40 text-muted-foreground font-head">
                  <th className="p-3 text-start">{ar ? "كود الشكوى" : "Complaint Ref"}</th>
                  <th className="p-3 text-start">{ar ? "الشاكي" : "Complainant"}</th>
                  <th className="p-3 text-start">{ar ? "التصنيف والقطاع" : "Category & Sector"}</th>
                  <th className="p-3 text-start">{ar ? "الأولوية" : "Priority"}</th>
                  <th className="p-3 text-start">{ar ? "تاريخ الورود" : "Date"}</th>
                  <th className="p-3 text-start">{ar ? "الحالة" : "Status"}</th>
                  <th className="p-3 text-center">{ar ? "إدارة الشكوى" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium">
                {filteredComplaints.map((cmp) => {
                  const cfg = COMPLAINT_STATUSES_MAP[cmp.status];
                  return (
                    <tr key={cmp.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="p-3 font-mono font-bold text-brand-orange">{cmp.referenceCode}</td>
                      <td className="p-3">
                        <div className="font-bold text-foreground">{cmp.complainant.fullName}</div>
                        <div className="text-[11px] text-muted-foreground">{cmp.complainant.company || cmp.complainant.relationship}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-foreground">{COMPLAINT_CATEGORIES_MAP[cmp.category]?.ar || cmp.category}</div>
                        <div className="text-[10px] text-muted-foreground">{cmp.details.sector}</div>
                      </td>
                      <td className="p-3">
                        <span
                          className={cn(
                            "rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase",
                            cmp.priority === "critical" && "bg-red-500 text-white animate-pulse",
                            cmp.priority === "high" && "bg-orange-500/20 text-orange-600 border border-orange-500/30",
                            cmp.priority === "medium" && "bg-amber-500/20 text-amber-600 border border-amber-500/30",
                            cmp.priority === "low" && "bg-slate-500/20 text-slate-600"
                          )}
                        >
                          {cmp.priority}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-[11px] text-muted-foreground">
                        {new Date(cmp.createdAt).toLocaleDateString(ar ? "ar-EG" : "en-US")}
                      </td>
                      <td className="p-3">
                        <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-bold border", cfg.bg, cfg.color)}>
                          {ar ? cfg.ar : cfg.en}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedComplaint(cmp)}
                            className="h-8 rounded-xl px-2.5 text-xs font-bold text-brand-orange hover:bg-brand-orange/10"
                          >
                            <ShieldAlert className="size-3.5 me-1" />
                            <span>{ar ? "معالجة" : "Process"}</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => openEmailModal(cmp.complainant.email, cmp.referenceCode, "complaint")}
                            className="h-8 rounded-xl px-2 text-xs text-brand-green hover:bg-brand-green/10"
                          >
                            <Mail className="size-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODULE C: BUSINESS OPPORTUNITIES TABLE */}
      {activeModule === "opportunities" && (
        <div className="rounded-3xl border border-white/20 bg-background/80 overflow-hidden shadow-xl backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs border-collapse">
              <thead>
                <tr className="border-b border-border bg-secondary/40 text-muted-foreground font-head">
                  <th className="p-3 text-start">{ar ? "كود الفرصة" : "Opportunity Ref"}</th>
                  <th className="p-3 text-start">{ar ? "اسم المشروع المقترح" : "Project Name"}</th>
                  <th className="p-3 text-start">{ar ? "مقدم العرض / الدولة" : "Applicant / Country"}</th>
                  <th className="p-3 text-start">{ar ? "النوع والمرحلة" : "Type & Stage"}</th>
                  <th className="p-3 text-start">{ar ? "القيمة التقديرية" : "Estimated Value"}</th>
                  <th className="p-3 text-start">{ar ? "حالة التقييم" : "Evaluation Status"}</th>
                  <th className="p-3 text-center">{ar ? "دراسة العرض" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40 font-medium">
                {filteredOpportunities.map((opp) => {
                  const cfg = OPPORTUNITY_STATUSES_MAP[opp.status];
                  return (
                    <tr key={opp.id} className="hover:bg-secondary/30 transition-colors">
                      <td className="p-3 font-mono font-bold text-indigo-600">{opp.referenceCode}</td>
                      <td className="p-3">
                        <div className="font-bold text-foreground line-clamp-1">{opp.project.name}</div>
                        <div className="text-[10px] text-muted-foreground">{opp.project.sector}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-bold text-foreground">{opp.applicant.fullName}</div>
                        <div className="text-[11px] text-muted-foreground">{opp.applicant.company || opp.applicant.country}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-semibold text-foreground">{OPPORTUNITY_TYPES_MAP[opp.type]?.ar || opp.type}</div>
                        <div className="text-[10px] text-brand-orange">{OPPORTUNITY_STAGES_MAP[opp.stage]?.ar || opp.stage}</div>
                      </td>
                      <td className="p-3 font-mono font-semibold text-brand-green">
                        {opp.project.estimatedValue ? `${opp.project.estimatedValue} ${opp.project.currency || "USD"}` : "N/A"}
                      </td>
                      <td className="p-3">
                        <span className={cn("rounded-full px-2.5 py-1 text-[11px] font-bold border", cfg.bg, cfg.color)}>
                          {ar ? cfg.ar : cfg.en}
                        </span>
                      </td>
                      <td className="p-3 text-center">
                        <div className="flex items-center justify-center gap-1.5">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedOpportunity(opp)}
                            className="h-8 rounded-xl px-2.5 text-xs font-bold text-indigo-600 hover:bg-indigo-50"
                          >
                            <Sparkles className="size-3.5 me-1" />
                            <span>{ar ? "تقييم" : "Evaluate"}</span>
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => openEmailModal(opp.applicant.email, opp.referenceCode, "opportunity")}
                            className="h-8 rounded-xl px-2 text-xs text-brand-green hover:bg-brand-green/10"
                          >
                            <Mail className="size-3.5" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* MODAL 1: INQUIRY REVIEW & STATUS UPDATE */}
      <Dialog open={!!selectedInquiry} onOpenChange={(open) => !open && setSelectedInquiry(null)}>
        <DialogContent className="max-w-2xl rounded-3xl border border-white/20 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-head text-xl font-bold flex items-center justify-between">
              <span>{ar ? "مراجعة الاستفسار العام" : "Review General Inquiry"}</span>
              <span className="font-mono text-sm text-brand-orange">{selectedInquiry?.referenceCode}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedInquiry && (
            <div className="space-y-4 my-2 text-xs">
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "مقدم الطلب:" : "Applicant:"}</span>
                    <span className="font-bold text-foreground text-sm">{selectedInquiry.applicant.fullName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الشركة والمنصب:" : "Company / Title:"}</span>
                    <span className="font-semibold text-foreground">
                      {selectedInquiry.applicant.company || "Individual"} ({selectedInquiry.applicant.jobTitle || "N/A"})
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "البريد الإلكتروني:" : "Email:"}</span>
                    <span className="font-mono text-brand-orange">{selectedInquiry.applicant.email}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الهاتف والدولة:" : "Phone / Country:"}</span>
                    <span className="font-mono">{selectedInquiry.applicant.phone} ({selectedInquiry.applicant.country})</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <span className="text-muted-foreground block">{ar ? "موضوع وتفاصيل الرسالة:" : "Subject & Details:"}</span>
                  <p className="font-bold text-foreground mt-0.5">{selectedInquiry.details.subject}</p>
                  <p className="text-muted-foreground mt-1 whitespace-pre-line leading-relaxed">{selectedInquiry.details.message}</p>
                </div>
              </div>

              {/* Update Status form */}
              <div className="p-4 rounded-2xl border border-brand-green/30 bg-brand-green/5 space-y-3">
                <label className="font-bold text-foreground block">{ar ? "تحديث حالة الاستفسار:" : "Update Inquiry Status:"}</label>
                <div className="flex flex-wrap gap-2">
                  {(["new", "under_review", "assigned", "in_progress", "resolved", "closed"] as ContactInquiryStatus[]).map((st) => (
                    <Button
                      key={st}
                      type="button"
                      size="sm"
                      variant={selectedInquiry.status === st ? "default" : "outline"}
                      onClick={() => handleInquiryStatusChange(st)}
                      className="rounded-xl text-xs font-bold"
                    >
                      {st}
                    </Button>
                  ))}
                </div>
                <textarea
                  rows={2}
                  placeholder={ar ? "إضافة ملاحظة داخلية في السجل..." : "Add internal note in audit log..."}
                  value={statusUpdateNote}
                  onChange={(e) => setStatusUpdateNote(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* MODAL 2: COMPLAINT PROCESSING & RESOLUTION */}
      <Dialog open={!!selectedComplaint} onOpenChange={(open) => !open && setSelectedComplaint(null)}>
        <DialogContent className="max-w-2xl rounded-3xl border border-white/20 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-head text-xl font-bold flex items-center justify-between text-brand-orange">
              <span>{ar ? "معالجة الشكوى والمقترح" : "Process Complaint & Resolution"}</span>
              <span className="font-mono text-sm">{selectedComplaint?.referenceCode}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedComplaint && (
            <div className="space-y-4 my-2 text-xs">
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الشاكي:" : "Complainant:"}</span>
                    <span className="font-bold text-foreground text-sm">{selectedComplaint.complainant.fullName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "العلاقة مع المجموعة:" : "Relationship:"}</span>
                    <span className="font-bold text-brand-orange">{selectedComplaint.complainant.relationship}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "القطاع والفرع:" : "Sector / Dept:"}</span>
                    <span className="font-semibold text-foreground">{selectedComplaint.details.sector}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "تاريخ ومكان الواقعة:" : "Date / Location:"}</span>
                    <span>{selectedComplaint.details.incidentDate || "N/A"} ({selectedComplaint.details.incidentLocation || "N/A"})</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <p className="font-bold text-foreground">{selectedComplaint.details.subject}</p>
                  <p className="text-muted-foreground mt-1 whitespace-pre-line leading-relaxed">{selectedComplaint.details.description}</p>
                </div>

                {selectedComplaint.details.desiredResolution && (
                  <div className="pt-2 border-t border-border/40 text-brand-green font-semibold">
                    <span className="block text-[11px] text-muted-foreground">{ar ? "الحل أو الإجراء المأمول من العميل:" : "Customer Desired Resolution:"}</span>
                    {selectedComplaint.details.desiredResolution}
                  </div>
                )}
              </div>

              {/* Set Resolution and Status */}
              <div className="p-4 rounded-2xl border border-brand-orange/30 bg-brand-orange/5 space-y-3">
                <label className="font-bold text-foreground block">{ar ? "صياغة القرار والحل (يظهر للمستخدم في شاشة المتابعة):" : "Resolution Action (Published to User Tracking):"}</label>
                <textarea
                  rows={2}
                  placeholder={ar ? "اكتب الإجراء المتخذ لمعالجة الشكوى..." : "Detail the corrective action or resolution..."}
                  value={resolutionDetails}
                  onChange={(e) => setResolutionDetails(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background p-2.5 text-xs font-sans"
                />

                <div className="pt-2 flex flex-wrap gap-2">
                  {(["received", "under_review", "assigned", "under_investigation", "resolution_proposed", "resolved", "closed"] as ComplaintStatus[]).map((st) => (
                    <Button
                      key={st}
                      type="button"
                      size="sm"
                      variant={selectedComplaint.status === st ? "default" : "outline"}
                      onClick={() => handleComplaintStatusChange(st)}
                      className="rounded-xl text-xs font-bold"
                    >
                      {COMPLAINT_STATUSES_MAP[st].ar}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* MODAL 3: OPPORTUNITY EVALUATION */}
      <Dialog open={!!selectedOpportunity} onOpenChange={(open) => !open && setSelectedOpportunity(null)}>
        <DialogContent className="max-w-2xl rounded-3xl border border-white/20 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-head text-xl font-bold flex items-center justify-between text-indigo-600">
              <span>{ar ? "تقييم ودراسة الفرصة الاستثمارية" : "Opportunity Evaluation"}</span>
              <span className="font-mono text-sm">{selectedOpportunity?.referenceCode}</span>
            </DialogTitle>
          </DialogHeader>

          {selectedOpportunity && (
            <div className="space-y-4 my-2 text-xs">
              <div className="p-4 rounded-2xl bg-secondary/40 border border-border space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "اسم المشروع:" : "Project Name:"}</span>
                    <span className="font-bold text-foreground text-sm">{selectedOpportunity.project.name}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "مقدم العرض:" : "Applicant:"}</span>
                    <span className="font-bold text-foreground">{selectedOpportunity.applicant.fullName} ({selectedOpportunity.applicant.company || "Individual"})</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "القيمة والاستثمار المطلوب:" : "Estimated & Required Value:"}</span>
                    <span className="font-mono font-bold text-brand-green">
                      {selectedOpportunity.project.estimatedValue} (Req: {selectedOpportunity.project.requiredInvestment})
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "مرحلة ونوع الفرصة:" : "Type & Stage:"}</span>
                    <span>{OPPORTUNITY_TYPES_MAP[selectedOpportunity.type]?.ar} · {OPPORTUNITY_STAGES_MAP[selectedOpportunity.stage]?.ar}</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <span className="text-muted-foreground block">{ar ? "الشرح التجاري والاستراتيجي:" : "Description:"}</span>
                  <p className="text-muted-foreground mt-1 whitespace-pre-line leading-relaxed">{selectedOpportunity.project.description}</p>
                </div>

                <div className="pt-2 border-t border-border/40">
                  <span className="text-muted-foreground block">{ar ? "المتطلبات من المجموعة:" : "Strategic Requirements:"}</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {selectedOpportunity.project.strategicRequirements.map((r) => (
                      <span key={r} className="rounded-full bg-indigo-500/10 text-indigo-600 px-2.5 py-0.5 text-[10px] font-bold">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status Action Buttons (9 Stages) */}
              <div className="p-4 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 space-y-3">
                <label className="font-bold text-foreground block">{ar ? "تحديث مرحلة التقييم الاستثماري:" : "Update Evaluation Status:"}</label>
                <div className="grid grid-cols-3 gap-2">
                  {(["new_submission", "initial_review", "info_required", "under_evaluation", "meeting_requested", "negotiation", "approved_for_discussion", "declined", "archived"] as OpportunityStatus[]).map((st) => (
                    <Button
                      key={st}
                      type="button"
                      size="sm"
                      variant={selectedOpportunity.status === st ? "default" : "outline"}
                      onClick={() => handleOpportunityStatusChange(st)}
                      className={cn("rounded-xl text-[11px] font-bold py-1", selectedOpportunity.status === st && "bg-indigo-600 text-white")}
                    >
                      {OPPORTUNITY_STATUSES_MAP[st].ar}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* MODAL 4: EMAIL NOTIFICATION SIMULATOR */}
      <Dialog open={!!emailModalItem} onOpenChange={(open) => !open && setEmailModalItem(null)}>
        <DialogContent className="max-w-lg rounded-3xl border border-white/20 bg-background/95 p-6 backdrop-blur-2xl shadow-2xl">
          <DialogHeader>
            <DialogTitle className="font-head text-lg font-bold flex items-center gap-2">
              <Mail className="size-5 text-brand-orange" />
              <span>{ar ? "إرسال رد ومراسلة بريدية رسمية" : "Send Official Email Communication"}</span>
            </DialogTitle>
            <DialogDescription className="text-xs text-muted-foreground">
              {ar
                ? "يتم إرسال هذا البريد عبر بنية البريد الإلكتروني المعتمدة للمجموعة (info@sami-trade.com)."
                : "Sent via verified corporate mail server (info@sami-trade.com)."}
            </DialogDescription>
          </DialogHeader>

          {emailModalItem && (
            <div className="space-y-4 my-2 text-xs">
              <div>
                <label className="text-muted-foreground block font-bold mb-1">{ar ? "إلى (المرسل إليه):" : "To:"}</label>
                <input
                  type="email"
                  value={emailModalItem.to}
                  readOnly
                  className="w-full rounded-xl border border-border bg-secondary/50 px-3 py-2 font-mono text-xs"
                />
              </div>

              <div>
                <label className="text-muted-foreground block font-bold mb-1">{ar ? "الموضوع:" : "Subject:"}</label>
                <input
                  type="text"
                  value={emailModalItem.subject}
                  onChange={(e) => setEmailModalItem({ ...emailModalItem, subject: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-3 py-2 font-bold text-xs"
                />
              </div>

              <div>
                <label className="text-muted-foreground block font-bold mb-1">{ar ? "نص الرسالة الرسمية:" : "Email Body:"}</label>
                <textarea
                  rows={6}
                  value={emailModalItem.body}
                  onChange={(e) => setEmailModalItem({ ...emailModalItem, body: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background p-3 text-xs leading-relaxed font-sans"
                />
              </div>

              {emailSentSuccess ? (
                <div className="p-3 rounded-2xl bg-brand-green/10 text-brand-green font-bold text-center">
                  {ar ? "✓ تم إرسال وتوثيق البريد بنجاح في السجل" : "✓ Email transmitted and logged successfully"}
                </div>
              ) : (
                <Button
                  type="button"
                  onClick={() => {
                    setEmailSentSuccess(true);
                    setTimeout(() => {
                      setEmailModalItem(null);
                    }, 1200);
                  }}
                  className="w-full rounded-2xl bg-brand-green text-white hover:bg-brand-orange py-2.5 font-head font-bold text-xs"
                >
                  <Send className="size-3.5 me-1.5" />
                  <span>{ar ? "إرسال البريد وتحديث السجل" : "Transmit Email & Record Audit"}</span>
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

