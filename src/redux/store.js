import { configureStore } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension";
// import createSagaMidleware from "redux-saga";
// import rootReducer from "./reducers";
// import rootSaga from "./sagas";
// import counterReducer from "./reducers/counterReducer";
import counterReducer from "./slices/counterSlice";
// import taskReducer from "./reducers/taskReducer";
import toDoReducer from "./slices/toDoSlice";
// import userReducer from "./reducers/userReducer";
import userReducer from "./slices/userSlice";
// import getUsersReducer from "./reducers/getUsersReducer";
import getUsersReducer from "./slices/getUsersSlice";

// const sagaMW = createSagaMidleware();

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(sagaMW))
// );

const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: toDoReducer,
    user: userReducer,
    users: getUsersReducer,
  },
});

// sagaMW.run(rootSaga);

export default store;
