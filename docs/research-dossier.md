# Research Dossier: bestchainsaw.uk (UK chainsaw buying-guide/review rebuild)

Date: 2026-07-10 | Researcher: Claude (Sonnet 5), verdict reviewed by Claude (Opus) | Status: **GO (lean-scope only)**

**Final verdict (opus adversarial review, post baseline-correction):** GO, lean-scope only. At the corrected £13.83/yr (~£1.15/mo) real baseline, this is a bottom-tier portfolio earner (bestturbotrainers/bestvibrationplates territory), not mid-tier — a full 18-25 page topical map does NOT clear effort-proportionate-to-return at this ceiling. The LEAN version (8-10 wave-1 pages + one client-side decision tool, heavy reuse of thebestmowers' Astro/affiliate/schema plumbing, no backend cost) does clear it: near-zero marginal cost against an existing domain, existing affiliate tag, and 5 already-converting pages. The structural case (stale leader, AI-spam ranking top 10, missing decision-tool/price-grid USP) is unaffected by the baseline correction — only the £ ceiling and therefore the build scope changed. Waves 2-3 (expanding toward the full topical map) are conditional on wave-1 performance data, not committed upfront.

## Baseline / context

- bestchainsaw.uk is an EXISTING site, not a fresh domain. 2019 WordPress + Flatsome theme, ~5 real content pages: `/best-electric-chainsaws-top-3/`, `/best-petrol-chainsaws-top-3/`, `/cordless-chainsaw-reviews-top-3/`, `/electric-sharpener-reviews-top-3/`, `/replace-bar/`, plus WP defaults. Title: "Best Chainsaws UK - Reviewing The Top In The Market" (generic, keyword-stuffed).
- Portfolio tracker (BRAIN-money-model.md, Feb 13 2026 Amazon dashboard snapshot) records this as "a good performer": 185 clicks/yr, 5 orders/yr, **£224/yr gross sales value** (not earnings), **£13.83/yr actual affiliate commission** (≈6.2% of sales, i.e. ~**£1.15/mo real earnings**), 2.70% conversion, £1.21 EPC (= sales£/click, not commission£/click — true commission per click is ~£0.075) — on 5 thin, unmaintained pages since 2019. CORRECTION: an earlier draft of this dossier mistakenly read £13.83 as a monthly run-rate; it is annual. This is a genuinely small earner, comparable to bestturbotrainers.uk (~£8/yr) and bestvibrationplates.co.uk (~£43/yr) in the portfolio's "small tree" tier — not a mid-size performer.
- Domain briefly lapsed and was renewed ~2026-07-09 (WHOIS now shows active to 2027-07-06); DNS currently shows Namecheap's parking page. Not a blocker — DNS repoint is a Phase 4 task.
- Not registered in seogets/GSC tracking, not in PROJECT-REGISTRY.md — genuinely never had a proper repo/build.
- Amazon UK affiliate tag: `chainsaw0f6-21`.

## 1. Demand (real data only)

🔴 **Bing Webmaster keyword-research API is confirmed hard-down account-wide as of 2026-07-10** (`.NET null-ref 400` on `get_keyword_data`/`get_keyword_stats`/`get_related_keywords`, reproduced across 6+ site/keyword combos). No raw UK search-volume numbers were obtainable for any of the 22 target keywords. This is a platform outage, not a niche-demand signal — logged to memory as `reference_bing-keyword-api-dead.md`.

| Query / prompt | Source | Volume or impressions | Trend |
|---|---|---|---|
| bestchainsaw.uk historical (all queries) | Portfolio tracker (real, verified) | 185 clicks / 5 orders / £224 lifetime on 5 thin pages | site never updated since 2019, revenue still positive |
| "chainsaw" family (22 terms) | Bing Webmaster API | **NO DATA — API down** | unknown |
| UK firewood/log demand | Lekto Woodfuels, Peak Logs, JD Logs, Forestry Journal (real industry sources) | qualitative only | rises sharply autumn, peaks winter (adjacency signal, not chainsaw-specific) |
| Global chainsaw market | Coherent Market Insights, Mordor Intelligence | $4.68-4.92B (2026), 4-5.5% CAGR, ~35% buyer interest shifting to battery/electric, ~70% of channel now online retail | growing |
| Community query volume | Arbtalk, arboristsite.com, chainsawforum.com, UKWorkshop, TheFarmingForum | active, ongoing real threads (not a number, but real recurring demand) | steady |

**Evidence quality: moderate, not strong.** The single most reliable number here is the site's OWN verified historical conversion data (real clicks → real orders → real revenue), which is arguably better evidence than a Bing impression count would have been — it proves people search, click, and buy in this niche at a healthy 2.70% CVR. What's missing is hard volume/headroom data. **Recommended follow-up (non-blocking):** Sunny pull an Ahrefs UK volume export for the keyword list once Bing's API recovers or via manual export, to size the growth ceiling more precisely.

## 2. SERP reality (from /serp-analyze on 5 head terms)

- **"best chainsaw uk"** — Independent UK affiliate blogs dominate (gardentoolbox.co.uk, diygarden.co.uk, posh.co.uk, garageworld360.co.uk) plus one brand guide (stihl.co.uk), one trade-press test (Farmers Weekly), one retailer category (ronsmith.co.uk). No Which?/Trusted Reviews/ExpertReviews/Ideal Home/Good Housekeeping present. Leader **gardentoolbox.co.uk not updated since January 2023**, still ranks. A templated AI-spam page (whatradiation.com, wrong-market `.com` Amazon links, fake "Updated July 2026" tag) cracks top 10 — proves the trust bar is low.
- **"best chainsaw"** (no UK modifier) — 100% US domains (Consumer Reports, TechGearLab, Stihl USA, Tractor Supply). Confirms UK geo-modifier is mandatory; this bare term isn't a viable target.
- **"best cordless chainsaw uk"** — same independent-blog pattern; a genuinely weak off-niche site (prosprayers.co.uk, a sprayer company) ranks, signalling soft competition. No page owns full cordless comparison with rigorous testing + table.
- **"best electric chainsaw uk"** — Google conflates corded-electric with battery-cordless across multiple ranking pages. A page that explicitly disambiguates the two for UK buyers has room to out-precision the field.
- **"best petrol chainsaw uk"** — most retailer-category pages of any term (Ron Smith, Mowdirect, Radmore & Tucker, Garden Machinery Direct) — pure listings, zero buying advice. diygarden's petrol page is the deepest single page in the niche (8,000+ words, table, named tester, FAQ).
- **Featured snippet / AI Overview:** not clearly owned by anyone; no YouTube or forum threads appear in any of the five SERPs (community trust signal is present off-SERP, on Arbtalk, but absent from page 1).

## 3. AI-chat landscape

- **Real prompts** (prompt-research, via WebSearch since Reddit MCP was down): "cordless vs petrol chainsaw for home use UK", "best chainsaw for a beginner UK", "best chainsaw for cutting firewood UK 2026", "is a cheap chainsaw worth it", "chainsaws to avoid", "how many amps/volts do I need in a battery chainsaw", "what bar length do I need", "what PPE do I need for a chainsaw UK", "how to sharpen a chainsaw chain".
- **Fan-out sub-queries** (fan-out-audit): cost (budget under £150/£200), comparison (cordless vs petrol vs electric, brand vs brand), use-case (firewood/beginners/homeowners/pruning/felling), feature (bar length by task, voltage 18V/40V/60V/80V, amp-hours, chain type, kickback/chain-brake), temporal (best chainsaw 2026), negative (chainsaws to avoid, budget-saw reliability), how-to (sharpening, safe starting, maintenance), social proof (brand-worth-it reviews).
- **Live citation test:** gardentoolbox.co.uk and diygarden.co.uk recur across 3+/6 test prompts as the closest niche owners (neither is chainsaw-specialist). arbtalk.co.uk recurs for beginner/entry-level queries. Single-topic owners to cite-not-compete-with: HSE.gov.uk/HSENI.gov.uk (safety), Stihl/Husqvarna/Ego UK (maintenance/sharpening), Which.co.uk (cordless vs petrol).
- **Gap:** battery voltage/amp guidance is answered today by generic Chinese battery-OEM blogs with zero UK relevance; "is a cheap chainsaw worth it" is answered by US forums in USD; the firewood-chainsaw guide space is dominated by US-only models (EGO CS1803, Husqvarna 460 Rancher) not sold identically in the UK. All three are open, self-contained, stat-dense, TLDR-first page opportunities.

## 4. Community signal

Sources: Arbtalk.co.uk (UK arborist community — better fit than Reddit here), arboristsite.com, chainsawforum.com, UKWorkshop, TheFarmingForum, Gransnet/Mumsnet (neighbour-noise), HSE.gov.uk. (Reddit MCP was down account-wide — HTTP 403 on every call, confirmed by WebSearch showing reddit.com blocks the fetch user-agent — not a niche-specific gap.)

Recurring pain points, in users' own words:
- "I would just like something that starts, cuts well and doesn't melt."
- "I'm guessing a lot of the Amazon ones are Chinese built poor quality?" — reflexive distrust of cheap online listings.
- "I don't want a cheapie saw, it's a waste of money imo."
- **Oversizing regret, not undersizing, is the dominant fear**: "you will regret it after the first hour" — consensus across threads is buy lighter/smaller than you think, not bigger.
- **Kickback fear is visceral and specific**: "I seen a chainsaw kick back hit a guy in the face. I never want to see that again."
- Dedicated forum sections exist specifically for "honest reviews... NOT promotional" — active distrust of standard affiliate review content.

Unanswered / recurring questions: "what size do I need" (bar length/cc/weight tradeoff — never resolved by a simple rule, always "depends"); Stihl vs Husqvarna framed by posters as "choose your brand based on your local dealer," not brand loyalty — a nuance no competitor content reflects; genuine praise for a budget corded-electric (Screwfix Titan ~£40-50) as "bombproof" for light use, a real counter-narrative to premium-only advice; UK-specific confusion around NPTC/CS30-31 "chainsaw licence" (not legally required for personal domestic use, strongly recommended/required for work use); informal noise-curfew norms cited by posters (8am-6pm weekdays, 8am-1pm Saturday, never Sunday).

## 5. Competitor teardown (winner-audit lens, 0-14)

| Site | Score | Strength | Exploitable gap |
|---|---|---|---|
| BBC Gardeners' World (mini chainsaws only) | 13/14 | Named 6-person testing panel (incl. ex-Kew), real methodology, Best Buy badges, multi-retailer links | Only 3 products deep, scoped to mini-chainsaws only, static table not a tool |
| DIY Garden | 10/14 | Named tester, real-world context (Storm Arwen), 5-product tables | Amazon-only links, no price comparison, generic testing criteria reused site-wide |
| GarageWorld360 | 10/14 | Best regulatory depth: cites EN 381-5/397/381-7, HSE, NPTC, Lantra, 5-yr TCO table | "Testing" is recycled customer-review quotes, no named tester, no original photography |
| Posh Living Magazine | 10/14 | 15 products, named author, live Amazon price timestamps | 85% pure navigation links, no FAQ, author bio not chainsaw-specific |
| Shetland's Garden Tool Box (current #1 ranker) | 5/14 | Real named author (20yr landscape design) | **Stale since Jan 2023**, zero data tables/tools, decayed heading structure |

**Synthesized gap:** every competitor, including the 13/14 BBC leader, is a static comparison table you *read* — nobody scored a clean 2/2 on "usable artifact." No one offers a "which chainsaw fits my job" decision tool (task + trunk diameter + experience → bar length, power type, named UK model, required PPE/training tier under HSE/EN381) or a live multi-retailer UK price grid (Amazon vs Screwfix vs Toolstation vs B&Q vs ManoMano) — every competitor bar Posh/GarageWorld360 is Amazon-affiliate-link-only.

## 6. Monetisation arithmetic

- **Mechanism:** Amazon UK Associates affiliate (existing tag `chainsaw0f6-21`, already earning).
- **Baseline (real, corrected):** 5 thin pages, unmaintained since 2019 → 185 clicks/yr, 5 orders/yr, £224/yr gross sales, **£13.83/yr real commission (~£1.15/mo)**, 2.70% CVR, £1.21 sales-per-click (~£0.075 commission-per-click). This is a small but genuinely positive, already-converting loop — not a mid-tier earner (correcting an earlier draft's unit error, which read the annual figure as monthly and cost £13.83/£224 confusion).
- **Arithmetic:** Rebuild expands coverage from 4 keyword targets to a full topical map (~18-25 pages: comparative, use-case, technical-spec, safety, budget, brand, maintenance clusters identified in sections 2-4) on a site with a documented, winnable SERP (leader stale since 2023, scoring only 5/14). Applying the portfolio comparable of towerfanreviews.uk (£23.63/yr, similar single-category tool niche, 317 clicks) and best-binoculars.uk (£20/yr, 1,082 clicks) as realistic ceilings for a small tool-niche site with full topical coverage: conservative case, 5x organic clicks (925/yr) with a modest EPC haircut for more top-funnel informational content (opus review flagged blended EPC should fall, not hold) → **~£35-45/yr (~£3/mo) by month 6**. Moderate case, if the decision-tool/price-grid USP earns backlinks + AI citations per section 3's gaps and lifts conversion via better bottom-funnel intent-matching → **~£70-90/yr (~£6-7/mo) by month 12**, in line with bestvibrationplates.co.uk's £43/yr "model site" tier. This is explicitly a small-tree outcome — real, positive, several times the current baseline, proportionate to reused plumbing and near-zero incremental cost (existing domain, existing earnings loop, existing Astro patterns from thebestmowers) — not a swing-for-the-fences bet.
- **Same effort on an existing portfolio site:** no other portfolio site directly competes in outdoor power tools besides thebestmowers.uk (mowers, not chainsaws — one legacy `/chainsaw-oil/` redirect only, not real overlap). Effort here isn't cannibalising or duplicating existing portfolio capacity.
- **Rules check:** no AdSense (traffic too low to qualify yet, correctly out of scope per `/ad-rpm-optimizer` no-premature-AdSense rule); UGC will use real attributed community sentiment (Arbtalk/forum quotes, framed "reflects authors, not us," same pattern as thebestmowers' OwnerVoices component) — no fabricated testing claims.

## GO/NO-GO scorecard

| # | Criterion | Pass? | Evidence pointer |
|---|---|---|---|
| 1 | Demand proven with real data | **PASS (moderate confidence)** | Sec 1 — no Bing volume (API down, logged), but real verified historical conversion data + real active forum demand + real market growth data |
| 2 | Winnable: documented SERP/AI weakness | **PASS (strong)** | Sec 2-3 — stale leader (Jan 2023, 5/14), AI-spam ranks top 10, 3 clean AI-citation gaps, Google conflates electric/cordless |
| 3 | £ path with arithmetic | **PASS (small tree, corrected)** | Sec 6 — realistic ~£35-90/yr (~£3-7/mo) by 6-12mo, several times the true £13.83/yr baseline; small in absolute terms but real, positive, and in line with portfolio comparables in this tool-niche tier |
| 4 | USP candidate nobody else has | **PASS** | Sec 5 — chainsaw-fit decision tool + live multi-retailer UK price grid; not used by any competitor or portfolio site |
| 5 | Effort proportionate to return | **PASS, effort must stay lean** | Sec 6 — given the corrected small ceiling, wave-1 build should stay to ~8-10 pages + the lightweight client-side decision tool (no backend/API cost), reusing thebestmowers plumbing (affiliate.ts, schema, OwnerVoices pattern) rather than a large from-scratch build; waves 2-3 add the remaining topical-map pages only if wave-1 data justifies it |
| 6 | No portfolio cannibalisation | **PASS** | Checked PROJECT-REGISTRY.md + MEMORY.md — only overlap is thebestmowers.uk's single legacy `/chainsaw-oil/` redirect, not live content competition |

**Verdict: GO.**

## USP candidates (feeds Phase 1)

1. **"The Chainsaw Fit Check"** — an interactive decision tool (task type + trunk/branch diameter + experience level → recommended bar length, power type, named UK-available models, and the exact PPE/training tier required under HSE/EN381 standards), traced to the "usable artifact" gap in section 5, not offered by any competitor including the 13/14 BBC leader.
2. **Live multi-retailer UK price grid** (Amazon / Screwfix / Toolstation / B&Q / ManoMano side by side per model), traced to section 5 — every competitor bar two is Amazon-only.
3. **UK-specific, GBP-denominated answers to the three identified AI-citation gaps** (battery voltage/amp guidance, "is a cheap chainsaw worth it" in UK pricing, UK-model firewood guide) — traced to section 3, currently answered only by US or generic non-UK sources.
