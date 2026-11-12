const APPAREL_FLAG_ISO2_MAP: Record<string, string> = {
  // Market codes
  SAU: "sa",
  LBY: "ly",
  TUN: "tn",
  DZA: "dz",
  MRT: "mr",
  MAR: "ma",
  JOR: "jo",
  OMN: "om",
  PSE: "ps",
  IRQ: "iq",
  "IRQ-KRD": "iq",
  NGA: "ng",
  RWA: "rw",
  ZAF: "za",
  TZA: "tz",
  ESP: "es",
  FRA: "fr",
  ITA: "it",
  TUR: "tr",
  "ISR-TLV": "il",

  // Country names used in inquiries & partner records
  "saudi arabia": "sa",
  libya: "ly",
  tunisia: "tn",
  algeria: "dz",
  mauritania: "mr",
  morocco: "ma",
  jordan: "jo",
  oman: "om",
  palestine: "ps",
  iraq: "iq",
  "kurdistan region (iraq)": "iq",
  nigeria: "ng",
  rwanda: "rw",
  "south africa": "za",
  tanzania: "tz",
  spain: "es",
  france: "fr",
  italy: "it",
  turkey: "tr",
  türkiye: "tr",
  "tel aviv": "il",
  israel: "il",
};

export function getApparelFlagIso2(codeOrName: string): string {
  const trimmed = codeOrName.trim();
  return (
    APPAREL_FLAG_ISO2_MAP[trimmed] ??
    APPAREL_FLAG_ISO2_MAP[trimmed.toLowerCase()] ??
    "un"
  );
}

interface ApparelFlagProps {
  codeOrName: string;
  alt: string;
  className?: string;
}

export function ApparelFlag({ codeOrName, alt, className = "h-4 w-6" }: ApparelFlagProps) {
  const iso2 = getApparelFlagIso2(codeOrName);
  return (
    <img
      src={`https://flagcdn.com/w40/${iso2}.png`}
      srcSet={`https://flagcdn.com/w80/${iso2}.png 2x`}
      alt={alt}
      loading="lazy"
      className={`${className} rounded-[3px] object-cover border border-border/60 shadow-xs shrink-0 select-none`}
    />
  );
}

