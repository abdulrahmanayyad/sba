import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";

/** A shared entrance and keyboard boundary for group, sector and language menus. */
export function AnimatedPanel({ children, className, modal = false, onClose, label, role }: {
  children: ReactNode;
  className?: string;
  modal?: boolean;
  onClose: () => void;
  label?: string;
  role?: "dialog" | "listbox";
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const panel = ref.current;
    if (!panel) return;
    const previous = document.activeElement;
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.from(panel, { opacity: 0, y: modal ? 0 : -8, duration: 0.3, ease: "power3.out", clearProps: "opacity,transform" });
      if (modal) gsap.from(panel.querySelectorAll("nav > a, nav > div, [data-menu-item]"), {
        opacity: 0, y: 18, duration: 0.45, stagger: 0.035, delay: 0.08, ease: "power3.out", clearProps: "opacity,transform",
      });
    }, panel);
    const focusable = () => Array.from(panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]')).filter(el => el.getClientRects().length > 0);
    if (modal) focusable()[0]?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); onClose(); }
      if (!modal || event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    panel.addEventListener("keydown", keydown);
    return () => {
      panel.removeEventListener("keydown", keydown);
      context.revert();
      if (modal && previous instanceof HTMLElement && previous.isConnected) previous.focus();
    };
  }, [modal]);

  return <div ref={ref} className={className} role={role} aria-label={label} aria-modal={modal || undefined}>{children}</div>;
}

