import type { Plant } from "@/types/plant";

const marigold = {
  id: "marigold",
  commonName: "Marigold",
  scientificName: "Tagetes spp.",
  category: "flower",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Average, well-drained soil — tolerates poor soil",
  spacingInches: 12,
  daysToMaturity: { min: 45, max: 60 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Fairly drought tolerant once established; avoid overwatering.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 0,
      latestWeeksFromFrost: 10,
      method: "direct-sow",
    },
  ],
  description:
    "A tough, heat-loving annual flower often companion-planted to deter pests in vegetable beds.",
  careNotes: [
    "Deadhead spent blooms to keep flowers coming all season.",
    "Very tolerant of heat and drought once established.",
    "Killed outright by the season's first frost.",
    "Water at the soil line, not overhead — wet petals in humid heat invite petal blight.",
  ],
  sources: [
    {
      title: "These colorful plants take the heat",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1464977874130",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "One of the recommended heat-tolerant summer bedding plants — avoid overhead irrigation because wet petals in humid heat lead to petal blight. Varieties: Discovery, Inca, Excel, Bonanza.",
      source: {
        title: "These colorful plants take the heat",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1464977874130",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Hot, dry weather sharply accelerates spider mite reproduction (a generation can complete in under a week in heat), and drought stress compounds mite damage — consistent irrigation is a real defense here, not just a pest-control afterthought.",
      source: {
        title: "Spider Mites",
        publisher: "UC Statewide IPM Program",
        url: "https://ipm.ucanr.edu/home-and-landscape/spider-mites/",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Marigold is specifically planted as a root-knot nematode-suppressing companion in Florida's sandy, nematode-prone soils — a regional pest-management use beyond its role as a bedding flower.",
      source: {
        title: "Marigolds (Tagetes spp.) for Nematode Management",
        publisher: "UF/IFAS",
        url: "https://ask.ifas.ufl.edu/publication/NG045",
      },
    },
  ],
} satisfies Plant;

export default marigold;
