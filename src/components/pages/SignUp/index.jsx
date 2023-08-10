import React from "react";
import SignUpForm from "../../SignUpForm";

const SignUpPage = () => {
  return (
    <div>
      <h1>SignUpPage</h1>
      <SignUpForm />
      <br/>
      <a href="http://localhost:3000/">Home</a>
      <br/>
      <a href="http://localhost:3000/userlist">UserList</a>
    </div>
  );
};

export default SignUpPage;
