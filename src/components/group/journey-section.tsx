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
          {/* Header Glass Box */}
          <div className="glass-box-interactive mx-auto mb-4 rounded-3xl p-7 sm:p-10 text-start cursor-pointer">
            <div className="relative z-10">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 dark:bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-foreground backdrop-blur-md shadow-xs">
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
                <span className="font-bold text-brand-green">{ar ? "رحلتنا وتاريخنا" : "Our Journey & Legacy"}</span>
              </div>
              <h2 className="font-head text-xl sm:text-2xl lg:text-3xl font-extrabold text-foreground leading-snug text-start">
                {ar ? "محطات بنت مسيرة المجموعة" : "Milestones that built the group"}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed text-start">
                {ar
                  ? "مسيرة ريادية متواصلة تمتد لخمسة عقود من الإنجاز والنمو والتوسع الاستراتيجي."
                  : "A continuous journey of purposeful expansion, leadership, and industrial development across decades."}
              </p>
            </div>
          </div>
          {/* Progress Indicator */}
          <div className="mt-4 hidden h-1 rounded-full bg-border/40 overflow-hidden lg:block">
            <div data-journey-progress className={ar ? "h-full origin-right bg-gradient-to-l from-brand-orange to-brand-green" : "h-full origin-left bg-gradient-to-r from-brand-orange to-brand-green"} />
          </div>
        </div>

        {/* Separated Full-Width Free Moving Milestones Track */}
        <div data-journey-track className="site-container mt-10 grid gap-5 sm:grid-cols-2 lg:flex lg:gap-6 lg:overflow-visible">
          {journey.map((item, idx) => (
            <div
              key={item.year}
              className="glass-box-interactive rounded-3xl p-7 lg:w-[380px] lg:shrink-0 flex flex-col justify-between cursor-pointer"
            >
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-head text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-500 drop-shadow-sm">
                      {item.year}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/70 border border-border/60 rounded-full px-2.5 py-0.5">
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


