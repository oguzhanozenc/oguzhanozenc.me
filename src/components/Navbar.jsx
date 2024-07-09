import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { TbMap2, TbMessageChatbot } from "react-icons/tb";
import { RiArrowRightLine } from "react-icons/ri";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" && location.hash === "";

  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

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

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const renderNavLink = (to, icon, text) => {
    const isActive = location.pathname === to || (isHomePage && to === "/");
    const isHovered = hoveredIcon === to.replace("/", "");
    const linkText = isOpen && <span className="nav-text">{text}</span>;

    return (
      <div
        key={to}
        className={`nav-link ${isActive ? "active" : ""}`}
        onMouseEnter={() => setHoveredIcon(to.replace("/", ""))}
        onMouseLeave={() => setHoveredIcon(null)}
      >
        {isHomePage ? (
          <a
            href={to === "/" ? "#home" : to}
            className="nav-link"
            onClick={(e) => handleNavClick(to, e)}
          >
            {icon}
            {isOpen && <span className="nav-text">{text}</span>}
          </a>
        ) : (
          <Link to={to} className="nav-link">
            {icon}
            {isOpen && <span className="nav-text">{text}</span>}
          </Link>
        )}
        {!isOpen && <span className="hovered-text">{text}</span>}
      </div>
    );
  };

  return (
    <nav className="navbar">
      <div className={`navbarmenu ${isOpen ? "open" : ""}`}>
        <div className="navbarlogo">
          <Link to="/" className="nav-link">
            <img src="./me2.png" alt="" />{" "}
            {isOpen && (
              <div className="title-container">
                <p>Oğuzhan Özenç</p>
                <small>Front-end Developer</small>
              </div>
            )}
          </Link>
        </div>
        <div>
          <button className="navbarbtn" onClick={handleToggle}>
            <RiArrowRightLine />
          </button>
        </div>
        <div className="navbarmenu-links">
          <div className="home-icon">
            {renderNavLink("/", <RiHomeSmile2Line />, "Home")}
          </div>
          {[
            {
              to: "/#recentprojects",
              icon: <IoLayersOutline />,
              text: "Projects",
            },
            { to: "/journey", icon: <TbMap2 />, text: "Journey" },
            { to: "/#contact", icon: <TbMessageChatbot />, text: "Contact" },
          ].map(({ to, icon, text }) => renderNavLink(to, icon, text))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
