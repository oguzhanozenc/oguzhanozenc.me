import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section className="aboutpage" id="about">
      <section className="aboutsection" id="aboutsection">
        <div className="aboutme-text">
          <h2 className="sectiontitle">Hey there,</h2>

          <p>
            I'm Oğuzhan Özenç, a front-end developer from Istanbul, Turkey. I
            find the journey from concept to application incredibly rewarding
            and am deeply fascinated by projects that tell stories. My main aim
            is to help people share their stories by creating impactful
            experiences. Software development allows me to turn ideas into
            reality.
          </p>
        </div>{" "}
        <div className="aboutme--img">
          <img src="./aboutmeimg.jpg" alt="" />
        </div>
        <div className="aboutme-text">
          {" "}
          <h2 className="sectiontitle">More About Me</h2>
          <p>
            I graduated from Istanbul Technical University, where I developed
            strong analytical and problem-solving skills. Starting my career at
            Beko Corporate as an R&D Engineer, I contributed to sustainable
            product development using agile project management. This experience
            not only sharpened my skills but also forged lasting friendships.
          </p>
          <p>
            In 2023, after 2.5 years in R&D, I faced a career crossroads.
            Despite a promising promotion, my passion for creativity and
            technology, nurtured since my early days designing and coding blogs
            and websites, drove me to pursue a new path. Leaving my engineering
            role, I transitioned to the tech industry, equipped with skills in
            project management, trend analysis, and collaboration.
          </p>
          <p>
            Since transitioning to front-end development in 2023, inspired by my
            early passion for designing websites, I've led projects like Offbeat
            Security, a React-powered blockchain security app. These projects
            emphasize dynamic interfaces and user engagement, utilizing tools
            such as Vite, React, and Netlify CMS. My portfolio reflects my
            dedication to crafting impactful digital experiences.
          </p>
          <div className="worktogether">
            <h2 className="sectiontitle">Let’s work together.</h2>
            <div className="aboutme-text">
              <p>To create products that tells stories.</p>
            </div>
            <a href="mailto:oguzhanozenc10@gmail.com">
              oguzhanozenc10@gmail.com
            </a>
          </div>
        </div>
      </section>
    </section>
  );
}
