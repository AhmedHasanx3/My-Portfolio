import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const reviews = [
  {
    name: "Client — DarElite",
    text: "Ahmed delivered a robust real-estate platform on time. Excellent communication and UI.",
  },
  {
    name: "Client — InnoLiving",
    text: "Professional, fast, and very responsive. Great attention to detail.",
  },
];

const Testimonials: React.FC = () => {
  const { theme } = useTheme();
  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";
  const cardBg =
    theme === "dark"
      ? "backdrop-blur-xl bg-white/5 border border-gray-700/20 text-gray-200"
      : "backdrop-blur-xl bg-white/20 border border-gray-300/20 text-gray-900";
  const textMain = theme === "dark" ? "text-gray-400" : "text-gray-900";

  return (
    <section className={`py-12 sm:py-16 transition-colors duration-500`}>
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Heading */}
        <h3
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300 bg-clip-text text-transparent ${HeadTag}`}
        >
          Testimonials
        </h3>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl shadow border ${cardBg} transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="flex items-start gap-3">
                <div className="text-purple-400 mt-1 text-lg sm:text-xl">
                  <FaQuoteLeft />
                </div>
                <div className="flex-1">
                  <p className={`text-sm sm:text-base ${textMain}`}>{r.text}</p>
                </div>
              </div>

              <div
                className={`text-right font-semibold text-xs sm:text-sm mt-4 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-950/60"
                }`}
              >
                {r.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
