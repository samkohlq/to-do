import {
  ADD_TODO,
  RECEIVE_TODOS,
  REQUEST_TODOS,
  TOGGLE_TODO
} from "../actions";

const initialState = {
  isFetching: false,
  todos: []
};

// initialises state to be an empty array
function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        // spread operator that creates a copy of the array in state
        ...state,
        todos: [
          ...state.todos,
          // adds new element and marks completed to false
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };
    case REQUEST_TODOS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        todos: action.todos
      };
    case TOGGLE_TODO:
      return {
        ...state,
        // goes through all todos, if id equals action id, flip the completed status
        todos: state.todos.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };
    default:
      return state;
  }
}

export default todos;
