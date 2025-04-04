import { Inter, Roboto_Mono } from "next/font/google";
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

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/branding/logo.png" />
      </head>
      <body className="resume-body">
        <div className="resume-container">
          <div className="resume-content">
            <PageTransition>{children}</PageTransition>
          </div>
        </div>
      </body>
    </html>
  );
}
