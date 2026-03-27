import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TecnoDespegue — Agencia de Desarrollo Web & Consultoría Informática";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #060608 0%, #0c0c10 50%, #111116 100%)",
          position: "relative",
        }}
      >
        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,111,255,0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            right: "-100px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,229,255,0.2) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80px",
            height: "80px",
            borderRadius: "20px",
            background: "linear-gradient(135deg, #7c6fff, #00e5ff)",
            marginBottom: "32px",
            fontSize: "36px",
            fontWeight: 800,
            color: "white",
          }}
        >
          TD
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: 800,
            color: "#f0f0f5",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          TecnoDespegue
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "rgba(240,240,245,0.6)",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Desarrollo Web & Consultoría Informática
        </div>

        {/* Tech tags */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: "40px",
          }}
        >
          {["Next.js", "React", "TypeScript", "Node.js"].map((tech) => (
            <div
              key={tech}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                background: "rgba(124,111,255,0.15)",
                border: "1px solid rgba(124,111,255,0.3)",
                color: "#a09aff",
                fontSize: "16px",
                fontWeight: 600,
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
