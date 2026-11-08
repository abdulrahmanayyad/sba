import React, { useState, useMemo } from "react";
import { 
  FileSpreadsheet, 
  Upload, 
  Download, 
  Search, 
  Filter, 
  Plus, 
  CheckCircle2, 
  Clock, 
  Building2, 
  Globe, 
  Package, 
  AlertCircle,
  FileCheck,
  Edit2,
  Trash2,
  Eye,
  Ship,
  TrendingUp,
  X,
  FileText
} from "lucide-react";
import * as XLSX from "xlsx";
import { 
  ALL_INQUIRIES, 
  TRADE_STATS, 
  COUNTRY_META, 
  TradeInquiryRecord 
} from "@/lib/trade-data";

export const INQUIRY_LIFECYCLE_STATUSES = [
  "New Inquiry",
  "Under Review",
  "Quotation Requested",
  "Quotation Submitted",
  "Negotiation",
  "Confirmed Order",
  "Contracted",
  "Shipped",
  "Completed",
  "Cancelled",
  "Archived"
] as const;

export function TradeCmsTab() {
  const [inquiries, setInquiries] = useState<TradeInquiryRecord[]>(ALL_INQUIRIES);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDataset, setSelectedDataset] = useState("all");
  const [selectedRecord, setSelectedRecord] = useState<TradeInquiryRecord | null>(null);

  // Upload feedback state
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // New Record Modal State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCountryAr, setNewCountryAr] = useState("الإمارات العربية المتحدة");
  const [newProductAr, setNewProductAr] = useState("");
  const [newCategory, setNewCategory] = useState<TradeInquiryRecord["category"]>("dates");
  const [newQuantity, setNewQuantity] = useState("");
  const [newStatus, setNewStatus] = useState("New Inquiry");
  const [newNotes, setNewNotes] = useState("");

  const filtered = useMemo(() => {
    return inquiries.filter((inq) => {
      const matchSearch =
        !search ||
        inq.id.toLowerCase().includes(search.toLowerCase()) ||
        inq.countryAr.includes(search) ||
        inq.countryEn.toLowerCase().includes(search.toLowerCase()) ||
        inq.productNameAr.includes(search);

      const matchCat = selectedCategory === "all" || inq.category === selectedCategory;
      const matchStat = selectedStatus === "all" || inq.inquiryStatus === selectedStatus;
      const matchData =
        selectedDataset === "all" ||
        (selectedDataset === "dates" && inq.sourceDataset.includes("تمور")) ||
        (selectedDataset === "diversified" && inq.sourceDataset.includes("متنوعة"));

      return matchSearch && matchCat && matchStat && matchData;
    });
  }, [inquiries, search, selectedCategory, selectedStatus, selectedDataset]);

  // Handle Excel File Upload
  const handleExcelUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const bstr = evt.target?.result;
        const wb = XLSX.read(bstr, { type: "binary" });
        const wsName = wb.SheetNames[0];
        const ws = wb.Sheets[wsName];
        const rows: any[][] = XLSX.utils.sheet_to_json(ws, { header: 1 });

        let headerIdx = -1;
        for (let i = 0; i < 10; i++) {
          if (rows[i] && (rows[i].includes("المشتري من") || rows[i].includes("اسم المنتج"))) {
            headerIdx = i;
            break;
          }
        }

        if (headerIdx === -1) {
          setImportStatus("لم يتم العثور على الأعمدة المطلوبة في الملف المرفوع.");
          return;
        }

        let newRecordsCount = 0;
        let duplicateCount = 0;
        const newRecords: TradeInquiryRecord[] = [];

        for (let i = headerIdx + 1; i < rows.length; i++) {
          const r = rows[i];
          if (!r || !r[0] || typeof r[0] !== "number") continue;

          const countryAr = r[2] ? String(r[2]).trim() : "غير محدد";
          const productAr = r[3] ? String(r[3]).trim() : "منتج زراعي";

          // Duplicate check
          const exists = inquiries.some(
            (item) => item.countryAr === countryAr && item.productNameAr === productAr
          );

          if (exists) {
            duplicateCount++;
            continue;
          }

          const meta = COUNTRY_META[countryAr] || {
            en: countryAr,
            code: "XX",
            flag: "🌐",
            continent: "Other",
            continentAr: "أخرى",
            lat: 0,
            lng: 0,
          };

          const newId = `IMP-2025-${String(inquiries.length + newRecords.length + 1).padStart(3, "0")}`;

          newRecords.push({
            id: newId,
            originalIndex: inquiries.length + newRecords.length + 1,
            sourceDataset: file.name,
            category: "commodities",
            categoryNameAr: "سلع زراعية متنوعة",
            categoryNameEn: "Other Commodities",
            inquiryDate: new Date().toISOString().split("T")[0],
            countryAr,
            countryEn: meta.en,
            countryCode: meta.code,
            countryFlag: meta.flag,
            continent: meta.continent,
            continentAr: meta.continentAr,
            productNameAr: productAr,
            quantityRequested: r[6] ? String(r[6]).trim() : "",
            buyerTypeAr: "شركة تجارة دولية مستوردة",
            buyerTypeEn: "International Trading Co.",
            inquiryStatus: "New Inquiry",
            inquiryStatusAr: "طلب جديد وارد",
            relationshipStatus: "Pending Verification",
          });
          newRecordsCount++;
        }

        setInquiries((prev) => [...prev, ...newRecords]);
        setImportStatus(
          `تم بنجاح استيراد ${newRecordsCount} سجلاً جديداً. (تم تجاهل ${duplicateCount} سجلاً مكرراً)`
        );
      } catch (err: any) {
        setImportStatus(`خطأ في معالجة الملف: ${err.message}`);
      }
    };
    reader.readAsBinaryString(file);
  };

  // Update Status
  const handleUpdateStatus = (id: string, status: string) => {
    setInquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, inquiryStatus: status } : item))
    );
  };

  // Export to CSV
  const handleExportCSV = () => {
    const ws = XLSX.utils.json_to_sheet(inquiries);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Inquiries_2025");
    XLSX.writeFile(wb, "SBA_Trade_Inquiries_2025_Export.xlsx");
  };

  // Create new record
  const handleCreateRecord = (e: React.FormEvent) => {
    e.preventDefault();
    const meta = COUNTRY_META[newCountryAr] || {
      en: newCountryAr,
      code: "XX",
      flag: "🌐",
      continent: "Other",
      continentAr: "أخرى",
      lat: 0,
      lng: 0,
    };

    const newId = `MAN-2025-${String(inquiries.length + 1).padStart(3, "0")}`;

    const rec: TradeInquiryRecord = {
      id: newId,
      originalIndex: inquiries.length + 1,
      sourceDataset: "Manual Entry / لوحة التحكم",
      category: newCategory,
      categoryNameAr: newCategory === "dates" ? "التمور ومنتجاتها" : "سلع زراعية متنوعة",
      categoryNameEn: newCategory === "dates" ? "Dates & Date Products" : "Commodities",
      inquiryDate: new Date().toISOString().split("T")[0],
      countryAr: newCountryAr,
      countryEn: meta.en,
      countryCode: meta.code,
      countryFlag: meta.flag,
      continent: meta.continent,
      continentAr: meta.continentAr,
      productNameAr: newProductAr,
      quantityRequested: newQuantity,
      buyerDetails: newNotes,
      buyerTypeAr: "شركة تجارة واستيراد",
      buyerTypeEn: "Trading & Import Co.",
      inquiryStatus: newStatus,
      inquiryStatusAr: newStatus,
      relationshipStatus: "Pending Verification",
    };

    setInquiries([rec, ...inquiries]);
    setIsAddModalOpen(false);
    setNewProductAr("");
    setNewQuantity("");
    setNewNotes("");
  };

  return (
    <div className="space-y-6">
      {/* Top Banner & Stats */}
      <div className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-background/80 p-6 backdrop-blur-xl shadow-xl lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-orange">
            <FileSpreadsheet className="size-4" />
            <span>نظام إدارة التجارة الدولية والأرشيف التصديري (2025)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-foreground mt-1">
            قاعدة بيانات استفسارات المشترين والأسواق الدولية
          </h2>
          <p className="text-xs text-muted-foreground mt-1 max-w-2xl">
            إدارة وتدقيق 179 سجلاً أصلياً من ملفي (بيان تصدير تمور 2025 & بيان تصدير منتجات متنوعة 2025)، مع إمكانية استيراد ملفات جديدة وتتبع دورة حياة الطلبات.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          {/* File Upload Button */}
          <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-white/15">
            <Upload className="size-4 text-emerald-400" />
            <span>استيراد ملف Excel</span>
            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={handleExcelUpload}
              className="hidden"
            />
          </label>

          {/* Export Button */}
          <button
            type="button"
            onClick={handleExportCSV}
            className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-xs font-bold text-foreground hover:bg-white/15"
          >
            <Download className="size-4 text-brand-orange" />
            <span>تصدير Excel</span>
          </button>

          {/* Add Record */}
          <button
            type="button"
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 px-4 py-2.5 text-xs font-bold text-white shadow-md hover:from-emerald-500 hover:to-teal-600"
          >
            <Plus className="size-4" />
            <span>إضافة استفسار يدوي</span>
          </button>
        </div>
      </div>

      {/* Import Status Alert */}
      {importStatus && (
        <div className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-xs text-emerald-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 shrink-0 text-emerald-400" />
            <span>{importStatus}</span>
          </div>
          <button
            type="button"
            onClick={() => setImportStatus(null)}
            className="text-emerald-400 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {/* Key Metric Counters */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
          <span className="text-2xl font-black text-brand-orange font-mono">
            {inquiries.length}
          </span>
          <p className="text-xs font-bold text-foreground mt-0.5">إجمالي السجلات المسجلة</p>
          <span className="text-[11px] text-muted-foreground">179 سجل أصلي + الإضافات</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
          <span className="text-2xl font-black text-emerald-400 font-mono">
            {new Set(inquiries.map((i) => i.countryAr)).size}
          </span>
          <p className="text-xs font-bold text-foreground mt-0.5">الدول والأسواق المستهدفة</p>
          <span className="text-[11px] text-muted-foreground">47 دولة موثقة حول العالم</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
          <span className="text-2xl font-black text-amber-400 font-mono">
            {inquiries.filter((i) => i.sourceDataset.includes("تمور")).length}
          </span>
          <p className="text-xs font-bold text-foreground mt-0.5">سجلات استفسارات التمور</p>
          <span className="text-[11px] text-muted-foreground">بيان تمور 2025</span>
        </div>

        <div className="rounded-2xl border border-white/10 bg-background/60 p-4">
          <span className="text-2xl font-black text-teal-400 font-mono">
            {inquiries.filter((i) => i.sourceDataset.includes("متنوعة")).length}
          </span>
          <p className="text-xs font-bold text-foreground mt-0.5">سجلات السلع المتنوعة</p>
          <span className="text-[11px] text-muted-foreground">بيان منتجات متنوعة 2025</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-background/60 p-4 backdrop-blur-xl md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute start-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="ابحث بالكود، الدولة، المنتج..."
            className="w-full rounded-xl border border-white/15 bg-background/50 py-1.5 pe-4 ps-9 text-xs text-foreground placeholder:text-muted-foreground focus:border-brand-orange focus:outline-none"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Dataset Filter */}
          <select
            value={selectedDataset}
            onChange={(e) => setSelectedDataset(e.target.value)}
            className="rounded-xl border border-white/15 bg-background/70 px-3 py-1.5 text-foreground focus:border-brand-orange focus:outline-none"
          >
            <option value="all">كافة مصادر البيانات (179)</option>
            <option value="dates">بيان تمور 2025 (66)</option>
            <option value="diversified">بيان منتجات متنوعة 2025 (113)</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="rounded-xl border border-white/15 bg-background/70 px-3 py-1.5 text-foreground focus:border-brand-orange focus:outline-none"
          >
            <option value="all">كافة الحالات</option>
            {INQUIRY_LIFECYCLE_STATUSES.map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto rounded-3xl border border-white/15 bg-background/60 shadow-xl backdrop-blur-xl max-h-[600px]">
        <table className="w-full text-start text-xs">
          <thead className="bg-white/10 text-muted-foreground text-[11px] sticky top-0 backdrop-blur-md z-10">
            <tr>
              <th className="p-3 text-start">الكود والمصدر</th>
              <th className="p-3 text-start">التاريخ</th>
              <th className="p-3 text-start">الدولة</th>
              <th className="p-3 text-start">المنتج المطلوب</th>
              <th className="p-3 text-start">الكمية المسجلة</th>
              <th className="p-3 text-start">حالة الطلب (Lifecycle)</th>
              <th className="p-3 text-center">إجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {filtered.map((inq) => (
              <tr key={inq.id} className="hover:bg-white/5 transition-colors">
                <td className="p-3">
                  <span className="font-mono font-bold text-brand-orange block">{inq.id}</span>
                  <span className="text-[10px] text-muted-foreground truncate max-w-[120px] block">
                    {inq.sourceDataset}
                  </span>
                </td>
                <td className="p-3 font-mono text-muted-foreground whitespace-nowrap">
                  {inq.inquiryDate}
                </td>
                <td className="p-3">
                  <span className="flex items-center gap-1.5 font-bold text-foreground">
                    <span>{inq.countryFlag}</span>
                    <span>{inq.countryAr}</span>
                  </span>
                  <span className="text-[10px] text-muted-foreground">{inq.continentAr}</span>
                </td>
                <td className="p-3">
                  <span className="font-semibold text-foreground block">{inq.productNameAr}</span>
                  {inq.variety && (
                    <span className="text-[10px] text-amber-400 block">{inq.variety}</span>
                  )}
                </td>
                <td className="p-3 font-semibold text-emerald-400">
                  {inq.quantityRequested || "-"}
                </td>
                <td className="p-3">
                  <select
                    value={inq.inquiryStatus}
                    onChange={(e) => handleUpdateStatus(inq.id, e.target.value)}
                    className="rounded-lg border border-white/20 bg-background/80 px-2 py-1 text-[11px] font-bold text-foreground focus:border-brand-orange focus:outline-none"
                  >
                    {INQUIRY_LIFECYCLE_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="p-3 text-center">
                  <button
                    type="button"
                    onClick={() => setSelectedRecord(inq)}
                    className="rounded-lg bg-white/10 p-1.5 text-muted-foreground hover:bg-white/20 hover:text-brand-orange"
                    title="معاينة التفاصيل"
                  >
                    <Eye className="size-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Record Inspection Modal */}
      {selectedRecord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl">
            <button
              type="button"
              onClick={() => setSelectedRecord(null)}
              className="absolute end-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div className="border-b border-white/10 pb-4 mb-4">
              <span className="font-mono text-xs font-bold text-brand-orange">
                {selectedRecord.id}
              </span>
              <h3 className="text-xl font-bold text-foreground mt-1">
                تفاصيل الاستفسار التجاري: {selectedRecord.productNameAr}
              </h3>
              <p className="text-xs text-muted-foreground">
                المصدر الأصلي: {selectedRecord.sourceDataset} • التاريخ: {selectedRecord.inquiryDate}
              </p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                <div>
                  <span className="text-muted-foreground block text-[11px]">الدولة المستوردة:</span>
                  <span className="font-bold text-foreground flex items-center gap-1.5 mt-0.5">
                    <span>{selectedRecord.countryFlag}</span>
                    <span>{selectedRecord.countryAr} ({selectedRecord.countryEn})</span>
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[11px]">حالة الطلب الحالية:</span>
                  <span className="font-bold text-emerald-400 mt-0.5 block">
                    {selectedRecord.inquiryStatus}
                  </span>
                </div>
              </div>

              {selectedRecord.quantityRequested && (
                <div className="rounded-xl border border-brand-green/30 bg-brand-green/10 p-3">
                  <span className="text-brand-green font-bold block text-[11px]">الكمية المطلوبة:</span>
                  <p className="text-sm font-black text-brand-green mt-0.5">
                    {selectedRecord.quantityRequested}
                  </p>
                </div>
              )}

              {selectedRecord.specifications && (
                <div>
                  <span className="text-muted-foreground font-semibold block text-[11px]">المواصفات الفنية:</span>
                  <p className="text-foreground leading-relaxed font-medium mt-0.5">
                    {selectedRecord.specifications}
                  </p>
                </div>
              )}

              {selectedRecord.buyerDetails && (
                <div>
                  <span className="text-muted-foreground font-semibold block text-[11px]">بيانات وطلبات المشتري:</span>
                  <p className="text-foreground/90 leading-relaxed italic border-s-2 border-brand-orange/40 ps-2 mt-0.5">
                    "{selectedRecord.buyerDetails}"
                  </p>
                </div>
              )}

              <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] text-muted-foreground border-t border-white/10">
                <div>
                  <span className="block text-[10px]">شروط الشحن:</span>
                  <span className="font-bold text-foreground">{selectedRecord.shippingTerms || "غير محدد"}</span>
                </div>
                <div>
                  <span className="block text-[10px]">ميناء الوجهة:</span>
                  <span className="font-bold text-foreground">{selectedRecord.destinationPort || "غير محدد"}</span>
                </div>
                <div>
                  <span className="block text-[10px]">شروط الدفع:</span>
                  <span className="font-bold text-foreground">{selectedRecord.paymentTerms || "غير محدد"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Manual Add Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-background/95 p-6 shadow-2xl backdrop-blur-2xl">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="absolute end-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-white/10 hover:text-foreground"
            >
              <X className="size-5" />
            </button>

            <div className="border-b border-white/10 pb-4 mb-4">
              <h3 className="text-lg font-bold text-foreground">
                تسجيل استفسار تجاري جديد
              </h3>
              <p className="text-xs text-muted-foreground">
                إضافة استفسار جديد يدوياً إلى قاعدة بيانات التجارة الدولية 2025.
              </p>
            </div>

            <form onSubmit={handleCreateRecord} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-foreground block mb-1">الدولة المستوردة *</label>
                  <select
                    value={newCountryAr}
                    onChange={(e) => setNewCountryAr(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                  >
                    {Object.keys(COUNTRY_META).map((c) => (
                      <option key={c} value={c}>
                        {COUNTRY_META[c].flag} {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="font-semibold text-foreground block mb-1">فئة المنتج *</label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                  >
                    <option value="dates">تمور ومنتجاتها</option>
                    <option value="spices">توابل وبهارات</option>
                    <option value="vegetables">خضروات وفواكه</option>
                    <option value="seeds_grains">حبوب وبذور</option>
                    <option value="herbs_powders">أعشاب ومستخلصات</option>
                    <option value="commodities">سلع زراعية متنوعة</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">اسم المنتج المطلوب *</label>
                <input
                  type="text"
                  required
                  value={newProductAr}
                  onChange={(e) => setNewProductAr(e.target.value)}
                  placeholder="مثال: تمر مجدول جامبو، بصل أحمر تصدير..."
                  className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-semibold text-foreground block mb-1">الكمية المطلوبة</label>
                  <input
                    type="text"
                    value={newQuantity}
                    onChange={(e) => setNewQuantity(e.target.value)}
                    placeholder="مثال: حاوية 20 قدم، 50 طن..."
                    className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-semibold text-foreground block mb-1">حالة الاستفسار</label>
                  <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                  >
                    {INQUIRY_LIFECYCLE_STATUSES.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="font-semibold text-foreground block mb-1">ملاحظات وطلبات المشتري</label>
                <textarea
                  rows={3}
                  value={newNotes}
                  onChange={(e) => setNewNotes(e.target.value)}
                  placeholder="شروط الشحن، تفاصيل التعبئة..."
                  className="w-full rounded-xl border border-white/20 bg-background/60 p-2 text-foreground focus:border-brand-orange focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-emerald-600 to-teal-700 py-2.5 font-bold text-white shadow-md hover:from-emerald-500 hover:to-teal-600"
                >
                  حفظ الاستفسار في قاعدة البيانات
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

