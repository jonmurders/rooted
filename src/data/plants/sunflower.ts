import type { Plant } from "@/types/plant";

const sunflower = {
  id: "sunflower",
  commonName: "Sunflower",
  scientificName: "Helianthus annuus",
  category: "flower",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Average, well-drained soil",
  spacingInches: 18,
  daysToMaturity: { min: 70, max: 100 },
  water: {
    intervalDays: 5,
    drySpellThresholdIn: 1,
    notes: "Deep-rooted and drought tolerant once established; water more while seedlings establish.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 0,
      latestWeeksFromFrost: 8,
      method: "direct-sow",
    },
  ],
  description:
    "A tall, fast-growing, heat-loving annual that thrives in full sun with minimal fuss.",
  careNotes: [
    "Stake tall varieties in windy sites.",
    "Very heat and drought tolerant once roots are established.",
    "Frost kills top growth; seed heads can still be harvested if mature.",
  ],
} satisfies Plant;

export default sunflower;
