import type { Metadata } from "next";
import { Steps } from "@/components/cards";
import { CtaBand, FaqList, JsonLd, PageHero, QuoteCard, container } from "@/components/ui";
import { processSteps } from "@/content/process";
import type { Faq } from "@/content/services";
import { faqSchema } from "@/lib/schema";
import { site, warrantyText } from "@/lib/site";

const path = "/process";
const updated = "2026-10-05";

export const metadata: Metadata = {
  title: "Our Process, Permits & Warranty",
  description:
    "How Rebuild Pro Contracting runs a rebuild or renovation: site visit, itemized estimate, building permits and ESA inspections handled, and a written warranty.",
  alternates: { canonical: path },
};

const warrantyTerm = site.warrantyYears
  ? `Our workmanship is warranted for ${site.warrantyYears} years from the completion date.`
  : "The warranty term is stated on your written quote and contract.";

const faqs: Faq[] = [
  {
    q: "Who applies for the building permit?",
    a: "We do. We prepare the drawings, submit the application to your municipality as your authorized agent, pay the fees on your behalf and book each inspection. Permit fees are itemized on your quote.",
  },
  {
    q: "How long does a building permit take in the GTA?",
    a: "For interior residential work, most GTA municipalities issue a permit within 2 to 6 weeks of a complete application. Like-for-like repairs after a loss often do not need one, which is one reason insurance rebuilds start sooner.",
  },
  {
    q: "What inspections will my project have?",
    a: "Typically framing, plumbing rough-in, insulation and vapour barrier, and a final inspection by the municipal building inspector, plus rough-in and final electrical inspections by the ESA.",
  },
  {
    q: "What does the warranty cover?",
    a: `Our ${warrantyText} covers defects in the work we performed, such as drywall joints that crack, trim that separates or a fixture that was installed incorrectly. Manufacturers' warranties on materials like flooring and fixtures are passed on to you.`,
  },
  {
    q: "What is not covered by the warranty?",
    a: "Damage from a new water event, normal wear, seasonal movement of wood, and work or materials supplied by others. If the original cause of a leak was not repaired, a repeat leak is not a workmanship defect.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <PageHero
        crumbs={[{ name: "Our process", path }]}
        title="Our process, permits and warranty"
        lead={`Every ${site.name} project follows the same five steps: site visit, itemized estimate, permits, rebuild, and a final inspection with a ${warrantyText}. We handle building permits and ESA inspections for you.`}
        updated={updated}
      />
      <div className={`${container} grid gap-12 py-14 lg:grid-cols-[1fr_20rem]`}>
        <div>
          <section>
            <h2 className="text-2xl font-extrabold">What are the steps in a rebuild?</h2>
            <div className="mt-6">
              <Steps steps={processSteps} />
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">Do you handle permits?</h2>
            <p className="mt-4 leading-relaxed text-ink/80">
              Yes. In Ontario, a building permit is required when work is
              structural, adds or moves plumbing, changes heating and
              ventilation, finishes a basement, or creates a new suite.
              Electrical work is permitted separately through the Electrical
              Safety Authority. We work out which permits your project needs,
              prepare the drawings, file the applications and meet the
              inspectors on site.
            </p>
            <p className="mt-4 leading-relaxed text-ink/80">
              Skipping a permit can cause problems long after the work is
              done: municipalities can order finished walls opened for
              inspection, insurers can question a later claim, and buyers&apos;
              lawyers ask for closed permits when you sell. You receive copies
              of every permit and inspection record at handover.
            </p>
          </section>

          <section className="mt-12 rounded-xl border border-line bg-paper p-6">
            <h2 className="text-2xl font-extrabold">What warranty do you provide?</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              Every project comes with a {warrantyText}. {warrantyTerm} If
              something we built fails because of how we built it, we come
              back and fix it at no charge.
            </p>
          </section>

          <section className="mt-12">
            <h2 className="text-2xl font-extrabold">
              Process, permits and warranty: frequently asked questions
            </h2>
            <div className="mt-5">
              <FaqList faqs={faqs} />
            </div>
          </section>
        </div>
        <div>
          <QuoteCard />
        </div>
      </div>
      <CtaBand />
    </>
  );
}
