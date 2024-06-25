import React from "react";

import "./About.css";

export default function About() {
  return (
    <section className="aboutpage" id="about">
      <section className="aboutsection" id="aboutsection">
        <div className="aboutme--img">
          <img src="./aboutmeimg.jpg" alt="" />
        </div>
        <div className="aboutme--text">
          <h1 className="section-title">About</h1>
          <p>
            Hey there! My name is Oğuzhan. I'm an enthusiastic front-end
            developer from Istanbul Turkey, with a passion for merging
            creativity and technology. Currently trying to make a transition to
            the ever-evolving tech landscape.
          </p>

          <p>
            My journey began during my studies at Istanbul Technical University,
            where I honed my analytical and problem-solving skills, laying the
            groundwork for my future pursuits. After graduation, I got my first
            job at Arçelik Global as an R&D Engineer, contributing to
            sustainable product development using agile project management. This
            experience not only sharpened my skills but also introduced me to
            some of my closest friends.
          </p>

          <p>
            In 2023, after 2.5 years in the R&D field, I found myself at a
            crossroads. Despite a promising promotion opportunity at Arçelik, my
            passion for creativity and technology, dating back to my early days
            of designing and coding blogs and websites, led me to take a bold
            step. I said farewell to my engineering role in pursuit of a dream
            career in the dynamic tech world, armed with skills in project
            management, trend analysis, and strategic collaborations.
          </p>

          <p>
            The turning point came during a transformative trip to Montenegro in
            2023, where the joy of living in the moment and the influence of the
            local culture sparked a realization: a career in technology aligns
            with the life I envision.
          </p>

          <p>
            I was already starting to lay the groundwork for my career
            transition during the last couple months of my previous job, and I
            found myself drawn to the Front-end world. This interest stemmed
            from my activities around the 5th grade, fascinated by the
            user-focused aspects of websites. I emphasized both design and
            functionality, aligning with my passion for front-end development.
            My journey continued in 2023, where I dedicated countless hours to
            learning HTML and CSS and Javascript through the project-based
            platforms like Codecademy and Scrimba. At the moment, I solidified
            my understanding of JavaScript and delved into React.
          </p>

          <p>
            The year 2024 is a continued chapter of my journey, marked by the
            creation of my portfolio website in February. Built with Vite +
            React, the site serves as a dynamic platform to showcase my work,
            document my ongoing learning, and share my experiences, just like my
            countless blogs from childhood 😊.
          </p>

          <p>
            As I navigate the tech landscape, my primary goal for this year is
            to secure a fulfilling junior position that brings me happiness,
            peace, and contentment. I'm excited to explore new learning paths,
            including the integration of AI into my career journey, as I strive
            for continuous growth.
          </p>

          <p>
            Join me on this adventure, and let's create and innovate together!
            Feel free to explore my portfolio website, and don't hesitate to
            drop me a line at{" "}
            <strong>
              {" "}
              <a href="mailto:oguzhanozenc10@gmail.com">
                oguzhanozenc10@gmail.com
              </a>
            </strong>
            . I truly appreciate your interest and support.
          </p>
        </div>
      </section>
    </section>
  );
}
