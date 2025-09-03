"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/sections/Hero";
import AboutMe from "@/sections/AboutMe";
import Skills from "@/sections/Skills";
import Education from "@/sections/Education";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience";

export default function Home() {
  return (
    <main
      className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
      role="main"
    >
      <Header />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
  <Experience />
</section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </main>
  );
}
