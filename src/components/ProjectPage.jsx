import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import "../css/ProjectPage.css";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { PiStarFourFill } from "react-icons/pi";
import { TbTopologyComplex } from "react-icons/tb";
import { FaCheck } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

export default function ProjectPage() {
  const { projectIndex } = useParams();
  const currentIndex = parseInt(projectIndex, 10);
  const nextIndex = (currentIndex + 1) % projectsData.projects.length;
  const project = projectsData.projects[currentIndex];
  const navigate = useNavigate();

  return (
    <section className="projectpage">
      <div className="project-top">
        <div className="topsection">
          <p id="portfoliolink">
            <button onClick={() => navigate(-1)} className="btn">
              <RiArrowGoBackFill /> Go Back
            </button>
          </p>
          <p id="nextproject">
            <Link to={`/projects/${nextIndex}`} className="btn">
              Next Project <FiArrowUpRight />
            </Link>
          </p>
        </div>
      </div>

      <section className="projectsection">
        <div className="project-container">
          <div className="project-header">
            <div className="project--details box">
              <h1>{project.title}</h1>
              <p>{project.description}</p>
              <div className="project-links">
                <a className="btn" href={project.demoLink}>
                  Project Link <FiArrowUpRight />
                </a>
                <a className="btn" href={project.githubLink}>
                  Github <FiArrowUpRight />
                </a>
              </div>
            </div>
          </div>

          <h2 className="section-title">About</h2>
          <div className="project-overview">
            <div className="project-role box">
              <h3>My Role</h3>
              <p>{project.myRole}</p>
            </div>
            <div className="box">
              <h3>Who is this app for?</h3>
              <p>{project.overview}</p>
              <div className="project-tech-stack">
                <p>Stack:</p>
                <ul>
                  {project.techStack.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <section className="demo">
            <h2 className="section-title">User Journey</h2>
            <Tabs>
              <TabList>
                {project.demoData.map((demo, index) => (
                  <Tab key={index}>Stage {index + 1}</Tab>
                ))}
              </TabList>

              {project.demoData.map((demo, index) => (
                <TabPanel key={index}>
                  <div className="demo--container">
                    <div className="stages box">
                      <div className="screenshotframe">
                        <img
                          src={demo.screenshot}
                          alt={`Screenshot ${index + 1}`}
                        />
                      </div>
                      <ul className="description--stages">
                        {demo.description.map((desc, descIndex) => (
                          <li key={descIndex}>
                            <PiStarFourFill /> {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              ))}
            </Tabs>
          </section>

          <div className="project-features">
            <h2 className="section-title">Features</h2>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index} className="box">
                  <h3>{feature.title}</h3>
                  <small>{feature.description}</small>
                </li>
              ))}
            </ul>
          </div>

          <div className="project-challenges">
            <h2 className="section-title">Challenges and Solutions</h2>
            {project.challengesAndSolutions.map((item, index) => (
              <div key={index} className="challenge-solution-item">
                <div className="challenge box">
                  <h3>
                    <TbTopologyComplex /> Challenge: {item.challenge}
                  </h3>
                  <small>{item.challengeDescription}</small>
                </div>
                <div id="arrow">
                  <HiArrowLongRight />
                </div>
                <div className="solution box">
                  <h3>
                    <FaCheck /> Solution: {item.solution}
                  </h3>
                  <small>{item.solutionDescription}</small>
                </div>
              </div>
            ))}
          </div>

          <h2 className="section-title">{project.upcomingFeatures.heading}</h2>
          <section className="upcoming-features box">
            <div>
              {project.upcomingFeatures.features.map((feature, index) => (
                <div key={index}>
                  <h4>{feature.title}:</h4>
                  <p>{feature.explanation}</p>
                </div>
              ))}
            </div>{" "}
          </section>

          <h2 className="section-title">Contact or Feedback Section</h2>
          <section className="bottomsection box">
            <div className="project-contact">
              <p>{project.contactOrFeedbackSection}</p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
