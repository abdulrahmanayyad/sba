import React, { useMemo, useRef, useState } from "react";
import {
  WORLD_COUNTRIES,
  WORLD_GRATICULE_PATH,
  projectLatLng,
} from "@/lib/world-map-paths";
import { cn } from "@/lib/utils";

export interface GeographicMapMarker {
  code: string;
  /** Optional normalized ISO-2 or ISO-3 code used to tint the geographic polygon */
  isoCode?: string | undefined;
  /** Optional ISO alpha-2 code for flagcdn image */
  flagIso2?: string | undefined;
  /** Optional emoji flag fallback */
  flagEmoji?: string | undefined;
  nameAr: string;
  nameEn: string;
  lat: number;
  lng: number;
  badgeCount?: number | undefined;
  subtitleAr?: string | undefined;
  subtitleEn?: string | undefined;
}

interface GeographicWorldMapProps {
  markers: GeographicMapMarker[];
  activeCode?: string | null;
  onSelectMarker: (code: string) => void;
  ar?: boolean;
  originCoords?: { lat: number; lng: number };
  originIsoCodes?: string[];
  className?: string;
  maxHeightClass?: string;
}

const DEFAULT_ORIGIN = { lat: 30.0444, lng: 31.2357 }; // Cairo, Egypt
const DEFAULT_ORIGIN_ISOS = ["EG", "EGY"];

const BASE_W = 1000;
const BASE_H = 500;

