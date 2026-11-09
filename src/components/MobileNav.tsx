"use client";

import Link from "next/link";
import { useState } from "react";

type Item = { href: string; label: string };
type Section = {
  label: string;
  href: string;
  groups: { label: string; items: Item[] }[];
};

export function MobileNav({
  before,
  sections,
  after,
}: {
  before: Item[];
  sections: Section[];
  after: Item[];
}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const close = () => setOpen(false);

  const itemClass = "block py-3.5 text-base font-semibold";

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="flex size-11 items-center justify-center rounded-md border border-line"
      >
        <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        <svg
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="absolute inset-x-0 top-16 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-lg"
        >
          <ul className="mx-auto max-w-6xl px-4 py-2">
            {before.map((item) => (
              <li key={item.href} className="border-b border-line">
                <Link href={item.href} onClick={close} className={itemClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            {sections.map((section) => {
              const isOpen = expanded === section.label;
              const panelId = `mobile-${section.label.toLowerCase()}`;
              return (
                <li key={section.label} className="border-b border-line">
                  <div className="flex items-center">
                    <Link href={section.href} onClick={close} className={`${itemClass} flex-1`}>
                      {section.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      aria-label={`${isOpen ? "Hide" : "Show"} ${section.label.toLowerCase()}`}
                      onClick={() => setExpanded(isOpen ? null : section.label)}
                      className="flex size-11 items-center justify-center rounded-md hover:bg-paper"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m5 7.5 5 5 5-5" />
                      </svg>
                    </button>
                  </div>
                  {isOpen && (
                    <div id={panelId} className="pb-3">
                      {section.groups.map((g) => (
                        <div key={g.label} className="mt-1">
                          {section.groups.length > 1 && (
                            <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-widest text-accent-dark">
                              {g.label}
                            </p>
                          )}
                          <ul className="grid grid-cols-2 gap-x-2">
                            {g.items.map((item) => (
                              <li key={item.href}>
                                <Link
                                  href={item.href}
                                  onClick={close}
                                  className="block rounded-md px-3 py-2 text-sm font-medium text-ink/85 hover:bg-paper"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
            {after.map((item) => (
              <li key={item.href} className="border-b border-line last:border-0">
                <Link href={item.href} onClick={close} className={itemClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
