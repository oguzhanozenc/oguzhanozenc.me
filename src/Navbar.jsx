import React, { useState, useEffect, useRef } from "react";
import SocialMedia from "./SocialMedia";
import { NavLink } from "react-router-dom";
import "./stylesnavbar.css";
import ME2 from "../public/me2.png";
import {
  PiMagicWand,
  PiProjectorScreenChart,
  PiPersonSimpleRunBold,
  PiPaperPlaneTiltBold,
} from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";
import { GiJourney } from "react-icons/gi";
import { BsFileText } from "react-icons/bs";
import { RiSpaceShipLine } from "react-icons/ri";

export default function Navbar({ menuOpen, setMenuOpen }) {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const menuRef = useRef(null);

  function handleNavLinkClick(item) {
    setActiveItem(item);

    if (item === "Skills") {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1200);
      setMenuOpen(false);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  function handleMenuToggle() {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  }

  return (
    <div key={activeItem} ref={menuRef}>
      {isMobile && (
        <nav className="smallerscreensizenav">
          <div className="hamburger-icon--container">
            <div className="topnavcontainer">
              <div>
                <button className="hamburger-icon" onClick={handleMenuToggle}>
                  <RiSpaceShipLine id="menuiconitself" />
                </button>
              </div>
              <div>
                <p className={`flip`}>{activeItem}</p>
              </div>
            </div>
          </div>
        </nav>
      )}

      {isMobile && menuOpen && (
        <div className={`mobile-menu-open`}>
          <div id="navbar--top-line" onClick={() => setMenuOpen(false)}>
            <hr />
          </div>

          <div>
            <ul className="navbar--list">
              <div className="avatar">
                <div className="navbar--icon">
                  <img src={ME2} alt="Profile" className="navbar--image" />
                </div>
                <div className="navbar--infotext">
                  <p>Oğuzhan Özenç</p>
                  <small>Front-end Developer</small>
                </div>
              </div>
              <li className={activeItem === "Home" ? "active-nav" : ""}>
                <NavLink to="/" onClick={() => handleNavLinkClick("Home")}>
                  <HiOutlineSparkles /> Home
                </NavLink>
              </li>
              <li className={activeItem === "Skills" ? "active-nav" : ""}>
                <NavLink
                  to="/#skills"
                  onClick={() => handleNavLinkClick("Skills")}
                >
                  <PiMagicWand /> Skills
                </NavLink>
              </li>
              <li className={activeItem === "Portfolio" ? "active-nav" : ""}>
                <NavLink
                  to="/Portfolio"
                  onClick={() => handleNavLinkClick("Portfolio")}
                >
                  <PiProjectorScreenChart /> Portfolio
                </NavLink>
              </li>
              <li className={activeItem === "About" ? "active-nav" : ""}>
                <NavLink
                  to="/About"
                  onClick={() => handleNavLinkClick("About")}
                >
                  <PiPersonSimpleRunBold /> More About Me?
                </NavLink>
              </li>
              <li className={activeItem === "Journey" ? "active-nav" : ""}>
                <NavLink
                  to="/Journey"
                  onClick={() => handleNavLinkClick("Journey")}
                >
                  <GiJourney /> My Journey
                </NavLink>
              </li>
              <li className={activeItem === "Contact" ? "active-nav" : ""}>
                <NavLink
                  to="/Contact"
                  onClick={() => handleNavLinkClick("Contact")}
                >
                  <PiPaperPlaneTiltBold /> Contact
                </NavLink>
              </li>
              <li className={activeItem === "Resume" ? "active-nav" : ""}>
                <a
                  href="/Oğuzhan Özenç_2024_Resume_en_website.pdf"
                  onClick={() => handleNavLinkClick("Resume")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsFileText /> Resume
                  <FiArrowUpRight />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {!isMobile && (
        <nav className="nav bigger-screensize-nav">
          <div>
            <div className="nav--navbar">
              <ul className="navbar--list">
                <div className="avatar">
                  <div className="navbar--icon">
                    <img src={ME2} alt="Profile" className="navbar--image" />
                  </div>
                  <div className="navbar--infotext">
                    <p>Oğuzhan Özenç</p>
                    <small>Front-end Developer</small>
                  </div>
                </div>
                <li className={activeItem === "Home" ? "active-nav" : ""}>
                  <NavLink to="/" onClick={() => handleNavLinkClick("Home")}>
                    <HiOutlineSparkles /> Home
                  </NavLink>
                </li>

                <li className={activeItem === "Skills" ? "active-nav" : ""}>
                  <NavLink
                    to="/#skills"
                    onClick={() => handleNavLinkClick("Skills")}
                  >
                    <PiMagicWand /> Skills
                  </NavLink>
                </li>

                <li className={activeItem === "Portfolio" ? "active-nav" : ""}>
                  <NavLink
                    to="/Portfolio"
                    onClick={() => handleNavLinkClick("Portfolio")}
                  >
                    <PiProjectorScreenChart /> Portfolio
                  </NavLink>
                </li>

                <li className={activeItem === "About" ? "active-nav" : ""}>
                  <NavLink
                    to="/About"
                    onClick={() => handleNavLinkClick("About")}
                  >
                    <PiPersonSimpleRunBold /> More About Me?
                  </NavLink>
                </li>
                <li className={activeItem === "Journey" ? "active-nav" : ""}>
                  <NavLink
                    to="/Journey"
                    onClick={() => handleNavLinkClick("Journey")}
                  >
                    <GiJourney /> My Journey
                  </NavLink>
                </li>
                <li className={activeItem === "Contact" ? "active-nav" : ""}>
                  <NavLink
                    to="/Contact"
                    onClick={() => handleNavLinkClick("Contact")}
                  >
                    <PiPaperPlaneTiltBold /> Contact
                  </NavLink>
                </li>
                <li className={activeItem === "Resume" ? "active-nav" : ""}>
                  <a
                    href="/Oğuzhan Özenç_2024_Resume_en_website.pdf"
                    onClick={() => handleNavLinkClick("Resume")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsFileText /> Resume
                    <FiArrowUpRight />
                  </a>
                </li>
              </ul>
            </div>
            <div id="seperator">
              <hr />
            </div>
            <SocialMedia />
          </div>
        </nav>
      )}
    </div>
  );
}
