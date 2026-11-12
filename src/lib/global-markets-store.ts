import { useCallback, useEffect, useState } from "react";
import {
  GLOBAL_MARKET_SECTORS,
  PUBLISHED_GLOBAL_STUDIES,
  STUDY_SECTION_BLUEPRINT,
  SOURCE_CLASSIFICATION_LABELS,
  type GlobalMarketSectorId,
  type GlobalMarketStudy,
  type StudyStatus,
} from "./global-markets-data";

const STORAGE_KEY = "sba_global_markets_studies_v1";
const STORE_EVENT = "sba-global-markets-updated";

function readCustomStudiesFromStorage(): GlobalMarketStudy[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCustomStudiesToStorage(items: GlobalMarketStudy[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  window.dispatchEvent(new Event(STORE_EVENT));
}

export function mergeGlobalMarketStudies(customItems: GlobalMarketStudy[]): GlobalMarketStudy[] {
  const byId = new Map<string, GlobalMarketStudy>();
  for (const s of PUBLISHED_GLOBAL_STUDIES) {
    byId.set(s.id, s);
  }
  for (const s of customItems) {
    byId.set(s.id, { ...s, isCustomStored: true });
  }
  return Array.from(byId.values());
}

/**
 * React hook returning all published + CMS-managed Global Market Studies.
 * Starts deterministically with PUBLISHED_GLOBAL_STUDIES during SSR to avoid hydration mismatch.
 */
export function useGlobalMarketsStudies() {
  const [customStudies, setCustomStudies] = useState<GlobalMarketStudy[]>([]);

  const reload = useCallback(() => {
    setCustomStudies(readCustomStudiesFromStorage());
  }, []);

  useEffect(() => {
    reload();
    const handleSync = () => reload();
    window.addEventListener(STORE_EVENT, handleSync);
    window.addEventListener("storage", handleSync);
    return () => {
      window.removeEventListener(STORE_EVENT, handleSync);
      window.removeEventListener("storage", handleSync);
    };
  }, [reload]);

  const studies = mergeGlobalMarketStudies(customStudies);

  return { studies, customStudies, reload };
}

export function upsertGlobalMarketStudy(study: GlobalMarketStudy): GlobalMarketStudy[] {
  const existing = readCustomStudiesFromStorage();
  const prevIndex = existing.findIndex((s) => s.id === study.id || s.slug === study.slug);
  const nowIso = new Date().toISOString().slice(0, 10);

  let nextStudy: GlobalMarketStudy = { ...study, isCustomStored: true };

  if (prevIndex >= 0) {
    const prev = existing[prevIndex]!;
    const snapshot = {
      version: prev.version || "1.0",
      archivedAt: nowIso,
      status: prev.status,
      lastUpdated: prev.lastUpdated,
      summaryAr: prev.sections.executiveSummary?.summaryAr || prev.subtitleAr,
      summaryEn: prev.sections.executiveSummary?.summaryEn || prev.subtitleEn,
    };
    const prevVersions = prev.archivedVersions ?? [];
    nextStudy = {
      ...nextStudy,
      archivedVersions: [snapshot, ...prevVersions],
    };
    existing[prevIndex] = nextStudy;
  } else {
    existing.unshift(nextStudy);
  }

  writeCustomStudiesToStorage(existing);
  return existing;
}

export function removeCustomGlobalMarketStudy(studyId: string) {
  const existing = readCustomStudiesFromStorage();
  const next = existing.filter((s) => s.id !== studyId);
  writeCustomStudiesToStorage(next);
  return next;
}

export function validateAndNormalizeStudyJson(raw: unknown): {
  validStudies: GlobalMarketStudy[];
  errors: string[];
} {
  const items = Array.isArray(raw) ? raw : [raw];
  const validStudies: GlobalMarketStudy[] = [];
  const errors: string[] = [];

  items.forEach((item, index) => {
    if (!item || typeof item !== "object") {
      errors.push(`Item #${index + 1}: must be a JSON object.`);
      return;
    }
    const obj = item as Partial<GlobalMarketStudy>;
    if (!obj.sector || !["construction", "environmental", "garment", "food"].includes(obj.sector)) {
      errors.push(`Item #${index + 1}: invalid or missing sector (must be construction | environmental | garment | food).`);
      return;
    }
    if (!obj.titleAr || !obj.titleEn) {
      errors.push(`Item #${index + 1}: titleAr and titleEn are required.`);
      return;
    }
    if (!obj.countryNameAr || !obj.countryNameEn) {
      errors.push(`Item #${index + 1}: countryNameAr and countryNameEn are required.`);
      return;
    }
    // Enforce Egypt-only scope guard on Construction sector
    if (obj.sector === "construction" && obj.scope && obj.scope !== "egypt_only") {
      errors.push(`Item #${index + 1}: Construction sector scope must be "egypt_only".`);
      return;
    }

    const nowDate = new Date().toISOString().slice(0, 10);
    const slug =
      obj.slug ||
      obj.titleEn
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    validStudies.push({
      id: obj.id || `gms-${obj.sector}-${slug}-${Date.now()}`,
      slug,
      sector: obj.sector,
      scope: obj.sector === "construction" ? "egypt_only" : obj.scope || "global",
      region: obj.sector === "construction" ? "egypt" : obj.region || "arab_world",
      countryCode: obj.countryCode,
      countryNameAr: obj.countryNameAr,
      countryNameEn: obj.countryNameEn,
      subRegionOrProjectAr: obj.subRegionOrProjectAr,
      subRegionOrProjectEn: obj.subRegionOrProjectEn,
      activityTypeAr: obj.activityTypeAr || "",
      activityTypeEn: obj.activityTypeEn || "",
      productTagsAr: Array.isArray(obj.productTagsAr) ? obj.productTagsAr : [],
      productTagsEn: Array.isArray(obj.productTagsEn) ? obj.productTagsEn : [],
      titleAr: obj.titleAr,
      titleEn: obj.titleEn,
      subtitleAr: obj.subtitleAr || "",
      subtitleEn: obj.subtitleEn || "",
      status: obj.status || "under_review",
      approvalStatus: obj.approvalStatus || "pending_review",
      issueDate: obj.issueDate || nowDate,
      lastUpdated: obj.lastUpdated || nowDate,
      version: obj.version || "1.0",
      pdfUrl: obj.pdfUrl,
      coverImage: obj.coverImage,
      galleryImages: Array.isArray(obj.galleryImages) ? obj.galleryImages : undefined,
      kpis: Array.isArray(obj.kpis) ? obj.kpis : [],
      charts: Array.isArray(obj.charts) ? obj.charts : [],
      tables: Array.isArray(obj.tables) ? obj.tables : [],
      sections: obj.sections || {},
      comparisonMetrics: obj.comparisonMetrics,
      sources: Array.isArray(obj.sources) ? obj.sources : [],
      groupOpportunities: Array.isArray(obj.groupOpportunities) ? obj.groupOpportunities : [],
      globalOpportunityLink: obj.globalOpportunityLink,
      archivedVersions: Array.isArray(obj.archivedVersions) ? obj.archivedVersions : undefined,
      isCustomStored: true,
    });
  });

  return { validStudies, errors };
}

export function getSectorMetrics(
  sectorId: GlobalMarketSectorId,
  studies: GlobalMarketStudy[],
): {
  publishedCount: number;
  status: StudyStatus;
  lastUpdatedYear: string | null;
} {
  const active = studies.filter((s) => s.sector === sectorId && s.status !== "archived");
  const publishedCount = active.length;
  if (publishedCount === 0) {
    return {
      publishedCount: 0,
      status: "in_research",
      lastUpdatedYear: null,
    };
  }

  let status: StudyStatus = "in_research";
  if (active.some((s) => s.status === "completed" && s.approvalStatus === "approved")) {
    status = "completed";
  } else if (active.some((s) => s.status === "under_review")) {
    status = "under_review";
  } else if (active.some((s) => s.status === "needs_update")) {
    status = "needs_update";
  }

  const latestDate = active
    .map((s) => s.lastUpdated)
    .filter(Boolean)
    .sort()
    .reverse()[0];

  return {
    publishedCount,
    status,
    lastUpdatedYear: latestDate ? latestDate.slice(0, 4) : null,
  };
}

export function isStudyDownloadAllowed(study: GlobalMarketStudy): boolean {
  return study.status === "completed" && study.approvalStatus === "approved";
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/**
 * Generates an institutional print-ready PDF report for an approved & completed study.
 * Uses the exact SBA logo, sector, market, verified KPIs with source/year/unit, populated sections,
 * tables, sources classification, and issue/update metadata.
 */
export function openApprovedStudyPdfReport(study: GlobalMarketStudy, ar: boolean) {
  if (!isStudyDownloadAllowed(study)) return;

  if (study.pdfUrl && typeof window !== "undefined") {
    window.open(study.pdfUrl, "_blank", "noopener,noreferrer");
    return;
  }

  if (typeof window === "undefined") return;
  const sector = GLOBAL_MARKET_SECTORS.find((s) => s.id === study.sector);
  const dir = ar ? "rtl" : "ltr";
  const logoSrc = ar ? "/brand/SBA%20logo%20AR.svg" : "/brand/SBA%20logo%20EN.svg";

  const kpiHtml = study.kpis
    .map(
      (k) => `
      <div style="border:1px solid #cbd5e1;border-radius:12px;padding:12px;background:#f8fafc;">
        <div style="font-size:11px;color:#475569;font-weight:700;">${escapeHtml(ar ? k.labelAr : k.labelEn)}</div>
        <div style="font-size:20px;font-weight:800;color:#0f172a;margin:4px 0;">${escapeHtml(k.value)} <span style="font-size:12px;font-weight:600;color:#475569;">${escapeHtml(k.unit)}</span></div>
        <div style="font-size:10px;color:#64748b;">${escapeHtml(ar ? "المصدر:" : "Source:")} ${escapeHtml(k.source)} (${escapeHtml(k.referenceYear)})</div>
      </div>`,
    )
    .join("");

  const sectionsHtml = STUDY_SECTION_BLUEPRINT.map((bp) => {
    const content = study.sections[bp.key];
    if (!content || content.applicable === false) return "";
    const summary = ar ? content.summaryAr : content.summaryEn;
    const bullets = (ar ? content.bulletsAr : content.bulletsEn) || [];
    if (!summary && bullets.length === 0) return "";
    return `
      <section style="margin-bottom:18px;page-break-inside:avoid;">
        <h2 style="font-size:15px;font-weight:800;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:6px;margin-bottom:8px;">
          ${bp.order}. ${escapeHtml(ar ? bp.titleAr : bp.titleEn)}
        </h2>
        ${summary ? `<p style="font-size:12.5px;line-height:1.75;color:#334155;margin:0 0 8px;">${escapeHtml(summary)}</p>` : ""}
        ${
          bullets.length > 0
            ? `<ul style="margin:0;padding-${ar ? "right" : "left"}:18px;font-size:12px;line-height:1.7;color:#334155;">${bullets
                .map((b) => `<li>${escapeHtml(b)}</li>`)
                .join("")}</ul>`
            : ""
        }
      </section>`;
  }).join("");

  const tablesHtml = study.tables
    .map((tbl) => {
      const cols = ar ? tbl.columnsAr : tbl.columnsEn;
      return `
      <div style="margin:16px 0;page-break-inside:avoid;">
        <h3 style="font-size:13px;font-weight:800;color:#0f172a;margin-bottom:4px;">${escapeHtml(ar ? tbl.titleAr : tbl.titleEn)}</h3>
        <div style="font-size:10px;color:#64748b;margin-bottom:6px;">${escapeHtml(ar ? "الوحدة:" : "Unit:")} ${escapeHtml(tbl.unit)} · ${escapeHtml(ar ? "المصدر:" : "Source:")} ${escapeHtml(tbl.source)} (${escapeHtml(tbl.referenceYear)})</div>
        <table style="width:100%;border-collapse:collapse;font-size:11.5px;">
          <thead>
            <tr style="background:#f1f5f9;">${cols
              .map((c) => `<th style="border:1px solid #cbd5e1;padding:6px 8px;text-align:${ar ? "right" : "left"};">${escapeHtml(c)}</th>`)
              .join("")}</tr>
          </thead>
          <tbody>
            ${tbl.rows
              .map(
                (r) =>
                  `<tr>${r
                    .map((cell) => `<td style="border:1px solid #e2e8f0;padding:6px 8px;">${escapeHtml(cell)}</td>`)
                    .join("")}</tr>`,
              )
              .join("")}
          </tbody>
        </table>
      </div>`;
    })
    .join("");

  const sourcesHtml = study.sources
    .map((src) => {
      const cls = SOURCE_CLASSIFICATION_LABELS[src.classification];
      return `<li style="margin-bottom:6px;font-size:11.5px;color:#334155;">
        <strong>${escapeHtml(src.name)}</strong> [${escapeHtml(ar ? cls.ar : cls.en)}] — ${escapeHtml(src.dataYear)}
        ${src.url ? ` (${escapeHtml(src.url)})` : ""}
      </li>`;
    })
    .join("");

  const html = `<!doctype html>
<html lang="${ar ? "ar" : "en"}" dir="${dir}">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(ar ? study.titleAr : study.titleEn)} — SAMI BIN AYYAD GROUP</title>
  <style>
    body { font-family: "IBM Plex Sans Arabic", "Nunito", Arial, sans-serif; color: #0f172a; margin: 28px; background: #fff; }
    @media print { body { margin: 14mm; } }
  </style>
</head>
<body>
  <header style="display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #0f172a;padding-bottom:14px;margin-bottom:20px;">
    <div>
      <img src="${logoSrc}" alt="SAMI BIN AYYAD GROUP" style="height:44px;width:auto;" />
      <div style="font-size:11px;font-weight:700;color:#475569;margin-top:6px;">
        ${escapeHtml(ar ? "الأسواق العالمية | مركز الدراسات الاستراتيجية" : "Global Markets | Strategic Intelligence Center")}
      </div>
    </div>
    <div style="text-align:${ar ? "left" : "right"};font-size:11px;color:#475569;">
      <div><strong>${escapeHtml(ar ? "القطاع:" : "Sector:")}</strong> ${escapeHtml(sector ? (ar ? sector.nameAr : sector.nameEn) : study.sector)}</div>
      <div><strong>${escapeHtml(ar ? "السوق / الدولة:" : "Market / Country:")}</strong> ${escapeHtml(ar ? study.countryNameAr : study.countryNameEn)}</div>
      <div><strong>${escapeHtml(ar ? "تاريخ الإصدار:" : "Issue Date:")}</strong> ${escapeHtml(study.issueDate)} · <strong>${escapeHtml(ar ? "آخر تحديث:" : "Updated:")}</strong> ${escapeHtml(study.lastUpdated)}</div>
    </div>
  </header>

  <h1 style="font-size:22px;font-weight:800;margin:0 0 6px;">${escapeHtml(ar ? study.titleAr : study.titleEn)}</h1>
  <p style="font-size:13px;color:#475569;margin:0 0 18px;">${escapeHtml(ar ? study.subtitleAr : study.subtitleEn)}</p>

  ${kpiHtml ? `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:10px;margin-bottom:22px;">${kpiHtml}</div>` : ""}
  ${sectionsHtml}
  ${tablesHtml}
  ${
    sourcesHtml
      ? `<section style="margin-top:20px;border-top:1px solid #cbd5e1;padding-top:12px;">
          <h2 style="font-size:14px;font-weight:800;margin-bottom:8px;">${escapeHtml(ar ? "المصادر والبيانات" : "Sources & Data")}</h2>
          <ul style="margin:0;padding-${ar ? "right" : "left"}:18px;">${sourcesHtml}</ul>
        </section>`
      : ""
  }
  <script>window.onload = () => { setTimeout(() => window.print(), 250); };</script>
</body>
</html>`;

  const w = window.open("", "_blank", "noopener,noreferrer");
  if (w) {
    w.document.open();
    w.document.write(html);
    w.document.close();
  }
}

