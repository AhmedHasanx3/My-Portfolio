import React from "react";
import { motion } from "framer-motion";
import { ThemeProvider, useTheme } from "./ThemeContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import CvPreview from "./components/CvPreview";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const bubbleVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 0.5, scale: 1 },
};

const AppContent: React.FC = () => {
  const { theme } = useTheme();

  const Bubbles =
    theme === "dark"
      ? "bg-emerald-600"
      : "bg-linear-to-r from-pink-500 to-purple-600";
  const sectionBg =
    theme === "dark"
      ? "bg-gray-950"
      : "bg-gradient-to-br from-purple-600 via-red-300 to-purple-400";

  const bubbles = Array.from({ length: 150 });

  return (
    <div
      className={`relative ${sectionBg} transition-colors duration-300 min-h-screen w-full overflow-hidden`}
    >
      {/* Bubble Background */}{" "}
      <div className="absolute inset-0 z-0">
        {bubbles.map((_, i) => {
          const size = Math.random() * 40 + 20;
          return (
            <motion.div
              key={i}
              className={`absolute rounded-full ${Bubbles}`}
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              variants={bubbleVariants}
              initial="hidden"
              animate="visible"
              transition={{
                duration: Math.random() * 5 + 2,
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />
          );
        })}{" "}
      </div>
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Testimonials />
        <CvPreview />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      {" "}
      <AppContent />{" "}
    </ThemeProvider>
  );
};

export default App;
