import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoCounter.css'
function TodoCounter() {
 const {
  completedTodos:completed,
  totalTodos:total,
 } =  React.useContext(TodoContext);

  let showTex = "";
  if(completed < total){
    showTex = `Completado ${completed} de ${total} `;
  }
  else if(total==0){
    showTex = "Agregra tu Primer Todo a la lista";
    console.log(total);
  }
  else{
    showTex = "buen trabajo has completado tu lista de Todo";
  }
    return(

      <header>
        <h1>TodoList</h1> 
        <h2> {showTex} </h2> 
      </header>
      
    );
  
  }
export {TodoCounter};