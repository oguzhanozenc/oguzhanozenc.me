import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSolidMessage } from "react-icons/bi";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const [isScrolled, setIsScrolled] = useState(false);

  const handleNavClick = (hash) => {
    if (!isHomePage) {
      navigate(`/#${hash}`);
    } else {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : "transparent"}`}>
      <div className="navbarlogo" key="navbarlogo">
        {!isScrolled && (
          <Link to="/" key="navbarlink">
            <img src="/logo-white.png" alt="Logo" />
          </Link>
        )}
      </div>
      <div className="navbarmenu">
        <div>
          {isHomePage ? (
            <a
              href="#home"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
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
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("recentprojects");
            }}
          >
            Projects
          </a>
        </div>

        <div className="nav-link">
          <Link to="/about">About</Link>
        </div>

        <div className="nav-link">
          <Link to="/journey">Journey</Link>
        </div>

        <div className="nav-link">
          <Link to="/blog">Blog</Link>
        </div>

        <div id="contactbtn" className="navbutton nav--contactbtn">
          <a
            href="#contact"
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("contact");
            }}
          >
            Contact <BiSolidMessage />
          </a>
        </div>
      </div>
    </nav>
  );
}
