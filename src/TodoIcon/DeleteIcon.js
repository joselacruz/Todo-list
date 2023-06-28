import React from "react";
import {TodoIcon} from './';

function DeleteIcon ({onDelete}) {

    return (
        <TodoIcon  
           type = "delete"
           color = "#ADAC9A"
           onClick ={onDelete}
        />
    )
}

export {DeleteIcon};