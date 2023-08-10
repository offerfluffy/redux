import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import createSagaMidleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

const sagaMW = createSagaMidleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMW))
);

sagaMW.run(rootSaga);

export default store;
