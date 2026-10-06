import type { Metadata } from "next";
import { CtaBand, PageHero, btnOutline, container } from "@/components/ui";
import { reviews } from "@/content/reviews";
import { formatDate, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Reviews",
  description:
    "Reviews of Rebuild Pro Contracting from homeowners across Toronto and the GTA, collected on Google and HomeStars.",
  alternates: { canonical: "/reviews" },
};

const reviewLinks = [
  { label: "Google", url: site.reviewLinks.google },
  { label: "HomeStars", url: site.reviewLinks.homestars },
].filter((l) => l.url !== null);

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Reviews", path: "/reviews" }]}
        title={`${site.name} reviews`}
        lead={`Reviews of ${site.name} are collected on Google and HomeStars from homeowners across ${site.serviceRegion}, after insurance rebuilds and renovations are complete.`}
      />
      <section className={`${container} py-14`}>
        {reviews.length > 0 ? (
          <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <li key={`${r.author}-${r.date}`} className="rounded-xl border border-line bg-white p-6">
                <p
                  className="text-lg tracking-widest text-accent-dark"
                  aria-label={`${r.rating} out of 5 stars`}
                >
                  {"★".repeat(r.rating)}
                  <span className="text-line">{"★".repeat(5 - r.rating)}</span>
                </p>
                <blockquote className="mt-3 leading-relaxed text-ink/80">{r.text}</blockquote>
                <p className="mt-4 text-sm font-semibold">
                  {r.author}, {r.area}
                </p>
                <p className="text-sm text-muted">
                  {r.source} · <time dateTime={r.date}>{formatDate(r.date)}</time>
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <div className="max-w-2xl rounded-xl border border-line bg-paper p-8">
            <h2 className="text-2xl font-extrabold">Our first reviews are on the way</h2>
            <p className="mt-3 leading-relaxed text-muted">
              {site.name} is a new company. We ask every client for an honest
              review once their project is finished and will publish them here
              as they come in. In the meantime, we are glad to walk you through
              how we work and what your project would involve.
            </p>
          </div>
        )}

        {reviewLinks.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-extrabold">Worked with us?</h2>
            <p className="mt-2 text-muted">Leave a review where other homeowners will see it.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {reviewLinks.map((l) => (
                <a key={l.label} href={l.url ?? undefined} className={btnOutline} rel="noopener">
                  Review us on {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
