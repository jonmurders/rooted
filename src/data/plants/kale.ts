import type { Plant } from "@/types/plant";

const kale = {
  id: "kale",
  commonName: "Kale",
  scientificName: "Brassica oleracea var. acephala",
  category: "vegetable",
  zones: { min: 2, max: 11 },
  sun: "full-sun",
  soil: "Fertile, well-drained soil, pH 6.0-7.5",
  spacingInches: 16,
  daysToMaturity: { min: 50, max: 70 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Fairly drought tolerant once established, but even moisture improves leaf quality.",
  },
  temperature: {
    frostThresholdF: 15,
    heatStressThresholdF: 75,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 4,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -8,
      latestWeeksFromFrost: -6,
      method: "direct-sow",
    },
  ],
  description:
    "One of the most cold-hardy garden vegetables — flavor actually improves after a light frost.",
  careNotes: [
    "A light frost sweetens the leaves; no need to cover unless a hard freeze is expected.",
    "Bitter and prone to pests in sustained summer heat.",
    "Harvest outer leaves and let the center keep producing.",
    "Properly hardened-off plants can take freezes down to the low teens without much damage.",
  ],
  sources: [
    {
      title: "Louisiana Super Plants: Redbor Kale",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1586187354904",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Seed or transplant mid-July through early November, and again late January through early May. Redbor kale (an LSU Louisiana Super Plant pick) is especially cold-tolerant and sweetens further in cool weather.",
      source: {
        title: "Louisiana Super Plants: Redbor Kale",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1586187354904",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "West of the Cascades, kale can be planted in summer for a fall/winter harvest and left standing in the ground to overwinter, yielding an early spring crop as soon as March.",
      source: {
        title: "Winter vegetable production on small farms and gardens west of the Cascades",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/catalog/pnw-548-winter-vegetable-production-small-farms-gardens-west-cascades",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Unlike everywhere else, kale performs well nearly year-round here (up to ~10 months even in south Florida) — the tradeoff is much higher summer disease and insect pressure requiring active management.",
      source: {
        title: "South Florida Gardening Calendar",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/ep452",
      },
    },
  ],
  varieties: [
    {
      name: "Dwarf Blue Curled Vates",
      description: "Classic 1950 heirloom from the Virginia Truck Experiment Station; dense, finely curled blue-green leaves on compact 12-16in upright plants. The most commonly grown curly kale historically.",
      starting: "No special quirks beyond generic guidance; often grown specifically as a fall crop sown July-early August.",
      growing: "Compact habit resists yellowing in both cold and heat better than taller curly types; stands well in the field.",
      harvesting: "Usable as baby greens at ~30 days or mature leaves at 55-60 days; holds color/quality without bolting into heat.",
      sources: [
        { tier: "seed-supplier", title: "Kale Seeds - Dwarf Vates Blue Scotch Curled", publisher: "True Leaf Market", url: "https://trueleafmarket.com/products/kale-blue-vates-organic-seeds" },
        { tier: "seed-supplier", title: "Dwarf Blue Curled Scotch Organic Curly Kale", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/dwarf-blue-curled-scotch-organic-curly-kale-3450" },
      ],
    },
    {
      name: "Winterbor",
      description: "F1 hybrid standard blue-green curly kale; commercial/home-garden workhorse known for excellent cold hardiness and highly ruffled leaves.",
      starting: "Standard transplant or direct sow; no unique quirks noted.",
      growing: "Very vigorous grower with rich blue-green color; excellent cold hardiness.",
      harvesting: "Mild flavor that improves especially after cold nights; harvest by leaf or whole plant.",
      sources: [
        { tier: "seed-supplier", title: "Winterbor - (F1) Kale Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/winterbor-f1-kale-seed-365.html" },
        { tier: "seed-supplier", title: "Winterbor Curly Kale", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/winterbor-curly-kale-3453" },
      ],
    },
    {
      name: "Darkibor",
      description: "F1 hybrid Dutch curly kale; among the darkest-green kale varieties, with very dark, triple-curled, richly textured leaves that resist yellowing.",
      daysToMaturity: { min: 50, max: 60 },
      starting: "No special quirks beyond generic guidance.",
      growing: "Upright, heat- and bolt-resistant; uniform 18-20in plants hold well in the field through varied weather.",
      harvesting: "Harvest by leaf; darkest color of the curly types, useful where visual/nutrient density matters.",
      sources: [
        { tier: "seed-supplier", title: "Darkibor - Organic (F1) Kale Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/darkibor-organic-f1-kale-seed-3658G.html" },
        { tier: "seed-supplier", title: "Organic Non-GMO Darkibor F1 Kale Seed", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-darkibor-f1-kale.html" },
      ],
    },
    {
      name: "Redbor",
      description: "F1 ornamental/edible curly kale, all-red color, top-rated in Oregon State University trials; frilly ruffled leaves with striking purple stems/veins.",
      starting: "No differing starting instructions; dual-purpose ornamental/edible.",
      growing: "Extremely cold tolerant; color and curliness intensify and flavor sweetens as temperatures drop; can survive hard freezes.",
      harvesting: "Harvest continues through hard freezes; color deepens to dark violet/magenta with cold, improving flavor and ornamental value together.",
      sources: [
        { tier: "seed-supplier", title: "Redbor Curly Kale", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/redbor-curly-kale-3452" },
        { tier: "blog", title: "Redbor Kale", publisher: "Chicago Botanic Garden", url: "https://www.chicagobotanic.org/plant-information/plant-profiles/redbor-kale" },
      ],
    },
    {
      name: "Red Russian",
      description: "Classic heirloom of Siberian lineage; thinner, more tender, flat oak-leaf-shaped leaves with purple veins — notably more tender than curly types.",
      starting: "Its tenderness makes it a common choice specifically for baby-leaf/salad production; otherwise standard sowing.",
      growing: "Extremely cold tolerant (reported to -10°F); resistant to bolting in warm weather — an unusual combination vs. generic guidance.",
      harvesting: "Tender enough for raw eating even at larger leaf sizes; purple color deepens and flavor sweetens with frost.",
      sources: [
        { tier: "blog", title: "How to Grow Sweet and Tender Red Russian Kale", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/vegetables/grow-red-russian-kale/" },
        { tier: "seed-supplier", title: "Red Russian Kale", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/red-russian-kale" },
      ],
    },
    {
      name: "White Russian",
      description: "A white-ribbed selection/cross of Red Russian and Siberian kale — same oak-leaf shape but with long white petioles/veins instead of purple.",
      starting: "No unique quirks vs. Red Russian.",
      growing: "A few inches taller and roughly a third more productive than Red Russian, with larger, more serrated leaves; notably hardier — holds into November without protection.",
      harvesting: "Grows super-sweet in cool weather; can be cut at baby size or left to mature into large, tender leaves.",
      sources: [
        { tier: "seed-supplier", title: "White Russian - Organic Kale Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/white-russian-organic-kale-seed-3425G.html" },
        { tier: "blog", title: "Variety Spotlight: White Russian Kale", publisher: "Happy Acres Blog", url: "https://happyacres.blog/2016/03/30/variety-spotlight-white-russian-kale/" },
      ],
    },
    {
      name: "Improved Dwarf Siberian",
      description: "Old Russian heirloom (in American seed catalogs since the 1880s); broad, thick blue-green leaves with gentle frills, forming a compact upright 24in rosette.",
      starting: "No unique starting quirks beyond generic guidance.",
      growing: "Extremely cold tolerant; flavor becomes sweeter and more complex after a hard frost.",
      harvesting: "Best harvested after frost for peak sweetness; individual leaves picked as the rosette matures.",
      sources: [
        { tier: "seed-supplier", title: "Improved Dwarf Siberian Kale", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/improved-dwarf-siberian-kale" },
      ],
    },
    {
      name: "Lacinato / Dinosaur Kale (Tuscan)",
      description: "18th-century Italian heirloom, also called Dinosaur, Black Tuscan, or Toscano kale; long, narrow, deeply savoyed dark blue-green strap leaves — visually and texturally distinct from curly types.",
      starting: "Frequently grown specifically for baby-leaf harvest (as fast as 21-40 days) as an alternative to full maturity.",
      growing: "Tolerant of both heat and cold; strap-shaped leaves have less curl/pocketing than curly kale (fewer hiding spots for pests/debris).",
      harvesting: "Harvest baby leaves young for salads, or let mature to 60-65 days for cooking; mild flavor improves with light frost.",
      sources: [
        { tier: "seed-supplier", title: "Lacinato Kale Seeds", publisher: "Annie's Heirloom Seeds", url: "https://anniesheirloomseeds.com/lacinato-kale-brassica-oleracea" },
      ],
    },
    {
      name: "Nero di Toscana",
      description: "Same Italian heirloom lineage as Lacinato (\"Black Palm Cabbage\"); very dark, wrinkled strap leaves to 24in resembling a palm tree; traditional in Tuscan soups like ribollita.",
      starting: "Prefers rich, well-drained soil, pH 6.0-7.5; otherwise standard.",
      growing: "Frost-hardy; flavor improves after a light frost; full sun to partial shade.",
      harvesting: "Leaves harvested continually as they lengthen to 24in; traditionally used in slow-cooked soups after frost sweetens flavor.",
      sources: [
        { tier: "seed-supplier", title: "Nero Di Toscana Kale Seeds", publisher: "Baker Creek Heirloom Seeds", url: "https://www.rareseeds.com/kale-nero-di-toscana" },
        { tier: "seed-supplier", title: "Nero di Toscana Dinosaur Kale", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/nero-di-toscana-dinosaur-kale-3467" },
      ],
    },
    {
      name: "Black Magic",
      description: "A well-maintained, highly uniform seed strain of Toscano/Lacinato-type kale bred for long, straight, narrow bunches; dark blue-green, heavily savoyed leaves.",
      starting: "Plant from early spring to about 3 months before expected fall frost; standard otherwise.",
      growing: "Prefers fertile, well-drained soil high in organic matter, pH 6.0-7.5; consistent moisture needed for leaf quality.",
      harvesting: "Harvest by clipping individual leaves beginning ~2 months after planting; eating quality improves into late fall with light frost.",
      sources: [
        { tier: "seed-supplier", title: "Black Magic Lacinato Kale Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/black-magic-kale-seed-3531.html" },
      ],
    },
    {
      name: "Toscano",
      description: "Johnny's strain name for the Italian Lacinato/dinosaur-type heirloom; dark blue-green strap leaves, gently scalloped margin, mild flavor. Same lineage as Lacinato/Black Magic/Nero di Toscana under a different seed-strain name.",
      starting: "Specifically marketed \"for baby leaf only\" by Johnny's; also usable in hydroponic NFT/DWC systems.",
      growing: "Tolerant of both hot and cold weather, more so than curly types.",
      harvesting: "Best suited to baby-leaf cut production rather than full-size mature bunches.",
      sources: [
        { tier: "seed-supplier", title: "Toscano - Heirloom Lacinato Kale Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/toscano-kale-seed-2123.html" },
      ],
    },
    {
      name: "Scarlet",
      description: "Reliable open-pollinated red/purple curly kale; broad, frilly purple leaves on a blue-green background (vs. Redbor's purple-on-bright-green), 2-3ft upright stalks.",
      starting: "No differing starting instructions.",
      growing: "Extremely frost hardy; color and sweetness both improve with frost exposure; height less uniform than hybrid Redbor.",
      harvesting: "Harvest after frost for best color/sweetness; loose rosette habit, picked leaf by leaf.",
      sources: [
        { tier: "blog", title: "Scarlet Kale: Origin, Identifying Characteristics & Cultivation", publisher: "American Gardener", url: "https://americangardener.net/scarlet-kale/" },
        { tier: "seed-supplier", title: "Scarlet - Kale Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/scarlet-kale-seed-3172.html" },
      ],
    },
    {
      name: "Red Ursa",
      description: "Open-pollinated cross of Red Russian x Siberian kale bred by Frank Morton (Wild Garden Seed); combines Siberian's broad frilly leaf with Red Russian's coloring. Top-5 in the 1997 National Gardening Trials.",
      starting: "Open Source Seed Initiative (OSSI) pledged variety; standard sowing.",
      growing: "Resistant to both frost and bolting; plants grow 24-30in tall; stems blush deeper purple with frost.",
      harvesting: "Baby leaves are green with a hazy purple stem, maturing to mahogany-garnet; bolting overwintered stems are sweet and used like broccoli raab.",
      sources: [
        { tier: "seed-supplier", title: "Organic Red Ursa (Kale: Ruso-Siberian) Seeds", publisher: "Wild Garden Seed", url: "https://www.wildgardenseed.com/product_info.php?products_id=75" },
      ],
    },
    {
      name: "Wild Garden Kales (blend)",
      description: "Open-pollinated genetic mix (\"grex\") bred by Frank Morton (Wild Garden Seed) — not a single fixed variety, but the gene pool behind Red Ursa, White Russian, and Winter Red. Produces mixed colors/textures from flat to frilly, white to pink to red.",
      starting: "Because it's genetically diverse, gardeners can select and save seed from favorite individual plants to develop their own strain over time.",
      growing: "Broad genetic diversity means a spread of cold-hardiness/bolt behavior within the same planting.",
      harvesting: "Harvest is a mixed-color, mixed-texture bunch rather than uniform leaves — valued for visual variety at market.",
      sources: [
        { tier: "blog", title: "Saturday Spotlight: Wild Garden Kale Mix", publisher: "Happy Acres Blog", url: "https://happyacres.blog/2015/11/07/saturday-spotlight-wild-garden-kale-mix/" },
        { tier: "seed-supplier", title: "Wild Garden Seed: Kale: European Seeds", publisher: "Wild Garden Seed", url: "https://www.wildgardenseed.com/index.php?cPath=40" },
      ],
    },
    {
      name: "Prizm",
      description: "All-America Selections-winning F1 hybrid; extremely compact plant (~15in h x 10-12in w) with short, tightly ruffled, deep-green, nearly stemless leaves.",
      starting: "Well suited to containers and small gardens; can be planted at closer spacing than most kale.",
      growing: "Superfast to regrow new leaves after cutting, supporting continuous harvest all season.",
      harvesting: "Individual leaves are ready at just 3.5-4in — much smaller harvest size than typical mature kale leaves; nutty flavor, tender raw but robust enough for cooking.",
      sources: [
        { tier: "seed-supplier", title: "Prizm Hybrid Kale Seeds & Plants", publisher: "Burpee", url: "https://www.burpee.com/vegetables/kale/kale-prizm-hybrid-prod099981.html" },
        { tier: "blog", title: "Kale Prizm F1", publisher: "All-America Selections", url: "https://all-americaselections.org/product/kale-prizm/" },
      ],
    },
    {
      name: "Beedy's Camden",
      description: "Maine heirloom curly kale, selected by Beedy Parker in the 1980s from a plant overwintering in her Camden, ME garden; grows 2-3ft tall with dark green, deeply crinkled leaves and purple-tinged veins, less tightly ruffled than Winterbor.",
      starting: "Known to self-sow readily if allowed to overwinter and bolt.",
      growing: "More tender and less tough than Siberian types; overwinters exceptionally well.",
      harvesting: "Mild in summer, becomes sweet after a few fall frosts; lasts later into fall than many curly types.",
      sources: [
        { tier: "seed-supplier", title: "Beedy's Camden Kale Organic Curly Kale", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/beedys-camden-kale-organic-curly-kale-3451" },
        { tier: "blog", title: "Beedy's Camden: Last Kale Standing", publisher: "Happy Acres Blog", url: "https://happyacres.blog/2012/03/26/beedys-camden-last-kale-standing/" },
      ],
    },
    {
      name: "Portuguese Kale (Tronchuda Beira)",
      description: "Portuguese heirloom, botanically closer to a loose-headed cabbage; thick, flat, sage/aqua-green paddle-shaped leaves with bold white ribs — a texture closer to collards/chard than curly kale.",
      starting: "Forms a loose 12-24in head rather than an open leaf rosette; otherwise standard sowing.",
      growing: "Notably more heat tolerant than other kale types while remaining reasonably cold tolerant — an exception to generic heat-threshold guidance.",
      harvesting: "Continuously produces new center leaves as outer leaves are harvested; tender, mild, almost spinach-like when cooked.",
      sources: [
        { tier: "seed-supplier", title: "'Tronchuda Beira' Portuguese Kale", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/kale-portuguese-tronchuda-beira" },
      ],
    },
    {
      name: "Premier (Early Hanover)",
      description: "Upright, high-yielding kale with smooth medium-green leaves, marketed as especially compact/small-space and container friendly.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Well suited to small-space and container growing; otherwise standard.",
      growing: "Exceptional bolt tolerance — resists bolting 3-4 weeks longer than other kale varieties; overwinters well.",
      harvesting: "Baby leaves good for salads/sandwiches; mature leaves for cooking, juicing, smoothies.",
      sources: [
        { tier: "seed-supplier", title: "Premier, Kale Seed", publisher: "Urban Farmer", url: "https://www.ufseeds.com/product/premier-kale-seed/KAPR.html" },
        { tier: "seed-supplier", title: "Premier Kale", publisher: "Victory Seed Company", url: "https://victoryseeds.com/products/premier-kale" },
      ],
    },
    {
      name: "Chidori Red",
      description: "Compact ornamental flowering-kale type forming tight rosettes with a frilled, ruby-red/magenta center surrounded by deep green-burgundy outer leaves; grown primarily for looks.",
      starting: "Typically grown as an ornamental bedding/container plant rather than direct-seeded for a food crop.",
      growing: "Red center becomes more vivid as temperatures cool; compact ~14inx14in symmetrical form suited to containers/borders.",
      harvesting: "Primarily ornamental — not typically grown for eating harvest, though technically edible like other kales.",
      sources: [
        { tier: "blog", title: "Chidori Kale Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Chidori_Kale_11471.php" },
        { tier: "university-extension", title: "Ornamental Cabbage and Kale, Brassica oleracea", publisher: "Wisconsin Horticulture (UW-Madison Extension)", url: "https://hort.extension.wisc.edu/articles/ornamental-cabbage-and-kale-brassica-oleracea/" },
      ],
    },
    {
      name: "Starbor",
      description: "F1 hybrid dwarf/compact curly kale with finely curled, dark blue-green leaves; very uniform and resists yellowing.",
      starting: "Suited to closer/denser spacing than most kale due to short internodes and compact habit.",
      growing: "Short internodes allow high yields despite compact plant size; good flavor retention.",
      harvesting: "Bred for a single whole-plant cut harvest at 12-18in rather than repeated individual-leaf picking.",
      sources: [
        { tier: "seed-supplier", title: "Starbor - (F1) Kale Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/kale/starbor-f1-kale-seed-305.html" },
      ],
    },
  ],
} satisfies Plant;

export default kale;
