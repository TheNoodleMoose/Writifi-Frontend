import React from "react";
import { renderWithContext } from "../../../testUtils";

import Navbar from "..";

it("renders correctly", () => {
  renderWithContext(<Navbar />).snapshot();
});
