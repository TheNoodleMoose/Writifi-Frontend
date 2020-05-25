import React from "react";
import { renderWithContext } from "../../../testUtils";

import Signup from "..";

it("renders correctly", () => {
  renderWithContext(<Signup />).snapshot();
});
