import Link from "next/link";
import type { ReactNode } from "react";
import type { Faq } from "@/content/services";
import { breadcrumbSchema, type Crumb } from "@/lib/schema";
import { formatDate, site } from "@/lib/site";

export const btn =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold transition-colors";
export const btnPrimary = `${btn} bg-accent text-ink hover:bg-[#ffb93f]`;
export const btnDark = `${btn} bg-ink text-white hover:bg-ink-soft`;
export const btnOutlineLight = `${btn} border border-white/30 text-white hover:bg-white/10`;
export const btnOutline = `${btn} border border-ink/20 text-ink hover:bg-ink/5`;

export const container = "mx-auto w-full max-w-6xl px-4 sm:px-6";

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
      strokeWidth="2"
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
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
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
    <nav aria-label="Breadcrumb" className="text-sm text-white/60">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="hover:text-white">
            Home
          </Link>
        </li>
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {i === crumbs.length - 1 ? (
              <span aria-current="page" className="text-white/85">
                {c.name}
              </span>
            ) : (
              <Link href={c.path} className="hover:text-white">
                {c.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark page header used on every inner page: breadcrumb, H1, answer-first lead. */
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
    <header className="blueprint text-white">
      <div className={`${container} py-10 sm:py-14`}>
        <Breadcrumbs crumbs={crumbs} />
        {eyebrow && (
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-accent">
            {eyebrow}
          </p>
        )}
        <h1
          className={`${eyebrow ? "mt-2" : "mt-6"} max-w-3xl text-3xl font-extrabold leading-tight sm:text-5xl`}
        >
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">
          {lead}
        </p>
        {cta && (
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact#quote" className={btnPrimary}>
              Get a quote
            </Link>
            <PhoneLink className={btnOutlineLight}>
              <PhoneIcon />
              {site.phone.display}
            </PhoneLink>
          </div>
        )}
        {updated && (
          <p className="mt-6 text-sm text-white/55">
            Last updated <time dateTime={updated}>{formatDate(updated)}</time>
          </p>
        )}
      </div>
    </header>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-accent-dark">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-2xl font-extrabold sm:text-4xl">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
    </div>
  );
}

/** Question headings with plain-HTML answers, always visible to crawlers. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <dl className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <div key={f.q} className="py-5">
          <dt>
            <h3 className="text-lg font-bold">{f.q}</h3>
          </dt>
          <dd className="mt-2 leading-relaxed text-muted">{f.a}</dd>
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
        <section key={s.heading} className="mt-10 first:mt-0">
          <h2 className="text-2xl font-extrabold">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p} className="mt-4 leading-relaxed text-ink/80">
              {p}
            </p>
          ))}
          {s.list && (
            <ul className="mt-4 space-y-2">
              {s.list.map((item) => (
                <li key={item} className="flex gap-3 text-ink/80">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-accent-dark" />
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
    <section className="bg-accent">
      <div
        className={`${container} flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between`}
      >
        <div className="max-w-2xl">
          <h2 className="text-2xl font-extrabold sm:text-3xl">{title}</h2>
          <p className="mt-2 text-ink/80">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact#quote" className={btnDark}>
            Get a quote
          </Link>
          <PhoneLink className={`${btn} border border-ink/30 hover:bg-ink/10`}>
            <PhoneIcon />
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
    <aside className="rounded-xl border border-line bg-paper p-6 lg:sticky lg:top-24">
      <h2 className="text-xl font-extrabold">Get a written quote</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Send photos and a few details. Insurance claim or renovation, we reply
        within one business day.
      </p>
      <Link href="/contact#quote" className={`${btnPrimary} mt-5 w-full`}>
        Request a quote
      </Link>
      <PhoneLink className={`${btnOutline} mt-3 w-full`}>
        <PhoneIcon />
        {site.phone.display}
      </PhoneLink>
      <ul className="mt-5 space-y-2 text-sm text-ink/80">
        {[
          "Direct billing to your insurer",
          "Permits and inspections handled",
          "One team from framing to paint",
        ].map((t) => (
          <li key={t} className="flex gap-2">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent-dark" />
            {t}
          </li>
        ))}
      </ul>
    </aside>
  );
}
