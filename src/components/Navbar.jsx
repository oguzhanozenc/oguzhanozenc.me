import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../css/Navbar.css";
import { RiHomeSmile2Line } from "react-icons/ri";
import { IoLayersOutline } from "react-icons/io5";
import { TbMap2, TbMessageChatbot } from "react-icons/tb";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/" && location.hash === "";

  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbarmenu">
        <div className="navbarmenu-links">
          {[
            { to: "/", icon: <RiHomeSmile2Line />, text: "Home" },
            { to: "/projects", icon: <IoLayersOutline />, text: "Projects" },
            { to: "/journey", icon: <TbMap2 />, text: "Journey" },
            { to: "/contact", icon: <TbMessageChatbot />, text: "Contact" },
          ].map(({ to, icon, text }) => (
            <div
              key={to}
              className={`nav-link ${location.pathname === to ? "active" : ""}`}
              onMouseEnter={() => setHoveredLink(to)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Link to={to} className="nav-link">
                {icon}
                {hoveredLink === to && (
                  <span className="hovered-text">{text}</span>
                )}
              </Link>
            </div>
          ))}
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
