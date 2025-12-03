import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const Experience: React.FC = () => {
  const { theme } = useTheme();

  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const cardBg =
    theme === "dark"
      ? "backdrop-blur-xl bg-white/5 border border-gray-700/20 text-gray-200"
      : "backdrop-blur-xl bg-white/20 border border-gray-300/20 text-gray-900";

  const textGray = theme === "dark" ? "text-gray-400" : "text-gray-900";
  const poleline =
    theme === "dark" ? "border-purple-500/40" : "border-pink-400";
  const polecircle = theme === "dark" ? "text-purple-500" : "text-pink-400";
  const tagBg =
    theme === "dark"
      ? "bg-black/10 border border-gray-400/20 text-gray-400"
      : "bg-white/20 border border-gray-900/20 text-gray-900";

  const experiences = [
    {
      title: "Front-End Developer — AY Software Development, Hyderabad",
      date: "Dec 2023 – May 2025",
      tools: [
        "React",
        "Tailwind CSS",
        "JavaScript",
        "Supabase",
        "Git",
        "REST APIs",
        "SQL",
      ],
      achievements: [
        "Developed mobile-first, SEO-optimized web applications using React, Tailwind CSS, and modern JavaScript.",
        "Improved page load speed by 20–30% using code-splitting, image optimization, and schema-based SEO.",
        "Built modular and reusable UI components, reducing development time by 25% across multiple client projects.",
        "Enhanced Lighthouse performance scores from ~60 to 90+ by fixing layout shifts, accessibility, and caching issues.",
        "Integrated RESTful APIs and performed SQL CRUD operations for dynamic data-driven components.",
        "Collaborated with UI/UX designers to deliver pixel-perfect, accessible, and cross-browser compatible interfaces.",
        "Used Git/GitHub for version control and smooth team collaboration across agile development cycles.",
        "Performed debugging, profiling, and cross-device testing using Chrome DevTools for consistent performance.",
      ],
    },

    // Freelance Work — Each Project As Its Own Entry

    {
      title: "DarElite — Real Estate Platform (Freelance)",
      date: "2025",
      tools: ["React", "Supabase", "Tailwind CSS", "Realtime", "TypeScript"],
      achievements: [
        "Developed a modern real estate platform with Supabase backend and real-time property listings.",
        "Implemented dynamic content management, allowing property updates without redeploying.",
        "Improved mobile responsiveness and loading speeds, reducing load time by ~25%.",
        "Integrated advanced search filters, category sorting, and location-based views.",
        "Ensured full SEO optimization including meta tags, schema, and performance enhancements.",
      ],
    },

    {
      title: "InnoLiving — Home Automation Website (Freelance)",
      date: "2025",
      tools: ["React", "Tailwind CSS", "i18n", "Animations", "Forms"],
      achievements: [
        "Built a full multilingual website with Arabic + English using i18n and RTL support.",
        "Developed an advanced booking flow with validation, state management, and responsive UI.",
        "Added smooth animations and interactive UX elements to increase engagement.",
        "Improved SEO, performance, and optimized mobile layouts across all devices.",
        "Delivered a fully production-ready platform with clean UI and fast-loading pages.",
      ],
    },

    {
      title:
        "Advanced Front-End UI/UX & Interactive Web Experiences (Showcase Personal Projects)",
      date: "2023 – 2024",
      tools: ["HTML", "CSS", "JavaScript", "GSAP", "Swiper.js", "UI/UX"],
      achievements: [
        "Developed multiple visually rich landing page clones to strengthen UI/UX, animations, and layout structuring skills.",
        "Built a high-performance animated clone of the Sundown Studio website using GSAP, smooth scrolling, and interactive hover effects.",
        "Created a responsive car dealership interface (CarZone) featuring sliders, car showcases, and modern card components.",
        "Designed a premium hotel landing page clone (The Golkonda Hotels) with booking form UI, galleries, and consistent typography.",
        "Ensured all projects were fully responsive, lightweight, and optimized for mobile and desktop devices.",
        "Focused on clean layout composition, spacing, visual hierarchy, and modern front-end design patterns.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-10 sm:py-12 transition-colors duration-500"
    >
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-12">
        <h3
          className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center sm:text-left bg-clip-text text-transparent ${HeadTag}`}
        >
          Professional Experience
        </h3>

        <div
          className={`relative ml-4 sm:ml-6 pl-4 sm:pl-6 border-l-2 ${poleline}`}
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.06 }}
              className="mb-8 sm:mb-10 relative"
            >
              {/* Timeline Dot */}
              <span
                className={`absolute -left-4 sm:-left-8 top-8 ${polecircle}`}
              >
                <FaCircle size={12} className="sm:w-4 sm:h-4" />
              </span>

              <div
                className={`backdrop-blur-md p-4 sm:p-5 md:p-6 rounded-3xl shadow hover:shadow-2xl transition-transform duration-300 ${cardBg} transform hover:-translate-y-1 sm:hover:-translate-y-2`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4
                    className={`text-lg sm:text-xl md:text-2xl font-semibold mb-2 sm:mb-0 bg-clip-text text-transparent ${HeadTag}`}
                  >
                    {exp.title}
                  </h4>
                  <div
                    className={`text-sm sm:text-md font-medium italic ${textGray}`}
                  >
                    {exp.date}
                  </div>
                </div>

                <div className={`mt-2 ${textGray}`}>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
                    {exp.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.tools.map((t) => (
                    <span
                      key={t}
                      className={`text-xs sm:text-sm px-3 py-1 font-normal rounded-full ${tagBg}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
