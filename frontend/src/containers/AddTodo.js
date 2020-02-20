import React from "react";
import { connect } from "react-redux";

import { createTodo } from "../actions";

// defines both logic and presentation - ok for small components
const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
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
        <input
          // assign input node to input variable
          ref={node => {
            input = node;
          }}
        />
        {/* calls onSubmit function in form component */}
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

// export connected component, ready for import somewhere else
export default connect()(AddTodo);
