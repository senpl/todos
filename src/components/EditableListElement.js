import React from "react";
import { editTodo } from "../actions";

export default class EditableListElement extends React.Component {
  constructor(props) {
    super();
    this.ESCAPE_KEY = 27;
    this.ENTER_KEY = 13;
    this.state = {
      id: props.id,
      editText: props.name,
      editing: false
    };
  }

  handleEdit(e) {
    return e =>
      this.setState({
        editing: !this.state.editing
      });
  }

  handleChange(e) {
    this.setState({ editText: e.target.value });
    editTodo(this.id, e.target.value);
  }

  handleSubmit(e) {
    var val = this.state.editText.trim();
    if (val) {
      this.setState({
        editText: val,
        editing: false
      });
    }
  }

  handleKeyDown(e) {
    if (event.which === this.ESCAPE_KEY) {
      this.setState({
        editText: this.props.name,
        editing: false
      });
    } else if (event.which === this.ENTER_KEY) {
      this.handleSubmit(e);
    }
  }

  render() {
    return <span>
        {/* <label
          className={this.state.editing ? "hidden" : ""}
          onDoubleClick={this.handleEdit()}
        >
          {this.state.editText}
        </label> */}
        <input id={this.state.id}
         className={this.state.editing ? "" : "hidden"} value={this.state.editText} onChange={this.handleChange.bind(this)} onBlur={this.handleSubmit.bind(this)} onKeyDown={this.handleKeyDown.bind(this)} />
      </span>;
  }
}

