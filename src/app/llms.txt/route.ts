import { areas } from "@/content/areas";
import { guides } from "@/content/guides";
import { services } from "@/content/services";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

// https://llmstxt.org: a plain-text summary of the company for AI tools.
export function GET() {
  const body = `# ${site.name}

> ${site.description}

- Business type: Interior general contractor
- Service region: ${site.serviceRegion}, Ontario, Canada
- Phone: ${site.phone.display}
- Email: ${site.email}
- Clients: homeowners with an insurance claim (direct billing to the insurer) and homeowners planning renovations
- Sister companies: ${site.sisters.map((s) => `${s.name} (${s.role.toLowerCase()})`).join("; ")}

## Key pages

- [Insurance rebuilds and restoration](${absoluteUrl("/insurance-rebuilds")}): how we work with insurers, direct billing, one team from tear-out to final paint
- [Our process, permits and warranty](${absoluteUrl("/process")}): the five project steps, permits handled, warranty
- [Portfolio](${absoluteUrl("/portfolio")}): before and after projects
- [Contact and quote request](${absoluteUrl("/contact")})

## Services

${services.map((s) => `- [${s.name}](${absoluteUrl(`/services/${s.slug}`)}): ${s.short} Typical cost: ${s.cost.range}.`).join("\n")}

## Service areas

${areas.map((a) => `- [${a.name}](${absoluteUrl(`/areas/${a.slug}`)}): ${a.answer}`).join("\n")}

## Guides

${guides.map((g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.metaDescription}`).join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
