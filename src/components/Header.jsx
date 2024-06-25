import React from "react";
import Skills from "./Skills";
import ME from "/me.png";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export default function Header() {
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
              As a front-end developer passionate about blending creativity and
              tech, I have always been curious about participating in projects
              that tell stories and creating something impactful. Software
              development allows me to turn ideas into reality, and I find the
              journey from concept to application incredibly rewarding.{" "}
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
