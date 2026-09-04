# callisto-site

Marketing landing page for [Callisto](https://callistoapp.eu) — an Android Python IDE with `.ipynb` and `.py` editing/execution.

Static HTML + Tailwind (via CDN) + FontAwesome. No build step.

**Copy currency: app version 1.5.0** (remote kernels, streaming output, server
files). The landing copy names Pro features and carries a `softwareVersion` in
the `SoftwareApplication` JSON-LD, so a feature release means a pass over
`index.html`: the feature cards, the FAQ (**both** the visible answers and the
mirrored `FAQPage` JSON-LD — Google wants them identical), and the Pro line in
the stack section.

## Pages

| File | Purpose |
|---|---|
| [`index.html`](index.html) | Landing — hero, features, bundled-package list, CTA |
| [`privacy.html`](privacy.html) | Privacy Policy (GDPR-aligned, **should** mirror in-app text — see below) |
| [`terms.html`](terms.html) | Terms of Service (Austrian law, **should** mirror in-app text — see below) |
| [`licences.html`](licences.html) | Open-source licences for bundled components |
| [`legal.html`](legal.html) | Legal hub + ECG §5 / MedienG §25 imprint |
| [`404.html`](404.html) | Themed not-found page |

## Assets

- [`assets/callisto-icon.png`](assets/callisto-icon.png) — 512 px launcher icon (08c artwork)
- [`assets/callisto-icon@2x.png`](assets/callisto-icon@2x.png) — 1024 px @2x
- [`assets/tailwind-config.js`](assets/tailwind-config.js) — design tokens (mirrors `CallistoColors` in the app)
- [`assets/screenshot.svg`](assets/screenshot.png) — app screenshot.

## The legal pages are ahead of the shipped app until 1.5.1

Both were revised to **Version 1.1, effective 4 September 2026** for remote
kernels: the Privacy Policy describes what travels to a Jupyter server you
configure, and Terms §5 no longer claims all code runs on your device.

The app's copies were brought in line on 2026-09-04 and are now identical to
these pages, **but that fix is not in a released build.** 1.5.0 went into Play
review carrying Version 1.0, so until 1.5.1 is live the text a user actually
accepts in the app is still the older one. Delete this section when 1.5.1 ships.

## `assets/og-image.png` still says "fully offline"

The social-share card (Open Graph / Twitter) carries the tagline *"Run & edit
Jupyter notebooks on Android — fully offline."* baked into the PNG. Every other
"fully offline" claim on the site was re-worded for 1.5.0; this one cannot be
edited as text and there is no source file for it in the repo. It is what shows
up when the site is linked on social or in chat apps, so it is worth
regenerating — 1200×630, same layout, tagline something like *"Run & edit
Jupyter notebooks on Android — on your device or your server."*
