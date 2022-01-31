import { actionTypes } from "./constants";

const setTasksData = () => {
  return {
    type: actionTypes.SET_TASKS_DATA,
  };
};
const requestTasks = () => {
  return {
    type: actionTypes.REQUEST_TASKS_DATA,
  };
};
const requestTasksSuccess = (payload: any) => {
  return {
    type: actionTypes.REQUEST_TASKS_DATA_SUCCESS,
    payload,
  };
};
const requestTasksError = (payload: boolean) => {
  return {
    type: actionTypes.REQUEST_TASKS_DATA_ERROR,
    payload,
  };
};

const setInputVal = (payload: string) => {
  return {
    type: actionTypes.SET_INPUT_VAL,
    payload,
  };
};

const deleteTask = (payload: string | undefined) => {
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

export {
  setTasksData,
  setInputVal,
  deleteTask,
  deleteTaskAll,
  requestTasks,
  requestTasksSuccess,
  requestTasksError,
};
