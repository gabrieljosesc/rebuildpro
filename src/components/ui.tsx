import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/content/services";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { formatDate, site } from "@/lib/site";

export const btn =
  "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-[0.95rem] font-semibold transition-colors";
export const btnPrimary = `${btn} bg-ink text-canvas hover:bg-accent`;
export const btnDark = `${btn} bg-canvas text-ink hover:bg-paper`;
export const btnOutlineLight = `${btn} border border-canvas/40 text-canvas hover:border-canvas hover:bg-canvas/10`;
export const btnOutline = `${btn} border border-ink text-ink hover:bg-ink hover:text-canvas`;

export const container = "mx-auto w-full max-w-7xl px-5 sm:px-8";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function PhoneIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export function CheckIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Arrow({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a href={`tel:${site.phone.e164}`} className={className}>
      {children ?? site.phone.display}
    </a>
  );
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="label text-muted">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="hover:text-ink">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Light page header used on every inner page: breadcrumb, serif H1, answer-first lead. */
export function PageHero({
  crumbs,
  eyebrow,
  title,
  lead,
  updated,
  cta = true,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  lead: string;
  updated?: string;
  cta?: boolean;
}) {
  return (
    <header className="border-b border-ink">
      <div className={`${container} pb-12 pt-8 sm:pb-16 sm:pt-12`}>
        <Breadcrumbs crumbs={crumbs} />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_22rem] lg:items-end">
          <div>
            {eyebrow && <p className="label text-accent">{eyebrow}</p>}
            <h1 className={`${eyebrow ? "mt-3" : ""} max-w-4xl text-4xl leading-[1.02] sm:text-6xl`}>
              {title}
            </h1>
          </div>
          <div className="flex flex-col gap-5 lg:border-l lg:border-line lg:pl-8">
            <p className="text-base leading-relaxed text-ink/80 lg:text-[0.95rem]">{lead}</p>
            {cta && (
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/contact#quote" className={btnPrimary}>
                  Get a quote
                </Link>
                <PhoneLink className="inline-flex items-center gap-2 font-mono text-sm font-medium tracking-wide text-ink hover:text-accent">
                  <PhoneIcon className="size-4" />
                  {site.phone.display}
                </PhoneLink>
              </div>
            )}
            {updated && (
              <p className="label text-muted">
                Updated <time dateTime={updated}>{formatDate(updated)}</time>
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

/** Opens a section with a numbered mono label. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  number,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  number?: string;
}) {
  return (
    <div>
      {(eyebrow || number) && (
        <p className="label flex items-center gap-3 text-muted">
          {number && <span className="text-ink">{number}</span>}
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 max-w-2xl text-3xl leading-[1.05] sm:text-5xl">{title}</h2>
      {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lead}</p>}
    </div>
  );
}

/** Question headings with plain-HTML answers, always visible to crawlers. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {faqs.map((f, i) => (
        <div key={f.q} className="grid gap-3 py-6 sm:grid-cols-[3rem_1fr]">
          <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <dt>
              <h3 className="text-xl">{f.q}</h3>
            </dt>
            <dd className="mt-2 leading-relaxed text-ink/75">{f.a}</dd>
          </div>
        </div>
      ))}
    </dl>
  );
}

export function Prose({
  sections,
}: {
  sections: { heading: string; body: string[]; list?: string[] }[];
}) {
  return (
    <>
      {sections.map((s) => (
        <section key={s.heading} className="mt-12 first:mt-0">
          <h2 className="text-2xl leading-snug sm:text-3xl">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {s.list.map((item) => (
                <li key={item} className="flex gap-3 py-2.5 text-ink/80">
                  <span className="mt-2 size-1.5 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  );
}

export function CtaBand({
  title = "Ready to get your home back to normal?",
  body = "Tell us what happened or what you want built. We reply with next steps within one business day.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="border-t border-ink bg-paper">
      <div className={`${container} grid gap-8 py-16 lg:grid-cols-[1fr_auto] lg:items-end`}>
        <div>
          <p className="label text-accent">Next step</p>
          <h2 className="mt-3 max-w-2xl text-3xl leading-[1.05] sm:text-5xl">{title}</h2>
          <p className="mt-4 max-w-xl text-muted">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact#quote" className={btnPrimary}>
            Get a quote <Arrow />
          </Link>
          <PhoneLink className={btnOutline}>
            <PhoneIcon className="size-4" />
            {site.phone.display}
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}

/** Sticky sidebar card for service, area and guide pages. */
export function QuoteCard() {
  return (
    <aside className="border border-ink bg-white p-6 lg:sticky lg:top-24">
      <p className="label text-accent">Written quote</p>
      <h2 className="mt-2 text-2xl">Send photos, get a number.</h2>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        Insurance claim or renovation, we reply within one business day to
        book a site visit.
      </p>
      <Link href="/contact#quote" className={`${btnPrimary} mt-5 w-full`}>
        Request a quote
      </Link>
      <PhoneLink className={`${btnOutline} mt-2 w-full`}>
        <PhoneIcon className="size-4" />
        {site.phone.display}
      </PhoneLink>
      <ul className="mt-5 divide-y divide-line border-t border-line text-sm">
        {[
          "Direct billing to your insurer",
          "Permits and inspections handled",
          "One team from framing to paint",
        ].map((t) => (
          <li key={t} className="flex gap-3 py-2.5 text-ink/80">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
            {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}
