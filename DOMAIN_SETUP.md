# Getting ramwebsites.site live (10 minutes, two screens)

You bought the domain — great. The site is already pointing at it in code. The only steps left are in your domain registrar's DNS settings and in Vercel. I can't log into either of those for you. Here's the exact click-by-click.

## 1. Add the domain in Vercel (3 minutes)

1. Open **vercel.com**, sign in.
2. Click your **ramwebsitebuilders.com** project (it's the one already deployed).
3. Go to **Settings → Domains** (left sidebar).
4. In the "Add" box, type `ramwebsites.site` and click **Add**.
5. Vercel will say "Invalid Configuration" and show you two DNS records you need to add at your registrar — usually:
   - An **A record** for `@` pointing at an IP (typically `76.76.21.21`)
   - A **CNAME record** for `www` pointing at `cname.vercel-dns.com`
   - **Leave this page open** — you'll come back to it after step 2.
6. Click **Add** again, this time with `www.ramwebsites.site` so both versions work.

## 2. Update DNS at your domain registrar (3 minutes)

Wherever you bought ramwebsites.site (likely Namecheap, since that's where your other domain is — but might be Squarespace/Google, GoDaddy, Porkbun, etc.):

1. Log into your registrar's account.
2. Find **ramwebsites.site** in your domain list.
3. Open **DNS settings** / **Advanced DNS** / **DNS records**.
4. **Delete** any existing A or CNAME records on `@` and `www` (they're probably placeholders).
5. **Add the two records Vercel showed you** in step 1.5. Save.

DNS usually propagates in 5–30 minutes. Sometimes up to an hour. Vercel will auto-issue an SSL certificate as soon as it detects the records, so https will work without you doing anything.

## 3. Tell Google the site exists (4 minutes)

Once the site loads at https://ramwebsites.site:

1. Go to **search.google.com/search-console**.
2. Click **Add property** → pick **URL prefix** → enter `https://ramwebsites.site`.
3. Verify ownership using the **HTML tag** option — it'll give you a `<meta name="google-site-verification" content="…">` line.
4. **Send me that meta tag** (in this chat). I'll add it to the site, push, and Vercel will redeploy in under a minute.
5. Back in Search Console, click **Verify**.
6. Once verified, go to **Sitemaps** in the left menu, type `sitemap.xml`, click **Submit**.

That's the whole thing. Indexing takes a few days to a couple of weeks — Google decides — but submitting the sitemap is what kicks it off.

## What's already done on my side

- All six pages have a `<link rel="canonical">` pointing at ramwebsites.site
- `sitemap.xml` and `robots.txt` reference ramwebsites.site
- Structured data is in place so Google can show your prices and FAQ as rich results
- The favicon is set
- A custom 404 page exists
- A `/privacy/` page is linked from every footer (real businesses need one)

## After it's live — one tiny thing

The first form submission from ramwebsites.site will probably trigger a fresh FormSubmit "Activate Form" email to your Gmail. Click it once, just like you did before, and submissions flow forever. I'll watch for it in the morning if you want.
