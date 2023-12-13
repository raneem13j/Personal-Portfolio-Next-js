"use client";
import Home from "@/component/Home";
import About from "@/component/About";
import Experience from "@/component/Experience.jsx";
import Skills from "@/component/Skills.jsx";
import ContactUs from "@/component/ContactUs.jsx";
import ProjectsSection from "@/component/ProjectsSection";


export default function HomePage() {
  
  return (
    <>
      <main>
        <Home />

        <About id="about" />

        <Experience id="experience" />

        <Skills id="skills" />

        <ProjectsSection id="projects" />

        <ContactUs id="contact" />
      </main>
    </>
  );
}
