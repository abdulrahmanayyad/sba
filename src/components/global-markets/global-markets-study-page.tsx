import { useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Download,
  ExternalLink,
  FileCheck2,
  Globe,
  History,
  Lock,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  APPROVAL_STATUS_LABELS,
  GEO_REGIONS_ORDER,
  GLOBAL_MARKET_SECTORS,
  SOURCE_CLASSIFICATION_LABELS,
  STUDY_SECTION_BLUEPRINT,
  STUDY_STATUS_LABELS,
  type GlobalMarketSectorId,
} from "@/lib/global-markets-data";
import {
  isStudyDownloadAllowed,
  openApprovedStudyPdfReport,
  useGlobalMarketsStudies,
} from "@/lib/global-markets-store";
import { ApparelScenarioCalculator } from "./apparel-scenario-calculator";
import { APPAREL_SUBREGIONS_META } from "@/lib/studies/apparel-41-countries";
import { StudyChartCard, StudyKpiGrid, StudyTableCard } from "./study-charts";

interface GlobalMarketsStudyPageProps {
  sectorId: GlobalMarketSectorId;
  slug: string;
  ar: boolean;
}

export function GlobalMarketsStudyPage({
  sectorId,
  slug,
  ar,
}: GlobalMarketsStudyPageProps) {
  const { studies } = useGlobalMarketsStudies();
  const sector = useMemo(
    () => GLOBAL_MARKET_SECTORS.find((s) => s.id === sectorId) ?? GLOBAL_MARKET_SECTORS[0]!,
    [sectorId],
  );

  const study = useMemo(
    () =>
      studies.find(
        (s) => s.sector === sector.id && s.slug.toLowerCase() === slug.toLowerCase(),
      ),
    [studies, sector.id, slug],
  );

  if (!study) {
    return (
      <div className="site-container py-20">
        <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-8 sm:p-10 text-start backdrop-blur-2xl shadow-lg space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-bold text-slate-700 dark:text-slate-200">
            {ar ? "الدراسة غير متوفرة حاليًا" : "Study Not Currently Available"}
          </span>
          <h1 className="font-head text-2xl font-extrabold text-slate-900 dark:text-white">
            {ar ? "لم يتم العثور على هذه الدراسة في السجل المنشور" : "Study Not Found in Published Registry"}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {ar
              ? "قد تكون الدراسة قيد البحث أو لم تُنشر بعد، أو يمكنك استيرادها عبر بوابة إدارة الدراسات."
              : "This study may still be under research or pending publication, or can be imported via the Studies Registry CMS."}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              to="/global-markets/$sector"
              params={{ sector: sector.id }}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-xs font-bold text-white dark:text-slate-900"
            >
              <span>{ar ? `العودة إلى ${sector.nameAr}` : `Back to ${sector.nameEn}`}</span>
            </Link>
            <Link
              to="/global-markets/manage"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 dark:border-white/15 px-5 py-2.5 text-xs font-bold text-slate-800 dark:text-white"
            >
              <span>{ar ? "إدارة الدراسات" : "Manage Studies"}</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const st = STUDY_STATUS_LABELS[study.status];
  const appSt = APPROVAL_STATUS_LABELS[study.approvalStatus];
  const regionLabel = GEO_REGIONS_ORDER.find((r) => r.id === study.region);
  const downloadAllowed = isStudyDownloadAllowed(study);

  const visibleSections = STUDY_SECTION_BLUEPRINT.filter((bp) => {
    const content = study.sections[bp.key];
    if (!content || content.applicable === false) return false;
    const hasSummary = Boolean((ar ? content.summaryAr : content.summaryEn)?.trim());
    const hasBullets = Boolean((ar ? content.bulletsAr : content.bulletsEn)?.length);
    return hasSummary || hasBullets;
  });

  return (
    <div className="w-full pb-24">
      {/* 1. Breadcrumb */}
      <div className="site-container pt-8 pb-3">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">
          <Link to="/global-markets" className="hover:text-slate-900 dark:hover:text-white">
            {ar ? "الأسواق العالمية" : "Global Markets"}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          <Link
            to="/global-markets/$sector"
            params={{ sector: sector.id }}
            className="hover:text-slate-900 dark:hover:text-white"
          >
            {ar ? sector.nameAr : sector.nameEn}
          </Link>
          <ChevronRight className="size-3.5 rtl:rotate-180" />
          <span className="text-slate-900 dark:text-white">
            {ar ? study.countryNameAr : study.countryNameEn}
          </span>
        </nav>
      </div>

      {/* 2. Study Header Card */}
      <section className="site-container pb-6">
        <div className="rounded-3xl border border-white/50 bg-white/80 dark:bg-slate-900/75 p-6 sm:p-10 shadow-xl backdrop-blur-2xl space-y-6 text-start">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100 dark:bg-white/10 px-3 py-1 text-xs font-bold text-slate-800 dark:text-slate-100">
                {study.countryCode ? (
                  <img
                    src={`https://flagcdn.com/w40/${study.countryCode.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w80/${study.countryCode.toLowerCase()}.png 2x`}
                    alt={ar ? study.countryNameAr : study.countryNameEn}
                    className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0"
                    loading="lazy"
                  />
                ) : study.scope === "egypt_only" ? (
                  <MapPin className="size-3.5 text-brand-orange" />
                ) : (
                  <Globe className="size-3.5 text-brand-green" />
                )}
                <span>
                  {ar ? study.countryNameAr : study.countryNameEn}
                  {regionLabel ? ` · ${ar ? regionLabel.ar : regionLabel.en}` : ""}
                </span>
              </span>

              <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", st.badgeClass)}>
                {ar ? st.ar : st.en}
              </span>

              <span className={cn("rounded-full border px-3 py-1 text-xs font-bold", appSt.badgeClass)}>
                {ar ? appSt.ar : appSt.en}
              </span>
            </div>

            {downloadAllowed ? (
              <button
                type="button"
                onClick={() => openApprovedStudyPdfReport(study, ar)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 dark:bg-white px-5 py-2.5 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors shadow-md cursor-pointer"
              >
                <Download className="size-4" />
                <span>{ar ? "تنزيل الدراسة PDF المعتمدة" : "Download Approved PDF Study"}</span>
              </button>
            ) : (
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-100/90 dark:bg-white/5 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <Lock className="size-3.5" />
                <span>
                  {ar
                    ? "تنزيل PDF متاح فقط للدراسات المكتملة والمعتمدة"
                    : "PDF export enabled only after completion & approval"}
                </span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h1 className="font-head text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight text-start">
              {ar ? study.titleAr : study.titleEn}
            </h1>
            {(ar ? study.subtitleAr : study.subtitleEn) && (
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {ar ? study.subtitleAr : study.subtitleEn}
              </p>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-slate-200/70 dark:border-white/10 text-xs text-slate-500">
            <span>
              <strong className="text-slate-800 dark:text-slate-200">{ar ? "النشاط:" : "Activity:"}</strong>{" "}
              {ar ? study.activityTypeAr : study.activityTypeEn}
            </span>
            <span>
              <strong className="text-slate-800 dark:text-slate-200">{ar ? "الإصدار:" : "Version:"}</strong>{" "}
              {study.version}
            </span>
            <span>
              <strong className="text-slate-800 dark:text-slate-200">{ar ? "تاريخ الإصدار:" : "Issued:"}</strong>{" "}
              {study.issueDate}
            </span>
            <span>
              <strong className="text-slate-800 dark:text-slate-200">{ar ? "آخر تحديث:" : "Updated:"}</strong>{" "}
              {study.lastUpdated}
            </span>
          </div>

          {(study.tradeIndicatorScopeAr || study.dataCompletenessAr) && (
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-3.5 text-xs text-slate-600 dark:text-slate-300 space-y-1">
              {study.tradeIndicatorScopeAr && (
                <div>
                  <strong className="text-slate-800 dark:text-white">
                    {ar ? "نطاق القياس:" : "Measurement Scope:"}
                  </strong>{" "}
                  <span>{ar ? study.tradeIndicatorScopeAr : study.tradeIndicatorScopeEn}</span>
                </div>
              )}
              {study.dataCompletenessAr && (
                <div>
                  <strong className="text-slate-800 dark:text-white">
                    {ar ? "اكتمال البيانات:" : "Data Completeness:"}
                  </strong>{" "}
                  <span>{ar ? study.dataCompletenessAr : study.dataCompletenessEn}</span>
                </div>
              )}
            </div>
          )}

          {study.sector === "garment" && study.apparelSubRegion && (
            <div className="pt-2 border-t border-slate-200/70 dark:border-white/10 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                <span className="font-bold text-slate-700 dark:text-slate-200">
                  {ar
                    ? `دول الإقليم (${APPAREL_SUBREGIONS_META.find((r) => r.id === study.apparelSubRegion)?.titleAr || ""}):`
                    : `Regional Peers (${APPAREL_SUBREGIONS_META.find((r) => r.id === study.apparelSubRegion)?.titleEn || ""}):`}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{
                      sector: "garment",
                      slug:
                        APPAREL_SUBREGIONS_META.find((r) => r.id === study.apparelSubRegion)
                          ?.comparativeSlug ?? "compare",
                    }}
                    className="text-[11px] font-bold text-brand-green hover:underline"
                  >
                    {ar ? "مقارنة الإقليم" : "Regional Comparison"}
                  </Link>
                  <span className="text-slate-400">·</span>
                  <Link
                    to="/global-markets/$sector/$slug"
                    params={{ sector: "garment", slug: "compare" }}
                    className="text-[11px] font-bold text-slate-800 dark:text-white hover:underline"
                  >
                    {ar ? "لوحة المقارنة الشاملة (41 دولة)" : "Global 41-Country Dashboard"}
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {studies
                  .filter(
                    (peer) =>
                      peer.sector === "garment" && peer.apparelSubRegion === study.apparelSubRegion,
                  )
                  .map((peer) => {
                    const isCur = peer.slug === study.slug;
                    return (
                      <Link
                        key={peer.id}
                        to="/global-markets/$sector/$slug"
                        params={{ sector: "garment", slug: peer.slug }}
                        className={cn(
                          "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold transition-colors",
                          isCur
                            ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900"
                            : "border-slate-200 dark:border-white/15 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:border-brand-green",
                        )}
                      >
                        {peer.countryCode && (
                          <img
                            src={`https://flagcdn.com/w40/${peer.countryCode.toLowerCase()}.png`}
                            alt={ar ? peer.countryNameAr : peer.countryNameEn}
                            className="h-3 w-4 rounded-[2px] object-cover shrink-0"
                            loading="lazy"
                          />
                        )}
                        <span>{ar ? peer.countryNameAr : peer.countryNameEn}</span>
                      </Link>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Verified KPIs */}
      {study.kpis.length > 0 && (
        <section className="site-container pb-6">
          <StudyKpiGrid kpis={study.kpis} ar={ar} />
        </section>
      )}

      {/* 4. Quick Section Index */}
      {visibleSections.length > 0 && (
        <section className="site-container pb-6">
          <div className="flex flex-wrap gap-2">
            {visibleSections.map((bp) => (
              <a
                key={bp.key}
                href={`#section-${bp.key}`}
                className="rounded-full border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/60 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-200 hover:border-brand-green hover:text-brand-green transition-colors"
              >
                {bp.order}. {ar ? bp.titleAr : bp.titleEn}
              </a>
            ))}
          </div>
        </section>
      )}

      {/* 5. Analytical Study Sections (Populated Axes Only) */}
      {visibleSections.length > 0 && (
        <section className="site-container pb-8 space-y-4">
          {visibleSections.map((bp) => {
            const content = study.sections[bp.key]!;
            const summary = ar ? content.summaryAr : content.summaryEn;
            const bullets = (ar ? content.bulletsAr : content.bulletsEn) || [];

            return (
              <article
                id={`section-${bp.key}`}
                key={bp.key}
                className="scroll-mt-24 rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/65 p-6 sm:p-8 backdrop-blur-xl shadow-sm space-y-4 text-start"
              >
                <div className="flex items-center gap-3 border-b border-slate-200/70 dark:border-white/10 pb-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-xs font-extrabold text-white dark:bg-white dark:text-slate-900">
                    {bp.order}
                  </span>
                  <h2 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {ar ? bp.titleAr : bp.titleEn}
                  </h2>
                </div>

                {summary && (
                  <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200 whitespace-pre-line">
                    {summary}
                  </p>
                )}

                {bullets.length > 0 && (
                  <ul className="grid gap-2 sm:grid-cols-2 pt-1">
                    {bullets.map((b, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 rounded-xl border border-slate-200/60 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 px-3.5 py-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200"
                      >
                        <CheckCircle2 className="size-4 shrink-0 text-brand-green mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </section>
      )}

      {/* 6. Interactive Charts & Statistical Tables */}
      {(study.charts.length > 0 || study.tables.length > 0) && (
        <section className="site-container pb-8 space-y-6">
          {study.charts.length > 0 && (
            <div className="grid gap-6 lg:grid-cols-2">
              {study.charts.map((chart) => (
                <StudyChartCard key={chart.id} chart={chart} ar={ar} />
              ))}
            </div>
          )}

          {study.tables.map((table) => (
            <StudyTableCard key={table.id} table={table} ar={ar} />
          ))}
        </section>
      )}

      {/* 7. Group Opportunities (فرص المجموعة) */}
      {study.groupOpportunities.length > 0 && (
        <section className="site-container pb-8">
          <div className="rounded-3xl border border-brand-green/25 bg-white/80 dark:bg-slate-900/70 p-6 sm:p-8 backdrop-blur-2xl shadow-md space-y-5 text-start">
            <div className="flex items-center gap-2.5 border-b border-slate-200/70 dark:border-white/10 pb-3">
              <Briefcase className="size-5 text-brand-green" />
              <div>
                <h2 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                  {ar ? "فرص المجموعة | Group Opportunities" : "Group Opportunities | فرص المجموعة"}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {ar
                    ? "ربط مخرجات الدراسة بالقدرات والأنشطة الفعلية داخل مجموعة سامي بن عياد."
                    : "Mapping verified study insights directly to SAMI BIN AYYAD GROUP capabilities."}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {study.groupOpportunities.map((opp) => (
                <div
                  key={opp.id}
                  className="rounded-2xl border border-slate-200/80 dark:border-white/15 bg-slate-50/80 dark:bg-white/5 p-5 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-head text-sm sm:text-base font-extrabold text-slate-900 dark:text-white">
                      {ar ? opp.capabilityAr : opp.capabilityEn}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full border px-2.5 py-0.5 text-[10px] font-bold",
                        opp.evidenceStatus === "confirmed"
                          ? "border-brand-green/40 bg-brand-green/10 text-brand-green"
                          : "border-slate-300 bg-white text-slate-600 dark:border-white/15 dark:bg-slate-800 dark:text-slate-300",
                      )}
                    >
                      {opp.evidenceStatus === "confirmed"
                        ? ar
                          ? "فرصة موثقة بدليل"
                          : "Confirmed with Evidence"
                        : ar
                        ? "فرصة استكشافية"
                        : "Exploratory Assessment"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ar ? opp.descriptionAr : opp.descriptionEn}
                  </p>
                  {(ar ? opp.evidenceReferenceAr : opp.evidenceReferenceEn) && (
                    <p className="text-[11px] font-semibold text-slate-500">
                      {ar ? "المرجع الداعم:" : "Supporting Reference:"}{" "}
                      {ar ? opp.evidenceReferenceAr : opp.evidenceReferenceEn}
                    </p>
                  )}
                  <Link
                    to={opp.sectorPageUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:underline"
                  >
                    <span>{ar ? "استعراض قدرات القطاع" : "Inspect Sector Capabilities"}</span>
                    {ar ? <ArrowLeft className="size-3.5" /> : <ArrowRight className="size-3.5" />}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Optional Link to Global Opportunities (/trade) — strictly only when enabled & approved */}
      {study.globalOpportunityLink?.enabled && study.globalOpportunityLink?.approved && (
        <section className="site-container pb-8">
          <div className="rounded-3xl border border-slate-300/80 dark:border-white/20 bg-slate-900 text-white p-6 sm:p-8 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-start">
            <div className="space-y-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold text-emerald-300">
                <FileCheck2 className="size-3.5" />
                <span>{ar ? "ربط معتمد بقسم الفرص العالمية" : "Approved Global Opportunities Link"}</span>
              </span>
              <h2 className="font-head text-lg sm:text-xl font-extrabold text-white">
                {ar ? study.globalOpportunityLink.titleAr : study.globalOpportunityLink.titleEn}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl">
                {ar
                  ? study.globalOpportunityLink.descriptionAr
                  : study.globalOpportunityLink.descriptionEn}
              </p>
            </div>
            <Link
              to="/trade"
              search={{ sector: study.globalOpportunityLink.tradeSectorParam }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-extrabold text-slate-900 hover:bg-brand-green hover:text-white transition-colors shrink-0"
            >
              <span>{ar ? "فتح الفرصة في الفرص العالمية" : "View in Global Opportunities"}</span>
              {ar ? <ArrowLeft className="size-4" /> : <ArrowRight className="size-4" />}
            </Link>
          </div>
        </section>
      )}

      {/* Interactive Capacity & Price Scenario Calculator (Section 14) */}
      {(study.enableScenarioCalculator || study.sector === "garment") && (
        <section className="site-container pb-8">
          <ApparelScenarioCalculator
            countryNameAr={study.countryNameAr}
            countryNameEn={study.countryNameEn}
            ar={ar}
          />
        </section>
      )}

      {/* 9. Sources & Data (المصادر والبيانات) */}
      <section className="site-container pb-8">
        <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/65 p-6 sm:p-8 backdrop-blur-xl shadow-sm space-y-5 text-start">
          <div className="flex items-center gap-2.5 border-b border-slate-200/70 dark:border-white/10 pb-3">
            <BookOpen className="size-5 text-slate-800 dark:text-white" />
            <div>
              <h2 className="font-head text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {ar ? "المصادر والبيانات | Sources & Data" : "Sources & Data | المصادر والبيانات"}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {ar
                  ? "تصنيف منهجي يميز بين البيانات الرسمية، وتقديرات المؤسسات البحثية، والبيانات التجارية، والتحليلات، والافتراضات المالية."
                  : "Methodological classification distinguishing official data, research estimates, trade records, analysis, and financial assumptions."}
              </p>
            </div>
          </div>

          {study.sources.length === 0 ? (
            <p className="text-xs text-slate-500">
              {ar ? "لم تُدرج مصادر موثقة في هذا الإصدار بعد." : "No verified sources attached to this revision yet."}
            </p>
          ) : (
            <div className="grid gap-3">
              {study.sources.map((src) => {
                const cls = SOURCE_CLASSIFICATION_LABELS[src.classification];
                return (
                  <div
                    key={src.id}
                    className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-slate-50/80 dark:bg-white/5 p-4 space-y-2"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-head text-sm font-bold text-slate-900 dark:text-white">
                        {src.name}
                      </span>
                      <span className={cn("rounded-full border px-2.5 py-0.5 text-[10px] font-bold", cls.badgeClass)}>
                        {ar ? cls.ar : cls.en}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
                      <span>{ar ? `سنة البيانات: ${src.dataYear}` : `Data Year: ${src.dataYear}`}</span>
                      <span>{ar ? `تاريخ الاطلاع/التحديث: ${src.accessedAt}` : `Accessed/Updated: ${src.accessedAt}`}</span>
                      {src.url && (
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-brand-green hover:underline"
                        >
                          <span>{ar ? "رابط المصدر" : "Source URL"}</span>
                          <ExternalLink className="size-3" />
                        </a>
                      )}
                    </div>
                    {(ar ? src.methodologyNoteAr : src.methodologyNoteEn) && (
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {ar ? src.methodologyNoteAr : src.methodologyNoteEn}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 10. Archived Versions History (if any) */}
      {study.archivedVersions && study.archivedVersions.length > 0 && (
        <section className="site-container">
          <div className="rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/70 dark:bg-slate-900/50 p-6 space-y-3 text-start">
            <div className="flex items-center gap-2 text-sm font-extrabold text-slate-800 dark:text-white">
              <History className="size-4 text-slate-500" />
              <span>{ar ? "الإصدارات السابقة المؤرشفة" : "Archived Previous Versions"}</span>
            </div>
            <div className="space-y-2">
              {study.archivedVersions.map((ver, i) => (
                <div
                  key={i}
                  className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200/70 dark:border-white/10 px-4 py-2.5 text-xs text-slate-600 dark:text-slate-300"
                >
                  <span className="font-bold">v{ver.version}</span>
                  <span>{ar ? `تاريخ الأرشفة: ${ver.archivedAt}` : `Archived: ${ver.archivedAt}`}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

