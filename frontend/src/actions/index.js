// action types

export const ADD_TODO = "ADD_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
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
export function addTodo(value) {
  return { type: ADD_TODO, id: nextTodoId++, value };
}

export function requestTodos() {
  return {
    type: REQUEST_TODOS
  };
}

export function receiveTodos(todos) {
  return {
    type: RECEIVE_TODOS,
    todos
  };
}

// returns a dispatch function
export const fetchTodos = () => {
  return dispatch => {
    dispatch(requestTodos());
    return fetch("http://localhost:4000/retrieve-todos")
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  };
};

export function toggleTodo(id) {
  return { type: TOGGLE_TODO, id };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}
