# callisto-site

Marketing landing page for [Callisto](https://callistoapp.eu) — an Android Python IDE with `.ipynb` and `.py` editing/execution.

Static HTML + Tailwind (via CDN) + FontAwesome. No build step.

## Pages

| File | Purpose |
|---|---|
| [`index.html`](index.html) | Landing — hero, features, bundled-package list, CTA |
| [`privacy.html`](privacy.html) | Privacy Policy (GDPR-aligned, mirrors in-app text) |
| [`terms.html`](terms.html) | Terms of Service (Austrian law, mirrors in-app text) |
| [`licences.html`](licences.html) | Open-source licences for bundled components |
| [`legal.html`](legal.html) | Legal hub + ECG §5 / MedienG §25 imprint |
| [`404.html`](404.html) | Themed not-found page |

## Assets

- [`assets/callisto-icon.png`](assets/callisto-icon.png) — 512 px launcher icon (08c artwork)
- [`assets/callisto-icon@2x.png`](assets/callisto-icon@2x.png) — 1024 px @2x
- [`assets/tailwind-config.js`](assets/tailwind-config.js) — design tokens (mirrors `CallistoColors` in the app)
- [`assets/screenshot.svg`](assets/screenshot.svg) — placeholder for the phone-mockup screenshot. Replace with a real PNG/JPG and update the `<img src>` in `index.html`.

## Deploy

GitHub Pages, source = `main` branch / root. Custom domain set via `CNAME` → `callistoapp.eu`.

DNS at the registrar:
- `ALIAS`/`ANAME` on apex `callistoapp.eu` → `capturetheventure.github.io`, or
- four `A` records → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

## Updating legal copy

The Privacy Policy, Terms, and Open-source Licences pages mirror text from the Callisto app source (`PrivacyPolicyText.kt`, `TermsText.kt`, `OpenSourceText.kt`). If the app text changes, port the update here too — the in-app screen and the web page should always say the same thing.
