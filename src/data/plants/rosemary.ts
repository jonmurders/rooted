import type { Plant } from "@/types/plant";

const rosemary = {
  id: "rosemary",
  commonName: "Rosemary",
  scientificName: "Salvia rosmarinus",
  category: "herb",
  zones: { min: 7, max: 10 },
  sun: "full-sun",
  soil: "Sandy, well-drained, slightly alkaline soil",
  spacingInches: 24,
  daysToMaturity: { min: 80, max: 100 },
  water: {
    intervalDays: 7,
    drySpellThresholdIn: 0.5,
    notes: "Drought tolerant once established — overwatering is the main risk, especially in containers.",
  },
  temperature: {
    frostThresholdF: 10,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A woody, drought-loving Mediterranean herb. Perennial in its zone range; grown in containers and overwintered indoors elsewhere.",
  careNotes: [
    "Let soil dry between waterings — root rot from overwatering is more common than drought stress.",
    "Outside zones 7-10, grow in a pot and bring indoors before the first hard freeze.",
    "Thrives in heat; rarely needs summer intervention.",
    "Water every 3-5 days only while establishing a new plant; cut back sharply once it's rooted in.",
  ],
  sources: [
    {
      title: "A Guide to Growing a School Herb Garden",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/~/media/system/8/4/8/f/848fcac92cdce23acb0ffc9760858d13/pub3424schoolherbgarden.pdf",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown as a woody evergreen perennial year-round in the ground, easily propagated from cuttings.",
      source: {
        title: "A Guide to Growing a School Herb Garden",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/~/media/system/8/4/8/f/848fcac92cdce23acb0ffc9760858d13/pub3424schoolherbgarden.pdf",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "Standard rosemary is hardy to about 10°F if allowed to harden off slowly in fall; the 'Arp' cultivar tolerates down to 5°F. Water every 3-5 days only during establishment, then very little — overwatering causes excessive woodiness.",
      source: {
        title: "Rosemary",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/sites/default/files/2024-10/Rosemary_0.pdf",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Reliably overwinters outdoors in western Oregon in a sunny, south-facing, sharply-drained spot — \"wet feet is death\" for rosemary here, and established plants are notably hardier than young ones.",
      source: {
        title: "Five cold-hardy herbs to grow",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/gardening/vegetables/five-cold-hardy-herbs-grow-home",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Winters are too cold for rosemary to survive outdoors — grow it in an unglazed clay pot and bring it indoors for winter rather than treating it as a garden perennial.",
      source: {
        title: "Growing herbs in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden/growing-herbs",
      },
    },
  ],
  varieties: [
    {
      name: "Arp",
      description: "A very cold-hardy upright cultivar with grey-green needles and light blue flowers, developed for exceptional winter survival.",
      starting: "Best propagated from stem cuttings to keep it true-to-type; can also be seed-started but germination is slow and inconsistent.",
      growing: "Upright habit reaching 3-4 ft; hardy to zone 7a and reportedly to zone 6a with protection — among the most cold-tolerant rosemary cultivars.",
      harvesting: "Harvest sprigs as needed once established; strong fragrance and flavor typical of culinary rosemary.",
      sources: [
        { tier: "university-extension", title: "Rosemary, Salvia rosmarinus", publisher: "Wisconsin Horticulture Extension", url: "https://hort.extension.wisc.edu/articles/rosemary-rosemarinus-officinalis/" },
        { tier: "seed-supplier", title: "Rosemary, Arp", publisher: "Burpee", url: "https://www.burpee.com/rosemary-arp-prod099728.html" },
        { tier: "university-extension", title: "Rosemary provides landscape variety, culinary delight", publisher: "NC State Extension", url: "https://extensiongardener.ces.ncsu.edu/gardening-publications-2/extgardener-previous-newsletters/extgardener-past-features/extgardener-rosemary-provides-landscape-variety-culinary-delight/" },
      ],
    },
    {
      name: "Tuscan Blue",
      description: "A tall, strongly upright cultivar with thick sturdy stems, glossy olive-gray needles, and violet-blue flowers; one of the classic culinary/ornamental rosemaries.",
      starting: "Typically started from cuttings for true-to-type plants; seed-grown plants are more variable.",
      growing: "Reaches 5-7 ft tall and spreads 2-4 ft; hardy zones 8-10; strong upright growth makes it popular for hedges and topiary.",
      harvesting: "Harvest stems year-round in mild climates; flavorful and aromatic, suited to cooking.",
      sources: [
        { tier: "university-extension", title: "Rosmarinus (Rosemary)", publisher: "UC Master Gardener Program of Sonoma County (UC ANR)", url: "https://ucanr.edu/site/mg-sonoma/rosmarinus-rosemary" },
        { tier: "blog", title: "Which Rosemary Plant Is Right for You?", publisher: "Sunset Magazine", url: "https://sunset.com/garden/flowers-plants/right-rosemary-for-you" },
        { tier: "seed-supplier", title: "Rosemary, Tuscan Blue", publisher: "Burpee", url: "https://www.burpee.com/rosemary-tuscan-blue-prod099734.html" },
      ],
    },
    {
      name: "Barbeque (BBQ)",
      description: "Upright variety with sturdy, straight, woody stems bred to double as skewers for grilling, with good fragrance and flavor.",
      starting: "Propagated by cuttings for reliable stem straightness and flavor.",
      growing: "Reaches 4-6 ft tall and 2-3 ft wide; upright, sturdy habit.",
      harvesting: "Stems are harvested both for culinary leaf use and as functional grilling skewers.",
      sources: [
        { tier: "university-extension", title: "Rosemary, Salvia rosmarinus", publisher: "Wisconsin Horticulture Extension", url: "https://hort.extension.wisc.edu/articles/rosemary-rosemarinus-officinalis/" },
        { tier: "seed-supplier", title: "Rosemary, Barbeque", publisher: "Burpee", url: "https://www.burpee.com/rosemary-barbeque-prod003359.html" },
      ],
    },
    {
      name: "Salem",
      description: "Upright cultivar with dark blue flowers reminiscent of common rosemary, valued for reliable cold-season performance.",
      starting: "Grown from cuttings to preserve cultivar traits.",
      growing: "Grows 4-5 ft tall; in zone 7, overwinters most years with good drainage and a mulched root zone.",
      harvesting: "Standard culinary harvest of leafy stems as needed.",
      sources: [
        { tier: "university-extension", title: "Rosemary provides landscape variety, culinary delight", publisher: "NC State Extension", url: "https://extensiongardener.ces.ncsu.edu/gardening-publications-2/extgardener-previous-newsletters/extgardener-past-features/extgardener-rosemary-provides-landscape-variety-culinary-delight/" },
        { tier: "blog", title: "How to Grow Rosemary in the Southeast", publisher: "Fine Gardening", url: "https://www.finegardening.com/article/how-to-grow-rosemary-in-the-southeast" },
      ],
    },
    {
      name: "Gorizia",
      description: "Upright cultivar distinguished by leaves double the size of ordinary rosemary; also cold-tolerant.",
      starting: "Propagated via cuttings.",
      growing: "One of the recommended upright cultivars for the Southeast; overwinters most years in zone 7 with good drainage.",
      harvesting: "Large leaves make it easy to harvest visible amounts of foliage for cooking.",
      sources: [
        { tier: "university-extension", title: "Rosemary provides landscape variety, culinary delight", publisher: "NC State Extension", url: "https://extensiongardener.ces.ncsu.edu/gardening-publications-2/extgardener-previous-newsletters/extgardener-past-features/extgardener-rosemary-provides-landscape-variety-culinary-delight/" },
        { tier: "blog", title: "How to Grow Rosemary in the Southeast", publisher: "Fine Gardening", url: "https://www.finegardening.com/article/how-to-grow-rosemary-in-the-southeast" },
      ],
    },
    {
      name: "Prostratus (Prostrate/Creeping Rosemary)",
      description: "A low, trailing groundcover form (rather than upright shrub) that cascades over walls and slopes.",
      starting: "Propagated from cuttings, as prostrate forms don't reliably come true from seed.",
      growing: "Stays under 1-2 ft tall and spreads 4-8 ft wide; good for pots, rock gardens, and cascading over masonry.",
      harvesting: "Leaves are edible and usable in cooking, though it's mainly grown ornamentally as a groundcover.",
      sources: [
        { tier: "university-extension", title: "Rosmarinus officinalis 'Prostratus'", publisher: "University of Arizona", url: "https://cales.arizona.edu/classes/lar520/unit10/rosmoffi.htm" },
        { tier: "blog", title: "Which Rosemary Plant Is Right for You?", publisher: "Sunset Magazine", url: "https://sunset.com/garden/flowers-plants/right-rosemary-for-you" },
      ],
    },
    {
      name: "Miss Jessopp's Upright",
      description: "Slender, upright cultivar with pale blue flowers, well suited to formal herb gardens and confined spaces.",
      starting: "Propagated by cuttings.",
      growing: "Grows 4-6 ft tall and about half as wide with slender branches; strong distinct fragrance; overwinters well in zone 7 with good drainage/mulch.",
      harvesting: "Culinary leaf harvest as needed; strong fragrance is prized in cooking.",
      sources: [
        { tier: "blog", title: "Miss Jessopp's Upright Rosemary", publisher: "CropNerd", url: "https://cropnerd.com/plants/herbs/rosemary/miss-jessopps-upright" },
        { tier: "blog", title: "How to Grow Rosemary in the Southeast", publisher: "Fine Gardening", url: "https://www.finegardening.com/article/how-to-grow-rosemary-in-the-southeast" },
      ],
    },
    {
      name: "Blue Boy (Dwarf)",
      description: "A dwarf/miniature cultivar popular for containers and small spaces.",
      starting: "Propagated from cuttings; slow-growing compared to standard cultivars.",
      growing: "Slow-growing habit that works well as a container plant, low border plant, or indoor windowsill herb.",
      harvesting: "Small stature means lighter harvests, but still usable for culinary garnish.",
      sources: [
        { tier: "blog", title: "Exploring the Diversity of Rosemary Varieties", publisher: "LoveToKnow", url: "https://www.lovetoknow.com/home/garden/rosemary-varieties" },
      ],
    },
    {
      name: "Huntington Carpet",
      description: "A dense, low-dieback trailing cultivar, roughly half the size of 'Prostratus', with pale blue flowers and dark green leaves.",
      starting: "Propagated via cuttings for reliable habit.",
      growing: "Grows 1-2 ft high and up to 8 ft wide; dense center with little dieback; good for walls, banks, rock gardens, window boxes, and containers.",
      harvesting: "Leaves can be harvested for cooking, though primarily grown as an ornamental groundcover.",
      sources: [
        { tier: "blog", title: "Miss Jessopp's Upright / Huntington Carpet", publisher: "LoveToKnow", url: "https://www.lovetoknow.com/home/garden/rosemary-varieties" },
        { tier: "seed-supplier", title: "Huntington Carpet Rosemary", publisher: "Monrovia", url: "https://www.monrovia.com/huntington-carpet-rosemary.html" },
      ],
    },
    {
      name: "Hill Hardy (Madalene Hill)",
      description: "Cultivar named for Texas herb gardener Madalene Hill, with denser, brighter-green foliage than 'Arp'.",
      starting: "Propagated by cuttings.",
      growing: "Grows 3-5 ft tall and as wide; hardy to at least 0°F, making it one of the more cold-tolerant culinary cultivars.",
      harvesting: "Dense foliage supports good culinary yield; used fresh or dried.",
      sources: [
        { tier: "blog", title: "Hill Hardy Rosemary (Rosmarinus officinalis 'Madalene Hill')", publisher: "Arbor Gate", url: "https://arborgate.com/picks/hill-hardy-rosemary-rosmarinus-officinalis-madalene-hill/" },
        { tier: "seed-supplier", title: "Organic Rosmarinus officinalis Madalene Hill Rosemary Plants", publisher: "Mountain Valley Growers", url: "https://mountainvalleygrowers.com/organic-plants/rosmarinus-officinalis-madalene-hill-rosemary/" },
      ],
    },
    {
      name: "Irene (Trailing)",
      description: "Trailing cultivar with showy violet-blue flowers, good for draping over slopes or walls.",
      starting: "Propagated from cuttings.",
      growing: "Grows about 1.5 ft tall and spreads 2-3 ft per year; hardier (to about 15°F) than most other trailing rosemary types.",
      harvesting: "Grown mainly ornamentally as a groundcover/trailing plant; leaves are still edible.",
      sources: [
        { tier: "blog", title: "Which Rosemary Plant Is Right for You?", publisher: "Sunset Magazine", url: "https://sunset.com/garden/flowers-plants/right-rosemary-for-you" },
      ],
    },
    {
      name: "Blue Spires",
      description: "Strong, vertical-growing cultivar with clear blue flowers.",
      starting: "Propagated by cuttings.",
      growing: "Grows 5-6 ft tall and 4-6 ft wide with a strong vertical habit.",
      harvesting: "Culinary-grade foliage, harvested as needed.",
      sources: [
        { tier: "seed-supplier", title: "Blue Spires Rosemary", publisher: "Monrovia", url: "https://www.monrovia.com/blue-spires-rosemary.html" },
        { tier: "blog", title: "Rosmarinus officinalis 'Blue Spires'", publisher: "Servescape", url: "https://servescape.com/products/rosmarinus-officinalis-blue-spires-monrovia%C2%AE-blue-spires-rosemary" },
      ],
    },
    {
      name: "Spice Islands (Spice Island)",
      description: "Compact, upright cultivar considered one of the most aromatic rosemaries, with a clean, citrusy, slightly nutmeg-clove flavor.",
      starting: "Propagated by cuttings.",
      growing: "Compact upright evergreen shrub with gray-green foliage and dark blue flowers; drought tolerant, good for low hedges.",
      harvesting: "Leaves used fresh or dried; prized for strong aroma detectable from a distance.",
      sources: [
        { tier: "seed-supplier", title: "Spice Islands Rosemary", publisher: "Monrovia", url: "https://www.monrovia.com/spice-islands-rosemary.html" },
        { tier: "blog", title: "Salvia rosmarinus 'Spice Island'", publisher: "Gardenia.net", url: "https://www.gardenia.net/plant/rosmarinus-officinalis-spice-island" },
      ],
    },
    {
      name: "Athens Blue Spires",
      description: "Very cold-hardy, vigorous, upright cultivar with light blue flowers; discovered in 1998 from a commercial rosemary seed packet by a University of Georgia horticulture researcher and selected for vigor and cold tolerance.",
      starting: "Propagated by cuttings from the original selection (patented cultivar).",
      growing: "Reaches 5-6 ft tall with a 4 ft spread; survives temperatures down to -5°F to -10°F; hardy zones 7-10.",
      harvesting: "Blooms December through April in mild climates; foliage suitable for both ornamental and culinary use.",
      sources: [
        { tier: "blog", title: "The Best Cold Hardy Rosemary Varieties", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/herbs/cold-hardy-rosemary/" },
        { tier: "seed-supplier", title: "Blue Spires Rosemary", publisher: "Monrovia", url: "https://www.monrovia.com/blue-spires-rosemary.html" },
      ],
    },
    {
      name: "Majorca Pink",
      description: "Distinguished by pink-tinged white to pale pink flowers, unusual among rosemary cultivars which typically bloom blue.",
      starting: "Propagated by cuttings.",
      growing: "Upright habit similar to other culinary rosemary types.",
      harvesting: "Leaves harvested for culinary use as with other rosemary.",
      sources: [
        { tier: "blog", title: "Types of rosemary: trailing & creeping varieties", publisher: "Plantura", url: "https://plantura.garden/uk/herbs/rosemary/types-of-rosemary" },
      ],
    },
    {
      name: "Collingwood Ingram",
      description: "Popular mounding cultivar with bright blue, nearly violet flowers and characteristically curved branches.",
      starting: "Propagated by cuttings.",
      growing: "Mounding, spreading habit; used for slopes and rock gardens.",
      harvesting: "Leaves harvested for cooking; also grown ornamentally.",
      sources: [
        { tier: "blog", title: "Rosmarinus officinalis 'Collingwood Ingram' Rosemary", publisher: "Garden Center Marketing", url: "https://www.gardencentermarketing.com/plantName/Rosmarinus-officinalis-Collingwood-Ingram1" },
        { tier: "blog", title: "Which Rosemary Plant Is Right for You?", publisher: "Sunset Magazine", url: "https://sunset.com/garden/flowers-plants/right-rosemary-for-you" },
      ],
    },
    {
      name: "Severn Sea",
      description: "RHS Award of Garden Merit compact, bushy cultivar with bright blue flowers and medium grey-green leaves; arching branches.",
      starting: "Propagated by cuttings.",
      growing: "Dense, spreading evergreen shrub growing 2-3 ft tall and wide; profuse flower clusters in spring and summer.",
      harvesting: "Foliage usable in cooking; commonly grown ornamentally.",
      sources: [
        { tier: "blog", title: "Severn Sea · Rosemary", publisher: "CropNerd", url: "https://cropnerd.com/plants/herbs/rosemary/severn-sea" },
        { tier: "blog", title: "Salvia rosmarinus 'Severn Sea' (Rosemary)", publisher: "Gardenia.net", url: "https://www.gardenia.net/plant/rosmarinus-officinalis-severn-sea" },
      ],
    },
    {
      name: "Albus (White-flowering)",
      description: "Notable for white flowers, unusual since blue or lilac is the standard rosemary flower color.",
      starting: "Propagated by cuttings.",
      growing: "Grows similarly to standard upright rosemary types.",
      harvesting: "Leaves usable for cooking; grown partly for ornamental white blooms.",
      sources: [
        { tier: "blog", title: "Rosmarinus officinalis / Albus listings", publisher: "Plant lust", url: "https://plantlust.com/plant_index/rosmarinus/" },
      ],
    },
    {
      name: "Chef's Choice",
      description: "Selected specifically for high oil content and strong culinary flavor; sky-blue flowers over grayish-green needle-like foliage.",
      starting: "Propagated by cuttings (patented/trademarked selection).",
      growing: "Reaches about 18-24 in tall and wide; neat, rounded, low-maintenance shape.",
      harvesting: "Bred for chefs and home cooks who value premium flavor and oil content; harvest sprigs as needed.",
      sources: [
        { tier: "seed-supplier", title: "Chef's Choice® Rosemary", publisher: "My Perfect Plants", url: "https://myperfectplants.com/products/chefs-choice-rosemary" },
        { tier: "seed-supplier", title: "Chef's Choice Culinary Rosemary", publisher: "Southern Living Plants", url: "https://southernlivingplants.com/the-collection/plant/chefs-choice-culinary-rosemary/" },
      ],
    },
    {
      name: "Nancy Howard",
      description: "Upright cultivar with broad, dark green leaves and white flowers that fade to a delicate pale pink.",
      starting: "Propagated by cuttings.",
      growing: "Upright growth habit distinguishing it from trailing/prostrate types.",
      harvesting: "Leaves usable for culinary purposes; also valued ornamentally for its fading flower color.",
      sources: [
        { tier: "seed-supplier", title: "Rosmarinus officinalis 'Nancy Howard' (Rosemary)", publisher: "Charsaw Farms", url: "https://charsawfarms.com/products/rosmarinus-officinalis-nancy-howard-rosemary-nancy-howard" },
      ],
    },
  ],
} satisfies Plant;

export default rosemary;
