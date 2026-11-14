const fs = require('fs');

let page = fs.readFileSync('src/components/global-markets/global-markets-sector-page.tsx', 'utf8');

// Replace the filter inputs section (lines around 310-348)
const oldSelectsSection = `<select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | StudyStatus)}
              aria-label={ar ? "حالة الدراسة" : "Study Status"}
              className={cn(
                "rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none",
                isEgyptOnly ? "md:col-span-3" : "md:col-span-2",
              )}
            >
              <option value="all">{ar ? "كافة الحالات" : "All Statuses"}</option>
              {(["in_research", "under_review", "completed", "needs_update"] as StudyStatus[]).map((st) => (
                <option key={st} value={st}>
                  {ar ? STUDY_STATUS_LABELS[st].ar : STUDY_STATUS_LABELS[st].en}
                </option>
              ))}
            </select>

            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              aria-label={ar ? "سنة التحديث" : "Update Year"}
              className={cn(
                "rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none",
                isEgyptOnly ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <option value="all">{ar ? "السنة" : "Year"}</option>
              {availableYears.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>`;

const newSelectsSection = `<select
              value={tierFilter}
              onChange={(e) => setTierFilter(e.target.value)}
              aria-label={ar ? "مستوى الفرصة" : "Opportunity Tier"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "كافة مستويات الفرص" : "All Opportunity Tiers"}</option>
              <option value="tier1">{ar ? "المستوى الأول (80+ فرصة قصوى)" : "Tier 1 (80+ Very High)"}</option>
              <option value="tier2">{ar ? "المستوى الثاني (65–79 فرصة مرتفعة)" : "Tier 2 (65-79 High)"}</option>
              <option value="tier3">{ar ? "المستوى الثالث (50–64 فرصة واعدة)" : "Tier 3 (50-64 Moderate)"}</option>
              <option value="tier4">{ar ? "المستوى الرابع (<50 فرصة ناشئة)" : "Tier 4 (<50 Emerging)"}</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as "score" | "name" | "imports")}
              aria-label={ar ? "الترتيب" : "Sort By"}
              className="md:col-span-2 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-3 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="score">{ar ? "ترتيب: أعلى تقييم فرصة" : "Sort: Opportunity Score"}</option>
              <option value="imports">{ar ? "ترتيب: حجم الواردات" : "Sort: Total Imports"}</option>
              <option value="name">{ar ? "ترتيب: اسم الدولة" : "Sort: Country Name"}</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as "all" | StudyStatus)}
              aria-label={ar ? "حالة الدراسة" : "Study Status"}
              className="md:col-span-1 rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-slate-950/60 px-2 py-2.5 text-xs font-semibold focus:outline-none"
            >
              <option value="all">{ar ? "الحالة" : "Status"}</option>
              {(["in_research", "under_review", "completed", "needs_update"] as StudyStatus[]).map((st) => (
                <option key={st} value={st}>
                  {ar ? STUDY_STATUS_LABELS[st].ar : STUDY_STATUS_LABELS[st].en}
                </option>
              ))}
            </select>`;

page = page.replace(oldSelectsSection, newSelectsSection);

// Replace card markup
const oldCardMarkupRegex = /<div\s+key=\{study\.id\}\s+className="interactive-card glass-box-interactive flex flex-col justify-between rounded-3xl border border-slate-200\/80 dark:border-white\/15 bg-white\/80 dark:bg-slate-900\/70 p-6 backdrop-blur-2xl shadow-md space-y-5 text-start"[\s\S]*?<\/div>\s*<\/div>\s*\);\s*\}\)/;

