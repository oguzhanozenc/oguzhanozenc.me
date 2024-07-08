import React from "react";
import "../css/Skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { LiaCss3 } from "react-icons/lia";
import { RiJavascriptLine } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";

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
      </div>
    </section>
  );
}
