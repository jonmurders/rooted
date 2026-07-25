import type { Plant } from "@/types/plant";

const cucumber = {
  id: "cucumber",
  commonName: "Cucumber",
  scientificName: "Cucumis sativus",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, consistent moisture",
  spacingInches: 18,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1.5,
    notes: "Needs steady moisture — irregular watering causes bitter fruit.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 8,
      method: "direct-sow",
    },
  ],
  description:
    "A vigorous warm-season vine that climbs or sprawls and produces heavily with steady water.",
  careNotes: [
    "Trellising saves space and keeps fruit straighter and cleaner.",
    "Pick frequently — oversized cucumbers turn bitter and slow new fruit set.",
    "Inconsistent watering is the top cause of bitter-tasting fruit.",
  ],
} satisfies Plant;

export default cucumber;
