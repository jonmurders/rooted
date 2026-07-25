import type { Plant } from "@/types/plant";

const lettuce = {
  id: "lettuce",
  commonName: "Lettuce",
  scientificName: "Lactuca sativa",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "partial-sun",
  soil: "Moist, fertile, well-drained soil",
  spacingInches: 8,
  daysToMaturity: { min: 45, max: 65 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots dry out fast — keep soil consistently moist.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -10,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season leafy green that tolerates light frost well but bolts and turns bitter in heat.",
  careNotes: [
    "Bolts and turns bitter above ~75-80°F — plant for spring/fall, not midsummer.",
    "Light shade in warm weather extends the harvest window.",
    "Harvest outer leaves for a cut-and-come-again crop.",
  ],
} satisfies Plant;

export default lettuce;
