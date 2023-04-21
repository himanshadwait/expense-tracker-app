import React from "react";
import ReactDOM from "react-dom/client";
// import reactDOM object from react-dom thrid party library which is one of our dependencies

import "./index.css"; // must add .css extension in your imports
import App from "./App"; // Omit .js extension in your imports

// create root method creates the main entry point, the main hook of the overall user interface we are
// about to build with React. It tells React where this react app, the user interface should be placed in
// web page that is loaded. This leads us to index.html file in the public folder.
// We select the id "root" with some regular JavaScript Code and use the method createRoot from the ReactDOM library
// to tell React that this should be the root of our React application, the main place where the React application
// gets rendered to.

const root = ReactDOM.createRoot(document.getElementById("root"));

// we call the method render on the root object to tell React what should be rendered to that div that we selected above.

root.render(<App />);

// the content of the <div></div> with the id = "root" should be replaced with whatever is inside root.render(), which is
// <App /> in this case. Which is a component. This gets rendered in that div we created earlier.
