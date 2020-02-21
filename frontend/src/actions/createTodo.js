export const requestCreateTodo = value => ({
  type: "REQUEST_CREATE_TODO",
  value
});

export const receiveCreateTodoSuccess = todoCreated => ({
  type: "RECEIVE_CREATE_TODO_SUCCESS",
  todoCreated
});

export const createTodo = value => {
  return dispatch => {
    dispatch(requestCreateTodo(value));
    return (
      fetch("https://intense-refuge-66191.herokuapp.com/create-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          value
        })
      })
        // only runs when promise returned by fetch is successful
        // pulls out body of json and converts it to json
        .then(response => {
          console.log(response);
          return response.json();
        })
        // takes in value of new todo and dispatches receiveCreateTodoSuccess action
        .then(json => {
          console.log(json);
          return dispatch(receiveCreateTodoSuccess(json));
        })
    );
  };
};
