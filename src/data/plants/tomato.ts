import type { Plant } from "@/types/plant";

const tomato = {
  id: "tomato",
  commonName: "Tomato",
  scientificName: "Solanum lycopersicum",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Rich, well-drained loam, pH 6.0-6.8",
  spacingInches: 24,
  daysToMaturity: { min: 50, max: 85 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Deep, consistent watering prevents blossom-end rot. Water at the base, not the leaves.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 94,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 1,
      latestWeeksFromFrost: 6,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -18,
      latestWeeksFromFrost: -14,
      method: "transplant",
    },
  ],
  description:
    "A warm-season staple grown as an annual almost everywhere. Needs heat and steady moisture to set fruit.",
  careNotes: [
    "Stake or cage early to support heavy vines.",
    "Pinch suckers on indeterminate varieties for bigger fruit.",
    "Fruit set slows above ~90°F and stops around 94°F, or when nights stay above 75°F — pollen clumps in the heat. This is normal, not a problem to fix.",
    "In short-season climates, pick 45-70 day varieties so fruit finishes before fall frost.",
  ],
  sources: [
    {
      title: "Growing Great Home Garden Tomatoes",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/lbenedict/articles/page1468953548243",
    },
    {
      title: "LSU AgCenter Pub. 1902: Tomatoes",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/f/a/2/5/fa25b59d25c9d8ad93142283f4a311be/1902%20tomatoes%20rev%200417pdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Use heat-set determinate cultivars (Florida 91, Phoenix, Solar Fire, Bella Rosa, Heatwave II, Sunmaster) for both crops. Spring transplants go in mid-March (south LA) to April 1 (north LA); a fall crop is transplanted July-early August for an October harvest ahead of frost.",
      source: {
        title: "Growing Great Home Garden Tomatoes",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/lbenedict/articles/page1468953548243",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Fruit set slows at 90°F daytime and stops at 94°F, or once nights stay above 75°F. Short-season varieties (45-70 days) fit the two short low-desert planting windows, and early spring transplants need active frost protection (e.g. row cover or water-filled plant sleeves).",
      source: {
        title: "Tomato Challenges",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/publication/tomato-challenges",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Choose varieties maturing in 65-75 days so fruit finishes before the first September chill. Early blight commonly appears mid-to-late June — space plants for airflow and mulch to stop soil from splashing onto lower leaves.",
      source: {
        title: "Growing tomatoes in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-tomatoes",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default tomato;
