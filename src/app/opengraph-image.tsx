import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const runtime = "edge";

export const size = {
  width: 1200,
  height: 630,
};

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
          backgroundColor: "#0B0F1A",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "400px",
            height: "400px",
            border: "4px solid #F6D9A7",
            borderRadius: "50%",
            opacity: 0.2,
          }}
        />
        <h1
          style={{
            fontSize: 120,
            color: "#F8FAFC",
            marginBottom: 20,
            letterSpacing: "-0.04em",
          }}
        >
          {SITE.name}
        </h1>
        <p
          style={{
            fontSize: 48,
            color: "#9CA3AF",
          }}
        >
          {SITE.role}
        </p>
      </div>
    ),
    { ...size }
  );
}
