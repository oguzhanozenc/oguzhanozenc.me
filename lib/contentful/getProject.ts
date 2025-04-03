import { client } from "@/lib/contentful/client";
import { Document } from "@contentful/rich-text-types";

export type ProjectItem = {
  title: string;
  slug: string;
  featuredText: string;
  description: Document;
  featuredImage?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  techStack: string[];
  overview: Document;
  role: Document;
  demoLink?: string;
  githubRepoLink?: string;
  contactFeedback: string;
  futurePlans?: {
    fields: {
      title: string;
      description: string;
    };
  }[];
  projectFeatures?: {
    fields: {
      featureTitle: string;
      featureDescription: Document;
    };
  }[];
  userJourney?: {
    fields: {
      file: {
        url: string;
        contentType?: string;
      };
      title?: string;
      description?: string;
    };
  }[];
  projectChallenges?: {
    fields: {
      challenge: string;
      challengeDescription: Document;
      solution: string;
      solutionDescription: Document;
    };
  }[];
};

export async function getProjectEntries(): Promise<ProjectItem[]> {
  const res = await client.getEntries({
    content_type: "project",
    order: ["fields.order"],
    include: 2,
  });

  return res.items.map((item) => item.fields as unknown) as ProjectItem[];
}
