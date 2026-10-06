type Gtag = (command: string, event: string, params?: Record<string, unknown>) => void;

const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;
const ADS_LABELS = {
  lead: process.env.NEXT_PUBLIC_GADS_LEAD_LABEL,
  call: process.env.NEXT_PUBLIC_GADS_CALL_LABEL,
};

/** Reports a quote request ("lead") or a click-to-call ("call") to GA4 and Google Ads. */
export function track(kind: "lead" | "call") {
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  if (!gtag) return;

  gtag("event", kind === "lead" ? "generate_lead" : "phone_call_click", {
    page_path: window.location.pathname,
  });

  const label = ADS_LABELS[kind];
  if (ADS_ID && label) {
    gtag("event", "conversion", { send_to: `${ADS_ID}/${label}` });
  }
}
