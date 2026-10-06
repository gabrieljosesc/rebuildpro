import type { Metadata } from "next";
import { QuoteForm } from "@/components/QuoteForm";
import { PageHero, PhoneIcon, PhoneLink, container } from "@/components/ui";
import { areas } from "@/content/areas";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Quote Request",
  description:
    "Request a quote from Rebuild Pro Contracting. Send your address, project type and photos for an insurance rebuild or renovation in Toronto and the GTA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ name: "Contact", path: "/contact" }]}
        title="Contact us and request a quote"
        lead={`Call ${site.name} at ${site.phone.display} or send the form below with your address, project type and photos. We reply within one business day to book a site visit anywhere in ${site.serviceRegion}.`}
        cta={false}
      />
      <div className={`${container} grid gap-10 py-14 lg:grid-cols-[1fr_1.3fr]`}>
        <div>
          <h2 className="text-2xl font-extrabold">How can you reach us?</h2>
          <dl className="mt-6 space-y-5">
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Phone</dt>
              <dd className="mt-1">
                <PhoneLink className="inline-flex items-center gap-2 font-display text-2xl font-extrabold">
                  <PhoneIcon className="size-5 text-accent-dark" />
                  {site.phone.display}
                </PhoneLink>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="font-semibold underline">
                  {site.email}
                </a>
              </dd>
            </div>
            {site.address && (
              <div>
                <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Address</dt>
                <dd className="mt-1">
                  <address className="not-italic">
                    {site.name}
                    <br />
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </address>
                </dd>
              </div>
            )}
            <div>
              <dt className="text-sm font-semibold uppercase tracking-widest text-muted">Service area</dt>
              <dd className="mt-1 leading-relaxed text-ink/80">
                {areas.map((a) => a.name).join(", ")}
              </dd>
            </div>
          </dl>

          <div className="mt-8 rounded-xl border border-line bg-paper p-6">
            <h2 className="text-lg font-extrabold">Is water still coming in?</h2>
            <p className="mt-2 leading-relaxed text-muted">
              We handle the rebuild. For an active leak or flood, call our
              sister company{" "}
              <a href={site.sisters[0].url} className="font-semibold text-ink underline">
                {site.sisters[0].name}
              </a>{" "}
              for 24/7 emergency water removal and drying.
            </p>
          </div>
        </div>

        <section id="quote" aria-labelledby="quote-heading">
          <h2 id="quote-heading" className="text-2xl font-extrabold">
            Request a quote
          </h2>
          <p className="mb-5 mt-2 text-muted">
            Six quick fields. Photos are optional but help us quote faster.
          </p>
          <QuoteForm />
        </section>
      </div>
    </>
  );
}
