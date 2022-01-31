import { createSelector } from "reselect";
import {GlobalState}  from "../../utils/types";

const selectFromTodoStateDomain = (globalState : GlobalState) : TasksState => globalState.todoState;

const makeSelectTasksData = () =>
  createSelector(selectFromTodoStateDomain, (todoState : TasksState) : string[] => todoState.tasksData  );

const makeSelectInputVal = () =>
  createSelector(selectFromTodoStateDomain, (todoState : TasksState) : string => todoState.inputVal);

export { makeSelectTasksData, makeSelectInputVal };
