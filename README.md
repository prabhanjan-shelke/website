# prabhanjan.com — site source

Plain HTML/CSS/JS. No build step, no framework, no dependencies to install.
That means: free hosting, ~$10-13/year total cost (domain only), and you can
edit any file directly and see the change by just refreshing the page.

## Files
- `index.html` — the whole site (Work / Words toggle)
- `style.css` — all styling
- `script.js` — the mode toggle + expandable timeline entries
- `CNAME` — tells GitHub which custom domain to serve (added in Step 3 below)

## Go live — three steps

### 1. Put this code on GitHub (free)
1. Create a GitHub account if you don't have one: https://github.com/signup
2. Click **New repository** → name it anything (e.g. `prabhanjan-site`) → Public → Create.
3. On the repo page, click **Add file → Upload files**, drag in `index.html`,
   `style.css`, and `script.js` → **Commit changes**.
   (No git/terminal needed — this is drag-and-drop in the browser.)

### 2. Turn on GitHub Pages (free)
1. In your repo, go to **Settings → Pages**.
2. Under "Build and deployment", Source: **Deploy from a branch**. Branch: **main**, folder: **/(root)** → Save.
3. Wait ~1 minute. Your site is now live at `https://YOUR-USERNAME.github.io/prabhanjan-site/`.

### 3. Point your own domain at it (~$10-13/year)
1. Buy `prabhanjan.com` from any registrar — Porkbun or Cloudflare Registrar
   are cheap and have no upsell tricks. (Namecheap/GoDaddy also fine, usually pricier.)
2. Back in your GitHub repo → **Settings → Pages → Custom domain**, type
   `prabhanjan.com`, click **Save**. This creates the `CNAME` file for you.
3. At your registrar's DNS settings, add these records:

   | Type  | Host/Name | Value                          |
   |-------|-----------|---------------------------------|
   | A     | @         | 185.199.108.153                 |
   | A     | @         | 185.199.109.153                 |
   | A     | @         | 185.199.110.153                 |
   | A     | @         | 185.199.111.153                 |
   | CNAME | www       | YOUR-USERNAME.github.io.        |

4. Wait for DNS to propagate (usually 15-60 min, can take longer). Back in
   GitHub Pages settings, check **Enforce HTTPS** once it becomes available.

Done — `prabhanjan.com` now serves this site, free, forever, with HTTPS.

## Updating the site later
Edit files directly on GitHub (pencil icon on any file) or re-upload changed
files via "Add file → Upload files" — every save/commit updates the live site
within a minute or two. No redeploying, no server to manage.

## Adding a real blog post
Right now "Read more →" links are placeholders. Easiest approach: give me the
post text and I'll turn it into a real page (e.g. `words/on-choosing-slowly.html`)
that follows the same design system, and wire up the link — just paste it in
whenever you're ready.
