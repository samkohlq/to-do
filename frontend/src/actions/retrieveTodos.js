export const requestTodos = () => ({
  type: "REQUEST_TODOS"
});

export const receiveTodos = todos => ({
  type: "RECEIVE_TODOS",
  todos
});

export const retrieveTodos = () => {
  return dispatch => {
    dispatch(requestTodos());
    return fetch("http://localhost:4000/retrieve-todos")
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  };
};
