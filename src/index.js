import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import todoApp from "./reducers";
import App from "./components/App";

// creates store using reducers (todoApp)
const store = createStore(todoApp);
render(
  // https://react-redux.js.org/api/provider
  // <Provider /> makes the Redux store available to any nested components wrapped in the connect() function
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
