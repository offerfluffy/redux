import * as API from "../../api";
import * as UserActionCreators from "../actions/userActionCreators";
import { put } from "redux-saga/effects";

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
