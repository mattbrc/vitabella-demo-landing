# Vita Bella booking demo

Standalone, simplified Vita Bella landing page for demonstrating EMRG booking. Plain HTML/CSS/JS; no dependencies,
server API, credentials, or EMRG repository imports. This is a demo recreation, not an exact copy of the live website.

## Local preview

```sh
npm run dev
```

Open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` if needed. Node 18+.

## Booking configuration

Edit `public/config.js`. Default: clinic **45 (VITA BELLA)**.
The page loads the official `https://joinemrg.com/widget.js`, initializes it with
`window.emrgWidget.init(config)`, and every booking CTA calls `window.launchEmrgWidget(45)`.
EMRG owns the standard slide-out panel and its behavior; there is no custom modal or iframe shell.
Optional Google Analytics / Meta IDs are omitted unless you supply real IDs.

The booking UI is live: submitting forms can create real patient/appointment records. Use synthetic test data.
The official widget controls its own analytics and attribution behavior.

The demo uses the production widget URL directly, with no proxy, redirects, or custom booking UI.
The official script currently selects a local `/book` URL when the page hostname is `localhost` or
`127.*`; use a hosted preview (such as Vercel) to test the production booking panel. The direct booking
link always points to production.

## Build / later Vercel deployment

```sh
npm run build
npm run preview
```

`vercel.json` supplies `npm run build` and the `dist` output directory. Import this repository into Vercel later
using the **Other** framework preset. No environment variables are required. Deployment has not been performed.
Robots meta, robots.txt, and the Vercel X-Robots-Tag header discourage indexing; they are not access control.

## Reference assets

- Landing content reference: https://vitabella.com/ (checked November 4, 2026). Direct visual access was unavailable
  due to a certificate/network error; design is an approximation of the brand. Copy is abbreviated for the demo.
- Brand reference: https://atticsalt.co/our-work/vita-bella
- `brand-man.png`: https://cdn.prod.website-files.com/645e3300c3daa18922eff28c/68ad2caada5def5710c6d4aa_VB-Logo_Man.png
- `brand-products.jpg`: https://cdn.prod.website-files.com/645e3300c3daa18922eff28c/68696a1deb4540a7a459d4cc_VitaBella_pills.jpeg
- Type: Barlow Condensed and Inter from Google Fonts, served locally. Brand photography belongs to its respective owners;
  retained for this client demonstration. The SVG wordmark symbol is a simplified demo approximation.

Membership reference prices are display copy, not booking configuration. Update them in `public/index.html` independently.
