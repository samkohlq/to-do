import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import AddTodo from "../containers/AddTodo";
import Footer from "../components/Footer";

it("App component renders without crashing", () => {
  shallow(<App />);
});

test("Footer component renders without crashing", () => {
  shallow(<Footer />);
});

it("App component contains AddTodo component", () => {
  const wrapper = shallow(<App />);
  const addToDo = <AddTodo />;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(addToDo)).toEqual(true);
});
