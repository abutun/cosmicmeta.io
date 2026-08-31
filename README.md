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

Vite builds the published site from `www/` into `dist/`. The `www/legacy-status/` page is included as `/legacy-status/` in the production output.

## Project structure

- `www/index.html` — Published Cosmic Meta NFT landing page.
- `www/styles.css` and `www/tokens.css` — Design tokens, responsive layouts, and motion preferences.
- `www/legacy-status/` — Published Legacy Status page.
- `www/assets/` — Cosmic Meta NFT artwork used by the hero and collection gallery.
- `vite.config.js` — Multi-page Vite build configuration that emits `dist/`.

## External links

The page links to Cosmic Meta NFT’s social channels, GitBook whitepaper, verified marketplaces, and Etherscan contracts. Marketplace links are exposed from each collection’s **Verified links** control. War Chicks is minted out and available on [OpenSea](https://opensea.io/collection/cosmicmetawarchicks); Circles remains available as a free mint through [mint.cosmicmeta.io](https://mint.cosmicmeta.io/) and is also listed on [OpenSea](https://opensea.io/collection/cosmicmetacircles).

## Design

The visual system uses a midnight-indigo space backdrop, lavender editorial typography, chartreuse interaction accents, fine orbital linework, and custom collection artwork. The site supports desktop and mobile navigation and respects `prefers-reduced-motion`.
