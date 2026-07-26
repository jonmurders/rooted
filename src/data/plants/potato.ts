import type { Plant } from "@/types/plant";

const potato = {
  id: "potato",
  commonName: "Potato",
  scientificName: "Solanum tuberosum",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, well-drained soil high in organic matter, slightly acidic (pH 5.0-6.0) — acidity suppresses common scab.",
  spacingInches: 12,
  daysToMaturity: { min: 70, max: 120 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 1,
    notes: "Needs steady, even moisture — roughly 1-2 in/week early, rising to 2-3 in/week during tuber bulking. Irregular watering causes knobbing, cracking, and hollow heart; reduce water as vines yellow near harvest.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -16,
      latestWeeksFromFrost: -10,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season crop grown from seed pieces (whole or cut tubers with at least one eye); underground stems (stolons) swell into starchy, edible tubers over roughly 70-120 days depending on variety.",
  careNotes: [
    "Hill soil around stems every 2-3 weeks as plants grow to bury developing tubers and prevent sunlight-induced greening.",
    "Keep moisture consistent, especially during tuber bulking; avoid feast-or-famine watering.",
    "Maintain slightly acidic soil (pH 5.0-6.0) to reduce common scab.",
    "Stop watering and let foliage die back naturally before harvesting storage crops; cure tubers before storing.",
    "Plant certified disease-free seed potatoes, not grocery-store tubers, to avoid seed-borne disease.",
  ],
  sources: [
    {
      title: "Growing Potatoes in a Home Garden",
      publisher: "University of Maryland Extension",
      url: "https://extension.umd.edu/resource/growing-potatoes-home-garden",
    },
    {
      title: "Potato",
      publisher: "Clemson Cooperative Extension - Home & Garden Information Center",
      url: "https://hgic.clemson.edu/factsheet/potato/",
    },
    {
      title: "Bulletin #2439, Irrigating Potatoes in Maine",
      publisher: "University of Maine Cooperative Extension",
      url: "https://extension.umaine.edu/publications/2439e/",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant Irish potatoes in January-February; harvest by May-June before summer heat shuts down tuber set, then follow with heat-loving crops.",
      source: {
        title: "Home Garden Crops",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/home_garden_crops",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Plant late April-mid-May once soil thaws and reaches 40-50°F; potatoes tolerate light frost so can go in before the last frost date.",
      source: {
        title: "A Minnesota guide to garden timing",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden-news/minnesota-guide-garden-timing",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "In the Willamette Valley, plant late March-May for a late June-October harvest; match variety maturity length to the local season.",
      source: {
        title: "Growing potatoes in the Willamette Valley",
        publisher: "Oregon State University Extension Service",
        url: "https://extension.oregonstate.edu/gardening/vegetables/growing-potatoes-willamette-valley",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Intense sun and light exposure turn tubers green (toxic) faster in this climate, making thorough hilling and consistent irrigation especially important.",
      source: {
        title: "Growing Zones, Recommended Crop Varieties, and Planting and Harvesting Information for Home Vegetable Gardens in New Mexico (Circular 457-B)",
        publisher: "New Mexico State University Extension",
        url: "https://pubs.nmsu.edu/_circulars/CR457B/",
      },
    },
  ],
  varieties: [
    {
      name: "Yukon Gold",
      description: "Classic all-purpose yellow potato with smooth thin skin and buttery light-yellow flesh; sprout-resistant, high-yielding, stores well.",
      starting: "Grown from certified seed pieces with at least one eye.",
      growing: "Large, upright plants; consistent producer.",
      harvesting: "Dig as \"new\" potatoes ~2-3 weeks after flowering, or wait until vines die back for a full storage crop.",
      sources: [
        { tier: "seed-supplier", title: "Yukon Gold - Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/yukon-gold-seed-potatoes-532.html" },
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "Kennebec",
      description: "All-purpose variety with thin light-brown skin and white flesh; high starch gives a fluffy texture good for mashing and fries; stores well.",
      starting: "From certified seed pieces.",
      growing: "Vigorous, reliable yields.",
      harvesting: "Main-season storage type, harvest after vine die-back.",
      sources: [
        { tier: "seed-supplier", title: "Kennebec - Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/kennebec-seed-potatoes-539.html" },
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "Russet Burbank",
      description: "The classic large baking potato with dark, rough brown skin and thick off-white flesh; long-season.",
      daysToMaturity: { min: 120, max: 130 },
      starting: "Certified seed pieces.",
      growing: "Needs a longer season than most varieties.",
      harvesting: "Full-season storage crop, harvest after vine die-back.",
      sources: [
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
        { tier: "university-extension", title: "Grow your own potatoes", publisher: "Oregon State University Extension Service", url: "https://extension.oregonstate.edu/gardening/techniques/grow-your-own-potatoes" },
      ],
    },
    {
      name: "Red Pontiac",
      description: "Thin red-skinned potato with firm, creamy white flesh; popular boiling potato.",
      starting: "Certified seed pieces.",
      growing: "Vigorous and widely adapted.",
      harvesting: "Good for both new-potato and full-maturity harvest.",
      sources: [
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "Dark Red Norland",
      description: "Productive early red variety, round-to-oblong tubers with red skin and white flesh; bulks up quickly.",
      daysToMaturity: { min: 80, max: 90 },
      starting: "Certified seed pieces, early planting.",
      growing: "Fast bulking, good for short-season areas.",
      harvesting: "Harvest early as a \"new potato\" type.",
      sources: [
        { tier: "seed-supplier", title: "Dark Red Norland - Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/dark-red-norland-seed-potatoes-552.html" },
        { tier: "university-extension", title: "Grow your own potatoes", publisher: "Oregon State University Extension Service", url: "https://extension.oregonstate.edu/gardening/techniques/grow-your-own-potatoes" },
      ],
    },
    {
      name: "French Fingerling",
      description: "Fingerling type with thin pale skin, small brown spots, golden waxy interior; nutty, buttery flavor, good roasted.",
      starting: "Certified seed pieces.",
      growing: "Fingerlings are typically later-maturing than round types.",
      harvesting: "Among the last varieties harvested in the season.",
      sources: [
        { tier: "seed-supplier", title: "French Fingerling - Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/french-fingerling-seed-potatoes-2608.html" },
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "Russian Banana",
      description: "Firm, waxy fingerling with nutty, buttery flavor; excellent roasted or in salads.",
      starting: "Certified seed pieces.",
      growing: "Fingerling habit, later maturing.",
      harvesting: "Harvested late season like other fingerlings.",
      sources: [
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "All Blue",
      description: "Deep purple skin and flesh throughout; floury texture, prized for color in mashed dishes.",
      starting: "Certified seed pieces.",
      growing: "Standard maincrop habit.",
      harvesting: "Full-season storage type.",
      sources: [
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "Purple Majesty",
      description: "Purple-skinned heirloom-type with tender yellow flesh and rich, buttery flavor; good pan-fried, roasted, or in salads.",
      starting: "Certified seed pieces.",
      growing: "Standard habit.",
      harvesting: "Full maturity for best color/texture.",
      sources: [
        { tier: "blog", title: "31 Potato Varieties To Plant This Year", publisher: "Epic Gardening", url: "https://www.epicgardening.com/potato-varieties/" },
      ],
    },
    {
      name: "German Butterball",
      description: "Medium tubers with characteristic layered/netted skin and rich, buttery yellow flesh; somewhat susceptible to Rhizoctonia.",
      daysToMaturity: { min: 85, max: 110 },
      starting: "Certified seed pieces.",
      growing: "Later-maturing but can be dug early (~85 days) for extra-tender flesh, or left to maincrop maturity.",
      harvesting: "Stores well; harvest young for the most buttery texture.",
      sources: [
        { tier: "seed-supplier", title: "German Butterball - Heirloom Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/german-butterball-seed-potatoes-3110.html" },
        { tier: "seed-supplier", title: "German Butterball Potato", publisher: "Burpee", url: "https://www.burpee.com/potato-german-butterball-prod001569.html" },
      ],
    },
    {
      name: "Desiree",
      description: "Oval red-skinned, yellow-fleshed potato; mid-season, heavy cropper with high drought resistance and good resistance to potato virus Y and powdery scab.",
      daysToMaturity: { min: 80, max: 100 },
      starting: "Certified seed pieces.",
      growing: "Bulks early, produces uniform tubers even under uneven soil moisture.",
      harvesting: "Can be harvested a couple weeks early as new potatoes or left to fully bulk; decent storage.",
      sources: [
        { tier: "seed-supplier", title: "Desiree Potato Plant", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/desiree" },
        { tier: "blog", title: "Independent assessment of the Desiree potato", publisher: "GardenFocused", url: "https://gardenfocused.co.uk/vegetable/potatoes/variety-desiree.php" },
      ],
    },
    {
      name: "Katahdin",
      description: "Historic 1932 USDA/Maine release with buff skin, white flesh, shallow eyes; the traditional benchmark for storage potatoes.",
      starting: "Certified seed pieces.",
      growing: "Late-maturing vines but tubers set relatively early; drought tolerant; resistant to mild mosaic but not to scab, spindle tuber, or leafroll.",
      harvesting: "Excellent storability with few culls; washes well at maturity.",
      sources: [
        { tier: "university-extension", title: "Bulletin #1094, Top 10 Potato Varieties in Maine and Their Resistances to Common Diseases", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/publications/1094e/" },
        { tier: "seed-supplier", title: "Katahdin White Potato", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/moose/katahdin-late-season-potato-7900" },
      ],
    },
    {
      name: "Yellow Finn",
      description: "Late-season heirloom with pear-shaped tubers, deep yellow-tan skin, waxy yellow flesh, rich buttery flavor; resistant to scab.",
      daysToMaturity: { min: 80, max: 100 },
      starting: "Certified seed pieces.",
      growing: "Long-season type, excellent yields under long growing seasons.",
      harvesting: "Strong storage qualities; harvest after vine die-back.",
      sources: [
        { tier: "seed-supplier", title: "Yellow Finn, Seed Potatoes", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/yellow-finn-seed-potatoes/POYF.html" },
      ],
    },
    {
      name: "Carola",
      description: "Yellow-fleshed German cultivar, waxy \"festkochend\" texture that keeps a fresh, new-potato taste even after months in storage; scab and disease resistant.",
      starting: "Certified seed pieces.",
      growing: "Abundant yields.",
      harvesting: "Excellent storage qualities; mid-to-late season.",
      sources: [
        { tier: "seed-supplier", title: "Carola Potato", publisher: "Territorial Seed Company", url: "https://territorialseed.com/products/carola" },
        { tier: "blog", title: "Carola Potatoes Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Carola_Potatoes_5435.php" },
      ],
    },
    {
      name: "King Edward",
      description: "UK heritage maincrop (since 1902) with light-brown skin, pink blush around shallow eyes, creamy-white flesh that stays white cooked; top-rated for roasting/mashing/boiling but not salads.",
      daysToMaturity: { min: 125, max: 140 },
      starting: "Certified seed pieces; late-March planting typical in the UK.",
      growing: "Late-maturing maincrop, ~20-22 weeks to harvest.",
      harvesting: "Harvest mid-to-late August (UK timing).",
      sources: [
        { tier: "blog", title: "Independent assessment of the King Edward potato variety", publisher: "GardenFocused", url: "https://gardenfocused.co.uk/vegetable/potatoes/variety-king-edward.php" },
        { tier: "blog", title: "King Edward Potatoes Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/King_Edward_Potatoes_15419.php" },
      ],
    },
    {
      name: "Goldrush",
      description: "Medium-to-late maturing russet bred for fresh market; excellent flavor, extremely white flesh that holds color when cooked; resistant to hollow heart, verticillium wilt, and scab.",
      daysToMaturity: { min: 110, max: 120 },
      starting: "Certified seed pieces.",
      growing: "Medium-to-high yields.",
      harvesting: "Stores excellently; good baking/boiling potato.",
      sources: [
        { tier: "seed-supplier", title: "Gold Rush - Russet Seed Potatoes", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/potatoes/gold-rush-seed-potatoes-2219.html" },
        { tier: "university-extension", title: "GoldRush Potato Fact Sheet", publisher: "Wisconsin Seed Potato Certification Program (UW-Madison)", url: "https://seedpotato.russell.wisc.edu/2017/08/31/gold-rush-potato-fact-sheet/" },
      ],
    },
    {
      name: "Clancy",
      description: "First true-seed (not tuber-propagated) potato to win an All-America Selections award (2019); small round-and-fingerling \"creamer\" potatoes in rose-gold-to-red skin tones with pale yellow-white flesh.",
      daysToMaturity: { min: 90, max: 90 },
      starting: "Unusually, started from true botanical seed rather than seed potatoes, often as pelleted seed.",
      growing: "F1 hybrid bred by Peter van Hest; diverse tuber coloring per plant.",
      harvesting: "Harvested young as small creamer potatoes, ~90 days.",
      sources: [
        { tier: "seed-supplier", title: "Clancy Potato Seeds", publisher: "Epic Gardening", url: "https://shop.epicgardening.com/products/clancy-potato-seeds" },
        { tier: "blog", title: "Potato Clancy F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/potato-clancy/" },
      ],
    },
    {
      name: "Warba",
      description: "Very early, determinate (bush-type) variety with white skin/flesh and characteristic reddish \"pink eye\" splashes; low specific gravity.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Plant seed pieces 3-4 in deep, ~12 in apart.",
      growing: "Fast-growing, high-yielding, tubers form just above the seed piece.",
      harvesting: "Ready in 65-70 days, often as the first fresh spuds of the season; good for boiling/baking, not chipping.",
      sources: [
        { tier: "blog", title: "Warba Potatoes: The Early Season Maturing Variety", publisher: "Garden Faerie Botanicals", url: "https://gardenfaeriebotanicals.ca/warba-potato-tubers/" },
        { tier: "blog", title: "Your Guide to Warba Potatoes", publisher: "Ten Servings", url: "https://www.tenservings.ca/blogs/news/your-guide-to-warba-potatoes-canada-s-first-fresh-spuds-of-the-season" },
      ],
    },
    {
      name: "Agata",
      description: "Dutch, very-early, yellow-skinned/yellow-fleshed ware potato with high early yield and very shallow eyes.",
      daysToMaturity: { min: 70, max: 90 },
      starting: "Certified seed pieces; thrives in light-to-medium, well-drained, slightly acidic soil (heavy/wet soil promotes fungal disease).",
      growing: "Rapid initial top growth, tubers begin forming within 4-6 weeks; not sensitive to harvest damage or dry rot.",
      harvesting: "Good for early-season harvest.",
      sources: [
        { tier: "seed-supplier", title: "Agata Potato Seed Variety", publisher: "Europlant America", url: "https://www.europlantamerica.com/varieties/agata" },
      ],
    },
    {
      name: "Superior",
      description: "Developed in Wisconsin in the mid-1900s; oval-to-round tubers, white skin (may lightly russet), white flesh, firm flaky texture; moderate resistance to common scab and verticillium wilt.",
      daysToMaturity: { min: 65, max: 80 },
      starting: "Certified seed pieces.",
      growing: "Early-to-mid-season, all-purpose.",
      harvesting: "Good yields and good storability for an early type.",
      sources: [
        { tier: "seed-supplier", title: "Superior White Potato", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/moose/superior-white-potato-7150" },
      ],
    },
  ],
} satisfies Plant;

export default potato;
