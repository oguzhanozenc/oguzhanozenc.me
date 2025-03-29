import "@/styles/ResumePrint.css";
import Image from "next/image";
import { getResumeEntry } from "@/lib/contentful/getResume";
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

import { FaMapPin, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuGlobe, LuMail } from "react-icons/lu";
import { notFound } from "next/navigation";

const iconMap = {
  FaGithub,
  FaLinkedin,
  LuMail,
  LuGlobe,
};

export default async function Resume() {
  const resume = await getResumeEntry();
  if (!resume) return notFound();

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
            <ResumeName>{resume.name}</ResumeName>
            <ResumeTitle>{resume.title}</ResumeTitle>
            <ResumeLocation>
              <FaMapPin className="inline-block text-black mr-1" />
              <a
                href={resume.locationMapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                style={{ fontFamily: "var(--font-sfmono)" }}
              >
                {resume.locationCity}, {resume.locationCountry}
              </a>
              {resume.remote && " – Open to remote work worldwide."}
            </ResumeLocation>

            <ResumeSocialLinks>
              {resume.socialLinks?.map((social, i) => {
                const iconKey = social.fields.icon;
                const Icon = iconMap[iconKey as keyof typeof iconMap];

                return (
                  <ResumeSocialLink
                    key={i}
                    href={social.fields.url}
                    icon={<Icon />}
                  >
                    {!["linkedin", "github"].includes(
                      social.fields.title.toLowerCase()
                    ) && social.fields.shorturl}
                  </ResumeSocialLink>
                );
              })}
            </ResumeSocialLinks>
          </div>

          {resume.photo?.fields?.file?.url && (
            <ResumePhoto>
              <Image
                src={`https:${resume.photo.fields.file.url}`}
                alt={`${resume.name}'s photo`}
                width={128}
                height={128}
                className="rounded-md object-cover"
              />
            </ResumePhoto>
          )}
        </ResumeHeader>

        <section>
          <ResumeSectionTitle>Summary</ResumeSectionTitle>
          <TextBlock>{resume.about}</TextBlock>
        </section>

        {resume.skills?.length > 0 && (
          <ResumeSkills>
            <ResumeSectionTitle>Skills</ResumeSectionTitle>
            {resume.skills.map((group, i) => (
              <ResumeSkillGroup key={i}>
                <ResumeSkillTitle>{group.fields.title}</ResumeSkillTitle>
                <ResumeSkillList>
                  {group.fields.items.map((skill, i2) => (
                    <ResumeSkillItem
                      key={i2}
                      isLast={i2 === group.fields.items.length - 1}
                    >
                      {skill}
                    </ResumeSkillItem>
                  ))}
                </ResumeSkillList>
              </ResumeSkillGroup>
            ))}
          </ResumeSkills>
        )}

        {resume.workExperience?.length > 0 && (
          <Experience>
            <ResumeSectionTitle>Work Experience</ResumeSectionTitle>
            {resume.workExperience.map((exp, i) => (
              <ExperienceItem key={i}>
                <SectionRow>
                  <ExperienceItemTitle>
                    {exp.fields.company}
                    <Tag className="ml-2 bg-[#f3f4f6] text-[#111827] font-bold">
                      {exp.fields.type}
                    </Tag>
                  </ExperienceItemTitle>
                  <SectionDate>{exp.fields.date}</SectionDate>
                </SectionRow>

                <ExperienceItemPosition>
                  {exp.fields.position}
                </ExperienceItemPosition>

                {exp.fields.responsibilities?.map((desc, i2) => (
                  <TextBlock key={i2}>- {desc}</TextBlock>
                ))}

                {exp.fields.achievements?.map((ach, i2) => (
                  <TextBlock key={`ach-${i2}`}>• {ach}</TextBlock>
                ))}

                {exp.fields.techStack?.length > 0 && (
                  <ul className="flex flex-wrap gap-[0.25rem] p-0 list-none mt-1">
                    {exp.fields.techStack.map((tech, i3) => (
                      <Tag
                        key={i3}
                        className="bg-[#111827cc] text-[#f9fafb] text-[0.85rem]"
                      >
                        {tech}
                      </Tag>
                    ))}
                  </ul>
                )}
              </ExperienceItem>
            ))}
          </Experience>
        )}

        {resume.education?.length > 0 && (
          <Education>
            <ResumeSectionTitle>Education</ResumeSectionTitle>
            {resume.education.map((edu, i) => (
              <EducationItem key={i}>
                <SectionRow>
                  <EducationItemInstitution>
                    {edu.fields.title}
                  </EducationItemInstitution>
                  <SectionDate>{edu.fields.date}</SectionDate>
                </SectionRow>

                <TextBlock>{edu.fields.degree}</TextBlock>

                {edu.fields.relevantCourses && (
                  <p
                    className="text-[0.7rem] text-[#666]"
                    style={{ fontFamily: "var(--font-sfmono)" }}
                  >
                    Relevant Courses: {edu.fields.relevantCourses}
                  </p>
                )}
              </EducationItem>
            ))}
          </Education>
        )}

        {(resume.certifications ?? []).length > 0 && (
          <Certification>
            <ResumeSectionTitle>Certification</ResumeSectionTitle>
            {(resume.certifications ?? []).map((cert, i) => (
              <CertificationItem key={i}>
                <CertificationItemTitle>
                  {cert.fields.title} –{" "}
                  <Tag className="bg-[#e5e7eb] text-black">
                    <a
                      href={cert.fields.providerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "var(--font-sfmono)" }}
                    >
                      {cert.fields.provider}
                    </a>
                  </Tag>
                </CertificationItemTitle>

                <SectionDate>{cert.fields.date}</SectionDate>

                <TextBlock>
                  {cert.fields.description}{" "}
                  <SectionLink href={cert.fields.link}>View</SectionLink>
                </TextBlock>
              </CertificationItem>
            ))}
          </Certification>
        )}

        {resume.projects?.length > 0 && (
          <Projects>
            <ResumeSectionTitle>Projects</ResumeSectionTitle>
            <ProjectsGrid>
              {resume.projects.map((project, i) => (
                <ProjectItem key={i}>
                  <SectionRow>
                    <ProjectItemTitle href={project.fields.link}>
                      {project.fields.name}
                    </ProjectItemTitle>
                    {project.fields.repository && (
                      <SectionLink href={project.fields.repository}>
                        GitHub
                      </SectionLink>
                    )}
                  </SectionRow>

                  <TextBlock>{project.fields.description}</TextBlock>

                  {project.fields.loginInfo && (
                    <TextBlock>{project.fields.loginInfo}</TextBlock>
                  )}

                  <ul className="flex flex-wrap gap-[0.25rem] p-0 list-none mt-1">
                    {project.fields.techStack.map((tech, i2) => (
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
        )}
      </section>
    </>
  );
}
