import { describe, expect, it } from "vitest";
import { getSectorNavigation, sectionId } from "./sector-navigation";
import { sectorFullMenu, sectors } from "./sector-data";

describe("Sector navigation destinations", () => {
  for (const slug of ["construction", "environmental", "garment", "food"] as const) {
    it(`resolves every ${slug} menu destination in both languages`, () => {
      const availableIds = sectorFullMenu(sectors[slug]).map((section) => sectionId(section.title));
      for (const ar of [false, true]) {
        const navigation = getSectorNavigation(slug, ar);
        expect(navigation).not.toBeNull();
        if (!navigation) return;
        for (const item of [...navigation.about, ...navigation.links]) {
          expect(availableIds).toContain(sectionId(item.title));
        }
      }
    });
  }
});

