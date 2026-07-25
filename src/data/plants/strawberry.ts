import type { Plant } from "@/types/plant";

const strawberry = {
  id: "strawberry",
  commonName: "Strawberry",
  scientificName: "Fragaria × ananassa",
  category: "fruit",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Rich, well-drained, slightly acidic soil",
  spacingInches: 12,
  daysToMaturity: { min: 365, max: 425 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture, especially while fruiting.",
  },
  temperature: {
    frostThresholdF: 30,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 4,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -1,
      method: "transplant",
    },
  ],
  description:
    "Grown two different ways depending on climate: as a cold-hardy, multi-year perennial planted in spring further north, or as a fall-planted annual for a single spring harvest in mild-winter regions.",
  careNotes: [
    "Mulch with straw over winter, then pull it back in spring to let plants grow.",
    "Cover blossoms if a late frost is forecast — fruit yield suffers more than the plant itself.",
    "Remove runners if you want energy going into fruit rather than new plantlets.",
  ],
  sources: [
    {
      title: "Strawberries",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/strawberries",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown as a fall-planted annual, not a cold-climate perennial — set short-day/day-neutral transplants mid-October through the first week of November (too early in hot early October stresses crowns and invites disease). Varieties: Camarosa, Camino Real, Chandler, Sweet Sensation.",
      source: {
        title: "On the Hunt for the Ideal Strawberry for Louisiana Home Gardens",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1748963783354",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Also grown as a winter annual crop, on the same narrow late-September-to-October-1 planting window, fruiting mid-November through the season.",
      source: {
        title: "Growing Strawberries in the Florida Home Garden",
        publisher: "UF/IFAS",
        url: "https://journals.flvc.org/edis/article/download/117733/115765",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Opposite planting season from the Gulf South — set out dormant June-bearing plants in early spring (never after Aug 1, which leaves too little time to establish before freezing) in a matted-row system spaced 18-24in apart with rows 3-4ft apart.",
      source: {
        title: "Planting a new strawberry field",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/strawberry-farming/planting-new-strawberry-field",
      },
    },
  ],
  varieties: [],
} satisfies Plant;

export default strawberry;
