import React from "react";
import "./Header.css";

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
            <a href="#contact" className="btn">
              Say Hello! <FaRegHandPeace />
            </a>
            <a href="#portfolio" className="btn">
              See my work! <PiProjectorScreenChartBold />
            </a>
          </div>
        </div>

        <div className="about--container--text">
          <div>
            <p id="heythere"> Hey there!👋 I'm</p>
            <h1 id="myname">Oğuzhan Özenç</h1>
            <p id="aboutmeparagraph">
              I'm a front-end developer who finds the journey from concept to
              application incredibly rewarding. Personally, I've always been
              fascinated by projects that tell stories, helping people share
              their stories, and create impactful experiences. Software
              development allows me to turn ideas into reality, which is why I
              enjoy focusing on improving my skills in the front-end world.
            </p>

            <a href="/About" className="btn" id="moreaboutmebtn">
              More about me&raquo;
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
