"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

/**
 * Desktop navigation item with a panel that opens on hover, focus or click.
 * The panel is positioned against the header container (which is `relative`),
 * so it can span the full header width.
 */
export function NavDropdown({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = useId();

  const show = () => {
    if (timer.current) clearTimeout(timer.current);
    setOpen(true);
  };
  const hide = () => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (wrap.current && !wrap.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div
      ref={wrap}
      onMouseEnter={show}
      onMouseLeave={hide}
      onBlur={(e) => {
        if (!wrap.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
      className="flex items-center"
    >
      <Link
        href={href}
        onFocus={show}
        className="text-sm font-medium text-ink/80 hover:text-ink"
      >
        {label}
      </Link>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        aria-label={`${label} menu`}
        onClick={() => setOpen((v) => !v)}
        onFocus={show}
        className="ml-0.5 flex size-6 items-center justify-center rounded text-ink/60 hover:text-ink"
      >
        <svg
          viewBox="0 0 20 20"
          className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`}
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
      <div
        id={id}
        hidden={!open}
        className="absolute inset-x-0 top-full z-50 border-b border-line bg-white shadow-xl"
      >
        {children}
      </div>
    </div>
  );
}
