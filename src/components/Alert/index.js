import React from "react";

const Alert = props => {
    return (
        <div 
            role="alert"
            className={`alert alert-${props.type} fade in`}
        >
            GAME OVER, TRY AGAIN!
        </div>
    );
}

export default Alert;
