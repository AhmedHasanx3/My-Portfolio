import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";
import MyCV from "../assets/SYED_AHMED_MOHI_UDDIN_HASAN.pdf";

const Home: React.FC = () => {
  const { theme } = useTheme();

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 0.5, scale: 1 },
  };

  const bubbles = Array.from({ length: 180 });

  const Bubbles =
    theme === "dark"
      ? "bg-emerald-600"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-500 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const DownloadBtn =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-cyan-400"
      : "bg-linear-to-r from-purple-400 to-red-400";

  const btnText =
    theme === "dark"
      ? "text-gray-200 hover:text-gray-900"
      : "text-gray-800 hover:text-gray-200";

  const hoverBg =
    theme === "dark"
      ? "hover:bg-linear-to-r from-green-400 to-cyan-400 hover:ring-transparent hover:-translate-y-1"
      : "hover:bg-linear-to-r from-purple-400 to-red-400 hover:ring-transparent hover:-translate-y-1";

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-start gap-6
    pt-[calc(80px+env(safe-area-inset-top))] sm:pt-20
    scroll-mt-[calc(80px+env(safe-area-inset-top))] sm:scroll-mt-20
    min-h-screen px-4 sm:px-8 md:px-16 lg:px-32"
    >
      {/* Bubble Background */}
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
        })}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl flex flex-col gap-4 z-10"
      >
        {/* Greeting */}
        <span
          className={`text-3xl font-extrabold bg-clip-text text-transparent ${HeadTag}`}
        >
          Hi, I’m
        </span>

        {/* Name */}
        <h1
          className={`text-4xl md:text-5xl leading-tight font-extrabold bg-clip-text text-transparent ${HeadTag}`}
        >
          Syed Ahmed Mohi Uddin Hasan
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          Frontend Developer & UX Enthusiast
        </h2>

        {/* Paragraphs */}
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I’m passionate about creating seamless, user-focused web experiences
          that perform efficiently across all devices.
        </p>
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          I build intuitive and accessible interfaces with a strong focus on
          performance, scalability, and maintainability. By combining clean
          code, thoughtful UX, and modern development practices, I deliver
          digital solutions that are both functional and engaging.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="#projects"
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${btnText} ${hoverBg}`}
          >
            View Projects
          </a>

          <a
            href={MyCV}
            download
            className={`${DownloadBtn} px-6 py-3 rounded-xl text-gray-200 font-semibold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >
            Download CV
          </a>

          <a
            href="#contact"
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${btnText} ${hoverBg}`}
          >
            Connect with me
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
