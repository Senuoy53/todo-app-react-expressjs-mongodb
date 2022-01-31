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
    case actionTypes.DELETE_TASK_ALL:
      return {
        ...state,
        tasksData: [],
      };
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

// import { actionTypes } from "./constants";

// //  initialiser notre state
// const initialState = {
//   name: "",
//   counter: 0,
// };

// // Le reducer prend le state et l'action
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actionTypes.PLUS_COUNTER:
//       // Return our (spread (...state)) take the name + counter +1
//       return {
//         ...state,
//         counter: state.counter + 1,
//       };
//     case actionTypes.MINUS_COUNTER:
//       return {
//         ...state,
//         // Conditon : si counter > 0 decrementer sinon garder l'état intial
//         counter: state.counter > 0 ? state.counter - 1 : state.counter,
//       };
//     case actionTypes.SET_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     default:
//       // si il ne trouve aucune action il retourne le state initial
//       return state;
//   }
// };

// export default counterReducer;
