import React, { PropTypes } from 'react';
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft} from "react-icons/fa";

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
    <FaCaretUp onClick={onPriorityUpClick} />
    <FaCaretDown onClick={onPriorityDownClick} />
    <FaCaretRight />
    <text>{order}</text>{" "}
    <text
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
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

export default Todo;
