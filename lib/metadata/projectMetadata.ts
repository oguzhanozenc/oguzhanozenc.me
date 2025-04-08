import type { Metadata } from "next";
import { getProjectEntries } from "@/lib/contentful/getProject";

export async function getProjectMetadata(slug: string): Promise<Metadata> {
  const allProjects = await getProjectEntries();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found – Oguzhan Ozenc",
      description: "This project page could not be found.",
    };
  }

  const title = `${project.title} – Oguzhan Ozenc | Frontend Developer`;
  const description =
    project.featuredText ||
    `Read about how I built ${project.title} — focusing on UI structure, product experience, and reusable design with React and Next.js.`;

  const image = "https://oguzhanozenc.me/branding/oguzhanozenc.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description:
        project.featuredText ||
        `Explore the making of ${project.title}, including my role, the stack, and how I structured its frontend.`,
      url: `https://oguzhanozenc.me/projects/${project.slug}`,
      siteName: "Oguzhan Ozenc",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "Oguzhan Ozenc – Frontend Developer",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description:
        project.featuredText ||
        `Frontend project: ${project.title} — built with modular UI thinking and product-focused frontend architecture.`,
      images: [image],
    },
  };
}
