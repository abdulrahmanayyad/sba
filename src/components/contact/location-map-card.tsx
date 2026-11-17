import { ExternalLink, MapPin } from "lucide-react";

interface LocationMapCardProps {
  ar?: boolean;
  className?: string;
}

export function LocationMapCard({ ar = true, className = "" }: LocationMapCardProps) {
  // Direct Google Maps location search URL for BUE Science & Innovation Park
  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=30.1030235,31.6033879+(The+British+University+in+Egypt+-+BUE+Science+%26+Innovation+Park)";

  // Exact zoom scale (1d27613.5) framing Road 50, Madinaty, BUE, and All Seasons Park
  const EMBED_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27613.535053323414!2d31.60338787555627!3d30.103023474895692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145817c76899144d%3A0xe54d6faebdf98687!2sThe%20British%20University%20in%20Egypt%20(BUE)!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg";

  return (
    <div
      className={`relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-slate-200/90 dark:border-white/15 bg-slate-100 dark:bg-slate-900/80 shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
      dir="ltr"
    >
      {/* 1. Top-Left: "Open in Maps" Floating Button */}
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open in Google Maps"
        className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#1a73e8] shadow-md backdrop-blur-xs hover:bg-white hover:text-blue-700 hover:shadow-lg transition-all duration-200 cursor-pointer select-none no-underline"
      >
        <span>Open in Maps</span>
        <ExternalLink className="size-3.5 stroke-[2.2]" />
      </a>

      {/* 2. Interactive Google Maps Embed */}
      <iframe
        title={ar ? "موقع مقر مجموعة سامي بن عياد على خرائط Google" : "Sami Bin Ayyad Group Headquarters on Google Maps"}
        src={EMBED_SRC}
        className="size-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* 3. Bottom-Right: Floating BUE Science & Innovation Park Pill Badge */}
      <div className="absolute bottom-6 right-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold text-slate-800 shadow-md backdrop-blur-md select-none">
        <span className="font-semibold tracking-tight text-[11px] sm:text-xs">BUE Science & Innovation Park</span>
        <MapPin className="size-3.5 text-brand-orange shrink-0 fill-brand-orange/20" />
      </div>
    </div>
  );
}
