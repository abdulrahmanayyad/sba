import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { joinTracks, type JoinTrackId } from "@/components/join/join-data";

describe("Join Us Pathways & Routes", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

  it("resolves route matches for all 4 dedicated Join Us pages and index", () => {
    const paths = ["/join", "/join/group", "/join/construction", "/join/sustainability", "/join/garment"];

    for (const path of paths) {
      const matches = router.matchRoutes(path);
      expect(matches.length).toBeGreaterThan(0);
      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    }
  });

  it("validates all required content and headlines for the 4 Join tracks", () => {
    const expectedHeadlines: Record<JoinTrackId, string> = {
      group: "Build the Future With Us",
      construction: "Engineering Excellence. Building Tomorrow.",
      sustainability: "Innovate for a Better Tomorrow",
      garment: "Crafting Excellence. Dressing the World.",
    };

    for (const trackId of ["group", "construction", "sustainability", "garment"] as JoinTrackId[]) {
      const track = joinTracks[trackId];
      expect(track).toBeDefined();
      expect(track.headlineEn).toBe(expectedHeadlines[trackId]);
      expect(track.headlineAr).toBeTruthy();
      expect(track.descriptionEn).toBeTruthy();
      expect(track.descriptionAr).toBeTruthy();
      expect(track.individualCategories.length).toBeGreaterThan(0);
      expect(track.organizationCategories.length).toBeGreaterThan(0);
      expect(track.perksEn.length).toBeGreaterThanOrEqual(3);
      expect(track.perksAr.length).toBeGreaterThanOrEqual(3);
    }
  });
});
