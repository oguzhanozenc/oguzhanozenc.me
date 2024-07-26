import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import "../css/Projects.css";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <section className="container" id="recentprojects">
      <h2 className="sectiontitle" id="portfolioheading">
        Projects
      </h2>
      <div className="portfolio--container">
        {projectsData.projects.map((project, index) => (
          <Link to={`/projects/${index}`} key={index}>
            <div
              className={`project--item ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="project--details">
                <div>
                  <h3 className="portfolio-projecttitle">{project.title}</h3>
                </div>
                <div className="project--description">
                  {project.featuredText}
                </div>

                <div className="portfolioitem--img">
                  <img
                    src={project.featuredimg}
                    alt={project.title}
                    className="project-img"
                  />
                  <img
                    src={project.featuredimgMobile}
                    alt={`${project.title} mobile`}
                    className="project-img-mobile"
                  />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
