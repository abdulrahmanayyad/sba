import React from "react";
import { cn } from "@/lib/utils";

export interface SectionBadgeProps {
  title: string;
  className?: string;
  dotClassName?: string;
}

/**
 * Canonical Section Eyebrow Label (Section A, Item 4)
 * - Transparent background (not white / not light-green)
 * - Text color: consistently green (text-brand-green / text-brand-green-text)
 * - Fixed accent pulsing orange dot
 */
export function SectionBadge({ title, className, dotClassName }: SectionBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md", className)}>
      <span className={cn("size-1.5 rounded-full bg-brand-orange animate-pulse shrink-0", dotClassName)} />
      <span>{title}</span>
    </span>
  );
}

