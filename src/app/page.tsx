import type { Metadata } from "next";
import Link from "next/link";
import { AreaLinks, ProjectCard, ServiceCard } from "@/components/cards";
import { QuoteForm } from "@/components/QuoteForm";
import {
  Arrow,
  FaqList,
  JsonLd,
  PhoneIcon,
  PhoneLink,
  SectionHeading,
  btnOutline,
  btnPrimary,
  container,
} from "@/components/ui";
import { areas } from "@/content/areas";
import { homeFaqs, processSteps } from "@/content/process";
import { projects } from "@/content/projects";
import { services } from "@/content/services";
import { faqSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const spec = [
  { term: "Service area", detail: site.serviceRegion },
  { term: "For", detail: "Insurance claims and planned renovations" },
  { term: "Trades", detail: `${services.length}, under one contract` },
  { term: "Billing", detail: "Direct to your insurer on approved claims" },
  { term: "Permits", detail: "Building permits and ESA inspections handled" },
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* Hero: oversized serif headline beside a spec sheet */}
      <section className="border-b border-ink">
        <div className={`${container} grid gap-12 pb-16 pt-12 sm:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16`}>
          <div>
            <p className="label flex flex-wrap items-center gap-x-3 text-muted">
              <span className="text-ink">Interior general contractor</span>
              <span aria-hidden="true">·</span>
              <span>{site.serviceRegion}</span>
            </p>
            <h1 className="mt-8 text-[2.9rem] leading-[0.98] sm:text-7xl lg:text-[5.5rem]">
              Restored to <em className="whitespace-nowrap text-accent">pre-loss</em> condition.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/80">
              {site.name} rebuilds home interiors after water damage and bills
              your insurer directly. One team handles framing, insulation,
              drywall, electrical, plumbing and finishing, for insurance claims
              and planned renovations alike.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link href="#quote" className={btnPrimary}>
                Get a quote <Arrow />
              </Link>
              <PhoneLink className="inline-flex items-center gap-2 font-mono text-sm font-medium tracking-wide hover:text-accent">
                <PhoneIcon className="size-4 text-accent" />
                {site.phone.display}
              </PhoneLink>
            </div>
          </div>

          <dl className="self-end border-t border-ink">
            {spec.map((row) => (
              <div
                key={row.term}
                className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-3.5"
              >
                <dt className="label pt-1 text-muted">{row.term}</dt>
                <dd className="text-[0.95rem] leading-snug">{row.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Two audiences, split by a vertical rule */}
      <section className="border-b border-ink">
        <div className={`${container} grid lg:grid-cols-2`}>
          <article className="border-b border-line py-12 lg:border-b-0 lg:border-r lg:pr-12">
            <p className="label text-accent">01 · Insurance claim</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Had a flood, leak or burst pipe?
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Once the drying is done, we write the rebuild estimate, work
              through it with your adjuster and put your home back the way it
              was. Your insurer pays us directly. You pay your deductible.
            </p>
            <Link
              href="/insurance-rebuilds"
              className="group mt-6 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:text-accent hover:underline"
            >
              How insurance rebuilds work
              <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
          <article className="py-12 lg:pl-12">
            <p className="label text-accent">02 · Renovation</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
              Planning a basement, kitchen or bathroom?
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              The same crew that rebuilds after a loss takes on planned work:
              finished basements, kitchens, bathrooms and single-trade jobs,
              with a written quote, permits and a warranty.
            </p>
            <Link
              href="/services"
              className="group mt-6 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:text-accent hover:underline"
            >
              See renovation services
              <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </article>
        </div>
      </section>

      {/* Services as a numbered index */}
      <section className={`${container} py-20`}>
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <SectionHeading
            number="03"
            eyebrow="Services"
            title="Every interior trade, one contract."
            lead="No coordinating five subcontractors. Each stage is scheduled, inspected and handed to the next by the same team."
          />
          <div className="border-b border-ink">
            {services.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process as a horizontal strip of numbered columns */}
      <section className="border-y border-ink bg-paper">
        <div className={`${container} py-20`}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              number="04"
              eyebrow="Our process"
              title="What happens after you call?"
            />
            <Link href="/process" className={btnOutline}>
              Permits and warranty
            </Link>
          </div>
          <ol className="mt-12 grid gap-px border border-ink bg-ink sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <li key={s.title} className="flex flex-col bg-paper p-6">
                <span className="font-display text-5xl leading-none text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Portfolio */}
      <section className={`${container} py-20`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            number="05"
            eyebrow="Portfolio"
            title="Before and after."
            lead="The kinds of rebuilds and renovations we take on."
          />
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 font-semibold underline-offset-4 hover:text-accent hover:underline"
          >
            View all projects
            <Arrow className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Areas and FAQ */}
      <section className="border-t border-ink">
        <div className={`${container} grid gap-16 py-20 lg:grid-cols-2`}>
          <div>
            <SectionHeading
              number="06"
              eyebrow="Service areas"
              title="Where do we work?"
              lead={`${areas.length} communities across ${site.serviceRegion}. Each page covers the housing, permits and common repairs in that area.`}
            />
            <div className="mt-8">
              <AreaLinks areas={areas} />
            </div>
          </div>
          <div>
            <SectionHeading number="07" eyebrow="Common questions" title="Quick answers." />
            <div className="mt-8">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section id="quote" className="gridpaper text-canvas">
        <div className={`${container} grid gap-12 py-20 lg:grid-cols-[1fr_1.2fr] lg:items-start`}>
          <div>
            <p className="label text-accent">08 · Get a quote</p>
            <h2 className="mt-4 text-4xl leading-[1.02] sm:text-6xl">
              Tell us about <em>your</em> project.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-canvas/75">
              Insurance claim or renovation, send a few details and photos. We
              call back within one business day to book a site visit.
            </p>
            <p className="label mt-10 text-canvas/50">Prefer to talk?</p>
            <PhoneLink className="group mt-2 inline-flex items-center gap-3 font-display text-3xl hover:text-accent sm:text-4xl">
              {site.phone.display}
              <Arrow className="size-6 transition-transform group-hover:translate-x-1" />
            </PhoneLink>
          </div>
          <div className="text-ink">
            <QuoteForm />
          </div>
        </div>
      </section>
    </>
  );
}
