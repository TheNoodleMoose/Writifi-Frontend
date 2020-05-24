import React from "react";
import { renderWithContext } from "../../../testUtils";

import Login from "..";

it("renders correctly", () => {
  renderWithContext(<Login />).snapshot();
});
