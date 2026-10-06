import { site } from "@/lib/site";

/** Mark: a plan-view square cut by a section line, brick corner for the rebuilt part. */
export function LogoMark({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect x="2.5" y="2.5" width="35" height="35" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M2.5 37.5 37.5 2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M20 37.5V20h17.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <rect x="21.5" y="21.5" width="16" height="16" fill="#b5442b" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-3 ${light ? "text-canvas" : "text-ink"}`}>
      <LogoMark className="size-8" />
      <span className="flex flex-col leading-none">
        <span className="whitespace-nowrap font-display text-[1.35rem] font-medium tracking-tight">
          {site.shortName}
        </span>
        <span className={`label mt-1 text-[0.58rem] ${light ? "text-canvas/60" : "text-muted"}`}>
          Contracting
        </span>
      </span>
    </span>
  );
}
