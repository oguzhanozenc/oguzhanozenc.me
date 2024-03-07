import React, { useRef, useState } from "react";
import "./styles_projectpage.css";
import projectsData from "./projectsData.json";
import { useParams, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "non.geist/mono";
import "non.geist";

import { PiProjectorScreenChart } from "react-icons/pi";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { LuComputer } from "react-icons/lu";
import { RiGitRepositoryLine } from "react-icons/ri";
import { PiSparkleFill, PiStarFourFill } from "react-icons/pi";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { TbCheckbox } from "react-icons/tb";
import { HiArrowLongRight } from "react-icons/hi2";

export default function ProjectPage() {
  const { projectIndex } = useParams();
  const currentIndex = parseInt(projectIndex, 10);
  const nextIndex = (currentIndex + 1) % projectsData.projects.length;
  const project = projectsData.projects[currentIndex].projectPage;

  const sliderRef = useRef();

  const [isImageClicked, setIsImageClicked] = useState(false);
  const [clickedImageIndex, setClickedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setIsImageClicked(true);
    setClickedImageIndex(index);
  };

  const handleModalClose = () => {
    setIsImageClicked(false);
    setClickedImageIndex(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="projectpage">
      <section className="projectsection">
        <div className="project-top">
          <div className="topsection">
            <div>
              <p id="portfoliolink">
                <Link to="/portfolio" className="links">
                  <RiArrowGoBackFill /> Portfolio
                </Link>
              </p>
            </div>
            <p id="nextproject">
              <Link to={`/project/${nextIndex}`} className="links">
                Next Project <PiProjectorScreenChart />
              </Link>
            </p>
          </div>
        </div>
        <div className="project-container">
          <header className="project-header">
            <div className="project--details box">
              <h1>{project.titleAndDescription.title}</h1>
              <p>{project.titleAndDescription.description}</p>
            </div>

            <div className="project--links">
              <div>
                <a href={project.demoLink}>
                  <LuComputer className="link--icon" />
                  <br />
                  Demo <FiArrowUpRight />
                </a>
              </div>

              <div>
                <a href={project.githubLink}>
                  <RiGitRepositoryLine className="link--icon" />
                  <br />
                  Github <FiArrowUpRight />
                </a>
              </div>
            </div>
          </header>
          <h2>About</h2>
          <div className="project-overview ">
            <div className="project-role box">
              <h3>My Role</h3>
              <p>{project.myRole}</p>
            </div>
            <div className="box">
              <div>
                <h3>Who is this app for?</h3>
                <p>{project.overview}</p>
              </div>
              <div className="project-tech-stack">
                <div>
                  <h4>Tech Stack:</h4>
                </div>
                <div>
                  <ul>
                    {project.technologiesUsed.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <section className="demo">
            <h2>User Journey</h2>
            <div className="stages-slider">
              <Slider
                ref={sliderRef}
                {...settings}
                className="slider--component"
              >
                {project.demoData.map((demo, index) => (
                  <div
                    className={`demo--container ${
                      isImageClicked ? "enlarged" : ""
                    }`}
                    key={index}
                  >
                    <div
                      className="stages box"
                      onClick={() => handleImageClick(index)}
                    >
                      <h3 className="stage">
                        <PiSparkleFill /> {demo.title}
                      </h3>
                      <div className="screenshotframe">
                        <div className="window-buttons">
                          <div className="window-button red-button"></div>
                          <div className="window-button yellow-button"></div>
                          <div className="window-button green-button"></div>
                        </div>
                        <img
                          src={demo.screenshot}
                          alt={`Screenshot ${index + 1}`}
                        />
                      </div>
                      <div>
                        <ul className="description--stages">
                          {demo.description.map((desc, descIndex) => (
                            <li key={descIndex}>
                              <PiStarFourFill /> {desc}
                              <br />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>

            {isImageClicked && (
              <div className="enlarged-modal" onClick={handleModalClose}>
                <div className="enlarged-content">
                  <img
                    src={project.demoData[clickedImageIndex].screenshot}
                    alt={`Enlarged Screenshot ${clickedImageIndex + 1}`}
                  />
                </div>
              </div>
            )}
          </section>

          <div className="project-features">
            <h2>Features</h2>
            <ul>
              {projectsData.projects[projectIndex].features.map(
                (feature, index) => (
                  <li key={index} className="box">
                    <h3>{feature.title}</h3>
                    <small>{feature.description}</small>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="project-challenges ">
            <h2>Challenges and Solutions</h2>
            {project.challengesAndSolutions.map((item, index) => (
              <div key={index} className="challenge-solution-item">
                <div className="challenge box">
                  <h3>
                    <IoExtensionPuzzleOutline /> Challenge: {item.challenge}
                  </h3>
                  <small>{item.challengeDescription}</small>
                </div>
                <div id="arrow">
                  <HiArrowLongRight />
                </div>
                <div className="solution box">
                  <h3>
                    <TbCheckbox /> Solution: {item.solution}
                  </h3>
                  <small> {item.solutionDescription}</small>
                </div>
              </div>
            ))}
          </div>

          <h2>{project.upcomingFeatures.heading}</h2>
          <section className="upcoming-features box">
            <div>
              <p>
                <strong>{project.upcomingFeatures.openingStatement}</strong>
              </p>
            </div>
            <ul>
              {project.upcomingFeatures.features.map((feature, index) => (
                <li key={index}>
                  <strong>{feature.title}:</strong> {feature.explanation}
                </li>
              ))}
            </ul>
          </section>

          <section className="bottomsection box">
            <div className="project-contact">
              <h3>Contact or Feedback Section</h3>
              <p>{project.contactOrFeedbackSection}</p>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
}
