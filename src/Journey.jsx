import React from "react";

import "./stylesjourney.css";
import journeyData from "./journeyData.json";
import { LuSparkles } from "react-icons/lu";
import "non.geist/mono";
import "non.geist";

export default function Journey() {
  const JourneyTimeline = ({ journeyData }) => {
    return (
      <div className="journey-timeline">
        <h1>Journey </h1>
        {journeyData.map((milestone, index) => (
          <div key={index} className="milestone">
            <div className="content">
              <div className="journeyyear">
                <h2>{milestone.year}</h2>
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
                  <div className="window-container">
                    <div className="window-controls">
                      <div className="window-control"></div>
                      <div className="window-control yellow"></div>
                      <div className="window-control green"></div>
                    </div>
                  </div>
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
    <section className="journeypage" id="journey">
      <section className="journeysection" id="journeysection">
        <JourneyTimeline journeyData={journeyData} />
      </section>
    </section>
  );
}
