import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { CtaBand, PageHero, container } from "@/components/ui";
import { serviceGroups, services } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contracting Services in Toronto & the GTA: Interior, Exterior & Property",
  description:
    "Rebuild Pro Contracting offers 21 trades in Toronto and the GTA: framing, drywall, electrical, plumbing, flooring, kitchens, basements, roofing, waterproofing, siding, windows, decks, concrete, additions and snow removal.",
  alternates: { canonical: "/services" },
};

const groupLeads: Record<string, string> = {
  Interior:
    "The trades that put a home back together after a loss, and the same trades for planned renovations. Each is available on its own or as part of a full rebuild.",
  "Exterior & property":
    "Roof, walls, foundation, yard and the seasonal work that protects all of them. Permits, footings and inspections are handled as part of the job.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        title="Contracting services in Toronto and the GTA"
        lead={`${site.name} provides ${services.length} trades under one contract, from framing, drywall, electrical and plumbing inside the house to roofing, waterproofing, siding, decks, additions and snow removal outside. One team, one schedule, one point of contact.`}
      />
      {serviceGroups.map((g, i) => (
        <section key={g.group} className={i % 2 === 1 ? "bg-paper" : undefined}>
          <div className={`${container} py-14`}>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              {g.group === "Interior" ? "Interior trades" : "Exterior and property services"}
            </h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">{groupLeads[g.group]}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.services.map((s) => (
                <ServiceCard key={s.slug} service={s} />
              ))}
            </div>
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
