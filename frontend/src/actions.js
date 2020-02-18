// action types

export const ADD_TODO = "ADD_TODO";
export const RETRIEVE_TODOS = "RETRIEVE_TODOS";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

// other constants

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// action creators
let nextTodoId = 0;
export function addTodo(text) {
  return { type: ADD_TODO, id: nextTodoId++, text };
}

export function requestTodos() {
  return {
    type: REQUEST_TODOS
  };
}

export function retrieveTodos(json) {
  return {
    type: RETRIEVE_TODOS
    // TODO: pass in todos in correct format
  };
}

export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos());
    return fetch("localhost:4000/retrieve-todos")
      .then(response => response.json())
      .then(json => dispatch(retrieveTodos(json)));
  };
};

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
