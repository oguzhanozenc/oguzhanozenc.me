import React from "react";
import "./Header.css";
import Skills from "./Skills";
import logo from "/logohorizontal-white.png";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";

export default function Header() {
  return (
    <header>
      <section className="header" id="home">
        <div className="header-container">
          <div className="headercontainer-text">
            <div className="headercontent">
              <p id="heythere">Hey there!👋 I'm</p>
              <div className="header-img">
                <img src={logo} alt="Logo" />
              </div>
              <p className="header-about">
                I'm a front-end developer who finds the journey from concept to
                application incredibly rewarding. I've always been fascinated by
                projects that tell stories, helping people share their stories,
                and create impactful experiences. Software development allows me
                to turn ideas into reality, and I enjoy focusing on improving my
                skills in the front-end world.{" "}
                <a href="/About" className="moreaboutmebtn" id="moreaboutmebtn">
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
      </section>
    </header>
  );
}
