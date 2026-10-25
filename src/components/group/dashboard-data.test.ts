import { describe, expect, it } from "vitest";
import { businessVolumes, targetMarkets } from "./dashboard-data";

describe("business dashboard data", () => {
  it("reports the three verified business volumes in USD", () => {
    expect(businessVolumes.map((v) => [v.sector, v.period, v.usd])).toEqual([
      ["construction", "2013–2024", 8_000_000],
      ["environmental", "2018–2024", 2_000_000],
      ["garment", "2023–2025", 750_000],
    ]);
  });
  it("keeps food out of the volume chart until verified", () => {
    expect(businessVolumes.some((v) => v.sector === "food")).toBe(false);
  });
  it("lists Egypt as the only contracting market", () => {
    expect(targetMarkets.construction.map((m) => m.name.en)).toEqual(["Egypt"]);
  });
});
