import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch'; 
import { TodoList } from '../TodoList';
import { TodoDraw } from '../TodoDraw';
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {TodosLoading} from '../TodosLoading';
import {TodosError} from '../TodosError';
import {EmptyTodos} from '../EmptyTodos';
import { Modal } from '../Modal';
import {TodoContext} from '../TodoContext';
import { TodoForm } from '../TodoForm';
import './App.css';


function AppUI () {
      const {
            loading,
            error,
            searchedTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
      } = React.useContext(TodoContext);
  return (
        <>
       <TodoCounter/>
       <TodoSearch/>
            <TodoList>
            <TodoDraw  loading={loading} />
           {loading && <TodosLoading/>}
           {error && <TodosError/>}
           {(!loading && searchedTodos.length === 
           0) && <EmptyTodos/>
           }
          {searchedTodos.map(todo =>(
            <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
           />
          ))}
          
          </TodoList > 

       <CreateTodoButton setOpenModal= {setOpenModal}/>
      {openModal && (
              <Modal>
                   <TodoForm/>
              </Modal>
        )}
  
       
        </>
  )
}


export {AppUI};


// const defaultTodos = [
//   {text:'Cortar cebolla', completed: false},
//   {text:'Tomar el curso de Introduccion a React.js', completed: true},
//   {text:'Llorar con la Llorona', completed: false},
//   {text:'LA LALA lalala alal', completed: false},
// ];
