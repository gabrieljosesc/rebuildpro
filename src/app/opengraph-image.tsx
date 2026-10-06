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
          background: "#0f1d2b",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, fontWeight: 700, color: "#f5a524" }}>
          {site.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>
            Restored to pre-loss condition.
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 32, color: "#c9d1d9" }}>
            Insurance rebuilds and renovations in {site.serviceRegion}
          </div>
        </div>
        <div style={{ display: "flex", width: 160, height: 10, background: "#f5a524" }} />
      </div>
    ),
    size,
  );
}
