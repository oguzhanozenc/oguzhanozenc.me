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

function App() {
  return (
    <BrowserRouter>
      <ScrollToSection />
      <div className="app-container">
        <div className="navbar-wrapper">
          <Navbar />
        </div>
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <AnimateContent>
                    <Header />
                  </AnimateContent>
                }
              />
              <Route
                path="/about"
                element={
                  <AnimateContent>
                    <About />
                  </AnimateContent>
                }
              />
              <Route
                path="/journey"
                element={
                  <AnimateContent>
                    <Journey />
                  </AnimateContent>
                }
              />
              <Route
                path="/contact"
                element={
                  <AnimateContent>
                    <Contact />
                  </AnimateContent>
                }
              />
              <Route
                path="/projects"
                element={
                  <AnimateContent>
                    <Projects />
                  </AnimateContent>
                }
              />
              <Route
                path="/projects/:projectIndex"
                element={
                  <AnimateContent>
                    <ProjectPage />
                  </AnimateContent>
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
          <ConditionalFooter />
        </main>
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

export default App;
