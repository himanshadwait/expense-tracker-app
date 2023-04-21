import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  // We want to render one expense item per element in the array.
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onDropDownChange={filterChangeHandler}
        />
        {/* Rendering a conditional for empty list using javaScript ternary expression */}
        {/* {filteredExpenses.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )} */}
        {/* Long ternary expressions as above can be a bit hard to read. To restructure the above code
        We can use JavaScript AND (&&) operator. JavaScript works such that if we use the AND operator
        it basically will return the part after the AND operator, as a result of overall conditon check
        if the first conditon is met */}

        {/* {filteredExpenses.length === 0 && <p>No Expenses Found!</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
