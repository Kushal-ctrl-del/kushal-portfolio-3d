import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B0F1A",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            border: "2px solid #F6D9A7",
            borderRadius: "50%",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
