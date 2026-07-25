# 🌱 Rooted

Rooted is a free, open-source gardening guide that gives **location-specific**
planting and care advice: what grows where you live, when to plant it, and
whether to water, cover, or shade it today based on the actual forecast.

No account, no server, no tracking. Your location and saved plants stay in
your browser. Zone and frost data are computed live, in the browser, from
free public weather data.

## Features

- **Plant repository** — an open, contributor-editable database of plants
  with zone ranges, sun/soil/spacing/watering needs, frost and heat
  thresholds, and planting windows (`src/data/plants/`).
- **Real hardiness zones, not a zip-code table** — your USDA hardiness zone
  and average frost dates are derived from ~10 years of historical daily
  temperatures at your exact coordinates via the free
  [Open-Meteo](https://open-meteo.com/) API, so it's accurate down to your
  specific location rather than a coarse zone map.
- **Weather-driven care advice** — for anything you save to "My Garden," the
  app checks the live forecast against that plant's watering interval, frost
  threshold, and heat-stress threshold, and tells you plainly what to do
  today.
- **Location-relative planting windows** — planting windows are stored as an
  offset from your last spring frost / first fall frost, not fixed calendar
  dates, so the same plant record is correct in every zone.
- **Local-only profile** — your location and saved plants live in
  `localStorage`. Export/import as JSON to move between browsers or devices.
  See [Roadmap](#roadmap) for optional cloud sync later.

## Tech stack

Rooted is intentionally light and does almost everything client-side, so it
can be hosted for free and stay fast:

- **React 19 + TypeScript**, built with **Vite** — a plain SPA, no server
  framework, so it can eventually be wrapped for mobile (Capacitor/React
  Native reuse of `lib/`, `data/`, `store/`) without a rewrite.
- **React Router** (`HashRouter`) for client-side routing that needs zero
  server-side rewrite rules on any static host.
- **Zustand** with its `persist` middleware for local, `localStorage`-backed
  state — no backend required for the MVP.
- **Tailwind CSS** for small, utility-first styling with no runtime cost.
- **Open-Meteo** (geocoding, historical archive, and forecast APIs) for all
  weather and climate data — free, no API key, CORS-friendly, called
  directly from the browser.

There is no backend in v1. Everything above runs as static files plus
client-side `fetch` calls, which is what keeps hosting free.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL. Set a location under **Location** to see
zone/frost-aware planting windows and weather-based care advice.

### Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Type-check and build a production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run typecheck` | TypeScript check with no emit |
| `npm run lint` | ESLint |
| `npm test` | Run the test suite once (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

## Deployment

### GitHub Pages (current)

Pushing to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which type-checks, lints, builds with `GH_PAGES=true` (so asset paths are
served from `/rooted/`), and publishes `dist/` via GitHub's official Pages
deploy action.

One-time setup in the repo: **Settings → Pages → Source → GitHub Actions**.

### Cloudflare Pages (once you have a domain)

Rooted is a static build, so moving to Cloudflare Pages doesn't need a
rewrite — just a different base path:

1. In the Cloudflare dashboard, create a Pages project connected to this
   repo.
2. Build command: `npm run build`. Build output directory: `dist`.
3. **Do not** set `GH_PAGES=true` in the Cloudflare build — leave it unset so
   the Vite `base` stays `/` (Cloudflare Pages serves from the domain root,
   not a `/rooted/` subpath).
4. Attach your custom domain under the Pages project's **Custom domains**
   tab.

Because routing uses `HashRouter`, there are no server-side rewrite rules to
configure on either host — deep links and refreshes just work.

If/when the app grows a real backend (see [Roadmap](#roadmap)), Cloudflare
Workers + D1 + KV are the natural next step and pair directly with Pages
under the same account.

## Roadmap

- **Cloud accounts (optional, v2)** — the local-only profile is deliberately
  the v1 design so the app can launch on free static hosting. A future
  version can add opt-in accounts (Cloudflare Workers + D1 for auth/storage)
  once the project is on Cloudflare Pages with a custom domain, without
  breaking the local-only mode.
- **More plants** — the repository currently ships with a starter set of
  common vegetables, herbs, fruit, and flowers. See
  [CONTRIBUTING.md](CONTRIBUTING.md) to add more.
- **Mobile app** — `lib/`, `data/`, and `store/` have no DOM/browser-only
  dependencies beyond `fetch` and `localStorage`, so they're reusable from a
  React Native/Capacitor shell later.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) — most contributions are new plant
entries and don't require touching any app code.

## License

[GPL-3.0-or-later](LICENSE).
