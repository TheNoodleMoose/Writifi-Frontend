import React from "react";
import { renderWithContext } from "../../../testUtils";

import Home from "..";

it("renders correctly", () => {
  renderWithContext(<Home />).snapshot();
});
