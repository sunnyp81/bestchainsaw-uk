// ASIN registry for PickCard-only Amazon wiring (models with no PriceGrid entry).
// scripts/amazon-image-sync.mjs scans this file (via the prebuild script arg) so
// these images get synced into src/data/amazon-images.json alongside priceGrid.ts.
// Each entry must have passed the brand+model approval gate before being added here.
export const PICK_ASINS: Record<string, { amazonAsin: string }> = {
  'husqvarna-120-mark-ii': { amazonAsin: 'B07HB1H2GL' },
  'husqvarna-435-ii': { amazonAsin: 'B0B6JJFYV6' },
  'ryobi-one-ocs1830': { amazonAsin: 'B06WRNLQPP' },
  'einhell-gh-ec-1835': { amazonAsin: 'B0CSDQVXZT' },
  'einhell-ge-lc-36-35-li-solo': { amazonAsin: 'B07FD8BK2D' },
};
