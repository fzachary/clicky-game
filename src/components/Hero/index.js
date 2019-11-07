import React from "react";

const Hero = props => {
    return (
        <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <header className="header">
                <h1>Clicky Game!!!</h1>
                <h2>Click on an image to earn points, but don't click on the same image more than once!</h2>
            </header>
        </div>
    );

}

export default Hero;
