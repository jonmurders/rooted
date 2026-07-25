import type { Plant } from "@/types/plant";

const mint = {
  id: "mint",
  commonName: "Mint",
  scientificName: "Mentha spp.",
  category: "herb",
  zones: { min: 3, max: 9 },
  sun: "partial-sun",
  soil: "Moist, rich soil — tolerates a wide range",
  spacingInches: 18,
  daysToMaturity: { min: 60, max: 90 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Prefers consistently moist soil; wilts visibly when dry but recovers quickly once watered.",
  },
  temperature: {
    frostThresholdF: 20,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -1,
      latestWeeksFromFrost: 10,
      method: "transplant",
    },
  ],
  description:
    "A vigorous, spreading perennial herb — strongly recommended for container growing to prevent it taking over a bed.",
  careNotes: [
    "Grow in a container or sunken barrier — mint spreads aggressively by runners.",
    "Foliage dies back at the frost threshold above, but the root/crown survives far colder winters than that number suggests — expect it back reliably each spring within its zone range.",
    "Cut back hard mid-season to refresh growth and flavor.",
  ],
  sources: [
    {
      title: "Plant Mint This Summer",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/profiles/lfields/articles/page1564587316320",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Spearmint, peppermint, and orange mint are all hardy perennials here; in partial shade, mint keeps growing until November/December in north Louisiana since shade buffers it from early frosts. Pot culture is recommended unless garden space is large.",
      source: {
        title: "Plant Mint This Summer",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/profiles/lfields/articles/page1564587316320",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Mint is quite winter hardy here — a sunken, bottomless bucket or unglazed clay pot left in the ground over winter is the standard way to contain its spread while it persists as a garden perennial.",
      source: {
        title: "Growing herbs in home gardens",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/yard-and-garden/growing-herbs",
      },
    },
    {
      region: "Cool Maritime Pacific NW",
      note: "Rust (Puccinia spp.) is a recurring mint disease in the damp maritime Northwest — manage by removing affected stems/leaves rather than relying on fungicide.",
      source: {
        title: "Growing Herbs",
        publisher: "Oregon State University Extension",
        url: "https://extension.oregonstate.edu/sites/extd8/files/documents/12281/growingherbs.pdf",
      },
    },
  ],
  varieties: [
    {
      name: "Peppermint (Mentha × piperita)",
      description: "A natural hybrid of watermint and spearmint with dark green, serrated, fuzzy leaves and a strong menthol flavor.",
      starting: "Propagated by division or stem cuttings since it's a hybrid and doesn't come true from seed; commercial seed typically germinates in 10-15 days but yields variable plants.",
      growing: "Hardy zones 3-9; spreads aggressively via rhizomes and is considered invasive if planted directly in garden beds — best contained in pots or with root barriers.",
      harvesting: "Menthol content increases through the season, so later-season harvests yield the deepest peppermint flavor; harvest in morning before flowering for peak oil concentration.",
      sources: [
        { tier: "blog", title: "17 Types of Mint: How to Grow Different Types of Mint", publisher: "MasterClass", url: "https://www.masterclass.com/articles/types-of-mint" },
        { tier: "blog", title: "When and How to Harvest Mint for Maximum Flavor", publisher: "Cultivated Earth", url: "https://cultivatedearth.com/en/herbs/harvest-mint/" },
      ],
    },
    {
      name: "Spearmint (Mentha spicata)",
      description: "Upright, fast-spreading species with almost hairless, pointed leaves attached with a very short or no petiole; sweeter and milder than peppermint.",
      starting: "Best propagated by division of rhizomes or stem cuttings; seed available but plants readily cross-pollinate so seed-grown plants are variable. Common Mint seed germinates in 10-14 days at 72-75°F.",
      growing: "Upright perennial thriving in full sun in rich, moist, well-drained soil; grows quickly to 1-2 ft high and wide.",
      harvesting: "Spearmint's flavor compound (carvone) peaks earlier in the season, making mid-summer (around mid-July) the optimal harvest window, before flowering.",
      sources: [
        { tier: "university-extension", title: "Garden Mint - Mentha spicata", publisher: "NC State Extension Gardener Plant Toolbox", url: "https://plants.ces.ncsu.edu/plants/mentha-spicata/common-name/garden-mint/" },
        { tier: "seed-supplier", title: "Common Mint Seeds", publisher: "Johnny's Selected Seeds", url: "https://www.johnnyseeds.com/herbs/mint/common-mint-herb-seed-831.html" },
      ],
    },
    {
      name: "Kentucky Colonel (Spearmint)",
      description: "A standout spearmint cultivar with large, crinkled leaves, robust growth, and a clean, sweet flavor; the classic mint used for mint juleps.",
      starting: "Propagated by division/cuttings, not typically from seed, to preserve the large-leaf trait.",
      growing: "Grows about 24 in tall with a 20 in spread; vigorous rhizomes make it fast-spreading, best grown in pots or bordered beds; produces light lavender-pink flower spikes in summer.",
      harvesting: "Harvest leaves as needed through the growing season; valued for teas, desserts, sauces, mint juleps, and jellies.",
      sources: [
        { tier: "seed-supplier", title: "Kentucky Colonel Mint Plant", publisher: "Burpee", url: "https://www.burpee.com/mint-kentucky-colonel-prod500813.html" },
        { tier: "seed-supplier", title: "Kentucky Colonel Spearmint", publisher: "Patuxent Nursery", url: "https://patuxentnursery.com/product/kentucky-colonel-spearmint/" },
      ],
    },
    {
      name: "Chocolate Mint",
      description: "A peppermint cultivar/cross with orange mint noted for dark brown-red stems and a subtle chocolate-like aroma layered over a minty flavor.",
      starting: "Propagated by division or cuttings, as with most named mint cultivars.",
      growing: "Hardy zones 3-9; herbaceous perennial with a spreading, ground-hugging habit reaching up to 3 ft; susceptible to mint rust — space plants 12-18 in apart for airflow and water at the base.",
      harvesting: "Harvest leaves before flowering for best flavor; can be cut back hard if rust appears.",
      sources: [
        { tier: "blog", title: "Chocolate Mint — Growing Guide, Companion Plants & Care Tips", publisher: "PlotMyGarden", url: "https://plotmygarden.com/en/plants/mint-chocolate" },
        { tier: "blog", title: "How to Grow and Use Chocolate Mint", publisher: "Gardener's Path", url: "https://gardenerspath.com/plants/herbs/grow-chocolate-mint/" },
      ],
    },
    {
      name: "Apple Mint (Mentha suaveolens)",
      description: "Also called wooly mint, with oblong, nearly oval, hairy-topped leaves and a fruity, apple-like flavor.",
      starting: "Propagated by division or cuttings; species can self-seed readily.",
      growing: "Hardy zones 5-9 (survivable in zone 4 with winter protection); dried leaves are popular in fruit-themed potpourri.",
      harvesting: "Harvest leaves fresh for tea, jelly, or fruit salads; best flavor before flowering.",
      sources: [
        { tier: "blog", title: "Mint Plant Varieties: Types Of Mint For The Garden", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/herbs/mint/mint-plant-varieties.htm" },
      ],
    },
    {
      name: "Pineapple Mint (Mentha suaveolens 'Variegata')",
      description: "A variegated cultivar of apple mint with lime-green, cream-edged, crinkled and furry leaves; sharp initial taste fading to light fruity flavor.",
      starting: "Propagated by division/cuttings to maintain variegation, since variegated sports don't come true from seed.",
      growing: "Best in full sun in cool climates (needs afternoon shade in hot climates or leaves scorch); fast spreader, best contained in a pot; hardy zones 5-9.",
      harvesting: "Leaves used fresh in tea, jelly, fruit salads, or as a colorful garnish.",
      sources: [
        { tier: "university-extension", title: "Pineapple Mint, Mentha suaveolens 'Variegata'", publisher: "University of Wisconsin–Madison Horticulture Extension", url: "https://hort.extension.wisc.edu/articles/pineapple-mint-mentha-suaveolens-variegata/" },
        { tier: "blog", title: "Pineapple Mint – Herb of the Month", publisher: "The Herb Society of America Blog", url: "https://blog.herbsociety.org/pineapple-mint-herb-of-the-month/" },
      ],
    },
    {
      name: "Orange Mint / Bergamot Mint (Mentha × piperita citrata)",
      description: "A citrata-type peppermint hybrid with a light orange fragrance and citrusy flavor reminiscent of bergamot.",
      starting: "Propagated by division or cuttings.",
      growing: "Spreads via rhizomes and can become invasive; container growing is advisable to control spread.",
      harvesting: "Leaves used to flavor lemonade and cocktails; harvest before flowering for best aromatic oils.",
      sources: [
        { tier: "blog", title: "Types of Mint: 15 Varieties Worth Growing", publisher: "Randy Lemmon", url: "https://randylemmon.com/types-of-mint-15-varieties-worth-growing/" },
      ],
    },
    {
      name: "Moroccan Mint (Mentha spicata var. crispa 'Moroccan')",
      description: "A spearmint-type cultivar with a crisp mint flavor, the classic variety used to brew Moroccan mint tea.",
      starting: "Propagated by division/cuttings.",
      growing: "Grows 30-60 cm tall with lanceolate, jagged-edged leaves; pale purple edible flowers bloom in late summer/early fall; spreads quickly, container growing recommended.",
      harvesting: "Leaves harvested fresh for traditional Moroccan mint tea; flowers are edible too.",
      sources: [
        { tier: "blog", title: "10 Refreshing Mint Varieties to Grow", publisher: "BBC Gardeners' World Magazine", url: "https://www.gardenersworld.com/plants/10-varieties-of-mint-to-grow/" },
        { tier: "blog", title: "Moroccan Mint Information and Facts", publisher: "Specialty Produce", url: "https://specialtyproduce.com/produce/Moroccan_Mint_11987.php" },
      ],
    },
    {
      name: "Banana Mint (Mentha arvensis 'Banana')",
      description: "A low-growing cornmint cultivar with a scent and taste resembling concentrated banana flavoring (isoamyl acetate).",
      starting: "Does not reliably grow from seed; propagate by purchasing a nursery plant or rooting cuttings/divisions from an established plant.",
      growing: "Creeping, low form (about 18 in tall); more or less constantly in bloom during the growing season.",
      harvesting: "Harvest leaves for their distinctive banana aroma/flavor in teas and garnishes.",
      sources: [
        { tier: "blog", title: "19 Mint Varieties For Your Edible Garden", publisher: "Epic Gardening", url: "https://www.epicgardening.com/mint-varieties/" },
      ],
    },
    {
      name: "Ginger Mint (Mentha × gracilis)",
      description: "A natural hybrid of spearmint and cornmint, typically with variegated light green leaves streaked yellow and reddish stems, adding a spicy spearmint-like note.",
      starting: "Propagated by division/cuttings to maintain variegation.",
      growing: "Spreads by rhizomes like other mints; pairs well in mixed plantings with fruity mint varieties.",
      harvesting: "Leaves harvested fresh; often blended with other mints for complex flavor profiles.",
      sources: [
        { tier: "blog", title: "Garden Obsession: Fruit-Flavored Mints", publisher: "Hobby Farms", url: "https://www.hobbyfarms.com/garden-obsession-fruit-flavored-mints/" },
        { tier: "blog", title: "35 Types of Mint Plants (Varieties Worth Growing, With Pictures)", publisher: "Citycacti", url: "https://www.citycacti.com/types-of-mint-plants/" },
      ],
    },
    {
      name: "Grapefruit Mint (Mentha × piperita f. citrata 'Grapefruit')",
      description: "A citrata-type mint with large, downy leaves and a sharp citrus (grapefruit) flavor.",
      starting: "Propagated by division/cuttings.",
      growing: "Upright habit to about 2 ft; needs frequent pinching to prevent legginess; unusually cold-tolerant for a citrus mint, surviving down to 25°F; perennial zones 6-11.",
      harvesting: "Leaves harvested fresh for citrus-flavored teas, cocktails, and garnishes.",
      sources: [
        { tier: "blog", title: "Exploring 20 unique mint varieties", publisher: "Veramint", url: "https://www.veramint.co.uk/blogs/mint-varieties/" },
        { tier: "blog", title: "Grapefruit Mint Plant - Tips For Growing Grapefruit Mint", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/herbs/mint/grapefruit-mint-info.htm" },
      ],
    },
    {
      name: "Corsican Mint (Mentha requienii)",
      description: "The smallest mint species, forming a moss-like mat of tiny oval leaves with a very strong mint flavor; often used in breath mints and sore-throat remedies.",
      starting: "Propagated by division; too small/delicate for reliable seed starting in most home settings.",
      growing: "Extremely low-growing (creeping mat, under an inch tall), used as a bedding or bordering groundcover.",
      harvesting: "Foliage harvested sparingly given its diminutive size; more often used ornamentally as a lawn substitute or path filler.",
      sources: [
        { tier: "blog", title: "Types of mint: an overview", publisher: "Plantura", url: "https://plantura.garden/uk/herbs/mint/types-of-mint" },
        { tier: "blog", title: "17 Types of Mint: How to Grow Different Types of Mint", publisher: "MasterClass", url: "https://www.masterclass.com/articles/types-of-mint" },
      ],
    },
    {
      name: "Mojito Mint / Cuban Mint (Mentha × villosa)",
      description: "The authentic mint used in mojito cocktails; milder than spearmint with citrus notes that pair well with lime.",
      starting: "Propagated by division/cuttings.",
      growing: "Vigorous spreading habit typical of mint hybrids; grown widely for bar/cocktail garnish gardens.",
      harvesting: "Leaves picked fresh for mojitos and other cocktails; best harvested before flowering for peak flavor.",
      sources: [
        { tier: "blog", title: "Mojito Mint vs Spearmint: 5 Differences", publisher: "Tabetha's Table", url: "https://tabethastable.com/mojito-mint-vs-spearmint/" },
        { tier: "blog", title: "Homegrown Mints for Cooling Libations: Mojitos and Juleps", publisher: "Fafard", url: "https://fafard.com/homegrown-mints-for-cooling-libations-mojitos-and-juleps/" },
      ],
    },
    {
      name: "Water Mint (Mentha aquatica)",
      description: "A vigorous perennial with purple stems and ovate, serrated dark green leaves, native to wetlands across Africa, Asia, and Europe.",
      starting: "Propagated by division; naturally spreads by rhizomes in wet ground.",
      growing: "Hardy roughly zones 8-11; best grown at pond edges, as a marginal aquatic plant, or in consistently boggy soil in full sun to partial shade; produces pinkish-purple flower spikes in mid-to-late summer.",
      harvesting: "Leaves have a strong, refreshing flavor used in teas, sauces, and salads.",
      sources: [
        { tier: "blog", title: "Mentha Aquatica - Information About Growing Watermint", publisher: "Gardening Know How", url: "https://www.gardeningknowhow.com/edible/herbs/mint/growing-watermint.htm" },
        { tier: "blog", title: "Water Mint (Mentha aquatica)", publisher: "Gardenia.net", url: "https://www.gardenia.net/plant/mentha-aquatica" },
      ],
    },
    {
      name: "Lime Mint (Mentha × piperita f. citrata 'Lime')",
      description: "A citrus-scented citrata mint with a sharper, tarter edge than orange or grapefruit mint.",
      starting: "Propagated by division/cuttings.",
      growing: "Similar spreading rhizomatous habit to other citrata mints; benefits from container growing to control spread.",
      harvesting: "Leaves harvested fresh, especially popular for mojitos and other lime-based cocktails.",
      sources: [
        { tier: "blog", title: "Choosing the Right Mint for your Cocktails", publisher: "Bevvy", url: "https://bevvy.co/articles/choosing-the-right-mint-for-your-cocktails/321" },
        { tier: "blog", title: "Best Guide to 54 Types of Mint to Grow with Scent Profiles", publisher: "Shovel and Crunch", url: "https://shovelandcrunch.com/best-guide-to-54-types-of-mint-to-grow-with-scent-profiles/" },
      ],
    },
    {
      name: "Black Mitcham (Peppermint)",
      description: "A historic English peppermint cultivar (dating to the 1750s from Mitcham, Surrey) with dark green, red-tinged leaves and black stems; considered one of the best-flavored, most highly mentholated peppermints.",
      starting: "Propagated by division/rhizome cuttings, as with all peppermint hybrids.",
      growing: "Grows up to about 80 cm; very high-yielding but susceptible to mint rust (Puccinia menthae).",
      harvesting: "Grown commercially and by home gardeners for its intense peppermint aroma; harvest before or at early flowering for peak menthol.",
      sources: [
        { tier: "blog", title: "Mentha × piperita 'Black Mitcham'", publisher: "RHS", url: "https://www.rhs.org.uk/plants/140130/mentha-piperita-black-mitcham/details" },
        { tier: "blog", title: "Peppermint varieties: chocolate mint & more", publisher: "Plantura", url: "https://plantura.garden/uk/herbs/peppermint/peppermint-varieties" },
      ],
    },
    {
      name: "Basil Mint",
      description: "A piperita cultivar carrying a subtle basil undertone layered over standard peppermint flavor.",
      starting: "Propagated by division/cuttings.",
      growing: "Grows similarly to other peppermint-type hybrids, with rhizomatous spread.",
      harvesting: "Leaves used fresh where a mint-basil flavor complexity is desired in cooking or drinks.",
      sources: [
        { tier: "blog", title: "Peppermint varieties: chocolate mint & more", publisher: "Plantura", url: "https://plantura.garden/uk/herbs/peppermint/peppermint-varieties" },
      ],
    },
    {
      name: "Curly Mint (Mentha spicata 'Crispa')",
      description: "A spearmint cultivar with crinkled/curly, sweet and fragrant leaves.",
      starting: "Propagated by division/cuttings.",
      growing: "Similar upright spreading habit to standard spearmint.",
      harvesting: "Leaves harvested fresh for garnish and culinary use, valued for both flavor and decorative curled texture.",
      sources: [
        { tier: "blog", title: "Peppermint varieties: chocolate mint & more", publisher: "Plantura", url: "https://plantura.garden/uk/herbs/peppermint/peppermint-varieties" },
      ],
    },
    {
      name: "Lavender Mint",
      description: "A mint hybrid blending cool menthol flavor upfront with a soft floral, lavender-like finish.",
      starting: "Propagated by division/cuttings.",
      growing: "Grows with the same general rhizomatous spreading habit as other mint hybrids.",
      harvesting: "Leaves harvested fresh, popular for teas and floral-mint flavor pairings.",
      sources: [
        { tier: "blog", title: "37 Types of Mint You Can Grow at Home: Complete Care Guide", publisher: "Harvest Savvy", url: "https://harvestsavvy.com/types-of-mint/" },
      ],
    },
    {
      name: "Pennyroyal (Mentha pulegium)",
      description: "A low-growing mint species long used as a groundcover and historically as an insect repellent. Not for culinary use — contains pulegone, which is toxic to the liver and to pets, and is an abortifacient.",
      starting: "Propagated by division or cuttings; also grown from seed as groundcover plantings.",
      growing: "Grows 6-12 in tall and spreads 3-6 ft wide; tolerates poor soil, performs best in moist soil with full sun to partial shade; can be invasive like other mints.",
      harvesting: "Not harvested for eating — grown ornamentally/as groundcover or clipped back to control spread.",
      sources: [
        { tier: "blog", title: "How to Grow & Plant European Pennyroyal (Mentha pulegium)", publisher: "Pond Informer", url: "https://pondinformer.com/pennyroyal-mentha-pulegium/" },
        { tier: "blog", title: "Reconsider Using Pennyroyal To Repel Flies If You Have Pets", publisher: "House Digest", url: "https://www.housedigest.com/1597951/reconsider-fly-pest-repellant-plant-pennyroyal-flower-toxic-pets/" },
      ],
    },
  ],
} satisfies Plant;

export default mint;
