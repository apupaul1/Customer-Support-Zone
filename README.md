## What is JSX, and why is it used?
JSX stands for JavaScript XML. It is used to write HTML-like code inside JavaScript files in React. JSX allows developers to write HTML and JavaScript together in the same file, which makes the code easier to read and manage.

## What is the difference between State and Props?
Props are read-only, whereas State can be changed.
Props usually contain fixed data passed from a parent component, while State is used to manage dynamic data inside a component.

## What is the useState hook, and how does it work?
useState is a React Hook that allows components to store and update state.Example:
const [state, setState] = useState(initialValue);

Here, 
state = the current value, 
setState = the function used to update the state, and 
initialValue = the initial value of the state.

Whenever we need to update the state, we call the setState function with a new value, and the component re-renders with the updated state.

## How can you share state between components in React?
We can share state between components by using Lifting State Up. In this approach, we create the state in the parent component using useState, and then pass the state and its update function to the child components through props.

## How is event handling done in React?
Event handling in React is done by defining functions and attaching them to events like onClick, onChange, etc..

We can handle events in several ways:
1. Using a normal function
2. Using an arrow function
3. Using an inline function