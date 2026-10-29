import { ChevronLeft, ChevronRight, Pause, Play, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/components/home/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// All 58 factory images in sequential order
const factoryImages = Array.from({ length: 58 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return `/factory/slide-${num}.jpg`;
});

export function FactorySlider({ ar }: { ar: boolean }) {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const thumbnailScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % factoryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying]);

  // Keep active thumbnail centered in scrub strip
  useEffect(() => {
    if (!thumbnailScrollRef.current) return;
    const container = thumbnailScrollRef.current;
    const activeThumb = container.children[current] as HTMLElement | undefined;
    if (activeThumb) {
      container.scrollTo({
        left: activeThumb.offsetLeft - container.offsetWidth / 2 + activeThumb.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  }, [current]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? factoryImages.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % factoryImages.length);
  };

  const activeImage = factoryImages[current]!;

  return (
    <section className="site-container section-band">
      <Reveal className="mx-auto max-w-3xl text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3.5 py-1 text-xs font-bold tracking-wide text-foreground backdrop-blur-md">
          <span className="size-1.5 rounded-full bg-brand-orange animate-pulse" />
          <span>{ar ? "جولة تصويرية متكاملة" : "Visual Factory Tour"}</span>
        </div>
        <h2 className="section-title mt-1">{ar ? "نظرة عامة على المصنع" : "Factory Overview"}</h2>
      </Reveal>

      {/* Main Full Photo Slider Container — Focused purely on images */}
      <div
        className="group relative mt-10 overflow-hidden rounded-[2rem] border border-white/20 bg-black/40 shadow-2xl backdrop-blur-xl"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full max-h-[640px] overflow-hidden bg-black/80 flex items-center justify-center">
          <img
            key={activeImage}
            src={activeImage}
            alt={ar ? `جولة المصنع - صورة ${current + 1}` : `Factory Tour - Slide ${current + 1}`}
            className="size-full object-cover transition-all duration-700 ease-out animate-in fade-in zoom-in-95"
            loading="lazy"
          />

          {/* Top Info Badge — Slide Counter */}
          <div className="absolute start-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/65 px-4 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md">
            <span className="font-mono text-brand-orange">
              {String(current + 1).padStart(2, "0")}
            </span>
            <span className="text-white/60">/</span>
            <span className="font-mono text-white/80">58</span>
            <span className="border-s border-white/20 ps-2 ms-1 text-[11px] text-white/90">
              {ar ? "صورة المصنع" : "Factory View"}
            </span>
          </div>

          {/* Floating Left Arrow */}
          <button
            type="button"
            aria-label={ar ? "الصورة السابقة" : "Previous slide"}
            onClick={prevSlide}
            className="absolute start-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-brand-orange hover:border-brand-orange active:scale-95 z-20 cursor-pointer"
          >
            <ChevronLeft className="size-6 rtl:rotate-180" />
          </button>

          {/* Floating Right Arrow */}
          <button
            type="button"
            aria-label={ar ? "الصورة التالية" : "Next slide"}
            onClick={nextSlide}
            className="absolute end-4 top-1/2 -translate-y-1/2 flex size-12 items-center justify-center rounded-full border border-white/30 bg-black/50 text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-brand-orange hover:border-brand-orange active:scale-95 z-20 cursor-pointer"
          >
            <ChevronRight className="size-6 rtl:rotate-180" />
          </button>

          {/* Bottom Bar — Autoplay Control & Progress Indicator */}
          <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent p-5 text-white">
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                aria-label={isPlaying ? "Pause autoplay" : "Resume autoplay"}
                onClick={() => setIsPlaying((p) => !p)}
                className="flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-3.5 py-1 text-xs text-white backdrop-blur-md hover:bg-white/20"
              >
                {isPlaying ? <Pause className="size-3.5 text-brand-orange" /> : <Play className="size-3.5 text-brand-green" />}
                <span className="font-mono text-[11px]">{isPlaying ? (ar ? "إيقاف مؤقت" : "Pause") : (ar ? "تشغيل" : "Play")}</span>
              </Button>
            </div>

            {/* Quick scrubber preview */}
            <span className="font-mono text-xs font-bold text-white/90">
              {ar ? `${current + 1} من 58` : `${current + 1} of 58`}
            </span>
          </div>
        </div>

        {/* Horizontal Thumbnail Scrubber Strip */}
        <div
          ref={thumbnailScrollRef}
          className="no-scrollbar flex gap-2 overflow-x-auto bg-black/60 p-3 backdrop-blur-xl"
        >
          {factoryImages.map((img, idx) => {
            const isSelected = idx === current;
            return (
              <button
                key={img}
                type="button"
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => setCurrent(idx)}
                className={cn(
                  "relative aspect-video w-16 sm:w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "border-brand-orange scale-105 shadow-md shadow-brand-orange/40 opacity-100"
                    : "border-transparent opacity-50 hover:opacity-90 hover:scale-100"
                )}
              >
                <img src={img} alt="" loading="lazy" className="size-full object-cover" />
                <span className="absolute bottom-0.5 end-0.5 rounded bg-black/70 px-1 font-mono text-[9px] text-white">
                  {idx + 1}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}


