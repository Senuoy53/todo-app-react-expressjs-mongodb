import React, { useEffect } from "react";
import "./index.css";
import AddComponent from "../../components/AddComponent";
import ValidationMessage from "../../components/ValidationMessage";
import Task from "../../components/Task";
import TodoFooter from "../../components/TodoFooter";
// import { Data } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setInputVal,
  setTasksData,
  deleteTask,
  deleteTaskAll,
  requestTasks,
} from "./actions";
import { toast } from "react-toastify";
import { useState } from "react";
import { createStructuredSelector } from "reselect";
import { makeSelectTasksData, makeSelectInputVal } from "./selectors";
import { toastMessages } from "../../utils/constants";

const tododState = createStructuredSelector({
  tasksData: makeSelectTasksData(),
  inputVal: makeSelectInputVal(),
});

const TodoContainer = () => {
  const dispatch = useDispatch();
  // const todoData = useSelector((storekamel) => storekamel.todoState);
  const { tasksData, inputVal } = useSelector(tododState);
  useEffect(() => {
    dispatch(requestTasks());
  }, []);

  // Message
  const [typeMessage, setTypeMessage] = useState("");

  // deleteIndex to deleted
  const [deleteIndex, setDeleteIndex] = useState<string | undefined>();

  const handleChange = (val: string) => {
    dispatch(setInputVal(val));
  };
  const handleClick = (from: string, index?: string) => {
    switch (from) {
      // Add Tasks
      case "add":
        if (!inputVal) return;

        dispatch(setTasksData());
        // Toastify Message
        toast.success(toastMessages.ADD);

        break;
      // Delete Task
      case "clear_task":
        // take the index to deleted
        setDeleteIndex(index);

        // type message
        setTypeMessage("clear_task");

        break;
      // Delete All Tasks
      case "clear_all":
        setTypeMessage("clear_all");

        break;
      default:
        break;
    }
  };

  // ===== MessageClick =====
  const MessageClick = (e: any) => {
    switch (e.target.id) {
      // if user clicks ok button
      case "confirm":
        // Verification if "clear_all" or "clear_task" by name
        switch (e.target.name) {
          case "clear_all":
            dispatch(deleteTaskAll());
            toast.success(toastMessages.CLEAR_ALL);
            // Vider le typeMessage pour fermer la fenetre
            setTypeMessage("");
            break;
          case "clear_task":
            dispatch(deleteTask(deleteIndex));
            // Toastify Message
            toast.success(toastMessages.CLEAR_TASK);
            setTypeMessage("");
            break;
          default:
            break;
        }
        break;
      // if user clicks cancel button
      case "cancel":
        // Verification if "clear_all" or "clear_task" by name
        switch (e.target.name) {
          case "clear_all":
            // Vider le typeMessage pour fermer la fenetre
            setTypeMessage("");
            break;
          case "clear_task":
            // Vider le typeMessage pour fermer la fenetre
            setTypeMessage("");
            break;
          default:
            break;
        }

        break;
      default:
        break;
    }
  };

  return (
    <div id="TodoContainer">
      <h1>Todo List App</h1>
      <AddComponent
        placeholder={"Add your new todo"}
        onChange={handleChange}
        value={inputVal}
        onClick={() => handleClick("add")}
      />
      <ul className="Task">
        {tasksData &&
          tasksData.map((item, index) => (
            <Task
              key={index}
              texte={item.text}
              onClick={() => handleClick("clear_task", item._id ?? "")}
            />
          ))}
      </ul>
      <TodoFooter
        NumPending={tasksData ? tasksData.length : 0}
        onClick={() => handleClick("clear_all")}
      />
      {/* ============ Validation Message ============ */}
      {/* Conditional Rendering */}
      {typeMessage && (
        <ValidationMessage
          // style={{ display: deleteMsgOn ? "block" : "none " }}
          texte={
            typeMessage === "clear_task"
              ? "Do you want to delete this task ?"
              : "Do you want to delete all tasks ?"
          }
          onClick={MessageClick}
          name={typeMessage === "clear_task" ? "clear_task" : "clear_all"}
        />
      )}
    </div>
  );
};

export default TodoContainer;
