import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./configureStore";

const store = configureStore();

render(
  // https://react-redux.js.org/api/provider
  // <Provider /> makes the Redux store available to any nested components wrapped in the connect() function
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
