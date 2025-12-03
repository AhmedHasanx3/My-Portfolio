import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import MyCV from "../assets/SYED_AHMED_MOHI_UDDIN_HASAN.pdf";
import MyCvImg from "../assets/MyCvImg.png";

const CvPreview: React.FC = () => {
  const { theme } = useTheme();
  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const cardBg =
    theme === "dark"
      ? "backdrop-blur-xl bg-white/5 border border-gray-700/20 text-gray-200"
      : "backdrop-blur-xl bg-white/20 border border-gray-300/20 text-gray-900";

  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-900";

  const HoverBtn =
    theme === "dark"
      ? "ring-white/20 hover:bg-linear-to-r from-green-400 to-cyan-400"
      : "ring-gray-400 hover:ring-transparent hover:bg-linear-to-r from-purple-400 to-red-400 ";

  const DownloadBtn =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-cyan-400"
      : "bg-linear-to-r from-purple-400 to-red-400";

  return (
    <section className="py-10 transition-colors duration-500">
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-16">
        <h3
          className={`text-3xl sm:text-4xl font-bold mb-6 bg-clip-text text-transparent ${HeadTag}`}
        >
          Download CV
        </h3>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex flex-col md:flex-row gap-6 md:gap-4 items-center md:items-start p-4 md:p-6 rounded-2xl border backdrop-blur-md transition-colors duration-500 ${cardBg}`}
        >
          <div className="w-full sm:w-80 h-50 sm:h-60 rounded-md overflow-hidden flex items-center justify-center border border-gray-200 shadow-md">
            <img
              src={MyCvImg}
              alt="CV Preview"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex-1 px-1 sm:px-4 text-left md:text-left">
            <p className={`transition-colors duration-300 mb-6 ${textColor}`}>
              Download a polished and comprehensive PDF CV that presents my full
              web development expertise, including front-end skills, tools,
              frameworks, project accomplishments, work experience, technical
              strengths, and contact details in a clean and professional layout
              suitable for recruiters and employers.
            </p>
            <div className="mt-3 flex gap-3 flex-wrap justify-center md:justify-start">
              <a
                href={MyCV}
                download
                className={`px-5 py-3 rounded-lg ${DownloadBtn} text-gray-900 font-semibold shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                Download CV
              </a>

              <a
                href={MyCV}
                target="_blank"
                rel="noreferrer"
                className={`px-5 py-3 rounded-lg ring ${HoverBtn} ${textColor} hover:text-gray-900 font-semibold transition-colors duration-300 hover:-translate-y-1`}
              >
                Preview
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CvPreview;
