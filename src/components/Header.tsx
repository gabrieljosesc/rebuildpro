import Link from "next/link";
import { areas } from "@/content/areas";
import { serviceGroups, services } from "@/content/services";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { NavDropdown } from "./NavDropdown";
import { ServiceIcon } from "./ServiceIcon";
import { PhoneIcon, PhoneLink, btnPrimary, container } from "./ui";

const primary = [{ href: "/insurance-rebuilds", label: "Insurance rebuilds" }];
const secondary = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Our process" },
  { href: "/about", label: "About" },
];

const linkClass = "text-sm font-medium text-ink/80 hover:text-ink";

function ServicesPanel() {
  return (
    <div className={`${container} grid gap-8 py-7 lg:grid-cols-[1fr_1fr_16rem]`}>
      {serviceGroups.map((g) => (
        <div key={g.group}>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
            {g.group}
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1">
            {g.services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-2.5 rounded-lg px-2 py-2 hover:bg-paper"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-md bg-ink text-accent">
                    <ServiceIcon slug={s.slug} className="size-4" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold group-hover:text-accent-dark">
                      {s.name}
                    </span>
                    <span className="block text-xs text-muted">{s.hint}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="rounded-xl bg-ink p-5 text-white">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          Had a flood or leak?
        </p>
        <p className="mt-2 font-display text-lg font-bold leading-snug">
          We rebuild to pre-loss condition and bill your insurer directly.
        </p>
        <Link
          href="/insurance-rebuilds"
          className="mt-4 inline-block text-sm font-semibold text-accent hover:underline"
        >
          How insurance rebuilds work →
        </Link>
        <Link
          href="/services"
          className="mt-6 block border-t border-white/15 pt-4 text-sm font-semibold hover:text-accent"
        >
          All {services.length} services →
        </Link>
      </div>
    </div>
  );
}

function AreasPanel() {
  return (
    <div className={`${container} py-7`}>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent-dark">
        Service areas
      </p>
      <ul className="mt-3 grid grid-cols-3 gap-1 lg:grid-cols-5">
        {areas.map((a) => (
          <li key={a.slug}>
            <Link
              href={`/areas/${a.slug}`}
              className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-paper hover:text-accent-dark"
            >
              {a.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            href="/areas"
            className="block rounded-lg px-3 py-2 text-sm font-semibold text-accent-dark hover:bg-paper"
          >
            All areas →
          </Link>
        </li>
      </ul>
    </div>
  );
}

export function Header() {
  const mobileSections = [
    {
      label: "Services",
      href: "/services",
      groups: serviceGroups.map((g) => ({
        label: g.group,
        items: g.services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
      })),
    },
    {
      label: "Areas",
      href: "/areas",
      groups: [
        {
          label: "Service areas",
          items: areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.name })),
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className={`${container} relative flex h-16 items-center justify-between gap-4`}>
        <Link href="/">
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {primary.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <NavDropdown label="Services" href="/services">
            <ServicesPanel />
          </NavDropdown>
          <NavDropdown label="Areas" href="/areas">
            <AreasPanel />
          </NavDropdown>
          {secondary.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <PhoneLink className="hidden items-center gap-2 font-display text-lg font-bold md:flex">
            <PhoneIcon className="size-4 text-accent-dark" />
            {site.phone.display}
          </PhoneLink>
          <Link
            href="/contact#quote"
            className={`${btnPrimary} hidden whitespace-nowrap px-4 py-2 text-sm md:inline-flex`}
          >
            Get a quote
          </Link>
          <MobileNav
            before={primary}
            sections={mobileSections}
            after={[...secondary, { href: "/contact", label: "Contact" }]}
          />
        </div>
      </div>
    </header>
  );
}
