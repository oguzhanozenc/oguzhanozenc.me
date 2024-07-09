import React, { useState } from "react";
import Header from "./Header";
import Skills from "./Skills";

import Testimonials from "./Testimonials";

const Section = ({ children }) => {
  return <section>{children}</section>;
};

export default function Home() {
  const [section, setSection] = useState("company");

  const handleSectionChange = (newSection) => {
    setSection(newSection);
  };

  return (
    <>
      <Section key="header-section">
        <Header
          defaultSection={section}
          onSectionChange={handleSectionChange}
        />
      </Section>
    </>
  );
}
