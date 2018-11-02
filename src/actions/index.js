let nextTodoId = 0;
let order=0;

export const addTodo = text => 
({ type: "ADD_TODO", 
id: (nextTodoId++).toString(), text, order: (order) });

export const increasePriority = id => ({ type: "INCREASE_PRIORITY", order: order, id });
export const decreasePriority = id => ({ type: "DECREASE_PRIORITY", order: order, id });

export const editTodo = 
(id=1, text="te2") => 
(
  { type: "EDIT_TODO", id: id, text, order: order });


export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});
