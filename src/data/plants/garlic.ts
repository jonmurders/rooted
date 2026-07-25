import type { Plant } from "@/types/plant";

const garlic = {
  id: "garlic",
  commonName: "Garlic",
  scientificName: "Allium sativum",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "Loose, well-drained, fertile soil",
  spacingInches: 6,
  daysToMaturity: { min: 240, max: 270 },
  water: {
    intervalDays: 5,
    drySpellThresholdIn: 1,
    notes: "Water through spring growth; stop watering ~2 weeks before harvest to cure well.",
  },
  temperature: {
    frostThresholdF: 0,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "fall",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
  ],
  description:
    "Planted in fall, garlic needs a period of cold to form bulbs and is harvested the following summer.",
  careNotes: [
    "Plant cloves root-down, pointed tip up, about 2in deep.",
    "Mulch heavily after planting to insulate through winter.",
    "Extremely cold-hardy once established — a hard freeze is normal, not a threat.",
  ],
} satisfies Plant;

export default garlic;
