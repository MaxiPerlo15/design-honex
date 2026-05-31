import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Design Honex — Social media, branding y diseño en Córdoba";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#0A0A0A",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 96,
          boxSizing: "border-box",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              color: "#00FF41",
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 8,
              textTransform: "uppercase",
            }}
          >
            Social media · Branding · Diseño
          </div>

          <div style={{ display: "flex", flexDirection: "column", lineHeight: 0.95 }}>
            <div
              style={{
                color: "white",
                fontSize: 120,
                fontWeight: 900,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Design
            </div>
            <div
              style={{
                color: "#1400FF",
                fontSize: 120,
                fontWeight: 900,
                letterSpacing: 1,
                textTransform: "uppercase",
              }}
            >
              Honex
            </div>
          </div>

          <div style={{ color: "rgba(255,255,255,0.72)", fontSize: 30, maxWidth: 900 }}>
            Social media, branding, diseño gráfico y contenido para negocios en Córdoba y remoto.
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: 96,
            backgroundColor: "#1400FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 44px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              backgroundColor: "#00FF41",
              color: "#0A0A0A",
              fontSize: 28,
              fontWeight: 900,
              letterSpacing: 3,
              textTransform: "uppercase",
              padding: "16px 22px",
            }}
          >
            designhonex.com
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Córdoba, Argentina · Remoto
          </div>
        </div>
      </div>
    ),
    size,
  );
}

