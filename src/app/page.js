"use client"
import { Element } from "react-scroll";
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
        <Element name="home">
          <Home />
        </Element>
        <Element name="about">
          <About id="about" />
        </Element>
        <Element name="experience">
          <Experience id="experience" />
        </Element>
        <Element name="skills">
          <Skills id="skills" />
        </Element>
        <Element name="projects">
          <ProjectsSection id="projects" />
        </Element>
        <Element name="contact">
          <ContactUs id="contact" />
        </Element>
      </main>
   </>
  )
}

