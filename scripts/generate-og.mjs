import sharp from 'sharp'
import { writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const W = 1200
const H = 630

const svg = `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="18%" cy="22%" r="45%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#18181b" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowR" cx="88%" cy="78%" r="35%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#18181b" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="#18181b"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>
  <rect width="${W}" height="${H}" fill="url(#glowR)"/>

  <!-- Subtle grid -->
  <g opacity="0.03" stroke="#ffffff" stroke-width="1">
    ${Array.from({ length: 20 }, (_, i) => `<line x1="${i * 64}" y1="0" x2="${i * 64}" y2="${H}"/>`).join('\n    ')}
    ${Array.from({ length: 11 }, (_, i) => `<line x1="0" y1="${i * 64}" x2="${W}" y2="${i * 64}"/>`).join('\n    ')}
  </g>

  <!-- Top border line -->
  <rect x="0" y="0" width="${W}" height="1" fill="#3f3f46" opacity="0.6"/>

  <!-- Top-left label -->
  <text x="56" y="72" font-family="ui-monospace, monospace" font-size="13" fill="#71717a" letter-spacing="3" text-anchor="start">JOSHHOLTZ.APP / DIAGNOSTICS RUNTIME</text>

  <!-- Top-right badge -->
  <rect x="${W - 180}" y="48" width="124" height="28" rx="6" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-opacity="0.25" stroke-width="1"/>
  <text x="${W - 118}" y="67" font-family="ui-monospace, monospace" font-size="11" fill="#fbbf24" letter-spacing="2.5" text-anchor="middle">SCANNING</text>

  <!-- Divider -->
  <rect x="56" y="100" width="${W - 112}" height="1" fill="#27272a"/>

  <!-- Main heading -->
  <text x="56" y="238" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Inter', sans-serif" font-size="96" font-weight="300" fill="#fafaf9" letter-spacing="-1">JoshHoltz.app</text>

  <!-- Subtitle -->
  <text x="58" y="296" font-family="ui-monospace, monospace" font-size="22" fill="#f59e0b" letter-spacing="0.5">Unexpected architecture detected.</text>

  <!-- Divider -->
  <rect x="56" y="330" width="480" height="1" fill="#f59e0b" fill-opacity="0.3"/>

  <!-- Body copy line 1 -->
  <text x="56" y="380" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" font-size="22" font-weight="300" fill="#a1a1aa">For 34 years, I assumed this system was running standard firmware.</text>

  <!-- Body copy line 2 -->
  <text x="56" y="416" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Inter', sans-serif" font-size="22" font-weight="300" fill="#71717a">Turns out I was debugging the wrong operating system.</text>

  <!-- Bottom divider -->
  <rect x="0" y="${H - 80}" width="${W}" height="1" fill="#27272a"/>

  <!-- Bottom left: process indicators -->
  <circle cx="72" cy="${H - 44}" r="4" fill="#f59e0b" opacity="0.8"/>
  <text x="86" y="${H - 39}" font-family="ui-monospace, monospace" font-size="12" fill="#52525b" letter-spacing="1">masking.framework: active</text>

  <circle cx="298" cy="${H - 44}" r="4" fill="#ef4444" opacity="0.7"/>
  <text x="312" y="${H - 39}" font-family="ui-monospace, monospace" font-size="12" fill="#52525b" letter-spacing="1">social_battery: 19%</text>

  <circle cx="490" cy="${H - 44}" r="4" fill="#3b82f6" opacity="0.7"/>
  <text x="504" y="${H - 39}" font-family="ui-monospace, monospace" font-size="12" fill="#52525b" letter-spacing="1">hyperfocusd: armed</text>

  <!-- Bottom right: date -->
  <rect x="${W - 224}" y="${H - 62}" width="168" height="36" rx="6" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-opacity="0.2" stroke-width="1"/>
  <circle cx="${W - 208}" cy="${H - 44}" r="3.5" fill="#fbbf24"/>
  <text x="${W - 198}" y="${H - 39}" font-family="ui-monospace, monospace" font-size="13" fill="#fbbf24" letter-spacing="0.5">May 27, 2026</text>
</svg>`

const outputPath = join(__dirname, '../public/og-image.png')

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)

console.log(`✓ OG image written to public/og-image.png`)
