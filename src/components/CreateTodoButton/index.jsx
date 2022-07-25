import React from "react";
import "./CreateTodoButton.css";

export function CreateTodoButton({ openModal, setOpenModal }) {
  const onClickFunction = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickFunction}>
      +
    </button>
  );
}
