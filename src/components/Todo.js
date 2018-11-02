import React, { PropTypes } from 'react';
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft,
  FaCheckSquare,
  FaSquare
} from "react-icons/fa";
// import ContentEditable from "react-contenteditable";
// import { editTodo } from '../actions';
import EditableListElement from "./EditableListElement";

const Todo = ({
  id,
  onClick,
  completed,
  text,
  order,
  onPriorityUpClick,
  onPriorityDownClick,
  editTodo
}) => (
  <div>
    {" "}
    <FaCaretUp style={upArrowStyle} onClick={onPriorityUpClick} />
    <FaCaretDown style={downArrowStyle} onClick={onPriorityDownClick} />
    {!completed ? (
      <FaSquare onClick={onClick} />
    ) : (
      <FaCheckSquare onClick={onClick} />
    )}
    <FaCaretRight onClick={() => editTodo(1, text + "Te")} />
    {/* <text>{order}</text>{" "} */}
    <EditableListElement name={text} id={id} />
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  onPriorityUpClick: PropTypes.func.isRequired,
  onPriorityDownClick: PropTypes.func.isRequired
};

const upArrowStyle = {
  color: "blue",
  position: "relative",
  top: "-4px"
};

const downArrowStyle = {
  color: "violet",
  position: "relative",
  top: "4px",
  right: "16px",
};

export default Todo;
