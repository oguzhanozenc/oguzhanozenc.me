import React from "react";
import resumeData from "./resumeData.json";
import "../css/Resume.css";
import { FaGithub, FaLinkedin, FaMapPin } from "react-icons/fa";
import { RiTwitterLine } from "react-icons/ri";
import { LuGlobe, LuMail, LuPhone } from "react-icons/lu";

export default function Resume() {
  const {
    name,
    title,
    photo,
    location,
    about,
    skills,
    socialMedia,
    workExperience,
    education,
    projects,
    certification,
  } = resumeData;

  const renderSocialIcon = (title) => {
    switch (title) {
      case "email":
        return <LuMail />;
      case "phone":
        return <LuPhone />;
      case "LinkedIn":
        return <FaLinkedin />;
      case "GitHub":
        return <FaGithub />;
      case "Twitter":
        return <RiTwitterLine />;
      case "Website":
        return <LuGlobe />;
      default:
        return null;
    }
  };

  return (
    <section className="resume-section">
      <div className="resume-introsection">
        <div className="intro-info">
          <h1 className="resume-name">{name}</h1>
          <p className="resume-title">{title}</p>
          <span className="location">
            <a href={location.link} target="_blank" rel="noopener noreferrer">
              <FaMapPin /> {location.city}, {location.country}{" "}
              {location.remote && (
                <span className="opentoremote">
                  - Open to remote work worldwide.
                </span>
              )}
            </a>
          </span>
          <div className="resume-contact">
            <ul>
              {socialMedia.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={
                      social.title === "email"
                        ? `mailto:${social.shorturl}`
                        : social.url
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {renderSocialIcon(social.title)} {social.shorturl}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="profilephoto">
          <img src={photo} alt={`${name}'s photo`} />
        </div>
      </div>
      <div className="resume-about">
        <h2 className="resume-sectiontitle">About</h2>
        <p>{about}</p>
      </div>
      <div className="resume-skills">
        <h2 className="resume-sectiontitle">Skills</h2>
        {skills.map((skillCategory, index) => (
          <div key={index} className="resume-skill">
            <p className="skillname">{skillCategory.title}:</p>
            <ul>
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill}, </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="resume-workexperience">
        <h2 className="resume-sectiontitle">Work Experience</h2>
        {workExperience.map((experience, index) => (
          <div key={index} className="experience">
            <div className="experience-info">
              <p id="project-name">
                {experience.company}{" "}
                <span className="worktype">{experience.type}</span>{" "}
              </p>{" "}
              <p>{experience.date}</p>
            </div>
            <div className="experience-details">
              <p>{experience.position}</p>
              {experience.responsibilities.map((responsibility, idx) => (
                <p key={idx}>- {responsibility}</p>
              ))}
              {experience.technologiesUsed.length > 0 && (
                <ul>
                  {experience.technologiesUsed.map((tech, idx) => (
                    <li key={idx} className="tech">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
              {experience.achievements &&
                experience.achievements.length > 0 && (
                  <p>
                    <strong>Achievements:</strong>{" "}
                    {experience.achievements.join(", ")}
                  </p>
                )}
            </div>
          </div>
        ))}
      </div>
      <div className="resume-education">
        <h2 className="resume-sectiontitle">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="education">
            <div className="edu-details">
              <p id="edu-institution">{edu.institution}</p>
              <p>{edu.date}</p>
            </div>
            <p>{edu.degree}</p>
          </div>
        ))}
      </div>{" "}
      <div className="resume-certification">
        <h2 className="resume-sectiontitle">Certification</h2>
        <p>
          <strong>{certification.title}</strong> from {certification.provider}.{" "}
          {certification.description}{" "}
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certification
          </a>
        </p>
      </div>
      <div className="resume-projectssection">
        <h2 className="resume-sectiontitle">Projects</h2>{" "}
        <div className="resume-projects">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <p id="project-name">{project.name}</p>
              <p>{project.description}</p>

              {project.technologiesUsed.length > 0 && (
                <ul>
                  <li className="project-tech">{project.role}</li>
                  {project.technologiesUsed.map((tech, idx) => (
                    <li key={idx} className="project-tech">
                      {tech}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}{" "}
        </div>
      </div>
    </section>
  );
}
