import React, { useEffect } from "react";
import { useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Transition } from "react-transition-group";

import UpButton from "./UpButton";
import Navbar from "./Navbar";
import MainContent from "./MainContent";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import ProjectPage from "./ProjectPage";
import About from "./About";
import Journey from "./Journey";
import Contact from "./Contact";

import "non.geist";
import "non.geist/mono";

function AnimatedRoutes({ menuOpen, setMenuOpen }) {
  let location = useLocation();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    const bodyElement = document.querySelector("body");

    if (htmlElement && bodyElement) {
      htmlElement.classList.toggle("menu-open", menuOpen);
      bodyElement.classList.toggle("menu-open", menuOpen);
    }
  }, [menuOpen]);

  const pageStyles = menuOpen
    ? {
        backgroundColor: "transparent",
        filter: "brightness(50%)",
        transition: "all 100ms ease",
        borderRadius: "0.5rem",
      }
    : {};

  return (
    <Transition in={true} timeout={300} key={location.key}>
      {(state) => (
        <div
          style={{
            ...pageStyles,
            transition: `opacity 300ms ease-in-out`,
            opacity: state === "entered" ? 1 : 0,
          }}
        >
          <Routes location={location}>
            <Route path="/" element={<MainContent />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Project/:projectIndex" element={<ProjectPage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Journey" element={<Journey />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      )}
    </Transition>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div>
        <section className="page">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <AnimatedRoutes menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <UpButton />
        </section>
      </div>
    </Router>
  );
}
