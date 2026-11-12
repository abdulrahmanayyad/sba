import { useState, useMemo, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpDown,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Copy,
  Download,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Filter,
  Globe2,
  Layers,
  Leaf,
  Lock,
  Mail,
  MessageCircle,
  MoreVertical,
  Paperclip,
  Phone,
  RefreshCw,
  Search,
  Send,
  ShieldAlert,
  ShieldCheck,
  Shirt,
  Sparkles,
  Tag,
  TrendingUp,
  UserCheck,
  Users,
  Utensils,
  Wrench,
  X,
  XCircle,
} from "lucide-react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";
import {
  crmSystem,
  type CrmInquiry,
  type InquirySector,
  type InquiryStatus,
  type InquiryType,
  INQUIRY_STATUS_CONFIG,
  INQUIRY_TYPE_CONFIG,
} from "@/lib/crm-system";
import { NewsCmsTab } from "./news-cms-tab";
import { TradeCmsTab } from "./trade-cms-tab";
import { ContactPortalCmsTab } from "./contact-portal-cms-tab";
import { CentralSubmissionsTab } from "./central-submissions-tab";
import { GlobalMarketsCmsTab } from "./global-markets-cms-tab";

export function CrmDashboard() {
  const { language } = useLanguage();
  const ar = language === "AR";

  // Access Gate
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [adminPin, setAdminPin] = useState("");
  const [pinError, setPinError] = useState(false);

  // Navigation View Tab
  const [adminTab, setAdminTab] = useState<"central_inbox" | "contact_portal" | "inquiries" | "news" | "trade" | "global_markets">("central_inbox");

  // Data & Filters
  const [inquiries, setInquiries] = useState<CrmInquiry[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");

  // Selected Detail Modal
  const [activeInquiry, setActiveInquiry] = useState<CrmInquiry | null>(null);
  const [newStatus, setNewStatus] = useState<InquiryStatus>("new");
  const [statusNote, setStatusNote] = useState("");
  const [assignedOfficer, setAssignedOfficer] = useState("");
  const [internalNoteText, setInternalNoteText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  // Metrics
  const [metrics, setMetrics] = useState(crmSystem.getDashboardMetrics());

  const refreshData = () => {
    const data = crmSystem.getAllInquiries();
    setInquiries([...data]);
    setMetrics(crmSystem.getDashboardMetrics());
  };

  useEffect(() => {
    refreshData();
  }, []);

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPin === "2026" || adminPin === "sba" || adminPin === "admin") {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  // Filtered List
  const filteredInquiries = useMemo(() => {
    return inquiries.filter((inq) => {
      if (selectedSector !== "all" && inq.sector !== selectedSector) return false;
      if (selectedStatus !== "all" && inq.status !== selectedStatus) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inRef = inq.referenceCode.toLowerCase().includes(q);
        const inName = inq.applicant.fullName.toLowerCase().includes(q);
        const inOrg = inq.applicant.organization.toLowerCase().includes(q);
        const inEmail = inq.applicant.email.toLowerCase().includes(q);
        const inCountry = inq.applicant.country.toLowerCase().includes(q);
        const inTitle = inq.details.title.toLowerCase().includes(q);
        if (!inRef && !inName && !inOrg && !inEmail && !inCountry && !inTitle) return false;
      }
      return true;
    });
  }, [inquiries, selectedSector, selectedStatus, searchQuery]);

  const handleOpenDetail = (inq: CrmInquiry) => {
    setActiveInquiry(inq);
    setNewStatus(inq.status);
    setAssignedOfficer(inq.assignedOfficer);
    setStatusNote("");
    setInternalNoteText("");
  };

  const handleSaveStatus = () => {
    if (!activeInquiry) return;
    const updated = crmSystem.updateInquiryStatus(
      activeInquiry.id,
      newStatus,
      "Compliance Officer",
      statusNote.trim() || undefined
    );
    if (assignedOfficer !== activeInquiry.assignedOfficer) {
      crmSystem.assignOfficer(activeInquiry.id, assignedOfficer, "Compliance Officer");
    }
    refreshData();
    if (updated) setActiveInquiry({ ...updated });
    setStatusNote("");
  };

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeInquiry || !internalNoteText.trim()) return;
    const updated = crmSystem.addInternalNote(
      activeInquiry.id,
      "Executive Staff",
      internalNoteText.trim()
    );
    refreshData();
    if (updated) setActiveInquiry({ ...updated });
    setInternalNoteText("");
  };

  const copyRefCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const exportCsv = () => {
    const headers = "Reference,Date,Sector,Type,Applicant,Company,Email,Phone,Country,Status,Officer\n";
    const rows = inquiries
      .map(
        (i) =>
          `"${i.referenceCode}","${i.createdAt}","${i.sector}","${i.type}","${i.applicant.fullName}","${i.applicant.organization}","${i.applicant.email}","${i.applicant.phone}","${i.applicant.country}","${i.status}","${i.assignedOfficer}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `SBA_CRM_Inquiries_Export_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // If locked, render administrative gate
  if (!isAuthenticated) {
    return (
      <div className="site-container py-24 min-h-[70vh] flex items-center justify-center">
        <div className="w-full max-w-md rounded-3xl border border-white/20 bg-background/90 p-8 shadow-2xl backdrop-blur-2xl text-center">
          <div className="mx-auto size-12 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
            <Lock className="size-6" />
          </div>
          <h2 className="text-xl font-bold font-head text-foreground">
            {ar ? "بوابة إدارة واستقبال الطلبات المركزية (CRM)" : "Central Business Inquiries & CRM Portal"}
          </h2>
          <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
            {ar
              ? "هذه اللوحة مخصصة لإدارة العمليات ومتابعة استفسارات العملاء والمستثمرين. يرجى إدخال رمز التحقق الإداري."
              : "Restricted administrative environment for reviewing client requests, verification files, and institutional communications."}
          </p>

          <form onSubmit={handlePinSubmit} className="mt-6 space-y-4">
            <div>
              <input
                type="password"
                value={adminPin}
                onChange={(e) => setAdminPin(e.target.value)}
                placeholder={ar ? "أدخل الرمز الإداري (مثال: 2026)" : "Enter Admin Key (e.g. 2026)"}
                className="w-full rounded-2xl border border-border bg-secondary/50 px-4 py-2.5 text-center text-sm text-foreground focus:border-brand-green focus:outline-none"
              />
              {pinError && (
                <span className="mt-1.5 block text-xs font-bold text-red-500">
                  {ar ? "رمز غير صحيح، يرجى المحاولة مجددًا." : "Invalid credentials. Please re-enter."}
                </span>
              )}
            </div>
            <Button type="submit" variant="primary" size="default" className="w-full rounded-2xl text-xs font-bold">
              <span>{ar ? "تسجيل الدخول إلى النظام" : "Unlock CRM Dashboard"}</span>
              <ArrowRight className="size-3.5 rtl:rotate-180" />
            </Button>
            <div className="text-[11px] text-muted-foreground">
              {ar ? "للعرض التجريبي: أدخل 2026" : "Evaluation Access: enter 2026"}
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* 1. DASHBOARD HEADER */}
      <section className="bg-gradient-to-b from-background via-secondary/20 to-background pt-16 pb-8 border-b border-border/60">
        <div className="site-container">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md mb-2">
                  <span className="size-1.5 rounded-full bg-brand-green animate-pulse" />
                  <span>{ar ? "لوحة الإدارة المركزية والـ CRM" : "Central Enterprise CRM & Inquiries"}</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-head text-foreground">
                  {ar ? "إدارة طلبات واستفسارات الأعمال المؤسسية" : "Business Inquiries & Client Management"}
                </h1>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                  {ar
                    ? "منظومة موحدة لاستقبال وتتبع ومعالجة كافة طلبات المقاولات، التصنيع، البيئة، الأغذية، والاستثمار."
                    : "Centralized intake, auditing, and SLA management across all operating divisions and customer channels."}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {/* Admin Mode Switcher */}
                <div className="flex flex-wrap items-center rounded-2xl bg-secondary/80 p-1 border border-border me-2 gap-1">
                  <button
                    type="button"
                    onClick={() => setAdminTab("central_inbox")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5",
                      adminTab === "central_inbox"
                        ? "!bg-brand-green !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                    <span>{ar ? "الوارد المركزي الموحد (Live)" : "Central Live Inbox"}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab("contact_portal")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer",
                      adminTab === "contact_portal"
                        ? "!bg-brand-green !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ar ? "منظومة الاتصال والفرص والشكاوى" : "Contact & Opportunity Portal"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab("inquiries")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer",
                      adminTab === "inquiries"
                        ? "!bg-brand-orange !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ar ? "طلبات القطاعات السابقة" : "Legacy Sector Requests"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab("news")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer",
                      adminTab === "news"
                        ? "!bg-amber-600 !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ar ? "إدارة الأرشيف والتاريخ المؤسسي" : "News Archive & Legacy"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab("trade")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer",
                      adminTab === "trade"
                        ? "!bg-emerald-600 !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ar ? "التجارة الدولية واستيراد Excel" : "Global Trade & Excel CMS"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdminTab("global_markets")}
                    className={cn(
                      "rounded-xl px-3.5 py-1 text-xs font-bold transition-all cursor-pointer",
                      adminTab === "global_markets"
                        ? "!bg-slate-900 !text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {ar ? "دراسات الأسواق العالمية" : "Global Markets Studies"}
                  </button>
                </div>

                {adminTab === "inquiries" && (
                  <>
                    <Button onClick={refreshData} variant="outline" size="sm" className="rounded-full gap-1.5 text-xs font-bold">
                      <RefreshCw className="size-3.5" />
                      <span>{ar ? "تحديث" : "Refresh"}</span>
                    </Button>

                    <Button onClick={exportCsv} variant="primary" size="sm" className="rounded-full gap-1.5 text-xs font-bold">
                      <Download className="size-3.5" />
                      <span>{ar ? "تصدير التقرير (CSV)" : "Export Report (CSV)"}</span>
                    </Button>
                  </>
                )}
              </div>
            </div>

            {adminTab === "central_inbox" && (
              <div className="mt-8">
                <CentralSubmissionsTab ar={ar} />
              </div>
            )}

            {adminTab === "news" && (
              <div className="mt-8">
                <NewsCmsTab />
              </div>
            )}

            {adminTab === "trade" && (
              <div className="mt-8">
                <TradeCmsTab />
              </div>
            )}

            {adminTab === "global_markets" && (
              <div className="mt-8">
                <GlobalMarketsCmsTab ar={ar} />
              </div>
            )}

            {adminTab === "contact_portal" && (
              <div className="mt-8">
                <ContactPortalCmsTab ar={ar} />
              </div>
            )}

            {adminTab === "inquiries" && (
              <>
                {/* 2. KPI METRICS CARDS */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm backdrop-blur-md">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  {ar ? "إجمالي الطلبات" : "Total Requests"}
                </div>
                <div className="mt-1 text-2xl font-black text-foreground">{metrics.total}</div>
                <div className="mt-1 text-[11px] text-brand-green font-medium flex items-center gap-1">
                  <CheckCircle2 className="size-3" />
                  <span>{ar ? "مسجلة بالكامل" : "Audited & Logged"}</span>
                </div>
              </div>

              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/5 p-4 shadow-sm">
                <div className="text-[11px] font-bold text-blue-600 uppercase tracking-wider">
                  {ar ? "طلبات جديدة" : "New Intake"}
                </div>
                <div className="mt-1 text-2xl font-black text-blue-600">{metrics.newCount}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "تتطلب الإسناد" : "Pending Assignment"}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-orange/30 bg-brand-orange/5 p-4 shadow-sm">
                <div className="text-[11px] font-bold text-brand-orange uppercase tracking-wider">
                  {ar ? "قيد المعالجة" : "In Progress"}
                </div>
                <div className="mt-1 text-2xl font-black text-brand-orange">{metrics.inProgressCount}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "مراجعة وتسعير" : "Under Action"}
                </div>
              </div>

              <div className="rounded-2xl border border-brand-green/30 bg-brand-green/5 p-4 shadow-sm">
                <div className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
                  {ar ? "معتمد ومغلق" : "Completed / Closed"}
                </div>
                <div className="mt-1 text-2xl font-black text-brand-green">{metrics.closedCount}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "تمت إفادة العميل" : "Successfully Handled"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  {ar ? "متوسط الاستجابة" : "Avg Response"}
                </div>
                <div className="mt-1 text-2xl font-black text-foreground">{metrics.avgResponseHours}h</div>
                <div className="mt-1 text-[11px] text-brand-green font-medium">
                  {ar ? "ضمن معيار SLA" : "Within Standard"}
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-background/80 p-4 shadow-sm">
                <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider">
                  {ar ? "الالتزام بالـ SLA" : "SLA Compliance"}
                </div>
                <div className="mt-1 text-2xl font-black text-brand-green">{metrics.slaComplianceRate}</div>
                <div className="mt-1 text-[11px] text-muted-foreground">
                  {ar ? "0 متأخرات حرجة" : "Zero Critical Overdue"}
                </div>
              </div>
            </div>
          </>
        )}
      </Reveal>
    </div>
  </section>

  {adminTab === "inquiries" && (
    <>
      {/* 3. FILTERS & SEARCH BAR */}
      <section className="site-container py-6">
        <div className="rounded-3xl border border-white/20 bg-background/85 p-4 sm:p-5 shadow-md backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {/* Search */}
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 rtl:left-auto rtl:right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  ar
                    ? "بحث برقم الطلب (SBA-XXXX)، الاسم، الشركة، البريد..."
                    : "Search reference code, contact, company, email..."
                }
                className="w-full rounded-2xl border border-border bg-secondary/50 py-2.5 pl-9 pr-4 rtl:pl-4 rtl:pr-9 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 rtl:right-auto rtl:left-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-3.5" />
                </button>
              )}
            </div>

            {/* Sector Filter */}
            <div>
              <select
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full rounded-2xl border border-border bg-secondary/50 px-3 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
              >
                <option value="all">{ar ? "كافة القطاعات" : "All Sectors"}</option>
                <option value="construction">{ar ? "المقاولات والإنشاءات" : "Construction & Contracting"}</option>
                <option value="garment">{ar ? "الملابس والمنسوجات" : "Apparel & Garments"}</option>
                <option value="environmental">{ar ? "البيئة والطاقة المتجددة" : "Environmental Solutions"}</option>
                <option value="food">{ar ? "الأغذية والمنتجات الطبيعية" : "Agri-Food & Natural"}</option>
                <option value="investor">{ar ? "علاقات المستثمرين" : "Investor Relations"}</option>
                <option value="group">{ar ? "المجموعة والتوظيف" : "Group & Partnerships"}</option>
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full rounded-2xl border border-border bg-secondary/50 px-3 py-2.5 text-xs sm:text-sm text-foreground focus:border-brand-green focus:outline-none"
              >
                <option value="all">{ar ? "كافة الحالات" : "All Statuses"}</option>
                <option value="new">{ar ? "جديد (New)" : "New"}</option>
                <option value="under_review">{ar ? "قيد المراجعة (Under Review)" : "Under Review"}</option>
                <option value="info_required">{ar ? "معلومات إضافية مطلوبة" : "Info Required"}</option>
                <option value="in_progress">{ar ? "قيد التنفيذ (In Progress)" : "In Progress"}</option>
                <option value="approved">{ar ? "معتمد (Approved)" : "Approved"}</option>
                <option value="rejected">{ar ? "مرفوض (Rejected)" : "Rejected"}</option>
                <option value="closed">{ar ? "مغلق (Closed)" : "Closed"}</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INQUIRIES DATA TABLE */}
      <section className="site-container pb-20">
        <div className="overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-lg backdrop-blur-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-start text-xs">
              <thead className="bg-secondary/60 border-b border-border text-muted-foreground uppercase font-mono tracking-wider text-[11px]">
                <tr>
                  <th className="p-4 text-start">{ar ? "رقم المرجع والتاريخ" : "Reference & Date"}</th>
                  <th className="p-4 text-start">{ar ? "مقدم الطلب والمؤسسة" : "Applicant & Organization"}</th>
                  <th className="p-4 text-start">{ar ? "القطاع والنوع" : "Sector & Type"}</th>
                  <th className="p-4 text-start">{ar ? "الموضوع والملخص" : "Subject & Scope"}</th>
                  <th className="p-4 text-start">{ar ? "الحالة" : "Status"}</th>
                  <th className="p-4 text-start">{ar ? "الموظف المسؤول" : "Assigned"}</th>
                  <th className="p-4 text-center">{ar ? "إجراء" : "Action"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {filteredInquiries.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-12 text-center text-muted-foreground">
                      {ar ? "لا توجد طلبات مطابقة لمعايير البحث الحالية." : "No inquiries match the current filter criteria."}
                    </td>
                  </tr>
                ) : (
                  filteredInquiries.map((inq) => {
                    const statusCfg = INQUIRY_STATUS_CONFIG[inq.status];
                    const typeCfg = INQUIRY_TYPE_CONFIG[inq.type];

                    return (
                      <tr
                        key={inq.id}
                        className="transition-colors hover:bg-secondary/40 cursor-pointer"
                        onClick={() => handleOpenDetail(inq)}
                      >
                        {/* Reference & Date */}
                        <td className="p-4 whitespace-nowrap">
                          <span className="font-mono font-bold text-foreground block">
                            {inq.referenceCode}
                          </span>
                          <span className="text-[11px] text-muted-foreground flex items-center gap-1 mt-0.5">
                            <Clock className="size-3" />
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </span>
                        </td>

                        {/* Applicant */}
                        <td className="p-4">
                          <span className="font-bold text-foreground block leading-snug">
                            {inq.applicant.fullName}
                          </span>
                          <span className="text-[11px] text-muted-foreground block truncate max-w-[160px]">
                            {inq.applicant.organization} ({inq.applicant.country})
                          </span>
                        </td>

                        {/* Sector & Type */}
                        <td className="p-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full border border-brand-green/20 block w-fit">
                            {inq.sector.toUpperCase()}
                          </span>
                          <span className="text-[11px] text-muted-foreground block mt-1">
                            {ar ? typeCfg.labelAr : typeCfg.labelEn}
                          </span>
                        </td>

                        {/* Subject */}
                        <td className="p-4 max-w-xs">
                          <span className="font-semibold text-foreground line-clamp-1 block">
                            {inq.details.title}
                          </span>
                          <span className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                            {inq.details.description}
                          </span>
                        </td>

                        {/* Status */}
                        <td className="p-4 whitespace-nowrap">
                          <span
                            className={cn(
                              "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border",
                              statusCfg.bg,
                              statusCfg.color
                            )}
                          >
                            <span>{ar ? statusCfg.labelAr : statusCfg.labelEn}</span>
                          </span>
                        </td>

                        {/* Assigned Officer */}
                        <td className="p-4 text-muted-foreground text-[11px] whitespace-nowrap">
                          <span className="flex items-center gap-1">
                            <UserCheck className="size-3 text-brand-green" />
                            <span>{inq.assignedOfficer}</span>
                          </span>
                        </td>

                        {/* Action Button */}
                        <td className="p-4 text-center">
                          <Button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenDetail(inq);
                            }}
                            variant="ghost"
                            size="sm"
                            className="rounded-xl size-8 p-0 hover:bg-brand-green/10 text-brand-green"
                          >
                            <Eye className="size-4" />
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
      </section>
    </>
  )}

      {/* =========================================================================
          5. INQUIRY ACTION & DETAIL MODAL
          ========================================================================= */}
      <Dialog open={!!activeInquiry} onOpenChange={(open) => !open && setActiveInquiry(null)}>
        <DialogContent className="max-w-3xl max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
          {activeInquiry && (
            <div>
              <DialogHeader>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-bold text-sm bg-secondary px-3 py-1 rounded-full text-foreground border border-border">
                      {activeInquiry.referenceCode}
                    </span>
                    <button
                      onClick={() => copyRefCode(activeInquiry.referenceCode)}
                      className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1"
                    >
                      <Copy className="size-3" />
                      <span>{isCopied ? (ar ? "تم النسخ" : "Copied!") : (ar ? "نسخ الكود" : "Copy")}</span>
                    </button>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(activeInquiry.createdAt).toLocaleString()}
                  </span>
                </div>
                <DialogTitle className="text-lg sm:text-xl font-bold font-head text-foreground">
                  {activeInquiry.details.title}
                </DialogTitle>
                <DialogDescription className="text-xs text-brand-orange font-semibold">
                  {ar
                    ? INQUIRY_TYPE_CONFIG[activeInquiry.type].labelAr
                    : INQUIRY_TYPE_CONFIG[activeInquiry.type].labelEn}
                </DialogDescription>
              </DialogHeader>

              {/* Applicant Card */}
              <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  {ar ? "بيانات مقدم الطلب والمؤسسة:" : "Applicant & Institutional Profile:"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الاسم الكامل:" : "Full Name:"}</span>
                    <span className="font-bold text-foreground">{activeInquiry.applicant.fullName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الجهة / المؤسسة:" : "Organization:"}</span>
                    <span className="font-bold text-foreground">{activeInquiry.applicant.organization}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "البريد الإلكتروني:" : "Email:"}</span>
                    <a href={`mailto:${activeInquiry.applicant.email}`} className="font-medium text-brand-green hover:underline">
                      {activeInquiry.applicant.email}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الهاتف / واتساب:" : "Phone / WhatsApp:"}</span>
                    <a href={`tel:${activeInquiry.applicant.phone}`} className="font-medium text-foreground hover:underline">
                      {activeInquiry.applicant.phone}
                    </a>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">{ar ? "الدولة:" : "Country:"}</span>
                    <span className="font-medium text-foreground">{activeInquiry.applicant.country}</span>
                  </div>
                  {activeInquiry.applicant.role && (
                    <div>
                      <span className="text-muted-foreground block">{ar ? "الصفة المهنية:" : "Designation / Role:"}</span>
                      <span className="font-medium text-foreground">{activeInquiry.applicant.role}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Request Details */}
              <div className="mt-4 rounded-2xl border border-border bg-secondary/40 p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  {ar ? "تفاصيل الطلب ونطاق الأعمال:" : "Scope & Detailed Requirements:"}
                </span>
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {activeInquiry.details.description}
                </p>
                {(activeInquiry.details.estimatedVolume || activeInquiry.details.preferredTimeline) && (
                  <div className="mt-3 pt-3 border-t border-border flex flex-wrap gap-4 text-xs">
                    {activeInquiry.details.estimatedVolume && (
                      <div>
                        <span className="text-muted-foreground">{ar ? "الكمية / الحجم التقديري: " : "Volume: "}</span>
                        <span className="font-bold text-foreground">{activeInquiry.details.estimatedVolume}</span>
                      </div>
                    )}
                    {activeInquiry.details.preferredTimeline && (
                      <div>
                        <span className="text-muted-foreground">{ar ? "الجدول الزمني المفضل: " : "Timeline: "}</span>
                        <span className="font-bold text-foreground">{activeInquiry.details.preferredTimeline}</span>
                      </div>
                    )}
                  </div>
                )}
                {activeInquiry.details.attachments && activeInquiry.details.attachments.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <span className="text-[11px] font-bold text-muted-foreground block mb-1.5">
                      {ar ? "المستندات المرفقة:" : "Attached Documents:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeInquiry.details.attachments.map((file, fIdx) => (
                        <span
                          key={fIdx}
                          className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-background px-3 py-1 text-xs font-mono text-foreground"
                        >
                          <Paperclip className="size-3 text-brand-orange" />
                          <span>{file.name}</span>
                          <span className="text-muted-foreground text-[10px]">({file.size})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Administrative Action Bar */}
              <div className="mt-6 rounded-2xl border border-brand-green/30 bg-brand-green/5 p-4 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                  <ShieldCheck className="size-4" />
                  <span>{ar ? "إجراءات الإسناد وتحديث الحالة الإدارية:" : "Administrative Status & Workflow Control:"}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="text-[11px] font-bold text-muted-foreground block mb-1">
                      {ar ? "تحديث حالة الطلب:" : "Transition Status to:"}
                    </label>
                    <select
                      value={newStatus}
                      onChange={(e) => setNewStatus(e.target.value as InquiryStatus)}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs font-bold text-foreground focus:border-brand-green focus:outline-none"
                    >
                      <option value="new">New (جديد)</option>
                      <option value="under_review">Under Review (قيد المراجعة)</option>
                      <option value="info_required">Additional Info Required (طلب مستندات)</option>
                      <option value="in_progress">In Progress (قيد التنفيذ)</option>
                      <option value="approved">Approved (معتمد)</option>
                      <option value="rejected">Rejected (مرفوض)</option>
                      <option value="closed">Closed (مغلق)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold text-muted-foreground block mb-1">
                      {ar ? "المسؤول عن المتابعة:" : "Assign Officer / Division:"}
                    </label>
                    <input
                      type="text"
                      value={assignedOfficer}
                      onChange={(e) => setAssignedOfficer(e.target.value)}
                      placeholder={ar ? "اسم الموظف أو الإدارة" : "Officer Name"}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-bold text-muted-foreground block mb-1">
                    {ar ? "ملاحظة التحديث / إشعار الإدارة:" : "Status Change Note / Audit Remark:"}
                  </label>
                  <input
                    type="text"
                    value={statusNote}
                    onChange={(e) => setStatusNote(e.target.value)}
                    placeholder={ar ? "أدخل سبب التغيير أو توجيهات المتابعة..." : "Reason for status change or next step..."}
                    className="w-full rounded-xl border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <Button
                      type="button"
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl text-xs gap-1.5 text-emerald-600 border-emerald-500/30"
                    >
                      <a
                        href={`${WHATSAPP_URL}?text=${encodeURIComponent(`Hello ${activeInquiry.applicant.fullName}, this is regarding your inquiry ${activeInquiry.referenceCode} with Sami Bin Ayyad Group.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="size-3.5" />
                        <span>{ar ? "واتساب مباشر" : "WhatsApp"}</span>
                      </a>
                    </Button>
                    <Button
                      type="button"
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-xl text-xs gap-1.5"
                    >
                      <a
                        href={`mailto:${activeInquiry.applicant.email}?subject=${encodeURIComponent(`[${activeInquiry.referenceCode}] Update from Sami Bin Ayyad Group`)}`}
                      >
                        <Mail className="size-3.5" />
                        <span>{ar ? "مراسلة بريدية" : "Send Email"}</span>
                      </a>
                    </Button>
                  </div>

                  <Button
                    onClick={handleSaveStatus}
                    variant="primary"
                    size="sm"
                    className="rounded-xl text-xs font-bold gap-1.5"
                  >
                    <CheckCircle2 className="size-3.5" />
                    <span>{ar ? "حفظ التحديث الإداري" : "Save Changes"}</span>
                  </Button>
                </div>
              </div>

              {/* Internal Notes History */}
              <div className="mt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground block mb-2">
                  {ar ? "سجل الملاحظات والمتابعات الداخلية:" : "Internal Notes & Audit Log:"}
                </span>

                <form onSubmit={handleAddNote} className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={internalNoteText}
                    onChange={(e) => setInternalNoteText(e.target.value)}
                    placeholder={ar ? "إضافة ملاحظة داخلية جديدة للملف..." : "Add an internal note..."}
                    className="flex-1 rounded-xl border border-border bg-secondary/50 px-3 py-2 text-xs text-foreground focus:border-brand-green focus:outline-none"
                  />
                  <Button type="submit" variant="outline" size="sm" className="rounded-xl text-xs font-bold">
                    <span>{ar ? "إضافة" : "Add Note"}</span>
                  </Button>
                </form>

                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {activeInquiry.internalNotes.map((note) => (
                    <div key={note.id} className="rounded-xl border border-border/80 bg-secondary/30 p-2.5 text-xs">
                      <div className="flex items-center justify-between text-[10px] text-muted-foreground mb-1">
                        <span className="font-bold text-foreground">{note.author}</span>
                        <span>{new Date(note.createdAt).toLocaleString()}</span>
                      </div>
                      <p className="text-muted-foreground">{note.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

