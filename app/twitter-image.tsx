import { ImageResponse } from "next/og";

export const alt = "Ashutosh Anand | Full Stack Web Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#000000",
          color: "#ffffff",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#A3A3A3",
          }}
        >
          Portfolio
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 84,
              fontWeight: 500,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              textTransform: "uppercase",
            }}
          >
            <div style={{ display: "flex" }}>Ashutosh</div>
            <div style={{ display: "flex" }}>Anand</div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 28,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#A3A3A3",
            }}
          >
            Full Stack Web Developer
          </div>
        </div>
      </div>
    ),
    size,
  );
}
