import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";

import { IoLayersOutline } from "react-icons/io5";
import { HiOutlineMap } from "react-icons/hi2";
import { TbSmartHome, TbUserCircle, TbMessageChatbot } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" && location.hash === "";

  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbarmenu">
        <div className="navbarmenu-links">
          <div
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onMouseEnter={() => setHoveredLink("/")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to="/" className="nav-link">
              <TbSmartHome />
              {hoveredLink === "/" && (
                <span className="hovered-text">Home</span>
              )}
            </Link>
          </div>
          <div
            className={`nav-link ${
              location.pathname === "/about" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/about")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to="/about" className="nav-link">
              <TbUserCircle />
              {hoveredLink === "/about" && (
                <span className="hovered-text">About</span>
              )}
            </Link>
          </div>
          <div
            className={`nav-link ${
              location.pathname === "/projects" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/projects")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to="/projects" className="nav-link">
              <IoLayersOutline />
              {hoveredLink === "/projects" && (
                <span className="hovered-text">Projects</span>
              )}
            </Link>
          </div>
          <div
            className={`nav-link ${
              location.pathname === "/journey" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/journey")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to="/journey" className="nav-link">
              <HiOutlineMap />
              {hoveredLink === "/journey" && (
                <span className="hovered-text">Journey</span>
              )}
            </Link>
          </div>
          <div
            className={`nav-link ${
              location.pathname === "/contact" ? "active" : ""
            }`}
            onMouseEnter={() => setHoveredLink("/contact")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <Link to="/contact" className="nav-link">
              <TbMessageChatbot />
              {hoveredLink === "/contact" && (
                <span className="hovered-text">Contact</span>
              )}
            </Link>
          </div>
        </div>
        <div className="navbar-avatar" id="navbar-avatar">
          <Link to="/" className="nav-link" id="avatar-link">
            <img src="./me2.png" alt="" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
