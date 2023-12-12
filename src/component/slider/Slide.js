import React, { useState, useRef } from "react";
import Image from "next/image";
import './slider.scss';
import Link from 'next/link';

const slideData = [
 
  {
    index: "0",
    headline:  "Chreif Outlet",
    button: 'Show Detalis',
    src:'/chrif1.png'
  },
  
  {
    index: "1",
    headline: "JONCO-MET",
    button: 'Show Detalis',
    src:'/joncomed1.png'
  },
  {
    index: "2",
    headline: "Learning Management System",
    button: 'Show Detalis',
    src:'/lms1.png'
  },
  {
    index: "3",
    headline: "CARDSY",
    button: 'Show Detalis',
    src:'/cardsy1.png'
  },
  {
    index: "4",
    headline: "Zone Outlet",
    button: 'Show Detalis',
    src:'/zone1.png'
  },
  {
    index: "5",
    headline: "My Portfolio",
    button: 'Show Detalis',
    src:'/cardsy1.png'
  }
];

const Slide = ({ slide, current, handleSlideClick }) => {

  
  const slideRef = useRef(null);

  const handleMouseMove = (event) => {
    const el = slideRef.current;
    const r = el.getBoundingClientRect();

    el.style.setProperty(
      "--x",
      event.clientX - (r.left + Math.floor(r.width / 2))
    );
    el.style.setProperty(
      "--y",
      event.clientY - (r.top + Math.floor(r.height / 2))
    );
  };

  const handleMouseLeave = () => {
    slideRef.current.style.setProperty("--x", 0);
    slideRef.current.style.setProperty("--y", 0);
  };

  const handleSlideClickLocal = (event) => {
    handleSlideClick(slide.index);
  };

  const imageLoaded = (event) => {
    event.target.style.opacity = 1;
  };

  const classNames = ['slide'];
  if (current === slide.index) classNames.push('slide--current');
  else if (current - 1 === slide.index) classNames.push('slide--previous');
  else if (current + 1 === slide.index) classNames.push('slide--next');

  return (
    <li
      ref={slideRef}
      className={classNames .join(' ')} // added 'slider__slide' to classNames
      onClick={handleSlideClickLocal}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="slide__image-wrapper">
        <Image
          className="slide__image"
          alt={slide.headline}
          src={slide.src}
          width="300"
          height="300"
          onLoad={imageLoaded}
          priority
        />
      </div>
      <article className="slide__content">
        <h2 className="slide__headline">{slide.headline}</h2>
      <Link href={`/${slide.index}`}><button className="slide__action btn">{slide.button}</button></Link>
      </article>
    </li>
  );
};


export default Slide;