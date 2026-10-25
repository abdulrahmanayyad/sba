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
      <section ref={ref} className="journey-section overflow-hidden bg-page-alt py-14 lg:flex lg:h-screen lg:flex-col lg:justify-center lg:py-0">
        <div className="site-container">
          <p className="eyebrow">{ar ? "رحلتنا" : "Our Journey"}</p>
          <h2 className="section-title max-w-2xl">{ar ? "محطات بنت المجموعة" : "Milestones that built the group"}</h2>
          <p className="mt-3 text-sm text-muted-foreground">{ar ? "محتوى مؤقت — التواريخ والمحطات بانتظار التأكيد" : "Placeholder timeline — dates and milestones awaiting confirmation"}</p>
          <div className="mt-6 hidden h-px bg-border lg:block">
            <div data-journey-progress className={ar ? "h-full origin-right bg-brand-green" : "h-full origin-left bg-brand-green"} />
          </div>
        </div>
        <div data-journey-track className="site-container mt-8 grid gap-4 lg:flex lg:gap-6 lg:overflow-visible">
          {journey.map((item) => (
            <div key={item.year} className="glass-card p-6 lg:w-[380px] lg:shrink-0">
              <p className="font-head text-4xl font-semibold text-brand-orange">{item.year}</p>
              <p className="mt-4 font-head text-lg font-semibold">{ar ? item.titleAr : item.title}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{ar ? item.bodyAr : item.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
