import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSolidMessage } from "react-icons/bi";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbarlogo">
        <Link to="/">
          <img src="/logo-white.png" alt="Logo" />
        </Link>
      </div>
      <div className={`navbarmenu ${isOpen ? "open" : ""}`}>
        <div>
          {isHomePage ? (
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => handleNavClick("home", e)}
            >
              Home
            </a>
          ) : (
            <Link to="/" className="nav-link">
              Home
            </Link>
          )}
        </div>
        <div>
          <a
            href="#recentprojects"
            className="nav-link"
            onClick={(e) => handleNavClick("recentprojects", e)}
          >
            Projects
          </a>
        </div>
        <div className="nav-link">
          <Link to="/journey">Journey</Link>
        </div>
        <div className="nav-link">
          <Link to="/blog">Blog</Link>
        </div>
        <div className="navbutton nav--contactbtn">
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => handleNavClick("contact", e)}
          >
            Contact <BiSolidMessage />
          </a>
        </div>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`hamburger-icon ${isOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
