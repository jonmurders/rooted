import type { Plant } from "@/types/plant";

const cauliflower = {
  id: "cauliflower",
  commonName: "Cauliflower",
  scientificName: "Brassica oleracea var. botrytis",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, moist soil relatively high in organic matter and nitrogen; pH 6-7.",
  spacingInches: 24,
  daysToMaturity: { min: 50, max: 80 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Shallow-rooted; needs 1-1.5 in of water weekly. Head/curd formation is the single most water-critical stage — never let plants dry out during this window. Drought or heat stress causes buttoning (small, premature heads) or bolting.",
  },
  temperature: {
    frostThresholdF: 26,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -2,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -6,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -8,
      method: "direct-sow",
    },
  ],
  description:
    "Cauliflower is a cool-season brassica grown for its dense, undeveloped flower head (\"curd\"). It is more temperature-sensitive than cabbage or broccoli, requiring steady, uninterrupted cool growth (50-75°F) to form a solid, unblemished head.",
  careNotes: [
    "Keep soil consistently moist, especially once heads begin forming — water stress causes buttoning or bolting.",
    "Blanch white varieties by tying outer leaves over the developing curd once it's egg-sized (unless growing a self-blanching type).",
    "Avoid cold shock or transplant stress at planting, which can trigger premature button heads.",
    "Cauliflower is a heavier nitrogen feeder than broccoli or cabbage — fertilize steadily.",
    "Harvest when the curd is compact and 6-8 in across, before segments start to separate (\"ricing\").",
  ],
  sources: [
    {
      title: "Growing cauliflower in home gardens",
      publisher: "University of Minnesota Extension",
      url: "https://extension.umn.edu/vegetables/growing-cauliflower",
    },
    {
      title: "Growing Cauliflower in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-cauliflower-home-garden",
    },
    {
      title: "Growing Cauliflower in the Home Garden",
      publisher: "Iowa State University Extension (Yard and Garden)",
      url: "https://yardandgarden.extension.iastate.edu/how-to/growing-cauliflower-home-garden",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Choose early varieties (e.g., Packman, Everest, Premium Crop) to beat Louisiana's short cool window; harvest curds around 6 in before they turn \"ricey.\"",
      source: {
        title: "Cole Crops (Pub. 2310)",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/5/5/6/4/55646c0ef9404ad2073c46b006e13b51/cole%20crops%20rev%204-17%20lsupdf.pdf",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Spring cauliflower is difficult here (variable spring conditions cause bolting, blank heads, or bitterness), so many Minnesota gardeners favor a fall crop; cold-hardened transplants tolerate down to about 26°F.",
      source: {
        title: "Growing cauliflower in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-cauliflower",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Coastal/marine-influenced valleys (northern Willamette Valley, Puget Sound, Skagit Valley) have a climate suited to overwintering cauliflower for a spring harvest, though commercial production has stayed limited to these pockets.",
      source: {
        title: "Overwintering Cauliflower for Spring Harvest",
        publisher: "Oregon State University College of Agricultural Sciences",
        url: "https://horticulture.oregonstate.edu/oregon-vegetables/overwintering-cauliflower-spring-harvest-1978-1979",
      },
    },
  ],
  varieties: [
    {
      name: "Snow Crown",
      description: "Classic, reliable early F1 hybrid, a long-standing benchmark among brassica growers.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "F1 hybrid seed for spring transplant or mid-summer sowing for fall harvest.",
      growing: "Vigorous, dependable.",
      harvesting: "Medium-sized, smooth white heads ready quickly.",
      sources: [
        { tier: "seed-supplier", title: "Snow Crown Cauliflower", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/snow-crown-cauliflower-3410" },
        { tier: "blog", title: "19 of the Best Cauliflower Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-cauliflower-varieties/" },
      ],
    },
    {
      name: "Early Snowball",
      description: "18th-century German heirloom, one of the oldest cauliflower lines still grown; compact plants with 5-7 in heads.",
      starting: "Open-pollinated seed.",
      growing: "Compact plants.",
      harvesting: "Harvest while heads are tight and full-size.",
      sources: [
        { tier: "blog", title: "Types of Cauliflower: 17 Different Cauliflower Varieties You'll Love", publisher: "Epic Gardening", url: "https://www.epicgardening.com/cauliflower-varieties/" },
      ],
    },
    {
      name: "Cheddar",
      description: "Novelty orange-curded F1 hybrid bred for high beta-carotene content.",
      starting: "F1 hybrid seed.",
      growing: "Orange pigment intensifies with sun exposure, no blanching needed.",
      harvesting: "Harvest at full size.",
      sources: [
        { tier: "blog", title: "Types of Cauliflower: 17 Different Cauliflower Varieties You'll Love", publisher: "Epic Gardening", url: "https://www.epicgardening.com/cauliflower-varieties/" },
      ],
    },
    {
      name: "Flame Star",
      description: "Early orange F1 hybrid with notably better-than-average heat tolerance.",
      daysToMaturity: { min: 55, max: 60 },
      starting: "F1 hybrid seed.",
      growing: "Firm heads, dense smooth curds.",
      harvesting: "~7 in heads.",
      sources: [
        { tier: "blog", title: "19 of the Best Cauliflower Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-cauliflower-varieties/" },
      ],
    },
    {
      name: "Amazing",
      description: "High-yielding, uniform F1 hybrid known for large, dense, smooth white heads.",
      starting: "F1 hybrid seed.",
      growing: "High-yielding, uniform.",
      harvesting: "Harvest at full size while curds remain smooth.",
      sources: [
        { tier: "blog", title: "19 of the Best Cauliflower Varieties to Grow at Home", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/best-cauliflower-varieties/" },
      ],
    },
    {
      name: "Skywalker",
      description: "Cold-tolerant, self-wrapping fall F1 hybrid; Johnny's rates it their best organic option for late-summer/fall harvest.",
      starting: "Organic F1 hybrid seed.",
      growing: "Self-wrapping leaves reduce need to tie for blanching; good cold tolerance extends the season.",
      harvesting: "Uniform, medium-size heads.",
      sources: [
        { tier: "seed-supplier", title: "Skywalker - Organic (F1) Cauliflower Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/cauliflower/standard-cauliflower/skywalker-organic-f1-cauliflower-seed-2593G.html" },
      ],
    },
    {
      name: "Twister",
      description: "Self-blanching F1 hybrid; large wrapper leaves dome naturally over the curd.",
      starting: "F1 hybrid seed.",
      growing: "Big, heavy, well-domed heads; performs well in the Northeast/Midwest from late June through late October.",
      harvesting: "Self-blanching — no tying needed.",
      sources: [
        { tier: "seed-supplier", title: "Twister - (F1) Cauliflower Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/featured/summer-planting-for-fall-harvest/twister-f1-cauliflower-seed-4226.html" },
      ],
    },
    {
      name: "Bishop",
      description: "Improved Fremont-type F1 hybrid bred for well-wrapped heads, excellent vigor, and wide climatic adaptability.",
      starting: "F1 hybrid seed.",
      growing: "Excellent vigor, wide climatic adaptability.",
      harvesting: "Suited to both summer and fall harvest windows.",
      sources: [
        { tier: "seed-supplier", title: "Bishop - (F1) Cauliflower Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/cauliflower/standard-cauliflower/bishop-f1-cauliflower-seed-3832.html" },
      ],
    },
    {
      name: "Romanesco",
      description: "Striking chartreuse type with a natural fractal (self-similar spiral) head; botanically in the same Brassica oleracea Botrytis group as cauliflower, though often marketed separately as \"Romanesco broccoli.\"",
      starting: "Same as standard cauliflower.",
      growing: "Needs the same steady cool-season conditions as white cauliflower.",
      harvesting: "Harvest while the spiraled head is tight, before spirals separate/flower.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for Romanesco Broccoli (Roman Cauliflower)", publisher: "Epic Gardening", url: "https://www.epicgardening.com/romanesco-broccoli/" },
      ],
    },
  ],
} satisfies Plant;

export default cauliflower;
