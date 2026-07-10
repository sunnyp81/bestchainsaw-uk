// Owner sentiment aggregated from real, named UK sources (Arbtalk, other forums,
// Amazon UK / retailer owner reviews, expert reviewers). Statements must be
// representative of recurring owner feedback and attributed to the platform they
// were drawn from. This is NOT first-party testing by Best Chainsaw.
// Keyed by a model slug used on hub/review pages.
//
// TODO (content agents): populate with real, sourced quotes from Arbtalk and
// other UK chainsaw forums, Amazon UK / retailer owner reviews. Do NOT invent
// quotes or sources. Leave entries out entirely until a real one is sourced -
// OwnerVoices.astro renders nothing when a requested key has no entry.

export type Voice = { text: string; kind: 'praise' | 'gripe'; source: string };
export type OwnerVoice = {
  model: string;
  consensus: string;
  voices: Voice[];
  sources: string[];
};

export const OWNER_VOICES: Record<string, OwnerVoice> = {
  // TODO: add real sourced entries, e.g.
  // 'brand-model-slug': { model: 'Brand Model', consensus: '...', voices: [...], sources: [...] },
};
