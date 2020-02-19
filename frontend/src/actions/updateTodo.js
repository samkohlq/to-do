export const requestUpdateTodo = id => ({
  type: "REQUEST_UPDATE_TODO",
  id
});

export const receiveUpdateTodoSuccess = id => ({
  type: "RECEIVE_UPDATE_TODO_SUCCESS",
  id
});

export const updateTodo = id => {
  return dispatch => {
    dispatch(requestUpdateTodo(id));
    return (
      fetch("http://localhost:4000/update-todo", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          return response.json();
        })
        // takes in id of todo and dispatches receiveUpdateTodoSuccess action
        .then(json => {
          return dispatch(receiveUpdateTodoSuccess(json.id));
        })
    );
  };
};
