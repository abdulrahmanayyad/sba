import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { whoWeServe } from "./group-data";

export function PartnersSlider({ ar }: { ar: boolean }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = whoWeServe.length;

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, total]);

  const prev = () => setCurrent((c) => (c === 0 ? total - 1 : c - 1));
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div
      className="relative mt-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slider Controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          {whoWeServe.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrent(idx)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                current === idx ? "w-8 bg-brand-green" : "w-2 bg-border hover:bg-muted-foreground/50"
              )}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={ar ? next : prev}
            className="size-9 rounded-full border-white/20 bg-background/80 shadow-sm backdrop-blur-md hover:bg-brand-green hover:text-white transition-all cursor-pointer"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={ar ? prev : next}
            className="size-9 rounded-full border-white/20 bg-background/80 shadow-sm backdrop-blur-md hover:bg-brand-green hover:text-white transition-all cursor-pointer"
            aria-label="Next Slide"
          >
            <ChevronRight className="size-4 rtl:rotate-180" />
          </Button>
        </div>
      </div>

      {/* Slider Cards — Dynamic window view */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[0, 1, 2].map((offset) => {
          const itemIndex = (current + offset) % total;
          const audience = whoWeServe[itemIndex];
          if (!audience) return null;

          return (
            <div
              key={audience.en}
              className="group relative overflow-hidden rounded-3xl border border-white/25 bg-background/80 p-6 sm:p-7 shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:border-brand-green/50 hover:scale-[1.02] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className={cn(
                    "rounded-full bg-brand-green/10 border border-brand-green/30 px-3 py-1 text-[10px] font-bold text-brand-green-text uppercase tracking-wider",
                    ar ? "font-head" : "font-mono"
                  )}>
                    {ar ? audience.sectorAr : audience.sectorEn}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground/60">
                    0{itemIndex + 1} / 0{total}
                  </span>
                </div>

                <h3 className="font-head text-lg sm:text-xl font-extrabold text-foreground leading-snug group-hover:text-brand-green transition-colors">
                  {ar ? audience.ar : audience.en}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-muted-foreground">
                  {ar ? "شراكة استراتيجية وتجارية" : "Strategic Partnership"}
                </span>
                <span className="size-2 rounded-full bg-brand-orange animate-pulse" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

