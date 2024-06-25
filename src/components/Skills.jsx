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
      <h2 className="sectionheading">
        <PiMagicWand /> Skills
      </h2>
      <div className="skillscontainer">
        <div className="frontend">
          <h3>Front-end</h3>
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
            <LiaSass />
            <p>Sass</p>
          </div>
          <div>
            <GiJourney />
          </div>
        </div>

        <div className="designskills">
          <h3>Design</h3>
          <div>
            <FaFigma />
            <p>Figma</p>
          </div>
          <div>
            <HiOutlineRectangleGroup />
            <p>Responsive Design</p>
          </div>
          <div>
            <IoSparklesOutline />
            <p>UI/UX Design</p>
            <small>Basics</small>
          </div>
          <div>
            <PiMagicWand />
            <p>Graphic Design</p>
            <small>Adobe CC</small>
          </div>
        </div>
      </div>
    </section>
  );
}
