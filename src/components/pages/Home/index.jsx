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
      <br/>
      <a href="http://localhost:3000/userlist">UserList</a>
      <br/>
      <a href="http://localhost:3000/signup">SignUp</a>
    </div>
  );
};

export default HomePage;
