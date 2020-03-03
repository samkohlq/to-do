import PropTypes from "prop-types";
import React from "react";
import { ListGroup } from "react-bootstrap";

const Todo = ({ onClick, completed, value }) => (
  <ListGroup.Item
    className="small"
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none"
    }}
  >
    {value}
  </ListGroup.Item>
);

// validations
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired
};

export default Todo;
