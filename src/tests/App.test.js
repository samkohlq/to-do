import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import Footer from "../components/Footer";

it("App component renders without crashing", () => {
  shallow(<App />);
});

test("Footer component renders without crashing", () => {
  shallow(<Footer />);
});
