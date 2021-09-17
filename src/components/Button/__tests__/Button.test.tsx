import React from "react";
import { renderWithContext } from "../../../testUtils";
import { fireEvent } from "@testing-library/react";

import Button from "..";

const mockClick = jest.fn();

it("renders correctly", () => {
  renderWithContext(<Button text="test" />).snapshot();
});

it("fires onClick", () => {
  const { getByTestId } = renderWithContext(
    <Button text="Click me" handleClick={mockClick} />
  );
  fireEvent.click(getByTestId("Button"));
  expect(mockClick).toHaveBeenCalled();
});
