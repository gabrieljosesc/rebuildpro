import { areas } from "@/content/areas";
import { reviews } from "@/content/reviews";
import type { Faq } from "@/content/services";
import { absoluteUrl, site } from "./site";

export const businessId = `${site.url}/#business`;

type Json = Record<string, unknown>;

/** GeneralContractor is the specific LocalBusiness subtype for this brand. */
export function businessSchema(): Json {
  const ratingCount = reviews.length;
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "Organization"],
    "@id": businessId,
    name: site.name,
    url: site.url,
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: site.description,
    telephone: site.phone.e164,
    email: site.email,
    priceRange: "$$",
    ...(site.address && {
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        addressLocality: site.address.city,
        addressRegion: site.address.region,
        postalCode: site.address.postalCode,
        addressCountry: site.address.country,
      },
    }),
    areaServed: areas.map((a) => ({
      "@type": "City",
      name: a.name,
      containedInPlace: { "@type": "AdministrativeArea", name: "Ontario" },
    })),
    ...(site.sameAs.length > 0 && { sameAs: site.sameAs }),
    ...(ratingCount > 0 && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: (
          reviews.reduce((sum, r) => sum + r.rating, 0) / ratingCount
        ).toFixed(1),
        reviewCount: ratingCount,
      },
      review: reviews.map((r) => ({
        "@type": "Review",
        author: { "@type": "Person", name: r.author },
        datePublished: r.date,
        reviewBody: r.text,
        reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
      })),
    }),
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  areaName?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: absoluteUrl(opts.path),
    provider: { "@id": businessId },
    areaServed: opts.areaName
      ? { "@type": "City", name: opts.areaName }
      : areas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function faqSchema(faqs: Faq[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export type Crumb = { name: string; path: string };

export function breadcrumbSchema(crumbs: Crumb[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...crumbs].map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  path: string;
  published: string;
  updated: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.title,
    description: opts.description,
    datePublished: opts.published,
    dateModified: opts.updated,
    mainEntityOfPage: absoluteUrl(opts.path),
    author: { "@id": businessId },
    publisher: { "@id": businessId },
  };
}
