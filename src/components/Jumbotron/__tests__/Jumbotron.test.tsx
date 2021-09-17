import React from "react";
import { renderWithContext } from "../../../testUtils";

import Jumbotron from "..";

it("renders correctly", () => {
  renderWithContext(<Jumbotron />).snapshot();
});
