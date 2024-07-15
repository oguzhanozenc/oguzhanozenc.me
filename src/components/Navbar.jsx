import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../css/Navbar.css";

import { IoLayersOutline } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import { TbSmartHome, TbUserCircle, TbMessageChatbot } from "react-icons/tb";
import { PiReadCvLogoBold } from "react-icons/pi";

const Navbar = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbarmenu">
        <div className="navbarmenu-links">
          <Link
            to="/"
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <TbSmartHome />
            {hoveredLink === "/" && <span className="hovered-text">Home</span>}
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/about")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <TbUserCircle />
            {hoveredLink === "/about" && (
              <span className="hovered-text">About</span>
            )}
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <IoLayersOutline />
            {hoveredLink === "/projects" && (
              <span className="hovered-text">Projects</span>
            )}
          </Link>
          <Link
            to="/journey"
            className={`nav-link ${
              location.pathname === "/journey" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/journey")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <HiOutlineMap />
            {hoveredLink === "/journey" && (
              <span className="hovered-text">Journey</span>
            )}
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/contact")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <TbMessageChatbot />
            {hoveredLink === "/contact" && (
              <span className="hovered-text">Contact</span>
            )}
          </Link>{" "}
          <Link
            to="/resume"
            className={`nav-link ${
              location.pathname === "/resume" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/resume")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <PiReadCvLogoBold />
            {hoveredLink === "/resume" && (
              <span className="hovered-text">Resume</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
