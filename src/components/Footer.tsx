import React from "react";
import { useTheme } from "../ThemeContext";

const Footer: React.FC = () => {
  const { theme } = useTheme();

  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const textMain = theme === "dark" ? "text-gray-400" : "text-gray-900/90";
  const borderColor = theme === "dark" ? "border-white/10" : "border-black/10";

  return (
    <footer
      className={`px-6 sm:px-10 lg:px-12 py-10 transition-colors duration-300 border-t ${borderColor}`}
    >
      <div className="w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <h3
            className={`font-bold text-lg sm:text-xl md:text-2xl cursor-pointer transition-colors animate-pulse ${HeadTag} bg-clip-text text-transparent`}
          >
            Syed Ahmed Mohi Uddin Hasan
          </h3>
          <p
            className={`text-xs sm:text-sm md:text-base ${textMain} font-semibold`}
          >
            Web Developer - Al Khobar, Saudi Arabia © 2025 — Built with passion
            for modern web experiences
          </p>
        </div>

        {/* Optional Links or Socials (if needed in future) */}
        {/* <div className="flex gap-4">
          <a href="#" className="text-sm sm:text-base hover:underline">
            GitHub
          </a>
          <a href="#" className="text-sm sm:text-base hover:underline">
            LinkedIn
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
