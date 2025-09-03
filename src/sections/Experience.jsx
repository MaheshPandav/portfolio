// "use client";

// import { motion } from "framer-motion";
// import { CheckCircle2 } from "lucide-react";

// const experiences = [
//   {
//     year: "2019",
//     role: "Internship - React JS",
//     company: "Dvij Infotech LLP",
//     link: "https://dvijinfotech.com",
//     duration: "5 Months",
//     details:
//       "Started my career with a React.js internship, where I learned the fundamentals of component-based development, state management, and building real-world UI features. Worked on small-scale client projects and internal tools to gain practical exposure.",
//   },
//   {
//     year: "2019 - 2021",
//     role: "React JS Developer",
//     company: "Dvij Infotech LLP",
//     link: "https://dvijinfotech.com",
//     duration: "2 Years",
//     details:
//       "Worked as a React.js developer, contributing to scalable applications. Built reusable components, integrated APIs, optimized performance, and collaborated with backend teams. This role gave me a strong foundation in front-end architecture and best practices.",
//   },
//   {
//     year: "2021 - 2022.5",
//     role: "Senior React Native Developer",
//     company: "Dvij Infotech LLP",
//     link: "https://dvijinfotech.com",
//     duration: "1.5 Years",
//     details:
//       "Promoted to Senior Developer. Led multiple mobile app projects with React Native, focusing on delivering high-performing apps with smooth UI/UX. Mentored juniors, conducted code reviews, and ensured industry-standard coding practices.",
//   },
//   {
//     year: "2022.5 - Present",
//     role: "Senior React JS Developer + Team Lead",
//     company: "Dvij Infotech LLP",
//     link: "https://dvijinfotech.com",
//     duration: "1.5 Years (Ongoing)",
//     details:
//       "Currently working as Team Lead in React.js. Managing a team of developers, assigning tasks, and mentoring them. Overseeing project architecture, ensuring scalability and clean code. Responsible for communication with clients, managing sprints, and delivering high-quality solutions.",
//   },
// ];

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="py-20 px-6 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950"
//     >
//       {/* Heading */}
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-3xl md:text-4xl font-bold text-center mb-16"
//       >
//         My <span className="text-blue-400">Experience</span>
//       </motion.h2>

//       <div className="max-w-5xl mx-auto space-y-10">
//         {experiences.map((exp, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: i * 0.1 }}
//             className="relative"
//           >
//             {/* Progress Bar */}
//             {i !== experiences.length - 1 && (
//               <div className="absolute left-5 top-10 bottom-0 w-[2px] bg-gray-600 md:left-6" />
//             )}

//             {/* Card */}
//             <div className="flex items-start gap-6 md:gap-8">
//               {/* Step Icon */}
//               <div className="flex-shrink-0">
//                 <CheckCircle2
//                   size={32}
//                   className="text-blue-400 bg-gray-800 rounded-full p-1"
//                 />
//               </div>

//               {/* Content */}
//               <div className="bg-gray-800/70 border border-gray-700 rounded-xl p-6 md:p-8 shadow-md hover:shadow-blue-500/20 transition w-full">
//                 <h3 className="text-lg md:text-xl font-bold text-white mb-1">
//                   {exp.role}
//                 </h3>
//                 <p className="text-sm text-gray-400 mb-3">
//                   <a
//                     href={exp.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline text-blue-400"
//                   >
//                     {exp.company}
//                   </a>{" "}
//                   • {exp.year} • {exp.duration}
//                 </p>
//                 <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                   {exp.details}
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

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
      className="py-20 px-6 bg-gradient-to-b from-gray-900 via-gray-800 to-black"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
      >
        My <span className="text-blue-400">Experience</span>
      </motion.h2>

      {/* Cards Grid */}
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
            {/* Card with Glow Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 blur-xl opacity-0 group-hover:opacity-20 transition duration-500" />

            <div className="relative bg-gray-900/70 border border-gray-700 rounded-2xl p-6 shadow-md hover:shadow-blue-500/10 transition duration-300 h-full">
              {/* Company */}
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

              {/* Role */}
              <h3 className="text-lg font-bold text-white">{exp.role}</h3>

              {/* Year + Duration */}
              <p className="text-sm text-gray-400 mb-3">
                {exp.year} • {exp.duration}
              </p>

              {/* Details */}
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
