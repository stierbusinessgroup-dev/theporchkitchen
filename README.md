# The Porch Kitchen — theporchkitchen.com

Marketing + info site for **The Porch Kitchen**, Sebastopol, CA. Built with [Astro](https://astro.build)
as a fast, static, SEO-first brand hub. Transactions (ordering) are offloaded to Toast.

## Develop

```
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/  (static, deploy-ready)
npm run preview    # serve the production build locally
```

## Where to edit content

Everything customer-facing flows from two files — edit these, not the components:

- **`src/data/site.ts`** — name, address, phone, email, hours, happy-hour times, social links, Toast URL.
- **`src/data/menu.ts`** — lunch + happy-hour menus (sections, items, prices, dietary tags).

Both feed the visible UI **and** the schema.org JSON-LD, so structured data can never drift from
what's on the page. Photos live in `src/assets/` (swap a file, keep the name). Re-generate the
favicons + social share image after changing branding/photo with `node scripts/generate-assets.mjs`.

## SEO / AI visibility

- `Restaurant` + `Menu` + `WebSite` + `BreadcrumbList` JSON-LD (`src/components/JsonLd.astro`)
- Per-page title/description/canonical + Open Graph + Twitter cards (`src/components/SEO.astro`)
- `public/robots.txt` (welcomes AI crawlers), auto `sitemap-index.xml`, hand-written `public/llms.txt`

## Deploy (Vercel)

Static output in `dist/`. Connect this repo to Vercel (framework preset: **Astro**) or run `vercel`.
Domain `theporchkitchen.com` is managed in Vercel.

## Reference

The original single-file design mockup is preserved at `reference/mockup.html`.
