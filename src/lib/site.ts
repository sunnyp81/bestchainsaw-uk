export const SITE = {
  name: 'Best Chainsaw',
  url: 'https://bestchainsaw.uk',
  shortName: 'BestChainsaw',
  // NOTE: source brief used an em dash here; house style forbids em/en dashes in
  // any published copy, so it is a comma in the live description below.
  description: 'Independent UK chainsaw buying guides. Research-led recommendations built from manufacturer specs, verified owner reviews, HSE/EN381 safety standards and UK retail pricing, plus a Fit Check tool that matches your task to the right saw.',
  locale: 'en_GB',
  twitter: '',
  publisher: 'Best Chainsaw',
  editor: 'Sunny Patel',
  email: 'hello@bestchainsaw.uk',
  logo: '/logo.svg',
  founded: '2026',
  // Real, verified entity profiles only (Trustpilot / Companies House / socials). Never fabricate.
  sameAs: [] as string[],
} as const;

// The 3 power-type hubs. Shown in the header, homepage ItemList and footer.
export const POWER_TYPE_HUBS = [
  { slug: 'electric-chainsaws', label: 'Electric' },
  { slug: 'cordless-chainsaws', label: 'Cordless' },
  { slug: 'petrol-chainsaws', label: 'Petrol' },
] as const;

// Standalone guide pages, grouped under the header "Guides" dropdown and footer column.
export const GUIDE_LINKS = [
  { slug: 'chainsaw-battery-voltage', label: 'Battery voltage guide' },
  { slug: 'cheap-chainsaws', label: 'Cheap chainsaws' },
  { slug: 'chainsaw-for-firewood', label: 'Chainsaws for firewood' },
  { slug: 'first-chainsaw', label: 'Your first chainsaw' },
  { slug: 'replace-bar', label: 'How to replace a bar' },
] as const;

export const SAFETY_LINK = { slug: 'chainsaw-safety', label: 'Chainsaw safety' } as const;
