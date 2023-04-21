import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: (Math.floor(Math.random() * 10) + 1).toString(),
    };
    props.onAddExpense(expenseData); // passing data from NewExpense to App
    setIsEditing(false);
  };
  // By calling the function we receive on the onAddExpense prop and passing data to that function
  // `props.onAddExpense(expenseData)`, we are lifting the state up. We don't keep it in NewExpense
  // component, instead we are lifting it up to the App component.

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
