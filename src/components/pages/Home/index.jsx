import React from "react";
import ToDoForm from "../../ToDoForm";
import ToDoList from "../../ToDoList";
import Counter from "../../Counter";

const HomePage = () => {
  return (
    <div>
      <ToDoForm />
      <ToDoList />
      <Counter />
    </div>
  );
};

export default HomePage;
