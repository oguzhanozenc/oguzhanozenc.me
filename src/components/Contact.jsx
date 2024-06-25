import React from "react";
import "./Contact.css";

import { FiGithub } from "react-icons/fi";
import { PiSpotifyLogoBold } from "react-icons/pi";
import { FiLinkedin } from "react-icons/fi";
import { PiTelegramLogoBold } from "react-icons/pi";
import { HiOutlineMail } from "react-icons/hi";

import { PiReadCvLogoBold } from "react-icons/pi";

import { FaArrowTurnDown } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="contactpage" id="contact">
      <h2 className="section-title" id="contact-title">
        Let's Connect!
      </h2>
      <section className="contactsection" id="contactsection">
        <div className="contactcontainer">
          <div className="contact-img">
            <img src="./contactimg.png" alt="" />
          </div>
          <div className="contact--text">
            <p>
              Feel free to reach out through my email at <FaArrowTurnDown />
              <br />
              <strong>
                <a href="mailto:oguzhanozenc10@gmail.com" id="mail">
                  oguzhanozenc10@gmail.com
                </a>
              </strong>
              <br />
              or connect with me on social media:
            </p>

            <section className="contact--socialmedia--container">
              <div>
                <a href="https://github.com/oguzhanozenc" target="_blank">
                  <FiGithub />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/oguzhanozenc"
                  target="_blank"
                >
                  <FiLinkedin />
                </a>
              </div>

              <div>
                <a href="mailto:oguzhanozenc10@gmail.com">
                  <HiOutlineMail />
                </a>
              </div>

              <div>
                <a href="https://t.me/oguzhanozenc" target="_blank">
                  <PiTelegramLogoBold />
                </a>
              </div>

              <div>
                <a href="https://read.cv/oguzhanozenc" target="_blank">
                  <PiReadCvLogoBold />
                </a>
              </div>

              <div>
                <a
                  href="https://open.spotify.com/user/11148079894"
                  target="_blank"
                >
                  <PiSpotifyLogoBold />
                </a>
              </div>
            </section>
          </div>
        </div>
      </section>
    </section>
  );
}
