import { describe, expect, it } from "vitest";
import { zoneFromAverageAnnualMinF } from "./climate";

describe("zoneFromAverageAnnualMinF", () => {
  it("matches known USDA zone boundaries", () => {
    expect(zoneFromAverageAnnualMinF(0)).toEqual({ zone: 7, half: "a" });
    expect(zoneFromAverageAnnualMinF(5)).toEqual({ zone: 7, half: "b" });
    expect(zoneFromAverageAnnualMinF(10)).toEqual({ zone: 8, half: "a" });
    expect(zoneFromAverageAnnualMinF(-50)).toEqual({ zone: 2, half: "a" });
    expect(zoneFromAverageAnnualMinF(-45)).toEqual({ zone: 2, half: "b" });
  });

  it("clamps extreme values to the 1-13 range", () => {
    expect(zoneFromAverageAnnualMinF(-100).zone).toBe(1);
    expect(zoneFromAverageAnnualMinF(100).zone).toBe(13);
  });
});
