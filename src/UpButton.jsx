import React from "react";
import { AiOutlineRocket } from "react-icons/ai";
function UpButton() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button onClick={handleScrollToTop} className="up-button">
      <AiOutlineRocket />
    </button>
  );
}

export default UpButton;
