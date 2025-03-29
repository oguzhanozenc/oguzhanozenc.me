import { notFound } from "next/navigation";
import { getProjectEntries } from "@/lib/contentful/getProject";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { SectionTitle } from "@/components/SectionTitle";
import {
  ProjectNav,
  ProjectCard,
  ProjectGrid,
  ProjectStack,
  UserJourneyTabs,
} from "@/app/projects/[slug]/components";

import { HiArrowLongRight } from "react-icons/hi2";
import { TbTopologyComplex } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const allProjects = await getProjectEntries();
  const project = allProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="py-[4rem] sm:px-[5%] max-sm:px-0">
      {/* Navigation */}
      <ProjectNav slug={slug} projects={allProjects} />

      {/* Header */}
      <div className="bg-white border border-[rgb(230,230,230)] rounded-[0.75rem] p-6 text-justify mb-20">
        <SectionTitle size="large" align="center">
          {project.title}
        </SectionTitle>
        <div className="text-base text-center max-w-3xl mx-auto mb-4">
          {documentToReactComponents(project.description)}
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--md"
            >
              Project Link
            </a>
          )}
          {project.githubRepoLink && (
            <a
              href={project.githubRepoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline btn--md"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* About Section */}
      <div className="mb-20">
        <SectionTitle size="medium">About</SectionTitle>
        <ProjectGrid columns={2}>
          <ProjectCard title="My Role">
            {project.role && documentToReactComponents(project.role)}
          </ProjectCard>
          <ProjectCard title="Project Overview">
            {project.overview && documentToReactComponents(project.overview)}
            <ProjectStack items={project.techStack} />
          </ProjectCard>
        </ProjectGrid>
      </div>

      {/* User Journey */}
      {project.userJourney && project.userJourney.length > 0 && (
        <div>
          <SectionTitle size="medium">User Journey</SectionTitle>
          <UserJourneyTabs userJourney={project.userJourney} />
        </div>
      )}

      {/* Features */}
      {project.projectFeatures && (
        <div className="mb-20">
          <SectionTitle size="medium">Features</SectionTitle>
          <ProjectGrid columns={3}>
            {project.projectFeatures?.map((feature, index) => (
              <ProjectCard key={index} title={feature.fields.featureTitle}>
                <p className="text-sm">
                  {documentToReactComponents(feature.fields.featureDescription)}
                </p>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </div>
      )}

      {/* Challenges & Solutions */}
      {project.projectChallenges && (
        <div className="mb-20">
          <SectionTitle size="medium">Challenges and Solutions</SectionTitle>
          {(project.projectChallenges ?? []).map((item, index) => (
            <ProjectGrid key={index} columns={3}>
              <ProjectCard title={item.fields.challenge}>
                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <TbTopologyComplex /> Challenge
                </div>
                <p className="text-sm">
                  {documentToReactComponents(item.fields.challengeDescription)}
                </p>
              </ProjectCard>

              <div className="hidden lg:flex justify-center items-center text-[1.5rem] mx-auto text-muted-foreground">
                <HiArrowLongRight />
              </div>

              <ProjectCard title={item.fields.solution}>
                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaCheck /> Solution
                </div>
                <p className="text-sm">
                  {documentToReactComponents(item.fields.solutionDescription)}
                </p>
              </ProjectCard>
            </ProjectGrid>
          ))}
        </div>
      )}

      {/* Future Plans */}
      {project.futurePlans && (
        <div className="mb-20">
          <SectionTitle size="medium">Future Plans</SectionTitle>
          {project.futurePlans.map((plan, index) => (
            <ProjectCard key={index} title={plan.fields.title}>
              <p className="text-sm">{plan.fields.description}</p>
            </ProjectCard>
          ))}
        </div>
      )}

      {/* Contact / Feedback */}
      {project.contactFeedback && (
        <div className="mb-20">
          <SectionTitle size="medium">Contact or Feedback</SectionTitle>
          <ProjectCard>
            <p className="text-base">{project.contactFeedback}</p>
          </ProjectCard>
        </div>
      )}
    </section>
  );
}

export async function generateStaticParams() {
  const projects = await getProjectEntries();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
