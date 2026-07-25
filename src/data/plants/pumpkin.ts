import type { Plant } from "@/types/plant";

const pumpkin = {
  id: "pumpkin",
  commonName: "Pumpkin",
  scientificName: "Cucurbita pepo / C. maxima",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "Rich, well-drained soil, heavy feeder",
  spacingInches: 48,
  daysToMaturity: { min: 70, max: 120 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1.5,
    notes: "Deep, infrequent watering encourages strong roots; water at the base to limit mildew.",
  },
  temperature: {
    frostThresholdF: 32,
    heatStressThresholdF: 95,
  },
  plantingWindows: [
    {
      season: "fall",
      earliestWeeksFromFrost: -18,
      latestWeeksFromFrost: -13,
      method: "direct-sow",
    },
  ],
  description:
    "A sprawling, long-season vine grown for a fall harvest everywhere — timed backward from the first fall frost, not forward from the last spring one.",
  careNotes: [
    "Needs a long, warm season — count backward from your first fall frost to time planting.",
    "Give vines plenty of room or trellis smaller varieties.",
    "A killing frost ends the season abruptly; harvest mature fruit beforehand.",
    "Match variety length to your season: varieties over ~110-120 days risk not ripening before frost in shorter-season climates.",
  ],
  sources: [
    {
      title: "LSU AgCenter Pub. 2054: Squash and Pumpkins in the Home Garden",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/4/4/f/5/44f5081425183c1dd8fc9c6a70be9cb6/2054squashandpumpkinsinthehomegarden%20rev%200417pdf.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant in summer (around July) for an autumn harvest — Louisiana's spring/early-summer heat delays fruit set if planted earlier. Named varieties span giant (Atlantic Giant), large 10-30lb (Howden, Spirit), and medium 5-10lb (Autumn Gold, Jack-o-Lantern) classes.",
      source: {
        title: "Pumpkin & Squash",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/pumpkin_and_squash",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Sow late May-early June (or start indoors late April) — vine crops need soil at 65°F at 2in depth to germinate. Here the planting-date constraint is season length, not heat: long-season (110-120+ day) varieties may not ripen before fall frost.",
      source: {
        title: "Growing pumpkins and winter squash in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/pumpkins-and-winter-squash",
      },
    },
  ],
} satisfies Plant;

export default pumpkin;
