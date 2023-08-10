import ACTION_TYPES from "./actionTypes";

export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: values,
});

export const createUserSuccess = (values) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  payload: values,
});

export const createUserError = (values) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: values,
});

export const getUsersRequest = () => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: { users },
});

export const getUsersError = (values) => ({
  type: ACTION_TYPES.GET_USERS_ERROR,
  payload: values,
});
