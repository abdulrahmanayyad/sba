import React, { useState, useMemo } from "react";
import { Globe2, Search, ExternalLink, ShieldCheck, MapPin, Layers } from "lucide-react";
import { 
  SUSTAINABILITY_TARGET_MARKETS, 
  SustainabilityMarket,
  MarketClassification 
} from "@/lib/sustainability-trade-data";
import { cn } from "@/lib/utils";

interface SustainabilityTargetMarketsProps {
  ar?: boolean;
}

export function SustainabilityTargetMarkets({ ar = true }: SustainabilityTargetMarketsProps) {
  const [priorityFilter, setPriorityFilter] = useState<"all" | "tier1" | "tier2">("all");
  const [classFilter, setClassFilter] = useState<"all" | MarketClassification>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMarkets = useMemo(() => {
    return SUSTAINABILITY_TARGET_MARKETS.filter((m) => {
      const matchPriority = priorityFilter === "all" || m.priority === priorityFilter;
      const matchClass = classFilter === "all" || m.classification === classFilter;
      const matchSearch =
        !searchQuery ||
        m.countryAr.includes(searchQuery) ||
        m.countryEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        m.environmentalNeedsAr.some((n) => n.includes(searchQuery)) ||
        m.environmentalNeedsEn.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchPriority && matchClass && matchSearch;
    });
  }, [priorityFilter, classFilter, searchQuery]);

  return (
    <div id="target-markets" className="interactive-card glass-box-interactive w-full rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl backdrop-blur-2xl transition-all duration-300">
      {/* Header */}
      <div>
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "القسم الثاني والثالث: الأسواق المستهدفة والاحتياجات البيئية" : "Sections 2 & 3: Target Markets & Required Solutions"}</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-0.5 leading-snug">
              {ar ? "قاعدة الأسواق البيئية المستهدفة والحلول المطلوبة" : "Target Environmental Markets & Solution Demands"}
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed max-w-4xl">
              {ar
                ? "تصنيف منهجي للأسواق العربية والإفريقية ذات الأولوية (Tier 1 & Tier 2)، يوضح الاحتياجات البيئية الفعلية، والحلول المناسبة، وقنوات الدخول، مع توثيق المصادر الرسمية المعتمدة."
                : "Systematic classification of priority MENA and African markets (Tier 1 & Tier 2), highlighting environmental needs, tailored solutions, entry channels, and official references."}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 rounded-2xl border border-brand-green/30 bg-brand-green/10 px-4 py-2 text-xs font-bold text-brand-green shrink-0 self-start">
            <Globe2 className="size-4" />
            <span>{ar ? `${SUSTAINABILITY_TARGET_MARKETS.length} سوقًا معتمدًا بالدراسة` : `${SUSTAINABILITY_TARGET_MARKETS.length} Verified Target Markets`}</span>
          </span>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-y border-white/10 py-4">
        {/* Priority Tabs */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() => setPriorityFilter("all")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer border shadow-xs",
              priorityFilter === "all"
                ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange"
                : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/50 hover:text-brand-orange"
            )}
          >
            {ar ? `كافة الأسواق (${SUSTAINABILITY_TARGET_MARKETS.length})` : `All Markets (${SUSTAINABILITY_TARGET_MARKETS.length})`}
          </button>
          <button
            type="button"
            onClick={() => setPriorityFilter("tier1")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer border shadow-xs",
              priorityFilter === "tier1"
                ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange"
                : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/50 hover:text-brand-orange"
            )}
          >
            {ar ? "الأسواق ذات الأولوية القصوى (Tier 1 - 5 دول)" : "Priority Tier 1 (5 Markets)"}
          </button>
          <button
            type="button"
            onClick={() => setPriorityFilter("tier2")}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-300 cursor-pointer border shadow-xs",
              priorityFilter === "tier2"
                ? "!border-brand-green !bg-brand-green !text-white hover:!bg-brand-orange hover:!border-brand-orange"
                : "border-border/80 bg-secondary/80 text-foreground hover:border-brand-orange/50 hover:text-brand-orange"
            )}
          >
            {ar ? "الأسواق الواعدة والمستهدفة (Tier 2 - 8 دول)" : "Priority Tier 2 (8 Markets)"}
          </button>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-64">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={ar ? "ابحث بدولة أو احتياج بيئي..." : "Search country or need..."}
            className="w-full rounded-xl border border-foreground/25 bg-background/95 ps-8 pe-4 py-1.5 text-xs text-foreground placeholder:text-muted-foreground shadow-sm focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/30 transition-all"
          />
        </div>
      </div>

      {/* Markets Cards Grid */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {filteredMarkets.map((market) => (
          <div
            key={market.countryCode}
            className="rounded-3xl border border-white/15 bg-background/70 p-5 sm:p-6 backdrop-blur-xl shadow-lg space-y-4 hover:border-brand-green/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top row */}
            <div>
              <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{market.flag}</span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {ar ? market.countryAr : market.countryEn}
                    </h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={cn(
                        "rounded-md px-2 py-0.5 text-[10px] font-bold",
                        market.priority === "tier1" ? "bg-brand-green/20 text-brand-green border border-brand-green/30" : "bg-secondary text-muted-foreground border border-border"
                      )}>
                        {market.priority === "tier1" ? (ar ? "أولوية أولى (Tier 1)" : "Priority Tier 1") : (ar ? "أولوية ثانية (Tier 2)" : "Priority Tier 2")}
                      </span>
                      <span className="text-muted-foreground text-[10px]">•</span>
                      <span className="text-[11px] font-medium text-muted-foreground">
                        {ar ? market.classificationAr : market.classificationEn}
                      </span>
                    </div>
                  </div>
                </div>

                <a
                  href={market.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 rounded-xl border border-white/10 bg-secondary/60 px-2.5 py-1 text-[11px] font-semibold text-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-2xs shrink-0"
                >
                  <span>{ar ? "المصدر الرسمي" : "Official Source"}</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>

              {/* Summary */}
              <p className="text-xs text-foreground/80 leading-relaxed pt-3">
                {ar ? market.summaryAr : market.summaryEn}
              </p>
            </div>

            {/* Environmental Needs & Solutions Grid */}
            <div className="space-y-3 pt-2">
              {/* Needs */}
              <div className="rounded-2xl border border-white/10 bg-secondary/40 p-3.5 space-y-1.5">
                <span className="text-[11px] font-bold text-foreground flex items-center gap-1.5">
                  <ShieldCheck className="size-3.5 text-brand-orange" />
                  <span>{ar ? "أهم الاحتياجات البيئية في السوق:" : "Core Environmental Demands:"}</span>
                </span>
                <ul className="text-xs text-muted-foreground space-y-1 ps-4 list-disc">
                  {(ar ? market.environmentalNeedsAr : market.environmentalNeedsEn).map((need, idx) => (
                    <li key={idx} className="leading-snug">{need}</li>
                  ))}
                </ul>
              </div>

              {/* Suitable Solutions */}
              <div className="rounded-2xl border border-brand-green/20 bg-brand-green/5 p-3.5 space-y-1.5">
                <span className="text-[11px] font-bold text-brand-green flex items-center gap-1.5">
                  <Layers className="size-3.5 text-brand-green" />
                  <span>{ar ? "الحلول والخدمات المناسبة المقترحة:" : "Suitable Solutions Portfolio:"}</span>
                </span>
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  {(ar ? market.suitableSolutionsAr : market.suitableSolutionsEn).map((sol, idx) => (
                    <span
                      key={idx}
                      className="rounded-lg bg-background/80 border border-border px-2 py-0.5 text-[11px] text-foreground font-medium"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Sectors & Entry Channels */}
              <div className="grid grid-cols-2 gap-2 text-[11px] text-muted-foreground pt-1">
                <div>
                  <span className="font-semibold text-foreground block">{ar ? "القطاعات المستهدفة:" : "Target Sectors:"}</span>
                  <span className="truncate block">{(ar ? market.targetSectorsAr : market.targetSectorsEn).join(" • ")}</span>
                </div>
                <div>
                  <span className="font-semibold text-foreground block">{ar ? "قنوات الدخول:" : "Entry Channels:"}</span>
                  <span className="truncate block">{(ar ? market.entryChannelsAr : market.entryChannelsEn).join(" • ")}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

