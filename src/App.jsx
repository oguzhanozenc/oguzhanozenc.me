import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import ScrollToSection from "./components/ScrollToSection";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <div className="app-container">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/*" element={<Projects />}>
              <Route path=":projectIndex" element={<ProjectPage />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
