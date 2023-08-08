import "./App.css";
import React from "react";
import Counter from "./components/Counter";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

function App(props) {
  return (
    <div>
      <ToDoForm />
      <ToDoList />
      <Counter />
    </div>
  );
}

export default App;
