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
          <h1>{name}</h1>
          <p>{title}</p>
          <p className="location">
            <a href={location.link} target="_blank" rel="noopener noreferrer">
              <FaMapPin /> {location.city}, {location.country}{" "}
              {location.remote && (
                <span className="opentoremote">
                  - open to remote work worldwide.
                </span>
              )}
            </a>
          </p>{" "}
          <div className="resume-contact">
            <ul>
              {socialMedia.map((social, idx) => (
                <li key={idx}>
                  <a
                    href={
                      social.title === "email"
                        ? `mailto:${social.url}`
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
        </div>{" "}
        <div className="profilephoto">
          <img src={photo} alt="" />
        </div>
      </div>{" "}
      <div className="resume-introparagraph">
        <h2 className="resume-sectiontitle">About</h2>
        <p>{about}</p>
      </div>
      <div className="resume-skills">
        <h2 className="resume-sectiontitle">Skills</h2>
        {skills.map((skillCategory, index) => (
          <div key={index} className="resume-skill">
            <p className="skillname">{skillCategory.title}: </p>
            <ul>
              {skillCategory.items.map((skill, idx) => (
                <li key={idx}>{skill},</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="resume-workexperience">
        <h2 className="resume-sectiontitle">Work Experience</h2>
        {workExperience.map((experience, index) => (
          <div key={index}>
            <h3>
              {experience.company} <span>{experience.type}</span>
              <p>{experience.date}</p>
            </h3>
            <h4>{experience.position}</h4>
            {experience.responsibilities.map((responsibility, idx) => (
              <p key={idx}>{responsibility}</p>
            ))}
            <ul>
              {experience.technologiesUsed.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="resume-education">
        <h2 className="resume-sectiontitle">Education</h2>
        {education.map((edu, index) => (
          <div key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <p>{edu.date}</p>
          </div>
        ))}
      </div>
      <div className="resume-projects">
        <h2 className="resume-sectiontitle">Projects</h2>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Role: {project.role}</p>
            <ul>
              {project.technologiesUsed.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
