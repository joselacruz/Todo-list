import {ReactComponent as CheckSVG} from './check-3278.svg';
import {ReactComponent as DeleteSVG} from './delete.svg';
import './TodoIcon.css'

const iconTypes  = {
    "check":(color) => <CheckSVG fill={color}/>,
    "delete":(color) => <DeleteSVG fill={color}/>,
}
function TodoIcon({type, color, onClick}) {

    return(
        <span className= {`icon-${type}`}
        onClick = {onClick}
        >

           {iconTypes[type](color)}
        </span>
        
    )
}

export {TodoIcon};