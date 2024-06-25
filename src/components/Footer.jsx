import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { PiTelegramLogoBold, PiPhoneCall } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";

import "./Footer.css";

export default function Footer() {
  const slogans = [
    "Securitas Catenae Truncorum!",
    "multidimensional blocksec engineering.",
    "interplanetary crypto defenders.",
    "boutique blockchain security solutions.",
    "inventing the future of blockchain security.",
  ];

  const [currentSlogan, setCurrentSlogan] = useState("");

  useEffect(() => {
    const generateSlogan = () => {
      const randomIndex = Math.floor(Math.random() * slogans.length);
      return slogans[randomIndex];
    };
    const slogan = generateSlogan();
    setCurrentSlogan(slogan);
  }, []);

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
          <div id="footerlogo">
            <div id="footerlogo--img">
              <Link to="/">
                <img src="/navbarlogo.png" alt="" />
              </Link>
            </div>
            <div id="slogan">
              <p>{currentSlogan}</p>
            </div>
          </div>
          <div className="social-media">
            <div className="mailandphone">
              <div>
                <small>
                  <a href="mailto:info@offbeatsecurity.xyz">
                    <HiOutlineMail /> info@offbeatsecurity.xyz
                  </a>
                </small>
              </div>
              <div>
                <small>
                  <a
                    href="tel:+13072019499"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <PiPhoneCall /> +1-307-201-9499
                  </a>
                </small>
              </div>
            </div>
            <div className="footer-socialmediacontainer">
              <div>
                <a
                  href="https://t.me/devtooligan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <PiTelegramLogoBold />
                </a>
              </div>
              <div>
                <a
                  href="https://x.com/OffbeatSecurity"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiTwitterXLine />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/offbeatsecurity"
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
              <a href="#home" className="nav-link heading-item">
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
              href="#about"
              className="nav-link"
              onClick={() => handleNavClick("about")}
            >
              About
            </a>
          </div>

          <div>
            <a
              href="#people"
              className="nav-link"
              onClick={() => handleNavClick("people")}
            >
              Our People
            </a>
          </div>

          <div>
            <a
              href="#foundations"
              className="nav-link"
              onClick={() => handleNavClick("foundations")}
            >
              Foundations
            </a>
          </div>

          <div>
            <a
              href="#approach"
              className="nav-link"
              onClick={() => handleNavClick("approach")}
            >
              Our Approach
            </a>
          </div>

          <div>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </a>
          </div>

          <div>
            <Link to="/blog">Blog</Link>
          </div>
        </div>
      </section>
      <div id="copyright">
        <p>
          &copy; {new Date().getFullYear()} Offbeat Security. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
}
