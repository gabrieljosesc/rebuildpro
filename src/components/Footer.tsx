import Link from "next/link";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import { confirmedCredentials, site } from "@/lib/site";
import { Logo } from "./Logo";
import { PhoneLink, container } from "./ui";

const company = [
  { href: "/insurance-rebuilds", label: "Insurance rebuilds" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process, permits and warranty" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

function Column({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white/60">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-white/85 hover:text-accent">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink pb-24 text-white md:pb-0">
      <div className={`${container} grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Interior general contractor for insurance rebuilds and renovations
            in {site.serviceRegion}.
          </p>
          <address className="mt-4 space-y-1 text-sm not-italic text-white/85">
            <p className="font-semibold">{site.name}</p>
            {site.address && (
              <p>
                {site.address.street}, {site.address.city}, {site.address.region}{" "}
                {site.address.postalCode}
              </p>
            )}
            <p>
              <PhoneLink className="hover:text-accent" />
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-accent">
                {site.email}
              </a>
            </p>
          </address>
          {confirmedCredentials.length > 0 && (
            <ul className="mt-4 space-y-1 text-xs text-white/60">
              {confirmedCredentials.map((c) => (
                <li key={c.label}>{c.label}</li>
              ))}
            </ul>
          )}
        </div>
        <Column
          title="Services"
          links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))}
        />
        <Column
          title="Service areas"
          links={areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))}
        />
        <Column title="Company" links={company} />
      </div>

      <div className="border-t border-white/10">
        <div className={`${container} py-8`}>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white/60">
            Sister companies
          </h2>
          <ul className="mt-4 grid gap-4 sm:grid-cols-3">
            {site.sisters.map((s) => (
              <li key={s.name}>
                <a href={s.url} className="group block">
                  <span className="font-display font-bold group-hover:text-accent">
                    {s.name}
                  </span>
                  <span className="block text-sm text-white/65">{s.role}</span>
                </a>
              </li>
            ))}
            <li>
              <span className="font-display font-bold text-accent">{site.name}</span>
              <span className="block text-sm text-white/65">
                Interior rebuilds and renovations
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className={`${container} py-5 text-xs text-white/50`}>
          © {new Date().getFullYear()} {site.name}. Serving {site.serviceRegion}.
          Cost ranges on this site are typical figures for planning; every job
          is priced by written quote.
        </p>
      </div>
    </footer>
  );
}
