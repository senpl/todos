import React, { PropTypes } from 'react';
import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft} from "react-icons/fa";

const Todo = ({ onClick, completed, text, order }) => (

  <li
  // onClick={onClick}
  // style={{
  //   textDecoration: completed ? "line-through" : "none"
  // }}
  >
    {" "}

    {/* <FaCaretUp />
    <FaCaretDown />
    <FaCaretRight /> */}
    <text>{order}</text>{" "}
    <text
      onClick={onClick}
      style={{
        textDecoration: completed ? "line-through" : "none"
      }}
    >
      {text}
    </text>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired
};

export default Todo;
