import {CompleteIcon} from '../TodoIcon/CompleteIcon';
import {DeleteIcon} from '../TodoIcon/DeleteIcon';
import './TodoItem.css'
function TodoItem(props) {
    return(
      <li className='todo-item'>
       <CompleteIcon
         completed = {props.completed}
         onComplete={props.onComplete}
       />
        {/* <span
        className={`icon-check ${props.completed && "icon-check--active"}`}
        onClick={props.onComplete}
        >

        </span> */}
        <p className={`${props.completed && "todoitem-p--complete"}`}>
          {props.text}
        </p>
        <DeleteIcon
          onDelete={props.onDelete}
        />
        {/* <span  onClick={props.onDelete}>X</span> */}
      </li>
    );
  
  
  }

  export {TodoItem};