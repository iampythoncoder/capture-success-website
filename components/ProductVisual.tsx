import type { StartupVisual } from "@/data/site";

type ProductVisualProps = {
  type: StartupVisual;
};

function ThermalVisual() {
  return (
    <div
      className="product-visual thermal-visual"
      role="img"
      aria-label="Illustration of a PyroSight thermal display showing a person and exit path"
    >
      <div className="visual-toolbar">
        <span>Thermal view</span>
      </div>
      <svg viewBox="0 0 640 360" aria-hidden="true">
        <g className="thermal-contours">
          <path d="M0 290c76-35 128-16 191-45 74-34 87-104 165-120 84-17 134 40 284-30" />
          <path d="M0 326c84-34 151-8 220-45 70-38 92-96 171-104 89-9 126 45 249 4" />
          <path d="M40 360c82-44 158-20 225-57 65-36 104-83 183-80 72 2 107 37 192 24" />
        </g>
        <g className="detected-person">
          <circle cx="392" cy="142" r="19" />
          <path d="M373 172c8-11 30-12 40 0l14 60h-69l15-60Z" />
          <rect x="344" y="105" width="96" height="146" rx="4" />
          <path d="M344 126h18M344 105v18M440 126h-18M440 105v18M344 230h18M344 251v-18M440 230h-18M440 251v-18" />
        </g>
        <path className="exit-path" d="M92 286c67-7 123-15 168-51 30-24 45-46 69-75" />
        <path className="exit-arrow" d="m312 158 22-3-4 22" />
        <g className="thermal-label">
          <rect x="344" y="74" width="96" height="24" rx="3" />
          <text x="353" y="91">PERSON</text>
        </g>
        <g className="exit-label">
          <rect x="62" y="274" width="74" height="22" rx="3" />
          <text x="70" y="289">EXIT</text>
        </g>
      </svg>
      <div className="visual-status-grid">
        <span>
          <i>Thermal</i>
          imaging
        </span>
        <span>
          <i>On-device</i>
          detection
        </span>
        <span>
          <i>In-helmet</i>
          navigation
        </span>
      </div>
    </div>
  );
}

function CourtVisual() {
  return (
    <div
      className="product-visual court-visual"
      role="img"
      aria-label="Illustration of a VisioCourt display showing court occupancy"
    >
      <div className="visual-toolbar">
        <span>Court status</span>
      </div>
      <div className="court-dashboard">
        <div className="court-grid" aria-hidden="true">
          {["Open", "Occupied", "Occupied", "Open"].map((status, index) => (
            <div
              className={`court court-${status === "Open" ? "open" : "busy"}`}
              key={`${status}-${index}`}
            >
              <span>{index + 1}</span>
              <i />
              <b>{status}</b>
            </div>
          ))}
        </div>
      </div>
      <div className="privacy-note">
        <span aria-hidden="true">●</span>
        No facial recognition.
      </div>
    </div>
  );
}

export function ProductVisual({ type }: ProductVisualProps) {
  return type === "thermal" ? <ThermalVisual /> : <CourtVisual />;
}
