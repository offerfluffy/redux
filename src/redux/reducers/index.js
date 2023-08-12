// import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import taskReducer from "./taskReducer";
import userReducer from "./userReducer";
import getUsersReducer from "./getUsersReducer";

const rootReducer = {
  counter: counterReducer,
  task: taskReducer,
  user: userReducer,
  users: getUsersReducer,
};

export default rootReducer;
//  В слайсах не нужен сразу все указывается в сторе