let nextTodoId = 0;
let order=0;

export const addTodo = text => 
({ type: "ADD_TODO", 
id: (nextTodoId++).toString(), text, order: (order) });

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
