"use client";

import { usePathname } from "next/navigation";
import { Inter, Roboto_Mono } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "@/styles/global.css";

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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const isResumePage = pathname === "/resume";

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/branding/logo.png" />
      </head>
      <body className={isResumePage ? "resume-body" : "default-body"}>
        <div className={isResumePage ? "resume-container" : "app-container"}>
          {!isResumePage && <Navbar />}
          <div className={isResumePage ? "resume-content" : "main-content"}>
            <PageTransition>{children}</PageTransition>
            {!isResumePage && <Footer />}
          </div>
        </div>
      </body>
    </html>
  );
}
