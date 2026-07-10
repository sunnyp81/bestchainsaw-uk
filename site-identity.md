# Site Identity Record: Best Chainsaw

```yaml
siteId: bestchainsaw-uk
domain: bestchainsaw.uk
launched: TBD
```

Brand name (display): **Best Chainsaw**, wordmark styled as the lowercase domain `bestchainsaw.uk` (deliberately lowercase to sit apart from the sibling's Title Case "The Best Mowers").

## Entity definition (quotable by an LLM, one sentence)

> Best Chainsaw is a UK chainsaw buying-guide site for homeowners, smallholders and occasional users that recommends the right saw through an interactive Fit Check tool, matching your task, cut size and experience level to a specific bar length, power type, named UK-available models and the PPE tier you legally need, rather than a static best-of list.

## USP

- **Statement:** Best Chainsaw is the only UK chainsaw site with a working Fit Check tool that converts your task, cut diameter and experience level into a specific bar length, power type, named UK-available models and the EN381/HSE PPE tier required, then matches those picks to live prices across Amazon, Screwfix, Toolstation, B&Q and ManoMano.
- **Traced to dossier gap:** section 5 competitor teardown — the interactive Fit Check decision tool (no competitor including the 13/14 BBC Gardeners' World has a usable one, only static tables), reinforced by the live multi-retailer UK price grid (competitors are Amazon-affiliate-link-only).
- **Passes specificity test:** No banned words; falsifiable ("only UK site with a working tool" fails the moment a competitor ships one); not held by any top-5 competitor; not used by thebestmowers (its static inline-SVG charts are not an input-driven tool).

## Positioning

| vs | They are | We are |
|---|---|---|
| **BBC Gardeners' World** (13/14) | High-authority editorial, scoped to mini/handheld chainsaws only (3 products), static picks, no interactive help, no petrol or full-size firewood coverage. | Full task scope pruning to garden felling to firewood, interactive Fit Check outputting bar length/power type/named UK models across every power class. |
| **gardentoolbox.co.uk** (current #1 ranker, 5/14, stale since Jan 2023) | Incumbent ranker but thin, dated to 2023, single-retailer affiliate links, no decision help. | Refreshed and dated UK content, live pricing across five retailers, a working Fit Check tool, openly stated research-led method. |
| **GarageWorld360** (10/14, best regulatory depth) | Strong on EN381/HSE detail but presents synthetic/aggregated "testing" as hands-on. | Same regulatory rigour tied to EN381/HSE/AFAG, honest about method: no invented test lab, backed by real attributed UK owner/community voices (Arbtalk, UK forums). |

## Audience (ICP)

UK homeowners, smallholders and occasional users cutting at garden/firewood/pruning scale, not professional arborists (served by Arbtalk and trade suppliers). Skews beginner or infrequent. Budget-conscious but distrustful of unbranded ultra-cheap saws, while open to a known budget corded-electric (e.g. Screwfix Titan ~£40-50) for light use. Safety-anxious: visceral kickback fear, confused by "chainsaw licence" myths (NPTC/CS30-31 not legally required for personal domestic use). Dominant regret is oversizing, not undersizing. Picks a brand by local dealer, not loyalty. Respects UK noise-curfew norms (8am-6pm weekdays, 8am-1pm Sat, never Sun).

## Author persona (E-E-A-T)

- **Name:** Sunny Patel (real publisher and editor — no fabricated specialist character).
- **Credential/experience claim:** SEO consultant and independent publisher who runs a portfolio of UK buying-guide sites. Compiles and cross-checks each recommendation from published manufacturer specs, live UK retail pricing, and verified owner/community reviews (Arbtalk and UK gardening/forestry forums); cites safety/regulatory points to HSE and EN381/AFAG sources. Does not perform hands-on chainsaw testing and the site says so plainly.
- **Bio:** Best Chainsaw is researched and edited by Sunny Patel, a UK-based SEO consultant who builds independent buying-guide sites. He does not run a test lab: every pick is built from manufacturer specs, current UK retailer pricing, and real owner/forum reviews, cross-checked so the figures on the page match the figures on the box. Where a number is the maker's claim rather than an independent measurement, the site labels it as such.
- **sameAs:** [MANUAL] Sunny to supply real profile URLs (LinkedIn, sunnypatel.co.uk author page, real Arbtalk/forum profile if genuine). Leave empty until supplied — never fabricate.

## Voice

- **3 traits:** (1) Straight-talking and plain — resolves confusing bits (licence myth, bar length vs cc, voltage vs amp-hours) in one clear pass. (2) Safety-first without scaremongering — kickback/PPE/noise curfews handled factually, not for panic. (3) Sceptical of hype and of oversizing — validates a good budget corded saw for light use, warns against "too much saw."
- **Never:** em/en dashes; fabricated hands-on testing claims ("we tested", "we measured", invented tester credentials); banned USP words (comprehensive, ultimate, one-stop, best-in-class, all-in-one, trusted, leading); hype/promotional superlatives; presenting a maker's spec as independent measurement; claiming a "chainsaw licence" is legally required for domestic use.
- British English. "to" not "through" for date ranges.

## Visual direction

Industrial and equipment-led — a workshop/safety resource, not a garden brand.

- **Palette:**
  - `--color-hazard-500: #F1580F` (safety orange, primary/CTA)
  - `--color-hazard-600: #C8460B` (deep orange, hover/emphasis)
  - `--color-hivis-400: #F4D000` (hi-vis yellow, sparing accent — PPE/warning band)
  - `--color-graphite-900: #1B1E21` (industrial charcoal, primary ink/dark sections)
  - `--color-steel-600: #4A5259` / `--color-steel-400: #8A9299` (steel greys, borders/secondary text)
  - `--color-surface-50: #F5F5F4` (cool off-white base)
  - `--color-danger-600: #C1121F` (true-hazard red, reserved only for kickback/serious-safety callouts, never decorative)
- **Type:** Heading = Saira or Archivo (squared industrial grotesque). Body = Inter (humanist sans). Spec figures (bar length, cc, voltage, price) in IBM Plex Mono as a signature data treatment.
- **Layout signature:** The Fit Check tool is the homepage hero itself — a working interactive panel, not a photo hero with a tool buried below. Secondary motif: a hazard-tape band (orange on charcoal) carrying the EN381 PPE-tier/safety line, once per page.
- **Must NOT resemble:** thebestmowers.co.uk — avoid its grass-green (#51a134) + soil-brown palette, all-system-ui type, soft rounded garden-blog feel. Best Chainsaw is orange/charcoal/steel, squared/industrial, data-forward.

## Entity home plan

- **Entity home URL:** `/about/` as canonical Entity Home (Organization schema also on homepage, same `@id`).
- **Corroboration targets:** sunnypatel.co.uk portfolio/author page [MANUAL: URL], LinkedIn [MANUAL], portfolio sibling cross-links (thebestmowers.co.uk etc.), Companies House if published under ND Media LTD [MANUAL: confirm publishing entity, don't assume], Amazon Associates disclosure on-site, real Arbtalk/forum profile only if genuine [MANUAL]. Wikidata/Crunchbase deferred — low priority until independently notable.
- **Organization + Person schema wiring:** Organization (`name: "Best Chainsaw"`, `url`, `@id`=/about/, `alternateName`, `logo`, `description`, `sameAs: []` until real URLs exist) as `publisher` sitewide. Person (Sunny Patel) as `author`/`editor` + Organization `founder`, `jobTitle: "Publisher and Editor"`, `knowsAbout` scoped honestly (UK chainsaw buying advice, EN381/HSE safety guidance, affiliate research method) — never implying hands-on arboriculture. `sameAs` emits only when non-empty (proven sibling pattern).

## USP specificity test — 5/5 PASS

1. No banned words — PASS
2. Specific and falsifiable — PASS (names tool, inputs, outputs, standard, 5 retailers)
3. Not claimed by top-5 competitors — PASS
4. Distinct from thebestmowers/portfolio siblings — PASS (verified against sibling source, no interactive tool there)
5. Deliverable and honest, not hollow — PASS (lightweight client-side widget, no fabricated testing needed)

## [MANUAL] items for Sunny

- Real `sameAs` profile URLs (LinkedIn, sunnypatel.co.uk author page, real forum profile)
- Confirm publishing entity: personal or ND Media LTD (decides Companies House corroboration + Organization legal name)
- `launched` date once live
- Real author image for Person schema (optional; never stock-as-real)
