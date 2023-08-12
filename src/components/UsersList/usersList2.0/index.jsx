import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/slices/getUsersSlice";

const UserList = () => {
  const { users, isLoading } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(getUsers())}>Get Users</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>Email: {user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
