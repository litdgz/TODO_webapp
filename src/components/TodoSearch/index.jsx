import React, { useState } from "react";
import "./TodoSearch.css";

export function TodoSearch({ searchValue, setSearchValue }) {
  console.log(searchValue);
  return (
    <input
      className="TodoSearch"
      placeholder="Cebolla"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
}
