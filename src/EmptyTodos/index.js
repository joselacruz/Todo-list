import React from "react";
import './EmptyTodos.css';


function EmptyTodos () {
    return (
     <div className="emptyIconContainer">
        <span className="emptyIcon emptyIcon-1"></span>
        <span className="emptyIcon emptyIcon-2"></span>
     </div>
    )
}

export {EmptyTodos};