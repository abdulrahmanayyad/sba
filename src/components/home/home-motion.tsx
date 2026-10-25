import { useEffect, useRef, type ReactNode, type PointerEvent } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeMotion({ children, variant = "apparel" }: { children: ReactNode; variant?: "apparel" | "group" }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();
    const context = gsap.context(() => {
      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to("[data-scroll-progress]", { scaleX: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.2 } });
        gsap.utils.toArray<HTMLElement>("[data-word-motion]").forEach((element) => {
          gsap.from(element.querySelectorAll("[data-word]"), { yPercent: 110, opacity: 0, stagger: 0.055, duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: element, start: "top 90%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((element) => {
          gsap.fromTo(element, { y: 18 }, { y: -18, ease: "none", scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 1 } });
        });
        gsap.from("[data-hero-reveal]", { y: 36, autoAlpha: 0, duration: 1.1, stagger: 0.13, ease: "power3.out", delay: 0.1 });
        gsap.fromTo("[data-hero-image]", { scale: 1.08 }, { scale: 1, duration: 1.8, ease: "power2.out" });
        if (variant === "apparel" || window.matchMedia("(min-width: 768px) and (pointer: fine)").matches) {
          gsap.to("[data-hero-image]", { yPercent: 8, ease: "none", scrollTrigger: { trigger: "[data-home-hero]", start: "top top", end: "bottom top", scrub: 0.8 } });
        }
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((element) => {
          gsap.from(element, { y: 28, autoAlpha: 0, duration: 0.85, ease: "power3.out", delay: Number(element.dataset['delay'] ?? 0), scrollTrigger: { trigger: element, start: "top 93%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((element) => {
          const count = { value: 0 };
          gsap.to(count, { value: Number(element.dataset['count']), duration: 1.8, ease: "power2.out", onUpdate: () => { element.textContent = Math.round(count.value).toLocaleString("en-US"); }, scrollTrigger: { trigger: element, start: "top 90%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-draw-line]").forEach((element) => {
          gsap.from(element, { scaleX: 0, transformOrigin: "left", duration: 1.2, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 92%", once: true } });
        });
        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          Array.from(group.children).forEach((element, index) => {
            gsap.from(element, { y: 24, autoAlpha: 0, duration: 0.75, delay: (index % 3) * 0.07, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 94%", once: true } });
          });
        });
        gsap.utils.toArray<HTMLElement>("[data-grow-bar]").forEach((element) => {
          gsap.from(element, { scaleX: 0, transformOrigin: document.documentElement.dir === "rtl" ? "right" : "left", duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: element, start: "top 94%", once: true } });
        });
        if (variant === "group") {
          gsap.utils.toArray<HTMLElement>("section > .section-title, section > .site-container > .section-title, #contact .section-title").forEach((heading) => {
            gsap.from(heading, { y: 18, opacity: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: heading, start: "top 94%", once: true } });
          });
        }
        const emailCleanups = gsap.utils.toArray<HTMLElement>("[data-email-contact]").map((link) => {
          const icon = link.querySelector("[data-email-icon]");
          const arrow = link.querySelector("[data-email-arrow]");
          const direction = document.documentElement.dir === "rtl" ? -1 : 1;
          gsap.from(link, { y: 22, autoAlpha: 0, duration: 0.8, ease: "power3.out", scrollTrigger: { trigger: link, start: "top 94%", once: true } });
          gsap.from(link.querySelectorAll("[data-email-icon], [data-email-copy], [data-email-arrow]"), { y: 8, opacity: 0, duration: 0.55, stagger: 0.09, scrollTrigger: { trigger: link, start: "top 94%", once: true } });
          const animate = (active: boolean) => {
            gsap.to(link, { y: active ? -4 : 0, duration: 0.35, ease: "power2.out", overwrite: "auto" });
            if (icon) gsap.to(icon, { rotation: active ? -8 * direction : 0, duration: 0.4, overwrite: "auto" });
            if (arrow) gsap.to(arrow, { x: active ? 5 * direction : 0, duration: 0.35, overwrite: "auto" });
          };
          const enter = () => animate(true);
          const leave = () => animate(false);
          const pointerEnter = () => { if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) enter(); };
          link.addEventListener("pointerenter", pointerEnter);
          link.addEventListener("pointerleave", leave);
          link.addEventListener("focus", enter);
          link.addEventListener("blur", leave);
          return () => {
            link.removeEventListener("pointerenter", pointerEnter);
            link.removeEventListener("pointerleave", leave);
            link.removeEventListener("focus", enter);
            link.removeEventListener("blur", leave);
            gsap.killTweensOf([link, icon, arrow].filter(Boolean));
          };
        });
        return () => emailCleanups.forEach((cleanup) => cleanup());
      });
    }, root);
    return () => { media.revert(); context.revert(); };
  }, [variant]);

  return <div ref={root} data-home-motion className={variant === "group" ? "w-full overflow-clip" : "home-experience"}><div data-scroll-progress className="home-scroll-progress" aria-hidden="true" />{children}</div>;
}

export function MotionWords({ text }: { text: string }) {
  return <span data-word-motion aria-label={text}>{text.split(" ").map((word, index) => <span key={index} className="inline-block overflow-hidden align-bottom"><span data-word aria-hidden="true" className="inline-block">{word}&nbsp;</span></span>)}</span>;
}

export function MotionSurface({ children, className }: { children: ReactNode; className?: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current;
    return () => { if (element) gsap.killTweensOf(element); };
  }, []);
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (!root.current || event.pointerType !== "mouse" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    gsap.to(root.current, { x: (event.clientX - bounds.left - bounds.width / 2) * 0.018, y: (event.clientY - bounds.top - bounds.height / 2) * 0.018, duration: 0.5, ease: "power2.out", overwrite: true });
  };
  const reset = () => { if (root.current) gsap.to(root.current, { x: 0, y: 0, duration: 0.6, ease: "power3.out", overwrite: true }); };
  return <div ref={root} onPointerMove={move} onPointerLeave={reset} className={className}>{children}</div>;
}

export function HomeReveal({ children, className, delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string }) {
  return <div id={id} className={className} data-reveal data-delay={delay}>{children}</div>;
}

export function ProcessContent({ children, step }: { children: ReactNode; step: number }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const context = gsap.context(() => { gsap.fromTo(root.current, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }); });
    return () => context.revert();
  }, [step]);
  return <div ref={root} aria-live="polite">{children}</div>;
}