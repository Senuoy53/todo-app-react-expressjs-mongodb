

import { combineReducers } from "redux";
import todoReducer from "../containers/TodoContainer/reducer";

export default combineReducers({
  todoState: todoReducer,
});
