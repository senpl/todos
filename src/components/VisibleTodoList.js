import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { withRouter } from "react-router";
import { getVisibleTodos } from "../reducers/todos";


const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state.todos, match.params.filter || "all")
});

// this is replaced by { onTodoClick: toggleTodo }
// const mapDispatchToProps = dispatch => ({
//   onTodoClick(id) {
//     dispatch(toggleTodo(id));
//   }
// });

const VisibleTodoList = withRouter(
  connect(
    mapStateToProps,
    { onTodoClick: toggleTodo }
  )(TodoList)
);

export default VisibleTodoList;
