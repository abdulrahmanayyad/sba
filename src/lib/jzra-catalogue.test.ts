import { describe, expect, it } from "vitest";
import { filterJzraPhotos, jzraAgeRanges, type JzraPhoto } from "./jzra-catalogue";

const photos: JzraPhoto[] = [
  { id: "summer-boy", season: "summer", category: "casual", audiences: ["boys"], ages: ["2-5"], image: "a", sample: false },
  { id: "winter-girl", season: "winter", category: "dresses", audiences: ["girls"], ages: ["8-14"], image: "b", sample: false },
  { id: "winter-girl-2", season: "winter", category: "casual", audiences: ["girls"], ages: ["8-14"], image: "c", sample: false },
  { id: "sample", season: "winter", category: "casual", audiences: ["boys", "girls"], ages: [], image: "d", sample: true },
];

describe("JZRA photo filters", () => {
  it("offers the five requested age groups", () => {
    expect([...jzraAgeRanges]).toEqual(["2-5", "3-6", "6-12", "8-14", "14-18"]);
  });
  it("filters summer independently", () => {
    expect(filterJzraPhotos(photos, { season: "summer", age: "all", audience: "all" }).map(p => p.id)).toEqual(["summer-boy"]);
  });
  it("filters boys independently", () => {
    expect(filterJzraPhotos(photos, { season: "winter", age: "all", audience: "boys" }).map(p => p.id)).toEqual(["sample"]);
  });
  it("combines winter, girls and age while retaining multiple matching photos", () => {
    expect(filterJzraPhotos(photos, { season: "winter", age: "8-14", audience: "girls" }).map(p => p.id)).toEqual(["winter-girl", "winter-girl-2"]);
  });
  it("does not assign unverified samples to an age group", () => {
    expect(filterJzraPhotos(photos, { season: "winter", age: "2-5", audience: "all" })).toEqual([]);
  });
});

