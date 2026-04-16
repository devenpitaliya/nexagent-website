# NexAgent — AI Automation for Modern Businesses

A production-ready marketing website for NexAgent, built with React + Vite + Tailwind CSS.

## Tech Stack

- **React 18** — UI framework
- **Vite** — build tool & dev server
- **Tailwind CSS** — utility-first styling
- **Framer Motion** — animations
- **Three.js / React Three Fiber** — 3D globe (lazy-loaded)
- **Lucide React** — icons

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build locally |

## Project Structure

```
src/
├── assets/          # Static assets (images, fonts)
├── components/
│   ├── effects/     # Canvas & Three.js visual effects
│   └── ...          # Page section components
├── App.jsx
├── main.jsx
└── index.css
```

## Deployment

Build output goes to `dist/`. Deploy to any static host (Vercel, Netlify, AWS S3 + CloudFront).

```bash
npm run build
```
