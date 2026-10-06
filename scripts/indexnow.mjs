// Tells IndexNow (Bing, and through it ChatGPT search) about every URL in the
// live sitemap. Run after each deploy that adds or changes pages:
//   npm run indexnow
// The key must match the file public/<key>.txt.

const KEY = "ea27b33e9804e65304935253437d8eb9";
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rebuildprocontracting.ca"
).replace(/\/$/, "");

const sitemap = await fetch(`${siteUrl}/sitemap.xml`).then((r) => {
  if (!r.ok) throw new Error(`Could not load sitemap: ${r.status}`);
  return r.text();
});
const urlList = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(siteUrl).host,
    key: KEY,
    keyLocation: `${siteUrl}/${KEY}.txt`,
    urlList,
  }),
});

console.log(`IndexNow: submitted ${urlList.length} URLs, status ${res.status}`);
if (!res.ok) process.exit(1);
