import type { Plant } from "@/types/plant";

const bellPepper = {
  id: "bell-pepper",
  commonName: "Bell Pepper",
  scientificName: "Capsicum annuum",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained loam, pH 6.0-6.8",
  spacingInches: 18,
  daysToMaturity: { min: 65, max: 100 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Even moisture prevents blossom-end rot; avoid letting soil dry out completely between waterings.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 6,
      method: "transplant",
    },
  ],
  description:
    "A slow-to-start warm-season crop best started indoors and transplanted once soil has warmed.",
  careNotes: [
    "Soil below 60°F stalls growth — wait for it to warm before transplanting.",
    "Provide light stalking once fruit gets heavy.",
    "Fruit set needs daytime temps of 65-80°F and nights above 55°F; outside that window expect blossom drop.",
  ],
  sources: [
    {
      title: "LSU AgCenter Pub. 2132: Peppers",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/peppers%20rev%204-17%20lsupdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Transplant late March in south Louisiana, mid-April in north Louisiana (through early May with acceptable yields). Bacterial leaf spot is a major recurring problem in warm, wet weather — it needs free water on foliage to spread, so avoid overhead watering late in the day.",
      source: {
        title: "Bacterial Leaf Spot of Bell Pepper in Louisiana",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/jmorgan/articles/page1618857911417",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Fruit set needs daytime temps of 65-80°F and nights above 55°F — bell types generally do better in more humid regions, while New Mexican-type chiles are more reliable in the dry Southwest heat.",
      source: {
        title: "Growing Peppers and Chiles",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/attachment/PeppersChiles.pdf",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Planting windows shift sharply by latitude within the state: February-March and July-August in north Florida, January-March and August-September in central Florida, August-February in south Florida.",
      source: {
        title: "Chapter 13: Pepper Production",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/cv130",
      },
    },
  ],
} satisfies Plant;

export default bellPepper;
