import type { Plant } from "@/types/plant";

const turnip = {
  id: "turnip",
  commonName: "Turnip",
  scientificName: "Brassica rapa (Rapifera Group)",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil, pH 5.5-6.8 (tolerates poor/sandy soil reasonably well).",
  spacingInches: 4,
  daysToMaturity: { min: 30, max: 60 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "About 1 inch of water per week keeps roots smooth and non-pungent; drought stress makes roots woody, pithy, and more strongly flavored.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 80,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -4,
      method: "direct-sow",
    },
  ],
  description:
    "A fast-growing, cool-season Brassica rapa crop grown for both its crisp, peppery-sweet roots and highly nutritious, frost-hardy greens; performs best in the cool temperatures of spring and fall.",
  careNotes: [
    "Thin seedlings to 3-6 in apart depending on desired final root size — closer for baby/salad turnips, wider for storage roots.",
    "Harvest roots around tennis-ball size (2.5-3 in); larger roots turn woody and stronger-flavored.",
    "Pick before sustained heat in the mid-70s-80s°F to avoid bitterness and bolting.",
    "Turnip greens are exceptionally frost-hardy and can be harvested well after roots would be damaged by cold.",
    "Direct-sow rather than transplant — turnips are fast enough from seed that transplanting offers little advantage and can check root development.",
  ],
  sources: [
    {
      title: "Growing turnips and rutabagas in home gardens",
      publisher: "University of Minnesota Extension",
      url: "https://extension.umn.edu/vegetables/growing-turnips-and-rutabagas",
    },
    {
      title: "Turnips & Rutabagas",
      publisher: "Clemson Cooperative Extension HGIC",
      url: "https://hgic.clemson.edu/factsheet/turnips-rutabagas/",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown as a cool-season crop bracketing the hot summer — spring direct-seeding February 1-March 30 (earlier in south Louisiana) and fall seeding August through early October, with turnip-greens plantings continuing into November in south Louisiana.",
      source: {
        title: "Louisiana Vegetable Planting Guide",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/bneely/articles/page1481835882715",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Recommended as a short-season, direct-seeded crop for both spring and late-summer/fall harvest given Minnesota's compressed growing season.",
      source: {
        title: "Growing turnips and rutabagas in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-turnips-and-rutabagas",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Among the cold-hardy vegetables that can be planted in late summer to overwinter or provide a very early spring harvest in the Willamette Valley's mild, wet winters.",
      source: {
        title: "Plant cold-hardy vegetables now for a spring harvest",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/news/these-cold-hardy-vegetables-may-stick-it-out-through-winter",
      },
    },
  ],
  varieties: [
    {
      name: "Hakurei",
      description: "Japanese salad turnip: smooth, flat-round, pure-white roots eaten raw for their sweet, fruity, juicy flavor and tender texture; the gold standard of Japanese-type turnips.",
      daysToMaturity: { min: 30, max: 50 },
      starting: "Direct-sow, matures just after radishes.",
      growing: "Harvest young for best quality.",
      harvesting: "Pull at up to 2 in for peak sweetness and tenderness.",
      sources: [
        { tier: "seed-supplier", title: "Hakurei - Salad Turnip Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/turnips/hakurei-f1-turnip-seed-706.html" },
      ],
    },
    {
      name: "Scarlet Queen (Red Stems)",
      description: "F1 salad turnip with spicy red skin over sweet, crisp white flesh and slightly flattened roots; attractive dark green tops with red stems are also edible.",
      daysToMaturity: { min: 45, max: 45 },
      starting: "Direct-sow, relatively quick to mature.",
      growing: "Reliable red coloring under cool conditions.",
      harvesting: "Best at 2-3 in diameter; tops good raw or lightly cooked.",
      sources: [
        { tier: "seed-supplier", title: "Scarlet Queen Red Stems - Salad Turnip Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/turnips/scarlet-queen-red-stems-f1-turnip-seed-2374.html" },
      ],
    },
    {
      name: "Tokyo Cross",
      description: "Extremely fast F1 Japanese hybrid producing oval-to-globe pure-white roots with firm, crisp, mild, fine-grained flesh.",
      daysToMaturity: { min: 35, max: 35 },
      starting: "Direct-sow; one of the fastest turnips available.",
      growing: "Matures rapidly, good for succession sowing.",
      harvesting: "Harvest promptly at maturity to avoid pithiness.",
      sources: [
        { tier: "seed-supplier", title: "Tokyo Cross Hybrid Turnip Seeds", publisher: "Seeds 'n Such", url: "https://seedsnsuch.com/products/tokyo-cross-hybrid-turnip-seeds" },
      ],
    },
    {
      name: "Purple Top White Globe",
      description: "Classic 1880 heirloom: smooth globe roots white below-ground, bright magenta-purple above; mild, fine-grained flesh; the standard \"cooking turnip.\"",
      daysToMaturity: { min: 45, max: 65 },
      starting: "Direct-sow, widely adapted.",
      growing: "Reliable, vigorous grower.",
      harvesting: "Best at 3-4 in diameter but retains quality up to ~5 in.",
      sources: [
        { tier: "seed-supplier", title: "Purple Top White Globe Turnip (Heirloom, 58 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/purple-top-white-globe-58-days" },
        { tier: "seed-supplier", title: "Purple Top White Globe - Heirloom & Organic Turnip Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/turnips/purple-top-white-globe-organic-turnip-seed-705G.html" },
      ],
    },
    {
      name: "Gold Ball",
      description: "Heirloom introduced to North America in the 1850s; round golden-fleshed roots with a mild, slightly nutty flavor.",
      starting: "Direct-sow like other storage turnips.",
      growing: "Heirloom vigor, good for fall storage crop.",
      harvesting: "Harvest at moderate size for best nutty flavor.",
      sources: [
        { tier: "blog", title: "21 Delicious Turnip Varieties for the Fall Garden", publisher: "Epic Gardening", url: "https://www.epicgardening.com/turnip-varieties/" },
      ],
    },
    {
      name: "Seven Top",
      description: "Grown almost exclusively for its abundant, tender greens rather than its root, which stays small and fibrous; a top choice for late-summer greens plantings.",
      starting: "Direct-sow for a greens crop, not root harvest.",
      growing: "Heavy, fast leaf production.",
      harvesting: "Cut greens repeatedly through the season.",
      sources: [
        { tier: "blog", title: "11 Turnip Varieties to Plant in Late Summer", publisher: "Epic Gardening", url: "https://www.epicgardening.com/late-summer-turnip-varieties/" },
      ],
    },
    {
      name: "Amber Globe",
      description: "Round roots with pale yellow, smooth-textured flesh and a mild, slightly sweet flavor.",
      starting: "Direct-sow.",
      growing: "Standard globe-turnip habit.",
      harvesting: "Harvest at moderate size before flesh coarsens.",
      sources: [
        { tier: "blog", title: "21 Delicious Turnip Varieties for the Fall Garden", publisher: "Epic Gardening", url: "https://www.epicgardening.com/turnip-varieties/" },
      ],
    },
    {
      name: "Red Round",
      description: "Fast-growing variety with attractive red skin and mild flavor.",
      starting: "Direct-sow.",
      growing: "Quick maturity typical of red-skinned salad types.",
      harvesting: "Harvest young for mildest flavor and best color contrast.",
      sources: [
        { tier: "blog", title: "21 Delicious Turnip Varieties for the Fall Garden", publisher: "Epic Gardening", url: "https://www.epicgardening.com/turnip-varieties/" },
      ],
    },
    {
      name: "Market Express",
      description: "Modern salad-type bred for eating raw; full flavor with a crunchy texture suited to salads and sandwiches.",
      starting: "Direct-sow.",
      growing: "Bred for fresh-eating quality rather than storage.",
      harvesting: "Pick small/young for crunchy, raw-eating texture.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for 'Market Express' Turnips", publisher: "Epic Gardening", url: "https://www.epicgardening.com/market-express-turnips/" },
      ],
    },
    {
      name: "Hirosaki Red",
      description: "Japanese-type salad turnip in the Hakurei style but with red skin; sold specifically as a salad turnip.",
      starting: "Direct-sow.",
      growing: "Similar culture to Hakurei/Scarlet Queen types.",
      harvesting: "Harvest young for salad-turnip texture and flavor.",
      sources: [
        { tier: "seed-supplier", title: "Hirosaki Red - Salad Turnip Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/turnips/hirosaki-red-f1-turnip-seed-4048.html" },
      ],
    },
  ],
} satisfies Plant;

export default turnip;
