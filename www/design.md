# Design — Cosmic Meta NFT / www

This is the locked visual system for the standalone `www` surface. The existing Vite implementation remains unchanged.

## Genre

Atmospheric, with a technical NFT-archive voice.

## Macrostructure family

- Marketing surface: Ecosystem Index — a discovery-first collection inventory with utility and roadmap bands.
- App/content surface: not in scope for this static website.

## Theme

- Paper: deep indigo `oklch(13% 0.026 286)`
- Elevated paper: `oklch(17% 0.03 286)`
- Ink: `oklch(94% 0.02 286)`
- Accent: signal lime `oklch(89% 0.21 126)`
- Accent placement: links, focus, small rules and mint state only.

## Typography

- Display: Space Grotesk 600, roman.
- Body: IBM Plex Sans 400.
- Outlier: IBM Plex Mono 500 for the wordmark and metadata.
- Display size: `--text-display` in `tokens.css`.

## Spacing and motion

Use named four-point spacing tokens only. Motion is restricted to a single first-load hero entrance and a small image-crop response on fine pointers. Reduced-motion is opacity-only.

## CTA voice

Links are concise verbs and marketplace names. Mint action uses an outlined lime treatment; no oversized filled buttons.

## What this surface shares

The Cosmic Meta NFT name, original collection artwork, verified external links and all supplied utility claims.

## Exports

The complete reusable token set is in [tokens.css](./tokens.css).
