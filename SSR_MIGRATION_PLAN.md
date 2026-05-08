# SSR Migration Plan — Task 25
## Vite (SPA) → Next.js or Astro

---

## Current Stack
- **Bundler**: Vite 5
- **Framework**: React 18 (SPA / CSR)
- **Routing**: wouter
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **Deployment**: Static hosting

## SEO Problem with CSR
Search engines receive an empty `<div id="root">` until JS hydrates.
Dynamic `useSEO()` meta tags are invisible to crawlers without SSR.
This significantly limits organic ranking potential.

---

## Option A — Migrate to Next.js 14 (App Router)

### Pros
- Industry standard; massive ecosystem
- `generateMetadata()` for per-page SEO
- Automatic image optimisation (`next/image`)
- API routes replace any serverless needs
- Vercel deployment with zero config

### Cons
- Larger refactor; wouter → Next.js `<Link>` / `useRouter`
- shadcn/ui `use client` directives needed on interactive components
- Build-time increase

### Migration Steps
1. `npx create-next-app@latest voipcat-next --typescript --tailwind --app`
2. Copy `/pages` → `/app/(routes)` with `page.tsx` convention
3. Replace `wouter` links with `next/link` & `useRouter`
4. Add `export const metadata` or `generateMetadata()` to each route
5. Mark interactive components (`Header`, `HeroSection`) with `'use client'`
6. Replace `useSEO()` hook with native Next.js metadata API
7. Wrap shadcn Dialog, Tooltip etc. in client boundary wrappers
8. Add `next.config.js` with image domains, redirects

### Estimated effort: 3–5 days

---

## Option B — Migrate to Astro 4 (Islands Architecture)

### Pros
- Zero JS by default → fastest possible initial load
- Partial hydration with `client:load`, `client:idle`, `client:visible`
- Static pages ship no JS until interaction is needed
- Native Markdown/MDX for Articles section
- Excellent for content-heavy, SEO-first sites

### Cons
- Astro + React Islands requires `@astrojs/react`
- Less familiar to React-only devs
- Some React patterns (Context across islands) need rethinking

### Migration Steps
1. `npm create astro@latest -- --template minimal`
2. Add `@astrojs/react` and `@astrojs/tailwind` integrations
3. Convert static pages → `.astro` files (pure HTML + Tailwind)
4. Add `client:visible` to interactive components (Header, chatbot, forms)
5. Use Astro's built-in `<SEO>` component or frontmatter for meta
6. Articles → MDX collection with `getCollection()`
7. Programmatic pages (country, DID) → `getStaticPaths()` + `params`

### Estimated effort: 4–6 days

---

## Recommendation

**Choose Next.js** if:
- Team is React-first
- Need API routes or auth in the future
- Want to deploy on Vercel with minimal config

**Choose Astro** if:
- SEO and performance are the only goals
- Content (articles, landing pages) outweighs interactivity
- Want the absolute best Core Web Vitals scores

---

## Quick Win Before Full Migration
Add `vite-plugin-ssr` or `@vitejs/plugin-react` prerender for critical routes:

```bash
npm install vite-plugin-prerender
```

```js
// vite.config.ts
import prerender from 'vite-plugin-prerender';
plugins: [
  prerender({
    staticDir: 'dist',
    routes: ['/', '/sip-trunk', '/wholesale-voip', '/coverage', '/network', '/security'],
  })
]
```

This gives search engines pre-rendered HTML for top pages without a full framework migration.

---

*Document created: May 2026 | VoIP Cat Engineering*
