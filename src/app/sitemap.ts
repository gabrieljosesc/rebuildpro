import type { MetadataRoute } from "next";
import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

const staticPages = [
  { path: "/", priority: 1 },
  { path: "/insurance-rebuilds", priority: 0.9 },
  { path: "/services", priority: 0.8 },
  { path: "/portfolio", priority: 0.7 },
  { path: "/process", priority: 0.7 },
  { path: "/areas", priority: 0.6 },
  { path: "/about", priority: 0.5 },
  { path: "/reviews", priority: 0.5 },
  { path: "/guides", priority: 0.6 },
  { path: "/contact", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = [...services, ...areas, ...guides]
    .map((item) => item.updated)
    .sort()
    .at(-1);

  return [
    ...staticPages.map((p) => ({
      url: absoluteUrl(p.path),
      lastModified: latest,
      priority: p.priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: s.updated,
      priority: 0.8,
    })),
    ...areas.map((a) => ({
      url: absoluteUrl(`/areas/${a.slug}`),
      lastModified: a.updated,
      priority: 0.7,
    })),
    ...guides.map((g) => ({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: g.updated,
      priority: 0.6,
    })),
  ];
}
