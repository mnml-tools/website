# Minimal Tools

The project and product website for Minimal Tools, built with Astro, React, and TypeScript. All pages are generated as static HTML.

[![Netlify Status](https://api.netlify.com/api/v1/badges/4fd4ef5b-4211-4090-95eb-226790402f1f/deploy-status)](https://app.netlify.com/projects/minimaltools/deploys)

## Development

Use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run preview
npm run format:check
```

## Structure

Components follow atomic design: `atoms` contains primitives, `molecules` contains product cards, `organisms` contains navigation and footer, and `templates` contains the shared Astro layout. Product content lives in `src/data/products.ts`; `src/pages/products/[slug].astro` generates each product page. Only the interactive Products navigation hydrates React in the browser.

The Prettier configuration is copied unchanged from Bud. Format Astro files with the installed `prettier-plugin-astro` (`npx prettier --plugin prettier-plugin-astro --write .`).

App icons and light/dark screenshots come from the product repositories. The supplied Minimal Tools image is preserved in `public/images/minimal-tools-original.png`; the full brand mark in `public/images/minimal-tools-logo.svg` preserves its square, offset shadow, and nut silhouette with distinct ivory, sage, and dark green tones. `Nut.tsx` provides the decorative hero silhouette.

## Deploy to statichost.eu

Push this directory to your website repository, connect it in the statichost.eu dashboard, and enable automatic builds. `statichost.yml` installs the locked dependencies, builds with Node 22, and publishes `dist`. No server, adapter, database, or paid backend is needed.

Add `minimal.tools` in the dashboard and configure DNS using the records provided by statichost.eu. The canonical URL, sitemap, and robots file already use `https://minimal.tools`. Domain setup is managed in the dashboard, not the YAML file. See https://www.statichost.eu/docs/domains/.

This checkout prepares the site for deployment; it does not configure the hosting account or DNS. Release buttons link to each product's GitHub Releases rather than assuming a particular release or platform artifact exists.
