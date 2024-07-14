import React from "react";
import "../css/Journey.css";

import journeyData from "./journeyData.json";
import { LuSparkles } from "react-icons/lu";

export default function Journey() {
  const JourneyTimeline = ({ journeyData }) => {
    return (
      <div className="journey-timeline">
        <h2 className="sectiontitle">Journey </h2>
        {journeyData.map((milestone, index) => (
          <div key={index} className="milestone">
            <div className="content">
              <div className="journeyyear">
                <h3>{milestone.year}</h3>
              </div>
              <div className="roadcontainer">
                <div className="dot">
                  <LuSparkles />
                </div>
                <div className="line"></div>
              </div>
              <div className="journey--details">
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>

                <div className="milestone--img">
                  <img src={milestone.image} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="journeypage container" id="journey">
      <section className="journeysection container" id="journeysection">
        <JourneyTimeline journeyData={journeyData} />
      </section>
    </section>
  );
}
