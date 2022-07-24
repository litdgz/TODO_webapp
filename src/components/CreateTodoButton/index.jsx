import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton() {
  const onClickFunction = () => {
    alert("Aqui se deberia abrir el modal");
  };
  return (
    <button className="CreateTodoButton" onClick={onClickFunction}>
      +
    </button>
  );
}
