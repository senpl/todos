import React, { PropTypes } from 'react';
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft,
  FaCheckSquare,
  FaSquare
} from "react-icons/fa";

const Todo = ({
  onClick,
  completed,
  text,
  order,
  onPriorityUpClick,
  onPriorityDownClick
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
    {/* <text>{order}</text>{" "} */}
    <text 
      // onClick={onClick}
      // style={{
      //   textDecoration: completed ? "line-through" : "none"
      // }}
    >
      {text}
    </text>
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
