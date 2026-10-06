import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards";
import { CtaBand, PageHero, container } from "@/components/ui";
import { services } from "@/content/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Interior Contracting Services in Toronto & the GTA",
  description:
    "Framing, insulation, drywall, electrical, plumbing, flooring, painting, basement finishing, kitchens and bathrooms from one interior general contractor in the GTA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Services", path: "/services" }]}
        title="Interior contracting services in Toronto and the GTA"
        lead={`${site.name} provides ${services.length} interior trades under one contract: framing, insulation, drywall, electrical, plumbing, flooring, painting, basement finishing, and kitchens and bathrooms. Each is available on its own or as part of a full rebuild.`}
      />
      <section className={`${container} py-14`}>
        <div className="border-b border-ink">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} index={i} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
