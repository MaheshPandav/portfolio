"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2019",
    role: "Internship - React JS",
    company: "Dvij Infotech LLP",
    link: "https://dvijinfotech.com",
    duration: "5 Months",
    details:
      "Started my career as a React.js intern, learning component-based development and building modern UI features in real projects.",
  },
  {
    year: "2019 - 2021",
    role: "React JS Developer",
    company: "Dvij Infotech LLP",
    link: "https://dvijinfotech.com",
    duration: "2 Years",
    details:
      "Worked as a React.js developer on scalable web apps, optimized performance, and created reusable front-end components.",
  },
  {
    year: "2021 - 2022.5",
    role: "Senior React Native Developer",
    company: "Dvij Infotech LLP",
    link: "https://dvijinfotech.com",
    duration: "1.5 Years",
    details:
      "Promoted to Senior Developer, led mobile app projects using React Native, ensured performance, and guided junior developers.",
  },
  {
    year: "2022.5 - Present",
    role: "Senior React JS Developer + Team Lead",
    company: "Dvij Infotech LLP",
    link: "https://dvijinfotech.com",
    duration: "1.5 Years (Ongoing)",
    details:
      "Currently working as Team Lead, managing React.js projects, mentoring developers, and delivering high-quality business solutions.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-10 sm:py-14 lg:py-20 px-6 from-gray-850 via-gray-650 to-gray-900"

    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
      >
        My <span className="text-blue-400">Experience</span>
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative group"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-xl opacity-0 group-hover:opacity-20 transition duration-500" />

            <div className="relative bg-gray-900/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-blue-500/10 transition duration-300 h-full">
              <div className="flex items-center gap-2 mb-3 text-blue-400 font-semibold">
                <Briefcase size={18} />
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {exp.company}
                </a>
              </div>

              <h3 className="text-lg font-bold text-white">{exp.role}</h3>

              <p className="text-sm text-gray-400 mb-3">
                {exp.year} • {exp.duration}
              </p>

              <p className="text-gray-300 text-sm leading-relaxed">
                {exp.details}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
