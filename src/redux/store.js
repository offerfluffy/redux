import { legacy_createStore as createStore, applyMiddleware } from "redux";
import createSagaMidleware from "redux-saga";
import rootReducer from "./reducers";
import rootSaga from './sagas'

const sagaMW = createSagaMidleware();

const store = createStore(rootReducer, applyMiddleware(sagaMW));

sagaMW.run(rootSaga)

export default store;
