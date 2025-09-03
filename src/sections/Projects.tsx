"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Briefcase,
  MessageSquare,
  ShoppingCart,
  Store,
  Trophy,
} from "lucide-react";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const projects = [
    {
      id: 1,
      title: "Order Protect Site",
      short:
        "Created using React JS with JWT-decode authentication, Redux Toolkit for API integration, and Ant Design UI. Helps protect products, process returns, and obtain refunds for damaged items.",
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: "Hiring New Job Site",
      short:
        "A multi-functional React.js platform where users can apply for jobs, attend interviews (online & offline), find placements, or hire employees as clients.",
      icon: Briefcase,
    },
    {
      id: 3,
      title: "Chat Application",
      short:
        "Built with React Native & Firebase, offering real-time one-to-one private messaging with an intuitive interface and seamless communication.",
      icon: MessageSquare,
    },
    {
      id: 4,
      title: "Nope-commerce",
      short:
        "Revolutionizing NopCommerce (ASP.NET Core shopping cart) into a headless commerce solution using Next.js. Tech stack: Next.js, NopCommerce, Redux, Ant Design.",
      icon: Store,
    },
    {
      id: 5,
      title: "E-commerce Site",
      short:
        "Developed a full-featured React JS e-commerce platform where users can register, browse, and purchase products like electronics, mobiles, clothes, and more.",
      icon: ShoppingCart,
    },
    {
      id: 6,
      title: "Cricket Live Score Site",
      short:
        "A React JS cricket app providing live scores of international matches, cricket news, upcoming schedules, and real-time updates for fans.",
      icon: Trophy,
    },
  ];

  return (
    <motion.section
  id="projects"
  aria-labelledby="projects-heading"
  variants={containerVariants}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="py-10 sm:py-14 lg:py-20 px-6 max-w-6xl mx-auto"
>
      <h2
        id="projects-heading"
        className="text-4xl font-bold text-center mb-12 text-blue-400"
      >
        Projects
      </h2>
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
      >
        {projects.map((project) => {
          const Icon = project.icon;
          return (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900/70 rounded-xl p-6 shadow-lg flex flex-col"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Icon className="w-7 h-7 text-blue-400" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-400">{project.short}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
