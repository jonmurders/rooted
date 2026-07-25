import type { Plant } from "@/types/plant";

const basil = {
  id: "basil",
  commonName: "Basil",
  scientificName: "Ocimum basilicum",
  category: "herb",
  zones: { min: 4, max: 11 },
  sun: "full-sun",
  soil: "Moist, well-drained, fertile soil",
  spacingInches: 12,
  daysToMaturity: { min: 50, max: 75 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Keep soil consistently moist; wilts quickly in dry heat.",
  },
  temperature: {
    frostThresholdF: 40,
    heatStressThresholdF: 100,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: 2,
      latestWeeksFromFrost: 8,
      method: "transplant",
    },
  ],
  description:
    "A fast-growing, heat-loving herb that is damaged by cold well before an actual frost.",
  careNotes: [
    "Pinch flower spikes to keep leaves productive.",
    "Chills below 40°F can blacken leaves even without frost.",
    "Harvest regularly — cutting encourages bushier growth.",
  ],
  sources: [
    {
      title: "Basil is a warm-season herb that loves the heat",
      publisher: "LSU AgCenter",
      url: "https://apps.lsuagcenter.com/news_archive/2014/July/get-it-growing/Basilisawarmseasonherbthatlovestheheat.htm",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "One of the few herbs that thrives through Louisiana's full summer heat — LSU recommends it specifically as a hot-season planting rather than a shoulder-season one.",
      source: {
        title: "Basil is a warm-season herb that loves the heat",
        publisher: "LSU AgCenter",
        url: "https://apps.lsuagcenter.com/news_archive/2014/July/get-it-growing/Basilisawarmseasonherbthatlovestheheat.htm",
      },
    },
    {
      region: "Hot/Arid Southwest",
      note: "In desert summer heat (100°F+), an eastern exposure with morning sun and afternoon shade works better than all-day full sun; soil here is often alkaline, so amend with compost.",
      source: {
        title: "Growing Herbs in Tucson",
        publisher: "University of Arizona Cooperative Extension",
        url: "https://extension.arizona.edu/publication/growing-herbs-tucson",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Downy mildew, first reported in south Florida in 2007, is now the most devastating basil disease in the humid Southeast — plant resistant cultivars and disease-free seed rather than relying on fungicides alone.",
      source: {
        title: "Florida Plant Disease Management Guide: Sweet Basil",
        publisher: "UF/IFAS EDIS",
        url: "https://edis.ifas.ufl.edu/publication/pp113",
      },
    },
  ],
  varieties: [
    {
      name: "Genovese",
      description:
        "The classic sweet Genovese-type basil from the Genoa region of Italy — large, glossy, cupped medium-green leaves with a strong clove-anise-licorice aroma; the standard for pesto.",
      starting:
        "Typically transplanted from indoor-started seedlings after last frost; needs warm soil (~70°F+) to germinate, same as generic basil.",
      growing:
        "Reaches 24-30in tall; more downy-mildew susceptible than newer DMR hybrids, so good airflow/spacing matters in humid climates.",
      harvesting:
        "Pinch/cut stems above a leaf node for cut-and-come-again branching; harvest before flower buds form for best flavor.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Genovese - Basil Seed",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/genovese-basil/genovese-basil-seed-911.html",
        },
        {
          tier: "blog",
          title: "How to Plant and Grow Genovese Basil",
          publisher: "Gardener's Path",
          url: "https://gardenerspath.com/plants/herbs/grow-genovese-basil/",
        },
      ],
    },
    {
      name: "Sweet Genovese",
      description:
        "An heirloom strain of Genovese basil with large, oval, slightly crinkled bright-green leaves and complex clove-lemon-licorice notes — essentially the same culinary type as Genovese with open-pollinated heirloom lineage.",
      starting: "Same as generic sweet basil — direct sow after soil warms or transplant seedlings.",
      growing:
        "Upright, bushy habit to 24-30in tall, 10-14in wide; same downy mildew exposure as other non-resistant Genovese types.",
      harvesting: "Harvest leaves before flowering for peak flavor; regular pinching keeps plants productive and bushy.",
      sources: [
        {
          tier: "seed-supplier",
          title: "'Italian Genovese' Heirloom Basil",
          publisher: "Renee's Garden",
          url: "https://www.reneesgarden.com/products/basil-organic-italian-genovese",
        },
        {
          tier: "blog",
          title: "Ocimum basilicum 'Sweet Genovese'",
          publisher: "BBC Gardeners' World Magazine",
          url: "https://www.gardenersworld.com/plants/ocimum-basilicum-sweet-genovese/",
        },
      ],
    },
    {
      name: "Italian Large Leaf",
      description:
        "A Genovese-type strain selected for exceptionally large leaves (up to 4in long) for higher per-plant yield; considered essential for true Neapolitan-style pesto.",
      starting: "No difference from generic sweet basil starting guidance.",
      growing:
        "Grows 24-30in tall and is slow to bolt compared to average sweet basil; non-DMR strains carry the same downy mildew risk as standard Genovese.",
      harvesting: "Large leaf size makes it easy to harvest big batches at once for pesto-making; pick before flower spikes emerge.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Large Leaf Italian Organic Basil Seeds",
          publisher: "Park Seed",
          url: "https://www.parkseed.com/products/large-leaf-italian-organic-basil-seeds-05865",
        },
        {
          tier: "seed-supplier",
          title: "Italian Large Leaf Basil Seed",
          publisher: "Harris Seeds",
          url: "https://www.harrisseeds.com/products/11937-basil-italian-large-leaf",
        },
      ],
    },
    {
      name: "Thai Basil",
      description:
        "An Asian type (often the 'Sweet Thai' strain) with narrower, purple-stemmed leaves and a distinct anise/clove/licorice flavor, spicier and stronger than sweet basil; used in Thai/Vietnamese cooking.",
      daysToMaturity: { min: 60, max: 70 },
      starting: "Same warm-soil germination needs as sweet basil; commonly direct-sown or transplanted.",
      growing:
        "Plants are slightly smaller (12-18in) than sweet basil types and thrive in warm, humid conditions, tolerating partial shade better than sweet basil.",
      harvesting: "Purple flower spikes are ornamental and edible; harvest leaves regularly to delay flowering and keep flavor from turning bitter.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Sweet Thai Basil Seeds",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/sweet-thai-basil-seed-945.html",
        },
        {
          tier: "university-extension",
          title: "Spice Up Your Life: A Beginners Guide to Growing Basil",
          publisher: "UF/IFAS Extension Pasco County",
          url: "https://blogs.ifas.ufl.edu/pascoco/2024/03/08/spice-up-your-life-a-beginners-guide-to-growing-basil/",
        },
      ],
    },
    {
      name: "Holy Basil (Tulsi)",
      description:
        "A distinct species (Ocimum tenuiflorum), not true sweet basil — used for tea/medicinal purposes as much as cooking; strongly clove-scented, the most heat-loving basil type.",
      daysToMaturity: { min: 60, max: 80 },
      starting:
        "Needs light to germinate — surface-sow, don't bury deeply; wants warmer soil (75-80°F) than sweet basil, commonly started 6-12 weeks before last frost indoors.",
      growing: "Thrives in hot, humid conditions that stress sweet basil — a good candidate where regional heat limits other basils.",
      harvesting: "Harvested for both leaf and flower-spike tea use; less commonly used fresh in Italian-style cooking than sweet/Thai basil.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Holy Basil Seeds (Ocimum tenuiflorum)",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/holy-basil/holy-basil-seed-898.html",
        },
        {
          tier: "blog",
          title: "Holy Basil Growing Guide",
          publisher: "HOSS",
          url: "https://growhoss.com/blogs/growing-guides/holy-basil",
        },
      ],
    },
    {
      name: "Lemon Basil",
      description:
        "A citrus-scented type (Ocimum × citriodorum group) with small, bright-green leaves combining lemon and basil flavor; compact plants distinct from sweet Genovese types.",
      daysToMaturity: { min: 60, max: 90 },
      starting: "Same warm-germination needs as other basils; no unusual depth requirements.",
      growing: "Compact habit, typically 12-18in tall — well suited to containers.",
      harvesting: "Leaves are smaller than sweet basil, so harvest by cutting whole stems rather than picking individual leaves; flowers are edible and citrus-scented.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Lemon Basil Seeds",
          publisher: "Urban Farmer",
          url: "https://www.ufseeds.com/product/lemon-basil-seeds---1-ounce/BALE-1oz.html",
        },
        {
          tier: "seed-supplier",
          title: "Lemon Basil Seeds & Plant",
          publisher: "Burpee",
          url: "https://www.burpee.com/basil-lemon-prod000455.html",
        },
      ],
    },
    {
      name: "Lime Basil",
      description:
        "Ocimum americanum type with smooth green leaves and a bright, peppery-lime flavor from citral oil; native to tropical Africa/Southeast Asia, less common than lemon basil.",
      daysToMaturity: { min: 55, max: 90 },
      starting: "Same general basil starting guidance; no notable quirks reported.",
      growing: "A hairy annual growing to about 16in (40cm); similar heat-loving habit to other Asian basil types.",
      harvesting: "Harvest leaves young for the brightest citrus flavor; flowers (white/purple, in clusters) are also usable.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Lime Basil",
          publisher: "Pinetree Garden Seeds",
          url: "https://www.superseeds.com/products/lime-basil",
        },
        {
          tier: "blog",
          title: "Lime Basil (Ocimum americanum): Benefits, Challenges, and Uses",
          publisher: "Gardenia.net",
          url: "https://www.gardenia.net/plant/ocimum-basilicum-lime",
        },
      ],
    },
    {
      name: "Purple Ruffles",
      description:
        "An AAS-winning ornamental/culinary basil with large, heavily ruffled, fringed dark-purple leaves and pink-purple flower spikes; Genovese-style flavor with hints of spice and licorice.",
      daysToMaturity: { min: 70, max: 85 },
      starting: "Same as generic basil; no special depth or cold-sensitivity notes beyond standard warm-germination needs.",
      growing:
        "Larger plant than standard opal basil (18-24in); showy flower stalks make it popular as an ornamental border plant as well as culinary herb.",
      harvesting: "Leaves usable as garnish for salads, soups, pasta, or cocktails; harvest before heavy flowering for best leaf texture.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Purple Ruffles, Basil Seeds",
          publisher: "Urban Farmer",
          url: "https://www.ufseeds.com/product/purple-ruffles-basil-seeds/BAPR.html",
        },
        {
          tier: "seed-supplier",
          title: "Basil, Purple Ruffles",
          publisher: "The Gardener's Workshop",
          url: "https://thegardenersworkshop.com/products/basil-purple-ruffles",
        },
      ],
    },
    {
      name: "Dark Opal",
      description:
        "A historic purple sweet-basil cultivar (1962 AAS Edible-Vegetable Winner) bred at the University of Connecticut from Turkish wild basil; violet-purple leaves and pink flowers, licorice flavor good with tomatoes and infused vinegars.",
      starting: "No differences from generic sweet basil starting guidance reported.",
      growing:
        "Small-to-medium leaves (3-7cm); some trials have shown resistance to downy mildew relative to plain green sweet basil, though it is not a dedicated DMR hybrid.",
      harvesting: "Leaves and color are prized for flavoring vinegars; harvest before flowering to keep leaf color and flavor at peak.",
      sources: [
        {
          tier: "university-extension",
          title: "Dark opal basil (background/AAS history)",
          publisher: "All-America Selections",
          url: "https://all-americaselections.org/product/basil-dark-opal/",
        },
      ],
    },
    {
      name: "Red Rubin",
      description:
        "An improved, more color-stable and larger-leaved successor to Dark Opal; deep burgundy-red flat oval leaves (3-4in) with bolder, slightly spicy flavor.",
      daysToMaturity: { min: 60, max: 75 },
      starting: "Standard basil starting guidance applies.",
      growing: "Forms compact, bushy plants 18-24in tall; heat-loving and holds its red color better through the season than Dark Opal.",
      harvesting: "Usable leaves in 30-40 days for cut-and-come-again harvest even before full maturity; color intensity is part of the culinary appeal for garnish/vinegar use.",
      sources: [
        {
          tier: "blog",
          title: "How to Grow and Care for Red Rubin Basil",
          publisher: "Gardener's Path",
          url: "https://gardenerspath.com/plants/herbs/grow-red-rubin-basil/",
        },
        {
          tier: "seed-supplier",
          title: "Red Rubin - Basil Seed",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/purple-basil/red-rubin-basil-seed-924.html",
        },
      ],
    },
    {
      name: "Spicy Globe",
      description:
        "An old, naturally dwarf/mounding basil forming a tidy 6-9in dome of small, strongly aromatic, spicy-sweet leaves; also sold as \"Boxwood\" type in some catalogs.",
      daysToMaturity: { min: 60, max: 85 },
      starting: "Transplant one seedling per 6in pot or 3 per 12in pot if container-growing; otherwise standard basil starting applies.",
      growing: "Naturally rounded, stays compact (12-18in diameter) without pruning — a strong pick for containers, patios, and small raised beds.",
      harvesting: "Small leaf size means shear/trim the whole mound for harvest rather than picking individual leaves.",
      sources: [
        {
          tier: "seed-supplier",
          title: "'Spicy Globe' Heirloom Container Basil",
          publisher: "Renee's Garden",
          url: "https://www.reneesgarden.com/products/basil-container-organic-spicy-globe",
        },
        {
          tier: "blog",
          title: "How to Plant, Grow, and Care For 'Spicy Globe' Basil",
          publisher: "Epic Gardening",
          url: "https://www.epicgardening.com/spicy-globe-basil/",
        },
      ],
    },
    {
      name: "Boxwood Basil",
      description:
        "A very compact, dense mounding variety with tiny but flavorful leaves, resembling a boxwood shrub; produces white-lavender flower spikes in midsummer.",
      starting: "No differences from generic basil starting guidance.",
      growing: "Reaches only about 12in tall and wide — ideal for windowsills, mixed containers, and small herb gardens where space is limited.",
      harvesting: "Because leaves are small, harvest by trimming whole stem tips rather than individual leaf-picking; regular trimming maintains the tight mounded shape.",
      sources: [
        {
          tier: "blog",
          title: "Boxwood Basil Plant Info: Tips For Growing Boxwood Basil Herbs",
          publisher: "Gardening Know How",
          url: "https://www.gardeningknowhow.com/edible/herbs/basil/growing-boxwood-basil-plants.htm",
        },
      ],
    },
    {
      name: "Pesto Perpetuo",
      description:
        "A patented, non-flowering, variegated basil (lime-green leaves with creamy-white margins) discovered in 2004 as a sport of 'Lesbos' basil; the first variegated basil, with a hint-of-lemon flavor alongside classic basil taste.",
      starting: "Typically propagated as a nursery transplant/cutting rather than started from seed, since it does not flower/set seed reliably.",
      growing:
        "Naturally columnar habit reaching 30-36in tall but under 12in wide; because it never flowers, it holds shape and stays productive without deadheading all season.",
      harvesting: "Continuous cut-and-come-again harvest all season since no flowering interrupts leaf production; snip stem tips regularly.",
      sources: [
        {
          tier: "blog",
          title: "Ocimum × citriodorum 'Pesto Perpetuo'",
          publisher: "Missouri Botanical Garden Plant Finder",
          url: "https://www.missouribotanicalgarden.org/PlantFinder/PlantFinderDetails.aspx?kempercode=d655",
        },
        {
          tier: "seed-supplier",
          title: "Basil, Pesto Perpetuo",
          publisher: "Burpee",
          url: "https://www.burpee.com/basil-pesto-perpetuo-prod000457.html",
        },
      ],
    },
    {
      name: "Prospera DMR",
      description:
        "A breakthrough F1 hybrid line (Genovese, Compact, and Italian Large Leaf sub-types) bred with genetic resistance to both downy mildew and Fusarium; flavor and aroma closely match standard Genovese basil.",
      starting: "Standard basil starting guidance; sold as F1 seed (non-savable).",
      growing:
        "Directly relevant to humid-climate downy-mildew pressure — listed among the newer highly-suppressive resistant varieties, particularly recommended for humid climates; the Compact sub-type is especially good for pot production.",
      harvesting: "Harvest as with standard Genovese types; resistance reduces but does not eliminate the need for fungicide backup in high-pressure seasons.",
      sources: [
        {
          tier: "university-extension",
          title: "Basil Downy Mildew Developing on Resistant Varieties",
          publisher: "Cornell Vegetable Program / Cornell Cooperative Extension",
          url: "https://www.vegetables.cornell.edu/2021/08/08/basil-downy-mildew-developing-on-resistant-varieties/",
        },
        {
          tier: "seed-supplier",
          title: "Prospera DMR (CG1) - Organic (F1) Basil Seed",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/genovese-basil/prospera-dmr-cg1-organic-f1-basil-seed-3597G.html",
        },
      ],
    },
    {
      name: "Rutgers Devotion DMR",
      description:
        "One of four downy-mildew-resistant sweet basil varieties (with Obsession, Passion, Thunderstruck) released by the Rutgers NJAES breeding program after a decade of traditional (non-GMO) crossbreeding; Genovese-type flavor and appearance.",
      starting: "Standard basil starting guidance; F1/bred seed.",
      growing:
        "Compact but highly productive, 18-20in tall, large cupped medium-green leaves; growers have begun seeing downy mildew develop on it in some regions as the pathogen evolves, so pair with good airflow/fungicide practice in high-pressure climates.",
      harvesting: "Harvest as with standard Genovese basil; frequent cutting keeps plants productive.",
      sources: [
        {
          tier: "university-extension",
          title: "Basil Downy Mildew Developing on Resistant Varieties",
          publisher: "Cornell Vegetable Program",
          url: "https://www.vegetables.cornell.edu/2021/08/08/basil-downy-mildew-developing-on-resistant-varieties/",
        },
        {
          tier: "university-extension",
          title: "Rutgers NJAES Team Releases New Varieties of Downy Mildew Resistant Sweet Basil",
          publisher: "Rutgers University (SEBS/NJAES)",
          url: "https://sebsnjaesnews.rutgers.edu/2018/07/rutgers-njaes-team-releases-new-varieties-of-downy-mildew-resistant-sweet-basil/",
        },
      ],
    },
    {
      name: "Amazel Basil",
      description:
        "A sterile hybrid (does not set seed) Italian sweet basil bred in part at the University of Florida, marketed as the first basil highly resistant to downy mildew; large, vigorous plant.",
      starting: "Not available from seed — propagated only from cuttings/nursery starts, unlike every other basil on this list.",
      growing: "Because it's sterile it never diverts energy to flowering/seed, so it keeps producing leaves all season; reaches 20-36in tall and 12-24in wide.",
      harvesting: "Harvest by cutting stems just above two new lateral branches to promote lush regrowth — the more it's harvested, the better it performs.",
      sources: [
        {
          tier: "university-extension",
          title: "Spice Up Your Life: A Beginners Guide to Growing Basil (Amazel Basil background)",
          publisher: "UF/IFAS Extension",
          url: "https://blogs.ifas.ufl.edu/pascoco/2024/03/08/spice-up-your-life-a-beginners-guide-to-growing-basil/",
        },
        {
          tier: "blog",
          title: "How to Grow Disease-Resistant Basil: DIY Herb Garden Tips",
          publisher: "Proven Winners",
          url: "https://www.provenwinners.com/amazel-basil",
        },
      ],
    },
    {
      name: "Everleaf Genovese",
      description:
        "A compact, slow-to-bolt Genovese basil bred for extended harvest window and intermediate downy mildew/Fusarium resistance; classic Genovese flavor and aroma.",
      starting: "Standard basil starting guidance.",
      growing:
        "Bolts up to 8 weeks later than most Genovese varieties, meaningfully lengthening the harvest window in hot climates; downy mildew resistance rated \"moderate\" — less resistant than Prospera/Rutgers DMR lines or Amazel.",
      harvesting: "2-3in glossy cupped leaves; because it resists bolting so long, later-season harvests stay higher quality than standard Genovese.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Video: 'Everleaf' Basil | Extremely slow-to-bolt, compact Genovese basil",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/growers-library/herbs/basil/video-v144.html",
        },
        {
          tier: "university-extension",
          title: "Basil Downy Mildew Developing on Resistant Varieties",
          publisher: "Cornell Vegetable Program",
          url: "https://www.vegetables.cornell.edu/2021/08/08/basil-downy-mildew-developing-on-resistant-varieties/",
        },
      ],
    },
    {
      name: "Cinnamon Basil",
      description:
        "A narrow-leaved, dark-purple-stemmed basil (sometimes called Mexican Spice Basil) containing methyl cinnamate, giving a distinct warm cinnamon note plus mint/anise undertones; pink flowers July-September.",
      daysToMaturity: { min: 60, max: 85 },
      starting: "Standard basil starting guidance.",
      growing: "Grows taller than many basils, 18-30in; no unusual disease notes reported beyond standard basil susceptibilities.",
      harvesting: "Harvest before flowering for the strongest cinnamon-spice flavor; good for teas and baked goods in addition to savory use.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Cinnamon Basil Seeds",
          publisher: "Baker Creek Heirloom Seeds (Rare Seeds)",
          url: "https://www.rareseeds.com/basil-cinnamon",
        },
      ],
    },
    {
      name: "Mrs. Burns' Lemon",
      description: "A named heirloom lemon-basil selection with bright green 2.5in leaves, white blooms, and an intense lemon-basil flavor stronger than generic lemon basil.",
      daysToMaturity: { min: 60, max: 70 },
      starting: "Standard basil starting guidance; space plants 9-12in apart.",
      growing: "Reaches 20-24in tall in full sun; no special disease notes beyond generic basil susceptibilities.",
      harvesting: "Flowers are edible and usable in the same recipes as the leaves — garnish for drinks, salads, soups, desserts.",
      sources: [
        {
          tier: "seed-supplier",
          title: "Mrs. Burns' Lemon - Heirloom Basil Seed",
          publisher: "Johnny's Selected Seeds",
          url: "https://www.johnnyseeds.com/herbs/basil/citrus-basil/mrs.-burns-lemon-basil-seed-774.html",
        },
        {
          tier: "seed-supplier",
          title: "'Mrs. Burns' Lemon Basil' Heirloom Herbs",
          publisher: "Renee's Garden",
          url: "https://www.reneesgarden.com/products/basil-mrs-burns-lemon",
        },
      ],
    },
    {
      name: "African Blue Basil",
      description:
        "A sterile perennial hybrid (Ocimum kilimandscharicum × basilicum 'Dark Opal') that arose spontaneously in Ohio in 1982; camphor-scented purple-green leaves, grown mainly ornamentally and for pollinators rather than as a primary culinary basil.",
      starting: "Cannot be grown from seed — must be propagated from cuttings, a major departure from every other basil on this list.",
      growing:
        "Perennial (woody shrub habit) in USDA zones 10-11; grown as an annual (or overwintered indoors) elsewhere; blooms almost continuously all season because it never sets seed, making it an exceptional pollinator plant.",
      harvesting: "Leaves are edible but more strongly camphor-scented than culinary basils; primarily harvested/grown for its long-blooming flower spikes.",
      sources: [
        {
          tier: "university-extension",
          title: "Ocimum kilimandscharicum x basilicum (African Blue Basil)",
          publisher: "NC State Extension Gardener Plant Toolbox",
          url: "https://plants.ces.ncsu.edu/plants/ocimum-kilimandscharicum-x-basilicum/",
        },
        {
          tier: "blog",
          title: "African Blue Basil: Long-Blooming and Beloved by Pollinators",
          publisher: "Gardenista",
          url: "https://www.gardenista.com/posts/african-blue-basil/",
        },
      ],
    },
  ],
} satisfies Plant;

export default basil;
