import React from "react";
import UserList from "../../UsersList";

const UserListPage = () => {
  return (
    <div>
      <h1>UserList</h1>
      <UserList />
      <br/>
      <a href="http://localhost:3000/">Home</a>
      <br/>
      <a href="http://localhost:3000/signup">SignUp</a>
    </div>
  );
};

export default UserListPage;
