import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/LetsWork.css";

import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";

export default function LetsWork() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    const email = "oguzhanozenc10@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div className="worktogether">
      <h2 className="sectiontitle">Let’s work together.</h2>
      <div className="aboutme-text">
        <p>To create products that tell stories.</p>
      </div>
      <div className="worktogetherbtns">
        {" "}
        <div>
          <Link
            to="/contact"
            className="button button-pulsating"
            id="contactbtn"
          >
            Contact <TbMessageChatbot />
          </Link>
        </div>
        <div>
          <button id="copybtn" className="button" onClick={handleCopyEmail}>
            <span className={`button-text ${copied ? "copied-animation" : ""}`}>
              {copied ? (
                <>
                  <LuCopyCheck /> Copying...
                </>
              ) : (
                <>
                  <LuCopy /> Copy Email
                </>
              )}
            </span>
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
