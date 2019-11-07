import React from "react";

const Alert = props => {
    return (
        <div 
            role="alert"
            className={`alert alert-${props.type} fade in`}
        >
            {props.children}
        </div>
    );
}

export default Alert;
