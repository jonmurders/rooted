import type { Plant } from "@/types/plant";

const strawberry = {
  id: "strawberry",
  commonName: "Strawberry",
  scientificName: "Fragaria × ananassa",
  category: "fruit",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Rich, well-drained, slightly acidic soil",
  spacingInches: 12,
  daysToMaturity: { min: 365, max: 425 },
  water: {
    intervalDays: 2,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture, especially while fruiting.",
  },
  temperature: {
    frostThresholdF: 30,
    heatStressThresholdF: 85,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 4,
      method: "transplant",
    },
    {
      season: "fall",
      earliestWeeksFromFrost: -6,
      latestWeeksFromFrost: -1,
      method: "transplant",
    },
  ],
  description:
    "Grown two different ways depending on climate: as a cold-hardy, multi-year perennial planted in spring further north, or as a fall-planted annual for a single spring harvest in mild-winter regions.",
  careNotes: [
    "Mulch with straw over winter, then pull it back in spring to let plants grow.",
    "Cover blossoms if a late frost is forecast — fruit yield suffers more than the plant itself.",
    "Remove runners if you want energy going into fruit rather than new plantlets.",
  ],
  sources: [
    {
      title: "Strawberries",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/topics/lawn_garden/home_gardening/vegetables/individual%20crops/strawberries",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Grown as a fall-planted annual, not a cold-climate perennial — set short-day/day-neutral transplants mid-October through the first week of November (too early in hot early October stresses crowns and invites disease). Varieties: Camarosa, Camino Real, Chandler, Sweet Sensation.",
      source: {
        title: "On the Hunt for the Ideal Strawberry for Louisiana Home Gardens",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1748963783354",
      },
    },
    {
      region: "Subtropical Florida",
      note: "Also grown as a winter annual crop, on the same narrow late-September-to-October-1 planting window, fruiting mid-November through the season.",
      source: {
        title: "Growing Strawberries in the Florida Home Garden",
        publisher: "UF/IFAS",
        url: "https://journals.flvc.org/edis/article/download/117733/115765",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Opposite planting season from the Gulf South — set out dormant June-bearing plants in early spring (never after Aug 1, which leaves too little time to establish before freezing) in a matted-row system spaced 18-24in apart with rows 3-4ft apart.",
      source: {
        title: "Planting a new strawberry field",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/strawberry-farming/planting-new-strawberry-field",
      },
    },
  ],
  varieties: [
    {
      name: "Chandler (June-bearing)",
      description: "Large, glossy, very sweet June-bearing variety developed 1983; one of the highest-yielding classic June-bearers, widely used commercially and by home gardeners; also grown as a winter annual in Southern California.",
      starting: "Requires removal of all first-year blossoms to establish roots; limit runners to ~3 per plant for best establishment.",
      growing: "Suited to USDA zones 5-8 as a perennial; behaves differently by region — traditional June-bearer in cool climates vs. annual winter producer in Southern California.",
      harvesting: "Very large, firm, long wedge-shaped to conical berries with glossy brilliant red color.",
      sources: [
        { tier: "blog", title: "Chandler Strawberry: Flavor, Yield, USDA Zones", publisher: "Berry Growers Insider", url: "https://berrygrowersinsider.com/chandler" },
      ],
    },
    {
      name: "Camarosa (June-bearing)",
      description: "Short-day/June-bearing California cultivar; more vigorous and productive than Chandler, with larger, firmer fruit and strong early-season yield.",
      starting: "No unusual starting requirements beyond standard June-bearer establishment.",
      growing: "Moderately susceptible to common leaf spot but relatively resistant to powdery mildew; tolerant of common California strawberry viruses.",
      harvesting: "Large to very large, firm fruit with excellent flavor maintained through most of the fruiting cycle; heaviest yield concentrated early in the June-bearing window, earlier and higher than Chandler.",
      sources: [
        { tier: "university-extension", title: "Strawberries from Your Garden", publisher: "UC ANR (Napa Master Gardener)", url: "https://ucanr.edu/blog/napa-master-gardener-column/article/strawberries-your-garden" },
      ],
    },
    {
      name: "Earliglow (June-bearing)",
      description: "Heirloom June-bearer prized as one of the best-tasting strawberries available, and one of the earliest to ripen each season.",
      starting: "No special starting steps beyond standard bare-root planting.",
      growing: "Notably resistant to red stele, root rot, and verticillium wilt — stronger disease resistance package than many June-bearers; hardy zones 3-8.",
      harvesting: "Medium-large, firm, conical fruit with deep red color throughout; moderate yields best suited to fresh eating, freezing, jam.",
      sources: [
        { tier: "seed-supplier", title: "Earliglow Strawberry Plants for Sale", publisher: "Stark Bro's", url: "https://www.starkbros.com/products/berry-plants/strawberry-plants/earliglow-strawberry" },
      ],
    },
    {
      name: "Jewel (June-bearing)",
      description: "Cornell University release (1985); late-midseason June-bearer bred for both pick-your-own operations and home gardens, the most popular variety for matted-row production.",
      starting: "Standard June-bearer establishment; will not fruit abundantly until year two, then productive 3-5 years.",
      growing: "Cold hardy zones 4-8, disease resistant; firm, abrasion-resistant skin reduces fruit rot and eases shipping.",
      harvesting: "Large, firm, wedge-shaped, glossy fruit; balanced sweet-tart flavor; harvests mid-June through early July, later than earlier types like Earliglow.",
      sources: [
        { tier: "blog", title: "Jewel Strawberry Variety: Complete Growing Guide, Yield & Care", publisher: "Berry Growers Insider", url: "https://berrygrowersinsider.com/jewel" },
      ],
    },
    {
      name: "Allstar (June-bearing)",
      description: "Top-performing June-bearer known for one of the most comprehensive disease-resistance packages available in a home garden variety, combined with large glossy fruit.",
      starting: "Standard June-bearer establishment (bare root, zones 4-8).",
      growing: "Five-way disease resistance — verticillium wilt, leaf scorch, powdery mildew, red stele, and botrytis tolerance — notably broader resistance than many peer varieties.",
      harvesting: "Large, firm, glossy, symmetrical berries; mild sweet flavor; main flush in peak summer, typical 2-3 week harvest window.",
      sources: [
        { tier: "blog", title: "How to Plant, Grow, and Care for 'Allstar' June-bearing Strawberries", publisher: "Epic Gardening", url: "https://www.epicgardening.com/allstar-strawberries/" },
        { tier: "seed-supplier", title: "Allstar Strawberry Plants for Sale", publisher: "Stark Bro's", url: "https://www.starkbros.com/products/berry-plants/strawberry-plants/allstar-strawberry" },
      ],
    },
    {
      name: "Seascape (day-neutral)",
      description: "UC-developed day-neutral/everbearing cross of Selva x Douglas; produces continuously spring through fall rather than one concentrated June flush.",
      starting: "Can be planted from fresh-dug or cold-storage crowns; timing is more flexible than June-bearers since it doesn't depend on day-length cues. Begins fruiting about 3 months after planting regardless of when planted.",
      growing: "Fruits continuously when temps stay between 35-85°F (night temps above 60°F ideal); needs fewer chill hours than June-bearers; bred for tolerance to common CA viral diseases but shows susceptibility to common leaf spot.",
      harvesting: "Large, firm, glossy berries with excellent flavor and symmetry across a long harvest season instead of one concentrated window.",
      sources: [
        { tier: "blog", title: "The Complete Guide to Growing Seascape Strawberries", publisher: "Berry Growers Insider", url: "https://berrygrowersinsider.com/seascape" },
      ],
    },
    {
      name: "Albion (day-neutral)",
      description: "UC Davis 2004 release; considered an industry \"gold standard\" for flavor among day-neutral varieties.",
      starting: "Same flexible day-neutral planting window as Seascape; not dependent on day length.",
      growing: "Resistant to Verticillium wilt and Phytophthora crown rot, relatively resistant to Anthracnose crown rot, with some tolerance to two-spotted spider mites when treated.",
      harvesting: "Long, conical, very symmetrical berries, firm, dark red inside and out, averaging 30-35g; high yielding across an extended harvest season from late spring until first frost.",
      sources: [
        { tier: "university-extension", title: "Albion", publisher: "UC Davis Strawberry Breeding & Research Program", url: "https://strawberry.ucdavis.edu/albion" },
      ],
    },
    {
      name: "Tribute (day-neutral)",
      description: "USDA/University of Maryland day-neutral release; often marketed as \"everbearing\" but functions as a true day-neutral, producing from spring into fall.",
      starting: "Standard day-neutral establishment; small but vigorous plants that produce many runners.",
      growing: "Good winter hardiness; resistant to red stele and verticillium wilt, tolerant of common leaf diseases; will not initiate flower buds above 85°F.",
      harvesting: "Medium to large, bright red, excellent firmness and very good flavor; moderate to high yields.",
      sources: [
        { tier: "university-extension", title: "Bulletin #2184, Strawberry Varieties for Maine", publisher: "University of Maine Cooperative Extension", url: "https://extension.umaine.edu/publications/2184e/" },
      ],
    },
    {
      name: "Tristar (day-neutral)",
      description: "USDA/Maryland-bred day-neutral, self-pollinating, considered superior in quality to standard everbearers; sets buds spring through fall.",
      starting: "Standard day-neutral establishment; self-pollinating so no cross-variety pollinator needed.",
      growing: "Low plant vigor but fair productivity; resistant to red stele and verticillium wilt; hardy zones 4-8.",
      harvesting: "Medium-sized, bright red, very good quality fruit spread over a long season rather than one flush.",
      sources: [
        { tier: "university-extension", title: "Strawberry cultivars for Western Oregon and Washington", publisher: "Oregon State University Extension", url: "https://extension.oregonstate.edu/catalog/ec-1618-strawberry-cultivars-western-oregon-washington" },
      ],
    },
    {
      name: "Camino Real (June-bearing)",
      description: "California June-bearing cultivar that ripens later in the season than many other June-bearers; distinctive white shoulder near the stem even when fully ripe.",
      starting: "Standard June-bearer establishment; suited zones 4-10.",
      growing: "Concave leaf form with more pointed serrations than Gaviota/Camarosa; performs well in California's Central Coast and Central Valley.",
      harvesting: "Large, plump, firm fruit, notably later-ripening within the June-bearing window than peers like Camarosa; retains a white area near the stem cap at full ripeness (not a sign of under-ripeness for this variety).",
      sources: [
        { tier: "university-extension", title: "Southern Regional Strawberry Plasticulture Production Guide", publisher: "NC State Extension", url: "https://content.ces.ncsu.edu/southern-regional-strawberry-plasticulture-production-guide" },
      ],
    },
  ],
} satisfies Plant;

export default strawberry;
