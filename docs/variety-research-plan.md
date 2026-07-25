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
- [x] **Batch 2** (existing plants 11-20): Broccoli, Marigold, Sunflower, Blueberry, Rosemary, Mint, Garlic, Onion, Pumpkin, Strawberry — **Rosemary and Mint still have zero variety data** (see below)
- [ ] **Batch 3** (new): Potato, Sweet Potato, Eggplant, Radish, Beet, Turnip, Swiss Chard, Collard Greens, Brussels Sprouts, Cauliflower
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
- **Batch 2: done for 8 of 10 plants**, with gaps:
  - **Onion**: 19/20 varieties. Missing one long-day variety (Stuttgarter
    was the natural pick) to round out the long-day/short-day/intermediate
    spread.
  - **Strawberry**: 10/20 varieties. Missing: Florida Brilliance, Sweet
    Sensation (Darselect), Benicia, Fronteras, San Andreas, Strawberry
    Festival, Sweet Ann, Ozark Beauty, Quinault, Eversweet.
  - **Rosemary and Mint: 0/20 each.** The research agent assigned to this
    pair failed entirely before producing any data — it hit an
    account-level Claude usage "monthly spend limit" error, not the
    per-session search quota seen elsewhere. This blocks re-running that
    research until the limit is raised (claude.ai/settings/usage) or
    resets, and will likely affect any future batch's agents too.
  - As with Batch 1, no fabricated data was used to fill any gap.
