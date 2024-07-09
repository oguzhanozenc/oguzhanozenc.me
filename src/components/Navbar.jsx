import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { TbMap2 } from "react-icons/tb";
import { TbMessageChatbot } from "react-icons/tb";
import { RiArrowRightLine } from "react-icons/ri";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleNavClick = (hash, e) => {
    e.preventDefault();
    if (!isHomePage) {
      navigate(`/#${hash}`);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbarmenu ${isOpen ? "open" : ""}`}>
        <div className="navbarlogo">
          {isHomePage ? (
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => handleNavClick("home", e)}
            >
              <img src="./logo.png" alt="" />
            </a>
          ) : (
            <Link to="/" className="nav-link">
              <img src="./logo.png" alt="" />
            </Link>
          )}
        </div>
        <div>
          <button className="navbarbtn" onClick={handleToggle}>
            <RiArrowRightLine />
          </button>
        </div>
        <div
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          onMouseEnter={() => setHoveredIcon("home")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          {isHomePage ? (
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => handleNavClick("home", e)}
            >
              <RiHomeSmile2Line />
              {hoveredIcon === "home" && !isOpen && (
                <span className="nav-text">Home</span>
              )}
            </a>
          ) : (
            <Link to="/" className="nav-link">
              <RiHomeSmile2Line />
              {hoveredIcon === "home" && !isOpen && (
                <span className="nav-text">Home</span>
              )}
            </Link>
          )}
        </div>
        <div
          className={`nav-link ${
            location.pathname === "/journey" ? "active" : ""
          }`}
          onMouseEnter={() => setHoveredIcon("projects")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            href="#recentprojects"
            className="nav-link"
            onClick={(e) => handleNavClick("recentprojects", e)}
          >
            {isOpen ? (
              <>
                <IoLayersOutline /> Projects
              </>
            ) : (
              <>
                <IoLayersOutline />
                {hoveredIcon === "projects" && !isOpen && (
                  <span className="nav-text">Projects</span>
                )}
              </>
            )}
          </a>
        </div>
        <div
          className={`nav-link ${
            location.pathname === "/journey" ? "active" : ""
          }`}
          onMouseEnter={() => setHoveredIcon("journey")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <Link to="/journey" className="nav-link">
            {isOpen ? (
              <>
                <TbMap2 />
                Journey
              </>
            ) : (
              <>
                <TbMap2 />
                {hoveredIcon === "journey" && !isOpen && (
                  <span className="nav-text">Journey</span>
                )}
              </>
            )}
          </Link>
        </div>
        <div
          className={`nav-link ${
            location.pathname === "/journey" ? "active" : ""
          }`}
          onMouseEnter={() => setHoveredIcon("contact")}
          onMouseLeave={() => setHoveredIcon(null)}
        >
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavClick("contact", e)}
          >
            {isOpen ? (
              <>
                <TbMessageChatbot />
                Contact
              </>
            ) : (
              <>
                <TbMessageChatbot />
                {hoveredIcon === "contact" && !isOpen && (
                  <span className="nav-text">Contact</span>
                )}
              </>
            )}
          </a>
        </div>
      </div>
    </nav>
  );
}
