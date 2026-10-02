// Manufacturer-published noise, weight and chain-speed figures for the saws this site covers.
// Every value is copied from the maker's own page, spec sheet or manual on `SPEC_CHECKED`; null = not published.
export const SPEC_CHECKED = '2026-09-28';

export type PowerType = 'corded' | 'cordless' | 'petrol';

export interface SpecRow {
  model: string;
  type: PowerType;
  power: string;
  barCm: string;
  weightKg: number;
  weightBasis: string;
  lwaMeasured: number;
  lwaGuaranteed: number | null;
  lpa: number | null;
  chainSpeed: number;
  chainSpeedNote?: string;
  source: string;
  sourceLabel: string;
  source2?: string;
  source2Label?: string;
  note?: string;
  source3?: string;
  source3Label?: string;
}

export const SPEC_ROWS: SpecRow[] = [
  {
    model: 'Bosch UniversalChain 35', type: 'corded', power: '1800 W', barCm: '35',
    weightKg: 4.3, weightBasis: 'Body only',
    lwaMeasured: 104, lwaGuaranteed: 106, lpa: 96, chainSpeed: 12,
    source: 'https://www.bosch-diy.com/gb/en/p/universalchain-35-06008b8371', sourceLabel: 'Bosch UK page (bar, weight, chain speed)',
    source2: 'https://www.bosch-diy.com/storage/en-gb/universalchain-35-100053387-original-pdf-646401-en-gb.pdf', source2Label: 'UKCA declaration (LwA)',
    note: 'LpA from the UniversalChain 35/40 manual. An older 2021 Bosch declaration gives 102/104 dB(A); we use the 2026 one.',
    source3: 'https://www.bosch-diy.com/storage/en-gb/universalchain-40-100053391-original-pdf-558366-en-gb.pdf', source3Label: 'UniversalChain 35/40 manual (LpA)',
  },
  {
    model: 'Einhell GH-EC 1835', type: 'corded', power: '1800 W', barCm: '35.6',
    weightKg: 5.0, weightBasis: 'With bar and chain',
    lwaMeasured: 104.6, lwaGuaranteed: 108, lpa: 84.6, chainSpeed: 13.5,
    source: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_navh2s0aj16npd8facr8d5i52v?attachment;filename=4501709_21013_001_SPK7.pdf', sourceLabel: 'Einhell GH-EC 1835 manual',
    source2: 'https://www.einhell.co.uk/p/4501709-gh-ec-1835-exuk/', source2Label: 'Einhell UK page (chain speed)',
  },
  {
    model: 'Ryobi ONE+ OCS1830', type: 'cordless', power: '18 V', barCm: '30',
    weightKg: 3.2, weightBasis: 'Without battery',
    lwaMeasured: 94.1, lwaGuaranteed: 96, lpa: 83.1, chainSpeed: 10,
    source: 'https://uk.ryobitools.eu/sitefiles/Handlers/DownloadFactTags.ashx?agilityid=302886&facttagsize=1&cultureCode=en-GB', sourceLabel: 'Ryobi UK fact sheet (measured LwA)',
    source2: 'http://webservice.ttigroup.eu//catalog/OCS1830_W38_Y2026_1789970860090.pdf', source2Label: 'Declaration of conformity (guaranteed LwA)',
    note: 'Measured LwA is from the fact sheet; the declaration gives 93.5 measured and 96 guaranteed. LpA from the fact sheet for the RCS1830-140B kit, the same saw sold with a battery.',
    source3: 'https://uk.ryobitools.eu/sitefiles/Handlers/DownloadFactTags.ashx?agilityid=539980&facttagsize=1&cultureCode=en-GB', source3Label: 'RCS1830-140B kit fact sheet (LpA)',
  },
  {
    model: 'Makita DUC353Z', type: 'cordless', power: '2 x 18 V', barCm: '35',
    weightKg: 3.3, weightBasis: 'Net, without batteries',
    lwaMeasured: 100, lwaGuaranteed: null, lpa: 89, chainSpeed: 20,
    source: 'https://www.makitauk.com/data/sr/productinfo/model.asp?model_id=DUC353Z', sourceLabel: 'Makita UK spec sheet',
  },
  {
    model: 'EGO Power+ CS1410E', type: 'cordless', power: '56 V', barCm: '35',
    weightKg: 3.8, weightBasis: 'With bar and chain, without battery',
    lwaMeasured: 102.25, lwaGuaranteed: 103, lpa: 91.25, chainSpeed: 20,
    source: 'https://egopowerplus.co.uk/sites/default/files/2026-06/OP_EGO_CS1610E%20CS1410E_EV02.31_260119.pdf', sourceLabel: 'EGO UK operator manual',
    source2: 'https://egopowerplus.co.uk/products/chainsaws/cs1410e', source2Label: 'EGO UK page (bar, chain speed)',
  },
  {
    model: 'Einhell GE-LC 36/35 Li-Solo', type: 'cordless', power: '2 x 18 V', barCm: '35',
    weightKg: 4.13, weightBasis: 'Without batteries',
    lwaMeasured: 102, lwaGuaranteed: 105, lpa: 94, chainSpeed: 15,
    source: 'https://d2c5rvsfjg2eub.cloudfront.net/asset/208244749100/document_blr6qvbg0d5fp59pli8iqioa1n?attachment;filename=4501780_21021_001_SPK13.pdf', sourceLabel: 'Einhell 4501780 manual (weight, sound)',
    source2: 'https://www.einhell.co.uk/p/4501780-gp-lc-36-35-li-solo/', source2Label: 'Einhell UK page (bar, chain speed)',
    note: 'Now sold as the GP-LC 36/35 Li-Solo, same item number 4501780.',
  },
  {
    model: 'Stihl MS 212', type: 'petrol', power: '38.6 cc', barCm: '35 or 40',
    weightKg: 4.6, weightBasis: 'Empty tank, without bar and chain',
    lwaMeasured: 113, lwaGuaranteed: null, lpa: 103, chainSpeed: 24.8,
    chainSpeedNote: 'Maximum to ISO 11681; 18.6 m/s at maximum power',
    source: 'https://ssc.stihl.com/tsa/techdoc-documents/DVS_STIHL/ZBA/ZBA/0458-221-8321-A_ZBA_04_01.pdf', sourceLabel: 'Stihl MS 212 manual',
    source2: 'https://www.stihl.co.uk/en/p/chainsaws-ms-212-petrol-chainsaw-145760', source2Label: 'Stihl UK page (bar, cc)',
  },
  {
    model: 'Husqvarna 120 Mark II', type: 'petrol', power: '38 cc', barCm: '35',
    weightKg: 5.0, weightBasis: 'Without bar and chain',
    lwaMeasured: 113, lwaGuaranteed: 116, lpa: 95, chainSpeed: 17,
    source: 'https://www.husqvarna.com/hbd/tdrdownload/v2/pub000094556/doc000243535/OM/8oIcugEN5odFlSrQfld8KpYE10s', sourceLabel: 'Husqvarna 120 Mark II operator manual',
    source2: 'https://www.husqvarna.com/uk/chainsaws/120-mark-ii/', source2Label: 'Husqvarna UK page (vibration, cc)',
    note: 'The UK page labels 113 dB(A) as guaranteed and gives LpA 100.7 dB(A); the manual gives 113 measured, 116 guaranteed and LpA 95, which we use.',
  },
  {
    model: 'Husqvarna 435 II', type: 'petrol', power: '40.9 cc', barCm: '38',
    weightKg: 4.4, weightBasis: 'Empty tanks, without bar and chain',
    lwaMeasured: 113, lwaGuaranteed: 114, lpa: 102, chainSpeed: 17.3,
    source: 'https://www.husqvarna.com/hbd/tdrdownload/v2/pub000092028/doc000221353/OM/up-2D9aTPmec88DkkSgvuTikqVY', sourceLabel: 'Husqvarna 435 II operator manual (weight, LwA)',
    source2: 'https://www.husqvarna.com/uk/chainsaws/435ii/', source2Label: 'Husqvarna UK page (LpA, chain speed)',
    note: 'The UK page gives 4.2 kg on the same basis; the manual gives 4.4 kg, which we use.',
  },
  {
    model: 'Hyundai HYC6200X', type: 'petrol', power: '62 cc', barCm: '50',
    weightKg: 6.9, weightBasis: 'With bar and chain',
    lwaMeasured: 113.2, lwaGuaranteed: 117, lpa: null, chainSpeed: 22,
    source: 'https://hyundaipowerequipment.co.uk/products/hyundai-20-50cm-62cc-petrol-chainsaw-2-stroke-easy-start-hyc6200x', sourceLabel: 'Hyundai UK page (weight, chain speed)',
    source2: 'https://hyundaipowerequipment.co.uk/cdn/shop/files/25_460f2e55-c388-480e-8d0e-eb2cbc0427bc.pdf?v=10520299017500325288', source2Label: 'User manual declaration (LwA)',
  },
];

export const TYPE_LABEL: Record<PowerType, string> = {
  corded: 'Corded electric',
  cordless: 'Cordless',
  petrol: 'Petrol',
};

// EN ISO 11393 / EN 381 cut-protection classes (STIHL UK, checked 2026-09-28).
export const PPE_CLASSES = [
  { cls: 0, speed: 16 },
  { cls: 1, speed: 20 },
  { cls: 2, speed: 24 },
  { cls: 3, speed: 28 },
] as const;

export const PPE_SOURCE = 'https://www.stihl.co.uk/en/professional/knowledge/occupational-safety/cut-protection-classes';
