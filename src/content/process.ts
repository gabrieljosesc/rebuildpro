import { site, warrantyText } from "@/lib/site";
import type { Faq } from "./services";

export const processSteps = [
  {
    title: "Site visit and scope",
    body: "We walk the space, take moisture readings and photos, and write down exactly what needs to be removed, repaired and rebuilt. For insurance work this happens once drying is complete or close to it.",
  },
  {
    title: "Itemized estimate",
    body: "You receive a line-by-line written estimate. On a claim, the same estimate goes to your adjuster, and any upgrades you want are priced separately so it is clear who pays for what.",
  },
  {
    title: "Permits and scheduling",
    body: "We prepare drawings where needed, apply for the building permit, file electrical work with the ESA and order long-lead materials such as cabinets, doors and flooring.",
  },
  {
    title: "Rebuild",
    body: "One crew carries the job in sequence: framing, plumbing and electrical rough-ins, inspections, insulation, drywall and taping, flooring, trim and paint. You get progress updates and a single point of contact.",
  },
  {
    title: "Final inspection and warranty",
    body: `We close out municipal and ESA inspections, walk the finished work with you, fix anything on the list and hand over permit records, inspection certificates and your ${warrantyText}.`,
  },
];

export const insuranceSteps = [
  {
    title: "You report the claim",
    body: "Call your insurer or broker as soon as damage is found. They open a claim and assign an adjuster. Emergency drying can start right away; you do not need to wait for approval to stop further damage.",
  },
  {
    title: "The home is dried",
    body: `A restoration company removes water, tears out unsalvageable materials and dries the structure. Our sister company ${site.sisters[0].name} provides this service 24/7.`,
  },
  {
    title: "We scope the rebuild",
    body: "We inspect the dried space and write an itemized estimate to return it to pre-loss condition, with photos and measurements to support every line.",
  },
  {
    title: "The adjuster approves",
    body: "The adjuster reviews the estimate against your policy. If they have questions or a different number, we deal with them directly and revise where the facts support it.",
  },
  {
    title: "You sign a Direction to Pay",
    body: "This one-page form authorizes your insurer to pay us directly for the approved work. You pay only your deductible and the cost of any upgrades you chose.",
  },
  {
    title: "We rebuild and close the file",
    body: "The same team completes every trade through to final paint. If hidden damage turns up, we document it and get a supplement approved before proceeding. At the end we send completion photos to the insurer.",
  },
];

export const insuranceFaqs: Faq[] = [
  {
    q: "What does pre-loss condition mean?",
    a: "It means returning your home to the state it was in immediately before the damage, using materials of like kind and quality. Insurance pays for that. It does not pay to make the home better than it was, although you can add upgrades at your own cost.",
  },
  {
    q: "Who pays the contractor on an insurance claim?",
    a: `With a signed Direction to Pay, your insurer pays ${site.name} directly for the approved scope. You pay your deductible to us, plus any upgrades.`,
  },
  {
    q: "Do I have to use the contractor my insurer recommends?",
    a: "No. In Ontario you have the right to choose your own contractor. Insurers have preferred vendors for convenience, but the choice is yours, and the insurer still owes the reasonable cost of the repair.",
  },
  {
    q: "How much is the deductible on a water damage claim?",
    a: "It depends on your policy. Deductibles of $1,000 to $2,500 are common in Ontario, and sewer backup coverage often carries its own, sometimes higher, deductible. It is shown on your policy declarations page.",
  },
  {
    q: "What if you find more damage after work starts?",
    a: "We stop, photograph it and send a supplement to the adjuster. Hidden damage caused by the same loss is normally covered, and we wait for approval before doing work outside the original scope.",
  },
  {
    q: "Can I upgrade finishes during an insurance rebuild?",
    a: "Yes. We price the like-for-like replacement for the insurer and the upgrade for you, and you pay only the difference.",
  },
  {
    q: "What does home insurance usually not cover?",
    a: "Gradual damage such as slow leaks, seepage through foundation walls and wear and tear are typically excluded. Overland flooding and sewer backup are usually covered only if you purchased those endorsements.",
  },
  {
    q: "How long does an insurance rebuild take?",
    a: "A single room is often finished in 1 to 2 weeks and a full basement in 3 to 6 weeks from approval. Adjuster approval itself typically takes a few days to two weeks.",
  },
];

export const homeFaqs: Faq[] = [
  {
    q: `What does ${site.name} do?`,
    a: "We are an interior general contractor. We rebuild homes after water damage and other insured losses, and we take on planned renovations such as basements, kitchens and bathrooms. Framing, insulation, drywall, electrical, plumbing, flooring and paint are all handled by one team.",
  },
  {
    q: "Do you bill insurance companies directly?",
    a: "Yes. Once your insurer approves the scope and you sign a Direction to Pay, they pay us directly. You are responsible for your deductible and any upgrades.",
  },
  {
    q: "Do you only do insurance work?",
    a: "No. Regular renovation clients are a core part of our business. The quote process is the same; the only difference is who receives the invoice.",
  },
  {
    q: "Which areas do you serve?",
    a: "Toronto, North York, Etobicoke, Scarborough, Vaughan, Thornhill, Richmond Hill, Markham and Mississauga.",
  },
  {
    q: "Do you handle building permits?",
    a: "Yes. We prepare drawings, apply for building permits with your municipality, file electrical work with the ESA and book all inspections.",
  },
];
