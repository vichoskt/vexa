// Genera public/og-image.png (1200×630) a partir de un SVG de marca.
// Uso: node scripts/generar-og.mjs
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const raiz = join(dirname(fileURLToPath(import.meta.url)), "..");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#22B8E8"/>
      <stop offset="0.55" stop-color="#6D3BE8"/>
      <stop offset="1" stop-color="#C049E0"/>
    </linearGradient>
    <radialGradient id="halo" cx="0.8" cy="0.15" r="0.9">
      <stop offset="0" stop-color="#6D3BE8" stop-opacity="0.55"/>
      <stop offset="1" stop-color="#1B1035" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#1B1035"/>
  <rect width="1200" height="630" fill="url(#halo)"/>

  <!-- Marca V -->
  <path d="M96 150 L150 270 L204 150 L172 150 L150 210 L128 150 Z" fill="url(#g)"/>

  <text x="96" y="360" font-family="Arial, Helvetica, sans-serif" font-size="128" font-weight="800" letter-spacing="6" fill="#F7F5FF">VEXA</text>
  <text x="100" y="410" font-family="Consolas, 'Courier New', monospace" font-size="26" letter-spacing="10" fill="#22B8E8">ESTRATEGIA · CRECIMIENTO · RESULTADOS</text>
  <text x="100" y="500" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="#C9C3E0">Soluciones claras para ordenar,</text>
  <text x="100" y="552" font-family="Arial, Helvetica, sans-serif" font-size="40" fill="#C9C3E0">profesionalizar y hacer avanzar tu marca.</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(join(raiz, "public", "og-image.png"));
console.log("public/og-image.png generado (1200×630).");
