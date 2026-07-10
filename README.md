# bestchainsaw.uk

Astro 5 + Tailwind 4 build of bestchainsaw.uk. UK chainsaw buying-guide affiliate site, hub-and-spoke architecture targeting power-type and task-based chainsaw keywords, plus a Fit Check decision tool as the homepage hero.

## Architecture (wave 1, 11 pages)

```
/                          Homepage - Fit Check tool hero + power-type ItemList
/electric-chainsaws/       Power-type hub (corded)
/cordless-chainsaws/       Power-type hub (battery)
/petrol-chainsaws/         Power-type hub
/chainsaw-battery-voltage/ Guide - voltage classes explained
/cheap-chainsaws/          Guide - budget picks, safety floor
/chainsaw-for-firewood/    Guide - firewood processing
/first-chainsaw/           Guide - beginner buying guide
/chainsaw-safety/          Guide - EN381 PPE, kickback, technique
/replace-bar/              Guide - HowTo, KEEP URL (real earnings history)
/about/                    About + how we research + affiliate disclosure
```

## Build phases

| Phase | Status | Scope |
|-------|--------|-------|
| 0 | Done | Research / GO-NO-GO |
| 1 | Done | Brand identity, USP, visual identity |
| 2 | Done | Semantic architecture (this 11-page wave-1 map) |
| 3 | **Done** | Scaffold: plumbing, design system, components, page shells (this repo state) |
| 4 | Pending | Wave-1 content: full prose, PickCard picks, PriceGrid data, sourced FAQs, sourced OwnerVoices |
| 5 | Pending | Launch: deploy, GA4, GSC/Bing submission, growth loop |

## Deploy

GitHub repo -> Cloudflare Pages (not yet created, see CLAUDE.md).
- Build: `npm run build` - Output: `dist` - Node: 22

## Identity

- Amazon Associates UK tag: `chainsaw0f6-21` (centralised in `src/lib/affiliate.ts`)
- Editor/publisher: Sunny Patel (real person, no fabricated hands-on testing claims)
- Palette: industrial/safety (hazard orange, hi-vis yellow, graphite, steel) - see `src/styles/global.css`

See root `CLAUDE.md` for the full per-repo project brain.
