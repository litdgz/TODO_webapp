import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';

function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
  } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter/>
      <TodoSearch/>
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
          <TodoForm />
        </Modal>}
      <CreateTodoButton 
      openModal={openModal}
      setOpenModal={setOpenModal}
      />
    </React.Fragment>
  );
}

export { AppUI };