import { call, select, takeLatest, put } from "redux-saga/effects";
import { request } from "../../utils/request";
import { BACK_URL } from "../../variables";
import {
  requestTasks,
  requestTasksError,
  requestTasksSuccess,
  setInputVal,
} from "./actions";
import { actionTypes } from "./constants";
import { makeSelectInputVal } from "./selectors";
interface Response {
  data: any;
}

function* todoSaga() {
  console.log("I'm here");

  yield takeLatest(actionTypes.SET_TASKS_DATA, requestSetTodo);
  yield takeLatest(actionTypes.REQUEST_TASKS_DATA, requestAllTodos);
  yield takeLatest(actionTypes.DELETE_TASK, requestDeleteTodo);
}
function* requestSetTodo() {
  const inputVal: string = yield select(makeSelectInputVal());

  try {
    const options = {
      method: "POST",
      url: `${BACK_URL}todos`,
      data: { text: inputVal },
      header: {
        "Content-Type": "application/json",
      },
    };
    yield call(request, options);
    yield put(requestTasks());
    yield put(setInputVal(""));
  } catch (err) {
    console.log("errr", err);
  }
}
function* requestDeleteTodo(action: any) {
  const inputVal: string = yield select(makeSelectInputVal());
  console.log("response", action);
  try {
    const options = {
      method: "DELETE",
      url: `${BACK_URL}todos/${action.payload}`,
      data: { text: inputVal },
      header: {
        "Content-Type": "application/json",
      },
    };
    yield call(request, options);
    yield put(requestTasks());
  } catch (err) {
    console.log("errr", err);
  }
}
function* requestAllTodos() {
  try {
    const options = {
      method: "GET",
      url: `${BACK_URL}todos`,
      header: {
        "Content-Type": "application/json",
      },
    };
    const response: Response = yield call(request, options);
    yield put(requestTasksError(false));

    yield put(requestTasksSuccess(response?.data));
  } catch (err) {
    console.log("errr", err);
    yield put(requestTasksError(true));
  }
}

export default todoSaga;
