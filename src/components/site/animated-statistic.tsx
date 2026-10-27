import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Animate the numeric part only; retain the supplied suffix and final formatting. */
export function AnimatedStatistic({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([^\d,.]*)([\d,.]+)(.*)$/);
    if (!el || !match) return;
    const prefix = match[1] ?? "";
    const target = Number(match[2]?.replaceAll(",", ""));
    const suffix = match[3] ?? "";
    if (!Number.isFinite(target)) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counter = { value: 0 };
      const precision = match[2]?.split(".")[1]?.length ?? 0;
      const formatted = match[2]?.includes(",") ?? false;
      const tween = gsap.to(counter, { value: target, duration: 1.6, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
        onUpdate: () => {
          const numStr = formatted ? Math.round(counter.value).toLocaleString("en-US") : counter.value.toFixed(precision);
          el.textContent = `${prefix}${numStr}${suffix}`;
        },
        onComplete: () => { el.textContent = value; },
      });
      return () => { tween.scrollTrigger?.kill(); tween.kill(); el.textContent = value; };
    });
    return () => mm.revert();
  }, [value]);
  return (
    <span aria-label={value} dir="ltr" className="inline-block" style={{ direction: "ltr", unicodeBidi: "isolate" }}>
      <span ref={ref} aria-hidden="true" className="tabular-nums" dir="ltr">
        {value}
      </span>
    </span>
  );
}