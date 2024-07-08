import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({
  icon,
  text,
  hash,
  to,
  handleNavClick,
  isOpen,
  isActive,
}) {
  const handleClick = (e) => {
    if (to) {
      return;
    }
    handleNavClick(hash, e);
  };

  return (
    <div className={`nav-link ${isActive ? "active" : ""}`}>
      {to ? (
        <Link to={to} className="nav-link">
          {icon}
          <span className="nav-text">{text}</span>
        </Link>
      ) : (
        <a href={`#${hash}`} className="nav-link" onClick={handleClick}>
          {icon}
          <span className="nav-text">{text}</span>
        </a>
      )}
    </div>
  );
}
