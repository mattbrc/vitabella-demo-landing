# Vita Bella booking demo

Standalone, simplified Vita Bella landing page for demonstrating EMRG booking. Plain HTML/CSS/JS; no dependencies,
server API, credentials, or EMRG repository imports. This is a demo recreation, not an exact copy of the live website.

## Local preview

```sh
npm run dev
```

Open http://127.0.0.1:4173. Use `PORT=4174 npm run dev` if needed. Node 18+.

## Booking configuration

Edit `public/config.js`. Default: clinic **45 (VITA BELLA)**, booking origin **https://joinemrg.com**.
Every booking CTA opens the real `/book?clinicId=45` app inside an accessible dialog. Nothing loads until clicked.
The booking UI is live: submitting its forms can create real patient/appointment records. Use synthetic test data.
The landing page itself collects no patient data and adds no analytics scripts. EMRG controls analytics inside its booking app.

The demo deliberately uses an absolute iframe URL. The current EMRG widget.js auto-routes localhost hosts to a
local `/book` route, which does not exist in this standalone project. The embedded app itself is the same booking UI.
Escape, the close button, or the desktop backdrop closes the dialog. A new-tab fallback remains available if
browser cookies, network access, or embed policies prevent loading. Confirm any required origin allowlists before sharing.

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
