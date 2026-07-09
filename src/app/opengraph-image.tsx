import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${siteConfig.name} - Chartered Accountants You Can Trust`;
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
          background: "linear-gradient(135deg, #0C1B4A 0%, #12296F 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 88,
              height: 88,
              borderRadius: 20,
              background: "#2E5AEB",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "white",
              fontWeight: 700,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "white" }}>
            {siteConfig.name}
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 32, color: "#B9CFFD" }}>
          Chartered Accountants You Can Trust
        </div>
      </div>
    ),
    { ...size }
  );
}
