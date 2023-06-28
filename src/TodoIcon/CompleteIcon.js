import React from "react";
import {TodoIcon} from './';
function CompleteIcon ({completed,onComplete}) {

    return (
        <TodoIcon  
          type = "check"
          color = {completed ? 'rgb(6,188,66)':'#ADAC9A'}
          onClick ={onComplete}
        />
    )
}

export {CompleteIcon};