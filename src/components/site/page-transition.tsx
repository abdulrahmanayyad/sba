import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "@tanstack/react-router";

import sbaLogoEn from "@/assets/SBA_logo_EN.svg.asset.json";
import sbaLogoAr from "@/assets/SBA_logo_AR.svg.asset.json";

/** Green curtain that wipes away with the SBA logo whenever the page path changes. */
export function PageTransition({ pathname, rtl }: { pathname: string; rtl: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const logo = el.querySelector("img");
    let timeline: gsap.core.Timeline | undefined;
    let active = false;
    let safety: ReturnType<typeof setTimeout> | undefined;
    const uncover = () => {
      if (!active) return;
      active = false;
      clearTimeout(safety);
      timeline?.kill();
      timeline = gsap.timeline().to(el, { scaleX: 0, transformOrigin: rtl ? "left center" : "right center", duration: 0.5, ease: "power4.inOut" }).set(el, { display: "none" });
    };
    const before = router.subscribe("onBeforeNavigate", (event) => {
      if (!event.pathChanged || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timeline?.kill(); clearTimeout(safety); active = true;
      timeline = gsap.timeline().set(el, { display: "flex", scaleX: 1 }).fromTo(logo, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.2 });
      safety = setTimeout(uncover, 4000);
    });
    const resolved = router.subscribe("onResolved", () => { if (active) { clearTimeout(safety); safety = setTimeout(uncover, 180); } });
    return () => { before(); resolved(); clearTimeout(safety); timeline?.kill(); gsap.set(el, { display: "none" }); };
  }, [router, rtl]);

  return (
    <div ref={ref} data-page-transition aria-hidden="true" className="pointer-events-none fixed inset-0 z-[80] hidden items-center justify-center bg-brand-green">
      <img src={(rtl ? sbaLogoAr : sbaLogoEn).url} alt="" className="h-14 w-auto brightness-0 invert" />
    </div>
  );
}
