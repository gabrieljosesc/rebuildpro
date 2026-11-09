export type Faq = { q: string; a: string };

export type ServiceGroup = "Interior" | "Exterior & property";

export type Photo = { src: string; alt: string };

/** A service as written in the content files, before shared metadata is attached. */
export type ServiceDraft = {
  slug: string;
  name: string;
  /** Card blurb */
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer-first opening, 1-2 sentences */
  answer: string;
  includes: string[];
  sections: { heading: string; body: string[] }[];
  cost: { range: string; note: string };
  timeline: string;
  faqs: Faq[];
  related: string[];
  updated: string;
};

export type Service = ServiceDraft & {
  group: ServiceGroup;
  /** Short label shown under the name in the navigation dropdown. */
  hint: string;
  /** Shown on the home page grid. */
  featured: boolean;
  photos: { before: Photo; after: Photo };
};
