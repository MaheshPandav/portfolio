"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpenCheck } from "lucide-react";

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const education = [
    {
      id: 1,
      degree: "Higher Education",
      field: "10th - 63.00% | 12th - 73.78%",
      institution: "Gurukul Vidhyapith Kumar Vidhyalaya",
      year: "2016 - 2019",
      details:
        "Completed secondary and higher secondary education with a strong foundation in core subjects.",
      icon: BookOpenCheck,
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      institution: "Sutex Bank College of Computer Application",
      year: "2019 - 2022",
      details:
        "Graduated with 🎯 90.20% (9.0 CGPA). Gained expertise in programming, databases, and software development.",
      icon: School,
    },
    {
      id: 3,
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Applications",
      institution: "Jain University, Bangalore",
      year: "2022 - 2025",
      details:
        "Currently pursuing with 📈 92.20% (9.2 CGPA). Specializing in advanced software engineering and research.",
      icon: GraduationCap,
    },
  ];

  return (
   <motion.section
  id="education"
  aria-labelledby="education-heading"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="py-10 sm:py-14 lg:py-20 px-6 max-w-5xl mx-auto"
>
      <h2
        id="education-heading"
        className="text-4xl font-bold text-center mb-12 text-blue-400"
      >
        Education
      </h2>

      {/* Timeline wrapper */}
      <motion.div
        className="relative border-l-2 border-blue-500/30 ml-4"
        variants={containerVariants}
      >
        {education.map((edu) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="mb-10 ml-6 relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white shadow-md">
                <Icon size={14} />
              </span>

              {/* Project-style Card */}
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-400 font-medium">{edu.field}</p>
                <p className="text-gray-300">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-4">{edu.year}</p>
                <p className="text-gray-200">{edu.details}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Education;
