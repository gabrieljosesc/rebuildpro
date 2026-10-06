import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}: restored to pre-loss condition`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#f6f2ea",
          color: "#1b1915",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, fontWeight: 500, letterSpacing: 4, textTransform: "uppercase" as const, color: "#6b6459" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 500, lineHeight: 1, letterSpacing: -3, fontFamily: "Georgia, serif" }}>
            Restored to pre-loss condition.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#6b6459" }}>
            Insurance rebuilds and renovations in {site.serviceRegion}
          </div>
        </div>
        <div style={{ display: "flex", width: "100%", height: 2, background: "#1b1915" }} />
      </div>
    ),
    size,
  );
}
