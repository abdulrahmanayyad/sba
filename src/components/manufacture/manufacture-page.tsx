import { Reveal } from "@/components/home/reveal";
import { MediaFrame } from "@/components/site/section";
import { Button } from "@/components/ui/button";
import copy from "@/i18n/pages-en.json";
import { processSteps, WHATSAPP_URL } from "@/lib/process-steps";

export function ManufacturePage() {
  return (
    <div className="w-full">
      <section className="section-band bg-footer text-footer-foreground">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow text-brand-green">{copy.manufacture.eyebrow}</p>
              <h1 className="section-title mt-5 text-footer-foreground">{copy.manufacture.title}</h1>
            </Reveal>
            <Reveal delay={0.08} className="flex items-end gap-6 lg:justify-end">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-footer-muted">{copy.manufacture.step}</span>
              <strong className="font-head text-[clamp(3.5rem,7vw,6.5rem)] font-medium leading-none text-brand-orange">10{copy.manufacture.counter}</strong>
            </Reveal>
          </div>
          <Reveal delay={0.16}><p className="mt-14 max-w-3xl text-lg leading-8 text-footer-muted">{copy.manufacture.intro}</p></Reveal>
        </div>
      </section>

      <section className="section-band bg-background pt-0">
        <div className="site-container">
          <div className="grid">
            {processSteps.map(([title, body], index) => (
              <Reveal key={title} delay={(index % 3) * 0.06} id={title === "Quality Control" ? "quality" : undefined} className="grid gap-5 border-t border-border py-9 lg:grid-cols-[10rem_22rem_1fr] lg:gap-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-green-text">
                  {String(index + 1).padStart(2, "0")} {copy.manufacture.counter}
                </p>
                <h2 className="text-2xl leading-snug md:text-3xl">{title}</h2>
                <p className="max-w-2xl text-muted-foreground">{body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band bg-page-alt">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">{copy.manufacture.privateLabel}</p>
              <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.05]">{copy.manufacture.privateLabelTitle}</h2>
              <p className="mt-8 max-w-xl text-lg text-muted-foreground">{copy.manufacture.privateLabelBody}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <MediaFrame label="PRIVATE LABEL PRODUCTION · IMAGE PENDING" className="aspect-[4/3]" />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-band bg-brand-green text-footer-foreground">
        <div className="site-container">
          <Reveal>
            <h2 className="section-title text-footer-foreground">{copy.manufacture.oneProcess}</h2>
            <p className="mt-6 max-w-2xl text-lg text-footer-foreground/80">{copy.manufacture.oneProcessSub}</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="outline" size="lg" className="border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-foreground">
              <a href="mailto:info@sami-trade.com">{copy.manufacture.contactUs}</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-footer-foreground text-footer-foreground hover:bg-footer-foreground hover:text-foreground">
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">{copy.manufacture.whatsappUs}</a>
            </Button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}


