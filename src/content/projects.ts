export type Project = {
  slug: string;
  title: string;
  area: string;
  category: "Insurance rebuild" | "Renovation";
  summary: string;
  scope: string[];
  duration: string;
  // Paths under /public, e.g. "/portfolio/north-york-basement-before.jpg".
  // While null, the card shows a labelled placeholder panel.
  before: string | null;
  after: string | null;
  // PLACEHOLDER entries describe a typical scope, not a completed job. They
  // are labelled "Sample scope" on the site. Replace with real projects and
  // photos, then set sample to false.
  sample: boolean;
};

export const projects: Project[] = [
  {
    slug: "basement-rebuild-after-sump-failure",
    title: "Basement rebuild after a sump pump failure",
    area: "Richmond Hill",
    category: "Insurance rebuild",
    summary:
      "Finished basement with two inches of standing water. Perimeter flood cut, new insulation and drywall, vinyl plank flooring, trim and paint.",
    scope: ["Insulation", "Drywall and taping", "Flooring", "Painting and trim"],
    duration: "3 to 5 weeks",
    before: null,
    after: null,
    sample: true,
  },
  {
    slug: "kitchen-rebuild-after-supply-line-leak",
    title: "Kitchen rebuild after a supply line leak",
    area: "Markham",
    category: "Insurance rebuild",
    summary:
      "Fridge water line leak under hardwood. Base cabinets, subfloor and hardwood replaced, basement ceiling below repaired.",
    scope: ["Kitchens and bathrooms", "Flooring", "Plumbing", "Drywall and taping"],
    duration: "4 to 6 weeks",
    before: null,
    after: null,
    sample: true,
  },
  {
    slug: "ceiling-and-bathroom-rebuild-after-burst-pipe",
    title: "Two-storey repair after a burst pipe",
    area: "Vaughan",
    category: "Insurance rebuild",
    summary:
      "Second-floor bathroom supply failure. Bathroom floor rebuilt, main-floor ceiling and walls replaced, hardwood refinished.",
    scope: ["Plumbing", "Drywall and taping", "Flooring", "Painting and trim"],
    duration: "4 to 6 weeks",
    before: null,
    after: null,
    sample: true,
  },
  {
    slug: "bungalow-basement-finish",
    title: "Bungalow basement finished with a bathroom",
    area: "Etobicoke",
    category: "Renovation",
    summary:
      "Unfinished block-wall basement turned into a recreation room, bedroom and three-piece bathroom, with permit and inspections.",
    scope: ["Basement finishing", "Framing", "Electrical", "Plumbing"],
    duration: "8 to 10 weeks",
    before: null,
    after: null,
    sample: true,
  },
  {
    slug: "main-bathroom-renovation",
    title: "Main bathroom gut renovation",
    area: "Toronto",
    category: "Renovation",
    summary:
      "Original bathroom in a semi-detached house taken back to the studs. New plumbing, waterproofed shower, heated tile floor.",
    scope: ["Kitchens and bathrooms", "Plumbing", "Electrical"],
    duration: "3 to 4 weeks",
    before: null,
    after: null,
    sample: true,
  },
  {
    slug: "condo-flooring-and-drywall-repair",
    title: "Condo repair after a leak from the unit above",
    area: "North York",
    category: "Insurance rebuild",
    summary:
      "Ceiling and wall drywall replaced, engineered hardwood relaid over acoustic underlay, full repaint.",
    scope: ["Drywall and taping", "Flooring", "Painting and trim"],
    duration: "2 to 3 weeks",
    before: null,
    after: null,
    sample: true,
  },
];
