import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useRouter } from "@tanstack/react-router";

const SBA_LOGO_AR = "/brand/SBA%20logo%20AR.svg";
const SBA_LOGO_EN = "/brand/SBA%20logo%20EN.svg";

/** Spatial logo zoom aperture transition whenever page path changes */
export function PageTransition({ pathname, rtl }: { pathname: string; rtl: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const logo = el.querySelector(".transition-logo");
    let timeline: gsap.core.Timeline | undefined;
    let active = false;
    let safety: ReturnType<typeof setTimeout> | undefined;

    const uncover = () => {
      if (!active) return;
      active = false;
      clearTimeout(safety);
      timeline?.kill();
      // Zoom through the logo smoothly into the page
      timeline = gsap.timeline()
        .to(logo, { scale: 3.5, opacity: 0, duration: 0.45, ease: "power2.inOut" })
        .to(el, { opacity: 0, duration: 0.35, ease: "power2.out" }, "-=0.25")
        .set(el, { display: "none" });
    };

    const before = router.subscribe("onBeforeNavigate", (event) => {
      if (!event.pathChanged || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      timeline?.kill();
      clearTimeout(safety);
      active = true;
      timeline = gsap.timeline()
        .set(el, { display: "flex", opacity: 1 })
        .fromTo(logo, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.25, ease: "back.out(1.4)" });
      safety = setTimeout(uncover, 3500);
    });

    const resolved = router.subscribe("onResolved", () => {
      if (active) {
        clearTimeout(safety);
        safety = setTimeout(uncover, 120);
      }
    });

    return () => {
      before();
      resolved();
      clearTimeout(safety);
      timeline?.kill();
      gsap.set(el, { display: "none" });
    };
  }, [router, rtl]);

  return (
    <div
      ref={ref}
      data-page-transition
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[120] hidden items-center justify-center bg-background/85 backdrop-blur-xl"
    >
      <div className="transition-logo flex flex-col items-center justify-center will-change-transform">
        <img
          src={rtl ? SBA_LOGO_AR : SBA_LOGO_EN}
          alt=""
          className="h-20 w-auto drop-shadow-2xl"
        />
      </div>
    </div>
  );
}
