import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards";
import { CtaBand, PageHero, container } from "@/components/ui";
import { projects } from "@/content/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio: Before & After Rebuilds and Renovations",
  description:
    "Before and after projects from Rebuild Pro Contracting: basement rebuilds after flooding, kitchen and bathroom restorations, and renovations across the GTA.",
  alternates: { canonical: "/portfolio" },
};

const categories = ["Insurance rebuild", "Renovation"] as const;

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Portfolio", path: "/portfolio" }]}
        title="Before and after: rebuilds and renovations"
        lead={`${site.name} rebuilds water-damaged basements, kitchens and bathrooms and completes planned renovations across ${site.serviceRegion}. Each project below lists the trades involved and how long that kind of job takes.`}
      />
      {categories.map((category) => (
        <section key={category} className={`${container} py-12`}>
          <h2 className="text-2xl sm:text-3xl">{category}s</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.category === category)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </section>
      ))}
      <CtaBand />
    </>
  );
}
