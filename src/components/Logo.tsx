import { site } from "@/lib/site";

/** Mark: a roofline over a framed wall, with one stud picked out in amber. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="8" fill="#0f1d2b" />
      <path
        d="M7 19 20 8l13 11"
        fill="none"
        stroke="#f5a524"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 22v10M29 22v10M10 32h20"
        fill="none"
        stroke="#fff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M20 21v11" stroke="#f5a524" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="flex flex-col leading-none">
        <span
          className={`whitespace-nowrap font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}
        >
          {site.shortName}
        </span>
        <span
          className={`mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.24em] ${light ? "text-white/60" : "text-muted"}`}
        >
          Contracting
        </span>
      </span>
    </span>
  );
}
