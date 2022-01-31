import todoSaga from "../containers/TodoContainer/saga";
import { fork } from "redux-saga/effects";

function* rootSaga() {
  yield fork(todoSaga);
}
export default rootSaga;
