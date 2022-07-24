import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

export function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
