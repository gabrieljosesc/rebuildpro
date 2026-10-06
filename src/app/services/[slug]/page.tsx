import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AreaLinks } from "@/components/cards";
import {
  CheckIcon,
  CtaBand,
  FaqList,
  JsonLd,
  PageHero,
  Prose,
  QuoteCard,
  container,
} from "@/components/ui";
import { areas } from "@/content/areas";
import { serviceBySlug, services } from "@/content/services";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = serviceBySlug((await params).slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = serviceBySlug((await params).slug);
  if (!service) notFound();

  const path = `/services/${service.slug}`;
  const related = service.related.map(serviceBySlug).filter((s) => s !== undefined);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: service.name, description: service.metaDescription, path }),
          faqSchema(service.faqs),
        ]}
      />
      <PageHero
        crumbs={[
          { name: "Services", path: "/services" },
          { name: service.name, path },
        ]}
        title={service.h1}
        lead={service.answer}
        updated={service.updated}
      />

      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1fr_20rem]`}>
        <div>
          <section>
            <h2 className="text-2xl font-extrabold">
              What does our {service.name.toLowerCase()} service include?
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-ink/80">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-accent-dark" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-10">
            <Prose sections={service.sections} />
          </div>

          <section className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-line bg-paper p-6">
              <h2 className="text-lg font-extrabold">
                How much does {service.name.toLowerCase()} cost in the GTA?
              </h2>
              <p className="mt-3 font-display text-xl font-extrabold text-accent-dark">
                {service.cost.range}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{service.cost.note}</p>
            </div>
            <div className="rounded-xl border border-line bg-paper p-6">
              <h2 className="text-lg font-extrabold">How long does it take?</h2>
              <p className="mt-3 leading-relaxed text-ink/80">{service.timeline}</p>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">
              {service.name}: frequently asked questions
            </h2>
            <div className="mt-5">
              <FaqList faqs={service.faqs} />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">Related services</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/services/${r.slug}`}
                    className="inline-block rounded-full border border-line px-4 py-2 font-semibold hover:border-ink"
                  >
                    {r.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/insurance-rebuilds"
                  className="inline-block rounded-full border border-line px-4 py-2 font-semibold hover:border-ink"
                >
                  Insurance rebuilds
                </Link>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <QuoteCard />
        </div>
      </div>

      <section className="bg-paper">
        <div className={`${container} py-12`}>
          <h2 className="text-2xl font-extrabold">
            Where do we offer {service.name.toLowerCase()}?
          </h2>
          <div className="mt-5">
            <AreaLinks areas={areas} />
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
