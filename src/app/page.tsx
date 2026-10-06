import type { Metadata } from "next";
import Link from "next/link";
import { AreaLinks, ProjectCard, ServiceCard, Steps } from "@/components/cards";
import { QuoteForm } from "@/components/QuoteForm";
import {
  CheckIcon,
  FaqList,
  JsonLd,
  PhoneIcon,
  PhoneLink,
  SectionHeading,
  btnOutline,
  btnOutlineLight,
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

// The order a wall goes back together, shown as the hero graphic.
const layers = [
  "Framing",
  "Plumbing and electrical",
  "Insulation",
  "Drywall and taping",
  "Flooring and trim",
  "Final paint",
];

export default function Home() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="blueprint text-white">
        <div className={`${container} grid gap-10 py-12 sm:py-20 lg:grid-cols-[1.25fr_1fr] lg:items-center`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Interior general contractor · {site.serviceRegion}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
              Restored to <span className="whitespace-nowrap">pre-loss</span> condition.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
              {site.name} rebuilds home interiors after water damage and bills
              your insurer directly. One team handles framing, insulation,
              drywall, electrical, plumbing and finishing across{" "}
              {site.serviceRegion}, for insurance claims and planned
              renovations alike.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#quote" className={btnPrimary}>
                Get a quote
              </Link>
              <PhoneLink className={btnOutlineLight}>
                <PhoneIcon />
                {site.phone.display}
              </PhoneLink>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              {[
                "Direct insurance billing",
                "Permits handled",
                "One team, tear-out to final paint",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckIcon className="size-4 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
              How a room goes back together
            </p>
            <ol className="mt-4 space-y-2">
              {layers.map((layer, i) => (
                <li
                  key={layer}
                  className="flex items-center gap-3 rounded-lg border border-white/10 bg-ink-soft px-4 py-3"
                  style={{ marginLeft: `${i * 6}px` }}
                >
                  <span className="font-display text-sm font-extrabold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold">{layer}</span>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-sm text-white/65">
              Six stages, one contract, one point of contact.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${container} grid gap-5 py-14 md:grid-cols-2`}>
          <article className="rounded-xl border border-line bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
              Insurance claim
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Had a flood, leak or burst pipe?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              Once the drying is done, we write the rebuild estimate, work
              through it with your adjuster and put your home back the way it
              was. Your insurer pays us directly. You pay your deductible.
            </p>
            <Link href="/insurance-rebuilds" className={`${btnOutline} mt-5`}>
              How insurance rebuilds work
            </Link>
          </article>
          <article className="rounded-xl border border-line bg-white p-7">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
              Renovation
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Planning a basement, kitchen or bathroom?
            </h2>
            <p className="mt-3 leading-relaxed text-muted">
              The same crew that rebuilds after a loss takes on planned work:
              finished basements, kitchens, bathrooms and single-trade jobs,
              with a written quote, permits and a warranty.
            </p>
            <Link href="/services" className={`${btnOutline} mt-5`}>
              See renovation services
            </Link>
          </article>
        </div>
      </section>

      <section className={`${container} py-16`}>
        <SectionHeading
          eyebrow="Services"
          title="Every interior trade under one contract"
          lead="No coordinating five subcontractors. Each stage is scheduled, inspected and handed to the next by the same team."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${container} grid gap-10 py-16 lg:grid-cols-[1fr_1.4fr]`}>
          <div>
            <SectionHeading
              eyebrow="Our process"
              title="What happens after you call?"
              lead="Five steps from the first site visit to the final walkthrough, with permits and inspections built in."
            />
            <Link href="/process" className={`${btnOutline} mt-6`}>
              Process, permits and warranty
            </Link>
          </div>
          <Steps steps={processSteps} />
        </div>
      </section>

      <section className={`${container} py-16`}>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Portfolio"
            title="Before and after"
            lead="The kinds of rebuilds and renovations we take on."
          />
          <Link href="/portfolio" className="font-semibold underline underline-offset-4">
            View all projects
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      <section className="bg-paper">
        <div className={`${container} grid gap-10 py-16 lg:grid-cols-2`}>
          <div>
            <SectionHeading
              eyebrow="Service areas"
              title="Where do we work?"
              lead={`We serve ${areas.length} communities across ${site.serviceRegion}. Each page covers the housing, permits and common repairs in that area.`}
            />
            <div className="mt-6">
              <AreaLinks areas={areas} />
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Common questions" title="Quick answers" />
            <div className="mt-6">
              <FaqList faqs={homeFaqs} />
            </div>
          </div>
        </div>
      </section>

      <section id="quote" className="blueprint text-white">
        <div className={`${container} grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr] lg:items-start`}>
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              Get a quote
            </p>
            <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Insurance claim or renovation, send a few details and photos. We
              call back within one business day to book a site visit.
            </p>
            <p className="mt-6 text-white/80">Prefer to talk?</p>
            <PhoneLink className="mt-1 inline-flex items-center gap-2 font-display text-3xl font-extrabold text-accent">
              <PhoneIcon className="size-6" />
              {site.phone.display}
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
