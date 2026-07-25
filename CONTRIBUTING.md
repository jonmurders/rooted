# Contributing to Rooted

Thanks for helping grow the plant database (pun intended). Rooted is a static
React app — there's no backend to set up, just clone, install, and run.

## Getting started

```bash
npm install
npm run dev
```

## Adding a plant

Plants live in `src/data/plants/`, one file per plant, typed against
`src/types/plant.ts`.

1. Copy an existing plant file close to what you're adding (e.g. `tomato.ts`
   for another warm-season vegetable, `blueberry.ts` for a perennial shrub).
2. Fill in every field. A few notes on the trickier ones:
   - `zones`: the USDA hardiness zone range the plant survives outdoors in.
   - `plantingWindows`: expressed **relative to frost dates**, not calendar
     dates, so the same record works for every zone. `earliestWeeksFromFrost`
     and `latestWeeksFromFrost` count in weeks from the last spring frost
     (spring windows) or the first fall frost (fall windows) — negative
     numbers mean "before that frost date."
   - `temperature.frostThresholdF`: the temperature below which the plant
     takes frost damage (not necessarily 32°F — some plants are hardier,
     some are more tender).
   - `temperature.heatStressThresholdF`: the temperature above which the
     plant needs extra water/shade or stops setting fruit.
   - `water.drySpellThresholdIn`: rainfall (inches) in a trailing 7-day
     window below which the app recommends watering.
   - `sources`: citations for the plant's core data — title, publisher,
     and URL. Prefer university/land-grant extension publications (LSU
     AgCenter, UF/IFAS, UC ANR, Cornell Cooperative Extension, university
     extension services generally) over blogs or seed-catalog copy. These
     are freely reusable, research-backed, and specific about zones/climate
     in a way generic gardening sites usually aren't.
   - `regionalNotes`: practical adjustments for a *named climate archetype*
     (e.g. `"Gulf South / Humid Subtropical"`, `"Cold Continental (Upper
     Midwest)"`, `"Hot/Arid Southwest"`) rather than a formal zone — things
     like regional variety picks, disease/pest pressure tied to humidity or
     aridity, or a planting season that's inverted between climates (e.g.
     strawberries are fall-planted annuals in the Gulf South/Florida but
     spring-planted perennials in the Upper Midwest). Each note carries its
     own `source` citation, since notes for one plant often come from
     different publications. Don't force notes into every region — 2-4
     genuinely differentiated notes beat six padded ones. It's fine to leave
     this as `[]` if you don't have a sourced regional distinction to add.
3. Add the import + entry in `src/data/plants/index.ts`.
4. Run `npm run typecheck` — the `satisfies Plant` check in each file will
   catch missing or mistyped fields.

Every numeric claim and regional note should trace to a source in `sources`
or a note's own `source` field — we'd rather merge slower and be accurate.
Don't invent a citation for a fact you didn't actually verify.

## Code checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
```

All four run in CI on every pull request.

## Project structure

```
src/
  components/   Shared UI (cards, badges, layout)
  data/plants/   The plant repository — one file per plant
  hooks/         React hooks (e.g. useWeather)
  lib/           Framework-free logic: geocoding, climate/zone math,
                 planting-window math, weather-driven care advice
  pages/         Routed pages
  store/         Local (localStorage-backed) user profile state
  types/         Shared TypeScript types
```

`lib/` has no React or DOM dependencies by design — it's plain, testable
TypeScript. If you're adding non-trivial logic, put it there and add a
`*.test.ts` next to it.
