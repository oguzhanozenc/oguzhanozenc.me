import { RecentProjects } from "@/components/RecentProjects/";
import { SectionTitle } from "@/components/SectionTitle/";

export const metadata = {
  title: "Projects – Oguzhan Ozenc | Frontend Developer",
  description:
    "A collection of selected projects that reflect how I build structured, reusable UIs and work on product-focused frontend development using React, Next.js, and TypeScript.",
  openGraph: {
    title: "Projects – Oguzhan Ozenc | Frontend Developer",
    description:
      "Explore how I approach frontend development through selected real-world projects — focusing on UI structure, scalability, and design clarity.",
    url: "https://oguzhanozenc.me/projects",
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
    title: "Projects – Oguzhan Ozenc | Frontend Developer",
    description:
      "Real-world frontend projects built with structured UIs and product-focused thinking. Built with React, Next.js, and Tailwind CSS.",
    images: ["https://oguzhanozenc.me/branding/oguzhanozenc.jpg"],
  },
};

export default function RecentProjectsPage() {
  return (
    <section className="flex flex-col container mx-auto py-16 max-sm:py-8 max-sm:px-4 md:px-12 gap-4">
      <SectionTitle>Projects</SectionTitle>
      <RecentProjects />
    </section>
  );
}
