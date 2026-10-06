import Link from "next/link";
import { areas } from "@/content/areas";
import { services } from "@/content/services";
import { confirmedCredentials, site } from "@/lib/site";
import { Logo } from "./Logo";
import { Arrow, PhoneLink, container } from "./ui";

const company = [
  { href: "/insurance-rebuilds", label: "Insurance rebuilds" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process, permits and warranty" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/guides", label: "Guides" },
  { href: "/contact", label: "Contact" },
];

function Column({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="label text-canvas/50">{title}</h2>
      <ul className="mt-4 space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-canvas/80 hover:text-canvas hover:underline">
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
    <footer className="bg-ink pb-24 text-canvas md:pb-0">
      <div className={`${container} grid gap-10 border-b border-canvas/15 py-14 lg:grid-cols-2 lg:items-end`}>
        <h2 className="max-w-xl text-4xl leading-[1.02] sm:text-6xl">
          One team, from tear-out to <span className="italic text-accent">final paint.</span>
        </h2>
        <div className="flex flex-col gap-4 lg:items-end">
          <PhoneLink className="group inline-flex items-center gap-3 font-display text-3xl sm:text-4xl">
            {site.phone.display}
            <Arrow className="size-6 transition-transform group-hover:translate-x-1" />
          </PhoneLink>
          <a href={`mailto:${site.email}`} className="font-mono text-sm tracking-wide text-canvas/70 hover:text-canvas">
            {site.email}
          </a>
        </div>
      </div>

      <div className={`${container} grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4`}>
        <div>
          <Logo light />
          <p className="mt-4 text-sm leading-relaxed text-canvas/65">
            Interior general contractor for insurance rebuilds and renovations in {site.serviceRegion}.
          </p>
          <address className="mt-4 text-sm not-italic text-canvas/80">
            <p>{site.name}</p>
            {site.address && (
              <p>
                {site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}
              </p>
            )}
          </address>
          {confirmedCredentials.length > 0 && (
            <ul className="label mt-4 space-y-1 text-canvas/50">
              {confirmedCredentials.map((c) => (
                <li key={c.label}>{c.label}</li>
              ))}
            </ul>
          )}
        </div>
        <Column title="Services" links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
        <Column title="Service areas" links={areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))} />
        <Column title="Company" links={company} />
      </div>

      <div className="border-t border-canvas/15">
        <div className={`${container} py-8`}>
          <h2 className="label text-canvas/50">Sister companies</h2>
          <ul className="mt-4 grid gap-6 sm:grid-cols-3">
            {site.sisters.map((s) => (
              <li key={s.name} className="border-l border-canvas/25 pl-4">
                <a href={s.url} className="group block">
                  <span className="font-display text-xl group-hover:text-accent">{s.name}</span>
                  <span className="block text-sm text-canvas/60">{s.role}</span>
                </a>
              </li>
            ))}
            <li className="border-l border-accent pl-4">
              <span className="font-display text-xl text-accent">{site.name}</span>
              <span className="block text-sm text-canvas/60">Interior rebuilds and renovations</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-canvas/15">
        <p className={`${container} label py-5 text-canvas/45`}>
          © {new Date().getFullYear()} {site.name} · {site.serviceRegion} · Cost ranges are typical
          figures for planning; every job is priced by written quote.
        </p>
      </div>
    </footer>
  );
}
