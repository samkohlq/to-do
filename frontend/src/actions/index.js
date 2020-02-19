let nextTodoId = 0;
export const addTodo = value => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  value
});
