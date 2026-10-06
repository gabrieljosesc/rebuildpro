import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceIcon } from "@/components/ServiceIcon";
import {
  CtaBand,
  FaqList,
  JsonLd,
  PageHero,
  Prose,
  QuoteCard,
  container,
} from "@/components/ui";
import { areaBySlug, areas } from "@/content/areas";
import { serviceBySlug } from "@/content/services";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const area = areaBySlug((await params).slug);
  if (!area) return {};
  return {
    title: { absolute: area.metaTitle },
    description: area.metaDescription,
    alternates: { canonical: `/areas/${area.slug}` },
  };
}

export default async function AreaPage({ params }: PageProps<"/areas/[slug]">) {
  const area = areaBySlug((await params).slug);
  if (!area) notFound();

  const path = `/areas/${area.slug}`;
  const others = areas.filter((a) => a.slug !== area.slug);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({
            name: `Interior general contracting in ${area.name}`,
            description: area.metaDescription,
            path,
            areaName: area.name,
          }),
          faqSchema(area.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Service areas", path: "/areas" },
          { name: area.name, path },
        ]}
        eyebrow="Service area"
        title={`General contractor in ${area.name}`}
        lead={area.answer}
        updated={area.updated}
      />

      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1fr_20rem]`}>
        <div>
          <Prose sections={area.sections} />

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold">
              What work do we do most often in {area.name}?
            </h2>
            <ul className="mt-5 space-y-3">
              {area.commonWork.map((w) => {
                const service = serviceBySlug(w.service);
                if (!service) return null;
                return (
                  <li key={w.service}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex gap-4 rounded-xl border border-line p-4 hover:border-ink"
                    >
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-ink text-accent">
                        <ServiceIcon slug={service.slug} className="size-5" />
                      </span>
                      <span>
                        <span className="block font-bold">{service.name}</span>
                        <span className="block text-sm leading-relaxed text-muted">
                          {w.note}
                        </span>
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>

          <section className="mt-10 rounded-xl border border-line bg-paper p-6">
            <h2 className="text-lg font-extrabold">
              Who issues building permits in {area.name}?
            </h2>
            <p className="mt-2 leading-relaxed text-ink/80">{area.permitOffice}</p>
          </section>

          <section className="mt-10">
            <h2 className="text-2xl font-extrabold">
              Which {area.name} neighbourhoods do we serve?
            </h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              All of {area.name}, including {area.neighbourhoods.slice(0, -1).join(", ")} and{" "}
              {area.neighbourhoods.at(-1)}.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">
              {area.name}: frequently asked questions
            </h2>
            <div className="mt-5">
              <FaqList faqs={area.faqs} />
            </div>
          </section>
        </div>
        <div>
          <QuoteCard />
        </div>
      </div>

      <section className="bg-paper">
        <div className={`${container} py-12`}>
          <h2 className="text-2xl font-extrabold">Nearby service areas</h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {others.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/areas/${a.slug}`}
                  className="inline-block rounded-full border border-line bg-white px-4 py-2 font-semibold hover:border-ink"
                >
                  {a.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
