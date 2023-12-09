import React from 'react'

const FirstHero = () => {
    const first_hero_caption= "hi, i'm nikita and i'm a front end developer";
    const first_hero_subcaption= "(and i'll take you through what i can do)";

    return (
    <div className="first-hero-bg">
        <div className="first-hero-first-block-container">
            <div className="first-hero-design">
                <h1>/{'>'}</h1>
                <h1>/{'>'}</h1>
            </div>
            <div className="menu-items">
                <h2>about</h2>
                <h2>portfolio</h2>
                <h2>work with me</h2>
            </div>
        </div>
        <div className="h1-h2-container">
            <h1 data-text={first_hero_caption}></h1>
            <h2>{first_hero_subcaption}</h2>
        </div>
        <img src="images/scroll-arrow.png" alt="scroll arrow" />
        <img src="images/nikita.png" alt="nikita image" />
        <div className="tab-triangle"></div>
        <div className="tab-rectangle"></div>
        <div className="first-hero-border"></div>
        <div className="first-hero-bottom-border"></div>
        <div className="tab-triangle-line"></div>
        <div className="tab-trangle-border"></div>
    </div>
    )
}

export default FirstHero