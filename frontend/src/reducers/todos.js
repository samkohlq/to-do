const initialState = {
  isFetching: false,
  todos: []
};

// initialises state to be an empty array
function todos(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // spread operator that creates a copy of the array in state
        ...state,
        todos: [
          ...state.todos,
          // adds new element and marks completed to false
          {
            id: action.id,
            value: action.value,
            completed: false
          }
        ]
      };
    case "REQUEST_TODOS":
      return {
        ...state,
        isFetching: true
      };
    case "RECEIVE_TODOS":
      return {
        ...state,
        isFetching: false,
        todos: action.todos
      };
    case "REQUEST_UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          // console.log(`req todo: ${todo.id}`);
          // console.log(`req action.id: ${action.id}`);
          // if todo.id matches action.id, copy everything else from state
          // and set isFetching to true
          return todo.id === action.id
            ? {
                ...todo,
                isFetching: true
              }
            : todo;
        })
      };
    case "RECEIVE_UPDATE_TODO_SUCCESS":
      return {
        ...state,
        todos: state.todos.map(todo => {
          // console.log(`rec todo: ${todo.id}`);
          // console.log(`rec action.id: ${action.id}`);
          // if todo.id matches action.id, copy everything else from state,
          // set isFetching to false and flip completed status
          return todo.id === action.id
            ? { ...todo, isFetching: false, completed: !todo.completed }
            : todo;
        })
      };
    default:
      return state;
  }
}

export default todos;
