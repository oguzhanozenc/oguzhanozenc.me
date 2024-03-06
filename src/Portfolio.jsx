import React from "react";
import { Link } from "react-router-dom";
import { PiProjectorScreenChart } from "react-icons/pi";
import { TbHandClick } from "react-icons/tb";
import projectsData from "./projectsData.json";
import "./stylesportfolio.css";

export default function Portfolio() {
  return (
    <section className="container" id="portfolio">
      <div className="portfolio--container">
        <div>
          <h2 className="sectionheading" id="portfolioheading">
            <PiProjectorScreenChart /> Portfolio
          </h2>
        </div>
        {projectsData.projects.map((project, index) => (
          <div key={index} className="project--item">
            <div className="portfolioitem--img">
              <img src={project.image} alt={project.title} />

              <div>
                <Link
                  className="btn"
                  id="projectdetailsbtn"
                  to={`/project/${index}`}
                >
                  Project Details <TbHandClick />
                </Link>
              </div>
            </div>
            <div className="project--details">
              <div>
                <h3>{project.title}</h3>
              </div>

              <div>
                <p>{project.description}</p>
              </div>

              <div id="techstack">
                <h4>Tech Stack:</h4>
                <ul>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
