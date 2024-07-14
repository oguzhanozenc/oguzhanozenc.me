import React from "react";
import "../css/Header.css";
import RecentProjects from "./RecentProjects";
import LetsWork from "./LetsWork";

import { Link } from "react-router-dom";
import { PiHandPeace } from "react-icons/pi";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const socialMedia = {
  email: "mailto:oguzhanozenc10@gmail.com",
  github: "https://github.com/oguzhanozenc",
  telegram: "https://t.me/oguzhanozenc",
  twitter: "https://x.com/oguzhanozencdev",
};

const getSocialIcon = (key) => {
  switch (key) {
    case "email":
      return <HiOutlineMail />;
    case "github":
      return <FaGithub />;
    case "telegram":
      return <FaTelegram />;
    case "twitter":
      return <RiTwitterXLine />;
    default:
      return null;
  }
};

export default function Header() {
  return (
    <header>
      <section className="header" id="home">
        <div className="header-container">
          <div className="header-content">
            <div className="headercontainer-text">
              <h1>I’m Oguzhan</h1>
              <p className="header-title">
                Front-end developer based in Istanbul, Turkey.
              </p>
              <div className="header-container-buttons">
                <div>
                  <Link to="/projects" className="button">
                    My Work
                    <MdKeyboardDoubleArrowRight />
                  </Link>
                </div>
                <div>
                  <Link to="/contact" className="button button-pulsating">
                    Say Hello! <PiHandPeace />
                  </Link>
                </div>
              </div>{" "}
            </div>{" "}
            <div className="headerrightside">
              <div className="profilepic-container">
                <img src="./me.png" alt="" />
                <div className="available">
                  <p>
                    <GoDotFill /> AVAILABLE FOR WORK
                  </p>
                </div>
              </div>{" "}
              <div className="headersocials">
                {Object.keys(socialMedia).map((key) => (
                  <a
                    key={key}
                    href={socialMedia[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {getSocialIcon(key)}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div>
            <RecentProjects />{" "}
          </div>
          <div>
            <LetsWork />
          </div>
        </div>
      </section>
    </header>
  );
}
