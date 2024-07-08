import React from "react";
import "../css/Header.css";
import Skills from "./Skills";
import logo from "/logohorizontal-black.png";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export default function Header() {
  return (
    <header>
      <section className="header" id="home">
        <div className="mac-window">
          <div className="title-bar">
            <div className="buttons">
              <div className="button close"></div>
              <div className="button minimize"></div>
              <div className="button maximize"></div>
            </div>
          </div>
          <div className="header-container">
            <div className="headercontainer-text">
              <div className="headercontent">
                <h1>
                  I'm Oğuzhan, and I help people share their stories through
                  software development, turning ideas into reality.
                </h1>{" "}
                <p id="heythere"></p>
                <p className="header-about">
                  Hey there!👋 I'm I'm a front-end developer who finds the
                  journey from concept to application incredibly rewarding. I've
                  always been fascinated by projects that tell stories, helping
                  people share their stories, and create impactful experiences.
                  Software development allows me to turn ideas into reality, and
                  I enjoy focusing on improving my skills in the front-end
                  world.{" "}
                  <a
                    href="/About"
                    className="moreaboutmebtn"
                    id="moreaboutmebtn"
                  >
                    More about me&raquo;
                  </a>
                </p>{" "}
                <div className="headercontainer-buttons">
                  <a href="#recentprojects" className="btn">
                    See my work! <PiProjectorScreenChartBold />
                  </a>{" "}
                  <a href="#contact" className="btn">
                    Say Hello! <FaRegHandPeace />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}
