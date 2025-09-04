"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MyImage from "../assets/myImage.jpg";

const Hero = () => {
  const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
  });
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen text-center px-6"
      aria-labelledby="hero-heading"
    >
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-b from-gray-900 via-black to-gray-900" />
      <div
        className="
  absolute top-1/3 left-1/2 -translate-x-1/2 
  w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] 
  rounded-full bg-blue-500/10 blur-3xl
"
      /> */}
      <motion.h1
        id="hero-heading"
        initial="hidden"
        animate="show"
        variants={fadeIn()}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        Hi, I’m <span className="text-blue-400">Mahesh</span>
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeIn(0.3)}
        className="text-lg md:text-xl text-gray-200 mb-6 max-w-xl"
      >
        IT Professional | Software Developer | Building Modern Solutions
      </motion.p>

      <motion.div initial="hidden" animate="show" variants={fadeIn(0.5)}>
        <Image
          src={MyImage}
          alt="Portrait of Mahesh"
          width={200}
          height={200}
          priority
          className="rounded-full border-4 border-blue-500 shadow-lg mb-6"
        />
      </motion.div>

      <motion.div initial="hidden" animate="show" variants={fadeIn(0.7)}>
        <Button
          size="lg"
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-full px-6 py-3 text-lg cursor-pointer"
          aria-label="View my work"
          onClick={() => {
            const projectsSection = document.getElementById("projects");
            if (projectsSection) {
              projectsSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          View My Work
        </Button>
      </motion.div>
    </section>
  );
};
export default Hero;
