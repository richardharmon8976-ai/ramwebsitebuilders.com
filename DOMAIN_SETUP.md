# Getting ramwebsites.com live (10 minutes, two screens)

You bought the domain — great. The site is already pointing at it in code. The only steps left are in your domain registrar's DNS settings and in Vercel. I can't log into either of those for you. Here's the exact click-by-click.

## 1. Add the domain in Vercel (3 minutes)

1. Open **vercel.com**, sign in.
2. Click your **ramwebsitebuilders.com** project (it's the one already deployed).
3. Go to **Settings → Domains** (left sidebar).
4. In the "Add" box, type `ramwebsites.com` and click **Add**.
5. Vercel will say "Invalid Configuration" and show you two DNS records you need to add at your registrar — usually:
   - An **A record** for `@` pointing at an IP (typically `76.76.21.21`)
   - A **CNAME record** for `www` pointing at `cname.vercel-dns.com`
   - **Leave this page open** — you'll come back to it after step 2.
6. Click **Add** again, this time with `www.ramwebsites.com` so both versions work.

## 2. Update DNS at IONOS (3 minutes)

You bought ramwebsites.com at IONOS:

1. Log in at **ionos.com** → open the menu → **Domains & SSL**.
2. Find **ramwebsites.com** in your domain list and click the **gear icon → DNS** (or click the domain, then the **DNS** tab).
3. You'll see a list of records IONOS pre-created (they point the domain at an IONOS parking page).
4. **Edit the A record** whose host is `@`: change its value to `76.76.21.21`. If there are several A records on `@`, delete the extras so only this one remains.
5. **Delete any AAAA records** on `@` (IONOS adds these; they'll fight with Vercel).
6. **For `www`:** if a record on `www` exists, edit it; otherwise click **Add record** → type **CNAME** → host `www` → value `cname.vercel-dns.com`.
7. Save. (If Vercel showed you different values in step 1.5, use Vercel's values.)

DNS usually propagates in 5–30 minutes. Sometimes up to an hour. Vercel will auto-issue an SSL certificate as soon as it detects the records, so https will work without you doing anything.

## 3. Tell Google the site exists (4 minutes)

Once the site loads at https://ramwebsites.com:

1. Go to **search.google.com/search-console**.
2. Click **Add property** → pick **URL prefix** → enter `https://ramwebsites.com`.
3. Verify ownership using the **HTML tag** option — it'll give you a `<meta name="google-site-verification" content="…">` line.
4. **Send me that meta tag** (in this chat). I'll add it to the site, push, and Vercel will redeploy in under a minute.
5. Back in Search Console, click **Verify**.
6. Once verified, go to **Sitemaps** in the left menu, type `sitemap.xml`, click **Submit**.

That's the whole thing. Indexing takes a few days to a couple of weeks — Google decides — but submitting the sitemap is what kicks it off.

## What's already done on my side

- All six pages have a `<link rel="canonical">` pointing at ramwebsites.com
- `sitemap.xml` and `robots.txt` reference ramwebsites.com
- Structured data is in place so Google can show your prices and FAQ as rich results
- The favicon is set
- A custom 404 page exists
- A `/privacy/` page is linked from every footer (real businesses need one)

## After it's live — one tiny thing

The first form submission from ramwebsites.com will probably trigger a fresh FormSubmit "Activate Form" email to your Gmail. Click it once, just like you did before, and submissions flow forever. I'll watch for it in the morning if you want.
