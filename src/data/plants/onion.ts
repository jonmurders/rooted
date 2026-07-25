import type { Plant } from "@/types/plant";

const onion = {
  id: "onion",
  commonName: "Onion",
  scientificName: "Allium cepa",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, fertile, well-drained soil",
  spacingInches: 5,
  daysToMaturity: { min: 90, max: 120 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Consistent moisture during bulbing; reduce watering as tops begin to yellow and fall over.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "transplant",
    },
  ],
  description:
    "A long-season crop grown from sets or transplants; bulbing is triggered by day length, not just temperature.",
  careNotes: [
    "Choose short/long-day varieties matching your latitude for proper bulbing.",
    "Stop watering once tops flop over — this signals bulbs are maturing.",
    "Tolerates light frost well as a young plant.",
    "Day length, not just temperature, triggers bulbing: long-day types need 14-16 hours of daylight, short-day types 10-12 hours — the wrong type for your latitude will bulb poorly or not at all, roughly split at the 36th parallel.",
  ],
  sources: [
    {
      title: "Onions, Shallots, Garlic and Leeks (Pub. 2318, Allium Crops)",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/3/0/f/e/30fef92f7c44b2818e86c49357ae4dbe/pub%202318%20allium%20crops%20%20onions%20shallots%20and%20garlicpdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Only short-day varieties work here — Louisiana sits well south of the latitude where long-day types would bulb, since bulb initiation is triggered by daylength plus warming spring temperatures.",
      source: {
        title: "Onions, Shallots, Garlic and Leeks",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/3/0/f/e/30fef92f7c44b2818e86c49357ae4dbe/pub%202318%20allium%20crops%20%20onions%20shallots%20and%20garlicpdf.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Needs long-day varieties requiring 14+ hours of daylight to bulb. Short-day \"sweet\" onions can technically be grown here but will only form small bulbs due to insufficient daylength.",
      source: {
        title: "Growing onions in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-onions",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Grows almost exclusively short-day sweet onion varieties in winter; these don't store as well as long-day types and are typically sold/eaten fresh rather than stored long-term.",
      source: {
        title: "Chapter 12: Onion, Leek, and Chive Production",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/publication/CV299",
      },
    },
  ],
} satisfies Plant;

export default onion;
