import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PiProjectorScreenChart } from "react-icons/pi";
import { IoHandRightSharp as TbHandClick } from "react-icons/io5";
import projectsData from "./projectsData.json";
import "./Portfolio.css";

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  function handleMouseEnter(index) {
    setHoveredIndex(index);
  }

  function handleMouseLeave() {
    setHoveredIndex(null);
  }

  return (
    <section className="container" id="portfolio">
      <h2 className="section-title" id="portfolioheading">
        Recent Projects
      </h2>
      <div className="portfolio--container">
        {projectsData.projects.map((project, index) => (
          <Link to={`/project/${index}`}>
            <div
              key={index}
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
                    alt={project.name}
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
