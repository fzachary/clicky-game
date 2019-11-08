import React from "react";

function Column({children}) {
    return(
        <div className="col-md">
            {children}
        </div>
    );
}

export default Column;