import React from "react";

import { HiOutlineMail } from "react-icons/hi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import {
  PiTelegramLogoBold,
  PiReadCvLogoBold,
  PiSpotifyLogoBold,
} from "react-icons/pi";

export default function SocialMedia() {
  return (
    <section className="socialmedia--container">
      <p id="online">Online</p>
      <div>
        <a href="https://github.com/oguzhanozenc" target="_blank">
          <FiGithub />
        </a>
      </div>

      <div>
        <a href="https://www.linkedin.com/in/oguzhanozenc" target="_blank">
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
        <a href="https://open.spotify.com/user/11148079894" target="_blank">
          <PiSpotifyLogoBold />
        </a>
      </div>
    </section>
  );
}
