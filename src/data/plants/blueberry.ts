import type { Plant } from "@/types/plant";

const blueberry = {
  id: "blueberry",
  commonName: "Blueberry",
  scientificName: "Vaccinium spp. (highbush, rabbiteye & half-high hybrids)",
  category: "shrub",
  zones: { min: 3, max: 10 },
  sun: "full-sun",
  soil: "Acidic (pH 4.2-5.5), well-drained, high organic matter",
  spacingInches: 60,
  daysToMaturity: { min: 730, max: 1095 },
  water: {
    intervalDays: 3,
    drySpellThresholdIn: 1,
    notes: "Shallow roots need consistent moisture; mulch heavily to retain it.",
  },
  temperature: {
    frostThresholdF: 28,
    heatStressThresholdF: 90,
  },
  plantingWindows: [
    {
      season: "spring",
      earliestWeeksFromFrost: -2,
      latestWeeksFromFrost: 4,
      method: "transplant",
    },
  ],
  description:
    "A long-lived perennial shrub spanning three cultivar groups bred for different climates — northern highbush, cold-hardy half-high hybrids, and heat-tolerant rabbiteye. Pick the group suited to your zone; all need acidic soil and have frost-sensitive spring blossoms even where the plant itself is winter-hardy.",
  careNotes: [
    "Plant at least two varieties for better cross-pollination and yield.",
    "Open spring blossoms can be damaged by a late frost even though the dormant shrub is winter-hardy — cover during a late cold snap.",
    "Mulch with pine bark or needles to help maintain acidic soil.",
    "Match the cultivar group to your climate: rabbiteye for hot/humid zones 8-10, northern highbush for zones 5-7, half-high hybrids for zones 3-4.",
  ],
  sources: [
    {
      title: "Louisiana Super Plants: Rabbiteye Blueberries",
      publisher: "LSU AgCenter",
      url: "https://www.lsuagcenter.com/articles/page1564414086990",
    },
  ],
  regionalNotes: [
    {
      region: "Gulf South / Humid Subtropical",
      note: "Rabbiteye blueberries (not northern highbush) are the recommended type — acidic soil pH 4.2-5.5, zones 8-10, shallow-rooted so raised beds often help in heavy soils. Plant 2-3 different rabbiteye varieties together (Tifblue, Brightwell, Premier) for cross-pollination and an extended harvest.",
      source: {
        title: "Louisiana Super Plants: Rabbiteye Blueberries",
        publisher: "LSU AgCenter",
        url: "https://www.lsuagcenter.com/articles/page1564414086990",
      },
    },
    {
      region: "Cold Continental (Upper Midwest)",
      note: "Standard highbush is too tender — use \"half-high\" cultivars (Northblue, Northsky, Chippewa, Polaris) bred specifically for cold tolerance and low stature so snow cover protects the buds, hardy to zones 3-7.",
      source: {
        title: "Growing blueberries in the home garden",
        publisher: "University of Minnesota Extension",
        url: "https://extension.umn.edu/fruit/growing-blueberries-home-garden",
      },
    },
    {
      region: "Cool Northeast",
      note: "Northern highbush is the standard type here; soil needs to be acidified to roughly pH 5.0 (ideally ~4.5), typically with sulfur or ammonium-sulfate fertilizer applied at planting and monitored periodically.",
      source: {
        title: "Growing Blueberries Q&A",
        publisher: "Cornell Cooperative Extension",
        url: "https://ccetompkins.org/gardening/home-gardening/publications/growing-blueberries-q-a",
      },
    },
  ],
  varieties: [
    {
      name: "Bluecrop (northern highbush)",
      description: "The industry-standard mainstay northern highbush cultivar — one of the most widely planted blueberries in North America, prized for reliability and balanced flavor.",
      starting: "Standard highbush planting; pairs well with Blueray as an overlapping-bloom pollinator partner.",
      growing: "Zones 4-7; chill requirement 700-800hrs (one of the highest-chill cultivars here — an important climate-fit distinction); vigorous, reliable.",
      harvesting: "Mid-July ripening with an extended 3-4 week pick window, longer than many other highbush types.",
      sources: [
        { tier: "seed-supplier", title: "Bluecrop Blueberry", publisher: "Raintree Nursery", url: "https://raintreenursery.com/products/bluecrop-blueberry" },
      ],
    },
    {
      name: "Duke (northern highbush)",
      description: "USDA (Beltsville, MD) release, first sold 1987; the leading early-ripening northern highbush cultivar.",
      starting: "Standard highbush planting; semi-evergreen habit in mild winters.",
      growing: "Zones 4-7, very cold-hardy; chill requirement 800-1000hrs; blooms late (frost-avoidant) but ripens early, ahead of Bluecrop.",
      harvesting: "Medium-large, crisp, light-blue berries in large, uniform crops — among the earliest northern highbush to harvest.",
      sources: [
        { tier: "seed-supplier", title: "Duke Blueberries", publisher: "Fall Creek Nursery", url: "https://www.fallcreeknursery.com/commercial-fruit-growers/varieties/duke" },
        { tier: "blog", title: "How to Plant, Grow, and Care for 'Duke' Blueberries", publisher: "Epic Gardening", url: "https://www.epicgardening.com/duke-blueberries/" },
      ],
    },
    {
      name: "Patriot (northern highbush)",
      description: "University of Maine release (1976), bred specifically for high-latitude cold hardiness; notably tolerant of wetter, heavier soils than most blueberries.",
      starting: "Adaptable to less-than-ideal drainage compared to other highbush cultivars — a real exception to generic blueberry soil-drainage guidance.",
      growing: "Zones 3-7 (more cold-tolerant than typical highbush); chill requirement 800-1000hrs; cross-pollinate with Bluecrop or Spartan.",
      harvesting: "Large, sweet, \"wild-flavored\" berries, ~10-20lbs/bush, harvested in June.",
      sources: [
        { tier: "blog", title: "The Patriot Blueberry", publisher: "Minneopa Orchards", url: "https://minnetonkaorchards.com/patriot-blueberry/" },
      ],
    },
    {
      name: "Blueray (northern highbush)",
      description: "Michigan State University-bred cultivar (released late 1970s), known for very large, sweet, crack-resistant berries.",
      starting: "Standard highbush planting.",
      growing: "Chill requirement 800+hrs; upright, open habit; unusually adaptable to both cold-winter regions and hot summers (benefits from afternoon shade in heat).",
      harvesting: "Ripens early-midseason (July), overlapping with Bluecrop as a strong pollination pair; very large, sweet, notably crack-resistant fruit.",
      sources: [
        { tier: "seed-supplier", title: "Blueray Blueberry", publisher: "Raintree Nursery", url: "https://raintreenursery.com/products/blueray-blueberry" },
      ],
    },
    {
      name: "Jersey (northern highbush)",
      description: "One of the oldest and most widely grown highbush cultivars, valued for tall, ornamental form and late-season ripening.",
      starting: "Standard highbush planting; self-fertile but yields improve with Bluecrop or Blueray nearby as pollinizer.",
      growing: "Zones 4-7; chill requirement 800-1000hrs; tall, well-shaped bush with strong ornamental fall foliage value.",
      harvesting: "Late-season ripening (late July), extending harvest into late summer; dark blue, medium berries with sweet, juicy, complex flavor.",
      sources: [
        { tier: "university-extension", title: "Blueberry Cultivars for the Pacific Northwest (PNW 656)", publisher: "Oregon State University Extension Service", url: "https://extension.oregonstate.edu/catalog/pnw-656-blueberry-cultivars-pacific-northwest" },
      ],
    },
    {
      name: "Misty (southern highbush)",
      description: "University of Florida-bred ultra-low-chill southern highbush with ornamental hot-pink spring flowers.",
      starting: "Suited to mild-winter zones 6-10 where northern highbush would fail to break dormancy properly.",
      growing: "Chill requirement only ~150-300hrs (vs. 800-1000 for northern highbush) — a major climate-fit distinction; requires a cross-pollination partner such as Sharpblue or Biloxi.",
      harvesting: "Medium-large sky-blue berries, abundant June harvest.",
      sources: [
        { tier: "university-extension", title: "HS1245: Southern Highbush Blueberry Cultivars from the University of Florida", publisher: "UF/IFAS Extension", url: "https://ask.ifas.ufl.edu/publication/HS1245" },
      ],
    },
    {
      name: "Sunshine Blue (southern highbush)",
      description: "Compact dwarf southern highbush, self-pollinating, and notably tolerant of higher soil pH than most blueberries — an important exception to standard acidic-soil guidance.",
      starting: "Self-fertile — only one plant is needed for fruit, unlike most blueberries which need a cross-pollinator.",
      growing: "Dwarf 3-4ft, chill requirement only ~150-200hrs; adaptable from Zone 5 through the Deep South; good for large containers.",
      harvesting: "5-10lbs/plant at maturity, mid-season.",
      sources: [
        { tier: "university-extension", title: "Blueberry Sunshine Blue", publisher: "Texas A&M AgriLife Extension (Henderson County Master Gardeners)", url: "https://txmg.org/hendersonmg/plant-library/blueberry-sunshine-blue/" },
      ],
    },
    {
      name: "O'Neal (southern highbush)",
      description: "University of Florida release (1987), often the very first southern highbush cultivar to ripen each year; regarded by many growers as having the best flavor among southern highbush.",
      starting: "Self-fertile but produces larger crops with a cross-pollinator such as Misty or Biloxi.",
      growing: "Zones 7-9; chill requirement roughly 400-600hrs (as low as ~200hrs per some sources); developed specifically for warm-climate Southern performance.",
      harvesting: "Large, firm, deeply sweet berries — earliest southern highbush pick of the season (June).",
      sources: [
        { tier: "university-extension", title: "HS1245: Southern Highbush Blueberry Cultivars from the University of Florida", publisher: "UF/IFAS Extension", url: "https://ask.ifas.ufl.edu/publication/HS1245" },
      ],
    },
    {
      name: "Tifblue (rabbiteye)",
      description: "UGA/USDA-ARS 1955 release; historically the dominant commercial rabbiteye cultivar and still a popular home-garden choice, though largely superseded commercially by newer early, larger-fruited, split-resistant cultivars.",
      starting: "Requires cross-pollination — pairs notably better with Brightwell than with Climax per UGA research.",
      growing: "Chill requirement 600-700hrs; vigorous, upright habit; moderate-to-high chill requirement for a rabbiteye.",
      harvesting: "Small-to-medium berries, good color/firmness/flavor; late-season ripening (late June-August), the longest window among the rabbiteyes here.",
      sources: [
        { tier: "university-extension", title: "Tifblue: Rabbiteye Blueberry Variety", publisher: "University of Georgia / eXtension", url: "https://blueberries.extension.org/tifblue-rabbiteye-blueberry-variety/" },
      ],
    },
    {
      name: "Brightwell (rabbiteye)",
      description: "UGA/USDA-ARS 1983 release, a popular early-season rabbiteye.",
      starting: "Vigorous and productive; needs good post-harvest bush care to avoid overcropping and reduced return bloom the following year.",
      growing: "Chill requirement 350-400hrs (low, well-suited to warmer rabbiteye zones); upright, vigorous, productive.",
      harvesting: "Medium-large berries, short and concentrated ripening window (early June-early July), good color/firmness/flavor.",
      sources: [
        { tier: "university-extension", title: "Brightwell: Rabbiteye Blueberry Variety", publisher: "University of Georgia / eXtension", url: "https://blueberries.extension.org/brightwell-rabbiteye-blueberry-variety/" },
      ],
    },
    {
      name: "Ochlockonee (rabbiteye)",
      description: "UGA/USDA-ARS 2002 release named for the Ochlockonee River; a high-yield late-season rabbiteye that substantially outyields Tifblue.",
      starting: "Blooms late enough to typically escape spring freezes in south/middle Georgia — a notable frost-avoidance trait.",
      growing: "Chill requirement 650-700hrs (relatively high for a rabbiteye); vigorous, upright, high-yielding; cross-pollinate with Powderblue, Tifblue, or Vernon.",
      harvesting: "Medium-large berries, good firmness/color; ripens early-to-late July, about 5-7 days after Tifblue, extending the rabbiteye harvest.",
      sources: [
        { tier: "university-extension", title: "Ochlockonee: Rabbiteye Blueberry Variety", publisher: "University of Georgia / eXtension", url: "https://blueberries.extension.org/ochlockonee-rabbiteye-blueberry-variety/" },
      ],
    },
    {
      name: "Premier (rabbiteye)",
      description: "Early-season rabbiteye widely grown across the Deep South/Gulf Coast.",
      starting: "Young canes can be limber under heavy fruit loads and may need support/pruning.",
      growing: "Chill requirement 500-550hrs; productive, vigorous, upright; fruit set sometimes reduced by malformed flowers.",
      harvesting: "Medium-large berries, ripens late May-early June (at or ahead of Climax, one of the earliest rabbiteyes) — must be picked promptly as fruit left hanging becomes too soft for fresh market.",
      sources: [
        { tier: "university-extension", title: "Premier: Rabbiteye Blueberry Variety", publisher: "University of Georgia / eXtension", url: "https://blueberries.extension.org/premier-rabbiteye-blueberry-variety/" },
      ],
    },
    {
      name: "Austin (rabbiteye)",
      description: "UGA/USDA-ARS 1996 release, an early-season rabbiteye.",
      starting: "Standard rabbiteye planting; needs a cross-pollination partner.",
      growing: "Chill requirement 450-500hrs; very productive, moderately vigorous, upright habit; blooms 5-7 days after Climax.",
      harvesting: "Medium-large berries with good color/flavor, ripens early-to-mid June; notable downside is a somewhat large, sometimes objectionable seed size.",
      sources: [
        { tier: "university-extension", title: "Austin: Rabbiteye Blueberry Variety", publisher: "University of Georgia / eXtension", url: "https://blueberries.extension.org/austin-rabbiteye-blueberry-variety/" },
      ],
    },
    {
      name: "Northblue (half-high)",
      description: "University of Minnesota 1983 release, the flagship half-high bred for severe upper-Midwest winters — its low stature lets snow cover protect buds.",
      starting: "Cross-pollinate with Northcountry or Northsky.",
      growing: "Zones 3-7; chill requirement 800-1000hrs (surprisingly high despite being a cold-climate half-high); compact 24-36in habit, 30-40in spread — much shorter than standard highbush.",
      harvesting: "Large, dark blue, firm berries, ripens July; yields 12-16lbs/bush — unusually high for such a compact plant.",
      sources: [
        { tier: "university-extension", title: "Blueberries", publisher: "University of Minnesota Extension", url: "https://mnhardy.umn.edu/blueberries" },
      ],
    },
    {
      name: "Northsky (half-high)",
      description: "University of Minnesota half-high, the most extremely cold-hardy blueberry researched here (surviving to -40 to -45°F) and the smallest/most dwarf of the half-high group.",
      starting: "Excellent for very small spaces or containers in extreme-cold climates given its true-dwarf size.",
      growing: "Only 1.5ft tall x 2ft wide — the most compact half-high in this set; needs a cross-pollination partner (Northcountry or Northblue).",
      harvesting: "Small, soft, sweet sky-blue berries, mid-season; modest yield, 1-5lbs/plant.",
      sources: [
        { tier: "seed-supplier", title: "Northsky Blueberry Bush", publisher: "Nature Hills Nursery", url: "https://naturehills.com/products/blueberry-northsky" },
      ],
    },
    {
      name: "Northcountry (half-high)",
      description: "University of Minnesota release (1983/1986), combining highbush sweetness with lowbush-like hardiness and low stature; noted for an especially mild, wild-blueberry-like flavor.",
      starting: "Cross-pollinate with Northblue or Northsky for best yield.",
      growing: "Zones 3-7; 18-24in tall/wide, very cold-hardy.",
      harvesting: "Small, exceptionally sweet berries with a mild, wild-blueberry flavor profile, ripens around July 10; yields ~2-7lbs/plant.",
      sources: [
        { tier: "university-extension", title: "Blueberries", publisher: "University of Minnesota Extension", url: "https://mnhardy.umn.edu/blueberries" },
      ],
    },
    {
      name: "Chippewa (half-high)",
      description: "University of Minnesota release (1996), a cross of northern highbush and lowbush producing larger fruit than most half-highs, with strong fall foliage color.",
      starting: "Self-fruitful, but cross-pollination improves fruit size/yield.",
      growing: "Extremely cold-hardy to -40°F (zone 3a); compact upright 3-4ft; attractive red/purple/yellow-orange fall foliage — an ornamental bonus.",
      harvesting: "Medium-large berries (~90/cup), very sweet/firm with a small picking scar, ripens early around July 8; yields 3-7lbs/plant.",
      sources: [
        { tier: "seed-supplier", title: "Chippewa Blueberry Bush", publisher: "Roots to Fruits Nursery", url: "https://rootstofruitsnursery.com/products/chippewa-blueberry" },
      ],
    },
    {
      name: "St. Cloud (half-high)",
      description: "University of Minnesota half-high bred for cold hardiness and reliable production, ripening on a schedule comparable to Northblue.",
      starting: "Requires cross-pollination — plant with Northblue, Northcountry, or Northsky.",
      growing: "Zones 4a-7b; bushy, upright habit to ~4ft.",
      harvesting: "Medium-large, firm, sweet/crisp berries (~70/cup) averaging ~7lbs/plant, ripens early-to-mid season; well suited to fresh market and freezing.",
      sources: [
        { tier: "university-extension", title: "'St. Cloud' Blueberry - Vaccinium 'St. Cloud'", publisher: "University of Minnesota UFOR Nursery & Lab", url: "https://trees.umn.edu/st-cloud-blueberry-vaccinium-st-cloud" },
      ],
    },
    {
      name: "Polaris (half-high)",
      description: "University of Minnesota half-high released in the 1990s, notable as one of the earliest-ripening half-highs.",
      starting: "Not self-pollinating — requires another variety (Northblue or Northsky recommended) as a pollination partner.",
      growing: "Zones 3-7; ~3ft upright, slightly spreading habit.",
      harvesting: "Large, aromatic, sweet-tart berries with an intense flavor balance, early ripening in July (notably earlier than most half-highs); yields 3-6lbs/plant.",
      sources: [
        { tier: "seed-supplier", title: "Polaris Blueberry Plant", publisher: "Burpee", url: "https://www.burpee.com/blueberry-polaris-prod22565.html" },
      ],
    },
    {
      name: "Superior (half-high)",
      description: "A later University of Minnesota release (2009), part of the same cold-climate half-high breeding line as Chippewa, Northblue, Polaris, and St. Cloud; notable for flowering later than most blueberries, which helps it dodge late spring frosts.",
      starting: "Standard half-high planting alongside compatible University of Minnesota pollination partners.",
      growing: "Similar stature to St. Cloud/Chippewa; late flowering is its standout climate trait. Documentation on this cultivar is thinner than the others in the UMN line — treat specifics as provisional.",
      harvesting: "Sweet berries; specific ripening-date and yield data weren't clearly documented in available sources — flagged as a gap.",
      sources: [
        { tier: "university-extension", title: "Growing blueberries in the home garden", publisher: "University of Minnesota Extension", url: "https://extension.umn.edu/fruit/growing-blueberries-home-garden" },
      ],
    },
  ],
} satisfies Plant;

export default blueberry;
