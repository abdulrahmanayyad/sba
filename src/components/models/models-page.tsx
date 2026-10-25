import { useMemo, useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/home/reveal";
import { MediaFrame, SectionHeading } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import copy from "@/i18n/pages-en.json";
import {
  applyChips,
  keywordChips,
  modelsQueryOptions,
  parseQuery,
  sortModels,
  type Chip,
  type Facet,
  type SortKey,
} from "@/lib/models";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 8;
const facetOrder: Facet[] = ["segment", "category", "fabric", "colour", "season"];
const facetLabels: Record<Facet, string> = {
  segment: copy.models.facetSegment,
  category: copy.models.facetCategory,
  fabric: copy.models.facetFabric,
  colour: copy.models.facetColour,
  season: copy.models.facetSeason,
};
const sortOptions: { key: SortKey; label: string }[] = [
  { key: "newest", label: copy.models.sortNewest },
  { key: "name", label: copy.models.sortName },
  { key: "moq", label: copy.models.sortMoq },
];
const examples = ["navy viscose dress for resort", "cotton hoodie for men", "kids organic cotton set"];

export function ModelsPage() {
  const { data: models } = useSuspenseQuery(modelsQueryOptions);
  const [draft, setDraft] = useState("");
  const [mode, setMode] = useState<"smart" | "keyword">("smart");
  const [chips, setChips] = useState<Chip[]>([]);
  const [sort, setSort] = useState<SortKey>("newest");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const results = useMemo(() => sortModels(applyChips(models, chips), sort), [models, chips, sort]);
  const shown = results.slice(0, visible);

  const facetValues = useMemo(() => {
    const map = new Map<Facet, { value: string; count: number }[]>();
    for (const facet of facetOrder) {
      const counts = new Map<string, number>();
      for (const model of models) {
        const value = model[facet];
        if (!value) continue;
        counts.set(value, (counts.get(value) ?? 0) + 1);
      }
      map.set(
        facet,
        [...counts.entries()]
          .map(([value, count]) => ({ value, count }))
          .sort((a, b) => a.value.localeCompare(b.value)),
      );
    }
    return map;
  }, [models]);

  const apply = (text = draft) => {
    setChips(mode === "smart" ? parseQuery(text, models) : keywordChips(text));
    setVisible(PAGE_SIZE);
  };

  const toggleFacet = (facet: Facet, value: string) => {
    const id = `${facet}:${value}`;
    setChips((prev) =>
      prev.some((chip) => chip.id === id)
        ? prev.filter((chip) => chip.id !== id)
        : [...prev, { id, kind: "facet", facet, value, label: value }],
    );
    setVisible(PAGE_SIZE);
  };

  const removeChip = (id: string) => {
    setChips((prev) => prev.filter((chip) => chip.id !== id));
    setVisible(PAGE_SIZE);
  };

  return (
    <div className="w-full">
      <section className="section-band bg-background pb-12">
        <div className="site-container">
          <SectionHeading as="h1" eyebrow={copy.models.eyebrow} title={copy.models.title} intro={copy.models.intro} />

          <Reveal delay={0.12} className="mt-14 border border-border bg-page-alt p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange-text">{copy.models.smart}</span>
              <span aria-hidden="true" className="h-px flex-1 bg-border" />
            </div>
            <div className="mt-4 flex flex-col gap-3 md:flex-row">
              <input
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && apply()}
                placeholder={copy.models.searchPlaceholder}
                aria-label={copy.models.searchHint}
                className="h-12 w-full rounded-none border border-border bg-background px-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
              />
              <div className="flex flex-wrap gap-3 [&>button]:flex-1 [&>button]:whitespace-normal sm:[&>button]:flex-none">
                <Button variant="primary" size="lg" onClick={() => apply()}>{copy.models.applyAsFilters}</Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    setMode((current) => (current === "smart" ? "keyword" : "smart"));
                    apply(draft);
                  }}
                >
                  {copy.models.searchAsKeywords}
                </Button>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              {copy.models.searchHint}{" "}
              {examples.map((example, index) => (
                <span key={example}>
                  {index > 0 && " · "}
                  <button
                    type="button"
                    className="font-mono text-[11px] text-brand-green-text underline underline-offset-4 hover:text-brand-green"
                    onClick={() => {
                      setDraft(example);
                      apply(example);
                    }}
                  >
                    “{example}”
                  </button>
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-band bg-page-alt pt-0">
        <div className="site-container">
          {chips.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6">
              {chips.map((chip) => (
                <span key={chip.id} className="inline-flex items-center gap-2 border border-border bg-background px-3 py-2 font-mono text-[10px] uppercase tracking-[0.12em]">
                  {chip.kind === "facet" && <span className="text-muted-foreground">{facetLabels[chip.facet!]}:</span>}
                  {chip.label}
                  <button type="button" aria-label={`Remove ${chip.label}`} className="text-muted-foreground hover:text-foreground" onClick={() => removeChip(chip.id)}>
                    ×
                  </button>
                </span>
              ))}
              <button type="button" className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-text underline underline-offset-4" onClick={() => { setChips([]); setDraft(""); }}>
                {copy.models.clearAll}
              </button>
            </div>
          )}

          <div className="grid gap-12 pt-8 lg:grid-cols-[240px_1fr] lg:gap-16">
            <aside className="grid gap-8 self-start lg:sticky lg:top-28">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">{copy.models.filters}</p>
              {facetOrder.map((facet) => (
                <div key={facet}>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{facetLabels[facet]}</p>
                  <div className="mt-3 grid gap-1.5">
                    {(facetValues.get(facet) ?? []).map((entry) => {
                      const active = chips.some((chip) => chip.id === `${facet}:${entry.value}`);
                      return (
                        <button
                          key={entry.value}
                          type="button"
                          onClick={() => toggleFacet(facet, entry.value)}
                          className={cn("flex items-baseline justify-between gap-3 border-b border-border pb-1.5 text-left text-sm hover:text-brand-green-text", active ? "text-brand-green-text" : "text-muted-foreground")}
                        >
                          <span>{entry.value}</span>
                          <span className="font-mono text-[10px] opacity-70">{entry.count}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
              <button type="button" className="justify-self-start font-mono text-[10px] uppercase tracking-[0.18em] text-brand-green-text underline underline-offset-4" onClick={() => { setChips([]); setDraft(""); }}>
                {copy.models.clearAll}
              </button>
            </aside>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {shown.length} {results.length === 1 ? copy.models.resultsOne : copy.models.resultsOther} · {copy.models.of} {models.length}
                </p>
                <label className="flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{copy.models.sort}</span>
                  <select
                    value={sort}
                    onChange={(event) => setSort(event.target.value as SortKey)}
                    className="h-9 rounded-none border border-border bg-background px-3 font-body text-sm text-foreground focus:border-foreground focus:outline-none"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.key} value={option.key}>{option.label}</option>
                    ))}
                  </select>
                </label>
              </div>

              {results.length === 0 ? (
                <div className="border border-border bg-background p-10 text-center md:p-16">
                  <h2 className="text-3xl">{copy.models.noModelsMatch}</h2>
                  <p className="mx-auto mt-4 max-w-md text-muted-foreground">{copy.models.noModelMatches} {copy.models.cantFind}</p>
                  <Button asChild variant="primary" size="lg" className="mt-8"><Link to="/contact">{copy.models.sendReference}</Link></Button>
                </div>
              ) : (
                <>
                  <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
                    {shown.map((model, index) => (
                      <Reveal key={model.code} delay={(index % 4) * 0.08}>
                        <Link to="/models/$code" params={{ code: model.code }} className="group block">
                          <MediaFrame label={`${model.code} · ${copy.detail.front}`} className="aspect-[4/5]" />
                          <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-green-text">{model.code}</p>
                          <h3 className="mt-2 text-lg leading-snug group-hover:text-brand-green-text">{model.name}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{model.fabric}</p>
                          <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                            {copy.models.moq} {model.moq} · {model.sizes}
                          </p>
                        </Link>
                      </Reveal>
                    ))}
                  </div>
                  {visible < results.length && (
                    <div className="mt-14 flex justify-center border-t border-border pt-8">
                      <Button variant="outline" size="lg" onClick={() => setVisible((value) => value + PAGE_SIZE)}>{copy.models.loadMore}</Button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
