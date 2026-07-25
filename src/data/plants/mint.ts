import type { Plant } from "@/types/plant";

const mint = {
  id: "mint",
  commonName: "Mint",
  scientificName: "Mentha spp.",
  category: "herb",
  zones: { min: 3, max: 9 },
  sun: "partial-sun",
  soil: "Moist, rich soil — tolerates a wide range",
  spacingInches: 18,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Prefers consistently moist soil; wilts visibly when dry but recovers quickly once watered.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -1,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A vigorous, spreading perennial herb — strongly recommended for container growing to prevent it taking over a bed.",
  careNotes: [
    "Grow in a container or sunken barrier — mint spreads aggressively by runners.",
    "Dies back to the root in winter and returns reliably in spring within its zone range.",
    "Cut back hard mid-season to refresh growth and flavor.",
  ],
} satisfies Plant;

export default mint;
