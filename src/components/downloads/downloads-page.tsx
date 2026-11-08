import { useState, useMemo, useEffect } from "react";
import { Download, ExternalLink, FileText, Filter, Globe2, Layers, Search, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/language-context";
import { allCorporateDownloads, downloadCategories, downloadSectors, DownloadItem } from "./downloads-data";
import { cn } from "@/lib/utils";

export function DownloadsPage() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedLang, setSelectedLang] = useState<string>(() => (ar ? "AR" : "EN"));

  useEffect(() => {
    setSelectedLang(ar ? "AR" : "EN");
  }, [ar]);

  const filteredDownloads = useMemo(() => {
    return allCorporateDownloads.filter((doc) => {
      // Sector filter
      if (selectedSector !== "all" && doc.sector !== selectedSector) return false;
      // Category filter
      if (selectedCategory !== "all" && doc.category !== selectedCategory) return false;
      // Language filter
      if (selectedLang !== "all" && doc.language !== selectedLang && doc.language !== "Bilingual") return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchTitle = doc.titleEn.toLowerCase().includes(q) || doc.titleAr.toLowerCase().includes(q);
        const matchDesc = doc.descriptionEn.toLowerCase().includes(q) || doc.descriptionAr.toLowerCase().includes(q);
        const matchFile = doc.fileName.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchFile) return false;
      }

      return true;
    });
  }, [selectedSector, selectedCategory, selectedLang, searchQuery]);

  return (
    <div className="w-full">
      {/* 1. Hero Section (Full-width and Full-height like Home Page) */}
      <section className="relative w-full min-h-[calc(100svh-76px)] overflow-hidden text-white flex flex-col justify-center mb-12">
        <img
          src="/BG/Main Home Page.jpg"
          alt={ar ? "مركز وثائق مجموعة سامي بن عياد" : "Sami Bin Ayyad Group Documentation Center"}
          className="absolute inset-0 size-full object-cover object-center pointer-events-none select-none"
          fetchPriority="high"
        />
        <div className="group-hero-overlay absolute inset-0 bg-black/60 backdrop-blur-[1px] pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-[inherit] flex-col justify-center py-16 sm:py-24">
          <Reveal>
            {/* A. Small Top Headline (Solid Black Box) */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/85 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md shadow-md">
              <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
              <span>{ar ? "مجموعة سامي بن عياد · مركز الوثائق المؤسسية" : "SAMI BIN AYYAD GROUP · Corporate Documentation Center"}</span>
            </div>

            {/* B. Main Headline (Smaller & Proportional) */}
            <h1 className="mt-2 max-w-4xl font-head text-xl sm:text-2xl lg:text-3xl font-bold leading-snug tracking-tight text-white drop-shadow-md">
              {ar ? "مركز تحميل الوثائق والملفات التعريفية والكتالوجات المعتمدة" : "Corporate PDF Documentation & Catalogues Center"}
            </h1>

            {/* C. Subtitle */}
            <p className="mt-4 max-w-3xl text-sm sm:text-base font-medium leading-relaxed text-white/90 drop-shadow-sm">
              {ar
                ? "مكتبة وثائق رسمية متكاملة تضم الملف التعريفي الشامل للمجموعة، أدلة القدرات التشغيلية للقطاعات، كتالوجات المنتجات، ونشرات البيانات الفنية (TDS) المعدة للشركاء والمستثمرين وإدارات المشتريات الدولية."
                : "Official library of certified corporate documentation including the Complete Company Profile, sector capability dossiers, product catalogues, and technical data sheets (TDS) prepared for procurement teams, importers, and strategic partners."}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-white/80 font-mono">
              <span className="flex items-center gap-1">
                <ShieldCheck className="size-4 text-brand-orange" />
                {ar ? "وثائق معتمدة رسميًا" : "100% Certified Official Documents"}
              </span>
              <span>·</span>
              <span>{ar ? "تنسيق قياسي جاهز للطباعة A4" : "Print-Ready A4 Format"}</span>
              <span>·</span>
              <span>{ar ? "إصدار نوفمبر 2026" : "Updated November 2026"}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 2. Interactive Search & Filters Band */}
      <section className="site-container -mt-8 mb-10 z-20 relative">
        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/40 bg-background/85 p-6 shadow-xl backdrop-blur-2xl">
            <div className="grid gap-4 md:grid-cols-12 items-center">
              {/* Search Bar */}
              <div className="relative md:col-span-5">
                <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={ar ? "ابحث بالاسم أو القطاع أو رمز الملف..." : "Search documents, catalogues, TDS..."}
                  className="w-full rounded-full border border-border bg-background/90 ps-9 pe-4 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40 shadow-inner"
                />
              </div>

              {/* Category Dropdown */}
              <div className="md:col-span-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-full border border-border bg-background/90 px-4 py-2.5 text-xs text-foreground focus:outline-none focus:ring-2 focus:ring-brand-green/40 cursor-pointer shadow-inner"
                >
                  {downloadCategories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {ar ? cat.titleAr : cat.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language Toggle */}
              <div className="md:col-span-3 flex items-center justify-end gap-2">
                <span className="text-xs font-bold text-muted-foreground hidden sm:inline">
                  {ar ? "اللغة:" : "Language:"}
                </span>
                <div className="inline-flex rounded-full border border-border bg-secondary/80 p-1">
                  {[
                    { id: "all", label: ar ? "الكل" : "All" },
                    { id: "AR", label: ar ? "العربية" : "Arabic" },
                    { id: "EN", label: ar ? "الإنجليزية" : "English" },
                  ].map((l) => (
                    <button
                      key={l.id}
                      onClick={() => setSelectedLang(l.id)}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer",
                        selectedLang === l.id
                          ? "!bg-brand-green !text-white shadow-xs"
                          : "text-muted-foreground hover:text-foreground"
                      )}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sector Filter Chips */}
            <div className="mt-4 pt-4 border-t border-border/60 flex items-center gap-2 overflow-x-auto pb-1">
              <span className="text-xs font-bold text-muted-foreground shrink-0 flex items-center gap-1 me-2">
                <Filter className="size-3.5 text-brand-orange" />
                {ar ? "القطاع:" : "Sector:"}
              </span>
              {downloadSectors.map((sec) => (
                <button
                  key={sec.id}
                  onClick={() => setSelectedSector(sec.id)}
                  className={cn(
                    "rounded-full px-3.5 py-1 text-xs font-bold transition-all shrink-0 cursor-pointer border",
                    selectedSector === sec.id
                      ? "!bg-brand-green !text-white border-brand-green shadow-xs"
                      : "border-border bg-background/80 text-foreground hover:bg-secondary"
                  )}
                >
                  {ar ? sec.titleAr : sec.titleEn}
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* 3. Document Cards Grid */}
      <section className="site-container pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-head text-foreground">
              {ar ? "الوثائق المتاحة" : "Available Documents"}
            </h2>
          </div>
        </div>

        {filteredDownloads.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border bg-background/50 p-12 text-center">
            <FileText className="size-12 text-muted-foreground mx-auto mb-3 opacity-40" />
            <h3 className="font-bold text-foreground">
              {ar ? "لم يتم العثور على وثائق تطابق هذا البحث" : "No documents match the current filter"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1">
              {ar ? "يرجى تغيير خيارات البحث أو إعادة ضبط الفلاتر" : "Please adjust your search terms or reset the filters."}
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSearchQuery("");
                setSelectedSector("all");
                setSelectedCategory("all");
                setSelectedLang("all");
              }}
              className="mt-4 rounded-full"
            >
              {ar ? "إعادة ضبط الفلاتر" : "Reset All Filters"}
            </Button>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredDownloads.map((doc, idx) => (
              <Reveal key={doc.id} delay={idx * 0.04}>
                <div className="glass-card group flex h-full flex-col justify-between rounded-3xl border border-white/40 bg-background/85 p-6 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_-8px_rgba(22,135,108,0.22)]">
                  <div>
                    {/* Top Badges */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-full border border-brand-green/30 bg-brand-green/10 px-2.5 py-0.5 text-[11px] font-bold text-brand-green">
                        <Layers className="size-3" />
                        <span>{ar ? doc.categoryAr : doc.categoryEn}</span>
                      </span>

                      <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 text-[10px] font-bold text-brand-orange uppercase font-mono">
                        {doc.language === "AR" ? (ar ? "عربي" : "AR") : doc.language === "EN" ? (ar ? "إنجليزي" : "EN") : (ar ? "ثنائي اللغة" : "Bilingual")}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-head text-base sm:text-lg font-bold text-foreground group-hover:text-brand-orange transition-colors duration-200">
                      {ar ? doc.titleAr : doc.titleEn}
                    </h3>

                    {/* Sector Tag */}
                    <span className="block mt-1 text-[11px] font-bold text-muted-foreground">
                      {ar ? doc.sectorAr : doc.sectorEn}
                    </span>

                    {/* Description */}
                    <p className="mt-3 text-xs leading-relaxed text-muted-foreground/95 line-clamp-3">
                      {ar ? doc.descriptionAr : doc.descriptionEn}
                    </p>
                  </div>

                  {/* Metadata and Actions */}
                  <div className="mt-6 pt-4 border-t border-border/60">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground font-mono mb-4">
                      <span>{doc.format}</span>
                      <span>{doc.fileSize}</span>
                      <span>{doc.lastUpdated}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="w-full rounded-full !bg-brand-green !text-white hover:!bg-brand-orange transition-all duration-200 text-xs font-bold shadow-xs cursor-pointer"
                      >
                        <a href={doc.downloadUrl} download={doc.fileName} target="_blank" rel="noopener noreferrer">
                          <Download className="size-3.5 me-1.5" />
                          <span>{ar ? "تحميل PDF" : "Download"}</span>
                        </a>
                      </Button>

                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full rounded-full border-border bg-background/80 text-foreground hover:bg-secondary text-xs font-bold cursor-pointer"
                      >
                        <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="size-3.5 me-1.5" />
                          <span>{ar ? "معاينة" : "Preview"}</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* 4. Custom Document Request Banner (Interactive Glass Card) */}
      <section className="site-container pb-20">
        <Reveal>
          <div className="glass-box-interactive group rounded-3xl p-8 sm:p-12 relative overflow-hidden transition-all duration-300 text-start cursor-pointer">
            <div className="relative z-10 max-w-2xl text-start">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
                <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>
                  {ar ? "استفسارات المستندات الخاصة والمناقصات" : "Custom Tender & Technical Submittals"}
                </span>
              </div>
              <h2 className="font-head text-2xl sm:text-3xl font-extrabold text-foreground">
                {ar ? "هل تحتاج إلى مستند مخصص لمشروع أو مناقصة معينة؟" : "Need a Tailored Specification Dossier for Your Tender?"}
              </h2>
              <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                {ar
                  ? "يتولى مكتب الدعم الفني والتجاري للمجموعة إعداد المستندات الهندسية، وشهادات تحليل المختبرات (COA)، وجداول الكميات المخصصة لكبرى المشروعات والمناقصات الدولية."
                  : "Our technical and commercial engineering desk prepares bespoke project dossiers, laboratory analysis certificates (COA), and specialized technical submittals for major international tenders."}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full !bg-brand-green !text-white hover:!bg-brand-orange px-7 py-3 font-head text-xs sm:text-sm font-bold shadow-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Link to="/contact">
                    {ar ? "التواصل مع الإدارة التجارية" : "Contact Commercial Desk"}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

