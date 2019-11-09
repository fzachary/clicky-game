import React from "react";

function Status(props) {

    return  (

        <li className="nav-item text-light center-align" name="message">{props.message}</li>
    )
}

export default Status;