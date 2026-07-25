import type { Plant } from "@/types/plant";

const rosemary = {
  id: "rosemary",
  commonName: "Rosemary",
  scientificName: "Salvia rosmarinus",
  category: "herb",
  zones: { min: 7, max: 10 },
  sun: "full-sun",
  soil: "Sandy, well-drained, slightly alkaline soil",
  spacingInches: 24,
  daysToMaturity: { min: 80, max: 100 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 0.5,
    notes: "Drought tolerant once established — overwatering is the main risk, especially in containers.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A woody, drought-loving Mediterranean herb. Perennial in its zone range; grown in containers and overwintered indoors elsewhere.",
  careNotes: [
    "Let soil dry between waterings — root rot from overwatering is more common than drought stress.",
    "Outside zones 7-10, grow in a pot and bring indoors before the first hard freeze.",
    "Thrives in heat; rarely needs summer intervention.",
  ],
} satisfies Plant;

export default rosemary;
