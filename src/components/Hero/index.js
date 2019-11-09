import React from "react";
import "./style.css";

const Hero = props => {
    return (
        <div className="hero text-center">
            <header className="header">
                <h1>Parks & Rec Clicky Game!</h1>
                <h2>Click on a character to earn points, but don't click on the same character more than once!</h2>
            </header>
        </div>
    );

}

export default Hero;
