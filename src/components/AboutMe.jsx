import React from "react";
import useHover from "./useHover.jsx";
import AboutData from "./AboutData.jsx";

const HomeNavbar = () => {
  const {hoverStates, handleMouseEnter, handleMouseLeave } = useHover();

  const about = AboutData.map((data, index) => (
    <div 
    key={index} 
    className={`about-${index+1}-container about-container`}
    onMouseEnter={() => handleMouseEnter(index)}
    onMouseLeave={() => handleMouseLeave(index)}>
        <div className={`header-image-${index+1}-container header-image-container`}>
            <h2 className='about-header'>{data.header}</h2>
            <img className='about-image' src={data.src} alt={data.alt} />
        </div>
        {hoverStates[index] && 
        (<p className='about-p'>{data.descrip}</p>)}
      </div> 
  ))

  return <div className="about-section">{about}</div>;
};

export default HomeNavbar;