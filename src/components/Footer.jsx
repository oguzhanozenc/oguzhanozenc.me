import React from "react";
import { Link } from "react-router-dom";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import "../css/Footer.css";

const socialMedia = {
  mail: "mailto:oguzhanozenc10@gmail.com",
  github: "https://github.com/oguzhanozenc",
  telegram: "https://t.me/oguzhanozenc",
  twitter: "https://x.com/oguzhanozencdev",
};

const getSocialIcon = (key) => {
  switch (key) {
    case "mail":
      return <HiOutlineMail />;
    case "github":
      return <FaGithub />;
    case "telegram":
      return <FaTelegram />;
    case "twitter":
      return <RiTwitterXLine />;
    default:
      return null;
  }
};

export default function Footer() {
  return (
    <footer>
      <section className="footer--container">
        <div className="footer-card">
          <div className="card-topsection">
            <div className="footerlogo">
              <Link to="/">
                <img src="/logo.png" alt="Oguzhan Ozenc Logo" />
              </Link>
            </div>{" "}
            <div className="cardtitle">
              <p>Oguzhan Ozenc</p>
              <small>Front-end Developer</small>
            </div>
          </div>
          <div>
            <div className="footersocials">
              {Object.keys(socialMedia).map((key) => (
                <a
                  key={key}
                  href={socialMedia[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(key)}
                </a>
              ))}
            </div>{" "}
          </div>
        </div>
      </section>
    </footer>
  );
}

/*     <div id="copyright">
        <p>
          &copy; Designed and developed by Oguzhan Ozenc,{" "}
          {new Date().getFullYear()}.
        </p>
      </div> */
