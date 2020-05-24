import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders the app component", () => {
  const wrapper = render(<App />);
  expect(wrapper).toBeTruthy();
});
