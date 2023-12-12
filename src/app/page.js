"use client";
import Home from "@/component/Home";
import About from "@/component/About";
import Experience from "@/component/Experience.jsx";
import Skills from "@/component/Skills.jsx";
import ContactUs from "@/component/ContactUs.jsx";
import ProjectsSection from "@/component/ProjectsSection";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    // This function will run after the component has mounted
  
    if (typeof window !== "undefined") {
      // The window object is defined, meaning we are on the client side
  
      // Add any specific logic related to smooth scrolling or other window-dependent functionality
      // For example, you might want to attach an event listener for scrolling behavior
  
      const handleScroll = () => {
        // Your logic for handling scroll events
      };
  
      // Attach the event listener when the component mounts
      window.addEventListener("scroll", handleScroll);
  
      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
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
