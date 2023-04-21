import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

// useState has been added to update the expenses array when new expense is added.
const dummyExpenses = [
  {
    id: "e1",
    title: "New Wooden Desk",
    amount: 294.67,
    date: new Date(2022, 7, 16),
  },
  {
    id: "e2",
    title: "Toilet Cleaner",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 299.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: "e4",
    title: "New TV",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dummyExpenses);

  // Communication between App and NewExpense (child to parent) Passing data Bottom-up

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]); // We can use the spread operator not just on objects but also on arrays.
    // If we update our state depending on the previous state, we should use the special function form for the state updating function.
    // We pass a function as an argument to the state updating function.
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses]
    })
  };
  // We are using the lifted data or state from NewExpense here in this addExpenseHandler function,
  // We are not yet managing that data as state here, instead, we're just logging it to a console.

  // Under the hood code for the JSX code that we have wriiten below

  // return React.createElement(
  //   "div", // the element that we are creating
  //   {}, // the attributes of that element
  //   // Next we pass whatever comes in between open and close tag of the element we just created.
  //   React.createElement("h2", {}, "Let's Get Started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    // The following is our desired target state. We want to render on our screen a div with an h2 tag with some
    // text inside of it.
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div> // Using our Custom component as an HTML element
  );
};

export default App;
// In modern javascript if you have something in one file and want to use it in another file, you have to
// export or import it. This is how those two files gets connected and how we can use a feature, in this case,
// a function defined in App.js, inside other file.
// We use PascalCase convention for defining file names and functions in React.

// The HTML code inside of JavaScript code is a feature called JSX. It stands for JavaScript XML.
// A component is a basic HTML element.

// The App component will be our so-called, root component. It is the main component which is being rendered
// index.js file.