const newCardMarkup = `<div
                  key={study.id}
                  className="interactive-card glass-box-interactive flex flex-col justify-between rounded-3xl border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/70 p-6 backdrop-blur-2xl shadow-md space-y-4 text-start relative overflow-hidden"
                >
                  <div className="space-y-3">
                    {/* Top Row: Subregion, Opportunity Score & Regional Rank */}
                    <div className="flex flex-wrap items-center justify-between gap-1.5 text-[11px]">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 dark:bg-white/10 px-2.5 py-0.5 font-bold text-slate-700 dark:text-slate-200">
                          {regionLabel ? (ar ? regionLabel.ar : regionLabel.en) : study.region}
                        </span>
                        {typeof study.regionalRank === "number" && (
                          <span className="rounded-full bg-brand-green/15 text-brand-green px-2 py-0.5 font-extrabold text-[10px]">
                            {ar ? \`الترتيب #\${study.regionalRank}\` : \`Rank #\${study.regionalRank}\`}
                          </span>
                        )}
                      </div>

                      {typeof study.opportunityScore === "number" ? (
                        <div className="flex items-center gap-1.5">
                          <span className={cn(
                            "rounded-full px-2.5 py-0.5 font-mono font-extrabold text-xs shadow-xs",
                            study.opportunityScore >= 80
                              ? "bg-emerald-500 text-white"
                              : study.opportunityScore >= 65
                              ? "bg-blue-600 text-white"
                              : "bg-amber-600 text-white"
                          )}>
                            {study.opportunityScore}/100
                          </span>
                        </div>
                      ) : (
                        <span className={cn("rounded-full border px-2.5 py-0.5 font-bold", st.badgeClass)}>
                          {ar ? st.ar : st.en}
                        </span>
                      )}
                    </div>

                    {/* Country Header */}
                    <div>
                      <div className="flex items-center gap-2">
                        {study.countryCode && (
                          <img
                            src={\`https://flagcdn.com/w40/\${study.countryCode.toLowerCase()}.png\`}
                            srcSet={\`https://flagcdn.com/w80/\${study.countryCode.toLowerCase()}.png 2x\`}
                            alt={ar ? study.countryNameAr : study.countryNameEn}
                            className="h-4 w-6 rounded-[3px] object-cover border border-slate-300/60 dark:border-white/20 shrink-0 shadow-xs"
                            loading="lazy"
                          />
                        )}
                        <h3 className="font-head text-lg font-extrabold text-slate-900 dark:text-white leading-snug">
                          {ar ? study.countryNameAr : study.countryNameEn}
                        </h3>
                      </div>

                      {/* Opportunity Tier Badge */}
                      {study.opportunityTierAr && (
                        <div className="mt-1.5 flex items-center gap-1.5 text-[11px] font-extrabold">
                          <span className={cn(
                            "rounded-lg px-2 py-0.5",
                            (study.opportunityScore ?? 0) >= 80
                              ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30"
                              : (study.opportunityScore ?? 0) >= 65
                              ? "bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/30"
                              : "bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                          )}>
                            {ar ? study.opportunityTierAr : study.opportunityTier}
                          </span>
                        </div>
                      )}

                      {/* Trade Indicator */}
                      <p className="text-xs font-bold text-slate-700 dark:text-slate-200 mt-2 flex items-center gap-1.5">
                        <span className="text-slate-500 dark:text-slate-400">{ar ? "واردات الملابس:" : "Apparel Imports:"}</span>
                        <span className="text-brand-green font-mono font-extrabold">{study.tradeIndicatorDisplay}</span>
                        <span className="text-[10px] text-slate-500">({study.tradeIndicatorYear})</span>
                      </p>

                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {ar ? study.subtitleAr : study.subtitleEn}
                      </p>
                    </div>

                    {/* Prospective Target Accounts Note */}
                    {study.sections.potentialBuyers?.summaryAr && (
                      <div className="rounded-xl border border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-white/5 p-2.5 text-[11px] text-slate-600 dark:text-slate-300 space-y-1">
                        <div className="font-extrabold text-slate-700 dark:text-slate-200 flex items-center justify-between">
                          <span>{ar ? "حسابات مستهدفة محتملة (غير مؤكدة):" : "Target Accounts (Prospective / Unconfirmed):"}</span>
                        </div>
                        <p className="line-clamp-2 text-slate-600 dark:text-slate-400">
                          {ar
                            ? study.sections.potentialBuyers.summaryAr.replace(/^.*?:\\s*/, "")
                            : study.sections.potentialBuyers.summaryEn.replace(/^.*?:\\s*/, "")}
                        </p>
                      </div>
                    )}

                    {/* Product Tags */}
                    <div className="flex flex-wrap gap-1">
                      {(ar ? study.productTagsAr : study.productTagsEn).slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="rounded-lg border border-slate-200/70 dark:border-white/10 bg-slate-50 dark:bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-slate-600 dark:text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions: View Study & Download Study */}
                  <div className="space-y-2 pt-3 border-t border-slate-200/70 dark:border-white/10">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to="/global-markets/$sector/$slug"
                        params={{ sector: study.sector, slug: study.slug }}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-white px-3 py-2 text-xs font-bold text-white dark:text-slate-900 hover:bg-brand-green dark:hover:bg-brand-green dark:hover:text-white transition-colors"
                      >
                        <span>{ar ? "عرض الدراسة الكاملة" : "View Full Study"}</span>
                        {ar ? <ArrowLeft className="size-3.5" /> : <ArrowRight className="size-3.5" />}
                      </Link>

                      {study.downloadDocxUrl || study.downloadZipUrl ? (
                        <a
                          href={study.downloadDocxUrl || study.downloadZipUrl}
                          download
                          title={ar ? "تحميل وثيقة الدراسة المعتمدة" : "Download Official Study Document"}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "تحميل الدراسة" : "Download"}</span>
                        </a>
                      ) : downloadAllowed ? (
                        <button
                          type="button"
                          onClick={() => openApprovedStudyPdfReport(study, ar)}
                          title={ar ? "تنزيل PDF معتمد" : "Download Approved PDF"}
                          className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-green/40 bg-brand-green/10 px-3 py-2 text-xs font-bold text-brand-green hover:bg-brand-green hover:text-white transition-colors cursor-pointer"
                        >
                          <Download className="size-3.5" />
                          <span>{ar ? "تحميل PDF" : "Download PDF"}</span>
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            })`;

page = page.replace(oldCardMarkupRegex, newCardMarkup);

// Enforce Tanween fix
page = page.replace(/\u0627\u064B/g, '\u064B\u0627');

fs.writeFileSync('src/components/global-markets/global-markets-sector-page.tsx', page, 'utf8');
console.log('Successfully upgraded cards, filtering, and sorting in global-markets-sector-page.tsx!');
