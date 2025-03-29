import { getProjectEntries } from "@/lib/contentful/getProject";
import ProjectCard from "@/components/RecentProjects/ProjectCard";

export default async function RecentProjects() {
  const projects = await getProjectEntries();

  return (
    <section
      className="flex flex-col justify-between relative rounded-lg"
      id="recent-projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start">
        {projects.map((project) => {
          const desktopImage = project.featuredImage?.fields?.file?.url
            ? `https:${project.featuredImage.fields.file.url}`
            : "";

          const mobileImage = project.featuredImageMobile?.fields?.file?.url
            ? `https:${project.featuredImageMobile.fields.file.url}`
            : "";

          return (
            <ProjectCard
              key={project.slug}
              title={project.title}
              slug={project.slug}
              featuredText={project.featuredText}
              featuredimg={desktopImage}
              featuredimgMobile={mobileImage}
              enableHover={true}
            />
          );
        })}
      </div>
    </section>
  );
}
