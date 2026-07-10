# bestchainsaw-uk — Project Brain

Per-repo brain for bestchainsaw.uk, created at Phase 3 (Build/scaffold). Canonical project memory lives here going forward; do not create a separate central dated file for this site.

## Current state

**Phase 3 (scaffold) complete, 2026-07-10.** Astro 5/6 + Tailwind 4 site scaffolded locally at `C:\Users\sunny\repos\bestchainsaw-uk`. Not yet deployed, not yet pushed to GitHub. 11 wave-1 page shells exist (layout + BaseLayout wiring + schema wiring + placeholder H1/lead + TODO markers) but **do not yet contain full prose content, real PickCard/PriceGrid product data, or sourced FAQs/OwnerVoices quotes** — that is Phase 4, owned by separate content-writing agents.

Build verified green (`npm install` + `npm run build` both passed at scaffold time). Git repo initialised locally with a first commit; not pushed to GitHub, no remote created.

## Identity summary

- **Brand**: Best Chainsaw (`bestchainsaw.uk`). Independent UK chainsaw buying guides.
- **USP**: research-led recommendations (manufacturer specs + verified owner/forum reviews + HSE/EN381 safety standards + UK retail pricing) *plus* the Fit Check tool — a deterministic, rule-based decision tool (task + branch diameter + experience -> power type, bar length, PPE tier) that is the homepage hero, not a photo.
- **Voice/editor**: Sunny Patel is the real, named publisher/researcher (not a fabricated tester). `personSchema()` in `src/lib/schema.ts` carries this; `Organization.founder` points at the same `#person` node.
- **Visual identity**: industrial/safety theme, distinct from thebestmowers' green/soil palette. Tokens in `src/styles/global.css` `@theme`: `hazard-500/600` (primary/CTA orange), `hivis-400` (sparing PPE-band yellow, never decorative), `graphite-900` (ink/dark sections), `steel-400/600` (borders/secondary text), `surface-50` (base), `danger-600` (kickback/safety callouts only). Heading font Archivo, body Inter, spec/data figures (bar length, cc, voltage, price) IBM Plex Mono, loaded via Google Fonts CDN link in `BaseLayout.astro` (no added font dependency).
- **Signature component**: `HazardTape.astro` — CSS-only diagonal orange/black stripe band framing a solid graphite bar, used once per page to carry the EN381/PPE or safety callout line. Reused in the footer, `/chainsaw-safety/`, `/replace-bar/` and the FitCheck hero.

## Honesty rules (non-negotiable — learned the hard way on thebestmowers)

- **Never** write or scaffold copy implying hands-on/staged testing ("we tested", "we measured", "in our tests") anywhere, including placeholder content. `HowWeResearch.astro` states explicitly: research-led (manufacturer specs + verified owner/forum reviews + UK retail pricing + HSE/EN381 citations), no staged testing claimed.
- `productReviewSchema()`'s `aggRating`/`aggCount` stay optional and unused unless a real, sourced count exists. Never populate with fake numbers.
- `OwnerVoices.astro` + `src/data/ownerVoices.ts`: real-attributed-quote pattern, framed "reflects authors, not us". Quote data is currently **empty** — content agents must source real quotes from Arbtalk/UK chainsaw forums/Amazon UK reviews, never invent them.
- `SITE.sameAs` in `src/lib/site.ts` is intentionally `[]`. Do not populate until real, verified profiles (Companies House / Trustpilot / socials) exist.
- `PriceGrid.astro`: Amazon always has a tagged-search fallback; every other retailer column (Screwfix/Toolstation/B&Q/ManoMano) is omitted entirely unless a real URL is supplied. Never fabricate a price or product URL.

## Amazon affiliate tag

**`chainsaw0f6-21`** — single source of truth in `src/lib/affiliate.ts` (`AMAZON_TAG`). This is NOT thebestmowers' tag; every affiliate link on this site must resolve through `amazonLink()`/`amazonSearch()` from that file so the tag stays centralised. `AFFILIATE_REL = 'nofollow sponsored noopener noreferrer'` on every outbound affiliate link.

## Deploy

**TBD — [MANUAL: Sunny to create the Cloudflare Pages project].** Matches portfolio convention: GitHub repo -> Cloudflare Pages, build `npm run build`, output `dist`, `NODE_VERSION=22`. Repo not yet pushed to GitHub (deliberately out of scope for Phase 3 — see build instructions).

## Dossier / prior phases

Phase 0 (research/GO-NO-GO), Phase 1 (brand identity/USP/visual identity) and Phase 2 (semantic architecture) outputs were supplied inline to the Phase 3 build instructions rather than as a linked file; no dossier document was found on disk at scaffold time (checked `G:\My Drive\SEO\`). **[MANUAL: link the actual Phase 0-2 dossier/research doc here once located]** so later phases and future agents have the sourcing trail.

## Open items (MANUAL, for Sunny)

- Real GA4 Measurement ID (`BaseLayout.astro` currently has placeholder `G-XXXXXXXXXX`, clearly commented).
- Cloudflare Pages project creation + DNS.
- Real logo (`public/logo.svg`) and favicon (`public/favicon.svg`) — both are lean placeholders, flagged inline.
- `og-default.png` (1200x630) does not exist yet — `BaseLayout.astro` references `/og-default.png` by convention (matches thebestmowers pattern) but the file itself still needs creating.
- Real `SITE.sameAs` URLs once verified profiles exist.
- Phase 4 content: full prose, PickCard/PriceGrid real product data (with real retailer URLs/prices, never fabricated), sourced FAQs, sourced OwnerVoices quotes, for all 11 wave-1 pages.
