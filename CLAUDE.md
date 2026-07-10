# bestchainsaw-uk - Project Brain

Per-repo brain for bestchainsaw.uk, created at Phase 3 (Build/scaffold). Canonical project memory lives here going forward; do not create a separate central dated file for this site.

## Current state

**Wave-1 build + QA gate complete, GitHub live, Cloudflare deploy BLOCKED, 2026-07-10.** Astro 6 + Tailwind 4 site built at `C:\Users\sunny\repos\bestchainsaw-uk`. All 11 wave-1 pages have full prose, PickCard/PriceGrid data and FAQs written by parallel content agents, then passed a pre-deploy QA gate: winner-audit (7-rule/14pt rubric) scored on homepage + all 3 money pages (electric/cordless/petrol), WCAG 2.1 AA accessibility pass, table-style audit, dead-link/placeholder sweep, and `public/og-default.png` generation. Full scorecard below under "QA gate results". `OwnerVoices.astro`/`ownerVoices.ts` are still deliberately empty (no real quotes sourced yet) - that stays Wave 2 scope, not fabricated to pass the audit.

Build verified green (`npm run build`, 12 pages, no errors). **Pushed to GitHub: `sunnyp81/bestchainsaw-uk`, branch `master`.** Cloudflare Pages deploy attempted via the standard `cfut_143...` wrangler token from `master-builds.md` and FAILED: `Authentication error [code: 10000]` / `Invalid access token [code: 9109]`. Per `reference_hermes-autodeploy-cf-token.md` in central memory, that exact token is confirmed DEAD from a prior rotation gap - the current working token only lives in `/etc/hermes-operator.env` on the Hermes VPS, not synced to this desktop's `~/.claude/.env`. **[MANUAL, blocking]: Sunny needs to either (a) supply a current `CLOUDFLARE_API_TOKEN` for account `aba0a6722a4510842ca473315a8ba13e`, (b) connect the GitHub repo to Cloudflare Pages himself via the dashboard, or (c) add this repo to Hermes's wrangler-autodeploy cron.** Once deployed, DNS still needs pointing at the new Pages project (domain is confirmed renewed, active to July 2027, currently shows a stale Namecheap parking page).

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

## Model accuracy + price grid (Opus reassessment, 2026-07-10)

A fresh-eyes reassessment caught that the wave-1 content agents had named **four discontinued or non-existent chainsaw models** (they "verified specs via web search" but the specs belonged to superseded models). All corrected + verified live:

| Wrong model (shipped) | Problem | Corrected to | Buy path |
|---|---|---|---|
| Bosch AKE 35 (electric) | discontinued | Bosch UniversalChain 35 | Amazon (on sale there) + B&Q £129 verified |
| EGO CS1401E (cordless, firewood) | delisted UK | EGO Power+ CS1410E (bare) / CS1411E (kit) | Amazon (EGO is Amazon + specialist-dealer only) |
| Ryobi RY18CSA (cordless) | phantom SKU, never existed | Ryobi ONE+ OCS1830 | Amazon |
| Stihl MS 211 (petrol, firewood) | discontinued | Stihl MS 212 | dealer only (see below) |

**Dealer-channel rule (important, honesty-critical):** Stihl and Husqvarna petrol saws are NOT sold new by Amazon/B&Q/Screwfix in the UK (dealer / brand-direct only); Screwfix's Titan own-brand is Screwfix-exclusive (not on Amazon). Linking any of these to an Amazon affiliate search lands the buyer on used/grey-import/parts junk. `PickCard.astro` now takes `dealerUrl` + `dealerLabel` props that render an honest non-affiliate (rel nofollow) "Find a dealer" / "View at Screwfix" CTA. Stihl -> `stihl.co.uk/en/dealer-locator`, Husqvarna -> `husqvarna.com/uk/dealer-locator/`, Titan -> Screwfix. **Strategic takeaway: the premium picks people actually want (Stihl/Husqvarna) are editorial/dealer and earn no affiliate; the affiliate money is the mid-market online brands (Bosch, Makita, Ryobi, EGO, Hyundai). The site reflects both honestly.**

