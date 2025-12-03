import React from "react";
import { useTheme } from "../ThemeContext";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiSupabase,
  SiPostman,
  SiMysql,
  SiTypescript,
  SiPostgresql,
} from "react-icons/si";
import { MdAccessibility } from "react-icons/md";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="w-10 h-10 text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="w-10 h-10 text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="w-10 h-10 text-yellow-400" /> },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10 text-blue-500" />,
  },
  {
    name: "React.js",
    icon: <FaReact className="w-10 h-10 text-cyan-400 animate-spin-slow" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-10 text-cyan-300" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-10 h-10 text-purple-500" />,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="w-10 h-10 text-green-500" />,
  },
  { name: "SQL", icon: <SiMysql className="w-10 h-10 text-blue-300" /> },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10 text-sky-500" />,
  },
  {
    name: "REST API",
    icon: <SiPostman className="w-10 h-10 text-orange-400" />,
  },
  { name: "Git", icon: <FaGitAlt className="w-10 h-10 text-red-500" /> },
  { name: "GitHub", icon: <FaGithub className="w-10 h-10" /> },
  {
    name: "UI/UX & Accessibility",
    icon: <MdAccessibility className="w-10 h-10 text-pink-400" />,
  },
];

const Skills: React.FC = () => {
  const { theme } = useTheme();
  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const cardBg =
    theme === "dark"
      ? "bg-white/4 border-gray-700/10"
      : "bg-white/20 border-gray-200/20";

  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-700";

  return (
    <section
      id="skills"
      className="py-10 sm:py-16 transition-colors duration-500"
    >
      <div className="w-full mx-auto px-6 sm:px-10 lg:px-12">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-8 transition-colors duration-300 bg-clip-text text-transparent ${HeadTag}`}
        >
          Skills & Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className={`flex flex-col items-center p-4 sm:p-6 rounded-3xl shadow-lg border ${cardBg}
            transform transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                {skill.icon}
              </div>

              <span
                className={`text-xs sm:text-sm mt-3 text-center transition-colors duration-300 font-medium ${textColor}`}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
