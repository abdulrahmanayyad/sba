import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Shared GSAP vocabulary; homepage choreography keeps its own transform ownership. */
export function MotionEnhancer({ rtl }: { rtl: boolean }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const main = document.querySelector("main");
    if (!main) return;
    const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const records = new Map<HTMLElement, gsap.core.Tween>();
        const seen = new WeakSet<HTMLElement>();
        let frame = 0;
        const compact = window.matchMedia("(max-width: 767px)").matches;
        const add = (el: HTMLElement, image = false) => {
          if (seen.has(el)) return;
          seen.add(el);
          const inHome = el.closest("[data-home-motion]");
          if (inHome && !el.hasAttribute("data-clip-reveal") && !el.hasAttribute("data-site-reveal")) return;
          const tween = gsap.fromTo(el,
            image ? { clipPath: rtl ? "inset(0 0 0 100%)" : "inset(0 100% 0 0)" } : { opacity: 0, y: compact ? 14 : 24 },
            {
              ...(image ? { clipPath: "inset(0 0 0 0)" } : { opacity: 1, y: 0 }),
              duration: image ? 1.05 : 0.8,
              delay: Math.min(Number(el.dataset['motionDelay'] ?? 0), 0.24),
              ease: "power3.out",
              clearProps: image ? "clipPath" : "opacity,transform",
              scrollTrigger: { trigger: el, start: "top 94%", once: true },
            });
          records.set(el, tween);
        };
        const scan = () => {
          for (const [el, tween] of records) {
            if (!el.isConnected) { tween.scrollTrigger?.kill(); tween.kill(); records.delete(el); }
          }
          main.querySelectorAll<HTMLElement>("[data-site-reveal]").forEach(el => add(el));
          main.querySelectorAll<HTMLElement>("h1, .section-heading, .glass-card, form, [data-motion-reveal]").forEach(el => {
            if (!el.closest("[data-site-reveal], [data-reveal], [data-stagger], [data-home-motion]") && !el.parentElement?.closest(".glass-card")) add(el);
          });
          main.querySelectorAll<HTMLImageElement>("img").forEach(el => {
            if (el.hasAttribute("data-hero-image") || (el.closest("[data-home-motion]") && !el.hasAttribute("data-clip-reveal"))) return;
            if (!el.hasAttribute("data-clip-reveal") && (!el.classList.contains("object-cover") || el.width < 120)) return;
            add(el, true);
          });
          ScrollTrigger.refresh();
        };
        // Async catalogue results, filters and tab changes receive the same effects.
        scan();
        const observer = new MutationObserver(() => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(scan);
        });
        observer.observe(main, { childList: true, subtree: true });
        const refresh = () => ScrollTrigger.refresh();
        main.addEventListener("load", refresh, true);
        return () => {
          observer.disconnect(); cancelAnimationFrame(frame);
          main.removeEventListener("load", refresh, true);
          records.forEach(tween => { tween.scrollTrigger?.kill(); tween.revert(); });
        };
      });
      mm.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
        const cleanups: (() => void)[] = [];
        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((el) => {
          const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
          const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });
          const move = (event: PointerEvent) => {
            const box = el.getBoundingClientRect();
            xTo(gsap.utils.clamp(-7, 7, (event.clientX - box.left - box.width / 2) * 0.12));
            yTo(gsap.utils.clamp(-5, 5, (event.clientY - box.top - box.height / 2) * 0.18));
          };
          const leave = () => { xTo(0); yTo(0); };
          el.addEventListener("pointermove", move);
          el.addEventListener("pointerleave", leave);
          cleanups.push(() => { el.removeEventListener("pointermove", move); el.removeEventListener("pointerleave", leave); xTo.tween.kill(); yTo.tween.kill(); gsap.set(el, { clearProps: "transform" }); });
        });
        return () => cleanups.forEach(fn => fn());
      });
    return () => { mm.revert(); };
  }, [rtl]);

  return null;
}


