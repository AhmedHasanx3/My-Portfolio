import React, { useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

type Project = {
  title: string;
  cardDescription: string;
  modalDescription: string;
  link?: string;
  github?: string;
  tags: string[];
  modalFeatures?: string[];
};

const projects: Project[] = [
  {
    title: "DarElite — Real Estate",
    cardDescription: "Supabase real-time real estate platform.",
    modalDescription:
      "DarElite is a complete real estate platform with live property updates, advanced search filters, and responsive UI—all backed by Supabase realtime capabilities.",
    link: "https://darelite.com/",
    tags: ["React", "Supabase", "Tailwind", "Realtime"],
    modalFeatures: [
      "Real-time property updates",
      "Dynamic search + filtering",
      "Integrated Supabase backend",
      "Modern UI with animations",
    ],
  },
  {
    title: "InnoLiving — Home Automation",
    cardDescription: "Home automation website with advanced UI.",
    modalDescription:
      "InnoLiving is a multilingual home automation platform featuring smooth animations, booking flow, and a modern UX built for conversions.",
    link: "https://innoliving-co.com/",
    tags: ["React", "i18n", "Booking", "Animations"],
    modalFeatures: [
      "Booking & scheduling flow",
      "Payment structure (mock)",
      "Multilingual system",
      "High-quality animated UI",
    ],
  },
  {
    title: "Sundown Studio Clone",
    cardDescription: "High-performance animated front-end clone.",
    modalDescription:
      "A fully recreated animated website using pure HTML, CSS, and JavaScript. Features advanced scroll effects, motion transitions, and pixel-perfect accuracy.",
    link: "https://ahmedhasanx3.github.io/SundownStudio-Clone/",
    tags: ["HTML", "CSS", "JS", "Animations"],
    modalFeatures: [
      "Pure CSS scroll animations",
      "Optimized for performance",
      "Lightweight & fast",
    ],
  },
];

const Projects: React.FC = () => {
  const [active, setActive] = useState<Project | null>(null);
  const { theme } = useTheme();

  React.useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [active]);

  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const cardBg =
    theme === "dark"
      ? "backdrop-blur-xl bg-white/5 border border-gray-700/20 text-gray-200"
      : "backdrop-blur-xl bg-white/20 border border-gray-300/20 text-gray-900";

  const modalBg =
    theme === "dark"
      ? "bg-black/80 border border-white/10 text-gray-200"
      : "bg-white/20 border border-purple-600/10 text-white/80";

  const MiniTag =
    theme === "dark"
      ? "bg-white/10 border border-gray-700/10 text-gray-200"
      : "bg-black/5 border border-gray-900/5 text-gray-800";

  const links =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-purple-600 to-pink-500";

  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-700";

  return (
    <section
      id="projects"
      className="py-12 sm:py-16 transition-colors duration-500"
    >
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-12">
        <h3
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 py-2 bg-clip-text text-transparent ${HeadTag}`}
        >
          Featured Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col justify-between p-5 sm:p-6 rounded-2xl shadow-lg transition-transform duration-300 ${cardBg}`}
            >
              <div>
                <h4
                  className={`text-lg sm:text-xl font-semibold mb-2 bg-clip-text text-transparent ${HeadTag}`}
                >
                  {p.title}
                </h4>
                <p
                  className={`mb-3 text-sm sm:text-base ${textColor} font-medium`}
                >
                  {p.cardDescription}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className={`text-xs sm:text-sm ${MiniTag} font-medium px-3 py-1 rounded-full`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap justify-start items-center gap-3">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className={`px-3 py-2 rounded-lg text-gray-200 font-medium flex items-center gap-2 text-sm sm:text-base ${links}`}
                  >
                    Live <FaExternalLinkAlt />
                  </a>
                )}

                <button
                  onClick={() => setActive(p)}
                  className={`px-3 py-2 rounded-lg border text-sm sm:text-base ${
                    theme === "dark"
                      ? "border-gray-400/20 text-gray-200/80"
                      : "border-black/20 text-gray-700"
                  }`}
                >
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className={`max-w-full sm:max-w-3xl w-full rounded-2xl p-5 sm:p-6 ${modalBg}`}
          >
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex-1">
                <h4 className="text-2xl sm:text-3xl font-bold">
                  {active.title}
                </h4>
                <p className="mt-2 text-sm sm:text-base">
                  {active.modalDescription}
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  {active.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs sm:text-sm bg-white/10 px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setActive(null)}
                className="text-white hover:opacity-70 text-xl sm:text-2xl mt-2 sm:mt-0"
              >
                ✕
              </button>
            </div>

            {active.modalFeatures && (
              <div className="mt-5">
                <h5 className="font-semibold mb-2 text-sm sm:text-base">
                  Key Features
                </h5>
                <ul className="list-disc list-inside space-y-1 text-sm sm:text-base">
                  {active.modalFeatures.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
