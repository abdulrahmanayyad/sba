import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { journey } from "./group-data";

/** Milestones: pinned horizontal scroll on desktop, stacked list on phones and reduced motion. */
export function JourneySection({ ar }: { ar: boolean }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference) and (min-width: 1024px)", () => {
      const track = section.querySelector<HTMLElement>("[data-journey-track]");
      const bar = section.querySelector<HTMLElement>("[data-journey-progress]");
      if (!track) return;
      const distance = () => Math.max(0, track.scrollWidth - track.clientWidth);
      const trigger = { trigger: section, start: "top top", end: () => `+=${distance()}`, invalidateOnRefresh: true };
      gsap.to(track, { x: () => (ar ? distance() : -distance()), ease: "none", scrollTrigger: { ...trigger, pin: true, scrub: 0.6 } });
      if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: "none", scrollTrigger: { ...trigger, scrub: true } });
    });
    return () => mm.revert();
  }, [ar]);

  return (
    <div>
      <section ref={ref} className="journey-section overflow-hidden bg-transparent py-16 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0 relative">
        <div className="site-container relative z-10">
          <div className="group relative mx-auto mb-4 overflow-hidden rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-7 sm:p-10 shadow-[0_16px_50px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01] hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:border-brand-orange/50 text-start">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
              <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="font-bold text-brand-green">{ar ? "رحلتنا وتاريخنا" : "Our Journey & Legacy"}</span>
            </div>
            <h2 className="section-title max-w-2xl text-start">{ar ? "محطات بنت مسيرة المجموعة" : "Milestones that built the group"}</h2>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed text-start">
              {ar
                ? "مسيرة ريادية متواصلة تمتد لخمسة عقود من الإنجاز والنمو والتوسع الاستراتيجي."
                : "A continuous journey of purposeful expansion, leadership, and industrial development across decades."}
            </p>
          </div>
          <div className="mt-4 hidden h-1 rounded-full bg-border/40 overflow-hidden lg:block">
            <div data-journey-progress className={ar ? "h-full origin-right bg-gradient-to-l from-brand-orange to-brand-green" : "h-full origin-left bg-gradient-to-r from-brand-orange to-brand-green"} />
          </div>
        </div>

        <div data-journey-track className="site-container mt-10 grid gap-5 sm:grid-cols-2 lg:flex lg:gap-6 lg:overflow-visible">
          {journey.map((item, idx) => (
            <div
              key={item.year}
              className="group relative rounded-3xl border border-white/50 bg-white/40 dark:bg-white/10 p-7 shadow-[0_12px_40px_rgba(0,0,0,0.05)] backdrop-blur-3xl ring-1 ring-white/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:bg-white/60 dark:hover:bg-white/20 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)] hover:border-brand-orange/50 lg:w-[380px] lg:shrink-0 flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-head text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                    {item.year}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60 border border-border/60 rounded-full px-2.5 py-0.5">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="text-start font-head text-lg font-bold text-foreground leading-snug">
                  {ar ? item.titleAr : item.title}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-4 text-start">
                {ar ? item.bodyAr : item.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


