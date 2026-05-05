#!/usr/bin/env node
/**
 * Generates one unique SVG cover image per article into
 * public/images/articles/<id>.svg.
 *
 * Each cover has:
 *  - a deterministic gradient seeded from the article id
 *  - a category-specific motif (waveform / mesh / headset / padlock / cloud / gears / chart / phone)
 *  - the article title wrapped to fit
 *  - the category label
 *  - VOIP CAT branding
 *
 * Run with `node scripts/generate-article-covers.mjs` from the repo root.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const articles = [
  { id: 'what-is-voip', title: 'What is VoIP? A Complete Guide to Voice over Internet Protocol', category: 'VoIP Basics', motif: 'phone' },
  { id: 'sip-trunk-vs-pri', title: 'SIP Trunk vs PRI: Which is Better for Your Business?', category: 'SIP Trunking', motif: 'mesh' },
  { id: 'voip-for-call-centers', title: 'VoIP for Call Centers: The Complete Guide', category: 'Call Centers', motif: 'headset' },
  { id: 'wholesale-voip-explained', title: 'Wholesale VoIP Explained: A Guide for Carriers and Resellers', category: 'Wholesale VoIP', motif: 'globe' },
  { id: 'voip-security-guide', title: 'VoIP Security: How to Protect Your Business Communications', category: 'Security', motif: 'shield' },
  { id: '3cx-sip-trunk-setup', title: 'How to Set Up a SIP Trunk with 3CX: Step-by-Step Guide', category: 'Tutorials', motif: 'gears' },
  { id: 'asterisk-voip-setup', title: 'Asterisk VoIP Setup: Complete Configuration Guide', category: 'Tutorials', motif: 'terminal' },
  { id: 'freepbx-setup-guide', title: 'FreePBX Setup Guide: Build Your Business Phone System', category: 'Tutorials', motif: 'server' },
  { id: 'cloud-pbx-benefits', title: '10 Benefits of Cloud PBX for Modern Businesses', category: 'Cloud PBX', motif: 'cloud' },
  { id: 'voip-codecs-explained', title: 'VoIP Codecs Explained: G.711, G.729, Opus, and More', category: 'Technical', motif: 'waveform' },
  { id: 'voip-technology-guide', title: 'VoIP Technology Guide: Understanding Modern Voice Communication', category: 'Technology', motif: 'circuit' },
  { id: 'asterisk-pbx-guide', title: 'Asterisk PBX Server Guide: Building Your Own Phone System', category: 'Technology', motif: 'rack' },
  { id: 'voip-evolution', title: 'The Evolution of VoIP: From Experimental Tech to Business Standard', category: 'Technology', motif: 'timeline' },
  { id: 'voip-benefits-business', title: 'Top 10 Benefits of Switching Your Business to VoIP', category: 'Business', motif: 'chart' },
  { id: 'voip-security-best-practices', title: 'Securing Your VoIP Network: Essential Best Practices', category: 'Security', motif: 'lock' },
  { id: 'hosted-vs-on-premise-voip', title: 'Hosted vs. On-Premise VoIP: Which is Right for You?', category: 'Business', motif: 'split' },
];

// djb2 hash → unsigned int → seed
function seed(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) + h) ^ str.charCodeAt(i);
  }
  return h >>> 0;
}

// Mulberry32 PRNG so each id gives a stable, varied palette
function rng(s) {
  let a = s >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const CATEGORY_PALETTES = {
  'VoIP Basics':    [['#0ea5e9', '#1e3a8a'], ['#0284c7', '#0c4a6e']],
  'SIP Trunking':   [['#22d3ee', '#0e7490'], ['#06b6d4', '#155e75']],
  'Call Centers':   [['#f97316', '#7c2d12'], ['#fb923c', '#9a3412']],
  'Wholesale VoIP': [['#10b981', '#064e3b'], ['#34d399', '#065f46']],
  'Security':       [['#ef4444', '#7f1d1d'], ['#dc2626', '#991b1b']],
  'Tutorials':      [['#8b5cf6', '#4c1d95'], ['#a78bfa', '#5b21b6']],
  'Cloud PBX':      [['#3b82f6', '#1e40af'], ['#60a5fa', '#1e3a8a']],
  'Technical':      [['#14b8a6', '#134e4a'], ['#2dd4bf', '#115e59']],
  'Technology':     [['#6366f1', '#312e81'], ['#818cf8', '#3730a3']],
  'Business':       [['#eab308', '#713f12'], ['#facc15', '#854d0e']],
};

function pickPalette(cat, r) {
  const list = CATEGORY_PALETTES[cat] || CATEGORY_PALETTES['VoIP Basics'];
  return list[Math.floor(r() * list.length)];
}

function escape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function wrapTitle(title, maxChars = 28) {
  const words = title.split(/\s+/);
  const lines = [];
  let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > maxChars && cur) {
      lines.push(cur.trim());
      cur = w;
    } else {
      cur = (cur + ' ' + w).trim();
    }
    if (lines.length >= 3) break;
  }
  if (cur && lines.length < 4) lines.push(cur.trim());
  return lines.slice(0, 4);
}

// Motif renderers — each returns SVG content centered around (1100, 450) in a 1600x900 viewbox.
function motifPhone() {
  return `
    <g transform="translate(1100 450) rotate(-12)" fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="6" stroke-linecap="round" stroke-linejoin="round">
      <rect x="-90" y="-180" width="180" height="360" rx="28" />
      <line x1="-50" y1="-150" x2="50" y2="-150" />
      <circle cx="0" cy="140" r="14" />
    </g>
    <g stroke="rgba(255,255,255,0.55)" stroke-width="4" fill="none">
      <path d="M1240 280 q 70 70 0 140" />
      <path d="M1290 250 q 110 110 0 220" />
      <path d="M1340 220 q 150 150 0 300" />
    </g>`;
}
function motifMesh() {
  const pts = [];
  const r = rng(1);
  for (let i = 0; i < 18; i++) {
    pts.push([900 + r() * 380, 240 + r() * 420]);
  }
  let lines = '';
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i][0] - pts[j][0];
      const dy = pts[i][1] - pts[j][1];
      if (Math.sqrt(dx * dx + dy * dy) < 160) {
        lines += `<line x1="${pts[i][0].toFixed(0)}" y1="${pts[i][1].toFixed(0)}" x2="${pts[j][0].toFixed(0)}" y2="${pts[j][1].toFixed(0)}" stroke="rgba(255,255,255,0.35)" stroke-width="2"/>`;
      }
    }
  }
  let dots = pts.map(([x, y]) => `<circle cx="${x.toFixed(0)}" cy="${y.toFixed(0)}" r="9" fill="rgba(255,255,255,0.95)"/>`).join('');
  return `<g>${lines}${dots}</g>`;
}
function motifHeadset() {
  return `
    <g transform="translate(1100 450)" stroke="rgba(255,255,255,0.95)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path d="M-160 0 a 160 160 0 0 1 320 0" />
      <rect x="-180" y="-10" width="60" height="120" rx="20" fill="rgba(255,255,255,0.95)" />
      <rect x="120" y="-10" width="60" height="120" rx="20" fill="rgba(255,255,255,0.95)" />
      <path d="M120 90 q 0 90 -90 100 l -60 0 a 18 18 0 0 1 -18 -18 l 0 -24 a 18 18 0 0 1 18 -18 l 60 0" />
    </g>`;
}
function motifGlobe() {
  return `
    <g transform="translate(1100 450)" fill="none" stroke="rgba(255,255,255,0.9)" stroke-width="4">
      <circle r="200" />
      <ellipse rx="200" ry="80" />
      <ellipse rx="200" ry="140" />
      <ellipse rx="80" ry="200" />
      <ellipse rx="140" ry="200" />
      <line x1="-200" y1="0" x2="200" y2="0" />
      <line x1="0" y1="-200" x2="0" y2="200" />
    </g>`;
}
function motifShield() {
  return `
    <g transform="translate(1100 450)" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.95)" stroke-width="6" stroke-linejoin="round">
      <path d="M0 -200 L 170 -130 L 170 30 Q 170 170 0 230 Q -170 170 -170 30 L -170 -130 Z" />
      <path d="M -70 0 L -20 60 L 80 -60" stroke="rgba(255,255,255,0.95)" stroke-width="14" fill="none" stroke-linecap="round"/>
    </g>`;
}
function motifGears() {
  return `
    <g fill="none" stroke="rgba(255,255,255,0.92)" stroke-width="8" stroke-linejoin="round">
      <g transform="translate(1020 380)">
        <circle r="100" />
        <circle r="40" />
        ${Array.from({ length: 8 }).map((_, i) => {
          const a = (i * Math.PI) / 4;
          const x1 = Math.cos(a) * 100, y1 = Math.sin(a) * 100;
          const x2 = Math.cos(a) * 130, y2 = Math.sin(a) * 130;
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="20"/>`;
        }).join('')}
      </g>
      <g transform="translate(1240 540)">
        <circle r="70" />
        <circle r="28" />
        ${Array.from({ length: 6 }).map((_, i) => {
          const a = (i * Math.PI) / 3;
          const x1 = Math.cos(a) * 70, y1 = Math.sin(a) * 70;
          const x2 = Math.cos(a) * 95, y2 = Math.sin(a) * 95;
          return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke-width="16"/>`;
        }).join('')}
      </g>
    </g>`;
}
function motifTerminal() {
  return `
    <g transform="translate(900 280)">
      <rect width="380" height="280" rx="18" fill="rgba(0,0,0,0.45)" stroke="rgba(255,255,255,0.55)" stroke-width="3"/>
      <circle cx="22" cy="22" r="7" fill="#ef4444"/>
      <circle cx="46" cy="22" r="7" fill="#fbbf24"/>
      <circle cx="70" cy="22" r="7" fill="#22c55e"/>
      <g font-family="ui-monospace, Menlo, monospace" font-size="22" fill="rgba(255,255,255,0.92)">
        <text x="20" y="80">$ asterisk -rvvv</text>
        <text x="20" y="115">CLI&gt; sip show peers</text>
        <text x="20" y="150">100/100      OK (12 ms)</text>
        <text x="20" y="185">200/200      OK (8 ms)</text>
        <text x="20" y="225">300/300      OK (15 ms)</text>
      </g>
    </g>`;
}
function motifServer() {
  return `
    <g transform="translate(960 270)" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.9)" stroke-width="4">
      <rect width="280" height="80" rx="10"/>
      <rect y="100" width="280" height="80" rx="10"/>
      <rect y="200" width="280" height="80" rx="10"/>
      <g fill="rgba(255,255,255,0.95)" stroke="none">
        <circle cx="240" cy="40" r="6"/>
        <circle cx="220" cy="40" r="6"/>
        <circle cx="240" cy="140" r="6"/>
        <circle cx="220" cy="140" r="6"/>
        <circle cx="240" cy="240" r="6"/>
        <circle cx="220" cy="240" r="6"/>
      </g>
      <g stroke="rgba(255,255,255,0.6)" stroke-width="3">
        <line x1="20" y1="40" x2="160" y2="40"/>
        <line x1="20" y1="140" x2="160" y2="140"/>
        <line x1="20" y1="240" x2="160" y2="240"/>
      </g>
    </g>`;
}
function motifCloud() {
  return `
    <g transform="translate(900 380)" fill="rgba(255,255,255,0.96)">
      <path d="M60 120 a 70 70 0 0 1 70 -70 a 90 90 0 0 1 170 18 a 60 60 0 0 1 24 116 l -224 0 a 50 50 0 0 1 -40 -64 z"/>
    </g>
    <g stroke="rgba(255,255,255,0.85)" stroke-width="6" fill="none" stroke-linecap="round">
      <path d="M1000 580 v 60"/>
      <path d="M1080 580 v 100"/>
      <path d="M1160 580 v 70"/>
      <circle cx="1000" cy="660" r="6" fill="rgba(255,255,255,0.95)"/>
      <circle cx="1080" cy="700" r="6" fill="rgba(255,255,255,0.95)"/>
      <circle cx="1160" cy="670" r="6" fill="rgba(255,255,255,0.95)"/>
    </g>`;
}
function motifWaveform() {
  let path = 'M820 450';
  const r = rng(7);
  for (let x = 820; x <= 1400; x += 18) {
    const amp = 40 + r() * 90;
    const y = 450 + Math.sin((x - 820) / 22) * amp;
    path += ` L ${x} ${y.toFixed(1)}`;
  }
  return `
    <g fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="5" stroke-linecap="round">
      <path d="${path}"/>
    </g>
    <g stroke="rgba(255,255,255,0.4)" stroke-width="2">
      <line x1="820" y1="320" x2="1400" y2="320"/>
      <line x1="820" y1="450" x2="1400" y2="450"/>
      <line x1="820" y1="580" x2="1400" y2="580"/>
    </g>`;
}
function motifCircuit() {
  return `
    <g stroke="rgba(255,255,255,0.85)" stroke-width="4" fill="none">
      <path d="M820 250 H 980 V 350 H 1180 V 250 H 1340"/>
      <path d="M820 450 H 1080 V 550 H 1340"/>
      <path d="M820 650 H 920 V 550 H 1080"/>
    </g>
    <g fill="rgba(255,255,255,0.95)">
      ${[ [820,250],[980,350],[1180,250],[1340,250],[820,450],[1080,550],[1340,450],[820,650],[920,550],[1080,550] ]
        .map(([x,y]) => `<circle cx="${x}" cy="${y}" r="8"/>`).join('')}
    </g>`;
}
function motifRack() {
  return `
    <g transform="translate(960 240)" stroke="rgba(255,255,255,0.95)" stroke-width="3">
      <rect width="280" height="380" rx="12" fill="rgba(255,255,255,0.05)"/>
      ${Array.from({ length: 7 }).map((_, i) => `
        <rect x="20" y="${20 + i * 50}" width="240" height="36" rx="6" fill="rgba(255,255,255,0.12)"/>
        <circle cx="245" cy="${38 + i * 50}" r="4" fill="${i % 2 ? '#22c55e' : '#fbbf24'}" stroke="none"/>
        <line x1="40" y1="${38 + i * 50}" x2="180" y2="${38 + i * 50}" stroke="rgba(255,255,255,0.4)" stroke-width="2"/>
      `).join('')}
    </g>`;
}
function motifTimeline() {
  return `
    <g stroke="rgba(255,255,255,0.85)" stroke-width="4" fill="none">
      <line x1="820" y1="450" x2="1380" y2="450"/>
    </g>
    <g fill="rgba(255,255,255,0.95)" font-family="Inter, system-ui, sans-serif" font-size="22">
      ${[
        ['1995','820'], ['2003','960'], ['2010','1100'], ['2018','1240'], ['2026','1380'],
      ].map(([y,x]) => `<circle cx="${x}" cy="450" r="12"/><text x="${x}" y="500" text-anchor="middle" fill="rgba(255,255,255,0.85)">${y}</text>`).join('')}
    </g>`;
}
function motifChart() {
  const r = rng(11);
  const bars = [];
  for (let i = 0; i < 6; i++) {
    const h = 80 + r() * 220;
    bars.push(`<rect x="${860 + i * 80}" y="${640 - h}" width="56" height="${h}" rx="6" fill="rgba(255,255,255,0.92)"/>`);
  }
  return `
    <g>${bars.join('')}</g>
    <g stroke="rgba(255,255,255,0.55)" stroke-width="3" fill="none">
      <path d="M860 360 L 940 300 L 1020 320 L 1100 240 L 1180 260 L 1260 200 L 1320 180" />
    </g>
    <g fill="rgba(255,255,255,0.95)">
      ${[ [940,300],[1020,320],[1100,240],[1180,260],[1260,200],[1320,180] ]
        .map(([x,y]) => `<circle cx="${x}" cy="${y}" r="7"/>`).join('')}
    </g>`;
}
function motifLock() {
  return `
    <g transform="translate(1100 450)" fill="rgba(255,255,255,0.95)" stroke="none">
      <rect x="-110" y="-30" width="220" height="200" rx="20"/>
      <rect x="-22" y="50" width="44" height="80" rx="12" fill="rgba(0,0,0,0.35)"/>
    </g>
    <g transform="translate(1100 450)" fill="none" stroke="rgba(255,255,255,0.95)" stroke-width="14" stroke-linecap="round">
      <path d="M-70 -30 v -50 a 70 70 0 0 1 140 0 v 50"/>
    </g>`;
}
function motifSplit() {
  return `
    <g fill="rgba(255,255,255,0.9)" stroke="rgba(255,255,255,0.95)" stroke-width="4">
      <g transform="translate(880 320)">
        <rect width="240" height="160" rx="14" fill="rgba(255,255,255,0.12)"/>
        <text x="120" y="100" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="40" font-family="Inter, system-ui, sans-serif" font-weight="700">HOSTED</text>
      </g>
      <g transform="translate(1180 460)">
        <rect width="240" height="160" rx="14" fill="rgba(255,255,255,0.12)"/>
        <text x="120" y="100" text-anchor="middle" fill="rgba(255,255,255,0.95)" font-size="36" font-family="Inter, system-ui, sans-serif" font-weight="700">ON-PREM</text>
      </g>
      <g stroke="rgba(255,255,255,0.7)" stroke-width="6" fill="none">
        <path d="M1120 400 L 1180 540" />
      </g>
    </g>`;
}

const MOTIFS = {
  phone: motifPhone, mesh: motifMesh, headset: motifHeadset, globe: motifGlobe, shield: motifShield,
  gears: motifGears, terminal: motifTerminal, server: motifServer, cloud: motifCloud,
  waveform: motifWaveform, circuit: motifCircuit, rack: motifRack, timeline: motifTimeline,
  chart: motifChart, lock: motifLock, split: motifSplit,
};

function renderCover(article) {
  const r = rng(seed(article.id));
  const [c1, c2] = pickPalette(article.category, r);
  const accent = `rgba(255,255,255,${(0.04 + r() * 0.06).toFixed(3)})`;
  const titleLines = wrapTitle(article.title, 26);
  const motifFn = MOTIFS[article.motif] || motifPhone;

  // Background pattern: scattered dots seeded from id
  let dots = '';
  for (let i = 0; i < 60; i++) {
    const x = (r() * 1600).toFixed(1);
    const y = (r() * 900).toFixed(1);
    const radius = (1 + r() * 2).toFixed(1);
    dots += `<circle cx="${x}" cy="${y}" r="${radius}" fill="${accent}"/>`;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" role="img" aria-label="${escape(article.title)} - ${escape(article.category)} cover image by VOIP CAT">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${c1}"/>
      <stop offset="1" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.42" r="0.55">
      <stop offset="0" stop-color="rgba(255,255,255,0.35)"/>
      <stop offset="1" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  ${dots}
  ${motifFn()}
  <g font-family="Inter, system-ui, -apple-system, Segoe UI, Roboto, sans-serif" fill="#ffffff">
    <text x="80" y="120" font-size="28" letter-spacing="6" font-weight="600" opacity="0.85">${escape(article.category.toUpperCase())}</text>
    ${titleLines.map((line, i) => `<text x="80" y="${260 + i * 92}" font-size="76" font-weight="800">${escape(line)}</text>`).join('\n    ')}
    <text x="80" y="820" font-size="28" font-weight="700" letter-spacing="4">VOIP CAT</text>
    <text x="80" y="855" font-size="20" opacity="0.85">voipcat.com · Global VoIP &amp; Call Center Provider</text>
  </g>
</svg>`;
}

const outDir = join(process.cwd(), 'public', 'images', 'articles');
mkdirSync(outDir, { recursive: true });

for (const article of articles) {
  const svg = renderCover(article);
  const path = join(outDir, `${article.id}.svg`);
  writeFileSync(path, svg, 'utf8');
  console.log('wrote', path);
}

console.log(`Generated ${articles.length} unique article cover SVGs in ${outDir}`);
