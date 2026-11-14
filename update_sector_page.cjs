const fs = require('fs');

let page = fs.readFileSync('src/components/global-markets/global-markets-sector-page.tsx', 'utf8');

// Replace import
page = page.replace(
  'import { APPAREL_SUBREGIONS_META } from "@/lib/studies/apparel-41-countries";',
  'import { APPAREL_6_SUBREGIONS_META, APPAREL_SUBREGIONS_META } from "@/lib/studies/apparel-master-studies";'
);

// Add sorting and tier filter states
page = page.replace(
  '  const [yearFilter, setYearFilter] = useState<string>("all");',
  `  const [yearFilter, setYearFilter] = useState<string>("all");
  const [tierFilter, setTierFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"score" | "name" | "imports">("score");`
);

// Update sectorStudies sorting and filteredStudies
const oldSectorStudiesRegex = /const sectorStudies = useMemo\(\(\) => \{[\s\S]*?\}, \[studies, sector\.id\]\);/;
const newSectorStudies = `const sectorStudies = useMemo(() => {
    const list = studies.filter((s) => s.sector === sector.id && s.status !== "archived");
    return [...list].sort((a, b) => {
      // Default sort by Opportunity Score descending
      const sa = a.opportunityScore ?? 0;
      const sb = b.opportunityScore ?? 0;
      if (sb !== sa) return sb - sa;
      return (a.countryNameEn || "").localeCompare(b.countryNameEn || "");
    });
  }, [studies, sector.id]);`;

page = page.replace(oldSectorStudiesRegex, newSectorStudies);

// Update filteredStudies to handle tierFilter and sortBy
const oldFilteredRegex = /const filteredStudies = useMemo\(\(\) => \{[\s\S]*?\}, \[sectorStudies, regionFilter, subRegionFilter, priorityFilter, statusFilter, yearFilter, activityFilter, searchQuery, ar\]\);/;

const newFiltered = `const filteredStudies = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const result = sectorStudies.filter((s) => {
      if (regionFilter !== "all" && s.region !== regionFilter) return false;
      if (subRegionFilter !== "all" && s.apparelSubRegion !== subRegionFilter) return false;
      if (priorityFilter !== "all" && s.priorityGrade !== priorityFilter) return false;
      if (statusFilter !== "all" && s.status !== statusFilter) return false;
      if (yearFilter !== "all" && !s.lastUpdated.startsWith(yearFilter)) return false;
      if (tierFilter !== "all") {
        if (tierFilter === "tier1" && !(s.opportunityScore && s.opportunityScore >= 80)) return false;
        if (tierFilter === "tier2" && !(s.opportunityScore && s.opportunityScore >= 65 && s.opportunityScore < 80)) return false;
        if (tierFilter === "tier3" && !(s.opportunityScore && s.opportunityScore >= 50 && s.opportunityScore < 65)) return false;
        if (tierFilter === "tier4" && !(s.opportunityScore && s.opportunityScore < 50)) return false;
      }
      if (activityFilter !== "all") {
        const act = ar ? s.activityTypeAr : s.activityTypeEn;
        if (act !== activityFilter) return false;
      }
      if (q) {
        const hay = [
          s.titleAr,
          s.titleEn,
          s.countryNameAr,
          s.countryNameEn,
          s.subRegionOrProjectAr || "",
          s.subRegionOrProjectEn || "",
          s.activityTypeAr,
          s.activityTypeEn,
          s.opportunityTier || "",
          s.opportunityTierAr || "",
          ...s.productTagsAr,
          ...s.productTagsEn,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    return result.sort((a, b) => {
      if (sortBy === "score") {
        const sa = a.opportunityScore ?? 0;
        const sb = b.opportunityScore ?? 0;
        if (sb !== sa) return sb - sa;
      } else if (sortBy === "imports") {
        const ia = a.tradeIndicatorNumericUsdB ?? 0;
        const ib = b.tradeIndicatorNumericUsdB ?? 0;
        if (ib !== ia) return ib - ia;
      } else if (sortBy === "name") {
        const na = ar ? a.countryNameAr : a.countryNameEn;
        const nb = ar ? b.countryNameAr : b.countryNameEn;
        return na.localeCompare(nb);
      }
      return 0;
    });
  }, [sectorStudies, regionFilter, subRegionFilter, priorityFilter, statusFilter, yearFilter, tierFilter, sortBy, activityFilter, searchQuery, ar]);`;

page = page.replace(oldFilteredRegex, newFiltered);

// Replace sub-region buttons with APPAREL_6_SUBREGIONS_META
page = page.replace(
  '{APPAREL_SUBREGIONS_META.map((reg) => {',
  '{APPAREL_6_SUBREGIONS_META.map((reg) => {'
);
page = page.replace(
  '{APPAREL_SUBREGIONS_META.filter((r) => r.id !== "gcc").map((reg) => (',
  '{APPAREL_6_SUBREGIONS_META.filter((r) => r.id !== "gcc").map((reg) => ('
);

// Sanitize Tanween
page = page.replace(/\u0627\u064B/g, '\u064B\u0627');

fs.writeFileSync('src/components/global-markets/global-markets-sector-page.tsx', page, 'utf8');
console.log('Updated global-markets-sector-page.tsx with master subregions and filtering!');
