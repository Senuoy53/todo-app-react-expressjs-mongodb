import { actionTypes } from "./constants";

const setTasksData = (payload: string) => {
  return {
    type: actionTypes.SET_TASKS_DATA,
    payload,
  };
};

const setInputVal = (payload: string) => {
  return {
    type: actionTypes.SET_INPUT_VAL,
    payload,
  };
};

const deleteTask = (payload: number | undefined) => {
  return {
    type: actionTypes.DELETE_TASK,
    payload,
  };
};

const deleteTaskAll = () => {
  return {
    type: actionTypes.DELETE_TASK_ALL,
  };
};

export { setTasksData, setInputVal, deleteTask, deleteTaskAll };
