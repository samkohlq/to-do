// action creators
let nextTodoId = 0;
export const addTodo = value => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  value
});

export function setVisibilityFilter(filter) {
  return { type: "SET_VISIBILITY_FILTER", filter };
}

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
