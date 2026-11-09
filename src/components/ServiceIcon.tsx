const paths: Record<string, string> = {
  framing: "M4 20V5h16v15M4 5l8 15M12 5v15M20 5l-8 15",
  insulation: "M3 7c3-3 6 3 9 0s6 3 9 0M3 12c3-3 6 3 9 0s6 3 9 0M3 17c3-3 6 3 9 0s6 3 9 0",
  "drywall-and-taping": "M4 4h16v16H4zM4 12h16M12 4v8M8 12v8M16 12v8",
  electrical: "M13 2 5 13h6l-1 9 8-11h-6l1-9Z",
  plumbing: "M4 8h7a3 3 0 0 1 3 3v9M4 4v8M14 16h-4M18 16h-4M11 20h6",
  flooring: "M3 6h18v12H3zM3 12h18M9 6v6M15 12v6M6 12v6M18 6v6",
  "painting-and-trim": "M5 4h12v5H5zM17 6h2v5h-8v4M10 15h2v6h-2z",
  tiling: "M4 4h16v16H4zM4 10h16M4 16h16M10 4v6M14 10v6M8 16v4M16 16v4",
  "basement-finishing": "M3 10 12 3l9 7M5 9v11h14V9M5 15h5v5M10 15v-3h4v3h5",
  "kitchens-and-bathrooms": "M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3ZM7 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2",
  hvac: "M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M12 10V4M12 20v-6M10 12H4M20 12h-6M7 7l3 3M14 14l3 3M17 7l-3 3M10 14l-3 3",
  roofing: "M2 12 12 3l10 9M5 10v10h14V10M9 20v-6h6v6M12 3v4",
  waterproofing: "M4 20V8h16v12M4 8l8-5 8 5M12 10v6M9 13l3 3 3-3M4 20h16",
  "siding-and-exterior": "M3 7h18M3 11h18M3 15h18M3 19h18M3 7l9-5 9 5",
  "windows-and-doors": "M4 4h7v16H4zM7.5 12.5v.01M13 4h7v16h-7zM13 10h7M16.5 4v16",
  "decks-and-fences": "M4 10v10M9 10v10M15 10v10M20 10v10M2 13h20M2 18h20M4 10l2.5-4 2.5 4M15 10l2.5-4 2.5 4",
  "concrete-and-masonry": "M3 8h18v4H3zM3 16h18v4H3zM3 12h18v4H3zM8 8v4M14 8v4M11 12v4M17 12v4M8 16v4M14 16v4",
  "interlock-and-landscaping": "M3 21h18M5 21v-4h4v4M9 17V13h4v4M13 17v4h4v-4M17 17v-4h4v4M3 17h2M12 3c-2 2-2 5 0 6 2-1 2-4 0-6ZM12 9v4",
  "home-additions": "M3 20V9l6-5 6 5v11M9 20v-6h0M15 11h6v9M3 20h18M18 14v.01",
  demolition: "M4 20h16M6 20V9h8v11M14 13h4v7M9 13h2M9 16h2M3 7l5-4 2 2M19 5l-3 3",
  "snow-removal": "M12 2v20M4.9 6.1l14.2 11.8M19.1 6.1 4.9 17.9M12 2l-2 2M12 2l2 2M12 22l-2-2M12 22l2-2M4.9 6.1l.3 2.7M4.9 6.1l2.7.3M19.1 17.9l-.3-2.7M19.1 17.9l-2.7-.3",
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
