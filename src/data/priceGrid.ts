// Verified UK retailer price data for the PriceGrid component.
//
// SINGLE SOURCE OF TRUTH for every price + product URL on the site. Refresh the
// prices + `checked` date on a schedule (this is the only file to touch).
//
// HONESTY RULES (this ships to a live buying-guide, treat as load-bearing):
//  - `url` MUST be a real, verified product-page deep link at a retailer that
//    genuinely stocks the model. Never a search page. Never fabricated. If a
//    retailer does not stock it, omit that row entirely.
//  - `price` is the exact figure read off the page on the `checked` date. Omit
//    it rather than guess if you could not read a real number.
//  - Compare like for like: note bare-tool vs battery-kit in `note`, since that
//    swings the price and comparing them would mislead.
//  - Amazon UK is the only affiliate row (tag applied in the component). If no
//    verified Amazon product URL exists, leave `url` empty on the Amazon row and
//    the component falls back to a tagged Amazon search for the model.

export interface PriceRow {
  retailer: string;   // "Amazon UK" | "B&Q" | "Toolstation" | "Screwfix" | brand direct
  url?: string;       // verified product-page deep link (non-Amazon rows). Omit on Amazon rows.
  asin?: string;      // Amazon rows only: verified ASIN -> tagged deep dp link. Omit -> tagged search.
  price?: string;     // "£69.99" indicative snapshot read on `checked`. Omit rather than guess.
  note?: string;      // "bare tool", "with 2.5Ah battery + charger", cc, etc.
}

export interface PriceEntry {
  model: string;      // display title
  checked: string;    // ISO date (YYYY-MM-DD) the prices/URLs were verified
  rows: PriceRow[];
  note?: string;      // page-level caveat, e.g. dealer-channel note
}

// All rows below were verified by fetching the live retailer pages on the
// `checked` date. Prices are the exact figures read off those pages. Rows whose
// price could not be read (Amazon JS-hidden, or bot-blocked retailers) are
// deep-linked with no price rather than carrying a guessed figure.
export const PRICE_GRID: Record<string, PriceEntry> = {
  // Corded electric. Bosch AKE 35 (the model the old draft used) is discontinued;
  // UniversalChain 35 is its current successor.
  'bosch-universalchain-35': {
    model: 'Bosch UniversalChain 35 (corded, 35cm)',
    checked: '2026-07-10',
    rows: [
      { retailer: 'B&Q', url: 'https://www.diy.com/departments/bosch-universalchain35-1-8w-mains-fed-corded-350mm-chainsaw/4059952608167_BQ.prd', price: '£129', note: 'Corded, 1800W, 35cm bar' },
      { retailer: 'Amazon UK', asin: 'B09MFYW6HY', note: 'Live price on Amazon' },
    ],
    note: 'Also listed at Currys and Robert Dyas; we link the two we could price-check and let Amazon show its live price.',
  },

  // Cordless 14in-class. Sold bare tool (body only) at the trade retailers, so
  // the two priced rows are a clean bare-vs-bare comparison.
  'makita-duc353z': {
    model: 'Makita DUC353Z (36V / 2x18V, 35cm, bare tool)',
    checked: '2026-07-10',
    rows: [
      { retailer: 'Screwfix', url: 'https://www.screwfix.com/p/makita-duc353z-36v-li-ion-lxt-brushless-cordless-35cm-chainsaw-bare/7377x', price: '£279.98', note: 'Bare tool, no battery or charger' },
      { retailer: 'Toolstation', url: 'https://www.toolstation.com/makita-duc353z-36v-2x18v-35cm-cordless-chainsaw/p33721', price: '£279.99', note: 'Bare tool, no battery or charger' },
      { retailer: 'Amazon UK', note: 'Bare and kit versions; live price on Amazon' },
    ],
    note: 'Priced rows are bare tool (body only). You will also need two 18V LXT batteries and a charger if you are not already on the Makita platform.',
  },

  // Petrol. Stihl and Husqvarna petrol are dealer / brand-direct channel in the
  // UK, so a multi-retailer grid is not possible for them; this features a
  // genuinely online-buyable petrol saw instead.
  'hyundai-hyc6200x': {
    model: 'Hyundai HYC6200X (62cc, 20in petrol)',
    checked: '2026-07-10',
    rows: [
      { retailer: 'Hyundai (direct)', url: 'https://hyundaipowerequipment.co.uk/62cc-20-hyundai-petrol-chainsaw-2-stroke-easy-start-hyc6200x', price: '£129.99', note: '62cc, 20in/50cm bar, 3-year warranty' },
      { retailer: 'Amazon UK', asin: 'B08SQCP9LH', note: 'Live price on Amazon' },
    ],
    note: 'Also listed at ManoMano, eBay and Robert Dyas; we link the brand-direct price we could verify and let Amazon show its live price.',
  },
};
