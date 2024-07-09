import React from "react";
import "../css/Header.css";
import Skills from "./Skills";
import logo from "/logohorizontal-black.png";
import { FaRegHandPeace } from "react-icons/fa6";
import { PiProjectorScreenChartBold } from "react-icons/pi";
import { GoDot, GoDotFill } from "react-icons/go";

export default function Header() {
  return (
    <header>
      <section className="header" id="home">
        <div className="header-container">
          <div className="header-content">
            <div className="headercontainer-text">
              <h1>I'm Oguzhan</h1>{" "}
              <p className="header-about">
                Front-end developer from Istanbul, Turkey.{" "}
              </p>{" "}
              <a href="/About" className="moreaboutmebtn" id="moreaboutmebtn">
                More &raquo;
              </a>
            </div>{" "}
            <div className="profilepic-container">
              <img src="./me.png" alt="" />
              <div className="available">
                <p>
                  <GoDotFill /> AVAILABLE FOR WORK
                </p>
              </div>
            </div>
          </div>

          <div className="header-container-buttons">
            <a href="#recentprojects" className="btn">
              See my work! <PiProjectorScreenChartBold />
            </a>{" "}
            <a href="#contact" className="btn">
              Say Hello! <FaRegHandPeace />
            </a>
          </div>
        </div>
      </section>
    </header>
  );
}
