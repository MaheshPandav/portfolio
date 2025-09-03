"use client";

import { motion } from "framer-motion";

const AboutMe = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
    <motion.section
  id="about"
  aria-labelledby="about-heading"
  variants={fadeIn()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-12 sm:py-16 lg:py-20 px-6 max-w-5xl mx-auto text-center"
>
      {/* Heading with gradient */}
      <h2
        id="about-heading"
        className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      >
        About Me
      </h2>

      {/* Card-like container */}
      <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
        <p className="text-gray-300 text-lg leading-relaxed">
          Hi 👋, I’m{" "}
          <span className="font-semibold text-blue-400">Mahesh</span>, an IT
          professional passionate about crafting{" "}
          <span className="text-purple-400">modern web</span> and{" "}
          <span className="text-purple-400">mobile applications</span>.
        </p>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          With expertise in{" "}
          <span className="text-blue-400">React, React Native, Next.js</span>{" "}
          and <span className="text-blue-400">Firebase</span>, I build solutions
          that are{" "}
          <span className="text-green-400 font-medium">performant</span>,{" "}
          <span className="text-green-400 font-medium">user-friendly</span>, and{" "}
          <span className="text-green-400 font-medium">visually engaging</span>.
        </p>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          🚀 I love solving real-world problems, exploring innovative ideas, and
          continuously learning new technologies to stay ahead in this
          fast-paced tech world.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutMe;
