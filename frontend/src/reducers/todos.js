import { ADD_TODO, TOGGLE_TODO } from "../actions";

// initialises state to be an empty array
function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        // spread operator that creates a copy of the array in state
        ...state,
        // adds new element and marks completed to false
        {
          text: action.text,
          completed: false
        }
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

export default todos;
