import type { Plant } from "@/types/plant";

const carrot = {
  id: "carrot",
  commonName: "Carrot",
  scientificName: "Daucus carota subsp. sativus",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, sandy, stone-free soil for straight roots",
  spacingInches: 3,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Consistent moisture prevents splitting; inconsistent watering causes misshapen roots.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 3,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "direct-sow",
    },
  ],
  description:
    "A cold-hardy root crop that must be direct-sown — carrots do not transplant well.",
  careNotes: [
    "Thin seedlings early to avoid crowded, forked roots.",
    "Cold soil below 45°F slows germination dramatically.",
    "A light frost improves sweetness; roots can overwinter under mulch in mild zones.",
    "Water stress shows up as two distinct problems: uneven watering splits roots, while insufficient water makes them bitter, tough, and misshapen.",
  ],
  sources: [
    {
      title: "Carrots",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/carrots",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant mid-August through early March in three overlapping waves (Aug-Oct, Jan-Feb, and by early March) for a nearly continuous winter-harvest crop — carrots are cold-hardy enough here to be a genuine winter vegetable. Varieties: Danvers 126, Chantenay Red Core, Scarlet Nantes.",
      source: {
        title: "Carrots",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/carrots",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Planting is confined to September-December with harvest January-April — a fall/winter-only crop with no viable summer window. Water stress specifically causes root splitting here.",
      source: {
        title: "Water Use in Vegetables: Carrots",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1134-2014.pdf",
      },
    },
    {
      region: "Mediterranean / California",
      note: "Carrots can be grown nearly year-round. Drip or furrow irrigation is recommended over overhead watering, both for straighter roots and to limit insect damage and sunburned shoulders.",
      source: {
        title: "Cultural Tips for Growing Carrot",
        publisher: "UC Statewide IPM Program (UC ANR)",
        url: "https://ipm.ucanr.edu/home-and-landscape/carrot/cultural-tips/",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default carrot;
