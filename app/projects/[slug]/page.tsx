"use client";

import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { SectionTitle } from "@/components/SectionTitle";

import {
  ProjectNav,
  ProjectCard,
  ProjectGrid,
  ProjectStack,
  ProjectImage,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTrigger,
} from "@/app/projects/[slug]/components";

import { HiArrowLongRight } from "react-icons/hi2";
import { TbTopologyComplex } from "react-icons/tb";
import { FaCheck } from "react-icons/fa6";

import { useState } from "react";

export default function ProjectPage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState<string>("stage-1");
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <p className="text-center mt-20">Project not found</p>;
  }

  return (
    <section className=" py-[4rem] sm:px-[5%] max-sm:px-0">
      {/* Navigation */}
      <ProjectNav slug={slug as string} projects={projects} />

      {/* Header */}
      <div className="bg-white border border-[rgb(230,230,230)] rounded-[0.75rem] p-6 text-justify mb-20">
        <SectionTitle size="large" align="center">
          {project.title}
        </SectionTitle>
        <p className="text-base text-center max-w-3xl mx-auto">
          {project.description}
        </p>

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
          {project.githubLink && (
            <a
              href={project.githubLink}
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
          <ProjectCard title="My Role">{project.myRole}</ProjectCard>
          <ProjectCard title="Project Overview">
            <p>{project.overview}</p>
            <ProjectStack items={project.techStack} />
          </ProjectCard>
        </ProjectGrid>
      </div>

      {/* User Journey */}
      {project.demoData?.length > 0 && (
        <div className="mb-20">
          <SectionTitle size="medium">User Journey</SectionTitle>

          <Tabs>
            <TabsList>
              {project.demoData.map((_, i) => (
                <TabsTrigger
                  key={i}
                  value={`stage-${i + 1}`}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  Stage {i + 1}
                </TabsTrigger>
              ))}
            </TabsList>

            {project.demoData.map((demo, i) => (
              <TabsPanel key={i} value={`stage-${i + 1}`} activeTab={activeTab}>
                <div className="flex flex-col gap-6 p-6">
                  <ProjectImage src={demo.screenshot} alt={`Stage ${i + 1}`} />

                  <ul className="space-y-2 text-base list-disc pl-5 text-left ">
                    {demo.description.map((desc, idx) => (
                      <li key={idx}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </TabsPanel>
            ))}
          </Tabs>
        </div>
      )}

      {/* Features */}
      {project.features?.length > 0 && (
        <div className="mb-20">
          <SectionTitle size="medium">Features</SectionTitle>
          <ProjectGrid columns={3}>
            {project.features.map((feature, index) => (
              <ProjectCard key={index} title={feature.title}>
                <p className="text-sm">{feature.description}</p>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </div>
      )}

      {/* Challenges & Solutions */}
      {project.challengesAndSolutions?.length > 0 && (
        <div className="mb-20">
          <SectionTitle size="medium">Challenges and Solutions</SectionTitle>
          {project.challengesAndSolutions.map((item, index) => (
            <ProjectGrid key={index} columns={3}>
              <ProjectCard title={`${item.challenge}`}>
                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <TbTopologyComplex /> Challenge
                </div>
                <p className="text-sm">{item.challengeDescription}</p>
              </ProjectCard>

              <div className="hidden lg:flex justify-center items-center text-[1.5rem] mx-auto text-muted-foreground">
                <HiArrowLongRight />
              </div>

              <ProjectCard title={`${item.solution}`}>
                <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaCheck /> Solution
                </div>
                <p className="text-sm">{item.solutionDescription}</p>
              </ProjectCard>
            </ProjectGrid>
          ))}
        </div>
      )}

      {/* Upcoming Features */}
      {project.upcomingFeatures?.features?.length > 0 && (
        <div className="bg-white border border-[rgb(230,230,230)] rounded-[0.75rem] p-6 text-justify mb-20">
          <SectionTitle size="medium">
            {project.upcomingFeatures.heading}
          </SectionTitle>
          {project.upcomingFeatures.features.map((feature, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-base">{feature.title}:</h4>
              <p className="text-sm">{feature.explanation}</p>
            </div>
          ))}
        </div>
      )}

      {/* Contact / Feedback */}
      {project.contactOrFeedbackSection && (
        <div className="bg-white border border-[rgb(230,230,230)] rounded-[0.75rem] p-6 text-justify">
          <SectionTitle size="medium">Contact or Feedback Section</SectionTitle>
          <p className="text-base">{project.contactOrFeedbackSection}</p>
        </div>
      )}
    </section>
  );
}
