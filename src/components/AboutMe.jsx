import React, {useRef} from "react";
import useHover from "./useHover.jsx";
import AboutData from "./AboutData.jsx";
import ThirdHero from "./ThirdHero.jsx";

const AboutMe = () => {

  function changeParentHeight(containerRef) {
    const element = containerRef.current;
    if (element) {
      element.style.height = '20vw';
    }
  };

  const containerRef = useRef(null);
  const about = AboutData.map((data, index) => (
    <div 
    key={index} 
    className={`about-${index+1}-container about-container`}>
        <div className={`header-image-${index+1}-container header-image-container`}
        onMouseOver={() => changeParentHeight(containerRef.current)}
        ref={containerRef}>
            <h2 className='about-header'>{data.header}</h2>
            <img className='about-image' src={data.src} alt={data.alt} />
        </div>
          <p className='about-p'>{data.descrip}</p>
      </div>
  ))

  return <div className="about-section">{about}<ThirdHero /></div>;
};

export default AboutMe;