import React from "react";
import "./Skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LiaCss3 } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { RiBootstrapLine } from "react-icons/ri";
import { LiaSass } from "react-icons/lia";
import { GiJourney } from "react-icons/gi";
import { IoSparklesOutline } from "react-icons/io5";
import { HiOutlineRectangleGroup } from "react-icons/hi2";
import { FaFigma } from "react-icons/fa";
import { PiMagicWand } from "react-icons/pi";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skillscontainer">
        <div>
          <AiOutlineHtml5 />
          <p>HTML</p>
        </div>
        <div>
          <LiaCss3 />
          <p>CSS</p>
        </div>
        <div>
          <RiJavascriptLine />
          <p>JavaScript</p>
        </div>
        <div>
          <IoLogoReact />
          <p>React</p>
        </div>
        <div>
          <RiBootstrapLine />
          <p>Bootstrap</p>
        </div>
        <div>
          <IoSparklesOutline />
          <p>UI/UX Design</p>
        </div>{" "}
        <div>
          <HiOutlineRectangleGroup />
          <p>Responsive Design</p>
        </div>{" "}
        <div>
          <FaFigma />
          <p>Figma</p>
        </div>{" "}
      </div>
    </section>
  );
}
