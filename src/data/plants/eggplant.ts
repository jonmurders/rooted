import type { Plant } from "@/types/plant";

const eggplant = {
  id: "eggplant",
  commonName: "Eggplant",
  scientificName: "Solanum melongena",
  category: "vegetable",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Well-drained, fertile sandy loam rich in organic matter; pH 5.8-6.5.",
  spacingInches: 24,
  daysToMaturity: { min: 50, max: 90 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Needs 1-2 in of water/week, applied as a deep soak rather than frequent shallow watering. Inconsistent moisture causes blossom drop, bitterness, and blossom-end rot.",
  },
  temperature: {
    frostThresholdF: 50,
    heatStressThresholdF: 90,
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
    "A warm-season nightshade grown for its glossy, meaty fruit, ranging from classic purple-black globes to slender Asian types and white or striped heirlooms. Needs a long, warm growing season and is very sensitive to cold.",
  careNotes: [
    "Stake or cage plants once fruit sets; brittle branches can snap under fruit weight.",
    "Mulch to conserve moisture and keep soil temperatures even.",
    "Harvest fruit while skin is still glossy — dull, hard skin means the fruit is overripe and seedy.",
    "Watch for flea beetles and Colorado potato beetle, especially on young transplants.",
    "In short-season climates, choose smaller/faster Asian or mini hybrids rather than large Italian heirlooms.",
  ],
  sources: [
    {
      title: "Growing Eggplant in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-eggplant-home-garden",
    },
    {
      title: "Eggplants (Vegetable Gardening Tips Series)",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/portals/communications/publications/publications_catalog/lawn%20and%20garden/vegetables/vegetable-gardening-tips-series/eggplants",
    },
    {
      title: "Chapter 8: Eggplant Production, Vegetable Production Handbook of Florida",
      publisher: "UF/IFAS",
      url: "https://ask.ifas.ufl.edu/publication/CV124?downloadOpen=true",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Transplanting into the garden too early is the most common problem — soil/air temps are usually too low in early spring. North Louisiana: mid-to-late April transplant; south Louisiana: mid-to-late March. Well-cared-for plants produce through summer into fall.",
      source: {
        title: "Eggplants (Vegetable Gardening Tips Series)",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/portals/communications/publications/publications_catalog/lawn%20and%20garden/vegetables/vegetable-gardening-tips-series/eggplants",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Grows easily in southwest Arizona and loves lots of sun; plant after the last frost (early March in Tucson) in well-drained soil. Provide shade for plants left to mature through peak summer heat to prevent sun-scald.",
      source: {
        title: "How to Grow Eggplant",
        publisher: "Growing In The Garden",
        url: "https://growinginthegarden.com/how-to-grow-eggplant-8-tips-for-growing-eggplant/",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Portland/Seattle average only 6-8 days above 90°F/year, limiting heat-demanding eggplant; plant only after soil reaches 60°F, choose smaller Asian varieties that ripen faster, and use sandy loam soils on a south-facing slope.",
      source: {
        title: "Eggplant",
        publisher: "Oregon State University Extension",
        url: "https://horticulture.oregonstate.edu/oregon-vegetables/eggplant-0",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Wait until after last frost (mid-to-late May) to transplant; because the season is short, warm-season crops like eggplant must be started as transplants, and northern/short-season varieties are recommended over exotic purple-striped types.",
      source: {
        title: "Growing staple vegetables from around the world in Minnesota",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-staple-vegetables-around-world-minnesota",
      },
    },
  ],
  varieties: [
    {
      name: "Black Beauty",
      description: "Classic 1902 Burpee introduction; glossy deep-purple oval fruit 6-8 in long, tender creamy flesh.",
      daysToMaturity: { min: 72, max: 85 },
      starting: "Standard 8-10 week indoor start.",
      growing: "Vigorous, widely adapted — the benchmark \"standard Italian\" type.",
      harvesting: "Pick when skin is glossy and firm, before seeds harden.",
      sources: [
        { tier: "seed-supplier", title: "Black Beauty Eggplant Seeds & Plant", publisher: "Burpee", url: "https://www.burpee.com/eggplant-black-beauty-prod000706.html" },
        { tier: "seed-supplier", title: "Black Beauty Eggplant", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/black-beauty-eggplant" },
      ],
    },
    {
      name: "Ichiban",
      description: "Japanese hybrid, slim deep-purple fruit to 10 in long, sweet mild flavor.",
      daysToMaturity: { min: 55, max: 70 },
      starting: "Transplant after soil is warm.",
      growing: "Thrives in hot weather but also performs in cooler climates; bears until first frost.",
      harvesting: "Pick at 8-10 in while skin is glossy.",
      sources: [
        { tier: "seed-supplier", title: "Ichiban Eggplant (2 Pack)", publisher: "Bonnie Plants", url: "https://bonnieplants.com/product/ichiban-japanese-eggplant/" },
      ],
    },
    {
      name: "Millionaire",
      description: "Japanese-type hybrid from Kyoto stock; shiny black, nearly seedless slender fruit to 8 in.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Add 6-8 weeks for raising transplants.",
      growing: "Upright, highly productive, unusually heat tolerant, does best in moist soil/full sun.",
      harvesting: "Harvest young and glossy for best seedless texture.",
      sources: [
        { tier: "seed-supplier", title: "Millionaire Eggplant Seeds", publisher: "Burpee", url: "https://www.burpee.com/eggplant-millionaire-hybrid-prod000711.html" },
        { tier: "seed-supplier", title: "Millionaire Eggplant Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/eggplant-millionaire" },
      ],
    },
    {
      name: "Fairy Tale",
      description: "AAS-winning mini eggplant; white fruit striped violet/purple, 2-4 in long.",
      daysToMaturity: { min: 49, max: 51 },
      starting: "Compact 18-24 in plants suit containers.",
      growing: "Sweet, non-bitter flesh even as fruit enlarges; first eggplant AAS winner since 1939.",
      harvesting: "Pick in clusters at 2-4 in; good for whole grilling/marinating.",
      sources: [
        { tier: "seed-supplier", title: "Fairy Tale F1 Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/mini-eggplants/fairy-tale-f1-eggplant-seed-2260.html" },
        { tier: "seed-supplier", title: "Eggplant Fairy Tale F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/eggplant-fairy-tale/" },
      ],
    },
    {
      name: "Rosa Bianca",
      description: "Sicilian heirloom; pink-lavender scalloped fruit with white shading, 4-6 in.",
      daysToMaturity: { min: 75, max: 90 },
      starting: "Needs full warm season; best in zones 6-10.",
      growing: "Needs fertile soil, consistent moisture, 6+ hrs sun.",
      harvesting: "Mild, meaty, seedless flesh — pick before fruit dulls.",
      sources: [
        { tier: "seed-supplier", title: "Rosa Bianca Eggplant Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/eggplant-rosa-bianca" },
        { tier: "seed-supplier", title: "Rosa Bianca - Heirloom & Organic Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/italian-eggplants/rosa-bianca-organic-eggplant-seed-2605G.html" },
      ],
    },
    {
      name: "Listada de Gandia",
      description: "Spanish heirloom (Gandia, Valencia; dates to 1850s); violet-and-ivory striped, 5-7 in oval fruit, thin tender skin.",
      daysToMaturity: { min: 80, max: 90 },
      starting: "Standard indoor start.",
      growing: "Compact bushy plants 31-36 in tall.",
      harvesting: "Low bitterness, creamy texture when cooked; open-pollinated, seed-savable.",
      sources: [
        { tier: "seed-supplier", title: "Listada De Gandia Eggplant Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/eggplant-listada-de-gandia" },
        { tier: "seed-supplier", title: "Listada de Gandia Eggplant", publisher: "Holmes Seed Company", url: "https://www.holmesseed.com/listada-de-gandia/" },
      ],
    },
    {
      name: "Casper",
      description: "Japanese white variety; creamy-white fruit, mushroom-like flavor, silky texture.",
      daysToMaturity: { min: 66, max: 80 },
      starting: "Sow 1/4 in deep, ~80°F germination, start 8 weeks before transplant.",
      growing: "Compact plants, small-seeded interior.",
      harvesting: "Pick at ~6 in long by 2 in diameter while skin stays bright white.",
      sources: [
        { tier: "seed-supplier", title: "Casper Eggplant Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/casper-eggplant" },
        { tier: "seed-supplier", title: "Casper White Eggplant", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/casper-white-eggplant" },
      ],
    },
    {
      name: "Ping Tung Long",
      description: "Taiwanese heirloom; purple fruit to 14 in long, pearly-white drier flesh.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Standard warm-season start.",
      growing: "2-4 ft plants yield up to 20 fruits each; thrives in hot weather.",
      harvesting: "Sweet, tender, never bitter — harvest while still light purple/glossy.",
      sources: [
        { tier: "seed-supplier", title: "Ping Tung Long Eggplant", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/ping-tung-long-eggplant" },
        { tier: "seed-supplier", title: "Ping Tung Eggplant Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/eggplant-ping-tung" },
      ],
    },
    {
      name: "Thai Long Green",
      description: "Asian heirloom; pale-green fruit to 12 in long with dark-green cap.",
      daysToMaturity: { min: 75, max: 90 },
      starting: "Sow 1/4 in deep at 75-85°F, germination 10-15 days.",
      growing: "Hardy, fairly disease resistant.",
      harvesting: "Sweet/mild flesh, many small seeds; pick before fruit turns fully pale/soft.",
      sources: [
        { tier: "seed-supplier", title: "Organic Thai Long Green Eggplant", publisher: "Annie's Heirloom Seeds", url: "https://anniesheirloomseeds.com/products/organic-thai-long-green-eggplant-solanum-melongena" },
        { tier: "seed-supplier", title: "Thai Long Green Eggplant Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/eggplant-thai-long-green" },
      ],
    },
    {
      name: "Little Fingers",
      description: "Slim Asian type, glossy dark-purple fruit in clusters of 3-6, 4-8 in long.",
      daysToMaturity: { min: 60, max: 70 },
      starting: "Good container variety.",
      growing: "Spineless for easy picking, heavy-yielding, open-pollinated.",
      harvesting: "Creamy interior, thin skin needs no peeling; pick young in clusters.",
      sources: [
        { tier: "seed-supplier", title: "Eggplant Little Fingers Organic Seed", publisher: "Harris Seeds", url: "https://www.harrisseeds.com/products/eggplant-little-fingers-organic-seed" },
        { tier: "seed-supplier", title: "Organic Non-GMO Little Finger Eggplant", publisher: "High Mowing Organic Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-little-finger-eggplant.html" },
      ],
    },
    {
      name: "Diamond",
      description: "Ukrainian heirloom (imported 1993 by Kent Whealy/Seed Savers Exchange); deep-purple teardrop fruit 8-9 in long.",
      daysToMaturity: { min: 70, max: 80 },
      starting: "Standard start; good in cooler climates.",
      growing: "Compact (up to 2 ft), disease resistant, uniform fruiting, high yields.",
      harvesting: "Glossy sheen retained after picking; mild creamy low-bitterness flesh.",
      sources: [
        { tier: "seed-supplier", title: "Diamond Eggplant Organic Seeds", publisher: "Terramater Gardens", url: "https://www.terramatergardens.com/products/diamond-eggplant-seeds" },
        { tier: "seed-supplier", title: "Organic Diamond Eggplant", publisher: "Annie's Heirloom Seeds", url: "https://anniesheirloomseeds.com/products/organic-diamond-eggplant-solanum-melongena" },
      ],
    },
    {
      name: "Nadia",
      description: "F1 hybrid, classic European oval shape, 7-8 in fruit, glossy dark purple-black, ~1 lb.",
      daysToMaturity: { min: 67, max: 70 },
      starting: "Standard hybrid start.",
      growing: "High-yielding, sets fruit even in cool conditions, outperforms older varieties in trials.",
      harvesting: "Slow internal seed development gives a longer harvest window/holding ability.",
      sources: [
        { tier: "seed-supplier", title: "Nadia (F1) Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/nadia-f1-eggplant-seed-2267.html" },
        { tier: "seed-supplier", title: "Nadia Hybrid Eggplant", publisher: "Tomato Growers Supply Company", url: "https://tomatogrowers.com/products/nadia-hybrid" },
      ],
    },
    {
      name: "Dusky",
      description: "Early hybrid; uniform long-oval fruit to 8 in x 3.5 in, glossy purplish-black skin.",
      daysToMaturity: { min: 60, max: 65 },
      starting: "Standard start.",
      growing: "Firm, high-quality flesh; good early producer.",
      harvesting: "Pick at 8 in before skin dulls.",
      sources: [
        { tier: "blog", title: "How to Plant and Grow Eggplant", publisher: "Harvest to Table", url: "https://harvesttotable.com/eggplant_varieties_best_bet_an/" },
      ],
    },
    {
      name: "Orient Express",
      description: "F1 Asian hybrid; slender glossy-black fruit 8-10 in, thin skin, mild flesh.",
      daysToMaturity: { min: 58, max: 70 },
      starting: "Slower to emerge than other eggplant varieties — allow extra germination time.",
      growing: "Dependable, heavy producer, sets fruit across a wide temperature range.",
      harvesting: "One of the earliest Asian types to harvest; pick young for delicate flavor.",
      sources: [
        { tier: "seed-supplier", title: "Orient Express (F1) Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/orient-express-f1-eggplant-seed-354.html" },
        { tier: "seed-supplier", title: "Orient Express Hybrid Eggplant", publisher: "Tomato Growers Supply Company", url: "https://tomatogrowers.com/products/orient-express-hybrid" },
      ],
    },
    {
      name: "Gretel",
      description: "AAS winner (2009); earliest white eggplant, pure-white teardrop clusters 3-4 in long.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Petite plant, good for containers.",
      growing: "High yield, tender skin, few seeds, sweetest flavor of the mini whites; plants 36-52 in tall.",
      harvesting: "Pick in clusters at 3-4 in.",
      sources: [
        { tier: "seed-supplier", title: "Eggplant Gretel F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/eggplant-gretel/" },
        { tier: "seed-supplier", title: "Gretel - White Mini Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/mini-eggplants/gretel-f1-eggplant-seed-241.html" },
      ],
    },
    {
      name: "Hansel",
      description: "AAS winner (2008); glossy dark-purple mini fruit 2-10 in in finger-like clusters.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "Compact plant (up to 3 ft), good for containers.",
      growing: "High yields, non-bitter tender fruit; matured ~10 days earlier than comparison varieties in AAS trials.",
      harvesting: "Can be picked small (2-3 in) or let grow to 6-10 in.",
      sources: [
        { tier: "seed-supplier", title: "Eggplant Hansel F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/eggplant-hansel/" },
        { tier: "seed-supplier", title: "Hansel - Mini Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/mini-eggplants/hansel-f1-eggplant-seed-240.html" },
      ],
    },
    {
      name: "Turkish Orange",
      description: "Turkish heirloom; small round fruit that ripens green to glossy red-orange, streaked.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Standard.",
      growing: "Compact plant (24-36 in), insect resistant, ornamental, heavy yields.",
      harvesting: "Eat green — flavor degrades fast once fully orange; orange fruit best for stuffing only, not fresh eating.",
      sources: [
        { tier: "seed-supplier", title: "Turkish Orange Eggplant (Heirloom, 80 days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/turkish-orange-eggplant-heirloom" },
        { tier: "blog", title: "Turkish Eggplant Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Turkish_Eggplant_439.php" },
      ],
    },
    {
      name: "Applegreen",
      description: "Bred 1964 by Elwyn Meader, University of New Hampshire Ag Experiment Station; apple-green \"Granny Smith\"-look fruit, 1-3 per plant, 1-2+ lb each.",
      daysToMaturity: { min: 70, max: 80 },
      starting: "Standard; suited to cooler, short-summer regions.",
      growing: "Sets fruit even when nights run low 60s-low 70s°F — a good pick for marginal climates.",
      harvesting: "Cream flesh, mild flavor, edible skin.",
      sources: [
        { tier: "seed-supplier", title: "Apple Green Eggplant (70 Days)", publisher: "Pinetree Garden Seeds", url: "https://www.superseeds.com/products/apple-green-eggplant-70-days" },
      ],
    },
    {
      name: "Patio Baby",
      description: "AAS Regional Winner (Northeast, 2014); very compact (20-24 in), thornless, container-bred hybrid.",
      daysToMaturity: { min: 45, max: 45 },
      starting: "Ideal for pots/small spaces, no staking needed.",
      growing: "Highly productive — up to 50 fruits/plant.",
      harvesting: "Pick young at 2-3 in for tender skin and mild flavor, low seed count.",
      sources: [
        { tier: "seed-supplier", title: "Eggplant Patio Baby F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/eggplant-patio-baby/" },
      ],
    },
    {
      name: "Calliope",
      description: "F1 Indian-type bicolor hybrid; small white-and-purple variegated oval fruit, green (spineless) calyx.",
      daysToMaturity: { min: 64, max: 64 },
      starting: "Standard hybrid start.",
      growing: "High-yielding even in northern climates; spineless plant and calyx unlike many Indian types.",
      harvesting: "Pick \"baby\" at 2 x 1.5 in or mature at 3-4 x 2.25-2.75 in.",
      sources: [
        { tier: "seed-supplier", title: "Calliope (F1) Eggplant Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/eggplant/calliope-f1-eggplant-seed-2433.html" },
      ],
    },
  ],
} satisfies Plant;

export default eggplant;
