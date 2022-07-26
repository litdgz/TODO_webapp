import React from "react";
import "./TodoList.css";

export function TodoList(props) {
  const renderFunc = props.children || props.render;
  return (
    <section className="TodoList-container">
      {props.error && props.onError()}
      {props.loading && !props.error && props.onLoading()}
      {!props.loading &&
        !props.totalTodos &&
        !props.error &&
        props.onEmptyTodos()}
      {!!props.totalTodos &&
        !props.searchedTodos.length &&
        props.onEmptySearchTodos(props.searchedText)}

      <ul>
        {!props.loading && !props.error && props.searchedTodos.map(renderFunc)}
      </ul>
    </section>
  );
}
