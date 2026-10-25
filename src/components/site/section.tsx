import { cn } from "@/lib/utils";

import { Reveal } from "@/components/home/reveal";

export function SectionHeading({ eyebrow, title, intro, light = false, as: Heading = "h2" }: { eyebrow: string; title: string; intro?: string; light?: boolean; as?: "h1" | "h2" }) {
  return (
    <div className="section-heading">
      <Reveal>
        <p className={cn("eyebrow", light && "text-brand-green")}>{eyebrow}</p>
        <Heading className={cn("section-title", light && "text-footer-foreground")}>{title}</Heading>
      </Reveal>
      {intro && <Reveal delay={0.08}><p className={cn("section-intro", light && "text-footer-muted")}>{intro}</p></Reveal>}
    </div>
  );
}

export function MediaFrame({ label, dark = false, className }: { label: string; dark?: boolean; className?: string }) {
  return <div className={cn("media-frame", dark && "media-frame-dark", className)}><span>{label}</span><i aria-hidden="true" /></div>;
}

export const fieldClass =
  "w-full rounded-none border border-border bg-background px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none";

export const labelClass = "block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground";
