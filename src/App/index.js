import React, { useState } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from '../components/TodoSearch'
import { TodoList } from '../components/TodoList'
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoItem } from "../components/TodoItem";

//import logo from './logo.svg';
//import './App.css';

const defaultTodos = [
  {
    text: 'Cortar cebolla', 
    completed: false 
  },
  {
    text: 'Lavar platos',
    completed: true
  },
  {
    text: 'secar platos',
    completed: false
  }
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState("");

  const searchedTodos = todos.filter(todo => todo.text.toLocaleLowerCase().includes(searchValue.toLowerCase()))

  const renderTodos = searchValue ? searchedTodos : todos

  const completedTodos = renderTodos.filter(todo => !!todo.completed).length
  const totalTodos = renderTodos.length

  const onComplete = (text) => {
    const todoCompleted = todos.findIndex(todo => todo.text == text)
    const nuevoTodos = [ ...todos ]
    nuevoTodos[todoCompleted].completed = true
    
    setTodos(nuevoTodos)
  }

  const onDelete = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const nuevoTodos = [...todos]
    nuevoTodos.splice(todoIndex, 1)
    setTodos(nuevoTodos)
  }
  

  return (
    <React.Fragment>
      <TodoCounter 
      total={totalTodos}
      completed={completedTodos}
      />
      <TodoSearch 
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {renderTodos.map(todo => (
        <TodoItem 
        key={todo.text} 
        text={todo.text} 
        completed={todo.completed}
        onComplete={() => onComplete(todo.text)}
        onDelete={() => onDelete(todo.text)}
        />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
