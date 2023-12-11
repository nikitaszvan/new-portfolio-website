import React from 'react'
import AboutMe from './AboutMe.jsx'

const SecondHero = () => {
  const about_me = "I am a junior front-end developer currently working at Reev Industries and my specialties are using react and implementation of html, css, node, express to provide responsive layout, data fetching and ssr.";

  return (
    <div className="second-hero">
      <div className="white-background"></div>
      <div className="cover-triangle"></div>
      <h1 data-text="about me"></h1>
      <p>{about_me}</p>
    </div>
  )
}

export default SecondHero;