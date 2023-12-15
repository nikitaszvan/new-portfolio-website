import React from 'react'

const FirstHero = () => {
    const first_hero_caption= `hi, i'm nikita and i'm a front end developer`;
    const first_hero_subcaption= "(and i'll take you through what i can do)";

    return (
    <div className="first-hero">
        <div className="first-hero-first-block-container">
            <div className="first-hero-design">
                <h1>/{'>'}</h1>
                <h1>/{'>'}</h1>
            </div>
            <div className="menu-items">
                <h2 data-text="about">about</h2>
                <h2 data-text="portfolio">portfolio</h2>
                <h2 data-text="work with me">work with me</h2>
            </div>
        </div>
        <div className="h1-h2-container">
            <h1>{first_hero_caption}</h1>
            <h2>{first_hero_subcaption}</h2>
            <img src="images/arrow-down-sign-to-navigate.png" alt="scroll arrow" />
        </div>
        <img src="images/nikita.png" alt="nikita image" />
        <div className="first-hero-tab">
            <div className="tab-triangle"></div>
            <div className="tab-rectangle"></div>
        </div>
        <div className="first-hero-border"></div>
        <div className="first-hero-tab-border">
            <div className="tab-rectangle-border-1"></div>
            <div className="tab-rectangle-border-2"></div>
            <div className="tab-rectangle-border-3"></div>
            <div className="tab-rectangle-border-4"></div>
        </div>
        
    </div>
    )
}

export default FirstHero