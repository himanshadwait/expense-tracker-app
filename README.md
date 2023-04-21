# first-react-app

First React App while learning the framework
React is a javascript library for building user interfaces.
HTML, CSS & JavaScript are also about building user interfaces.
React, however, makes building complex, interactive and reactive user interfaces simpler.

React is all about "components" because all user interfaces in the end are made up of components.
Components are reusable building blocks in any user interface. Components are combination of HTML
code, CSS code for style and JavaScript code for logic. All user interfaces on all kinds of web
applications can be split up into components.

React is all about this. We build individual components and then tell React how to copose them
together into a final user interface. React embraces this concept of components because of the
reusability aspect and because it allowsus to separate our concerns. Both concepts are important
concepts on programming in general. Having reusable building blocks helps us avoid repetition
and having a separation of concerns allows in keeping us codebase samall and manageable.
Instead of having one large file which holds all the HTML code and all the JavaScript logic
for our user interface, we can separate our code in small units, these components,
where every component has one clear concern, one focus, one specific task separate
across multiple files. These files have small pieces of code which in turn are easy to
manage and maintain.

React code is written in "declarative way". Mostly React components are about combining HTML
and javaScript and then we can also add CSS but it's not the focus of React. React allows us
to create re-usable and reactive components consisting of HTML, and JavaScript (and CSS).
With React we will always define the desired target state(s) and let React figure out the
actual JavaScript DOM instructions. We don't write these concrete DOM instructions on our
own ans we would be doing it in vanilla JavaScript, instead with React and React components,
we just define these end states and under whcih condition which state should be used and
then React will do all the rest under the hood.

Google Create React App and find the github repository with the information on it.
This is the fastest way to start with react.
Visit create-react-app.dev This willgive us a nice development environment with a
development server which allows us to preview the application locally on our machine,
and optimise our React code before we push it to a production server.
Install Node.js. This helps run the javaScript code run outside the browser.
React code is JavaScript code that runs in the browser. We will need node.js for
create-react-app and to run a develpment server.

For a new project: open terminal in VS code and run `npm install`. This terminal will
automatically navigate into your project folder so you don't need to cd manually first.
The npm install command will look into package.json file and download and install all
the required packages and dependencies. Run `npm start` to run the development server.
Don't close this terminal and don't close it with ctrl + C unless you're done for the day.
You can always restart the server by the same command.

index.js is going to be the first code file which is going to get executed whenever
App page loads up after some transformations.

The imperative approach involves giving clear instructions, clear step by step instructions,
what JavaScript and browser
should be doing....

```
function App() {
    const para = document.createElement("p");
    para.textContent = "This is also visible";
    document.getElementById("root").append(para);
}
```

A component in React is just a JavaScript function which returns a JSX code.
The convention of naming the function is that
it should be same as file name it is created in.

The simple rule that React applies is that lowercase elements are built in HTML
elements, whereas elements starting with an
uppercase character are elements defined by us.

In React components, there is one important rule regarding JSX code that is returned
inside of a component. "We must only have one root element per return statement or
per JSX code snippet"

While adding classes for CSS attributes in JSX code we use a keyword `className`.

Typically we don't have data hard coded in JSX code. Instead to output dynamic data,
we use a special syntax React gives us
inside of the JSX code snippets. Replace hard coded data with opening and closing
curly braces. Basic javaScript expressions can be run in between those curly braces.
for example {expenseData} is a valid JavaScript expression, just pointing at a
variable or a constant. This can also be used for assigning values to the attributes.

In vanilla JavaScript, we also use functions to split functionality across multiple
smaller codebases and also to have reusabel functions which we can call multiple times.
These functions are made reusable by accepting parameters and that allows us to call
one of the same function with different parameter values and therefore the function
may and will produde different dresults for different inputs.

