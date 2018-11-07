import React from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import EditTodo from "./EditTodo";

import {
  FaCaretUp,
  FaCaretDown,
  FaCaretRight,
  FaCartLeft,
  FaCheckSquare,
  FaSquare
} from "react-icons/fa";
import Input from "./InputEditable";

// import ContentEditable from "react-contenteditable";
// import { editTodo } from '../actions';
// import EditableListElement from "./EditableListElement";

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
    <FaCaretRight onClick={onEditClick} />
    {/* <Input /> */}
    {/* <input type="text" onBlur={this.onBlur.bind(this)} /> */}
    {/* <TextField
      value={this.props.data.value}
      onChange={event => this.handleTextChange(event)}
    /> */}
    {/* <button onClick={editTodo} /> */}
    {/* let { onBlur, onChange, value, ...props } = this.props; */}
    {/* <input onBlur={this.onBlur} /> */}
    {/* <EditableListElement onChange={onEditClick} name={text} id={id} /> */}
    {/* this.map( (id,text)=> {     
    {/* <span>
      <input id={id} onChange={e => text=e.target.value} />
    </span> */}
    {/* <EditTodo/> */}
    <input onBlur={(e)=>{
      console.log("dwadwadwaawd"+e.target.value);
      onEditClick(e.target.value);
      }} defaultValue={text} />
  </div>
);

//  onBlur: function(event) {
//     this.setState({typed: event.target.value});
//   },
  // handleEdit(e) {
  //   return e =>
  //     this.setState({
  //       editing: !this.state.editing
  //     });
  // }

  // handleChange(e) {
  //   this.setState({ editText: e.target.value });
  //   super.setState({text: e.target.value});
  //   editTodo(this.id, e.target.value);
  // }

  // handleSubmit(e) {
  //   var val = this.state.editText.trim();
  //   if (val) {
  //     this.setState({
  //       editText: val,
  //       editing: false
  //     });
  //     editTodo(this.id, e.target.value);
  //   }
  // }

  // handleKeyDown(e) {
  //   if (event.which === this.ESCAPE_KEY) {
  //     this.setState({
  //       editText: this.props.name,
  //       editing: false
  //     });
  //   } else if (event.which === this.ENTER_KEY) {
  //     this.handleSubmit(e);
  //   }
  // }

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
