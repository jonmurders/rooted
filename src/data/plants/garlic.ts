import type { Plant } from "@/types/plant";

const garlic = {
  id: "garlic",
  commonName: "Garlic",
  scientificName: "Allium sativum",
  category: "vegetable",
  zones: { min: 3, max: 9 },
  sun: "full-sun",
  soil: "Loose, well-drained, fertile soil",
  spacingInches: 6,
  daysToMaturity: { min: 210, max: 270 },
  water: {
    intervalDays: 5,
    drySpellThresholdIn: 1,
    notes: "Water through spring growth; stop watering ~2 weeks before harvest to cure well.",
  },
  temperature: {
    frostThresholdF: 0,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "fall",
      earliestWeeksFromFrost: -4,
      latestWeeksFromFrost: 2,
      method: "direct-sow",
    },
  ],
  description:
    "Planted in fall, garlic needs a period of cold to form bulbs and is harvested the following summer.",
  careNotes: [
    "Plant cloves root-down, pointed tip up, about 2in deep.",
    "Mulch heavily after planting to insulate through winter.",
    "Extremely cold-hardy once established — a hard freeze is normal, not a threat.",
    "Needs a real cold snap to bulb properly: roughly 2 months at 32-50°F, or 4-6 weeks below 40°F.",
  ],
  sources: [
    {
      title: "Plant at the Right Time to Grow Garlic and Bulb Onions",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/mhferguson/articles/page1637688089474",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Plant September-October (through early November) for a May-June harvest, about 7-8 months later. Garlic needs a minimum of 2 months at 32-50°F to vernalize and bulb properly, even here.",
      source: {
        title: "Plant at the Right Time to Grow Garlic and Bulb Onions",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/mhferguson/articles/page1637688089474",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Time fall planting to 1-2 weeks after the first killing frost so cloves root and start a shoot but don't emerge above soil before winter. Garlic tolerates cold down to about 25-26°F without much damage once established.",
      source: {
        title: "Growing garlic in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/vegetables/growing-garlic",
      },
    },
    {
      region: "Subtropical Florida",
      note: "A much wider planting window applies here, September through February, since winters rarely hard-freeze. Softneck varieties (Artichoke, Creole types) suit Florida's mild, low-chill winters best.",
      source: {
        title: "Garlic — Allium sativum L.",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/publication/MV064",
      },
    },
  ],
  varieties: [
    {
      name: "Music (hardneck, porcelain)",
      description: "A porcelain-type hardneck brought from Italy in the 1980s, prized for bold, rich, medium-hot flavor and reliable cold-climate performance; consistently top-ranked in university variety trials for bulb weight.",
      daysToMaturity: { min: 240, max: 290 },
      starting: "Standard fall planting; performs especially well in colder northern climates.",
      growing: "Very cold-hardy; a University of Maine Extension favorite alongside German Extra Hardy and Chesnok Red.",
      harvesting: "Bulbs hold 4-8 large, easy-to-peel cloves with buff skins streaked red; stores well after curing.",
      sources: [
        { tier: "university-extension", title: "Growing Garlic in Maine", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/publications/2063e/" },
        { tier: "blog", title: "How to Plant, Grow, and Care for Music Hardneck Garlic", publisher: "Epic Gardening", url: "https://www.epicgardening.com/music-garlic/" },
      ],
    },
    {
      name: "German Extra Hardy (hardneck, porcelain)",
      description: "Also called German White; a porcelain hardneck rated for zones 3-8, valued for withstanding both severe cold and wet winters better than most varieties.",
      starting: "Long roots help prevent frost heaving in harsh winters.",
      growing: "Extremely cold-tolerant; recommended by Maine Extension as a top hardneck choice.",
      harvesting: "3-6 very large cloves per bulb with tight white skins and rusty-tan clove wrappers; stores 6-10 months, notably long for a hardneck.",
      sources: [
        { tier: "university-extension", title: "Growing Garlic in Maine", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/publications/2063e/" },
        { tier: "seed-supplier", title: "German Extra Hardy - Organic Garlic Bulbs", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/garlic/german-extra-hardy-organic-garlic-bulbs-3535G.html" },
      ],
    },
    {
      name: "Georgian Fire (hardneck, porcelain)",
      description: "Porcelain hardneck from the Republic of Georgia known for intense heat when raw that mellows dramatically when cooked.",
      starting: "Fall-planted; thrives in cooler climates.",
      growing: "5-9 rose-tinted, easy-to-peel cloves per bulb; matures mid-to-late summer.",
      harvesting: "Scapes should be removed to focus energy on bulb growth; good for salsas needing raw punch.",
      sources: [
        { tier: "seed-supplier", title: "Georgian Fire Organic Hardneck Porcelain Garlic", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/bulbs/georgian-fire-organic-hardneck-porcelain-garlic-6227" },
      ],
    },
    {
      name: "Georgian Crystal (hardneck, porcelain)",
      description: "Porcelain hardneck from Georgia (country) with a milder raw bite than most porcelains, developing mellow sweetness when roasted.",
      starting: "Standard hardneck fall planting.",
      growing: "Zones 3-8; especially well suited to regions with dependable winter chill.",
      harvesting: "4-7 large, easy-to-peel cloves per bulb; stores well into winter.",
      sources: [
        { tier: "seed-supplier", title: "Georgian Crystal Organic Hardneck Porcelain Garlic", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/bulbs/georgian-crystal-organic-hardneck-porcelain-garlic-6225" },
      ],
    },
    {
      name: "Chesnok Red (hardneck, purple stripe)",
      description: "Purple stripe hardneck from the Republic of Georgia, considered one of the best roasting garlics due to how sweet and creamy it becomes cooked despite being hot raw.",
      starting: "Standard hardneck fall planting.",
      growing: "Zones 3-8; cold-hardy.",
      harvesting: "Large bulbs with 8-12 medium cloves; stores about 6 months when cured.",
      sources: [
        { tier: "university-extension", title: "Growing Garlic in Maine", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/publications/2063e/" },
        { tier: "seed-supplier", title: "Chesnok Red - Purple-Striped Garlic Bulbs", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/garlic/chesnok-red-garlic-bulbs-3536.html" },
      ],
    },
    {
      name: "Persian Star (hardneck, purple stripe)",
      description: "Purple stripe hardneck originally sourced from Samarkand, Uzbekistan; named for the star pattern cloves form when viewed from above; a frequent \"taste test winner\" among chefs for roasting.",
      starting: "Standard hardneck fall planting.",
      growing: "Thrives in exceptionally cold winters but also performs as far south as North Texas.",
      harvesting: "8-12 cloves in a single layer, white wrappers blushed purple; stores 6-7 months.",
      sources: [
        { tier: "blog", title: "What Is Persian Star Garlic", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/herbs/garlic/how-to-grow-persian-star-garlic.htm" },
      ],
    },
    {
      name: "Metechi (hardneck, marbled purple stripe)",
      description: "Georgian heirloom marbled purple stripe considered one of the hottest garlics available, with intense raw heat that mellows on roasting.",
      starting: "Standard hardneck fall planting.",
      growing: "Excels in cold climates; matures mid-to-late summer when fall-planted; stores better than most hardnecks.",
      harvesting: "Only 5-7 large cloves per bulb (fewer, larger than most), thick purple-striped skins, easy to peel.",
      sources: [
        { tier: "seed-supplier", title: "Organic Metechi (Marbled Purple Stripe)", publisher: "Irish Eyes Garden Seeds", url: "https://irisheyesgardenseeds.com/product/og-metechi-garlic/" },
      ],
    },
    {
      name: "Purple Glazer (hardneck, glazed purple stripe)",
      description: "A Central Asian glazed purple stripe hardneck with a sweet, rich, slightly spicy flavor and a smooth, mellow heat that deepens when roasted.",
      starting: "Can also be vernalized in a fridge for growing in warmer regions.",
      growing: "Very cold-hardy, from the Republic of Georgia.",
      harvesting: "6-10 very large cloves in a squat bulb up to 8cm; stores 4-8 months.",
      sources: [
        { tier: "blog", title: "Purple Glazer Garlic Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Purple_Glazer_Garlic_12329.php" },
      ],
    },
    {
      name: "Siberian (hardneck, marbled purple stripe)",
      description: "Marbled purple stripe hardneck of European/Russian origin, traditional in Eastern European cuisine; brought to Alaska in the 19th century, high in allicin.",
      starting: "Standard hardneck fall planting.",
      growing: "Zones 3-8; thrives in both cold and warm climates; vigorous grower.",
      harvesting: "4-8 large, squat cloves with burgundy-purple wrappers; long storability at 6-7 months.",
      sources: [
        { tier: "blog", title: "Siberian garlic", publisher: "Home for the Harvest", url: "https://homefortheharvest.com/siberian-garlic/" },
      ],
    },
    {
      name: "Spanish Roja (hardneck, rocambole)",
      description: "The archetypal rocambole heirloom, introduced to the Pacific Northwest over a century ago; renowned for rich, spicy flavor with notable sweetness, and easy-to-peel cloves.",
      starting: "Standard hardneck fall planting.",
      growing: "A longtime Filaree Farm signature rocambole; classic rocamboles have the shortest storage life of all garlic types.",
      harvesting: "8-10 large cloves in dark red-brown, crackly skins around a central stalk; only stores ~4-6 months.",
      sources: [
        { tier: "seed-supplier", title: "SPANISH ROJA Bulk Garlic", publisher: "Filaree Organic Seed Farm", url: "https://filareefarm.com/spanish-roja/" },
      ],
    },
    {
      name: "German Red (hardneck, rocambole)",
      description: "Old-world rocambole with a full-flavored, velvety, aromatic taste favored for stews, roasts, and wild game; highly resistant to pests and disease.",
      starting: "Standard hardneck fall planting.",
      growing: "Thrives in colder climates; prone to producing double cloves, a known heirloom quirk.",
      harvesting: "8-12 reddish-brown cloves in purplish-white skin; like all rocamboles, stores only 4-6 months.",
      sources: [
        { tier: "seed-supplier", title: "German Red Organic Hardneck Rocambole Garlic", publisher: "Fedco Seeds", url: "https://fedcoseeds.com/bulbs/german-red-organic-hardneck-rocambole-garlic-6233" },
      ],
    },
    {
      name: "Killarney Red (hardneck, rocambole)",
      description: "An Idaho-origin rocambole, likely a mutation of German Red or Spanish Roja, with a strong nutty flavor and loosely wrapped cloves that peel very easily.",
      starting: "Standard hardneck fall planting.",
      growing: "Handles wet, well-drained conditions better than most rocamboles.",
      harvesting: "Early-to-mid season harvest, 7-9 (up to 10-14) cloves per bulb; only a medium keeper at 2-3 months storage — notably shorter than generic garlic storage expectations.",
      sources: [
        { tier: "seed-supplier", title: "'Killarney Red' Garlic", publisher: "Renee's Garden", url: "https://www.reneesgarden.com/products/killarney-red" },
      ],
    },
    {
      name: "Duganski (hardneck, rocambole/purple stripe)",
      description: "A fiery, earthy, musky-flavored hardneck; sources vary on classifying it purple stripe vs. rocambole, but it is consistently described as one of the best-storing hardnecks.",
      starting: "Standard hardneck fall planting.",
      growing: "Adapts to most climates, particularly shines in southern states.",
      harvesting: "8-12 cloves with purple stripes on white paper skin; stores 7-9 months, well beyond typical hardneck storage life.",
      sources: [
        { tier: "seed-supplier", title: "Duganski Garlic", publisher: "Territorial Seed", url: "https://territorialseed.com/products/garlic-duganski" },
      ],
    },
    {
      name: "Korean Red (hardneck, asiatic/turban)",
      description: "An early-maturing Asiatic (turban) hardneck with a very long topset (up to 18in); intense hot flavor raw that mellows cooked.",
      starting: "Standard hardneck fall planting.",
      growing: "Highly cold hardy and adapts well to northern climates; considered the best-performing Asiatic type year after year.",
      harvesting: "Matures earlier than most hardnecks; 6-8 large, easy-to-peel cloves in deep red, purple-striped bulbs; stores 4-6 months, longer than most Asiatics.",
      sources: [
        { tier: "blog", title: "Korean Red - Asiatic Hardneck Seed Garlic", publisher: "Garlic Gods", url: "https://garlicgods.com/products/korean-red" },
      ],
    },
    {
      name: "Inchelium Red (softneck, artichoke)",
      description: "Mid-season artichoke-type softneck discovered on the Colville Indian Reservation, WA; mild flavor, considered one of the best varieties for garlic braiding.",
      starting: "Standard softneck fall planting.",
      growing: "Hardy enough to overwinter even in the North despite being a softneck.",
      harvesting: "8-15+ light purple-skinned cloves per bulb; stores 6-9 months.",
      sources: [
        { tier: "seed-supplier", title: "Inchelium Red - Garlic Bulbs", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/vegetables/garlic/inchelium-red-garlic-bulbs-4086.html" },
      ],
    },
    {
      name: "California Early (softneck, artichoke)",
      description: "Likely the most commonly grown garlic variety in the US; a workhorse softneck used heavily for fresh market and braiding, more heat-tolerant than similar varieties.",
      daysToMaturity: { min: 210, max: 210 },
      starting: "Needs 6-8 weeks of mean temps below 40°F for proper bulbing, same as California Late.",
      growing: "Mild flavor, easy to grow, tolerates hotter climates well.",
      harvesting: "10-16 cloves per flat, symmetrical bulb with off-white/tan, purple-blushed skin; stores 4-6 months.",
      sources: [
        { tier: "seed-supplier", title: "CALIFORNIA EARLY Bulk Garlic", publisher: "Filaree Organic Seed Farm", url: "https://filareefarm.com/california-early-bulk/" },
      ],
    },
    {
      name: "California Late / White (softneck, artichoke)",
      description: "A reliable, warm-climate-adaptable softneck with bolder flavor and notably better storage than California Early.",
      starting: "Standard softneck fall planting.",
      growing: "Matures early-to-midsummer; tight wrappers make it ideal for braiding.",
      harvesting: "12-16 creamy-white cloves per bulb, light pink to deep red skin; stores up to 12 months, unusually long for the generic garlic range.",
      sources: [
        { tier: "blog", title: "Conventionally Grown Garlic, California Late White", publisher: "Grow Organic", url: "https://www.groworganic.com/products/garlic-california-late-white-conventionally-grown-lb" },
      ],
    },
    {
      name: "Nootka Rose (softneck, silverskin)",
      description: "A silverskin softneck from Puget Sound, WA, with symmetrical bulbs, silky white wrappers and rose-tinged cloves; bold, robust medium-hot flavor that persists through storage.",
      starting: "Standard softneck fall planting.",
      growing: "The last cultivar to fully mature (late July/early August), later than most garlic.",
      harvesting: "Larger-than-typical silverskin with 15-20 cloves per bulb; stores exceptionally long at 9-12 months and tolerates more humidity in storage than other softnecks.",
      sources: [
        { tier: "seed-supplier", title: "Silverskin Garlic, Nootka Rose", publisher: "Harvesting History", url: "https://www.harvesting-history.com/product/silverskin-garlic-nootka-rose-4-oz/" },
      ],
    },
    {
      name: "Silver White (softneck, silverskin)",
      description: "A California-developed silverskin softneck bred for consistent performance and high yields, with a mild flavor good for fresh eating.",
      starting: "Standard softneck fall planting.",
      growing: "Proven to perform in cold, hot, humid, and coastal climates alike; broad, tall leaves are excellent for braiding.",
      harvesting: "10-12 cloves per bulb, silvery-white skin; stores up to 12 months, tolerating more storage humidity than other softnecks.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for Silver White Softneck Garlic", publisher: "Epic Gardening", url: "https://www.epicgardening.com/silver-white-garlic/" },
      ],
    },
    {
      name: "Ajo Rojo / Creole",
      description: "A true Creole garlic (genetically distinct group originating in Spain), semi-bolting so it can present as softneck, hardneck, or in between; pale outer skin hides striking crimson cloves. LSU AgCenter describes Louisiana's traditional Creole (Mexican white) type more specifically as intermediate in size/pungency with white-skinned cloves that do NOT store well — a meaningful discrepancy from commercial Ajo Rojo's reported longer storage, worth noting.",
      starting: "Standard fall planting; excels in hot Southern climates and southern Europe.",
      growing: "Retains a warm, pleasant flavor when cooked; performs well in the Gulf South's mild winters.",
      harvesting: "Commercial Ajo Rojo strains report ~9 months storage, but the traditional Louisiana Creole (Mexican white) type does not store well.",
      sources: [
        { tier: "university-extension", title: "Plant garlic for Louisiana cooking", publisher: "LSU AgCenter", url: "https://apps.lsuagcenter.com/news_archive/2014/September/get-it-growing/Plant-garlic-for-Louisiana-cooking.htm" },
        { tier: "blog", title: "Ajo Rojo Garlic Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Ajo_Rojo_Garlic_9080.php" },
      ],
    },
  ],
} satisfies Plant;

export default garlic;
