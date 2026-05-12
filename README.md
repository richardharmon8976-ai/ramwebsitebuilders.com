# RAM Website Builders — Marketing Site

The public marketing site for **RAM Website Builders**. Pure static HTML/CSS/JS — no build step, no framework, no dependencies. All checkout, payment, and order management is handled by the Shopify store at `ram-website-builders.myshopify.com`. This site is the marketing layer on top.

## Project structure

```
.
├── index.html                # Home (/)
├── how-it-works/index.html   # /how-it-works
├── pricing/index.html        # /pricing
├── why-us/index.html         # /why-us
├── faq/index.html            # /faq
├── contact/index.html        # /contact
├── assets/
│   ├── style.css             # All site styles + design tokens
│   └── main.js               # Sticky nav, mobile menu, scroll reveal
├── vercel.json               # Vercel deploy config (clean URLs, cache headers)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Run locally

No build step. Any static server works. Easiest options:

```bash
# Python (built-in on macOS)
python3 -m http.server 8000

# Node (if installed)
npx serve .
```

Then open <http://localhost:8000>.

> Tip: links like `/pricing/` will work on any static server that serves `index.html` from sub-folders. They also work on Vercel and Netlify out of the box.

## Deploy to Vercel (recommended — 5 minutes)

1. Push this folder to a GitHub repo (or use the Vercel CLI directly from your machine).
2. Go to <https://vercel.com>, sign in with GitHub, click **New Project**, import the repo.
3. **Framework Preset:** Other. **Build command:** (leave empty). **Output directory:** `./`.
4. Click **Deploy**. You'll get a temporary URL like `ramwebsitebuilders.vercel.app` in ~30 seconds.

### Add your custom domain

Once you've bought your domain:

1. In Vercel → Project → **Settings → Domains** → add `ramwebsitebuilders-com.org` and `www.ramwebsitebuilders-com.org`.
2. Vercel will show the exact DNS records to add at your domain registrar (usually one `A` record + one `CNAME`).
3. SSL is automatic — Vercel issues a Let's Encrypt cert within minutes of DNS propagation.

## Deploy to Netlify (alternative)

1. Drag the entire project folder onto <https://app.netlify.com/drop>.
2. Done — you get a temporary URL immediately.
3. Add a custom domain under **Domain settings** the same way.

## Editing copy

All copy is plain HTML in each page's `index.html`. To change a headline, button label, price, or feature, open the relevant file and edit the text directly. There are no templates — every page is self-contained.

Shared elements (nav, footer) are duplicated across pages. If you change the nav or footer on one page, replicate the change on the other five.

## Editing colors / fonts

All design tokens live at the top of `assets/style.css`:

```css
:root {
  --navy: #1F3A5F;
  --gold: #D4A627;
  /* ... */
}
```

Change a token, save, and every page updates.

## Adding a new product / package

1. Add the product on Shopify and copy the product page URL.
2. Open `pricing/index.html`.
3. Either add a new `.tier` block (matches the existing Starter / Pro / Premium pattern) or add a new `.hosting-card` in the hosting section.
4. Update the home-page preview in `index.html` if you want it featured on the homepage.

## Shopify link policy (important)

This site never uses direct-to-cart URLs. All "Buy" / "Get Started" buttons link to **Shopify product pages** so buyers browse and read before checkout — Shopify handles the actual cart and payment flow from there.

| Product | URL used in this site |
|---|---|
| Starter Website Package ($599) | `/products/starter-website-package-built-in-5-days` |
| Pro Website Package ($999) | `/products/pro-website-package-most-popular` |
| Premium Website Package ($1,799) | `/products/premium-website-package-full-service` |
| Hosting Starter ($49/mo) | `/products/hosting-maintenance-starter-49-month` |
| Hosting Pro ($79/mo) | `/products/hosting-maintenance-pro-79-month` |
| Hosting Premium ($149/mo) | `/products/hosting-maintenance-premium-149-month` |
| Free Discovery Call | `/products/free-discovery-call-15-minutes` |
| Request a Quote | `/pages/request-a-quote` |
| Blog | `/blogs/news` |

All prefixed with `https://ram-website-builders.myshopify.com`.

## What Shopify handles

- All checkout (buyers click through to Shopify's hosted checkout)
- Payment processing
- Order records, customer info, refunds
- Email receipts
- The actual product pages

This site is **only** the marketing layer.

## Launch checklist

- [x] Buy `ramwebsitebuilders-com.org`
- [ ] Deploy to Vercel (or Netlify)
- [ ] Point DNS at Vercel and verify SSL is active
- [ ] Update `robots.txt` and `sitemap.xml` if the production domain differs
- [ ] Update the Open Graph image (currently uses default — add a 1200×630 PNG and set `<meta property="og:image">` on each page)
- [ ] Run Lighthouse on the live URL; verify 90+ on Performance / Accessibility / Best Practices / SEO
- [ ] Add Google Search Console and submit `sitemap.xml`
- [ ] Add an analytics snippet (Plausible / Fathom / GA4) — none included by default
- [ ] Optional: add real photos in place of the gradient hero (drop into `/assets/img/` and reference them)

## Tech notes

- Mobile-first responsive. Breakpoints at 980px, 880px, 720px, 540px.
- `prefers-reduced-motion` respected — disables transitions and smooth scroll for users who set it.
- Native `<details>` used for FAQ accordions (fully accessible, no JS required).
- IntersectionObserver used for scroll-reveal — gracefully degrades if unsupported.
- All images are absent by design — visuals are CSS gradients + inline SVG icons, so page weight stays tiny.

## License

Proprietary. © 2026 RAM Website Builders.
