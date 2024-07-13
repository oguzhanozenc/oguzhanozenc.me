import React from "react";
import "../css/About.css";

export default function About() {
  return (
    <section className="aboutpage" id="about">
      <section className="aboutsection" id="aboutsection">
        <h2 className="sectiontitle">Hey there,</h2>
        <div className="about-grid">
          <div className="aboutme-text">
            <p>
              I am a Front-End Developer with a strong foundation in HTML, CSS,
              JavaScript, and React, driven by a passion for design and
              front-end development. I have always been drawn to projects that
              tell stories and make a meaningful impact. Software development
              allows me to transform ideas into reality, and I find the entire
              process from concept to application incredibly rewarding.g. My
              goal is to bridge the gap between design and development,
              leveraging my skills to create cohesive and impactful projects.
            </p>
          </div>{" "}
          <div className="aboutme--img">
            <img src="./aboutmeimg.jpg" alt="" />
          </div>
        </div>
        <div className="aboutme-text">
          {" "}
          <h2 className="sectiontitle">More About Me</h2>
          <p>
            <strong>👨‍💻Current Role:</strong> I am currently spearheading the
            front-end and full-stack development of Offbeat Security, a
            cutting-edge blockchain security business. Utilizing React for
            dynamic and responsive user interfaces, I aim to develop an engaging
            web application with seamless navigation. I integrated and
            customized a CMS for efficient content management and seamless
            deployment, enhancing user engagement with dynamic blog posts.
          </p>
          <p>
            <strong>🎓Educational Background:</strong> With a background in
            Engineering from Istanbul Technical University and ongoing studies
            in Management Information Systems at Anadolu University, I've gained
            skills that have enabled me to tackle complex problems and deliver
            innovative solutions.
          </p>
          <p>
            🌌<strong>Journey into Tech: </strong>I've always been passionate
            about a career that would allow me to become more creative, and my
            journey into software development was a perfect opportunity for me.
            During my time at Beko Corporate, I applied agile methodologies for
            sustainable product development, researched emerging technologies,
            and established strategic collaborations, contributing to impactful
            innovation initiatives.
          </p>
          <p>
            <strong>💻Technical Skills:</strong> I am particularly focused on
            React and aiming to incorporate Generative AI technologies into my
            journey. I am excited to join a forward-thinking team where I can
            contribute to innovative projects that tell a story and make human
            life easier. My ideal role involves working with cutting-edge
            technologies in a collaborative environment that values creativity,
            user experience, and impactful solutions.
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
