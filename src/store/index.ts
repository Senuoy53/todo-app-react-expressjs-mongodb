// export default store;

import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMd from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMid = createSagaMd();

const store = createStore(
  rootReducer,
  // composeWithDevTools() pour ReduxDevtools goole Chrome
  composeWithDevTools(applyMiddleware(sagaMid))
);
sagaMid.run(rootSaga);

export default store;
