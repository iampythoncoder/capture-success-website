import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Capture Success — where students build real companies";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
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
          background: "#0a1b33",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#69b5ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#0a1b33",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            ↗
          </div>
          <div style={{ fontSize: 34, fontWeight: 800 }}>Capture Success</div>
        </div>

        <div
          style={{
            fontSize: 84,
            fontWeight: 800,
            lineHeight: 1.02,
            letterSpacing: -3,
            maxWidth: 900,
          }}
        >
          Where students build real companies.
        </div>

        <div style={{ display: "flex", gap: 48, fontSize: 26 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 800, fontSize: 40, color: "#69b5ff" }}>10</div>
            <div style={{ opacity: 0.7 }}>student companies</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 800, fontSize: 40, color: "#69b5ff" }}>$20K+</div>
            <div style={{ opacity: 0.7 }}>raised</div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 800, fontSize: 40, color: "#69b5ff" }}>6 weeks</div>
            <div style={{ opacity: 0.7 }}>free accelerator · RTP</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
