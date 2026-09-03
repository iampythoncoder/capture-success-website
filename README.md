# Capture Success — capturesuccess.org

Site for Capture Success, a student startup network in the Triangle. Six pages
(home, accelerator, companies, apply, board, finnovate), the Fall 2026 cohort,
partner wall, and company profiles.

**Live:** https://capture-success.vercel.app (to become capturesuccess.org)

## Stack

- Next.js 16 (App Router, static output) · React 19 · Tailwind CSS v4
- No other runtime dependencies — animations are CSS/IntersectionObserver
- Fonts via `next/font`: Space Grotesk + DM Sans

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

Note: `.npmrc` pins the registry to `registry.yarnpkg.com` because some school
networks blackhole `registry.npmjs.org`. Harmless everywhere else.

## Where everything lives

- **`src/lib/site.ts` is the single source of truth.** Dates, the Google Form
  link, venue, partners, companies, board members, FAQ, milestones — change it
  there and every page updates. No content is hardcoded in pages.
- `src/app/*` — one folder per page.
- `src/components/*` — nav, footer, partner wall, company visuals
  (thermal view, court board, resin scanner), countdown, gallery.
- `public/portfolio/*` — company marks. `public/partners/*` — partner logos.
- `src/app/opengraph-image.tsx` — the social share card (edge-generated).

## Deploying + putting it on capturesuccess.org

The domain `capturesuccess.org` is attached to an existing Vercel account
(DNS at Namecheap already points to Vercel — apex `76.76.21.21`, www
`cname.vercel-dns.com` — no DNS changes needed).

From the Vercel account that owns the domain:

1. **Add New → Project → Import** this GitHub repo
   (`agotaparthy/capture-success`). Framework auto-detects as Next.js;
   no env vars needed. Deploy.
2. Project → **Settings → Domains** → move `capturesuccess.org` and
   `www.capturesuccess.org` from the old site's project to this one
   (or remove from the old project, then add here).
3. Done — the domain cuts over instantly. Every push to `main` redeploys.

There is also a parallel deployment at capture-success.vercel.app under a
second Vercel account; once the domain is attached to the imported project,
that one can be deleted.

## Contact

capturesuccess.inc@gmail.com · [@capturesuccessinc](https://www.instagram.com/capturesuccessinc/)
