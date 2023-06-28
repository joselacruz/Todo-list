import './TodoList.css'

function TodoList({children}) 


{
    return(
    
    <ul className="todoList-container">

      {children}
    </ul>
    
    );
  
  }
export {TodoList};