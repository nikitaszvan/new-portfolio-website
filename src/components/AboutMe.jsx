import React, {useRef, createRef} from "react";
import useHover from "./useHover.jsx";
import AboutData from "./AboutData.jsx";
import ThirdHero from "./ThirdHero.jsx";

const AboutMe = () => {

  const keyFramesTransUp = `
  @keyframes scale_down {
    0% {
      transform: translateY(0);
      opacity: 0%;
    }
    100% {
      transform: translateY(1.6vw);
      opacity: 100%;
    }
}`;

const keyFramesTransDown = `
  @keyframes scale_up {
    0% {
      transform: translateY(1.6vw);
      opacity: 100%;
    }
    100% {
      transform: translateY(0);
      opacity: 0%;
    }
}`;

const styleTag = document.createElement('style');
  styleTag.type= 'text/css';
  styleTag.appendChild(document.createTextNode(keyFramesTransUp));
  styleTag.appendChild(document.createTextNode(keyFramesTransDown));
  document.head.appendChild(styleTag);


  function incParentHeight(container) {
    container.style.height = '15vw';
    container.querySelector('.about-p').style.animation='forwards scale_down 0.7s ease-out';
  };

  function decParentHeight(container) {
      container.style.height = '7vw';
      container.querySelector('.about-p').style.animation='forwards scale_up 0.7s ease-out';
  };

  const containerRefs = useRef(Array(AboutData.length).fill(null).map(() => createRef()));
  const about = AboutData.map((data, index) => (
    <div 
    key={index} 
    className={`about-${index+1}-container about-container`}
    ref={containerRefs.current[index]}
    onMouseOver={() => (index !== 0) && incParentHeight(containerRefs.current[index].current)}
        onMouseOut={() => (index !== 0) && decParentHeight(containerRefs.current[index].current)}
    >
        <div className={`header-image-${index+1}-container header-image-container`}>
            <h2 className='about-header'>{data.header}</h2>
            <img className='about-image' src={data.src} alt={data.alt} />
        </div>
          <p className='about-p'>{data.descrip}</p>
      </div>
  ))

  return <div className="about-section">{about}<ThirdHero /></div>;
};

export default AboutMe;