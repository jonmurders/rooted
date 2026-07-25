import type { Plant } from "@/types/plant";

const strawberry = {
  id: "strawberry",
  commonName: "Strawberry",
  scientificName: "Fragaria × ananassa",
  category: "fruit",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Rich, well-drained, slightly acidic soil",
  spacingInches: 12,
  daysToMaturity: { min: 365, max: 425 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture, especially while fruiting.",
  },
  temperature: {
    frostThresholdF: 30,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 4,
      method: "transplant",
    },
  ],
  description:
    "A cold-hardy perennial whose crown survives winter, but open spring blossoms are frost-tender.",
  careNotes: [
    "Mulch with straw over winter, then pull it back in spring to let plants grow.",
    "Cover blossoms if a late frost is forecast — fruit yield suffers more than the plant itself.",
    "Remove runners if you want energy going into fruit rather than new plantlets.",
  ],
} satisfies Plant;

export default strawberry;
