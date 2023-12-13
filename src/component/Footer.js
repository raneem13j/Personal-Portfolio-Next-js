"use client";
import Link from "next/link";
import { useState } from "react";
import { saveAs } from "file-saver";

const Footer = () => {
  const [fileUrl, setFileUrl] = useState("/cv/Raneem Al Jamal CV 2023.pdf");

  const saveFile = async () => {
    try {
      const response = await fetch(fileUrl);
      const fileBlob = await response.blob();
      saveAs(fileBlob, "Raneem-Al-Jamal-CV-2023.pdf");
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };
  return (
    <div className="footer-main-container">
      <div className="footer-container">
        <div>
          <h1 className="footer-logo">Raneem Al Jamal</h1>
        </div>
        <div className="footer-text">Let&apos;s Talk?</div>
        <div>
          <button className="footer-button" onClick={saveFile}>
            Download CV
          </button>
        </div>
      </div>
      <div className="footer-container-link">
        <a href="/" className="footer-link">
          Home
        </a>
        <a href="#about" className="footer-link">
          About
        </a>
        <a href="#skills" className="footer-link">
          Skills
        </a>
        <a href="#projects" className="footer-link">
          Projects
        </a>
        <a href="#experience" className="footer-link">
          Experience
        </a>
        <a href="#contact" className="footer-link">
          Contact
        </a>
      </div>
      <p className="footer-text1"> &copy; 2023 Raneem Al Jamal Portfolio</p>
    </div>
  );
};

export default Footer;
