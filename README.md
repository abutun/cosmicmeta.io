# Cosmic Meta NFT

Cosmic Meta NFT is a responsive NFT collection website for the Cosmic Meta NFT Multiverse. It presents the Molecules, Pixel Art, War Chicks, and Circles collections alongside holder utilities, the project roadmap, community channels, and verified marketplace links.

## Run locally

```bash
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

## Project structure

- `src/main.jsx` — React page structure, collection data, verified external links, and interactive navigation.
- `src/styles.css` — Design tokens, responsive layouts, utility/roadmap sections, and motion preferences.
- `public/assets/` — Cosmic Meta NFT artwork used by the hero and collection gallery.

## External links

The page links to Cosmic Meta NFT’s social channels, GitBook whitepaper, verified marketplaces, and Etherscan contracts. Marketplace links are exposed from each collection’s **Verified links** control. War Chicks and Circles are available as free mints through [mint.cosmicmeta.io](https://mint.cosmicmeta.io/); their proposed OpenSea links are intentionally not displayed while unavailable.

## Design

The visual system uses a midnight-indigo space backdrop, lavender editorial typography, chartreuse interaction accents, fine orbital linework, and custom collection artwork. The site supports desktop and mobile navigation and respects `prefers-reduced-motion`.
