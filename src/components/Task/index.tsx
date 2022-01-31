import React from "react";
import "./index.css";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../CustomButton";

const Task = ({ texte, onClick }: TaskProps) => {
  return (
    <li>
      {texte}
      <span>
        <CustomButton onClick={onClick}>
          {<FontAwesomeIcon icon={faTrash} />}
        </CustomButton>
      </span>
    </li>
  );
};

export default Task;
