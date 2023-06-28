import React from "react";
import { useLocalStorange } from "./useLocalStorange";

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    const {
        item : todos,
        saveItem: saveTodos,
        loading,
        error,
      }= useLocalStorange('TODOS_V1', []);
      const [searchValue,setSearchValue] = React.useState('');
      const [openModal , setOpenModal] = React.useState(false);
      
      const completedTodos = todos.filter(todo => 
        !!todo.completed).length;
      const totalTodos = todos.length;
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        }
      );
    
    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false,
      })
      saveTodos(newTodos);
    }
     const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text 
        );
      newTodos[todoIndex].completed = true;
      saveTodos(newTodos);
     }
    
     const deleteTodo = (text) => {
      const newTodos =[...todos];
      const rmTodo = newTodos.filter((todo) => 
      todo.text != text
      );
      saveTodos(rmTodo);
     };



    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
          
        }}> 
          {children}
        </TodoContext.Provider>
    )
}




export {TodoContext,TodoProvider};