import React from "react";
import { connect } from "react-redux";
import * as UsersActionCreators from "../../redux/actions/userActionCreators";

const UserList = ({ users, isLoading, error, getUsersAction }) => {
  return (
    <div>
      <button onClick={() => getUsersAction()}>Get Users</button>
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

const mapStateToProps = (state) => ({
  users: state.users.users,
  isLoading: state.users.isLoading,
  error: state.users.error,
});

const mapDispatchToProps = (dispatch) => ({
  getUsersAction: () => dispatch(UsersActionCreators.getUsersRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
