import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, PageHero, container } from "@/components/ui";
import { areas } from "@/content/areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Service Areas: Toronto & the GTA",
  description:
    "Rebuild Pro Contracting serves Toronto, North York, Etobicoke, Scarborough, Vaughan, Thornhill, Richmond Hill, Markham and Mississauga.",
  alternates: { canonical: "/areas" },
};

export default function AreasPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Service areas", path: "/areas" }]}
        title="Service areas across Toronto and the GTA"
        lead={`${site.name} works in ${areas.length} communities: ${areas.map((a) => a.name).join(", ")}. Each area page explains the local housing, permit office and the repairs we see most often there.`}
      />
      <section className={`${container} py-14`}>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/areas/${a.slug}`}
                className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 hover:shadow-md"
              >
                <h2 className="text-xl font-bold group-hover:text-accent-dark">{a.name}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {a.neighbourhoods.slice(0, 5).join(" · ")}
                </p>
                <span className="mt-4 text-sm font-semibold">
                  Contracting in {a.name} <span aria-hidden="true">→</span>
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
