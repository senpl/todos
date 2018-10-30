import React, { PropTypes } from 'react';
import Todo from './Todo';

const TodoList = ({
  todos,
  onTodoClick,
  onPriorityUpClick,
  onPriorityDownClick
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
};

export default TodoList;
