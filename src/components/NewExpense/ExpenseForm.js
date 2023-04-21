import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Using three state slices
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Using single state slice
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //  setUserInput({
    //   ...userInput,
    //    enteredAmount: event.target.value
    //  })

    // Whenever you update a state and you depend on the previous state, we should use an alternative form of the
    // state updating funciton. We pass in another function to the state updating function which takes in previous
    // state snapshot as its argument. This is done because React schedules state updates, it doesn't perform them
    // instantly and therefore, if you schedule a lot of state updates at the same time, you could be depending on
    // an outdated or incorrect date snapshot, if we use the previous approach. In the latter approach, React will
    // guarantee that the state snapshot it gives you in the inner function will always be the latest state snapshot
    // keeping all schedule state updates in mind. see below.

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };
  // Here we depend on previous state snapshot to copy in the existing values and then just override just one value
  // with a new one.

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.date,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); // To prevent the webpage to re-load on form submission, which is default JavaScript behaviour.
    // Child component (ExpenseForm) communicating to parent component (NewExpense)
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData); // Communication step child-parent (passing Data from ExpenseForm to NewExpense)
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2022-01-01"
            max="2025-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
// if a `<button>` of type submit is pressed inside of a `<form></form>`, this `<form>` element will emit an event to which
// we can listen and that's the `submit` event

// Two-way-binding: For inputs we don't just listen to changes (using onChange above) but we can also pass a new value back
// into the input, we feed the state back into the input so that when we change the state, we also change the input. So that
// we can reset or change the input programmatically. All we  have to do, is to add a `value` attribute to the input element.

export default ExpenseForm;
