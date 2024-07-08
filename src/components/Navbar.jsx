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
  const [hoveredItem, setHoveredItem] = useState(null);

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
        <NavItem
          icon={<RiHomeSmile2Line />}
          text="Home"
          hash="home"
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          handleNavClick={handleNavClick}
          isOpen={isOpen}
          isActive={isHomePage}
        />
        <NavItem
          icon={<IoLayersOutline />}
          text="Projects"
          hash="recentprojects"
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          handleNavClick={handleNavClick}
          isOpen={isOpen}
          isActive={location.pathname === "/journey"}
        />
        <NavItem
          icon={<TbMap2 />}
          text="Journey"
          to="/journey"
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          handleNavClick={handleNavClick}
          isOpen={isOpen}
          isActive={location.pathname === "/journey"}
        />
        <NavItem
          icon={<TbMessageChatbot />}
          text="Contact"
          hash="contact"
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          handleNavClick={handleNavClick}
          isOpen={isOpen}
          isActive={location.pathname === "/journey"}
        />
      </div>
    </nav>
  );
}

function NavItem({
  icon,
  text,
  hash,
  to,
  hoveredItem,
  setHoveredItem,
  handleNavClick,
  isOpen,
  isActive,
}) {
  return (
    <div
      className={`nav-link ${isActive ? "active" : ""}`}
      onMouseEnter={() => setHoveredItem(hash || text.toLowerCase())}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {to ? (
        <Link to={to} className="nav-link">
          {icon}
          {hoveredItem === text.toLowerCase() && !isOpen && (
            <span className="nav-text">{text}</span>
          )}
        </Link>
      ) : (
        <a
          href={`#${hash}`}
          className="nav-link"
          onClick={(e) => handleNavClick(hash, e)}
        >
          {icon}
          {hoveredItem === text.toLowerCase() && !isOpen && (
            <span className="nav-text">{text}</span>
          )}
        </a>
      )}
    </div>
  );
}
