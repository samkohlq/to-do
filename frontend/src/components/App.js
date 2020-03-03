import React from "react";
import { Container, Row } from "react-bootstrap";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Filter from "./Filter";

const App = () => (
  <Container>
    <Row className="mt-5">
      <AddTodo />
    </Row>
    <Row className="my-2">
      <Filter />
    </Row>
    <Row>
      <VisibleTodoList />
    </Row>
  </Container>
);

export default App;
