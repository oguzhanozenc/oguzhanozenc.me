import React from "react";
import Skills from "./Skills";
import ME from "../public/me.png";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export default function Main() {
  return (
    <main id="home">
      <section className="about--container" id="about">
        <div className="about--container--img">
          <img src={ME} alt="" />
          <div className="about--container--buttons">
            <a href="/Contact" className="btn">
              Say Hello! <FaRegHandPeace />
            </a>
            <a href="/Portfolio" className="btn">
              See my work! <PiProjectorScreenChartBold />
            </a>
          </div>
        </div>

        <div className="about--container--text">
          <div>
            <p id="heythere"> Hey there!👋 I'm</p>
            <h1 id="myname">Oğuzhan Özenç</h1>
            <h4 id="mytitles">Developer, Designer & Dreamer</h4>
            <p id="aboutmeparagraph">
              I'm a front-end developer passionate about blending creativity and
              tech. Drawing inspiration from the unique journeys of individuals,
              I am excited about contributing to projects that help them share
              their stories. I'm looking forward to exploring career
              opportunities in the tech industry and beyond.
            </p>

            <a href="/About" className="btn" id="moreaboutmebtn">
              More about me&raquo;
            </a>
          </div>
        </div>
      </section>
      <Skills />
    </main>
  );
}