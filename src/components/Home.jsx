import React, { useState } from "react";
import Header from "./Header";
import Skills from "./Skills";
import RecentProjects from "./RecentProjects";
import Testimonials from "./Testimonials";
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

      <Section key="projects-section">
        <RecentProjects
          defaultSection={section}
          onSectionChange={handleSectionChange}
        />
      </Section>

      <Section key="projects-section">
        <Testimonials
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
