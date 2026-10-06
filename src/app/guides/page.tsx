import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, container } from "@/components/ui";
import { guides } from "@/content/guides";
import { formatDate } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides: Insurance Claims, Rebuilds & Renovations",
  description:
    "Plain-language guides for Ontario homeowners on insurance claims, rebuilding after water damage and planning renovations.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Guides", path: "/guides" }]}
        title="Guides for Ontario homeowners"
        lead="Straight answers to the questions homeowners ask us about insurance claims, rebuilding after water damage, permits and renovation costs in Toronto and the GTA."
        cta={false}
      />
      <section className={`${container} py-14`}>
        <ul className="grid gap-5 md:grid-cols-2">
          {guides.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 hover:shadow-md"
              >
                <p className="text-sm text-muted">
                  Updated <time dateTime={g.updated}>{formatDate(g.updated)}</time>
                </p>
                <h2 className="mt-2 text-xl font-bold group-hover:text-accent-dark">{g.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {g.metaDescription}
                </p>
                <span className="mt-4 text-sm font-semibold">
                  Read the guide <span aria-hidden="true">→</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
