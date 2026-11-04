# CampusClarity — Phase A

Modular React + TypeScript + Vite migration of the **approved `campusclarity_clear_glass_draft.html`**. Includes the original CSS, including the final clear-glass overrides, plus independent routed pages, shared navbar/sidebar, light/dark mode, and demo features.

## Start locally

Requires Node.js 20.19+ or 22.12+ (compatible with Vite 6) and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy

Push the **contents of this folder** to GitHub. For Cloudflare Pages use build command `npm run build`, output directory `dist`. If this folder is in a monorepo, set the project root to `campusclarity-phase-a`. Configure SPA fallback to serve `index.html` for routes (Cloudflare Pages usually handles this for SPA projects without a top-level `404.html`).

## Architecture

- `src/components/Layout.tsx`: shared nav, sidebar, theme control and footer.
- `src/components/UI.tsx`: shared page wrapper and controls.
- `src/pages/`: independent routed page modules.
- `src/context/AppContext.tsx`: demo app state and theme persistence.
- `src/data/seniors.ts`: sample data and types.
- `src/styles/original.css`: unmodified CSS from the approved HTML draft, including glass/animation tuning.
- `src/styles/app.css`: small compatibility styles for React links.

## Demo limitations

No backend or real accounts, payments, video sessions, AI, senior verification, or form submission. Bookings, saved seniors and demo sign-in live only in React memory and reset on reload; theme persists in localStorage. The slot labels are placeholders, not real availability. Do not use this demo to collect sensitive information.
