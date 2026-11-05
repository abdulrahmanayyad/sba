import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Search,
  Plus,
  Eye,
  Edit,
  Trash2,
  EyeOff,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  History,
  BarChart3,
  Globe2,
  FileText,
  Clock,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLanguage } from "@/i18n/language-context";
import { cn } from "@/lib/utils";
import {
  newsArticles,
  newsCategories,
  type NewsSectorType,
  type NewsArticle,
  type NewsContentType
} from "@/components/news/news-data";

export function NewsCmsTab() {
  const { language } = useLanguage();
  const ar = language === "AR";

  const [articlesList, setArticlesList] = useState<NewsArticle[]>(newsArticles);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSector, setSelectedSector] = useState<NewsSectorType>("all");
  const [selectedPeriod, setSelectedPeriod] = useState<"all" | "historical" | "modern">("all");
  const [selectedStatus, setSelectedStatus] = useState<"all" | "published" | "draft" | "hidden">("all");

  // Inspection / Edit Modal
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  // New Article Form State
  const [newTitleAr, setNewTitleAr] = useState("");
  const [newTitleEn, setNewTitleEn] = useState("");
  const [newExcerptAr, setNewExcerptAr] = useState("");
  const [newExcerptEn, setNewExcerptEn] = useState("");
  const [newBodyAr, setNewBodyAr] = useState("");
  const [newBodyEn, setNewBodyEn] = useState("");
  const [newSector, setNewSector] = useState<NewsSectorType>("corporate");
  const [newContentType, setNewContentType] = useState<NewsContentType>("corporate_news");
  const [newRefYear, setNewRefYear] = useState<number>(2026);
  const [newPublishDate, setNewPublishDate] = useState<string>(new Date().toISOString().slice(0, 10));
  const [newImage, setNewImage] = useState("/BG/Contracting & Real Estate Development/General Contracting.jpg");

  // Filtering
  const filteredArticles = useMemo(() => {
    return articlesList.filter((art) => {
      const artYear = art.historicalRefYear || art.year;
      if (selectedPeriod === "historical" && (artYear < 2010 || artYear > 2020)) return false;
      if (selectedPeriod === "modern" && artYear < 2020) return false;
      if (selectedSector !== "all" && artSectorMismatch(art.sector, selectedSector)) return false;

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inTitle = (art.titleAr + " " + art.titleEn).toLowerCase().includes(q);
        const inYear = artYear.toString().includes(q);
        const inId = art.id.toLowerCase().includes(q);
        if (!inTitle && !inYear && !inId) return false;
      }
      return true;
    });
  }, [articlesList, searchQuery, selectedSector, selectedPeriod, selectedStatus]);

  function artSectorMismatch(artSec: string, filterSec: string) {
    return artSec !== filterSec;
  }

  // Toggle Visibility
  const toggleVisibility = (id: string) => {
    setArticlesList((prev) =>
      prev.map((a) => {
        if (a.id === id) {
          const isHidden = a.type === "external";
          return { ...a, type: isHidden ? "insight" : "external" };
        }
        return a;
      })
    );
  };

  // Delete article
  const handleDeleteArticle = (id: string) => {
    if (confirm(ar ? "هل أنت متأكد من حذف هذا المقال من الأرشيف؟" : "Are you sure you want to remove this entry?")) {
      setArticlesList((prev) => prev.filter((a) => a.id !== id));
      if (activeArticle?.id === id) setActiveArticle(null);
    }
  };

  // Add new article
  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitleAr.trim() || !newTitleEn.trim()) return;

    const slug = newTitleEn.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const newArt: NewsArticle = {
      id: `sba-news-${Date.now().toString().slice(-4)}`,
      slug,
      sector: newSector,
      category: newSector.toUpperCase(),
      categoryAr: "أخبار معتمدة",
      categoryEn: "Corporate News",
      year: newRefYear,
      historicalRefYear: newRefYear,
      publishedAt: newPublishDate,
      actualPublishDate: newPublishDate,
      dateAr: newPublishDate,
      dateEn: newPublishDate,
      readingTimeAr: "3 دقائق للقراءة",
      readingTimeEn: "3 min read",
      titleAr: newTitleAr,
      titleEn: newTitleEn,
      excerptAr: newExcerptAr,
      excerptEn: newExcerptEn,
      bodyAr: newBodyAr,
      bodyEn: newBodyEn,
      image: newImage,
      imageAltAr: newTitleAr,
      imageAltEn: newTitleEn,
      seoTitleAr: newTitleAr,
      seoTitleEn: newTitleEn,
      seoDescAr: newExcerptAr,
      seoDescEn: newExcerptEn,
      keywords: ["Sami Bin Ayyad Group", "Corporate News"],
      contentType: newContentType,
      type: "insight"
    };

    setArticlesList((prev) => [newArt, ...prev]);
    setIsNewModalOpen(false);
    // Reset form
    setNewTitleAr("");
    setNewTitleEn("");
    setNewExcerptAr("");
    setNewExcerptEn("");
    setNewBodyAr("");
    setNewBodyEn("");
  };

  return (
    <div className="space-y-6">
      {/* 1. Header Bar with Metrics & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl border border-white/20 bg-background/85 shadow-md backdrop-blur-xl">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/30 bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green-text mb-2">
            <History className="size-3.5" />
            <span>{ar ? "إدارة الأرشيف والتاريخ المؤسسي" : "Corporate Archive & CMS"}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-head text-foreground">
            {ar ? "منظومة إدارة المحتوى الإخباري والأرشيف التاريخي" : "News Archive & Knowledge CMS Management"}
          </h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {ar
              ? `إجمالي المواد التوثيقية: ${articlesList.length} مادة (تشمل 11 تحليلاً تاريخياً 2010–2020 و39 تقريراً مؤسسياً).`
              : `Total Documented Entries: ${articlesList.length} records (including 11 historical reviews & 39 corporate news items).`}
          </p>
        </div>

        <Button
          type="button"
          onClick={() => setIsNewModalOpen(true)}
          className="rounded-full bg-brand-green hover:bg-brand-orange text-white text-xs font-bold gap-2 shadow-md shrink-0"
        >
          <Plus className="size-4" />
          <span>{ar ? "إضافة خبر / تحليل جديد" : "Create New Article"}</span>
        </Button>
      </div>

      {/* 2. Filters Row */}
      <div className="p-5 rounded-3xl border border-white/20 bg-background/85 shadow-sm backdrop-blur-xl space-y-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Search */}
          <div className="relative w-full lg:w-96">
            <Search className="absolute start-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={ar ? "ابحث بالعنوان، المعرف، أو السنة..." : "Search by title, ID, or year..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-2xl border border-border bg-secondary/50 py-2 ps-10 pe-4 text-xs text-foreground focus:border-brand-green focus:outline-none"
            />
          </div>

          {/* Period Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            <button
              type="button"
              onClick={() => setSelectedPeriod("all")}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedPeriod === "all" ? "!bg-brand-orange !text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {ar ? "كافة الفترات" : "All Periods"}
            </button>
            <button
              type="button"
              onClick={() => setSelectedPeriod("historical")}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedPeriod === "historical" ? "!bg-brand-orange !text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {ar ? "الأرشيف التاريخي (2010–2020)" : "Historical (2010–2020)"}
            </button>
            <button
              type="button"
              onClick={() => setSelectedPeriod("modern")}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer",
                selectedPeriod === "modern" ? "!bg-brand-orange !text-white" : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {ar ? "أخبار المجموعة (2020–2026)" : "Corporate (2020–2026)"}
            </button>
          </div>
        </div>

        {/* Sector dropdown */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border/50">
          <span className="text-xs font-bold text-muted-foreground me-1">{ar ? "تصفية بالقطاع:" : "Sector Filter:"}</span>
          {newsCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedSector(cat.id)}
              className={cn(
                "rounded-full px-3 py-1 text-[11px] font-bold transition-all cursor-pointer",
                selectedSector === cat.id
                  ? "!bg-brand-green !text-white"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {ar ? cat.titleAr : cat.titleEn}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Table of Articles */}
      <div className="overflow-hidden rounded-3xl border border-white/20 bg-background/85 shadow-lg backdrop-blur-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-start text-xs">
            <thead className="bg-secondary/60 border-b border-border text-muted-foreground uppercase font-mono tracking-wider text-[11px]">
              <tr>
                <th className="p-4 text-start">{ar ? "المعرف والسنة" : "ID & Year"}</th>
                <th className="p-4 text-start">{ar ? "عنوان المقال" : "Article Title"}</th>
                <th className="p-4 text-start">{ar ? "القطاع والنوع" : "Sector & Type"}</th>
                <th className="p-4 text-start">{ar ? "تاريخ النشر" : "Published Date"}</th>
                <th className="p-4 text-center">{ar ? "إجراءات الإدارة" : "Actions"}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/60">
              {filteredArticles.map((art) => {
                const artYear = art.historicalRefYear || art.year;
                const isHidden = art.type === "external";
                return (
                  <tr key={art.id} className="hover:bg-secondary/30 transition-colors">
                    <td className="p-4 font-mono font-bold whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className="rounded bg-brand-orange/15 text-brand-orange px-2 py-0.5 text-[10px]">
                          {artYear}
                        </span>
                        <span className="text-muted-foreground">{art.id}</span>
                      </div>
                    </td>

                    <td className="p-4 max-w-md">
                      <div className="font-bold text-foreground text-xs leading-snug line-clamp-1">
                        {ar ? art.titleAr : art.titleEn}
                      </div>
                      <div className="text-[11px] text-muted-foreground line-clamp-1 mt-0.5">
                        {ar ? art.excerptAr : art.excerptEn}
                      </div>
                    </td>

                    <td className="p-4 whitespace-nowrap">
                      <div className="font-bold text-foreground">{ar ? art.categoryAr : art.categoryEn}</div>
                      <div className="text-[10px] text-brand-green font-mono">{art.contentType || "industry_insight"}</div>
                    </td>

                    <td className="p-4 font-mono text-muted-foreground whitespace-nowrap">
                      {art.publishedAt}
                    </td>

                    <td className="p-4 text-center whitespace-nowrap">
                      <div className="flex items-center justify-center gap-1.5">
                        {/* Live Link */}
                        <Link
                          to="/news/$slug"
                          params={{ slug: art.slug }}
                          target="_blank"
                          className="size-7 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-brand-green hover:text-white transition-colors"
                          title={ar ? "معاينة على الموقع" : "Preview on Live Site"}
                        >
                          <ExternalLink className="size-3.5" />
                        </Link>

                        {/* Inspect / Edit */}
                        <button
                          type="button"
                          onClick={() => {
                            setActiveArticle(art);
                            setIsEditing(false);
                          }}
                          className="size-7 rounded-lg bg-secondary flex items-center justify-center text-foreground hover:bg-brand-orange hover:text-white transition-colors cursor-pointer"
                          title={ar ? "عرض التفاصيل" : "View Details"}
                        >
                          <Eye className="size-3.5" />
                        </button>

                        {/* Hide / Show */}
                        <button
                          type="button"
                          onClick={() => toggleVisibility(art.id)}
                          className={cn(
                            "size-7 rounded-lg flex items-center justify-center transition-colors cursor-pointer",
                            isHidden
                              ? "bg-amber-500/20 text-amber-500 hover:bg-amber-500 hover:text-white"
                              : "bg-secondary text-foreground hover:bg-muted"
                          )}
                          title={isHidden ? (ar ? "إظهار المقال" : "Show Article") : (ar ? "إخفاء المقال" : "Hide Article")}
                        >
                          {isHidden ? <EyeOff className="size-3.5" /> : <Eye className="size-3.5" />}
                        </button>

                        {/* Delete */}
                        <button
                          type="button"
                          onClick={() => handleDeleteArticle(art.id)}
                          className="size-7 rounded-lg bg-secondary flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                          title={ar ? "حذف" : "Delete"}
                        >
                          <Trash2 className="size-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4. Article Detail Dialog */}
      {activeArticle && (
        <Dialog open={!!activeArticle} onOpenChange={(open) => !open && setActiveArticle(null)}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-lg font-bold">
                <span className="rounded bg-brand-orange px-2 py-0.5 text-xs text-white font-mono">
                  {activeArticle.historicalRefYear || activeArticle.year}
                </span>
                <span>{ar ? activeArticle.titleAr : activeArticle.titleEn}</span>
              </DialogTitle>
              <DialogDescription className="text-xs">
                {ar ? `المعرف: ${activeArticle.id} | الرابط: /news/${activeArticle.slug}` : `ID: ${activeArticle.id} | Slug: /news/${activeArticle.slug}`}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4 pt-4 text-xs">
              <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-secondary/60">
                <div>
                  <span className="text-muted-foreground block text-[10px] font-bold">{ar ? "السنة المرجعية" : "Reference Year"}</span>
                  <span className="font-bold text-foreground font-mono">{activeArticle.historicalRefYear || activeArticle.year}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] font-bold">{ar ? "تاريخ النشر الفعلي" : "Publication Date"}</span>
                  <span className="font-bold text-foreground font-mono">{activeArticle.publishedAt}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] font-bold">{ar ? "القطاع" : "Sector"}</span>
                  <span className="font-bold text-foreground">{ar ? activeArticle.categoryAr : activeArticle.categoryEn}</span>
                </div>
                <div>
                  <span className="text-muted-foreground block text-[10px] font-bold">{ar ? "نوع المحتوى" : "Content Type"}</span>
                  <span className="font-bold text-brand-green font-mono">{activeArticle.contentType || "industry_insight"}</span>
                </div>
              </div>

              <div>
                <span className="font-bold block text-muted-foreground mb-1">{ar ? "الملخص العربي" : "Arabic Excerpt"}</span>
                <p className="p-3 rounded-xl bg-secondary/30 text-foreground leading-relaxed">{activeArticle.excerptAr}</p>
              </div>

              <div>
                <span className="font-bold block text-muted-foreground mb-1">{ar ? "الملخص الإنجليزي" : "English Excerpt"}</span>
                <p className="p-3 rounded-xl bg-secondary/30 text-foreground leading-relaxed">{activeArticle.excerptEn}</p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-border">
                <Button asChild variant="primary" size="sm" className="rounded-full text-xs font-bold">
                  <Link to="/news/$slug" params={{ slug: activeArticle.slug }} target="_blank">
                    <span>{ar ? "معاينة الصفحة كاملة" : "View Live Article"}</span>
                    <ExternalLink className="size-3.5 ms-1.5" />
                  </Link>
                </Button>
                <Button variant="outline" size="sm" onClick={() => setActiveArticle(null)} className="rounded-full text-xs font-bold">
                  {ar ? "إغلاق" : "Close"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* 5. Create Article Modal */}
      {isNewModalOpen && (
        <Dialog open={isNewModalOpen} onOpenChange={setIsNewModalOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">
                {ar ? "إضافة مادة إخبارية أو تحليلية جديدة" : "Create New Article Entry"}
              </DialogTitle>
              <DialogDescription className="text-xs">
                {ar
                  ? "أدخل بيانات المادة الجديدة لتضمينها في الأرشيف الموحد للموقع."
                  : "Enter article metadata and bilingual contents for immediate archival publishing."}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleCreateArticle} className="space-y-4 pt-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold block mb-1 text-foreground">{ar ? "العنوان العربي" : "Arabic Title"}</label>
                  <input
                    type="text"
                    required
                    value={newTitleAr}
                    onChange={(e) => setNewTitleAr(e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="font-bold block mb-1 text-foreground">{ar ? "العنوان الإنجليزي" : "English Title"}</label>
                  <input
                    type="text"
                    required
                    value={newTitleEn}
                    onChange={(e) => setNewTitleEn(e.target.value)}
                    className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="font-bold block mb-1 text-foreground">{ar ? "القطاع" : "Sector"}</label>
                  <select
                    value={newSector}
                    onChange={(e) => setNewSector(e.target.value as NewsSectorType)}
                    className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                  >
                    <option value="corporate">{ar ? "أخبار المجموعة" : "Corporate"}</option>
                    <option value="construction">{ar ? "المقاولات والعقارات" : "Construction"}</option>
                    <option value="environmental">{ar ? "البيئة والاستدامة" : "Environmental"}</option>
                    <option value="garment">{ar ? "التصنيع والملابس" : "Garments"}</option>
                    <option value="food">{ar ? "الأغذية والتجارة" : "Food & Trade"}</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold block mb-1 text-foreground">{ar ? "نوع المحتوى" : "Content Type"}</label>
                  <select
                    value={newContentType}
                    onChange={(e) => setNewContentType(e.target.value as NewsContentType)}
                    className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                  >
                    <option value="corporate_news">{ar ? "خبر مؤسسي" : "Corporate News"}</option>
                    <option value="corporate_milestone">{ar ? "محطة تاريخية" : "Corporate Milestone"}</option>
                    <option value="industry_insight">{ar ? "تحليل قطاعي" : "Industry Insight"}</option>
                    <option value="historical_review">{ar ? "مراجعة تاريخية" : "Historical Review"}</option>
                  </select>
                </div>
                <div>
                  <label className="font-bold block mb-1 text-foreground">{ar ? "السنة المرجعية" : "Ref Year"}</label>
                  <input
                    type="number"
                    value={newRefYear}
                    onChange={(e) => setNewRefYear(parseInt(e.target.value) || 2026)}
                    className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold block mb-1 text-foreground">{ar ? "الملخص العربي" : "Arabic Excerpt"}</label>
                <textarea
                  rows={2}
                  value={newExcerptAr}
                  onChange={(e) => setNewExcerptAr(e.target.value)}
                  className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="font-bold block mb-1 text-foreground">{ar ? "الملخص الإنجليزي" : "English Excerpt"}</label>
                <textarea
                  rows={2}
                  value={newExcerptEn}
                  onChange={(e) => setNewExcerptEn(e.target.value)}
                  className="w-full rounded-xl border border-border bg-secondary/50 p-2 text-foreground focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-4 border-t border-border">
                <Button type="button" variant="outline" size="sm" onClick={() => setIsNewModalOpen(false)} className="rounded-full text-xs font-bold">
                  {ar ? "إلغاء" : "Cancel"}
                </Button>
                <Button type="submit" variant="primary" size="sm" className="rounded-full text-xs font-bold">
                  {ar ? "نشر في الأرشيف" : "Publish Entry"}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