export function GeographicWorldMap({
  markers,
  activeCode,
  onSelectMarker,
  ar = true,
  originCoords = DEFAULT_ORIGIN,
  originIsoCodes = DEFAULT_ORIGIN_ISOS,
  className,
  maxHeightClass = "min-h-[340px] sm:min-h-[400px]",
}: GeographicWorldMapProps) {
  const [hoveredCode, setHoveredCode] = useState<string | null>(null);
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef<{
    clientX: number;
    clientY: number;
    panX: number;
    panY: number;
    moved: boolean;
  } | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clampedZoom = Math.max(1, Math.min(4, zoom));
  const vbW = BASE_W / clampedZoom;
  const vbH = BASE_H / clampedZoom;

  const clampPan = (px: number, py: number, z: number) => {
    const w = BASE_W / z;
    const h = BASE_H / z;
    return {
      x: Math.max(0, Math.min(BASE_W - w, px)),
      y: Math.max(0, Math.min(BASE_H - h, py)),
    };
  };

  const vbX = Math.max(0, Math.min(BASE_W - vbW, pan.x));
  const vbY = Math.max(0, Math.min(BASE_H - vbH, pan.y));

  const handleZoomStep = (delta: number) => {
    const nextZoom = Math.max(1, Math.min(4, Number((clampedZoom + delta).toFixed(2))));
    const centerX = vbX + vbW / 2;
    const centerY = vbY + vbH / 2;
    const nextW = BASE_W / nextZoom;
    const nextH = BASE_H / nextZoom;
    setZoom(nextZoom);
    setPan(clampPan(centerX - nextW / 2, centerY - nextH / 2, nextZoom));
  };

  const handleResetView = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (clampedZoom <= 1) return;
    if ((e.target as HTMLElement).closest("[data-map-control]")) return;
    dragStartRef.current = {
      clientX: e.clientX,
      clientY: e.clientY,
      panX: vbX,
      panY: vbY,
      moved: false,
    };
    setIsDragging(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    const dx = e.clientX - dragStartRef.current.clientX;
    const dy = e.clientY - dragStartRef.current.clientY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
      dragStartRef.current.moved = true;
    }
    const svgDx = (dx / rect.width) * vbW;
    const svgDy = (dy / rect.height) * vbH;
    setPan(clampPan(dragStartRef.current.panX - svgDx, dragStartRef.current.panY - svgDy, clampedZoom));
  };

  const handlePointerUp = () => {
    dragStartRef.current = null;
    setIsDragging(false);
  };

  // Map normalized ISO codes -> marker so polygons themselves become hoverable & clickable
  const markerByIso = useMemo(() => {
    const map = new Map<string, GeographicMapMarker>();
    for (const m of markers) {
      const code = (m.isoCode || m.code).toUpperCase();
      map.set(code, m);
    }
    return map;
  }, [markers]);

  const originPoint = useMemo(
    () => projectLatLng(originCoords.lat, originCoords.lng),
    [originCoords.lat, originCoords.lng],
  );

  const projectedMarkers = useMemo(
    () =>
      markers.map((m) => ({
        ...m,
        pos: projectLatLng(m.lat, m.lng),
      })),
    [markers],
  );

  const activeMarker = useMemo(
    () => projectedMarkers.find((m) => m.code === activeCode) || null,
    [projectedMarkers, activeCode],
  );

  const hoveredMarker = useMemo(
    () => projectedMarkers.find((m) => m.code === hoveredCode) || null,
    [projectedMarkers, hoveredCode],
  );

  const focusMarker = hoveredMarker || activeMarker;

  // Build quadratic curve route from Egypt origin hub to active marker
  const activeArcPath = useMemo(() => {
    if (!activeMarker) return null;
    const iso = (activeMarker.isoCode || activeMarker.code).toUpperCase();
    if (originIsoCodes.includes(iso)) return null;
    const x1 = originPoint.x;
    const y1 = originPoint.y;
    const x2 = activeMarker.pos.x;
    const y2 = activeMarker.pos.y;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dist = Math.hypot(dx, dy);
    if (dist < 4) return null;
    const lift = Math.min(95, Math.max(18, dist * 0.28));
    const cx = (x1 + x2) / 2;
    const cy = Math.max(12, Math.min(y1, y2) - lift);
    return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  }, [activeMarker, originPoint, originIsoCodes]);

  // Inverse scale keeps pins sharp without bloating when zooming in
  const pinScale = 1 / Math.pow(clampedZoom, 0.7);

  // Sort markers so non-selected render first and active/hovered render on top
  const orderedMarkers = useMemo(() => {
    return [...projectedMarkers].sort((a, b) => {
      const scoreA = a.code === activeCode ? 2 : a.code === hoveredCode ? 1 : 0;
      const scoreB = b.code === activeCode ? 2 : b.code === hoveredCode ? 1 : 0;
      return scoreA - scoreB;
    });
  }, [projectedMarkers, activeCode, hoveredCode]);

  const findCountryMarker = (iso2: string, iso3: string) => {
    return (
      markerByIso.get(iso2.toUpperCase()) ||
      markerByIso.get(iso3.toUpperCase()) ||
      null
    );
  };

  // Floating tooltip position in container %
  const tooltipPos = useMemo(() => {
    if (!focusMarker) return null;
    const leftPct = ((focusMarker.pos.x - vbX) / vbW) * 100;
    const topPct = ((focusMarker.pos.y - vbY) / vbH) * 100;
    if (leftPct < 0 || leftPct > 100 || topPct < 0 || topPct > 100) return null;
    const placeBelow = topPct < 24;
    return {
      leftPct: Math.max(12, Math.min(88, leftPct)),
      topPct,
      placeBelow,
    };
  }, [focusMarker, vbX, vbY, vbW, vbH]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      className={cn(
        "relative aspect-[2/1] w-full overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/15 bg-gradient-to-b from-[#f5f8f8] via-[#f0f5f4] to-[#e7efed] dark:from-slate-950/95 dark:via-slate-900/95 dark:to-emerald-950/30 shadow-inner select-none",
        clampedZoom > 1 ? (isDragging ? "cursor-grabbing" : "cursor-grab") : "",
        maxHeightClass,
        className,
      )}
    >
      {/* Top-End Map Zoom Controls */}
      <div
        data-map-control
        className="absolute end-3 top-3 z-20 flex flex-col gap-1 rounded-xl border border-slate-200/90 dark:border-white/15 bg-white/85 dark:bg-slate-900/80 p-1 shadow-md backdrop-blur-xl"
      >
        <button
          type="button"
          onClick={() => handleZoomStep(0.6)}
          disabled={clampedZoom >= 4}
          aria-label={ar ? "تكبير الخريطة" : "Zoom in"}
          className="flex size-7 items-center justify-center rounded-lg text-sm font-bold leading-none text-slate-700 dark:text-slate-200 hover:bg-emerald-500/15 hover:text-emerald-700 disabled:opacity-35 transition-colors cursor-pointer"
        >
          +
        </button>
        <button
          type="button"
          onClick={() => handleZoomStep(-0.6)}
          disabled={clampedZoom <= 1}
          aria-label={ar ? "تصغير الخريطة" : "Zoom out"}
          className="flex size-7 items-center justify-center rounded-lg text-sm font-bold leading-none text-slate-700 dark:text-slate-200 hover:bg-emerald-500/15 hover:text-emerald-700 disabled:opacity-35 transition-colors cursor-pointer"
        >
          −
        </button>
        {clampedZoom > 1 && (
          <button
            type="button"
            onClick={handleResetView}
            aria-label={ar ? "إعادة ضبط الخريطة" : "Reset map view"}
            className="flex size-7 items-center justify-center rounded-lg text-xs font-bold leading-none text-slate-700 dark:text-slate-200 hover:bg-brand-orange/15 hover:text-brand-orange transition-colors cursor-pointer border-t border-slate-200/70 dark:border-white/10 pt-0.5"
          >
            ↺
          </button>
        )}
      </div>

      {/* Main Geographic SVG Map */}
      <svg
        viewBox={`${vbX.toFixed(1)} ${vbY.toFixed(1)} ${vbW.toFixed(1)} ${vbH.toFixed(1)}`}
        className="h-full w-full block"
        role="img"
        aria-label={ar ? "خريطة جغرافية تفاعلية لدول العالم" : "Interactive geographic world map"}
      >
        <defs>
          <radialGradient id="sbaOriginRadarGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.48" />
            <stop offset="55%" stopColor="#10b981" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="sbaTargetGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7a00" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#ff7a00" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#ff7a00" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="sbaRouteArcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="55%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#ff7a00" />
          </linearGradient>

          <filter id="sbaArcGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="sbaPinShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.2" floodColor="#0f172a" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Subtle Geographic Graticule (Lat/Lng Curves) */}
        <path
          d={WORLD_GRATICULE_PATH}
          fill="none"
          stroke="#94a3b8"
          strokeOpacity="0.16"
          strokeWidth={0.5 / clampedZoom}
          strokeDasharray={`${3 / clampedZoom} ${4 / clampedZoom}`}
        />

        {/* World Countries Vector Layer with Borders */}
        <g>
          {WORLD_COUNTRIES.map((country, idx) => {
            const matchedMarker = findCountryMarker(country.iso2, country.iso3);
            const isOrigin =
              originIsoCodes.includes(country.iso2.toUpperCase()) ||
              originIsoCodes.includes(country.iso3.toUpperCase());
            const isSelected = Boolean(matchedMarker && matchedMarker.code === activeCode);
            const isHovered = Boolean(matchedMarker && matchedMarker.code === hoveredCode);

            let fill = "#dce5e3"; // Neutral continent/country tone
            let stroke = "#ffffff";
            let strokeWidth = 0.65 / clampedZoom;

            if (isSelected) {
              fill = "#0f766e"; // Deep rich teal highlight for selected country
              stroke = "#ffffff";
              strokeWidth = 1.05 / clampedZoom;
            } else if (isHovered) {
              fill = "#5aa897";
              stroke = "#ffffff";
              strokeWidth = 0.9 / clampedZoom;
            } else if (isOrigin) {
              fill = "#a7f3d0";
              stroke = "#10b981";
              strokeWidth = 0.85 / clampedZoom;
            } else if (matchedMarker) {
              fill = "#bfd8d1"; // Listed partner markets subtly tinted sage-emerald
              stroke = "#ffffff";
            }

            return (
              <path
                key={`${country.iso3 || country.iso2}-${idx}`}
                d={country.d}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                strokeLinejoin="round"
                className={cn(
                  "transition-colors duration-200",
                  matchedMarker ? "cursor-pointer" : "pointer-events-none",
                )}
                onClick={() => {
                  if (dragStartRef.current?.moved) return;
                  if (matchedMarker) onSelectMarker(matchedMarker.code);
                }}
                onMouseEnter={() => {
                  if (matchedMarker) setHoveredCode(matchedMarker.code);
                }}
                onMouseLeave={() => {
                  if (matchedMarker) setHoveredCode((prev) => (prev === matchedMarker.code ? null : prev));
                }}
              />
            );
          })}
        </g>

        {/* Active Curved Connection Arc (Egypt Origin -> Selected Country) */}
        {activeArcPath && (
          <g className="pointer-events-none">
            <path
              d={activeArcPath}
              fill="none"
              stroke="url(#sbaRouteArcGrad)"
              strokeWidth={4 / clampedZoom}
              strokeOpacity="0.28"
              strokeLinecap="round"
              filter="url(#sbaArcGlow)"
            />
            <path
              d={activeArcPath}
              fill="none"
              stroke="url(#sbaRouteArcGrad)"
              strokeWidth={2 / clampedZoom}
              strokeLinecap="round"
              strokeDasharray={`${5 / clampedZoom} ${3 / clampedZoom}`}
            >
              <animate
                attributeName="stroke-dashoffset"
                from={`${16 / clampedZoom}`}
                to="0"
                dur="1.4s"
                repeatCount="indefinite"
              />
            </path>
          </g>
        )}

        {/* Egypt Origin Hub Beacon */}
        <g
          transform={`translate(${originPoint.x.toFixed(1)}, ${originPoint.y.toFixed(1)}) scale(${pinScale.toFixed(3)})`}
          className="pointer-events-none"
        >
          <circle r="22" fill="url(#sbaOriginRadarGrad)" />
          <circle
            r="11"
            fill="none"
            stroke="#10b981"
            strokeWidth="1.2"
            strokeOpacity="0.5"
            className="animate-ping"
          />
          <circle r="5.2" fill="#10b981" stroke="#ffffff" strokeWidth="2" filter="url(#sbaPinShadow)" />
          <circle r="1.8" fill="#ffffff" />
        </g>

        {/* Country Pin Markers */}
        {orderedMarkers.map((m) => {
          const isSelected = m.code === activeCode;
          const isHovered = m.code === hoveredCode;
          const isProminent = isSelected || isHovered;
          const localScale = pinScale * (isSelected ? 1.28 : isHovered ? 1.15 : 0.9);
          const pinFill = isSelected ? "#ff7a00" : isHovered ? "#10b981" : "#0f766e";

          return (
            <g
              key={m.code}
              transform={`translate(${m.pos.x.toFixed(1)}, ${m.pos.y.toFixed(1)}) scale(${localScale.toFixed(3)})`}
              onClick={(e) => {
                e.stopPropagation();
                if (dragStartRef.current?.moved) return;
                onSelectMarker(m.code);
              }}
              onMouseEnter={() => setHoveredCode(m.code)}
              onMouseLeave={() => setHoveredCode((prev) => (prev === m.code ? null : prev))}
              className="cursor-pointer"
            >
              {/* Invisible generous hit target so small nearby pins are easy to click */}
              <circle cx="0" cy="-7" r="10" fill="transparent" />

              {/* Selected Country Concentric Halo */}
              {isSelected && (
                <>
                  <circle cx="0" cy="0" r="18" fill="url(#sbaTargetGlowGrad)" />
                  <circle
                    cx="0"
                    cy="0"
                    r="11"
                    fill="none"
                    stroke="#ff7a00"
                    strokeWidth="1.4"
                    strokeOpacity="0.7"
                    className="animate-ping"
                  />
                </>
              )}

              {/* Subtle ground shadow at pin base */}
              <ellipse cx="0" cy="0.5" rx="3.5" ry="1.3" fill="#0f172a" fillOpacity={isProminent ? 0.3 : 0.2} />

              {/* Sleek Teardrop Map Pin anchored cleanly at (0, 0) */}
              <path
                d="M 0 0 C -3.8 -5.4 -6.4 -8.6 -6.4 -12.2 A 6.4 6.4 0 1 1 6.4 -12.2 C 6.4 -8.6 3.8 -5.4 0 0 Z"
                fill={pinFill}
                stroke="#ffffff"
                strokeWidth={isProminent ? "1.6" : "1.2"}
                filter="url(#sbaPinShadow)"
                className="transition-colors duration-200"
              />

              {/* Crisp Inner Pin Dot */}
              <circle cx="0" cy="-12.2" r="2.4" fill="#ffffff" />
            </g>
          );
        })}
      </svg>

      {/* Glassmorphic Floating Pin Callout for Selected or Hovered Country */}
      {focusMarker && tooltipPos && (
        <div
          style={{
            left: `${tooltipPos.leftPct}%`,
            top: `${tooltipPos.topPct}%`,
          }}
          className={cn(
            "pointer-events-none absolute z-20 -translate-x-1/2 transition-all duration-150",
            tooltipPos.placeBelow ? "translate-y-3" : "-translate-y-[calc(100%+18px)]",
          )}
        >
          <div className="flex items-center gap-2 whitespace-nowrap rounded-full border border-slate-200/90 dark:border-white/20 bg-white/92 dark:bg-slate-900/92 px-3 py-1.5 text-xs font-bold text-slate-900 dark:text-white shadow-lg backdrop-blur-xl">
            {focusMarker.flagIso2 ? (
              <img
                src={`https://flagcdn.com/w40/${focusMarker.flagIso2.toLowerCase()}.png`}
                alt={ar ? focusMarker.nameAr : focusMarker.nameEn}
                className="h-3.5 w-5 rounded-[2px] object-cover border border-slate-200 shrink-0"
              />
            ) : focusMarker.flagEmoji ? (
              <span className="text-sm leading-none">{focusMarker.flagEmoji}</span>
            ) : null}
            <span>{ar ? focusMarker.nameAr : focusMarker.nameEn}</span>
            {typeof focusMarker.badgeCount === "number" && (
              <span className="rounded-full bg-brand-orange/15 px-1.5 py-0.5 text-[10px] font-extrabold text-brand-orange">
                {focusMarker.badgeCount}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Compact Bottom-Start Origin/Pin Legend */}
      <div className="pointer-events-none absolute bottom-2.5 start-3 z-10 hidden sm:flex items-center gap-3 rounded-full border border-slate-200/80 dark:border-white/15 bg-white/80 dark:bg-slate-900/80 px-3 py-1 text-[10px] font-semibold text-slate-700 dark:text-slate-200 shadow-sm backdrop-blur-md">
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-emerald-500 ring-2 ring-emerald-500/30" />
          <span>{ar ? "مصر (المحور)" : "Egypt (Hub)"}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-teal-700" />
          <span>{ar ? "الأسواق" : "Markets"}</span>
        </span>
        <span className="flex items-center gap-1.5">
          <span className="size-2 rounded-full bg-brand-orange ring-2 ring-brand-orange/30" />
          <span>{ar ? "المحدد" : "Selected"}</span>
        </span>
      </div>
    </div>
  );
}

