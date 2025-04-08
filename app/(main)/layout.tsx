import { Inter, Roboto_Mono } from "next/font/google";
import Head from "next/head";
import Script from "next/script";
import "@/styles/global.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import PageTransition from "@/components/Navbar/PageTransition";

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
        className="flex justify-center items-center text-[#090e14] bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,180,170,0.13)_0,rgba(0,180,170,0)_50%,rgba(0,180,170,0)_100%)] w-[70%] mx-auto font-sans max-[1200px]:w-[90%]"
      >
        <div className="flex flex-col items-center w-full">
          <Navbar />
          <div className="bg-white w-full my-32 rounded-2xl border border-gray-200 p-8 shadow-[0_1.2px_1.2px_rgba(10,10,10,0.06),0_5px_10px_rgba(10,10,10,0.04)] max-[1200px]:p-4">
            <PageTransition>{children}</PageTransition>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
