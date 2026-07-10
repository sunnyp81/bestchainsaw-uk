# bestchainsaw-uk - Project Brain

Per-repo brain for bestchainsaw.uk, created at Phase 3 (Build/scaffold). Canonical project memory lives here going forward; do not create a separate central dated file for this site.

## Current state

**Phase 4 (content) + QA gate complete, 2026-07-10.** Astro 6 + Tailwind 4 site built locally at `C:\Users\sunny\repos\bestchainsaw-uk`. Not yet deployed, not yet pushed to GitHub (no remote configured). All 11 wave-1 pages have full prose, PickCard/PriceGrid data and FAQs written by parallel content agents, then passed a pre-deploy QA gate: winner-audit (7-rule/14pt rubric) scored on homepage + all 3 money pages (electric/cordless/petrol), WCAG 2.1 AA accessibility pass, table-style audit, dead-link/placeholder sweep, and `public/og-default.png` generation. Full scorecard and fixes below under "QA gate results (2026-07-10)". `OwnerVoices.astro`/`ownerVoices.ts` are still deliberately empty (no real quotes sourced yet) - that stays Wave 2 scope, not fabricated to pass the audit.

Build verified green (`npm run build`, 12 pages, no errors) after QA fixes. Git repo initialised locally; not pushed to GitHub, no remote created.

## QA gate results (2026-07-10)

