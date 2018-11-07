import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft,
  FaCheckSquare,
  FaSquare
} from "react-icons/fa";

const Todo = ({
  id,
  onClick,
  completed,
  text,
  order,
  onPriorityUpClick,
  onPriorityDownClick,
  onEditClick
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
    <FaCaretRight />

    <input onBlur={(e)=>{
      onEditClick(e.target.value);
      }} defaultValue={text} />
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  onPriorityUpClick: PropTypes.func.isRequired,
  onPriorityDownClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired
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
