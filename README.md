# Roger Roger

**The official HoloNet presence of the Confederacy of Independent Systems** (a fan project for CSC 436, Project 3: Async React).

Roger Roger presents the Separatist war machine as if the Confederacy had built its own website: the droids, vehicles and warships of its armies, sorted into **aerial, ground, space and naval** forces, plus tributes to **Count Dooku** and **General Grievous**.

https://lively-dango-d6a9b4.netlify.app/#top

## API used

[SWAPI, the Star Wars API](https://swapi.dev): free, no key, no login.

| Endpoint | Used for |
| --- | --- |
| `/vehicles/` (all pages) | Droid fighters, tanks, transports, gunships |
| `/starships/` (all pages) | Cruisers, control ships, personal starfighters |
| `/people/?search=dooku` and `?search=grievous` | The leaders' records |

SWAPI has no droid infantry or navy entries, so those units (B1, B2, droideka, aqua droids and so on) come from a small hand-written file, `src/data/archive.js`, and are labelled **Archive** on the site. The domain sorting and the propaganda descriptions are also our own (`src/data/arsenal.js`).

## Features

- **Three States Pattern** on every fetch: skeleton loading cards, a readable error with a Retry button, then the data.
- **`useFetch` custom hook** (`src/hooks/useFetch.js`) returning `{ data, loading, error, retry }`. It follows SWAPI's pagination and cancels stale requests with `AbortController`.
- **Filter and search**: domain buttons plus a search box, applied client-side to data already fetched (no request per keystroke).
- **Dossier pop-up** for each unit, closable with Escape, the × button or a backdrop click.
- **Accessible**: labelled search, `aria-pressed` on filter buttons, keyboard focus styles, reduced-motion support.

## How to trigger the error state

Use either:

1. The **"Sabotage the relay"** switch at the bottom of the page, or
2. Open the site with `?sabotage` at the end of the URL, e.g. `https://your-site.netlify.app/?sabotage`

Both point every request at a broken address, so every section shows its error panel. Turning the switch off restores the signal.

## Run locally

```bash
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Build

```bash
npm run build
```

The production files go to `dist/`. Netlify runs this automatically using `netlify.toml`.