Winner-audit (0-14, gate is >=8) before/after fixes, scored manually against full page source (WebFetch can't reach a local `astro preview` port, so the rubric was applied directly to each `.astro` file + rendered HTML):

| Page | Before | After | Notes |
|---|---|---|---|
| `/` (homepage) | 10/14 | 12/14 | Freshness Stamp was the only weak rule (0, no visible date anywhere) |
| `/electric-chainsaws/` | 8/14 | 10/14 | Borderline pre-fix; Freshness Stamp scored 0 (no year in title, no visible date) |
| `/cordless-chainsaws/` | 10/14 | 12/14 | Freshness Stamp already partial (2026 in title); added visible date too |
| `/petrol-chainsaws/` | 10/14 | 12/14 | Freshness Stamp scored 0 (no year in title, no visible date) |

Fix applied site-wide: new `src/components/ReviewedStamp.astro` renders each page's real, already-declared `datePublished` (schema const) as visible body text ("Guide reviewed for accuracy: 10 July 2026"), added to all 11 wave-1 pages (10 via `datePublished`, homepage via a local `lastReviewed` const). Also added "2026" to the `/electric-chainsaws/` and `/petrol-chainsaws/` page titles to match the convention already used on `/cordless-chainsaws/`. No fabricated dates or claims, every date matches the page's real `datePublished`/authoring date.

Accessibility fixes (WCAG 2.1 AA): `PickCard.astro` star rating used `text-hivis-500` on white, contrast ~1.9:1 (fails 4.5:1) and was also a misuse of the `hivis` token (reserved for PPE/warning bands only per the design system rule above) -> changed to `text-hazard-600` (~4.8:1, passes, correct token). `Header.astro` mobile-menu button's `aria-label` was static "Open menu" even when expanded -> now toggles "Open menu"/"Close menu" alongside `aria-expanded`. FitCheck form labels/keyboard operability, focus states, heading hierarchy (all 11 pages checked, no skipped levels), skip link, `lang="en-GB"`, and alt text were all already correct, no changes needed there.

Table styling: `.prose-chainsaw table/th/td` in `global.css` had borders but no rounded corners, no uppercase headers, no row hover -> added `rounded-xl` container, uppercase+tracked `hazard-50` headers, `surface-100` row hover, `scope="col"` added to every `<th>` across the 5 pages with data tables plus `PriceGrid.astro`.

Dead-link/placeholder sweep: clean. No TODO/PLACEHOLDER/Lorem ipsum in any page. Every internal `href` resolves to a real wave-1 page or `/#fit-check`; nothing links to unbuilt Wave-2 slugs.

`public/og-default.png` (1200x630) generated via new `scripts/make-og.mjs` (adapted from thebestmowers' sharp-based script, re-themed to this site's hazard-orange/graphite palette with the HazardTape diagonal-stripe motif top and bottom, wordmark + honest tagline, no fabricated ratings/claims).

## Identity summary

- **Brand**: Best Chainsaw (`bestchainsaw.uk`). Independent UK chainsaw buying guides.
- **USP**: research-led recommendations (manufacturer specs + verified owner/forum reviews + HSE/EN381 safety standards + UK retail pricing) *plus* the Fit Check tool, a deterministic, rule-based decision tool (task + branch diameter + experience -> power type, bar length, PPE tier) that is the homepage hero, not a photo.
- **Voice/editor**: Sunny Patel is the real, named publisher/researcher (not a fabricated tester). `personSchema()` in `src/lib/schema.ts` carries this; `Organization.founder` points at the same `#person` node.
- **Visual identity**: industrial/safety theme, distinct from thebestmowers' green/soil palette. Tokens in `src/styles/global.css` `@theme`: `hazard-500/600` (primary/CTA orange), `hivis-400` (sparing PPE-band yellow, never decorative), `graphite-900` (ink/dark sections), `steel-400/600` (borders/secondary text), `surface-50` (base), `danger-600` (kickback/safety callouts only). Heading font Archivo, body Inter, spec/data figures (bar length, cc, voltage, price) IBM Plex Mono, loaded via Google Fonts CDN link in `BaseLayout.astro` (no added font dependency).
- **Signature component**: `HazardTape.astro`, a CSS-only diagonal orange/black stripe band framing a solid graphite bar, used once per page to carry the EN381/PPE or safety callout line. Reused in the footer, `/chainsaw-safety/`, `/replace-bar/` and the FitCheck hero.

## Honesty rules (non-negotiable, learned the hard way on thebestmowers)

- **Never** write or scaffold copy implying hands-on/staged testing ("we tested", "we measured", "in our tests") anywhere, including placeholder content. `HowWeResearch.astro` states explicitly: research-led (manufacturer specs + verified owner/forum reviews + UK retail pricing + HSE/EN381 citations), no staged testing claimed.
- `productReviewSchema()`'s `aggRating`/`aggCount` stay optional and unused unless a real, sourced count exists. Never populate with fake numbers.
- `OwnerVoices.astro` + `src/data/ownerVoices.ts`: real-attributed-quote pattern, framed "reflects authors, not us". Quote data is currently **empty**, content agents must source real quotes from Arbtalk/UK chainsaw forums/Amazon UK reviews, never invent them.
- `SITE.sameAs` in `src/lib/site.ts` is intentionally `[]`. Do not populate until real, verified profiles (Companies House / Trustpilot / socials) exist.
- `PriceGrid.astro`: Amazon always has a tagged-search fallback; every other retailer column (Screwfix/Toolstation/B&Q/ManoMano) is omitted entirely unless a real URL is supplied. Never fabricate a price or product URL.

## Amazon affiliate tag

**`chainsaw0f6-21`**, single source of truth in `src/lib/affiliate.ts` (`AMAZON_TAG`). This is NOT thebestmowers' tag; every affiliate link on this site must resolve through `amazonLink()`/`amazonSearch()` from that file so the tag stays centralised. `AFFILIATE_REL = 'nofollow sponsored noopener noreferrer'` on every outbound affiliate link.

## Deploy

**TBD. [MANUAL: Sunny to create the Cloudflare Pages project].** Matches portfolio convention: GitHub repo -> Cloudflare Pages, build `npm run build`, output `dist`, `NODE_VERSION=22`. Repo not yet pushed to GitHub (deliberately out of scope for Phase 3, see build instructions).

## Dossier / prior phases

Phase 0 (research/GO-NO-GO), Phase 1 (brand identity/USP/visual identity) and Phase 2 (semantic architecture) outputs were supplied inline to the Phase 3 build instructions rather than as a linked file; no dossier document was found on disk at scaffold time (checked `G:\My Drive\SEO\`). **[MANUAL: link the actual Phase 0-2 dossier/research doc here once located]** so later phases and future agents have the sourcing trail.

## Open items (MANUAL, for Sunny)

- Real GA4 Measurement ID (`BaseLayout.astro` currently has placeholder `G-XXXXXXXXXX`, clearly commented).
- Cloudflare Pages project creation + DNS, then push this repo to GitHub (no remote yet).
- Real logo (`public/logo.svg`) and favicon (`public/favicon.svg`), both are lean placeholders, flagged inline.
- Real `SITE.sameAs` URLs once verified profiles exist.
- Sourced OwnerVoices quotes (`src/data/ownerVoices.ts` is still deliberately empty) - real, attributed quotes from Arbtalk/UK chainsaw forums/Amazon UK reviews, never invented. Wave 2 scope.
- `og-default.png` now exists (`public/og-default.png`, generated via `scripts/make-og.mjs`); regenerate with `node scripts/make-og.mjs` if the brand palette changes.
