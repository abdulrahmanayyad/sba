import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Animate the numeric part only; retain the supplied suffix and final formatting. */
export function AnimatedStatistic({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    const match = value.match(/^([\d,.]+)(.*)$/);
    if (!el || !match) return;
    const target = Number(match[1]?.replaceAll(",", ""));
    if (!Number.isFinite(target)) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const counter = { value: 0 };
      const precision = match[1]?.split(".")[1]?.length ?? 0;
      const formatted = value.includes(",");
      const tween = gsap.to(counter, { value: target, duration: 1.6, ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 94%", once: true },
        onUpdate: () => { el.textContent = (formatted ? counter.value.toLocaleString("en-US", { minimumFractionDigits: precision, maximumFractionDigits: precision }) : counter.value.toFixed(precision)) + match[2]; },
        onComplete: () => { el.textContent = value; },
      });
      return () => { tween.scrollTrigger?.kill(); tween.kill(); el.textContent = value; };
    });
    return () => mm.revert();
  }, [value]);
  return <span aria-label={value}><span ref={ref} aria-hidden="true" className="tabular-nums">{value}</span></span>;
}