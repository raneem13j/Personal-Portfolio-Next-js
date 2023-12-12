"use client";
import Styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { saveAs } from "file-saver";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const hamburgerIcon = (
    <AiOutlineMenu
      className={Styles.hamburger}
      onClick={() => setOpen(!open)}
    />
  );
  const closeIcon = (
    <AiOutlineClose
      className={Styles.hamburger}
      onClick={() => setOpen(!open)}
    />
  );
  const handleNavLinkClick = (sectionId) => {
    setOpen(!open);
  };

  const [fileUrl, setFileUrl] = useState("/cv/Raneem-Al-Jamal-CV-2023.pdf");

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
    <div className={Styles.navbar}>
      <Link className={Styles.logolink} href="/">
        <h1 className={Styles.logohome}>Raneem Al Jamal</h1>
      </Link>
      <div className={Styles.menuIcon}>
        <div className={Styles.navLinks}>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#contact">Contact</Link>
          <button className={Styles.button} onClick={saveFile}>
            Download CV
          </button>
        </div>

        <div className={Styles.mobile}>
          {open ? closeIcon : hamburgerIcon}

          <div
            className={`${Styles.navbarMobileContainer} ${
              open ? Styles.open : ""
            }`}
          >
            <div className={Styles.navlinkMobile}>
              <Link
                href="/"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                About
              </Link>
              <Link
                href="/#skills"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Projects
              </Link>
              <Link
                href="/#experience"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Experience
              </Link>
              <Link
                href="/#contact"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>

              <button className={Styles.button} onClick={saveFile}>
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// <ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink>
//           <ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink>
//           <ScrollLink to="skills" smooth={true} duration={500}>Skills</ScrollLink>
//           <ScrollLink to="projects" smooth={true} duration={500}>Projects</ScrollLink>
//           <ScrollLink to="experience" smooth={true} duration={500}>Experience</ScrollLink>
//           <ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink>
