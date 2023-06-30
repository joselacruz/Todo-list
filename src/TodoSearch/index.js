import './TodoSearch.css';
import React from 'react';
import { TodoContext } from '../TodoContext';
function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
    searchedTodos,
    todos,

   } =  React.useContext(TodoContext);
  let showNotfound;
  if(searchedTodos >= 0 && todos.length > 0) {
   showNotfound = "sin resultados"
  }

    return(
     
     <div className="todo-search-container"> 
      <span></span>
       <input placeholder="Cortar cebolla" value={searchValue} onChange={(event) => {
        setSearchValue(event.target.value);
       } }/>
       <small>{showNotfound}</small>
     </div>
    
    );
  
  }
export {TodoSearch};