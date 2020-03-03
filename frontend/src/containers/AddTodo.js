import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { createTodo } from "../actions/createTodo";

// defines both logic and presentation - ok for small components
const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <Form
        // onSubmit is the event hook
        onSubmit={e => {
          e.preventDefault();
          // if no input, return
          if (!input.value.trim()) {
            return;
          }
          // dispatch user's input to store
          dispatch(createTodo(input.value));
          // reset input value to blank
          input.value = "";
        }}
      >
        {/* shows text box */}
        <InputGroup>
          <input
            // assign input node to input variable
            ref={node => {
              input = node;
            }}
          />
          {/* calls onSubmit function in form component */}
          <InputGroup.Append>
            <Button size="sm" type="submit">
              Add Todo
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </div>
  );
};

// export connected component, ready for import somewhere else
export default connect()(AddTodo);
