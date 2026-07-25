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
  varieties: [
    {
      name: "Texas Grano 1015Y (short-day)",
      description: "The famous \"1015Y Texas SuperSweet\" developed by Texas A&M, the parent of the modern Vidalia-type sweet onion category; named because it's planted around Oct 15.",
      daysToMaturity: { min: 75, max: 110 },
      starting: "Classic short-day type — start via transplants/sets in fall/winter in the South.",
      growing: "Bulbs average 1lb and 4-5in diameter; very low pungency/high sugar.",
      harvesting: "Harvest when tops fall over; poor keeper — best for fresh eating rather than storage.",
      sources: [
        { tier: "seed-supplier", title: "1015Y Texas Super Sweet Onion Plants", publisher: "Dixondale Farms", url: "https://www.dixondalefarms.com/product/1015y-texas-super-sweet/short_day_onions" },
      ],
    },
    {
      name: "Texas Early Grano 502 (short-day)",
      description: "A 1944 Texas Agricultural Experiment Station release (\"PRR\" = pink root rot resistant); called the \"eat it like an apple\" onion for its mild sweetness.",
      daysToMaturity: { min: 100, max: 110 },
      starting: "Widely used for winter onion production in Southern climates.",
      growing: "Strong tolerance to Pink Root Rot, a key disease differentiator from many other short-day types.",
      harvesting: "Round yellow bulbs, thin skin, crisp white flesh; best for fresh use, not long storage.",
      sources: [
        { tier: "seed-supplier", title: "Texas Early Grano 502 PRR Onion", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/texas-early-grano-502-prr-onion" },
      ],
    },
    {
      name: "White Bermuda (short-day)",
      description: "An 1898 heirloom (seed originally from the Canary Islands) that established Texas as an onion powerhouse; flattened, satiny-white, very mild, low-sulfur bulbs.",
      starting: "Classic Southern short-day heirloom; won't size up well in northern (long-day) latitudes.",
      growing: "Thick, flat bulb shape typical of old Bermuda-type onions.",
      harvesting: "Very quick to mature and only keeps about one month — notably shorter storage than the onion generic norm; best eaten fresh or pickled.",
      sources: [
        { tier: "seed-supplier", title: "White Bermuda Onion Plants", publisher: "Dixondale Farms", url: "https://www.dixondalefarms.com/product/white-bermuda-case-lot/short_day_onions" },
      ],
    },
    {
      name: "Yellow Granex / Vidalia-type (short-day)",
      description: "The specific cultivar type that, by Georgia law, must be used to legally call an onion \"Vidalia\" — descended from Texas's Early Grano lineage.",
      starting: "Grown fall-to-spring, south of the 35th parallel.",
      growing: "Bred/selected specifically for the low-sulfur soils of the Vidalia, GA region — a uniquely regional growing requirement.",
      harvesting: "Very low pungency, short storage life.",
      sources: [
        { tier: "university-extension", title: "Onion Production Guide", publisher: "UGA Cooperative Extension", url: "https://extension.uga.edu/publications/detail.html?number=B1198&title=onion-production-guide" },
        { tier: "university-extension", title: "UGA Vidalia Onion Variety Trial 2024-2025 Crop Season", publisher: "UGA CAES Field Report", url: "https://fieldreport.caes.uga.edu/publications/AP114-04-07/uga-vidalia-onion-variety-trial-2024-2025-crop-season/" },
      ],
    },
    {
      name: "Red Creole (short-day)",
      description: "A short-day heirloom bred specifically for the Southern US, with firm, purple-red flesh; more pungent than most short-day sweets.",
      daysToMaturity: { min: 110, max: 110 },
      starting: "Very little bolt resistance — a specific weakness to note.",
      growing: "Resistant to pink root rot; tolerant of other diseases.",
      harvesting: "3-4in dark red globes; storage estimates vary by source from 2-3 months up to 6-7 months.",
      sources: [
        { tier: "blog", title: "Red Creole Onion", publisher: "Texas A&M AgriLife Extension (Henderson County Master Gardener)", url: "https://txmg.org/hendersonmg/plant-library/onion-red-creole/" },
      ],
    },
    {
      name: "Contessa (short-day)",
      description: "The white-fleshed counterpart to Texas 1015 Super Sweet (sometimes called \"1015W\"), developed by Texas A&M.",
      daysToMaturity: { min: 100, max: 100 },
      starting: "Standard short-day planting.",
      growing: "Short-day, for Southern growing regions.",
      harvesting: "Stores only about 2 months — shorter than generic onion storage expectations, best for fresh eating.",
      sources: [
        { tier: "blog", title: "White 1015Y Texas Sweet Onions (\"Contessa\")", publisher: "Vegetables of Interest", url: "https://vegetablesofinterest.typepad.com/vegetablesofinterest/2008/05/white-1015y-tex.html" },
      ],
    },
    {
      name: "Candy (intermediate-day)",
      description: "A hybrid cross between short-day and long-day onions, making it uniquely adaptable to nearly all US regions regardless of latitude.",
      daysToMaturity: { min: 90, max: 100 },
      starting: "Because it's day-neutral/intermediate, it's a good \"no-fail\" choice when a gardener is unsure of their day-length zone.",
      growing: "Cure 2-3 weeks in a well-ventilated area after pulling.",
      harvesting: "Only stores about 3 months — shorter than generic; best used relatively soon after harvest.",
      sources: [
        { tier: "blog", title: "Candy Onion", publisher: "Texas A&M AgriLife Extension (Henderson County Master Gardener)", url: "https://txmg.org/hendersonmg/plant-library/onion-candy/" },
        { tier: "seed-supplier", title: "Candy - (F1) Onion Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/candy-f1-onion-seed-2991.html" },
      ],
    },
    {
      name: "Superstar (intermediate-day)",
      description: "The first day-neutral onion to win an All-America Selections award; large white bulbs with mild sweet flavor, adaptable to most of the US. Appears to be the same or closely related AAS-winning cultivar sold under the name \"Sierra Blanca\" by other suppliers.",
      daysToMaturity: { min: 85, max: 90 },
      starting: "Standard intermediate-day planting.",
      growing: "Bred with pink-root resistance.",
      harvesting: "Best used fresh — storage potential is only 1-2 months, notably shorter than the generic onion range.",
      sources: [
        { tier: "blog", title: "Superstar Hybrid Onion", publisher: "Gurney's Seed & Nursery", url: "https://www.gurneys.com/products/superstar_hybrid_onion_" },
        { tier: "seed-supplier", title: "Super Star Onion Plants", publisher: "Dixondale Farms", url: "https://dixondalefarms.com/product/super-star-onion-plants/" },
      ],
    },
    {
      name: "Cabernet (intermediate-day, red)",
      description: "A premium hybrid intermediate-day red onion selected for color retention (rings resist fading when cooked/pickled) and uniform globe shape.",
      daysToMaturity: { min: 100, max: 110 },
      starting: "Standard intermediate-day planting.",
      growing: "Disease-resistant; performs well in raised beds.",
      harvesting: "3-4in deep-crimson bulbs; storage is notably good for a red onion — up to 6 months.",
      sources: [
        { tier: "seed-supplier", title: "Cabernet - Red Onion Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/cabernet-f1-onion-seed-2581.html" },
      ],
    },
    {
      name: "Mars (intermediate-day, red)",
      description: "An early red intermediate-day onion suitable for both fresh eating and medium-term storage, with excellent internal ring color.",
      daysToMaturity: { min: 102, max: 102 },
      starting: "Standard intermediate-day planting.",
      growing: "Best in latitudes 32-42°, the classic intermediate-day band.",
      harvesting: "Uniform 3-4in globes, single centers, rosy-red skin.",
      sources: [
        { tier: "blog", title: "Pick Your New Crop from These 20 Onion Varieties", publisher: "Growing Produce", url: "https://www.growingproduce.com/vegetables/pick-your-new-crop-from-these-20-onion-varieties/" },
      ],
    },
    {
      name: "Walla Walla Sweet (long-day)",
      description: "The famous Pacific Northwest sweet onion; cold-hardy, exceptionally mild and juicy, with golden skin and crisp white flesh.",
      starting: "Often fall-sown/overwintered in mild maritime climates, unusual among long-day types.",
      growing: "Requires roughly 14 hours of daylight to bulb, at the shorter end of long-day requirements.",
      harvesting: "Best for fresh eating — stores no more than about two months, notably shorter than generic onion storage.",
      sources: [
        { tier: "seed-supplier", title: "Walla Walla Sweet - Yellow Onion Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/walla-walla-sweet-onion-seed-496.html" },
      ],
    },
    {
      name: "Yellow Sweet Spanish (long-day)",
      description: "A classic heirloom long-day storage onion with large golden-brown globes and mild sweet flavor; needs 14-16 hours of daylight.",
      daysToMaturity: { min: 115, max: 130 },
      starting: "Standard long-day planting.",
      growing: "Reaches up to 1lb, 4-6in diameter under good conditions.",
      harvesting: "Storage estimates range 2-5 months depending on source — moderate rather than a true hard-keeper.",
      sources: [
        { tier: "seed-supplier", title: "Yellow Sweet Spanish Onion Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/onion-yellow-sweet-spanish" },
      ],
    },
    {
      name: "White Sweet Spanish (long-day)",
      description: "A white-fleshed variant of Yellow Sweet Spanish with even less sharpness; large globe bulbs with bright white skin.",
      starting: "Shallow-rooted — needs diligent weeding to avoid competition, a specific cultural note.",
      growing: "Needs roughly 14-16 hours of daylight in late spring/summer.",
      harvesting: "Moderate storage — weeks to a few months, less than hard storage-type onions.",
      sources: [
        { tier: "seed-supplier", title: "White Sweet Spanish, Onion Seeds", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/white-sweet-spanish-onion-seeds/ONWSS.html" },
      ],
    },
    {
      name: "Copra (long-day, storage)",
      description: "A widely grown hybrid long-day storage onion, considered a benchmark for firmness and keeping quality against which other storage onions (e.g., Patterson) are compared.",
      starting: "Standard long-day planting.",
      growing: "Long-day types like Copra are generally more pungent than short-day sweets.",
      harvesting: "Valued specifically for long storage life and firmness.",
      sources: [
        { tier: "seed-supplier", title: "Copra Hybrid Onion Plants", publisher: "Brown's Omaha Plant Farms", url: "https://www.bopf.com/Copra-Onion.html" },
      ],
    },
    {
      name: "Patterson (long-day, storage)",
      description: "A blocky, bronze-skinned hybrid long-day storage onion, consistently ranked among the very longest-storing onions in trials.",
      daysToMaturity: { min: 104, max: 104 },
      starting: "Must be grown north of 36° latitude.",
      growing: "Needs 14-16 hours of daylight; disease-resistant.",
      harvesting: "Large (1.3lb average), dense yellow flesh under intact bronze skin; storage potential 9-12 months — well above the onion generic norm.",
      sources: [
        { tier: "seed-supplier", title: "Patterson - Yellow Onion Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/patterson-f1-onion-seed-2521.html" },
      ],
    },
    {
      name: "Red Wing (long-day, storage/red)",
      description: "A true long-day red hybrid storage onion needing at least 15 hours of daylight (longer requirement than most long-day types); very firm bulbs with red rings throughout.",
      daysToMaturity: { min: 110, max: 110 },
      starting: "Standard long-day planting.",
      growing: "Resistant to foliar disease and bolting.",
      harvesting: "3-4in globes; storage estimates range widely by source (5-10 months) but consistently described as an excellent long-term keeper.",
      sources: [
        { tier: "seed-supplier", title: "Redwing - (F1) Onion Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/redwing-f1-onion-seed-2137.html" },
      ],
    },
    {
      name: "Ailsa Craig (long-day, heirloom)",
      description: "A giant English exhibition heirloom introduced in 1887; produces mild, sweet Spanish-type bulbs even in shorter/cooler growing seasons than typical long-day types need.",
      daysToMaturity: { min: 110, max: 120 },
      starting: "Ideal for growers north of St. Louis, MO (38.6°N); a true long-day, high-latitude type.",
      growing: "Bulbs can reach 2lbs on average, up to 5lbs from transplants.",
      harvesting: "Explicitly not a storage type — should be eaten soon after harvest, unlike most long-day storage onions.",
      sources: [
        { tier: "seed-supplier", title: "Ailsa Craig Onion Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/onion-ailsa-craig" },
      ],
    },
    {
      name: "New York Early (long-day, storage)",
      description: "An open-pollinated strain selected from \"Early Yellow Globe\" by commercial NY growers; balances sweeter flavor and firmer flesh with good storage.",
      daysToMaturity: { min: 100, max: 100 },
      starting: "Standard long-day planting.",
      growing: "Needs 14-16 hours of daylight; must be grown north of 36° (often north of 40° for best results).",
      harvesting: "Golden-brown skin, crisp white-ringed flesh; can be kept through spring if cured properly for storage.",
      sources: [
        { tier: "seed-supplier", title: "New York Early - Heirloom & Organic Onion Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/onions/full-size-onions/new-york-early-organic-onion-seed-504G.html" },
      ],
    },
    {
      name: "Red Baron (long-day, red)",
      description: "A mid-late maturing long-day red onion with flattish-round bulbs and red-rimmed flesh, stronger flavored than most reds.",
      starting: "Standard long-day planting.",
      growing: "Needs 14-16 hours of daylight; must be grown north of 36° latitude.",
      harvesting: "~3in bulbs, dark maroon skin; good storage potential for a red onion, though exact duration varies by source.",
      sources: [
        { tier: "seed-supplier", title: "Red Baron Storage Onion", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/moose/red-baron-storage-onion-7061" },
      ],
    },
  ],
} satisfies Plant;

export default onion;
