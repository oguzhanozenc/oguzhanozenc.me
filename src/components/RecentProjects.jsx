import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData.json";
import "../css/RecentProjects.css";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <section className="recent-projects-container" id="recent-projects">
      <p className="recent-projects-title">Projects</p>
      <div className="recent-projects-grid">
        {projectsData.projects.map((project, index) => (
          <Link to={`/projects/${index}`} key={index}>
            <div
              className={`recent-project-item ${
                hoveredIndex === index ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="recent-project-details">
                <div>
                  <h3 className="recent-project-title">{project.title}</h3>
                </div>
                <div className="recent-project-description">
                  {project.featuredText}
                </div>
                <div className="recent-project-img-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="recent-project-img"
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
