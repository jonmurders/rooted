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
  daysToMaturity: { min: 210, max: 270 },
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
    "Needs a real cold snap to bulb properly: roughly 2 months at 32-50°F, or 4-6 weeks below 40°F.",
  ],
  sources: [
    {
      title: "Plant at the Right Time to Grow Garlic and Bulb Onions",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/mhferguson/articles/page1637688089474",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant September-October (through early November) for a May-June harvest, about 7-8 months later. Garlic needs a minimum of 2 months at 32-50°F to vernalize and bulb properly, even here.",
      source: {
        title: "Plant at the Right Time to Grow Garlic and Bulb Onions",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/mhferguson/articles/page1637688089474",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Time fall planting to 1-2 weeks after the first killing frost so cloves root and start a shoot but don't emerge above soil before winter. Garlic tolerates cold down to about 25-26°F without much damage once established.",
      source: {
        title: "Growing garlic in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-garlic",
      },
    },
    {
      region: "Subtropical Florida",
      note: "A much wider planting window applies here, September through February, since winters rarely hard-freeze. Softneck varieties (Artichoke, Creole types) suit Florida's mild, low-chill winters best.",
      source: {
        title: "Garlic — Allium sativum L.",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/publication/MV064",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default garlic;