We can make our components reusable by using parameters and a concept called props in React.
We can pass data to the custom component by adding a attribute and inside of that component
we can then get access to that attribute. Just as HTML elements can have attributes,
with React, our custom components can also have attributes and this concept is called
props for properties.
We can make these components configurable from outside, the data should not be stored
inside of them but instead be received from outside. We access the values assigned to
the attributes which we define in the place where we use our custom components by parameters
and we pass one parameter to the function definition defining the custom component and that
one parameter will be an object which holds all the received attributes as properties,
hence the name props. This parameter can be named anything but typically its named "props"
to make it clear that this is that object which holds all the values that we get for the
attributes for our custom elements. To be precise we get key:value pairs in this props
object which is passed in by React automatically. The keys will be the attribute names
defined in the parent component and the values will be the values assigned to those attribues.
The key which we access on the props object has to be the name we picked for our attribute.
We only pass data from a component to a direct child component.

The approach of building a user interface from smaller building blocks is called composition.

Out of the box, just like that we can't use our custom components like wrappers around
other kind of content. Having content between opening and closing tag doesn't work just
like that. But of course it does work for the built in HTML elements.

One special props which is built in to React, which every component receives wven
if we never set it explicitly. It's the `children` prop which can be accessed by
{props.children}. The value of this children prop will always be the content between
the opening and closing tags of your custom component.

All the default HTML components out of the box support `className` for adding css
classes to the rendered HTML elements. But your custom components only support what you
tell them to support. So if you want to make sure that a className can be set on your
custom component and then has an effect, you will have to tweak the code in that component.
Whenever we combine components, we are using composition and an especially important part of
composition is `props.children` feature which allows us to also create wrapper components.

JSX code is not supported by the browser. It is just syntactic sugar which works due behind the
scene transformations.

# User Interaction and Handling User Events, State in React

- Handling Events
- Updating the UI and Working with "State"
- A closer look at components and state

On all built-in HTML elements, like divs and h2 and buttons and so on we have full access to all
These native DOM events which we can listen to. For all these default events there is a prop
equivalent in React, which we can add to these built in HTML elements to listen to these events.
Instead of adding an event listener imperatively, like
`document.getElementById("root").addEventListener`
In React we add an event Listener by going to the JSX element, and there we add a special prop.
It's a prop which starts with `on` like `onClick`. This adds an event Listener for click events
to a particular element like a button. What happens when click occurs? We do that by assigning a
value to this click event. The value has to be the code which should be executed when that click
occurs, which means the value should be a function. So all these event Handler props want a function
as a value. We typically want to define the function before we return in that JSX function code. We
just point at the function when we pass it as a value to our eventListener prop, We do not execute it.
`<button onClick = {clickHandler} >Change Title</button>`
If we would add parenthesis after the function name, JavaScript would execute this when this line of
code is being parsed and this line of code is being parsed when the JSX code is returned. So it's not
executing clickHandler when the click occurs but when that particular JSX code is evaluated and that would
be too early. This is why, instead, we just point at the function using its function name, we pass a
pointer at this function as a value to onClick, and then React basically memorizes this and executes the
function for us when the click occurs.
The convention that is followed while naming those functions is that the function name ends with "Handler".
This is not a must-do.

