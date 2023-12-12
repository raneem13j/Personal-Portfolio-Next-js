import React, { useState } from 'react';
import { Button } from 'react-scroll';
import Slide from './Slide';
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaLongArrowAltLeft } from "react-icons/fa";


const Slider = ({ heading, slides }) => {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;

    setCurrent((previous < 0) ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;

    setCurrent((next === slides.length) ? 0 : next);
  };

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  // Ensure heading is defined before using it
  const headingId = heading ? `slider-heading__${heading.replace(/\s+/g, '-').toLowerCase()}` : '';

  const wrapperTransform = {
    'transform': `translateX(-${current * (100 / slides.length)}%)`,
  };

  return (
    <div className="slider" aria-labelledby={headingId}>
      <ul className="slider__wrapper" style={wrapperTransform}>
        {heading && <h3 id={headingId} className="visuallyhidden">{heading}</h3>}

        {slides.map((slide) => (
          <Slide
            key={slide.index}
            slide={slide}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="slider__controls">
        <Button
          className='icon'
          to={`slide${current === 0 ? slides.length - 1 : current - 1}`}
          type="previous"
          title="Go to previous slide"
          onClick={handlePreviousClick}
        ><FaLongArrowAltLeft /></Button>
         
        <Button
          className='icon'
          to={`slide${current === slides.length - 1 ? 0 : current + 1}`}
          type="next"
          title="Go to next slide"
          onClick={handleNextClick}
        ><FaLongArrowAltRight />
        </Button>
      </div>
    </div>
  );
};

export default Slider;
