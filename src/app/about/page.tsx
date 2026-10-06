import type { Metadata } from "next";
import Link from "next/link";
import { CheckIcon, CtaBand, PageHero, container } from "@/components/ui";
import { areas } from "@/content/areas";
import { confirmedCredentials, site, warrantyText } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Rebuild Pro Contracting",
  description:
    "Rebuild Pro Contracting is an interior general contractor in Toronto and the GTA, part of a group with RapidDry Restoration and DryFort Waterproofing.",
  alternates: { canonical: "/about" },
};

const principles = [
  {
    title: "Fix the cause before the finish",
    body: "We do not close a wall over a problem. If a leak, wiring fault or damp foundation is still there, it gets dealt with first.",
  },
  {
    title: "Write everything down",
    body: "Itemized estimates, photos at each stage and change orders in writing. You and your adjuster always know what is being done and why.",
  },
  {
    title: "One team, one schedule",
    body: "The trades on your job work together every week. There is one contract, one point of contact and one warranty.",
  },
  {
    title: "Permits, not shortcuts",
    body: "Work that needs a permit gets one, and work that needs an inspection gets inspected before it is covered.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "About", path: "/about" }]}
        title={`About ${site.name}`}
        lead={`${site.name} is an interior general contractor serving ${site.serviceRegion}. We rebuild homes to pre-loss condition after water damage and other insured losses, and we take on planned renovations for homeowners who want the same standard of work.`}
      />
      <div className={`${container} py-14`}>
        <section className="max-w-3xl">
          <h2 className="text-2xl">Who are we?</h2>
          <p className="mt-4 leading-relaxed text-ink/80">
            We are the rebuild company in a group of three sister companies.{" "}
            <a href={site.sisters[0].url} className="font-semibold underline">
              {site.sisters[0].name}
            </a>{" "}
            responds to the emergency, removes the water and dries the
            structure.{" "}
            <a href={site.sisters[1].url} className="font-semibold underline">
              {site.sisters[1].name}
            </a>{" "}
            fixes the foundation, drainage or sump problem that let the water
            in. {site.name} puts the home back together: framing, insulation,
            drywall, electrical, plumbing, flooring, trim and paint.
          </p>
          <p className="mt-4 leading-relaxed text-ink/80">
            Each company is run separately and you are free to hire any one of
            them on its own. Used together, they mean the people drying your
            basement, fixing the leak and rebuilding the room are working from
            the same notes.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl">How do we work?</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <li key={p.title} className="border border-line bg-white p-6">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12 grid gap-8 bg-paper p-7 md:grid-cols-2">
          <div>
            <h2 className="text-2xl">What can you expect from us?</h2>
            <ul className="mt-5 space-y-3">
              {[
                "A written, itemized quote before any work starts",
                "Direct billing to your insurer on approved claims",
                "Building permits and ESA inspections handled",
                "Electrical work by licensed electricians",
                `A ${warrantyText}`,
                ...confirmedCredentials.map((c) => c.label),
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink/80">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl">Where do we work?</h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              {areas.map((a, i) => (
                <span key={a.slug}>
                  <Link href={`/areas/${a.slug}`} className="font-semibold underline">
                    {a.name}
                  </Link>
                  {i < areas.length - 2 ? ", " : i === areas.length - 2 ? " and " : "."}
                </span>
              ))}
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Read what clients say on our{" "}
              <Link href="/reviews" className="font-semibold underline">
                reviews page
              </Link>{" "}
              or see the kinds of projects we take on in the{" "}
              <Link href="/portfolio" className="font-semibold underline">
                portfolio
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
      <CtaBand />
    </>
  );
}
