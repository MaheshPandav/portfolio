"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiFirebase,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiGit,
  SiReactrouter,
} from "react-icons/si";

const Skills = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  const skills = [
    { name: "React", icon: <SiReact className="text-sky-400" size={28} /> },
    { name: "React Native", icon: <SiReact className="text-indigo-400" size={28} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" size={28} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" size={28} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-400" size={28} /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" size={28} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-400" size={28} /> },
    { name: "Git", icon: <SiGit className="text-orange-400" size={28} /> },
  ];

  return (
    <motion.section
  id="skills"
  aria-labelledby="skills-heading"
  variants={fadeIn()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-10 sm:py-14 lg:py-20 px-6"
>
      <h2
        id="skills-heading"
        className="text-4xl font-bold text-center mb-12 text-blue-400"
      >
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            variants={fadeIn(i * 0.1)}
            whileHover={{ scale: 1.08, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center justify-center gap-3 
                       bg-gradient-to-br from-gray-800 to-gray-900 
                       border border-gray-700 rounded-xl 
                       p-6 shadow-md hover:shadow-lg transition-all"
          >
            {skill.icon}
            <p className="text-lg font-medium text-gray-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
