const paths: Record<string, string> = {
  framing: "M4 20V5h16v15M4 5l8 15M12 5v15M20 5l-8 15",
  insulation: "M3 7c3-3 6 3 9 0s6 3 9 0M3 12c3-3 6 3 9 0s6 3 9 0M3 17c3-3 6 3 9 0s6 3 9 0",
  "drywall-and-taping": "M4 4h16v16H4zM4 12h16M12 4v8M8 12v8M16 12v8",
  electrical: "M13 2 5 13h6l-1 9 8-11h-6l1-9Z",
  plumbing: "M4 8h7a3 3 0 0 1 3 3v9M4 4v8M14 16h-4M18 16h-4M11 20h6",
  flooring: "M3 6h18v12H3zM3 12h18M9 6v6M15 12v6M6 12v6M18 6v6",
  "painting-and-trim": "M5 4h12v5H5zM17 6h2v5h-8v4M10 15h2v6h-2z",
  "basement-finishing": "M3 10 12 3l9 7M5 9v11h14V9M5 15h5v5M10 15v-3h4v3h5",
  "kitchens-and-bathrooms": "M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM7 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2",
};

export function ServiceIcon({ slug, className = "size-6" }: { slug: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[slug] ?? paths.framing} />
    </svg>
  );
}
