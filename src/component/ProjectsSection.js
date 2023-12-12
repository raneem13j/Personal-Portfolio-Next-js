import React, {useState, useRef } from 'react';
import Slider from './slider/Slider.js';

const ProjectsSection = () => {


  const slideData = [
 
    {
      index: "0",
      headline:  "Chreif Outlet",
      button: 'Show Detalis',
      src:'/chrif4.png'
    },
    
    {
      index: "1",
      headline: "JONCO-MET",
      button: 'Show Detalis',
      src:'/joncomed1.png'
    },
    {
      index: "2",
      headline: "LMS",
      button: 'Show Detalis',
      src:'/lms2.png'
    },
    {
      index: "3",
      headline: "Cardsy",
      button: 'Show Detalis',
      src:'/cardsy3.png'
    },
    {
      index: "4",
      headline: "Zone Outlet",
      button: 'Show Detalis',
      src:'/zone2.png'
    },
    {
      index: "5",
      headline: "My Portfolio",
      button: 'Show Detalis',
      src:'/zone1.png'
    }
  ];
  

  return (
    <div className="projects-container" id="projects">
      <div className="main-projects-container-title">
        <h2>My Clients</h2>
        <p>Projects</p>
      </div>
      <div className="projects-main-container">
      <Slider slides={slideData} heading={slideData.headline} />
      </div>
    </div>
  );
};

export default ProjectsSection;
