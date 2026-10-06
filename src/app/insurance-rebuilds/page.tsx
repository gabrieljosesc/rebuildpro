import type { Metadata } from "next";
import Link from "next/link";
import { Steps } from "@/components/cards";
import {
  CheckIcon,
  CtaBand,
  FaqList,
  JsonLd,
  PageHero,
  QuoteCard,
  container,
} from "@/components/ui";
import { insuranceFaqs, insuranceSteps } from "@/content/process";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { site, warrantyText } from "@/lib/site";

const path = "/insurance-rebuilds";
const updated = "2026-10-05";
const description =
  "Insurance rebuilds in Toronto and the GTA. We work with your adjuster, bill your insurer directly and restore your home to pre-loss condition with one team.";

export const metadata: Metadata = {
  title: "Insurance Rebuilds & Restoration in Toronto & the GTA",
  description,
  alternates: { canonical: path },
};

const [restoration, waterproofing] = site.sisters;

export default function InsuranceRebuildsPage() {
  return (
    <>
      <JsonLd
        data={[
          serviceSchema({ name: "Insurance rebuilds and restoration", description, path }),
          faqSchema(insuranceFaqs),
        ]}
      />
      <PageHero
        crumbs={[{ name: "Insurance rebuilds", path }]}
        eyebrow="Insurance rebuilds and restoration"
        title="Your home, restored to pre-loss condition"
        lead={`${site.name} rebuilds homes across ${site.serviceRegion} after water damage and other insured losses. We write the estimate, deal with your adjuster, bill your insurer directly and complete every trade from tear-out to final paint with one team.`}
        updated={updated}
      />

      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1fr_20rem]`}>
        <div>
          <section>
            <h2 className="text-2xl">
              How does an insurance rebuild work?
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              There are six stages between discovering the damage and getting
              your home back. We are involved from the third onward, and our
              sister company handles the second.
            </p>
            <div className="mt-6">
              <Steps steps={insuranceSteps} />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">How do we work with your insurer?</h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Adjusters approve claims faster when the estimate is itemized and
              backed by evidence. Every estimate we submit lists each material
              and task with quantities and unit prices, and comes with photos,
              measurements and moisture readings. When the adjuster has
              questions, they call us, not you.
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Line-by-line estimate in a format adjusters can review quickly",
                "Photo documentation before, during and after the work",
                "Supplements for hidden damage approved before we proceed",
                "Upgrades priced separately so the claim stays clean",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-ink/80">
                  <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12 border border-ink bg-paper p-6">
            <h2 className="text-2xl">What is direct billing?</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Direct billing means your insurance company pays us, so you do
              not have to cover the cost of the rebuild and wait to be
              reimbursed. You sign a one-page Direction to Pay form that
              authorizes the insurer to send payment for the approved work to{" "}
              {site.name}. Your only costs are the deductible on your policy
              and any upgrades you decide to add.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">
              Why use one team from tear-out to final paint?
            </h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              A rebuild passes through six or more trades. When each is a
              separate company, every handoff is a chance for delay and for
              one trade to blame another. Our crew carries the job from{" "}
              <Link href="/services/framing" className="font-semibold underline">
                framing
              </Link>{" "}
              and{" "}
              <Link href="/services/insulation" className="font-semibold underline">
                insulation
              </Link>{" "}
              through{" "}
              <Link href="/services/drywall-and-taping" className="font-semibold underline">
                drywall
              </Link>
              ,{" "}
              <Link href="/services/flooring" className="font-semibold underline">
                flooring
              </Link>{" "}
              and{" "}
              <Link href="/services/painting-and-trim" className="font-semibold underline">
                paint
              </Link>
              , under one schedule, one contract and one {warrantyText}.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              The same applies before we arrive.{" "}
              <a href={restoration.url} className="font-semibold underline">
                {restoration.name}
              </a>{" "}
              handles the emergency response, water removal and drying, and{" "}
              <a href={waterproofing.url} className="font-semibold underline">
                {waterproofing.name}
              </a>{" "}
              fixes foundation leaks so the damage does not come back. The
              three companies share notes, photos and moisture readings, so
              you explain what happened once.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl">
              Insurance rebuilds: frequently asked questions
            </h2>
            <div className="mt-5">
              <FaqList faqs={insuranceFaqs} />
            </div>
            <p className="mt-5 text-sm text-muted">
              Coverage always depends on your own policy. This page is general
              information, not insurance advice. For more detail, read our
              guide on{" "}
              <Link
                href="/guides/insurance-claim-and-rebuild-process"
                className="font-semibold underline"
              >
                how the insurance claim and rebuild process works
              </Link>
              .
            </p>
          </section>
        </div>
        <div>
          <QuoteCard />
        </div>
      </div>
      <CtaBand
        title="Have a claim open or about to open one?"
        body="Send us your address and a few photos. We will visit, write the scope and take it up with your adjuster."
      />
    </>
  );
}
