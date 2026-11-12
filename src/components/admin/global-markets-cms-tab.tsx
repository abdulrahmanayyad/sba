import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Archive,
  CheckCircle2,
  Copy,
  Download,
  Edit3,
  Eye,
  FileJson,
  FileUp,
  FolderCog,
  Plus,
  Trash2,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  APPROVAL_STATUS_LABELS,
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,
  SECTOR_ALLOWED_REGIONS,
  SOURCE_CLASSIFICATION_LABELS,
  STUDY_SECTION_BLUEPRINT,
  STUDY_STATUS_LABELS,
  type GeoRegionId,
  type GlobalMarketSectorId,
  type GlobalMarketStudy,
  type SourceDataClassification,
  type StudyApprovalStatus,
  type StudyKpiMetric,
  type StudySectionKey,
  type StudySourceRecord,
  type StudyStatus,
} from "@/lib/global-markets-data";
import {
  removeCustomGlobalMarketStudy,
  upsertGlobalMarketStudy,
  useGlobalMarketsStudies,
  validateAndNormalizeStudyJson,
} from "@/lib/global-markets-store";

interface GlobalMarketsCmsTabProps {
  ar?: boolean;
}

function createEmptyStudy(): GlobalMarketStudy {
  const today = new Date().toISOString().slice(0, 10);
  return {
    id: `gms-study-${Date.now()}`,
    slug: `study-${Date.now()}`,
    sector: "garment",
    scope: "global",
    region: "arab_world",
    countryNameAr: "",
    countryNameEn: "",
    activityTypeAr: "",
    activityTypeEn: "",
    productTagsAr: [],
    productTagsEn: [],
    titleAr: "",
    titleEn: "",
    subtitleAr: "",
    subtitleEn: "",
    status: "in_research",
    approvalStatus: "draft",
    issueDate: today,
    lastUpdated: today,
    version: "1.0",
    kpis: [],
    charts: [],
    tables: [],
    sections: {},
    sources: [],
    groupOpportunities: [],
  };
}

