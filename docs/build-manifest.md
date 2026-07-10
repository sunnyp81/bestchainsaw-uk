# bestchainsaw.uk — Phase 2 Semantic Architecture (Wave 1 lean build)

Scope discipline: ~£1-7/mo portfolio tree. Wave 1 = homepage/tool + 10 pages, commit now. Wave 2/3 reference-only, conditional on Wave 1 GSC impressions.

## Topical map

**ROOT:** `/` — Fit Check tool + live 5-retailer price grid. Links to/from every page.

**Core NODEs (money, disambiguation spine):** `/electric-chainsaws/` (corded), `/cordless-chainsaws/` (battery), `/petrol-chainsaws/`

**SEED/support (AI-gap + trust):** `/chainsaw-battery-voltage/`, `/cheap-chainsaws/`, `/chainsaw-for-firewood/`, `/first-chainsaw/`, `/chainsaw-safety/`, `/replace-bar/`

**Entity home:** `/about/`

**Wave 2/3 (reference only, do not build now):** `/electric-vs-cordless-chainsaw/`, `/chainsaw-bar-length/`, `/chainsaw-kickback/`, `/chainsaw-noise-rules-uk/`, `/pole-saws/`, `/mini-chainsaws/`, `/chainsaw-brands-uk/`, `/chainsaw-chain-types/`, model-review spokes (Stihl MS 170, Titan TTL, Ryobi ONE+ 18V, EGO CS1400), `/chainsaw-sharpening/` (split from replace-bar if it earns), `/chainsaw-licence-uk/` (split from safety if it earns).

## URL rules

No year in slug, no domain/TLD words, flat hub-and-spoke, UK modifier in title/H1 not slug.

## Legacy redirects (preserve real earnings)

- `/best-electric-chainsaws-top-3/` → 301 → `/electric-chainsaws/`
- `/best-petrol-chainsaws-top-3/` → 301 → `/petrol-chainsaws/`
- `/cordless-chainsaw-reviews-top-3/` → 301 → `/cordless-chainsaws/`
- `/electric-sharpener-reviews-top-3/` → 301 → `/replace-bar/`
- `/replace-bar/` → **kept live, no redirect** (real earnings history; upgraded content served here, sharpening/tensioning/oil folded in as sections)

## Internal link plan

Every page → Fit Check (homepage) + at least one sibling. Homepage hubs to all 10. Tool result screen deep-links to matched power-type page + safety page.

| Page | → Siblings |
|---|---|
| `/electric-chainsaws/` | `/cordless-chainsaws/`, `/cheap-chainsaws/`, `/chainsaw-safety/` |
| `/cordless-chainsaws/` | `/chainsaw-battery-voltage/`, `/electric-chainsaws/`, `/chainsaw-safety/` |
| `/petrol-chainsaws/` | `/chainsaw-for-firewood/`, `/replace-bar/`, `/chainsaw-safety/` |
| `/chainsaw-battery-voltage/` | `/cordless-chainsaws/`, `/first-chainsaw/` |
| `/cheap-chainsaws/` | `/electric-chainsaws/`, `/petrol-chainsaws/` |
| `/chainsaw-for-firewood/` | `/petrol-chainsaws/`, `/cordless-chainsaws/`, `/chainsaw-safety/` |
| `/first-chainsaw/` | `/chainsaw-safety/`, `/electric-chainsaws/` or `/cordless-chainsaws/`, `/cheap-chainsaws/` |
| `/chainsaw-safety/` | `/first-chainsaw/`, `/replace-bar/`; external → HSE.gov.uk |
| `/replace-bar/` | `/chainsaw-safety/`, `/petrol-chainsaws/`; external → Stihl/Husqvarna UK |
| `/about/` | all 3 money pages |

## Schema plan

Reuse thebestmowers `src/lib/schema.ts` (orgSchema, websiteSchema, breadcrumbSchema, articleSchema, faqSchema, itemListSchema, productReviewSchema, howToSchema, speakableSchema) and `src/lib/affiliate.ts` (amazonLink, amazonSearch, AFFILIATE_REL). Set `AMAZON_TAG = 'chainsaw0f6-21'`. Add two new helpers: `personSchema`, `webApplicationSchema` (the Fit Check tool).

