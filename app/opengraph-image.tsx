import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Oğuzhan Özenç, Creative Developer & Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [font, logo] = await Promise.all([
    readFile(join(process.cwd(), "app/fonts/PP Neue Montreal/PPNeueMontreal-Medium.otf")),
    readFile(join(process.cwd(), "public/branding/logo.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "#eeece7",
          color: "#111110",
          fontFamily: "Neue Montreal",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 30 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} width={45} height={52} alt="" />
          Oğuzhan Özenç
        </div>
        <div style={{ fontSize: 76, lineHeight: 0.98, letterSpacing: "-0.045em", maxWidth: 1000 }}>
          Most websites explain a business. The good ones make you feel something about it first.
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Neue Montreal", data: font, weight: 500, style: "normal" }] },
  );
}
