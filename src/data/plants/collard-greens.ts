import type { Plant } from "@/types/plant";

const collardGreens = {
  id: "collard-greens",
  commonName: "Collard Greens",
  scientificName: "Brassica oleracea var. viridis",
  category: "vegetable",
  zones: { min: 3, max: 11 },
  sun: "full-sun",
  soil: "Well-draining, nutrient-rich soil amended with compost.",
  spacingInches: 18,
  daysToMaturity: { min: 60, max: 85 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Needs a continuous, uninterrupted supply of soil moisture — interrupted growth reduces leaf quality and yield.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: -3,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season, frost-tolerant leafy Brassica grown for its large, paddle-shaped leaves. A staple of Southern US cuisine, but hardy enough to grow well into northern climates.",
  careNotes: [
    "Heavy feeder — work compost and fertilizer into soil before planting.",
    "Maintain continuous soil moisture; interrupted growth reduces quality and yield.",
    "Frost sweetens flavor and improves texture — don't rush to harvest before a light freeze.",
    "Harvest lower/outer leaves first so the plant keeps producing from the top.",
    "In hot climates, site late-spring or early-fall plantings where they get afternoon shade to delay bolting.",
  ],
  sources: [
    {
      title: "Collard Greens",
      publisher: "NC State Extension Publications",
      url: "https://content.ces.ncsu.edu/collard-greens",
    },
    {
      title: "Grow More Collard Greens",
      publisher: "Alabama Cooperative Extension System",
      url: "https://www.aces.edu/blog/topics/lawn-garden/grow-more-collard-greens/",
    },
    {
      title: "Growing Leafy Greens in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-leafy-greens-home-garden",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Final in-row spacing 12-18 in; fall is prime planting time, but collards tolerate more climatic extremes than other greens and can be grown most of the year.",
      source: {
        title: "Louisiana Vegetable Planting Guide (Pub. 1980)",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/d/e/3/e/de3e7516e68dfee4a21a84b38caa4df8/p1980_lavegplantguiderev_ai0520kfontenot_finalpdf.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Direct seed struggles in cold spring soil, so start indoors for a mid-April planting; direct-seed outdoors late June-August for a fall harvest; survives to about 20°F.",
      source: {
        title: "Planting vegetables in midsummer for fall harvest",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/planting-and-growing-guides/planting-vegetables-midsummer-fall-harvest",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Planting windows shift by elevation (e.g., June 15-August 1 at 3,000-4,500 ft); site early-fall/late-season plantings in the coolest, most shaded spots to delay bolting and bitterness.",
      source: {
        title: "Crop Profile for Collards in Arizona",
        publisher: "University of Arizona Cooperative Extension (CALS)",
        url: "https://cales.arizona.edu/crop/public/docs/azcollards.pdf",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "More heat- and cold-tolerant than kale; a heavy feeder that benefits from extra fertilizer; regionally recommended varieties include Blue Max, Georgia Southern, Vates, Top Bunch, and Green Glaze.",
      source: {
        title: "Collards and Kale",
        publisher: "Oregon State University, College of Agricultural Sciences",
        url: "https://horticulture.oregonstate.edu/oregon-vegetables/collards-and-kale",
      },
    },
  ],
  varieties: [
    {
      name: "Vates",
      description: "Smooth-leaf, dwarf/compact type tolerant of both cold and warm weather; high-yielding with dark green, shiny leaves and yellow stems; very slow to bolt.",
      starting: "Direct-sow or transplant; standard collard establishment.",
      growing: "Compact habit, ~30 in tall; notably bolt-resistant.",
      harvesting: "Harvest outer leaves continuously as the plant keeps producing.",
      sources: [
        { tier: "seed-supplier", title: "Collard Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/collards/" },
        { tier: "blog", title: "How to Plant, Grow, and Care for Collard Greens", publisher: "Epic Gardening", url: "https://www.epicgardening.com/growing-collard-greens/" },
      ],
    },
    {
      name: "Georgia (Georgia Southern)",
      description: "Heirloom with a mounding habit and smooth, slightly wrinkled bluish-green leaves that don't head like cabbage.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Direct-sow or transplant.",
      growing: "Mounding, non-heading habit, up to 36 in tall.",
      harvesting: "Good fresh, frozen, or canned.",
      sources: [
        { tier: "blog", title: "9 of the Best Collard Greens Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-collard-greens/" },
      ],
    },
    {
      name: "Champion",
      description: "An improved 'Vates' selection; compact plants with large dark blue-green crumpled leaves; increased bolt resistance and enhanced winter hardiness.",
      daysToMaturity: { min: 75, max: 75 },
      starting: "Direct-sow or transplant.",
      growing: "Compact, 24-36 in tall with a ~30 in spread; strong cold hardiness.",
      harvesting: "Harvest outer leaves continuously.",
      sources: [
        { tier: "blog", title: "9 of the Best Collard Greens Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-collard-greens/" },
      ],
    },
    {
      name: "Green Glaze",
      description: "One of the oldest varieties still grown in North America, introduced in 1820 by David Landreth; smooth, bright, shiny green leaves; high resistance to insect pests.",
      starting: "Direct-sow or transplant.",
      growing: "Notably insect-resistant compared to other collard cultivars, due to its glossy leaf surface.",
      harvesting: "Harvest outer leaves continuously.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for Collard Greens", publisher: "Epic Gardening", url: "https://www.epicgardening.com/growing-collard-greens/" },
        { tier: "blog", title: "The Scoop on Collards", publisher: "Southern Exposure Seed Exchange", url: "https://blog.southernexposure.com/2024/02/the-scoop-on-collards/" },
      ],
    },
    {
      name: "Morris Heading",
      description: "A heading-type collard that forms loose heads of leaves, unlike the loose-leaf habit of most other varieties.",
      starting: "Direct-sow or transplant.",
      growing: "Forms loose heads rather than a purely open rosette of leaves.",
      harvesting: "Can be harvested as a loose head or leaf-by-leaf.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for Collard Greens", publisher: "Epic Gardening", url: "https://www.epicgardening.com/growing-collard-greens/" },
        { tier: "blog", title: "The Collards", publisher: "The Heirloom Collards Project", url: "https://heirloomcollards.org/the-collards/" },
      ],
    },
    {
      name: "Old Timey Blue (Alabama Blue)",
      description: "Southern heirloom grown on the Blackwell farm in Alabama for at least a century; green leaves with purple stalks.",
      starting: "Direct-sow or transplant.",
      growing: "Leaves reach up to 2 ft at maturity.",
      harvesting: "Prized for use in collard-green wraps given its large leaf size.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for Collard Greens", publisher: "Epic Gardening", url: "https://www.epicgardening.com/growing-collard-greens/" },
      ],
    },
    {
      name: "Blue Max",
      description: "Compact, upright plants with tender, slightly crumpled (savoyed) blue-green leaves.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Direct-sow or transplant.",
      growing: "Compact and upright, 16-24 in tall with a ~24 in spread.",
      harvesting: "Harvest outer leaves continuously.",
      sources: [
        { tier: "blog", title: "9 of the Best Collard Greens Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-collard-greens/" },
      ],
    },
  ],
} satisfies Plant;

export default collardGreens;
