// Generates public/og-default.png (1200x630) from an inline SVG using sharp.
// Industrial/hazard-orange branding matching src/styles/global.css @theme tokens
// (hazard-500/600, graphite-900, hivis-400, steel-400). No fabricated ratings or claims.
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const out = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'og-default.png');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#23262A"/>
      <stop offset="1" stop-color="#1B1E21"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- hazard tape band, top -->
  <clipPath id="topClip"><rect x="0" y="0" width="1200" height="16"/></clipPath>
  <g clip-path="url(#topClip)">
    ${Array.from({ length: 40 }, (_, i) => {
      const x = i * 44 - 300;
      return `<polygon points="${x},32 ${x + 16},32 ${x - 6},-16 ${x - 22},-16" fill="#F1580F"/>`;
    }).join('\n    ')}
  </g>
  <!-- hazard tape band, bottom -->
  <clipPath id="bottomClip"><rect x="0" y="614" width="1200" height="16"/></clipPath>
  <g clip-path="url(#bottomClip)">
    ${Array.from({ length: 40 }, (_, i) => {
      const x = i * 44 - 300;
      return `<polygon points="${x},646 ${x + 16},646 ${x - 6},598 ${x - 22},598" fill="#F1580F"/>`;
    }).join('\n    ')}
  </g>

  <!-- simple bar-and-chain rule, sits above the wordmark -->
  <rect x="96" y="176" width="140" height="10" rx="5" fill="#F1580F"/>
  <circle cx="96" cy="181" r="9" fill="#F4D000"/>

  <text x="96" y="150" font-family="Arial, Segoe UI, sans-serif" font-size="32" font-weight="700" fill="#F4D000" letter-spacing="2">BESTCHAINSAW.UK</text>
  <text x="96" y="290" font-family="Arial, Segoe UI, sans-serif" font-size="76" font-weight="800" fill="#F5F5F4">Best Chainsaw</text>
  <text x="96" y="375" font-family="Arial, Segoe UI, sans-serif" font-size="76" font-weight="800" fill="#F5F5F4">Buying Guides</text>
  <text x="96" y="450" font-family="Arial, Segoe UI, sans-serif" font-size="30" font-weight="500" fill="#8A9299">Independent, research-led UK chainsaw guides</text>
  <text x="96" y="494" font-family="Arial, Segoe UI, sans-serif" font-size="30" font-weight="500" fill="#8A9299">plus the free Fit Check tool</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
console.log('wrote', out);
