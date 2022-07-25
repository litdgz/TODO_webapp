import React from "react";
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
