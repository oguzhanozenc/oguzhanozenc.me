import { client } from "@/lib/contentful/client";

export type ResumeItem = {
  name: string;
  title: string;
  photo?: {
    fields: {
      file: {
        url: string;
      };
    };
  };
  locationCity: string;
  locationCountry: string;
  locationMapLink: string;
  remote: boolean;
  about: string;

  skills: {
    fields: {
      title: string;
      items: string[];
    };
  }[];

  certifications?: {
    fields: {
      title: string;
      date: string;
      provider: string;
      description: string;
      link: string;
      providerLink: string;
    };
  }[];

  socialLinks: {
    fields: {
      title: string;
      shorturl: string;
      url: string;
      icon?: string;
    };
  }[];

  workExperience: {
    fields: {
      company: string;
      date: string;
      type: string;
      position: string;
      responsibilities: string[];
      achievements?: string[];
      techStack: string[];
      status?: string;
    };
  }[];

  education: {
    fields: {
      title: string;
      date: string;
      provider: string;
      description: string;
      degree: string;
      relevantCourses?: string;
    };
  }[];

  projects: {
    fields: {
      name: string;
      link: string;
      description: string;
      role: string;
      techStack: string[];
      repository?: string;
      loginInfo?: string;
    };
  }[];
};

export async function getResumeEntry(): Promise<ResumeItem | null> {
  const res = await client.getEntries({
    content_type: "resume",
    limit: 1,
    include: 3,
  });

  return (res.items[0]?.fields as ResumeItem) ?? null;
}
