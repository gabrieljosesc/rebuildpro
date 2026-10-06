import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { PhoneIcon, PhoneLink, btnPrimary, container } from "./ui";

export const navItems = [
  { href: "/insurance-rebuilds", label: "Insurance rebuilds" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/process", label: "Process" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-canvas/95 backdrop-blur">
      <div className={`${container} flex h-[4.25rem] items-center justify-between gap-4`}>
        <Link href="/" aria-label={`${site.name} home`}>
          <Logo />
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.9rem] font-medium text-ink/75 underline-offset-[6px] hover:text-ink hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 sm:gap-5">
          <PhoneLink className="hidden items-center gap-2 font-mono text-sm font-medium tracking-wide hover:text-accent md:flex">
            <PhoneIcon className="size-4 text-accent" />
            {site.phone.display}
          </PhoneLink>
          <Link href="/contact#quote" className={`${btnPrimary} hidden whitespace-nowrap px-4 py-2.5 text-sm md:inline-flex`}>
            Get a quote
          </Link>
          <MobileNav items={[...navItems, { href: "/contact", label: "Contact" }]} />
        </div>
      </div>
    </header>
  );
}
