"use client";

import "@/styles/ResumePrint.css";
import Image from "next/image";
import resume from "@/data/resume";
import {
  ResumeHeader,
  ResumeName,
  ResumeTitle,
  ResumeLocation,
  ResumeSocialLinks,
  ResumeSocialLink,
  ResumePhoto,
  ResumeSkills,
  ResumeSkillGroup,
  ResumeSkillTitle,
  ResumeSkillList,
  ResumeSkillItem,
  Experience,
  ExperienceItem,
  ExperienceItemTitle,
  ExperienceItemPosition,
  Education,
  EducationItem,
  EducationItemInstitution,
  Projects,
  ProjectsGrid,
  ProjectItem,
  ProjectItemTitle,
  Certification,
  CertificationItem,
  CertificationItemTitle,
  TextBlock,
  Tag,
  SectionRow,
  SectionDate,
  SectionLink,
  ResumeSectionTitle,
  ResumeDownloadButton,
} from "@/app/resume/components";

import { FaMapPin } from "react-icons/fa";

export default function Resume() {
  const {
    name,
    title,
    photo,
    location,
    socialMedia,
    about,
    skills,
    workExperience,
    education,
    projects,
    certification,
  } = resume;

  return (
    <>
      <div className="mb-4">
        <ResumeDownloadButton />
      </div>
      <section
        id="resume-content"
        className="flex flex-col mx-auto max-w-[80rem] text-[#373737]"
      >
        <ResumeHeader>
          <div className="flex flex-col items-start">
            <ResumeName>{name}</ResumeName>
            <ResumeTitle>{title}</ResumeTitle>
            <ResumeLocation>
              <FaMapPin className="inline-block text-black mr-1" />
              {location.city}, {location.country}
              {location.remote && " – Open to remote work worldwide."}
            </ResumeLocation>

            <ResumeSocialLinks>
              {socialMedia.map((social, i) => (
                <ResumeSocialLink key={i} href={social.url} icon={social.icon}>
                  {!["linkedin", "github"].includes(
                    social.title.toLowerCase()
                  ) && social.shorturl}
                </ResumeSocialLink>
              ))}
            </ResumeSocialLinks>
          </div>

          <ResumePhoto>
            <Image
              src={photo}
              alt={`${name}'s photo`}
              width={128}
              height={128}
              className="rounded-md object-cover"
            />
          </ResumePhoto>
        </ResumeHeader>

        <section>
          <ResumeSectionTitle>Summary</ResumeSectionTitle>
          <TextBlock>{about}</TextBlock>
        </section>

        <ResumeSkills>
          <ResumeSectionTitle>Skills</ResumeSectionTitle>
          {skills.map((category, i) => (
            <ResumeSkillGroup key={i}>
              <ResumeSkillTitle>{category.title}</ResumeSkillTitle>
              <ResumeSkillList>
                {category.items.map((skill, i2) => (
                  <ResumeSkillItem
                    key={i2}
                    isLast={i2 === category.items.length - 1}
                  >
                    {skill}
                  </ResumeSkillItem>
                ))}
              </ResumeSkillList>
            </ResumeSkillGroup>
          ))}
        </ResumeSkills>

        <Experience>
          <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
          {workExperience.map((exp, i) => (
            <ExperienceItem key={i}>
              <SectionRow>
                <ExperienceItemTitle>
                  {exp.company}
                  <Tag className="ml-2 bg-[#f3f4f6] text-[#111827] font-bold">
                    {exp.type}
                  </Tag>
                </ExperienceItemTitle>
                <SectionDate>{exp.date}</SectionDate>
              </SectionRow>

              <ExperienceItemPosition>{exp.position}</ExperienceItemPosition>

              {exp.responsibilities.map((desc, i2) => (
                <TextBlock key={i2}>- {desc}</TextBlock>
              ))}

              <ul className="flex flex-wrap gap-[0.25rem] p-0 list-none mt-1">
                {exp.technologiesUsed.map((tech, i3) => (
                  <Tag
                    key={i3}
                    className="bg-[#111827cc] text-[#f9fafb] text-[0.85rem]"
                  >
                    {tech}
                  </Tag>
                ))}
              </ul>
            </ExperienceItem>
          ))}
        </Experience>

        <Education>
          <ResumeSectionTitle>Education</ResumeSectionTitle>
          {education.map((edu, i) => (
            <EducationItem key={i}>
              <SectionRow>
                <EducationItemInstitution>
                  {edu.institution}
                </EducationItemInstitution>
                <SectionDate>{edu.date}</SectionDate>
              </SectionRow>

              <TextBlock>{edu.degree}</TextBlock>

              {edu.relevantCourses && (
                <p
                  className="text-[0.7rem] text-[#666]"
                  style={{ fontFamily: "var(--font-sfmono)" }}
                >
                  Relevant Courses: {edu.relevantCourses}
                </p>
              )}
            </EducationItem>
          ))}
        </Education>

        <Certification>
          <ResumeSectionTitle>Certification</ResumeSectionTitle>
          <CertificationItem>
            <CertificationItemTitle>
              {certification.title} –{" "}
              <Tag className="bg-[#e5e7eb] text-black">
                <a
                  href={certification.provider}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Scrimba
                </a>
              </Tag>
            </CertificationItemTitle>

            <SectionDate>{certification.date}</SectionDate>

            <TextBlock>
              {certification.description}{" "}
              <SectionLink href={certification.link}>View</SectionLink>
            </TextBlock>
          </CertificationItem>
        </Certification>

        <Projects>
          <ResumeSectionTitle>Projects</ResumeSectionTitle>
          <ProjectsGrid>
            {projects.map((project, i) => (
              <ProjectItem key={i}>
                <SectionRow>
                  <ProjectItemTitle href={project.link}>
                    {project.name}
                  </ProjectItemTitle>
                  {project.repository && (
                    <SectionLink href={project.repository}>GitHub</SectionLink>
                  )}
                </SectionRow>

                <TextBlock>{project.description}</TextBlock>

                <ul className="flex flex-wrap gap-[0.25rem] p-0 list-none mt-1">
                  {project.technologiesUsed.map((tech, i2) => (
                    <Tag
                      key={i2}
                      className="text-[0.75rem] bg-[#f3f4f6] text-[#111827]"
                    >
                      {tech}
                    </Tag>
                  ))}
                </ul>
              </ProjectItem>
            ))}
          </ProjectsGrid>
        </Projects>
      </section>{" "}
    </>
  );
}
