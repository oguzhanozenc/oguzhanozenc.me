import { Inter, Roboto_Mono } from "next/font/google";
import Head from "next/head";
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
  title: "Oguzhan Ozenc – Front-End Developer | React, Next.js",
  description:
    "Oguzhan Ozenc is a front-end developer who creates scalable, intuitive UIs using React, Next.js, and Tailwind CSS.",
  icons: {
    icon: "/branding/logo.png",
  },
  alternates: {
    canonical: "https://oguzhanozenc.me/",
  },
  openGraph: {
    title: "Oguzhan Ozenc – Front-End Developer | React, Next.js",
    description:
      "Front-end developer with a product-first mindset — building reusable components and polished UIs with React, Next.js, and Tailwind CSS.",
    url: "https://oguzhanozenc.me/",
    siteName: "Oguzhan Ozenc",
    images: [
      {
        url: "https://oguzhanozenc.me/branding/oguzhanozenc.jpg",
        width: 1200,
        height: 630,
        alt: "Oguzhan Ozenc – Front-End Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oguzhan Ozenc – Front-End Developer | React, Next.js",
    description:
      "Building front-end systems with clarity, structure, and thoughtful design.",
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
      <Head>
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Oguzhan Ozenc",
              url: "https://oguzhanozenc.me",
              jobTitle: "Front-End Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              sameAs: [
                "https://github.com/oguzhanozenc",
                "https://linkedin.com/in/oguzhanozenc",
              ],
            }),
          }}
        />
      </Head>

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
