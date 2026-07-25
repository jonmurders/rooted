import type { Plant } from "@/types/plant";

const carrot = {
  id: "carrot",
  commonName: "Carrot",
  scientificName: "Daucus carota subsp. sativus",
  category: "vegetable",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Loose, sandy, stone-free soil for straight roots",
  spacingInches: 3,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 4,
    drySpellThresholdIn: 1,
    notes: "Consistent moisture prevents splitting; inconsistent watering causes misshapen roots.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -3,
      latestWeeksFromFrost: 3,
      method: "direct-sow",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -12,
      latestWeeksFromFrost: -10,
      method: "direct-sow",
    },
  ],
  description:
    "A cold-hardy root crop that must be direct-sown — carrots do not transplant well.",
  careNotes: [
    "Thin seedlings early to avoid crowded, forked roots.",
    "Cold soil below 45°F slows germination dramatically.",
    "A light frost improves sweetness; roots can overwinter under mulch in mild zones.",
    "Water stress shows up as two distinct problems: uneven watering splits roots, while insufficient water makes them bitter, tough, and misshapen.",
  ],
  sources: [
    {
      title: "Carrots",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/carrots",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant mid-August through early March in three overlapping waves (Aug-Oct, Jan-Feb, and by early March) for a nearly continuous winter-harvest crop — carrots are cold-hardy enough here to be a genuine winter vegetable. Varieties: Danvers 126, Chantenay Red Core, Scarlet Nantes.",
      source: {
        title: "Carrots",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/carrots",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Planting is confined to September-December with harvest January-April — a fall/winter-only crop with no viable summer window. Water stress specifically causes root splitting here.",
      source: {
        title: "Water Use in Vegetables: Carrots",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/extension.arizona.edu/files/pubs/az1134-2014.pdf",
      },
    },
    {
      region: "Mediterranean / California",
      note: "Carrots can be grown nearly year-round. Drip or furrow irrigation is recommended over overhead watering, both for straighter roots and to limit insect damage and sunburned shoulders.",
      source: {
        title: "Cultural Tips for Growing Carrot",
        publisher: "UC Statewide IPM Program (UC ANR)",
        url: "https://ipm.ucanr.edu/home-and-landscape/carrot/cultural-tips/",
      },
    },
  ],
  varieties: [
    {
      name: "Scarlet Nantes",
      description: "Classic French heirloom bred by Vilmorin-Andrieux in the 1850s that defined the Nantes type; smooth cylindrical roots ~7in with rounded/blunt ends, fine-textured, nearly coreless red-orange flesh.",
      daysToMaturity: { min: 65, max: 75 },
      starting: "Direct sow; the moderate 7in root is more tolerant of average garden soil than the long Imperator types.",
      growing: "Sweet, crisp, clean flavor — the reference standard other Nantes hybrids are bred/compared against.",
      harvesting: "Excellent harvested young as a baby carrot; also performs well for storage, freezing, and juicing.",
      sources: [
        { tier: "seed-supplier", title: "Scarlet Nantes Organic Main Season Carrot", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/seeds/scarlet-nantes-organic-main-season-carrot-2043" },
      ],
    },
    {
      name: "Nelson",
      description: "F1 hybrid early Nantes type; smooth, very uniform 6in orange cylindrical roots — the industry \"type standard\" other early Nantes hybrids are compared against.",
      daysToMaturity: { min: 58, max: 58 },
      starting: "Standard direct sow; shorter root than Imperator types is more forgiving of average soil.",
      growing: "Bred for uniformity/smoothness over long storage life.",
      harvesting: "Can be pulled at baby stage or full size; excellent fresh flavor, but only short storage life — not a keeper carrot.",
      sources: [
        { tier: "seed-supplier", title: "Nelson - Organic (F1) Carrot Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/early-carrots/nelson-f1-carrot-seed-215.html" },
      ],
    },
    {
      name: "Bolero",
      description: "F1 hybrid \"heavy Nantes\" type bred specifically for storage; medium-long 7-8in roots, uniform, thick, slightly tapered with a blunt tip.",
      daysToMaturity: { min: 75, max: 75 },
      starting: "Standard direct sow.",
      growing: "Vigorous, healthy tops give strong field-holding ability, easier harvest, and disease resistance.",
      harvesting: "A top storage carrot — excellent eating quality both fresh and after long-term winter storage.",
      sources: [
        { tier: "seed-supplier", title: "Bolero - Nantes Carrot Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/storage-carrots/bolero-f1-carrot-seed-216.html" },
      ],
    },
    {
      name: "Napoli",
      description: "F1 hybrid early Nantes type bred for bunching; bright orange, cylindrical, smooth, slightly tapered roots with a blunt tip and medium core.",
      daysToMaturity: { min: 55, max: 55 },
      starting: "A favorite for late-summer sowing as a fall/overwintering crop in addition to standard spring sowing; direct sow.",
      growing: "Grows rapidly as an early spring bunching crop, but also thrives sown later for a fall/winter storage crop.",
      harvesting: "Crisp, snappy, sweet, juicy fresh; becomes even sweeter when grown as an overwintered fall/winter crop.",
      sources: [
        { tier: "seed-supplier", title: "Napoli - Organic (F1) Carrot Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/early-carrots/napoli-organic-f1-carrot-seed-209G.html" },
      ],
    },
    {
      name: "Danvers 126",
      description: "1947 improved strain of the older 1871-era Danvers heirloom (Danvers, MA); broad-shouldered 6-8in roots tapering to a blunt tip, dark orange flesh.",
      starting: "Direct sow; notably more forgiving of heavy or clay soil than slender Nantes/Imperator types because of its stocky, broad-shouldered shape — no need for the deep loosened bed long types require.",
      growing: "The go-to choice for gardeners with heavy/clay soil where slender types fork or fail to size up.",
      harvesting: "Stores beautifully for months; holds up well to canning, freezing, juicing; sweetens further after a light frost.",
      sources: [
        { tier: "seed-supplier", title: "Danvers 126 Carrot Seeds – Heavy Soil Performer", publisher: "St. Clare Seeds", url: "https://www.stclareseeds.com/product/danvers-126-carrot-seeds/" },
      ],
    },
    {
      name: "Danvers Half Long",
      description: "The earlier, original strain of the Danvers-type carrot, predating the 1947 \"126\" improvement; similar broad-shouldered, tapered shape but less uniform/refined.",
      starting: "Same heavy-soil tolerance as Danvers 126; direct sow.",
      growing: "Danvers 126 was specifically bred as an improvement on this strain for sweeter flavor, better crack resistance, and heavier yields — so seed sold simply as \"Danvers Half Long\" should be expected to be somewhat less uniform.",
      harvesting: "Same general storage/heavy-soil use case as Danvers 126; specifically named by LSU AgCenter as a recommended fall carrot variety for Louisiana/ArkLaMiss.",
      sources: [
        { tier: "seed-supplier", title: "Danvers 126 Half Long Carrot Seeds", publisher: "Park Seed", url: "https://www.parkseed.com/products/danvers-126-half-long-carrot-seeds-52925-pk-p1" },
        { tier: "university-extension", title: "Carrots in the Fall", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/profiles/cprice/articles/page1632920785900" },
      ],
    },
    {
      name: "Imperator 58",
      description: "The classic supermarket-style long carrot; smooth, large, fine-grained, tapered roots to 9-10in long.",
      daysToMaturity: { min: 65, max: 80 },
      starting: "Requires deep, loose, sandy, stone-free soil worked at least 8-10in deep — roots fork or stunt in shallow/rocky ground far more readily than shorter Danvers/Chantenay/Nantes types.",
      growing: "Best performance in deep sandy loam; poorly suited to heavy clay or shallow raised beds.",
      harvesting: "Long, slender, deep orange, crisp and sweet; a market/production standard more than a convenience home-garden type.",
      sources: [
        { tier: "seed-supplier", title: "Imperator 58 Carrot Seeds – Deep Soil Performer", publisher: "St. Clare Seeds", url: "https://www.stclareseeds.com/product/imperator-58-carrot-seeds/" },
      ],
    },
    {
      name: "Sugarsnax 54",
      description: "F1 hybrid Nantes x Imperator cross bred in Germany; very straight, uniform, smooth 9-10in roots with deep orange interior and shoulders.",
      starting: "Like other long Imperator-cross roots, needs deep, loose, stone-free soil to grow straight.",
      growing: "Disease resistant to Alternaria, Cercospora, and Pythium; strong medium-tall tops.",
      harvesting: "Exceptionally sweet, mild flavor that holds after processing/cooking; high in beta-carotene.",
      sources: [
        { tier: "seed-supplier", title: "Sugarsnax - Imperator Carrot Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/main-crop-carrots/sugarsnax-54-f1-carrot-seed-2322.html" },
      ],
    },
    {
      name: "Red Cored Chantenay",
      description: "Bred in the Chantenay region of France; thick, conical roots with a blunt tip, 5-6in long and ~2in wide at the shoulder, golden-orange skin over a reddish-orange core.",
      starting: "Direct sow; shorter, stouter root tolerates heavier, shallower, or rockier soil than long types — skip the deep-bed prep Imperator types need.",
      growing: "Strong resistance to splitting/forking even in marginal/clay soils; reliable high yields where longer carrots struggle.",
      harvesting: "Robust, sweet, earthy flavor that holds up well cooked (soups, stews, roasting).",
      sources: [
        { tier: "seed-supplier", title: "Organic Non-GMO Red Core Chantenay Carrot", publisher: "High Mowing Seeds", url: "https://www.highmowingseeds.com/organic-non-gmo-red-core-chantenay-carrot.html" },
        { tier: "seed-supplier", title: "Red Cored Chantenay Carrot Seeds", publisher: "Botanical Interests", url: "https://www.botanicalinterests.com/products/red-cored-chantenay-carrot-seeds" },
      ],
    },
    {
      name: "Royal Chantenay",
      description: "Introduced 1952; stout thick carrot, 5-6in long and 2-3.5in wide at the shoulder, with an orange-red core and tapered tip.",
      daysToMaturity: { min: 60, max: 75 },
      starting: "Same heavy/shallow-soil tolerance as other Chantenay types; direct sow, less soil-depth-fussy than Imperator/long types.",
      growing: "Adaptable and dependable across a wide range of soils, from heavy clay to shallow ground.",
      harvesting: "Fine-grained, very sweet flesh; widely used for freezing, canning, juicing, and long-term storage.",
      sources: [
        { tier: "seed-supplier", title: "Royal Chantenay Carrot", publisher: "Territorial Seed", url: "https://territorialseed.com/products/royal-chantenay" },
      ],
    },
    {
      name: "Parisian (Paris Market)",
      description: "19th-century French heirloom; small, round roots (1-2in diameter) shaped like a young turnip, dark orange, nearly coreless.",
      daysToMaturity: { min: 55, max: 70 },
      starting: "Ideal for containers, shallow raised beds, and heavy/rocky soil since roots need only 1-2in of depth — the opposite of the deep, loose bed required for Imperator/long types.",
      growing: "Very sweet, smooth, uniform; performs where long-rooted carrots would fork or stunt.",
      harvesting: "Harvest at 1-2in diameter for best texture/sweetness; shape resembles a small turnip more than a typical carrot.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for 'Paris Market' Carrots", publisher: "Epic Gardening", url: "https://www.epicgardening.com/paris-market-carrots/" },
      ],
    },
    {
      name: "Thumbelina",
      description: "1992 All-America Selections winner; round, golf-ball-sized (1-2in) orange roots.",
      daysToMaturity: { min: 60, max: 70 },
      starting: "Like Parisian, well suited to containers, raised beds, and heavy/rocky/shallow soil — no deep bed prep needed for this shallow round root.",
      growing: "Performs well even in heavy clay soil where long carrots fail.",
      harvesting: "Harvest at golf-ball size; sugary sweet, tender, needs no peeling; retains orange skin color even cooked.",
      sources: [
        { tier: "blog", title: "Carrot Thumbelina", publisher: "All-America Selections", url: "https://all-americaselections.org/product/carrot-thumbelina/" },
      ],
    },
    {
      name: "Little Finger",
      description: "19th-century French heirloom \"true baby carrot\" — bred to be harvested small by design; Nantes-type, cylindrical, blunt, 3-4in at harvest.",
      daysToMaturity: { min: 55, max: 65 },
      starting: "Direct sow; well suited to small gardens/containers due to short root length.",
      growing: "Very small core, smooth skin, deep orange color; bred for miniature-size eating quality rather than sizing up large.",
      harvesting: "Harvest deliberately young at 3-4in for peak crisp/sweet quality; traditionally used in France for canning and pickling.",
      sources: [
        { tier: "seed-supplier", title: "Little Finger Heirloom Carrot Seeds", publisher: "Terroir Seeds (Underwood Gardens)", url: "https://store.underwoodgardens.com/Little-Finger-Carrot-Daucus-carota-var-sativus/productinfo/V1027/" },
      ],
    },
    {
      name: "Purple Haze",
      description: "2006 AAS-winning F1 hybrid, Imperator type; 7-8in tapered roots with dark purple skin and bright orange interior.",
      daysToMaturity: { min: 70, max: 70 },
      starting: "Like other Imperator types, needs deep, loose soil to grow its 7-8in root straight.",
      growing: "Purple anthocyanin pigment is strongest when grown at cooler soil temperatures (59-68°F) with good drainage.",
      harvesting: "Best visual impact eaten raw (salads, slaw), since cooking fades the purple color; good flavor either way.",
      sources: [
        { tier: "seed-supplier", title: "Purple Haze - (F1) Carrot Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/main-crop-carrots/purple-haze-f1-carrot-seed-2680.html" },
      ],
    },
    {
      name: "Cosmic Purple",
      description: "Open-pollinated variety released 2005 by USDA breeder Dr. Philipp Simon; Danvers-type tapered 6-8in roots with purple skin and a bright orange/yellow core.",
      starting: "Direct sow; similar soil tolerance to Danvers type — moderate, not requiring the deep sandy bed Imperator types need.",
      growing: "Robust plants to ~15in tall; some resistance to common pests/diseases noted by suppliers.",
      harvesting: "Sweet, slightly earthy/peppery flavor; the anthocyanin pigment adds antioxidant content absent in standard orange carrots.",
      sources: [
        { tier: "seed-supplier", title: "Cosmic Purple Carrot Seeds – Purple Skin Orange Core", publisher: "St. Clare Seeds", url: "https://www.stclareseeds.com/product/cosmic-purple-carrot-seeds/" },
      ],
    },
    {
      name: "Yellowstone",
      description: "Open-pollinated yellow carrot of Nantes x Imperator parentage; pale-to-deep yellow skin, greenish-yellow core, big-shouldered roots to 8in.",
      daysToMaturity: { min: 70, max: 70 },
      starting: "Standard direct sow, similar to other Nantes/Imperator-cross types.",
      growing: "Yellow color comes from xanthophylls rather than beta-carotene; the color is stable and holds well through cooking.",
      harvesting: "Suited to both fresh bunching and winter storage; mild, clean flavor without the earthy bitterness some find in standard orange carrots.",
      sources: [
        { tier: "seed-supplier", title: "Yellowstone - Carrot Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/colored-carrots/yellowstone-carrot-seed-3333.html" },
      ],
    },
    {
      name: "Atomic Red",
      description: "Long tapered Imperator-type carrot with deep coral-red skin (colored by lycopene rather than beta-carotene) and an orange core; roots 8-10in.",
      starting: "Needs the same deep, loose soil as other Imperator-type long roots to grow straight.",
      growing: "Color intensifies to vivid red when cooked as lycopene concentration/visibility increases; lycopene also becomes more bioavailable with cooking.",
      harvesting: "Good raw or cooked; roasting/steaming/stir-frying specifically recommended to bring out both flavor and color contrast.",
      sources: [
        { tier: "seed-supplier", title: "Atomic Red Carrot Seeds – Lycopene Rich Roots", publisher: "St. Clare Seeds", url: "https://www.stclareseeds.com/product/atomic-red-carrot-seeds/" },
      ],
    },
    {
      name: "Envy",
      description: "F1 hybrid carrot with 10-12in cylindrical, bright-orange, blunt-tipped roots. LSU AgCenter trials list it as a strong performer for Louisiana/ArkLaMiss fall gardens.",
      daysToMaturity: { min: 66, max: 66 },
      starting: "Direct sow; long root benefits from loosened soil similar to other long/Imperator-leaning types.",
      growing: "Tolerates clay soil noticeably better than classic long Imperator types, per supplier notes; high-yielding and reliable.",
      harvesting: "Good for cooking, canning, and freezing; specifically flagged by LSU AgCenter trials as suited to Louisiana growing conditions.",
      sources: [
        { tier: "university-extension", title: "Carrots in the Fall", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/profiles/cprice/articles/page1632920785900" },
        { tier: "seed-supplier", title: "Envy Carrot Seeds – High Performance Hybrid", publisher: "Stokes Seeds", url: "https://www.stokeseeds.com/products/envy-carrot-hybrid-seed" },
      ],
    },
    {
      name: "Firewedge",
      description: "LSU AgCenter names Firewedge as a recommended variety for Louisiana/ArkLaMiss fall gardens, alongside Danvers Half Long, Envy, and Scarlet Nantes. Root shape/color details beyond the regional recommendation weren't confirmed against a seed-catalog listing — treat as a regional pick pending fuller verification.",
      starting: "Not independently confirmed — apply generic carrot starting guidance until verified against a catalog listing.",
      growing: "Regional LSU AgCenter trial data calls this variety out as a strong performer under Louisiana growing conditions.",
      harvesting: "Not confirmed in available sources.",
      sources: [
        { tier: "university-extension", title: "Carrots in the Fall", publisher: "LSU AgCenter", url: "https://www.lsuagcenter.com/profiles/cprice/articles/page1632920785900" },
      ],
    },
    {
      name: "Mokum",
      description: "F1 hybrid \"Amsterdam type\" early carrot; slender \"pencil carrot\" roots, 5.5-6.5in long, similar profile to Nelson but earlier and more slender.",
      daysToMaturity: { min: 54, max: 54 },
      starting: "Direct sow; short tops and slender roots make it well suited to early/tight succession plantings and containers.",
      growing: "Holds sweet taste even in warm weather — less prone to losing sweetness as the season warms than some other early types.",
      harvesting: "Top-rated for flavor among early varieties — fine color, small core, very juicy and sweet; best for fresh bunching and juicing, not bred for long storage.",
      sources: [
        { tier: "seed-supplier", title: "Mokum - (F1) Carrot Seed", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/carrots/early-carrots/mokum-f1-carrot-seed-2186.html" },
      ],
    },
  ],
} satisfies Plant;

export default carrot;
