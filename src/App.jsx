import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import ProjectPage from "./components/ProjectPage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ScrollToSection from "./components/ScrollToSection";
import { useEffect } from "react";

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <BodyClass />
      <div className="app-container">
        <div className="navbar-wrapper">
          <ConditionalNavbar />
        </div>
        <AnimatePresence mode="wait">
          <Routes>
            <Route
              path="/"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <Header />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/about"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <About />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/journey"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <Journey />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <Contact />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/projects"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <Projects />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/projects/:projectIndex"
              element={
                <div className="main-content">
                  <AnimateContent>
                    <ProjectPage />
                  </AnimateContent>
                  <ConditionalFooter />
                </div>
              }
            />
            <Route
              path="/resume"
              element={
                <AnimateContent>
                  <Resume />
                </AnimateContent>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

const AnimateContent = ({ children }) => {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const ConditionalFooter = () => {
  const location = useLocation();
  return location.pathname !== "/resume" ? <Footer /> : null;
};

const ConditionalNavbar = () => {
  const location = useLocation();
  return location.pathname !== "/resume" ? <Navbar /> : null;
};

const BodyClass = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/resume") {
      document.body.classList.add("resume-body");
    } else {
      document.body.classList.remove("resume-body");
    }
  }, [location.pathname]);

  return null;
};

export default App;
