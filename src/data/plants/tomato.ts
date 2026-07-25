import type { Plant } from "@/types/plant";

const tomato = {
  id: "tomato",
  commonName: "Tomato",
  scientificName: "Solanum lycopersicum",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained loam, pH 6.0-6.8",
  spacingInches: 24,
  daysToMaturity: { min: 60, max: 85 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Deep, consistent watering prevents blossom-end rot. Water at the base, not the leaves.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 6,
      method: "transplant",
    },
  ],
  description:
    "A warm-season staple grown as an annual almost everywhere. Needs heat and steady moisture to set fruit.",
  careNotes: [
    "Stake or cage early to support heavy vines.",
    "Pinch suckers on indeterminate varieties for bigger fruit.",
    "Fruit set stalls above ~95°F (day) or below ~55°F (night) — this is normal, not a problem to fix.",
  ],
} satisfies Plant;

export default tomato;
