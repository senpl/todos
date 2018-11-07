import React from 'react';
import PropTypes from "prop-types";
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
  onPriorityUpClick,
  onPriorityDownClick,
  onTodoEditClick
}) => (
  <div>
    {todos
      .sort(function(a, b) {
        return a.order - b.order;
      })
      .map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
          onPriorityUpClick={() => onPriorityUpClick(todo.id)}
          onPriorityDownClick={() => onPriorityDownClick(todo.id)}
          onEditClick={(txt) => onTodoEditClick(todo.id, txt)}
        />
      ))}
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      order: PropTypes.number.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onPriorityUpClick: PropTypes.func.isRequired,
  onPriorityDownClick: PropTypes.func.isRequired,
  onTodoEditClick: PropTypes.func.isRequired
};

export default TodoList;