export function GlobalMarketsCmsTab({ ar = true }: GlobalMarketsCmsTabProps) {
  const { studies } = useGlobalMarketsStudies();
  const [sectorFilter, setSectorFilter] = useState<"all" | GlobalMarketSectorId>("all");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  // Add / Edit Modal State
  const [editingStudy, setEditingStudy] = useState<GlobalMarketStudy | null>(null);
  const [activeSectionKey, setActiveSectionKey] = useState<StudySectionKey>("executiveSummary");
  const [productTagsArText, setProductTagsArText] = useState("");
  const [productTagsEnText, setProductTagsEnText] = useState("");

  // Import JSON Modal State
  const [importOpen, setImportOpen] = useState(false);
  const [jsonInput, setJsonInput] = useState("");
  const [importError, setImportError] = useState<string | null>(null);
  const [copiedSchema, setCopiedSchema] = useState(false);

  const filteredStudies = useMemo(() => {
    if (sectorFilter === "all") return studies;
    return studies.filter((s) => s.sector === sectorFilter);
  }, [studies, sectorFilter]);

  const openEditor = (study: GlobalMarketStudy) => {
    setEditingStudy(JSON.parse(JSON.stringify(study)));
    setProductTagsArText(study.productTagsAr.join(", "));
    setProductTagsEnText(study.productTagsEn.join(", "));
    setActiveSectionKey("executiveSummary");
  };

  const handleSaveStudy = () => {
    if (!editingStudy) return;
    if (!editingStudy.titleAr.trim() || !editingStudy.titleEn.trim() || !editingStudy.countryNameAr.trim() || !editingStudy.countryNameEn.trim()) {
      setStatusMessage(
        ar
          ? "يرجى إدخال اسم السوق/الدولة وعنوان الدراسة بالعربية والإنجليزية."
          : "Please fill country/market names and study titles in both AR & EN.",
      );
      return;
    }

    const normalizedSlug =
      editingStudy.slug.trim() ||
      editingStudy.titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const payload: GlobalMarketStudy = {
      ...editingStudy,
      slug: normalizedSlug,
      scope: editingStudy.sector === "construction" ? "egypt_only" : "global",
      region: editingStudy.sector === "construction" ? "egypt" : editingStudy.region,
      productTagsAr: productTagsArText
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
      productTagsEn: productTagsEnText
        .split(",")
        .map((x) => x.trim())
        .filter(Boolean),
    };

    upsertGlobalMarketStudy(payload);
    setEditingStudy(null);
    setStatusMessage(
      ar ? "تم حفظ الدراسة وتحديث السجل بنجاح." : "Study saved and registry updated successfully.",
    );
  };

  const handleArchiveStudy = (study: GlobalMarketStudy) => {
    upsertGlobalMarketStudy({ ...study, status: "archived" });
    setStatusMessage(ar ? "تمت أرشفة الدراسة." : "Study archived.");
  };

  const handleDeleteStudy = (id: string) => {
    removeCustomGlobalMarketStudy(id);
    setStatusMessage(ar ? "تم حذف الدراسة المخصصة من المتصفح." : "Custom study removed from browser registry.");
  };

  const handleImportJson = () => {
    setImportError(null);
    try {
      const parsed = JSON.parse(jsonInput);
      const { validStudies, errors } = validateAndNormalizeStudyJson(parsed);
      if (errors.length > 0) {
        setImportError(errors.join(" | "));
        return;
      }
      validStudies.forEach((s) => upsertGlobalMarketStudy(s));
      setImportOpen(false);
      setJsonInput("");
      setStatusMessage(
        ar
          ? `تم استيراد ${validStudies.length} دراسة بنجاح.`
          : `Successfully imported ${validStudies.length} study record(s).`,
      );
    } catch (e) {
      setImportError(e instanceof Error ? e.message : "Invalid JSON");
    }
  };

  const handleJsonFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setJsonInput(reader.result);
      }
    };
    reader.readAsText(file);
  };

  const handlePdfUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editingStudy) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setEditingStudy({ ...editingStudy, pdfUrl: reader.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const exportRegistryJson = () => {
    const blob = new Blob([JSON.stringify(studies, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `sba-global-markets-studies-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const copyChatGptTemplate = () => {
    const template = {
      id: "gms-garment-saudi-arabia-2026",
      slug: "saudi-arabia",
      sector: "garment",
      scope: "global",
      region: "arab_world",
      countryCode: "SA",
      countryNameAr: "المملكة العربية السعودية",
      countryNameEn: "Saudi Arabia",
      activityTypeAr: "تجارة واستيراد الملابس الجاهزة",
      activityTypeEn: "Ready-Made Garments Import & Retail",
      productTagsAr: ["ملابس نسائية", "عبايات", "ملابس أطفال", "Private Label"],
      productTagsEn: ["Womenswear", "Abayas", "Kidswear", "Private Label"],
      titleAr: "",
      titleEn: "",
      subtitleAr: "",
      subtitleEn: "",
      status: "under_review",
      approvalStatus: "pending_review",
      issueDate: new Date().toISOString().slice(0, 10),
      lastUpdated: new Date().toISOString().slice(0, 10),
      version: "1.0",
      kpis: [
        {
          id: "kpi-1",
          labelAr: "",
          labelEn: "",
          value: "",
          unit: "USD Million",
          source: "",
          referenceYear: "2025",
        },
      ],
      charts: [],
      tables: [],
      sections: {
        executiveSummary: { summaryAr: "", summaryEn: "", bulletsAr: [], bulletsEn: [] },
        marketDefinition: { summaryAr: "", summaryEn: "" },
        marketSize: { summaryAr: "", summaryEn: "" },
        actualDemand: { summaryAr: "", summaryEn: "" },
        importsExports: { applicable: true, summaryAr: "", summaryEn: "" },
        demandedProductsAnalysis: { summaryAr: "", summaryEn: "" },
        localSupplyProduction: { summaryAr: "", summaryEn: "" },
        competitionSaturation: { summaryAr: "", summaryEn: "" },
        potentialBuyers: { summaryAr: "", summaryEn: "" },
        salesDistributionChannels: { summaryAr: "", summaryEn: "" },
        marketEntryStrategy: { summaryAr: "", summaryEn: "" },
        technicalRegulatorySpecs: { summaryAr: "", summaryEn: "" },
        pricingCostAnalysis: { summaryAr: "", summaryEn: "" },
        logisticsSupplyChain: { summaryAr: "", summaryEn: "" },
        risksChallenges: { summaryAr: "", summaryEn: "" },
        commercialInvestmentOpportunities: { summaryAr: "", summaryEn: "" },
        capacityFinancialFeasibility: { summaryAr: "", summaryEn: "" },
        recommendationsActionPlan: { summaryAr: "", summaryEn: "" },
      },
      sources: [
        {
          id: "src-1",
          name: "",
          url: "https://",
          dataYear: "2025",
          accessedAt: new Date().toISOString().slice(0, 10),
          classification: "official",
        },
      ],
      groupOpportunities: [],
      globalOpportunityLink: {
        enabled: false,
        approved: false,
        tradeSectorParam: "apparel",
        titleAr: "",
        titleEn: "",
        descriptionAr: "",
        descriptionEn: "",
      },
    };
    navigator.clipboard.writeText(JSON.stringify(template, null, 2));
    setCopiedSchema(true);
    setTimeout(() => setCopiedSchema(false), 2000);
  };

  return (
    <div className="space-y-6 text-start">
      {/* Header Toolbar */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 flex items-center justify-center shrink-0">
              <FolderCog className="size-5" />
            </div>
            <div>
              <h2 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {ar ? "منظومة إدارة دراسات الأسواق العالمية" : "Global Markets Study Management System"}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {ar
                  ? "استقبال ملفات الدراسات الجاهزة (JSON / PDF)، التعديل، الاعتماد، تحديث الحالة، وأرشفة الإصدارات."
                  : "Ingest ready research files (JSON / PDF), edit bilingual sections, approve releases, and archive versions."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={copyChatGptTemplate}
              className="rounded-full text-xs font-bold gap-1.5"
            >
              <Copy className="size-3.5" />
              <span>{copiedSchema ? (ar ? "تم نسخ القالب" : "Template Copied") : (ar ? "نسخ قالب JSON" : "Copy JSON Schema")}</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => setImportOpen(true)}
              className="rounded-full text-xs font-bold gap-1.5"
            >
              <FileJson className="size-3.5 text-brand-green" />
              <span>{ar ? "استيراد JSON" : "Import JSON"}</span>
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={exportRegistryJson}
              className="rounded-full text-xs font-bold gap-1.5"
            >
              <Download className="size-3.5" />
              <span>{ar ? "تصدير السجل" : "Export JSON"}</span>
            </Button>

            <Button
              type="button"
              onClick={() => openEditor(createEmptyStudy())}
              className="rounded-full !bg-slate-900 !text-white hover:!bg-brand-green text-xs font-bold gap-1.5"
            >
              <Plus className="size-3.5" />
              <span>{ar ? "إضافة دراسة جديدة" : "New Study"}</span>
            </Button>
          </div>
        </div>

        {statusMessage && (
          <div className="flex items-center justify-between gap-2 rounded-2xl border border-brand-green/35 bg-brand-green/10 px-4 py-2.5 text-xs font-bold text-brand-green">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="size-4" />
              <span>{statusMessage}</span>
            </span>
            <button type="button" onClick={() => setStatusMessage(null)} className="cursor-pointer">
              ×
            </button>
          </div>
        )}

        {/* Sector Tabs */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/70 dark:border-white/10">
          <button
            type="button"
            onClick={() => setSectorFilter("all")}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-bold border transition-colors cursor-pointer",
              sectorFilter === "all"
                ? "border-slate-900 bg-slate-900 text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
            )}
          >
            {ar ? `الكل (${studies.length})` : `All (${studies.length})`}
          </button>
          {GLOBAL_MARKET_SECTORS.map((sec) => {
            const count = studies.filter((s) => s.sector === sec.id).length;
            return (
              <button
                key={sec.id}
                type="button"
                onClick={() => setSectorFilter(sec.id)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-bold border transition-colors cursor-pointer",
                  sectorFilter === sec.id
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                )}
              >
                {ar ? `${sec.nameAr} (${count})` : `${sec.nameEn} (${count})`}
              </button>
            );
          })}
        </div>
      </div>

      {/* Studies Table */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md">
        {filteredStudies.length === 0 ? (
          <div className="py-10 text-center space-y-2">
            <p className="font-head text-base font-bold text-slate-800 dark:text-white">
              {ar ? "لا توجد دراسات مسجلة بعد" : "No Studies Registered Yet"}
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              {ar
                ? "استخدم زر \"استيراد JSON\" لإدراج ملف دراسة معد مسبقًا أو \"إضافة دراسة جديدة\" لإنشاء سجل دراسة يدويًا."
                : "Use \"Import JSON\" to ingest a prepared study payload or \"New Study\" to register one directly."}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="border-b border-slate-200 dark:border-white/10 text-slate-500">
                <tr>
                  <th className="py-3 px-3 text-start">{ar ? "العنوان والسوق" : "Title & Market"}</th>
                  <th className="py-3 px-3 text-start">{ar ? "القطاع" : "Sector"}</th>
                  <th className="py-3 px-3 text-start">{ar ? "الحالة" : "Status"}</th>
                  <th className="py-3 px-3 text-start">{ar ? "الاعتماد" : "Approval"}</th>
                  <th className="py-3 px-3 text-start">{ar ? "التحديث" : "Updated"}</th>
                  <th className="py-3 px-3 text-end">{ar ? "إجراءات" : "Actions"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 dark:divide-white/10">
                {filteredStudies.map((study) => {
                  const st = STUDY_STATUS_LABELS[study.status];
                  const appSt = APPROVAL_STATUS_LABELS[study.approvalStatus];
                  const sec = GLOBAL_MARKET_SECTORS.find((s) => s.id === study.sector);
                  return (
                    <tr key={study.id} className="hover:bg-slate-50/80 dark:hover:bg-white/5">
                      <td className="py-3 px-3">
                        <div className="font-bold text-slate-900 dark:text-white">{ar ? study.titleAr : study.titleEn}</div>
                        <div className="text-[11px] text-slate-500">
                          {ar ? study.countryNameAr : study.countryNameEn} · v{study.version}
                        </div>
                      </td>
                      <td className="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200">
                        {sec ? (ar ? sec.nameAr : sec.nameEn) : study.sector}
                      </td>
                      <td className="py-3 px-3">
                        <span className={cn("rounded-full border px-2.5 py-0.5 text-[10px] font-bold", st.badgeClass)}>
                          {ar ? st.ar : st.en}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        <span className={cn("rounded-full border px-2.5 py-0.5 text-[10px] font-bold", appSt.badgeClass)}>
                          {ar ? appSt.ar : appSt.en}
                        </span>
                      </td>
                      <td className="py-3 px-3 font-mono text-slate-600 dark:text-slate-300">
                        {study.lastUpdated}
                      </td>
                      <td className="py-3 px-3">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            to="/global-markets/$sector/$slug"
                            params={{ sector: study.sector, slug: study.slug }}
                            className="rounded-lg border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-100"
                            title={ar ? "معاينة" : "Preview"}
                          >
                            <Eye className="size-3.5" />
                          </Link>
                          <button
                            type="button"
                            onClick={() => openEditor(study)}
                            className="rounded-lg border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-100 cursor-pointer"
                            title={ar ? "تعديل" : "Edit"}
                          >
                            <Edit3 className="size-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleArchiveStudy(study)}
                            className="rounded-lg border border-slate-200 p-1.5 text-amber-600 hover:bg-amber-50 cursor-pointer"
                            title={ar ? "أرشفة" : "Archive"}
                          >
                            <Archive className="size-3.5" />
                          </button>
                          {study.isCustomStored && (
                            <button
                              type="button"
                              onClick={() => handleDeleteStudy(study.id)}
                              className="rounded-lg border border-slate-200 p-1.5 text-red-600 hover:bg-red-50 cursor-pointer"
                              title={ar ? "حذف" : "Delete"}
                            >
                              <Trash2 className="size-3.5" />
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* JSON Importer Dialog */}
      <Dialog open={importOpen} onOpenChange={setImportOpen}>
        <DialogContent className="max-w-2xl rounded-3xl p-6 max-h-[88vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-head text-lg font-extrabold">
              {ar ? "استيراد دراسة سوقية جاهزة (JSON)" : "Import Prepared Market Study (JSON)"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              {ar
                ? "قم برفع ملف JSON أو لصق محتوى الدراسة المُعد بواسطة ChatGPT لإدراجه مباشرة في السجل."
                : "Upload a .json file or paste a ChatGPT-prepared study JSON payload."}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <label className="flex items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-slate-300 p-4 text-xs font-bold text-slate-700 hover:border-brand-green cursor-pointer">
              <FileUp className="size-4 text-brand-green" />
              <span>{ar ? "اختر ملف JSON من جهازك" : "Choose .json file from device"}</span>
              <input type="file" accept=".json,application/json" onChange={handleJsonFileUpload} className="hidden" />
            </label>

            <textarea
              rows={10}
              value={jsonInput}
              onChange={(e) => setJsonInput(e.target.value)}
              placeholder='{"sector":"garment","countryNameAr":"المملكة العربية السعودية","countryNameEn":"Saudi Arabia",...}'
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-3 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-brand-green"
              dir="ltr"
            />

            {importError && (
              <p className="rounded-xl border border-red-300 bg-red-50 p-3 text-xs font-bold text-red-700">
                {importError}
              </p>
            )}

            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setImportOpen(false)} className="rounded-full text-xs">
                {ar ? "إلغاء" : "Cancel"}
              </Button>
              <Button type="button" onClick={handleImportJson} className="rounded-full bg-slate-900 text-white hover:bg-brand-green text-xs font-bold">
                {ar ? "استيراد وحفظ" : "Validate & Import"}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Full Bilingual Study Editor Dialog */}
      <Dialog open={!!editingStudy} onOpenChange={(open) => !open && setEditingStudy(null)}>
        <DialogContent className="max-w-4xl rounded-3xl p-6 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-head text-lg font-extrabold">
              {ar ? "تحرير وتحديث بيانات الدراسة" : "Edit & Manage Market Study"}
            </DialogTitle>
            <DialogDescription className="text-xs">
              {ar
                ? "تحديث المحاور، الإحصائيات الموثقة، المصادر، ملف PDF، حالة الاعتماد، والربط بالفرص."
                : "Manage bilingual sections, cited KPIs, sources, PDF release, approval status, and links."}
            </DialogDescription>
          </DialogHeader>

          {editingStudy && (
            <div className="space-y-6 text-xs">
              {/* Metadata Grid */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div>
                  <label className="font-bold block mb-1">{ar ? "القطاع" : "Sector"}</label>
                  <select
                    value={editingStudy.sector}
                    onChange={(e) => {
                      const nextSector = e.target.value as GlobalMarketSectorId;
                      setEditingStudy({
                        ...editingStudy,
                        sector: nextSector,
                        scope: nextSector === "construction" ? "egypt_only" : "global",
                        region: nextSector === "construction" ? "egypt" : "arab_world",
                      });
                    }}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-semibold"
                  >
                    {GLOBAL_MARKET_SECTORS.map((s) => (
                      <option key={s.id} value={s.id}>
                        {ar ? s.nameAr : s.nameEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">{ar ? "المنطقة الجغرافية" : "Region"}</label>
                  <select
                    value={editingStudy.sector === "construction" ? "egypt" : editingStudy.region}
                    disabled={editingStudy.sector === "construction"}
                    onChange={(e) => setEditingStudy({ ...editingStudy, region: e.target.value as GeoRegionId })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-semibold disabled:opacity-60"
                  >
                    {GEO_REGIONS_ORDER.filter((r) =>
                      SECTOR_ALLOWED_REGIONS[editingStudy.sector].includes(r.id),
                    ).map((r) => (
                      <option key={r.id} value={r.id}>
                        {ar ? r.ar : r.en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">{ar ? "الإصدار" : "Version"}</label>
                  <input
                    type="text"
                    value={editingStudy.version}
                    onChange={(e) => setEditingStudy({ ...editingStudy, version: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                  />
                </div>

                <div>
                  <label className="font-bold block mb-1">{ar ? "حالة الدراسة" : "Study Status"}</label>
                  <select
                    value={editingStudy.status}
                    onChange={(e) => setEditingStudy({ ...editingStudy, status: e.target.value as StudyStatus })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-semibold"
                  >
                    {(Object.keys(STUDY_STATUS_LABELS) as StudyStatus[]).map((st) => (
                      <option key={st} value={st}>
                        {ar ? STUDY_STATUS_LABELS[st].ar : STUDY_STATUS_LABELS[st].en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">{ar ? "حالة الاعتماد" : "Approval Status"}</label>
                  <select
                    value={editingStudy.approvalStatus}
                    onChange={(e) =>
                      setEditingStudy({ ...editingStudy, approvalStatus: e.target.value as StudyApprovalStatus })
                    }
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-semibold"
                  >
                    {(Object.keys(APPROVAL_STATUS_LABELS) as StudyApprovalStatus[]).map((ap) => (
                      <option key={ap} value={ap}>
                        {ar ? APPROVAL_STATUS_LABELS[ap].ar : APPROVAL_STATUS_LABELS[ap].en}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-bold block mb-1">{ar ? "تاريخ آخر تحديث" : "Last Updated"}</label>
                  <input
                    type="date"
                    value={editingStudy.lastUpdated}
                    onChange={(e) => setEditingStudy({ ...editingStudy, lastUpdated: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2 font-mono"
                  />
                </div>
              </div>

              {/* Bilingual Market & Titles */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label className="font-bold block mb-1">{ar ? "اسم الدولة / السوق (عربي) *" : "Market / Country (AR) *"}</label>
                  <input
                    type="text"
                    value={editingStudy.countryNameAr}
                    onChange={(e) => setEditingStudy({ ...editingStudy, countryNameAr: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "اسم الدولة / السوق (إنجليزي) *" : "Market / Country (EN) *"}</label>
                  <input
                    type="text"
                    value={editingStudy.countryNameEn}
                    onChange={(e) => setEditingStudy({ ...editingStudy, countryNameEn: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "عنوان الدراسة (عربي) *" : "Study Title (AR) *"}</label>
                  <input
                    type="text"
                    value={editingStudy.titleAr}
                    onChange={(e) => setEditingStudy({ ...editingStudy, titleAr: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "عنوان الدراسة (إنجليزي) *" : "Study Title (EN) *"}</label>
                  <input
                    type="text"
                    value={editingStudy.titleEn}
                    onChange={(e) => setEditingStudy({ ...editingStudy, titleEn: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "نوع النشاط (عربي)" : "Activity Type (AR)"}</label>
                  <input
                    type="text"
                    value={editingStudy.activityTypeAr}
                    onChange={(e) => setEditingStudy({ ...editingStudy, activityTypeAr: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "نوع النشاط (إنجليزي)" : "Activity Type (EN)"}</label>
                  <input
                    type="text"
                    value={editingStudy.activityTypeEn}
                    onChange={(e) => setEditingStudy({ ...editingStudy, activityTypeEn: e.target.value })}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "المنتجات (مفصولة بفاصلة - عربي)" : "Product Tags (comma-separated AR)"}</label>
                  <input
                    type="text"
                    value={productTagsArText}
                    onChange={(e) => setProductTagsArText(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1">{ar ? "المنتجات (مفصولة بفاصلة - إنجليزي)" : "Product Tags (comma-separated EN)"}</label>
                  <input
                    type="text"
                    value={productTagsEnText}
                    onChange={(e) => setProductTagsEnText(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                  />
                </div>
              </div>

              {/* PDF Attachment */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-2 bg-slate-50/70">
                <label className="font-bold block">{ar ? "ملف الدراسة PDF (رابط أو رفع ملف)" : "Study PDF Asset (URL or File Upload)"}</label>
                <div className="flex flex-wrap gap-2">
                  <input
                    type="text"
                    placeholder="/downloads/study.pdf"
                    value={editingStudy.pdfUrl || ""}
                    onChange={(e) => setEditingStudy({ ...editingStudy, pdfUrl: e.target.value || undefined })}
                    className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 font-mono"
                    dir="ltr"
                  />
                  <label className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold cursor-pointer hover:bg-slate-100">
                    <Upload className="size-3.5" />
                    <span>{ar ? "رفع PDF" : "Upload PDF"}</span>
                    <input type="file" accept="application/pdf" onChange={handlePdfUpload} className="hidden" />
                  </label>
                </div>
              </div>

              {/* 18-Axis Content Editor */}
              <div className="rounded-2xl border border-slate-200 p-4 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <label className="font-extrabold text-sm">{ar ? "تحرير المحاور التحليلية (1–18)" : "Edit Analytical Axes (1–18)"}</label>
                  <select
                    value={activeSectionKey}
                    onChange={(e) => setActiveSectionKey(e.target.value as StudySectionKey)}
                    className="rounded-xl border border-slate-200 px-3 py-1.5 font-bold"
                  >
                    {STUDY_SECTION_BLUEPRINT.map((bp) => (
                      <option key={bp.key} value={bp.key}>
                        {bp.order}. {ar ? bp.titleAr : bp.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="font-bold block mb-1">{ar ? "النص العربي للمحور" : "Arabic Content"}</label>
                    <textarea
                      rows={4}
                      value={editingStudy.sections[activeSectionKey]?.summaryAr || ""}
                      onChange={(e) => {
                        const prev = editingStudy.sections[activeSectionKey] || { summaryAr: "", summaryEn: "" };
                        setEditingStudy({
                          ...editingStudy,
                          sections: {
                            ...editingStudy.sections,
                            [activeSectionKey]: { ...prev, summaryAr: e.target.value },
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-200 p-2.5"
                    />
                  </div>
                  <div>
                    <label className="font-bold block mb-1">{ar ? "النص الإنجليزي للمحور" : "English Content"}</label>
                    <textarea
                      rows={4}
                      value={editingStudy.sections[activeSectionKey]?.summaryEn || ""}
                      onChange={(e) => {
                        const prev = editingStudy.sections[activeSectionKey] || { summaryAr: "", summaryEn: "" };
                        setEditingStudy({
                          ...editingStudy,
                          sections: {
                            ...editingStudy.sections,
                            [activeSectionKey]: { ...prev, summaryEn: e.target.value },
                          },
                        });
                      }}
                      className="w-full rounded-xl border border-slate-200 p-2.5"
                    />
                  </div>
                </div>
              </div>

              {/* Add Quick KPI & Source */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold">{ar ? `المؤشرات الإحصائية (${editingStudy.kpis.length})` : `KPI Metrics (${editingStudy.kpis.length})`}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const nextKpi: StudyKpiMetric = {
                          id: `kpi-${Date.now()}`,
                          labelAr: "مؤشر جديد",
                          labelEn: "New Indicator",
                          value: "0",
                          unit: "USD",
                          source: "Official Source",
                          referenceYear: "2025",
                        };
                        setEditingStudy({ ...editingStudy, kpis: [...editingStudy.kpis, nextKpi] });
                      }}
                      className="text-brand-green font-bold hover:underline cursor-pointer"
                    >
                      + {ar ? "إضافة مؤشر" : "Add KPI"}
                    </button>
                  </div>
                  {editingStudy.kpis.map((k, idx) => (
                    <div key={k.id} className="grid grid-cols-2 gap-1.5 rounded-xl border border-slate-200 p-2">
                      <input
                        placeholder="Label AR"
                        value={k.labelAr}
                        onChange={(e) => {
                          const next = [...editingStudy.kpis];
                          next[idx] = { ...k, labelAr: e.target.value };
                          setEditingStudy({ ...editingStudy, kpis: next });
                        }}
                        className="rounded border px-2 py-1"
                      />
                      <input
                        placeholder="Value"
                        value={k.value}
                        onChange={(e) => {
                          const next = [...editingStudy.kpis];
                          next[idx] = { ...k, value: e.target.value };
                          setEditingStudy({ ...editingStudy, kpis: next });
                        }}
                        className="rounded border px-2 py-1"
                      />
                      <input
                        placeholder="Unit"
                        value={k.unit}
                        onChange={(e) => {
                          const next = [...editingStudy.kpis];
                          next[idx] = { ...k, unit: e.target.value };
                          setEditingStudy({ ...editingStudy, kpis: next });
                        }}
                        className="rounded border px-2 py-1"
                      />
                      <input
                        placeholder="Source & Year"
                        value={k.source}
                        onChange={(e) => {
                          const next = [...editingStudy.kpis];
                          next[idx] = { ...k, source: e.target.value };
                          setEditingStudy({ ...editingStudy, kpis: next });
                        }}
                        className="rounded border px-2 py-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl border border-slate-200 p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold">{ar ? `المصادر (${editingStudy.sources.length})` : `Sources (${editingStudy.sources.length})`}</span>
                    <button
                      type="button"
                      onClick={() => {
                        const nextSrc: StudySourceRecord = {
                          id: `src-${Date.now()}`,
                          name: "",
                          url: "",
                          dataYear: "2025",
                          accessedAt: new Date().toISOString().slice(0, 10),
                          classification: "official",
                        };
                        setEditingStudy({ ...editingStudy, sources: [...editingStudy.sources, nextSrc] });
                      }}
                      className="text-brand-green font-bold hover:underline cursor-pointer"
                    >
                      + {ar ? "إضافة مصدر" : "Add Source"}
                    </button>
                  </div>
                  {editingStudy.sources.map((src, idx) => (
                    <div key={src.id} className="space-y-1.5 rounded-xl border border-slate-200 p-2">
                      <input
                        placeholder={ar ? "اسم المصدر" : "Source Name"}
                        value={src.name}
                        onChange={(e) => {
                          const next = [...editingStudy.sources];
                          next[idx] = { ...src, name: e.target.value };
                          setEditingStudy({ ...editingStudy, sources: next });
                        }}
                        className="w-full rounded border px-2 py-1"
                      />
                      <div className="grid grid-cols-2 gap-1.5">
                        <select
                          value={src.classification}
                          onChange={(e) => {
                            const next = [...editingStudy.sources];
                            next[idx] = { ...src, classification: e.target.value as SourceDataClassification };
                            setEditingStudy({ ...editingStudy, sources: next });
                          }}
                          className="rounded border px-2 py-1"
                        >
                          {(Object.keys(SOURCE_CLASSIFICATION_LABELS) as SourceDataClassification[]).map((cls) => (
                            <option key={cls} value={cls}>
                              {ar ? SOURCE_CLASSIFICATION_LABELS[cls].ar : SOURCE_CLASSIFICATION_LABELS[cls].en}
                            </option>
                          ))}
                        </select>
                        <input
                          placeholder="https://..."
                          value={src.url || ""}
                          onChange={(e) => {
                            const next = [...editingStudy.sources];
                            next[idx] = { ...src, url: e.target.value || undefined };
                            setEditingStudy({ ...editingStudy, sources: next });
                          }}
                          className="rounded border px-2 py-1 font-mono"
                          dir="ltr"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-3 border-t border-slate-200">
                <Button type="button" variant="outline" onClick={() => setEditingStudy(null)} className="rounded-full text-xs">
                  {ar ? "إلغاء" : "Cancel"}
                </Button>
                <Button type="button" onClick={handleSaveStudy} className="rounded-full bg-slate-900 text-white hover:bg-brand-green text-xs font-bold px-6">
                  {ar ? "حفظ الدراسة" : "Save Study"}
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

