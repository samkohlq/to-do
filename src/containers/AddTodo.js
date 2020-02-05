import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

// defines both logic and presentation - ok for small components
let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // if no input, return
          if (!input.value.trim()) {
            return;
          }
          // dispatch user's input to store
          dispatch(addTodo(input.value));
          // reset input value to blank
          input.value = "";
        }}
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};
AddTodo = connect()(AddTodo);
export default AddTodo;
