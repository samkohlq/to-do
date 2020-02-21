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
    return fetch("https://intense-refuge-66191.herokuapp.com/retrieve-todos")
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  };
};
