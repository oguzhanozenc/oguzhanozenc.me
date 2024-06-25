import React, { useState } from "react";
import Header from "./Header";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

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
      <Section key="skills-section">
        <Skills
          defaultSection={section}
          onSectionChange={handleSectionChange}
        />
      </Section>
      <Section key="portfolio-section">
        <Portfolio
          defaultSection={section}
          onSectionChange={handleSectionChange}
        />
      </Section>
      <Section key="contact-section">
        <Contact
          defaultSection={section}
          onSectionChange={handleSectionChange}
        />
      </Section>
    </>
  );
}
