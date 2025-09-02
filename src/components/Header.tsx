"use client";

import { useState, useCallback } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Stable toggle function
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  // ✅ Smooth scroll helper
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsOpen(false); // close mobile menu if open
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50" role="banner">
      {/* Header Container */}
      <motion.div
        initial={{ opacity: 0, y: -40, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 60,
        }}
        className="bg-black/40 backdrop-blur-md border-b border-gray-800 shadow-lg"
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08, rotate: -2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-2xl font-bold text-blue-400 cursor-pointer"
          >
            <a
              href="#hero"
              onClick={(e) => handleSmoothScroll(e, "#hero")}
              aria-label="Go to homepage"
            >
              Mahesh<span className="text-white">.Dev</span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation">
            {navItems.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="relative text-gray-200 hover:text-blue-400 transition-colors after:content-[''] after:block after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </a>
              </motion.div>
            ))}

            {/* ✅ Resume Download Button */}
            <motion.a
              href="/Mahesh-Resume.pdf"
              download
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
              aria-label="Download Resume"
            >
              <Download size={18} />
              Resume
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="md:hidden text-white"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-gray-800"
          >
            <nav className="flex flex-col items-center space-y-6 py-6" role="navigation">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="text-gray-200 hover:text-blue-400 text-lg transition"
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}

              {/* ✅ Resume Download for Mobile */}
              <motion.a
                href="/Mahesh-Resume.pdf"
                download
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white transition-all"
                aria-label="Download Resume"
              >
                <Download size={18} />
                Resume
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
