import React from 'react';
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal';

function AppUI() {
  const { 
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo
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
        <Modal>
          <p>Telefaefae</p>
        </Modal>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export { AppUI };