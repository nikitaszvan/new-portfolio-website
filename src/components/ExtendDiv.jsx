import React from 'react'
import AboutData from "./AboutData.jsx";

const ExtendDiv = (props) => {
    
    return (
    <div className="extend-container">
        <h1 className="container-header">{props.h1}</h1>
        <img src={props.src} alt={props.alt} />

    </div>
    )
}

export default ExtendDiv;