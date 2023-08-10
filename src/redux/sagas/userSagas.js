import * as API from "../../api";
import * as UserActionCreators from "../actions/userActionCreators";
import { call, put } from "redux-saga/effects";

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.payload);
    const {
      data: { data: user },
    } = response;

    yield put(UserActionCreators.createUserSuccess(user));
  } catch (error) {
    yield put(UserActionCreators.createUserError(error));
  }
}

export function* getUsersSaga() {
  try {
    const response = yield call(API.getUsers);
    const {
      data: { data: users },
    } = response;

    // console.log("SAGA API:", users);
    yield put(UserActionCreators.getUsersSuccess(users));
  } catch (error) {
    yield put(UserActionCreators.getUsersError(error));
  }
}