**Price grid = now data-driven + real.** `PriceGrid.astro` reads `src/data/priceGrid.ts` by `modelKey` (single source of truth). Every non-Amazon row is a fetch-verified product-page DEEP LINK (not a search page) with a dated indicative price ("Prices checked 10 Jul 2026") and a `nofollow` rel; Amazon rows are tagged (`sponsored`) and deep-link by ASIN or fall back to tagged search, with no snapshot price (live on click). Three grids live, all verified 2026-07-10: `bosch-universalchain-35` (electric, B&Q £129 + Amazon), `makita-duc353z` (cordless, Screwfix £279.98 + Toolstation £279.99 bare tool + Amazon), `hyundai-hyc6200x` (petrol, Hyundai-direct £129.99 + Amazon). To refresh prices, edit only `src/data/priceGrid.ts` and bump each entry's `checked` date. Retailers that bot-block automated fetches (Amazon price, ManoMano, Robert Dyas, Currys) are deep-linked without a snapshot rather than carrying a guessed figure.

Committed + pushed to `master` (commit "fix: correct 4 discontinued/phantom chainsaw models + real data-driven price grid"). Verified post-fix: build green, 78 JSON-LD blocks parse, no discontinued/phantom model names in built HTML, no Amazon links wrapping Stihl/Husqvarna/Titan, all 4 product URLs resolve 200, no dashes / fabricated testing / fake ratings.

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

**GitHub: LIVE at `sunnyp81/bestchainsaw-uk` (branch `master`). Cloudflare Pages: BLOCKED on a dead API token — see status note above.** Once unblocked: `npm run build`, output `dist`, `NODE_VERSION=22`, project name `bestchainsaw-uk` for consistency with the repo/GitHub name.

## Dossier / prior phases

All three now live in this repo: `docs/research-dossier.md` (Phase 0, verdict GO lean-scope-only — corrected mid-session from a real arithmetic error, see the dossier's own header for the correction), `site-identity.md` (Phase 1, brand/USP/voice/visual identity), `docs/build-manifest.md` (Phase 2, topical map + schema plan + AI-answer architecture + the 11-URL build manifest). `docs/growth-plan.md` (Phase 5) is also in place, with its enrolment/review dates marked as placeholders pending the actual go-live date.

## Open items (MANUAL, for Sunny)

- **Cloudflare Pages deploy blocker (see status note above) — this is the one thing actually stopping launch.**
- Real GA4 Measurement ID (`BaseLayout.astro` currently has placeholder `G-XXXXXXXXXX`, clearly commented).
- DNS: point bestchainsaw.uk at the Cloudflare Pages project once it exists (domain itself is fine, renewed to July 2027).
- Real logo (`public/logo.svg`) and favicon (`public/favicon.svg`), both are lean placeholders, flagged inline.
- Real `SITE.sameAs` URLs once verified profiles exist; confirm publishing entity (personal vs ND Media LTD).
- Sourced OwnerVoices quotes (`src/data/ownerVoices.ts` is still deliberately empty) - real, attributed quotes from Arbtalk/UK chainsaw forums/Amazon UK reviews, never invented. Wave 2 scope. (Note: the Phase 0 dossier already captured some real, sourced Arbtalk quotes with thread IDs - see `docs/research-dossier.md` section 4 - these could seed this file honestly rather than needing fresh sourcing.)
- `og-default.png` now exists (`public/og-default.png`, generated via `scripts/make-og.mjs`); regenerate with `node scripts/make-og.mjs` if the brand palette changes.
- Once live: GSC + Bing property setup, sitemap submission, `/launch-seo` + `/index-push` (all blocked on deploy, see `docs/growth-plan.md` section 2).