**Global (every page):** Organization (@id #org), WebSite (@id #website, inLanguage en-GB), Person (@id #person), BreadcrumbList, SpeakableSpecification (h1, .faq-answer).

**Organization:** name "Best Chainsaw", url, logo, foundingDate, founder→#person, knowsAbout [chainsaws, chainsaw safety, EN381 PPE, chainsaw maintenance], sameAs: [] until real profiles exist.

**Person:** "Sunny Patel", jobTitle "Publisher / Researcher", worksFor→#org, honest research-led description, sameAs real profiles only.

| Template | Pages | Schema |
|---|---|---|
| Homepage/tool | `/` | Organization, WebSite, Person, WebApplication (name "Chainsaw Fit Check"), ItemList, FAQPage, Breadcrumb, Speakable |
| Power-type roundup | electric/cordless/petrol | Article, ItemList, Product+AggregateOffer (GBP price from live grid), FAQPage, Breadcrumb |
| AI-gap guide+picks | cheap, firewood | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb |
| AI-gap guide+table | battery-voltage | Article, FAQPage, Breadcrumb |
| Beginner | first-chainsaw | Article, FAQPage, small ItemList, Breadcrumb |
| Safety | chainsaw-safety | Article, FAQPage, Breadcrumb (HSE cited as external link, not schema) |
| Maintenance | replace-bar | HowTo (primary), Article, FAQPage, Breadcrumb |
| Entity home | about | AboutPage, Organization (full), Person, Breadcrumb |

**Honesty guards:** no aggregateRating without real sourced counts; no per-retailer Offer schema unless ASIN+live GBP price is real; no Product schema on homepage (it's a tool).

## AI-answer architecture (per page: lead / fan-out / Q&A / anchor)

- **`/`** — Lead: size the saw to the wood not the wish list; bar ~5cm longer than thickest cut; corded <20cm pruning, cordless portable garden work, petrol regular firewood/storm clearance. Anchor: "bar 5cm longer than thickest cut" rule + EN381 PPE + UK noise hours.
- **`/electric-chainsaws/`** — Lead: corded mains saw for light close-to-house work <20-25cm, NOT cordless/battery. Anchor: UK price band £40-90, motor 1800-2200W, max trunk ~20-25cm.
- **`/cordless-chainsaws/`** — Lead: lithium-ion battery saw (18V/36-40V/60V/80V), cable-free at cost of run-time. Anchor: voltage-to-use mapping + real Ah run-time (4.0Ah 36V ≈ 40-60 cuts).
- **`/petrol-chainsaws/`** — Lead: two-stroke workhorse (cc) for regular firewood/felling/storms; 35-45cc+14-16in covers most firewood, 50cc+ for felling. Anchor: cc-to-task table + 50:1 mix + £120-350 band.
- **`/chainsaw-battery-voltage/`** — Lead: voltage maps to peak power (18-20V ~15cm, 36-40V ~25cm, 60-80V rivals small petrol); Ah sets run-time not power. Anchor: V/Ah spec table (voltage tier → max trunk cm → typical Ah → cuts/charge) — the page's whole reason to exist.
- **`/cheap-chainsaws/`** — Lead: cheap saw worth it for light occasional work (£40-50 Screwfix Titan corded genuinely trusted); false economy as cheap petrol for firewood. Anchor: real Titan price + corded-worth-it/petrol-not split (owner-sourced, cited honestly).
- **`/chainsaw-for-firewood/`** — Lead: best UK firewood saw is 35-45cc petrol+14-16in bar for regular use, or 40V+ cordless for smaller quiet jobs. Anchor: bar-to-log sizing rule + named UK models (Stihl MS 181, Husqvarna 120, EGO CS1400) with real price band.
- **`/first-chainsaw/`** — Lead: safest first saw is corded or 36-40V cordless with chain brake, kept small (12-14in); no licence for domestic use but EN381 PPE + UK noise hours apply; start smaller than you think. Anchor: "no licence for domestic use" (HSE) + oversizing-regret finding + EN381.
- **`/chainsaw-safety/`** — Lead: no licence/certificate legally required for domestic-property use in UK (HSE requires certification only for work use); EN381 PPE for everyone; most serious injuries from kickback, largely prevented by chain brake + technique. Anchor: EN381 standard + HSE link + UK noise hours. Cites HSE.gov.uk.
- **`/replace-bar/`** — Lead: replacing bar/chain takes ~10 min (release brake, remove side-cover nuts, refit with top cutters forward, tension snug but hand-turnable); blunt/mistensioned chain is the biggest cause of poor cutting and kickback. Anchor: tension spec (lifts ~3mm, turns by hand) + file/angle guidance, citing Stihl/Husqvarna UK.
- **`/about/`** — Lead: independent UK buying-guide site published by Sunny Patel; no staged hands-on tests, every pick from manufacturer specs + verified owner/forum reviews + live UK retail pricing; commission never changes the recommendation. Anchor: the methodology statement itself.

## Build manifest (Wave 1, commit now — 11 URLs)

| URL | Intent | Template | Schema | Target query | Wave | Legacy redirect |
|---|---|---|---|---|---|---|
| `/` | Choose (tool) | Homepage + Fit Check | Organization, WebSite, Person, WebApplication, ItemList, FAQPage, Breadcrumb, Speakable | "what chainsaw do I need UK" | 1 | none |
| `/electric-chainsaws/` | Commercial | Power-type roundup | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb | "best corded electric chainsaw UK" | 1 | `/best-electric-chainsaws-top-3/` (301) |
| `/cordless-chainsaws/` | Commercial | Power-type roundup | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb | "best cordless chainsaw UK" | 1 | `/cordless-chainsaw-reviews-top-3/` (301) |
| `/petrol-chainsaws/` | Commercial | Power-type roundup | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb | "best petrol chainsaw UK" | 1 | `/best-petrol-chainsaws-top-3/` (301) |
| `/chainsaw-battery-voltage/` | Informational (AI gap) | Guide+spec table | Article, FAQPage, Breadcrumb | "18V vs 40V vs 80V chainsaw" | 1 | none |
| `/cheap-chainsaws/` | Commercial-info (AI gap) | Guide+picks | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb | "are cheap chainsaws worth it UK" | 1 | none |
| `/chainsaw-for-firewood/` | Commercial-info (AI gap) | Guide+picks | Article, ItemList, Product+AggregateOffer, FAQPage, Breadcrumb | "best chainsaw for firewood UK" | 1 | none |
| `/first-chainsaw/` | Informational | Beginner guide | Article, FAQPage, ItemList, Breadcrumb | "beginner/first chainsaw UK" | 1 | none |
| `/chainsaw-safety/` | Informational (trust) | Safety guide | Article, FAQPage, Breadcrumb | "do I need a licence for a chainsaw UK" | 1 | none |
| `/replace-bar/` | How-to | HowTo guide | HowTo, Article, FAQPage, Breadcrumb | "how to replace a chainsaw bar" | 1 | `/electric-sharpener-reviews-top-3/` (301 here); page itself kept live |
| `/about/` | Entity home | About | AboutPage, Organization, Person, Breadcrumb | "who is behind bestchainsaw.uk" | 1 | none |

## Key decisions for Phase 3

- Wave 1 = homepage/tool + 10 pages = 11 URLs. No model-review spokes or comparison pages until Wave 2 (gated on impressions).
- `/replace-bar/` stays live, no redirect — protects real earnings history.
- Electric vs cordless disambiguation handled via cross-links + lead paragraphs in Wave 1, not a dedicated page (that's top Wave 2 candidate).
- Plumbing: copy `schema.ts` + `affiliate.ts` from thebestmowers, set `AMAZON_TAG = 'chainsaw0f6-21'`, add `personSchema` + `webApplicationSchema` helpers. Reuse OwnerVoices + HowWeResearch component patterns (visual layer rebuilt fresh per identity).
- Fit Check `WebApplication` schema ships in Wave 1 — the single most important AI/entity differentiator.
