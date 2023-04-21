import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onDropDownChange(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter By Year</label>
        <select value={props.selected} onChange={dropDownChangeHandler}>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
          <option value={2025}>2025</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
