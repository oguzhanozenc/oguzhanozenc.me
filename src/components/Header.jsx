import React from "react";
import "../css/Header.css";

import { Link } from "react-router-dom";
import { PiHandPeace } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";

export default function Header() {
  return (
    <header>
      <section className="header" id="home">
        <div className="header-container">
          <div className="header-content">
            <div className="headercontainer-text">
              <h1>I'm Oguzhan</h1>{" "}
              <p className="header-title">
                Front-end developer from Istanbul, Turkey.
              </p>{" "}
              <div className="header-container-buttons">
                <div>
                  <Link to="/projects" className="button">
                    My Work
                    <MdKeyboardDoubleArrowRight />
                  </Link>{" "}
                </div>
                <div>
                  <Link to="/contact" className="button button-pulsating">
                    Say Hello! <PiHandPeace />
                  </Link>
                </div>
              </div>
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
        </div>
      </section>
    </header>
  );
}
