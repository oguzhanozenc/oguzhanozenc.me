import { projects } from "@/data/projects";
import ProjectCard from "@/components/RecentProjects/ProjectCard";

export default function RecentProjects() {
  return (
    <section
      className="flex flex-col justify-between relative rounded-lg "
      id="recent-projects"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-start">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            slug={project.slug}
            featuredText={project.featuredText}
            featuredimg={project.featuredimg}
            featuredimgMobile={project.featuredimgMobile}
            enableHover={true}
          />
        ))}
      </div>
    </section>
  );
}
