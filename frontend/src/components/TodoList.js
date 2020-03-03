import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";
import Todo from "./Todo";

class TodoList extends React.Component {
  // retrieve data when component has mounted
  componentDidMount() {
    this.props.retrieveTodos();
  }

  render() {
    // deconstructing object and extracting todos, updateTodo
    const { todos, updateTodo } = this.props;
    return (
      <ListGroup variant="flush">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => updateTodo(todo.id)} />
        ))}
      </ListGroup>
    );
  }
}

// validations
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  updateTodo: PropTypes.func.isRequired
};

export default TodoList;
