import type { Plant } from "@/types/plant";

const basil = {
  id: "basil",
  commonName: "Basil",
  scientificName: "Ocimum basilicum",
  category: "herb",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Moist, well-drained, fertile soil",
  spacingInches: 12,
  daysToMaturity: { min: 50, max: 75 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Keep soil consistently moist; wilts quickly in dry heat.",
  },
  temperature: {
    frostThresholdF: 40,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 8,
      method: "transplant",
    },
  ],
  description:
    "A fast-growing, heat-loving herb that is damaged by cold well before an actual frost.",
  careNotes: [
    "Pinch flower spikes to keep leaves productive.",
    "Chills below 40°F can blacken leaves even without frost.",
    "Harvest regularly — cutting encourages bushier growth.",
  ],
} satisfies Plant;

export default basil;
