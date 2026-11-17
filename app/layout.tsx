import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "@fontsource-variable/bodoni-moda/opsz.css";
import "@fontsource-variable/bodoni-moda/opsz-italic.css";
import "./global.css";

const neueMontreal = localFont({
  src: [
    { path: "./fonts/PP Neue Montreal/PPNeueMontreal-Book.woff2", weight: "400", style: "normal" },
    { path: "./fonts/PP Neue Montreal/PPNeueMontreal-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-neue-montreal",
  display: "swap",
});

const mondwest = localFont({
  src: "./fonts/Bitmap Font Pack/PPMondwest-Regular.otf",
  variable: "--font-bit",
  display: "swap",
});

const title = "Oğuzhan Özenç, Creative Developer & Designer";
const description =
  "Brand-led websites where identity, story and motion come from one person, from the first sketch to production code.";

export const metadata: Metadata = {
  metadataBase: new URL("https://oguzhanozenc.me"),
  title,
  description,
  icons: { icon: "/branding/logo.png" },
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Oğuzhan Özenç",
    locale: "en_US",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
};

export const viewport: Viewport = {
  themeColor: "#eeece7",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Oğuzhan Özenç",
  url: "https://oguzhanozenc.me",
  jobTitle: "Creative Developer & Designer",
  email: "mailto:hello@oguzhanozenc.me",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${neueMontreal.variable} ${mondwest.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}
