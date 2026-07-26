# Variety research plan

Tracking doc for populating `Plant.varieties` (20 cultivars per plant, each
with starting/growing/harvesting info and tiered, cited sources) across the
100 most common home garden plants. See `src/types/plant.ts` for the
`Variety`/`VarietySource` shape and `CONTRIBUTING.md` for the sourcing rules.

Source validity tiers (highest to lowest confidence), per the ranking this
plan follows:

1. University / extension (land-grant research, e.g. LSU AgCenter, UF/IFAS)
2. Seed suppliers (commercial catalogs — accurate on their own product, sales-oriented)
3. Gardening blogs
4. YouTube
5. Reddit

Delivered in batches of 10 plants so quality/format can be checked early.

## Batches

- [x] **Batch 1** (existing plants 1-10): Tomato, Bell Pepper, Basil, Lettuce, Kale, Carrot, Zucchini, Cucumber, Green Bean, Spinach
- [x] **Batch 2** (existing plants 11-20): Broccoli, Marigold, Sunflower, Blueberry, Rosemary, Mint, Garlic, Onion, Pumpkin, Strawberry
- [x] **Batch 3** (new): Potato, Sweet Potato, Eggplant, Radish, Beet, Turnip, Swiss Chard, Collard Greens, Brussels Sprouts, Cauliflower — **Sweet Potato not yet added** (see below)
- [ ] **Batch 4** (new): Cabbage, Kohlrabi, Celery, Asparagus, Artichoke, Okra, Sweet Corn, Snap Pea, Snow Pea, Watermelon
- [ ] **Batch 5** (new): Cantaloupe, Honeydew Melon, Bok Choy, Arugula, Mustard Greens, Endive, Leek, Shallot, Rutabaga, Parsnip
- [ ] **Batch 6** (new): Horseradish, Watercress, Fennel, Jalapeño Pepper, Habanero Pepper, Cilantro, Parsley, Dill, Thyme, Oregano
- [ ] **Batch 7** (new): Sage, Chives, Tarragon, Lavender, Lemongrass, Raspberry, Blackberry, Grape, Apple, Peach
- [ ] **Batch 8** (new): Pear, Plum, Cherry, Fig, Hardy Kiwi, Zinnia, Petunia, Pansy, Snapdragon, Cosmos
- [ ] **Batch 9** (new): Dahlia, Daylily, Hosta, Coneflower, Black-Eyed Susan, Hibiscus, Hydrangea, Rose, Tulip, Daffodil
- [ ] **Batch 10** (new): Iris, Peony, Geranium, Impatiens, Begonia, Coleus, Salvia, Lantana, Morning Glory, Nasturtium

100 plants total (20 existing + 80 new), 20 varieties each = up to 2,000
variety entries.

## Status

- **Batch 1: done**, with two known gaps to fill in a follow-up pass (research
  agents hit this session's WebSearch call quota partway through):
  - **Cucumber**: 14/20 varieties. Missing: Intimidator, DMR 401, SV3462CS,
    SV4719CS, Diamondback (all already named in cucumber's downy-mildew
    regional note) plus one more to round out 20.
  - **Spinach**: 9/20 varieties. Missing: Indian Summer, Giant Winter,
    Emperor, Regiment, Reflect, Olympia, Correnta, Acadia, Avon, Catalina,
    and others.
  - Green Bean landed at 19/20 (one short of the LSU-recommended list:
    Ambra, Caprice, Dusky, Lynx, Magnum, or Storm would complete it).
  - No fabricated data was added for any gap — missing varieties are simply
    absent from the array rather than invented, consistent with the
    citation discipline in CONTRIBUTING.md.
- **Batch 2: done.** All 10 plants have variety data. Two known gaps to
  fill in a follow-up pass:
  - **Onion**: 19/20 varieties. Missing one long-day variety (Stuttgarter
    was the natural pick) to round out the long-day/short-day/intermediate
    spread.
  - **Strawberry**: 10/20 varieties. Missing: Florida Brilliance, Sweet
    Sensation (Darselect), Benicia, Fronteras, San Andreas, Strawberry
    Festival, Sweet Ann, Ozark Beauty, Quinault, Eversweet.
  - **Rosemary and Mint** initially failed entirely (research agent hit an
    account-level Claude usage spend limit before producing any data);
    retried once the limit reset and both landed at a full 20/20.
  - As with Batch 1, no fabricated data was used to fill any gap.
- **Batch 3: 9 of 10 plants added.** These are the first *new* plants added
  to the app (not just varieties on existing entries), so each required
  full core data (zones, water, temperature, planting windows, regional
  notes) in addition to 20 varieties. Known gaps:
  - **Sweet Potato: not added at all.** The research agent covering
    Potato/Sweet Potato completed Potato in full (20/20, all core data)
    but exhausted its WebSearch budget partway through Sweet Potato —
    0/20 varieties and several core fields (spacing, water, heat
    threshold, most regional notes) unverified. Rather than ship a
    plant with an empty varieties array and guessed core data, Sweet
    Potato is deferred to a follow-up pass and not yet registered in
    `src/data/plants/index.ts`.
  - **Turnip**: 10/20 varieties (search budget exhausted; candidate names
    Shogoin, White Lady, Plum in Tokyo, De Milan, White Egg, Just Right,
    Golden Ball, and Snowball were seen but never verified with real
    content, so they were left out).
  - **Collard Greens**: 7/20 varieties with full detail (2 more names —
    Yellow Cabbage Collard, Whaley's Favorite — surfaced but lacked
    verified starting/growing/harvesting detail, so were left out
    entirely rather than shipped incomplete).
  - **Swiss Chard**: 17/20 varieties (3 candidate names spotted but
    unverified: Vulcan, Charlotte, Pink Lipstick).
  - **Cauliflower**: 9/20 varieties (search budget exhausted; candidates
    Purple of Sicily, Graffiti, Veronica, Depurple, Vitaverde, Candid
    Charm, Symphony, Denali, Attribute, Fremont, and Amsterdam Giant
    were identified but not verified).
  - **Potato, Eggplant, Radish, Beet, Brussels Sprouts**: all landed at a
    full 20/20 with complete core data.
  - As before, no fabricated data was used anywhere — every gap above is
    an honest "not yet verified" rather than an invented entry.
