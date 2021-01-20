import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import rootSaga from "./sagas";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleWare();

const store = {
  ...createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  ),
  runSaga: sagaMiddleware.run(rootSaga),
};

export default store;
