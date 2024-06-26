import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiTelegramLogoBold, PiPhoneCall } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

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
    <footer>
      <section className="footer--container">
        <div className="footer-card">
          <div className="footerlogo">
            <Link to="/">
              <img src="/logohorizontal-white.png" alt="Oguzhan Ozenc Logo" />
            </Link>
          </div>
          <div>
            <div className="mailadress">
              <a href="mailto:oguzhanozenc10@gmail.com">
                <HiOutlineMail /> oguzhanozenc10@gmail.com
              </a>
            </div>
            <div className="social-media">
              <div>
                <a
                  href="https://t.me/oguzhanozenc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTelegramLogoBold />
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/oguzhanozencdev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXLine />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/oguzhanozenc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-permalinks">
          <div>
            {isHomePage ? (
              <a
                href="#home"
                className="footer-link heading-item"
                onClick={() => handleNavClick("home")}
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
              className="footer-link"
              onClick={() => handleNavClick("recentprojects")}
            >
              Projects
            </a>
          </div>

          <div className="footer-link">
            <Link to="/journey">Journey</Link>
          </div>

          <div className="footer-link">
            <Link to="/blog">Blog</Link>
          </div>

          <div>
            <a
              href="#contact"
              className="footer-link"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </div>
        </div>
      </section>
      <div id="copyright">
        <p>
          &copy; Designed and developed by Oguzhan Ozenc,{" "}
          {new Date().getFullYear()}.
        </p>
      </div>
    </footer>
  );
}
