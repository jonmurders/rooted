import type { Plant } from "@/types/plant";

const zucchini = {
  id: "zucchini",
  commonName: "Zucchini",
  scientificName: "Cucurbita pepo",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, heavy feeder",
  spacingInches: 36,
  daysToMaturity: { min: 45, max: 60 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1.5,
    notes: "Deep watering at the base; wet leaves invite powdery mildew.",
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
    "A fast, prolific summer squash that needs warm soil and plenty of room to sprawl.",
  careNotes: [
    "Harvest young and often (6-8in) — oversized fruit turns woody.",
    "Handpollinate in low-pollinator conditions if fruit fails to set.",
    "Watch for squash vine borers at the base of the stem.",
  ],
} satisfies Plant;

export default zucchini;
