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
  ExperienceSummary,
  ExperienceItemTitle,
  ExperienceItemPosition,
  AchievementItem,
  Education,
  EducationItem,
  EducationItemTitle,
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
  EducationItemCourses,
} from "@/app/resume/components";

import { FaMapPin, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuGlobe, LuMail, LuPhone } from "react-icons/lu";
import { notFound } from "next/navigation";

const iconMap = {
  FaGithub,
  FaLinkedin,
  LuMail,
  LuPhone,
  LuGlobe,
};

export default async function ResumeComponent() {
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

              <SectionLink href={resume.locationMapLink}>
                {resume.locationCity}, {resume.locationCountry}
              </SectionLink>

              {resume.remote && " – Open to remote work worldwide."}
            </ResumeLocation>

            <ResumeSocialLinks>
              {resume.socialLinks?.map((social, i) => {
                const fields = social?.fields;
                if (!fields || !fields.icon || !fields.url) return null;

                const Icon = iconMap[fields.icon as keyof typeof iconMap];
                if (!Icon) return null;

                return (
                  <ResumeSocialLink key={i} href={fields.url} icon={<Icon />}>
                    {!["linkedin", "github"].includes(
                      fields.title.toLowerCase()
                    ) && fields.shorturl}
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
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <ExperienceItemTitle
                      href={exp.fields.url ?? undefined}
                      ariaLabel={`Open ${exp.fields.company}`}
                    >
                      {exp.fields.company}
                    </ExperienceItemTitle>
                    <span>—</span>
                    <Tag className="bg-[#f3f4f6] text-[#111827] font-bold rounded-lg">
                      {exp.fields.type}
                    </Tag>
                    <ExperienceItemPosition>
                      {exp.fields.position}
                    </ExperienceItemPosition>
                  </div>
                  <SectionDate>{exp.fields.date}</SectionDate>
                </SectionRow>

                {exp.fields.experienceSummary && (
                  <ExperienceSummary>
                    <TextBlock>{exp.fields.experienceSummary}</TextBlock>
                  </ExperienceSummary>
                )}

                {exp.fields.responsibilities?.map((desc, i2) => (
                  <TextBlock key={i2}>- {desc}</TextBlock>
                ))}

                {exp.fields.achievements?.map((ach, i2) => (
                  <AchievementItem key={i2}>{ach}</AchievementItem>
                ))}
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
                  <EducationItemTitle>{edu.fields.title}</EducationItemTitle>
                  <SectionDate>{edu.fields.date}</SectionDate>
                </SectionRow>
                <EducationItemInstitution>
                  {edu.fields.provider}
                </EducationItemInstitution>
                {edu.fields.degree && (
                  <TextBlock>{edu.fields.degree}</TextBlock>
                )}
                {edu.fields.relevantCourses && (
                  <EducationItemCourses>
                    Key topics: {edu.fields.relevantCourses}
                  </EducationItemCourses>
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
                <SectionRow>
                  <CertificationItemTitle>
                    {cert.fields.title} –{" "}
                    <SectionLink href={cert.fields.providerLink}>
                      <Tag className="text-[0.75rem] bg-[#f3f4f6] text-[#111827]">
                        {cert.fields.provider}
                      </Tag>
                    </SectionLink>
                  </CertificationItemTitle>

                  <SectionDate>{cert.fields.date}</SectionDate>
                </SectionRow>
                <TextBlock>
                  {cert.fields.description}{" "}
                  <SectionLink href={cert.fields.link}>
                    <Tag className="text-[0.75rem] bg-[#f3f4f6] text-[#111827]">
                      View Certificate
                    </Tag>
                  </SectionLink>
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
