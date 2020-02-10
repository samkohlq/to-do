import { connect } from "react-redux";

import { toggleTodo } from "../actions";
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

// extracts data from the store
// passes in todos array and visibility filter in current state, calls getVisibleTodos,
// returns array returned from getVisibleTodos
// https://react-redux.js.org/using-react-redux/connect-mapstate
const mapStateToProps = state => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

// dispatches actions to the store
// sends new object to store
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      // dispatch the toggleTodo action on click
      dispatch(toggleTodo(id));
    }
  };
};

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;
