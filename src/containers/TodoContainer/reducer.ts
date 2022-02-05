import { Data } from "../../utils/constants";
import { actionTypes } from "./constants";
// //  initialiser notre state
const initialState: TasksState = {
  tasksData: null,
  inputVal: "",
  loading: true,
  error: false, // error in case of loading data
};

const todoReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_VAL:
      return {
        ...state,
        inputVal: action.payload,
      };
    // case actionTypes.DELETE_TASK:
    //   return {
    //     ...state,
    //     tasksData: state.tasksData.filter((item, itemIndex) => {
    //       return itemIndex !== action.payload;
    //     }),
    //   };
    // case actionTypes.DELETE_TASK_ALL:
    //   return {
    //     ...state,
    //     tasksData: [],
    //   };
    case actionTypes.REQUEST_TASKS_DATA_SUCCESS:
      return {
        ...state,
        tasksData: action.payload,
      };
    case actionTypes.REQUEST_TASKS_DATA_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
