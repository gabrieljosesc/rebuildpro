// Single source of truth for brand name, NAP (name, address, phone) and
// cross-links. Everything marked PLACEHOLDER must be replaced before launch
// and must match the Google Business Profile exactly.

export type Credential = {
  label: string;
  detail: string;
  // Only confirmed credentials are rendered on the site or in schema.
  confirmed: boolean;
};

export const site = {
  name: "Rebuild Pro Contracting", // working name, pending Ontario Business Registry
  shortName: "Rebuild Pro",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rebuildprocontracting.ca"
  ).replace(/\/$/, ""),
  // PLACEHOLDER: Joe supplies the call tracking number.
  phone: { display: "(416) 555-0134", e164: "+14165550134" },
  email: "info@rebuildprocontracting.ca", // PLACEHOLDER
  // PLACEHOLDER: set once the business address is registered, e.g.
  // { street: "", city: "Toronto", region: "ON", postalCode: "", country: "CA" }
  address: null as null | {
    street: string;
    city: string;
    region: string;
    postalCode: string;
    country: string;
  },
  serviceRegion: "Toronto and the GTA",
  description:
    "Rebuild Pro Contracting restores damaged home interiors to pre-loss condition and completes renovations across Toronto and the GTA, from framing and insulation to drywall, electrical, plumbing and finishing.",
  // PLACEHOLDER: workmanship warranty term in years. While null, pages say
  // the term is stated on the written quote.
  warrantyYears: null as number | null,
  credentials: [
    {
      label: "WSIB coverage",
      detail: "Every worker on site is covered by WSIB.",
      confirmed: false,
    },
    {
      label: "Commercial general liability insurance",
      detail: "Certificate of insurance available on request.",
      confirmed: false,
    },
    {
      label: "Licensed electrical contractor",
      detail: "Electrical work is completed under an ESA/ECRA licence.",
      confirmed: false,
    },
  ] satisfies Credential[],
  // PLACEHOLDER: Google Business Profile, HomeStars, Houzz, BBB, Yelp URLs.
  sameAs: [] as string[],
  reviewLinks: {
    google: null as string | null,
    homestars: null as string | null,
  },
  sisters: [
    {
      name: "RapidDry Restoration",
      role: "24/7 emergency water damage restoration",
      url: "https://www.rapiddryrestoration.ca", // PLACEHOLDER domain
    },
    {
      name: "DryFort Waterproofing",
      role: "Basement waterproofing that fixes the root cause",
      url: "https://www.dryfort.ca", // PLACEHOLDER domain
    },
  ],
} as const;

export const confirmedCredentials = site.credentials.filter((c) => c.confirmed);

export const warrantyText = site.warrantyYears
  ? `${site.warrantyYears}-year written workmanship warranty`
  : "written workmanship warranty";

export function absoluteUrl(path = "/") {
  return `${site.url}${path === "/" ? "" : path}`;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
