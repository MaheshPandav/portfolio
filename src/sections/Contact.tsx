"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });

  return (
   <motion.section
  id="contact"
  aria-labelledby="contact-heading"
  variants={fadeIn()}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="py-10 sm:py-14 lg:py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-center"
>
      <h2
        id="contact-heading"
        className="text-4xl font-bold mb-6 text-blue-400"
      >
        Let’s Connect
      </h2>

      <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg leading-relaxed">
        Whether you have a question, a project idea, or just want to say hello, 
        I’d love to hear from you. Let’s build something amazing together.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <a
          href="mailto:pandavmahesh490@gmail.com"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-400 transition"
        >
          <Mail className="w-6 h-6 text-blue-400" />
          <span className="text-gray-300">Email Me</span>
        </a>
        <a
          href="https://www.linkedin.com/in/mahesh-pandav-460a22227/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-400 transition"
        >
          <Linkedin className="w-6 h-6 text-blue-400" />
          <span className="text-gray-300">LinkedIn</span>
        </a>
        <a
          href="https://github.com/MaheshPandav"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-400 transition"
        >
          <Github className="w-6 h-6 text-blue-400" />
          <span className="text-gray-300">GitHub</span>
        </a>
      </div>

    </motion.section>
  );
};

export default Contact;
