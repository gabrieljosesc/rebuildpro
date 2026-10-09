# Rebuild Pro Contracting website

Site 2 from the build brief: the interior general contracting brand. Next.js (App Router, TypeScript, Tailwind) with Supabase for the quote form and photo uploads. Every page is statically rendered HTML.

## Run it

```bash
npm install
cp .env.example .env.local   # then fill in the Supabase values
npm run dev
```

## Where things live

| What | File |
| --- | --- |
| Brand name, phone, email, address, sister company links, credentials | `src/lib/site.ts` |
| Service pages (9) | `src/content/services.ts` |
| Area pages (9) | `src/content/areas.ts` |
| Portfolio projects | `src/content/projects.ts` (photos go in `public/portfolio/`) |
| Reviews | `src/content/reviews.ts` |
| Guides | `src/content/guides.ts` |
| Process and insurance steps, FAQs | `src/content/process.ts` |
| Structured data (JSON-LD) | `src/lib/schema.ts` |
| robots.txt, sitemap, llms.txt | `src/app/robots.ts`, `src/app/sitemap.ts`, `src/app/llms.txt/route.ts` |
| Quote form | `src/components/QuoteForm.tsx`, `src/app/actions.ts` |
| Database schema | `supabase/migrations/` |

## Before launch

Search the code for `PLACEHOLDER`. The items waiting on Joe or on business setup:

- Final brand name and domain. The name is in `src/lib/site.ts`, and also appears in page copy and metadata, so do a project-wide find and replace if it changes.
- Email and business address (phone is set to (647) 478-1394). Name, address and phone must match the Google Business Profile exactly.
- Sister company URLs for RapidDry Restoration and DryFort Waterproofing.
- Credentials (WSIB, liability insurance, electrical licence): flip `confirmed` to `true` in `site.ts` once each is in place. Unconfirmed ones are not shown.
- Warranty term: set `warrantyYears` in `site.ts`.
- Reviews: add to `reviews.ts`. Review schema and star ratings appear automatically.
- Portfolio: entries are marked `sample: true` and show "Sample scope" with empty photo panels. Replace with real projects and photos.
- Cost ranges in `services.ts` and the "reply within one business day" promise: have Joe confirm.
- `sameAs` links in `site.ts`: Google Business Profile, HomeStars, Houzz, BBB, Yelp.

## Tracking and search

- GA4 and Google Ads load only when `NEXT_PUBLIC_GA_ID` / `NEXT_PUBLIC_GADS_ID` are set. Quote submissions fire `generate_lead` and taps on any phone link fire `phone_call_click`, plus Ads conversions when the labels are set.
- Add the Search Console and Bing verification codes to the env file, then submit `/sitemap.xml` in both.
- IndexNow: after a deploy that adds or changes pages, run `npm run indexnow`.
- Add a new guide to `src/content/guides.ts` at least twice a month and bump the `updated` date on any page you edit; it drives the "Last updated" line and the sitemap.
