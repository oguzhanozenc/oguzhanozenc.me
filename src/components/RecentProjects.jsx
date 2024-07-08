import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import "../css/RecentProjects.css";

export default function RecentProjects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <section className="container" id="recentprojects">
      <h2 className="section-title" id="portfolioheading">
        Recent Projects
      </h2>
      <div className="portfolio--container">
        {projectsData.projects.map((project, index) => (
          <Link to={`/project/${index}`} key={index}>
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
                    src={project.image}
                    alt={project.title}
                    className="project-img"
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
