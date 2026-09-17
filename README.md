# callisto-site

Marketing landing page for [Callisto](https://callistoapp.eu) — an Android Python IDE with `.ipynb` and `.py` editing/execution.

Static HTML + Tailwind CSS (prebuilt into `assets/site.css`, committed) + inline Font Awesome SVG icons. No framework, no npm.

**Copy currency: app version 1.6.0** (Python diagnostics as you type, faster
notebook-aware completion). The landing copy names Pro features and carries a
`softwareVersion` in the `SoftwareApplication` JSON-LD, so a feature release
means a pass over `index.html`: the feature cards, the FAQ (**both** the visible
answers and the mirrored `FAQPage` JSON-LD — Google wants them identical), and
the Free / Lifetime Unlock package groups and Pro line in the stack section.

## Building the CSS

`assets/site.css` is generated: Tailwind scans the HTML pages and emits only the
classes they use. **Rebuild after adding or changing any class in any page** —
otherwise the new class simply doesn't exist on the live site. It uses the
Tailwind v3 standalone CLI, a single binary (gitignored):

```bash
curl -sSLo tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.17/tailwindcss-macos-arm64 && chmod +x tailwindcss
```

```bash
./tailwindcss -i tailwind.css -o assets/site.css --minify
```

- [`tailwind.config.js`](tailwind.config.js) — design tokens (mirrors `CallistoColors` in the app)
- [`tailwind.css`](tailwind.css) — the Tailwind entry point plus the few hand-written rules (feature-card reveal)

Icons are Font Awesome Free 6.x SVGs pasted inline as
`<svg class="h-[1em] w-auto shrink-0 fill-current …" viewBox="…" aria-hidden="true"><path d="…"/></svg>`,
so `text-*` sizes and colours them the way it did the old `<i>` tags.

## Pages

| File | Purpose |
|---|---|
| [`index.html`](index.html) | Landing — hero, features, bundled-package list, FAQ, CTA |
| [`privacy.html`](privacy.html) | Privacy Policy (GDPR-aligned, **should** mirror in-app text — see below) |
| [`terms.html`](terms.html) | Terms of Service (Austrian law, **should** mirror in-app text — see below) |
| [`licences.html`](licences.html) | Open-source licences for bundled components |
| [`legal.html`](legal.html) | Legal hub + ECG §5 / MedienG §25 imprint |
| [`404.html`](404.html) | Themed not-found page (root-relative asset URLs — it is served at any path) |

## Assets

- [`assets/callisto-icon.png`](assets/callisto-icon.png) — 512 px launcher icon (08c artwork)
- [`assets/callisto-icon@2x.png`](assets/callisto-icon@2x.png) — 1024 px @2x
- [`assets/site.css`](assets/site.css) — built Tailwind output, see above
- [`assets/fonts/`](assets/fonts/) — Inter and Fira Code, variable woff2 (latin + latin-ext) from `@fontsource-variable` 5.3.0, SIL OFL 1.1; `@font-face` rules live in `tailwind.css`
- [`assets/screenshot.png`](assets/screenshot.png) — app screenshot, full resolution (1150×2492)
- [`assets/screenshot.webp`](assets/screenshot.webp) — what the page actually serves, 720 px wide. Regenerate when the screenshot changes:

```bash
cwebp -q 88 -resize 720 0 assets/screenshot.png -o assets/screenshot.webp
```

## The Privacy Policy on the site is ahead of the app (Version 1.2)

Version 1.2 (17 September 2026) adds a *This website* section — GitHub Pages
hosting, no cookies or tracking, e-mail enquiries — and names GitHub beside Google
under processors. Nothing about the App changed, but the in-app copy is still
Version 1.1. Bring the app's text in line in the next release, then delete this
section.

The site loads nothing from third parties (fonts are self-hosted in
`assets/fonts/`, Font Awesome is inlined). Keep it that way: any external script,
font, embed or analytics would need a new paragraph in the policy, and anything
that stores on the device would need a consent banner.

## `assets/og-image.png` still says "fully offline"

The social-share card (Open Graph / Twitter) carries the tagline *"Run & edit
Jupyter notebooks on Android — fully offline."* baked into the PNG. Every other
"fully offline" claim on the site was re-worded for 1.5.0; this one cannot be
edited as text and there is no source file for it in the repo. It is what shows
up when the site is linked on social or in chat apps, so it is worth
regenerating — 1200×630, same layout, tagline something like *"Run & edit
Jupyter notebooks on Android — on your device or your server."*
