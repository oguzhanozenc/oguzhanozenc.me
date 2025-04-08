import { Inter, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "@/styles/global.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata = {
  title: "Oguzhan Ozenc – Frontend Developer | React, Next.js",
  description:
    "Frontend developer focused on building scalable, design-conscious web experiences using React, Next.js 15, and TypeScript.",
  icons: {
    icon: "/branding/logo.png",
  },
  alternates: {
    canonical: "https://oguzhanozenc.me/",
  },
  openGraph: {
    title: "Oguzhan Ozenc – Frontend Developer | React, Next.js",
    description:
      "Frontend developer building modular, scalable interfaces with React, Next.js 15, and Tailwind CSS — focused on clean UI architecture and user flow.",
    url: "https://oguzhanozenc.me/",
    siteName: "Oguzhan Ozenc",
    images: [
      {
        url: "https://oguzhanozenc.me/branding/oguzhanozenc.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Ozenc – Frontend Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguzhan Ozenc – Frontend Developer | React, Next.js",
    description:
      "Frontend developer focused on modular systems, polished UIs, and product-first thinking.",
    images: ["https://oguzhanozenc.me/branding/oguzhanozenc.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Oguzhan Ozenc",
            url: "https://oguzhanozenc.me",
            jobTitle: "Frontend Developer",
            worksFor: {
              "@type": "Organization",
              name: "Self-employed",
            },
            sameAs: [
              "https://github.com/oguzhanozenc",
              "https://linkedin.com/in/oguzhanozenc",
              "https://x.com/oguzhanozencdev",
            ],
          }),
        }}
      />
      <body
        style={{ fontFamily: "var(--font-inter)" }}
        className="bg-white text-[#090e14] font-sans"
      >
        {children}
      </body>
    </html>
  );
}
