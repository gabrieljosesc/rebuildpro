"use client";

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/track";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const ADS_ID = process.env.NEXT_PUBLIC_GADS_ID;

/** GA4 + Google Ads tags. Renders nothing until the env IDs are set. */
export function Analytics() {
  // Every tel: link on the site reports a call click, so ads can be tied to calls.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.('a[href^="tel:"]');
      if (link) track("call");
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const primaryId = GA_ID ?? ADS_ID;
  if (!primaryId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
${GA_ID ? `gtag('config','${GA_ID}');` : ""}
${ADS_ID ? `gtag('config','${ADS_ID}');` : ""}`}
      </Script>
    </>
  );
}
