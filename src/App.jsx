import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Journey from "./components/Journey";
import ProjectPage from "./components/ProjectPage";
import Footer from "./components/Footer";
import ScrollToSection from "./components/ScrollToSection";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:projectIndex" element={<ProjectPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/journey" element={<Journey />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
