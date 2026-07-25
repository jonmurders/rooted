import type { Plant } from "@/types/plant";

const lettuce = {
  id: "lettuce",
  commonName: "Lettuce",
  scientificName: "Lactuca sativa",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "partial-sun",
  soil: "Moist, fertile, well-drained soil",
  spacingInches: 8,
  daysToMaturity: { min: 30, max: 85 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots dry out fast — keep soil consistently moist.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -10,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "A cool-season leafy green that tolerates light frost well but bolts and turns bitter in heat.",
  careNotes: [
    "Bolts and turns bitter above ~75-80°F — plant for spring/fall, not midsummer.",
    "Light shade in warm weather extends the harvest window.",
    "Harvest outer leaves for a cut-and-come-again crop.",
    "Grows best around 73°F days / 45°F nights; loose-leaf and Bibb types tolerate heat far better than crisphead (iceberg).",
  ],
  sources: [
    {
      title: "Lettuce",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/lettuce",
    },
    {
      title: "Cultural Tips for Growing Lettuce",
      publisher: "UC Statewide IPM Program (UC ANR)",
      url: "https://ipm.ucanr.edu/home-and-landscape/cultural-tips-for-growing-lettuce/",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant mid-August through mid-October, and again in January. Crisphead (iceberg) isn't recommended — it can't tolerate heat and takes 60-85 days. Loose-leaf/Bibb types (Esmeralda, Summer Bibb, Harmony, Red Salad Bowl) do much better.",
      source: {
        title: "Lettuce",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/lettuce",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Grown strictly as a winter crop outdoors below 5,000ft elevation, planted September-October — Arizona is the #2 lettuce-producing state in the US, entirely on that winter schedule.",
      source: {
        title: "Guidelines for Head Lettuce Production in Arizona",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://cales.arizona.edu/crop/vegetables/cropmgt/az1099.html",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "June-August is too hot for lettuce in most of Minnesota — long days plus heat trigger bolting and bitterness, so growers lean on heat-tolerant/bolt-resistant varieties and stick to a spring or cooled-fall planting window.",
      source: {
        title: "Growing lettuce, endive and radicchio in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-lettuce-endive-and-radicchio",
      },
    },
  ],
  varieties: [
    {
      name: "Great Lakes",
      description: "A 1960s-improved crisphead/iceberg lettuce with compact, round heads, pale-green outer leaves and a crisp blanched interior.",
      daysToMaturity: { min: 68, max: 90 },
      starting: "Direct-sow or transplant per generic lettuce guidance; no unusual quirks.",
      growing: "Heat-tolerant and resistant to bolting, tipburn, and leaf scald relative to older crisphead lines — a good pick for warmer regions where other icebergs struggle.",
      harvesting: "Single-head harvest (not cut-and-come-again) — harvest the whole compact head once it feels firm.",
      sources: [
        { tier: "seed-supplier", title: "Great Lakes 118 Lettuce", publisher: "Holmes Seed Company", url: "https://www.holmesseed.com/great-lakes-118/" },
      ],
    },
    {
      name: "Iceberg",
      description: "The original crisphead type developed by Burpee in 1894 from French Batavia crisphead lettuce; large, spherical, cabbage-like heads with crunchy, mild-sweet blanched interior leaves.",
      daysToMaturity: { min: 70, max: 82 },
      starting: "Standard lettuce starting guidance; no notable quirks versus generic species info.",
      growing: "Needs more consistent, longer cool growing conditions than looseleaf or butterhead types to form a solid head; more prone to tipburn/bolting in heat than modern crisphead hybrids.",
      harvesting: "Single-head harvest once the head feels firm/dense when squeezed — not a cut-and-come-again type.",
      sources: [
        { tier: "university-extension", title: "Lettuce (Crisphead, Iceberg)", publisher: "UC Davis Postharvest Research & Extension Center", url: "https://postharvest.ucdavis.edu/produce-facts-sheets/lettuce-crisphead" },
      ],
    },
    {
      name: "Buttercrunch",
      description: "An improved Bibb-type butterhead lettuce, 1963 AAS Gold Medal winner; thick, blistered, rich dark-green leaves with creamy-yellow hearts forming compact heads.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Standard lettuce starting guidance; no special seed-depth or cold quirks.",
      growing: "Notably better bolt-resistance and heat-tolerance than most butterhead/Bibb types — a good choice for extending the harvest window into warmer weather.",
      harvesting: "Can be harvested as a loose \"cut\" head earlier, or allowed to form the full compact buttery head; sweet flavor even under some heat stress.",
      sources: [
        { tier: "blog", title: "How to Plant and Grow Buttercrunch Lettuce", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/grow-buttercrunch-lettuce/" },
        { tier: "seed-supplier", title: "Buttercrunch Bibb Lettuce", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/buttercrunch-bibb-lettuce" },
      ],
    },
    {
      name: "Tom Thumb",
      description: "A miniature butterhead/Bibb lettuce (introduced in England in 1858) forming tiny, personal-size heads only 3-5in across; buttery, creamy-yellow center, mild sweet flavor.",
      daysToMaturity: { min: 45, max: 55 },
      starting: "Standard lettuce starting; its small final size suits tight spacing or container sowing.",
      growing: "Compact habit makes it ideal for containers and small-space/intensive gardens; fall plantings in warm soil mature faster than cool spring plantings.",
      harvesting: "Harvest whole small heads at 3-5in diameter rather than waiting for a full-size head.",
      sources: [
        { tier: "blog", title: "Tom Thumb Lettuce", publisher: "Minneopa Orchards", url: "https://minnetonkaorchards.com/tom-thumb-lettuce/" },
        { tier: "seed-supplier", title: "Tom Thumb Lettuce Seed", publisher: "Territorial Seed", url: "https://territorialseed.com/products/lettuce-tom-thumb" },
      ],
    },
    {
      name: "Bibb",
      description: "The original American Bibb/Limestone lettuce, developed by John B. Bibb in Frankfort, Kentucky in the 1860s; loose-leafed butterhead with soft, smooth rich-green leaves and a yellowish, self-blanching heart.",
      daysToMaturity: { min: 54, max: 75 },
      starting: "Standard lettuce starting guidance; germinates in about 10 days.",
      growing: "Traditionally associated with alkaline/limestone soils, said to enhance its sweetness; less bolt-resistant in heat than the improved Buttercrunch and Summer Bibb selections descended from it.",
      harvesting: "Harvest as a loose head once the center leaves cup inward; less heat-forgiving than its descendants, so harvest promptly once mature in warm weather.",
      sources: [
        { tier: "blog", title: "Kentucky Limestone Bibb Lettuce", publisher: "Slow Food Foundation (Ark of Taste)", url: "https://www.fondazioneslowfood.com/en/ark-of-taste-slow-food/kentucky-limestone-bibb-lettuce/" },
        { tier: "seed-supplier", title: "Bibb Lettuce Seeds", publisher: "St. Clare Heirloom Seeds", url: "https://www.stclareseeds.com/product/head-lettuce-bibb/" },
      ],
    },
    {
      name: "Parris Island Cos",
      description: "A romaine (cos) type developed by USDA/Clemson University in the 1950s; upright 10-12in heads with medium-green, slightly crinkled leaves and a buttery-green heart.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Standard lettuce starting guidance.",
      growing: "Resistant to tipburn and tolerant of mosaic virus; noted as unusually uniform and bolt-resistant, a plus for summer plantings.",
      harvesting: "Can be harvested young as loose baby greens or grown to a full romaine head; sweet, crunchy leaves throughout.",
      sources: [
        { tier: "seed-supplier", title: "Parris Island Cos Romaine Lettuce Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/parris-island-cos-romaine-lettuce-seeds" },
      ],
    },
    {
      name: "Little Gem",
      description: "A miniature romaine heirloom (also called 'Sucrine'/'Sugar Cos') forming small, tight, glossy 6-8in heads with a creamy-yellow heart; noted for exceptional sweetness compared to full-size romaine.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "Standard lettuce starting; its small final size suits tight spacing/containers.",
      growing: "More heat-tolerant than standard romaine, which extends its usable season; petite size is ideal for small gardens or raised beds.",
      harvesting: "Harvest whole small heads — good for single-serving salads or lettuce wraps; central rosette regrows leaves rapidly.",
      sources: [
        { tier: "blog", title: "Little Gem Lettuce: How to Grow, Water & Harvest", publisher: "PlotMyGarden", url: "https://plotmygarden.com/en/plants/lettuce-little-gem" },
        { tier: "seed-supplier", title: "Little Gem Baby Romaine Lettuce", publisher: "John Scheepers Kitchen Garden Seeds", url: "https://www.kitchengardenseeds.com/lettuce-little-gem.html" },
      ],
    },
    {
      name: "Coastal Star",
      description: "An open-pollinated full-size romaine with dark-green leaves and tall, sturdy, upright 10-12in heads; bred for disease resistance.",
      daysToMaturity: { min: 50, max: 65 },
      starting: "Standard lettuce starting guidance; suitable for direct-sow rows or container/raised-bed transplants.",
      growing: "Relatively heat-tolerant, performs well in late spring or early fall; notably resistant to corky root disease.",
      harvesting: "Can be cut young as leaf lettuce, or grown to a full head and cut once for head production.",
      sources: [
        { tier: "seed-supplier", title: "Coastal Star - Organic Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/romaine-lettuce-cos/coastal-star-organic-lettuce-seed-2963G.html" },
      ],
    },
    {
      name: "Black Seeded Simpson",
      description: "A classic heirloom looseleaf lettuce (England, c.1850) with crumpled, ruffled, blistered light-green leaves; one of the earliest and most popular looseleaf types.",
      daysToMaturity: { min: 45, max: 55 },
      starting: "Sow as early as the ground can be worked — it does not tolerate heat well, so early planting timing matters more than for many other varieties.",
      growing: "Poor heat tolerance relative to newer looseleaf hybrids — bolts/turns bitter faster in warm weather, so it's best as an early-season or fall crop rather than a summer lettuce.",
      harvesting: "Cut-and-come-again looseleaf harvest — pick outer leaves as needed rather than waiting for a head.",
      sources: [
        { tier: "seed-supplier", title: "Black Seeded Simpson - Heirloom Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/leaf-lettuce/black-seeded-simpson-lettuce-seed-425N.html" },
        { tier: "blog", title: "Black Seeded Simpson lettuce", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/black-seeded-simpson-lettuce/" },
      ],
    },
    {
      name: "Red Sails",
      description: "A 1985 AAS-winning red looseleaf lettuce, the variety that popularized red-leaf lettuce; large ruffled rosettes, deep red at the tips shading to bronze-maroon and green at the base.",
      daysToMaturity: { min: 45, max: 57 },
      starting: "Standard lettuce starting guidance.",
      growing: "Notably slow to bitter/bolt even in heat compared to typical looseleaf lettuce — a solid warm-weather looseleaf choice.",
      harvesting: "Cut-and-come-again; can be harvested at ~10in as a \"one-cut\" head or grown to full 12-16in size.",
      sources: [
        { tier: "seed-supplier", title: "Red Sails - Organic Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/leaf-lettuce/red-sails-organic-lettuce-seed-431G.html" },
      ],
    },
    {
      name: "Salad Bowl",
      description: "An heirloom oakleaf-type looseleaf lettuce with deeply cut, frilly leaves and excellent sweet flavor and texture; sold in both green and red ('Red Salad Bowl') forms.",
      daysToMaturity: { min: 45, max: 50 },
      starting: "Standard lettuce starting guidance; well suited to succession sowing given its quick cut-and-come-again cycle.",
      growing: "Notably slow to bolt in warm temperatures and stays sweet in heat — a strong pick for extending the looseleaf harvest into summer versus Black Seeded Simpson.",
      harvesting: "True cut-and-come-again — most plants will regrow for a second or third cutting if weather stays cool after the first harvest.",
      sources: [
        { tier: "blog", title: "Salad Bowl lettuce", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/salad-bowl-lettuce/" },
        { tier: "seed-supplier", title: "Green Saladbowl - Organic Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/oakleaf-lettuce/green-saladbowl-organic-lettuce-seed-2235N.html" },
      ],
    },
    {
      name: "Oakleaf",
      description: "An heirloom looseleaf lettuce dating to the early 1700s, with long, frilly, lobed leaves resembling oak foliage, growing from a single central stalk; available in green and red forms; mildly sweet flavor.",
      daysToMaturity: { min: 50, max: 65 },
      starting: "Standard lettuce starting guidance.",
      growing: "One of the most heat- and drought-tolerant looseleaf types available, slower to bolt than most other lettuce — a strong choice for hot climates or late-summer sowing.",
      harvesting: "Single central stalk makes it simple to harvest whole or leaf-by-leaf; cut-and-come-again works well.",
      sources: [
        { tier: "blog", title: "Heat? Drought? Delicious Oak Leaf Lettuce Thrives Anyway!", publisher: "The Grow Network", url: "https://thegrownetwork.com/oak-leaf-lettuce-heat-drought/" },
      ],
    },
    {
      name: "Nevada",
      description: "An open-pollinated Batavian/summer-crisp type — thick, ruffled, lime-green leaves combining crunch with tender texture and nutty flavor; tall, open, very uniform heads.",
      daysToMaturity: { min: 48, max: 65 },
      starting: "Standard lettuce starting guidance.",
      growing: "Bolt-tolerant and resistant to downy mildew, lettuce mosaic virus, and tipburn — well suited to both cool spring and warm summer conditions, unlike more heat-sensitive lettuce types.",
      harvesting: "Outer leaves can be harvested individually, or the plant allowed to grow into a full open head; stores well if refrigerated promptly after harvest.",
      sources: [
        { tier: "seed-supplier", title: "Nevada Summer Crisp / Batavian Lettuce Seeds", publisher: "Swallowtail Garden Seeds", url: "https://www.swallowtailgardenseeds.com/vegetables/lettuce/nevada-summer-crisp-batavian-lettuce-seeds.html" },
      ],
    },
    {
      name: "Muir",
      description: "A Batavia/summer-crisp type forming dense heads of light-green, extra-wavy, crisp leaves that can be picked at mini size or grown to full head.",
      daysToMaturity: { min: 45, max: 50 },
      starting: "Standard lettuce starting guidance; suitable for hydroponic systems per seed-supplier notes.",
      growing: "One of the most heat-tolerant lettuces available and the slowest to bolt in summer trials; also resists tipburn, downy mildew, Nasonovia aphid, and tomato bushy stunt virus, with intermediate lettuce mosaic virus resistance.",
      harvesting: "Can be harvested as baby/miniature heads early, or left to mature to full Batavia size; excellent flavor retained even in heat.",
      sources: [
        { tier: "seed-supplier", title: "Muir - Organic Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/summer-crisp-lettuce-batavia/muir-organic-lettuce-seed-3881G.html" },
      ],
    },
    {
      name: "Cherokee",
      description: "A red Batavia/summer-crisp type with dark red-mahogany, thick, crunchy, savoyed leaves forming dense, heavy heads with a sweet, nutty flavor.",
      daysToMaturity: { min: 40, max: 45 },
      starting: "Standard lettuce starting guidance; looks like looseleaf lettuce when young before heading up at maturity.",
      growing: "Very heat-tolerant and disease-resistant; notably slow to bolt, and resistant to bottom rot and downy mildew.",
      harvesting: "Young plants can be cut as loose leaves; mature plants form dense upright heads for single-head harvest.",
      sources: [
        { tier: "seed-supplier", title: "Cherokee - Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/summer-crisp-lettuce-batavia/cherokee-lettuce-seed-2741.html" },
      ],
    },
    {
      name: "Esmeralda",
      description: "A buttercrunch-type butterhead bred for disease resistance and bolt tolerance, with firm, crisp-yet-sweet heads and rich green color; listed by LSU AgCenter among recommended butterhead cultivars for the Gulf South.",
      daysToMaturity: { min: 50, max: 70 },
      starting: "Standard lettuce starting guidance.",
      growing: "Bred specifically for slow bolting, making it one of the better butterhead choices for the Gulf South's heat and humidity.",
      harvesting: "Harvest as a full compact buttercrunch head; slow bolting extends the usable harvest window versus standard butterhead types.",
      sources: [
        { tier: "seed-supplier", title: "Butterhead Lettuce Esmeralda (53 Days)", publisher: "T&T Seeds", url: "https://ttseeds.com/product/butterhead-lettuce-esmeralda-53-days/" },
      ],
    },
    {
      name: "Summer Bibb",
      description: "A heat-adapted butterhead/Bibb selection bred specifically to outperform traditional Bibb lettuce in warm weather; small, loose heads of smooth light-green leaves with creamy, buttery-flavored centers.",
      daysToMaturity: { min: 60, max: 65 },
      starting: "Standard lettuce starting guidance.",
      growing: "Resists bolting and holds quality 2-3 weeks longer than traditional butterhead varieties in warm conditions; plants stay compact (8-10in wide).",
      harvesting: "Harvest whole heads once centers blanch and form a loose, buttery core; can be picked slightly early as a looser head if heat is accelerating bolting.",
      sources: [
        { tier: "seed-supplier", title: "Lettuce – Summer Bibb, Butterhead", publisher: "Hume Seeds", url: "https://humeseeds.com/product/lettuce-summer-bibb-butterhead/" },
      ],
    },
    {
      name: "Harmony",
      description: "An open-pollinated butterhead (Bibb/Boston type) with rich, deep-green glossy leaves and large, flavorful, uniform heads; recommended by LSU AgCenter for Louisiana/Gulf South gardens.",
      daysToMaturity: { min: 65, max: 70 },
      starting: "Standard lettuce starting guidance.",
      growing: "Can still be susceptible to bolting, tipburn, and downy mildew despite being a recommended regional variety — pair with proper timing/spacing rather than assuming it's fully heat-proof.",
      harvesting: "Harvest as a full loose butterhead once the heart cups in; because maturity is slower than other Gulf South butterhead picks, plant it earlier in the cool season to avoid heat stress at harvest time.",
      sources: [
        { tier: "university-extension", title: "Let Us Eat Lettuce", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/profiles/lbenedict/articles/page1468946960347" },
      ],
    },
    {
      name: "Red Salad Bowl",
      description: "The red-leaved sibling of Salad Bowl — a slow-to-bolt, heat-tolerant heirloom oakleaf variety with deep wine-red, frilly leaves that doesn't turn bitter as it matures.",
      daysToMaturity: { min: 28, max: 60 },
      starting: "Standard lettuce starting guidance; well suited to succession sowing for continuous baby-leaf harvest.",
      growing: "Performs well in warmer climates; red pigmentation deepens further in cooler temperatures, so color intensity will vary by season.",
      harvesting: "Primarily grown as a cut-and-come-again baby-leaf variety, though full-size mature leaves are equally usable.",
      sources: [
        { tier: "blog", title: "Red Salad Bowl Leaf Lettuce", publisher: "Mint2Grow", url: "https://mint2grow.com/products/red-salad-bowl-leaf-lettuce" },
        { tier: "seed-supplier", title: "Red Saladbowl - Organic Lettuce Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/oakleaf-lettuce/red-saladbowl-organic-lettuce-seed-2233N.html" },
      ],
    },
    {
      name: "Rouge d'Hiver",
      description: "A French heirloom romaine dating to the 1840s; bronze-red outer leaves surrounding a deep-green, tender heart; name translates to \"Red Winter.\"",
      daysToMaturity: { min: 55, max: 70 },
      starting: "Standard lettuce starting guidance, but well suited to fall sowing given its cold tolerance.",
      growing: "Notably cold-hardy and tipburn-resistant — one of the better romaine choices for fall/winter planting; red coloring intensifies in cold weather.",
      harvesting: "Full-head romaine harvest; rich, buttery flavor is often noted as better than typical modern romaine hybrids.",
      sources: [
        { tier: "seed-supplier", title: "Rouge d'Hiver - Heirloom & Organic Romaine Lettuce Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/lettuce/romaine-lettuce-cos/rouge-dhiver-organic-lettuce-seed-2236N.html" },
      ],
    },
  ],
} satisfies Plant;

export default lettuce;
