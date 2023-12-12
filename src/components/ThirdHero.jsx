import React from 'react'

const ThirdHero = () => {
  return (
    <div className='third-hero'>
        <div className="third-hero-bg">
          <div className="third-hero-border">
            <a className='download-button'>download cv</a>
            <div className="text-image-container-1 text-image-container">
              <img className="third-hero-image" src="images/calendar.png" alt="calendar" />
              <p className="third-hero-p">1+ years</p>
            </div>
            <div className="text-image-container-2 text-image-container">
              <img className="third-hero-image" src="images/customer.png" alt="customer" />
              <p className="third-hero-p">300 users</p>
            </div>
            <div className="text-image-container-3 text-image-container">
              <img className="third-hero-image" src="images/blueprint.png" alt="blueprint" />
              <p className="third-hero-p">30 projects</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ThirdHero;