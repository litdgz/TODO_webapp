import React, { useContext, useState } from 'react'
import { TodoContext } from '../../TodoContext'
import './TodoForm.css'

export function TodoForm() {
    const { addTodo, setOpenModal } = useContext(TodoContext)
    const [newTodoValue, setNewTodoValue] = useState('')

    function onChange(event) {
        setNewTodoValue(event.target.value)
    }
    function onCancel() {
        setOpenModal((prevState) => !prevState);
    }
    function onSubmit(event) {
        event.preventDefault();
        addTodo(newTodoValue)
        setOpenModal((prevState) => !prevState);
    }
  return (
    <form onSubmit={onSubmit}>
        <label>Escribe tu nuevo TODO</label>
        <textarea 
        value={newTodoValue}
        onChange={onChange}
        placeholder='Cortar la cebolla para el almuerzo'
        />
        <div className="TodoForm-buttonContainer">
            <button 
            type='button'
            className="TodoForm-button TodoForm-button--cancel"
            onClick={onCancel} >
                Cancelar
            </button>
            <button
            type='submit'
            className="TodoForm-button TodoForm-button--add"
            >
                Añadir
            </button>
        </div>
    </form>
  )
}
