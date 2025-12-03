// Header.tsx
import React, { useEffect, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../ThemeContext";
import MyCV from "../assets/SYED_AHMED_MOHI_UDDIN_HASAN.pdf";

const links = ["home", "about", "skills", "projects", "experience", "contact"];
const HEADER_HEIGHT = 50; // adjust this according to your header height

const Header: React.FC = () => {
  const [active, setActive] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + HEADER_HEIGHT + 20; // extra 20px buffer
      for (const id of links) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        const h = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + h) {
          setActive(id);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme-based styling
  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const bgColor =
    theme === "dark"
      ? "bg-black/60 border-white/10 text-white"
      : "bg-white/40 border-black/10 text-black";

  const linkText = (id: string) =>
    active === id
      ? theme === "dark"
        ? "text-purple-400"
        : "text-pink-500/80"
      : theme === "dark"
      ? "text-gray-300 hover:text-white"
      : "text-gray-700 hover:text-black";

  const activeUnderline = theme === "dark" ? "bg-purple-400" : "bg-pink-500/80";

  const buttonBg =
    theme === "dark"
      ? "bg-gray-900 text-amber-300 hover:bg-gray-100 hover:text-amber-300/90"
      : "bg-gray-100 text-pink-400/60 hover:bg-gray-900/80 hover:text-amber-300/90";

  const mobileBg =
    theme === "dark"
      ? "bg-black/40 border-white/10 text-white"
      : "bg-white/20 border-black/10 text-black";

  const DownloadBtn =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-cyan-400"
      : "bg-linear-to-r from-purple-400 to-red-400";

  const ringColor =
    theme === "dark" ? "ring-gray-700" : "ring-gray-200 hover:ring-transparent";

  const hoverBg =
    theme === "dark"
      ? "hover:bg-linear-to-r from-green-400 to-cyan-400"
      : "hover:bg-linear-to-r from-purple-400 to-red-400";

  const btnText =
    theme === "dark"
      ? "text-gray-200 hover:text-gray-900"
      : "text-gray-800 hover:text-gray-200";

  return (
    <header
      className={`fixed  w-full top-0 z-50 backdrop-blur-md transition-colors duration-300 ${bgColor}`}
    >
      <div className="w-full mx-auto flex items-center justify-between px-6 py-4">
        <button
          onClick={() => scroll.scrollToTop()}
          className={`text-2xl font-extrabold tracking-tight transition-colors duration-300 bg-clip-text text-transparent ${HeadTag}`}
        >
          AH
          <span
            className={`animate-pulse ${
              theme === "dark" ? "text-purple-400" : "text-pink-500/80"
            }`}
          >
            .
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <div key={l} className="relative group">
              <ScrollLink
                to={l}
                spy
                smooth
                offset={-HEADER_HEIGHT} // fix scroll position
                duration={500}
                className={`cursor-pointer font-medium transition-colors duration-300 ${linkText(
                  l
                )}`}
              >
                {l[0].toUpperCase() + l.slice(1)}
              </ScrollLink>
              <span
                className={`absolute left-0 -bottom-1 h-0.5 w-full rounded-full transition-all duration-300 ${
                  active === l
                    ? activeUnderline
                    : "w-0 group-hover:w-full bg-transparent"
                }`}
              ></span>
            </div>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${buttonBg}`}
          >
            {theme === "light" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsMobileOpen((s) => !s)}
            className={`p-2 rounded-md transition-colors duration-300 ${
              theme === "dark"
                ? "text-gray-200 hover:text-white"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {isMobileOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>

          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${buttonBg}`}
          >
            {theme === "light" ? (
              <MdDarkMode size={20} />
            ) : (
              <MdLightMode size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden border-t overflow-hidden ${mobileBg}`}
          >
            <div className="flex flex-col gap-6 px-6 py-7">
              <div className="flex flex-col gap-4">
                {links.map((l) => (
                  <ScrollLink
                    key={l}
                    to={l}
                    spy
                    smooth
                    offset={-HEADER_HEIGHT}
                    duration={500}
                    onClick={() => setIsMobileOpen(false)}
                    className={`text-lg font-semibold tracking-wide transition-colors duration-300 ${linkText(
                      l
                    )} cursor-pointer`}
                  >
                    {l[0].toUpperCase() + l.slice(1)}
                  </ScrollLink>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={MyCV}
                  download
                  onClick={() => setIsMobileOpen(false)}
                  className={`${DownloadBtn} w-full text-center px-6 py-3 rounded-xl text-gray-200 font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                >
                  Download CV
                </a>

                <a
                  href="#projects"
                  onClick={() => setIsMobileOpen(false)}
                  className={`w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ring ${ringColor} ${btnText} ${hoverBg}`}
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className={`w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 ring ${ringColor} ${btnText} ${hoverBg}`}
                >
                  Connect with me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
