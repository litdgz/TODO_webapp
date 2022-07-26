import React from 'react';

import { TodoHeader } from '../components/TodoHeader';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodosError } from '../components/TodosError';
import { TodosLoading } from '../components/TodosLoading'
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from '../Modal';
import { TodoForm } from '../components/TodoForm';
import { ChangeAlert } from '../components/ChangeAlert';

import { useTodos } from '../hooks/useTodos'
import { EmptyTodos } from '../components/EmptyTodos';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el cursso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: true },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const { 
    state,
    stateUpdaters
  } = useTodos()

  const { 
    error,
    loading,
    searchedTodos,
    totalTodos,
    completedTodos,
    searchValue,
    openModal, 
  } = state

  const {
    setSearchValue,
    completeTodo,
    deleteTodo,
    addTodo,
    setOpenModal,
    syncronizeTodos,
  } = stateUpdaters

  
  return (
    <React.Fragment>
      <TodoHeader
      loading={loading}
      >
        <TodoCounter 
        totalTodos={totalTodos}
        completedTodos={completedTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchedText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchTodos={(searchText) => <p>No hay resultados para {searchText}</p>}

        // render={todo => (
        //   <TodoItem
        //     key={todo.text}
        //     text={todo.text}
        //     completed={todo.completed}
        //     onComplete={() => completeTodo(todo.text)}
        //     onDelete={() => deleteTodo(todo.text)}
        //   />
        // )}
      >
        {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
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
      <ChangeAlert syncronize={syncronizeTodos} />
    </React.Fragment>
  );
}

export default App;