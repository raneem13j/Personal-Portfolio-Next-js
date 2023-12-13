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
    <div className={Styles.navbar}>
      <Link className={Styles.logolink} href="/">
        <h1 className={Styles.logohome}>Raneem Al Jamal</h1>
      </Link>
      <div className={Styles.menuIcon}>
        <div className={Styles.navLinks}>
          <a href="/">Home</a>
          <a href="/#about" >About</a>
          <a href="/#skills">Skills</a>
          <a href="/#projects" >Projects</a>
          <a href="/#experience" >Experience</a>
          <a href="/#contact" >Contact</a>
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
              <a
                href="/"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Home
              </a>
              <a
                href="/#about"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                About
              </a>
              <a
                href="/#skills"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Skills
              </a>
              <a
                href="/#projects"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Projects
              </a>
              <a
                href="/#experience"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Experience
              </a>
              <a
                href="/#contact"
                className={Styles.navlinkMobilefont}
                onClick={handleNavLinkClick}
              >
                Contact
              </a>

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
