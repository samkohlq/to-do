import { connect } from "react-redux";

// import { createTodo } from "../actions";
import { createTodo } from "../actions";
import { updateTodo } from "../actions/updateTodo";
import { retrieveTodos } from "../actions/retrieveTodos";
import TodoList from "../components/TodoList";

// returns an array, filtered if a filter is present
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(t => t.completed);
    case "SHOW_ACTIVE":
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

// extracts specific data from the store
// passes in todos array and visibility filter in current state, calls getVisibleTodos,
// returns array returned from getVisibleTodos
// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos.todos, state.visibilityFilter)
  };
};

// dispatches actions to the store
// sends new object to store
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => {
  return {
    createTodo: value => {
      // dispatch createTodo action
      dispatch(createTodo(value));
    },
    retrieveTodos: () => {
      // dispatch retrieveTodo action
      dispatch(retrieveTodos());
    },
    updateTodo: id => {
      // dispatch updateTodo action on click
      dispatch(updateTodo(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
