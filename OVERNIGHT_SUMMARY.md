# Overnight summary — wake-up brief

Good morning. Here's everything I did while you were asleep, what's waiting for you, and the order to do things.

## TL;DR — do these 3 things first (about 10 minutes total)

1. **Hook up the domain** — open `DOMAIN_SETUP.md` in this repo for the exact click-by-click. Two screens: Vercel and your registrar. ~5 minutes of clicking, ~30 minutes of waiting for DNS.
2. **Click "Activate Form"** when the new FormSubmit email arrives (it will, after the first submission from the new domain). Same drill as last time.
3. **Review the lead I drafted you** — see *Outstanding leads* below.

Everything else is bonus.

---

## What's already done and live in the repo

### Site fixes (merged to main, deploying via Vercel)

- **Pointed the whole site at `ramwebsites.site`** — canonical URLs, og:url, og:site_name, sitemap.xml, robots.txt. The old sitemap was pointing at a wrong domain (`ramwebsitebuilders-com.org`) — Google would've ignored it.
- **SEO foundation**:
  - JSON-LD structured data on the homepage (ProfessionalService, prices, offers)
  - JSON-LD FAQPage schema on /faq/ — eligible for Google's rich-result FAQ accordion in search
  - Open Graph image (1200×630 PNG) on every page so Facebook/X/LinkedIn shares look professional
  - SVG favicon
  - Custom 404 page in the site design
  - `/privacy/` page (small businesses that collect emails need one), linked from every footer
- **New lead-gen page** at `/audit/` — visitors answer 8 yes/no questions about their current site, get a live score, and can drop their email + URL to receive a written audit from you. The form submits the score *and* their answers along with their email, so you can see exactly where their site is weak before you reply.
- **Homepage tweak**: subtle link to the audit added in the pricing-foot line.

### Shopify

- **Audited all 6 products** — prices match the website exactly. No mismatches, no broken links.
- **Three blog drafts created** (NOT published — review and publish whichever you want):
  1. *"How Much Does a Small Business Website Cost in 2026? (Real Numbers)"* — pricing-transparency long-form, targets "small business website cost" searches.
  2. *"7 Signs Your Website Is Losing You Customers (And How to Fix Each One)"* — diagnostic piece that funnels readers toward the /audit/ page and contact form.
  3. *"What Every Plumber's Website Needs in 2026 (The 8-Point Checklist)"* — vertical-specific, targets local plumbing searches. (Template for similar posts on salons, restaurants, contractors etc. — same structure, swap the verticals.)

  All three are on your blog at: ram-website-builders.myshopify.com/admin → Online Store → Blog posts. They're saved with you as the author.

## Outstanding leads

You have one **possible lead** from May 12 that I drafted a reply for but did NOT send:

- **From:** `hankies.midair.2x@icloud.com` (this looks like an iCloud Hide-My-Email address, so it might be a real prospective customer — or it might be your own test from your iPhone)
- **Subject:** "New free-call request from ramwebsitebuilders.com"
- **My draft reply is sitting in your Gmail Drafts** — subject "Your free 15-minute call — RAM Website Builders". Open it, decide if it's a real lead, edit and send. If it's just your own test, delete it.

The other two submissions on May 12 were from `richard.harmon8976@gmail.com` (your tests during setup).

## What still needs YOUR hands (I can't do these)

1. **Domain DNS + Vercel** — only you can log into those accounts. See `DOMAIN_SETUP.md`.
2. **Google Search Console verification** — needs you to claim the property at search.google.com/search-console. Once you generate the meta tag, send it to me and I'll wire it in.
3. **Add Google Analytics or Plausible** — if you want traffic numbers. Tell me which and I'll install it.
4. **First testimonials** — when you ship your first sites, get a 2-sentence quote + first name + city + business type. I have a slot on the homepage ready for these.
5. **A real photo of you** — even a phone selfie at your desk. A "Built by Richard" footer with your face moves trust more than any design change. Drop it in the repo at `/assets/richard.jpg` and tell me and I'll wire it in.
6. **Verify your domain contact info at Namecheap** — you got an email about this. Ignore it and the domain can be suspended.

## Things I considered but didn't do (waiting on your call)

- **Outreach list via Apollo** — could pull 200–500 local-business prospects (plumbers, salons etc.) matching your target customer. Did NOT do this without permission because it would feed into email outreach, which has spam/CAN-SPAM implications. If you want this, say "build me a prospect list" and I'll do it.
- **Discount codes** — could create "FIRST5OFF" (first 5 customers get $100 off) or similar in Shopify. Didn't create any without you approving the offer.
- **Email outreach sequences** — same reason. Drafts only, never sent.
- **Republishing the site to Vercel under the new domain** — Vercel deploys automatically on main pushes, so the code is updated; the domain just isn't connected yet (that's your DNS step).

## What I'd suggest for your morning

1. **0–10 min:** Read this file. Do the three TL;DR items.
2. **10–25 min:** Open the three blog drafts in Shopify, edit any details you want different, publish whichever feel right. Even one good post indexed by Google is worth it.
3. **25–35 min:** Once DNS is live, do a real test submission from your phone at `ramwebsites.site/contact` and `ramwebsites.site/audit`. Activate FormSubmit if it asks.
4. **35+ min:** Go reply to that maybe-lead from your drafts.

Anything you don't want, tell me and I'll undo. Anything you want more of, tell me and I'll keep going.

— C
