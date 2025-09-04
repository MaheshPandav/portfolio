"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black/60 border-t border-gray-800">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[200px] h-[60px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

        <div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-400 font-medium">Mahesh</span>. All
            rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Built with using Next.js & TailwindCSS
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://github.com/MaheshPandav"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/20 transition"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/mahesh-pandav-460a22227/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/20 transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:pandavmahesh490@gmail.com"
            aria-label="Send Email"
            className="p-2 rounded-full bg-gray-800/50 text-gray-400 hover:text-white hover:bg-blue-500/20 transition"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
