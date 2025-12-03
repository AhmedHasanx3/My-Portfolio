import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../ThemeContext";

const About: React.FC = () => {
  const { theme } = useTheme();

  const HeadTag =
    theme === "dark"
      ? "bg-linear-to-r from-green-400 to-purple-500"
      : "bg-linear-to-r from-pink-500 to-purple-600";

  const cardBg =
    theme === "dark"
      ? "backdrop-blur-xl bg-white/5 border border-gray-700/20 text-gray-200"
      : "backdrop-blur-xl bg-white/20 border border-gray-300/20 text-gray-900";

  const textColor = theme === "dark" ? "text-gray-400" : "text-gray-200";

  return (
    <section
      id="about"
      className="relative scroll-mt-24 px-6 sm:px-10 md:px-16 lg:px-20 py-20 flex flex-col "
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 bg-clip-text text-transparent ${HeadTag}`}
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25 }}
        className={`text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed ${textColor} mb-12`}
      >
        I craft immersive and seamless web experiences that leave a lasting
        impression. My focus is on intuitive design, accessibility, and
        performance, ensuring every interaction is smooth and engaging. I take
        pride in translating complex requirements into elegant, user-friendly
        interfaces while keeping scalability and maintainability in mind. By
        combining creative design with robust front-end technologies, I deliver
        digital experiences that are visually appealing, highly functional, and
        optimized across devices. I thrive on collaborating with designers,
        developers, and stakeholders to bring ideas to life, while continuously
        learning and adapting to emerging web standards, tools, and best
        practices to push the boundaries of modern web development.
      </motion.p>

      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-12"
      >
        <div>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            My Approach
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl ${textColor} leading-relaxed`}
          >
            I design experiences that are intuitive, responsive, and visually
            appealing. By blending clean design with smooth functionality, I
            ensure that users can interact naturally with any product. I focus
            on accessibility, performance, and scalability in every project.
          </p>
        </div>

        <div>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            What Drives Me
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl ${textColor} leading-relaxed`}
          >
            Crafting interfaces that people enjoy using is my passion. I aim to
            solve real-world problems with elegant solutions, delivering
            products that delight users while meeting business objectives. Every
            project is an opportunity to innovate and push creativity forward.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.65 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        <div>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            Core Values
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl ${textColor} leading-relaxed`}
          >
            I design with empathy, prioritizing the user's perspective in every
            decision. I focus on building for performance, delivering efficient,
            maintainable, and scalable solutions. Accessibility is always a
            priority, ensuring digital experiences are inclusive for everyone. I
            embrace continuous learning, staying updated with innovations and
            adapting to emerging technologies.
          </p>
        </div>

        <div>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            Experience Philosophy
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl ${textColor} leading-relaxed`}
          >
            I believe every interaction matters. Users should feel empowered,
            informed, and delighted when engaging with a product. My goal is to
            remove friction, clarify flows, and create interfaces that feel
            natural. Through thoughtful design, technical precision, and
            iterative improvement, I deliver digital experiences that exceed
            expectations.
          </p>
        </div>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-10"
      >
        {/* Card 1 */}
        <div className={`p-6 rounded-xl ${cardBg} shadow-md`}>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            My Approach
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${textColor}`}
          >
            I design experiences that are intuitive, responsive, and visually
            appealing. By blending clean design with smooth functionality, I
            ensure that users can interact naturally with any product. I focus
            on accessibility, performance, and scalability in every project.
          </p>
        </div>

        {/* Card 2 */}
        <div className={`p-6 rounded-xl ${cardBg} shadow-md`}>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            What Drives Me
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${textColor}`}
          >
            Crafting interfaces that people enjoy using is my passion. I aim to
            solve real-world problems with elegant solutions, delivering
            products that delight users while meeting business objectives. Every
            project is an opportunity to innovate and push creativity forward.
          </p>
        </div>

        {/* Card 3 */}
        <div className={`p-6 rounded-xl ${cardBg} shadow-md`}>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            Core Values
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${textColor}`}
          >
            I design with empathy, prioritizing the user's perspective in every
            decision. I focus on building for performance, delivering efficient,
            maintainable, and scalable solutions. Accessibility is always a
            priority, ensuring digital experiences are inclusive for everyone. I
            embrace continuous learning, staying updated with innovations and
            adapting to emerging technologies.
          </p>
        </div>

        {/* Card 4 */}
        <div className={`p-6 rounded-xl ${cardBg} shadow-md`}>
          <h3
            className={`text-xl sm:text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent ${HeadTag}`}
          >
            Experience Philosophy
          </h3>
          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed ${textColor}`}
          >
            I believe every interaction matters. Users should feel empowered,
            informed, and delighted when engaging with a product. My goal is to
            remove friction, clarify flows, and create interfaces that feel
            natural. Through thoughtful design, technical precision, and
            iterative improvement, I deliver digital experiences that exceed
            expectations.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
