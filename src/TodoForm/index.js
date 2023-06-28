import react from "react";
import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css';
function TodoForm () {
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext);

    const [newTodoValue,setNewTodoValue] = React.useState(''); 

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    const onCancel = () => {
        setOpenModal(false);
    }

    const onChange = (event) => {
     setNewTodoValue(event.target.value);
    }
return (
    <form>
    <label>Escribe tu nuevo TODO</label>
    <textarea placeholder="Cortar cebolla para el almuerzo"
    value={newTodoValue}
    onChange={onChange}
    />
    <div className="TodoForm-buttonContainer">
    <button type="button" className="todoFrom-button todoFrom-cancel"
    onClick={onCancel}
    >Cancelar</button>
    <button type="button" className="todoFrom-button todoFrom-add"
    onClick={onSubmit}
    >Añadir</button>
    </div>
  </form>
)
}
export {TodoForm};