The component is a function, a special one at that which returns JSX code. Since it's a function,
someone has to call it. We never call it, instead we use this as HTML elements in the JSX code. Under the hood,
this is almost like a function call. By using our components in JSX code, we make React aware
of our component functions. Whenever React evaluates the JSX code, it will call those component functions and it keeps on calling any component functions it encounters in JSX, then calls any functions that those functions might have returned,
any elements those components might have used in their JSX code until there are no more functions left. Then it evalueates the overall result and translates that into DOM instructions which renders something on the screen. But, it does this only once
and never repeats that.
We need a way of telling react that something changed and a certain component should be re-evaluated. This is where state
is introduced
If you have a variable in your component function and that varaible changes, React ignores it. It doesn't care about that. The code
executes but the overall component function doesn't execute again just because some variable changed. Even if, this would execute again,
then this variable would be recreated and re-initialised to the props value.
Just because a click occured or a variable changed, this does not trigger this component function to run again.
To tell React that it should run again, we need to import named import from the React library between curly braces after a comma
after the default import. This is a function called `useState` which allows us to define values as state where changes to the
values should reflect in the component function being called again, which is a key difference to the regular variable assignment.
This function must only be called inside our component function, not outside, not inside nested function. `useSate` is a so called
React-hook, there are other hookds as well. All these React-hooks can be recognised by the fact that they start
with the word 'use' in their name.
`useState` needs a initial, default state value as its argument, because with `useState` we basically create a special
kind of variable, a variable where changes will lead this component function to be called again.
`useState` also returns an array where the first element is the variable itself, a pointer at that managed value, the
value stored in the props, the current state value and the second element is an updating function which we can call
to set a new variable.
We can use array destructuring to store both elements in seperate variables or constants. When calling the state updating
function we pass the new value as a argument. Calling this function does not just assign a new value to some variable but
component function will be executed again. By calling this function we're telling React that we want to assign
a new value to the current state and that the component in which this state was registered with useState should be re-evaluated.
and therefore React will go ahead and execute the component funtion again and therefore also evaluates the JSX code again.
Calling this state updating function actually doesn't change the value right away, but instead schedules the state update.
`useState` registers some state, for the component in which it is being called. It registers it for a specific component
instance. Whenever a state changes, it's only the component function and only that specific instance, where the component is being used
React will re-evaluate. Only that specific instance will be updated and re-evaluated. State is seperated on a per component instance
basis. We always get a brand new snapshot of the state when the component function re-executes.

### Child to parent component communication (Bottom-up)

We can create our own event props `onChange = {someFunctionHandler}` and we can expect functions as values.
This would allow us to pass a function from a parent component to a child component and then call that function
inside of the child component and when we then call the function we can pass data to that function as parameter
and that's how we can communicate up from child to parent.
Props can only be passed from parent-to-child. We can't skip intermediate components.

**Lifting the State Up** is about moving data from a child component to some parent component to either use it there
or to then pass it down to some other child component.

Whenever we use a two way binding, we are controlling a component. A value which is used in the component is passed on to
the parent component, through props and is received from the parent component. Both the currently set value as well as
the function which in the end handles the selected value is not part of `ExpensesFilter`. This is really just a
component that presents the UI, that presents the dropdown and then attaches a couple of listeners or props, but the
real logic resides in the parent component and that turns `ExpensesFilter` into something which is called a controlled
component. For a controlled component, we could say, that both the value and the changes to the value are not handled in
the component itself but in a parent component. `Expenses` component controls the `ExpensesFilter` component.

The components that manage some state, like the `Expenses` component which manages the filter state and then there are
other components which don't manage any state, like `ExpenseItem`, are stateless component, also called presentational
or dumb component because it doesn't have any internal state and it's just there to mangage some data.

#### Understanding "Keys"
React has a special concept when it comes to rendering lists of data, a concept which exists to ensure that React is
able to update and render such lists efficiently without performance losses or bugs, which may occur. When a new item 
is added, React renders this new item as the last item in the list of <divs> and updates all items and replaces their 
content, such that it again matches the order of the items in array. To react all these items look similar and if it
detects that the length of our array has changed, it simply renders an additional div and it adds that at the end and
then it simply walks through all the items and updates the content inside of every item to match the array content again.
It is not good performance wise and it can lead to bugs, e.g., if the ExpenseItem would have been a stateful item and 
we would have managed some state inside of that then upon addition of a new item the old item would be overwritten with
the new item hence any state changes we might've had in there would be lost. React sees all individual items as
to be similar so it can't know where a new item should be added. A speacial prop "Key" can be added to help React identify
the individual items and make it aware that how long the array is and which items should be placed where and update the
list in a more efficient way.
We should always add such a key when mapping out lists of items.