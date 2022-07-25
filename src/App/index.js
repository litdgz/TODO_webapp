import React from 'react';

import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';

import { useTodos } from '../hooks/useTodos'

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
    totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos()

  
  return (
    <React.Fragment>
      <TodoHeader>
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList>
          {error && <p>Desesperate, hubo un error...</p>}
          {(loading && !error) && <p>Estamos cargando, no desesperes...</p>}
          {(!loading && !searchedTodos.length && !error) && <p>Crea tu primer todo!!</p>}
          {searchedTodos.map(todo => (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>
        {!!openModal && <Modal>
          <TodoForm 
          addTodo={addTodo}
          setOpenModal={setOpenModal}
          />
        </Modal>}
      <CreateTodoButton 
      openModal={openModal}
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export default App;