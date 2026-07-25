import { describe, expect, it } from "vitest";
import { getPlantingRecommendations } from "./planting";
import type { Plant } from "@/types/plant";

const plant: Plant = {
  id: "test-plant",
  commonName: "Test Plant",
  scientificName: "Testus plantus",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "n/a",
  spacingInches: 12,
  daysToMaturity: { min: 50, max: 60 },
  water: { intervalDays: 3, drySpellThresholdIn: 1, notes: "" },
  temperature: { frostThresholdF: 32, heatStressThresholdF: 90 },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 4,
      method: "direct-sow",
    },
  ],
  description: "",
  sources: [],
  regionalNotes: [],
  careNotes: [],
};

describe("getPlantingRecommendations", () => {
  const frostDates = { lastSpringFrostDay: 100, firstFallFrostDay: 300 };

  it("marks a window in the future as upcoming", () => {
    const now = new Date(Date.UTC(2026, 0, 1)); // day 1
    const [rec] = getPlantingRecommendations(plant, frostDates, now);
    expect(rec.status).toBe("upcoming");
  });

  it("marks a window that has started as active", () => {
    const now = new Date(Date.UTC(2026, 3, 20)); // ~day 110, within week 1-4 after day 100
    const [rec] = getPlantingRecommendations(plant, frostDates, now);
    expect(rec.status).toBe("active");
  });

  it("marks a window that has ended as passed", () => {
    const now = new Date(Date.UTC(2026, 6, 1)); // well past day 128
    const [rec] = getPlantingRecommendations(plant, frostDates, now);
    expect(rec.status).toBe("passed");
  });
});
