import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";

import { Reveal } from "@/components/home/reveal";
import { MediaFrame } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import copy from "@/i18n/pages-en.json";
import { modelsQueryOptions, similarModels, type Model } from "@/lib/models";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/lib/process-steps";
import { cn } from "@/lib/utils";

const views = [copy.detail.front, copy.detail.back, copy.detail.detail, copy.detail.fabric];

const reasonLabels: Record<string, string> = {
  fabric: copy.detail.reasonFabric,
  category: copy.detail.reasonCategory,
  colour: copy.detail.reasonColour,
  segment: copy.detail.reasonSegment,
};

const customizations = [
  "Fabric and composition",
  "Colour and print",
  "Size range and grading",
  "Labels, hangtags and branding",
  "Folding, packing and carton marking",
];

export function ModelDetailPage({ code }: { code: string }) {
  const { data: models } = useSuspenseQuery(modelsQueryOptions);
  const [view, setView] = useState(0);
  const model = models.find((item) => item.code.toLowerCase() === code.toLowerCase());

  if (!model) {
    return (
      <div className="section-band bg-background">
        <div className="site-container max-w-2xl">
          <h1 className="section-title">{copy.detail.notFound}</h1>
          <p className="mt-6 text-muted-foreground">{copy.detail.notFoundBody}</p>
          <Button asChild variant="primary" size="lg" className="mt-8"><Link to="/models">{copy.detail.browseLibrary}</Link></Button>
        </div>
      </div>
    );
  }

  const similar = similarModels(models, model);
  const whatsapp = `${WHATSAPP_URL}?text=${encodeURIComponent(`Hello SBA, I would like to discuss model ${model.code} — ${model.name}.`)}`;

  return (
    <div className="w-full">
      <section className="section-band bg-background pb-10">
        <div className="site-container">
          <nav aria-label={copy.detail.models} className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <Link to="/models" className="hover:text-brand-green-text">{copy.detail.models}</Link>
            <span aria-hidden="true" className="mx-3">/</span>
            <span className="text-foreground">{model.code}</span>
          </nav>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
            <div>
              <Reveal>
                <MediaFrame label={`${model.code} · ${views[view]}`} className="aspect-[4/5]" />
              </Reveal>
              <div className="mt-4 grid grid-cols-4 gap-4">
                {views.map((label, index) => (
                  <Button
                    key={label}
                    variant="ghost"
                    className={cn("h-auto flex-col gap-1 border p-2", index === view ? "border-foreground" : "border-border")}
                    onClick={() => setView(index)}
                  >
                    <span className="block aspect-square w-full bg-page-alt" aria-hidden="true" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em]">{label}</span>
                  </Button>
                ))}
              </div>
            </div>

            <Reveal delay={0.08} className="flex flex-col">
              <p className="eyebrow">{copy.detail.productionReady}</p>
              <h1 className="mt-4 text-[clamp(2.25rem,4vw,3.75rem)] font-medium leading-[1.05]">{model.name}</h1>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-green-text">{model.code} · {model.segment} · {model.category}</p>

              <div className="mt-9 grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
                <Spec label={copy.detail.color} value={model.colour} />
                <Spec label={copy.detail.sizeRange} value={model.sizes} />
                <Spec label={copy.models.moq} value={String(model.moq)} />
                <Spec label={copy.detail.season} value={model.season} />
              </div>

              <p className="mt-8 text-sm text-muted-foreground">{copy.detail.requestNote}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild variant="primary" size="lg"><Link to="/contact" search={{ model: model.code }}>{copy.detail.requestThisModel}</Link></Button>
                <Button asChild variant="outline" size="lg"><a href={whatsapp} target="_blank" rel="noreferrer">{copy.detail.askOnWhatsApp}</a></Button>
              </div>

              <div className="mt-10 border-t border-border pt-7">
                <p className="eyebrow">{copy.detail.specifications}</p>
                <div className="mt-5 grid">
                  {[
                    ["Fabric", model.fabric],
                    ["Composition", model.composition],
                    ["Category", model.category],
                    ["Segment", model.segment],
                    ["Season", model.season],
                    ["Sizes", model.sizes],
                  ].map(([label, value]) => (
                    <div key={label} className="grid grid-cols-[10rem_1fr] gap-4 border-b border-border py-3 text-sm last:border-0">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{label}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="eyebrow">{copy.detail.availableCustomizations}</p>
                <ul className="mt-5 grid gap-2.5 text-sm text-muted-foreground">
                  {customizations.map((item) => <li key={item} className="border-t border-border pt-2.5">{item}</li>)}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band bg-footer text-footer-foreground">
        <div className="site-container">
          <Reveal>
            <p className="eyebrow text-brand-green">{copy.detail.technicalSheet}</p>
            <h2 className="mt-4 text-4xl text-footer-foreground md:text-5xl">{copy.detail.technicalSheetSub}</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            <Reveal className="grid border-l border-t border-footer-line md:grid-cols-2">
              {[
                [copy.detail.style, model.code],
                [copy.detail.season, model.season],
                [copy.detail.sheet, copy.detail.sheetValue],
                [copy.detail.fabricReference, model.fabric],
                [copy.detail.colorReference, model.colour],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-r border-footer-line p-6">
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-footer-muted">{label}</p>
                  <p className="mt-4 font-head text-lg text-footer-foreground">{value}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame dark label={`${model.code} · TECHNICAL DRAWING · PENDING`} className="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      {similar.length > 0 && (
        <section className="section-band bg-background">
          <div className="site-container">
            <Reveal>
              <h2 className="section-title text-[clamp(2rem,3.4vw,3.25rem)]">{copy.detail.similarModels}</h2>
              <p className="mt-5 text-muted-foreground">{copy.detail.similarNote}</p>
            </Reveal>
            <div className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 xl:grid-cols-4">
              {similar.map((entry, index) => (
                <Reveal key={entry.model.code} delay={index * 0.08}>
                  <Link to="/models/$code" params={{ code: entry.model.code }} className="group block">
                    <MediaFrame label={`${entry.model.code} · ${copy.detail.front}`} className="aspect-[4/5]" />
                    <p className="mt-4 inline-block border border-border px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-brand-green-text">
                      {reasonLabels[entry.reason]}
                    </p>
                    <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-brand-green-text">{entry.model.code}</p>
                    <h3 className="mt-1.5 text-lg leading-snug group-hover:text-brand-green-text">{entry.model.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{entry.model.fabric}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
            <div className="mt-14 border-t border-border pt-8">
              <Button asChild variant="outline" size="lg"><Link to="/models">{copy.detail.viewLibrary}</Link></Button>
            </div>
          </div>
        </section>
      )}

      <section className="section-band bg-brand-green text-footer-foreground">
        <div className="site-container">
          <h2 className="section-title text-footer-foreground text-[clamp(2rem,3.4vw,3.25rem)]">{copy.detail.requestThisModel}</h2>
          <p className="mt-6 max-w-2xl text-footer-foreground/80">{model.code} — {model.name}. {copy.detail.requestNote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="lg" className="border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-foreground">
              <Link to="/contact" search={{ model: model.code }}>{copy.detail.requestThisModel}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-foreground">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Model ${model.code}`)}`}>{copy.manufacture.contactUs}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</p>
      <p className="mt-2 font-head text-xl">{value}</p>
    </div>
  );
}


