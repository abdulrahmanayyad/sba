import type { ReactNode } from "react";

export function Reveal({ children, className, delay = 0, id }: { children: ReactNode; className?: string; delay?: number; id?: string | undefined }) {
  return <div id={id} className={className} data-site-reveal data-motion-delay={delay}>{children}</div>;
}