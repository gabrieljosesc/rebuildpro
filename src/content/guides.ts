import type { Faq } from "./services";

export type Guide = {
  slug: string;
  title: string;
  metaDescription: string;
  /** Answer-first opening */
  answer: string;
  sections: { heading: string; body: string[]; list?: string[] }[];
  faqs: Faq[];
  published: string;
  updated: string;
};

// Add a new guide here at least twice a month (see README). Newest first.
export const guides: Guide[] = [
  {
    slug: "insurance-claim-and-rebuild-process",
    title: "How the insurance claim and rebuild process works in Ontario",
    metaDescription:
      "A step-by-step guide to a home water damage claim in Ontario: reporting, drying, the rebuild estimate, adjuster approval, Direction to Pay and timelines.",
    answer:
      "After water damage in Ontario, the process runs in six stages: report the claim, dry the home, scope the rebuild, get the adjuster's approval, sign a Direction to Pay, and rebuild. Your insurer pays the contractor for restoring the home to pre-loss condition, and you pay your deductible plus any upgrades.",
    sections: [
      {
        heading: "What should I do first after discovering water damage?",
        body: [
          "Stop the water if you can, by closing the main shut-off valve, and switch off power to affected areas if water is near outlets. Then call your insurer or broker to open a claim. Your policy requires you to take reasonable steps to prevent further damage, so emergency drying should begin immediately rather than after the adjuster visits.",
          "Take photos and video of every affected room before anything is moved, and keep a list of damaged belongings.",
        ],
      },
      {
        heading: "What happens during drying and tear-out?",
        body: [
          "A restoration company extracts standing water, removes materials that cannot be saved, such as wet insulation, swollen laminate and the lower section of drywall, and sets up air movers and dehumidifiers. Drying a typical basement takes 3 to 5 days. The home is ready to rebuild when moisture readings in the framing and subfloor return to normal.",
        ],
      },
      {
        heading: "How is the rebuild estimate prepared?",
        body: [
          "The contractor inspects the dried space and writes an itemized estimate listing every material and task needed to return the home to pre-loss condition. Insurers expect line-item detail, with quantities and unit prices, supported by photos and measurements. The adjuster compares it with the policy and with their own assessment.",
        ],
        list: [
          "Rooms and surfaces affected, with measurements",
          "Materials to be replaced, matched to like kind and quality",
          "Trades required and permits or inspections",
          "Items priced separately because they are upgrades",
        ],
      },
      {
        heading: "Who pays for what?",
        body: [
          "The insurer pays the approved cost to restore what was damaged. You pay your deductible, which in Ontario is commonly $1,000 to $2,500, and the cost difference for anything you choose to upgrade. A Direction to Pay form lets the insurer send payment for the approved work straight to the contractor, so you are not fronting the cost.",
          "If your mortgage lender is named on the policy, larger claim payments may be issued jointly, and the lender may need to endorse them.",
        ],
      },
      {
        heading: "How long does the whole process take?",
        body: [
          "For a typical finished basement: drying takes about a week, estimate and approval one to two weeks, and the rebuild three to six weeks. Most claims of this size are completed within two to three months of the loss. Kitchens take longer because of cabinet and countertop lead times.",
        ],
      },
      {
        heading: "Do I have to use my insurer's preferred contractor?",
        body: [
          "No. Ontario homeowners can choose their own contractor. The insurer's obligation is to pay the reasonable cost of restoring the home, whoever does the work. Choose a contractor who will deal with the adjuster directly, document everything and give you a written warranty.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will my premium go up if I make a water damage claim?",
        a: "It can. Many insurers remove a claims-free discount or apply a surcharge after a water claim. Ask your broker how a claim would affect your renewal before deciding on a small loss.",
      },
      {
        q: "Is there a time limit to file a claim in Ontario?",
        a: "Report the loss as soon as you reasonably can. Policies require prompt notice and a signed proof of loss, and legal time limits apply to disputes, so do not wait to open the claim.",
      },
      {
        q: "What if the adjuster's number is lower than the contractor's estimate?",
        a: "The contractor and adjuster review the differences line by line. Most gaps come from missed items or quantities and are resolved with photos and measurements.",
      },
    ],
    published: "2026-10-05",
    updated: "2026-10-05",
  },
];

export const guideBySlug = (slug: string) => guides.find((g) => g.slug === slug);
